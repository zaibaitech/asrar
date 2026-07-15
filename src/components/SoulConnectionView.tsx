import React, { useState } from 'react';
import { SoulConnectionResult } from '../types/compatibility';
import { SOUL_CONNECTION_ARCHETYPES, SOUL_CONNECTION_SEVERITY_COLOR } from '../constants/soulConnectionArchetypes';
import { COMPAT_THEME, COMPAT_TINTS } from '../constants/compatibilityTheme';
import { SoulConnectionRing } from './SoulConnectionRing';
import { useAbjad } from '../contexts/AbjadContext';

interface SoulConnectionViewProps {
  result: SoulConnectionResult;
  language?: 'en' | 'fr' | 'ar';
}

const COPY = {
  en: {
    eyebrow: 'ASRĀR · COMPATIBILITY',
    title: 'Soul Connection',
    subtitle: 'A traditional soul-resonance marker from ʿIlm al-Ḥurūf',
    independentMetric: 'Independent metric',
    meaning: 'Meaning',
    marriageOutlook: 'Marriage Outlook',
    watchOut: 'Watch Out',
    keyToSuccess: 'Key to Success',
    howCalculated: 'How this number is calculated',
    constant: 'Constant',
    formulaNote: 'We sum each name’s abjad letter values, add 7, then reduce the total to a number from 1 to 9. Multiples of nine resolve to 9, never 0.',
    disclaimer: 'A reflection tool from traditional teachings — it does not replace faith, free will, or wise counsel.',
    reduceLabel: 'reduce 1–9',
  },
  fr: {
    eyebrow: 'ASRĀR · COMPATIBILITÉ',
    title: "Connexion d'Âme",
    subtitle: "Un marqueur traditionnel de résonance de l'âme issu de ʿIlm al-Ḥurūf",
    independentMetric: 'Mesure indépendante',
    meaning: 'Signification',
    marriageOutlook: 'Perspective du Mariage',
    watchOut: 'Attention',
    keyToSuccess: 'Clé du Succès',
    howCalculated: 'Comment ce nombre est calculé',
    constant: 'Constante',
    formulaNote: "Nous additionnons les valeurs abjad des lettres de chaque nom, ajoutons 7, puis réduisons le total à un nombre de 1 à 9. Les multiples de neuf donnent 9, jamais 0.",
    disclaimer: 'Un outil de réflexion des enseignements traditionnels — il ne remplace ni la foi, ni le libre arbitre, ni le conseil avisé.',
    reduceLabel: 'réduire 1–9',
  },
  // No verbatim Arabic exists in the mobile source for the archetype body
  // text — see soulConnectionArchetypes.ts. UI chrome labels fall back to
  // English rather than inventing a translation.
  ar: {
    eyebrow: 'ASRĀR · COMPATIBILITY',
    title: 'Soul Connection',
    subtitle: 'A traditional soul-resonance marker from ʿIlm al-Ḥurūf',
    independentMetric: 'Independent metric',
    meaning: 'Meaning',
    marriageOutlook: 'Marriage Outlook',
    watchOut: 'Watch Out',
    keyToSuccess: 'Key to Success',
    howCalculated: 'How this number is calculated',
    constant: 'Constant',
    formulaNote: 'We sum each name’s abjad letter values, add 7, then reduce the total to a number from 1 to 9. Multiples of nine resolve to 9, never 0.',
    disclaimer: 'A reflection tool from traditional teachings — it does not replace faith, free will, or wise counsel.',
    reduceLabel: 'reduce 1–9',
  },
};

function letterBreakdown(name: string, abjad: Record<string, number>): { letter: string; value: number }[] {
  return [...name]
    .filter(ch => abjad[ch] !== undefined)
    .map(ch => ({ letter: ch, value: abjad[ch] }));
}

export function SoulConnectionView({ result, language = 'en' }: SoulConnectionViewProps) {
  const [showMath, setShowMath] = useState(false);
  const [revealed] = useState(true);
  const { abjad } = useAbjad();

  const contentLang: 'en' | 'fr' = language === 'fr' ? 'fr' : 'en';
  const c = COPY[language] ?? COPY.en;

  const archetype = SOUL_CONNECTION_ARCHETYPES[result.soulNumber];
  const color = SOUL_CONNECTION_SEVERITY_COLOR[archetype.severity];

  const letters1 = letterBreakdown(result.person1.arabicName, abjad);
  const letters2 = letterBreakdown(result.person2.arabicName, abjad);
  const sum = result.person1.kabir + result.person2.kabir + 7;

  return (
    <div
      className="rounded-3xl overflow-hidden"
      style={{ background: COMPAT_THEME.cardBg, border: `1px solid ${COMPAT_THEME.cardBorder}`, boxShadow: '0 10px 40px rgba(49,46,129,.06)' }}
    >
      <div className="max-w-2xl mx-auto px-6 py-14" style={{ color: COMPAT_THEME.ink }}>

        {/* Header */}
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

        {/* The two names */}
        <section className="flex items-center justify-center gap-5 mb-8 flex-wrap">
          <NameCard arabic={result.person1.arabicName} latin={result.person1.name} value={result.person1.kabir} />
          <div aria-hidden="true" className="text-xl" style={{ color: COMPAT_THEME.indigo }}>۞</div>
          <NameCard arabic={result.person2.arabicName} latin={result.person2.name} value={result.person2.kabir} />
        </section>

        {/* The Abjad dial */}
        <section className="text-center">
          <SoulConnectionRing value={result.soulNumber} size={250} activeColor={color} revealed={revealed} />
          <h2 className="font-display font-semibold text-3xl mt-3.5 mb-0.5" style={{ color }}>
            {archetype.title[contentLang]}
          </h2>
          <p className="text-sm mt-2" style={{ color: COMPAT_THEME.muted }}>{archetype.oneLine[contentLang]}</p>
          <div className="flex justify-center gap-2 mt-3.5 flex-wrap">
            {archetype.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs font-semibold px-3.5 py-1 rounded-full border"
                style={{ borderColor: COMPAT_TINTS.green.border, background: COMPAT_TINTS.green.bg, color: COMPAT_TINTS.green.label }}
              >
                {tag[contentLang]}
              </span>
            ))}
          </div>
        </section>

        <Rule />

        {/* Interpretation */}
        <Section label={c.meaning} text={archetype.meaning[contentLang]} tint="blue" />
        <Section label={c.marriageOutlook} text={archetype.marriageOutlook[contentLang]} tint="violet" />
        <Section label={c.watchOut} text={archetype.watchOut[contentLang]} tint="amber" />
        <Section label={c.keyToSuccess} text={archetype.keyToSuccess[contentLang]} tint="green" />

        {/* Transparent math */}
        <section>
          <button
            onClick={() => setShowMath(!showMath)}
            aria-expanded={showMath}
            className="w-full flex justify-between items-center rounded-2xl font-technical font-bold text-base py-4 px-4.5 cursor-pointer"
            style={{ background: COMPAT_THEME.surface, border: `1px solid ${COMPAT_THEME.surfaceBorder}`, color: COMPAT_THEME.ink }}
          >
            {c.howCalculated}
            <span
              className="inline-block transition-transform duration-300"
              style={{ transform: showMath ? 'rotate(180deg)' : 'none' }}
            >
              ⌄
            </span>
          </button>

          {showMath && (
            <div
              className="rounded-2xl mt-3 p-5"
              style={{ background: COMPAT_THEME.surface, border: `1px solid ${COMPAT_THEME.surfaceBorder}` }}
            >
              <LetterRow latin={result.person1.name} arabic={result.person1.arabicName} letters={letters1} total={result.person1.kabir} />
              <LetterRow latin={result.person2.name} arabic={result.person2.arabicName} letters={letters2} total={result.person2.kabir} />

              <div className="flex justify-between py-2.5" style={{ borderTop: `1px solid ${COMPAT_THEME.line}` }}>
                <span className="text-sm" style={{ color: COMPAT_THEME.muted }}>{c.constant}</span>
                <span className="font-technical font-bold text-lg">+7</span>
              </div>

              <div className="text-center font-technical text-lg pt-4 pb-1.5" style={{ borderTop: `1px solid ${COMPAT_THEME.line}` }}>
                ({result.person1.kabir} + {result.person2.kabir} + 7) → {sum} → {c.reduceLabel} = <strong style={{ color: COMPAT_THEME.indigo }}>{result.soulNumber}</strong>
              </div>
              <p className="text-center text-xs italic leading-relaxed mt-2" style={{ color: COMPAT_THEME.muted }}>
                {c.formulaNote}
              </p>
            </div>
          )}
        </section>

        {/* Disclaimer */}
        <footer
          className="mt-8 px-5 py-4 rounded-xl text-center text-[13.5px] leading-relaxed"
          style={{ background: COMPAT_THEME.surface, border: `1px solid ${COMPAT_THEME.surfaceBorder}`, color: COMPAT_THEME.muted }}
        >
          <span className="mr-2" aria-hidden="true">ⓘ</span>
          {c.disclaimer}
        </footer>
      </div>
    </div>
  );
}

function NameCard({ arabic, latin, value }: { arabic: string; latin: string; value: number }) {
  return (
    <div
      className="rounded-2xl px-6 py-4 text-center min-w-[130px]"
      style={{ background: COMPAT_THEME.surface, border: `1px solid ${COMPAT_THEME.surfaceBorder}` }}
    >
      <div dir="rtl" lang="ar" className="font-arabic text-3xl leading-tight">{arabic}</div>
      <div className="text-[12.5px] mt-0.5" style={{ color: COMPAT_THEME.muted }}>{latin}</div>
      <div className="font-technical font-bold text-[15px] mt-1.5" style={{ color: COMPAT_THEME.indigo }}>{value}</div>
    </div>
  );
}

function LetterRow({ latin, arabic, letters, total }: { latin: string; arabic: string; letters: { letter: string; value: number }[]; total: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm" style={{ color: COMPAT_THEME.muted }}>
          {latin} · <span dir="rtl" lang="ar" className="font-arabic text-lg" style={{ color: COMPAT_THEME.ink }}>{arabic}</span>
        </span>
        <span className="font-technical font-bold text-[17px]">{total}</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {letters.map((l, i) => (
          <span
            key={i}
            className="inline-flex items-center rounded-lg px-2.5 py-1.5 font-technical text-sm"
            style={{ background: '#FFFFFF', border: `1px solid ${COMPAT_THEME.line}`, color: COMPAT_THEME.ink }}
          >
            <span dir="rtl" lang="ar" className="font-arabic text-base">{l.letter}</span>
            <span className="mx-1" style={{ color: COMPAT_THEME.muted }}>=</span>
            {l.value}
          </span>
        ))}
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

function Rule() {
  return (
    <div className="flex items-center gap-3.5 my-8" aria-hidden="true">
      <span className="flex-1 h-px" style={{ background: COMPAT_THEME.line }} />
      <span className="text-[13px]" style={{ color: COMPAT_THEME.indigoSoft }}>۞</span>
      <span className="flex-1 h-px" style={{ background: COMPAT_THEME.line }} />
    </div>
  );
}
