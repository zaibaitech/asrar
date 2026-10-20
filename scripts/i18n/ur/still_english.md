English that is still shown to Urdu users, after the Phase 5 audit of the Urdu audit (Oct 2026). **Urdu is not fully localized**: the tools and result tabs are translated, the sign-in, profile and name-guide labels and the Quran share actions are translated (Phase 6), but the long server-rendered prose of the name pages, the social-preview images, page metadata and image `alt` text are not, and the religious items below are deliberately held. Numbers are UNIQUE English strings. /ur stays noindex, out of the sitemap and out of hreflang until these are resolved and a qualified reviewer has approved the Urdu.

## Handover (Phase 9) — read this first; the sections below are the dated log

**Status: technically validated, partially localized; editorial review and future share-preview decisions outstanding.** Urdu is **not** fully localized (21 scanner findings below, plus data-file text and every item in the reviewer checklist). Nothing in this branch is native-reviewed or scholar-approved. Branch `fix/urdu-localization-audit`, local only (not pushed, merged, or deployed).

### 1. Implemented and validated

Evidence kinds: **Impl** = code or catalog change; **Tests** = automated Vitest coverage; **Browser** = Chromium on a built app (with the phase it was last run; "recorded" means not re-run in Phase 9). The Phase 9 run re-ran only tsc, Vitest, the scanner and the catalog/review generators (section 5).

| Area | Impl | Tests | Browser (recorded) |
|---|---|---|---|
| UI localization, `lang="ur"` / `dir="rtl"` | `LanguageContext` sets lang/dir from the UI language; shared dictionary `src/lib/i18n/ur.ts`; DOM catalog `public/i18n/ur-ui.json` (3,594 entries) | `urdu-dictionary`, `urdu-catalog-integrity`, `urdu-phase1-ui`, `urdu-ui-coverage`, `urdu` | Phase 7: 84 page loads (`/`, `/auth`, `/profile`, `/names`, `/names/muhammad|fatima|khadija` × en/fr/ar/ur × 360/390/412 px): ur `ur/rtl`, en `en/ltr`, fr `fr/ltr`, ar `ar/rtl`, no horizontal overflow, no raw internal text |
| Result catalog and terminology | AI-drafted result texts, Phase 4 corrections, glossary | `urdu-result-content` (engine sweep over 6 election types), `urdu-result-coverage`, `urdu-glossary`, `urdu-phase4-review` | Phases 3-4: rendered Burj result counts (not re-run) |
| Ikhtiyārāt labels and "Show N more traits" | `pickLabel` (labels); `IstikharaResults.tsx` expands (was an empty handler); Urdu flag «[علما کے جائزے کا منتظر]»; "(business.ts)" removed from en/fr/ar/ur text | `urdu-ikhtiyarat-labels`, `urdu-phase6-source-content`, `urdu-result-content` | Labels: Phase 5 (marriage, medical at 360/390/412, en/fr unchanged). Show more: Phase 7 (21 → 27 headings, button hidden, en/fr/ur × 3 widths) |
| `/auth` diagnostics hardening | `SupabaseConfigNotice` + `authErrorMessage`: production shows only «Sign-in is temporarily unavailable…» | `SupabaseConfigNotice.test` (production vs development, real rendering) | Production: Phase 7 (message after a submit, no diagnostics strings in built chunks). Development (`next dev`): Phase 6B only, **not re-run** |
| Image `alt` text | `src/lib/i18n/imageAlt.ts`, component level; `ArabicDomTranslator` not widened | `urdu-phase6b-alt` | Only the Play badge on `/`: Urdu in ur, unchanged in en/fr/ar (Phase 7). Profile photo, Wave QR, Play-install QR: **tests only** |
| Urdu 12-hour time | ICU day-period words, Urdu branch of the Intl patch only (`withUrduDayPeriod`) | `urdu-phase6b-time` (every hour, 24-hour untouched, en/fr/ar untouched, time zones) | Phase 7, fixed browser clock: 12:00 «دوپہر», 15:45 «دوپہر», 17:10 «سہ پہر», 19:30 «شام», 00:05 «12:05 رات»; en PM, ar «م» |
| Names guide `/names`, `/names/[slug]` | `src/lib/names/urdu.ts` whole-sentence templates via `ByUiLanguage` (Urdu mode only); English markup and JSON-LD unchanged | `urdu-phase6b-names` (all 12 names, numbers, example, framing) | Phase 6B/7: muhammad, fatima, khadija × 3 widths |
| Home SEO shell, sign-in/profile/share labels | catalog rows (`phase6-ui`, `phase6b-ui`) | `urdu-phase6-account`, `urdu-phase6-names-share`, `urdu-phase6b-names` | Home and `/auth` in the matrix above; `/profile` unauthenticated only |
| SEO safeguards | unchanged: `app/(ur)/ur/layout.tsx`, middleware `X-Robots-Tag`, sitemap, hreflang | `urdu-seo-rtl`, `urdu-english-ratchet` | Phase 6B/7: `/ur` and `/ur/ikhtiyarat` serve `noindex, follow`; 0 `/ur` URLs in the 62-URL sitemap; hreflang en, fr, ar, x-default only |

### 2. The 21 scanner findings (`known_english.json`, `npx tsx scripts/i18n/ur/update_known_english.ts`)

| Category | Count | Items | Why it is held |
|---|---|---|---|
| Social-preview image strings | 8 | `app/og/ikhtiyarat/[date]/route.tsx` ×6, `app/og/quran/…/route.tsx` ×1, `app/opengraph-image.tsx` ×1 | technical limitation, section 4 |
| Metadata title | 1 | «Ikhtiyārāt Result» (`ikhtiyarat/r/[date]` generateMetadata) | metadata decision, Phase 8 part B |
| Religious / scholarly | 12 | `SpiritualPracticeTab` ×10, `DhikrCounter` ×2 (angel, jinn) | awaits qualified review; deliberately not translated |

These are deliberate holds and limits, **not** evidence that localization is complete. The scan sees only certain literal shapes; text in data files (burujData: 59 held strings and others, see "How these were counted") and text it cannot see is not in the 21.

### 3. Reviewer checklist (work top to bottom; religious approval is separate from linguistic review, and a native-language reviewer is not by default a religious authority; no reviewer names, qualifications, approvals or dates are recorded here)

| Pri | Category and reviewer type | Where | Decision / review needed | Acceptance criterion | Status |
|---|---|---|---|---|---|
| 1 | Religious content, **qualified religious reviewer** | Section 3 "Religious or subject-matter content" below; Phase 8 register rows 1; 7.2 | Angel/jinn text (24 burujData fields + 12 UI strings); Divine Name glosses (9); Fātiḥa renderings (9); "Recite the Angel/Jinn name" lines (17); «201 Prophetic Names» wording; Thursday/Friday and "most sacred day" statements | Reviewer supplies or approves each Urdu text or states "keep English"; only then is a string translated | Awaiting review (untranslated) |
| 1 | `[SCHOLAR-REVIEW]` rule sentences, **qualified religious reviewer** | `src/lib/ikhtiyarat/elections/*.ts`; Phase 6B notes | Review the classical rules the flag marks; decide whether en/fr/ur show a localized badge or the raw flag | Each flagged rule reviewed; flag removed only by that decision | Awaiting review; display decision required |
| 1 | Medical and traditional claims, **editorial owner (Mario) plus a qualified reviewer** | Section 4 below; "Open points"; Phase 8 register rows 2 | Medical-timing sentences; add a "decisions about medical treatment: ask a doctor" sentence to EN/FR/AR/UR together or not at all; unhedged tradition claims (ring, cowries, dreams, Leo, "most spiritually aligned day", "Give secretly…") and marriage warnings | A written decision per item (keep, hedge, remove); any new sentence exists in all four languages | Decision required |
| 2 | Glossary, **Urdu subject-matter reviewer** | "Open points"; Phase 8 register rows 3 | «ربط» vs «اتصال»; aspect names; ثابت/منقلب/ذوجسدین; «دلالت کنندہ»; «زاویائی فرق/فاصلہ»; «غیر موافق»; «نشان» for الهنعة | One term per concept, recorded in the glossary, then `urdu-glossary` updated | Awaiting review |
| 2 | 60 flagged entries, **Urdu subject-matter reviewer** | `docs/i18n/ur-review.md` section 7.2 (source list `phase4_review.json`) | Answer the question in each row; accept or replace the provisional Urdu | Every row marked accepted or replaced, with the catalog rebuilt | Awaiting review |
| 2 | 896 AI-drafted result texts and 2,200 AI-drafted UI strings, **native Urdu reviewer** | `ur-review.md` sections 5 and 6 (40 corrections applied in 7.1) | Linguistic read of each group | Reviewer signs off per group; until then they stay "AI-drafted, not native-reviewed" | Awaiting review |
| 3 | Native Urdu wording | Phase 6B/7 notes | Day-period words: «دوپہر» (mid-afternoon) vs «سہ پہر» (from about 17:00), «رات» for 20:06 and 00:05 (or «آدھی رات»), noon «12:00 دوپہر»; spelling «Asrār» vs «اسرار» (the catalog turns the Latin brand into «اسرار» in some places, templates keep «Asrār») | One convention chosen; implementation changed only if the choice differs from ICU | Awaiting review |
| 4 | Arabic sign-in notice, **Arabic reviewer** | `scripts/i18n/ar/manual.json`, `public/i18n/ar-ui.json` | «تسجيل الدخول غير متاح مؤقتًا. يُرجى المحاولة لاحقًا.» (AI draft) | Reviewer accepts or replaces | Awaiting review |
| 5 | Share-preview renderer | section 4 below; Phase 8 part A | Do Urdu share links become a requirement? If yes: approve a renderer option | Written decision; any dependency approved explicitly | Decision required; technically deferred |
| 5 | Urdu metadata | Phase 8 part B | Approve the opt-in `?lang=ur` share-link design, or keep English metadata | Written decision; canonical, robots, sitemap and hreflang tests as listed in Phase 8 B | Decision required; technically deferred |

### 4. Share-preview decision (current recommendation)

- Leave the existing cards unchanged. Do not add Playwright or any other renderer yet.
- No existing URL requests an Urdu card: share links are language-neutral English routes and only `lang=fr` is read.
- Satori's Urdu problems must never ship as broken output: Urdu-capable fonts crash its shaper; the one font that renders ignores RTL, scrambles word order, and the per-word workaround breaks tokens with punctuation.
- Headless Chromium rendered correct Urdu (shaping, RTL, punctuation, Latin and digits) with Noto Nastaliq and Noto Naskh in a disposable proof, byte-identical across two renders in one process. **Not verified across machines or Chromium versions.**
- Seven of the eight cards are dynamic (per date or per ayah), so build-time rendering of fixed cards cannot cover them; only `app/opengraph-image.tsx` and the static page cards are fixed.
- Revisit only if Urdu share links become a real requirement.

Future options (none implemented; any new dependency or architecture change needs explicit approval): (a) re-run the same four-line proof on the next Next/satori upgrade, no cost; (b) build-time Chromium for fixed cards only, new devDependency and fonts, no dynamic coverage; (c) request-time Chromium, heavy; (d) a native shaping renderer (sharp/librsvg, resvg with text), not demonstrated; (e) browser-side canvas for the Share button only. Full comparison table: Phase 8 part A.

### 5. Verification record

New in Phase 9 (re-run on HEAD `f6264cd`): `tsc --noEmit` clean; Vitest 60 files / 476 tests pass; scanner output byte-identical (21 strings, 6 files); `build_catalog.py` (3,594 entries) and `build_review.py` regenerate the committed files with no diff, i.e. deterministic; working tree clean afterwards. **Recorded, not re-run:** `next build` compiled in Phase 7 (HEAD `b526d31`; no source change since, only documentation); every browser result in section 1 and the live SEO curl checks (`urdu-seo-rtl` re-ran as part of Vitest). No ESLint configuration exists and none was added.

**Still unverified:** authenticated `/profile` content; `/share/quran/…` (needs `api.alquran.cloud`, unreachable from the sandbox); `/auth` under `next dev` in this phase; profile-photo, Wave QR and Play-install QR `alt` text in a browser; Chromium output across machines and versions; native shaping alternatives and newer satori versions; Ikhtiyārāt Detailed labels in a browser since Phase 5.

---

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

### Phase 7 (final audit, no code change)

Baseline = HEAD `b526d31`, clean tree: `tsc` clean, Vitest 60 files / 476 tests pass, `next build` compiled. Nothing needed fixing, so Phase 7 changed documentation only.

The 21 scanner findings (`known_english.json`), classified:

| Category | Count | Items |
|---|---|---|
| Safe to localize now | 0 | none |
| Technical limitation (needs a separate decision) | 9 | 8 social-preview strings (`app/og/ikhtiyarat` ×6, `app/og/quran` ×1, `app/opengraph-image.tsx` ×1): satori cannot keep Urdu RTL word order and the Urdu-capable fonts tried crash its shaper (Phase 6B findings, not re-tried: the only fix is a different renderer, which is a new dependency/architecture decision). 1 metadata title «Ikhtiyārāt Result» (`ikhtiyarat/r/[date]` generateMetadata only knows en/fr; adding Urdu would touch metadata routing and SEO, and `/ur` is noindex). |
| Religious/scholarly, held for qualified review | 12 | `SpiritualPracticeTab` (10) and `DhikrCounter` (2): angel and jinn labels and descriptions. |
| Intentionally retained English | 0 on this list | brand names, Latin names and transliterations are already excluded by `LEGIT_ENGLISH`. |

Also held (not on the scanner list): Divine Name glosses, Fātiḥa renderings, "Recite the Angel/Jinn name" lines, «201 Prophetic Names» wording, medical-timing statements and unhedged tradition claims. The Urdu review marker stays «[علما کے جائزے کا منتظر]» (awaiting review, not approved); no document says any entry is scholar-approved.

Catalog audit: 3,594 entries, no duplicate key, no `SCHOLAR-REVIEW`/`business.ts` in any Urdu value; `build_catalog.py`, `build_review.py` and the scanner output are byte-identical on a second run. All 896 AI-drafted result texts appear in section 5 of `ur-review.md` (checked entry by entry against `catalog_ai_draft.py`); the 60 entries flagged in `phase4_review.json` all appear in section 7.2; the 2,200 AI-drafted UI strings are counted in section 6.

Browser check (built app, Chromium, 360/390/412 px, en/fr/ar/ur, `/`, `/auth`, `/profile`, `/names`, `/names/muhammad|fatima|khadija` = 84 page loads): ur pages `lang=ur dir=rtl`, en `en/ltr`, fr `fr/ltr`, ar `ar/rtl`; no horizontal overflow; no raw `SCHOLAR-REVIEW`, `business.ts`, `Build Time`, `NEXT_PUBLIC`, `Supabase`, `URL:`/`Key:` text on any page. `/auth` in production shows only the plain «sign-in temporarily unavailable» message (also after a submit), and no built chunk contains the diagnostics strings. "Show N more traits": 21 → 27 headings and the button disappears in en, fr and ur at all three widths. The Play-badge `alt` is Urdu only in Urdu mode. Mobile-menu About expanded in Urdu and English at all three widths. Not re-run in Phase 7: `/auth` under `next dev` (checked in Phase 6B; `next dev` shares `.next` with the build and corrupted it once), the Ikhtiyārāt Detailed-labels browser check (Phase 5; covered by tests), `/profile` behind sign-in (only the unauthenticated page), the other image `alt`s and `/share/quran/…` (needs `api.alquran.cloud`).

Urdu clock, rendered with a fixed browser clock (home page, Europe/London): 12:00 «دوپہر», 15:45 «دوپہر», 17:10 «سہ پہر», 19:30 «شام», 00:05 «12:05 رات»; English shows PM and Arabic «م» for the same instant. No defect, so no change. For the native reviewer: «دوپہر» for mid-afternoon vs «سہ پہر» from about 17:00, «رات» for both 20:06 and 00:05 (some readers prefer «آدھی رات» at midnight), and «12:00 دوپہر» for noon.

Glossary questions still open for the reviewer are unchanged (Phase 2 open question 11, «ربط» vs «اتصال», and the new terms listed above); `/ur` and `/ur/ikhtiyarat` are `noindex, follow`, the sitemap has 0 `/ur` URLs (62 total) and hreflang is en, fr, ar and x-default only.

### Phase 8: decisions and renderer feasibility (research only; no code, dependency or production asset changed)

Baseline: HEAD `94d8733`, clean tree, the 21 scanner findings unchanged, Urdu tests 19 files / 159 tests pass.

#### A. Social-preview images: renderer options

Facts about the current setup: deployment is Vercel (`vercel.json`); the cards are drawn by `next/og` (satori + the bundled resvg-wasm 2.4.0) in `app/og/**` (Node runtime, `force-dynamic`, fonts read from `src/lib/og/fonts`, `outputFileTracingIncludes` in `next.config.js`) and `app/opengraph-image.tsx` (edge). Only **1 of the 8 strings** is on a fixed card (`app/opengraph-image.tsx`); the other 7 sit on cards drawn per request from a date/score (`/og/ikhtiyarat/<date>`) or per ayah (`/og/quran/<surah>/<ayah>`). Nothing in the project currently requests an Urdu card: share URLs are language-neutral English routes and only `lang=fr` is read, so a perfect Urdu renderer would still produce an image nobody is shown until a share-URL decision is made (section B).

Disposable proofs of concept (run from the scratchpad with already-available tools; nothing under the repository was touched, no package installed). Test text: «اختیارات کا نتیجہ», «نام Muhammad کی ابجد قیمت 92 ہے», «بہترین تاریخیں: 82/100 — شادی کے لیے موافق», «(غیب کا علم صرف اللہ کو ہے) — غور و فکر کے لیے، پیش گوئی کے لیے نہیں۔».

| Option | Correct shaping and RTL order demonstrated? | Build/runtime fit (Vercel, Next 14.2.35) | Dependency and maintenance | Deterministic | Risk to en/fr/ar cards | Tests needed before adoption |
|---|---|---|---|---|---|---|
| 1. Current satori, Urdu font only | **No.** Noto Nastaliq Urdu, Noto Naskh Arabic, Noto Sans Arabic, Amiri and Noto Kufi Arabic throw in satori's GSUB engine («lookupType: 7/5 … not yet supported»). Vazirmatn renders connected letters, but `direction: rtl` is ignored and words are laid out left to right in logical order, so lines read scrambled. | Fits (no change) | none | yes | none | n/a: rejected |
| 1b. Satori + Vazirmatn + words as `row-reverse` flex items | **Partly, not reliably.** Plain words and a Latin name or a number came out in the right order (lines 1-2 of the PoC), but a token with punctuation fails: «(غیب» rendered with its letters reversed, parentheses and wrapped tails were misplaced, spacing was uneven, and the font is Persian-style, not Urdu/Nastaliq. | Fits | none, but a hand-written bidi layer to maintain | yes | none | Not adoptable: any sentence with punctuation or mixed scripts would need its own proof; this is the "broken glyphs" outcome we must not ship |
| 2. Headless Chromium, pre-rendered at build time | **Yes.** Noto Nastaliq Urdu and Noto Naskh Arabic both gave connected glyphs, correct right-to-left word order, correct parenthesis and colon placement, and Latin name / digits / `82/100` in place (HarfBuzz via Chromium). Nastaliq needs generous line height (`line-height` ≈ 1.9-2). Two renders in one process were byte-identical (not tested across machines or Chromium versions). | Fits only **static** cards. Chromium does not run in the existing serverless functions; it would be a build step (script + committed or CI-built PNGs). | New devDependency (Playwright is not in `package.json`; it exists only as a sandbox tool), two OFL font files in the repo, a build step to maintain, a pinned Chromium version | yes on one machine; pin Chromium and fonts to keep it so | none (separate files and URLs) | Pixel comparison of the generated cards, a check that every Urdu string is covered, and a rule that en/fr/ar cards are never regenerated by this script |
| 3. Chromium at request time (e.g. a serverless Chromium build) | Same shaping as option 2 | Poor: large binary, cold starts and memory on every share request; the current routes are light | Heavy dependency and cost | yes | Medium: a failure would break the cards for all languages unless isolated | Load and cold-start testing, fallbacks |
| 4. A native shaping renderer (sharp/librsvg with Pango, or resvg with text) | **Not demonstrated.** Neither is installed, and `next/og` does not expose the bundled resvg-wasm (text and font support in that wasm build is unproven). | Plausible on Vercel for dynamic cards | New native dependency, a second render path next to `next/og` | probably | Medium (new pipeline) | Full PoC first |
| 5. Wait for a newer satori (via a Next upgrade) | Unknown; recheck with the same four test lines whenever Next is upgraded | Best fit if it works (no architecture change) | none | yes | low | Re-run the PoC; the same 4 lines are the acceptance test |
| 6. Draw the share image in the browser (canvas) for the "Share" button only | Browser shaping is correct | Client feature, not a crawler preview | none, but new UI | n/a | none | Out of scope of the previews |

**Recommendation:** keep the cards unchanged now. Option 1 and 1b cannot ship. The only demonstrated route is option 2, and it can only cover fixed cards, i.e. 1 of the 8 strings plus the static `/og/page/<key>` cards, never the date/ayah cards; and it has no user value until Urdu share URLs exist (B). Next step if you want Urdu cards: (a) decide the share-URL question, (b) re-run the PoC on the next Next/satori upgrade (free), (c) only if (a) is yes and (b) fails, approve option 2 for static cards, which adds a devDependency (Playwright), two OFL fonts and a build step. **Approval needed before any of that.** Dynamic cards would need option 4 (separate approval and PoC) or stay English.

#### B. Metadata decision record (not implemented)

Current behaviour, unchanged: English pages build metadata with `englishPageMetadata` (`src/lib/names/seo.ts`: self-canonical, no hreflang, English card) or `localeAlternates` / `pageLang.ts` / `arMetadata.ts` for the localized mirrors; the shared-result page `/ikhtiyarat/r/[date]` reads only `?lang=fr` (anything else is English), builds its canonical from the path without the language parameter, and sets no robots rule. All `/ur/**` pages are `noindex, follow` (`app/(ur)/ur/layout.tsx`, plus the X-Robots-Tag header), are not in the sitemap (0 of 62 URLs) and are not in any hreflang set (en, fr, ar, x-default only). None of that was touched.

Lowest-risk way to add Urdu metadata later:
1. Do not touch `/ur/**` robots, sitemap, canonical or hreflang.
2. Add Urdu only to **share-result links**, as an opt-in `?lang=ur` parameter next to the existing `?lang=fr`: Urdu title/description strings in a small table (like `urPages.ts`), canonical unchanged (the path without the parameter), **`robots: noindex` on the `lang=ur` variant**, no hreflang, and an English card until a renderer is approved (the parameter must not request an Urdu image that does not exist). The Urdu share action would append the parameter.
3. Any English metadata (titles, descriptions, JSON-LD) stays English; Urdu text never replaces it on an indexable URL.
4. Acceptance tests: with `lang=ur` the canonical equals the English one, robots is noindex, no alternates are emitted, `lang=fr`/default output is byte-identical, and the sitemap is unchanged.
The remaining scanner finding «Ikhtiyārāt Result» is exactly this case and stays English until the decision.

#### C. Human-review register (nothing here is approved; automated tests and browser checks are not approval)

| # | Category | Item | Where recorded | Status |
|---|---|---|---|---|
| 1 | Religious content, qualified reviewer | Angel and jinn labels and descriptions (`SpiritualPracticeTab` 10, `DhikrCounter` 2, burujData angel/jinn 24) | section 3 above | untranslated, held |
| 1 | | Divine Name glosses (burujData `divine_names`, 9) | section 3 | untranslated, held |
| 1 | | Fātiḥa renderings (burujData `quranic_verse`, 9) | section 3 | untranslated, held |
| 1 | | "Recite the Angel/Jinn name" instructions (17) | section 3 | untranslated, held |
| 1 | | «201 Prophetic Names» / «Asmāʾ an-Nabī ﷺ» wording | Phase 6/6B | kept in English; no Urdu term invented |
| 1 | | Thursday/Friday statements and religious claims such as "Friday is the most sacred day" | open points; 7.2 | translated as the source states; to be checked against sources |
| 1 | | The flag «[علما کے جائزے کا منتظر]» on `[SCHOLAR-REVIEW]` rule sentences | Phase 6B | means awaiting review, **not approved**; en/fr still show the raw flag |
| 2 | Medical and traditional claims, editorial decision | Medical-timing sentences ("treatment begun now tends to come to nothing", "classically favorable for treatments…"); no medical-advice sentence exists in any language and none was added; whether to add «طبی علاج کے فیصلے ڈاکٹر کے مشورے سے کریں» to EN/FR/AR/UR together is Mario's decision | open points | open |
| 2 | | Unhedged tradition claims (protective ring, cowries, dreams, "heaviness of the zodiac" for Leo, "your most spiritually aligned day", "Give secretly… purifies the heart") and strong marriage warnings in archetype texts | open points; 7.2 | translated as the source states; open |
| 3 | Glossary, Urdu subject-matter reviewer | «ربط» vs «اتصال» (Phase 2 open question 11) | open points | open |
| 3 | | Aspect names قران / تسدیس / تربیع / تثلیث / مقابلہ; ثابت / منقلب / ذوجسدین; «دلالت کنندہ» (significator); «زاویائی فرق» (orb); «زاویائی فاصلہ» (elongation); «غیر موافق» | open points | provisional |
| 3 | | «نشان» for الهنعة; the other lunar-mansion names verified against the Arabic | open points | one open |
| 3 | | 60 entries flagged in `phase4_review.json` (all listed in 7.2 with question and suggested alternative); 40 corrections already applied in 7.1 | 7.1, 7.2 | open |
| 3 | | All 896 AI-drafted result texts (section 5) and 2,200 AI-drafted UI strings (section 6) | sections 5, 6 | AI-drafted, **not native-reviewed** |
| 4 | Native-speaker wording | Time-of-day words from ICU: «دوپہر» for mid-afternoon vs «سہ پہر» from about 17:00; «رات» for both 20:06 and 00:05 (some prefer «آدھی رات»); «12:00 دوپہر» for noon | Phase 6B, 7 | open |
| 4 | | «Asrār» shown as «اسرار» by the catalog and as «Asrār» in templates (brand spelling) | Phase 6 | open |
| 5 | Arabic sign-in notice | «تسجيل الدخول غير متاح مؤقتًا. يُرجى المحاولة لاحقًا.» (`scripts/i18n/ar/manual.json`, `public/i18n/ar-ui.json`), an AI draft | Phase 6B | needs the Arabic reviewer |

#### D. Verification this phase

No source, catalog or asset changed, so the Phase 7 results stand for HEAD `94d8733` (full browser matrix, build). Re-run now: Urdu tests, full Vitest and `tsc` (see the report). Not browser-verified, as before: authenticated `/profile`, `/share/quran/…` (needs `api.alquran.cloud`), `/auth` under `next dev` in this phase, and the profile-photo, Wave QR and Play-install QR `alt` texts (covered by tests only).
