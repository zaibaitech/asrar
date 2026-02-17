/**
 * Enhanced ʿIlm al-Nujūm Status Badge
 * =====================================
 * Displays authentic planetary dignity based on traditional Islamic
 * celestial science (Essential Dignities / Al-Karāmāt al-Dhātiyya).
 *
 * Uses live NASA JPL position data to calculate:
 *  - Exaltation (Sharaf شرف)
 *  - Domicile (Bayt بيت)
 *  - Triplicity (Muthallatha مثلثة)
 *  - Terms (Ḥadd حد)
 *  - Face/Decan (Wajh وجه)
 *  - Peregrine (Gharīb غريب)
 *  - Fall (Hubūṭ هبوط)
 *  - Detriment (Ḍārr ضارّ)
 */

'use client';

import React from 'react';
import {
  calculateDignities,
  type DignityResult,
  type DignityEntry,
  type Planet,
  type ZodiacSign,
} from '@/src/lib/planetary';
import { translations } from '@/src/lib/translations';

// ────────────────────────────────────────────────────────────
// Props
// ────────────────────────────────────────────────────────────

interface EnhancedStatusBadgeProps {
  /** Planet name (PascalCase, e.g. 'Venus') */
  planet: Planet;
  /** Zodiac sign key (e.g. 'pisces') */
  sign: ZodiacSign;
  /** Degree within the sign (0-29) */
  degree: number;
  /** Whether it is currently daytime (affects triplicity) */
  isDay: boolean;
  /** Whether the planet is retrograde */
  isRetrograde?: boolean;
  /** Show the detailed tooltip breakdown */
  showDetails?: boolean;
  /** UI language */
  language?: 'en' | 'fr';
  /** Compact mode for grid cells */
  compact?: boolean;
}

// ────────────────────────────────────────────────────────────
// Dignity icon map
// ────────────────────────────────────────────────────────────

const DIGNITY_ICONS: Record<string, string> = {
  sharaf:      '⬆',  // Exaltation
  bayt:        '🏠',  // Domicile
  muthallatha: '△',   // Triplicity (triangle)
  hadd:        '▬',   // Terms (bound)
  wajh:        '◑',   // Face (half-moon)
  gharib:      '◌',   // Peregrine (empty)
  hubut:       '⬇',  // Fall
  darr:        '⊘',   // Detriment
};

// ────────────────────────────────────────────────────────────
// Tooltip component
// ────────────────────────────────────────────────────────────

function DignityTooltip({
  result,
  planet,
  sign,
  degree,
  language,
}: {
  result: DignityResult;
  planet: string;
  sign: string;
  degree: number;
  language: 'en' | 'fr';
}) {
  const t = translations[language].planetary;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tAny = t as any;
  const d: Record<string, string> = tAny.dignities || {};
  const planetLabel: string = tAny.planets?.[planet] || planet;
  const signLabel: string = tAny.zodiac?.[sign] || sign;
  const signAr: string = tAny.zodiacAr?.[sign] || '';
  const planetAr: string = tAny.planetsAr?.[planet] || '';

  return (
    <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xl text-left animate-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-slate-100 dark:border-slate-700">
        <div>
          <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            {planetLabel} <span className="font-arabic text-slate-400">{planetAr}</span>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            {signLabel} <span className="font-arabic text-slate-400">{signAr}</span> {degree}°
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs font-medium" style={{ color: result.conditionLabel.color }}>
            {d[result.condition] || result.conditionLabel.en}
          </div>
          <div className="text-[10px] font-arabic" style={{ color: result.conditionLabel.color }}>
            {result.conditionLabel.ar}
          </div>
        </div>
      </div>

      {/* Score */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-medium">
          {d.scoreLabel || 'Score'}
        </span>
        <span className="text-sm font-bold tabular-nums" style={{ color: result.conditionLabel.color }}>
          {result.totalScore > 0 ? '+' : ''}{result.totalScore}
        </span>
      </div>

      {/* Dignity breakdown */}
      <div className="text-[11px] uppercase tracking-wider font-medium text-slate-500 dark:text-slate-400 mb-1.5">
        {d.breakdown || 'Breakdown'}
      </div>
      <div className="space-y-1">
        {result.all.map((entry: DignityEntry, i: number) => (
          <div key={i} className="flex items-center justify-between py-0.5">
            <div className="flex items-center gap-1.5">
              <span className="text-xs w-4 text-center">{DIGNITY_ICONS[entry.type]}</span>
              <span className="text-xs text-slate-700 dark:text-slate-300">
                {d[entry.type] || entry.labelEn}
              </span>
              <span className="text-[10px] font-arabic text-slate-400 dark:text-slate-500">
                {entry.labelAr}
              </span>
            </div>
            <span className={`text-xs font-semibold tabular-nums ${
              entry.score > 0 ? 'text-green-600 dark:text-green-400' 
              : entry.score < 0 ? 'text-red-500 dark:text-red-400' 
              : 'text-slate-400'
            }`}>
              {entry.score > 0 ? '+' : ''}{entry.score}
            </span>
          </div>
        ))}
        {result.isRetrograde && (
          <div className="flex items-center justify-between py-0.5 border-t border-slate-100 dark:border-slate-700 mt-1 pt-1">
            <div className="flex items-center gap-1.5">
              <span className="text-xs w-4 text-center">℞</span>
              <span className="text-xs text-amber-600 dark:text-amber-400">
                {d.retrogradeNote || 'Retrograde (−2)'}
              </span>
            </div>
            <span className="text-xs font-semibold tabular-nums text-red-500">−2</span>
          </div>
        )}
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// Main Component
// ────────────────────────────────────────────────────────────

export function EnhancedStatusBadge({
  planet,
  sign,
  degree,
  isDay,
  isRetrograde = false,
  showDetails = true,
  language = 'en',
  compact = false,
}: EnhancedStatusBadgeProps) {
  const [showTooltip, setShowTooltip] = React.useState(false);
  const tooltipRef = React.useRef<HTMLDivElement>(null);

  // Calculate dignities
  const result = React.useMemo(
    () => calculateDignities(planet, sign, degree, isDay, isRetrograde),
    [planet, sign, degree, isDay, isRetrograde]
  );

  // Close tooltip on outside click
  React.useEffect(() => {
    if (!showTooltip) return;
    const handleClick = (e: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(e.target as Node)) {
        setShowTooltip(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showTooltip]);

  const t = translations[language].planetary;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const d: Record<string, string> = (t as any).dignities || {};
  const { conditionLabel, primary, totalScore } = result;

  // ── Compact mode (for grid cells) ──
  if (compact) {
    return (
      <span
        className="inline-flex items-center gap-0.5 text-[9px] font-semibold px-1 py-px rounded-full leading-none cursor-help"
        style={{
          backgroundColor: `${conditionLabel.color}18`,
          color: conditionLabel.color,
          borderColor: `${conditionLabel.color}40`,
          borderWidth: 1,
        }}
        title={`${primary.transliteration} (${primary.labelAr}) — ${d[result.condition] || conditionLabel.en}: ${totalScore > 0 ? '+' : ''}${totalScore}`}
      >
        <span>{DIGNITY_ICONS[primary.type]}</span>
        <span className="font-arabic">{primary.labelAr}</span>
      </span>
    );
  }

  // ── Full badge ──
  return (
    <div className="relative" ref={tooltipRef}>
      <button
        onClick={() => showDetails && setShowTooltip(!showTooltip)}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-sm transition-all hover:shadow-md active:scale-95 cursor-help"
        style={{
          backgroundColor: `${conditionLabel.color}12`,
          borderColor: `${conditionLabel.color}40`,
        }}
        aria-label={`${planet} dignity: ${conditionLabel.en}`}
        type="button"
      >
        {/* Pulsing status dot */}
        <div className="relative w-2 h-2">
          <div
            className="absolute inset-0 rounded-full animate-pulse-live"
            style={{ backgroundColor: conditionLabel.color }}
          />
          <div
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: conditionLabel.color }}
          />
        </div>

        {/* Primary dignity label */}
        <div className="flex items-center gap-1.5 text-sm font-medium">
          <span style={{ color: conditionLabel.color }}>
            {d[result.condition] || conditionLabel.en}
          </span>
          <span
            className="font-arabic text-xs opacity-70"
            style={{ color: conditionLabel.color }}
          >
            {conditionLabel.ar}
          </span>
        </div>

        {/* Small dignity icon */}
        <span className="text-xs opacity-60" style={{ color: conditionLabel.color }}>
          {DIGNITY_ICONS[primary.type]}
        </span>
      </button>

      {/* Tooltip */}
      {showTooltip && showDetails && (
        <DignityTooltip
          result={result}
          planet={planet}
          sign={sign}
          degree={degree}
          language={language}
        />
      )}
    </div>
  );
}
