import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';
import { makeCatalog } from '../components/i18n/ArabicDomTranslator';

/** Phase 6: name-guide pages, Quran share page actions and the Ramadan modal duration. */
const root = path.resolve(__dirname, '../..');
const catalog = makeCatalog(JSON.parse(readFileSync(path.join(root, 'public/i18n/ur-ui.json'), 'utf8')));
const known = JSON.parse(readFileSync(path.join(root, 'scripts/i18n/ur/known_english.json'), 'utf8')).files as Record<string, string[]>;

describe('Phase 6: names, share and Ramadan modal in Urdu', () => {
  it('no string of the name-guide pages, the share actions or the Ikhtiyārāt share page is still listed as English', () => {
    const left = Object.entries(known).filter(([f]) => /names\/|ShareActions|share\/quran|ikhtiyarat\/r\/|AddChallengeModal|auth\/|Profile/.test(f));
    // the Ikhtiyārāt share page title is page metadata (server-rendered, language not known there): see still_english.md
    expect(left.map(([f, s]) => `${f}: ${s.join(' | ')}`)).toEqual(['app/(site)/ikhtiyarat/r/[date]/page.tsx: Ikhtiyārāt Result']);
  });

  it('keeps the traditional-reflection framing of the FAQ: no prediction, and the unseen belongs to Allah alone', () => {
    const ur = catalog.get('No. It is a traditional reflection on names and temperament from ʿilm al-ḥurūf, for education and self-knowledge. Allah alone knows the unseen.')!;
    expect(ur).toContain('غیب کا علم صرف اللہ کو ہے');
    expect(ur.startsWith('نہیں')).toBe(true);
  });

  it('keeps the numbers of the burj rule and of the duration', () => {
    const rule = catalog.get("Add the Abjad value of your name to the Abjad value of your mother's name, divide by 12 and keep the remainder (0 counts as 12). Remainder 1 is Aries (al-Ḥamal), 2 Taurus, and so on to 12, Pisces (al-Ḥūt).")!;
    for (const n of ['12', '1', '2']) expect(rule).toContain(n);
    expect(catalog.get('25-35 min')).toBe('25 تا 35 منٹ');
  });

  it('writes the brand name Asrariya in Urdu script («اسراریہ») inside the RTL sentences (native review sheet 2: 3.171, 9.188, 9.191)', () => {
    for (const k of ['Open in Asrariya', 'If the app does not open automatically, install Asrariya below.', 'Android users can install Asrariya today on Google Play.']) {
      expect(catalog.get(k), k).toContain('اسراریہ');
      expect(catalog.get(k), k).not.toContain('Asrariya');
      expect(catalog.get(k), k).toMatch(/[؀-ۿ]/);
    }
  });
});
