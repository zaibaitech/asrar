/**
 * Lunar mansion (manzil) favorability for Travel (Safar).
 *
 * A SEPARATE table from manzil-favorability.ts's marriage list — the two
 * elections do not share the same manzil favorability/unfavorability
 * judgments, so this file exists independently rather than reusing or
 * extending the marriage table.
 *
 * SCHOLAR-REVIEW: every non-neutral entry below is a first-pass placement
 * pending verification against Maghribi ikhtiyārāt sources. Any mansion
 * not listed in either array is left neutral (no bonus/penalty) rather
 * than guessed — per the same precedent as manzil-favorability.ts.
 */

// SCHOLAR-REVIEW: verify against primary sources before launch.
export const FAVORABLE_MANSIONS_FOR_TRAVEL: number[] = [1, 5, 10, 13, 19];

// SCHOLAR-REVIEW: verify against primary sources before launch.
export const UNFAVORABLE_MANSIONS_FOR_TRAVEL: number[] = [3, 15, 21];

export function getMansionTravelFavorability(mansionNumber: number): 'favorable' | 'unfavorable' | 'neutral' {
  if (FAVORABLE_MANSIONS_FOR_TRAVEL.includes(mansionNumber)) return 'favorable';
  if (UNFAVORABLE_MANSIONS_FOR_TRAVEL.includes(mansionNumber)) return 'unfavorable';
  return 'neutral';
}
