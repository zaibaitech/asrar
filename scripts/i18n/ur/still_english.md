English that is still shown to Urdu users, after the Phase 5 audit of the Urdu audit (Oct 2026). **Urdu is not fully localized**: the tools and result tabs are translated, the sign-in, profile and name-guide labels and the Quran share actions are translated (Phase 6), but the long server-rendered prose of the name pages, the social-preview images, page metadata and image `alt` text are not, and the religious items below are deliberately held. Numbers are UNIQUE English strings. /ur stays noindex, out of the sitemap and out of hreflang until these are resolved and a qualified reviewer has approved the Urdu.

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

**After Phase 6 / 6B, method D: 21 strings in 6 files** = 8 social-preview image strings + 1 page-metadata title (`Ikhtiyārāt Result`) + 12 held religious strings (`SpiritualPracticeTab`, `DhikrCounter`). Method D only sees literals of certain shapes: Phase 6B also found, by rendering, the multi-line home-page shell, the names-page prose and the table header, which the scan could not see and which are now covered. The count says nothing about data-file text (method A: 89 strings in `burujData.json`, 59 of them held) or about text that no scan shape reaches.

Catalog size: 1,390 entries at `origin/main`, 3,018 with the earlier draft, 3,444 after Phase 3, 3,450 after Phase 5, 3,594 after Phase 6B.

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

**4. Source-content problems**
- `[SCHOLAR-REVIEW]` (about 14 English and 6 French rule sentences, `src/lib/ikhtiyarat/elections/*.ts`) is a deliberate flag (`useSimpleMode.ts`, `marriage.scholar-review.test.ts`). **Phase 6B:** in Urdu it reads «[علما کے جائزے کا منتظر]» ("awaiting scholarly review": it says the rule is waiting for review, never that it was approved). English and French keep the raw flag. Decision still open for the owner: show a localized badge in all four languages, or keep the flag as is.
- "(business.ts)": **fixed in Phase 6B** in English ("…cited against contracts in the business rules applies here…"), French ("…dans les règles des affaires…"), Arabic and Urdu catalog keys. The remaining `business.ts` mentions are code comments only.
- "Show N more traits": **fixed** (Phase 6): the button expands the list. Browser-checked in en, fr and ur (21 → 27 headings, button gone).
- `/auth` Supabase diagnostics: **fixed in Phase 6B**. Production builds show «Sign-in is temporarily unavailable. Please try again later.» (en/ar/ur; the Arabic wording is an AI draft for the native reviewer) and never print URL/key status, URL prefix, key length or build time; development keeps the set/missing checklist. The form error "Supabase not configured" is replaced by the same message in production. Checked in a built app and in `next dev`.
- Medical-timing sentences ("treatment begun now tends to come to nothing", "classically favorable for treatments…") and unhedged tradition claims (protective ring, cowries, "your most spiritually aligned day", the "Prophet ﷺ preferred Thursday" line). Translated as the source states them and flagged for editorial review. Nothing was added.
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

### Phase 6 (release-candidate pass)

Translated (catalog rows, section `phase6-ui`, 122 entries, 3,572 in total): sign-in page (23), profile view/edit/setup and profile pages (51), name-guide labels, FAQ and rules (33), Quran share actions (8), Ikhtiyārāt share page "Check a date for yourself", Ramadan modal "25-35 min", "My Profile", the three-piece optional-sign-in sentence, and the two /names prose paragraphs. The mobile-menu About text is rendered as whole Urdu sentences (the English one is split by bold terms; en/fr/ar are unchanged).

### Phase 6B (follow-up)

Fixed:
- `[SCHOLAR-REVIEW]` label in Urdu; "(business.ts)" removed from en/fr/ar/ur text; `/auth` diagnostics hidden in production.
- **Image `alt` text** (component level, `src/lib/i18n/imageAlt.ts`, no change to `ArabicDomTranslator`): profile photo preview, Play badge (same words as its aria-label), profile fallback (the person's own name is still used when there is one), Wave QR, Play-install QR. Informative/functional images only; none was decorative. **The AIChat "Cherno" avatar is not changed**: the chat is disabled in production builds (`IS_AI_ENABLED`). en/fr/ar keep their text (checked on the home page: Urdu «Google Play سے حاصل کریں», others unchanged).
- **12-hour clock in Urdu mode**: ICU period-of-day words, «9:05 صبح», «12:00 دوپہر», «3:45 دوپہر», «5:00 سہ پہر», «7:30 شام», «12:05 رات», instead of Latin AM/PM. Implemented in the Urdu branch of the existing Intl/`toLocale*String` patch in `ArabicDomTranslator` (`withUrduDayPeriod`); 24-hour requests, `timeStyle`/`dateStyle` and calls without an hour are untouched; Arabic keeps «ص / م», en/fr are never patched. Values and time zones are not changed. Convention for the reviewer: period words are ICU/CLDR's (3:45 PM is «دوپہر», 5:00 PM «سہ پہر»). Static strings that already contain Latin "3-5 PM" (data files) still go through the existing catalog entries. Checked on the home page: «09:36 صبح» in Urdu, «09:36 AM» in English.
- **`/names/[slug]` prose**: whole Urdu templates (`src/lib/names/urdu.ts`, swapped in by `ByUiLanguage` in Urdu mode only): title, intro, value heading and note, spellings, pairings heading and note, "how the burj is found", the four FAQ items (with the worked example). English markup and the FAQ JSON-LD are unchanged. The 12 names stay in Latin letters. Checked for muhammad, fatima and khadija at 360/390/412 px.
- **Home page SEO shell** (found in the rendered check, not in the original audit): heading, intro and the 17 public-tool descriptions. "201 Prophetic Names" stays in English inside that sentence pending religious review (no Urdu term was invented).
- Table header "Mother's name".

Still English or not done:
- **Social-preview images (8 strings): not implemented, by design.** Findings with `next/og` 14.2.35 (satori): the Urdu-capable fonts that were tried (Noto Nastaliq Urdu, Noto Naskh Arabic, Noto Sans Arabic, Amiri, Noto Kufi Arabic; all OFL) make the shaper throw («lookupType: 7/5 … is not yet supported»); the one font that renders (Vazirmatn) joins the letters, but `direction: rtl` is ignored and a line's words are placed left to right in logical order, so a sentence reads scrambled to a native reader; embedded Latin names and numbers sit in the wrong place. There is also no `lang=ur` route parameter (only `fr`) and `/ur` is noindex, so there is no crawler benefit yet. Minimum viable alternative (needs approval): pre-render Urdu cards at build time with a real shaper (headless Chromium or a resvg-based SVG text path) and serve them as static PNGs, plus a `lang=ur` mapping and a canonical decision. The cards stay English/Latin until then.
- **Page metadata** (title/description of `/ikhtiyarat/r/[date]`, `/names/*`): language-independent server output; `/ur` is noindex. Same decision as above.
- AIChat avatar alt (disabled in production), see above.
- Names pages: the 12 names, WhatsApp/Telegram and brand names are legitimate Latin text.
- Religious items in section 3 unchanged (angel/jinn, Divine Name glosses, Fātiḥa renderings), plus the "201 Prophetic Names" wording above.
- Decision still open: `[SCHOLAR-REVIEW]` as a localized badge in all languages (see section 4).
