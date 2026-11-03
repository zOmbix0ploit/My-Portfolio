export function setupBentoDock(): void {
    const revealElements = document.querySelectorAll<HTMLElement>('.scroll-reveal');
    if (revealElements.length === 0)
        return;
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    obs.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px',
        });
        revealElements.forEach((el) => observer.observe(el));
    }
    else {
        revealElements.forEach((el) => el.classList.add('in-view'));
    }
}
