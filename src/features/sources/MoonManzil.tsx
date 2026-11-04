'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { localizeHref } from '../../lib/i18nRoutes';
import { getCurrentLunarMansion, type CurrentMansion } from '../../lib/lunarMansions';
import { LABELS, type Lang } from './sourcesContent';

/**
 * The only manzil: the Moon's real position among the 28 mansions, from the
 * existing ephemeris code (the same function /manazil and /birth-profile use).
 * Shows today's mansion; the natal mansion is read on /birth-profile, where a
 * birth date, time and place are available. The name plays no part.
 */
export function MoonManzil({ lang }: { lang: Lang }) {
  const [now, setNow] = useState<CurrentMansion | null>(null);
  useEffect(() => setNow(getCurrentLunarMansion(new Date())), []);
  // No Urdu birth-profile page exists yet, so Urdu links to the English one.
  const href = lang === 'ar' ? '/ar/birth-profile' : localizeHref('/birth-profile', lang === 'fr' ? 'fr' : 'en');
  const m = now?.mansion;
  return (
    <div className="min-w-0 space-y-1 break-words [overflow-wrap:anywhere]">
      <p className="text-xs">{LABELS.manzilToday[lang]}</p>
      {m && (
        <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
          <bdi dir="ltr">{m.number}</bdi> ·{' '}
          <span lang="ar" dir="rtl" className="font-arabic">
            {m.nameArabic}
          </span>{' '}
          · <bdi dir="ltr">{m.nameTransliteration}</bdi>
        </p>
      )}
      <Link href={href} className="inline-block max-w-full min-h-[44px] py-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 underline">
        {LABELS.manzilNatal[lang]}
      </Link>
    </div>
  );
}
