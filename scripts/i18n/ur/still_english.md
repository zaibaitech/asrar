English that is still shown to Urdu users, after the Phase 5 audit of the Urdu audit (Oct 2026). **Urdu is not fully localized**: the tools and result tabs are translated, the account/profile/auth screens, the name-guide pages, the share pages and the social-preview images are not, and the religious items below are deliberately held. Numbers are UNIQUE English strings. /ur stays noindex, out of the sitemap and out of hreflang until these are resolved and a qualified reviewer has approved the Urdu.

### How these were counted

| Method | What it counts |
|---|---|
| A. `python3 scripts/i18n/ur/count_gaps.py [--ref HEAD]` | English strings in `src/data/burujData.json` not matched by an exact or `re:` entry of `public/i18n/ur-ui.json` |
| B. Rendered count (Playwright, Chromium, Urdu mode, `/ur/name-and-mother-burj`, all 12 burj via 12 name pairs, every tab opened) | unique Latin text nodes still on screen, excluding hex colours, social-share names and language codes |
| C. Engine count: `evaluateElection` for 6 election types (normal and strict hour ruler), 700 dates | unique rule labels and Detailed-mode sentences produced, normalised for numbers, not matched by the catalog |
| D. Source scan (Phase 5): `npx tsx scripts/i18n/ur/update_known_english.ts`, checked by `src/lib/urdu-english-ratchet.test.ts` | English literals in production components reachable from the app routes (`language === 'en' ? '…'`, `en: '…'`, JSX text) that the catalog does not cover; recorded in `known_english.json` |

| Count | `origin/main` | After the earlier draft | After Phase 3 | After Phase 5 |
|---|---|---|---|---|
| A. burujData.json uncovered, unique (of 1,082) | 701 | 150 | 89 | 89 (unchanged; 30 unused, 59 held) |
| B. Burj result, leftover Latin nodes | 657 | 353 | 95 | 95 (unchanged: 54 held, 41 legitimate) |
| C. Ikhtiyārāt Detailed mode rules (17,787 distinct sentences, 43 labels) | 17,787 | 17,784 | 0 | 0 |
| D. Reachable components, uncovered English literals | not measured | not measured | 71 (estimated by the same scan) | **65** (after the 6 strings fixed in Phase 5) |

Catalog size: 1,390 entries at `origin/main`, 3,018 with the earlier draft, 3,444 after Phase 3, 3,450 after Phase 5.

### Remaining English by category (method D: 65 strings in 15 files, plus the held and unused items)

**1. User-facing English that still needs translation (53 strings, all reachable)**

| Where | Strings | Notes |
|---|---|---|
| Sign-in page (`app/(site)/auth/page.tsx`) | 9 | Create Account, Email Address, Password, Sign in/up, Send Reset Link… Only seen when signing in. |
| Profile screens (`ProfileView`, `ProfileEdit`, `profile/page`, `profile/setup/page`) | 20 | Behind sign-in. |
| Name-guide pages (`/names`, `/names/[slug]`) | 9 | Server-rendered English SEO pages, reached from the tools. |
| Quran share page actions (`ShareActions.tsx`) | 5 | "Open in Asrariya", Google Play lines. |
| Ikhtiyārāt shared-result page title | 1 | "Ikhtiyārāt Result". |
| Ramadan "add challenge" modal | 1 | "25-35 min". |
| Social-preview images (`app/og/ikhtiyarat`, `app/og/quran`, `app/opengraph-image.tsx`) | 8 | Rendered as images on the server; the DOM catalog cannot translate them. |

Not in method D but also visible: the mobile-menu About body (3 strings; a sentence with bold terms needs a templating decision and Arabic wording), `alt` attributes, AM/PM times, the English-page links «(انگریزی میں)».

**2. Legitimate English (kept on purpose)**: brand and product names (WhatsApp, Telegram, Asrariya, Asrār Everyday, SendWave/Wave), language names in their own language (English, Français), URLs, the Latin transliteration of an Arabic name shown beside the Arabic (mansion names such as "Al-Jabha", angel/jinn names, verse transliterations, "Ṣalla-llāhu ʿalayhi wa sallam"), the Wolof name of the Hijri month printed in brackets beside the Hijri date ("Rakkaati Gàmmu", from `hijri.monthName.wolof`), and Latin names inside Urdu text (Seringe Mahdiou Niane, dugub, petaw). In the rendered count these are 41 of the 95 leftover nodes; the scan skips them through `LEGIT_ENGLISH`.

**3. Religious or subject-matter content awaiting verification (held on purpose)**

| What | Where | Why held |
|---|---|---|
| Angel and jinn names, descriptions and section labels ("Associated Angel", "Jinn King", "About Angels", "About Jinn", "Spiritual Guardians & Forces", "Elemental Force", "Celestial Guardian"…) | `SpiritualPracticeTab.tsx` (10), `DhikrCounter.tsx` (2), burujData angel/jinn fields (24) | Needs a reviewer who knows the tradition; no machine translation of religious claims. |
| English glosses of the Divine Names ("O Opener, O Provider") | burujData `divine_names` (9) | Divine Names are shown in Arabic from the data; glosses are not machine-translated. |
| English renderings of the Fātiḥa verses | burujData `quranic_verse` (9) | Needs a published Urdu translation; none was invented. |
| "Recite the Angel name / Jinn name" instructions | burujData `instructions` (17) | Same as angel/jinn. |

**4. Source-content problems that need an editorial decision (not translation)**
- Internal flag `[SCHOLAR-REVIEW]` is printed in the English rule text and therefore also in Urdu.
- A file name, "(business.ts)", is printed inside the Mercury-retrograde education sentence.
- The "Show N more traits" button on the personality tab has an empty click handler (`onClick={() => {}}`), so it does nothing in any language.
- Medical-timing sentences ("treatment begun now tends to come to nothing", "classically favorable for treatments…") and unhedged tradition claims (protective ring, cowries, "your most spiritually aligned day", the "Prophet ﷺ preferred Thursday" line). They are translated as the source states them; no medical advice was added or removed.
- Strong marriage warnings in the archetype texts; "Friday is the most sacred day" and similar religious statements (see `ur-review.md`, section 7.2).

**5. Unused data that does not reach the UI**
- `weekly_spiritual_practices` in `burujData.json`: 30 strings, not read by any page.
- 500 English literals in 36 component files that no route imports (`divine-timing/education`, `life-path`, `weekly-guidance`, `BalanceMeter`, `CalculationBreakdownModal`, `MoreInfoModal`, `DisclaimerBanner`, `HadadSummaryPanel`…) and the development-only `IlmHurufPanel`.

### What Phase 5 fixed

- The five labels from the Phase 4 browser check, at component level (`pickLabel` in `src/features/ikhtiyarat/copy.ts`, driven by `LanguageContext.uiLanguage`): «پاس / ناکام / اضافی نمبر / منفی نمبر / سخت ناکامی» for Pass / Fail / Bonus / Penalty / Hard fail, «آپ کا مقام» for "Your Location", «احتیاط — انسانِ فلکی» for "Zodiac Man Caution". English and French are unchanged (French keeps "Your Location" as before).
- `abjadSystem.note` added to the shared Urdu dictionary (the same text the catalog had).
- Catalog: «Previous», «Don't show this tutorial again», «Signed in as», «Sign Out», «Explore the tools» and the home-page disclaimer line. «History» now reads «سابقہ حسابات» (as in the dictionary; it was «تاریخ»). «Each of the 99 Names…» keeps its number («ننانوے»). "…planets in the zodiac" no longer says «زائچے» (chart).
- New tests: see the commit message; they found the «History», «99» and «زائچہ» problems.

### Ikhtiyārāt Detailed mode, checked in a browser (Phase 4 and Phase 5)

Chromium on the built app, `/ur/ikhtiyarat`, "میری تاریخ جانچیں", Detailed view. Phase 4: all 7 occasions at 390×844. Phase 5, after the five labels were localized: marriage and medical at 360×740, 390×844 and 412×915, plus `/ikhtiyarat` (English) and `/fr/ikhtiyarat`. No horizontal overflow, `lang="ur" dir="rtl"`, numbers stay next to their text (e.g. «6° کے اندر …»). The only Latin left on the Urdu page is the Wolof month name beside the Hijri date and the link to the English page. The location was a browser geolocation override; the sandbox cannot reach the analytics hosts or the reverse-geocoding service (that is why the place name falls back to «آپ کا مقام»).

### Open points from the external Urdu audit (18 Oct 2026), left for the native reviewer

Applied in code: «رگڑ» (friction) replaced by اختلاف / تناؤ / کشیدگی; «جڑا ہوا» (grounded) → «زمین سے جڑا»; «فطرت» → «مزاج» in the career texts; deterministic career wording («شدید طور پر بگاڑتی ہیں») softened to «روایتی طور پر … غیر موافق سمجھی جاتی ہیں»; «ممانعت» → «پابندی»; the seven weekday paragraphs now attribute each day to its planet «روایتی علمِ نجوم میں» (planets are never agents); Friday is «سب سے افضل دن». Phase 3: the Monday paragraph no longer contains «قمر کے پانی سکون پسند کرتے ہیں» (it now ends «ٹکراؤ سے بچیں؛ اس دن سکون اور تحمل کو ترجیح دیں»; the English "the Moon's waters prefer calm" is a metaphor and is not carried over).

Verified against the Arabic names in `lunarMansions.ts`: «چھوٹا پیٹ» = البطين (little belly); «پیچھے آنے والا» = الدبران (the follower); «نشان» = الهنعة (the brand/mark; «داغ» was dropped because it reads as a stain); «سعد الاخبیہ (خیمے)» = سعد الأخبية. Still for the native reviewer: whether «نشان» is the preferred Urdu for الهنعة.

Not applied, because they change meaning or need a source check:
- Medical rule explanations (treatment, diagnosis): the audit suggests adding «طبی علاج کے فیصلے ڈاکٹر کے مشورے سے کریں». The English source has no such sentence, so it should be added to EN/FR/AR/UR together or not at all (Mario's decision). The Detailed-mode medical sentence "treatment begun now tends to come to nothing" (void-of-course Moon) is translated as it stands in the source; it is flagged for separate source-content review.
- «ربط» vs «اتصال» for connection vs applying aspect (Phase 2 open question 11).
- Source texts that state tradition claims without hedging, translated as they stand and flagged for review: the Charity-tab items about a protective ring, cowries (petaw) and dreams, the "heaviness of the zodiac" remark for Leo, "Give secretly… as it purifies the heart", and "your most spiritually aligned day" in the burj overview.
- New terms drafted for the Detailed-mode sentences, for the reviewer to confirm: aspect names قران / تسدیس / تربیع / تثلیث / مقابلہ; ثابت / منقلب / ذوجسدین برج; «دلالت کنندہ» for "significator"; «زاویائی فرق» for "orb"; «زاویائی فاصلہ» for "elongation"; «غیر موافق» for the literal "unfavorable".
- Thursday/Friday statements: confirm the Islamic claims against sources.
