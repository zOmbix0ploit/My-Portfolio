import { spawn } from 'node:child_process';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const port = 9225;

async function checkImgs() {
  const proc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--user-data-dir=C:\\Users\\User\\.gemini\\antigravity\\brain\\ed665ab8-893a-432d-8ec8-2e1276837879\\scratch\\chk_svg_clean',
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
    await new Promise(r => setTimeout(r, 1000));

    const evalRes = await sendCommand('Runtime.evaluate', {
      expression: `(() => {
        const imgs = Array.from(document.querySelectorAll('img'));
        return JSON.stringify(imgs.map(i => ({
          src: i.src,
          complete: i.complete,
          naturalWidth: i.naturalWidth,
          naturalHeight: i.naturalHeight,
          alt: i.alt
        })));
      })()`
    });

    const parsed = JSON.parse(evalRes.result.value);
    console.log(`Found ${parsed.length} images:`);
    const broken = parsed.filter(p => !p.complete || p.naturalWidth === 0);
    console.log(`Broken images: ${broken.length}`);
    if (broken.length > 0) {
      console.log('Broken details:', broken);
    } else {
      console.log('ALL IMAGES LOADED SUCCESSFULLY (naturalWidth > 0)!');
    }

    ws.close();
  } finally {
    proc.kill();
  }
}

checkImgs().catch(console.error);

