# Language review: asrar.app snippet/CTR titles (Arabic & Urdu)

**Branch:** `seo/snippet-ctr-titles` (not merged)
**Scope:** New or changed Arabic and Urdu strings only. French title/meta changes are listed at the end for context and do not need Language Reviewer.
**Rules followed:** reflection, not prediction; no geomancy; never عنصري/عنصرية/عناصري.
**Status:** Language Reviewer corrections from `/workspace/snippet-ctr-corrections.md` (24 Nov 2026) have been applied. All 8 CORRECTION items were applied exactly. The 8 PASS strings were left unchanged. The 5 decision items were not applied; existing conservative wording was kept («اليوم المبارك», «الكوكب الحاكم», «امی», «أداة تقليدية», and the quoted search phrase in FAQ Q2).

SERP titles below are the visible string after the site suffix (` | Asrār` on Arabic landing pages and French pages; ` | أسرار` on `/ar/compatibility`; ` | اسرار` on `/ur` pages). **Old** is the pre-PR live wording. **Draft** (where shown) is the first PR wording. **New** is the wording now on the branch.

---

## 1. `/ar/name-and-mother-burj` — title and meta

**File:** `app/(ar)/ar/name-and-mother-burj/page.tsx`

### Title
- **Old:** برجك من اسمك واسم أمك: حاسبة البرج بحساب الجمل
- **Draft:** البرج باسم الأم من اسمك واسم أمك: حاسبة مجانية
- **New (Language Reviewer):** البرج باسم الأم: حاسبة من اسمك واسم أمك
- **Visible with suffix:** البرج باسم الأم: حاسبة من اسمك واسم أمك | Asrār (47 characters)

### Meta description (also `og:description`)
- **Old:** اعرف برجك (طبعك) من قيمة اسمك واسم أمك بحساب الجمل: العنصر والطبع واليوم المبارك والذكر والصدقة. حاسبة مجانية للتأمّل، لا للتنبّؤ.
- **Draft:** اعرف برجك باسم الأم من اسمك واسم أمك في حاسبة مجانية بحساب الجمل: الطبع واليوم المبارك والذكر. للتأمّل، لا للتنبّؤ؛ ولا يعلم الغيب إلا الله.
- **New (Language Reviewer):** اعرف برجك (طبعك) من اسمك واسم أمك في حاسبة مجانية بحساب الجُمَّل: الطبع واليوم المبارك والذكر. للتأمّل، لا للتنبّؤ؛ ولا يعلم الغيب إلا الله.

---

## 2. `/ar/name-and-mother-burj` — new «الطالع» FAQ (3 Q&As)

Added to the existing `FAQS` array. The page already emits one FAQPage JSON-LD from that array (`ArabicFaq`); no second schema was added.

These FAQ items are new (no pre-PR value).

### Q1
- **New (q, PASS):** ما المقصود بحساب الطالع من الاسم واسم الأم؟
- **Draft (a):** في أكثر الاستعلامات يُراد بـ«حساب الطالع من الاسم واسم الأم» حساب برج الاسم بحساب الجمل: تُجمع قيمة اسمك وقيمة اسم أمك ويُقسم المجموع على 12، والباقي هو البرج. وهذه الصفحة تجري هذا الحساب مجانًا. وهو تأمّل في الأسماء والطباع، وليس طالعًا يُستخرج من ساعة الولادة، ولا تنبّؤًا بالمستقبل؛ ولا يعلم الغيب إلا الله.
- **New (a, Language Reviewer):** يُقصد بـ«حساب الطالع من الاسم واسم الأم» هنا حساب برج الاسم بحساب الجُمَّل: تُجمع قيمة اسمك وقيمة اسم أمك ويُقسم المجموع على 12، والباقي هو البرج. وهذه الصفحة تجري هذا الحساب مجانًا. وهو تأمّل في الأسماء والطباع، وليس قراءةً للطالع، ولا طالعًا يُستخرج من ساعة الولادة، ولا تنبّؤًا بالمستقبل؛ ولا يعلم الغيب إلا الله.

### Q2
- **Draft (q):** كيف أستخدم حاسبة البرج الطالع من اسم الأم؟
- **New (q, Language Reviewer):** كيف أستخدم حاسبة برج الاسم إذا بحثت عن «البرج الطالع من اسم الأم»؟
- **Draft (a):** اكتب اسمك واسم أمك بالحروف العربية في الحاسبة أعلاه، فتظهر نتيجة برج الاسم (وقد يسمّيه بعضهم الطالع) مع العنصر والطبع واليوم المبارك والذكر. اقرأ النتيجة للتأمّل والتعلّم، لا حكمًا على الغيب ولا بديلاً عن صلاة الاستخارة.
- **New (a, Language Reviewer):** اكتب اسمك واسم أمك بالحروف العربية في الحاسبة أعلاه، فتظهر نتيجة برج الاسم (وقد يسمّيه بعضهم الطالع) مع العنصر والطبع واليوم المبارك والذكر. اقرأ النتيجة للتأمّل والتعلّم، لا حكمًا على الغيب ولا بديلاً عن صلاة الاستخارة؛ ولا يعلم الغيب إلا الله.

### Q3
- **New (q, PASS):** هل برج الاسم أو الطالع من الاسمين يخبر عن المستقبل؟
- **New (a, PASS):** لا. برج الاسم المستخرج من اسمك واسم أمك أداة تقليدية للتأمّل في الطباع، وليس وسيلة لمعرفة الغيب أو توقّع الأحداث. صلِّ الاستخارة وتوكّل على الله؛ ولا يعلم الغيب إلا الله.

Intent: explain that searches for «حساب الطالع من الاسم واسم الام» and «حاسبة البرج الطالع من اسم الام» are answered as the same name-based burj calculation, as reflection, not a natal ascendant or a forecast. The FAQ question no longer names the tool «حاسبة البرج الطالع».

---

## 3. `/ar/compatibility` — title and meta

**File:** `src/lib/arMetadata.ts` (`AR_META['/compatibility']`). Also used for `og:title` / `og:description` / Twitter (absolute title includes ` | أسرار`) and the WebApplication schema description on that page.

### Title
- **Old:** حساب التوافق بالأسماء: توافق اسمين بالجمل للزواج
- **Draft:** توافق الأسماء للزواج: حساب الجمل للزواج
- **New (Language Reviewer):** توافق الأسماء للزواج بحساب الجُمَّل: حاسبة مجانية
- **Visible with suffix:** توافق الأسماء للزواج بحساب الجُمَّل: حاسبة مجانية | أسرار (57 characters, including tashkeel)

### Meta description
- **Old:** احسب التوافق بين اسمين بحساب الجمل (الأبجد) للزواج أو الصداقة أو العمل بطريقة «صلة الأرواح». للتأمّل لا للحكم؛ والاختيار بالدين والخُلق والاستخارة.
- **Draft:** توافق الأسماء للزواج وحساب الجمل للزواج بين اسمين في حاسبة مجانية. للتأمّل مع الاستخارة ومشورة الأهل، لا حكمًا على الزواج؛ ولا يعلم الغيب إلا الله.
- **New (Language Reviewer):** احسب توافق اسمين للزواج بحساب الجُمَّل («صلة الأرواح»). للتأمّل لا للحكم، مع الاستخارة ومشورة الأهل؛ والاختيار بالدين والخُلق. ولا يعلم الغيب إلا الله.

---

## 4. `/ar/planetary-hours` — title and meta

**File:** `app/(ar)/ar/planetary-hours/page.tsx`

### Title (PASS)
- **Old:** ساعات الكواكب اليوم: الساعات الكلدانية في علم النجوم
- **New:** الساعة الكوكبية الآن: ساعات الكواكب اليوم
- **Visible with suffix:** الساعة الكوكبية الآن: ساعات الكواكب اليوم | Asrār (49 characters)

### Meta description (PASS)
- **Old:** اعرف الكوكب الحاكم للساعة الحالية في موقعك، ومواقيت ساعات النهار والليل الاثنتي عشرة وفق الترتيب الكلداني، وما يناسب كل كوكب من الأعمال. للتأمّل وتنظيم الوقت.
- **New:** حاسبة مجانية للساعة الكوكبية الآن وساعات الكواكب اليوم في موقعك: الكوكب الحاكم للساعة الحالية ومواقيت النهار والليل. للتأمّل وتنظيم الوقت، لا للتنبّؤ.

---

## 5. `/ur/name-and-mother-burj` — title and meta

**File:** `src/lib/urMetadata.ts` (`UR_META['/name-and-mother-burj']`)

### Title (PASS)
- **Old:** نام اور امی کے نام سے برج معلوم کریں (ابجد)
- **New:** نام اور امی کے نام سے برج معلوم کریں — مفت کیلکولیٹر
- **Visible with suffix:** نام اور امی کے نام سے برج معلوم کریں — مفت کیلکولیٹر | اسرار (60 characters)

Kept «امی» to match the previously reviewed title wording (decision item, not changed).

### Meta description
- **Old:** اپنے اور امی کے نام کے ابجد اعداد سے برج معلوم کریں: عنصر، مزاج، روایتی دن، ذکر اور صدقہ۔ مفت، غور و فکر کے لیے، پیش گوئی نہیں۔
- **Draft:** مفت کیلکولیٹر: اپنے نام اور امی کے نام کے ابجد اعداد سے برج، عنصر، مزاج، روایتی دن اور ذکر معلوم کریں۔ غور و فکر کے لیے، پیش گوئی نہیں۔
- **New (Language Reviewer):** اپنے نام اور امی کے نام کے ابجد اعداد سے برج، عنصر، مزاج، روایتی دن اور ذکر معلوم کریں۔ غور و فکر کے لیے، پیش گوئی نہیں؛ غیب کا علم صرف اللہ کو ہے۔

---

## 6. `/ur/abjad` — title and meta

**File:** `src/lib/urMetadata.ts` (`UR_META['/abjad']`)

### Title (PASS)
- **Old:** ابجد کیلکولیٹر: نام کے اعداد معلوم کریں
- **New:** ابجد کیلکولیٹر: حسابِ جمل سے نام کے اعداد
- **Visible with suffix:** ابجد کیلکولیٹر: حسابِ جمل سے نام کے اعداد | اسرار (49 characters)

### Meta description (PASS)
- **Old:** کسی بھی نام یا عربی عبارت کے ابجد اعداد (حسابِ جمل) مشرقی یا مغربی ترتیب میں، ہر حرف کی قیمت اور عناصر کے توازن کے ساتھ معلوم کریں۔
- **New:** ابجد کیلکولیٹر سے کسی بھی نام یا عبارت کے حسابِ جمل (مشرقی یا مغربی ترتیب) اور ہر حرف کی قیمت معلوم کریں۔ سیکھنے اور غور و فکر کے لیے، پیش گوئی نہیں۔

---

## French changes (context only, no Language Reviewer required)

- `/fr/planetary-hours` title: Guide des Heures Planétaires → Heure planétaire aujourd'hui : heures planétaires du jour (visible: … | Asrār)
- `/fr/planetary-hours` meta: shortened to a now/today calculator snippet, “Pour la réflexion, non la prédiction.”
- `/fr/name-and-mother-burj` title: Votre burj avec votre nom et celui de votre mère → Trouver son burj avec son prénom et celui de sa mère
- `/fr/name-and-mother-burj` meta: matching free-calculator + reflection framing
- The Arabic burj page’s French related-link label was updated to the same new French title.
