import fs from 'node:fs';

const code = fs.readFileSync('C:/Users/User/.gemini/antigravity/brain/ed665ab8-893a-432d-8ec8-2e1276837879/scratch/verbatim_app.jsx', 'utf8');

// Find lines with project.
const lines = code.split('\n');
const usages = new Set();
lines.forEach(l => {
  const m = l.match(/project\.([A-Za-z0-9_]+)/g);
  if (m) m.forEach(u => usages.add(u));
});
console.log('Fields accessed on project:', [...usages]);

