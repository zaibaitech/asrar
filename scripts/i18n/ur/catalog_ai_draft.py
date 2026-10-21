# -*- coding: utf-8 -*-
"""
Urdu result texts drafted by an AI assistant (Claude), Oct 2026. Native-reviewed by the Language Reviewer
in review sheets 2 and 3 (21 Oct 2026); every entry has a reviewed row in review_status.json
(sheet2 / sheet3), and "# reviewed <row> (pass N)" marks each corrected line.

English source text (exact, as rendered by the tools) -> Urdu draft. Merged into
public/i18n/ur-ui.json by build_catalog.py (group 'ai'); every pair is listed in
docs/i18n/ur-review.md under "AI-drafted result texts" for the Language Reviewer.
/ur stays noindex, out of the sitemap and hreflang until these are reviewed.

Sections (first field):
  rules     Ikhtiyarat rule explanations (Simple mode, src/lib/ikhtiyarat/ruleSimplification.ts; plus the scoring note in src/features/ikhtiyarat/copy.ts)
  arch      Soul-connection archetypes (src/constants/soulConnectionArchetypes.ts)
  manzil    Lunar mansions (src/lib/lunarMansions.ts)
  career    Burj career texts (src/data/burujData.json, career.*)
  career-ui Labels of the burj career tab (CareerTabAdvanced.tsx)
  potd      Planet-of-the-day guidance paragraphs (app/planet-of-the-day/PlanetOfTheDayPage.tsx)

Kept out on purpose: Divine Names (Arabic comes from the data files, never translated here)
and Qur'an text. src/lib/urdu-result-coverage.test.ts fails if a source string changes
without its Urdu pair being updated.
"""

AI_ENTRIES = [  # (section, en, ur)
    ('career-ui', 'Career & Vocation Guidance', 'پیشہ اور کیریئر کی رہنمائی'),
    ('career-ui', 'Career paths that resonate with your spiritual energy and elemental nature', 'وہ پیشہ ورانہ راستے جو آپ کی روحانی توانائی اور آپ کے عنصری مزاج سے ہم آہنگ ہیں'),
    ('career-ui', 'Traditional Wisdom', 'روایتی حکمت'),
    ('career-ui', 'Traditional Islamic Guidance', 'روایتی اسلامی رہنمائی'),
    ('career-ui', 'Special Spiritual Blessing', 'روایتی تعبیر: زمینی صنعتوں سے خاص نسبت'),
    ('career-ui', 'Despite being a Water element, you receive special blessings from Earth industries. This unique spiritual gift allows you to thrive in both water-related AND earth-based careers—giving you more pathways to success than most other elements.', 'روایتی تعبیر کے مطابق، آبی مزاج رکھنے والوں کے لیے زمینی صنعتوں کو بھی قابلِ غور سمجھا جاتا ہے۔ اسے کامیابی کی ضمانت یا پیشہ منتخب کرنے کا واحد معیار نہ سمجھیں۔'),
    ('career-ui', 'Recommended Career Fields', 'تجویز کردہ پیشہ ورانہ شعبے'),
    ('career-ui', 'Expand All', 'سب کھولیں'),
    ('career-ui', 'Collapse All', 'سب بند کریں'),
    ('career-ui', 'opportunities', 'مواقع'),
    ('career-ui', 'Guiding Principle', 'رہنما اصول'),
    ('career-ui', 'Let this principle guide your career decisions and professional journey.', 'اس اصول کو اپنے پیشہ ورانہ فیصلوں اور سفر میں رہنما بنائیں۔'),
    ('career-ui', 'Fields to Consider Carefully', 'جن شعبوں پر احتیاط سے غور کریں'),
    ('career-ui', 'These industries may not align optimally with your spiritual energy. While not forbidden, they may present more challenges or require extra effort.', 'ممکن ہے یہ صنعتیں آپ کی روحانی توانائی سے پوری طرح ہم آہنگ نہ ہوں۔ یہ ممنوع نہیں ہیں، مگر ان میں زیادہ مشکلات پیش آ سکتی ہیں یا اضافی محنت درکار ہو سکتی ہے۔'),  # reviewed 17.2 (pass 6)
    ('career-ui', 'Traditional Guidance:', 'روایتی رہنمائی:'),
    ('career-ui', 'Modern Application:', 'جدید اطلاق:'),
    ('career-ui', "This doesn't mean complete avoidance—some individuals still succeed in these fields. The tradition suggests focusing your main efforts on the recommended fields above.", 'اس کا مطلب مکمل پرہیز نہیں — بہت سے لوگ ان شعبوں میں بھی کامیاب ہوتے ہیں۔ روایتی نقطۂ نظر سے بنیادی کوششیں اوپر دیے گئے شعبوں پر مرکوز کرنا زیادہ موزوں سمجھا جاتا ہے۔'),  # reviewed 25.13 (pass 8); source fix S13 (list 2): EN re-keyed, reviewed Urdu kept
    ('career-ui', 'Download Career Guide PDF', 'کیریئر گائیڈ (پی ڈی ایف) ڈاؤن لوڈ کریں'),
    ('career-ui', 'Share Recommendations', 'تجاویز شیئر کریں'),
    ('career-ui', 'Career Fields', 'پیشہ ورانہ شعبے'),
    ('career-ui', 'Opportunities', 'مواقع'),
    ('career-ui', 'Your Element', 'آپ کا عنصر'),
    ('career-ui', 'Aligned Path', 'ہم آہنگ راستہ'),
    ('rules', 'The Moon is in its darkest phase right before a new moon — traditionally a time to wait, not begin.', 'نئے چاند سے ذرا پہلے قمر اپنے تاریک ترین مرحلے (محاق) میں ہوتا ہے — روایتی طور پر یہ انتظار کا وقت ہے، آغاز کا نہیں۔'),
    ('rules', 'The Moon is too close to the Sun right now and appears "hidden" — this weakens its influence.', 'قمر اس وقت شمس کے بہت قریب ہے اور «پوشیدہ» (محترق) ہو جاتا ہے — اس سے اس کا اثر کمزور سمجھا جاتا ہے۔'),  # reviewed 20.2 (pass 7)
    ('rules', "The Moon isn't forming any meaningful connection with another planet right now — traditionally, things begun in this state tend to fizzle out.", 'قمر اس وقت کسی دوسرے سیارے سے کوئی نمایاں ربط نہیں بنا رہا — روایت میں اس حالت میں شروع کیے گئے کام اکثر بے نتیجہ رہ جاتے ہیں۔'),
    ('rules', 'The Moon is in a tense position with Saturn or Mars right now — a traditional warning sign for this kind of start.', 'قمر اس وقت زحل یا مریخ کے ساتھ تناؤ والی نسبت میں ہے — اس قسم کے آغاز کے لیے یہ روایتی انتباہی علامت ہے۔'),  # reviewed 20.3 (pass 7)
    ('rules', 'A solar or lunar eclipse is happening within a day of this date — traditionally treated as an unsettled period to avoid for major beginnings.', 'اس تاریخ کے ایک دن کے اندر شمسی یا قمری گرہن ہے — روایت میں اسے غیر مستحکم دور مانا جاتا ہے جس میں بڑے آغاز سے پرہیز کیا جاتا ہے۔'),
    ('rules', 'The Moon is close enough to the Sun to be dimmed, though not fully hidden — a mild weakening.', 'قمر شمس کے اتنا قریب ہے کہ اس کی روشنی ماند پڑ گئی ہے، مگر وہ مکمل پوشیدہ نہیں — یہ ہلکی کمزوری ہے۔'),
    ('rules', 'The Moon is shrinking in light right now (waning) — traditionally less favorable for starting something new.', 'قمر کی روشنی اس وقت گھٹ رہی ہے (گھٹتا چاند) — نئی چیز شروع کرنے کے لیے روایتی طور پر کم موافق ہے۔'),
    ('rules', 'The Moon is passing through a stretch of the zodiac traditionally considered turbulent (the "burning path").', 'قمر اس وقت دائرۃ البروج کے اس حصے سے گزر رہا ہے جسے روایت میں پُرتلاطم سمجھا جاتا ہے («الطریقۃ المحترقۃ»)۔'),
    ('rules', 'The Moon is in a sign where it traditionally expresses its qualities less comfortably.', 'قمر اس برج میں ہے جہاں روایت کے مطابق اس کی خصوصیات کم آسانی سے ظاہر ہوتی ہیں۔'),  # reviewed 20.5 (pass 7)
    ('rules', 'Venus — the planet of love and harmony — is too close to the Sun right now and appears "hidden," weakening its supportive influence.', 'زہرہ — محبت اور ہم آہنگی کا سیارہ — اس وقت شمس کے بہت قریب ہے اور «پوشیدہ» ہو گئی ہے، اس لیے اس کا معاون اثر کمزور سمجھا جاتا ہے۔'),  # reviewed 20.6 (pass 7)
    ('rules', 'Venus appears to be moving backward right now — traditionally a caution for matters of love and relationships.', 'زہرہ اس وقت الٹی چال (رجعت) میں نظر آتی ہے — محبت اور تعلقات کے معاملات میں روایتی طور پر احتیاط کی علامت ہے۔'),  # reviewed 20.7 (pass 7)
    ('rules', 'Venus is in a sign where it traditionally expresses its qualities less comfortably.', 'زہرہ اس برج میں ہے جہاں روایت کے مطابق اس کی خصوصیات کم آسانی سے ظاہر ہوتی ہیں۔'),  # reviewed 20.8 (pass 7)
    ('rules', 'Mercury appears to be moving backward right now — a mild caution specifically for the paperwork/contract side of things.', 'عطارد اس وقت الٹی چال (رجعت) میں نظر آتا ہے — خاص طور پر کاغذی کارروائی اور معاہدوں کے پہلو میں ہلکی احتیاط کی علامت ہے۔'),
    ('rules', "The Moon isn't currently connecting with either of the two traditionally supportive planets (Venus or Jupiter).", 'قمر اس وقت دونوں روایتی سعد سیاروں (زہرہ یا مشتری) میں سے کسی سے ربط نہیں بنا رہا۔'),
    ('rules', "The Moon is growing in light and clear of the Sun's glare right now — one of the most favorable classical signs for a fresh start.", 'قمر کی روشنی بڑھ رہی ہے اور وہ شمس کی چمک سے دور ہے — نئے آغاز کے لیے کلاسیکی علامات میں سب سے موافق علامتوں میں سے ایک ہے۔'),
    ('rules', 'The Moon is in a sign it traditionally feels very at home in.', 'قمر ایسے برج میں ہے جہاں اسے روایتی طور پر اپنے گھر جیسی سہولت ملتی ہے۔'),
    ('rules', 'The Moon is in the sign of its greatest traditional strength.', 'قمر اپنی سب سے زیادہ روایتی قوت والے برج میں ہے۔'),
    ('rules', 'The Moon is in a sign that gives it a mild traditional boost here.', 'قمر ایسے برج میں ہے جو اسے یہاں روایتی طور پر ہلکی تقویت دیتا ہے۔'),
    ('rules', 'The Moon is forming a supportive connection with Venus, the planet of love and harmony, right now.', 'قمر اس وقت زہرہ — محبت اور ہم آہنگی کے سیارے — کے ساتھ موافق ربط بنا رہا ہے۔'),
    ('rules', 'The Moon is forming a supportive connection with Jupiter, the planet of growth and good fortune, right now.', 'قمر اس وقت مشتری — نمو اور خوش بختی کے سیارے — کے ساتھ موافق ربط بنا رہا ہے۔'),
    ('rules', 'Venus is in a sign it traditionally feels very at home in.', 'زہرہ ایسے برج میں ہے جہاں اسے روایتی طور پر اپنے گھر جیسی سہولت ملتی ہے۔'),
    ('rules', 'Venus is in the sign of its greatest traditional strength.', 'زہرہ اپنی سب سے زیادہ روایتی قوت والے برج میں ہے۔'),
    ('rules', 'This falls on Friday — the day most recommended in Islamic tradition for this occasion.', 'یہ جمعہ کا دن ہے — اسلامی روایت میں اس موقع کے لیے سب سے زیادہ پسندیدہ دن۔'),
    ('rules', 'This falls on Thursday, a day traditionally seen as favorable.', 'یہ جمعرات کا دن ہے، جسے روایت میں موافق سمجھا جاتا ہے۔'),
    ('rules', 'This falls on Monday, a day traditionally seen as mildly favorable.', 'یہ پیر کا دن ہے، جسے روایت میں کسی حد تک موافق سمجھا جاتا ہے۔'),  # reviewed 20.17 (pass 7)
    ('rules', 'This specific time window aligns with a planetary hour traditionally seen as supportive.', 'یہ مخصوص وقت ایک ایسی ساعتِ کواکب سے مطابقت رکھتا ہے جسے روایتی طور پر معاون سمجھا جاتا ہے۔'),
    ('rules', 'The Moon is passing through a lunar "station" traditionally considered favorable for this occasion.', 'قمر ایسی منزل سے گزر رہا ہے جسے اس موقع کے لیے روایتی طور پر موافق سمجھا جاتا ہے۔'),
    ('rules', 'The Moon is passing through a lunar "station" traditionally considered less favorable for this occasion.', 'قمر ایسی منزل سے گزر رہا ہے جسے اس موقع کے لیے روایتی طور پر کم موافق سمجھا جاتا ہے۔'),
    ('rules', "The Moon isn't forming any meaningful connection right now — traditionally, a journey begun in this state tends to come to nothing.", 'قمر اس وقت کوئی نمایاں ربط نہیں بنا رہا — روایتی تعبیر میں اس حالت میں شروع کیے گئے سفر کے بے نتیجہ رہنے کا رجحان سمجھا جاتا ہے۔'),
    ('rules', 'The Moon is in a tense position with Saturn or Mars right now — a traditional warning of danger or delay en route.', 'قمر اس وقت زحل یا مریخ کے ساتھ تناؤ والی نسبت میں ہے — روایت میں اسے راستے میں خطرے یا تاخیر کی انتباہی علامت سمجھا جاتا ہے۔'),  # reviewed 20.21 (pass 7)
    ('rules', 'The Moon is too close to the Sun right now and appears "hidden" — this weakens the traveler\'s own influence in the chart.', 'قمر اس وقت شمس کے بہت قریب ہے اور «پوشیدہ» ہو گیا ہے — اس سے زائچے میں مسافر کا اپنا اثر کمزور سمجھا جاتا ہے۔'),  # reviewed 20.22 (pass 7)
    ('rules', 'The Moon is in a sign associated with quick movement — traditionally favorable for setting out.', 'قمر ایسے برج میں ہے جو تیز رفتاری سے منسوب ہے — روانگی کے لیے روایتی طور پر موافق۔'),
    ('rules', 'The Moon is in a sign associated with staying put — traditionally a caution for travel, suggesting possible delay.', 'قمر ایسے برج میں ہے جو ٹھہراؤ سے منسوب ہے — سفر کے لیے روایتی طور پر احتیاط کی علامت، جس میں ممکنہ تاخیر کا اشارہ ہے۔'),
    ('rules', 'Mercury appears to be moving backward right now — traditionally linked to itinerary changes, lost documents, or mix-ups.', 'عطارد اس وقت الٹی چال (رجعت) میں نظر آتا ہے — روایت میں اسے سفری پروگرام کی تبدیلی، دستاویزات کے گم ہونے یا الجھن سے جوڑا جاتا ہے۔'),
    ('rules', 'The Moon is growing in light right now — traditionally favorable for setting out and making progress.', 'قمر کی روشنی اس وقت بڑھ رہی ہے — روانگی اور پیش رفت کے لیے روایتی طور پر موافق ہے۔'),
    ('rules', 'The Moon is forming a supportive connection with Venus or Jupiter right now — a sign of a smooth, well-supported journey.', 'قمر اس وقت زہرہ یا مشتری کے ساتھ موافق ربط بنا رہا ہے — روایت میں اسے ہموار اور آسان سفر کی علامت سمجھا جاتا ہے۔'),  # reviewed 20.27 (pass 7)
    ('rules', 'This specific time window aligns with a planetary hour traditionally seen as supportive for travel.', 'یہ مخصوص وقت ایک ایسی ساعتِ کواکب سے مطابقت رکھتا ہے جسے روایتی طور پر سفر کے لیے معاون سمجھا جاتا ہے۔'),
    ('rules', 'This is an early-morning departure — the Prophet ﷺ asked Allah to bless the early mornings of his ummah.', 'یہ صبح سویرے کی روانگی ہے — نبی کریم ﷺ نے اپنی امت کے لیے صبح سویرے کے اوقات میں برکت کی دعا فرمائی۔'),  # reviewed 17.4 (pass 6)
    ('rules', 'The Moon is passing through a lunar "station" traditionally considered favorable for travel.', 'قمر ایسی منزل سے گزر رہا ہے جسے سفر کے لیے روایتی طور پر موافق سمجھا جاتا ہے۔'),
    ('rules', 'The Moon is passing through a lunar "station" traditionally considered less favorable for travel.', 'قمر ایسی منزل سے گزر رہا ہے جسے سفر کے لیے روایتی طور پر کم موافق سمجھا جاتا ہے۔'),
    ('rules', 'Mercury is in a comfortable position right now, supporting clear plans and communication.', 'عطارد اس وقت موافق حالت میں ہے، جو واضح منصوبہ بندی اور بات چیت میں معاون ہے۔'),
    ('rules', 'This falls on Wednesday, a day traditionally linked to travel and communication.', 'یہ بدھ کا دن ہے، جسے روایت میں سفر اور رابطے سے جوڑا جاتا ہے۔'),
    ('rules', 'Mercury appears to be moving backward right now — the single most-cited traditional caution against signing contracts or starting negotiations.', 'عطارد اس وقت الٹی چال (رجعت) میں نظر آتا ہے — معاہدوں پر دستخط یا مذاکرات کے آغاز کے خلاف سب سے زیادہ بیان کی جانے والی روایتی احتیاط۔'),
    ('rules', "The Moon isn't forming any meaningful connection right now — traditionally, a deal begun in this state tends to come to nothing.", 'قمر اس وقت کوئی نمایاں ربط نہیں بنا رہا — روایتی تعبیر میں اس حالت میں شروع کیے گئے سودے کے بے نتیجہ رہنے کا رجحان سمجھا جاتا ہے۔'),
    ('rules', 'Mercury is too close to the Sun right now and appears "hidden" — this weakens the deal\'s own significator.', 'عطارد اس وقت شمس کے بہت قریب ہے اور «پوشیدہ» ہو گیا ہے — اس سے سودے کی اپنی علامت کمزور سمجھی جاتی ہے۔'),  # reviewed 20.34 (pass 7)
    ('rules', 'The Moon is in a tense position with Saturn or Mars right now — a traditional warning of dispute or a deal turning sour.', 'قمر اس وقت زحل یا مریخ کے ساتھ تناؤ والی نسبت میں ہے — جھگڑے یا سودے کے بگڑ جانے کی روایتی انتباہی علامت۔'),  # reviewed 20.35 (pass 7)
    ('rules', 'The Moon is growing in light right now — traditionally favorable for starting and growing a venture.', 'قمر کی روشنی اس وقت بڑھ رہی ہے — کاروبار شروع کرنے اور بڑھانے کے لیے روایتی طور پر موافق ہے۔'),
    ('rules', 'The Moon is forming a supportive connection with Jupiter right now — traditionally the planet of profit and gain.', 'قمر اس وقت مشتری — روایتی طور پر نفع اور کمائی کے سیارے — کے ساتھ موافق ربط بنا رہا ہے۔'),
    ('rules', 'The Moon is forming a supportive connection with Venus right now — favorable for amicable dealing between both sides.', 'قمر اس وقت زہرہ کے ساتھ موافق ربط بنا رہا ہے — دونوں فریقوں کے درمیان خوش اسلوبی سے لین دین کے لیے موافق۔'),
    ('rules', 'Mercury is in a sign it traditionally feels very at home in — strong for negotiation and paperwork.', 'عطارد ایسے برج میں ہے جہاں اسے روایتی طور پر اپنے گھر جیسی سہولت ملتی ہے — مذاکرات اور کاغذی کارروائی کے لیے مضبوط۔'),
    ('rules', 'Mercury is in a comfortable position right now, free of traditional weaknesses.', 'عطارد اس وقت موافق حالت میں ہے اور روایتی کمزوریوں سے خالی ہے۔'),
    ('rules', 'This specific time window aligns with a planetary hour traditionally seen as supportive for business.', 'یہ مخصوص وقت ایک ایسی ساعتِ کواکب سے مطابقت رکھتا ہے جسے روایتی طور پر کاروبار کے لیے معاون سمجھا جاتا ہے۔'),
    ('rules', 'This falls on Wednesday or Thursday — days traditionally linked to negotiation and profit.', 'یہ بدھ یا جمعرات کا دن ہے — وہ دن جنہیں روایت میں مذاکرات اور نفع سے جوڑا جاتا ہے۔'),
    ('rules', "The Moon isn't forming any meaningful connection right now — traditionally, treatment begun in this state tends to come to nothing.", 'قمر اس وقت کوئی نمایاں ربط نہیں بنا رہا — روایتی تعبیر میں اس حالت میں شروع کیے گئے علاج کے بے نتیجہ رہنے کا رجحان سمجھا جاتا ہے۔ یہ طبی دعویٰ نہیں۔'),
    ('rules', 'The Moon is too close to the Sun right now and appears "hidden" — traditionally, this weakens the body\'s own vital force in the chart.', 'قمر اس وقت شمس کے بہت قریب ہے اور «پوشیدہ» ہو گیا ہے — روایت میں اس سے زائچے میں جسم کی اپنی قوتِ حیات کمزور سمجھی جاتی ہے۔'),  # reviewed 20.42 (pass 7)
    ('rules', 'The Moon is in a tense position with Saturn or Mars right now — a traditional warning of complication or slow healing.', 'قمر اس وقت زحل یا مریخ کے ساتھ تناؤ والی نسبت میں ہے — روایت میں اسے پیچیدگی یا دیر سے صحت یابی کی علامت سمجھا جاتا ہے۔'),  # reviewed 20.43 (pass 7)
    ('rules', 'The Moon is growing in light right now — traditionally favorable for treatments meant to build up or strengthen the body.', 'قمر کی روشنی اس وقت بڑھ رہی ہے — جسم کو تقویت دینے والے علاج کے لیے روایتی طور پر موافق ہے۔'),
    ('rules', 'The Moon is forming a supportive connection with Venus or Jupiter right now — a sign of a smooth course of treatment and recovery.', 'قمر اس وقت زہرہ یا مشتری کے ساتھ موافق ربط بنا رہا ہے — روایتی تعبیر میں علاج اور صحت یابی کے ہموار سلسلے کی علامت سمجھی جاتی ہے۔'),
    ('rules', 'Jupiter — the traditional significator of recovery — is in a comfortable position right now.', 'مشتری — روایتی طور پر صحت یابی کی علامت — اس وقت موافق حالت میں ہے۔'),
    ('rules', 'Mercury is in a comfortable position right now, supporting a clear diagnosis.', 'عطارد اس وقت موافق حالت میں ہے، جسے روایتی طور پر واضح تشخیص میں معاون سمجھا جاتا ہے۔'),
    ('rules', 'Mercury appears to be moving backward right now — a mild caution for the accuracy of a diagnosis.', 'عطارد اس وقت الٹی چال (رجعت) میں نظر آتا ہے — تشخیص کی درستی کے بارے میں روایتی طور پر ہلکی احتیاط کی علامت۔'),
    ('rules', 'This specific time window aligns with a planetary hour traditionally seen as supportive for health matters.', 'یہ مخصوص وقت ایک ایسی ساعتِ کواکب سے مطابقت رکھتا ہے جسے روایتی طور پر صحت کے معاملات کے لیے معاون سمجھا جاتا ہے۔'),
    ('rules', 'This falls on Monday or Thursday — days traditionally linked to the body and to recovery.', 'یہ پیر یا جمعرات کا دن ہے — وہ دن جنہیں روایت میں جسم اور صحت یابی سے جوڑا جاتا ہے۔'),
    ('rules', "The Moon isn't forming any meaningful connection right now — traditionally, work begun in this state tends to come to nothing.", 'قمر اس وقت کوئی نمایاں ربط نہیں بنا رہا — روایتی تعبیر میں اس حالت میں شروع کیے گئے کام کے بے نتیجہ رہنے کا رجحان سمجھا جاتا ہے۔'),
    ('rules', 'The Moon is too close to the Sun right now and appears "hidden" — this weakens the matter\'s own significator.', 'قمر اس وقت شمس کے بہت قریب ہے اور «پوشیدہ» ہو گیا ہے — اس سے اس معاملے کی اپنی علامت کمزور سمجھی جاتی ہے۔'),  # reviewed 20.48 (pass 7)
    ('rules', 'The Moon is in a tense position with Mars right now — a traditional warning of accident or damage during construction.', 'قمر اس وقت مریخ کے ساتھ تناؤ والی نسبت میں ہے — تعمیر کے دوران حادثے یا نقصان کی روایتی انتباہی علامت۔'),  # reviewed 20.49 (pass 7)
    ('rules', 'The Moon is in a sign associated with stability — traditionally favorable for something meant to last.', 'قمر ایسے برج میں ہے جو استحکام سے منسوب ہے — دیرپا چیز کے لیے روایتی طور پر موافق۔'),
    ('rules', 'The Moon is in a sign associated with change and impermanence — the opposite of what a lasting foundation calls for.', 'قمر ایسے برج میں ہے جو تبدیلی اور ناپائیداری سے منسوب ہے — جو دیرپا بنیاد کے تقاضے کے برعکس ہے۔'),  # reviewed 20.51 (pass 7)
    ('rules', 'The Moon is growing in light right now — traditionally favorable for building and growing a household.', 'قمر کی روشنی اس وقت بڑھ رہی ہے — گھر بسانے اور گھرانے کی افزائش کے لیے روایتی طور پر موافق ہے۔'),
    ('rules', 'The Moon is forming a supportive connection with Venus or Jupiter right now — a sign of a settled, well-supported household.', 'قمر اس وقت زہرہ یا مشتری کے ساتھ موافق ربط بنا رہا ہے — مستحکم اور معاون گھرانے کی علامت۔'),
    ('rules', 'Saturn — the traditional significator of land and foundations — is in a sign it feels very at home in.', 'زحل — روایتی طور پر زمین اور بنیادوں کی علامت — ایسے برج میں ہے جہاں اسے اپنے گھر جیسی سہولت ملتی ہے۔'),
    ('rules', 'Saturn is in a comfortable position right now, supporting a solid foundation.', 'زحل اس وقت موافق حالت میں ہے، جو مضبوط بنیاد میں معاون ہے۔'),
    ('rules', 'Saturn appears to be moving backward right now — traditionally linked to delays, cost overruns, or rework.', 'زحل اس وقت الٹی چال (رجعت) میں نظر آتا ہے — روایت میں اسے تاخیر، اخراجات کے بڑھ جانے یا کام دوبارہ کرنے سے جوڑا جاتا ہے۔'),
    ('rules', 'This specific time window aligns with a planetary hour traditionally seen as supportive for foundations and building.', 'یہ مخصوص وقت ایک ایسی ساعتِ کواکب سے مطابقت رکھتا ہے جسے روایتی طور پر بنیاد رکھنے اور تعمیر کے لیے معاون سمجھا جاتا ہے۔'),
    ('rules', 'This falls on Saturday or Thursday — days traditionally linked to foundations and a supported household.', 'یہ ہفتہ یا جمعرات کا دن ہے — وہ دن جنہیں روایت میں مضبوط بنیادوں اور خوش حال گھرانے سے جوڑا جاتا ہے۔'),  # reviewed 20.56 (pass 7)
    ('rules', 'Mercury appears to be moving backward right now — the same traditional caution cited against contracts applies to starting serious study.', 'عطارد اس وقت الٹی چال (رجعت) میں نظر آتا ہے — معاہدوں کے خلاف جو روایتی احتیاط بیان کی جاتی ہے وہی سنجیدہ تعلیم کے آغاز پر بھی لاگو ہوتی ہے۔'),
    ('rules', "The Moon isn't forming any meaningful connection right now — traditionally, study begun in this state tends to come to nothing.", 'قمر اس وقت کوئی نمایاں ربط نہیں بنا رہا — روایتی تعبیر میں اس حالت میں شروع کی گئی تعلیم کے بے نتیجہ رہنے کا رجحان سمجھا جاتا ہے۔'),
    ('rules', 'Mercury is too close to the Sun right now and appears "hidden" — this weakens the significator of the intellect and study itself.', 'عطارد اس وقت شمس کے بہت قریب ہے اور «پوشیدہ» ہو گیا ہے — اس سے عقل اور تعلیم کی اپنی علامت کمزور سمجھی جاتی ہے۔'),  # reviewed 20.58 (pass 7)
    ('rules', 'The Moon is forming a supportive connection with Jupiter right now — traditionally the planet of wisdom and comprehension.', 'قمر اس وقت مشتری — روایتی طور پر حکمت اور فہم کے سیارے — کے ساتھ موافق ربط بنا رہا ہے۔'),
    ('rules', 'The Moon is forming a supportive connection with Mercury right now — favorable for retention and a receptive mind.', 'قمر اس وقت عطارد کے ساتھ موافق ربط بنا رہا ہے — یادداشت اور سیکھنے پر آمادہ ذہن کے لیے موافق۔'),  # reviewed 20.60 (pass 7)
    ('rules', 'The Moon is in a tense position with Saturn or Mars right now — a traditional warning of frustration or blocked progress.', 'قمر اس وقت زحل یا مریخ کے ساتھ تناؤ والی نسبت میں ہے — مایوسی یا رکی ہوئی پیش رفت کی روایتی انتباہی علامت۔'),
    ('rules', 'Mercury is in a sign it traditionally feels very at home in — strong for comprehension and memory.', 'عطارد ایسے برج میں ہے جہاں اسے روایتی طور پر اپنے گھر جیسی سہولت ملتی ہے — فہم اور یادداشت کے لیے مضبوط۔'),
    ('rules', 'Jupiter is in a comfortable position right now, supporting comprehension and wisdom.', 'مشتری اس وقت موافق حالت میں ہے، جو فہم اور حکمت میں معاون ہے۔'),
    ('rules', 'This specific time window aligns with a planetary hour traditionally seen as supportive for study.', 'یہ مخصوص وقت ایک ایسی ساعتِ کواکب سے مطابقت رکھتا ہے جسے روایتی طور پر تعلیم کے لیے معاون سمجھا جاتا ہے۔'),
    ('rules', 'This falls on Wednesday or Thursday — days traditionally linked to the intellect and wisdom.', 'یہ بدھ یا جمعرات کا دن ہے — وہ دن جنہیں روایت میں عقل اور حکمت سے جوڑا جاتا ہے۔'),
    ('arch', 'Grounded', 'زمین سے جڑا'),
    ('arch', 'Stability', 'استحکام'),
    ('arch', 'Renewal', 'تجدید'),
    ('arch', 'The Grounded Path', 'زمین سے جڑا راستہ'),
    ('arch', 'May start easy; later can feel stagnant', 'آغاز آسان ہو سکتا ہے؛ بعد میں جمود محسوس ہو سکتا ہے'),
    ('arch', 'Emotional coldness and taking each other for granted. Growth in provision may slow without conscious effort.', 'جذباتی سردمہری اور ایک دوسرے کو معمولی سمجھ لینا۔ شعوری کوشش کے بغیر رزق میں ترقی سست پڑ سکتی ہے۔'),
    ('arch', 'Shared spiritual goals, regular renewal practices, gratitude, and acts of charity (sadaqah) together.', 'مشترکہ روحانی مقاصد، تجدید کے باقاعدہ معمولات، شکرگزاری، اور مل کر صدقہ و خیرات۔'),
    ('arch', 'This pattern traditionally shows an easy, comfortable beginning that can settle into stagnation if never renewed.', 'یہ نمونہ روایتی طور پر ایک آسان اور آرام دہ آغاز دکھاتا ہے جو تجدید نہ ہونے پر جمود میں بدل سکتا ہے۔'),
    ('arch', 'This pattern traditionally shows an easy beginning that may later feel stagnant, especially in growth and shared provision.', 'روایتی طور پر یہ نمونہ ایک آسان آغاز کی طرف اشارہ کرتا ہے، جو بعد میں جمود کا شکار ہو سکتا ہے، خاص طور پر ترقی اور مشترکہ رزق میں۔'),
    ('arch', 'This pattern traditionally shows a friendship that starts with natural ease but can quietly stagnate without renewal.', 'یہ نمونہ روایتی طور پر ایسی دوستی دکھاتا ہے جو فطری آسانی سے شروع ہوتی ہے مگر تجدید کے بغیر خاموشی سے جمود کا شکار ہو سکتی ہے۔'),
    ('arch', 'This pattern traditionally shows family closeness that begins easily but can fade into distance without active care.', 'یہ نمونہ روایتی طور پر ایسی خاندانی قربت کی طرف اشارہ کرتا ہے جو آسانی سے شروع ہوتی ہے، مگر مسلسل توجہ اور دیکھ بھال نہ ہو تو دوری بڑھ سکتی ہے۔'),
    ('arch', 'This pattern traditionally shows a working relationship that starts smoothly but can plateau without new goals.', 'یہ نمونہ روایتی طور پر ایسا پیشہ ورانہ تعلق دکھاتا ہے جو ہموار شروع ہوتا ہے مگر نئے اہداف کے بغیر ایک سطح پر رک سکتا ہے۔'),
    ('arch', 'This connection often starts with ease and comfort, but can settle into routine if never renewed. Shared purpose and intentional effort keep it alive.', 'یہ تعلق اکثر آسانی اور آرام سے شروع ہوتا ہے، مگر تجدید نہ ہو تو معمول میں ڈھل سکتا ہے۔ مشترکہ مقصد اور شعوری کوشش اسے زندہ رکھتے ہیں۔'),
    ('arch', 'Marriage may start smoothly but requires intentional renewal to avoid complacency. Focus on shared goals and gratitude practices.', 'شادی ہموار شروع ہو سکتی ہے مگر بے پروائی سے بچنے کے لیے شعوری تجدید ضروری ہے۔ مشترکہ اہداف اور شکرگزاری کے معمولات پر توجہ دیں۔'),  # reviewed 21.11 (pass 7)
    ('arch', 'Friendships under this pattern begin naturally and comfortably, but may drift into routine without shared activities or new experiences. Regular effort keeps the connection warm.', 'اس نمونے میں دوستیاں فطری اور آرام سے شروع ہوتی ہیں، مگر مشترکہ سرگرمیوں یا نئے تجربات کے بغیر معمول میں ڈھل سکتی ہیں۔ باقاعدہ کوشش تعلق کو گرم جوش رکھتی ہے۔'),
    ('arch', 'Family ties here tend to feel steady and dependable, though closeness can fade into distance if never actively nurtured. Checking in regularly keeps the bond warm.', 'یہاں خاندانی رشتے عموماً مستحکم اور قابلِ اعتماد محسوس ہوتے ہیں، تاہم اگر ان کی مسلسل آبیاری نہ کی جائے تو قربت دوری میں بدل سکتی ہے۔ باقاعدگی سے خیریت پوچھتے رہنا رشتے میں گرم جوشی برقرار رکھتا ہے۔'),  # reviewed 21.13 (pass 7)
    ('arch', 'Working relationships start smoothly and productively, but can grow stale without new goals or challenges. Revisit shared objectives regularly to avoid complacency.', 'پیشہ ورانہ تعلقات ہموار اور نتیجہ خیز شروع ہوتے ہیں، مگر نئے اہداف یا چیلنجز نہ ہوں تو یکسانیت پیدا ہو سکتی ہے۔ خود اطمینانی سے بچنے کے لیے مشترکہ مقاصد پر باقاعدگی سے نظرِ ثانی کریں۔'),
    ('arch', 'Harmony', 'ہم آہنگی'),
    ('arch', 'Cooperation', 'تعاون'),
    ('arch', 'Companionship', 'رفاقت'),
    ('arch', 'The Harmonious Bond', 'ہم آہنگ رشتہ'),
    ('arch', 'Traditionally good for cooperation', 'روایتی طور پر تعاون کے لیے اچھا'),
    ('arch', 'Over-dependency and avoiding difficult conversations. One partner may lean too heavily on the other.', 'حد سے زیادہ انحصار اور مشکل گفتگو سے بچنا۔ ایک فریق دوسرے پر ضرورت سے زیادہ انحصار کر سکتا ہے۔'),  # reviewed 21.19 (pass 7)
    ('arch', 'Clear communication, shared responsibility, and maintaining individual growth alongside partnership.', 'واضح گفتگو، مشترکہ ذمہ داری، اور شراکت کے ساتھ ساتھ ہر فرد کی اپنی نشوونما کو برقرار رکھنا۔'),
    ('arch', 'Traditionally considered a favorable pattern — natural cooperation and mutual understanding flow more easily than opposition.', 'روایتی طور پر موافق نمونہ سمجھا جاتا ہے — فطری تعاون اور باہمی سمجھ مخالفت کے مقابلے میں زیادہ آسانی سے آتی ہے۔'),
    ('arch', 'Traditionally considered favorable for marriage. This pattern supports natural cooperation, companionship, and mutual understanding.', 'شادی کے لیے روایتی طور پر موافق سمجھا جاتا ہے۔ یہ نمونہ فطری تعاون، رفاقت اور باہمی سمجھ کو سہارا دیتا ہے۔'),
    ('arch', 'Traditionally considered a favorable pattern for friendship — ease, cooperation, and mutual understanding come naturally.', 'دوستی کے لیے روایتی طور پر موافق نمونہ سمجھا جاتا ہے — آسانی، تعاون اور باہمی سمجھ فطری طور پر آتی ہے۔'),
    ('arch', 'Traditionally considered a favorable pattern for family bonds — natural cooperation and understanding tend to prevail over conflict.', 'خاندانی رشتوں کے لیے روایتی طور پر موافق نمونہ سمجھا جاتا ہے — فطری تعاون اور سمجھ عموماً تنازع پر غالب رہتی ہے۔'),
    ('arch', 'Traditionally considered a favorable pattern for collaboration — natural cooperation and mutual understanding support the partnership.', 'مل کر کام کرنے کے لیے روایتی طور پر موافق نمونہ سمجھا جاتا ہے — فطری تعاون اور باہمی سمجھ شراکت کو سہارا دیتی ہے۔'),
    ('arch', 'This bond naturally supports cooperation and ease. Two people connected this way tend to understand each other quickly, though one may lean too heavily on the other.', 'یہ رشتہ فطری طور پر تعاون اور آسانی کو سہارا دیتا ہے۔ اس طرح جڑے ہوئے دو افراد عموماً ایک دوسرے کو جلد سمجھ لیتے ہیں، تاہم ایک فریق دوسرے پر ضرورت سے زیادہ انحصار کر سکتا ہے۔'),  # reviewed 21.26 (pass 7)
    ('arch', 'Marriage is traditionally supported. Companionship and teamwork are natural strengths. Guard against dependency.', 'روایتی طور پر یہ نمونہ شادی کے لیے موافق سمجھا جاتا ہے۔ رفاقت اور مل کر چلنا اس کی فطری خوبیاں ہیں۔ انحصار سے بچیں۔'),  # reviewed 21.27 (pass 7)
    ('arch', 'A naturally easy, low-friction friendship — you tend to understand each other quickly and rarely clash. Watch that neither friend becomes overly reliant on the other.', 'فطری طور پر آسان دوستی جس میں اختلافات کم ہوتے ہیں — آپ عموماً ایک دوسرے کو جلد سمجھ لیتے ہیں اور کم ہی ٹکراتے ہیں۔ خیال رکھیں کہ کوئی ایک دوست دوسرے پر حد سے زیادہ انحصار نہ کرنے لگے۔'),  # reviewed 21.28 (pass 7)
    ('arch', "Family members connected this way tend to get along with little friction and genuine mutual understanding. Encourage each other's independence alongside the closeness.", 'اس طرح جڑے ہوئے اہلِ خانہ عموماً کم اختلافات کے ساتھ ایک دوسرے سے نبھاتے ہیں اور حقیقی باہمی سمجھ رکھتے ہیں۔ قربت کے ساتھ ایک دوسرے کی خود مختاری کی بھی حوصلہ افزائی کریں۔'),
    ('arch', 'A cooperative, low-conflict working relationship where tasks divide naturally. Guard against one person carrying too much of the shared workload.', 'تعاون پر مبنی، کم تنازع والا پیشہ ورانہ تعلق جس میں کام فطری طور پر بٹ جاتا ہے۔ خیال رکھیں کہ مشترکہ کام کا بوجھ ایک ہی شخص پر نہ پڑ جائے۔'),
    ('arch', 'Friction', 'اختلاف'),
    ('arch', 'Patience', 'صبر'),
    ('arch', 'Discipline', 'نظم و ضبط'),
    ('arch', 'The Friction Path', 'اختلاف اور تناؤ کا راستہ'),
    ('arch', 'Often difficult; tension and strain', 'اکثر مشکل؛ تناؤ اور دباؤ'),
    ('arch', 'Constant arguments, financial instability, and emotional burnout. This path tests endurance.', 'مسلسل بحث، مالی عدم استحکام اور جذباتی تھکن۔ یہ راستہ برداشت کا امتحان لیتا ہے۔'),
    ('arch', 'Patience (sabr), structured routines, spiritual discipline, and wise counsel from trusted elders.', 'صبر، منظم معمولات، روحانی نظم و ضبط، اور قابلِ اعتماد بزرگوں کا دانشمندانہ مشورہ۔'),
    ('arch', 'Traditionally associated with difficulty — tension, frequent disagreements, and pressure may arise, requiring patience and discipline.', 'روایتی طور پر مشکل سے منسوب — تناؤ، بار بار اختلاف اور دباؤ پیدا ہو سکتا ہے، جس کے لیے صبر اور نظم و ضبط درکار ہے۔'),
    ('arch', 'Traditionally associated with difficulty in marriage. Tension, frequent disagreements, and financial pressure may arise.', 'شادی میں روایتی طور پر مشکل سے منسوب۔ تناؤ، بار بار اختلاف اور مالی دباؤ پیدا ہو سکتا ہے۔'),
    ('arch', 'Traditionally associated with difficulty — frequent small frictions and mismatched expectations may test the friendship.', 'روایتی طور پر مشکل سے منسوب — بار بار کے معمولی اختلافات اور مختلف توقعات دوستی کا امتحان لے سکتی ہیں۔'),
    ('arch', 'Traditionally associated with difficulty — recurring tension, sometimes over responsibilities, may strain the family bond.', 'روایتی طور پر مشکل سے منسوب — بار بار کا تناؤ، بعض اوقات ذمہ داریوں پر، خاندانی رشتے پر دباؤ ڈال سکتا ہے۔'),
    ('arch', 'Traditionally associated with difficulty — friction over resources, deadlines, or decisions may strain the partnership.', 'روایتی طور پر مشکل سے منسوب — وسائل، آخری تاریخوں یا فیصلوں پر اختلاف شراکت پر دباؤ ڈال سکتا ہے۔'),
    ('arch', 'This connection often carries tension and frequent friction. Patience and structure are needed to keep disagreements from escalating.', 'یہ تعلق اکثر تناؤ اور بار بار کے اختلافات لیے ہوتا ہے۔ اختلافات کو بڑھنے سے روکنے کے لیے صبر اور نظم درکار ہیں۔'),
    ('arch', 'Marriage may face continuous challenges. Strain in provision and emotional harmony often requires outside support and spiritual discipline.', 'شادی کو مسلسل مشکلات کا سامنا ہو سکتا ہے۔ رزق میں تنگی اور جذباتی ہم آہنگی میں دباؤ کے لیے اکثر باہر سے مدد اور روحانی نظم و ضبط کی ضرورت پڑتی ہے۔'),  # reviewed 21.43 (pass 7)
    ('arch', 'Friendships under this pattern can feel effortful — frequent small disagreements and mismatched expectations are common. The bond can hold, but needs conscious care.', 'اس نمونے میں دوستیاں محنت طلب محسوس ہو سکتی ہیں — چھوٹے چھوٹے اختلافات اور مختلف توقعات عام ہیں۔ رشتہ قائم رہ سکتا ہے، مگر شعوری دیکھ بھال چاہتا ہے۔'),
    ('arch', 'Family ties here often carry recurring tension, sometimes over money or responsibilities. Structure, patience, and outside support help ease the strain.', 'یہاں خاندانی رشتوں میں اکثر بار بار کا تناؤ ہوتا ہے، بعض اوقات پیسوں یا ذمہ داریوں پر۔ نظم، صبر اور باہر سے مدد دباؤ کم کرنے میں معاون ہوتے ہیں۔'),  # reviewed 21.45 (pass 7)
    ('arch', 'Professional partnerships under this pattern often hit friction over resources, deadlines, or decisions. Clear agreements and structured communication reduce the strain.', 'اس نمونے میں پیشہ ورانہ شراکتوں میں اکثر وسائل، آخری تاریخوں یا فیصلوں پر اختلاف پیدا ہوتا ہے۔ واضح معاہدے اور منظم گفتگو دباؤ کم کرتے ہیں۔'),
    ('arch', 'Burden', 'بوجھ'),
    ('arch', 'Wellbeing', 'بہبود'),  # source fix S6 (list 2): NEW URDU DRAFT, pending review 4
    ('arch', 'Maturity', 'پختگی'),
    ('arch', 'The Burdened Path', 'بوجھل راستہ'),
    ('arch', 'Heavy trials; wellbeing and stress', 'بھاری آزمائشیں؛ بہبود اور ذہنی دباؤ'),  # source fix S6 (list 2): NEW URDU DRAFT, pending review 4
    ('arch', 'Burnout, neglecting physical or mental wellbeing, and resentment building from unspoken burdens.', 'تھکن، جسمانی یا ذہنی صحت کو نظر انداز کرنا، اور ان کہے بوجھ سے پیدا ہونے والی رنجش۔'),
    ('arch', 'Focus on wellbeing (physical and emotional), emotional maturity, calm daily routines, and seeking therapeutic support when needed.', 'بہبود (جسمانی اور جذباتی) پر توجہ، جذباتی پختگی، پُرسکون روزمرہ معمولات، اور ضرورت پڑنے پر کسی ماہر معالج یا ماہرِ نفسیات سے رجوع کرنا۔'),  # source fix S6 (list 2): NEW URDU DRAFT, pending review 4
    ('arch', 'Traditionally seen as a heavy pattern — concerns about wellbeing and emotional strain may be present, especially without emotional maturity.', 'روایتی طور پر ایک بھاری نمونہ سمجھا جاتا ہے — بہبود کی فکر اور جذباتی دباؤ سامنے آ سکتے ہیں، خاص طور پر جذباتی پختگی کے بغیر۔'),  # source fix S6 (list 2): NEW URDU DRAFT, pending review 4
    ('arch', 'Traditionally seen as a heavy path for marriage. Concerns about wellbeing and emotional strain may be present.', 'شادی کے لیے روایتی طور پر ایک بھاری راستہ سمجھا جاتا ہے۔ بہبود کی فکر اور جذباتی دباؤ سامنے آ سکتے ہیں۔'),  # source fix S6 (list 2): NEW URDU DRAFT, pending review 4
    ('arch', "Traditionally seen as a heavy pattern — one friend's stress or unresolved struggles may surface within the bond.", 'روایتی طور پر ایک بھاری نمونہ سمجھا جاتا ہے — کسی دوست کا دباؤ یا حل طلب مسائل رشتے کے اندر ابھر سکتے ہیں۔'),
    ('arch', 'Traditionally seen as a heavy pattern — caretaking or shared hardship, often tied to wellbeing and stress, may mark the family bond.', 'روایتی طور پر ایک بھاری نمونہ سمجھا جاتا ہے — تیمارداری یا مشترکہ مشکل، جو اکثر بہبود اور ذہنی دباؤ سے جڑی ہوتی ہے، خاندانی رشتے کی پہچان ہو سکتی ہے۔'),  # source fix S6 (list 2): NEW URDU DRAFT, pending review 4
    ('arch', 'Traditionally seen as a heavy pattern — stress or burnout risk may surface within the working relationship.', 'روایتی طور پر ایک بھاری نمونہ سمجھا جاتا ہے — پیشہ ورانہ تعلق میں دباؤ یا تھکن کا خطرہ ابھر سکتا ہے۔'),
    ('arch', 'This bond often carries a sense of weight — stress, strained wellbeing, or emotional burden may surface. Maturity and calm help carry it well.', 'اس رشتے میں اکثر بوجھ کا احساس رہتا ہے — ذہنی دباؤ، بہبود میں کمی یا جذباتی بوجھ سامنے آ سکتے ہیں۔ پختگی اور سکون اسے اچھی طرح نبھانے میں مدد دیتے ہیں۔'),  # reviewed 21.58 (pass 7); source fix S6 (list 2): NEW URDU DRAFT, pending review 4
    ('arch', 'Marriage may feel like a test; wellbeing and stress may need extra care. Requires emotional maturity and calm.', 'شادی ایک امتحان محسوس ہو سکتی ہے؛ روایت میں اس نمونے کے ساتھ بہبود اور ذہنی دباؤ پر خاص توجہ کی ضرورت بتائی جاتی ہے۔ اس کے لیے جذباتی پختگی اور سکون درکار ہے۔'),  # reviewed 21.59 (pass 7); source fix S6 (list 2): NEW URDU DRAFT, pending review 4
    ('arch', "Friendships here can feel heavy at times, often surfacing one person's stress or unresolved struggles. Steady, patient support matters more than constant closeness.", 'یہاں دوستیاں بعض اوقات بھاری محسوس ہو سکتی ہیں، جن میں اکثر کسی ایک کا دباؤ یا حل طلب مسائل سامنے آتے ہیں۔ مسلسل قربت سے زیادہ مستقل اور صبر بھری معاونت اہم ہے۔'),
    ('arch', 'Family bonds under this pattern often involve caretaking or shared hardship — wellbeing and stress may need extra care. Calm routines and honest communication ease the load.', 'اس نمونے میں خاندانی رشتوں میں اکثر تیمارداری یا مشترکہ مشکل شامل ہوتی ہے — بہبود اور ذہنی دباؤ پر خاص توجہ کی ضرورت پڑ سکتی ہے۔ پُرسکون معمولات اور دیانت دارانہ گفتگو بوجھ ہلکا کرتے ہیں۔'),  # reviewed 21.61 (pass 7); source fix S6 (list 2): NEW URDU DRAFT, pending review 4
    ('arch', 'Working relationships here can feel draining, with stress or burnout as recurring risks. Clear boundaries and realistic workloads protect the partnership.', 'یہاں پیشہ ورانہ تعلقات تھکا دینے والے محسوس ہو سکتے ہیں، جن میں دباؤ یا تھکن بار بار کا خطرہ ہے۔ واضح حدود اور حقیقت پسندانہ کام کا بوجھ شراکت کی حفاظت کرتے ہیں۔'),
    ('arch', 'Blessed', 'مبارک'),
    ('arch', 'Growth', 'نشوونما'),
    ('arch', 'Gratitude', 'شکرگزاری'),
    ('arch', 'The Blessed Path', 'مبارک راستہ'),
    ('arch', 'Traditionally blessed; harmony and growth', 'روایتی طور پر مبارک؛ ہم آہنگی اور ترقی'),
    ('arch', 'Distraction from blessings, excess in comfort, and taking abundance for granted.', 'نعمتوں میں مشغول ہو کر غافل ہو جانا، آسائش میں حد سے بڑھ جانا، اور فراوانی کو معمولی سمجھ لینا۔'),  # reviewed 17.9 (pass 6)
    ('arch', 'Gratitude practices, structured spiritual life together, and using blessings to support others.', 'شکرگزاری کے معمولات، مل کر منظم روحانی زندگی، اور نعمتوں کو دوسروں کی مدد کے لیے استعمال کرنا۔'),
    ('arch', 'Traditionally considered very favorable — blessing, natural harmony, and growth tend to flow more easily.', 'روایتی طور پر بہت موافق سمجھا جاتا ہے — برکت، فطری ہم آہنگی اور ترقی عموماً زیادہ آسانی سے میسر آتی ہیں۔'),  # reviewed 17.11 (pass 6)
    ('arch', 'Traditionally considered very favorable for marriage. Associated with blessing, natural harmony, children, and spiritual growth.', 'شادی کے لیے روایتی طور پر بہت موافق سمجھا جاتا ہے۔ برکت، فطری ہم آہنگی، اولاد اور روحانی ترقی سے منسوب۔'),
    ('arch', 'Traditionally considered very favorable — trust, harmony, and mutual growth tend to flow naturally in this friendship.', 'روایتی طور پر بہت موافق سمجھا جاتا ہے — اس دوستی میں اعتماد، ہم آہنگی اور باہمی ترقی عموماً فطری طور پر پروان چڑھتی ہیں۔'),  # reviewed 21.65 (pass 7)
    ('arch', 'Traditionally considered very favorable — warmth, harmony, and shared growth tend to mark this family bond.', 'روایتی طور پر بہت موافق سمجھا جاتا ہے — اس خاندانی رشتے کی پہچان عموماً گرم جوشی، ہم آہنگی اور مشترکہ ترقی ہوتی ہے۔'),
    ('arch', 'Traditionally considered very favorable — harmony and productive growth tend to flow naturally in this partnership.', 'روایتی طور پر بہت موافق سمجھا جاتا ہے — اس شراکت میں ہم آہنگی اور نتیجہ خیز ترقی عموماً فطری طور پر حاصل ہوتی ہیں۔'),  # reviewed 21.67 (pass 7)
    ('arch', 'This connection is traditionally favorable — harmony, growth, and ease tend to flow naturally between the two. Gratitude keeps the blessing from being taken for granted.', 'یہ تعلق روایتی طور پر موافق سمجھا جاتا ہے — دونوں کے درمیان ہم آہنگی، ترقی اور آسانی عموماً فطری طور پر پیدا ہوتی ہیں۔ شکرگزاری اس نعمت کو معمولی سمجھے جانے سے بچاتی ہے۔'),  # reviewed 17.13 (pass 6)
    ('arch', 'Marriage is traditionally blessed. Harmony, children, and shared spiritual life are often supported. Guard against excess and distraction.', 'شادی روایتی طور پر مبارک سمجھی جاتی ہے۔ ہم آہنگی، اولاد اور مشترکہ روحانی زندگی کو اکثر سہارا ملتا ہے۔ حد سے بڑھنے اور غفلت سے بچیں۔'),  # reviewed 17.14 (pass 6)
    ('arch', "A genuinely blessed friendship — trust, ease, and mutual growth come naturally. Keep showing up for each other so the bond doesn't drift into complacency.", 'حقیقی معنوں میں ایک بابرکت دوستی — اعتماد، آسانی اور باہمی ترقی عموماً فطری طور پر آتی ہے۔ ایک دوسرے کے لیے موجود رہیں تاکہ رشتے میں بے پروائی نہ آ جائے۔'),  # reviewed 17.15 (pass 6)
    ('arch', 'Family ties here tend to be a source of real blessing — warmth, support, and shared growth. Nurture the bond actively rather than assuming it as given.', 'یہاں خاندانی رشتے اکثر حقیقی برکت کا ذریعہ بنتے ہیں — گرم جوشی، سہارا اور مشترکہ ترقی۔ رشتے کو بنا بنایا سمجھنے کے بجائے اس کی مسلسل آبیاری کریں۔'),  # reviewed 17.16 (pass 6)
    ('arch', 'A productive, mutually beneficial working relationship where success tends to come naturally. Stay grounded and avoid overconfidence as things go well.', 'ایک نتیجہ خیز، باہمی فائدے والا پیشہ ورانہ تعلق جس میں کامیابی عموماً آسانی سے ملتی ہے۔ حالات اچھے ہوں تب بھی قدم زمین پر رکھیں اور حد سے زیادہ خود اعتمادی سے بچیں۔'),  # reviewed 21.68 (pass 7)
    ('arch', 'Trial', 'آزمائش'),
    ('arch', 'Forgiveness', 'معافی'),
    ('arch', 'Self-work', 'اپنی اصلاح'),  # reviewed 21.71 (pass 7)
    ('arch', 'The Trial Path', 'آزمائش کا راستہ'),
    ('arch', 'Quarrels and ego tests', 'جھگڑے اور انا کے امتحان'),
    ('arch', 'Power struggles, recurring arguments, and cycles of blame. Pride and unresolved anger amplify friction.', 'طاقت کی کشمکش، بار بار کی بحثیں اور الزام تراشی کے چکر۔ غرور اور حل نہ ہوا غصہ کشیدگی کو بڑھا دیتے ہیں۔'),
    ('arch', 'Conflict resolution skills, self-work (especially anger and ego), forgiveness practices, and regular spiritual remembrance (dhikr).', 'تنازع حل کرنے کی مہارتیں، اپنی اصلاح (خاص طور پر غصے اور انا کے معاملے میں)، معاف کرنے کی عادت، اور باقاعدہ ذکرِ الٰہی۔'),  # reviewed 17.17 (pass 6)
    ('arch', 'Traditionally shows recurring quarrels and discord — tests of anger, pride, and ego are common until inner work is done.', 'روایتی طور پر بار بار کے جھگڑے اور اختلاف دکھاتا ہے — جب تک اندرونی اصلاح نہ ہو، غصے، غرور اور انا کے امتحان عام رہتے ہیں۔'),
    ('arch', 'Traditionally shows recurring quarrels and discord in marriage. Tests of anger, pride, and ego are common.', 'روایتی طور پر شادی میں بار بار کے جھگڑے اور اختلاف دکھاتا ہے۔ غصے، غرور اور انا کے امتحان عام ہیں۔'),
    ('arch', 'Traditionally shows recurring small quarrels — tests of pride and ego may repeat until self-awareness grows.', 'روایتی طور پر بار بار کے چھوٹے جھگڑے دکھاتا ہے — خود آگاہی بڑھنے تک غرور اور انا کے امتحان دہرائے جا سکتے ہیں۔'),
    ('arch', 'Traditionally shows recurring discord — old patterns of pride and ego may resurface until addressed with forgiveness.', 'روایتی طور پر بار بار کا اختلاف دکھاتا ہے — غرور اور انا کے پرانے انداز اس وقت تک پھر ابھر سکتے ہیں جب تک انہیں معافی کے ساتھ نہ نمٹایا جائے۔'),
    ('arch', 'Traditionally shows recurring friction — tests of ego and power may repeat until clear roles and respect are established.', 'روایتی طور پر بار بار کے اختلافات دکھاتا ہے — انا اور طاقت کے امتحان اس وقت تک دہرائے جا سکتے ہیں جب تک واضح کردار اور باہمی احترام قائم نہ ہو۔'),
    ('arch', 'This bond tends to surface recurring friction tied to pride and ego. Self-awareness on both sides is what breaks the cycle.', 'یہ رشتہ غرور اور انا سے جڑے بار بار کے اختلافات کو ابھارتا ہے۔ دونوں طرف کی خود آگاہی ہی اس چکر کو توڑتی ہے۔'),
    ('arch', 'Marriage often involves power struggles and repeated conflicts. Both partners must work on self-awareness and forgiveness.', 'شادی میں اکثر طاقت کی کشمکش اور بار بار کے تنازعات ہوتے ہیں۔ دونوں فریقوں کو خود آگاہی بڑھانے اور معاف کرنے کی عادت اپنانے کی ضرورت ہے۔'),  # reviewed 21.80 (pass 7)
    ('arch', "Friendships here often involve repeated small conflicts, sometimes over who's 'right.' Letting go of ego keeps the friendship from wearing thin.", 'یہاں دوستیوں میں اکثر بار بار کے چھوٹے تنازعات ہوتے ہیں، بعض اوقات اس پر کہ کون ’’صحیح‘‘ ہے۔ انا کو چھوڑ دینا دوستی کو کمزور پڑنے سے بچاتا ہے۔'),
    ('arch', 'Family relationships under this pattern often carry old, recurring disagreements. Forgiveness and honest self-reflection are what finally shift the pattern.', 'اس نمونے میں خاندانی رشتوں میں اکثر پرانے اور بار بار کے اختلافات ہوتے ہیں۔ معافی اور دیانت دارانہ خود احتسابی ہی بالآخر اس انداز کو بدلتی ہے۔'),
    ('arch', 'Working relationships here can involve power struggles or clashing egos. Clear roles and mutual respect prevent recurring conflict.', 'یہاں پیشہ ورانہ تعلقات میں طاقت کی کشمکش یا انا کا ٹکراؤ ہو سکتا ہے۔ واضح کردار اور باہمی احترام بار بار کے تنازع کو روکتے ہیں۔'),
    ('arch', 'Chosen', 'منتخب'),
    ('arch', 'Alignment', 'ہم آہنگی'),
    ('arch', 'The Chosen Path', 'منتخب راستہ'),
    ('arch', 'Traditionally best; blessings after obstacles', 'روایتی طور پر بہترین؛ رکاوٹوں کے بعد برکتیں'),
    ('arch', 'Pride in the blessing, external interference early on, and assuming ease means no effort is needed.', 'نعمت پر غرور، شروع میں بیرونی مداخلت، اور یہ سمجھ لینا کہ آسانی کا مطلب ہے کہ کوشش کی ضرورت نہیں۔'),
    ('arch', 'Humility, trust in divine timing, gratitude, and alignment in spiritual values.', 'عاجزی، اللہ کی حکمت اور اس کے مقرر کیے ہوئے وقت پر بھروسا، شکرگزاری، اور روحانی اقدار میں ہم آہنگی۔'),  # reviewed 17.20 (pass 6)
    ('arch', 'Traditionally considered the most favorable of all patterns — early obstacles often give way to strong blessings and alignment.', 'روایتی طور پر تمام صورتوں میں سب سے زیادہ موافق سمجھا جاتا ہے — ابتدائی رکاوٹوں کے بعد اکثر بھرپور برکت اور ہم آہنگی حاصل ہوتی ہے۔'),  # reviewed 17.21 (pass 6)
    ('arch', 'Traditionally considered the most favorable for marriage. May face obstacles early on, but strong blessings and alignment often follow.', 'شادی کے لیے روایتی طور پر سب سے زیادہ موافق سمجھا جاتا ہے۔ شروع میں رکاوٹیں آ سکتی ہیں، مگر اس کے بعد اکثر بھرپور برکت اور ہم آہنگی حاصل ہوتی ہے۔'),  # reviewed 17.22 (pass 6)
    ('arch', 'Traditionally considered one of the most favorable patterns for friendship — early distance often resolves into deep loyalty.', 'دوستی کے لیے روایتی طور پر سب سے زیادہ موافق نمونوں میں سے ایک سمجھا جاتا ہے — شروع کی دوری اکثر گہری وفاداری میں بدل جاتی ہے۔'),
    ('arch', 'Traditionally considered one of the most favorable patterns for family bonds — early difficulty often gives way to lasting depth.', 'خاندانی رشتوں کے لیے روایتی طور پر سب سے زیادہ موافق نمونوں میں سے ایک سمجھا جاتا ہے — شروع کی مشکل کے بعد اکثر دیرپا گہرائی پیدا ہوتی ہے۔'),  # reviewed 21.87 (pass 7)
    ('arch', 'Traditionally considered one of the most favorable patterns for partnership — early friction often resolves into a highly aligned collaboration.', 'شراکت کے لیے روایتی طور پر سب سے زیادہ موافق نمونوں میں سے ایک سمجھا جاتا ہے — شروع کا اختلاف اکثر ایک نہایت ہم آہنگ تعاون میں بدل جاتا ہے۔'),
    ('arch', 'Traditionally the most favorable connection — early obstacles often give way to a deep, aligned bond. Trust the process rather than forcing it.', 'روایتی طور پر سب سے زیادہ موافق تعلق سمجھا جاتا ہے — ابتدائی رکاوٹوں کے بعد اکثر ایک گہرا اور ہم آہنگ رشتہ بنتا ہے۔ زبردستی کرنے کے بجائے معاملے کو اپنی رفتار سے آگے بڑھنے دیں۔'),  # reviewed 21.89 (pass 7)
    ('arch', 'Marriage is traditionally highly blessed. Challenges before union often make the bond stronger. This path carries spiritual favor.', 'شادی روایتی طور پر بہت مبارک سمجھی جاتی ہے۔ نکاح سے پہلے کی مشکلات اکثر رشتے کو مضبوط بناتی ہیں۔ روایت میں اس راستے کو روحانی فضل کا حامل سمجھا جاتا ہے۔'),  # reviewed 17.23 (pass 6)
    ('arch', 'One of the strongest friendship patterns — any early distance or misunderstanding tends to resolve into a deeply loyal bond. Let it develop at its own pace.', 'دوستی کے مضبوط ترین نمونوں میں سے ایک — شروع کی کوئی بھی دوری یا غلط فہمی عموماً ایک گہرے وفادار رشتے میں بدل جاتی ہے۔ اسے اپنی رفتار سے پنپنے دیں۔'),
    ('arch', 'Family bonds here often carry real depth, even if the relationship faced early distance or difficulty. What follows tends to be lasting and meaningful.', 'یہاں خاندانی رشتوں میں اکثر حقیقی گہرائی ہوتی ہے، چاہے رشتے کو شروع میں دوری یا مشکل کا سامنا رہا ہو۔ بعد کا تعلق عموماً دیرپا اور بامعنی ہوتا ہے۔'),  # reviewed 21.91 (pass 7)
    ('arch', 'A strong working alliance — early friction or slow starts often lead to a highly effective, trusted partnership. Give it time to align.', 'ایک مضبوط پیشہ ورانہ اتحاد — شروع کے اختلافات یا سست آغاز اکثر ایک نہایت مؤثر اور قابلِ اعتماد شراکت تک لے جاتے ہیں۔ اسے ہم آہنگ ہونے کا وقت دیں۔'),
    ('arch', 'Long-term', 'طویل مدتی'),
    ('arch', 'Wisdom', 'حکمت'),
    ('arch', 'The Path of Patience', 'صبر کا راستہ'),
    ('arch', 'Very good long-term; early struggles', 'طویل مدت میں بہت اچھا؛ شروع میں مشکلات'),
    ('arch', 'Judging the relationship too quickly in the beginning. Early friction may cause premature endings.', 'شروع ہی میں رشتے کے بارے میں جلد فیصلہ کر لینا۔ ابتدائی اختلافات قبل از وقت اختتام کا سبب بن سکتے ہیں۔'),
    ('arch', 'Patience (sabr), emotional intelligence, gentle communication, and giving time for mutual understanding to deepen.', 'صبر، جذباتی فہم، نرم گفتگو، اور باہمی سمجھ کے گہرا ہونے کے لیے وقت دینا۔'),
    ('arch', 'Traditionally very good for the long term, though early misunderstandings are common — patience transforms this into a strong bond.', 'روایتی طور پر طویل مدت کے لیے بہت اچھا ہے، اگرچہ ابتدائی غلط فہمیاں عام ہیں — صبر اسے ایک مضبوط رشتے میں بدل سکتا ہے۔'),  # reviewed 21.99 (pass 7)
    ('arch', 'Traditionally very good for marriage over the long term, though early misunderstandings are common.', 'روایتی طور پر شادی کے لیے طویل مدت میں بہت اچھا ہے، اگرچہ ابتدائی غلط فہمیاں عام ہیں۔'),
    ('arch', 'Traditionally very good for the long term — early awkwardness is common, but patience often builds a lasting friendship.', 'روایتی طور پر طویل مدت کے لیے بہت اچھا ہے — شروع کی جھجک عام ہے، مگر صبر اکثر ایک دیرپا دوستی بنا دیتا ہے۔'),
    ('arch', 'Traditionally very good for the long term — early distance is common, but the family bond tends to deepen with time.', 'روایتی طور پر طویل مدت کے لیے بہت اچھا ہے — شروع کی دوری عام ہے، مگر خاندانی رشتہ عموماً وقت کے ساتھ گہرا ہوتا جاتا ہے۔'),  # reviewed 21.101 (pass 7)
    ('arch', 'Traditionally very good for the long term — early friction is common, but patience often builds a highly reliable partnership.', 'روایتی طور پر طویل مدت کے لیے بہت اچھا ہے — شروع کے اختلافات عام ہیں، مگر صبر اکثر ایک نہایت قابلِ بھروسا شراکت بنا دیتا ہے۔'),
    ('arch', 'This connection often starts with confusion or misjudgment but strengthens significantly with time. Patience is what unlocks its real depth.', 'یہ تعلق اکثر الجھن یا غلط اندازے سے شروع ہوتا ہے مگر وقت کے ساتھ نمایاں طور پر مضبوط ہو سکتا ہے۔ صبر ہی اس کی حقیقی گہرائی کو سامنے لاتا ہے۔'),  # reviewed 21.103 (pass 7)
    ('arch', "Marriage may start with confusion or misjudgment but can become very strong over time. Patience is the key to unlocking this bond's strength.", 'ایسی شادی کا آغاز اکثر الجھن یا غلط اندازے سے ہوتا ہے، مگر وقت کے ساتھ یہ بہت مضبوط ہو سکتی ہے۔ صبر ہی اس رشتے کی قوت کو سامنے لانے کی کنجی ہے۔'),  # reviewed 21.104 (pass 7); source fix S7 (list 2): EN re-keyed, reviewed Urdu kept
    ('arch', "Friendships here can start awkwardly or take time to click, but often become some of the most enduring bonds. Don't judge it too early.", 'یہاں دوستیاں جھجک کے ساتھ شروع ہو سکتی ہیں یا ہم آہنگ ہونے میں وقت لے سکتی ہیں، مگر اکثر سب سے پائیدار رشتوں میں سے بن جاتی ہیں۔ جلد فیصلہ نہ کریں۔'),
    ('arch', 'Family relationships under this pattern may start with distance or misunderstanding but tend to deepen meaningfully over the years. Give the bond time.', 'اس نمونے میں خاندانی رشتے دوری یا غلط فہمی سے شروع ہو سکتے ہیں مگر برسوں کے ساتھ عموماً گہرے اور بامعنی ہوتے جاتے ہیں۔ رشتے کو وقت دیں۔'),  # reviewed 21.105 (pass 7)
    ('arch', 'Working relationships here often start rocky — mismatched expectations or slow trust-building — but tend to become highly reliable partnerships over time.', 'یہاں پیشہ ورانہ تعلقات اکثر مشکل سے شروع ہوتے ہیں — مختلف توقعات یا اعتماد بننے میں سستی — مگر وقت کے ساتھ عموماً نہایت قابلِ بھروسا شراکت بن جاتے ہیں۔'),  # reviewed 21.106 (pass 7)
    ('arch', 'The Severed Path', 'کٹا ہوا راستہ'),
    ('arch', 'Traditionally warned against', 'روایتی طور پر اس سے خبردار کیا گیا ہے'),
    ('arch', 'Sudden separations, recurring harm cycles, and patterns that repeat despite efforts. This path requires vigilance.', 'اچانک جدائیاں، نقصان کے بار بار کے چکر، اور ایسے انداز جو کوشش کے باوجود دہرائے جاتے ہیں۔ اس راستے میں چوکسی درکار ہے۔'),
    ('arch', 'Do not panic if this appears. Seek counsel from trusted spiritual guides. If already bound, increase protection practices (duʿāʾ, charity, guidance). Avoid fatalistic thinking — free will and divine mercy remain.', 'اگر یہ نتیجہ آئے تو گھبرائیں نہیں۔ قابلِ اعتماد روحانی رہنماؤں سے مشورہ کریں۔ اگر رشتہ پہلے سے بندھا ہوا ہے تو حفاظت کے معمولات (دعا، صدقہ، رہنمائی) بڑھا دیں۔ یہ سوچ کر ہار مان لینے سے بچیں کہ سب کچھ طے ہو چکا ہے — انسان کا اختیار اور اللہ کی رحمت باقی ہیں۔'),
    ('arch', 'Traditionally warned against for binding commitments — associated with severe hardship, sudden breaks, and recurring harm.', 'پابند کرنے والے عہد و پیمان کے لیے روایتی طور پر اس سے خبردار کیا گیا ہے — شدید مشکل، اچانک ٹوٹ پھوٹ اور بار بار کے نقصان سے منسوب۔'),
    ('arch', 'Traditionally warned against for marriage. Associated with severe hardship, sudden breaks, and recurring harm patterns.', 'شادی کے لیے روایتی طور پر اس سے خبردار کیا گیا ہے۔ شدید مشکل، اچانک ٹوٹ پھوٹ اور بار بار کے نقصان کے انداز سے منسوب۔'),
    ('arch', 'Traditionally warned against for close, binding friendship — sudden falling-outs and recurring hurt are associated risks.', 'قریبی اور پابند دوستی کے لیے روایتی طور پر اس سے خبردار کیا گیا ہے — اچانک بگاڑ اور بار بار کی چوٹ اس سے منسوب خطرات ہیں۔'),
    ('arch', 'Traditionally associated with real difficulty in family bonds — estrangement and recurring conflict are common risks.', 'خاندانی رشتوں میں روایتی طور پر حقیقی مشکل سے منسوب — بے رخی اور بار بار کا تنازع عام خطرات ہیں۔'),
    ('arch', 'Traditionally warned against for binding partnership — sudden fallout and recurring breakdowns in trust are associated risks.', 'پابند شراکت کے لیے روایتی طور پر اس سے خبردار کیا گیا ہے — اچانک بگاڑ اور اعتماد کا بار بار ٹوٹنا اس سے منسوب خطرات ہیں۔'),
    ('arch', "Traditionally a difficult pattern, associated with sudden breaks and recurring strain. Take great care, and seek Allah's protection through duʿāʾ and remembrance.", 'روایتی طور پر ایک مشکل نمونہ، جو اچانک تعلق ٹوٹنے اور بار بار کے دباؤ سے منسوب ہے۔ بہت احتیاط کریں، اور دعا و اذکار کے ذریعے اللہ کی حفاظت طلب کریں۔'),  # reviewed 21.110 (pass 7); source fix S8 (list 2): EN re-keyed, reviewed Urdu kept
    ('arch', "Marriage is traditionally discouraged under this pattern. If already in this bond, seek Allah's protection through duʿāʾ and remembrance, and seek wise counsel.", 'اس نمونے کے تحت شادی کی روایتی طور پر حوصلہ شکنی کی جاتی ہے۔ اگر آپ پہلے سے اس رشتے میں ہیں تو دعا و اذکار کے ذریعے اللہ کی حفاظت طلب کریں اور دانشمندانہ مشورہ لیں۔'),  # source fix S8 (list 2): NEW URDU DRAFT, pending review 4
    ('arch', "Friendships under this pattern can be prone to sudden falling-outs or repeated hurt. Approach with awareness, and don't ignore recurring red flags.", 'اس نمونے میں دوستیاں اچانک بگاڑ یا بار بار کی دل آزاری کا شکار ہو سکتی ہیں۔ آگاہی کے ساتھ آگے بڑھیں، اور بار بار سامنے آنے والی خطرے کی علامتوں کو نظر انداز نہ کریں۔'),  # reviewed 21.111 (pass 7)
    ('arch', 'Family ties here can carry real difficulty, including estrangement or repeated conflict. Seek wise counsel, and keep asking Allah for protection through duʿāʾ and remembrance, rather than forcing closeness.', 'یہاں خاندانی رشتوں میں حقیقی مشکل ہو سکتی ہے، جن میں بے رخی یا بار بار کا تنازع شامل ہے۔ زبردستی قربت پیدا کرنے کے بجائے دانشمندانہ مشورہ لیں، اور دعا و اذکار کے ذریعے اللہ کی حفاظت طلب کرتے رہیں۔'),  # reviewed 21.112 (pass 7); source fix S8 (list 2): EN re-keyed, reviewed Urdu kept
    ('arch', 'Professional partnerships under this pattern may carry real risk — sudden fallout or repeated breakdowns in trust are often seen. Proceed with caution and clear agreements.', 'اس نمونے میں پیشہ ورانہ شراکتوں کو حقیقی خطرات کا سامنا ہو سکتا ہے — اچانک بگاڑ یا اعتماد کا بار بار ٹوٹنا اکثر دیکھا جاتا ہے۔ احتیاط اور واضح معاہدوں کے ساتھ آگے بڑھیں۔'),  # reviewed 21.113 (pass 7); source fix S7 (list 2): EN re-keyed, reviewed Urdu kept
    ('manzil', 'The Two Signs', 'دو نشان'),
    ('manzil', 'New Beginnings, Initiative', 'نئے آغاز، پہل'),
    ('manzil', 'Starting fresh with courage and trust in Allah', 'ہمت اور اللہ پر بھروسے کے ساتھ نئے سرے سے آغاز'),
    ('manzil', 'New ventures', 'نئے کام'),
    ('manzil', 'Starting a treatment your doctor has advised', 'طبی علاج (معالج کے مشورے سے)'),  # reviewed 18.5 (pass 6); source fix S1 (list 2): EN re-keyed, reviewed Urdu kept
    ('manzil', 'Loans', 'قرض'),
    ('manzil', 'Partnerships with strangers', 'اجنبیوں کے ساتھ شراکت'),
    ('manzil', 'Beginnings invite intention (niyyah) and remembrance — the Moon’s stations are signs, not decrees.', 'آغاز نیت اور ذکر کا تقاضا کرتا ہے — قمر کی منازل نشانیاں ہیں، فیصلے نہیں۔'),
    ('manzil', 'Educational reflection (Qurʾān 10:5)', 'تعلیمی غور و فکر (قرآن 10:5)'),
    ('manzil', 'The Little Belly', 'چھوٹا پیٹ'),
    ('manzil', 'Nourishment, Growth', 'غذا، نشوونما'),
    ('manzil', 'Cultivating inner strength and spiritual nourishment', 'باطنی قوت اور روحانی غذا کی پرورش'),
    ('manzil', 'Building', 'تعمیر'),
    ('manzil', 'Planting', 'کاشت'),
    ('manzil', 'Business ventures', 'کاروباری منصوبے'),
    ('manzil', 'Seeking knowledge', 'علم کی طلب'),
    ('manzil', 'Sea travel', 'بحری سفر'),
    ('manzil', 'Hasty decisions', 'عجلت میں کیے گئے فیصلے'),  # reviewed 18.18 (pass 6)
    ('manzil', 'As the body needs nourishment, the heart needs what draws it nearer to Allah.', 'جیسے جسم کو غذا چاہیے، دل کو وہ چاہیے جو اسے اللہ کے قریب کرے۔'),
    ('manzil', 'Educational reflection (anwāʾ theme)', 'تعلیمی غور و فکر (انواء کا موضوع)'),
    ('manzil', 'The Pleiades', 'ثریا'),
    ('manzil', 'Beauty, Abundance, Gathering', 'حسن، فراوانی، اجتماع'),
    ('manzil', 'Appreciating divine beauty in creation and community', 'تخلیق اور معاشرے میں اللہ کے حسن کی قدردانی'),
    ('manzil', 'Gatherings', 'اجتماعات'),
    ('manzil', 'Reconciliation', 'مصالحت'),
    ('manzil', 'Art and beauty', 'فن اور حسن'),
    ('manzil', 'Separation', 'جدائی'),
    ('manzil', 'Conflict', 'جھگڑا'),
    ('manzil', 'Harsh speech', 'سخت کلامی'),
    ('manzil', 'Al-Thurayyā was among the best-known stations in Arab star lore — a reminder to gather in beauty and good company.', 'الثریا عربوں کی ستاروں کی روایت میں سب سے معروف منازل میں سے تھی — حسن اور اچھی صحبت میں جمع ہونے کی یاد دہانی۔'),
    ('manzil', 'Educational reflection (anwāʾ / Al-Bīrūnī tradition of naming)', 'تعلیمی غور و فکر (انواء / البیرونی کے ہاں ناموں کی روایت)'),  # reviewed 18.30 (pass 6)
    ('manzil', 'The Follower', 'پیچھے آنے والا'),
    ('manzil', 'Loyalty, Persistence, Following Truth', 'وفاداری، استقامت، حق کی پیروی'),
    ('manzil', 'Following the prophetic example with steadfastness', 'ثابت قدمی کے ساتھ سنتِ نبوی ﷺ کی پیروی'),  # reviewed 18.33 (pass 6)
    ('manzil', 'Alliances', 'اتحاد'),
    ('manzil', 'Long-term projects', 'طویل مدتی منصوبے'),
    ('manzil', 'Seeking teachers', 'اساتذہ کی تلاش'),
    ('manzil', 'Study', 'مطالعہ'),
    ('manzil', 'Breaking commitments', 'عہد توڑنا'),
    ('manzil', 'Impulsive changes', 'بے سوچی سمجھی تبدیلیاں'),
    ('manzil', 'Al-Dabarān “follows” Thurayyā across the sky — a picture of steadfast following, not blind haste.', 'الدبران آسمان میں ثریا کے «پیچھے چلتا» ہے — یہ ثابت قدم پیروی کی تصویر ہے، اندھی جلد بازی کی نہیں۔'),  # reviewed 18.39 (pass 6)
    ('manzil', 'Educational reflection (star-name lore)', 'تعلیمی غور و فکر (ستاروں کے ناموں کی روایت)'),
    ('manzil', 'The White Spot', 'سفید نشان'),
    ('manzil', 'Clarity, Purification, Truth', 'وضاحت، تزکیہ، سچائی'),
    ('manzil', 'Seeking clarity and purifying intentions', 'وضاحت کی طلب اور نیتوں کو خالص کرنا'),  # reviewed 18.43 (pass 6)
    ('manzil', 'Spiritual purification', 'روحانی تزکیہ'),
    ('manzil', 'Learning', 'سیکھنا'),
    ('manzil', 'Communication', 'گفتگو'),
    ('manzil', 'Writing', 'تحریر'),
    ('manzil', 'Deception', 'دھوکا'),
    ('manzil', 'Unclear contracts', 'غیر واضح معاہدے'),
    ('manzil', 'Confusion', 'الجھن'),
    ('manzil', 'Clarity of intention softens confusion — seek light before you speak or sign.', 'نیت کی وضاحت الجھن کو نرم کرتی ہے — بات کرنے یا دستخط کرنے سے پہلے روشنی (رہنمائی) کی طلب کریں۔'),
    ('manzil', 'Educational reflection', 'تعلیمی غور و فکر'),
    ('manzil', 'The Brand', 'نشان'),
    ('manzil', 'Marking, Identity, Recognition', 'نشان، شناخت، پہچان'),
    ('manzil', "Recognizing one's unique spiritual purpose and calling", 'اپنے منفرد روحانی مقصد اور ذمہ داری کو پہچاننا'),  # reviewed 18.53 (pass 6)
    ('manzil', 'Establishing identity', 'شناخت قائم کرنا'),
    ('manzil', 'Clear naming', 'واضح نام رکھنا'),
    ('manzil', 'Public speaking', 'عوامی خطاب'),
    ('manzil', 'Contracts', 'معاہدے'),
    ('manzil', 'Anonymity', 'گمنامی'),
    ('manzil', 'Hiding truth', 'حق چھپانا'),
    ('manzil', 'Dishonesty', 'بے ایمانی'),
    ('manzil', 'Names and marks in the old star calendar were for recognition — know yourself before Allah, not for show.', 'ستاروں کی قدیم تقویم میں نام اور نشان پہچان کے لیے تھے — اللہ کے حضور اپنی پہچان کریں، دکھاوے کے لیے نہیں۔'),  # reviewed 18.61 (pass 6)
    ('manzil', 'The Forearm', 'بازو'),
    ('manzil', 'Reach, Extension, Generosity', 'رسائی، وسعت، سخاوت'),
    ('manzil', 'Extending help to others and reaching for higher wisdom', 'دوسروں کی مدد کے لیے ہاتھ بڑھانا اور اعلیٰ حکمت تک رسائی'),
    ('manzil', 'Building alliances', 'اتحاد قائم کرنا'),
    ('manzil', 'Expansion', 'وسعت'),
    ('manzil', 'Selfishness', 'خود غرضی'),
    ('manzil', 'Hoarding', 'ذخیرہ اندوزی'),
    ('manzil', 'Isolation', 'تنہائی'),
    ('manzil', 'The forearm that gives in charity teaches reach without grasping.', 'وہ بازو جو صدقے میں دیتا ہے ہمیں سکھاتا ہے کہ رسائی ہو مگر لالچ نہ ہو۔'),
    ('manzil', 'The Muzzle', 'تھوتھنی (شیر کی ناک کا سرا)'),  # source fix S3 (list 2): NEW URDU DRAFT, pending review 4
    ('manzil', 'Mystery, Threshold, Sacred Space', 'راز، دہلیز، مقدس جگہ'),
    ('manzil', 'Contemplating the mysteries of faith and divine wisdom', 'ایمان کے رازوں اور الٰہی حکمت پر غور'),
    ('manzil', 'Meditation', 'مراقبہ'),
    ('manzil', 'Retreat', 'خلوت'),
    ('manzil', 'Inner work', 'باطن کی اصلاح'),  # reviewed 18.76 (pass 6)
    ('manzil', 'Spiritual practices', 'روحانی معمولات'),
    ('manzil', 'Excessive worldly activity', 'حد سے زیادہ دنیوی مصروفیت'),
    ('manzil', 'Noise', 'شور'),
    ('manzil', 'Distraction', 'انتشارِ توجہ'),
    ('manzil', 'In quiet gaps — between tasks, between breaths — remember the One who ordered the Moon’s phases.', 'خاموش وقفوں میں — کاموں کے درمیان، سانسوں کے درمیان — اُس ذات کو یاد کریں جس نے چاند کی منزلیں مقرر فرمائیں۔'),  # reviewed 18.81 (pass 6)
    ('manzil', 'Educational reflection (Qurʾān 36:39)', 'تعلیمی غور و فکر (قرآن 36:39)'),
    ('manzil', 'The Glance', 'نگاہ'),
    ('manzil', 'Vision, Attentiveness', 'بصیرت، توجہ'),
    ('manzil', 'Looking with care: notice what you see before you act, and ask Allah for insight without haste.', 'غور سے دیکھنا: عمل سے پہلے جو دیکھیں اس پر غور کریں، اور جلدی کیے بغیر اللہ سے بصیرت مانگیں۔'),
    ('manzil', 'Careful observation', 'محتاط مشاہدہ'),
    ('manzil', 'Reviewing plans', 'منصوبوں پر نظرِ ثانی'),
    ('manzil', 'Seeking counsel', 'مشورہ لینا'),
    ('manzil', 'Hasty judgments', 'جلد بازی میں رائے قائم کرنا'),  # reviewed 18.88 (pass 6)
    ('manzil', 'Gossip', 'غیبت'),
    ('manzil', 'Spying on others', 'دوسروں کی جاسوسی'),
    ('manzil', 'Manāzil al-qamar are stations for reflection and timing adab — not prediction of the unseen.', 'منازلِ قمر غور و فکر اور اوقات کے آداب کی منزلیں ہیں، غیب کی پیش گوئی کا ذریعہ نہیں۔'),  # reviewed 18.91 (pass 6)
    ('manzil', 'Educational framing (Qurʾān 10:5; 36:39)', 'تعلیمی پس منظر (قرآن 10:5؛ 36:39)'),
    ('manzil', 'The Forehead', 'پیشانی'),
    ('manzil', 'Dignity, Responsibility', 'وقار، ذمہ داری'),
    ('manzil', 'Carry dignity with humility — leadership here means service and clear intention before Allah.', 'وقار کے ساتھ عاجزی بھی اختیار کریں — یہاں قیادت کا مطلب خدمت اور اللہ کے سامنے صاف نیت ہے۔'),  # reviewed 18.95 (pass 6)
    ('manzil', 'Formal commitments', 'باضابطہ عہد و پیمان'),  # reviewed 18.96 (pass 6)
    ('manzil', 'Public trust', 'عوامی اعتماد'),
    ('manzil', 'Marriage discussions', 'رشتے کی بات چیت'),
    ('manzil', 'Arrogance', 'تکبر'),
    ('manzil', 'Empty show', 'کھوکھلا دکھاوا'),
    ('manzil', 'Neglecting counsel', 'مشورے کو نظر انداز کرنا'),
    ('manzil', 'The Mane', 'ایال'),
    ('manzil', 'Strength, Presence', 'قوت، شخصیت کا اثر'),  # reviewed 18.103 (pass 6)
    ('manzil', 'Strength is a trust: use presence to protect and encourage, not to dominate.', 'قوت ایک امانت ہے: اپنی شخصیت کے اثر کو حفاظت اور حوصلہ افزائی کے لیے استعمال کریں، دوسروں پر غلبہ پانے کے لیے نہیں۔'),  # reviewed 18.104 (pass 6)
    ('manzil', 'Encouraging others', 'دوسروں کی حوصلہ افزائی'),
    ('manzil', 'Steady work', 'مسلسل کام'),
    ('manzil', 'Protecting the vulnerable', 'کمزوروں کی حفاظت'),
    ('manzil', 'Long efforts', 'طویل کوششیں'),
    ('manzil', 'Boastfulness', 'شیخی'),
    ('manzil', 'Aggression', 'جارحیت'),
    ('manzil', 'Wasting energy', 'توانائی ضائع کرنا'),
    ('manzil', 'The Changer', 'بدلنے والا'),
    ('manzil', 'Transition, Turning', 'تبدیلی، موڑ'),
    ('manzil', 'Seasons turn: release what no longer serves, and turn toward what Allah has made clearer.', 'موسم بدلتے ہیں: جو اب کام کا نہیں اسے چھوڑیں، اور اس طرف رخ کریں جسے اللہ نے زیادہ واضح کر دیا ہے۔'),
    ('manzil', 'Course corrections', 'راستے کی اصلاح'),
    ('manzil', 'Ending harmful habits', 'نقصان دہ عادات ترک کرنا'),
    ('manzil', 'Repentance', 'توبہ'),
    ('manzil', 'Reorganizing', 'ازسرِ نو ترتیب'),
    ('manzil', 'Clinging to the obsolete', 'فرسودہ چیزوں سے چمٹے رہنا'),
    ('manzil', 'Forced abrupt breaks without counsel', 'مشورے کے بغیر اچانک اور زبردستی تعلق توڑنا'),  # reviewed 18.120 (pass 6)
    ('manzil', 'The Barker', 'بھونکنے والا'),
    ('manzil', 'Gathering, Calling', 'اجتماع، پکار'),
    ('manzil', 'Call others to what is good — a voice used for gathering and warning, not for needless noise.', 'دوسروں کو نیکی کی طرف بلائیں — اپنی آواز لوگوں کو جمع کرنے اور خبردار کرنے کے لیے استعمال کریں، بے وجہ شور کے لیے نہیں۔'),  # reviewed 18.123 (pass 6)
    ('manzil', 'Community work', 'اجتماعی کام'),
    ('manzil', 'Clear announcements', 'واضح اعلانات'),
    ('manzil', 'Spreading alarm without cause', 'بلاوجہ خوف پھیلانا'),
    ('manzil', 'Division', 'تفرقہ'),
    ('manzil', 'The Unarmed', 'نہتا'),  # reviewed 18.128 (pass 6)
    ('manzil', 'Balance, Harvest', 'توازن، فصل کی کٹائی'),  # reviewed 18.129 (pass 6)
    ('manzil', 'Al-Simāk al-Aʿzal (“the unarmed”) invites fair measure — harvest with gratitude, without grasping.', 'سماکِ اعزل («نہتا») منصفانہ ناپ تول کی دعوت دیتا ہے — شکرگزاری کے ساتھ فصل کاٹیں، لالچ کے بغیر۔'),  # reviewed 18.130 (pass 6)
    ('manzil', 'Fair dealing', 'منصفانہ لین دین'),
    ('manzil', 'Harvest and completion of work', 'فصل کی کٹائی اور کام کی تکمیل'),
    ('manzil', 'Partnerships', 'شراکتیں'),
    ('manzil', 'Beauty with restraint', 'حسن و آرائش میں اعتدال'),  # reviewed 19.1 (pass 6)
    ('manzil', 'Greed', 'لالچ'),
    ('manzil', 'Unfair advantage', 'ناجائز فائدہ'),
    ('manzil', 'Neglecting zakāh and rights', 'زکوٰۃ اور حقوق کو نظر انداز کرنا'),
    ('manzil', 'The Covering', 'پردہ'),
    ('manzil', 'Covering, Discretion', 'پردہ پوشی، رازداری'),
    ('manzil', 'Cover faults — your own and others’ — and prefer discretion over exposure.', 'عیب چھپائیں — اپنے بھی اور دوسروں کے بھی — اور پردہ فاش کرنے پر رازداری کو ترجیح دیں۔'),
    ('manzil', 'Private repentance', 'تنہائی میں توبہ'),  # reviewed 19.8 (pass 6)
    ('manzil', 'Protecting privacy', 'رازداری کا تحفظ'),
    ('manzil', 'Quiet charity', 'چھپا کر صدقہ دینا'),  # reviewed 19.10 (pass 6)
    ('manzil', 'Exposing others', 'دوسروں کو بے نقاب کرنا'),
    ('manzil', 'Scandal', 'رسوائی'),
    ('manzil', 'Public shaming', 'سرِعام شرمندہ کرنا'),
    ('manzil', 'The Claws', 'پنجے'),
    ('manzil', 'Boundaries, Careful Cuts', 'حدود، سوچ سمجھ کر قطع کرنا'),  # reviewed 19.15 (pass 6)
    ('manzil', 'Set boundaries with justice: cut what harms, without cruelty.', 'انصاف کے ساتھ حدود قائم کریں: جو نقصان دہ ہو اسے الگ کر دیں، مگر سنگدلی کے بغیر۔'),  # reviewed 19.16 (pass 6)
    ('manzil', 'Clear agreements', 'واضح معاہدے'),
    ('manzil', 'Ending harmful ties with adab', 'نقصان دہ تعلقات کو ادب کے ساتھ ختم کرنا'),
    ('manzil', 'Legal clarity', 'قانونی وضاحت'),
    ('manzil', 'Self-discipline', 'ضبطِ نفس'),
    ('manzil', 'Spiteful severance', 'کینے کی بنا پر قطع تعلق'),  # reviewed 19.21 (pass 6)
    ('manzil', 'Ambiguous contracts', 'مبہم معاہدے'),
    ('manzil', 'Unnecessary conflict', 'غیر ضروری جھگڑا'),
    ('manzil', 'The Crown', 'تاج'),
    ('manzil', 'Honor, Trust', 'عزت، امانت'),
    ('manzil', 'Honor is a trust worn lightly — crowns in the sky remind of responsibility, not entitlement.', 'عزت ایک امانت ہے، اسے غرور کے بغیر سنبھالیں — آسمان کے تاج ذمہ داری کی یاد دلاتے ہیں، استحقاق کی نہیں۔'),  # reviewed 19.26 (pass 6)
    ('manzil', 'Keeping trusts', 'امانتوں کی حفاظت'),
    ('manzil', 'Formal roles', 'باضابطہ مناصب'),  # reviewed 19.28 (pass 6)
    ('manzil', 'Guarding dignity', 'وقار کی حفاظت'),
    ('manzil', 'Responsible leadership', 'ذمہ دارانہ قیادت'),
    ('manzil', 'Pride', 'غرور'),
    ('manzil', 'Betrayal of trust', 'امانت میں خیانت'),
    ('manzil', 'Seeking status for its own sake', 'محض مرتبے کی خاطر مرتبہ چاہنا'),
    ('manzil', 'The Heart', 'دل'),
    ('manzil', 'Sincerity, Courage of Heart', 'اخلاص، دل کی ہمت'),
    ('manzil', 'Return to the heart: sincerity (ikhlāṣ) before intensity — courage without crushing others.', 'دل کی طرف لوٹیں: جوش سے پہلے اخلاص، اور ایسی ہمت جو دوسروں کو کچلے نہیں۔'),  # reviewed 19.36 (pass 6)
    ('manzil', 'Heartfelt duʿāʾ', 'دل سے دعا'),
    ('manzil', 'Honest conversations', 'دیانت دارانہ گفتگو'),
    ('manzil', 'Courageous apology', 'جرأت مندانہ معذرت'),
    ('manzil', 'Deep study', 'گہرا مطالعہ'),
    ('manzil', 'Hard-heartedness', 'سنگدلی'),
    ('manzil', 'Emotional recklessness', 'جذباتی بے احتیاطی'),
    ('manzil', 'Crushing speech', 'دل توڑ دینے والی باتیں'),  # reviewed 19.43 (pass 6)
    ('manzil', 'The Sting', 'ڈنک'),
    ('manzil', 'Restraint, Defense of Dignity', 'ضبط، وقار کا دفاع'),
    ('manzil', 'The sting is for defense, not attack — restrain the tongue and hand unless justice requires otherwise.', 'ڈنک دفاع کے لیے ہے، حملے کے لیے نہیں — جب تک انصاف کا تقاضا نہ ہو زبان اور ہاتھ کو روکے رکھیں۔'),
    ('manzil', 'Self-restraint', 'ضبطِ نفس'),
    ('manzil', 'Protecting the weak', 'کمزوروں کی حفاظت'),
    ('manzil', 'Cautious travel planning', 'احتیاط کے ساتھ سفر کی منصوبہ بندی'),
    ('manzil', 'Saying less', 'کم بولنا'),
    ('manzil', 'Retaliation for ego', 'انا کی خاطر بدلہ'),
    ('manzil', 'Provocation', 'اشتعال دلانا'),
    ('manzil', 'Reckless risk', 'بے جا خطرہ مول لینا'),  # reviewed 19.53 (pass 6)
    ('manzil', 'The Ostriches', 'شتر مرغ'),
    ('manzil', 'Journey, Openness', 'سفر، کشادگی'),
    ('manzil', 'Wide spaces invite travel of body and heart — move with tawakkul and good company.', 'وسیع جگہیں جسم اور دل دونوں کے سفر کی دعوت دیتی ہیں — توکل اور اچھی صحبت کے ساتھ چلیں۔'),
    ('manzil', 'Exploration of knowledge', 'علم کی کھوج'),
    ('manzil', 'Outdoor work', 'کھلی فضا میں کام'),
    ('manzil', 'Expanding horizons with adab', 'ادب کے دائرے میں رہ کر اپنے افق وسیع کرنا'),  # reviewed 19.59 (pass 6)
    ('manzil', 'Aimless wandering', 'بے مقصد آوارہ گردی'),
    ('manzil', 'Leaving duties unfinished', 'فرائض ادھورے چھوڑنا'),
    ('manzil', 'Isolation from good counsel', 'اچھے مشورے سے دوری'),
    ('manzil', 'The City', 'شہر'),
    ('manzil', 'Settlement, Order', 'ٹھہراؤ، نظم و ترتیب'),  # reviewed 19.64 (pass 6)
    ('manzil', 'Cities need order and neighbors’ rights — settle what is due before chasing the next road.', 'شہروں کو نظم اور پڑوسیوں کے حقوق چاہییں — اگلی راہ پکڑنے سے پہلے جو واجب ہے وہ ادا کریں۔'),  # reviewed 19.65 (pass 6)
    ('manzil', 'Settling affairs', 'معاملات نمٹانا'),
    ('manzil', 'Neighborhood care', 'پڑوس کا خیال'),
    ('manzil', 'Local commitments', 'مقامی ذمہ داریاں'),
    ('manzil', 'Organizing home', 'گھر کی ترتیب'),
    ('manzil', "Neglecting neighbors' rights", 'پڑوسیوں کے حقوق نظر انداز کرنا'),
    ('manzil', 'Chaos in commitments', 'ذمہ داریوں میں انتشار'),
    ('manzil', 'Fleeing responsibility', 'ذمہ داری سے فرار'),
    ('manzil', 'The Fortunate Sacrificer', 'سعد الذابح (قربانی کرنے والا)'),
    ('manzil', 'Offering, Commitment', 'ایثار، عہد'),  # reviewed 19.73 (pass 6)
    ('manzil', 'Named among the saʿd stations: reflect on what you are willing to offer — wealth, time, ego — for Allah’s sake. (Educational theme only; not a ritual prescription.)', 'یہ اُن منازل میں سے ہے جن کے نام «سعد» سے شروع ہوتے ہیں: غور کریں کہ آپ اللہ کی خاطر کیا پیش کرنے کو تیار ہیں — مال، وقت، انا۔ (محض تعلیمی موضوع؛ کوئی مقررہ عبادت یا عمل نہیں۔)'),  # reviewed 19.74 (pass 6)
    ('manzil', 'Charitable giving', 'خیرات و صدقات'),
    ('manzil', "Keeping one's commitments", 'عہد و پیمان کی پاسداری'),  # reviewed 19.76 (pass 6); source fix S5 (list 2): EN re-keyed, reviewed Urdu kept
    ('manzil', 'Serious commitments', 'سنجیدہ وعدے'),
    ('manzil', 'Simplifying lifestyle', 'طرزِ زندگی کو سادہ بنانا'),
    ('manzil', 'Wasteful spending', 'فضول خرچی'),
    ('manzil', 'Empty vows', 'کھوکھلے وعدے'),
    ('manzil', 'Harming animals or people', 'جانوروں یا انسانوں کو نقصان پہنچانا'),
    ('manzil', 'The Fortunate Swallower', 'سعد بلع (نگل لینے والا)'),
    ('manzil', 'Depth, Absorption', 'گہرائی، جذب'),
    ('manzil', 'Absorb lessons slowly: take in knowledge and counsel, then digest before speaking.', 'اسباق کو آہستہ آہستہ جذب کریں: علم اور مشورہ لیں، پھر بولنے سے پہلے اسے ہضم کریں۔'),
    ('manzil', 'Listening', 'سننا'),
    ('manzil', 'Patience with difficulty', 'مشکل میں صبر'),
    ('manzil', 'Swallowing anger into resentment', 'غصے کو نگل کر رنجش بنا لینا'),
    ('manzil', 'Consuming without reflection', 'بغیر سوچے سمجھے کھانا اور اپنانا'),  # reviewed 19.88 (pass 6)
    ('manzil', 'Overindulgence', 'حد سے زیادہ لطف اندوزی'),
    ('manzil', 'The Most Fortunate', 'سعد السعود (سب سے زیادہ خوش بخت)'),
    ('manzil', 'Gratitude, Hope', 'شکرگزاری، امید'),
    ('manzil', 'Named “most fortunate” in the star calendar — meet ease with shukr, and hardship with hope in Allah alone.', 'ستاروں کے کیلنڈر میں اسے “سب سے زیادہ خوش بخت” کہا گیا ہے — آسانی ملے تو شکر ادا کریں، اور مشکل پیش آئے تو صرف اللہ سے امید رکھیں۔'),
    ('manzil', 'Gratitude practices', 'شکرگزاری کے معمولات'),
    ('manzil', 'Beginning hopeful works', 'پُرامید کاموں کا آغاز'),
    ('manzil', 'Sharing ease with others', 'آسانی دوسروں کے ساتھ بانٹنا'),
    ('manzil', 'Taking ease for granted', 'آسانی کو معمولی سمجھ لینا'),
    ('manzil', 'Complacency', 'غفلت اور بے فکری'),  # reviewed 19.94 (pass 6)
    ('manzil', 'Forgetting the Giver', 'عطا کرنے والے کو بھول جانا'),
    ('manzil', 'The Fortunate Tents', 'سعد الاخبیہ (خیمے)'),
    ('manzil', 'Shelter, Hospitality', 'پناہ، مہمان نوازی'),
    ('manzil', 'Tents mean shelter and guests: open your space with generosity and guard those who seek safety.', 'خیمے پناہ اور مہمانوں کی علامت ہیں: فراخ دلی سے اپنے دروازے کھولیں اور پناہ مانگنے والوں کی حفاظت کریں۔'),  # reviewed 19.97 (pass 6)
    ('manzil', 'Hospitality', 'مہمان نوازی'),
    ('manzil', 'Shelter and housing matters', 'رہائش اور پناہ کے معاملات'),
    ('manzil', 'Protecting family', 'خاندان کی حفاظت'),
    ('manzil', 'Welcoming the stranger with adab', 'اجنبی کا ادب کے ساتھ استقبال'),
    ('manzil', 'Inhospitality', 'مہمان نوازی نہ کرنا'),
    ('manzil', 'Neglecting dependents', 'زیرِ کفالت افراد کو نظر انداز کرنا'),
    ('manzil', 'Closing doors out of pride', 'غرور میں دروازے بند کرنا'),
    ('manzil', 'The Former Spout', 'اگلا دہانہ'),  # reviewed 19.105 (pass 6)
    ('manzil', 'Opening, Outflow', 'کھلنا، بہاؤ'),
    ('manzil', 'The former spout of the bucket: begin letting good flow — speech, charity, and help — with measured opening.', 'ڈول کا اگلا دہانہ: بھلائی کو بہنے دیں — بات، صدقہ اور مدد — مگر سوچ سمجھ کر اور اعتدال سے۔'),  # reviewed 19.107 (pass 6)
    ('manzil', 'Starting helpful projects', 'مفید منصوبے شروع کرنا'),
    ('manzil', 'Releasing stuck affairs', 'اٹکے ہوئے معاملات سلجھانا'),  # reviewed 19.109 (pass 6)
    ('manzil', 'Marriage and union talks', 'نکاح اور رشتے کی بات چیت'),
    ('manzil', 'Generosity', 'سخاوت'),
    ('manzil', 'Reckless disclosure', 'بے احتیاطی سے راز کھولنا'),
    ('manzil', 'Draining resources without plan', 'منصوبہ بندی کے بغیر وسائل ختم کر دینا'),  # reviewed 19.113 (pass 6)
    ('manzil', 'Gossip as “release”', 'غیبت کو «دل کا بوجھ ہلکا کرنا» سمجھنا'),  # reviewed 19.114 (pass 6)
    ('manzil', 'The Latter Spout', 'پچھلا دہانہ'),  # reviewed 19.115 (pass 6)
    ('manzil', 'Completion, Emptying', 'تکمیل، خالی کرنا'),
    ('manzil', 'The latter spout completes the pouring — finish what you opened, and empty the heart of grudges.', 'پچھلا دہانہ انڈیلنے کا عمل پورا کرتا ہے — جو شروع کیا اسے مکمل کریں، اور دل کو کینوں سے خالی کریں۔'),  # reviewed 19.117 (pass 6)
    ('manzil', 'Completing projects', 'منصوبے مکمل کرنا'),
    ('manzil', 'Settling debts', 'قرض چکانا'),
    ('manzil', 'Forgiving leftovers', 'بچی کھچی رنجشیں معاف کرنا'),
    ('manzil', 'Closing cycles cleanly', 'ادوار کو صفائی سے بند کرنا'),
    ('manzil', 'Leaving ends untied', 'کام ادھورے چھوڑ دینا'),  # reviewed 19.121 (pass 6)
    ('manzil', 'Hoarding grudges', 'دل میں کینہ پالنا'),  # reviewed 19.122 (pass 6)
    ('manzil', 'Starting too many new things', 'بہت سی نئی چیزیں شروع کر لینا'),
    ('manzil', 'Belly of the Fish', 'مچھلی کا پیٹ'),
    ('manzil', 'Wholeness, Hidden Depths', 'کاملیت، پوشیدہ گہرائیاں'),
    ('manzil', 'The belly of the fish closes the circuit of twenty-eight — honor what is hidden, and seek wholeness through tawakkul.', 'مچھلی کا پیٹ اٹھائیس منازل کا دائرہ مکمل کرتا ہے — جو پوشیدہ ہے اس کی قدر کریں اور توکل کے ساتھ کمال کی طلب کریں۔'),  # reviewed 19.126 (pass 6)
    ('manzil', 'Quiet reflection', 'خاموش غور و فکر'),
    ('manzil', 'Caring for the unseen needs of others', 'دوسروں کی ان دیکھی ضرورتوں کا خیال رکھنا'),
    ('manzil', 'Patience with the hidden', 'پوشیدہ باتوں پر صبر'),
    ('manzil', 'Integrating lessons', 'سیکھی ہوئی باتوں کو زندگی کا حصہ بنانا'),  # reviewed 19.130 (pass 6)
    ('manzil', 'Forced exposure', 'زبردستی بے نقاب کرنا'),
    ('manzil', 'Denying the unseen', 'غیب کا انکار'),
    ('manzil', 'Despair in darkness', 'اندھیرے میں مایوسی'),
    ('career', 'Livestock trading, fashion and clothing business, fruit wholesaling (sell wholesale for quick turnover to prevent spoilage)', 'مویشیوں کی تجارت، فیشن اور ملبوسات کا کاروبار، پھلوں کی تھوک فروخت (خراب ہونے سے بچانے کے لیے جلد نکاسی کی خاطر تھوک میں بیچنا)'),
    ('career', 'Quick turnover, fresh goods, dynamic movement, and energetic action align perfectly with your fiery nature and passionate energy', 'تیز رفتار نکاسی، تازہ مال، متحرک سرگرمی اور توانا عمل روایتی طور پر آپ کے آتشی مزاج اور پُرجوش توانائی سے ہم آہنگ سمجھی جاتی ہیں'),  # reviewed 22.2 (pass 8)
    ('career', 'None specified - Fire element has freedom in career choices', 'کوئی مخصوص پابندی نہیں — آتشی عنصر کو پیشے کے انتخاب میں آزادی حاصل ہے'),
    ('career', 'Slow-moving inventory, long-term storage businesses, or careers requiring extreme patience', 'سست رفتار ذخیرہ، طویل مدتی گودام کے کاروبار، یا ایسے پیشے جن میں انتہائی صبر درکار ہو'),
    ('career', 'Fashion & Apparel', 'فیشن اور ملبوسات'),
    ('career', 'E-commerce clothing platforms', 'ملبوسات کے ای کامرس پلیٹ فارم'),
    ('career', 'Fashion retail stores', 'فیشن کی خوردہ دکانیں'),
    ('career', 'Textile manufacturing', 'ٹیکسٹائل کی صنعت'),
    ('career', 'Clothing brand development', 'ملبوسات کے برانڈ کی تشکیل'),
    ('career', 'Fashion wholesale distribution', 'فیشن کی تھوک تقسیم'),
    ('career', 'Custom tailoring services', 'ناپ کے مطابق سلائی کی خدمات'),  # reviewed 22.11 (pass 8)
    ('career', 'Food & Hospitality', 'خوراک اور مہمان نوازی'),
    ('career', 'Restaurant ownership', 'ریستوران کی ملکیت'),
    ('career', 'Catering services', 'کیٹرنگ کی خدمات'),
    ('career', 'Food delivery platforms', 'کھانے کی ترسیل کے پلیٹ فارم'),
    ('career', 'Farm-to-table businesses', 'کھیت سے دسترخوان تک کے کاروبار'),
    ('career', 'Fresh food markets', 'تازہ خوراک کے بازار'),
    ('career', 'Fast-casual dining concepts', 'فوری سروس والے ریستوران'),  # reviewed 17.24 (pass 6)
    ('career', 'Agricultural Trading', 'زرعی تجارت'),
    ('career', 'Livestock commodities trading', 'مویشیوں کی تجارت (اجناس منڈی میں)'),  # reviewed 22.19 (pass 8)
    ('career', 'Grain and commodities trading (Sharīʿah-compliant)', 'اناج اور اجناس کی تجارت (شرعی اصولوں کے مطابق)'),  # source fix S11 (list 2): NEW URDU DRAFT, pending review 4
    ('career', 'Agricultural supply chains', 'زرعی سپلائی چین'),
    ('career', 'Restaurant supply wholesale', 'ریستورانوں کو سامان کی تھوک فراہمی'),
    ('career', 'Meat processing and distribution', 'گوشت کی پروسیسنگ اور تقسیم'),
    ('career', 'Perishable Goods Logistics', 'جلد خراب ہونے والی اشیا کی لاجسٹکس'),
    ('career', 'Fresh goods distribution', 'تازہ مال کی تقسیم'),
    ('career', 'Cold chain logistics', 'کولڈ چین لاجسٹکس'),
    ('career', 'Quick-turnover inventory management', 'جلد نکاسی والے ذخیرے کا انتظام'),
    ('career', 'Time-sensitive product sales', 'جلد فروخت کی متقاضی مصنوعات کی تجارت'),  # reviewed 22.28 (pass 8)
    ('career', 'Produce wholesale networks', 'پیداوار کی تھوک فروخت کے نیٹ ورک'),
    ('career', 'Agriculture and farming, mining and mineral extraction, gold trading, petroleum and natural resources, earth-derived products', 'زراعت اور کاشتکاری، کان کنی اور معدنیات کا استخراج، سونے کی تجارت، پیٹرولیم اور قدرتی وسائل، زمین سے حاصل ہونے والی اشیا'),
    ('career', "Stability, long-term growth, tangible assets, and connection to the earth's bounty align perfectly with your grounded nature and patient disposition", 'استحکام، طویل مدتی ترقی، ٹھوس اثاثے، اور زمین کی نعمتوں سے تعلق روایتی طور پر آپ کے زمینی مزاج اور صبر سے ہم آہنگ سمجھے جاتے ہیں'),  # reviewed 22.30 (pass 8)
    ('career', 'Fish and all fish-related products or businesses', 'مچھلی اور مچھلی سے متعلق تمام مصنوعات یا کاروبار'),
    ('career', 'Seafood industry, aquaculture, fish markets, sushi restaurants, fishing equipment - all water-based food commerce', 'سمندری خوراک کی صنعت، آبی زراعت، مچھلی منڈیاں، سوشی ریستوران، ماہی گیری کا سامان — پانی سے متعلق تمام خوراکی تجارت'),
    ('career', 'Agriculture & Farming', 'زراعت اور کاشتکاری'),
    ('career', 'Commercial farming operations', 'تجارتی کاشتکاری کے منصوبے'),
    ('career', 'Organic agriculture businesses', 'نامیاتی زراعت کے کاروبار'),
    ('career', 'Agricultural technology (AgriTech)', 'زرعی ٹیکنالوجی (ایگری ٹیک)'),
    ('career', 'Crop trading and commodities', 'فصلوں اور اجناس کی تجارت'),
    ('career', 'Sustainable farming consultancy', 'پائیدار کاشتکاری کی مشاورت'),
    ('career', 'Greenhouse operations', 'گرین ہاؤس میں کاشت'),  # reviewed 22.39 (pass 8)
    ('career', 'Mining & Natural Resources', 'کان کنی اور قدرتی وسائل'),
    ('career', 'Mining operations and management', 'کان کنی کے کام اور انتظام'),
    ('career', 'Precious metals trading', 'قیمتی دھاتوں کی تجارت'),
    ('career', 'Mineral extraction companies', 'معدنیات نکالنے والی کمپنیاں'),
    ('career', 'Quarry operations', 'پتھر کی کانوں کے کام'),
    ('career', 'Natural resource consulting', 'قدرتی وسائل کی مشاورت'),
    ('career', 'Gemstone trading', 'قیمتی پتھروں کی تجارت'),
    ('career', 'Real Estate & Construction', 'رئیل اسٹیٹ اور تعمیرات'),
    ('career', 'Real estate development', 'جائیداد کی تعمیر و ترقی (رئیل اسٹیٹ ڈیولپمنٹ)'),  # reviewed 22.48 (pass 8)
    ('career', 'Property management', 'جائیداد کا انتظام'),
    ('career', 'Construction companies', 'تعمیراتی کمپنیاں'),
    ('career', 'Land investment', 'زمین میں سرمایہ کاری'),
    ('career', 'Building materials supply', 'تعمیراتی مواد کی فراہمی'),
    ('career', 'Infrastructure development', 'بنیادی ڈھانچے کی ترقی'),
    ('career', 'Energy & Petroleum', 'توانائی اور پیٹرولیم'),
    ('career', 'Oil and gas industry', 'تیل اور گیس کی صنعت'),
    ('career', 'Renewable energy projects', 'قابلِ تجدید توانائی کے منصوبے'),
    ('career', 'Energy consulting', 'توانائی کی مشاورت'),
    ('career', 'Petroleum distribution', 'پیٹرولیم کی تقسیم'),
    ('career', 'Alternative energy solutions', 'متبادل توانائی کے حل'),
    ('career', 'Power generation facilities', 'بجلی پیدا کرنے کی تنصیبات'),
    ('career', 'Earth Products', 'زمینی مصنوعات'),
    ('career', 'Grains and cereals wholesale', 'اناج اور غلے کی تھوک فروخت'),
    ('career', 'Crop distribution networks', 'فصلوں کی تقسیم کے نیٹ ورک'),
    ('career', 'Food processing from crops', 'فصلوں سے خوراک کی پروسیسنگ'),
    ('career', 'Seed and fertilizer supply', 'بیج اور کھاد کی فراہمی'),
    ('career', 'Agricultural equipment sales', 'زرعی آلات کی فروخت'),
    ('career', 'Fruits and vegetables trading, fashion and clothing business - items that move and circulate like air', 'پھلوں اور سبزیوں کی تجارت، فیشن اور ملبوسات کا کاروبار — وہ اشیا جو ہوا کی طرح حرکت اور گردش کرتی ہیں'),
    ('career', 'Movement, circulation, communication, and fresh exchange align with your airy nature. Like wind, you thrive with constant motion and change.', 'حرکت، گردش، رابطہ اور تازہ لین دین آپ کے ہوائی مزاج سے ہم آہنگ ہیں۔ ہوا کی طرح آپ اکثر مسلسل حرکت اور تبدیلی میں پھلتے پھولتے ہیں۔'),  # reviewed 22.68 (pass 8)
    ('career', 'Fish and all fish-related products - disrupts air element severely', 'مچھلی اور مچھلی سے متعلق تمام مصنوعات — روایتی طور پر ہوائی عنصر سے غیر موافق سمجھی جاتی ہیں'),
    ('career', 'Seafood industry, aquaculture, fishing, fish markets - any water-based food business. Also avoid slow, stagnant businesses that lack movement.', 'سمندری خوراک کی صنعت، آبی زراعت، ماہی گیری، مچھلی منڈیاں — پانی سے متعلق ہر خوراکی کاروبار۔ ایسے سست اور جامد کاروبار سے بھی بچیں جن میں حرکت نہ ہو۔'),
    ('career', 'Fashion & Retail', 'فیشن اور خوردہ فروشی'),
    ('career', 'Clothing boutiques and stores', 'ملبوسات کے بوتیک اور دکانیں'),
    ('career', 'Fashion design studios', 'فیشن ڈیزائن اسٹوڈیوز'),
    ('career', 'Textile trading', 'ٹیکسٹائل کی تجارت'),
    ('career', 'Online fashion platforms', 'آن لائن فیشن پلیٹ فارم'),
    ('career', 'Trendy retail concepts', 'نئے رجحانات پر مبنی دکانیں'),  # reviewed 22.76 (pass 8)
    ('career', 'Seasonal fashion collections', 'موسمی فیشن مجموعے'),
    ('career', 'Fresh Produce', 'تازہ پیداوار'),
    ('career', 'Fruit and vegetable wholesale', 'پھلوں اور سبزیوں کی تھوک فروخت'),
    ('career', 'Fresh produce markets', 'تازہ پیداوار کے بازار'),
    ('career', 'Organic produce distribution', 'نامیاتی پیداوار کی تقسیم'),
    ('career', 'Farm fresh delivery services', 'کھیت سے تازہ ترسیل کی خدمات'),
    ('career', 'Juice bars and smoothie shops', 'جوس بار اور اسموتھی کی دکانیں'),
    ('career', 'Healthy food retail', 'صحت بخش خوراک کی خوردہ فروخت'),
    ('career', 'Communication & Media', 'ابلاغ اور ذرائع ابلاغ'),
    ('career', 'Digital media companies', 'ڈیجیٹل میڈیا کمپنیاں'),
    ('career', 'Public relations firms', 'تعلقاتِ عامہ کے ادارے'),
    ('career', 'Broadcasting and radio', 'نشریات اور ریڈیو'),
    ('career', 'Social media management', 'سوشل میڈیا کا انتظام'),
    ('career', 'Content creation agencies', 'مواد تخلیق کرنے والی ایجنسیاں'),
    ('career', 'Marketing and advertising', 'مارکیٹنگ اور اشتہارات'),
    ('career', 'Travel & Transportation', 'سفر اور نقل و حمل'),
    ('career', 'Travel agencies', 'ٹریول ایجنسیاں'),
    ('career', 'Airline industry careers', 'فضائی صنعت کے پیشے'),
    ('career', 'Transportation logistics', 'نقل و حمل کی لاجسٹکس'),
    ('career', 'Tourism businesses', 'سیاحت کے کاروبار'),
    ('career', 'Delivery services', 'ترسیل کی خدمات'),
    ('career', 'Courier companies', 'کوریئر کمپنیاں'),
    ('career', 'Technology & Innovation', 'ٹیکنالوجی اور جدت'),
    ('career', 'Tech startups', 'ٹیکنالوجی اسٹارٹ اپس'),
    ('career', 'Software development', 'سافٹ ویئر کی تیاری'),
    ('career', 'App development', 'ایپ کی تیاری'),
    ('career', 'Cloud services', 'کلاؤڈ خدمات'),
    ('career', 'IT consulting', 'آئی ٹی مشاورت'),
    ('career', 'Digital innovation', 'ڈیجیٹل جدت'),
    ('career', 'Fish and seafood trading, fashion and clothing business, earth-based products (blessed despite being water element)', 'مچھلی اور سمندری خوراک کی تجارت، فیشن اور ملبوسات کا کاروبار، زمینی مصنوعات (پانی کے عنصر کے باوجود بابرکت)'),
    ('career', 'Flow, adaptability, emotional intelligence, and nurturing energy align with your water nature. Like water, you find success in meeting needs and providing for others.', 'بہاؤ، لچک، جذباتی فہم اور پرورش کرنے والی توانائی آپ کے آبی مزاج سے ہم آہنگ ہیں۔ پانی کی طرح آپ اکثر دوسروں کی ضرورتیں پوری کرنے اور خوراک و ضروریات مہیا کرنے میں کامیابی پاتے ہیں۔'),  # reviewed 22.106 (pass 8); source fix S12 (list 2): EN re-keyed, reviewed Urdu kept
    ('career', 'Fruits and vegetables - these disrupt water element balance severely', 'پھل اور سبزیاں — یہ روایتی طور پر آبی عنصر سے غیر موافق سمجھی جاتی ہیں'),
    ('career', 'Fresh produce markets, fruit wholesale, vegetable trading, juice bars (from fruits), salad businesses - any fruit/vegetable-focused enterprise', 'تازہ پیداوار کے بازار، پھلوں کی تھوک فروخت، سبزیوں کی تجارت، (پھلوں سے بنے) جوس بار، سلاد کے کاروبار — پھلوں یا سبزیوں پر مبنی ہر کاروبار'),
    ('career', 'Seafood & Marine', 'سمندری خوراک اور بحری مصنوعات'),
    ('career', 'Fish markets and wholesaling', 'مچھلی منڈیاں اور تھوک فروخت'),
    ('career', 'Seafood restaurants', 'سمندری خوراک کے ریستوران'),
    ('career', 'Aquaculture and fish farming', 'آبی زراعت اور مچھلی فارمنگ'),
    ('career', 'Marine products distribution', 'بحری مصنوعات کی تقسیم'),
    ('career', 'Sushi and seafood retail', 'سوشی اور سمندری خوراک کی خوردہ فروخت'),
    ('career', 'Fish processing facilities', 'مچھلی کی پروسیسنگ کی تنصیبات'),
    ('career', 'Fashion & Textiles', 'فیشن اور ٹیکسٹائل'),
    ('career', 'Clothing retail and wholesale', 'ملبوسات کی خوردہ اور تھوک فروخت'),
    ('career', 'Fashion boutiques', 'فیشن بوتیک'),
    ('career', 'Fabric trading', 'کپڑے کی تجارت'),
    ('career', 'Garment manufacturing', 'ملبوسات کی تیاری'),
    ('career', 'Health & Wellness', 'صحت و تندرستی (ویلنس)'),  # reviewed 23.6 (pass 8); source fix S10 (list 2): EN re-keyed, reviewed Urdu kept
    ('career', 'Spa and wellness centers', 'اسپا اور ویلنس سینٹر'),
    ('career', 'Hydrotherapy facilities', 'ہائیڈروتھراپی کی سہولیات'),
    ('career', 'Health-care and caring professions', 'نگہداشت اور معالجے کے پیشے (باقاعدہ تربیت کے ساتھ)'),  # reviewed 23.9 (pass 8); source fix S10 (list 2): EN re-keyed, reviewed Urdu kept
    ('career', 'Counseling and therapy', 'مشاورت اور تھراپی'),
    ('career', 'Complementary wellness (alongside medical care)', 'تکمیلی فلاحِ صحت (طبی علاج کے ساتھ ساتھ)'),  # source fix S10 (list 2): NEW URDU DRAFT, pending review 4
    ('career', 'Wellness coaching', 'ویلنس کوچنگ'),
    ('career', 'Beverages & Liquids', 'مشروبات اور مائعات'),
    ('career', 'Bottled water distribution', 'بوتل بند پانی کی تقسیم'),
    ('career', 'Juice and smoothie businesses', 'جوس اور اسموتھی کے کاروبار'),
    ('career', 'Beverage manufacturing', 'مشروبات کی تیاری'),
    ('career', 'Coffee and tea shops', 'کافی اور چائے کی دکانیں'),
    ('career', 'Liquid product trading', 'مائع مصنوعات کی تجارت'),
    ('career', 'Water purification services', 'پانی صاف کرنے کی خدمات'),
    ('career', 'Earth Products (Blessed)', 'زمینی مصنوعات (بابرکت)'),
    ('career', 'Agricultural products', 'زرعی مصنوعات'),
    ('career', 'Grain and crop trading', 'اناج اور فصلوں کی تجارت'),
    ('career', 'Organic farming', 'نامیاتی کاشتکاری'),
    ('career', 'Earth-derived goods', 'زمین سے حاصل ہونے والی اشیا'),
    ('career', 'Natural products retail', 'قدرتی مصنوعات کی خوردہ فروخت'),
    ('career', 'Leadership roles, entrepreneurship, any venture requiring courage and initiative', 'قیادتی کردار، کاروباری سرگرمیاں، اور ہر وہ کام جس میں ہمت اور پہل درکار ہو'),
    ('career', 'Leadership, innovation, courage, and pioneering spirit align with your solar fire nature', 'قیادت، جدت، ہمت اور اولیت کا جذبہ آپ کے شمسی آتشی مزاج سے ہم آہنگ ہیں'),
    ('career', 'Routine, repetitive work lacking creativity or leadership opportunity', 'معمول کا، دہرایا جانے والا کام جس میں تخلیقی صلاحیت یا قیادت کا موقع نہ ہو'),
    ('career', 'Subordinate roles without autonomy, micromanaged positions, careers suppressing initiative', 'خود مختاری کے بغیر ماتحت کردار، سخت نگرانی والے عہدے، اور وہ پیشے جو پہل کو دبا دیں'),
    ('career', 'Leadership & Management', 'قیادت اور انتظام'),
    ('career', 'Executive leadership positions', 'اعلیٰ انتظامی قیادت کے عہدے'),
    ('career', 'Business management', 'کاروباری انتظام'),
    ('career', 'Project management', 'پروجیکٹ مینجمنٹ'),
    ('career', 'Team leadership roles', 'ٹیم کی قیادت کے کردار'),
    ('career', 'Entrepreneurship', 'کاروباری سرگرمی'),
    ('career', 'Startup founding', 'اسٹارٹ اپ کی بنیاد رکھنا'),
    ('career', 'Innovation & Technology', 'جدت اور ٹیکنالوجی'),
    ('career', 'Product development', 'نئی مصنوعات کی تشکیل'),  # reviewed 23.37 (pass 8)
    ('career', 'Innovation consulting', 'جدت کی مشاورت'),
    ('career', 'Digital transformation', 'ڈیجیٹل تبدیلی'),
    ('career', 'Venture capital (Sharīʿah-compliant)', 'وینچر کیپیٹل (شرعی اصولوں کے مطابق)'),  # source fix S11 (list 2): NEW URDU DRAFT, pending review 4
    ('career', 'Business incubation', 'کاروباری انکیوبیشن'),
    ('career', 'Public Service', 'عوامی خدمت'),
    ('career', 'Government leadership', 'حکومتی قیادت'),
    ('career', 'Community organizing', 'کمیونٹی کی تنظیم'),
    ('career', 'Political advocacy', 'سیاسی وکالت'),
    ('career', 'Non-profit leadership', 'غیر منافع بخش اداروں کی قیادت'),
    ('career', 'Social entrepreneurship', 'سماجی کاروباری سرگرمی'),
    ('career', 'Public policy', 'عوامی پالیسی'),
    ('career', 'Creative Industries', 'تخلیقی صنعتیں'),
    ('career', 'Film and media production', 'فلم اور میڈیا پروڈکشن'),
    ('career', 'Creative direction', 'تخلیقی ہدایت کاری'),
    ('career', 'Brand development', 'برانڈ کی تشکیل'),
    ('career', 'Entertainment industry', 'تفریحی صنعت'),
    ('career', 'Arts administration', 'فنون کا انتظام'),
    ('career', 'Cultural initiatives', 'ثقافتی اقدامات'),
    ('career', 'Similar to Buruj 2 - agriculture, real estate, construction, earth resources', 'برج 2 کی طرح — زراعت، رئیل اسٹیٹ، تعمیرات، زمینی وسائل'),
    ('career', 'Long-term stability, tangible assets, and foundational structures align with your earth nature', 'طویل مدتی استحکام، ٹھوس اثاثے اور بنیادی ڈھانچے آپ کے زمینی مزاج سے ہم آہنگ ہیں'),
    ('career', 'Fish and fish-related products', 'مچھلی اور مچھلی سے متعلق مصنوعات'),
    ('career', 'Seafood industry, high-risk volatile ventures, speculative businesses', 'سمندری خوراک کی صنعت، زیادہ خطرے والے غیر مستحکم منصوبے، قیاس آرائی پر مبنی کاروبار'),
    ('career', 'Real Estate & Property', 'رئیل اسٹیٹ اور جائیداد'),
    ('career', 'Real estate investment', 'رئیل اسٹیٹ میں سرمایہ کاری'),
    ('career', 'Property development', 'جائیداد کی تعمیر و ترقی'),  # reviewed 23.61 (pass 8)
    ('career', 'Land management', 'زمین کا انتظام'),
    ('career', 'Architecture firms', 'آرکیٹیکچر کی کمپنیاں'),
    ('career', 'Islamic Finance & Banking', 'اسلامی مالیات اور بینکاری'),  # source fix S11 (list 2): NEW URDU DRAFT, pending review 4
    ('career', 'Islamic banking and finance', 'اسلامی بینکاری اور مالیات'),  # source fix S11 (list 2): NEW URDU DRAFT, pending review 4
    ('career', 'Investment management (Sharīʿah-compliant)', 'سرمایہ کاری کا انتظام (شرعی اصولوں کے مطابق)'),  # source fix S11 (list 2): NEW URDU DRAFT, pending review 4
    ('career', 'Financial planning', 'مالی منصوبہ بندی'),
    ('career', 'Wealth management', 'دولت کا انتظام'),
    ('career', 'Accounting services', 'اکاؤنٹنگ کی خدمات'),
    ('career', 'Takāful (Islamic cooperative insurance)', 'تکافل (باہمی تعاون پر مبنی اسلامی بیمہ)'),  # source fix S11 (list 2): NEW URDU DRAFT, pending review 4
    ('career', 'Agriculture & Natural Resources', 'زراعت اور قدرتی وسائل'),
    ('career', 'Large-scale farming', 'بڑے پیمانے کی کاشتکاری'),
    ('career', 'Agricultural land management', 'زرعی زمین کا انتظام'),
    ('career', 'Natural resource management', 'قدرتی وسائل کا انتظام'),
    ('career', 'Mining operations', 'کان کنی کے کام'),
    ('career', 'Forestry management', 'جنگلات کا انتظام'),
    ('career', 'Environmental conservation', 'ماحولیاتی تحفظ'),
    ('career', 'Infrastructure', 'بنیادی ڈھانچہ'),
    ('career', 'Civil engineering', 'سول انجینئرنگ'),
    ('career', 'Urban planning', 'شہری منصوبہ بندی'),
    ('career', 'Transportation systems', 'نقل و حمل کے نظام'),
    ('career', 'Public works', 'عوامی تعمیرات'),
    ('career', 'Municipal projects', 'بلدیاتی منصوبے'),
    ('career', 'Similar to Buruj 3 - communication, trade, fashion, fresh produce', 'برج 3 کی طرح — ابلاغ، تجارت، فیشن، تازہ پیداوار'),
    ('career', 'Communication, movement, variety, and intellectual exchange align with your airy nature', 'ابلاغ، حرکت، تنوع اور فکری تبادلہ آپ کے ہوائی مزاج سے ہم آہنگ ہیں'),
    ('career', 'Seafood industry, isolated work, repetitive tasks without variety', 'سمندری خوراک کی صنعت، تنہائی میں کیا جانے والا کام، بغیر تنوع کے دہرائے جانے والے کام'),  # reviewed 23.86 (pass 8)
    ('career', 'Media & Communications', 'ذرائع ابلاغ اور رابطہ کاری'),
    ('career', 'Journalism and reporting', 'صحافت اور رپورٹنگ'),
    ('career', 'Public relations', 'تعلقاتِ عامہ'),
    ('career', 'Broadcasting', 'نشریات'),
    ('career', 'Content creation', 'مواد کی تخلیق'),
    ('career', 'Digital marketing', 'ڈیجیٹل مارکیٹنگ'),
    ('career', 'Education & Training', 'تعلیم و تربیت'),
    ('career', 'Teaching and education', 'تدریس اور تعلیم'),
    ('career', 'Corporate training', 'کارپوریٹ تربیت'),
    ('career', 'Online course creation', 'آن لائن کورس کی تیاری'),
    ('career', 'Educational technology', 'تعلیمی ٹیکنالوجی'),
    ('career', 'Language instruction', 'زبان کی تدریس'),
    ('career', 'Academic consulting', 'تعلیمی مشاورت'),
    ('career', 'Sales & Networking', 'فروخت اور روابط'),
    ('career', 'Sales and business development', 'فروخت اور کاروباری ترقی'),
    ('career', 'Network marketing', 'نیٹ ورک مارکیٹنگ'),
    ('career', 'Brand ambassadorship', 'برانڈ ایمبیسڈر شپ'),
    ('career', 'Client relations', 'گاہکوں سے تعلقات'),
    ('career', 'Partnership development', 'شراکتوں کی ترقی'),
    ('career', 'Community management', 'کمیونٹی کا انتظام'),
    ('career', 'Writing & Publishing', 'تحریر و اشاعت'),
    ('career', 'Writing and authorship', 'تحریر اور تصنیف'),
    ('career', 'Publishing', 'اشاعت'),
    ('career', 'Copywriting', 'کاپی رائٹنگ'),
    ('career', 'Technical writing', 'تکنیکی تحریر'),
    ('career', 'Translation services', 'ترجمے کی خدمات'),
    ('career', 'Editorial work', 'ادارتی کام'),
    ('career', 'Similar to Buruj 4 - fish trading, deep work, transformative professions', 'برج 4 کی طرح — مچھلی کی تجارت، گہرا کام، تبدیلی لانے والے پیشے'),
    ('career', 'Depth, transformation, caring for others, and uncovering hidden truths align with your Scorpionic water nature', 'گہرائی، تبدیلی، دوسروں کی دل جوئی و نگہداشت، اور پوشیدہ سچائیوں کی کھوج آپ کے عقربی آبی مزاج سے ہم آہنگ ہیں'),  # reviewed 23.115 (pass 8); source fix S10 (list 2): EN re-keyed, reviewed Urdu kept
    ('career', 'Fruits and vegetables', 'پھل اور سبزیاں'),
    ('career', 'Fresh produce business, fruit wholesale, superficial work lacking depth', 'تازہ پیداوار کا کاروبار، پھلوں کی تھوک فروخت، گہرائی سے خالی سطحی کام'),
    ('career', 'Therapy & Psychological Care', 'تھراپی اور نفسیاتی نگہداشت'),  # reviewed 24.3 (pass 8); source fix S10 (list 2): EN re-keyed, reviewed Urdu kept
    ('career', 'Psychotherapy and counseling', 'نفسیاتی علاج اور مشاورت'),
    ('career', 'Trauma recovery support (trauma therapy)', 'صدمے سے بحالی میں معاونت (ٹراما تھراپی)'),  # reviewed 24.5 (pass 8); source fix S10 (list 2): EN re-keyed, reviewed Urdu kept
    ('career', 'Psychiatric services', 'سائیکاٹری (ذہنی امراض کی طب) کی خدمات'),
    ('career', 'Crisis intervention', 'بحران میں مداخلت'),
    ('career', 'Transformational coaching', 'تبدیلی لانے والی کوچنگ'),
    ('career', 'Investigation & Research', 'تفتیش اور تحقیق'),
    ('career', 'Detective work', 'سراغ رسانی کا کام'),
    ('career', 'Research and analysis', 'تحقیق اور تجزیہ'),
    ('career', 'Forensic sciences', 'فرانزک سائنسز'),
    ('career', 'Investigative journalism', 'تحقیقاتی صحافت'),
    ('career', 'Scientific research', 'سائنسی تحقیق'),
    ('career', 'Data analysis', 'ڈیٹا تجزیہ'),
    ('career', 'Finance & Resources', 'مالیات اور وسائل'),
    ('career', 'Islamic investment banking', 'اسلامی انویسٹمنٹ بینکنگ'),  # source fix S11 (list 2): NEW URDU DRAFT, pending review 4
    ('career', 'Financial analysis', 'مالیاتی تجزیہ'),
    ('career', 'Estate planning', 'وراثت اور ترکے کی منصوبہ بندی'),  # reviewed 24.19 (pass 8)
    ('career', 'Takāful underwriting', 'تکافل انڈر رائٹنگ'),  # source fix S11 (list 2): NEW URDU DRAFT, pending review 4
    ('career', 'Resource management', 'وسائل کا انتظام'),
    ('career', 'Mergers and acquisitions', 'انضمام اور حصول'),
    ('career', 'Transformative Work', 'تبدیلی لانے والا کام'),
    ('career', 'Life coaching', 'لائف کوچنگ'),
    ('career', 'Spiritual counseling', 'روحانی مشاورت'),
    ('career', 'Crisis management', 'بحران کا انتظام'),
    ('career', 'Organizational transformation', 'تنظیمی تبدیلی'),
    ('career', 'Change management consulting', 'تبدیلی کے انتظام کی مشاورت'),
    ('career', 'Hospice and end-of-life care', 'تسکینی اور آخری ایام کی نگہداشت'),
    ('career', 'Teaching, trade, long-distance commerce, knowledge-based professions', 'تدریس، تجارت، دور دراز علاقوں سے تجارت، علم پر مبنی پیشے'),  # reviewed 24.30 (pass 8)
    ('career', 'Expansion, knowledge, truth-seeking, and freedom align with Sagittarius fire', 'وسعت، علم، حق کی تلاش اور آزادی قوس کے آتشی مزاج سے ہم آہنگ ہیں'),
    ('career', 'None specified for this buruj', 'اس برج کے لیے کوئی مخصوص پابندی نہیں'),
    ('career', 'Confined spaces, restrictive roles, work without meaning or purpose', 'تنگ جگہیں، پابندی والے کردار، اور بے معنی یا بے مقصد کام'),
    ('career', 'Education & Philosophy', 'تعلیم اور فلسفہ'),
    ('career', 'Higher education teaching', 'اعلیٰ تعلیم کی تدریس'),
    ('career', 'Religious scholarship', 'دینی علم و تحقیق'),
    ('career', 'Philosophy and ethics', 'فلسفہ اور اخلاقیات'),
    ('career', 'International education', 'بین الاقوامی تعلیم'),
    ('career', 'Cultural studies', 'ثقافتی مطالعات'),
    ('career', 'Academic research', 'تعلیمی تحقیق'),
    ('career', 'Travel & International', 'سفر اور بین الاقوامی امور'),
    ('career', 'International business', 'بین الاقوامی کاروبار'),
    ('career', 'Import/export trading', 'درآمد و برآمد کی تجارت'),
    ('career', 'Travel industry', 'سفر کی صنعت'),
    ('career', 'International relations', 'بین الاقوامی تعلقات'),
    ('career', 'Cross-cultural consulting', 'بین الثقافتی مشاورت'),
    ('career', 'Global logistics', 'عالمی لاجسٹکس'),
    ('career', 'Publishing & Media', 'اشاعت اور ذرائع ابلاغ'),
    ('career', 'Publishing houses', 'اشاعتی ادارے'),
    ('career', 'Book writing and authorship', 'کتابوں کی تحریر اور تصنیف'),
    ('career', 'Educational media', 'تعلیمی میڈیا'),
    ('career', 'Documentary production', 'دستاویزی فلموں کی تیاری'),
    ('career', 'International journalism', 'بین الاقوامی صحافت'),
    ('career', 'Knowledge platforms', 'علمی پلیٹ فارم'),
    ('career', 'Similar to other earth buruj - agriculture, construction, earth resources, property', 'دیگر زمینی بروج کی طرح — زراعت، تعمیرات، زمینی وسائل، جائیداد'),
    ('career', 'Structure, discipline, long-term achievement, and mastery align with Capricorn earth', 'نظم و ترتیب، نظم و ضبط، طویل مدتی کامیابی اور مہارت جدی کے زمینی مزاج سے ہم آہنگ ہیں'),  # reviewed 24.55 (pass 8)
    ('career', 'Seafood industry, unstable ventures, roles without clear authority', 'سمندری خوراک کی صنعت، غیر مستحکم منصوبے، واضح اختیار کے بغیر کردار'),
    ('career', 'Corporate executive leadership', 'کارپوریٹ اعلیٰ انتظامی قیادت'),
    ('career', 'Government positions', 'حکومتی عہدے'),
    ('career', 'Military leadership', 'عسکری قیادت'),
    ('career', 'Institutional management', 'ادارہ جاتی انتظام'),
    ('career', 'Long-term strategic planning', 'طویل مدتی حکمتِ عملی کی منصوبہ بندی'),
    ('career', 'Organizational development', 'تنظیمی ترقی'),
    ('career', 'Traditional Professions', 'روایتی پیشے'),
    ('career', 'Law and judiciary', 'قانون اور عدلیہ'),
    ('career', 'Accounting and auditing', 'اکاؤنٹنگ اور آڈیٹنگ'),
    ('career', 'Engineering', 'انجینئرنگ'),
    ('career', 'Architecture', 'آرکیٹیکچر'),
    ('career', 'Medicine (surgery)', 'طب (سرجری)'),
    ('career', 'Academic administration', 'تعلیمی انتظامیہ'),
    ('career', 'Large-scale construction', 'بڑے پیمانے کی تعمیرات'),
    ('career', 'Infrastructure projects', 'بنیادی ڈھانچے کے منصوبے'),
    ('career', 'Property investment', 'جائیداد میں سرمایہ کاری'),
    ('career', 'Similar to other air buruj - communication, trade, community service', 'دیگر ہوائی بروج کی طرح — ابلاغ، تجارت، کمیونٹی کی خدمت'),
    ('career', 'Innovation, community service, future vision, and progressive thinking align with Aquarius air', 'جدت، کمیونٹی کی خدمت، دور اندیشی اور ترقی پسند سوچ دلو کے ہوائی مزاج سے ہم آہنگ ہیں'),  # reviewed 24.74 (pass 8)
    ('career', 'Seafood industry, traditional rigid structures, roles opposing innovation', 'سمندری خوراک کی صنعت، روایتی سخت ڈھانچے، جدت کی مخالفت کرنے والے کردار'),
    ('career', 'Tech innovation', 'ٹیکنالوجی میں جدت'),
    ('career', 'AI and machine learning', 'مصنوعی ذہانت اور مشین لرننگ'),
    ('career', 'Blockchain and digital assets (Sharīʿah-compliant)', 'بلاک چین اور ڈیجیٹل اثاثے (شرعی اصولوں کے مطابق)'),  # source fix S11 (list 2): NEW URDU DRAFT, pending review 4
    ('career', 'Space technology', 'خلائی ٹیکنالوجی'),
    ('career', 'Green technology', 'سبز ٹیکنالوجی'),
    ('career', 'Humanitarian & Social', 'انسانی خدمت اور سماجی شعبہ'),
    ('career', 'Human rights advocacy', 'انسانی حقوق کی وکالت'),
    ('career', 'International development', 'بین الاقوامی ترقی'),
    ('career', 'Social innovation', 'سماجی جدت'),
    ('career', 'Science & Research', 'سائنس اور تحقیق'),
    ('career', 'Environmental science', 'ماحولیاتی سائنس'),
    ('career', 'Renewable energy', 'قابلِ تجدید توانائی'),
    ('career', 'Astronomy and space', 'فلکیات اور خلا'),
    ('career', 'Future studies', 'مستقبلیات (فیوچر اسٹڈیز)'),  # reviewed 24.89 (pass 8)
    ('career', 'Similar to other water buruj - caring for others, fish trading, spiritual service', 'دیگر آبی بروج کی طرح — نگہداشت و تیمارداری، مچھلی کی تجارت، روحانی خدمت'),  # reviewed 24.90 (pass 8); source fix S10 (list 2): EN re-keyed, reviewed Urdu kept
    ('career', 'Compassion, service, spiritual connection, and caring for others align with Pisces water', 'ہمدردی، خدمت، روحانی تعلق اور دوسروں کی دل جوئی و نگہداشت حوت کے آبی مزاج سے ہم آہنگ ہیں'),  # reviewed 24.91 (pass 8); source fix S10 (list 2): EN re-keyed, reviewed Urdu kept
    ('career', 'Fresh produce business, aggressive sales roles, competitive environments lacking compassion', 'تازہ پیداوار کا کاروبار، جارحانہ فروخت کے کردار، اور ہمدردی سے خالی مسابقتی ماحول'),
    ('career', 'Healthcare & Caring Professions', 'صحت کی دیکھ بھال اور نگہداشت کے پیشے'),  # source fix S10 (list 2): NEW URDU DRAFT, pending review 4
    ('career', 'Nursing and caregiving', 'نرسنگ اور تیمارداری'),
    ('career', 'Holistic wellness (not a substitute for medical care)', 'ہمہ جہت فلاحِ صحت (ہولسٹک ویلنس؛ طبی علاج کا بدل نہیں)'),  # reviewed 24.94 (pass 8); source fix S10 (list 2): EN re-keyed, reviewed Urdu kept
    ('career', 'Mental health counseling', 'ذہنی صحت کی مشاورت'),
    ('career', 'Hospice care', 'تسکینی نگہداشت'),
    ('career', 'Compassionate medicine', 'ہمدردی پر مبنی طبی خدمت'),  # reviewed 24.98 (pass 8)
    ('career', 'Spiritual & Religious', 'روحانی اور دینی شعبہ'),
    ('career', 'Chaplaincy', 'اداروں اور ہسپتالوں میں روحانی معاونت (چیپلنسی)'),  # reviewed 24.100 (pass 8)
    ('career', 'Meditation teaching', 'مراقبہ کی تدریس'),
    ('career', 'Islamic education', 'اسلامی تعلیم'),
    ('career', 'Interfaith work', 'بین المذاہب کام'),
    ('career', 'Arts & Creativity', 'فنون اور تخلیقی صلاحیت'),
    ('career', 'Music and poetry', 'موسیقی اور شاعری'),
    ('career', 'Health-care and caring professions', 'نگہداشت اور معالجے کے پیشے (باقاعدہ تربیت کے ساتھ)'),  # reviewed 24.105 (pass 8); source fix S10 (list 2): EN re-keyed, reviewed Urdu kept
    ('career', 'Dance and movement therapy', 'رقص اور حرکت کی تھراپی'),
    ('career', 'Creative arts therapy', 'آرٹ تھراپی'),  # reviewed 24.107 (pass 8)
    ('career', 'Photography', 'فوٹوگرافی'),
    ('career', 'Spiritual art', 'روحانی فن'),
    ('career', 'Service & Charity', 'خدمت اور خیرات'),
    ('career', 'Charity work', 'خیراتی کام'),
    ('career', 'Humanitarian aid', 'انسانی امداد'),
    ('career', 'Refugee support', 'مہاجرین کی معاونت'),
    ('career', 'Animal welfare', 'جانوروں کی بہبود'),
    ('career', 'Environmental protection', 'ماحول کا تحفظ'),
    ('career', 'Social services', 'سماجی خدمات'),
    ('potd', "The Sun's day is best for bold, visible action. Begin projects you want recognized. Seek blessings from those in authority. Make decisions that require confidence and leadership. Avoid hiding or working in secrecy — the Sun illuminates.", 'روایتی علمِ نجوم میں اتوار کو شمس سے منسوب کیا جاتا ہے، اور اسے جرأت مندانہ اور نمایاں اقدام کے لیے موزوں دن سمجھا جاتا ہے۔ جن منصوبوں کی پہچان چاہتے ہوں انہیں شروع کریں۔ بااختیار افراد کی تائید اور سرپرستی حاصل کرنے کی کوشش کریں۔ ایسے فیصلے کریں جن میں اعتماد اور قیادت درکار ہو۔ چھپنے یا پوشیدگی میں کام کرنے سے بچیں — شمس روشنی کی علامت ہے۔'),
    ('potd', "Monday is ideal for matters of the home, family, and emotional wellbeing. Engage in travel or movement — the Moon governs journeys. Practice emotional healing, prayer, and du'ā'. Reflect on your inner world. Avoid confrontation; the Moon's waters prefer calm.", 'روایتی علمِ نجوم میں پیر کو قمر سے منسوب کیا جاتا ہے، اور یہ گھر، خاندان اور جذباتی بہبود کے معاملات کے لیے موزوں دن سمجھا جاتا ہے۔ سفر یا نقل و حرکت اختیار کریں — روایت میں قمر کو اسفار سے جوڑا جاتا ہے۔ جذباتی سکون اور بہتری کے لیے نماز اور دعا کا اہتمام کریں۔ اپنے باطن پر غور کریں۔ ٹکراؤ سے بچیں؛ اس دن سکون اور تحمل کو ترجیح دیں۔'),
    ('potd', 'Tuesday strengthens courage and decisive action. Tackle difficult tasks requiring force or conviction. Physical training, surgery if medically required, and overcoming fears align with Mars. Channel Mars energy into productive determination — not aggression. Start with Bismillah and firm niyyah.', 'روایتی علمِ نجوم میں منگل کو مریخ سے منسوب کیا جاتا ہے، اور اسے ہمت اور فیصلہ کن اقدام کا دن سمجھا جاتا ہے۔ قوت یا پختہ ارادے والے مشکل کام نمٹائیں۔ جسمانی تربیت اور خوف پر قابو پانا اسی نسبت سے مناسب سمجھا جاتا ہے۔ سرجری کا فیصلہ صرف طبی ضرورت اور ڈاکٹر کے مشورے پر ہونا چاہیے، دن یا سیارے کی نسبت پر نہیں۔ ہمت اور قوت کو جارحیت نہیں بلکہ بامقصد عزم میں ڈھالیں۔ بسم اللہ اور پختہ نیت سے آغاز کریں۔'),
    ('potd', 'Wednesday is the day of the scholar and the merchant. Ideal for studying, writing, signing contracts, teaching, and all forms of communication. Engage the mind — read, research, debate. Mercury rewards precision and clarity. This is also an excellent day for Zikr that involves recitation (tilāwah).', 'بدھ عالم اور تاجر کا دن ہے، اور روایت میں اسے عطارد سے منسوب کیا جاتا ہے۔ یہ دن مطالعہ، تحریر، معاہدوں پر دستخط، تدریس اور ہر طرح کی گفتگو کے لیے موزوں سمجھا جاتا ہے۔ ذہن کو مشغول رکھیں — پڑھیں، تحقیق کریں، مباحثہ کریں۔ اس دن درستی اور وضاحت کو اپنا شعار بنائیں۔ روایت میں یہ دن تلاوت پر مشتمل ذکر کے لیے بھی موزوں سمجھا جاتا ہے۔'),  # reviewed 17.31 (pass 6)
    ('potd', "In tradition, Thursday is an especially blessed day for spiritual elevation, wealth-seeking, and expansion. Make du'ā' for rizq (sustenance). Begin long-term projects. Seek knowledge, visit scholars, and perform generous acts of sadaqah. The night between Thursday and Friday is especially blessed — use it for extra worship.", 'روایت میں جمعرات روحانی بلندی، رزق کی طلب اور وسعت کے لیے خاص طور پر بابرکت سمجھی جاتی ہے۔ رزق کے لیے دعا کریں۔ طویل مدتی منصوبے شروع کریں۔ علم حاصل کریں، اہلِ علم سے ملیں، اور فراخ دلی سے صدقہ کریں۔ جمعرات اور جمعہ کی درمیانی رات (شبِ جمعہ) خاص طور پر بابرکت سمجھی جاتی ہے — اسے اضافی عبادت میں گزاریں۔'),  # reviewed 17.32 (pass 6); source fix S2 (list 2): EN re-keyed, reviewed Urdu kept
    ('potd', "Friday is the most sacred day in Islam (Yawm al-Jum'ah). Venus and Friday align in beauty, community, and gratitude. Attend Jumu'ah, send abundant Ṣalawāt upon the Prophet ﷺ, and perform acts of beauty (charity, kind words, reconciliation). It is a day for love, forgiveness, and peace.", 'جمعہ اسلام میں سب سے افضل دن ہے (یومُ الجمعہ)۔ روایتی علمِ نجوم اسے زہرہ سے منسوب کرتا ہے، جو حسن، اجتماع اور شکرگزاری کی علامت ہے۔ جمعہ کی نماز میں شریک ہوں، نبی کریم ﷺ پر کثرت سے درود شریف پڑھیں، اور حسنِ عمل (صدقہ، نرم گفتگو، صلح) اختیار کریں۔ یہ محبت، معافی اور سکون کا دن ہے۔'),
    ('potd', 'Saturday is governed by the slowest and most disciplined of the classical planets. It is a day for long-term commitments, serious study, and patient effort. Engage in property matters, legal affairs, and building lasting structures. Avoid rushing — Saturn rewards consistent, sustained effort over time.', 'روایتی علمِ نجوم میں ہفتے کو زحل سے منسوب کیا جاتا ہے، جو کلاسیکی سیاروں میں سب سے سست اور سب سے منظم ہے۔ یہ طویل مدتی وعدوں، سنجیدہ مطالعے اور صبر و استقامت والی محنت کا دن ہے۔ جائیداد، قانونی معاملات اور دیرپا اور مضبوط ڈھانچے تعمیر کرنے پر توجہ دیں۔ جلد بازی سے بچیں — اس دن مسلسل اور دیرپا محنت کو ترجیح دیں۔'),
    ('rules', "How scoring works: each rule adds or subtracts points; the total is scaled to a 0–100 score against that election type's own maximum achievable points, so the tier bands (Mumtāz, Jayyid, Maqbūl, Ḍaʿīf, Ijtanib) mean the same thing across marriage, travel, and any future election type.", 'اسکور کیسے شمار ہوتا ہے: ہر اصول کے مطابق کچھ نمبر جمع یا منہا کیے جاتے ہیں۔ پھر حاصل شدہ مجموعے کو اسی قسم کے انتخاب کے زیادہ سے زیادہ ممکنہ نمبروں کے لحاظ سے 0–100 کے پیمانے پر تبدیل کیا جاتا ہے، تاکہ درجوں (ممتاز، جیّد، مقبول، ضعیف، اجتناب) کا مطلب شادی، سفر اور آئندہ ہر قسم کے انتخاب میں ایک ہی رہے۔'),
]
