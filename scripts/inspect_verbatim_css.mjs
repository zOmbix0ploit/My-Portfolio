import fs from 'node:fs';

const css = fs.readFileSync('C:/Users/User/.gemini/antigravity/brain/ed665ab8-893a-432d-8ec8-2e1276837879/scratch/verbatim_styles.css', 'utf8');

const lines = css.split('\n');
console.log('Total CSS lines:', lines.length);
console.log('=== FIRST 80 LINES OF VERBATIM STYLES.CSS ===');
console.log(lines.slice(0, 80).join('\n'));

