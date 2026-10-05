'use client';

import React, { useState } from 'react';
import { COMPAT_THEME } from '../constants/compatibilityTheme';
import { DIVINE_INTENTIONS, DivineIntention, INTENTION_EMOJI } from '../constants/divineNameIntentions';
import { DivineName } from '../data/divine-names';
import { DivineNamePicker } from './DivineNamePicker';

export type DivineIntentionSubMode = 'auto' | 'pick';

interface DivineNameIntentionFormProps {
  onCalculate: (intention: DivineIntention, subMode: DivineIntentionSubMode, divineName: DivineName | null) => void;
  language?: 'en' | 'fr' | 'ar';
  isLoading?: boolean;
}

export function DivineNameIntentionForm({ onCalculate, language = 'en', isLoading = false }: DivineNameIntentionFormProps) {
  const isFrench = language === 'fr';
  const [intention, setIntention] = useState<DivineIntention | null>(null);
  const [subMode, setSubMode] = useState<DivineIntentionSubMode>('auto');
  const [divineName, setDivineName] = useState<DivineName | null>(null);

  const canCalculate = intention !== null && (subMode === 'auto' || divineName !== null) && !isLoading;

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

        <div className="space-y-6">
          {/* Picker A — Intention */}
          <div className="rounded-2xl p-6 space-y-3" style={{ background: COMPAT_THEME.surface, border: `1px solid ${COMPAT_THEME.surfaceBorder}` }}>
            <h2 className="font-technical text-[11px] tracking-[3px] uppercase font-bold mb-1" style={{ color: COMPAT_THEME.indigo }}>
              {isFrench ? '1. Quelle est votre intention ?' : '1. What is your intention?'}
            </h2>

            <div className="grid grid-cols-2 gap-2">
              {DIVINE_INTENTIONS.map(info => {
                const active = intention === info.id;
                return (
                  <button
                    key={info.id}
                    type="button"
                    disabled={isLoading}
                    onClick={() => setIntention(info.id)}
                    className="text-left rounded-xl px-4 py-3 transition-all hover:opacity-90 disabled:opacity-60"
                    style={{
                      background: active ? COMPAT_THEME.ctaGradient : COMPAT_THEME.cardBg,
                      border: `1px solid ${active ? 'transparent' : COMPAT_THEME.surfaceBorder}`,
                    }}
                  >
                    <div className="font-technical font-bold text-sm flex items-center gap-1.5" style={{ color: active ? '#fff' : COMPAT_THEME.ink }}>
                      <span>{INTENTION_EMOJI[info.id]}</span>
                      <span>{info.label[isFrench ? 'fr' : 'en']}</span>
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: active ? 'rgba(255,255,255,.85)' : COMPAT_THEME.muted }}>
                      {info.description[isFrench ? 'fr' : 'en']}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sub-mode toggle */}
          <div className="flex justify-center">
            <div className="inline-flex p-1 rounded-xl" style={{ background: COMPAT_THEME.surface, border: `1px solid ${COMPAT_THEME.surfaceBorder}` }}>
              <button
                type="button"
                onClick={() => setSubMode('auto')}
                className="px-4 py-2 rounded-lg font-technical text-sm font-semibold transition-all"
                style={subMode === 'auto' ? { background: COMPAT_THEME.indigo, color: '#fff' } : { color: COMPAT_THEME.muted }}
              >
                {isFrench ? 'Trouver les Meilleurs Noms' : 'Find the Best Names'}
              </button>
              <button
                type="button"
                onClick={() => setSubMode('pick')}
                className="px-4 py-2 rounded-lg font-technical text-sm font-semibold transition-all"
                style={subMode === 'pick' ? { background: COMPAT_THEME.indigo, color: '#fff' } : { color: COMPAT_THEME.muted }}
              >
                {isFrench ? 'Vérifier un Nom' : 'Check a Name'}
              </button>
            </div>
          </div>

          {/* Picker B — Divine Name (only in "Check a Name" mode) */}
          {subMode === 'pick' ? (
            <div className="rounded-2xl p-6 space-y-3" style={{ background: COMPAT_THEME.surface, border: `1px solid ${COMPAT_THEME.surfaceBorder}` }}>
              <h2 className="font-technical text-[11px] tracking-[3px] uppercase font-bold mb-1" style={{ color: COMPAT_THEME.indigo }}>
                {isFrench ? '2. Quel Nom souhaitez-vous vérifier ?' : '2. Which Name do you want to check?'}
              </h2>
              <DivineNamePicker selected={divineName} onSelect={setDivineName} language={language} />
            </div>
          ) : (
            <p className="text-xs text-center leading-relaxed" style={{ color: COMPAT_THEME.muted }}>
              {isFrench
                ? "Nous chercherons parmi les 99 Noms et vous montrerons ceux qui correspondent le mieux à votre intention."
                : "We'll search all 99 Names and show you the ones that best match your intention."}
            </p>
          )}

          {/* Why this matters */}
          <div className="rounded-2xl px-4.5 py-4" style={{ background: COMPAT_THEME.surface, border: `1px solid ${COMPAT_THEME.surfaceBorder}` }}>
            <div className="font-technical text-[11px] tracking-[2px] uppercase font-bold mb-1.5" style={{ color: COMPAT_THEME.muted }}>
              {isFrench ? 'Pourquoi cela compte' : 'Why this matters'}
            </div>
            <p className="text-xs leading-[1.6] m-0" style={{ color: COMPAT_THEME.muted }}>
              {isFrench
                ? "Chacun des 99 Noms est classiquement associé à certaines qualités. Faire correspondre votre intention à un Nom dont le sens s'y rapporte est une façon d'appeler Allah par le Nom le plus adapté à votre besoin, plutôt qu'un choix arbitraire."
                : 'Each of the 99 Names is classically associated with certain qualities. Matching your intention to a Name whose meaning relates to it is a way of calling on Allah by the Name best suited to your need, rather than an arbitrary choice.'}
            </p>
          </div>

          <button
            type="button"
            disabled={!canCalculate}
            onClick={() => intention && onCalculate(intention, subMode, subMode === 'pick' ? divineName : null)}
            className="w-full px-6 py-3.5 rounded-xl font-technical font-bold text-sm tracking-wide transition-opacity hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ background: COMPAT_THEME.ctaGradient, color: '#fff' }}
          >
            {isFrench ? 'Calculer' : 'Calculate'}
          </button>
        </div>
      </div>
    </div>
  );
}
