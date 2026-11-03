/**
 * ========================================
 * PRAYER TIME INTEGRATION COMPONENT
 * ========================================
 * 
 * Displays current Islamic prayer time status with:
 * - Current/next prayer information
 * - Beautiful countdown display
 * - Spiritual guidance for each prayer
 * - Prayer-planetary hour synergy analysis
 * - Special prayer time notifications (Tahajjud, Duha, Ishraq)
 * 
 * Design: Gradient card with Islamic geometric patterns
 * Bilingual: EN/FR support
 */

'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import {
  getCurrentPrayerPeriod,
  getAllPrayerTimesInfo,
  getSpecialPrayerTime,
  getPrayerPlanetarySynergy,
  formatPrayerTime,
  getPrayerEmoji,
  DEFAULT_COORDINATES,
  type CurrentPrayerPeriod,
  type PrayerTimeInfo,
} from '../../../lib/prayerTimes';

interface PrayerTimeIntegrationProps {
  currentPlanet?: string; // For synergy analysis
  userCoordinates?: { latitude: number; longitude: number };
}

export default function PrayerTimeIntegration({
  currentPlanet,
  userCoordinates,
}: PrayerTimeIntegrationProps) {
  const { language } = useLanguage();
  const isFr = language === 'fr';

  const [currentTime, setCurrentTime] = useState(new Date());
  const [prayerPeriod, setPrayerPeriod] = useState<CurrentPrayerPeriod | null>(null);
  const [allPrayers, setAllPrayers] = useState<PrayerTimeInfo[]>([]);
  const [specialTime, setSpecialTime] = useState<ReturnType<typeof getSpecialPrayerTime>>(null);
  const [showAllPrayers, setShowAllPrayers] = useState(false);

  // Convert user coordinates to Adhan Coordinates
  const coordinates = userCoordinates
    ? { latitude: userCoordinates.latitude, longitude: userCoordinates.longitude }
    : DEFAULT_COORDINATES;

  // Update every minute
  useEffect(() => {
    const updatePrayerTimes = () => {
      const now = new Date();
      setCurrentTime(now);
      
      try {
        const period = getCurrentPrayerPeriod(now, coordinates as any);
        setPrayerPeriod(period);

        const prayers = getAllPrayerTimesInfo(now, coordinates as any);
        setAllPrayers(prayers);

        const special = getSpecialPrayerTime(now, coordinates as any);
        setSpecialTime(special);
      } catch (error) {
        console.error('Error calculating prayer times:', error);
      }
    };

    updatePrayerTimes();
    const interval = setInterval(updatePrayerTimes, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [userCoordinates]);

  if (!prayerPeriod) {
    return (
      <div className=" rounded-xl p-6 border border-emerald-200 dark:border-emerald-800 bg-white/60 dark:bg-slate-800/40">
        <div className="text-center text-gray-600 dark:text-gray-400">
          {isFr ? 'Calcul des heures de prière...' : 'Calculating prayer times...'}
        </div>
      </div>
    );
  }

  // Calculate synergy if current planet is provided
  const synergy = currentPlanet && prayerPeriod.current !== 'Between Prayers'
    ? getPrayerPlanetarySynergy(prayerPeriod.current as any, currentPlanet)
    : null;

  return (
    <div className="space-y-4">
      {/* Special Time Alert */}
      {specialTime && (
        <div className=" rounded-xl p-4 border border-amber-300 dark:border-amber-700 shadow-sm bg-white/60 dark:bg-slate-800/40">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{getPrayerEmoji(specialTime.name)}</span>
            <div>
              <div className="font-bold text-amber-900 dark:text-amber-100">
                {isFr ? '✨ Temps Spécial de Prière' : '✨ Special Prayer Time'}
              </div>
              <div className="text-sm font-semibold text-amber-800 dark:text-amber-200">
                {specialTime.name}
              </div>
            </div>
          </div>
          <p className="text-sm text-amber-900 dark:text-amber-100 leading-relaxed">
            {isFr ? specialTime.guidance.fr : specialTime.guidance.en}
          </p>
        </div>
      )}

      {/* Main Prayer Time Card */}
      <div className="relative rounded-xl p-6 border border-emerald-200 dark:border-emerald-800 shadow-sm overflow-hidden bg-white/60 dark:bg-slate-800/40">
        {/* Islamic Pattern Background */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="islamic-pattern-prayer" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="currentColor" />
              <path d="M 5 10 L 10 5 L 15 10 L 10 15 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#islamic-pattern-prayer)" />
          </svg>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🕌</span>
              <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-100">
                {isFr ? 'Heures de Prière' : 'Prayer Times'}
              </h3>
            </div>
            <button
              onClick={() => setShowAllPrayers(!showAllPrayers)}
              className="text-xs px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded-full hover:bg-emerald-200 dark:hover:bg-emerald-800 transition-colors"
            >
              {showAllPrayers ? (isFr ? 'Masquer' : 'Hide') : (isFr ? 'Voir tout' : 'View All')}
            </button>
          </div>

          {/* Current Period */}
          <div className="mb-4 p-4 bg-white/50 dark:bg-black/20 rounded-xl">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              {isFr ? 'Période actuelle' : 'Current Period'}
            </div>
            <div className="text-2xl font-bold text-emerald-800 dark:text-emerald-200 mb-3 flex items-center gap-2">
              {prayerPeriod.current !== 'Between Prayers' && (
                <span>{getPrayerEmoji(prayerPeriod.current as any)}</span>
              )}
              {prayerPeriod.current === 'Between Prayers' 
                ? (isFr ? 'Entre les Prières' : 'Between Prayers')
                : prayerPeriod.current
              }
            </div>

            {/* Spiritual Guidance */}
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic">
              {isFr ? prayerPeriod.spiritualGuidance.fr : prayerPeriod.spiritualGuidance.en}
            </p>
          </div>

          {/* Next Prayer */}
          <div className="mb-4 p-4 rounded-xl bg-white/60 dark:bg-slate-800/40">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {isFr ? 'Prochaine prière' : 'Next Prayer'}
              </div>
              <div className="text-xs bg-white/70 dark:bg-black/30 px-2 py-1 rounded text-gray-900 dark:text-white font-semibold">
                {formatPrayerTime(prayerPeriod.nextTime)}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">{getPrayerEmoji(prayerPeriod.next as any)}</span>
              <div>
                <div className="text-xl font-bold text-indigo-900 dark:text-indigo-100">
                  {prayerPeriod.next}
                </div>
                <div className="text-sm text-indigo-700 dark:text-indigo-300">
                  {isFr ? 'dans' : 'in'} <span className="font-semibold">{prayerPeriod.timeUntil}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Planetary Synergy */}
          {synergy && (
            <div className={`p-3 rounded-xl border mb-4 ${
              synergy.synergy === 'high'
                ? 'bg-green-50 dark:bg-green-950/30 border-green-300 dark:border-green-700'
                : 'bg-indigo-50 dark:bg-indigo-950/30 border-slate-200 dark:border-slate-700'
            }`}>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{synergy.synergy === 'high' ? '⚡' : '✨'}</span>
                <div className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                  {isFr ? 'Synergie Planétaire' : 'Planetary Synergy'}
                </div>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {isFr ? synergy.explanation.fr : synergy.explanation.en}
              </p>
            </div>
          )}

          {/* All Prayer Times (Expandable) */}
          {showAllPrayers && (
            <div className="mt-4 pt-4 border-t border-emerald-200 dark:border-emerald-800">
              <div className="space-y-2">
                {allPrayers.map((prayer) => (
                  <div
                    key={prayer.name}
                    className={`flex items-center justify-between p-2 rounded-xl transition-colors ${
                      prayer.isCurrent
                        ? 'bg-emerald-200 dark:bg-emerald-800'
                        : prayer.isNext
                        ? 'bg-indigo-100 dark:bg-indigo-900/50'
                        : prayer.isPassed
                        ? 'bg-gray-100 dark:bg-gray-800/50 opacity-60'
                        : 'bg-white/30 dark:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{getPrayerEmoji(prayer.name)}</span>
                      <span className={`font-medium ${
                        prayer.isCurrent || prayer.isNext
                          ? 'text-gray-900 dark:text-white'
                          : 'text-gray-600 dark:text-gray-400'
                      }`}>
                        {prayer.name}
                      </span>
                      {prayer.isCurrent && (
                        <span className="text-xs bg-emerald-600 text-white px-2 py-0.5 rounded-full">
                          {isFr ? 'Actuel' : 'Now'}
                        </span>
                      )}
                      {prayer.isNext && (
                        <span className="text-xs bg-indigo-600 text-white px-2 py-0.5 rounded-full">
                          {isFr ? 'Prochain' : 'Next'}
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {formatPrayerTime(prayer.time)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Location Note */}
          <div className="mt-4 text-xs text-center text-gray-500 dark:text-gray-500">
            {isFr ? '📍 Calculs basés sur' : '📍 Calculations based on'}{' '}
            {userCoordinates ? (isFr ? 'votre position' : 'your location') : 'Makkah'}
          </div>
        </div>
      </div>
    </div>
  );
}
