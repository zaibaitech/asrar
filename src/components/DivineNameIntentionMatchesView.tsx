'use client';

import React from 'react';
import { COMPAT_THEME, COMPAT_TINTS } from '../constants/compatibilityTheme';
import { DIVINE_INTENTIONS, DivineIntention, INTENTION_EMOJI, INTENTION_NAME_MAP, INTENTION_COMPANION_DUA } from '../constants/divineNameIntentions';
import { findDivineNameByNumber } from '../data/divine-names';
import { AllDivineNamesBrowser } from './AllDivineNamesBrowser';

interface DivineNameIntentionMatchesViewProps {
  intention: DivineIntention;
  onSelectName: (divineNameNumber: number) => void;
  language?: 'en' | 'fr' | 'ar';
}

const GRADE_TINT: Record<'optimal' | 'suitable' | 'hadith-or-quran' | 'meaning-based', keyof typeof COMPAT_TINTS> = {
  optimal: 'green',
  'hadith-or-quran': 'green',
  suitable: 'blue',
  'meaning-based': 'blue',
};

const GRADE_LABEL: Record<'optimal' | 'suitable' | 'hadith-or-quran' | 'meaning-based', { en: string; fr: string }> = {
  optimal: { en: 'Optimal', fr: 'Optimal' },
  suitable: { en: 'Suitable', fr: 'Adapté' },
  'hadith-or-quran': { en: 'Optimal', fr: 'Optimal' },
  'meaning-based': { en: 'Suitable', fr: 'Adapté' },
};

/** "Find the Best Names" — searches all 99 Names and shows which ones best match the selected intention. */
export function DivineNameIntentionMatchesView({ intention, onSelectName, language = 'en' }: DivineNameIntentionMatchesViewProps) {
  const contentLang: 'en' | 'fr' = language === 'fr' ? 'fr' : 'en';
  const isFrench = contentLang === 'fr';
  const info = DIVINE_INTENTIONS.find(i => i.id === intention)!;
  const entries = INTENTION_NAME_MAP[intention];
  const dua = INTENTION_COMPANION_DUA[intention];
  const optimalCount = entries.filter(e => e.grade === 'optimal' || e.grade === 'hadith-or-quran').length;

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
          <p className="text-sm mt-2" style={{ color: COMPAT_THEME.muted }}>
            {isFrench
              ? `${optimalCount} Nom${optimalCount === 1 ? '' : 's'} optimal${optimalCount === 1 ? '' : 'aux'} trouvé${optimalCount === 1 ? '' : 's'} sur 99`
              : `${optimalCount} optimal Name${optimalCount === 1 ? '' : 's'} found out of 99`}
          </p>
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

        <div className="space-y-3">
          {entries.map(entry => {
            const name = findDivineNameByNumber(entry.divineNameNumber);
            if (!name) return null;
            const tint = COMPAT_TINTS[GRADE_TINT[entry.grade]];
            return (
              <button
                key={entry.divineNameNumber}
                type="button"
                onClick={() => onSelectName(entry.divineNameNumber)}
                className="w-full rounded-2xl overflow-hidden text-left transition-opacity hover:opacity-90"
                style={{ border: `1px solid ${COMPAT_THEME.surfaceBorder}` }}
              >
                <div className="px-5 py-4 flex items-center gap-3" style={{ background: COMPAT_THEME.surface }}>
                  <span dir="rtl" lang="ar" className="font-arabic text-2xl flex-shrink-0">{name.arabic}</span>
                  <div className="min-w-0">
                    <div className="font-technical text-sm font-bold" style={{ color: COMPAT_THEME.indigo }}>{name.transliteration}</div>
                    <div className="text-xs truncate" style={{ color: COMPAT_THEME.muted }}>{name.translation[contentLang]}</div>
                  </div>
                  <span
                    className="ml-auto flex-shrink-0 text-[10px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
                    style={{ background: tint.bg, color: tint.label }}
                  >
                    {GRADE_LABEL[entry.grade][contentLang]}
                  </span>
                </div>
                <div className="px-5 py-3" style={{ background: '#FFFFFF' }}>
                  <p className="text-[13px] leading-[1.6] m-0" style={{ color: COMPAT_THEME.muted }}>
                    {entry.sourceNote[contentLang]}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

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
