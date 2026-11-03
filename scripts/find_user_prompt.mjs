import fs from 'node:fs';
import readline from 'node:readline';

const rl = readline.createInterface({
  input: fs.createReadStream('C:/Users/User/.gemini/antigravity/brain/ed665ab8-893a-432d-8ec8-2e1276837879/.system_generated/logs/transcript_full.jsonl')
});

let lineNum = 0;
rl.on('line', (line) => {
  lineNum++;
  if (line.includes('RENANDO — Cinematic Editor')) {
    try {
      const obj = JSON.parse(line);
      console.log(`Found at line ${lineNum}: source=${obj.source}, type=${obj.type}, length=${obj.content?.length}`);
      if (obj.source === 'USER_EXPLICIT' || obj.type === 'USER_INPUT') {
        fs.writeFileSync('C:/Users/User/.gemini/antigravity/brain/ed665ab8-893a-432d-8ec8-2e1276837879/scratch/user_renando_prompt.txt', obj.content || '');
        console.log('Saved user prompt from line', lineNum);
      }
    } catch(e) {}
  }
});

