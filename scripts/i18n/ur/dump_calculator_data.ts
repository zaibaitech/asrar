/**
 * Lists the English result-data strings that the calculator renders on /ur/abjad through
 * pick(uiLocale='en', …) — Divine-Name glosses, archetypes and guidance, resonance glosses,
 * sacred-number notes, the joined dhikr lists and the sadaqah texts — with their source.
 * Used to build Batch 15 of the Urdu review. Run: npx tsx scripts/i18n/ur/dump_calculator_data.ts
 */
import { DIVINE_NAME_MEANING } from '../../../src/features/calculator/lib/divineNameMeanings';
import { ARCHETYPES, ELEMENT_GUIDANCE, BEST_TIME, POWER_DAY, DHIKR_TIMING, DHIKR_PREPARATION, DHIKR_ETIQUETTE } from '../../../src/features/calculator/lib/calculatorContent';
import { DIVINE_RESONANCE_TABLE } from '../../../src/features/calculator/lib/divineResonance';
import { SACRED_SIGNIFICANCE, SACRED_DEFAULT } from '../../../src/features/calculator/lib/sacred';
import { SADAQAH_BY_DAY } from '../../../src/features/calculator/lib/sadaqahByDay';
import * as month from '../../../src/features/calculator/lib/sadaqahByMonth';

const rows: { src: string; key: string; en: string }[] = [];
const add = (src: string, key: string, en: string) => rows.push({ src, key, en });
for (const [n, t] of Object.entries(DIVINE_NAME_MEANING)) add('divineNameMeanings.ts', `DIVINE_NAME_MEANING[${n}]`, t.en);
for (const [n, a] of Object.entries(ARCHETYPES)) {
  add('calculatorContent.ts', `ARCHETYPES[${n}].title`, a.title.en);
  add('calculatorContent.ts', `ARCHETYPES[${n}].description`, a.description.en);
  a.qualities.en.forEach((q, i) => add('calculatorContent.ts', `ARCHETYPES[${n}].qualities[${i}]`, q));
}
for (const [k, t] of Object.entries(ELEMENT_GUIDANCE)) add('calculatorContent.ts', `ELEMENT_GUIDANCE.${k}`, t.en);
for (const [k, t] of Object.entries(BEST_TIME)) add('calculatorContent.ts', `BEST_TIME.${k}`, t.en);
for (const [k, t] of Object.entries(POWER_DAY)) add('calculatorContent.ts', `POWER_DAY.${k}`, t.en);
add('calculatorContent.ts', 'DHIKR_TIMING (joined " · ")', DHIKR_TIMING.map((t) => t.en).join(' · '));
add('calculatorContent.ts', 'DHIKR_PREPARATION (joined ", ")', DHIKR_PREPARATION.map((t) => t.en).join(', '));
add('calculatorContent.ts', 'DHIKR_ETIQUETTE (joined ", ")', DHIKR_ETIQUETTE.map((t) => t.en).join(', '));
for (const [n, e] of Object.entries(DIVINE_RESONANCE_TABLE)) add('divineResonance.ts', `DIVINE_RESONANCE_TABLE[${n}] (${e.transliteration})`, e.translation.en);
for (const [n, t] of Object.entries(SACRED_SIGNIFICANCE)) add('sacred.ts', `SACRED_SIGNIFICANCE[${n}]`, t.en);
add('sacred.ts', 'SACRED_DEFAULT', SACRED_DEFAULT.en);
for (const d of SADAQAH_BY_DAY) [d.en.intro, ...d.en.items, ...d.en.notes].forEach((s, i) => add('sadaqahByDay.ts', `${d.displayName}[${i}]`, s));
const walk = (o: unknown, p: string) => {
  if (typeof o === 'string') return;
  if (Array.isArray(o)) return o.forEach((x, i) => walk(x, `${p}[${i}]`));
  if (o && typeof o === 'object') for (const [k, v] of Object.entries(o)) {
    if (k === 'en') collect(v, p);
    else if (k !== 'fr' && k !== 'ar') walk(v, `${p}.${k}`);
  }
};
const collect = (v: unknown, p: string) => {
  if (typeof v === 'string') add('sadaqahByMonth.ts', p, v);
  else if (Array.isArray(v)) v.forEach((x, i) => collect(x, `${p}[${i}]`));
  else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) collect(x, `${p}.${k}`);
};
for (const [k, v] of Object.entries(month)) if (typeof v === 'object') walk(v, k);
process.stdout.write(JSON.stringify(rows, null, 1));
