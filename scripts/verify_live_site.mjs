import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const port = 9228;
const artifactDir = 'C:\\Users\\User\\.gemini\\antigravity\\brain\\ed665ab8-893a-432d-8ec8-2e1276837879';

async function testSite() {
  const proc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,900',
    '--user-data-dir=C:\\Users\\User\\.gemini\\antigravity\\brain\\ed665ab8-893a-432d-8ec8-2e1276837879\\scratch\\verify_videos',
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

    // Wait 3 seconds for initial video buffering and autoPlay
    await new Promise(r => setTimeout(r, 3000));

    // Capture Hero screenshot
    const heroSnap = await sendCommand('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'snap_verified_hero.png'), Buffer.from(heroSnap.data, 'base64'));
    console.log('Saved snap_verified_hero.png');

    // Scroll to Portfolio section (#portfolio)
    await sendCommand('Runtime.evaluate', {
      expression: `document.getElementById('portfolio').scrollIntoView({ behavior: 'instant', block: 'start' });`
    });

    // Wait 3 seconds for videos to render frames
    await new Promise(r => setTimeout(r, 3000));

    // Inspect video elements
    const videoStats = await sendCommand('Runtime.evaluate', {
      expression: `(() => {
        const vids = Array.from(document.querySelectorAll('.card-video-element'));
        return JSON.stringify(vids.map(v => ({
          src: v.src,
          paused: v.paused,
          readyState: v.readyState,
          currentTime: v.currentTime,
          videoWidth: v.videoWidth,
          videoHeight: v.videoHeight
        })));
      })()`
    });
    console.log('Video stats on portfolio cards:', JSON.parse(videoStats.result.value));

    // Capture Portfolio screenshot
    const portfolioSnap = await sendCommand('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'snap_verified_portfolio_videos.png'), Buffer.from(portfolioSnap.data, 'base64'));
    console.log('Saved snap_verified_portfolio_videos.png');

    // Scroll to About section (#about)
    await sendCommand('Runtime.evaluate', {
      expression: `document.getElementById('about').scrollIntoView({ behavior: 'instant', block: 'start' });`
    });
    await new Promise(r => setTimeout(r, 2000));

    // Capture About screenshot
    const aboutSnap = await sendCommand('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'snap_verified_about_software.png'), Buffer.from(aboutSnap.data, 'base64'));
    console.log('Saved snap_verified_about_software.png');

    ws.close();
  } finally {
    proc.kill();
  }
}

testSite().catch(console.error);

