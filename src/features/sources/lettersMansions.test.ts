import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, it, expect } from 'vitest';
import { BUNI_TABLE, letterOrder, lettersMansions } from './lettersMansions';
import { ABJAD_MAGHRIBI, ABJAD_MASHRIQI, LETTER_FORMS } from '../../lib/abjad-maps';
import { DIVINE_RESONANCE_TABLE } from '../calculator/lib/divineResonance';
import { LUNAR_MANSIONS } from '../../lib/lunarMansions';
import { SOURCES, LABELS } from './sourcesContent';

const base = (t: Record<string, number>) => Object.keys(t).filter((c) => !(c in LETTER_FORMS));
const strip = (s: string) => s.replace(/[\u064B-\u0652\u0670\u0640]/g, '').replace(/\s+/g, ' ');

describe("Letters ↔ mansions table attributed to al-Būnī (Shams al-Maʿārif al-Kubrā, al-faṣl al-thānī)", () => {
  it('has 28 entries; all 28 letters and all 28 mansion names are unique', () => {
    expect(BUNI_TABLE).toHaveLength(28);
    expect(new Set(BUNI_TABLE.map(([l]) => l)).size).toBe(28);
    expect(new Set(BUNI_TABLE.map(([, n]) => n)).size).toBe(28);
  });

  it('the 28 letters are exactly the 28 base letters of BOTH abjad tables, so the table is the same under Maghribi and Mashriqi', () => {
    const letters = [...letterOrder()].sort();
    expect(letters).toEqual(base(ABJAD_MAGHRIBI).sort());
    expect(letters).toEqual(base(ABJAD_MASHRIQI).sort());
  });

  it('is in Mashriqi abjad order (ascending Mashriqi value) and matches the Divine Name resonance letter order', () => {
    const values = letterOrder().map((l) => ABJAD_MASHRIQI[l]);
    expect(values).toEqual([...values].sort((a, b) => a - b));
    letterOrder().forEach((l, i) => expect(DIVINE_RESONANCE_TABLE[i + 1].letter).toBe(l));
  });

  it('every entry maps to the app\u2019s mansion of the same number; the cited edition\u2019s spelling differs only in the 6 known places', () => {
    expect(LUNAR_MANSIONS).toHaveLength(28);
    const variants: number[] = [];
    BUNI_TABLE.forEach(([, name], i) => {
      expect(LUNAR_MANSIONS[i].number).toBe(i + 1);
      if (strip(LUNAR_MANSIONS[i].nameArabic) !== name) variants.push(i + 1);
    });
    expect(variants).toEqual([1, 9, 16, 26, 27, 28]);
  });

  it('the app uses the standard spellings for the 6 variant mansions (Ibn Qutayba; Lisān al-ʿArab)', () => {
    const app = (n: number) => strip(LUNAR_MANSIONS[n - 1].nameArabic);
    expect(app(1)).toBe('الشرطان'); // nominative; الشرطين is the oblique case
    expect(app(9)).toBe('الطرف'); // الطرفة is not the mansion's name in Lisān
    expect(app(16)).toBe('الزبانى'); // الزبانا is a variant
    expect(app(26)).toBe('الفرغ المقدم'); // ghayn, not ʿayn
    expect(app(27)).toBe('الفرغ المؤخر');
    expect(app(28)).toBe('بطن الحوت'); // الرشاء is its other attested name
  });

  it('shows the app\u2019s spelling and flags the cited edition only where it differs', () => {
    const rows = lettersMansions('اطعضظغب');
    const byNumber = Object.fromEntries(rows.map((r) => [r.number, r]));
    [1, 9, 16, 26, 27, 28].forEach((n) => {
      expect(byNumber[n].buniDiffers).toBe(true);
      expect(byNumber[n].buniName).toBe(BUNI_TABLE[n - 1][1]);
    });
    expect(byNumber[2].buniDiffers).toBe(false);
  });

  it('every Arabic name on the Who Am I card table matches the app\u2019s mansion list', () => {
    const src = readFileSync(
      join(process.cwd(), 'src/features/istikhara/components/IstikharaSummaryCard.tsx'),
      'utf8',
    );
    const entries = [...src.matchAll(/\d+:\s*\{ name: "([^"]+)",\s*arabic: "([^"]+)" \}/g)];
    expect(entries.length).toBe(12);
    for (const [, name, arabic] of entries) {
      const m = LUNAR_MANSIONS.find((x) => x.nameTransliteration === name);
      expect(m, name).toBeDefined();
      expect(strip(m!.nameArabic)).toBe(arabic);
    }
  });

  it('looks letters up by the table, with hamza seats, ة and ى folded, once per distinct letter', () => {
    const rows = lettersMansions('أحمد');
    expect(rows.map((r) => [r.letter, r.number])).toEqual([['ا', 1], ['ح', 8], ['م', 13], ['د', 4]]);
    rows.forEach((r) => expect(r.mansion.number).toBe(r.number));
    expect(lettersMansions('إبراهيم').map((r) => r.letter)).toEqual(['ا', 'ب', 'ر', 'ه', 'ي', 'م']);
    expect(lettersMansions('فاطمة').map((r) => r.letter)).toEqual(['ف', 'ا', 'ط', 'م', 'ه']); // ة → ه
    expect(lettersMansions('موسى').map((r) => r.letter)).toEqual(['م', 'و', 'س', 'ي']); // ى → ي
    expect(lettersMansions('ممم')).toHaveLength(1);
    expect(lettersMansions('abc')).toEqual([]);
  });

  it('gives the same rows whichever abjad setting is selected (no abjad table is consulted)', () => {
    expect(lettersMansions.length).toBe(1);
    expect(lettersMansions('صالح').map((r) => r.number)).toEqual([18, 1, 12, 8]);
  });

  it('source wording follows the language review (attribution, links, labels)', () => {
    const src = SOURCES.lettersMansions;
    expect(src.note).toContain('attributed to al-Būnī (attribution disputed)');
    expect(src.note).toContain('traditional correspondence described in the asrār literature');
    expect(src.note).not.toMatch(/spiritual/i);
    expect(src.refs[0].text.startsWith('Table attributed to al-Būnī')).toBe(true);
    expect(src.refs[0].url).toBe('https://ablibrary.net/books/10942');
    expect(src.refs[1].text).toContain('«الفرغ الأول / الفرغ الثانى / الحوت»');
    expect(src.refs[1].text).toContain('ف-ر-غ');
    expect(src.refs[1].urls?.length).toBeGreaterThan(0);
    expect(LABELS.buniEdition).toEqual({ en: 'in the cited edition', fr: 'dans l\u2019édition citée', ar: 'في الطبعة المشار إليها' });
    expect(LABELS.position.ar).toBe('منزل القمر');
    expect(LABELS.steps.manzil.ar).toBe('٦ · منزل القمر');
    expect(LABELS.preview.fr).toContain('«\u00a0à vérifier\u00a0»');
  });
});
