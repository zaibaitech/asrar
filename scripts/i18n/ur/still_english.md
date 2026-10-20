Result texts that still reach Urdu users in English, after the Phase 3 pass of the Urdu audit (Oct 2026). All numbers are UNIQUE English strings. They are the remaining work before /ur can be indexed; /ur stays noindex, out of the sitemap and out of hreflang.

### How these were counted (same method before and after)

| Method | What it counts |
|---|---|
| A. Data count: `python3 scripts/i18n/ur/count_gaps.py [--ref HEAD]` | English strings in `src/data/burujData.json` not matched by an exact or `re:` entry of `public/i18n/ur-ui.json` |
| B. Rendered count (Playwright, Chromium, Urdu mode, `/ur/name-and-mother-burj`, all 12 burj via 12 name pairs, every result tab opened and expanded) | unique Latin text nodes still on screen, excluding hex colours, social-share names and language codes |
| C. Engine count: `evaluateElection` for the 6 election types (normal and strict hour ruler), 700 dates | unique rule labels and Detailed-mode sentences produced, normalised for numbers, not matched by the catalog |

| Count | Catalog at `origin/main` | After the uncommitted AI draft (earlier in the audit) | After Phase 3 |
|---|---|---|---|
| A. burujData.json uncovered, unique (reachable areas: personality, blessed day, career, charity, spiritual practice) | 701 of 1,082 | 150 of 1,082 | 89 of 1,082 (of which 30 are `weekly_spiritual_practices`, unused by any page) |
| B. Burj result, leftover Latin nodes | 657 | 353 | 95 |
| C. Ikhtiyārāt Detailed mode (17,787 distinct rendered strings; ~260 shapes) | 17,787 | 17,784 | 0 (all 17,787 and all 43 labels resolve) |

Catalog size: 1,390 entries at `origin/main`, 3,018 with the earlier uncommitted draft, 3,444 after Phase 3 (+426: 185 Charity-tab texts and 45 Divine Names & dhikr practice texts, 20 Sadaqah/overview/spiritual-practice labels and patterns, 175 Ikhtiyārāt labels and sentence patterns). Charity-tab content turned out to come from `src/data/zodiacSadaqahData.ts` (251 English texts, 185 were uncovered), not only from `burujData.json`.

### What is left (method B, 95 unique nodes)

| Category | Count | Why it is left |
|---|---|---|
| Held for subject-matter review: angel and jinn names/descriptions and their section labels ("Associated Angel", "Jinn King", "About Angels", "About Jinn", "Spiritual Guardians & Forces"…), the English glosses of the Divine Names ("O Opener, O Provider"), the English renderings of the Fātiḥa verses ("Guide us to the straight path") | 54 | Religious content: Divine Names and Qur'an are never machine-translated; the Arabic is already shown from the data files. A published Urdu translation of the Fātiḥa verses and a reviewer for the angel/jinn text are needed. The matching "Recite the Angel name / Jinn name" instruction lines (17) are held for the same reason. |
| Latin transliteration of an Arabic name shown next to the Arabic (mansion names such as "Al-Jabha", angel/jinn names, verse transliterations) | 36 | Legitimate: proper nouns / transliteration. |
| Urdu text that keeps a Latin proper noun (Seringe Mahdiou Niane, "dugub", "petaw", "niyyah") | 5 | Legitimate. |

### Other known gaps

| Where | Strings | Note |
|---|---|---|
| `weekly_spiritual_practices` in `burujData.json` | 30 | Not used by any page. |
| Dead or dev-only code (IlmHurufPanel, divine-timing education, life-path, BalanceMeter, CalculationBreakdownModal…) | ~429 | Not reachable by users in production. |
| Mobile menu About body (`MobileMenu.tsx`) | 3 | Sentence with bold terms; needs a templating decision and Arabic wording (Phase 1b). |
| "Help & Tutorial", "History" (`MobileMenu.tsx`) | 2 | Translated through the catalog only. |
| `alt` attributes, OG/share routes, AM/PM times | few | Not translated by the DOM catalog. |

### Not verified in a browser

The Detailed-mode Ikhtiyārāt sentences were verified against the engine output (method C) and a unit test, not by clicking through the rendered Detailed view in Urdu.

### Open points from the external Urdu audit (18 Oct 2026), left for the native reviewer

Applied in code: «رگڑ» (friction) replaced by اختلاف / تناؤ / کشیدگی; «جڑا ہوا» (grounded) → «زمین سے جڑا»; «فطرت» → «مزاج» in the career texts; deterministic career wording («شدید طور پر بگاڑتی ہیں») softened to «روایتی طور پر … غیر موافق سمجھی جاتی ہیں»; «ممانعت» → «پابندی»; the seven weekday paragraphs now attribute each day to its planet «روایتی علمِ نجوم میں» (planets are never agents); Friday is «سب سے افضل دن». Phase 3: the Monday paragraph no longer contains «قمر کے پانی سکون پسند کرتے ہیں» (it now ends «ٹکراؤ سے بچیں؛ اس دن سکون اور تحمل کو ترجیح دیں»; the English "the Moon's waters prefer calm" is a metaphor and is not carried over).

Verified against the Arabic names in `lunarMansions.ts`: «چھوٹا پیٹ» = البطين (little belly); «پیچھے آنے والا» = الدبران (the follower); «نشان» = الهنعة (the brand/mark; «داغ» was dropped because it reads as a stain); «سعد الاخبیہ (خیمے)» = سعد الأخبية. Still for the native reviewer: whether «نشان» is the preferred Urdu for الهنعة.

Not applied, because they change meaning or need a source check:
- Medical rule explanations (treatment, diagnosis): the audit suggests adding «طبی علاج کے فیصلے ڈاکٹر کے مشورے سے کریں». The English source has no such sentence, so it should be added to EN/FR/AR/UR together or not at all (Mario's decision). The Detailed-mode medical sentence "treatment begun now tends to come to nothing" (void-of-course Moon) is translated as it stands in the source; it is flagged for separate source-content review.
- «ربط» vs «اتصال» for connection vs applying aspect (Phase 2 open question 11).
- Source texts that state tradition claims without hedging, translated as they stand and flagged for review: the Charity-tab items about a protective ring, cowries (petaw) and dreams, the "heaviness of the zodiac" remark for Leo, "Give secretly… as it purifies the heart", and "your most spiritually aligned day" in the burj overview.
- New terms drafted for the Detailed-mode sentences, for the reviewer to confirm: aspect names قران / تسدیس / تربیع / تثلیث / مقابلہ; ثابت / منقلب / ذوجسدین برج; «دلالت کنندہ» for "significator"; «زاویائی فرق» for "orb"; «زاویائی فاصلہ» for "elongation"; «غیر موافق» for the literal "unfavorable".
- Thursday/Friday statements: confirm the Islamic claims against sources.
