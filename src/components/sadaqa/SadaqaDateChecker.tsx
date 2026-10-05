'use client';

import { useState } from 'react';
import { SadaqahDayResult } from '@/src/features/calculator/components/SadaqahDayResult';
import { SadaqahResult } from '@/src/features/calculator/components/SadaqahResult';
import { useCalculatorTranslations } from '@/src/features/calculator/i18n';

/**
 * Minimal date form around the calculator's existing result cards:
 * - mode "day":   any date (birth date or planned giving date) -> weekday sadaqa (SadaqahDayResult)
 * - mode "month": Gregorian date of birth -> Hijri birth month sadaqa (SadaqahResult)
 * Same labels/helpers as the "Sadaqah" calculator types in CalculatorTypeForm.
 */
export function SadaqaDateChecker({ lang, mode }: { lang: 'en' | 'fr'; mode: 'day' | 'month' }) {
  const { t } = useCalculatorTranslations(lang);
  const [value, setValue] = useState('');
  const [submitted, setSubmitted] = useState<string | null>(null);

  const label = mode === 'day' ? t('sadaqahDayFieldLabel') : t('dobFieldLabel');
  const helper = mode === 'day' ? t('sadaqahDayFieldHelper') : t('dobFieldHelper');

  return (
    <div className="rounded-2xl bg-white p-4 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-700 dark:bg-slate-800 space-y-4">
      <form
        className="flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          if (value) setSubmitted(value);
        }}
      >
        <label className="flex flex-col gap-1.5">
          <span className="text-base text-slate-700 dark:text-slate-300">{label}</span>
          <input
            type="date"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            max={mode === 'month' ? new Date().toISOString().slice(0, 10) : undefined}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:[color-scheme:dark]"
          />
          <span className="text-sm text-slate-500">{helper}</span>
        </label>
        <button
          type="submit"
          disabled={!value}
          className="self-start rounded-xl bg-indigo-600 px-5 py-2 font-semibold text-white disabled:opacity-50"
        >
          {t('calculate')}
        </button>
      </form>
      {submitted && mode === 'day' && <SadaqahDayResult locale={lang} date={submitted} />}
      {submitted && mode === 'month' && <SadaqahResult locale={lang} dob={submitted} />}
    </div>
  );
}
