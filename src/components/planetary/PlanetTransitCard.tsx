/**
 * Planet Transit Card Component
 * Shows REAL planetary transits using NASA JPL Horizons ephemeris data
 * Supports Tropical (default) and Sidereal (Lahiri) zodiac systems
 */

'use client';

import React from 'react';
import { 
  getAllPlanetEphemeris,
  getZodiacInfo,
  calculateSimplifiedStatus,
  type PlanetEphemerisData,
  type ZodiacSystem,
  type Planet,
  type ZodiacSign,
} from '@/src/lib/planetary';
import { SimplifiedStatusBadge } from './SimplifiedStatusBadge';
import { DignityDetailPanel } from './DignityDetailPanel';
import { CompactPracticeHint } from './CompactPracticeHint';
import { translations } from '@/src/lib/translations';

interface PlanetTransitCardProps {
  language?: 'en' | 'fr';
  onNavigate?: () => void;
}

// ──────────────────────────────────────────────────────────────
// Skeleton loader
// ──────────────────────────────────────────────────────────────
function PlanetTransitSkeleton() {
  return (
    <div className="relative rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-lg animate-in">
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div className="space-y-2">
          <div className="h-5 w-40 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
          <div className="h-3 w-48 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
        </div>
        <div className="flex gap-2">
          <div className="h-7 w-32 rounded-lg bg-slate-200 dark:bg-slate-700 animate-pulse" />
          <div className="h-7 w-16 rounded-lg bg-slate-200 dark:bg-slate-700 animate-pulse" />
        </div>
      </div>
      {/* Planet hero */}
      <div className="flex items-center gap-4 mb-5">
        <div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse" />
        <div className="space-y-2">
          <div className="h-7 w-28 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
          <div className="h-4 w-20 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
        </div>
      </div>
      {/* Zodiac box */}
      <div className="h-16 w-full rounded-lg bg-slate-200 dark:bg-slate-700 animate-pulse mb-4" />
      {/* Dots */}
      <div className="flex justify-center gap-1.5">
        {[1, 2, 3, 4, 5, 6, 7].map(i => (
          <div key={i} className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse" />
        ))}
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// Data source badge
// ──────────────────────────────────────────────────────────────
function DataSourceBadge({ source }: { source: 'ephemeris' | 'fallback' }) {
  const isLive = source === 'ephemeris';
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${
      isLive ? 'text-green-600 dark:text-green-400' : 'text-amber-600 dark:text-amber-400'
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

export function PlanetTransitCard({ 
  language = 'en',
  onNavigate
}: PlanetTransitCardProps) {
  const [transits, setTransits] = React.useState<PlanetEphemerisData[]>([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [showAll, setShowAll] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);
  const [zodiacSystem, setZodiacSystem] = React.useState<ZodiacSystem>('tropical');
  const [isLoading, setIsLoading] = React.useState(true);
  const [dataSource, setDataSource] = React.useState<'ephemeris' | 'fallback'>('ephemeris');
  const [lastUpdated, setLastUpdated] = React.useState<Date | null>(null);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [showDetailFor, setShowDetailFor] = React.useState<string | null>(null);
  const isDay = new Date().getHours() >= 6 && new Date().getHours() < 18;

  // Fetch real ephemeris data
  React.useEffect(() => {
    const fetchTransits = async () => {
      setIsLoading(true);
      try {
        const ephemeris = await getAllPlanetEphemeris(zodiacSystem);
        setTransits(ephemeris.planets);
        setDataSource(ephemeris.source);
        setLastUpdated(ephemeris.timestamp);
      } catch (error) {
        console.error('Failed to fetch ephemeris:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransits();
    const interval = setInterval(fetchTransits, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, [zodiacSystem]);

  // Smooth planet transition
  const goToIndex = React.useCallback((newIndex: number) => {
    if (newIndex === currentIndex) return;
    setShowDetailFor(null);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 150);
  }, [currentIndex]);

  // Auto-rotate through planets every 20 seconds
  React.useEffect(() => {
    if (showAll || isPaused || transits.length === 0) return;
    
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % transits.length);
        setIsTransitioning(false);
      }, 150);
    }, 20000);

    return () => clearInterval(interval);
  }, [showAll, isPaused, transits.length]);

  if (isLoading || transits.length === 0) {
    return <PlanetTransitSkeleton />;
  }

  const planetGradients: Record<string, string[]> = {
    sun: ['from-yellow-500', 'to-orange-500'],
    moon: ['from-slate-300', 'to-slate-500'],
    mercury: ['from-emerald-400', 'to-teal-500'],
    venus: ['from-pink-400', 'to-rose-500'],
    mars: ['from-red-500', 'to-orange-600'],
    jupiter: ['from-amber-400', 'to-yellow-600'],
    saturn: ['from-slate-400', 'to-gray-600'],
  };

  const currentTransit = transits[currentIndex];
  const gradient = planetGradients[currentTransit.planetKey] || planetGradients.sun;
  const zodiacInfo = getZodiacInfo(currentTransit.sign);
  const t = translations[language].planetary;

  // Count retrograde planets
  const retrogradeCount = transits.filter(t => t.isRetrograde).length;

  // Single planet view with rotation
  const renderSingleTransit = () => (
    <div 
      className="mb-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Planet */}
      <div className={`transition-all duration-300 ease-out ${isTransitioning ? 'opacity-0 translate-x-4 scale-95' : 'opacity-100 translate-x-0 scale-100'}`}>
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${gradient[0]} ${gradient[1]} flex items-center justify-center text-3xl shadow-lg ring-2 ring-white/30 dark:ring-slate-700/50`}>
            {currentTransit.planetSymbol}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {(t.planets as Record<string, string>)?.[currentTransit.planetName] || currentTransit.planetName}
              </span>
              <span className="text-base font-arabic text-slate-400 dark:text-slate-500">
                {(t.planetsAr as Record<string, string>)?.[currentTransit.planetName]}
              </span>
              {currentTransit.isRetrograde && (
                <span className="px-1.5 py-0.5 rounded text-xs font-semibold bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 border border-amber-300 dark:border-amber-500/30">
                  ℞ {language === 'fr' ? 'Rétrograde' : 'Retrograde'}
                </span>
              )}
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center justify-between">
              <span>
                {(t.elements as Record<string, string>)?.[currentTransit.element] || currentTransit.element.charAt(0).toUpperCase() + currentTransit.element.slice(1)}{' '}
                {t.planetTransit.planet}
              </span>
              <span className="font-arabic text-slate-400 dark:text-slate-500">{(t.elementsAr as Record<string, string>)?.[currentTransit.element]}</span>
            </div>
          </div>
        </div>

        {/* Transit Position: Zodiac Sign with Degree */}
        <div className="bg-white/70 dark:bg-purple-900/30 border border-purple-200/80 dark:border-purple-500/30 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-800/50 flex items-center justify-center text-2xl">
              {zodiacInfo.symbol}
            </div>
            <div className="flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-lg font-semibold text-purple-700 dark:text-purple-300">
                  {(t.zodiac as Record<string, string>)?.[currentTransit.sign] || currentTransit.sign.charAt(0).toUpperCase() + currentTransit.sign.slice(1)}
                </span>
                <span className="text-sm font-arabic text-purple-400 dark:text-purple-500">
                  {(t.zodiacAr as Record<string, string>)?.[currentTransit.sign]}
                </span>
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400 tabular-nums flex items-center justify-between gap-2">
                <span>
                  {currentTransit.signDegree}° {currentTransit.signMinute}′ · {(t.elements as Record<string, string>)?.[zodiacInfo.element] || zodiacInfo.element.charAt(0).toUpperCase() + zodiacInfo.element.slice(1)}{' '}
                  {t.planetTransit.sign}
                </span>
                <span className="font-arabic">{(t.elementsAr as Record<string, string>)?.[zodiacInfo.element]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Simplified Status Badge */}
        <div className="mt-3">
          <SimplifiedStatusBadge
            planet={currentTransit.planetName as Planet}
            sign={currentTransit.sign as ZodiacSign}
            degree={currentTransit.signDegree}
            isDay={isDay}
            isRetrograde={currentTransit.isRetrograde}
            language={language}
          />
        </div>

        {/* Compact Practice Hint */}
        {(() => {
          const status = calculateSimplifiedStatus(
            currentTransit.planetName as Planet,
            currentTransit.sign as ZodiacSign,
            currentTransit.signDegree,
            isDay,
            currentTransit.isRetrograde
          );
          return (
            <CompactPracticeHint
              tier={status.tier}
              planet={currentTransit.planetName as Planet}
              language={language}
              className="mt-3"
            />
          );
        })()}
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {transits.map((transit, idx) => (
          <button
            key={idx}
            onClick={() => goToIndex(idx)}
            className={`rounded-full transition-all duration-300 ${
              idx === currentIndex 
                ? 'bg-purple-500 dark:bg-purple-400 w-5 h-2' 
                : 'bg-slate-300 dark:bg-slate-600 hover:bg-purple-300 dark:hover:bg-purple-600 w-2 h-2'
            }`}
            aria-label={`${language === 'fr' ? 'Voir' : 'View'} ${transit.planetName}`}
          />
        ))}
      </div>
    </div>
  );

  // All planets grid view
  const renderAllTransits = () => (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4 animate-fade-in">
      {transits.map((transit) => {
        const grad = planetGradients[transit.planetKey] || planetGradients.sun;
        const zodiac = getZodiacInfo(transit.sign);
        
        return (
          <div 
            key={transit.planetKey}
            className={`bg-white/70 dark:bg-slate-800/50 border rounded-lg p-3 hover:shadow-md transition-all cursor-pointer ${
              showDetailFor === transit.planetKey
                ? 'border-purple-400 dark:border-purple-500/60 ring-1 ring-purple-300 dark:ring-purple-500/40 shadow-md scale-[1.02]'
                : 'border-slate-200/80 dark:border-slate-700 hover:scale-[1.02]'
            }`}
            onClick={() => setShowDetailFor(showDetailFor === transit.planetKey ? null : transit.planetKey)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setShowDetailFor(showDetailFor === transit.planetKey ? null : transit.planetKey); }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${grad[0]} ${grad[1]} flex items-center justify-center text-lg shadow-sm`}>
                {transit.planetSymbol}
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm truncate">
                  {(t.planets as Record<string, string>)?.[transit.planetName] || transit.planetName}
                </div>
                <div className="text-[10px] font-arabic text-slate-400 dark:text-slate-500 truncate">
                  {(t.planetsAr as Record<string, string>)?.[transit.planetName]}
                </div>
                <div className="text-[11px] text-slate-400 dark:text-slate-500 flex items-center justify-between gap-1">
                  <span className="flex items-center gap-1">
                    <span>{(t.elements as Record<string, string>)?.[transit.element] || transit.element.charAt(0).toUpperCase() + transit.element.slice(1)}</span>
                    {transit.isRetrograde && (
                      <span className="text-amber-600 dark:text-amber-400 font-bold" title={language === 'fr' ? 'Rétrograde' : 'Retrograde'}>℞</span>
                    )}
                  </span>
                  <span className="font-arabic">{(t.elementsAr as Record<string, string>)?.[transit.element]}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 rounded px-2 py-1.5">
              <span className="text-base">{zodiac.symbol}</span>
              <div className="min-w-0 flex-1 flex items-baseline justify-between gap-1">
                <span className="flex items-baseline gap-1">
                  <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                    {(t.zodiac as Record<string, string>)?.[transit.sign] || transit.sign.charAt(0).toUpperCase() + transit.sign.slice(1)}
                  </span>
                  <span className="text-xs text-slate-400 dark:text-slate-500 tabular-nums">
                    {transit.signDegree}°
                  </span>
                </span>
                <span className="text-[10px] font-arabic text-purple-400 dark:text-purple-500">
                  {(t.zodiacAr as Record<string, string>)?.[transit.sign]}
                </span>
              </div>
            </div>
            <div className="mt-1.5 flex items-center justify-between">
              <SimplifiedStatusBadge
                planet={transit.planetName as Planet}
                sign={transit.sign as ZodiacSign}
                degree={transit.signDegree}
                isDay={isDay}
                isRetrograde={transit.isRetrograde}
                language={language}
                compact
              />
              <span className={`text-[9px] font-medium ${
                showDetailFor === transit.planetKey
                  ? 'text-purple-600 dark:text-purple-400'
                  : 'text-slate-400 dark:text-slate-500'
              }`}>
                {showDetailFor === transit.planetKey ? '▲' : '▼'}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );

  // Find the transit for the selected detail view
  const detailTransit = showDetailFor ? transits.find(t => t.planetKey === showDetailFor) : null;

  return (
    <div className="relative rounded-xl border border-purple-200 dark:border-purple-500/30 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/40 dark:to-indigo-950/30 p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-0.5">
            {t.planetTransit.title}
          </h3>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span>{t.planetTransit.livePositions}</span>
            <span>·</span>
            <DataSourceBadge source={dataSource} />
            {retrogradeCount > 0 && (
              <>
                <span>·</span>
                <span className="text-amber-600 dark:text-amber-400 font-medium">
                  {retrogradeCount} ℞
                </span>
              </>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Zodiac System Toggle */}
          <div className="flex rounded-lg border border-purple-200 dark:border-purple-500/30 overflow-hidden text-xs">
            <button
              onClick={() => setZodiacSystem('tropical')}
              className={`px-2.5 py-1.5 transition-colors font-medium ${
                zodiacSystem === 'tropical'
                  ? 'bg-purple-200 dark:bg-purple-600 text-purple-800 dark:text-white'
                  : 'bg-white/60 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-purple-50 dark:hover:bg-purple-900/20'
              }`}
            >
              {t.planetTransit.tropical}
            </button>
            <button
              onClick={() => setZodiacSystem('sidereal')}
              className={`px-2.5 py-1.5 transition-colors font-medium ${
                zodiacSystem === 'sidereal'
                  ? 'bg-purple-200 dark:bg-purple-600 text-purple-800 dark:text-white'
                  : 'bg-white/60 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-purple-50 dark:hover:bg-purple-900/20'
              }`}
            >
              {t.planetTransit.sidereal}
            </button>
          </div>
          
          {/* See All Toggle */}
          <button
            onClick={() => { setShowAll(!showAll); setShowDetailFor(null); }}
            className={`text-xs px-3 py-1.5 rounded-lg transition-colors font-medium ${
              showAll 
                ? 'bg-purple-200 dark:bg-purple-500/30 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-500/50' 
                : 'text-slate-500 dark:text-slate-400 hover:bg-white/60 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700'
            }`}
          >
            {showAll 
              ? t.planetTransit.carousel
              : t.planetTransit.seeAll
            }
          </button>
        </div>
      </div>

      {/* Content */}
      {showAll ? renderAllTransits() : renderSingleTransit()}

      {/* Detail Panel (grid view — shown below grid when a planet is selected) */}
      {showAll && detailTransit && showDetailFor && (
        <div className="mb-4 animate-slide-down">
          <DignityDetailPanel
            planet={detailTransit.planetName as Planet}
            sign={detailTransit.sign as ZodiacSign}
            degree={detailTransit.signDegree}
            minute={detailTransit.signMinute}
            isDay={isDay}
            isRetrograde={detailTransit.isRetrograde}
            language={language}
            onClose={() => setShowDetailFor(null)}
          />
        </div>
      )}

      {/* Last Updated */}
      {lastUpdated && (
        <div className="text-[11px] text-center text-slate-400 dark:text-slate-500 mb-3 tabular-nums">
          {t.planetTransit.updated}: {lastUpdated.toLocaleTimeString(language, { hour: '2-digit', minute: '2-digit' })}
        </div>
      )}

      {/* View Details — toggles dignity detail panel for the active planet (carousel only, grid has its own inline panel) */}
      {!showAll && transits.length > 0 && (() => {
        const activePlanet = showDetailFor
          ? transits.find(t => t.planetKey === showDetailFor)
          : transits[currentIndex];
        if (!activePlanet) return null;
        const isOpen = showDetailFor === activePlanet.planetKey;
        return (
          <>
            <button
              onClick={() => setShowDetailFor(isOpen ? null : activePlanet.planetKey)}
              className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors group ${
                isOpen
                  ? 'bg-purple-200/60 dark:bg-purple-500/20 border-purple-300 dark:border-purple-500/50'
                  : 'bg-purple-100/60 dark:bg-purple-500/10 hover:bg-purple-200/60 dark:hover:bg-purple-500/20 border-purple-200 dark:border-purple-500/30'
              }`}
            >
              <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                {isOpen
                  ? (t.planetTransit.hideDetails || 'Hide Details')
                  : (t.planetTransit.viewDetails || 'View Details')}
              </span>
              <span className="text-purple-600 dark:text-purple-400 transition-transform">
                {isOpen ? '▲' : '▼'}
              </span>
            </button>
            {isOpen && (
              <div className="mt-3 animate-slide-down">
                <DignityDetailPanel
                  planet={activePlanet.planetName as Planet}
                  sign={activePlanet.sign as ZodiacSign}
                  degree={activePlanet.signDegree}
                  minute={activePlanet.signMinute}
                  isDay={isDay}
                  isRetrograde={activePlanet.isRetrograde}
                  language={language}
                  onClose={() => setShowDetailFor(null)}
                />
              </div>
            )}
          </>
        );
      })()}
    </div>
  );
}
