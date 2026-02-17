/**
 * Ramadan Istighfār Tracker Component
 *
 * A pinned card for the Today's Reflection section during Ramadan.
 * Tracks progress toward 124,000 Istighfār with pacing plans,
 * session logging, daily heatmap, and completion celebration.
 *
 * Data stored in localStorage (anonymous) with optional Supabase sync (authed).
 */

'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { getRamadanInfo, formatRamadanDay, type RamadanInfo } from '@/src/lib/hijri';
import { translations } from '@/src/lib/translations';
import { useLanguage } from '@/src/contexts/LanguageContext';
import { ChevronDown, ChevronUp, Settings, Star, Check, Lock, Plus, Minus } from 'lucide-react';

// ─── Constants ──────────────────────────────────────────────────────────────────
const TOTAL_TARGET = 124_000;
const RAMADAN_DAYS = 30;

const QUICK_TAP_AMOUNTS = [33, 100, 500, 1000];

type PacingPlan = 'intensive' | 'balanced' | 'steady' | 'light' | 'custom';

interface PlanInfo {
  key: PacingPlan;
  dailyAmount: number;
  durationDays: number;
}

const PLANS: PlanInfo[] = [
  { key: 'intensive', dailyAmount: 12400, durationDays: 10 },
  { key: 'balanced',  dailyAmount: 6200,  durationDays: 20 },
  { key: 'steady',    dailyAmount: 4134,  durationDays: 30 },
  { key: 'light',     dailyAmount: 3100,  durationDays: 40 },
];

const SESSION_KEYS = [
  'sessionFajr', 'sessionDuha', 'sessionDhuhr',
  'sessionAsr', 'sessionMaghrib', 'sessionIsha', 'sessionCustom',
] as const;
type SessionKey = typeof SESSION_KEYS[number];

// ─── Storage Types ──────────────────────────────────────────────────────────────

interface DailyEntry {
  date: string;          // YYYY-MM-DD
  sessions: { session: SessionKey; count: number; timestamp: string }[];
  total: number;
}

interface TrackerState {
  plan: PacingPlan | null;
  customDaily: number;
  cumulativeTotal: number;
  dailyLog: DailyEntry[];
}

const STORAGE_KEY = 'ramadan_istighfar_tracker';

function getToday(): string {
  return new Date().toISOString().slice(0, 10);
}

function loadState(): TrackerState {
  if (typeof window === 'undefined') {
    return { plan: null, customDaily: 4134, cumulativeTotal: 0, dailyLog: [] };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return { plan: null, customDaily: 4134, cumulativeTotal: 0, dailyLog: [] };
}

function saveState(state: TrackerState) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// ─── Component ──────────────────────────────────────────────────────────────────

interface RamadanIstighfarTrackerProps {
  isAuthenticated?: boolean;
  onSignIn?: () => void;
}

export function RamadanIstighfarTracker({
  isAuthenticated = true,
  onSignIn,
}: RamadanIstighfarTrackerProps) {
  const { t, language } = useLanguage();
  const r = (t as any).ramadan as Record<string, string>;

  const [ramadanInfo, setRamadanInfo] = useState<RamadanInfo | null>(null);
  const [state, setState] = useState<TrackerState>(loadState);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showPlanPicker, setShowPlanPicker] = useState(false);
  const [showSessionLogger, setShowSessionLogger] = useState(false);
  const [selectedSession, setSelectedSession] = useState<SessionKey>('sessionCustom');
  const [inputCount, setInputCount] = useState('');
  const [showHeatmap, setShowHeatmap] = useState(false);
  const [mounted, setMounted] = useState(false);

  // ─── Hydration safety ───
  useEffect(() => {
    setMounted(true);
    setRamadanInfo(getRamadanInfo());
    setState(loadState());
  }, []);

  // ─── Persist ───
  useEffect(() => {
    if (mounted) saveState(state);
  }, [state, mounted]);

  // ─── Derived values ───
  const todayKey = useMemo(() => getToday(), []);

  const todayEntry = useMemo(
    () => state.dailyLog.find((e) => e.date === todayKey),
    [state.dailyLog, todayKey]
  );
  const todayTotal = todayEntry?.total ?? 0;

  const dailyTarget = useMemo(() => {
    if (!state.plan) return 0;
    if (state.plan === 'custom') return state.customDaily;
    return PLANS.find((p) => p.key === state.plan)?.dailyAmount ?? 0;
  }, [state.plan, state.customDaily]);

  const todayRemaining = Math.max(0, dailyTarget - todayTotal);
  const overallRemaining = Math.max(0, TOTAL_TARGET - state.cumulativeTotal);
  const progressPct = Math.min(100, (state.cumulativeTotal / TOTAL_TARGET) * 100);
  const todayPct = dailyTarget > 0 ? Math.min(100, (todayTotal / dailyTarget) * 100) : 0;
  const isComplete = state.cumulativeTotal >= TOTAL_TARGET;

  // ─── Streak calc ───
  const streak = useMemo(() => {
    if (!ramadanInfo?.isRamadan) return 0;
    let count = 0;
    const sorted = [...state.dailyLog].sort((a, b) => b.date.localeCompare(a.date));
    const today = getToday();
    for (const entry of sorted) {
      if (entry.date === today || count > 0) {
        if (entry.total > 0) count++;
        else break;
      }
    }
    return count;
  }, [state.dailyLog, ramadanInfo]);

  // ─── Actions ───
  const selectPlan = useCallback((plan: PacingPlan, customDaily?: number) => {
    setState((prev) => ({
      ...prev,
      plan,
      customDaily: customDaily ?? prev.customDaily,
    }));
    setShowPlanPicker(false);
  }, []);

  const logRecitation = useCallback((count: number, session: SessionKey) => {
    if (count <= 0) return;
    const today = getToday();
    setState((prev) => {
      const existing = prev.dailyLog.find((e) => e.date === today);
      const newSession = { session, count, timestamp: new Date().toISOString() };

      let newLog: DailyEntry[];
      if (existing) {
        newLog = prev.dailyLog.map((e) =>
          e.date === today
            ? { ...e, sessions: [...e.sessions, newSession], total: e.total + count }
            : e
        );
      } else {
        newLog = [...prev.dailyLog, { date: today, sessions: [newSession], total: count }];
      }

      return {
        ...prev,
        cumulativeTotal: prev.cumulativeTotal + count,
        dailyLog: newLog,
      };
    });
    setInputCount('');
  }, []);

  // ─── Don't render if not Ramadan or not mounted ───
  if (!mounted || !ramadanInfo?.isRamadan) return null;

  // ─── Locked state for unauthenticated users ───
  if (!isAuthenticated) {
    return (
      <div className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950/40 dark:via-yellow-950/30 dark:to-orange-950/30 rounded-xl border border-amber-200 dark:border-amber-700/50 overflow-hidden">
        <div className="p-6 text-center space-y-4">
          {/* Decorative crescent */}
          <div className="text-5xl mb-2">🌙</div>
          <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100">{r.title}</h3>
          <p className="text-3xl font-arabic text-amber-800 dark:text-amber-200" dir="rtl">{r.arabic}</p>
          <p className="text-sm italic text-amber-700 dark:text-amber-300">{r.transliteration}</p>
          <p className="text-xs text-amber-600 dark:text-amber-400 max-w-sm mx-auto">{r.contextNote}</p>

          {/* Lock overlay */}
          <div className="mt-4 p-4 bg-white/60 dark:bg-slate-800/60 rounded-lg border border-amber-200 dark:border-amber-700/50">
            <Lock className="w-8 h-8 text-amber-500 mx-auto mb-2" />
            <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">{r.signInPrompt}</p>
            <button
              onClick={onSignIn}
              className="px-6 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium transition-colors text-sm"
            >
              {r.signIn}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── Plan picker (first-time or settings) ───
  if (!state.plan || showPlanPicker) {
    return (
      <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950/40 dark:via-yellow-950/30 dark:to-orange-950/30 rounded-xl border border-amber-200 dark:border-amber-700/50 overflow-hidden p-6 space-y-5 animate-in">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="text-4xl">🌙</div>
          <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100">{r.title}</h3>
          <p className="text-3xl font-arabic text-amber-800 dark:text-amber-200" dir="rtl">{r.arabic}</p>
          <p className="text-sm italic text-amber-700 dark:text-amber-300">{r.transliteration}</p>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-amber-900 dark:text-amber-100">{r.choosePlan}</h4>
          <p className="text-xs text-amber-600 dark:text-amber-400">{r.choosePlanDesc}</p>
        </div>

        {/* Plan options */}
        <div className="space-y-2">
          {PLANS.map((plan) => (
            <button
              key={plan.key}
              onClick={() => selectPlan(plan.key)}
              className="w-full flex items-center justify-between p-3 rounded-lg border border-amber-200 dark:border-amber-700/50 bg-white/70 dark:bg-slate-800/50 hover:bg-amber-100/60 dark:hover:bg-amber-900/30 transition-all group text-left"
            >
              <div>
                <span className="font-semibold text-amber-900 dark:text-amber-100 text-sm">
                  {r[`plan${plan.key.charAt(0).toUpperCase() + plan.key.slice(1)}` as keyof typeof r]}
                </span>
                <p className="text-xs text-amber-600 dark:text-amber-400 mt-0.5">
                  {r[`plan${plan.key.charAt(0).toUpperCase() + plan.key.slice(1)}Desc` as keyof typeof r]}
                </p>
              </div>
              <span className="text-amber-500 dark:text-amber-400 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          ))}

          {/* Custom plan */}
          <CustomPlanInput
            r={r}
            customDaily={state.customDaily}
            onSelect={(daily) => selectPlan('custom', daily)}
          />
        </div>

        {showPlanPicker && state.plan && (
          <button
            onClick={() => setShowPlanPicker(false)}
            className="w-full text-center text-sm text-amber-600 dark:text-amber-400 hover:underline"
          >
            ← {language === 'fr' ? 'Retour' : 'Back'}
          </button>
        )}
      </div>
    );
  }

  // ─── Main tracker view ───
  return (
    <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950/40 dark:via-yellow-950/30 dark:to-orange-950/30 rounded-xl border border-amber-200 dark:border-amber-700/50 overflow-hidden transition-all duration-300 animate-in">

      {/* Header — always visible */}
      <div
        className="p-5 cursor-pointer hover:bg-amber-100/40 dark:hover:bg-amber-900/20 transition-colors"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-amber-400 rounded-full opacity-60 animate-pulse" style={{ width: 28, height: 28 }} />
              <span className="relative z-10 text-2xl">🌙</span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100 truncate">{r.title}</h3>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-600 text-white animate-pulse">
                  {r.ramadanBadge}
                </span>
                {streak > 1 && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700/50">
                    🔥 {streak} {r.streakDays}
                  </span>
                )}
              </div>
              <p className="text-xs text-amber-600 dark:text-amber-400 mt-0.5">
                {formatRamadanDay(ramadanInfo.dayOfRamadan, language)} • {r.ramadanDay} {ramadanInfo.dayOfRamadan}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 flex-shrink-0 ml-2">
            <button
              onClick={(e) => { e.stopPropagation(); setShowPlanPicker(true); }}
              className="p-1.5 hover:bg-amber-200/50 dark:hover:bg-amber-800/50 rounded-lg transition-colors"
              aria-label={r.changePlan}
              title={r.changePlan}
            >
              <Settings className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setIsCollapsed(!isCollapsed); }}
              className="p-1.5 hover:bg-amber-200/50 dark:hover:bg-amber-800/50 rounded-lg transition-colors"
            >
              {isCollapsed
                ? <ChevronDown className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                : <ChevronUp className="w-5 h-5 text-amber-600 dark:text-amber-400" />}
            </button>
          </div>
        </div>

        {/* Compact progress bar — always visible */}
        <div className="mt-3">
          <div className="flex items-center justify-between text-[11px] text-amber-700 dark:text-amber-300 mb-1 tabular-nums">
            <span>{state.cumulativeTotal.toLocaleString()} / {TOTAL_TARGET.toLocaleString()}</span>
            <span>{progressPct.toFixed(1)}%</span>
          </div>
          <div className="h-2.5 bg-amber-200/60 dark:bg-amber-900/40 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-500 via-yellow-500 to-green-500 transition-all duration-700"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      </div>

      {/* Collapsible body */}
      {!isCollapsed && (
        <div className="px-5 pb-5 space-y-4 animate-in">

          {/* Completion celebration */}
          {isComplete && (
            <div className="p-4 rounded-lg bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 border border-green-300 dark:border-green-700/50 text-center space-y-2">
              <div className="text-4xl">🎉✨</div>
              <p className="font-bold text-green-800 dark:text-green-200">{r.completionMessage}</p>
              <p className="text-sm text-green-700 dark:text-green-300 italic">{r.completionDua}</p>
            </div>
          )}

          {/* Today's stats */}
          <div className="grid grid-cols-3 gap-2">
            <StatCard label={r.todaysTarget} value={dailyTarget.toLocaleString()} />
            <StatCard
              label={r.todaysProgress}
              value={todayTotal.toLocaleString()}
              highlight={todayTotal >= dailyTarget}
            />
            <StatCard label={r.remainingToday} value={todayRemaining.toLocaleString()} />
          </div>

          {/* Today's progress bar */}
          {dailyTarget > 0 && (
            <div>
              <div className="flex items-center justify-between text-[11px] text-amber-700 dark:text-amber-300 mb-1">
                <span>{r.todaysProgress}</span>
                {todayTotal >= dailyTarget && (
                  <span className="text-green-600 dark:text-green-400 font-medium">{r.todayComplete}</span>
                )}
              </div>
              <div className="h-2 bg-amber-200/60 dark:bg-amber-900/40 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    todayTotal >= dailyTarget
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                      : 'bg-gradient-to-r from-amber-400 to-yellow-500'
                  }`}
                  style={{ width: `${todayPct}%` }}
                />
              </div>
            </div>
          )}

          {/* Arabic zikr display */}
          <div className="text-center py-3 bg-white/50 dark:bg-slate-800/40 rounded-lg border border-amber-100 dark:border-amber-800/30">
            <p className="text-3xl font-arabic text-amber-800 dark:text-amber-200 mb-1" dir="rtl">{r.arabic}</p>
            <p className="text-xs italic text-amber-600 dark:text-amber-400">{r.transliteration}</p>
          </div>

          {/* Quick-tap buttons */}
          <div>
            <div className="text-xs font-medium text-amber-700 dark:text-amber-300 mb-2">{r.quickTap}</div>
            <div className="flex gap-2 flex-wrap">
              {QUICK_TAP_AMOUNTS.map((amt) => (
                <button
                  key={amt}
                  onClick={() => logRecitation(amt, selectedSession)}
                  className="flex-1 min-w-[60px] py-2.5 rounded-lg bg-amber-200/70 dark:bg-amber-800/40 hover:bg-amber-300/70 dark:hover:bg-amber-700/50 text-amber-900 dark:text-amber-100 font-semibold text-sm transition-all active:scale-95 border border-amber-300/50 dark:border-amber-700/50"
                >
                  +{amt.toLocaleString()}
                </button>
              ))}
            </div>
          </div>

          {/* Session logger toggle */}
          <button
            onClick={() => setShowSessionLogger(!showSessionLogger)}
            className="w-full flex items-center justify-between p-3 rounded-lg bg-white/60 dark:bg-slate-800/40 border border-amber-200 dark:border-amber-700/50 hover:bg-amber-100/50 dark:hover:bg-amber-900/20 transition-colors"
          >
            <span className="text-sm font-medium text-amber-800 dark:text-amber-200">{r.logSession}</span>
            {showSessionLogger
              ? <ChevronUp className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              : <ChevronDown className="w-4 h-4 text-amber-600 dark:text-amber-400" />}
          </button>

          {/* Session logger */}
          {showSessionLogger && (
            <div className="space-y-3 animate-in p-4 bg-white/50 dark:bg-slate-800/40 rounded-lg border border-amber-100 dark:border-amber-800/30">
              {/* Session selector */}
              <div className="flex flex-wrap gap-1.5">
                {SESSION_KEYS.map((sk) => (
                  <button
                    key={sk}
                    onClick={() => setSelectedSession(sk)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      selectedSession === sk
                        ? 'bg-amber-600 text-white shadow-sm'
                        : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-800/40 border border-amber-200 dark:border-amber-700/50'
                    }`}
                  >
                    {r[sk]}
                  </button>
                ))}
              </div>

              {/* Count input */}
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <input
                    type="number"
                    min="1"
                    value={inputCount}
                    onChange={(e) => setInputCount(e.target.value)}
                    placeholder="100"
                    className="w-full px-3 py-2.5 rounded-lg bg-white dark:bg-slate-800 border border-amber-200 dark:border-amber-700/50 text-amber-900 dark:text-amber-100 text-sm tabular-nums focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none"
                  />
                </div>
                <button
                  onClick={() => {
                    const count = parseInt(inputCount);
                    if (count > 0) logRecitation(count, selectedSession);
                  }}
                  disabled={!inputCount || parseInt(inputCount) <= 0}
                  className="px-5 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-700 disabled:bg-amber-300 dark:disabled:bg-amber-800 text-white font-medium text-sm transition-colors disabled:cursor-not-allowed"
                >
                  {r.addCount}
                </button>
              </div>
            </div>
          )}

          {/* Today's session log */}
          {todayEntry && todayEntry.sessions.length > 0 && (
            <div className="space-y-1.5">
              <div className="text-xs font-medium text-amber-700 dark:text-amber-300">{r.dayLog}</div>
              <div className="max-h-32 overflow-y-auto space-y-1 pr-1">
                {todayEntry.sessions.map((s, i) => (
                  <div key={i} className="flex items-center justify-between text-xs bg-white/50 dark:bg-slate-800/30 rounded px-3 py-1.5 border border-amber-100 dark:border-amber-800/30">
                    <span className="text-amber-700 dark:text-amber-300">{r[s.session]}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-amber-900 dark:text-amber-100 tabular-nums">+{s.count.toLocaleString()}</span>
                      <span className="text-amber-400 dark:text-amber-500 text-[10px] tabular-nums">
                        {new Date(s.timestamp).toLocaleTimeString(language, { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Monthly heatmap toggle */}
          <button
            onClick={() => setShowHeatmap(!showHeatmap)}
            className="w-full flex items-center justify-between p-2.5 rounded-lg text-xs font-medium text-amber-700 dark:text-amber-300 hover:bg-amber-100/50 dark:hover:bg-amber-900/20 transition-colors"
          >
            <span>{r.heatmapTitle}</span>
            {showHeatmap
              ? <ChevronUp className="w-3.5 h-3.5" />
              : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {showHeatmap && ramadanInfo.ramadanStart && (
            <RamadanHeatmap
              dailyLog={state.dailyLog}
              ramadanStart={ramadanInfo.ramadanStart}
              dailyTarget={dailyTarget}
              dayOfRamadan={ramadanInfo.dayOfRamadan}
              language={language}
            />
          )}

          {/* Context note */}
          <p className="text-[11px] text-center text-amber-500 dark:text-amber-500 italic leading-relaxed">
            {r.contextNote}
          </p>
        </div>
      )}
    </div>
  );
}

// ─── Sub-components ─────────────────────────────────────────────────────────────

function StatCard({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`rounded-lg p-2.5 text-center border transition-all ${
      highlight
        ? 'bg-green-100/70 dark:bg-green-900/20 border-green-200 dark:border-green-700/50'
        : 'bg-white/60 dark:bg-slate-800/40 border-amber-100 dark:border-amber-800/30'
    }`}>
      <div className={`text-lg font-bold tabular-nums ${
        highlight ? 'text-green-700 dark:text-green-300' : 'text-amber-900 dark:text-amber-100'
      }`}>
        {value}
      </div>
      <div className="text-[10px] text-amber-600 dark:text-amber-400 leading-tight mt-0.5">{label}</div>
    </div>
  );
}

function CustomPlanInput({ r, customDaily, onSelect }: { r: Record<string, string>; customDaily: number; onSelect: (daily: number) => void }) {
  const [value, setValue] = useState(customDaily.toString());
  const [expanded, setExpanded] = useState(false);

  if (!expanded) {
    return (
      <button
        onClick={() => setExpanded(true)}
        className="w-full flex items-center justify-between p-3 rounded-lg border border-dashed border-amber-300 dark:border-amber-700/50 bg-white/50 dark:bg-slate-800/30 hover:bg-amber-100/40 dark:hover:bg-amber-900/20 transition-all text-left"
      >
        <div>
          <span className="font-semibold text-amber-900 dark:text-amber-100 text-sm">{r.planCustom}</span>
          <p className="text-xs text-amber-600 dark:text-amber-400 mt-0.5">{r.planCustomDesc}</p>
        </div>
        <span className="text-amber-500 dark:text-amber-400">→</span>
      </button>
    );
  }

  return (
    <div className="p-3 rounded-lg border border-amber-300 dark:border-amber-700/50 bg-white/70 dark:bg-slate-800/50 space-y-2">
      <label className="text-sm font-semibold text-amber-900 dark:text-amber-100">{r.customDailyGoal}</label>
      <div className="flex gap-2">
        <input
          type="number"
          min="1"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="flex-1 px-3 py-2 rounded-lg bg-white dark:bg-slate-800 border border-amber-200 dark:border-amber-700/50 text-amber-900 dark:text-amber-100 text-sm tabular-nums focus:ring-2 focus:ring-amber-400 outline-none"
        />
        <button
          onClick={() => {
            const n = parseInt(value);
            if (n > 0) onSelect(n);
          }}
          className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium text-sm transition-colors"
        >
          {r.selectPlan}
        </button>
      </div>
    </div>
  );
}

function RamadanHeatmap({
  dailyLog,
  ramadanStart,
  dailyTarget,
  dayOfRamadan,
  language,
}: {
  dailyLog: DailyEntry[];
  ramadanStart: Date;
  dailyTarget: number;
  dayOfRamadan: number;
  language: string;
}) {
  const days = Array.from({ length: RAMADAN_DAYS }, (_, i) => {
    const date = new Date(ramadanStart);
    date.setDate(date.getDate() + i);
    const key = date.toISOString().slice(0, 10);
    const entry = dailyLog.find((e) => e.date === key);
    const total = entry?.total ?? 0;
    const isToday = i + 1 === dayOfRamadan;
    const isFuture = i + 1 > dayOfRamadan;
    const pct = dailyTarget > 0 ? Math.min(1, total / dailyTarget) : 0;

    return { day: i + 1, date: key, total, isToday, isFuture, pct };
  });

  return (
    <div className="animate-in">
      <div className="grid grid-cols-10 gap-1">
        {days.map((d) => (
          <div
            key={d.day}
            title={`${language === 'fr' ? 'Jour' : 'Day'} ${d.day}: ${d.total.toLocaleString()}`}
            className={`aspect-square rounded-sm flex items-center justify-center text-[9px] font-medium transition-all ${
              d.isFuture
                ? 'bg-amber-100/40 dark:bg-amber-900/10 text-amber-300 dark:text-amber-700'
                : d.pct >= 1
                  ? 'bg-green-400 dark:bg-green-600 text-white'
                  : d.pct >= 0.5
                    ? 'bg-amber-400 dark:bg-amber-600 text-white'
                    : d.pct > 0
                      ? 'bg-amber-200 dark:bg-amber-800 text-amber-700 dark:text-amber-200'
                      : 'bg-amber-100/60 dark:bg-amber-900/20 text-amber-400 dark:text-amber-600'
            } ${d.isToday ? 'ring-2 ring-amber-500 dark:ring-amber-400 ring-offset-1 dark:ring-offset-slate-900' : ''}`}
          >
            {d.day}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-3 mt-2 text-[9px] text-amber-500 dark:text-amber-500">
        <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-amber-100/60 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/30" /> 0</span>
        <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-amber-200 dark:bg-amber-800" /> &lt;50%</span>
        <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-amber-400 dark:bg-amber-600" /> &gt;50%</span>
        <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-green-400 dark:bg-green-600" /> 100%</span>
      </div>
    </div>
  );
}
