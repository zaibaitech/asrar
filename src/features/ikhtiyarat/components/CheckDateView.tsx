'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { evaluateElection, findNearestBetterDates } from '@/src/lib/ikhtiyarat/engine';
import { marriageElectionConfig } from '@/src/lib/ikhtiyarat/elections/marriage';
import { ElectionResult } from '@/src/lib/ikhtiyarat/types';
import { gregorianToHijri, getSunnahBadges } from '@/src/lib/ikhtiyarat/hijri';
import { getUrfBadgeForMonth } from '@/src/lib/ikhtiyarat/urf';
import { getDayDegradationNote } from '@/src/lib/ikhtiyarat/degradation';
import { shareContent } from '@/src/features/ramadanChallenges/sharing';
import { UserLocation } from '@/src/types/planetary';
import { getLocalToday } from '@/src/lib/localDate';
import { TierBadge } from './TierBadge';
import { RuleRow } from './RuleRow';
import { SunnahBadges } from './SunnahBadges';
import { UrfBadge } from './UrfBadge';
import { ikhtiyaratCopy, UiLang } from '../copy';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.asrar.app';

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export function CheckDateView({ language, location }: { language: UiLang; location: UserLocation }) {
  const c = ikhtiyaratCopy[language];
  const searchParams = useSearchParams();
  const dateFromUrl = searchParams.get('date');
  const [dateStr, setDateStr] = useState(
    dateFromUrl && DATE_RE.test(dateFromUrl) ? dateFromUrl : getLocalToday(),
  );
  const [result, setResult] = useState<ElectionResult | null>(null);
  const [nearestBetter, setNearestBetter] = useState<ElectionResult[]>([]);
  const [bestAvailable, setBestAvailable] = useState<ElectionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);

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
      if (r.tier === 'avoid' || r.tier === 'weak') {
        const { dates, bestAvailable: fallback } = findNearestBetterDates(input, marriageElectionConfig, 3);
        setNearestBetter(dates);
        setBestAvailable(dates.length === 0 ? fallback : null);
      } else {
        setNearestBetter([]);
        setBestAvailable(null);
      }
      setLoading(false);
    }, 0);
  }

  useEffect(() => {
    handleCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleShare() {
    if (!result) return;
    const tierLabel = language === 'fr' ? result.tierInfo.labelFr : result.tierInfo.labelEn;
    const dateOnly = result.date.toISOString().slice(0, 10);
    const url = `${BASE_URL}/ikhtiyarat/r/${dateOnly}?lat=${location.latitude}&lon=${location.longitude}&tz=${encodeURIComponent(tz)}${language === 'fr' ? '&lang=fr' : ''}`;
    const shareResult = await shareContent({
      title: c.title,
      text: `${dateOnly} — ${tierLabel} (${result.score}/100)`,
      url,
    });
    if (shareResult.success && shareResult.method === 'clipboard') {
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    }
  }

  const hijri = result ? gregorianToHijri(result.date) : null;
  const sunnahBadges = result ? getSunnahBadges(result.date) : [];
  const urfBadge = hijri ? getUrfBadgeForMonth(hijri.month) : null;
  const degradationNote = result ? getDayDegradationNote(result, language) : null;

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
          <div>
            <div className="flex items-center justify-between mb-1">
              <div className="text-xs uppercase tracking-wide text-slate-400">{c.starsLabel}</div>
              <button
                onClick={handleShare}
                className="text-xs font-medium text-emerald-700 dark:text-emerald-400 hover:underline"
              >
                {shareCopied ? c.linkCopied : c.shareButton}
              </button>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <TierBadge tierInfo={result.tierInfo} language={language} score={result.score} />
              {hijri && (
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {c.hijriDate}: {hijri.day} {hijri.monthName[language]} ({hijri.monthName.wolof}) {hijri.year} {c.hijriEra}
                </span>
              )}
            </div>
          </div>

          {sunnahBadges.length > 0 && (
            <div>
              <div className="text-xs uppercase tracking-wide text-slate-400 mb-2">{c.sunnahBadge}</div>
              <SunnahBadges badges={sunnahBadges} language={language} />
            </div>
          )}

          {urfBadge && (
            <div>
              <div className="text-xs uppercase tracking-wide text-slate-400 mb-2">{c.urfLabel}</div>
              <UrfBadge badge={urfBadge} language={language} />
            </div>
          )}

          <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-3">
            <div className="text-xs uppercase tracking-wide text-slate-400 mb-1">
              {result.isLeastAfflicted ? c.leastAfflictedWindow : c.bestWindow}
            </div>
            <div className="text-sm font-medium text-slate-900 dark:text-slate-100">
              {result.bestWindow.time.toLocaleTimeString(language === 'fr' ? 'fr-FR' : 'en-US', { hour: '2-digit', minute: '2-digit' })}
            </div>
            {degradationNote && (
              <p className="text-xs text-amber-600 dark:text-amber-400 mt-2">{degradationNote}</p>
            )}
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

          {nearestBetter.length === 0 && bestAvailable && (
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                {c.noAcceptableDatesFound} {c.showingBestAvailable}
              </p>
              <div className="flex items-center justify-between rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2">
                <span className="text-sm text-slate-900 dark:text-slate-100">
                  {bestAvailable.date.toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                </span>
                <TierBadge tierInfo={bestAvailable.tierInfo} language={language} score={bestAvailable.score} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
