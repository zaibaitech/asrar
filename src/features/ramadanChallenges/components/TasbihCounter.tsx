/**
 * Tasbih Counter Component
 * ========================
 * A reusable digital tasbih (prayer beads) counter modal.
 * Features circular progress, tap-to-count, haptic feedback.
 * Optimised for mobile PWA — fits all screen sizes without scrolling.
 */

'use client';

import React, { useState, useEffect } from 'react';
import { X, RotateCcw, Check } from 'lucide-react';
import { translations } from '@/src/lib/translations';

// ─── Types ───────────────────────────────────────────────────────────────────────

interface TasbihCounterProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (count: number) => void;
  arabicText: string;
  transliteration: string;
  targetCount: number;
  language?: 'en' | 'fr';
}

// ─── Component ───────────────────────────────────────────────────────────────────

export function TasbihCounter({
  isOpen,
  onClose,
  onComplete,
  arabicText,
  transliteration,
  targetCount,
  language = 'en',
}: TasbihCounterProps) {
  const [count, setCount] = useState(0);
  const t = translations[language].tasbih;

  // Reset on open
  useEffect(() => {
    if (isOpen) setCount(0);
  }, [isOpen]);

  if (!isOpen) return null;

  const isComplete = count >= targetCount;
  const progressPercent = targetCount > 0 ? Math.min((count / targetCount) * 100, 100) : 0;

  // Ring geometry — sized to fit smallest phones
  const SIZE = 180;
  const STROKE = 7;
  const R = (SIZE - STROKE) / 2;
  const CIRCUMFERENCE = 2 * Math.PI * R;

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      if (newCount >= targetCount)       navigator.vibrate([50, 50, 100]);
      else if (newCount % 33 === 0)      navigator.vibrate([30, 30, 30]);
      else if (newCount % 10 === 0)      navigator.vibrate(25);
      else                               navigator.vibrate(12);
    }
  };

  const handleComplete = () => {
    onComplete(count);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Sheet slides up from bottom on mobile, centred on desktop */}
      <div className="w-full sm:max-w-sm bg-white dark:bg-slate-900 rounded-t-2xl sm:rounded-2xl shadow-2xl animate-in slide-in-from-bottom-4 sm:zoom-in-95 duration-200">

        {/* ── Header ── */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-700">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
            📿 {t.title}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* ── Body ── */}
        <div className="px-4 pt-3 pb-4 flex flex-col items-center gap-3">

          {/* Dhikr text — compact */}
          <div className="text-center">
            <p className="text-2xl font-arabic text-amber-600 dark:text-amber-400 leading-snug" dir="rtl">
              {arabicText}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 italic mt-0.5">
              {transliteration}
            </p>
          </div>

          {/* Circular counter tap area */}
          <div className="relative flex items-center justify-center">
            <svg
              width={SIZE}
              height={SIZE}
              viewBox={`0 0 ${SIZE} ${SIZE}`}
              className="absolute"
            >
              {/* Background ring */}
              <circle
                cx={SIZE / 2} cy={SIZE / 2} r={R}
                fill="none"
                stroke="currentColor"
                strokeWidth={STROKE}
                className="text-slate-200 dark:text-slate-700"
              />
              {/* Progress ring */}
              <circle
                cx={SIZE / 2} cy={SIZE / 2} r={R}
                fill="none"
                stroke="url(#tasbihGrad)"
                strokeWidth={STROKE}
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={CIRCUMFERENCE * (1 - progressPercent / 100)}
                className="transition-all duration-150 ease-out"
                transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}
              />
              {/* Bead decorations */}
              {Array.from({ length: 33 }).map((_, i) => {
                const angle = (i / 33) * 2 * Math.PI - Math.PI / 2;
                const x = SIZE / 2 + R * Math.cos(angle);
                const y = SIZE / 2 + R * Math.sin(angle);
                const isActive = i < Math.floor((count / targetCount) * 33);
                return (
                  <circle key={i} cx={x} cy={y} r="2.5"
                    className={`transition-all duration-150 ${isActive ? 'fill-amber-500 dark:fill-amber-400' : 'fill-slate-300 dark:fill-slate-600'}`}
                  />
                );
              })}
              <defs>
                <linearGradient id="tasbihGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
              </defs>
            </svg>

            {/* Tap button — slightly smaller than the ring */}
            <button
              onPointerDown={(e) => { e.preventDefault(); increment(); }}
              className="relative w-36 h-36 rounded-full bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 border-4 border-amber-200 dark:border-amber-700/50 shadow-inner flex flex-col items-center justify-center active:scale-[0.97] transition-transform duration-75 cursor-pointer touch-none select-none"
              style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
            >
              <span className="text-4xl font-bold text-amber-600 dark:text-amber-400 tabular-nums leading-none">
                {count}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                / {targetCount}
              </span>
              <span className="absolute bottom-4 text-[10px] text-slate-400 dark:text-slate-500">
                {t.tapToCount}
              </span>
            </button>
          </div>

          {/* Reset */}
          <button
            onClick={() => setCount(0)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            {t.reset}
          </button>

          {/* Log / Complete button */}
          {count > 0 ? (
            <button
              onClick={handleComplete}
              className={`w-full py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all text-sm ${
                isComplete
                  ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/25'
                  : 'bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-500/25'
              }`}
            >
              <Check className="w-4 h-4" />
              {isComplete ? t.complete : t.logProgress} ({count})
            </button>
          ) : (
            <p className="text-xs text-center text-slate-400 dark:text-slate-500">{t.hint}</p>
          )}
        </div>
      </div>
    </div>
  );
}
