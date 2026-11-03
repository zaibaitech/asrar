import { describe, it, expect } from 'vitest';
import { readdirSync, readFileSync } from 'fs';
import path from 'path';

describe('sources layer never tracks or sends user input', () => {
  const dir = __dirname;
  const files = readdirSync(dir).filter((f) => /\.(ts|tsx)$/.test(f) && !/\.test\./.test(f));
  it.each(files)('%s has no analytics call and only fetches the Tanzil verse route', (f) => {
    const src = readFileSync(path.join(dir, f), 'utf8');
    expect(src).not.toMatch(/useAnalytics|useTrackResult|track\(|gtag|posthog|plausible|sendBeacon/i);
    const fetches = [...src.matchAll(/fetch\(\s*`?['"]?([^'"`)]*)/g)].map((m) => m[1]);
    for (const url of fetches) expect(url).toMatch(/^\/api\/quran-verse\/\$\{surah\}\/\$\{ayah\}/);
  });
});
