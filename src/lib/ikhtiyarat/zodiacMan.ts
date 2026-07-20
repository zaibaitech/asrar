/**
 * The "Zodiac Man" (Homo Signorum / melothesia) — the classical
 * sign-to-body-part table used across Greek, Islamic, and later European
 * traditional medicine to time surgery, bloodletting (faṣd/ḥijāma), and
 * medication. The one rule cited more consistently than any other across
 * primary and secondary sources: avoid operating on, or drawing blood
 * from, the body part ruled by the sign the Moon currently occupies.
 *
 * This ordering (head at Aries down to feet at Pisces) is stable across
 * sources and not in dispute the way some manzil/modality judgments
 * elsewhere in this feature are — so it is not tagged SCHOLAR-REVIEW.
 * What IS a first-pass judgment is which procedures/body-part categories
 * count as "affected" by a given election's target area — see medical.ts.
 */

import { ZodiacSign } from '../planetary/types';

export const ZODIAC_MAN_BODY_PART: Record<ZodiacSign, LocalizedBodyPart> = {
  aries: { en: 'head and face', fr: 'tête et visage' },
  taurus: { en: 'neck and throat', fr: 'cou et gorge' },
  gemini: { en: 'arms, hands, shoulders, and lungs', fr: 'bras, mains, épaules et poumons' },
  cancer: { en: 'chest and stomach', fr: 'poitrine et estomac' },
  leo: { en: 'heart and upper back', fr: 'cœur et haut du dos' },
  virgo: { en: 'abdomen and intestines', fr: 'abdomen et intestins' },
  libra: { en: 'kidneys and lower back', fr: 'reins et bas du dos' },
  scorpio: { en: 'reproductive organs and bladder', fr: 'organes reproducteurs et vessie' },
  sagittarius: { en: 'hips, thighs, and liver', fr: 'hanches, cuisses et foie' },
  capricorn: { en: 'knees, joints, and bones', fr: 'genoux, articulations et os' },
  aquarius: { en: 'ankles and shins', fr: 'chevilles et tibias' },
  pisces: { en: 'feet', fr: 'pieds' },
};

interface LocalizedBodyPart {
  en: string;
  fr: string;
}
