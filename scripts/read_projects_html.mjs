import fs from 'node:fs';

const html = fs.readFileSync('projects.html', 'utf8');
const lines = html.split('\n');
console.log(lines.slice(70, 260).join('\n'));

