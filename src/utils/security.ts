export function checkRateLimit(key: string, cooldownMs = 15000): {
    allowed: boolean;
    remainingSec: number;
} {
    try {
        const storageKey = `rate_limit_${key}`;
        const lastTimestamp = parseInt(localStorage.getItem(storageKey) || '0', 10);
        const now = Date.now();
        const elapsed = now - lastTimestamp;
        if (elapsed < cooldownMs) {
            return {
                allowed: false,
                remainingSec: Math.ceil((cooldownMs - elapsed) / 1000),
            };
        }
        localStorage.setItem(storageKey, now.toString());
        return { allowed: true, remainingSec: 0 };
    }
    catch {
        return { allowed: true, remainingSec: 0 };
    }
}
export function secureExternalLinks(): void {
    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]');
    anchors.forEach((a) => {
        const currentRel = (a.getAttribute('rel') || '').toLowerCase();
        if (!currentRel.includes('noopener') || !currentRel.includes('noreferrer')) {
            a.setAttribute('rel', 'noopener noreferrer');
        }
    });
}
