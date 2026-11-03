import { SITE_CONFIG } from '@/constants/siteConfig';
export function setupTopNav(onThemeToggle?: (newTheme: string) => void): void {
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const cur = document.documentElement.getAttribute('data-theme') || 'light';
            const next = cur === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            if (onThemeToggle)
                onThemeToggle(next);
        });
    }
    const links = document.querySelectorAll<HTMLAnchorElement>('.top-nav a[target="_blank"]');
    links.forEach((a) => {
        a.setAttribute('rel', 'noopener noreferrer');
        if (a.href.includes('linkedin.com')) {
            a.href = SITE_CONFIG.linkedinUrl;
        }
    });
}
