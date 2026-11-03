import fs from 'node:fs';

const content = fs.readFileSync('C:/Users/User/.gemini/antigravity/brain/ed665ab8-893a-432d-8ec8-2e1276837879/scratch/user_renando_prompt.txt', 'utf8');

const lines = content.split('\n');
console.log('Total lines:', lines.length);

let sec4Start = -1;
let sec5Start = -1;

lines.forEach((l, i) => {
  if (l.includes('4. src/app.jsx, verbatim')) sec4Start = i;
  if (l.includes('5. src/styles.css, verbatim')) sec5Start = i;
});

console.log('Section 4 starts at line:', sec4Start);
console.log('Section 5 starts at line:', sec5Start);

// Save verbatim Section 4 to scratch
const sec4Code = lines.slice(sec4Start + 1, sec5Start).join('\n');
fs.writeFileSync('C:/Users/User/.gemini/antigravity/brain/ed665ab8-893a-432d-8ec8-2e1276837879/scratch/verbatim_app.jsx', sec4Code);
console.log('Saved verbatim_app.jsx, length:', sec4Code.length);

// Save verbatim Section 5 to scratch
const sec5Code = lines.slice(sec5Start + 1).join('\n');
fs.writeFileSync('C:/Users/User/.gemini/antigravity/brain/ed665ab8-893a-432d-8ec8-2e1276837879/scratch/verbatim_styles.css', sec5Code);
console.log('Saved verbatim_styles.css, length:', sec5Code.length);

