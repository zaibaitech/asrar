import React, { useState, useEffect } from 'react';
import { Keyboard, Info } from 'lucide-react';
import { useProfile } from '../hooks/useProfile';
import { COMPAT_THEME } from '../constants/compatibilityTheme';
import NameAutocomplete from './NameAutocomplete';
import { ArabicKeyboard } from './ArabicKeyboard';

interface RelationshipInputFormProps {
  onCalculate: (
    person1Name: string,
    person1Arabic: string,
    person2Name: string,
    person2Arabic: string
  ) => void;
  language?: 'en' | 'fr' | 'ar';
  isLoading?: boolean;
}

export function RelationshipInputForm({ onCalculate, language = 'en', isLoading = false }: RelationshipInputFormProps) {
  const isFrench = language === 'fr';
  const { profile } = useProfile();
  const [person1Name, setPerson1Name] = useState('');
  const [person1Arabic, setPerson1Arabic] = useState('');
  const [person2Name, setPerson2Name] = useState('');
  const [person2Arabic, setPerson2Arabic] = useState('');
  const [showPerson1Keyboard, setShowPerson1Keyboard] = useState(false);
  const [showPerson2Keyboard, setShowPerson2Keyboard] = useState(false);

  useEffect(() => {
    if (profile) {
      if (!person1Arabic && profile.full_name) {
        setPerson1Arabic(profile.full_name);
      }
    }
  }, [profile]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!person1Arabic.trim() || !person2Arabic.trim()) {
      alert(isFrench
        ? 'Veuillez entrer les noms arabes pour les deux personnes'
        : 'Please enter Arabic names for both people');
      return;
    }
    onCalculate(
      person1Name || person1Arabic,
      person1Arabic,
      person2Name || person2Arabic,
      person2Arabic
    );
  };

  return (
    <div className="rounded-3xl overflow-hidden" style={{ background: COMPAT_THEME.cardBg, border: `1px solid ${COMPAT_THEME.cardBorder}`, boxShadow: '0 10px 40px rgba(49,46,129,.06)' }}>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto px-6 py-14" style={{ color: COMPAT_THEME.ink }}>

        <div className="text-center mb-10">
          <div className="font-technical text-[11px] tracking-[4px] font-bold" style={{ color: COMPAT_THEME.indigo }}>
            {isFrench ? 'ASRĀR · COMPATIBILITÉ' : 'ASRĀR · COMPATIBILITY'}
          </div>
          <h1 className="font-display font-semibold text-4xl mt-3.5 leading-tight">
            {isFrench ? 'Entrez Deux Noms' : 'Enter Two Names'}
          </h1>
          <p className="text-sm mt-2.5" style={{ color: COMPAT_THEME.muted }}>
            {isFrench
              ? 'Calculez la Connexion d’Âme selon la numérologie islamique traditionnelle'
              : 'Calculate the Soul Connection using traditional Islamic numerology'}
          </p>
        </div>

        <PersonCard
          label={isFrench ? 'Personne 1' : 'Person 1'}
          latinValue={person1Name}
          onLatinChange={setPerson1Name}
          onArabicSelect={(arabic, latin) => {
            setPerson1Arabic(arabic);
            setPerson1Name(latin);
          }}
          searchPlaceholder={isFrench ? 'Tapez pour rechercher : Muhammad, Ali, Hassan...' : 'Type to search: Muhammad, Ali, Hassan...'}
          arabicLabel={isFrench ? 'Nom Arabe' : 'Arabic Name'}
          arabicPlaceholder="أحمد"
          arabicValue={person1Arabic}
          onArabicChange={v => { setPerson1Arabic(v); setPerson1Name(''); }}
          showKeyboard={showPerson1Keyboard}
          onToggleKeyboard={() => setShowPerson1Keyboard(v => !v)}
          onKeyboardPress={char => setPerson1Arabic(prev => prev + char)}
          onKeyboardBackspace={() => setPerson1Arabic(prev => prev.slice(0, -1))}
          onKeyboardSpace={() => setPerson1Arabic(prev => prev + ' ')}
          isFrench={isFrench}
        />

        <div className="flex items-center justify-center my-6" aria-hidden="true">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-lg"
            style={{ background: COMPAT_THEME.surface, border: `1px solid ${COMPAT_THEME.surfaceBorder}`, color: COMPAT_THEME.indigo }}
          >
            ۞
          </div>
        </div>

        <PersonCard
          label={isFrench ? 'Personne 2' : 'Person 2'}
          latinValue={person2Name}
          onLatinChange={setPerson2Name}
          onArabicSelect={(arabic, latin) => {
            setPerson2Arabic(arabic);
            setPerson2Name(latin);
          }}
          searchPlaceholder={isFrench ? 'Tapez pour rechercher : Fatima, Aisha, Khadija...' : 'Type to search: Fatima, Aisha, Khadija...'}
          arabicLabel={isFrench ? 'Nom Arabe' : 'Arabic Name'}
          arabicPlaceholder="فاطمة"
          arabicValue={person2Arabic}
          onArabicChange={v => { setPerson2Arabic(v); setPerson2Name(''); }}
          showKeyboard={showPerson2Keyboard}
          onToggleKeyboard={() => setShowPerson2Keyboard(v => !v)}
          onKeyboardPress={char => setPerson2Arabic(prev => prev + char)}
          onKeyboardBackspace={() => setPerson2Arabic(prev => prev.slice(0, -1))}
          onKeyboardSpace={() => setPerson2Arabic(prev => prev + ' ')}
          isFrench={isFrench}
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 mt-8 py-3.5 rounded-xl font-technical font-bold text-sm tracking-wide transition-opacity disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90"
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
            isFrench ? 'Calculer la Connexion d’Âme' : 'Calculate Soul Connection'
          )}
        </button>

      </form>
    </div>
  );
}

interface PersonCardProps {
  label: string;
  latinValue: string;
  onLatinChange: (v: string) => void;
  onArabicSelect: (arabic: string, latin: string) => void;
  searchPlaceholder: string;
  arabicLabel: string;
  arabicPlaceholder: string;
  arabicValue: string;
  onArabicChange: (v: string) => void;
  showKeyboard: boolean;
  onToggleKeyboard: () => void;
  onKeyboardPress: (char: string) => void;
  onKeyboardBackspace: () => void;
  onKeyboardSpace: () => void;
  isFrench: boolean;
}

function PersonCard({
  label, latinValue, onLatinChange, onArabicSelect, searchPlaceholder,
  arabicLabel, arabicPlaceholder, arabicValue, onArabicChange,
  showKeyboard, onToggleKeyboard, onKeyboardPress, onKeyboardBackspace, onKeyboardSpace,
  isFrench,
}: PersonCardProps) {
  return (
    <div className="rounded-2xl p-6 space-y-4" style={{ background: COMPAT_THEME.surface, border: `1px solid ${COMPAT_THEME.surfaceBorder}` }}>
      <h2 className="font-technical text-[11px] tracking-[3px] uppercase font-bold" style={{ color: COMPAT_THEME.indigo }}>
        {label}
      </h2>

      <div>
        <label className="block text-xs mb-1.5" style={{ color: COMPAT_THEME.muted }}>
          {isFrench ? 'Rechercher par Nom Latin' : 'Search by Latin Name'}
          <span className="ml-1" style={{ color: COMPAT_THEME.muted }}>{isFrench ? '(optionnel)' : '(optional)'}</span>
        </label>
        <NameAutocomplete
          value={latinValue}
          onChange={onLatinChange}
          onArabicSelect={onArabicSelect}
          placeholder={searchPlaceholder}
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
            {arabicLabel} <span style={{ color: COMPAT_THEME.danger }}>*</span>
          </label>
          <button
            type="button"
            onClick={onToggleKeyboard}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
            style={showKeyboard
              ? { background: COMPAT_THEME.indigo, color: '#fff' }
              : { background: COMPAT_THEME.cardBg, border: `1px solid ${COMPAT_THEME.surfaceBorder}`, color: COMPAT_THEME.muted }}
          >
            <Keyboard className="w-3.5 h-3.5" />
            {showKeyboard
              ? (isFrench ? 'Masquer Clavier' : 'Hide Keyboard')
              : (isFrench ? 'Afficher Clavier' : 'Show Keyboard')}
          </button>
        </div>
        <input
          type="text"
          value={arabicValue}
          onChange={e => onArabicChange(e.target.value)}
          placeholder={arabicPlaceholder}
          dir="rtl"
          lang="ar"
          required
          className="w-full px-4 py-2.5 rounded-lg font-arabic text-xl focus:outline-none focus:ring-1"
          style={{
            background: '#FFFFFF',
            border: `1px solid ${COMPAT_THEME.line}`,
            color: COMPAT_THEME.ink,
          }}
        />

        {showKeyboard && (
          <div className="mt-3">
            <ArabicKeyboard
              onKeyPress={onKeyboardPress}
              onBackspace={onKeyboardBackspace}
              onSpace={onKeyboardSpace}
              onClose={onToggleKeyboard}
            />
          </div>
        )}
      </div>
    </div>
  );
}
