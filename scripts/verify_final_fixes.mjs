import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const port = 9231;
const artifactDir = 'C:\\Users\\User\\.gemini\\antigravity\\brain\\ed665ab8-893a-432d-8ec8-2e1276837879';

async function verifyAll() {
  const proc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,900',
    '--user-data-dir=C:\\Users\\User\\.gemini\\antigravity\\brain\\ed665ab8-893a-432d-8ec8-2e1276837879\\scratch\\verify_final',
    'http://localhost:8080/index.html'
  ]);

  await new Promise(r => setTimeout(r, 2000));
  try {
    const listRes = await fetch(`http://127.0.0.1:${port}/json`);
    const tabs = await listRes.json();
    const tab = tabs.find(t => t.type === 'page');
    const ws = new WebSocket(tab.webSocketDebuggerUrl);
    await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

    let msgId = 1;
    function sendCommand(method, params = {}) {
      return new Promise((resolve) => {
        const id = msgId++;
        const handler = (evt) => {
          const data = JSON.parse(evt.data);
          if (data.id === id) {
            ws.removeEventListener('message', handler);
            resolve(data.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    await sendCommand('Runtime.enable');
    await sendCommand('Page.enable');

    // 1. Verify CV Link properties
    const cvInfo = await sendCommand('Runtime.evaluate', {
      expression: `(() => {
        const a = Array.from(document.querySelectorAll('a')).find(el => el.textContent.includes('DOWNLOAD CV'));
        return JSON.stringify({
          found: !!a,
          href: a?.getAttribute('href'),
          download: a?.getAttribute('download'),
          text: a?.textContent?.trim()
        });
      })()`
    });
    console.log('CV Button Check:', JSON.parse(cvInfo.result.value));

    // 2. Scroll to Breakdown section
    await sendCommand('Runtime.evaluate', {
      expression: `document.querySelector('.breakdown')?.scrollIntoView({ behavior: 'instant', block: 'center' });`
    });

    await new Promise(r => setTimeout(r, 2000));

    // Check Breakdown images
    const breakdownImages = await sendCommand('Runtime.evaluate', {
      expression: `(() => {
        const imgs = Array.from(document.querySelectorAll('.comparison-stage img'));
        return JSON.stringify(imgs.map(i => ({
          src: i.src,
          complete: i.complete,
          nw: i.naturalWidth,
          nh: i.naturalHeight
        })));
      })()`
    });
    console.log('Breakdown Images Check:', JSON.parse(breakdownImages.result.value));

    // Capture screenshot of Breakdown Section
    const snap = await sendCommand('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'snap_photorealistic_breakdown.png'), Buffer.from(snap.data, 'base64'));
    console.log('Saved snap_photorealistic_breakdown.png');

    ws.close();
  } finally {
    proc.kill();
  }
}

verifyAll().catch(console.error);

