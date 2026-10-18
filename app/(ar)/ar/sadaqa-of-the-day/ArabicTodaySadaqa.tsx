'use client';

import { useEffect, useState } from 'react';
import { AR_SADAQAH_BY_DAY } from './arabicSadaqa';
import { AR_WEEKDAYS } from '../_shared/weekdays';

/**
 * Arabic counterpart of WeekdaySadaqa (which only has EN/FR copy): today's
 * card + the 7-day table from the same SADAQAH_BY_DAY guidance. Same
 * behaviour: server-rendered with the UTC weekday, then re-checked against the
 * visitor's own clock after hydration (and every minute).
 */
export function ArabicTodaySadaqa({ serverDay }: { serverDay: number }) {
  const [today, setToday] = useState(serverDay);
  const [isLocal, setIsLocal] = useState(false);

  useEffect(() => {
    const update = () => {
      setToday(new Date().getDay());
      setIsLocal(true);
    };
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  const t = AR_SADAQAH_BY_DAY.find((d) => d.day === today) ?? AR_SADAQAH_BY_DAY[0];

  return (
    <div className="space-y-8">
      <section
        aria-labelledby="sadaqa-today-heading"
        className="rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-slate-800 p-5 shadow-sm space-y-3"
      >
        <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">صدقة اليوم</p>
        <h2 id="sadaqa-today-heading" className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          اليوم {AR_WEEKDAYS[today]}
        </h2>
        <p className="text-slate-700 dark:text-slate-300">{t.intro}</p>
        <ul className="list-disc pr-5 space-y-1 text-slate-700 dark:text-slate-300">
          {t.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {isLocal && <p className="text-xs text-slate-500 dark:text-slate-400">بحسب التاريخ في جهازك.</p>}
      </section>

      <section aria-labelledby="sadaqa-week-heading" className="space-y-3">
        <h2 id="sadaqa-week-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100">
          الصدقة المستحبة لكل يوم من أيام الأسبوع
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
          <table className="w-full text-right text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              <tr>
                <th scope="col" className="px-4 py-2 font-semibold">اليوم</th>
                <th scope="col" className="px-4 py-2 font-semibold">الصدقة المستحبة</th>
              </tr>
            </thead>
            <tbody>
              {AR_SADAQAH_BY_DAY.map((d) => {
                const isToday = d.day === today;
                return (
                  <tr
                    key={d.day}
                    aria-current={isToday ? 'date' : undefined}
                    className={`border-t border-slate-200 dark:border-slate-700 align-top ${
                      isToday ? 'bg-emerald-50 dark:bg-emerald-900/30' : 'bg-white dark:bg-slate-900'
                    }`}
                  >
                    <th scope="row" className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 whitespace-nowrap">
                      {AR_WEEKDAYS[d.day]}
                      {isToday && (
                        <span className="block mt-1 w-fit rounded-full bg-emerald-600 px-2 py-0.5 text-xs font-medium text-white">اليوم</span>
                      )}
                    </th>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
                      <p>{d.intro}</p>
                      <ul className="mt-1 list-disc pr-5 space-y-0.5">
                        {d.items.map((item) => (
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
