import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const config = readFileSync(resolve(process.cwd(), 'next.config.js'), 'utf8');
const cspBlock = config.slice(
  config.indexOf('key: \'Content-Security-Policy\''),
  config.indexOf('key: \'X-Frame-Options\''),
);

describe('Content-Security-Policy origins', () => {
  it('does not whitelist the typo third-party host asrar.app.com', () => {
    expect(cspBlock).not.toMatch(/asrar\.app\.com/);
    expect(config).not.toMatch(/asrar\.app\.com/);
  });

  it('lists the site’s own origins and keeps third-party script/connect hosts', () => {
    expect(cspBlock).toMatch(/https:\/\/www\.asrar\.app/);
    expect(cspBlock).toMatch(/https:\/\/asrar\.app(?!\.com)/);
    for (const host of [
      'https://vercel.live',
      'https://*.vercel.live',
      'https://www.googletagmanager.com',
      'https://www.google-analytics.com',
      'https://www.clarity.ms',
      'https://*.clarity.ms',
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://azjgakbhovanweelkezt.supabase.co',
      'https://nominatim.openstreetmap.org',
      'https://api.quran.com',
      'https://api.alquran.cloud',
      'https://c.bing.com',
      'https://www.youtube-nocookie.com',
    ]) {
      expect(cspBlock, host).toContain(host);
    }
  });
});
