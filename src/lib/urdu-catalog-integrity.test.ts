import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';
import { makeCatalog } from '../components/i18n/ArabicDomTranslator';

/**
 * Phase 5: structural integrity of public/i18n/ur-ui.json (the exact-match English → Urdu catalog).
 * Complements urdu.test.ts (Arabic script), urdu-result-content.test.ts (pattern syntax and result data)
 * and urdu-glossary.test.ts (terms). Nothing here forbids Latin letters: names, transliterations and
 * identifiers that the English source contains are expected to stay.
 */
const root = path.resolve(__dirname, '../..');
const text = readFileSync(path.join(root, 'public/i18n/ur-ui.json'), 'utf8');
const raw: Record<string, string> = JSON.parse(text);
const exact = Object.entries(raw).filter(([k]) => !k.startsWith('re:'));
const patterns = Object.entries(raw).filter(([k]) => k.startsWith('re:'));
const catalog = makeCatalog(raw);

describe('keys', () => {
  it('no key is written twice in the file (JSON.parse would silently keep the last one)', () => {
    const keys = [...text.matchAll(/^"((?:[^"\\]|\\.)*)":/gm)].map((m) => m[1]);
    expect(keys.length).toBe(Object.keys(raw).length);
    const seen = new Set<string>();
    const dup = keys.filter((k) => (seen.has(k) ? true : (seen.add(k), false)));
    expect(dup).toEqual([]);
  });

  it('every exact key is whitespace-normalised, because the browser looks up the collapsed text of a node', () => {
    const bad = exact.map(([k]) => k).filter((k) => k !== k.replace(/\s+/g, ' ').trim());
    expect(bad).toEqual([]);
  });

  it('no entry maps an English text to itself or to an empty value', () => {
    const bad = Object.entries(raw).filter(([k, v]) => typeof v !== 'string' || v.trim() === '' || (!k.startsWith('re:') && v === k));
    expect(bad.map(([k]) => k)).toEqual([]);
  });
});

describe('values keep what the English carries', () => {
  const toAscii = (s: string) => s.replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 0x0660)).replace(/[۰-۹]/g, (d) => String(d.charCodeAt(0) - 0x06f0));
  // Numbers that Urdu writes as words: "Person 1" → «پہلا فرد», "the 28 Lunar Mansions" → «اٹھائیس منازل» ...
  const SPELLED: Record<string, string[]> = {
    '0': ['صفر'], '1': ['ایک', 'پہلا', 'پہلی'], '2': ['دو', 'دوسرا', 'دوسری'], '7': ['سات'], '12': ['بارہ'],
    '28': ['اٹھائیس'], '40': ['چالیس'], '99': ['ننانوے'],
  };

  it('every number of the English text is in the Urdu (as digits, Urdu digits or a spelled-out numeral)', () => {
    const bad: string[] = [];
    for (const [en, ur] of exact) {
      const u = toAscii(ur);
      for (const n of en.match(/\d+(?:\.\d+)?/g) ?? []) {
        if (u.includes(n)) continue;
        if ((SPELLED[n] ?? []).some((w) => ur.includes(w))) continue;
        bad.push(`${n} in: ${en.slice(0, 70)}`);
      }
    }
    expect(bad).toEqual([]);
  });

  it('Latin words in an Urdu value come from its English text (no stray or mis-mapped English)', () => {
    const word = /[A-Za-zĀāĪīŪūḤḥṢṣḌḍṬṭẒẓʿʾ'’]{3,}/g;
    const bad: string[] = [];
    for (const [en, ur] of exact) {
      const known = new Set((en.match(word) ?? []).map((w) => w.toLowerCase()));
      const stray = (ur.match(word) ?? []).filter((w) => !known.has(w.toLowerCase()));
      if (stray.length) bad.push(`${stray.join(',')} in: ${en.slice(0, 60)}`);
    }
    expect(bad).toEqual([]);
  });

  it('"zodiac" is never «زائچہ» (that is the birth chart; the zodiac circle is «دائرۃ البروج» / بروج)', () => {
    const bad = exact.filter(([en, ur]) => /zodiac/i.test(en) && ur.includes('زائچ')).map(([en]) => en.slice(0, 70));
    expect(bad).toEqual([]);
  });

  it('every pattern value uses only capture groups that its regex has', () => {
    const bad: string[] = [];
    for (const [k, v] of patterns) {
      const groups = new RegExp(`${k.slice(3)}|`).exec('')!.length - 1;
      const used = [...v.matchAll(/\$p?(\d)/g)].map((m) => Number(m[1]));
      if (used.some((n) => n > groups)) bad.push(k);
    }
    expect(bad).toEqual([]);
  });
});

describe('lookup behaviour (the same code the browser runs)', () => {
  const sample = makeCatalog({
    'Moon': 'قمر',
    'Jupiter': 'مشتری',
    'Moon applying to Jupiter': 'قمر کا مشتری سے اتصال',
    're:^Moon applying to (\\w+)$': 'قمر کا $1 سے اتصال (نمونہ)',
    're:^(\\w+) at (\\d+)° — (\\d+) h$': '$1 $p2° — $p3 گھنٹے',
    're:^Hour (\\d+)$': 'ساعت $1',
  });

  it('an exact entry wins over a pattern that would also match', () => {
    expect(sample.get('Moon applying to Jupiter')).toBe('قمر کا مشتری سے اتصال');
  });

  it('a pattern translates its captured parts through exact entries', () => {
    expect(sample.get('Moon applying to Moon')).toBe('قمر کا قمر سے اتصال (نمونہ)');
  });

  it('a pattern is rejected when a captured English word has no entry (nothing half-translated is shown)', () => {
    expect(sample.get('Moon applying to Pluto')).toBeUndefined();
  });

  it('$pN keeps the captured text, and bare numbers pass through unchanged', () => {
    expect(sample.get('Moon at 195° — 3 h')).toBe('قمر 195° — 3 گھنٹے');
    expect(sample.get('Hour 11')).toBe('ساعت 11');
  });

  it('the real catalog resolves a dynamic sentence with its numbers intact', () => {
    const ur = catalog.get('Moon applying to a sextile with Venus, orb 1.7° — a smooth, well-supported journey.');
    expect(ur).toContain('1.7°');
    expect(ur).toContain('زہرہ');
    expect(ur).toContain('تسدیس');
    expect(catalog.get('Moon applying to a sextile with Pluto, orb 1.7°.')).toBeUndefined();
  });
});
