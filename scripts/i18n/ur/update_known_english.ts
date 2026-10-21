/**
 * Rewrites scripts/i18n/ur/known_english.json: the English text in reachable production components that the
 * Urdu catalog does not cover yet. src/lib/urdu-english-ratchet.test.ts compares the live scan with this file,
 * so a NEW untranslated string fails the test and a string that got translated must be removed from the list.
 *
 *   npx tsx scripts/i18n/ur/update_known_english.ts
 */
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { makeCatalog } from '../../../src/components/i18n/ArabicDomTranslator';
import { scanUncovered } from './source_scan';

const root = path.resolve(__dirname, '../../..');
const raw = JSON.parse(readFileSync(path.join(root, 'public/i18n/ur-ui.json'), 'utf8')) as Record<string, string>;
const catalog = makeCatalog(raw);
const uncovered = scanUncovered(root, (en) => {
  const ur = catalog.get(en);
  return ur !== undefined && ur !== en;
});
const out = {
  note: 'English text in reachable production components that /ur-ui.json does not cover (Phase 5 audit). Classified in scripts/i18n/ur/still_english.md. Regenerate with: npx tsx scripts/i18n/ur/update_known_english.ts',
  files: uncovered,
};
writeFileSync(path.join(root, 'scripts/i18n/ur/known_english.json'), JSON.stringify(out, null, 1) + '\n');
console.log(Object.keys(uncovered).length, 'files,', Object.values(uncovered).flat().length, 'strings');
