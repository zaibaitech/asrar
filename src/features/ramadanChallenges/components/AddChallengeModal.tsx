/**
 * Add Challenge Modal Component
 * ==============================
 * Modal for adding new dhikr challenges:
 * - Ṣalawāt with variant selection
 * - Divine Name selection
 * - Custom wird entry
 */

'use client';

import React, { useState } from 'react';
import { X, ChevronRight } from 'lucide-react';
import type { ChallengeType, SalawatVariant, DivineNameOption } from '../types';
import { SALAWAT_VARIANTS, DIVINE_NAME_OPTIONS, DEFAULT_QUICK_ADD_PRESETS } from '../types';

// ─── Types ───────────────────────────────────────────────────────────────────────

interface AddChallengeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (type: ChallengeType, config: ChallengeConfig) => void;
  language?: 'en' | 'fr';
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

type ModalStep = 'SELECT_TYPE' | 'CONFIGURE_SALAWAT' | 'CONFIGURE_DIVINE_NAME' | 'CONFIGURE_CUSTOM';

// ─── Component ───────────────────────────────────────────────────────────────────

export function AddChallengeModal({ isOpen, onClose, onAdd, language = 'en' }: AddChallengeModalProps) {
  const [step, setStep] = useState<ModalStep>('SELECT_TYPE');
  const [selectedSalawat, setSelectedSalawat] = useState<SalawatVariant>(SALAWAT_VARIANTS[0]);
  const [selectedDivineName, setSelectedDivineName] = useState<DivineNameOption>(DIVINE_NAME_OPTIONS[0]);
  
  // Custom wird state
  const [customTitle, setCustomTitle] = useState('');
  const [customArabic, setCustomArabic] = useState('');
  const [customTranslit, setCustomTranslit] = useState('');
  const [customDaily, setCustomDaily] = useState('100');

  if (!isOpen) return null;

  // ─── Reset modal state ───
  const handleClose = () => {
    setStep('SELECT_TYPE');
    setCustomTitle('');
    setCustomArabic('');
    setCustomTranslit('');
    setCustomDaily('100');
    onClose();
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
      case 'CUSTOM':
        setStep('CONFIGURE_CUSTOM');
        break;
    }
  };

  // ─── Handle Ṣalawāt add ───
  const handleAddSalawat = () => {
    onAdd('SALAWAT', {
      title: 'Ṣalawāt Challenge',
      arabicText: selectedSalawat.arabicText,
      transliteration: selectedSalawat.transliteration,
      meaning: selectedSalawat.meaning,
      dailyTarget: 1000,
      ramadanTarget: 30000,
      quickAddPresets: [10, 33, 100, 500],
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
                  className="w-full flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-amber-300 dark:hover:border-amber-600 hover:bg-amber-50/50 dark:hover:bg-amber-900/20 transition-all group text-left"
                >
                  <span className="text-2xl">{ct.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="font-semibold text-slate-900 dark:text-slate-100">
                        {ct.title}
                      </span>
                      <span className="text-sm font-arabic text-slate-400 dark:text-slate-500">
                        {ct.titleAr}
                      </span>
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
                className="text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              >
                ← {language === 'fr' ? 'Retour' : 'Back'}
              </button>
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              {language === 'fr' ? 'Choisir une Ṣalawāt' : 'Choose Ṣalawāt'}
            </h3>

            <div className="space-y-2">
              {SALAWAT_VARIANTS.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedSalawat(variant)}
                  className={`w-full p-4 rounded-xl border text-left transition-all ${
                    selectedSalawat.id === variant.id
                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                      : 'border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-600'
                  }`}
                >
                  <p className="text-lg font-arabic text-slate-800 dark:text-slate-200" dir="rtl">
                    {variant.arabicText}
                  </p>
                  <p className="text-sm italic text-slate-600 dark:text-slate-400 mt-1">
                    {variant.transliteration}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {variant.meaning}
                  </p>
                </button>
              ))}
            </div>

            <button
              onClick={handleAddSalawat}
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors"
            >
              {language === 'fr' ? 'Ajouter Ṣalawāt' : 'Add Ṣalawāt Challenge'}
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
