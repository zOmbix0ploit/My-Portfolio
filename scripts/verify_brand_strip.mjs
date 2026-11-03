import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const port = 9229;
const artifactDir = 'C:\\Users\\User\\.gemini\\antigravity\\brain\\ed665ab8-893a-432d-8ec8-2e1276837879';

async function testBrand() {
  const proc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,900',
    '--user-data-dir=C:\\Users\\User\\.gemini\\antigravity\\brain\\ed665ab8-893a-432d-8ec8-2e1276837879\\scratch\\verify_brands',
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

    // Scroll to brand section
    await sendCommand('Runtime.evaluate', {
      expression: `document.querySelector('.brand-section')?.scrollIntoView({ behavior: 'instant', block: 'center' });`
    });

    await new Promise(r => setTimeout(r, 1500));

    // Inspect brand pills
    const pillCheck = await sendCommand('Runtime.evaluate', {
      expression: `(() => {
        const pills = Array.from(document.querySelectorAll('.brand-pill'));
        return JSON.stringify({
          count: pills.length,
          firstPillText: pills[0]?.textContent?.trim(),
          trackAnimation: window.getComputedStyle(document.querySelector('.brand-marquee-track'))?.animationName
        });
      })()`
    });
    console.log('Brand check:', JSON.parse(pillCheck.result.value));

    // Capture screenshot of Brand Strip
    const snap = await sendCommand('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'snap_luxury_brand_strip.png'), Buffer.from(snap.data, 'base64'));
    console.log('Saved snap_luxury_brand_strip.png');

    ws.close();
  } finally {
    proc.kill();
  }
}

testBrand().catch(console.error);

