/**
 * Chrome strings for date-of-birth and name+mother sadaqah result sections.
 * Arabic/Urdu values marked catalog are copied verbatim from ar-ui.json / ur-ui.json.
 */
import type { Language } from './translations';

export type SadaqahUiCopy = {
  monthlyTitle: string;
  monthlySubtitle: string;
  frequency: string;
  context: string;
  traditionalPractice: string;
  spiritualBenefits: string;
  modernApplications: string;
  gettingStarted: string;
  gettingStartedSadaqah: string;
  tipMonthlyReminder: string;
  tipStartSmall: string;
  tipIntention: string;
  tipGiveSecretly: string;
  tipCalendarReminder: string;
  tipModernAlternative: string;
  tipNiyyahBefore: string;
  lifetimeTitle: string;
  lifetimeOnce: string;
  lifetimeIntro: string;
  traditionalGuidance: string;
  requiredComponents: string;
  optimalTiming: string;
  spiritualSignificance: string;
  generalForms: string;
  specificForms: string;
  bestTiming: string;
  summary: string;
  teachingVideo: string;
  videoAttribution: string;
  dobIntro: string;
  accordingToNiane: string;
  sadaqahGuidance: string;
};

const COPY: Record<Language, SadaqahUiCopy> = {
  en: {
    monthlyTitle: 'Monthly Spiritual Balance',
    monthlySubtitle: 'Regular practice for ongoing spiritual growth',
    frequency: 'Frequency',
    context: 'Context',
    traditionalPractice: 'Traditional Practice',
    spiritualBenefits: 'Spiritual Benefits',
    modernApplications: 'Modern Applications',
    gettingStarted: 'Getting Started',
    gettingStartedSadaqah: 'Getting Started with Sadaqah',
    tipMonthlyReminder: 'Set a monthly reminder for your regular sadaqah',
    tipStartSmall: 'Start small and increase gradually as you establish the habit',
    tipIntention: 'The intention (niyyah) is as important as the action itself',
    tipGiveSecretly: 'Give secretly when possible, as it purifies the heart',
    tipCalendarReminder: 'Set a monthly reminder on your calendar',
    tipModernAlternative: 'Choose one modern alternative that fits your lifestyle',
    tipNiyyahBefore: 'Make intention (niyyah) before each practice',
    lifetimeTitle: 'Sacred Lifetime Offering',
    lifetimeOnce: 'Performed ONCE in Your Lifetime',
    lifetimeIntro:
      'This is a profound spiritual commitment that should be undertaken with careful preparation and sincere intention.',
    traditionalGuidance: 'Traditional Guidance',
    requiredComponents: 'Required Components',
    optimalTiming: 'Optimal Timing',
    spiritualSignificance: 'Spiritual Significance',
    generalForms: 'General Forms',
    specificForms: 'Specific Forms',
    bestTiming: 'Best Timing',
    summary: 'Summary',
    teachingVideo: 'Teaching Video (in Wolof)',
    videoAttribution: 'By Serigne Mahdiou Niane — spoken in Wolof',
    dobIntro:
      'Traditional charity forms associated with your sign, for ongoing blessings and spiritual balance.',
    accordingToNiane: 'According to the teachings of Serigne Mahdiou Niane',
    sadaqahGuidance: 'Sadaqah Guidance',
  },
  fr: {
    monthlyTitle: 'Équilibre Spirituel Mensuel',
    monthlySubtitle: 'Pratique régulière pour la croissance spirituelle continue',
    frequency: 'Fréquence',
    context: 'Contexte',
    traditionalPractice: 'Pratique Traditionnelle',
    spiritualBenefits: 'Bienfaits Spirituels',
    modernApplications: 'Applications Modernes',
    gettingStarted: 'Pour Commencer',
    gettingStartedSadaqah: 'Commencer avec la Sadaqah',
    tipMonthlyReminder: 'Définissez un rappel mensuel pour votre sadaqah régulière',
    tipStartSmall: "Commencez petit et augmentez progressivement à mesure que vous établissez l'habitude",
    tipIntention: "L'intention (niyyah) est aussi importante que l'action elle-même",
    tipGiveSecretly: 'Donnez en secret quand c\'est possible, car cela purifie le cœur',
    tipCalendarReminder: 'Définissez un rappel mensuel dans votre calendrier',
    tipModernAlternative: 'Choisissez une alternative moderne qui correspond à votre style de vie',
    tipNiyyahBefore: "Faites l'intention (niyyah) avant chaque pratique",
    lifetimeTitle: 'Offrande Sacrée de la Vie',
    lifetimeOnce: 'Effectué UNE SEULE FOIS dans Votre Vie',
    lifetimeIntro:
      'Ceci est un engagement spirituel profond qui doit être entrepris avec une préparation soigneuse et une intention sincère.',
    traditionalGuidance: 'Guidance Traditionnelle',
    requiredComponents: 'Composants Requis',
    optimalTiming: 'Moment Optimal',
    spiritualSignificance: 'Signification Spirituelle',
    generalForms: 'Formes Générales',
    specificForms: 'Formes Spécifiques',
    bestTiming: 'Meilleur Moment',
    summary: 'Résumé',
    teachingVideo: "Vidéo d'Enseignement (en Wolof)",
    videoAttribution: 'Par Serigne Mahdiou Niane — parlé en wolof',
    dobIntro:
      'Formes de charité traditionnelles associées à votre signe, pour des bénédictions continues et l\'équilibre spirituel.',
    accordingToNiane: 'Selon les enseignements de Serigne Mahdiou Niane',
    sadaqahGuidance: 'Guidance Sadaqah',
  },
  ar: {
    monthlyTitle: 'التوازن الروحي الشهري',
    monthlySubtitle: 'ممارسة منتظمة للنموّ الروحي المستمرّ',
    frequency: 'عدد المرات',
    context: 'السياق',
    traditionalPractice: 'الممارسة التقليدية',
    spiritualBenefits: 'الفوائد الروحية',
    modernApplications: 'التطبيقات الحديثة',
    gettingStarted: 'البداية',
    gettingStartedSadaqah: 'البدء بالصدقة',
    tipMonthlyReminder: 'اضبط تذكيرًا شهريًا لصدقتك المنتظمة',
    tipStartSmall: 'ابدأ بالقليل وزِد تدريجيًا حتى تثبت العادة',
    tipIntention: 'النيّة لا تقلّ أهمّية عن العمل نفسه',
    tipGiveSecretly: 'أعطِ سرًّا ما أمكن، فذلك يطهّر القلب',
    tipCalendarReminder: 'ضع تذكيرًا شهريًا في تقويمك',
    tipModernAlternative: 'اختر بديلًا حديثًا واحدًا يناسب نمط حياتك',
    tipNiyyahBefore: 'اعقد النيّة قبل كل ممارسة',
    lifetimeTitle: 'صدقة العمر',
    lifetimeOnce: 'تُؤدّى مرّة واحدة في العمر',
    lifetimeIntro: 'هذا التزام روحي عميق ينبغي أن يُقدَم عليه باستعداد وعناية ونيّة صادقة.',
    traditionalGuidance: 'الإرشادات التقليدية',
    requiredComponents: 'المكوّنات المطلوبة',
    optimalTiming: 'الوقت الأمثل',
    spiritualSignificance: 'الدلالة الروحية',
    generalForms: 'أشكال عامة',
    specificForms: 'أشكال محددة',
    bestTiming: 'أفضل توقيت',
    summary: 'الملخص',
    teachingVideo: 'مقطع تعليمي (بالولوفية)',
    videoAttribution: 'للشيخ سرين مهديو نيان — بالولوفية',
    dobIntro: 'صور الصدقة التقليدية المرتبطة ببرجك، للبركة الدائمة والتوازن الروحي.',
    accordingToNiane: 'بحسب تعاليم الشيخ سرين مهديو نيان',
    sadaqahGuidance: 'إرشاد الصدقة',
  },
  ur: {
    monthlyTitle: 'ماہانہ روحانی توازن',
    monthlySubtitle: 'مسلسل روحانی نشوونما کے لیے باقاعدہ معمول',
    frequency: 'تکرار',
    context: 'سیاق',
    traditionalPractice: 'روایتی معمول',
    spiritualBenefits: 'روحانی فوائد',
    modernApplications: 'جدید صورتیں',
    gettingStarted: 'آغاز کیسے کریں',
    gettingStartedSadaqah: 'صدقہ شروع کرنے کے لیے',
    tipMonthlyReminder: 'اپنے باقاعدہ صدقے کے لیے ماہانہ یاد دہانی لگائیں',
    tipStartSmall: 'چھوٹے سے آغاز کریں اور عادت بننے کے ساتھ آہستہ آہستہ بڑھائیں',
    tipIntention: 'نیت عمل جتنی ہی اہم ہے',
    tipGiveSecretly: 'جہاں ممکن ہو چھپا کر دیں، کیونکہ یہ دل کو پاک کرتا ہے',
    tipCalendarReminder: 'اپنے کیلنڈر پر ماہانہ یاددہانی لگائیں',
    tipModernAlternative: 'اپنے طرزِ زندگی کے مطابق ایک جدید متبادل منتخب کریں',
    tipNiyyahBefore: 'ہر معمول سے پہلے نیت کریں',
    lifetimeTitle: 'عمر بھر کا خاص صدقہ',
    lifetimeOnce: 'زندگی میں صرف ایک بار ادا کیا جائے',
    lifetimeIntro: 'یہ ایک گہرا روحانی عمل ہے جسے پوری تیاری اور خلوصِ نیت کے ساتھ انجام دینا چاہیے۔',
    traditionalGuidance: 'روایتی رہنمائی',
    requiredComponents: 'ضروری اجزا',
    optimalTiming: 'موزوں وقت',
    spiritualSignificance: 'روحانی اہمیت',
    generalForms: 'عمومی صورتیں',
    specificForms: 'مخصوص صورتیں',
    bestTiming: 'بہترین وقت',
    summary: 'خلاصہ',
    teachingVideo: 'تعلیمی ویڈیو (وولوف زبان میں)',
    videoAttribution: 'سیرین مہدیو نیان کی جانب سے — وولوف زبان میں',
    dobIntro: 'آپ کے برج سے وابستہ روایتی خیرات کی صورتیں، مسلسل برکت اور روحانی توازن کے لیے۔',
    accordingToNiane: 'سیرین مہدیو نیان کی تعلیمات کے مطابق',
    sadaqahGuidance: 'صدقے کی رہنمائی',
  },
};

export function sadaqahUiCopy(lang: Language): SadaqahUiCopy {
  return COPY[lang] ?? COPY.en;
}

export const SADAQAH_UI_COPY = COPY;
