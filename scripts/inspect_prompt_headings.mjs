import fs from 'node:fs';

const content = fs.readFileSync('C:/Users/User/.gemini/antigravity/brain/ed665ab8-893a-432d-8ec8-2e1276837879/scratch/renando_full_prompt.txt', 'utf8');

// Find all headings
const lines = content.split('\n');
lines.forEach((l, idx) => {
  if (l.startsWith('#') || l.startsWith('##') || l.startsWith('###')) {
    console.log(`L${idx + 1}: ${l}`);
  }
});

