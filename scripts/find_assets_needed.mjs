import fs from 'node:fs';

const appCode = fs.readFileSync('C:/Users/User/.gemini/antigravity/brain/ed665ab8-893a-432d-8ec8-2e1276837879/scratch/verbatim_app.jsx', 'utf8');

// Find all matches for ./Asset or Asset or data/
const matches = appCode.match(/(?:\.\/Asset|\/Asset|Asset)[^"')\s,]+/g) || [];
console.log('Unique Asset references in verbatim_app.jsx:');
console.log([...new Set(matches)]);

