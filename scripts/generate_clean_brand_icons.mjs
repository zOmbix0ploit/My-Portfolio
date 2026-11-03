import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('Asset/svg/brand');

const icons = {
  'brand-nevucore.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M14 2L25 8.5V21.5L14 28L3 21.5V8.5L14 2Z" stroke="#e32b3c" stroke-width="1.8" fill="rgba(227,43,60,0.15)"/>
  <path d="M9 19V9L19 19V9" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,

  'brand-unreal.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <circle cx="14" cy="14" r="12" stroke="#ffffff" stroke-width="1.8" fill="rgba(255,255,255,0.06)"/>
  <path d="M10 10V15C10 17.2 11.8 19 14 19C16.2 19 18 17.2 18 15V10" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round"/>
  <circle cx="14" cy="14" r="1.5" fill="#e32b3c"/>
</svg>`,

  'brand-rust.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <circle cx="14" cy="14" r="11" stroke="#f74c00" stroke-width="2" stroke-dasharray="3 2" fill="rgba(247,76,0,0.1)"/>
  <circle cx="14" cy="14" r="8" stroke="#f74c00" stroke-width="1.4"/>
  <text x="14" y="18" fill="#ffffff" font-family="-apple-system, sans-serif" font-weight="900" font-size="11" text-anchor="middle">R</text>
</svg>`,

  'brand-nextjs.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <circle cx="14" cy="14" r="12" fill="#000000" stroke="#38383e" stroke-width="1.5"/>
  <path d="M10 19V9L19 20" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
  <path d="M18 9V14" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
</svg>`,

  'brand-threejs.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <polygon points="14,4 25,23 3,23" stroke="#049ef4" stroke-width="2" stroke-linejoin="round" fill="rgba(4,158,244,0.12)"/>
  <polygon points="14,10 20,21 8,21" stroke="#ffffff" stroke-width="1.2" stroke-linejoin="round"/>
</svg>`,

  'brand-cpp.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <polygon points="14,3 24.5,9 24.5,21 14,27 3.5,21 3.5,9" stroke="#00599c" stroke-width="1.8" fill="rgba(0,89,156,0.15)"/>
  <text x="14" y="18" fill="#659ad2" font-family="-apple-system, sans-serif" font-weight="900" font-size="10" text-anchor="middle">C++</text>
</svg>`,

  'brand-postgres.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <circle cx="14" cy="14" r="12" fill="rgba(51,103,145,0.18)" stroke="#336791" stroke-width="1.8"/>
  <path d="M9 13C9 10.2 11.2 8 14 8C16.8 8 19 10.2 19 13C19 16 16.5 19 14 20C12 19 9 17 9 13Z" fill="#336791"/>
  <circle cx="14" cy="12" r="2" fill="#ffffff"/>
</svg>`,

  'brand-docker.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <rect x="5" y="13" width="18" height="9" rx="3.5" stroke="#2496ed" stroke-width="1.8" fill="rgba(36,150,237,0.15)"/>
  <rect x="7" y="8" width="3.2" height="3.2" rx="0.6" fill="#2496ed"/>
  <rect x="12" y="8" width="3.2" height="3.2" rx="0.6" fill="#2496ed"/>
  <rect x="17" y="8" width="3.2" height="3.2" rx="0.6" fill="#2496ed"/>
  <circle cx="19" cy="16" r="1" fill="#ffffff"/>
</svg>`,

  'brand-typescript.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <rect x="3" y="3" width="22" height="22" rx="5" fill="#3178c6"/>
  <text x="14" y="19" fill="#ffffff" font-family="-apple-system, sans-serif" font-weight="900" font-size="12" text-anchor="middle">TS</text>
</svg>`,

  'brand-graphql.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <circle cx="14" cy="14" r="12" fill="rgba(225,0,152,0.12)" stroke="#e10098" stroke-width="1.6"/>
  <circle cx="14" cy="7" r="2" fill="#e10098"/>
  <circle cx="20" cy="11" r="2" fill="#e10098"/>
  <circle cx="20" cy="17" r="2" fill="#e10098"/>
  <circle cx="14" cy="21" r="2" fill="#e10098"/>
  <circle cx="8" cy="17" r="2" fill="#e10098"/>
  <circle cx="8" cy="11" r="2" fill="#e10098"/>
  <polygon points="14,7 20,11 20,17 14,21 8,17 8,11" stroke="#e10098" stroke-width="1" fill="none"/>
</svg>`,

  'brand-python.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <circle cx="14" cy="14" r="12" fill="rgba(55,118,171,0.15)" stroke="#3776ab" stroke-width="1.6"/>
  <path d="M14 6C10.5 6 9 7.5 9 9.5V11.5H14V12.5H7.5C5.5 12.5 4 14 4 17.5C4 21 5.5 22.5 9 22.5" stroke="#3776ab" stroke-width="1.8" stroke-linecap="round"/>
  <path d="M14 22C17.5 22 19 20.5 19 18.5V16.5H14V15.5H20.5C22.5 15.5 24 14 24 10.5C24 7 22.5 5.5 19 5.5" stroke="#ffd43b" stroke-width="1.8" stroke-linecap="round"/>
</svg>`,

  'brand-tailwind.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <circle cx="14" cy="14" r="12" fill="rgba(56,189,248,0.12)" stroke="#38bdf8" stroke-width="1.6"/>
  <path d="M9 13.5C9.8 11.5 11.3 10.7 13.5 11C15.8 11.3 16.9 12.8 18 13.5C19 14.2 20 14.2 21 13" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/>
  <path d="M7 17.5C7.8 15.5 9.3 14.7 11.5 15C13.8 15.3 14.9 16.8 16 17.5C17 18.2 18 18.2 19 17" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/>
</svg>`
};

for (const [name, content] of Object.entries(icons)) {
  fs.writeFileSync(path.join(outDir, name), content.trim(), 'utf8');
}
console.log('Generated 12 clean transparent brand icons in', outDir);

