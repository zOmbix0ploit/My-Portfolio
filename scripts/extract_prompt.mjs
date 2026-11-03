import fs from 'node:fs';
import readline from 'node:readline';

const rl = readline.createInterface({
  input: fs.createReadStream('C:/Users/User/.gemini/antigravity/brain/ed665ab8-893a-432d-8ec8-2e1276837879/.system_generated/logs/transcript_full.jsonl')
});

let lineNum = 0;
rl.on('line', (line) => {
  lineNum++;
  if (lineNum === 1092) {
    try {
      const obj = JSON.parse(line);
      fs.writeFileSync('C:/Users/User/.gemini/antigravity/brain/ed665ab8-893a-432d-8ec8-2e1276837879/scratch/renando_full_prompt.txt', obj.content || '');
      console.log('Saved full prompt, length:', obj.content?.length);
    } catch (e) {
      console.error(e);
    }
    process.exit(0);
  }
});

