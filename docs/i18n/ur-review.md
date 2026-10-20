# Urdu (/ur) — native review sheet

Phase 1 Urdu pages for asrar.app. **All /ur pages are noindex and are not in the sitemap or hreflang** until Mario approves indexing. The native review is done and its corrections are applied (see below).

Pages: `/ur`, `/ur/name-and-mother-burj`, `/ur/compatibility`, `/ur/abjad`, `/ur/planetary-hours`, `/ur/planet-of-the-day`, `/ur/ikhtiyarat`.

Every string was translated by hand (no machine translation), **except the AI-drafted result texts in section 5**, which were drafted by an AI assistant, are NOT native-reviewed and are listed there for the Language Reviewer. The mobile app (zaibaitech/asrar-mobile) has no Urdu, so nothing was reused. Qur'an and Divine Names stay in Arabic.

**String count: 727** (14 SEO metadata, 161 page copy, 54 shared UI in TypeScript, 498 tool-UI catalog entries incl. 31 patterns). Not counted here: 896 AI-drafted result texts (section 5), which are not native-reviewed.

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
9. Glossary audit (Phase 2): «مغربی» is both “Maghribi” and “Western”, so the small “Western” gloss under the Maghribi button («مغربی ترتیب») repeats the label and does not tell an Urdu reader more; the same for «مشرقی ترتیب». The English UI repeats itself in the same way (“Maghribi / Western”), and the region is given by the note line. Options: keep as is; or shorten the gloss to «مغربی» / «مشرقی»; or gloss it with the region («شمالی افریقی» / «مشرقِ وسطیٰ و ایشیا»). Not changed.
10. Glossary audit (Phase 2): the selector label “Maghribi System:” is «مغربی نظام:» but the same concept is «مغربی ترتیب» on the pages and in the FAQ (“Maghribi and Mashriqi orders”). Use one word everywhere (ترتیب = letter order, نظام = the whole system), or keep both because the English source uses both?
11. Glossary audit (Phase 2): “connection” appears as «ربط» (“a supportive connection”, soul connection «روحانی ربط») and the classical Moon “Applying to” as «اتصال». Should the plain-language sentences about the Moon forming a connection with Jupiter/Venus use «اتصال» too, or stay in plain «ربط»?
12. Glossary audit (Phase 2): “unfavourable” strength — «کم موافق» (“less favourable”) is used for mild cases; a few sadaqah lines about foods that “disrupt the element severely” use «غیر موافق». Keep the two strengths, or use one term?
13. Glossary audit (Phase 2): “dignity” is «ذاتی قوت» in “Moon Essential Dignity” but «وقار / وقار کی حالت» in newer strings and «حالت» in “Check the Dignity”. Pick one term for the planetary-dignity concept (candidates: «ذاتی قوت», «وقار», «حالت»).
14. Glossary audit (Phase 2): “conflict” is «جھگڑا» (label “Conflict”, “Unnecessary conflict”) but «تنازع» in compounds (“low-conflict”, “conflict resolution”). Intentional register split (quarrel vs state), or unify?
15. Glossary audit (Phase 2): “auspicious” is «موافق» in some strings but «مناسب» / «موزوں» in the Ikhtiyārāt and Sadaqah page copy (“Choose an auspicious date…”). «موافق» is the glossary term for favourable; should “auspicious” always follow it?

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
| favourable / less favourable (traditional) | موافق / کم موافق | Ikhtiyārāt and planetary-hour wording; “Auspicious” → موافق. “Unfavourable” is not a separate term in the app text (see open question on «غیر موافق»). |
| supportive (hour, planet) | معاون | e.g. “a planetary hour traditionally seen as supportive” → معاون; “a supportive connection” → موافق ربط. |
| Moon Applying to / Separating from | اتصال / انصراف (جدا ہونا) | Classical terms for the Moon moving toward / away from a planet. Do not use ربط for these two (ربط is the plain-language “connection”, see open question). |
| aspect / hard aspect | نظر / سخت نظر |  |
| benefic planet | سعد سیارہ | Used for Jupiter and Venus. The app has no “malefic” string yet; «نحس» is not used. |
| elemental nature / temperament | عنصری مزاج | Element + مزاج: آتشی / زمینی / ہوائی / آبی مزاج. «فطرت» is not used for the four elements (فطرت keeps its ordinary meaning “inborn character”, e.g. “Your nature” in the Istikhāra result). Never the Arabic spellings «عنصري/عنصرية». |
| friction / tension / strain / conflict | اختلاف / تناؤ / کشیدگی / تنازع / جھگڑا | اختلاف = friction or disagreement between people; تناؤ = tension; کشیدگی = strain; تنازع = conflict as a state or process (“low-conflict”, “conflict resolution”); جھگڑا = quarrel. «رگڑ» (physical rubbing) is never used for people. |
| essential dignities: domicile, exaltation, detriment, fall | بیت، شرف، وبال، ہبوط | “Domicile/Exaltation” is «بیت/شرف»; «بیت الشرف» conflates the two and is not used. |
| combust / retrograde | محترق / رجعت | Mercury retrograde → عطارد رجعت میں. |
| Maghribi System vs Maghribi order | مغربی نظام / مغربی ترتیب | The Abjad selector says “System” → «نظام»; page copy says “order” → «ترتیب» (the letter order). Same concept, two source words; see open question. “Western” (the small gloss under the Maghribi button) is «مغربی ترتیب» and so repeats the label. |
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
| ur.ts nav.aboutApp | About This App | اس ایپ کے بارے میں |
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
| re:^(\S+) (\w+) — (\w+) is exalted in (\w+)$ | $1 $2 — $3 برجِ $4 میں شرف کی حالت میں ہے |
| re:^(\w+) is exalted in (\w+)$ | $1 برجِ $2 میں شرف کی حالت میں ہے |
| re:^(\S+) (\w+) — (\w+) is at home in (\w+)$ | $1 $2 — $3 برجِ $4 میں اپنے گھر میں (بیت) ہے |
| re:^(\w+) is at home in (\w+)$ | $1 برجِ $2 میں اپنے گھر میں (بیت) ہے |
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
| Grounded | زمین سے جڑا |
| Stability | استحکام |
| Renewal | تجدید |
| The Grounded Path | زمین سے جڑا راستہ |
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
| A naturally easy, low-friction friendship — you tend to understand each other quickly and rarely clash. Watch that neither friend becomes overly reliant on the other. | فطری طور پر آسان دوستی جس میں اختلافات کم ہوتے ہیں — آپ ایک دوسرے کو جلد سمجھ لیتے ہیں اور کم ہی ٹکراتے ہیں۔ خیال رکھیں کہ کوئی ایک دوست دوسرے پر حد سے زیادہ انحصار نہ کرنے لگے۔ |
| Family members connected this way tend to get along with little friction and genuine mutual understanding. Encourage each other's independence alongside the closeness. | اس طرح جڑے ہوئے اہلِ خانہ عموماً کم اختلافات کے ساتھ ایک دوسرے سے نبھاتے ہیں اور حقیقی باہمی سمجھ رکھتے ہیں۔ قربت کے ساتھ ایک دوسرے کی خود مختاری کی بھی حوصلہ افزائی کریں۔ |
| A cooperative, low-conflict working relationship where tasks divide naturally. Guard against one person carrying too much of the shared workload. | تعاون پر مبنی، کم تنازع والا پیشہ ورانہ تعلق جس میں کام فطری طور پر بٹ جاتا ہے۔ خیال رکھیں کہ مشترکہ کام کا بوجھ ایک ہی شخص پر نہ پڑ جائے۔ |
| Friction | اختلاف |
| Patience | صبر |
| Discipline | نظم و ضبط |
| The Friction Path | اختلاف اور تناؤ کا راستہ |
| Often difficult; tension and strain | اکثر مشکل؛ تناؤ اور دباؤ |
| Constant arguments, financial instability, and emotional burnout. This path tests endurance. | مسلسل بحث، مالی عدم استحکام اور جذباتی تھکن۔ یہ راستہ برداشت کا امتحان لیتا ہے۔ |
| Patience (sabr), structured routines, spiritual discipline, and wise counsel from trusted elders. | صبر، منظم معمولات، روحانی نظم و ضبط، اور قابلِ اعتماد بزرگوں کا دانشمندانہ مشورہ۔ |
| Traditionally associated with difficulty — tension, frequent disagreements, and pressure may arise, requiring patience and discipline. | روایتی طور پر مشکل سے منسوب — تناؤ، بار بار اختلاف اور دباؤ پیدا ہو سکتا ہے، جس کے لیے صبر اور نظم و ضبط درکار ہے۔ |
| Traditionally associated with difficulty in marriage. Tension, frequent disagreements, and financial pressure may arise. | شادی میں روایتی طور پر مشکل سے منسوب۔ تناؤ، بار بار اختلاف اور مالی دباؤ پیدا ہو سکتا ہے۔ |
| Traditionally associated with difficulty — frequent small frictions and mismatched expectations may test the friendship. | روایتی طور پر مشکل سے منسوب — معمولی اختلافات اور مختلف توقعات دوستی کا امتحان لے سکتی ہیں۔ |
| Traditionally associated with difficulty — recurring tension, sometimes over responsibilities, may strain the family bond. | روایتی طور پر مشکل سے منسوب — بار بار کا تناؤ، بعض اوقات ذمہ داریوں پر، خاندانی رشتے پر دباؤ ڈال سکتا ہے۔ |
| Traditionally associated with difficulty — friction over resources, deadlines, or decisions may strain the partnership. | روایتی طور پر مشکل سے منسوب — وسائل، آخری تاریخوں یا فیصلوں پر اختلاف شراکت پر دباؤ ڈال سکتا ہے۔ |
| This connection often carries tension and frequent friction. Patience and structure are needed to keep disagreements from escalating. | یہ تعلق اکثر تناؤ اور بار بار کے اختلافات لیے ہوتا ہے۔ اختلافات کو بڑھنے سے روکنے کے لیے صبر اور نظم درکار ہیں۔ |
| Marriage may face continuous challenges. Strain in provision and emotional harmony often requires outside support and spiritual discipline. | شادی کو مسلسل چیلنجز کا سامنا ہو سکتا ہے۔ رزق میں تنگی اور جذباتی ہم آہنگی میں دباؤ کے لیے اکثر باہر سے مدد اور روحانی نظم و ضبط کی ضرورت پڑتی ہے۔ |
| Friendships under this pattern can feel effortful — frequent small disagreements and mismatched expectations are common. The bond can hold, but needs conscious care. | اس نمونے میں دوستیاں محنت طلب محسوس ہو سکتی ہیں — چھوٹے چھوٹے اختلافات اور مختلف توقعات عام ہیں۔ رشتہ قائم رہ سکتا ہے، مگر شعوری دیکھ بھال چاہتا ہے۔ |
| Family ties here often carry recurring tension, sometimes over money or responsibilities. Structure, patience, and outside support help ease the strain. | یہاں خاندانی رشتوں میں اکثر بار بار کا تناؤ ہوتا ہے، بعض اوقات پیسوں یا ذمہ داریوں پر۔ نظم، صبر اور باہر سے مدد دباؤ کم کرتے ہیں۔ |
| Professional partnerships under this pattern often hit friction over resources, deadlines, or decisions. Clear agreements and structured communication reduce the strain. | اس نمونے میں پیشہ ورانہ شراکتوں میں اکثر وسائل، آخری تاریخوں یا فیصلوں پر اختلاف پیدا ہوتا ہے۔ واضح معاہدے اور منظم گفتگو دباؤ کم کرتے ہیں۔ |
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
| Power struggles, recurring arguments, and cycles of blame. Pride and unresolved anger amplify friction. | طاقت کی کشمکش، بار بار کی بحثیں اور الزام تراشی کے چکر۔ غرور اور حل نہ ہوا غصہ کشیدگی کو بڑھا دیتے ہیں۔ |
| Conflict resolution skills, self-work (especially anger and ego), forgiveness practices, and regular spiritual remembrance (dhikr). | تنازع حل کرنے کی مہارتیں، خود احتسابی (خاص طور پر غصے اور انا میں)، معافی کے معمولات، اور باقاعدہ ذکرِ الٰہی۔ |
| Traditionally shows recurring quarrels and discord — tests of anger, pride, and ego are common until inner work is done. | روایتی طور پر بار بار کے جھگڑے اور اختلاف دکھاتا ہے — جب تک اندرونی اصلاح نہ ہو، غصے، غرور اور انا کے امتحان عام رہتے ہیں۔ |
| Traditionally shows recurring quarrels and discord in marriage. Tests of anger, pride, and ego are common. | روایتی طور پر شادی میں بار بار کے جھگڑے اور اختلاف دکھاتا ہے۔ غصے، غرور اور انا کے امتحان عام ہیں۔ |
| Traditionally shows recurring small quarrels — tests of pride and ego may repeat until self-awareness grows. | روایتی طور پر بار بار کے چھوٹے جھگڑے دکھاتا ہے — خود آگاہی بڑھنے تک غرور اور انا کے امتحان دہرائے جا سکتے ہیں۔ |
| Traditionally shows recurring discord — old patterns of pride and ego may resurface until addressed with forgiveness. | روایتی طور پر بار بار کا اختلاف دکھاتا ہے — غرور اور انا کے پرانے انداز اس وقت تک پھر ابھر سکتے ہیں جب تک انہیں معافی کے ساتھ نہ نمٹایا جائے۔ |
| Traditionally shows recurring friction — tests of ego and power may repeat until clear roles and respect are established. | روایتی طور پر بار بار کے اختلافات دکھاتا ہے — انا اور طاقت کے امتحان اس وقت تک دہرائے جا سکتے ہیں جب تک واضح کردار اور باہمی احترام قائم نہ ہو۔ |
| This bond tends to surface recurring friction tied to pride and ego. Self-awareness on both sides is what breaks the cycle. | یہ رشتہ غرور اور انا سے جڑی بار بار کے اختلافات کو ابھارتا ہے۔ دونوں طرف کی خود آگاہی ہی اس چکر کو توڑتی ہے۔ |
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
| Traditionally considered one of the most favorable patterns for partnership — early friction often resolves into a highly aligned collaboration. | شراکت کے لیے روایتی طور پر سب سے زیادہ موافق نمونوں میں سے ایک سمجھا جاتا ہے — شروع کا اختلاف اکثر ایک نہایت ہم آہنگ تعاون میں بدل جاتا ہے۔ |
| Traditionally the most favorable connection — early obstacles often give way to a deep, aligned bond. Trust the process rather than forcing it. | روایتی طور پر سب سے زیادہ موافق تعلق — ابتدائی رکاوٹیں اکثر ایک گہرے اور ہم آہنگ رشتے کو راستہ دیتی ہیں۔ عمل کو زبردستی چلانے کے بجائے اس پر بھروسا کریں۔ |
| Marriage is traditionally highly blessed. Challenges before union often make the bond stronger. This path carries spiritual favor. | شادی روایتی طور پر بہت مبارک ہے۔ نکاح سے پہلے کی مشکلات اکثر رشتے کو مضبوط بناتی ہیں۔ اس راستے میں روحانی فضل کا پہلو ہے۔ |
| One of the strongest friendship patterns — any early distance or misunderstanding tends to resolve into a deeply loyal bond. Let it develop at its own pace. | دوستی کے مضبوط ترین نمونوں میں سے ایک — شروع کی کوئی بھی دوری یا غلط فہمی عموماً ایک گہرے وفادار رشتے میں بدل جاتی ہے۔ اسے اپنی رفتار سے پنپنے دیں۔ |
| Family bonds here often carry real depth, even if the relationship faced early distance or difficulty. What follows tends to be lasting and meaningful. | یہاں خاندانی رشتوں میں اکثر حقیقی گہرائی ہوتی ہے، چاہے رشتے کو شروع میں دوری یا مشکل کا سامنا رہا ہو۔ جو آگے آتا ہے وہ عموماً دیرپا اور بامعنی ہوتا ہے۔ |
| A strong working alliance — early friction or slow starts often lead to a highly effective, trusted partnership. Give it time to align. | ایک مضبوط پیشہ ورانہ اتحاد — شروع کے اختلافات یا سست آغاز اکثر ایک نہایت مؤثر اور قابلِ اعتماد شراکت تک لے جاتے ہیں۔ اسے ہم آہنگ ہونے کا وقت دیں۔ |
| Long-term | طویل مدتی |
| Wisdom | حکمت |
| The Path of Patience | صبر کا راستہ |
| Very good long-term; early struggles | طویل مدت میں بہت اچھا؛ شروع میں مشکلات |
| Judging the relationship too quickly in the beginning. Early friction may cause premature endings. | شروع ہی میں رشتے کے بارے میں جلد فیصلہ کر لینا۔ ابتدائی اختلافات قبل از وقت اختتام کا سبب بن سکتے ہیں۔ |
| Patience (sabr), emotional intelligence, gentle communication, and giving time for mutual understanding to deepen. | صبر، جذباتی فہم، نرم گفتگو، اور باہمی سمجھ کے گہرا ہونے کے لیے وقت دینا۔ |
| Traditionally very good for the long term, though early misunderstandings are common — patience transforms this into a strong bond. | روایتی طور پر طویل مدت کے لیے بہت اچھا ہے، اگرچہ ابتدائی غلط فہمیاں عام ہیں — صبر اسے ایک مضبوط رشتے میں بدل دیتا ہے۔ |
| Traditionally very good for marriage over the long term, though early misunderstandings are common. | روایتی طور پر شادی کے لیے طویل مدت میں بہت اچھا ہے، اگرچہ ابتدائی غلط فہمیاں عام ہیں۔ |
| Traditionally very good for the long term — early awkwardness is common, but patience often builds a lasting friendship. | روایتی طور پر طویل مدت کے لیے بہت اچھا ہے — شروع کی بے ڈھنگی عام ہے، مگر صبر اکثر ایک دیرپا دوستی بنا دیتا ہے۔ |
| Traditionally very good for the long term — early distance is common, but the family bond tends to deepen with time. | روایتی طور پر طویل مدت کے لیے بہت اچھا ہے — شروع کی دوری عام ہے، مگر خاندانی رشتہ وقت کے ساتھ گہرا ہوتا جاتا ہے۔ |
| Traditionally very good for the long term — early friction is common, but patience often builds a highly reliable partnership. | روایتی طور پر طویل مدت کے لیے بہت اچھا ہے — شروع کے اختلافات عام ہیں، مگر صبر اکثر ایک نہایت قابلِ بھروسا شراکت بنا دیتا ہے۔ |
| This connection often starts with confusion or misjudgment but strengthens significantly with time. Patience is what unlocks its real depth. | یہ تعلق اکثر الجھن یا غلط اندازے سے شروع ہوتا ہے مگر وقت کے ساتھ نمایاں طور پر مضبوط ہوتا ہے۔ صبر ہی اس کی حقیقی گہرائی کو کھولتا ہے۔ |
| Marriage starts with confusion or misjudgment but becomes very strong over time. Patience is the key to unlocking this bond's strength. | شادی الجھن یا غلط اندازے سے شروع ہوتی ہے مگر وقت کے ساتھ بہت مضبوط ہو جاتی ہے۔ صبر ہی اس رشتے کی طاقت کو کھولنے کی کنجی ہے۔ |
| Friendships here can start awkwardly or take time to click, but often become some of the most enduring bonds. Don't judge it too early. | یہاں دوستیاں بے ڈھنگے انداز سے شروع ہو سکتی ہیں یا ہم آہنگ ہونے میں وقت لے سکتی ہیں، مگر اکثر سب سے پائیدار رشتوں میں سے بن جاتی ہیں۔ جلد فیصلہ نہ کریں۔ |
| Family relationships under this pattern may start with distance or misunderstanding but tend to deepen meaningfully over the years. Give the bond time. | اس نمونے میں خاندانی رشتے دوری یا غلط فہمی سے شروع ہو سکتے ہیں مگر برسوں میں بامعنی طور پر گہرے ہوتے جاتے ہیں۔ رشتے کو وقت دیں۔ |
| Working relationships here often start rocky — mismatched expectations or slow trust-building — but tend to become highly reliable partnerships over time. | یہاں پیشہ ورانہ تعلقات اکثر مشکل سے شروع ہوتے ہیں — مختلف توقعات یا اعتماد بننے میں سستی — مگر وقت کے ساتھ نہایت قابلِ بھروسا شراکت بن جاتے ہیں۔ |
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
| Clarity of intention softens confusion — seek light before you speak or sign. | نیت کی وضاحت الجھن کو نرم کرتی ہے — بات کرنے یا دستخط کرنے سے پہلے اللہ سے رہنمائی مانگیں۔ |
| Educational reflection | تعلیمی غور و فکر |
| The Brand | نشان |
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
| The Fortunate Sacrificer | سعد الذابح (قربانی کرنے والا) |
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
| The Most Fortunate | سعد السعود (سب سے زیادہ خوش بخت) |
| Gratitude, Hope | شکرگزاری، امید |
| Named “most fortunate” in the star calendar — meet ease with shukr, and hardship with hope in Allah alone. | ستاروں کے کیلنڈر میں “سب سے زیادہ سعد” کہلاتی ہے — آسانی ملے تو شکر ادا کریں، اور مشکل پیش آئے تو صرف اللہ سے امید رکھیں۔ |
| Gratitude practices | شکرگزاری کے معمولات |
| Beginning hopeful works | پُرامید کاموں کا آغاز |
| Sharing ease with others | آسانی دوسروں کے ساتھ بانٹنا |
| Taking ease for granted | آسانی کو معمولی سمجھ لینا |
| Complacency | خود اطمینانی |
| Forgetting the Giver | عطا کرنے والے کو بھول جانا |
| The Fortunate Tents | سعد الاخبیہ (خیمے) |
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
| Quick turnover, fresh goods, dynamic movement, and energetic action align perfectly with your fiery nature and passionate energy | تیز رفتار نکاسی، تازہ مال، متحرک سرگرمی اور توانا عمل آپ کے آتشی مزاج اور پُرجوش توانائی سے پوری طرح ہم آہنگ ہیں |
| None specified - Fire element has freedom in career choices | کوئی مخصوص پابندی نہیں — آتشی عنصر کو پیشے کے انتخاب میں آزادی حاصل ہے |
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
| Stability, long-term growth, tangible assets, and connection to the earth's bounty align perfectly with your grounded nature and patient disposition | استحکام، طویل مدتی ترقی، ٹھوس اثاثے، اور زمین کی نعمتوں سے تعلق آپ کے زمینی مزاج اور صبر سے پوری طرح ہم آہنگ ہیں |
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
| Movement, circulation, communication, and fresh exchange align with your airy nature. Like wind, you thrive with constant motion and change. | حرکت، گردش، رابطہ اور تازہ لین دین آپ کے ہوائی مزاج سے ہم آہنگ ہیں۔ ہوا کی طرح آپ مسلسل حرکت اور تبدیلی میں پھلتے پھولتے ہیں۔ |
| Fish and all fish-related products - disrupts air element severely | مچھلی اور مچھلی سے متعلق تمام مصنوعات — روایتی طور پر ہوائی عنصر سے غیر موافق سمجھی جاتی ہیں |
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
| Flow, adaptability, emotional intelligence, and nurturing energy align with your water nature. Like water, you find success in filling needs and providing sustenance. | بہاؤ، لچک، جذباتی فہم اور پرورش کرنے والی توانائی آپ کے آبی مزاج سے ہم آہنگ ہیں۔ پانی کی طرح آپ ضرورتیں پوری کرنے اور رزق مہیا کرنے میں کامیابی پاتے ہیں۔ |
| Fruits and vegetables - these disrupt water element balance severely | پھل اور سبزیاں — یہ روایتی طور پر آبی عنصر سے غیر موافق سمجھی جاتی ہیں |
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
| Leadership, innovation, courage, and pioneering spirit align with your solar fire nature | قیادت، جدت، ہمت اور اولیت کا جذبہ آپ کے شمسی آتشی مزاج سے ہم آہنگ ہیں |
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
| Long-term stability, tangible assets, and foundational structures align with your earth nature | طویل مدتی استحکام، ٹھوس اثاثے اور بنیادی ڈھانچے آپ کے زمینی مزاج سے ہم آہنگ ہیں |
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
| Communication, movement, variety, and intellectual exchange align with your airy nature | ابلاغ، حرکت، تنوع اور فکری تبادلہ آپ کے ہوائی مزاج سے ہم آہنگ ہیں |
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
| Depth, transformation, healing, and uncovering hidden truths align with your Scorpionic water nature | گہرائی، تبدیلی، شفا اور پوشیدہ سچائیوں کی کھوج آپ کے عقربی آبی مزاج سے ہم آہنگ ہیں |
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
| Expansion, knowledge, truth-seeking, and freedom align with Sagittarius fire | وسعت، علم، حق کی تلاش اور آزادی قوس کے آتشی مزاج سے ہم آہنگ ہیں |
| None specified for this buruj | اس برج کے لیے کوئی مخصوص پابندی نہیں |
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
| Structure, discipline, long-term achievement, and mastery align with Capricorn earth | ساخت، نظم و ضبط، طویل مدتی کامیابی اور مہارت جدی کے زمینی مزاج سے ہم آہنگ ہیں |
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
| Innovation, community service, future vision, and progressive thinking align with Aquarius air | جدت، کمیونٹی کی خدمت، مستقبل بینی اور ترقی پسند سوچ دلو کے ہوائی مزاج سے ہم آہنگ ہیں |
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
| Compassion, service, spiritual connection, and healing align with Pisces water | ہمدردی، خدمت، روحانی تعلق اور شفا حوت کے آبی مزاج سے ہم آہنگ ہیں |
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
| Career paths that resonate with your spiritual energy and elemental nature | وہ پیشہ ورانہ راستے جو آپ کی روحانی توانائی اور آپ کے عنصری مزاج سے ہم آہنگ ہیں |
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
| The Sun's day is best for bold, visible action. Begin projects you want recognized. Seek blessings from those in authority. Make decisions that require confidence and leadership. Avoid hiding or working in secrecy — the Sun illuminates. | روایتی علمِ نجوم میں اتوار کو شمس سے منسوب کیا جاتا ہے، اور اسے نمایاں اور واضح اقدام کے لیے موزوں دن سمجھا جاتا ہے۔ جن منصوبوں کی پہچان چاہتے ہوں انہیں شروع کریں۔ بااختیار یا بزرگ افراد سے دعائیں لیں۔ ایسے فیصلے کریں جن میں اعتماد اور قیادت درکار ہو۔ چھپنے یا پوشیدگی میں کام کرنے سے بچیں — شمس روشنی کی علامت ہے۔ |
| Monday is ideal for matters of the home, family, and emotional wellbeing. Engage in travel or movement — the Moon governs journeys. Practice emotional healing, prayer, and du'ā'. Reflect on your inner world. Avoid confrontation; the Moon's waters prefer calm. | روایتی علمِ نجوم میں پیر کو قمر سے منسوب کیا جاتا ہے، اور یہ گھر، خاندان اور جذباتی سکون کے معاملات کے لیے موزوں دن سمجھا جاتا ہے۔ سفر یا نقل و حرکت اختیار کریں — روایت میں قمر کو اسفار سے جوڑا جاتا ہے۔ جذباتی سکون، نماز اور دعا کا اہتمام کریں۔ اپنے باطن پر غور کریں۔ ٹکراؤ سے بچیں؛ اس دن سکون اور تحمل کو ترجیح دیں۔ |
| Tuesday strengthens courage and decisive action. Tackle difficult tasks requiring force or conviction. Physical training, surgery if medically required, and overcoming fears align with Mars. Channel Mars energy into productive determination — not aggression. Start with Bismillah and firm niyyah. | روایتی علمِ نجوم میں منگل کو مریخ سے منسوب کیا جاتا ہے، اور اسے ہمت اور فیصلہ کن اقدام کا دن سمجھا جاتا ہے۔ قوت یا پختہ ارادے والے مشکل کام نمٹائیں۔ جسمانی تربیت، طبی ضرورت پر سرجری، اور خوف پر قابو پانا اسی نسبت سے مناسب سمجھا جاتا ہے۔ ہمت اور قوت کو جارحیت نہیں بلکہ بامقصد عزم میں ڈھالیں۔ بسم اللہ اور پختہ نیت سے آغاز کریں۔ |
| Wednesday is the day of the scholar and the merchant. Ideal for studying, writing, signing contracts, teaching, and all forms of communication. Engage the mind — read, research, debate. Mercury rewards precision and clarity. This is also an excellent day for Zikr that involves recitation (tilāwah). | بدھ عالم اور تاجر کا دن ہے، اور روایت میں اسے عطارد سے منسوب کیا جاتا ہے۔ مطالعہ، تحریر، معاہدوں پر دستخط، تدریس اور ہر طرح کی گفتگو کے لیے موزوں ہے۔ ذہن کو مشغول رکھیں — پڑھیں، تحقیق کریں، مباحثہ کریں۔ اس دن درستی اور وضاحت کو اپنا شعار بنائیں۔ یہ تلاوت پر مشتمل ذکر کے لیے بھی بہترین دن ہے۔ |
| Thursday is the most blessed day for spiritual elevation, wealth-seeking, and expansion. Make du'ā' for rizq (sustenance). Begin long-term projects. Seek knowledge, visit scholars, and perform generous acts of sadaqah. Thursday night (eve of Friday) is especially blessed — use it for extra worship. | روایت میں جمعرات روحانی بلندی، رزق کی طلب اور وسعت کے لیے خاص طور پر بابرکت سمجھی جاتی ہے۔ رزق کے لیے دعا کریں۔ طویل مدتی منصوبے شروع کریں۔ علم حاصل کریں، اہلِ علم سے ملیں، اور فراخ دلی سے صدقہ کریں۔ جمعرات کی رات (جمعہ کی شب) کو خاص طور پر بابرکت سمجھا جاتا ہے — اسے اضافی عبادت کے لیے استعمال کریں۔ |
| Friday is the most sacred day in Islam (Yawm al-Jum'ah). Venus and Friday align in beauty, community, and gratitude. Attend Jumu'ah, send abundant Ṣalawāt upon the Prophet ﷺ, and perform acts of beauty (charity, kind words, reconciliation). It is a day for love, forgiveness, and peace. | جمعہ اسلام میں سب سے افضل دن ہے (یومُ الجمعہ)۔ روایتی علمِ نجوم اسے زہرہ سے منسوب کرتا ہے، جو حسن، اجتماع اور شکرگزاری کی علامت ہے۔ جمعہ کی نماز میں شریک ہوں، نبی کریم ﷺ پر کثرت سے درود شریف پڑھیں، اور حسنِ عمل (صدقہ، نرم گفتگو، صلح) اختیار کریں۔ یہ محبت، معافی اور سکون کا دن ہے۔ |
| Saturday is governed by the slowest and most disciplined of the classical planets. It is a day for long-term commitments, serious study, and patient effort. Engage in property matters, legal affairs, and building lasting structures. Avoid rushing — Saturn rewards consistent, sustained effort over time. | روایتی علمِ نجوم میں ہفتے کو زحل سے منسوب کیا جاتا ہے، جو کلاسیکی سیاروں میں سب سے سست اور سب سے منظم ہے۔ یہ طویل مدتی وعدوں، سنجیدہ مطالعے اور صبر آزما کوشش کا دن ہے۔ جائیداد، قانونی معاملات اور پائیدار ڈھانچے بنانے میں مشغول ہوں۔ جلد بازی سے بچیں — اس دن مسلسل اور دیرپا محنت کو ترجیح دیں۔ |



## 6. AI-drafted UI strings from the Urdu audit (2050 strings, NOT native-reviewed)

Found by a browser audit of the /ur pages and of the Urdu language mode on the other pages (menus, tabs, calculators, result tabs, page prose, FAQs), plus a scan of the source for hard-coded English. Drafted by an AI assistant, live on noindex /ur only. Rules: traditional / reflective framing, no prediction or medical claims, planets never agents; Qur'an lines and Divine Names are NOT translated (Arabic comes from the data files: `planetaryZikr.ts`, `lunarMansions.ts`, `burujData.json`, `incense.ts`, the verified `ar-ui.json` Qur'an lines). Edit `scripts/i18n/ur/catalog_ai_draft_ui.py`, then run `build_catalog.py` and `build_review.py`.

| Area | Strings |
|---|---|
| incense | 10 |
| home | 13 |
| home-menu | 18 |
| home-compat | 8 |
| zikr | 34 |
| burj-career | 1 |
| burj-page | 103 |
| compat-page | 58 |
| abjad-page | 30 |
| potd-page | 38 |
| names-page | 29 |
| planetary-hours-page | 11 |
| ikhtiyarat-page | 19 |
| best-day | 78 |
| manazil-page | 52 |
| birth-profile | 11 |
| planet-transit | 65 |
| sadaqa-page | 150 |
| sadaqa-day | 58 |
| ramadan | 37 |
| burj-personality | 120 |
| burj-blessed-day | 136 |
| burj-sadaqah | 270 |
| scan-TrackingDashboard | 62 |
| scan-SpiritualPracticeTab | 35 |
| scan-IstikharaEducation | 40 |
| scan-DhikrCounter | 28 |
| scan-IstikharaResults | 25 |
| scan-IstikharaPanel | 12 |
| scan-IstikharaForm | 12 |
| scan-ChallengeCard | 9 |
| scan-CareerTabAdvanced | 6 |
| scan-PlanetOfTheDayPage | 7 |
| scan-DivineNameIntentionResul | 4 |
| scan-GetTheAppBanner | 3 |
| scan-DignityDetailPanel | 4 |
| scan-DivineNameMatchesView | 3 |
| scan-WaveHadiyyaCard | 3 |
| scan-ProfileSetupBilingual | 2 |
| scan-DailyReflectionCard | 2 |
| scan-PlanetTransitCard | 2 |
| scan-PlanetaryHourCard | 2 |
| scan-PlanetOfTheDay | 1 |
| scan-ScanDatesView | 2 |
| scan-RamadanHub | 2 |
| scan-CommunityBanner | 2 |
| scan-RamadanPage | 2 |
| scan-MobileMenu | 1 |
| scan-SimplifiedStatusBadge | 1 |
| scan-RamadanBannerMini | 1 |
| scan-BadgeDisplay | 1 |
| scan-RecommenderBanner | 1 |
| zodiac-sadaqah | 185 |
| spiritual-practice | 45 |
| sadaqah-tab | 14 |
| burj-overview | 3 |
| burj-spiritual | 4 |
| ikhtiyarat-detail | 175 |

### 6.1 incense (10)

| English | Urdu |
|---|---|
| Camphor + White Sandalwood | کافور + سفید صندل |
| Yellow Sandalwood + Frankincense | زرد صندل + لوبان |
| Mastic + Frankincense | مصطکی + لوبان |
| Yellow Sandalwood + Agarwood (ʿŪd) | زرد صندل + عود (اگر) |
| Musk + Rose | مشک + گلاب |
| For calm, receptivity, and inner quiet | سکون، قبولیت اور باطنی خاموشی کے لیے |
| For courage and steady resolve | ہمت اور پختہ عزم کے لیے |
| For clarity of mind and ease in speech | ذہنی وضاحت اور گفتگو میں آسانی کے لیے |
| For abundance, expansion, and barakah | فراوانی، وسعت اور برکت کے لیے |
| For harmony and softened hearts | ہم آہنگی اور نرم دلی کے لیے |



### 6.2 home (13)

| English | Urdu |
|---|---|
| today | آج |
| Day Hours | دن کی ساعتیں |
| Night Hours | رات کی ساعتیں |
| sunrise | طلوعِ آفتاب |
| now | اب |
| Misk wa Ward | مسک و ورد |
| Lubān wa Misk | لُبان و مسک |
| Carousel | ایک سیارہ |
| Tasbih Counter | تسبیح کاؤنٹر |
| Tap to count | گننے کے لیے ٹیپ کریں |
| Reset | ری سیٹ |
| You can close anytime — your count will be saved | آپ کسی بھی وقت بند کر سکتے ہیں — آپ کی گنتی محفوظ رہے گی |
| Log Progress | پیش رفت درج کریں |



### 6.3 home-menu (18)

| English | Urdu |
|---|---|
| 📿 Abjad System | 📿 ابجد کا نظام |
| Abjad System | ابجد کا نظام |
| Current Mode: | موجودہ نظام: |
| Western | مغربی ترتیب |
| Eastern | مشرقی ترتیب |
| Maghribi System: | مغربی نظام: |
| Traditional method of the Maghreb (Morocco to Libya), al-Andalus and West Africa (ش=1000, غ=900) | مغرب (مراکش تا لیبیا)، اندلس اور مغربی افریقہ کا روایتی طریقہ (ش=1000، غ=900) |
| Mashriqi System: | مشرقی نظام: |
| Eastern method used in Egypt, the Middle East and Asia (ش=300, غ=1000) | مصر، مشرقِ وسطیٰ اور ایشیا میں رائج مشرقی طریقہ (ش=300، غ=1000) |
| About This App | اس ایپ کے بارے میں |
| Close menu | مینو بند کریں |
| Back | واپس |
| is your guide to the Islamic sciences of | اسلامی علوم کے لیے آپ کا رہنما ہے — |
| (Science of Letters) and | (حروف کا علم) اور |
| ʿIlm al-ʿAdad | علم العدد |
| (Science of Numbers). | (اعداد کا علم)۔ |
| Discover the sacred numerical values and elemental associations within Arabic text, connecting language to the deeper patterns of creation. | عربی متن میں چھپی مقدس عددی قدروں اور عناصر کی نسبتوں کو جانیں، اور زبان کو تخلیق کے گہرے نمونوں سے جوڑیں۔ |
| Version 1.0 • © 2025 | ورژن 1.0 • © 2025 |



### 6.4 home-compat (8)

| English | Urdu |
|---|---|
| Explore general astrological compatibility from birth dates | تاریخِ پیدائش سے عمومی فلکی مطابقت جانیں |
| Enter Two Birth Dates | دو تاریخِ پیدائش درج کریں |
| General astrological compatibility from Sun sign, Moon sign, and Venus-Mars — no birth time needed | شمس کے برج، قمر کے برج اور زہرہ–مریخ کی بنیاد پر عمومی فلکی مطابقت — پیدائش کا وقت درکار نہیں |
| Display Name (Optional) | ظاہر کیا جانے والا نام (اختیاری) |
| Date of Birth (Required) | تاریخِ پیدائش (ضروری) |
| Calculate Compatibility | مطابقت کا حساب کریں |
| e.g., Ahmed | مثلاً: احمد |
| e.g., Fatima | مثلاً: فاطمہ |



### 6.5 zikr (34)

| English | Urdu |
|---|---|
| Increase in blessings and goodness. | برکتوں اور بھلائی میں اضافے کے لیے۔ |
| For wealth and prosperity. | مال و دولت اور خوشحالی کے لیے۔ |
| For sustenance and provision. | رزق اور روزی کے لیے۔ |
| For abundance in different forms of wealth. | مال کی مختلف صورتوں میں فراوانی کے لیے۔ |
| For resolving difficulties and subtle ease. | مشکلات کے حل اور لطیف آسانی کے لیے۔ |
| For fixing relationships and marriage. | رشتوں اور ازدواجی تعلق کی اصلاح کے لیے۔ |
| Protection from enemies and their plots. | دشمنوں اور ان کی چالوں سے حفاظت کے لیے۔ |
| To overcome and humble enemies. | دشمنوں پر غالب آنے اور ان کے سامنے عاجزی کے لیے۔ |
| For strength against oppression or harm. | ظلم یا نقصان کے مقابلے میں قوت کے لیے۔ |
| especially Tuesday | خاص طور پر منگل |
| For overpowering enemies. | دشمنوں پر غلبے کے لیے۔ |
| For gentleness, subtle ease, and calming the heart. | نرمی، لطیف آسانی اور دل کے سکون کے لیے۔ |
| For mercy, ease in transitions, and emotional balance. | رحمت، تبدیلیوں میں آسانی اور جذباتی توازن کے لیے۔ |
| For compassion and softness in family and home matters. | گھریلو اور خاندانی معاملات میں ہمدردی اور نرمی کے لیے۔ |
| For affection, harmony, and softening of hearts. | محبت، ہم آہنگی اور دلوں کی نرمی کے لیے۔ |
| For clarity of mind and beneficial knowledge. | ذہنی وضاحت اور نافع علم کے لیے۔ |
| For wisdom in speech, study, and decisions. | گفتگو، مطالعے اور فیصلوں میں حکمت کے لیے۔ |
| For insight and awareness in learning and communication. | سیکھنے اور گفتگو میں بصیرت اور آگاہی کے لیے۔ |
| For provision, barakah, and trust in Allah as Provider. | رزق، برکت اور اللہ کو رازق ماننے پر بھروسے کے لیے۔ |
| For spaciousness of heart and ease in what feels tight. | دل کی کشادگی اور تنگی محسوس ہونے والی باتوں میں آسانی کے لیے۔ |
| For generosity and noble character. | سخاوت اور بلند اخلاق کے لیے۔ |
| For mindful reliance on Allah's care and guardianship. | اللہ کی نگہداشت اور حفاظت پر شعوری بھروسے کے لیے۔ |
| For forbearance and a softened heart. | بردباری اور نرم دلی کے لیے۔ |
| For care and precision in what one undertakes. | اپنے کاموں میں احتیاط اور درستی کے لیے۔ |
| For turning to the All-Hearing in duʿāʾ. | دعا میں سننے والے رب کی طرف رجوع کے لیے۔ |
| For humility before the Most Great and dignity without arrogance. | عظمت والے کے سامنے عاجزی اور تکبر کے بغیر وقار کے لیے۔ |
| For strength with honour in righteous effort. | نیک کوشش میں عزت کے ساتھ قوت کے لیے۔ |
| For steadfastness and what endures of good deeds. | ثابت قدمی اور باقی رہنے والے نیک اعمال کے لیے۔ |
| For patience and steadfastness in long work. | طویل کام میں صبر اور استقامت کے لیے۔ |
| For wise restraint and sound judgment. | دانشمندانہ ضبط اور درست فیصلے کے لیے۔ |
| For forbearance when progress feels slow. | پیش رفت سست محسوس ہونے پر بردباری کے لیے۔ |
| For firmness, discipline, and steady resolve. | پختگی، نظم و ضبط اور مستقل عزم کے لیے۔ |
| Used for protection, defense, and overcoming enemies. | حفاظت، دفاع اور دشمنوں پر قابو پانے کے لیے پڑھا جاتا ہے۔ |
| Thursday's planet in classical ʿIlm al-Nujūm — for remembrance, generosity, and reliance on Allah's provision. Not prediction. | کلاسیکی علم النجوم میں جمعرات سے منسوب سیارہ — یاد، سخاوت اور اللہ کے رزق پر بھروسے کے لیے۔ پیش گوئی نہیں۔ |



### 6.6 burj-career (1)

| English | Urdu |
|---|---|
| Barred Plymouth Rock | دھاری دار پلائی ماؤتھ راک |



### 6.7 burj-page (103)

| English | Urdu |
|---|---|
| Arabic Script Required | عربی رسم الخط ضروری ہے |
| Both names must be entered in Arabic letters for accurate calculation | درست حساب کے لیے دونوں نام عربی حروف میں لکھنا ضروری ہے |
| Mother's Name Importance | والدہ کے نام کی اہمیت |
| The mother's name is essential as it represents the soul's entry into this world | روایت میں والدہ کا نام ضروری سمجھا جاتا ہے، کیونکہ یہ اس دنیا میں آمد کی نسبت کو ظاہر کرتا ہے |
| Auto-Save Feature | خودکار محفوظ کرنے کی سہولت |
| Your calculations are automatically saved for quick access later | آپ کے حساب خودکار طور پر محفوظ ہو جاتے ہیں تاکہ بعد میں جلدی دیکھ سکیں |
| Privacy First | رازداری پہلے |
| All calculations happen locally in your browser - no data is sent to servers | تمام حساب آپ کے براؤزر ہی میں ہوتے ہیں — کوئی ڈیٹا سرورز کو نہیں بھیجا جاتا |
| Your Elemental Nature | آپ کا عنصری مزاج |
| Discover your core temperament (Fire, Earth, Air, or Water) | اپنا بنیادی مزاج جانیں (آگ، مٹی، ہوا یا پانی) |
| Personality Insights | شخصیت کے پہلو |
| Detailed traits, social dynamics, and dream symbolism | تفصیلی خصوصیات، سماجی انداز اور خوابوں کی علامتیں |
| Traditional and modern career paths aligned with your energy | آپ کی توانائی سے ہم آہنگ روایتی اور جدید پیشے |
| The most auspicious day for important decisions | روایت میں اہم فیصلوں کے لیے سب سے موزوں سمجھا جانے والا دن |
| Spiritual Practices | روحانی معمولات |
| Personalized dhikr, charity guidance, and sacred offerings | ذاتی ذکر، صدقے کی رہنمائی اور مقدس نذرانے |
| Select Your Birth Date | اپنی تاریخِ پیدائش منتخب کریں |
| Full date | مکمل تاریخ |
| Month & day only | صرف مہینہ اور دن |
| Best when using your own saved profile. | اپنے محفوظ کردہ پروفائل کے ساتھ بہتر کام کرتا ہے۔ |
| What You'll Discover: | آپ کیا جانیں گے: |
| Your Burj (zodiac sign) | آپ کا برج (فلکی نشان) |
| Your elemental nature | آپ کا عنصری مزاج |
| Optional lunar timing baselines (requires full DOB year) | اختیاری قمری اوقات کی بنیادیں (مکمل سالِ پیدائش درکار) |
| Date of Birth | تاریخِ پیدائش |
| Month | مہینہ |
| Select... | منتخب کریں... |
| No Data Storage | ڈیٹا محفوظ نہیں کیا جاتا |
| Your names are calculated in real-time and never stored on our servers. All calculations happen locally in your browser. | آپ کے نام اسی وقت شمار ہوتے ہیں اور ہمارے سرورز پر کبھی محفوظ نہیں کیے جاتے۔ تمام حساب آپ کے براؤزر ہی میں ہوتے ہیں۔ |
| Sacred Tradition | مقدس روایت |
| This tool is created with respect for Islamic tradition and scholarly heritage. All calculations follow authentic classical methods. | یہ ٹول اسلامی روایت اور علمی ورثے کے احترام کے ساتھ بنایا گیا ہے۔ تمام حساب مستند کلاسیکی طریقوں کے مطابق ہیں۔ |
| Istikhārat al-Asmāʾ · | استخارۃ الاسماء · |
| Find Your Burj from Your Name and Your Mother's Name | اپنے نام اور اپنی والدہ کے نام سے اپنا برج معلوم کریں |
| From the Arab world to West Africa and South Asia, people look for their burj (sign, ṭabʿ or sitāra) from their own name and their mother's name — in Arabic «برجك من اسمك واسم امك», in French « trouver son burj avec son prénom et le prénom de sa mère », in Urdu "naam se sitara". This page does the calculation with the same "Who Am I?" tool used in the Asrār app and explains the result: your element and temperament, blessed day, recommended dhikr and the sadaqah for your burj. | عرب دنیا سے مغربی افریقہ اور جنوبی ایشیا تک لوگ اپنے نام اور اپنی والدہ کے نام سے اپنا برج (نشان، طبع یا ستارہ) معلوم کرتے ہیں — عربی میں «برجك من اسمك واسم امك»، فرانسیسی میں « trouver son burj avec son prénom et le prénom de sa mère »، اور اردو میں «نام سے ستارہ»۔ یہ صفحہ اسرار ایپ والے اسی «میں کون ہوں؟» ٹول سے حساب کرتا ہے اور نتیجہ سمجھاتا ہے: آپ کا عنصر اور مزاج، مبارک دن، تجویز کردہ ذکر اور آپ کے برج کا صدقہ۔ |
| The traditional name for this reflection is Istikhārat al-Asmāʾ, but it is not the istikhāra prayer: real istikhāra is ṣalāt al-istikhāra, the two rakʿas and duʿāʾ taught by the Prophet ﷺ. Use this tool for reflection and education, not prediction; Allah alone knows the unseen. | اس غور و فکر کا روایتی نام استخارۃ الاسماء ہے، مگر یہ نمازِ استخارہ نہیں: حقیقی استخارہ نمازِ استخارہ ہے، یعنی وہ دو رکعتیں اور دعا جو نبی کریم ﷺ نے سکھائی ہے۔ اس ٹول کو غور و فکر اور تعلیم کے لیے استعمال کریں، پیش گوئی کے لیے نہیں؛ غیب کا علم صرف اللہ کو ہے۔ |
| How the calculation works | حساب کیسے ہوتا ہے |
| Write your name and your mother's name in Arabic letters (or type them in Latin letters and pick the Arabic spelling). | اپنا نام اور اپنی والدہ کا نام عربی حروف میں لکھیں (یا لاطینی حروف میں لکھ کر عربی املا منتخب کریں)۔ |
| Each name is converted to its Abjad (ḥisāb al-jummal) total using the Maghribi letter values. | ہر نام کو اس کے ابجد (حسابِ جمل) مجموعے میں مغربی ترتیب کی قدروں سے بدلا جاتا ہے۔ |
| Add the two totals and divide by 12. The remainder (1–12, with 0 counted as 12) is your burj, from 1 = Aries (al-Ḥamal) to 12 = Pisces (al-Ḥūt). | دونوں مجموعوں کو جمع کر کے 12 سے تقسیم کریں۔ باقی (1 تا 12، صفر کو 12 شمار کر کے) آپ کا برج ہے، 1 = حمل سے 12 = حوت تک۔ |
| The burj gives your element (fire, earth, air or water), which describes your ṭabʿ (temperament), and links to a blessed day, a dhikr and a sadaqah. | برج آپ کا عنصر (آگ، مٹی، ہوا یا پانی) بتاتا ہے جو آپ کے طبع (مزاج) کی نشاندہی کرتا ہے، اور ایک مبارک دن، ذکر اور صدقے سے جوڑتا ہے۔ |
| Worked example | مثال |
| محمد (Muhammad) = 92 and فاطمة (Fatima) = 135. 92 + 135 = 227, and 227 ÷ 12 = 18 remainder 11, so the burj is 11: Aquarius (al-Dalw), an air burj. | محمد = 92 اور فاطمة = 135۔ 92 + 135 = 227، اور 227 ÷ 12 = 18 باقی 11، لہٰذا برج 11 ہے: دلو، ایک ہوائی برج۔ |
| Don't know your mother's name in Arabic? The tool can also work from your date of birth (tropical zodiac). | والدہ کا نام عربی میں نہیں آتا؟ ٹول آپ کی تاریخِ پیدائش (استوائی بروج) سے بھی کام کر سکتا ہے۔ |
| The 12 burūj at a glance | ایک نظر میں 12 بروج |
| Ḥamal | حمل |
| Temperament | مزاج |
| Slow to anger, but explosive when provoked—impossible to calm down once ignited | دیر سے غصہ آتا ہے، مگر چھیڑنے پر پھٹ پڑتا ہے — ایک بار بھڑک جائے تو ٹھنڈا کرنا ناممکن |
| Blessed day | مبارک دن |
| Ya Maliku Ya Quddus | يا مالك يا قدوس |
| Beef (cow meat) - shared with those in need | گائے کا گوشت — ضرورت مندوں کے ساتھ بانٹنا |
| al-Thawr | ثور |
| Exceptionally patient and enduring - can bear tremendous hardship without complaint | نہایت صابر اور بردبار — بغیر شکایت کے بڑی مشقت سہہ لیتا ہے |
| Ya Kafi Ya Ghani | يا كافي يا غني |
| Food or earth-derived products - grains, crops, cereals | مٹی سے حاصل ہونے والی اشیا یا خوراک — اناج، فصلیں، غلہ |
| Jawzāʾ | جوزا |
| Quick-tempered and easily provoked - anger rises swiftly like a storm wind | تیز مزاج اور جلد مشتعل ہونے والا — غصہ آندھی کی طرح تیزی سے چڑھتا ہے |
| Ya 'Aliyyu Ya 'Azim | يا علي يا عظيم |
| Their own clothing from their wardrobe - garments they have worn | اپنی الماری کا اپنا لباس — پہنے ہوئے کپڑے |
| Saraṭān | سرطان |
| Extremely patient - mistaken for being foolish or weak due to extraordinary tolerance | بے حد صابر — غیر معمولی برداشت کی وجہ سے بعض اوقات بھولا یا کمزور سمجھ لیا جاتا ہے |
| Ya Rahmanu Ya Rahim | يا رحمن يا رحيم |
| Rice and fish together (can be cooked or uncooked) | چاول اور مچھلی اکٹھے (پکے ہوئے یا کچے) |
| al-Asad | اسد |
| Passionate and dynamic - driven by inner fire and enthusiasm for life | پُرجوش اور متحرک — اندرونی آگ اور زندگی کے جذبے سے چلنے والا |
| Ya Hayyu Ya Qayyum | يا حي يا قيوم |
| Similar to Buruj 1 - beef or substantial food for those in need | برج 1 کی طرح — ضرورت مندوں کے لیے گائے کا گوشت یا ٹھوس خوراک |
| al-Sunbula | سنبلہ |
| Deeply grounded and practical - embodies stability and reliability | گہرائی سے زمین سے جڑا اور عملی — استحکام اور بھروسے کی مثال |
| Ya Fattah Ya Razzaq | يا فتاح يا رزاق |
| Grains, crops, earth-derived food products | اناج، فصلیں، مٹی سے حاصل ہونے والی غذائی اشیا |
| Quick-minded and intellectually agile - thrives on mental stimulation | تیز ذہن اور فکری طور پر چست — ذہنی سرگرمی میں پھلتا پھولتا ہے |
| Clothing from your wardrobe - similar to Buruj 3 | آپ کی الماری کے کپڑے — برج 3 کی طرح |
| al-ʿAqrab | عقرب |
| Intense and transformative - deep emotional currents run beneath calm surface | شدید اور تبدیلی لانے والا — پُرسکون سطح کے نیچے گہرے جذباتی دھارے بہتے ہیں |
| Yā Māliku Yā Quddūs | يَا مَالِكُ يَا قُدُّوسُ |
| Rice and fish together - similar to Buruj 4 | چاول اور مچھلی اکٹھے — برج 4 کی طرح |
| al-Qaws | قوس |
| Optimistic and adventurous - seeks expansion and truth | پُرامید اور مہم جو — وسعت اور سچائی کی تلاش میں |
| Ya Kabiru Ya Muta'ali | يا كبير يا متعالي |
| Food to those in need - similar to other fire buruj | ضرورت مندوں کو کھانا — دیگر آتشی بروج کی طرح |
| al-Jady | جدی |
| Disciplined and ambitious - seeks achievement and mastery | نظم و ضبط والا اور بلند حوصلہ — کامیابی اور مہارت کا طالب |
| Yā Fattāḥu Yā Razzāq | يَا فَتَّاحُ يَا رَزَّاقُ |
| Grains, earth-derived food products | اناج، مٹی سے حاصل ہونے والی غذائی اشیا |
| al-Dalw | دلو |
| Innovative and humanitarian - seeks to serve the collective | جدت پسند اور انسان دوست — اجتماعی خدمت کا خواہاں |
| Clothing from wardrobe | الماری کے کپڑے |
| Compassionate and intuitive - deeply sensitive to others' pain | ہمدرد اور وجدانی — دوسروں کے درد کے لیے نہایت حساس |
| Yā Kabīru Yā Mutaʿālī | يَا كَبِيرُ يَا مُتَعَالِي |
| Rice and fish together | چاول اور مچھلی اکٹھے |
| All sadaqah by burj → | برج کے مطابق تمام صدقات ← |
| How do I find my burj from my name and my mother's name? | میں اپنے نام اور والدہ کے نام سے اپنا برج کیسے معلوم کروں؟ |
| Add the Abjad value of your name to the Abjad value of your mother's name, divide by 12 and keep the remainder (0 counts as 12). Remainder 1 is Aries (al-Ḥamal), 2 Taurus, 3 Gemini, and so on to 12, Pisces (al-Ḥūt). The calculator above does it for you. | اپنے نام کی ابجد قدر کو اپنی والدہ کے نام کی ابجد قدر میں جمع کریں، 12 سے تقسیم کریں اور باقی رکھیں (صفر 12 شمار ہوتا ہے)۔ باقی 1 حمل ہے، 2 ثور، 3 جوزا، اور اسی طرح 12 تک جو حوت ہے۔ اوپر والا کیلکولیٹر یہ آپ کے لیے کر دیتا ہے۔ |
| Why is the mother's name used? | والدہ کا نام کیوں استعمال ہوتا ہے؟ |
| In ʿilm al-ḥurūf your own name is read as who you are, and your mother's name as what surrounds you: family inheritance and the conditions of your path. Pairing the two gives the burj. The same method is found in Arabic, West African (Hausa, Wolof) and South Asian practice. | علم الحروف میں آپ کا اپنا نام آپ کی ذات کے طور پر پڑھا جاتا ہے، اور والدہ کا نام اس کے طور پر جو آپ کو گھیرے ہوئے ہے: خاندانی ورثہ اور آپ کے راستے کے حالات۔ دونوں کو ملانے سے برج نکلتا ہے۔ یہی طریقہ عربی، مغربی افریقی (ہاؤسا، وولوف) اور جنوبی ایشیائی روایت میں ملتا ہے۔ |
| Is this the same as istikhāra? | کیا یہ استخارہ ہے؟ |
| No. Istikhāra is the prayer of seeking Allah's guidance (ṣalāt al-istikhāra). The name "Istikhārat al-Asmāʾ" is traditional, but this calculation is a reflection on names and temperament, not a prayer and not a way to know the unseen. | نہیں۔ استخارہ اللہ سے خیر طلب کرنے کی دعا اور نماز ہے (نمازِ استخارہ)۔ «استخارۃ الاسماء» کا نام روایتی ہے، مگر یہ حساب ناموں اور مزاج پر غور و فکر ہے، نہ کوئی نماز ہے اور نہ غیب جاننے کا کوئی طریقہ۔ |
| Is my name burj the same as my zodiac sign by birth date? | کیا میرا نام والا برج میری تاریخِ پیدائش والے برج کے برابر ہوتا ہے؟ |
| Not necessarily. The name-based burj comes only from the Abjad values of the two names. Your sign by birth date comes from the Sun's position when you were born, so the two can differ. The tool offers both methods. | ضروری نہیں۔ نام والا برج صرف دونوں ناموں کی ابجد قدروں سے نکلتا ہے۔ تاریخِ پیدائش والا برج آپ کی پیدائش کے وقت شمس کے مقام سے نکلتا ہے، اس لیے دونوں مختلف ہو سکتے ہیں۔ ٹول دونوں طریقے فراہم کرتا ہے۔ |
| What does my burj tell me? | میرا برج مجھے کیا بتاتا ہے؟ |
| Your element and temperament, a blessed day of the week, a Divine Name to remember in dhikr, and a traditional sadaqah. Read it as encouragement to good deeds and self-knowledge, not as a forecast. | آپ کا عنصر اور مزاج، ہفتے کا ایک مبارک دن، ذکر میں یاد رکھنے کے لیے ایک اسمِ الٰہی، اور ایک روایتی صدقہ۔ اسے نیک اعمال اور خود شناسی کی ترغیب کے طور پر پڑھیں، پیش گوئی کے طور پر نہیں۔ |
| Today's recommended sadaqah. | آج کا تجویز کردہ صدقہ۔ |
| Compare two names with the Abjad soul-connection method. | ابجد کے روحانی ربط کے طریقے سے دو ناموں کا موازنہ کریں۔ |



### 6.8 compat-page (58)

| English | Urdu |
|---|---|
| Discover your spiritual resonance with the 99 Names of Allah | اللہ کے 99 ناموں کے ساتھ اپنی روحانی ہم آہنگی جانیں |
| You and a Divine Name | آپ اور ایک اسمِ الٰہی |
| Find My Best Names | میرے لیے موزوں اسماء تلاش کریں |
| Pick a Name | ایک اسم منتخب کریں |
| We'll calculate your resonance with all 99 Names and show you the ones that resonate most favorably. | ہم آپ کی ہم آہنگی تمام 99 ناموں کے ساتھ شمار کریں گے اور وہ نام دکھائیں گے جن سے سب سے زیادہ موافقت ہے۔ |
| Calculate Resonance | ہم آہنگی کا حساب کریں |
| Type to search: Muhammad, Fatima... | تلاش کے لیے لکھیں: محمد، فاطمہ... |
| Call upon Allah by the Name whose meaning matches your need | اللہ کو اس نام سے پکاریں جس کا مفہوم آپ کی ضرورت سے مطابقت رکھتا ہو |
| Call upon Allah by the Name whose meaning matches your need — Quran 7:180 | اللہ کو اس نام سے پکاریں جس کا مفہوم آپ کی ضرورت سے مطابقت رکھتا ہو — قرآن 7:180 |
| 1. What is your intention? | 1. آپ کی نیت کیا ہے؟ |
| Provision & Sustenance | رزق اور روزی |
| Rizq, livelihood, and material need | رزق، روزگار اور مادی ضرورت |
| Healing | شفا |
| Recovery from illness, physical or spiritual | بیماری سے صحت یابی، جسمانی ہو یا روحانی |
| Relief from Distress | پریشانی سے نجات |
| Anxiety, grief, or a heavy heart | فکر، غم یا بوجھل دل |
| Safety from harm and fear | نقصان اور خوف سے حفاظت |
| Clarity in a decision — alongside istikhāra, not instead of it | فیصلے میں وضاحت — استخارے کے ساتھ، اس کی جگہ نہیں |
| Marriage & Love | نکاح اور محبت |
| Harmony between spouses, love, and reconciliation | میاں بیوی میں ہم آہنگی، محبت اور صلح |
| Repentance (tawba) and seeking pardon | توبہ اور معافی کی طلب |
| Strength & Patience | قوت اور صبر |
| Endurance through hardship | مشکل میں استقامت |
| Ease & Removing Obstacles | آسانی اور رکاوٹوں کا ازالہ |
| Opening a way through a difficult affair | مشکل معاملے میں راستہ کھلنا |
| Knowledge & Understanding | علم اور فہم |
| Increase in beneficial knowledge | نافع علم میں اضافہ |
| Find the Best Names | موزوں اسماء تلاش کریں |
| Check a Name | ایک اسم جانچیں |
| We'll search all 99 Names and show you the ones that best match your intention. | ہم تمام 99 ناموں میں تلاش کر کے وہ نام دکھائیں گے جو آپ کی نیت سے سب سے زیادہ مطابقت رکھتے ہیں۔ |
| Why this matters | یہ کیوں اہم ہے |
| Each of the 99 Names is classically associated with certain qualities. Matching your intention to a Name whose meaning relates to it is a way of calling on Allah by the Name best suited to your need, rather than an arbitrary choice. | ہر ایک نام روایتی طور پر کچھ صفات سے منسوب ہے۔ اپنی نیت کو ایسے نام سے ملانا جس کا مفہوم اس سے متعلق ہو، اللہ کو اس نام سے پکارنے کا ایک طریقہ ہے جو آپ کی ضرورت کے سب سے زیادہ مطابق ہو، نہ کہ کوئی من مانا انتخاب۔ |
| 2. Which Name do you want to check? | 2. آپ کون سا نام جانچنا چاہتے ہیں؟ |
| Search: Ar-Raḥmān, Light, healing... | تلاش کریں: الرحمن، نور، شفا... |
| Name Compatibility for Marriage — Abjad Soul Connection Calculator | شادی کے لیے ناموں کی مطابقت — ابجد سے روحانی ربط کا کیلکولیٹر |
| Before a nikāḥ, many families like to look at the harmony between two names. In ʿilm al-ḥurūf each Arabic letter has a number (the Abjad, or ḥisāb al-jummal), so every name has a total. This calculator compares the two totals with the traditional "soul connection" method and reads the result for marriage first, with friendship, family and work as other contexts. | نکاح سے پہلے بہت سے گھرانے دو ناموں کے درمیان ہم آہنگی دیکھنا پسند کرتے ہیں۔ علم الحروف میں ہر عربی حرف کا ایک عدد ہے (ابجد یا حسابِ جمل)، اس لیے ہر نام کا ایک مجموعہ ہوتا ہے۔ یہ کیلکولیٹر دونوں مجموعوں کو روایتی «روحانی ربط» کے طریقے سے ملاتا ہے اور نتیجہ پہلے شادی کے لیے، پھر دوستی، خاندان اور کام کے دوسرے سیاق میں پڑھتا ہے۔ |
| You can also compare two dates of birth (a general, modern astrological comparison of Sun, Moon, Venus and Mars signs), look at a person's resonance with one of the 99 Names of Allah, or find the Divine Name that matches an intention. | آپ دو تاریخِ پیدائش کا موازنہ بھی کر سکتے ہیں (شمس، قمر، زہرہ اور مریخ کے برجوں کا ایک عمومی، جدید فلکی موازنہ)، کسی شخص کی اللہ کے 99 ناموں میں سے کسی کے ساتھ ہم آہنگی دیکھ سکتے ہیں، یا وہ اسمِ الٰہی تلاش کر سکتے ہیں جو کسی نیت سے مطابقت رکھتا ہو۔ |
| Adab first | پہلے آداب |
| A name number cannot tell you whether a marriage will succeed. Ask about dīn and character, consult both families, pray ṣalāt al-istikhāra and put your trust in Allah. Use this tool for reflection and conversation, not as a verdict; Allah alone knows the unseen. | ناموں کا عدد یہ نہیں بتا سکتا کہ شادی کامیاب ہوگی یا نہیں۔ دین اور اخلاق کے بارے میں پوچھیں، دونوں خاندانوں سے مشورہ کریں، نمازِ استخارہ پڑھیں اور اللہ پر بھروسا رکھیں۔ اس ٹول کو غور و فکر اور گفتگو کے لیے استعمال کریں، فیصلے کے طور پر نہیں؛ غیب کا علم صرف اللہ کو ہے۔ |
| How the names method works | ناموں کا طریقہ کیسے کام کرتا ہے |
| Write both names in Arabic letters (or type them in Latin letters and pick the Arabic spelling). | دونوں نام عربی حروف میں لکھیں (یا لاطینی حروف میں لکھ کر عربی املا منتخب کریں)۔ |
| Each name is converted to its Abjad (kabīr) total, using the Maghribi or Mashriqi letter values you select. | ہر نام کو اس کے ابجد (کبیر) مجموعے میں بدلا جاتا ہے، اس مغربی یا مشرقی ترتیب کی قدروں سے جو آپ منتخب کریں۔ |
| The two totals are added together with 7 and divided by 9; the remainder (1–9, with 0 counted as 9) is the soul-connection number. | دونوں مجموعوں کو 7 کے ساتھ جمع کر کے 9 سے تقسیم کیا جاتا ہے؛ باقی (1 تا 9، صفر کو 9 شمار کر کے) روحانی ربط کا عدد ہے۔ |
| Each number has a traditional meaning and outlook, shown for the relationship context you choose: marriage, universal, friendship, family or work. | ہر عدد کا ایک روایتی مفہوم اور پہلو ہے، جو آپ کے منتخب کردہ تعلق کے سیاق کے لیے دکھایا جاتا ہے: شادی، عمومی، دوستی، خاندان یا کام۔ |
| How do I check name compatibility for marriage? | میں شادی کے لیے ناموں کی مطابقت کیسے دیکھوں؟ |
| Enter both names, choose the "Marriage" context and calculate. The tool adds the Abjad values of the two names plus 7, divides by 9 and shows the meaning of the remainder for marriage. | دونوں نام درج کریں، «شادی» کا سیاق منتخب کریں اور حساب کریں۔ ٹول دونوں ناموں کی ابجد قدریں اور 7 جمع کرتا ہے، 9 سے تقسیم کرتا ہے اور باقی کا شادی کے لیے مفہوم دکھاتا ہے۔ |
| Which Abjad system is used? | کون سا ابجد نظام استعمال ہوتا ہے؟ |
| You can switch between the Maghribi order (the Maghreb, al-Andalus and West Africa) and the Mashriqi order (Egypt, the Middle East and Asia). Most names give the same total in both; names containing any of the six letters ṣād, ḍād, sīn, ẓāʾ, ghayn or shīn can differ. | آپ مغربی ترتیب (مراکش تا لیبیا، اندلس اور مغربی افریقہ) اور مشرقی ترتیب (مصر، مشرقِ وسطیٰ اور ایشیا) کے درمیان بدل سکتے ہیں۔ زیادہ تر ناموں کا مجموعہ دونوں میں ایک ہی ہوتا ہے؛ جن میں ص، ض، س، ظ، غ یا ش میں سے کوئی حرف ہو وہ مختلف ہو سکتے ہیں۔ |
| Can I compare by date of birth instead of names? | کیا میں ناموں کے بجائے تاریخِ پیدائش سے موازنہ کر سکتا ہوں؟ |
| Yes. Choose "By Birth Date" to compare two people's Sun, Moon, Venus and Mars signs. This is a general, modern astrological comparison, not a classical Islamic method, and it never uses birth time or houses. | جی ہاں۔ دو افراد کے شمس، قمر، زہرہ اور مریخ کے برجوں کا موازنہ کرنے کے لیے «تاریخِ پیدائش سے» منتخب کریں۔ یہ ایک عمومی، جدید فلکی موازنہ ہے، کلاسیکی اسلامی طریقہ نہیں، اور اس میں پیدائش کا وقت یا گھر (بیوت) کبھی استعمال نہیں ہوتے۔ |
| Is it permissible to rely on name compatibility? | کیا ناموں کی مطابقت پر انحصار جائز ہے؟ |
| Treat it as cultural reflection, not prediction. Choosing a spouse rests on dīn, character, family counsel and ṣalāt al-istikhāra. No number decides a marriage; Allah alone knows the unseen. | اسے ثقافتی غور و فکر سمجھیں، پیش گوئی نہیں۔ جیون ساتھی کا انتخاب دین، اخلاق، خاندان کے مشورے اور نمازِ استخارہ پر مبنی ہے۔ کوئی عدد شادی کا فیصلہ نہیں کرتا؛ غیب کا علم صرف اللہ کو ہے۔ |
| What if our result is low? | اگر ہمارا نتیجہ کم آئے تو؟ |
| A low number is not a prohibition and not a bad omen. It can be an invitation to talk about expectations and patience. Many happy marriages would "fail" a numeric test. | کم عدد نہ ممانعت ہے اور نہ بدشگونی۔ یہ توقعات اور صبر پر بات کرنے کی دعوت ہو سکتا ہے۔ بہت سی خوش حال شادیاں اس عددی امتحان میں «ناکام» ہو جاتیں۔ |
| Choose an auspicious date for the nikāḥ. | نکاح کے لیے مناسب تاریخ چنیں۔ |
| Your burj, blessed day, dhikr and sadaqah. | آپ کا برج، مبارک دن، ذکر اور صدقہ۔ |
| Sadaqa Guide | صدقہ رہنما |
| Sadaqah by weekday, Hijri birth month and burj. | دن، پیدائشی ہجری مہینے اور برج کے مطابق صدقہ۔ |



### 6.9 abjad-page (30)

| English | Urdu |
|---|---|
| Arabic Phrase or Sentence | عربی عبارت یا جملہ |
| Enter a phrase or sentence in Arabic | عربی میں کوئی عبارت یا جملہ لکھیں |
| Arabic Text | عربی متن |
| Enter any Arabic text | کوئی بھی عربی متن لکھیں |
| Abjad Calculator — ʿIlm al-Ḥurūf Letter Numerology | ابجد کیلکولیٹر — علم الحروف اور حروف کے اعداد |
| The Abjad system assigns a number to each letter of the Arabic alphabet: alif is 1, bāʾ is 2, jīm is 3, and so on up to shīn at 1000 in the Maghribi order used here by default (in the Mashriqi order, which you can switch to, ghayn is 1000). Adding the values of the letters in a word gives its ḥisāb al-jummal, the "sum total" used for centuries in the Islamic sciences. | ابجد کا نظام عربی حروفِ تہجی کے ہر حرف کو ایک عدد دیتا ہے: الف 1، با 2، جیم 3، اور اسی طرح ش تک، جو یہاں بطورِ طے شدہ مغربی ترتیب میں 1000 ہے (مشرقی ترتیب میں، جسے آپ منتخب کر سکتے ہیں، غ 1000 ہے)۔ کسی لفظ کے حروف کی قدریں جمع کرنے سے اس کا حسابِ جمل بنتا ہے، یعنی وہ «مجموعہ» جو صدیوں سے اسلامی علوم میں استعمال ہوتا آیا ہے۔ |
| Related tools | متعلقہ سہولیات |
| Your Burj from Your Name & Mother's Name | نام اور والدہ کے نام سے آپ کا برج |
| Name Compatibility for Marriage | شادی کے لیے ناموں کی مطابقت |
| Planetary Hours Today | آج کی ساعاتِ کواکب |
| How Abjad relates to Islamic letter-numerology | ابجد اور اسلامی حروف و اعداد کا تعلق |
| In ʿilm al-ḥurūf (the science of letters) and ʿilm al-ʿadad (the science of numbers), scholars studied the numerical value of divine names, Qurʾānic phrases and personal names, and linked letters to the four elements: fire, air, water and earth. Two traditions are common: the Mashriqi order used in Egypt, the Middle East and Asia, and the Maghribi order used in the Maghreb (Morocco to Libya), historically in al-Andalus, and in West Africa. This calculator supports both, so you can compare results. | علم الحروف اور علم العدد میں علماء اسمائے الٰہی، قرآنی عبارتوں اور ذاتی ناموں کی عددی قدر کا مطالعہ کرتے تھے اور حروف کو چار عناصر — آگ، ہوا، پانی اور مٹی — سے جوڑتے تھے۔ دو روایتیں عام ہیں: مشرقی ترتیب، جو مصر، مشرقِ وسطیٰ اور ایشیا میں رائج ہے، اور مغربی ترتیب، جو مغرب (مراکش سے لیبیا تک)، تاریخی طور پر اندلس اور مغربی افریقہ میں رائج رہی۔ یہ کیلکولیٹر دونوں کو سپورٹ کرتا ہے تاکہ آپ نتائج کا موازنہ کر سکیں۔ |
| Using the calculator | کیلکولیٹر کا استعمال |
| Choose a calculator type below, enter an Arabic name or phrase (or type it in Latin letters and let the tool transliterate it), and read the total value, the letter-by-letter breakdown and the elemental analysis. | نیچے سے حساب کی قسم منتخب کریں، کوئی عربی نام یا عبارت لکھیں (یا لاطینی حروف میں لکھیں تاکہ ٹول اسے عربی میں لکھ دے)، پھر کل قدر، حرف بہ حرف تفصیل اور عناصر کا تجزیہ دیکھیں۔ |
| For reflection and education only. It is not prediction; Allah alone knows the unseen. | صرف غور و فکر اور تعلیم کے لیے۔ یہ پیش گوئی نہیں؛ غیب کا علم صرف اللہ کو ہے۔ |
| What is the Abjad (ḥisāb al-jummal)? | ابجد (حسابِ جمل) کیا ہے؟ |
| The Abjad is the traditional system that gives each Arabic letter a number: alif is 1, bāʾ is 2, jīm is 3, and so on up to a thousand. Adding the letters of a word gives its ḥisāb al-jummal, the "sum total" used for centuries in ʿilm al-ḥurūf. | ابجد وہ روایتی نظام ہے جو ہر عربی حرف کو ایک عدد دیتا ہے: الف 1، با 2، جیم 3، اور اسی طرح ہزار تک۔ کسی لفظ کے حروف جمع کرنے سے اس کا حسابِ جمل بنتا ہے، یعنی وہ «مجموعہ» جو صدیوں سے علم الحروف میں استعمال ہوتا آیا ہے۔ |
| What is the difference between the Maghribi and Mashriqi orders? | مغربی اور مشرقی ترتیب میں کیا فرق ہے؟ |
| They differ on six letters. In the Maghribi order (the Maghreb, al-Andalus and West Africa, the default here) ṣād is 60, ḍād 90, sīn 300, ẓāʾ 800, ghayn 900 and shīn 1000. In the Mashriqi order (Egypt, the Middle East and Asia) ṣād is 90, ḍād 800, sīn 60, ẓāʾ 900, ghayn 1000 and shīn 300. A name without these letters has the same total in both. | دونوں چھ حروف میں مختلف ہیں۔ مغربی ترتیب میں (مراکش تا لیبیا، اندلس اور مغربی افریقہ؛ یہاں پہلے سے منتخب) ص 60، ض 90، س 300، ظ 800، غ 900 اور ش 1000 ہے۔ مشرقی ترتیب میں (مصر، مشرقِ وسطیٰ اور ایشیا) ص 90، ض 800، س 60، ظ 900، غ 1000 اور ش 300 ہے۔ جس نام میں یہ حروف نہ ہوں اس کا مجموعہ دونوں میں ایک ہی ہوتا ہے۔ |
| How do I find the Abjad value of my name? | میں اپنے نام کی ابجد قدر کیسے معلوم کروں؟ |
| Write your name in Arabic letters (or type it in Latin letters and choose the Arabic spelling the tool suggests), select the Maghribi or Mashriqi order, and the calculator shows the total with a letter-by-letter breakdown. Spelling matters: a different Arabic spelling of the same name can give a different total. | اپنا نام عربی حروف میں لکھیں (یا لاطینی حروف میں لکھ کر ٹول کی تجویز کردہ عربی املا منتخب کریں)، مغربی یا مشرقی ترتیب منتخب کریں، اور کیلکولیٹر حرف بہ حرف تفصیل کے ساتھ مجموعہ دکھا دے گا۔ املا اہم ہے: ایک ہی نام کی مختلف عربی املا مختلف مجموعہ دے سکتی ہے۔ |
| Does my Abjad number predict my future or my character? | کیا میرا ابجد عدد میرے مستقبل یا کردار کی پیش گوئی کرتا ہے؟ |
| No. The Abjad value is a traditional tool for reflection and learning about ʿilm al-ḥurūf. It does not predict events, and nothing in it replaces faith, effort and wise counsel. Allah alone knows the unseen. | نہیں۔ ابجد کی قدر علم الحروف کے مطالعے اور غور و فکر کا ایک روایتی ذریعہ ہے۔ یہ واقعات کی پیش گوئی نہیں کرتی، اور اس میں کوئی چیز ایمان، کوشش اور دانشمندانہ مشورے کی جگہ نہیں لیتی۔ غیب کا علم صرف اللہ کو ہے۔ |
| Asrār home | اسرار کا ہوم |
| The full Asrār app: planetary timing, calculators and dhikr. | مکمل اسرار ایپ: ساعاتِ کواکب، کیلکولیٹر اور ذکر۔ |
| The ruling planet of the current hour at your location. | آپ کے مقام پر موجودہ ساعت کا حاکم سیارہ۔ |
| Birth Profile | پیدائشی پروفائل |
| Your Sun and Moon signs, lunar mansion and planetary dignities. | آپ کے شمس و قمر کے برج، منزلِ قمر اور سیاروں کی حالتیں۔ |
| Best Dates (Ikhtiyārāt) | بہترین تاریخیں (اختیارات) |
| Classical electional astrology for choosing an auspicious date. | مناسب تاریخ کے انتخاب کے لیے کلاسیکی علمِ اختیارات۔ |



### 6.10 potd-page (38)

| English | Urdu |
|---|---|
| Ya Allah | يَا اللهُ |
| General remembrance and divine connection. | عمومی یاد اور الٰہی تعلق کے لیے۔ |
| Ya Rahman | يَا رَحْمَانُ |
| For rizq (wealth and provision). | رزق (دولت اور روزی) کے لیے۔ |
| Ya Raheem | يَا رَحِيمُ |
| For fulfilling needs and resolving difficulties. | حاجتیں پوری ہونے اور مشکلات کے حل کے لیے۔ |
| Ya Malik | يَا مَلِكُ |
| For support and success in endeavors. | کاموں میں معاونت اور کامیابی کے لیے۔ |
| Ya Quddus | يَا قُدُّوسُ |
| For purification, forgiveness, and spiritual cleansing. | پاکیزگی، مغفرت اور روحانی تطہیر کے لیے۔ |
| Ya Salam | يَا سَلَامُ |
| For inner peace and forgiveness. | قلبی سکون اور معافی کے لیے۔ |
| Ya Mu'min | يَا مُؤْمِنُ |
| For protection from enemies. | دشمنوں سے حفاظت کے لیے۔ |
| Ya Hakim | يَا حَكِيمُ |
| For wisdom, shahada, and blessings. | حکمت، شہادت اور برکتوں کے لیے۔ |
| Ya 'Adl | يَا عَدْلُ |
| For tawfiq and avoiding sinful actions. | توفیق اور گناہ والے کاموں سے بچنے کے لیے۔ |
| Ya Bari' | يَا بَارِئُ |
| For strength and overcoming enemies. | قوت اور دشمنوں پر غالب آنے کے لیے۔ |
| Ya Musawwir | يَا مُصَوِّرُ |
| To stay consistent in good deeds. | نیک اعمال میں استقامت کے لیے۔ |
| Ya Rafi' | يَا رَافِعُ |
| For elevation, respect, and being loved. | بلندی، عزت اور محبوبیت کے لیے۔ |
| Ya Halim | يَا حَلِيمُ |
| For calmness and patience. | سکون اور صبر کے لیے۔ |
| Ya Basir | يَا بَصِيرُ |
| For clarity and insight. | وضاحت اور بصیرت کے لیے۔ |
| Recite with presence of heart (hudur al-qalb) and intention (niyyah). | حضورِ قلب اور نیت کے ساتھ پڑھیں۔ |
| Planet of the Day — Today's Ruling Planet & Dhikr | آج کا سیارہ — آج کا حاکم سیارہ اور ذکر |
| What is the planet of the day? | آج کا سیارہ کیا ہے؟ |
| In the traditional astrological schedule each weekday is linked to one of the seven classical planets. The page shows that planet, its traditional themes, and the sadaqa and dhikr that tradition connects with the day. | روایتی فلکی نظام میں ہفتے کا ہر دن سات کلاسیکی سیاروں میں سے ایک سے منسوب ہے۔ یہ صفحہ وہ سیارہ، اس کے روایتی موضوعات، اور وہ صدقہ و ذکر دکھاتا ہے جو روایت اس دن سے جوڑتی ہے۔ |
| Which planet goes with which weekday? | کون سا سیارہ ہفتے کے کس دن سے منسوب ہے؟ |
| Sunday: the Sun. Monday: the Moon. Tuesday: Mars. Wednesday: Mercury. Thursday: Jupiter. Friday: Venus. Saturday: Saturn. | اتوار: شمس۔ پیر: قمر۔ منگل: مریخ۔ بدھ: عطارد۔ جمعرات: مشتری۔ جمعہ: زہرہ۔ ہفتہ: زحل۔ |
| How does the planet of the day relate to planetary hours? | آج کے سیارے کا ساعاتِ کواکب سے کیا تعلق ہے؟ |
| The planet of the day also rules the first planetary hour after sunrise; the following hours then run through the Chaldean order. The Planetary Hours page shows the hour you are in at your location. | دن کا سیارہ طلوعِ آفتاب کے بعد کی پہلی ساعت پر بھی منسوب ہوتا ہے؛ اس کے بعد کی ساعتیں کلدانی ترتیب سے چلتی ہیں۔ ساعاتِ کواکب کا صفحہ آپ کے مقام پر موجودہ ساعت دکھاتا ہے۔ |
| Is the guidance for the day a prediction? | کیا دن کی رہنمائی کوئی پیش گوئی ہے؟ |
| No. The suggestions are traditional themes offered for reflection, such as study on Wednesday or generosity on Thursday. They are not rulings and not forecasts, and they never replace the obligations of worship, istikhāra or wise counsel. Allah alone knows the unseen. | نہیں۔ یہ تجاویز غور و فکر کے لیے پیش کیے گئے روایتی موضوعات ہیں، جیسے بدھ کو مطالعہ یا جمعرات کو سخاوت۔ یہ نہ فتوے ہیں نہ پیش گوئیاں، اور یہ کبھی عبادات، استخارے یا دانشمندانہ مشورے کی جگہ نہیں لیتیں۔ غیب کا علم صرف اللہ کو ہے۔ |



### 6.11 names-page (29)

| English | Urdu |
|---|---|
| Frequently asked questions | عام سوالات |
| Abjad Calculator | ابجد کیلکولیٹر |
| Breadcrumb | راستہ |
| Related | متعلقہ |
| The Abjad value of any Arabic name or phrase. | کسی بھی عربی نام یا عبارت کی ابجد قدر۔ |
| › 99 Names of Allah | › اللہ کے 99 نام |
| The 99 Names of Allah (Asmāʾ al-Ḥusnā) | اللہ کے 99 نام (اسمائے حسنیٰ) |
| Each Name in Arabic with its transliteration, meaning and Abjad value. Your burj in the | ہر نام عربی میں، اس کے تلفظ، مفہوم اور ابجد قدر کے ساتھ۔ آپ کا برج |
| name-and-mother calculator | نام اور والدہ کے نام کے کیلکولیٹر میں |
| also comes with Divine Names for dhikr. | ذکر کے لیے اسمائے الٰہی بھی ساتھ آتا ہے۔ |
| Abjad value: | ابجد قدر: |
| · Mashriqi: | · مشرقی: |
| About this list | اس فہرست کے بارے میں |
| The Names are given in the order of the compilation drawn from the hadith of al-Walīd in Jāmiʿ al-Tirmidhī (no. 3507). Abjad values drop the article “al-” and use the Maghribi table, the default across Asrār (the Mashriqi value is shown where it differs). They are listed for learning and reflection, not prediction. | نام اس مجموعے کی ترتیب میں دیے گئے ہیں جو جامع ترمذی (نمبر 3507) میں ولید کی حدیث سے ماخوذ ہے۔ ابجد قدریں «ال» کو چھوڑ کر مغربی جدول استعمال کرتی ہیں، جو اسرار میں طے شدہ ہے (جہاں مشرقی قدر مختلف ہو وہ دکھائی جاتی ہے)۔ یہ تعلیم اور غور و فکر کے لیے ہیں، پیش گوئی کے لیے نہیں۔ |
| Where does this list of the 99 Names come from? | اللہ کے 99 ناموں کی یہ فہرست کہاں سے لی گئی ہے؟ |
| The Arabic text and order follow the widely used compilation drawn from the hadith of al-Walīd in Jāmiʿ al-Tirmidhī (no. 3507). | عربی متن اور ترتیب اس مقبول مجموعے کے مطابق ہے جو جامع ترمذی (نمبر 3507) میں ولید کی حدیث سے ماخوذ ہے۔ |
| How are the Abjad values of the Names calculated here? | یہاں ناموں کی ابجد قدریں کیسے نکالی جاتی ہیں؟ |
| The leading definite article "al-" is dropped and the remaining letters are summed with the Maghribi table, the default across Asrār; hamza is counted by its seat (ؤ as wāw, ئ as yāʾ, أ/إ/آ as alif). The two compound Names, Mālik al-Mulk and Dhū al-Jalāli wa al-Ikrām, keep their full spelling. Where the Mashriqi table (used in the Middle East and Asia) gives a different total, it is shown next to the value, and you can switch the calculators to Mashriqi. | شروع کا «ال» چھوڑ دیا جاتا ہے اور باقی حروف مغربی جدول سے جمع کیے جاتے ہیں، جو اسرار میں طے شدہ ہے؛ ہمزہ کو اس کی کرسی کے حساب سے گنا جاتا ہے (ؤ بطور واؤ، ئ بطور یاء، أ/إ/آ بطور الف)۔ دو مرکب نام، مالک الملک اور ذو الجلال والاکرام، اپنی مکمل املا کے ساتھ رہتے ہیں۔ جہاں مشرقی جدول (مشرقِ وسطیٰ اور ایشیا میں رائج) مختلف مجموعہ دے وہ قدر کے ساتھ دکھایا جاتا ہے، اور آپ کیلکولیٹرز کو مشرقی پر بھی بدل سکتے ہیں۔ |
| Why does the Abjad calculator show a different number for a Name? | ابجد کیلکولیٹر کسی نام کے لیے مختلف عدد کیوں دکھاتا ہے؟ |
| The Abjad calculator counts every letter you type, including "al-", so its total can differ from the value listed here. Both use the Maghribi table by default, and both can be switched to Mashriqi. | ابجد کیلکولیٹر آپ کے لکھے ہر حرف کو گنتا ہے، «ال» سمیت، اس لیے اس کا مجموعہ یہاں درج قدر سے مختلف ہو سکتا ہے۔ دونوں پہلے سے مغربی جدول استعمال کرتے ہیں، اور دونوں کو مشرقی پر بدلا جا سکتا ہے۔ |
| How are the Names linked to my burj? | نام میرے برج سے کیسے جڑے ہیں؟ |
| Each of the 12 burūj in the name-and-mother calculator comes with Divine Names for dhikr, for example Yā Raḥmān, Yā Raḥīm for Cancer (al-Saraṭān). Find your burj with the calculator to see yours. | نام اور والدہ کے نام کے کیلکولیٹر میں 12 بروج میں سے ہر ایک کے ساتھ ذکر کے لیے اسمائے الٰہی ہیں، مثلاً سرطان کے لیے یا رحمٰن، یا رحیم۔ اپنا برج کیلکولیٹر سے معلوم کریں تاکہ اپنا دیکھ سکیں۔ |
| Is this page for prediction or for amulets? | کیا یہ صفحہ پیش گوئی یا تعویذات کے لیے ہے؟ |
| No. The Names are listed for learning, remembrance and reflection. Abjad values are a traditional study of letters, not a way to know the unseen; Allah alone knows the unseen. | نہیں۔ نام تعلیم، یاد اور غور و فکر کے لیے درج ہیں۔ ابجد قدریں حروف کا ایک روایتی مطالعہ ہیں، غیب جاننے کا ذریعہ نہیں؛ غیب کا علم صرف اللہ کو ہے۔ |
| Burj from Your Name & Mother's Name | نام اور والدہ کے نام سے برج |
| Your burj, element, blessed day and the Divine Names for its dhikr. | آپ کا برج، عنصر، مبارک دن اور اس کے ذکر کے اسمائے الٰہی۔ |
| Muslim Names: Abjad Value and Burj | مسلم نام: ابجد قدر اور برج |
| Common names such as Muhammad, Ali, Fatima and Maryam. | عام نام جیسے محمد، علی، فاطمہ اور مریم۔ |
| The 99 Names of Allah | اللہ کے 99 نام |



### 6.12 planetary-hours-page (11)

| English | Urdu |
|---|---|
| Planetary Hours Today — Chaldean Hours in Islamic ʿIlm al-Nujūm | آج کی ساعاتِ کواکب — اسلامی علم النجوم میں کلدانی ساعتیں |
| What are planetary hours? | ساعاتِ کواکب کیا ہیں؟ |
| In the traditional Chaldean scheme the time from sunrise to sunset, and the time from sunset to the next sunrise, are each divided into twelve hours. The hours are named for the seven classical planets in a fixed repeating order: Saturn, Jupiter, Mars, Sun, Venus, Mercury, Moon. | روایتی کلدانی ترتیب میں طلوعِ آفتاب سے غروب تک، اور غروب سے اگلے طلوع تک، ہر وقفے کو بارہ ساعتوں میں بانٹا جاتا ہے۔ ساعتوں کے نام سات کلاسیکی سیاروں پر ایک مقررہ دہرائی جانے والی ترتیب سے رکھے گئے ہیں: زحل، مشتری، مریخ، شمس، زہرہ، عطارد، قمر۔ |
| Why does a planetary hour not last 60 minutes? | ایک ساعتِ کواکب 60 منٹ کی کیوں نہیں ہوتی؟ |
| Because the day and the night are each split into twelve equal parts, an hour is as long as the daylight or darkness allows. In summer the daytime hours are longer than 60 minutes and the night hours shorter; in winter it is the other way round. | کیونکہ دن اور رات کو الگ الگ بارہ برابر حصوں میں بانٹا جاتا ہے، اس لیے ساعت اتنی لمبی ہوتی ہے جتنی دن کی روشنی یا رات کی تاریکی اجازت دے۔ گرمیوں میں دن کی ساعتیں 60 منٹ سے لمبی اور رات کی چھوٹی ہوتی ہیں؛ سردیوں میں اس کے برعکس۔ |
| How is the current hour worked out for my location? | میرے مقام کے لیے موجودہ ساعت کیسے نکالی جاتی ہے؟ |
| The tool uses the sunrise and sunset at your location to set the start and end of each hour, then names it from the ruling planet of the weekday and the Chaldean order. Allow location access, or choose your city, for the right times. | ٹول آپ کے مقام پر طلوع اور غروبِ آفتاب سے ہر ساعت کا آغاز اور اختتام طے کرتا ہے، پھر ہفتے کے دن کے حاکم سیارے اور کلدانی ترتیب سے اس کا نام رکھتا ہے۔ درست اوقات کے لیے مقام کی اجازت دیں یا اپنا شہر منتخب کریں۔ |
| Which planet rules which day? | کون سا سیارہ کس دن سے منسوب ہے؟ |
| Traditionally the Sun rules Sunday, the Moon Monday, Mars Tuesday, Mercury Wednesday, Jupiter Thursday, Venus Friday and Saturn Saturday. The first hour after sunrise belongs to the planet of the day. | روایتی طور پر اتوار شمس سے، پیر قمر سے، منگل مریخ سے، بدھ عطارد سے، جمعرات مشتری سے، جمعہ زہرہ سے اور ہفتہ زحل سے منسوب ہے۔ طلوعِ آفتاب کے بعد کی پہلی ساعت اس دن کے سیارے سے منسوب ہوتی ہے۔ |
| Should I plan my day by planetary hours? | کیا مجھے اپنا دن ساعاتِ کواکب کے مطابق ترتیب دینا چاہیے؟ |
| Treat them as a tradition for reflection, not a rule and not a prediction. The times of ṣalāh follow the sun and never depend on a planetary hour; put your trust in Allah and use the hours, if you wish, as a prompt to pause and set a good intention. | اسے غور و فکر کی ایک روایت سمجھیں، نہ کوئی قاعدہ اور نہ پیش گوئی۔ نماز کے اوقات سورج کے حساب سے ہیں اور کسی ساعتِ کواکب پر منحصر نہیں؛ اللہ پر بھروسا رکھیں، اور چاہیں تو ان ساعتوں کو رک کر اچھی نیت کرنے کی یاددہانی کے طور پر استعمال کریں۔ |



### 6.13 ikhtiyarat-page (19)

| English | Urdu |
|---|---|
| Lunar Mansions (Manāzil) | منازلِ قمر |
| Planetary Transits | سیاروں کے عبور |
| Ikhtiyārāt: Choose an Auspicious Date | اختیارات: مناسب تاریخ کا انتخاب |
| Check a date or find favourable days for nikāḥ, travel, business or moving home using classical Islamic timing. | کلاسیکی اسلامی اوقات کے مطابق نکاح، سفر، کاروبار یا نئے گھر میں منتقلی کے لیے کوئی تاریخ جانچیں یا موافق دن تلاش کریں۔ |
| Ikhtiyārāt — Choose an Auspicious Date the Classical Islamic Way | اختیارات — کلاسیکی اسلامی طریقے سے مناسب تاریخ کا انتخاب |
| Ikhtiyārāt is the classical practice of electional timing in ʿIlm al-Nujūm: choosing a day and hour for an important act — nikāḥ (marriage), travel, business, moving home, or starting study — when the celestial indicators are favourable. | اختیارات علم النجوم میں اوقات کے انتخاب کی کلاسیکی روایت ہے: کسی اہم کام — نکاح، سفر، کاروبار، نئے گھر میں منتقلی یا تعلیم کا آغاز — کے لیے ایسا دن اور ساعت چننا جب فلکی علامات موافق ہوں۔ |
| Traditional rules weigh the day ruler, the planetary hour, the Moon's sign, phase and lunar mansion (manāzil al-qamar), and counsel avoiding periods when the Moon is combust or void of course. The aim is adab with time: beginning matters in a moment that supports them, not forcing outcomes. | روایتی قواعد دن کے حاکم، ساعتِ کواکب، قمر کے برج، مرحلے اور منزلِ قمر کو ملحوظ رکھتے ہیں، اور ان اوقات سے بچنے کا مشورہ دیتے ہیں جب قمر محترق ہو یا خالی السیر ہو۔ مقصد وقت کے آداب ہیں: کام کا آغاز ایسے لمحے میں کرنا جو اس کے لیے موافق سمجھا جائے، نتائج پر زور ڈالے بغیر۔ |
| Use this page for reflection and education. It is not prediction; Allah alone knows the unseen. | اس صفحے کو غور و فکر اور تعلیم کے لیے استعمال کریں۔ یہ پیش گوئی نہیں؛ غیب کا علم صرف اللہ کو ہے۔ |
| Ikhtiyārāt (اختيارات) means "choices" or elections: the traditional Islamic art of selecting an auspicious time to begin an undertaking. It draws on day rulers, planetary hours, and the Moon's condition within the broader science of ʿIlm al-Nujūm. | اختیارات (اختيارات) کا مطلب «انتخاب» ہے: کسی کام کے آغاز کے لیے مناسب وقت چننے کا روایتی اسلامی فن۔ یہ علم النجوم کے وسیع دائرے میں دن کے حاکم، ساعاتِ کواکب اور قمر کی حالت سے مدد لیتا ہے۔ |
| How is it different from fortune-telling? | یہ فال گیری سے کیسے مختلف ہے؟ |
| Fortune-telling claims to reveal the unseen or fix the future. Ikhtiyārāt does not. It offers classical guidelines for when to start something, while affirming that success and knowledge of the ghayb belong to Allah alone. Treat the tool as an aid for reflection, not a verdict. | فال گیری غیب ظاہر کرنے یا مستقبل طے کرنے کا دعویٰ کرتی ہے۔ اختیارات ایسا نہیں کرتے۔ یہ کسی کام کے آغاز کے وقت کے بارے میں کلاسیکی رہنما اصول دیتے ہیں، اور اس بات کی تصدیق کرتے ہیں کہ کامیابی اور غیب کا علم صرف اللہ کے پاس ہے۔ ٹول کو غور و فکر کا ذریعہ سمجھیں، فیصلہ نہیں۔ |
| How do I pick a date for nikāḥ? | میں نکاح کی تاریخ کیسے چنوں؟ |
| Choose the marriage (nikāḥ) election type, then check a candidate date or scan a range. Favourable signs typically include a supportive day ruler and planetary hour, a well-placed Moon by sign, phase and lunar mansion, and avoidance of combust or void-of-course Moon periods. Confirm practical and sharīʿah considerations separately. | نکاح کا انتخابی زمرہ منتخب کریں، پھر کوئی امیدوار تاریخ جانچیں یا کسی مدت کو اسکین کریں۔ موافق علامات میں عموماً معاون دن اور ساعت کا حاکم، برج، مرحلے اور منزلِ قمر کے لحاظ سے اچھی حالت میں قمر، اور قمر کے محترق یا خالی السیر ادوار سے پرہیز شامل ہیں۔ عملی اور شرعی پہلو الگ سے دیکھ لیں۔ |
| Which planetary hour is best for travel or business? | سفر یا کاروبار کے لیے کون سی ساعتِ کواکب بہتر ہے؟ |
| Travel often suits hours of the Moon or Mercury when those planets are well placed; business and trade lean toward Mercury, Jupiter or Venus hours depending on the aim (contracts, growth, or harmony). Always read the hour together with the day ruler and the Moon's condition rather than in isolation. | سفر اکثر قمر یا عطارد کی ساعتوں کے موافق سمجھا جاتا ہے جب وہ سیارے اچھی حالت میں ہوں؛ کاروبار اور تجارت مقصد کے مطابق (معاہدے، ترقی یا ہم آہنگی) عطارد، مشتری یا زہرہ کی ساعتوں کی طرف مائل ہے۔ ساعت کو ہمیشہ دن کے حاکم اور قمر کی حالت کے ساتھ ملا کر پڑھیں، الگ تھلگ نہیں۔ |
| What is a lunar mansion? | منزلِ قمر کیا ہے؟ |
| A lunar mansion (manzil, pl. manāzil al-qamar) is one of twenty-eight sectors along the Moon's path. Classical sources assign each mansion themes such as journeys, contracts or restraint. Ikhtiyārāt uses the mansion the Moon occupies on a given day as one factor among several. | منزلِ قمر (جمع: منازل القمر) قمر کے راستے کے اٹھائیس حصوں میں سے ایک ہے۔ کلاسیکی مآخذ ہر منزل سے سفر، معاہدے یا ضبط جیسے موضوعات منسوب کرتے ہیں۔ اختیارات کسی دن قمر جس منزل میں ہو اسے کئی عوامل میں سے ایک عامل کے طور پر استعمال کرتے ہیں۔ |
| Live positions of the seven classical planets and their dignities. | سات کلاسیکی سیاروں کے زندہ مقامات اور ان کی حالتیں۔ |
| ʿIlm al-ḥurūf letter numerology for Arabic names and phrases. | عربی ناموں اور عبارتوں کے لیے علم الحروف کے اعدادِ حروف۔ |



### 6.14 best-day (78)

| English | Urdu |
|---|---|
| Sadaqa of the Day | آج کا صدقہ |
| Today's ruling planet, qualities and recommended dhikr. | آج کا حاکم سیارہ، اس کی خصوصیات اور تجویز کردہ ذکر۔ |
| Best Day for Nikah (Marriage) | نکاح (شادی) کے لیے موزوں دن |
| What is ikhtiyārāt? | اختیارات کیا ہے؟ |
| Today's recommended sadaqah and the weekly table. | آج کا تجویز کردہ صدقہ اور ہفتہ وار جدول۔ |
| Ikhtiyārāt | اختیارات |
| Best Day For… Nikah, Travel, Moving Home and Business | بہترین دن… نکاح، سفر، نئے گھر میں منتقلی اور کاروبار کے لیے |
| Which day should you choose for a nikāḥ, setting out on a journey, moving home or starting a business? The classical science of ikhtiyārāt (electional timing) gives each purpose its own favourable weekdays and planetary hours. | نکاح، سفر پر روانگی، نئے گھر میں منتقلی یا کاروبار کے آغاز کے لیے آپ کو کون سا دن چننا چاہیے؟ کلاسیکی علمِ اختیارات (وقت کے انتخاب) ہر مقصد کو اس کے اپنے موافق دن اور ساعاتِ کواکب دیتا ہے۔ |
| For each purpose below: what the Asrār tool’s rules favour, and the next favourable date, recalculated every time this page loads. | نیچے ہر مقصد کے لیے: اسرار کے ٹول کے قواعد کیا موافق سمجھتے ہیں، اور اگلی موافق تاریخ، جو صفحہ کھلنے پر ہر بار دوبارہ نکالی جاتی ہے۔ |
| For reflection, not prediction. No timing replaces istikhāra, consultation (mashwara) with family and trusted scholars, and tawakkul (reliance on Allah); Allah alone knows the unseen. | غور و فکر کے لیے، پیش گوئی کے لیے نہیں۔ کوئی وقت استخارے، گھر والوں اور معتبر علماء سے مشورے (مشورہ) اور توکل (اللہ پر بھروسا) کی جگہ نہیں لیتا؛ غیب کا علم صرف اللہ کو ہے۔ |
| Purpose | مقصد |
| Favoured days | موافق دن |
| Planetary hours | ساعاتِ کواکب |
| Next favourable date | اگلی موافق تاریخ |
| Friday, Thursday and Monday | جمعہ، جمعرات اور پیر |
| Moon, Jupiter and Venus | قمر، مشتری اور زہرہ |
| Best Day to Travel | سفر کے لیے موزوں دن |
| Wednesday and Thursday | بدھ اور جمعرات |
| Moon, Mercury and Jupiter | قمر، عطارد اور مشتری |
| Best Day to Move Home | نئے گھر میں منتقلی کے لیے موزوں دن |
| Thursday and Saturday | جمعرات اور ہفتہ |
| Jupiter and Saturn | مشتری اور زحل |
| Best Day to Start a Business | کاروبار شروع کرنے کے لیے موزوں دن |
| Mercury and Jupiter | عطارد اور مشتری |
| Dates computed for Makkah (the app's default location). | تاریخیں مکہ مکرمہ کے لیے نکالی گئی ہیں (ایپ کا طے شدہ مقام)۔ |
| Ikhtiyārāt (electional timing) is the classical science of choosing the most favourable moment to begin an action — a marriage, a journey, a building, a business — from the day, the planetary hour, the Moon and the lunar mansions. | اختیارات (وقت کا انتخاب) وہ کلاسیکی علم ہے جس میں دن، ساعتِ کواکب، قمر اور منازلِ قمر کی بنیاد پر کسی کام — نکاح، سفر، تعمیر، کاروبار — کے آغاز کے لیے سب سے موافق لمحہ چنا جاتا ہے۔ |
| Is there one best day for everything? | کیا ہر کام کے لیے ایک ہی بہترین دن ہے؟ |
| No: each purpose has its own rules. Thursday is, however, among the favoured days for all four purposes on this page. | نہیں: ہر مقصد کے اپنے قواعد ہیں۔ تاہم جمعرات اس صفحے کے چاروں مقاصد کے لیے موافق دنوں میں شامل ہے۔ |
| Should I wait for a "perfect" date? | کیا مجھے «کامل» تاریخ کا انتظار کرنا چاہیے؟ |
| No. No date is religiously forbidden for nikāḥ, and these rules are an aid to reflection. They are not a substitute for istikhāra, consultation (mashwara) and tawakkul (reliance on Allah). | نہیں۔ نکاح کے لیے کوئی تاریخ شرعاً ممنوع نہیں، اور یہ قواعد غور و فکر کی ایک مدد ہیں۔ یہ استخارے، مشورے اور توکل (اللہ پر بھروسا) کی جگہ نہیں لیتے۔ |
| Why are the dates computed for Makkah? | تاریخیں مکہ مکرمہ کے لیے کیوں نکالی جاتی ہیں؟ |
| Planetary hours and the Moon depend on location. This page uses Makkah, the app's default location; the Best Dates tool computes for your own location. | ساعاتِ کواکب اور قمر مقام پر منحصر ہیں۔ یہ صفحہ مکہ مکرمہ استعمال کرتا ہے، جو ایپ کا طے شدہ مقام ہے؛ بہترین تاریخیں ٹول آپ کے اپنے مقام کے لیے حساب کرتا ہے۔ |
| Are the dates up to date? | کیا تاریخیں تازہ ترین ہیں؟ |
| Yes. The next dates are recalculated for today with the same engine as the Best Dates (Ikhtiyārāt) tool. | جی ہاں۔ اگلی تاریخیں آج کے لیے اسی انجن سے دوبارہ نکالی جاتی ہیں جو بہترین تاریخیں (اختیارات) ٹول میں استعمال ہوتا ہے۔ |
| Check a date or find the best dates for your location. | کوئی تاریخ جانچیں یا اپنے مقام کے لیے بہترین تاریخیں تلاش کریں۔ |
| Compare two names with the Abjad soul-connection method before a nikāḥ. | نکاح سے پہلے ابجد کے روحانی ربط کے طریقے سے دو ناموں کا موازنہ کریں۔ |
| Best day for… | بہترین دن… |
| Best Day for Nikah in Islam — Favourable Days and Hours for Marriage | اسلام میں نکاح کے لیے بہترین دن — شادی کے موافق دن اور ساعتیں |
| No date is religiously forbidden for nikāḥ: marriage is permitted at any time of the year. Many families still like to choose a blessed moment, and the classical science of ikhtiyārāt (electional timing) offers a framework for that reflection. | نکاح کے لیے کوئی تاریخ شرعاً ممنوع نہیں: شادی سال کے کسی بھی وقت جائز ہے۔ پھر بھی بہت سے گھرانے کوئی بابرکت لمحہ چننا پسند کرتے ہیں، اور کلاسیکی علمِ اختیارات (وقت کا انتخاب) اس غور و فکر کے لیے ایک ڈھانچہ دیتا ہے۔ |
| Below are the weekdays and planetary hours the Asrār ikhtiyārāt rules favour for marriage, the conditions they rule out, and the next dates the same engine rates favourable — recalculated every time this page loads. | نیچے وہ دن اور ساعاتِ کواکب ہیں جنہیں اسرار کے اختیارات کے قواعد شادی کے لیے موافق سمجھتے ہیں، وہ حالتیں جو انہیں خارج کرتی ہیں، اور اگلی تاریخیں جنہیں وہی انجن موافق شمار کرتا ہے — صفحہ کھلنے پر ہر بار دوبارہ نکالی جاتی ہیں۔ |
| Favoured days of the week | ہفتے کے موافق دن |
| From the day-of-week rule the Asrār tool uses for this purpose: | اس مقصد کے لیے اسرار ٹول جو دن کا قاعدہ استعمال کرتا ہے اس کے مطابق: |
| pts | پوائنٹس |
| Friday (Jumu'ah) — most recommended day in fiqh. | جمعہ — فقہ میں سب سے زیادہ پسندیدہ دن۔ |
| Thursday. | جمعرات۔ |
| Monday. | پیر۔ |
| Favoured planetary hours | موافق ساعاتِ کواکب |
| A window in an hour of Moon, Jupiter and Venus earns a bonus. Each planetary hour is one twelfth of daytime or night, so the clock times change with the seasons and your location. | قمر، مشتری اور زہرہ کی ساعت میں کوئی وقفہ اضافی پوائنٹس پاتا ہے۔ ہر ساعتِ کواکب دن یا رات کا بارہواں حصہ ہے، اس لیے گھڑی کے اوقات موسموں اور آپ کے مقام کے ساتھ بدلتے ہیں۔ |
| In the Sunnah | سنت میں |
| Friday is the most blessed day of the week in the Sunnah. | سنت میں جمعہ ہفتے کا سب سے بابرکت دن ہے۔ |
| The Prophet ﷺ married ʿĀʾisha (RA) in Shawwāl — a month long favoured for marriage in the Sunnah. | نبی کریم ﷺ نے حضرت عائشہؓ سے شوال میں نکاح فرمایا — ایک ایسا مہینہ جو سنت میں نکاح کے لیے طویل عرصے سے پسندیدہ ہے۔ |
| The Prophet ﷺ explicitly negated the Ṣafar omen ("…wa-lā ṣafar" — Bukhārī & Muslim); marriage in Ṣafar is fully permissible in fiqh. | نبی کریم ﷺ نے صفر کی بدشگونی کی صراحتاً نفی فرمائی («…وَلَا صَفَرَ» — بخاری و مسلم)؛ فقہ میں صفر میں نکاح بالکل جائز ہے۔ |
| Next favourable dates | اگلی موافق تاریخیں |
| Computed now for Makkah (the app's default location) with the same engine as the "Find Best Dates" scanner: days rated Acceptable or better with no ruling-out condition, within the next 90 days. Times are Makkah time (UTC+3). | اب مکہ مکرمہ (ایپ کا طے شدہ مقام) کے لیے اسی انجن سے نکالی گئی ہیں جو «بہترین تاریخیں تلاش کریں» اسکینر میں ہے: وہ دن جنہیں قابلِ قبول یا بہتر درجہ ملا اور کوئی خارج کرنے والی حالت نہیں، اگلے 90 دنوں کے اندر۔ اوقات مکہ کے وقت (UTC+3) کے ہیں۔ |
| best window | بہترین وقت |
| Next favourable planetary hours | اگلی موافق ساعاتِ کواکب |
| The coming hours of Moon, Jupiter and Venus in Makkah (UTC+3), computed for this page load. | مکہ مکرمہ (UTC+3) میں قمر، مشتری اور زہرہ کی آنے والی ساعتیں، اس صفحے کے کھلنے کے وقت کے مطابق نکالی گئی ہیں۔ |
| Conditions treated as cautions | احتیاطی سمجھی جانے والی حالتیں |
| Any of these rules a window out, whatever the weekday: | ان میں سے کوئی بھی حالت، ہفتے کا دن کوئی بھی ہو، کسی وقفے کو خارج کر دیتی ہے: |
| Other factors the tool weighs | دیگر عوامل جو ٹول دیکھتا ہے |
| Check dates for your own location | اپنے مقام کے لیے تاریخیں جانچیں |
| The interactive ikhtiyārāt tool, set to this purpose. It uses your location if you allow it (otherwise Makkah). | انٹرایکٹو اختیارات ٹول، اسی مقصد پر سیٹ۔ اگر آپ اجازت دیں تو یہ آپ کا مقام استعمال کرتا ہے (ورنہ مکہ مکرمہ)۔ |
| Open the full Best Dates (Ikhtiyārāt) tool → | مکمل بہترین تاریخیں (اختیارات) ٹول کھولیں ← |
| What is the best day for nikah in Islam? | اسلام میں نکاح کے لیے بہترین دن کون سا ہے؟ |
| No day is forbidden for nikāḥ. In the Asrār ikhtiyārāt rules Friday scores highest (Friday (Jumu'ah) — most recommended day in fiqh.), followed by Thursday and Monday. The Sunnah also describes Friday as the most blessed day of the week. | نکاح کے لیے کوئی دن ممنوع نہیں۔ اسرار کے اختیارات کے قواعد میں جمعہ کو سب سے زیادہ پوائنٹس ملتے ہیں (جمعہ — فقہ میں سب سے زیادہ پسندیدہ دن)، اس کے بعد جمعرات اور پیر۔ سنت بھی جمعہ کو ہفتے کا سب سے بابرکت دن بتاتی ہے۔ |
| Which planetary hours are favourable for a wedding? | شادی کے لیے کون سی ساعاتِ کواکب موافق ہیں؟ |
| The hours of Moon, Jupiter and Venus. Planetary hours divide daytime (sunrise to sunset) and night into twelve parts each, ruled in turn by the seven classical planets, so they depend on your location. | قمر، مشتری اور زہرہ کی ساعتیں۔ ساعاتِ کواکب دن (طلوع تا غروب) اور رات کو بارہ بارہ حصوں میں بانٹتی ہیں، جن پر باری باری سات کلاسیکی سیارے منسوب ہیں، اس لیے یہ آپ کے مقام پر منحصر ہیں۔ |
| Is there a recommended month for marriage? | کیا شادی کے لیے کوئی مہینہ تجویز کیا گیا ہے؟ |
| The Prophet ﷺ married ʿĀʾisha (RA) in Shawwāl, a month long favoured for marriage in the Sunnah. Nikāḥ itself is permitted year-round, including during Ramadan. | نبی کریم ﷺ نے حضرت عائشہؓ سے شوال میں نکاح فرمایا، ایک ایسا مہینہ جو سنت میں نکاح کے لیے طویل عرصے سے پسندیدہ ہے۔ نکاح بذاتِ خود سال بھر جائز ہے، رمضان سمیت۔ |
| Is it bad luck to marry in Ṣafar? | کیا صفر میں شادی کرنا بدشگونی ہے؟ |
| No. Weddings in Ṣafar are customarily avoided in some Senegambian communities, but the Prophet ﷺ explicitly negated the Ṣafar omen ("…wa-lā ṣafar" — Bukhārī & Muslim); marriage in Ṣafar is fully permissible in fiqh. | نہیں۔ بعض سینیگیمبیائی برادریوں میں صفر میں شادیاں رواجاً ٹالی جاتی ہیں، مگر نبی کریم ﷺ نے صفر کی بدشگونی کی صراحتاً نفی فرمائی («…وَلَا صَفَرَ» — بخاری و مسلم)؛ فقہ میں صفر میں نکاح بالکل جائز ہے۔ |
| When does the tool advise caution? | ٹول کب احتیاط کا مشورہ دیتا ہے؟ |
| These conditions rule a window out entirely: Dark of the Moon (Muḥāq); Moon Combust (Muḥtaraq); Moon Void of Course (Khāliya al-Sayr); Moon Applying to Saturn/Mars (Hard Aspect); Eclipse Proximity. | یہ حالتیں کسی وقفے کو مکمل طور پر خارج کر دیتی ہیں: محاقِ قمر (محاق)؛ قمر محترق (محترق)؛ قمر خالی السیر (خالیۃ السیر)؛ قمر کا زحل/مریخ سے اتصال (سخت نظر)؛ گرہن کی قربت۔ |
| Does a favourable date guarantee a happy marriage? | کیا موافق تاریخ خوشگوار شادی کی ضمانت ہے؟ |
| No. This is an aid to reflection, not a prediction. It is not a substitute for istikhāra, consultation (mashwara) with family and trusted scholars, and tawakkul (reliance on Allah). | نہیں۔ یہ غور و فکر کی ایک مدد ہے، پیش گوئی نہیں۔ یہ استخارے، گھر والوں اور معتبر علماء سے مشورے (مشورہ) اور توکل (اللہ پر بھروسا) کی جگہ نہیں لیتی۔ |
| Favourable days and hours, and the next favourable dates. | موافق دن اور ساعتیں، اور اگلی موافق تاریخیں۔ |
| Best Day For… (all purposes) | بہترین دن… (تمام مقاصد) |
| Marriage, travel, moving home and business at a glance. | شادی، سفر، نئے گھر میں منتقلی اور کاروبار ایک نظر میں۔ |



### 6.15 manazil-page (52)

| English | Urdu |
|---|---|
| Manāzil al-Qamar — The 28 Lunar Mansions | منازلِ قمر — اٹھائیس منازل |
| See which lunar mansion the Moon occupies today, browse all twenty-eight stations, and learn how classical ʿIlm al-Nujūm uses them for reflection and timing adab. | دیکھیں کہ آج قمر کس منزل میں ہے، تمام اٹھائیس منازل دیکھیں، اور جانیں کہ کلاسیکی علم النجوم انہیں غور و فکر اور اوقات کے آداب کے لیے کیسے استعمال کرتا ہے۔ |
| What are the lunar mansions? | منازلِ قمر کیا ہیں؟ |
| Manāzil al-qamar (منازل القمر) are twenty-eight stations along the Moon’s path. In Arab anwāʾ lore and classical ʿIlm al-Nujūm they mark seasonal and celestial milestones; later electional (ikhtiyārāt) practice also weighs the mansion the Moon occupies when choosing a time to begin something. | منازلِ قمر (منازل القمر) قمر کے راستے پر اٹھائیس مقامات ہیں۔ عربوں کے علمِ انواء اور کلاسیکی علم النجوم میں یہ موسمی اور فلکی سنگِ میل کی نشاندہی کرتے ہیں؛ بعد کی اختیارات کی روایت میں کوئی کام شروع کرنے کا وقت چنتے ہوئے قمر جس منزل میں ہو اسے بھی ملحوظ رکھا جاتا ہے۔ |
| Asrār divides the ecliptic into twenty-eight equal tropical sectors (~12°51′ each) from the Moon’s longitude — a clear computational convention for education and reflection. Classical star-tied (sidereal) bounds differ; we document the equal tropical method so the live card stays consistent with our planetary ephemeris. | اسرار دائرۃ البروج کو قمر کے طول البلد کی بنیاد پر اٹھائیس برابر استوائی حصوں (تقریباً 12°51′ ہر ایک) میں تقسیم کرتا ہے — یہ تعلیم اور غور و فکر کے لیے ایک واضح حسابی اصطلاح ہے۔ کلاسیکی ستاروں سے جڑی (نجمی) حدیں مختلف ہیں؛ ہم برابر استوائی طریقہ بیان کرتے ہیں تاکہ زندہ کارڈ ہمارے سیاروی ایفیمرس کے مطابق رہے۔ |
| Manāzil are signs for contemplation, not agents that compel the unseen. This page is for learning and adab with time — not prediction, not a fatwa, and not a substitute for istikhāra, mashwara or tawakkul. Allah alone knows the ghayb. | منازل غور و فکر کی نشانیاں ہیں، غیب پر زبردستی کرنے والی قوتیں نہیں۔ یہ صفحہ سیکھنے اور اوقات کے آداب کے لیے ہے — نہ پیش گوئی، نہ فتویٰ، اور نہ استخارے، مشورے یا توکل کا متبادل۔ غیب کا علم صرف اللہ کو ہے۔ |
| Browse all 28 manāzil | تمام 28 منازل دیکھیں |
| Arabic name, transliteration and a short focus for each station. Expand the live card above for favourable / caution themes (educational). | ہر منزل کا عربی نام، رومن حروف میں تلفظ اور مختصر مرکزی خیال۔ موافق / احتیاطی موضوعات (تعلیمی) کے لیے اوپر زندہ کارڈ کھولیں۔ |
| Al-Sharaṭān | الشرطان |
| Al-Buṭayn | البطين |
| Al-Thurayyā | الثريا |
| Al-Dabarān | الدبران |
| Al-Haqʿah | الهقعة |
| Al-Hanʿah | الهنعة |
| Al-Dhirāʿ | الذراع |
| Al-Nathrah | النثرة |
| Al-Ṭarf | الطرف |
| Al-Jabhah | الجبهة |
| Al-Zubrah | الزبرة |
| Al-Ṣarfah | الصرفة |
| Al-ʿAwwāʾ | العواء |
| Al-Simāk | السماك |
| Al-Ghafr | الغفر |
| Al-Zubānā | الزبانا |
| Al-Iklīl | الإكليل |
| Al-Qalb | القلب |
| Al-Shawlah | الشولة |
| Al-Baldah | البلدة |
| Saʿd Bulaʿ | سعد بلع |
| Saʿd al-Akhbiyah | سعد الأخبية |
| Al-Fargh al-Muqaddam | الفرغ المقدم |
| Al-Fargh al-Muʾakhkhar | الفرغ المؤخر |
| Your natal manzil | آپ کی پیدائشی منزل |
| Your birth profile shows the lunar mansion the Moon occupied at your birth time, together with Sun and Moon signs and day ruler. | آپ کا پیدائشی پروفائل وہ منزلِ قمر دکھاتا ہے جس میں آپ کی پیدائش کے وقت قمر تھا، ساتھ شمس و قمر کے برج اور دن کا حاکم سیارہ۔ |
| Open Birth Profile → | پیدائشی پروفائل کھولیں ← |
| What is a lunar mansion (manzil)? | منزلِ قمر کیا ہے؟ |
| A manzil (pl. manāzil al-qamar) is one of twenty-eight sectors of the Moon’s path. Classical sources give each station a name and traditional themes. Asrār shows the current station and educational notes for reflection. | منزل (جمع: منازل القمر) قمر کے راستے کے اٹھائیس حصوں میں سے ایک ہے۔ کلاسیکی مآخذ ہر منزل کو ایک نام اور روایتی موضوعات دیتے ہیں۔ اسرار موجودہ منزل اور غور و فکر کے لیے تعلیمی نکات دکھاتا ہے۔ |
| How does Asrār calculate today’s manzil? | اسرار آج کی منزل کیسے نکالتا ہے؟ |
| From the Moon’s tropical ecliptic longitude (astronomy-engine), divided into 28 equal sectors of 360°/28 ≈ 12.857°. Mansion 1 begins at 0° of the tropical ecliptic. This matches Asrār’s default tropical planetary ephemeris. | قمر کے استوائی (ٹراپیکل) طول البلد سے (astronomy-engine)، جسے 360°/28 ≈ 12.857° کے 28 برابر حصوں میں تقسیم کیا جاتا ہے۔ منزل 1 استوائی دائرۃ البروج کے 0° سے شروع ہوتی ہے۔ یہ اسرار کے طے شدہ استوائی سیاروی ایفیمرس کے مطابق ہے۔ |
| Is this prediction or magic? | کیا یہ پیش گوئی یا جادو ہے؟ |
| No. Asrār presents manāzil for education and timing adab. There are no talismans, taweez recipes, or claims to know the unseen. Favourable or cautious themes are traditional notes for reflection, not guarantees. | نہیں۔ اسرار منازل کو تعلیم اور اوقات کے آداب کے لیے پیش کرتا ہے۔ اس میں نہ تعویذ ہیں، نہ تعویذ کے نسخے، اور نہ غیب جاننے کا کوئی دعویٰ۔ موافق یا احتیاطی موضوعات غور و فکر کے لیے روایتی نکات ہیں، ضمانت نہیں۔ |
| How do manāzil relate to ikhtiyārāt? | منازل کا اختیارات سے کیا تعلق ہے؟ |
| Electional timing may weigh the Moon’s mansion among other factors (day ruler, planetary hour, phase). See Best Dates (Ikhtiyārāt). Election tables on Asrār remain separately reviewed and are not auto-derived from every mansion’s fav/unfav list. | اختیارات کے وقت کے انتخاب میں دوسرے عوامل (دن کا حاکم، ساعتِ کواکب، قمر کا مرحلہ) کے ساتھ قمر کی منزل بھی دیکھی جا سکتی ہے۔ دیکھیں: بہترین تاریخیں (اختیارات)۔ اسرار کے انتخابی جدول الگ سے جانچے جاتے ہیں اور ہر منزل کی موافق/غیر موافق فہرست سے خودکار طور پر اخذ نہیں کیے جاتے۔ |
| Where do I find my birth manzil? | میں اپنی پیدائشی منزل کہاں دیکھوں؟ |
| Use Birth Profile with your birth date, time and place. The profile includes the natal lunar mansion alongside Sun/Moon signs. | پیدائشی پروفائل میں اپنی تاریخ، وقت اور مقامِ پیدائش درج کریں۔ پروفائل میں شمس و قمر کے برجوں کے ساتھ پیدائشی منزلِ قمر بھی شامل ہوتی ہے۔ |
| Classical electional timing for nikāḥ, travel, business and more. | نکاح، سفر، کاروبار اور دیگر کے لیے کلاسیکی علمِ اختیارات۔ |
| Your Sun and Moon signs, natal lunar mansion and dignities. | آپ کے شمس و قمر کے برج، پیدائشی منزلِ قمر اور سیاروں کی حالتیں۔ |
| Live positions of the seven classical planets. | سات کلاسیکی سیاروں کے زندہ مقامات۔ |
| ▼ Hide details | ▼ تفصیل چھپائیں |
| Favourable themes (adab) | موافق موضوعات (آداب) |
| Caution themes | احتیاطی موضوعات |
| , Educational framing (Qurʾān 10:5; 36:39) | ، تعلیمی پس منظر (قرآن 10:5؛ 36:39) |



### 6.16 birth-profile (11)

| English | Urdu |
|---|---|
| Your Personal ʿIlm al-Nujūm Snapshot | آپ کا ذاتی علم النجوم خاکہ |
| Enter your date of birth (and, if you know it, the exact time and place) to see your Sun and Moon signs, the Moon's lunar mansion at your birth, the day that ruled your birth date, and each classical planet's real astronomical condition that day — computed instantly from this app's own ephemeris, not a network call. | اپنی تاریخِ پیدائش (اور اگر معلوم ہو تو درست وقت اور مقام) درج کریں تاکہ آپ شمس و قمر کے برج، پیدائش کے وقت قمر کی منزل، آپ کی تاریخِ پیدائش کا حاکم دن، اور اس دن ہر کلاسیکی سیارے کی حقیقی فلکی حالت دیکھ سکیں — جو اسی ایپ کے اپنے ایفیمرس سے فوراً نکالی جاتی ہے، نیٹ ورک کال سے نہیں۔ |
| Date of birth | تاریخِ پیدائش |
| I know my exact time of birth | مجھے اپنی پیدائش کا درست وقت معلوم ہے |
| Unlocks your Ascendant/Descendant — otherwise skipped, since it needs a precise time to mean anything. | آپ کا طالع/غارب کھولتا ہے — ورنہ چھوڑ دیا جاتا ہے، کیونکہ اس کے معنی کے لیے درست وقت ضروری ہے۔ |
| Birth location | مقامِ پیدائش |
| Use my current location | میرا موجودہ مقام استعمال کریں |
| Latitude | عرض البلد |
| Longitude | طول البلد |
| Timezone | ٹائم زون |
| Calculate My Birth Profile | میرا پیدائشی پروفائل حساب کریں |



### 6.17 planet-transit (65)

| English | Urdu |
|---|---|
| Real-Time Celestial Positions | آسمان کے زندہ مقامات |
| This page shows the live positions of all 7 classical planets (Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn) in the zodiac, calculated using NASA JPL-based ephemeris data. Tap any planet to see its detailed dignity status, sign meaning, and guidance for that planetary energy right now. | یہ صفحہ زائچے میں تمام 7 کلاسیکی سیاروں (شمس، قمر، عطارد، زہرہ، مریخ، مشتری، زحل) کے زندہ مقامات دکھاتا ہے، جو NASA JPL پر مبنی ایفیمرس ڈیٹا سے نکالے گئے ہیں۔ کسی بھی سیارے پر ٹیپ کر کے اس کی تفصیلی حالت، برج کا مفہوم، اور اس وقت اس فلکی توانائی کے بارے میں رہنمائی دیکھیں۔ |
| Live Planetary Positions | سیاروں کے زندہ مقامات |
| 🗺️ How to Read Transits | 🗺️ عبور کیسے پڑھیں |
| Pick Your Planet | اپنا سیارہ منتخب کریں |
| Tap any planet in the grid to see its current zodiac sign, degree, and status. | گرڈ میں کسی بھی سیارے پر ٹیپ کریں تاکہ اس کا موجودہ برج، درجہ اور حالت دیکھ سکیں۔ |
| Read Its Zodiac Position | اس کا برجی مقام پڑھیں |
| The sign tells you the "flavour" of how the planet expresses itself and where in life its energy is focused. | برج بتاتا ہے کہ سیارہ اپنی خصوصیات کس «انداز» میں ظاہر کرتا ہے اور اس کی توانائی زندگی کے کس شعبے پر مرکوز ہے۔ |
| Check the Dignity | حالت دیکھیں |
| Domicile/Exaltation = strong beneficial influence. Detriment/Fall = weakened or challenged. Use this to calibrate timing for related matters. | بیت/شرف = مضبوط موافق حالت۔ وبال/ہبوط = کمزور یا مشکل حالت۔ اسے متعلقہ معاملات کے اوقات کا اندازہ لگانے کے لیے استعمال کریں۔ |
| Note Retrograde Status | رجعت کی حالت دیکھیں |
| A retrograde symbol (℞) means the planet is in a reflective phase — better for review than for new beginnings in that planet's domain. | رجعت کی علامت (℞) کا مطلب ہے کہ سیارہ غور و فکر کے مرحلے میں ہے — اس سیارے کے دائرے میں نئے آغاز سے زیادہ نظرِ ثانی کے لیے بہتر۔ |
| ⚖️ Essential Dignities — The Strength System | ⚖️ ذاتی حالتیں — قوت کا نظام |
| Traditional astrology grades each planet's strength by its relationship to the sign it occupies. Think of it as a measure of how comfortable and effective the planet is in expressing its nature. | روایتی علمِ نجوم ہر سیارے کی قوت کو اس برج سے اس کے تعلق کی بنیاد پر درجہ دیتا ہے جس میں وہ ہو۔ اسے اس پیمانے کی طرح سمجھیں کہ سیارہ اپنی فطرت ظاہر کرنے میں کتنا آرام دہ اور مؤثر ہے۔ |
| Domicile (Rulership) | بیت (حکمرانی) |
| The planet is in the sign it rules. Like being at home — most comfortable, powerful, and able to act freely. Its qualities express naturally and strongly. | سیارہ اپنے حاکم برج میں ہے۔ گویا اپنے گھر میں — سب سے زیادہ آرام دہ، طاقتور اور آزادی سے عمل کرنے کے قابل۔ اس کی خصوصیات فطری اور مضبوط انداز میں ظاہر ہوتی ہیں۔ |
| Exaltation | شرف |
| The planet is in a sign where it performs exceptionally well — like a guest of honour in a welcoming household. Its best qualities are elevated and dignified. | سیارہ ایسے برج میں ہے جہاں وہ غیر معمولی طور پر اچھا کام کرتا ہے — جیسے خوش آمدید کہنے والے گھر میں معزز مہمان۔ اس کی بہترین خصوصیات بلند اور باوقار ہو جاتی ہیں۔ |
| Triplicity | مثلثہ |
| The planet rules a set of three signs sharing the same element (fire, earth, air, water). Moderate strength, especially during day or night chart conditions. | سیارہ ایک ہی عنصر (آگ، مٹی، ہوا، پانی) والے تین بروج کے مجموعے کا حاکم ہے۔ اوسط قوت، خاص طور پر دن یا رات کے زائچے کی حالتوں میں۔ |
| Term (Bounds) | حد |
| Each sign is divided into 5 sections (terms), each ruled by a planet. A planet in its own term has minor dignity — like being in a familiar neighbourhood. | ہر برج کو 5 حصوں (حدود) میں بانٹا جاتا ہے، ہر ایک کا ایک حاکم سیارہ ہوتا ہے۔ اپنی حد میں سیارے کو معمولی وقار حاصل ہوتا ہے — جیسے جانے پہچانے محلے میں ہونا۔ |
| Decan (Face) | وجہ (درجہ) |
| Each sign has three 10° sections (decans), each ruled by a planet. Being in one's own decan gives minimal dignity — enough to act, but not with great strength. | ہر برج میں 10° کے تین حصے (وجوہ) ہوتے ہیں، ہر ایک کا ایک حاکم سیارہ۔ اپنی وجہ میں ہونے سے کم سے کم وقار ملتا ہے — کام کرنے کے لیے کافی، مگر بڑی قوت کے ساتھ نہیں۔ |
| Detriment | وبال |
| The planet is in the sign opposite its domicile. Uncomfortable, weakened, unable to work with full energy. Its natural qualities are challenged or distorted. | سیارہ اپنے بیت کے مقابل برج میں ہے۔ بے آرام، کمزور، اور پوری توانائی سے کام کرنے سے قاصر۔ اس کی فطری خصوصیات مشکل میں یا بگڑی ہوئی ہوتی ہیں۔ |
| Fall | ہبوط |
| The planet is in the sign opposite its exaltation. Significantly weakened. Like a king in exile — present but unable to fulfill their role. Caution advised for matters ruled by this planet. | سیارہ اپنے شرف کے مقابل برج میں ہے۔ نمایاں طور پر کمزور۔ جلاوطن بادشاہ کی طرح — موجود مگر اپنا کردار ادا کرنے سے قاصر۔ اس سیارے کے زیرِ اثر معاملات میں احتیاط کا مشورہ ہے۔ |
| Retrograde (℞) Explained | رجعت (℞) کی وضاحت |
| What is it? | یہ کیا ہے؟ |
| When a planet appears to move backwards through the zodiac from Earth's perspective. This is an optical illusion caused by differing orbital speeds, but in traditional astrology the effect is real and significant. | جب زمین کے نقطۂ نظر سے کوئی سیارہ دائرۃ البروج میں پیچھے کی طرف چلتا نظر آتا ہے۔ یہ مداروں کی مختلف رفتار سے پیدا ہونے والا بصری دھوکا ہے، مگر روایتی علمِ نجوم میں اس کا اثر حقیقی اور اہم مانا جاتا ہے۔ |
| Effect | اثر |
| A retrograde planet's energy turns inward and becomes more reflective, less direct. For example: Mercury retrograde = review communication, revisit unfinished writing, and introspect on thought patterns. | رجعتی سیارے کی توانائی اندر کی طرف مڑ جاتی ہے اور زیادہ غور و فکر والی، کم براہِ راست ہو جاتی ہے۔ مثلاً: عطارد کی رجعت = رابطے پر نظرِ ثانی، ادھوری تحریر کی طرف واپسی، اور سوچ کے انداز پر غور۔ |
| ☪️ Islamic Context | ☪️ اسلامی سیاق |
| Islamic scholars of ʿIlm al-Nujūm noted retrograde (rujūʿ, رجوع) as a period where planetary influence is "weakened" or "reversed." It is a time for reflection (murājaʿah), not for beginning critical new matters. | علم النجوم کے اسلامی علماء نے رجعت (رجوع) کو ایسا دور بتایا جس میں سیاروی اثر «کمزور» یا «الٹا» سمجھا جاتا ہے۔ یہ غور و فکر (مراجعہ) کا وقت ہے، نہ کہ اہم نئے معاملات شروع کرنے کا۔ |
| 🌐 Zodiac Systems | 🌐 بروج کے نظام |
| Tropical Zodiac | استوائی دائرۃ البروج |
| Based on the seasons and the Earth's relationship with the Sun. Aries begins at the Spring Equinox. This is the system used in Western astrology and most Islamic classical texts on ʿIlm al-Nujūm. | موسموں اور زمین کے سورج سے تعلق پر مبنی۔ حمل بہاری اعتدال سے شروع ہوتا ہے۔ یہ وہ نظام ہے جو مغربی علمِ نجوم اور علم النجوم کی اکثر کلاسیکی اسلامی کتب میں استعمال ہوتا ہے۔ |
| Sidereal Zodiac (Lahiri) | نجمی دائرۃ البروج (لاہری) |
| Fixed to the actual star constellations. Accounts for the ~24° "precession of the equinoxes" offset accumulated over 2,000 years. Used in Vedic/Jyotish astrology. Enabled in settings for comparison. | حقیقی ستارہ جھرمٹوں سے جڑا ہوا۔ 2,000 سال میں جمع ہونے والے تقریباً 24° «اعتدالین کے تقدم» کے فرق کو شمار کرتا ہے۔ ویدک/جیوتش علمِ نجوم میں استعمال ہوتا ہے۔ موازنے کے لیے سیٹنگز میں فعال کیا جا سکتا ہے۔ |
| 🤲 Practical Islamic Use | 🤲 عملی اسلامی استعمال |
| Knowing Your Timing | اپنے اوقات کو سمجھنا |
| When a benefic planet (Jupiter, Venus) is in dignity and transiting your area of concern, consider it a period of openness (fatḥ). Make du'ā', begin projects, and act boldly. | جب کوئی سعد سیارہ (مشتری، زہرہ) وقار کی حالت میں ہو اور آپ کی فکر کے دائرے سے گزر رہا ہو تو اسے کشادگی (فتح) کا دور سمجھیں۔ دعا کریں، منصوبے شروع کریں، اور ہمت سے عمل کریں۔ |
| When Saturn or Mars are in Fall or Detriment | جب زحل یا مریخ ہبوط یا وبال میں ہوں |
| These are periods to exercise extra patience and caution in matters of health, finances, and conflicts. Double your Isti'ādhah (seeking refuge in Allah) and du'ā'. | یہ صحت، مالیات اور تنازعات کے معاملات میں اضافی صبر اور احتیاط کے ادوار ہیں۔ استعاذہ (اللہ کی پناہ مانگنا) اور دعا بڑھا دیں۔ |
| Retrograde Periods | رجعت کے ادوار |
| Use Mercury retrograde for reviewing contracts and studying. Use Venus retrograde for reflecting on relationships. Use Mars retrograde to strategize before acting. | عطارد کی رجعت معاہدوں اور مطالعے پر نظرِ ثانی کے لیے استعمال کریں۔ زہرہ کی رجعت تعلقات پر غور کے لیے۔ مریخ کی رجعت عمل سے پہلے حکمتِ عملی بنانے کے لیے۔ |
| ⚠️ Planetary transit data is calculated using ephemeris mathematics and is provided for spiritual reflection within the tradition of Islamic ʿIlm al-Nujūm. This is not astrology for prediction (tanjīm) or belief in planets as independent agents. Allah alone is Al-Ḥakīm, Al-ʿAlīm — the All-Wise, All-Knowing. | ⚠️ سیاروں کے عبور کا ڈیٹا ایفیمرس کے ریاضیاتی حساب سے نکالا جاتا ہے اور علم النجوم کی اسلامی روایت کے اندر روحانی غور و فکر کے لیے فراہم کیا جاتا ہے۔ یہ پیش گوئی (تنجیم) کا علمِ نجوم نہیں ہے اور نہ سیاروں کو خود مختار فاعل ماننا ہے۔ صرف اللہ ہی الحکیم، العلیم ہے — سب حکمتوں اور علم والا۔ |
| See All | سب دیکھیں |
| Planet | سیارہ |
| Sign | برج |
| Ṣalawāt | درود شریف |
| Blessings upon the Prophet ﷺ | نبی کریم ﷺ پر درود |
| Always beneficial, opens spiritual doors | ہمیشہ مفید، روحانی دروازے کھولتا ہے |
| Lubān wa Mayʿah Sāʾilah | لُبان و میعہ سائلہ |
| Transit Practice - | عبور کا معمول - |
| View Details | تفصیل دیکھیں |
| Suitable for regular practice and reflection | باقاعدہ معمول اور غور و فکر کے لیے موزوں |
| View Saturn | زحل دیکھیں |
| View Jupiter | مشتری دیکھیں |
| View Mars | مریخ دیکھیں |
| View Sun | شمس دیکھیں |
| View Venus | زہرہ دیکھیں |
| View Mercury | عطارد دیکھیں |
| View Moon | قمر دیکھیں |



### 6.18 sadaqa-page (150)

| English | Urdu |
|---|---|
| Sadaqa Guide — By Day of the Week, Hijri Birth Month and Burj | صدقہ رہنما — ہفتے کے دن، پیدائشی ہجری مہینے اور برج کے مطابق |
| Sadaqah, voluntary charity, can be given at any time and in any amount. Many Muslims make a habit of giving on Friday (Jumuʿa), and in West African (Senegalese / Wolof) practice — sarax — particular forms of sadaqah are also suggested for each weekday, for the Hijri month you were born in, and for your burj. | صدقہ، یعنی نفلی خیرات، کسی بھی وقت اور کسی بھی مقدار میں دیا جا سکتا ہے۔ بہت سے مسلمان جمعہ کو دینے کی عادت بناتے ہیں، اور مغربی افریقی (سینیگالی / وولوف) روایت — سرَک — میں ہفتے کے ہر دن، آپ کی پیدائش کے ہجری مہینے اور آپ کے برج کے لیے صدقے کی مخصوص صورتیں بھی تجویز کی جاتی ہیں۔ |
| This guide gathers the three in one place, using the same data as the Asrār calculators. Use whichever applies to you, and remember that the best sadaqah is the one given sincerely and regularly. | یہ رہنما تینوں کو ایک جگہ جمع کرتا ہے، اسرار کیلکولیٹرز والے ہی ڈیٹا کے ساتھ۔ جو آپ پر لاگو ہو اسے استعمال کریں، اور یاد رکھیں کہ بہترین صدقہ وہ ہے جو خلوص اور تسلسل کے ساتھ دیا جائے۔ |
| For reflection and education, not prediction or a promise of outcomes; Allah alone knows the unseen. | غور و فکر اور تعلیم کے لیے، پیش گوئی یا نتائج کے وعدے کے لیے نہیں؛ غیب کا علم صرف اللہ کو ہے۔ |
| Sadaqa by day of the week | ہفتے کے دن کے مطابق صدقہ |
| Sadaqa by Hijri birth month | پیدائشی ہجری مہینے کے مطابق صدقہ |
| Sadaqa by burj | برج کے مطابق صدقہ |
| Each weekday has its own suggested sadaqah. See today's guidance and the full table on the Sadaqa of the Day page. | ہفتے کے ہر دن کا اپنا تجویز کردہ صدقہ ہے۔ آج کی رہنمائی اور مکمل جدول «آج کا صدقہ» کے صفحے پر دیکھیں۔ |
| Gather children and give them food as sadaqah; Help anyone who is poor or in need | بچوں کو جمع کر کے صدقے کے طور پر کھانا کھلائیں؛ کسی بھی غریب یا ضرورت مند کی مدد کریں |
| Give water as sadaqah; Help an elderly person, a woman, or children; Give food or sadaqah to children in the evening | صدقے کے طور پر پانی دیں؛ کسی بزرگ، خاتون یا بچوں کی مدد کریں؛ شام کو بچوں کو کھانا یا صدقہ دیں |
| Giving food to children; Helping a person who is experiencing difficulties; Helping someone purchase their medication; Contributing toward someone's medical or medication expenses | بچوں کو کھانا کھلانا؛ کسی مشکل میں مبتلا شخص کی مدد کرنا؛ کسی کو دوا خریدنے میں مدد دینا؛ کسی کے علاج یا دوا کے اخراجات میں حصہ ڈالنا |
| Give white paper and pens; Provide food to children | سفید کاغذ اور قلم دینا؛ بچوں کو کھانا کھلانا |
| Giving food to people in need; Giving money as sadaqah; Supporting a mosque; Helping to clean a mosque; Performing voluntary service in the mosque | ضرورت مندوں کو کھانا دینا؛ صدقے کے طور پر رقم دینا؛ مسجد کی مدد کرنا؛ مسجد کی صفائی میں مدد کرنا؛ مسجد میں رضاکارانہ خدمت کرنا |
| Clothes; Soap; Perfume | کپڑے؛ صابن؛ عطر |
| Giving essential food items such as rice, oil, and other necessities; Helping an elderly person with their needs; Providing financial assistance to someone in difficulty | چاول، تیل اور دیگر ضروریات جیسی بنیادی غذائی اشیا دینا؛ کسی بزرگ کی ضروریات میں مدد کرنا؛ کسی مشکل میں مبتلا شخص کی مالی مدد کرنا |
| See today's sadaqa → | آج کا صدقہ دیکھیں ← |
| Enter your Gregorian date of birth to find the Hijri (Islamic) month you were born in. Wolof names are shown where they are commonly used (Tamxarit, Gamo, Korité, Tabaski…). | اپنی عیسوی تاریخِ پیدائش درج کریں تاکہ معلوم ہو آپ کس ہجری (اسلامی) مہینے میں پیدا ہوئے۔ جہاں رائج ہوں وہاں وولوف نام بھی دکھائے جاتے ہیں (تمخریت، گامو، کورتے، تباسکی…)۔ |
| Enter your Gregorian date of birth — it will be converted to the Islamic calendar. | اپنی عیسوی تاریخِ پیدائش درج کریں — اسے اسلامی تقویم میں بدل دیا جائے گا۔ |
| Muharram (Tamxarit) | محرم (تمخریت) |
| For anyone born in Muharram (Tamxarit), their sadaqah can include: | محرم (تمخریت) میں پیدا ہونے والے کے صدقے میں یہ شامل ہو سکتا ہے: |
| Giving water to those in need. | ضرورت مندوں کو پانی دینا۔ |
| Feeding someone who is fasting. | کسی روزے دار کو کھانا کھلانا۔ |
| Helping an orphan or orphans. | کسی یتیم یا یتیموں کی مدد کرنا۔ |
| Giving other forms of charity according to their ability. | اپنی استطاعت کے مطابق خیرات کی دوسری صورتیں اختیار کرنا۔ |
| For anyone born in Safar, their sadaqah can include: | صفر میں پیدا ہونے والے کے صدقے میں یہ شامل ہو سکتا ہے: |
| Giving rice. | چاول دینا۔ |
| Giving flour. | آٹا دینا۔ |
| Giving cooking oil. | کھانا پکانے کا تیل دینا۔ |
| Giving clothes. | کپڑے دینا۔ |
| Helping sick people, financially or with whatever they need. | بیمار لوگوں کی مالی طور پر یا ان کی کسی بھی ضرورت میں مدد کرنا۔ |
| Rabi al-Awwal (Gamo) | ربیع الاول (گامو) |
| For anyone born in Rabi al-Awwal (Gamo), their sadaqah can include: | ربیع الاول (گامو) میں پیدا ہونے والے کے صدقے میں یہ شامل ہو سکتا ہے: |
| Giving sadaqah to children. | بچوں کو صدقہ دینا۔ |
| Helping poor families. | غریب خاندانوں کی مدد کرنا۔ |
| Helping and supporting the mosque. | مسجد کی مدد اور اعانت کرنا۔ |
| Providing food, money, or other useful assistance. | کھانا، رقم یا دوسری مفید مدد فراہم کرنا۔ |
| Rabi al-Thani (Rabi al-Akhir) | ربیع الثانی (ربیع الآخر) |
| For anyone born in Rabi al-Thani (Rabi al-Akhir), their sadaqah can include: | ربیع الثانی (ربیع الآخر) میں پیدا ہونے والے کے صدقے میں یہ شامل ہو سکتا ہے: |
| Helping a widow. | کسی بیوہ کی مدد کرنا۔ |
| Giving soap. | صابن دینا۔ |
| Providing kitchen and food supplies. | باورچی خانے اور خوراک کا سامان فراہم کرنا۔ |
| Helping with necessities that can support a person or family. | ایسی ضروریات میں مدد کرنا جو کسی فرد یا خاندان کا سہارا بن سکیں۔ |
| For anyone born in Jumada al-Awwal, their sadaqah can include: | جمادی الاولیٰ میں پیدا ہونے والے کے صدقے میں یہ شامل ہو سکتا ہے: |
| Giving hot, nourishing food. | گرم، غذائیت بخش کھانا دینا۔ |
| Helping poor labourers and workers. | غریب مزدوروں اور کام کرنے والوں کی مدد کرنا۔ |
| Supporting hardworking people who are facing difficult circumstances. | مشکل حالات کا سامنا کرنے والے محنتی لوگوں کا ساتھ دینا۔ |
| Jumada al-Akhirah (Jumada al-Thani) | جمادی الثانیہ (جمادی الآخرہ) |
| For anyone born in Jumada al-Akhirah, their sadaqah is especially good when it is given discreetly and privately. | جمادی الآخرہ میں پیدا ہونے والے کے لیے صدقہ خاص طور پر اس وقت اچھا ہے جب وہ چھپا کر اور خاموشی سے دیا جائے۔ |
| Help anyone who is in need. | جو بھی ضرورت مند ہو اس کی مدد کریں۔ |
| Give food, money, or useful assistance. | کھانا، رقم یا کوئی مفید مدد دیں۔ |
| Help someone quietly without seeking recognition or praise. | کسی کی خاموشی سے مدد کریں، بغیر شہرت یا تعریف کی خواہش کے۔ |
| For anyone born in Rajab, their sadaqah can focus on supporting people who learn and teach the Qur'an: | رجب میں پیدا ہونے والے کا صدقہ قرآن سیکھنے اور سکھانے والوں کی مدد پر مرکوز ہو سکتا ہے: |
| Giving a complete Qur'an (Kamil) to a mosque or place of Qur'anic learning. | مسجد یا قرآنی تعلیم کی جگہ کو مکمل قرآن (کامل) دینا۔ |
| Providing Qur'ans for people to read and use. | لوگوں کے پڑھنے اور استعمال کے لیے قرآن مہیا کرنا۔ |
| Donating Qur'ans to daaras. | دارہ (قرآنی مدارس) کو قرآن عطیہ کرنا۔ |
| Helping mosques and places of Qur'anic learning. | مساجد اور قرآنی تعلیم کی جگہوں کی مدد کرنا۔ |
| Supporting Qur'anic students and those who use these places. | قرآن کے طلبہ اور ان جگہوں کو استعمال کرنے والوں کی معاونت کرنا۔ |
| For anyone born in Sha'ban, their sadaqah can include: | شعبان میں پیدا ہونے والے کے صدقے میں یہ شامل ہو سکتا ہے: |
| Giving meals to poor families. | غریب خاندانوں کو کھانا دینا۔ |
| Sharing the meals prepared in their own home with a family in need. | اپنے گھر میں تیار کیا ہوا کھانا کسی ضرورت مند خاندان کے ساتھ بانٹنا۔ |
| Giving food and other necessities to people who are struggling. | مشکل میں گھرے لوگوں کو کھانا اور دوسری ضروریات دینا۔ |
| Helping and supporting the elderly, especially those who are alone or in need. | بزرگوں کی مدد اور معاونت کرنا، خاص طور پر ان کی جو تنہا یا ضرورت مند ہوں۔ |
| Ramadan (Werruk Korr) | رمضان (ورّق کور) |
| For anyone born in Ramadan (Werruk Korr), their sadaqah can include: | رمضان (ورّق کور) میں پیدا ہونے والے کے صدقے میں یہ شامل ہو سکتا ہے: |
| Giving iftar to someone who is fasting. | کسی روزے دار کو افطار کروانا۔ |
| Not being reluctant or hesitant to give their zakat when it is due. | زکوٰۃ واجب ہونے پر اسے دینے میں ہچکچاہٹ یا ٹال مٹول نہ کرنا۔ |
| Helping poor families and needy people with food, money, or necessities. | غریب خاندانوں اور ضرورت مندوں کی کھانے، رقم یا ضروریات سے مدد کرنا۔ |
| Giving this support at night, particularly to those who are in need. | یہ مدد رات کے وقت دینا، خاص طور پر ضرورت مندوں کو۔ |
| Shawwal (Korité) | شوال (کورتے) |
| For anyone born in Shawwal (Korité), their sadaqah can include: | شوال (کورتے) میں پیدا ہونے والے کے صدقے میں یہ شامل ہو سکتا ہے: |
| Giving brand-new clothes to someone in need. | کسی ضرورت مند کو بالکل نئے کپڑے دینا۔ |
| Giving clean, good-quality clothing. | صاف اور اچھی کوالٹی کے کپڑے دینا۔ |
| Helping people have suitable clothes that they can wear with dignity. | لوگوں کی ایسے مناسب کپڑوں میں مدد کرنا جو وہ وقار کے ساتھ پہن سکیں۔ |
| Dhu al-Qi'dah (Diggi Kor) | ذوالقعدہ (دِگّی کور) |
| For anyone born in Dhu al-Qi'dah (Diggi Kor), their sadaqah can include: | ذوالقعدہ (دِگّی کور) میں پیدا ہونے والے کے صدقے میں یہ شامل ہو سکتا ہے: |
| Helping a traveller, financially or in any other way that can make their journey easier. | کسی مسافر کی مالی طور پر یا کسی اور طرح مدد کرنا جس سے اس کا سفر آسان ہو۔ |
| Giving food to poor and needy people. | غریب اور ضرورت مند لوگوں کو کھانا دینا۔ |
| Giving hot, nourishing food as sadaqah to those in need. | ضرورت مندوں کو صدقے کے طور پر گرم، غذائیت بخش کھانا دینا۔ |
| Offering practical assistance to people experiencing hardship. | مشکل میں مبتلا لوگوں کی عملی مدد کرنا۔ |
| Dhu al-Hijjah (Tabaski) | ذوالحجہ (تباسکی) |
| For anyone born in Dhu al-Hijjah (Tabaski), their sadaqah can include: | ذوالحجہ (تباسکی) میں پیدا ہونے والے کے صدقے میں یہ شامل ہو سکتا ہے: |
| Giving meat as sadaqah, especially to poor and needy people. | صدقے کے طور پر گوشت دینا، خاص طور پر غریب اور ضرورت مند لوگوں کو۔ |
| Helping pilgrims who have travelled to Makkah for Hajj, financially or in any other useful way. | مکہ مکرمہ حج کے لیے جانے والے حاجیوں کی مالی طور پر یا کسی اور مفید طریقے سے مدد کرنا۔ |
| Visiting and welcoming a pilgrim when they return from Makkah, through ziyar. | مکہ سے واپسی پر کسی حاجی سے ملنے جانا اور اس کا استقبال کرنا، زیارت (زیار) کے ذریعے۔ |
| Helping poor and needy people with food, money, clothing, or other necessities. | غریب اور ضرورت مند لوگوں کی کھانے، رقم، کپڑوں یا دوسری ضروریات سے مدد کرنا۔ |
| Each of the twelve burūj has its own traditional sadaqah, according to the teachings of Seringe Mahdiou Niane (with companion videos in Wolof inside the app). Not sure of your burj? Find it from your name and your mother's name. | بارہ بروج میں سے ہر ایک کا اپنا روایتی صدقہ ہے، Seringe Mahdiou Niane کی تعلیمات کے مطابق (ایپ کے اندر وولوف زبان کی ساتھی ویڈیوز کے ساتھ)۔ اپنے برج کا یقین نہیں؟ اسے اپنے نام اور والدہ کے نام سے معلوم کریں۔ |
| Find your burj from your name & mother's name → | اپنا برج اپنے نام اور والدہ کے نام سے معلوم کریں ← |
| Livestock Sadaqah | مویشیوں کا صدقہ |
| Worn Clothing Sadaqah | پہنے ہوئے کپڑوں کا صدقہ |
| One-Coloured Ram Sadaqah | ایک رنگ کے مینڈھے کا صدقہ |
| Used Clothing Sadaqah — Protection | استعمال شدہ کپڑوں کا صدقہ — حفاظت |
| Grains and Agricultural Produce | اناج اور زرعی پیداوار |
| Rice, Millet and Cooking Oil | چاول، باجرہ اور کھانا پکانے کا تیل |
| Water Sadaqah | پانی کا صدقہ |
| Supporting an Elderly Person — Provision | کسی بزرگ کی کفالت — روزی |
| Suggested day | تجویز کردہ دن |
| Kola Nut Sadaqah | کولا نٹ کا صدقہ |
| Money Sadaqah — Preservation of Wealth | رقم کا صدقہ — مال کی حفاظت |
| Three-Coloured Chicken Sadaqah | تین رنگوں کی مرغی کا صدقہ |
| Guinea Fowl (Pintade) Sadaqah | گنی فاؤل (پنتاد) کا صدقہ |
| Educational Materials Sadaqah | تعلیمی سامان کا صدقہ |
| Supporting Teachers and Qur'anic Teachers | اساتذہ اور قرآن کے اساتذہ کی معاونت |
| Feeding Children | بچوں کو کھانا کھلانا |
| Salt Sadaqah | نمک کا صدقہ |
| Four Kilograms of Meat | چار کلوگرام گوشت |
| Helping a Family in Need | ضرورت مند خاندان کی مدد |
| Supporting an Elderly Woman | کسی بزرگ خاتون کی معاونت |
| Giving Milk to Children | بچوں کو دودھ دینا |
| Raising and Giving a Ram | مینڈھا پال کر دینا |
| Three Bowls of Cheb Yap | چیب یاپ کے تین پیالے |
| Three Bowls of Porridge with Yogurt | دہی والے دلیے کے تین پیالے |
| One Hundred Kola Nuts | ایک سو کولا نٹ |
| Money Sadaqah | رقم کا صدقہ |
| Three Cereals Sadaqah | تین اناجوں کا صدقہ |
| Secret Sadaqah of Virgo — Age 40 | سنبلہ کا خفیہ صدقہ — چالیس سال کی عمر میں |
| Seven Yogurts Sadaqah | سات دہیوں کا صدقہ |
| Guinea Fowl Sadaqah | گنی فاؤل کا صدقہ |
| Protective Ring Sadaqah | حفاظتی انگوٹھی کا صدقہ |
| White Ram or Sheep Sadaqah | سفید مینڈھے یا بھیڑ کا صدقہ |
| Red Goat Sadaqah During a Favourable Mars Transit | مریخ کے موافق عبور کے دوران سرخ بکرے کا صدقہ |
| Water Sadaqah — For Patients | پانی کا صدقہ — مریضوں کے لیے |
| Rice and Fish Sadaqah | چاول اور مچھلی کا صدقہ |
| Nine Pieces of Bread | روٹی کے نو ٹکڑے |
| Three Bowls of Laakh | لاخ کے تین پیالے |
| One-Coloured White Ram | ایک رنگ کا سفید مینڈھا |
| Open Sadaqah | کھلا صدقہ |
| Rice and Millet Sadaqah | چاول اور باجرے کا صدقہ |
| Kafan — Burial Shroud Sadaqah | کفن — کفن کا صدقہ |
| Cowries — Petaw Sadaqah | کوڑیاں — پیتاو صدقہ |
| Helping Labourers and Low-Income Workers | مزدوروں اور کم آمدنی والے کارکنوں کی مدد |
| Helping a Widow and Her Children | بیوہ اور اس کے بچوں کی مدد |
| Supporting a Community or Group | کسی برادری یا گروہ کی معاونت |
| Guinea Fowl or Chicken Sadaqah | گنی فاؤل یا مرغی کا صدقہ |
| Fish Sadaqah | مچھلی کا صدقہ |
| Seven-Chicken Food Sadaqah | سات مرغیوں کے کھانے کا صدقہ |
| Evening Food Sadaqah | شام کے کھانے کا صدقہ |
| Helping Someone Experiencing Mental Health Difficulties | ذہنی صحت کی مشکل سے گزرنے والے کی مدد |
| Supporting Someone Involved in Spiritual Work | روحانی کام میں مصروف شخص کی معاونت |
| What is sarax? | سرَک کیا ہے؟ |
| Sarax is the Wolof word for sadaqah (voluntary charity). In Senegalese and wider West African practice it is often given in specific forms — water, food, clothes, a ram, kola nuts — depending on the day, the person's birth month or their burj. | سرَک وولوف زبان میں صدقے (نفلی خیرات) کا لفظ ہے۔ سینیگال اور وسیع مغربی افریقی رواج میں یہ اکثر مخصوص صورتوں — پانی، کھانا، کپڑے، مینڈھا، کولا نٹ — میں دیا جاتا ہے، دن، فرد کے پیدائشی مہینے یا اس کے برج کے مطابق۔ |
| How do I find my Hijri birth month? | میں اپنا ہجری پیدائشی مہینہ کیسے معلوم کروں؟ |
| Enter your Gregorian date of birth in the checker on this page. It converts the date to the Islamic (Hijri) calendar and shows the sadaqah suggested for that month. | اس صفحے کے چیکر میں اپنی عیسوی تاریخِ پیدائش درج کریں۔ یہ تاریخ کو اسلامی (ہجری) تقویم میں بدل دیتا ہے اور اس مہینے کے لیے تجویز کردہ صدقہ دکھاتا ہے۔ |
| How do I know my burj? | میں اپنا برج کیسے معلوم کروں؟ |
| In this tradition your burj comes from the Abjad values of your name and your mother's name: add them, divide by 12 and the remainder gives the burj. The name & mother's name burj page does the calculation for you. | اس روایت میں آپ کا برج آپ کے نام اور آپ کی والدہ کے نام کی ابجد قدروں سے نکلتا ہے: انہیں جمع کریں، 12 سے تقسیم کریں اور باقی برج بتاتا ہے۔ نام اور والدہ کے نام والا برج کا صفحہ یہ حساب آپ کے لیے کر دیتا ہے۔ |
| Which should I follow: the day, the month or the burj? | مجھے کس کی پیروی کرنی چاہیے: دن، مہینہ یا برج؟ |
| Any of them, or none. They are complementary customs, not obligations. Sadaqah given sincerely on any day is good; these suggestions simply help you choose a form and a moment. | ان میں سے کسی کی بھی، یا کسی کی نہیں۔ یہ ایک دوسرے کی تکمیل کرنے والی رسمیں ہیں، فرائض نہیں۔ کسی بھی دن خلوص سے دیا گیا صدقہ اچھا ہے؛ یہ تجاویز صرف صورت اور وقت چننے میں مدد دیتی ہیں۔ |
| Does giving this sadaqah guarantee a result? | کیا یہ صدقہ دینے سے کسی نتیجے کی ضمانت ملتی ہے؟ |
| No. Sadaqah is given for the sake of Allah. The intentions mentioned (blessing, protection, ease, provision) are hopes placed with Allah, not promised outcomes. | نہیں۔ صدقہ اللہ کی رضا کے لیے دیا جاتا ہے۔ جن مقاصد کا ذکر ہے (برکت، حفاظت، آسانی، رزق) وہ اللہ سے وابستہ امیدیں ہیں، وعدہ شدہ نتائج نہیں۔ |
| Burj, blessed day, dhikr and burj sadaqah. | برج، مبارک دن، ذکر اور برج کا صدقہ۔ |
| All calculator types, including sadaqah by date. | حساب کی تمام اقسام، بشمول تاریخ کے مطابق صدقہ۔ |



### 6.19 sadaqa-day (58)

| English | Urdu |
|---|---|
| Sadaqa | صدقہ |
| Sadaqa of the Day — Recommended Sadaqah for Each Day of the Week | آج کا صدقہ — ہفتے کے ہر دن کے لیے تجویز کردہ صدقہ |
| Sadaqah, voluntary charity, is good on every day, and many Muslims make a habit of giving on Friday (Jumuʿa). Giving a little, consistently, is better than waiting for the "perfect" day. | صدقہ، یعنی نفلی خیرات، ہر دن اچھا ہے، اور بہت سے مسلمان جمعہ کو دینے کی عادت بناتے ہیں۔ تھوڑا مگر مسلسل دینا «بہترین» دن کے انتظار سے بہتر ہے۔ |
| In West African (Senegalese / Wolof) teaching — sarax — each weekday is also linked to particular forms of sadaqah: water on Monday, help with someone's medicine on Tuesday, paper and pens on Wednesday, feeding the needy and supporting the mosque on Thursday, clothes, soap and perfume on Friday. Below is today's suggestion and the full weekly table, from the same guidance used by the Asrār calculator. | مغربی افریقی (سینیگالی / وولوف) تعلیم — سرَک — میں ہفتے کا ہر دن صدقے کی خاص صورتوں سے بھی جڑا ہے: پیر کو پانی، منگل کو کسی کی دوا میں مدد، بدھ کو کاغذ اور قلم، جمعرات کو ضرورت مندوں کو کھانا اور مسجد کی معاونت، جمعہ کو کپڑے، صابن اور عطر۔ نیچے آج کی تجویز اور مکمل ہفتہ وار جدول ہے، اسی رہنمائی سے جو اسرار کیلکولیٹر میں استعمال ہوتی ہے۔ |
| Today's sadaqa | آج کا صدقہ |
| Today is | آج ہے |
| For Sunday, the recommended sadaqah is: | اتوار کے لیے تجویز کردہ صدقہ یہ ہے: |
| Gather children and give them food as sadaqah. | بچوں کو جمع کر کے صدقے کے طور پر کھانا کھلائیں۔ |
| Help anyone who is poor or in need. | جو بھی غریب یا ضرورت مند ہو اس کی مدد کریں۔ |
| Based on the date on your device. | آپ کے آلے کی تاریخ کی بنیاد پر۔ |
| Recommended sadaqa for each day of the week | ہفتے کے ہر دن کے لیے تجویز کردہ صدقہ |
| Recommended sadaqa | تجویز کردہ صدقہ |
| For Monday, the recommended sadaqah is: | پیر کے لیے تجویز کردہ صدقہ یہ ہے: |
| Give water as sadaqah. | صدقے کے طور پر پانی دیں۔ |
| Help an elderly person, a woman, or children. | کسی بزرگ، خاتون یا بچوں کی مدد کریں۔ |
| Give food or sadaqah to children in the evening. | شام کو بچوں کو کھانا یا صدقہ دیں۔ |
| Tuesday is recommended for sadaqah intended for healing and protection. Recommended forms of sadaqah include: | منگل شفا اور حفاظت کی نیت سے صدقے کے لیے تجویز کیا گیا ہے۔ تجویز کردہ صورتوں میں یہ شامل ہیں: |
| Giving food to children. | بچوں کو کھانا کھلانا۔ |
| Helping a person who is experiencing difficulties. | کسی مشکل میں مبتلا شخص کی مدد کرنا۔ |
| Helping someone purchase their medication. | کسی کو اس کی دوا خریدنے میں مدد دینا۔ |
| Contributing toward someone's medical or medication expenses. | کسی کے علاج یا دوا کے اخراجات میں حصہ ڈالنا۔ |
| For Wednesday, the recommended sadaqah is: | بدھ کے لیے تجویز کردہ صدقہ یہ ہے: |
| Give white paper and pens. | سفید کاغذ اور قلم دیں۔ |
| Provide food to children. | بچوں کو کھانا دیں۔ |
| Thursday is considered favourable for sadaqah intended for opening the way to wealth, success, or removing blockages. Recommended acts include: | جمعرات کو رزق و کامیابی کا راستہ کھلنے یا رکاوٹیں دور ہونے کی نیت سے صدقے کے لیے موافق سمجھا جاتا ہے۔ تجویز کردہ اعمال میں یہ شامل ہیں: |
| Giving food to people in need. | ضرورت مندوں کو کھانا دینا۔ |
| Giving money as sadaqah. | صدقے کے طور پر رقم دینا۔ |
| Supporting a mosque. | مسجد کی مدد کرنا۔ |
| Helping to clean a mosque. | مسجد کی صفائی میں مدد کرنا۔ |
| Performing voluntary service in the mosque. | مسجد میں رضاکارانہ خدمت کرنا۔ |
| Friday is associated with Venus and is considered a favourable day for giving sadaqah. Recommended acts include giving: | جمعہ زہرہ سے منسوب ہے اور صدقہ دینے کے لیے موافق دن سمجھا جاتا ہے۔ تجویز کردہ اعمال میں یہ دینا شامل ہے: |
| Clothes. | کپڑے۔ |
| Soap. | صابن۔ |
| Perfume. | عطر۔ |
| Saturday is recommended for helping poor and needy people. Recommended sadaqah includes: | ہفتہ غریب اور ضرورت مند لوگوں کی مدد کے لیے تجویز کیا گیا ہے۔ تجویز کردہ صدقے میں یہ شامل ہے: |
| Giving essential food items such as rice, oil, and other necessities. | چاول، تیل اور دیگر ضروریات جیسی بنیادی غذائی اشیا دینا۔ |
| Helping an elderly person with their needs. | کسی بزرگ کی ضروریات میں مدد کرنا۔ |
| Providing financial assistance to someone in difficulty. | مشکل میں مبتلا شخص کی مالی معاونت کرنا۔ |
| Check another date | کوئی اور تاریخ جانچیں |
| The day you plan to give, or your date of birth. | وہ دن جب آپ دینے کا ارادہ رکھتے ہوں، یا آپ کی تاریخِ پیدائش۔ |
| Date of birth or date of giving | تاریخِ پیدائش یا دینے کی تاریخ |
| Enter either your date of birth or the day you plan to give sadaqah — its day of the week determines the guidance. | اپنی تاریخِ پیدائش یا وہ دن درج کریں جب آپ صدقہ دینے کا ارادہ رکھتے ہوں — اس کا ہفتے کا دن رہنمائی طے کرتا ہے۔ |
| What is the "sadaqa of the day"? | «آج کا صدقہ» کیا ہے؟ |
| It is the form of sadaqah (voluntary charity) traditionally linked to each day of the week in a West African (Senegalese / Wolof) teaching. This page shows today's suggestion and the table for all seven days. | یہ صدقے (نفلی خیرات) کی وہ صورت ہے جو مغربی افریقی (سینیگالی / وولوف) تعلیم میں روایتی طور پر ہفتے کے ہر دن سے جوڑی جاتی ہے۔ یہ صفحہ آج کی تجویز اور ساتوں دنوں کا جدول دکھاتا ہے۔ |
| What is the best day to give sadaqah? | صدقہ دینے کا بہترین دن کون سا ہے؟ |
| Sadaqah is good on every day, and many Muslims make a habit of giving on Friday (Jumuʿa). In this tradition Tuesday is linked with healing and protection, and Thursday with opening the way and removing blockages. Never delay giving because it is not the "right" day. | صدقہ ہر دن اچھا ہے، اور بہت سے مسلمان جمعہ کو دینے کی عادت بناتے ہیں۔ اس روایت میں منگل کو شفا اور حفاظت سے، اور جمعرات کو راستہ کھلنے اور رکاوٹیں دور ہونے سے جوڑا گیا ہے۔ کبھی دینے میں اس لیے تاخیر نہ کریں کہ یہ «درست» دن نہیں ہے۔ |
| What sadaqah should I give on Monday? | مجھے پیر کو کون سا صدقہ دینا چاہیے؟ |
| For Monday the tradition recommends: Give water as sadaqah; Help an elderly person, a woman, or children; Give food or sadaqah to children in the evening. | پیر کے لیے روایت یہ تجویز کرتی ہے: صدقے کے طور پر پانی دیں؛ کسی بزرگ، خاتون یا بچوں کی مدد کریں؛ شام کو بچوں کو کھانا یا صدقہ دیں۔ |
| What sadaqah should I give on Friday? | مجھے جمعہ کو کون سا صدقہ دینا چاہیے؟ |
| Friday is associated with Venus; the recommended gifts are: Clothes; Soap; Perfume. | جمعہ زہرہ سے منسوب ہے؛ تجویز کردہ تحائف یہ ہیں: کپڑے؛ صابن؛ عطر۔ |
| Can I use the weekday I was born on? | کیا میں اپنی پیدائش کا ہفتے کا دن استعمال کر سکتا ہوں؟ |
| Yes. The guidance can be read either for the day you plan to give or for the weekday of your birth. Enter a date in the checker above to see which weekday it falls on. | جی ہاں۔ رہنمائی کو یا تو اس دن کے لیے پڑھا جا سکتا ہے جب آپ دینے کا ارادہ رکھتے ہوں یا آپ کی پیدائش کے ہفتے کے دن کے لیے۔ اوپر چیکر میں تاریخ درج کریں تاکہ معلوم ہو وہ ہفتے کے کس دن پڑتی ہے۔ |
| Is this an obligation or a guarantee of results? | کیا یہ فرض ہے یا نتائج کی ضمانت؟ |
| No. These are customary suggestions for reflection. Sadaqah is given sincerely for the sake of Allah, on any day, and promises no particular outcome: Allah alone knows the unseen. | نہیں۔ یہ غور و فکر کے لیے رواجی تجاویز ہیں۔ صدقہ کسی بھی دن اللہ کی رضا کے لیے خلوص سے دیا جاتا ہے اور کسی خاص نتیجے کا وعدہ نہیں کرتا: غیب کا علم صرف اللہ کو ہے۔ |
| Sadaqah by weekday, by Hijri birth month and by burj. | ہفتے کے دن، پیدائشی ہجری مہینے اور برج کے مطابق صدقہ۔ |
| Your burj, blessed day, dhikr and the sadaqah for your burj. | آپ کا برج، مبارک دن، ذکر اور آپ کے برج کا صدقہ۔ |
| Choose an auspicious date for marriage, travel or business. | شادی، سفر یا کاروبار کے لیے مناسب تاریخ چنیں۔ |
| Track your dhikr: Istighfār, Ṣalawāt and Divine Names. | اپنا ذکر ٹریک کریں: استغفار، درود شریف اور اسمائے الٰہی۔ |



### 6.20 ramadan (37)

| English | Urdu |
|---|---|
| Zikr Challenges | ذکر کے چیلنج |
| Tap a challenge ↓ | کوئی چیلنج منتخب کرنے کے لیے ٹیپ کریں ↓ |
| Progress | پیش رفت |
| Best dhikr now: | اس وقت کا بہترین ذکر: |
| Astaghfirullāh | اَسْتَغْفِرُ اللّٰہَ |
| Maghrib / Ifṭār | مغرب / افطار |
| Istighfār | استغفار |
| Ramadan Istighfār | رمضان کا استغفار |
| Today's Target | آج کا ہدف |
| Today's Progress | آج کی پیش رفت |
| Quick Add | فوری اضافہ |
| Log Session | نشست درج کریں |
| Monthly Progress | ماہانہ پیش رفت |
| Remember Me, and I will remember you. | ﴿فَاذْكُرُونِي أَذْكُرْكُمْ﴾ (البقرة 152) |
| Invite Friends to Join | دوستوں کو شامل ہونے کی دعوت دیں |
| Remove | ہٹائیں |
| Add Challenge | چیلنج شامل کریں |
| Share Progress | پیش رفت شیئر کریں |
| Remove challenge | چیلنج ہٹائیں |
| Settings | سیٹنگز |
| 0.0% complete | 0.0٪ مکمل |
| Share via | اس کے ذریعے شیئر کریں |
| Link copied to clipboard | لنک کلپ بورڈ پر کاپی ہو گیا |
| Add a Wird Challenge | ورد کا چیلنج شامل کریں |
| Choose a wird to track your daily devotions | اپنے روزانہ اوراد ٹریک کرنے کے لیے ایک ورد منتخب کریں |
| 201 Holy Names | 201 مقدس نام |
| Special | خصوصی |
| Rizq Abundance · 7-Day Morning Practice | رزق میں برکت · 7 دن کا صبح کا معمول |
| Debt Relief Wird | قرض سے نجات کا ورد |
| 1000× after ʿIshāʾ for debt relief | قرض سے نجات کے لیے عشاء کے بعد 1000 بار |
| Divine Name | اسمِ الٰہی |
| Recite one of the 99 Names of Allah | اللہ کے 99 ناموں میں سے کوئی ایک پڑھیں |
| Custom Wird | اپنا ورد |
| Add your own dhikr or wird | اپنا ذکر یا ورد شامل کریں |
| Remove this challenge? | یہ چیلنج ہٹائیں؟ |
| Your progress will be lost. | آپ کی پیش رفت ضائع ہو جائے گی۔ |
| Cancel | منسوخ کریں |



### 6.21 burj-personality (120)

| English | Urdu |
|---|---|
| Speech becomes extremely harsh and cutting when angry, words like fire | غصے میں کلام نہایت سخت اور کاٹ دار ہو جاتا ہے، الفاظ آگ کی طرح |
| Takes time to provoke, but once angry becomes an unstoppable force of nature | اشتعال میں آنے میں وقت لگتا ہے، مگر ایک بار غصہ آ جائے تو بے قابو قدرتی قوت بن جاتا ہے |
| Deeply loved and respected by outsiders, strangers, and the general public | اجنبی، انجان لوگ اور عام عوام انہیں بہت چاہتے اور عزت دیتے ہیں |
| Struggles with maintaining harmony in close family relationships despite best efforts | بھرپور کوشش کے باوجود قریبی خاندانی رشتوں میں ہم آہنگی برقرار رکھنا مشکل ہوتا ہے |
| Extended family members and non-relatives are naturally drawn to their warmth | وسیع خاندان کے افراد اور غیر رشتہ دار فطری طور پر ان کی گرم جوشی کی طرف کھنچتے ہیں |
| May face misunderstanding from immediate family who don't see their public persona | قریبی گھر والے، جو ان کی عوامی شخصیت نہیں دیکھتے، انہیں غلط سمجھ سکتے ہیں |
| May occasionally see fire in dreams, though not as frequently as other elements see their symbols | کبھی کبھار خواب میں آگ نظر آ سکتی ہے، البتہ اتنی کثرت سے نہیں جتنی دوسرے عناصر کو اپنی علامات نظر آتی ہیں |
| Usually granted remarkably long life and vitality that endures through challenges | روایت میں بیان کیا جاتا ہے کہ انہیں نمایاں طور پر طویل عمر اور ایسی توانائی ملتی ہے جو مشکلات میں بھی قائم رہتی ہے |
| Receives divine protection in matters of livelihood and sustenance | روایت کے مطابق روزی اور معاش کے معاملات میں انہیں الٰہی حفاظت حاصل ہوتی ہے |
| May experience the pain of child mortality or children facing difficulties in marriage | اولاد کے صدمے یا اولاد کو ازدواجی مشکلات پیش آنے کا دکھ جھیلنا پڑ سکتا ہے |
| Speaks with groundedness and wisdom, words carry weight and stability | ٹھہراؤ اور حکمت سے بولتا ہے، الفاظ میں وزن اور استحکام ہوتا ہے |
| Extremely slow to anger, but once provoked their wrath is earthquake-like in its power | غصہ بہت دیر سے آتا ہے، مگر ایک بار بھڑک جائے تو اس کا قہر زلزلے جیسا طاقتور ہوتا ہے |
| Deeply beloved by outsiders and those who witness their patience and strength | اجنبی اور وہ لوگ جو ان کا صبر اور قوت دیکھتے ہیں انہیں بہت چاہتے ہیں |
| Faces difficulties in close family relationships despite their steadfast nature | ثابت قدم فطرت کے باوجود قریبی خاندانی رشتوں میں مشکلات کا سامنا ہوتا ہے |
| Extended family and community members are drawn to their reliability | وسیع خاندان اور برادری کے لوگ ان کی قابلِ بھروسا طبیعت کی طرف کھنچتے ہیں |
| May be taken for granted by those closest to them | جو لوگ سب سے قریب ہوں وہ انہیں معمولی سمجھ سکتے ہیں |
| Rich and vivid dreamlife - frequently sees water, vast deserts, ancient cities, and earthly landscapes | خوابوں کی زندگی بھرپور اور واضح — اکثر پانی، وسیع صحرا، قدیم شہر اور زمینی مناظر نظر آتے ہیں |
| Receives consistent divine assistance in times of need - help always arrives | ضرورت کے وقت مسلسل الٰہی مدد ملتی ہے — مدد ہمیشہ پہنچتی ہے |
| Protected in matters of sustenance and material provision | روزی اور مادی ضروریات کے معاملات میں محفوظ رہتے ہیں |
| Must learn to set boundaries with family while maintaining their generous nature | اپنی فیاض فطرت برقرار رکھتے ہوئے گھر والوں کے ساتھ حدود قائم کرنا سیکھنا ہوگا |
| Sharp and cutting words when upset, speech can wound deeply | ناراضی میں الفاظ تیز اور کاٹ دار ہوتے ہیں، بات گہرا زخم دے سکتی ہے |
| Extremely short fuse - the slightest provocation can trigger intense reaction | فتیلہ بہت چھوٹا — ذرا سی اشتعال انگیزی شدید ردِ عمل پیدا کر سکتی ہے |
| Despite temper, has loyal friends who understand their passionate nature | مزاج کی تیزی کے باوجود ایسے وفادار دوست ہوتے ہیں جو ان کی پُرجوش طبیعت سمجھتے ہیں |
| Generally unpopular due to volatile temperament and quick anger | مزاج کی بے ثباتی اور جلد غصے کی وجہ سے عموماً غیر مقبول ہوتے ہیں |
| Those with patience are drawn to their intellectual brilliance | صبر والے لوگ ان کی ذہنی تیزی کی طرف کھنچتے ہیں |
| Difficult for most people to cope with their intense emotional swings | اکثر لوگوں کے لیے ان کے شدید جذباتی اتار چڑھاؤ کا سامنا کرنا مشکل ہوتا ہے |
| Frequently dreams of flying in the sky or heavens, being lifted or elevated, carried in people's hands, soaring above the earth | اکثر خواب میں آسمان یا فضاؤں میں اڑنا، بلند کیا جانا، لوگوں کے ہاتھوں پر اٹھایا جانا اور زمین کے اوپر بلند ہونا دیکھتے ہیں |
| Receives divine protection despite their challenges with anger | غصے سے متعلق مشکلات کے باوجود الٰہی حفاظت حاصل رہتی ہے |
| Allah grants them opportunities to learn patience and emotional mastery | اللہ انہیں صبر اور جذباتی ضبط سیکھنے کے مواقع عطا فرماتا ہے |
| Must work consciously to control anger and develop patience - this is their life's spiritual test | غصے پر قابو پانے اور صبر پیدا کرنے کے لیے شعوری کوشش کرنی ہوگی — یہی ان کی زندگی کا روحانی امتحان ہے |
| Silent and calm usually, but when angry speaks continuously without stopping | عموماً خاموش اور پُرسکون رہتے ہیں، مگر غصے میں رکے بغیر مسلسل بولتے جاتے ہیں |
| Takes immense provocation to anger, but once upset becomes an unstoppable verbal flood - no one can calm or interrupt them | غصہ دلانے کے لیے بہت زیادہ اشتعال چاہیے، مگر ایک بار ناراض ہو جائیں تو الفاظ کا بے قابو سیلاب بن جاتے ہیں — کوئی انہیں چپ نہیں کرا سکتا |
| Deeply appreciated by those who recognize their strength in patience | جو لوگ صبر میں ان کی قوت پہچانتے ہیں وہ انہیں بہت سراہتے ہیں |
| Often underestimated or taken advantage of due to their gentle nature | نرم مزاجی کی وجہ سے اکثر انہیں کم سمجھا جاتا ہے یا ان سے ناجائز فائدہ اٹھایا جاتا ہے |
| People in crisis naturally seek them out for their calming presence | بحران میں گھرے لوگ ان کی تسکین بخش موجودگی کی وجہ سے فطری طور پر ان کے پاس آتے ہیں |
| Some mistake their patience for weakness or lack of intelligence | بعض لوگ ان کے صبر کو کمزوری یا کم عقلی سمجھ لیتے ہیں |
| Water appears very frequently - being in water, near water, flowing water, oceans, rivers. Most with this buruj regularly see water in their dreams. | پانی بہت کثرت سے نظر آتا ہے — پانی میں ہونا، پانی کے قریب ہونا، بہتا پانی، سمندر، دریا۔ اس برج والوں کو اکثر خواب میں پانی نظر آتا ہے۔ |
| Granted deep emotional wisdom and intuitive understanding of others | روایت میں گہری جذباتی حکمت اور دوسروں کی وجدانی سمجھ عطا ہونا بیان کیا جاتا ہے |
| Protected from those who would exploit their kindness | ایسے لوگوں سے محفوظ رہتے ہیں جو ان کی مہربانی کا ناجائز فائدہ اٹھانا چاہیں |
| Must learn when to set boundaries without losing their compassionate nature | یہ سیکھنا ہوگا کہ اپنی ہمدرد فطرت کھوئے بغیر حدود کب قائم کی جائیں |
| Speaks with warmth and conviction, inspiring others with fiery words | گرم جوشی اور یقین سے بولتا ہے، آگ جیسے الفاظ سے دوسروں کو متاثر کرتا ہے |
| Slow to anger but fierce when provoked, burns bright but can cool with reason | غصہ دیر سے آتا ہے مگر چھیڑنے پر شدید ہوتا ہے؛ تیز جلتا ہے لیکن دلیل سے ٹھنڈا ہو سکتا ہے |
| Admired for leadership qualities and courageous nature | قیادت کی صلاحیتوں اور دلیر فطرت کی وجہ سے قابلِ تحسین |
| May overwhelm others with intensity and high expectations | اپنی شدت اور بلند توقعات سے دوسروں پر بھاری پڑ سکتا ہے |
| Natural magnetism draws people seeking guidance and inspiration | فطری کشش رہنمائی اور تحریک چاہنے والوں کو اپنی طرف کھینچتی ہے |
| Some find their directness too confrontational | بعض لوگوں کو ان کی صاف گوئی ضرورت سے زیادہ ٹکراؤ والی لگتی ہے |
| Fire, light, sun, and illumination appear in dreams symbolizing clarity | خواب میں آگ، روشنی، سورج اور نور نظر آتے ہیں جو وضاحت کی علامت ہیں |
| Granted natural leadership abilities and protective instincts | روایت میں فطری قیادت کی صلاحیت اور حفاظتی جبلت عطا ہونا بیان کیا جاتا ہے |
| Protected in new ventures and bold initiatives | نئے کاموں اور جرأت مندانہ اقدامات میں محفوظ رہتے ہیں |
| Must balance assertiveness with patience and understanding | جرأت اور صبر و فہم کے درمیان توازن رکھنا ہوگا |
| Speaks with careful consideration, words carry weight and permanence | سوچ سمجھ کر بولتا ہے، الفاظ میں وزن اور پائیداری ہوتی ہے |
| Slow to provoke but immovable when angered, like a mountain | غصہ دیر سے آتا ہے مگر ایک بار آ جائے تو پہاڑ کی طرح اٹل ہوتا ہے |
| Trusted by all for consistency and dependability | مستقل مزاجی اور بھروسے کی وجہ سے سب کا اعتماد حاصل ہوتا ہے |
| May be seen as rigid or resistant to change | سخت یا تبدیلی کے مخالف سمجھے جا سکتے ہیں |
| People seeking stability naturally gravitate toward them | استحکام چاہنے والے فطری طور پر ان کی طرف کھنچتے ہیں |
| Some find their cautiousness frustrating | بعض لوگوں کو ان کی احتیاط پسندی کھلتی ہے |
| Earth, mountains, buildings, structures appear symbolizing foundation | زمین، پہاڑ، عمارتیں اور ڈھانچے نظر آتے ہیں جو بنیاد کی علامت ہیں |
| Granted unshakeable faith and material security | روایت میں غیر متزلزل ایمان اور مادی تحفظ عطا ہونا بیان کیا جاتا ہے |
| Protected in matters of property and long-term investments | جائیداد اور طویل مدتی سرمایہ کاری کے معاملات میں محفوظ رہتے ہیں |
| Must learn flexibility while maintaining core stability | بنیادی استحکام برقرار رکھتے ہوئے لچک سیکھنی ہوگی |
| Articulate and persuasive, natural communicator and teacher | فصیح اور قائل کرنے والا، فطری مبلغ اور استاد |
| Quick to flare up but also quick to cool down, like passing winds | جلد بھڑکتا ہے مگر جلد ٹھنڈا بھی ہو جاتا ہے، گزرتی ہواؤں کی طرح |
| Admired for wit, intelligence, and social charm | ذہانت، حاضر جوابی اور سماجی دلکشی کی وجہ سے قابلِ تحسین |
| May be perceived as superficial or inconsistent | سطحی یا غیر مستقل سمجھا جا سکتا ہے |
| Natural networker who connects diverse groups | فطری طور پر مختلف گروہوں کو جوڑنے والا |
| Some find their restlessness and changeability unsettling | بعض لوگوں کو ان کی بے چینی اور بدلتا مزاج پریشان کن لگتا ہے |
| Flying, heights, sky, being carried upward, intellectual pursuits in dreams | خوابوں میں اڑنا، بلندیاں، آسمان، اوپر اٹھایا جانا اور فکری جستجو |
| Granted exceptional communication abilities and adaptability | روایت میں غیر معمولی ابلاغی صلاحیت اور موافقت عطا ہونا بیان کیا جاتا ہے |
| Protected in intellectual and social endeavors | فکری اور سماجی کاموں میں محفوظ رہتے ہیں |
| Must develop depth and follow-through alongside versatility | ہمہ جہتی کے ساتھ گہرائی اور تکمیلِ کار بھی پیدا کرنی ہوگی |
| Speaks with penetrating insight and emotional depth | گہری بصیرت اور جذباتی گہرائی کے ساتھ بولتا ہے |
| Slow to show anger externally but feels deeply, when released it's a tidal wave | غصہ ظاہر کرنے میں دیر لگاتا ہے مگر اندر سے شدت سے محسوس کرتا ہے؛ جب پھوٹتا ہے تو طوفانی لہر بن جاتا ہے |
| Respected for loyalty, depth, and transformative presence | وفاداری، گہرائی اور تبدیلی لانے والی موجودگی کی وجہ سے قابلِ احترام |
| Intensity can overwhelm those who prefer superficial connections | اس کی شدت ان لوگوں پر بھاری پڑ سکتی ہے جو سطحی تعلق پسند کرتے ہیں |
| People in crisis instinctively seek their depth and understanding | بحران میں گھرے لوگ بے ساختہ ان کی گہرائی اور فہم تلاش کرتے ہیں |
| Some fear their ability to see through facades | بعض لوگ ان کی ظاہری پردوں کے آر پار دیکھنے کی صلاحیت سے ڈرتے ہیں |
| Deep water, oceans, transformation, death and rebirth symbolism, mysteries | گہرا پانی، سمندر، تبدیلی، موت و حیات کی علامتیں اور اسرار |
| Granted profound insight into hidden truths and healing abilities | روایت میں پوشیدہ حقائق کی گہری بصیرت اور شفا کی صلاحیتیں عطا ہونا بیان کیا جاتا ہے |
| Protected through life's deepest transformations | زندگی کی گہری ترین تبدیلیوں کے دوران محفوظ رہتے ہیں |
| Must learn to trust and let go of control | بھروسا کرنا اور قابو چھوڑنا سیکھنا ہوگا |
| Speaks with enthusiasm and philosophical depth | جوش اور فلسفیانہ گہرائی کے ساتھ بولتا ہے |
| Slow to anger, but when provoked speaks with blazing directness | غصہ دیر سے آتا ہے، مگر چھیڑنے پر بے لاگ صاف گوئی سے بولتا ہے |
| Beloved for generosity and uplifting spirit | سخاوت اور حوصلہ بڑھانے والی طبیعت کی وجہ سے محبوب |
| May promise more than can be delivered | ممکن ہے جتنا نبھا سکے اس سے زیادہ وعدہ کر لے |
| People seek their wisdom and optimistic perspective | لوگ ان کی حکمت اور پُرامید نقطۂ نظر کی طلب رکھتے ہیں |
| Some find their bluntness too harsh | بعض لوگوں کو ان کی بے باکی ضرورت سے زیادہ سخت لگتی ہے |
| Fire, travel, distant places, learning, spiritual journeys | آگ، سفر، دور دراز مقامات، علم اور روحانی سفر |
| Granted wisdom and opportunities for expansion | روایت میں حکمت اور وسعت کے مواقع عطا ہونا بیان کیا جاتا ہے |
| Protected in travel and seeking knowledge | سفر اور علم کی طلب میں محفوظ رہتے ہیں |
| Must develop discipline alongside freedom-seeking nature | آزادی پسند فطرت کے ساتھ نظم و ضبط بھی پیدا کرنا ہوگا |
| Speaks with authority and measured wisdom | اختیار اور ناپی تلی حکمت کے ساتھ بولتا ہے |
| Very slow to anger, but when provoked is immovable like a mountain | غصہ بہت دیر سے آتا ہے، مگر چھیڑنے پر پہاڑ کی طرح اٹل ہوتا ہے |
| Respected for reliability and achievement | بھروسے اور کامیابیوں کی وجہ سے قابلِ احترام |
| May seem cold or overly serious | سرد مہر یا ضرورت سے زیادہ سنجیدہ لگ سکتا ہے |
| People seeking stability and guidance are drawn to them | استحکام اور رہنمائی چاہنے والے ان کی طرف کھنچتے ہیں |
| Some find their seriousness intimidating | بعض لوگوں کو ان کی سنجیدگی مرعوب کن لگتی ہے |
| Mountains, structures, achievements, climbing upward | پہاڑ، ڈھانچے، کامیابیاں اور اوپر چڑھنا |
| Granted patience and ultimate success through perseverance | روایت میں صبر اور استقامت کے ذریعے اعلیٰ کامیابی عطا ہونا بیان کیا جاتا ہے |
| Protected in long-term endeavors and career | طویل مدتی کاموں اور پیشے میں محفوظ رہتے ہیں |
| Must learn to balance ambition with compassion | بلند حوصلگی اور ہمدردی کے درمیان توازن سیکھنا ہوگا |
| Speaks with vision for the future and community welfare | مستقبل کے وژن اور برادری کی فلاح کے ساتھ بولتا ہے |
| Detached when angry, may become aloof or distant | غصے میں الگ تھلگ ہو جاتا ہے، لاتعلق یا دور ہو سکتا ہے |
| Admired for progressive thinking and humanitarian efforts | ترقی پسند سوچ اور انسان دوست کوششوں کی وجہ سے قابلِ تحسین |
| May seem emotionally distant or too idealistic | جذباتی طور پر دور یا ضرورت سے زیادہ مثالیت پسند لگ سکتا ہے |
| People seeking change and innovation are drawn to them | تبدیلی اور جدت چاہنے والے ان کی طرف کھنچتے ہیں |
| Some find their unconventional ideas threatening | بعض لوگوں کو ان کے غیر روایتی خیالات خطرناک لگتے ہیں |
| Flying, future visions, communities, gatherings, innovative solutions | اڑنا، مستقبل کے تصورات، برادریاں، اجتماعات اور جدید حل |
| Granted vision for collective benefit and innovation | روایت میں اجتماعی فائدے اور جدت کا وژن عطا ہونا بیان کیا جاتا ہے |
| Protected in community service and humanitarian work | برادری کی خدمت اور انسان دوست کام میں محفوظ رہتے ہیں |
| Must balance idealism with practical implementation | مثالیت پسندی اور عملی نفاذ کے درمیان توازن رکھنا ہوگا |
| Speaks with empathy and spiritual understanding | ہمدردی اور روحانی فہم کے ساتھ بولتا ہے |
| Absorbs anger internally, may become withdrawn or melancholic | غصہ اندر ہی اندر جذب کر لیتا ہے، گوشہ نشین یا اداس ہو سکتا ہے |
| Cherished for compassion and selfless service | ہمدردی اور بے لوث خدمت کی وجہ سے عزیز |
| May be taken advantage of due to giving nature | دینے والی فطرت کی وجہ سے ان سے ناجائز فائدہ اٹھایا جا سکتا ہے |
| People in need naturally seek their healing presence | ضرورت مند لوگ فطری طور پر ان کی شفا بخش موجودگی کی طلب کرتے ہیں |
| Some exploit their inability to say no | بعض لوگ ان کے «نہ» نہ کہہ سکنے کا فائدہ اٹھاتے ہیں |
| Water, oceans, spiritual visions, mystical experiences, helping others | پانی، سمندر، روحانی رؤیا، صوفیانہ تجربات اور دوسروں کی مدد |
| Granted deep spiritual connection and healing abilities | روایت میں گہرا روحانی تعلق اور شفا کی صلاحیتیں عطا ہونا بیان کیا جاتا ہے |
| Protected through service to others | دوسروں کی خدمت کے ذریعے محفوظ رہتے ہیں |
| Must learn healthy boundaries without losing compassion | ہمدردی کھوئے بغیر صحت مند حدود قائم کرنا سیکھنا ہوگا |



### 6.22 burj-blessed-day (136)

| English | Urdu |
|---|---|
| Starting new business ventures and projects | نئے کاروباری منصوبے اور کام شروع کرنا |
| Important meetings with potential partners | ممکنہ شراکت داروں کے ساتھ اہم ملاقاتیں |
| Making critical life decisions | زندگی کے اہم فیصلے کرنا |
| Beginning travel for business or pleasure | کاروبار یا تفریح کے لیے سفر کا آغاز |
| Signing important contracts | اہم معاہدوں پر دستخط |
| Launching new initiatives | نئے اقدامات کا آغاز |
| Confronting challenges head-on | چیلنجوں کا سامنا ڈٹ کر کرنا |
| Mars energy peaks on this day, amplifying your natural fire | اس دن مریخ کی توانائی عروج پر سمجھی جاتی ہے، جو آپ کی فطری آتشی کیفیت کو بڑھاتی ہے |
| Your charisma and persuasive power are at their strongest | آپ کی کشش اور قائل کرنے کی صلاحیت اپنی بلند ترین سطح پر ہوتی ہے |
| Divine support flows most freely on Tuesdays | روایت میں سمجھا جاتا ہے کہ منگل کو الٰہی مدد سب سے زیادہ کشادگی سے ملتی ہے |
| Making important financial decisions and investments | اہم مالی فیصلے اور سرمایہ کاری کرنا |
| Signing property or land contracts | جائیداد یا زمین کے معاہدوں پر دستخط |
| Starting agricultural or earth-based projects | زرعی یا زمین پر مبنی منصوبے شروع کرنا |
| Major purchases of tangible assets | ٹھوس اثاثوں کی بڑی خریداری |
| Family gatherings and reconciliation | خاندانی اجتماعات اور صلح |
| Seeking forgiveness and spiritual renewal | معافی کی طلب اور روحانی تجدید |
| Community service and charitable works | برادری کی خدمت اور فلاحی کام |
| Friday is the most blessed day in Islam - Jumu'ah | جمعہ اسلام میں سب سے بابرکت دن ہے — یومُ الجمعہ |
| Venus energy enhances beauty, harmony, and material blessings | روایتی طور پر زہرہ سے حسن، ہم آہنگی اور مادی برکتوں کو منسوب کیا جاتا ہے |
| Your natural stability is amplified on this holy day | اس مقدس دن آپ کا فطری استحکام اور بڑھ جاتا ہے |
| Perfect for long-term planning and commitments | طویل مدتی منصوبہ بندی اور وعدوں کے لیے بہترین |
| Communication and important conversations | گفتگو اور اہم بات چیت |
| Signing contracts and agreements | معاہدوں اور سمجھوتوں پر دستخط |
| Starting new business ventures | نئے کاروباری منصوبے شروع کرنا |
| Intellectual pursuits and learning | فکری جستجو اور سیکھنا |
| Social networking and making connections | سماجی روابط اور تعلقات بنانا |
| Writing and creative expression | تحریر اور تخلیقی اظہار |
| Resolving conflicts peacefully | تنازعات کو پُرامن طریقے سے حل کرنا |
| Mercury energy peaks - enhances communication and intellect | روایت میں عطارد کی توانائی عروج پر سمجھی جاتی ہے — ابلاغ اور ذہانت کو بڑھاتی ہے |
| Associated with Prophet Musa (Moses) ع - the great communicator | حضرت موسیٰ علیہ السلام سے منسوب — عظیم بات کرنے والے |
| Your mental clarity is sharpest on this day | اس دن آپ کی ذہنی وضاحت سب سے تیز ہوتی ہے |
| Ideal for learning anger management and patience practices | غصے پر قابو اور صبر کے معمولات سیکھنے کے لیے موزوں |
| Prophet Musa (Moses) | حضرت موسیٰ علیہ السلام |
| Emotional healing and therapy | جذباتی شفا اور تھراپی |
| Making decisions from the heart | دل کی آواز سے فیصلے کرنا |
| Starting creative projects | تخلیقی منصوبے شروع کرنا |
| Water-related ventures | پانی سے متعلق کام |
| Spiritual practices and meditation | روحانی معمولات اور مراقبہ |
| Family matters and reconciliation | گھریلو معاملات اور صلح |
| Intuitive and psychic work | وجدانی اور باطنی کام |
| Moon energy peaks - enhances emotions and intuition | روایت میں قمر کی توانائی عروج پر سمجھی جاتی ہے — جذبات اور وجدان کو بڑھاتی ہے |
| Your natural empathy is strongest on this day | اس دن آپ کی فطری ہمدردی سب سے مضبوط ہوتی ہے |
| Perfect for cleansing rituals and renewal | تطہیری اعمال اور تجدید کے لیے بہترین |
| Water has maximum spiritual power on Mondays | روایت میں سمجھا جاتا ہے کہ پیر کو پانی میں سب سے زیادہ روحانی اثر ہوتا ہے |
| Beginning travel - especially auspicious for journey starts | سفر کا آغاز — خاص طور پر سفر شروع کرنے کے لیے موزوں |
| Starting construction of a new house or building | نئے گھر یا عمارت کی تعمیر شروع کرنا |
| Launching major life projects | زندگی کے بڑے منصوبے شروع کرنا |
| Important new beginnings | اہم نئے آغاز |
| Leadership initiatives | قیادت پر مبنی اقدامات |
| Making bold decisions | جرأت مندانہ فیصلے کرنا |
| Solar-aligned spiritual practices | شمس سے ہم آہنگ روحانی معمولات |
| Sunday is the day of the Sun - your natural power source | اتوار شمس کا دن ہے — آپ کی فطری قوت کا منبع |
| Best day in the week to begin any significant journey | کسی بھی اہم سفر کے آغاز کے لیے ہفتے کا بہترین دن |
| Most auspicious day to lay the first brick of a new home | نئے گھر کی پہلی اینٹ رکھنے کے لیے سب سے موزوں دن |
| Solar energy amplifies your natural fire element | شمسی توانائی آپ کے فطری آتشی عنصر کو بڑھاتی ہے |
| Perfect for initiating projects that require sustained energy | ایسے منصوبے شروع کرنے کے لیے بہترین جن میں مسلسل توانائی درکار ہو |
| Long-term planning and strategy | طویل مدتی منصوبہ بندی اور حکمتِ عملی |
| Property transactions and investments | جائیداد کے لین دین اور سرمایہ کاری |
| Building foundations (literal and metaphorical) | بنیادیں رکھنا (لفظی بھی اور تمثیلی بھی) |
| Serious commitments and contracts | سنجیدہ وعدے اور معاہدے |
| Spiritual grounding practices | روحانی استحکام کے معمولات |
| Ancestral work and family matters | آباؤ اجداد سے متعلق کام اور خاندانی معاملات |
| Discipline and structure implementation | نظم و ضبط اور ڈھانچوں کا نفاذ |
| Performing your lifetime sadaqah | اپنا عمر بھر کا صدقہ ادا کرنا |
| Wednesday (Mercury day) enhances earth element communication | بدھ (عطارد کا دن) مٹی کے عنصر کی گفتگو کو بہتر بناتا ہے |
| Your natural stability is most pronounced | آپ کا فطری استحکام سب سے نمایاں ہوتا ہے |
| Ideal for establishing lasting foundations | پائیدار بنیادیں قائم کرنے کے لیے موزوں |
| Perfect day for your lifetime sadaqah sacrifice | آپ کے عمر بھر کے صدقے اور قربانی کے لیے بہترین دن |
| Important communications and presentations | اہم گفتگو اور پیشکشیں |
| Social gatherings and networking | سماجی اجتماعات اور روابط |
| Teaching and sharing knowledge | علم سکھانا اور بانٹنا |
| Starting educational ventures | تعلیمی منصوبے شروع کرنا |
| Building community connections | برادری کے تعلقات بنانا |
| Friday prayers and spiritual community | جمعہ کی نماز اور روحانی برادری |
| Venus and Jumu'ah energies combine for powerful social blessings | روایتی طور پر زہرہ اور جمعہ کی نسبتیں مل کر سماجی برکتوں کا ذریعہ سمجھی جاتی ہیں |
| Your communication abilities peak on this holy day | اس مقدس دن آپ کی گفتگو کی صلاحیت عروج پر ہوتی ہے |
| Perfect for building bridges between people and ideas | لوگوں اور خیالات کے درمیان پل بنانے کے لیے بہترین |
| Divine support flows through community connections | روایت میں سمجھا جاتا ہے کہ برادری کے روابط کے ذریعے الٰہی مدد ملتی ہے |
| Deep transformational work | گہرا تبدیلی کا کام |
| Investigating hidden matters | پوشیدہ معاملات کی چھان بین |
| Ending cycles and releasing the past | دوروں کو ختم کرنا اور ماضی کو چھوڑنا |
| Powerful healing sessions | مؤثر شفا کے سیشن |
| Confronting difficult truths | مشکل سچائیوں کا سامنا کرنا |
| Strategic power moves | حکمتِ عملی کے اقدامات |
| Intense spiritual practices | شدید روحانی معمولات |
| Mars energy intensifies your natural Scorpio power | روایتی طور پر مریخ کی توانائی آپ کی فطری عقربی قوت کو بڑھاتی ہے |
| Perfect day for endings that lead to new beginnings | ایسے اختتام کے لیے بہترین دن جو نئے آغاز کی طرف لے جائیں |
| Your transformative abilities peak on this day | اس دن آپ کی تبدیلی لانے کی صلاحیت عروج پر ہوتی ہے |
| Courage and insight combine powerfully on Tuesdays | روایت میں سمجھا جاتا ہے کہ منگل کو ہمت اور بصیرت بھرپور طور پر مل جاتی ہیں |
| Seeking knowledge and education | علم اور تعلیم کی طلب |
| Beginning journeys and travels | سفر اور مسافتوں کا آغاز |
| Teaching and sharing wisdom | حکمت سکھانا اور بانٹنا |
| Signing educational contracts | تعلیمی معاہدوں پر دستخط |
| Starting publishing projects | اشاعتی منصوبے شروع کرنا |
| International business dealings | بین الاقوامی کاروباری معاملات |
| Spiritual study and reflection | روحانی مطالعہ اور غور و فکر |
| Jupiter energy peaks - brings expansion and blessings | روایت میں مشتری کی توانائی عروج پر سمجھی جاتی ہے — وسعت اور برکتیں لاتی ہے |
| Best day for learning and teaching | سیکھنے اور سکھانے کا بہترین دن |
| Your wisdom and generosity are amplified | آپ کی حکمت اور سخاوت بڑھ جاتی ہے |
| Perfect for beginning long-term educational pursuits | طویل مدتی تعلیمی کاموں کے آغاز کے لیے بہترین |
| Career planning and advancement | پیشہ ورانہ منصوبہ بندی اور ترقی |
| Important business decisions | اہم کاروباری فیصلے |
| Long-term commitments | طویل مدتی وعدے |
| Authority matters | اختیار سے متعلق معاملات |
| Property and investment decisions | جائیداد اور سرمایہ کاری کے فیصلے |
| Setting serious intentions | سنجیدہ نیتیں کرنا |
| Saturday is THE BEST day for this buruj | ہفتہ اس برج کے لیے بہترین دن سمجھا جاتا ہے |
| Saturn energy peaks - most powerful for serious undertakings | روایت میں زحل کی توانائی عروج پر سمجھی جاتی ہے — سنجیدہ کاموں کے لیے سب سے مؤثر |
| Your natural discipline and authority are strongest | آپ کا فطری نظم و ضبط اور اختیار سب سے مضبوط ہوتے ہیں |
| Ideal for establishing lasting structures | پائیدار ڈھانچے قائم کرنے کے لیے موزوں |
| Perfect for patient, long-term planning | صبر آزما طویل مدتی منصوبہ بندی کے لیے بہترین |
| Most auspicious day for your lifetime sadaqah | آپ کے عمر بھر کے صدقے کے لیے سب سے موزوں دن |
| Community projects and gatherings | برادری کے منصوبے اور اجتماعات |
| Innovation and new ideas | جدت اور نئے خیالات |
| Humanitarian initiatives | انسان دوست اقدامات |
| Group activities and collaboration | گروہی سرگرمیاں اور تعاون |
| Technology launches | ٹیکنالوجی کا اجرا |
| Social reform efforts | سماجی اصلاح کی کوششیں |
| Future planning | مستقبل کی منصوبہ بندی |
| Solar energy combined with air brings illuminating innovation | شمسی توانائی ہوا کے ساتھ مل کر روشن جدت لاتی ہے |
| Your humanitarian vision is clearest | آپ کا انسان دوست وژن سب سے واضح ہوتا ہے |
| Perfect for launching community initiatives | برادری کے اقدامات شروع کرنے کے لیے بہترین |
| Divine support flows through collective efforts | روایت میں سمجھا جاتا ہے کہ اجتماعی کوششوں کے ذریعے الٰہی مدد ملتی ہے |
| Healing and spiritual work | شفا اور روحانی کام |
| Charitable activities and giving | خیراتی سرگرمیاں اور دینا |
| Meditation and prayer | مراقبہ اور دعا |
| Helping those in need | ضرورت مندوں کی مدد کرنا |
| Creative and artistic pursuits | تخلیقی اور فنی مشاغل |
| Spiritual teaching and guidance | روحانی تعلیم اور رہنمائی |
| Acts of compassion and mercy | ہمدردی اور رحم کے کام |
| Thursday is THE BEST and most blessed day for this buruj | جمعرات اس برج کے لیے بہترین اور سب سے بابرکت دن سمجھی جاتی ہے |
| Jupiter energy brings expansion of compassion and divine blessings | روایتی طور پر مشتری کی نسبت ہمدردی اور الٰہی برکتوں کی وسعت سے جوڑی جاتی ہے |
| Your healing abilities and spiritual connection are strongest | آپ کی شفا کی صلاحیتیں اور روحانی تعلق سب سے مضبوط ہوتے ہیں |
| Perfect for spiritual retreats and deep prayer | روحانی خلوت اور گہری دعا کے لیے بہترین |
| Divine mercy and barakah flow most freely on Thursdays | روایت میں سمجھا جاتا ہے کہ جمعرات کو الٰہی رحمت اور برکت سب سے زیادہ کشادگی سے ملتی ہے |
| Most powerful day for your lifetime sadaqah | آپ کے عمر بھر کے صدقے کے لیے سب سے طاقتور دن |



### 6.23 burj-sadaqah (270)

| English | Urdu |
|---|---|
| Every 1-2 months consistently | ہر 1 تا 2 ماہ میں تسلسل کے ساتھ |
| Whether in ease or difficulty, prosperity or hardship - consistency is key | آسانی ہو یا مشکل، خوشحالی ہو یا تنگی — تسلسل ہی کلید ہے |
| To balance your fiery ṭabʿ, maintain spiritual equilibrium, cool excessive heat, and attract divine blessings | اپنے آتشی طبع کو متوازن رکھنے، روحانی توازن برقرار رکھنے، حد سے زیادہ گرمی کو ٹھنڈا کرنے اور الٰہی برکتیں پانے کے لیے |
| Share beef meals with families in need | ضرورت مند خاندانوں کے ساتھ گائے کے گوشت کا کھانا بانٹیں |
| Donate to food banks specializing in protein | پروٹین پر توجہ دینے والے فوڈ بینکوں کو عطیہ دیں |
| Feed the hungry at soup kitchens | لنگر خانوں میں بھوکوں کو کھانا کھلائیں |
| Support organizations providing meals | کھانا فراہم کرنے والی تنظیموں کی مدد کریں |
| Host community dinners with meat dishes | گوشت کے پکوانوں کے ساتھ برادری کے کھانے کا اہتمام کریں |
| Sponsor meals at mosques or community centers | مساجد یا کمیونٹی سینٹروں میں کھانے کا اہتمام کریں |
| One lamb without horns (dakaru gaar in Wolof) - a sacred once-in-lifetime offering | بغیر سینگ کا ایک مینڈھا (وولوف میں dakaru gaar) — زندگی میں ایک بار کی مقدس نذر |
| One complete lamb without horns (symbolizing purity and submission) | بغیر سینگ کا ایک مکمل مینڈھا (پاکیزگی اور سپردگی کی علامت) |
| Must be healthy and without defects | صحت مند اور بے عیب ہونا ضروری ہے |
| Meat distributed among believers and the poor | گوشت اہلِ ایمان اور غریبوں میں تقسیم کیا جائے |
| Performed with sincere intention (niyyah) | خلوصِ نیت (نیت) کے ساتھ کیا جائے |
| Done during a spiritually auspicious time | کسی روحانی طور پر موافق وقت میں کیا جائے |
| Perform on your blessed day (Tuesday) for maximum spiritual benefit | زیادہ سے زیادہ روحانی فائدے کے لیے اپنے مبارک دن (منگل) کو کریں |
| Islamic occasions like Eid al-Adha amplify the blessing | عیدالاضحیٰ جیسے اسلامی مواقع برکت کو بڑھا دیتے ہیں |
| During times of gratitude or after major life milestones | شکرگزاری کے اوقات میں یا زندگی کے بڑے سنگِ میل کے بعد |
| When seeking divine intervention for important matters | جب اہم معاملات میں اللہ کی مدد طلب کی جائے |
| After completing a significant spiritual journey | کسی اہم روحانی سفر کی تکمیل کے بعد |
| A major spiritual milestone that removes obstacles from your path, strengthens your connection with the Divine, balances your fiery nature, and opens doors of sustenance. This sacred act creates lasting spiritual protection for you and your lineage. | ایک بڑا روحانی سنگِ میل، جسے روایت میں راہ کی رکاوٹیں دور کرنے، اللہ سے تعلق مضبوط کرنے، آپ کے آتشی مزاج کو متوازن کرنے اور رزق کے دروازے کھولنے کا ذریعہ سمجھا جاتا ہے۔ اس مقدس عمل کو آپ اور آپ کی نسل کے لیے دیرپا روحانی حفاظت کا سبب مانا جاتا ہے۔ |
| Every 1-2 months without fail | ہر 1 تا 2 ماہ میں بلا ناغہ |
| In all circumstances - prosperity or hardship - to maintain spiritual balance | ہر حال میں — خوشحالی ہو یا تنگی — روحانی توازن برقرار رکھنے کے لیے |
| To balance your earthy nature, maintain spiritual grounding, ensure continued divine provision, and avoid stagnation. CRITICAL: Never give fish - this disrupts your elemental balance severely. | اپنے زمینی مزاج کو متوازن رکھنے، روحانی استحکام برقرار رکھنے، الٰہی رزق کے تسلسل اور جمود سے بچنے کے لیے۔ نہایت اہم: کبھی مچھلی نہ دیں — روایت میں یہ آپ کے عناصر کے توازن کو شدید بگاڑتی سمجھی جاتی ہے۔ |
| Donate rice, wheat, or grain to food banks | فوڈ بینکوں کو چاول، گندم یا اناج عطیہ کریں |
| Provide bread and baked goods to the needy | ضرورت مندوں کو روٹی اور بیکری کی اشیا دیں |
| Support agricultural cooperatives helping farmers | کسانوں کی مدد کرنے والی زرعی تعاونی انجمنوں کی معاونت کریں |
| Sponsor school lunch programs | اسکولوں کے دوپہر کے کھانے کے پروگراموں کی کفالت کریں |
| Donate to organizations feeding the hungry (ensure NO fish products) | بھوکوں کو کھانا کھلانے والی تنظیموں کو عطیہ دیں (مچھلی کی کوئی چیز نہ ہو) |
| Provide dry goods and non-perishable earth-based foods | خشک سامان اور دیر تک محفوظ رہنے والی مٹی سے حاصل ہونے والی غذائیں دیں |
| One cow (complete) - meat distributed among believers and the poor | ایک گائے (مکمل) — گوشت اہلِ ایمان اور غریبوں میں تقسیم کیا جائے |
| One complete healthy cow without defects | ایک مکمل، صحت مند اور بے عیب گائے |
| The cow must be of appropriate age (mature) | گائے مناسب عمر (بالغ) کی ہونی چاہیے |
| Meat should be distributed widely among community | گوشت برادری میں وسیع پیمانے پر تقسیم کیا جائے |
| Prioritize feeding the poor and needy first | پہلے غریبوں اور ضرورت مندوں کو کھلانے کو ترجیح دیں |
| Keep minimal portion for yourself (tradition recommends 1/3 distribution) | اپنے لیے کم سے کم حصہ رکھیں (روایت میں 1/3 تقسیم کی سفارش ہے) |
| Perform with sincere intention to please Allah | اللہ کی رضا کی خالص نیت سے کریں |
| Perform on Friday (your blessed day) after Jumu'ah prayer | اپنے مبارک دن جمعہ کو نمازِ جمعہ کے بعد کریں |
| Eid al-Adha is the most blessed time | عیدالاضحیٰ سب سے بابرکت وقت ہے |
| During Dhul-Hijjah (sacred month) | ذوالحجہ (حرمت والے مہینے) کے دوران |
| Times of major life transitions or gratitude | زندگی کی بڑی تبدیلیوں یا شکرگزاری کے اوقات |
| When seeking divine openings in sustenance | جب رزق میں کشادگی کی دعا ہو |
| A profound spiritual milestone that removes major obstacles, opens doors of sustenance from unexpected sources, strengthens family bonds, and establishes lasting barakah (blessing) in your lineage. The earth element connects you deeply to provision. | ایک گہرا روحانی سنگِ میل، جسے روایت میں بڑی رکاوٹیں دور کرنے، غیر متوقع ذرائع سے رزق کے دروازے کھولنے، خاندانی رشتے مضبوط کرنے اور آپ کی نسل میں دیرپا برکت قائم کرنے کا ذریعہ سمجھا جاتا ہے۔ مٹی کا عنصر آپ کو رزق سے گہرا جوڑتا ہے۔ |
| In all circumstances - this practice cools the fiery anger and brings spiritual balance | ہر حال میں — یہ عمل غصے کی آگ کو ٹھنڈا کرتا اور روحانی توازن لاتا سمجھا جاتا ہے |
| To purify the temperament, balance volatile emotions, cool anger, attract patience, and maintain spiritual equilibrium. The act of giving clothes symbolizes shedding negative traits. | مزاج کو پاک کرنے، بھڑکنے والے جذبات کو متوازن کرنے، غصہ ٹھنڈا کرنے، صبر پیدا کرنے اور روحانی توازن برقرار رکھنے کے لیے۔ کپڑے دینا منفی صفات اتار پھینکنے کی علامت ہے۔ |
| Donate gently used clothing to shelters | پناہ گاہوں کو ہلکے استعمال شدہ کپڑے عطیہ کریں |
| Give clothes to charitable organizations | فلاحی تنظیموں کو کپڑے دیں |
| Provide clothing to refugees and displaced persons | مہاجرین اور بے گھر افراد کو لباس فراہم کریں |
| Support clothing drives for the needy | ضرورت مندوں کے لیے کپڑوں کی مہمات کی مدد کریں |
| Donate to organizations like Goodwill or Salvation Army | گڈول یا سالویشن آرمی جیسی تنظیموں کو عطیہ دیں |
| Sponsor clothing for children in need | ضرورت مند بچوں کے لیے لباس کی کفالت کریں |
| One complete outfit: shirt + trousers (or full African dress with trousers) + 1000 cowries OR 1000 of any currency | ایک مکمل جوڑا: قمیص + پتلون (یا پتلون کے ساتھ مکمل افریقی لباس) + 1000 کوڑیاں یا کسی بھی کرنسی کے 1000 |
| Shirt and trouser OR full African traditional attire (kaftan with trouser) | قمیص اور پتلون یا مکمل افریقی روایتی لباس (پتلون کے ساتھ کفتان) |
| 1000 cowries OR 1000 of any currency | 1000 کوڑیاں یا کسی بھی کرنسی کے 1000 |
| One complete new outfit (top and bottom garments) | ایک مکمل نیا جوڑا (اوپر اور نیچے کے کپڑے) |
| Clothing should be modest and appropriate for prayer | لباس باحیا اور نماز کے لیے مناسب ہونا چاہیے |
| Can be traditional African dress (boubou) with trousers, or Western shirt and pants | پتلون کے ساتھ روایتی افریقی لباس (بوبو) یا مغربی قمیص اور پتلون ہو سکتا ہے |
| Must be NEW clothing, not used | لباس نیا ہونا چاہیے، استعمال شدہ نہیں |
| 1000 cowries OR 1000 units of any currency (symbolic of air's freedom and exchange) | 1000 کوڑیاں یا کسی بھی کرنسی کی 1000 اکائیاں (ہوا کی آزادی اور تبادلے کی علامت) |
| Given to someone genuinely in need | کسی حقیقی ضرورت مند کو دیا جائے |
| Performed with sincere intention to please Allah | اللہ کی رضا کی خالص نیت سے کیا جائے |
| Perform on Wednesday (your blessed day) - OPTIMAL for Air element | اپنے مبارک دن بدھ کو کریں — ہوائی عنصر کے لیے بہترین |
| During Ramadan for amplified blessings | زیادہ برکت کے لیے رمضان کے دوران |
| Before Eid celebrations | عید کی تقریبات سے پہلے |
| When seeking to overcome anger patterns | جب غصے کے انداز پر قابو پانا مقصود ہو |
| During times of major spiritual transformation | بڑی روحانی تبدیلی کے اوقات میں |
| A transformative spiritual act that specifically targets anger management and emotional balance. This buruj sadaqah for Air element creates a shield against the negative effects of quick temper and helps develop patience, wisdom, and self-control - your life's spiritual lessons. The monetary component represents the flow and exchange energy of air. | ایک تبدیلی لانے والا روحانی عمل جو خاص طور پر غصے پر قابو اور جذباتی توازن کو ہدف بناتا ہے۔ ہوائی عنصر کا یہ برجی صدقہ روایت میں جلد غصے کے منفی اثرات کے خلاف ڈھال اور صبر، حکمت اور ضبطِ نفس — آپ کی زندگی کے روحانی اسباق — پیدا کرنے کا ذریعہ سمجھا جاتا ہے۔ رقم کا حصہ ہوا کے بہاؤ اور تبادلے کی توانائی کو ظاہر کرتا ہے۔ |
| In all circumstances - this unique combination balances your water nature perfectly | ہر حال میں — یہ منفرد امتزاج آپ کے آبی مزاج کو بہترین طور پر متوازن رکھتا سمجھا جاتا ہے |
| To balance your water element, maintain emotional equilibrium, prevent being overwhelmed by feelings, and ensure spiritual flow. The rice (earth) grounds the fish (water) creating perfect harmony. | اپنے آبی عنصر کو متوازن رکھنے، جذباتی توازن برقرار رکھنے، جذبات سے مغلوب ہونے سے بچنے اور روحانی بہاؤ کے لیے۔ چاول (مٹی) مچھلی (پانی) کو سنبھالتے ہیں اور کامل ہم آہنگی بنتی ہے۔ |
| Donate rice and fish meals to shelters | پناہ گاہوں کو چاول اور مچھلی کے کھانے عطیہ کریں |
| Provide rice and canned fish to food banks | فوڈ بینکوں کو چاول اور ڈبہ بند مچھلی فراہم کریں |
| Cook and distribute rice with fish dishes | چاول اور مچھلی کے پکوان پکا کر تقسیم کریں |
| Support organizations feeding coastal communities | ساحلی برادریوں کو کھانا کھلانے والی تنظیموں کی مدد کریں |
| Sponsor seafood meals at community centers | کمیونٹی سینٹروں میں سمندری خوراک کے کھانوں کی کفالت کریں |
| Provide both staples to families in need | ضرورت مند خاندانوں کو دونوں بنیادی غذائیں فراہم کریں |
| Goat with some clothes and 4 coins of money (Néént dërëm in Wolof) | بکرا، کچھ کپڑوں اور 4 سکّوں کے ساتھ (وولوف میں Néént dërëm) |
| Goat with some clothes and 4 coins of money (Néént dërëm) | بکرا، کچھ کپڑوں اور 4 سکّوں کے ساتھ (Néént dërëm) |
| One complete healthy goat (any color) | ایک مکمل صحت مند بکرا (کسی بھی رنگ کا) |
| Several items of clothing (modest and appropriate) | کپڑوں کے کئی جوڑے (باحیا اور مناسب) |
| 4 coins or currency (Néént dërëm - symbolic of the four elements and water's flow) | 4 سکّے یا کرنسی (Néént dërëm — چار عناصر اور پانی کے بہاؤ کی علامت) |
| Clothing given to those in need | کپڑے ضرورت مندوں کو دیے جائیں |
| Coins given as sadaqah to the needy | سکّے صدقے کے طور پر ضرورت مندوں کو دیے جائیں |
| All performed with sincere intention | سب کچھ خلوصِ نیت کے ساتھ کیا جائے |
| Perform on Monday (your blessed day) - OPTIMAL for Water element | اپنے مبارک دن پیر کو کریں — آبی عنصر کے لیے بہترین |
| During Eid al-Adha for amplified blessings | زیادہ برکت کے لیے عیدالاضحیٰ کے دوران |
| After major life transitions | زندگی کی بڑی تبدیلیوں کے بعد |
| When seeking emotional healing | جب جذباتی شفا مقصود ہو |
| A profound spiritual milestone that creates emotional balance for Water element, protects from being overwhelmed, strengthens boundaries while maintaining compassion, and opens doors of sustenance. The combination of elements (goat, cloth, 4 coins) represents complete spiritual protection and the harmonious flow of water energy. | ایک گہرا روحانی سنگِ میل، جو روایت میں آبی عنصر کے لیے جذباتی توازن پیدا کرنے، مغلوب ہونے سے بچانے، ہمدردی برقرار رکھتے ہوئے حدود مضبوط کرنے اور رزق کے دروازے کھولنے کا ذریعہ سمجھا جاتا ہے۔ عناصر کا امتزاج (بکرا، کپڑا، 4 سکّے) مکمل روحانی حفاظت اور آبی توانائی کے ہم آہنگ بہاؤ کی علامت ہے۔ |
| To maintain spiritual balance and cool excessive fire energy | روحانی توازن برقرار رکھنے اور حد سے زیادہ آتشی توانائی کو ٹھنڈا کرنے کے لیے |
| Balances fiery nature, attracts divine blessings for new beginnings, maintains leadership barakah | آتشی مزاج کو متوازن کرتا، نئے آغاز کے لیے الٰہی برکتیں لاتا اور قیادت کی برکت برقرار رکھتا سمجھا جاتا ہے |
| Feed families in need with substantial meals | ضرورت مند خاندانوں کو بھرپور کھانا کھلائیں |
| Support soup kitchens and feeding programs | لنگر خانوں اور کھانا کھلانے کے پروگراموں کی مدد کریں |
| Donate to organizations helping new beginnings | نئے آغاز میں مدد کرنے والی تنظیموں کو عطیہ دیں |
| Sponsor meals for travelers or displaced persons | مسافروں یا بے گھر افراد کے لیے کھانے کی کفالت کریں |
| Provide food to construction workers or laborers | تعمیراتی کارکنوں یا مزدوروں کو کھانا فراہم کریں |
| Support refugee feeding programs | مہاجرین کو کھانا کھلانے کے پروگراموں کی مدد کریں |
| White lamb and white clothing | سفید میمنا اور سفید لباس |
| One complete white lamb (without blemish) | ایک مکمل سفید میمنا (بے داغ) |
| White clothing items (symbolizing purity and new beginnings) | سفید کپڑے (پاکیزگی اور نئے آغاز کی علامت) |
| Lamb meat distributed among believers and the poor | میمنے کا گوشت اہلِ ایمان اور غریبوں میں تقسیم کیا جائے |
| White clothing given to those in need | سفید کپڑے ضرورت مندوں کو دیے جائیں |
| Performed with intention for purification and renewal | پاکیزگی اور تجدید کی نیت سے کیا جائے |
| All done with sincere niyyah to please Allah | سب کچھ اللہ کی رضا کی خالص نیت کے ساتھ |
| Perform on Sunday (your blessed day) for maximum benefit | زیادہ سے زیادہ فائدے کے لیے اپنے مبارک دن اتوار کو کریں |
| Before beginning major life journeys or projects | زندگی کے بڑے سفروں یا منصوبوں کے آغاز سے پہلے |
| When seeking purification and fresh starts | جب پاکیزگی اور نیا آغاز مقصود ہو |
| At the start of a new year or significant life phase | نئے سال کے آغاز پر یا زندگی کے کسی اہم مرحلے پر |
| The white lamb represents purity of intention and fresh beginnings - core to your solar nature. This sacred offering removes obstacles from new ventures, blesses travels and construction projects, purifies your path, and establishes divine protection for bold initiatives. The white color symbolizes the purifying light of the sun. | سفید میمنا نیت کی پاکیزگی اور نئے آغاز کی علامت ہے — جو آپ کے شمسی مزاج کا مرکز ہے۔ یہ مقدس نذر روایت میں نئے کاموں کی رکاوٹیں دور کرنے، سفر اور تعمیراتی منصوبوں میں برکت، راستے کی تطہیر اور جرأت مندانہ اقدامات کے لیے الٰہی حفاظت کا ذریعہ سمجھی جاتی ہے۔ سفید رنگ سورج کی پاک کرنے والی روشنی کی علامت ہے۔ |
| To maintain grounding and prevent stagnation | استحکام برقرار رکھنے اور جمود سے بچنے کے لیے |
| Maintains spiritual flow, prevents excessive rigidity, ensures continued blessings in property and assets | روحانی بہاؤ برقرار رکھتا، حد سے زیادہ سختی روکتا اور جائیداد و اثاثوں میں برکت کے تسلسل کا ذریعہ سمجھا جاتا ہے |
| Donate rice, wheat, and grains to food banks | فوڈ بینکوں کو چاول، گندم اور اناج عطیہ کریں |
| Support agricultural cooperatives | زرعی تعاونی انجمنوں کی مدد کریں |
| Provide seeds to farming communities | کاشتکار برادریوں کو بیج فراہم کریں |
| Sponsor meals at community centers | کمیونٹی سینٹروں میں کھانے کی کفالت کریں |
| Donate to land conservation efforts | زمین کے تحفظ کی کوششوں کو عطیہ دیں |
| Support sustainable farming initiatives | پائیدار کاشتکاری کے اقدامات کی مدد کریں |
| Zakat al-Fitr in corn for 12 people, One Barred Plymouth Rock chicken | 12 افراد کے لیے مکئی میں صدقۂ فطر، ایک دھاری دار پلائی ماؤتھ راک مرغی |
| Corn (maize): Zakat al-Fitr amount for 12 people - approximately 36kg total (3kg per person) | مکئی: 12 افراد کے لیے صدقۂ فطر کی مقدار — کل تقریباً 36 کلوگرام (فی شخص 3 کلوگرام) |
| One Barred Plymouth Rock chicken - distinctive black and white barred feather pattern | ایک دھاری دار پلائی ماؤتھ راک مرغی — کالے اور سفید دھاری دار پروں کا نمایاں نمونہ |
| All corn distributed among the needy and poor | ساری مکئی ضرورت مندوں اور غریبوں میں تقسیم کی جائے |
| Chicken prepared and shared with community | مرغی پکا کر برادری کے ساتھ بانٹی جائے |
| Must be performed on Wednesday (your blessed day) | اپنے مبارک دن بدھ کو کرنا ضروری ہے |
| Done with sincere niyyah to please Allah | اللہ کی رضا کی خالص نیت کے ساتھ |
| 1 person's Zakat al-Fitr ≈ 3kg of grain × 12 people = 36kg of corn | ایک شخص کا صدقۂ فطر ≈ 3 کلوگرام اناج × 12 افراد = 36 کلوگرام مکئی |
| Black and white barred (striped) feather pattern, medium to large heritage breed | کالے اور سفید دھاری دار پروں کا نمونہ، درمیانی سے بڑی روایتی نسل |
| The barred pattern symbolizes balance between light and dark, earth duality | دھاری دار نمونہ روشنی اور تاریکی کے توازن اور زمین کی دوئی کی علامت ہے |
| Wednesday (your blessed day) - most powerful timing | بدھ (آپ کا مبارک دن) — سب سے مؤثر وقت |
| Can be performed any Wednesday throughout the year | سال بھر کسی بھی بدھ کو کیا جا سکتا ہے |
| Particularly blessed during Ramadan or Dhul-Hijjah | رمضان یا ذوالحجہ میں خاص طور پر بابرکت |
| When acquiring new property or achieving major stability | جب نئی جائیداد حاصل ہو یا بڑا استحکام ملے |
| At major life milestones | زندگی کے بڑے سنگِ میل پر |
| The number 12 represents completion and fullness in Islamic tradition. Corn (earth's grain) grounds your element. The specific chicken breed symbolizes balanced duality. This sacrifice establishes lasting material barakah, protects property and assets, ensures generational stability, and opens doors of sustenance. Wednesday timing aligns the earth element with communication and manifestation energies. | اسلامی روایت میں 12 کا عدد تکمیل اور پورے پن کی علامت ہے۔ مکئی (زمین کا اناج) آپ کے عنصر کو سنبھالتی ہے۔ مخصوص مرغی کی نسل متوازن دوئی کی علامت ہے۔ یہ قربانی روایت میں دیرپا مادی برکت قائم کرنے، جائیداد اور اثاثوں کی حفاظت، نسلی استحکام اور رزق کے دروازے کھولنے کا ذریعہ سمجھی جاتی ہے۔ بدھ کا وقت مٹی کے عنصر کو گفتگو اور اظہار کی توانائیوں سے ہم آہنگ کرتا ہے۔ |
| To maintain balance and prevent scattered energy | توازن برقرار رکھنے اور منتشر توانائی سے بچنے کے لیے |
| Grounds your airy nature, brings focus, attracts meaningful connections, and ensures spiritual clarity in communication | آپ کے ہوائی مزاج کو ٹھہراؤ دیتا، توجہ لاتا، بامعنی تعلقات کی طرف کھینچتا اور گفتگو میں روحانی وضاحت یقینی بنانے والا سمجھا جاتا ہے |
| Donate gently used clothing regularly | ہلکے استعمال شدہ کپڑے باقاعدگی سے عطیہ کریں |
| Provide professional attire to job seekers | ملازمت کے متلاشیوں کو پیشہ ورانہ لباس فراہم کریں |
| Support clothing programs for students | طلبہ کے لیے لباس کے پروگراموں کی مدد کریں |
| Donate to organizations helping refugees | مہاجرین کی مدد کرنے والی تنظیموں کو عطیہ دیں |
| Sponsor school uniforms for children | بچوں کے لیے اسکول یونیفارم کی کفالت کریں |
| Support dress-for-success programs | ڈریس فار سکسس (ملازمت کے لیے لباس) پروگراموں کی مدد کریں |
| White lamb (any lamb if white unavailable), 4 coins | سفید میمنا (سفید نہ ملے تو کوئی بھی میمنا)، 4 سکّے |
| One white lamb (preferably) or any lamb if white not available | ایک سفید میمنا (ترجیحاً) یا سفید نہ ملے تو کوئی بھی میمنا |
| 4 coins or currency (representing the four cardinal directions) | 4 سکّے یا کرنسی (چار سمتوں کی نمائندگی) |
| Coins given as sadaqah to four different needy persons | سکّے چار مختلف ضرورت مند افراد کو صدقے کے طور پر دیے جائیں |
| Performed with intention for spiritual clarity | روحانی وضاحت کی نیت سے کیا جائے |
| Perform on Friday (your blessed day) after Jumu'ah | اپنے مبارک دن جمعہ کو نمازِ جمعہ کے بعد کریں |
| During Eid al-Adha for maximum blessings | زیادہ سے زیادہ برکت کے لیے عیدالاضحیٰ کے دوران |
| When seeking clarity in important communications | جب اہم گفتگو میں وضاحت مقصود ہو |
| Before major teaching or speaking engagements | بڑے تدریسی یا خطاب کے مواقع سے پہلے |
| During times of building community connections | برادری سے روابط بنانے کے اوقات میں |
| This offering grounds your airy nature through the lamb (earth connection) while the 4 coins represent spreading your gifts in all directions. It ensures your words carry barakah, protects your communication endeavors, and opens doors for meaningful connections. The four coins symbolize reaching the four corners of the earth with your message. | یہ نذر میمنے (زمین سے تعلق) کے ذریعے آپ کے ہوائی مزاج کو ٹھہراؤ دیتی ہے جبکہ 4 سکّے آپ کی عطاؤں کے ہر سمت پھیلنے کی علامت ہیں۔ روایت میں اسے آپ کے کلام میں برکت کا ذریعہ، آپ کی گفتگو سے متعلق کوششوں کی حفاظت اور بامعنی روابط کے دروازے کھولنے والی سمجھا جاتا ہے۔ چار سکّے آپ کے پیغام کے زمین کے چاروں کونوں تک پہنچنے کی علامت ہیں۔ |
| To balance intense emotional depth and maintain flow | شدید جذباتی گہرائی کو متوازن رکھنے اور بہاؤ برقرار رکھنے کے لیے |
| Releases stuck energy, facilitates transformation, ensures emotional flow, and attracts healing opportunities | رکی ہوئی توانائی کو آزاد کرتا، تبدیلی کو آسان بناتا، جذباتی بہاؤ یقینی بناتا اور شفا کے مواقع لاتا سمجھا جاتا ہے |
| Support programs feeding those in crisis | بحران میں گھرے لوگوں کو کھانا کھلانے والے پروگراموں کی مدد کریں |
| Provide meals to hospitals and healing centers | ہسپتالوں اور شفا خانوں کو کھانا فراہم کریں |
| Sponsor food for grief support groups | غم میں مبتلا افراد کے معاونتی گروہوں کے لیے کھانے کی کفالت کریں |
| Donate to organizations helping trauma survivors | صدمے سے گزرنے والوں کی مدد کرنے والی تنظیموں کو عطیہ دیں |
| Support meal programs for those in transition | تبدیلی کے مرحلے سے گزرنے والوں کے کھانے کے پروگراموں کی مدد کریں |
| Red goat, one-eighth of a mithqāl gold (sumun mithqāl az-zahab ≈ 0.531g) OR money equivalent | سرخ بکرا، ایک مثقال سونے کا آٹھواں حصہ (sumun mithqāl az-zahab ≈ 0.531 گرام) یا اس کے برابر رقم |
| One complete red goat (symbolizing transformation and power) | ایک مکمل سرخ بکرا (تبدیلی اور قوت کی علامت) |
| One-eighth of a mithqāl of gold (approximately 0.531 grams) OR its monetary equivalent | ایک مثقال سونے کا آٹھواں حصہ (تقریباً 0.531 گرام) یا اس کے برابر مالیت |
| The goat must be healthy and of good quality | بکرا صحت مند اور اچھی نسل کا ہونا چاہیے |
| Meat distributed widely among the community | گوشت برادری میں وسیع پیمانے پر تقسیم کیا جائے |
| Gold/money given as sadaqah to those in need | سونا/رقم ضرورت مندوں کو صدقے کے طور پر دی جائے |
| Prioritize those going through difficult transitions | مشکل تبدیلیوں سے گزرنے والوں کو ترجیح دیں |
| Performed with intention for transformation and healing | تبدیلی اور شفا کی نیت سے کیا جائے |
| Perform on Tuesday (your blessed day) | اپنے مبارک دن منگل کو کریں |
| During Eid al-Adha for maximum transformation | زیادہ سے زیادہ تبدیلی کے لیے عیدالاضحیٰ کے دوران |
| At major life turning points | زندگی کے بڑے موڑ پر |
| When seeking deep healing or release | جب گہری شفا یا رہائی مقصود ہو |
| During Muharram (month of transformation) | محرم (تبدیلی کا مہینہ) کے دوران |
| Capricorn (Jady) | جدی (Jady) |
| The red goat symbolizes Scorpio's transformative power, while Capricorn represents the structured manifestation of that transformation | سرخ بکرا عقرب کی تبدیلی کی قوت کی علامت ہے، جبکہ جدی اس تبدیلی کے منظم اظہار کی نمائندگی کرتا ہے |
| The red goat represents the blood of life and the power of transformation specific to buruj 8 (Water-Scorpio). This profound buruj sadaqah facilitates major life transitions, releases karmic patterns, empowers deep healing work, and transforms obstacles into opportunities. The red color symbolizes the intensity and power of Scorpio water - death and rebirth. The gold component (or monetary equivalent) represents the preciousness of transformation and connects to Capricorn's earthly manifestation. | سرخ بکرا زندگی کے خون اور برج 8 (آبی-عقرب) سے مخصوص تبدیلی کی قوت کی نمائندگی کرتا ہے۔ یہ گہرا برجی صدقہ روایت میں زندگی کی بڑی تبدیلیوں کو آسان بنانے، پرانے انداز چھوڑنے، گہرے شفا کے کام کو تقویت دینے اور رکاوٹوں کو مواقع میں بدلنے کا ذریعہ سمجھا جاتا ہے۔ سرخ رنگ عقربی پانی کی شدت اور قوت — موت اور نئی زندگی — کی علامت ہے۔ سونے کا حصہ (یا اس کے برابر رقم) تبدیلی کی قدر و قیمت کا اظہار ہے اور جدی کے زمینی اظہار سے جڑتا ہے۔ |
| Every 1-2 months | ہر 1 تا 2 ماہ میں |
| To balance fire energy and attract continued blessings | آتشی توانائی کو متوازن کرنے اور برکتوں کے تسلسل کے لیے |
| Maintains spiritual balance and ensures blessings in knowledge and travel | روحانی توازن برقرار رکھتا اور علم و سفر میں برکت یقینی بناتا سمجھا جاتا ہے |
| Feed students and scholars | طلبہ اور علماء کو کھانا کھلائیں |
| Support educational meal programs | تعلیمی کھانے کے پروگراموں کی مدد کریں |
| Donate to university food banks | یونیورسٹی کے فوڈ بینکوں کو عطیہ دیں |
| Sponsor meals for travelers | مسافروں کے لیے کھانے کی کفالت کریں |
| White hen, 1,000 cowrie shells OR 1,000 in currency | سفید مرغی، 1,000 کوڑیاں یا 1,000 کرنسی میں |
| One white hen (symbolizing purity and knowledge) | ایک سفید مرغی (پاکیزگی اور علم کی علامت) |
| 1,000 cowrie shells OR equivalent in currency | 1,000 کوڑیاں یا اس کے برابر کرنسی |
| Hen distributed as food to the needy | مرغی ضرورت مندوں کو کھانے کے طور پر تقسیم کی جائے |
| Currency/cowries given as sadaqah | کرنسی/کوڑیاں صدقے کے طور پر دی جائیں |
| Performed with intention for expansion and blessings | وسعت اور برکتوں کی نیت سے کیا جائے |
| All with sincere niyyah | سب کچھ خلوصِ نیت کے ساتھ |
| Thursday (your blessed day) | جمعرات (آپ کا مبارک دن) |
| Before major travels or educational ventures | بڑے سفروں یا تعلیمی منصوبوں سے پہلے |
| During Islamic months of blessing | برکت والے اسلامی مہینوں کے دوران |
| When seeking expansion in knowledge or business | جب علم یا کاروبار میں وسعت مقصود ہو |
| Opens doors of knowledge, blesses travels, attracts opportunities for expansion, ensures protection during journeys | روایت میں علم کے دروازے کھولنے، سفر میں برکت، وسعت کے مواقع لانے اور سفر کے دوران حفاظت یقینی بنانے کا ذریعہ سمجھا جاتا ہے |
| To maintain spiritual flow and prevent stagnation | روحانی بہاؤ برقرار رکھنے اور جمود سے بچنے کے لیے |
| Balances earth energy, ensures continued success, maintains spiritual grounding | مٹی کی توانائی کو متوازن کرتا، تسلسلِ کامیابی اور روحانی استحکام برقرار رکھتا سمجھا جاتا ہے |
| Donate grains and staples to food banks | فوڈ بینکوں کو اناج اور بنیادی اشیا عطیہ کریں |
| Support agricultural communities | زرعی برادریوں کی مدد کریں |
| Sponsor meals for workers and laborers | مزدوروں اور کارکنوں کے لیے کھانے کی کفالت کریں |
| Donate to organizations helping the unemployed | بے روزگاروں کی مدد کرنے والی تنظیموں کو عطیہ دیں |
| Support vocational training programs | فنی تربیت کے پروگراموں کی مدد کریں |
| One black lamb, 10 Miskāl of gold (42.50 grams) or monetary equivalent | ایک کالا میمنا، 10 مثقال سونا (42.50 گرام) یا اس کے برابر رقم |
| One black lamb (symbolizing depth, mastery, and Saturn's energy) | ایک کالا میمنا (گہرائی، مہارت اور زحل کی توانائی کی علامت) |
| 10 Miskāl of gold = 42.50 grams of gold (10 × 4.25g) | 10 مثقال سونا = 42.50 گرام سونا (10 × 4.25 گرام) |
| OR the monetary equivalent value of 42.50 grams of gold | یا 42.50 گرام سونے کی نقد مالیت |
| Black lamb meat distributed among the poor and needy | کالے میمنے کا گوشت غریبوں اور ضرورت مندوں میں تقسیم کیا جائے |
| Gold value given as sadaqah to those in need | سونے کی مالیت ضرورت مندوں کو صدقے کے طور پر دی جائے |
| Must be performed on Saturday (THE BEST day for this buruj) | ہفتے کو کرنا ضروری ہے (اس برج کے لیے بہترین دن) |
| Done with sincere niyyah and serious intention | خلوصِ نیت اور سنجیدہ ارادے کے ساتھ کیا جائے |
| 1 Miskāl (Islamic measure) = 4.25 grams | 1 مثقال (اسلامی پیمانہ) = 4.25 گرام |
| 10 Miskāl × 4.25g = 42.50 grams of gold | 10 مثقال × 4.25 گرام = 42.50 گرام سونا |
| Check current gold price per gram and multiply by 42.50 to get the cash equivalent. This amount is given as sadaqah. | سونے کا موجودہ بھاؤ فی گرام دیکھیں اور 42.50 سے ضرب دیں تاکہ نقد مالیت معلوم ہو۔ یہ رقم صدقے کے طور پر دی جاتی ہے۔ |
| Must be BLACK lamb - this color is essential for Capricorn/Saturn alignment | میمنا کالا ہونا ضروری ہے — یہ رنگ جدی/زحل کی نسبت کے لیے لازمی ہے |
| Black represents depth, mystery, mastery, authority, and Saturn's grounding energy. It symbolizes the culmination of earth element wisdom. | کالا رنگ گہرائی، راز، مہارت، اختیار اور زحل کی ٹھہراؤ والی توانائی کی علامت ہے۔ یہ مٹی کے عنصر کی حکمت کی انتہا کا مظہر ہے۔ |
| Healthy, mature lamb without defects | صحت مند، بالغ اور بے عیب میمنا |
| 10 is the number of completion and perfection in Islamic numerology. It represents the ten commandments, complete divine order, and mastery. Combined with earth element and Saturn energy, it establishes ultimate material and spiritual authority. | اسلامی علم الاعداد میں 10 تکمیل اور کمال کا عدد ہے۔ یہ دس احکام، مکمل الٰہی نظم اور مہارت کی علامت سمجھا جاتا ہے۔ مٹی کے عنصر اور زحل کی توانائی کے ساتھ مل کر یہ اعلیٰ مادی اور روحانی اختیار کی علامت بنتا ہے۔ |
| Saturday (THE BEST day for this buruj) - most powerful timing | ہفتہ (اس برج کے لیے بہترین دن) — سب سے مؤثر وقت |
| Upon achieving major career milestone or promotion | جب کوئی بڑی پیشہ ورانہ کامیابی یا ترقی حاصل ہو |
| When acquiring significant property or wealth | جب کوئی نمایاں جائیداد یا دولت حاصل ہو |
| During times of establishing major authority or leadership | کوئی بڑا اختیار یا قیادت سنبھالنے کے اوقات میں |
| At major life establishment moments | زندگی میں بڑے استحکام کے مواقع پر |
| Can be performed any Saturday throughout the year | سال بھر کسی بھی ہفتے کو کیا جا سکتا ہے |
| Particularly powerful during Dhul-Hijjah (month of sacrifice) | ذوالحجہ (قربانی کے مہینے) میں خاص طور پر مؤثر |
| This is one of the most powerful sadaqah combinations in ʿIlm al-Ḥurūf. The black lamb represents mastery over the material world through spiritual discipline. The 10 Miskāl of gold (42.50g) represents complete wealth and divine provision. Together, they establish: lasting success in career and authority, protection of property and generational wealth, divine support in ambitious undertakings, mastery and leadership in your field, unshakeable material stability. Saturn's Saturday energy amplifies discipline, structure, and long-term results. This sacrifice creates a foundation that lasts for generations. | یہ علم الحروف میں صدقے کی سب سے مؤثر صورتوں میں سے ایک سمجھی جاتی ہے۔ کالا میمنا روحانی نظم و ضبط کے ذریعے مادی دنیا پر مہارت کی علامت ہے۔ 10 مثقال سونا (42.50 گرام) مکمل دولت اور الٰہی رزق کی علامت ہے۔ دونوں مل کر روایت میں یہ قائم کرنے والے سمجھے جاتے ہیں: پیشے اور اختیار میں دیرپا کامیابی، جائیداد اور نسلی دولت کی حفاظت، بلند ارادوں میں الٰہی مدد، اپنے میدان میں مہارت اور قیادت، اور غیر متزلزل مادی استحکام۔ زحل کے ہفتے کی توانائی نظم و ضبط، ساخت اور طویل مدتی نتائج کو بڑھاتی سمجھی جاتی ہے۔ یہ قربانی ایسی بنیاد بناتی سمجھی جاتی ہے جو نسلوں تک قائم رہے۔ |
| Gold Option: You can give actual gold (jewelry, coins) worth 42.50g, OR | سونے کا اختیار: آپ 42.50 گرام کے برابر اصل سونا (زیور، سکّے) دے سکتے ہیں، یا |
| Cash Option: Calculate cash value of 42.50g gold at current market price | نقد اختیار: 42.50 گرام سونے کی موجودہ بازاری قیمت کے مطابق نقد مالیت نکالیں |
| Distribution: Give to the poor, needy, or charitable causes | تقسیم: غریبوں، ضرورت مندوں یا فلاحی مقاصد کو دیں |
| Both lamb and gold/money must be given - they work together | میمنا اور سونا/رقم دونوں دینا ضروری ہے — یہ مل کر کام کرتے ہیں |
| This is a once-in-lifetime offering - choose the timing carefully | یہ زندگی میں ایک بار کی نذر ہے — وقت کا انتخاب احتیاط سے کریں |
| To ground visionary energy and maintain connection to community needs | بصیرت والی توانائی کو ٹھہراؤ دینے اور برادری کی ضروریات سے تعلق قائم رکھنے کے لیے |
| Balances detached air nature, maintains connection to practical service, ensures spiritual flow | الگ تھلگ ہوائی مزاج کو متوازن کرتا، عملی خدمت سے تعلق برقرار رکھتا اور روحانی بہاؤ یقینی بناتا سمجھا جاتا ہے |
| Donate clothing to homeless shelters | بے گھر افراد کی پناہ گاہوں کو کپڑے عطیہ کریں |
| Support refugee clothing programs | مہاجرین کے لباس کے پروگراموں کی مدد کریں |
| Provide work attire for job training programs | روزگار کی تربیت کے پروگراموں کے لیے کام کا لباس فراہم کریں |
| Donate to community clothing drives | برادری کی لباس مہمات کو عطیہ دیں |
| Support transitional housing clothing needs | عارضی رہائش کے لباس کی ضروریات میں مدد کریں |
| Guinea fowl (pintade), their own clothing, 9 meters of cloth (mbasin/African/Asian fabric), 1,000 cowrie shells OR 1,000 in currency | گنی فاؤل (پنتاد)، اپنے لباس، 9 میٹر کپڑا (mbasin/افریقی/ایشیائی کپڑا)، 1,000 کوڑیاں یا 1,000 کرنسی میں |
| One guinea fowl/pintade (symbolizing community and uniqueness) | ایک گنی فاؤل/پنتاد (برادری اور انفرادیت کی علامت) |
| Personal clothing items | ذاتی لباس کی اشیا |
| 9 meters of quality fabric (African or Asian cloth) | 9 میٹر معیاری کپڑا (افریقی یا ایشیائی) |
| All distributed to those in need | سب کچھ ضرورت مندوں میں تقسیم کیا جائے |
| Performed with intention for community benefit | برادری کے فائدے کی نیت سے کیا جائے |
| Sunday (your blessed day) | اتوار (آپ کا مبارک دن) |
| When launching major community projects | جب برادری کے بڑے منصوبے شروع کیے جائیں |
| During times of social transition | سماجی تبدیلی کے اوقات میں |
| When seeking to benefit the collective | جب اجتماعی فائدہ مقصود ہو |
| Opens doors for humanitarian work, blesses community initiatives, attracts support for innovative projects, ensures divine assistance in collective service | روایت میں انسان دوست کام کے دروازے کھولنے، برادری کے اقدامات میں برکت، جدید منصوبوں کے لیے مدد کی کشش اور اجتماعی خدمت میں الٰہی مدد کا ذریعہ سمجھا جاتا ہے |
| To maintain spiritual balance and prevent absorption of others' pain | روحانی توازن برقرار رکھنے اور دوسروں کے درد کو جذب کرنے سے بچنے کے لیے |
| Protects empathic nature, maintains boundaries while serving, ensures spiritual clarity | ہمدرد فطرت کی حفاظت کرتا، خدمت کے دوران حدود برقرار رکھتا اور روحانی وضاحت یقینی بناتا سمجھا جاتا ہے |
| Donate rice and fish meals to those in grief | غم میں مبتلا لوگوں کو چاول اور مچھلی کے کھانے عطیہ کریں |
| Support hospice meal programs | تسکینی نگہداشت (ہاسپس) کے کھانے کے پروگراموں کی مدد کریں |
| Provide food to spiritual retreat centers | روحانی خلوت کے مراکز کو کھانا فراہم کریں |
| Sponsor meals for hospital patients | ہسپتال کے مریضوں کے لیے کھانے کی کفالت کریں |
| Donate to organizations serving the vulnerable | کمزور طبقات کی خدمت کرنے والی تنظیموں کو عطیہ دیں |
| Zakat al-Fitr in rice for 12 people, Fish | 12 افراد کے لیے چاول میں صدقۂ فطر، مچھلی |
| Rice: Zakat al-Fitr amount for 12 people - approximately 36kg total (3kg per person) | چاول: 12 افراد کے لیے صدقۂ فطر کی مقدار — کل تقریباً 36 کلوگرام (فی شخص 3 کلوگرام) |
| Fish - appropriate amount for community distribution (fresh or preserved) | مچھلی — برادری میں تقسیم کے لیے مناسب مقدار (تازہ یا محفوظ) |
| All rice distributed among the needy and poor | سارے چاول ضرورت مندوں اور غریبوں میں تقسیم کیے جائیں |
| Fish prepared and shared with community | مچھلی پکا کر برادری کے ساتھ بانٹی جائے |
| Number 12 symbolizes completion and spiritual perfection (12th buruj) | عدد 12 تکمیل اور روحانی کمال کی علامت ہے (12واں برج) |
| Must be performed on Thursday (THE BEST day for this buruj) | جمعرات کو کرنا ضروری ہے (اس برج کے لیے بہترین دن) |
| 1 person's Zakat al-Fitr ≈ 3kg of grain × 12 people = 36kg of rice | ایک شخص کا صدقۂ فطر ≈ 3 کلوگرام اناج × 12 افراد = 36 کلوگرام چاول |
| Any halal fish - fresh, dried, or preserved. Amount should feed the community. | کوئی بھی حلال مچھلی — تازہ، خشک یا محفوظ۔ مقدار اتنی ہو کہ برادری کو کھلا سکے۔ |
| Fish represents water element purity, spiritual depth, and ancient sustenance | مچھلی آبی عنصر کی پاکیزگی، روحانی گہرائی اور قدیم رزق کی علامت ہے |
| Thursday (THE BEST day for this buruj) - most powerful timing | جمعرات (اس برج کے لیے بہترین دن) — سب سے مؤثر وقت |
| Can be performed any Thursday throughout the year | سال بھر کسی بھی جمعرات کو کیا جا سکتا ہے |
| Especially blessed during Ramadan | رمضان میں خاص طور پر بابرکت |
| At completion of major spiritual journey or transformation | کسی بڑے روحانی سفر یا تبدیلی کی تکمیل پر |
| When seeking spiritual closure or new beginning | جب روحانی اختتام یا نیا آغاز مقصود ہو |
| After major healing or life transition | کسی بڑی شفا یا زندگی کی تبدیلی کے بعد |
| This is the completion buruj (12th) with 12 portions - representing full spiritual cycle completion. Rice (nourishment) and fish (water element) create complete spiritual protection and healing. The number 12 appears twice (12th buruj + 12 portions) symbolizing ultimate spiritual wholeness. Thursday's Jupiter energy amplifies compassion, mercy, and divine blessings. This sacrifice protects your empathic nature, establishes healthy boundaries while maintaining compassion, attracts divine protection in service to others, and ensures spiritual completion and closure. | یہ تکمیل کا برج (12واں) ہے اور 12 حصوں کے ساتھ — مکمل روحانی دور کی تکمیل کی علامت۔ چاول (غذا) اور مچھلی (آبی عنصر) مل کر روایت میں مکمل روحانی حفاظت اور شفا کا ذریعہ سمجھے جاتے ہیں۔ عدد 12 دو بار آتا ہے (12واں برج + 12 حصے) جو اعلیٰ روحانی کلیت کی علامت ہے۔ جمعرات کی مشتری کی توانائی ہمدردی، رحمت اور الٰہی برکتوں کو بڑھاتی سمجھی جاتی ہے۔ یہ قربانی روایت میں آپ کی ہمدرد فطرت کی حفاظت، ہمدردی برقرار رکھتے ہوئے صحت مند حدود قائم کرنے، دوسروں کی خدمت میں الٰہی حفاظت کی کشش اور روحانی تکمیل و اختتام کا ذریعہ سمجھی جاتی ہے۔ |



### 6.24 scan-TrackingDashboard (62)

| English | Urdu |
|---|---|
| Add | شامل کریں |
| Add Practice Session | معمول کی نشست شامل کریں |
| Add Record | اندراج شامل کریں |
| Add Sadaqah Record | صدقے کا اندراج شامل کریں |
| Add Session | نشست شامل کریں |
| Advanced Charts Coming Soon | جدید چارٹس جلد آ رہے ہیں |
| All activities | تمام سرگرمیاں |
| Analytics | تجزیات |
| Analytics & Trends | تجزیات اور رجحانات |
| Average Quality | اوسط معیار |
| Best Streak | بہترین تسلسل |
| Complete Lifetime Offering | عمر بھر کی نذر مکمل کریں |
| Completed | مکمل |
| Completed full session | پوری نشست مکمل کی |
| Completed on: | مکمل ہونے کی تاریخ: |
| Completion Rate | تکمیل کی شرح |
| Current Streak | موجودہ تسلسل |
| Date Completed | مکمل ہونے کی تاریخ |
| Day Streak | دن کا تسلسل |
| Delete this record? | یہ اندراج حذف کریں؟ |
| Export data | ڈیٹا برآمد کریں |
| Import | درآمد کریں |
| Insights & Recommendations | رجحانات اور تجاویز |
| Invalid file format | فائل کی شکل درست نہیں |
| Keep it up! | جاری رکھیں! |
| Lifetime | عمر بھر |
| Location: | مقام: |
| Mark Complete | مکمل کا نشان لگائیں |
| Mark as Completed | مکمل شدہ کے طور پر نشان زد کریں |
| Monitor your spiritual journey | اپنے روحانی سفر پر نظر رکھیں |
| Monthly Sadaqah Records | ماہانہ صدقے کے اندراجات |
| No practice sessions yet | ابھی تک کوئی معمول کی نشست نہیں |
| No sadaqah records yet | ابھی تک کوئی صدقے کا اندراج نہیں |
| Not Yet Completed | ابھی مکمل نہیں ہوا |
| Notes | نوٹس |
| Notes (optional) | نوٹس (اختیاری) |
| Period: | مدت: |
| Practice | معمول |
| Practice Sessions | معمول کی نشستیں |
| Practice Tracking & Analytics | معمول کی نگرانی اور تجزیات |
| Practice completion | معمول کی تکمیل |
| Recent Activity | حالیہ سرگرمی |
| Recitation Count | پڑھنے کی گنتی |
| Sacred Lifetime Offering | عمر بھر کی مقدس نذر |
| Success Rate | کامیابی کی شرح |
| This sacred offering should be performed once in your lifetime at the appropriate time. | یہ مقدس نذر روایت کے مطابق زندگی میں ایک بار، مناسب وقت پر ادا کی جاتی ہے۔ |
| This will replace all current data. Continue? | اس سے موجودہ تمام ڈیٹا بدل جائے گا۔ جاری رکھیں؟ |
| Total Recitations | کل تلاوت/ورد |
| Total Recorded | کل درج شدہ |
| Total Sadaqah | کل صدقہ |
| Total Time | کل وقت |
| Type | قسم |
| Visual charts and graphs will be available in the next update | بصری چارٹس اور گراف اگلی اپ ڈیٹ میں دستیاب ہوں گے |
| Witnesses: | گواہ: |
| Your completion rate is low. Try setting smaller daily goals. | آپ کی تکمیل کی شرح کم ہے۔ روزانہ چھوٹے اہداف مقرر کر کے دیکھیں۔ |
| complete | مکمل |
| consecutive days | مسلسل دن |
| count | گنتی |
| days | دن |
| e.g., Food donation | مثلاً: کھانے کا عطیہ |
| recitations | بار پڑھنا |
| records | اندراجات |



### 6.25 scan-SpiritualPracticeTab (35)

| English | Urdu |
|---|---|
| Associated Zodiac | متعلقہ برج |
| Choose one modern alternative that fits your lifestyle | اپنے طرزِ زندگی کے مطابق ایک جدید متبادل منتخب کریں |
| Complete daily | روزانہ مکمل کریں |
| Context | سیاق |
| Copy Arabic text | عربی متن کاپی کریں |
| Dhikr Count | ذکر کی گنتی |
| Divine Names & Dhikr Practice | اسمائے الٰہی اور ذکر کا معمول |
| Element Alignment | عنصر سے مطابقت |
| For Dhikr Count | ذکر کی گنتی کے لیے |
| For dhikr count | ذکر کی گنتی کے لیے |
| Frequency | تکرار |
| Getting Started | آغاز کیسے کریں |
| Listen to recitation | تلاوت سنیں |
| Make intention (niyyah) before each practice | ہر معمول سے پہلے نیت کریں |
| Modern Applications | جدید صورتیں |
| Monthly Spiritual Balance | ماہانہ روحانی توازن |
| Optimal Timing | موزوں وقت |
| Performed ONCE in Your Lifetime | زندگی میں صرف ایک بار ادا کیا جائے |
| Practice Night | معمول کی رات |
| Quranic Connection | قرآنی تعلق |
| Regular practice for ongoing spiritual growth | مسلسل روحانی نشوونما کے لیے باقاعدہ معمول |
| Repetition Count | تکرار کی گنتی |
| Required Components | ضروری اجزا |
| Set a monthly reminder on your calendar | اپنے کیلنڈر پر ماہانہ یاددہانی لگائیں |
| Spiritual Benefits | روحانی فوائد |
| Spiritual Significance | روحانی اہمیت |
| This is a profound spiritual commitment that should be undertaken with careful preparation and sincere intention. | یہ ایک گہرا روحانی عہد ہے جو محتاط تیاری اور خلوصِ نیت کے ساتھ اٹھانا چاہیے۔ |
| This verse resonates with your elemental nature and can be recited for spiritual guidance and protection. Reflect on its meaning as part of your daily practice. | یہ آیت آپ کے عنصری مزاج سے مناسبت رکھتی ہے اور روحانی رہنمائی اور حفاظت کے لیے پڑھی جا سکتی ہے۔ اپنے روزانہ معمول کے حصے کے طور پر اس کے معنی پر غور کریں۔ |
| Traditional Guidance | روایتی رہنمائی |
| Traditional Practice | روایتی معمول |
| Use Name | نام استعمال کریں |
| View Practice History & Progress | معمول کی تاریخ اور پیش رفت دیکھیں |
| Your core energy | آپ کی بنیادی توانائی |
| Your personalized dhikr guidance with Divine Names tailored to your spiritual profile | آپ کے روحانی پروفائل کے مطابق اسمائے الٰہی کے ساتھ آپ کی ذاتی ذکر کی رہنمائی |
| times | بار |



### 6.26 scan-IstikharaEducation (40)

| English | Urdu |
|---|---|
| 1. Overview Tab | ۱۔ جائزہ ٹیب |
| 2. Personality Tab | ۲۔ شخصیت ٹیب |
| 3. Career Tab | ۳۔ پیشہ ٹیب |
| 4. Blessed Day Tab | ۴۔ مبارک دن ٹیب |
| 5. Spiritual Tab | ۵۔ روحانی ٹیب |
| Career and life path guidance | پیشے اور زندگی کے راستے کی رہنمائی |
| Discover career paths that align with your elemental nature. Note both traditional and modern recommendations. | وہ پیشے دریافت کریں جو آپ کے عنصری مزاج سے ہم آہنگ ہیں۔ روایتی اور جدید دونوں تجاویز پر غور کریں۔ |
| Follow the recommended spiritual practices, Divine Names, and Quranic verses for protection and balance. | تجویز کردہ روحانی معمولات، اسمائے الٰہی اور حفاظت و توازن کے لیے قرآنی آیات کی پیروی کریں۔ |
| Four Elements | چار عناصر |
| Glossary | اصطلاحات |
| Glossary of Terms | اصطلاحات کی فرہنگ |
| Historical Context | تاریخی پس منظر |
| History & Significance | تاریخ اور اہمیت |
| How to Read Your Results | اپنے نتائج کیسے پڑھیں |
| Integrates Arabic letter numerology (Abjad) with celestial correspondences | عربی حروف کے اعداد (ابجد) کو فلکی نسبتوں کے ساتھ جوڑتا ہے |
| Istikharah al-Asmā' (Spiritual Guidance Through Names) is a classical Islamic tradition rooted in the science of Ilm al-Huruf (Science of Letters) and ancient astrological wisdom. This practice combines the numerical values of names with the Buruj (zodiacal mansions) to provide spiritual insight and guidance. | استخارۃ الاسماء (ناموں کے ذریعے روحانی رہنمائی) علم الحروف اور قدیم فلکی حکمت پر مبنی ایک کلاسیکی اسلامی روایت ہے۔ یہ معمول ناموں کی عددی قدروں کو بروج (فلکی منازل) کے ساتھ جوڑتا ہے۔ یہ نمازِ استخارہ نہیں؛ یہ غور و فکر اور خود شناسی کا ذریعہ ہے۔ |
| Key Traits | اہم خصوصیات |
| Numerical value derived from Arabic letters (Abjad numerology) | عربی حروف سے نکلنے والی عددی قدر (ابجد کا علم الاعداد) |
| One of the four classical elements: Fire, Earth, Air, Water | چار کلاسیکی عناصر میں سے ایک: آگ، مٹی، ہوا، پانی |
| Optimal timing for important decisions | اہم فیصلوں کے لیے موزوں وقت |
| Purpose & Applications | مقصد اور استعمالات |
| Reading Results | نتائج پڑھنا |
| Remembrance of Allah through repetition of sacred phrases | مقدس کلمات کی تکرار کے ذریعے اللہ کی یاد |
| Schedule important decisions, meetings, and new ventures on your blessed day for optimal spiritual alignment. | اپنے مبارک دن پر اہم فیصلے، ملاقاتیں اور نئے کام طے کریں تاکہ بہترین روحانی ہم آہنگی رہے۔ |
| Seeking guidance or consultation, traditionally through prayer | رہنمائی یا مشورہ طلب کرنا، روایتی طور پر دعا کے ذریعے |
| Spiritual practices aligned with personal nature | ذاتی مزاج کے مطابق روحانی معمولات |
| Start here for quick, actionable guidance. This tab highlights the most important insights for immediate application. | یہاں سے فوری اور قابلِ عمل رہنمائی کے لیے آغاز کریں۔ یہ ٹیب فوری اطلاق کے لیے اہم ترین نکات نمایاں کرتا ہے۔ |
| The 99 Names of Allah, each with specific spiritual qualities | اللہ کے 99 نام، ہر ایک کی اپنی روحانی صفات کے ساتھ |
| The Ancient Practice of Istikharah al-Asmā' | استخارۃ الاسماء کی قدیم روایت |
| The Buruj System | بروج کا نظام |
| The Buruj system divides the celestial sphere into 12 sections, each associated with specific elements and qualities. Your personal Buruj is determined by the remainder when dividing the sum of names by 12. | بروج کا نظام فلکی کرے کو 12 حصوں میں تقسیم کرتا ہے، ہر ایک مخصوص عناصر اور صفات سے منسوب۔ آپ کا ذاتی برج ناموں کے مجموعے کو 12 سے تقسیم کرنے پر بچنے والے باقی سے طے ہوتا ہے۔ |
| The Four Classical Elements | چار کلاسیکی عناصر |
| The Science of Letters - study of Arabic letters and their mystical meanings | علم الحروف — عربی حروف اور ان کے باطنی معانی کا مطالعہ |
| The Twelve Buruj (Zodiacal Mansions) | بارہ بروج (فلکی منازل) |
| The twelve zodiacal mansions or constellations | بارہ فلکی منازل یا جھرمٹ |
| Traced back to classical Islamic scholars and practitioners of Ilm al-Huruf | علم الحروف کے کلاسیکی علماء اور اہلِ فن تک پہنچتی ہے |
| Understand your natural temperament, communication style, and social patterns. Use this for self-awareness and personal growth. | اپنے فطری مزاج، گفتگو کے انداز اور سماجی رویوں کو سمجھیں۔ اسے خود آگاہی اور ذاتی نشوونما کے لیے استعمال کریں۔ |
| Understanding personality traits and temperament | شخصیت کی صفات اور مزاج کو سمجھنا |
| Used for personal guidance, name selection, and spiritual counseling | ذاتی رہنمائی، نام کے انتخاب اور روحانی مشاورت کے لیے استعمال ہوتا ہے |
| Voluntary charity given as an act of worship | نفلی خیرات جو عبادت کے طور پر دی جاتی ہے |



### 6.27 scan-DhikrCounter (28)

| English | Urdu |
|---|---|
| (Use Name for exact count) | (درست گنتی کے لیے نام استعمال کریں) |
| Are you sure you want to reset? Your progress will be lost. | کیا آپ واقعی ری سیٹ کرنا چاہتے ہیں؟ آپ کی پیش رفت ضائع ہو جائے گی۔ |
| Auto | خودکار |
| Auto Counting... | خودکار گنتی... |
| Auto Speed: | خودکار رفتار: |
| Avg Pace | اوسط رفتار |
| Best practiced after prayer in a quiet space | نماز کے بعد پرسکون جگہ پر بہترین طور پر پڑھا جاتا ہے |
| Complete | مکمل |
| Current | موجودہ |
| Duration | دورانیہ |
| Duration: | دورانیہ: |
| Estimated time remaining: | اندازاً باقی وقت: |
| Halfway | آدھا |
| Manual | دستی |
| Mode: | طریقہ: |
| Māshā Allāh! 🎉 | ماشاء اللہ! 🎉 |
| Pause | توقف |
| Play pronunciation | تلفظ سنیں |
| Practice Night: | معمول کی رات: |
| Quarter | چوتھائی |
| Recite with presence and sincerity | حضورِ قلب اور خلوص کے ساتھ پڑھیں |
| Session Completed! | نشست مکمل ہو گئی! |
| Session History | نشستوں کی تاریخ |
| Start | شروع کریں |
| Start Auto Count | خودکار گنتی شروع کریں |
| Step-by-Step Practice Guide | مرحلہ وار معمول کی رہنمائی |
| Tap to Count | گننے کے لیے ٹیپ کریں |
| Three Quarters | تین چوتھائی |



### 6.28 scan-IstikharaResults (25)

| English | Urdu |
|---|---|
| Anger Pattern | غصے کا انداز |
| Best Activities for This Day | اس دن کے لیے بہترین سرگرمیاں |
| Communication Style | مزاج اور گفتگو کا انداز |
| Copied to clipboard! | کلپ بورڈ پر کاپی ہو گیا! |
| Deep insights into your temperament and character traits | آپ کے مزاج اور کردار کی خصوصیات کی گہری بصیرتیں |
| Divine Support | الٰہی معاونت |
| Dream Symbolism | خوابوں کی علامتیں |
| Explore career guidance in the Career tab | پیشے کی رہنمائی پیشہ ٹیب میں دیکھیں |
| Explore spiritual practices in the Spiritual tab | روحانی معمولات روحانی ٹیب میں دیکھیں |
| Explore the tabs above to dive deeper into your personality traits, career guidance, blessed day details, and spiritual practices. Each section provides comprehensive insights tailored to your spiritual profile. | اوپر دیے گئے ٹیبز دیکھ کر اپنی شخصیت کی خصوصیات، پیشے کی رہنمائی، مبارک دن کی تفصیل اور روحانی معمولات کو گہرائی سے جانیں۔ ہر حصہ آپ کے روحانی پروفائل کے مطابق جامع بصیرتیں فراہم کرتا ہے۔ |
| Growth Areas | نشوونما کے پہلو |
| Harmonious Colors | ہم آہنگ رنگ |
| Life Blessings | زندگی کی نعمتیں |
| Life Challenges | زندگی کی آزمائشیں |
| Mark this day in your calendar every week. Consider setting a recurring reminder to help you align important activities with your power day. | اس دن کو ہر ہفتے اپنے کیلنڈر میں نشان زد کریں۔ اہم سرگرمیوں کو اپنے خاص دن کے ساتھ ہم آہنگ کرنے کے لیے دہرائی جانے والی یاددہانی لگانے پر غور کریں۔ |
| Pro Tip | مفید مشورہ |
| Schedule your most important meetings, critical decisions, and new ventures on this day when possible. Your spiritual energy and divine support are at their peak. | جب ممکن ہو اپنی اہم ترین ملاقاتیں، فیصلے اور نئے کام اسی دن رکھیں۔ روایت میں سمجھا جاتا ہے کہ اس دن آپ کی روحانی توانائی اور الٰہی معاونت عروج پر ہوتی ہے۔ |
| Social Challenges | سماجی آزمائشیں |
| Social Dynamics | سماجی انداز |
| Special Significance | خاص اہمیت |
| These colors resonate with your elemental energy. Use them in your environment for spiritual balance. | یہ رنگ آپ کی عنصری توانائی سے ہم آہنگ ہیں۔ روحانی توازن کے لیے انہیں اپنے ماحول میں استعمال کریں۔ |
| This is your most spiritually auspicious day of the week. Your energy peaks and divine support is strongest on this day. | روایت میں یہ ہفتے کا آپ کے لیے سب سے زیادہ روحانی طور پر موافق دن سمجھا جاتا ہے۔ اس دن آپ کی توانائی عروج پر اور الٰہی معاونت سب سے مضبوط مانی جاتی ہے۔ |
| Weekly Planning | ہفتہ وار منصوبہ بندی |
| Your Blessed Day | آپ کا مبارک دن |
| Your Personality Profile | آپ کا شخصیتی پروفائل |



### 6.29 scan-IstikharaPanel (12)

| English | Urdu |
|---|---|
| Are you sure you want to clear all saved calculations? | کیا آپ واقعی تمام محفوظ شدہ حساب صاف کرنا چاہتے ہیں؟ |
| Calculation History | حساب کی تاریخ |
| Clear All | سب صاف کریں |
| Discover Asrār — Sacred Sciences & Divine Timing | اسرار دریافت کریں — مقدس علوم اور اوقات کا علم |
| History | تاریخ |
| Invitation copied! | دعوت کاپی ہو گئی! |
| Istikhara al-Asmāʾ — My Spiritual Profile | استخارۃ الاسماء — میرا روحانی پروفائل |
| No saved calculations yet | ابھی تک کوئی محفوظ حساب نہیں |
| View History | تاریخ دیکھیں |
| saved calculations | محفوظ حساب |
| 🌙 Discover your spiritual profile with Istikhara al-Asmāʾ on Asrār! | 🌙 اسرار پر استخارۃ الاسماء کے ساتھ اپنا روحانی پروفائل دریافت کریں! |
| 🌙 Discover your spiritual profile with Istikhara al-Asmāʾ on Asrār! Abjad numerology, planetary hours, Zikr challenges, and more. | 🌙 اسرار پر استخارۃ الاسماء کے ساتھ اپنا روحانی پروفائل دریافت کریں! ابجد کا علم الاعداد، ساعاتِ کواکب، ذکر کے چیلنج اور بہت کچھ۔ |



### 6.30 scan-IstikharaForm (12)

| English | Urdu |
|---|---|
| Common Female Names | عام خواتین کے نام |
| Common Male Names | عام مردوں کے نام |
| Hide Keyboard | کی بورڈ چھپائیں |
| Mother's Name Significance | والدہ کے نام کی اہمیت |
| Name must contain only Arabic letters | نام صرف عربی حروف پر مشتمل ہونا چاہیے |
| Please enter mother's name in Arabic | براہِ کرم والدہ کا نام عربی میں درج کریں |
| Please enter your name in Arabic | براہِ کرم اپنا نام عربی میں درج کریں |
| Ready to calculate! | حساب کے لیے تیار! |
| Scholarly Foundation | علمی بنیاد |
| The mother's influence shapes the soul's entry into this world, making her name essential for accurate spiritual calculation. | روایت میں والدہ کے اثر کو اس دنیا میں آمد سے جوڑا جاتا ہے، اس لیے درست روحانی حساب کے لیے اس کا نام ضروری سمجھا جاتا ہے۔ |
| This practice is rooted in classical Islamic texts and has been preserved by scholars across generations. | یہ معمول کلاسیکی اسلامی کتب پر مبنی ہے اور نسل در نسل علماء کے ذریعے محفوظ رہا ہے۔ |
| ʿIlm al-Ḥurūf (Science of Letters) is an ancient Islamic tradition that explores the spiritual significance of Arabic letters and their numerical values. Each letter corresponds to a number in the Abjad system, revealing hidden meanings and divine connections. | علم الحروف (حروف کا علم) ایک قدیم اسلامی روایت ہے جو عربی حروف اور ان کی عددی قدروں کی روحانی اہمیت کا مطالعہ کرتی ہے۔ ابجد کے نظام میں ہر حرف ایک عدد سے مطابقت رکھتا ہے۔ |



### 6.31 scan-ChallengeCard (9)

| English | Urdu |
|---|---|
| Copy Link | لنک کاپی کریں |
| Custom amount | اپنی مرضی کی مقدار |
| Glorify Allah morning and evening. | وَسَبِّحُوهُ بُكْرَةً وَأَصِيلًا |
| Hearts find rest in the remembrance of Allah. | أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ |
| Share this practice | اس معمول کو شیئر کریں |
| The dhikr of Allah is the greatest. | وَلَذِكْرُ اللَّهِ أَكْبَرُ |
| Today's target complete! | آج کا ہدف مکمل! |
| day streak | دن کا تسلسل |
| 💰 Debt Relief Wird — Asrār | 💰 قرض سے نجات کا ورد — اسرار |



### 6.32 scan-CareerTabAdvanced (6)

| English | Urdu |
|---|---|
| Career guidance data is being compiled for your profile | آپ کے پروفائل کے لیے پیشے کی رہنمائی کا ڈیٹا مرتب کیا جا رہا ہے |
| Generating PDF... | پی ڈی ایف بن رہی ہے... |
| This guidance comes from traditional Islamic texts on ʿIlm al-Ḥurūf (Science of Letters), preserved by scholars across generations. | یہ رہنمائی علم الحروف سے متعلق روایتی اسلامی کتب سے لی گئی ہے، جو نسل در نسل علماء کے ذریعے محفوظ رہی ہیں۔ |
| career paths in this category | اس زمرے میں پیشے |
| earth-based | زمین پر مبنی |
| special blessing | خاص برکت |



### 6.33 scan-PlanetOfTheDayPage (7)

| English | Urdu |
|---|---|
| Bones, teeth, joints, skin | ہڈیاں، دانت، جوڑ، جلد |
| Brain, stomach, uterus, fluids | دماغ، معدہ، رحم، رطوبتیں |
| Heart, eyes, spine | دل، آنکھیں، ریڑھ کی ہڈی |
| Kidneys, skin, throat | گردے، جلد، گلا |
| Liver, hips, thighs | جگر، کولہے، رانیں |
| Muscles, blood, head | پٹھے، خون، سر |
| Nervous system, hands, lungs | اعصابی نظام، ہاتھ، پھیپھڑے |



### 6.34 scan-DivineNameIntentionResul (4)

| English | Urdu |
|---|---|
| Neutral | غیر جانبدار |
| Not Recommended | تجویز نہیں کیا جاتا |
| Optimal | بہترین |
| Suitable | موزوں |



### 6.35 scan-GetTheAppBanner (3)

| English | Urdu |
|---|---|
| Install Asrār on your iPhone | اپنے آئی فون پر اسرار انسٹال کریں |
| Tap | ٹیپ کریں |
| then "Add to Home Screen" | پھر «ہوم اسکرین میں شامل کریں» منتخب کریں |



### 6.36 scan-DignityDetailPanel (4)

| English | Urdu |
|---|---|
| Download Asrāriya on Google Play | Google Play پر اسراریہ ڈاؤن لوڈ کریں |
| Practice Guidance | معمول کی رہنمائی |
| Practice Hint | معمول کا اشارہ |
| Retrograde — inner reflection encouraged | رجعت — اندرونی غور و فکر کی ترغیب |



### 6.37 scan-DivineNameMatchesView (3)

| English | Urdu |
|---|---|
| Needs discipline | نظم و ضبط درکار ہے |
| Strong resonance | مضبوط ہم آہنگی |
| Workable resonance | قابلِ عمل ہم آہنگی |



### 6.38 scan-WaveHadiyyaCard (3)

| English | Urdu |
|---|---|
| Hide QR Code | QR کوڈ چھپائیں |
| Scan Wave Senegal QR | Wave سینیگال کا QR اسکین کریں |
| Scan with Wave Senegal app | Wave سینیگال ایپ سے اسکین کریں |



### 6.39 scan-ProfileSetupBilingual (2)

| English | Urdu |
|---|---|
| Enter mother's name | والدہ کا نام درج کریں |
| Used for enhanced numerology calculations | بہتر علم الاعداد کے حساب کے لیے استعمال ہوتا ہے |



### 6.40 scan-DailyReflectionCard (2)

| English | Urdu |
|---|---|
| Community | برادری |
| total | کل |



### 6.41 scan-PlanetTransitCard (2)

| English | Urdu |
|---|---|
| Retrograde | رجعت |
| View | دیکھیں |



### 6.42 scan-PlanetaryHourCard (2)

| English | Urdu |
|---|---|
| Makkah (Default) | مکہ مکرمہ (طے شدہ) |
| hour | ساعت |



### 6.43 scan-PlanetOfTheDay (1)

| English | Urdu |
|---|---|
| Unable to load planetary data | سیاروں کا ڈیٹا لوڈ نہیں ہو سکا |



### 6.44 scan-ScanDatesView (2)

| English | Urdu |
|---|---|
| End date must be after start date. | اختتامی تاریخ ابتدائی تاریخ کے بعد ہونی چاہیے۔ |
| Maximum range is 12 months. | زیادہ سے زیادہ مدت 12 ماہ ہے۔ |



### 6.45 scan-RamadanHub (2)

| English | Urdu |
|---|---|
| Explore Asrar | اسرار دریافت کریں |
| Today: | آج: |



### 6.46 scan-CommunityBanner (2)

| English | Urdu |
|---|---|
| dhikr completed by the community today | آج برادری کی طرف سے مکمل کیا گیا ذکر |
| dhikr today | آج کا ذکر |



### 6.47 scan-RamadanPage (2)

| English | Urdu |
|---|---|
| Your Badges | آپ کے بیجز |
| 📿 Join me in my zikr challenges on Asrār! | 📿 اسرار پر میرے ذکر کے چیلنجز میں شامل ہوں! |



### 6.48 scan-MobileMenu (1)

| English | Urdu |
|---|---|
| Explore | دریافت کریں |



### 6.49 scan-SimplifiedStatusBadge (1)

| English | Urdu |
|---|---|
| Technical Details | تکنیکی تفصیلات |



### 6.50 scan-RamadanBannerMini (1)

| English | Urdu |
|---|---|
| community dhikr | برادری کا ذکر |



### 6.51 scan-BadgeDisplay (1)

| English | Urdu |
|---|---|
| No badges earned yet. Keep going! | ابھی تک کوئی بیج نہیں ملا۔ جاری رکھیں! |



### 6.52 scan-RecommenderBanner (1)

| English | Urdu |
|---|---|
| Add a challenge to get started | آغاز کے لیے ایک چیلنج شامل کریں |



### 6.53 zodiac-sadaqah (185)

| English | Urdu |
|---|---|
| Hot Food Sadaqah | گرم کھانے کا صدقہ |
| Giving hot, prepared food as sadaqah is a beneficial form of charity. The food can be given to children or to anyone who can benefit from it. This form of sadaqah is associated with feeding and providing nourishment. | گرم، تیار شدہ کھانا صدقے کے طور پر دینا خیرات کی ایک نفع بخش صورت ہے۔ یہ کھانا بچوں کو یا کسی بھی ایسے شخص کو دیا جا سکتا ہے جو اس سے فائدہ اٹھا سکے۔ صدقے کی یہ صورت کھانا کھلانے اور غذا مہیا کرنے سے وابستہ ہے۔ |
| Rice | چاول |
| Porridge | دلیہ |
| Other hot, nourishing meals | دیگر گرم، غذائیت بخش کھانے |
| Cold Water Sadaqah | ٹھنڈے پانی کا صدقہ |
| Giving cold water as sadaqah is another beneficial form of charity. The sadaqah specifically consists of providing cold drinking water to someone who can benefit from it. | ٹھنڈا پانی صدقے کے طور پر دینا خیرات کی ایک اور نفع بخش صورت ہے۔ اس صدقے میں خاص طور پر کسی ایسے شخص کو پینے کا ٹھنڈا پانی مہیا کیا جاتا ہے جو اس سے فائدہ اٹھا سکے۔ |
| Supporting an Athlete or Sportsman | کھلاڑی یا سپورٹس مین کی معاونت |
| Helping a sportsman or athlete can also be given as a form of sadaqah. The assistance should be given sincerely for the benefit of the person. | کسی کھلاڑی یا ایتھلیٹ کی مدد بھی صدقے کی ایک صورت کے طور پر دی جا سکتی ہے۔ یہ مدد اخلاص کے ساتھ، اس شخص کے فائدے کے لیے دی جائے۔ |
| Buying them sports equipment or supplies | انہیں کھیل کا سامان یا لوازمات خرید کر دینا |
| Helping with something needed for their training | ان کی تربیت کے لیے درکار کسی چیز میں مدد کرنا |
| Providing practical or financial assistance | عملی یا مالی معاونت فراہم کرنا |
| Encouraging and supporting them in their sporting activities | ان کی کھیل کی سرگرمیوں میں حوصلہ افزائی اور معاونت کرنا |
| A form of sadaqah associated with Ḥamal is giving livestock. The animal may be raised and cared for in the household and then given as sadaqah. | حمل سے منسوب صدقے کی ایک صورت مویشی دینا ہے۔ جانور کو گھر میں پال کر اس کی دیکھ بھال کی جا سکتی ہے اور پھر اسے صدقے کے طور پر دیا جا سکتا ہے۔ |
| A sheep | ایک بھیڑ |
| A ram | ایک مینڈھا |
| A white sheep or ram | سفید بھیڑ یا مینڈھا |
| A sheep or ram of another colour | کسی اور رنگ کی بھیڑ یا مینڈھا |
| Giving away clothing that you have personally worn — once, twice, or a small number of times. The important condition is that the clothing is still clean, usable, and in good condition. It is then given to another person who can benefit from wearing it. The emphasis is on giving clothing that has already been worn by the giver, rather than brand-new or completely unused clothing. This sadaqah is associated with protection and seeking benefit through charity. | ایسے کپڑے دینا جو آپ نے خود پہنے ہوں — ایک، دو یا چند بار۔ اہم شرط یہ ہے کہ کپڑے اب بھی صاف، قابلِ استعمال اور اچھی حالت میں ہوں۔ پھر انہیں کسی ایسے شخص کو دیا جائے جو انہیں پہن کر فائدہ اٹھا سکے۔ زور اس بات پر ہے کہ دینے والے کے پہنے ہوئے کپڑے دیے جائیں، نہ کہ بالکل نئے یا کبھی نہ پہنے ہوئے۔ یہ صدقہ حفاظت اور خیرات کے ذریعے نفع طلب کرنے سے وابستہ ہے۔ |
| Venus (al-Zuhrah / الزهرة) | زہرہ (الزهرة) |
| A primary form of sadaqah associated with al-Thawr is giving a single-coloured ram. A white ram is particularly suitable. The ram is given as sadaqah to someone who can benefit from it. | ثور سے منسوب صدقے کی ایک بنیادی صورت ایک ہی رنگ کا مینڈھا دینا ہے۔ سفید مینڈھا خاص طور پر موزوں ہے۔ مینڈھا کسی ایسے شخص کو صدقے کے طور پر دیا جاتا ہے جو اس سے فائدہ اٹھا سکے۔ |
| Giving away clothing that has already been worn, still in good and usable condition. This sadaqah is associated with protection and may be given with the intention of seeking protection through charity. | ایسے کپڑے دینا جو پہنے جا چکے ہوں مگر اب بھی اچھی اور قابلِ استعمال حالت میں ہوں۔ یہ صدقہ حفاظت سے وابستہ ہے اور خیرات کے ذریعے حفاظت کی نیت سے دیا جا سکتا ہے۔ |
| Giving things grown from the ground, particularly staple agricultural foods, directly to people in need. | زمین سے اگنے والی چیزیں، خاص طور پر بنیادی زرعی غذائیں، براہِ راست حاجت مندوں کو دینا۔ |
| Millet (dugub in Wolof) | باجرہ (وولوف میں dugub) |
| Other grains and agricultural produce | دیگر اناج اور زرعی پیداوار |
| Rice and millet may also be combined with cooking oil and given together as a food-based sadaqah package to someone or a family in need. | چاول اور باجرے کو کھانا پکانے کے تیل کے ساتھ ملا کر بھی کسی حاجت مند شخص یا خاندان کو کھانے کے ایک مجموعے کی صورت میں صدقہ کیا جا سکتا ہے۔ |
| Millet | باجرہ |
| Cooking oil | کھانا پکانے کا تیل |
| Giving water is another beneficial sadaqah for Taurus. The water is given to someone who needs or can benefit from it. | پانی دینا ثور کے لیے ایک اور نفع بخش صدقہ ہے۔ پانی ایسے شخص کو دیا جاتا ہے جسے اس کی ضرورت ہو یا جو اس سے فائدہ اٹھا سکے۔ |
| A particularly important form of sadaqah for Taurus is helping an elderly man or woman, regularly or whenever they are in need. This is regarded in the tradition as a secret sadaqah for increasing and sustaining one's provision (rizq). The emphasis is on quietly and consistently helping an elderly person without seeking recognition. | ثور کے لیے صدقے کی ایک خاص طور پر اہم صورت کسی بزرگ مرد یا خاتون کی مدد کرنا ہے، باقاعدگی سے یا جب بھی انہیں ضرورت ہو۔ اس روایت میں اسے رزق میں اضافے اور اس کے برقرار رہنے کے لیے خفیہ صدقہ سمجھا جاتا ہے۔ زور اس پر ہے کہ کسی بزرگ کی خاموشی اور تسلسل کے ساتھ، شہرت کی خواہش کے بغیر مدد کی جائے۔ |
| Financial assistance | مالی معاونت |
| Food | کھانا |
| Household necessities | گھریلو ضروریات |
| Medical or other essential expenses | علاج یا دیگر ضروری اخراجات |
| Other practical needs | دیگر عملی ضروریات |
| Friday is considered a particularly suitable day for giving Taurus-related sadaqah, connected in the tradition with Venus (al-Zuhrah), the planetary ruler of the sign. Where possible, give on Friday while maintaining the intention of sincere charity and seeking blessing, protection, and increase in provision. | جمعہ ثور سے متعلق صدقہ دینے کے لیے خاص طور پر موزوں دن سمجھا جاتا ہے، جو اس روایت میں برج کے حاکم سیارے زہرہ (الزهرة) سے جڑا ہے۔ جہاں ممکن ہو، جمعہ کے دن دیں، اور خالص خیرات کی نیت کے ساتھ برکت، حفاظت اور رزق میں اضافے کی طلب رکھیں۔ |
| A form of sadaqah associated with Jawzāʾ is giving 100 kola nuts, which are then distributed as sadaqah. | جوزا سے منسوب صدقے کی ایک صورت 100 کولا نٹ دینا ہے، جو پھر صدقے کے طور پر تقسیم کر دیے جاتے ہیں۔ |
| White kola nuts | سفید کولا نٹ |
| Red kola nuts | سرخ کولا نٹ |
| A combination of white and red kola nuts | سفید اور سرخ کولا نٹ کا امتزاج |
| Giving money as sadaqah is intended to help with the preservation and stability of wealth: giving a portion of one's wealth away so that wealth is not simply accumulated and lost or continuously spent. The amount can be according to the person's ability and circumstances. Intention: give sincerely, with the intention of helping others and seeking stability, preservation, and blessing in one's wealth. | رقم کا صدقہ دولت کی حفاظت اور استحکام میں مدد کے لیے ہے: اپنے مال کا ایک حصہ دے دیا جائے تاکہ دولت محض جمع ہو کر ضائع نہ ہو یا مسلسل خرچ نہ ہوتی رہے۔ رقم انسان کی استطاعت اور حالات کے مطابق ہو سکتی ہے۔ نیت: اخلاص کے ساتھ دیں، دوسروں کی مدد اور اپنے مال میں استحکام، حفاظت اور برکت کی طلب کے ارادے سے۔ |
| Giving a chicken of different colours, particularly a combination of black, white and red, to someone who can benefit from it. | مختلف رنگوں کی مرغی، خاص طور پر سیاہ، سفید اور سرخ کا امتزاج، کسی ایسے شخص کو دینا جو اس سے فائدہ اٹھا سکے۔ |
| Giving a guinea fowl (French: pintade) as sadaqah, distributed to someone who can benefit from it. | گنی فاؤل (فرانسیسی: پنتاد) صدقے کے طور پر دینا، جو کسی ایسے شخص کو دیا جائے جو اس سے فائدہ اٹھا سکے۔ |
| Providing educational materials is another beneficial form of sadaqah for Gemini. These materials can be given to children or students who need them for their education. | تعلیمی سامان فراہم کرنا جوزا کے لیے صدقے کی ایک اور نفع بخش صورت ہے۔ یہ سامان ان بچوں یا طلبہ کو دیا جا سکتا ہے جنہیں اپنی تعلیم کے لیے اس کی ضرورت ہو۔ |
| White writing paper | لکھنے کے سفید کاغذ |
| Exercise books | مشق کی کاپیاں |
| Notebooks | نوٹ بکس |
| Pens | قلم |
| Pencils | پنسلیں |
| Other basic school supplies | اسکول کا دیگر بنیادی سامان |
| Educational sadaqah can also be directed toward teachers, including Qur'anic teachers — helping a teacher or their students. The sadaqah can therefore benefit either the teacher or the students. | تعلیمی صدقہ اساتذہ کی طرف بھی کیا جا سکتا ہے، بشمول قرآنی اساتذہ — کسی استاد یا ان کے شاگردوں کی مدد۔ یوں یہ صدقہ استاد کو بھی فائدہ دے سکتا ہے اور شاگردوں کو بھی۔ |
| Books | کتابیں |
| Writing materials | لکھنے کا سامان |
| Educational resources | تعلیمی وسائل |
| Other materials needed for teaching and learning | تدریس اور تعلیم کے لیے درکار دیگر سامان |
| Food can be prepared or purchased and given directly to children who can benefit from it. The intention is to provide nourishment and assistance through sadaqah. | کھانا تیار کر کے یا خرید کر براہِ راست ان بچوں کو دیا جا سکتا ہے جو اس سے فائدہ اٹھا سکیں۔ نیت یہ ہے کہ صدقے کے ذریعے غذا اور مدد پہنچائی جائے۔ |
| A form of sadaqah associated with Saraṭān is giving salt according to one's current age — the amount in kilograms matching the person's age (age 25 → 25 kg, age 30 → 30 kg, age 40 → 40 kg). The amount is weighed according to the person's age and then given out as sadaqah. This may be performed yearly, using the person's age at that time. | سرطان سے منسوب صدقے کی ایک صورت اپنی موجودہ عمر کے مطابق نمک دینا ہے — کلوگرام میں مقدار شخص کی عمر کے برابر (عمر 25 سال ہو تو 25 کلو، 30 ہو تو 30 کلو، 40 ہو تو 40 کلو)۔ نمک کو عمر کے حساب سے تولا جاتا ہے اور پھر صدقے کے طور پر تقسیم کر دیا جاتا ہے۔ یہ ہر سال، اس وقت کی عمر کے مطابق کیا جا سکتا ہے۔ |
| Giving 4 kg of meat — beef or another type — out as sadaqah to people who can benefit from it. | 4 کلو گوشت — گائے کا یا کسی اور قسم کا — ایسے لوگوں کو صدقے کے طور پر دینا جو اس سے فائدہ اٹھا سکیں۔ |
| Regularly helping a family in need. The support can be given from time to time, according to the family's needs and one's ability to help. | کسی ضرورت مند خاندان کی باقاعدگی سے مدد کرنا۔ یہ مدد وقتاً فوقتاً، خاندان کی ضرورت اور اپنی استطاعت کے مطابق دی جا سکتی ہے۔ |
| Helping with food expenses | کھانے کے اخراجات میں مدد کرنا |
| Paying for fish or other food | مچھلی یا دیگر کھانے کی قیمت ادا کرنا |
| Helping with household expenses | گھریلو اخراجات میں مدد کرنا |
| Providing financial assistance when needed | ضرورت پڑنے پر مالی معاونت فراہم کرنا |
| Providing financial assistance to an elderly woman in need. The intention is to assist and ease her difficulties through sadaqah. | کسی ضرورت مند بزرگ خاتون کو مالی معاونت دینا۔ نیت یہ ہے کہ صدقے کے ذریعے ان کی مدد اور ان کی مشکلات میں آسانی کی جائے۔ |
| Giving her money | انہیں رقم دینا |
| Helping with essential expenses | ضروری اخراجات میں مدد کرنا |
| Providing regular or occasional financial support | باقاعدہ یا کبھی کبھار مالی معاونت فراہم کرنا |
| Giving milk to children as sadaqah to provide nourishment and benefit. | بچوں کو دودھ صدقے کے طور پر دینا تاکہ انہیں غذا اور فائدہ پہنچے۔ |
| A small bottle of milk | دودھ کی ایک چھوٹی بوتل |
| A larger quantity of milk | دودھ کی زیادہ مقدار |
| Any suitable milk that can be given to children | بچوں کو دیا جا سکنے والا کوئی بھی مناسب دودھ |
| A primary form of sadaqah associated with al-Asad is to raise a ram, particularly a white ram: obtain it, keep it in an appropriate place at home or elsewhere, feed and care for it, and allow it to grow until it reaches a suitable mature stage. It is then slaughtered as sadaqah, the meat divided into portions and distributed to people who can benefit from it. Within this tradition, there is an observation that some Leo individuals may find the ram does not survive long enough to reach maturity, traditionally attributed to the heaviness of the zodiac. If the ram survives and reaches the appropriate mature stage, it can then be given as sadaqah. | اسد سے منسوب صدقے کی ایک بنیادی صورت مینڈھا، خاص طور پر سفید مینڈھا، پالنا ہے: اسے حاصل کیا جائے، گھر میں یا کسی اور مناسب جگہ رکھا جائے، اسے کھلایا اور اس کی دیکھ بھال کی جائے، اور اسے بڑھنے دیا جائے یہاں تک کہ وہ مناسب پختہ عمر کو پہنچ جائے۔ پھر اسے صدقے کے طور پر ذبح کیا جائے، گوشت کے حصے بنا کر ایسے لوگوں میں تقسیم کیے جائیں جو اس سے فائدہ اٹھا سکیں۔ اس روایت میں یہ مشاہدہ بھی بیان ہوتا ہے کہ بعض اسد والوں کا مینڈھا پختہ عمر کو پہنچنے تک زندہ نہیں رہتا، جسے روایتی طور پر برج کے بھاری پن سے منسوب کیا جاتا ہے۔ اگر مینڈھا زندہ رہے اور مناسب پختہ عمر کو پہنچ جائے تو اسے صدقے کے طور پر دیا جا سکتا ہے۔ |
| Preparing three bowls of Cheb Yap — a Senegalese rice dish made with meat, similar to meat-based jollof rice — and giving the prepared food as sadaqah to people who can benefit from it. | گوشت کے ساتھ تیار ہونے والے سینیگالی چاول کے پکوان چیب یاپ — جو گوشت والے جولوف چاول سے ملتا جلتا ہے — کے تین پیالے تیار کر کے وہ کھانا ایسے لوگوں کو صدقے کے طور پر دینا جو اس سے فائدہ اٹھا سکیں۔ |
| Preparing three bowls of porridge with a sour or fermented dairy component such as yogurt, and distributing them to people as sadaqah. | دہی جیسے کھٹے یا خمیر شدہ دودھ والے جزو کے ساتھ دلیے کے تین پیالے تیار کر کے لوگوں میں صدقے کے طور پر تقسیم کرنا۔ |
| White ram — raised to maturity, then slaughtered, divided and distributed | سفید مینڈھا — پال کر پختہ عمر تک پہنچایا جائے، پھر ذبح کر کے حصوں میں بانٹا اور تقسیم کیا جائے |
| 3 bowls of Cheb Yap | چیب یاپ کے 3 پیالے |
| 3 bowls of porridge with yogurt | دہی والے دلیے کے 3 پیالے |
| A primary form of sadaqah associated with al-Sunbula is giving 100 kola nuts, a mixture of red and white, mixed together and distributed as sadaqah. | سنبلہ سے منسوب صدقے کی ایک بنیادی صورت 100 کولا نٹ دینا ہے، سرخ اور سفید ملے ہوئے، جو آپس میں ملا کر صدقے کے طور پر تقسیم کیے جاتے ہیں۔ |
| Giving money as sadaqah, according to the person's ability and circumstances, sincerely to someone who can benefit from it. | اپنی استطاعت اور حالات کے مطابق رقم اخلاص کے ساتھ کسی ایسے شخص کو صدقے کے طور پر دینا جو اس سے فائدہ اٹھا سکے۔ |
| Giving three different types of cereal together as sadaqah to people or families who can benefit from them. | تین مختلف قسم کے اناج ایک ساتھ ان لوگوں یا خاندانوں کو صدقے کے طور پر دینا جو ان سے فائدہ اٹھا سکیں۔ |
| Bessi — a Wolof cereal/grain similar to millet | بیسی — وولوف کا ایک اناج جو باجرے سے ملتا جلتا ہے |
| A particularly important secret sadaqah associated with Virgo is performed on reaching the age of 40: give 40 metres of kafan cloth (the white cloth used to shroud a deceased Muslim before burial) as sadaqah. Obtain the 40 metres, keep the cloth in the house overnight, then the following day divide it into portions of 7 metres each and distribute the portions as sadaqah. | سنبلہ سے وابستہ ایک خاص طور پر اہم خفیہ صدقہ چالیس سال کی عمر کو پہنچنے پر کیا جاتا ہے: 40 میٹر کفن کا کپڑا (وہ سفید کپڑا جس میں فوت شدہ مسلمان کو دفن سے پہلے لپیٹا جاتا ہے) صدقے کے طور پر دیں۔ 40 میٹر حاصل کریں، کپڑا رات بھر گھر میں رکھیں، پھر اگلے دن اسے 7، 7 میٹر کے حصوں میں بانٹ کر یہ حصے صدقے کے طور پر تقسیم کر دیں۔ |
| 100 kola nuts — red and white mixed together | 100 کولا نٹ — سرخ اور سفید ملے ہوئے |
| Money | رقم |
| Three cereals — millet, rice, and Bessi | تین اناج — باجرہ، چاول اور بیسی |
| At age 40: 40 metres of kafan cloth, kept overnight then divided into 7-metre portions | چالیس سال کی عمر میں: 40 میٹر کفن کا کپڑا، رات بھر رکھ کر 7 میٹر کے حصوں میں تقسیم |
| Giving seven portions of yogurt — small bags, sachets, or small containers. The portions do not need to be large; seven separate portions are the important part. The yogurt is distributed as sadaqah to people who can benefit from it. | دہی کے سات حصے دینا — چھوٹی تھیلیاں، ساشے یا چھوٹے ڈبے۔ حصے بڑے ہونا ضروری نہیں؛ اصل بات سات الگ الگ حصے ہیں۔ دہی ایسے لوگوں میں صدقے کے طور پر تقسیم کیا جاتا ہے جو اس سے فائدہ اٹھا سکیں۔ |
| Giving guinea fowl (pintade) as sadaqah to someone who can benefit from it. | گنی فاؤل (پنتاد) کسی ایسے شخص کو صدقے کے طور پر دینا جو اس سے فائدہ اٹھا سکے۔ |
| Giving three chickens of different colours — black, white and red — out as sadaqah. | مختلف رنگوں کی تین مرغیاں — سیاہ، سفید اور سرخ — صدقے کے طور پر دینا۔ |
| Because Libra is traditionally associated with Venus (al-Zuhrah), days may be selected when the planetary condition is favourable. Friday is preferred when Venus is favourable; Thursday may also be used when conditions are favourable. | چونکہ میزان روایتی طور پر زہرہ (الزهرة) سے منسوب ہے، اس لیے ایسے دن چنے جا سکتے ہیں جب سیارے کی حالت موافق ہو۔ جب زہرہ موافق ہو تو جمعہ کو ترجیح دی جاتی ہے؛ حالات موافق ہوں تو جمعرات بھی اختیار کی جا سکتی ہے۔ |
| 7 portions of yogurt — even small sachets | دہی کے 7 حصے — چھوٹی ساشے بھی چلیں گی |
| Guinea fowl (pintade) | گنی فاؤل (پنتاد) |
| 3 chickens — black, white and red | 3 مرغیاں — سیاہ، سفید اور سرخ |
| Preferred day: Friday when favourable; alternative: Thursday | ترجیحی دن: موافق ہونے پر جمعہ؛ متبادل: جمعرات |
| Mars (al-Mirrīkh / المريخ) | مریخ (المریخ) |
| A special form of sadaqah associated with Scorpio is having or giving a good protective ring, with stones such as rose agate or amethyst. The ring is regarded within this tradition as having protective and beneficial qualities and is also considered part of the sadaqah practice for Scorpio. | عقرب سے منسوب صدقے کی ایک خاص صورت ایک اچھی حفاظتی انگوٹھی رکھنا یا دینا ہے، جس میں گلابی عقیق یا جمشت (ایمتھسٹ) جیسے پتھر ہوں۔ اس روایت میں انگوٹھی کو حفاظتی اور نفع بخش خصوصیات والی سمجھا جاتا ہے اور اسے عقرب کے صدقے کے عمل کا حصہ بھی مانا جاتا ہے۔ |
| Giving a white ram or white sheep, particularly associated with favourable conditions involving Mars. | سفید مینڈھا یا سفید بھیڑ دینا، جو خاص طور پر مریخ سے متعلق موافق حالات سے منسوب ہے۔ |
| When Mars is transiting a favourable or friendly zodiac sign, such as Aries, a red goat may be given as sadaqah. The goat is prepared and its meat divided into portions, distributed among people who can benefit from it until the meat has been given out. The emphasis is on distributing the meat, rather than keeping it for personal consumption. | جب مریخ کسی موافق یا دوست برج، جیسے حمل، سے گزر رہا ہو تو سرخ بکرا صدقے کے طور پر دیا جا سکتا ہے۔ بکرا تیار کیا جاتا ہے اور اس کا گوشت حصوں میں بانٹ کر ایسے لوگوں میں تقسیم کیا جاتا ہے جو اس سے فائدہ اٹھا سکیں، یہاں تک کہ سارا گوشت بٹ جائے۔ زور گوشت کی تقسیم پر ہے، اسے ذاتی استعمال کے لیے رکھنے پر نہیں۔ |
| Giving water is an important sadaqah for Scorpio, particularly to sick or hospitalised people — for example taking drinking water to a hospital and giving it freely to patients who need it. This form is especially associated with Scorpio when beginning a new project or undertaking a journey. | پانی دینا عقرب کے لیے ایک اہم صدقہ ہے، خاص طور پر بیماروں یا ہسپتال میں داخل لوگوں کو — مثلاً پینے کا پانی ہسپتال لے جا کر ضرورت مند مریضوں کو بلا معاوضہ دینا۔ یہ صورت خاص طور پر عقرب سے اس وقت وابستہ ہے جب کوئی نیا منصوبہ شروع کیا جائے یا سفر اختیار کیا جائے۔ |
| Giving rice and fish together as a single sadaqah, both uncooked (raw), distributed to people or families who can benefit from them. | چاول اور مچھلی کو ایک ہی صدقے کے طور پر اکٹھے دینا، دونوں کچے (بغیر پکے)، ان لوگوں یا خاندانوں میں تقسیم کیے جائیں جو ان سے فائدہ اٹھا سکیں۔ |
| Tuesday is particularly associated with Scorpio because of its connection with Mars, the planetary ruler of the sign, and can be chosen when Mars is in a favourable or neutral transit. Sunday may also be considered, particularly when the Sun is in a favourable condition. The planetary condition should be considered when selecting the timing according to the tradition. | منگل مریخ، جو برج کا حاکم سیارہ ہے، سے تعلق کی وجہ سے خاص طور پر عقرب سے وابستہ ہے، اور اس وقت چنا جا سکتا ہے جب مریخ موافق یا معتدل گزر میں ہو۔ اتوار پر بھی غور کیا جا سکتا ہے، خاص طور پر جب شمس موافق حالت میں ہو۔ روایت کے مطابق وقت کے انتخاب میں سیارے کی حالت کو پیشِ نظر رکھنا چاہیے۔ |
| Protective ring — rose agate or amethyst | حفاظتی انگوٹھی — گلابی عقیق یا جمشت |
| White ram or sheep | سفید مینڈھا یا بھیڑ |
| Red goat — during a favourable Mars transit; meat divided and distributed | سرخ بکرا — مریخ کے موافق گزر کے دوران؛ گوشت حصوں میں بانٹ کر تقسیم |
| Water — especially to sick or hospitalised people | پانی — خاص طور پر بیماروں یا ہسپتال میں داخل لوگوں کو |
| Rice and fish — given together, uncooked | چاول اور مچھلی — اکٹھے، کچے |
| Preferred day: Tuesday when Mars is favourable or neutral; alternative: Sunday when the Sun is favourable | ترجیحی دن: منگل جب مریخ موافق یا معتدل ہو؛ متبادل: اتوار جب شمس موافق ہو |
| Special occasions: beginning a project or travelling | خاص مواقع: کسی منصوبے کا آغاز یا سفر |
| Sagittarius is considered a sign for which sadaqah is particularly important and should be given regularly. Unlike some signs that have specific items associated with their sadaqah, Sagittarius has a more open form: a person may give whatever they sincerely wish to give, provided it benefits another person. | قوس کو ایسا برج سمجھا جاتا ہے جس کے لیے صدقہ خاص طور پر اہم ہے اور باقاعدگی سے دیا جانا چاہیے۔ بعض برجوں کے برعکس، جن کے صدقے سے مخصوص اشیا وابستہ ہیں، قوس کی صورت زیادہ کھلی ہے: انسان جو کچھ اخلاص کے ساتھ دینا چاہے دے سکتا ہے، بشرطیکہ اس سے کسی دوسرے کو فائدہ پہنچے۔ |
| Giving nine pieces of bread, distributed to people who are in need or to anyone who can benefit from it. | روٹی کے نو ٹکڑے دینا، ضرورت مند لوگوں میں یا کسی بھی ایسے شخص کو جو اس سے فائدہ اٹھا سکے۔ |
| Preparing three bowls of laakh — a Wolof-style porridge traditionally prepared with a fermented or sour dairy component such as yogurt — and giving them to people who can benefit from the food. | لاخ — وولوف طرز کا دلیہ جو روایتی طور پر دہی جیسے خمیر شدہ یا کھٹے دودھ والے جزو کے ساتھ تیار کیا جاتا ہے — کے تین پیالے تیار کر کے ایسے لوگوں کو دینا جو اس کھانے سے فائدہ اٹھا سکیں۔ |
| Giving a single-coloured ram, particularly a white ram, as sadaqah to someone who can benefit from it. | ایک ہی رنگ کا مینڈھا، خاص طور پر سفید مینڈھا، کسی ایسے شخص کو صدقے کے طور پر دینا جو اس سے فائدہ اٹھا سکے۔ |
| Sagittarius has a broad range of possible sadaqah. A person may give whatever they are able and willing to give. The important principle is to give sincerely and for the benefit of another person. | قوس کے لیے صدقے کی صورتیں وسیع ہیں۔ انسان جو کچھ دینے کی استطاعت اور آمادگی رکھتا ہو دے سکتا ہے۔ بنیادی اصول یہ ہے کہ اخلاص کے ساتھ اور کسی دوسرے کے فائدے کے لیے دیا جائے۔ |
| Clothing | کپڑے |
| Animals | جانور |
| Assistance to people in need | حاجت مندوں کی مدد |
| Other beneficial forms of charity | خیرات کی دیگر نفع بخش صورتیں |
| Thursday is considered a particularly suitable day for giving Sagittarius-related sadaqah. Where possible, give on Thursday while maintaining the intention of sincere charity and seeking blessing and ease. | جمعرات کو قوس سے متعلق صدقہ دینے کے لیے خاص طور پر موزوں دن سمجھا جاتا ہے۔ جہاں ممکن ہو، جمعرات کو دیں، اور خالص خیرات کی نیت کے ساتھ برکت اور آسانی کی طلب رکھیں۔ |
| 9 pieces of bread | روٹی کے 9 ٹکڑے |
| 3 bowls of laakh with yogurt | دہی والے لاخ کے 3 پیالے |
| One-coloured white ram | ایک رنگ کا سفید مینڈھا |
| Any sincere and beneficial sadaqah | کوئی بھی مخلصانہ اور نفع بخش صدقہ |
| Recommended day: Thursday | تجویز کردہ دن: جمعرات |
| Sagittarius is traditionally regarded as a sign that benefits from frequent and generous sadaqah, so regular charity is emphasised | قوس کو روایتی طور پر ایسا برج مانا جاتا ہے جسے کثرت اور فراخی سے صدقہ دینے سے فائدہ ہوتا ہے، اس لیے باقاعدہ خیرات پر زور دیا جاتا ہے |
| Giving rice and millet according to measurements connected to the person's age and body weight: rice in kilograms corresponding to the person's age, millet in kilograms corresponding to the person's body weight. The rice and millet may be distributed little by little until the entire amount has been given out, to individuals, families, or people in need. | چاول اور باجرہ شخص کی عمر اور جسمانی وزن سے متعلق پیمانوں کے مطابق دینا: چاول کلوگرام میں شخص کی عمر کے برابر، باجرہ کلوگرام میں شخص کے جسمانی وزن کے برابر۔ چاول اور باجرہ تھوڑا تھوڑا کر کے اس وقت تک تقسیم کیا جا سکتا ہے جب تک پوری مقدار نہ بٹ جائے، افراد، خاندانوں یا حاجت مندوں میں۔ |
| Giving a single-coloured ram, a white ram particularly associated with this sadaqah. This is described in the tradition as a particularly powerful sadaqah, and some people who follow this practice may experience it symbolically through dreams, such as dreaming that they are giving away a ram. | ایک ہی رنگ کا مینڈھا دینا، خاص طور پر سفید مینڈھا جو اس صدقے سے وابستہ ہے۔ روایت میں اسے ایک خاص طور پر طاقتور صدقہ بتایا گیا ہے، اور اس عمل پر چلنے والے بعض لوگ اسے علامتی طور پر خوابوں میں دیکھ سکتے ہیں، مثلاً یہ خواب کہ وہ مینڈھا صدقہ کر رہے ہیں۔ |
| Giving kafan, the white cloth used to shroud a deceased Muslim before burial. The sadaqah may consist of providing the cloth needed for someone's burial. | کفن دینا، وہ سفید کپڑا جس میں فوت شدہ مسلمان کو دفن سے پہلے لپیٹا جاتا ہے۔ اس صدقے میں کسی کی تدفین کے لیے درکار کپڑا فراہم کرنا شامل ہو سکتا ہے۔ |
| A family preparing for a burial | تدفین کی تیاری کرنے والا خاندان |
| A mosque or community | کوئی مسجد یا برادری |
| Someone who cannot afford the burial shroud | کوئی ایسا شخص جو کفن کی استطاعت نہ رکھتا ہو |
| People responsible for assisting with funeral arrangements | جنازے کے انتظامات میں مدد کے ذمہ دار افراد |
| Giving cowries, known in Wolof as petaw — the small white cowrie shells traditionally used for decoration and in various cultural and spiritual practices. This form of sadaqah is considered special and sensitive within the tradition. | کوڑیاں دینا، جنہیں وولوف میں پیتاو (petaw) کہا جاتا ہے — چھوٹی سفید کوڑیاں جو روایتی طور پر زیبائش اور مختلف ثقافتی اور روحانی رسوم میں استعمال ہوتی رہی ہیں۔ اس روایت میں صدقے کی یہ صورت خاص اور نازک سمجھی جاتی ہے۔ |
| Helping workers and labourers, particularly people earning a modest income through physically demanding or low-skilled work. The person does not necessarily have to be extremely poor; the sadaqah can simply be an act of assistance and support for someone whose income is limited. | مزدوروں اور محنت کشوں کی مدد، خاص طور پر ان لوگوں کی جو جسمانی مشقت یا کم ہنر والے کام سے معمولی آمدنی کماتے ہیں۔ ضروری نہیں کہ وہ شخص انتہائی غریب ہو؛ یہ صدقہ محض ایسے شخص کی مدد اور معاونت ہو سکتا ہے جس کی آمدنی محدود ہو۔ |
| Labourers | مزدور |
| Casual workers | یومیہ اجرت پر کام کرنے والے |
| Construction workers | تعمیراتی کارکن |
| Cleaners | صفائی کا کام کرنے والے |
| Other low-income workers | دیگر کم آمدنی والے کارکن |
| The assistance can be given regularly or whenever the family needs support. This is regarded as a particularly meaningful form of sadaqah because it supports both the widow and the children who depend on her. | یہ مدد باقاعدگی سے یا جب بھی خاندان کو سہارے کی ضرورت ہو دی جا سکتی ہے۔ اسے صدقے کی خاص طور پر بامعنی صورت مانا جاتا ہے کیونکہ اس سے بیوہ اور اس پر انحصار کرنے والے بچے، دونوں کو سہارا ملتا ہے۔ |
| Financial assistance for the widow | بیوہ کے لیے مالی معاونت |
| Providing food or household necessities | کھانا یا گھریلو ضروریات فراہم کرنا |
| Helping with children's expenses | بچوں کے اخراجات میں مدد کرنا |
| Supporting their education | ان کی تعلیم میں معاونت کرنا |
| Assisting with other essential needs | دیگر ضروری حاجات میں مدد کرنا |
| Important Guidance — Cowries / Petaw | اہم رہنمائی — کوڑیاں / پیتاو |
| Anyone intending to give petaw/cowries as sadaqah should seek guidance from a knowledgeable and trusted spiritual authority who understands the practice. According to the tradition being documented, this sadaqah may be considered capable of helping to open pathways and make matters easier, but it should not be undertaken casually. The practice is therefore regarded as one requiring proper guidance and understanding before giving it as sadaqah. | جو شخص کوڑیاں / پیتاو صدقے کے طور پر دینے کا ارادہ رکھتا ہو اسے کسی ایسے جاننے والے اور قابلِ اعتماد روحانی رہنما سے رہنمائی لینی چاہیے جو اس عمل کو سمجھتا ہو۔ جس روایت کو یہاں قلم بند کیا گیا ہے اس کے مطابق، اس صدقے کو راستے کھولنے اور معاملات آسان کرنے میں معاون سمجھا جا سکتا ہے، مگر اسے یونہی بے پروائی سے اختیار نہیں کرنا چاہیے۔ اس لیے اسے صدقے کے طور پر دینے سے پہلے مناسب رہنمائی اور فہم کا طلب گار عمل مانا جاتا ہے۔ |
| Rice and millet | چاول اور باجرہ |
| A white, single-coloured ram | ایک سفید، یک رنگ مینڈھا |
| Kafan (burial shroud) | کفن (تدفین کا کپڑا) |
| Cowries / petaw, with proper guidance | کوڑیاں / پیتاو، مناسب رہنمائی کے ساتھ |
| Helping labourers and low-income workers | مزدوروں اور کم آمدنی والے کارکنوں کی مدد |
| Supporting widows and their children | بیواؤں اور ان کے بچوں کی معاونت |
| The practices above are regarded within this tradition as forms of secret or special sadaqah for Capricorn. The sadaqah should be given discreetly and sincerely, with the intention of benefiting another person rather than seeking recognition. | اس روایت میں مذکورہ اعمال کو جدی کے لیے خفیہ یا خاص صدقے کی صورتیں مانا جاتا ہے۔ صدقہ رازداری اور اخلاص کے ساتھ دیا جائے، اس نیت سے کہ کسی دوسرے کو فائدہ پہنچے، نہ کہ شہرت کی طلب میں۔ |
| A primary form of sadaqah associated with al-Dalw is giving 100 kola nuts — white, red, or a combination. This sadaqah can be performed monthly, or every three months. The 100 kola nuts are then distributed as sadaqah. | دلو سے منسوب صدقے کی ایک بنیادی صورت 100 کولا نٹ دینا ہے — سفید، سرخ یا ان کا امتزاج۔ یہ صدقہ ماہانہ یا ہر تین ماہ بعد کیا جا سکتا ہے۔ پھر 100 کولا نٹ صدقے کے طور پر تقسیم کر دیے جاتے ہیں۔ |
| The amount can be determined according to one's ability and circumstances. The money should be given sincerely to someone or a cause that can benefit from it. | رقم کی مقدار اپنی استطاعت اور حالات کے مطابق طے کی جا سکتی ہے۔ رقم اخلاص کے ساتھ کسی ایسے شخص یا مقصد کو دی جائے جو اس سے فائدہ اٹھا سکے۔ |
| Helping a community, group, or voluntary organisation. Support may be financial, material, or practical. | کسی برادری، گروہ یا رضاکار تنظیم کی مدد۔ معاونت مالی، مادی یا عملی ہو سکتی ہے۔ |
| A local community | کوئی مقامی برادری |
| A voluntary group | کوئی رضاکار گروہ |
| A charitable group | کوئی فلاحی گروہ |
| A masjid | کوئی مسجد |
| A community project | کوئی اجتماعی منصوبہ |
| A group serving people in need | حاجت مندوں کی خدمت کرنے والا کوئی گروہ |
| Giving guinea fowl (pintade) or chicken as sadaqah to someone who can benefit from it. | گنی فاؤل (پنتاد) یا مرغی کسی ایسے شخص کو صدقے کے طور پر دینا جو اس سے فائدہ اٹھا سکے۔ |
| Giving three chickens of different colours — black, red and white — out as sadaqah. | مختلف رنگوں کی تین مرغیاں — سیاہ، سرخ اور سفید — صدقے کے طور پر دینا۔ |
| Giving water to someone who needs or can benefit from it. | ایسے شخص کو پانی دینا جسے اس کی ضرورت ہو یا جو اس سے فائدہ اٹھا سکے۔ |
| 100 kola nuts — white, red, or a combination; monthly or every three months | 100 کولا نٹ — سفید، سرخ یا ان کا امتزاج؛ ماہانہ یا ہر تین ماہ بعد |
| Money — according to one's ability | رقم — اپنی استطاعت کے مطابق |
| Community or group support — a voluntary group, community, masjid, or similar organisation | برادری یا گروہ کی معاونت — رضاکار گروہ، برادری، مسجد یا اسی طرح کی کوئی تنظیم |
| Guinea fowl (pintade) or chicken | گنی فاؤل (پنتاد) یا مرغی |
| Three-coloured chickens — black, red and white | تین رنگوں کی مرغیاں — سیاہ، سرخ اور سفید |
| A primary form of sadaqah associated with al-Ḥūt is giving fish. A particularly recommended amount is 12 fish, given as sadaqah to people who can benefit from them. | حوت سے منسوب صدقے کی ایک بنیادی صورت مچھلی دینا ہے۔ خاص طور پر تجویز کردہ مقدار 12 مچھلیاں ہے، جو ایسے لوگوں کو صدقے کے طور پر دی جائیں جو ان سے فائدہ اٹھا سکیں۔ |
| This may be performed when a person has an important project or undertaking: take seven chickens, prepare and cook them, and distribute the prepared food as sadaqah — giving it to people in need, such as a poor family, and continuing until the food has been completely given out. The purpose is to provide food and benefit to people who are in need. | یہ اس وقت کیا جا سکتا ہے جب کسی شخص کے سامنے کوئی اہم منصوبہ یا کام ہو: سات مرغیاں لے کر انہیں تیار کر کے پکائیں اور پکا ہوا کھانا صدقے کے طور پر تقسیم کریں — ضرورت مندوں، مثلاً کسی غریب خاندان کو، دیں اور اس وقت تک جاری رکھیں جب تک کھانا مکمل طور پر بٹ نہ جائے۔ مقصد ضرورت مند لوگوں کو غذا اور فائدہ پہنچانا ہے۔ |
| The food sadaqah may particularly be given in the evening, around the time when people would normally have dinner, an evening meal, or tea or other evening refreshments. The food should be distributed to people who can benefit from it, especially those experiencing financial hardship or food insecurity. | کھانے کا صدقہ خاص طور پر شام کے وقت دیا جا سکتا ہے، اس وقت جب لوگ عام طور پر رات کا کھانا، شام کا کھانا یا چائے اور دیگر شام کی تواضع لیتے ہیں۔ کھانا ایسے لوگوں میں تقسیم کیا جائے جو اس سے فائدہ اٹھا سکیں، خاص طور پر وہ جو مالی تنگی یا خوراک کی عدم دستیابی کا سامنا کر رہے ہوں۔ |
| Helping someone experiencing mental or emotional difficulties. The intention is to reduce their hardship and provide compassionate assistance. | کسی ایسے شخص کی مدد کرنا جو ذہنی یا جذباتی مشکلات کا سامنا کر رہا ہو۔ نیت یہ ہے کہ اس کی تکلیف کم ہو اور ہمدردانہ مدد فراہم کی جائے۔ |
| Providing financial assistance | مالی معاونت فراہم کرنا |
| Helping with their basic needs | ان کی بنیادی ضروریات میں مدد کرنا |
| Supporting them during a difficult period | مشکل وقت میں ان کا ساتھ دینا |
| Offering practical assistance | عملی مدد پیش کرنا |
| Helping them access appropriate support | مناسب مدد تک رسائی میں ان کی معاونت کرنا |
| Helping a person who is engaged in spiritual or religious activity. Assistance may be financial or practical, depending on the person's needs. | کسی ایسے شخص کی مدد کرنا جو روحانی یا دینی سرگرمی میں مصروف ہو۔ مدد مالی یا عملی ہو سکتی ہے، شخص کی ضرورت کے مطابق۔ |
| A spiritual practitioner | کوئی روحانی ریاضت کرنے والا |
| A person engaged in religious study or service | دینی تعلیم یا خدمت میں مصروف کوئی شخص |
| Someone involved in spiritual activities | روحانی سرگرمیوں میں شریک کوئی شخص |
| Someone who provides spiritual guidance or related services | روحانی رہنمائی یا اس سے متعلق خدمات فراہم کرنے والا کوئی شخص |
| The sadaqah should be given sincerely for the benefit of others. The food, fish, or other assistance is distributed to people who can genuinely benefit from it, particularly those experiencing poverty or hardship. | صدقہ دوسروں کے فائدے کے لیے اخلاص کے ساتھ دیا جائے۔ کھانا، مچھلی یا دیگر مدد ایسے لوگوں میں تقسیم کی جائے جو واقعی اس سے فائدہ اٹھا سکیں، خاص طور پر وہ جو غربت یا تنگی کا سامنا کر رہے ہوں۔ |



### 6.54 spiritual-practice (45)

| English | Urdu |
|---|---|
| Aries (Al-Hamal) - The Ram | حمل (الحمل) — مینڈھا |
| Taurus (Al-Thawr) - The Bull | ثور (الثور) — بیل |
| Gemini (Al-Jawzāʾ) - The Twins | جوزا (الجوزاء) — جڑواں |
| Cancer (Al-Saraṭān) - The Crab | سرطان (السرطان) — کیکڑا |
| Leo (Al-Asad) - The Lion | اسد (الأسد) — شیر |
| Virgo (Al-Sunbulah) - The Maiden | سنبلہ (السنبلة) — کنواری |
| Libra (Al-Mīzān) - The Balance | میزان (الميزان) — ترازو |
| Scorpio (Al-ʿAqrab) - The Scorpion | عقرب (العقرب) — بچھو |
| Sagittarius (Al-Qaws) - The Archer | قوس (القوس) — تیرانداز |
| Capricorn (Al-Jady) - The Goat | جدی (الجدي) — بکرا |
| Aquarius (Al-Dalw) - The Water Bearer | دلو (الدلو) — پانی اٹھانے والا |
| Pisces (Al-Ḥūt) - The Fish | حوت (الحوت) — مچھلی |
| Associated with Prophet Musa (Moses) | حضرت موسیٰ علیہ السلام سے منسوب |
| Tuesday during the day, OR Thursday midnight, OR Sunday midnight | منگل کو دن میں، یا جمعرات کی آدھی رات، یا اتوار کی آدھی رات |
| Friday, OR Sunday night (Monday night) | جمعہ، یا اتوار کی رات (پیر کی رات) |
| Wednesday, OR Monday night (Sunday night), OR Friday night (Thursday midnight) | بدھ، یا پیر کی رات (اتوار کی رات)، یا جمعہ کی رات (جمعرات کی آدھی رات) |
| Monday during the day, OR Thursday midnight (Friday night) | پیر کو دن میں، یا جمعرات کی آدھی رات (جمعہ کی رات) |
| Sunday during the day, OR Sunday night (midnight/before Fajr), OR Thursday night (midnight/before Fajr) | اتوار کو دن میں، یا اتوار کی رات (آدھی رات / فجر سے پہلے)، یا جمعرات کی رات (آدھی رات / فجر سے پہلے) |
| Wednesday during the day, OR Sunday night (Mercury's night) | بدھ کو دن میں، یا اتوار کی رات (عطارد کی رات) |
| Tuesday night | منگل کی رات |
| Friday during the day, OR Tuesday night (Venus's night), after Isha when the air is still and receptive | جمعہ کو دن میں، یا منگل کی رات (زہرہ کی رات)، عشاء کے بعد جب ہوا ساکن اور قبولیت والی ہو |
| Saturday night | ہفتہ کی رات |
| Deep night hours, after midnight for maximum depth | رات کے گہرے پہر، زیادہ گہرائی کے لیے آدھی رات کے بعد |
| Thursday, OR Thursday night, OR Sunday midnight (Monday night) | جمعرات، یا جمعرات کی رات، یا اتوار کی آدھی رات (پیر کی رات) |
| After Isha prayer | عشاء کی نماز کے بعد |
| Saturday during the day, OR Wednesday night (Saturn's night), after Isha prayer | ہفتہ کو دن میں، یا بدھ کی رات (زحل کی رات)، عشاء کی نماز کے بعد |
| Monday night | پیر کی رات |
| Thursday during the day, OR Monday night (Jupiter's night), after Isha prayer in the last third of night for deeper connection | جمعرات کو دن میں، یا پیر کی رات (مشتری کی رات)، عشاء کی نماز کے بعد، رات کے آخری تہائی حصے میں گہرے ربط کے لیے |
| Perform wudu with conscious breathing and presence | شعوری سانس اور حضورِ قلب کے ساتھ وضو کریں |
| Find a quiet, airy space with good ventilation if possible | ممکن ہو تو کوئی پرسکون، ہوا دار جگہ تلاش کریں جہاں ہوا کا اچھا گزر ہو |
| Face Qibla direction for spiritual alignment | روحانی یکسوئی کے لیے قبلہ رخ ہوں |
| Begin with Bismillah and send blessings upon Prophet Muhammad ﷺ | بسم اللہ سے آغاز کریں اور نبی کریم ﷺ پر درود بھیجیں |
| Take deep, calming breaths to center yourself | خود کو یکسو کرنے کے لیے گہری، پرسکون سانسیں لیں |
| For Istikhara: state your question and seek divine guidance | استخارہ کے لیے: اپنا سوال بیان کریں اور اللہ سے رہنمائی مانگیں |
| Close with blessings upon Prophet ﷺ and gratitude | نبی کریم ﷺ پر درود اور شکر کے ساتھ اختتام کریں |
| Perform wudu (ablution) with mindful breathing | دھیان کے ساتھ سانس لیتے ہوئے وضو کریں |
| Find a quiet, airy space | کوئی پرسکون، ہوا دار جگہ تلاش کریں |
| Face Qibla if possible | ممکن ہو تو قبلہ رخ ہوں |
| Begin with Bismillah and send salawat upon the Prophet ﷺ | بسم اللہ سے آغاز کریں اور نبی کریم ﷺ پر درود شریف پڑھیں |
| Take 3-7 deep, conscious breaths | 3 سے 7 گہری، شعوری سانسیں لیں |
| State your Istikhara question clearly and seek divine guidance | استخارہ کا سوال واضح طور پر بیان کریں اور اللہ سے رہنمائی مانگیں |
| Close with salawat upon the Prophet ﷺ and gratitude | نبی کریم ﷺ پر درود شریف اور شکر کے ساتھ اختتام کریں |
| For praying for yourself, calculate your name + mother's name into one hadad (numerical value) | اپنے لیے دعا کے لیے، اپنے نام اور والدہ کے نام کو ملا کر ایک حدد (عددی قدر) نکالیں |
| re:^Recite the Quranic verse \((.+?)\) \(repeat Hadad times: your name \+ mother's name\)$ | قرآنی آیت ($p1) پڑھیں (حدد کے برابر بار دہرائیں: آپ کا نام + والدہ کا نام) |
| re:^Recite Divine Names \((.+?)\) \(repeat Hadad times: your name \+ mother's name\)$ | اسمائے الٰہی ($p1) پڑھیں (حدد کے برابر بار دہرائیں: آپ کا نام + والدہ کا نام) |



### 6.55 sadaqah-tab (14)

| English | Urdu |
|---|---|
| re:^Sadaqah Guidance — (.+)$ | صدقے کی رہنمائی — $1 |
| Traditional charity forms associated with your sign, for ongoing blessings and spiritual balance. | آپ کے برج سے وابستہ روایتی خیرات کی صورتیں، مسلسل برکت اور روحانی توازن کے لیے۔ |
| According to the teachings of Seringe Mahdiou Niane | Seringe Mahdiou Niane کی تعلیمات کے مطابق |
| General Forms | عمومی صورتیں |
| Specific Forms | مخصوص صورتیں |
| Best Timing | بہترین وقت |
| Summary | خلاصہ |
| Teaching Video (in Wolof) | تعلیمی ویڈیو (وولوف زبان میں) |
| By Seringe Mahdiou Niane — spoken in Wolof | Seringe Mahdiou Niane کی جانب سے — وولوف زبان میں |
| Getting Started with Sadaqah | صدقہ شروع کرنے کے لیے |
| Set a monthly reminder for your regular sadaqah | اپنے باقاعدہ صدقے کے لیے ماہانہ یاد دہانی لگائیں |
| Start small and increase gradually as you establish the habit | چھوٹے سے آغاز کریں اور عادت بننے کے ساتھ آہستہ آہستہ بڑھائیں |
| The intention (niyyah) is as important as the action itself | نیت (niyyah) عمل جتنی ہی اہم ہے |
| Give secretly when possible, as it purifies the heart | جہاں ممکن ہو چھپا کر دیں، کیونکہ یہ دل کو پاک کرتا ہے |



### 6.56 burj-overview (3)

| English | Urdu |
|---|---|
| re:^Focus your energy on (\w+)\. This is your most spiritually aligned day for important decisions and new beginnings\.$ | اپنی توجہ $1 پر مرکوز کریں۔ یہ اہم فیصلوں اور نئے آغاز کے لیے آپ کا سب سے زیادہ روحانی طور پر ہم آہنگ دن ہے۔ |
| re:^Show (\d+) more traits$ | مزید $p1 خصوصیات دکھائیں |
| more | مزید |



### 6.57 burj-spiritual (4)

| English | Urdu |
|---|---|
| Calculating optimal timing... | بہترین وقت کا حساب لگایا جا رہا ہے… |
| re:^(\d+) times$ | $p1 بار |
| Quranic Verse | قرآنی آیت |
| re:^Surah Al-Fatiha (\d+:\d+[a-z]?)$ | سورۃ الفاتحہ $p1 |



### 6.58 ikhtiyarat-detail (175)

| English | Urdu |
|---|---|
| aries | حمل |
| taurus | ثور |
| gemini | جوزا |
| cancer | سرطان |
| leo | اسد |
| virgo | سنبلہ |
| libra | میزان |
| scorpio | عقرب |
| sagittarius | قوس |
| capricorn | جدی |
| aquarius | دلو |
| pisces | حوت |
| conjunction | قران |
| sextile | تسدیس |
| square | تربیع |
| trine | تثلیث |
| opposition | مقابلہ |
| domicile | بیت |
| exaltation | شرف |
| detriment | وبال |
| fall | ہبوط |
| combust | محترق |
| not combust | غیر محترق |
| under the beams | تحت الشعاع |
| retrograde | رجعت میں |
| in fall/detriment | ہبوط یا وبال میں |
| favorable | موافق |
| neutral | معتدل |
| unfavorable | غیر موافق |
| marriage | شادی |
| travel | سفر |
| Moon Sign Modality (Movable/Fixed) | قمر کے برج کی نوعیت (منقلب/ثابت) |
| Moon Sign Modality (Fixed/Movable) | قمر کے برج کی نوعیت (ثابت/منقلب) |
| Mercury Retrograde (Travel Plans/Documents) | عطارد رجعت میں (سفری منصوبے/دستاویزات) |
| Moon Waxing, Increasing in Light | بڑھتا چاند، روشنی میں اضافہ |
| Early Departure (Bukūr) | صبح سویرے روانگی (بکور) |
| Lunar Mansion (Manzil) for Travel | سفر کے لیے منزلِ قمر |
| Mercury Free of Fall/Detriment | عطارد ہبوط/وبال سے محفوظ |
| Jupiter Free of Fall/Detriment | مشتری ہبوط/وبال سے محفوظ |
| Saturn Free of Fall/Detriment | زحل ہبوط/وبال سے محفوظ |
| Mercury Retrograde (Contracts) | عطارد رجعت میں (معاہدے) |
| Mercury Combust | عطارد محترق |
| Moon Applying to Jupiter (Gain) | قمر کا مشتری سے اتصال (نفع) |
| Moon Applying to Venus (Smooth Dealing) | قمر کا زہرہ سے اتصال (ہموار لین دین) |
| Mercury Dignified | عطارد اپنی قوت میں |
| Mercury Retrograde (Study/Comprehension) | عطارد رجعت میں (تعلیم/فہم) |
| Moon Applying to Jupiter (Wisdom/Comprehension) | قمر کا مشتری سے اتصال (حکمت/فہم) |
| Moon Applying to Mercury (Retention) | قمر کا عطارد سے اتصال (یادداشت) |
| Mercury Free of Fall/Detriment (Diagnosis) | عطارد ہبوط/وبال سے محفوظ (تشخیص) |
| Mercury Retrograde (Diagnosis) | عطارد رجعت میں (تشخیص) |
| Moon Applying to Mars (Hard Aspect) | قمر کا مریخ سے اتصال (سخت نظر) |
| Saturn Dignified (Domicile) | زحل اپنی قوت میں (بیت) |
| Saturn Retrograde | زحل رجعت میں |
| a settled, well-supported household. | ایک مستحکم اور سہارا یافتہ گھرانہ۔ |
| a smooth course of treatment and recovery. | علاج اور صحت یابی کا ہموار سلسلہ۔ |
| a smooth, well-supported journey. | ہموار اور سہارا یافتہ سفر۔ |
| traditionally warns of complication, poor healing, or a worsened condition. | روایتی طور پر پیچیدگی، کمزور صحت یابی یا حالت کے بگڑنے کی تنبیہ سمجھی جاتی ہے۔ |
| traditionally warns of danger, delay, or mishap en route. | روایتی طور پر راستے میں خطرے، تاخیر یا حادثے کی تنبیہ سمجھی جاتی ہے۔ |
| warns of dispute, loss, or a deal turning sour. | تنازع، نقصان یا سودے کے بگڑنے کی تنبیہ سمجھی جاتی ہے۔ |
| warns of frustration, blocked progress, or discouragement. | مایوسی، رکی ہوئی پیش رفت یا حوصلہ شکنی کی تنبیہ سمجھی جاتی ہے۔ |
| traditionally warns of accident, damage, or fire risk during construction. | روایتی طور پر تعمیر کے دوران حادثے، نقصان یا آگ کے خطرے کی تنبیہ سمجھی جاتی ہے۔ |
| Jupiter is the classical significator of profit and gain. | مشتری نفع اور کمائی کا کلاسیکی دلالت کنندہ سیارہ ہے۔ |
| Jupiter is the classical significator of wisdom and comprehension. | مشتری حکمت اور فہم کا کلاسیکی دلالت کنندہ سیارہ ہے۔ |
| favorable for retention and a receptive mind. | یادداشت اور قبول کرنے والے ذہن کے لیے موافق۔ |
| favorable for amicable dealing between the parties. | فریقین کے درمیان خوش اسلوبی سے لین دین کے لیے موافق۔ |
| supporting comprehension and wisdom. | فہم اور حکمت کے لیے معاون۔ |
| supporting recovery. | صحت یابی کے لیے معاون۔ |
| good for plans and correspondence. | منصوبوں اور خط و کتابت کے لیے اچھا۔ |
| supporting a clear diagnosis. | واضح تشخیص کے لیے معاون۔ |
| the classical significator of recovery and vital force is weakened. | صحت یابی اور قوتِ حیات کا کلاسیکی دلالت کنندہ کمزور ہے۔ |
| the significator of diagnosis and the physician's assessment is weakened. | تشخیص اور معالج کی رائے کا دلالت کنندہ کمزور ہے۔ |
| the significator of the foundation itself is weakened. | بنیاد کا اپنا دلالت کنندہ کمزور ہے۔ |
| strong for comprehension, memory, and clear thinking. | فہم، یادداشت اور صاف سوچ کے لیے قوی۔ |
| strong for negotiation, paperwork, and the terms of the deal. | بات چیت، کاغذی کارروائی اور سودے کی شرائط کے لیے قوی۔ |
| strong for foundations, land, and permanence, the classical significators of this matter. | بنیادوں، زمین اور پائیداری کے لیے قوی، جو اس معاملے کے کلاسیکی دلالت کنندگان ہیں۔ |
| the significator of the deal itself is weakened/obscured. | سودے کا اپنا دلالت کنندہ کمزور یا پوشیدہ ہے۔ |
| the significator of the intellect and study itself is weakened/obscured. | عقل اور مطالعے کا اپنا دلالت کنندہ کمزور یا پوشیدہ ہے۔ |
| the matter's own significator is weakened. | معاملے کا اپنا دلالت کنندہ کمزور ہے۔ |
| the patient's own significator and the body's vital force are weakened. | مریض کا اپنا دلالت کنندہ اور جسم کی قوتِ حیات کمزور ہیں۔ |
| the traveler's own significator is weakened. | مسافر کا اپنا دلالت کنندہ کمزور ہے۔ |
| not in muḥāq. | محاق میں نہیں۔ |
| waning into the last quarter approaching new moon. | گھٹتا ہوا، آخری چوتھائی میں، نئے چاند کے قریب۔ |
| waning. | گھٹتا ہوا۔ |
| waxing, clear of the beams, before full. | بڑھتا ہوا، شعاعوں سے باہر، بدر سے پہلے۔ |
| waxing, growing in light; classically favorable for treatments meant to build up or strengthen the body. [SCHOLAR-REVIEW] | بڑھتا ہوا، روشنی میں اضافہ؛ کلاسیکی طور پر جسم کو تقویت دینے والے علاج کے لیے موافق۔ [SCHOLAR-REVIEW] |
| waxing, growing in light; favorable for building and growing a household. | بڑھتا ہوا، روشنی میں اضافہ؛ گھر بسانے اور گھرانے کی افزائش کے لیے موافق۔ |
| waxing, growing in light; favorable for setting out and making progress. | بڑھتا ہوا، روشنی میں اضافہ؛ روانگی اور پیش رفت کے لیے موافق۔ |
| waxing, growing in light; favorable for starting and growing an undertaking. | بڑھتا ہوا، روشنی میں اضافہ؛ کام شروع کرنے اور بڑھانے کے لیے موافق۔ |
| nothing "comes of" a deal begun now. | اب شروع ہونے والے سودے سے “کچھ برآمد نہیں ہوتا”۔ |
| nothing "comes of" a journey begun now. | اب شروع ہونے والے سفر سے “کچھ برآمد نہیں ہوتا”۔ |
| study begun now tends to come to nothing. | اب شروع کی گئی تعلیم اکثر بے نتیجہ رہتی ہے۔ |
| treatment begun now tends to come to nothing. | اب شروع کیا گیا علاج اکثر بے نتیجہ رہتا ہے۔ |
| work begun now tends to come to nothing. | اب شروع کیا گیا کام اکثر بے نتیجہ رہتا ہے۔ |
| caution for the nikāḥ contract itself. | نکاح کے عقد کے لیے احتیاط۔ |
| increased risk of a delayed, incomplete, or revised diagnosis. | تشخیص کے مؤخر، نامکمل یا نظرِ ثانی شدہ ہونے کا بڑھا ہوا خطرہ۔ |
| increased risk of itinerary changes, lost documents, or miscommunication. | سفری پروگرام میں تبدیلی، دستاویزات کے گم ہونے یا غلط فہمی کا بڑھا ہوا خطرہ۔ |
| the same classical caution cited against contracts (business.ts) applies here: avoid starting serious study, an exam, or a new course while Mercury retrogrades. | معاہدوں کے خلاف جو کلاسیکی احتیاط بیان کی جاتی ہے (business.ts) وہی یہاں بھی لاگو ہوتی ہے: عطارد کی رجعت کے دوران سنجیدہ تعلیم، امتحان یا نیا کورس شروع کرنے سے بچیں۔ |
| the single most-cited classical caution against signing contracts, starting negotiations, or finalizing a sale. | معاہدوں پر دستخط، مذاکرات کے آغاز یا فروخت کو حتمی شکل دینے کے خلاف سب سے زیادہ بیان کی جانے والی کلاسیکی احتیاط۔ |
| increased risk of delays, cost overruns, or rework during construction. | تعمیر کے دوران تاخیر، اخراجات بڑھ جانے یا کام دوبارہ کرنے کا بڑھا ہوا خطرہ۔ |
| a fixed sign (burj thābit); fixed signs show stability, favoring a foundation or building meant to endure. [SCHOLAR-REVIEW] | ثابت برج؛ ثابت برج استحکام ظاہر کرتے ہیں، جو ایسی بنیاد یا عمارت کے لیے موافق ہے جسے دیرپا ہونا چاہیے۔ [SCHOLAR-REVIEW] |
| a fixed sign; fixed signs incline to delay and being detained. [SCHOLAR-REVIEW] | ثابت برج؛ ثابت برجوں میں تاخیر اور رکاوٹ کا رجحان ہوتا ہے۔ [SCHOLAR-REVIEW] |
| a movable sign (burj munqalib); movable signs favor journeys and swift movement. [SCHOLAR-REVIEW] | منقلب برج؛ منقلب برج سفر اور تیز رفتاری کے لیے موافق ہیں۔ [SCHOLAR-REVIEW] |
| a movable sign; movable signs incline to impermanence, the opposite of what a foundation calls for. [SCHOLAR-REVIEW] | منقلب برج؛ منقلب برجوں میں عدمِ پائیداری کا رجحان ہوتا ہے، جو بنیاد کی ضرورت کے برعکس ہے۔ [SCHOLAR-REVIEW] |
| a mutable sign, neutral for this purpose. | ذوجسدین برج، اس مقصد کے لیے غیر جانبدار۔ |
| a mutable sign, neutral for travel timing. | ذوجسدین برج، سفر کے وقت کے انتخاب کے لیے غیر جانبدار۔ |
| Early departure — "Allāhumma bārik li-ummatī fī bukūrihā" (O Allah, bless my ummah in its early mornings). | صبح سویرے روانگی — "Allāhumma bārik li-ummatī fī bukūrihā" (اے اللہ! میری امت کو اس کی صبح کے وقتوں میں برکت دے)۔ |
| Moon has at least one applying aspect before changing sign. | برج بدلنے سے پہلے قمر کا کم از کم ایک اتصالی نظر موجود ہے۔ |
| Moon has at least one applying aspect — not void of course. | قمر کا کم از کم ایک اتصالی نظر موجود ہے — خالی السیر نہیں۔ |
| Moon has no applying Ptolemaic aspect before leaving its current sign — void of course. | موجودہ برج چھوڑنے سے پہلے قمر کا کوئی بطلیموسی اتصالی نظر نہیں — خالی السیر۔ |
| Moon has no marriage-favorable dignity bonus in this sign. | اس برج میں قمر کو شادی کے لیے موافق ذاتی قوت کا کوئی اضافی نمبر نہیں ملتا۔ |
| Moon is applying to a benefic today. | آج قمر کسی سعد سیارے سے اتصال کر رہا ہے۔ |
| Moon is not applying to Venus or Jupiter by a favorable aspect. | قمر کسی موافق نظر کے ذریعے زہرہ یا مشتری سے اتصال نہیں کر رہا۔ |
| Moon is not applying to Venus or Jupiter today — separating from the benefics. | آج قمر زہرہ یا مشتری سے اتصال نہیں کر رہا — سعد سیاروں سے انصراف میں ہے۔ |
| Moon is not applying to a favorable aspect with Jupiter. | قمر مشتری کے ساتھ کسی موافق نظر میں اتصال نہیں کر رہا۔ |
| Moon is not applying to a favorable aspect with Mercury. | قمر عطارد کے ساتھ کسی موافق نظر میں اتصال نہیں کر رہا۔ |
| Moon is not applying to a favorable aspect with Venus or Jupiter. | قمر زہرہ یا مشتری کے ساتھ کسی موافق نظر میں اتصال نہیں کر رہا۔ |
| Moon is not applying to a favorable aspect with Venus. | قمر زہرہ کے ساتھ کسی موافق نظر میں اتصال نہیں کر رہا۔ |
| Moon is not applying to a hard aspect with Mars. | قمر مریخ کے ساتھ کسی سخت نظر میں اتصال نہیں کر رہا۔ |
| Moon is not applying to a hard aspect with Saturn or Mars. | قمر زحل یا مریخ کے ساتھ کسی سخت نظر میں اتصال نہیں کر رہا۔ |
| Moon is not in the favorable waxing band. | قمر روشنی بڑھنے کے موافق حصے میں نہیں۔ |
| Moon is not in the waning penalty band. | قمر روشنی گھٹنے کے منفی نمبر والے حصے میں نہیں۔ |
| Moon is not under the beams. | قمر تحت الشعاع نہیں۔ |
| Moon is outside via combusta. | قمر الطریقۃ المحترقۃ سے باہر ہے۔ |
| No day-of-week bonus. | دن کے حساب سے کوئی اضافی نمبر نہیں۔ |
| Monday (day of the Moon) — favorable, as the Moon is the primary significator of the body. | پیر (قمر کا دن) — موافق، کیونکہ قمر جسم کا بنیادی دلالت کنندہ سیارہ ہے۔ |
| Not a day classically associated with favorable building or moving. | یہ ایسا دن نہیں جسے کلاسیکی طور پر تعمیر یا منتقلی کے لیے موافق مانا جاتا ہو۔ |
| Not a day classically associated with favorable business dealings. | یہ ایسا دن نہیں جسے کلاسیکی طور پر کاروباری لین دین کے لیے موافق مانا جاتا ہو۔ |
| Not a day classically associated with favorable medical timing. | یہ ایسا دن نہیں جسے کلاسیکی طور پر طبی معاملات کے وقت کے لیے موافق مانا جاتا ہو۔ |
| Not a day classically associated with favorable study. | یہ ایسا دن نہیں جسے کلاسیکی طور پر تعلیم کے لیے موافق مانا جاتا ہو۔ |
| Not a day classically associated with favorable travel. | یہ ایسا دن نہیں جسے کلاسیکی طور پر سفر کے لیے موافق مانا جاتا ہو۔ |
| Thursday — the Prophet ﷺ preferred to set out on journeys on Thursday (Bukhārī). | جمعرات — نبی کریم ﷺ سفر پر روانہ ہونے کے لیے جمعرات کو پسند فرماتے تھے (بخاری)۔ |
| This window is not in a Jupiter, Moon, or Mercury hour. | یہ وقفہ مشتری، قمر یا عطارد کی ساعت میں نہیں۔ |
| This window is not in a Mercury or Jupiter hour. | یہ وقفہ عطارد یا مشتری کی ساعت میں نہیں۔ |
| This window is not in a Moon or Jupiter hour. | یہ وقفہ قمر یا مشتری کی ساعت میں نہیں۔ |
| This window is not in a Saturn or Jupiter hour. | یہ وقفہ زحل یا مشتری کی ساعت میں نہیں۔ |
| This window is not in a Venus, Moon, or Jupiter hour. | یہ وقفہ زہرہ، قمر یا مشتری کی ساعت میں نہیں۔ |
| This window is not in the early-morning (bukūr) band. | یہ وقفہ صبح سویرے (بکور) کے حصے میں نہیں۔ |
| negotiation and contracts | بات چیت اور معاہدوں |
| study and comprehension | تعلیم اور فہم |
| travel and communication | سفر اور رابطے |
| foundations and lasting structures | بنیادوں اور دیرپا تعمیرات |
| a settled, supported household | ایک مستحکم اور سہارا یافتہ گھرانے |
| profit and gain | نفع اور کمائی |
| recovery and vital force | صحت یابی اور قوتِ حیات |
| wisdom and understanding | حکمت اور فہم |
| re:^A solar or lunar eclipse falls within (-?\d+) hours \((-?[\d.]+)h away\)\.$ | شمسی یا قمری گرہن $p1 گھنٹوں کے اندر واقع ہے ($p2 گھنٹے کے فاصلے پر)۔ |
| re:^No eclipse within (\d+) hours\.$ | $p1 گھنٹوں کے اندر کوئی گرہن نہیں۔ |
| re:^Moon applying to (?:a )?(\w+) with (\w+), orb ([\d.]+)°\.$ | قمر کا $2 کے ساتھ $1 میں اتصال، زاویائی فرق $p3°۔ |
| re:^Moon applying to (?:a )?(\w+) with (\w+), orb ([\d.]+)° — (.+)$ | قمر کا $2 کے ساتھ $1 میں اتصال، زاویائی فرق $p3° — $4 |
| re:^No applying hard aspect to Saturn or Mars within ([\d.]+)°\.$ | $p1° کے اندر زحل یا مریخ سے کوئی سخت اتصالی نظر نہیں۔ |
| re:^Moon elongation ([\d.]+)° — (.+)$ | قمر کا شمس سے زاویائی فاصلہ $p1° — $2 |
| re:^(\w+) is ([\d.]+)° from the Sun — (combust\|not combust\|under the beams)(?: \(muḥtaraq\))?\.$ | $1 شمس سے $p2° کے فاصلے پر ہے — $3۔ |
| re:^(\w+) is ([\d.]+)° from the Sun — combust(?: \(muḥtaraq\))?; (.+)$ | $1 شمس سے $p2° کے فاصلے پر ہے — محترق؛ $3 |
| re:^Moon at ([\d.]+)° ecliptic — within via combusta \(15° Libra–15° Scorpio\)\.$ | قمر دائرۃ البروج پر $p1° پر ہے — الطریقۃ المحترقۃ (میزان 15° تا عقرب 15°) کے اندر۔ |
| re:^(\w+) is in (\w+) — free of fall or detriment\.$ | $1 برجِ $2 میں ہے — ہبوط یا وبال میں نہیں۔ |
| re:^(\w+) is in (\w+) — free of fall or detriment, (.+)$ | $1 برجِ $2 میں ہے — ہبوط یا وبال میں نہیں؛ $3 |
| re:^(\w+) is in (\w+) — in fall or detriment\.$ | $1 برجِ $2 میں ہے — ہبوط یا وبال میں۔ |
| re:^(\w+) is in (\w+) — in fall or detriment; (.+)$ | $1 برجِ $2 میں ہے — ہبوط یا وبال میں؛ $3 |
| re:^(\w+) in (\w+) — (domicile\|exaltation\|detriment\|fall)\.$ | $1 برجِ $2 میں — $3۔ |
| re:^(\w+) in (\w+) — domicile; (.+)$ | $1 برجِ $2 میں — بیت؛ $3 |
| re:^(\w+) has no domicile bonus in this sign\.$ | اس برج میں $1 کو بیت کا کوئی اضافی نمبر نہیں ملتا۔ |
| re:^(\w+) has no dignity bonus in this sign\.$ | اس برج میں $1 کو ذاتی قوت کا کوئی اضافی نمبر نہیں ملتا۔ |
| re:^(\w+) is not in fall or detriment\.$ | $1 ہبوط یا وبال میں نہیں۔ |
| re:^Moon in (\w+)\.$ | قمر برجِ $1 میں۔ |
| re:^(\w+) is direct\.$ | $1 مستقیم ہے۔ |
| re:^(\w+) is retrograde\.$ | $1 رجعت میں ہے۔ |
| re:^(\w+) is retrograde — (.+)$ | $1 رجعت میں ہے — $2 |
| re:^(\w+) is not combust\.$ | $1 محترق نہیں۔ |
| re:^Moon has no applying aspect before leaving its current sign — void of course, (.+)$ | موجودہ برج چھوڑنے سے پہلے قمر کا کوئی اتصالی نظر نہیں — خالی السیر؛ $1 |
| re:^Moon in (\w+) — (a (?:fixed\|movable\|mutable) sign.+)$ | قمر برجِ $1 میں ہے — $2 |
| re:^Moon in lunar mansion (\d+) — (favorable\|neutral\|unfavorable) for (marriage\|travel)\.( \[SCHOLAR-REVIEW\])?$ | قمر منزلِ قمر $p1 میں ہے — $3 کے لیے $2۔$p4 |
| re:^This window falls in the planetary hour of (\w+)\.$ | یہ وقفہ $1 کی ساعتِ کواکب میں آتا ہے۔ |
| re:^This window is in the planetary hour of (\w+), but (\w+) is (combust\|retrograde\|in fall/detriment) — no bonus\. \[SCHOLAR-REVIEW\]$ | یہ وقفہ $1 کی ساعتِ کواکب میں ہے، لیکن $2 $3 ہے — کوئی اضافی نمبر نہیں۔ [SCHOLAR-REVIEW] |
| re:^(\w+day)\.$ | $1۔ |
| re:^(\w+day) \(day of (?:the )?(\w+)\) — favorable for (.+)\.$ | $1 ($2 کا دن) — $3 کے لیے موافق۔ |



### Still in English on /ur (not part of this change)

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


