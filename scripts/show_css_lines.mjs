import fs from 'node:fs';

const raw = fs.readFileSync('C:/Users/User/.gemini/antigravity/brain/ed665ab8-893a-432d-8ec8-2e1276837879/scratch/verbatim_styles.css', 'utf8');

const lines = raw.split('\n');
console.log('Lines 0 to 12:');
lines.slice(0, 12).forEach((l, i) => console.log(`L${i}: ${l.slice(0, 100)}`));

