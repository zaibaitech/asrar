English that is still shown to Urdu users, after the Phase 5 audit of the Urdu audit (Oct 2026). **Urdu is not fully localized**: the tools and result tabs are translated, the sign-in, profile and name-guide labels and the Quran share actions are translated (Phase 6), but the long server-rendered prose of the name pages, the social-preview images, page metadata and image `alt` text are not, and the religious items below are deliberately held. Numbers are UNIQUE English strings. /ur/abjad is indexable since PR #101 (21 Oct 2026); the other six /ur pages stay noindex, out of the sitemap and out of hreflang until the items below are resolved and Mario approves them.

## Handover (Phase 9) — read this first; the sections below are the dated log

**Status: technically validated, partially localized; editorial review and future share-preview decisions outstanding.** Urdu is **not** fully localized (21 scanner findings below, plus data-file text and every item in the reviewer checklist). Since then the native Language Reviewer reviewed the Urdu (review sheets 1–4, Oct 2026; status per string in `review_status.json`); this work was merged to main in PR #101 (`992d6c6`, 21 Oct 2026). Nothing is scholar-approved or medically reviewed.

### 1. Implemented and validated

Evidence kinds: **Impl** = code or catalog change; **Tests** = automated Vitest coverage; **Browser** = Chromium on a built app (with the phase it was last run; "recorded" means not re-run in Phase 9). The Phase 9 run re-ran only tsc, Vitest, the scanner and the catalog/review generators (section 5).

| Area | Impl | Tests | Browser (recorded) |
|---|---|---|---|
| UI localization, `lang="ur"` / `dir="rtl"` | `LanguageContext` sets lang/dir from the UI language; shared dictionary `src/lib/i18n/ur.ts`; DOM catalog `public/i18n/ur-ui.json` (3,978 entries at `992d6c6`) | `urdu-dictionary`, `urdu-catalog-integrity`, `urdu-phase1-ui`, `urdu-ui-coverage`, `urdu` | Phase 7: 84 page loads (`/`, `/auth`, `/profile`, `/names`, `/names/muhammad|fatima|khadija` × en/fr/ar/ur × 360/390/412 px): ur `ur/rtl`, en `en/ltr`, fr `fr/ltr`, ar `ar/rtl`, no horizontal overflow, no raw internal text |
| Result catalog and terminology | AI-drafted result texts, Phase 4 corrections, glossary | `urdu-result-content` (engine sweep over 6 election types), `urdu-result-coverage`, `urdu-glossary`, `urdu-phase4-review` | Phases 3-4: rendered Burj result counts (not re-run) |
| Ikhtiyārāt labels and "Show N more traits" | `pickLabel` (labels); `IstikharaResults.tsx` expands (was an empty handler); Urdu flag «[علما کے جائزے کا منتظر]»; "(business.ts)" removed from en/fr/ar/ur text | `urdu-ikhtiyarat-labels`, `urdu-phase6-source-content`, `urdu-result-content` | Labels: Phase 5 (marriage, medical at 360/390/412, en/fr unchanged). Show more: Phase 7 (21 → 27 headings, button hidden, en/fr/ur × 3 widths) |
| `/auth` diagnostics hardening | `SupabaseConfigNotice` + `authErrorMessage`: production shows only «Sign-in is temporarily unavailable…» | `SupabaseConfigNotice.test` (production vs development, real rendering) | Production: Phase 7 (message after a submit, no diagnostics strings in built chunks). Development (`next dev`): Phase 6B only, **not re-run** |
| Image `alt` text | `src/lib/i18n/imageAlt.ts`, component level; `ArabicDomTranslator` not widened | `urdu-phase6b-alt` | Only the Play badge on `/`: Urdu in ur, unchanged in en/fr/ar (Phase 7). Profile photo, Wave QR, Play-install QR: **tests only** |
| Urdu 12-hour time | ICU day-period words, Urdu branch of the Intl patch only (`withUrduDayPeriod`) | `urdu-phase6b-time` (every hour, 24-hour untouched, en/fr/ar untouched, time zones) | Phase 7, fixed browser clock: 12:00 «دوپہر», 15:45 «دوپہر», 17:10 «سہ پہر», 19:30 «شام», 00:05 «12:05 رات»; en PM, ar «م» |
| Names guide `/names`, `/names/[slug]` | `src/lib/names/urdu.ts` whole-sentence templates via `ByUiLanguage` (Urdu mode only); English markup and JSON-LD unchanged | `urdu-phase6b-names` (all 12 names, numbers, example, framing) | Phase 6B/7: muhammad, fatima, khadija × 3 widths |
| Home SEO shell, sign-in/profile/share labels | catalog rows (`phase6-ui`, `phase6b-ui`) | `urdu-phase6-account`, `urdu-phase6-names-share`, `urdu-phase6b-names` | Home and `/auth` in the matrix above; `/profile` unauthenticated only |
| SEO safeguards | PR #101: `/ur/abjad` indexable (`INDEXABLE_UR_PATHS`), in the 63-URL sitemap and in the abjad hreflang set (en, fr, ar, ur, x-default); every other /ur page `noindex, follow` (metadata, `app/(ur)/ur/layout.tsx`, middleware `X-Robots-Tag`) | `urdu-seo-rtl`, `urdu-english-ratchet`, `urdu-indexing-readiness` | Verified live 21 Oct 2026 after the `992d6c6` deploy |

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
| 1 | `[SCHOLAR-REVIEW]` rule sentences, **qualified religious reviewer** | `src/lib/ikhtiyarat/elections/*.ts`; Phase 6B notes | Review the classical rules the flag marks | Each flagged rule reviewed | The visible `[SCHOLAR-REVIEW]` tag was removed from en/fr/ur text; it is now a data flag (`src/lib/ikhtiyarat/types.ts:32–34`). Remaining: scholarly review of the flagged rules |
| 1 | Medical and traditional claims, **editorial owner (Mario) plus a qualified reviewer** | Section 4 below; "Open points"; Phase 8 register rows 2 | Medical-timing sentences; add a "decisions about medical treatment: ask a doctor" sentence to EN/FR/AR/UR together or not at all; unhedged tradition claims (ring, cowries, dreams, Leo, "most spiritually aligned day", "Give secretly…") and marriage warnings | A written decision per item (keep, hedge, remove); any new sentence exists in all four languages | Decision required |
| 2 | Glossary, **Urdu subject-matter reviewer** | "Open points"; Phase 8 register rows 3 | «ربط» vs «اتصال»; aspect names; ثابت/منقلب/ذوجسدین; «دلالت کنندہ»; «زاویائی فرق/فاصلہ»; «غیر موافق»; «نشان» for الهنعة | One term per concept, recorded in the glossary, then `urdu-glossary` updated | Awaiting review |
| 2 | 60 flagged entries, **Urdu subject-matter reviewer** | `docs/i18n/ur-review.md` section 7.2 (source list `phase4_review.json`) | Answer the question in each row; accept or replace the provisional Urdu | Every row marked accepted or replaced, with the catalog rebuilt | Superseded: every `catalog_ai_draft.py` entry, including the 60 Phase-4 flags, was native-reviewed in review sheet 3 (passes 6–8) |
| 2 | 896 AI-drafted result texts and 2,200 AI-drafted UI strings, **native Urdu reviewer** | `ur-review.md` sections 5 and 6 (40 corrections applied in 7.1) | Linguistic read of each group | Reviewer signs off per group | Done: sheet 2 (2,336 rows), sheet 3 (838 rows), sheet 4 + Pass 9b (list-2 and follow-ups); 0 drafts at `992d6c6` |
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
- `[SCHOLAR-REVIEW]` (about 14 English and 6 French rule sentences, `src/lib/ikhtiyarat/elections/*.ts`) is a deliberate flag (`useSimpleMode.ts`, `marriage.scholar-review.test.ts`). **Phase 6B:** in Urdu it reads «[علما کے جائزے کا منتظر]» ("awaiting scholarly review": it says the rule is waiting for review, never that it was approved). English and French keep the raw flag. Decision still open for the owner: show a localized badge in all four languages, or keep the flag as is. (Superseded: the visible tag and its Urdu marker were removed; `urdu-phase6-source-content.test.ts` asserts that no Urdu value contains it.)
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

Catalog audit: 3,594 entries, no duplicate key, no `SCHOLAR-REVIEW`/`business.ts` in any Urdu value; `build_catalog.py`, `build_review.py` and the scanner output are byte-identical on a second run. All 896 AI-drafted result texts appear in section 5 of `ur-review.md` (checked entry by entry against `catalog_ai_draft.py`); the 60 entries flagged in `phase4_review.json` all appear in section 7.2; the 2,200 AI-drafted UI strings are counted in section 6. (At `992d6c6`: 3,978 entries; 894 result-text entries.)

Browser check (built app, Chromium, 360/390/412 px, en/fr/ar/ur, `/`, `/auth`, `/profile`, `/names`, `/names/muhammad|fatima|khadija` = 84 page loads): ur pages `lang=ur dir=rtl`, en `en/ltr`, fr `fr/ltr`, ar `ar/rtl`; no horizontal overflow; no raw `SCHOLAR-REVIEW`, `business.ts`, `Build Time`, `NEXT_PUBLIC`, `Supabase`, `URL:`/`Key:` text on any page. `/auth` in production shows only the plain «sign-in temporarily unavailable» message (also after a submit), and no built chunk contains the diagnostics strings. "Show N more traits": 21 → 27 headings and the button disappears in en, fr and ur at all three widths. The Play-badge `alt` is Urdu only in Urdu mode. Mobile-menu About expanded in Urdu and English at all three widths. Not re-run in Phase 7: `/auth` under `next dev` (checked in Phase 6B; `next dev` shares `.next` with the build and corrupted it once), the Ikhtiyārāt Detailed-labels browser check (Phase 5; covered by tests), `/profile` behind sign-in (only the unauthenticated page), the other image `alt`s and `/share/quran/…` (needs `api.alquran.cloud`).

Urdu clock, rendered with a fixed browser clock (home page, Europe/London): 12:00 «دوپہر», 15:45 «دوپہر», 17:10 «سہ پہر», 19:30 «شام», 00:05 «12:05 رات»; English shows PM and Arabic «م» for the same instant. No defect, so no change. For the native reviewer: «دوپہر» for mid-afternoon vs «سہ پہر» from about 17:00, «رات» for both 20:06 and 00:05 (some readers prefer «آدھی رات» at midnight), and «12:00 دوپہر» for noon.

Glossary questions still open for the reviewer are unchanged (Phase 2 open question 11, «ربط» vs «اتصال», and the new terms listed above); `/ur` and `/ur/ikhtiyarat` are `noindex, follow`, the sitemap has 0 `/ur` URLs (62 total) and hreflang is en, fr, ar and x-default only. (Phase 7 state; since PR #101 `/ur/abjad` is indexed.)

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
| 1 | | The flag «[علما کے جائزے کا منتظر]» on `[SCHOLAR-REVIEW]` rule sentences | Phase 6B | Visible flag removed in all languages (data flag only); scholarly review of the rules still open |
| 2 | Medical and traditional claims, editorial decision | Medical-timing sentences ("treatment begun now tends to come to nothing", "classically favorable for treatments…"); no medical-advice sentence exists in any language and none was added; whether to add «طبی علاج کے فیصلے ڈاکٹر کے مشورے سے کریں» to EN/FR/AR/UR together is Mario's decision | open points | open |
| 2 | | Unhedged tradition claims (protective ring, cowries, dreams, "heaviness of the zodiac" for Leo, "your most spiritually aligned day", "Give secretly… purifies the heart") and strong marriage warnings in archetype texts | open points; 7.2 | translated as the source states; open |
| 3 | Glossary, Urdu subject-matter reviewer | «ربط» vs «اتصال» (Phase 2 open question 11) | open points | open |
| 3 | | Aspect names قران / تسدیس / تربیع / تثلیث / مقابلہ; ثابت / منقلب / ذوجسدین; «دلالت کنندہ» (significator); «زاویائی فرق» (orb); «زاویائی فاصلہ» (elongation); «غیر موافق» | open points | provisional |
| 3 | | «نشان» for الهنعة; the other lunar-mansion names verified against the Arabic | open points | one open |
| 3 | | 60 entries flagged in `phase4_review.json` (all listed in 7.2 with question and suggested alternative); 40 corrections already applied in 7.1 | 7.1, 7.2 | open |
| 3 | | All 896 AI-drafted result texts (section 5) and 2,200 AI-drafted UI strings (section 6) | sections 5, 6 | Native-reviewed in review sheets 2–4 (Oct 2026) |
| 4 | Native-speaker wording | Time-of-day words from ICU: «دوپہر» for mid-afternoon vs «سہ پہر» from about 17:00; «رات» for both 20:06 and 00:05 (some prefer «آدھی رات»); «12:00 دوپہر» for noon | Phase 6B, 7 | open |
| 4 | | «Asrār» shown as «اسرار» by the catalog and as «Asrār» in templates (brand spelling) | Phase 6 | open |
| 5 | Arabic sign-in notice | «تسجيل الدخول غير متاح مؤقتًا. يُرجى المحاولة لاحقًا.» (`scripts/i18n/ar/manual.json`, `public/i18n/ar-ui.json`), an AI draft | Phase 6B | needs the Arabic reviewer |

#### D. Verification this phase

No source, catalog or asset changed, so the Phase 7 results stand for HEAD `94d8733` (full browser matrix, build). Re-run now: Urdu tests, full Vitest and `tsc` (see the report). Not browser-verified, as before: authenticated `/profile`, `/share/quran/…` (needs `api.alquran.cloud`), `/auth` under `next dev` in this phase, and the profile-photo, Wave QR and Play-install QR `alt` texts (covered by tests only).

### Phase 10: fixes from the external Urdu review (`urdu-localization-initial-findings.md`)

Linguistic and safety wording only; English source, scoring, rules and calculations are unchanged. All Urdu below is still AI-drafted and **not** native-reviewed, scholar-approved or medically reviewed.

| Finding | Done | Before → after (Urdu) |
|---|---|---|
| Carousel | Fixed. In `PlanetTransitCard` the button shows "Carousel" while the all-planets grid is open and returns to the one-planet-at-a-time view, so «ایک سیارہ» ("one planet") was a literal reading of the view, not a label. The report's «سلائیڈز کا سلسلہ» ("a series of slides") is too long and unclear for a toggle button, so the view is named: | «ایک سیارہ» → «سلائیڈ منظر» (next to «سب دیکھیں») |
| Breadcrumb | Fixed (it is the `aria-label` of the breadcrumb `<nav>` on 8 English pages; `/ur` pages already used the longer form) | «راستہ» → «صفحے کا راستہ» |
| Glossary consistency | Audited, no change needed: every English entry with applying/separating/retrograde/combust/domicile/exaltation/detriment/fall/(less) favorable carries its glossary term (0 exceptions). «ربط» stays the plain-language "connection" in Simple-mode sentences, «اتصال» the technical applying aspect in the Detailed mode, «سخت نظر» is no longer used (the Language Reviewer ruled it out: «نظر» reads as the evil eye); «تناؤ والی نسبت» is the term, including in the six spot-check strings | — |
| Tier name | The scoring note spelled the last tier «اجتنب» while the badge, the catalog and `review_log.py` use «اجتناب» | «(…، ضعیف، اجتنب)» → «(…، ضعیف، اجتناب)» |
| Scoring explanation | Smoother wording from the report | «اسکور کیسے بنتا ہے: ہر اصول کچھ پوائنٹس جمع یا منفی کرتا ہے؛ … 0–100 کے اسکور پر لایا جاتا ہے» → «اسکور کیسے شمار ہوتا ہے: ہر اصول کے مطابق کچھ پوائنٹس جمع یا منہا کیے جاتے ہیں۔ پھر … 0–100 کے پیمانے پر تبدیل کیا جاتا ہے» |
| Archetypes (3) | Wording from the report (meaning unchanged) | e.g. «…آسان آغاز دکھاتا ہے جو بعد میں جمود محسوس ہو سکتا ہے» → «…آسان آغاز کی طرف اشارہ کرتا ہے، جو بعد میں جمود کا شکار ہو سکتا ہے» |
| Weekday paragraphs | Sunday: «بااختیار یا بزرگ افراد سے دعائیں لیں» → «بااختیار افراد کی تائید اور سرپرستی حاصل کرنے کی کوشش کریں» (the English "seek blessings from those in authority" is ambiguous; this reading follows the report's conditional and drops the added «بزرگ»; **editor to confirm the intended meaning**). Monday: «جذباتی بحالی» → «جذباتی سکون اور بہتری». Saturday: «دیرپا تعمیرات کھڑی کرنے میں مشغول ہوں» → «دیرپا اور مضبوط ڈھانچے تعمیر کرنے پر توجہ دیں». Tuesday: surgery is taken out of the planetary association and the paragraph now says «سرجری کا فیصلہ صرف طبی ضرورت اور ڈاکٹر کے مشورے پر ہونا چاہیے، دن یا سیارے کی نسبت پر نہیں» (a safety statement added in Urdu only). Wednesday: no change, the Urdu never says Mercury "rewards" anything and the paragraph already opens with the traditional attribution. **Thursday and Friday unchanged: religious statements for a qualified religious reviewer.** | see left |
| Career claim (Water element) | The long claim and its heading no longer present a spiritual gift or a success guarantee as fact; label «special blessing» likewise | «…آپ کو زمینی صنعتوں سے خاص برکت حاصل ہے۔ یہ منفرد روحانی عطیہ…» → «روایتی تعبیر کے مطابق، آبی مزاج رکھنے والوں کے لیے زمینی صنعتوں کو بھی قابلِ غور سمجھا جاتا ہے۔ اسے کامیابی کی ضمانت یا پیشہ منتخب کرنے کا واحد معیار نہ سمجھیں۔»; heading «خاص روحانی برکت» → «روایتی تعبیر: زمینی صنعتوں سے خاص نسبت»; «خاص برکت» → «خاص روایتی نسبت» |
| Bare outcome claims | Prefixed with the attribution «روایتی تعبیر»: «Always beneficial, opens spiritual doors», «Receives consistent divine assistance… help always arrives», «Allah grants them opportunities to learn patience…», «Solar energy combined with air brings illuminating innovation» | rows `planet-transit`, `burj-personality` and `burj-blessed-day` in `catalog_ai_draft_ui.py` |
| Sadaqah / zodiac-sadaqah audit | Every claim already framed with «سمجھا جاتا ہے / روایت میں» was kept (31 `burj-sadaqah`, 2 `zodiac-sadaqah` rows hit by the verb search; 21 and 2 already attributed). The 10 unattributed `burj-sadaqah` rows are statements of intention («…برکتیں پانے کے لیے» = "for the sake of…") and were left as they are. The safeguard that outcomes are hopes placed with Allah, not guarantees, is untouched | — |

**Medical wording.** (1) Shared notice: new `MedicalElectionNotice` shows in Urdu mode only, on every medical result (`CheckDateView`, `DetailSheet`, `ScanDatesView`): «طبی علاج کے وقت، انتخاب یا فیصلے کا تعین علمِ نجوم کی بنیاد پر نہ کریں۔ تشخیص اور علاج کے لیے مستند طبی ماہر سے رجوع کریں، اور ضروری طبی امداد میں تاخیر نہ کریں۔ یہ نتیجہ روایتی علمِ نجوم کی تعبیر ہے، کوئی طبی پیش گوئی نہیں۔» (the last sentence is an addition to the requested text). (2) Medical rule sentences (Simple and Detailed mode) now all carry an explicit traditional attribution, and the two that read as an outcome add «یہ طبی دعویٰ نہیں۔»: «…علاج اکثر بے نتیجہ رہتا ہے» → «روایتی تعبیر میں اس حالت میں شروع کیے گئے علاج کے بے نتیجہ رہنے کا رجحان سمجھا جاتا ہے۔ یہ طبی دعویٰ نہیں۔»; the sibling sentences about a journey, deal, work and study use the same attributed form without the medical line. No rule, score or recommendation changed.

**Decisions this leaves open.** The notice and the stronger Urdu attribution exist only in Urdu; the English, French and Arabic sentences still say "treatment begun now tends to come to nothing" without the notice. Adding an equivalent notice to EN/FR/AR (needs reviewed French and Arabic wording) or changing the English source is the owner's decision (Phase 8 register, row 2), as is whether Urdu should keep wording that differs in strength from the English source.

**Review register updates.** The Phase 4 record (`phase4_review.json`, 60 flagged entries, 40 corrections) was kept traceable: the 13 distinct affected entries (4 corrections, 10 flags, the first draft of this line said 10) now show the revised Urdu and a "Phase 10" note in their reason; they remain flagged for review. Needs a native Urdu editor: «سلائیڈ منظر», the Sunday sentence, «رجحان سمجھا جاتا ہے» for «tends to», «روایتی تعبیر» used as the standard attribution, and «خاص روایتی نسبت». Needs a medical expert: the medical notice and the medical-timing sentences. Needs a qualified religious reviewer: Thursday/Friday paragraphs, the divine-assistance sentences («Allah grants them…», «divine assistance… always arrives»), and the sadaqah outcome statements.

**Verification (Phase 10, new).** `tsc` clean; Vitest 61 files / 489 tests pass (new: `urdu-phase10-review-fixes`, 13 tests, including a real render of the notice for ur/en/fr/ar and medical/marriage/travel); catalog (3,594 entries), review document and scanner (21 strings) regenerate identically.

### Phase 11: resolution of the Phase 10 audit findings

Source of truth for the findings: the independent audit of `904493a`, `ef5d267`, `540b273`. Nothing here is native-reviewed, medically reviewed or religiously approved.

#### Resolved in Phase 11 (source-of-truth files `catalog_ai_draft_ui.py`, then regenerated)

| Audit finding | Resolution |
|---|---|
| 6. «بڑھا ہوا امکان» for "increased risk" | **Fixed.** Every other "risk" row uses «خطرہ/خطرے»; the Phase 10 row alone had been softened without a source reason. Now «روایتی تعبیر کے مطابق تشخیص کے مؤخر، نامکمل یا نظرِ ثانی شدہ ہونے کا بڑھا ہوا خطرہ۔» (attribution kept). Test: every catalog row whose English contains "risk" has «خطر». |
| 1. Tier names "mismatch" | **Not a defect; the Phase 10 audit diagnosis was wrong.** `TierBadge.tsx` prints `labelEn` and, beside it, `labelAr`; the Urdu catalog translates both (`catalog_source.py` lines 125-129 for `labelAr`, line 314 for `labelEn`). Browser check on the built app (`/ikhtiyarat`, Urdu): the badges read «قابلِ قبول مقبول 58/100», «اجتناب اجتناب 0/100». The scoring note's five names (ممتاز، جیّد، مقبول، ضعیف، اجتناب) are the classical band names, i.e. exactly the second word of each badge; the English note lists the same classical names in transliteration. Phase 10's «اجتنب» → «اجتناب» was a genuine spelling fix. No change to labels. Open for the Urdu editor: each badge shows two Urdu words (and the Avoid tier shows «اجتناب» twice); whether to show both is a design/language decision. Test added: the note lists the catalog values of `labelAr` of all five tiers. |
| 8. "10 affected entries" in this file | Corrected to 13 distinct entries. |
| Asrār spelling (earlier review notes) | The /ur pages and the catalog translate the standalone brand as «اسرار» (`urPages.ts` `home`, `Asrār` → `اسرار`); three Phase 6 rows had kept Latin «Asrār»: home heading, home intro, "Join Asrār today". Changed to «اسرار», as on the /ur home page. The product name «Asrār Everyday» stays Latin (legit English), and the mobile-menu About text already renders «اسرار» through the catalog. **Brand owner / Urdu editor to confirm the spelling**; it is a one-word change in 3 rows. |

#### Phase C: wording items, left for an Urdu editor unless noted

| Item | Current | Source meaning | Proposed alternative | Confidence | Status |
|---|---|---|---|---|---|
| «رجحان سمجھا جاتا ہے» for "tends to come to nothing" (5 Simple-mode rows, 1 Detailed-mode row) | «…شروع کیے گئے علاج کے بے نتیجہ رہنے کا رجحان سمجھا جاتا ہے» | "traditionally … tends to come to nothing": a stated tendency | The Phase 4 alternative «بے نتیجہ رہنے کا امکان رہتا ہے» says "may", weaker than "tends"; «رجحان» is the literal match but stiff. Another option: «اکثر بے نتیجہ رہنے والا سمجھا جاتا ہے» (re-introduces «اکثر», which the external audit asked to soften) | low: both candidates trade accuracy for naturalness | **Unchanged; editor decides** |
| «سلائیڈ منظر» (toggle) | names the view the button returns to | `t.planetTransit.carousel` while the all-planets grid is open | «واحد سیارہ منظر» (one-planet view) or «ایک ایک سیارہ»; sibling button «سب دیکھیں» is an action | medium | Unchanged; editor to confirm |
| Sunday «بااختیار افراد کی تائید اور سرپرستی حاصل کرنے کی کوشش کریں» | support and backing from people in authority | "Seek blessings from those in authority": ambiguous (approval/support vs. prayers) | previous «دعائیں لیں» (prayers) or «اجازت/منظوری لیں» (approval) | low (depends on what the English author meant) | Unchanged; **English author/editor must say which meaning** |
| «خاص روایتی نسبت», repeated «روایتی تعبیر» | label and attributions | "special blessing" label; attribution frame | scan of the catalog: 5 rows carry two attribution markers (4 sadaqah/cowrie rows and the Monday paragraph); all predate Phase 10, and Phase 10 added no doubled marker | medium | No change |
| Time-of-day words (ICU day periods) | «دوپہر» for 12:00 and mid-afternoon, «سہ پہر» from about 17:00, «رات» for 20:06 and 00:05 | n/a | «آدھی رات» at midnight is a native-editor call | low | Unchanged; native review |

#### Phase A: medical-safety coverage and cross-language proposal (NOT implemented; approval needed)

**Every surface where a medical tier, score or timing claim can appear**

| # | Surface | Medical content shown | Safety notice today |
|---|---|---|---|
| 1 | `CheckDateView.tsx:275` (check my date) | tier, score, rule sentences | Urdu mode only |
| 2 | `DetailSheet.tsx:96` (calendar/top-five detail) | tier, score, rule sentences | Urdu mode only |
| 3 | `ScanDatesView.tsx:123` (find best dates: top five, heatmap) | tiers and scores per date | Urdu mode only |
| 4 | `app/(site)/ikhtiyarat/r/[date]/page.tsx` shared link, `?election=medical` | tier, score, date | **none in any language**; server component, language only `en`/`fr` via `?lang=fr` |
| 5 | Page metadata of that page | «… (82/100) for medical treatment, per classical ikhtiyārāt.» / French equivalent | none (link-preview text) |
| 6 | `app/og/ikhtiyarat/[date]/route.tsx` share card | subtitle «Medical treatment», tier, score | only the generic footer «For reflection, not prediction · Only Allah knows the unseen» (en/fr) |
| 7 | Share text from `CheckDateView.tsx:151-161` | «date — tier (score/100)», the URL carries `election=medical` | none |
| 8 | `medicalBadges.ts:31-33` Zodiac Man caution | surgery/bloodletting advice, "always follow qualified medical advice" | present in en/fr/ar notes; **no Urdu note** (Urdu mode prints the English and Arabic notes); the Arabic note also interpolates the English body-part name |
| 9 | Onboarding disclaimer (`copy.ts:41-43`, `92-93`, `133-134`) | marriage-focused, no medical sentence | n/a |
| 10 | Rule sentences (`ruleSimplification.ts`, `elections/medical.ts`) | the claims | see the comparison below |

**Wording comparison** (7 medical-timing sentences; exact text in `ruleSimplification.ts` and `ar-ui.json`)

| | English | French | Arabic | Urdu |
|---|---|---|---|---|
| void-of-course | "traditionally, treatment begun in this state tends to come to nothing" | «traditionnellement … tend à n'aboutir à rien» | «وتقليديًا، العلاج الذي يبدأ في هذه الحال لا يُثمر» (flat: no "tends", i.e. stronger than the source) | «روایتی تعبیر میں … بے نتیجہ رہنے کا رجحان سمجھا جاتا ہے۔ یہ طبی دعویٰ نہیں۔» |
| the other six | "traditionally / a sign of / traditional significator" | same frame | same frame | same frame plus explicit «روایتی» attribution |
| notice with the result | none | none | none | yes (Urdu mode, surfaces 1-3 only) |

Safety-relevant differences: (a) the Arabic void-of-course sentence states the outcome without "tends"; (b) only Urdu has a notice and only on surfaces 1-3; (c) the shared page, share card, metadata and share text carry a medical tier and score with no caveat in any language; (d) the Zodiac Man note, the one existing medical-advice sentence, is missing in Urdu.

**Proposal 1 — one notice, same meaning in all four languages, shown on every medical surface.** Single source `src/features/ikhtiyarat/medicalNotice.ts` (`{en, fr, ar, ur}`), used by `MedicalElectionNotice` for any UI language (drop the Urdu-only condition) and by the shared page. Proposed texts (English and Urdu carry the meaning of the Urdu text shipped in Phase 10; **French and Arabic are AI drafts and need qualified language review**, and the medical wording needs a medical reviewer):
- EN: "Do not use astrology to decide when, whether or how to have medical treatment or surgery. Ask a qualified medical professional about diagnosis and treatment, and do not delay needed care. This result is a traditional astrological reading, not a medical prediction."
- UR (shipped): «طبی علاج کے وقت، انتخاب یا فیصلے کا تعین علمِ نجوم کی بنیاد پر نہ کریں۔ تشخیص اور علاج کے لیے مستند طبی ماہر سے رجوع کریں، اور ضروری طبی امداد میں تاخیر نہ کریں۔ یہ نتیجہ روایتی علمِ نجوم کی تعبیر ہے، کوئی طبی پیش گوئی نہیں۔»
- FR (draft): «N'utilisez pas l'astrologie pour décider du moment, de l'opportunité ou de la manière d'un traitement médical ou d'une opération. Adressez-vous à un professionnel de santé qualifié pour le diagnostic et le traitement, et ne retardez pas les soins nécessaires. Ce résultat est une lecture astrologique traditionnelle, et non une prédiction médicale.»
- AR (draft): «لا تستخدم علم النجوم لتحديد وقت العلاج الطبي أو الجراحة أو إجرائهما من عدمه. راجع طبيبًا أو مختصًا طبيًا مؤهلًا للتشخيص والعلاج، ولا تؤخّر الرعاية الطبية الضرورية. هذه النتيجة قراءة فلكية تقليدية وليست تنبؤًا طبيًا.»

**Proposal 2 — shared page and previews.** In the shared page render the notice under the score when `electionType === 'medical'` (English by default, French with `?lang=fr`; Urdu/Arabic only if the Phase 8 `?lang=` extension is ever approved). Add a short «Not medical advice» line to the medical OG card, and to the metadata description of medical results; change the share text to «date — tier (score/100) — traditional reading, not medical advice» for medical shares. Affected files: `app/(site)/ikhtiyarat/r/[date]/page.tsx`, `app/og/ikhtiyarat/[date]/route.tsx`, `CheckDateView.tsx` (share text), the new `medicalNotice.ts`, `MedicalElectionNotice.tsx`, and tests. Metadata changes touch indexable text on a page that has no robots rule: **explicit SEO decision needed**.

**Proposal 3 — wording of the claims.** Arabic void-of-course sentence: replace the flat «لا يُثمر» by a hedged form such as «يميل إلى ألّا يُثمر» (draft, language reviewer). Zodiac Man note: add an Urdu note (needs an Urdu name table for the body parts, which does not exist) and fix the Arabic note's English body-part name. English and French sentences need no change beyond the notice.

**Proposal 4 — avoid implying astrology decides treatment.** Keep the notice adjacent to the tier badge (above the rule list), never beneath a fold; never present a medical tier as a recommendation: decide whether the five medical tier names («Excellent … Avoid», «بہت عمدہ … اجتناب») should be neutral for the medical election (e.g. «traditionally favourable … traditionally unfavourable»); omit scores from medical share cards, or label them as the traditional reading; no sentence may say or suggest a "safe" or "best" time for surgery. **Decision for the owner** on tier names and on whether medical shares should carry a score at all.

#### Phase D: how the review record distinguishes the claim types

| Category | Items | Where recorded |
|---|---|---|
| **Linguistic corrections implemented** (no change of claim) | Carousel, Breadcrumb, scoring-note wording and «اجتناب» spelling, three archetype sentences, Saturday and Monday wording, «خطرہ» restored, brand spelling «اسرار» (3 rows) | Phase 10 table, this section |
| **Claims given an attribution frame** («روایتی تعبیر / روایتی طور پر», the claim itself unchanged) | the nine medical-timing rule rows (Simple and Detailed mode), «Always beneficial, opens spiritual doors», «Receives consistent divine assistance… help always arrives», «Allah grants them opportunities…», «Solar energy combined with air…», the Water-element career claim (rewritten as a non-guarantee) | Phase 10 table; `phase4_review.json` reasons |
| **Still requiring religious or scholarly verification** | the two divine-assistance rows above (attribution added, but "help always arrives" and "Allah grants them…" are unchanged assertions), Thursday and Friday paragraphs, the `burj-sadaqah` / `zodiac-sadaqah` outcome claims (21 + 2 already attributed, 10 are statements of intention), the roughly 14 English and 6 French `[SCHOLAR-REVIEW]` rule sentences (Urdu flag «[علما کے جائزے کا منتظر]»), angel and jinn, Divine Name glosses, Fātiḥa renderings, «201 Prophetic Names» | sections 3, 4 and the Phase 8 register |
| **Still requiring medical review** | the notice and every medical-timing sentence in all four languages | Phase A above |

The 896 AI-drafted result texts and 2,200 AI-drafted UI strings remain AI-drafted and not native-reviewed; Phase 11 examined only the entries named above. (Phase 11 state; native-reviewed later in sheets 2–4.)

#### Verification (Phase 11, new)
See the final report for exact commands and output: `tsc`, full Vitest, regeneration determinism, production build.

### Phase 13: medical-election safety notice implemented (approved scope of the Phase 12 proposal)

**Status of the wording: every text below except the Urdu long notice is an AI draft. No medical professional and no native-language reviewer has approved any of it.** French and Arabic need qualified language review; all four need a medical review. Correction to the Phase 11 record: the Arabic *Detailed-mode* void-of-course sentence was already hedged («يميل إلى ألا يثمر»); only the Simple-mode sentence was categorical.

**What now exists.**
- One source of truth, `src/features/ikhtiyarat/medicalNotice.ts`: long notice, short caution and occasion label in English, Urdu, French and Arabic, plus the helpers for metadata description, share text and card footer. The Urdu long notice is the Phase 10 text, word for word (its wording was not in the approved scope; it still has no "stop or replace" clause and it keeps its sentence-level suffix «یہ طبی دعویٰ نہیں۔» in the rule sentence).
- In-app: `MedicalElectionNotice` (client) renders for the medical election only, in the interface language (en, ur, fr, ar), with `lang` and `dir` set (rtl for Urdu and Arabic) and `text-start`; used in `CheckDateView`, `DetailSheet`, `ScanDatesView`. The text itself is `MedicalNoticeText` (no hooks) so the server-rendered page can use it.
- Shared-result page `/ikhtiyarat/r/[date]`: for `election=medical` the body shows the occasion label («Medical treatment · traditional reading» / French with `?lang=fr`) and the full notice under the score; Urdu and Arabic readers get them through the DOM catalogs (exact text of each node; new rows `phase13-ui` in `catalog_ai_draft_ui.py` and two entries in `scripts/i18n/ar/ai_drafts.json`). Non-medical results are unchanged.
- Metadata: for medical results the description (and the Open Graph and Twitter copies) gets the short caution appended in English or French. Title, robots, canonical, alternates, sitemap and hreflang are untouched (the page sets none of them).
- Share text (`CheckDateView`) and share-card footer (`app/og/ikhtiyarat/[date]/route.tsx`): medical only; English and French only (the card font is Latin-only).
- Zodiac Man: `LocalizedBodyPart` now has `en, fr, ar, ur` for all 12 signs (`zodiacMan.ts`); the Arabic note uses the Arabic body part (it printed the English one), and a new Urdu note (`medicalBadges.ts`) is shown in Urdu mode through `pickLabel` in `SunnahBadges.tsx`. The Arabic and Urdu body-part names and the Urdu note are drafts; anatomical terms need a medical reviewer.
- Arabic Simple-mode void-of-course sentence (`scripts/i18n/ar/ai_drafts.json`, regenerated into `public/i18n/ar-ui.json`; `docs/i18n/ar-ai-drafts.md` mirrors it).

| Surface | Before | After |
|---|---|---|
| In-app notice, English / French / Arabic interface | none | the long notice in that language |
| In-app notice, Urdu interface | Urdu notice | unchanged text |
| Shared page body (medical) | tier and score only | occasion label + full notice |
| Shared page description (medical, en) | «2026-11-10 — Acceptable (49/100) for medical treatment, per classical ikhtiyārāt.» | same + «Traditional astrological reading — not medical advice.» |
| Share text (medical, en) | «2026-11-10 — Acceptable (49/100)» | «2026-11-10 — Acceptable (49/100). Traditional astrological reading — not medical advice.» |
| Card footer (medical, en) | «For reflection, not prediction · Only Allah knows the unseen» | «Traditional reading, not medical advice · For reflection, not prediction · Only Allah knows the unseen» |
| Arabic Zodiac Man note | «…يحكم تقليديًا head and face…» | «…يحكم تقليديًا الرأس والوجه…» |
| Urdu Zodiac Man note | English note | Urdu note (draft) |
| Arabic Simple-mode void of course | «…العلاج الذي يبدأ في هذه الحال لا يُثمر.» | «…العلاج الذي يبدأ في هذه الحال يميل إلى ألّا يُثمر.» |

**Still open (not implemented, need approval):** renaming the medical tiers («Excellent … Avoid»); hiding scores or tiers on shared pages and cards; disabling medical sharing; any canonical, robots, noindex, sitemap or hreflang change (the shared page is still `index, follow` with no canonical, and not in the sitemap); changing the Urdu notice or dropping its sentence-level suffix; the Sunday sentence and other Urdu wording; religious claims.

**Remaining differences between languages (by design of the approved scope).** The Urdu long notice has no "stop or replace" clause; the Arabic sentences for a journey and for work («…لا يُثمر») are still categorical (non-medical, outside the approved change); the Detailed-mode English and French void-of-course sentence has no "traditionally"; Urdu alone carries a sentence-level suffix in the rule text; short cautions in Urdu and Arabic exist in the module but no surface can show them (shared page and card have no Urdu/Arabic mode).

**Review required.** Medical professional: all four notices, the "stop or replace" and "clinically validated" clauses, the Zodiac Man cautions, the body-part names. Language reviewers: French and Arabic notices, Arabic hedged sentence, Arabic and Urdu body-part names and the Urdu Zodiac note, Urdu short caution and occasion label. Religious reviewer: unchanged from earlier phases.

### Phase 15: remediation, medical consistency review and Google-indexing readiness

Baseline: HEAD `5f73973`, clean tree. Nothing below is native-reviewed, medically reviewed or religiously approved. **No indexing control was changed** (the owner has not approved a route list): every `/ur` page is still `noindex, follow` (page metadata, layout and middleware `X-Robots-Tag`), absent from the sitemap and from every hreflang set. (Phase 15 state; the wave-1 pilot `/ur/abjad` was switched on in PR #101, 21 Oct 2026.)

#### A. Fixed in Phase 15 (commit `4df3a5a`)
| Item | Defect or decision | Change |
|---|---|---|
| Arabic Zodiac Man note | Defect (confirmed in Phase 14): `SunnahBadges.tsx` printed the English/French note and then the Arabic one. Every badge note has a real Arabic text (test over 2 years of Sunnah dates, 7 weekdays × 5 hours of travel results, 12 signs × 7 weekdays of medical results) | In the Arabic interface only the Arabic note is shown (in the normal text colour); English, French and Urdu keep both lines. The badge label (catalog Arabic plus the label's own Arabic, two different phrases) is unchanged: a separate wording question for the Arabic reviewer |
| «اسرار» spelling | Decision settled by the established mapping (/ur pages, catalog) | The Urdu About text in `MobileMenu.tsx` wrote Latin «Asrār» (the catalog turned it into «اسرار» at render); now «اسرار» in the source. «Asrār Everyday» stays Latin. Phase 11 changed three catalog rows |

#### B. Outstanding wording items: not changed, with the reason
| Item | Why no change | Options | Who decides |
|---|---|---|---|
| «رجحان سمجھا جاتا ہے» vs «بے نتیجہ رہنے کا امکان رہتا ہے» | The English says "tends": «رجحان» is the literal match but stiff; «امکان» says "may", weaker than the source. No glossary entry covers it | keep; or «…کی طرف مائل سمجھا جاتا ہے» | Urdu editor |
| «سلائیڈ منظر» (toggle) | A view name next to the action «سب دیکھیں»; no source or glossary term | «واحد سیارہ منظر», «ایک ایک سیارہ» | Urdu editor |
| Sunday: "Seek blessings from those in authority" | The English is ambiguous (approval/support or prayers) | support/backing (current), «دعائیں لیں» (prayers), «منظوری لیں» (approval) | English author, then Urdu editor |
| Midnight in the time words | ICU gives «رات» for 20:06 and 00:05; «آدھی رات» would need custom code | keep ICU; or special-case 00:00-00:59 | Urdu editor |
| Tier badges show two Urdu words («قابلِ قبول مقبول», «اجتناب اجتناب») | `TierBadge` prints the translated English label and, beside it, the classical band name; the scoring note lists the band names, so the two are consistent, but the Avoid tier repeats one word | (a) keep (mirrors the English+Arabic pattern); (b) in Urdu show the band name once; (c) show only the translated label | product owner and Urdu editor |

#### C. Medical-safety consistency (review of Phases 12-14; no new copy change)
- The notice (long text) is in English, Urdu, French and Arabic on `CheckDateView`, `DetailSheet`, `ScanDatesView` and the shared page (browser-checked in Phase 14 at 360, 390 and 412 px, medical vs marriage); the Urdu long text is unchanged. Short caution: metadata description, share text, card footer (English and French).
- No sentence tells users to delay, stop or choose treatment by astrology; the notice says the opposite. Remaining wording differences, unchanged: the Urdu notice has no "stop or replace" clause; the Arabic Simple-mode sentences for a journey and for work are still categorical (non-medical); the Detailed-mode English and French void-of-course sentence has no "traditionally"; the Urdu rule sentence has a sentence-level suffix the other languages lack. All AI-drafted medical wording needs a medical reviewer and French/Arabic language review.
- **Recommendation on tier names, scores and sharing (nothing changed):** a medical result prints «Excellent … Avoid» with `NN/100`, on a shared page and card that name the occasion only in small print. Read alone, «Avoid» can mean "avoid treatment" and «Excellent» "go ahead". Proposed, in order of impact: (1) for the medical election use neutral tier names («traditionally favourable / neutral / unfavourable» and equivalents in four languages); (2) drop the numeric score from the medical share page and card (keep it in the app next to the notice); (3) keep sharing enabled, with the caution already added. Each is a product decision and a display change; (1) and (2) also need reviewed French and Arabic wording.

#### D. Indexing-readiness audit of the Urdu route group (built app, Chromium at 360/390/412 px)
All 7 public Urdu routes: HTTP 200; `lang="ur" dir="rtl"`; Urdu title and description; one canonical (`https://www.asrar.app/ur…`, same host as robots.txt and the sitemap); no hreflang; `noindex, follow`; FAQ JSON-LD on 6 of 7 (not on `/ur`); no horizontal overflow at any width; no image without `alt`. `/ur/` redirects (308) to `/ur`; unknown `/ur/*` returns 404 with the noindex header; robots.txt does not block `/ur` (so a later `noindex` is readable). The titles are unique.

| Route | Visible text nodes in the default state, by provenance | Held or flagged content visible | Other findings |
|---|---|---|---|
| `/ur` | 124 hand-written catalog, 73 static page copy, 12 AI-drafted UI, 2 AI-drafted result (manzil), 11 Latin-only | **Divine Name card «Yā Razzāq» with English gloss «O Provider · For provision and barakah»** (held); incense names | 2 `<main>` landmarks, 1 unnamed link, CLS 0.14–0.25 (English `/`: 0.03) |
| `/ur/abjad` | 36 catalog, 48 static copy, 10 AI-drafted UI | none in the default state | CLS 0.15 (English `/abjad`: 0) |
| `/ur/compatibility` | 38 catalog, 51 static copy, 9 AI-drafted UI | none by default; the result shows 148 AI-drafted archetype texts including strong marriage warnings (Phase 4 flags) | 3 visible `<h1>` (tool headings) |
| `/ur/name-and-mother-burj` | 85 catalog, 56 static copy, 19 AI-drafted UI | none by default; **results contain angel/jinn, Divine Name glosses, Fātiḥa renderings (held, in English)** and 355 AI-drafted career texts | 2 visible `<h1>` |
| `/ur/planetary-hours` | 146 catalog, 63 static copy, 12 AI-drafted UI, 3 AI-drafted result | **Divine Name card with English gloss** | unnamed icon button, CLS 0.13 (English: 0.02) |
| `/ur/planet-of-the-day` | 94 catalog, 51 static copy, 13 AI-drafted UI, 4 AI-drafted result (potd weekday paragraph) | **Divine Name names**; weekday paragraph (Thursday/Friday religious claims need religious review) | 1 unnamed control (not inspected) |
| `/ur/ikhtiyarat` | 69 catalog, 28 static copy, 10 AI-drafted UI, 11 AI-drafted rules | **medical election text and notice (medical review pending), 14+6 `[SCHOLAR-REVIEW]` rule sentences with the Urdu flag** | CLS 0.37 (English `/ikhtiyarat`: 0.34) |

"Hand-written" means written by the project, not reviewed by a native Urdu editor: no category is reviewed. Counts are visible text nodes, attributes included, in the default state; interactive results add much more AI-drafted and held text. CLS was measured headless and unthrottled, two runs, so treat it as a comparison, not a field value.

Other readiness findings:
1. **No crawlable internal link points into `/ur`.** The home, `/abjad`, `/compatibility`, `/name-and-mother-burj`, `/fr` and `/ar` contain none (the language switch is client state). The sitemap or a link from an indexable page would be needed for discovery. (Fixed for wave 1: `/abjad` links to `/ur/abjad` with `hrefLang="ur"`, verified live.)
2. The tools are client-rendered in English and translated by the DOM catalog after hydration; the FAQ and page copy are server-rendered Urdu (about 700 Urdu-script words versus 200 Latin on `/ur/abjad` before JavaScript). Whether Google's renderer sees the translated tool UI is unverified.
3. Layout shift is higher in Urdu than in English on 4 of 7 routes (text swap after hydration). This should be fixed or accepted before indexing: it is a Core Web Vitals risk. The a11y items (duplicate `<main>`, unnamed icon controls, several `<h1>`) come from shared components and were not compared with the English pages.
4. `/ur/sadaqa` and other English-only pages have no Urdu route (404): correct, not thin pages.

#### E. Human-review gate: recommendation
**Approach 2: keep all seven pages excluded now.** No page's visible content has passed language or safety review, and four pages show held religious content in the default state. Proposed order once review exists (the list below is for approval; nothing was changed):

| Wave | URL | Reason it qualifies | Conditions before it can be switched on | Status (21 Oct 2026) |
|---|---|---|---|---|
| 1 (pilot) | `https://www.asrar.app/ur/abjad` | numerical tool; no held content by default; only 10 AI-drafted UI strings among 95 text nodes | Urdu editor signs off the page copy, FAQ, metadata and the 10 UI strings; CLS fixed or accepted | ✅ live since 21 Oct 2026 (PR #101) |
| 2 | `https://www.asrar.app/ur/compatibility` | no held content by default | editor and religious reviewer sign off the 148 archetype texts and marriage warnings | not switched on; see asrar-ur-reconciliation-2026-10-21.md §3 |
| 2 | `https://www.asrar.app/ur/name-and-mother-burj` | public tool, canonical, FAQ | the held angel/jinn, Divine Name and Fātiḥa content in results is resolved (reviewed Urdu or intentionally English and labelled) and the career texts are reviewed | not switched on; see asrar-ur-reconciliation-2026-10-21.md §3 |
| hold | `/ur`, `/ur/planetary-hours`, `/ur/planet-of-the-day`, `/ur/ikhtiyarat` | the hub should go last, when the pages it links to are approved | Divine Name gloss approved or removed on the first three; weekday religious claims reviewed; `/ur/ikhtiyarat` needs the medical review, the `[SCHOLAR-REVIEW]` rules and the medical tier/score decision | not switched on |
| never | `/ikhtiyarat/r/*` shared results, `/profile`, `/auth`, `/api`, `/ur` 404s and any `/ur/*` outside the seven, user-specific or thin pages | private, per-user or parameter-generated | — | — |

**Proposed change list on approval (not implemented):** `src/lib/i18nRoutes.ts` (an explicit `UR_INDEXABLE_PATHS`, as `isIndexableArAppPath` does for Arabic, and `hreflangLanguages` adding `ur` for those paths only, reciprocal on the English, French, Arabic and Urdu pages plus `x-default`); `src/lib/urMetadata.ts` (robots and `alternates.languages` per path); `middleware.ts` (the `X-Robots-Tag: noindex` only for paths not in the list); `app/(ur)/ur/layout.tsx` (keep the noindex default, pages override); `app/sitemap.ts` (the approved Urdu URLs with alternates); a crawlable link from the matching English page; tests (`urdu-seo-rtl`, `urdu-indexing-readiness`); the CLS and a11y fixes above.

`src/lib/urdu-indexing-readiness.test.ts` (new) pins the current controls and the technical invariants every route already meets (7 routes, Urdu title and description, self-canonical on the canonical host, no hreflang yet, unique titles, noindex in metadata, layout and middleware, no Urdu in the sitemap source or in any hreflang set).

#### F. Google Search Console checklist (to do by the site owner; nothing was accessed)
1. Verify ownership of `https://www.asrar.app` (domain property by DNS, or the URL-prefix property) and confirm the canonical host redirect (apex vs `www`).
2. Only after approval and deployment: submit `https://www.asrar.app/sitemap.xml`, which must list only approved, indexable URLs.
3. URL Inspection on each approved Urdu URL (live test): the rendered HTML must not contain `noindex` and the response must not carry `X-Robots-Tag: noindex`; "Google-selected canonical" must equal the declared canonical; page fetch and rendering without errors (check the screenshot for the translated tool UI).
4. Check that the pages are discoverable (sitemap and an internal link) and that the Urdu pages appear in the hreflang report without "no return tag" errors.
5. Monitor Pages (indexing) and Core Web Vitals reports and crawl stats for coverage or crawl errors. A submitted sitemap does not mean the pages will be indexed: Google decides whether and when.

#### G. Verification (Phase 15, new)
See the final report for the exact `tsc`, Vitest, regeneration, build and browser results.
