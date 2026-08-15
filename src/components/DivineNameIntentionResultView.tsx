'use client';

import React from 'react';
import { COMPAT_THEME, COMPAT_TINTS } from '../constants/compatibilityTheme';
import { DIVINE_INTENTIONS, DivineIntention, INTENTION_EMOJI, INTENTION_COMPANION_DUA } from '../constants/divineNameIntentions';
import type { DivineNameIntentionCompatibility, DivineNameMetadata, AlignmentTier } from '../constants/divineNameCompatibilityData';
import { AllDivineNamesBrowser } from './AllDivineNamesBrowser';

interface DivineNameIntentionResultViewProps {
  intention: DivineIntention;
  result: DivineNameIntentionCompatibility;
  guidance: { en: string; fr: string };
  onPickAlternative: (divineNameNumber: number) => void;
  language?: 'en' | 'fr' | 'ar';
}

const ALIGNMENT_TINT: Record<AlignmentTier, keyof typeof COMPAT_TINTS> = {
  optimal: 'green',
  suitable: 'blue',
  neutral: 'amber',
  'not-recommended': 'red',
};

const ALIGNMENT_LABEL: Record<AlignmentTier, { en: string; fr: string }> = {
  optimal: { en: 'Optimal', fr: 'Optimal' },
  suitable: { en: 'Suitable', fr: 'Adapté' },
  neutral: { en: 'Neutral', fr: 'Neutre' },
  'not-recommended': { en: 'Not Recommended', fr: 'Non recommandé' },
};

export function DivineNameIntentionResultView({
  intention,
  result,
  guidance,
  onPickAlternative,
  language = 'en',
}: DivineNameIntentionResultViewProps) {
  const contentLang: 'en' | 'fr' = language === 'fr' ? 'fr' : 'en';
  const isFrench = contentLang === 'fr';
  const info = DIVINE_INTENTIONS.find(i => i.id === intention)!;
  const dua = INTENTION_COMPANION_DUA[intention];
  const tint = COMPAT_TINTS[ALIGNMENT_TINT[result.alignment]];

  return (
    <div className="rounded-3xl overflow-hidden" style={{ background: COMPAT_THEME.cardBg, border: `1px solid ${COMPAT_THEME.cardBorder}`, boxShadow: '0 10px 40px rgba(49,46,129,.06)' }}>
      <div className="max-w-2xl mx-auto px-6 py-14" style={{ color: COMPAT_THEME.ink }}>
        <header className="text-center mb-8">
          <div className="font-technical text-[11px] tracking-[4px] font-bold" style={{ color: COMPAT_THEME.indigo }}>
            {isFrench ? 'ASRĀR · COMPATIBILITÉ' : 'ASRĀR · COMPATIBILITY'}
          </div>
          <div className="text-4xl mt-3.5">{INTENTION_EMOJI[intention]}</div>
          <h1 className="font-display font-semibold text-3xl mt-2 leading-tight">
            {info.label[contentLang]}
          </h1>
          <p className="text-sm mt-2" style={{ color: COMPAT_THEME.muted }}>{info.description[contentLang]}</p>
        </header>

        {intention === 'guidance' && (
          <div className="rounded-2xl px-4.5 py-4 mb-6" style={{ background: COMPAT_TINTS.amber.bg, border: `1px solid ${COMPAT_TINTS.amber.border}` }}>
            <p className="text-[14px] leading-[1.7] m-0" style={{ color: COMPAT_THEME.ink }}>
              {isFrench
                ? "Pour une décision importante, l'istikhāra (2 rakʿah + l'invocation prophétique) reste la pratique établie. Ce qui suit s'y ajoute — cela ne la remplace pas."
                : 'For an important decision, istikhāra (2 rakʿahs + the prophetic supplication) remains the established practice. What follows is a complement to it — not a replacement.'}
            </p>
          </div>
        )}

        {/* Result card for the specific Name the user checked */}
        <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${COMPAT_THEME.surfaceBorder}` }}>
          <div className="px-5 py-4 flex items-center gap-3" style={{ background: COMPAT_THEME.surface }}>
            <span dir="rtl" lang="ar" className="font-arabic text-2xl flex-shrink-0">{result.divineName.arabic}</span>
            <div className="min-w-0">
              <div className="font-technical text-sm font-bold" style={{ color: COMPAT_THEME.indigo }}>{result.divineName.transliteration}</div>
              <div className="text-xs" style={{ color: COMPAT_THEME.muted }}>{result.divineName.meaning.en}</div>
            </div>
            <span
              className="ml-auto flex-shrink-0 text-[10px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
              style={{ background: tint.bg, color: tint.label }}
            >
              {ALIGNMENT_LABEL[result.alignment][contentLang]}
            </span>
          </div>
          <div className="px-5 py-4" style={{ background: '#FFFFFF' }}>
            <p className="text-[14px] leading-[1.6] m-0" style={{ color: COMPAT_THEME.muted }}>
              {guidance[contentLang]}
            </p>
          </div>
        </div>

        {/* Alternatives — shown only when the checked Name doesn't fit */}
        {result.alternativeSuggestions && result.alternativeSuggestions.length > 0 && (
          <div className="mt-6 space-y-3">
            <h2 className="font-technical text-[11px] tracking-[3px] uppercase font-bold" style={{ color: COMPAT_THEME.indigo }}>
              {isFrench ? 'Alternatives suggérées' : 'Suggested Alternatives'}
            </h2>
            {result.alternativeSuggestions.map((alt: DivineNameMetadata) => (
              <button
                key={alt.number}
                type="button"
                onClick={() => onPickAlternative(alt.number)}
                className="w-full flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors hover:opacity-90"
                style={{ background: COMPAT_TINTS.green.bg, border: `1px solid ${COMPAT_TINTS.green.border}` }}
              >
                <span dir="rtl" lang="ar" className="font-arabic text-xl flex-shrink-0">{alt.arabic}</span>
                <div className="min-w-0">
                  <div className="font-technical text-sm font-bold" style={{ color: COMPAT_TINTS.green.label }}>{alt.transliteration}</div>
                  <div className="text-xs truncate" style={{ color: COMPAT_THEME.muted }}>{alt.meaning.en}</div>
                </div>
              </button>
            ))}
          </div>
        )}

        {dua && (
          <div className="rounded-2xl px-5 py-5 mt-6" style={{ background: COMPAT_TINTS.violet.bg, border: `1px solid ${COMPAT_TINTS.violet.border}` }}>
            <div className="font-technical text-[11px] tracking-[3px] uppercase font-bold mb-3" style={{ color: COMPAT_TINTS.violet.label }}>
              {isFrench ? 'Invocation prophétique authentique' : 'Authentic Prophetic Supplication'}
            </div>
            <p dir="rtl" lang="ar" className="font-arabic text-2xl leading-relaxed text-center mb-3" style={{ color: COMPAT_THEME.ink }}>
              {dua.arabic}
            </p>
            <p className="text-sm italic text-center mb-2" style={{ color: COMPAT_THEME.muted }}>
              {dua.transliteration}
            </p>
            <p className="text-[15px] leading-[1.7] text-center m-0" style={{ color: COMPAT_THEME.ink }}>
              {dua.translation[contentLang]}
            </p>
            <p className="text-xs text-center mt-3 mb-0" style={{ color: COMPAT_THEME.muted }}>
              {dua.citation}
            </p>
          </div>
        )}

        <div className="rounded-2xl px-4.5 py-4 mt-6" style={{ background: COMPAT_THEME.surface, border: `1px solid ${COMPAT_THEME.surfaceBorder}` }}>
          <p className="text-xs leading-[1.6] m-0" style={{ color: COMPAT_THEME.muted }}>
            {isFrench
              ? "Répétez le Nom autant de fois que vous le souhaitez, avec sincérité et adab — aucun nombre fixe n'est requis. Ceci est une réflexion spirituelle, pas une garantie ni une pratique occulte."
              : 'Repeat the Name as often as you wish, with sincerity and proper adab — no fixed number is required. This is spiritual reflection, not a guarantee or an occult practice.'}
          </p>
        </div>

        <AllDivineNamesBrowser language={language} />
      </div>
    </div>
  );
}
