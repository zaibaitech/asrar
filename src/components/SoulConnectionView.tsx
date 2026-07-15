import React, { useState } from 'react';
import { SoulConnectionResult } from '../types/compatibility';
import { SOUL_CONNECTION_ARCHETYPES, SOUL_CONNECTION_SEVERITY_COLOR } from '../constants/soulConnectionArchetypes';
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
      style={{ background: 'radial-gradient(1200px 600px at 50% -10%, #1B1433 0%, #0D0A1A 55%)' }}
    >
      <div className="max-w-2xl mx-auto px-6 py-14" style={{ color: '#EDE6D6' }}>

        {/* Header */}
        <header className="text-center mb-10">
          <div className="font-technical text-[11px] tracking-[4px]" style={{ color: '#C8A55B' }}>
            {c.eyebrow}
          </div>
          <h1 className="font-display font-semibold text-4xl mt-3.5 leading-tight">{c.title}</h1>
          <p className="text-sm mt-2.5" style={{ color: '#8E86A3' }}>{c.subtitle}</p>
        </header>

        {/* The two names */}
        <section className="flex items-center justify-center gap-5 mb-8 flex-wrap">
          <NameCard arabic={result.person1.arabicName} latin={result.person1.name} value={result.person1.kabir} />
          <div aria-hidden="true" className="text-2xl" style={{ color: '#C8A55B' }}>۞</div>
          <NameCard arabic={result.person2.arabicName} latin={result.person2.name} value={result.person2.kabir} />
        </section>

        {/* The Abjad dial */}
        <section className="text-center">
          <SoulConnectionRing value={result.soulNumber} size={260} activeColor={color} revealed={revealed} />
          <h2 className="font-display font-semibold text-3xl mt-4 mb-1" style={{ color }}>
            {archetype.title[contentLang]}
          </h2>
          <p className="text-sm mt-2.5" style={{ color: '#8E86A3' }}>{archetype.oneLine[contentLang]}</p>
          <div className="flex justify-center gap-2 mt-4 flex-wrap">
            {archetype.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-3.5 py-1 rounded-full border"
                style={{ borderColor: `${color}59`, color }}
              >
                {tag[contentLang]}
              </span>
            ))}
          </div>
        </section>

        <Rule />

        {/* Interpretation */}
        <Passage label={c.meaning} text={archetype.meaning[contentLang]} color="#C8A55B" />
        <Passage label={c.marriageOutlook} text={archetype.marriageOutlook[contentLang]} color="#C8A55B" />
        <Passage label={c.watchOut} text={archetype.watchOut[contentLang]} color="#D99A4E" />
        <Passage label={c.keyToSuccess} text={archetype.keyToSuccess[contentLang]} color="#C8A55B" />

        <Rule />

        {/* Transparent math */}
        <section>
          <button
            onClick={() => setShowMath(!showMath)}
            aria-expanded={showMath}
            className="w-full flex justify-between items-center bg-transparent border-none font-display font-semibold text-2xl py-1.5 cursor-pointer"
            style={{ color: '#EDE6D6' }}
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
              className="rounded-2xl mt-3.5 p-6"
              style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(200,165,91,0.18)' }}
            >
              <LetterRow latin={result.person1.name} arabic={result.person1.arabicName} letters={letters1} total={result.person1.kabir} />
              <LetterRow latin={result.person2.name} arabic={result.person2.arabicName} letters={letters2} total={result.person2.kabir} />

              <div className="flex justify-between py-2.5" style={{ borderTop: '1px solid rgba(200,165,91,0.18)' }}>
                <span className="text-sm" style={{ color: '#8E86A3' }}>{c.constant}</span>
                <span className="font-technical font-bold text-lg">+7</span>
              </div>

              <div className="text-center font-technical text-lg pt-4 pb-1.5" style={{ borderTop: '1px solid rgba(200,165,91,0.18)' }}>
                ({result.person1.kabir} + {result.person2.kabir} + 7) → {sum} → {c.reduceLabel} = <strong style={{ color: '#C8A55B' }}>{result.soulNumber}</strong>
              </div>
              <p className="text-center text-xs italic leading-relaxed mt-2.5" style={{ color: '#8E86A3' }}>
                {c.formulaNote}
              </p>
            </div>
          )}
        </section>

        {/* Disclaimer */}
        <footer
          className="mt-12 px-5 py-4 rounded-xl text-center text-[13.5px] leading-relaxed"
          style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(200,165,91,0.18)', color: '#8E86A3' }}
        >
          <span className="mr-2.5" style={{ color: '#C8A55B' }}>۩</span>
          {c.disclaimer}
        </footer>
      </div>
    </div>
  );
}

function NameCard({ arabic, latin, value }: { arabic: string; latin: string; value: number }) {
  return (
    <div
      className="rounded-2xl px-7 py-4.5 text-center min-w-[140px]"
      style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(200,165,91,0.18)' }}
    >
      <div dir="rtl" lang="ar" className="font-arabic text-3xl leading-tight">{arabic}</div>
      <div className="text-[13px] mt-0.5" style={{ color: '#8E86A3' }}>{latin}</div>
      <div className="font-technical font-semibold text-[15px] mt-2" style={{ color: '#C8A55B' }}>{value}</div>
    </div>
  );
}

function LetterRow({ latin, arabic, letters, total }: { latin: string; arabic: string; letters: { letter: string; value: number }[]; total: number }) {
  return (
    <div className="mb-4.5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm" style={{ color: '#8E86A3' }}>
          {latin} · <span dir="rtl" lang="ar" className="font-arabic text-lg" style={{ color: '#EDE6D6' }}>{arabic}</span>
        </span>
        <span className="font-technical font-bold text-[17px]">{total}</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {letters.map((l, i) => (
          <span
            key={i}
            className="inline-flex items-center rounded-lg px-2.5 py-1.5 font-technical text-sm"
            style={{ background: '#1C1631', border: '1px solid rgba(200,165,91,0.18)' }}
          >
            <span dir="rtl" lang="ar" className="font-arabic text-base">{l.letter}</span>
            <span className="mx-1" style={{ color: '#8E86A3' }}>=</span>
            {l.value}
          </span>
        ))}
      </div>
    </div>
  );
}

function Passage({ label, text, color }: { label: string; text: string; color: string }) {
  return (
    <section className="my-6">
      <div className="font-technical text-[11px] tracking-[3px] uppercase mb-2" style={{ color }}>
        {label}
      </div>
      <p className="text-base leading-[1.75] m-0" style={{ color: '#D9D2E4' }}>{text}</p>
    </section>
  );
}

function Rule() {
  return (
    <div className="flex items-center gap-3.5 my-9" aria-hidden="true">
      <span className="flex-1 h-px" style={{ background: 'rgba(200,165,91,0.18)' }} />
      <span className="text-[13px]" style={{ color: 'rgba(200,165,91,0.4)' }}>۞</span>
      <span className="flex-1 h-px" style={{ background: 'rgba(200,165,91,0.18)' }} />
    </div>
  );
}
