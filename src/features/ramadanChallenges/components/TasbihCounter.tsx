/**
 * Tasbih Counter Component
 * ========================
 * A reusable digital tasbih (prayer beads) counter modal.
 * Features circular progress, tap-to-count, haptic feedback.
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
    if (isOpen) {
      setCount(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const isComplete = count >= targetCount;
  const progressPercent = Math.min((count / targetCount) * 100, 100);

  // Increment counter with haptic feedback
  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    
    // Haptic feedback
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      if (newCount >= targetCount) {
        // Completion: celebratory double vibration
        navigator.vibrate([50, 50, 100]);
      } else if (newCount % 33 === 0) {
        // Every 33 (tasbih round): medium pulse
        navigator.vibrate([30, 30, 30]);
      } else if (newCount % 10 === 0) {
        // Every 10: slightly longer
        navigator.vibrate(25);
      } else {
        // Normal tap: short crisp vibration
        navigator.vibrate(12);
      }
    }
  };

  // Reset counter
  const reset = () => {
    setCount(0);
  };

  // Handle completion
  const handleComplete = () => {
    onComplete(count);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-sm bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
          <h3 className="font-bold text-slate-900 dark:text-slate-100">
            📿 {t.title}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col items-center">
          {/* Dhikr text */}
          <div className="text-center mb-6">
            <p className="text-3xl font-arabic text-amber-600 dark:text-amber-400 mb-2" dir="rtl">
              {arabicText}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 italic">
              {transliteration}
            </p>
          </div>

          {/* Circular Counter */}
          <div className="relative flex items-center justify-center mb-6">
            {/* Circular progress ring */}
            <svg className="absolute w-56 h-56" viewBox="0 0 224 224">
              {/* Background ring */}
              <circle
                cx="112"
                cy="112"
                r="100"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                className="text-slate-200 dark:text-slate-700"
              />
              {/* Progress ring */}
              <circle
                cx="112"
                cy="112"
                r="100"
                fill="none"
                stroke="url(#tasbihGradientSimple)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 100}`}
                strokeDashoffset={`${2 * Math.PI * 100 * (1 - progressPercent / 100)}`}
                className="transition-all duration-150 ease-out"
                transform="rotate(-90 112 112)"
              />
              {/* Gradient definition */}
              <defs>
                <linearGradient id="tasbihGradientSimple" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
              </defs>
              {/* Decorative beads */}
              {Array.from({ length: 33 }).map((_, i) => {
                const angle = (i / 33) * 2 * Math.PI - Math.PI / 2;
                const x = 112 + 100 * Math.cos(angle);
                const y = 112 + 100 * Math.sin(angle);
                const isActive = i < Math.floor((count / targetCount) * 33);
                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="3"
                    className={`transition-all duration-150 ${
                      isActive 
                        ? 'fill-amber-500 dark:fill-amber-400' 
                        : 'fill-slate-300 dark:fill-slate-600'
                    }`}
                  />
                );
              })}
            </svg>

            {/* Tap area */}
            <button
              onPointerDown={(e) => {
                e.preventDefault();
                increment();
              }}
              className="relative w-44 h-44 rounded-full bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 border-4 border-amber-200 dark:border-amber-700/50 shadow-inner flex flex-col items-center justify-center active:scale-[0.98] active:bg-gradient-to-br active:from-amber-100 active:to-orange-200 dark:active:from-amber-800/40 dark:active:to-orange-800/40 transition-all duration-75 cursor-pointer touch-none"
              style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
            >
              <div className="text-5xl font-bold text-amber-600 dark:text-amber-400 tabular-nums">
                {count}
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                / {targetCount}
              </div>
              <div className="absolute bottom-6 text-xs text-slate-400 dark:text-slate-500">
                {t.tapToCount}
              </div>
            </button>
          </div>

          {/* Reset button */}
          <button
            onClick={reset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-sm hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 transition-colors mb-4"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            {t.reset}
          </button>

          {/* Action buttons */}
          <div className="w-full space-y-2">
            {count > 0 && (
              <button
                onClick={handleComplete}
                className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                  isComplete
                    ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/25'
                    : 'bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-500/25'
                }`}
              >
                <Check className="w-4 h-4" />
                {isComplete ? t.complete : t.logProgress} ({count})
              </button>
            )}
            <p className="text-xs text-center text-slate-400 dark:text-slate-500">
              {t.hint}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
