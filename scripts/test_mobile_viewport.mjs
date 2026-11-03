import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const port = 9234;
const artifactDir = 'C:\\Users\\User\\.gemini\\antigravity\\brain\\ed665ab8-893a-432d-8ec8-2e1276837879';

async function testMobile() {
  const proc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--window-size=393,852',
    '--user-data-dir=C:\\Users\\User\\.gemini\\antigravity\\brain\\ed665ab8-893a-432d-8ec8-2e1276837879\\scratch\\verify_mobile',
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

    // Emulate device metrics for iPhone 16 (393 x 852, dpr 3, mobile: true)
    await sendCommand('Emulation.setDeviceMetricsOverride', {
      width: 393,
      height: 852,
      deviceScaleFactor: 3,
      mobile: true
    });

    await new Promise(r => setTimeout(r, 1500));

    // Capture Hero on mobile
    const heroSnap = await sendCommand('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'snap_mobile_hero_before.png'), Buffer.from(heroSnap.data, 'base64'));
    console.log('Saved snap_mobile_hero_before.png');

    ws.close();
  } finally {
    proc.kill();
  }
}

testMobile().catch(console.error);
