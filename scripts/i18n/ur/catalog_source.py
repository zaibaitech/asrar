# -*- coding: utf-8 -*-
"""
Urdu UI catalog source (hand-translated, Oct 2026; under native review).

English source text (exact, as rendered by the tools) -> Urdu. Built into
public/i18n/ur-ui.json by build_catalog.py. Scope: the UI of the 7 phase-1
/ur pages (labels, buttons, headings, form text, static guides and
disclaimers). Interpretive result content (archetype meanings, career texts,
per-date rule explanations, manzil descriptions) stays in English for now.

Divine Names: the tool's transliterations are mapped to the Arabic the tool
itself shows (e.g. 'Yā Nūr (يا نور) · Yā Ḥayy (يا حي)' -> 'يا نور · يا حي').

GROUP tags are only for docs/i18n/ur-review.md:
  quran = Qur'an / Divine Names, rel = religious terms, ui = UI.
"""

PLANETS = {'Sun': 'شمس', 'Moon': 'قمر', 'Mars': 'مریخ', 'Mercury': 'عطارد', 'Jupiter': 'مشتری', 'Venus': 'زہرہ', 'Saturn': 'زحل'}
SIGNS = {
    'Aries': ('حمل', '♈'), 'Taurus': ('ثور', '♉'), 'Gemini': ('جوزا', '♊'), 'Cancer': ('سرطان', '♋'),
    'Leo': ('اسد', '♌'), 'Virgo': ('سنبلہ', '♍'), 'Libra': ('میزان', '♎'), 'Scorpio': ('عقرب', '♏'),
    'Sagittarius': ('قوس', '♐'), 'Capricorn': ('جدی', '♑'), 'Aquarius': ('دلو', '♒'), 'Pisces': ('حوت', '♓'),
}
WEEKDAYS = {'Sunday': 'اتوار', 'Monday': 'پیر', 'Tuesday': 'منگل', 'Wednesday': 'بدھ', 'Thursday': 'جمعرات', 'Friday': 'جمعہ', 'Saturday': 'ہفتہ'}
WD_SHORT = {'Sun': 'اتوار', 'Mon': 'پیر', 'Tue': 'منگل', 'Wed': 'بدھ', 'Thu': 'جمعرات', 'Fri': 'جمعہ', 'Sat': 'ہفتہ'}
HIJRI = {
    'Muharram': 'محرم', 'Safar': 'صفر', "Rabi' al-Awwal": 'ربیع الاول', "Rabi' al-Thani": 'ربیع الثانی',
    'Jumada al-Awwal': 'جمادی الاولیٰ', 'Jumada al-Thani': 'جمادی الثانیہ', 'Rajab': 'رجب', "Sha'ban": 'شعبان',
    'Ramadan': 'رمضان', 'Shawwal': 'شوال', "Dhu al-Qi'dah": 'ذوالقعدہ', 'Dhu al-Hijjah': 'ذوالحجہ',
}

ENTRIES = []  # (group, en, ur)

def add(group, en, ur):
    ENTRIES.append((group, en, ur))

# --- generated families -------------------------------------------------
for en, ur in PLANETS.items():
    add('ui', en, ur)
for en, (ur, sym) in SIGNS.items():
    add('ui', en, ur)
    add('ui', f'{en} {sym}', f'{ur} {sym}')
add('ui', 'Aries ♈ & Scorpio ♏', 'حمل ♈ اور عقرب ♏')
add('ui', 'Gemini ♊ & Virgo ♍', 'جوزا ♊ اور سنبلہ ♍')
add('ui', 'Sagittarius ♐ & Pisces ♓', 'قوس ♐ اور حوت ♓')
add('ui', 'Taurus ♉ & Libra ♎', 'ثور ♉ اور میزان ♎')
add('ui', 'Capricorn ♑ & Aquarius ♒', 'جدی ♑ اور دلو ♒')
for en, ur in WEEKDAYS.items():
    add('ui', en, ur)
    add('ui', f'{en} Guidance', f'{ur} کے لیے رہنمائی')
for en, ur in HIJRI.items():
    add('rel', en, ur)
for en, ur in WD_SHORT.items():
    add('ui', f're:^Your time: {en}, (\\d{{1,2}}:\\d\\d) (\\S+)$', f'آپ کا وقت: {ur}، $1 $p2')
    add('ui', f're:^{en} (\\d{{1,2}}:\\d\\d)$', f'{ur} $1')
for state, ur in [('weakened', 'کمزور ہے'), ('strong', 'قوی ہے'), ('neutral', 'معتدل ہے'), ('comfortable', 'موافق حالت میں ہے')]:
    add('ui', f're:^(\\S+) (\\w+) — (\\w+) is {state} in (\\w+)$', f'$1 $2 — $3 برجِ $4 میں {ur}')
    add('ui', f're:^(\\w+) is {state} in (\\w+)$', f'$1 برجِ $2 میں {ur}')
add('ui', 're:^(\\w+) status: (\\w+)$', '$1 کی حالت: $2')
# Times stay left-to-right inside the RTL page (LRI ... PDI), e.g. '03:25 AM → 04:27 AM'.
add('ui', 're:^(\\d{1,2}:\\d\\d (?:AM|PM)) → (\\d{1,2}:\\d\\d (?:AM|PM))$', '\u2066$p1 → $p2\u2069')
add('ui', 're:^(\\d{1,2}:\\d\\d (?:AM|PM))$', '\u2066$p1\u2069')
add('ui', 're:^· hour of (\\w+)$', '· $1 کی ساعت')
add('ui', 're:^(Day|Night) · Hour (\\d+)$', '$1 · ساعت $2')

# --- Qur'an / Divine Names (Arabic kept, as the tool itself writes them) ---
Q = [
    ('Yā Laṭīf', 'يا لطيف'),
    ('Yā Nūr (يا نور) · Yā Ḥayy (يا حي)', 'يا نور · يا حي'),
    ('Yā Laṭīf (يا لطيف) · Yā Wudd (يا ودود)', 'يا لطيف · يا ودود'),
    ('Yā Qawiyy (يا قوي) · Yā Qahhār (يا قهار)', 'يا قوي · يا قهار'),
    ('Yā ʿAlīm (يا عليم) · Yā Ḥakīm (يا حكيم)', 'يا عليم · يا حكيم'),
    ('Yā Karīm (يا كريم) · Yā Wahhāb (يا وهاب)', 'يا كريم · يا وهاب'),
    ('Yā Wadūd (يا ودود) · Yā Jamīl (يا جميل)', 'يا ودود · يا جميل'),
    ('Yā Ṣabūr (يا صبور) · Yā Matīn (يا متين)', 'يا صبور · يا متين'),
    ('Yā Nūr · Yā Ḥayy · Yā Qayyūm', 'يا نور · يا حي · يا قيوم'),
    ('Yā ʿAliyyu Yā ʿAẓīm', 'يا علي يا عظيم'),
]
for en, ur in Q:
    add('quran', en, ur)

# --- religious terms / Islamic vocabulary in the UI ---------------------
R = [
    ('O Most Subtle, Most Kind', 'اے لطیف، اے باریک بین و مہربان'),
    ('O Most High, O Most Great', 'اے بلند و برتر، اے عظمت والے'),
    ('Recommended Zikr', 'تجویز کردہ ذکر'),
    ('Recommended Dhikr', 'تجویز کردہ ذکر'),
    ('Zikr Challenge', 'ذکر چیلنج'),
    ('Start your daily zikr!', 'اپنا روزانہ ذکر شروع کریں!'),
    ('Open Tasbih', 'تسبیح کھولیں'),
    ('Dhikr', 'ذکر'),
    ('Divine Names', 'اسمائے حسنیٰ'),
    ('Divine Names & Dhikr', 'اسمائے حسنیٰ اور ذکر'),
    ('Your Divine Name', 'آپ کا اسمِ الٰہی'),
    ('Person to Divine Name', 'فرد اور اسمِ الٰہی'),
    ('Divine Name to Intention', 'اسمِ الٰہی اور نیت'),
    ('Divine Resonance', 'اسمِ الٰہی سے ہم آہنگی'),
    ("Qur'anic Reflection", 'قرآنی تدبر'),
    ("Qur'anic Resonance", 'قرآنی ہم آہنگی'),
    ("Qur'an", 'قرآن'),
    ('Sadaqah', 'صدقہ'),
    ('Charity', 'خیرات'),
    ('Sadaqah Guidance', 'صدقے کی رہنمائی'),
    ('Sadaqah by Birth Month', 'پیدائش کے مہینے کے مطابق صدقہ'),
    ('Sadaqah by Day of the Week', 'ہفتے کے دن کے مطابق صدقہ'),
    ('Hijri date', 'ہجری تاریخ'),
    ('AH', 'ھ'),
    ('Focus on istighfar and protective adhkār', 'استغفار اور حفاظتی اذکار پر توجہ دیں'),
    ("Gratitude & du'ā'", 'شکر اور دعا'),
    ('Sunnah & Fiqh', 'سنت اور فقہ'),
    ('Custom (ʿUrf)', 'رواج (عرف)'),
    ('ʿIlm al-Ḥurūf', 'علم الحروف'),
    ('ʿIlm al-Ḥurūf & ʿIlm al-ʿAdad Explorer', 'علم الحروف اور علم الاعداد کی سیر'),
    ('ʿIlm Nujūm', 'علمِ نجوم'),
    ('ʿIlm al-Nujūm – Planetary Alignment', 'علم النجوم – کواکب کی ہم آہنگی'),
    ('Stars (Ikhtiyārāt)', 'ستارے (اختیارات)'),
    ('Manāzil', 'منازل'),
    ('Manāzil al-qamar · 28 stations', 'منازلِ قمر · 28 منزلیں'),
    ('Manzil of today / tonight', 'آج / آج رات کی منزل'),
    ('Guide to all 28 manāzil →', 'تمام 28 منازل کی رہنمائی ←'),
    ('Lunar Mansion (Manzil)', 'منزلِ قمر'),
    ('Recommended Incense (Bakhoor)', 'تجویز کردہ خوشبو (بخور)'),
    ('Frankincense + Liquid Storax', 'لوبان + میعۂ سائلہ'),
    ('Frankincense + Musk', 'لوبان + مشک'),
    ('اجتناب (Ijtanib)', 'اجتناب'),
    ('جيد (Jayyid)', 'جیّد'),
    ('مقبول (Maqbūl)', 'مقبول'),
    ('ممتاز (Mumtāz)', 'ممتاز'),
    ('ضعيف (Ḍaʿīf)', 'ضعیف'),
    ('Traditional stations for reflection and timing adab — not prediction. Allah alone knows the unseen.',
     'غور و فکر اور اوقات کے ادب کے لیے روایتی منازل — پیش گوئی نہیں۔ غیب کا علم صرف اللہ کو ہے۔'),
    ('This app explores the traditional Islamic sciences of ʿIlm al-Ḥurūf and ʿIlm al-ʿAdad for cultural and historical reflection. It is not for fortune-telling, medical advice, or religious rulings. Always consult qualified scholars for religious guidance.',
     'یہ ایپ علم الحروف اور علم الاعداد کے روایتی اسلامی علوم کو ثقافتی اور تاریخی غور و فکر کے لیے پیش کرتی ہے۔ یہ قسمت کا حال بتانے، طبی مشورے یا شرعی فتووں کے لیے نہیں ہے۔ دینی رہنمائی کے لیے ہمیشہ مستند علما سے رجوع کریں۔'),
    ('For educational and cultural exploration only • Always consult qualified scholars for religious guidance',
     'صرف تعلیمی اور ثقافتی مطالعے کے لیے • دینی رہنمائی کے لیے ہمیشہ مستند علما سے رجوع کریں'),
    ('This tool provides spiritual reflection based on traditional Islamic sciences. It is NOT fortune-telling (kāhana), which is prohibited. Use it as a guide for self-reflection, always combined with prayer (duʿāʾ), practical wisdom (ḥikma), and consultation with qualified scholars. All outcomes are determined by Allah alone (Qadr).',
     'یہ ٹول روایتی اسلامی علوم کی بنیاد پر روحانی غور و فکر پیش کرتا ہے۔ یہ کہانت (قسمت کا حال بتانا) نہیں ہے، جو ممنوع ہے۔ اسے خود احتسابی کے لیے رہنما سمجھیں، ہمیشہ دعا، عملی حکمت اور مستند علما سے مشورے کے ساتھ۔ ہر نتیجہ اللہ ہی کی تقدیر سے ہے۔'),
    ('⚠️ For reflection & spiritual timing — not prediction. Only Allah knows the unseen.',
     '⚠️ غور و فکر اور روحانی اوقات کے لیے — پیش گوئی نہیں۔ غیب کا علم صرف اللہ کو ہے۔'),
    ('Begin with Bismillah and the relevant dhikr for that planet. Your intention (niyyah) is what matters most.',
     'بسم اللہ اور اس سیارے کے مناسب ذکر سے آغاز کریں۔ اصل اہمیت آپ کی نیت کی ہے۔'),
    ("⚠️ Planetary hours are a traditional tool for reflection and spiritual timing used by Islamic scholars (ʿulamā'). They are not a form of divination (kahanah). Use them to align your efforts with natural rhythms, always relying on tawakkul (trust in Allah). Consult qualified scholars for religious rulings.",
     '⚠️ ساعاتِ کواکب غور و فکر اور روحانی اوقات کا ایک روایتی ذریعہ ہیں جو اسلامی علما استعمال کرتے رہے ہیں۔ یہ کہانت نہیں ہیں۔ انہیں اپنی کوششوں کو فطری اوقات سے ہم آہنگ کرنے کے لیے استعمال کریں، ہمیشہ اللہ پر توکل کے ساتھ۔ شرعی احکام کے لیے مستند علما سے رجوع کریں۔'),
    ('⚠️ This tool provides spiritual context inspired by Islamic ʿIlm al-Nujūm. It is for reflection, not divination (kahanah) or superstition. Every day is blessed — use this as a framework to align your intentions and channel your energy mindfully. Consult qualified scholars for religious guidance.',
     '⚠️ یہ ٹول اسلامی علم النجوم سے ماخوذ روحانی پس منظر پیش کرتا ہے۔ یہ غور و فکر کے لیے ہے، کہانت یا توہم پرستی کے لیے نہیں۔ ہر دن بابرکت ہے — اسے اپنی نیتوں کو درست سمت دینے اور اپنی توانائی کو سوچ سمجھ کر استعمال کرنے کا ایک خاکہ سمجھیں۔ دینی رہنمائی کے لیے مستند علما سے رجوع کریں۔'),
    ('In ʿIlm al-Nujūm (Islamic celestial science), each day and night is divided into 12 unequal hours ruled by the seven classical planets in the Chaldean order: Saturn → Jupiter → Mars → Sun → Venus → Mercury → Moon. The length of each hour changes daily with sunrise and sunset.',
     'علم النجوم (اسلامی فلکیاتی علم) میں ہر دن اور رات کو بارہ بارہ غیر مساوی ساعتوں میں تقسیم کیا جاتا ہے، جن پر سات کلاسیکی سیارے کلدانی ترتیب سے حاکم ہوتے ہیں: زحل ← مشتری ← مریخ ← شمس ← زہرہ ← عطارد ← قمر۔ ہر ساعت کی مدت طلوع و غروبِ آفتاب کے ساتھ روز بدلتی ہے۔'),
    ('In ʿIlm al-Nujūm, each day of the week is assigned a ruling planet that colours its energy from sunrise to sunrise. This was well-known to classical Islamic scholars. The day starts at the first planetary hour after sunrise — not midnight.',
     'علم النجوم کی روایت میں ہفتے کے ہر دن کو ایک سیارے سے منسوب کیا جاتا ہے، اور اسی نسبت سے طلوعِ آفتاب سے اگلے طلوع تک اس دن کی کیفیت بیان کی جاتی ہے۔ یہ بات کلاسیکی اسلامی علما میں معروف تھی۔ دن آدھی رات سے نہیں بلکہ طلوعِ آفتاب کے بعد کی پہلی ساعت سے شروع ہوتا ہے۔'),
    ('Before you begin', 'شروع کرنے سے پہلے'),
    ('This tool reflects a refinement from the classical Islamic tradition of ʿIlm al-Nujūm (electional astrology). It is not a substitute for istikhāra, consultation (mashwara) with family and trusted scholars, and tawakkul (reliance on Allah). No date is religiously forbidden for nikāḥ — marriage is permitted at any time of the year.',
     'یہ ٹول علم النجوم (اوقات کے انتخاب کا علم) کی کلاسیکی اسلامی روایت سے ماخوذ ہے۔ یہ استخارے، گھر والوں اور معتبر علما سے مشورے، اور اللہ پر توکل کا متبادل نہیں۔ شریعت میں نکاح کے لیے کوئی تاریخ ممنوع نہیں — نکاح سال کے کسی بھی وقت جائز ہے۔'),
    ("I understand — let's begin", 'ٹھیک ہے، شروع کریں'),
    ('About this feature / Adab', 'اس فیچر کے بارے میں / ادب'),
    ('A reflection tool from traditional teachings — it does not replace faith, free will, or wise counsel.',
     'روایتی تعلیمات سے غور و فکر کا ایک ذریعہ — یہ ایمان، انسان کے اختیار اور دانشمندانہ مشورے کا متبادل نہیں۔'),
]
for en, ur in R:
    add('rel', en, ur)

# --- UI -----------------------------------------------------------------
U = [
    # home app
    ('Asrār', 'اسرار'), ('Sign In', 'سائن ان'), ('Maghribi', 'مغربی'), ('Mashriqi', 'مشرقی'),
    # abjad system note under the selector (PR #89); pending Language Reviewer
    ('Maghribi (North & West Africa) · Mashriqi (Middle East & Asia)', 'مغربی (شمالی و مغربی افریقہ) · مشرقی (مشرقِ وسطیٰ اور ایشیا)'),
    ('Educational Tool:', 'تعلیمی ٹول:'), ('Best Dates', 'بہترین تاریخیں'), ('Dates', 'تاریخیں'),
    ('Compatibility', 'مطابقت'), ('Calculator', 'کیلکولیٹر'), ('Today', 'آج'),
    ('Real-time insights based on traditional Islamic celestial science and Chaldean planetary hours.',
     'روایتی اسلامی فلکیاتی علم اور کلدانی ساعاتِ کواکب پر مبنی بروقت معلومات۔'),
    ('Planetary Hour', 'سیارے کی ساعت'), ('Moment Alignment', 'اس وقت کی موافقت'),
    ('Cautious', 'محتاط'), ('Auspicious', 'موافق'), ('Moderate', 'معتدل'),
    ('Night', 'رات'), ('Day', 'دن'), ('Hour', 'ساعت'), ('Remaining', 'باقی'), ('Time remaining', 'باقی وقت'),
    ('Softens difficulties and eases hardship', 'مشکلات کو نرم اور سختی کو آسان کرتا ہے'),
    ('For grounding, patience, and steadiness', 'ٹھہراؤ، صبر اور استقامت کے لیے'),
    ('For radiance, success, and vitality', 'رونق، کامیابی اور توانائی کے لیے'),
    ('Current Hour Ruler -', 'موجودہ ساعت کا حاکم -'), ('Next Planet Hour', 'اگلی ساعت'),
    ('Fire', 'آگ'), ('Water', 'پانی'), ('Air', 'ہوا'), ('Earth', 'مٹی'), ('air', 'ہوا'), ('fire', 'آگ'), ('water', 'پانی'), ('earth', 'مٹی'),
    ('Starts', 'آغاز'), ('See All Hours', 'تمام ساعتیں دیکھیں'), ('Full Guide →', 'مکمل رہنمائی ←'),
    ('Planet of the Day', 'آج کا سیارہ'), ('Planet of the Day -', 'آج کا سیارہ -'),
    ('Passionate & energizing', 'پرجوش اور توانائی بخش'), ('Current Position', 'موجودہ مقام'),
    ('Best For', 'موزوں کام'), ('Best for', 'موزوں کام'),
    ('Leadership', 'قیادت'), ('Starting projects', 'نئے منصوبے شروع کرنا'), ('Physical activities', 'جسمانی سرگرمیاں'),
    ('Bold decisions', 'جرات مندانہ فیصلے'), ('Practice Level', 'عمل کی سطح'), ('Focus', 'توجہ'),
    ('· Waxing Crescent', '· بڑھتا ہلال'), ('· First Quarter', '· پہلی چوتھائی'), ('· Waxing Gibbous', '· بڑھتا محدب چاند'),
    ('· Full Moon', '· بدر (پورا چاند)'), ('· Waning Gibbous', '· گھٹتا محدب چاند'), ('· Last Quarter', '· آخری چوتھائی'),
    ('· Waning Crescent', '· گھٹتا ہلال'), ('· New Moon', '· نیا چاند'),
    ('▶ Activities & wisdom (educational)', '▶ سرگرمیاں اور حکمت (تعلیمی)'),
    ('Planet Transits', 'سیاروں کی گردش'), ('Live positions', 'سیاروں کے موجودہ مقامات'), ('Tropical', 'مداری (ٹراپیکل)'), ('Sidereal', 'نجومی (سائیڈریل)'),
    ('Updated', 'تازہ ترین'), ('New: Birth Profile', 'نیا: پیدائشی پروفائل'),
    ('Your Sun/Moon signs, lunar mansion, day ruler, and more.', 'آپ کے شمسی/قمری بروج، منزلِ قمر، دن کا حاکم اور بہت کچھ۔'),
    ('Who Am I?', 'میں کون ہوں؟'), ('More', 'مزید'),
    ('A platform for spiritual wisdom and divine timing exploration', 'روحانی حکمت اور اوقات کے مطالعے کا پلیٹ فارم'),
    ('Important Notice', 'اہم اطلاع'), ('Powered by', 'تیار کردہ'), ('All rights reserved', 'جملہ حقوق محفوظ ہیں'),
    ('Get the full experience — Download Asrāriya', 'مکمل تجربے کے لیے — اسراریہ ڈاؤن لوڈ کریں'),
    ('Personalised spiritual guidance · Dhikr · Abjad · Planetary Hours', 'ذاتی روحانی رہنمائی · ذکر · ابجد · ساعاتِ کواکب'),
    ('Open menu', 'مینو کھولیں'), ('Help & Tutorial', 'مدد اور رہنمائی'), ('Send Feedback', 'رائے بھیجیں'), ('Dismiss', 'بند کریں'),
    ('Primary navigation', 'مرکزی نیویگیشن'), ('Get it on Google Play', '\u2066Google Play\u2069 سے حاصل کریں'),
    # burj tool
    ('Quick Tips', 'مختصر مشورے'), ('Learn', 'سیکھیں'), ('Discover Your Spiritual Profile', 'اپنا روحانی پروفائل دریافت کریں'),
    ('Step 1: Enter Names', 'مرحلہ 1: نام لکھیں'), ('Step 2: View Results', 'مرحلہ 2: نتائج دیکھیں'),
    ('About This Science', 'اس علم کے بارے میں'), ("What You'll Discover", 'آپ کیا جانیں گے'),
    ('Choose Calculation Method:', 'حساب کا طریقہ منتخب کریں:'), ('Name-Based', 'نام کے ذریعے'), ('CLASSICAL', 'کلاسیکی'),
    ("Traditional ʿIlm al-Ḥurūf method using your name + mother's name", 'علم الحروف کا روایتی طریقہ: آپ کا نام + والدہ کا نام'),
    ('Birth Date', 'تاریخِ پیدائش'), ('QUICK', 'فوری'),
    ('Simpler method using only your date of birth', 'آسان طریقہ: صرف آپ کی تاریخِ پیدائش سے'),
    ('Both names must be in Arabic script for accurate spiritual analysis', 'درست تجزیے کے لیے دونوں نام اردو یا عربی حروف میں لکھیں'),
    ('Your Name', 'آپ کا نام'), ('Search by Latin Name', 'رومن نام سے تلاش کریں'), ('(optional)', '(اختیاری)'),
    ('Database-backed suggestions as you type', 'لکھتے وقت ڈیٹا بیس سے تجاویز'), ('Database-backed suggestions', 'ڈیٹا بیس سے تجاویز'),
    ('Arabic Name', 'عربی نام'), ('Show Keyboard', 'کی بورڈ دکھائیں'), ('Show keyboard', 'کی بورڈ دکھائیں'),
    ("Mother's Name", 'والدہ کا نام'), ('Need help? See example names', 'مدد چاہیے؟ مثالی نام دیکھیں'),
    ('Discover My Profile', 'میرا پروفائل دیکھیں'), ('Clear', 'صاف کریں'),
    ('Both names are required for accurate guidance', 'درست رہنمائی کے لیے دونوں نام ضروری ہیں'),
    ('Privacy & Security', 'رازداری اور حفاظت'), ('Invite your loved ones', 'اپنے پیاروں کو دعوت دیں'),
    ('Share sacred wisdom — invite friends to discover their spiritual profile', 'مقدس حکمت بانٹیں — دوستوں کو اپنا روحانی پروفائل دیکھنے کی دعوت دیں'),
    ('Invite', 'دعوت دیں'), ('Share', 'شیئر کریں'), ('Learning Center', 'سیکھنے کا مرکز'),
    ('Type to search: Muhammad, Ali, Hassan...', 'تلاش کے لیے لکھیں: \u2066Muhammad, Ali, Hassan…\u2069'),
    ('Type to search: Fatima, Aisha, Khadija...', 'تلاش کے لیے لکھیں: \u2066Fatima, Aisha, Khadija…\u2069'),
    ('Export', 'ایکسپورٹ'), ('Overview', 'جائزہ'), ('Quick summary', 'مختصر خلاصہ'), ('Quick Summary', 'مختصر خلاصہ'),
    ('Personality', 'شخصیت'), ('Your nature', 'آپ کی فطرت'), ('Career Guidance', 'پیشہ ورانہ رہنمائی'),
    ('Career paths', 'پیشہ ورانہ راستے'), ('Career Paths', 'پیشہ ورانہ راستے'), ('Blessed Day', 'مبارک دن'), ('Power day', 'خاص دن'),
    ('New Calculation', 'نیا حساب'), ('Your Profile', 'آپ کا پروفائل'), ('DOMINANT ELEMENT', 'غالب عنصر'), ('Element', 'عنصر'),
    ('Overall Alignment', 'مجموعی ہم آہنگی'), ('Career Match', 'پیشے کی مناسبت'), ('Spiritual Practice', 'روحانی عمل'),
    ('Your Numbers', 'آپ کے اعداد'), ('ID Number', 'شناختی عدد'), ('Total', 'کل'), ('Ḥadad Value', 'عدد کی قیمت'),
    ('Count', 'تعداد'), ('Repetitions', 'تکرار'), ('Your Power Day', 'آپ کا خاص دن'),
    ('Most auspicious for important decisions', 'روایت میں اہم کاموں کے لیے موزوں سمجھا جاتا ہے'), ('Core Trait', 'بنیادی خصوصیت'),
    ('Key Insights', 'اہم نکات'), ('categories', 'زمرے'), ('Best practiced on', 'بہتر وقت'), ('Wednesday night', 'شبِ بدھ (منگل کی شام)'),
    ('Social Strengths', 'سماجی خوبیاں'), ('Your Colors', 'آپ کے رنگ'), ('Key Recommendation', 'اہم مشورہ'), ('Priority', 'ترجیح'),
    ('Your spiritual profile at a glance', 'آپ کا روحانی پروفائل ایک نظر میں'), ('Career Direction', 'پیشہ ورانہ سمت'),
    ('Daily Practice', 'روزانہ کا عمل'), ('Recite daily for spiritual balance', 'روحانی توازن کے لیے روزانہ پڑھیں'), ('Next Steps', 'اگلے قدم'),
    # compatibility
    ('ASRĀR · COMPATIBILITY', 'اسرار · مطابقت'),
    ('Explore relationship harmony through Islamic numerology', 'اسلامی علم الاعداد کے ذریعے رشتوں کی ہم آہنگی پر غور کریں'),
    ('Person to Person', 'دو افراد کا موازنہ'), ('By Names', 'ناموں سے'), ('By Birth Date', 'تاریخِ پیدائش سے'), ('Enter Two Names', 'دو نام لکھیں'),
    ('Calculate the Soul Connection using traditional Islamic numerology', 'روایتی اسلامی علم الاعداد سے روحانی ربط کا حساب کریں'),
    ('Read this as...', 'اسے اس لحاظ سے پڑھیں...'), ('Universal', 'عمومی'), ('Marriage', 'شادی'), ('Friendship', 'دوستی'),
    ('Family', 'خاندان'), ('Work', 'کام'), ('Person 1', 'پہلا فرد'), ('Person 2', 'دوسرا فرد'),
    ('Calculate Soul Connection', 'روحانی ربط کا حساب کریں'), ('Relationship context', 'رشتے کی نوعیت'),
    ('Soul Connection', 'روحانی ربط'), ('A traditional soul-resonance marker from ʿIlm al-Ḥurūf', 'علم الحروف سے روحانی ہم آہنگی کی ایک روایتی علامت'),
    ('Independent metric', 'الگ پیمانہ'), ('OF NINE', 'نو میں سے'), ('Caution', 'احتیاط'), ('Guidance', 'رہنمائی'), ('Protection', 'حفاظت'),
    ('Meaning', 'مفہوم'), ('Outlook', 'پہلو'), ('Marriage Outlook', 'شادی کے پہلو'), ('Friendship Outlook', 'دوستی کے پہلو'),
    ('Family Outlook', 'خاندانی پہلو'), ('Work Outlook', 'کام کے پہلو'), ('Watch Out', 'احتیاط کے پہلو'), ('Key to Success', 'کامیابی کی کنجی'),
    ('How this number is calculated', 'یہ عدد کیسے نکالا جاتا ہے'), ('Calculate Another Pair', 'ایک اور جوڑے کا حساب کریں'),
    # abjad
    ('Classical letter-value analysis for any Arabic text', 'کسی بھی عربی متن کے حروف کی قیمتوں کا کلاسیکی تجزیہ'),
    ('Calculation Type', 'حساب کی قسم'), ('What would you like to calculate?', 'آپ کس چیز کا حساب کرنا چاہتے ہیں؟'),
    ('9 calculators', '9 کیلکولیٹر'), ('Name & Text Analysis', 'نام اور متن کا تجزیہ'), ('Name', 'نام'),
    ('Calculates the Abjad value and letter correspondences for a single name.', 'ایک نام کی ابجد قیمت اور حروف کی نسبتیں نکالتا ہے۔'),
    ('Phrase', 'عبارت'),
    ('Analyzes any Arabic sentence or phrase using the Abjad letter-value system.', 'ابجد کے نظام سے کسی بھی عربی جملے یا عبارت کا تجزیہ کرتا ہے۔'),
    ('General', 'عام'), ('Calculates the Abjad value of any Arabic text or individual letters.', 'کسی بھی عربی متن یا الگ حروف کی ابجد قیمت نکالتا ہے۔'),
    ('Calculates the Abjad value of a selected Divine Name and a suggested dhikr count.', 'منتخب اسمِ الٰہی کی ابجد قیمت اور ذکر کی تجویز کردہ تعداد نکالتا ہے۔'),
    ('Finds the Divine Name that resonates with a name through the 28-letter Abjad cycle.', '28 حروف کے ابجد دور کے ذریعے وہ اسمِ الٰہی معلوم کرتا ہے جو کسی نام سے ہم آہنگ ہو۔'),
    ("Surfaces a Qur'anic verse for reflection based on a name's numerical value.", 'نام کی عددی قیمت کی بنیاد پر تدبر کے لیے ایک قرآنی آیت سامنے لاتا ہے۔'),
    ("Calculates the Abjad value of a specific Qur'anic verse (Surah + Ayah).", 'کسی مخصوص قرآنی آیت (سورت + آیت) کی ابجد قیمت نکالتا ہے۔'),
    ('Finds the Islamic (Hijri) month of your birth date and its traditional sadaqah guidance.', 'آپ کی تاریخِ پیدائش کا اسلامی (ہجری) مہینہ اور اس کے لیے صدقے کی روایتی رہنمائی معلوم کرتا ہے۔'),
    ('Finds traditional sadaqah guidance for a day of birth or a day you plan to give.', 'پیدائش کے دن کے لیے، یا جس دن آپ صدقہ دینا چاہتے ہیں اس کے لیے روایتی رہنمائی دیتا ہے۔'),
    ('Abjad calculator', 'ابجد کیلکولیٹر'), ('Search calculators', 'کیلکولیٹر تلاش کریں'), ('All calculators', 'تمام کیلکولیٹر'),
    ('Calculate', 'حساب کریں'),
    # planetary hours
    ('Back to Home', 'ہوم پر واپس'), ('Planetary Hours', 'ساعاتِ کواکب'), ('What are Planetary Hours?', 'ساعاتِ کواکب کیا ہیں؟'),
    ('Current Planetary Hour', 'موجودہ ساعت'), ('🗓 How to Use Planetary Hours', '🗓 ساعاتِ کواکب کیسے استعمال کریں'),
    ('Check the current planetary hour above — note the ruling planet, element, and remaining time.', 'اوپر موجودہ ساعت دیکھیں — حاکم سیارہ، عنصر اور باقی وقت نوٹ کریں۔'),
    ("Match your intended action to the planet's strengths (see guide below). Schedule important activities during supportive hours.",
     'اپنے ارادہ کردہ کام کو سیارے کی خوبیوں سے ملائیں (نیچے رہنمائی دیکھیں)۔ اہم کام موافق ساعتوں میں رکھیں۔'),
    ('Use "See All Hours" to plan ahead. The first hour of the day is ruled by that day\'s planet.',
     'پیشگی منصوبہ بندی کے لیے “تمام ساعتیں دیکھیں” استعمال کریں۔ دن کی پہلی ساعت پر اسی دن کا سیارہ حاکم ہوتا ہے۔'),
    ('🪐 Planetary Hour Guide', '🪐 ساعاتِ کواکب کی رہنمائی'),
    ('Leadership decisions', 'قیادت کے فیصلے'), ('Visibility & reputation', 'شہرت اور ساکھ'), ('Official matters', 'سرکاری معاملات'),
    ('Seeking authority', 'منصب اور ذمہ داری کے معاملات'), ('Spiritual elevation', 'روحانی بلندی'),
    ('Travel & movement', 'سفر اور نقل و حرکت'), ('Emotional healing', 'جذباتی شفا'), ('Family matters', 'گھریلو معاملات'),
    ('Dreams & intuition', 'خواب اور وجدان'), ('New beginnings', 'نئی شروعات'),
    ('Courage & action', 'ہمت اور عمل'), ('Physical work', 'جسمانی کام'), ('Overcoming obstacles', 'رکاوٹوں پر قابو'),
    ('Surgery (if needed)', 'سرجری (اگر ضروری ہو)'), ('Cutting ties', 'نقصان دہ معاملات یا شراکتیں ختم کرنا'),
    ('Study & learning', 'پڑھائی اور سیکھنا'), ('Writing & communication', 'تحریر اور رابطہ'), ('Trade & contracts', 'تجارت اور معاہدے'),
    ('Teaching', 'تدریس'), ('Mental work', 'ذہنی کام'),
    ('Wealth & abundance', 'دولت اور فراوانی'), ('Expansion & growth', 'وسعت اور ترقی'), ('Long journeys', 'لمبے سفر'), ('Higher education', 'اعلیٰ تعلیم'),
    ('Love & relationships', 'محبت اور تعلقات'), ('Beauty & art', 'حسن اور فن'), ('Harmony & peace', 'ہم آہنگی اور امن'), ('Social gatherings', 'سماجی اجتماعات'),
    ('Long-term planning', 'طویل مدتی منصوبہ بندی'), ('Discipline & structure', 'نظم و ضبط'), ('Land & property', 'زمین اور جائیداد'),
    ('Legal matters', 'قانونی معاملات'), ('Endurance practices', 'برداشت کی مشق'),
    ('📐 The Chaldean Order', '📐 کلدانی ترتیب'),
    ('The 7 planets cycle in this fixed sequence, each hour ruled by the next planet:', 'سات سیارے اس مقررہ ترتیب میں گردش کرتے ہیں، اور ہر ساعت پر اگلا سیارہ حاکم ہوتا ہے:'),
    ('After Saturn, the cycle repeats from ♄ → ♃ → ♂ → ☉ → ♀ → ☿ → ☽ → ♄...', 'زحل کے بعد یہ دور پھر سے دہرایا جاتا ہے: ♄ → ♃ → ♂ → ☉ → ♀ → ☿ → ☽ → ♄...'),
    # planet of the day
    ('The Daily Ruling Planet', 'دن کا حاکم سیارہ'), ("Today's Ruling Planet", 'آج کا حاکم سیارہ'),
    ('Fire ♦ Masculine', 'آگ ♦ مذکر'), ('Water ♦ Feminine', 'پانی ♦ مؤنث'), ('Air ♦ Neutral', 'ہوا ♦ ممتزج'),
    ('Air ♦ Masculine', 'ہوا ♦ مذکر'), ('Earth ♦ Feminine', 'مٹی ♦ مؤنث'), ('Earth ♦ Masculine', 'مٹی ♦ مذکر'),
    ('📅 The Seven Days & Their Planets', '📅 سات دن اور ان کے سیارے'),
    ('Vitality, authority, fame, clarity, honour, generosity, willpower', 'توانائی، اختیار، شہرت، وضاحت، عزت، سخاوت، قوتِ ارادی'),
    ('Emotions, intuition, memory, nurturing, cycles, dreams, receptivity', 'جذبات، وجدان، یادداشت، پرورش، ادوار، خواب، قبولیت'),
    ('Courage, energy, action, conflict, drive, assertion, cutting through obstacles', 'ہمت، توانائی، عمل، کشمکش، لگن، اعتماد، رکاوٹوں کو عبور کرنا'),
    ('Intellect, communication, trade, learning, adaptability, writing, wit', 'عقل، رابطہ، تجارت، علم، لچک، تحریر، ذہانت'),
    ('Expansion, wisdom, generosity, justice, abundance, growth, spirituality', 'وسعت، حکمت، سخاوت، عدل، فراوانی، ترقی، روحانیت'),
    ('Love, beauty, harmony, art, pleasure, relationships, grace', 'محبت، حسن، ہم آہنگی، فن، مسرت، تعلقات، وقار'),
    ('Discipline, structure, patience, endurance, limitation, mastery, wisdom through hardship', 'نظم و ضبط، ترتیب، صبر، برداشت، حدود، مہارت، سختی سے حاصل ہونے والی حکمت'),
    ('📐 Rulerships & Exaltations', '📐 بیوت اور شرف'),
    ('Each planet has a zodiac sign where it is at home (domicile/rulership) and one where it is especially powerful (exaltation).',
     'ہر سیارے کا ایک برج ایسا ہے جو اس کا اپنا گھر (بیت) ہے، اور ایک ایسا جہاں وہ خاص طور پر قوی ہوتا ہے (شرف)۔'),
    # ikhtiyarat
    ('Occasion', 'موقع'), ('Travel', 'سفر'), ('Business / Contracts', 'کاروبار / معاہدے'), ('Starting a Business', 'کاروبار کا آغاز'),
    ('Medical Treatment', 'علاج'), ('Moving / Building', 'منتقلی / تعمیر'), ('Education / Studies', 'تعلیم / پڑھائی'),
    ('Check My Date', 'میری تاریخ جانچیں'), ('Find Best Dates', 'بہترین تاریخیں تلاش کریں'), ('Date', 'تاریخ'),
    ('Time (optional)', 'وقت (اختیاری)'), ('Location', 'مقام'), ('Use my location', 'میرا مقام استعمال کریں'),
    ('Mecca (default)', 'مکہ مکرمہ (پہلے سے طے شدہ)'),
    ('Calculated for Mecca until you share your location.', 'جب تک آپ اپنا مقام نہ بتائیں، حساب مکہ مکرمہ کے لیے ہے۔'),
    ('Location unavailable — allow it in your browser settings to use your city.', 'مقام دستیاب نہیں — اپنے شہر کے لیے براؤزر کی سیٹنگز میں اجازت دیں۔'),
    ('Locating…', 'مقام معلوم کیا جا رہا ہے…'), ('Check this date', 'یہ تاریخ جانچیں'), ('From', 'سے'), ('To', 'تک'),
    ('Scan this range', 'یہ مدت جانچیں'), ('Best time window', 'بہترین وقت'), ('Least-afflicted time', 'سب سے کم متاثر وقت'),
    ('Full breakdown', 'مکمل تفصیل'), ('Simple', 'سادہ'), ('Detailed', 'تفصیلی'), ('Nearest better dates', 'قریب ترین بہتر تاریخیں'),
    ('No acceptable dates found within 45 days.', '45 دن کے اندر کوئی قابلِ قبول تاریخ نہیں ملی۔'),
    ('Showing the best available option instead:', 'اس کے بجائے دستیاب بہترین انتخاب دکھایا جا رہا ہے:'),
    ('Top 5 dates', 'سرفہرست 5 تاریخیں'), ('Calculating…', 'حساب ہو رہا ہے…'), ('Score', 'اسکور'), ('Close', 'بند کریں'),
    ('Link copied!', 'لنک کاپی ہو گیا!'),
    ('Excellent', 'بہت عمدہ'), ('Good', 'اچھا'), ('Acceptable', 'قابلِ قبول'), ('Weak', 'کمزور'), ('Avoid', 'اجتناب'),
    ('Day of the Week', 'ہفتے کا دن'), ('Favorable Planetary Hour', 'موافق ساعت'),
    ('No concern here — this factor looks neutral for this date.', 'یہاں کوئی تشویش نہیں — اس تاریخ کے لیے یہ عنصر معتدل ہے۔'),
    ('Dark of the Moon (Muḥāq)', 'محاق (چاند کی تاریک راتیں)'), ('Moon Combust (Muḥtaraq)', 'قمر محترق'),
    ('Moon Void of Course (Khāliya al-Sayr)', 'قمر خالی السیر (کسی سیارے سے اتصال نہیں)'), ('Moon Applying to Saturn/Mars (Hard Aspect)', 'قمر کا زحل/مریخ سے اتصال (سخت نظر)'),
    ('Eclipse Proximity', 'گرہن کی قربت'), ('Moon Under the Sun’s Beams (Taḥt al-Shuʿāʿ)', 'قمر تحت الشعاع'), ('Moon Waning', 'گھٹتا چاند'),
    ('Via Combusta (Al-Ṭarīqa al-Muḥtariqa)', 'الطریقۃ المحترقۃ (میزان و عقرب کا مخصوص حصہ)'), ('Moon in Fall or Detriment', 'قمر ہبوط یا وبال میں'),
    ('Venus Combust', 'زہرہ محترق'), ('Venus Retrograde', 'زہرہ رجعت میں'), ('Venus in Fall or Detriment', 'زہرہ ہبوط یا وبال میں'),
    ('Mercury Retrograde (Contract Signing)', 'عطارد رجعت میں (معاہدے پر دستخط)'), ('Moon Separating from Benefics', 'قمر کا سعد سیاروں سے انصراف (جدا ہونا)'),
    ('Moon Waxing, Clear of the Beams', 'بڑھتا چاند، شعاعوں سے باہر'), ('Moon Essential Dignity', 'قمر کی ذاتی قوت'),
    ('Moon Applying to Venus or Jupiter', 'قمر کا زہرہ یا مشتری سے اتصال'), ('Venus Dignified', 'زہرہ اپنی قوت میں'),
]
for en, ur in U:
    add('ui', en, ur)
