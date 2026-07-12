/**
 * Ikhtiyārāt (Electional Astrology) — shared engine types.
 *
 * The engine (engine.ts) is framework-free and election-agnostic; each
 * election type (marriage.ts today, travel/business/etc. later) supplies
 * only a rules config implementing ElectionRulesConfig — never a fork of
 * the engine itself.
 */

import { Planet, ZodiacSign } from '../planetary/types';

export type ElectionType = 'marriage';

export type RuleStatus = 'pass' | 'fail' | 'bonus' | 'penalty' | 'hardfail';

export interface LocalizedText {
  en: string;
  fr: string;
  ar: string;
}

export interface RuleResult {
  id: string;
  label_en: string;
  label_fr: string;
  label_ar: string;
  status: RuleStatus;
  points: number;
  detail_en: string;
  detail_fr: string;
}

export type Tier = 'excellent' | 'good' | 'acceptable' | 'weak' | 'avoid';

export interface TierInfo {
  tier: Tier;
  labelEn: string;
  labelFr: string;
  labelAr: string;
  color: string;
}

/** Input describing when/where an election is being evaluated. */
export interface ElectionInput {
  datetime: Date;
  lat: number;
  lon: number;
  /** IANA timezone, e.g. "Europe/London". Used for day-boundary/Hijri display only — all math is done on the absolute Date. */
  tz: string;
  electionType: ElectionType;
}

/** A scored moment within a day (one of the sub-daily evaluation steps). */
export interface WindowScore {
  time: Date;
  score: number;
  rules: RuleResult[];
  hasHardFail: boolean;
}

export interface ElectionResult {
  electionType: ElectionType;
  date: Date;
  score: number;
  tier: Tier;
  tierInfo: TierInfo;
  hasHardFail: boolean;
  rules: RuleResult[];
  /** The best 3-hour-step window within the day, and its own score/rules. */
  bestWindow: WindowScore;
  /** All evaluated sub-daily windows, sorted by time. */
  allWindows: WindowScore[];
}

/** One evaluation context handed to every rule — precomputed shared data so rules don't recompute ephemeris. */
export interface RuleContext {
  datetime: Date;
  lat: number;
  lon: number;
  positions: Record<Planet, import('./ephemeris').PlanetPosition>;
  moonElongation: number;
  moonSunSeparation: number;
  moonPhaseDirection: 'waxing' | 'waning';
  dayOfWeek: number; // 0=Sunday .. 6=Saturday
  planetaryHourPlanet: Planet | null;
  nearestEclipseHours: number;
  applyingAspects: import('./aspects').ApplyingAspect[];
}

export interface Rule {
  id: string;
  label: LocalizedText;
  /** Evaluate this rule against a context. Return null if the rule does not apply at all (rare — most rules always apply and report pass/fail). */
  evaluate(ctx: RuleContext): RuleResult | null;
}

export interface ElectionRulesConfig {
  electionType: ElectionType;
  rules: Rule[];
  tiers: TierInfo[];
  scoreToTier(score: number, hasHardFail: boolean): TierInfo;
}
