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

// ─── Community Dhikr (Real-time) ─────────────────────────────────────────────────
export {
  useCommunityDhikr,
  queueDhikrIncrement,
  flushDhikrQueue,
} from './communityDhikrService';
export type { CommunityDhikrStats } from './communityDhikrService';

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
  RamadanBannerMini,
  ChallengeCard,
  CommunityBanner,
  RecommenderBanner,
  AddChallengeModal,
  PropheticNamesCard,
  PropheticNamesPractice,
  BadgeDisplay,
  BadgeGrid,
  BadgeCelebration,
  ShareButton,
} from './components';

// ─── Badges & Achievements ───────────────────────────────────────────────────────
export type { Badge, BadgeCategory } from './badges';
export {
  BADGES,
  getEarnedBadges,
  getNewlyEarnedBadges,
  getNextBadgeProgress,
  getBadgeRarityColor,
  getBadgeRarityBorder,
} from './badges';

// ─── Social Sharing ──────────────────────────────────────────────────────────────
export type { ShareData } from './sharing';
export {
  generateProgressShareText,
  generateChallengeShareText,
  generateMilestoneShareText,
  shareContent,
  getSocialShareUrls,
} from './sharing';

// ─── 201 Prophetic Names ─────────────────────────────────────────────────────────
export type { PropheticName } from './propheticNames201';
export {
  PROPHETIC_NAMES_201,
  YA_JAMIU,
  RIZQ_DUA,
  CLOSING_DUA,
  RIZQ_PRACTICE_INFO,
} from './propheticNames201';
