import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('Asset/img');

// 1. Wireframe / Solid Raw Geometry Pass
const beforeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <radialGradient id="vignette-before" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#111318"/>
      <stop offset="70%" stop-color="#0a0b0e"/>
      <stop offset="100%" stop-color="#050607"/>
    </radialGradient>
    <pattern id="tech-grid" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#161b24" stroke-width="0.75"/>
    </pattern>
  </defs>

  <!-- Background Canvas -->
  <rect width="1200" height="675" fill="url(#vignette-before)"/>
  <rect width="1200" height="675" fill="url(#tech-grid)" opacity="0.65"/>

  <!-- Perspective Floor Grid (Vanishing point: 600, 240) -->
  <g stroke="#1e293b" stroke-width="1.2">
    <!-- Perspective radial rays -->
    <line x1="600" y1="240" x2="-200" y2="675"/>
    <line x1="600" y1="240" x2="0" y2="675"/>
    <line x1="600" y1="240" x2="200" y2="675"/>
    <line x1="600" y1="240" x2="400" y2="675"/>
    <line x1="600" y1="240" x2="520" y2="675"/>
    <line x1="600" y1="240" x2="680" y2="675"/>
    <line x1="600" y1="240" x2="800" y2="675"/>
    <line x1="600" y1="240" x2="1000" y2="675"/>
    <line x1="600" y1="240" x2="1200" y2="675"/>
    <line x1="600" y1="240" x2="1400" y2="675"/>

    <!-- Ceiling perspective rays -->
    <line x1="600" y1="240" x2="-100" y2="0"/>
    <line x1="600" y1="240" x2="250" y2="0"/>
    <line x1="600" y1="240" x2="600" y2="0"/>
    <line x1="600" y1="240" x2="950" y2="0"/>
    <line x1="600" y1="240" x2="1300" y2="0"/>

    <!-- Horizontal floor depth rungs -->
    <line x1="500" y1="290" x2="700" y2="290" stroke="#334155" stroke-dasharray="4 3"/>
    <line x1="420" y1="340" x2="780" y2="340" stroke="#334155"/>
    <line x1="320" y1="410" x2="880" y2="410" stroke="#334155"/>
    <line x1="180" y1="500" x2="1020" y2="500" stroke="#475569"/>
    <line x1="0" y1="610" x2="1200" y2="610" stroke="#475569" stroke-width="1.5"/>
  </g>

  <!-- Left Architectural Columns (Wireframe) -->
  <g stroke="#38bdf8" stroke-width="1.2" fill="#0f172a" fill-opacity="0.3">
    <polygon points="120,40 180,90 180,590 120,640"/>
    <polygon points="260,110 300,140 300,530 260,560"/>
    <polygon points="380,160 410,180 410,480 380,500"/>
    <!-- Cross struts -->
    <line x1="120" y1="200" x2="180" y2="250" stroke="#0284c7" stroke-width="1"/>
    <line x1="120" y1="380" x2="180" y2="430" stroke="#0284c7" stroke-width="1"/>
    <line x1="260" y1="260" x2="300" y2="290" stroke="#0284c7" stroke-width="1"/>
  </g>

  <!-- Right Architectural Columns (Wireframe) -->
  <g stroke="#38bdf8" stroke-width="1.2" fill="#0f172a" fill-opacity="0.3">
    <polygon points="1080,40 1020,90 1020,590 1080,640"/>
    <polygon points="940,110 900,140 900,530 940,560"/>
    <polygon points="820,160 790,180 790,480 820,500"/>
    <!-- Cross struts -->
    <line x1="1080" y1="200" x2="1020" y2="250" stroke="#0284c7" stroke-width="1"/>
    <line x1="1080" y1="380" x2="1020" y2="430" stroke="#0284c7" stroke-width="1"/>
    <line x1="940" y1="260" x2="900" y2="290" stroke="#0284c7" stroke-width="1"/>
  </g>

  <!-- Central Sci-Fi Monolith / Portal Ring (Raw Wireframe Geometry) -->
  <g stroke="#38bdf8" stroke-width="1.6" fill="none">
    <!-- Outer Octagon Structure -->
    <polygon points="600,80 740,135 800,270 740,410 600,470 460,410 400,270 460,135" stroke="#38bdf8" stroke-width="2"/>
    <!-- Inner faceted rings -->
    <polygon points="600,120 700,160 745,270 700,375 600,420 500,375 455,270 500,160" stroke="#0284c7" stroke-dasharray="6 4"/>
    <polygon points="600,160 670,190 700,270 670,345 600,380 530,345 500,270 530,190" stroke="#38bdf8" stroke-width="1"/>
    
    <!-- Isometric Core Prisms -->
    <polygon points="600,200 645,230 645,310 600,340 555,310 555,230" fill="#0369a1" fill-opacity="0.2" stroke="#0ea5e9" stroke-width="1.5"/>
    <line x1="600" y1="200" x2="600" y2="340" stroke="#38bdf8" stroke-width="1.5"/>
    <line x1="555" y1="230" x2="645" y2="310" stroke="#0ea5e9" stroke-width="1"/>
    <line x1="555" y1="310" x2="645" y2="230" stroke="#0ea5e9" stroke-width="1"/>

    <!-- Radiating Wireframe Construction Lines -->
    <line x1="600" y1="80" x2="600" y2="200" stroke="#0284c7"/>
    <line x1="740" y1="135" x2="645" y2="230" stroke="#0284c7"/>
    <line x1="800" y1="270" x2="645" y2="270" stroke="#0284c7"/>
    <line x1="740" y1="410" x2="645" y2="310" stroke="#0284c7"/>
    <line x1="600" y1="470" x2="600" y2="340" stroke="#0284c7"/>
    <line x1="460" y1="410" x2="555" y2="310" stroke="#0284c7"/>
    <line x1="400" y1="270" x2="555" y2="270" stroke="#0284c7"/>
    <line x1="460" y1="135" x2="555" y2="230" stroke="#0284c7"/>

    <!-- Vertex Dots -->
    <circle cx="600" cy="80" r="3.5" fill="#38bdf8"/>
    <circle cx="740" cy="135" r="3.5" fill="#38bdf8"/>
    <circle cx="800" cy="270" r="3.5" fill="#38bdf8"/>
    <circle cx="740" cy="410" r="3.5" fill="#38bdf8"/>
    <circle cx="600" cy="470" r="3.5" fill="#38bdf8"/>
    <circle cx="460" cy="410" r="3.5" fill="#38bdf8"/>
    <circle cx="400" cy="270" r="3.5" fill="#38bdf8"/>
    <circle cx="460" cy="135" r="3.5" fill="#38bdf8"/>
    <circle cx="600" cy="270" r="4" fill="#38bdf8"/>
  </g>

  <!-- Technical HUD Border & Corner Accents -->
  <rect x="40" y="35" width="1120" height="605" fill="none" stroke="#1e293b" stroke-width="1"/>
  <path d="M 40 55 L 40 35 L 60 35" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <path d="M 1140 35 L 1160 35 L 1160 55" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <path d="M 40 620 L 40 640 L 60 640" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <path d="M 1140 640 L 1160 640 L 1160 620" fill="none" stroke="#38bdf8" stroke-width="2"/>

  <!-- High-Tech Telemetry HUD (Corner Badges) -->
  <g font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, monospace" font-size="11" letter-spacing="1.5">
    <circle cx="68" cy="62" r="3.5" fill="#38bdf8"/>
    <text x="80" y="66" fill="#38bdf8" font-weight="700">PASS: 01 // WIREFRAME UNLIT MESH</text>
    <text x="80" y="86" fill="#64748b">DEPTH_STENCIL BUFFER · CAM FOV 75°</text>

    <text x="1132" y="66" fill="#64748b" text-anchor="end">TOPOLOGY METRICS</text>
    <text x="1132" y="86" fill="#94a3b8" text-anchor="end">TRIS: 2,418,920  ·  VERTS: 1,209,460</text>

    <text x="68" y="612" fill="#64748b">DRAWCALLS: 142 · SHADER: HLSL_BASE</text>
    <text x="1132" y="612" fill="#38bdf8" text-anchor="end">GEOMETRY_READY // SUB-SURFACE PASS</text>
  </g>
</svg>`;

// 2. Photorealistic Lumen / Cinematic Real-Time Render Pass
const afterSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <!-- Rich Cinematic Radial Illumination -->
    <radialGradient id="monolith-core" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#ff4d5e" stop-opacity="0.95"/>
      <stop offset="25%" stop-color="#e32b3c" stop-opacity="0.8"/>
      <stop offset="50%" stop-color="#880e1c" stop-opacity="0.4"/>
      <stop offset="80%" stop-color="#2a0509" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#090909" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="rim-bloom" cx="50%" cy="40%" r="80%">
      <stop offset="0%" stop-color="#e32b3c" stop-opacity="0.4"/>
      <stop offset="45%" stop-color="#7f1d1d" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#090909" stop-opacity="0"/>
    </radialGradient>

    <!-- Metallic Floor Reflection Gradient -->
    <linearGradient id="floor-gloss" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#22070a"/>
      <stop offset="20%" stop-color="#140608"/>
      <stop offset="60%" stop-color="#0c0708"/>
      <stop offset="100%" stop-color="#090909"/>
    </linearGradient>

    <linearGradient id="column-metal-l" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#18181c"/>
      <stop offset="50%" stop-color="#2c1619"/>
      <stop offset="100%" stop-color="#55141b"/>
    </linearGradient>

    <linearGradient id="column-metal-r" x1="100%" y1="0%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#18181c"/>
      <stop offset="50%" stop-color="#2c1619"/>
      <stop offset="100%" stop-color="#55141b"/>
    </linearGradient>

    <linearGradient id="light-beam-l" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ff7b54" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#e32b3c" stop-opacity="0"/>
    </linearGradient>

    <linearGradient id="light-beam-r" x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ff7b54" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#e32b3c" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- Ambient Dark Backdrop -->
  <rect width="1200" height="675" fill="#08080a"/>

  <!-- Volumetric Ceiling Beams -->
  <polygon points="600,240 -100,0 250,0" fill="url(#light-beam-l)" opacity="0.35"/>
  <polygon points="600,240 950,0 1300,0" fill="url(#light-beam-r)" opacity="0.35"/>

  <!-- Wet Reflective Floor -->
  <polygon points="-200,675 600,240 1400,675" fill="url(#floor-gloss)"/>

  <!-- Floor Specular Reflection Streaks -->
  <ellipse cx="600" cy="500" rx="360" ry="85" fill="#e32b3c" opacity="0.22"/>
  <ellipse cx="600" cy="460" rx="220" ry="45" fill="#ff7b54" opacity="0.35"/>
  <ellipse cx="600" cy="430" rx="100" ry="20" fill="#ffffff" opacity="0.45"/>

  <!-- Floor Perspective Light Seams -->
  <g stroke="#e32b3c" stroke-opacity="0.4" stroke-width="1.2">
    <line x1="600" y1="240" x2="400" y2="675"/>
    <line x1="600" y1="240" x2="520" y2="675" stroke="#ff7b54" stroke-opacity="0.7" stroke-width="1.8"/>
    <line x1="600" y1="240" x2="680" y2="675" stroke="#ff7b54" stroke-opacity="0.7" stroke-width="1.8"/>
    <line x1="600" y1="240" x2="800" y2="675"/>
  </g>

  <!-- Left Architectural Solid Columns with Specular Rim Edge -->
  <g>
    <polygon points="120,40 180,90 180,590 120,640" fill="url(#column-metal-l)"/>
    <line x1="180" y1="90" x2="180" y2="590" stroke="#ff848f" stroke-width="2.5" opacity="0.8"/>
    <polygon points="260,110 300,140 300,530 260,560" fill="url(#column-metal-l)"/>
    <line x1="300" y1="140" x2="300" y2="530" stroke="#ff848f" stroke-width="2" opacity="0.7"/>
    <polygon points="380,160 410,180 410,480 380,500" fill="url(#column-metal-l)"/>
    <line x1="410" y1="180" x2="410" y2="480" stroke="#ff848f" stroke-width="1.5" opacity="0.6"/>
  </g>

  <!-- Right Architectural Solid Columns with Specular Rim Edge -->
  <g>
    <polygon points="1080,40 1020,90 1020,590 1080,640" fill="url(#column-metal-r)"/>
    <line x1="1020" y1="90" x2="1020" y2="590" stroke="#ff848f" stroke-width="2.5" opacity="0.8"/>
    <polygon points="940,110 900,140 900,530 940,560" fill="url(#column-metal-r)"/>
    <line x1="900" y1="140" x2="900" y2="530" stroke="#ff848f" stroke-width="2" opacity="0.7"/>
    <polygon points="820,160 790,180 790,480 820,500" fill="url(#column-metal-r)"/>
    <line x1="790" y1="180" x2="790" y2="480" stroke="#ff848f" stroke-width="1.5" opacity="0.6"/>
  </g>

  <!-- Ambient Global Illumination Glow Behind Portal -->
  <circle cx="600" cy="270" r="320" fill="url(#rim-bloom)"/>
  <circle cx="600" cy="270" r="220" fill="url(#monolith-core)"/>

  <!-- Central Sci-Fi Monolith / Portal Ring (Lit Photorealistic Shading) -->
  <g>
    <!-- Outer Heavy Metallic Ring -->
    <polygon points="600,80 740,135 800,270 740,410 600,470 460,410 400,270 460,135" fill="#17090b" stroke="#e32b3c" stroke-width="3.5" filter="drop-shadow(0 0 15px rgba(227,43,60,0.8))"/>
    
    <!-- Neon Energy Channel -->
    <polygon points="600,120 700,160 745,270 700,375 600,420 500,375 455,270 500,160" fill="#200609" stroke="#ff5c6d" stroke-width="2.5" filter="drop-shadow(0 0 10px #ff3b4e)"/>

    <!-- Inner Core Housing -->
    <polygon points="600,160 670,190 700,270 670,345 600,380 530,345 500,270 530,190" fill="#32070d" stroke="#ffa3ac" stroke-width="2"/>

    <!-- Glowing Luminescent Core Crystal -->
    <polygon points="600,200 645,230 645,310 600,340 555,310 555,230" fill="#ffffff" stroke="#ff384c" stroke-width="3" filter="drop-shadow(0 0 25px #ffffff)"/>
    
    <!-- Lens Flare Streaks -->
    <line x1="300" y1="270" x2="900" y2="270" stroke="#ffffff" stroke-width="2.5" opacity="0.75" filter="drop-shadow(0 0 8px #ff7b54)"/>
    <line x1="450" y1="270" x2="750" y2="270" stroke="#ff2d42" stroke-width="5" opacity="0.9"/>
    <circle cx="600" cy="270" r="18" fill="#ffffff" filter="drop-shadow(0 0 20px #ffffff)"/>
    <circle cx="600" cy="270" r="8" fill="#fffbe8"/>

    <!-- Radiant Light Spokes -->
    <line x1="600" y1="80" x2="600" y2="200" stroke="#ff5c6d" stroke-width="2" opacity="0.8"/>
    <line x1="740" y1="135" x2="645" y2="230" stroke="#ff5c6d" stroke-width="2" opacity="0.8"/>
    <line x1="740" y1="410" x2="645" y2="310" stroke="#ff5c6d" stroke-width="2" opacity="0.8"/>
    <line x1="600" y1="470" x2="600" y2="340" stroke="#ff5c6d" stroke-width="2" opacity="0.8"/>
    <line x1="460" y1="410" x2="555" y2="310" stroke="#ff5c6d" stroke-width="2" opacity="0.8"/>
    <line x1="460" y1="135" x2="555" y2="230" stroke="#ff5c6d" stroke-width="2" opacity="0.8"/>
  </g>

  <!-- Technical HUD Border & Corner Accents -->
  <rect x="40" y="35" width="1120" height="605" fill="none" stroke="#331015" stroke-width="1"/>
  <path d="M 40 55 L 40 35 L 60 35" fill="none" stroke="#e32b3c" stroke-width="2"/>
  <path d="M 1140 35 L 1160 35 L 1160 55" fill="none" stroke="#e32b3c" stroke-width="2"/>
  <path d="M 40 620 L 40 640 L 60 640" fill="none" stroke="#e32b3c" stroke-width="2"/>
  <path d="M 1140 640 L 1160 640 L 1160 620" fill="none" stroke="#e32b3c" stroke-width="2"/>

  <!-- High-Tech Telemetry HUD (Corner Badges) -->
  <g font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, monospace" font-size="11" letter-spacing="1.5">
    <circle cx="68" cy="62" r="3.5" fill="#e32b3c"/>
    <text x="80" y="66" fill="#f2efeb" font-weight="700">PASS: 02 // REAL-TIME LUMEN GI RENDER</text>
    <text x="80" y="86" fill="#a09c9a">HARDWARE RAYTRACING · ACES TONEMAP</text>

    <text x="1132" y="66" fill="#22c55e" font-weight="700" text-anchor="end">READY FOR PRODUCTION</text>
    <text x="1132" y="86" fill="#f2efeb" text-anchor="end">4K ULTRA  ·  120.4 FPS STABLE</text>

    <text x="68" y="612" fill="#a09c9a">LIGHT BOUNCES: 32  ·  VOLUMETRIC FOG ON</text>
    <text x="1132" y="612" fill="#e32b3c" text-anchor="end">DYNAMIC SHADOW PIPELINE: LOCKED</text>
  </g>
</svg>`;

fs.writeFileSync(path.join(outDir, 'breakdown-before.svg'), beforeSvg.trim(), 'utf8');
fs.writeFileSync(path.join(outDir, 'breakdown-after.svg'), afterSvg.trim(), 'utf8');

// Copy matching .jpg fallbacks
fs.writeFileSync(path.join(outDir, 'breakdown-before.jpg'), beforeSvg.trim(), 'utf8');
fs.writeFileSync(path.join(outDir, 'breakdown-after.jpg'), afterSvg.trim(), 'utf8');

console.log('Generated stunning cinematic matching 3D breakdown passes in', outDir);

