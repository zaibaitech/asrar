/**
 * Add Challenge Modal Component
 * ==============================
 * Modal for adding new dhikr challenges:
 * - Ṣalawāt with extended preset selection
 * - Divine Name selection
 * - 201 Holy Names of Prophet ﷺ (Rizq Practice)
 * - Debt Relief Wird (1000× after ʿIshāʾ)
 * - Custom wird entry
 */

'use client';

import React, { useState, useEffect } from 'react';
import { X, ChevronRight, ChevronLeft, ChevronDown, ChevronUp, Star } from 'lucide-react';
import type { ChallengeType, SalawatPreset, DivineNameOption } from '../types';
import { SALAWAT_PRESETS, DIVINE_NAME_OPTIONS, DEFAULT_QUICK_ADD_PRESETS } from '../types';
import { RIZQ_PRACTICE_INFO } from '../propheticNames201';
import { DEBT_RELIEF_PRACTICE_INFO } from '../debtRelief1000';
import { translations } from '@/src/lib/translations';

// ─── Types ───────────────────────────────────────────────────────────────────────

interface AddChallengeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (type: ChallengeType, config: ChallengeConfig) => void;
  existingChallenges?: Array<{ type: ChallengeType; title: string; arabicText: string }>;
  language?: 'en' | 'fr';
  initialStep?: ModalStep;
}

interface ChallengeConfig {
  title: string;
  arabicText: string;
  transliteration: string;
  meaning?: string;
  dailyTarget: number;
  totalTarget: number;
  quickAddPresets?: number[];
  season?: string;
}

type ModalStep = 'SELECT_TYPE' | 'CONFIGURE_SALAWAT' | 'PREVIEW_SALAWAT' | 'CONFIGURE_DIVINE_NAME' | 'CONFIGURE_CUSTOM' | 'CONFIGURE_PROPHETIC_NAMES' | 'CONFIGURE_DEBT_RELIEF';

export type { ModalStep as AddChallengeModalStep };

// ─── Component ───────────────────────────────────────────────────────────────────

export function AddChallengeModal({ isOpen, onClose, onAdd, existingChallenges = [], language = 'en', initialStep = 'SELECT_TYPE' }: AddChallengeModalProps) {
  const commonT = translations[language].common;
  const modalT = translations[language].ramadan.addChallenge;
  const propheticT = translations[language].propheticNames;
  const debtReliefT = translations[language].debtRelief;
  const [step, setStep] = useState<ModalStep>(initialStep);
  const [selectedSalawat, setSelectedSalawat] = useState<SalawatPreset>(SALAWAT_PRESETS[0]);
  const [selectedDivineName, setSelectedDivineName] = useState<DivineNameOption>(DIVINE_NAME_OPTIONS[0]);
  const [showMeaning, setShowMeaning] = useState(false);
  
  // Custom wird state
  const [customTitle, setCustomTitle] = useState('');
  const [customArabic, setCustomArabic] = useState('');
  const [customTranslit, setCustomTranslit] = useState('');
  const [customDaily, setCustomDaily] = useState('100');

  // Reset to initial step when modal opens or initialStep changes
  useEffect(() => {
    if (isOpen) {
      setStep(initialStep);
    }
  }, [isOpen, initialStep]);

  if (!isOpen) return null;

  const getSalawatTitle = (preset: SalawatPreset) => (language === 'fr' ? preset.titleFr ?? preset.title : preset.title);
  const getSalawatTradition = (preset: SalawatPreset) => (language === 'fr' ? preset.traditionFr ?? preset.tradition : preset.tradition);
  const getSalawatMeaning = (preset: SalawatPreset) => (language === 'fr' ? preset.meaningFr ?? preset.meaning : preset.meaning);
  const getSalawatNote = (preset: SalawatPreset) => (language === 'fr' ? preset.noteFr ?? preset.note : preset.note);
  const getDivineNameMeaning = (name: DivineNameOption) => (language === 'fr' ? name.meaningFr ?? name.meaning : name.meaning);

  // ─── Check for duplicate challenges ───
  const isDuplicate = (type: ChallengeType, arabicText?: string): boolean => {
    return existingChallenges.some(challenge => {
      // For ISTIGHFAR, PROPHETIC_NAMES, DEBT_RELIEF - only one allowed
      if ((type === 'ISTIGHFAR' || type === 'PROPHETIC_NAMES' || type === 'DEBT_RELIEF') && challenge.type === type) {
        return true;
      }
      // For SALAWAT and DIVINE_NAME - check if same arabic text exists
      if ((type === 'SALAWAT' || type === 'DIVINE_NAME') && challenge.type === type && arabicText) {
        return challenge.arabicText === arabicText;
      }
      return false;
    });
  };

  // ─── Reset modal state ───
  const handleClose = () => {
    setStep('SELECT_TYPE');
    setShowMeaning(false);
    setCustomTitle('');
    setCustomArabic('');
    setCustomTranslit('');
    setCustomDaily('100');
    onClose();
  };

  // ─── Handle Ṣalawāt preset selection ───
  const handleSalawatSelect = (preset: SalawatPreset) => {
    setSelectedSalawat(preset);
    setShowMeaning(false);
    setStep('PREVIEW_SALAWAT');
  };

  // ─── Challenge type options ───
  const challengeTypes = [
    {
      type: 'SALAWAT' as ChallengeType,
      title: modalT.salawatTitle,
      titleAr: 'صلوات',
      description: modalT.salawatDescription,
      icon: '🌹',
      color: 'emerald',
    },
    {
      type: 'PROPHETIC_NAMES' as ChallengeType,
      title: modalT.propheticNamesTitle,
      titleAr: 'أسماء النبي ﷺ',
      description: modalT.propheticNamesDescription,
      icon: '⭐',
      color: 'amber',
      featured: true,
    },
    {
      type: 'DEBT_RELIEF' as ChallengeType,
      title: modalT.debtReliefTitle,
      titleAr: 'فرج من الدين',
      description: modalT.debtReliefDescription,
      icon: '💎',
      color: 'teal',
    },
    {
      type: 'DIVINE_NAME' as ChallengeType,
      title: modalT.divineNameTitle,
      titleAr: 'اسم إلهي',
      description: modalT.divineNameDescription,
      icon: '✨',
      color: 'purple',
    },
    {
      type: 'CUSTOM' as ChallengeType,
      title: modalT.customTitle,
      titleAr: 'ورد مخصص',
      description: modalT.customDescription,
      icon: '📿',
      color: 'slate',
    },
  ];

  // ─── Handle type selection ───
  const handleTypeSelect = (type: ChallengeType) => {
    switch (type) {
      case 'SALAWAT':
        setStep('CONFIGURE_SALAWAT');
        break;
      case 'DIVINE_NAME':
        setStep('CONFIGURE_DIVINE_NAME');
        break;
      case 'PROPHETIC_NAMES':
        setStep('CONFIGURE_PROPHETIC_NAMES');
        break;
      case 'DEBT_RELIEF':
        setStep('CONFIGURE_DEBT_RELIEF');
        break;
      case 'CUSTOM':
        setStep('CONFIGURE_CUSTOM');
        break;
    }
  };

  // ─── Handle Ṣalawāt add ───
  const handleAddSalawat = () => {
    // Check for duplicate before adding
    if (isDuplicate('SALAWAT', selectedSalawat.arabicText)) {
      return; // Don't add duplicate
    }
    const dailyTarget = selectedSalawat.recommendedDaily;
    onAdd('SALAWAT', {
      title: getSalawatTitle(selectedSalawat),
      arabicText: selectedSalawat.arabicText,
      transliteration: selectedSalawat.transliteration,
      meaning: getSalawatMeaning(selectedSalawat),
      dailyTarget: dailyTarget,
      totalTarget: dailyTarget * 30,
      quickAddPresets: selectedSalawat.quickAddPresets,
    });
    handleClose();
  };

  // ─── Handle Divine Name add ───
  const handleAddDivineName = () => {
    // Check for duplicate before adding
    if (isDuplicate('DIVINE_NAME', selectedDivineName.arabicName)) {
      return; // Don't add duplicate
    }
    onAdd('DIVINE_NAME', {
      title: selectedDivineName.transliteration,
      arabicText: selectedDivineName.arabicName,
      transliteration: selectedDivineName.transliteration,
      meaning: getDivineNameMeaning(selectedDivineName),
      dailyTarget: 500,
      totalTarget: 15000,
      quickAddPresets: [33, 99, 100, 500],
    });
    handleClose();
  };

  // ─── Handle Custom add ───
  const handleAddCustom = () => {
    const daily = parseInt(customDaily, 10) || 100;
    onAdd('CUSTOM', {
      title: customTitle || modalT.customWird,
      arabicText: customArabic || 'ذكر',
      transliteration: customTranslit || 'dhikr',
      dailyTarget: daily,
      totalTarget: daily * 30,
      quickAddPresets: DEFAULT_QUICK_ADD_PRESETS,
    });
    handleClose();
  };

  // ─── Handle 201 Prophetic Names add ───
  const handleAddPropheticNames = () => {
    onAdd('PROPHETIC_NAMES', {
      title: language === 'fr' ? RIZQ_PRACTICE_INFO.titleFr : RIZQ_PRACTICE_INFO.title,
      arabicText: 'أسماء النبي ﷺ',
      transliteration: 'Asmāʾ an-Nabī ﷺ',
      meaning: language === 'fr' ? RIZQ_PRACTICE_INFO.descriptionFr : RIZQ_PRACTICE_INFO.description,
      dailyTarget: 1, // 1 session per day (morning)
      totalTarget: 7, // 7 days × 1 session
      quickAddPresets: [1],
    });
    handleClose();
  };

  // ─── Handle Debt Relief Wird add ───
  const handleAddDebtRelief = () => {
    onAdd('DEBT_RELIEF', {
      title: language === 'fr' ? DEBT_RELIEF_PRACTICE_INFO.titleFr : DEBT_RELIEF_PRACTICE_INFO.title,
      arabicText: 'وَمَا ذَٰلِكَ عَلَى اللهِ بِعَزِيزٍ',
      transliteration: 'Wamā dhālika ʿalā llāhi bi-ʿAzīzin',
      meaning: language === 'fr' ? DEBT_RELIEF_PRACTICE_INFO.descriptionFr : DEBT_RELIEF_PRACTICE_INFO.description,
      dailyTarget: 1000,
      totalTarget: 30000, // 1000 × 30 days
      quickAddPresets: [100, 250, 500, 1000],
    });
    handleClose();
  };

  // ─── Modal content based on step ───
  const renderContent = () => {
    switch (step) {
      case 'SELECT_TYPE':
        return (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              {modalT.title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {modalT.subtitle}
            </p>
            
            <div className="space-y-2 pt-2">
              {challengeTypes.map((ct) => {
                const isTypeDuplicate = isDuplicate(ct.type);
                return (
                  <button
                    key={ct.type}
                    onClick={() => !isTypeDuplicate && handleTypeSelect(ct.type)}
                    disabled={isTypeDuplicate}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all group text-left ${
                      isTypeDuplicate
                        ? 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 opacity-60 cursor-not-allowed'
                        : 'featured' in ct && ct.featured
                        ? 'border-amber-300 dark:border-amber-600 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 hover:border-amber-400 dark:hover:border-amber-500'
                        : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-amber-300 dark:hover:border-amber-600 hover:bg-amber-50/50 dark:hover:bg-amber-900/20'
                    }`}
                  >
                    <span className="text-2xl">{ct.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="font-semibold text-slate-900 dark:text-slate-100">
                          {ct.title}
                        </span>
                        <span className="text-sm font-arabic text-slate-400 dark:text-slate-500">
                          {ct.titleAr}
                        </span>
                        {'featured' in ct && ct.featured && !isTypeDuplicate && (
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-amber-200 dark:bg-amber-700/50 text-amber-800 dark:text-amber-200 text-xs font-medium">
                            <Star className="w-3 h-3" />
                            {modalT.special}
                          </span>
                        )}
                        {isTypeDuplicate && (
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs font-medium">
                            {modalT.alreadyAdded}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                        {ct.description}
                      </p>
                    </div>
                    {!isTypeDuplicate && (
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 'CONFIGURE_SALAWAT':
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setStep('SELECT_TYPE')}
                className="text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                {modalT.back}
              </button>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {modalT.chooseSalawat}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                {modalT.tapToPreview}
              </p>
            </div>

            <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
              {SALAWAT_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => handleSalawatSelect(preset)}
                  className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-emerald-400 dark:hover:border-emerald-600 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 transition-all text-left group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        {getSalawatTitle(preset)}
                      </h4>
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-0.5">
                        {getSalawatTradition(preset)}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                  </div>
                  
                  <p className="text-base font-arabic text-slate-700 dark:text-slate-300 mt-3 line-clamp-2" dir="rtl">
                    {preset.arabicText.split('\n')[0]}
                  </p>
                  
                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100 dark:border-slate-700">
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {modalT.recommended} {preset.recommendedDaily}/{modalT.perDay}
                    </span>
                    <span className="text-xs text-emerald-600 dark:text-emerald-400">
                      {modalT.viewFullText}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 'PREVIEW_SALAWAT':
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setStep('CONFIGURE_SALAWAT')}
                className="text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                {modalT.back}
              </button>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {getSalawatTitle(selectedSalawat)}
              </h3>
              <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-0.5">
                {getSalawatTradition(selectedSalawat)}
              </p>
            </div>

            <div className="max-h-[50vh] overflow-y-auto space-y-4">
              {/* Full Arabic text */}
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-4">
                <p className="text-xl font-arabic text-center text-emerald-900 dark:text-emerald-100 leading-loose whitespace-pre-line" dir="rtl">
                  {selectedSalawat.arabicText}
                </p>
              </div>

              {/* Transliteration */}
              <div className="space-y-1">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  {modalT.transliteration}
                </p>
                <p className="text-sm italic text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                  {selectedSalawat.transliteration}
                </p>
              </div>

              {/* Collapsible meaning */}
              <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => setShowMeaning(!showMeaning)}
                  className="w-full flex items-center justify-between p-3 text-left hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {modalT.showMeaning}
                  </span>
                  {showMeaning ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>
                {showMeaning && (
                  <div className="p-3 pt-0 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {getSalawatMeaning(selectedSalawat)}
                  </div>
                )}
              </div>

              {/* Note */}
              <p className="text-sm italic text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
                {getSalawatNote(selectedSalawat)}
              </p>

              {/* Recommended daily */}
              <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
                <span>{modalT.recommendedDailyTarget}</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  {selectedSalawat.recommendedDaily}
                </span>
              </div>
            </div>

            <button
              onClick={handleAddSalawat}
              disabled={isDuplicate('SALAWAT', selectedSalawat.arabicText)}
              className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                isDuplicate('SALAWAT', selectedSalawat.arabicText)
                  ? 'bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-400 cursor-not-allowed'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white'
              }`}
            >
              {isDuplicate('SALAWAT', selectedSalawat.arabicText)
                ? modalT.alreadyAddedButton
                : modalT.selectThisSalawat
              }
            </button>
          </div>
        );

      case 'CONFIGURE_DIVINE_NAME':
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setStep('SELECT_TYPE')}
                className="text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              >
                ← {modalT.back}
              </button>
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              {modalT.chooseDivineName}
            </h3>

            <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
              {DIVINE_NAME_OPTIONS.map((name) => (
                <button
                  key={name.id}
                  onClick={() => setSelectedDivineName(name)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedDivineName.id === name.id
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                      : 'border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600'
                  }`}
                >
                  <p className="text-xl font-arabic text-slate-800 dark:text-slate-200" dir="rtl">
                    {name.arabicName}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {name.transliteration}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {getDivineNameMeaning(name)}
                  </p>
                </button>
              ))}
            </div>

            <button
              onClick={handleAddDivineName}
              className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-colors"
            >
              {modalT.addDivineName}
            </button>
          </div>
        );

      case 'CONFIGURE_CUSTOM':
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setStep('SELECT_TYPE')}
                className="text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              >
                ← {modalT.back}
              </button>
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              {modalT.customWird}
            </h3>

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {modalT.titleLabel}
                </label>
                <input
                  type="text"
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  placeholder={modalT.titlePlaceholder}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {modalT.arabicText}
                </label>
                <input
                  type="text"
                  value={customArabic}
                  onChange={(e) => setCustomArabic(e.target.value)}
                  placeholder="سُبْحَانَ اللهِ"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 font-arabic text-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  dir="rtl"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {modalT.transliteration}
                </label>
                <input
                  type="text"
                  value={customTranslit}
                  onChange={(e) => setCustomTranslit(e.target.value)}
                  placeholder="Subḥān Allāh"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {modalT.dailyTarget}
                </label>
                <input
                  type="number"
                  value={customDaily}
                  onChange={(e) => setCustomDaily(e.target.value)}
                  placeholder="100"
                  min="1"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {`${modalT.ramadanTarget}: ${(parseInt(customDaily, 10) || 100) * 30}`}
                </p>
              </div>
            </div>

            <button
              onClick={handleAddCustom}
              disabled={!customArabic.trim()}
              className="w-full py-3 rounded-xl bg-slate-700 hover:bg-slate-800 disabled:bg-slate-300 dark:disabled:bg-slate-600 text-white font-semibold transition-colors disabled:cursor-not-allowed"
            >
              {modalT.addCustomWird}
            </button>
          </div>
        );

      case 'CONFIGURE_PROPHETIC_NAMES':
        return (
          <div className="space-y-3">
            {/* Header row */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setStep('SELECT_TYPE')}
                className="text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                {modalT.back}
              </button>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-medium">
                <Star className="w-3 h-3" />
                {propheticT.specialPractice}
              </span>
            </div>
            
            {/* Title */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {language === 'fr' ? RIZQ_PRACTICE_INFO.titleFr : RIZQ_PRACTICE_INFO.title}
              </h3>
              <p className="text-sm text-amber-600 dark:text-amber-400 font-medium">
                {language === 'fr' ? RIZQ_PRACTICE_INFO.subtitleFr : RIZQ_PRACTICE_INFO.subtitle}
              </p>
            </div>

            {/* Compact info card */}
            <div className="p-3 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800/50">
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                {language === 'fr' ? RIZQ_PRACTICE_INFO.descriptionFr : RIZQ_PRACTICE_INFO.description}
              </p>
              
              {/* Compact stats row */}
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600 dark:text-slate-400">
                <span>⏱ <strong>7 {propheticT.days}</strong></span>
                <span>🌅 <strong>{propheticT.morning}</strong></span>
                <span>⏰ <strong>25-35 min</strong></span>
              </div>
            </div>

            {/* Compact Practice steps */}
            <div className="text-sm text-slate-600 dark:text-slate-400">
              <span className="font-medium text-slate-700 dark:text-slate-300">{modalT.steps}</span>{' '}
              <span className="font-arabic">يَا جَامِعُ</span> 180× → 201 {modalT.names} → Duʿāʾ
            </div>

            {/* Source & Authorization - compact */}
            <div className="text-xs text-slate-500 dark:text-slate-500">
              <p><strong>{propheticT.source}:</strong> {RIZQ_PRACTICE_INFO.tradition}</p>
              <p><strong>{propheticT.authorizationLabel}:</strong> {language === 'fr' ? RIZQ_PRACTICE_INFO.authorizationFr : RIZQ_PRACTICE_INFO.authorization}</p>
            </div>

            {/* Promise */}
            <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50">
              <p className="text-sm text-emerald-700 dark:text-emerald-300 italic text-center">
                "{language === 'fr' ? RIZQ_PRACTICE_INFO.promiseFr : RIZQ_PRACTICE_INFO.promise}"
              </p>
            </div>

            <button
              onClick={handleAddPropheticNames}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold transition-all shadow-lg shadow-amber-500/25"
            >
              {propheticT.start7Day}
            </button>
          </div>
        );

      case 'CONFIGURE_DEBT_RELIEF':
        return (
          <div className="space-y-3">
            {/* Header row */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setStep('SELECT_TYPE')}
                className="text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                {modalT.back}
              </button>
            </div>
            
            {/* Title */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {language === 'fr' ? DEBT_RELIEF_PRACTICE_INFO.titleFr : DEBT_RELIEF_PRACTICE_INFO.title}
              </h3>
              <p className="text-sm text-teal-600 dark:text-teal-400 font-medium">
                {language === 'fr' ? DEBT_RELIEF_PRACTICE_INFO.subtitleFr : DEBT_RELIEF_PRACTICE_INFO.subtitle}
              </p>
            </div>

            {/* Verse display */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 border border-teal-200 dark:border-teal-800/50 text-center">
              <p className="text-2xl font-arabic text-teal-900 dark:text-teal-100 mb-2 leading-loose">
                وَمَا ذَٰلِكَ عَلَى اللهِ بِعَزِيزٍ
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 italic mb-1">
                Wamā dhālika ʿalā llāhi bi-ʿAzīzin
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                "{debtReliefT.meaning}"
              </p>
            </div>

            {/* Description */}
            <div className="p-3 rounded-xl bg-white dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600">
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
                {language === 'fr' ? DEBT_RELIEF_PRACTICE_INFO.descriptionFr : DEBT_RELIEF_PRACTICE_INFO.description}
              </p>
              
              {/* Compact stats row */}
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-600">
                <span>📖 <strong>{DEBT_RELIEF_PRACTICE_INFO.source}</strong></span>
                <span>🕌 <strong>{language === 'fr' ? DEBT_RELIEF_PRACTICE_INFO.timingFr : DEBT_RELIEF_PRACTICE_INFO.timing}</strong></span>
                <span>⏰ <strong>{DEBT_RELIEF_PRACTICE_INFO.estimatedTime}</strong></span>
              </div>
            </div>

            {/* Purpose */}
            <div className="p-3 rounded-lg bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800/50">
              <p className="text-xs font-medium text-teal-700 dark:text-teal-300 mb-1">
                {modalT.spiritualPurpose}
              </p>
              <p className="text-sm text-teal-700 dark:text-teal-300">
                {language === 'fr' ? DEBT_RELIEF_PRACTICE_INFO.purposeFr : DEBT_RELIEF_PRACTICE_INFO.purpose}
              </p>
            </div>

            {/* Meaning */}
            <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              <p className="italic">
                {language === 'fr' ? DEBT_RELIEF_PRACTICE_INFO.spiritualMeaning.fr : DEBT_RELIEF_PRACTICE_INFO.spiritualMeaning.en}
              </p>
            </div>

            <button
              onClick={handleAddDebtRelief}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold transition-all shadow-lg shadow-teal-500/25"
            >
              {debtReliefT.startDailyWird}
            </button>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md max-h-[85vh] overflow-y-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors z-10"
          aria-label={commonT.close}
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default AddChallengeModal;
