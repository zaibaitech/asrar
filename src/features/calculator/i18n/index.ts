import { useMemo } from 'react';
import { calculatorEn, nameFieldEn, divineNamePickerEn } from './en';
import { calculatorFr, nameFieldFr, divineNamePickerFr } from './fr';
import { calculatorAr, nameFieldAr, divineNamePickerAr } from './ar';

export type CalculatorLocale = 'en' | 'fr' | 'ar';

const DICTS = {
  en: { calculator: calculatorEn, nameField: nameFieldEn, divineNamePicker: divineNamePickerEn },
  fr: { calculator: calculatorFr, nameField: nameFieldFr, divineNamePicker: divineNamePickerFr },
  ar: { calculator: calculatorAr, nameField: nameFieldAr, divineNamePicker: divineNamePickerAr },
} as const;

type Namespace = keyof (typeof DICTS)['en'];

function interpolate(template: string, vars?: Record<string, string | number>): string {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (match, key) => (key in vars ? String(vars[key]) : match));
}

/** Minimal "N calculators" pluralizer per locale — the only ICU plural this feature needs. */
export function pluralCalculators(count: number, locale: CalculatorLocale): string {
  if (locale === 'ar') {
    if (count === 0) return 'لا توجد حاسبات';
    if (count === 1) return 'حاسبة واحدة';
    if (count === 2) return 'حاسبتان';
    if (count >= 3 && count <= 10) return `${count} حاسبات`;
    return `${count} حاسبة`;
  }
  if (locale === 'fr') return `${count} calculateur${count === 1 ? '' : 's'}`;
  return `${count} calculator${count === 1 ? '' : 's'}`;
}

export function useCalculatorTranslations(locale: CalculatorLocale, namespace: Namespace = 'calculator') {
  return useMemo(() => {
    const dict = DICTS[locale][namespace] as Record<string, unknown>;
    function t(key: string, vars?: Record<string, string | number>): string {
      const value = dict[key];
      if (typeof value !== 'string') return key;
      return interpolate(value, vars);
    }
    function raw<T = unknown>(key: string): T {
      return dict[key] as T;
    }
    return { t, raw };
  }, [locale, namespace]);
}
