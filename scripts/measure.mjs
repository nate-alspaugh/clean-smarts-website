import { chromium } from 'playwright';

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();
await page.goto('http://localhost:5173/home', { waitUntil: 'networkidle' });

const data = await page.evaluate(() => {
  const section = document.querySelector('main section');
  const masonry = section?.querySelector('.grid.grid-cols-2')?.parentElement;
  const inner = masonry?.querySelector('.grid.grid-cols-2');
  const cardCols = inner?.querySelectorAll(':scope > div') || [];
  const lastLeft = cardCols[0]?.lastElementChild;
  const lastRight = cardCols[1]?.lastElementChild;
  return {
    section: section?.getBoundingClientRect().toJSON(),
    masonry: masonry?.getBoundingClientRect().toJSON(),
    leftCol: cardCols[0]?.getBoundingClientRect().toJSON(),
    rightCol: cardCols[1]?.getBoundingClientRect().toJSON(),
    lastLeftCard: lastLeft?.getBoundingClientRect().toJSON(),
    lastRightCard: lastRight?.getBoundingClientRect().toJSON(),
  };
});

console.log(JSON.stringify(data, null, 2));
await browser.close();
