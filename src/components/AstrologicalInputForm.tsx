import React, { useState } from 'react';
import { COMPAT_THEME } from '../constants/compatibilityTheme';

interface AstrologicalInputFormProps {
  onCalculate: (
    person1Name: string,
    person1Dob: string,
    person2Name: string,
    person2Dob: string
  ) => void;
  language?: 'en' | 'fr' | 'ar';
  isLoading?: boolean;
}

export function AstrologicalInputForm({ onCalculate, language = 'en', isLoading = false }: AstrologicalInputFormProps) {
  const isFrench = language === 'fr';
  const [person1Name, setPerson1Name] = useState('');
  const [person1Dob, setPerson1Dob] = useState('');
  const [person2Name, setPerson2Name] = useState('');
  const [person2Dob, setPerson2Dob] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!person1Dob || !person2Dob) {
      alert(isFrench
        ? 'Veuillez entrer la date de naissance des deux personnes'
        : 'Please enter the date of birth for both people');
      return;
    }

    onCalculate(
      person1Name || (isFrench ? 'Personne 1' : 'Person 1'),
      person1Dob,
      person2Name || (isFrench ? 'Personne 2' : 'Person 2'),
      person2Dob
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
            {isFrench ? 'Entrez Deux Dates de Naissance' : 'Enter Two Birth Dates'}
          </h1>
          <p className="text-sm mt-2.5" style={{ color: COMPAT_THEME.muted }}>
            {isFrench
              ? "Compatibilité astrologique générale basée sur le signe solaire, lunaire et Vénus-Mars — sans heure de naissance"
              : 'General astrological compatibility from Sun sign, Moon sign, and Venus-Mars — no birth time needed'}
          </p>
        </div>

        <DobCard
          label={isFrench ? 'Personne 1' : 'Person 1'}
          nameLabel={isFrench ? "Nom d'Affichage (Optionnel)" : 'Display Name (Optional)'}
          namePlaceholder={isFrench ? 'ex: Ahmed' : 'e.g., Ahmed'}
          nameValue={person1Name}
          onNameChange={setPerson1Name}
          dobLabel={isFrench ? 'Date de Naissance (Requis)' : 'Date of Birth (Required)'}
          dobValue={person1Dob}
          onDobChange={setPerson1Dob}
        />

        <div className="flex items-center justify-center my-6" aria-hidden="true">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-lg"
            style={{ background: COMPAT_THEME.surface, border: `1px solid ${COMPAT_THEME.surfaceBorder}`, color: COMPAT_THEME.indigo }}
          >
            ۞
          </div>
        </div>

        <DobCard
          label={isFrench ? 'Personne 2' : 'Person 2'}
          nameLabel={isFrench ? "Nom d'Affichage (Optionnel)" : 'Display Name (Optional)'}
          namePlaceholder={isFrench ? 'ex: Fatima' : 'e.g., Fatima'}
          nameValue={person2Name}
          onNameChange={setPerson2Name}
          dobLabel={isFrench ? 'Date de Naissance (Requis)' : 'Date of Birth (Required)'}
          dobValue={person2Dob}
          onDobChange={setPerson2Dob}
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
            isFrench ? 'Calculer la Compatibilité' : 'Calculate Compatibility'
          )}
        </button>

      </form>
    </div>
  );
}

interface DobCardProps {
  label: string;
  nameLabel: string;
  namePlaceholder: string;
  nameValue: string;
  onNameChange: (v: string) => void;
  dobLabel: string;
  dobValue: string;
  onDobChange: (v: string) => void;
}

function DobCard({
  label, nameLabel, namePlaceholder, nameValue, onNameChange,
  dobLabel, dobValue, onDobChange,
}: DobCardProps) {
  return (
    <div className="rounded-2xl p-6 space-y-4" style={{ background: COMPAT_THEME.surface, border: `1px solid ${COMPAT_THEME.surfaceBorder}` }}>
      <h2 className="font-technical text-[11px] tracking-[3px] uppercase font-bold" style={{ color: COMPAT_THEME.indigo }}>
        {label}
      </h2>

      <div>
        <label className="block text-xs mb-1.5" style={{ color: COMPAT_THEME.muted }}>{nameLabel}</label>
        <input
          type="text"
          value={nameValue}
          onChange={e => onNameChange(e.target.value)}
          placeholder={namePlaceholder}
          className="w-full px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-1"
          style={{
            background: '#FFFFFF',
            border: `1px solid ${COMPAT_THEME.line}`,
            color: COMPAT_THEME.ink,
          }}
        />
      </div>

      <div>
        <label className="block text-xs mb-1.5" style={{ color: COMPAT_THEME.muted }}>
          {dobLabel} <span style={{ color: COMPAT_THEME.danger }}>*</span>
        </label>
        <input
          type="date"
          value={dobValue}
          onChange={e => onDobChange(e.target.value)}
          required
          className="w-full px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-1"
          style={{
            background: '#FFFFFF',
            border: `1px solid ${COMPAT_THEME.line}`,
            color: COMPAT_THEME.ink,
          }}
        />
      </div>
    </div>
  );
}
