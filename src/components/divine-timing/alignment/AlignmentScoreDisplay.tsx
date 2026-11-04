/**
 * ========================================
 * ALIGNMENT SCORE DISPLAY
 * ========================================
 * 
 * Visual dashboard showing personal alignment with current moment:
 * - Overall alignment score (0-100)
 * - Breakdown by category (elemental, planetary, numerical, sacred)
 * - Recommendations for current hour
 * - Best hours for the day
 * 
 * Design: Radial progress visualization with detailed breakdowns
 * Bilingual: EN/FR support
 */

'use client';

import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import {
  calculateAlignmentScore,
  getOptimalHours,
  getElementEmoji,
  getAlignmentQuality,
  type PersonalHadad,
  type AlignmentScore,
} from '../../../lib/hadadAlignment';

interface AlignmentScoreDisplayProps {
  personalHadad: PersonalHadad;
  currentPlanet: string;
  currentPlanetElement?: string;
}

export default function AlignmentScoreDisplay({
  personalHadad,
  currentPlanet,
}: AlignmentScoreDisplayProps) {
  const { language } = useLanguage();
  const isFr = language === 'fr';

  const alignment = calculateAlignmentScore(personalHadad, currentPlanet);
  const quality = getAlignmentQuality(alignment.overall);
  const optimalHours = getOptimalHours(personalHadad);
  const topThreeHours = optimalHours.slice(0, 3);

  // Calculate percentage for visual display
  const percentage = alignment.overall;
  const circumference = 2 * Math.PI * 45; // r=45
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="space-y-4">
      {/* Main Alignment Card */}
      <div className="relative rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden bg-white/60 dark:bg-slate-800/40">
        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="alignment-pattern" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
              <circle cx="7.5" cy="7.5" r="1" fill="currentColor" />
              <path d="M 0 7.5 L 7.5 0 L 15 7.5 L 7.5 15 Z" fill="none" stroke="currentColor" strokeWidth="0.3" />
            </pattern>
            <rect width="100" height="100" fill="url(#alignment-pattern)" />
          </svg>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">⚡</span>
            <h3 className="text-lg font-bold text-indigo-900 dark:text-indigo-100">
              {isFr ? 'Alignement Personnel' : 'Personal Alignment'}
            </h3>
          </div>

          {/* Radial Score Display */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
            {/* Circular Progress */}
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90">
                {/* Background circle */}
                <circle
                  cx="64"
                  cy="64"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-gray-200 dark:text-gray-700"
                />
                {/* Progress circle */}
                <circle
                  cx="64"
                  cy="64"
                  r="45"
                  stroke={quality.color}
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-3xl font-bold" style={{ color: quality.color }}>
                  {Math.round(percentage)}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">/ 100</div>
              </div>
            </div>

            {/* Quality Label & Interpretation */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{quality.emoji}</span>
                <div 
                  className="text-xl font-bold"
                  style={{ color: quality.color }}
                >
                  {isFr ? quality.label.fr : quality.label.en}
                </div>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {isFr ? alignment.interpretation.fr : alignment.interpretation.en}
              </p>
            </div>
          </div>

          {/* Breakdown Bars */}
          <div className="space-y-3 mb-6">
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400 mb-2">
              {isFr ? 'Détails de l\'Alignement' : 'Alignment Breakdown'}
            </div>

            {/* Elemental Harmony */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm">{getElementEmoji(personalHadad.element)}</span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    {isFr ? 'Harmonie Élémentaire' : 'Elemental Harmony'}
                  </span>
                </div>
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                  {alignment.breakdown.elementalHarmony}/30
                </span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full transition-all duration-500 bg-white/60 dark:bg-slate-800/40"
                  style={{ width: `${(alignment.breakdown.elementalHarmony / 30) * 100}%` }}
                />
              </div>
            </div>

            {/* Planetary Resonance */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm">🪐</span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    {isFr ? 'Résonance Planétaire' : 'Planetary Resonance'}
                  </span>
                </div>
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                  {alignment.breakdown.planetaryResonance}/30
                </span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full transition-all duration-500 bg-white/60 dark:bg-slate-800/40"
                  style={{ width: `${(alignment.breakdown.planetaryResonance / 30) * 100}%` }}
                />
              </div>
            </div>

            {/* Numerical Alignment */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm">🔢</span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    {isFr ? 'Alignement Numérique' : 'Numerical Alignment'}
                  </span>
                </div>
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                  {alignment.breakdown.numericalAlignment}/20
                </span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full transition-all duration-500 bg-white/60 dark:bg-slate-800/40"
                  style={{ width: `${(alignment.breakdown.numericalAlignment / 20) * 100}%` }}
                />
              </div>
            </div>

            {/* Sacred Connection */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm">✨</span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    {isFr ? 'Connexion Sacrée' : 'Sacred Connection'}
                  </span>
                </div>
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                  {alignment.breakdown.sacredConnection}/20
                </span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full transition-all duration-500 bg-white/60 dark:bg-slate-800/40"
                  style={{ width: `${(alignment.breakdown.sacredConnection / 20) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="p-4 bg-white/50 dark:bg-black/20 rounded-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">💡</span>
              <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                {isFr ? 'Recommandations' : 'Recommendations'}
              </div>
            </div>
            <ul className="space-y-2">
              {(isFr ? alignment.recommendations.fr : alignment.recommendations.en).map((rec, idx) => (
                <li key={idx} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                  <span className="text-indigo-600 dark:text-indigo-400 mt-0.5">•</span>
                  {rec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Best Hours of the Day */}
      <div className=" rounded-xl p-6 border border-amber-200 dark:border-amber-800 bg-white/60 dark:bg-slate-800/40">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">🌟</span>
          <h4 className="text-base font-bold text-amber-900 dark:text-amber-100">
            {isFr ? 'Vos Meilleures Heures Aujourd\'hui' : 'Your Best Hours Today'}
          </h4>
        </div>
        
        <div className="space-y-2">
          {topThreeHours.map((hour, idx) => (
            <div
              key={hour.planet}
              className="flex items-center justify-between p-3 bg-white/50 dark:bg-black/20 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <div className="text-lg font-bold text-amber-700 dark:text-amber-300">
                  #{idx + 1}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {hour.planet}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {isFr ? 'Heure planétaire' : 'Planetary hour'}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-sm font-bold" style={{ color: getAlignmentQuality(hour.score).color }}>
                  {Math.round(hour.score)}
                </div>
                <span>{getAlignmentQuality(hour.score).emoji}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-xs text-center text-gray-600 dark:text-gray-400">
          {isFr
            ? 'Basé sur votre essence spirituelle et les énergies planétaires'
            : 'Based on your spiritual essence and planetary energies'}
        </div>
      </div>
    </div>
  );
}
