/**
 * Pairs the calculator's English UI strings (src/features/calculator/i18n/en.ts) with the Urdu
 * drafts in ur.ts (Batch 13, not reviewed) and prints them as JSON for build_catalog.py.
 * Run: npx tsx scripts/i18n/ur/dump_calculator.ts
 */
import { calculatorEn, nameFieldEn, divineNamePickerEn } from '../../../src/features/calculator/i18n/en';
import { calculatorUr, nameFieldUr, divineNamePickerUr } from '../../../src/features/calculator/i18n/ur';

/** {name} placeholders become catalog patterns: numbers pass through ($pN), text is translated ($N). */
function toPattern(en: string, ur: string): [string, string] {
  if (!/\{\w+\}/.test(en)) return [en, ur];
  const names: string[] = [];
  const esc = en.replace(/[.*+?^$()|[\]\\]/g, '\\$&').replace(/\\?\{(\w+)\\?\}|\{(\w+)\}/g, (_m, a, b) => {
    names.push(a ?? b);
    return a === 'themes' || b === 'themes' ? '(.+?)' : '(\\d+)';
  });
  let out = ur;
  names.forEach((n, i) => {
    out = out.replace(`{${n}}`, `$p${i + 1}`);
  });
  return [`re:^${esc}$`, out];
}

const rows: { ns: string; key: string; en: string; ur: string }[] = [];
const sets: [string, Record<string, unknown>, Record<string, unknown>][] = [
  ['calculator', calculatorEn, calculatorUr],
  ['nameField', nameFieldEn, nameFieldUr],
  ['divineNamePicker', divineNamePickerEn, divineNamePickerUr],
];
for (const [ns, en, ur] of sets) {
  for (const [key, u] of Object.entries(ur)) {
    const e = en[key];
    if (e === undefined) throw new Error(`ur.ts key not in en.ts: ${ns}.${key}`);
    const es = Array.isArray(e) ? e : [e];
    const us = Array.isArray(u) ? u : [u];
    if (es.length !== us.length) throw new Error(`length mismatch: ${ns}.${key}`);
    es.forEach((x, i) => {
      const [k, v] = toPattern(String(x), String(us[i]));
      rows.push({ ns, key: es.length > 1 ? `${key}[${i}]` : key, en: k, ur: v });
    });
  }
}
// Composite text nodes built in CalculatorResult.tsx from two keys (one template literal).
const u = calculatorUr as Record<string, string>;
rows.push({
  ns: 'calculator',
  key: 'balanceScore+derivedMetricLabel',
  en: `re:^${calculatorEn.balanceScore}: (\\d+)% \\(${calculatorEn.derivedMetricLabel}\\)$`,
  ur: `${u.balanceScore}: $p1٪ (${u.derivedMetricLabel})`,
});
// Element lists from CalculatorResult.tsx ("Fire + Earth", " · Weakest correspondence: Water + Air");
// each element name is translated through its reviewed catalog entry ($N).
const E = '(Fire|Earth|Air|Water)';
for (const n of [1, 2, 3]) {
  const enList = Array.from({ length: n }, () => E).join(' \\+ ');
  const urList = n === 1 ? '$1' : n === 2 ? '$1 اور $2' : '$1، $2 اور $3';
  if (n > 1) rows.push({ ns: 'calculator', key: `elements[${n}]`, en: `re:^${enList}$`, ur: urList });
  rows.push({ ns: 'calculator', key: `weakestElement+elements[${n}]`, en: `re:^· ${calculatorEn.weakestElement}: ${enList}$`, ur: `· ${u.weakestElement}: ${urList}` });
}
process.stdout.write(JSON.stringify(rows, null, 1));
