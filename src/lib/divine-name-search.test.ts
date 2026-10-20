import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';
import { DIVINE_NAMES } from '../data/divine-names';
import { arabicSearchForm, matchesDivineNameQuery } from './divineNameSearch';
import { makeCatalog } from '../components/i18n/ArabicDomTranslator';

/** Native Urdu review, sheet 2, items 2.19 / 7.225: Divine Name search accepts Arabic and Urdu script. */
const root = path.resolve(__dirname, '../..');
const read = (f: string) => readFileSync(path.join(root, f), 'utf8');
const find = (q: string) => DIVINE_NAMES.filter((n) => matchesDivineNameQuery(n, q)).map((n) => n.transliteration);

describe('Divine Name search: Arabic and Urdu input', () => {
  it('folds harakāt, dagger alif, tatweel, alef and hamza forms, the article and a leading «يا»', () => {
    expect(arabicSearchForm('الرَّحْمَٰن')).toBe('رحمن');
    expect(arabicSearchForm('يَا رَحْمٰنُ')).toBe('رحمن');
    expect(arabicSearchForm('أَلْمُؤْمِن')).toBe('مومن');
    expect(arabicSearchForm('إِلٰـه')).toBe('اله');
    expect(arabicSearchForm('الشّافِى')).toBe('شافي');
  });

  it('maps Urdu letters (ی ک ہ) through urduLetters', () => {
    expect(arabicSearchForm('لطیف')).toBe('لطيف');
    expect(arabicSearchForm('مالک')).toBe('مالك');
  });

  it('finds the Name from Arabic with or without diacritics and from Urdu spellings', () => {
    for (const q of ['الرحمن', 'الرَّحْمَن', 'رحمان', 'رحمٰن', 'یا رحمٰن', 'يا رحمن']) expect(find(q), q).toContain('Ar-Raḥmān');
    for (const q of ['نور', 'النور']) expect(find(q), q).toContain('An-Nūr');
    for (const q of ['لطیف', 'اللطيف', 'لطيف']) expect(find(q), q).toContain('Al-Laṭīf');
    expect(find('المؤمن')).toContain("Al-Mu'min");
    expect(find('مومن')).toContain("Al-Mu'min");
  });

  it('a few Urdu meaning words reach the English keywords (the placeholder «الرحمن، نور، شفا»)', () => {
    expect(find('شفا').length).toBeGreaterThan(0);
    expect(find('رحمت')).toContain('Ar-Raḥmān');
  });

  it('Latin search behaves as before', () => {
    expect(find('latif')).toContain('Al-Laṭīf');
    expect(find('Rahman')).toContain('Ar-Raḥmān');
    expect(find('light')).toContain('An-Nūr');
    expect(find('zzzz')).toEqual([]);
    expect(find('')).toHaveLength(DIVINE_NAMES.length);
  });

  it('all three pickers use the shared matcher (UI unchanged, filter only)', () => {
    for (const f of [
      'src/components/DivineNamePicker.tsx',
      'src/components/AllDivineNamesBrowser.tsx',
      'src/features/calculator/components/DivineNamePicker.tsx',
    ]) expect(read(f), f).toContain('matchesDivineNameQuery');
  });

  it('7.225: the person-name field searches Latin names only, and the Urdu placeholder says so', () => {
    const ur = makeCatalog(JSON.parse(read('public/i18n/ur-ui.json')));
    expect(ur.get('Type to search: Muhammad, Fatima...')).toBe('تلاش کے لیے رومن حروف میں لکھیں: \u2068Muhammad, Fatima\u2069…');
    expect(ur.get('Search: Ar-Raḥmān, Light, healing...')).toBe('تلاش کریں: الرحمن، نور، شفا...');
  });
});

describe('WeekdaySadaqa (sheet 2): «Today is <day>» reads in Urdu word order', () => {
  const ur = makeCatalog(JSON.parse(read('public/i18n/ur-ui.json')));
  it('the whole sentence is one catalog pattern: «آج پیر ہے»', () => {
    expect(ur.get('Today is Monday')).toBe('آج پیر ہے');
    expect(ur.get('Today is Friday')).toBe('آج جمعہ ہے');
  });
  it('EN, FR and AR rendering paths are unchanged; only the Urdu UI renders one text node', () => {
    const src = read('src/components/sadaqa/WeekdaySadaqa.tsx');
    expect(src).toContain('{ui.todayIs} {dayName(today, lang)}');
    expect(src).toMatch(/uiLanguage === 'ur'/);
  });
});
