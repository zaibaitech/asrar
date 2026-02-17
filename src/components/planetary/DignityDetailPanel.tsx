/**
 * Dignity Detail Panel
 * ====================
 * An inline expandable panel that shows the full essential dignity
 * breakdown for a planet at its current transit position.
 * Used inside PlanetTransitCard (carousel & grid "View Details").
 */

'use client';

import React from 'react';
import {
  calculateDignities,
  getExaltationInfo,
  EXALTATIONS,
  FALLS,
  DETRIMENTS,
  type DignityResult,
  type DignityEntry,
  type Planet,
  type ZodiacSign,
} from '@/src/lib/planetary';
import { PLANET_RULERSHIPS, ZODIAC_DATA, PLANET_INFO } from '@/src/lib/planetary';
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
// Dignity icons (same as EnhancedStatusBadge)
// ────────────────────────────────────────────────────────────

const DIGNITY_ICONS: Record<string, string> = {
  sharaf:      '⬆',
  bayt:        '🏠',
  muthallatha: '△',
  hadd:        '▬',
  wajh:        '◑',
  gharib:      '◌',
  hubut:       '⬇',
  darr:        '⊘',
};

// ────────────────────────────────────────────────────────────
// Score bar component
// ────────────────────────────────────────────────────────────

function ScoreBar({ score, color }: { score: number; color: string }) {
  // Map -10…+10 to 0%…100%
  const pct = ((score + 10) / 20) * 100;
  const midPct = 50; // 0 sits at 50%

  return (
    <div className="relative h-2.5 w-full rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
      {/* Center line for 0 */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-400/50 dark:bg-slate-500/50 z-10" />
      {/* Fill */}
      {score >= 0 ? (
        <div
          className="absolute top-0 bottom-0 rounded-r-full transition-all duration-500"
          style={{
            left: `${midPct}%`,
            width: `${pct - midPct}%`,
            backgroundColor: color,
          }}
        />
      ) : (
        <div
          className="absolute top-0 bottom-0 rounded-l-full transition-all duration-500"
          style={{
            left: `${pct}%`,
            width: `${midPct - pct}%`,
            backgroundColor: color,
          }}
        />
      )}
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
  const result = React.useMemo(
    () => calculateDignities(planet, sign, degree, isDay, isRetrograde),
    [planet, sign, degree, isDay, isRetrograde]
  );

  const t = translations[language].planetary;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tAny = t as any;
  const d: Record<string, string> = tAny.dignities || {};
  const pt: Record<string, string> = tAny.planetTransit || {};

  // Translated names
  const planetLabel: string = tAny.planets?.[planet] || planet;
  const planetAr: string = tAny.planetsAr?.[planet] || '';
  const signLabel: string = tAny.zodiac?.[sign] || sign;
  const signAr: string = tAny.zodiacAr?.[sign] || '';
  const elementLabel: string = tAny.elements?.[ZODIAC_DATA[sign]?.element] || '';
  const elementAr: string = tAny.elementsAr?.[ZODIAC_DATA[sign]?.element] || '';

  // Rulership info
  const ruledSigns = PLANET_RULERSHIPS[planet] || [];
  const exaltation = getExaltationInfo(planet);
  const fallSign = FALLS[planet];
  const detrimentSigns = DETRIMENTS[planet] || [];

  const { conditionLabel, totalScore } = result;

  return (
    <div className="rounded-xl border border-purple-200/80 dark:border-purple-500/30 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg overflow-hidden animate-in">
      {/* ── Header ── */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-700/70"
        style={{ background: `linear-gradient(135deg, ${conditionLabel.color}08, ${conditionLabel.color}15)` }}
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

      <div className="px-4 py-3 space-y-4">
        {/* ── Overall Condition ── */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {pt.overallCondition || 'Overall Condition'}
            </span>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm tabular-nums" style={{ color: conditionLabel.color }}>
                {totalScore > 0 ? '+' : ''}{totalScore}
              </span>
              <span
                className="px-2 py-0.5 rounded-full text-xs font-semibold border"
                style={{
                  color: conditionLabel.color,
                  backgroundColor: `${conditionLabel.color}15`,
                  borderColor: `${conditionLabel.color}40`,
                }}
              >
                {d[result.condition] || conditionLabel.en}
              </span>
            </div>
          </div>
          {/* Score bar */}
          <ScoreBar score={totalScore} color={conditionLabel.color} />
          <div className="flex justify-between mt-0.5 text-[9px] text-slate-400 tabular-nums">
            <span>−10</span>
            <span className="font-arabic text-[10px]" style={{ color: conditionLabel.color }}>{conditionLabel.ar}</span>
            <span>+10</span>
          </div>
        </div>

        {/* ── Dignity Breakdown ── */}
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            {pt.dignitySection || d.breakdown || 'Essential Dignity'}
          </div>
          <div className="space-y-1.5">
            {result.all.map((entry: DignityEntry, i: number) => (
              <div
                key={i}
                className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-slate-50 dark:bg-slate-700/40 border border-slate-100 dark:border-slate-700/60"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm w-5 text-center">{DIGNITY_ICONS[entry.type]}</span>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                        {d[entry.type] || entry.labelEn}
                      </span>
                      <span className="text-xs font-arabic text-slate-400 dark:text-slate-500">
                        {entry.labelAr}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 italic">
                      {entry.transliteration}
                    </span>
                  </div>
                </div>
                <span
                  className={`text-sm font-bold tabular-nums ${
                    entry.score > 0
                      ? 'text-green-600 dark:text-green-400'
                      : entry.score < 0
                        ? 'text-red-500 dark:text-red-400'
                        : 'text-slate-400 dark:text-slate-500'
                  }`}
                >
                  {entry.score > 0 ? '+' : ''}{entry.score}
                </span>
              </div>
            ))}

            {/* Retrograde row */}
            {isRetrograde && (
              <div className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-500/30">
                <div className="flex items-center gap-2">
                  <span className="text-sm w-5 text-center">℞</span>
                  <span className="text-sm font-medium text-amber-700 dark:text-amber-400">
                    {language === 'fr' ? 'Rétrograde' : 'Retrograde'}
                  </span>
                </div>
                <span className="text-sm font-bold tabular-nums text-red-500 dark:text-red-400">−2</span>
              </div>
            )}
          </div>
        </div>

        {/* ── Planet Reference ── */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-700/70">
          <div className="grid grid-cols-2 gap-2 text-xs">
            {/* Rulership */}
            {ruledSigns.length > 0 && (
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-700/30">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                  {pt.rulesSign || 'Rules'}
                </div>
                <div className="flex items-center gap-1 flex-wrap">
                  {ruledSigns.map(s => (
                    <span key={s} className="inline-flex items-center gap-0.5 text-slate-700 dark:text-slate-300">
                      <span>{ZODIAC_DATA[s]?.symbol}</span>
                      <span>{tAny.zodiac?.[s] || s}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Exaltation */}
            {exaltation && (
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-700/30">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                  {pt.exaltedAt || 'Exalted at'}
                </div>
                <span className="inline-flex items-center gap-0.5 text-slate-700 dark:text-slate-300">
                  <span>{ZODIAC_DATA[exaltation.sign]?.symbol}</span>
                  <span>{tAny.zodiac?.[exaltation.sign] || exaltation.sign}</span>
                  <span className="tabular-nums text-slate-400 ml-0.5">{exaltation.degree}°</span>
                </span>
              </div>
            )}

            {/* Fall */}
            {fallSign && (
              <div className="p-2 rounded-lg bg-red-50/50 dark:bg-red-900/10">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                  {pt.inFallIn || 'In fall in'}
                </div>
                <span className="inline-flex items-center gap-0.5 text-red-600 dark:text-red-400">
                  <span>{ZODIAC_DATA[fallSign]?.symbol}</span>
                  <span>{tAny.zodiac?.[fallSign] || fallSign}</span>
                </span>
              </div>
            )}

            {/* Detriment */}
            {detrimentSigns.length > 0 && (
              <div className="p-2 rounded-lg bg-red-50/50 dark:bg-red-900/10">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                  {pt.inDetrimentIn || 'In detriment in'}
                </div>
                <div className="flex items-center gap-1 flex-wrap">
                  {detrimentSigns.map(s => (
                    <span key={s} className="inline-flex items-center gap-0.5 text-red-600 dark:text-red-400">
                      <span>{ZODIAC_DATA[s]?.symbol}</span>
                      <span>{tAny.zodiac?.[s] || s}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
