export function clampMap(val: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
    if (inMin === inMax)
        return outMin;
    const t = Math.max(0, Math.min(1, (val - inMin) / (inMax - inMin)));
    return outMin + t * (outMax - outMin);
}
export function lerp(a: number, b: number, t: number): number {
    return a + (b - a) * t;
}
