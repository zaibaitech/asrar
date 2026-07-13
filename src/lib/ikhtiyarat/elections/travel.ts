/**
 * Travel election rules config — SCAFFOLD ONLY, not wired into any UI yet.
 *
 * This file exists purely to prove that adding a second election type
 * requires zero changes to ../engine.ts — only a new sibling file
 * implementing ElectionRulesConfig, exactly as marriage.ts's own header
 * comment promises. It is deliberately minimal (two placeholder rules)
 * rather than a real travel-election ruleset; that is a separate feature
 * to design later.
 *
 * Not imported by any UI component. Gate behind ENABLE_TRAVEL_ELECTION
 * before exposing it.
 */

import { ElectionRulesConfig, Rule, RuleContext, RuleResult, TierInfo } from '../types';

export const ENABLE_TRAVEL_ELECTION = false;

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

const moonVoidOfCoursePlaceholder = rule(
  'travel-moon-void-of-course',
  { en: 'Moon Void of Course', fr: 'Lune vide de course', ar: 'خالية السير' },
  (ctx) => ({
    status: ctx.applyingAspects.length === 0 ? 'hardfail' : 'pass',
    points: 0,
    detail_en: ctx.applyingAspects.length === 0
      ? 'Moon has no applying aspect — avoid starting a journey now.'
      : 'Moon has an applying aspect.',
    detail_fr: ctx.applyingAspects.length === 0
      ? "La Lune n'a aucun aspect en application — évitez de commencer un voyage maintenant."
      : 'La Lune a un aspect en application.',
  }),
);

const moonWaxingPlaceholder = rule(
  'travel-moon-waxing',
  { en: 'Waxing Moon', fr: 'Lune croissante', ar: 'القمر المتزايد' },
  (ctx) => ({
    status: ctx.moonPhaseDirection === 'waxing' ? 'bonus' : 'pass',
    points: ctx.moonPhaseDirection === 'waxing' ? 5 : 0,
    detail_en: `Moon is ${ctx.moonPhaseDirection}.`,
    detail_fr: `La Lune est ${ctx.moonPhaseDirection === 'waxing' ? 'croissante' : 'décroissante'}.`,
  }),
);

const TIERS: TierInfo[] = [
  { tier: 'excellent', labelEn: 'Excellent', labelFr: 'Excellent', labelAr: 'ممتاز (Mumtāz)', color: '#22C55E' },
  { tier: 'good', labelEn: 'Good', labelFr: 'Bon', labelAr: 'جيد (Jayyid)', color: '#14B8A6' },
  { tier: 'acceptable', labelEn: 'Acceptable', labelFr: 'Acceptable', labelAr: 'مقبول (Maqbūl)', color: '#3B82F6' },
  { tier: 'weak', labelEn: 'Weak', labelFr: 'Faible', labelAr: 'ضعيف (Ḍaʿīf)', color: '#F59E0B' },
  { tier: 'avoid', labelEn: 'Avoid', labelFr: 'À éviter', labelAr: 'اجتناب (Ijtanib)', color: '#EF4444' },
];

function scoreToTier(score: number, hasHardFail: boolean): TierInfo {
  if (hasHardFail || score < 20) return TIERS.find(t => t.tier === 'avoid')!;
  if (score >= 80) return TIERS.find(t => t.tier === 'excellent')!;
  if (score >= 60) return TIERS.find(t => t.tier === 'good')!;
  if (score >= 40) return TIERS.find(t => t.tier === 'acceptable')!;
  return TIERS.find(t => t.tier === 'weak')!;
}

export const travelElectionConfig: ElectionRulesConfig = {
  electionType: 'travel',
  rules: [moonVoidOfCoursePlaceholder, moonWaxingPlaceholder],
  tiers: TIERS,
  scoreToTier,
  civilHoursRange: { startHour: 8, endHour: 22 },
};
