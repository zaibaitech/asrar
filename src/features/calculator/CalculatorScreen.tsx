'use client';

import { useState } from 'react';
import { Calculator as CalculatorIcon } from 'lucide-react';
import { CalculatorTypeBrowser } from './components/CalculatorTypeBrowser';
import { CalculatorTypeForm } from './components/CalculatorTypeForm';
import type { CalculationType } from './components/calculatorTypes';
import { useCalculatorTranslations, type CalculatorLocale } from './i18n';

const LOCALE_LABEL: Record<CalculatorLocale, string> = { en: 'EN', fr: 'FR', ar: 'AR' };

/**
 * Top-level calculator screen: browse -> type form -> result. Clones
 * Deftere's design and structure (browse list, per-type form, multi-section
 * result cards) but themed to match ASRAR's own light/dark theme instead of
 * Deftere's navy/gold, so it reads as one app with the rest of ASRAR. Carries
 * its own EN/FR/AR locale switch (seeded from the host app's language) since
 * ASRAR's own i18n system doesn't have an Arabic UI locale. The app-wide
 * CalculatorDisclaimerBanner already renders above the tab bar for every
 * view, so this screen doesn't render its own.
 */
export function CalculatorScreen({ appLanguage }: { appLanguage: 'en' | 'fr' }) {
  const [locale, setLocale] = useState<CalculatorLocale>(appLanguage);
  const [selectedType, setSelectedType] = useState<CalculationType | null>(null);
  const { t } = useCalculatorTranslations(locale);
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <div
      dir={dir}
      className="rounded-2xl bg-white p-4 text-slate-900 shadow-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 sm:p-6"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400">
            <CalculatorIcon size={18} aria-hidden />
          </span>
          <div>
            <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{t('title')}</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">{t('subtitle')}</p>
          </div>
        </div>

        <div className="flex shrink-0 gap-1 rounded-full border border-slate-200 bg-slate-100 p-1 dark:border-slate-700 dark:bg-slate-900">
          {(['en', 'fr', 'ar'] as CalculatorLocale[]).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLocale(l)}
              className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                locale === l ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              {LOCALE_LABEL[l]}
            </button>
          ))}
        </div>
      </div>

      {selectedType ? (
        <CalculatorTypeForm locale={locale} calcType={selectedType} onBack={() => setSelectedType(null)} />
      ) : (
        <CalculatorTypeBrowser locale={locale} onSelect={setSelectedType} />
      )}
    </div>
  );
}
