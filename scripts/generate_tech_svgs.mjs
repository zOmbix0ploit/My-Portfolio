import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('Asset/svg');

const svgs = {
  'react.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
  <rect width="36" height="36" rx="8" fill="#141820"/>
  <ellipse cx="18" cy="18" rx="11" ry="4.2" fill="none" stroke="#61dafb" stroke-width="1.3" transform="rotate(30 18 18)"/>
  <ellipse cx="18" cy="18" rx="11" ry="4.2" fill="none" stroke="#61dafb" stroke-width="1.3" transform="rotate(90 18 18)"/>
  <ellipse cx="18" cy="18" rx="11" ry="4.2" fill="none" stroke="#61dafb" stroke-width="1.3" transform="rotate(150 18 18)"/>
  <circle cx="18" cy="18" r="2.2" fill="#61dafb"/>
</svg>`,

  'node.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
  <rect width="36" height="36" rx="8" fill="#111c12"/>
  <polygon points="18,7 28,12.8 28,24.2 18,30 8,24.2 8,12.8" fill="none" stroke="#5fa04e" stroke-width="1.5"/>
  <text x="18" y="22" fill="#5fa04e" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="900" font-size="12" text-anchor="middle">JS</text>
</svg>`,

  'ts.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
  <rect width="36" height="36" rx="8" fill="#3178c6"/>
  <text x="18" y="24" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="900" font-size="14" text-anchor="middle">TS</text>
</svg>`,

  'next.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
  <rect width="36" height="36" rx="8" fill="#000000"/>
  <circle cx="18" cy="18" r="14" fill="none" stroke="#333338" stroke-width="1.2"/>
  <text x="18" y="23" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="900" font-size="12" text-anchor="middle">N</text>
</svg>`,

  'rust.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
  <rect width="36" height="36" rx="8" fill="#1f140e"/>
  <circle cx="18" cy="18" r="10" fill="none" stroke="#f74c00" stroke-width="1.8"/>
  <text x="18" y="23" fill="#f74c00" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="900" font-size="13" text-anchor="middle">R</text>
</svg>`,

  'cpp.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
  <rect width="36" height="36" rx="8" fill="#00599c"/>
  <text x="18" y="23" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="900" font-size="11" letter-spacing="-0.5" text-anchor="middle">C++</text>
</svg>`,

  'python.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
  <rect width="36" height="36" rx="8" fill="#141c26"/>
  <circle cx="18" cy="18" r="11" fill="none" stroke="#ffde57" stroke-width="1.5"/>
  <text x="18" y="23" fill="#387eb8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="900" font-size="12" text-anchor="middle">Py</text>
</svg>`,

  'postgres.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
  <rect width="36" height="36" rx="8" fill="#336791"/>
  <text x="18" y="23" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="900" font-size="12" text-anchor="middle">SQL</text>
</svg>`,

  'docker.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
  <rect width="36" height="36" rx="8" fill="#0d2136"/>
  <rect x="9" y="16" width="18" height="8" rx="3" fill="#2496ed"/>
  <rect x="11" y="11" width="3" height="3" rx="0.5" fill="#2496ed"/>
  <rect x="16" y="11" width="3" height="3" rx="0.5" fill="#2496ed"/>
  <rect x="21" y="11" width="3" height="3" rx="0.5" fill="#2496ed"/>
</svg>`,

  'three.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
  <rect width="36" height="36" rx="8" fill="#18181b"/>
  <polygon points="18,8 28,26 8,26" fill="none" stroke="#049ef4" stroke-width="2"/>
  <circle cx="18" cy="19" r="2.5" fill="#049ef4"/>
</svg>`
};

for (const [name, content] of Object.entries(svgs)) {
  fs.writeFileSync(path.join(outDir, name), content.trim(), 'utf8');
}
console.log('Generated 10 pure developer toolkit SVGs in', outDir);

