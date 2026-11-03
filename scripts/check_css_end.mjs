import fs from 'node:fs';

const raw = fs.readFileSync('C:/Users/User/.gemini/antigravity/brain/ed665ab8-893a-432d-8ec8-2e1276837879/scratch/verbatim_styles.css', 'utf8');

const lines = raw.split('\n');
lines.forEach((l, i) => {
  if (l.includes('</USER_REQUEST>') || l.includes('</PLAN>') || l.includes('###') || l.includes('## Verification')) {
    console.log(`Markdown detected at line ${i}: ${l.slice(0, 60)}`);
  }
});

