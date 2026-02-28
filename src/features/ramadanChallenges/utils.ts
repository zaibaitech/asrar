/**
 * Ramadan Challenges Utilities
 * =============================
 * Helper functions for date handling, calculations, and formatting.
 */

// ─── Date Utilities ──────────────────────────────────────────────────────────────

/**
 * Get today's date as ISO string "YYYY-MM-DD"
 */
export function getToday(): string {
  return new Date().toISOString().slice(0, 10);
}

/**
 * Check if the given date string is today
 */
export function isToday(dateStr: string | null): boolean {
  if (!dateStr) return false;
  return dateStr === getToday();
}

/**
 * Check if the given date was yesterday
 */
export function isYesterday(dateStr: string | null): boolean {
  if (!dateStr) return false;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return dateStr === yesterday.toISOString().slice(0, 10);
}

/**
 * Get the difference in days between two ISO date strings
 */
export function daysBetween(dateA: string, dateB: string): number {
  const a = new Date(dateA);
  const b = new Date(dateB);
  const diffTime = Math.abs(a.getTime() - b.getTime());
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

// ─── Progress Utilities ──────────────────────────────────────────────────────────

/**
 * Compute percentage progress (0-100)
 */
export function computePercent(progress: number, target: number): number {
  if (target <= 0) return 0;
  return Math.min(100, (progress / target) * 100);
}

/**
 * Format large numbers with locale separators
 */
export function formatNumber(num: number, locale: string = 'en'): string {
  if (num == null || isNaN(num)) return '0';
  return num.toLocaleString(locale);
}

/**
 * Format percentage with specified decimals
 */
export function formatPercent(value: number, decimals: number = 1): string {
  return `${value.toFixed(decimals)}%`;
}

// ─── UUID Generation ─────────────────────────────────────────────────────────────

/**
 * Generate a unique ID for challenges
 * Uses crypto.randomUUID if available, falls back to manual generation
 */
export function generateId(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  // Fallback for older environments
  return 'xxxx-xxxx-4xxx-yxxx-xxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// ─── Streak Calculation ──────────────────────────────────────────────────────────

/**
 * Calculate streak based on last logged date
 * @param lastLoggedDate - ISO date string of last log
 * @param currentStreak - Current streak count
 * @param todayDate - Today's ISO date string
 * @returns Updated streak value
 */
export function calculateStreak(
  lastLoggedDate: string | null,
  currentStreak: number,
  todayDate: string
): number {
  // No previous log - starting fresh
  if (!lastLoggedDate) return 1;

  // Already logged today - no change
  if (lastLoggedDate === todayDate) return currentStreak;

  // Logged yesterday - increment streak
  if (isYesterday(lastLoggedDate)) return currentStreak + 1;

  // Gap of more than 1 day - reset streak
  return 1;
}

// ─── Community Mock Data ─────────────────────────────────────────────────────────

/**
 * Generate simulated community statistics using seeded random.
 * Creates realistic-looking numbers that increment consistently through Ramadan.
 * @param ramadanDay - Current day of Ramadan (1-30)
 * @param seed - Seed value for consistent results
 */
export function generateCommunityStats(ramadanDay: number, seed: number = 2026): {
  todayTotal: number;
  ramadanTotal: number;
  activeUsers: number;
} {
  // Seeded pseudo-random
  const seededRandom = (s: number) => {
    const x = Math.sin(s) * 10000;
    return x - Math.floor(x);
  };

  // Base values with daily variance
  const baseDaily = 150000 + seededRandom(seed + ramadanDay * 7) * 100000;
  const dailyVariance = seededRandom(seed + ramadanDay * 13) * 50000;
  const todayTotal = Math.floor(baseDaily + dailyVariance);

  // Cumulative total grows through Ramadan
  const avgDailyTotal = 200000;
  const ramadanTotal = Math.floor(avgDailyTotal * ramadanDay + seededRandom(seed + ramadanDay) * 50000);

  // Active users (slowly growing)
  const baseUsers = 1000 + Math.floor(ramadanDay * 50);
  const userVariance = Math.floor(seededRandom(seed + ramadanDay * 3) * 200);
  const activeUsers = baseUsers + userVariance;

  return { todayTotal, ramadanTotal, activeUsers };
}

// ─── Storage Keys ────────────────────────────────────────────────────────────────

export const STORAGE_KEYS = {
  /** New multi-challenge storage key */
  CHALLENGES_V2: 'ramadan_challenges_v2',
  /** Legacy single-challenge key for migration */
  LEGACY_ISTIGHFAR: 'ramadan_istighfar_tracker',
} as const;
