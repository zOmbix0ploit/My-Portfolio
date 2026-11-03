import { sdfFunctionsGLSL } from './sdf.glsl';
export const particleSimFragmentShader = `
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

  ${sdfFunctionsGLSL}

  void main() {
    vec3 pos = texture2D(uCurrentPos, vUv).xyz;
    vec3 origin = texture2D(uOriginTex, vUv).xyz;

    if (length(pos) < 0.0001) {
      pos = origin;
    }

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
`;
export const particleRenderVertexShader = `
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

    // Delicate stardust particle size clamped to prevent giant blobs
    gl_PointSize = clamp(0.024 * uDPR * 2.0 * scale * (1000.0 / distToCamera), 1.0, 3.2);
    gl_Position = projectionMatrix * mvPos;
  }
`;
export const particleRenderFragmentShader = `
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
`;
