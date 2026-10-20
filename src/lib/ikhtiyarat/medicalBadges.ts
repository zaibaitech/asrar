/**
 * Medical-specific informational badges — parallel to travelBadges.ts.
 * Surfaces the classical Zodiac Man caution (avoid procedures on the
 * body part ruled by the sign the Moon occupies, see zodiacMan.ts) as a
 * caution note. Never affects score: this engine has no per-request
 * "target body part" input, so it cannot be evaluated as a pass/fail
 * rule the way the other significators in medical.ts can — same
 * reasoning as travelBadges.ts's Friday-Jumuʿah caution.
 */

import { ElectionResult } from './types';
import { ZODIAC_MAN_BODY_PART } from './zodiacMan';
import { ZodiacSign } from '../planetary/types';

export interface MedicalBadge {
  id: string;
  label: { en: string; fr: string; ar: string; ur?: string };
  note: { en: string; fr: string; ar: string; ur?: string };
  tone: 'positive' | 'neutral' | 'caution';
}

/** Badges derived from the chosen bestWindow's Moon sign and day-of-week. Score-neutral. */
export function getMedicalBadges(result: ElectionResult, moonSign: ZodiacSign): MedicalBadge[] {
  const badges: MedicalBadge[] = [];
  const bodyPart = ZODIAC_MAN_BODY_PART[moonSign];
  const dayOfWeek = result.bestWindow.time.getDay();

  badges.push({
    id: 'zodiac-man-caution',
    label: { en: 'Zodiac Man Caution', fr: 'Prudence — Homme Zodiacal', ar: 'تنبيه الإنسان الفلكي', ur: 'احتیاط — بروج اور اعضائے جسم' },
    note: {
      en: `The Moon is in a sign classically ruling the ${bodyPart.en}. Traditional sources advise avoiding surgery or bloodletting on that area while the Moon transits its ruling sign — informational only, always follow qualified medical advice.`,
      fr: `La Lune est dans un signe qui gouverne classiquement ${bodyPart.fr}. Les sources traditionnelles conseillent d'éviter une chirurgie ou une saignée sur cette zone pendant que la Lune transite son signe régent — ceci est purement informatif, suivez toujours l'avis d'un professionnel de santé qualifié.`,
      ar: `القمر في برج يحكم تقليديًا ${bodyPart.ar}. تنصح المصادر التقليدية بتجنب الجراحة أو الفصد في تلك المنطقة أثناء عبور القمر لبرجه الحاكم — هذا للعلم فقط، اتبع دائمًا نصيحة طبية مؤهلة.`,
      // Draft: not reviewed by a native Urdu reader or a medical professional.
      ur: `قمر اس وقت ایک ایسے برج میں ہے جو روایتی طور پر ${bodyPart.ur} پر حاکم مانا جاتا ہے۔ روایتی ماخذ کہتے ہیں کہ جب تک قمر اس برج میں ہو، جسم کے اس حصے کی سرجری یا فصد سے گریز کیا جائے۔ یہ محض معلومات ہیں: ہمیشہ مستند طبی ماہر کے مشورے پر عمل کریں اور ضروری علاج میں تاخیر نہ کریں۔`,
    },
    tone: 'caution',
  });

  if (dayOfWeek === 1) {
    badges.push({
      id: 'monday',
      label: { en: 'Monday', fr: 'Lundi', ar: 'يوم الاثنين' },
      note: {
        en: 'Monday is the day of the Moon, the classical significator of the body — informational only.',
        fr: 'Le lundi est le jour de la Lune, le significateur classique du corps — ceci est informatif uniquement.',
        ar: 'الاثنين هو يوم القمر، الدلالة الكلاسيكية للجسد — هذا للعلم فقط.',
      },
      tone: 'neutral',
    });
  }

  return badges;
}
