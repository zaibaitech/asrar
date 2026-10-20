import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';
import { makeCatalog } from '../components/i18n/ArabicDomTranslator';

/** Phase 6B: internal markers and non-functional controls found while localizing. */
const root = path.resolve(__dirname, '../..');
const raw: Record<string, string> = JSON.parse(readFileSync(path.join(root, 'public/i18n/ur-ui.json'), 'utf8'));
const catalog = makeCatalog(raw);

describe('Phase 6B: source-content issues', () => {
  it('no Urdu catalog value shows a source file name (business.ts) to the user; Arabic already omits it', () => {
    expect(Object.entries(raw).filter(([, v]) => /\b\w+\.tsx?\b/.test(v)).map(([k]) => k)).toEqual([]);
    const ur = catalog.get('Mercury is retrograde — the same classical caution cited against contracts (business.ts) applies here: avoid starting serious study, an exam, or a new course while Mercury retrogrades.');
    expect(ur).toBeTruthy();
  });

  it('the [SCHOLAR-REVIEW] flag is carried over verbatim (same as en/fr) until the owner decides how to show it', () => {
    const k = Object.keys(raw).find((x) => x.startsWith('re:^This window is in the planetary hour'))!;
    expect(raw[k]).toContain('[SCHOLAR-REVIEW]');
  });

  it('the "Show N more traits" button expands the traits (its handler is no longer empty)', () => {
    const src = readFileSync(path.join(root, 'src/features/istikhara/components/IstikharaResults.tsx'), 'utf8');
    expect(src).not.toMatch(/onClick=\{\(\) => \{\}\}/);
    expect(src).toContain('onClick={() => setExpanded(true)}');
    expect(src).toContain('const showEverything = showAll || expanded;');
    expect(catalog.get('Show 7 more traits')).toBe('مزید 7 خصوصیات دکھائیں');
  });
});
