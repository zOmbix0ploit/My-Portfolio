import fs from 'node:fs';

const code = fs.readFileSync('C:/Users/User/.gemini/antigravity/brain/ed665ab8-893a-432d-8ec8-2e1276837879/scratch/verbatim_app.jsx', 'utf8');

// Find all function declarations
const matches = code.match(/function\s+([A-Za-z0-9_]+)/g) || [];
console.log('Functions in verbatim_app.jsx:', matches);

