export function setupHeroSection(): void {
    const chips = document.querySelectorAll<HTMLButtonElement>('.home-tags .chip');
    const cards = document.querySelectorAll<HTMLElement>('.home-card');
    chips.forEach((chip) => {
        chip.addEventListener('click', () => {
            chips.forEach((c) => c.classList.remove('active'));
            chip.classList.add('active');
            const filter = chip.getAttribute('data-filter') || 'all';
            cards.forEach((card) => {
                const cats = card.getAttribute('data-category') || '';
                if (filter === 'all' || cats.includes(filter)) {
                    card.style.opacity = '1';
                    card.style.transform = 'translateX(0)';
                    card.style.pointerEvents = 'auto';
                }
                else {
                    card.style.opacity = '0.22';
                    card.style.transform = 'translateX(-4px)';
                    card.style.pointerEvents = 'none';
                }
            });
        });
    });
    const scrollIndicator = document.querySelector<HTMLAnchorElement>('.scroll-down-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.getElementById('showcase');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}
