/**
 * Challenge Settings Modal
 * ========================
 * Modal for editing daily and total Ramadan targets for challenges.
 */

'use client';

import React, { useState, useEffect } from 'react';
import { X, Target, Calendar } from 'lucide-react';
import type { Challenge } from '../types';

// ─── Props ───────────────────────────────────────────────────────────────────────

interface ChallengeSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  challenge: Challenge;
  onSave: (dailyTarget: number, totalTarget: number) => void;
  language?: 'en' | 'fr';
}

// ─── Translations ────────────────────────────────────────────────────────────────

const translations = {
  en: {
    title: 'Challenge Settings',
    dailyTarget: 'Daily Target',
    ramadanTarget: 'Total Target (30 days)',
    autoCalculate: 'Auto-calculate from daily',
    save: 'Save',
    cancel: 'Cancel',
    dailyPlaceholder: 'Enter daily target',
    ramadanPlaceholder: 'Total goal',
    hint: 'Adjust your daily goal based on your capacity',
  },
  fr: {
    title: 'Paramètres du défi',
    dailyTarget: 'Objectif quotidien',
    ramadanTarget: 'Objectif Total (30 jours)',
    autoCalculate: 'Calculer automatiquement',
    save: 'Enregistrer',
    cancel: 'Annuler',
    dailyPlaceholder: 'Entrez l\'objectif quotidien',
    ramadanPlaceholder: 'Objectif total',
    hint: 'Ajustez votre objectif selon votre capacité',
  },
};

// ─── Component ───────────────────────────────────────────────────────────────────

export function ChallengeSettingsModal({
  isOpen,
  onClose,
  challenge,
  onSave,
  language = 'en',
}: ChallengeSettingsModalProps) {
  const t = translations[language];
  
  const [dailyTarget, setDailyTarget] = useState(challenge.dailyTarget);
  const [totalTarget, setTotalTarget] = useState(challenge.totalTarget || 0);
  const [autoCalculate, setAutoCalculate] = useState(true);

  // Reset form when challenge changes
  useEffect(() => {
    setDailyTarget(challenge.dailyTarget);
    setTotalTarget(challenge.totalTarget || 0);
    // Check if current values match auto-calculation
    setAutoCalculate((challenge.totalTarget || 0) === challenge.dailyTarget * 30);
  }, [challenge]);

  // Auto-update total target when daily changes
  useEffect(() => {
    if (autoCalculate) {
      setTotalTarget(dailyTarget * 30);
    }
  }, [dailyTarget, autoCalculate]);

  const handleDailyChange = (value: string) => {
    const num = parseInt(value, 10);
    if (!isNaN(num) && num >= 0) {
      setDailyTarget(num);
    } else if (value === '') {
      setDailyTarget(0);
    }
  };

  const handleTotalChange = (value: string) => {
    const num = parseInt(value, 10);
    if (!isNaN(num) && num >= 0) {
      setTotalTarget(num);
    } else if (value === '') {
      setTotalTarget(0);
    }
  };

  const handleSave = () => {
    onSave(dailyTarget, totalTarget);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            {t.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-5">
          {/* Challenge info */}
          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 border border-amber-200 dark:border-amber-700/50">
            <p className="text-2xl font-arabic text-amber-800 dark:text-amber-200 text-center" dir="rtl">
              {challenge.arabicText}
            </p>
            <p className="text-sm italic text-amber-600 dark:text-amber-400 text-center mt-1">
              {challenge.transliteration}
            </p>
          </div>

          {/* Daily Target */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              <Target size={16} className="text-amber-500" />
              {t.dailyTarget}
            </label>
            <input
              type="number"
              value={dailyTarget || ''}
              onChange={(e) => handleDailyChange(e.target.value)}
              placeholder={t.dailyPlaceholder}
              min={1}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            />
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {t.hint}
            </p>
          </div>

          {/* Auto-calculate toggle */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="autoCalculate"
              checked={autoCalculate}
              onChange={(e) => setAutoCalculate(e.target.checked)}
              className="w-4 h-4 rounded border-slate-300 text-amber-500 focus:ring-amber-500"
            />
            <label htmlFor="autoCalculate" className="text-sm text-slate-600 dark:text-slate-400">
              {t.autoCalculate}
            </label>
          </div>

          {/* Total Target */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              <Calendar size={16} className="text-amber-500" />
              {t.ramadanTarget}
            </label>
            <input
              type="number"
              value={totalTarget || ''}
              onChange={(e) => handleTotalChange(e.target.value)}
              placeholder={t.ramadanPlaceholder}
              min={1}
              disabled={autoCalculate}
              className={`w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all ${
                autoCalculate ? 'opacity-60 cursor-not-allowed' : ''
              }`}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-5 border-t border-slate-200 dark:border-slate-700">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 font-medium transition-colors"
          >
            {t.cancel}
          </button>
          <button
            onClick={handleSave}
            disabled={dailyTarget < 1 || totalTarget < 1}
            className="flex-1 px-4 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t.save}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChallengeSettingsModal;
