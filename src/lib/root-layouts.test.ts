import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'fs';
import path from 'path';
import { AR_MIRROR_EXTRA, LOCALIZED_PATHS, AR_PATHS } from './i18nRoutes';

const root = path.resolve(__dirname, '../..');
const read = (rel: string) => readFileSync(path.join(root, rel), 'utf8');

describe('root layouts render the document language on the server', () => {
  it('has one root layout per language group and no app/layout.tsx', () => {
    expect(existsSync(path.join(root, 'app/layout.tsx'))).toBe(false);
    expect(read('app/(site)/layout.tsx')).toMatch(/lang="en"\s+dir="ltr"/);
    expect(read('app/(ar)/layout.tsx')).toMatch(/lang="ar"\s+dir="rtl"/);
    expect(read('app/(ur)/layout.tsx')).toMatch(/lang="ur"\s+dir="rtl"/);
  });

  it('every /ar app mirror path has a route file under app/(ar)/ar', () => {
    const mirrors = [...LOCALIZED_PATHS, ...AR_MIRROR_EXTRA].filter((p) => !(p in AR_PATHS));
    for (const p of mirrors) {
      // /best-day-for/<purpose> is one dynamic route
      const rel = p.startsWith('/best-day-for/') ? '/best-day-for/[purpose]' : p === '/' ? '' : p;
      expect(existsSync(path.join(root, 'app/(ar)/ar', rel, 'page.tsx')), p).toBe(true);
    }
  });
});
