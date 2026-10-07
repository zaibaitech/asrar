/**
 * Compact Manzil of today/tonight card
 * =====================================
 * Phase C — same visual tier as PlanetaryHourCard / PlanetOfTheDay.
 * Uses filled lunarMansions data. Reflection framing, no prediction/magic.
 */

'use client';

import React from 'react';
import {
  getCurrentLunarMansion,
  type CurrentMansion,
} from '@/src/lib/lunarMansions';

interface ManzilOfTodayCardProps {
  language?: 'en' | 'fr';
  /** When true, show expandable fav/unfav + wisdom (DivineTiming detail). Default compact. */
  allowExpand?: boolean;
}

function ManzilSkeleton() {
  return (
    <div className="relative rounded-xl border border-indigo-200 dark:border-indigo-800 bg-white dark:bg-slate-800 p-5 shadow-lg animate-pulse">
      <div className="flex items-start justify-between mb-3">
        <div className="space-y-2">
          <div className="h-4 w-28 rounded bg-slate-200 dark:bg-slate-700" />
          <div className="h-3 w-20 rounded bg-slate-200 dark:bg-slate-700" />
        </div>
        <div className="h-7 w-14 rounded-full bg-slate-200 dark:bg-slate-700" />
      </div>
      <div className="h-8 w-40 rounded bg-slate-200 dark:bg-slate-700 mb-2 mx-auto" />
      <div className="h-4 w-32 rounded bg-slate-200 dark:bg-slate-700 mb-3 mx-auto" />
      <div className="h-12 w-full rounded-lg bg-slate-200 dark:bg-slate-700" />
    </div>
  );
}

export function ManzilOfTodayCard({
  language = 'en',
  allowExpand = true,
}: ManzilOfTodayCardProps) {
  const isFr = language === 'fr';
  const [current, setCurrent] = React.useState<CurrentMansion | null>(null);
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    const update = () => setCurrent(getCurrentLunarMansion(new Date()));
    update();
    // Refresh hourly — manzil changes ~daily, but stay fresh across midnight
    const id = setInterval(update, 60 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  if (!current) return <ManzilSkeleton />;

  const { mansion, moonPhase } = current;
  const focus = isFr ? mansion.spiritualFocus.fr : mansion.spiritualFocus.en;
  const displayName = isFr ? mansion.nameFr : mansion.nameEn;
  const fav = isFr ? mansion.favorableFor.fr : mansion.favorableFor.en;
  const unfav = isFr ? mansion.unfavorableFor.fr : mansion.unfavorableFor.en;

  return (
    <div
      id="manazil-today"
      className="relative rounded-xl border border-indigo-200 dark:border-indigo-700/50 bg-gradient-to-br from-indigo-50 via-purple-50 to-slate-50 dark:from-indigo-950/50 dark:via-purple-950/40 dark:to-slate-900 p-5 shadow-lg overflow-hidden"
    >
      <div className="absolute top-0 right-0 text-6xl opacity-[0.07] dark:opacity-[0.12] pointer-events-none select-none leading-none p-2">
        {mansion.emoji || '🌙'}
      </div>

      <div className="relative z-10">
        {/* Header — mirrors hour / planet-of-day cards */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
              {isFr ? 'Manzil d’aujourd’hui / ce soir' : 'Manzil of today / tonight'}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {isFr ? 'Manāzil al-qamar · 28 stations' : 'Manāzil al-qamar · 28 stations'}
              {moonPhase ? ` · ${moonPhase}` : ''}
            </div>
          </div>
          <span className="shrink-0 text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 px-2.5 py-1 rounded-full">
            #{mansion.number}/28
          </span>
        </div>

        {/* Arabic name */}
        <div
          className="text-center text-3xl sm:text-4xl font-bold text-indigo-900 dark:text-indigo-100 mb-1"
          style={{ fontFamily: "'Amiri', serif" }}
          dir="rtl"
          lang="ar"
        >
          {mansion.nameArabic}
        </div>
        <div className="text-center text-sm font-medium text-indigo-700 dark:text-indigo-300">
          {mansion.nameTransliteration}
        </div>
        <div className="text-center text-xs text-slate-500 dark:text-slate-400 mb-3">
          {displayName}
        </div>

        {/* Short focus */}
        <div className="rounded-lg bg-white/70 dark:bg-black/20 border border-indigo-100 dark:border-indigo-800/60 px-3 py-2.5 mb-3">
          <div className="text-[10px] font-semibold uppercase tracking-wide text-indigo-500 dark:text-indigo-400 mb-1">
            {isFr ? 'Focus' : 'Focus'}
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-snug line-clamp-3">
            {focus}
          </p>
        </div>

        {/* Reflection framing */}
        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug mb-2">
          {isFr
            ? 'Stations traditionnelles pour la réflexion et l’adab du temps — non pour la prédiction. Allah seul connaît l’invisible.'
            : 'Traditional stations for reflection and timing adab — not prediction. Allah alone knows the unseen.'}
        </p>

        {allowExpand && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="w-full mt-1 px-3 py-2 text-xs font-semibold rounded-lg bg-indigo-100/80 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-800/60 transition-colors"
            aria-expanded={expanded}
          >
            {expanded
              ? isFr
                ? '▼ Masquer les détails'
                : '▼ Hide details'
              : isFr
                ? '▶ Activités & sagesse (éducatif)'
                : '▶ Activities & wisdom (educational)'}
          </button>
        )}

        {allowExpand && expanded && (
          <div className="mt-3 space-y-2 animate-in fade-in">
            <div className="rounded-lg border border-green-200 dark:border-green-800/50 bg-green-50/80 dark:bg-green-950/30 p-3">
              <div className="text-[10px] font-semibold uppercase tracking-wide text-green-700 dark:text-green-400 mb-1.5">
                {isFr ? 'Thèmes favorables (adab)' : 'Favourable themes (adab)'}
              </div>
              <ul className="space-y-1">
                {fav.map((item) => (
                  <li key={item} className="text-xs text-slate-700 dark:text-slate-300 flex gap-1.5">
                    <span className="text-green-600 dark:text-green-400">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-amber-200 dark:border-amber-800/50 bg-amber-50/80 dark:bg-amber-950/30 p-3">
              <div className="text-[10px] font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-400 mb-1.5">
                {isFr ? 'Thèmes de prudence' : 'Caution themes'}
              </div>
              <ul className="space-y-1">
                {unfav.map((item) => (
                  <li key={item} className="text-xs text-slate-700 dark:text-slate-300 flex gap-1.5">
                    <span className="text-amber-600 dark:text-amber-400">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {mansion.classicalWisdom?.quote && (
              <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-black/20 p-3">
                <p className="text-xs italic text-slate-600 dark:text-slate-400 leading-relaxed">
                  “{mansion.classicalWisdom.quote}”
                </p>
                <p className="text-[10px] text-slate-400 mt-1">
                  — {mansion.classicalWisdom.scholar}
                  {mansion.classicalWisdom.source
                    ? `, ${mansion.classicalWisdom.source}`
                    : ''}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
