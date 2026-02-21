/**
 * Add Challenge Modal Component
 * ==============================
 * Modal for adding new dhikr challenges:
 * - Ṣalawāt with extended preset selection
 * - Divine Name selection
 * - 201 Holy Names of Prophet ﷺ (Rizq Practice)
 * - Custom wird entry
 */

'use client';

import React, { useState, useEffect } from 'react';
import { X, ChevronRight, ChevronLeft, ChevronDown, ChevronUp, Star } from 'lucide-react';
import type { ChallengeType, SalawatPreset, DivineNameOption } from '../types';
import { SALAWAT_PRESETS, DIVINE_NAME_OPTIONS, DEFAULT_QUICK_ADD_PRESETS } from '../types';
import { RIZQ_PRACTICE_INFO } from '../propheticNames201';

// ─── Types ───────────────────────────────────────────────────────────────────────

interface AddChallengeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (type: ChallengeType, config: ChallengeConfig) => void;
  language?: 'en' | 'fr';
  initialStep?: ModalStep;
}

interface ChallengeConfig {
  title: string;
  arabicText: string;
  transliteration: string;
  meaning?: string;
  dailyTarget: number;
  ramadanTarget: number;
  quickAddPresets?: number[];
}

type ModalStep = 'SELECT_TYPE' | 'CONFIGURE_SALAWAT' | 'PREVIEW_SALAWAT' | 'CONFIGURE_DIVINE_NAME' | 'CONFIGURE_CUSTOM' | 'CONFIGURE_PROPHETIC_NAMES';

export type { ModalStep as AddChallengeModalStep };

// ─── Component ───────────────────────────────────────────────────────────────────

export function AddChallengeModal({ isOpen, onClose, onAdd, language = 'en', initialStep = 'SELECT_TYPE' }: AddChallengeModalProps) {
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
      title: language === 'fr' ? 'Ṣalawāt' : 'Ṣalawāt',
      titleAr: 'صلوات',
      description: language === 'fr' 
        ? 'Bénédictions sur le Prophète ﷺ'
        : 'Blessings upon the Prophet ﷺ',
      icon: '🌹',
      color: 'emerald',
    },
    {
      type: 'PROPHETIC_NAMES' as ChallengeType,
      title: language === 'fr' ? '201 Noms Saints' : '201 Holy Names',
      titleAr: 'أسماء النبي ﷺ',
      description: language === 'fr'
        ? 'Pratique Rizq · 7 jours le matin'
        : 'Rizq Abundance · 7-Day Morning Practice',
      icon: '⭐',
      color: 'amber',
      featured: true,
    },
    {
      type: 'DIVINE_NAME' as ChallengeType,
      title: language === 'fr' ? 'Nom Divin' : 'Divine Name',
      titleAr: 'اسم إلهي',
      description: language === 'fr'
        ? "Invocation des Noms d'Allah"
        : 'Invocation of Allah\'s Names',
      icon: '✨',
      color: 'purple',
    },
    {
      type: 'CUSTOM' as ChallengeType,
      title: language === 'fr' ? 'Wird Personnalisé' : 'Custom Wird',
      titleAr: 'ورد مخصص',
      description: language === 'fr'
        ? 'Votre propre pratique de dhikr'
        : 'Your own dhikr practice',
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
      case 'CUSTOM':
        setStep('CONFIGURE_CUSTOM');
        break;
    }
  };

  // ─── Handle Ṣalawāt add ───
  const handleAddSalawat = () => {
    const dailyTarget = selectedSalawat.recommendedDaily;
    onAdd('SALAWAT', {
      title: selectedSalawat.title,
      arabicText: selectedSalawat.arabicText,
      transliteration: selectedSalawat.transliteration,
      meaning: selectedSalawat.meaning,
      dailyTarget: dailyTarget,
      ramadanTarget: dailyTarget * 30,
      quickAddPresets: selectedSalawat.quickAddPresets,
    });
    handleClose();
  };

  // ─── Handle Divine Name add ───
  const handleAddDivineName = () => {
    onAdd('DIVINE_NAME', {
      title: `${selectedDivineName.transliteration} Challenge`,
      arabicText: selectedDivineName.arabicName,
      transliteration: selectedDivineName.transliteration,
      meaning: selectedDivineName.meaning,
      dailyTarget: 500,
      ramadanTarget: 15000,
      quickAddPresets: [33, 99, 100, 500],
    });
    handleClose();
  };

  // ─── Handle Custom add ───
  const handleAddCustom = () => {
    const daily = parseInt(customDaily, 10) || 100;
    onAdd('CUSTOM', {
      title: customTitle || 'Custom Wird',
      arabicText: customArabic || 'ذكر',
      transliteration: customTranslit || 'dhikr',
      dailyTarget: daily,
      ramadanTarget: daily * 30,
      quickAddPresets: DEFAULT_QUICK_ADD_PRESETS,
    });
    handleClose();
  };

  // ─── Handle 201 Prophetic Names add ───
  const handleAddPropheticNames = () => {
    onAdd('PROPHETIC_NAMES', {
      title: RIZQ_PRACTICE_INFO.title,
      arabicText: 'أسماء النبي ﷺ',
      transliteration: 'Asmāʾ an-Nabī ﷺ',
      meaning: RIZQ_PRACTICE_INFO.description,
      dailyTarget: 1, // 1 session per day (morning)
      ramadanTarget: 7, // 7 days × 1 session
      quickAddPresets: [1],
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
              {language === 'fr' ? 'Ajouter un défi' : 'Add Challenge'}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {language === 'fr' 
                ? 'Choisissez un type de défi dhikr à suivre'
                : 'Choose a type of dhikr challenge to track'
              }
            </p>
            
            <div className="space-y-2 pt-2">
              {challengeTypes.map((ct) => (
                <button
                  key={ct.type}
                  onClick={() => handleTypeSelect(ct.type)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all group text-left ${
                    'featured' in ct && ct.featured
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
                      {'featured' in ct && ct.featured && (
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-amber-200 dark:bg-amber-700/50 text-amber-800 dark:text-amber-200 text-xs font-medium">
                          <Star className="w-3 h-3" />
                          {language === 'fr' ? 'Spécial' : 'Special'}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                      {ct.description}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
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
                {language === 'fr' ? 'Retour' : 'Back'}
              </button>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {language === 'fr' ? 'Choisir une Ṣalawāt' : 'Choose Your Ṣalawāt'}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                {language === 'fr' 
                  ? 'Touchez pour voir le texte complet'
                  : 'Tap to preview full text'
                }
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
                        {preset.title}
                      </h4>
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-0.5">
                        {preset.tradition}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                  </div>
                  
                  <p className="text-base font-arabic text-slate-700 dark:text-slate-300 mt-3 line-clamp-2" dir="rtl">
                    {preset.arabicText.split('\n')[0]}
                  </p>
                  
                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100 dark:border-slate-700">
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {language === 'fr' ? 'Recommandé:' : 'Recommended:'} {preset.recommendedDaily}/{language === 'fr' ? 'jour' : 'day'}
                    </span>
                    <span className="text-xs text-emerald-600 dark:text-emerald-400">
                      {language === 'fr' ? 'Voir texte complet →' : 'View full text →'}
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
                {language === 'fr' ? 'Retour' : 'Back'}
              </button>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {selectedSalawat.title}
              </h3>
              <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-0.5">
                {selectedSalawat.tradition}
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
                  {language === 'fr' ? 'Translittération' : 'Transliteration'}
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
                    {language === 'fr' ? 'Afficher la signification' : 'Show meaning'}
                  </span>
                  {showMeaning ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>
                {showMeaning && (
                  <div className="p-3 pt-0 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {selectedSalawat.meaning}
                  </div>
                )}
              </div>

              {/* Note */}
              <p className="text-sm italic text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
                {selectedSalawat.note}
              </p>

              {/* Recommended daily */}
              <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
                <span>{language === 'fr' ? 'Cible quotidienne recommandée:' : 'Recommended daily target:'}</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  {selectedSalawat.recommendedDaily}
                </span>
              </div>
            </div>

            <button
              onClick={handleAddSalawat}
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors"
            >
              {language === 'fr' ? 'Choisir cette Ṣalawāt' : 'Select this Ṣalawāt'}
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
                ← {language === 'fr' ? 'Retour' : 'Back'}
              </button>
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              {language === 'fr' ? 'Choisir un Nom Divin' : 'Choose Divine Name'}
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
                    {name.meaning}
                  </p>
                </button>
              ))}
            </div>

            <button
              onClick={handleAddDivineName}
              className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-colors"
            >
              {language === 'fr' ? 'Ajouter ce Nom' : 'Add Divine Name Challenge'}
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
                ← {language === 'fr' ? 'Retour' : 'Back'}
              </button>
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              {language === 'fr' ? 'Wird Personnalisé' : 'Custom Wird'}
            </h3>

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {language === 'fr' ? 'Titre' : 'Title'}
                </label>
                <input
                  type="text"
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  placeholder={language === 'fr' ? 'Mon Wird' : 'My Wird'}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {language === 'fr' ? 'Texte Arabe' : 'Arabic Text'}
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
                  {language === 'fr' ? 'Translittération' : 'Transliteration'}
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
                  {language === 'fr' ? 'Objectif quotidien' : 'Daily Target'}
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
                  {language === 'fr' 
                    ? `Objectif Ramadan: ${(parseInt(customDaily, 10) || 100) * 30}`
                    : `Ramadan target: ${(parseInt(customDaily, 10) || 100) * 30}`
                  }
                </p>
              </div>
            </div>

            <button
              onClick={handleAddCustom}
              disabled={!customArabic.trim()}
              className="w-full py-3 rounded-xl bg-slate-700 hover:bg-slate-800 disabled:bg-slate-300 dark:disabled:bg-slate-600 text-white font-semibold transition-colors disabled:cursor-not-allowed"
            >
              {language === 'fr' ? 'Ajouter le Wird' : 'Add Custom Wird'}
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
                {language === 'fr' ? 'Retour' : 'Back'}
              </button>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-medium">
                <Star className="w-3 h-3" />
                {language === 'fr' ? 'Pratique spéciale' : 'Special Practice'}
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
                <span>⏱ <strong>7 {language === 'fr' ? 'jours' : 'days'}</strong></span>
                <span>🌅 <strong>{language === 'fr' ? 'Matin' : 'Morning'}</strong></span>
                <span>⏰ <strong>25-35 min</strong></span>
              </div>
            </div>

            {/* Compact Practice steps */}
            <div className="text-sm text-slate-600 dark:text-slate-400">
              <span className="font-medium text-slate-700 dark:text-slate-300">{language === 'fr' ? 'Étapes:' : 'Steps:'}</span>{' '}
              <span className="font-arabic">يَا جَامِعُ</span> 180× → 201 {language === 'fr' ? 'Noms' : 'Names'} → Duʿāʾ
            </div>

            {/* Source & Authorization - compact */}
            <div className="text-xs text-slate-500 dark:text-slate-500">
              <p><strong>Source:</strong> {RIZQ_PRACTICE_INFO.tradition}</p>
              <p><strong>{language === 'fr' ? 'Autorisation:' : 'Authorization:'}</strong> {language === 'fr' ? RIZQ_PRACTICE_INFO.authorizationFr : RIZQ_PRACTICE_INFO.authorization}</p>
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
              {language === 'fr' ? 'Commencer le défi de 7 jours' : 'Start 7-Day Challenge'}
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
          aria-label="Close"
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
