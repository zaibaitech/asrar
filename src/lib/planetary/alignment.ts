/**
 * Element Alignment Utilities
 * Extracted from asrar-mobile/services/MomentAlignmentService.ts
 */

import { Element, AlignmentStatus, IlmNujumBadge, IlmNujumBadgeTier } from './types';

/**
 * Calculate alignment status between user element and time element
 */
export function getAlignmentStatus(
  userElement: Element,
  timeElement: Element
): AlignmentStatus {
  // Same element = ACT
  if (userElement === timeElement) {
    return 'ACT';
  }
  
  // Complementary elements = MAINTAIN
  const complementary =
    (userElement === 'fire' && timeElement === 'air') ||
    (userElement === 'air' && timeElement === 'fire') ||
    (userElement === 'water' && timeElement === 'earth') ||
    (userElement === 'earth' && timeElement === 'water');
  
  if (complementary) {
    return 'MAINTAIN';
  }
  
  // All other combinations = HOLD
  return 'HOLD';
}

/**
 * Calculate harmony score between elements (0-100)
 */
export function calculateHarmonyScore(
  userElement: Element,
  timeElement: Element
): number {
  const status = getAlignmentStatus(userElement, timeElement);
  
  switch (status) {
    case 'ACT':
      return 85; // Perfect alignment
    case 'MAINTAIN':
      return 65; // Complementary
    case 'HOLD':
      return 40; // Neutral/challenging
    default:
      return 50;
  }
}

/**
 * Get Ilm Nujum badge tier based on score
 */
export function getIlmNujumTier(score: number): IlmNujumBadgeTier {
  if (score >= 85) return 'auspicious';
  if (score >= 65) return 'proceed';
  if (score >= 45) return 'neutral';
  if (score >= 25) return 'cautious';
  return 'inauspicious';
}

/**
 * Get Ilm Nujum badge data
 */
export function getIlmNujumBadge(score: number): IlmNujumBadge {
  const tier = getIlmNujumTier(score);
  
  const badges: Record<IlmNujumBadgeTier, { labelEn: string; labelAr: string; color: string }> = {
    auspicious: { labelEn: 'Auspicious', labelAr: 'سعيد', color: '#FFD700' },
    proceed: { labelEn: 'Proceed Mindfully', labelAr: 'تأنَّ', color: '#FFA500' },
    neutral: { labelEn: 'Neutral Window', labelAr: 'وقت محايد', color: '#64748B' },
    cautious: { labelEn: 'Cautious', labelAr: 'احترس', color: '#FF6B35' },
    inauspicious: { labelEn: 'Inauspicious', labelAr: 'نحس', color: '#EF4444' },
  };
  
  const badgeData = badges[tier];
  
  return {
    tier,
    labelEn: badgeData.labelEn,
    labelAr: badgeData.labelAr,
    color: badgeData.color,
    score,
  };
}
