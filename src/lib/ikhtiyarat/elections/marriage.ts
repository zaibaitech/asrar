/**
 * Marriage (Nikāḥ) election rules config.
 *
 * Adding a new election type (travel, business launch, moving house, ...)
 * means writing a new sibling file implementing ElectionRulesConfig — the
 * engine (../engine.ts) never changes.
 *
 * Reuses (read-only, static-table only):
 *  - src/lib/planetary/dignities.ts — EXALTATIONS/FALLS/DETRIMENTS/PLANET_RULERSHIPS
 *    via calculateDignities()'s `primary`/`all`. We never read `condition`/
 *    `totalScore`/`isRetrograde` from that module here — this engine computes
 *    its own retrograde/time-varying state independently (see ephemeris.ts),
 *    per the historical bug where a time-varying tier got conflated with a
 *    static essential-dignity label (commits 2802e8e, 03a054a).
 *
 * Every rule's `detail_en`/`detail_fr` must be produced together — see
 * RuleRow.tsx, which renders whichever one matches the active UI language.
 */

import { isMoonVoidOfCourse, getSeparation, APPLYING_ORBS } from '../aspects';
import { angleDiff } from '../ephemeris';
import { ElectionRulesConfig, Rule, RuleContext, RuleResult, TierInfo, Tier } from '../types';
import { getMansionMarriageFavorability, getMansionNumberFromLongitude } from '../manzil-favorability';
import { isInFall, isInDetriment } from '../../planetary/dignities';

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

const darkMoon = rule(
  'dark-moon',
  { en: 'Dark of the Moon (Muḥāq)', fr: 'Lune obscure (Muḥāq)', ar: 'محاق القمر' },
  (ctx) => {
    const inMuhaq = ctx.moonElongation >= 315 && ctx.moonElongation <= 360;
    const elong = ctx.moonElongation.toFixed(1);
    return {
      status: inMuhaq ? 'hardfail' : 'pass',
      points: 0,
      detail_en: inMuhaq
        ? `Moon elongation ${elong}° — waning into the last quarter approaching new moon.`
        : `Moon elongation ${elong}° — not in muḥāq.`,
      detail_fr: inMuhaq
        ? `Élongation lunaire ${elong}° — décroissante vers le dernier quartier, proche de la nouvelle lune.`
        : `Élongation lunaire ${elong}° — pas en muḥāq.`,
    };
  },
);

const moonCombust = rule(
  'moon-combust',
  { en: 'Moon Combust (Muḥtaraq)', fr: 'Lune combuste (Muḥtaraq)', ar: 'احتراق القمر' },
  (ctx) => {
    const combust = ctx.moonSunSeparation <= 8.5;
    const sep = ctx.moonSunSeparation.toFixed(1);
    return {
      status: combust ? 'hardfail' : 'pass',
      points: 0,
      detail_en: combust
        ? `Moon is ${sep}° from the Sun — combust (muḥtaraq).`
        : `Moon is ${sep}° from the Sun — not combust.`,
      detail_fr: combust
        ? `La Lune est à ${sep}° du Soleil — combuste (muḥtaraq).`
        : `La Lune est à ${sep}° du Soleil — non combuste.`,
    };
  },
);

const moonVoidOfCourse = rule(
  'moon-void-of-course',
  { en: 'Moon Void of Course (Khāliya al-Sayr)', fr: 'Lune vide de course', ar: 'خالية السير' },
  (ctx) => {
    const voc = isMoonVoidOfCourse(ctx.datetime);
    return {
      status: voc ? 'hardfail' : 'pass',
      points: 0,
      detail_en: voc
        ? 'Moon has no applying Ptolemaic aspect before leaving its current sign — void of course.'
        : 'Moon has at least one applying aspect before changing sign.',
      detail_fr: voc
        ? "La Lune n'a aucun aspect ptolémaïque en application avant de quitter son signe actuel — vide de course."
        : 'La Lune a au moins un aspect en application avant de changer de signe.',
    };
  },
);

const moonMaleficSquareOrOpposition = rule(
  'moon-malefic-hard-aspect',
  { en: 'Moon Applying to Saturn/Mars (Hard Aspect)', fr: 'Lune appliquant à Saturne/Mars (aspect dur)', ar: 'تطبيق القمر بزحل أو المريخ' },
  (ctx) => {
    const hit = ctx.applyingAspects.find(
      a => (a.planet === 'Saturn' || a.planet === 'Mars')
        && (a.aspect === 'conjunction' || a.aspect === 'square' || a.aspect === 'opposition')
        && a.orb <= 6,
    );
    const aspectFr: Record<string, string> = { conjunction: 'conjonction', square: 'carré', opposition: 'opposition' };
    const planetFr: Record<string, string> = { Saturn: 'Saturne', Mars: 'Mars' };
    return {
      status: hit ? 'hardfail' : 'pass',
      points: 0,
      detail_en: hit
        ? `Moon applying to ${hit.aspect} with ${hit.planet}, orb ${hit.orb.toFixed(1)}°.`
        : 'No applying hard aspect to Saturn or Mars within 6°.',
      detail_fr: hit
        ? `Lune en application de ${aspectFr[hit.aspect] ?? hit.aspect} avec ${planetFr[hit.planet] ?? hit.planet}, orbe ${hit.orb.toFixed(1)}°.`
        : 'Aucun aspect dur en application avec Saturne ou Mars à moins de 6°.',
    };
  },
);

const eclipseProximity = rule(
  'eclipse-proximity',
  { en: 'Eclipse Proximity', fr: "Proximité d'éclipse", ar: 'قرب الكسوف أو الخسوف' },
  (ctx) => {
    const nearEclipse = Math.abs(ctx.nearestEclipseHours) <= 24;
    const hours = ctx.nearestEclipseHours.toFixed(1);
    return {
      status: nearEclipse ? 'hardfail' : 'pass',
      points: 0,
      detail_en: nearEclipse
        ? `A solar or lunar eclipse falls within 24 hours (${hours}h away).`
        : 'No eclipse within 24 hours.',
      detail_fr: nearEclipse
        ? `Une éclipse solaire ou lunaire survient dans les 24 heures (${hours}h).`
        : 'Aucune éclipse dans les 24 heures.',
    };
  },
);

// ============================================================================
// PENALTIES
// ============================================================================

const underTheBeams = rule(
  'under-the-beams',
  { en: 'Moon Under the Sun’s Beams (Taḥt al-Shuʿāʿ)', fr: 'Lune sous les rayons du soleil', ar: 'تحت الشعاع' },
  (ctx) => {
    const under = ctx.moonSunSeparation > 8.5 && ctx.moonSunSeparation <= 17;
    const sep = ctx.moonSunSeparation.toFixed(1);
    return under
      ? { status: 'penalty', points: -15, detail_en: `Moon is ${sep}° from the Sun — under the beams.`, detail_fr: `La Lune est à ${sep}° du Soleil — sous les rayons.` }
      : { status: 'pass', points: 0, detail_en: 'Moon is not under the beams.', detail_fr: "La Lune n'est pas sous les rayons du soleil." };
  },
);

const moonWaning = rule(
  'moon-waning',
  { en: 'Moon Waning', fr: 'Lune décroissante', ar: 'القمر في النقصان' },
  (ctx) => {
    const waning = ctx.moonElongation > 180 && ctx.moonElongation < 315;
    const elong = ctx.moonElongation.toFixed(1);
    return waning
      ? { status: 'penalty', points: -20, detail_en: `Moon elongation ${elong}° — waning.`, detail_fr: `Élongation lunaire ${elong}° — décroissante.` }
      : { status: 'pass', points: 0, detail_en: 'Moon is not in the waning penalty band.', detail_fr: "La Lune n'est pas dans la zone de pénalité décroissante." };
  },
);

const viaCombusta = rule(
  'via-combusta',
  { en: 'Via Combusta (Al-Ṭarīqa al-Muḥtariqa)', fr: 'Voie brûlante (Via Combusta)', ar: 'الطريقة المحترقة' },
  (ctx) => {
    const moon = ctx.positions.Moon;
    // 15° Libra -> 15° Scorpio = ecliptic longitude 195 -> 225
    const inVia = moon.longitude >= 195 && moon.longitude < 225;
    const lon = moon.longitude.toFixed(1);
    return inVia
      ? { status: 'penalty', points: -15, detail_en: `Moon at ${lon}° ecliptic — within via combusta (15° Libra–15° Scorpio).`, detail_fr: `Lune à ${lon}° écliptique — dans la voie brûlante (15° Balance–15° Scorpion).` }
      : { status: 'pass', points: 0, detail_en: 'Moon is outside via combusta.', detail_fr: 'La Lune est hors de la voie brûlante.' };
  },
);

const moonFallOrDetriment = rule(
  'moon-fall-detriment',
  { en: 'Moon in Fall or Detriment', fr: 'Lune en chute ou en exil', ar: 'هبوط أو ضرر القمر' },
  (ctx) => {
    const sign = ctx.positions.Moon.sign;
    if (sign === 'scorpio') return { status: 'penalty', points: -10, detail_en: 'Moon in Scorpio — fall.', detail_fr: 'Lune en Scorpion — chute.' };
    if (sign === 'capricorn') return { status: 'penalty', points: -10, detail_en: 'Moon in Capricorn — detriment.', detail_fr: 'Lune en Capricorne — exil.' };
    return { status: 'pass', points: 0, detail_en: 'Moon is not in fall or detriment.', detail_fr: "La Lune n'est ni en chute ni en exil." };
  },
);

const venusCombust = rule(
  'venus-combust',
  { en: 'Venus Combust', fr: 'Vénus combuste', ar: 'احتراق الزهرة' },
  (ctx) => {
    const sep = getSeparation(ctx.positions.Venus, ctx.positions.Sun);
    const sepStr = sep.toFixed(1);
    return sep <= 8.5
      ? { status: 'penalty', points: -10, detail_en: `Venus is ${sepStr}° from the Sun — combust.`, detail_fr: `Vénus est à ${sepStr}° du Soleil — combuste.` }
      : { status: 'pass', points: 0, detail_en: 'Venus is not combust.', detail_fr: "Vénus n'est pas combuste." };
  },
);

const venusRetrograde = rule(
  'venus-retrograde',
  { en: 'Venus Retrograde', fr: 'Vénus rétrograde', ar: 'الزهرة في الرجوع' },
  (ctx) => ctx.positions.Venus.isRetrograde
    ? { status: 'penalty', points: -15, detail_en: 'Venus is retrograde.', detail_fr: 'Vénus est rétrograde.' }
    : { status: 'pass', points: 0, detail_en: 'Venus is direct.', detail_fr: 'Vénus est directe.' },
);

const venusDebilitated = rule(
  'venus-fall-detriment',
  { en: 'Venus in Fall or Detriment', fr: 'Vénus en chute ou en exil', ar: 'هبوط أو ضرر الزهرة' },
  (ctx) => {
    const sign = ctx.positions.Venus.sign;
    const signFr: Record<string, string> = { virgo: 'Vierge', aries: 'Bélier', scorpio: 'Scorpion' };
    if (sign === 'virgo') return { status: 'penalty', points: -8, detail_en: 'Venus in Virgo — fall.', detail_fr: 'Vénus en Vierge — chute.' };
    if (sign === 'aries' || sign === 'scorpio') {
      return {
        status: 'penalty',
        points: -8,
        detail_en: `Venus in ${sign} — detriment.`,
        detail_fr: `Vénus en ${signFr[sign] ?? sign} — exil.`,
      };
    }
    return { status: 'pass', points: 0, detail_en: 'Venus is not in fall or detriment.', detail_fr: "Vénus n'est ni en chute ni en exil." };
  },
);

const mercuryRetrograde = rule(
  'mercury-retrograde',
  { en: 'Mercury Retrograde (Contract Signing)', fr: 'Mercure rétrograde (signature du contrat)', ar: 'عطارد في الرجوع' },
  (ctx) => ctx.positions.Mercury.isRetrograde
    ? { status: 'penalty', points: -5, detail_en: 'Mercury is retrograde — caution for the nikāḥ contract itself.', detail_fr: 'Mercure est rétrograde — prudence pour le contrat de nikāḥ lui-même.' }
    : { status: 'pass', points: 0, detail_en: 'Mercury is direct.', detail_fr: 'Mercure est direct.' },
);

const moonSeparatingFromBenefics = rule(
  'moon-separating-benefics',
  { en: 'Moon Separating from Benefics', fr: 'Lune séparant des bénéfiques', ar: 'انفصال القمر عن السعود' },
  (ctx) => {
    const applyingToBenefic = ctx.applyingAspects.some(a => a.planet === 'Venus' || a.planet === 'Jupiter');
    return applyingToBenefic
      ? { status: 'pass', points: 0, detail_en: 'Moon is applying to a benefic today.', detail_fr: 'La Lune applique un aspect à un bénéfique aujourd’hui.' }
      : { status: 'penalty', points: -5, detail_en: 'Moon is not applying to Venus or Jupiter today — separating from the benefics.', detail_fr: "La Lune n'applique aucun aspect à Vénus ou Jupiter aujourd'hui — elle se sépare des bénéfiques." };
  },
);

// ============================================================================
// BONUSES
// ============================================================================

const moonWaxingClear = rule(
  'moon-waxing-clear',
  { en: 'Moon Waxing, Clear of the Beams', fr: 'Lune croissante, dégagée des rayons', ar: 'القمر في الزيادة وخارج الشعاع' },
  (ctx) => {
    const inRange = ctx.moonElongation >= 45 && ctx.moonElongation <= 170;
    const elong = ctx.moonElongation.toFixed(1);
    return inRange
      ? { status: 'bonus', points: 20, detail_en: `Moon elongation ${elong}° — waxing, clear of the beams, before full.`, detail_fr: `Élongation lunaire ${elong}° — croissante, dégagée des rayons, avant la pleine lune.` }
      : { status: 'pass', points: 0, detail_en: 'Moon is not in the favorable waxing band.', detail_fr: "La Lune n'est pas dans la zone croissante favorable." };
  },
);

const moonDignity = rule(
  'moon-dignity',
  { en: 'Moon Essential Dignity', fr: 'Dignité essentielle de la Lune', ar: 'كرامة القمر الأساسية' },
  (ctx) => {
    const sign = ctx.positions.Moon.sign;
    const signFr: Record<string, string> = { pisces: 'Poissons', libra: 'Balance' };
    if (sign === 'cancer') return { status: 'bonus', points: 12, detail_en: 'Moon in Cancer — domicile.', detail_fr: 'Lune en Cancer — domicile.' };
    if (sign === 'taurus') return { status: 'bonus', points: 15, detail_en: 'Moon in Taurus — exaltation.', detail_fr: 'Lune en Taureau — exaltation.' };
    if (sign === 'pisces' || sign === 'libra') {
      return {
        status: 'bonus',
        points: 8,
        detail_en: `Moon in ${sign}.`,
        detail_fr: `Lune en ${signFr[sign] ?? sign}.`,
      };
    }
    return { status: 'pass', points: 0, detail_en: 'Moon has no marriage-favorable dignity bonus in this sign.', detail_fr: 'La Lune ne bénéficie d’aucune dignité favorable au mariage dans ce signe.' };
  },
);

const moonApplyingToBeneficBonus = rule(
  'moon-applying-benefic',
  { en: 'Moon Applying to Venus or Jupiter', fr: 'Lune appliquant à Vénus ou Jupiter', ar: 'تطبيق القمر بالزهرة أو المشتري' },
  (ctx) => {
    const toVenus = ctx.applyingAspects.find(
      a => a.planet === 'Venus' && (a.aspect === 'conjunction' || a.aspect === 'sextile' || a.aspect === 'trine'),
    );
    const toJupiter = ctx.applyingAspects.find(
      a => a.planet === 'Jupiter' && (a.aspect === 'conjunction' || a.aspect === 'sextile' || a.aspect === 'trine'),
    );
    const aspectFr: Record<string, string> = { conjunction: 'conjonction', sextile: 'sextile', trine: 'trigone' };
    if (toVenus) {
      return {
        status: 'bonus',
        points: 12,
        detail_en: `Moon applying to ${toVenus.aspect} with Venus, orb ${toVenus.orb.toFixed(1)}°.`,
        detail_fr: `Lune en application de ${aspectFr[toVenus.aspect] ?? toVenus.aspect} avec Vénus, orbe ${toVenus.orb.toFixed(1)}°.`,
      };
    }
    if (toJupiter) {
      return {
        status: 'bonus',
        points: 10,
        detail_en: `Moon applying to ${toJupiter.aspect} with Jupiter, orb ${toJupiter.orb.toFixed(1)}°.`,
        detail_fr: `Lune en application de ${aspectFr[toJupiter.aspect] ?? toJupiter.aspect} avec Jupiter, orbe ${toJupiter.orb.toFixed(1)}°.`,
      };
    }
    return { status: 'pass', points: 0, detail_en: 'Moon is not applying to Venus or Jupiter by a favorable aspect.', detail_fr: "La Lune n'applique aucun aspect favorable à Vénus ou Jupiter." };
  },
);

const venusDignified = rule(
  'venus-dignified',
  { en: 'Venus Dignified', fr: 'Vénus dignifiée', ar: 'الزهرة في شرف' },
  (ctx) => {
    const sign = ctx.positions.Venus.sign;
    const signFr: Record<string, string> = { taurus: 'Taureau', libra: 'Balance' };
    if (sign === 'taurus' || sign === 'libra') {
      return {
        status: 'bonus',
        points: 8,
        detail_en: `Venus in ${sign} — domicile.`,
        detail_fr: `Vénus en ${signFr[sign] ?? sign} — domicile.`,
      };
    }
    if (sign === 'pisces') return { status: 'bonus', points: 10, detail_en: 'Venus in Pisces — exaltation.', detail_fr: 'Vénus en Poissons — exaltation.' };
    return { status: 'pass', points: 0, detail_en: 'Venus has no dignity bonus in this sign.', detail_fr: "Vénus ne bénéficie d'aucune dignité dans ce signe." };
  },
);

const dayOfWeekBonus = rule(
  'day-of-week',
  { en: 'Day of the Week', fr: 'Jour de la semaine', ar: 'يوم الأسبوع' },
  (ctx) => {
    if (ctx.dayOfWeek === 5) return { status: 'bonus', points: 10, detail_en: "Friday (Jumu'ah) — most recommended day in fiqh.", detail_fr: 'Vendredi (Jumuʿah) — jour le plus recommandé en fiqh.' };
    if (ctx.dayOfWeek === 4) return { status: 'bonus', points: 8, detail_en: 'Thursday.', detail_fr: 'Jeudi.' };
    if (ctx.dayOfWeek === 1) return { status: 'bonus', points: 6, detail_en: 'Monday.', detail_fr: 'Lundi.' };
    return { status: 'pass', points: 0, detail_en: 'No day-of-week bonus.', detail_fr: 'Aucun bonus lié au jour de la semaine.' };
  },
);

// SCHOLAR-REVIEW: strictHourRuler additionally requires the ruling planet
// itself not be afflicted (combust, retrograde, or in fall/detriment) at
// that hour before granting the bonus — e.g. a Venus hour while Venus is
// in Virgo (its fall) should arguably not earn +6. Defaults to false
// (existing scoring unchanged) pending scholarly verification; built as a
// factory closing over the flag at config-build time so the engine and
// RuleContext don't need to carry config-specific state.
function makePlanetaryHourBonus(strict: boolean): Rule {
  return rule(
    'planetary-hour',
    { en: 'Favorable Planetary Hour', fr: 'Heure planétaire favorable', ar: 'الساعة الفلكية الموافقة' },
    (ctx) => {
      const planet = ctx.planetaryHourPlanet;
      const favorable = planet === 'Venus' || planet === 'Moon' || planet === 'Jupiter';
      const planetFr: Record<string, string> = { Venus: 'Vénus', Moon: 'la Lune', Jupiter: 'Jupiter' };

      if (!favorable) {
        return { status: 'pass', points: 0, detail_en: 'This window is not in a Venus, Moon, or Jupiter hour.', detail_fr: "Cette fenêtre ne se situe pas dans une heure de Vénus, de la Lune ou de Jupiter." };
      }

      if (strict) {
        const pos = ctx.positions[planet!];
        const isCombust = getSeparation(pos, ctx.positions.Sun) <= 8.5;
        const isRetro = pos.isRetrograde;
        // Direct fall/detriment table lookup (not the net isDebilitated()
        // dignity score) — a planet in its classical fall disqualifies the
        // bonus outright here, even if simultaneous minor dignities (terms,
        // face, day-triplicity) would otherwise net its overall score
        // positive. E.g. Venus in Virgo (its fall) nets +2 by day once
        // terms/face/triplicity are added in, but is still "in fall" in
        // the plain classical sense this flag is checking for.
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
  );
}

const lunarMansionBonus = rule(
  'lunar-mansion',
  { en: 'Lunar Mansion (Manzil)', fr: 'Manoir lunaire (Manzil)', ar: 'منزلة القمر' },
  (ctx) => {
    const mansionNumber = getMansionNumberFromLongitude(ctx.positions.Moon.longitude);
    const favorability = getMansionMarriageFavorability(mansionNumber);
    if (favorability === 'favorable') {
      return {
        status: 'bonus',
        points: 6,
        detail_en: `Moon in lunar mansion ${mansionNumber} — favorable for marriage. [SCHOLAR-REVIEW]`,
        detail_fr: `Lune dans le manoir lunaire ${mansionNumber} — favorable au mariage. [À VÉRIFIER PAR UN SAVANT]`,
      };
    }
    if (favorability === 'unfavorable') {
      return {
        status: 'penalty',
        points: -6,
        detail_en: `Moon in lunar mansion ${mansionNumber} — unfavorable for marriage. [SCHOLAR-REVIEW]`,
        detail_fr: `Lune dans le manoir lunaire ${mansionNumber} — défavorable au mariage. [À VÉRIFIER PAR UN SAVANT]`,
      };
    }
    return {
      status: 'pass',
      points: 0,
      detail_en: `Moon in lunar mansion ${mansionNumber} — neutral for marriage.`,
      detail_fr: `Lune dans le manoir lunaire ${mansionNumber} — neutre pour le mariage.`,
    };
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

/** Minimum score for the 'acceptable' (Maqbūl) tier — referenced by findNearestBetterDates too, so it isn't duplicated as a bare literal in engine.ts. */
export const ACCEPTABLE_THRESHOLD = 40;

function scoreToTier(score: number, hasHardFail: boolean): TierInfo {
  if (hasHardFail || score < 20) return TIERS.find(t => t.tier === 'avoid')!;
  if (score >= 80) return TIERS.find(t => t.tier === 'excellent')!;
  if (score >= 60) return TIERS.find(t => t.tier === 'good')!;
  if (score >= ACCEPTABLE_THRESHOLD) return TIERS.find(t => t.tier === 'acceptable')!;
  return TIERS.find(t => t.tier === 'weak')!;
}

/**
 * Builds the marriage election config. A function rather than a bare
 * object because planetaryHourBonus needs to close over strictHourRuler
 * at construction time (see makePlanetaryHourBonus above).
 */
function buildMarriageElectionConfig(strictHourRuler: boolean): ElectionRulesConfig {
  return {
    electionType: 'marriage',
    rules: [
      darkMoon,
      moonCombust,
      moonVoidOfCourse,
      moonMaleficSquareOrOpposition,
      eclipseProximity,
      underTheBeams,
      moonWaning,
      viaCombusta,
      moonFallOrDetriment,
      venusCombust,
      venusRetrograde,
      venusDebilitated,
      mercuryRetrograde,
      moonSeparatingFromBenefics,
      moonWaxingClear,
      moonDignity,
      moonApplyingToBeneficBonus,
      venusDignified,
      dayOfWeekBonus,
      makePlanetaryHourBonus(strictHourRuler),
      lunarMansionBonus,
    ],
    tiers: TIERS,
    scoreToTier,
    civilHoursRange: { startHour: 8, endHour: 22 },
    strictHourRuler,
  };
}

export const marriageElectionConfig: ElectionRulesConfig = buildMarriageElectionConfig(false);

/** SCHOLAR-REVIEW variant with strictHourRuler enabled — use for testing/comparison until the flag's default is decided. */
export const marriageElectionConfigStrictHourRuler: ElectionRulesConfig = buildMarriageElectionConfig(true);
