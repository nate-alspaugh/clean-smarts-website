import { test, expect } from '@playwright/test';

/**
 * Smoke test that runs against every breakpoint project defined in
 * `playwright.config.ts`. Each project supplies its own viewport, so
 * this test only needs to load the home page and assert it renders.
 *
 * To run against a single breakpoint:
 *   bunx playwright test --project=w1024
 */
test('home renders at every breakpoint', async ({ page }, testInfo) => {
  await page.goto('/');
  await expect(page.locator('body')).toBeVisible();

  await testInfo.attach(`home-${testInfo.project.name}`, {
    body: await page.screenshot({ fullPage: true }),
    contentType: 'image/png',
  });
});
