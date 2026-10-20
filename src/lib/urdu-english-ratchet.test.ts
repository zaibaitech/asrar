import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';
import { makeCatalog } from '../components/i18n/ArabicDomTranslator';
import { scanUncovered, reachableFiles, extractEnglish, LEGIT_ENGLISH, DEV_ONLY } from '../../scripts/i18n/ur/source_scan';

/**
 * Phase 5: hard-coded English in production components that Urdu mode shows untranslated.
 *
 * The Urdu UI is an exact-match catalog over the English text of the page, so a literal that is added or
 * reworded in a component without a catalog entry silently stays English. This test scans the components
 * that users can reach (see scripts/i18n/ur/source_scan.ts) and compares the uncovered text with the
 * recorded list scripts/i18n/ur/known_english.json:
 *   - a NEW uncovered string fails: add its Urdu to the catalog, or (if it must stay English) to LEGIT_ENGLISH;
 *   - a recorded string that is covered now fails: remove it from the list (npx tsx scripts/i18n/ur/update_known_english.ts).
 * The recorded strings are classified in scripts/i18n/ur/still_english.md; they are NOT claimed as translated.
 */
const root = path.resolve(__dirname, '../..');
const raw: Record<string, string> = JSON.parse(readFileSync(path.join(root, 'public/i18n/ur-ui.json'), 'utf8'));
const catalog = makeCatalog(raw);
const covers = (en: string) => {
  const ur = catalog.get(en);
  return ur !== undefined && ur !== en;
};
const known = JSON.parse(readFileSync(path.join(root, 'scripts/i18n/ur/known_english.json'), 'utf8')).files as Record<string, string[]>;

describe('hard-coded English in production components', () => {
  const live = scanUncovered(root, covers);

  it('finds the app: the scan reaches the Urdu pages, the tool components and the dictionary-driven components', () => {
    const files = reachableFiles(root).map((f) => path.relative(root, f));
    for (const must of [
      'app/(ur)/ur/abjad/page.tsx',
      'asrar-everyday-app.tsx',
      'src/components/MobileMenu.tsx',
      'src/components/AbjadSystemSelector.tsx',
      'src/features/ikhtiyarat/components/RuleRow.tsx',
      'src/features/istikhara/components/SadaqaTab.tsx',
    ]) expect(files, must).toContain(must);
    expect(files.length).toBeGreaterThan(250);
    expect(files).not.toContain(DEV_ONLY[0]);
  });

  it('extracts the three kinds of literal it claims to (ternary, en: object, JSX text) and skips code', () => {
    const src = `
      const a = language === 'en' ? 'Hello there' : 'Bonjour';
      const b = { en: 'Open the door', fr: 'Ouvrir' };
      return <p className="x">Plain label</p>;
      if (a > b) { return (x) => y < z; }
    `;
    expect(extractEnglish(src).sort()).toEqual(['Hello there', 'Open the door', 'Plain label']);
  });

  it('no new English text reaches Urdu mode: every uncovered string is in the recorded list', () => {
    const fresh: string[] = [];
    for (const [file, strings] of Object.entries(live)) for (const s of strings) if (!(known[file] ?? []).includes(s)) fresh.push(`${file}: ${s}`);
    expect(fresh).toEqual([]);
  });

  it('every recorded string is still English in the source and still uncovered (translate it, then drop it from the list)', () => {
    const stale: string[] = [];
    for (const [file, strings] of Object.entries(known)) for (const s of strings) if (!(live[file] ?? []).includes(s)) stale.push(`${file}: ${s}`);
    expect(stale).toEqual([]);
  });

  it('the strings fixed in this phase are covered', () => {
    for (const en of ['Previous', "Don't show this tutorial again", 'Signed in as', 'Sign Out', 'Explore the tools', 'History']) {
      expect(covers(en), en).toBe(true);
    }
  });

  it('the allow-list of English that may stay is narrow (names, URLs, transliterations), not a catch-all', () => {
    expect(LEGIT_ENGLISH.some((re) => re.test('Create Account'))).toBe(false);
    expect(LEGIT_ENGLISH.some((re) => re.test('Previous'))).toBe(false);
    expect(LEGIT_ENGLISH.some((re) => re.test('WhatsApp'))).toBe(true);
  });
});
