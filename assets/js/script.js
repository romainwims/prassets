        // ===== ANIMATION CATÉGORIES (slot machine) =====
        const categoryItems = document.querySelectorAll('.category-item');
        const viewport = document.querySelector('.categories-viewport');
        const bullet = document.querySelector('.category-bullet');

        function updateActiveItem() {
            if (!bullet || !viewport) return;

            const viewportRect = viewport.getBoundingClientRect();
            const viewportCenter = viewportRect.top + (viewportRect.height / 2);

            let closestItem = null;
            let closestDistance = Infinity;

            categoryItems.forEach(item => {
                const itemRect = item.getBoundingClientRect();
                const itemCenter = itemRect.top + (itemRect.height / 2);
                const distance = Math.abs(itemCenter - viewportCenter);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestItem = item;
                }
            });

            categoryItems.forEach(item => {
                item.style.color = item === closestItem
                    ? '#1a1f36'
                    : 'rgba(26, 31, 54, 0.35)';
            });

            requestAnimationFrame(updateActiveItem);
        }

        requestAnimationFrame(updateActiveItem);


        // ===== ANIMATION CERCLES CHIFFRES CLÉS =====
        const CIRCUMFERENCE = 2 * Math.PI * 52; // 326.73

        function animateRing(circle, targetPercent) {
            const offset = CIRCUMFERENCE * (1 - targetPercent / 100);
            circle.style.strokeDashoffset = offset;
        }

        function animateCounter(el, target, duration) {
            const prefix = el.dataset.prefix || '';
            const suffix = el.dataset.suffix || '';
            const decimals = parseInt(el.dataset.decimals || '0');
            const start = performance.now();

            function update(now) {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                const current = eased * target;
                const display = decimals > 0
                    ? current.toFixed(decimals).replace('.', ',')
                    : Math.round(current).toString();
                el.textContent = prefix + display + suffix;
                if (progress < 1) requestAnimationFrame(update);
            }

            requestAnimationFrame(update);
        }

        const statsSection = document.querySelector('.stats-section');

        if (statsSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;

                    // Animer les cercles
                    statsSection.querySelectorAll('.ring-fill').forEach(circle => {
                        const percent = parseFloat(circle.dataset.percent);
                        animateRing(circle, percent);
                    });

                    // Animer les compteurs
                    statsSection.querySelectorAll('[data-target]').forEach(el => {
                        const target = parseFloat(el.dataset.target);
                        animateCounter(el, target, 2000);
                    });

                    observer.unobserve(statsSection);
                });
            }, { threshold: 0.3 });

            observer.observe(statsSection);
        }
