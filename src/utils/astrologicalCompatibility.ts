/**
 * Astrological (date-of-birth) compatibility — a SEPARATE mode from the
 * Names/Abjad-based relationshipCompatibility.ts.
 *
 * IMPORTANT — this is deliberately NOT presented as ʿIlm al-Nujūm/classical
 * Islamic astrology. Research into Sahl ibn Bishr, al-Bīrūnī's Tafhīm, and
 * the classical ikhtiyārāt corpus found no authentic "compare two people's
 * birthdates" category: classical marriage astrology covers either (a)
 * reading ONE person's own chart for what their marriage/spouse tends to
 * look like (7th house, its lord, Venus/Mars significators), or (b)
 * ELECTING the best time to marry (already implemented in
 * src/lib/ikhtiyarat/elections/marriage.ts). Two-birthdate "compatibility
 * scoring" is a modern, Western-synastry-derived idea with no classical
 * Islamic source — so this module is labeled "Astrological Compatibility"
 * (general/modern), not ʿIlm al-Nujūm, in every user-facing string.
 *
 * Only what's honestly computable from a DATE alone (no birth time) is
 * used: Sun sign (fully reliable), Moon sign (reliable except on the
 * ~1-in-2.3-day window when the Moon changes sign — flagged when that
 * happens), and Venus/Mars SIGN placements (reliable at the sign level,
 * not exact degree). The Ascendant/houses are deliberately never used —
 * they require exact birth time and location and would not be reliable.
 *
 * Reuses the same JPL-verified ephemeris already used by the Ikhtiyārāt
 * engine (getPlanetPosition) and the existing ZODIAC_DATA element table —
 * no new astronomy, no hardcoded date-range sign tables.
 */

import { getPlanetPosition } from '../lib/ikhtiyarat/ephemeris';
import { ZODIAC_DATA } from '../lib/planetary/constants';
import { ZodiacSign, Element } from '../lib/planetary/types';
import {
  AstrologicalCompatibility,
  SunSignResult,
  MoonSignResult,
  VenusMarsResult,
} from '../types/compatibility';

/** Noon UTC on the given calendar date — a date-only chart has no birth time, so noon is a neutral, non-claiming default rather than midnight (which would bias toward a specific timezone's "yesterday"). */
function noonUtcOn(dateStr: string): Date {
  return new Date(`${dateStr}T12:00:00Z`);
}

/** True if the Moon changes zodiac sign within +/-18 hours of noon UTC on this date — the window where a date-only Moon sign is genuinely uncertain without a birth time. */
function isMoonSignUncertain(dateStr: string): boolean {
  const base = noonUtcOn(dateStr);
  const before = getPlanetPosition('Moon', new Date(base.getTime() - 18 * 60 * 60 * 1000));
  const after = getPlanetPosition('Moon', new Date(base.getTime() + 18 * 60 * 60 * 1000));
  return before.sign !== after.sign;
}

const ELEMENT_LABEL: Record<Element, { en: string; fr: string; ar: string; emoji: string }> = {
  fire: { en: 'Fire', fr: 'Feu', ar: 'النار', emoji: '🔥' },
  earth: { en: 'Earth', fr: 'Terre', ar: 'التراب', emoji: '🌍' },
  air: { en: 'Air', fr: 'Air', ar: 'الهواء', emoji: '💨' },
  water: { en: 'Water', fr: 'Eau', ar: 'الماء', emoji: '💧' },
};

/** Classical four-quality complementarity: same element = harmonious; Fire+Air and Earth+Water share a quality (hot or moist) = complementary; Fire+Water and Air+Earth are opposed qualities = friction; everything else = neutral. */
function elementPairScore(e1: Element, e2: Element): { score: number; relation: 'same' | 'complementary' | 'opposing' | 'neutral' } {
  if (e1 === e2) return { score: 90, relation: 'same' };
  const complementary = new Set(['fire-air', 'air-fire', 'earth-water', 'water-earth']);
  const opposing = new Set(['fire-water', 'water-fire', 'air-earth', 'earth-air']);
  const key = `${e1}-${e2}`;
  if (complementary.has(key)) return { score: 75, relation: 'complementary' };
  if (opposing.has(key)) return { score: 45, relation: 'opposing' };
  return { score: 60, relation: 'neutral' };
}

function signOfDate(planet: 'Sun' | 'Moon' | 'Venus' | 'Mars', dateStr: string): ZodiacSign {
  return getPlanetPosition(planet, noonUtcOn(dateStr)).sign;
}

function calculateSunSign(dob1: string, dob2: string, lang: 'en' | 'fr' | 'ar'): SunSignResult {
  const sign1 = signOfDate('Sun', dob1);
  const sign2 = signOfDate('Sun', dob2);
  const el1 = ZODIAC_DATA[sign1].element;
  const el2 = ZODIAC_DATA[sign2].element;
  const { score, relation } = elementPairScore(el1, el2);

  return {
    method: 'sun-sign',
    person1Sign: sign1,
    person2Sign: sign2,
    person1Element: el1,
    person2Element: el2,
    relation,
    score,
    description: describeElementRelation(relation, el1, el2, lang, 'sun'),
  };
}

function calculateMoonSign(dob1: string, dob2: string, lang: 'en' | 'fr' | 'ar'): MoonSignResult {
  const sign1 = signOfDate('Moon', dob1);
  const sign2 = signOfDate('Moon', dob2);
  const el1 = ZODIAC_DATA[sign1].element;
  const el2 = ZODIAC_DATA[sign2].element;
  const { score, relation } = elementPairScore(el1, el2);
  const uncertain = isMoonSignUncertain(dob1) || isMoonSignUncertain(dob2);

  return {
    method: 'moon-sign',
    person1Sign: sign1,
    person2Sign: sign2,
    person1Element: el1,
    person2Element: el2,
    relation,
    score,
    uncertain,
    description: describeElementRelation(relation, el1, el2, lang, 'moon'),
  };
}

function calculateVenusMars(dob1: string, dob2: string, lang: 'en' | 'fr' | 'ar'): VenusMarsResult {
  // Cross-axis: Person 1's Venus (what they're drawn to) against Person 2's
  // Mars (how they pursue/assert), and vice versa — the sign-level
  // approximation of the classical Venus-Mars attraction significator.
  const venus1 = signOfDate('Venus', dob1);
  const mars2 = signOfDate('Mars', dob2);
  const venus2 = signOfDate('Venus', dob2);
  const mars1 = signOfDate('Mars', dob1);

  const el1v = ZODIAC_DATA[venus1].element;
  const el2m = ZODIAC_DATA[mars2].element;
  const el2v = ZODIAC_DATA[venus2].element;
  const el1m = ZODIAC_DATA[mars1].element;

  const axis1 = elementPairScore(el1v, el2m);
  const axis2 = elementPairScore(el2v, el1m);
  const score = Math.round((axis1.score + axis2.score) / 2);
  const relation = score >= 80 ? 'same' : score >= 65 ? 'complementary' : score >= 50 ? 'neutral' : 'opposing';

  return {
    method: 'venus-mars',
    person1VenusSign: venus1,
    person1MarsSign: mars1,
    person2VenusSign: venus2,
    person2MarsSign: mars2,
    score,
    relation,
    description: describeVenusMars(relation, lang),
  };
}

function describeElementRelation(
  relation: 'same' | 'complementary' | 'opposing' | 'neutral',
  el1: Element,
  el2: Element,
  lang: 'en' | 'fr' | 'ar',
  axis: 'sun' | 'moon',
): string {
  const e1 = ELEMENT_LABEL[el1][lang];
  const e2 = ELEMENT_LABEL[el2][lang];
  const subject = axis === 'sun'
    ? { en: 'core temperament', fr: 'tempérament fondamental', ar: 'الطبع الأساسي' }
    : { en: 'emotional nature', fr: 'nature émotionnelle', ar: 'الطبيعة العاطفية' };

  const templates: Record<typeof relation, Record<'en' | 'fr' | 'ar', string>> = {
    same: {
      en: `Both share ${e1} ${subject.en} — an easy, instinctive rapport.`,
      fr: `Les deux partagent un ${subject.fr} de ${e1} — une entente facile et instinctive.`,
      ar: `يشترك الاثنان في ${subject.ar} ${e1} — انسجام سهل وفطري.`,
    },
    complementary: {
      en: `${e1} and ${e2} ${subject.en}s naturally support each other.`,
      fr: `Les ${subject.fr}s de ${e1} et ${e2} se soutiennent naturellement.`,
      ar: `${subject.ar} ${e1} و${e2} يدعمان بعضهما بشكل طبيعي.`,
    },
    opposing: {
      en: `${e1} and ${e2} ${subject.en}s can create friction without conscious effort.`,
      fr: `Les ${subject.fr}s de ${e1} et ${e2} peuvent créer des frictions sans effort conscient.`,
      ar: `${subject.ar} ${e1} و${e2} قد يخلقان احتكاكًا دون جهد واعٍ.`,
    },
    neutral: {
      en: `${e1} and ${e2} ${subject.en}s are independent — neither reinforcing nor clashing.`,
      fr: `Les ${subject.fr}s de ${e1} et ${e2} sont indépendants — ni renforcement ni conflit.`,
      ar: `${subject.ar} ${e1} و${e2} مستقلان — لا تعزيز ولا تعارض.`,
    },
  };

  return templates[relation][lang];
}

function describeVenusMars(relation: 'same' | 'complementary' | 'opposing' | 'neutral', lang: 'en' | 'fr' | 'ar'): string {
  const templates: Record<typeof relation, Record<'en' | 'fr' | 'ar', string>> = {
    same: {
      en: 'Strong mutual attraction — what each is drawn to matches how the other pursues connection.',
      fr: "Forte attraction mutuelle — ce vers quoi chacun est attiré correspond à la façon dont l'autre recherche le lien.",
      ar: 'انجذاب متبادل قوي — ما ينجذب إليه كل طرف يوافق طريقة الآخر في السعي للتواصل.',
    },
    complementary: {
      en: 'A workable attraction dynamic — different styles that can still click.',
      fr: "Une dynamique d'attraction viable — des styles différents qui peuvent tout de même s'accorder.",
      ar: 'ديناميكية انجذاب قابلة للعمل — أساليب مختلفة يمكن أن تنسجم رغم ذلك.',
    },
    neutral: {
      en: 'A mixed attraction dynamic, neither especially easy nor especially hard.',
      fr: "Une dynamique d'attraction mitigée, ni particulièrement facile ni particulièrement difficile.",
      ar: 'ديناميكية انجذاب متفاوتة، لا سهلة ولا صعبة بشكل خاص.',
    },
    opposing: {
      en: 'Attraction styles pull in different directions — may take deliberate effort to align.',
      fr: "Les styles d'attraction tirent dans des directions différentes — un effort délibéré peut être nécessaire pour s'aligner.",
      ar: 'أساليب الانجذاب تتجه في اتجاهات مختلفة — قد يتطلب الأمر جهدًا واعيًا للتوافق.',
    },
  };
  return templates[relation][lang];
}

function overallQualityFromScore(score: number): AstrologicalCompatibility['overallQuality'] {
  if (score >= 85) return 'excellent';
  if (score >= 75) return 'very-good';
  if (score >= 65) return 'good';
  if (score >= 50) return 'moderate';
  return 'challenging';
}

/**
 * Computes date-of-birth astrological compatibility. dob1/dob2 are
 * YYYY-MM-DD strings (date only, no birth time — see module doc comment
 * for why that constrains which factors are used).
 */
export function analyzeAstrologicalCompatibility(
  person1Name: string,
  dob1: string,
  person2Name: string,
  dob2: string,
  language: 'en' | 'fr' | 'ar' = 'en',
): AstrologicalCompatibility {
  const sunSign = calculateSunSign(dob1, dob2, language);
  const moonSign = calculateMoonSign(dob1, dob2, language);
  const venusMars = calculateVenusMars(dob1, dob2, language);

  // Sun sign weighted highest (most reliable from date alone), Moon next,
  // Venus-Mars as a lighter supporting signal since it's a cross-axis
  // approximation rather than a direct single-planet comparison.
  const overallScore = Math.round(sunSign.score * 0.4 + moonSign.score * 0.35 + venusMars.score * 0.25);
  const overallQuality = overallQualityFromScore(overallScore);

  return {
    mode: 'astrological',
    person1: { name: person1Name, dob: dob1, sunSign: sunSign.person1Sign, moonSign: moonSign.person1Sign },
    person2: { name: person2Name, dob: dob2, sunSign: sunSign.person2Sign, moonSign: moonSign.person2Sign },
    methods: { sunSign, moonSign, venusMars },
    overallScore,
    overallQuality,
  };
}
