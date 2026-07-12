'use client';

import { useEffect, useState } from 'react';
import { evaluateElection, findNearestBetterDates } from '@/src/lib/ikhtiyarat/engine';
import { marriageElectionConfig } from '@/src/lib/ikhtiyarat/elections/marriage';
import { ElectionResult } from '@/src/lib/ikhtiyarat/types';
import { gregorianToHijri, getSunnahBadges } from '@/src/lib/ikhtiyarat/hijri';
import { UserLocation } from '@/src/types/planetary';
import { TierBadge } from './TierBadge';
import { RuleRow } from './RuleRow';
import { SunnahBadges } from './SunnahBadges';
import { ikhtiyaratCopy, UiLang } from '../copy';

function toDateInputValue(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export function CheckDateView({ language, location }: { language: UiLang; location: UserLocation }) {
  const c = ikhtiyaratCopy[language];
  const [dateStr, setDateStr] = useState(toDateInputValue(new Date()));
  const [result, setResult] = useState<ElectionResult | null>(null);
  const [nearestBetter, setNearestBetter] = useState<ElectionResult[]>([]);
  const [loading, setLoading] = useState(false);

  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  function handleCheck() {
    setLoading(true);
    // Deferred to a microtask so the loading state paints before the
    // (synchronous, CPU-bound) ephemeris scan blocks the main thread.
    setTimeout(() => {
      const datetime = new Date(`${dateStr}T12:00:00`);
      const input = { datetime, lat: location.latitude, lon: location.longitude, tz, electionType: 'marriage' as const };
      const r = evaluateElection(input, marriageElectionConfig);
      setResult(r);
      if (r.tier === 'avoid') {
        setNearestBetter(findNearestBetterDates(input, marriageElectionConfig, 3));
      } else {
        setNearestBetter([]);
      }
      setLoading(false);
    }, 0);
  }

  useEffect(() => {
    handleCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hijri = result ? gregorianToHijri(result.date) : null;
  const sunnahBadges = result ? getSunnahBadges(result.date) : [];

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/40 p-4 space-y-3">
        <label className="block">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{c.datePickerLabel}</span>
          <input
            type="date"
            value={dateStr}
            onChange={e => setDateStr(e.target.value)}
            className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"
          />
        </label>
        <div className="text-xs text-slate-500 dark:text-slate-400">
          {c.locationLabel}: {location.cityName ?? `${location.latitude.toFixed(2)}, ${location.longitude.toFixed(2)}`}
        </div>
        <button
          onClick={handleCheck}
          disabled={loading}
          className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white text-sm font-semibold transition-colors active:scale-[0.98]"
        >
          {loading ? c.loading : c.checkButton}
        </button>
      </div>

      {result && (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/40 p-4 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <TierBadge tierInfo={result.tierInfo} language={language} score={result.score} />
            {hijri && (
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {c.hijriDate}: {hijri.day} {hijri.monthName[language]} {hijri.year} {c.hijriEra}
              </span>
            )}
          </div>

          {sunnahBadges.length > 0 && <SunnahBadges badges={sunnahBadges} language={language} />}

          <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-3">
            <div className="text-xs uppercase tracking-wide text-slate-400 mb-1">{c.bestWindow}</div>
            <div className="text-sm font-medium text-slate-900 dark:text-slate-100">
              {result.bestWindow.time.toLocaleTimeString(language === 'fr' ? 'fr-FR' : 'en-US', { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wide text-slate-400 mb-2">{c.ruleBreakdown}</div>
            <div className="rounded-xl border border-slate-200 dark:border-slate-700 px-3">
              {result.rules.map(rule => (
                <RuleRow key={rule.id} rule={rule} language={language} />
              ))}
            </div>
          </div>

          {nearestBetter.length > 0 && (
            <div>
              <div className="text-xs uppercase tracking-wide text-slate-400 mb-2">{c.nearestBetterDates}</div>
              <div className="space-y-2">
                {nearestBetter.map(r => (
                  <div
                    key={r.date.toISOString()}
                    className="flex items-center justify-between rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2"
                  >
                    <span className="text-sm text-slate-900 dark:text-slate-100">
                      {r.date.toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                    </span>
                    <TierBadge tierInfo={r.tierInfo} language={language} score={r.score} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
