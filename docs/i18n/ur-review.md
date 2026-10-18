# Urdu (/ur) — native review sheet

Phase 1 Urdu pages for asrar.app. **All /ur pages are noindex and are not in the sitemap or hreflang** until Mario approves indexing. The native review is done and its corrections are applied (see below).

Pages: `/ur`, `/ur/name-and-mother-burj`, `/ur/compatibility`, `/ur/abjad`, `/ur/planetary-hours`, `/ur/planet-of-the-day`, `/ur/ikhtiyarat`.

Every string was translated by hand (no machine translation). The mobile app (zaibaitech/asrar-mobile) has no Urdu, so nothing was reused. Qur'an and Divine Names stay in Arabic.

**String count: 722** (14 SEO metadata, 161 page copy, 53 shared UI in TypeScript, 494 tool-UI catalog entries incl. 27 patterns).

Sources (edit there, then regenerate this file with `python3 scripts/i18n/ur/build_review.py`):

- SEO metadata: `src/lib/urMetadata.ts`
- Page copy: `src/lib/i18n/urPages.ts`
- Shared UI: `src/lib/i18n/ur.ts`, `src/components/seo/relatedTools.ts`
- Tool UI catalog: `scripts/i18n/ur/catalog_source.py` → `public/i18n/ur-ui.json` (`python3 scripts/i18n/ur/build_catalog.py`)


## Open questions for the reviewer

1. “آج کے ساعات” (meta description of /ur/planetary-hours and its first FAQ) is the colloquial search phrase Mario asked to target; grammatically ساعت is feminine (آج کی ساعتیں). Keep or change?
2. “اختیارات” on its own reads as “powers/authority” to most Urdu speakers. The pages always pair it with “مناسب تاریخوں کا انتخاب”. Is that enough, or should the H1 drop the word?
3. “Wednesday night” (burj result) → “بدھ کی رات”. In Urdu usage this can mean the night before or after Wednesday; check against the intended meaning (the night following Wednesday’s day?).
4. Planetary-hour guide item “Cutting ties” → “تعلقات ختم کرنا”. Should be checked so it never reads as encouraging قطع رحمی.
5. Planet-of-the-day intro: “a ruling planet that colours its energy” → softened to “روایت کے مطابق … اس دن کی کیفیت کا رنگ متعین کرتا ہے”. Check that the wording does not attribute independent influence to planets.
6. Astro technical terms in the Ikhtiyārāt breakdown (محترق، خالی السیر، تحت الشعاع، ہبوط، وبال، رجعت، الطریقۃ المحترقۃ) follow classical Arabic/Persian usage; please confirm they are understood by Urdu readers.
7. Urdu-typed names in the Abjad count: RESOLVED. Urdu letters are converted before counting (see the reviewer answers below, Q7).
8. Interpretive result content (soul-connection archetype meanings, burj career texts, per-date rule explanations, manzil descriptions, day guidance paragraphs) is NOT translated yet and still shows in English; the pages say “ٹول کے کچھ حصے ابھی انگریزی میں ہیں۔”

### New strings for the Language Reviewer (1 pending)

Added after the native review; please check these.

| Where | English | Urdu | Note |
|---|---|---|---|
| catalog (abjad system selector note, all calculators; English source from PR #89) | Maghribi (North & West Africa) · Mashriqi (Middle East & Asia) | مغربی (شمالی و مغربی افریقہ) · مشرقی (مشرقِ وسطیٰ اور ایشیا) | Short regional hint under the Maghribi/Mashriqi switch. Check “مغربی” is not read as “Western” here, and the geography wording. |



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
| 8 | English interpretive content | OK for a noindex phase 1 with UR_COMMON.toolUiNote; translate burj career texts and soul-connection meanings before indexing. | ⏳ not done in this PR (separate task). toolUiNote stays visible; /ur stays noindex. |


## Review corrections (63 of 64 applied)

From the native reviewer (Language Reviewer, Oct 2026). The tables further down show the strings as they are now, with the corrections in place. /ur stays noindex and out of the sitemap and hreflang until Mario approves indexing (Q8, the untranslated result texts, is still open).

| Batch | String | Before | After | Status |
|---|---|---|---|---|
| 0 | Divine Names list, English label “Yā Wudd” | Yā Laṭīf (يا لطيف) · Yā Wudd (يا ودود) | Yā Laṭīf (يا لطيف) · Yā Wadūd (يا ودود) | ⏸ not applied in source: the /ur page already shows the correct Arabic «يا لطيف · يا ودود». The typo is in the English/French tool text (app/planetary-hours/PlanetaryHoursPage.tsx), which this PR leaves unchanged (EN/FR unaffected); the Urdu catalog key has to match that English text exactly. Fix it in a separate EN/FR change. |
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

## 1. Qur'an / Divine Names

Kept in Arabic script. The tool shows transliterations; on /ur they are replaced by the Arabic the tool itself writes. Divine Names in the Urdu page copy (burj table) are marked lang="ar" and rendered in Naskh; inside the tool they use the page font.

| English (tool text) | Shown on /ur |
|---|---|
| Yā Laṭīf | يا لطيف |
| Yā Nūr (يا نور) · Yā Ḥayy (يا حي) | يا نور · يا حي |
| Yā Laṭīf (يا لطيف) · Yā Wudd (يا ودود) | يا لطيف · يا ودود |
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
| UR_BURJ.how[1] | Each name is converted to its Abjad total using the Maghribi letter values. | ہر نام کو مغربی (شمالی افریقی) ترتیب کے حروف کی قیمتوں سے اس کے ابجد مجموعے میں بدلا جاتا ہے۔ |
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
| UR_COMPAT.faqs[1].a | You can switch between the Maghribi order (North and West Africa) and the Mashriqi order (the East, including South Asia). Most names give the same total in both; names with letters such as ṣād, sīn, shīn, ḍād, ẓāʾ or ghayn can differ. | آپ مغربی ترتیب (شمالی اور مغربی افریقہ) اور مشرقی ترتیب (مشرق، بشمول برصغیر) کے درمیان انتخاب کر سکتے ہیں۔ اکثر ناموں کا مجموعہ دونوں میں یکساں آتا ہے؛ جن ناموں میں ص، س، ش، ض، ظ یا غ جیسے حروف ہوں ان میں فرق ہو سکتا ہے۔ |
| UR_COMPAT.faqs[2].q | Can I compare by date of birth instead of names? | کیا ناموں کے بجائے تاریخِ پیدائش سے موازنہ ہو سکتا ہے؟ |
| UR_COMPAT.faqs[2].a | Yes. Choose 'By Birth Date' to compare two people's Sun, Moon, Venus and Mars signs. This is a general, modern astrological comparison, not a classical Islamic method. | جی ہاں۔ “تاریخِ پیدائش سے” منتخب کریں تاکہ دو افراد کے سورج، چاند، زہرہ اور مریخ کے بروج کا موازنہ ہو۔ یہ ایک عمومی، جدید علمِ نجوم کا موازنہ ہے، کوئی کلاسیکی اسلامی طریقہ نہیں۔ |
| UR_COMPAT.faqs[3].q | Is it permissible to rely on name compatibility? | کیا ناموں کی مطابقت پر بھروسا کرنا درست ہے؟ |
| UR_COMPAT.faqs[3].a | Treat it as cultural reflection, not prediction. Choosing a spouse rests on dīn, character, family counsel and ṣalāt al-istikhāra. No number decides a marriage; Allah alone knows the unseen. | اسے ثقافتی غور و فکر سمجھیں، پیش گوئی نہیں۔ رشتے کا انتخاب دین، اخلاق، خاندان کے مشورے اور نمازِ استخارہ پر ہوتا ہے۔ کوئی عدد شادی کا فیصلہ نہیں کرتا؛ غیب کا علم صرف اللہ کو ہے۔ |
| UR_COMPAT.faqs[4].q | What if our result is low? | اگر نتیجہ کم آئے تو کیا کریں؟ |
| UR_COMPAT.faqs[4].a | A low number is not a prohibition and not a bad omen. It can be an invitation to talk about expectations and patience. Many happy marriages would 'fail' a numeric test. | کم عدد نہ تو ممانعت ہے اور نہ بدشگونی۔ یہ توقعات اور صبر کے بارے میں بات کرنے کی دعوت ہو سکتی ہے۔ بہت سی خوشگوار شادیاں کسی عددی امتحان میں “ناکام” ہو جاتیں۔ |
| UR_ABJAD.h1 | Abjad Calculator: The Numerical Value of Your Name | ابجد کیلکولیٹر: نام کے اعداد |
| UR_ABJAD.lead | Calculate the Abjad value of your name or any Arabic phrase, choose the Mashriqi or Maghribi order, and see each letter's value and the balance of the elements. | اپنے نام یا کسی بھی عربی عبارت کی ابجد قیمت نکالیں، مشرقی یا مغربی ترتیب منتخب کریں، اور ہر حرف کی قیمت اور عناصر کا توازن دیکھیں۔ |
| UR_ABJAD.whatTitle | What is Abjad (ḥisāb al-jummal)? | ابجد (حسابِ جمل) کیا ہے؟ |
| UR_ABJAD.what | The Abjad system gives every Arabic letter a number: alif 1, bāʾ 2, jīm 3, and so on up to ghayn 1000. The sum of a word's letter values is its ḥisāb al-jummal, a count used for centuries in the Islamic sciences and, in the subcontinent, also for chronograms (tārīkh-goʾī). | ابجد کے نظام میں عربی کے ہر حرف کی ایک عددی قیمت ہے: الف 1، ب 2، ج 3، اور اسی طرح غ 1000 تک۔ کسی لفظ کے حروف کی قیمتوں کا مجموعہ اس کا “حسابِ جمل” کہلاتا ہے، جو صدیوں سے اسلامی علوم میں، اور برصغیر میں تاریخ گوئی (مادۂ تاریخ) میں بھی استعمال ہوتا رہا ہے۔ |
| UR_ABJAD.ordersTitle | The Mashriqi and Maghribi orders | مشرقی اور مغربی ترتیب |
| UR_ABJAD.orders | In ʿilm al-ḥurūf and ʿilm al-aʿdād scholars studied the numerical values of the Divine Names, Qur'anic phrases and people's names, and linked the letters to the four elements: fire, air, water and earth. There are two common orders: the Mashriqi order used in the East, including Pakistan and India, and the Maghribi order used in North and West Africa. This calculator supports both so you can compare the results. | علم الحروف اور علم الاعداد میں علما نے اسمائے حسنیٰ، قرآنی عبارات اور لوگوں کے ناموں کی عددی قیمتوں کا مطالعہ کیا اور حروف کو چار عناصر سے جوڑا: آگ، ہوا، پانی اور مٹی۔ دو ترتیبیں عام ہیں: مشرقی ترتیب، جو پاکستان اور ہندوستان سمیت مشرق میں رائج ہے، اور مغربی ترتیب، جو شمالی اور مغربی افریقہ میں رائج ہے۔ یہ کیلکولیٹر دونوں ترتیبوں سے حساب کرتا ہے تاکہ آپ نتائج کا موازنہ کر سکیں۔ |
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
| Maghribi (North & West Africa) · Mashriqi (Middle East & Asia) | مغربی (شمالی و مغربی افریقہ) · مشرقی (مشرقِ وسطیٰ اور ایشیا) |
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

