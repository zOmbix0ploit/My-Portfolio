import fs from 'node:fs';

const code = fs.readFileSync('C:/Users/User/.gemini/antigravity/brain/ed665ab8-893a-432d-8ec8-2e1276837879/scratch/verbatim_app.jsx', 'utf8');

// Find lines with brands or b.
const lines = code.split('\n');
lines.forEach((l, i) => {
  if (l.includes('brands') || l.includes('BrandStrip')) {
    console.log(`L${i}: ${l}`);
  }
});

