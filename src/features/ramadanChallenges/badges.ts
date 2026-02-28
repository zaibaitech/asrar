/**
 * Badges & Achievements System
 * =============================
 * Gamification layer for spiritual challenges.
 * Awards badges for milestones, streaks, and progress.
 */

import type { Challenge } from './types';

// ─── Badge Types ─────────────────────────────────────────────────────────────────

export type BadgeCategory = 'MILESTONE' | 'STREAK' | 'COMPLETION' | 'SPECIAL';

export interface Badge {
  id: string;
  category: BadgeCategory;
  nameEn: string;
  nameFr: string;
  descriptionEn: string;
  descriptionFr: string;
  icon: string;
  /** Criteria to unlock this badge */
  criteria: (challenges: Challenge[]) => boolean;
  /** Rarity: common, rare, epic, legendary */
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

// ─── Badge Definitions ────────────────────────────────────────────────────────────

export const BADGES: Badge[] = [
  // ─── Milestone Badges ───
  {
    id: 'first_dhikr',
    category: 'MILESTONE',
    nameEn: 'First Step',
    nameFr: 'Premier Pas',
    descriptionEn: 'Logged your first dhikr',
    descriptionFr: 'Enregistré votre premier dhikr',
    icon: '🌱',
    criteria: (challenges) => challenges.some(c => c.totalProgress > 0),
    rarity: 'common',
  },
  {
    id: 'dhikr_100',
    category: 'MILESTONE',
    nameEn: '100 Dhikr',
    nameFr: '100 Dhikr',
    descriptionEn: 'Completed 100 total dhikr',
    descriptionFr: 'Complété 100 dhikr au total',
    icon: '💯',
    criteria: (challenges) => challenges.reduce((sum, c) => sum + c.totalProgress, 0) >= 100,
    rarity: 'common',
  },
  {
    id: 'dhikr_1000',
    category: 'MILESTONE',
    nameEn: '1,000 Dhikr',
    nameFr: '1 000 Dhikr',
    descriptionEn: 'Completed 1,000 total dhikr',
    descriptionFr: 'Complété 1 000 dhikr au total',
    icon: '🌟',
    criteria: (challenges) => challenges.reduce((sum, c) => sum + c.totalProgress, 0) >= 1000,
    rarity: 'rare',
  },
  {
    id: 'dhikr_10000',
    category: 'MILESTONE',
    nameEn: '10,000 Dhikr',
    nameFr: '10 000 Dhikr',
    descriptionEn: 'Completed 10,000 total dhikr',
    descriptionFr: 'Complété 10 000 dhikr au total',
    icon: '⭐',
    criteria: (challenges) => challenges.reduce((sum, c) => sum + c.totalProgress, 0) >= 10000,
    rarity: 'epic',
  },
  {
    id: 'dhikr_100000',
    category: 'MILESTONE',
    nameEn: '100,000 Dhikr',
    nameFr: '100 000 Dhikr',
    descriptionEn: 'Completed 100,000 total dhikr - Legendary!',
    descriptionFr: 'Complété 100 000 dhikr au total - Légendaire!',
    icon: '👑',
    criteria: (challenges) => challenges.reduce((sum, c) => sum + c.totalProgress, 0) >= 100000,
    rarity: 'legendary',
  },

  // ─── Streak Badges ───
  {
    id: 'streak_3',
    category: 'STREAK',
    nameEn: '3-Day Streak',
    nameFr: 'Série de 3 Jours',
    descriptionEn: 'Maintained a 3-day streak',
    descriptionFr: 'Maintenu une série de 3 jours',
    icon: '🔥',
    criteria: (challenges) => challenges.some(c => c.streakDays >= 3),
    rarity: 'common',
  },
  {
    id: 'streak_7',
    category: 'STREAK',
    nameEn: 'Week Warrior',
    nameFr: 'Guerrier de la Semaine',
    descriptionEn: 'Maintained a 7-day streak',
    descriptionFr: 'Maintenu une série de 7 jours',
    icon: '🔥',
    criteria: (challenges) => challenges.some(c => c.streakDays >= 7),
    rarity: 'rare',
  },
  {
    id: 'streak_30',
    category: 'STREAK',
    nameEn: 'Month Master',
    nameFr: 'Maître du Mois',
    descriptionEn: 'Maintained a 30-day streak',
    descriptionFr: 'Maintenu une série de 30 jours',
    icon: '🔥',
    criteria: (challenges) => challenges.some(c => c.streakDays >= 30),
    rarity: 'epic',
  },
  {
    id: 'streak_100',
    category: 'STREAK',
    nameEn: 'Century Streak',
    nameFr: 'Série Centenaire',
    descriptionEn: 'Maintained a 100-day streak - Unstoppable!',
    descriptionFr: 'Maintenu une série de 100 jours - Inarrêtable!',
    icon: '💎',
    criteria: (challenges) => challenges.some(c => c.streakDays >= 100),
    rarity: 'legendary',
  },

  // ─── Completion Badges ───
  {
    id: 'first_goal',
    category: 'COMPLETION',
    nameEn: 'Goal Achiever',
    nameFr: 'Atteinte d\'Objectif',
    descriptionEn: 'Completed your first challenge goal',
    descriptionFr: 'Complété votre premier objectif de défi',
    icon: '🎯',
    criteria: (challenges) => challenges.some(c => c.totalProgress >= c.totalTarget && c.totalTarget > 0),
    rarity: 'rare',
  },
  {
    id: 'daily_complete',
    category: 'COMPLETION',
    nameEn: 'Daily Champion',
    nameFr: 'Champion Quotidien',
    descriptionEn: 'Met your daily target',
    descriptionFr: 'Atteint votre objectif quotidien',
    icon: '✅',
    criteria: (challenges) => challenges.some(c => c.todayProgress >= c.dailyTarget && c.dailyTarget > 0),
    rarity: 'common',
  },
  {
    id: 'multi_challenge',
    category: 'SPECIAL',
    nameEn: 'Multi-Tasker',
    nameFr: 'Multi-Tâches',
    descriptionEn: 'Active in 3+ challenges simultaneously',
    descriptionFr: 'Actif dans 3 défis ou plus simultanément',
    icon: '🎭',
    criteria: (challenges) => challenges.filter(c => c.totalProgress > 0).length >= 3,
    rarity: 'rare',
  },

  // ─── Special Seasonal Badges ───
  {
    id: 'ramadan_complete',
    category: 'SPECIAL',
    nameEn: 'Ramadan Complete',
    nameFr: 'Ramadan Complet',
    descriptionEn: 'Completed a challenge during Ramadan',
    descriptionFr: 'Complété un défi pendant le Ramadan',
    icon: '🌙',
    criteria: (challenges) => challenges.some(c => c.season === 'Ramadan' && c.totalProgress >= c.totalTarget && c.totalTarget > 0),
    rarity: 'epic',
  },
];

// ─── Badge Checking Functions ────────────────────────────────────────────────────

/**
 * Get all badges that the user has earned
 */
export function getEarnedBadges(challenges: Challenge[]): Badge[] {
  return BADGES.filter(badge => badge.criteria(challenges));
}

/**
 * Get recently earned badges (compare current vs previous challenges state)
 */
export function getNewlyEarnedBadges(
  previousChallenges: Challenge[],
  currentChallenges: Challenge[]
): Badge[] {
  const previousBadges = getEarnedBadges(previousChallenges);
  const currentBadges = getEarnedBadges(currentChallenges);
  
  const previousIds = new Set(previousBadges.map(b => b.id));
  return currentBadges.filter(b => !previousIds.has(b.id));
}

/**
 * Get progress towards next badge in each category
 */
export function getNextBadgeProgress(challenges: Challenge[]): {
  category: BadgeCategory;
  nextBadge: Badge | null;
  progress: number;
  progressText: string;
}[] {
  const earnedIds = new Set(getEarnedBadges(challenges).map(b => b.id));
  const categories: BadgeCategory[] = ['MILESTONE', 'STREAK', 'COMPLETION', 'SPECIAL'];
  
  return categories.map(category => {
    const categoryBadges = BADGES.filter(b => b.category === category && !earnedIds.has(b.id));
    
    if (categoryBadges.length === 0) {
      return { category, nextBadge: null, progress: 100, progressText: 'All unlocked!' };
    }
    
    // Find the "closest" badge to unlock
    // For now, just return the first unearned badge (you can add smarter logic)
    const nextBadge = categoryBadges[0];
    
    return {
      category,
      nextBadge,
      progress: 0, // TODO: Calculate actual progress based on criteria
      progressText: '',
    };
  });
}

/**
 * Format badge rarity color
 */
export function getBadgeRarityColor(rarity: Badge['rarity']): string {
  switch (rarity) {
    case 'common':
      return 'text-gray-600 dark:text-gray-400';
    case 'rare':
      return 'text-blue-600 dark:text-blue-400';
    case 'epic':
      return 'text-purple-600 dark:text-purple-400';
    case 'legendary':
      return 'text-amber-600 dark:text-amber-400';
    default:
      return 'text-gray-600 dark:text-gray-400';
  }
}

/**
 * Format badge rarity border
 */
export function getBadgeRarityBorder(rarity: Badge['rarity']): string {
  switch (rarity) {
    case 'common':
      return 'border-gray-300 dark:border-gray-600';
    case 'rare':
      return 'border-blue-400 dark:border-blue-600';
    case 'epic':
      return 'border-purple-400 dark:border-purple-600';
    case 'legendary':
      return 'border-amber-400 dark:border-amber-600 shadow-lg';
    default:
      return 'border-gray-300 dark:border-gray-600';
  }
}
