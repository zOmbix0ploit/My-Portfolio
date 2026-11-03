export interface WindowSize {
    width: number;
    height: number;
    dpr: number;
    isMobile: boolean;
}
export function getWindowSize(): WindowSize {
    const width = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const height = typeof window !== 'undefined' ? window.innerHeight : 800;
    const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1;
    const isMobile = width <= 760;
    return { width, height, dpr, isMobile };
}
