import * as THREE from 'three';
import { baseQuadVertexShader, splatFragmentShader, advectFragmentShader, divergenceFragmentShader, pressureFragmentShader, gradSubtractFragmentShader, } from '@/shaders/fluid.glsl';
import { createParticleSystem, ParticleSystemInstance } from './ParticleRing';
import { getWindowSize } from '@/hooks/useWindowSize';
import { getDevicePerformanceProfile } from '@/hooks/useDevicePerformance';
import { createMouseTracker } from '@/hooks/useMouseFluid';
export interface FluidCanvasInstance {
    setTheme: (theme: string) => void;
    dispose: () => void;
}
export function initFluidCanvas(canvas: HTMLCanvasElement): FluidCanvasInstance | null {
    if (!canvas)
        return null;
    let { width, height, dpr, isMobile } = getWindowSize();
    const { simSize, particleCount } = getDevicePerformanceProfile();
    let isContextLost = false;
    let animFrameId = 0;
    let currentTheme = document.documentElement.getAttribute('data-theme') ||
        localStorage.getItem('theme') ||
        'light';
    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: false,
        alpha: true,
        powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(dpr);
    if (currentTheme === 'dark') {
        renderer.setClearColor(0x000000, 1.0);
    }
    else {
        renderer.setClearColor(0xf5f2eb, 0.0);
    }
    const gl = renderer.getContext();
    const isHalfFloat = gl.getExtension('OES_texture_half_float') ||
        gl.getExtension('EXT_color_buffer_half_float');
    const fboType = isHalfFloat ? THREE.HalfFloatType : THREE.FloatType;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 1000);
    const baseCamPos = new THREE.Vector3(0.0, 0.0, 6.0);
    camera.position.copy(baseCamPos);
    camera.lookAt(0, 0, 0);
    const orthoCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const orthoScene = new THREE.Scene();
    const quadGeom = new THREE.PlaneGeometry(2, 2);
    const quadMesh = new THREE.Mesh(quadGeom);
    orthoScene.add(quadMesh);
    function createFBO(w: number, h: number) {
        return new THREE.WebGLRenderTarget(w, h, {
            type: fboType,
            format: THREE.RGBAFormat,
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            depthBuffer: false,
            stencilBuffer: false,
        });
    }
    const SIM_RES = 256;
    const DYE_RES = 512;
    let velFBO_A = createFBO(SIM_RES, SIM_RES);
    let velFBO_B = createFBO(SIM_RES, SIM_RES);
    let dyeFBO_A = createFBO(DYE_RES, DYE_RES);
    let dyeFBO_B = createFBO(DYE_RES, DYE_RES);
    let divergenceFBO = createFBO(SIM_RES, SIM_RES);
    let pressureFBO_A = createFBO(SIM_RES, SIM_RES);
    let pressureFBO_B = createFBO(SIM_RES, SIM_RES);
    const splatMat = new THREE.ShaderMaterial({
        uniforms: {
            uTarget: { value: null },
            uPoint: { value: new THREE.Vector2() },
            uColor: { value: new THREE.Vector3() },
            uRadius: { value: 0.05 },
            uAspect: { value: width / height },
        },
        vertexShader: baseQuadVertexShader,
        fragmentShader: splatFragmentShader,
        depthTest: false,
        depthWrite: false,
    });
    const advectMat = new THREE.ShaderMaterial({
        uniforms: {
            uVelocity: { value: null },
            uSource: { value: null },
            uTexelSize: { value: new THREE.Vector2(1 / SIM_RES, 1 / SIM_RES) },
            uDelta: { value: 1.0 / 60.0 },
            uDissipation: { value: 0.98 },
        },
        vertexShader: baseQuadVertexShader,
        fragmentShader: advectFragmentShader,
        depthTest: false,
        depthWrite: false,
    });
    const divergenceMat = new THREE.ShaderMaterial({
        uniforms: {
            uVelocity: { value: null },
            uTexelSize: { value: new THREE.Vector2(1 / SIM_RES, 1 / SIM_RES) },
        },
        vertexShader: baseQuadVertexShader,
        fragmentShader: divergenceFragmentShader,
        depthTest: false,
        depthWrite: false,
    });
    const pressureMat = new THREE.ShaderMaterial({
        uniforms: {
            uPressure: { value: null },
            uDivergence: { value: null },
            uTexelSize: { value: new THREE.Vector2(1 / SIM_RES, 1 / SIM_RES) },
        },
        vertexShader: baseQuadVertexShader,
        fragmentShader: pressureFragmentShader,
        depthTest: false,
        depthWrite: false,
    });
    const gradSubtractMat = new THREE.ShaderMaterial({
        uniforms: {
            uPressure: { value: null },
            uVelocity: { value: null },
            uTexelSize: { value: new THREE.Vector2(1 / SIM_RES, 1 / SIM_RES) },
        },
        vertexShader: baseQuadVertexShader,
        fragmentShader: gradSubtractFragmentShader,
        depthTest: false,
        depthWrite: false,
    });
    let particleSystem: ParticleSystemInstance | null = createParticleSystem(simSize, particleCount, dpr, currentTheme, fboType);
    scene.add(particleSystem.group);
    const portraitWrapper = document.getElementById('portrait-wrapper');
    const { mouse, updatePointer } = createMouseTracker(width, height, baseCamPos.x, baseCamPos.y);
    function onPointer(px: number, py: number) {
        if (isContextLost)
            return;
        const splat = updatePointer(px, py, width, height, isMobile);
        if (splat) {
            splatMat.uniforms.uTarget.value = velFBO_A.texture;
            splatMat.uniforms.uPoint.value.set(splat.point[0], splat.point[1]);
            splatMat.uniforms.uColor.value.set(splat.color[0], splat.color[1], splat.color[2]);
            splatMat.uniforms.uRadius.value = splat.radius;
            splatMat.uniforms.uAspect.value = splat.aspect;
            quadMesh.material = splatMat;
            renderer.setRenderTarget(velFBO_B);
            renderer.render(orthoScene, orthoCam);
            let tempV = velFBO_A;
            velFBO_A = velFBO_B;
            velFBO_B = tempV;
            splatMat.uniforms.uTarget.value = dyeFBO_A.texture;
            splatMat.uniforms.uColor.value.set(1.0, 1.0, 1.0);
            renderer.setRenderTarget(dyeFBO_B);
            renderer.render(orthoScene, orthoCam);
            let tempD = dyeFBO_A;
            dyeFBO_A = dyeFBO_B;
            dyeFBO_B = tempD;
            renderer.setRenderTarget(null);
        }
    }
    const pointerMoveHandler = (e: PointerEvent) => onPointer(e.clientX, e.clientY);
    const touchMoveHandler = (e: TouchEvent) => {
        if (e.touches.length > 0) {
            onPointer(e.touches[0].clientX, e.touches[0].clientY);
        }
    };
    window.addEventListener('pointermove', pointerMoveHandler, { passive: true });
    window.addEventListener('touchmove', touchMoveHandler, { passive: true });
    function stepFluid(dt: number) {
        advectMat.uniforms.uVelocity.value = velFBO_A.texture;
        advectMat.uniforms.uSource.value = velFBO_A.texture;
        advectMat.uniforms.uDelta.value = dt;
        advectMat.uniforms.uDissipation.value = 0.98;
        advectMat.uniforms.uTexelSize.value.set(1 / SIM_RES, 1 / SIM_RES);
        quadMesh.material = advectMat;
        renderer.setRenderTarget(velFBO_B);
        renderer.render(orthoScene, orthoCam);
        let tV = velFBO_A;
        velFBO_A = velFBO_B;
        velFBO_B = tV;
        advectMat.uniforms.uVelocity.value = velFBO_A.texture;
        advectMat.uniforms.uSource.value = dyeFBO_A.texture;
        advectMat.uniforms.uDissipation.value = 0.97;
        renderer.setRenderTarget(dyeFBO_B);
        renderer.render(orthoScene, orthoCam);
        let tD = dyeFBO_A;
        dyeFBO_A = dyeFBO_B;
        dyeFBO_B = tD;
        divergenceMat.uniforms.uVelocity.value = velFBO_A.texture;
        quadMesh.material = divergenceMat;
        renderer.setRenderTarget(divergenceFBO);
        renderer.render(orthoScene, orthoCam);
        pressureMat.uniforms.uDivergence.value = divergenceFBO.texture;
        quadMesh.material = pressureMat;
        for (let i = 0; i < 5; i++) {
            pressureMat.uniforms.uPressure.value = pressureFBO_A.texture;
            renderer.setRenderTarget(pressureFBO_B);
            renderer.render(orthoScene, orthoCam);
            let tP = pressureFBO_A;
            pressureFBO_A = pressureFBO_B;
            pressureFBO_B = tP;
        }
        gradSubtractMat.uniforms.uPressure.value = pressureFBO_A.texture;
        gradSubtractMat.uniforms.uVelocity.value = velFBO_A.texture;
        quadMesh.material = gradSubtractMat;
        renderer.setRenderTarget(velFBO_B);
        renderer.render(orthoScene, orthoCam);
        tV = velFBO_A;
        velFBO_A = velFBO_B;
        velFBO_B = tV;
        renderer.setRenderTarget(null);
    }
    const clock = new THREE.Clock();
    function animate() {
        if (isContextLost)
            return;
        animFrameId = requestAnimationFrame(animate);
        const dt = Math.min(clock.getDelta(), 0.05);
        const time = clock.getElapsedTime();
        const HZ = dt * 60.0;
        stepFluid(dt);
        camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.targetCamX, 0.05);
        camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.targetCamY, 0.05);
        camera.lookAt(0, 0, 0);
        if (portraitWrapper) {
            const px = mouse.normX * -14;
            const py = mouse.normY * -8;
            portraitWrapper.style.transform = `translate3d(${px}px, ${py}px, 0)`;
        }
        if (particleSystem) {
            particleSystem.stepSimulation(renderer, orthoScene, orthoCam, quadMesh, velFBO_A.texture, dyeFBO_A.texture, time, HZ, camera);
        }
        renderer.render(scene, camera);
    }
    animate();
    const resizeHandler = () => {
        const size = getWindowSize();
        width = size.width;
        height = size.height;
        dpr = size.dpr;
        isMobile = size.isMobile;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
        splatMat.uniforms.uAspect.value = width / height;
    };
    window.addEventListener('resize', resizeHandler);
    const contextLostHandler = (e: Event) => {
        e.preventDefault();
        isContextLost = true;
        cancelAnimationFrame(animFrameId);
    };
    const contextRestoredHandler = () => {
        isContextLost = false;
        velFBO_A = createFBO(SIM_RES, SIM_RES);
        velFBO_B = createFBO(SIM_RES, SIM_RES);
        dyeFBO_A = createFBO(DYE_RES, DYE_RES);
        dyeFBO_B = createFBO(DYE_RES, DYE_RES);
        divergenceFBO = createFBO(SIM_RES, SIM_RES);
        pressureFBO_A = createFBO(SIM_RES, SIM_RES);
        pressureFBO_B = createFBO(SIM_RES, SIM_RES);
        animate();
    };
    canvas.addEventListener('webglcontextlost', contextLostHandler, false);
    canvas.addEventListener('webglcontextrestored', contextRestoredHandler, false);
    function setTheme(theme: string) {
        currentTheme = theme;
        const isDark = theme === 'dark';
        if (isDark) {
            renderer.setClearColor(0x000000, 1.0);
        }
        else {
            renderer.setClearColor(0xf5f2eb, 0.0);
        }
        if (particleSystem) {
            particleSystem.updateTheme(isDark);
        }
    }
    function dispose() {
        cancelAnimationFrame(animFrameId);
        window.removeEventListener('pointermove', pointerMoveHandler);
        window.removeEventListener('touchmove', touchMoveHandler);
        window.removeEventListener('resize', resizeHandler);
        canvas.removeEventListener('webglcontextlost', contextLostHandler);
        canvas.removeEventListener('webglcontextrestored', contextRestoredHandler);
        velFBO_A.dispose();
        velFBO_B.dispose();
        dyeFBO_A.dispose();
        dyeFBO_B.dispose();
        divergenceFBO.dispose();
        pressureFBO_A.dispose();
        pressureFBO_B.dispose();
        splatMat.dispose();
        advectMat.dispose();
        divergenceMat.dispose();
        pressureMat.dispose();
        gradSubtractMat.dispose();
        quadGeom.dispose();
        if (particleSystem) {
            particleSystem.dispose();
            scene.remove(particleSystem.group);
            particleSystem = null;
        }
        renderer.dispose();
    }
    return {
        setTheme,
        dispose,
    };
}
