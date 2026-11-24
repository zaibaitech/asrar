/**
 * Copy for the About and Methodology information pages (EN, FR, AR, UR).
 * English leads stay 40–60 words. Arabic and Urdu strings are listed in
 * /workspace/lr-about-methodology-ar-ur.md for Language Reviewer.
 */
import { equivalentLocalePath } from './i18nRoutes';

export type InfoLocale = 'en' | 'fr' | 'ar' | 'ur';

export const ABOUT_LEAD =
  "Asrār (asrar.app) is a free web app of reflective tools from the Islamic esoteric tradition: Abjad name values, planetary hours, lunar mansions, ikhtiyārāt, sadaqah guidance and dhikr practice. Zaibai Tech, a UK company, offers it for learning and reflection, not prediction. It is available in English, French, Arabic and Urdu. Only Allah knows the unseen.";

export const METHODOLOGY_LEAD =
  "This page explains how Asrār's tools work: the default Maghribi Abjad system and the Mashriqi option, the name and mother's-name burj method, planetary hours from local sunrise and sunset in Chaldean order, the cited manāzil sources, the ikhtiyārāt rules, sadaqah as voluntary charity, and the Tanzil Qur'an text. For education and reflection, not prediction.";

export interface InfoMeta {
  title: string;
  description: string;
}

export const ABOUT_META: Record<InfoLocale, InfoMeta> = {
  en: {
    title: 'About Asrār',
    description:
      'Asrār (asrar.app) is a free web app of reflective Islamic tools built by Zaibai Tech, a UK company. For learning and reflection, not prediction. Only Allah knows the unseen.',
  },
  fr: {
    title: 'À propos d’Asrār',
    description:
      'Asrār (asrar.app) est une application web gratuite d’outils islamiques de réflexion, conçue par Zaibai Tech, une société britannique. Pour l’apprentissage et la réflexion, non pour la prédiction. Seul Allah connaît l’invisible.',
  },
  ar: {
    title: 'نبذة عن أسرار',
    description:
      'أسرار (asrar.app) تطبيق ويب مجاني لأدوات تأمّلية إسلامية، من إعداد شركة Zaibai Tech البريطانية. للتعلّم والتأمّل، لا للتنبّؤ. ولا يعلم الغيب إلا الله.',
  },
  ur: {
    title: 'اسرار کا تعارف',
    description:
      'اسرار (asrar.app) اسلامی غور و فکر کے ٹولز کی مفت ویب ایپ ہے، جو برطانوی کمپنی Zaibai Tech نے تیار کی ہے۔ سیکھنے اور غور و فکر کے لیے، پیش گوئی نہیں۔ غیب کا علم صرف اللہ کو ہے۔',
  },
};

export const METHODOLOGY_META: Record<InfoLocale, InfoMeta> = {
  en: {
    title: 'Methodology',
    description:
      'How Asrār calculates Abjad values, the name-and-mother burj, planetary hours, manāzil, ikhtiyārāt and sadaqah, and how Qur’an text is sourced. For reflection, not prediction.',
  },
  fr: {
    title: 'Méthodologie',
    description:
      'Comment Asrār calcule les valeurs Abjad, le burj à partir du nom et du nom de la mère, les heures planétaires, les manāzil, l’ikhtiyārāt et la sadaqah, et d’où vient le texte coranique. Pour la réflexion, non la prédiction.',
  },
  ar: {
    title: 'المنهجية',
    description:
      'كيف يحسب أسرار قيم الأبجد، والبرج من الاسم واسم الأم، والساعات الكوكبية، والمنازل، والاختيارات، والصدقة، ومن أين يؤخذ النص القرآني. للتأمّل، لا للتنبّؤ.',
  },
  ur: {
    title: 'طریقہ کار',
    description:
      'اسرار ابجد کے اعداد، نام اور والدہ کے نام سے برج، ساعاتِ کواکب، منازل، اختیارات اور صدقہ کیسے نکالتا ہے، اور قرآن کا متن کہاں سے لیا جاتا ہے۔ غور و فکر کے لیے، پیش گوئی نہیں۔',
  },
};

export const ABOUT_LEADS: Record<InfoLocale, string> = {
  en: ABOUT_LEAD,
  fr: "Asrār (asrar.app) est une application web gratuite d’outils de réflexion issus de la tradition ésotérique islamique : valeurs Abjad des noms, heures planétaires, demeures lunaires, ikhtiyārāt, conseils de sadaqah et pratique du dhikr. Zaibai Tech, une société britannique, la propose pour l’apprentissage et la réflexion, non pour la prédiction. Elle est disponible en anglais, en français, en arabe et en ourdou. Seul Allah connaît l’invisible.",
  ar: 'أسرار (asrar.app) تطبيق ويب مجاني لأدوات تأمّلية من التراث الإسلامي: حساب الأبجد للأسماء، والساعات الكوكبية، ومنازل القمر، والاختيارات، وإرشاد الصدقة، وممارسة الذكر. تقدّمه شركة Zaibai Tech البريطانية للتعلّم والتأمّل، لا للتنبّؤ. وهو متاح بالإنجليزية والفرنسية والعربية والأردية. ولا يعلم الغيب إلا الله.',
  ur: 'اسرار (asrar.app) اسلامی روایت سے غور و فکر کے لیے مفت ویب ایپ ہے: ابجد کے اعداد، ساعاتِ کواکب، منازلِ قمر، اختیارات، صدقہ کی رہنمائی اور ذکر۔ برطانوی کمپنی Zaibai Tech اسے سیکھنے اور غور و فکر کے لیے پیش کرتی ہے، پیش گوئی کے لیے نہیں۔ یہ انگریزی، فرانسیسی، عربی اور اردو میں دستیاب ہے۔ غیب کا علم صرف اللہ کو ہے۔',
};

export const METHODOLOGY_LEADS: Record<InfoLocale, string> = {
  en: METHODOLOGY_LEAD,
  fr: "Cette page explique le fonctionnement des outils d’Asrār : le système Abjad maghribi par défaut et l’option mashriqi, la méthode du burj à partir du nom et du nom de la mère, les heures planétaires selon le lever et le coucher du soleil locaux dans l’ordre chaldéen, les sources citées pour les manāzil, les règles d’ikhtiyārāt, la sadaqah comme charité volontaire, et le texte coranique Tanzil. Pour l’éducation et la réflexion, non pour la prédiction.",
  ar: 'تشرح هذه الصفحة عمل أدوات أسرار: نظام الأبجد المغربي المعتمد افتراضيًا والخيار المشرقي، وطريقة البرج من الاسم واسم الأم، والساعات الكوكبية من شروق الشمس وغروبها المحليين وفق الترتيب الكلداني، والمصادر المذكورة للمنازل، وقواعد الاختيارات، والصدقة بوصفها عطاءً طوعيًا، ونص القرآن وفق Tanzil. للتعليم والتأمّل، لا للتنبّؤ.',
  ur: 'اس صفحے پر اسرار کے ٹولز کا طریقہ بتایا گیا ہے: طے شدہ ابجدِ مغرب اور ابجدِ مشرق کا متبادل، نام اور والدہ کے نام سے برج، مقامی طلوع و غروب کے مطابق کلدانی ترتیب کی ساعاتِ کواکب، منازل کے مذکورہ مآخذ، اختیارات کے قواعد، صدقہ بطور رضاکارانہ خیرات، اور Tanzil کا قرآنی متن۔ تعلیم اور غور و فکر کے لیے، پیش گوئی نہیں۔',
};

/** A text run, or an in-sentence internal/external link. */
export type RichPart = string | { href: string; label: string; external?: boolean };

export interface RelatedItem {
  href: string;
  name: string;
  desc: string;
}

export interface AboutCopy {
  breadcrumbLabel: string;
  homeLabel: string;
  h1: string;
  lead: string;
  whatTitle: string;
  whatP1: string;
  whatP2: string;
  builtTitle: string;
  builtParts: RichPart[];
  stanceTitle: string;
  stanceP: string;
  languagesTitle: string;
  languagesParts: RichPart[];
  contactTitle: string;
  contactParts: RichPart[];
  relatedTitle: string;
  related: RelatedItem[];
  footerOtherLabel: string;
  footerOtherHref: string;
  rights: string;
}

export interface MethodCopy {
  breadcrumbLabel: string;
  homeLabel: string;
  h1: string;
  lead: string;
  abjadTitle: string;
  abjadParts: RichPart[];
  burjTitle: string;
  burjParts: RichPart[];
  hoursTitle: string;
  hoursParts: RichPart[];
  manazilTitle: string;
  manazilParts: RichPart[];
  ikhtiyaratTitle: string;
  ikhtiyaratP1Parts: RichPart[];
  ikhtiyaratP2: string;
  sadaqaTitle: string;
  sadaqaP1: string;
  sadaqaP2Parts: RichPart[];
  quranTitle: string;
  quranP: string;
  notTitle: string;
  notParts: RichPart[];
  relatedTitle: string;
  related: RelatedItem[];
  footerOtherLabel: string;
  footerOtherHref: string;
  rights: string;
}

export const ABOUT_COPY: Record<InfoLocale, AboutCopy> = {
  en: {
    breadcrumbLabel: 'Breadcrumb',
    homeLabel: 'Asrār',
    h1: 'About Asrār',
    lead: ABOUT_LEADS.en,
    whatTitle: 'What Asrār is',
    whatP1:
      'Asrār is a companion for the traditional Islamic sciences of ʿIlm al-Ḥurūf (the science of letters) and ʿIlm al-Nujūm (celestial timing). The tools include an Abjad calculator, a burj from a name and a mother’s name, name compatibility, planetary hours and the planet of the day, planetary transits, a birth profile, the 28 lunar mansions (manāzil al-qamar), ikhtiyārāt (choosing a time to begin something), best-day guides for nikāḥ, travel, moving home and business, sadaqah guidance (voluntary charity for those in need), dhikr challenges, and the 99 Names of Allah with their Abjad values.',
    whatP2: 'The app is free to use. No account is required for the public calculators.',
    builtTitle: 'Who builds it',
    builtParts: [
      'Asrār is built by Zaibai Tech (Zaibaitech Ltd), a UK company. ',
      { href: 'https://zaibaitech.com/', label: 'zaibaitech.com', external: true },
      ' is the company website.',
    ],
    stanceTitle: 'For reflection, not prediction',
    stanceP:
      'These tools are for reflection and education, not prediction. Only Allah knows the unseen. Asrār does not give fatwas, does not replace istikhāra, family counsel (mashwara) or trust in God (tawakkul), and is not for fortune-telling. For religious rulings, consult qualified scholars.',
    languagesTitle: 'Languages',
    languagesParts: [
      'Asrār is available in English, French, Arabic and Urdu. This About page and the ',
      { href: '/methodology', label: 'methodology' },
      ' page are offered in all four languages. Language versions of a tool are linked from that tool when they exist.',
    ],
    contactTitle: 'Contact',
    contactParts: [
      'You can reach the company through ',
      { href: 'https://zaibaitech.com/', label: 'zaibaitech.com', external: true },
      '. Asrār also has an official Facebook Page, ',
      { href: '__facebook__', label: 'Asrariya', external: true },
      '.',
    ],
    relatedTitle: 'Related pages',
    related: [
      { href: '/methodology', name: 'Methodology', desc: 'How the calculators work, and what they are not.' },
      { href: '/abjad', name: 'Abjad Calculator', desc: 'The Maghribi or Mashriqi value of an Arabic name or phrase.' },
      { href: '/ikhtiyarat', name: 'Best Dates (Ikhtiyārāt)', desc: 'Choosing a time for nikāḥ, travel, business or a new start.' },
      { href: '/sadaqa', name: 'Sadaqa Guide', desc: 'Voluntary charity for those in need, offered for reflection.' },
    ],
    footerOtherLabel: 'Methodology',
    footerOtherHref: '/methodology',
    rights: 'All rights reserved',
  },
  fr: {
    breadcrumbLabel: 'Fil d’Ariane',
    homeLabel: 'Asrār',
    h1: 'À propos d’Asrār',
    lead: ABOUT_LEADS.fr,
    whatTitle: 'Ce qu’est Asrār',
    whatP1:
      'Asrār accompagne l’étude des sciences islamiques traditionnelles de l’ʿIlm al-Ḥurūf (la science des lettres) et de l’ʿIlm al-Nujūm (le moment céleste). Les outils comprennent un calculateur Abjad, un burj à partir d’un nom et du nom de la mère, la compatibilité des noms, les heures planétaires et la planète du jour, les transits planétaires, un profil de naissance, les 28 demeures lunaires (manāzil al-qamar), l’ikhtiyārāt (choisir un moment pour commencer quelque chose), des guides du meilleur jour pour le nikāḥ, le voyage, un emménagement et les affaires, des conseils de sadaqah (charité volontaire envers les personnes dans le besoin), des défis de dhikr, et les 99 Noms d’Allah avec leurs valeurs Abjad.',
    whatP2: 'L’application est gratuite. Aucun compte n’est requis pour les calculateurs publics.',
    builtTitle: 'Qui la conçoit',
    builtParts: [
      'Asrār est conçu par Zaibai Tech (Zaibaitech Ltd), une société britannique. ',
      { href: 'https://zaibaitech.com/', label: 'zaibaitech.com', external: true },
      ' est le site de l’entreprise.',
    ],
    stanceTitle: 'Pour la réflexion, non la prédiction',
    stanceP:
      'Ces outils servent à la réflexion et à l’éducation, non à la prédiction. Seul Allah connaît l’invisible. Asrār ne délivre pas de fatwas, ne remplace pas l’istikhāra, le conseil familial (mashwara) ni la confiance en Dieu (tawakkul), et ne sert pas à la divination. Pour les questions religieuses, consultez des érudits qualifiés.',
    languagesTitle: 'Langues',
    languagesParts: [
      'Asrār est disponible en anglais, en français, en arabe et en ourdou. Cette page À propos et la page ',
      { href: '/methodology', label: 'Méthodologie' },
      ' sont proposées dans les quatre langues. Les versions linguistiques d’un outil sont indiquées depuis cet outil lorsqu’elles existent.',
    ],
    contactTitle: 'Contact',
    contactParts: [
      'Vous pouvez joindre l’entreprise via ',
      { href: 'https://zaibaitech.com/', label: 'zaibaitech.com', external: true },
      '. Asrār a aussi une page Facebook officielle, ',
      { href: '__facebook__', label: 'Asrariya', external: true },
      '.',
    ],
    relatedTitle: 'Pages liées',
    related: [
      { href: '/methodology', name: 'Méthodologie', desc: 'Comment fonctionnent les calculateurs, et ce qu’ils ne sont pas.' },
      { href: '/abjad', name: 'Calculateur Abjad', desc: 'La valeur maghribi ou mashriqi d’un nom ou d’une expression arabe.' },
      { href: '/ikhtiyarat', name: 'Meilleures dates (Ikhtiyārāt)', desc: 'Choisir un moment pour le nikāḥ, un voyage, les affaires ou un nouveau départ.' },
      { href: '/sadaqa', name: 'Guide de la sadaqa', desc: 'La charité volontaire envers les personnes dans le besoin, proposée pour la réflexion.' },
    ],
    footerOtherLabel: 'Méthodologie',
    footerOtherHref: '/methodology',
    rights: 'Tous droits réservés',
  },
  ar: {
    breadcrumbLabel: 'مسار التنقل',
    homeLabel: 'أسرار',
    h1: 'نبذة عن أسرار',
    lead: ABOUT_LEADS.ar,
    whatTitle: 'ما هو أسرار',
    whatP1:
      'أسرار رفيق لدراسة العلوم الإسلامية التقليدية: علم الحروف وعلم النجوم (التوقيت السماوي). وتشمل أدواته حاسبة الأبجد، واستخراج البرج من الاسم واسم الأم، وتوافق الأسماء، والساعات الكوكبية وكوكب اليوم، وعبور الكواكب، وملف الميلاد، ومنازل القمر الثماني والعشرين، والاختيارات (اختيار وقت لبدء أمر)، وأدلة اليوم المناسب للنكاح والسفر والانتقال إلى بيت جديد والتجارة، وإرشاد الصدقة (صدقة طوعية للمحتاجين)، وتحديات الذكر، وأسماء الله الحسنى مع قيمها في حساب الأبجد.',
    whatP2: 'التطبيق مجاني الاستعمال. ولا يُشترط إنشاء حساب لاستعمال الحاسبات العامة.',
    builtTitle: 'من يُعدّه',
    builtParts: [
      'تُعدّ شركة Zaibai Tech (Zaibaitech Ltd) تطبيق أسرار، وهي شركة بريطانية. وموقع الشركة هو ',
      { href: 'https://zaibaitech.com/', label: 'zaibaitech.com', external: true },
      '.',
    ],
    stanceTitle: 'للتأمّل، لا للتنبّؤ',
    stanceP:
      'هذه الأدوات للتأمّل والتعليم، لا للتنبّؤ. ولا يعلم الغيب إلا الله. ولا يُصدر أسرار فتاوى، ولا يغني عن الاستخارة ولا عن مشورة الأهل ولا عن التوكّل على الله، وليس للتكهّن. وللأحكام الشرعية يُرجع إلى أهل العلم المؤهّلين.',
    languagesTitle: 'اللغات',
    languagesParts: [
      'يتوفر أسرار بالإنجليزية والفرنسية والعربية والأردية. وتُقدَّم صفحة النبذة هذه وصفحة ',
      { href: '/methodology', label: 'المنهجية' },
      ' بهذه اللغات الأربع. وإذا وُجدت للأداة نسخٌ بلغات أخرى، تظهر روابطها في صفحة الأداة نفسها.',
    ],
    contactTitle: 'التواصل',
    contactParts: [
      'يمكن التواصل مع الشركة عبر ',
      { href: 'https://zaibaitech.com/', label: 'zaibaitech.com', external: true },
      '. ولأسرار أيضًا صفحة رسمية على فيسبوك باسم ',
      { href: '__facebook__', label: 'Asrariya', external: true },
      '.',
    ],
    relatedTitle: 'صفحات ذات صلة',
    related: [
      { href: '/methodology', name: 'المنهجية', desc: 'كيف تعمل الحاسبات، وما ليست هي.' },
      { href: '/abjad', name: 'حاسبة الأبجد', desc: 'قيمة الاسم أو العبارة العربية بالترتيب المغربي أو المشرقي.' },
      { href: '/ikhtiyarat', name: 'التواريخ المناسبة (الاختيارات)', desc: 'اختيار وقت للنكاح أو السفر أو التجارة أو بداية جديدة.' },
      { href: '/sadaqa', name: 'دليل الصدقة', desc: 'صدقة طوعية للمحتاجين، معروضة للتأمّل.' },
    ],
    footerOtherLabel: 'المنهجية',
    footerOtherHref: '/methodology',
    rights: 'جميع الحقوق محفوظة',
  },
  ur: {
    breadcrumbLabel: 'راہِ صفحات',
    homeLabel: 'اسرار',
    h1: 'اسرار کا تعارف',
    lead: ABOUT_LEADS.ur,
    whatTitle: 'اسرار کیا ہے',
    whatP1:
      'اسرار روایتی اسلامی علوم — علمِ حروف اور علمِ نجوم (فلکی توقیت) — کے مطالعے کا ساتھی ہے۔ اس کے ٹولز میں ابجد کیلکولیٹر، نام اور والدہ کے نام سے برج، ناموں کی مطابقت، ساعاتِ کواکب اور آج کا سیارہ، سیاروں کا عبور، پیدائشی پروفائل، چاند کی اٹھائیس منزلیں (منازلِ قمر)، اختیارات (کسی کام کی ابتدا کا وقت)، نکاح، سفر، نئے گھر میں منتقلی اور کاروبار کے لیے بہتر دن کی رہنمائی، صدقہ کی رہنمائی (ضرورت مندوں کے لیے رضاکارانہ خیرات)، ذکر کے چیلنجز، اور اسمائے حسنٰی ان کے ابجد اعداد کے ساتھ شامل ہیں۔',
    whatP2: 'ایپ استعمال کرنا مفت ہے۔ عوامی کیلکولیٹرز کے لیے اکاؤنٹ کی ضرورت نہیں۔',
    builtTitle: 'یہ کس نے بنایا',
    builtParts: [
      'اسرار Zaibai Tech (Zaibaitech Ltd) نے بنایا ہے، جو ایک برطانوی کمپنی ہے۔ کمپنی کی ویب سائٹ ',
      { href: 'https://zaibaitech.com/', label: 'zaibaitech.com', external: true },
      ' ہے۔',
    ],
    stanceTitle: 'غور و فکر کے لیے، پیش گوئی نہیں',
    stanceP:
      'یہ ٹولز غور و فکر اور تعلیم کے لیے ہیں، پیش گوئی کے لیے نہیں۔ غیب کا علم صرف اللہ کو ہے۔ اسرار فتویٰ نہیں دیتا، استخارہ، خاندانی مشورے یا توکل کی جگہ نہیں لیتا، اور فال کے لیے نہیں ہے۔ شرعی مسائل میں اہل علم سے رجوع کریں۔',
    languagesTitle: 'زبانیں',
    languagesParts: [
      'اسرار انگریزی، فرانسیسی، عربی اور اردو میں دستیاب ہے۔ یہ تعارفی صفحہ اور ',
      { href: '/methodology', label: 'طریقہ کار' },
      ' کا صفحہ ان چاروں زبانوں میں پیش کیے گئے ہیں۔ کسی ٹول کے لسانی نسخے اس ٹول کے صفحے سے اس وقت مل سکتے ہیں جب وہ موجود ہوں۔',
    ],
    contactTitle: 'رابطہ',
    contactParts: [
      'کمپنی سے ',
      { href: 'https://zaibaitech.com/', label: 'zaibaitech.com', external: true },
      ' کے ذریعے رابطہ کیا جا سکتا ہے۔ اسرار کا باضابطہ فیسبوک صفحہ بھی ہے، ',
      { href: '__facebook__', label: 'Asrariya', external: true },
      '۔',
    ],
    relatedTitle: 'متعلقہ صفحات',
    related: [
      { href: '/methodology', name: 'طریقہ کار', desc: 'کیلکولیٹر کیسے کام کرتے ہیں، اور وہ کیا نہیں ہیں۔' },
      { href: '/abjad', name: 'ابجد کیلکولیٹر', desc: 'عربی نام یا عبارت کی قیمت، ابجدِ مغرب یا ابجدِ مشرق کے مطابق۔' },
      { href: '/ikhtiyarat', name: 'موزوں تاریخیں (اختیارات)', desc: 'نکاح، سفر، کاروبار یا نئی ابتدا کے لیے وقت کا انتخاب۔' },
      { href: '/sadaqa', name: 'صدقہ گائیڈ', desc: 'ضرورت مندوں کے لیے رضاکارانہ خیرات، غور و فکر کے لیے۔' },
    ],
    footerOtherLabel: 'طریقہ کار',
    footerOtherHref: '/methodology',
    rights: 'جملہ حقوق محفوظ ہیں',
  },
};

export const METHOD_COPY: Record<InfoLocale, MethodCopy> = {
  en: {
    breadcrumbLabel: 'Breadcrumb',
    homeLabel: 'Asrār',
    h1: 'Methodology',
    lead: METHODOLOGY_LEADS.en,
    abjadTitle: 'Abjad (ḥisāb al-jummal)',
    abjadParts: [
      'Each Arabic letter has a number. Adding the letters of a name or phrase gives its Abjad total. Asrār uses the Maghribi letter order by default, and offers the Mashriqi order as a switch. The two orders differ on six letters: ṣād, ḍād, sīn, ẓāʾ, ghayn and shīn. A name that does not use those letters has the same total in both. Vowel marks are not counted. The ',
      { href: '/abjad', label: 'Abjad calculator' },
      ' shows a letter-by-letter breakdown in either system.',
    ],
    burjTitle: 'Burj from a name and a mother’s name',
    burjParts: [
      'The calculator on ',
      { href: '/name-and-mother-burj', label: "Your Burj from Your Name & Mother's Name" },
      ' takes the Maghribi Abjad total of each name, adds the two totals, and divides by 12. The remainder (1 to 12, with 0 counted as 12) is the burj, from 1 = Aries (al-Ḥamal) to 12 = Pisces (al-Ḥūt). That burj is linked to an element and temperament, and to a day, dhikr and sadaqah shown by the tool. The name-based burj is not the same as a Sun-sign from a date of birth; the tool can also show the tropical sign from a date of birth, and the two may differ.',
    ],
    hoursTitle: 'Planetary hours',
    hoursParts: [
      'In the Chaldean scheme used on the ',
      { href: '/planetary-hours', label: 'Planetary Hours' },
      " page, the time from sunrise to sunset, and the time from sunset to the next sunrise, are each divided into twelve equal hours. The hours follow a fixed repeating order: Saturn, Jupiter, Mars, the Sun, Venus, Mercury, the Moon. The first hour after sunrise belongs to the planet of the weekday (the Sun on Sunday, the Moon on Monday, Mars on Tuesday, Mercury on Wednesday, Jupiter on Thursday, Venus on Friday, Saturn on Saturday). Because day and night are each split into twelve, a planetary hour is usually not 60 minutes long. Sunrise and sunset are taken at the visitor’s location; when a location is not available, the app uses Makkah as a fallback, as it does elsewhere.",
    ],
    manazilTitle: 'Lunar mansions (manāzil)',
    manazilParts: [
      'Asrār places the Moon in one of twenty-eight equal tropical sectors (~12°51′ each), from the Moon’s tropical ecliptic longitude. That convention is documented on the ',
      { href: '/manazil', label: 'lunar mansions' },
      " page so the live card stays consistent with the planetary ephemeris; classical star-tied (sidereal) bounds differ. The names and instructional framing draw on Al-Bīrūnī’s Kitāb al-Tafhīm, traditional Arab anwāʾ lore, and classical ikhtiyārāt themes for activity adab — not guarantees. The Qur’ān mentions the Moon’s stations as signs (10:5; 36:39–40). The page does not present talisman or taweez recipes.",
    ],
    ikhtiyaratTitle: 'Ikhtiyārāt and best-day guides',
    ikhtiyaratP1Parts: [
      'The ',
      { href: '/ikhtiyarat', label: 'ikhtiyārāt' },
      ' tool and the ',
      { href: '/best-day-for', label: 'best-day' },
      ' pages use the same election rule sets in the app. A date or time window is scored from the weekday, the planetary hour, and the Moon’s condition (sign, phase and lunar mansion). Some conditions can rule a window out, including a combust or void-of-course Moon and, depending on the purpose, other hard checks (for example eclipse proximity for nikāḥ, or Mercury retrograde for business).',
    ],
    ikhtiyaratP2:
      'As the configs are written today, nikāḥ receives a weekday bonus on Friday, Thursday and Monday, and a planetary-hour bonus in Venus, Moon or Jupiter hours. Travel is bonus-scored on Wednesday and Thursday; moving home on Saturday and Thursday; business or contracts on Wednesday and Thursday. These are the implemented scores, offered for reflection — not a fatwa and not a substitute for practical arrangements, istikhāra or counsel. Upcoming dates on the best-day pages are computed for a reference location of Makkah when a personal location is not used.',
    sadaqaTitle: 'Sadaqah guidance',
    sadaqaP1:
      'Sadaqah is voluntary charity — giving to those in need. It is a widely shared value, and Asrār offers its suggestions for reflection, not as a prediction of what must be given or of what will follow. Anyone may give at any time; the tables are not obligations.',
    sadaqaP2Parts: [
      'The Who Am I? and burj tools keep two systems of traditional sadaqah guidance separate: date-of-birth guidance, drawn from traditional sadaqah guidance (source: Serigne Mahdiou Niane); and name and mother’s-name burj guidance, drawn from traditional sadaqah guidance for that burj. The ',
      { href: '/sadaqa', label: 'Sadaqa Guide' },
      ' also presents weekday, birth-month and burj suggestions as a prompt for giving.',
    ],
    quranTitle: 'Qur’an text',
    quranP:
      'Arabic Qur’an wording on Asrār is held to the Tanzil quran-simple text. The Qur’an share pages load the quran-simple edition from api.alquran.cloud. This is a standard imlāʾī encoding of the ʿUthmānic rasm; it is not a new edition prepared by Asrār.',
    notTitle: 'What this is not',
    notParts: [
      'Asrār is not a prediction engine, a fortune-telling service, or geomancy. It does not issue fatwas, does not sell or prescribe talismans or taweez, and does not claim to know the unseen. The calculators do not replace ṣalāh times, istikhāra, family counsel (mashwara) or trust in God (tawakkul). Only Allah knows the unseen. For religious rulings, consult qualified scholars. A fuller account of the stance is on the ',
      { href: '/about', label: 'About' },
      ' page.',
    ],
    relatedTitle: 'Related pages',
    related: [
      { href: '/about', name: 'About Asrār', desc: 'What the app is, who builds it, and how to get in touch.' },
      { href: '/abjad', name: 'Abjad Calculator', desc: 'Maghribi (default) and Mashriqi letter values.' },
      { href: '/name-and-mother-burj', name: "Your Burj from Your Name & Mother's Name", desc: 'The remainder-by-12 method described above.' },
      { href: '/planetary-hours', name: 'Planetary Hours', desc: 'Chaldean hours from sunrise and sunset at your location.' },
      { href: '/manazil', name: 'Lunar Mansions (Manāzil)', desc: 'The 28 stations and the equal tropical method.' },
      { href: '/ikhtiyarat', name: 'Best Dates (Ikhtiyārāt)', desc: 'The election tool that uses the rule sets above.' },
      { href: '/sadaqa', name: 'Sadaqa Guide', desc: 'Voluntary charity for those in need, offered for reflection.' },
    ],
    footerOtherLabel: 'About',
    footerOtherHref: '/about',
    rights: 'All rights reserved',
  },
  fr: {
    breadcrumbLabel: 'Fil d’Ariane',
    homeLabel: 'Asrār',
    h1: 'Méthodologie',
    lead: METHODOLOGY_LEADS.fr,
    abjadTitle: 'Abjad (ḥisāb al-jummal)',
    abjadParts: [
      'Chaque lettre arabe a un nombre. L’addition des lettres d’un nom ou d’une expression donne son total Abjad. Asrār utilise par défaut l’ordre des lettres maghribi, et propose l’ordre mashriqi comme option. Les deux ordres diffèrent pour six lettres : ṣād, ḍād, sīn, ẓāʾ, ghayn et shīn. Un nom qui n’emploie pas ces lettres a le même total dans les deux systèmes. Les signes de voyelle ne sont pas comptés. Le ',
      { href: '/abjad', label: 'calculateur Abjad' },
      ' affiche le détail lettre par lettre dans l’un ou l’autre système.',
    ],
    burjTitle: 'Burj à partir d’un nom et du nom de la mère',
    burjParts: [
      'Le calculateur de la page ',
      { href: '/name-and-mother-burj', label: 'Votre burj à partir de votre nom et du nom de votre mère' },
      ' prend le total Abjad maghribi de chaque nom, additionne les deux totaux, et divise par 12. Le reste (de 1 à 12, 0 compté comme 12) est le burj, de 1 = Bélier (al-Ḥamal) à 12 = Poissons (al-Ḥūt). Ce burj est lié à un élément et à un tempérament, ainsi qu’à un jour, un dhikr et une sadaqah indiqués par l’outil. Le burj calculé à partir des noms n’est pas le même qu’un signe solaire tiré d’une date de naissance ; l’outil peut aussi afficher le signe tropical d’une date de naissance, et les deux peuvent différer.',
    ],
    hoursTitle: 'Heures planétaires',
    hoursParts: [
      'Dans le schéma chaldéen utilisé sur la page des ',
      { href: '/planetary-hours', label: 'heures planétaires' },
      ' page, le temps du lever au coucher du soleil, et celui du coucher au lever suivant, sont chacun divisés en douze heures égales. Les heures suivent un ordre fixe qui se répète : Saturne, Jupiter, Mars, le Soleil, Vénus, Mercure, la Lune. La première heure après le lever du soleil appartient à la planète du jour de la semaine (le Soleil le dimanche, la Lune le lundi, Mars le mardi, Mercure le mercredi, Jupiter le jeudi, Vénus le vendredi, Saturne le samedi). Parce que le jour et la nuit sont chacun coupés en douze, une heure planétaire ne dure en général pas 60 minutes. Le lever et le coucher sont pris au lieu du visiteur ; lorsqu’aucun lieu n’est disponible, l’application utilise La Mecque par défaut, comme ailleurs.',
    ],
    manazilTitle: 'Demeures lunaires (manāzil)',
    manazilParts: [
      'Asrār place la Lune dans l’un de vingt-huit secteurs tropicaux égaux (environ 12°51′ chacun), d’après la longitude écliptique tropicale de la Lune. Cette convention est décrite sur la page des ',
      { href: '/manazil', label: 'demeures lunaires' },
      ' afin que la carte en direct reste cohérente avec l’éphéméride planétaire ; les bornes classiques liées aux étoiles (sidérales) diffèrent. Les noms et le cadre pédagogique s’appuient sur le Kitāb al-Tafhīm d’Al-Bīrūnī, le savoir traditionnel des anwāʾ, et des thèmes classiques d’ikhtiyārāt pour l’adab des activités — non des garanties. Le Coran mentionne les stations de la Lune comme des signes (10:5 ; 36:39–40). La page ne présente pas de recettes de talismans ou de taweez.',
    ],
    ikhtiyaratTitle: 'Ikhtiyārāt et guides du meilleur jour',
    ikhtiyaratP1Parts: [
      'L’outil d’',
      { href: '/ikhtiyarat', label: 'ikhtiyārāt' },
      ' et les pages du ',
      { href: '/best-day-for', label: 'meilleur jour' },
      ' utilisent les mêmes ensembles de règles d’élection dans l’application. Une date ou une plage horaire est notée d’après le jour de la semaine, l’heure planétaire et l’état de la Lune (signe, phase et demeure lunaire). Certaines conditions peuvent écarter une plage, notamment une Lune combuste ou void-of-course et, selon le propos, d’autres contrôles stricts (par exemple la proximité d’une éclipse pour le nikāḥ, ou Mercure rétrograde pour les affaires).',
    ],
    ikhtiyaratP2:
      'Telles que les configurations sont écrites aujourd’hui, le nikāḥ reçoit un bonus de jour le vendredi, le jeudi et le lundi, et un bonus d’heure planétaire aux heures de Vénus, de la Lune ou de Jupiter. Le voyage est bonifié le mercredi et le jeudi ; un emménagement le samedi et le jeudi ; les affaires ou les contrats le mercredi et le jeudi. Ce sont les scores tels qu’ils sont implémentés, proposés pour la réflexion — non une fatwa et non un substitut aux dispositions pratiques, à l’istikhāra ou au conseil. Les dates à venir sur les pages du meilleur jour sont calculées pour un lieu de référence, La Mecque, lorsqu’aucun lieu personnel n’est utilisé.',
    sadaqaTitle: 'Conseils de sadaqah',
    sadaqaP1:
      'La sadaqah est une charité volontaire — donner à ceux qui sont dans le besoin. C’est une valeur largement partagée, et Asrār propose ses suggestions pour la réflexion, non comme une prédiction de ce qu’il faudrait donner ni de ce qui s’ensuivrait. Chacun peut donner à tout moment ; les tableaux ne sont pas des obligations.',
    sadaqaP2Parts: [
      'Les outils Qui Suis-Je ? et burj tiennent séparés deux systèmes de conseils traditionnels de sadaqah : les conseils selon la date de naissance, tirés d’un enseignement traditionnel de sadaqah (source : Serigne Mahdiou Niane) ; et les conseils selon le burj du nom et du nom de la mère, tirés d’un enseignement traditionnel de sadaqah pour ce burj. Le ',
      { href: '/sadaqa', label: 'guide de la sadaqa' },
      ' présente aussi des suggestions par jour de la semaine, mois de naissance et burj, comme une invitation à donner.',
    ],
    quranTitle: 'Texte du Coran',
    quranP:
      'Le libellé arabe du Coran sur Asrār est tenu au texte Tanzil quran-simple. Les pages de partage du Coran chargent l’édition quran-simple depuis api.alquran.cloud. Il s’agit d’un encodage imlāʾī standard du rasm ʿuthmānien ; ce n’est pas une nouvelle édition préparée par Asrār.',
    notTitle: 'Ce que cela n’est pas',
    notParts: [
      'Asrār n’est pas un moteur de prédiction, un service de divination, ni de la géomancie. Il ne délivre pas de fatwas, ne vend ni ne prescrit de talismans ou de taweez, et ne prétend pas connaître l’invisible. Les calculateurs ne remplacent pas les heures de ṣalāh, l’istikhāra, le conseil familial (mashwara) ni la confiance en Dieu (tawakkul). Seul Allah connaît l’invisible. Pour les questions religieuses, consultez des érudits qualifiés. Un exposé plus complet de cette position se trouve sur la page ',
      { href: '/about', label: 'À propos' },
      '.',
    ],
    relatedTitle: 'Pages liées',
    related: [
      { href: '/about', name: 'À propos d’Asrār', desc: 'Ce qu’est l’application, qui la conçoit, et comment nous joindre.' },
      { href: '/abjad', name: 'Calculateur Abjad', desc: 'Valeurs des lettres maghribi (par défaut) et mashriqi.' },
      { href: '/name-and-mother-burj', name: 'Votre burj à partir de votre nom et du nom de votre mère', desc: 'La méthode du reste par 12 décrite ci-dessus.' },
      { href: '/planetary-hours', name: 'Heures planétaires', desc: 'Heures chaldéennes à partir du lever et du coucher du soleil à votre lieu.' },
      { href: '/manazil', name: 'Demeures lunaires (Manāzil)', desc: 'Les 28 stations et la méthode tropicale égale.' },
      { href: '/ikhtiyarat', name: 'Meilleures dates (Ikhtiyārāt)', desc: 'L’outil d’élection qui utilise les règles ci-dessus.' },
      { href: '/sadaqa', name: 'Guide de la sadaqa', desc: 'La charité volontaire envers les personnes dans le besoin, proposée pour la réflexion.' },
    ],
    footerOtherLabel: 'À propos',
    footerOtherHref: '/about',
    rights: 'Tous droits réservés',
  },
  ar: {
    breadcrumbLabel: 'مسار التنقل',
    homeLabel: 'أسرار',
    h1: 'المنهجية',
    lead: METHODOLOGY_LEADS.ar,
    abjadTitle: 'الأبجد (حساب الجُمَّل)',
    abjadParts: [
      'لكل حرف عربي عدد. وجمع حروف الاسم أو العبارة يعطي مجموعها في حساب الأبجد. يعتمد أسرار ترتيب الحروف المغربي افتراضيًا، ويتيح الترتيب المشرقي خيارًا للتبديل. ويختلف الترتيبان في ستة أحرف: الصاد والضاد والسين والظاء والغين والشين. والاسم الذي لا يحتوي هذه الأحرف له المجموع نفسه في الترتيبين. ولا تُحسب علامات التشكيل. وتعرض ',
      { href: '/abjad', label: 'حاسبة الأبجد' },
      ' تفصيل القيمة حرفًا حرفًا في أيٍّ من النظامين.',
    ],
    burjTitle: 'البرج من الاسم واسم الأم',
    burjParts: [
      'تأخذ الحاسبة في صفحة ',
      { href: '/name-and-mother-burj', label: 'برجك من اسمك واسم أمك' },
      ' المجموع الأبجدي المغربي لكل اسم، ثم تجمع المجموعين وتقسم على 12. والباقي (من 1 إلى 12، ويُعدّ الصفر 12) هو البرج، من 1 = الحمل إلى 12 = الحوت. ويرتبط هذا البرج بعنصر ومزاج، وبيوم وذكر وصدقة تعرضها الأداة. وليس البرج المستخرج من الاسمين هو نفسه برج الشمس المستخرج من تاريخ الميلاد؛ ويمكن للأداة أن تعرض البرج الاستوائي من تاريخ الميلاد، وقد يختلف الاثنان.',
    ],
    hoursTitle: 'الساعات الكوكبية',
    hoursParts: [
      'في الترتيب الكلداني المستعمل في صفحة ',
      { href: '/planetary-hours', label: 'الساعات الكوكبية' },
      ' يُقسم الوقت من الشروق إلى الغروب، والوقت من الغروب إلى الشروق التالي، كلٌّ منهما إلى اثنتي عشرة ساعة متساوية. وتتوالى الساعات بترتيب ثابت متكرر: زحل، ثم المشتري، ثم المريخ، ثم الشمس، ثم الزهرة، ثم عطارد، ثم القمر. وتكون الساعة الأولى بعد الشروق لكوكب يوم الأسبوع (الشمس يوم الأحد، والقمر يوم الاثنين، والمريخ يوم الثلاثاء، وعطارد يوم الأربعاء، والمشتري يوم الخميس، والزهرة يوم الجمعة، وزحل يوم السبت). ولأن النهار والليل يُقسم كلٌّ منهما إلى اثنتي عشرة ساعة، لا تكون الساعة الكوكبية في العادة ستين دقيقة. ويُؤخذ الشروق والغروب بحسب موقع الزائر؛ وإذا لم يتوفر موقع، يستعمل التطبيق مكة مرجعًا، كما يفعل في مواضع أخرى.',
    ],
    manazilTitle: 'منازل القمر',
    manazilParts: [
      'يضع أسرار القمر في واحد من ثمانية وعشرين قطاعًا استوائيًا متساويًا (نحو 12°51′ لكل قطاع)، انطلاقًا من طول القمر الاستوائي على دائرة البروج. وهذه الطريقة مبيَّنة في صفحة ',
      { href: '/manazil', label: 'منازل القمر' },
      ' حتى تبقى البطاقة الحية متسقة مع التقويم الفلكي للكواكب؛ أما الحدود التقليدية المرتبطة بالنجوم (السيدرية) فتختلف. وتستمد الأسماء والإطار التعليمي من كتاب التفهيم لأبي الريحان البيروني، ومن تراث الأنواء، ومن موضوعات الاختيارات الكلاسيكية لأدب الأعمال — لا على سبيل الضمان. وقد ذكر القرآن منازل القمر (10:5؛ 36:39–40). ولا تعرض الصفحة وصفات للتمائم أو التعويذات.',
    ],
    ikhtiyaratTitle: 'الاختيارات وأدلة اليوم المناسب',
    ikhtiyaratP1Parts: [
      'تستعمل أداة ',
      { href: '/ikhtiyarat', label: 'الاختيارات' },
      ' وصفحات ',
      { href: '/best-day-for', label: 'اليوم المناسب' },
      ' مجموعات القواعد نفسها في التطبيق. وتُقيَّم التاريخ أو الفترة بحسب يوم الأسبوع، والساعة الكوكبية، وحال القمر (البرج والطور والمنزل). وقد تُستبعد فترة لشروط معينة، منها احتراق القمر أو كونه خارج المسار، وغيرها من الضوابط بحسب الغرض (مثل قرب الكسوف للنكاح، أو رجوع عطارد للتجارة).',
    ],
    ikhtiyaratP2:
      'بحسب الإعدادات الحالية، يُمنح النكاح زيادةً في أيام الجمعة والخميس والاثنين، وزيادةً في ساعات الزهرة أو القمر أو المشتري. ويُمنح السفر زيادةً يومي الأربعاء والخميس؛ والانتقال إلى بيت جديد يومي السبت والخميس؛ والتجارة أو العقود يومي الأربعاء والخميس. هذه هي الدرجات كما هي مطبَّقة، معروضة للتأمّل — وليست فتوى ولا بديلًا عن الترتيب العملي أو الاستخارة أو المشورة. وتُحسب التواريخ القادمة في صفحات اليوم المناسب لموقع مرجعي هو مكة عندما لا يُستعمل موقع شخصي.',
    sadaqaTitle: 'إرشاد الصدقة',
    sadaqaP1:
      'الصدقة عطاء طوعي للمحتاجين. وهي قيمة مشتركة على نطاق واسع، ويعرض أسرار اقتراحاته للتأمّل، لا على سبيل التنبّؤ بما يجب بذله أو بما سيترتب عليه. ولأي أحد أن يتصدق في أي وقت؛ والجداول ليست واجبات.',
    sadaqaP2Parts: [
      'وتُبقي أداتا «من أنا؟» والبرج نظامين تقليديين لإرشاد الصدقة منفصلين: إرشاد تاريخ الميلاد، المستمد من توجيه تقليدي في الصدقة (المصدر: Serigne Mahdiou Niane)؛ وإرشاد برج الاسم واسم الأم، المستمد من توجيه تقليدي في الصدقة لذلك البرج. ويعرض ',
      { href: '/sadaqa', label: 'دليل الصدقة' },
      ' أيضًا اقتراحات بحسب يوم الأسبوع وشهر الميلاد والبرج، تذكيرًا بالعطاء.',
    ],
    quranTitle: 'النص القرآني',
    quranP:
      'يُلتزَم في النص القرآني العربي على أسرار بنص Tanzil quran-simple. وتُحمِّل صفحاتُ مشاركة القرآن طبعةَ quran-simple من api.alquran.cloud. وهذا ترميز إملائي قياسي للرسم العثماني؛ وليس طبعةً جديدةً أعدّها أسرار.',
    notTitle: 'ما ليس كذلك',
    notParts: [
      'أسرار ليس محرّكًا للتنبّؤ، ولا خدمة للتكهّن، ولا علم الرمل. ولا يُصدر فتاوى، ولا يبيع التمائم أو التعويذات ولا يصفها، ولا يدّعي علم الغيب. ولا تغني الحاسبات عن مواقيت الصلاة، ولا عن الاستخارة، ولا عن مشورة الأهل، ولا عن التوكّل على الله. ولا يعلم الغيب إلا الله. وللأحكام الشرعية يُرجع إلى أهل العلم المؤهّلين. وتفصيل هذا الموقف في صفحة ',
      { href: '/about', label: 'النبذة' },
      '.',
    ],
    relatedTitle: 'صفحات ذات صلة',
    related: [
      { href: '/about', name: 'نبذة عن أسرار', desc: 'ما هو التطبيق، ومن يُعدّه، وكيف يمكن التواصل.' },
      { href: '/abjad', name: 'حاسبة الأبجد', desc: 'قيم الحروف في الترتيب المغربي (الافتراضي) والمشرقي.' },
      { href: '/name-and-mother-burj', name: 'برجك من اسمك واسم أمك', desc: 'طريقة الباقي على 12 المبيَّنة أعلاه.' },
      { href: '/planetary-hours', name: 'الساعات الكوكبية', desc: 'الساعات الكلدانية من الشروق والغروب في موقعك.' },
      { href: '/manazil', name: 'منازل القمر', desc: 'المنازل الثماني والعشرون والطريقة الاستوائية المتساوية.' },
      { href: '/ikhtiyarat', name: 'التواريخ المناسبة (الاختيارات)', desc: 'أداة الاختيار التي تستعمل القواعد أعلاه.' },
      { href: '/sadaqa', name: 'دليل الصدقة', desc: 'صدقة طوعية للمحتاجين، معروضة للتأمّل.' },
    ],
    footerOtherLabel: 'النبذة',
    footerOtherHref: '/about',
    rights: 'جميع الحقوق محفوظة',
  },
  ur: {
    breadcrumbLabel: 'راہِ صفحات',
    homeLabel: 'اسرار',
    h1: 'طریقہ کار',
    lead: METHODOLOGY_LEADS.ur,
    abjadTitle: 'ابجد (حسابِ جمل)',
    abjadParts: [
      'عربی کے ہر حرف کی ایک عددی قیمت ہے۔ نام یا عبارت کے حروف جوڑنے سے اس کا ابجدی مجموعہ بنتا ہے۔ اسرار بطورِ طے شدہ ترتیبِ مغرب استعمال کرتا ہے، اور ترتیبِ مشرق کو ایک متبادل کے طور پر دیتا ہے۔ دونوں ترتیبیں چھ حروف میں مختلف ہیں: صاد، ضاد، سین، ظاء، غین اور شین۔ جو نام ان حروف کو استعمال نہ کرے اس کا مجموعہ دونوں میں ایک جیسا ہوتا ہے۔ اعراب شمار نہیں ہوتے۔ ',
      { href: '/abjad', label: 'ابجد کیلکولیٹر' },
      ' دونوں نظاموں میں حرف بہ حرف تفصیل دکھاتا ہے۔',
    ],
    burjTitle: 'نام اور والدہ کے نام سے برج',
    burjParts: [
      'صفحہ ',
      { href: '/name-and-mother-burj', label: 'اپنے نام اور والدہ کے نام سے برج' },
      ' کا کیلکولیٹر ہر نام کا ابجدِ مغرب مجموعہ لیتا ہے، دونوں جوڑتا ہے، اور 12 پر تقسیم کرتا ہے۔ باقی (1 سے 12، اور 0 کو 12 شمار کیا جاتا ہے) برج ہے، 1 = حمل سے 12 = حوت تک۔ یہ برج ایک عنصر اور مزاج سے، اور ایک دن، ذکر اور صدقہ سے جڑا ہوتا ہے جو ٹول دکھاتا ہے۔ ناموں سے نکلا برج تاریخِ پیدائش کے سورجی برج جیسا نہیں؛ ٹول تاریخِ پیدائش سے استوائی برج بھی دکھا سکتا ہے، اور دونوں مختلف ہو سکتے ہیں۔',
    ],
    hoursTitle: 'ساعاتِ کواکب',
    hoursParts: [
      'صفحہ ',
      { href: '/planetary-hours', label: 'ساعاتِ کواکب' },
      ' پر استعمال ہونے والی کلدانی ترتیب میں طلوع سے غروب تک کا وقت، اور غروب سے اگلے طلوع تک کا وقت، دونوں کو بارہ برابر ساعتوں میں تقسیم کیا جاتا ہے۔ ساعتیں ایک مقررہ دہرائی جانے والی ترتیب پر چلتی ہیں: زحل، مشتری، مریخ، سورج، زہرہ، عطارد، چاند۔ طلوع کے بعد پہلی ساعت اُس دن کے سیارے کی ہوتی ہے (اتوار کو سورج، پیر کو چاند، منگل کو مریخ، بدھ کو عطارد، جمعرات کو مشتری، جمعہ کو زہرہ، ہفتہ کو زحل)۔ چونکہ دن اور رات دونوں بارہ حصوں میں بٹتے ہیں، کواکبی ساعت عام طور پر ساٹھ منٹ نہیں ہوتی۔ طلوع و غروب زائر کے مقام کے مطابق لیے جاتے ہیں؛ جب مقام دستیاب نہ ہو تو ایپ، جیسا کہ اور جگہوں پر، مکہ کو بنیاد بناتی ہے۔',
    ],
    manazilTitle: 'منازلِ قمر',
    manazilParts: [
      'اسرار چاند کو اٹھائیس برابر استوائی حصوں میں سے ایک میں رکھتا ہے (تقریباً 12°51′ فی حصہ)، چاند کے استوائی فلکی طول البلد سے۔ یہ طریقہ ',
      { href: '/manazil', label: 'منازلِ قمر' },
      ' کے صفحے پر درج ہے تاکہ زندہ کارڈ سیاروں کی تقویم سے مطابقت رکھے؛ ستاروں سے بندھی کلاسیکی (سائڈرل) حدیں مختلف ہیں۔ نام اور تعلیمی انداز البیرونی کی کتاب التفہیم، روایتی انواء، اور اختیارات کے کلاسیکی مضامین سے لیے گئے ہیں — اعمال کے ادب کے لیے، ضمانت کے طور پر نہیں۔ قرآن نے چاند کی منزلوں کا ذکر کیا ہے (10:5؛ 36:39–40)۔ یہ صفحہ تمائم یا تعویذ کی ترکیبیں پیش نہیں کرتا۔',
    ],
    ikhtiyaratTitle: 'اختیارات اور بہتر دن کی رہنمائی',
    ikhtiyaratP1Parts: [
      'ٹول ',
      { href: '/ikhtiyarat', label: 'اختیارات' },
      ' اور ',
      { href: '/best-day-for', label: 'بہتر دن' },
      ' کے صفحات ایپ میں قواعد کے وہی مجموعے استعمال کرتے ہیں۔ تاریخ یا وقت کا دورانیہ ہفتے کے دن، کواکبی ساعت، اور چاند کی حالت (برج، شکل اور منزل) سے جاچا جاتا ہے۔ کچھ حالات ایک دورانیے کو خارج کر سکتے ہیں، جیسے محترق یا خارجِ مسیر چاند، اور مقصد کے مطابق دیگر سخت پڑتالیں (مثلاً نکاح کے لیے گرہن کی قربت، یا کاروبار کے لیے عطارد کا رجوع)۔',
    ],
    ikhtiyaratP2:
      'موجودہ ترتیبات کے مطابق نکاح کو جمعہ، جمعرات اور پیر پر دن کا اضافہ ملتا ہے، اور زہرہ، چاند یا مشتری کی ساعتوں میں ساعت کا اضافہ۔ سفر کو بدھ اور جمعرات پر اضافہ ملتا ہے؛ نئے گھر میں منتقلی کو ہفتہ اور جمعرات پر؛ کاروبار یا معاہدوں کو بدھ اور جمعرات پر۔ یہ وہی درجات ہیں جو نافذ ہیں، غور و فکر کے لیے پیش کیے گئے — فتویٰ نہیں، اور عملی بندوبست، استخارہ یا مشورے کا بدل نہیں۔ جب ذاتی مقام استعمال نہ ہو تو بہتر دن کے صفحات کی آنے والی تاریخیں حوالہ مقام مکہ کے مطابق نکالی جاتی ہیں۔',
    sadaqaTitle: 'صدقہ کی رہنمائی',
    sadaqaP1:
      'صدقہ رضاکارانہ خیرات ہے — ضرورت مندوں کو دینا۔ یہ ایک عام مشترکہ قدر ہے، اور اسرار اپنی تجاویز غور و فکر کے لیے پیش کرتا ہے، اس پیش گوئی کے طور پر نہیں کہ کیا دینا لازم ہے یا اس کے بعد کیا ہوگا۔ کوئی بھی کسی بھی وقت دے سکتا ہے؛ جداول فرائض نہیں۔',
    sadaqaP2Parts: [
      '«میں کون ہوں؟» اور برج کے ٹولز صدقہ کی روایتی رہنمائی کے دو نظام الگ رکھتے ہیں: تاریخِ پیدائش کی رہنمائی، جو روایتی صدقہ کی ہدایت سے لی گئی ہے (ماخذ: Serigne Mahdiou Niane)؛ اور نام و والدہ کے نام کے برج کی رہنمائی، جو اسی برج کی روایتی صدقہ کی ہدایت سے لی گئی ہے۔ ',
      { href: '/sadaqa', label: 'صدقہ گائیڈ' },
      ' ہفتے کے دن، مہینہ پیدائش اور برج کے مطابق تجاویز بھی عطا کی دعوت کے طور پر پیش کرتا ہے۔',
    ],
    quranTitle: 'قرآن کا متن',
    quranP:
      'اسرار پر قرآن کا عربی متن Tanzil quran-simple کے مطابق رکھا جاتا ہے۔ قرآن کے شیئر صفحات api.alquran.cloud سے quran-simple ایڈیشن لاتے ہیں۔ یہ عثمانی رسم کی معیاری املائی صورت ہے؛ اسرار کی تیار کردہ کوئی نئی اشاعت نہیں۔',
    notTitle: 'یہ کیا نہیں ہے',
    notParts: [
      'اسرار پیش گوئی کا انجن نہیں، فال کی خدمت نہیں، اور علم الرمل نہیں۔ یہ فتویٰ نہیں دیتا، تعویذ نہیں بیچتا اور نہ تجویز کرتا، اور غیب کا دعویٰ نہیں کرتا۔ کیلکولیٹر نماز کے اوقات، استخارہ، خاندانی مشورے یا توکل کی جگہ نہیں لیتے۔ غیب کا علم صرف اللہ کو ہے۔ شرعی مسائل میں اہل علم سے رجوع کریں۔ اس موقف کی پوری بات ',
      { href: '/about', label: 'تعارف' },
      ' کے صفحے پر ہے۔',
    ],
    relatedTitle: 'متعلقہ صفحات',
    related: [
      { href: '/about', name: 'اسرار کا تعارف', desc: 'ایپ کیا ہے، کس نے بنائی، اور کیسے رابطہ کریں۔' },
      { href: '/abjad', name: 'ابجد کیلکولیٹر', desc: 'ابجدِ مغرب (طے شدہ) اور ابجدِ مشرق کی حرفی قیمتیں۔' },
      { href: '/name-and-mother-burj', name: 'اپنے نام اور والدہ کے نام سے برج', desc: 'اوپر بیان کردہ، بارہ پر تقسیم کر کے باقی نکالنے کا طریقہ۔' },
      { href: '/planetary-hours', name: 'ساعاتِ کواکب', desc: 'آپ کے مقام پر طلوع و غروب سے کلدانی ساعتیں۔' },
      { href: '/manazil', name: 'منازلِ قمر', desc: 'اٹھائیس منزلیں اور برابر استوائی طریقہ۔' },
      { href: '/ikhtiyarat', name: 'موزوں تاریخیں (اختیارات)', desc: 'وہ انتخابی ٹول جو اوپر بیان شدہ قواعد استعمال کرتا ہے۔' },
      { href: '/sadaqa', name: 'صدقہ گائیڈ', desc: 'ضرورت مندوں کے لیے رضاکارانہ خیرات، غور و فکر کے لیے۔' },
    ],
    footerOtherLabel: 'تعارف',
    footerOtherHref: '/about',
    rights: 'جملہ حقوق محفوظ ہیں',
  },
};

/** Locale-aware internal href; falls back to the English path when that locale has no page. */
export function localizeInfoHref(enPath: string, lang: InfoLocale): string {
  if (lang === 'en') return enPath;
  return equivalentLocalePath(enPath, lang) ?? enPath;
}

export function infoHomeHref(lang: InfoLocale): string {
  return localizeInfoHref('/', lang);
}
