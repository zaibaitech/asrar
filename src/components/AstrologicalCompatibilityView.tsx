import React from 'react';
import { AstrologicalCompatibility } from '../types/compatibility';
import { CompatibilityGauge } from './CompatibilityGauge';
import { getScoreRange } from '../constants/compatibilitySimpleLanguage';
import { ZODIAC_DATA } from '../lib/planetary/constants';
import { COMPAT_THEME } from '../constants/compatibilityTheme';

interface AstrologicalCompatibilityViewProps {
  compatibility: AstrologicalCompatibility;
  language?: 'en' | 'fr' | 'ar';
}

const COPY = {
  en: {
    eyebrow: 'ASRĀR · COMPATIBILITY',
    title: 'How Well Do You Match?',
    disclaimer: 'General astrological compatibility (Sun sign, Moon sign, Venus-Mars) — not a classical ʿIlm al-Nujūm technique. Classical Islamic astrology times a marriage rather than scores two birthdates against each other; see the Ikhtiyārāt (Best Dates) feature for that.',
    matchStrength: 'Your Match Strength',
    breakdown: 'Breakdown',
    sunSign: 'Sun Sign',
    moonSign: 'Moon Sign',
    venusMars: 'Attraction (Venus–Mars)',
    uncertainNote: "One birth date falls close to a Moon sign change — without an exact birth time, the Moon sign shown may not be exact.",
  },
  fr: {
    eyebrow: 'ASRĀR · COMPATIBILITÉ',
    title: 'Quelle Est Votre Compatibilité ?',
    disclaimer: "Compatibilité astrologique générale (signe solaire, lunaire, Vénus-Mars) — ce n'est pas une technique classique de ʿIlm al-Nujūm. L'astrologie islamique classique choisit le moment du mariage plutôt que de comparer deux dates de naissance ; voir la fonctionnalité Ikhtiyārāt (Meilleures Dates) pour cela.",
    matchStrength: 'Force de Votre Compatibilité',
    breakdown: 'Détail',
    sunSign: 'Signe Solaire',
    moonSign: 'Signe Lunaire',
    venusMars: 'Attraction (Vénus-Mars)',
    uncertainNote: "Une des dates de naissance est proche d'un changement de signe lunaire — sans heure de naissance exacte, le signe lunaire affiché pourrait être imprécis.",
  },
  ar: {
    eyebrow: 'ASRĀR · COMPATIBILITY',
    title: 'ما مدى توافقكما؟',
    disclaimer: 'توافق فلكي عام (برج الشمس، برج القمر، الزهرة-المريخ) — وليس أسلوبًا كلاسيكيًا من علم النجوم. علم النجوم الإسلامي الكلاسيكي يختار وقت الزواج بدلاً من مقارنة تاريخي ميلاد — راجع ميزة الاختيارات (أفضل التواريخ) لذلك.',
    matchStrength: 'قوة التوافق',
    breakdown: 'التفاصيل',
    sunSign: 'برج الشمس',
    moonSign: 'برج القمر',
    venusMars: 'الانجذاب (الزهرة-المريخ)',
    uncertainNote: 'أحد تاريخي الميلاد قريب من تغيّر برج القمر — دون وقت ميلاد دقيق، قد لا يكون برج القمر المعروض دقيقًا.',
  },
};

const qualityColor: Record<AstrologicalCompatibility['overallQuality'], string> = {
  'excellent': '#16A34A',
  'very-good': '#16A34A',
  'good': COMPAT_THEME.indigo,
  'moderate': COMPAT_THEME.amber,
  'challenging': COMPAT_THEME.danger,
};

export function AstrologicalCompatibilityView({ compatibility, language = 'en' }: AstrologicalCompatibilityViewProps) {
  const c = COPY[language] ?? COPY.en;
  const { person1, person2, methods, overallScore, overallQuality } = compatibility;
  const scoreRange = getScoreRange(overallScore, language);
  const qColor = qualityColor[overallQuality];

  return (
    <div className="rounded-3xl overflow-hidden" style={{ background: COMPAT_THEME.cardBg, border: `1px solid ${COMPAT_THEME.cardBorder}`, boxShadow: '0 10px 40px rgba(49,46,129,.06)' }}>
      <div className="max-w-2xl mx-auto px-6 py-14" style={{ color: COMPAT_THEME.ink }}>

        {/* Header */}
        <header className="text-center mb-10">
          <div className="font-technical text-[11px] tracking-[4px] font-bold" style={{ color: COMPAT_THEME.indigo }}>
            {c.eyebrow}
          </div>
          <h1 className="font-display font-semibold text-4xl mt-3.5 leading-tight">{c.title}</h1>
          <div className="flex items-center justify-center gap-3.5 mt-4 text-lg font-technical">
            <span>{person1.name}</span>
            <span aria-hidden="true" style={{ color: COMPAT_THEME.indigo }}>۞</span>
            <span>{person2.name}</span>
          </div>
        </header>

        {/* Not-ʿIlm-al-Nujūm disclaimer */}
        <div
          className="px-5 py-4 rounded-xl text-center text-[13.5px] leading-relaxed mb-10"
          style={{ background: COMPAT_THEME.surface, border: `1px solid ${COMPAT_THEME.surfaceBorder}`, color: COMPAT_THEME.muted }}
        >
          <span className="mr-2" aria-hidden="true">ⓘ</span>
          {c.disclaimer}
        </div>

        {/* Overall Score */}
        <section className="flex flex-col items-center text-center">
          <div className="font-technical text-[11px] tracking-[3px] uppercase font-bold mb-4" style={{ color: COMPAT_THEME.indigo }}>
            {c.matchStrength}
          </div>

          <CompatibilityGauge score={overallScore} size="lg" color={qColor} trackColor={COMPAT_THEME.line} showPercentage />

          <h2 className="font-display font-semibold text-3xl mt-5 mb-1" style={{ color: qColor }}>
            {scoreRange.icon} {scoreRange.label}
          </h2>
          <p className="text-sm mt-1 max-w-md" style={{ color: COMPAT_THEME.muted }}>
            {scoreRange.description}
          </p>
        </section>

        <Rule />

        {/* Breakdown */}
        <section>
          <h2 className="font-display font-semibold text-2xl mb-6">{c.breakdown}</h2>

          <div className="space-y-5">

            {/* Sun Sign */}
            <MethodCard
              icon="☀️"
              title={c.sunSign}
              score={methods.sunSign.score}
              signLine={`${ZODIAC_DATA[methods.sunSign.person1Sign].symbol} ${methods.sunSign.person1Sign} × ${ZODIAC_DATA[methods.sunSign.person2Sign].symbol} ${methods.sunSign.person2Sign}`}
              description={methods.sunSign.description}
            />

            {/* Moon Sign */}
            <MethodCard
              icon="🌙"
              title={c.moonSign}
              score={methods.moonSign.score}
              signLine={`${ZODIAC_DATA[methods.moonSign.person1Sign].symbol} ${methods.moonSign.person1Sign} × ${ZODIAC_DATA[methods.moonSign.person2Sign].symbol} ${methods.moonSign.person2Sign}`}
              description={methods.moonSign.description}
            >
              {methods.moonSign.uncertain && (
                <div
                  className="flex items-start gap-2 p-2.5 rounded-lg mt-3"
                  style={{ background: '#FFF8EA', border: '1px solid #F6E4BC' }}
                >
                  <span className="flex-shrink-0" style={{ color: COMPAT_THEME.amber }}>⚠</span>
                  <p className="text-xs" style={{ color: COMPAT_THEME.amber }}>{c.uncertainNote}</p>
                </div>
              )}
            </MethodCard>

            {/* Venus-Mars */}
            <MethodCard
              icon="💫"
              title={c.venusMars}
              score={methods.venusMars.score}
              signLine={`♀ ${methods.venusMars.person1VenusSign} × ♂ ${methods.venusMars.person2MarsSign}`}
              description={methods.venusMars.description}
            />

          </div>
        </section>

      </div>
    </div>
  );
}

function MethodCard({
  icon, title, score, signLine, description, children,
}: {
  icon: string;
  title: string;
  score: number;
  signLine: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className="rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5"
      style={{ background: COMPAT_THEME.surface, border: `1px solid ${COMPAT_THEME.surfaceBorder}` }}
    >
      <div className="flex-shrink-0">
        <CompatibilityGauge score={score} size="sm" color={COMPAT_THEME.indigo} trackColor={COMPAT_THEME.line} showPercentage />
      </div>
      <div className="text-center sm:text-left">
        <h3 className="font-display font-semibold text-lg" style={{ color: COMPAT_THEME.ink }}>
          {icon} {title}
        </h3>
        <p className="text-sm mt-0.5" style={{ color: COMPAT_THEME.muted }}>{signLine}</p>
        <p className="text-sm leading-relaxed mt-2.5" style={{ color: COMPAT_THEME.ink }}>{description}</p>
        {children}
      </div>
    </div>
  );
}

function Rule() {
  return (
    <div className="flex items-center gap-3.5 my-9" aria-hidden="true">
      <span className="flex-1 h-px" style={{ background: COMPAT_THEME.line }} />
      <span className="text-[13px]" style={{ color: COMPAT_THEME.indigoSoft }}>۞</span>
      <span className="flex-1 h-px" style={{ background: COMPAT_THEME.line }} />
    </div>
  );
}
