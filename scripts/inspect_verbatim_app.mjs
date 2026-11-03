import fs from 'node:fs';

const code = fs.readFileSync('C:/Users/User/.gemini/antigravity/brain/ed665ab8-893a-432d-8ec8-2e1276837879/scratch/verbatim_app.jsx', 'utf8');

// Print first 100 lines
const lines = code.split('\n');
console.log('=== FIRST 100 LINES OF VERBATIM APP.JSX ===');
console.log(lines.slice(0, 100).join('\n'));

