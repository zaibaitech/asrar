/**
 * Ramadan Spiritual Challenges Feature
 * =====================================
 * Multi-challenge hub for Ramadan dhikr tracking.
 *
 * Features:
 * - Multiple simultaneous challenges (Istighfār, Ṣalawāt, Divine Name, Custom)
 * - Community-level statistics
 * - Streak tracking
 * - "Best Dhikr Now" time-based recommendations
 * - Backward compatibility with existing Istighfār data
 */

// ─── Types ───────────────────────────────────────────────────────────────────────
export type {
  Challenge,
  ChallengeType,
  SessionTag,
  SessionLog,
  CommunityStats,
  RamadanChallengesState,
  SalawatVariant,
  SalawatPreset,
  DivineNameOption,
} from './types';

export {
  SALAWAT_VARIANTS,
  SALAWAT_PRESETS,
  DIVINE_NAME_OPTIONS,
  SESSION_TAGS,
  DEFAULT_QUICK_ADD_PRESETS,
} from './types';

// ─── Store & Context ─────────────────────────────────────────────────────────────
export {
  RamadanChallengesProvider,
  useRamadanChallenges,
  createIstighfarChallenge,
  createSalawatChallenge,
  createDivineNameChallenge,
  createCustomChallenge,
} from './store';

// ─── Utilities ───────────────────────────────────────────────────────────────────
export {
  getToday,
  computePercent,
  formatNumber,
  formatPercent,
  calculateStreak,
  generateCommunityStats,
} from './utils';

// ─── Migrations ──────────────────────────────────────────────────────────────────
export {
  migrateExistingIstighfar,
  needsMigration,
} from './migrations';

// ─── Recommender ─────────────────────────────────────────────────────────────────
export type { DhikrRecommendation } from './recommender';
export {
  getBestDhikrNow,
  getCurrentTimeWindow,
} from './recommender';

// ─── Components ──────────────────────────────────────────────────────────────────
export {
  RamadanHub,
  ChallengeCard,
  CommunityBanner,
  RecommenderBanner,
  AddChallengeModal,
} from './components';
