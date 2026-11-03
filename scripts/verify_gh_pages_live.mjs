import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const port = 9233;
const artifactDir = 'C:\\Users\\User\\.gemini\\antigravity\\brain\\ed665ab8-893a-432d-8ec8-2e1276837879';

async function testLiveGhPages() {
  const proc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,900',
    '--user-data-dir=C:\\Users\\User\\.gemini\\antigravity\\brain\\ed665ab8-893a-432d-8ec8-2e1276837879\\scratch\\verify_gh_pages_live',
    'https://zombix0ploit.github.io/My-Portfolio/'
  ]);

  await new Promise(r => setTimeout(r, 3000));
  try {
    const listRes = await fetch(`http://127.0.0.1:${port}/json`);
    const tabs = await listRes.json();
    const tab = tabs.find(t => t.type === 'page' || t.url.includes('zombix0ploit.github.io'));
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

    await new Promise(r => setTimeout(r, 2000));

    const checkDom = await sendCommand('Runtime.evaluate', {
      expression: `(() => {
        return JSON.stringify({
          title: document.title,
          rootChildCount: document.getElementById('root')?.children?.length,
          heroHeading: document.querySelector('.hero-intro h1')?.textContent,
          backgroundTitle: document.querySelector('.hero-title')?.textContent
        });
      })()`
    });
    console.log('DOM check on live GitHub Pages:', JSON.parse(checkDom.result.value));

    // Capture screenshot of live GitHub Pages site
    const snap = await sendCommand('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'snap_live_gh_pages.png'), Buffer.from(snap.data, 'base64'));
    console.log('Saved snap_live_gh_pages.png');

    ws.close();
  } finally {
    proc.kill();
  }
}

testLiveGhPages().catch(console.error);

