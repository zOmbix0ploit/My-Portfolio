# NETHUNA SAHAS — Spatial 3D & GPU Fluid Portfolio: Full Architectural Brief

Build an Awwwards Site-of-the-Year spatial portfolio page for **Nethuna Sahas** (Software Engineer, Game Developer, and Founder at Nevucore). This design fuses the **Warm Alabaster & Metallic Bronze Luxury Studio Layout** (giant background editorial typography, centered cutout portrait, interlocking 3D torus, and bottom floating glassmorphism bento cards) with a **Real-Time WebGL GPU Fluid & 262,144-Particle SDF Ring Simulation** that swirls around the portrait when stirred by the cursor. Strictly zero emojis anywhere in the DOM.

---

## 1. Media & Assets

| Use | URL / Asset | Notes |
| --- | --- | --- |
| Portrait Cutout (Center Hero) | `/nethuna-portrait.png` (include a high-end studio SVG/canvas cutout silhouette fallback so it renders immediately) | Positioned center-stage; GPU particles orbit behind and in front of the portrait |
| Card 01 Video (3D Game) | https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/aaaf/oraciteslArea.mp4 | "01 / UNREAL 3D GAME PROJECT" |
| Card 02 Video (LMS Platform) | https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/aaaf/facet-glass-hero.mp4 | "02 / SCALABLE LMS PLATFORM" |
| Card 03 Video (Nevucore Agency) | https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/aaaf/stellarmind-hero.mp4 | "03 / NEVUCORE ARCHITECTURE" |
| Card 04 Video (dev.nevucore.com) | https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/aaaf/thedropthroughArea.mp4 | "04 / DEV.NEVUCORE ECOSYSTEM" |
| Particle sprite matcap | 64×64 PNG, warm metallic bronze & alabaster sphere shading (embedded as a data URI) | Sampled per point sprite |
| three.js | https://cdn.jsdelivr.net/npm/three@0.150.1/build/three.min.js | UMD build, global `THREE` |

All videos: `autoplay muted loop playsinline preload="metadata"`, `object-fit: cover`.

---

## 2. Typography & Font Stack

Pair an ultra-refined editorial serif for the giant hero watermark with a geometric sans-serif and technical monospace stack:
- **Hero Display Serif (`--font-serif`):** `"Cormorant Garamond", "Playfair Display", "Times New Roman", serif` — used for the massive centered `NETHUNA SAHAS` background title.
- **Primary UI Sans (`--font-sans`):** `"Plus Jakarta Sans", "Inter", -apple-system, sans-serif` — used for subheadings, cards, and navigation pills.
- **Technical Monospace (`--font-mono`):** `"JetBrains Mono", "SF Mono", "Menlo", monospace` — uppercase, 11–12 px, letter-spacing `0.06em` for index numbers (`01 /`, `02 /`), tech stack tags, and telemetry.
- Zero emojis allowed anywhere.

---

## 3. Head and Color Tokens (Warm Alabaster Light Studio Theme)

- `<title>NETHUNA SAHAS — Software Engineer, Game Developer & Founder at Nevucore</title>`
- `<meta name="description" content="Portfolio of Nethuna Sahas: Software Engineer, 3D Game Developer, LMS Architect, and Founder at Nevucore (nevocore.com & dev.nevucore.com).">`
- Viewport meta, charset UTF-8.

```css
:root {
  --bg-primary:   #F5F2EB;                      /* Warm Studio Alabaster / Ivory */
  --bg-gradient:  radial-gradient(circle at 55% 35%, #FFFDF9 0%, #EFECE6 55%, #E5E0D5 100%);
  --glass-bg:     rgba(255, 253, 250, 0.58);    /* Frosted translucent card surface */
  --glass-border: rgba(20, 20, 19, 0.10);       /* Crisp 1px architectural border */
  --bronze-pill:  rgba(184, 115, 82, 0.18);     /* Tinted warm copper pill fill */
  --accent:       #B87352;                      /* Metallic Bronze / Terracotta highlight */
  --accent-deep:  #8C4F32;                      /* Deep Copper for particle core */
  --text:         #141413;                      /* Deep Obsidian Charcoal */
  --muted:        #6E6A63;                      /* Warm Stone Graphite */
  --status-green: #2E7D32;                      /* Live availability indicator */
}
/* html, body { background: var(--bg-primary); color: var(--text); margin: 0; overflow-x: hidden; } */
```

---

## 4. Spatial Depth Layers (5-Layer Intertwined Architecture)

Instead of a flat dark background, the viewport is structured into **5 intertwined spatial depth layers** so the 3D ring, GPU fluid particles, giant typography, and portrait overlap with realistic studio depth:

1. **Layer 0 (`.studio-wall`, z-index 0):** Fixed full-viewport warm alabaster background (`var(--bg-gradient)`) with diagonal volumetric window sunlight rays (`transform: rotate(-28deg)`, soft blur) casting subtle warm highlights across the canvas.
2. **Layer 1 (`.hero-typography`, z-index 1):** Fixed/sticky center composition containing:
   - Giant full-width serif headline `NETHUNA SAHAS` (`font-size: clamp(4.5rem, 11.5vw, 12.5rem)`, `font-weight: 600`, `letter-spacing: -0.02em`, `color: #141413`, centered horizontally at `top: 26%`).
   - Left-aligned subheadline directly beneath `NETH`: `CREATIVE ENGINEER & GAME DEVELOPER` (`font-size: clamp(1.1rem, 1.8vw, 1.65rem)`, uppercase, `font-family: var(--font-sans)`), plus a secondary line `FOUNDER AT NEVUCORE · LMS & SYSTEMS ARCHITECT`.
   - Floating stat pills on the left (`50+ Projects`, `6+ Years`, `08+ Core Systems`) and right (`UNREAL ENGINE`, `REACT / NEXT.JS`, `C++ / RUST`, `THREE.JS`).
3. **Layer 2 (`canvas#bg-back`, z-index 2):** WebGL back-layer or unified WebGL canvas with depth masking so the back arc of the 3D sculpted ring and GPU particle cloud passes **behind** the portrait's head and shoulders while optically refracting/overlapping the giant `NETHUNA SAHAS` letters.
4. **Layer 3 (`.portrait-stage`, z-index 3):** Centered cutout portrait of **Nethuna Sahas** (`bottom: 12%`, `height: 76vh`, `pointer-events: none`), rising above the giant `NETHUNA SAHAS` text so his shoulders and head overlap the middle letters (`U N A   S`) with a realistic studio drop shadow. Moves with subtle opposite mouse parallax.
5. **Layer 4 (`canvas#bg-front` & `.ui-foreground`, z-index 4):**
   - The front lower arc of the 3D bronze/glass torus and GPU fluid particles loops **in front** of the lower torso of the portrait, creating true 3D spatial intertwining.
   - Top navigation header and bottom floating glassmorphism project cards sit cleanly in the foreground (`z-index: 5`).

---

## 5. UI DOM Layout & Exact Measurements

### A. Top Studio Navigation Bar (`.top-nav`)
- Fixed `top: 24px`, `left: 36px`, `right: 36px`, `height: 52px`, flex space-between, align-items center, `z-index: 10`, `border-bottom: 1px solid var(--glass-border)`, `padding-bottom: 16px`.
- **Left Brand:**
  - Crisp geometric SVG mark (28×28 precision wireframe cube/ring) + wordmark `NETHUNA SAHAS` (`15px`, `font-weight: 600`, `letter-spacing: 0.08em`).
- **Right Pill Controls (flex gap 10px):**
  1. **Agency Pill:** `<a href="https://dev.nevocore.com" target="_blank">Founder at Nevucore</a>` (`background: var(--glass-bg)`, `backdrop-filter: blur(16px)`, `border: 1px solid var(--glass-border)`, `border-radius: 999px`, `padding: 8px 18px`, `font-size: 12px`).
  2. **Dev Hub Pill:** `<a href="https://dev.nevucore.com" target="_blank">dev.nevucore.com</a>` (same glass pill styling).
  3. **Availability Pill:** `Available for Projects` with a `7px` solid green dot (`#2E7D32`).
  4. **LinkedIn / Profile Drawer Button:** `<button class="menu-btn">Profile & LinkedIn</button>` (`border: 1px solid #141413`, `border-radius: 999px`, `padding: 8px 20px`, `font-weight: 600` — clicking opens the slide-over Engineering & LinkedIn Bio Drawer).

### B. Floating Flank Badges & Filter Pills (`.flank-meta`)
- **Left Flank (`top: 22%`, `left: 36px`):**
  - Two warm bronze/stone glass pills: `50+ Projects` (`background: var(--bronze-pill)`) and `6+ Years` (`background: var(--glass-bg)`).
- **Right Flank (`top: 52%`, `right: 36px`):**
  - Interactive filter chips that highlight the 3D particle color mode and filter the bottom cards: `ALL`, `GAME DEV`, `LMS CORE`, `NEVUCORE`, `UNREAL / C++`, `NEXT.JS / TS`, `RUST`.

### C. Bottom Floating Glassmorphism Bento Cards (`.bento-dock`)
- Positioned at `bottom: 24px`, `left: 36px`, `right: 36px`, `z-index: 6`.
- A 4-column horizontal grid on wide desktop (`grid-template-columns: repeat(4, 1fr)`, `gap: 18px`) — or 3 visible cards with smooth horizontal drag/scroll — overlapping the bottom edge of the portrait.
- Each `.bento-card` uses luxury frosted glass (`background: rgba(255, 253, 250, 0.68)`, `backdrop-filter: blur(24px)`, `-webkit-backdrop-filter: blur(24px)`, `border: 1px solid rgba(255, 255, 255, 0.85)`, `box-shadow: 0 20px 45px rgba(20, 20, 19, 0.08)`, `border-radius: 18px`, `padding: 16px`, `transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)`). Hover lifts the card by `-6px` and expands the video preview.
- **Card Contents:**
  1. **Card 01 — 3D Game Project:**
     - Header: `01 / UNREAL 3D GAME PROJECT` (`12px` monospace, `--accent` index number)
     - Video Box (`.thumb`, height `145px`, `border-radius: 10px`, overflow hidden): `https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/aaaf/oraciteslArea.mp4`
     - Sub-meta: `In Development · C++ & Custom HLSL Shaders · Real-Time Physics`
  2. **Card 02 — Enterprise LMS Platform:**
     - Header: `02 / SCALABLE LMS PLATFORM`
     - Video Box: `https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/aaaf/facet-glass-hero.mp4`
     - Sub-meta: `EdTech Architecture · Real-Time Analytics · Role-Based Streaming`
  3. **Card 03 — Nevucore Agency Architecture:**
     - Header: `03 / NEVUCORE ARCHITECTURE`
     - Video Box: `https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/aaaf/stellarmind-hero.mp4`
     - Sub-meta: `nevocore.com · Next-Gen Web & Mobile Engineering Studio`
  4. **Card 04 — dev.nevucore.com Ecosystem:**
     - Header: `04 / DEV.NEVUCORE ECOSYSTEM`
     - Video Box: `https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/aaaf/thedropthroughArea.mp4`
     - Sub-meta: `dev.nevucore.com · High-Performance Client Web Platforms`

### D. Slide-Over Engineering & LinkedIn Dossier Drawer (`.bio-drawer`)
- Accessible via the top-right `Profile & LinkedIn` button or by clicking any Bento Card for a deep-dive case study. Frosted glass side panel (`width: 440px`, `right: 24px`, `top: 88px`, `bottom: 24px`, `border-radius: 20px`, `backdrop-filter: blur(28px)`):
```text
[IDENTITY // NETHUNA SAHAS]
Software Engineer, Game Developer, and Founder at Nevucore. Dedicated to building high-performance digital products, interactive 3D worlds, and scalable enterprise web architectures without generic templates.

[GAME DEVELOPMENT]
Architecting an original 3D action game featuring custom shaders, procedural environment systems, and responsive combat mechanics.

[ENTERPRISE LMS & DEV.NEVUCORE.COM]
Engineered a full-featured Learning Management System (LMS) with real-time student telemetry, course streaming, and automated assessment pipelines, alongside production client platforms hosted across nevocore.com and dev.nevucore.com.

[TECHNICAL ARSENAL]
• Languages: C++, TypeScript, JavaScript, Python, Rust, Go, C#, Java
• Frontend & 3D: React, Next.js, Three.js, WebGL, Tailwind CSS, Vue, Svelte
• Backend & Data: Node.js, GraphQL, PostgreSQL, Distributed Cloud Systems

[DIRECT LINKS]
Agency Website -> https://de.nevocore.com
LinkedIn Profile -> https://www.linkedin.com/in/nethuna-sahas-a83544394
```

---

## 6. Hybrid 3D Glass Ring + GPU Particle System (The Hero Engine)

Instead of a dark void cloud on a black screen, the WebGL scene renders **both** a sleek refractive 3D bronze/glass open torus ring AND a `262,144`-particle spatial cloud that hugs the torus surface and scatters into fluid eddies when the cursor moves across the portrait.

**Scene & Camera:**
- Perspective camera FOV `30`, near `0.1`, far `1000`, base position `(0.0, 0.15, 6.2)` looking at `(0, 0.1, 0)`.
- Gaze parallax: each frame the camera target shifts by `(mouse.x * -0.65, mouse.y * 0.45)` and lerps at `0.05`.
- The 3D ring group sits at `(0.08, 0.18, 0.0)`, rotation `(-24deg, 32deg, -12deg)`, scale `(4.8, 4.8, 5.2)`, framing Nethuna Sahas's portrait.

**Particle Count & Ping-Pong Simulation:**
- `262,144` points on desktop (`512×512` float RGBA texture), `16,384` on mobile.
- Each frame, update particle positions using the exact SDF + Curl Noise + Mouse Fluid physics pass:

```glsl
if (length(pos) > 0.75) pos /= 2.0;
pos += curlNoise(pos * 0.1 + time * 0.05) * 0.0002 * HZ;
vec3 gradient = sdfNormal(pos);   // central differences, step 0.001
float sdf = sdfTorusRibbon(pos);  // open sculptural torus ring around the portrait
pos += cross(normalize(pos), normalize(gradient)) * 0.00055;          // orbital flow along the ring
pos += -gradient * sdf * 0.52;                                         // attract tightly to the 3D ring surface
pos += (origin - pos) * 0.0002 * HZ;                                   // elastic return
// cursor fluid turbulence
vec2 screenUV = project(model * pos);
vec3 flow = vec3(texture(fluidVelocity, screenUV).xy, 0.0);
pos += flow * 0.00012 * HZ * 0.45 * texture(fluidDensity, screenUV).r;
```

**Point Rendering for Warm Alabaster Light Theme:**
- Because the background is Warm Alabaster (`#F5F2EB`), use **Normal / Alpha Blending** (`THREE.NormalBlending`, `depthWrite: false`, `transparent: true`) instead of black-screen additive blending so the particles look like **champagne bronze, obsidian dust, and refractive copper glass droplets** floating in studio sunlight:
- Base particle colour mixes between Deep Charcoal (`#1E1D1B`), Warm Metallic Bronze (`#B87352`), and Specular Champagne Gold (`#E8C39E`) based on `random.x` and `pow(random.z, 25.0)`.
- Sample the 64×64 spherical matcap texture per point sprite so each particle has 3D studio rim lighting.

---

## 7. GPU Fluid Simulation (Drives Cursor Turbulence)

Classic GPU Navier-Stokes fluid solver (`curl → vorticity → divergence → pressure → gradient subtract → advect velocity → advect density`), half-float ping-pong render targets:
- Sim resolution: `256 × 256` | Dye resolution: `512 × 512`
- Velocity dissipation: `0.98` | Density dissipation: `0.97` | Pressure dissipation: `0.95`
- Pressure iterations: `5` | Curl: `30` | `dt`: `1/60`
- Moving the mouse anywhere over the hero typography, portrait, or 3D ring injects velocity and density splats along the cursor vector, causing the bronze/charcoal particles on the 3D ring to swirl organically and heal back into the smooth sculptural ring within `1.5s`.

---

## 8. Responsive Breakpoints

- `≤1200 px`: Bento dock switches to a 2×2 grid at the bottom; giant `NETHUNA SAHAS` title scales smoothly via `clamp()`.
- `≤760 px`: Single-column scrollable mobile experience; portrait and 3D particle ring remain at the top `65vh`, followed by stacked glassmorphism project video cards and the full engineering & LinkedIn bio below.

---

## 9. Acceptance Checklist

- [ ] **Exact Visual Match to the Warm Alabaster Studio Mockup:** Warm ivory/alabaster sunlit background (`#F5F2EB`), giant `NETHUNA SAHAS` editorial serif watermark in the back, cutout portrait in the middle, interlocking 3D bronze/glass ring + GPU particle stream looping around the portrait, and frosted glassmorphism project cards along the bottom.
- [ ] **Full GPU Fluid & Particle Physics:** Moving the cursor stirs the 262,144 particles along the 3D ring via the 2D fluid velocity/density buffers and gently shifts the camera gaze and portrait parallax.
- [ ] **All 4 Video Cards Active:** All four `.mp4` videos (`oraciteslArea.mp4`, `facet-glass-hero.mp4`, `stellarmind-hero.mp4`, `thedropthroughArea.mp4`) autoplay muted inside the bottom glassmorphism cards representing the **3D Game**, **Enterprise LMS**, **Nevucore Studio**, and **dev.nevucore.com**.
- [ ] **Complete Personal & Company Details:** Links to  `https://dev.nevucore.com`, and `https://www.linkedin.com/in/nethuna-sahas-a83544394` work properly, and zero emojis appear anywhere.
