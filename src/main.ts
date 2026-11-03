import '@/styles/globals.css';
import { initFluidCanvas } from '@/components/canvas/FluidCanvas';
import { setupTopNav } from '@/components/layout/TopNav';
import { setupBioDrawer } from '@/components/layout/BioDrawer';
import { setupFooter } from '@/components/layout/Footer';
import { setupHeroSection } from '@/components/sections/HeroSection';
import { setupBentoDock } from '@/components/sections/BentoDock';
import { setupProjectModals } from '@/components/sections/ProjectModal';
import { secureExternalLinks, checkRateLimit } from '@/utils/security';
import { sanitizeInput, isValidEmail } from '@/utils/sanitizer';
import { initOrvanteChoreography } from '@/utils/orvanteMotion';
function initApp() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    const canvas = document.getElementById('bg') as HTMLCanvasElement | null;
    const fluidCanvas = canvas ? initFluidCanvas(canvas) : null;
    setupTopNav((newTheme) => {
        if (fluidCanvas) {
            fluidCanvas.setTheme(newTheme);
        }
    });
    setupBioDrawer();
    setupFooter();
    setupHeroSection();
    setupBentoDock();
    setupProjectModals();
    secureExternalLinks();
    initOrvanteChoreography();
    const contactForm = document.querySelector<HTMLFormElement>('.contact-form-box form');
    if (contactForm) {
        let honeypot = contactForm.querySelector<HTMLInputElement>('input[name="_hp_security_check"]');
        if (!honeypot) {
            honeypot = document.createElement('input');
            honeypot.type = 'text';
            honeypot.name = '_hp_security_check';
            honeypot.tabIndex = -1;
            honeypot.autocomplete = 'off';
            honeypot.style.cssText = 'position:absolute;left:-9999px;opacity:0;pointer-events:none;';
            contactForm.prepend(honeypot);
        }
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (honeypot && honeypot.value.trim() !== '') {
                return;
            }
            const rateLimit = checkRateLimit('contact_form', 15000);
            if (!rateLimit.allowed) {
                alert(`Transmission rate limit exceeded. Please wait ${rateLimit.remainingSec}s before transmitting.`);
                return;
            }
            const nameInput = contactForm.querySelector<HTMLInputElement>('#name');
            const emailInput = contactForm.querySelector<HTMLInputElement>('#email');
            const messageInput = contactForm.querySelector<HTMLTextAreaElement>('#message');
            const name = sanitizeInput(nameInput?.value || '');
            const email = (emailInput?.value || '').trim();
            const message = sanitizeInput(messageInput?.value || '');
            if (!name || name.length > 100) {
                alert('Please enter a valid entity / contact name (maximum 100 characters).');
                return;
            }
            if (!email || !isValidEmail(email)) {
                alert('Please enter a valid electronic mail address.');
                return;
            }
            if (!message || message.length > 2000) {
                alert('Please provide scope details (maximum 2000 characters).');
                return;
            }
            const submitBtn = contactForm.querySelector<HTMLButtonElement>('button[type="submit"]');
            if (submitBtn) {
                const originalText = submitBtn.textContent;
                submitBtn.disabled = true;
                submitBtn.textContent = 'TRANSMISSION DISPATCHED ->';
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    contactForm.reset();
                }, 3000);
            }
        });
    }
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
}
else {
    initApp();
}
