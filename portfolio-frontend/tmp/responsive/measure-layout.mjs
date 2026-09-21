import { spawn } from "node:child_process";

const chrome = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const url = "http://127.0.0.1:5173/";

async function sleep(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

async function getJson(endpoint) {
  const res = await fetch(endpoint);
  if (!res.ok) throw new Error(`${endpoint} failed: ${res.status}`);
  return res.json();
}

async function evaluate(wsUrl, expression) {
  const ws = new WebSocket(wsUrl);
  let id = 0;
  const pending = new Map();

  ws.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    const resolver = pending.get(message.id);
    if (resolver) {
      pending.delete(message.id);
      resolver(message);
    }
  });

  await new Promise((resolve, reject) => {
    ws.addEventListener("open", resolve, { once: true });
    ws.addEventListener("error", reject, { once: true });
  });

  function send(method, params = {}) {
    const callId = ++id;
    ws.send(JSON.stringify({ id: callId, method, params }));
    return new Promise((resolve) => pending.set(callId, resolve));
  }

  await send("Runtime.enable");
  await send("Emulation.setDeviceMetricsOverride", {
    width: Number(expression.match(/__WIDTH__(\d+)/)?.[1] ?? 0) || undefined,
    height: Number(expression.match(/__HEIGHT__(\d+)/)?.[1] ?? 0) || undefined,
    deviceScaleFactor: 1,
    mobile: false,
  });
  const result = await send("Runtime.evaluate", {
    expression: expression.replace(/\/\*__WIDTH__\d+__HEIGHT__\d+\*\//, ""),
    returnByValue: true,
    awaitPromise: true,
  });

  ws.close();
  return result.result.result.value;
}

async function measure(width, height, port) {
  const profile = `D:\\portfolio-frontend\\portfolio-frontend\\tmp\\responsive\\profile-${width}`;
  const child = spawn(chrome, [
    "--headless=new",
    "--disable-gpu",
    `--remote-debugging-port=${port}`,
    "--force-device-scale-factor=1",
    `--window-size=${width},${height}`,
    `--user-data-dir=${profile}`,
    url,
  ]);

  try {
    await sleep(2000);
    const tabs = await getJson(`http://127.0.0.1:${port}/json`);
    const tab = tabs.find((item) => item.url.startsWith(url));
    if (!tab) throw new Error("Local tab not found");

    const value = await evaluate(
      tab.webSocketDebuggerUrl,
      `/*__WIDTH__${width}__HEIGHT__${height}*/(() => {
        const rect = (el) => {
          if (!el) return null;
          const r = el.getBoundingClientRect();
          return { left: r.left, right: r.right, width: r.width, top: r.top, bottom: r.bottom };
        };
        const section = document.querySelector('.section');
        const about = document.querySelector('#about p:last-child');
        const heroTitle = document.querySelector('#top h1');
        return {
          innerWidth,
          clientWidth: document.documentElement.clientWidth,
          scrollWidth: document.documentElement.scrollWidth,
          bodyScrollWidth: document.body.scrollWidth,
          section: rect(section),
          about: rect(about),
          heroTitle: rect(heroTitle),
        };
      })()`
    );
    console.log(JSON.stringify({ viewport: `${width}x${height}`, ...value }, null, 2));
  } finally {
    child.kill();
  }
}

await measure(390, 1200, 9224);
await measure(768, 1400, 9225);
