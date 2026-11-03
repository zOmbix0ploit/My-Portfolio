import { spawn } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function run() {
  const port = 9225;
  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--user-data-dir=C:\\Users\\User\\.gemini\\antigravity\\brain\\ed665ab8-893a-432d-8ec8-2e1276837879\\scratch\\chrome_user_data_about',
    '--window-size=1440,900',
    'http://localhost:8080/index.html'
  ]);

  await new Promise(r => setTimeout(r, 2500));

  try {
    const listRes = await fetch(`http://127.0.0.1:${port}/json`);
    const tabs = await listRes.json();
    const pageTab = tabs.find(t => t.type === 'page' || t.url.includes('localhost'));
    const ws = new WebSocket(pageTab.webSocketDebuggerUrl);
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

    await sendCommand('Page.enable');
    await sendCommand('Runtime.enable');
    await new Promise(r => setTimeout(r, 1500));

    // Scroll to #portfolio
    await sendCommand('Runtime.evaluate', {
      expression: `document.querySelector('#portfolio').scrollIntoView({ behavior: 'instant', block: 'start' })`
    });
    await new Promise(r => setTimeout(r, 800));
    const portShot = await sendCommand('Page.captureScreenshot', { format: 'png' });
    writeFileSync('C:/Users/User/.gemini/antigravity/brain/ed665ab8-893a-432d-8ec8-2e1276837879/snap_renando_portfolio.png', Buffer.from(portShot.data, 'base64'));

    // Scroll to #about
    await sendCommand('Runtime.evaluate', {
      expression: `document.querySelector('#about').scrollIntoView({ behavior: 'instant', block: 'start' })`
    });
    await new Promise(r => setTimeout(r, 800));
    const aboutShot = await sendCommand('Page.captureScreenshot', { format: 'png' });
    writeFileSync('C:/Users/User/.gemini/antigravity/brain/ed665ab8-893a-432d-8ec8-2e1276837879/snap_renando_about.png', Buffer.from(aboutShot.data, 'base64'));

    // Check images in about
    const imgEval = await sendCommand('Runtime.evaluate', {
      expression: `(() => {
        const imgs = Array.from(document.querySelectorAll('.software-row img'));
        return JSON.stringify(imgs.map(i => ({ src: i.getAttribute('src'), complete: i.complete, naturalWidth: i.naturalWidth })));
      })()`
    });
    console.log('Software row images:', imgEval?.result?.value);

    ws.close();
  } catch(e) {
    console.error(e);
  } finally {
    chromeProc.kill();
  }
}

run();

