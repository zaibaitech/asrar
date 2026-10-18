/**
 * Dumps the Urdu strings that live in TypeScript (with their English source)
 * as JSON, for build_review.py. Run: npx tsx scripts/i18n/ur/dump_ts.ts
 */
import { UR_META } from '../../../src/lib/urMetadata';
import * as P from '../../../src/lib/i18n/urPages';
import { ur } from '../../../src/lib/i18n/ur';
import { en } from '../../../src/lib/i18n/en';
import { RELATED_TOOLS, RELATED_TOOLS_TITLE, relatedToolLinks } from '../../../src/components/seo/relatedTools';
import { getBurujData } from '../../../src/features/istikhara/calculations';

type Pair = { en: string; ur: string; where: string };
const pairs: Pair[] = [];
const isT = (v: unknown): v is P.T => !!v && typeof v === 'object' && 'en' in (v as object) && 'ur' in (v as object);

function walk(v: unknown, where: string) {
  if (isT(v)) pairs.push({ en: v.en, ur: v.ur, where });
  else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${where}[${i}]`));
  else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) if (k !== 'path') walk(x, `${where}.${k}`);
}

const seo: Pair[] = [];
for (const [path, m] of Object.entries(UR_META)) {
  seo.push({ en: m.title.en, ur: m.title.ur, where: `${path} title` });
  seo.push({ en: m.description.en, ur: m.description.ur, where: `${path} description` });
}

for (const name of ['UR_COMMON', 'UR_TOOLS', 'UR_ELEMENTS', 'UR_WEEKDAYS', 'UR_BURUJ', 'UR_HOME', 'UR_BURJ', 'UR_COMPAT', 'UR_ABJAD', 'UR_PLANETS', 'UR_HOURS', 'UR_POTD', 'UR_IKHTIYARAT'] as const) {
  walk((P as Record<string, unknown>)[name], name);
}

const ui: Pair[] = [];
for (const sec of ['nav', 'common'] as const) {
  for (const [k, v] of Object.entries(ur[sec] ?? {})) {
    ui.push({ en: String((en[sec] as Record<string, string>)[k]), ur: String(v), where: `ur.ts ${sec}.${k}` });
  }
}
ui.push({ en: RELATED_TOOLS_TITLE.en, ur: RELATED_TOOLS_TITLE.ur, where: 'Related tools title' });
const rt = new Map<string, string>();
for (const page of Object.keys(RELATED_TOOLS)) {
  const e = relatedToolLinks(page, 'en');
  relatedToolLinks(page, 'ur').forEach(([, name], i) => rt.set(e[i][1], name));
}
for (const [e, u] of rt) ui.push({ en: e, ur: u, where: 'Related tools link' });

const dhikr = Array.from({ length: 12 }, (_, i) => {
  const names = getBurujData(i + 1).spiritual_practice.divine_names as unknown as Record<string, unknown>;
  const meaning = names.meaning as { en?: string } | string | undefined;
  return { burj: P.UR_BURUJ[i].en, arabic: P.urDhikrDisplay(String(names.arabic ?? '')), transliteration: String(names.transliteration ?? ''), meaning: typeof meaning === 'string' ? meaning : meaning?.en ?? '' };
});

console.log(JSON.stringify({ seo, pages: pairs, ui, dhikr }));
