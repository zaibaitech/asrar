import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';
import { SIMPLIFICATIONS } from './ikhtiyarat/ruleSimplification';
import { SOUL_CONNECTION_ARCHETYPES } from '../constants/soulConnectionArchetypes';
import { LUNAR_MANSIONS } from './lunarMansions';

/**
 * The Urdu catalog is an exact-match table (English text node -> Urdu), so a
 * reworded English source string silently falls back to English on /ur.
 * This keeps the result texts that were translated for /ur (rule explanations,
 * archetypes, manzil descriptions, burj career texts, day guidance) in step with their sources.
 * Fix a failure by updating scripts/i18n/ur/catalog_ai_draft.py and rebuilding:
 *   python3 scripts/i18n/ur/build_catalog.py && python3 scripts/i18n/ur/build_review.py
 */
const root = path.resolve(__dirname, '../..');
const catalog: Record<string, string> = JSON.parse(readFileSync(path.join(root, 'public/i18n/ur-ui.json'), 'utf8'));
const missing = (keys: string[]) => [...new Set(keys)].filter((k) => !(k in catalog));

describe('Urdu result texts are in the /ur catalog', () => {
  it('Ikhtiyārāt rule explanations (Simple mode)', () => {
    const keys = Object.values(SIMPLIFICATIONS).flatMap((entries) => entries.map((e) => e.en));
    expect(missing(keys)).toEqual([]);
  });

  it('soul-connection archetypes', () => {
    const keys: string[] = [];
    for (const a of Object.values(SOUL_CONNECTION_ARCHETYPES)) {
      keys.push(...a.tags.map((t) => t.en), a.title.en, a.oneLine.en, a.watchOut.en, a.keyToSuccess.en);
      keys.push(...Object.values(a.meaning).map((v) => v.en), ...Object.values(a.outlook).map((v) => v.en));
    }
    expect(missing(keys)).toEqual([]);
  });

  it('lunar mansions', () => {
    const keys = LUNAR_MANSIONS.flatMap((m) => [
      m.nameEn, m.divineQuality.en, m.spiritualFocus.en, ...m.favorableFor.en, ...m.unfavorableFor.en,
      m.classicalWisdom.quote, m.classicalWisdom.source,
    ]);
    expect(missing(keys)).toEqual([]);
  });

  it('burj career texts', () => {
    const data = JSON.parse(readFileSync(path.join(root, 'src/data/burujData.json'), 'utf8')).buruj_data;
    const keys: string[] = [];
    for (const b of Object.values<any>(data)) {
      const c = b.career;
      keys.push(c.traditional.en, c.principle.en, c.avoid.traditional.en, c.avoid.modern.en);
      for (const cat of c.modern_recommended.en) keys.push(cat.category, ...cat.items);
    }
    expect(missing(keys)).toEqual([]);
  });

  it('planet-of-the-day guidance', () => {
    const src = readFileSync(path.join(root, 'app/planet-of-the-day/PlanetOfTheDayPage.tsx'), 'utf8');
    const keys = [...src.matchAll(/guidance: \{\s*en: ('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")/g)].map((m) => (0, eval)(m[1]) as string);
    expect(keys).toHaveLength(7);
    expect(missing(keys)).toEqual([]);
  });

  it('every new Urdu string contains Arabic-script text and keeps its numbers', () => {
    for (const [en, ur] of Object.entries(catalog)) {
      if (en.startsWith('re:')) continue;
      const digits = (s: string) => (s.match(/\d+(?:[:–.]\d+)?/g) ?? []).join(',');
      if (/[A-Za-z]{3}/.test(en)) expect(/[؀-ۿ]/.test(ur), en).toBe(true);
      // verse/chapter references like 10:5 and 36:39 must survive translation unchanged
      if (/Qurʾān \d/.test(en)) expect(digits(ur), en).toBe(digits(en));
    }
  });
});
