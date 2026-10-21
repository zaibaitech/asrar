import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';
import { ARCHETYPES } from '../features/calculator/lib/calculatorContent';
import { SACRED_SIGNIFICANCE } from '../features/calculator/lib/sacred';
import { PROPHETIC_NAMES_201 } from '../features/ramadanChallenges/propheticNames201';

/** Source fixes approved by Mario on 21 Oct 2026 (option A, asrar-source-changes-for-mario.md). */
const root = path.resolve(__dirname, '../..');
const read = (f: string) => readFileSync(path.join(root, f), 'utf8');
const ur: Record<string, string> = JSON.parse(read('public/i18n/ur-ui.json'));
const ar: Record<string, string> = JSON.parse(read('public/i18n/ar-ui.json'));
const fixes: { id: string; en: string; en_before: string; ur: string; status: string }[] =
  JSON.parse(read('scripts/i18n/ur/review_status.json')).source_fixes_2026_10_21;
const arFixes: Record<string, { ar: string; status: string }> = JSON.parse(read('scripts/i18n/ar/source-fixes-2026-10.json'));

describe('source fixes (21 Oct 2026)', () => {
  it('the old claims are gone from the English data', () => {
    const buruj = read('src/data/burujData.json');
    for (const s of ['healing sessions', 'healing abilities', 'healing presence', 'child mortality', 'help always arrives',
      '"Protected ', 'Salvation Army', 'month of transformation', 'in Islamic numerology']) expect(buruj, s).not.toContain(s);
    expect(read('src/data/zodiacSadaqahData.ts')).not.toMatch(/[Pp]rotective ring/);
    for (const f of ['app/(site)/sadaqa/page.tsx', 'src/features/istikhara/components/SadaqaTab.tsx', 'src/data/zodiacSadaqahData.ts'])
      expect(read(f), f).not.toContain('Seringe');
  });

  it('archetypes 3 and 8: EN/FR/AR use the approved wording', () => {
    expect(ARCHETYPES[3].title.en).toBe('The Creative');
    expect(ARCHETYPES[3].description.ar).not.toContain('الثالوث');
    expect(ARCHETYPES[3].description.fr).toContain('Triple harmonie');
    expect(ARCHETYPES[8].description.ar).toContain('تحقيق الأهداف');
    expect(ARCHETYPES[8].description.ar).not.toContain('التجلي');
    expect(ARCHETYPES[8].qualities.en).toContain("Consequences of one's deeds");
    expect(ARCHETYPES[8].qualities.ar).toContain('الجزاء من جنس العمل');
    expect(JSON.stringify(ARCHETYPES)).not.toMatch(/Karma|الكرما|Trinité|trinity/);
  });

  it('sacred.ts: 12 and 19 reworded, Ḥ typo fixed; 74:30 matches Tanzil quran-simple', () => {
    expect(SACRED_SIGNIFICANCE[12].en).toBe('Twelve months of the year (9:36)');
    expect(SACRED_SIGNIFICANCE[12].ar).toBe('اثنا عشر شهرًا في السنة (التوبة: 36)');
    expect(SACRED_SIGNIFICANCE[19].fr).not.toMatch(/miracle/i);
    expect(SACRED_SIGNIFICANCE[19].ar).not.toContain('المعجزة');
    expect(SACRED_SIGNIFICANCE[19].ar).toContain('﴿عَلَيْهَا تِسْعَةَ عَشَرَ﴾ (المدثر: 30)');
    expect(SACRED_SIGNIFICANCE[19].en).toContain('عَلَيْهَا تِسْعَةَ عَشَرَ');
    expect(JSON.stringify(SACRED_SIGNIFICANCE)).not.toMatch(/Ḩ|Imam/);
  });

  it('Ḥāshir gets its own gloss; Jāmiʿ keeps "The Gatherer"', () => {
    const by = (t: string) => PROPHETIC_NAMES_201.find((n) => n.transliteration === t)!;
    expect(by('Ḥāshirun').meaning).toBe('The one at whose feet people are gathered');
    expect(by('Jāmiʿun').meaning).toBe('The Gatherer');
    expect(ur['The one at whose feet people are gathered']).toBe('جن کے قدموں میں لوگ جمع کیے جائیں گے');
    expect(ur['The Gatherer']).toBe('جمع کرنے والا');
  });

  it('every new English key has Urdu and, where the old key had Arabic, Arabic', () => {
    for (const f of fixes) expect(ur[f.en], f.en).toBe(f.ur);
    for (const [k, e] of Object.entries(arFixes)) expect(ar[k], k).toBe(e.ar);
    expect(fixes.filter((f) => f.status === 'draft')).toEqual([]); // all reviewed in Batch 16 (pass 5)
  });

  it('DivineNamePicker close button is labelled "Close"', () => {
    expect(read('src/features/calculator/components/DivineNamePicker.tsx')).toContain("aria-label={t('close')}");
  });

  it('«يَا رَحْمٰنُ» display spelling; the 298 count is unchanged', () => {
    const z = read('src/lib/planetaryZikr.ts');
    expect(z).not.toContain('يَا رَحْمَانُ');
    expect(z.match(/arabicName: 'يَا رَحْمٰنُ', count: '298'/g)).toHaveLength(2);
    expect(read('src/data/burujData.json')).toContain('"arabic": "يَا رَحْمٰنُ يَا رَحِيمُ"');
  });
});

describe('Batch 16 (pass 5): reviewer corrections for the PR #101 strings', () => {
  const ur = JSON.parse(readFileSync(path.join(process.cwd(), 'public/i18n/ur-ui.json'), 'utf8')) as Record<string, string>;
  const ar = JSON.parse(readFileSync(path.join(process.cwd(), 'public/i18n/ar-ui.json'), 'utf8')) as Record<string, string>;
  it('P1–P11 say protection is sought from Allah, not that it is held', () => {
    const p = Object.entries(ur).filter(([k]) => k.startsWith('Traditionally, sought protection'));
    expect(p.length).toBe(10);
    for (const [, v] of p) { expect(v).not.toContain('محفوظ سمجھے'); expect(v).toMatch(/اللہ (سے|کی) (حفاظت|پناہ)/); }
    expect(ur['Traditionally, seen as under divine care despite their struggles with anger']).toContain('اللہ کی عنایت');
  });
  it('the Arabic ring text says the ring is given in charity, with no protective wording', () => {
    expect(ar['A special form of sadaqah associated with Scorpio is giving a ring, with stones such as rose agate or amethyst.']).toContain('التصدّقُ بخاتمٍ');
    const data = readFileSync(path.join(process.cwd(), 'src/data/zodiacSadaqahData.ts'), 'utf8');
    expect(data).not.toMatch(/bague protectrice|خاتم واقٍ|الخاتم الواقي/);
  });
  it('Ḥāshir gloss follows the main riwāya', () => {
    expect(ar['The one at whose feet people are gathered']).toBe('الذي يُحشَرُ الناسُ على قدمِه، أي على أثره');
  });
});
