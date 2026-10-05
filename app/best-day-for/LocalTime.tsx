'use client';

import { useEffect, useState } from 'react';

/**
 * Server renders the time in the reference zone (Makkah); after hydration
 * the visitor also sees it converted to their own clock.
 */
export function LocalTime({ iso, lang }: { iso: string; lang: 'en' | 'fr' }) {
  const [local, setLocal] = useState<string | null>(null);

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz === 'Asia/Riyadh') return;
    setLocal(
      new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-GB', {
        weekday: 'short',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short',
      }).format(new Date(iso)),
    );
  }, [iso, lang]);

  if (!local) return null;
  return <span className="block text-xs text-slate-500 dark:text-slate-400">{lang === 'fr' ? `Chez vous : ${local}` : `Your time: ${local}`}</span>;
}
