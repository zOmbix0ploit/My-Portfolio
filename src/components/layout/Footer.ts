import { SITE_CONFIG } from '@/constants/siteConfig';
export function setupFooter(): void {
    const backLinks = document.querySelectorAll<HTMLAnchorElement>('.footer-back-link');
    backLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
    const copyrightEl = document.querySelector('.footer-inner > div');
    if (copyrightEl) {
        const year = new Date().getFullYear();
        copyrightEl.textContent = `${SITE_CONFIG.name} © ${year} · FOUNDER AT ${SITE_CONFIG.company.toUpperCase()} · ALL RIGHTS RESERVED`;
    }
}
