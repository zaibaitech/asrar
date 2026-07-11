# Divine Name Resonance - Quick Reference

## 🎯 What Changed

The Name Destiny module now uses the **28-Letter Cycle** methodology instead of the 99-name system.

## 📍 Files to Know

### Core Logic
```
/src/utils/divineNameResonance.ts
```
The complete implementation. **This is the source of truth.**

### Integration Point
```
/src/features/ilm-huruf/core.ts (line ~793)
```
The `buildDestiny()` function calls the new Divine Name Resonance calculator.

### UI Display
```
/src/features/ilm-huruf/IlmHurufPanel.tsx (lines ~3903-4050)
```
Enhanced card showing the Divine Name, derivation, and dhikr recommendation.

## 🔢 Quick Calculation Example

```
Name: محمد (Muhammad)

1. Normalize: محمد (no changes needed)

2. Calculate Abjad:
   م = 40
   ح = 8
   م = 40
   د = 4
   ─────
   Total = 92

3. Apply 28-Letter Cycle:
   92 % 28 = 8
   Index = 8

4. Get Divine Name:
   Position 8 → ح → حكيم (Al-Ḥakīm, The Wise)

5. Calculate Dhikr Count:
   حكيم: ح(8) + ك(20) + ي(10) + م(40) = 78
```

## ⚡ Key Rules

1. **Always 28** - Never 99 or any other number
2. **Personal name only** - Don't include mother's name
3. **Dhikr = Divine Name's value** - Not the user's total
4. **IF total < 28**: use total as-is (don't divide)
5. **IF total >= 28**: index = total % 28, but if 0 → 28

## 🧪 Test It

```bash
node test-divine-name-resonance.js
```

Should output: `🎉 ALL TESTS PASSED!`

## 📖 Full Documentation

See: `DIVINE_NAME_RESONANCE_COMPLETE.md`

## 🚨 Don't Modify

- The 28 Divine Names table
- The 28-letter cycle logic  
- The Abjad Kabīr values
- The normalization rules

These are **fixed by tradition** and must not be changed.

## ✅ Quick Checklist for Review

- [ ] Divine Name displays correctly in UI
- [ ] "How it was derived" shows Abjad total and index
- [ ] Dhikr count is the Divine Name's Abjad value
- [ ] Disclaimer is present and accurate
- [ ] Works in both English and French
- [ ] No outcome promises in the text
- [ ] No therapy or psychology language

## 🎨 UI Sections

The Divine Name card has 4 sections:

1. **Main Display** - Large Divine Name with translation
2. **How it was derived** - Shows the calculation steps
3. **Dhikr (Optional)** - Recommended count + explanation
4. **Disclaimer** - Clarifies this is a correspondence

## 💡 For Developers

If you need to:
- **Add a feature**: Check `divineNameResonance.ts` exports
- **Fix a bug**: Run the test file first to isolate
- **Update UI**: Look at `IlmHurufPanel.tsx` around line 3903
- **Change logic**: DON'T! Unless you have explicit permission

## 📞 Questions?

Refer to the implementation spec at the top of:
```typescript
/src/utils/divineNameResonance.ts
```

---

**Status:** ✅ COMPLETE  
**Last Updated:** December 31, 2025  
**Version:** 1.0
