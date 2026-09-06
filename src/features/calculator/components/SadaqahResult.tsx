'use client';

import { useMemo } from 'react';
import { Card } from './Card';
import { gregorianToHijri } from '@/src/lib/ikhtiyarat/hijri';
import { getSadaqahForHijriMonth } from '../lib/sadaqahByMonth';
import { useCalculatorTranslations, type CalculatorLocale } from '../i18n';

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">{children}</p>;
}

/** This content only has English/French text — Arabic locale falls back to English. */
function pickEnFr<T>(locale: CalculatorLocale, content: { en: T; fr: T }): T {
  return locale === 'fr' ? content.fr : content.en;
}

export function SadaqahResult({ locale, dob }: { locale: CalculatorLocale; dob: string }) {
  const { t } = useCalculatorTranslations(locale);

  const hijri = useMemo(() => gregorianToHijri(new Date(`${dob}T12:00:00`)), [dob]);
  const guidance = useMemo(() => getSadaqahForHijriMonth(hijri.month), [hijri.month]);
  const text = guidance ? pickEnFr(locale, guidance) : null;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-indigo-200 bg-white px-4 py-6 text-center dark:border-indigo-800 dark:bg-slate-800">
        <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-slate-500">{t('sadaqahResultTitle')}</p>
        <p className="text-2xl font-medium text-indigo-600 dark:text-indigo-400">{guidance?.displayName ?? hijri.monthName.en}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {t('hijriYearLabel')} {hijri.year} {t('hijriEraSuffix')}
        </p>
      </div>

      {text ? (
        <Card className="flex flex-col gap-3">
          <SectionTitle>{t('sadaqahSuggestionsTitle')}</SectionTitle>
          <p className="text-sm text-slate-600 dark:text-slate-300">{text.intro}</p>
          <ul className="flex flex-col gap-2">
            {text.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
                {item}
              </li>
            ))}
          </ul>
          {text.notes.map((note, i) => (
            <p key={i} className="border-t border-slate-200 pt-2 text-xs leading-relaxed text-slate-500 dark:border-slate-700">
              {note}
            </p>
          ))}
        </Card>
      ) : (
        <p className="text-sm text-slate-500">{t('sadaqahUnavailable')}</p>
      )}

      <p className="text-xs leading-relaxed text-slate-500">{t('sadaqahDisclaimer')}</p>
    </div>
  );
}
