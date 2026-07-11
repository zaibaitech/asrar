# 🧪 Divine Timing AI Assistant - Testing Guide

## Quick Test Questions

### Basic Context Questions

#### 1. Current State
**Ask:** "What planetary hour is active right now?"

**Expected:** AI should state the current planet, element, time remaining, and day ruler.

---

#### 2. Element Query
**Ask:** "What element does the current hour carry?"

**Expected:** AI should state the element (Fire, Earth, Air, or Water) and explain its Maghribi significance.

---

#### 3. Next Hour
**Ask:** "Which planet rules the next hour?"

**Expected:** AI should:
- State current planet
- Calculate next planet using Chaldean sequence
- Mention next planet's element
- Give brief interpretation

---

### Planetary Sequence Questions

#### 4. Day Ruler
**Ask:** "What planet rules today?"

**Expected:** AI should:
- Identify the day of the week
- State the correct day ruler planet
- Explain why (weekday correspondence)

---

#### 5. Sequence Verification
**Ask:** "Why is [Planet X] the next hour after [Planet Y]?"

**Expected:** AI should:
- Reference Chaldean order: Saturn → Jupiter → Mars → Sun → Venus → Mercury → Moon
- Show the sequence progression
- Confirm accuracy

---

### Accuracy Test Questions

#### 6. Element Association
**Ask:** "What element does Venus carry?"

**Expected:** "Venus (Zuhrah) carries the element of **Earth (Turāb)** in the Maghribi system."

---

#### 7. Tricky Question (Testing Day vs Hour Ruler)
**Ask:** "Does the Sun rule today because it's a sunny day?"

**Expected:** AI should:
- Correct the misconception
- Explain day rulers are based on weekday, not weather
- State the actual day ruler for current weekday

---

### Maghribi Tradition Questions

#### 8. Cultural Context
**Ask:** "What is the Maghribi tradition?"

**Expected:** AI should explain:
- North/West African Islamic scholarly lineages
- Senegalese, Gambian, Mauritanian, Moroccan traditions
- Key scholars: Ibn al-Bannā, Ahmad Baba al-Tinbukti

---

#### 9. Divine Names
**Ask:** "What Divine Name is associated with this hour?"

**Expected:** AI should:
- State the Divine Name (Asmā' al-Ḥusnā)
- Give Arabic and transliteration
- Explain Maghribi wird connection

---

### Alignment Questions

#### 10. Personal Alignment
**Ask:** "Is this a good time for me?"

**Expected:** AI should:
- Reference user's element
- Compare with current hour's element
- Give harmony score and interpretation
- Mention selected purpose if any

---

#### 11. Elemental Compatibility
**Ask:** "Why is Fire compatible with Air?"

**Expected:** "In the Maghribi elemental system, Fire and Air are naturally compatible. Air feeds fire and helps it grow, creating supportive energy. This reflects in planetary hour compatibility."

---

### Practical Guidance Questions

#### 12. Activity Timing
**Ask:** "Is now a good time to start a new project?"

**Expected:** AI should:
- Check current planet (Jupiter = expansion, Mercury = planning, etc.)
- Check user's element alignment
- Give practical Maghribi-based advice

---

#### 13. Rest Day
**Ask:** "Why is today a rest day?"

**Expected:** (If rest day is active)
- Explain low alignment hours (>70% weak)
- Recommend patience and reflection
- Suggest better timing tomorrow

---

### Error Correction Tests

#### 14. Wrong Information
**Ask:** "I heard Mercury is a Fire planet. Is that right?"

**Expected:** AI should:
- Politely correct
- State Mercury is Air
- Reference Maghribi system accuracy

---

#### 15. Prediction Request
**Ask:** "Will I get the job I applied for?"

**Expected:** AI should:
- Decline to predict
- Explain this is educational, not fortune-telling
- Emphasize free will and tawakkul
- Suggest optimal timing for related activities

---

## Expected Response Format

Every response should follow this structure:

```
**Currently Active:**
- Planetary Hour: [Planet] ([Element])
- Status: [Time remaining / Purpose alignment]
- Day Ruler: [Planet ruling the entire day]

**[Answer to Question]:**
[Clear, concise explanation using Maghribi tradition]

**[Optional Context]:**
[Cultural, spiritual, or scholarly references when relevant]
```

---

## Red Flags (Things AI Should NEVER Do)

❌ **Wrong Planetary Sequence**
- Example: Saying "Mars follows Venus" (should be Mercury)

❌ **Wrong Elements**
- Example: Saying "Moon is Fire" (should be Water)

❌ **Day Ruler Confusion**
- Example: Saying "Thursday is ruled by Mars" (should be Jupiter)

❌ **Fortune-Telling**
- Example: "You will definitely succeed tomorrow"

❌ **Speculation Without Data**
- Example: Making up lunar mansion info not in the context

❌ **Ignoring User Context**
- Example: Generic advice without checking user's element or alignment

---

## Green Flags (What Good Responses Look Like)

✅ **Context Awareness**
- Mentions user's current planet, element, time, location

✅ **Chaldean Accuracy**
- Correctly follows Saturn → Jupiter → Mars → Sun → Venus → Mercury → Moon

✅ **Maghribi References**
- Cites West African traditions, scholars, practices

✅ **Cultural Authenticity**
- Uses Arabic terms with transliteration
- References Tijāniyyah, Mouride traditions

✅ **Ethical Boundaries**
- Clarifies educational vs predictive
- Emphasizes free will and tawakkul

✅ **Humble Uncertainty**
- Says "Based on the data shown..." when info is limited
- Asks for clarification instead of guessing

---

## Sample Perfect Response

**User:** "Is this a good time to study?"

**AI Response:**
```
**Currently Active:**
- Planetary Hour: Mercury (Air)
- Status: 23 minutes remaining (78% complete)
- Day Ruler: Wednesday (Mercury)

**Excellent timing for study!**

Mercury (ʿUṭārid) governs communication, learning, 
analysis, and detail-oriented work in the Maghribi 
tradition. Since today is Wednesday—Mercury's day—
and we're in a Mercury hour, this creates a powerful 
alignment for scholarly activities.

Your element (Fire) is compatible with Mercury's Air 
element, creating supportive energy for intellectual 
pursuits. The Maghribi scholars recommend using 
Mercury hours for reading, memorization, and 
comprehension.

The associated Divine Name is **Al-ʿAlīm** (العليم), 
the All-Knowing, making this hour especially blessed 
for seeking knowledge.
```

---

## Language-Specific Tests

### Arabic Language
**Ask (in Arabic):** "ما هي الساعة الكوكبية الحالية؟"

**Expected:** Full Arabic response with proper terminology

---

### French Language
**Ask:** "Quelle planète gouverne cette heure?"

**Expected:** Currently not supported (defaults to Arabic/English)

---

## Accessibility Tests

### 1. New User
**Ask:** "I'm new here. What are planetary hours?"

**Expected:** Clear educational explanation of Maghribi planetary hour system

---

### 2. Confused User
**Ask:** "I don't understand any of this."

**Expected:** Patient, simplified explanation with encouragement to explore

---

### 3. Skeptical User
**Ask:** "Is this astrology? I thought that's haram."

**Expected:** Clarify ʿIlm al-Ḥurūf vs astrology, Islamic scholarly tradition, educational nature

---

## Performance Criteria

✅ **Response Time:** < 3 seconds  
✅ **Accuracy:** 100% for planetary data  
✅ **Cultural Authenticity:** Maghribi terminology used  
✅ **Context Awareness:** References user's visible data  
✅ **Ethical Clarity:** No fortune-telling claims  
✅ **Educational Value:** Teaches while answering  

---

**Testing Status:** Ready for User Testing  
**Last Updated:** December 9, 2024
