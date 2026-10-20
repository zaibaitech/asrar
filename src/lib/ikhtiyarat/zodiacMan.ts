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
  aries: { en: 'head and face', fr: 'tête et visage', ar: 'الرأس والوجه', ur: 'سر اور چہرہ' },
  taurus: { en: 'neck and throat', fr: 'cou et gorge', ar: 'العنق والحلق', ur: 'گردن اور حلق' },
  gemini: { en: 'arms, hands, shoulders, and lungs', fr: 'bras, mains, épaules et poumons', ar: 'الذراعان واليدان والكتفان والرئتان', ur: 'بازو، ہاتھ، کندھے اور پھیپھڑے' },
  cancer: { en: 'chest and stomach', fr: 'poitrine et estomac', ar: 'الصدر والمعدة', ur: 'سینہ اور معدہ' },
  leo: { en: 'heart and upper back', fr: 'cœur et haut du dos', ar: 'القلب وأعلى الظهر', ur: 'دل اور اوپری کمر' },
  virgo: { en: 'abdomen and intestines', fr: 'abdomen et intestins', ar: 'البطن والأمعاء', ur: 'پیٹ اور آنتیں' },
  libra: { en: 'kidneys and lower back', fr: 'reins et bas du dos', ar: 'الكليتان وأسفل الظهر', ur: 'گردے اور نچلی کمر' },
  scorpio: { en: 'reproductive organs and bladder', fr: 'organes reproducteurs et vessie', ar: 'الأعضاء التناسلية والمثانة', ur: 'تولیدی اعضا اور مثانہ' },
  sagittarius: { en: 'hips, thighs, and liver', fr: 'hanches, cuisses et foie', ar: 'الوركان والفخذان والكبد', ur: 'کولہے، رانیں اور جگر' },
  capricorn: { en: 'knees, joints, and bones', fr: 'genoux, articulations et os', ar: 'الركبتان والمفاصل والعظام', ur: 'گھٹنے، جوڑ اور ہڈیاں' },
  aquarius: { en: 'ankles and shins', fr: 'chevilles et tibias', ar: 'الكاحلان وقصبتا الساق', ur: 'ٹخنے اور پنڈلیاں' },
  pisces: { en: 'feet', fr: 'pieds', ar: 'القدمان', ur: 'پاؤں' },
};

/** ar and ur are AI drafts (anatomical terms): not reviewed by a medical professional or a native-language reviewer. */
export interface LocalizedBodyPart {
  en: string;
  fr: string;
  ar: string;
  ur: string;
}
