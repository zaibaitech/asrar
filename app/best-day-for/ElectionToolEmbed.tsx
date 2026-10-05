'use client';

import { useEffect, useState } from 'react';
import { getUserLocation, loadLocation } from '@/src/utils/location';
import type { UserLocation } from '@/src/types/planetary';
import { CheckDateView } from '@/src/features/ikhtiyarat/components/CheckDateView';
import { ScanDatesView } from '@/src/features/ikhtiyarat/components/ScanDatesView';
import { ikhtiyaratCopy } from '@/src/features/ikhtiyarat/copy';
import type { ElectionType } from '@/src/lib/ikhtiyarat/types';

type Mode = 'scan' | 'check';

/**
 * The /ikhtiyarat interactive tool, locked to one election type, for the
 * /best-day-for/* landing pages. Same views, same engine, same location
 * handling as IkhtiyaratPage (cached location, then geolocation, Makkah
 * fallback) — only the election dropdown is removed.
 */
export function ElectionToolEmbed({ lang, electionType }: { lang: 'en' | 'fr'; electionType: ElectionType }) {
  const c = ikhtiyaratCopy[lang];
  const [mode, setMode] = useState<Mode>('scan');
  const [location, setLocation] = useState<UserLocation | null>(null);

  useEffect(() => {
    const cached = loadLocation();
    if (cached) setLocation(cached);
    getUserLocation().then(setLocation);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex rounded-xl border border-slate-200 dark:border-slate-700 p-1 bg-white/60 dark:bg-slate-800/40">
        {(['scan', 'check'] as Mode[]).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              mode === m ? 'bg-emerald-600 text-white' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            {m === 'scan' ? c.tabScan : c.tabCheck}
          </button>
        ))}
      </div>
      {location ? (
        mode === 'check' ? (
          <CheckDateView language={lang} location={location} electionType={electionType} />
        ) : (
          <ScanDatesView language={lang} location={location} electionType={electionType} />
        )
      ) : (
        <div className="h-40 rounded-2xl bg-white/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 animate-pulse" />
      )}
    </div>
  );
}
