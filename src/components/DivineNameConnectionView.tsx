import React from 'react';
import { DivineNameConnectionResult } from '../types/compatibility';
import { SOUL_CONNECTION_SEVERITY_COLOR } from '../constants/soulConnectionArchetypes';
import { DIVINE_NAME_RESONANCE_FRAMING } from '../constants/divineNameResonance';
import { COMPAT_THEME, COMPAT_TINTS } from '../constants/compatibilityTheme';
import { SoulConnectionRing } from './SoulConnectionRing';

interface DivineNameConnectionViewProps {
  result: DivineNameConnectionResult;
  language?: 'en' | 'fr' | 'ar';
  /** Rendered inline within a matches list; hides the header/name-card chrome. */
  compact?: boolean;
}

const COPY = {
  en: {
    eyebrow: 'ASRĀR · COMPATIBILITY',
    title: 'Divine Name Connection',
    subtitle: 'Your spiritual resonance with a Name of Allah, from ʿIlm al-Ḥurūf',
    independentMetric: 'Independent metric',
    resonance: 'Resonance',
    meaning: 'Meaning',
    practice: 'Spiritual Practice',
    reduceLabel: 'reduce 1–9',
  },
  fr: {
    eyebrow: 'ASRĀR · COMPATIBILITÉ',
    title: "Connexion au Nom Divin",
    subtitle: "Votre résonance spirituelle avec un Nom d'Allah, issue de ʿIlm al-Ḥurūf",
    independentMetric: 'Mesure indépendante',
    resonance: 'Résonance',
    meaning: 'Signification',
    practice: 'Pratique Spirituelle',
    reduceLabel: 'réduire 1–9',
  },
  ar: {
    eyebrow: 'ASRĀR · COMPATIBILITY',
    title: 'Divine Name Connection',
    subtitle: 'Your spiritual resonance with a Name of Allah, from ʿIlm al-Ḥurūf',
    independentMetric: 'Independent metric',
    resonance: 'Resonance',
    meaning: 'Meaning',
    practice: 'Spiritual Practice',
    reduceLabel: 'reduce 1–9',
  },
};

export function DivineNameConnectionView({ result, language = 'en', compact = false }: DivineNameConnectionViewProps) {
  const contentLang: 'en' | 'fr' = language === 'fr' ? 'fr' : 'en';
  const c = COPY[language] ?? COPY.en;
  const color = SOUL_CONNECTION_SEVERITY_COLOR[result.severity];
  const framing = DIVINE_NAME_RESONANCE_FRAMING[result.severity];
  const { divineName } = result;

  const body = (
    <>
      <section className="flex items-center justify-center gap-5 mb-8 flex-wrap">
        <div className="rounded-2xl px-6 py-4 text-center min-w-[130px]" style={{ background: COMPAT_THEME.surface, border: `1px solid ${COMPAT_THEME.surfaceBorder}` }}>
          <div dir="rtl" lang="ar" className="font-arabic text-3xl leading-tight">{result.person.arabicName}</div>
          <div className="text-[12.5px] mt-0.5" style={{ color: COMPAT_THEME.muted }}>{result.person.name}</div>
          <div className="font-technical font-bold text-[15px] mt-1.5" style={{ color: COMPAT_THEME.indigo }}>{result.person.kabir}</div>
        </div>
        <div aria-hidden="true" className="text-xl" style={{ color: COMPAT_THEME.indigo }}>۞</div>
        <div className="rounded-2xl px-6 py-4 text-center min-w-[130px]" style={{ background: COMPAT_THEME.surface, border: `1px solid ${COMPAT_THEME.surfaceBorder}` }}>
          <div dir="rtl" lang="ar" className="font-arabic text-3xl leading-tight">{divineName.arabic}</div>
          <div className="text-[12.5px] mt-0.5" style={{ color: COMPAT_THEME.muted }}>{divineName.transliteration}</div>
          <div className="font-technical font-bold text-[15px] mt-1.5" style={{ color: COMPAT_THEME.indigo }}>{divineName.abjadValue}</div>
        </div>
      </section>

      <section className="text-center">
        <SoulConnectionRing value={result.soulNumber} size={compact ? 190 : 250} activeColor={color} revealed />
        <h2 className="font-display font-semibold text-3xl mt-3.5 mb-0.5" style={{ color }}>
          {divineName.translation[contentLang]}
        </h2>
        <p className="text-sm mt-2" style={{ color: COMPAT_THEME.muted }}>
          {divineName.transliteration} · {c.resonance} {result.soulNumber}/9
        </p>
      </section>

      <div className="rounded-2xl px-4.5 py-4 my-6" style={{ background: COMPAT_TINTS.green.bg, border: `1px solid ${COMPAT_TINTS.green.border}` }}>
        <p className="text-[15px] leading-[1.7] m-0" style={{ color: COMPAT_THEME.ink }}>{framing[contentLang]}</p>
      </div>

      <Section label={c.meaning} text={divineName.meaning[contentLang]} tint="blue" />
      <Section label={c.practice} text={divineName.spiritualPractice[contentLang]} tint="violet" />
    </>
  );

  if (compact) {
    return <div className="pt-2">{body}</div>;
  }

  return (
    <div
      className="rounded-3xl overflow-hidden"
      style={{ background: COMPAT_THEME.cardBg, border: `1px solid ${COMPAT_THEME.cardBorder}`, boxShadow: '0 10px 40px rgba(49,46,129,.06)' }}
    >
      <div className="max-w-2xl mx-auto px-6 py-14" style={{ color: COMPAT_THEME.ink }}>
        <header className="text-center mb-10">
          <div className="font-technical text-[11px] tracking-[4px] font-bold" style={{ color: COMPAT_THEME.indigo }}>
            {c.eyebrow}
          </div>
          <h1 className="font-display font-semibold text-4xl mt-3.5 leading-tight">{c.title}</h1>
          <p className="text-sm mt-2.5" style={{ color: COMPAT_THEME.muted }}>{c.subtitle}</p>
          <span
            className="inline-block mt-3.5 text-[13px] font-semibold px-4 py-1.5 rounded-full"
            style={{ background: '#E8F8EE', color: '#15803D' }}
          >
            {c.independentMetric}
          </span>
        </header>
        {body}
      </div>
    </div>
  );
}

function Section({ label, text, tint }: { label: string; text: string; tint: keyof typeof COMPAT_TINTS }) {
  const t = COMPAT_TINTS[tint];
  return (
    <section className="rounded-2xl px-4.5 py-4 my-3.5" style={{ background: t.bg, border: `1px solid ${t.border}` }}>
      <div className="font-technical text-[13.5px] font-bold mb-1.5" style={{ color: t.label }}>
        {label}
      </div>
      <p className="text-[15px] leading-[1.7] m-0" style={{ color: COMPAT_THEME.ink }}>{text}</p>
    </section>
  );
}
