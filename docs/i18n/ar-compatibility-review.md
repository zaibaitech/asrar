# /ar/compatibility: Arabic strings for Language Reviewer

Branch `feat/ar-compatibility-arabic`. **Every string in sections 1–3 is a draft, not machine-final.** Section 4 is existing Arabic that is now rendered differently; it's listed for completeness.

Divine Names in the guidance sentences are inserted from the divine-names data (`divineName.arabic`), never typed by hand. No Qur'an text was added.


## 1. New Arabic drafts (written for this PR)

| key | English | Arabic draft |
|---|---|---|
| `divineNameCompatibility.CATEGORY_LABEL.clarity` | clarity | الوضوح |
| `divineNameCompatibility.CATEGORY_LABEL.patience` | patience | الصبر |
| `divineNameCompatibility.CATEGORY_LABEL.provision` | provision | الرزق |
| `divineNameCompatibility.CATEGORY_LABEL.healing` | healing | الشفاء |
| `divineNameCompatibility.CATEGORY_LABEL.protection` | protection | الحماية |
| `divineNameCompatibility.CATEGORY_LABEL.guidance` | guidance | الهداية |
| `divineNameCompatibility.CATEGORY_LABEL.strength` | strength | القوة |
| `divineNameCompatibility.CATEGORY_LABEL.peace` | peace | السكينة |
| `divineNameCompatibility.CATEGORY_LABEL.knowledge` | knowledge | العلم |
| `divineNameCompatibility.CATEGORY_LABEL.forgiveness` | forgiveness | المغفرة |
| `buildGuidanceTextAr.optimal` | {Name} is classically invoked for {category} — a direct match for this intention. | يُدعى باسم {Name} تقليديًا في باب {category}، فهو مطابق مباشرةً لهذه النية. |
| `buildGuidanceTextAr.suitable` | {Name} is not classically tied to {category} directly, but its meaning closely relates to it. | لا يرتبط اسم {Name} تقليديًا بباب {category} ارتباطًا مباشرًا، لكن معناه قريب منه. |
| `buildGuidanceTextAr.not-recommended` | {Name}'s classical function doesn't align closely with {category}. Consider one of the alternatives below. | لا تتوافق الوظيفة التقليدية لاسم {Name} توافقًا وثيقًا مع باب {category}. انظر أحد البدائل أدناه. |
| `buildGuidanceTextAr.neutral` | {Name} has no strong classical association with {category}, and no closer alternative was found. | ليس لاسم {Name} ارتباط تقليدي قوي بباب {category}، ولم يُعثر على بديل أقرب. |
| `ar-ui.json: Heavy trials; wellbeing and stress` | Heavy trials; wellbeing and stress | ابتلاءات ثقيلة؛ ضغوط على العافية |
| `ar-ui.json: Search placeholder` | Search: Ar-Raḥmān, Light, healing... | ابحث: الرَّحْمَن، النور، الشفاء... (the Name is copied from divine-names #1) |
| `ar-ui.json pattern: ^Soul connection result: (\d) of 9$ (aria-label)` | Soul connection result: N of 9 | نتيجة صلة الأرواح: N من 9 |
| `ar-ui.json pattern: ^(\d+) of 99 Names resonate strongly with (.+)$` | N of 99 Names resonate strongly with {name} | N من الأسماء الحسنى الـ99 تتناغم بقوة مع {name} |
| `ar-ui.json pattern: ^(\d+) optimal Names? found out of 99$` | N optimal Name(s) found out of 99 | الأسماء المثلى: N من 99 |

## 2. Taken from the mobile app (asrar-mobile `constants/translations.ts`, `compatibility.soul.*`), new to the web catalog

| key | English | Arabic (mobile) |
|---|---|---|
| `ar-ui.json` | May start easy; later can feel stagnant | قد يبدأ سهلًا؛ لاحقًا قد يشعر بالركود |
| `ar-ui.json` | Often difficult; tension and strain | غالبًا ما يكون صعبًا؛ توتر وإجهاد |
| `ar-ui.json` | Traditionally blessed; harmony and growth | مبارك تقليديًا؛ انسجام ونمو |
| `ar-ui.json` | Self-work | عمل ذاتي |
| `ar-ui.json` | Traditionally best; blessings after obstacles | الأفضل تقليديًا؛ بركات بعد العقبات |
| `ar-ui.json` | Long-term | طويل الأمد |
| `ar-ui.json` | Very good long-term; early struggles | جيد جدًا على المدى الطويل؛ صراعات مبكرة |

## 3. Existing Arabic in code, shown on /ar for the first time (the birth-date comparison used to show English here)

| key | English | Arabic (existing, unreviewed) |
|---|---|---|
| `astrologicalCompatibility.subject.sun` | core temperament | الطبع الأساسي |
| `astrologicalCompatibility.subject.moon` | emotional nature | الطبيعة العاطفية |
| `astrologicalCompatibility.element.same` | Both share {e1} {subject} — an easy, instinctive rapport. | يشترك الاثنان في {subject} {e1} — انسجام سهل وفطري. |
| `astrologicalCompatibility.element.complementary` | {e1} and {e2} {subject}s naturally support each other. | {subject} {e1} و{e2} يدعمان بعضهما بشكل طبيعي. |
| `astrologicalCompatibility.element.opposing` | {e1} and {e2} {subject}s can create friction without conscious effort. | {subject} {e1} و{e2} قد يخلقان احتكاكًا دون جهد واعٍ. |
| `astrologicalCompatibility.element.neutral` | {e1} and {e2} {subject}s are independent — neither reinforcing nor clashing. | {subject} {e1} و{e2} مستقلان — لا تعزيز ولا تعارض. |
| `astrologicalCompatibility.venusMars.same` | Strong mutual attraction — what each is drawn to matches how the other pursues connection. | انجذاب متبادل قوي — ما ينجذب إليه كل طرف يوافق طريقة الآخر في السعي للتواصل. |
| `astrologicalCompatibility.venusMars.complementary` | A workable attraction dynamic — different styles that can still click. | ديناميكية انجذاب قابلة للعمل — أساليب مختلفة يمكن أن تنسجم رغم ذلك. |
| `astrologicalCompatibility.venusMars.neutral` | A mixed attraction dynamic, neither especially easy nor especially hard. | ديناميكية انجذاب متفاوتة، لا سهلة ولا صعبة بشكل خاص. |
| `astrologicalCompatibility.venusMars.opposing` | Attraction styles pull in different directions — may take deliberate effort to align. | أساليب الانجذاب تتجه في اتجاهات مختلفة — قد يتطلب الأمر جهدًا واعيًا للتوافق. |
| `astrologicalCompatibility.ELEMENT_LABEL` | Fire / Earth / Air / Water | النار / التراب / الهواء / الماء |
| `AstrologicalCompatibilityView.COPY.ar.title` | How Well Do You Match? | ما مدى توافقكما؟ |
| `AstrologicalCompatibilityView.COPY.ar.disclaimer` | General astrological compatibility (Sun sign, Moon sign, Venus-Mars) — not a classical ʿIlm al-Nujūm technique. … | توافق فلكي عام (برج الشمس، برج القمر، الزهرة-المريخ) — وليس أسلوبًا كلاسيكيًا من علم النجوم. علم النجوم الإسلامي الكلاسيكي يختار وقت الزواج بدلاً من مقارنة تاريخي ميلاد — راجع ميزة الاختيارات (أفضل التواريخ) لذلك. |
| `AstrologicalCompatibilityView.COPY.ar.matchStrength` | Your Match Strength | قوة التوافق |
| `AstrologicalCompatibilityView.COPY.ar.breakdown` | Breakdown | التفاصيل |
| `AstrologicalCompatibilityView.COPY.ar.sunSign / moonSign / venusMars` | Sun Sign / Moon Sign / Attraction (Venus–Mars) | برج الشمس / برج القمر / الانجذاب (الزهرة-المريخ) |
| `AstrologicalCompatibilityView.COPY.ar.uncertainNote` | One birth date falls close to a Moon sign change — … | أحد تاريخي الميلاد قريب من تغيّر برج القمر — دون وقت ميلاد دقيق، قد لا يكون برج القمر المعروض دقيقًا. |
| `compatibilitySimpleLanguage.COMPATIBILITY_TERMS.ar.scoreLegend` | score range labels | (existing `ar` block, now used for the birth-date result) |
| `AstrologicalCompatibilityView sign line` | pisces × cancer | ZODIAC_DATA.arabicName, e.g. الحوت × السرطان |

## 4. Page copy now server-rendered in Arabic (existing reviewed catalog Arabic, unchanged)

Before this PR, /ar/compatibility served English HTML and the runtime catalog (`public/i18n/ar-ui.json`) swapped it to Arabic in the browser. The same Arabic is now in the server HTML and the FAQPage JSON-LD (`inLanguage: ar`). The WebApplication JSON-LD reuses the AR_META description and the existing link name «حساب التوافق بالأسماء».

| key | English | Arabic (catalog) |
|---|---|---|
| `compatibility/page.tsx COPY.ar` | Name Compatibility for Marriage — Abjad Soul Connection Calculator | توافق الأسماء للزواج — حاسبة صلة الأرواح بالأبجد |
| `compatibility/page.tsx COPY.ar` | Before a nikāḥ, many families like to look at the harmony between two names. In ʿilm al-ḥurūf each Arabic letter has a number (the Abjad, or ḥisāb al-jummal), so every name has a total. This calculator compares the two totals with the traditional "soul connection" method and reads the result for marriage first, with friendship, family and work as other contexts. | قبل النكاح تحبّ أسر كثيرة أن تنظر في الانسجام بين الاسمين. ففي علم الحروف لكل حرف عربي عدد (الأبجد أو حساب الجمل)، فلكل اسم مجموع. تقارن هذه الحاسبة بين المجموعين بطريقة «صلة الأرواح» التقليدية، وتقرأ النتيجة للزواج أولًا، ثم للصداقة والعائلة والعمل. |
| `compatibility/page.tsx COPY.ar` | You can also compare two dates of birth (a general, modern astrological comparison of Sun, Moon, Venus and Mars signs), look at a person's resonance with one of the 99 Names of Allah, or find the Divine Name that matches an intention. | يمكنك أيضًا مقارنة تاريخَي ميلاد (مقارنة فلكية عامة حديثة لأبراج الشمس والقمر والزهرة والمريخ)، أو النظر في رنين شخص مع اسم من أسماء الله الحسنى، أو إيجاد الاسم الحسن المناسب لنيّة. |
| `compatibility/page.tsx COPY.ar` | Adab first | الأدب أولًا |
| `compatibility/page.tsx COPY.ar` | A name number cannot tell you whether a marriage will succeed. Ask about dīn and character, consult both families, pray ṣalāt al-istikhāra and put your trust in Allah. Use this tool for reflection and conversation, not as a verdict; Allah alone knows the unseen. | لا يستطيع عدد الاسم أن يخبرك بنجاح الزواج. اسأل عن الدين والخُلق، واستشر الأسرتين، وصلِّ صلاة الاستخارة، وتوكّل على الله. واستعمل هذه الأداة للتأمّل والحديث، لا حكمًا؛ والله وحده يعلم الغيب. |
| `compatibility/page.tsx COPY.ar` | How the names method works | كيف تعمل طريقة الأسماء |
| `compatibility/page.tsx COPY.ar` | Write both names in Arabic letters (or type them in Latin letters and pick the Arabic spelling). | اكتب الاسمين بالحروف العربية (أو اكتبهما بالحروف اللاتينية واختر الكتابة العربية). |
| `compatibility/page.tsx COPY.ar` | Each name is converted to its Abjad (kabīr) total, using the Maghribi or Mashriqi letter values you select. | يُحوَّل كل اسم إلى مجموعه في الأبجد الكبير، بقيم الحروف المغربية أو المشرقية التي تختارها. |
| `compatibility/page.tsx COPY.ar` | The two totals are added together with 7 and divided by 9; the remainder (1–9, with 0 counted as 9) is the soul-connection number. | يُجمع المجموعان مع 7 ويُقسم الناتج على 9؛ والباقي (1–9، والصفر يُعدّ 9) هو عدد صلة الأرواح. |
| `compatibility/page.tsx COPY.ar` | Each number has a traditional meaning and outlook, shown for the relationship context you choose: marriage, universal, friendship, family or work. | لكل عدد معنى ونظرة تقليديان، يُعرضان بحسب سياق العلاقة الذي تختاره: زواج، عام، صداقة، عائلة أو عمل. |
| `compatibility/page.tsx COPY.ar` | Frequently asked questions | أسئلة شائعة |
| `compatibility/page.tsx COPY.ar` | How do I check name compatibility for marriage? | كيف أتحقق من توافق الأسماء للزواج؟ |
| `compatibility/page.tsx COPY.ar` | Enter both names, choose the "Marriage" context and calculate. The tool adds the Abjad values of the two names plus 7, divides by 9 and shows the meaning of the remainder for marriage. | أدخل الاسمين واختر سياق «الزواج» ثم احسب. تجمع الأداة قيمتي الأبجد للاسمين مع 7، وتقسم على 9، وتعرض معنى الباقي في الزواج. |
| `compatibility/page.tsx COPY.ar` | Which Abjad system is used? | أي نظام أبجد يُستعمل؟ |
| `compatibility/page.tsx COPY.ar` | You can switch between the Maghribi order (the Maghreb, al-Andalus and West Africa) and the Mashriqi order (Egypt, the Middle East and Asia). Most names give the same total in both; names containing any of the six letters ṣād, ḍād, sīn, ẓāʾ, ghayn or shīn can differ. | يمكنك التبديل بين الترتيب المغربي (المغرب العربي والأندلس وغرب أفريقيا) والترتيب المشرقي (مصر والمشرق وسائر آسيا). وأكثر الأسماء تعطي المجموع نفسه في الترتيبين؛ أما الأسماء التي فيها أحد الحروف الستة: الصاد والضاد والسين والظاء والغين والشين، فقد يختلف مجموعها. |
| `compatibility/page.tsx COPY.ar` | Can I compare by date of birth instead of names? | هل يمكنني المقارنة بتاريخ الميلاد بدلًا من الأسماء؟ |
| `compatibility/page.tsx COPY.ar` | Yes. Choose "By Birth Date" to compare two people's Sun, Moon, Venus and Mars signs. This is a general, modern astrological comparison, not a classical Islamic method, and it never uses birth time or houses. | نعم. اختر «بتاريخ الميلاد» لتقارن بين أبراج الشمس والقمر والزهرة والمريخ لشخصين. وهذه مقارنة فلكية عامة حديثة، لا طريقة إسلامية كلاسيكية، ولا تستعمل وقت الميلاد ولا البيوت. |
| `compatibility/page.tsx COPY.ar` | Is it permissible to rely on name compatibility? | هل يجوز الاعتماد على توافق الأسماء؟ |
| `compatibility/page.tsx COPY.ar` | Treat it as cultural reflection, not prediction. Choosing a spouse rests on dīn, character, family counsel and ṣalāt al-istikhāra. No number decides a marriage; Allah alone knows the unseen. | اجعله تأمّلًا ثقافيًا لا تنبّؤًا. فاختيار الزوج قائم على الدين والخُلق ومشورة الأهل وصلاة الاستخارة. ولا يحسم عددٌ زواجًا؛ والله وحده يعلم الغيب. |
| `compatibility/page.tsx COPY.ar` | What if our result is low? | ماذا لو كانت نتيجتنا منخفضة؟ |
| `compatibility/page.tsx COPY.ar` | A low number is not a prohibition and not a bad omen. It can be an invitation to talk about expectations and patience. Many happy marriages would "fail" a numeric test. | العدد المنخفض ليس تحريمًا ولا شؤمًا، بل قد يكون دعوة للحديث عن التوقّعات والصبر. وكثير من الزيجات السعيدة كانت «سترسب» في اختبار رقمي. |
| `compatibility/page.tsx COPY.ar` | Related | ذات صلة |
| `compatibility/page.tsx COPY.ar` | Best Dates (Ikhtiyārāt) | أفضل التواريخ (الاختيارات) |
| `compatibility/page.tsx COPY.ar` | Choose an auspicious date for the nikāḥ. | اختر تاريخًا مباركًا للنكاح. |
| `compatibility/page.tsx COPY.ar` | Your Burj from Your Name & Mother's Name | برجك من اسمك واسم أمك |
| `compatibility/page.tsx COPY.ar` | Your burj, blessed day, dhikr and sadaqah. | برجك ويومك المبارك وذكرك وصدقتك. |
| `compatibility/page.tsx COPY.ar` | Abjad Calculator | حاسبة الأبجد |
| `compatibility/page.tsx COPY.ar` | The Abjad value of any Arabic name or phrase. | قيمة الأبجد لأي اسم أو عبارة عربية. |
| `compatibility/page.tsx COPY.ar` | Sadaqa Guide | دليل الصدقة |
| `compatibility/page.tsx COPY.ar` | Sadaqah by weekday, Hijri birth month and burj. | الصدقة بحسب يوم الأسبوع وشهر الميلاد الهجري والبرج. |
| `compatibility/page.tsx COPY.ar` | Birth Profile | ملف الميلاد |
| `compatibility/page.tsx COPY.ar` | Your Sun and Moon signs, lunar mansion and planetary dignities. | برجا الشمس والقمر والمنزلة القمرية وحظوظ الكواكب من القوة. |
