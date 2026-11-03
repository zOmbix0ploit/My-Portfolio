import { clampMap } from '@/utils/math';
export interface MouseState {
    x: number;
    y: number;
    prevX: number;
    prevY: number;
    normX: number;
    normY: number;
    targetCamX: number;
    targetCamY: number;
    lastMoveTime: number;
}
export function createMouseTracker(width: number, height: number, baseCamX = 0, baseCamY = 0) {
    const mouse: MouseState = {
        x: width * 0.5,
        y: height * 0.5,
        prevX: width * 0.5,
        prevY: height * 0.5,
        normX: 0,
        normY: 0,
        targetCamX: baseCamX,
        targetCamY: baseCamY,
        lastMoveTime: performance.now(),
    };
    function updatePointer(px: number, py: number, currentWidth: number, currentHeight: number, isMobile: boolean) {
        const now = performance.now();
        mouse.lastMoveTime = now;
        const dx = px - mouse.prevX;
        const dy = py - mouse.prevY;
        const len = Math.sqrt(dx * dx + dy * dy);
        const mx = (px / currentWidth) * 2 - 1;
        const my = (py / currentHeight) * 2 - 1;
        mouse.normX = mx;
        mouse.normY = my;
        mouse.targetCamX = baseCamX + mx * -1.0;
        mouse.targetCamY = baseCamY + my * 2.0;
        let splatData = null;
        if (len > 0.01) {
            const splatRadius = clampMap(len, 0, 5, 0, 60) * (isMobile ? 0.8 : 0.6);
            const forceMult = clampMap(len, 0, 15, 0, 10);
            splatData = {
                point: [px / currentWidth, 1.0 - py / currentHeight] as [
                    number,
                    number
                ],
                color: [dx * forceMult * 0.1, -dy * forceMult * 0.1, 1.0] as [
                    number,
                    number,
                    number
                ],
                radius: (splatRadius / 200.0) / (currentWidth / currentHeight),
                aspect: currentWidth / currentHeight,
            };
        }
        mouse.prevX = px;
        mouse.prevY = py;
        return splatData;
    }
    return { mouse, updatePointer };
}
