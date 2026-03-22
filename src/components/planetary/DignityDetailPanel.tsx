/**
 * Dignity Detail Panel
 * ====================
 * A simplified, user-focused panel that shows the planetary status
 * without overwhelming technical details.
 *
 * Shows only:
 * - 3-tier status (سعيد/معتدل/محذور)
 * - Simple reason explanation
 * - Practice guidance
 *
 * Technical details are hidden by default but can be expanded.
 */

'use client';

import React from 'react';
import {
  calculateDignities,
  getSimplifiedStatus,
  getSimplePracticeHint,
  type Planet,
  type ZodiacSign,
  type SimplifiedTier,
} from '@/src/lib/planetary';
import { ZODIAC_DATA, PLANET_INFO } from '@/src/lib/planetary';
import { translations } from '@/src/lib/translations';

// ────────────────────────────────────────────────────────────
// Props
// ────────────────────────────────────────────────────────────

interface DignityDetailPanelProps {
  planet: Planet;
  sign: ZodiacSign;
  degree: number;
  minute?: number;
  isDay: boolean;
  isRetrograde?: boolean;
  language?: 'en' | 'fr';
  onClose?: () => void;
}

// ────────────────────────────────────────────────────────────
// Tier Icons
// ────────────────────────────────────────────────────────────

const TIER_ICONS = {
  said: '✓',      // Checkmark for auspicious
  mutadil: '⚖',   // Balance for moderate
  mahdhur: '⚠',   // Warning for cautious
};

// ────────────────────────────────────────────────────────────
// Practice Hint Section (with App Teaser)
// ────────────────────────────────────────────────────────────

function PracticeHintSection({
  tier,
  planet,
  language,
}: {
  tier: SimplifiedTier;
  planet: Planet;
  language: 'en' | 'fr';
}) {
  const practiceHint = getSimplePracticeHint(tier, planet);
  
  const sectionTitle = language === 'fr' ? 'Indication de Pratique' : 'Practice Hint';
  const playUrl = 'https://play.google.com/store/apps/details?id=com.zaibaitech.asrariya';
  const appTeaser = language === 'fr'
    ? 'Télécharger Asrāriya sur Google Play'
    : 'Download Asrāriya on Google Play';

  // Background color based on tier
  const bgColor = tier === 'said' 
    ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-500/30'
    : tier === 'mahdhur'
      ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-500/30'
      : 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-500/30';

  return (
    <div className={`p-3 rounded-lg border ${bgColor}`}>
      {/* Section header */}
      <div className="flex items-center justify-between mb-2">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          🤲 {sectionTitle}
        </div>
      </div>

      {/* Dhikr recommendation */}
      <div className="flex items-center gap-3 mb-3">
        <div className="text-2xl font-arabic leading-none">
          {practiceHint.nameAr}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {practiceHint.name}
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            {practiceHint.hint}
          </div>
        </div>
      </div>

      {/* App link */}
      <div className="flex items-center gap-2 pt-2 border-t border-slate-200/50 dark:border-slate-600/30">
        <span className="text-base">📱</span>
        <div className="flex-1">
          <a
            href={playUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-indigo-500 dark:text-indigo-400 hover:underline font-medium"
          >
            {appTeaser}
          </a>
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// Main Component
// ────────────────────────────────────────────────────────────

export function DignityDetailPanel({
  planet,
  sign,
  degree,
  minute = 0,
  isDay,
  isRetrograde = false,
  language = 'en',
  onClose,
}: DignityDetailPanelProps) {
  // Calculate dignities internally
  const result = React.useMemo(
    () => calculateDignities(planet, sign, degree, isDay, isRetrograde),
    [planet, sign, degree, isDay, isRetrograde]
  );

  // Get simplified status for user display
  const signDisplay = sign.charAt(0).toUpperCase() + sign.slice(1);
  const simplifiedStatus = React.useMemo(
    () => getSimplifiedStatus(result, planet, signDisplay),
    [result, planet, signDisplay]
  );

  const t = translations[language].planetary;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tAny = t as any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tSimplified = (t as any).simplifiedStatus || {};
  const pt: Record<string, string> = tAny.planetTransit || {};

  // Translated names
  const planetLabel: string = tAny.planets?.[planet] || planet;
  const planetAr: string = tAny.planetsAr?.[planet] || '';
  const signLabel: string = tAny.zodiac?.[sign] || sign;
  const signAr: string = tAny.zodiacAr?.[sign] || '';

  // Get tier labels and guidance
  const tierLabel = tSimplified[simplifiedStatus.tier] || simplifiedStatus.labelEn;
  const tierLabelAr = tSimplified[`${simplifiedStatus.tier}Ar`] || simplifiedStatus.labelAr;
  const guidance = tSimplified[`${simplifiedStatus.tier}Guidance`] || simplifiedStatus.guidance;

  // Build localized reason using translation templates
  const DIGNITY_TEMPLATE_KEY: Record<string, string> = {
    sharaf:      'exaltedIn',
    bayt:        'atHomeIn',
    muthallatha: 'strongIn',
    hadd:        'comfortableIn',
    wajh:        'comfortableIn',
    gharib:      'neutralIn',
    hubut:       'weakenedIn',
    darr:        'weakenedIn',
  };
  const dignityType = result.primary.type;
  const templateKey = DIGNITY_TEMPLATE_KEY[dignityType];
  const reasonTemplate: string = templateKey ? (tSimplified[templateKey] || '') : '';
  const reason = reasonTemplate
    ? reasonTemplate.replace('{planet}', planetLabel).replace('{sign}', signLabel)
    : simplifiedStatus.reason.replace(planet, planetLabel).replace(signDisplay, signLabel);

  const icon = TIER_ICONS[simplifiedStatus.tier];

  return (
    <div className="rounded-xl border border-purple-200/80 dark:border-purple-500/30 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg overflow-hidden animate-in">
      {/* ── Header ── */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-700/70"
        style={{ background: `linear-gradient(135deg, ${simplifiedStatus.color}08, ${simplifiedStatus.color}15)` }}
      >
        <div className="flex items-center gap-3">
          {/* Planet symbol */}
          <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center text-xl">
            {PLANET_INFO[planet]?.symbol || '🪐'}
          </div>
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-bold text-slate-900 dark:text-slate-100">{planetLabel}</span>
              <span className="text-sm font-arabic text-slate-400 dark:text-slate-500">{planetAr}</span>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 tabular-nums">
              {pt.currentlyIn || 'Currently in'}{' '}
              {ZODIAC_DATA[sign]?.symbol} {signLabel}{' '}
              <span className="font-arabic text-slate-400 dark:text-slate-500">{signAr}</span>{' '}
              {degree}° {minute > 0 ? `${minute}′` : ''}
            </div>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
            aria-label="Close"
            type="button"
          >
            ✕
          </button>
        )}
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* ── Simplified Status Badge ── */}
        <div
          className="flex flex-col items-center gap-2 py-4 px-4 rounded-xl border"
          style={{
            backgroundColor: `${simplifiedStatus.color}08`,
            borderColor: `${simplifiedStatus.color}25`,
          }}
        >
          {/* Status row */}
          <div className="flex items-center gap-3">
            <span
              className="text-2xl font-bold"
              style={{ color: simplifiedStatus.color }}
            >
              {icon}
            </span>
            <span
              className="font-arabic text-xl font-semibold"
              style={{ color: simplifiedStatus.color }}
            >
              {tierLabelAr}
            </span>
            <span
              className="text-lg font-semibold"
              style={{ color: simplifiedStatus.color }}
            >
              {tierLabel}
            </span>
          </div>
          
          {/* Simple reason */}
          <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
            {reason}
          </p>
        </div>

        {/* ── Practice Guidance ── */}
        <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700/50">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">
            {language === 'fr' ? 'Conseil de Pratique' : 'Practice Guidance'}
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 italic">
            {guidance}
          </p>
        </div>

        {/* ── Practice Hint (Dhikr Recommendation) ── */}
        <PracticeHintSection 
          tier={simplifiedStatus.tier as SimplifiedTier} 
          planet={planet} 
          language={language} 
        />

        {/* ── Retrograde note (subtle, if applicable) ── */}
        {isRetrograde && (
          <div className="flex items-center gap-2 text-xs text-amber-600 dark:text-amber-400">
            <span>℞</span>
            <span>{language === 'fr' ? 'Rétrograde — mouvement intérieur encouragé' : 'Retrograde — inner reflection encouraged'}</span>
          </div>
        )}
      </div>
    </div>
  );
}
