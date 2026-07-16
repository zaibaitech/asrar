import React, { useState, useEffect } from 'react';
import { Keyboard, Info } from 'lucide-react';
import { useProfile } from '../hooks/useProfile';
import { COMPAT_THEME } from '../constants/compatibilityTheme';
import type { DivineName } from '../data/divine-names';
import NameAutocomplete from './NameAutocomplete';
import { ArabicKeyboard } from './ArabicKeyboard';
import { DivineNamePicker } from './DivineNamePicker';

export type DivineNameSubMode = 'pick' | 'auto';

interface DivineNameInputFormProps {
  onCalculate: (
    personName: string,
    personArabic: string,
    subMode: DivineNameSubMode,
    selectedDivineName: DivineName | null
  ) => void;
  language?: 'en' | 'fr' | 'ar';
  isLoading?: boolean;
}

export function DivineNameInputForm({ onCalculate, language = 'en', isLoading = false }: DivineNameInputFormProps) {
  const isFrench = language === 'fr';
  const { profile } = useProfile();
  const [personName, setPersonName] = useState('');
  const [personArabic, setPersonArabic] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [subMode, setSubMode] = useState<DivineNameSubMode>('auto');
  const [selectedDivineName, setSelectedDivineName] = useState<DivineName | null>(null);

  useEffect(() => {
    if (profile && !personArabic && profile.full_name) {
      setPersonArabic(profile.full_name);
    }
  }, [profile]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!personArabic.trim()) {
      alert(isFrench ? 'Veuillez entrer votre nom arabe' : 'Please enter your Arabic name');
      return;
    }
    if (subMode === 'pick' && !selectedDivineName) {
      alert(isFrench ? 'Veuillez choisir un Nom Divin' : 'Please choose a Divine Name');
      return;
    }
    onCalculate(personName || personArabic, personArabic, subMode, subMode === 'pick' ? selectedDivineName : null);
  };

  return (
    <div className="rounded-3xl overflow-hidden" style={{ background: COMPAT_THEME.cardBg, border: `1px solid ${COMPAT_THEME.cardBorder}`, boxShadow: '0 10px 40px rgba(49,46,129,.06)' }}>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto px-6 py-14" style={{ color: COMPAT_THEME.ink }}>

        <div className="text-center mb-10">
          <div className="font-technical text-[11px] tracking-[4px] font-bold" style={{ color: COMPAT_THEME.indigo }}>
            {isFrench ? 'ASRĀR · COMPATIBILITÉ' : 'ASRĀR · COMPATIBILITY'}
          </div>
          <h1 className="font-display font-semibold text-4xl mt-3.5 leading-tight">
            {isFrench ? 'Vous et un Nom Divin' : 'You and a Divine Name'}
          </h1>
          <p className="text-sm mt-2.5" style={{ color: COMPAT_THEME.muted }}>
            {isFrench
              ? "Découvrez votre résonance spirituelle avec les 99 Noms d'Allah"
              : 'Discover your spiritual resonance with the 99 Names of Allah'}
          </p>
        </div>

        {/* Person's name */}
        <div className="rounded-2xl p-6 space-y-4 mb-6" style={{ background: COMPAT_THEME.surface, border: `1px solid ${COMPAT_THEME.surfaceBorder}` }}>
          <h2 className="font-technical text-[11px] tracking-[3px] uppercase font-bold" style={{ color: COMPAT_THEME.indigo }}>
            {isFrench ? 'Votre Nom' : 'Your Name'}
          </h2>

          <div>
            <label className="block text-xs mb-1.5" style={{ color: COMPAT_THEME.muted }}>
              {isFrench ? 'Rechercher par Nom Latin' : 'Search by Latin Name'}
              <span className="ml-1" style={{ color: COMPAT_THEME.muted }}>{isFrench ? '(optionnel)' : '(optional)'}</span>
            </label>
            <NameAutocomplete
              value={personName}
              onChange={setPersonName}
              onArabicSelect={(arabic, latin) => { setPersonArabic(arabic); setPersonName(latin); }}
              placeholder={isFrench ? 'Tapez pour rechercher : Muhammad, Fatima...' : 'Type to search: Muhammad, Fatima...'}
              showHelper={false}
            />
            <p className="text-xs mt-1.5 flex items-center gap-1" style={{ color: COMPAT_THEME.muted }}>
              <Info className="w-3 h-3" />
              {isFrench ? 'Suggestions de la base de données en temps réel' : 'Database-backed suggestions as you type'}
            </p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs" style={{ color: COMPAT_THEME.muted }}>
                {isFrench ? 'Nom Arabe' : 'Arabic Name'} <span style={{ color: COMPAT_THEME.danger }}>*</span>
              </label>
              <button
                type="button"
                onClick={() => setShowKeyboard(v => !v)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                style={showKeyboard
                  ? { background: COMPAT_THEME.indigo, color: '#fff' }
                  : { background: COMPAT_THEME.cardBg, border: `1px solid ${COMPAT_THEME.surfaceBorder}`, color: COMPAT_THEME.muted }}
              >
                <Keyboard className="w-3.5 h-3.5" />
                {showKeyboard ? (isFrench ? 'Masquer Clavier' : 'Hide Keyboard') : (isFrench ? 'Afficher Clavier' : 'Show Keyboard')}
              </button>
            </div>
            <input
              type="text"
              value={personArabic}
              onChange={e => { setPersonArabic(e.target.value); setPersonName(''); }}
              placeholder="محمد"
              dir="rtl"
              lang="ar"
              required
              className="w-full px-4 py-2.5 rounded-lg font-arabic text-xl focus:outline-none focus:ring-1"
              style={{ background: '#FFFFFF', border: `1px solid ${COMPAT_THEME.line}`, color: COMPAT_THEME.ink }}
            />
            {showKeyboard && (
              <div className="mt-3">
                <ArabicKeyboard
                  onKeyPress={char => setPersonArabic(prev => prev + char)}
                  onBackspace={() => setPersonArabic(prev => prev.slice(0, -1))}
                  onSpace={() => setPersonArabic(prev => prev + ' ')}
                  onClose={() => setShowKeyboard(false)}
                />
              </div>
            )}
          </div>
        </div>

        {/* Sub-mode toggle */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex p-1 rounded-xl" style={{ background: COMPAT_THEME.surface, border: `1px solid ${COMPAT_THEME.surfaceBorder}` }}>
            <button
              type="button"
              onClick={() => setSubMode('auto')}
              className="px-4 py-2 rounded-lg font-technical text-sm font-semibold transition-all"
              style={subMode === 'auto' ? { background: COMPAT_THEME.indigo, color: '#fff' } : { color: COMPAT_THEME.muted }}
            >
              {isFrench ? 'Trouver Mes Meilleurs Noms' : 'Find My Best Names'}
            </button>
            <button
              type="button"
              onClick={() => setSubMode('pick')}
              className="px-4 py-2 rounded-lg font-technical text-sm font-semibold transition-all"
              style={subMode === 'pick' ? { background: COMPAT_THEME.indigo, color: '#fff' } : { color: COMPAT_THEME.muted }}
            >
              {isFrench ? 'Choisir un Nom' : 'Pick a Name'}
            </button>
          </div>
        </div>

        {subMode === 'pick' && (
          <div className="rounded-2xl p-6 mb-6" style={{ background: COMPAT_THEME.surface, border: `1px solid ${COMPAT_THEME.surfaceBorder}` }}>
            <h2 className="font-technical text-[11px] tracking-[3px] uppercase font-bold mb-3" style={{ color: COMPAT_THEME.indigo }}>
              {isFrench ? 'Choisissez un Nom Divin' : 'Choose a Divine Name'}
            </h2>
            <DivineNamePicker selected={selectedDivineName} onSelect={setSelectedDivineName} language={language} />
          </div>
        )}

        {subMode === 'auto' && (
          <p className="text-xs text-center mb-6 leading-relaxed" style={{ color: COMPAT_THEME.muted }}>
            {isFrench
              ? "Nous calculerons votre résonance avec les 99 Noms et vous montrerons ceux qui résonnent le plus favorablement."
              : "We'll calculate your resonance with all 99 Names and show you the ones that resonate most favorably."}
          </p>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-technical font-bold text-sm tracking-wide transition-opacity disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90"
          style={{ background: COMPAT_THEME.ctaGradient, color: '#fff' }}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              {isFrench ? 'Calcul en cours...' : 'Calculating...'}
            </>
          ) : (
            isFrench ? 'Calculer la Résonance' : 'Calculate Resonance'
          )}
        </button>

      </form>
    </div>
  );
}
