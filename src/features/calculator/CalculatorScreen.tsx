'use client';

import { useState } from 'react';
import { CalculatorTypeBrowser } from './components/CalculatorTypeBrowser';
import { CalculatorTypeForm } from './components/CalculatorTypeForm';
import type { CalculationType } from './components/calculatorTypes';
import { useCalculatorTranslations } from './i18n';

/**
 * Top-level calculator screen: browse -> type form -> result. Clones
 * Deftere's design and structure (browse list, per-type form, multi-section
 * result cards) but themed to match ASRAR's own light/dark theme instead of
 * Deftere's navy/gold, so it reads as one app with the rest of ASRAR. Follows
 * the app's own header language toggle rather than carrying a second,
 * calculator-only one. The app-wide CalculatorDisclaimerBanner already
 * renders above the tab bar for every view, so this screen doesn't render
 * its own.
 */
export function CalculatorScreen({ appLanguage }: { appLanguage: 'en' | 'fr' }) {
  const locale = appLanguage;
  const [selectedType, setSelectedType] = useState<CalculationType | null>(null);
  const { t } = useCalculatorTranslations(locale);

  return (
    <div className="rounded-2xl bg-white p-4 text-slate-900 shadow-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 sm:p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{t('title')}</h1>
        <p className="text-base text-slate-500 dark:text-slate-400">{t('subtitle')}</p>
      </div>

      {selectedType ? (
        <CalculatorTypeForm locale={locale} calcType={selectedType} onBack={() => setSelectedType(null)} />
      ) : (
        <CalculatorTypeBrowser locale={locale} onSelect={setSelectedType} />
      )}
    </div>
  );
}
