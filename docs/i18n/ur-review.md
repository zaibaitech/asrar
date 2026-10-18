# Urdu (/ur) — native review sheet

Phase 1 Urdu pages for asrar.app. **All /ur pages are noindex and are not in the sitemap or hreflang** until Mario approves indexing. The native review is done and its corrections are applied (see below).

Pages: `/ur`, `/ur/name-and-mother-burj`, `/ur/compatibility`, `/ur/abjad`, `/ur/planetary-hours`, `/ur/planet-of-the-day`, `/ur/ikhtiyarat`.

Every string was translated by hand (no machine translation), **except the AI-drafted result texts in section 5**, which were drafted by an AI assistant, are NOT native-reviewed and are listed there for the Language Reviewer. The mobile app (zaibaitech/asrar-mobile) has no Urdu, so nothing was reused. Qur'an and Divine Names stay in Arabic.

**String count: 722** (14 SEO metadata, 161 page copy, 53 shared UI in TypeScript, 494 tool-UI catalog entries incl. 27 patterns). Not counted here: 896 AI-drafted result texts (section 5), which are not native-reviewed.

Sources (edit there, then regenerate this file with `python3 scripts/i18n/ur/build_review.py`):

- SEO metadata: `src/lib/urMetadata.ts`
- Page copy: `src/lib/i18n/urPages.ts`
- Shared UI: `src/lib/i18n/ur.ts`, `src/components/seo/relatedTools.ts`
- Tool UI catalog: `scripts/i18n/ur/catalog_source.py` + AI drafts `scripts/i18n/ur/catalog_ai_draft.py` → `public/i18n/ur-ui.json` (`python3 scripts/i18n/ur/build_catalog.py`)


## Open questions for the reviewer

1. “آج کے ساعات” (meta description of /ur/planetary-hours and its first FAQ) is the colloquial search phrase Mario asked to target; grammatically ساعت is feminine (آج کی ساعتیں). Keep or change?
2. “اختیارات” on its own reads as “powers/authority” to most Urdu speakers. The pages always pair it with “مناسب تاریخوں کا انتخاب”. Is that enough, or should the H1 drop the word?
3. “Wednesday night” (burj result) → “بدھ کی رات”. In Urdu usage this can mean the night before or after Wednesday; check against the intended meaning (the night following Wednesday’s day?).
4. Planetary-hour guide item “Cutting ties” → “تعلقات ختم کرنا”. Should be checked so it never reads as encouraging قطع رحمی.
5. Planet-of-the-day intro: “a ruling planet that colours its energy” → softened to “روایت کے مطابق … اس دن کی کیفیت کا رنگ متعین کرتا ہے”. Check that the wording does not attribute independent influence to planets.
6. Astro technical terms in the Ikhtiyārāt breakdown (محترق، خالی السیر، تحت الشعاع، ہبوط، وبال، رجعت، الطریقۃ المحترقۃ) follow classical Arabic/Persian usage; please confirm they are understood by Urdu readers.
7. Urdu-typed names in the Abjad count: RESOLVED. Urdu letters are converted before counting (see the reviewer answers below, Q7).
8. Soul-connection archetype meanings, burj career texts, per-date rule explanations (Simple mode), manzil descriptions and day guidance paragraphs are now AI-drafted (section 5, awaiting native review). Other result texts are still English (see “Still in English” at the end); the pages keep saying “ٹول کے کچھ حصے ابھی انگریزی میں ہیں۔”

### New strings for the Language Reviewer (0 pending)

Added after the native review; please check these.

| Where | English | Urdu | Note |
|---|---|---|---|



### Reviewer answers (native review, Oct 2026)

| # | Question | Reviewer answer | Status |
|---|---|---|---|
| 1 | آج کے ساعات | Change to the feminine آج کی ساعتیں / آج کی ساعاتِ کواکب. | ✅ applied: /planetary-hours meta description and the first FAQ now read «آج کی ساعاتِ کواکب»; glossary updated. |
| 2 | اختیارات | Keep, but plain language first in SEO titles; never alone as a nav label or button (use «بہترین تاریخیں»). | ✅ applied: /ikhtiyarat title now leads with «نکاح، سفر اور کاروبار کے لیے مناسب تاریخ». The H1 stays «مناسب تاریخوں کا انتخاب (اختیارات)». Nav and buttons already use «بہترین تاریخیں»; no label uses اختیارات on its own. |
| 3 | بدھ کی رات | Confirm the intended meaning in the source. Night before Wednesday → «شبِ بدھ (منگل کی شام)»; night after → «بدھ کی شام / رات (جمعرات کی شب)»; default «بدھ کی رات (مغرب کے بعد)». | ✅ applied: the source data means the night before Wednesday (burujData.json: “Wednesday night (Saturn’s night), after Isha” and “Tuesday midnight (Wednesday night)”; the first night hour of Tuesday evening is Saturn’s). So «Wednesday night» → «شبِ بدھ (منگل کی شام)», per the reviewer’s rule for that meaning. Note the French data says “Mercredi soir”, which looks like the same ambiguity in French. |
| 4 | تعلقات ختم کرنا | Change to «نقصان دہ معاملات یا شراکتیں ختم کرنا». | ✅ applied |
| 5 | Planet-of-the-day intro | Do not make the planet the agent; use the fuller wording. | ✅ applied (fuller wording). |
| 6 | Astro terms | محترق، تحت الشعاع، ہبوط، وبال، رجعت، شرف are understood. Gloss خالی السیر and الطریقۃ المحترقۃ; use اتصال / انصراف for Applying/Separating. | ✅ applied |
| 7 | Urdu letters in Abjad | Recommends normalising ی→ي، ک→ك، ہ/ۃ→ه/ة (ے→ي) before counting, or until then an inline warning. | ✅ applied (approved by Mario, Oct 2026): src/lib/urduLetters.ts converts ی ے→ي, ک→ك, ھ ۂ→ه, ہ ۃ→ه (ة at the end of a word, so فاطمہ = فاطمة = 135) before every name/Abjad count (burj, compatibility, Abjad calculator, ʿilm al-ḥurūf). علی = 110, فاطمہ = 135, کریم = 270. ٹ ڈ ڑ ں and پ چ ژ گ have no value (0). Arabic input is untouched (src/lib/urduLetters.test.ts). The spelling note says so (batch 4 wording; Arabic letters in a Naskh span). Batch 4 decisions (Mario, Oct 2026): اللہ, also inside names (عبداللہ), → الله, so total (66) and elements match الله exactly; پ چ ژ گ ٹ ڈ ڑ ں stay at 0 (strict Arabic Abjad, no chronogram values); the hamza/ى rule and the differing letter tables, already on main, are fixed in a separate PR. |
| 8 | English interpretive content | OK for a noindex phase 1 with UR_COMMON.toolUiNote; translate burj career texts and soul-connection meanings before indexing. | ⏳ partly done: archetype meanings, burj career texts, rule explanations, manzil descriptions and day guidance are now AI-drafted (section 5, pending native review). Other result texts are still English. toolUiNote stays visible; /ur stays noindex. |


## Review corrections (69 of 69 applied)

From the native reviewer (Language Reviewer, Oct 2026). The tables further down show the strings as they are now, with the corrections in place. /ur stays noindex and out of the sitemap and hreflang until Mario approves indexing (Q8, the untranslated result texts, is still open).

| Batch | String | Before | After | Status |
|---|---|---|---|---|
| 0 | Divine Names list, English label “Yā Wudd” | Yā Laṭīf (يا لطيف) · Yā Wudd (يا ودود) | Yā Laṭīf (يا لطيف) · Yā Wadūd (يا ودود) | ✅ applied (typo fixed in app/planetary-hours/PlanetaryHoursPage.tsx for EN and FR; the Urdu and Arabic catalog keys were updated to match the new English text). |
| 0 | Burj table (burujData.json): all 12 rows | 6 rows vocalised, 6 bare | all 12 fully vocalised (يَا رَحْمٰنُ with dagger alif) | ✅ applied (display only: urDhikrDisplay() in urPages.ts; burujData.json, the calculator and EN/FR/AR unchanged) |
| 1 | UR_POTD.rulers | نبی کریم ﷺ پر کثرت سے درود اور دعا کا دن ہے | نبی کریم ﷺ پر کثرت سے درود شریف پڑھنے اور دعا کا دن ہے | ✅ applied (+ glossary entry) |
| 1 | catalog «Jumada al-Awwal» | جمادی الاول | جمادی الاولیٰ | ✅ applied |
| 1 | catalog «Jumada al-Thani» | جمادی الثانی | جمادی الثانیہ | ✅ applied |
| 1 | catalog «جيد (Jayyid)» | جيد | جیّد | ✅ applied |
| 1 | catalog «ضعيف (Ḍaʿīf)» | ضعيف | ضعیف | ✅ applied |
| 1 | catalog «O Most Subtle, Most Kind» | اے باریک بین، نہایت مہربان | اے لطیف، اے باریک بین و مہربان | ✅ applied |
| 1 | catalog «O Most High, O Most Great» | اے سب سے بلند، اے سب سے عظیم | اے بلند و برتر، اے عظمت والے | ✅ applied |
| 1 | catalog «I understand — let's begin» | میں سمجھ گیا — شروع کریں | ٹھیک ہے، شروع کریں | ✅ applied |
| 1 | catalog «All outcomes are determined by Allah alone (Qadr)» | ہر انجام کا فیصلہ صرف اللہ کی تقدیر سے ہوتا ہے۔ | ہر نتیجہ اللہ ہی کی تقدیر سے ہے۔ | ✅ applied |
| 2 | / title | اسرار — ابجد، نام سے برج، ساعاتِ کواکب اور علم الاعداد اردو میں | اسرار — ابجد، نام سے برج، علم الاعداد اور ساعاتِ کواکب | ✅ applied |
| 2 | / description | اسلامی روایت سے غور و فکر کے ٹولز: … | نام اور والدہ کے نام سے برج، ناموں کی مطابقت، ابجد، آج کی ساعاتِ کواکب اور اختیارات۔ … | ✅ applied |
| 2 | /name-and-mother-burj title | نام اور والدہ کے نام سے برج معلوم کریں: ابجد سے برج کا حساب | نام اور امی کے نام سے برج معلوم کریں (ابجد) | ✅ applied |
| 2 | /name-and-mother-burj description | اپنے نام اور امی (والدہ) کے نام کے ابجد اعداد سے … | اپنے اور امی کے نام کے ابجد اعداد سے برج معلوم کریں: … | ✅ applied |
| 2 | /compatibility description | علم الحروف کے “روحانی ربط” کے طریقے سے ابجد کے ذریعے … | ابجد اور علم الحروف کے “روحانی ربط” سے شادی، دوستی یا کام کے لیے … | ✅ applied |
| 2 | /abjad title | ابجد کیلکولیٹر: نام کے اعداد معلوم کریں (علم الاعداد) | ابجد کیلکولیٹر: نام کے اعداد معلوم کریں | ✅ applied |
| 2 | /abjad description | کسی بھی نام یا عربی عبارت کی ابجد (حسابِ جمل) قیمت … | کسی بھی نام یا عربی عبارت کے ابجد اعداد (حسابِ جمل) … | ✅ applied |
| 2 | /planetary-hours description | آج کے ساعات معلوم کریں: … | آج کی ساعاتِ کواکب: آپ کے شہر میں … | ✅ applied (also Q1) |
| 2 | /ikhtiyarat title | علمِ اختیارات: نکاح، سفر اور کاروبار کے لیے مناسب تاریخ کا انتخاب | نکاح، سفر اور کاروبار کے لیے مناسب تاریخ (اختیارات) | ✅ applied (also Q2) |
| 2 | /ikhtiyarat description | علمِ اختیارات کی روایت کے مطابق … | نکاح، سفر، نئے گھر میں منتقلی اور کاروبار کے لیے روایتی علمِ اختیارات کے مطابق … | ✅ applied |
| 3A | catalog «Cutting ties» | تعلقات ختم کرنا | نقصان دہ معاملات یا شراکتیں ختم کرنا | ✅ applied (also Q4) |
| 3A | catalog «Seeking authority» | عہدے کی طلب | منصب اور ذمہ داری کے معاملات | ✅ applied |
| 3A | catalog planet-of-the-day intro | …اس دن کی کیفیت کا رنگ متعین کرتا ہے | علم النجوم کی روایت میں ہفتے کے ہر دن کو ایک سیارے سے منسوب کیا جاتا ہے، اور اسی نسبت سے … اس دن کی کیفیت بیان کی جاتی ہے۔ | ✅ applied (fuller Q5 wording) |
| 3A | catalog «Auspicious» | سعد | موافق | ✅ applied |
| 3A | catalog «Outlook» + Marriage/Friendship/Family/Work | منظرنامہ / شادی کا منظرنامہ… | پہلو / شادی کے پہلو، دوستی کے پہلو، خاندانی پہلو، کام کے پہلو | ✅ applied |
| 3A | catalog «Watch Out» | خبردار رہیں | احتیاط کے پہلو | ✅ applied |
| 3A | catalog «Most auspicious for important decisions» | اہم فیصلوں کے لیے سب سے موزوں | روایت میں اہم کاموں کے لیے موزوں سمجھا جاتا ہے | ✅ applied |
| 3B | catalog «Air ♦ Neutral» | ہوا ♦ خنثیٰ | ہوا ♦ ممتزج | ✅ applied |
| 3B | catalog «No concern here — this factor looks neutral…» | …یہ عنصر غیر جانبدار ہے۔ | …یہ عنصر معتدل ہے۔ | ✅ applied |
| 3B | catalog re: «is neutral in» (both patterns) | $1 برجِ $2 میں معتدل حالت میں ہے | $1 برجِ $2 میں معتدل ہے | ✅ applied |
| 3B | catalog re: «is comfortable in» (both patterns) | $1 برجِ $2 میں آرام کی حالت میں ہے | $1 برجِ $2 میں موافق حالت میں ہے | ✅ applied |
| 3B | catalog «Moon Applying to Saturn/Mars (Hard Aspect)» | قمر کا زحل/مریخ سے سخت نظر کی طرف بڑھنا | قمر کا زحل/مریخ سے اتصال (سخت نظر) | ✅ applied |
| 3B | catalog «Moon Applying to Venus or Jupiter» | قمر کا زہرہ یا مشتری کی طرف بڑھنا | قمر کا زہرہ یا مشتری سے اتصال | ✅ applied |
| 3B | catalog «Moon Separating from Benefics» | قمر کا سعد سیاروں سے جدا ہونا | قمر کا سعد سیاروں سے انصراف (جدا ہونا) | ✅ applied |
| 3B | catalog «Moon Void of Course» | قمر خالی السیر | قمر خالی السیر (کسی سیارے سے اتصال نہیں) | ✅ applied (Q6 gloss) |
| 3B | catalog «Via Combusta» | الطریقۃ المحترقۃ | الطریقۃ المحترقۃ (میزان و عقرب کا مخصوص حصہ) | ✅ applied (Q6 gloss) |
| 3B | catalog «Venus Dignified» | زہرہ قوت میں | زہرہ اپنی قوت میں | ✅ applied |
| 3B | catalog «Person to Person» | فرد سے فرد | دو افراد کا موازنہ | ✅ applied |
| 3B | catalog «Moment Alignment» | لمحے کی ہم آہنگی | اس وقت کی موافقت | ✅ applied |
| 3B | catalog «Live positions» | براہِ راست مقامات | سیاروں کے موجودہ مقامات | ✅ applied |
| 3B | catalog «Updated» | تازہ کاری | تازہ ترین | ✅ applied |
| 3B | catalog «Quick Tips» | فوری مشورے | مختصر مشورے | ✅ applied |
| 3B | catalog «Starts» | شروع | آغاز | ✅ applied |
| 3B | catalog «· Waxing Gibbous» / «· Waning Gibbous» | بڑھتا ہوا چاند / گھٹتا ہوا چاند | بڑھتا محدب چاند / گھٹتا محدب چاند | ✅ applied (native check still recommended) |
| 3B | catalog «Tropical» / «Sidereal» | ٹراپیکل / سائیڈریل | مداری (ٹراپیکل) / نجومی (سائیڈریل) | ✅ applied (native check still recommended) |
| 3B | UR_BURJ.dobNote | (ٹراپیکل بروج) | (مداری / ٹراپیکل بروج) | ✅ applied |
| 3B | UR_ABJAD.orders, faqs[1].a | …دونوں ترتیبوں کو سپورٹ کرتا ہے… / …دونوں کو سپورٹ کرتا ہے… | …دونوں ترتیبوں سے حساب کرتا ہے… | ✅ applied |
| 3B | UR_HOME.intro | …اوقات کے روایتی اسلامی علوم کا ساتھی ہے۔ | …فلکی اوقات کے روایتی اسلامی علوم میں آپ کا رہنما ہے۔ | ✅ applied |
| 3B | catalog «Avoid» / rating «اجتناب (Ijtanib)» | اجتناب کریں / اجتناب | اجتناب (both) | ✅ applied |
| 3C | catalog «Best For» / «Best for» | کس کام کے لیے بہتر | موزوں کام | ✅ applied |
| 3C | ur.ts nav.calculator | حساب | کیلکولیٹر | ✅ applied |
| 3C | catalog «Type to search: Muhammad…» / «…Fatima…» | تلاش کے لیے لکھیں: Muhammad, Ali, Hassan... | تلاش کے لیے لکھیں: ⁦Muhammad, Ali, Hassan…⁩ (LRI…PDI) | ✅ applied |
| 3C | catalog «Get it on Google Play» | Google Play سے حاصل کریں | ⁦Google Play⁩ سے حاصل کریں (LRI…PDI) | ✅ applied (the only other catalog value mixing Latin and Urdu were the two search placeholders above) |
| 3C | catalog «Ḥadad Value» | حدد کی قیمت | عدد کی قیمت | ✅ applied: the source confirms it is the count, burujData.json says “repeat Hadad times: your name + mother’s name”. Native check of the label still welcome. |
| 3C | UR_COMPAT.faqs[4].a | …دعوت ہو سکتا ہے۔ | …دعوت ہو سکتی ہے۔ | ✅ applied |
| 4 | UR_COMMON.spellingNote | نام اردو یا عربی املا میں لکھ سکتے ہیں۔ … ٹ، ڈ، ڑ اور ں کی ابجد میں کوئی قیمت نہیں … | آپ نام اردو یا عربی املا میں لکھ سکتے ہیں۔ … فاطمہ اور فاطمة کا عدد ایک ہی آتا ہے، اور علی اور علي کا بھی۔ ٹ، ڈ، ڑ، ں اور پ، چ، ژ، گ کی ابجد میں کوئی قیمت نہیں … | ✅ applied |
| 4 | UR_COMMON.spellingNote rendering (/ur/abjad, /ur/compatibility, /ur/name-and-mother-burj) | Arabic ي ك ه ة فاطمة علي in the Nastaliq text | each in <span lang="ar" class="font-arabic"> (UrduSpellingNote) | ✅ applied |
| 4 | UR_ABJAD.how | …نام یا عبارت عربی حروف میں لکھیں… | …نام یا عبارت اردو یا عربی حروف میں لکھیں… | ✅ applied |
| 4 | UR_ABJAD.faqs[2].a | کیلکولیٹر میں اپنا نام عربی حروف میں لکھیں؛ … | کیلکولیٹر میں اپنا نام اردو یا عربی حروف میں لکھیں؛ … | ✅ applied |
| 4 | catalog «Both names must be in Arabic script…» | درست تجزیے کے لیے دونوں نام عربی رسم الخط میں ہونے چاہییں | درست تجزیے کے لیے دونوں نام اردو یا عربی حروف میں لکھیں | ✅ applied |
| 4 | docs Q7 note | old pre-change text | trimmed; status updated | ✅ applied |
| 4 | code A: word-final ہ in اللہ | اللہ → اللة (same total, different elements) | اللہ / عبداللہ → الله / عبدالله | ✅ applied (approved by Mario) |
| 4 | code C: پ چ ژ گ ٹ ڈ ڑ | uncounted | kept at 0 (Mario’s decision); the spelling note says so | ✅ applied |
| 5 | catalog abjad system selector note (English source updated too) | مغربی (شمالی و مغربی افریقہ) · مشرقی (مشرقِ وسطیٰ اور ایشیا) | مغربی (مراکش تا لیبیا، اندلس اور مغربی افریقہ) · مشرقی (مصر، مشرقِ وسطیٰ اور برصغیر سمیت ایشیا) | ✅ applied; English source is now “Maghribi (the Maghreb, al-Andalus & West Africa) · Mashriqi (Egypt, the Middle East & Asia)” |
| 5 | UR_ABJAD.what | الف 1، ب 2، ج 3، اور اسی طرح ش 1000 تک، اس مغربی ترتیب میں جو یہاں پہلے سے منتخب ہے (مشرقی ترتیب میں، جو یہاں دستیاب بھی ہے، غ 1000 ہے)۔ … “حسابِ جمل” | الف 1، ب 2، ج 3، اور اسی طرح آخری حرف تک: یہاں پہلے سے منتخب مغربی ترتیب میں آخری حرف شین (ش) ہے جس کی قیمت 1000 ہے، جبکہ مشرقی ترتیب میں، جو یہاں بھی دستیاب ہے، غین (غ) کی قیمت 1000 ہے۔ … “حسابِ جُمَّل” | ✅ applied |
| 5 | UR_COMPAT.faqs[1].a | آپ مغربی ترتیب (شمالی اور مغربی افریقہ) اور مشرقی ترتیب (مشرق، بشمول برصغیر) … جن ناموں میں ص، س، ش، ض، ظ یا غ جیسے حروف ہوں ان میں فرق ہو سکتا ہے۔ | آپ مغربی ترتیب (مراکش تا لیبیا اور مغربی افریقہ) اور مشرقی ترتیب (مصر، عرب ممالک اور برصغیر) … جن ناموں میں ص، ض، س، ظ، غ یا ش میں سے کوئی حرف ہو ان کا مجموعہ مختلف آ سکتا ہے۔ | ✅ applied; English source updated to match |
| 5 | UR_ABJAD.orders | …اور مغربی ترتیب، جو شمالی اور مغربی افریقہ میں رائج ہے۔ | …اور مغربی ترتیب، جو مراکش سے لیبیا تک کے مغربِ عربی، تاریخی اندلس اور مغربی افریقہ میں رائج ہے۔ | ✅ applied; English source updated to match |
| 5 | UR_BURJ.how[1] | ہر نام کو مغربی (شمالی افریقی) ترتیب کے حروف کی قیمتوں سے… | ہر نام کو مغربی ترتیب (مراکش و مغربی افریقہ) کے حروف کی قیمتوں سے… | ✅ applied |

## 1. Qur'an / Divine Names

Kept in Arabic script. The tool shows transliterations; on /ur they are replaced by the Arabic the tool itself writes. Divine Names in the Urdu page copy (burj table) are marked lang="ar" and rendered in Naskh; inside the tool they use the page font.

| English (tool text) | Shown on /ur |
|---|---|
| Yā Laṭīf | يا لطيف |
| Yā Nūr (يا نور) · Yā Ḥayy (يا حي) | يا نور · يا حي |
| Yā Laṭīf (يا لطيف) · Yā Wadūd (يا ودود) | يا لطيف · يا ودود |
| Yā Qawiyy (يا قوي) · Yā Qahhār (يا قهار) | يا قوي · يا قهار |
| Yā ʿAlīm (يا عليم) · Yā Ḥakīm (يا حكيم) | يا عليم · يا حكيم |
| Yā Karīm (يا كريم) · Yā Wahhāb (يا وهاب) | يا كريم · يا وهاب |
| Yā Wadūd (يا ودود) · Yā Jamīl (يا جميل) | يا ودود · يا جميل |
| Yā Ṣabūr (يا صبور) · Yā Matīn (يا متين) | يا صبور · يا متين |
| Yā Nūr · Yā Ḥayy · Yā Qayyūm | يا نور · يا حي · يا قيوم |
| Yā ʿAliyyu Yā ʿAẓīm | يا علي يا عظيم |


### Burj table: dhikr per burj (from `burujData.json`; shown fully vocalised on /ur, the data file is unchanged)

| Burj | Arabic (shown on /ur, vocalised) | Transliteration | English meaning |
|---|---|---|---|
| Aries (Ḥamal) | يَا مَالِكُ يَا قُدُّوسُ | Ya Maliku Ya Quddus |  |
| Taurus (Thawr) | يَا كَافِي يَا غَنِيُّ | Ya Kafi Ya Ghani |  |
| Gemini (Jawzāʾ) | يَا عَلِيُّ يَا عَظِيمُ | Ya 'Aliyyu Ya 'Azim |  |
| Cancer (Saraṭān) | يَا رَحْمٰنُ يَا رَحِيمُ | Ya Rahmanu Ya Rahim |  |
| Leo (Asad) | يَا حَيُّ يَا قَيُّومُ | Ya Hayyu Ya Qayyum |  |
| Virgo (Sunbula) | يَا فَتَّاحُ يَا رَزَّاقُ | Ya Fattah Ya Razzaq |  |
| Libra (Mīzān) | يَا عَلِيُّ يَا عَظِيمُ | Yā ʿAliyyu Yā ʿAẓīm |  |
| Scorpio (ʿAqrab) | يَا مَالِكُ يَا قُدُّوسُ | Yā Māliku Yā Quddūs |  |
| Sagittarius (Qaws) | يَا كَبِيرُ يَا مُتَعَالِي | Ya Kabiru Ya Muta'ali |  |
| Capricorn (Jady) | يَا فَتَّاحُ يَا رَزَّاقُ | Yā Fattāḥu Yā Razzāq |  |
| Aquarius (Dalw) | يَا عَلِيُّ يَا عَظِيمُ | Yā ʿAliyyu Yā ʿAẓīm |  |
| Pisces (Ḥūt) | يَا كَبِيرُ يَا مُتَعَالِي | Yā Kabīru Yā Mutaʿālī |  |


Also in Arabic inside the Urdu copy: ﷺ (after نبی کریم), the example spelling فاطمة, the letter ة.


## 2. Religious terms

### Glossary (used consistently on every page)

| Term | Urdu | Note |
|---|---|---|
| Allah | اللہ | Urdu orthography (ہ). Divine Names in lists/tables stay in Arabic script. |
| the Prophet ﷺ | نبی کریم ﷺ |  |
| ṣalawāt on the Prophet ﷺ | درود شریف (پڑھنا) | Review batch 1. |
| Bismillāh | بسم اللہ |  |
| Abjad (ḥisāb al-jummal) | ابجد (حسابِ جمل) |  |
| ʿilm al-ḥurūf | علم الحروف |  |
| ʿilm al-aʿdād (numerology) | علم الاعداد | Target search phrase. |
| ʿilm al-nujūm (science of the stars) | علم النجوم / علمِ نجوم | In everyday Urdu this also means astrology; always framed as “روایتی” and “غور و فکر”. |
| burj / burūj | برج / بروج |  |
| planetary hours | ساعاتِ کواکب | Singular: ساعت (feminine): آج کی ساعتیں / آج کی ساعاتِ کواکب (review Q1; the masculine “آج کے ساعات” is no longer used). |
| planet | سیارہ | کوکب kept in the compound ساعاتِ کواکب. |
| istikhāra / ṣalāt al-istikhāra | استخارہ / نمازِ استخارہ | Oblique: استخارے سے / استخارے کے ساتھ. |
| ṣadaqa | صدقہ | Oblique: صدقے کی رہنمائی. |
| dhikr | ذکر | The app also writes “Zikr”; both → ذکر. |
| duʿāʾ | دعا |  |
| nikāḥ | نکاح | “Marriage” in UI → شادی; the contract itself → نکاح. |
| tawakkul | توکل |  |
| niyya (intention) | نیت |  |
| the unseen (al-ghayb) | غیب | Disclaimer: غیب کا علم صرف اللہ کو ہے۔ |
| kahāna (fortune-telling) | کہانت |  |
| Beautiful Names of Allah | اسمائے حسنیٰ | Single Name: اسمِ الٰہی. |
| ikhtiyārāt (electional timing) | اختیارات / علمِ اختیارات | Caution: in everyday Urdu اختیارات means “powers/authority”; always glossed (“مناسب تاریخوں کا انتخاب”), plain language first in SEO titles, never alone as a nav label or button (“بہترین تاریخیں”). Review Q2. |
| lunar mansions (manāzil) | منازلِ قمر / منزلِ قمر |  |
| soul connection | روحانی ربط | Compatibility metric name. |
| Mashriqi / Maghribi order | مشرقی / مغربی ترتیب | مغربی also means “Western”; glossed once as “(شمالی افریقی)”. |
| tāʾ marbūṭa | تائے مربوطہ (ة) |  |
| Chaldean order | کلدانی ترتیب |  |
| Planets: Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn | شمس، قمر، مریخ، عطارد، مشتری، زہرہ، زحل | Sun/Moon glossed as (سورج)/(چاند) in the guide table. |
| Zodiac: Aries … Pisces | حمل، ثور، جوزا، سرطان، اسد، سنبلہ، میزان، عقرب، قوس، جدی، دلو، حوت |  |
| Elements: fire, earth, air, water | آگ، مٹی، ہوا، پانی | Adjective once: ہوائی برج. |
| Weekdays: Sunday … Saturday | اتوار، پیر، منگل، بدھ، جمعرات، جمعہ، ہفتہ |  |
| Hijri (AH) | ہجری (ھ) |  |


### Religious / disclaimer strings in the tool UI

| English | Urdu |
|---|---|
| Muharram | محرم |
| Safar | صفر |
| Rabi' al-Awwal | ربیع الاول |
| Rabi' al-Thani | ربیع الثانی |
| Jumada al-Awwal | جمادی الاولیٰ |
| Jumada al-Thani | جمادی الثانیہ |
| Rajab | رجب |
| Sha'ban | شعبان |
| Ramadan | رمضان |
| Shawwal | شوال |
| Dhu al-Qi'dah | ذوالقعدہ |
| Dhu al-Hijjah | ذوالحجہ |
| O Most Subtle, Most Kind | اے لطیف، اے باریک بین و مہربان |
| O Most High, O Most Great | اے بلند و برتر، اے عظمت والے |
| Recommended Zikr | تجویز کردہ ذکر |
| Recommended Dhikr | تجویز کردہ ذکر |
| Zikr Challenge | ذکر چیلنج |
| Start your daily zikr! | اپنا روزانہ ذکر شروع کریں! |
| Open Tasbih | تسبیح کھولیں |
| Dhikr | ذکر |
| Divine Names | اسمائے حسنیٰ |
| Divine Names & Dhikr | اسمائے حسنیٰ اور ذکر |
| Your Divine Name | آپ کا اسمِ الٰہی |
| Person to Divine Name | فرد اور اسمِ الٰہی |
| Divine Name to Intention | اسمِ الٰہی اور نیت |
| Divine Resonance | اسمِ الٰہی سے ہم آہنگی |
| Qur'anic Reflection | قرآنی تدبر |
| Qur'anic Resonance | قرآنی ہم آہنگی |
| Qur'an | قرآن |
| Sadaqah | صدقہ |
| Charity | خیرات |
| Sadaqah Guidance | صدقے کی رہنمائی |
| Sadaqah by Birth Month | پیدائش کے مہینے کے مطابق صدقہ |
| Sadaqah by Day of the Week | ہفتے کے دن کے مطابق صدقہ |
| Hijri date | ہجری تاریخ |
| AH | ھ |
| Focus on istighfar and protective adhkār | استغفار اور حفاظتی اذکار پر توجہ دیں |
| Gratitude & du'ā' | شکر اور دعا |
| Sunnah & Fiqh | سنت اور فقہ |
| Custom (ʿUrf) | رواج (عرف) |
| ʿIlm al-Ḥurūf | علم الحروف |
| ʿIlm al-Ḥurūf & ʿIlm al-ʿAdad Explorer | علم الحروف اور علم الاعداد کی سیر |
| ʿIlm Nujūm | علمِ نجوم |
| ʿIlm al-Nujūm – Planetary Alignment | علم النجوم – کواکب کی ہم آہنگی |
| Stars (Ikhtiyārāt) | ستارے (اختیارات) |
| Manāzil | منازل |
| Manāzil al-qamar · 28 stations | منازلِ قمر · 28 منزلیں |
| Manzil of today / tonight | آج / آج رات کی منزل |
| Guide to all 28 manāzil → | تمام 28 منازل کی رہنمائی ← |
| Lunar Mansion (Manzil) | منزلِ قمر |
| Recommended Incense (Bakhoor) | تجویز کردہ خوشبو (بخور) |
| Frankincense + Liquid Storax | لوبان + میعۂ سائلہ |
| Frankincense + Musk | لوبان + مشک |
| اجتناب (Ijtanib) | اجتناب |
| جيد (Jayyid) | جیّد |
| مقبول (Maqbūl) | مقبول |
| ممتاز (Mumtāz) | ممتاز |
| ضعيف (Ḍaʿīf) | ضعیف |
| Traditional stations for reflection and timing adab — not prediction. Allah alone knows the unseen. | غور و فکر اور اوقات کے ادب کے لیے روایتی منازل — پیش گوئی نہیں۔ غیب کا علم صرف اللہ کو ہے۔ |
| This app explores the traditional Islamic sciences of ʿIlm al-Ḥurūf and ʿIlm al-ʿAdad for cultural and historical reflection. It is not for fortune-telling, medical advice, or religious rulings. Always consult qualified scholars for religious guidance. | یہ ایپ علم الحروف اور علم الاعداد کے روایتی اسلامی علوم کو ثقافتی اور تاریخی غور و فکر کے لیے پیش کرتی ہے۔ یہ قسمت کا حال بتانے، طبی مشورے یا شرعی فتووں کے لیے نہیں ہے۔ دینی رہنمائی کے لیے ہمیشہ مستند علما سے رجوع کریں۔ |
| For educational and cultural exploration only • Always consult qualified scholars for religious guidance | صرف تعلیمی اور ثقافتی مطالعے کے لیے • دینی رہنمائی کے لیے ہمیشہ مستند علما سے رجوع کریں |
| This tool provides spiritual reflection based on traditional Islamic sciences. It is NOT fortune-telling (kāhana), which is prohibited. Use it as a guide for self-reflection, always combined with prayer (duʿāʾ), practical wisdom (ḥikma), and consultation with qualified scholars. All outcomes are determined by Allah alone (Qadr). | یہ ٹول روایتی اسلامی علوم کی بنیاد پر روحانی غور و فکر پیش کرتا ہے۔ یہ کہانت (قسمت کا حال بتانا) نہیں ہے، جو ممنوع ہے۔ اسے خود احتسابی کے لیے رہنما سمجھیں، ہمیشہ دعا، عملی حکمت اور مستند علما سے مشورے کے ساتھ۔ ہر نتیجہ اللہ ہی کی تقدیر سے ہے۔ |
| ⚠️ For reflection & spiritual timing — not prediction. Only Allah knows the unseen. | ⚠️ غور و فکر اور روحانی اوقات کے لیے — پیش گوئی نہیں۔ غیب کا علم صرف اللہ کو ہے۔ |
| Begin with Bismillah and the relevant dhikr for that planet. Your intention (niyyah) is what matters most. | بسم اللہ اور اس سیارے کے مناسب ذکر سے آغاز کریں۔ اصل اہمیت آپ کی نیت کی ہے۔ |
| ⚠️ Planetary hours are a traditional tool for reflection and spiritual timing used by Islamic scholars (ʿulamā'). They are not a form of divination (kahanah). Use them to align your efforts with natural rhythms, always relying on tawakkul (trust in Allah). Consult qualified scholars for religious rulings. | ⚠️ ساعاتِ کواکب غور و فکر اور روحانی اوقات کا ایک روایتی ذریعہ ہیں جو اسلامی علما استعمال کرتے رہے ہیں۔ یہ کہانت نہیں ہیں۔ انہیں اپنی کوششوں کو فطری اوقات سے ہم آہنگ کرنے کے لیے استعمال کریں، ہمیشہ اللہ پر توکل کے ساتھ۔ شرعی احکام کے لیے مستند علما سے رجوع کریں۔ |
| ⚠️ This tool provides spiritual context inspired by Islamic ʿIlm al-Nujūm. It is for reflection, not divination (kahanah) or superstition. Every day is blessed — use this as a framework to align your intentions and channel your energy mindfully. Consult qualified scholars for religious guidance. | ⚠️ یہ ٹول اسلامی علم النجوم سے ماخوذ روحانی پس منظر پیش کرتا ہے۔ یہ غور و فکر کے لیے ہے، کہانت یا توہم پرستی کے لیے نہیں۔ ہر دن بابرکت ہے — اسے اپنی نیتوں کو درست سمت دینے اور اپنی توانائی کو سوچ سمجھ کر استعمال کرنے کا ایک خاکہ سمجھیں۔ دینی رہنمائی کے لیے مستند علما سے رجوع کریں۔ |
| In ʿIlm al-Nujūm (Islamic celestial science), each day and night is divided into 12 unequal hours ruled by the seven classical planets in the Chaldean order: Saturn → Jupiter → Mars → Sun → Venus → Mercury → Moon. The length of each hour changes daily with sunrise and sunset. | علم النجوم (اسلامی فلکیاتی علم) میں ہر دن اور رات کو بارہ بارہ غیر مساوی ساعتوں میں تقسیم کیا جاتا ہے، جن پر سات کلاسیکی سیارے کلدانی ترتیب سے حاکم ہوتے ہیں: زحل ← مشتری ← مریخ ← شمس ← زہرہ ← عطارد ← قمر۔ ہر ساعت کی مدت طلوع و غروبِ آفتاب کے ساتھ روز بدلتی ہے۔ |
| In ʿIlm al-Nujūm, each day of the week is assigned a ruling planet that colours its energy from sunrise to sunrise. This was well-known to classical Islamic scholars. The day starts at the first planetary hour after sunrise — not midnight. | علم النجوم کی روایت میں ہفتے کے ہر دن کو ایک سیارے سے منسوب کیا جاتا ہے، اور اسی نسبت سے طلوعِ آفتاب سے اگلے طلوع تک اس دن کی کیفیت بیان کی جاتی ہے۔ یہ بات کلاسیکی اسلامی علما میں معروف تھی۔ دن آدھی رات سے نہیں بلکہ طلوعِ آفتاب کے بعد کی پہلی ساعت سے شروع ہوتا ہے۔ |
| Before you begin | شروع کرنے سے پہلے |
| This tool reflects a refinement from the classical Islamic tradition of ʿIlm al-Nujūm (electional astrology). It is not a substitute for istikhāra, consultation (mashwara) with family and trusted scholars, and tawakkul (reliance on Allah). No date is religiously forbidden for nikāḥ — marriage is permitted at any time of the year. | یہ ٹول علم النجوم (اوقات کے انتخاب کا علم) کی کلاسیکی اسلامی روایت سے ماخوذ ہے۔ یہ استخارے، گھر والوں اور معتبر علما سے مشورے، اور اللہ پر توکل کا متبادل نہیں۔ شریعت میں نکاح کے لیے کوئی تاریخ ممنوع نہیں — نکاح سال کے کسی بھی وقت جائز ہے۔ |
| I understand — let's begin | ٹھیک ہے، شروع کریں |
| About this feature / Adab | اس فیچر کے بارے میں / ادب |
| A reflection tool from traditional teachings — it does not replace faith, free will, or wise counsel. | روایتی تعلیمات سے غور و فکر کا ایک ذریعہ — یہ ایمان، انسان کے اختیار اور دانشمندانہ مشورے کا متبادل نہیں۔ |


## 3. SEO metadata

Titles and descriptions (`urMetadata.ts`). The title gets “ | اسرار” appended on tool pages. Target phrases: نام سے برج، امی کے نام سے برج، علم الاعداد، آج کے ساعات۔

| Page / field | English | Urdu |
|---|---|---|
| / title | Asrār — Abjad, Burj by Name, Planetary Hours and ʿIlm al-Aʿdād in Urdu | اسرار — ابجد، نام سے برج، علم الاعداد اور ساعاتِ کواکب |
| / description | Reflective tools from the Islamic tradition: your burj from your name and your mother's name, name compatibility, Abjad, today's planetary hours, the planet of the day and ikhtiyārāt. For learning and reflection, not prediction. | نام اور والدہ کے نام سے برج، ناموں کی مطابقت، ابجد، آج کی ساعاتِ کواکب اور اختیارات۔ اسلامی روایت سے غور و فکر کے ٹولز، پیش گوئی نہیں۔ |
| /name-and-mother-burj title | Find Your Burj from Your Name and Your Mother's Name (Abjad) | نام اور امی کے نام سے برج معلوم کریں (ابجد) |
| /name-and-mother-burj description | Find your burj from the Abjad values of your name and your mother's (ammi's) name: element, temperament, blessed day, dhikr and sadaqa. A free calculator for reflection, not prediction. | اپنے اور امی کے نام کے ابجد اعداد سے برج معلوم کریں: عنصر، مزاج، مبارک دن، ذکر اور صدقہ۔ مفت، غور و فکر کے لیے، پیش گوئی نہیں۔ |
| /compatibility title | Name Compatibility for Marriage: Abjad Calculator | شادی کے لیے ناموں کی مطابقت: ابجد کیلکولیٹر |
| /compatibility description | Compare two names with the Abjad 'soul connection' method of ʿilm al-ḥurūf, for marriage, friendship or work. For reflection, not a verdict: choose by dīn, character and istikhāra. | ابجد اور علم الحروف کے “روحانی ربط” سے شادی، دوستی یا کام کے لیے دو ناموں کا موازنہ کریں۔ فیصلہ نہیں؛ رشتہ دین، اخلاق اور استخارے سے طے کریں۔ |
| /abjad title | Abjad Calculator: The Numerical Value of Names (ʿIlm al-Aʿdād) | ابجد کیلکولیٹر: نام کے اعداد معلوم کریں |
| /abjad description | Find the Abjad (ḥisāb al-jummal) value of any name or Arabic phrase in the Mashriqi or Maghribi order, with each letter's value and the balance of the four elements. For reflection and learning. | کسی بھی نام یا عربی عبارت کے ابجد اعداد (حسابِ جمل) مشرقی یا مغربی ترتیب میں، ہر حرف کی قیمت اور عناصر کے توازن کے ساتھ معلوم کریں۔ |
| /planetary-hours title | Today's Planetary Hours (Sāʿāt al-Kawākib) for Your Location | آج کی ساعاتِ کواکب: آپ کے مقام کے مطابق ساعتیں |
| /planetary-hours description | Find today's planetary hours: the planet ruling the current hour where you are, the times of the twelve day and twelve night hours in the Chaldean order, and what suits each planet. For reflection and planning your time. | آج کی ساعاتِ کواکب: آپ کے شہر میں اس وقت کی ساعت کا سیارہ، دن اور رات کی بارہ بارہ ساعتوں کے اوقات اور ہر ساعت کے مناسب کام، غور و فکر کے لیے۔ |
| /planet-of-the-day title | Planet of the Day: The Day's Ruler and Its Hours | آج کا سیارہ: دن کا حاکم سیارہ اور اس کی ساعتیں |
| /planet-of-the-day description | Learn which planet rules today in the tradition, the deeds, dhikr and sadaqa that suit it, and its planetary hours for your location. | جانیں کہ روایت کے مطابق آج کے دن کا حاکم سیارہ کون سا ہے، اس کے مناسب اعمال، ذکر اور صدقہ کیا ہیں، اور آپ کے مقام کے مطابق اس کی ساعتیں کب ہیں۔ |
| /ikhtiyarat title | Ikhtiyārāt: Choosing Suitable Dates for Nikāḥ, Travel and Business | نکاح، سفر اور کاروبار کے لیے مناسب تاریخ (اختیارات) |
| /ikhtiyarat description | Suitable dates for nikāḥ, travel, moving home and business according to the traditional science of ikhtiyārāt: the day's ruler, the planetary hour and the lunar mansion. For reflection alongside istikhāra and tawakkul. | نکاح، سفر، نئے گھر میں منتقلی اور کاروبار کے لیے روایتی علمِ اختیارات کے مطابق مناسب تاریخیں۔ استخارے اور توکل کے ساتھ غور و فکر کے لیے۔ |


### Page copy (H1, intro, sections, FAQ)

| Key | English | Urdu |
|---|---|---|
| UR_COMMON.disclaimer | These tools are for reflection and learning, not prediction; only Allah knows the unseen. | یہ ٹولز غور و فکر اور سیکھنے کے لیے ہیں، پیش گوئی کے لیے نہیں؛ غیب کا علم صرف اللہ کو ہے۔ |
| UR_COMMON.toolUiNote | Some parts of the tool are still shown in English. | ٹول کے کچھ حصے ابھی انگریزی میں ہیں۔ |
| UR_COMMON.home | Asrār | اسرار |
| UR_COMMON.breadcrumbLabel | Breadcrumb | صفحے کا راستہ |
| UR_COMMON.faqTitle | Frequently asked questions | عام سوالات |
| UR_COMMON.linksTitle | Related pages | متعلقہ صفحات |
| UR_COMMON.inEnglish | (in English) | (انگریزی میں) |
| UR_COMMON.inEnglishDesc | The same tool with the explanation in English. | یہی ٹول، انگریزی وضاحت کے ساتھ۔ |
| UR_COMMON.spellingNote | You can type names in Urdu or Arabic spelling. For the Abjad count, ی and ے are read as ي, ک as ك, ھ as ه, and ہ as ه (ة at the end of a word), so فاطمہ and فاطمة give the same number, as do علی and علي. ٹ، ڈ، ڑ، ں and پ، چ، ژ، گ have no Abjad value and are not counted. | آپ نام اردو یا عربی املا میں لکھ سکتے ہیں۔ ابجد کے حساب میں ی اور ے کو ي، ک کو ك، ھ کو ه، اور ہ کو ه (لفظ کے آخر میں ة) شمار کیا جاتا ہے، اس لیے فاطمہ اور فاطمة کا عدد ایک ہی آتا ہے، اور علی اور علي کا بھی۔ ٹ، ڈ، ڑ، ں اور پ، چ، ژ، گ کی ابجد میں کوئی قیمت نہیں، اس لیے یہ شمار نہیں ہوتے۔ |
| UR_TOOLS.burj.name | Your Burj from Your Name and Your Mother's Name | اپنے نام اور والدہ کے نام سے برج |
| UR_TOOLS.burj.desc | Your burj, element, blessed day, dhikr and sadaqa from the Abjad count. | ابجد کے حساب سے آپ کا برج، عنصر، مبارک دن، ذکر اور صدقہ۔ |
| UR_TOOLS.compatibility.name | Name Compatibility for Marriage | شادی کے لیے ناموں کی مطابقت |
| UR_TOOLS.compatibility.desc | Compare two names with the soul-connection method. | روحانی ربط کے طریقے سے دو ناموں کا موازنہ۔ |
| UR_TOOLS.abjad.name | Abjad Calculator | ابجد کیلکولیٹر |
| UR_TOOLS.abjad.desc | The Abjad value of any name or Arabic phrase. | کسی بھی نام یا عربی عبارت کی ابجد قیمت۔ |
| UR_TOOLS.hours.name | Planetary Hours Today | آج کی ساعاتِ کواکب |
| UR_TOOLS.hours.desc | The planet ruling the current hour where you are. | آپ کے مقام پر موجودہ ساعت کا حاکم سیارہ۔ |
| UR_TOOLS.planetOfDay.name | Planet of the Day | آج کا سیارہ |
| UR_TOOLS.planetOfDay.desc | Today's ruling planet, the deeds, dhikr and sadaqa that suit it. | آج کا حاکم سیارہ، اور اس کے مناسب اعمال، ذکر اور صدقہ۔ |
| UR_TOOLS.ikhtiyarat.name | Choosing Suitable Dates (Ikhtiyārāt) | مناسب تاریخوں کا انتخاب (اختیارات) |
| UR_TOOLS.ikhtiyarat.desc | Suitable dates for nikāḥ, travel, moving home and business. | نکاح، سفر، نئے گھر اور کاروبار کے لیے مناسب تاریخیں۔ |
| UR_ELEMENTS.fire | Fire | آگ |
| UR_ELEMENTS.earth | Earth | مٹی |
| UR_ELEMENTS.air | Air | ہوا |
| UR_ELEMENTS.water | Water | پانی |
| UR_WEEKDAYS[0] | Sunday | اتوار |
| UR_WEEKDAYS[1] | Monday | پیر |
| UR_WEEKDAYS[2] | Tuesday | منگل |
| UR_WEEKDAYS[3] | Wednesday | بدھ |
| UR_WEEKDAYS[4] | Thursday | جمعرات |
| UR_WEEKDAYS[5] | Friday | جمعہ |
| UR_WEEKDAYS[6] | Saturday | ہفتہ |
| UR_BURUJ[0] | Aries (Ḥamal) | حمل |
| UR_BURUJ[1] | Taurus (Thawr) | ثور |
| UR_BURUJ[2] | Gemini (Jawzāʾ) | جوزا |
| UR_BURUJ[3] | Cancer (Saraṭān) | سرطان |
| UR_BURUJ[4] | Leo (Asad) | اسد |
| UR_BURUJ[5] | Virgo (Sunbula) | سنبلہ |
| UR_BURUJ[6] | Libra (Mīzān) | میزان |
| UR_BURUJ[7] | Scorpio (ʿAqrab) | عقرب |
| UR_BURUJ[8] | Sagittarius (Qaws) | قوس |
| UR_BURUJ[9] | Capricorn (Jady) | جدی |
| UR_BURUJ[10] | Aquarius (Dalw) | دلو |
| UR_BURUJ[11] | Pisces (Ḥūt) | حوت |
| UR_HOME.h1 | Asrār — Abjad, Burj and Planetary Hours | اسرار — ابجد، برج اور ساعاتِ کواکب |
| UR_HOME.intro | Asrār is a companion for the traditional Islamic sciences of ʿilm al-ḥurūf (the science of letters) and celestial timing. Find your burj from your name and your mother's name, compare two names, calculate Abjad values, see the planet ruling the current hour and day, and choose suitable dates with classical ikhtiyārāt. | اسرار علم الحروف (حروف کا علم) اور فلکی اوقات کے روایتی اسلامی علوم میں آپ کا رہنما ہے۔ نام اور والدہ کے نام سے اپنا برج معلوم کریں، دو ناموں کا موازنہ کریں، ابجد کی قیمتیں نکالیں، موجودہ ساعت اور دن کا حاکم سیارہ دیکھیں، اور کلاسیکی اختیارات کے ذریعے مناسب تاریخیں منتخب کریں۔ |
| UR_HOME.toolsTitle | Tools in Urdu | اردو میں ٹولز |
| UR_BURJ.h1 | Your Burj from Your Name and Your Mother's Name | نام اور والدہ کے نام سے برج |
| UR_BURJ.lead | Write your name and your mother's name to find your burj by the Abjad count, with its element, temperament, blessed day, dhikr and the sadaqa suited to it. | اپنا نام اور اپنی والدہ کا نام لکھیں اور ابجد کے حساب سے اپنا برج معلوم کریں، ساتھ ہی اس کا عنصر، مزاج، مبارک دن، ذکر اور اس کے مناسب صدقہ بھی۔ |
| UR_BURJ.howTitle | How is the burj calculated? | برج کا حساب کیسے ہوتا ہے؟ |
| UR_BURJ.how[0] | Write your name and your mother's name in Urdu or Arabic letters (or in Latin letters, then choose the Arabic spelling). | اپنا نام اور والدہ کا نام اردو یا عربی حروف میں لکھیں (یا رومن حروف میں لکھ کر عربی املا منتخب کریں)۔ |
| UR_BURJ.how[1] | Each name is converted to its Abjad total using the Maghribi letter values. | ہر نام کو مغربی ترتیب (مراکش و مغربی افریقہ) کے حروف کی قیمتوں سے اس کے ابجد مجموعے میں بدلا جاتا ہے۔ |
| UR_BURJ.how[2] | Add the two totals and divide by 12; the remainder (1 to 12, with 0 counted as 12) is your burj, from 1 = Aries (Ḥamal) to 12 = Pisces (Ḥūt). | دونوں مجموعے جمع کر کے 12 سے تقسیم کریں؛ باقی (1 سے 12 تک، اور صفر کو 12 شمار کیا جاتا ہے) آپ کا برج ہے: 1 = حمل سے 12 = حوت تک۔ |
| UR_BURJ.how[3] | The burj points to your element (fire, earth, air or water), which describes your temperament, and is linked to a blessed day, a dhikr and a sadaqa. | برج آپ کے عنصر (آگ، مٹی، ہوا یا پانی) کی نشان دہی کرتا ہے جو آپ کے مزاج کو بیان کرتا ہے، اور اس کے ساتھ ایک مبارک دن، ایک ذکر اور ایک صدقہ وابستہ ہے۔ |
| UR_BURJ.exampleTitle | Worked example | حل شدہ مثال |
| UR_BURJ.example | Muḥammad (محمد) = 92 and Fāṭima (فاطمة) = 135. The total is 92 + 135 = 227; 227 ÷ 12 = 18 remainder 11, so the burj is 11: Aquarius (Dalw), an air sign. | محمد = 92 اور فاطمہ (فاطمة) = 135۔ مجموعہ 92 + 135 = 227؛ 227 ÷ 12 = 18، باقی 11، لہٰذا برج 11 ہے: دلو، جو ہوائی برج ہے۔ |
| UR_BURJ.dobNote | Don't know how to write your mother's name in Arabic? The tool can also find your burj from your date of birth (tropical zodiac). | والدہ کا نام عربی میں لکھنا نہیں آتا؟ یہ ٹول آپ کی تاریخِ پیدائش سے بھی برج (مداری / ٹراپیکل بروج) نکال سکتا ہے۔ |
| UR_BURJ.istikharaTitle | This is not ṣalāt al-istikhāra | یہ نمازِ استخارہ نہیں ہے |
| UR_BURJ.istikhara | The traditional name of this reflection is 'istikhāra of names', but it is not istikhāra: true istikhāra is ṣalāt al-istikhāra, the two rakʿas and the duʿāʾ taught by the Prophet ﷺ. Use this tool for reflection and learning, not prediction; only Allah knows the unseen. | اس غور و فکر کا روایتی نام “ناموں کا استخارہ” ہے، لیکن یہ استخارہ نہیں۔ اصل استخارہ نمازِ استخارہ ہے، یعنی وہ دو رکعتیں اور دعا جو نبی کریم ﷺ نے سکھائیں۔ اس ٹول کو غور و فکر اور سیکھنے کے لیے استعمال کریں، پیش گوئی کے لیے نہیں؛ غیب کا علم صرف اللہ کو ہے۔ |
| UR_BURJ.tableTitle | The twelve burūj at a glance | بارہ بروج ایک نظر میں |
| UR_BURJ.colBurj | Burj | برج |
| UR_BURJ.colElement | Element | عنصر |
| UR_BURJ.colDay | Blessed day | مبارک دن |
| UR_BURJ.colDhikr | Dhikr | ذکر |
| UR_BURJ.faqs[0].q | How do I find my burj from my name and my mother's name? | اپنے نام اور امی کے نام سے برج کیسے معلوم کریں؟ |
| UR_BURJ.faqs[0].a | Add the Abjad value of your name to the value of your mother's name, divide the total by 12 and keep the remainder (0 counts as 12). Remainder 1 is Aries (Ḥamal), 2 Taurus (Thawr), 3 Gemini (Jawzāʾ), and so on up to 12, Pisces (Ḥūt). The calculator above does the counting for you. | اپنے نام کی ابجد قیمت کو والدہ کے نام کی قیمت میں جمع کریں، مجموعے کو 12 سے تقسیم کریں اور باقی کو لیں (صفر کو 12 شمار کریں)۔ باقی 1 ہو تو حمل، 2 ہو تو ثور، 3 ہو تو جوزا، اور اسی طرح 12 ہو تو حوت۔ اوپر والا کیلکولیٹر یہ حساب آپ کے لیے کر دیتا ہے۔ |
| UR_BURJ.faqs[1].q | Why is the mother's name used? | والدہ کا نام کیوں لیا جاتا ہے؟ |
| UR_BURJ.faqs[1].a | In ʿilm al-ḥurūf your own name is read as pointing to yourself, and your mother's name to what surrounds you: family inheritance and the circumstances of your path; the burj is drawn from the two together. The method is known in Arab practice, in West Africa (among the Hausa and Wolof) and in South Asia. | علم الحروف میں آپ کا نام آپ کی اپنی ذات کی طرف اشارہ سمجھا جاتا ہے، اور والدہ کا نام آپ کے گرد و پیش کی طرف: خاندانی ورثہ اور زندگی کے حالات؛ اور برج دونوں کو ملا کر نکالا جاتا ہے۔ یہ طریقہ عرب روایت میں، مغربی افریقہ (ہوسا اور وولوف) میں اور برصغیر میں معروف ہے۔ |
| UR_BURJ.faqs[2].q | Is this istikhāra? | کیا یہ استخارہ ہے؟ |
| UR_BURJ.faqs[2].a | No. Istikhāra is the prayer of asking Allah for what is good (ṣalāt al-istikhāra). 'Istikhāra of names' is only a traditional label; this calculation is a reflection on names and temperaments, not a prayer and not a way of knowing the unseen. | نہیں۔ استخارہ اللہ تعالیٰ سے خیر طلب کرنے کی نماز (نمازِ استخارہ) ہے۔ “ناموں کا استخارہ” محض ایک روایتی نام ہے؛ یہ حساب ناموں اور مزاجوں پر غور و فکر ہے، نہ نماز ہے اور نہ غیب جاننے کا ذریعہ۔ |
| UR_BURJ.faqs[3].q | Is the name burj the same as my burj by date of birth? | کیا نام کا برج وہی ہے جو تاریخِ پیدائش کا برج ہوتا ہے؟ |
| UR_BURJ.faqs[3].a | Not necessarily. The name burj comes only from the letter values of the two names, while the birth-date burj comes from the Sun's position on the day you were born, so the two can differ. The tool offers both. | ضروری نہیں۔ نام کا برج صرف دونوں ناموں کے حروف کی قیمتوں سے نکلتا ہے، جبکہ تاریخِ پیدائش کا برج آپ کی پیدائش کے دن سورج کے مقام سے، اس لیے دونوں مختلف ہو سکتے ہیں۔ یہ ٹول دونوں طریقے پیش کرتا ہے۔ |
| UR_BURJ.faqs[4].q | What does my burj tell me? | میرا برج مجھے کیا بتاتا ہے؟ |
| UR_BURJ.faqs[4].a | Your element and temperament, a blessed day of the week, one of the Beautiful Names of Allah to remember, and a traditional sadaqa. Read it as encouragement towards good deeds and self-knowledge, not as a forecast of the future. | آپ کا عنصر اور مزاج، ہفتے کا ایک مبارک دن، اللہ کے اسمائے حسنیٰ میں سے ایک اسم جس کا ذکر کیا جائے، اور ایک روایتی صدقہ۔ اسے نیک اعمال اور خود شناسی کی ترغیب سمجھیں، مستقبل کی پیش گوئی نہیں۔ |
| UR_COMPAT.h1 | Name Compatibility for Marriage | شادی کے لیے ناموں کی مطابقت |
| UR_COMPAT.lead | Enter two names to compare their Abjad totals with the traditional soul-connection method, read first for marriage, with friendship, family and work as other contexts. | دو نام لکھیں اور روایتی “روحانی ربط” کے طریقے سے ان کے ابجد مجموعوں کا موازنہ کریں؛ نتیجہ پہلے شادی کے لحاظ سے، اور پھر دوستی، خاندان اور کام کے لحاظ سے پڑھا جا سکتا ہے۔ |
| UR_COMPAT.adabTitle | Adab first | پہلے ادب |
| UR_COMPAT.adab | A name number cannot tell you whether a marriage will succeed. Ask about dīn and character, consult both families, pray ṣalāt al-istikhāra and put your trust in Allah. Use this tool for reflection and conversation, not as a verdict; Allah alone knows the unseen. | ناموں کا عدد یہ نہیں بتا سکتا کہ شادی کامیاب ہو گی یا نہیں۔ دین اور اخلاق کے بارے میں معلوم کریں، دونوں خاندانوں سے مشورہ کریں، نمازِ استخارہ پڑھیں اور اللہ پر توکل کریں۔ اس ٹول کو غور و فکر اور گفتگو کے لیے استعمال کریں، فیصلے کے طور پر نہیں؛ غیب کا علم صرف اللہ کو ہے۔ |
| UR_COMPAT.howTitle | How the names method works | ناموں کا طریقہ کیسے کام کرتا ہے |
| UR_COMPAT.how[0] | Write both names in Urdu or Arabic letters (or type them in Latin letters and pick the Arabic spelling). | دونوں نام اردو یا عربی حروف میں لکھیں (یا رومن حروف میں لکھ کر عربی املا منتخب کریں)۔ |
| UR_COMPAT.how[1] | Each name is converted to its Abjad (kabīr) total, using the Maghribi or Mashriqi letter values you select. | ہر نام کو اس کے ابجد (کبیر) مجموعے میں بدلا جاتا ہے، آپ کی منتخب کردہ مغربی یا مشرقی ترتیب کے مطابق۔ |
| UR_COMPAT.how[2] | The two totals are added together with 7 and divided by 9; the remainder (1–9, with 0 counted as 9) is the soul-connection number. | دونوں مجموعوں میں 7 جمع کر کے 9 سے تقسیم کیا جاتا ہے؛ باقی (1 سے 9 تک، اور صفر کو 9 شمار کیا جاتا ہے) روحانی ربط کا عدد ہے۔ |
| UR_COMPAT.how[3] | Each number has a traditional meaning, shown for the relationship context you choose: marriage, universal, friendship, family or work. | ہر عدد کا ایک روایتی مفہوم ہے جو آپ کے منتخب کردہ رشتے کے لحاظ سے دکھایا جاتا ہے: شادی، عمومی، دوستی، خاندان یا کام۔ |
| UR_COMPAT.faqs[0].q | How do I check name compatibility for marriage? | شادی کے لیے نام کیسے ملائیں؟ |
| UR_COMPAT.faqs[0].a | Enter both names, choose the 'Marriage' context and calculate. The tool adds the Abjad values of the two names plus 7, divides by 9 and shows the meaning of the remainder for marriage. | دونوں نام لکھیں، “شادی” کا انتخاب کریں اور حساب کریں۔ ٹول دونوں ناموں کی ابجد قیمتوں میں 7 جمع کر کے 9 سے تقسیم کرتا ہے اور باقی کا مفہوم شادی کے لحاظ سے دکھاتا ہے۔ |
| UR_COMPAT.faqs[1].q | Which Abjad system is used? | کون سا ابجد نظام استعمال ہوتا ہے؟ |
| UR_COMPAT.faqs[1].a | You can switch between the Maghribi order (Morocco to Libya and West Africa) and the Mashriqi order (Egypt, the Arab countries and South Asia). Most names give the same total in both; names containing any of the six letters ṣād, ḍād, sīn, ẓāʾ, ghayn or shīn can differ. | آپ مغربی ترتیب (مراکش تا لیبیا اور مغربی افریقہ) اور مشرقی ترتیب (مصر، عرب ممالک اور برصغیر) کے درمیان انتخاب کر سکتے ہیں۔ اکثر ناموں کا مجموعہ دونوں میں یکساں آتا ہے؛ جن ناموں میں ص، ض، س، ظ، غ یا ش میں سے کوئی حرف ہو ان کا مجموعہ مختلف آ سکتا ہے۔ |
| UR_COMPAT.faqs[2].q | Can I compare by date of birth instead of names? | کیا ناموں کے بجائے تاریخِ پیدائش سے موازنہ ہو سکتا ہے؟ |
| UR_COMPAT.faqs[2].a | Yes. Choose 'By Birth Date' to compare two people's Sun, Moon, Venus and Mars signs. This is a general, modern astrological comparison, not a classical Islamic method. | جی ہاں۔ “تاریخِ پیدائش سے” منتخب کریں تاکہ دو افراد کے سورج، چاند، زہرہ اور مریخ کے بروج کا موازنہ ہو۔ یہ ایک عمومی، جدید علمِ نجوم کا موازنہ ہے، کوئی کلاسیکی اسلامی طریقہ نہیں۔ |
| UR_COMPAT.faqs[3].q | Is it permissible to rely on name compatibility? | کیا ناموں کی مطابقت پر بھروسا کرنا درست ہے؟ |
| UR_COMPAT.faqs[3].a | Treat it as cultural reflection, not prediction. Choosing a spouse rests on dīn, character, family counsel and ṣalāt al-istikhāra. No number decides a marriage; Allah alone knows the unseen. | اسے ثقافتی غور و فکر سمجھیں، پیش گوئی نہیں۔ رشتے کا انتخاب دین، اخلاق، خاندان کے مشورے اور نمازِ استخارہ پر ہوتا ہے۔ کوئی عدد شادی کا فیصلہ نہیں کرتا؛ غیب کا علم صرف اللہ کو ہے۔ |
| UR_COMPAT.faqs[4].q | What if our result is low? | اگر نتیجہ کم آئے تو کیا کریں؟ |
| UR_COMPAT.faqs[4].a | A low number is not a prohibition and not a bad omen. It can be an invitation to talk about expectations and patience. Many happy marriages would 'fail' a numeric test. | کم عدد نہ تو ممانعت ہے اور نہ بدشگونی۔ یہ توقعات اور صبر کے بارے میں بات کرنے کی دعوت ہو سکتی ہے۔ بہت سی خوشگوار شادیاں کسی عددی امتحان میں “ناکام” ہو جاتیں۔ |
| UR_ABJAD.h1 | Abjad Calculator: The Numerical Value of Your Name | ابجد کیلکولیٹر: نام کے اعداد |
| UR_ABJAD.lead | Calculate the Abjad value of your name or any Arabic phrase, choose the Mashriqi or Maghribi order, and see each letter's value and the balance of the elements. | اپنے نام یا کسی بھی عربی عبارت کی ابجد قیمت نکالیں، مشرقی یا مغربی ترتیب منتخب کریں، اور ہر حرف کی قیمت اور عناصر کا توازن دیکھیں۔ |
| UR_ABJAD.whatTitle | What is Abjad (ḥisāb al-jummal)? | ابجد (حسابِ جمل) کیا ہے؟ |
| UR_ABJAD.what | The Abjad system gives every Arabic letter a number: alif 1, bāʾ 2, jīm 3, and so on to the last letter: in the Maghribi order selected here by default the last letter is shīn, worth 1000, while in the Mashriqi order, also available here, ghayn is 1000. The sum of a word's letter values is its ḥisāb al-jummal, a count used for centuries in the Islamic sciences and, in the subcontinent, also for chronograms (tārīkh-goʾī). | ابجد کے نظام میں عربی کے ہر حرف کی ایک عددی قیمت ہے: الف 1، ب 2، ج 3، اور اسی طرح آخری حرف تک: یہاں پہلے سے منتخب مغربی ترتیب میں آخری حرف شین (ش) ہے جس کی قیمت 1000 ہے، جبکہ مشرقی ترتیب میں، جو یہاں بھی دستیاب ہے، غین (غ) کی قیمت 1000 ہے۔ کسی لفظ کے حروف کی قیمتوں کا مجموعہ اس کا “حسابِ جُمَّل” کہلاتا ہے، جو صدیوں سے اسلامی علوم میں، اور برصغیر میں تاریخ گوئی (مادۂ تاریخ) میں بھی استعمال ہوتا رہا ہے۔ |
| UR_ABJAD.ordersTitle | The Mashriqi and Maghribi orders | مشرقی اور مغربی ترتیب |
| UR_ABJAD.orders | In ʿilm al-ḥurūf and ʿilm al-aʿdād scholars studied the numerical values of the Divine Names, Qur'anic phrases and people's names, and linked the letters to the four elements: fire, air, water and earth. There are two common orders: the Mashriqi order used in the East, including Pakistan and India, and the Maghribi order used in the Maghreb from Morocco to Libya, historically in al-Andalus, and in West Africa. This calculator supports both so you can compare the results. | علم الحروف اور علم الاعداد میں علما نے اسمائے حسنیٰ، قرآنی عبارات اور لوگوں کے ناموں کی عددی قیمتوں کا مطالعہ کیا اور حروف کو چار عناصر سے جوڑا: آگ، ہوا، پانی اور مٹی۔ دو ترتیبیں عام ہیں: مشرقی ترتیب، جو پاکستان اور ہندوستان سمیت مشرق میں رائج ہے، اور مغربی ترتیب، جو مراکش سے لیبیا تک کے مغربِ عربی، تاریخی اندلس اور مغربی افریقہ میں رائج ہے۔ یہ کیلکولیٹر دونوں ترتیبوں سے حساب کرتا ہے تاکہ آپ نتائج کا موازنہ کر سکیں۔ |
| UR_ABJAD.howTitle | How to use the calculator | کیلکولیٹر کیسے استعمال کریں |
| UR_ABJAD.how | Choose the type of calculation, write the name or phrase in Urdu or Arabic letters (or in Latin letters for the tool to convert), then read the total, the value of each letter and the element analysis. | حساب کی قسم منتخب کریں، نام یا عبارت اردو یا عربی حروف میں لکھیں (یا رومن حروف میں، تاکہ ٹول اسے عربی میں بدل دے)، پھر مجموعہ، ہر حرف کی قیمت اور عناصر کا تجزیہ دیکھیں۔ |
| UR_ABJAD.example | Example: Muḥammad = mīm (40) + ḥāʾ (8) + mīm (40) + dāl (4) = 92. | مثال: محمد = م (40) + ح (8) + م (40) + د (4) = 92۔ |
| UR_ABJAD.faqs[0].q | What is ʿilm al-aʿdād? | علم الاعداد کیا ہے؟ |
| UR_ABJAD.faqs[0].a | ʿIlm al-aʿdād is the traditional study of the numbers of letters and words through Abjad. In this tool it is a subject of reflection and learning about names, not fortune-telling. | علم الاعداد حروف اور الفاظ کے اعداد کا روایتی مطالعہ ہے، جو ابجد کے ذریعے کیا جاتا ہے۔ اس ٹول میں یہ ناموں کے بارے میں غور و فکر اور سیکھنے کا موضوع ہے، قسمت کا حال بتانا نہیں۔ |
| UR_ABJAD.faqs[1].q | What is the difference between the Mashriqi and Maghribi Abjad? | مشرقی اور مغربی ابجد میں کیا فرق ہے؟ |
| UR_ABJAD.faqs[1].a | They are two traditional orders of the Abjad letters. They differ in the values of a few letters, so the same name can give two different totals. The calculator supports both; switch with the button above it. | یہ ابجد حروف کی دو روایتی ترتیبیں ہیں۔ چند حروف کی قیمتوں میں فرق ہے، اس لیے ایک ہی نام کے دو مختلف مجموعے آ سکتے ہیں۔ کیلکولیٹر دونوں ترتیبوں سے حساب کرتا ہے؛ اس کے اوپر دیے گئے بٹن سے ترتیب بدلیں۔ |
| UR_ABJAD.faqs[2].q | How do I calculate the numbers of my name? | اپنے نام کے اعداد کیسے نکالیں؟ |
| UR_ABJAD.faqs[2].a | Write your name in Urdu or Arabic letters in the calculator; it adds up the letter values, ignoring vowel marks. Example: Muḥammad = 40 + 8 + 40 + 4 = 92. You can also type the name in Latin letters and the tool will convert it to Arabic letters. | کیلکولیٹر میں اپنا نام اردو یا عربی حروف میں لکھیں؛ یہ اعراب کو چھوڑ کر حروف کی قیمتیں جمع کرتا ہے۔ مثال: محمد = 40 + 8 + 40 + 4 = 92۔ آپ نام رومن حروف میں بھی لکھ سکتے ہیں، ٹول اسے عربی حروف میں بدل دے گا۔ |
| UR_ABJAD.faqs[3].q | How is tāʾ marbūṭa counted? | تائے مربوطہ (ة) کیسے شمار ہوتی ہے؟ |
| UR_ABJAD.faqs[3].a | In this calculator tāʾ marbūṭa (ة) counts as hāʾ (5), not as tāʾ (400). | اس کیلکولیٹر میں تائے مربوطہ (ة) کو ہ (5) شمار کیا جاتا ہے، ت (400) نہیں۔ |
| UR_ABJAD.faqs[4].q | Is Abjad a way of knowing the unseen? | کیا ابجد غیب جاننے کا ذریعہ ہے؟ |
| UR_ABJAD.faqs[4].a | No. The numerical values of letters are a subject of reflection and learning in the tradition of ʿilm al-ḥurūf, not prediction or a judgement about the future; only Allah knows the unseen. | نہیں۔ حروف کی عددی قیمتیں علم الحروف کی روایت میں غور و فکر اور سیکھنے کا موضوع ہیں، نہ کہ پیش گوئی یا مستقبل کے بارے میں کوئی حکم؛ غیب کا علم صرف اللہ کو ہے۔ |
| UR_PLANETS[0].name | Sun | شمس (سورج) |
| UR_PLANETS[0].bestFor | Leadership decisions, visibility and reputation, official matters | قیادت کے فیصلے، شہرت اور ساکھ، سرکاری معاملات |
| UR_PLANETS[1].name | Moon | قمر (چاند) |
| UR_PLANETS[1].bestFor | Travel and movement, emotional healing, family matters | سفر اور نقل و حرکت، جذباتی شفا، گھریلو معاملات |
| UR_PLANETS[2].name | Mars | مریخ |
| UR_PLANETS[2].bestFor | Courage and initiative, physical work, overcoming obstacles | ہمت اور پہل، جسمانی کام، رکاوٹوں پر قابو پانا |
| UR_PLANETS[3].name | Mercury | عطارد |
| UR_PLANETS[3].bestFor | Study and learning, writing and communication, trade and contracts | پڑھائی اور سیکھنا، تحریر اور رابطہ، تجارت اور معاہدے |
| UR_PLANETS[4].name | Jupiter | مشتری |
| UR_PLANETS[4].bestFor | Provision and abundance, expansion and growth, spiritual elevation | رزق اور فراوانی، وسعت اور ترقی، روحانی بلندی |
| UR_PLANETS[5].name | Venus | زہرہ |
| UR_PLANETS[5].bestFor | Love and relationships, beauty and art, harmony and peace | محبت اور تعلقات، حسن اور فن، ہم آہنگی اور امن |
| UR_PLANETS[6].name | Saturn | زحل |
| UR_PLANETS[6].bestFor | Long-term planning, discipline and organisation, land and property | طویل مدتی منصوبہ بندی، نظم و ضبط، زمین اور جائیداد |
| UR_HOURS.h1 | Planetary Hours Today | آج کی ساعاتِ کواکب |
| UR_HOURS.lead | Find the planet ruling the current hour where you are, the length of each day and night hour, and what suits it in the traditional Islamic science of the stars. | اپنے مقام پر موجودہ ساعت کا حاکم سیارہ، دن اور رات کی ہر ساعت کی مدت، اور روایتی اسلامی علمِ نجوم میں اس کے مناسب کام معلوم کریں۔ |
| UR_HOURS.whatTitle | What are planetary hours? | ساعاتِ کواکب کیا ہیں؟ |
| UR_HOURS.what | In the traditional Islamic science of the stars, the day and the night are each divided into twelve unequal hours, each ruled by one of the seven classical planets in the Chaldean order: Saturn → Jupiter → Mars → Sun → Venus → Mercury → Moon. The length of each hour changes daily with sunrise and sunset, and the first hour of the day is ruled by that day's planet. | روایتی اسلامی علمِ نجوم میں دن اور رات دونوں کو بارہ بارہ غیر مساوی ساعتوں میں تقسیم کیا جاتا ہے، اور ہر ساعت پر سات کلاسیکی سیاروں میں سے ایک کلدانی ترتیب سے حاکم ہوتا ہے: زحل ← مشتری ← مریخ ← شمس ← زہرہ ← عطارد ← قمر۔ ہر ساعت کی مدت طلوع و غروبِ آفتاب کے ساتھ روز بدلتی ہے، اور دن کی پہلی ساعت پر اسی دن کا سیارہ حاکم ہوتا ہے۔ |
| UR_HOURS.howTitle | How to use planetary hours | ساعاتِ کواکب کیسے استعمال کریں |
| UR_HOURS.how[0] | Look at the current planetary hour in the tool: note the ruling planet, its element and the time remaining. | ٹول میں موجودہ ساعت دیکھیں: حاکم سیارہ، اس کا عنصر اور باقی وقت نوٹ کریں۔ |
| UR_HOURS.how[1] | Match what you intend to do with what suits the planet (see the table below), and place important work in suitable hours. | جو کام آپ کرنا چاہتے ہیں اسے سیارے کے مناسب کاموں سے ملائیں (نیچے جدول دیکھیں)، اور اہم کام مناسب ساعتوں میں رکھیں۔ |
| UR_HOURS.how[2] | Begin with Bismillāh and the dhikr suited to that planet; the intention matters most. | بسم اللہ اور اس سیارے کے مناسب ذکر سے آغاز کریں؛ اصل اہمیت نیت کی ہے۔ |
| UR_HOURS.how[3] | Use the button that shows all hours to plan the whole day ahead. | پورے دن کی پیشگی منصوبہ بندی کے لیے تمام ساعتیں دکھانے والا بٹن استعمال کریں۔ |
| UR_HOURS.guideTitle | Guide to the seven planets | سات سیاروں کی رہنمائی |
| UR_HOURS.colPlanet | Planet | سیارہ |
| UR_HOURS.colDay | Its day | دن |
| UR_HOURS.colElement | Element | عنصر |
| UR_HOURS.colBestFor | Suits | مناسب کام |
| UR_HOURS.faqs[0].q | How do I find today's planetary hours? | آج کی ساعاتِ کواکب کیسے معلوم کریں؟ |
| UR_HOURS.faqs[0].a | Open the tool above and allow your location. It calculates today's sunrise and sunset where you are and shows the twelve day hours and twelve night hours, with the planet ruling each one. | اوپر والا ٹول کھولیں اور اپنے مقام (لوکیشن) کی اجازت دیں۔ یہ آپ کے مقام پر آج کے طلوع اور غروبِ آفتاب کا حساب کر کے دن کی بارہ اور رات کی بارہ ساعتیں، ہر ایک کے حاکم سیارے کے ساتھ دکھاتا ہے۔ |
| UR_HOURS.faqs[1].q | How long is a planetary hour? | ایک ساعت کتنی دیر کی ہوتی ہے؟ |
| UR_HOURS.faqs[1].a | The time from sunrise to sunset is divided by 12 to give the day hours, and the time from sunset to the next sunrise by 12 to give the night hours, so the length of an hour changes from day to day and from place to place. | طلوعِ آفتاب سے غروب تک کے وقت کو 12 پر تقسیم کرنے سے دن کی ساعتیں بنتی ہیں، اور غروب سے اگلے طلوع تک کے وقت کو 12 پر تقسیم کرنے سے رات کی ساعتیں؛ اس لیے ساعت کی مدت ہر دن اور ہر جگہ مختلف ہوتی ہے۔ |
| UR_HOURS.faqs[2].q | Which planet rules the first hour of the day? | دن کی پہلی ساعت کس سیارے کی ہوتی ہے؟ |
| UR_HOURS.faqs[2].a | The first hour of the day is ruled by that day's planet: the Sun for Sunday, the Moon for Monday, Mars for Tuesday, Mercury for Wednesday, Jupiter for Thursday, Venus for Friday and Saturn for Saturday. | دن کی پہلی ساعت پر اسی دن کا سیارہ حاکم ہوتا ہے: اتوار کو شمس، پیر کو قمر، منگل کو مریخ، بدھ کو عطارد، جمعرات کو مشتری، جمعہ کو زہرہ اور ہفتہ کو زحل۔ |
| UR_HOURS.faqs[3].q | What is the Chaldean order? | کلدانی ترتیب کیا ہے؟ |
| UR_HOURS.faqs[3].a | It is the fixed order in which the seven planets follow one another through the hours: Saturn, Jupiter, Mars, the Sun, Venus, Mercury, the Moon, and then back to Saturn. | یہ وہ مقررہ ترتیب ہے جس میں سات سیارے ساعتوں پر یکے بعد دیگرے آتے ہیں: زحل، مشتری، مریخ، شمس، زہرہ، عطارد، قمر، اور پھر دوبارہ زحل۔ |
| UR_HOURS.faqs[4].q | Are planetary hours a form of fortune-telling? | کیا ساعاتِ کواکب فال یا کہانت ہیں؟ |
| UR_HOURS.faqs[4].a | No. Planetary hours are a traditional tool for reflection and organising time used by Muslim scholars, not divination or fortune-telling. Use them to organise your efforts while always trusting in Allah, and ask people of knowledge about religious rulings. | نہیں۔ ساعاتِ کواکب غور و فکر اور وقت کی ترتیب کا ایک روایتی ذریعہ ہیں جو مسلمان علما استعمال کرتے رہے ہیں، یہ فال گیری یا کہانت نہیں۔ انہیں اپنی کوششوں کو منظم کرنے کے لیے استعمال کریں، ہمیشہ اللہ پر توکل کے ساتھ، اور شرعی احکام کے بارے میں اہلِ علم سے رجوع کریں۔ |
| UR_POTD.h1 | Planet of the Day | آج کا سیارہ |
| UR_POTD.lead | Each weekday has a ruling planet in the tradition. See today's planet, what suits it, and when its hours fall where you are. | روایت میں ہفتے کے ہر دن کا ایک حاکم سیارہ ہے۔ آج کا سیارہ، اس کے مناسب کام، اور آپ کے مقام پر اس کی ساعتوں کے اوقات دیکھیں۔ |
| UR_POTD.rulersTitle | The rulers of the seven days | ساتوں دنوں کے حاکم سیارے |
| UR_POTD.rulers | Sunday: the Sun; Monday: the Moon; Tuesday: Mars; Wednesday: Mercury; Thursday: Jupiter; Friday: Venus; Saturday: Saturn. Whatever its planet, Friday keeps its own special status in Islam: it is the day of jumuʿa, of abundant ṣalawāt on the Prophet ﷺ and of duʿāʾ. | اتوار: شمس؛ پیر: قمر؛ منگل: مریخ؛ بدھ: عطارد؛ جمعرات: مشتری؛ جمعہ: زہرہ؛ ہفتہ: زحل۔ سیارہ کوئی بھی ہو، جمعہ کا دن اسلام میں اپنی الگ فضیلت رکھتا ہے: یہ نمازِ جمعہ، نبی کریم ﷺ پر کثرت سے درود شریف پڑھنے اور دعا کا دن ہے۔ |
| UR_POTD.faqs[0].q | Which planet rules today? | آج کس سیارے کا دن ہے؟ |
| UR_POTD.faqs[0].a | The tool above shows it. In the tradition each weekday is ruled by one of the seven classical planets, and the first planetary hour after sunrise belongs to that planet. | اوپر والا ٹول یہ دکھاتا ہے۔ روایت میں ہفتے کے ہر دن پر سات کلاسیکی سیاروں میں سے ایک حاکم ہوتا ہے، اور طلوعِ آفتاب کے بعد پہلی ساعت اسی سیارے کی ہوتی ہے۔ |
| UR_POTD.faqs[1].q | Does the planet of the day decide whether my day will be good? | کیا آج کا سیارہ طے کرتا ہے کہ میرا دن اچھا گزرے گا؟ |
| UR_POTD.faqs[1].a | No. It is a traditional frame for reflection and for choosing suitable deeds, dhikr and sadaqa. Benefit and harm come only by the will of Allah. | نہیں۔ یہ غور و فکر اور مناسب اعمال، ذکر اور صدقے کے انتخاب کا ایک روایتی خاکہ ہے۔ نفع اور نقصان صرف اللہ کے حکم سے ہے۔ |
| UR_IKHTIYARAT.h1 | Choosing Suitable Dates (Ikhtiyārāt) | مناسب تاریخوں کا انتخاب (اختیارات) |
| UR_IKHTIYARAT.lead | Pick what you are planning and see the dates the tradition considers suitable, with the reasons. | اپنا منصوبہ منتخب کریں اور وہ تاریخیں دیکھیں جنہیں روایت مناسب سمجھتی ہے، وجوہات کے ساتھ۔ |
| UR_IKHTIYARAT.aboutTitle | What is ʿilm al-ikhtiyārāt? | علمِ اختیارات کیا ہے؟ |
| UR_IKHTIYARAT.about | Ikhtiyārāt (literally 'choices') is the classical practice of choosing a suitable time to begin an important matter, by looking at the ruler of the day, the planetary hour and the Moon's mansion. It is a tool for reflection: the decision rests on istikhāra, consultation and trust in Allah. | اختیارات (لفظی معنی: انتخاب) کسی اہم کام کے آغاز کے لیے مناسب وقت چننے کی کلاسیکی روایت ہے، جس میں دن کے حاکم سیارے، ساعت اور منزلِ قمر کو دیکھا جاتا ہے۔ یہ غور و فکر کا ذریعہ ہے؛ فیصلہ استخارے، مشورے اور اللہ پر توکل سے ہوتا ہے۔ |
| UR_IKHTIYARAT.faqs[0].q | How do I choose a good date for nikāḥ? | نکاح کے لیے اچھی تاریخ کیسے منتخب کریں؟ |
| UR_IKHTIYARAT.faqs[0].a | Choose marriage in the tool to see upcoming dates the tradition considers suitable, with their reasons. Then pray ṣalāt al-istikhāra and consult the family; nikāḥ is permissible on any day. | ٹول میں شادی منتخب کریں تاکہ آنے والی وہ تاریخیں دکھائی دیں جنہیں روایت مناسب سمجھتی ہے، وجوہات کے ساتھ۔ پھر نمازِ استخارہ پڑھیں اور گھر والوں سے مشورہ کریں؛ نکاح ہر دن جائز ہے۔ |
| UR_IKHTIYARAT.faqs[1].q | Is it wrong to start something on a day the tool does not list? | جو دن ٹول میں نہ ہو، کیا اس دن کام شروع کرنا غلط ہے؟ |
| UR_IKHTIYARAT.faqs[1].a | No. No day is unlucky in Islam. These are traditional preferences for reflection; act with istikhāra and tawakkul. | نہیں۔ اسلام میں کوئی دن منحوس نہیں۔ یہ غور و فکر کے لیے روایتی ترجیحات ہیں؛ استخارے اور توکل کے ساتھ کام کریں۔ |


## 4. UI

### Shared UI (TypeScript)

| Key | English | Urdu |
|---|---|---|
| ur.ts nav.home | Home | ہوم |
| ur.ts nav.calculator | Calculator | کیلکولیٹر |
| ur.ts nav.letterCalculator | Letter Calculator | حروف کا حساب |
| ur.ts nav.compatibility | Compatibility | مطابقت |
| ur.ts nav.planetaryHours | Planetary Hours | ساعاتِ کواکب |
| ur.ts nav.planetary | Planetary Alignment | کواکب کی ہم آہنگی |
| ur.ts nav.about | About | تعارف |
| ur.ts nav.guidance | Life Guidance | زندگی کی رہنمائی |
| ur.ts nav.advanced | Who Am I? | میں کون ہوں؟ |
| ur.ts nav.menu | Menu | مینو |
| ur.ts common.calculate | Calculate | حساب کریں |
| ur.ts common.clear | Clear | صاف کریں |
| ur.ts common.submit | Submit | جمع کریں |
| ur.ts common.cancel | Cancel | منسوخ کریں |
| ur.ts common.close | Close | بند کریں |
| ur.ts common.save | Save | محفوظ کریں |
| ur.ts common.loading | Loading... | لوڈ ہو رہا ہے... |
| ur.ts common.error | Error | خرابی |
| ur.ts common.success | Success | کامیابی |
| ur.ts common.name | Name | نام |
| ur.ts common.date | Date | تاریخ |
| ur.ts common.location | Location | مقام |
| ur.ts common.enterName | Enter name | نام لکھیں |
| ur.ts common.selectDate | Select date | تاریخ منتخب کریں |
| ur.ts common.results | Results | نتائج |
| ur.ts common.history | History | سابقہ حسابات |
| ur.ts common.favorites | Favorites | پسندیدہ |
| ur.ts common.compare | Compare | موازنہ کریں |
| ur.ts common.delete | Delete | حذف کریں |
| ur.ts common.copy | Copy | کاپی کریں |
| ur.ts common.copied | Copied! | کاپی ہو گیا! |
| ur.ts common.viewAll | View All | سب دیکھیں |
| ur.ts common.hideAll | Hide All | سب چھپائیں |
| ur.ts common.expand | Expand | کھولیں |
| ur.ts common.collapse | Collapse | سمیٹیں |
| ur.ts common.next | Next | اگلا |
| ur.ts common.back | Back | واپس |
| ur.ts common.skip | Skip | چھوڑیں |
| ur.ts common.edit | Edit | ترمیم کریں |
| ur.ts common.upload | Upload | اپ لوڈ کریں |
| ur.ts common.remove | Remove | ہٹائیں |
| ur.ts common.optional | Optional | اختیاری |
| Related tools title | Related tools | متعلقہ ٹولز |
| Related tools link | Name Compatibility for Marriage | شادی کے لیے ناموں کی مطابقت |
| Related tools link | Abjad Calculator | ابجد کیلکولیٹر |
| Related tools link | Planetary Hours Today | آج کی ساعاتِ کواکب |
| Related tools link | Planet of the Day | آج کا سیارہ |
| Related tools link | Your Burj from Your Name & Mother's Name | اپنے نام اور والدہ کے نام سے برج |
| Related tools link | Best Day for Nikah (Marriage) | نکاح کے لیے بہترین دن |
| Related tools link | Best Dates (Ikhtiyārāt) | مناسب تاریخوں کا انتخاب (اختیارات) |
| Related tools link | Lunar Mansions (Manāzil) | منازلِ قمر |
| Related tools link | Sadaqa of the Day | آج کا صدقہ |
| Related tools link | Sadaqa Guide | صدقے کی رہنمائی |


### Tool UI catalog (`public/i18n/ur-ui.json`)

Exact-match English text in the tools → Urdu. `re:` keys are patterns; `$1`… are replaced by the catalog translation of each captured part, `$pN` keeps the captured text (times).

| English | Urdu |
|---|---|
| Sun | شمس |
| Moon | قمر |
| Mars | مریخ |
| Mercury | عطارد |
| Jupiter | مشتری |
| Venus | زہرہ |
| Saturn | زحل |
| Aries | حمل |
| Aries ♈ | حمل ♈ |
| Taurus | ثور |
| Taurus ♉ | ثور ♉ |
| Gemini | جوزا |
| Gemini ♊ | جوزا ♊ |
| Cancer | سرطان |
| Cancer ♋ | سرطان ♋ |
| Leo | اسد |
| Leo ♌ | اسد ♌ |
| Virgo | سنبلہ |
| Virgo ♍ | سنبلہ ♍ |
| Libra | میزان |
| Libra ♎ | میزان ♎ |
| Scorpio | عقرب |
| Scorpio ♏ | عقرب ♏ |
| Sagittarius | قوس |
| Sagittarius ♐ | قوس ♐ |
| Capricorn | جدی |
| Capricorn ♑ | جدی ♑ |
| Aquarius | دلو |
| Aquarius ♒ | دلو ♒ |
| Pisces | حوت |
| Pisces ♓ | حوت ♓ |
| Aries ♈ & Scorpio ♏ | حمل ♈ اور عقرب ♏ |
| Gemini ♊ & Virgo ♍ | جوزا ♊ اور سنبلہ ♍ |
| Sagittarius ♐ & Pisces ♓ | قوس ♐ اور حوت ♓ |
| Taurus ♉ & Libra ♎ | ثور ♉ اور میزان ♎ |
| Capricorn ♑ & Aquarius ♒ | جدی ♑ اور دلو ♒ |
| Sunday | اتوار |
| Sunday Guidance | اتوار کے لیے رہنمائی |
| Monday | پیر |
| Monday Guidance | پیر کے لیے رہنمائی |
| Tuesday | منگل |
| Tuesday Guidance | منگل کے لیے رہنمائی |
| Wednesday | بدھ |
| Wednesday Guidance | بدھ کے لیے رہنمائی |
| Thursday | جمعرات |
| Thursday Guidance | جمعرات کے لیے رہنمائی |
| Friday | جمعہ |
| Friday Guidance | جمعہ کے لیے رہنمائی |
| Saturday | ہفتہ |
| Saturday Guidance | ہفتہ کے لیے رہنمائی |
| re:^Your time: Sun, (\d{1,2}:\d\d) (\S+)$ | آپ کا وقت: اتوار، $1 $p2 |
| re:^Sun (\d{1,2}:\d\d)$ | اتوار $1 |
| re:^Your time: Mon, (\d{1,2}:\d\d) (\S+)$ | آپ کا وقت: پیر، $1 $p2 |
| re:^Mon (\d{1,2}:\d\d)$ | پیر $1 |
| re:^Your time: Tue, (\d{1,2}:\d\d) (\S+)$ | آپ کا وقت: منگل، $1 $p2 |
| re:^Tue (\d{1,2}:\d\d)$ | منگل $1 |
| re:^Your time: Wed, (\d{1,2}:\d\d) (\S+)$ | آپ کا وقت: بدھ، $1 $p2 |
| re:^Wed (\d{1,2}:\d\d)$ | بدھ $1 |
| re:^Your time: Thu, (\d{1,2}:\d\d) (\S+)$ | آپ کا وقت: جمعرات، $1 $p2 |
| re:^Thu (\d{1,2}:\d\d)$ | جمعرات $1 |
| re:^Your time: Fri, (\d{1,2}:\d\d) (\S+)$ | آپ کا وقت: جمعہ، $1 $p2 |
| re:^Fri (\d{1,2}:\d\d)$ | جمعہ $1 |
| re:^Your time: Sat, (\d{1,2}:\d\d) (\S+)$ | آپ کا وقت: ہفتہ، $1 $p2 |
| re:^Sat (\d{1,2}:\d\d)$ | ہفتہ $1 |
| re:^(\S+) (\w+) — (\w+) is weakened in (\w+)$ | $1 $2 — $3 برجِ $4 میں کمزور ہے |
| re:^(\w+) is weakened in (\w+)$ | $1 برجِ $2 میں کمزور ہے |
| re:^(\S+) (\w+) — (\w+) is strong in (\w+)$ | $1 $2 — $3 برجِ $4 میں قوی ہے |
| re:^(\w+) is strong in (\w+)$ | $1 برجِ $2 میں قوی ہے |
| re:^(\S+) (\w+) — (\w+) is neutral in (\w+)$ | $1 $2 — $3 برجِ $4 میں معتدل ہے |
| re:^(\w+) is neutral in (\w+)$ | $1 برجِ $2 میں معتدل ہے |
| re:^(\S+) (\w+) — (\w+) is comfortable in (\w+)$ | $1 $2 — $3 برجِ $4 میں موافق حالت میں ہے |
| re:^(\w+) is comfortable in (\w+)$ | $1 برجِ $2 میں موافق حالت میں ہے |
| re:^(\w+) status: (\w+)$ | $1 کی حالت: $2 |
| re:^(\d{1,2}:\d\d (?:AM\|PM)) → (\d{1,2}:\d\d (?:AM\|PM))$ | ⁦$p1 → $p2⁩ |
| re:^(\d{1,2}:\d\d (?:AM\|PM))$ | ⁦$p1⁩ |
| re:^· hour of (\w+)$ | · $1 کی ساعت |
| re:^(Day\|Night) · Hour (\d+)$ | $1 · ساعت $2 |
| Asrār | اسرار |
| Sign In | سائن ان |
| Maghribi | مغربی |
| Mashriqi | مشرقی |
| Maghribi (the Maghreb, al-Andalus & West Africa) · Mashriqi (Egypt, the Middle East & Asia) | مغربی (مراکش تا لیبیا، اندلس اور مغربی افریقہ) · مشرقی (مصر، مشرقِ وسطیٰ اور برصغیر سمیت ایشیا) |
| Educational Tool: | تعلیمی ٹول: |
| Best Dates | بہترین تاریخیں |
| Dates | تاریخیں |
| Compatibility | مطابقت |
| Calculator | کیلکولیٹر |
| Today | آج |
| Real-time insights based on traditional Islamic celestial science and Chaldean planetary hours. | روایتی اسلامی فلکیاتی علم اور کلدانی ساعاتِ کواکب پر مبنی بروقت معلومات۔ |
| Planetary Hour | سیارے کی ساعت |
| Moment Alignment | اس وقت کی موافقت |
| Cautious | محتاط |
| Auspicious | موافق |
| Moderate | معتدل |
| Night | رات |
| Day | دن |
| Hour | ساعت |
| Remaining | باقی |
| Time remaining | باقی وقت |
| Softens difficulties and eases hardship | مشکلات کو نرم اور سختی کو آسان کرتا ہے |
| For grounding, patience, and steadiness | ٹھہراؤ، صبر اور استقامت کے لیے |
| For radiance, success, and vitality | رونق، کامیابی اور توانائی کے لیے |
| Current Hour Ruler - | موجودہ ساعت کا حاکم - |
| Next Planet Hour | اگلی ساعت |
| Fire | آگ |
| Water | پانی |
| Air | ہوا |
| Earth | مٹی |
| air | ہوا |
| fire | آگ |
| water | پانی |
| earth | مٹی |
| Starts | آغاز |
| See All Hours | تمام ساعتیں دیکھیں |
| Full Guide → | مکمل رہنمائی ← |
| Planet of the Day | آج کا سیارہ |
| Planet of the Day - | آج کا سیارہ - |
| Passionate & energizing | پرجوش اور توانائی بخش |
| Current Position | موجودہ مقام |
| Best For | موزوں کام |
| Best for | موزوں کام |
| Leadership | قیادت |
| Starting projects | نئے منصوبے شروع کرنا |
| Physical activities | جسمانی سرگرمیاں |
| Bold decisions | جرات مندانہ فیصلے |
| Practice Level | عمل کی سطح |
| Focus | توجہ |
| · Waxing Crescent | · بڑھتا ہلال |
| · First Quarter | · پہلی چوتھائی |
| · Waxing Gibbous | · بڑھتا محدب چاند |
| · Full Moon | · بدر (پورا چاند) |
| · Waning Gibbous | · گھٹتا محدب چاند |
| · Last Quarter | · آخری چوتھائی |
| · Waning Crescent | · گھٹتا ہلال |
| · New Moon | · نیا چاند |
| ▶ Activities & wisdom (educational) | ▶ سرگرمیاں اور حکمت (تعلیمی) |
| Planet Transits | سیاروں کی گردش |
| Live positions | سیاروں کے موجودہ مقامات |
| Tropical | مداری (ٹراپیکل) |
| Sidereal | نجومی (سائیڈریل) |
| Updated | تازہ ترین |
| New: Birth Profile | نیا: پیدائشی پروفائل |
| Your Sun/Moon signs, lunar mansion, day ruler, and more. | آپ کے شمسی/قمری بروج، منزلِ قمر، دن کا حاکم اور بہت کچھ۔ |
| Who Am I? | میں کون ہوں؟ |
| More | مزید |
| A platform for spiritual wisdom and divine timing exploration | روحانی حکمت اور اوقات کے مطالعے کا پلیٹ فارم |
| Important Notice | اہم اطلاع |
| Powered by | تیار کردہ |
| All rights reserved | جملہ حقوق محفوظ ہیں |
| Get the full experience — Download Asrāriya | مکمل تجربے کے لیے — اسراریہ ڈاؤن لوڈ کریں |
| Personalised spiritual guidance · Dhikr · Abjad · Planetary Hours | ذاتی روحانی رہنمائی · ذکر · ابجد · ساعاتِ کواکب |
| Open menu | مینو کھولیں |
| Help & Tutorial | مدد اور رہنمائی |
| Send Feedback | رائے بھیجیں |
| Dismiss | بند کریں |
| Primary navigation | مرکزی نیویگیشن |
| Get it on Google Play | ⁦Google Play⁩ سے حاصل کریں |
| Quick Tips | مختصر مشورے |
| Learn | سیکھیں |
| Discover Your Spiritual Profile | اپنا روحانی پروفائل دریافت کریں |
| Step 1: Enter Names | مرحلہ 1: نام لکھیں |
| Step 2: View Results | مرحلہ 2: نتائج دیکھیں |
| About This Science | اس علم کے بارے میں |
| What You'll Discover | آپ کیا جانیں گے |
| Choose Calculation Method: | حساب کا طریقہ منتخب کریں: |
| Name-Based | نام کے ذریعے |
| CLASSICAL | کلاسیکی |
| Traditional ʿIlm al-Ḥurūf method using your name + mother's name | علم الحروف کا روایتی طریقہ: آپ کا نام + والدہ کا نام |
| Birth Date | تاریخِ پیدائش |
| QUICK | فوری |
| Simpler method using only your date of birth | آسان طریقہ: صرف آپ کی تاریخِ پیدائش سے |
| Both names must be in Arabic script for accurate spiritual analysis | درست تجزیے کے لیے دونوں نام اردو یا عربی حروف میں لکھیں |
| Your Name | آپ کا نام |
| Search by Latin Name | رومن نام سے تلاش کریں |
| (optional) | (اختیاری) |
| Database-backed suggestions as you type | لکھتے وقت ڈیٹا بیس سے تجاویز |
| Database-backed suggestions | ڈیٹا بیس سے تجاویز |
| Arabic Name | عربی نام |
| Show Keyboard | کی بورڈ دکھائیں |
| Show keyboard | کی بورڈ دکھائیں |
| Mother's Name | والدہ کا نام |
| Need help? See example names | مدد چاہیے؟ مثالی نام دیکھیں |
| Discover My Profile | میرا پروفائل دیکھیں |
| Clear | صاف کریں |
| Both names are required for accurate guidance | درست رہنمائی کے لیے دونوں نام ضروری ہیں |
| Privacy & Security | رازداری اور حفاظت |
| Invite your loved ones | اپنے پیاروں کو دعوت دیں |
| Share sacred wisdom — invite friends to discover their spiritual profile | مقدس حکمت بانٹیں — دوستوں کو اپنا روحانی پروفائل دیکھنے کی دعوت دیں |
| Invite | دعوت دیں |
| Share | شیئر کریں |
| Learning Center | سیکھنے کا مرکز |
| Type to search: Muhammad, Ali, Hassan... | تلاش کے لیے لکھیں: ⁦Muhammad, Ali, Hassan…⁩ |
| Type to search: Fatima, Aisha, Khadija... | تلاش کے لیے لکھیں: ⁦Fatima, Aisha, Khadija…⁩ |
| Export | ایکسپورٹ |
| Overview | جائزہ |
| Quick summary | مختصر خلاصہ |
| Quick Summary | مختصر خلاصہ |
| Personality | شخصیت |
| Your nature | آپ کی فطرت |
| Career Guidance | پیشہ ورانہ رہنمائی |
| Career paths | پیشہ ورانہ راستے |
| Career Paths | پیشہ ورانہ راستے |
| Blessed Day | مبارک دن |
| Power day | خاص دن |
| New Calculation | نیا حساب |
| Your Profile | آپ کا پروفائل |
| DOMINANT ELEMENT | غالب عنصر |
| Element | عنصر |
| Overall Alignment | مجموعی ہم آہنگی |
| Career Match | پیشے کی مناسبت |
| Spiritual Practice | روحانی عمل |
| Your Numbers | آپ کے اعداد |
| ID Number | شناختی عدد |
| Total | کل |
| Ḥadad Value | عدد کی قیمت |
| Count | تعداد |
| Repetitions | تکرار |
| Your Power Day | آپ کا خاص دن |
| Most auspicious for important decisions | روایت میں اہم کاموں کے لیے موزوں سمجھا جاتا ہے |
| Core Trait | بنیادی خصوصیت |
| Key Insights | اہم نکات |
| categories | زمرے |
| Best practiced on | بہتر وقت |
| Wednesday night | شبِ بدھ (منگل کی شام) |
| Social Strengths | سماجی خوبیاں |
| Your Colors | آپ کے رنگ |
| Key Recommendation | اہم مشورہ |
| Priority | ترجیح |
| Your spiritual profile at a glance | آپ کا روحانی پروفائل ایک نظر میں |
| Career Direction | پیشہ ورانہ سمت |
| Daily Practice | روزانہ کا عمل |
| Recite daily for spiritual balance | روحانی توازن کے لیے روزانہ پڑھیں |
| Next Steps | اگلے قدم |
| ASRĀR · COMPATIBILITY | اسرار · مطابقت |
| Explore relationship harmony through Islamic numerology | اسلامی علم الاعداد کے ذریعے رشتوں کی ہم آہنگی پر غور کریں |
| Person to Person | دو افراد کا موازنہ |
| By Names | ناموں سے |
| By Birth Date | تاریخِ پیدائش سے |
| Enter Two Names | دو نام لکھیں |
| Calculate the Soul Connection using traditional Islamic numerology | روایتی اسلامی علم الاعداد سے روحانی ربط کا حساب کریں |
| Read this as... | اسے اس لحاظ سے پڑھیں... |
| Universal | عمومی |
| Marriage | شادی |
| Friendship | دوستی |
| Family | خاندان |
| Work | کام |
| Person 1 | پہلا فرد |
| Person 2 | دوسرا فرد |
| Calculate Soul Connection | روحانی ربط کا حساب کریں |
| Relationship context | رشتے کی نوعیت |
| Soul Connection | روحانی ربط |
| A traditional soul-resonance marker from ʿIlm al-Ḥurūf | علم الحروف سے روحانی ہم آہنگی کی ایک روایتی علامت |
| Independent metric | الگ پیمانہ |
| OF NINE | نو میں سے |
| Caution | احتیاط |
| Guidance | رہنمائی |
| Protection | حفاظت |
| Meaning | مفہوم |
| Outlook | پہلو |
| Marriage Outlook | شادی کے پہلو |
| Friendship Outlook | دوستی کے پہلو |
| Family Outlook | خاندانی پہلو |
| Work Outlook | کام کے پہلو |
| Watch Out | احتیاط کے پہلو |
| Key to Success | کامیابی کی کنجی |
| How this number is calculated | یہ عدد کیسے نکالا جاتا ہے |
| Calculate Another Pair | ایک اور جوڑے کا حساب کریں |
| Classical letter-value analysis for any Arabic text | کسی بھی عربی متن کے حروف کی قیمتوں کا کلاسیکی تجزیہ |
| Calculation Type | حساب کی قسم |
| What would you like to calculate? | آپ کس چیز کا حساب کرنا چاہتے ہیں؟ |
| 9 calculators | 9 کیلکولیٹر |
| Name & Text Analysis | نام اور متن کا تجزیہ |
| Name | نام |
| Calculates the Abjad value and letter correspondences for a single name. | ایک نام کی ابجد قیمت اور حروف کی نسبتیں نکالتا ہے۔ |
| Phrase | عبارت |
| Analyzes any Arabic sentence or phrase using the Abjad letter-value system. | ابجد کے نظام سے کسی بھی عربی جملے یا عبارت کا تجزیہ کرتا ہے۔ |
| General | عام |
| Calculates the Abjad value of any Arabic text or individual letters. | کسی بھی عربی متن یا الگ حروف کی ابجد قیمت نکالتا ہے۔ |
| Calculates the Abjad value of a selected Divine Name and a suggested dhikr count. | منتخب اسمِ الٰہی کی ابجد قیمت اور ذکر کی تجویز کردہ تعداد نکالتا ہے۔ |
| Finds the Divine Name that resonates with a name through the 28-letter Abjad cycle. | 28 حروف کے ابجد دور کے ذریعے وہ اسمِ الٰہی معلوم کرتا ہے جو کسی نام سے ہم آہنگ ہو۔ |
| Surfaces a Qur'anic verse for reflection based on a name's numerical value. | نام کی عددی قیمت کی بنیاد پر تدبر کے لیے ایک قرآنی آیت سامنے لاتا ہے۔ |
| Calculates the Abjad value of a specific Qur'anic verse (Surah + Ayah). | کسی مخصوص قرآنی آیت (سورت + آیت) کی ابجد قیمت نکالتا ہے۔ |
| Finds the Islamic (Hijri) month of your birth date and its traditional sadaqah guidance. | آپ کی تاریخِ پیدائش کا اسلامی (ہجری) مہینہ اور اس کے لیے صدقے کی روایتی رہنمائی معلوم کرتا ہے۔ |
| Finds traditional sadaqah guidance for a day of birth or a day you plan to give. | پیدائش کے دن کے لیے، یا جس دن آپ صدقہ دینا چاہتے ہیں اس کے لیے روایتی رہنمائی دیتا ہے۔ |
| Abjad calculator | ابجد کیلکولیٹر |
| Search calculators | کیلکولیٹر تلاش کریں |
| All calculators | تمام کیلکولیٹر |
| Calculate | حساب کریں |
| Back to Home | ہوم پر واپس |
| Planetary Hours | ساعاتِ کواکب |
| What are Planetary Hours? | ساعاتِ کواکب کیا ہیں؟ |
| Current Planetary Hour | موجودہ ساعت |
| 🗓 How to Use Planetary Hours | 🗓 ساعاتِ کواکب کیسے استعمال کریں |
| Check the current planetary hour above — note the ruling planet, element, and remaining time. | اوپر موجودہ ساعت دیکھیں — حاکم سیارہ، عنصر اور باقی وقت نوٹ کریں۔ |
| Match your intended action to the planet's strengths (see guide below). Schedule important activities during supportive hours. | اپنے ارادہ کردہ کام کو سیارے کی خوبیوں سے ملائیں (نیچے رہنمائی دیکھیں)۔ اہم کام موافق ساعتوں میں رکھیں۔ |
| Use "See All Hours" to plan ahead. The first hour of the day is ruled by that day's planet. | پیشگی منصوبہ بندی کے لیے “تمام ساعتیں دیکھیں” استعمال کریں۔ دن کی پہلی ساعت پر اسی دن کا سیارہ حاکم ہوتا ہے۔ |
| 🪐 Planetary Hour Guide | 🪐 ساعاتِ کواکب کی رہنمائی |
| Leadership decisions | قیادت کے فیصلے |
| Visibility & reputation | شہرت اور ساکھ |
| Official matters | سرکاری معاملات |
| Seeking authority | منصب اور ذمہ داری کے معاملات |
| Spiritual elevation | روحانی بلندی |
| Travel & movement | سفر اور نقل و حرکت |
| Emotional healing | جذباتی شفا |
| Family matters | گھریلو معاملات |
| Dreams & intuition | خواب اور وجدان |
| New beginnings | نئی شروعات |
| Courage & action | ہمت اور عمل |
| Physical work | جسمانی کام |
| Overcoming obstacles | رکاوٹوں پر قابو |
| Surgery (if needed) | سرجری (اگر ضروری ہو) |
| Cutting ties | نقصان دہ معاملات یا شراکتیں ختم کرنا |
| Study & learning | پڑھائی اور سیکھنا |
| Writing & communication | تحریر اور رابطہ |
| Trade & contracts | تجارت اور معاہدے |
| Teaching | تدریس |
| Mental work | ذہنی کام |
| Wealth & abundance | دولت اور فراوانی |
| Expansion & growth | وسعت اور ترقی |
| Long journeys | لمبے سفر |
| Higher education | اعلیٰ تعلیم |
| Love & relationships | محبت اور تعلقات |
| Beauty & art | حسن اور فن |
| Harmony & peace | ہم آہنگی اور امن |
| Social gatherings | سماجی اجتماعات |
| Long-term planning | طویل مدتی منصوبہ بندی |
| Discipline & structure | نظم و ضبط |
| Land & property | زمین اور جائیداد |
| Legal matters | قانونی معاملات |
| Endurance practices | برداشت کی مشق |
| 📐 The Chaldean Order | 📐 کلدانی ترتیب |
| The 7 planets cycle in this fixed sequence, each hour ruled by the next planet: | سات سیارے اس مقررہ ترتیب میں گردش کرتے ہیں، اور ہر ساعت پر اگلا سیارہ حاکم ہوتا ہے: |
| After Saturn, the cycle repeats from ♄ → ♃ → ♂ → ☉ → ♀ → ☿ → ☽ → ♄... | زحل کے بعد یہ دور پھر سے دہرایا جاتا ہے: ♄ → ♃ → ♂ → ☉ → ♀ → ☿ → ☽ → ♄... |
| The Daily Ruling Planet | دن کا حاکم سیارہ |
| Today's Ruling Planet | آج کا حاکم سیارہ |
| Fire ♦ Masculine | آگ ♦ مذکر |
| Water ♦ Feminine | پانی ♦ مؤنث |
| Air ♦ Neutral | ہوا ♦ ممتزج |
| Air ♦ Masculine | ہوا ♦ مذکر |
| Earth ♦ Feminine | مٹی ♦ مؤنث |
| Earth ♦ Masculine | مٹی ♦ مذکر |
| 📅 The Seven Days & Their Planets | 📅 سات دن اور ان کے سیارے |
| Vitality, authority, fame, clarity, honour, generosity, willpower | توانائی، اختیار، شہرت، وضاحت، عزت، سخاوت، قوتِ ارادی |
| Emotions, intuition, memory, nurturing, cycles, dreams, receptivity | جذبات، وجدان، یادداشت، پرورش، ادوار، خواب، قبولیت |
| Courage, energy, action, conflict, drive, assertion, cutting through obstacles | ہمت، توانائی، عمل، کشمکش، لگن، اعتماد، رکاوٹوں کو عبور کرنا |
| Intellect, communication, trade, learning, adaptability, writing, wit | عقل، رابطہ، تجارت، علم، لچک، تحریر، ذہانت |
| Expansion, wisdom, generosity, justice, abundance, growth, spirituality | وسعت، حکمت، سخاوت، عدل، فراوانی، ترقی، روحانیت |
| Love, beauty, harmony, art, pleasure, relationships, grace | محبت، حسن، ہم آہنگی، فن، مسرت، تعلقات، وقار |
| Discipline, structure, patience, endurance, limitation, mastery, wisdom through hardship | نظم و ضبط، ترتیب، صبر، برداشت، حدود، مہارت، سختی سے حاصل ہونے والی حکمت |
| 📐 Rulerships & Exaltations | 📐 بیوت اور شرف |
| Each planet has a zodiac sign where it is at home (domicile/rulership) and one where it is especially powerful (exaltation). | ہر سیارے کا ایک برج ایسا ہے جو اس کا اپنا گھر (بیت) ہے، اور ایک ایسا جہاں وہ خاص طور پر قوی ہوتا ہے (شرف)۔ |
| Occasion | موقع |
| Travel | سفر |
| Business / Contracts | کاروبار / معاہدے |
| Starting a Business | کاروبار کا آغاز |
| Medical Treatment | علاج |
| Moving / Building | منتقلی / تعمیر |
| Education / Studies | تعلیم / پڑھائی |
| Check My Date | میری تاریخ جانچیں |
| Find Best Dates | بہترین تاریخیں تلاش کریں |
| Date | تاریخ |
| Time (optional) | وقت (اختیاری) |
| Location | مقام |
| Use my location | میرا مقام استعمال کریں |
| Mecca (default) | مکہ مکرمہ (پہلے سے طے شدہ) |
| Calculated for Mecca until you share your location. | جب تک آپ اپنا مقام نہ بتائیں، حساب مکہ مکرمہ کے لیے ہے۔ |
| Location unavailable — allow it in your browser settings to use your city. | مقام دستیاب نہیں — اپنے شہر کے لیے براؤزر کی سیٹنگز میں اجازت دیں۔ |
| Locating… | مقام معلوم کیا جا رہا ہے… |
| Check this date | یہ تاریخ جانچیں |
| From | سے |
| To | تک |
| Scan this range | یہ مدت جانچیں |
| Best time window | بہترین وقت |
| Least-afflicted time | سب سے کم متاثر وقت |
| Full breakdown | مکمل تفصیل |
| Simple | سادہ |
| Detailed | تفصیلی |
| Nearest better dates | قریب ترین بہتر تاریخیں |
| No acceptable dates found within 45 days. | 45 دن کے اندر کوئی قابلِ قبول تاریخ نہیں ملی۔ |
| Showing the best available option instead: | اس کے بجائے دستیاب بہترین انتخاب دکھایا جا رہا ہے: |
| Top 5 dates | سرفہرست 5 تاریخیں |
| Calculating… | حساب ہو رہا ہے… |
| Score | اسکور |
| Close | بند کریں |
| Link copied! | لنک کاپی ہو گیا! |
| Excellent | بہت عمدہ |
| Good | اچھا |
| Acceptable | قابلِ قبول |
| Weak | کمزور |
| Avoid | اجتناب |
| Day of the Week | ہفتے کا دن |
| Favorable Planetary Hour | موافق ساعت |
| No concern here — this factor looks neutral for this date. | یہاں کوئی تشویش نہیں — اس تاریخ کے لیے یہ عنصر معتدل ہے۔ |
| Dark of the Moon (Muḥāq) | محاق (چاند کی تاریک راتیں) |
| Moon Combust (Muḥtaraq) | قمر محترق |
| Moon Void of Course (Khāliya al-Sayr) | قمر خالی السیر (کسی سیارے سے اتصال نہیں) |
| Moon Applying to Saturn/Mars (Hard Aspect) | قمر کا زحل/مریخ سے اتصال (سخت نظر) |
| Eclipse Proximity | گرہن کی قربت |
| Moon Under the Sun’s Beams (Taḥt al-Shuʿāʿ) | قمر تحت الشعاع |
| Moon Waning | گھٹتا چاند |
| Via Combusta (Al-Ṭarīqa al-Muḥtariqa) | الطریقۃ المحترقۃ (میزان و عقرب کا مخصوص حصہ) |
| Moon in Fall or Detriment | قمر ہبوط یا وبال میں |
| Venus Combust | زہرہ محترق |
| Venus Retrograde | زہرہ رجعت میں |
| Venus in Fall or Detriment | زہرہ ہبوط یا وبال میں |
| Mercury Retrograde (Contract Signing) | عطارد رجعت میں (معاہدے پر دستخط) |
| Moon Separating from Benefics | قمر کا سعد سیاروں سے انصراف (جدا ہونا) |
| Moon Waxing, Clear of the Beams | بڑھتا چاند، شعاعوں سے باہر |
| Moon Essential Dignity | قمر کی ذاتی قوت |
| Moon Applying to Venus or Jupiter | قمر کا زہرہ یا مشتری سے اتصال |
| Venus Dignified | زہرہ اپنی قوت میں |



## 5. AI-drafted result texts (896 strings, NOT native-reviewed)

These were drafted by an AI assistant (Claude, Oct 2026), not by a native speaker, to fill the English gaps listed in open question 8. They are live on the **noindex** /ur pages only (no /ur page is indexed, in the sitemap or in hreflang). Please review them like the rest; the register follows the glossary above (traditional, reflective wording; planets are never agents). Divine Names and Qur'an text are deliberately not in this list: the Arabic comes from the data files.

To change one, edit `scripts/i18n/ur/catalog_ai_draft.py` and run `python3 scripts/i18n/ur/build_catalog.py` and `python3 scripts/i18n/ur/build_review.py`. `src/lib/urdu-result-coverage.test.ts` fails if an English source string changes without its Urdu pair.


### 5.1 Ikhtiyārāt rule explanations (Simple mode, the default) (86)

Shown per date in the rule list of the Best Dates tool. Source: `src/lib/ikhtiyarat/ruleSimplification.ts`.

| English | Urdu |
|---|---|
| The Moon is in its darkest phase right before a new moon — traditionally a time to wait, not begin. | نئے چاند سے ذرا پہلے قمر اپنے تاریک ترین مرحلے (محاق) میں ہوتا ہے — روایتی طور پر یہ انتظار کا وقت ہے، آغاز کا نہیں۔ |
| The Moon is too close to the Sun right now and appears "hidden" — this weakens its influence. | قمر اس وقت شمس کے بہت قریب ہے اور “پوشیدہ” (محترق) ہو جاتا ہے — اس سے اس کا اثر کمزور سمجھا جاتا ہے۔ |
| The Moon isn't forming any meaningful connection with another planet right now — traditionally, things begun in this state tend to fizzle out. | قمر اس وقت کسی دوسرے سیارے سے کوئی نمایاں ربط نہیں بنا رہا — روایت میں اس حالت میں شروع کیے گئے کام اکثر ادھورے رہ جاتے ہیں۔ |
| The Moon is in a tense position with Saturn or Mars right now — a traditional warning sign for this kind of start. | قمر اس وقت زحل یا مریخ کے ساتھ تناؤ والی نسبت (سخت نظر) میں ہے — اس قسم کے آغاز کے لیے یہ روایتی انتباہی علامت ہے۔ |
| A solar or lunar eclipse is happening within a day of this date — traditionally treated as an unsettled period to avoid for major beginnings. | اس تاریخ کے ایک دن کے اندر سورج یا چاند گرہن ہے — روایت میں اسے غیر مستحکم دور سمجھا جاتا ہے، اس لیے بڑے آغاز سے گریز بہتر ہے۔ |
| The Moon is close enough to the Sun to be dimmed, though not fully hidden — a mild weakening. | قمر شمس کے اتنا قریب ہے کہ اس کی روشنی ماند پڑ گئی ہے، مگر وہ مکمل پوشیدہ نہیں — یہ ہلکی کمزوری ہے۔ |
| The Moon is shrinking in light right now (waning) — traditionally less favorable for starting something new. | قمر کی روشنی اس وقت گھٹ رہی ہے (تنقیص) — نئی چیز شروع کرنے کے لیے روایتی طور پر کم موافق ہے۔ |
| The Moon is passing through a stretch of the zodiac traditionally considered turbulent (the "burning path"). | قمر اس وقت زائچے کے اس حصے سے گزر رہا ہے جسے روایت میں پُرتلاطم سمجھا جاتا ہے (“الطریقۃ المحترقۃ”)۔ |
| The Moon is in a sign where it traditionally expresses its qualities less comfortably. | قمر اس برج میں ہے جہاں وہ اپنی خصوصیات روایتی طور پر کم سہولت سے ظاہر کرتا ہے۔ |
| Venus — the planet of love and harmony — is too close to the Sun right now and appears "hidden," weakening its supportive influence. | زہرہ — محبت اور ہم آہنگی کا سیارہ — اس وقت شمس کے بہت قریب ہے اور “پوشیدہ” ہو گیا ہے، اس لیے اس کا معاون اثر کمزور سمجھا جاتا ہے۔ |
| Venus appears to be moving backward right now — traditionally a caution for matters of love and relationships. | زہرہ اس وقت الٹی چال (رجعت) میں نظر آتا ہے — محبت اور تعلقات کے معاملات میں روایتی طور پر احتیاط کی علامت ہے۔ |
| Venus is in a sign where it traditionally expresses its qualities less comfortably. | زہرہ اس برج میں ہے جہاں وہ اپنی خصوصیات روایتی طور پر کم سہولت سے ظاہر کرتا ہے۔ |
| Mercury appears to be moving backward right now — a mild caution specifically for the paperwork/contract side of things. | عطارد اس وقت الٹی چال (رجعت) میں نظر آتا ہے — خاص طور پر کاغذی کارروائی اور معاہدوں کے پہلو میں ہلکی احتیاط کی علامت ہے۔ |
| The Moon isn't currently connecting with either of the two traditionally supportive planets (Venus or Jupiter). | قمر اس وقت دونوں روایتی سعد سیاروں (زہرہ یا مشتری) میں سے کسی سے ربط نہیں بنا رہا۔ |
| The Moon is growing in light and clear of the Sun's glare right now — one of the most favorable classical signs for a fresh start. | قمر کی روشنی بڑھ رہی ہے اور وہ شمس کی چمک سے دور ہے — نئے آغاز کے لیے کلاسیکی علامات میں سب سے موافق علامتوں میں سے ایک ہے۔ |
| The Moon is in a sign it traditionally feels very at home in. | قمر ایسے برج میں ہے جہاں اسے روایتی طور پر بہت سہولت ملتی ہے۔ |
| The Moon is in the sign of its greatest traditional strength. | قمر اپنی سب سے زیادہ روایتی قوت والے برج میں ہے۔ |
| The Moon is in a sign that gives it a mild traditional boost here. | قمر ایسے برج میں ہے جو اسے یہاں روایتی طور پر ہلکی تقویت دیتا ہے۔ |
| The Moon is forming a supportive connection with Venus, the planet of love and harmony, right now. | قمر اس وقت زہرہ — محبت اور ہم آہنگی کے سیارے — کے ساتھ موافق ربط بنا رہا ہے۔ |
| The Moon is forming a supportive connection with Jupiter, the planet of growth and good fortune, right now. | قمر اس وقت مشتری — نمو اور خیر کے سیارے — کے ساتھ موافق ربط بنا رہا ہے۔ |
| Venus is in a sign it traditionally feels very at home in. | زہرہ ایسے برج میں ہے جہاں اسے روایتی طور پر بہت سہولت ملتی ہے۔ |
| Venus is in the sign of its greatest traditional strength. | زہرہ اپنی سب سے زیادہ روایتی قوت والے برج میں ہے۔ |
| This falls on Friday — the day most recommended in Islamic tradition for this occasion. | یہ جمعہ کا دن ہے — اسلامی روایت میں اس موقع کے لیے سب سے زیادہ پسندیدہ دن۔ |
| This falls on Thursday, a day traditionally seen as favorable. | یہ جمعرات کا دن ہے، جسے روایت میں موافق سمجھا جاتا ہے۔ |
| This falls on Monday, a day traditionally seen as mildly favorable. | یہ پیر کا دن ہے، جسے روایت میں ہلکا موافق سمجھا جاتا ہے۔ |
| This specific time window aligns with a planetary hour traditionally seen as supportive. | یہ مخصوص وقت ایک ایسی ساعتِ کواکب سے مطابقت رکھتا ہے جسے روایتی طور پر معاون سمجھا جاتا ہے۔ |
| The Moon is passing through a lunar "station" traditionally considered favorable for this occasion. | قمر ایسی منزل سے گزر رہا ہے جسے اس موقع کے لیے روایتی طور پر موافق سمجھا جاتا ہے۔ |
| The Moon is passing through a lunar "station" traditionally considered less favorable for this occasion. | قمر ایسی منزل سے گزر رہا ہے جسے اس موقع کے لیے روایتی طور پر کم موافق سمجھا جاتا ہے۔ |
| The Moon isn't forming any meaningful connection right now — traditionally, a journey begun in this state tends to come to nothing. | قمر اس وقت کوئی نمایاں ربط نہیں بنا رہا — روایت میں اس حالت میں شروع کیا گیا سفر اکثر بے نتیجہ رہتا ہے۔ |
| The Moon is in a tense position with Saturn or Mars right now — a traditional warning of danger or delay en route. | قمر اس وقت زحل یا مریخ کے ساتھ تناؤ والی نسبت (سخت نظر) میں ہے — راستے میں خطرے یا تاخیر کی روایتی انتباہی علامت۔ |
| The Moon is too close to the Sun right now and appears "hidden" — this weakens the traveler's own influence in the chart. | قمر اس وقت شمس کے بہت قریب ہے اور “پوشیدہ” ہو گیا ہے — اس سے زائچے میں مسافر کا اپنا اثر کمزور سمجھا جاتا ہے۔ |
| The Moon is in a sign associated with quick movement — traditionally favorable for setting out. | قمر ایسے برج میں ہے جو تیز رفتاری سے منسوب ہے — روانگی کے لیے روایتی طور پر موافق۔ |
| The Moon is in a sign associated with staying put — traditionally a caution for travel, suggesting possible delay. | قمر ایسے برج میں ہے جو ٹھہراؤ سے منسوب ہے — سفر کے لیے روایتی طور پر احتیاط کی علامت، جس میں ممکنہ تاخیر کا اشارہ ہے۔ |
| Mercury appears to be moving backward right now — traditionally linked to itinerary changes, lost documents, or mix-ups. | عطارد اس وقت الٹی چال (رجعت) میں نظر آتا ہے — روایت میں اسے سفری پروگرام کی تبدیلی، دستاویزات کے گم ہونے یا الجھن سے جوڑا جاتا ہے۔ |
| The Moon is growing in light right now — traditionally favorable for setting out and making progress. | قمر کی روشنی اس وقت بڑھ رہی ہے — روانگی اور پیش رفت کے لیے روایتی طور پر موافق ہے۔ |
| The Moon is forming a supportive connection with Venus or Jupiter right now — a sign of a smooth, well-supported journey. | قمر اس وقت زہرہ یا مشتری کے ساتھ موافق ربط بنا رہا ہے — ہموار اور معاون سفر کی علامت۔ |
| This specific time window aligns with a planetary hour traditionally seen as supportive for travel. | یہ مخصوص وقت ایک ایسی ساعتِ کواکب سے مطابقت رکھتا ہے جسے روایتی طور پر سفر کے لیے معاون سمجھا جاتا ہے۔ |
| This is an early-morning departure — the Prophet ﷺ asked Allah to bless the early mornings of his ummah. | یہ صبح سویرے کی روانگی ہے — نبی کریم ﷺ نے اللہ سے اپنی امت کی صبحوں میں برکت کی دعا فرمائی تھی۔ |
| The Moon is passing through a lunar "station" traditionally considered favorable for travel. | قمر ایسی منزل سے گزر رہا ہے جسے سفر کے لیے روایتی طور پر موافق سمجھا جاتا ہے۔ |
| The Moon is passing through a lunar "station" traditionally considered less favorable for travel. | قمر ایسی منزل سے گزر رہا ہے جسے سفر کے لیے روایتی طور پر کم موافق سمجھا جاتا ہے۔ |
| Mercury is in a comfortable position right now, supporting clear plans and communication. | عطارد اس وقت موافق حالت میں ہے، جو واضح منصوبہ بندی اور بات چیت میں معاون ہے۔ |
| This falls on Wednesday, a day traditionally linked to travel and communication. | یہ بدھ کا دن ہے، جسے روایت میں سفر اور رابطے سے جوڑا جاتا ہے۔ |
| Mercury appears to be moving backward right now — the single most-cited traditional caution against signing contracts or starting negotiations. | عطارد اس وقت الٹی چال (رجعت) میں نظر آتا ہے — معاہدوں پر دستخط یا مذاکرات کے آغاز کے خلاف سب سے زیادہ بیان کی جانے والی روایتی احتیاط۔ |
| The Moon isn't forming any meaningful connection right now — traditionally, a deal begun in this state tends to come to nothing. | قمر اس وقت کوئی نمایاں ربط نہیں بنا رہا — روایت میں اس حالت میں شروع کیا گیا سودا اکثر بے نتیجہ رہتا ہے۔ |
| Mercury is too close to the Sun right now and appears "hidden" — this weakens the deal's own significator. | عطارد اس وقت شمس کے بہت قریب ہے اور “پوشیدہ” ہو گیا ہے — اس سے سودے کی اپنی علامت کمزور سمجھی جاتی ہے۔ |
| The Moon is in a tense position with Saturn or Mars right now — a traditional warning of dispute or a deal turning sour. | قمر اس وقت زحل یا مریخ کے ساتھ تناؤ والی نسبت (سخت نظر) میں ہے — جھگڑے یا سودے کے بگڑ جانے کی روایتی انتباہی علامت۔ |
| The Moon is growing in light right now — traditionally favorable for starting and growing a venture. | قمر کی روشنی اس وقت بڑھ رہی ہے — کاروبار شروع کرنے اور بڑھانے کے لیے روایتی طور پر موافق ہے۔ |
| The Moon is forming a supportive connection with Jupiter right now — traditionally the planet of profit and gain. | قمر اس وقت مشتری — روایتی طور پر نفع اور کمائی کے سیارے — کے ساتھ موافق ربط بنا رہا ہے۔ |
| The Moon is forming a supportive connection with Venus right now — favorable for amicable dealing between both sides. | قمر اس وقت زہرہ کے ساتھ موافق ربط بنا رہا ہے — دونوں فریقوں کے درمیان خوش اسلوبی سے لین دین کے لیے موافق۔ |
| Mercury is in a sign it traditionally feels very at home in — strong for negotiation and paperwork. | عطارد ایسے برج میں ہے جہاں اسے روایتی طور پر بہت سہولت ملتی ہے — مذاکرات اور کاغذی کارروائی کے لیے مضبوط۔ |
| Mercury is in a comfortable position right now, free of traditional weaknesses. | عطارد اس وقت موافق حالت میں ہے اور روایتی کمزوریوں سے خالی ہے۔ |
| This specific time window aligns with a planetary hour traditionally seen as supportive for business. | یہ مخصوص وقت ایک ایسی ساعتِ کواکب سے مطابقت رکھتا ہے جسے روایتی طور پر کاروبار کے لیے معاون سمجھا جاتا ہے۔ |
| This falls on Wednesday or Thursday — days traditionally linked to negotiation and profit. | یہ بدھ یا جمعرات کا دن ہے — وہ دن جنہیں روایت میں مذاکرات اور نفع سے جوڑا جاتا ہے۔ |
| The Moon isn't forming any meaningful connection right now — traditionally, treatment begun in this state tends to come to nothing. | قمر اس وقت کوئی نمایاں ربط نہیں بنا رہا — روایت میں اس حالت میں شروع کیا گیا علاج اکثر بے نتیجہ رہتا ہے۔ |
| The Moon is too close to the Sun right now and appears "hidden" — traditionally, this weakens the body's own vital force in the chart. | قمر اس وقت شمس کے بہت قریب ہے اور “پوشیدہ” ہو گیا ہے — روایت میں اس سے زائچے میں جسم کی اپنی قوتِ حیات کمزور سمجھی جاتی ہے۔ |
| The Moon is in a tense position with Saturn or Mars right now — a traditional warning of complication or slow healing. | قمر اس وقت زحل یا مریخ کے ساتھ تناؤ والی نسبت (سخت نظر) میں ہے — پیچیدگی یا سست شفایابی کی روایتی انتباہی علامت۔ |
| The Moon is growing in light right now — traditionally favorable for treatments meant to build up or strengthen the body. | قمر کی روشنی اس وقت بڑھ رہی ہے — جسم کو تقویت دینے والے علاج کے لیے روایتی طور پر موافق ہے۔ |
| The Moon is forming a supportive connection with Venus or Jupiter right now — a sign of a smooth course of treatment and recovery. | قمر اس وقت زہرہ یا مشتری کے ساتھ موافق ربط بنا رہا ہے — علاج اور صحت یابی کے ہموار سلسلے کی علامت۔ |
| Jupiter — the traditional significator of recovery — is in a comfortable position right now. | مشتری — روایتی طور پر صحت یابی کی علامت — اس وقت موافق حالت میں ہے۔ |
| Mercury is in a comfortable position right now, supporting a clear diagnosis. | عطارد اس وقت موافق حالت میں ہے، جو درست تشخیص میں معاون ہے۔ |
| Mercury appears to be moving backward right now — a mild caution for the accuracy of a diagnosis. | عطارد اس وقت الٹی چال (رجعت) میں نظر آتا ہے — تشخیص کی درستی کے بارے میں ہلکی احتیاط کی علامت۔ |
| This specific time window aligns with a planetary hour traditionally seen as supportive for health matters. | یہ مخصوص وقت ایک ایسی ساعتِ کواکب سے مطابقت رکھتا ہے جسے روایتی طور پر صحت کے معاملات کے لیے معاون سمجھا جاتا ہے۔ |
| This falls on Monday or Thursday — days traditionally linked to the body and to recovery. | یہ پیر یا جمعرات کا دن ہے — وہ دن جنہیں روایت میں جسم اور صحت یابی سے جوڑا جاتا ہے۔ |
| The Moon isn't forming any meaningful connection right now — traditionally, work begun in this state tends to come to nothing. | قمر اس وقت کوئی نمایاں ربط نہیں بنا رہا — روایت میں اس حالت میں شروع کیا گیا کام اکثر بے نتیجہ رہتا ہے۔ |
| The Moon is too close to the Sun right now and appears "hidden" — this weakens the matter's own significator. | قمر اس وقت شمس کے بہت قریب ہے اور “پوشیدہ” ہو گیا ہے — اس سے اس معاملے کی اپنی علامت کمزور سمجھی جاتی ہے۔ |
| The Moon is in a tense position with Mars right now — a traditional warning of accident or damage during construction. | قمر اس وقت مریخ کے ساتھ تناؤ والی نسبت (سخت نظر) میں ہے — تعمیر کے دوران حادثے یا نقصان کی روایتی انتباہی علامت۔ |
| The Moon is in a sign associated with stability — traditionally favorable for something meant to last. | قمر ایسے برج میں ہے جو استحکام سے منسوب ہے — دیرپا چیز کے لیے روایتی طور پر موافق۔ |
| The Moon is in a sign associated with change and impermanence — the opposite of what a lasting foundation calls for. | قمر ایسے برج میں ہے جو تبدیلی اور ناپائیداری سے منسوب ہے — یہ اس کے برعکس ہے جو مضبوط بنیاد کا تقاضا ہے۔ |
| The Moon is growing in light right now — traditionally favorable for building and growing a household. | قمر کی روشنی اس وقت بڑھ رہی ہے — گھر بسانے اور گھرانے کی افزائش کے لیے روایتی طور پر موافق ہے۔ |
| The Moon is forming a supportive connection with Venus or Jupiter right now — a sign of a settled, well-supported household. | قمر اس وقت زہرہ یا مشتری کے ساتھ موافق ربط بنا رہا ہے — پُرسکون اور معاون گھرانے کی علامت۔ |
| Saturn — the traditional significator of land and foundations — is in a sign it feels very at home in. | زحل — روایتی طور پر زمین اور بنیادوں کی علامت — ایسے برج میں ہے جہاں اسے بہت سہولت ملتی ہے۔ |
| Saturn is in a comfortable position right now, supporting a solid foundation. | زحل اس وقت موافق حالت میں ہے، جو مضبوط بنیاد میں معاون ہے۔ |
| Saturn appears to be moving backward right now — traditionally linked to delays, cost overruns, or rework. | زحل اس وقت الٹی چال (رجعت) میں نظر آتا ہے — روایت میں اسے تاخیر، اخراجات کے بڑھ جانے یا کام دوبارہ کرنے سے جوڑا جاتا ہے۔ |
| This specific time window aligns with a planetary hour traditionally seen as supportive for foundations and building. | یہ مخصوص وقت ایک ایسی ساعتِ کواکب سے مطابقت رکھتا ہے جسے روایتی طور پر بنیاد رکھنے اور تعمیر کے لیے معاون سمجھا جاتا ہے۔ |
| This falls on Saturday or Thursday — days traditionally linked to foundations and a supported household. | یہ ہفتہ یا جمعرات کا دن ہے — وہ دن جنہیں روایت میں بنیادوں اور معاون گھرانے سے جوڑا جاتا ہے۔ |
| Mercury appears to be moving backward right now — the same traditional caution cited against contracts applies to starting serious study. | عطارد اس وقت الٹی چال (رجعت) میں نظر آتا ہے — معاہدوں کے خلاف جو روایتی احتیاط بیان کی جاتی ہے وہی سنجیدہ تعلیم کے آغاز پر بھی لاگو ہوتی ہے۔ |
| The Moon isn't forming any meaningful connection right now — traditionally, study begun in this state tends to come to nothing. | قمر اس وقت کوئی نمایاں ربط نہیں بنا رہا — روایت میں اس حالت میں شروع کی گئی تعلیم اکثر بے نتیجہ رہتی ہے۔ |
| Mercury is too close to the Sun right now and appears "hidden" — this weakens the significator of the intellect and study itself. | عطارد اس وقت شمس کے بہت قریب ہے اور “پوشیدہ” ہو گیا ہے — اس سے عقل اور تعلیم کی اپنی علامت کمزور سمجھی جاتی ہے۔ |
| The Moon is forming a supportive connection with Jupiter right now — traditionally the planet of wisdom and comprehension. | قمر اس وقت مشتری — روایتی طور پر حکمت اور فہم کے سیارے — کے ساتھ موافق ربط بنا رہا ہے۔ |
| The Moon is forming a supportive connection with Mercury right now — favorable for retention and a receptive mind. | قمر اس وقت عطارد کے ساتھ موافق ربط بنا رہا ہے — یادداشت اور قبول کرنے والے ذہن کے لیے موافق۔ |
| The Moon is in a tense position with Saturn or Mars right now — a traditional warning of frustration or blocked progress. | قمر اس وقت زحل یا مریخ کے ساتھ تناؤ والی نسبت (سخت نظر) میں ہے — بیزاری یا رکی ہوئی پیش رفت کی روایتی انتباہی علامت۔ |
| Mercury is in a sign it traditionally feels very at home in — strong for comprehension and memory. | عطارد ایسے برج میں ہے جہاں اسے روایتی طور پر بہت سہولت ملتی ہے — فہم اور یادداشت کے لیے مضبوط۔ |
| Jupiter is in a comfortable position right now, supporting comprehension and wisdom. | مشتری اس وقت موافق حالت میں ہے، جو فہم اور حکمت میں معاون ہے۔ |
| This specific time window aligns with a planetary hour traditionally seen as supportive for study. | یہ مخصوص وقت ایک ایسی ساعتِ کواکب سے مطابقت رکھتا ہے جسے روایتی طور پر تعلیم کے لیے معاون سمجھا جاتا ہے۔ |
| This falls on Wednesday or Thursday — days traditionally linked to the intellect and wisdom. | یہ بدھ یا جمعرات کا دن ہے — وہ دن جنہیں روایت میں عقل اور حکمت سے جوڑا جاتا ہے۔ |
| How scoring works: each rule adds or subtracts points; the total is scaled to a 0–100 score against that election type's own maximum achievable points, so the tier bands (Mumtāz, Jayyid, Maqbūl, Ḍaʿīf, Ijtanib) mean the same thing across marriage, travel, and any future election type. | اسکور کیسے بنتا ہے: ہر اصول کچھ پوائنٹس جمع یا منفی کرتا ہے؛ مجموعے کو اسی قسم کے انتخاب کے زیادہ سے زیادہ ممکنہ پوائنٹس کے مقابلے میں 0–100 کے اسکور پر لایا جاتا ہے، تاکہ درجوں (ممتاز، جیّد، مقبول، ضعیف، اجتنب) کا مطلب شادی، سفر اور آئندہ ہر قسم کے انتخاب میں ایک ہی رہے۔ |



### 5.2 Soul-connection archetypes (compatibility result) (148)

Tags, title, one-liner, meaning and outlook per context, watch-out, key to success. Source: `src/constants/soulConnectionArchetypes.ts`.

| English | Urdu |
|---|---|
| Grounded | جڑا ہوا |
| Stability | استحکام |
| Renewal | تجدید |
| The Grounded Path | جڑا ہوا راستہ |
| May start easy; later can feel stagnant | آغاز آسان ہو سکتا ہے؛ بعد میں جمود محسوس ہو سکتا ہے |
| Emotional coldness and taking each other for granted. Growth in provision may slow without conscious effort. | جذباتی سردمہری اور ایک دوسرے کو معمولی سمجھ لینا۔ شعوری کوشش کے بغیر رزق میں ترقی سست پڑ سکتی ہے۔ |
| Shared spiritual goals, regular renewal practices, gratitude, and acts of charity (sadaqah) together. | مشترکہ روحانی مقاصد، تجدید کے باقاعدہ معمولات، شکرگزاری، اور مل کر صدقہ و خیرات۔ |
| This pattern traditionally shows an easy, comfortable beginning that can settle into stagnation if never renewed. | یہ نمونہ روایتی طور پر ایک آسان اور آرام دہ آغاز دکھاتا ہے جو تجدید نہ ہونے پر جمود میں بدل سکتا ہے۔ |
| This pattern traditionally shows an easy beginning that may later feel stagnant, especially in growth and shared provision. | یہ نمونہ روایتی طور پر ایک آسان آغاز دکھاتا ہے جو بعد میں جمود محسوس ہو سکتا ہے، خاص طور پر ترقی اور مشترکہ رزق میں۔ |
| This pattern traditionally shows a friendship that starts with natural ease but can quietly stagnate without renewal. | یہ نمونہ روایتی طور پر ایسی دوستی دکھاتا ہے جو فطری آسانی سے شروع ہوتی ہے مگر تجدید کے بغیر خاموشی سے جمود کا شکار ہو سکتی ہے۔ |
| This pattern traditionally shows family closeness that begins easily but can fade into distance without active care. | یہ نمونہ روایتی طور پر ایسی خاندانی قربت دکھاتا ہے جو آسانی سے شروع ہوتی ہے مگر فعال توجہ کے بغیر دوری میں بدل سکتی ہے۔ |
| This pattern traditionally shows a working relationship that starts smoothly but can plateau without new goals. | یہ نمونہ روایتی طور پر ایسا پیشہ ورانہ تعلق دکھاتا ہے جو ہموار شروع ہوتا ہے مگر نئے اہداف کے بغیر ایک سطح پر رک سکتا ہے۔ |
| This connection often starts with ease and comfort, but can settle into routine if never renewed. Shared purpose and intentional effort keep it alive. | یہ تعلق اکثر آسانی اور آرام سے شروع ہوتا ہے، مگر تجدید نہ ہو تو معمول میں ڈھل سکتا ہے۔ مشترکہ مقصد اور شعوری کوشش اسے زندہ رکھتے ہیں۔ |
| Marriage may start smoothly but requires intentional renewal to avoid complacency. Focus on shared goals and gratitude practices. | شادی ہموار شروع ہو سکتی ہے مگر خود اطمینانی سے بچنے کے لیے شعوری تجدید ضروری ہے۔ مشترکہ اہداف اور شکرگزاری کے معمولات پر توجہ دیں۔ |
| Friendships under this pattern begin naturally and comfortably, but may drift into routine without shared activities or new experiences. Regular effort keeps the connection warm. | اس نمونے میں دوستیاں فطری اور آرام سے شروع ہوتی ہیں، مگر مشترکہ سرگرمیوں یا نئے تجربات کے بغیر معمول میں ڈھل سکتی ہیں۔ باقاعدہ کوشش تعلق کو گرم جوش رکھتی ہے۔ |
| Family ties here tend to feel steady and dependable, though closeness can fade into distance if never actively nurtured. Checking in regularly keeps the bond warm. | یہاں خاندانی رشتے مستحکم اور قابلِ اعتماد محسوس ہوتے ہیں، تاہم اگر انہیں فعال طور پر سینچا نہ جائے تو قربت دوری میں بدل سکتی ہے۔ باقاعدگی سے خیریت پوچھنا رشتے کو گرم جوش رکھتا ہے۔ |
| Working relationships start smoothly and productively, but can grow stale without new goals or challenges. Revisit shared objectives regularly to avoid complacency. | پیشہ ورانہ تعلقات ہموار اور نتیجہ خیز شروع ہوتے ہیں، مگر نئے اہداف یا چیلنجز کے بغیر پرانے پڑ سکتے ہیں۔ خود اطمینانی سے بچنے کے لیے مشترکہ مقاصد پر باقاعدگی سے نظرِ ثانی کریں۔ |
| Harmony | ہم آہنگی |
| Cooperation | تعاون |
| Companionship | رفاقت |
| The Harmonious Bond | ہم آہنگ رشتہ |
| Traditionally good for cooperation | روایتی طور پر تعاون کے لیے اچھا |
| Over-dependency and avoiding difficult conversations. One partner may lean too heavily on the other. | حد سے زیادہ انحصار اور مشکل گفتگو سے بچنا۔ ایک فریق دوسرے پر ضرورت سے زیادہ ٹیک لگا سکتا ہے۔ |
| Clear communication, shared responsibility, and maintaining individual growth alongside partnership. | واضح گفتگو، مشترکہ ذمہ داری، اور شراکت کے ساتھ ساتھ ہر فرد کی اپنی نشوونما کو برقرار رکھنا۔ |
| Traditionally considered a favorable pattern — natural cooperation and mutual understanding flow more easily than opposition. | روایتی طور پر موافق نمونہ سمجھا جاتا ہے — فطری تعاون اور باہمی سمجھ مخالفت کے مقابلے میں زیادہ آسانی سے آتی ہے۔ |
| Traditionally considered favorable for marriage. This pattern supports natural cooperation, companionship, and mutual understanding. | شادی کے لیے روایتی طور پر موافق سمجھا جاتا ہے۔ یہ نمونہ فطری تعاون، رفاقت اور باہمی سمجھ کو سہارا دیتا ہے۔ |
| Traditionally considered a favorable pattern for friendship — ease, cooperation, and mutual understanding come naturally. | دوستی کے لیے روایتی طور پر موافق نمونہ سمجھا جاتا ہے — آسانی، تعاون اور باہمی سمجھ فطری طور پر آتی ہے۔ |
| Traditionally considered a favorable pattern for family bonds — natural cooperation and understanding tend to prevail over conflict. | خاندانی رشتوں کے لیے روایتی طور پر موافق نمونہ سمجھا جاتا ہے — فطری تعاون اور سمجھ عموماً تنازع پر غالب رہتی ہے۔ |
| Traditionally considered a favorable pattern for collaboration — natural cooperation and mutual understanding support the partnership. | مل کر کام کرنے کے لیے روایتی طور پر موافق نمونہ سمجھا جاتا ہے — فطری تعاون اور باہمی سمجھ شراکت کو سہارا دیتی ہے۔ |
| This bond naturally supports cooperation and ease. Two people connected this way tend to understand each other quickly, though one may lean too heavily on the other. | یہ رشتہ فطری طور پر تعاون اور آسانی کو سہارا دیتا ہے۔ اس طرح جڑے ہوئے دو افراد ایک دوسرے کو جلد سمجھ لیتے ہیں، تاہم ایک فریق دوسرے پر ضرورت سے زیادہ انحصار کر سکتا ہے۔ |
| Marriage is traditionally supported. Companionship and teamwork are natural strengths. Guard against dependency. | شادی کو روایتی طور پر سہارا ملتا ہے۔ رفاقت اور مل کر چلنا فطری خوبیاں ہیں۔ انحصار سے بچیں۔ |
| A naturally easy, low-friction friendship — you tend to understand each other quickly and rarely clash. Watch that neither friend becomes overly reliant on the other. | فطری طور پر آسان اور کم رگڑ والی دوستی — آپ ایک دوسرے کو جلد سمجھ لیتے ہیں اور کم ہی ٹکراتے ہیں۔ خیال رکھیں کہ کوئی ایک دوست دوسرے پر حد سے زیادہ انحصار نہ کرنے لگے۔ |
| Family members connected this way tend to get along with little friction and genuine mutual understanding. Encourage each other's independence alongside the closeness. | اس طرح جڑے ہوئے اہلِ خانہ عموماً کم رگڑ کے ساتھ ایک دوسرے سے نبھاتے ہیں اور حقیقی باہمی سمجھ رکھتے ہیں۔ قربت کے ساتھ ایک دوسرے کی خود مختاری کی بھی حوصلہ افزائی کریں۔ |
| A cooperative, low-conflict working relationship where tasks divide naturally. Guard against one person carrying too much of the shared workload. | تعاون پر مبنی، کم تنازع والا پیشہ ورانہ تعلق جس میں کام فطری طور پر بٹ جاتا ہے۔ خیال رکھیں کہ مشترکہ کام کا بوجھ ایک ہی شخص پر نہ پڑ جائے۔ |
| Friction | رگڑ |
| Patience | صبر |
| Discipline | نظم و ضبط |
| The Friction Path | رگڑ کا راستہ |
| Often difficult; tension and strain | اکثر مشکل؛ تناؤ اور دباؤ |
| Constant arguments, financial instability, and emotional burnout. This path tests endurance. | مسلسل بحث، مالی عدم استحکام اور جذباتی تھکن۔ یہ راستہ برداشت کا امتحان لیتا ہے۔ |
| Patience (sabr), structured routines, spiritual discipline, and wise counsel from trusted elders. | صبر، منظم معمولات، روحانی نظم و ضبط، اور قابلِ اعتماد بزرگوں کا دانشمندانہ مشورہ۔ |
| Traditionally associated with difficulty — tension, frequent disagreements, and pressure may arise, requiring patience and discipline. | روایتی طور پر مشکل سے منسوب — تناؤ، بار بار اختلاف اور دباؤ پیدا ہو سکتا ہے، جس کے لیے صبر اور نظم و ضبط درکار ہے۔ |
| Traditionally associated with difficulty in marriage. Tension, frequent disagreements, and financial pressure may arise. | شادی میں روایتی طور پر مشکل سے منسوب۔ تناؤ، بار بار اختلاف اور مالی دباؤ پیدا ہو سکتا ہے۔ |
| Traditionally associated with difficulty — frequent small frictions and mismatched expectations may test the friendship. | روایتی طور پر مشکل سے منسوب — چھوٹی چھوٹی رگڑیں اور مختلف توقعات دوستی کا امتحان لے سکتی ہیں۔ |
| Traditionally associated with difficulty — recurring tension, sometimes over responsibilities, may strain the family bond. | روایتی طور پر مشکل سے منسوب — بار بار کا تناؤ، بعض اوقات ذمہ داریوں پر، خاندانی رشتے پر دباؤ ڈال سکتا ہے۔ |
| Traditionally associated with difficulty — friction over resources, deadlines, or decisions may strain the partnership. | روایتی طور پر مشکل سے منسوب — وسائل، آخری تاریخوں یا فیصلوں پر رگڑ شراکت پر دباؤ ڈال سکتی ہے۔ |
| This connection often carries tension and frequent friction. Patience and structure are needed to keep disagreements from escalating. | یہ تعلق اکثر تناؤ اور بار بار کی رگڑ لیے ہوتا ہے۔ اختلافات کو بڑھنے سے روکنے کے لیے صبر اور نظم درکار ہیں۔ |
| Marriage may face continuous challenges. Strain in provision and emotional harmony often requires outside support and spiritual discipline. | شادی کو مسلسل چیلنجز کا سامنا ہو سکتا ہے۔ رزق میں تنگی اور جذباتی ہم آہنگی میں دباؤ کے لیے اکثر باہر سے مدد اور روحانی نظم و ضبط کی ضرورت پڑتی ہے۔ |
| Friendships under this pattern can feel effortful — frequent small disagreements and mismatched expectations are common. The bond can hold, but needs conscious care. | اس نمونے میں دوستیاں محنت طلب محسوس ہو سکتی ہیں — چھوٹے چھوٹے اختلافات اور مختلف توقعات عام ہیں۔ رشتہ قائم رہ سکتا ہے، مگر شعوری دیکھ بھال چاہتا ہے۔ |
| Family ties here often carry recurring tension, sometimes over money or responsibilities. Structure, patience, and outside support help ease the strain. | یہاں خاندانی رشتوں میں اکثر بار بار کا تناؤ ہوتا ہے، بعض اوقات پیسوں یا ذمہ داریوں پر۔ نظم، صبر اور باہر سے مدد دباؤ کم کرتے ہیں۔ |
| Professional partnerships under this pattern often hit friction over resources, deadlines, or decisions. Clear agreements and structured communication reduce the strain. | اس نمونے میں پیشہ ورانہ شراکتوں میں اکثر وسائل، آخری تاریخوں یا فیصلوں پر رگڑ پیدا ہوتی ہے۔ واضح معاہدے اور منظم گفتگو دباؤ کم کرتے ہیں۔ |
| Burden | بوجھ |
| Health | صحت |
| Maturity | پختگی |
| The Burdened Path | بوجھل راستہ |
| Heavy trials; health and strain | بھاری آزمائشیں؛ صحت اور دباؤ |
| Burnout, neglecting physical or mental wellbeing, and resentment building from unspoken burdens. | تھکن، جسمانی یا ذہنی صحت کو نظر انداز کرنا، اور ان کہے بوجھ سے پیدا ہونے والی رنجش۔ |
| Focus on health (physical and emotional), emotional maturity, calm daily routines, and seeking therapeutic support when needed. | صحت (جسمانی اور جذباتی) پر توجہ، جذباتی پختگی، پُرسکون روزمرہ معمولات، اور ضرورت پڑنے پر ماہرانہ معاونت لینا۔ |
| Traditionally seen as a heavy pattern — health concerns and emotional strain may be present, especially without emotional maturity. | روایتی طور پر ایک بھاری نمونہ سمجھا جاتا ہے — صحت کے خدشات اور جذباتی دباؤ ہو سکتا ہے، خاص طور پر جذباتی پختگی کے بغیر۔ |
| Traditionally seen as a heavy path for marriage. Health concerns and emotional strain may be present. | شادی کے لیے روایتی طور پر ایک بھاری راستہ سمجھا جاتا ہے۔ صحت کے خدشات اور جذباتی دباؤ ہو سکتا ہے۔ |
| Traditionally seen as a heavy pattern — one friend's stress or unresolved struggles may surface within the bond. | روایتی طور پر ایک بھاری نمونہ سمجھا جاتا ہے — کسی دوست کا دباؤ یا حل طلب مسائل رشتے کے اندر ابھر سکتے ہیں۔ |
| Traditionally seen as a heavy pattern — caretaking or shared hardship, often tied to health, may mark the family bond. | روایتی طور پر ایک بھاری نمونہ سمجھا جاتا ہے — تیمارداری یا مشترکہ مشکل، جو اکثر صحت سے جڑی ہوتی ہے، خاندانی رشتے کی پہچان ہو سکتی ہے۔ |
| Traditionally seen as a heavy pattern — stress or burnout risk may surface within the working relationship. | روایتی طور پر ایک بھاری نمونہ سمجھا جاتا ہے — پیشہ ورانہ تعلق میں دباؤ یا تھکن کا خطرہ ابھر سکتا ہے۔ |
| This bond often carries a sense of weight — health, stress, or emotional burden tend to surface. Maturity and calm help carry it well. | اس رشتے میں اکثر وزن کا احساس رہتا ہے — صحت، دباؤ یا جذباتی بوجھ ابھر آتے ہیں۔ پختگی اور سکون اسے اچھی طرح نبھانے میں مدد دیتے ہیں۔ |
| Marriage may feel like a test. Health (physical or emotional) often becomes a central concern. Requires emotional maturity and calm. | شادی ایک امتحان محسوس ہو سکتی ہے۔ صحت (جسمانی یا جذباتی) اکثر مرکزی فکر بن جاتی ہے۔ اس کے لیے جذباتی پختگی اور سکون درکار ہے۔ |
| Friendships here can feel heavy at times, often surfacing one person's stress or unresolved struggles. Steady, patient support matters more than constant closeness. | یہاں دوستیاں بعض اوقات بھاری محسوس ہو سکتی ہیں، جن میں اکثر کسی ایک کا دباؤ یا حل طلب مسائل سامنے آتے ہیں۔ مسلسل قربت سے زیادہ مستقل اور صبر بھری معاونت اہم ہے۔ |
| Family bonds under this pattern often involve caretaking or shared hardship — health concerns are common threads. Calm routines and honest communication ease the load. | اس نمونے میں خاندانی رشتوں میں اکثر تیمارداری یا مشترکہ مشکل شامل ہوتی ہے — صحت کے خدشات عام کڑی ہیں۔ پُرسکون معمولات اور دیانت دارانہ گفتگو بوجھ ہلکا کرتے ہیں۔ |
| Working relationships here can feel draining, with stress or burnout as recurring risks. Clear boundaries and realistic workloads protect the partnership. | یہاں پیشہ ورانہ تعلقات تھکا دینے والے محسوس ہو سکتے ہیں، جن میں دباؤ یا تھکن بار بار کا خطرہ ہے۔ واضح حدود اور حقیقت پسندانہ کام کا بوجھ شراکت کی حفاظت کرتے ہیں۔ |
| Blessed | مبارک |
| Growth | نشوونما |
| Gratitude | شکرگزاری |
| The Blessed Path | مبارک راستہ |
| Traditionally blessed; harmony and growth | روایتی طور پر مبارک؛ ہم آہنگی اور ترقی |
| Distraction from blessings, excess in comfort, and taking abundance for granted. | نعمتوں سے توجہ ہٹنا، آسائش میں حد سے بڑھ جانا، اور فراوانی کو معمولی سمجھ لینا۔ |
| Gratitude practices, structured spiritual life together, and using blessings to support others. | شکرگزاری کے معمولات، مل کر منظم روحانی زندگی، اور نعمتوں کو دوسروں کی مدد کے لیے استعمال کرنا۔ |
| Traditionally considered very favorable — blessing, natural harmony, and growth tend to flow more easily. | روایتی طور پر بہت موافق سمجھا جاتا ہے — برکت، فطری ہم آہنگی اور ترقی زیادہ آسانی سے آتی ہے۔ |
| Traditionally considered very favorable for marriage. Associated with blessing, natural harmony, children, and spiritual growth. | شادی کے لیے روایتی طور پر بہت موافق سمجھا جاتا ہے۔ برکت، فطری ہم آہنگی، اولاد اور روحانی ترقی سے منسوب۔ |
| Traditionally considered very favorable — trust, harmony, and mutual growth tend to flow naturally in this friendship. | روایتی طور پر بہت موافق سمجھا جاتا ہے — اس دوستی میں اعتماد، ہم آہنگی اور باہمی ترقی فطری طور پر آتی ہے۔ |
| Traditionally considered very favorable — warmth, harmony, and shared growth tend to mark this family bond. | روایتی طور پر بہت موافق سمجھا جاتا ہے — اس خاندانی رشتے کی پہچان عموماً گرم جوشی، ہم آہنگی اور مشترکہ ترقی ہوتی ہے۔ |
| Traditionally considered very favorable — harmony and productive growth tend to flow naturally in this partnership. | روایتی طور پر بہت موافق سمجھا جاتا ہے — اس شراکت میں ہم آہنگی اور نتیجہ خیز ترقی فطری طور پر آتی ہے۔ |
| This connection is traditionally favorable — harmony, growth, and ease tend to flow naturally between the two. Gratitude keeps the blessing from being taken for granted. | یہ تعلق روایتی طور پر موافق ہے — دونوں کے درمیان ہم آہنگی، ترقی اور آسانی فطری طور پر چلتی ہے۔ شکرگزاری اس نعمت کو معمولی سمجھے جانے سے بچاتی ہے۔ |
| Marriage is traditionally blessed. Harmony, children, and shared spiritual life are often supported. Guard against excess and distraction. | شادی روایتی طور پر مبارک ہے۔ ہم آہنگی، اولاد اور مشترکہ روحانی زندگی کو اکثر سہارا ملتا ہے۔ زیادتی اور غفلت سے بچیں۔ |
| A genuinely blessed friendship — trust, ease, and mutual growth come naturally. Keep showing up for each other so the bond doesn't drift into complacency. | ایک حقیقی معنوں میں مبارک دوستی — اعتماد، آسانی اور باہمی ترقی فطری طور پر آتی ہے۔ ایک دوسرے کے لیے موجود رہیں تاکہ رشتہ خود اطمینانی میں نہ ڈھل جائے۔ |
| Family ties here tend to be a source of real blessing — warmth, support, and shared growth. Nurture the bond actively rather than assuming it as given. | یہاں خاندانی رشتے حقیقی برکت کا ذریعہ بنتے ہیں — گرم جوشی، سہارا اور مشترکہ ترقی۔ رشتے کو بنا بنایا سمجھنے کے بجائے فعال طور پر سینچیں۔ |
| A productive, mutually beneficial working relationship where success tends to come naturally. Stay grounded and avoid overconfidence as things go well. | ایک نتیجہ خیز، باہمی فائدے والا پیشہ ورانہ تعلق جس میں کامیابی فطری طور پر آتی ہے۔ حالات اچھے ہوں تو بھی زمین سے جڑے رہیں اور حد سے زیادہ خود اعتمادی سے بچیں۔ |
| Trial | آزمائش |
| Forgiveness | معافی |
| Self-work | خود احتسابی |
| The Trial Path | آزمائش کا راستہ |
| Quarrels and ego tests | جھگڑے اور انا کے امتحان |
| Power struggles, recurring arguments, and cycles of blame. Pride and unresolved anger amplify friction. | طاقت کی کشمکش، بار بار کی بحثیں اور الزام تراشی کے چکر۔ غرور اور حل نہ ہوا غصہ رگڑ کو بڑھا دیتے ہیں۔ |
| Conflict resolution skills, self-work (especially anger and ego), forgiveness practices, and regular spiritual remembrance (dhikr). | تنازع حل کرنے کی مہارتیں، خود احتسابی (خاص طور پر غصے اور انا میں)، معافی کے معمولات، اور باقاعدہ ذکرِ الٰہی۔ |
| Traditionally shows recurring quarrels and discord — tests of anger, pride, and ego are common until inner work is done. | روایتی طور پر بار بار کے جھگڑے اور اختلاف دکھاتا ہے — جب تک اندرونی اصلاح نہ ہو، غصے، غرور اور انا کے امتحان عام رہتے ہیں۔ |
| Traditionally shows recurring quarrels and discord in marriage. Tests of anger, pride, and ego are common. | روایتی طور پر شادی میں بار بار کے جھگڑے اور اختلاف دکھاتا ہے۔ غصے، غرور اور انا کے امتحان عام ہیں۔ |
| Traditionally shows recurring small quarrels — tests of pride and ego may repeat until self-awareness grows. | روایتی طور پر بار بار کے چھوٹے جھگڑے دکھاتا ہے — خود آگاہی بڑھنے تک غرور اور انا کے امتحان دہرائے جا سکتے ہیں۔ |
| Traditionally shows recurring discord — old patterns of pride and ego may resurface until addressed with forgiveness. | روایتی طور پر بار بار کا اختلاف دکھاتا ہے — غرور اور انا کے پرانے انداز اس وقت تک پھر ابھر سکتے ہیں جب تک انہیں معافی کے ساتھ نہ نمٹایا جائے۔ |
| Traditionally shows recurring friction — tests of ego and power may repeat until clear roles and respect are established. | روایتی طور پر بار بار کی رگڑ دکھاتا ہے — انا اور طاقت کے امتحان اس وقت تک دہرائے جا سکتے ہیں جب تک واضح کردار اور باہمی احترام قائم نہ ہو۔ |
| This bond tends to surface recurring friction tied to pride and ego. Self-awareness on both sides is what breaks the cycle. | یہ رشتہ غرور اور انا سے جڑی بار بار کی رگڑ کو ابھارتا ہے۔ دونوں طرف کی خود آگاہی ہی اس چکر کو توڑتی ہے۔ |
| Marriage often involves power struggles and repeated conflicts. Both partners must work on self-awareness and forgiveness. | شادی میں اکثر طاقت کی کشمکش اور بار بار کے تنازعات ہوتے ہیں۔ دونوں فریقوں کو خود آگاہی اور معافی پر کام کرنا ہوگا۔ |
| Friendships here often involve repeated small conflicts, sometimes over who's 'right.' Letting go of ego keeps the friendship from wearing thin. | یہاں دوستیوں میں اکثر بار بار کے چھوٹے تنازعات ہوتے ہیں، بعض اوقات اس پر کہ کون ’’صحیح‘‘ ہے۔ انا کو چھوڑ دینا دوستی کو گھسنے سے بچاتا ہے۔ |
| Family relationships under this pattern often carry old, recurring disagreements. Forgiveness and honest self-reflection are what finally shift the pattern. | اس نمونے میں خاندانی رشتوں میں اکثر پرانے اور بار بار کے اختلافات ہوتے ہیں۔ معافی اور دیانت دارانہ خود احتسابی ہی بالآخر اس انداز کو بدلتی ہے۔ |
| Working relationships here can involve power struggles or clashing egos. Clear roles and mutual respect prevent recurring conflict. | یہاں پیشہ ورانہ تعلقات میں طاقت کی کشمکش یا انا کا ٹکراؤ ہو سکتا ہے۔ واضح کردار اور باہمی احترام بار بار کے تنازع کو روکتے ہیں۔ |
| Chosen | منتخب |
| Alignment | ہم آہنگی |
| The Chosen Path | منتخب راستہ |
| Traditionally best; blessings after obstacles | روایتی طور پر بہترین؛ رکاوٹوں کے بعد برکتیں |
| Pride in the blessing, external interference early on, and assuming ease means no effort is needed. | نعمت پر غرور، شروع میں بیرونی مداخلت، اور یہ سمجھ لینا کہ آسانی کا مطلب ہے کہ کوشش کی ضرورت نہیں۔ |
| Humility, trust in divine timing, gratitude, and alignment in spiritual values. | عاجزی، اللہ کے وقت پر بھروسا، شکرگزاری، اور روحانی اقدار میں ہم آہنگی۔ |
| Traditionally considered the most favorable of all patterns — early obstacles often give way to strong blessings and alignment. | روایتی طور پر تمام نمونوں میں سب سے زیادہ موافق سمجھا جاتا ہے — ابتدائی رکاوٹیں اکثر مضبوط برکتوں اور ہم آہنگی کو راستہ دیتی ہیں۔ |
| Traditionally considered the most favorable for marriage. May face obstacles early on, but strong blessings and alignment often follow. | شادی کے لیے روایتی طور پر سب سے زیادہ موافق سمجھا جاتا ہے۔ شروع میں رکاوٹیں آ سکتی ہیں، مگر اکثر مضبوط برکتیں اور ہم آہنگی پیچھے آتی ہیں۔ |
| Traditionally considered one of the most favorable patterns for friendship — early distance often resolves into deep loyalty. | دوستی کے لیے روایتی طور پر سب سے زیادہ موافق نمونوں میں سے ایک سمجھا جاتا ہے — شروع کی دوری اکثر گہری وفاداری میں بدل جاتی ہے۔ |
| Traditionally considered one of the most favorable patterns for family bonds — early difficulty often gives way to lasting depth. | خاندانی رشتوں کے لیے روایتی طور پر سب سے زیادہ موافق نمونوں میں سے ایک سمجھا جاتا ہے — شروع کی مشکل اکثر دیرپا گہرائی کو راستہ دیتی ہے۔ |
| Traditionally considered one of the most favorable patterns for partnership — early friction often resolves into a highly aligned collaboration. | شراکت کے لیے روایتی طور پر سب سے زیادہ موافق نمونوں میں سے ایک سمجھا جاتا ہے — شروع کی رگڑ اکثر ایک نہایت ہم آہنگ تعاون میں بدل جاتی ہے۔ |
| Traditionally the most favorable connection — early obstacles often give way to a deep, aligned bond. Trust the process rather than forcing it. | روایتی طور پر سب سے زیادہ موافق تعلق — ابتدائی رکاوٹیں اکثر ایک گہرے اور ہم آہنگ رشتے کو راستہ دیتی ہیں۔ عمل کو زبردستی چلانے کے بجائے اس پر بھروسا کریں۔ |
| Marriage is traditionally highly blessed. Challenges before union often make the bond stronger. This path carries spiritual favor. | شادی روایتی طور پر بہت مبارک ہے۔ نکاح سے پہلے کی مشکلات اکثر رشتے کو مضبوط بناتی ہیں۔ اس راستے میں روحانی فضل کا پہلو ہے۔ |
| One of the strongest friendship patterns — any early distance or misunderstanding tends to resolve into a deeply loyal bond. Let it develop at its own pace. | دوستی کے مضبوط ترین نمونوں میں سے ایک — شروع کی کوئی بھی دوری یا غلط فہمی عموماً ایک گہرے وفادار رشتے میں بدل جاتی ہے۔ اسے اپنی رفتار سے پنپنے دیں۔ |
| Family bonds here often carry real depth, even if the relationship faced early distance or difficulty. What follows tends to be lasting and meaningful. | یہاں خاندانی رشتوں میں اکثر حقیقی گہرائی ہوتی ہے، چاہے رشتے کو شروع میں دوری یا مشکل کا سامنا رہا ہو۔ جو آگے آتا ہے وہ عموماً دیرپا اور بامعنی ہوتا ہے۔ |
| A strong working alliance — early friction or slow starts often lead to a highly effective, trusted partnership. Give it time to align. | ایک مضبوط پیشہ ورانہ اتحاد — شروع کی رگڑ یا سست آغاز اکثر ایک نہایت مؤثر اور قابلِ اعتماد شراکت تک لے جاتے ہیں۔ اسے ہم آہنگ ہونے کا وقت دیں۔ |
| Long-term | طویل مدتی |
| Wisdom | حکمت |
| The Path of Patience | صبر کا راستہ |
| Very good long-term; early struggles | طویل مدت میں بہت اچھا؛ شروع میں مشکلات |
| Judging the relationship too quickly in the beginning. Early friction may cause premature endings. | شروع ہی میں رشتے کے بارے میں جلد فیصلہ کر لینا۔ ابتدائی رگڑ قبل از وقت اختتام کا سبب بن سکتی ہے۔ |
| Patience (sabr), emotional intelligence, gentle communication, and giving time for mutual understanding to deepen. | صبر، جذباتی فہم، نرم گفتگو، اور باہمی سمجھ کے گہرا ہونے کے لیے وقت دینا۔ |
| Traditionally very good for the long term, though early misunderstandings are common — patience transforms this into a strong bond. | روایتی طور پر طویل مدت کے لیے بہت اچھا ہے، اگرچہ ابتدائی غلط فہمیاں عام ہیں — صبر اسے ایک مضبوط رشتے میں بدل دیتا ہے۔ |
| Traditionally very good for marriage over the long term, though early misunderstandings are common. | روایتی طور پر شادی کے لیے طویل مدت میں بہت اچھا ہے، اگرچہ ابتدائی غلط فہمیاں عام ہیں۔ |
| Traditionally very good for the long term — early awkwardness is common, but patience often builds a lasting friendship. | روایتی طور پر طویل مدت کے لیے بہت اچھا ہے — شروع کی بے ڈھنگی عام ہے، مگر صبر اکثر ایک دیرپا دوستی بنا دیتا ہے۔ |
| Traditionally very good for the long term — early distance is common, but the family bond tends to deepen with time. | روایتی طور پر طویل مدت کے لیے بہت اچھا ہے — شروع کی دوری عام ہے، مگر خاندانی رشتہ وقت کے ساتھ گہرا ہوتا جاتا ہے۔ |
| Traditionally very good for the long term — early friction is common, but patience often builds a highly reliable partnership. | روایتی طور پر طویل مدت کے لیے بہت اچھا ہے — شروع کی رگڑ عام ہے، مگر صبر اکثر ایک نہایت قابلِ بھروسا شراکت بنا دیتا ہے۔ |
| This connection often starts with confusion or misjudgment but strengthens significantly with time. Patience is what unlocks its real depth. | یہ تعلق اکثر الجھن یا غلط اندازے سے شروع ہوتا ہے مگر وقت کے ساتھ نمایاں طور پر مضبوط ہوتا ہے۔ صبر ہی اس کی حقیقی گہرائی کو کھولتا ہے۔ |
| Marriage starts with confusion or misjudgment but becomes very strong over time. Patience is the key to unlocking this bond's strength. | شادی الجھن یا غلط اندازے سے شروع ہوتی ہے مگر وقت کے ساتھ بہت مضبوط ہو جاتی ہے۔ صبر ہی اس رشتے کی طاقت کو کھولنے کی کنجی ہے۔ |
| Friendships here can start awkwardly or take time to click, but often become some of the most enduring bonds. Don't judge it too early. | یہاں دوستیاں بے ڈھنگے انداز سے شروع ہو سکتی ہیں یا ہم آہنگ ہونے میں وقت لے سکتی ہیں، مگر اکثر سب سے پائیدار رشتوں میں سے بن جاتی ہیں۔ جلد فیصلہ نہ کریں۔ |
| Family relationships under this pattern may start with distance or misunderstanding but tend to deepen meaningfully over the years. Give the bond time. | اس نمونے میں خاندانی رشتے دوری یا غلط فہمی سے شروع ہو سکتے ہیں مگر برسوں میں بامعنی طور پر گہرے ہوتے جاتے ہیں۔ رشتے کو وقت دیں۔ |
| Working relationships here often start rocky — mismatched expectations or slow trust-building — but tend to become highly reliable partnerships over time. | یہاں پیشہ ورانہ تعلقات اکثر ناہموار شروع ہوتے ہیں — مختلف توقعات یا اعتماد بننے میں سستی — مگر وقت کے ساتھ نہایت قابلِ بھروسا شراکت بن جاتے ہیں۔ |
| The Severed Path | کٹا ہوا راستہ |
| Traditionally warned against | روایتی طور پر اس سے منع کیا گیا ہے |
| Sudden separations, recurring harm cycles, and patterns that repeat despite efforts. This path requires vigilance. | اچانک جدائیاں، نقصان کے بار بار کے چکر، اور ایسے انداز جو کوشش کے باوجود دہرائے جاتے ہیں۔ اس راستے میں چوکسی درکار ہے۔ |
| Do not panic if this appears. Seek counsel from trusted spiritual guides. If already bound, increase protection practices (duʿāʾ, charity, guidance). Avoid fatalistic thinking — free will and divine mercy remain. | اگر یہ نتیجہ آئے تو گھبرائیں نہیں۔ قابلِ اعتماد روحانی رہنماؤں سے مشورہ کریں۔ اگر رشتہ پہلے سے بندھا ہوا ہے تو حفاظت کے معمولات (دعا، صدقہ، رہنمائی) بڑھا دیں۔ تقدیر پرستانہ سوچ سے بچیں — انسان کا اختیار اور اللہ کی رحمت باقی ہیں۔ |
| Traditionally warned against for binding commitments — associated with severe hardship, sudden breaks, and recurring harm. | پابند کرنے والے عہد و پیمان کے لیے روایتی طور پر اس سے منع کیا گیا ہے — شدید مشکل، اچانک ٹوٹ پھوٹ اور بار بار کے نقصان سے منسوب۔ |
| Traditionally warned against for marriage. Associated with severe hardship, sudden breaks, and recurring harm patterns. | شادی کے لیے روایتی طور پر اس سے منع کیا گیا ہے۔ شدید مشکل، اچانک ٹوٹ پھوٹ اور بار بار کے نقصان کے انداز سے منسوب۔ |
| Traditionally warned against for close, binding friendship — sudden falling-outs and recurring hurt are associated risks. | قریبی اور پابند دوستی کے لیے روایتی طور پر اس سے منع کیا گیا ہے — اچانک بگاڑ اور بار بار کی چوٹ اس سے منسوب خطرات ہیں۔ |
| Traditionally associated with real difficulty in family bonds — estrangement and recurring conflict are common risks. | خاندانی رشتوں میں روایتی طور پر حقیقی مشکل سے منسوب — بے رخی اور بار بار کا تنازع عام خطرات ہیں۔ |
| Traditionally warned against for binding partnership — sudden fallout and recurring breakdowns in trust are associated risks. | پابند شراکت کے لیے روایتی طور پر اس سے منع کیا گیا ہے — اچانک بگاڑ اور اعتماد کا بار بار ٹوٹنا اس سے منسوب خطرات ہیں۔ |
| Traditionally a difficult pattern, associated with sudden breaks and recurring strain. Extreme caution and spiritual protection are advised. | روایتی طور پر ایک مشکل نمونہ، جو اچانک ٹوٹ پھوٹ اور بار بار کے دباؤ سے منسوب ہے۔ انتہائی احتیاط اور روحانی حفاظت کا مشورہ دیا جاتا ہے۔ |
| Marriage is traditionally discouraged under this pattern. If already in this bond, increase spiritual protection practices and seek wise counsel. | اس نمونے کے تحت شادی کو روایتی طور پر ناپسند کیا گیا ہے۔ اگر آپ پہلے سے اس رشتے میں ہیں تو روحانی حفاظت کے معمولات بڑھائیں اور دانشمندانہ مشورہ لیں۔ |
| Friendships under this pattern can be prone to sudden falling-outs or repeated hurt. Approach with awareness, and don't ignore recurring red flags. | اس نمونے میں دوستیاں اچانک بگاڑ یا بار بار کی چوٹ کا شکار ہو سکتی ہیں۔ آگاہی کے ساتھ آگے بڑھیں، اور بار بار آنے والی خطرے کی علامتوں کو نظر انداز نہ کریں۔ |
| Family ties here can carry real difficulty, including estrangement or repeated conflict. Seek wise counsel and increase protective practices rather than forcing closeness. | یہاں خاندانی رشتوں میں حقیقی مشکل ہو سکتی ہے، جن میں بے رخی یا بار بار کا تنازع شامل ہے۔ زبردستی قربت پیدا کرنے کے بجائے دانشمندانہ مشورہ لیں اور حفاظتی معمولات بڑھائیں۔ |
| Professional partnerships under this pattern carry real risk — sudden fallout or repeated breakdowns in trust are common. Proceed with caution and clear agreements. | اس نمونے میں پیشہ ورانہ شراکتوں میں حقیقی خطرہ ہے — اچانک بگاڑ یا اعتماد کا بار بار ٹوٹنا عام ہے۔ احتیاط اور واضح معاہدوں کے ساتھ آگے بڑھیں۔ |



### 5.3 Lunar mansions (manāzil) shown on the planet/hour pages (277)

Name meaning, divine quality, spiritual focus, favourable/unfavourable themes, reflection line. The Arabic and transliterated mansion names are untouched. Source: `src/lib/lunarMansions.ts`.

| English | Urdu |
|---|---|
| The Two Signs | دو نشان |
| New Beginnings, Initiative | نئے آغاز، پہل |
| Starting fresh with courage and trust in Allah | ہمت اور اللہ پر بھروسے کے ساتھ نئے سرے سے آغاز |
| New ventures | نئے کام |
| Medical treatment | طبی علاج |
| Loans | قرض |
| Partnerships with strangers | اجنبیوں کے ساتھ شراکت |
| Beginnings invite intention (niyyah) and remembrance — the Moon’s stations are signs, not decrees. | آغاز نیت اور ذکر کا تقاضا کرتا ہے — قمر کی منازل نشانیاں ہیں، فیصلے نہیں۔ |
| Educational reflection (Qurʾān 10:5) | تعلیمی غور و فکر (قرآن 10:5) |
| The Little Belly | چھوٹا پیٹ |
| Nourishment, Growth | غذا، نشوونما |
| Cultivating inner strength and spiritual nourishment | باطنی قوت اور روحانی غذا کی پرورش |
| Building | تعمیر |
| Planting | کاشت |
| Business ventures | کاروباری منصوبے |
| Seeking knowledge | علم کی طلب |
| Sea travel | بحری سفر |
| Hasty decisions | جلد بازی کے فیصلے |
| As the body needs nourishment, the heart needs what draws it nearer to Allah. | جیسے جسم کو غذا چاہیے، دل کو وہ چاہیے جو اسے اللہ کے قریب کرے۔ |
| Educational reflection (anwāʾ theme) | تعلیمی غور و فکر (انواء کا موضوع) |
| The Pleiades | ثریا |
| Beauty, Abundance, Gathering | حسن، فراوانی، اجتماع |
| Appreciating divine beauty in creation and community | تخلیق اور معاشرے میں اللہ کے حسن کی قدردانی |
| Gatherings | اجتماعات |
| Reconciliation | مصالحت |
| Art and beauty | فن اور حسن |
| Separation | جدائی |
| Conflict | جھگڑا |
| Harsh speech | سخت کلامی |
| Al-Thurayyā was among the best-known stations in Arab star lore — a reminder to gather in beauty and good company. | الثریا عربوں کے علمِ نجوم میں سب سے معروف منازل میں سے تھی — حسن اور اچھی صحبت میں جمع ہونے کی یاد دہانی۔ |
| Educational reflection (anwāʾ / Al-Bīrūnī tradition of naming) | تعلیمی غور و فکر (انواء / البیرونی کی نام رکھنے کی روایت) |
| The Follower | پیچھے آنے والا |
| Loyalty, Persistence, Following Truth | وفاداری، استقامت، حق کی پیروی |
| Following the prophetic example with steadfastness | نبوی نمونے کی ثابت قدمی کے ساتھ پیروی |
| Alliances | اتحاد |
| Long-term projects | طویل مدتی منصوبے |
| Seeking teachers | اساتذہ کی تلاش |
| Study | مطالعہ |
| Breaking commitments | عہد توڑنا |
| Impulsive changes | جذباتی تبدیلیاں |
| Al-Dabarān “follows” Thurayyā across the sky — a picture of steadfast following, not blind haste. | الدبران آسمان میں ثریا کے “پیچھے چلتا” ہے — یہ ثابت قدم پیروی کی تصویر ہے، اندھی جلد بازی کی نہیں۔ |
| Educational reflection (star-name lore) | تعلیمی غور و فکر (ستاروں کے ناموں کی روایت) |
| The White Spot | سفید نشان |
| Clarity, Purification, Truth | وضاحت، تزکیہ، سچائی |
| Seeking clarity and purifying intentions | وضاحت کی طلب اور نیتوں کی صفائی |
| Spiritual purification | روحانی تزکیہ |
| Learning | سیکھنا |
| Communication | گفتگو |
| Writing | تحریر |
| Deception | دھوکا |
| Unclear contracts | غیر واضح معاہدے |
| Confusion | الجھن |
| Clarity of intention softens confusion — seek light before you speak or sign. | نیت کی وضاحت الجھن کو نرم کرتی ہے — بولنے یا دستخط کرنے سے پہلے روشنی مانگیں۔ |
| Educational reflection | تعلیمی غور و فکر |
| The Brand | داغ |
| Marking, Identity, Recognition | نشان، شناخت، پہچان |
| Recognizing one's unique spiritual purpose and calling | اپنے منفرد روحانی مقصد اور بلاوے کو پہچاننا |
| Establishing identity | شناخت قائم کرنا |
| Clear naming | واضح نام رکھنا |
| Public speaking | عوامی خطاب |
| Contracts | معاہدے |
| Anonymity | گمنامی |
| Hiding truth | حق چھپانا |
| Dishonesty | بے ایمانی |
| Names and marks in the old star calendar were for recognition — know yourself before Allah, not for show. | پرانے ستارہ کیلنڈر میں نام اور نشان پہچان کے لیے تھے — اپنے آپ کو اللہ کے سامنے پہچانیں، دکھاوے کے لیے نہیں۔ |
| The Forearm | بازو |
| Reach, Extension, Generosity | رسائی، وسعت، سخاوت |
| Extending help to others and reaching for higher wisdom | دوسروں کی مدد کے لیے ہاتھ بڑھانا اور اعلیٰ حکمت تک رسائی |
| Building alliances | اتحاد قائم کرنا |
| Expansion | وسعت |
| Selfishness | خود غرضی |
| Hoarding | ذخیرہ اندوزی |
| Isolation | تنہائی |
| The forearm that gives in charity teaches reach without grasping. | وہ بازو جو صدقے میں دیتا ہے ہمیں سکھاتا ہے کہ رسائی ہو مگر لالچ نہ ہو۔ |
| The Gap | درمیانی خلا |
| Mystery, Threshold, Sacred Space | راز، دہلیز، مقدس جگہ |
| Contemplating the mysteries of faith and divine wisdom | ایمان کے رازوں اور الٰہی حکمت پر غور |
| Meditation | مراقبہ |
| Retreat | خلوت |
| Inner work | باطنی کام |
| Spiritual practices | روحانی معمولات |
| Excessive worldly activity | حد سے زیادہ دنیوی مصروفیت |
| Noise | شور |
| Distraction | انتشارِ توجہ |
| In quiet gaps — between tasks, between breaths — remember the One who ordered the Moon’s phases. | خاموش وقفوں میں — کاموں کے درمیان، سانسوں کے درمیان — اس ہستی کو یاد کریں جس نے قمر کے مراحل کو ترتیب دیا۔ |
| Educational reflection (Qurʾān 36:39) | تعلیمی غور و فکر (قرآن 36:39) |
| The Glance | نگاہ |
| Vision, Attentiveness | بصیرت، توجہ |
| Looking with care: notice what you see before you act, and ask Allah for insight without haste. | غور سے دیکھنا: عمل سے پہلے جو دیکھیں اسے محسوس کریں، اور جلدی کیے بغیر اللہ سے بصیرت مانگیں۔ |
| Careful observation | محتاط مشاہدہ |
| Reviewing plans | منصوبوں پر نظرِ ثانی |
| Seeking counsel | مشورہ لینا |
| Hasty judgments | جلد بازی کے فیصلے |
| Gossip | غیبت |
| Spying on others | دوسروں کی جاسوسی |
| Manāzil al-qamar are stations for reflection and timing adab — not prediction of the unseen. | منازلِ قمر غور و فکر اور اوقات کے آداب کے مقامات ہیں — غیب کی پیش گوئی نہیں۔ |
| Educational framing (Qurʾān 10:5; 36:39) | تعلیمی پس منظر (قرآن 10:5؛ 36:39) |
| The Forehead | پیشانی |
| Dignity, Responsibility | وقار، ذمہ داری |
| Carry dignity with humility — leadership here means service and clear intention before Allah. | وقار کو عاجزی کے ساتھ اٹھائیں — یہاں قیادت کا مطلب خدمت اور اللہ کے سامنے واضح نیت ہے۔ |
| Formal commitments | رسمی وعدے |
| Public trust | عوامی اعتماد |
| Marriage discussions | رشتے کی بات چیت |
| Arrogance | تکبر |
| Empty show | کھوکھلا دکھاوا |
| Neglecting counsel | مشورے کو نظر انداز کرنا |
| The Mane | ایال |
| Strength, Presence | قوت، موجودگی |
| Strength is a trust: use presence to protect and encourage, not to dominate. | قوت ایک امانت ہے: موجودگی کو تحفظ اور حوصلہ افزائی کے لیے استعمال کریں، غلبہ پانے کے لیے نہیں۔ |
| Encouraging others | دوسروں کی حوصلہ افزائی |
| Steady work | مسلسل کام |
| Protecting the vulnerable | کمزوروں کی حفاظت |
| Long efforts | طویل کوششیں |
| Boastfulness | شیخی |
| Aggression | جارحیت |
| Wasting energy | توانائی ضائع کرنا |
| The Changer | بدلنے والا |
| Transition, Turning | تبدیلی، موڑ |
| Seasons turn: release what no longer serves, and turn toward what Allah has made clearer. | موسم بدلتے ہیں: جو اب کام کا نہیں اسے چھوڑیں، اور اس طرف رخ کریں جسے اللہ نے زیادہ واضح کر دیا ہے۔ |
| Course corrections | راستے کی اصلاح |
| Ending harmful habits | نقصان دہ عادات ترک کرنا |
| Repentance | توبہ |
| Reorganizing | ازسرِ نو ترتیب |
| Clinging to the obsolete | فرسودہ چیزوں سے چمٹے رہنا |
| Forced abrupt breaks without counsel | مشورے کے بغیر زبردستی اچانک ٹوٹ پھوٹ |
| The Barker | بھونکنے والا |
| Gathering, Calling | اجتماع، پکار |
| Call others to what is good — a voice used for gathering and warning, not for needless noise. | دوسروں کو نیکی کی طرف بلائیں — آواز کو جمع کرنے اور خبردار کرنے کے لیے استعمال کریں، بے وجہ شور کے لیے نہیں۔ |
| Community work | اجتماعی کام |
| Clear announcements | واضح اعلانات |
| Spreading alarm without cause | بلاوجہ خوف پھیلانا |
| Division | تفرقہ |
| The Unarmed | بے ہتھیار |
| Balance, Harvest | توازن، فصل |
| Al-Simāk al-Aʿzal (“the unarmed”) invites fair measure — harvest with gratitude, without grasping. | السماک الاعزل (“بے ہتھیار”) منصفانہ ناپ تول کی دعوت دیتا ہے — شکرگزاری کے ساتھ فصل کاٹیں، لالچ کے بغیر۔ |
| Fair dealing | منصفانہ لین دین |
| Harvest and completion of work | فصل کی کٹائی اور کام کی تکمیل |
| Partnerships | شراکتیں |
| Beauty with restraint | ضبط کے ساتھ حسن |
| Greed | لالچ |
| Unfair advantage | ناجائز فائدہ |
| Neglecting zakāh and rights | زکوٰۃ اور حقوق کو نظر انداز کرنا |
| The Covering | پردہ |
| Covering, Discretion | پردہ پوشی، رازداری |
| Cover faults — your own and others’ — and prefer discretion over exposure. | عیب چھپائیں — اپنے بھی اور دوسروں کے بھی — اور پردہ فاش کرنے پر رازداری کو ترجیح دیں۔ |
| Private repentance | نجی توبہ |
| Protecting privacy | رازداری کا تحفظ |
| Quiet charity | خاموش صدقہ |
| Exposing others | دوسروں کو بے نقاب کرنا |
| Scandal | رسوائی |
| Public shaming | سرِعام شرمندہ کرنا |
| The Claws | پنجے |
| Boundaries, Careful Cuts | حدود، محتاط کاٹ |
| Set boundaries with justice: cut what harms, without cruelty. | انصاف کے ساتھ حدود قائم کریں: جو نقصان دہ ہے اسے کاٹیں، بغیر سنگدلی کے۔ |
| Clear agreements | واضح معاہدے |
| Ending harmful ties with adab | نقصان دہ تعلقات کو ادب کے ساتھ ختم کرنا |
| Legal clarity | قانونی وضاحت |
| Self-discipline | ضبطِ نفس |
| Spiteful severance | کینہ پرور قطع تعلق |
| Ambiguous contracts | مبہم معاہدے |
| Unnecessary conflict | غیر ضروری جھگڑا |
| The Crown | تاج |
| Honor, Trust | عزت، امانت |
| Honor is a trust worn lightly — crowns in the sky remind of responsibility, not entitlement. | عزت ایک امانت ہے جسے ہلکے پن سے پہنا جاتا ہے — آسمان کے تاج ذمہ داری کی یاد دلاتے ہیں، استحقاق کی نہیں۔ |
| Keeping trusts | امانتوں کی حفاظت |
| Formal roles | رسمی ذمہ داریاں |
| Guarding dignity | وقار کی حفاظت |
| Responsible leadership | ذمہ دارانہ قیادت |
| Pride | غرور |
| Betrayal of trust | امانت میں خیانت |
| Seeking status for its own sake | محض مرتبے کی خاطر مرتبہ چاہنا |
| The Heart | دل |
| Sincerity, Courage of Heart | اخلاص، دل کی ہمت |
| Return to the heart: sincerity (ikhlāṣ) before intensity — courage without crushing others. | دل کی طرف لوٹیں: شدت سے پہلے اخلاص — بغیر دوسروں کو کچلے ہمت۔ |
| Heartfelt duʿāʾ | دل سے دعا |
| Honest conversations | دیانت دارانہ گفتگو |
| Courageous apology | جرأت مندانہ معذرت |
| Deep study | گہرا مطالعہ |
| Hard-heartedness | سنگدلی |
| Emotional recklessness | جذباتی بے احتیاطی |
| Crushing speech | کچل دینے والی گفتگو |
| The Sting | ڈنک |
| Restraint, Defense of Dignity | ضبط، وقار کا دفاع |
| The sting is for defense, not attack — restrain the tongue and hand unless justice requires otherwise. | ڈنک دفاع کے لیے ہے، حملے کے لیے نہیں — جب تک انصاف کا تقاضا نہ ہو زبان اور ہاتھ کو روکے رکھیں۔ |
| Self-restraint | ضبطِ نفس |
| Protecting the weak | کمزوروں کی حفاظت |
| Cautious travel planning | احتیاط کے ساتھ سفر کی منصوبہ بندی |
| Saying less | کم بولنا |
| Retaliation for ego | انا کی خاطر بدلہ |
| Provocation | اشتعال دلانا |
| Reckless risk | بے احتیاطی کا خطرہ |
| The Ostriches | شتر مرغ |
| Journey, Openness | سفر، کشادگی |
| Wide spaces invite travel of body and heart — move with tawakkul and good company. | وسیع جگہیں جسم اور دل دونوں کے سفر کی دعوت دیتی ہیں — توکل اور اچھی صحبت کے ساتھ چلیں۔ |
| Exploration of knowledge | علم کی کھوج |
| Outdoor work | کھلی فضا میں کام |
| Expanding horizons with adab | آداب کے ساتھ افق کی وسعت |
| Aimless wandering | بے مقصد آوارہ گردی |
| Leaving duties unfinished | فرائض ادھورے چھوڑنا |
| Isolation from good counsel | اچھے مشورے سے دوری |
| The City | شہر |
| Settlement, Order | آباد ہونا، نظم |
| Cities need order and neighbors’ rights — settle what is due before chasing the next road. | شہروں کو نظم اور پڑوسیوں کے حقوق چاہییں — اگلے راستے کے پیچھے جانے سے پہلے جو واجب ہے وہ ادا کریں۔ |
| Settling affairs | معاملات نمٹانا |
| Neighborhood care | پڑوس کا خیال |
| Local commitments | مقامی ذمہ داریاں |
| Organizing home | گھر کی ترتیب |
| Neglecting neighbors' rights | پڑوسیوں کے حقوق نظر انداز کرنا |
| Chaos in commitments | ذمہ داریوں میں انتشار |
| Fleeing responsibility | ذمہ داری سے فرار |
| The Fortunate Sacrificer | سعد ذابح (قربانی کرنے والا) |
| Offering, Commitment | پیشکش، وعدہ |
| Named among the saʿd stations: reflect on what you are willing to offer — wealth, time, ego — for Allah’s sake. (Educational theme only; not a ritual prescription.) | سعد منازل میں شمار ہوتی ہے: غور کریں کہ آپ اللہ کی خاطر کیا پیش کرنے کو تیار ہیں — مال، وقت، انا۔ (محض تعلیمی موضوع؛ کوئی عبادتی نسخہ نہیں۔) |
| Charitable giving | خیرات و صدقات |
| Keeping vows | منتوں اور وعدوں کی پاسداری |
| Serious commitments | سنجیدہ وعدے |
| Simplifying lifestyle | طرزِ زندگی کو سادہ بنانا |
| Wasteful spending | فضول خرچی |
| Empty vows | کھوکھلے وعدے |
| Harming animals or people | جانوروں یا انسانوں کو نقصان پہنچانا |
| The Fortunate Swallower | سعد بلع (نگل لینے والا) |
| Depth, Absorption | گہرائی، جذب |
| Absorb lessons slowly: take in knowledge and counsel, then digest before speaking. | اسباق کو آہستہ آہستہ جذب کریں: علم اور مشورہ لیں، پھر بولنے سے پہلے اسے ہضم کریں۔ |
| Listening | سننا |
| Patience with difficulty | مشکل میں صبر |
| Swallowing anger into resentment | غصے کو نگل کر رنجش بنا لینا |
| Consuming without reflection | بغیر سوچے سمجھے لینا |
| Overindulgence | حد سے زیادہ لذت پرستی |
| The Most Fortunate | سب سے زیادہ سعد |
| Gratitude, Hope | شکرگزاری، امید |
| Named “most fortunate” in the star calendar — meet ease with shukr, and hardship with hope in Allah alone. | ستاروں کے کیلنڈر میں “سب سے زیادہ سعد” کہلاتی ہے — آسانی کو شکر کے ساتھ اور مشکل کو صرف اللہ سے امید کے ساتھ ملیں۔ |
| Gratitude practices | شکرگزاری کے معمولات |
| Beginning hopeful works | پُرامید کاموں کا آغاز |
| Sharing ease with others | آسانی دوسروں کے ساتھ بانٹنا |
| Taking ease for granted | آسانی کو معمولی سمجھ لینا |
| Complacency | خود اطمینانی |
| Forgetting the Giver | عطا کرنے والے کو بھول جانا |
| The Fortunate Tents | سعد کے خیمے |
| Shelter, Hospitality | پناہ، مہمان نوازی |
| Tents mean shelter and guests: open your space with generosity and guard those who seek safety. | خیموں کا مطلب پناہ اور مہمان ہے: فراخ دلی سے اپنی جگہ کھولیں اور پناہ مانگنے والوں کی حفاظت کریں۔ |
| Hospitality | مہمان نوازی |
| Shelter and housing matters | رہائش اور پناہ کے معاملات |
| Protecting family | خاندان کی حفاظت |
| Welcoming the stranger with adab | اجنبی کا ادب کے ساتھ استقبال |
| Inhospitality | مہمان نوازی نہ کرنا |
| Neglecting dependents | زیرِ کفالت افراد کو نظر انداز کرنا |
| Closing doors out of pride | غرور میں دروازے بند کرنا |
| The Former Spout | پہلا نالہ |
| Opening, Outflow | کھلنا، بہاؤ |
| The former spout of the bucket: begin letting good flow — speech, charity, and help — with measured opening. | ڈول کا پہلا نالہ: بھلائی کو بہنے دینا شروع کریں — بات، صدقہ اور مدد — ناپ تول کے ساتھ کھولتے ہوئے۔ |
| Starting helpful projects | مفید منصوبے شروع کرنا |
| Releasing stuck affairs | رکے ہوئے معاملات کو کھولنا |
| Marriage and union talks | نکاح اور رشتے کی بات چیت |
| Generosity | سخاوت |
| Reckless disclosure | بے احتیاطی سے راز کھولنا |
| Draining resources without plan | منصوبے کے بغیر وسائل خالی کرنا |
| Gossip as “release” | غیبت کو “اظہارِ دل” سمجھنا |
| The Latter Spout | دوسرا نالہ |
| Completion, Emptying | تکمیل، خالی کرنا |
| The latter spout completes the pouring — finish what you opened, and empty the heart of grudges. | دوسرا نالہ انڈیلنے کو مکمل کرتا ہے — جو کھولا اسے پورا کریں، اور دل کو کینوں سے خالی کریں۔ |
| Completing projects | منصوبے مکمل کرنا |
| Settling debts | قرض چکانا |
| Forgiving leftovers | بچی کھچی رنجشیں معاف کرنا |
| Closing cycles cleanly | دوروں کو صفائی سے بند کرنا |
| Leaving ends untied | سرے کھلے چھوڑ دینا |
| Hoarding grudges | کینے سنبھال کر رکھنا |
| Starting too many new things | بہت سی نئی چیزیں شروع کر لینا |
| Belly of the Fish | مچھلی کا پیٹ |
| Wholeness, Hidden Depths | کاملیت، پوشیدہ گہرائیاں |
| The belly of the fish closes the circuit of twenty-eight — honor what is hidden, and seek wholeness through tawakkul. | مچھلی کا پیٹ اٹھائیس کے دائرے کو مکمل کرتا ہے — جو پوشیدہ ہے اس کی قدر کریں اور توکل کے ذریعے کاملیت کی طلب کریں۔ |
| Quiet reflection | خاموش غور و فکر |
| Caring for the unseen needs of others | دوسروں کی ان دیکھی ضرورتوں کا خیال رکھنا |
| Patience with the hidden | پوشیدہ باتوں پر صبر |
| Integrating lessons | اسباق کو یکجا کرنا |
| Forced exposure | زبردستی بے نقاب کرنا |
| Denying the unseen | غیب کا انکار |
| Despair in darkness | اندھیرے میں مایوسی |



### 5.4 Burj career texts (burj result, Career tab) (355)

Traditional text, guiding principle, fields to consider carefully, and the 45 recommended-field categories with their items. Source: `src/data/burujData.json` (`career.*`).

| English | Urdu |
|---|---|
| Livestock trading, fashion and clothing business, fruit wholesaling (sell wholesale for quick turnover to prevent spoilage) | مویشیوں کی تجارت، فیشن اور ملبوسات کا کاروبار، پھلوں کی تھوک فروخت (خراب ہونے سے بچانے کے لیے جلد نکاسی کی خاطر تھوک میں بیچنا) |
| Quick turnover, fresh goods, dynamic movement, and energetic action align perfectly with your fiery nature and passionate energy | تیز رفتار نکاسی، تازہ مال، متحرک سرگرمی اور توانا عمل آپ کی آتشی فطرت اور پُرجوش توانائی سے پوری طرح ہم آہنگ ہیں |
| None specified - Fire element has freedom in career choices | کوئی مخصوص ممانعت نہیں — آتشی عنصر کو پیشے کے انتخاب میں آزادی حاصل ہے |
| Slow-moving inventory, long-term storage businesses, or careers requiring extreme patience | سست رفتار ذخیرہ، طویل مدتی گودام کے کاروبار، یا ایسے پیشے جن میں انتہائی صبر درکار ہو |
| Fashion & Apparel | فیشن اور ملبوسات |
| E-commerce clothing platforms | ملبوسات کے ای کامرس پلیٹ فارم |
| Fashion retail stores | فیشن کی خوردہ دکانیں |
| Textile manufacturing | ٹیکسٹائل کی صنعت |
| Clothing brand development | ملبوسات کے برانڈ کی تشکیل |
| Fashion wholesale distribution | فیشن کی تھوک تقسیم |
| Custom tailoring services | حسبِ ضرورت درزی کی خدمات |
| Food & Hospitality | خوراک اور مہمان نوازی |
| Restaurant ownership | ریستوران کی ملکیت |
| Catering services | کیٹرنگ کی خدمات |
| Food delivery platforms | کھانے کی ترسیل کے پلیٹ فارم |
| Farm-to-table businesses | کھیت سے دسترخوان تک کے کاروبار |
| Fresh food markets | تازہ خوراک کے بازار |
| Fast-casual dining concepts | فاسٹ کیژوئل کھانے کے تصورات |
| Agricultural Trading | زرعی تجارت |
| Livestock commodities trading | مویشی اجناس کی تجارت |
| Grain futures and commodities | اناج کے فیوچرز اور اجناس |
| Agricultural supply chains | زرعی سپلائی چین |
| Restaurant supply wholesale | ریستورانوں کو سامان کی تھوک فراہمی |
| Meat processing and distribution | گوشت کی پروسیسنگ اور تقسیم |
| Perishable Goods Logistics | جلد خراب ہونے والی اشیا کی لاجسٹکس |
| Fresh goods distribution | تازہ مال کی تقسیم |
| Cold chain logistics | کولڈ چین لاجسٹکس |
| Quick-turnover inventory management | جلد نکاسی والے ذخیرے کا انتظام |
| Time-sensitive product sales | وقت کی پابندی والی مصنوعات کی فروخت |
| Produce wholesale networks | پیداوار کی تھوک نیٹ ورکس |
| Agriculture and farming, mining and mineral extraction, gold trading, petroleum and natural resources, earth-derived products | زراعت اور کاشتکاری، کان کنی اور معدنیات کا استخراج، سونے کی تجارت، پیٹرولیم اور قدرتی وسائل، زمین سے حاصل ہونے والی اشیا |
| Stability, long-term growth, tangible assets, and connection to the earth's bounty align perfectly with your grounded nature and patient disposition | استحکام، طویل مدتی ترقی، ٹھوس اثاثے، اور زمین کی نعمتوں سے تعلق آپ کی زمینی فطرت اور صابر مزاج سے پوری طرح ہم آہنگ ہیں |
| Fish and all fish-related products or businesses | مچھلی اور مچھلی سے متعلق تمام مصنوعات یا کاروبار |
| Seafood industry, aquaculture, fish markets, sushi restaurants, fishing equipment - all water-based food commerce | سمندری خوراک کی صنعت، آبی زراعت، مچھلی منڈیاں، سوشی ریستوران، ماہی گیری کا سامان — پانی سے متعلق تمام خوراکی تجارت |
| Agriculture & Farming | زراعت اور کاشتکاری |
| Commercial farming operations | تجارتی کاشتکاری کے منصوبے |
| Organic agriculture businesses | نامیاتی زراعت کے کاروبار |
| Agricultural technology (AgriTech) | زرعی ٹیکنالوجی (ایگری ٹیک) |
| Crop trading and commodities | فصلوں اور اجناس کی تجارت |
| Sustainable farming consultancy | پائیدار کاشتکاری کی مشاورت |
| Greenhouse operations | گرین ہاؤس کے کام |
| Mining & Natural Resources | کان کنی اور قدرتی وسائل |
| Mining operations and management | کان کنی کے کام اور انتظام |
| Precious metals trading | قیمتی دھاتوں کی تجارت |
| Mineral extraction companies | معدنیات نکالنے والی کمپنیاں |
| Quarry operations | پتھر کی کانوں کے کام |
| Natural resource consulting | قدرتی وسائل کی مشاورت |
| Gemstone trading | قیمتی پتھروں کی تجارت |
| Real Estate & Construction | رئیل اسٹیٹ اور تعمیرات |
| Real estate development | رئیل اسٹیٹ کی ترقی |
| Property management | جائیداد کا انتظام |
| Construction companies | تعمیراتی کمپنیاں |
| Land investment | زمین میں سرمایہ کاری |
| Building materials supply | تعمیراتی مواد کی فراہمی |
| Infrastructure development | بنیادی ڈھانچے کی ترقی |
| Energy & Petroleum | توانائی اور پیٹرولیم |
| Oil and gas industry | تیل اور گیس کی صنعت |
| Renewable energy projects | قابلِ تجدید توانائی کے منصوبے |
| Energy consulting | توانائی کی مشاورت |
| Petroleum distribution | پیٹرولیم کی تقسیم |
| Alternative energy solutions | متبادل توانائی کے حل |
| Power generation facilities | بجلی پیدا کرنے کی تنصیبات |
| Earth Products | زمینی مصنوعات |
| Grains and cereals wholesale | اناج اور غلے کی تھوک فروخت |
| Crop distribution networks | فصلوں کی تقسیم کے نیٹ ورک |
| Food processing from crops | فصلوں سے خوراک کی پروسیسنگ |
| Seed and fertilizer supply | بیج اور کھاد کی فراہمی |
| Agricultural equipment sales | زرعی آلات کی فروخت |
| Fruits and vegetables trading, fashion and clothing business - items that move and circulate like air | پھلوں اور سبزیوں کی تجارت، فیشن اور ملبوسات کا کاروبار — وہ اشیا جو ہوا کی طرح حرکت اور گردش کرتی ہیں |
| Movement, circulation, communication, and fresh exchange align with your airy nature. Like wind, you thrive with constant motion and change. | حرکت، گردش، رابطہ اور تازہ لین دین آپ کی ہوائی فطرت سے ہم آہنگ ہیں۔ ہوا کی طرح آپ مسلسل حرکت اور تبدیلی میں پھلتے پھولتے ہیں۔ |
| Fish and all fish-related products - disrupts air element severely | مچھلی اور مچھلی سے متعلق تمام مصنوعات — ہوائی عنصر کو شدید طور پر بگاڑتی ہیں |
| Seafood industry, aquaculture, fishing, fish markets - any water-based food business. Also avoid slow, stagnant businesses that lack movement. | سمندری خوراک کی صنعت، آبی زراعت، ماہی گیری، مچھلی منڈیاں — پانی سے متعلق ہر خوراکی کاروبار۔ ایسے سست اور جامد کاروبار سے بھی بچیں جن میں حرکت نہ ہو۔ |
| Fashion & Retail | فیشن اور خوردہ فروشی |
| Clothing boutiques and stores | ملبوسات کے بوتیک اور دکانیں |
| Fashion design studios | فیشن ڈیزائن اسٹوڈیوز |
| Textile trading | ٹیکسٹائل کی تجارت |
| Online fashion platforms | آن لائن فیشن پلیٹ فارم |
| Trendy retail concepts | جدید رجحان کے خوردہ تصورات |
| Seasonal fashion collections | موسمی فیشن مجموعے |
| Fresh Produce | تازہ پیداوار |
| Fruit and vegetable wholesale | پھلوں اور سبزیوں کی تھوک فروخت |
| Fresh produce markets | تازہ پیداوار کے بازار |
| Organic produce distribution | نامیاتی پیداوار کی تقسیم |
| Farm fresh delivery services | کھیت سے تازہ ترسیل کی خدمات |
| Juice bars and smoothie shops | جوس بار اور اسموتھی کی دکانیں |
| Healthy food retail | صحت بخش خوراک کی خوردہ فروخت |
| Communication & Media | ابلاغ اور ذرائع ابلاغ |
| Digital media companies | ڈیجیٹل میڈیا کمپنیاں |
| Public relations firms | تعلقاتِ عامہ کے ادارے |
| Broadcasting and radio | نشریات اور ریڈیو |
| Social media management | سوشل میڈیا کا انتظام |
| Content creation agencies | مواد تخلیق کرنے والی ایجنسیاں |
| Marketing and advertising | مارکیٹنگ اور اشتہارات |
| Travel & Transportation | سفر اور نقل و حمل |
| Travel agencies | ٹریول ایجنسیاں |
| Airline industry careers | فضائی صنعت کے پیشے |
| Transportation logistics | نقل و حمل کی لاجسٹکس |
| Tourism businesses | سیاحت کے کاروبار |
| Delivery services | ترسیل کی خدمات |
| Courier companies | کوریئر کمپنیاں |
| Technology & Innovation | ٹیکنالوجی اور جدت |
| Tech startups | ٹیکنالوجی اسٹارٹ اپس |
| Software development | سافٹ ویئر کی تیاری |
| App development | ایپ کی تیاری |
| Cloud services | کلاؤڈ خدمات |
| IT consulting | آئی ٹی مشاورت |
| Digital innovation | ڈیجیٹل جدت |
| Fish and seafood trading, fashion and clothing business, earth-based products (blessed despite being water element) | مچھلی اور سمندری خوراک کی تجارت، فیشن اور ملبوسات کا کاروبار، زمینی مصنوعات (پانی کے عنصر کے باوجود بابرکت) |
| Flow, adaptability, emotional intelligence, and nurturing energy align with your water nature. Like water, you find success in filling needs and providing sustenance. | بہاؤ، لچک، جذباتی فہم اور پرورش کرنے والی توانائی آپ کی آبی فطرت سے ہم آہنگ ہیں۔ پانی کی طرح آپ ضرورتیں پوری کرنے اور رزق مہیا کرنے میں کامیابی پاتے ہیں۔ |
| Fruits and vegetables - these disrupt water element balance severely | پھل اور سبزیاں — یہ آبی عنصر کے توازن کو شدید طور پر بگاڑتی ہیں |
| Fresh produce markets, fruit wholesale, vegetable trading, juice bars (from fruits), salad businesses - any fruit/vegetable-focused enterprise | تازہ پیداوار کے بازار، پھلوں کی تھوک فروخت، سبزیوں کی تجارت، (پھلوں سے بنے) جوس بار، سلاد کے کاروبار — پھلوں یا سبزیوں پر مبنی ہر کاروبار |
| Seafood & Marine | سمندری خوراک اور بحری مصنوعات |
| Fish markets and wholesaling | مچھلی منڈیاں اور تھوک فروخت |
| Seafood restaurants | سمندری خوراک کے ریستوران |
| Aquaculture and fish farming | آبی زراعت اور مچھلی فارمنگ |
| Marine products distribution | بحری مصنوعات کی تقسیم |
| Sushi and seafood retail | سوشی اور سمندری خوراک کی خوردہ فروخت |
| Fish processing facilities | مچھلی کی پروسیسنگ کی تنصیبات |
| Fashion & Textiles | فیشن اور ٹیکسٹائل |
| Clothing retail and wholesale | ملبوسات کی خوردہ اور تھوک فروخت |
| Fashion boutiques | فیشن بوتیک |
| Fabric trading | کپڑے کی تجارت |
| Garment manufacturing | ملبوسات کی تیاری |
| Healing & Wellness | شفا اور تندرستی |
| Spa and wellness centers | اسپا اور ویلنس سینٹر |
| Hydrotherapy facilities | ہائیڈروتھراپی کی سہولیات |
| Healing arts practices | شفا بخش فنون کی مشق |
| Counseling and therapy | مشاورت اور تھراپی |
| Alternative medicine | متبادل طب |
| Wellness coaching | ویلنس کوچنگ |
| Beverages & Liquids | مشروبات اور مائعات |
| Bottled water distribution | بوتل بند پانی کی تقسیم |
| Juice and smoothie businesses | جوس اور اسموتھی کے کاروبار |
| Beverage manufacturing | مشروبات کی تیاری |
| Coffee and tea shops | کافی اور چائے کی دکانیں |
| Liquid product trading | مائع مصنوعات کی تجارت |
| Water purification services | پانی صاف کرنے کی خدمات |
| Earth Products (Blessed) | زمینی مصنوعات (بابرکت) |
| Agricultural products | زرعی مصنوعات |
| Grain and crop trading | اناج اور فصلوں کی تجارت |
| Organic farming | نامیاتی کاشتکاری |
| Earth-derived goods | زمین سے حاصل ہونے والی اشیا |
| Natural products retail | قدرتی مصنوعات کی خوردہ فروخت |
| Leadership roles, entrepreneurship, any venture requiring courage and initiative | قیادتی کردار، کاروباری سرگرمیاں، اور ہر وہ کام جس میں ہمت اور پہل درکار ہو |
| Leadership, innovation, courage, and pioneering spirit align with your solar fire nature | قیادت، جدت، ہمت اور اولیت کا جذبہ آپ کی شمسی آتشی فطرت سے ہم آہنگ ہیں |
| Routine, repetitive work lacking creativity or leadership opportunity | معمول کا، دہرایا جانے والا کام جس میں تخلیقی صلاحیت یا قیادت کا موقع نہ ہو |
| Subordinate roles without autonomy, micromanaged positions, careers suppressing initiative | خود مختاری کے بغیر ماتحت کردار، سخت نگرانی والے عہدے، اور وہ پیشے جو پہل کو دبا دیں |
| Leadership & Management | قیادت اور انتظام |
| Executive leadership positions | اعلیٰ انتظامی قیادت کے عہدے |
| Business management | کاروباری انتظام |
| Project management | پروجیکٹ مینجمنٹ |
| Team leadership roles | ٹیم کی قیادت کے کردار |
| Entrepreneurship | کاروباری سرگرمی |
| Startup founding | اسٹارٹ اپ کی بنیاد رکھنا |
| Innovation & Technology | جدت اور ٹیکنالوجی |
| Product development | مصنوعات کی تیاری |
| Innovation consulting | جدت کی مشاورت |
| Digital transformation | ڈیجیٹل تبدیلی |
| Venture capital | وینچر کیپیٹل |
| Business incubation | کاروباری انکیوبیشن |
| Public Service | عوامی خدمت |
| Government leadership | حکومتی قیادت |
| Community organizing | کمیونٹی کی تنظیم |
| Political advocacy | سیاسی وکالت |
| Non-profit leadership | غیر منافع بخش اداروں کی قیادت |
| Social entrepreneurship | سماجی کاروباری سرگرمی |
| Public policy | عوامی پالیسی |
| Creative Industries | تخلیقی صنعتیں |
| Film and media production | فلم اور میڈیا پروڈکشن |
| Creative direction | تخلیقی ہدایت کاری |
| Brand development | برانڈ کی تشکیل |
| Entertainment industry | تفریحی صنعت |
| Arts administration | فنون کا انتظام |
| Cultural initiatives | ثقافتی اقدامات |
| Similar to Buruj 2 - agriculture, real estate, construction, earth resources | برج 2 کی طرح — زراعت، رئیل اسٹیٹ، تعمیرات، زمینی وسائل |
| Long-term stability, tangible assets, and foundational structures align with your earth nature | طویل مدتی استحکام، ٹھوس اثاثے اور بنیادی ڈھانچے آپ کی زمینی فطرت سے ہم آہنگ ہیں |
| Fish and fish-related products | مچھلی اور مچھلی سے متعلق مصنوعات |
| Seafood industry, high-risk volatile ventures, speculative businesses | سمندری خوراک کی صنعت، زیادہ خطرے والے غیر مستحکم منصوبے، قیاسی کاروبار |
| Real Estate & Property | رئیل اسٹیٹ اور جائیداد |
| Real estate investment | رئیل اسٹیٹ میں سرمایہ کاری |
| Property development | جائیداد کی ترقی |
| Land management | زمین کا انتظام |
| Architecture firms | آرکیٹیکچر کی کمپنیاں |
| Finance & Banking | مالیات اور بینکاری |
| Banking and finance | بینکاری اور مالیات |
| Investment management | سرمایہ کاری کا انتظام |
| Financial planning | مالی منصوبہ بندی |
| Wealth management | دولت کا انتظام |
| Accounting services | اکاؤنٹنگ کی خدمات |
| Insurance | بیمہ |
| Agriculture & Natural Resources | زراعت اور قدرتی وسائل |
| Large-scale farming | بڑے پیمانے کی کاشتکاری |
| Agricultural land management | زرعی زمین کا انتظام |
| Natural resource management | قدرتی وسائل کا انتظام |
| Mining operations | کان کنی کے کام |
| Forestry management | جنگلات کا انتظام |
| Environmental conservation | ماحولیاتی تحفظ |
| Infrastructure | بنیادی ڈھانچہ |
| Civil engineering | سول انجینئرنگ |
| Urban planning | شہری منصوبہ بندی |
| Transportation systems | نقل و حمل کے نظام |
| Public works | عوامی تعمیرات |
| Municipal projects | بلدیاتی منصوبے |
| Similar to Buruj 3 - communication, trade, fashion, fresh produce | برج 3 کی طرح — ابلاغ، تجارت، فیشن، تازہ پیداوار |
| Communication, movement, variety, and intellectual exchange align with your airy nature | ابلاغ، حرکت، تنوع اور فکری تبادلہ آپ کی ہوائی فطرت سے ہم آہنگ ہیں |
| Seafood industry, isolated work, repetitive tasks without variety | سمندری خوراک کی صنعت، تنہائی کا کام، بغیر تنوع کے دہرائے جانے والے کام |
| Media & Communications | ذرائع ابلاغ اور رابطہ کاری |
| Journalism and reporting | صحافت اور رپورٹنگ |
| Public relations | تعلقاتِ عامہ |
| Broadcasting | نشریات |
| Content creation | مواد کی تخلیق |
| Digital marketing | ڈیجیٹل مارکیٹنگ |
| Education & Training | تعلیم و تربیت |
| Teaching and education | تدریس اور تعلیم |
| Corporate training | کارپوریٹ تربیت |
| Online course creation | آن لائن کورس کی تیاری |
| Educational technology | تعلیمی ٹیکنالوجی |
| Language instruction | زبان کی تدریس |
| Academic consulting | تعلیمی مشاورت |
| Sales & Networking | فروخت اور روابط |
| Sales and business development | فروخت اور کاروباری ترقی |
| Network marketing | نیٹ ورک مارکیٹنگ |
| Brand ambassadorship | برانڈ ایمبیسڈر شپ |
| Client relations | گاہکوں سے تعلقات |
| Partnership development | شراکتوں کی ترقی |
| Community management | کمیونٹی کا انتظام |
| Writing & Publishing | تحریر و اشاعت |
| Writing and authorship | تحریر اور تصنیف |
| Publishing | اشاعت |
| Copywriting | کاپی رائٹنگ |
| Technical writing | تکنیکی تحریر |
| Translation services | ترجمے کی خدمات |
| Editorial work | ادارتی کام |
| Similar to Buruj 4 - fish trading, deep work, transformative professions | برج 4 کی طرح — مچھلی کی تجارت، گہرا کام، تبدیلی لانے والے پیشے |
| Depth, transformation, healing, and uncovering hidden truths align with your Scorpionic water nature | گہرائی، تبدیلی، شفا اور پوشیدہ سچائیوں کی کھوج آپ کی عقربی آبی فطرت سے ہم آہنگ ہیں |
| Fruits and vegetables | پھل اور سبزیاں |
| Fresh produce business, fruit wholesale, superficial work lacking depth | تازہ پیداوار کا کاروبار، پھلوں کی تھوک فروخت، گہرائی سے خالی سطحی کام |
| Healing & Therapy | شفا اور تھراپی |
| Psychotherapy and counseling | نفسیاتی علاج اور مشاورت |
| Trauma healing work | صدمے سے شفا کا کام |
| Deep healing modalities | گہرے شفا بخش طریقے |
| Psychiatric services | نفسیاتی خدمات |
| Crisis intervention | بحران میں مداخلت |
| Transformational coaching | تبدیلی لانے والی کوچنگ |
| Investigation & Research | تفتیش اور تحقیق |
| Detective work | سراغ رسانی کا کام |
| Research and analysis | تحقیق اور تجزیہ |
| Forensic sciences | فرانزک سائنسز |
| Investigative journalism | تحقیقاتی صحافت |
| Scientific research | سائنسی تحقیق |
| Data analysis | ڈیٹا تجزیہ |
| Finance & Resources | مالیات اور وسائل |
| Investment banking | انویسٹمنٹ بینکنگ |
| Financial analysis | مالیاتی تجزیہ |
| Estate planning | جائیداد کی منصوبہ بندی |
| Insurance underwriting | بیمہ انڈر رائٹنگ |
| Resource management | وسائل کا انتظام |
| Mergers and acquisitions | انضمام اور حصول |
| Transformative Work | تبدیلی لانے والا کام |
| Life coaching | لائف کوچنگ |
| Spiritual counseling | روحانی مشاورت |
| Crisis management | بحران کا انتظام |
| Organizational transformation | تنظیمی تبدیلی |
| Change management consulting | تبدیلی کے انتظام کی مشاورت |
| Hospice and end-of-life care | تسکینی اور آخری ایام کی نگہداشت |
| Teaching, trade, long-distance commerce, knowledge-based professions | تدریس، تجارت، دور دراز کا کاروبار، علم پر مبنی پیشے |
| Expansion, knowledge, truth-seeking, and freedom align with Sagittarius fire | وسعت، علم، حق کی تلاش اور آزادی قوس کی آتشی فطرت سے ہم آہنگ ہیں |
| None specified for this buruj | اس برج کے لیے کوئی مخصوص ممانعت نہیں |
| Confined spaces, restrictive roles, work without meaning or purpose | تنگ جگہیں، پابندی والے کردار، اور بے معنی یا بے مقصد کام |
| Education & Philosophy | تعلیم اور فلسفہ |
| Higher education teaching | اعلیٰ تعلیم کی تدریس |
| Religious scholarship | دینی علم و تحقیق |
| Philosophy and ethics | فلسفہ اور اخلاقیات |
| International education | بین الاقوامی تعلیم |
| Cultural studies | ثقافتی مطالعات |
| Academic research | تعلیمی تحقیق |
| Travel & International | سفر اور بین الاقوامی امور |
| International business | بین الاقوامی کاروبار |
| Import/export trading | درآمد و برآمد کی تجارت |
| Travel industry | سفر کی صنعت |
| International relations | بین الاقوامی تعلقات |
| Cross-cultural consulting | بین الثقافتی مشاورت |
| Global logistics | عالمی لاجسٹکس |
| Publishing & Media | اشاعت اور ذرائع ابلاغ |
| Publishing houses | اشاعتی ادارے |
| Book writing and authorship | کتابوں کی تحریر اور تصنیف |
| Educational media | تعلیمی میڈیا |
| Documentary production | دستاویزی فلموں کی تیاری |
| International journalism | بین الاقوامی صحافت |
| Knowledge platforms | علمی پلیٹ فارم |
| Similar to other earth buruj - agriculture, construction, earth resources, property | دیگر زمینی بروج کی طرح — زراعت، تعمیرات، زمینی وسائل، جائیداد |
| Structure, discipline, long-term achievement, and mastery align with Capricorn earth | ساخت، نظم و ضبط، طویل مدتی کامیابی اور مہارت جدی کی زمینی فطرت سے ہم آہنگ ہیں |
| Seafood industry, unstable ventures, roles without clear authority | سمندری خوراک کی صنعت، غیر مستحکم منصوبے، واضح اختیار کے بغیر کردار |
| Corporate executive leadership | کارپوریٹ اعلیٰ انتظامی قیادت |
| Government positions | حکومتی عہدے |
| Military leadership | عسکری قیادت |
| Institutional management | ادارہ جاتی انتظام |
| Long-term strategic planning | طویل مدتی حکمتِ عملی کی منصوبہ بندی |
| Organizational development | تنظیمی ترقی |
| Traditional Professions | روایتی پیشے |
| Law and judiciary | قانون اور عدلیہ |
| Accounting and auditing | اکاؤنٹنگ اور آڈیٹنگ |
| Engineering | انجینئرنگ |
| Architecture | آرکیٹیکچر |
| Medicine (surgery) | طب (سرجری) |
| Academic administration | تعلیمی انتظامیہ |
| Large-scale construction | بڑے پیمانے کی تعمیرات |
| Infrastructure projects | بنیادی ڈھانچے کے منصوبے |
| Property investment | جائیداد میں سرمایہ کاری |
| Similar to other air buruj - communication, trade, community service | دیگر ہوائی بروج کی طرح — ابلاغ، تجارت، کمیونٹی کی خدمت |
| Innovation, community service, future vision, and progressive thinking align with Aquarius air | جدت، کمیونٹی کی خدمت، مستقبل بینی اور ترقی پسند سوچ دلو کی ہوائی فطرت سے ہم آہنگ ہیں |
| Seafood industry, traditional rigid structures, roles opposing innovation | سمندری خوراک کی صنعت، روایتی سخت ڈھانچے، جدت کی مخالفت کرنے والے کردار |
| Tech innovation | ٹیکنالوجی میں جدت |
| AI and machine learning | مصنوعی ذہانت اور مشین لرننگ |
| Blockchain and crypto | بلاک چین اور کرپٹو |
| Space technology | خلائی ٹیکنالوجی |
| Green technology | سبز ٹیکنالوجی |
| Humanitarian & Social | انسانی خدمت اور سماجی شعبہ |
| Human rights advocacy | انسانی حقوق کی وکالت |
| International development | بین الاقوامی ترقی |
| Social innovation | سماجی جدت |
| Science & Research | سائنس اور تحقیق |
| Environmental science | ماحولیاتی سائنس |
| Renewable energy | قابلِ تجدید توانائی |
| Astronomy and space | فلکیات اور خلا |
| Future studies | مستقبل کے مطالعات |
| Similar to other water buruj - healing, fish trading, spiritual service | دیگر آبی بروج کی طرح — شفا، مچھلی کی تجارت، روحانی خدمت |
| Compassion, service, spiritual connection, and healing align with Pisces water | ہمدردی، خدمت، روحانی تعلق اور شفا حوت کی آبی فطرت سے ہم آہنگ ہیں |
| Fresh produce business, aggressive sales roles, competitive environments lacking compassion | تازہ پیداوار کا کاروبار، جارحانہ فروخت کے کردار، اور ہمدردی سے خالی مسابقتی ماحول |
| Healing & Healthcare | شفا اور صحتِ عامہ |
| Nursing and caregiving | نرسنگ اور تیمارداری |
| Holistic healing | ہمہ گیر شفا |
| Mental health counseling | ذہنی صحت کی مشاورت |
| Hospice care | تسکینی نگہداشت |
| Energy healing | توانائی سے شفا |
| Compassionate medicine | ہمدردانہ طب |
| Spiritual & Religious | روحانی اور دینی شعبہ |
| Chaplaincy | چیپلنسی (روحانی معاونت) |
| Meditation teaching | مراقبہ کی تدریس |
| Islamic education | اسلامی تعلیم |
| Interfaith work | بین المذاہب کام |
| Arts & Creativity | فنون اور تخلیقی صلاحیت |
| Music and poetry | موسیقی اور شاعری |
| Healing arts | شفا بخش فنون |
| Dance and movement therapy | رقص اور حرکت کی تھراپی |
| Creative arts therapy | تخلیقی فنون کی تھراپی |
| Photography | فوٹوگرافی |
| Spiritual art | روحانی فن |
| Service & Charity | خدمت اور خیرات |
| Charity work | خیراتی کام |
| Humanitarian aid | انسانی امداد |
| Refugee support | مہاجرین کی معاونت |
| Animal welfare | جانوروں کی بہبود |
| Environmental protection | ماحول کا تحفظ |
| Social services | سماجی خدمات |



### 5.5 Burj Career tab labels (23)

Headings and buttons of the tab. Source: `src/features/istikhara/components/CareerTabAdvanced.tsx`.

| English | Urdu |
|---|---|
| Career & Vocation Guidance | پیشہ اور کیریئر کی رہنمائی |
| Career paths that resonate with your spiritual energy and elemental nature | وہ پیشہ ورانہ راستے جو آپ کی روحانی توانائی اور آپ کے عنصر کی فطرت سے ہم آہنگ ہیں |
| Traditional Wisdom | روایتی حکمت |
| Traditional Islamic Guidance | روایتی اسلامی رہنمائی |
| Special Spiritual Blessing | خاص روحانی برکت |
| Despite being a Water element, you receive special blessings from Earth industries. This unique spiritual gift allows you to thrive in both water-related AND earth-based careers—giving you more pathways to success than most other elements. | اگرچہ آپ آبی عنصر سے ہیں، روایت کے مطابق آپ کو زمینی صنعتوں سے خاص برکت حاصل ہے۔ یہ منفرد روحانی عطیہ آپ کو پانی سے متعلق اور زمین پر مبنی دونوں طرح کے پیشوں میں آگے بڑھنے دیتا ہے — یعنی آپ کے لیے دوسرے اکثر عناصر کے مقابلے میں کامیابی کے زیادہ راستے ہیں۔ |
| Recommended Career Fields | تجویز کردہ پیشہ ورانہ شعبے |
| Expand All | سب کھولیں |
| Collapse All | سب بند کریں |
| opportunities | مواقع |
| Guiding Principle | رہنما اصول |
| Let this principle guide your career decisions and professional journey. | اس اصول کو اپنے پیشہ ورانہ فیصلوں اور سفر میں رہنما بنائیں۔ |
| Fields to Consider Carefully | جن شعبوں پر احتیاط سے غور کریں |
| These industries may not align optimally with your spiritual energy. While not forbidden, they may present more challenges or require extra effort. | یہ صنعتیں آپ کی روحانی توانائی سے بہترین طور پر ہم آہنگ نہ ہوں۔ یہ ممنوع نہیں ہیں، مگر ان میں زیادہ چیلنجز آ سکتے ہیں یا اضافی محنت درکار ہو سکتی ہے۔ |
| Traditional Guidance: | روایتی رہنمائی: |
| Modern Application: | جدید اطلاق: |
| This doesn't mean complete avoidance—some individuals still succeed in these fields. However, the spiritual alignment suggests focusing your primary efforts on the recommended fields above for optimal results. | اس کا مطلب مکمل پرہیز نہیں — کچھ لوگ ان شعبوں میں بھی کامیاب ہوتے ہیں۔ تاہم روحانی ہم آہنگی کا اشارہ ہے کہ بہترین نتائج کے لیے اپنی بنیادی کوششیں اوپر بیان کردہ تجویز کردہ شعبوں پر مرکوز کریں۔ |
| Download Career Guide PDF | کیریئر گائیڈ (پی ڈی ایف) ڈاؤن لوڈ کریں |
| Share Recommendations | تجاویز شیئر کریں |
| Career Fields | پیشہ ورانہ شعبے |
| Opportunities | مواقع |
| Your Element | آپ کا عنصر |
| Aligned Path | ہم آہنگ راستہ |



### 5.6 Planet-of-the-day guidance paragraphs (7)

One paragraph per weekday. Source: `app/planet-of-the-day/PlanetOfTheDayPage.tsx`.

| English | Urdu |
|---|---|
| The Sun's day is best for bold, visible action. Begin projects you want recognized. Seek blessings from those in authority. Make decisions that require confidence and leadership. Avoid hiding or working in secrecy — the Sun illuminates. | اتوار شمس سے منسوب دن ہے، جو نمایاں اور واضح اقدام کے لیے موزوں سمجھا جاتا ہے۔ جن منصوبوں کی پہچان چاہتے ہوں انہیں شروع کریں۔ صاحبِ اختیار لوگوں سے دعائیں لیں۔ ایسے فیصلے کریں جن میں اعتماد اور قیادت درکار ہو۔ چھپنے یا پوشیدگی میں کام کرنے سے بچیں — شمس روشنی دیتا ہے۔ |
| Monday is ideal for matters of the home, family, and emotional wellbeing. Engage in travel or movement — the Moon governs journeys. Practice emotional healing, prayer, and du'ā'. Reflect on your inner world. Avoid confrontation; the Moon's waters prefer calm. | پیر گھر، خاندان اور جذباتی سکون کے معاملات کے لیے موزوں ہے۔ سفر یا نقل و حرکت اختیار کریں — روایت میں قمر کو اسفار سے منسوب کیا جاتا ہے۔ جذباتی شفا، نماز اور دعا کا اہتمام کریں۔ اپنے باطن پر غور کریں۔ ٹکراؤ سے بچیں؛ قمر کے پانی سکون پسند کرتے ہیں۔ |
| Tuesday strengthens courage and decisive action. Tackle difficult tasks requiring force or conviction. Physical training, surgery if medically required, and overcoming fears align with Mars. Channel Mars energy into productive determination — not aggression. Start with Bismillah and firm niyyah. | منگل ہمت اور فیصلہ کن اقدام کو تقویت دینے والا دن ہے۔ قوت یا پختہ ارادے والے مشکل کام نمٹائیں۔ جسمانی تربیت، طبی ضرورت پر سرجری، اور خوف پر قابو پانا مریخ کی نسبت سے ہم آہنگ ہیں۔ مریخ کی توانائی کو جارحیت نہیں بلکہ بامقصد عزم میں ڈھالیں۔ بسم اللہ اور پختہ نیت سے آغاز کریں۔ |
| Wednesday is the day of the scholar and the merchant. Ideal for studying, writing, signing contracts, teaching, and all forms of communication. Engage the mind — read, research, debate. Mercury rewards precision and clarity. This is also an excellent day for Zikr that involves recitation (tilāwah). | بدھ عالم اور تاجر کا دن ہے۔ مطالعہ، تحریر، معاہدوں پر دستخط، تدریس اور ہر طرح کی گفتگو کے لیے موزوں ہے۔ ذہن کو مشغول رکھیں — پڑھیں، تحقیق کریں، مباحثہ کریں۔ عطارد درستی اور وضاحت کو سراہتا ہے۔ یہ تلاوت پر مشتمل ذکر کے لیے بھی بہترین دن ہے۔ |
| Thursday is the most blessed day for spiritual elevation, wealth-seeking, and expansion. Make du'ā' for rizq (sustenance). Begin long-term projects. Seek knowledge, visit scholars, and perform generous acts of sadaqah. Thursday night (eve of Friday) is especially blessed — use it for extra worship. | جمعرات روحانی بلندی، رزق کی طلب اور وسعت کے لیے سب سے بابرکت دن ہے۔ رزق کے لیے دعا کریں۔ طویل مدتی منصوبے شروع کریں۔ علم حاصل کریں، اہلِ علم سے ملیں، اور فراخ دلی سے صدقہ کریں۔ جمعرات کی رات (جمعہ کی شب) خاص طور پر بابرکت ہے — اسے اضافی عبادت کے لیے استعمال کریں۔ |
| Friday is the most sacred day in Islam (Yawm al-Jum'ah). Venus and Friday align in beauty, community, and gratitude. Attend Jumu'ah, send abundant Ṣalawāt upon the Prophet ﷺ, and perform acts of beauty (charity, kind words, reconciliation). It is a day for love, forgiveness, and peace. | جمعہ اسلام میں سب سے مقدس دن ہے (یومُ الجمعہ)۔ زہرہ اور جمعہ حسن، اجتماع اور شکرگزاری میں ہم آہنگ ہیں۔ جمعہ کی نماز میں شریک ہوں، نبی کریم ﷺ پر کثرت سے درود شریف پڑھیں، اور حسنِ عمل (صدقہ، نرم گفتگو، صلح) اختیار کریں۔ یہ محبت، معافی اور سکون کا دن ہے۔ |
| Saturday is governed by the slowest and most disciplined of the classical planets. It is a day for long-term commitments, serious study, and patient effort. Engage in property matters, legal affairs, and building lasting structures. Avoid rushing — Saturn rewards consistent, sustained effort over time. | ہفتہ کلاسیکی سیاروں میں سب سے سست اور سب سے منظم سیارے سے منسوب ہے۔ یہ طویل مدتی وعدوں، سنجیدہ مطالعے اور صبر آزما کوشش کا دن ہے۔ جائیداد، قانونی معاملات اور پائیدار ڈھانچے بنانے میں مشغول ہوں۔ جلد بازی سے بچیں — زحل مسلسل اور دیرپا محنت کو سراہتا ہے۔ |



### Still in English on /ur (not part of this change)

Result texts that are still English on /ur after section 5 (counts are unique English strings; checked in the browser on the built site and against the data files). They are the remaining work before /ur can be indexed:

| Where | Strings | Note |
|---|---|---|
| Burj result, Personality tab (`burujData.json` `personality`) | 132 | plus the tab's labels (“Your Personality Profile”, “Temperament”…) |
| Burj result, Blessed day tab (`blessed_day`) | 136 | plus labels (“Your Blessed Day”, “Pro Tip”…) |
| Burj result, Charity tab (`sadaqah`) | 282 | traditional sadaqah forms; wording needs a reviewer who knows the tradition (the text cites a named teacher) |
| Burj result, Divine Names & dhikr tab (`spiritual_practice`) | 118 | angels, jinn, dhikr counts, Qur'anic connection: religious content, deliberately not drafted; Arabic must come from the data files |
| Planet / hour pages: Divine Names and incense of the current hour | a handful | e.g. “Yā Razzāq”, “O Provider”, incense names (“Lubān wa Misk”); Divine Names render the Arabic from the data files |
| Ikhtiyārāt rule *technical* details (Detailed mode) | many, dynamic | contain degrees, signs and orbs (“Moon at 12°…”), need pattern entries, not exact strings |
| Overview tab: “Explore the tabs above…”, “Innovative and humanitarian…” etc. | a few | the per-burj one-liners and activity lists of the overview |


