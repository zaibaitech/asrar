/**
 * Prophetic Names Practice Modal
 * ===============================
 * Full-screen practice interface for the 201 Holy Names.
 * 
 * Steps:
 * 1. Yā Jāmiʿu 180× (with counter)
 * 2. 201 Holy Names (scrollable list)
 * 3. Closing Duʿāʾ
 */

'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Check, 
  Sun, 
  Volume2,
  VolumeX,
  RotateCcw
} from 'lucide-react';
import { 
  PROPHETIC_NAMES_201, 
  YA_JAMIU, 
  RIZQ_DUA,
  CLOSING_DUA
} from '../propheticNames201';
import { translations } from '@/src/lib/translations';

// ─── Types ───────────────────────────────────────────────────────────────────────

interface PropheticNamesPracticeProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
  day: number;
  language?: 'en' | 'fr';
}

type PracticeStep = 'INTRO' | 'YA_JAMIU' | 'NAMES' | 'CLOSING_DUA' | 'COMPLETE';

// ─── Component ───────────────────────────────────────────────────────────────────

export function PropheticNamesPractice({
  isOpen,
  onClose,
  onComplete,
  day,
  language = 'en'
}: PropheticNamesPracticeProps) {
  const [step, setStep] = useState<PracticeStep>('INTRO');
  const [jamiuCount, setJamiuCount] = useState(0);
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(true);
  const namesContainerRef = useRef<HTMLDivElement>(null);

  // Reset on open
  useEffect(() => {
    if (isOpen) {
      setStep('INTRO');
      setJamiuCount(0);
      setCurrentNameIndex(0);
    }
  }, [isOpen]);

  // Scroll to current name
  useEffect(() => {
    if (step === 'NAMES' && namesContainerRef.current) {
      const nameElement = namesContainerRef.current.querySelector(`[data-name-index="${currentNameIndex}"]`);
      if (nameElement) {
        nameElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [currentNameIndex, step]);

  if (!isOpen) return null;

  const t = translations[language].propheticNames;
  const isJamiuComplete = jamiuCount >= YA_JAMIU.count;
  const isNamesComplete = currentNameIndex >= PROPHETIC_NAMES_201.length - 1;
  const currentName = PROPHETIC_NAMES_201[currentNameIndex];

  // Progress percentage
  const getProgressPercent = () => {
    switch (step) {
      case 'YA_JAMIU':
        return Math.min((jamiuCount / YA_JAMIU.count) * 100, 100);
      case 'NAMES':
        return Math.min(((currentNameIndex + 1) / PROPHETIC_NAMES_201.length) * 100, 100);
      default:
        return 0;
    }
  };

  // Increment Jamiu counter
  const incrementJamiu = (amount: number = 1) => {
    setJamiuCount(prev => Math.min(prev + amount, YA_JAMIU.count));
  };

  // Reset Jamiu counter
  const resetJamiu = () => {
    setJamiuCount(0);
  };

  // Navigate names
  const nextName = () => {
    if (currentNameIndex < PROPHETIC_NAMES_201.length - 1) {
      setCurrentNameIndex(prev => prev + 1);
    }
  };

  const prevName = () => {
    if (currentNameIndex > 0) {
      setCurrentNameIndex(prev => prev - 1);
    }
  };

  // Step navigation
  const goToNextStep = () => {
    switch (step) {
      case 'INTRO':
        setStep('YA_JAMIU');
        break;
      case 'YA_JAMIU':
        setStep('NAMES');
        break;
      case 'NAMES':
        setStep('CLOSING_DUA');
        break;
      case 'CLOSING_DUA':
        setStep('COMPLETE');
        break;
      case 'COMPLETE':
        onComplete();
        break;
    }
  };

  // Render step content
  const renderContent = () => {
    switch (step) {
      case 'INTRO':
        return (
          <div className="flex flex-col items-center justify-center min-h-full p-6 text-center">
            <div className="flex items-center gap-2 mb-4">
              <Sun className="w-8 h-8 text-amber-500" />
            </div>
            
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              {t.day} {day}
            </h2>
            
            <p className="text-lg text-amber-600 dark:text-amber-400 font-medium mb-6">
              {t.title}
            </p>

            {/* Opening Duʿāʾ */}
            <div className="w-full max-w-md mb-8 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50">
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                {t.openingDua}
              </h3>
              <p className="text-xl font-arabic text-slate-800 dark:text-slate-200 leading-relaxed mb-3" dir="rtl">
                {RIZQ_DUA.arabic}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                {RIZQ_DUA.transliteration}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
                {language === 'fr' ? RIZQ_DUA.meaningFr : RIZQ_DUA.meaning}
              </p>
            </div>

            {/* Practice steps */}
            <div className="w-full max-w-md text-left space-y-3 mb-8">
              <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                {t.stepsForSession}
              </h4>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 text-sm font-bold">1</span>
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-200">
                    <span className="font-arabic">{YA_JAMIU.arabic}</span> ({YA_JAMIU.transliteration})
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {YA_JAMIU.count}× — {language === 'fr' ? YA_JAMIU.meaningFr : YA_JAMIU.meaning}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 text-sm font-bold">2</span>
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-200">
                    {t.the201HolyNames}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {t.withSallaAfterEach}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 text-sm font-bold">3</span>
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-200">
                    {t.closingDua}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {t.fromDalail}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={goToNextStep}
              className="w-full max-w-md py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold text-lg transition-all shadow-lg shadow-amber-500/25"
            >
              {t.beginBismillah}
            </button>
          </div>
        );

      case 'YA_JAMIU':
        return (
          <div className="flex flex-col items-center justify-center min-h-full p-6 select-none">
            {/* Arabic text at top */}
            <div className="text-center mb-6">
              <p className="text-4xl font-arabic text-amber-600 dark:text-amber-400 mb-1" dir="rtl">
                {YA_JAMIU.arabic}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 italic">
                {YA_JAMIU.transliteration} — {language === 'fr' ? YA_JAMIU.meaningFr : YA_JAMIU.meaning}
              </p>
            </div>

            {/* Professional Tasbih Counter */}
            <div className="relative flex items-center justify-center mb-8">
              {/* Circular progress ring */}
              <svg className="absolute w-72 h-72" viewBox="0 0 288 288">
                {/* Background ring */}
                <circle
                  cx="144"
                  cy="144"
                  r="130"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-slate-200 dark:text-slate-700"
                />
                {/* Progress ring */}
                <circle
                  cx="144"
                  cy="144"
                  r="130"
                  fill="none"
                  stroke="url(#tasbihGradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 130}`}
                  strokeDashoffset={`${2 * Math.PI * 130 * (1 - jamiuCount / YA_JAMIU.count)}`}
                  className="transition-all duration-150 ease-out"
                  transform="rotate(-90 144 144)"
                />
                {/* Gradient definition */}
                <defs>
                  <linearGradient id="tasbihGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#ea580c" />
                  </linearGradient>
                </defs>
                {/* Decorative beads around the circle */}
                {Array.from({ length: 33 }).map((_, i) => {
                  const angle = (i / 33) * 2 * Math.PI - Math.PI / 2;
                  const x = 144 + 130 * Math.cos(angle);
                  const y = 144 + 130 * Math.sin(angle);
                  const isActive = i < Math.floor((jamiuCount / YA_JAMIU.count) * 33);
                  return (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="4"
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
                  const newCount = jamiuCount + 1;
                  incrementJamiu(1);
                  
                  // Enhanced haptic feedback for mobile
                  if (typeof navigator !== 'undefined' && navigator.vibrate) {
                    if (newCount >= YA_JAMIU.count) {
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
                }}
                className="relative w-56 h-56 rounded-full bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 border-4 border-amber-200 dark:border-amber-700/50 shadow-inner flex flex-col items-center justify-center active:scale-[0.98] active:bg-gradient-to-br active:from-amber-100 active:to-orange-200 dark:active:from-amber-800/40 dark:active:to-orange-800/40 transition-all duration-75 cursor-pointer touch-none"
                style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
              >
                {/* Counter display */}
                <div className="text-6xl font-bold text-amber-600 dark:text-amber-400 tabular-nums">
                  {jamiuCount}
                </div>
                <div className="text-base text-slate-500 dark:text-slate-400 font-medium mt-1">
                  / {YA_JAMIU.count}
                </div>
                
                {/* Tap hint */}
                <div className="absolute bottom-8 text-xs text-slate-400 dark:text-slate-500">
                  {t.tapToCount}
                </div>
              </button>
            </div>

            {/* Reset button - subtle */}
            <button
              onClick={resetJamiu}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-sm hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              {t.reset}
            </button>

            {/* Continue button */}
            {isJamiuComplete && (
              <button
                onClick={goToNextStep}
                className="mt-8 px-8 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold flex items-center gap-2 shadow-lg shadow-emerald-500/25 animate-in fade-in slide-in-from-bottom-4 duration-300"
              >
                {t.continueToNames}
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        );

      case 'NAMES':
        return (
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 p-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-semibold text-slate-900 dark:text-slate-100">
                  {t.step2The201Names}
                </h2>
                <button
                  onClick={() => setShowTranslation(!showTranslation)}
                  className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
                >
                  {showTranslation ? t.hideMeaning : t.showMeaning}
                </button>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span>{currentNameIndex + 1} / {PROPHETIC_NAMES_201.length}</span>
                <div className="flex-1 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300"
                    style={{ width: `${getProgressPercent()}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Current name highlight */}
            <div className="flex-shrink-0 p-6 bg-gradient-to-b from-amber-50 to-transparent dark:from-amber-900/20 dark:to-transparent">
              <div className="text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 text-sm font-medium mb-3">
                  #{currentName.number}
                </span>
                <p className="text-5xl font-arabic text-slate-900 dark:text-slate-100 mb-3" dir="rtl">
                  {currentName.arabic}
                </p>
                <p className="text-xl text-slate-700 dark:text-slate-300 italic">
                  {currentName.transliteration}
                </p>
                {showTranslation && (
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                    {language === 'fr' ? currentName.meaningFr : currentName.meaning}
                  </p>
                )}
                <p className="text-lg text-emerald-600 dark:text-emerald-400 font-arabic mt-4" dir="rtl">
                  صَلَّى اللهُ عَلَيْهِ وَسَلَّم
                </p>
                <p className="text-xs text-emerald-500 dark:text-emerald-500 italic">
                  Ṣalla-llāhu ʿalayhi wa sallam
                </p>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex-shrink-0 p-4 flex items-center justify-center gap-4">
              <button
                onClick={prevName}
                disabled={currentNameIndex === 0}
                className="w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-400 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextName}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-bold shadow-lg shadow-amber-500/30 active:scale-95 transition-all flex items-center justify-center"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>

            {/* Scrollable names list */}
            <div 
              ref={namesContainerRef}
              className="flex-1 overflow-y-auto p-4"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {PROPHETIC_NAMES_201.map((name, index) => (
                  <button
                    key={name.number}
                    data-name-index={index}
                    onClick={() => setCurrentNameIndex(index)}
                    className={`p-2 rounded-lg text-center transition-all ${
                      index === currentNameIndex
                        ? 'bg-amber-100 dark:bg-amber-900/50 border-2 border-amber-400 dark:border-amber-600'
                        : index < currentNameIndex
                          ? 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50'
                          : 'bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <span className={`text-xs ${
                      index < currentNameIndex 
                        ? 'text-emerald-600 dark:text-emerald-400' 
                        : 'text-slate-400 dark:text-slate-500'
                    }`}>
                      {name.number}
                    </span>
                    <p className="font-arabic text-sm text-slate-800 dark:text-slate-200" dir="rtl">
                      {name.arabic}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Continue button */}
            {isNamesComplete && (
              <div className="flex-shrink-0 p-4 border-t border-slate-200 dark:border-slate-700">
                <button
                  onClick={goToNextStep}
                  className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
                >
                  {t.continueToDua}
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        );

      case 'CLOSING_DUA':
        return (
          <div className="flex flex-col items-center justify-center min-h-full p-6">
            <div className="text-center mb-6">
              <h2 className="text-lg font-medium text-slate-600 dark:text-slate-400 mb-2">
                {t.step3ClosingDua}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {t.fromDalail}
              </p>
            </div>

            <div className="w-full max-w-lg p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-800/50 mb-8">
              <p className="text-2xl font-arabic text-slate-800 dark:text-slate-200 leading-relaxed mb-6 text-center" dir="rtl">
                {CLOSING_DUA.arabic}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 italic mb-4 text-center">
                {CLOSING_DUA.transliteration}
              </p>
              <div className="border-t border-emerald-200 dark:border-emerald-700/50 pt-4">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {language === 'fr' ? CLOSING_DUA.meaningFr : CLOSING_DUA.meaning}
                </p>
              </div>
            </div>

            <button
              onClick={goToNextStep}
              className="w-full max-w-md py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold text-lg transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2"
            >
              <Check className="w-5 h-5" />
              {t.completeSession}
            </button>
          </div>
        );

      case 'COMPLETE':
        return (
          <div className="flex flex-col items-center justify-center min-h-full p-6 text-center">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              {t.mashaAllah}
            </h2>
            <p className="text-lg text-emerald-600 dark:text-emerald-400 font-medium mb-6">
              {t.day} {day} {t.completedBadge}
            </p>

            <div className="w-full max-w-md p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 mb-8">
              <p className="text-sm text-slate-700 dark:text-slate-300 italic">
                "{t.promise}"
              </p>
            </div>

            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-8">
              <span>☀️</span>
              <span>
                {day < 7 
                  ? `${t.next} ${t.day} ${day + 1}`
                  : `${t.practiceComplete}`
                }
              </span>
            </div>

            <button
              onClick={onComplete}
              className="w-full max-w-md py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold text-lg transition-all shadow-lg shadow-amber-500/25"
            >
              {t.close}
            </button>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-white dark:bg-slate-900 overflow-hidden animate-in fade-in duration-200">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 bg-gradient-to-b from-white via-white to-transparent dark:from-slate-900 dark:via-slate-900">
        <button
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="flex items-center gap-2">
          <Sun className="w-5 h-5 text-amber-500" />
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
            {t.day} {day}
          </span>
        </div>
        
        {/* Step indicator */}
        <div className="flex items-center gap-1">
          {['YA_JAMIU', 'NAMES', 'CLOSING_DUA'].map((s, i) => (
            <div
              key={s}
              className={`w-2 h-2 rounded-full transition-colors ${
                (step === 'INTRO' && i === 0) || 
                (step === s) || 
                (step === 'COMPLETE' && i === 2)
                  ? 'bg-amber-500'
                  : ['YA_JAMIU', 'NAMES', 'CLOSING_DUA'].indexOf(step) > i
                    ? 'bg-emerald-500'
                    : 'bg-slate-300 dark:bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="h-full pt-16 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
}

export default PropheticNamesPractice;
