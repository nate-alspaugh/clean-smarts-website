import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';

const url = process.argv[2] || 'http://localhost:5173/home';
const out = process.argv[3] || '.context/screenshots/home.png';
const width = Number(process.argv[4] || 1440);
const height = Number(process.argv[5] || 900);

await mkdir(dirname(out), { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width, height } });
const page = await context.newPage();
await page.goto(url, { waitUntil: 'networkidle' });
await page.screenshot({ path: out, fullPage: true });
await browser.close();
console.log(`Saved ${out} (${width}x${height})`);
