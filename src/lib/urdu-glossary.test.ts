import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { rawTranslations } from './translations';

/**
 * Glossary consistency for the Urdu interface (docs/i18n/ur-review.md, "Glossary").
 * Rules are about the technical terms, not about the surrounding wording: they check
 * that a concept always uses its approved term and that known-wrong renderings stay out.
 */
const read = (p: string) => readFileSync(join(__dirname, '..', '..', p), 'utf8');
const catalog = JSON.parse(read('public/i18n/ur-ui.json')) as Record<string, string>;
const entries = Object.entries(catalog).filter(([k]) => !k.startsWith('re:'));
const allUrdu = [
  ...Object.values(catalog),
  ...JSON.stringify(rawTranslations.ur).match(/"(?:[^"\\]|\\.)*"/g)!.map((s) => JSON.parse(s) as string),
  read('src/lib/i18n/urPages.ts'),
  read('src/lib/urMetadata.ts'),
];

const withKey = (re: RegExp) => entries.filter(([k]) => re.test(k));

describe('Urdu glossary: known-wrong renderings never appear', () => {
  it('«رگڑ» (physical friction) is never used for people', () => {
    expect(allUrdu.filter((v) => v.includes('رگڑ'))).toEqual([]);
  });

  it('planetary hours always carry the izāfa: ساعاتِ کواکب / ساعتِ کواکب, never «ساعات کواکب», and ساعت is not masculine', () => {
    expect(allUrdu.filter((v) => /ساعات?\s+کواکب/.test(v) || v.includes('آج کے ساعات')).map((v) => v.slice(0, 60))).toEqual([]);
  });

  it('«بیت الشرف» (conflates domicile and exaltation) is not used', () => {
    expect(allUrdu.filter((v) => v.includes('بیت الشرف'))).toEqual([]);
  });

  it('the four elements are not described with «فطرت»: use عنصری مزاج / آتشی, زمینی, ہوائی, آبی مزاج', () => {
    expect(allUrdu.filter((v) => /(آتشی|زمینی|خاکی|ہوائی|آبی|عنصری|شمسی)\s+فطرت/.test(v)).map((v) => v.slice(0, 60))).toEqual([]);
  });
});

describe('Urdu glossary: a concept keeps its approved term', () => {
  it('"elemental nature" is عنصری مزاج', () => {
    const rows = withKey(/elemental nature/i);
    expect(rows.length).toBeGreaterThan(0);
    for (const [k, v] of rows) expect(v, k).toContain('عنصری مزاج');
  });

  it('"less favorable" is کم موافق', () => {
    const rows = withKey(/less favou?rable/i);
    expect(rows.length).toBeGreaterThan(0);
    for (const [k, v] of rows) expect(v, k).toContain('کم موافق');
  });

  it('Moon "Applying to" is اتصال and "Separating from" is انصراف', () => {
    const applying = withKey(/^Moon Applying to/);
    const separating = withKey(/^Moon Separating from/);
    expect(applying.length).toBeGreaterThan(0);
    expect(separating.length).toBeGreaterThan(0);
    for (const [k, v] of applying) expect(v, k).toContain('اتصال');
    for (const [k, v] of separating) expect(v, k).toContain('انصراف');
  });

  it('planets, zodiac signs and elements keep the glossary names', () => {
    const expected: Record<string, string> = {
      Sun: 'شمس', Moon: 'قمر', Mars: 'مریخ', Mercury: 'عطارد', Jupiter: 'مشتری', Venus: 'زہرہ', Saturn: 'زحل',
      Aries: 'حمل', Taurus: 'ثور', Gemini: 'جوزا', Cancer: 'سرطان', Leo: 'اسد', Virgo: 'سنبلہ', Libra: 'میزان',
      Scorpio: 'عقرب', Sagittarius: 'قوس', Capricorn: 'جدی', Aquarius: 'دلو', Pisces: 'حوت',
      Fire: 'آگ', Earth: 'مٹی', Air: 'ہوا', Water: 'پانی',
    };
    const wrong = Object.entries(expected).filter(([en, ur]) => catalog[en] !== undefined && catalog[en] !== ur);
    expect(wrong).toEqual([]);
  });

  it('the dignity names (domicile, exaltation, detriment, fall) are بیت، شرف، وبال، ہبوط', () => {
    const expected: Record<string, string> = { Exaltation: 'شرف', Detriment: 'وبال', Fall: 'ہبوط' };
    const wrong = Object.entries(expected).filter(([en, ur]) => catalog[en] !== undefined && catalog[en] !== ur);
    expect(wrong).toEqual([]);
    const dom = catalog['Domicile (Rulership)'];
    if (dom !== undefined) expect(dom).toContain('بیت');
  });
});

describe('Urdu glossary: dictionary and catalog agree on the Abjad systems', () => {
  it('Maghribi / Mashriqi (dictionary, from the Abjad selector) equal the catalog entries, when the catalog has them', () => {
    const a = rawTranslations.ur.abjadSystem!;
    expect(a.maghribi).toBe('مغربی');
    expect(a.mashriqi).toBe('مشرقی');
    if (catalog['Maghribi'] !== undefined) expect(catalog['Maghribi']).toBe(a.maghribi);
    if (catalog['Mashriqi'] !== undefined) expect(catalog['Mashriqi']).toBe(a.mashriqi);
    if (catalog['Maghribi System:'] !== undefined) expect(catalog['Maghribi System:']).toBe(a.maghribiSystem);
    if (catalog['Mashriqi System:'] !== undefined) expect(catalog['Mashriqi System:']).toBe(a.mashriqiSystem);
    if (catalog['Western'] !== undefined) expect(catalog['Western']).toBe(a.western);
    if (catalog['Eastern'] !== undefined) expect(catalog['Eastern']).toBe(a.eastern);
  });
});
