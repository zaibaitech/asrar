# Planetary Modules Implementation

## 📋 Overview

Three planetary science modules have been successfully ported from the Asrariya mobile app to the Asrar web application. These modules provide real-time celestial insights based on traditional Islamic ʿIlm al-Nujūm (Science of the Stars) and Chaldean planetary hours.

## 🌟 Modules Implemented

### 1. **Planet of the Day (يوم الكوكب)**
Displays the daily planetary ruler and its elemental energy.

**Features:**
- Current weekday mapped to ruling planet (e.g., Monday → Moon)
- Elemental association (Fire, Water, Air, Earth) with Arabic labels
- Element description and emoji
- "Best For" activities list (4 recommended actions)
- Practice difficulty badge (Easy/Moderate/Advanced)

**Location:** `/src/components/planetary/PlanetOfTheDay.tsx`

### 2. **Planetary Hour Card (ساعة الكوكب)**
Shows the current planetary hour with real-time countdown and alignment status.

**Features:**
- Current planetary hour ruler with symbol and name (EN/AR)
- Real-time countdown to next hour
- User element vs. hour element comparison
- Ilm Nujum Status Badge (qualitative alignment indicator)
- Next planetary hour preview with countdown
- Day/Night indicator

**Location:** `/src/components/planetary/PlanetaryHourCard.tsx`

### 3. **Planet Transit Card (العبور الكوكبي)**
Displays the current planet transiting through its zodiac sign.

**Features:**
- Current planetary hour planet with gradient orb
- Primary zodiac sign ruled by that planet
- Element association
- Toggle between "Sky Now" and "Long-term" views
- "See your impact" navigation link

**Location:** `/src/components/planetary/PlanetTransitCard.tsx`

## 🏅 Ilm Nujum Status Badge

Replaces numerical percentage scores with qualitative tiers:

| Score Range | Badge Label (EN) | Arabic | Color |
|-------------|------------------|--------|-------|
| 85-100% | Auspicious | سعيد | Gold |
| 65-84% | Proceed Mindfully | تأنَّ | Amber |
| 45-64% | Neutral Window | وقت محايد | Slate Blue |
| 25-44% | Cautious | احترس | Orange |
| 0-24% | Inauspicious | نحس | Red |

**Location:** `/src/components/planetary/IlmNujumBadge.tsx`

## 📂 File Structure

```
src/
├── lib/planetary/
│   ├── types.ts              # TypeScript type definitions
│   ├── constants.ts          # Planet, element, and zodiac constants
│   ├── planetaryHours.ts     # Planetary hour calculations (Chaldean order)
│   ├── dayRuler.ts          # Day ruler utilities
│   ├── transit.ts           # Planet transit utilities
│   ├── alignment.ts         # Element alignment and harmony calculations
│   └── index.ts             # Main export file
│
├── components/planetary/
│   ├── IlmNujumBadge.tsx     # Status badge component
│   ├── PlanetOfTheDay.tsx    # Daily planetary energy card
│   ├── PlanetaryHourCard.tsx # Current hour with countdown
│   ├── PlanetTransitCard.tsx # Planet transit display
│   └── index.ts              # Component exports
│
└── lib/translations.ts        # Translation keys (EN/FR/AR)

app/
└── planetary/
    └── page.tsx              # Dedicated planetary modules page
```

## 🎨 Design System

**Color Palette:**
- Dark navy/slate base (#0D1B2A, #1A2742)
- Element-specific accent colors:
  - Fire: Red (#EF4444, #DC2626)
  - Water: Blue (#3B82F6, #2563EB)
  - Air: Cyan (#06B6D4, #0891B2)
  - Earth: Green (#10B981, #059669)
- Purple/Indigo accents for transit cards

**Typography:**
- Bilingual support (English/Arabic/French)
- Responsive text sizing with `adjustsFontSizeToFit`
- Clear hierarchy with font weights

## 🔧 Technical Implementation

### Dependencies
- `suncalc` - Astronomical calculations for sunrise/sunset
- React hooks for real-time updates
- TypeScript for type safety
- Tailwind CSS for styling

### Key Utilities

#### Planetary Hours Calculation
```typescript
import { getPlanetaryHourDataForNow } from '@/lib/planetary';

const data = await getPlanetaryHourDataForNow(latitude, longitude);
// Returns: { currentHour, nextHour, countdownSeconds, ... }
```

#### Day Ruler
```typescript
import { getDayRulerInfo } from '@/lib/planetary';

const dayInfo = getDayRulerInfo(new Date());
// Returns: { planet, element, bestFor, difficulty, ... }
```

#### Element Alignment
```typescript
import { getAlignmentStatus, calculateHarmonyScore } from '@/lib/planetary';

const status = getAlignmentStatus(userElement, timeElement);
// Returns: 'ACT' | 'MAINTAIN' | 'HOLD'

const score = calculateHarmonyScore(userElement, timeElement);
// Returns: 0-100
```

### Real-Time Updates
- Planetary hours update every minute
- Countdown timers tick every second
- Day ruler updates at midnight

## 🌐 Translation Keys

All text is internationalized with keys in `/src/lib/translations.ts`:

```typescript
planetary: {
  planetOfDay: { ... },
  planetaryHour: { ... },
  planetTransit: { ... },
  days: { ... },
  zodiac: { ... },
  ilmNujum: { ... },
  elementDescriptions: { ... },
  elementBestFor: { ... },
}
```

## 📱 Mobile App Source

Extracted from:
- `asrar-mobile/services/PlanetaryHoursService.ts`
- `asrar-mobile/utils/planetary-hours.ts`
- `asrar-mobile/services/MomentAlignmentService.ts`
- `asrar-mobile/services/PlanetTransitService.ts`
- `asrar-mobile/services/IlmNujumMapping.ts`
- `asrar-mobile/data/classical-hour-practices.ts`

## 🚀 Usage

### Dedicated Page
Visit `/planetary` to see all three modules in action.

### Individual Component Usage

```tsx
import { PlanetOfTheDay, PlanetaryHourCard, PlanetTransitCard } from '@/components/planetary';

// In your component
<PlanetOfTheDay language="en" />

<PlanetaryHourCard
  userElement="fire"
  latitude={40.7128}
  longitude={-74.0060}
  language="en"
/>

<PlanetTransitCard
  latitude={40.7128}
  longitude={-74.0060}
  language="en"
  onNavigate={() => router.push('/transit-details')}
/>
```

## 🎯 Future Enhancements

1. **Homepage Integration** - Add these cards to the main homepage grid
2. **User Location Detection** - Auto-detect user's GPS coordinates
3. **Notifications** - Alert users when their optimal planetary hour begins
4. **Detailed Views** - Individual pages for each module with more depth
5. **Historical Data** - Show past planetary hours and patterns
6. **Custom Alerts** - Let users set reminders for specific planetary hours

## ⚠️ Educational Notice

These tools are for reflection and education based on traditional Islamic sciences (ʿIlm al-Ḥurūf, ʿIlm al-Nujūm). They are NOT for divination (kāhana), which is forbidden. Always combine with prayer (duʿāʾ) and consultation with qualified scholars.

## 📚 Resources

- **Chaldean Order**: Saturn → Jupiter → Mars → Sun → Venus → Mercury → Moon
- **Planetary Days**: Sunday (Sun), Monday (Moon), Tuesday (Mars), etc.
- **Traditional Sources**: West African Maghribi tradition, classical Islamic astronomy

---

**Created:** February 2026  
**Status:** ✅ Complete  
**Version:** 1.0.0
