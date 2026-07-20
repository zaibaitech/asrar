import React from 'react';
import { COMPAT_THEME } from '../constants/compatibilityTheme';
import { DIVINE_INTENTIONS, DivineIntention } from '../constants/divineNameIntentions';

interface DivineNameIntentionFormProps {
  onSelect: (intention: DivineIntention) => void;
  language?: 'en' | 'fr' | 'ar';
  isLoading?: boolean;
}

export function DivineNameIntentionForm({ onSelect, language = 'en', isLoading = false }: DivineNameIntentionFormProps) {
  const isFrench = language === 'fr';

  return (
    <div className="rounded-3xl overflow-hidden" style={{ background: COMPAT_THEME.cardBg, border: `1px solid ${COMPAT_THEME.cardBorder}`, boxShadow: '0 10px 40px rgba(49,46,129,.06)' }}>
      <div className="max-w-2xl mx-auto px-6 py-14" style={{ color: COMPAT_THEME.ink }}>
        <div className="text-center mb-10">
          <div className="font-technical text-[11px] tracking-[4px] font-bold" style={{ color: COMPAT_THEME.indigo }}>
            {isFrench ? 'ASRĀR · COMPATIBILITÉ' : 'ASRĀR · COMPATIBILITY'}
          </div>
          <h1 className="font-display font-semibold text-4xl mt-3.5 leading-tight">
            {isFrench ? 'Nom Divin selon une Intention' : 'Divine Name to Intention'}
          </h1>
          <p className="text-sm mt-2.5" style={{ color: COMPAT_THEME.muted }}>
            {isFrench
              ? "Appelez Allah par le Nom dont le sens correspond à votre besoin — Coran 7:180"
              : 'Call upon Allah by the Name whose meaning matches your need — Quran 7:180'}
          </p>
        </div>

        <div className="rounded-2xl p-6 space-y-3" style={{ background: COMPAT_THEME.surface, border: `1px solid ${COMPAT_THEME.surfaceBorder}` }}>
          <h2 className="font-technical text-[11px] tracking-[3px] uppercase font-bold mb-1" style={{ color: COMPAT_THEME.indigo }}>
            {isFrench ? 'Quelle est votre intention ?' : 'What is your intention?'}
          </h2>

          {DIVINE_INTENTIONS.map(intention => (
            <button
              key={intention.id}
              type="button"
              disabled={isLoading}
              onClick={() => onSelect(intention.id)}
              className="w-full text-left rounded-xl px-4.5 py-3.5 transition-all hover:opacity-90 disabled:opacity-60"
              style={{ background: COMPAT_THEME.cardBg, border: `1px solid ${COMPAT_THEME.surfaceBorder}` }}
            >
              <div className="font-technical font-bold text-sm" style={{ color: COMPAT_THEME.ink }}>
                {intention.label[isFrench ? 'fr' : 'en']}
              </div>
              <div className="text-xs mt-0.5" style={{ color: COMPAT_THEME.muted }}>
                {intention.description[isFrench ? 'fr' : 'en']}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
