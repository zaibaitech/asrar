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

  it('the [SCHOLAR-REVIEW] tag is no longer visible in any language: no catalog key or value carries it (or its Urdu/Arabic label)', () => {
    expect(Object.keys(raw).some((k) => k.includes('SCHOLAR-REVIEW'))).toBe(false);
    expect(Object.values(raw).some((v) => v.includes('SCHOLAR') || v.includes('علما کے جائزے کا منتظر'))).toBe(false);
    const ar = JSON.parse(readFileSync(path.join(root, 'public/i18n/ar-ui.json'), 'utf8')) as Record<string, string>;
    expect(Object.keys(ar).some((k) => k.includes('SCHOLAR-REVIEW'))).toBe(false);
    expect(Object.values(ar).some((v) => v.includes('للمراجعة العلمية'))).toBe(false);
    const rule = makeCatalog(raw).get('Moon in lunar mansion 7 — favorable for marriage.')!;
    expect(rule).toBe('قمر منزل نمبر 7 میں ہے — شادی کے لیے موافق۔');
  });

  it('English and French rule text no longer show the marker; it is kept as the scholarReview data flag and a code comment', () => {
    for (const f of ['marriage', 'travel', 'home', 'business', 'education', 'medical']) {
      const src = readFileSync(path.join(root, `src/lib/ikhtiyarat/elections/${f}.ts`), 'utf8');
      expect(src, f).not.toContain('[SCHOLAR-REVIEW]');
      expect(src, f).not.toContain('[À VÉRIFIER PAR UN SAVANT]');
      expect(src, f).toMatch(/scholarReview: (true|waxing)/);
      expect(src, f).toContain('// SCHOLAR-REVIEW:');
    }
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
    expect(ur).toContain('علم الاعداد');
    expect(ur).not.toMatch(/Science of|Discover/);
  });
});
