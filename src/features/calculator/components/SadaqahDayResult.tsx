'use client';

import { useMemo } from 'react';
import { Card } from './Card';
import { getSadaqahForDayOfWeek } from '../lib/sadaqahByDay';
import { useCalculatorTranslations, type CalculatorLocale } from '../i18n';

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400">{children}</p>;
}

/** This content only has English/French text — Arabic locale falls back to English. */
function pickEnFr<T>(locale: CalculatorLocale, content: { en: T; fr: T }): T {
  return locale === 'fr' ? content.fr : content.en;
}

export function SadaqahDayResult({ locale, date }: { locale: CalculatorLocale; date: string }) {
  const { t } = useCalculatorTranslations(locale);

  // Noon-anchored to avoid a timezone shift flipping the calendar day (and
  // therefore the weekday) near midnight — same pattern as SadaqahResult.
  const parsed = useMemo(() => new Date(`${date}T12:00:00`), [date]);
  const intlLocale = locale === 'fr' ? 'fr-FR' : 'en-US';
  const weekday = useMemo(() => parsed.toLocaleDateString(intlLocale, { weekday: 'long' }), [parsed, intlLocale]);
  const formattedDate = useMemo(
    () => parsed.toLocaleDateString(intlLocale, { year: 'numeric', month: 'long', day: 'numeric' }),
    [parsed, intlLocale],
  );
  const guidance = useMemo(() => getSadaqahForDayOfWeek(parsed.getDay()), [parsed]);
  const text = guidance ? pickEnFr(locale, guidance) : null;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-indigo-200 bg-white px-4 py-6 text-center dark:border-indigo-800 dark:bg-slate-800">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-slate-500">{t('sadaqahDayResultTitle')}</p>
        <p className="text-3xl font-medium text-indigo-600 dark:text-indigo-400">{weekday}</p>
        <p className="text-base text-slate-500 dark:text-slate-400">{formattedDate}</p>
      </div>

      {text ? (
        <Card className="flex flex-col gap-3">
          <SectionTitle>{t('sadaqahSuggestionsTitle')}</SectionTitle>
          <p className="text-base text-slate-600 dark:text-slate-300">{text.intro}</p>
          <ul className="flex flex-col gap-2">
            {text.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-base text-slate-600 dark:text-slate-300">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
                {item}
              </li>
            ))}
          </ul>
          {text.notes.map((note, i) => (
            <p key={i} className="border-t border-slate-200 pt-2 text-sm leading-relaxed text-slate-500 dark:border-slate-700">
              {note}
            </p>
          ))}
        </Card>
      ) : (
        <p className="text-base text-slate-500">{t('sadaqahDayUnavailable')}</p>
      )}

      <p className="text-sm leading-relaxed text-slate-500">{t('sadaqahDisclaimer')}</p>
    </div>
  );
}
