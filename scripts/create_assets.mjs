import { writeFileSync } from 'node:fs';

// Minimal valid PDF
const pdfContent = `%PDF-1.4
1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj
2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj
3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >> endobj
4 0 obj << /Length 72 >> stream
BT
/F1 24 Tf
100 700 Td
(NETHUNA SAHAS - CURRICULUM VITAE) Tj
ET
endstream
endobj
5 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj
xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000060 00000 n 
0000000117 00000 n 
0000000228 00000 n 
0000000350 00000 n 
trailer << /Size 6 /Root 1 0 R >>
startxref
421
%%EOF`;

writeFileSync('Asset/cv/resume.pdf', pdfContent);

// Minimal valid JPEG files for breakdown before (wireframe/clay) and after (final composite)
// A tiny 1x1 base JPEG header + payload or full SVG. In modern HTML <img> with src="./Asset/img/breakdown-before.jpg",
// browsers sniff MIME types. But let's write high quality SVGs saved as .jpg or .png or generate dual extensions.
const svgBefore = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <rect width="1200" height="675" fill="#121214"/>
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#25252b" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="675" fill="url(#grid)" />
  <circle cx="600" cy="337" r="220" fill="none" stroke="#484852" stroke-width="2" stroke-dasharray="8 6"/>
  <circle cx="600" cy="337" r="160" fill="none" stroke="#e32b3c" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.6"/>
  <path d="M 400 337 L 800 337 M 600 137 L 600 537" stroke="#363640" stroke-width="1.5"/>
  <text x="600" y="325" fill="#f2efeb" font-family="monospace" font-size="28" font-weight="bold" text-anchor="middle" letter-spacing="4">RAW GEOMETRY &amp; WIREFRAME</text>
  <text x="600" y="365" fill="#8a8a93" font-family="monospace" font-size="16" text-anchor="middle" letter-spacing="2">UNREAL ENGINE 5 - LUMEN PRE-PASS</text>
  <rect x="50" y="50" width="1100" height="575" fill="none" stroke="#25252b" stroke-width="1"/>
  <text x="80" y="90" fill="#e32b3c" font-family="monospace" font-size="14" letter-spacing="1">PASS: 01 // DEPTH_STENCIL</text>
  <text x="1120" y="90" fill="#8a8a93" font-family="monospace" font-size="14" text-anchor="end">120 FPS</text>
</svg>`;

const svgAfter = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <radialGradient id="glow" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#4a151b"/>
      <stop offset="50%" stop-color="#1c0f12"/>
      <stop offset="100%" stop-color="#090909"/>
    </radialGradient>
    <linearGradient id="beam" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e32b3c" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#ff7b54" stop-opacity="0.2"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="675" fill="url(#glow)"/>
  <circle cx="600" cy="337" r="220" fill="url(#beam)" opacity="0.3"/>
  <circle cx="600" cy="337" r="160" fill="none" stroke="#e32b3c" stroke-width="4"/>
  <circle cx="600" cy="337" r="80" fill="#e32b3c" opacity="0.2"/>
  <text x="600" y="325" fill="#f2efeb" font-family="sans-serif" font-size="32" font-weight="900" text-anchor="middle" letter-spacing="4">FINAL LUMEN LIGHTING &amp; VFX</text>
  <text x="600" y="365" fill="#ff7b54" font-family="sans-serif" font-size="16" text-anchor="middle" letter-spacing="2">REAL-TIME GLOBAL ILLUMINATION + NIAGARA</text>
  <rect x="50" y="50" width="1100" height="575" fill="none" stroke="#e32b3c" stroke-width="1" opacity="0.4"/>
  <text x="80" y="90" fill="#e32b3c" font-family="sans-serif" font-size="14" font-weight="bold" letter-spacing="1">PASS: FINAL COMPOSITE // 4K 120FPS</text>
  <text x="1120" y="90" fill="#4ade80" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="end">READY FOR PRODUCTION</text>
</svg>`;

writeFileSync('Asset/img/breakdown-before.svg', svgBefore);
writeFileSync('Asset/img/breakdown-after.svg', svgAfter);
// Also write to .jpg paths since browser accepts SVG data or can fall back
writeFileSync('Asset/img/breakdown-before.jpg', svgBefore);
writeFileSync('Asset/img/breakdown-after.jpg', svgAfter);

console.log('Created resume.pdf and breakdown images');

