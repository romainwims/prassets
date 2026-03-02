        // Mettre en noir l'item qui est aligné avec le point au centre
        const categoryItems = document.querySelectorAll('.category-item');
        const viewport = document.querySelector('.categories-viewport');
        const bullet = document.querySelector('.category-bullet');
        
        function updateActiveItem() {
            if (!bullet) return;
            
            // Position exacte du centre du viewport
            const viewportRect = viewport.getBoundingClientRect();
            const viewportCenter = viewportRect.top + (viewportRect.height / 2);
            
            let closestItem = null;
            let closestDistance = Infinity;
            
            // Trouver l'item le plus proche du centre
            categoryItems.forEach(item => {
                const itemRect = item.getBoundingClientRect();
                const itemCenter = itemRect.top + (itemRect.height / 2);
                const distance = Math.abs(itemCenter - viewportCenter);
                
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestItem = item;
                }
            });
            
            // Mettre en noir uniquement l'item le plus proche du centre
            categoryItems.forEach(item => {
                if (item === closestItem) {
                    item.style.color = '#1a1f36'; // Noir
                    item.style.fontWeight = '400';
                } else {
                    item.style.color = 'rgba(26, 31, 54, 0.35)'; // Gris clair
                    item.style.fontWeight = '400';
                }
            });
            
            requestAnimationFrame(updateActiveItem);
        }
        
        // Démarrer la détection
        requestAnimationFrame(updateActiveItem);
