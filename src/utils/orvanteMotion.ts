export interface OrvanteMotionConfig {
    prefersReducedMotion: boolean;
}
export function initOrvanteChoreography(): void {
    if (typeof window === 'undefined')
        return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        document.querySelectorAll<HTMLElement>('.hero-mask-line > span').forEach((span) => {
            span.style.transform = 'translateY(0%)';
            span.style.opacity = '1';
        });
        const portraitStage = document.querySelector<HTMLElement>('.portrait-stage');
        if (portraitStage) {
            portraitStage.style.transform = 'translate(-50%, 0px) scale(1)';
            portraitStage.style.filter = 'blur(0px)';
            portraitStage.style.opacity = '1';
        }
        const topNav = document.querySelector<HTMLElement>('.top-nav');
        if (topNav) {
            topNav.style.transform = 'translateY(0px)';
            topNav.style.opacity = '1';
        }
        document.querySelectorAll<HTMLElement>('.card-progress-fill').forEach((bar) => {
            bar.style.transform = 'scaleX(1)';
        });
        return;
    }
    const maskedLines = document.querySelectorAll<HTMLElement>('.hero-mask-line > span');
    maskedLines.forEach((line, index) => {
        line.style.opacity = '1';
        line.animate([
            { transform: 'translateY(110%)', opacity: 0 },
            { transform: 'translateY(0%)', opacity: 1 },
        ], {
            duration: 1000,
            delay: index * 110,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
            fill: 'forwards',
        });
    });
    const portraitStage = document.querySelector<HTMLElement>('.portrait-stage');
    if (portraitStage) {
        portraitStage.animate([
            { transform: 'translate(-50%, 40px) scale(0.98)', filter: 'blur(16px)', opacity: 0 },
            { transform: 'translate(-50%, 0px) scale(1)', filter: 'blur(0px)', opacity: 1 },
        ], {
            duration: 1300,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            fill: 'forwards',
        });
    }
    const topNav = document.querySelector<HTMLElement>('.top-nav');
    if (topNav) {
        topNav.animate([
            { transform: 'translateY(-28px)', opacity: 0 },
            { transform: 'translateY(0px)', opacity: 1 },
        ], {
            duration: 800,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
            fill: 'forwards',
        });
    }
    const navLinksContainer = document.querySelector<HTMLElement>('.nav-links');
    if (navLinksContainer) {
        let slidingPill = navLinksContainer.querySelector<HTMLElement>('.nav-sliding-pill');
        if (!slidingPill) {
            slidingPill = document.createElement('div');
            slidingPill.className = 'nav-sliding-pill';
            navLinksContainer.prepend(slidingPill);
        }
        const links = navLinksContainer.querySelectorAll<HTMLAnchorElement>('.nav-link');
        const activeLink = navLinksContainer.querySelector<HTMLAnchorElement>('.nav-link.active');
        function positionPill(target: HTMLAnchorElement | null, opacity = 1) {
            if (!slidingPill || !target) {
                if (slidingPill)
                    slidingPill.style.opacity = '0';
                return;
            }
            const containerRect = navLinksContainer!.getBoundingClientRect();
            const targetRect = target.getBoundingClientRect();
            const left = targetRect.left - containerRect.left;
            const width = targetRect.width;
            slidingPill.style.transform = `translateX(${left}px)`;
            slidingPill.style.width = `${width}px`;
            slidingPill.style.opacity = `${opacity}`;
        }
        links.forEach((link) => {
            link.addEventListener('mouseenter', () => {
                links.forEach((l) => l.classList.remove('hovered'));
                link.classList.add('hovered');
                positionPill(link, 1);
            });
        });
        navLinksContainer.addEventListener('mouseleave', () => {
            links.forEach((l) => l.classList.remove('hovered'));
            if (activeLink) {
                positionPill(activeLink, 0.15);
            }
            else {
                positionPill(null, 0);
            }
        });
        if (activeLink) {
            setTimeout(() => positionPill(activeLink, 0.15), 300);
        }
    }
    const entranceElements: HTMLElement[] = [];
    const navStatus = document.querySelector<HTMLElement>('.nav-status');
    const counterBadge = document.querySelector<HTMLElement>('.counter-badge');
    const ctaBtn = document.querySelector<HTMLElement>('.top-nav .cta-btn');
    if (navStatus)
        entranceElements.push(navStatus);
    if (counterBadge)
        entranceElements.push(counterBadge);
    if (ctaBtn)
        entranceElements.push(ctaBtn);
    document.querySelectorAll<HTMLElement>('.home-tags .chip').forEach((c) => entranceElements.push(c));
    document.querySelectorAll<HTMLElement>('.home-list .home-card').forEach((c) => entranceElements.push(c));
    document.querySelectorAll<HTMLElement>('.home-about-brief .block').forEach((b) => entranceElements.push(b));
    entranceElements.forEach((el, index) => {
        el.animate([
            { transform: 'translateY(14px)', opacity: 0 },
            { transform: 'translateY(0px)', opacity: 1 },
        ], {
            duration: 750,
            delay: 200 + index * 55,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            fill: 'forwards',
        });
    });
    const progressBars = document.querySelectorAll<HTMLElement>('.card-progress-fill');
    progressBars.forEach((bar, index) => {
        bar.animate([
            { transform: 'scaleX(0)' },
            { transform: 'scaleX(1)' },
        ], {
            duration: 1200,
            delay: 400 + index * 80,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            fill: 'forwards',
        });
    });
    setupStatCounters();
    setupPortraitScrollDrift();
    setupWordScrollFill();
}
function setupStatCounters(): void {
    const counterElements = document.querySelectorAll<HTMLElement>('.counter-badge, .stat-counter, .tag-badge, .pillar-num');
    const observed = new Set<HTMLElement>();
    function runCounter(el: HTMLElement) {
        if (observed.has(el))
            return;
        observed.add(el);
        const originalText = el.textContent || '';
        const match = originalText.match(/(\d+)(\+|%|\b)/);
        if (!match)
            return;
        const fullMatch = match[0];
        const targetInt = parseInt(match[1], 10);
        const suffix = match[2] || '';
        const hasLeadingZero = match[1].length === 2 && match[1].startsWith('0');
        const isSingleBadge = originalText.trim() === fullMatch;
        const startTime = performance.now();
        const duration = 1400;
        function frame(now: number) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(ease * targetInt);
            let valStr = String(currentVal);
            if (hasLeadingZero && currentVal < 10) {
                valStr = '0' + valStr;
            }
            if (isSingleBadge) {
                el.textContent = `${valStr}${suffix}`;
            }
            else {
                el.textContent = originalText.replace(fullMatch, `${valStr}${suffix}`);
            }
            if (progress < 1) {
                requestAnimationFrame(frame);
            }
            else {
                el.textContent = originalText;
            }
        }
        requestAnimationFrame(frame);
    }
    const heroBadge = document.querySelector<HTMLElement>('.counter-badge');
    if (heroBadge)
        runCounter(heroBadge);
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    runCounter(entry.target as HTMLElement);
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        counterElements.forEach((el) => observer.observe(el));
    }
    else {
        counterElements.forEach((el) => runCounter(el));
    }
}
function setupPortraitScrollDrift(): void {
    const portraitWrapper = document.getElementById('portrait-wrapper');
    if (!portraitWrapper)
        return;
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                const drift = scrollY * 0.12;
                portraitWrapper.style.setProperty('--scroll-drift', `${drift}px`);
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}
function setupWordScrollFill(): void {
    const manifestoElements = document.querySelectorAll<HTMLElement>('.word-fill-text');
    if (manifestoElements.length === 0)
        return;
    manifestoElements.forEach((container) => {
        const rawText = container.textContent || '';
        const words = rawText.trim().split(/\s+/);
        container.innerHTML = '';
        const wordSpans: HTMLElement[] = [];
        words.forEach((word) => {
            const span = document.createElement('span');
            span.className = 'word-fill-word';
            span.textContent = word + ' ';
            container.appendChild(span);
            wordSpans.push(span);
        });
        function updateFill() {
            const rect = container.getBoundingClientRect();
            const windowH = window.innerHeight;
            const startY = windowH * 0.85;
            const endY = windowH * 0.35;
            const progress = Math.max(0, Math.min(1, (startY - rect.top) / (startY - endY)));
            const totalWords = wordSpans.length;
            const activeWordIndex = Math.floor(progress * totalWords);
            wordSpans.forEach((span, i) => {
                if (i < activeWordIndex - 2) {
                    span.style.color = 'var(--text-pure)';
                    span.style.opacity = '1';
                }
                else if (i === activeWordIndex - 2) {
                    span.style.color = 'var(--text-pure)';
                    span.style.opacity = '0.85';
                }
                else if (i === activeWordIndex - 1) {
                    span.style.color = 'var(--accent)';
                    span.style.opacity = '0.95';
                }
                else if (i === activeWordIndex) {
                    span.style.color = 'var(--accent)';
                    span.style.opacity = '0.70';
                }
                else {
                    span.style.color = 'var(--muted)';
                    span.style.opacity = '0.35';
                }
            });
        }
        window.addEventListener('scroll', updateFill, { passive: true });
        updateFill();
    });
}
