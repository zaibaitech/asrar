# -*- coding: utf-8 -*-
"""
Native review of the Urdu (/ur) copy, Oct 2026: the reviewer's corrections
(56) and answers to the open questions, with how each was applied in the PR.
Rendered into docs/i18n/ur-review.md by build_review.py.
"""

A = '✅ applied'

# (batch, string id, before, after, status)
CORRECTIONS = [
    # Batch 0: Qur'an / Divine Names
    ('0', 'Divine Names list, English label “Yā Wudd”', 'Yā Laṭīf (يا لطيف) · Yā Wudd (يا ودود)', 'Yā Laṭīf (يا لطيف) · Yā Wadūd (يا ودود)',
     '⏸ not applied in source: the /ur page already shows the correct Arabic «يا لطيف · يا ودود». The typo is in the English/French tool text (app/planetary-hours/PlanetaryHoursPage.tsx), which this PR leaves unchanged (EN/FR unaffected); the Urdu catalog key has to match that English text exactly. Fix it in a separate EN/FR change.'),
    ('0', 'Burj table (burujData.json): all 12 rows', '6 rows vocalised, 6 bare', 'all 12 fully vocalised (يَا رَحْمٰنُ with dagger alif)',
     A + ' (display only: urDhikrDisplay() in urPages.ts; burujData.json, the calculator and EN/FR/AR unchanged)'),
    # Batch 1: Religious terms
    ('1', 'UR_POTD.rulers', 'نبی کریم ﷺ پر کثرت سے درود اور دعا کا دن ہے', 'نبی کریم ﷺ پر کثرت سے درود شریف پڑھنے اور دعا کا دن ہے', A + ' (+ glossary entry)'),
    ('1', 'catalog «Jumada al-Awwal»', 'جمادی الاول', 'جمادی الاولیٰ', A),
    ('1', 'catalog «Jumada al-Thani»', 'جمادی الثانی', 'جمادی الثانیہ', A),
    ('1', 'catalog «جيد (Jayyid)»', 'جيد', 'جیّد', A),
    ('1', 'catalog «ضعيف (Ḍaʿīf)»', 'ضعيف', 'ضعیف', A),
    ('1', 'catalog «O Most Subtle, Most Kind»', 'اے باریک بین، نہایت مہربان', 'اے لطیف، اے باریک بین و مہربان', A),
    ('1', 'catalog «O Most High, O Most Great»', 'اے سب سے بلند، اے سب سے عظیم', 'اے بلند و برتر، اے عظمت والے', A),
    ('1', "catalog «I understand — let's begin»", 'میں سمجھ گیا — شروع کریں', 'ٹھیک ہے، شروع کریں', A),
    ('1', 'catalog «All outcomes are determined by Allah alone (Qadr)»', 'ہر انجام کا فیصلہ صرف اللہ کی تقدیر سے ہوتا ہے۔', 'ہر نتیجہ اللہ ہی کی تقدیر سے ہے۔', A),
    # Batch 2: SEO
    ('2', '/ title', 'اسرار — ابجد، نام سے برج، ساعاتِ کواکب اور علم الاعداد اردو میں', 'اسرار — ابجد، نام سے برج، علم الاعداد اور ساعاتِ کواکب', A),
    ('2', '/ description', 'اسلامی روایت سے غور و فکر کے ٹولز: …', 'نام اور والدہ کے نام سے برج، ناموں کی مطابقت، ابجد، آج کی ساعاتِ کواکب اور اختیارات۔ …', A),
    ('2', '/name-and-mother-burj title', 'نام اور والدہ کے نام سے برج معلوم کریں: ابجد سے برج کا حساب', 'نام اور امی کے نام سے برج معلوم کریں (ابجد)', A),
    ('2', '/name-and-mother-burj description', 'اپنے نام اور امی (والدہ) کے نام کے ابجد اعداد سے …', 'اپنے اور امی کے نام کے ابجد اعداد سے برج معلوم کریں: …', A),
    ('2', '/compatibility description', 'علم الحروف کے “روحانی ربط” کے طریقے سے ابجد کے ذریعے …', 'ابجد اور علم الحروف کے “روحانی ربط” سے شادی، دوستی یا کام کے لیے …', A),
    ('2', '/abjad title', 'ابجد کیلکولیٹر: نام کے اعداد معلوم کریں (علم الاعداد)', 'ابجد کیلکولیٹر: نام کے اعداد معلوم کریں', A),
    ('2', '/abjad description', 'کسی بھی نام یا عربی عبارت کی ابجد (حسابِ جمل) قیمت …', 'کسی بھی نام یا عربی عبارت کے ابجد اعداد (حسابِ جمل) …', A),
    ('2', '/planetary-hours description', 'آج کے ساعات معلوم کریں: …', 'آج کی ساعاتِ کواکب: آپ کے شہر میں …', A + ' (also Q1)'),
    ('2', '/ikhtiyarat title', 'علمِ اختیارات: نکاح، سفر اور کاروبار کے لیے مناسب تاریخ کا انتخاب', 'نکاح، سفر اور کاروبار کے لیے مناسب تاریخ (اختیارات)', A + ' (also Q2)'),
    ('2', '/ikhtiyarat description', 'علمِ اختیارات کی روایت کے مطابق …', 'نکاح، سفر، نئے گھر میں منتقلی اور کاروبار کے لیے روایتی علمِ اختیارات کے مطابق …', A),
    # Batch 3A
    ('3A', 'catalog «Cutting ties»', 'تعلقات ختم کرنا', 'نقصان دہ معاملات یا شراکتیں ختم کرنا', A + ' (also Q4)'),
    ('3A', 'catalog «Seeking authority»', 'عہدے کی طلب', 'منصب اور ذمہ داری کے معاملات', A),
    ('3A', 'catalog planet-of-the-day intro', '…اس دن کی کیفیت کا رنگ متعین کرتا ہے', 'علم النجوم کی روایت میں ہفتے کے ہر دن کو ایک سیارے سے منسوب کیا جاتا ہے، اور اسی نسبت سے … اس دن کی کیفیت بیان کی جاتی ہے۔', A + ' (fuller Q5 wording)'),
    ('3A', 'catalog «Auspicious»', 'سعد', 'موافق', A),
    ('3A', 'catalog «Outlook» + Marriage/Friendship/Family/Work', 'منظرنامہ / شادی کا منظرنامہ…', 'پہلو / شادی کے پہلو، دوستی کے پہلو، خاندانی پہلو، کام کے پہلو', A),
    ('3A', 'catalog «Watch Out»', 'خبردار رہیں', 'احتیاط کے پہلو', A),
    ('3A', 'catalog «Most auspicious for important decisions»', 'اہم فیصلوں کے لیے سب سے موزوں', 'روایت میں اہم کاموں کے لیے موزوں سمجھا جاتا ہے', A),
    # Batch 3B
    ('3B', 'catalog «Air ♦ Neutral»', 'ہوا ♦ خنثیٰ', 'ہوا ♦ ممتزج', A),
    ('3B', 'catalog «No concern here — this factor looks neutral…»', '…یہ عنصر غیر جانبدار ہے۔', '…یہ عنصر معتدل ہے۔', A),
    ('3B', 'catalog re: «is neutral in» (both patterns)', '$1 برجِ $2 میں معتدل حالت میں ہے', '$1 برجِ $2 میں معتدل ہے', A),
    ('3B', 'catalog re: «is comfortable in» (both patterns)', '$1 برجِ $2 میں آرام کی حالت میں ہے', '$1 برجِ $2 میں موافق حالت میں ہے', A),
    ('3B', 'catalog «Moon Applying to Saturn/Mars (Hard Aspect)»', 'قمر کا زحل/مریخ سے سخت نظر کی طرف بڑھنا', 'قمر کا زحل/مریخ سے اتصال (سخت نظر)', A),
    ('3B', 'catalog «Moon Applying to Venus or Jupiter»', 'قمر کا زہرہ یا مشتری کی طرف بڑھنا', 'قمر کا زہرہ یا مشتری سے اتصال', A),
    ('3B', 'catalog «Moon Separating from Benefics»', 'قمر کا سعد سیاروں سے جدا ہونا', 'قمر کا سعد سیاروں سے انصراف (جدا ہونا)', A),
    ('3B', 'catalog «Moon Void of Course»', 'قمر خالی السیر', 'قمر خالی السیر (کسی سیارے سے اتصال نہیں)', A + ' (Q6 gloss)'),
    ('3B', 'catalog «Via Combusta»', 'الطریقۃ المحترقۃ', 'الطریقۃ المحترقۃ (میزان و عقرب کا مخصوص حصہ)', A + ' (Q6 gloss)'),
    ('3B', 'catalog «Venus Dignified»', 'زہرہ قوت میں', 'زہرہ اپنی قوت میں', A),
    ('3B', 'catalog «Person to Person»', 'فرد سے فرد', 'دو افراد کا موازنہ', A),
    ('3B', 'catalog «Moment Alignment»', 'لمحے کی ہم آہنگی', 'اس وقت کی موافقت', A),
    ('3B', 'catalog «Live positions»', 'براہِ راست مقامات', 'سیاروں کے موجودہ مقامات', A),
    ('3B', 'catalog «Updated»', 'تازہ کاری', 'تازہ ترین', A),
    ('3B', 'catalog «Quick Tips»', 'فوری مشورے', 'مختصر مشورے', A),
    ('3B', 'catalog «Starts»', 'شروع', 'آغاز', A),
    ('3B', 'catalog «· Waxing Gibbous» / «· Waning Gibbous»', 'بڑھتا ہوا چاند / گھٹتا ہوا چاند', 'بڑھتا محدب چاند / گھٹتا محدب چاند', A + ' (native check still recommended)'),
    ('3B', 'catalog «Tropical» / «Sidereal»', 'ٹراپیکل / سائیڈریل', 'مداری (ٹراپیکل) / نجومی (سائیڈریل)', A + ' (native check still recommended)'),
    ('3B', 'UR_BURJ.dobNote', '(ٹراپیکل بروج)', '(مداری / ٹراپیکل بروج)', A),
    ('3B', 'UR_ABJAD.orders, faqs[1].a', '…دونوں ترتیبوں کو سپورٹ کرتا ہے… / …دونوں کو سپورٹ کرتا ہے…', '…دونوں ترتیبوں سے حساب کرتا ہے…', A),
    ('3B', 'UR_HOME.intro', '…اوقات کے روایتی اسلامی علوم کا ساتھی ہے۔', '…فلکی اوقات کے روایتی اسلامی علوم میں آپ کا رہنما ہے۔', A),
    ('3B', 'catalog «Avoid» / rating «اجتناب (Ijtanib)»', 'اجتناب کریں / اجتناب', 'اجتناب (both)', A),
    # Batch 3C
    ('3C', 'catalog «Best For» / «Best for»', 'کس کام کے لیے بہتر', 'موزوں کام', A),
    ('3C', 'ur.ts nav.calculator', 'حساب', 'کیلکولیٹر', A),
    ('3C', 'catalog «Type to search: Muhammad…» / «…Fatima…»', 'تلاش کے لیے لکھیں: Muhammad, Ali, Hassan...', 'تلاش کے لیے لکھیں: ⁦Muhammad, Ali, Hassan…⁩ (LRI…PDI)', A),
    ('3C', 'catalog «Get it on Google Play»', 'Google Play سے حاصل کریں', '⁦Google Play⁩ سے حاصل کریں (LRI…PDI)', A + ' (the only other catalog value mixing Latin and Urdu were the two search placeholders above)'),
    ('3C', 'catalog «Ḥadad Value»', 'حدد کی قیمت', 'عدد کی قیمت', A + ': the source confirms it is the count, burujData.json says “repeat Hadad times: your name + mother’s name”. Native check of the label still welcome.'),
    ('3C', 'UR_COMPAT.faqs[4].a', '…دعوت ہو سکتا ہے۔', '…دعوت ہو سکتی ہے۔', A),
]

# Reviewer's answers to the 8 open questions and what was done.
ANSWERS = [
    ('آج کے ساعات', 'Change to the feminine آج کی ساعتیں / آج کی ساعاتِ کواکب.',
     A + ': /planetary-hours meta description and the first FAQ now read «آج کی ساعاتِ کواکب»; glossary updated.'),
    ('اختیارات', 'Keep, but plain language first in SEO titles; never alone as a nav label or button (use «بہترین تاریخیں»).',
     A + ': /ikhtiyarat title now leads with «نکاح، سفر اور کاروبار کے لیے مناسب تاریخ». The H1 stays «مناسب تاریخوں کا انتخاب (اختیارات)». Nav and buttons already use «بہترین تاریخیں»; no label uses اختیارات on its own.'),
    ('بدھ کی رات', 'Confirm the intended meaning in the source. Night before Wednesday → «شبِ بدھ (منگل کی شام)»; night after → «بدھ کی شام / رات (جمعرات کی شب)»; default «بدھ کی رات (مغرب کے بعد)».',
     A + ': the source data means the night before Wednesday (burujData.json: “Wednesday night (Saturn’s night), after Isha” and “Tuesday midnight (Wednesday night)”; the first night hour of Tuesday evening is Saturn’s). So «Wednesday night» → «شبِ بدھ (منگل کی شام)», per the reviewer’s rule for that meaning. Note the French data says “Mercredi soir”, which looks like the same ambiguity in French.'),
    ('تعلقات ختم کرنا', 'Change to «نقصان دہ معاملات یا شراکتیں ختم کرنا».', A),
    ('Planet-of-the-day intro', 'Do not make the planet the agent; use the fuller wording.', A + ' (fuller wording).'),
    ('Astro terms', 'محترق، تحت الشعاع، ہبوط، وبال، رجعت، شرف are understood. Gloss خالی السیر and الطریقۃ المحترقۃ; use اتصال / انصراف for Applying/Separating.', A),
    ('Urdu letters in Abjad', 'Recommends normalising ی→ي، ک→ك، ہ/ۃ→ه/ة (ے→ي) before counting, or until then an inline warning.',
     '⏳ waiting for Mario: a calculation change, not done in this PR. The spelling note stays.'),
    ('English interpretive content', 'OK for a noindex phase 1 with UR_COMMON.toolUiNote; translate burj career texts and soul-connection meanings before indexing.',
     '⏳ not done in this PR (separate task). toolUiNote stays visible; /ur stays noindex.'),
]
