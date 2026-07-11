# Autofill Toggle Feature

## Overview
Added a toggle control that allows users to disable automatic profile information filling when they want to calculate guidance for family members or friends instead of themselves.

## Implementation Details

### Files Modified

#### 1. `/src/features/ilm-huruf/IlmHurufPanel.tsx`
**State Management:**
- Added `enableAutofill` state (defaults to `true`)
- Modified profile autofill logic to check toggle state before filling fields

**UI Component:**
- Toggle switch appears when user is logged in and has profile data
- Located above the Name Destiny/Life Path form
- Uses purple theme matching the app's color scheme
- Includes label "Use my profile information" and helper text "Toggle off to calculate for family or friends"

**Code Location:**
```typescript
// State: Line ~342
const [enableAutofill, setEnableAutofill] = useState(true);

// Logic: Line ~345-366
useEffect(() => {
  if (profile && enableAutofill) {
    // Autofill logic...
  }
}, [profile, enableAutofill]);

// UI: Line ~893-913
{profile && (
  <div className="mb-4 p-3 bg-slate-50 dark:bg-slate-800/50...">
    {/* Toggle switch */}
  </div>
)}
```

#### 2. `/src/lib/translations.ts`
**English (en):**
```typescript
autofillToggle: {
  label: "Use my profile information",
  description: "Toggle off to calculate for family or friends"
}
```

**French (fr):**
```typescript
autofillToggle: {
  label: "Utiliser mes informations de profil",
  description: "Désactivez pour calculer pour la famille ou les amis"
}
```

## User Experience

### When Toggle is ON (Default)
- Fields auto-fill with user's profile data:
  - Name (Latin) → `profile.full_name`
  - Mother's Name (Latin) → `profile.mother_name`
  - Birth Date → `profile.date_of_birth`
- Convenient for users calculating their own guidance

### When Toggle is OFF
- Fields remain empty
- User can manually enter data for family members or friends
- No automatic population from profile

## Visual Design

**Toggle Switch:**
- OFF: Gray background (`bg-slate-300 dark:bg-slate-600`)
- ON: Purple background (`bg-purple-600`)
- Smooth sliding animation
- White circular knob that slides left/right

**Container:**
- Light gray background in light mode (`bg-slate-50`)
- Dark semi-transparent in dark mode (`dark:bg-slate-800/50`)
- Border with rounded corners
- Padding for comfortable spacing

## Future Enhancements

### Potential Extensions:
1. **Persist Toggle State** - Save preference to localStorage or user profile
2. **Apply to Other Forms** - Extend to Istikhara and Relationship Compatibility forms
3. **Quick Profiles** - Allow saving multiple people's data (e.g., "Calculate for Mom", "Calculate for Brother")
4. **Smart Default** - If user navigates from someone else's profile, default to OFF

### Code References for Extension:
- **Istikhara Form**: `/src/features/istikhara/components/IstikharaForm.tsx`
- **Relationship Form**: Look for `RelationshipInputForm` component

## Testing Checklist

- [x] Toggle appears only when user is logged in
- [x] Toggle OFF → fields are empty
- [x] Toggle ON → fields auto-fill with profile data
- [x] Translations work in both English and French
- [x] Dark mode styling looks good
- [ ] Test on mobile devices
- [ ] Test with different profile data scenarios
- [ ] Verify no autofill when user has incomplete profile

## Technical Notes

**Dependencies:**
- `useProfile` hook for fetching user data
- `profile` object with `full_name`, `mother_name`, `date_of_birth`
- `LanguageContext` for translations

**Performance:**
- Toggle state change triggers immediate useEffect re-evaluation
- No API calls or heavy computations involved
- Smooth user experience

## Accessibility

**Current Implementation:**
- Click target is entire label area (label + toggle)
- Visual feedback with color changes
- Text labels explain functionality

**Potential Improvements:**
- Add `aria-label` to toggle button
- Add `aria-checked` state
- Keyboard navigation support (Space/Enter to toggle)
- Screen reader announcement on state change
