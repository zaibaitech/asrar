/**
 * Ramadan Challenges Store
 * =========================
 * React Context + useReducer for multi-challenge state management.
 * Persists to localStorage with automatic hydration and day-reset.
 */

'use client';

import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react';
import type {
  Challenge,
  ChallengeType,
  SessionTag,
  RamadanChallengesState,
  RamadanChallengesAction,
  CommunityStats,
  SalawatVariant,
  DivineNameOption,
} from './types';
import {
  SALAWAT_VARIANTS,
  DIVINE_NAME_OPTIONS,
  DEFAULT_QUICK_ADD_PRESETS,
} from './types';
import {
  getToday,
  isToday,
  calculateStreak,
  generateId,
  STORAGE_KEYS,
} from './utils';
import { queueDhikrIncrement } from './communityDhikrService';
import { migrateExistingIstighfar, migrateSalawatChallenges } from './migrations';
import { getRamadanInfo } from '@/src/lib/hijri';

// ─── Initial State ───────────────────────────────────────────────────────────────

const initialState: RamadanChallengesState = {
  challenges: [],
  community: {
    todayTotal: 0,
    ramadanTotal: 0,
    activeUsers: 0,
    lastUpdated: '',
  },
  isHydrated: false,
  currentDate: '',
};

// ─── Reducer ─────────────────────────────────────────────────────────────────────

function reducer(
  state: RamadanChallengesState,
  action: RamadanChallengesAction
): RamadanChallengesState {
  switch (action.type) {
    case 'HYDRATE': {
      const today = action.payload.currentDate;
      // Recalculate progress from sessionLogs to ensure consistency.
      // This fixes stale todayProgress on day boundaries and recovers
      // ramadanProgress if the stored value ever got out of sync.
      const rehydrated = action.payload.challenges.map((challenge) => {
        // Recalculate todayProgress from today's session logs only
        const todayProgress = challenge.sessionLogs
          .filter((log) => log.date === today)
          .reduce((sum, log) => sum + log.count, 0);

        // Recalculate ramadanProgress from all session logs
        const totalProgress = challenge.sessionLogs.reduce(
          (sum, log) => sum + log.count,
          0
        );

        // Recalculate streak from session log dates
        const logDates = [
          ...new Set(
            challenge.sessionLogs
              .filter((log) => log.count > 0)
              .map((log) => log.date)
          ),
        ].sort((a, b) => b.localeCompare(a)); // Descending

        let streakDays = 0;
        if (logDates.length > 0) {
          const checkDate = new Date(today + 'T00:00:00');
          for (const dateStr of logDates) {
            const checkStr = checkDate.toISOString().slice(0, 10);
            if (dateStr === checkStr) {
              streakDays++;
              checkDate.setDate(checkDate.getDate() - 1);
            } else if (dateStr < checkStr) {
              break; // Gap found
            }
          }
        }

        return {
          ...challenge,
          todayProgress,
          totalProgress,
          streakDays,
        };
      });

      return {
        ...state,
        challenges: rehydrated,
        currentDate: today,
        isHydrated: true,
      };
    }

    case 'ADD_CHALLENGE': {
      return {
        ...state,
        challenges: [...state.challenges, action.payload],
      };
    }

    case 'REMOVE_CHALLENGE': {
      return {
        ...state,
        challenges: state.challenges.filter((c) => c.id !== action.payload.id),
      };
    }

    case 'LOG_COUNT': {
      const { id, amount, session } = action.payload;
      const today = getToday();

      return {
        ...state,
        challenges: state.challenges.map((challenge) => {
          if (challenge.id !== id) return challenge;

          // Calculate new streak
          const newStreak = calculateStreak(
            challenge.lastLoggedDate,
            challenge.streakDays,
            today
          );

          return {
            ...challenge,
            todayProgress: challenge.todayProgress + amount,
            totalProgress: challenge.totalProgress + amount,
            streakDays: newStreak,
            lastLoggedDate: today,
            sessionLogs: [
              ...challenge.sessionLogs,
              {
                date: today,
                session,
                count: amount,
                timestamp: new Date().toISOString(),
              },
            ],
          };
        }),
      };
    }

    case 'SET_TARGETS': {
      const { id, dailyTarget, totalTarget } = action.payload;
      return {
        ...state,
        challenges: state.challenges.map((challenge) =>
          challenge.id === id
            ? { ...challenge, dailyTarget, totalTarget }
            : challenge
        ),
      };
    }

    case 'RESET_TODAY': {
      const today = action.payload.currentDate;
      return {
        ...state,
        currentDate: today,
        challenges: state.challenges.map((challenge) => {
          // Check if we need to reset today's progress
          if (isToday(challenge.lastLoggedDate)) {
            // Already logged today, no reset needed
            return challenge;
          }

          // New day - reset today progress, update streak
          const daysSinceLog = challenge.lastLoggedDate
            ? Math.floor(
                (new Date(today).getTime() - new Date(challenge.lastLoggedDate).getTime()) /
                  (1000 * 60 * 60 * 24)
              )
            : 999;

          // If gap > 1 day, reset streak
          const newStreak = daysSinceLog > 1 ? 0 : challenge.streakDays;

          return {
            ...challenge,
            todayProgress: 0,
            streakDays: newStreak,
          };
        }),
      };
    }

    case 'UPDATE_COMMUNITY': {
      return {
        ...state,
        community: action.payload,
      };
    }

    default:
      return state;
  }
}

// ─── Context ─────────────────────────────────────────────────────────────────────

interface RamadanChallengesContextValue {
  state: RamadanChallengesState;
  // Actions
  addChallenge: (type: ChallengeType, config: ChallengeConfig) => void;
  removeChallenge: (id: string) => void;
  logCount: (id: string, amount: number, session: SessionTag) => void;
  setTargets: (id: string, dailyTarget: number, totalTarget: number) => void;
  // Computed
  getTotalTodayProgress: () => number;
  getTotalProgress: () => number;
}

interface ChallengeConfig {
  title: string;
  arabicText: string;
  transliteration: string;
  meaning?: string;
  dailyTarget: number;
  totalTarget: number;
  quickAddPresets?: number[];
  season?: string;
}

const RamadanChallengesContext = createContext<RamadanChallengesContextValue | null>(null);

// ─── Provider ────────────────────────────────────────────────────────────────────

interface RamadanChallengesProviderProps {
  children: ReactNode;
}

export function RamadanChallengesProvider({ children }: RamadanChallengesProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // ─── Hydration from localStorage ───
  useEffect(() => {
    // Run migrations first
    migrateExistingIstighfar();
    migrateSalawatChallenges();

    // Load from storage
    const raw = localStorage.getItem(STORAGE_KEYS.CHALLENGES_V2);
    const challenges: Challenge[] = raw ? JSON.parse(raw) : [];
    const today = getToday();

    dispatch({ type: 'HYDRATE', payload: { challenges, currentDate: today } });
  }, []);

  // ─── Persist to localStorage ───
  useEffect(() => {
    if (!state.isHydrated) return;
    localStorage.setItem(STORAGE_KEYS.CHALLENGES_V2, JSON.stringify(state.challenges));
  }, [state.challenges, state.isHydrated]);

  // ─── Day reset check (runs on mount and periodically) ───
  useEffect(() => {
    if (!state.isHydrated) return;

    const checkDayReset = () => {
      const today = getToday();
      if (today !== state.currentDate) {
        dispatch({ type: 'RESET_TODAY', payload: { currentDate: today } });
      }
    };

    // Check immediately
    checkDayReset();

    // Check every minute (handles midnight crossover)
    const interval = setInterval(checkDayReset, 60 * 1000);
    return () => clearInterval(interval);
  }, [state.isHydrated, state.currentDate]);

  // Community stats are now fetched live via useCommunityDhikr hook in the UI.
  // The store no longer generates mock stats.

  // ─── Actions ───

  const addChallenge = useCallback((type: ChallengeType, config: ChallengeConfig) => {
    const newChallenge: Challenge = {
      id: generateId(),
      type,
      title: config.title,
      arabicText: config.arabicText,
      transliteration: config.transliteration,
      meaning: config.meaning,
      dailyTarget: config.dailyTarget,
      totalTarget: config.totalTarget,
      todayProgress: 0,
      totalProgress: 0,
      streakDays: 0,
      lastLoggedDate: null,
      quickAddPresets: config.quickAddPresets || DEFAULT_QUICK_ADD_PRESETS,
      sessionLogs: [],
      createdAt: new Date().toISOString(),
    };

    dispatch({ type: 'ADD_CHALLENGE', payload: newChallenge });
  }, []);

  const removeChallenge = useCallback((id: string) => {
    dispatch({ type: 'REMOVE_CHALLENGE', payload: { id } });
  }, []);

  const logCount = useCallback((id: string, amount: number, session: SessionTag) => {
    if (amount <= 0) return;
    dispatch({ type: 'LOG_COUNT', payload: { id, amount, session } });

    // Sync to community counter
    const challenge = state.challenges.find((c) => c.id === id);
    const dhikrType = challenge?.type?.toLowerCase() || 'general';
    queueDhikrIncrement(amount, dhikrType);
  }, [state.challenges]);

  const setTargets = useCallback((id: string, dailyTarget: number, totalTarget: number) => {
    dispatch({ type: 'SET_TARGETS', payload: { id, dailyTarget, totalTarget } });
  }, []);

  // ─── Computed values ───

  const getTotalTodayProgress = useCallback(() => {
    return state.challenges.reduce((sum, c) => sum + (c.todayProgress || 0), 0);
  }, [state.challenges]);

  const getTotalProgress = useCallback(() => {
    return state.challenges.reduce((sum, c) => sum + (c.totalProgress || 0), 0);
  }, [state.challenges]);

  // ─── Context value ───

  const value = useMemo<RamadanChallengesContextValue>(
    () => ({
      state,
      addChallenge,
      removeChallenge,
      logCount,
      setTargets,
      getTotalTodayProgress,
      getTotalProgress,
    }),
    [state, addChallenge, removeChallenge, logCount, setTargets, getTotalTodayProgress, getTotalProgress]
  );

  return (
    <RamadanChallengesContext.Provider value={value}>
      {children}
    </RamadanChallengesContext.Provider>
  );
}

// ─── Hook ────────────────────────────────────────────────────────────────────────

export function useRamadanChallenges(): RamadanChallengesContextValue {
  const context = useContext(RamadanChallengesContext);
  if (!context) {
    throw new Error('useRamadanChallenges must be used within RamadanChallengesProvider');
  }
  return context;
}

// ─── Preset Helpers ──────────────────────────────────────────────────────────────

export function createIstighfarChallenge(): ChallengeConfig {
  return {
    title: 'Ramadan Istighfār',
    arabicText: 'أَسْتَغْفِرُ اللهَ',
    transliteration: 'Astaghfirullāh',
    meaning: 'I seek forgiveness from Allah',
    dailyTarget: 6200,
    totalTarget: 124000,
    quickAddPresets: [33, 100, 500, 1000],
  };
}

export function createSalawatChallenge(variant: SalawatVariant = SALAWAT_VARIANTS[0]): ChallengeConfig {
  return {
    title: 'Ṣalawāt Challenge',
    arabicText: variant.arabicText,
    transliteration: variant.transliteration,
    meaning: variant.meaning,
    dailyTarget: 1000,
    totalTarget: 30000,
    quickAddPresets: [10, 33, 100, 500],
  };
}

export function createDivineNameChallenge(name: DivineNameOption = DIVINE_NAME_OPTIONS[0]): ChallengeConfig {
  return {
    title: `${name.transliteration} Challenge`,
    arabicText: name.arabicName,
    transliteration: name.transliteration,
    meaning: name.meaning,
    dailyTarget: 500,
    totalTarget: 15000,
    quickAddPresets: [33, 99, 100, 500],
  };
}

export function createCustomChallenge(
  title: string,
  arabicText: string,
  transliteration: string,
  dailyTarget: number = 100
): ChallengeConfig {
  return {
    title,
    arabicText,
    transliteration,
    dailyTarget,
    totalTarget: dailyTarget * 30,
  };
}
