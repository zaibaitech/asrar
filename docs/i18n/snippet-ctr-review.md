# Language review: asrar.app snippet/CTR titles (Arabic & Urdu)

**Branch:** `seo/snippet-ctr-titles` (not merged)
**Scope:** New or changed Arabic and Urdu strings only. French title/meta changes are listed at the end for context and do not need Language Reviewer.
**Rules followed:** reflection, not prediction; no geomancy; never عنصري/عنصرية/عناصري.
**Please correct** any wording that is unnatural, theologically off, or too close to fortune-telling. Return a correction file; strings must be reviewed before going live.

SERP titles below are the visible string after the site suffix (` | Asrār` on Arabic landing pages and French pages; ` | أسرار` on `/ar/compatibility`; ` | اسرار` on `/ur` pages).

---

## 1. `/ar/name-and-mother-burj` — title and meta

**File:** `app/(ar)/ar/name-and-mother-burj/page.tsx`

### Title
- **Old:** برجك من اسمك واسم أمك: حاسبة البرج بحساب الجمل
- **New:** البرج باسم الأم من اسمك واسم أمك: حاسبة مجانية
- **Visible with suffix:** البرج باسم الأم من اسمك واسم أمك: حاسبة مجانية | Asrār (54 characters)

### Meta description (also `og:description`)
- **Old:** اعرف برجك (طبعك) من قيمة اسمك واسم أمك بحساب الجمل: العنصر والطبع واليوم المبارك والذكر والصدقة. حاسبة مجانية للتأمّل، لا للتنبّؤ.
- **New:** اعرف برجك باسم الأم من اسمك واسم أمك في حاسبة مجانية بحساب الجمل: الطبع واليوم المبارك والذكر. للتأمّل، لا للتنبّؤ؛ ولا يعلم الغيب إلا الله.

---

## 2. `/ar/name-and-mother-burj` — new «الطالع» FAQ (3 Q&As)

Added to the existing `FAQS` array. The page already emits one FAQPage JSON-LD from that array (`ArabicFaq`); no second schema was added.

These are **new** strings (no previous value).

### Q1
- **Old:** —
- **New (q):** ما المقصود بحساب الطالع من الاسم واسم الأم؟
- **New (a):** في أكثر الاستعلامات يُراد بـ«حساب الطالع من الاسم واسم الأم» حساب برج الاسم بحساب الجمل: تُجمع قيمة اسمك وقيمة اسم أمك ويُقسم المجموع على 12، والباقي هو البرج. وهذه الصفحة تجري هذا الحساب مجانًا. وهو تأمّل في الأسماء والطباع، وليس طالعًا يُستخرج من ساعة الولادة، ولا تنبّؤًا بالمستقبل؛ ولا يعلم الغيب إلا الله.

### Q2
- **Old:** —
- **New (q):** كيف أستخدم حاسبة البرج الطالع من اسم الأم؟
- **New (a):** اكتب اسمك واسم أمك بالحروف العربية في الحاسبة أعلاه، فتظهر نتيجة برج الاسم (وقد يسمّيه بعضهم الطالع) مع العنصر والطبع واليوم المبارك والذكر. اقرأ النتيجة للتأمّل والتعلّم، لا حكمًا على الغيب ولا بديلاً عن صلاة الاستخارة.

### Q3
- **Old:** —
- **New (q):** هل برج الاسم أو الطالع من الاسمين يخبر عن المستقبل؟
- **New (a):** لا. برج الاسم المستخرج من اسمك واسم أمك أداة تقليدية للتأمّل في الطباع، وليس وسيلة لمعرفة الغيب أو توقّع الأحداث. صلِّ الاستخارة وتوكّل على الله؛ ولا يعلم الغيب إلا الله.

Intent: explain that popular searches for «حساب الطالع من الاسم واسم الام» and «حاسبة البرج الطالع من اسم الام» refer to the same name-based burj calculation, as reflection, not a natal ascendant or a forecast.

---

## 3. `/ar/compatibility` — title and meta

**File:** `src/lib/arMetadata.ts` (`AR_META['/compatibility']`). Also used for `og:title` / `og:description` (absolute title includes ` | أسرار`) and the WebApplication schema description on that page.

### Title
- **Old:** حساب التوافق بالأسماء: توافق اسمين بالجمل للزواج
- **New:** توافق الأسماء للزواج: حساب الجمل للزواج
- **Visible with suffix:** توافق الأسماء للزواج: حساب الجمل للزواج | أسرار (47 characters)

### Meta description
- **Old:** احسب التوافق بين اسمين بحساب الجمل (الأبجد) للزواج أو الصداقة أو العمل بطريقة «صلة الأرواح». للتأمّل لا للحكم؛ والاختيار بالدين والخُلق والاستخارة.
- **New:** توافق الأسماء للزواج وحساب الجمل للزواج بين اسمين في حاسبة مجانية. للتأمّل مع الاستخارة ومشورة الأهل، لا حكمًا على الزواج؛ ولا يعلم الغيب إلا الله.

---

## 4. `/ar/planetary-hours` — title and meta

**File:** `app/(ar)/ar/planetary-hours/page.tsx`

### Title
- **Old:** ساعات الكواكب اليوم: الساعات الكلدانية في علم النجوم
- **New:** الساعة الكوكبية الآن: ساعات الكواكب اليوم
- **Visible with suffix:** الساعة الكوكبية الآن: ساعات الكواكب اليوم | Asrār (49 characters)

### Meta description
- **Old:** اعرف الكوكب الحاكم للساعة الحالية في موقعك، ومواقيت ساعات النهار والليل الاثنتي عشرة وفق الترتيب الكلداني، وما يناسب كل كوكب من الأعمال. للتأمّل وتنظيم الوقت.
- **New:** حاسبة مجانية للساعة الكوكبية الآن وساعات الكواكب اليوم في موقعك: الكوكب الحاكم للساعة الحالية ومواقيت النهار والليل. للتأمّل وتنظيم الوقت، لا للتنبّؤ.

---

## 5. `/ur/name-and-mother-burj` — title and meta

**File:** `src/lib/urMetadata.ts` (`UR_META['/name-and-mother-burj']`)

### Title
- **Old:** نام اور امی کے نام سے برج معلوم کریں (ابجد)
- **New:** نام اور امی کے نام سے برج معلوم کریں — مفت کیلکولیٹر
- **Visible with suffix:** نام اور امی کے نام سے برج معلوم کریں — مفت کیلکولیٹر | اسرار (60 characters)

Kept «امی» to match the previously reviewed title wording.

### Meta description
- **Old:** اپنے اور امی کے نام کے ابجد اعداد سے برج معلوم کریں: عنصر، مزاج، روایتی دن، ذکر اور صدقہ۔ مفت، غور و فکر کے لیے، پیش گوئی نہیں۔
- **New:** مفت کیلکولیٹر: اپنے نام اور امی کے نام کے ابجد اعداد سے برج، عنصر، مزاج، روایتی دن اور ذکر معلوم کریں۔ غور و فکر کے لیے، پیش گوئی نہیں۔

---

## 6. `/ur/abjad` — title and meta

**File:** `src/lib/urMetadata.ts` (`UR_META['/abjad']`)

### Title
- **Old:** ابجد کیلکولیٹر: نام کے اعداد معلوم کریں
- **New:** ابجد کیلکولیٹر: حسابِ جمل سے نام کے اعداد
- **Visible with suffix:** ابجد کیلکولیٹر: حسابِ جمل سے نام کے اعداد | اسرار (49 characters)

### Meta description
- **Old:** کسی بھی نام یا عربی عبارت کے ابجد اعداد (حسابِ جمل) مشرقی یا مغربی ترتیب میں، ہر حرف کی قیمت اور عناصر کے توازن کے ساتھ معلوم کریں۔
- **New:** ابجد کیلکولیٹر سے کسی بھی نام یا عبارت کے حسابِ جمل (مشرقی یا مغربی ترتیب) اور ہر حرف کی قیمت معلوم کریں۔ سیکھنے اور غور و فکر کے لیے، پیش گوئی نہیں۔

---

## French changes (context only, no Language Reviewer required)

- `/fr/planetary-hours` title: Guide des Heures Planétaires → Heure planétaire aujourd'hui : heures planétaires du jour (visible: … | Asrār)
- `/fr/planetary-hours` meta: shortened to a now/today calculator snippet, “Pour la réflexion, non la prédiction.”
- `/fr/name-and-mother-burj` title: Votre burj avec votre nom et celui de votre mère → Trouver son burj avec son prénom et celui de sa mère
- `/fr/name-and-mother-burj` meta: matching free-calculator + reflection framing
- The Arabic burj page’s French related-link label was updated to the same new French title.

