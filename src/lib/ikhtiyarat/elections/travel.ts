/**
 * Travel (Safar) election rules config.
 *
 * Classical electional-astrology considerations for starting a journey,
 * following the same shape as marriage.ts: Moon condition dominates (it
 * is the universal significator of the matter and of the traveler),
 * Mercury governs travel plans/documents, hard aspects to the malefics
 * (Mars, Saturn) warn of danger or delay en route, and the Moon's sign
 * modality (movable/fixed/mutable) and lunar mansion (a travel-specific
 * table, manazilTravel.ts — NOT the marriage one) add further texture.
 *
 * Reuses the same primitives already verified in marriage.ts: isInFall/
 * isInDetriment (static dignity tables), getSeparation (aspect geometry),
 * getMansionNumberFromLongitude (shared, election-agnostic longitude
 * math) — no new astronomy, only a new rule selection.
 *
 * Score-neutral Sunnah/fiqh badges for travel timing (bukūr, Thursday,
 * Friday caution) live in travelBadges.ts, not here — they never affect
 * the score, so they're kept out of the rules list entirely rather than
 * awarding 0 points for a "rule" that's actually just informational UI.
 */

import { ElectionRulesConfig, Rule, RuleContext, RuleResult, TierInfo } from '../types';
import { ZodiacSign } from '../../planetary/types';
import { isInFall, isInDetriment } from '../../planetary/dignities';
import { computeMaxAchievable } from '../engine';
import { getMansionNumberFromLongitude } from '../manzil-favorability';
import { getMansionTravelFavorability } from '../manazilTravel';
import { getSeparation } from '../aspects';

// SCHOLAR-REVIEW: modality (movable/fixed/mutable) classification, per
// Sahl ibn Bishr's Kitāb al-Ikhtiyārāt on journeys — movable (cardinal)
// signs favor swift movement and travel; fixed signs incline to delay
// and being detained; mutable signs are neutral for this purpose.
const MOVABLE_SIGNS: ZodiacSign[] = ['aries', 'cancer', 'libra', 'capricorn'];
const FIXED_SIGNS: ZodiacSign[] = ['taurus', 'leo', 'scorpio', 'aquarius'];

/** Civil-hours band for the "early departure" (bukūr) bonus — configurable, not tied to real sunrise. */
const BUKUR_START_HOUR = 5;
const BUKUR_END_HOUR = 10;

function rule(
  id: string,
  label: { en: string; fr: string; ar: string },
  fn: (ctx: RuleContext) => Omit<RuleResult, 'id' | 'label_en' | 'label_fr' | 'label_ar'> | null,
  opts?: { maxPoints?: number; exclusiveGroup?: string },
): Rule {
  return {
    id,
    label,
    maxPoints: opts?.maxPoints,
    exclusiveGroup: opts?.exclusiveGroup,
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

const moonModality = rule(
  'travel-moon-modality',
  { en: 'Moon Sign Modality (Movable/Fixed)', fr: 'Modalité du signe lunaire (cardinal/fixe)', ar: 'طبيعة برج القمر (منقلب أو ثابت)' },
  (ctx) => {
    const sign = ctx.positions.Moon.sign;
    if (MOVABLE_SIGNS.includes(sign)) {
      return {
        status: 'bonus',
        points: 12,
        detail_en: `Moon in ${sign} — a movable sign (burj munqalib); movable signs favor journeys and swift movement. [SCHOLAR-REVIEW]`,
        detail_fr: `Lune en ${sign} — un signe mobile (burj munqalib) ; les signes mobiles favorisent les voyages et les déplacements rapides. [À VÉRIFIER PAR UN SAVANT]`,
      };
    }
    if (FIXED_SIGNS.includes(sign)) {
      return {
        status: 'penalty',
        points: -8,
        detail_en: `Moon in ${sign} — a fixed sign; fixed signs incline to delay and being detained. [SCHOLAR-REVIEW]`,
        detail_fr: `Lune en ${sign} — un signe fixe ; les signes fixes inclinent au retard et à la rétention. [À VÉRIFIER PAR UN SAVANT]`,
      };
    }
    return {
      status: 'pass',
      points: 0,
      detail_en: `Moon in ${sign} — a mutable sign, neutral for travel timing.`,
      detail_fr: `Lune en ${sign} — un signe mutable, neutre pour le choix du moment de voyage.`,
    };
  },
  { maxPoints: 12 },
);

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
  { maxPoints: 8 },
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
  { maxPoints: 10 },
);

// Mirrors marriage.ts's makePlanetaryHourBonus: a factory closing over the
// strictHourRuler flag at config-build time. Travel's favorable-hour
// planets differ from marriage's (Jupiter/Moon/Mercury here vs.
// Venus/Moon/Jupiter there) — Mercury governs travel plans/communication,
// Jupiter governs safe/long journeys, Moon is the universal significator.
function makeTravelPlanetaryHourBonus(strict: boolean): Rule {
  return rule(
    'travel-planetary-hour',
    { en: 'Favorable Planetary Hour', fr: 'Heure planétaire favorable', ar: 'الساعة الفلكية الموافقة' },
    (ctx) => {
      const planet = ctx.planetaryHourPlanet;
      const favorable = planet === 'Jupiter' || planet === 'Moon' || planet === 'Mercury';
      const planetFr: Record<string, string> = { Jupiter: 'Jupiter', Moon: 'la Lune', Mercury: 'Mercure' };

      if (!favorable) {
        return { status: 'pass', points: 0, detail_en: 'This window is not in a Jupiter, Moon, or Mercury hour.', detail_fr: "Cette fenêtre ne se situe pas dans une heure de Jupiter, de la Lune ou de Mercure." };
      }

      if (strict) {
        const pos = ctx.positions[planet!];
        const isCombust = getSeparation(pos, ctx.positions.Sun) <= 8.5;
        const isRetro = pos.isRetrograde;
        const isFallOrDetriment = isInFall(planet!, pos.sign) || isInDetriment(planet!, pos.sign);
        if (isCombust || isRetro || isFallOrDetriment) {
          let reason = 'in fall/detriment';
          let reasonFr = 'en chute/exil';
          if (isCombust) { reason = 'combust'; reasonFr = 'combuste'; }
          else if (isRetro) { reason = 'retrograde'; reasonFr = 'rétrograde'; }
          return {
            status: 'pass', points: 0,
            detail_en: `This window is in the planetary hour of ${planet}, but ${planet} is ${reason} — no bonus. [SCHOLAR-REVIEW]`,
            detail_fr: `Cette fenêtre se situe dans l'heure planétaire de ${planetFr[planet!] ?? planet}, mais ${planetFr[planet!] ?? planet} est ${reasonFr} — aucun bonus. [SCHOLAR-REVIEW]`,
          };
        }
      }

      return { status: 'bonus', points: 6, detail_en: `This window falls in the planetary hour of ${planet}.`, detail_fr: `Cette fenêtre se situe dans l'heure planétaire de ${planetFr[planet!] ?? planet}.` };
    },
    { maxPoints: 6 },
  );
}

const sunnahBukur = rule(
  'travel-sunnah-bukur',
  { en: 'Early Departure (Bukūr)', fr: 'Départ matinal (Bukūr)', ar: 'التبكير في السفر' },
  (ctx) => {
    const inBukurBand = ctx.localHour >= BUKUR_START_HOUR && ctx.localHour < BUKUR_END_HOUR;
    return {
      status: inBukurBand ? 'bonus' : 'pass',
      points: inBukurBand ? 8 : 0,
      detail_en: inBukurBand
        ? 'Early departure — "Allāhumma bārik li-ummatī fī bukūrihā" (O Allah, bless my ummah in its early mornings).'
        : 'This window is not in the early-morning (bukūr) band.',
      detail_fr: inBukurBand
        ? 'Départ matinal — « Allāhumma bārik li-ummatī fī bukūrihā » (Ô Allah, bénis mon ummah dans ses matins).'
        : "Cette fenêtre ne se situe pas dans la tranche matinale (bukūr).",
    };
  },
  { maxPoints: 8 },
);

const travelManzilBonus = rule(
  'travel-lunar-mansion',
  { en: 'Lunar Mansion (Manzil) for Travel', fr: 'Manoir lunaire (Manzil) pour le voyage', ar: 'منزلة القمر للسفر' },
  (ctx) => {
    const mansionNumber = getMansionNumberFromLongitude(ctx.positions.Moon.longitude);
    const favorability = getMansionTravelFavorability(mansionNumber);
    if (favorability === 'favorable') {
      return {
        status: 'bonus',
        points: 6,
        detail_en: `Moon in lunar mansion ${mansionNumber} — favorable for travel. [SCHOLAR-REVIEW]`,
        detail_fr: `Lune dans le manoir lunaire ${mansionNumber} — favorable au voyage. [À VÉRIFIER PAR UN SAVANT]`,
      };
    }
    if (favorability === 'unfavorable') {
      return {
        status: 'penalty',
        points: -6,
        detail_en: `Moon in lunar mansion ${mansionNumber} — unfavorable for travel. [SCHOLAR-REVIEW]`,
        detail_fr: `Lune dans le manoir lunaire ${mansionNumber} — défavorable au voyage. [À VÉRIFIER PAR UN SAVANT]`,
      };
    }
    return {
      status: 'pass',
      points: 0,
      detail_en: `Moon in lunar mansion ${mansionNumber} — neutral for travel.`,
      detail_fr: `Lune dans le manoir lunaire ${mansionNumber} — neutre pour le voyage.`,
    };
  },
  { maxPoints: 6 },
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
  { maxPoints: 4 },
);

const dayOfWeekBonus = rule(
  'travel-day-of-week',
  { en: 'Day of the Week', fr: 'Jour de la semaine', ar: 'يوم الأسبوع' },
  (ctx) => {
    // Wednesday (Mercury) and Thursday (Jupiter) are the classical days
    // most associated with favorable travel/communication and safe
    // long-distance journeys, respectively. Thursday's label cites the
    // Prophet's ﷺ preference for setting out on journeys that day
    // (Bukhārī) — informational sourcing, not a change to the +5 value.
    if (ctx.dayOfWeek === 3) {
      return { status: 'bonus', points: 5, detail_en: 'Wednesday (day of Mercury) — favorable for travel and communication.', detail_fr: 'Mercredi (jour de Mercure) — favorable au voyage et à la communication.' };
    }
    if (ctx.dayOfWeek === 4) {
      return {
        status: 'bonus',
        points: 5,
        detail_en: 'Thursday — the Prophet ﷺ preferred to set out on journeys on Thursday (Bukhārī).',
        detail_fr: 'Jeudi — le Prophète ﷺ préférait partir en voyage le jeudi (Bukhārī).',
      };
    }
    return { status: 'pass', points: 0, detail_en: 'Not a day classically associated with favorable travel.', detail_fr: "Jour non associé de manière classique à un voyage favorable." };
  },
  { maxPoints: 5 },
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

/**
 * Builds the travel election config. A function rather than a bare object
 * because makeTravelPlanetaryHourBonus needs to close over strictHourRuler
 * at construction time — same reasoning as marriage.ts's
 * buildMarriageElectionConfig.
 */
function buildTravelElectionConfig(strictHourRuler: boolean): ElectionRulesConfig {
  const rules = [
    moonVoidOfCourse,
    moonMaleficHardAspect,
    moonCombust,
    moonModality,
    mercuryRetrograde,
    moonWaxingIncreasingLight,
    moonApplyingToBenefic,
    makeTravelPlanetaryHourBonus(strictHourRuler),
    sunnahBukur,
    travelManzilBonus,
    mercuryDignified,
    dayOfWeekBonus,
  ];
  return {
    electionType: 'travel',
    rules,
    tiers: TIERS,
    scoreToTier,
    civilHoursRange: { startHour: 6, endHour: 22 },
    strictHourRuler,
    maxAchievable: () => computeMaxAchievable(rules),
  };
}

export const travelElectionConfig: ElectionRulesConfig = buildTravelElectionConfig(false);

/** SCHOLAR-REVIEW variant with strictHourRuler enabled — parallels marriageElectionConfigStrictHourRuler. */
export const travelElectionConfigStrictHourRuler: ElectionRulesConfig = buildTravelElectionConfig(true);
