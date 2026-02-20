/**
 * Ramadan Spiritual Challenge Types
 * ==================================
 * Data models for the multi-challenge hub supporting:
 * - Istighfār, Ṣalawāt, Divine Name, and Custom challenges
 * - Session logging with prayer-time tags
 * - Streak tracking
 * - Community aggregation (mock until backend ready)
 */

// ─── Challenge Types ─────────────────────────────────────────────────────────────

export type ChallengeType = 'ISTIGHFAR' | 'SALAWAT' | 'DIVINE_NAME' | 'CUSTOM';

export type SessionTag =
  | 'Fajr'
  | 'Ḍuḥā / Morning'
  | 'Ẓuhr'
  | 'ʿAṣr'
  | 'Maghrib / Ifṭār'
  | 'ʿIshāʾ / Tarāwīḥ'
  | 'Other';

// ─── Session Log ─────────────────────────────────────────────────────────────────

export interface SessionLog {
  /** ISO date string "YYYY-MM-DD" */
  date: string;
  /** Prayer time or session tag */
  session: SessionTag;
  /** Number of recitations logged */
  count: number;
  /** ISO timestamp when logged */
  timestamp: string;
}

// ─── Challenge ───────────────────────────────────────────────────────────────────

export interface Challenge {
  /** Unique identifier (UUID) */
  id: string;
  /** Challenge category */
  type: ChallengeType;
  /** Display title (e.g., "Ramadan Istighfār") */
  title: string;
  /** Primary Arabic text for the dhikr */
  arabicText: string;
  /** Latin transliteration */
  transliteration: string;
  /** English/French meaning (optional) */
  meaning?: string;
  /** Daily recitation target */
  dailyTarget: number;
  /** Total target for the entire Ramadan (30 days) */
  ramadanTarget: number;
  /** Progress made today (resets at midnight) */
  todayProgress: number;
  /** Total progress across all of Ramadan */
  ramadanProgress: number;
  /** Consecutive days with at least 1 recitation logged */
  streakDays: number;
  /** Last date a recitation was logged (ISO "YYYY-MM-DD") */
  lastLoggedDate: string | null;
  /** Quick-tap amounts for fast logging */
  quickAddPresets: number[];
  /** Full session log history */
  sessionLogs: SessionLog[];
  /** ISO timestamp of challenge creation */
  createdAt: string;
}

// ─── Challenge Presets ───────────────────────────────────────────────────────────

export interface SalawatVariant {
  id: string;
  arabicText: string;
  transliteration: string;
  meaning: string;
}

export interface DivineNameOption {
  id: string;
  arabicName: string;
  transliteration: string;
  meaning: string;
}

// ─── Community Stats (Mock) ──────────────────────────────────────────────────────

export interface CommunityStats {
  /** Total dhikr completed by all users today */
  todayTotal: number;
  /** Total dhikr completed this Ramadan */
  ramadanTotal: number;
  /** Number of active participants */
  activeUsers: number;
  /** Last updated timestamp */
  lastUpdated: string;
}

// ─── Store State ─────────────────────────────────────────────────────────────────

export interface RamadanChallengesState {
  /** List of active challenges */
  challenges: Challenge[];
  /** Community statistics (mock/real) */
  community: CommunityStats;
  /** Whether state has been hydrated from localStorage */
  isHydrated: boolean;
  /** Current date for day reset detection */
  currentDate: string;
}

// ─── Store Actions ───────────────────────────────────────────────────────────────

export type RamadanChallengesAction =
  | { type: 'HYDRATE'; payload: { challenges: Challenge[]; currentDate: string } }
  | { type: 'ADD_CHALLENGE'; payload: Challenge }
  | { type: 'REMOVE_CHALLENGE'; payload: { id: string } }
  | { type: 'LOG_COUNT'; payload: { id: string; amount: number; session: SessionTag } }
  | { type: 'SET_TARGETS'; payload: { id: string; dailyTarget: number; ramadanTarget: number } }
  | { type: 'RESET_TODAY'; payload: { currentDate: string } }
  | { type: 'UPDATE_COMMUNITY'; payload: CommunityStats };

// ─── Preset Data ─────────────────────────────────────────────────────────────────

/** Pre-defined Ṣalawāt options */
export const SALAWAT_VARIANTS: SalawatVariant[] = [
  {
    id: 'simple',
    arabicText: 'اللّٰهُمَّ صَلِّ عَلَىٰ مُحَمَّد',
    transliteration: 'Allāhumma ṣalli ʿalā Muḥammad',
    meaning: 'O Allah, send blessings upon Muhammad',
  },
  {
    id: 'sayyidina',
    arabicText: 'اللّٰهُمَّ صَلِّ عَلَىٰ سَيِّدِنَا مُحَمَّد',
    transliteration: 'Allāhumma ṣalli ʿalā Sayyidinā Muḥammad',
    meaning: 'O Allah, send blessings upon our Master Muhammad',
  },
  {
    id: 'karam',
    arabicText: 'اللّٰهُمَّ صَلِّ عَلَىٰ الْمَوْصُوفِ بِالْكَرَمِ وَالْجُود',
    transliteration: 'Allāhumma ṣalli ʿalā al-mawṣūf bil-karam wal-jūd',
    meaning: 'O Allah, send blessings upon the one described with generosity and munificence',
  },
];

/** Pre-defined Divine Names for challenge */
export const DIVINE_NAME_OPTIONS: DivineNameOption[] = [
  { id: 'rahim', arabicName: 'يَا رَحِيم', transliteration: 'Yā Raḥīm', meaning: 'O Most Merciful' },
  { id: 'razzaq', arabicName: 'يَا رَزَّاق', transliteration: 'Yā Razzāq', meaning: 'O Provider' },
  { id: 'ghaffar', arabicName: 'يَا غَفَّار', transliteration: 'Yā Ghaffār', meaning: 'O Ever-Forgiving' },
  { id: 'latif', arabicName: 'يَا لَطِيف', transliteration: 'Yā Laṭīf', meaning: 'O Most Subtle' },
  { id: 'wadud', arabicName: 'يَا وَدُود', transliteration: 'Yā Wadūd', meaning: 'O Most Loving' },
  { id: 'kareem', arabicName: 'يَا كَرِيم', transliteration: 'Yā Karīm', meaning: 'O Most Generous' },
  { id: 'fattah', arabicName: 'يَا فَتَّاح', transliteration: 'Yā Fattāḥ', meaning: 'O Opener' },
  { id: 'nur', arabicName: 'يَا نُور', transliteration: 'Yā Nūr', meaning: 'O Light' },
];

/** Session tags in order of prayer times */
export const SESSION_TAGS: SessionTag[] = [
  'Fajr',
  'Ḍuḥā / Morning',
  'Ẓuhr',
  'ʿAṣr',
  'Maghrib / Ifṭār',
  'ʿIshāʾ / Tarāwīḥ',
  'Other',
];

/** Default quick-add amounts */
export const DEFAULT_QUICK_ADD_PRESETS = [33, 100, 313, 500, 1000];
