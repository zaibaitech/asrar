/**
 * Travel (Safar) election rules config.
 *
 * Classical electional-astrology considerations for starting a journey —
 * a smaller ruleset than marriage.ts's, following the same shape:
 * Moon condition dominates (it is the universal significator of the
 * matter and of the traveler), Mercury governs travel plans/documents,
 * and hard aspects to the malefics (Mars, Saturn) warn of danger or
 * delay en route.
 *
 * Reuses the same primitives already verified in marriage.ts: isInFall/
 * isInDetriment (static dignity tables), getSeparation/APPLYING_ORBS
 * (aspect geometry) — no new astronomy, only a new rule selection.
 */

import { ElectionRulesConfig, Rule, RuleContext, RuleResult, TierInfo } from '../types';
import { isInFall, isInDetriment } from '../../planetary/dignities';

export const ENABLE_TRAVEL_ELECTION = true;

function rule(
  id: string,
  label: { en: string; fr: string; ar: string },
  fn: (ctx: RuleContext) => Omit<RuleResult, 'id' | 'label_en' | 'label_fr' | 'label_ar'> | null,
): Rule {
  return {
    id,
    label,
    evaluate(ctx) {
      const r = fn(ctx);
      if (!r) return null;
      return { id, label_en: label.en, label_fr: label.fr, label_ar: label.ar, ...r };
    },
  };
}

// ============================================================================
// HARD FAILS
// ============================================================================

const moonVoidOfCourse = rule(
  'travel-moon-void-of-course',
  { en: 'Moon Void of Course (Khāliya al-Sayr)', fr: 'Lune vide de course', ar: 'خالية السير' },
  (ctx) => {
    const voc = ctx.applyingAspects.length === 0;
    return {
      status: voc ? 'hardfail' : 'pass',
      points: 0,
      detail_en: voc
        ? 'Moon has no applying aspect before leaving its current sign — void of course, nothing "comes of" a journey begun now.'
        : 'Moon has at least one applying aspect — not void of course.',
      detail_fr: voc
        ? "La Lune n'a aucun aspect en application avant de quitter son signe — vide de course, un voyage commencé maintenant n'aboutira à rien de concret."
        : "La Lune a au moins un aspect en application — pas vide de course.",
    };
  },
);

const moonMaleficHardAspect = rule(
  'travel-moon-malefic-hard-aspect',
  { en: 'Moon Applying to Saturn/Mars (Hard Aspect)', fr: 'Lune appliquant à Saturne/Mars (aspect dur)', ar: 'تطبيق القمر بزحل أو المريخ' },
  (ctx) => {
    const hit = ctx.applyingAspects.find(
      a => (a.planet === 'Saturn' || a.planet === 'Mars') && (a.aspect === 'square' || a.aspect === 'opposition'),
    );
    return {
      status: hit ? 'hardfail' : 'pass',
      points: 0,
      detail_en: hit
        ? `Moon applying to a ${hit.aspect} with ${hit.planet}, orb ${hit.orb.toFixed(1)}° — traditionally warns of danger, delay, or mishap en route.`
        : 'Moon is not applying to a hard aspect with Saturn or Mars.',
      detail_fr: hit
        ? `Lune appliquant à un(e) ${hit.aspect === 'square' ? 'carré' : 'opposition'} avec ${hit.planet}, orbe ${hit.orb.toFixed(1)}° — avertit traditionnellement d'un danger, d'un retard ou d'un incident en chemin.`
        : "La Lune n'applique pas d'aspect dur à Saturne ou Mars.",
    };
  },
);

const moonCombust = rule(
  'travel-moon-combust',
  { en: 'Moon Combust (Muḥtaraq)', fr: 'Lune combuste (Muḥtaraq)', ar: 'احتراق القمر' },
  (ctx) => {
    const combust = ctx.moonSunSeparation <= 8.5;
    const sep = ctx.moonSunSeparation.toFixed(1);
    return {
      status: combust ? 'hardfail' : 'pass',
      points: 0,
      detail_en: combust
        ? `Moon is ${sep}° from the Sun — combust (muḥtaraq); the traveler's own significator is weakened.`
        : `Moon is ${sep}° from the Sun — not combust.`,
      detail_fr: combust
        ? `La Lune est à ${sep}° du Soleil — combuste (muḥtaraq) ; le significateur du voyageur est affaibli.`
        : `La Lune est à ${sep}° du Soleil — non combuste.`,
    };
  },
);

// ============================================================================
// PENALTIES / BONUSES
// ============================================================================

const mercuryRetrograde = rule(
  'travel-mercury-retrograde',
  { en: 'Mercury Retrograde (Travel Plans/Documents)', fr: 'Mercure rétrograde (plans/documents de voyage)', ar: 'عطارد في الرجوع' },
  (ctx) => ctx.positions.Mercury.isRetrograde
    ? { status: 'penalty', points: -8, detail_en: 'Mercury is retrograde — increased risk of itinerary changes, lost documents, or miscommunication.', detail_fr: "Mercure est rétrograde — risque accru de changements d'itinéraire, de documents perdus ou de malentendus." }
    : { status: 'pass', points: 0, detail_en: 'Mercury is direct.', detail_fr: 'Mercure est direct.' },
);

const moonWaxingIncreasingLight = rule(
  'travel-moon-waxing',
  { en: 'Moon Waxing, Increasing in Light', fr: 'Lune croissante, en augmentation de lumière', ar: 'القمر في الزيادة' },
  (ctx) => {
    const waxing = ctx.moonPhaseDirection === 'waxing';
    return {
      status: waxing ? 'bonus' : 'pass',
      points: waxing ? 8 : 0,
      detail_en: waxing
        ? `Moon elongation ${ctx.moonElongation.toFixed(1)}° — waxing, growing in light; favorable for setting out and making progress.`
        : `Moon elongation ${ctx.moonElongation.toFixed(1)}° — waning.`,
      detail_fr: waxing
        ? `Élongation lunaire ${ctx.moonElongation.toFixed(1)}° — croissante, en augmentation de lumière ; favorable pour partir et progresser.`
        : `Élongation lunaire ${ctx.moonElongation.toFixed(1)}° — décroissante.`,
    };
  },
);

const moonApplyingToBenefic = rule(
  'travel-moon-applying-to-benefic',
  { en: 'Moon Applying to Venus or Jupiter', fr: 'Lune appliquant à Vénus ou Jupiter', ar: 'تطبيق القمر بالزهرة أو المشتري' },
  (ctx) => {
    const hit = ctx.applyingAspects.find(
      a => (a.planet === 'Venus' || a.planet === 'Jupiter') && (a.aspect === 'trine' || a.aspect === 'sextile' || a.aspect === 'conjunction'),
    );
    return {
      status: hit ? 'bonus' : 'pass',
      points: hit ? 10 : 0,
      detail_en: hit
        ? `Moon applying to a ${hit.aspect} with ${hit.planet}, orb ${hit.orb.toFixed(1)}° — a smooth, well-supported journey.`
        : 'Moon is not applying to a favorable aspect with Venus or Jupiter.',
      detail_fr: hit
        ? `Lune appliquant à un(e) ${hit.aspect === 'trine' ? 'trigone' : hit.aspect === 'sextile' ? 'sextile' : 'conjonction'} avec ${hit.planet}, orbe ${hit.orb.toFixed(1)}° — un voyage fluide et bien soutenu.`
        : "La Lune n'applique pas d'aspect favorable à Vénus ou Jupiter.",
    };
  },
);

const mercuryDignified = rule(
  'travel-mercury-dignified',
  { en: 'Mercury Free of Fall/Detriment', fr: 'Mercure hors chute/exil', ar: 'عطارد خارج الهبوط والضرر' },
  (ctx) => {
    const pos = ctx.positions.Mercury;
    const afflicted = isInFall('Mercury', pos.sign) || isInDetriment('Mercury', pos.sign);
    return {
      status: afflicted ? 'pass' : 'bonus',
      points: afflicted ? 0 : 4,
      detail_en: afflicted
        ? `Mercury is in ${pos.sign} — in fall or detriment.`
        : `Mercury is in ${pos.sign} — free of fall or detriment, good for plans and correspondence.`,
      detail_fr: afflicted
        ? `Mercure est en ${pos.sign} — en chute ou en exil.`
        : `Mercure est en ${pos.sign} — hors chute et exil, favorable aux plans et à la correspondance.`,
    };
  },
);

const dayOfWeekBonus = rule(
  'travel-day-of-week',
  { en: 'Day of the Week', fr: 'Jour de la semaine', ar: 'يوم الأسبوع' },
  (ctx) => {
    // Wednesday (Mercury) and Thursday (Jupiter) are the classical days
    // most associated with favorable travel/communication and safe
    // long-distance journeys, respectively.
    if (ctx.dayOfWeek === 3) {
      return { status: 'bonus', points: 5, detail_en: 'Wednesday (day of Mercury) — favorable for travel and communication.', detail_fr: 'Mercredi (jour de Mercure) — favorable au voyage et à la communication.' };
    }
    if (ctx.dayOfWeek === 4) {
      return { status: 'bonus', points: 5, detail_en: 'Thursday (day of Jupiter) — favorable for long-distance and safe journeys.', detail_fr: 'Jeudi (jour de Jupiter) — favorable aux longs voyages et à la sécurité du trajet.' };
    }
    return { status: 'pass', points: 0, detail_en: 'Not a day classically associated with favorable travel.', detail_fr: "Jour non associé de manière classique à un voyage favorable." };
  },
);

// ============================================================================
// TIERS
// ============================================================================

const TIERS: TierInfo[] = [
  { tier: 'excellent', labelEn: 'Excellent', labelFr: 'Excellent', labelAr: 'ممتاز (Mumtāz)', color: '#22C55E' },
  { tier: 'good', labelEn: 'Good', labelFr: 'Bon', labelAr: 'جيد (Jayyid)', color: '#14B8A6' },
  { tier: 'acceptable', labelEn: 'Acceptable', labelFr: 'Acceptable', labelAr: 'مقبول (Maqbūl)', color: '#3B82F6' },
  { tier: 'weak', labelEn: 'Weak', labelFr: 'Faible', labelAr: 'ضعيف (Ḍaʿīf)', color: '#F59E0B' },
  { tier: 'avoid', labelEn: 'Avoid', labelFr: 'À éviter', labelAr: 'اجتناب (Ijtanib)', color: '#EF4444' },
];

export const TRAVEL_ACCEPTABLE_THRESHOLD = 40;

function scoreToTier(score: number, hasHardFail: boolean): TierInfo {
  if (hasHardFail || score < 20) return TIERS.find(t => t.tier === 'avoid')!;
  if (score >= 80) return TIERS.find(t => t.tier === 'excellent')!;
  if (score >= 60) return TIERS.find(t => t.tier === 'good')!;
  if (score >= TRAVEL_ACCEPTABLE_THRESHOLD) return TIERS.find(t => t.tier === 'acceptable')!;
  return TIERS.find(t => t.tier === 'weak')!;
}

export const travelElectionConfig: ElectionRulesConfig = {
  electionType: 'travel',
  rules: [
    moonVoidOfCourse,
    moonMaleficHardAspect,
    moonCombust,
    mercuryRetrograde,
    moonWaxingIncreasingLight,
    moonApplyingToBenefic,
    mercuryDignified,
    dayOfWeekBonus,
  ],
  tiers: TIERS,
  scoreToTier,
  civilHoursRange: { startHour: 6, endHour: 22 },
};
