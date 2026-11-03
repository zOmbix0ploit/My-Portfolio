import fs from 'node:fs';

const code = fs.readFileSync('C:/Users/User/.gemini/antigravity/brain/ed665ab8-893a-432d-8ec8-2e1276837879/scratch/verbatim_app.jsx', 'utf8');

const lines = code.split('\n');
console.log('Lines 180 to 280:');
console.log(lines.slice(180, 280).join('\n'));

