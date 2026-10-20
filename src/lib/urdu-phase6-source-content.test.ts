import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';
import { makeCatalog } from '../components/i18n/ArabicDomTranslator';

/** Phase 6B: internal markers and non-functional controls found while localizing. */
const root = path.resolve(__dirname, '../..');
const raw: Record<string, string> = JSON.parse(readFileSync(path.join(root, 'public/i18n/ur-ui.json'), 'utf8'));
const catalog = makeCatalog(raw);

describe('Phase 6B: source-content issues', () => {
  it('no user-facing text shows a source file name: the education rule says "in the business rules" in en and fr, and the catalogs follow', () => {
    expect(Object.entries(raw).filter(([, v]) => /\b\w+\.tsx?\b/.test(v)).map(([k]) => k)).toEqual([]);
    const edu = readFileSync(path.join(root, 'src/lib/ikhtiyarat/elections/education.ts'), 'utf8');
    expect(edu).toContain('cited against contracts in the business rules applies here');
    expect(edu).toContain("citée pour les contrats dans les règles des affaires s'applique ici");
    expect(edu).not.toMatch(/(detail_(en|fr)[^\n]*|'|")[^'"\n]*\(business\.ts\)/);
    const en = 'Mercury is retrograde — the same classical caution cited against contracts in the business rules applies here: avoid starting serious study, an exam, or a new course while Mercury retrogrades.';
    expect(catalog.get(en)).toBeTruthy();
    const ar = JSON.parse(readFileSync(path.join(root, 'public/i18n/ar-ui.json'), 'utf8')) as Record<string, string>;
    expect(ar[en]).toBeTruthy();
  });

  it('in Urdu the [SCHOLAR-REVIEW] flag reads «[علما کے جائزے کا منتظر]» (awaiting scholarly review: it never says a scholar approved), in en/fr it is unchanged', () => {
    const LABEL = '[علما کے جائزے کا منتظر]';
    const marked = Object.entries(raw).filter(([k]) => k.includes('SCHOLAR-REVIEW'));
    expect(marked.length).toBeGreaterThanOrEqual(7);
    for (const [k, v] of marked) {
      expect(v, k).toContain(LABEL);
      expect(v, k).not.toContain('SCHOLAR');
      expect(v, k).not.toMatch(/منظور|تصدیق شدہ|مصدقہ/);
    }
    expect(Object.values(raw).some((v) => v.includes('SCHOLAR-REVIEW'))).toBe(false);
    const rule = makeCatalog(raw).get('Moon in lunar mansion 7 — favorable for marriage. [SCHOLAR-REVIEW]')!;
    expect(rule).toBe('قمر منزلِ قمر 7 میں ہے — شادی کے لیے موافق۔ ' + LABEL);
  });

  it('English and French rule text keep the marker and its test (useSimpleMode documents it as Detailed-mode terminology)', () => {
    const marriage = readFileSync(path.join(root, 'src/lib/ikhtiyarat/elections/marriage.ts'), 'utf8');
    expect(marriage).toContain('[SCHOLAR-REVIEW]`');
    expect(marriage.match(/detail_fr:[^\n]*\[SCHOLAR-REVIEW\]/)).not.toBeNull();
  });

  it('the "Show N more traits" button expands the traits (its handler is no longer empty)', () => {
    const src = readFileSync(path.join(root, 'src/features/istikhara/components/IstikharaResults.tsx'), 'utf8');
    expect(src).not.toMatch(/onClick=\{\(\) => \{\}\}/);
    expect(src).toContain('onClick={() => setExpanded(true)}');
    expect(src).toContain('const showEverything = showAll || expanded;');
    expect(catalog.get('Show 7 more traits')).toBe('مزید 7 خصوصیات دکھائیں');
  });
});

describe('Phase 6A: mobile-menu About text', () => {
  const src = readFileSync(path.join(root, 'src/components/MobileMenu.tsx'), 'utf8');
  it("Urdu gets whole sentences (the English one is split by bold terms) and en/fr/ar keep the original markup", () => {
    expect(src).toContain("uiLanguage === 'ur' ?");
    expect(src).toContain('<strong>Asrār</strong> is your guide to the Islamic sciences of');
    const ur = src.slice(src.indexOf("uiLanguage === 'ur' ?"), src.indexOf(') : ('));
    expect(ur).toContain('علم الحروف');
    expect(ur).toContain('علم العدد');
    expect(ur).not.toMatch(/Science of|Discover/);
  });
});
