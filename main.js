(function () {
    'use strict';
    if (typeof THREE === 'undefined') {
        const s = document.createElement('script');
        s.src = 'three.min.js';
        s.onload = initPortfolio;
        document.head.appendChild(s);
    }
    else {
        initPortfolio();
    }
    function initPortfolio() {
        const canvas = document.getElementById('bg');
        const portraitWrapper = document.getElementById('portrait-wrapper');
        if (!canvas)
            return;
        let width = window.innerWidth;
        let height = window.innerHeight;
        const isMobile = width <= 760;
        const SIM_SIZE = isMobile ? 128 : 512;
        const PARTICLE_COUNT = SIM_SIZE * SIM_SIZE;
        let currentTheme = document.documentElement.getAttribute('data-theme') || localStorage.getItem('theme') || 'light';
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: false,
            alpha: true,
            powerPreference: 'high-performance'
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(dpr);
        if (currentTheme === 'dark') {
            renderer.setClearColor(0x000000, 1.0);
        }
        else {
            renderer.setClearColor(0xF5F2EB, 0.0);
        }
        const gl = renderer.getContext();
        const isHalfFloat = gl.getExtension('OES_texture_half_float') || gl.getExtension('EXT_color_buffer_half_float');
        const fboType = isHalfFloat ? THREE.HalfFloatType : THREE.FloatType;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 1000);
        const baseCamPos = new THREE.Vector3(-1.17, 0, 6);
        camera.position.copy(baseCamPos);
        camera.lookAt(0, 0, 0);
        const particleGroup = new THREE.Group();
        particleGroup.position.set(0.343, 0.16, -1);
        particleGroup.rotation.set(THREE.MathUtils.degToRad(-28.4), THREE.MathUtils.degToRad(390), THREE.MathUtils.degToRad(4.92));
        particleGroup.scale.set(5, 5, 6);
        scene.add(particleGroup);
        function createFBO(w, h, type, filter) {
            return new THREE.WebGLRenderTarget(w, h, {
                type: type || fboType,
                format: THREE.RGBAFormat,
                minFilter: filter || THREE.LinearFilter,
                magFilter: filter || THREE.LinearFilter,
                depthBuffer: false,
                stencilBuffer: false
            });
        }
        const orthoCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const orthoScene = new THREE.Scene();
        const quadGeom = new THREE.PlaneGeometry(2, 2);
        const quadMesh = new THREE.Mesh(quadGeom);
        orthoScene.add(quadMesh);
        const SIM_RES = 256;
        const DYE_RES = 512;
        let velFBO_A = createFBO(SIM_RES, SIM_RES, fboType);
        let velFBO_B = createFBO(SIM_RES, SIM_RES, fboType);
        let dyeFBO_A = createFBO(DYE_RES, DYE_RES, fboType);
        let dyeFBO_B = createFBO(DYE_RES, DYE_RES, fboType);
        let divergenceFBO = createFBO(SIM_RES, SIM_RES, fboType);
        let pressureFBO_A = createFBO(SIM_RES, SIM_RES, fboType);
        let pressureFBO_B = createFBO(SIM_RES, SIM_RES, fboType);
        const splatMat = new THREE.ShaderMaterial({
            uniforms: {
                uTarget: { value: null },
                uPoint: { value: new THREE.Vector2() },
                uColor: { value: new THREE.Vector3() },
                uRadius: { value: 0.05 },
                uAspect: { value: width / height }
            },
            vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
            fragmentShader: `
        precision highp float;
        uniform sampler2D uTarget;
        uniform vec2 uPoint;
        uniform vec3 uColor;
        uniform float uRadius;
        uniform float uAspect;
        varying vec2 vUv;

        void main() {
          vec2 p = vUv - uPoint;
          p.x *= uAspect;
          vec3 splat = exp(-dot(p, p) / (uRadius * uRadius)) * uColor;
          vec3 base = texture2D(uTarget, vUv).xyz;
          gl_FragColor = vec4(base + splat, 1.0);
        }
      `,
            depthTest: false,
            depthWrite: false
        });
        const advectMat = new THREE.ShaderMaterial({
            uniforms: {
                uVelocity: { value: null },
                uSource: { value: null },
                uTexelSize: { value: new THREE.Vector2(1 / SIM_RES, 1 / SIM_RES) },
                uDelta: { value: 1.0 / 60.0 },
                uDissipation: { value: 0.98 }
            },
            vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
            fragmentShader: `
        precision highp float;
        uniform sampler2D uVelocity;
        uniform sampler2D uSource;
        uniform vec2 uTexelSize;
        uniform float uDelta;
        uniform float uDissipation;
        varying vec2 vUv;

        void main() {
          vec2 coord = vUv - uDelta * texture2D(uVelocity, vUv).xy * uTexelSize;
          gl_FragColor = uDissipation * texture2D(uSource, coord);
        }
      `,
            depthTest: false,
            depthWrite: false
        });
        const divergenceMat = new THREE.ShaderMaterial({
            uniforms: {
                uVelocity: { value: null },
                uTexelSize: { value: new THREE.Vector2(1 / SIM_RES, 1 / SIM_RES) }
            },
            vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
            fragmentShader: `
        precision highp float;
        uniform sampler2D uVelocity;
        uniform vec2 uTexelSize;
        varying vec2 vUv;

        void main() {
          float L = texture2D(uVelocity, vUv - vec2(uTexelSize.x, 0.0)).x;
          float R = texture2D(uVelocity, vUv + vec2(uTexelSize.x, 0.0)).x;
          float B = texture2D(uVelocity, vUv - vec2(0.0, uTexelSize.y)).y;
          float T = texture2D(uVelocity, vUv + vec2(0.0, uTexelSize.y)).y;
          float div = 0.5 * (R - L + T - B);
          gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
        }
      `,
            depthTest: false,
            depthWrite: false
        });
        const pressureMat = new THREE.ShaderMaterial({
            uniforms: {
                uPressure: { value: null },
                uDivergence: { value: null },
                uTexelSize: { value: new THREE.Vector2(1 / SIM_RES, 1 / SIM_RES) }
            },
            vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
            fragmentShader: `
        precision highp float;
        uniform sampler2D uPressure;
        uniform sampler2D uDivergence;
        uniform vec2 uTexelSize;
        varying vec2 vUv;

        void main() {
          float L = texture2D(uPressure, vUv - vec2(uTexelSize.x, 0.0)).x;
          float R = texture2D(uPressure, vUv + vec2(uTexelSize.x, 0.0)).x;
          float B = texture2D(uPressure, vUv - vec2(0.0, uTexelSize.y)).x;
          float T = texture2D(uPressure, vUv + vec2(0.0, uTexelSize.y)).x;
          float div = texture2D(uDivergence, vUv).x;
          float p = (L + R + B + T - div) * 0.25;
          gl_FragColor = vec4(p * 0.95, 0.0, 0.0, 1.0);
        }
      `,
            depthTest: false,
            depthWrite: false
        });
        const gradSubtractMat = new THREE.ShaderMaterial({
            uniforms: {
                uPressure: { value: null },
                uVelocity: { value: null },
                uTexelSize: { value: new THREE.Vector2(1 / SIM_RES, 1 / SIM_RES) }
            },
            vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
            fragmentShader: `
        precision highp float;
        uniform sampler2D uPressure;
        uniform sampler2D uVelocity;
        uniform vec2 uTexelSize;
        varying vec2 vUv;

        void main() {
          float L = texture2D(uPressure, vUv - vec2(uTexelSize.x, 0.0)).x;
          float R = texture2D(uPressure, vUv + vec2(uTexelSize.x, 0.0)).x;
          float B = texture2D(uPressure, vUv - vec2(0.0, uTexelSize.y)).x;
          float T = texture2D(uPressure, vUv + vec2(0.0, uTexelSize.y)).x;
          vec2 vel = texture2D(uVelocity, vUv).xy - 0.5 * vec2(R - L, T - B);
          gl_FragColor = vec4(vel, 0.0, 1.0);
        }
      `,
            depthTest: false,
            depthWrite: false
        });
        let posFBO_A = createFBO(SIM_SIZE, SIM_SIZE, THREE.FloatType, THREE.NearestFilter);
        let posFBO_B = createFBO(SIM_SIZE, SIM_SIZE, THREE.FloatType, THREE.NearestFilter);
        const originData = new Float32Array(PARTICLE_COUNT * 4);
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(Math.random() * 2 - 1);
            const r = 0.4 + Math.random() * 0.3;
            originData[i * 4 + 0] = r * Math.sin(phi) * Math.cos(theta);
            originData[i * 4 + 1] = r * Math.sin(phi) * Math.sin(theta);
            originData[i * 4 + 2] = (Math.random() * 2 - 1) * 0.35;
            originData[i * 4 + 3] = 1.0;
        }
        const originTex = new THREE.DataTexture(originData, SIM_SIZE, SIM_SIZE, THREE.RGBAFormat, THREE.FloatType);
        originTex.needsUpdate = true;
        const initMat = new THREE.ShaderMaterial({
            uniforms: { uTex: { value: originTex } },
            vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
            fragmentShader: `uniform sampler2D uTex; varying vec2 vUv; void main() { gl_FragColor = texture2D(uTex, vUv); }`
        });
        quadMesh.material = initMat;
        renderer.setRenderTarget(posFBO_A);
        renderer.render(orthoScene, orthoCam);
        renderer.setRenderTarget(posFBO_B);
        renderer.render(orthoScene, orthoCam);
        renderer.setRenderTarget(null);
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
                uCamWorldRot: { value: new THREE.Matrix3() }
            },
            vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
            fragmentShader: `
        precision highp float;
        uniform sampler2D uCurrentPos;
        uniform sampler2D uOriginTex;
        uniform sampler2D uFluidVelocity;
        uniform sampler2D uFluidDensity;
        uniform float uTime;
        uniform float uHZ;
        uniform mat4 uModelMatrix;
        uniform mat4 uProjectionMatrix;
        uniform mat3 uCamWorldRot;
        varying vec2 vUv;

        // Analytic Curl Noise
        vec3 potential(vec3 p) {
          return vec3(
            sin(p.y + cos(p.z * 1.5)) * 0.5 + sin(p.z * 0.8),
            sin(p.z + cos(p.x * 1.5)) * 0.5 + sin(p.x * 0.8),
            sin(p.x + cos(p.y * 1.5)) * 0.5 + sin(p.y * 0.8)
          );
        }

        vec3 curlNoise(vec3 p) {
          const float e = 0.001;
          vec3 dx = vec3(e, 0.0, 0.0);
          vec3 dy = vec3(0.0, e, 0.0);
          vec3 dz = vec3(0.0, 0.0, e);

          vec3 p_x0 = potential(p - dx);
          vec3 p_x1 = potential(p + dx);
          vec3 p_y0 = potential(p - dy);
          vec3 p_y1 = potential(p + dy);
          vec3 p_z0 = potential(p - dz);
          vec3 p_z1 = potential(p + dz);

          float x = (p_y1.z - p_y0.z) - (p_z1.y - p_z0.y);
          float y = (p_z1.x - p_z0.x) - (p_x1.z - p_x0.z);
          float z = (p_x1.y - p_x0.y) - (p_y1.x - p_y0.x);

          return normalize(vec3(x, y, z) / (2.0 * e));
        }

        // Signed Distance Function: Bent sculpted torus framing the core
        float sdfShape(vec3 p) {
          p.z = sqrt(p.z * p.z + 0.0215) - sqrt(0.012);

          const vec4 q = vec4(0.5, 0.5, 0.5, 0.5);
          vec3 qv = q.xyz;
          float qw = q.w;
          p = p + 2.0 * cross(qv, cross(qv, p) + qw * p);

          if (length(p) > 0.85) return length(p) - 0.7;

          vec2 ring = vec2(length(p.xz) - 0.46, p.y);
          float d = length(ring) - 0.12;
          d += sin(p.x * 5.0) * sin(p.y * 5.0) * sin(p.z * 5.0) * 0.025;
          return d;
        }

        vec3 sdfNormal(vec3 p) {
          const float eps = 0.001;
          return normalize(vec3(
            sdfShape(p + vec3(eps, 0.0, 0.0)) - sdfShape(p - vec3(eps, 0.0, 0.0)),
            sdfShape(p + vec3(0.0, eps, 0.0)) - sdfShape(p - vec3(0.0, eps, 0.0)),
            sdfShape(p + vec3(0.0, 0.0, eps)) - sdfShape(p - vec3(0.0, 0.0, eps))
          ));
        }

        void main() {
          vec3 pos = texture2D(uCurrentPos, vUv).xyz;
          vec3 origin = texture2D(uOriginTex, vUv).xyz;

          if (length(pos) > 0.75) pos /= 1.5;

          pos += curlNoise(pos * 0.1 + uTime * 0.05) * 1.0 * 0.0002 * uHZ;

          vec3 gradient = sdfNormal(pos);
          float sdf = sdfShape(pos);
          pos += cross(normalize(pos + 0.0001), normalize(gradient)) * 0.0005;
          pos += -gradient * sdf * 0.5;

          pos += (origin - pos) * 0.0002 * uHZ;

          vec4 clip = uProjectionMatrix * (uModelMatrix * vec4(pos, 1.0));
          vec2 screenUV = (clip.xy / clip.w) * 0.5 + 0.5;

          if (screenUV.x >= 0.0 && screenUV.x <= 1.0 && screenUV.y >= 0.0 && screenUV.y <= 1.0) {
            vec2 fv = texture2D(uFluidVelocity, screenUV).xy;
            vec3 flow = uCamWorldRot * vec3(fv, 0.0);
            pos += flow * 0.0001 * uHZ * 0.4 * texture2D(uFluidDensity, screenUV).r;
          }

          gl_FragColor = vec4(pos, 1.0);
        }
      `,
            depthTest: false,
            depthWrite: false
        });
        const matcapGrey = new THREE.TextureLoader().load('matcap-grey.png');
        const matcapBronze = new THREE.TextureLoader().load('matcap-bronze.png');
        const particleGeom = new THREE.BufferGeometry();
        const uvs = new Float32Array(PARTICLE_COUNT * 2);
        const randoms = new Float32Array(PARTICLE_COUNT * 4);
        for (let y = 0; y < SIM_SIZE; y++) {
            for (let x = 0; x < SIM_SIZE; x++) {
                const i = y * SIM_SIZE + x;
                uvs[i * 2 + 0] = (x + 0.5) / SIM_SIZE;
                uvs[i * 2 + 1] = (y + 0.5) / SIM_SIZE;
                randoms[i * 4 + 0] = Math.random();
                randoms[i * 4 + 1] = Math.random();
                randoms[i * 4 + 2] = Math.random();
                randoms[i * 4 + 3] = Math.random();
            }
        }
        particleGeom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(PARTICLE_COUNT * 3), 3));
        particleGeom.setAttribute('aUv', new THREE.BufferAttribute(uvs, 2));
        particleGeom.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 4));
        const renderMat = new THREE.ShaderMaterial({
            uniforms: {
                uPosTex: { value: null },
                uMatcapGrey: { value: matcapGrey },
                uMatcapBronze: { value: matcapBronze },
                uTheme: { value: currentTheme === 'dark' ? 1.0 : 0.0 },
                uTime: { value: 0.0 },
                uDPR: { value: dpr }
            },
            vertexShader: `
        uniform sampler2D uPosTex;
        uniform float uDPR;
        attribute vec2 aUv;
        attribute vec4 aRandom;
        varying vec4 vRandom;
        varying float vScale;

        void main() {
          vec3 pos = texture2D(uPosTex, aUv).xyz;
          pos *= mix(1.0, 1.4, pow(aRandom.y, 120.0));
          vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
          float distToCamera = length(mvPos.xyz);
          float scale = smoothstep(3.0, 15.0, distToCamera) * mix(0.5, 1.0, aRandom.z);
          vScale = scale;
          vRandom = aRandom;

          // Delicately sized stardust particles (clamped to prevent giant blobs)
          gl_PointSize = clamp(0.024 * uDPR * 2.0 * scale * (1000.0 / distToCamera), 1.0, 3.2);
          gl_Position = projectionMatrix * mvPos;
        }
      `,
            fragmentShader: `
        precision highp float;
        uniform sampler2D uMatcapGrey;
        uniform sampler2D uMatcapBronze;
        uniform float uTheme;
        uniform float uTime;
        varying vec4 vRandom;
        varying float vScale;

        void main() {
          if (vScale < 0.1) discard;
          vec2 uv = gl_PointCoord - vec2(0.5);
          float distSq = dot(uv, uv);
          if (distSq > 0.25) discard;

          float circleAlpha = 1.0 - smoothstep(0.14, 0.25, distSq);

          float rot = sin(uTime + vRandom.z * 20.0) * 0.5 + 1.0;
          float c = cos(rot);
          float s = sin(rot);
          vec2 rotUv = vec2(c * uv.x - s * uv.y, s * uv.x + c * uv.y) + 0.5;

          if (uTheme > 0.5) {
            // DARK MODE: Pure black background, Additive Blending, Lavender & Stardust
            vec3 grey = vec3(mix(0.0, 0.2, vRandom.x));
            vec3 lavender = vec3(0.66, 0.53, 1.0);
            vec3 baseColor = mix(grey, lavender, pow(vRandom.z, 100.0));
            float sparkle = 0.5 + (0.4 + sin(uTime * 4.0 + vRandom.y * 20.0)) * pow(vRandom.z, 10.0) * 2.5;

            vec4 matcap = texture2D(uMatcapGrey, rotUv);
            vec3 col = baseColor * sparkle;
            vec3 softLight = (1.0 - 2.0 * matcap.rgb) * col * col + 2.0 * matcap.rgb * col;
            col = mix(col, softLight, 0.8);
            vec3 overlay = mix(2.0 * col * matcap.rgb, 1.0 - 2.0 * (1.0 - col) * (1.0 - matcap.rgb), step(0.5, col));
            col = mix(col, overlay, 0.2);

            gl_FragColor = vec4(col, circleAlpha);
          } else {
            // LIGHT MODE: Warm Alabaster Ivory background, Normal Blending, Metallic Bronze & Deep Charcoal
            vec3 charcoal = vec3(0.18, 0.16, 0.14);
            vec3 bronze = vec3(0.72, 0.45, 0.32);
            vec3 champagne = vec3(0.85, 0.65, 0.45);
            vec3 baseColor = mix(charcoal, bronze, pow(vRandom.z, 24.0));
            baseColor = mix(baseColor, champagne, pow(vRandom.x, 60.0));

            float shimmer = 0.88 + 0.25 * sin(uTime * 3.0 + vRandom.y * 15.0);

            vec4 matcap = texture2D(uMatcapBronze, rotUv);
            vec3 col = mix(baseColor, matcap.rgb * 0.95, 0.4) * shimmer;

            float alpha = circleAlpha * mix(0.75, 0.95, vRandom.w);
            gl_FragColor = vec4(col, alpha);
          }
        }
      `,
            transparent: true,
            depthTest: true,
            depthWrite: false,
            blending: currentTheme === 'dark' ? THREE.AdditiveBlending : THREE.NormalBlending
        });
        const particlePoints = new THREE.Points(particleGeom, renderMat);
        particleGroup.add(particlePoints);
        function applyTheme(theme) {
            currentTheme = theme;
            const isDark = theme === 'dark';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            if (renderMat) {
                renderMat.uniforms.uTheme.value = isDark ? 1.0 : 0.0;
                renderMat.blending = isDark ? THREE.AdditiveBlending : THREE.NormalBlending;
                renderMat.needsUpdate = true;
            }
            if (renderer) {
                if (isDark) {
                    renderer.setClearColor(0x000000, 1.0);
                }
                else {
                    renderer.setClearColor(0xF5F2EB, 0.0);
                }
            }
        }
        const themeBtn = document.getElementById('theme-toggle');
        if (themeBtn) {
            themeBtn.addEventListener('click', () => {
                const next = currentTheme === 'dark' ? 'light' : 'dark';
                applyTheme(next);
            });
        }
        applyTheme(currentTheme);
        const revealElements = document.querySelectorAll('.scroll-reveal');
        if (revealElements.length > 0 && 'IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        obs.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.12,
                rootMargin: '0px 0px -40px 0px'
            });
            revealElements.forEach((el) => observer.observe(el));
        }
        else {
            revealElements.forEach((el) => el.classList.add('in-view'));
        }
        const mouse = {
            x: width * 0.5,
            y: height * 0.5,
            prevX: width * 0.5,
            prevY: height * 0.5,
            targetCamX: baseCamPos.x,
            targetCamY: baseCamPos.y,
            normX: 0,
            normY: 0,
            lastMoveTime: performance.now()
        };
        function clampMap(val, inMin, inMax, outMin, outMax) {
            const t = Math.max(0, Math.min(1, (val - inMin) / (inMax - inMin)));
            return outMin + t * (outMax - outMin);
        }
        function onPointerMove(px, py) {
            const now = performance.now();
            mouse.lastMoveTime = now;
            const dx = px - mouse.prevX;
            const dy = py - mouse.prevY;
            const len = Math.sqrt(dx * dx + dy * dy);
            const mx = (px / width) * 2 - 1;
            const my = (py / height) * 2 - 1;
            mouse.normX = mx;
            mouse.normY = my;
            mouse.targetCamX = baseCamPos.x + mx * (-1.0);
            mouse.targetCamY = baseCamPos.y + my * 2.0;
            if (len > 0.01) {
                const splatRadius = clampMap(len, 0, 5, 0, 60) * (isMobile ? 0.8 : 0.6);
                const forceMult = clampMap(len, 0, 15, 0, 10);
                splatMat.uniforms.uTarget.value = velFBO_A.texture;
                splatMat.uniforms.uPoint.value.set(px / width, 1.0 - py / height);
                splatMat.uniforms.uColor.value.set(dx * forceMult * 0.1, -dy * forceMult * 0.1, 1.0);
                splatMat.uniforms.uRadius.value = (splatRadius / 200.0) / (width / height);
                splatMat.uniforms.uAspect.value = width / height;
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
            mouse.prevX = px;
            mouse.prevY = py;
        }
        window.addEventListener('pointermove', (e) => onPointerMove(e.clientX, e.clientY), { passive: true });
        window.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0)
                onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
        }, { passive: true });
        const chips = document.querySelectorAll('.home-tags .chip');
        const heroCards = document.querySelectorAll('.home-card');
        chips.forEach((chip) => {
            chip.addEventListener('click', () => {
                chips.forEach((c) => c.classList.remove('active'));
                chip.classList.add('active');
                const filter = chip.getAttribute('data-filter');
                heroCards.forEach((card) => {
                    const cats = card.getAttribute('data-category') || '';
                    if (filter === 'all' || cats.includes(filter)) {
                        card.style.opacity = '1';
                        card.style.transform = 'translateX(0)';
                    }
                    else {
                        card.style.opacity = '0.22';
                        card.style.transform = 'translateX(-4px)';
                    }
                });
            });
        });
        window.addEventListener('resize', () => {
            width = window.innerWidth;
            height = window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        });
        let clock = new THREE.Clock();
        function stepFluid(dt) {
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
        function animate() {
            requestAnimationFrame(animate);
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
            camera.updateMatrixWorld();
            particleGroup.updateMatrixWorld();
            const projMatrix = new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
            const camWorldRot = new THREE.Matrix3().setFromMatrix4(camera.matrixWorld);
            simMat.uniforms.uCurrentPos.value = posFBO_A.texture;
            simMat.uniforms.uFluidVelocity.value = velFBO_A.texture;
            simMat.uniforms.uFluidDensity.value = dyeFBO_A.texture;
            simMat.uniforms.uTime.value = time;
            simMat.uniforms.uHZ.value = HZ;
            simMat.uniforms.uModelMatrix.value.copy(particleGroup.matrixWorld);
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
            renderer.render(scene, camera);
        }
        animate();
    }
})();
