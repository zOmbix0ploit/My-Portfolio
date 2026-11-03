import { writeFileSync, mkdirSync } from 'node:fs';

mkdirSync('Asset/svg', { recursive: true });
mkdirSync('Asset/svg/brand', { recursive: true });

function writeSvg(path, content) {
  const full = `<?xml version="1.0" encoding="UTF-8"?>\n${content.trim()}`;
  writeFileSync(path, full, 'utf8');
}

// 1. Software & Skill Icons in Asset/svg/
writeSvg('Asset/svg/pr.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
  <rect width="36" height="36" rx="8" fill="#00005b"/>
  <text x="18" y="24" fill="#9999ff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="15" text-anchor="middle">Pr</text>
</svg>`);

writeSvg('Asset/svg/ae.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
  <rect width="36" height="36" rx="8" fill="#00005b"/>
  <text x="18" y="24" fill="#d291ff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="15" text-anchor="middle">Ae</text>
</svg>`);

writeSvg('Asset/svg/bl.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
  <rect width="36" height="36" rx="8" fill="#ea7600"/>
  <circle cx="18" cy="18" r="6" fill="#255799"/>
  <circle cx="18" cy="18" r="3" fill="#ffffff"/>
  <path d="M18 6 L18 12 M8 24 L14 20 M28 24 L22 20" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
</svg>`);

writeSvg('Asset/svg/ps.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
  <rect width="36" height="36" rx="8" fill="#001e36"/>
  <text x="18" y="24" fill="#31a8ff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="15" text-anchor="middle">Ps</text>
</svg>`);

writeSvg('Asset/svg/lr.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
  <rect width="36" height="36" rx="8" fill="#001e36"/>
  <text x="18" y="24" fill="#31a8ff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="15" text-anchor="middle">Lr</text>
</svg>`);

writeSvg('Asset/svg/cc.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
  <rect width="36" height="36" rx="8" fill="#111113"/>
  <text x="18" y="24" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="15" text-anchor="middle">Cc</text>
</svg>`);

writeSvg('Asset/svg/react.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
  <rect width="36" height="36" rx="8" fill="#20232a"/>
  <circle cx="18" cy="18" r="3" fill="#61dafb"/>
  <ellipse cx="18" cy="18" rx="12" ry="4.5" fill="none" stroke="#61dafb" stroke-width="1.5"/>
  <ellipse cx="18" cy="18" rx="12" ry="4.5" fill="none" stroke="#61dafb" stroke-width="1.5" transform="rotate(60 18 18)"/>
  <ellipse cx="18" cy="18" rx="12" ry="4.5" fill="none" stroke="#61dafb" stroke-width="1.5" transform="rotate(120 18 18)"/>
</svg>`);

writeSvg('Asset/svg/node.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
  <rect width="36" height="36" rx="8" fill="#222226"/>
  <text x="18" y="24" fill="#68a063" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="13" text-anchor="middle">Node</text>
</svg>`);

writeSvg('Asset/svg/rust.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
  <rect width="36" height="36" rx="8" fill="#18181b"/>
  <circle cx="18" cy="18" r="10" fill="none" stroke="#dea584" stroke-width="2" stroke-dasharray="3 2"/>
  <text x="18" y="23" fill="#dea584" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="14" text-anchor="middle">Rs</text>
</svg>`);

writeSvg('Asset/svg/ue.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
  <rect width="36" height="36" rx="8" fill="#090909" stroke="#333339" stroke-width="1"/>
  <circle cx="18" cy="18" r="11" fill="none" stroke="#ffffff" stroke-width="1.5"/>
  <text x="18" y="23" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="13" text-anchor="middle">U5</text>
</svg>`);

// 2. Brand Logos in Asset/svg/brand/
writeSvg('Asset/svg/brand/brand-nevucore.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="40" viewBox="0 0 160 40">
  <rect width="160" height="40" rx="6" fill="#141416"/>
  <circle cx="20" cy="20" r="7" fill="#e32b3c"/>
  <text x="36" y="26" fill="#f2efeb" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="16" letter-spacing="2">NEVUCORE</text>
</svg>`);

writeSvg('Asset/svg/brand/brand-unreal.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="40" viewBox="0 0 160 40">
  <rect width="160" height="40" rx="6" fill="#141416"/>
  <circle cx="22" cy="20" r="10" fill="#222228" stroke="#ffffff" stroke-width="1.5"/>
  <text x="22" y="25" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="12" text-anchor="middle">U</text>
  <text x="42" y="25" fill="#f2efeb" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="14" letter-spacing="1">UNREAL 5</text>
</svg>`);

writeSvg('Asset/svg/brand/brand-rust.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="40" viewBox="0 0 160 40">
  <rect width="160" height="40" rx="6" fill="#141416"/>
  <circle cx="20" cy="20" r="8" fill="none" stroke="#dea584" stroke-width="2"/>
  <text x="20" y="24" fill="#dea584" font-family="sans-serif" font-weight="900" font-size="11" text-anchor="middle">R</text>
  <text x="38" y="26" fill="#f2efeb" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="14" letter-spacing="2">RUST</text>
</svg>`);

writeSvg('Asset/svg/brand/brand-nextjs.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="40" viewBox="0 0 160 40">
  <rect width="160" height="40" rx="6" fill="#141416"/>
  <circle cx="22" cy="20" r="9" fill="#000000" stroke="#444" stroke-width="1"/>
  <text x="22" y="25" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="11" text-anchor="middle">N</text>
  <text x="40" y="25" fill="#f2efeb" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="14" letter-spacing="1">NEXT.JS</text>
</svg>`);

writeSvg('Asset/svg/brand/brand-threejs.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="40" viewBox="0 0 160 40">
  <rect width="160" height="40" rx="6" fill="#141416"/>
  <polygon points="14,28 22,12 30,28" fill="none" stroke="#61dafb" stroke-width="2"/>
  <text x="42" y="25" fill="#f2efeb" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="14" letter-spacing="1">THREE.JS</text>
</svg>`);

writeSvg('Asset/svg/brand/brand-cpp.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="40" viewBox="0 0 160 40">
  <rect width="160" height="40" rx="6" fill="#141416"/>
  <text x="22" y="26" fill="#31a8ff" font-family="sans-serif" font-weight="900" font-size="15">C++</text>
  <text x="56" y="26" fill="#f2efeb" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="15" letter-spacing="1.5">23</text>
</svg>`);

writeSvg('Asset/svg/brand/brand-postgres.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="40" viewBox="0 0 160 40">
  <rect width="160" height="40" rx="6" fill="#141416"/>
  <circle cx="20" cy="20" r="8" fill="#336791"/>
  <text x="38" y="25" fill="#f2efeb" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="14" letter-spacing="1">POSTGRES</text>
</svg>`);

writeSvg('Asset/svg/brand/brand-docker.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="40" viewBox="0 0 160 40">
  <rect width="160" height="40" rx="6" fill="#141416"/>
  <rect x="12" y="15" width="4" height="4" fill="#0db7ed"/>
  <rect x="18" y="15" width="4" height="4" fill="#0db7ed"/>
  <rect x="24" y="15" width="4" height="4" fill="#0db7ed"/>
  <rect x="18" y="10" width="4" height="4" fill="#0db7ed"/>
  <text x="38" y="26" fill="#f2efeb" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="14" letter-spacing="1.5">DOCKER</text>
</svg>`);

writeSvg('Asset/svg/brand/brand-typescript.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="40" viewBox="0 0 160 40">
  <rect width="160" height="40" rx="6" fill="#141416"/>
  <rect x="12" y="11" width="18" height="18" rx="3" fill="#3178c6"/>
  <text x="21" y="24" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="11" text-anchor="middle">TS</text>
  <text x="38" y="26" fill="#f2efeb" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="13" letter-spacing="1.2">TYPESCRIPT</text>
</svg>`);

writeSvg('Asset/svg/brand/brand-graphql.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="40" viewBox="0 0 160 40">
  <rect width="160" height="40" rx="6" fill="#141416"/>
  <circle cx="20" cy="20" r="7" fill="none" stroke="#e10098" stroke-width="2"/>
  <text x="38" y="26" fill="#f2efeb" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="14" letter-spacing="1.5">GRAPHQL</text>
</svg>`);

console.log('Successfully generated all valid, well-formed SVGs with XML quotes!');

