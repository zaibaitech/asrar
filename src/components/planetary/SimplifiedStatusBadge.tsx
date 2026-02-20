/**
 * Simplified ʿIlm al-Nujūm Status Badge
 * =====================================
 * User-focused display of planetary dignity status.
 *
 * Shows only 3 clear tiers:
 *   - سَعِيد (Saʿīd) — Auspicious: Planet in Sharaf, Bayt, or strong Triplicity
 *   - مُعْتَدِل (Muʿtadil) — Moderate: Planet in Terms, Face, or Peregrine
 *   - مَحْذُور (Maḥdhūr) — Cautious: Planet in Fall or Detriment
 *
 * Hides numerical scores and technical dignity names from user view.
 * Internal calculations still use full dignity system for accuracy.
 */

'use client';

import React from 'react';
import {
  calculateDignities,
  getSimplifiedStatus,
  type DignityResult,
  type SimplifiedStatus,
  type Planet,
  type ZodiacSign,
} from '@/src/lib/planetary';
import { translations } from '@/src/lib/translations';
import { EnhancedStatusBadge } from './EnhancedStatusBadge';

// ────────────────────────────────────────────────────────────
// Props
// ────────────────────────────────────────────────────────────

interface SimplifiedStatusBadgeProps {
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
  /** Show expanded details (reveals technical info) */
  showExpandedDetails?: boolean;
  /** UI language */
  language?: 'en' | 'fr';
  /** Compact mode for grid cells */
  compact?: boolean;
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
// Expanded Details Panel (hidden by default)
// ────────────────────────────────────────────────────────────

function ExpandedDetails({
  result,
  planet,
  sign,
  degree,
  isDay,
  isRetrograde,
  language,
  onClose,
}: {
  result: DignityResult;
  planet: Planet;
  sign: ZodiacSign;
  degree: number;
  isDay: boolean;
  isRetrograde: boolean;
  language: 'en' | 'fr';
  onClose: () => void;
}) {
  return (
    <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-80 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xl animate-in">
      <div className="p-3">
        {/* Header with close button */}
        <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-100 dark:border-slate-700">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            {language === 'fr' ? 'Détails Techniques' : 'Technical Details'}
          </span>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 text-sm"
            type="button"
          >
            ✕
          </button>
        </div>
        {/* Render the detailed badge using the existing component */}
        <EnhancedStatusBadge
          planet={planet}
          sign={sign}
          degree={degree}
          isDay={isDay}
          isRetrograde={isRetrograde}
          showDetails={true}
          language={language}
        />
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// Main Component
// ────────────────────────────────────────────────────────────

export function SimplifiedStatusBadge({
  planet,
  sign,
  degree,
  isDay,
  isRetrograde = false,
  showExpandedDetails = false,
  language = 'en',
  compact = false,
}: SimplifiedStatusBadgeProps) {
  const [showDetails, setShowDetails] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

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

  // Get translations
  const t = translations[language].planetary;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tSimplified = (t as any).simplifiedStatus || {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tPlanets = (t as any).planets || {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tZodiac = (t as any).zodiac || {};

  // Translated values
  const tierLabel = tSimplified[simplifiedStatus.tier] || simplifiedStatus.labelEn;
  const tierLabelAr = tSimplified[`${simplifiedStatus.tier}Ar`] || simplifiedStatus.labelAr;
  const guidance = tSimplified[`${simplifiedStatus.tier}Guidance`] || simplifiedStatus.guidance;
  const planetName = tPlanets[planet] || planet;
  const signName = tZodiac[sign] || signDisplay;

  // Build localized reason
  const reason = simplifiedStatus.reason
    .replace(planet, planetName)
    .replace(signDisplay, signName);

  // Close details on outside click
  React.useEffect(() => {
    if (!showDetails) return;
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowDetails(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showDetails]);

  const icon = TIER_ICONS[simplifiedStatus.tier];

  // ── Compact mode (for grid cells) ──
  if (compact) {
    return (
      <span
        className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-1 rounded-full leading-none"
        style={{
          backgroundColor: `${simplifiedStatus.color}15`,
          color: simplifiedStatus.color,
          borderColor: `${simplifiedStatus.color}30`,
          borderWidth: 1,
        }}
        title={`${tierLabelAr} ${tierLabel} — ${reason}`}
      >
        <span>{icon}</span>
        <span className="font-arabic">{tierLabelAr}</span>
        <span>{tierLabel}</span>
      </span>
    );
  }

  // ── Full badge ──
  return (
    <div className="relative inline-block" ref={containerRef}>
      <button
        onClick={() => showExpandedDetails && setShowDetails(!showDetails)}
        className="inline-flex flex-col items-start gap-0.5 px-4 py-2.5 rounded-xl border backdrop-blur-sm transition-all hover:shadow-md active:scale-[0.98]"
        style={{
          backgroundColor: `${simplifiedStatus.color}08`,
          borderColor: `${simplifiedStatus.color}30`,
        }}
        aria-label={`${planet} status: ${tierLabel}`}
        title={guidance}
        type="button"
      >
        {/* Top row: Status with icon */}
        <div className="flex items-center gap-2">
          {/* Status icon */}
          <span
            className="text-base font-bold"
            style={{ color: simplifiedStatus.color }}
          >
            {icon}
          </span>

          {/* Arabic label */}
          <span
            className="font-arabic text-base font-semibold"
            style={{ color: simplifiedStatus.color }}
          >
            {tierLabelAr}
          </span>

          {/* English label */}
          <span
            className="text-sm font-semibold"
            style={{ color: simplifiedStatus.color }}
          >
            {tierLabel}
          </span>
        </div>

        {/* Bottom row: Simple reason */}
        <span className="text-xs text-slate-600 dark:text-slate-400 whitespace-nowrap">
          {reason}
        </span>
      </button>

      {/* Expanded details panel (hidden by default) */}
      {showDetails && showExpandedDetails && (
        <ExpandedDetails
          result={result}
          planet={planet}
          sign={sign}
          degree={degree}
          isDay={isDay}
          isRetrograde={isRetrograde}
          language={language}
          onClose={() => setShowDetails(false)}
        />
      )}
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// Guidance Tooltip Component (for optional display)
// ────────────────────────────────────────────────────────────

interface GuidanceTooltipProps {
  tier: 'said' | 'mutadil' | 'mahdhur';
  language?: 'en' | 'fr';
}

export function GuidanceTooltip({ tier, language = 'en' }: GuidanceTooltipProps) {
  const t = translations[language].planetary;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tSimplified = (t as any).simplifiedStatus || {};
  
  const guidance = tSimplified[`${tier}Guidance`] || '';
  
  return (
    <div className="text-xs text-slate-500 dark:text-slate-400 italic">
      {guidance}
    </div>
  );
}
