import fs from 'node:fs';

const content = fs.readFileSync('C:/Users/User/.gemini/antigravity/brain/ed665ab8-893a-432d-8ec8-2e1276837879/scratch/user_renando_prompt.txt', 'utf8');

// Print sections starting with numbers or titles
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.match(/^[0-9]+\.\s+/) || line.match(/^##?\s+[0-9]+/)) {
    console.log(`Line ${i}: ${line.slice(0, 80)}`);
  }
}

