/**
 * Planet of the Day Component
 * Shows the daily energy based on the ruling planet
 * Includes live planetary position from NASA JPL Horizons
 */

'use client';

import React from 'react';
import { getDayRulerInfo, getAllPlanetEphemeris } from '@/src/lib/planetary';
import type { DayRulerInfo, PlanetEphemerisData, Planet, ZodiacSign } from '@/src/lib/planetary';
import { SimplifiedStatusBadge } from './SimplifiedStatusBadge';
import { translations } from '@/src/lib/translations';

interface PlanetOfTheDayProps {
  language?: 'en' | 'fr';
}

// ──────────────────────────────────────────────────────────────
// Skeleton loader (matches card layout for zero layout‑shift)
// ──────────────────────────────────────────────────────────────
function PlanetOfTheDaySkeleton() {
  return (
    <div className="relative rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-lg animate-in">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="space-y-2">
          <div className="h-5 w-36 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
          <div className="h-4 w-24 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
        </div>
        <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse" />
      </div>
      {/* Planet name */}
      <div className="mb-4 space-y-2">
        <div className="h-7 w-40 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
        <div className="h-4 w-56 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
      </div>
      {/* Position box */}
      <div className="mb-4 p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse" />
          <div className="space-y-1.5">
            <div className="h-4 w-28 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
            <div className="h-3 w-36 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
          </div>
        </div>
      </div>
      {/* Tags */}
      <div className="flex gap-2 mb-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="h-7 w-20 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse" />
        ))}
      </div>
      <div className="h-5 w-32 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// Live data-source badge
// ──────────────────────────────────────────────────────────────
function DataSourceBadge({ source }: { source: 'ephemeris' | 'fallback' }) {
  const isLive = source === 'ephemeris';
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs px-2 py-0.5 rounded-full font-medium ${
      isLive
        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
        : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
    }`}>
      {isLive && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-600" />
        </span>
      )}
      {isLive ? 'Live' : ''}
    </span>
  );
}

export function PlanetOfTheDay({ language = 'en' }: PlanetOfTheDayProps) {
  const [dayInfo, setDayInfo] = React.useState<DayRulerInfo | null>(null);
  const [livePosition, setLivePosition] = React.useState<PlanetEphemerisData | null>(null);
  const [dataSource, setDataSource] = React.useState<'ephemeris' | 'fallback'>('fallback');
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const updateDayInfo = async () => {
      try {
        const info = getDayRulerInfo(new Date());
        setDayInfo(info);
        
        // Fetch live planetary position
        try {
          const ephemeris = await getAllPlanetEphemeris('tropical');
          const planetKey = info.planet.toLowerCase();
          const position = ephemeris.planets.find(p => p.planetKey === planetKey);
          if (position) {
            setLivePosition(position);
            setDataSource(ephemeris.source);
          }
        } catch (error) {
          console.error('[PlanetOfTheDay] Failed to fetch live position:', error);
        }
      } catch (err) {
        console.error('[PlanetOfTheDay] Error:', err);
        setHasError(true);
      }
    };

    updateDayInfo();
    // Update at midnight
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const msUntilMidnight = midnight.getTime() - Date.now();
    const timeout = setTimeout(updateDayInfo, msUntilMidnight);

    return () => clearTimeout(timeout);
  }, []);

  // ── Loading State ──
  if (!dayInfo && !hasError) return <PlanetOfTheDaySkeleton />;

  // ── Error State ──
  if (hasError || !dayInfo) {
    return (
      <div className="relative rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-lg">
        <div className="text-center py-4">
          <div className="text-2xl mb-2">🪐</div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {language === 'fr' ? 'Impossible de charger les données planétaires' : 'Unable to load planetary data'}
          </p>
        </div>
      </div>
    );
  }

  const elementColors: Record<string, { bg: string; border: string; text: string; accent: string }> = {
    fire: { bg: 'bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/40 dark:to-orange-950/30', border: 'border-red-200 dark:border-red-500/30', text: 'text-red-700 dark:text-red-400', accent: 'text-red-600 dark:text-red-500' },
    water: { bg: 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/30', border: 'border-blue-200 dark:border-blue-500/30', text: 'text-blue-700 dark:text-blue-400', accent: 'text-blue-600 dark:text-blue-500' },
    air: { bg: 'bg-gradient-to-br from-cyan-50 to-sky-50 dark:from-cyan-950/40 dark:to-sky-950/30', border: 'border-cyan-200 dark:border-cyan-500/30', text: 'text-cyan-700 dark:text-cyan-400', accent: 'text-cyan-600 dark:text-cyan-500' },
    earth: { bg: 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/40 dark:to-emerald-950/30', border: 'border-green-200 dark:border-green-500/30', text: 'text-green-700 dark:text-green-400', accent: 'text-green-600 dark:text-green-500' },
  };

  const colors = elementColors[dayInfo.element] || elementColors.fire;
  const t = translations[language].planetary;

  // Translate values
  const planetName = (t.planets as Record<string, string>)?.[dayInfo.planet] || dayInfo.planet;
  const elementName = (t.elements as Record<string, string>)?.[dayInfo.element] || dayInfo.element.charAt(0).toUpperCase() + dayInfo.element.slice(1);
  const elementDesc = (t.elementDescriptions as Record<string, string>)?.[dayInfo.element] || dayInfo.elementDescription;
  const dayKey = dayInfo.dayName.toLowerCase() as keyof typeof t.days;
  const dayName = t.days[dayKey] || dayInfo.dayName;

  // Planet symbols for hero display
  const planetSymbols: Record<string, string> = {
    Sun: '☉', Moon: '☽', Mars: '♂', Mercury: '☿',
    Jupiter: '♃', Venus: '♀', Saturn: '♄',
  };
  const heroSymbol = planetSymbols[dayInfo.planet] || dayInfo.elementEmoji;

  return (
    <div className={`relative rounded-xl border ${colors.border} ${colors.bg} p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-in`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-0.5">
            {t.planetOfDay.title}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {dayName} <span className="font-arabic text-slate-400 dark:text-slate-500">{dayInfo.dayNameArabic}</span>
          </p>
        </div>
        {/* Hero planet symbol */}
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold shadow-inner ${colors.text}`}
             style={{ background: 'rgba(255,255,255,0.5)' }}>
          {heroSymbol}
        </div>
      </div>

      {/* Planet & Element row */}
      <div className="mb-4">
        <div className="flex items-baseline gap-2 mb-1">
          <span className={`text-2xl font-bold ${colors.text}`}>
            {planetName}
          </span>
          <span className="text-base font-arabic text-slate-400 dark:text-slate-500">
            {(t.planetsAr as Record<string, string>)?.[dayInfo.planet]}
          </span>
          <span className="text-slate-300 dark:text-slate-600">·</span>
          <span className={`text-base font-medium ${colors.text} opacity-80`}>
            {elementName}
          </span>
          <span className="text-sm font-arabic text-slate-400 dark:text-slate-500">
            {(t.elementsAr as Record<string, string>)?.[dayInfo.element]}
          </span>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {elementDesc}
        </p>
      </div>

      {/* Live Position from NASA */}
      {livePosition && (
        <div className="mb-4 p-3 rounded-lg bg-white/60 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="text-xl">{livePosition.zodiacSymbol}</span>
              <div>
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {t.planetOfDay.currentPosition}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <span>
                    {(t.zodiac as Record<string, string>)?.[livePosition.sign] || livePosition.sign.charAt(0).toUpperCase() + livePosition.sign.slice(1)}{' '}
                    <span className="font-arabic text-slate-400 dark:text-slate-500">{(t.zodiacAr as Record<string, string>)?.[livePosition.sign]}</span>{' '}
                    {livePosition.signDegree}° {livePosition.signMinute}′
                  </span>
                  {livePosition.isRetrograde && (
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-xs font-medium bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 border border-amber-300 dark:border-amber-500/30">
                      ℞ {language === 'fr' ? 'Rétrograde' : 'Retrograde'}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <DataSourceBadge source={dataSource} />
          </div>
          {/* Simplified Status Badge */}
          <div className="mt-2.5 flex justify-end">
            <SimplifiedStatusBadge
              planet={dayInfo.planet as Planet}
              sign={livePosition.sign as ZodiacSign}
              degree={livePosition.signDegree}
              isDay={new Date().getHours() >= 6 && new Date().getHours() < 18}
              isRetrograde={livePosition.isRetrograde}
              language={language}
            />
          </div>
        </div>
      )}

      {/* Best For */}
      <div className="mb-4">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
          {t.planetOfDay.bestFor}
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {dayInfo.bestFor.map((activity: string, idx: number) => {
            const elementActivities = (t.elementBestFor as Record<string, Record<string, string>>)?.[dayInfo.element];
            const translatedActivity = elementActivities 
              ? Object.values(elementActivities).find((_, i) => i === idx) || activity 
              : activity;
            return (
              <span
                key={idx}
                className={`px-2.5 py-1 rounded-full text-xs font-medium bg-white/80 dark:bg-slate-800 ${colors.text} border ${colors.border} shadow-sm`}
              >
                {translatedActivity}
              </span>
            );
          })}
        </div>
      </div>

      {/* Difficulty Badge */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          {t.planetOfDay.practiceLevel}
        </span>
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
          dayInfo.difficulty === 'Easy' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-500/30' :
          dayInfo.difficulty === 'Moderate' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-500/30' :
          'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-500/30'
        }`}>
          {t.planetOfDay.difficulty[dayInfo.difficulty.toLowerCase() as 'easy' | 'moderate' | 'advanced']}
        </span>
      </div>
    </div>
  );
}
