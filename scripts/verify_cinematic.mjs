import { spawn } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function run() {
  console.log('Starting headless Chrome...');
  const port = 9222;
  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--user-data-dir=C:\\Users\\User\\.gemini\\antigravity\\brain\\ed665ab8-893a-432d-8ec8-2e1276837879\\scratch\\chrome_user_data',
    '--window-size=1440,900',
    'http://localhost:8080/index.html'
  ]);

  // Wait 2.5s for Chrome to initialize
  await new Promise(r => setTimeout(r, 2500));

  try {
    const listRes = await fetch(`http://127.0.0.1:${port}/json`);
    const tabs = await listRes.json();
    console.log(`Found ${tabs.length} tabs`);
    const pageTab = tabs.find(t => t.type === 'page' || t.url.includes('localhost'));
    if (!pageTab) {
      throw new Error('No page tab found');
    }

    const wsUrl = pageTab.webSocketDebuggerUrl;
    console.log('Connecting to WebSocket:', wsUrl);

    const ws = new WebSocket(wsUrl);
    await new Promise((res, rej) => {
      ws.onopen = res;
      ws.onerror = rej;
    });

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

    // Enable console and runtime
    await sendCommand('Console.enable');
    await sendCommand('Runtime.enable');
    await sendCommand('Page.enable');

    ws.addEventListener('message', (evt) => {
      const data = JSON.parse(evt.data);
      if (data.method === 'Console.messageAdded') {
        console.log('[BROWSER CONSOLE]', data.params.message.level, data.params.message.text);
      }
      if (data.method === 'Runtime.consoleAPICalled') {
        console.log('[BROWSER API LOG]', data.params.type, ...data.params.args.map(a => a.value || a.description));
      }
      if (data.method === 'Runtime.exceptionThrown') {
        console.error('[BROWSER EXCEPTION]', data.params.exceptionDetails);
      }
    });

    // Wait 2 seconds for React to mount and animations to settle
    await new Promise(r => setTimeout(r, 2000));

    // Evaluate root child elements
    const evalResult = await sendCommand('Runtime.evaluate', {
      expression: 'document.querySelector("#root").innerHTML.length'
    });
    console.log('Root HTML length:', evalResult?.result?.value);

    // Verify sections present
    const sectionsEval = await sendCommand('Runtime.evaluate', {
      expression: `JSON.stringify({
        header: !!document.querySelector('.site-header'),
        heroLettering: document.querySelector('.hero-lettering-bg')?.innerText,
        portrait: !!document.querySelector('.hero-portrait-img'),
        projects: document.querySelectorAll('.project-card').length,
        brands: document.querySelectorAll('.brand-rail-item').length,
        breakdown: !!document.querySelector('.breakdown-container'),
        awards: document.querySelectorAll('.award-row').length,
        accordion: document.querySelectorAll('.journey-item').length,
        contactForm: !!document.querySelector('.brief-form')
      })`
    });
    console.log('Sections status:', sectionsEval?.result?.value);

    // Capture Hero screenshot
    const heroShot = await sendCommand('Page.captureScreenshot', { format: 'png' });
    writeFileSync('C:/Users/User/.gemini/antigravity/brain/ed665ab8-893a-432d-8ec8-2e1276837879/snap_cinematic_hero.png', Buffer.from(heroShot.data, 'base64'));
    console.log('Saved snap_cinematic_hero.png');

    // Scroll to work section and screenshot
    await sendCommand('Runtime.evaluate', {
      expression: `window.scrollTo({ top: 900, behavior: 'instant' })`
    });
    await new Promise(r => setTimeout(r, 800));
    const workShot = await sendCommand('Page.captureScreenshot', { format: 'png' });
    writeFileSync('C:/Users/User/.gemini/antigravity/brain/ed665ab8-893a-432d-8ec8-2e1276837879/snap_cinematic_work.png', Buffer.from(workShot.data, 'base64'));
    console.log('Saved snap_cinematic_work.png');

    // Scroll to breakdown and awards
    await sendCommand('Runtime.evaluate', {
      expression: `window.scrollTo({ top: 2100, behavior: 'instant' })`
    });
    await new Promise(r => setTimeout(r, 800));
    const breakdownShot = await sendCommand('Page.captureScreenshot', { format: 'png' });
    writeFileSync('C:/Users/User/.gemini/antigravity/brain/ed665ab8-893a-432d-8ec8-2e1276837879/snap_cinematic_breakdown.png', Buffer.from(breakdownShot.data, 'base64'));
    console.log('Saved snap_cinematic_breakdown.png');

    // Test clicking the first project card to open Dialog
    await sendCommand('Runtime.evaluate', {
      expression: `document.querySelector('.project-card')?.click()`
    });
    await new Promise(r => setTimeout(r, 800));
    const dialogShot = await sendCommand('Page.captureScreenshot', { format: 'png' });
    writeFileSync('C:/Users/User/.gemini/antigravity/brain/ed665ab8-893a-432d-8ec8-2e1276837879/snap_cinematic_dialog.png', Buffer.from(dialogShot.data, 'base64'));
    console.log('Saved snap_cinematic_dialog.png');

    ws.close();
  } catch (err) {
    console.error('Test run error:', err);
  } finally {
    chromeProc.kill();
  }
}

run();

