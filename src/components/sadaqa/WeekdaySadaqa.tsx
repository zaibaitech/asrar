'use client';

import { useEffect, useState } from 'react';
import { SADAQAH_BY_DAY } from '@/src/features/calculator/lib/sadaqahByDay';

type Lang = 'en' | 'fr';

const WEEKDAY_FR = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

const UI = {
  en: {
    today: "Today's sadaqa",
    todayIs: 'Today is',
    localNote: 'Based on the date on your device.',
    tableCaption: 'Recommended sadaqa for each day of the week',
    day: 'Day',
    guidance: 'Recommended sadaqa',
    todayBadge: 'Today',
  },
  fr: {
    today: 'La sadaqa du jour',
    todayIs: "Aujourd'hui, nous sommes",
    localNote: "D'après la date de votre appareil.",
    tableCaption: 'Sadaqa recommandée pour chaque jour de la semaine',
    day: 'Jour',
    guidance: 'Sadaqa recommandée',
    todayBadge: "Aujourd'hui",
  },
} as const;

function dayName(day: number, lang: Lang) {
  return lang === 'fr' ? WEEKDAY_FR[day] : SADAQAH_BY_DAY[day].displayName;
}

/**
 * Today's sadaqa card + the full 7-day table, from the existing SADAQAH_BY_DAY
 * data (also used by the calculator's "Sadaqah by day" type).
 *
 * Server-rendered with the server's weekday (`serverDay`, UTC) so crawlers and
 * no-JS visitors get the full content; after hydration the "today" highlight is
 * recomputed from the visitor's own clock so a cached page never shows an old
 * day and time zones ahead of / behind UTC get their real local day.
 */
export function WeekdaySadaqa({ lang, serverDay }: { lang: Lang; serverDay: number }) {
  const [today, setToday] = useState(serverDay);
  const [isLocal, setIsLocal] = useState(false);
  const ui = UI[lang];

  useEffect(() => {
    const update = () => {
      setToday(new Date().getDay());
      setIsLocal(true);
    };
    update();
    // Keep the highlight right if the tab stays open past midnight.
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  const todayGuidance = SADAQAH_BY_DAY.find((d) => d.day === today) ?? SADAQAH_BY_DAY[0];
  const todayText = lang === 'fr' ? todayGuidance.fr : todayGuidance.en;

  return (
    <div className="space-y-8">
      <section
        aria-labelledby="sadaqa-today-heading"
        className="rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-slate-800 p-5 shadow-sm space-y-3"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-700 dark:text-emerald-300">
          {ui.today}
        </p>
        <h2 id="sadaqa-today-heading" className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          {ui.todayIs} {dayName(today, lang)}
        </h2>
        <p className="text-slate-700 dark:text-slate-300">{todayText.intro}</p>
        <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
          {todayText.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {isLocal && <p className="text-xs text-slate-500 dark:text-slate-400">{ui.localNote}</p>}
      </section>

      <section aria-labelledby="sadaqa-week-heading" className="space-y-3">
        <h2 id="sadaqa-week-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">
          {ui.tableCaption}
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              <tr>
                <th scope="col" className="px-4 py-2 font-semibold">{ui.day}</th>
                <th scope="col" className="px-4 py-2 font-semibold">{ui.guidance}</th>
              </tr>
            </thead>
            <tbody>
              {SADAQAH_BY_DAY.map((d) => {
                const text = lang === 'fr' ? d.fr : d.en;
                const isToday = d.day === today;
                return (
                  <tr
                    key={d.day}
                    id={`day-${d.displayName.toLowerCase()}`}
                    aria-current={isToday ? 'date' : undefined}
                    className={`border-t border-slate-200 dark:border-slate-700 align-top ${
                      isToday ? 'bg-emerald-50 dark:bg-emerald-900/30' : 'bg-white dark:bg-slate-900'
                    }`}
                  >
                    <th scope="row" className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 whitespace-nowrap">
                      {dayName(d.day, lang)}
                      {isToday && (
                        <span className="ml-2 rounded-full bg-emerald-600 px-2 py-0.5 text-xs font-medium text-white">
                          {ui.todayBadge}
                        </span>
                      )}
                    </th>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
                      <p>{text.intro}</p>
                      <ul className="mt-1 list-disc pl-5 space-y-0.5">
                        {text.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
