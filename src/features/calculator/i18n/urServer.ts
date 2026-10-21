/**
 * Server-side Urdu text for the calculator on /ur/abjad (SR, 21 Oct 2026).
 * Same strings the runtime catalog swaps in today: ur.ts (Batch 13, reviewed) first, then the
 * reviewed catalog entry for the exact English (public/i18n/ur-ui.json). Keys with no Urdu stay
 * out, so they fall back to English and the runtime catalog still handles them.
 */
import raw from '@/public/i18n/ur-ui.json';
import { calculatorEn, nameFieldEn, divineNamePickerEn } from './en';
import { calculatorUr, nameFieldUr, divineNamePickerUr } from './ur';
import type { CalculatorTextOverride } from './CalculatorTextContext';
import { en as appEn } from '@/src/lib/i18n/en';

const CATALOG = raw as Record<string, string>;

function build(en: Record<string, unknown>, ur: Record<string, unknown>): Record<string, string | readonly string[]> {
  const out: Record<string, string | readonly string[]> = {};
  for (const [k, v] of Object.entries(en)) {
    const u = ur[k];
    if (typeof u === 'string' || Array.isArray(u)) { out[k] = u as string | readonly string[]; continue; }
    if (typeof v === 'string' && CATALOG[v]) out[k] = CATALOG[v];
    else if (Array.isArray(v) && v.every((s) => CATALOG[s])) out[k] = v.map((s) => CATALOG[s]);
  }
  return out;
}

export function urduCalculatorText(): CalculatorTextOverride {
  return {
    calculator: build(calculatorEn, calculatorUr),
    nameField: build(nameFieldEn, nameFieldUr),
    divineNamePicker: build(divineNamePickerEn, divineNamePickerUr),
    exact: Object.fromEntries(
      [
        ...Object.keys(CATALOG).filter((k) => /^\d+ calculators?$/.test(k)),
        // AbjadCalculator wrapper, AbjadSystemSelector (compact) and CalculatorDisclaimerBanner.
        'Abjad calculator', 'Dismiss', appEn.abjadSystem.maghribi, appEn.abjadSystem.mashriqi, appEn.abjadSystem.note,
        appEn.disclaimer.title, appEn.disclaimer.message,
      ].filter((k) => CATALOG[k]).map((k) => [k, CATALOG[k]]),
    ),
  };
}
