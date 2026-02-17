/**
 * Planetary Hour Card Component
 * Shows current planetary hour, alignment status, countdown + progress bar
 * Includes live planetary position from NASA JPL Horizons
 */

'use client';

import React from 'react';
import { 
  getPlanetaryHourDataForNow, 
  getAllPlanetaryHoursForToday,
  calculateHarmonyScore,
  getIlmNujumBadge,
  formatCountdownShort,
  getAllPlanetEphemeris,
  type PlanetaryHourData,
  type PlanetaryHour,
  type PlanetEphemerisData,
  type Element,
  type Planet,
  type ZodiacSign,
} from '@/src/lib/planetary';
import { IlmNujumBadge } from './IlmNujumBadge';
import { EnhancedStatusBadge } from './EnhancedStatusBadge';
import { getUserLocation, loadLocation } from '@/src/utils/location';
import { translations } from '@/src/lib/translations';

interface PlanetaryHourCardProps {
  userElement?: Element;
  latitude?: number;
  longitude?: number;
  language?: 'en' | 'fr';
}

// ──────────────────────────────────────────────────────────────
// Skeleton loader
// ──────────────────────────────────────────────────────────────
function PlanetaryHourSkeleton() {
  return (
    <div className="relative rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-lg animate-in">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="space-y-2">
          <div className="h-5 w-32 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
          <div className="h-4 w-48 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
          <div className="h-3 w-20 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
        </div>
        <div className="h-8 w-24 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse" />
      </div>
      {/* Progress bar */}
      <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-700 mb-5 animate-pulse" />
      {/* Current hour */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse" />
          <div className="space-y-1.5">
            <div className="h-6 w-24 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
            <div className="h-4 w-32 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
          </div>
        </div>
        <div className="space-y-1.5 text-right">
          <div className="h-7 w-16 rounded bg-slate-200 dark:bg-slate-700 animate-pulse ml-auto" />
          <div className="h-3 w-14 rounded bg-slate-200 dark:bg-slate-700 animate-pulse ml-auto" />
        </div>
      </div>
      {/* Position box */}
      <div className="h-10 w-full rounded-lg bg-slate-200 dark:bg-slate-700 animate-pulse mb-5" />
      {/* Next hour */}
      <div className="h-4 w-20 rounded bg-slate-200 dark:bg-slate-700 animate-pulse mb-2" />
      <div className="h-14 w-full rounded-lg bg-slate-200 dark:bg-slate-700 animate-pulse" />
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// Data source badge (consistent across cards)
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
      {isLive ? 'NASA' : 'Approx'}
    </span>
  );
}

export function PlanetaryHourCard({ 
  userElement, 
  latitude: propLatitude,
  longitude: propLongitude,
  language = 'en' 
}: PlanetaryHourCardProps) {
  const [planetaryData, setPlanetaryData] = React.useState<PlanetaryHourData | null>(null);
  const [countdown, setCountdown] = React.useState(0);
  const [totalDuration, setTotalDuration] = React.useState(0);
  const [livePosition, setLivePosition] = React.useState<PlanetEphemerisData | null>(null);
  const [dataSource, setDataSource] = React.useState<'ephemeris' | 'fallback'>('fallback');
  const [locationName, setLocationName] = React.useState<string>('');
  const [showAllHours, setShowAllHours] = React.useState(false);
  const [allHours, setAllHours] = React.useState<{ hours: PlanetaryHour[]; currentHourIndex: number; sunrise: Date; sunset: Date } | null>(null);
  
  const [coords, setCoords] = React.useState<{ lat: number; lon: number } | null>(
    propLatitude !== undefined && propLongitude !== undefined 
      ? { lat: propLatitude, lon: propLongitude }
      : null
  );

  // Fetch user location if not provided via props
  React.useEffect(() => {
    if (propLatitude !== undefined && propLongitude !== undefined) {
      setCoords({ lat: propLatitude, lon: propLongitude });
      return;
    }

    const cached = loadLocation();
    if (cached) {
      setCoords({ lat: cached.latitude, lon: cached.longitude });
      setLocationName(cached.cityName || '');
    }

    getUserLocation().then((loc) => {
      setCoords({ lat: loc.latitude, lon: loc.longitude });
      setLocationName(loc.cityName || '');
    }).catch((err) => {
      console.error('[PlanetaryHourCard] Location error:', err);
      setCoords({ lat: 21.4225, lon: 39.8262 });
      setLocationName(language === 'fr' ? 'La Mecque (Défaut)' : 'Makkah (Default)');
    });
  }, [propLatitude, propLongitude, language]);

  // Update planetary hour data
  const updatePlanetaryHour = React.useCallback(async () => {
    if (!coords) return;
    
    const now = new Date();
    const data = await getPlanetaryHourDataForNow(coords.lat, coords.lon, now);
    if (data) {
      setPlanetaryData(data);
      setCountdown(data.countdownSeconds);
      // Calculate total hour duration for progress bar
      const duration = Math.round((data.currentHour.endTime.getTime() - data.currentHour.startTime.getTime()) / 1000);
      setTotalDuration(duration);
      
      try {
        const ephemeris = await getAllPlanetEphemeris('tropical');
        const planetKey = data.currentHour.planet.toLowerCase();
        const position = ephemeris.planets.find(p => p.planetKey === planetKey);
        if (position) {
          setLivePosition(position);
          setDataSource(ephemeris.source);
        }
      } catch (error) {
        console.error('[PlanetaryHourCard] Failed to fetch live position:', error);
      }
    }
  }, [coords]);

  // Fetch all hours for "See All" view
  const fetchAllHours = React.useCallback(async () => {
    if (!coords) return;
    const now = new Date();
    const data = await getAllPlanetaryHoursForToday(coords.lat, coords.lon, now);
    if (data) setAllHours(data);
  }, [coords]);

  React.useEffect(() => {
    if (showAllHours && !allHours) fetchAllHours();
  }, [showAllHours, allHours, fetchAllHours]);

  React.useEffect(() => {
    if (!coords) return;
    updatePlanetaryHour();
    const interval = setInterval(() => {
      updatePlanetaryHour();
      // Keep allHours in sync so currentHourIndex stays accurate
      if (showAllHours) fetchAllHours();
    }, 60000);
    return () => clearInterval(interval);
  }, [updatePlanetaryHour, coords, showAllHours, fetchAllHours]);

  // Countdown timer — every second
  React.useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        const newValue = prev - 1;
        if (newValue <= 0) {
          updatePlanetaryHour();
          return 0;
        }
        return newValue;
      });
    }, 1000);
    return () => clearInterval(countdownInterval);
  }, [updatePlanetaryHour]);

  // ── Loading State ──
  if (!planetaryData) return <PlanetaryHourSkeleton />;

  const { currentHour, nextHour } = planetaryData;
  const currentElement = currentHour.planetInfo.element;
  
  const harmonyScore = userElement ? calculateHarmonyScore(userElement, currentElement) : 50;
  const badge = getIlmNujumBadge(harmonyScore);
  const t = translations[language].planetary;

  // Progress: percentage of hour elapsed
  const progressPercent = totalDuration > 0 ? Math.max(0, Math.min(100, ((totalDuration - countdown) / totalDuration) * 100)) : 0;

  const elementColors: Record<Element, { bg: string; border: string; text: string; cardBg: string; progressBg: string }> = {
    fire: { bg: 'bg-red-100 dark:bg-red-900/20', border: 'border-red-200 dark:border-red-500/30', text: 'text-red-700 dark:text-red-400', cardBg: 'bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/40 dark:to-orange-950/30', progressBg: 'bg-gradient-to-r from-red-400 to-orange-400' },
    water: { bg: 'bg-blue-100 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-500/30', text: 'text-blue-700 dark:text-blue-400', cardBg: 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/30', progressBg: 'bg-gradient-to-r from-blue-400 to-cyan-400' },
    air: { bg: 'bg-cyan-100 dark:bg-cyan-900/20', border: 'border-cyan-200 dark:border-cyan-500/30', text: 'text-cyan-700 dark:text-cyan-400', cardBg: 'bg-gradient-to-br from-cyan-50 to-sky-50 dark:from-cyan-950/40 dark:to-sky-950/30', progressBg: 'bg-gradient-to-r from-cyan-400 to-sky-400' },
    earth: { bg: 'bg-green-100 dark:bg-green-900/20', border: 'border-green-200 dark:border-green-500/30', text: 'text-green-700 dark:text-green-400', cardBg: 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/40 dark:to-emerald-950/30', progressBg: 'bg-gradient-to-r from-green-400 to-emerald-400' },
  };

  const currentColors = elementColors[currentElement];
  const nextColors = elementColors[nextHour.planetInfo.element];

  return (
    <div className={`relative rounded-xl border ${currentColors.border} ${currentColors.cardBg} p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-in`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-0.5">
            {t.planetaryHour.title}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {t.planetaryHour.subtitle}
          </p>
          {locationName && (
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 flex items-center gap-1">
              <span>📍</span> {locationName}
            </p>
          )}
        </div>
        {livePosition ? (
          <EnhancedStatusBadge
            planet={currentHour.planet as Planet}
            sign={livePosition.sign as ZodiacSign}
            degree={livePosition.signDegree}
            isDay={currentHour.isDaytime}
            isRetrograde={livePosition.isRetrograde}
            language={language}
          />
        ) : (
          badge && <IlmNujumBadge badge={badge} language={language} />
        )}
      </div>

      {/* ── Progress Bar ── */}
      <div className="mb-5" role="progressbar" aria-valuenow={Math.round(progressPercent)} aria-valuemin={0} aria-valuemax={100}>
        <div className="h-1.5 w-full rounded-full bg-slate-200/80 dark:bg-slate-700/50 overflow-hidden">
          <div
            className={`h-full rounded-full ${currentColors.progressBg} transition-all duration-1000 ease-linear`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Current Hour */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-inner ${currentColors.bg} ${currentColors.border} border`}>
              {currentHour.planetInfo.symbol}
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className={`text-xl font-bold ${currentColors.text}`}>
                  {(t.planets as Record<string, string>)?.[currentHour.planet] || currentHour.planet}
                </span>
                <span className="text-sm font-arabic text-slate-400 dark:text-slate-500">
                  {(t.planetsAr as Record<string, string>)?.[currentHour.planet]}
                </span>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                {currentHour.isDaytime ? t.planetaryHour.day : t.planetaryHour.night} · {t.planetaryHour.hour} {currentHour.hourNumber}
              </div>
              <div className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                {currentHour.startTime.toLocaleTimeString(language, { hour: '2-digit', minute: '2-digit' })} → {currentHour.endTime.toLocaleTimeString(language, { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
          <div className="text-right" role="timer" aria-live="polite" aria-label={language === 'fr' ? 'Temps restant' : 'Time remaining'}>
            <div className={`text-2xl font-mono font-bold tabular-nums ${currentColors.text}`}>
              {formatCountdownShort(countdown)}
            </div>
            <div className="text-xs text-slate-400 dark:text-slate-500">
              {t.planetaryHour.remaining}
            </div>
          </div>
        </div>

        {/* Live Position from NASA */}
        {livePosition && (
          <div className="mt-3 p-2.5 rounded-lg bg-white/60 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg">{livePosition.zodiacSymbol}</span>
                <div className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                  <span>
                    {(t.zodiac as Record<string, string>)?.[livePosition.sign] || livePosition.sign.charAt(0).toUpperCase() + livePosition.sign.slice(1)}{' '}
                    <span className="font-arabic text-slate-400 dark:text-slate-500">{(t.zodiacAr as Record<string, string>)?.[livePosition.sign]}</span>{' '}
                    {livePosition.signDegree}°
                  </span>
                  {livePosition.isRetrograde && (
                    <span className="px-1.5 py-0.5 rounded text-xs font-medium bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400">
                      ℞
                    </span>
                  )}
                </div>
              </div>
              <DataSourceBadge source={dataSource} />
            </div>
          </div>
        )}

        {/* Element vs User Element */}
        {userElement && (
          <div className="flex items-center gap-4 mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <div className="flex-1">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                {t.planetaryHour.yourElement}
              </div>
              <div className={`font-medium ${elementColors[userElement].text}`}>
                {(t.elements as Record<string, string>)?.[userElement] || userElement.charAt(0).toUpperCase() + userElement.slice(1)}
              </div>
            </div>
            <div className="text-slate-400 dark:text-slate-500">⚡</div>
            <div className="flex-1">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                {t.planetaryHour.hourElement}
              </div>
              <div className={`font-medium ${currentColors.text}`}>
                {(t.elements as Record<string, string>)?.[currentElement] || currentElement.charAt(0).toUpperCase() + currentElement.slice(1)}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Next Planetary Hour */}
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
          {t.planetaryHour.nextHour}
        </h4>
        <div className={`flex items-center gap-3 p-3 rounded-lg border ${nextColors.border} ${nextColors.bg}`}>
          <div className={`text-2xl ${nextColors.text}`}>
            {nextHour.planetInfo.symbol}
          </div>
          <div className="flex-1">
            <div className="flex items-baseline gap-1.5">
              <span className={`font-semibold ${nextColors.text}`}>
                {(t.planets as Record<string, string>)?.[nextHour.planet] || nextHour.planet}
              </span>
              <span className="text-xs font-arabic text-slate-400 dark:text-slate-500">
                {(t.planetsAr as Record<string, string>)?.[nextHour.planet]}
              </span>
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400">
              {(t.elements as Record<string, string>)?.[nextHour.planetInfo.element] || nextHour.planetInfo.element.charAt(0).toUpperCase() + nextHour.planetInfo.element.slice(1)}{' '}
              <span className="font-arabic text-slate-400 dark:text-slate-500">{(t.elementsAr as Record<string, string>)?.[nextHour.planetInfo.element]}</span> · {' '}
              {language === 'fr' ? 'Début' : 'Starts'}{' '}
              {new Date(nextHour.startTime).toLocaleTimeString(language, { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </div>
          </div>
        </div>
      </div>

      {/* See All Hours Button */}
      <button
        onClick={() => {
          if (!showAllHours && !allHours) fetchAllHours();
          setShowAllHours(!showAllHours);
        }}
        className="w-full mt-4 py-2.5 px-4 text-sm font-medium text-slate-600 dark:text-slate-300 
                   bg-white/60 dark:bg-slate-700/40 hover:bg-white dark:hover:bg-slate-700/60 
                   border border-slate-200 dark:border-slate-700
                   rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        <span>{t.planetaryHour.seeAllHours}</span>
        <span className={`transform transition-transform duration-200 text-xs ${showAllHours ? 'rotate-180' : ''}`}>▼</span>
      </button>

      {/* All Hours Panel */}
      {showAllHours && (
        <div className="mt-4 border-t border-slate-200 dark:border-slate-700 pt-4 animate-slide-down overflow-visible">
          {allHours && allHours.hours && allHours.hours.length > 0 ? (
            <div className="space-y-5">
              {/* Day Hours */}
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="text-base">☀️</span>
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                    {t.planetaryHour.dayHours}
                  </h5>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 tabular-nums">
                    {allHours.sunrise.toLocaleTimeString(language, { hour: '2-digit', minute: '2-digit' })} → {allHours.sunset.toLocaleTimeString(language, { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {allHours.hours.filter(h => h.isDaytime).map((hour, idx) => {
                    const nowMs = Date.now();
                    const isCurrent = nowMs >= hour.startTime.getTime() && nowMs < hour.endTime.getTime();
                    return (
                      <div 
                        key={`day-${idx}`}
                        className={`relative p-1.5 rounded-lg border text-center transition-all ${
                          isCurrent
                            ? 'border-amber-400 bg-gradient-to-b from-amber-100 to-amber-200 dark:from-amber-800/50 dark:to-amber-900/40 ring-2 ring-amber-400/60 shadow-md shadow-amber-200/50 dark:shadow-amber-900/30 scale-[1.03]'
                            : 'border-slate-200/80 dark:border-slate-700 bg-white/50 dark:bg-slate-800/40'
                        }`}
                      >
                        {isCurrent && (
                          <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 text-[7px] font-bold uppercase tracking-wider bg-amber-500 text-white px-1.5 py-px rounded-full leading-none shadow-sm">
                            {language === 'fr' ? 'actuel' : 'now'}
                          </span>
                        )}
                        <div className="flex items-center justify-center gap-0.5">
                          <span className={`text-sm leading-none ${isCurrent ? 'drop-shadow-sm' : ''}`}>{hour.planetInfo.symbol}</span>
                          {isCurrent && <span className="text-[8px] text-amber-600 dark:text-amber-400 animate-pulse-live">●</span>}
                        </div>
                        <div className={`text-[10px] font-semibold leading-tight mt-0.5 ${isCurrent ? 'text-amber-800 dark:text-amber-200' : 'text-slate-700 dark:text-slate-300'}`}>
                          {(t.planets as Record<string, string>)?.[hour.planet] || hour.planet}
                        </div>
                        <div className={`text-[8px] font-arabic leading-tight ${isCurrent ? 'text-amber-600/70 dark:text-amber-300/60' : 'text-slate-400 dark:text-slate-500'}`}>
                          {(t.planetsAr as Record<string, string>)?.[hour.planet]}
                        </div>
                        <div className={`text-[9px] tabular-nums leading-tight ${isCurrent ? 'text-amber-600 dark:text-amber-400 font-medium' : 'text-slate-400 dark:text-slate-500'}`}>
                          {hour.startTime.toLocaleTimeString(language, { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Night Hours */}
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="text-base">🌙</span>
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                    {t.planetaryHour.nightHours}
                  </h5>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 tabular-nums">
                    {allHours.sunset.toLocaleTimeString(language, { hour: '2-digit', minute: '2-digit' })} → {t.planetaryHour.sunrise}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {allHours.hours.filter(h => !h.isDaytime).map((hour, idx) => {
                    const nowMs = Date.now();
                    const isCurrent = nowMs >= hour.startTime.getTime() && nowMs < hour.endTime.getTime();
                    return (
                      <div 
                        key={`night-${idx}`}
                        className={`relative p-1.5 rounded-lg border text-center transition-all ${
                          isCurrent
                            ? 'border-indigo-400 bg-gradient-to-b from-indigo-100 to-indigo-200 dark:from-indigo-800/50 dark:to-indigo-900/40 ring-2 ring-indigo-400/60 shadow-md shadow-indigo-200/50 dark:shadow-indigo-900/30 scale-[1.03]'
                            : 'border-slate-200/80 dark:border-slate-700 bg-white/50 dark:bg-slate-800/40'
                        }`}
                      >
                        {isCurrent && (
                          <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 text-[7px] font-bold uppercase tracking-wider bg-indigo-500 text-white px-1.5 py-px rounded-full leading-none shadow-sm">
                            {language === 'fr' ? 'actuel' : 'now'}
                          </span>
                        )}
                        <div className="flex items-center justify-center gap-0.5">
                          <span className={`text-sm leading-none ${isCurrent ? 'drop-shadow-sm' : ''}`}>{hour.planetInfo.symbol}</span>
                          {isCurrent && <span className="text-[8px] text-indigo-600 dark:text-indigo-400 animate-pulse-live">●</span>}
                        </div>
                        <div className={`text-[10px] font-semibold leading-tight mt-0.5 ${isCurrent ? 'text-indigo-800 dark:text-indigo-200' : 'text-slate-700 dark:text-slate-300'}`}>
                          {(t.planets as Record<string, string>)?.[hour.planet] || hour.planet}
                        </div>
                        <div className={`text-[8px] font-arabic leading-tight ${isCurrent ? 'text-indigo-600/70 dark:text-indigo-300/60' : 'text-slate-400 dark:text-slate-500'}`}>
                          {(t.planetsAr as Record<string, string>)?.[hour.planet]}
                        </div>
                        <div className={`text-[9px] tabular-nums leading-tight ${isCurrent ? 'text-indigo-600 dark:text-indigo-400 font-medium' : 'text-slate-400 dark:text-slate-500'}`}>
                          {hour.startTime.toLocaleTimeString(language, { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2 py-4 text-slate-500">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
              <span className="text-sm">{t.planetaryHour.loading}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
