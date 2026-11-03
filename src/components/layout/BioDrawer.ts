import { SITE_CONFIG } from '@/constants/siteConfig';
export function setupBioDrawer(): void {
    const brandSub = document.querySelector('.brand-subtitle');
    if (brandSub) {
        brandSub.textContent = `Founder at ${SITE_CONFIG.company} · ${SITE_CONFIG.experienceYears}`;
    }
}
