import { defineConfig, devices } from '@playwright/test';

/**
 * Explicit breakpoint widths the project visually tests against.
 *
 * Mirrors the CSS `--breakpoint-*` tokens defined in `src/index.css`.
 * Keep the two lists in sync — adding a breakpoint here means adding
 * it there (and vice versa).
 */
const BREAKPOINT_WIDTHS = [
  320,
  360,
  // 375 is handled via the iPhone SE device preset below
  480,
  640,
  642, // content-based breakpoint
  768,
  860, // content-based breakpoint
  911, // content-based breakpoint
  1024,
  1100, // headline scaling
  1200,
  1300, // navbar/menu (Genius template parity)
  1440,
  1920,
  2560,
] as const;

const DEFAULT_HEIGHT = 900;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
  },

  webServer: {
    command: 'bun run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },

  projects: [
    // 375px — exposed via the iPhone SE preset so device-emulation flags
    // (DPR, user agent, touch) match what the preset documents.
    {
      name: 'w375-iphone-se',
      use: { ...devices['iPhone SE'] },
    },
    ...BREAKPOINT_WIDTHS.map((width) => ({
      name: `w${width}`,
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width, height: DEFAULT_HEIGHT },
      },
    })),
  ],
});
