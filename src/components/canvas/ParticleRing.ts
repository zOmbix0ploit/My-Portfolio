import * as THREE from 'three';
import { particleSimFragmentShader, particleRenderVertexShader, particleRenderFragmentShader } from '@/shaders/particles.glsl';
import { baseQuadVertexShader } from '@/shaders/fluid.glsl';
export interface ParticleSystemInstance {
    group: THREE.Group;
    renderMat: THREE.ShaderMaterial;
    simMat: THREE.ShaderMaterial;
    stepSimulation: (renderer: THREE.WebGLRenderer, orthoScene: THREE.Scene, orthoCam: THREE.Camera, quadMesh: THREE.Mesh, fluidVelTex: THREE.Texture, fluidDensityTex: THREE.Texture, time: number, hz: number, camera: THREE.PerspectiveCamera) => void;
    updateTheme: (isDark: boolean) => void;
    dispose: () => void;
}
export function createParticleSystem(simSize: number, particleCount: number, dpr: number, currentTheme: string, fboType: THREE.TextureDataType): ParticleSystemInstance {
    const isDark = currentTheme === 'dark';
    const group = new THREE.Group();
    group.position.set(0.0, -0.05, -1);
    group.rotation.set(THREE.MathUtils.degToRad(-28.4), THREE.MathUtils.degToRad(390), THREE.MathUtils.degToRad(4.92));
    group.scale.set(5, 5, 6);
    function createFBO(w: number, h: number) {
        return new THREE.WebGLRenderTarget(w, h, {
            type: fboType,
            format: THREE.RGBAFormat,
            minFilter: THREE.NearestFilter,
            magFilter: THREE.NearestFilter,
            depthBuffer: false,
            stencilBuffer: false,
        });
    }
    let posFBO_A = createFBO(simSize, simSize);
    let posFBO_B = createFBO(simSize, simSize);
    const originData = new Float32Array(particleCount * 4);
    for (let i = 0; i < particleCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        const r = 0.4 + Math.random() * 0.3;
        originData[i * 4 + 0] = r * Math.sin(phi) * Math.cos(theta);
        originData[i * 4 + 1] = r * Math.sin(phi) * Math.sin(theta);
        originData[i * 4 + 2] = (Math.random() * 2 - 1) * 0.35;
        originData[i * 4 + 3] = 1.0;
    }
    const originTex = new THREE.DataTexture(originData, simSize, simSize, THREE.RGBAFormat, THREE.FloatType);
    originTex.needsUpdate = true;
    const simMat = new THREE.ShaderMaterial({
        uniforms: {
            uCurrentPos: { value: null },
            uOriginTex: { value: originTex },
            uFluidVelocity: { value: null },
            uFluidDensity: { value: null },
            uTime: { value: 0.0 },
            uHZ: { value: 1.0 },
            uModelMatrix: { value: new THREE.Matrix4() },
            uProjectionMatrix: { value: new THREE.Matrix4() },
            uCamWorldRot: { value: new THREE.Matrix3() },
        },
        vertexShader: baseQuadVertexShader,
        fragmentShader: particleSimFragmentShader,
        depthTest: false,
        depthWrite: false,
    });
    const textureLoader = new THREE.TextureLoader();
    const matcapGrey = textureLoader.load('assets/images/matcap-grey.png');
    const matcapBronze = textureLoader.load('assets/images/matcap-bronze.png');
    const particleGeom = new THREE.BufferGeometry();
    const uvs = new Float32Array(particleCount * 2);
    const randoms = new Float32Array(particleCount * 4);
    for (let y = 0; y < simSize; y++) {
        for (let x = 0; x < simSize; x++) {
            const i = y * simSize + x;
            uvs[i * 2 + 0] = (x + 0.5) / simSize;
            uvs[i * 2 + 1] = (y + 0.5) / simSize;
            randoms[i * 4 + 0] = Math.random();
            randoms[i * 4 + 1] = Math.random();
            randoms[i * 4 + 2] = Math.random();
            randoms[i * 4 + 3] = Math.random();
        }
    }
    particleGeom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(particleCount * 3), 3));
    particleGeom.setAttribute('aUv', new THREE.BufferAttribute(uvs, 2));
    particleGeom.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 4));
    const renderMat = new THREE.ShaderMaterial({
        uniforms: {
            uPosTex: { value: null },
            uMatcapGrey: { value: matcapGrey },
            uMatcapBronze: { value: matcapBronze },
            uTheme: { value: isDark ? 1.0 : 0.0 },
            uTime: { value: 0.0 },
            uDPR: { value: dpr },
        },
        vertexShader: particleRenderVertexShader,
        fragmentShader: particleRenderFragmentShader,
        transparent: true,
        depthTest: true,
        depthWrite: false,
        blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    const points = new THREE.Points(particleGeom, renderMat);
    group.add(points);
    function stepSimulation(renderer: THREE.WebGLRenderer, orthoScene: THREE.Scene, orthoCam: THREE.Camera, quadMesh: THREE.Mesh, fluidVelTex: THREE.Texture, fluidDensityTex: THREE.Texture, time: number, hz: number, camera: THREE.PerspectiveCamera) {
        camera.updateMatrixWorld();
        group.updateMatrixWorld();
        const projMatrix = new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
        const camWorldRot = new THREE.Matrix3().setFromMatrix4(camera.matrixWorld);
        simMat.uniforms.uCurrentPos.value = posFBO_A.texture;
        simMat.uniforms.uFluidVelocity.value = fluidVelTex;
        simMat.uniforms.uFluidDensity.value = fluidDensityTex;
        simMat.uniforms.uTime.value = time;
        simMat.uniforms.uHZ.value = hz;
        simMat.uniforms.uModelMatrix.value.copy(group.matrixWorld);
        simMat.uniforms.uProjectionMatrix.value.copy(projMatrix);
        simMat.uniforms.uCamWorldRot.value.copy(camWorldRot);
        quadMesh.material = simMat;
        renderer.setRenderTarget(posFBO_B);
        renderer.render(orthoScene, orthoCam);
        renderer.setRenderTarget(null);
        const temp = posFBO_A;
        posFBO_A = posFBO_B;
        posFBO_B = temp;
        renderMat.uniforms.uPosTex.value = posFBO_A.texture;
        renderMat.uniforms.uTime.value = time;
    }
    function updateTheme(dark: boolean) {
        renderMat.uniforms.uTheme.value = dark ? 1.0 : 0.0;
        renderMat.blending = dark ? THREE.AdditiveBlending : THREE.NormalBlending;
        renderMat.needsUpdate = true;
    }
    function dispose() {
        posFBO_A.dispose();
        posFBO_B.dispose();
        originTex.dispose();
        matcapGrey.dispose();
        matcapBronze.dispose();
        particleGeom.dispose();
        simMat.dispose();
        renderMat.dispose();
    }
    return {
        group,
        renderMat,
        simMat,
        stepSimulation,
        updateTheme,
        dispose,
    };
}
