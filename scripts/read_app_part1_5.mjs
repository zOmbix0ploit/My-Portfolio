import fs from 'node:fs';

const code = fs.readFileSync('C:/Users/User/.gemini/antigravity/brain/ed665ab8-893a-432d-8ec8-2e1276837879/scratch/verbatim_app.jsx', 'utf8');

const lines = code.split('\n');
console.log('Lines 150 to 180:');
console.log(lines.slice(150, 180).join('\n'));

