        // ===== CALENDLY POPUP =====
        const CALENDLY_URL = 'https://calendly.com/romain-wims/rendez-vous-decouverte-offert';

        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('[data-calendly]').forEach(el => {
                el.addEventListener('click', e => {
                    e.preventDefault();
                    if (window.Calendly) {
                        Calendly.initPopupWidget({ url: CALENDLY_URL });
                    } else {
                        window.open(CALENDLY_URL, '_blank');
                    }
                });
            });
        });

        // ===== BANDEAUX DÉFILANTS INFINIS =====
        function initMarquee(section, trackSelector, speed) {
            const track = section.querySelector(trackSelector);
            if (!track) return;

            track.style.animation = 'none';
            track.style.transform = 'translateX(0)';

            const firstSet = track.firstElementChild;
            if (!firstSet) return;

            const setWidth = firstSet.offsetWidth;

            while (track.offsetWidth < window.innerWidth * 3) {
                const clone = firstSet.cloneNode(true);
                clone.setAttribute('aria-hidden', 'true');
                clone.querySelectorAll('defs').forEach(d => d.remove());
                track.appendChild(clone);
            }

            let x = 0;
            let hovered = false;
            let lastTs = null;
            let rafId = null;

            section.addEventListener('mouseenter', () => { hovered = true; });
            section.addEventListener('mouseleave', () => { hovered = false; });

            function tick(ts) {
                if (lastTs !== null && !hovered) {
                    x -= speed * (ts - lastTs) / 1000;
                    if (x <= -setWidth) x += setWidth;
                    track.style.transform = 'translateX(' + x + 'px)';
                }
                lastTs = ts;
                rafId = requestAnimationFrame(tick);
            }

            // Démarrer/arrêter l'animation selon la visibilité de la section
            const observer = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting) {
                    lastTs = null; // reset pour éviter un saut de position
                    rafId = requestAnimationFrame(tick);
                } else {
                    cancelAnimationFrame(rafId);
                    rafId = null;
                }
            }, { threshold: 0.1 });

            observer.observe(section);
        }

        const productsBanner = document.querySelector('.products-banner');
        const partnersBanner = document.querySelector('.partners-banner');
        if (productsBanner) initMarquee(productsBanner, '.products-track', 45);
        if (partnersBanner) initMarquee(partnersBanner, '.partners-track', 30);


        // ===== ANIMATION CATÉGORIES (slot machine) =====
        const categoryItems = document.querySelectorAll('.category-item');
        const viewport = document.querySelector('.categories-viewport');
        const bullet = document.querySelector('.category-bullet');

        if (bullet && viewport && categoryItems.length) {
            let activeRafId = null;

            function updateActiveItem() {
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

                activeRafId = requestAnimationFrame(updateActiveItem);
            }

            // Démarrer/arrêter selon la visibilité de la section
            const sectionToObserve = viewport.closest('section') || viewport.parentElement;
            const categoriesObserver = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting) {
                    activeRafId = requestAnimationFrame(updateActiveItem);
                } else {
                    cancelAnimationFrame(activeRafId);
                    activeRafId = null;
                }
            }, { threshold: 0.1 });

            categoriesObserver.observe(sectionToObserve);
        }
