/**
 * Compact Practice Hint Component
 * ================================
 * Shows the single most relevant dhikr for the current planetary
 * dignity, right where the live status is shown. For Moon, Mercury,
 * and Saturn — which have no entries in the full ZikrPracticePanel
 * list — this is the only dhikr guidance shown at all, so it has to
 * stand on its own rather than teasing a fuller list below it.
 *
 * Stacked vertically throughout (never a single crowded row) so
 * nothing has to compete for width — the previous single-row layout
 * wrapped the Arabic text across three lines and truncated the hint
 * on narrow phones.
 */

'use client';

import React, { useState, useCallback } from 'react';
import type { Planet } from '@/src/lib/planetary';
import type { SimplifiedTier } from '@/src/lib/planetary/dignities';
import { getPracticeHint } from '@/src/lib/planetary/practice-hints';
import { translations } from '@/src/lib/translations';
import { getLocalToday } from '@/src/lib/localDate';
import { TasbihCounter } from '@/src/features/ramadanChallenges/components/TasbihCounter';
import { queueDhikrIncrement } from '@/src/features/ramadanChallenges/communityDhikrService';

interface CompactPracticeHintProps {
  /** Simplified dignity tier */
  tier: SimplifiedTier;
  /** Planet for tier-specific guidance */
  planet: Planet;
  /** Display language */
  language?: 'en' | 'fr';
  /** Optional className for custom styling */
  className?: string;
}

const TIER_STYLES = {
  said: {
    bg: 'bg-emerald-50/60 dark:bg-emerald-900/20',
    border: 'border-emerald-200/70 dark:border-emerald-500/30',
    label: 'text-emerald-600 dark:text-emerald-400',
    name: 'text-emerald-800 dark:text-emerald-200',
    btn: 'border-emerald-300 dark:border-emerald-600 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/40',
  },
  mutadil: {
    bg: 'bg-amber-50/60 dark:bg-amber-900/20',
    border: 'border-amber-200/70 dark:border-amber-500/30',
    label: 'text-amber-600 dark:text-amber-400',
    name: 'text-amber-800 dark:text-amber-200',
    btn: 'border-amber-300 dark:border-amber-600 text-amber-700 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/40',
  },
  mahdhur: {
    bg: 'bg-rose-50/60 dark:bg-rose-900/20',
    border: 'border-rose-200/70 dark:border-rose-500/30',
    label: 'text-rose-600 dark:text-rose-400',
    name: 'text-rose-800 dark:text-rose-200',
    btn: 'border-rose-300 dark:border-rose-600 text-rose-700 dark:text-rose-300 hover:bg-rose-100 dark:hover:bg-rose-900/40',
  },
} as const;

function getStorageKey(planet: Planet, transliteration: string): string {
  return `planetary_hint_zikr_${planet}_${transliteration}`;
}

export function CompactPracticeHint({
  tier,
  planet,
  language = 'en',
  className = '',
}: CompactPracticeHintProps) {
  const [isCounterOpen, setIsCounterOpen] = useState(false);
  const guidance = getPracticeHint(tier, planet);
  const { arabicName, transliteration, meaning, count, instruction } = guidance.primary;

  const t = translations[language].planetary.zikr;
  const tTasbih = translations[language].tasbih;
  const styles = TIER_STYLES[tier];

  const handleComplete = useCallback((tapped: number) => {
    if (tapped <= 0) return;
    const key = getStorageKey(planet, transliteration);
    const current = parseInt(localStorage.getItem(key) || '0', 10) || 0;
    localStorage.setItem(key, String(current + tapped));

    const todayKey = 'planetary_zikr_today';
    const today = getLocalToday();
    try {
      const stored = JSON.parse(localStorage.getItem(todayKey) || '{}');
      const todayCount = (stored.date === today ? (stored.count || 0) : 0) + tapped;
      localStorage.setItem(todayKey, JSON.stringify({ date: today, count: todayCount }));
    } catch {
      localStorage.setItem(todayKey, JSON.stringify({ date: today, count: tapped }));
    }

    queueDhikrIncrement(tapped, `planetary_hint_${planet}_${transliteration}`);
    window.dispatchEvent(new CustomEvent('planetaryZikrUpdate', { detail: { count: tapped } }));
  }, [planet, transliteration]);

  return (
    <div className={`${styles.bg} ${styles.border} border rounded-xl px-3.5 py-3 ${className}`}>
      <div className={`text-[11px] font-semibold uppercase tracking-wide ${styles.label}`}>
        🤲 {t.recommendedZikr}
      </div>

      <div className="mt-1.5" dir="rtl" lang="ar">
        <span className={`font-arabic text-xl leading-relaxed ${styles.name}`}>{arabicName}</span>
      </div>
      <div className="text-sm text-slate-600 dark:text-slate-400">
        {transliteration} <span className="text-slate-400 dark:text-slate-500">— {meaning}</span>
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
        {instruction}
      </p>

      <button
        type="button"
        onClick={() => setIsCounterOpen(true)}
        className={`mt-2.5 inline-flex items-center gap-1.5 min-h-[40px] px-3.5 rounded-full border text-xs font-semibold transition-colors touch-manipulation ${styles.btn}`}
      >
        <span>📿</span>
        <span>{tTasbih.openTasbih}</span>
        {count && <span className="opacity-70">· {count}×</span>}
      </button>

      <TasbihCounter
        isOpen={isCounterOpen}
        onClose={() => setIsCounterOpen(false)}
        onComplete={handleComplete}
        arabicText={arabicName}
        transliteration={transliteration}
        targetCount={count ?? 33}
        language={language}
      />
    </div>
  );
}

export default CompactPracticeHint;
