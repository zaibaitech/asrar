# Ramadan Challenges Feature - Technical Audit

> **Purpose**: Comprehensive technical documentation for mobile app (React Native) integration  
> **Last Updated**: February 21, 2026  
> **Feature Location**: `/src/features/ramadanChallenges/`

---

## Table of Contents

1. [File Structure](#1-file-structure)
2. [Data Models & Types](#2-data-models--types)
3. [State Management](#3-state-management)
4. [Components](#4-components)
5. [Core Functions & Utilities](#5-core-functions--utilities)
6. [API Endpoints](#6-api-endpoints)
7. [Data Flow](#7-data-flow)
8. [External Dependencies](#8-external-dependencies)
9. [Key Features](#9-key-features)
10. [PropheticNames201 Feature](#10-propheticnames201-feature)
11. [Mobile Integration Considerations](#11-mobile-integration-considerations)

---

## 1. File Structure

```
src/features/ramadanChallenges/
├── index.ts                    # Public exports barrel file
├── types.ts                    # TypeScript types & preset data
├── store.tsx                   # React Context + useReducer store
├── utils.ts                    # Utility functions
├── actions.ts                  # Re-exports (convenience)
├── migrations.ts               # Legacy data migration
├── recommender.ts              # Time-based dhikr recommendations
├── propheticNames201.ts        # 201 Prophetic Names data
└── components/
    ├── index.ts               # Component exports
    ├── RamadanHub.tsx         # Main container (229 lines)
    ├── ChallengeCard.tsx      # Individual challenge card (513 lines)
    ├── AddChallengeModal.tsx  # Add new challenge modal (639 lines)
    ├── PropheticNamesCard.tsx # 201 Names tracker card (552 lines)
    ├── PropheticNamesPractice.tsx # Full-screen practice UI (598 lines)
    ├── CommunityBanner.tsx    # Community stats display
    └── RecommenderBanner.tsx  # Time-based recommendation
```

**Related Files:**
- `src/components/ramadan/RamadanIstighfarTracker.tsx` - Legacy single-challenge tracker (645 lines)
- `src/lib/translations.ts` - Internationalization (en/fr)

---

## 2. Data Models & Types

### 2.1 Core Types

```typescript
// Challenge Types (Enum-like union)
type ChallengeType = 
  | 'ISTIGHFAR'       // Forgiveness dhikr
  | 'SALAWAT'         // Blessings on Prophet
  | 'DIVINE_NAME'     // Allah's Names
  | 'CUSTOM'          // User-defined
  | 'PROPHETIC_NAMES' // 201 Names practice

// Session Tags (Prayer time markers)
type SessionTag =
  | 'Fajr'
  | 'Ḍuḥā / Morning'
  | 'Ẓuhr'
  | 'ʿAṣr'
  | 'Maghrib / Ifṭār'
  | 'ʿIshāʾ / Tarāwīḥ'
  | 'Other'
```

### 2.2 Session Log

```typescript
interface SessionLog {
  date: string;       // ISO "YYYY-MM-DD"
  session: SessionTag;
  count: number;      // Recitations logged
  timestamp: string;  // ISO timestamp
}
```

### 2.3 Challenge Model

```typescript
interface Challenge {
  id: string;                    // UUID
  type: ChallengeType;
  title: string;                 // Display name
  arabicText: string;            // Primary Arabic dhikr
  transliteration: string;       // Latin script
  meaning?: string;              // English/French
  dailyTarget: number;           // Per-day goal
  ramadanTarget: number;         // 30-day total goal
  todayProgress: number;         // Resets at midnight
  ramadanProgress: number;       // Cumulative total
  streakDays: number;            // Consecutive days
  lastLoggedDate: string | null; // ISO date
  quickAddPresets: number[];     // Quick-tap amounts [33, 100, 500, ...]
  sessionLogs: SessionLog[];     // Full history
  createdAt: string;             // ISO timestamp
}
```

### 2.4 Preset Data Types

```typescript
// Ṣalawāt Preset (Extended)
interface SalawatPreset {
  id: string;              // e.g., 'salawat_ibrahimiyya'
  title: string;           // Display name
  tradition: string;       // Source tradition
  arabicText: string;      // Full Arabic text
  transliteration: string;
  meaning: string;
  quickAddPresets: number[];
  recommendedDaily: number;
  note: string;           // Practice guidance
}

// Divine Name Option
interface DivineNameOption {
  id: string;            // e.g., 'rahim'
  arabicName: string;    // يَا رَحِيم
  transliteration: string;
  meaning: string;
}
```

### 2.5 Community Stats (Mock)

```typescript
interface CommunityStats {
  todayTotal: number;     // Community dhikr today
  ramadanTotal: number;   // Total this Ramadan
  activeUsers: number;    // Participants count
  lastUpdated: string;    // ISO timestamp
}
```

### 2.6 State Shape

```typescript
interface RamadanChallengesState {
  challenges: Challenge[];
  community: CommunityStats;
  isHydrated: boolean;   // localStorage loaded
  currentDate: string;   // For day-reset detection
}
```

### 2.7 Available Presets

**Ṣalawāt Presets** (6 options):
- `salawat_ibrahimiyya` - Ṣalāt al-Ibrāhīmiyya (Ṣaḥīḥ al-Bukhārī)
- `salawat_simple` - Ṣalāt Mufrada (Universal)
- `salawat_fatih` - Ṣalāt al-Fātiḥ (Tijāniyya)
- `salawat_nariyya` - Ṣalāt al-Nāriyya (Imam al-Qurṭubī)
- `salawat_mashishiyya` - Ṣalāt al-Mashīshiyya (Shādhilī)
- `salawat_jawharatul_kamal` - Jawharatu l-Kamāl (Tijāniyya)

**Divine Name Options** (8 options):
- Yā Raḥīm, Yā Razzāq, Yā Ghaffār, Yā Laṭīf
- Yā Wadūd, Yā Karīm, Yā Fattāḥ, Yā Nūr

---

## 3. State Management

### 3.1 Architecture

- **Pattern**: React Context + `useReducer` (NOT Zustand)
- **Persistence**: `localStorage` with key `ramadan_challenges_v2`
- **Day Reset**: Automatic midnight detection with 1-minute polling

### 3.2 Store Actions (Reducer)

```typescript
type RamadanChallengesAction =
  | { type: 'HYDRATE'; payload: { challenges: Challenge[]; currentDate: string } }
  | { type: 'ADD_CHALLENGE'; payload: Challenge }
  | { type: 'REMOVE_CHALLENGE'; payload: { id: string } }
  | { type: 'LOG_COUNT'; payload: { id: string; amount: number; session: SessionTag } }
  | { type: 'SET_TARGETS'; payload: { id: string; dailyTarget: number; ramadanTarget: number } }
  | { type: 'RESET_TODAY'; payload: { currentDate: string } }
  | { type: 'UPDATE_COMMUNITY'; payload: CommunityStats }
```

### 3.3 Context API

```typescript
interface RamadanChallengesContextValue {
  state: RamadanChallengesState;
  
  // Actions
  addChallenge: (type: ChallengeType, config: ChallengeConfig) => void;
  removeChallenge: (id: string) => void;
  logCount: (id: string, amount: number, session: SessionTag) => void;
  setTargets: (id: string, dailyTarget: number, ramadanTarget: number) => void;
  
  // Computed
  getTotalTodayProgress: () => number;
  getTotalRamadanProgress: () => number;
}
```

### 3.4 Storage Keys

```typescript
const STORAGE_KEYS = {
  CHALLENGES_V2: 'ramadan_challenges_v2',        // Current data
  LEGACY_ISTIGHFAR: 'ramadan_istighfar_tracker', // Migration source
} as const;

// Prophetic Names sessions (separate)
const SESSIONS_STORAGE_KEY = 'prophetic_names_sessions_v1';
// Stored as: `${SESSIONS_STORAGE_KEY}_${challengeId}`
```

### 3.5 Provider Usage

```tsx
// Wrap app with provider
<RamadanChallengesProvider>
  <App />
</RamadanChallengesProvider>

// Use in components
const { state, addChallenge, logCount } = useRamadanChallenges();
```

---

## 4. Components

### 4.1 RamadanHub (Main Container)

**File**: `components/RamadanHub.tsx` (229 lines)

**Props**:
```typescript
interface RamadanHubProps {
  language?: 'en' | 'fr';
  defaultExpanded?: boolean;
}
```

**Responsibilities**:
- Main entry point for Ramadan challenges UI
- Collapsed/expanded state management
- Deep-link handling (`?challenge=prophetic-names`)
- Auto-creates default Istighfār challenge for new users
- Renders challenge cards and modal

**Deep-Link Support**:
```typescript
// URL: /?challenge=prophetic-names&lang=fr
// Opens prophetic names modal automatically
```

### 4.2 ChallengeCard (Individual Tracker)

**File**: `components/ChallengeCard.tsx` (513 lines)

**Props**:
```typescript
interface ChallengeCardProps {
  challenge: Challenge;
  onLogCount: (amount: number, session: SessionTag) => void;
  onOpenSettings?: () => void;
  language?: 'en' | 'fr';
  defaultExpanded?: boolean;
}
```

**Features**:
- Progress bar with percentage
- Quick-add buttons (configurable presets)
- Session logger (prayer time tagging)
- Streak display (flame icon)
- Monthly log heatmap
- Share functionality (Web Share API, WhatsApp, Telegram)

### 4.3 AddChallengeModal (Challenge Creation)

**File**: `components/AddChallengeModal.tsx` (639 lines)

**Props**:
```typescript
interface AddChallengeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (type: ChallengeType, config: ChallengeConfig) => void;
  language?: 'en' | 'fr';
  initialStep?: ModalStep;
}

type ModalStep = 
  | 'SELECT_TYPE'
  | 'CONFIGURE_SALAWAT'
  | 'PREVIEW_SALAWAT'
  | 'CONFIGURE_DIVINE_NAME'
  | 'CONFIGURE_CUSTOM'
  | 'CONFIGURE_PROPHETIC_NAMES';
```

**Features**:
- Type selection grid (Ṣalawāt, 201 Names, Divine Name, Custom)
- Ṣalawāt preset browser with full Arabic text
- Divine Name selector
- Custom wird form
- 201 Names intro/configuration

### 4.4 PropheticNamesCard (7-Day Tracker)

**File**: `components/PropheticNamesCard.tsx` (552 lines)

**Props**:
```typescript
interface PropheticNamesCardProps {
  challenge: Challenge;
  onLogSession: (id: string, amount: number, session: SessionTag) => void;
  onRemove: (id: string) => void;
  language?: 'en' | 'fr';
}
```

**Features**:
- 7-day progress grid (visual circles)
- Session state (per-day completion)
- Launch practice button
- Share modal (WhatsApp, Telegram, Twitter, Copy Link)
- Delete confirmation

### 4.5 PropheticNamesPractice (Full-Screen Practice)

**File**: `components/PropheticNamesPractice.tsx` (598 lines)

**Props**:
```typescript
interface PropheticNamesPracticeProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
  day: number;
  language?: 'en' | 'fr';
}

type PracticeStep = 'INTRO' | 'YA_JAMIU' | 'NAMES' | 'CLOSING_DUA' | 'COMPLETE';
```

**Features**:
- Step-by-step guided practice
- Tasbih counter with visual progress ring
- Haptic feedback (navigator.vibrate)
- Scrollable names list with navigation
- Auto-scroll to current name
- Translation toggle

### 4.6 RecommenderBanner

**File**: `components/RecommenderBanner.tsx` (56 lines)

**Props**:
```typescript
interface RecommenderBannerProps {
  challenges: Challenge[];
  language?: 'en' | 'fr';
}
```

**Function**: Displays "Best dhikr now" recommendation based on current time window.

### 4.7 CommunityBanner

**File**: `components/CommunityBanner.tsx` (64 lines)

**Props**:
```typescript
interface CommunityBannerProps {
  stats: CommunityStats;
  language?: 'en' | 'fr';
  compact?: boolean;
}
```

**Function**: Displays community-wide statistics (currently mock data).

---

## 5. Core Functions & Utilities

### 5.1 Date Utilities (`utils.ts`)

```typescript
// Get today as ISO string
getToday(): string  // Returns "YYYY-MM-DD"

// Check if date is today/yesterday
isToday(dateStr: string | null): boolean
isYesterday(dateStr: string | null): boolean

// Calculate days between dates
daysBetween(dateA: string, dateB: string): number
```

### 5.2 Progress Utilities

```typescript
// Percentage calculation
computePercent(progress: number, target: number): number

// Formatting
formatNumber(num: number, locale?: string): string  // "1,234"
formatPercent(value: number, decimals?: number): string  // "85.5%"
```

### 5.3 UUID Generation

```typescript
generateId(): string
// Uses crypto.randomUUID() with fallback
```

### 5.4 Streak Calculation

```typescript
calculateStreak(
  lastLoggedDate: string | null,
  currentStreak: number,
  todayDate: string
): number
// Returns: updated streak value
// Rules:
// - No previous log: return 1
// - Already logged today: return currentStreak
// - Logged yesterday: return currentStreak + 1
// - Gap > 1 day: return 1 (reset)
```

### 5.5 Community Stats Generator

```typescript
generateCommunityStats(ramadanDay: number, seed?: number): {
  todayTotal: number;
  ramadanTotal: number;
  activeUsers: number;
}
// Uses seeded pseudo-random for consistent mock data
```

### 5.6 Recommender (`recommender.ts`)

```typescript
interface DhikrRecommendation {
  challenge: Challenge | null;
  timeWindow: string;
  timeWindowAr: string;
  reason: string;
  reasonAr: string;
}

// Get best dhikr for current time
getBestDhikrNow(
  challenges: Challenge[],
  hour?: number,
  planetaryHour?: string  // Future hook
): DhikrRecommendation

// Get current time window name
getCurrentTimeWindow(): { name: string; nameAr: string }
```

**Time Windows**:
| Window | Hours | Recommended Types |
|--------|-------|-------------------|
| Fajr / Pre-dawn | 4-7 | ISTIGHFAR, DIVINE_NAME |
| Morning / Ḍuḥā | 7-12 | SALAWAT, DIVINE_NAME |
| Ẓuhr / Midday | 12-15 | DIVINE_NAME, SALAWAT |
| ʿAṣr / Afternoon | 15-18 | ISTIGHFAR, SALAWAT |
| Maghrib / Ifṭār | 18-21 | SALAWAT, ISTIGHFAR |
| ʿIshāʾ / Tarāwīḥ | 21-24 | DIVINE_NAME, CUSTOM |
| Late Night | 0-4 | ISTIGHFAR, DIVINE_NAME |

### 5.7 Preset Factory Functions

```typescript
createIstighfarChallenge(): ChallengeConfig
createSalawatChallenge(variant?: SalawatVariant): ChallengeConfig
createDivineNameChallenge(name?: DivineNameOption): ChallengeConfig
createCustomChallenge(
  title: string,
  arabicText: string,
  transliteration: string,
  dailyTarget?: number
): ChallengeConfig
```

### 5.8 Migrations (`migrations.ts`)

```typescript
// Migrate v1 single-tracker to v2 multi-challenge
migrateExistingIstighfar(): Challenge | null

// Check if migration needed
needsMigration(): boolean

// Upgrade legacy Ṣalawāt text to preset
migrateSalawatChallenges(): void
```

---

## 6. API Endpoints

**Current Status**: No backend API endpoints exist.

All data is stored locally:
- `localStorage` for web
- Community stats are generated client-side (mock)

**Future Integration Points**:
```typescript
// Potential API structure for mobile:
POST /api/challenges          // Create challenge
GET  /api/challenges          // List user challenges
PUT  /api/challenges/:id      // Update progress
DELETE /api/challenges/:id    // Remove challenge

POST /api/challenges/:id/log  // Log session
GET  /api/community/stats     // Real community data
```

---

## 7. Data Flow

### 7.1 Adding a Challenge

```
User taps "Add Challenge"
    → AddChallengeModal opens
    → User selects type
    → User configures (preset/custom)
    → onAdd(type, config) called
    → addChallenge action dispatches ADD_CHALLENGE
    → Reducer creates new Challenge with generateId()
    → State updates → useEffect persists to localStorage
    → UI re-renders with new card
```

### 7.2 Logging Progress

```
User taps quick-add button (+100)
    → handleQuickAdd(100) called
    → onLogCount(100, selectedSession)
    → logCount action dispatches LOG_COUNT
    → Reducer updates:
        - todayProgress += amount
        - ramadanProgress += amount
        - calculates new streak
        - appends to sessionLogs[]
    → State updates → persists to localStorage
    → Progress bar animates
```

### 7.3 Day Reset

```
App loads / Every 60 seconds:
    → checkDayReset() called
    → If getToday() !== state.currentDate:
        → RESET_TODAY dispatched
        → For each challenge:
            - If lastLoggedDate !== today: reset todayProgress = 0
            - If gap > 1 day: reset streakDays = 0
```

### 7.4 Hydration

```
App mounts
    → useEffect runs migrations first
    → Reads localStorage 'ramadan_challenges_v2'
    → HYDRATE dispatches with challenges + currentDate
    → isHydrated = true
    → UI renders actual data
```

---

## 8. External Dependencies

### 8.1 Runtime Dependencies

| Package | Version | Usage |
|---------|---------|-------|
| `react` | ^18.3.1 | Core framework |
| `next` | ^14.2.18 | App framework (Next.js) |
| `lucide-react` | ^0.344.0 | Icons (ChevronDown, Plus, Flame, etc.) |

### 8.2 Internal Dependencies

- `@/src/lib/hijri` - Ramadan date detection (`getRamadanInfo`, `formatRamadanDay`)
- `@/src/lib/translations` - i18n strings
- `@/src/contexts/LanguageContext` - Language context

### 8.3 Browser APIs Used

- `localStorage` - Data persistence
- `navigator.share()` - Web Share API
- `navigator.clipboard.writeText()` - Copy to clipboard
- `navigator.vibrate()` - Haptic feedback (mobile)
- `crypto.randomUUID()` - UUID generation

---

## 9. Key Features

### 9.1 Challenge Types

| Type | Daily Target | Ramadan Target | Quick Presets |
|------|-------------|----------------|---------------|
| Istighfār | 6,200 | 124,000 | 33, 100, 500, 1000 |
| Ṣalawāt | 100-500 | 3,000-15,000 | Varies by preset |
| Divine Name | 500 | 15,000 | 33, 99, 100, 500 |
| Custom | User-defined | daily × 30 | DEFAULT_QUICK_ADD_PRESETS |
| Prophetic Names | 1 session | 7 sessions | [1] |

### 9.2 Progress Tracking

- **Daily**: Resets at local midnight
- **Monthly (Ramadan)**: Cumulative across 30 days
- **Streak**: Consecutive days with ≥1 recitation logged

### 9.3 Session Logging

- Tags each log with prayer time
- Stores full history in `sessionLogs[]`
- Used for monthly breakdown/heatmap

### 9.4 Share Functionality

```typescript
// Share URL generation
const shareUrl = `${window.location.origin}?challenge=prophetic-names&lang=${language}`;

// Supported platforms
- Native Share API (if available)
- WhatsApp: wa.me/?text=...
- Telegram: t.me/share/url?url=...&text=...
- Twitter: twitter.com/intent/tweet?text=...&url=...
- Clipboard copy
```

### 9.5 Deep-Link Handling

```typescript
// In RamadanHub.tsx
const challengeParam = searchParams.get('challenge');
if (challengeParam === 'prophetic-names') {
  // Show intro modal if not already added
  // Expand hub, clean URL
}
```

---

## 10. PropheticNames201 Feature

### 10.1 Data Structure (`propheticNames201.ts`)

```typescript
interface PropheticName {
  number: number;        // 1-201
  arabic: string;        // مُحَمَّد
  transliteration: string;
  meaning: string;       // English
  meaningFr: string;     // French
}

// Full list
export const PROPHETIC_NAMES_201: PropheticName[] = [
  { number: 1, arabic: 'مُحَمَّد', transliteration: 'Muḥammad', ... },
  // ... 201 entries
];
```

### 10.2 Supporting Data

```typescript
// Yā Jāmiʿu (recited 180×)
export const YA_JAMIU = {
  arabic: 'يَا جَامِعُ',
  transliteration: 'Yā Jāmiʿu',
  meaning: 'O Gatherer, O Mighty One',
  meaningFr: 'Ô Rassembleur, Ô Puissant',
  count: 180,
};

// Opening (Al-Fātiḥa)
export const RIZQ_DUA = {
  arabic: '...',
  transliteration: '...',
  meaning: '...',
  meaningFr: '...',
};

// Closing Duʿāʾ
export const CLOSING_DUA = {
  arabic: '...',
  transliteration: '...',
  meaning: '...',
  meaningFr: '...',
  source: { en: '...', fr: '...' },
};

// Practice metadata
export const RIZQ_PRACTICE_INFO = {
  title: '201 Holy Names of Prophet Muḥammad ﷺ',
  titleFr: '...',
  duration: 7,
  sessionsPerDay: 1,
  totalSessions: 7,
  estimatedTime: '25-35 minutes',
  // ...
};
```

### 10.3 Practice Flow

```
INTRO
  → Show Al-Fātiḥa
  → Display 3-step instructions
  ↓
YA_JAMIU
  → Tasbih counter (tap to increment)
  → Progress ring (180 beads visual)
  → Haptic feedback on milestone
  → "Continue to Names" when complete
  ↓
NAMES
  → Scrollable list of 201 names
  → Current name highlighted
  → Navigation (prev/next)
  → Translation toggle
  → "Continue to Duʿāʾ" when complete
  ↓
CLOSING_DUA
  → Display closing supplication
  → "Complete Session" button
  ↓
COMPLETE
  → Session logged to challenge
  → Day marked complete
  → Return to card
```

### 10.4 Storage Mechanism

```typescript
// Challenge stored with other challenges
const challenge: Challenge = {
  type: 'PROPHETIC_NAMES',
  dailyTarget: 1,      // 1 session/day
  ramadanTarget: 7,    // 7 total sessions
  // ...
};

// Separate session progress (independent)
// Key: `prophetic_names_sessions_v1_${challengeId}`
interface DaySession {
  day: number;      // 1-7
  completed: boolean;
}
// Stored as JSON array of 7 DaySession objects
```

### 10.5 Practice State (Component-Local)

```typescript
const [step, setStep] = useState<PracticeStep>('INTRO');
const [jamiuCount, setJamiuCount] = useState(0);
const [currentNameIndex, setCurrentNameIndex] = useState(0);
const [showTranslation, setShowTranslation] = useState(true);
```

---

## 11. Mobile Integration Considerations

### 11.1 State Management Recommendations

For React Native, consider:
- **Replace localStorage** with `AsyncStorage` or `MMKV`
- **Keep reducer logic** - it's framework-agnostic
- **Extract pure functions** (utils, recommender) as-is

### 11.2 Data Sync Strategy

```typescript
// Suggested sync approach
interface SyncState {
  localVersion: number;
  lastSynced: string;
  pendingChanges: SessionLog[];
}

// Offline-first with eventual consistency
// Queue logs while offline, sync when online
```

### 11.3 Component Mapping

| Web Component | React Native Equivalent |
|--------------|-------------------------|
| div | View |
| button | TouchableOpacity / Pressable |
| span | Text |
| input | TextInput |
| Lucide icons | @expo/vector-icons or lucide-react-native |
| CSS animations | Animated API / Reanimated |

### 11.4 Haptic Feedback

```typescript
// Web (current)
navigator.vibrate([50, 50, 100]);

// React Native equivalent
import * as Haptics from 'expo-haptics';
Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
```

### 11.5 Share Functionality

```typescript
// Web (current)
navigator.share({ title, text, url });

// React Native equivalent
import { Share } from 'react-native';
Share.share({ message: text, url });
```

### 11.6 Deep Linking

```typescript
// Web (current)
const params = useSearchParams();

// React Native (suggested)
// Use React Navigation deep linking configuration
// Or Expo Linking API
```

### 11.7 Data Model Changes for Mobile

No changes required - models are framework-agnostic:
- `Challenge` interface ✓
- `SessionLog` interface ✓
- `PropheticName` interface ✓
- All presets (SALAWAT_PRESETS, etc.) ✓

### 11.8 Required Mobile Implementations

1. **Storage adapter** - AsyncStorage wrapper matching STORAGE_KEYS
2. **Date utilities** - Use same logic (Date API is universal)
3. **Ramadan detection** - Port from `@/src/lib/hijri`
4. **Translations** - Extract JSON from translations.ts

---

## Appendix: Quick Reference

### Storage Keys
```typescript
'ramadan_challenges_v2'           // Main data
'ramadan_istighfar_tracker'       // Legacy (migration)
'prophetic_names_sessions_v1_*'   // 7-day progress
```

### Default Values
```typescript
DEFAULT_QUICK_ADD_PRESETS = [33, 100, 313, 500, 1000]
SESSION_TAGS = ['Fajr', 'Ḍuḥā / Morning', 'Ẓuhr', 'ʿAṣr', 
                'Maghrib / Ifṭār', 'ʿIshāʾ / Tarāwīḥ', 'Other']
```

### Import Paths
```typescript
// Types
import type { Challenge, ChallengeType, SessionTag } from '@/src/features/ramadanChallenges';

// Store
import { RamadanChallengesProvider, useRamadanChallenges } from '@/src/features/ramadanChallenges';

// Components
import { RamadanHub, ChallengeCard } from '@/src/features/ramadanChallenges';

// Data
import { PROPHETIC_NAMES_201, SALAWAT_PRESETS } from '@/src/features/ramadanChallenges';
```

---

*Document generated from source code analysis. For implementation details, refer to the source files directly.*
