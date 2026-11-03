export interface PerformanceProfile {
    simSize: number;
    particleCount: number;
    isHighEnd: boolean;
}
export function getDevicePerformanceProfile(): PerformanceProfile {
    if (typeof window === 'undefined') {
        return { simSize: 512, particleCount: 262144, isHighEnd: true };
    }
    const isMobile = window.innerWidth <= 760;
    const memory = (navigator as unknown as {
        deviceMemory?: number;
    }).deviceMemory || 4;
    const cores = navigator.hardwareConcurrency || 4;
    const isHighEnd = !isMobile && memory >= 4 && cores >= 4;
    const simSize = isMobile ? 128 : isHighEnd ? 512 : 256;
    const particleCount = simSize * simSize;
    return { simSize, particleCount, isHighEnd };
}
