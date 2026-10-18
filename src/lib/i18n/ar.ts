/* eslint-disable */
/**
 * Arabic UI strings (partial). Generated from the Asrariya mobile app's Arabic
 * strings (zaibaitech/asrar-mobile constants/translations.ts), matched to the web
 * keys by key path (same English source) or by identical English text.
 * Anything missing here falls back to English at runtime (see ../translations.ts).
 * Divine Names, Qur'an and du'a stay in Arabic in every language.
 */
import type { DeepPartial } from './types';
import type { en } from './en';

export const ar: DeepPartial<typeof en> = {
  abjadSystem: {
    note: "المغربي (المغرب العربي والأندلس وغرب أفريقيا) · المشرقي (مصر والمشرق وسائر آسيا)", // TODO review (Language Reviewer batch 5 wording; not from mobile)
  },

  nav: {
    home: "الرئيسية",
    calculator: "الحاسبة",
    letterCalculator: "حاسبة الحروف",
    compatibility: "التوافق",
    planetaryHours: "الساعات الكوكبية",
    about: "حول التطبيق",
    guidance: "الإرشاد",
    menu: "القائمة",
    planetary: "🪐 التوافق الكوكبي:",
    advanced: "من أنا؟", // TODO review (hand draft, not from mobile)
  },
  common: {
    calculate: "احسب",
    clear: "مسح",
    submit: "إرسال",
    cancel: "إلغاء",
    close: "إغلاق",
    save: "حفظ",
    loading: "جارٍ التحميل...",
    error: "خطأ",
    success: "نجاح",
    name: "الاسم",
    date: "التاريخ",
    location: "الموقع",
    enterName: "أدخل الاسم",
    selectDate: "اختر التاريخ",
    results: "النتائج",
    history: "السجل",
    favorites: "المفضلة",
    compare: "مقارنة",
    delete: "حذف",
    copy: "نسخ",
    copied: "تم النسخ!",
    viewAll: "عرض الكل",
    hideAll: "إخفاء الكل",
    expand: "توسيع",
    collapse: "طي",
    next: "التالي",
    back: "رجوع",
    skip: "تخطي",
    edit: "تعديل",
    upload: "رفع",
    remove: "إزالة",
    optional: "اختياري",
  },
  profile: {
    title: "ملفي الشخصي",
    setup: "إعداد الملف الشخصي",
    edit: "تعديل الملف الشخصي",
    view: "عرض الملف الشخصي",
    completion: "اكتمال الملف الشخصي",
    completeYourProfile: "أكمل ملفك الشخصي",
    profileIncomplete: "ملفك الشخصي غير مكتمل. أكمله لتخصيص تجربتك.",
    steps: {
      basicInfo: "المعلومات الأساسية",
      birthDate: "تاريخ الميلاد",
      location: "الموقع",
      avatar: "صورة الملف الشخصي",
    },
    fullName: "الاسم الكامل",
    fullNamePlaceholder: "أدخل اسمك الكامل",
    fullNameHelper: "يُستخدم لحسابات الاسم والتحيات المخصصة",
    dateOfBirth: "تاريخ الميلاد",
    dateOfBirthHelper: "مطلوب لحسابات القدر الدقيقة",
    locationName: "الموقع",
    locationPlaceholder: "المدينة، البلد",
    locationHelper: "يُستخدم لحسابات الساعات الكوكبية بناءً على منطقتك الزمنية",
    detectLocation: "حدّد موقعي",
    detectingLocation: "جارٍ تحديد الموقع...",
    language: "اللغة المفضّلة",
    languageHelper: "اختر لغتك المفضّلة للتطبيق",
    timezone: "المنطقة الزمنية",
    timezoneHelper: "تُكتشف تلقائيًا من موقعك",
    profilePicture: "صورة الملف الشخصي",
    uploadPhoto: "رفع صورة",
    changePhoto: "تغيير الصورة",
    removePhoto: "إزالة الصورة",
    photoHelper: "JPG أو PNG أو WebP (بحد أقصى 2 ميغابايت)",
    dragDropPhoto: "اسحب صورتك وأفلتها هنا، أو انقر للتصفح",
    photoUploading: "جارٍ الرفع...",
    photoUploadSuccess: "تم رفع الصورة بنجاح!",
    photoUploadError: "فشل رفع الصورة. يرجى المحاولة مرة أخرى.",
    photoTooLarge: "الصورة كبيرة جدًا. الحد الأقصى للحجم 2 ميغابايت.",
    photoInvalidType: "نوع ملف غير صالح. يرجى رفع JPG أو PNG أو WebP.",
    saveSuccess: "تم حفظ الملف الشخصي بنجاح!",
    saveError: "فشل حفظ الملف الشخصي. يرجى المحاولة مرة أخرى.",
    setupComplete: "اكتمل إعداد الملف الشخصي!",
    setupWelcome: "مرحبًا! لنُعِدّ ملفك الشخصي لتخصيص تجربتك.",
    percentComplete: "% مكتمل",
    almostDone: "أوشكت على الانتهاء!",
    getStarted: "ابدأ بإكمال ملفك الشخصي",
    completeSetup: "إتمام الإعداد",
    saveChanges: "حفظ التغييرات",
    cancelEdit: "إلغاء",
    skipForNow: "تخطَّ الآن",
    memberSince: "عضو منذ",
    lastSeen: "آخر ظهور",
    noProfileYet: "لا توجد معلومات ملف شخصي بعد",
    createProfile: "إنشاء ملف شخصي",
  },
  history: {
    title: "السجل",
    recentCalculations: "الحسابات الأخيرة",
    noCalculationsYet: "لا توجد حسابات بعد",
    clearAll: "مسح الكل",
    confirmClear: "مسح كل السجل؟ لا يمكن التراجع عن هذا.",
    favorites: "المفضلة",
    recent: "الأخيرة",
  },
  comparison: {
    elementalHarmony: "الانسجام العنصري",
    planet: "الكوكب",
    day: "نهار",
    bestHours: "أفضل الساعات",
    title: "قارن بين اسمين", // TODO review (hand draft, not from mobile)
    firstName: "الاسم/النص الأول", // TODO review (hand draft, not from mobile)
    secondName: "الاسم/النص الثاني", // TODO review (hand draft, not from mobile)
    analysis: "التحليل", // TODO review (machine draft)
  },
  dailyReflection: {
    dailyBadge: "يومي",
    title: "التأمّل الروحي اليومي", // TODO review (hand draft, not from mobile)
    todaysReflection: "تأمّل اليوم", // TODO review (hand draft, not from mobile)
    verseOfTheDay: "آية اليوم", // TODO review (hand draft, not from mobile)
    divineNameForReflection: "اسم من الأسماء الحسنى للتأمّل", // TODO review (hand draft, not from mobile)
    optimalReflectionTimes: "أفضل أوقات التأمّل", // TODO review (hand draft, not from mobile)
    suggestedCounts: "الأعداد المقترحة", // TODO review (hand draft, not from mobile)
    expandReflection: "وسّع التأمّل", // TODO review (hand draft, not from mobile)
    collapseReflection: "اطوِ التأمّل", // TODO review (hand draft, not from mobile)
  },
  ramadan: {
    completed: "مكتمل",
    remaining: "متبقٍ",
    planBalanced: "توازن",
    planSteady: "ثابت",
    planCustom: "مخصص",
    sessionFajr: "الفجر",
    sessionDhuhr: "الظهر",
    sessionAsr: "العصر",
    sessionCustom: "أخرى",
    addCount: "إضافة",
    signIn: "تسجيل الدخول",
    addChallenge: {
      salawatTitle: "الصلاة على النبي",
      divineNameTitle: "الاسم الإلهي",
      customTitle: "ورد مخصص",
      customWird: "ورد مخصص",
      back: "رجوع",
      chooseSalawat: "اختر صيغة صلاة على النبي",
      recommended: "موصى به:",
      perDay: "يوميًا",
      transliteration: "النقحرة",
      chooseDivineName: "اختر اسمًا إلهيًا",
      arabicText: "النص العربي",
      dailyTarget: "الهدف اليومي",
      title: "أضف تحدّي ورد", // TODO review (hand draft, not from mobile)
      subtitle: "اختر وردًا لمتابعة عباداتك اليومية", // TODO review (hand draft, not from mobile)
      salawatDescription: "الصلاة على النبي ﷺ", // TODO review (hand draft, not from mobile)
      propheticNamesTitle: "الأسماء النبوية المئتان وواحد", // TODO review (hand draft, not from mobile)
      propheticNamesDescription: "سعة الرزق · ممارسة صباحية لسبعة أيام", // TODO review (hand draft, not from mobile)
      debtReliefTitle: "ورد قضاء الدَّين", // TODO review (hand draft, not from mobile)
      debtReliefDescription: "1000 مرة بعد العشاء لقضاء الدَّين", // TODO review (hand draft, not from mobile)
      divineNameDescription: "اذكر اسمًا من أسماء الله الحسنى", // TODO review (hand draft, not from mobile)
      customDescription: "أضف ذكرك أو وردك الخاص", // TODO review (hand draft, not from mobile)
      special: "خاصة", // TODO review (machine draft)
      alreadyAdded: "أضيفت بالفعل", // TODO review (machine draft)
      tapToPreview: "اضغط لمعاينة النص كاملًا", // TODO review (hand draft, not from mobile)
      viewFullText: "عرض النص كاملًا ←", // TODO review (hand draft, not from mobile)
      showMeaning: "إظهار معنى", // TODO review (machine draft)
      recommendedDailyTarget: "الهدف اليومي الموصى به", // TODO review (machine draft)
      alreadyAddedButton: "أضيفت بالفعل", // TODO review (machine draft)
      selectThisSalawat: "اختر هذه الصلاة", // TODO review (hand draft, not from mobile)
      addDivineName: "أضف تحدّي اسم من الأسماء الحسنى", // TODO review (hand draft, not from mobile)
      titleLabel: "العنوان *",
      titlePlaceholder: "مثال: التسبيح", // TODO review (hand draft, not from mobile)
      ramadanTarget: "المجموع 30 يوما", // TODO review (machine draft)
      addCustomWird: "أضف وردًا خاصًا", // TODO review (hand draft, not from mobile)
      steps: "الخطوات:", // TODO review (machine draft)
      names: "الأسماء", // TODO review (machine draft)
      spiritualPurpose: "المقصد الروحي", // TODO review (hand draft, not from mobile)
    },
    title: "تحدّي الاستغفار في رمضان", // TODO review (hand draft, not from mobile)
    subtitle: "أتمّ 124,000 استغفار في رمضان هذا", // TODO review (hand draft, not from mobile)
    contextNote: "من ملأ رمضانه بالاستغفار جعل الله له من كل ضيقٍ مخرجًا.", // TODO review (hand draft, not from mobile)
    totalTarget: "المجموع المستهدف", // TODO review (machine draft)
    todaysTarget: "هدف اليوم", // TODO review (hand draft, not from mobile)
    todaysProgress: "تقدّم اليوم", // TODO review (hand draft, not from mobile)
    remainingToday: "المتبقّي اليوم", // TODO review (hand draft, not from mobile)
    overallProgress: "التقدّم الإجمالي", // TODO review (hand draft, not from mobile)
    ramadanDay: "يوم رمضان", // TODO review (hand draft, not from mobile)
    choosePlan: "اختر خطة الوتيرة", // TODO review (hand draft, not from mobile)
    choosePlanDesc: "اختر كيف توزّع أذكارك على أيام الشهر", // TODO review (hand draft, not from mobile)
    planIntensive: "المكثف", // TODO review (machine draft)
    planIntensiveDesc: "12,400 يوميًا — الإتمام في 10 أيام", // TODO review (hand draft, not from mobile)
    planBalancedDesc: "6,200 يوميًا — الإتمام في 20 يومًا", // TODO review (hand draft, not from mobile)
    planSteadyDesc: "نحو 4,134 يوميًا — على مدى 30 يومًا", // TODO review (hand draft, not from mobile)
    planLight: "الضوء", // TODO review (machine draft)
    planLightDesc: "3,100 يوميًا — وتيرة ممتدة على 40 يومًا", // TODO review (hand draft, not from mobile)
    planCustomDesc: "حدّد هدفك اليومي", // TODO review (hand draft, not from mobile)
    customDailyGoal: "هدفك اليومي", // TODO review (machine draft)
    selectPlan: "اختر الخطة", // TODO review (hand draft, not from mobile)
    changePlan: "خطة التغيير", // TODO review (machine draft)
    logSession: "سجّل الجلسة", // TODO review (hand draft, not from mobile)
    sessionDuha: "الضحى / الصباح", // TODO review (hand draft, not from mobile)
    sessionMaghrib: "المغرب / الإفطار", // TODO review (hand draft, not from mobile)
    sessionIsha: "العشاء / التراويح", // TODO review (hand draft, not from mobile)
    completionMessage: "ما شاء الله! لقد أتممت تحدّي الـ124,000 استغفار!", // TODO review (hand draft, not from mobile)
    completionDua: "تقبّل الله استغفارك، وغفر ذنوبك، ويسّر لك أمورك كلها. آمين.", // TODO review (hand draft, not from mobile)
    todayComplete: "هدف اليوم اكتمل ✓", // TODO review (machine draft)
    surplus: "الزيادة", // TODO review (hand draft, not from mobile)
    dayLog: "السجل اليومي", // TODO review (hand draft, not from mobile)
    noEntries: "لا توجد إدخالات اليوم بعد", // TODO review (hand draft, not from mobile)
    signInPrompt: "سجّل الدخول لمتابعة تقدّمك في استغفار رمضان", // TODO review (hand draft, not from mobile)
    ramadanBadge: "رمضان", // TODO review (hand draft, not from mobile)
    heatmapTitle: "التقدم الشهري", // TODO review (machine draft)
    streakDays: "أيام متتالية",
    quickTap: "إضافة سريعة", // TODO review (hand draft, not from mobile)
    arabic: "أَسْتَغْفِرُ اللهَ", // same as EN (transliteration/Arabic/brand)
    transliteration: "Astaghfirullāh", // same as EN (transliteration/Arabic/brand)
  },
  propheticNames: {
    duration: "المدة",
    days: "أيام",
    day: "نهار",
    morning: "الصباح",
    evening: "المساء",
    sessionsComplete: "أيام",
    dailyPractice: "الممارسة اليومية",
    totalPractices: "الإجمالي",
    resetAll: "إعادة تعيين الكل",
    reset: "إعادة تعيين",
    close: "إغلاق",
    tomorrowMorning: "الصباح",
    source: "المصدر",
    remove: "إزالة",
    share: "مشاركة",
    whatsapp: "واتساب",
    copyLink: "نسخ الرابط",
    title: "الأسماء المئتان وواحد للنبي محمد ﷺ", // TODO review (hand draft, not from mobile)
    subtitle: "سعة الرزق · ممارسة صباحية لسبعة أيام", // TODO review (hand draft, not from mobile)
    shortTitle: "الأسماء النبوية المئتان وواحد", // TODO review (hand draft, not from mobile)
    tradition: "دلائل الخيرات · الإمام محمد الجزولي", // TODO review (hand draft, not from mobile)
    authorization: "الشيخ تشيرنو موسى ييرو سي — شيخ الطريقة التجانية", // TODO review (hand draft, not from mobile)
    description: "اذكر «الله جامع» 180 مرة، ثم الأسماء النبوية المئتين وواحدًا مع «صلى الله عليه وسلم». مرة واحدة يوميًا في الصباح لمدة سبعة أيام.", // TODO review (hand draft, not from mobile)
    promise: "يُرجى بها فتحٌ في الرزق والسعة والإمداد الإلهي، والأمر كله لله.", // TODO review (hand draft, not from mobile)
    sessions: "الجلسات", // TODO review (hand draft, not from mobile)
    sessionsPerDay: "مرة يوميًا (صباحًا)", // TODO review (hand draft, not from mobile)
    estimatedTime: "الوقت التقديري", // TODO review (machine draft)
    estimatedTimeValue: "٢٥-٣٥ دقيقة لكل دورة", // TODO review (machine draft)
    dayComplete: "اكتمل اليوم", // TODO review (hand draft, not from mobile)
    complete: "✓ مكتمل",
    onceDaily: "مرة يوميًا (صباحًا)", // TODO review (hand draft, not from mobile)
    startNext: "ابدأ ممارسة اليوم", // TODO review (hand draft, not from mobile)
    congratulations: "تهانينا!", // TODO review (machine draft)
    completedAllDays: "أتممت أيام الممارسة السبعة كلها!", // TODO review (hand draft, not from mobile)
    startAgain: "ابدأ من جديد", // TODO review (hand draft, not from mobile)
    continueDaily: "تابع يوميًا", // TODO review (hand draft, not from mobile)
    cycles: "الدورات", // TODO review (hand draft, not from mobile)
    todayComplete: "تمّت ممارسة اليوم!", // TODO review (hand draft, not from mobile)
    comeBackTomorrow: "عُد غداً لدورتك القادمة", // TODO review (machine draft)
    startTodaysPractice: "ابدأ ممارسة اليوم", // TODO review (hand draft, not from mobile)
    practiceSteps: "خطوات الممارسة", // TODO review (machine draft)
    stepPrefix: "الخطوة", // TODO review (machine draft)
    step2: "الأسماء النبوية المئتان وواحد", // TODO review (hand draft, not from mobile)
    step2Note: "مع «صلى الله عليه وسلم» بعد كل اسم", // TODO review (hand draft, not from mobile)
    step3: "دعاء الختام", // TODO review (hand draft, not from mobile)
    step3Note: "من دلائل الخيرات", // TODO review (hand draft, not from mobile)
    stepsForSession: "خطوات هذه الدورة:", // TODO review (machine draft)
    the201HolyNames: "الأسماء النبوية المئتان وواحد", // TODO review (hand draft, not from mobile)
    withSallaAfterEach: "مع «صلى الله عليه وسلم» بعد كل اسم", // TODO review (hand draft, not from mobile)
    fromDalail: "من دلائل الخيرات", // TODO review (hand draft, not from mobile)
    beginBismillah: "ابدأ بسم الله", // TODO review (hand draft, not from mobile)
    step2The201Names: "الخطوة 2: الأسماء الـ 201", // TODO review (machine draft)
    step3ClosingDua: "الخطوة 3: دعاء الختام", // TODO review (hand draft, not from mobile)
    recite: "اقرأ", // TODO review (hand draft, not from mobile)
    tapToCount: "اضغط للعد",
    continueToNames: "تابع إلى الأسماء", // TODO review (hand draft, not from mobile)
    continueToDua: "تابع إلى الدعاء", // TODO review (hand draft, not from mobile)
    completeSession: "أتمّ الجلسة", // TODO review (hand draft, not from mobile)
    yaJamiuMeaning: "الله الجامع العزيز", // TODO review (hand draft, not from mobile)
    theNames: "الأسماء الـ 201", // TODO review (machine draft)
    hideMeaning: "إخفاء معنى", // TODO review (machine draft)
    showMeaning: "اعرض المعنى", // TODO review (hand draft, not from mobile)
    openingDua: "الفاتحة", // TODO review (hand draft, not from mobile)
    closingDua: "دعاء الختام", // TODO review (hand draft, not from mobile)
    closingDuaSource: "الترمذي · حسن", // TODO review (hand draft, not from mobile)
    mashaAllah: "ما شاء الله!", // TODO review (hand draft, not from mobile)
    sessionCompleted: "اكتمل!", // TODO review (hand draft, not from mobile)
    completedBadge: "اكتمل!", // TODO review (hand draft, not from mobile)
    nextSession: "التالي",
    next: "التالي",
    practiceComplete: "اكتملت الممارسة!", // TODO review (hand draft, not from mobile)
    tonightSession: "الليلة:", // TODO review (machine draft)
    tonight: "الليلة:", // TODO review (machine draft)
    eveningSession: "جلسة المساء", // TODO review (machine draft)
    authorizationLabel: "الإجازة", // TODO review (hand draft, not from mobile)
    specialPractice: "الممارسة الخاصة", // TODO review (machine draft)
    special: "خاصة", // TODO review (machine draft)
    sevenDayPractice: "ممارسة صباحية لسبعة أيام", // TODO review (hand draft, not from mobile)
    start7Day: "ابدأوا التحدي 7 أيام", // TODO review (machine draft)
    removeChallenge: "إزالة هذا التحدي؟", // TODO review (machine draft)
    progressWillBeLost: "تقدمك سيضيع", // TODO review (machine draft)
    inviteFriends: "ادعُ أصدقاءك للمشاركة", // TODO review (hand draft, not from mobile)
    shareInvite: "شارك هذه الممارسة", // TODO review (hand draft, not from mobile)
    shareTitle: "الأسماء المئتان وواحد للنبي محمد ﷺ", // TODO review (hand draft, not from mobile)
    shareText: "شارك في ممارسة سعة الرزق لسبعة أيام! اقرأ الأسماء المئتين وواحدًا للنبي محمد ﷺ كل صباح رجاء البركة.", // TODO review (hand draft, not from mobile)
    shareVia: "شارك عبر", // TODO review (hand draft, not from mobile)
    linkCopied: "تم نسخ الرابط",
    shareFailed: "تعذّرت المشاركة", // TODO review (hand draft, not from mobile)
    step1: "Allāhu Jāmiʿu", // same as EN (transliteration/Arabic/brand)
    step1Count: "180×", // same as EN (transliteration/Arabic/brand)
    yaJamiuArabic: "اللهُ جَامِعُ", // same as EN (transliteration/Arabic/brand)
    yaJamiuTranslit: "Allāhu Jāmiʿu", // same as EN (transliteration/Arabic/brand)
    salawatAfterName: "Ṣalla-llāhu ʿalayhi wa sallam", // same as EN (transliteration/Arabic/brand)
    telegram: "Telegram", // same as EN (transliteration/Arabic/brand)
    twitter: "X (Twitter)", // same as EN (transliteration/Arabic/brand)
  },
  debtRelief: {
    remove: "إزالة",
    title: "ورد قضاء الدَّين", // TODO review (hand draft, not from mobile)
    shortTitle: "تخفيف عبء الديون", // TODO review (machine draft)
    subtitle: "1000 مرة بعد صلاة العشاء", // TODO review (hand draft, not from mobile)
    quranicWird: "ورد قرآني", // TODO review (hand draft, not from mobile)
    source: "سورة فاطر 35:17 · سورة إبراهيم 14:20", // TODO review (hand draft, not from mobile)
    timing: "بعد صلاة العشاء", // TODO review (hand draft, not from mobile)
    dailyCount: "1000 مرة", // TODO review (hand draft, not from mobile)
    estimatedTime: "15-20 دقيقة", // TODO review (hand draft, not from mobile)
    description: "اقرأ هذه الآية الكريمة 1000 مرة يوميًا بعد صلاة العشاء رجاء الفرج من الدَّين وتيسير قضائه.", // TODO review (hand draft, not from mobile)
    purpose: "الفرج من الدَّين وتيسير قضائه", // TODO review (hand draft, not from mobile)
    meaning: "وما ذلك على الله بعزيز", // TODO review (hand draft, not from mobile)
    spiritualMeaning: "تؤكّد هذه الآية التوكّل التام على قدرة الله التي لا حدّ لها. فما يبدو لنا مستحيلًا — ومنه الخلاص من الدَّين — هيّنٌ على الله. وبتكرار هذه الحقيقة نُعلّق قلوبنا بقدرته سبحانه ونرجو فرجه.", // TODO review (hand draft, not from mobile)
    benefits: "الاستحقاقات", // TODO review (machine draft)
    benefit1: "الإعفاء من العبء المالي والديون", // TODO review (machine draft)
    benefit2: "فرص قضاء سريعة وغير متوقّعة", // TODO review (hand draft, not from mobile)
    benefit3: "فتح مصادر جديدة للحكم", // TODO review (machine draft)
    benefit4: "سلام القلب فيما يتعلق بالمسائل المالية", // TODO review (machine draft)
    benefit5: "تقوية التوكّل على قدرة الله", // TODO review (hand draft, not from mobile)
    startDailyWird: "ابدأ الورد اليومي", // TODO review (hand draft, not from mobile)
    continueWird: "تابع الورد", // TODO review (hand draft, not from mobile)
    wirdComplete: "اكتمل الورد اليومي!", // TODO review (hand draft, not from mobile)
    removeChallenge: "إزالة هذا التحدي؟", // TODO review (machine draft)
    progressWillBeLost: "تقدمك سيضيع", // TODO review (machine draft)
    arabic: "وَمَا ذَٰلِكَ عَلَى اللهِ بِعَزِيزٍ", // same as EN (transliteration/Arabic/brand)
    transliteration: "Wamā dhālika ʿalā llāhi bi-ʿAzīzin", // same as EN (transliteration/Arabic/brand)
  },
  tasbih: {
    reset: "إعادة تعيين",
    remove: "إزالة",
    title: "عدّاد التسبيح", // TODO review (hand draft, not from mobile)
    tapToCount: "اضغط للعد",
    complete: "✓ مكتمل",
    logProgress: "سجّل التقدّم", // TODO review (hand draft, not from mobile)
    hint: "يمكنك الإغلاق في أي وقت — سيُحفظ عددك", // TODO review (hand draft, not from mobile)
    openTasbih: "افتح السبحة", // TODO review (hand draft, not from mobile)
    removeChallenge: "إزالة هذا التحدي؟", // TODO review (machine draft)
    progressWillBeLost: "تقدمك سيضيع", // TODO review (machine draft)
  },
  guidance: {
    divineNames: "الأسماء الحسنى",
    discoverSignificance: "اكتشف الدلالة العددية لاسمك من خلال العلوم الإسلامية التقليدية",
    howLettersConvert: "كيف يتحول كل حرف عربي إلى أرقام مقدسة",
    fourElements: "العناصر الأربعة الكلاسيكية وتركيبتك الروحية",
    sacredConnections: "الروابط المقدسة والرنينات الإلهية في أرقامك",
    totalOfAllLetters: "مجموع كل قيم الحروف",
    spiritOfTheCycle: "روح الدورة",
    relatedQuranicVerses: "آيات قرآنية ذات صلة", // TODO review (hand draft, not from mobile)
    letterValues: "قيم الحروف", // TODO review (hand draft, not from mobile)
    sumAllValues: "مجموع القيم", // TODO review (hand draft, not from mobile)
    calculateDigitalRoot: "احسب الجذر الرقمي", // TODO review (hand draft, not from mobile)
    elementDiscovery: "اكتشاف العنصر", // TODO review (hand draft, not from mobile)
  },
  calculator: {
    title: "الحاسبة",
    subtitle: "علم الأعداد الإسلامي بناءً على نظام الأبجد",
    calculateLetterValues: "احسب قيم الحروف",
    enterYourName: "أدخل اسمك",
    namePlaceholder: "محمد",
    calculateButton: "احسب",
    latinText: "النص اللاتيني (إنجليزي/فرنسي)",
    arabicText: "النص العربي",
    autoTransliterates: "تحويل تلقائي إلى العربية • يدعم الأسماء الإنجليزية/الفرنسية",
    showKeyboard: "إظهار لوحة المفاتيح",
    hideKeyboard: "إخفاء لوحة المفاتيح",
    examples: "أمثلة",
    maghribi: "مغربي",
    mashriqi: "مشرقي",
    whatYouLearn: "ما ستتعلمه",
    discoverSignificance: "اكتشف الدلالة العددية لاسمك من خلال العلوم الإسلامية التقليدية",
    numericalValues: "القيم العددية",
    numericalValuesDesc: "كيف يتحول كل حرف عربي إلى أرقام مقدسة",
    elementalForces: "القوى العنصرية",
    elementalForcesDesc: "العناصر الأربعة الكلاسيكية وتركيبتك الروحية",
    hiddenPatterns: "الأنماط الخفية",
    hiddenPatternsDesc: "الروابط المقدسة والرنينات الإلهية في أرقامك",
    keyMetrics: "المقاييس الأساسية",
    totalOfAllLetterValues: "مجموع كل قيم الحروف",
    digitalRoot: "الجذر الرقمي (1-9)",
    remainderMod4: "باقي القسمة على 4",
    spiritOfTheCycle: "روح الدورة",
    stepByStep: "الحساب خطوة بخطوة",
    reduceToSingleDigit: "الاختزال إلى رقم واحد",
    dominantElement: "العنصر الغالب",
    totalAbjadValue: "إجمالي القيمة الأبجدية",
    kabir: {
      title: "الكبير",
      subtitle: "المجموع الكلي",
      description: "البصمة الطاقية الكلية لاسمك",
      label: "الكبير",
    },
    saghir: {
      title: "الصغير",
      subtitle: "الجوهر الروحي",
      description: "الصفة الروحية الأساسية، مختزلة إلى رقم واحد (1-9)",
      label: "الصغير",
    },
    hadath: {
      title: "الحدث",
      subtitle: "العنصر",
      description: "العنصر الطبيعي الغالب",
      label: "الحدث",
    },
    ruh: {
      title: "روح الحدد",
      subtitle: "رقم الروح",
      description: "الجسر بين المظهر الخارجي والجوهر الداخلي",
      label: "روح الحدد",
    },
    knowledgeLevel: "مستوى المعرفة",
    knowledgeLevelHelp: "ما هذا؟",
    knowledgeLevelInfo: "اختر مستوى خبرتك:\n\n🔰 مبتدئ: تعلّم أساسيات حسابات الأبجد\n🎓 متوسط: استكشف البروج والكواكب والأسماء الإلهية\n👑 عالم: الوصول إلى أدوات بحث متقدمة",
    beginner: "مبتدئ",
    intermediate: "وسيط",
    scholar: "عالم",
    learnBasics: "تعلّم الأساسيات",
    deeperAnalysis: "تحليل أعمق",
    fullResearch: "بحث كامل",
    burjTitle: "البرج (العلامة الفلكية)",
    burjSubtitle: "علم الفلك الإسلامي الكلاسيكي",
    calculation: "الحساب",
    element: "العنصر",
    modality: "الطريقة",
    planetaryRuler: "الكوكب الحاكم",
    temperament: "المزاج",
    symbolism: "الرمزية",
    spiritualQuality: "الجودة الروحية",
    classicalReference: "المرجع الكلاسيكي",
    planetarySignature: "التوقيع الكوكبي",
    sevenPlanets: "الكواكب السبعة الكلاسيكية",
    planet: "الكوكب",
    dayOfWeek: "يوم الأسبوع",
    hourNumber: "رقم الساعة",
    metal: "المعدن",
    color: "اللون",
    dhikrRecommendation: "توصية الذكر",
    divineName: "الاسم الإلهي",
    count: "العدد",
    timing: "التوقيت",
  },
  elementalComposition: {
    title: "التركيب العنصري",
    letters: "حروف",
  },
  numericalEssence: {
    title: "جوهرك الرقمي",
    dominantElement: "العنصر الغالب:",
    coreNumberMeaning: "معنى الرقم الأساسي",
    theNumber: "العدد", // TODO review (machine draft)
    number1: "القيادة والاستقلال وروح الريادة", // TODO review (hand draft, not from mobile)
    number2: "الشراكة والتوازن والتعاون والوئام", // TODO review (machine draft)
    number3: "الإبداع والتعبير والفرح والاتصال", // TODO review (machine draft)
    number4: "الاستقرار والمؤسسة والأمن والهيكل", // TODO review (machine draft)
    number5: "الحرية والمغامرة والتغيير والقدرة على التكيف", // TODO review (machine draft)
    number6: "الخدمة، المسؤولية، الرعاية والحب", // TODO review (machine draft)
    number7: "الحكمة والروحانية والتأمّل الباطني والغموض", // TODO review (hand draft, not from mobile)
    number8: "القوة والوفرة والتمكّن المادي والنجاح", // TODO review (hand draft, not from mobile)
    number9: "الاكتمال والمحبة الشاملة والحكمة والرحمة", // TODO review (hand draft, not from mobile)
    fireDesc: "متّقد، نشيط، مُحوِّل، عملي", // TODO review (hand draft, not from mobile)
    waterDesc: "حدسي، عاطفي، متأمّل، منساب ومرن", // TODO review (hand draft, not from mobile)
    airDesc: "تواصلي، فكري، اجتماعي، سريع البديهة", // TODO review (hand draft, not from mobile)
    earthDesc: "راسخ، عملي، موثوق، ثابت ومستقر", // TODO review (hand draft, not from mobile)
    guidanceMessage: "هذه الأعداد والعناصر إرشاد للتأمّل الذاتي. وتذكّر أنك أكبر من الأرقام؛ فاختياراتك وقيمك وأخلاقك هي ما يصنع طريقك.", // TODO review (hand draft, not from mobile)
  },
  celestialSignature: {
    planet: "الكوكب",
    day: "نهار",
    bestHours: "أفضل الساعات",
    title: "البصمة الفلكية", // TODO review (hand draft, not from mobile)
    footerNote: "مبني على علم الكون الإسلامي الكلاسيكي وفق الطبائع الأربع • للتأمّل الروحي فقط", // TODO review (hand draft, not from mobile)
  },
  elements: {
    fire: "نار",
    water: "ماء",
    air: "هواء",
    earth: "أرض",
    fireDesc: "حار وجاف - عاطفي ونشيط",
    waterDesc: "بارد ورطب - عاطفي وحدسي",
    airDesc: "حار ورطب - فكري وتواصلي",
    earthDesc: "بارد وجاف - ثابت ومتجذر",
  },
  temperament: {
    careerTitle: "التوجيه المهني",
    traits: "السمات الأساسية",
    strengths: "نقاط القوة",
    title: "ملف الطبع", // TODO review (hand draft, not from mobile)
    psychologyTitle: "الملف النفسي", // TODO review (hand draft, not from mobile)
    watchOuts: "⚡ احذر من",
    balanceTips: "نصائح التوازن", // TODO review (hand draft, not from mobile)
    careerGoodFits: "مهن مناسبة", // TODO review (hand draft, not from mobile)
    careerAvoid: "قد تجده صعبًا", // TODO review (hand draft, not from mobile)
    careerRationale: "لماذا يناسبك", // TODO review (hand draft, not from mobile)
  },
  lifePath: {
    title: "علم أعداد مسار الحياة",
    lifePathNumber: "رقم مسار الحياة",
    expressionNumber: "رقم التعبير",
    soulUrge: "رقم رغبة الروح",
    personality: "رقم الشخصية",
    destiny: "رقم القدر",
    personalYear: "السنة الشخصية",
    personalMonth: "الشهر الشخصي",
    karmicDebt: "أرقام الدَّين الكارمي",
    sacredNumbers: "الأرقام المقدسة",
    cycle: "دورة الحياة",
    coreNumbers: "أرقام حياتك الأساسية",
    coreNumbersDesc: "تكشف هذه الأرقام الأربعة شخصيتك الأساسية، ورغباتك الداخلية، وكيف يراك الآخرون، وغاية حياتك. محسوبة من اسمك الشخصي فقط.",
    externalInfluences: "التأثيرات الخارجية",
    maternalInfluence: "التأثير الأمومي",
    maternalInfluenceDesc: "يُظهر هذا الرقم كيف تؤثر طاقة والدتك على مسارك الخارجي والظروف المحيطة بك.",
    maternalInfluenceExplanation: "يكشف اسم والدتك الظروف الخارجية والتأثيرات الموروثة المحيطة بمسارك، لكنها لا تحدد هويتك الأساسية.",
    lifePathLabel: "رقم مسار الحياة",
    expressionLabel: "رقم التعبير",
    soulUrgeLabel: "رقم رغبة الروح",
    personalityLabel: "رقم الشخصية",
    destinyLabel: "رقم القدر",
    lifePathSimple: "محسوب من تاريخ ميلادك. مخطط روحك والغاية الرئيسية التي جئت لتحقيقها.",
    expressionSimple: "محسوب من اسمك. كيف تعبّر عن مسار حياتك من خلال مواهبك وشخصيتك الفريدة.",
    soulUrgeSimple: "دافعك الداخلي. ما تسعى إليه في الحياة وما يمنحك الفرح والرضا الحقيقيين.",
    personalitySimple: "وجهك العلني. كيف تظهر للآخرين والطاقة التي تنشرها عند دخولك مكانًا.",
    destinySimple: "غاية حياتك وهدفك الأسمى. ما قُدِّر لك إنجازه وتقديمه للعالم.",
    whatItMeans: "ماذا يعني هذا:",
    important: "مهم:",
    externalEnergy: "الطاقة الخارجية",
    importantNote: "يمثل هذا ما يحيط بك، لا مَن أنت. أرقامك الأساسية أعلاه تحدد هويتك الحقيقية.",
    quickGuideTitle: "دليل سريع:",
    lifePathQuick: "مواهبك الأساسية وقواك الطبيعية. القدرات التي وُلدت بها.",
    soulUrgeQuick: "ما يسعدك حقًا. رغباتك الأعمق وإشباعك الداخلي.",
    personalityQuick: "الانطباع الذي تتركه. كيف يراك الناس ويختبرونك للوهلة الأولى.",
    destinyQuick: "غاية حياتك وما قُدِّر لك تحقيقه. هدفك الأسمى.",
    whereYouAreNow: "أين أنت الآن",
    currentLifePhase: "مرحلة حياتك الحالية",
    phaseOf9: "المرحلة {number} من 9",
    yearTheme: "موضوع السنة {position}/9:",
    focusAreas: "مجالات التركيز:",
    yourAge: "عمرك",
    years: "{age} سنة",
    yearMonthEnergy: "طاقة هذه السنة والشهر",
    personalYearLabel: "السنة الشخصية",
    personalMonthLabel: "الشهر الشخصي",
    overallEnergy: "الطاقة العامة",
    monthFlow: "تدفق هذا الشهر",
    strengthsAndGrowth: "نقاط قوتك وفرص نموك",
    strengthsIntro: "يمثل كل رقم من 1 إلى 9 صفات حياتية مختلفة. تُظهر نقاط قوتك ما تتفوق فيه طبيعيًا. تُظهر مجالات النمو أين يمكنك التطور أكثر.",
    whatYouAreStrongAt: "ما تتفوق فيه",
    whereYouCanGrow: "أين يمكنك النمو",
    strength: "نقطة القوة {number}",
    growthArea: "مجال النمو {number}",
    strengthDesc1: "ما يجعلك قادرًا وموثوقًا",
    strengthDesc2: "ما يمنحك ميزة",
    strengthDesc3: "موهبتك الطبيعية",
    strengthDesc4: "ما تتفوق فيه",
    growthDesc1: "صفة يجب تطويرها",
    growthDesc2: "مجال للتحسين",
    growthDesc3: "شيء يجب العمل عليه",
    growthDesc4: "درس حياتي أساسي",
    currentStrength: "الآن (نقطة قوتك الحالية):",
    currentStrengthDesc: "هذه هي القوة الرئيسية التي تدعمك هذا الموسم",
    currentChallenge: "ما تعمل عليه حاليًا (تركيزك الرئيسي):",
    currentChallengeDesc: "هذا ما تعلّمك إياه الحياة الآن × تقبّله!",
    specialNumbers: "أرقام ودروس خاصة",
    lessonsToLearn: "دروس يجب تعلّمها",
    lessonsDesc: "تمثل هذه الأرقام دروسًا تريد روحك تعلّمها في هذه الحياة. ليست عقبات × بل فرص للنمو.",
    blessedNumbers: "أرقام مباركة",
    blessedDesc: "هذه أرقام قوية مرتبطة بالتقليد الروحي. تجلب بركات خاصة وحماية روحية لحياتك.",
    numberArchetypes: {
      "1": {
        title: "القائد",
        meaning: "أنت مستقل بطبيعتك ومدفوع لخلق أشياء جديدة. تفضّل اتخاذ القرارات بنفسك.",
      },
      "2": {
        title: "صانع السلام",
        meaning: "تجيد الجمع بين الناس وإيجاد الانسجام. أنت حساس لمشاعر الآخرين.",
      },
      "3": {
        title: "المبدع",
        meaning: "تعبّر عن نفسك بسهولة وتجلب الفرح أينما ذهبت. التواصل هو قوتك.",
      },
      "4": {
        title: "الباني",
        meaning: "أنت موثوق وعملي. تبني أسسًا راسخة في كل ما تفعله.",
      },
      "5": {
        title: "المستكشف",
        meaning: "تحب الحرية والتنوع. تتكيف بسرعة وتتعلم من تجارب متنوعة.",
      },
      "6": {
        title: "الراعي",
        meaning: "أنت مسؤول وتريد طبيعيًا مساعدة الآخرين. الأسرة والخدمة تهمانك بعمق.",
      },
      "7": {
        title: "المفكر",
        meaning: "أنت تحليلي وروحاني. تسعى لفهم أعمق لأسرار الحياة.",
      },
      "8": {
        title: "المُنجِز",
        meaning: "أنت طموح ومركّز على النجاح. لديك قدرات قوية في الأعمال والقيادة.",
      },
      "9": {
        title: "الإنساني",
        meaning: "تهتم بالعالم وتريد إحداث فرق إيجابي. الرحمة توجّهك.",
      },
      "11": {
        title: "صاحب الرؤية",
        meaning: "ترى ما وراء الأشياء العادية. تُلهم الآخرين وتحمل رسائل روحية.",
      },
      "22": {
        title: "الباني الأعظم",
        meaning: "لديك طموحات كبيرة لخلق شيء دائم. تحوّل الأحلام إلى واقع على نطاق واسع.",
      },
    },
    descriptions: {
      lifePath: "رحلة روحك الأساسية وغايتها",
      soulUrge: "أعمق رغبات قلبك ودوافعك الداخلية",
      personality: "كيف يراك الآخرون؛ تعبيرك الظاهر",
      destiny: "مهمة حياتك القصوى وغايتك الإلهية",
      personalYear: "الموضوع والطاقة الرئيسية لسنتك الحالية",
      personalMonth: "الطاقة والتركيز الشهري",
    },
    elementalComposition: "تركيبتك العنصرية",
    elementalCompositionDesc: "بناءً على أرقامك الأساسية الأربعة، إليك التوازن العنصري في مسار حياتك:",
    dominantElement: "العنصر الغالب",
    elementalBalance: "التوازن العنصري",
    elementDescriptions: {
      fire: "تجلب النار الشغف والمبادرة والدافع. أنت مدفوع لاتخاذ الفعل والقيادة.",
      earth: "تجلب الأرض الثبات والعملية والرسوخ. تبني أسسًا دائمة.",
      air: "يجلب الهواء العقل والتواصل والتكيّف. تزدهر بالأفكار والروابط.",
      water: "يجلب الماء العاطفة والحدس والحساسية. تتنقل في الحياة عبر الشعور.",
    },
    careerGuidance: "التوجيه المهني",
    careerGuidanceIntro: "بناءً على رقم مسار حياتك، إليك مهنًا تتوافق مع قواك الطبيعية:",
    idealCareers: "مهن تناسبك جيدًا",
    careersToAvoid: "بيئات قد تتحدّاك",
    whyTheseFit: "لماذا تناسبك هذه المهن:",
    balanceTips: "نصائح للتوازن والعناية بالذات",
    balanceTipsIntro: "طرق عملية للحفاظ على التوازن وتكريم طاقة مسار حياتك:",
    shadowWork: "العمل مع الظل وحدود النمو",
    shadowWorkIntro: "لكل رقم تحديات. ليست عيوبًا — بل فرص للنمو:",
    growthOpportunities: "مجالات للمراقبة والتطوير",
    practicalGuidance: "إرشاد عملي",
    pathSummary: "مسارك باختصار",
    spiritualPractice: "الممارسة الروحية",
    quranicConnection: "الارتباط القرآني",
    weeklyActions: "خطوات عملية أسبوعية",
    shadowToAvoid: "النمط الرئيسي للمراقبة",
    quranicWisdom: "الحكمة القرآنية والصفات الإلهية",
    quranicWisdomDesc: "اكتشف كيف يرتبط مسار حياتك بالآيات المقدسة والأسماء الإلهية:",
    verse: "آية قرآنية",
    divineAttribute: "الصفة الإلهية (الأسماء الحسنى)",
    spiritualMeaning: "المعنى الروحي لمسارك",
    dailyPractice: "الممارسة الروحية اليومية",
  },
  compatibility: {
    title: "توافق العلاقات",
    person1: "الشخص 1",
    person2: "الشخص 2",
    checkCompatibility: "تحقق من التوافق",
    overallScore: "درجة الانسجام الكلية",
    spiritualHarmony: "الانسجام الروحي",
    elementalHarmony: "الانسجام العنصري",
    planetaryCompatibility: "التوافق الكوكبي",
    coreCompatibility: "التوافق الأساسي (الأسماء الشخصية)",
    coreCompatibilityDesc: "كيف تتفاعل شخصياتكم الواعية",
    cosmicLayer: "الطبقة الكونية (التأثيرات الأمومية)",
    cosmicLayerDesc: "كيف تتفاعل طاقاتكم الموروثة معاً",
    cosmicLayerExplanation: "عنصر والدتك يمثل الظروف الكونية المؤثرة في ارتباطك الروحي. يتعلق هذا بالأنماط العاطفية الموروثة، وليس بشخصيتك الجوهرية.",
    ratings: {
      excellent: "ممتاز",
      good: "جيد",
      moderate: "متوسط",
      challenging: "صعب",
    },
  },
  nameDestiny: {
    coreAnalysis: "التحليل الأساسي (اسمك فقط)",
    coreAnalysisDesc: "تعكس هذه طبيعتك الداخلية وهويتك الشخصية.",
    inheritedInfluences: "التأثيرات الموروثة",
    inheritedInfluencesDesc: "تُظهر كيف تؤثر طاقة والدتك على ظروفك الخارجية.",
    whyMotherName: "لماذا نضيف اسم الأم؟",
    motherNameExplanation: "يكشف اسمك الشخصي مَن أنت (الهوية الداخلية). ويكشف اسم والدتك الظروف الخارجية المحيطة بك × العقبات والحماية والميراث الأسري.",
    motherNameInfo: "الاسم الشخصي = مَن أنت | الاسم + الأم = ما يحيط بك",
    nameChart: {
      title: "مخطط الاسم",
      subtitle: "المخطط الروحي لاسمك",
      total: "المجموع (الحداد الكبير)",
      saghir: "الجذر الرقمي (الصغير)",
      tabh: "العنصر (الطبع)",
      burj: "البرج",
      planet: "الكوكب",
      day: "اليوم",
      hour: "رقم الساعة الكوكبية",
      hourTip: "الساعة رقم كذا بعد شروق الشمس المحلي. الترتيب: الشمس، الزهرة، عطارد، القمر، زحل، المشتري، المريخ.",
      elementHarmony: "الانسجام العنصري",
      harmonious: "✨ منسجم",
      nourishing: "🌱 مغذٍّ",
      transformative: "⚡ تحويلي",
      unified: "💫 موحّد",
    },
    destinyNumber: {
      title: "رقم قدر حياتك",
      subtitle: "رقم القدر الأساسي والمنزلة",
      sumOfLetters: "مجموع كل قيم الحروف",
      reducedRoot: "الجذر الرقمي المختزل",
    },
    quranicResonance: {
      title: "الرنين القرآني",
      subtitle: "الاتصال الإلهي عبر رقمك",
    },
    motherOrigin: {
      subtitle: "أساسك الطاقي الموروث",
    },
    inputs: {
      motherName: "اسم الأم",
      motherHint: "اختياري × أضفه لرؤية التأثيرات الموروثة والانسجام الأسري.",
      motherOptional: "اسم الأم (اختياري للتأثيرات الموروثة)",
    },
    origin: {
      title: "أصلك الروحي",
      motherElement: "عنصر اسم الأم (حداد الأم)",
      inheritance: "توريث العنصر",
      expression: "التعبير",
      foundation: "الأساس",
      yourExpression: "تعبيرك",
      yourFoundation: "أساسك",
      insight: "رؤية",
      kabir: "الكبير",
      saghir: "الصغير",
      hadath: "الحدث",
    },
    geometry: {
      title: "هندسة الحروف",
      vertical: "عمودي",
      round: "مدوّر",
      flat: "مسطّح",
      angular: "زاوية",
      none: "لا يوجد في اسمك",
      profile: "ملفك الهندسي",
    },
    triad: {
      title: "ثالوث روحك",
      lifeDestiny: "قدر الحياة",
      soulUrge: "رغبة الروح",
      outerPersonality: "الشخصية الظاهرة",
    },
    guidance: {
      title: "إرشاد عملي",
      yourPath: "مسارك",
      yourPathDesc: "يشرح إلى أين يتجه اتجاه حياتك وطاقتك طبيعيًا.",
      spiritualPractice: "الممارسة الروحية",
      spiritualPracticeDesc: "عادات أو تأملات يومية بسيطة لموازنة عنصرك.",
      quranicGuidance: "الإرشاد القرآني",
      quranicGuidanceDesc: "آية مرتبطة بطاقة اسمك، للتأمل فقط.",
      practicalAction: "الفعل العملي",
      practicalActionDesc: "خطوات يمكنك اتخاذها في الحياة اليومية تتوافق مع قدرك.",
      shadowToWatch: "ظل يجب مراقبته",
      shadowToWatchDesc: "ميول ينبغي الوعي بها قد تعيق نموك.",
    },
    disclaimer: {
      reflectionOnly: "للتأمل فقط × ليس تنجيمًا أو حكمًا شرعيًا.",
    },
    elementChart: {
      title: "مخطط عنصر الاسم",
      subtitle: "التركيب العنصري والتوازن",
      dominant: "العنصر الغالب",
      personality: "انعكاس الشخصية",
      balancingDhikr: "ذكر الموازنة",
      fire: {
        name: "النار",
        personality: "يحمل اسمك طاقة الشغف والشجاعة والفعل الجريء. أنت مدفوع طبيعيًا للقيادة والمبادرة والتحول.",
      },
      air: {
        name: "الهواء",
        personality: "يجسّد اسمك الوضوح الفكري والتواصل والتكيّف. تنجذب إلى التفكير والتعلّم وربط الأفكار.",
      },
      water: {
        name: "الماء",
        personality: "يتناغم اسمك مع العمق العاطفي والتعاطف والحدس. تشفي وترعى وتتدفق طبيعيًا مع إيقاعات الحياة.",
      },
      earth: {
        name: "الأرض",
        personality: "يجذّرك اسمك في العملية والموثوقية والصبر. تتفوق في البناء والتنظيم وتحقيق الاستقرار.",
      },
      dhikr: {
        fire: "يا لطيف × لتليين الشدة",
        air: "يا حكيم × لتجذير الأفكار",
        water: "يا نور × لإضاءة المشاعر",
        earth: "يا فتّاح × لدعوة التدفق",
      },
    },
    higherResonance: {
      title: "رؤى الرنين الأعلى",
      subtitle: "طاقة الاسم الإلهي واللون في اسمك",
    },
    divineNameResonance: {
      title: "رنين الاسم الإلهي",
      subtitle: "يحمل اسمك اهتزاز:",
      meaning: "المعنى",
      spiritualInfluence: "التأثير الروحي",
      reflection: "ماذا يعني هذا لك",
      reflectionTip: "نصيحة للتأمل",
    },
    colorResonance: {
      title: "رنين لون الاسم",
      subtitle: "طاقة اللون الطبيعية لاسمك هي:",
      primary: "اللون الأساسي",
      secondary: "اللون الثانوي",
      meaning: "المعنى",
      bestColors: "أفضل الألوان للارتداء / الاستخدام",
      avoidColors: "ألوان يُستحسن تجنبها",
      tip: "نصيحة",
      tipIntro: "استخدم هذه الألوان في الملابس أو التدوين أو التأمل أو المساحات الشخصية.",
    },
  },
  planetaryHours: {
    title: "الساعات الكوكبية",
    currentHour: "الساعة الكوكبية الحالية",
    planet: "الكوكب",
    startTime: "وقت البداية",
    endTime: "وقت النهاية",
    dayHours: "ساعات النهار",
    nightHours: "ساعات الليل",
    planets: {
      sun: "الشمس",
      moon: "القمر",
      mars: "المريخ",
      mercury: "عطارد",
      jupiter: "المشتري",
      venus: "الزهرة",
      saturn: "زحل",
    },
  },
  planetary: {
    planetOfDay: {
      bestFor: "الأفضل لـ",
      difficulty: {
        moderate: "معتدل",
        advanced: "متقدم",
        easy: "على مهلك", // TODO review (machine draft)
      },
      title: "كوكب اليوم", // TODO review (hand draft, not from mobile)
      subtitle: "الطاقة اليومية", // TODO review (machine draft)
      practiceLevel: "مستوى الممارسة", // TODO review (hand draft, not from mobile)
      currentPosition: "المنصب الحالي", // TODO review (machine draft)
      titleAr: "يوم الكوكب", // same as EN (transliteration/Arabic/brand)
    },
    planetaryHour: {
      title: "الساعة الكوكبية",
      currentHour: "الساعة الحالية",
      nextHour: "الساعة الكوكبية التالية",
      yourElement: "عنصرك",
      hourElement: "الساعة",
      remaining: "متبقٍ",
      day: "نهار",
      night: "ليل",
      hour: "الساعة",
      loading: "جارٍ التحميل...",
      dayHours: "ساعات النهار",
      nightHours: "ساعات الليل",
      subtitle: "توافق اللحظة", // TODO review (hand draft, not from mobile)
      seeAllHours: "شاهدْ جميع ساعاتِ", // TODO review (machine draft)
      sunrise: "الشروق", // TODO review (hand draft, not from mobile)
      titleAr: "ساعة الكوكب", // same as EN (transliteration/Arabic/brand)
    },
    planets: {
      Sun: "الشمس",
      Moon: "القمر",
      Mars: "المريخ",
      Mercury: "عطارد",
      Jupiter: "المشتري",
      Venus: "الزهرة",
      Saturn: "زحل",
    },
    elements: {
      fire: "نار",
      water: "ماء",
      air: "هواء",
      earth: "أرض",
    },
    planetsAr: {
      Sun: "الشمس",
      Moon: "القمر",
      Mars: "المريخ",
      Mercury: "عطارد",
      Jupiter: "المشتري",
      Venus: "الزهرة",
      Saturn: "زحل",
    },
    elementsAr: {
      fire: "نار",
      water: "ماء",
      air: "هواء",
      earth: "تراب",
    },
    zodiacAr: {
      aries: "الحمل",
      taurus: "الثور",
      gemini: "الجوزاء",
      cancer: "السرطان",
      leo: "الأسد",
      libra: "الميزان",
      scorpio: "العقرب",
      sagittarius: "القوس",
      capricorn: "الجدي",
      aquarius: "الدلو",
      pisces: "الحوت",
      virgo: "العذراء", // same as EN (transliteration/Arabic/brand)
    },
    planetTransit: {
      skyNow: "السماء",
      longTerm: "طويل المدى",
      tropical: "مداري",
      updated: "تم التحديث",
      planet: "الكوكب",
      sign: "البرج",
      hideDetails: "إخفاء التفاصيل",
      rulesSign: "القواعد",
      dignityScore: "النتيجة",
      title: "عبور الكواكب", // TODO review (hand draft, not from mobile)
      subtitle: "حركة الأجرام", // TODO review (hand draft, not from mobile)
      in: "في",
      seeYourImpact: "اعرض تأثيرك ←",
      livePositions: "المواقع الحية", // TODO review (hand draft, not from mobile)
      loadingEphemeris: "جارٍ تحميل بيانات التقويم الفلكي...", // TODO review (hand draft, not from mobile)
      sidereal: "نجمي", // TODO review (hand draft, not from mobile)
      carousel: "عرض دوّار", // TODO review (hand draft, not from mobile)
      seeAll: "عرض الكل", // TODO review (hand draft, not from mobile)
      elementPlanet: "كوكب {element}", // TODO review (hand draft, not from mobile)
      elementSign: "برج {element}", // TODO review (hand draft, not from mobile)
      viewDetails: "عرض التفاصيل",
      dignitySection: "المنزلة الأساسية",
      exaltedAt: "شرفه في", // TODO review (hand draft, not from mobile)
      inFallIn: "في السقوط", // TODO review (machine draft)
      inDetrimentIn: "وباله في", // TODO review (hand draft, not from mobile)
      currentlyIn: "حاليًا في", // TODO review (hand draft, not from mobile)
      noNotableDignity: "لا توجد كرامة ذاتية بارزة في هذا الموضع", // TODO review (hand draft, not from mobile)
      overallCondition: "الحالة العامة", // TODO review (hand draft, not from mobile)
      domicileOf: "بيت", // TODO review (hand draft, not from mobile)
      exaltationOf: "شرف", // TODO review (hand draft, not from mobile)
      titleAr: "العبور الكوكبي", // same as EN (transliteration/Arabic/brand)
    },
    days: {
      sunday: "الأحد",
      monday: "الاثنين",
      tuesday: "الثلاثاء",
      wednesday: "الأربعاء",
      thursday: "الخميس",
      friday: "الجمعة",
      saturday: "السبت",
    },
    zodiac: {
      aries: "الحمل",
      taurus: "الثور",
      gemini: "الجوزاء",
      cancer: "السرطان",
      leo: "الأسد",
      virgo: "العذراء",
      libra: "الميزان",
      scorpio: "العقرب",
      sagittarius: "القوس",
      capricorn: "الجدي",
      aquarius: "الدلو",
      pisces: "الحوت",
    },
    ilmNujum: {
      proceed: "تابع بحذر",
      neutral: "فترة متوازنة",
      auspicious: "سعيد", // TODO review (hand draft, not from mobile)
      cautious: "حذر", // TODO review (hand draft, not from mobile)
      inauspicious: "غير ميمون", // TODO review (hand draft, not from mobile)
      auspiciousAr: "سعيد", // same as EN (transliteration/Arabic/brand)
      proceedAr: "تأنَّ", // same as EN (transliteration/Arabic/brand)
      neutralAr: "وقت محايد", // same as EN (transliteration/Arabic/brand)
      cautiousAr: "احترس", // same as EN (transliteration/Arabic/brand)
      inauspiciousAr: "نحس", // same as EN (transliteration/Arabic/brand)
    },
    dignities: {
      sharaf: "في شرفه",
      bayt: "في بيته",
      muthallatha: "في مثلثه",
      hubut: "في هبوطه",
      darr: "في وباله",
      musharraf: "في شرفه",
      qawi: "قوي",
      mutadil: "معتدل",
      nahs: "صعبة",
      daif: "ضعيف",
      conditionLabel: "الحالة",
      hadd: "مصطلحات",
      wajh: "الوجه", // TODO review (hand draft, not from mobile)
      gharib: "غريب", // TODO review (hand draft, not from mobile)
      said: "مناسب", // TODO review (hand draft, not from mobile)
      mubtala: "منحوس", // TODO review (hand draft, not from mobile)
      dignityLabel: "المنزلة الأساسية",
      retrogradeNote: "الرجوع يُضعف الكرامة (−2)", // TODO review (hand draft, not from mobile)
      scoreLabel: "درجة الكرامة", // TODO review (hand draft, not from mobile)
      breakdown: "تفصيل الكرامة", // TODO review (hand draft, not from mobile)
      exaltedIn: "في شرفه في", // TODO review (hand draft, not from mobile)
      domicileIn: "في بيته في", // TODO review (hand draft, not from mobile)
      fallIn: "في السقوط", // TODO review (machine draft)
      detrimentIn: "في وباله في", // TODO review (hand draft, not from mobile)
      triplicityIn: "صاحب المثلثة في", // TODO review (hand draft, not from mobile)
      termsIn: "في حدوده في", // TODO review (hand draft, not from mobile)
      faceIn: "في وجهه في", // TODO review (hand draft, not from mobile)
      peregrineIn: "غريب في", // TODO review (hand draft, not from mobile)
      highlyFavourable: "مناسب جدًا", // TODO review (hand draft, not from mobile)
      favourablePosition: "موضع مناسب", // TODO review (hand draft, not from mobile)
      neutralPosition: "موضع محايد", // TODO review (hand draft, not from mobile)
      difficultPosition: "موضع صعب", // TODO review (hand draft, not from mobile)
      veryWeak: "موضع ضعيف جدًا", // TODO review (hand draft, not from mobile)
    },
    simplifiedStatus: {
      mutadil: "معتدل",
      said: "سعيد", // TODO review (hand draft, not from mobile)
      mahdhur: "حذر", // TODO review (hand draft, not from mobile)
      saidGuidance: "ممتاز للدعاء والذكر والنوايا الجديدة", // TODO review (hand draft, not from mobile)
      mutadilGuidance: "مناسبة للممارسة والتفكير المنتظمين", // TODO review (machine draft)
      mahdhurGuidance: "ركّز على الاستغفار وأذكار التحصين", // TODO review (hand draft, not from mobile)
      exaltedIn: "{planet} في شرفه في برج {sign}", // TODO review (hand draft, not from mobile)
      strongIn: "{planet} قوي في برج {sign}", // TODO review (hand draft, not from mobile)
      atHomeIn: "{planet} في بيته في برج {sign}", // TODO review (hand draft, not from mobile)
      comfortableIn: "{planet} مرتاح في برج {sign}", // TODO review (hand draft, not from mobile)
      neutralIn: "{planet} محايد في برج {sign}", // TODO review (hand draft, not from mobile)
      weakenedIn: "{planet} ضعيف في برج {sign}", // TODO review (hand draft, not from mobile)
      statusLabel: "حالة الممارسة", // TODO review (hand draft, not from mobile)
      viewDetails: "عرض التفاصيل",
      practiceHint: "تلميح الممارسة", // TODO review (hand draft, not from mobile)
      appTeaser: "إرشاد شخصي في تطبيق أسرار", // TODO review (hand draft, not from mobile)
      comingSoon: "قادم قريباً", // TODO review (machine draft)
      saidAr: "سَعِيد", // same as EN (transliteration/Arabic/brand)
      mutadilAr: "مُعْتَدِل", // same as EN (transliteration/Arabic/brand)
      mahdhurAr: "مَحْذُور", // same as EN (transliteration/Arabic/brand)
    },
    elementDescriptions: {
      water: "متدفق وعاطفي",
      fire: "متّقد ومنشّط", // TODO review (hand draft, not from mobile)
      air: "فكري وتواصلي", // TODO review (hand draft, not from mobile)
      earth: "راسخ ومستقر", // TODO review (hand draft, not from mobile)
    },
    elementBestFor: {
      fire: {
        leadership: "القيادة",
        starting: "بدء المشاريع", // TODO review (hand draft, not from mobile)
        physical: "الأنشطة المادية", // TODO review (machine draft)
        bold: "القرارات الجريئة", // TODO review (hand draft, not from mobile)
      },
      water: {
        healing: "الشفاء العاطفي",
        relationships: "العلاقات",
        intuitive: "العمل الحدسي",
        creative: "التدفق الإبداعي", // TODO review (machine draft)
      },
      air: {
        learning: "التعلّم",
        communication: "التواصل",
        planning: "التخطيط",
        social: "الروابط الاجتماعية", // TODO review (hand draft, not from mobile)
      },
      earth: {
        practical: "المهام العملية",
        building: "بناء الأسس", // TODO review (hand draft, not from mobile)
        financial: "المسائل المالية", // TODO review (machine draft)
        health: "الصحة البدنية", // TODO review (machine draft)
      },
    },
    zikr: {
      recommendedZikr: "الذكر المقترح", // TODO review (hand draft, not from mobile)
      footerNote: "اذكر بحضور القلب والنية.", // TODO review (hand draft, not from mobile)
      currentHourRuler: "حاكم الساعة الحالية", // TODO review (hand draft, not from mobile)
      transitPractice: "الممارسة في مجال النقل العابر", // TODO review (machine draft)
      planetOfTheDay: "كوكب اليوم", // TODO review (hand draft, not from mobile)
      hourContext: "ساعة {planet}", // TODO review (hand draft, not from mobile)
    },
    incense: {
      recommendedBakhoor: "البخور المقترح", // TODO review (hand draft, not from mobile)
      footerNote: "وسيلة تقليدية لتهيئة جوٍّ من التأمّل — والجوهر الحقيقي في النية والذكر.", // TODO review (hand draft, not from mobile)
    },
  },
  stations: {
    "11": "الإشراق الروحي",
    "22": "الباني الأعظم",
    "33": "المعلّم الأعظم",
    "1": "البدء", // TODO review (hand draft, not from mobile)
    "2": "التوافق", // TODO review (hand draft, not from mobile)
    "3": "الإبداع", // TODO review (hand draft, not from mobile)
    "4": "الاستقرار", // TODO review (hand draft, not from mobile)
    "5": "التحوّل", // TODO review (hand draft, not from mobile)
    "6": "الخدمة", // TODO review (hand draft, not from mobile)
    "7": "الحكمة الإلهية", // TODO review (hand draft, not from mobile)
    "8": "القدرة الإلهية", // TODO review (hand draft, not from mobile)
    "9": "الكمال", // TODO review (hand draft, not from mobile)
  },
  ilmHuruf: {
    title: "علم الحروف - إرشاد عملي للحياة",
    subtitle: "اختر نمط إرشاد واكتشف رؤى مصممة وفق استفسارك",
    weeklyGuidance: "الإرشاد الأسبوعي",
    nameDestiny: "قدر الاسم",
    compatibility: "التوافق",
    lifePath: "مسار الحياة",
    divineTiming: "التوقيت الإلهي",
    generateWeeklyGuidance: "أنشئ إرشادك الأسبوعي",
    discoverNameDestiny: "اكتشف قدر اسمك",
    analyzeTwoSouls: "حلّل روحين",
    calculateLifePath: "احسب مسار حياتك",
    currentPlanetaryInfluence: "التأثير الكوكبي الحالي",
    weeklyGuidanceDesc: "إرشاد تأملي مرتبط بالتأثيرات الكوكبية",
    nameDestinyDesc: "اكتشف الجوهر الروحي المشفّر في اسمك",
    compatibilityDesc: "استكشف الانسجام والإمكانية بين شخصين",
    lifePathDesc: "افهم الدلالة العددية لمسار ميلادك",
    divineTimingDesc: "وائم أفعالك مع التوقيتات الفلكية",
    nameLatin: "الاسم - لاتيني (إنجليزي/فرنسي)",
    nameArabic: "الاسم - عربي",
    yourNameLatin: "اسمك - لاتيني (إنجليزي/فرنسي)",
    yourNameArabic: "اسمك - عربي",
    firstPersonLatin: "الشخص الأول - لاتيني (إنجليزي/فرنسي)",
    firstPersonArabic: "الشخص الأول - عربي",
    secondPersonLatin: "الشخص الثاني - لاتيني (إنجليزي/فرنسي)",
    secondPersonArabic: "الشخص الثاني - عربي",
    motherNameLatin: "اسم الأم - لاتيني (اختياري)",
    motherNameArabic: "اسم الأم - عربي (اختياري)",
    birthDate: "تاريخ الميلاد",
    birthDateOptional: "تاريخ الميلاد (اختياري - لتاريخ الإرساء)",
    birthDateUsage: "يُستخدم لحساب دوراتك الشخصية. يُستخدم تاريخ اليوم افتراضيًا إن لم يُحدَّد.",
    location: "الموقع (اختياري)",
    optional: "اختياري",
    optionalForRestSignal: "اختياري - لإشارة الراحة",
    restSignalNote: "يفعّل الكشف الشخصي لإشارة الراحة",
    addMotherName: "أضف اسم الأم (اختياري)",
    motherNameOptional: "اسم الأم (اختياري)",
    motherNameRequired: "اسم الأم (مطلوب)",
    motherNameRequiredExplanation: "مسار الحياة شخصي بالنسبة لك. يضمن اسم والدتك أن تعكس هذه القراءة رحلتك الفريدة، لا مجرد نمط عام لكل من يحمل اسمك.",
    timingRequiredExplanation: "يُحسب التوقيت الإلهي وفق تأثيراتك الكوكبية الخاصة. يخصّص اسم والدتك هذه الحسابات لبصمتك الروحية الفريدة.",
    clearMotherName: "مسح",
    latinAutoTransliterates: "لاتيني (إنجليزي/فرنسي) - تحويل تلقائي",
    arabicDirectInput: "عربي - إدخال مباشر",
    whyMotherRequired: "لماذا اسم الأم مطلوب؟",
    namePlaceholderEn: "مثال: فاطمة، إبراهيم، أمادو",
    motherNamePlaceholderEn: "مثال: فاطمة، خديجة، عائشة",
    namePlaceholderAr: "محمد",
    motherNamePlaceholderAr: "فاطمة",
    nameLatinLabel: "الاسم (بالحروف اللاتينية)",
    nameHelperText: "اكتب اسمك بالحروف اللاتينية - سنعرض ما يقابله بالعربية",
    nameHelperTextSuggestions: "ابدأ الكتابة لرؤية اقتراحات عربية",
    selectArabicName: "اختر الاسم العربي",
    noMatchesFound: "لا توجد نتائج مطابقة",
    typeToSearch: "اكتب للبحث عن الأسماء...",
    autofillToggle: {
      label: "استخدم معلومات ملفي الشخصي",
      description: "أوقف التفعيل للحساب لأفراد العائلة أو الأصدقاء",
    },
    autoTransliterate: "تحويل تلقائي إلى العربية • يدعم الأسماء الإنجليزية/الفرنسية",
    confidence: "الثقة",
    showKeyboard: "إظهار لوحة المفاتيح",
    hideKeyboard: "إخفاء لوحة المفاتيح",
    noneInYourName: "لا يوجد في اسمك",
    analyzeButton: "حلّل",
    analysisError: "خطأ في التحليل",
    yourSpiritualProfile: "ملفك الروحي",
    ruh: "الروح",
    element: "العنصر",
    currentHarmony: "الانسجام الحالي",
    allForcesAligned: "جميع القوى متوافقة × تدفق ممتاز",
    mixedSignals: "إشارات مختلطة × تقدّم بوعي",
    challengingEnergies: "طاقات صعبة × الصبر مطلوب",
    dominantForce: "القوة الغالبة",
    weekAtAGlance: "نظرة على الأسبوع",
    peakDayThisWeek: "أفضل يوم هذا الأسبوع",
    bestForInitiatives: "الأفضل للمبادرات المهمة",
    focusDay: "يوم التركيز",
    forDeepWorkAndPlanning: "للعمل العميق والتخطيط",
    harmony: "الانسجام",
    planet: "الكوكب",
    energyReturnSpeedsThisWeek: "سرعات عودة الطاقة هذا الأسبوع",
    whenActionsManifestResults: "متى تتجلى نتائج الأفعال (مفهوم كلاسيكي: الارتطاب)",
    sameDay: "نفس اليوم",
    fewHours: "بضع ساعات",
    twoDays: "2-3 أيام",
    oneToTwoWeeks: "1-2 أسبوع",
    deepRestNeeded: "راحة عميقة مطلوبة",
    restSignal: "إشارة الراحة (الانفصال)",
    criticalLowEnergy: "طاقة منخفضة حرجة - احترم إشارة الشفاء هذه من جسدك وروحك.",
    lowHarmonyPause: "انسجام منخفض + طاقة {planet} = وقت للتوقف، لا للدفع.",
    restPractices: "ممارسات الراحة (اختر واحدة):",
    betterDaysThisWeek: "أيام أفضل هذا الأسبوع:",
    rescheduleImportantTasks: "أعد جدولة المهام المهمة لهذه الأيام عالية الانسجام لنتائج أفضل.",
    classicalWisdom: "حكمة كلاسيكية:",
    stillnessBeforeMotion: "السكون قبل الحركة",
    stillnessExplanation: "(السكون قبل الحركة يجلب فعلًا مباركًا)",
    leadership: "القيادة والحيوية",
    emotions: "المشاعر والحدس",
    action: "الفعل والشجاعة",
    communication: "التواصل والتعلّم",
    expansion: "التوسع والحكمة",
    love: "الحب والانسجام",
    structure: "البنية والانضباط",
    ruhPhase: "طور الروح",
    phase: "الطور",
    energyBand: "نطاق الطاقة",
    allTipsForTheDay: "كل نصائح اليوم",
    planMindfully: "خطط بوعي",
    instant: "فوري",
    quick: "سريع",
    gradual: "تدريجي",
    delayed: "متأخر",
    restSignalBadge: "إشارة راحة",
    deepRest: "راحة عميقة",
    instantLower: "فوري",
    quickLower: "سريع",
    gradualLower: "تدريجي",
    delayedLower: "متأخر",
    sameDayParens: "(نفس اليوم)",
    fewHoursParens: "(بضع ساعات)",
    twoDaysParens: "(2-3 أيام)",
    oneToTwoWeeksParens: "(1-2 أسبوع)",
    reflectiveGuidance: "إرشاد تأملي لتخطيط أسبوعك. استخدم حكمك الخاص. هذه أداة مساعدة للإيقاع والتخطيط، لا تنبؤ أو نصيحة طبية/مالية.",
    unableToGenerateWeekly: "تعذّر إنشاء التوقعات الأسبوعية. يرجى إدخال اسم عربي صحيح.",
    best: "الأفضل",
    gentle: "لطيف",
    focus: "تركيز",
    yourGuidanceForThisDay: "إرشادك لهذا اليوم",
    energyReturnWisdom: "حكمة عودة الطاقة",
    returnSpeed: "سرعة العودة:",
    todaysPractice: "ممارسة اليوم:",
    classicalTeaching: "تعليم كلاسيكي (الدرس 25):",
    classicalQuote: "من زرع خيرًا حصد خيرًا",
    classicalMeaning: "(من يزرع الخير يحصد الخير) × يعتمد توقيت الحصاد على البذرة والموسم.",
    optimalSequence: "التسلسل الأمثل لـ {day}",
    timeWindows: "النوافذ الزمنية",
  },
  balanceMeter: {
    balance: "التوازن",
    conflict: "النزاع",
    moderate: "معتدل",
    harmony: "الانسجام",
    yourBalanceToday: "رصيدك اليوم", // TODO review (machine draft)
    tooMuch: "الزيادة المفرطة:", // TODO review (hand draft, not from mobile)
    needMore: "الحاجة إلى المزيد:", // TODO review (machine draft)
    quickFix: "حلّ سريع", // TODO review (hand draft, not from mobile)
    severeConflict: "تعارض شديد", // TODO review (hand draft, not from mobile)
    mild: "خفيف", // TODO review (hand draft, not from mobile)
    startTimer: "ابدأ مؤقّت {duration} دقيقة", // TODO review (hand draft, not from mobile)
    focusOnPractice: "ركّز على ممارستك...", // TODO review (hand draft, not from mobile)
    stopTimer: "أوقف المؤقّت", // TODO review (hand draft, not from mobile)
    recheckBalance: "أعد فحص التوازن: بعد ساعتين من إتمام الحل السريع", // TODO review (hand draft, not from mobile)
    scoreUpdates: "تحديث الدرجة: منتصف الليل (يبدأ يوم كوكبي جديد)", // TODO review (hand draft, not from mobile)
    validFor: "صالح لـ: اليوم فقط — كل يوم يأتي بتوازن عناصر جديد", // TODO review (hand draft, not from mobile)
    whyThisScore: "سبب هذه الدرجة:", // TODO review (hand draft, not from mobile)
    whatDoesScoreMean: "ماذا تعني نتائجي؟", // TODO review (machine draft)
    scoreGuide: "دليل الدرجات", // TODO review (hand draft, not from mobile)
    harmonyRange: "70-100: انسجام", // TODO review (hand draft, not from mobile)
    harmonyDesc: "تدفّق ممتاز. تعديلات طفيفة فقط.", // TODO review (hand draft, not from mobile)
    moderateRange: "40-69: معتدل", // TODO review (hand draft, not from mobile)
    moderateDesc: "توازن مقبول. الحلول السريعة تساعد.", // TODO review (hand draft, not from mobile)
    conflictRange: "0-39: النزاع", // TODO review (machine draft)
    conflictDesc: "يوم صعب. يحتاج إلى إعادة توازن عميقة.", // TODO review (hand draft, not from mobile)
    basedOnMizan: "مبني على مفهوم الميزان في تراث علم الحروف عند الإمام البوني", // TODO review (hand draft, not from mobile)
  },
  footer: {
    about: "حول التطبيق",
    privacy: "سياسة الخصوصية",
    tagline: "علم العدد والحسابات الروحية", // TODO review (hand draft, not from mobile)
    rights: "جميع الحقوق المحجوزة", // TODO review (machine draft)
    contact: "اتصل بنا", // TODO review (hand draft, not from mobile)
  },
  spiritualStations: {
    "1": {
      name: "التوحيد",
      meaning: "الوحدانية الإلهية",
      quality: "القيادة، الاستقلالية، الأصالة",
      shadow: "الكبرياء، العزلة، الجمود",
      practice: "تأمل في الوحدانية الإلهية. تأمل: 'كل القوة لله الواحد.'",
      verse: "قُلْ هُوَ اللَّهُ أَحَدٌ (112:1)",
      practical: "ابدأ مشاريع جديدة، بادر، ومارس الاعتماد على النفس. الأفضل للعمل الفردي.",
    },
    "2": {
      name: "المعاونة",
      meaning: "المعونة الإلهية",
      quality: "التعاون، التوازن، الدبلوماسية",
      shadow: "التردد، الاعتماد، تجنّب النزاع",
      practice: "اطلب الانسجام في العلاقات. تأمل: 'اثنان خير من واحد.'",
      verse: "وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ (5:2)",
      practical: "ابنِ شراكات، توسّط في النزاعات، اخلق توازنًا. جيد للعمل الجماعي.",
    },
    "3": {
      name: "الإبداع",
      meaning: "التعبير الإبداعي",
      quality: "الإبداع، التواصل، الفرح",
      shadow: "تشتت الطاقة، السطحية، النميمة",
      practice: "عبّر عن الإلهام الإلهي. تأمل: 'يتجلى الجمال من خلالي.'",
      verse: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ (96:1)",
      practical: "اصنع فنًا، اكتب، تحدّث علنًا، علّم. وجّه الطاقة الإبداعية.",
    },
    "4": {
      name: "الاستقرار",
      meaning: "الثبات",
      quality: "الأساس، النظام، الانضباط",
      shadow: "الجمود، القيد، العناد",
      practice: "ابنِ أسسًا راسخة. تأمل: 'الصبر مفتاح الفرج.'",
      verse: "إِنَّ اللَّهَ يُحِبُّ الَّذِينَ يُقَاتِلُونَ فِي سَبِيلِهِ صَفًّا كَأَنَّهُم بُنْيَانٌ مَّرْصُوصٌ (61:4)",
      practical: "نظّم، خطط، ابنِ أنظمة، أرسِ عادات. أنشئ بنية.",
    },
    "5": {
      name: "التحوّل",
      meaning: "التحول",
      quality: "الحرية، المغامرة، التغيير",
      shadow: "القلق، اللامسؤولية، الإدمان",
      practice: "تبنَّ التغيير المقدس. تأمل: 'كل شيء يتغير إلا وجه الله.'",
      verse: "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ (13:11)",
      practical: "سافر، تعلّم مهارات جديدة، تكيّف مع التغيير. اسعَ للتنوع والتجربة.",
    },
    "6": {
      name: "الخدمة",
      meaning: "الخدمة",
      quality: "المسؤولية، الرعاية، الانسجام",
      shadow: "التضحية المفرطة، التدخل، الكمالية",
      practice: "اخدم بحب. تأمل: 'خير الناس أنفعهم للناس.'",
      verse: "خير الناس من ينفع الناس (أحمد)",
      practical: "ساعد الأسرة، اعتنِ بالآخرين، اخلق الجمال. ركّز على المنزل والمجتمع.",
    },
    "7": {
      name: "الحكمة",
      meaning: "الحكمة الإلهية",
      quality: "التحليل، التأمل الذاتي، الروحانية",
      shadow: "العزلة، التشاؤم، الإفراط في التحليل",
      practice: "اطلب المعرفة الباطنة. تأمل: 'من عرف نفسه عرف ربه.'",
      verse: "يُؤْتِي الْحِكْمَةَ مَن يَشَاءُ (2:269)",
      practical: "ادرس، ابحث، تأمل، اعتزل. عمّق الممارسة الروحية.",
    },
    "8": {
      name: "القدرة",
      meaning: "القدرة الإلهية",
      quality: "الوفرة، السلطة، الإنجاز",
      shadow: "الجشع، السيطرة، المادية",
      practice: "ارعَ الوفرة الإلهية. تأمل: 'أنا قناة للرزق الإلهي.'",
      verse: "وَمَا أَنفَقْتُم مِّن شَيْءٍ فَهُوَ يُخْلِفُهُ (34:39)",
      practical: "أدر الموارد، قُد المؤسسات، اخلق الثروة. ابنِ نفوذًا.",
    },
    "9": {
      name: "الكمال",
      meaning: "الاكتمال",
      quality: "الرحمة، الحكمة، الحب الشامل",
      shadow: "التضحية المفرطة، التلاعب العاطفي، الهروب",
      practice: "اخدم الإنسانية. تأمل: 'أُسلّم بحب وثقة.'",
      verse: "الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ (5:3)",
      practical: "أتمّ المشاريع، سامح، دع الأمور تذهب. علّم وأرشد الآخرين.",
    },
    "11": {
      name: "الإشراق الروحي",
      meaning: "الصحوة الروحية",
      quality: "الحدس، الإلهام، الرؤية",
      shadow: "المثالية المفرطة، الانفصال",
      practice: "وجّه الإلهام الأسمى",
      verse: "نور على نور",
      practical: "علّم، ألهم، أرشد بحكمة روحية",
    },
    "22": {
      name: "الباني الأعظم",
      meaning: "التجلي",
      quality: "البناء، الرؤية العملية، الأثر",
      shadow: "الضغط، التوقعات غير الواقعية",
      practice: "ابنِ هياكل دائمة",
      verse: "ابنِ بحكمة",
      practical: "أنشئ أنظمة ومؤسسات وإرثًا دائمًا",
    },
    "33": {
      name: "المعلّم الأعظم",
      meaning: "الرحمة الشاملة",
      quality: "الشفاء، التعليم، الخدمة",
      shadow: "الإرهاق، التضحية بالذات",
      practice: "علّم واشفِ بحب",
      verse: "أرشد بالرحمة",
      practical: "أرشد، اشفِ، اخدم الإنسانية",
    },
  },
  dailyDhikr: {
    Fire: {
      time: "بعد الفجر",
      benefit: "يقوّي العزيمة والشجاعة", // TODO review (hand draft, not from mobile)
    },
    Water: {
      time: "بعد المغرب",
      benefit: "ييسّر العسير ويليّن القلوب", // TODO review (hand draft, not from mobile)
    },
    Earth: {
      time: "قبل النوم",
      benefit: "يمنح الصبر والثبات", // TODO review (hand draft, not from mobile)
    },
    Air: {
      benefit: "زيادة المعرفة والوضوح", // TODO review (machine draft)
      time: "بعد العشاء", // TODO review (hand draft, not from mobile)
    },
  },
  weeklyResults: {
    unableToGenerate: "تعذّر إنشاء التوقعات الأسبوعية. يرجى إدخال اسم عربي صحيح.",
    badges: {
      best: "الأفضل",
      gentle: "لطيف",
      focus: "تركيز",
    },
    timeWindows: "النوافذ الزمنية",
    morning: "الصباح",
    midday: "الظهيرة",
    afternoon: "بعد الظهر",
    evening: "المساء",
    bestFor: "الأفضل لـ",
    avoid: "تجنّب",
    closesIn: "تُغلق خلال",
    nextWindow: "النافذة التالية",
    closeDetails: "أغلق التفاصيل", // TODO review (hand draft, not from mobile)
    energyType: "نوع الطاقة", // TODO review (machine draft)
    planetalPhase: "المرحلة الكوكبية", // TODO review (hand draft, not from mobile)
    peakClarity: "ذروة الصفاء", // TODO review (hand draft, not from mobile)
    socialEnergy: "الطاقة الاجتماعية", // TODO review (machine draft)
    endurancePhase: "مرحلة التحمّل", // TODO review (hand draft, not from mobile)
    reviewTime: "استعراض الوقت", // TODO review (machine draft)
    classicalTeaching: "تعليم كلاسيكي (الدرس", // TODO review (hand draft, not from mobile)
    forEverythingTime: "لكل شيء هناك وقت", // TODO review (machine draft)
    successFromRightAction: "النجاح يأتي من العمل الصحيح في الوقت المناسب", // TODO review (machine draft)
    allTips: "كل النصائح", // TODO review (hand draft, not from mobile)
    peakPerformanceDay: "يوم الأداء الأمثل", // TODO review (hand draft, not from mobile)
    steadyProgressDay: "يوم التقدّم الثابت", // TODO review (hand draft, not from mobile)
    restReflectionDay: "يوم الراحة والتأمّل", // TODO review (hand draft, not from mobile)
    overallEnergy: "الطاقة العامة",
    thisMonthFlow: "تدفق هذا الشهر",
    clickIndicator: "▼", // same as EN (transliteration/Arabic/brand)
  },
  destinyResults: {
    arabicText: "النص العربي",
    kabir: "الكبير",
    hadath: "الحدث",
    grandTotal: "المجموع الكلي",
    element: "العنصر",
    strengths: "نقاط القوة",
    lifePath: "مسار الحياة",
    soulUrge: "رغبة الروح",
    personality: "الشخصية",
    whatMakesHappy: "ما يسعدك حقًا. رغباتك الأعمق وإشباعك الداخلي.",
    impressionYouGive: "الانطباع الذي تتركه. كيف يراك الناس ويختبرونك للوهلة الأولى.",
    specialNumbers: "أرقام ودروس خاصة",
    lessonsToLearn: "دروس يجب تعلّمها",
    blessedNumbers: "أرقام مباركة",
    unableToCalculate: "غير قادر على حساب القدر رجاءً إدخلْ a اسم.", // TODO review (machine draft)
    loadingVerse: "جارٍ تحميل الآية...", // TODO review (hand draft, not from mobile)
    verseError: "تعذّر تحميل الآية حاليًا. حدّث الصفحة أو زر Quran.com مباشرة.", // TODO review (hand draft, not from mobile)
    englishTranslation: "الترجمة التحريرية الإنكليزية", // TODO review (machine draft)
    readFullVerse: "اقرأ الآية كاملة على Quran.com", // TODO review (hand draft, not from mobile)
    ayahOf: "الآية {ayah} من {total}", // TODO review (hand draft, not from mobile)
    noVerseData: "لا تتوفّر بيانات آية لهذا الرنين.", // TODO review (hand draft, not from mobile)
    growthAreas: "مناطق النمو", // TODO review (machine draft)
    yourNumbers: "أرقامك", // TODO review (machine draft)
    corePersonality: "الشخصية الجوهرية", // TODO review (hand draft, not from mobile)
    innerDesires: "الرغبات الباطنة", // TODO review (hand draft, not from mobile)
    howOthersSee: "كيف الآخرون يرونك", // TODO review (machine draft)
    lifePurpose: "غاية الحياة", // TODO review (hand draft, not from mobile)
    destiny: "القدر", // TODO review (machine draft)
    coreTalents: "مواهبك الجوهرية وقواك الطبيعية؛ القدرات التي وُلدت بها.", // TODO review (hand draft, not from mobile)
    ultimateGoal: "غاية حياتك وما خُلقت لتحقيقه؛ هدفك الأسمى.", // TODO review (hand draft, not from mobile)
    lessonsDescription: "تمثّل هذه الأعداد دروسًا تريد روحك تعلّمها في هذه الحياة. ليست عوائق، بل فرص للنمو.", // TODO review (hand draft, not from mobile)
    blessedDescription: "أعداد قوية مرتبطة بالتراث الروحي، يُرجى بها البركة والحفظ في حياتك.", // TODO review (hand draft, not from mobile)
  },
  compatibilityResults: {
    overallCompatibility: "التوافق الشامل",
    spiritualDestiny: "القدر الروحي",
    elementalTemperament: "المزاج العنصري",
    remainder: "الباقي",
    sharedElement: "العنصر",
    recommendations: "التوصيات",
    strengths: "نقاط القوة",
    challenges: "التحديات",
    letterChemistryArabic: "زواج الحروف",
    balancingDhikr: "ذكر الموازنة",
    temperament: "المزاج",
    fire: "نار",
    air: "هواء",
    water: "ماء",
    earth: "أرض",
    harmony: "الانسجام",
    unableToCalculate: "غير قادر على حساب التوافق يرجى ضمان إدخال الاسمين معا.", // TODO review (machine draft)
    threeAnalysisMethods: "ثلاثة أساليب تحليل", // TODO review (machine draft)
    planetaryCosmic: "الكوكبي الفلكي", // TODO review (hand draft, not from mobile)
    letterChemistry: "كيمياء الحروف", // TODO review (hand draft, not from mobile)
    letterChemistryDesc: "يبيّن الطبع العنصري بين الاسمين. يحمل كل حرف طاقة النار أو الهواء أو الماء أو التراب، ومزيجها يشكّل التوازن العاطفي والطاقي لصلتكما.", // TODO review (hand draft, not from mobile)
    combinedHarmony: "الانسجام المشترك", // TODO review (hand draft, not from mobile)
    combinedHarmonyExplain: "كلما ارتفع كان تدفّق العناصر بينكما أسلس", // TODO review (hand draft, not from mobile)
    balancingDhikrContext: "تساعد هذه الأذكار على موازنة العناصر الغالبة حتى ينسجم الطرفان.", // TODO review (hand draft, not from mobile)
    for: "لأجل", // TODO review (hand draft, not from mobile)
    fireTemperament: "الطبع الناري × متّقد، مبدع، جريء", // TODO review (hand draft, not from mobile)
    airTemperament: "الطبع الهوائي × سريع، فكري، تواصلي", // TODO review (hand draft, not from mobile)
    waterTemperament: "الطبع المائي × هادئ، عاطفي، حدسي", // TODO review (hand draft, not from mobile)
    earthTemperament: "الطبع الترابي × مستقر، عملي، راسخ", // TODO review (hand draft, not from mobile)
    balanceAdvice: {
      fireFire: "اذكروا معًا بهدوء، وتجنّبوا التسرّع في القرارات.", // TODO review (hand draft, not from mobile)
      fireAir: "تآزر إبداعي! جيد للمشاريع والأفكار، لكن خذوا وقتًا للتهدئة معًا.", // TODO review (hand draft, not from mobile)
      fireWater: "وازنوا الحماس بالصبر، وبرّدوا اللهب بالتفهّم.", // TODO review (hand draft, not from mobile)
      fireEarth: "اجمعوا الرؤية مع التخطيط؛ لتُلهم النار، ولينفّذ التراب.", // TODO review (hand draft, not from mobile)
      airAir: "عبّروا عن الأفكار بوضوح، لكن ثبّتوها بالعمل.", // TODO review (hand draft, not from mobile)
      airWater: "عبّروا عن مشاعركم بوضوح بالكلمات أو الفن. اكتبوا أو أنشدوا معًا.", // TODO review (hand draft, not from mobile)
      airEarth: "الأفكار تلتقي بالعملية؛ تناقشوا ثم ابنوا معًا.", // TODO review (hand draft, not from mobile)
      waterWater: "اعتنوا بمشاعر بعضكم، واصنعوا مساحات آمنة هادئة.", // TODO review (hand draft, not from mobile)
      waterEarth: "الحركات الإبداعية ترتاح معا الكوك، حديقة، أو خلق الجمال.", // TODO review (machine draft)
      earthEarth: "بناء الاستقرار معا، ولكن ترك المجال لل العفوية.", // TODO review (machine draft)
    },
    dhikrEffects: {
      fireEffect: "يبرّد الحدّة ويجلب اللين", // TODO review (hand draft, not from mobile)
      airEffect: "يركّز العقل، يجلب الحكمة", // TODO review (machine draft)
      waterEffect: "يرفع العاطفة إلى الوضوح", // TODO review (hand draft, not from mobile)
      earthEffect: "يليّن الجمود ويفتح الإمكانات", // TODO review (hand draft, not from mobile)
    },
    accuracy: "الدقة", // TODO review (hand draft, not from mobile)
    precision: "الدقة", // TODO review (hand draft, not from mobile)
    weight: "الوزن", // TODO review (hand draft, not from mobile)
    motherOf: "الأم", // TODO review (machine draft)
    whatThisMeans: "ما يعني هذا",
    showCalculationDetails: "اعرض تفاصيل الحساب", // TODO review (hand draft, not from mobile)
    understandingTerms: "فهم المصطلحات", // TODO review (hand draft, not from mobile)
    hoverToLearnMore: "مرّر فوق أيقونات ℹ️ لمعرفة المزيد", // TODO review (hand draft, not from mobile)
    fourLayersTitle: "طبقات التوافق الأربع", // TODO review (hand draft, not from mobile)
    inDailyLife: "🏠 الحياة اليومية:", // TODO review (machine draft)
    challenge: "تحدّي",
    tip: "نصيحة",
    mostImportantForMarriage: "💜 الأهم للزواج", // TODO review (hand draft, not from mobile)
    dailyImpact: "🏠 الأثر اليومي:", // TODO review (hand draft, not from mobile)
    innerTemperament: "💡 الطبع الباطن", // TODO review (hand draft, not from mobile)
    cosmicTemperament: "💡 الطبع الفلكي", // TODO review (hand draft, not from mobile)
  },
  fourLayerCompatibility: {
    title: "تحليل التوافق الرباعي الطبقات",
    titleArabic: "تحليل التوافق الرباعي",
    subtitle: "الطريقة التقليدية الكاملة لغرب إفريقيا",
    description: "يفحص هذا التحليل شخصيتيكما الواعيتين (من أسمائكما) وأنماطكما العاطفية الموروثة (من أسماء والدتيكما) لإعطاء أدق قراءة توافق.",
    person1Name: "اسم الشخص الأول",
    person2Name: "اسم الشخص الثاني",
    person1MotherName: "اسم والدة الشخص الأول",
    person2MotherName: "اسم والدة الشخص الثاني",
    optional: "(اختياري لتحليل أعمق)",
    nameTooltip: "💡 يكشف اسمك عن ذاتك الواعية × كيف تظهر في العالم، شخصيتك النشطة، وكيف يراك الآخرون.",
    analysisMode: "نمط التحليل",
    quickAnalysis: "تحليل سريع (الأسماء فقط)",
    quickAnalysisDesc: "اطّلع على كيفية تفاعل شخصيتيكما الواعيتين في الحياة اليومية. جيد للفضول الأولي.",
    completeAnalysis: "تحليل كامل (الأسماء + الأمهات) ⭐ موصى به",
    completeAnalysisDesc: "الطريقة التقليدية لغرب إفريقيا. تكشف كلًا من الكيمياء السطحية والتوافق العاطفي العميق. ضروري للعلاقات الجادة.",
    overallCompatibilityTitle: "التوافق الشامل",
    overallCompatibilityArabic: "التوافق الشامل",
    overallExplanation: "تُحسب هذه الدرجة من جميع الطبقات الأربع لارتباطكما، مع ترجيح يعطي الأولوية للأساس العاطفي (الأهم للانسجام طويل الأمد).",
    excellent: "ممتاز",
    excellentRange: "85-100%",
    excellentMeaning: "توافق استثنائي على المستويين السطحي والروحي. تتكامل طاقاتكما بشكل جميل.",
    veryGood: "جيد جدًا",
    veryGoodRange: "70-84%",
    veryGoodMeaning: "توافق قوي مع مجالات بسيطة تحتاج رعاية. لهذا الارتباط إمكانية كبيرة بجهد متبادل.",
    good: "جيد",
    goodRange: "55-69%",
    goodMeaning: "توافق معتدل. يمكنكما بناء علاقة منسجمة بالتفاهم والتواصل والتنازل.",
    challenging: "صعب",
    challengingRange: "40-54%",
    challengingMeaning: "اختلافات كبيرة في الطاقة والأسلوب. تتطلب هذه العلاقة جهدًا كبيرًا وصبرًا ونموًا متبادلًا.",
    difficult: "صعب جدًا",
    difficultRange: "0-39%",
    difficultMeaning: "تعارضات عنصرية كبيرة. رغم أنه ليس مستحيلًا، يواجه هذا الاقتران تحديات جوهرية تتطلب التزامًا عميقًا لتجاوزها.",
    layer1Title: "توافق الحياة اليومية",
    layer1TitleArabic: "التوافق اليومي",
    layer1Subtitle: "الديناميكية الظاهرة",
    layer2Title: "الأساس العاطفي",
    layer2TitleArabic: "الأساس العاطفي",
    layer2Subtitle: "الديناميكية العميقة",
    layer2Badge: "🌟 الأهم للانسجام طويل الأمد",
    layer3Title: "تأثير الشخص الأول على جوهر الشخص الثاني العاطفي",
    layer4Title: "تأثير الشخص الثاني على جوهر الشخص الأول العاطفي",
    crossDynamicsTitle: "ديناميكيات التأثير المتبادل",
    crossDynamicsArabic: "الديناميكيات المتقاطعة",
    crossDynamicsExplanation: "تُظهر هذه الطبقات كيف تؤثر الطاقة الواعية لكل شخص على الجوهر العاطفي للآخر. فكّر فيها كـ: 'كيف تلامس شخصيتك قلبه؟'",
    whatItMeasures: "📖 ما يقيسه هذا:",
    basedOn: "🔍 مبني على:",
    whyItMatters: "💡 لماذا يهم:",
    layer1WhatItMeans: "كيف تتفاعل شخصيتاكما الواعيتان يوميًا. هذه هي الطاقة التي تجلبانها فعليًا للمحادثات والقرارات والأنشطة المشتركة. إنها ما يراه الناس عندما ينظرون إلى علاقتكما.",
    layer1BasedOn: "المزاجات العنصرية من كلا اسميكما (محسوبة باستخدام طريقة الحدث ÷ 4)",
    layer1WhyItMatters: "يحدد هذا أسلوب تواصلكما، وحل النزاعات، وما إذا كنتما 'تفهمان' بعضكما طبيعيًا في اللحظات اليومية. الدرجات العالية هنا تعني تدفقًا سهلًا وطبيعيًا في الحياة اليومية.",
    layer2WhatItMeans: "التوافق العاطفي اللاواعي الموروث من والدتيكما. هذا هو 'شعور المنزل' الذي تخلقانه معًا × الراحة والأمان والرابطة العميقة غير المعلنة التي إما موجودة طبيعيًا أو يجب بناؤها.",
    layer2BasedOn: "المزاجات العنصرية من اسمي والدتيكما (محسوبة باستخدام طريقة الحدث ÷ 4)",
    layer2WhyItMatters: "هذه هي الطبقة الأهم للزواج والشراكة طويلة الأمد. إليك السبب:\n\n• شكّلت أنماط والدتك العاطفية كيف تعطي وتتلقى الحب\n• تحدد هذه الطبقة ما إذا كنتما تشعران بـ\"الأمان\" عاطفيًا معًا\n• الدرجات العالية هنا تعني أنكما تفهمان احتياجات بعضكما بالفطرة\n• الدرجات المنخفضة تعني أنكما ستحتاجان لعمل واعٍ لتلبية احتياجات بعضكما العاطفية\n\nيعاني كثير من الأزواج ذوي الكيمياء السطحية الرائعة لأن هذه الطبقة غير منسجمة. معرفة ذلك مسبقًا تساعدكما على الاستعداد.",
    layer2ExampleTitle: "🎭 مثال من الواقع:",
    layer2Example: "أحمد وليلى لديهما كيمياء يومية رائعة (نار + هواء = 85%).\n\nلكن عند حدوث ضغط:\n• جذور أحمد المائية (من والدته) تحتاج معالجة عاطفية وحوارًا\n• جذور ليلى النارية (من والدتها) تحتاج مساحة وفعلًا لتشعر بتحسن\n\nدون معرفة هذا، يؤذيان بعضهما:\n• يشعر أحمد بالهجران عندما تأخذ ليلى مساحتها\n• تشعر ليلى بالاختناق عندما يريد أحمد الحديث\n\nبهذه المعرفة، يفهمان: \"كلانا يحاول الشعور بالأمان × بطرق مختلفة فقط.\"",
    dualTemperamentTitle: "🎭 مزاجاتكما الفردية",
    dualTemperamentArabic: "طبائعكم الفردية",
    dualTemperamentExplanation: "فهم المزاج الداخلي (الواعي) والكوني (اللاواعي) لكل شخص يساعدكما على رؤية الشخص كاملًا × لا السطح فقط.",
    innerTemperament: "الطبع الباطن",
    innerTemperamentArabic: "الطبع الباطن",
    innerTemperamentDef: "ذاتك الواعية × كيف تظهر فعليًا في العالم. محسوب من اسمك.",
    cosmicTemperament: "الطبع الفلكي",
    cosmicTemperamentArabic: "الطبع الفلكي",
    cosmicTemperamentDef: "مخططك العاطفي الموروث × الأنماط اللاواعية من نسبك. محسوب من اسم والدتك.",
    fullyAligned: "متوافق تمامًا",
    fullyAlignedMeaning: "أنت أصيل فيما تبدو عليه. ما يراه الناس يطابق ما تشعر به داخليًا. يخلق هذا طاقة قوية ومتسقة.",
    fullyAlignedChallenge: "قد يكون هذا كثيرًا من ذلك العنصر × ينقصه التوازن من عناصر أخرى.",
    naturallyBalanced: "متوازن طبيعيًا",
    naturallyBalancedMeaning: "يدعم جانباك الباطني والفلكي بعضهما. لديك وصول إلى طاقات متعددة تعمل معًا بانسجام.",
    internalComplexity: "التعقيد الداخلي",
    internalComplexityMeaning: "هناك فجوة بين كيف تظهر وما تحتاجه عاطفيًا. قد لا يرى الآخرون عمقك الكامل. قد تشعر بسوء الفهم.",
    internalComplexityAdvice: "💡 عملك هو التكامل: السماح لذاتك الداخلية بالتعبير عبر ذاتك الخارجية. احترم كلا الجانبين.",
    yourPersonalizedGuidance: "💡 إرشادكما الشخصي",
    yourPersonalizedGuidanceArabic: "إرشاداتكم الشخصية",
    guidanceIntro: "بناءً على جميع الطبقات الأربع لتوافقكما، إليكما نصيحة محددة لتقوية ارتباطكما:",
    yourNaturalStrengths: "🌟 نقاط قوتكما الطبيعية",
    strengthsDesc: "هذه المجالات تأتي بسهولة لكما. احتفلا بها وحافظا عليها:",
    areasToNurture: "⚠️ مجالات تحتاج رعاية",
    challengesDesc: "تحتاج هذه المجالات انتباهًا واعيًا، لكن الوعي نصف الحل:",
    specificPractices: "🛠️ ممارسات محددة",
    practicesDesc: "جرّبا هذه الأنشطة لموازنة ديناميكياتكما العنصرية:",
    spiritualBalancing: "🤲 التوازن الروحي",
    dhikrDesc: "تساعد هذه العبارات المقدسة على مواءمة طاقاتكما العنصرية:",
    understandingTheTerms: "[ℹ️ فهم المصطلحات]",
    glossaryTitle: "📚 مسرد علم الحروف",
    glossaryTitleArabic: "مسرد علم الحروف",
    ilmAlHuruf: "علم الحروف",
    ilmAlHurufArabic: "علم الحروف",
    ilmAlHurufDef: "علم الحروف × علم إسلامي قديم يدرس الخصائص الروحانية للحروف العربية وقيمها العددية. يحمل كل حرف طاقة محددة (نار أو هواء أو ماء أو أرض) وقيمة عددية تُستخدم للحسابات الروحية.",
    hadath: "الحدث",
    hadathArabic: "الحدث",
    hadathDef: "الجوهر العددي × مجموع قيم جميع الحروف في الاسم باستخدام نظام الأبجد. يكشف هذا الرقم الجوهر الروحي وأنماط القدر.",
    hadathDiv4: "الحدث ÷ 4",
    hadathDiv4Def: "الطريقة الكلاسيكية لتحديد المزاج العنصري (النظام المغربي). يشير باقي قسمة الحدث على 4 إلى العنصر الغالب:\n• الباقي 1 = النار\n• الباقي 2 = الأرض\n• الباقي 3 = الهواء\n• الباقي 0 = الماء",
    zawajAlHuruf: "زواج الحروف",
    zawajAlHurufArabic: "زواج الحروف",
    zawajAlHurufDef: "زواج الحروف × تحليل التوافق بين اسمين بناءً على انسجامهما العنصري. كيف 'تتزوج' الحروف أو تتفاعل بين شخصين.",
    showCalculation: "[📊 عرض كيفية حسابنا لهذا]",
    calculationBreakdown: "🔢 تفصيل الحساب",
    calculationBreakdownArabic: "تفصيل الحسابات",
    step1: "الخطوة 1: تحويل الاسم إلى قيم أبجدية",
    step2: "الخطوة 2: جمع كل القيم",
    step3: "الخطوة 3: القسمة على 4",
    step4: "الخطوة 4: ربط الباقي بالعنصر",
    totalHadath: "المجموع (الحدث)",
    quotient: "خارج القسمة",
    remainder: "الباقي",
    element: "العنصر",
    weightingExplanation: "لماذا هذه الأوزان؟ الأساس العاطفي (40%) هو الأهم للانسجام طويل الأمد. الحياة اليومية (30%) تؤثر على السعادة اليومية. الديناميكيات المتقاطعة (15% لكل منهما) تُظهر كيف يؤثر كل منكما على جوهر الآخر.",
    motherNameTooltip: "💡 يكشف اسم أمك مخطّطك العاطفي: الأنماط والمشاعر والاحتياجات الكامنة التي ورثتها. وهو الأساس تحت شخصيتك.  📊 عمق التحليل: • بالأسماء وحدها: دقة 70% • مع أسماء الأمهات: دقة 90-95%  🌍 هذه هي الطريقة التقليدية التي حفظها علماء غرب أفريقيا لتوافق الزواج.  🔒 الخصوصية: تُستعمل أسماء الأمهات للحساب فقط ولا تُحفظ أبدًا.", // TODO review (hand draft, not from mobile)
    quickAccuracy: "70-75% دقة", // TODO review (machine draft)
    completeAccuracy: "90-95 في المائة دقة", // TODO review (machine draft)
  },
  lifePathResults: {
    currentLifePhase: "مرحلة حياتك الحالية",
    thisYearMonth: "طاقة هذه السنة والشهر",
    personalYear: "السنة الشخصية",
    personalMonth: "الشهر الشخصي",
    strengthsChallenges: "نقاط قوتك وفرص نموك",
    strength: "القوة",
    whatMakesCapable: "ما يجعلك قادرًا وموثوقًا",
    whatGivesEdge: "ما يمنحك ميزة",
    yourNaturalTalent: "موهبتك الطبيعية",
    whatYouExcelAt: "ما تتفوق فيه",
    aQualityToDevelop: "صفة يجب تطويرها",
    areaForImprovement: "مجال للتحسين",
    somethingToWorkOn: "شيء يجب العمل عليه",
    keyLifeLesson: "درس حياتي أساسي",
    mainStrengthSupporting: "هذه هي القوة الرئيسية التي تدعمك هذا الموسم",
    numberExplanations: {
      "1": {
        title: "القائد",
        meaning: "أنت مستقل بطبعك، مدفوع لابتكار أشياء جديدة، وتفضّل اتخاذ قراراتك بنفسك.", // TODO review (hand draft, not from mobile)
      },
      "2": {
        title: "صانع السلام",
        meaning: "تُجيد جمع الناس وإيجاد الانسجام، وأنت حسّاس لمشاعر الآخرين.", // TODO review (hand draft, not from mobile)
      },
      "3": {
        title: "المبدع",
        meaning: "تعبّر عن نفسك بسهولة وتجلب الفرح أينما ذهبت. التواصل هو قوتك.",
      },
      "4": {
        title: "الباني",
        meaning: "أنت موثوق وعملي. تبني أسسًا راسخة في كل ما تفعله.",
      },
      "5": {
        title: "المستكشف",
        meaning: "تحب الحرية والتنوع. تتكيف بسرعة وتتعلم من تجارب متنوعة.",
      },
      "6": {
        title: "الراعي",
        meaning: "أنت مسؤول وتريد طبيعيًا مساعدة الآخرين. الأسرة والخدمة تهمانك بعمق.",
      },
      "7": {
        title: "المفكر",
        meaning: "أنت تحليلي وروحاني، تبحث عن فهم أعمق لأسرار الحياة.", // TODO review (hand draft, not from mobile)
      },
      "8": {
        title: "المُنجِز",
        meaning: "أنت طموح ومركّز على النجاح. لديك قدرات قوية في الأعمال والقيادة.",
      },
      "9": {
        title: "الإنساني",
        meaning: "تهتم بالعالم وتريد إحداث فرق إيجابي. الرحمة توجّهك.",
      },
      "11": {
        title: "صاحب الرؤية",
        meaning: "ترى ما وراء الأشياء العادية. تُلهم الآخرين وتحمل رسائل روحية.",
      },
      "22": {
        title: "الباني الأعظم",
        meaning: "لديك طموحات كبيرة لخلق شيء دائم. تحوّل الأحلام إلى واقع على نطاق واسع.",
      },
    },
    yourLifeNumbers: "عدد حياتك", // TODO review (machine draft)
    introduction: "تكشف هذه الأعداد الأربعة شخصيتك الجوهرية، ورغباتك الباطنة، وكيف يراك الآخرون، وغاية حياتك. اعتبرها السمات الرئيسة التي تشكّل من أنت والطريق الذي تسلكه.", // TODO review (hand draft, not from mobile)
    whereYouAre: "أين أنت الآن", // TODO review (machine draft)
    phaseOf: "المرحلة {current} من 9", // TODO review (hand draft, not from mobile)
    yearOf: "السنة {current}/9", // TODO review (hand draft, not from mobile)
    focusAreas: "مجالات التركيز:",
    yourAge: "عمرك",
    years: "سنوات", // TODO review (hand draft, not from mobile)
    strengthsDescription: "يمثّل كل عدد من 1 إلى 9 صفات حياتية مختلفة. نقاط قوتك تبيّن ما تتفوّق فيه بطبعك، ومجالات النمو تبيّن ما يمكنك تطويره.", // TODO review (hand draft, not from mobile)
    whatYouAreStrongAt: "ما تتفوق فيه",
    whereYouCanGrow: "أين يمكنك النمو",
    growthArea: "منطقة النمو", // TODO review (machine draft)
    rightNow: "الآن", // TODO review (hand draft, not from mobile)
    currentStrength: "قوتك الحالية", // TODO review (machine draft)
    currentlyWorkingOn: "العمل حاليا على", // TODO review (machine draft)
    yourMainFocus: "تركيزك الرئيسي", // TODO review (machine draft)
    whatLifeTeaching: "هذا ما تعلّمك إياه الحياة الآن، فتقبّله!", // TODO review (hand draft, not from mobile)
  },
  timingResults: {
    currentPlanetaryHour: "الساعة الكوكبية الحالية",
    avoid: "تجنب:",
    moderate: "معتدل",
    count: "العدد",
    bestTime: "أفضل وقت",
    benefit: "الفائدة",
    optimalSequenceFor: "التسلسل الأمثل لـ {day}",
    morning: "الصباح",
    midday: "الظهيرة",
    afternoon: "بعد الظهر",
    evening: "المساء",
    avoidLabel: "تجنب:",
    harmonyScore: "الانسجام",
    yourElement: "عنصرك {element}",
    restDayQuote: "السكون قبل الحركة",
    alignment: "التوافق",
    timeRemaining: "الوقت المتبقي",
    you: "أنت",
    today: "اليوم",
    balanced: "توازن",
    waitForBetterTiming: "انتظر توقيتًا أفضل",
    dayRuler: "صاحب اليوم:",
    unableToCalculate: "غير قادر على حساب ساعة الكواكب أرجوك حاول مرة أخرى.", // TODO review (machine draft)
    deepRestNeededToday: "تحتاج اليوم إلى راحة عميقة", // TODO review (hand draft, not from mobile)
    todayIsRestDay: "اليوم هو يوم الراحة", // TODO review (machine draft)
    criticalLowEnergy: "رُصدت طاقة منخفضة جدًا. روحك تعيد ضبط نفسها، فاحترم هذه الإشارة بالراحة الجسدية والذهنية العميقة اليوم.", // TODO review (hand draft, not from mobile)
    lowHarmonyToday: "انخفاض الانسجام اليوم يشير إلى يوم راحة مدروس. ركّز على التخطيط والتأمّل بدل التنفيذ والبدايات الجديدة.", // TODO review (hand draft, not from mobile)
    recommendedToday: "موصى به اليوم",
    viewFullWeek: "عرض الأسبوع كاملًا", // TODO review (hand draft, not from mobile)
    dismiss: "إغلاق", // TODO review (hand draft, not from mobile)
    restDayActive: "يوم الراحة مفعّل", // TODO review (hand draft, not from mobile)
    restDayNote: "وتُعرض ساعات الطيران الواردة أدناه كمرجع، ولكنها تقلل إلى أدنى حد الأنشطة اليوم.", // TODO review (machine draft)
    favorableFor: "مؤاتٍ لـ",
    perfectAlignment: "توافق تام",
    strongEnergy: "طاقة قوية", // TODO review (hand draft, not from mobile)
    restTime: "وقت الراحة", // TODO review (hand draft, not from mobile)
    windowClosesIn: "ويندو يغلق في:", // TODO review (machine draft)
    nextWindow: "نافذة {element} التالية:", // TODO review (hand draft, not from mobile)
    bestForNow: "الأفضل الآن",
    bestForWhenReturns: "أفضل عندما يعود عنصرك:", // TODO review (machine draft)
    yourPersonalYear: "عامك الشخصي", // TODO review (machine draft)
    recommendedDhikr: "الذكر المقترح اليوم", // TODO review (hand draft, not from mobile)
    times: "مرة", // TODO review (hand draft, not from mobile)
    actNow: "اعمل الآن", // TODO review (hand draft, not from mobile)
    realTimeGuidance: "التوجيه في الوقت الحقيقي", // TODO review (machine draft)
    bestFor: "الأفضل لـ",
    harmony: "الانسجام",
    planetEnergy: "طاقة {planet}", // TODO review (hand draft, not from mobile)
    hourElement: "عنصر الساعة: {element}", // TODO review (hand draft, not from mobile)
    classicalWisdom: "الحكمة الكلاسيكية",
    deepRestQuote: "Man ʿarafa infisāl waqtihi, faqad ḥafaẓa ṭāqatahu", // same as EN (transliteration/Arabic/brand)
    deepRestTranslation: "من عرف وقت انفصاله حفظ طاقته", // TODO review (hand draft, not from mobile)
    restDayTranslation: "(السكون قبل الحركة يجلب فعلًا مباركًا)",
    minutesLeft: "بقيت {minutes} دقيقة", // TODO review (hand draft, not from mobile)
    hoursLeft: "بقيت {hours} ساعة", // TODO review (hand draft, not from mobile)
    energyStatus: "حالة الطاقة", // TODO review (hand draft, not from mobile)
    whatToWearToday: "ما الذي يلبس اليوم؟", // TODO review (machine draft)
    wearTheseColors: "البس هذه الألوان:", // TODO review (hand draft, not from mobile)
    tryThis: "جرب هذا:", // TODO review (machine draft)
    perfectFit: "توافق تام", // TODO review (hand draft, not from mobile)
    goingWell: "تسير على ما يرام", // TODO review (machine draft)
    needCare: "الحاجة لرعاية", // TODO review (machine draft)
    actNowRealTimeGuidance: "الآن - التوجيه في الوقت الحقيقي -", // TODO review (machine draft)
    useThisTimeFor: "إستخدم هذا الوقت:", // TODO review (machine draft)
    handleRoutineTasks: "أنجز المهام الروتينية", // TODO review (hand draft, not from mobile)
    continueOngoingWork: "تابع العمل الجاري", // TODO review (hand draft, not from mobile)
    plentyOfTime: "بقي وقت كافٍ في هذه النافذة", // TODO review (hand draft, not from mobile)
    actNowWarning: "اعمل الآن! الوقت الأمثل يوشك أن ينتهي.", // TODO review (hand draft, not from mobile)
    howWeFiguredThisOut: "كيف توصّلنا إلى هذا", // TODO review (hand draft, not from mobile)
    howItWorks: "كيف يعمل",
    planetaryRulerExplanation: "ننظر إلى الكوكب الحاكم لليوم ({planet}) وإلى العنصر الغالب على ساعات اليوم ({element})، ومعًا يكوّنان شخصية طاقة اليوم.", // TODO review (hand draft, not from mobile)
    yourFitExplanation: "توافقك: طبعك {userElement} وطاقة اليوم {dayElement} متوافقان بنسبة {harmonyPercent}% — كشخصيتين تتفاهمان.", // TODO review (hand draft, not from mobile)
    mostActive: "الأكثر نشاطًا:", // TODO review (hand draft, not from mobile)
    dominantElement: "الغالب:", // TODO review (hand draft, not from mobile)
    harmonyLabel: "الانسجام",
    ancientWisdomMessage: "الحكمة القديمة تقول الألوان و الطاقة تعمل معاً إرتدي ما هو شعورك الصحيح 🌀", // TODO review (machine draft)
  },
  actionButtons: {
    waitForBetterTiming: "انتظر توقيتًا أفضل",
    startImportantTask: "ابدأ مهمة مهمة", // TODO review (hand draft, not from mobile)
    makeDifficultCall: "أجرِ اتصالًا صعبًا", // TODO review (hand draft, not from mobile)
    sendCriticalEmail: "أرسل رسالة مهمة", // TODO review (hand draft, not from mobile)
    scheduleForLater: "أجّله لوقت لاحق", // TODO review (hand draft, not from mobile)
    restReflect: "استرح وتأمّل", // TODO review (hand draft, not from mobile)
    planPrepare: "خطّط واستعدّ", // TODO review (hand draft, not from mobile)
    waitFor: "انتظر {element}", // TODO review (hand draft, not from mobile)
    handleRoutineTasks: "أنجز المهام الروتينية", // TODO review (hand draft, not from mobile)
    continueOngoingWork: "تابع العمل الجاري", // TODO review (hand draft, not from mobile)
    takeBoldAction: "اتخاذ إجراءات جريئة", // TODO review (machine draft)
    writeOrCommunicate: "اكتب أو تواصل", // TODO review (hand draft, not from mobile)
    brainstormIdeas: "اعصف الأفكار", // TODO review (hand draft, not from mobile)
    creativeWork: "العمل الإبداعي", // TODO review (machine draft)
    deepReflection: "الانعكاس العميق", // TODO review (machine draft)
    buildOrOrganize: "ابنِ أو نظّم", // TODO review (hand draft, not from mobile)
    completeTasks: "أتمّ المهام", // TODO review (hand draft, not from mobile)
    lowStakesActivities: "أنشطة قليلة المخاطر", // TODO review (hand draft, not from mobile)
    preparationWork: "أعمال التحضير", // TODO review (hand draft, not from mobile)
  },
  harmony: {
    perfectAlignment: "توافق تام",
    opposing: "متعارض",
    harmonious: "انسجام",
    transformative: "تحويلية",
    excellent: "ممتاز",
    veryGood: "جيد جدًا",
    good: "جيد",
    moderate: "معتدل",
    challenging: "صعبة",
    strongAlignment: "توافق قوي", // TODO review (hand draft, not from mobile)
    moderateAlignment: "توافق متوسط", // TODO review (hand draft, not from mobile)
    weakAlignment: "توافق ضعيف", // TODO review (hand draft, not from mobile)
    nourishing: "🌱 مغذٍّ",
    unified: "💫 موحّد",
  },
  colorGuidance: {
    yourElement: "عنصرك",
    todayElement: "عنصر اليوم",
    dailyColorGuidance: "إرشاد ألوان اليوم", // TODO review (hand draft, not from mobile)
    harmonyLevel: "مستوى الانسجام", // TODO review (machine draft)
    primaryColors: "الألوان الأساسية", // TODO review (hand draft, not from mobile)
    accentColors: "ألوان مكمّلة", // TODO review (hand draft, not from mobile)
    avoidColors: "ألوان يُستحسن تجنّبها", // TODO review (hand draft, not from mobile)
    energyMessage: "رسالة الطاقة", // TODO review (machine draft)
    practicalTips: "نصائح عملية", // TODO review (hand draft, not from mobile)
    bestEnergyTimes: "أفضل أوقات الطاقة", // TODO review (hand draft, not from mobile)
    harmonyBreakdown: "تفصيل الانسجام", // TODO review (hand draft, not from mobile)
  },
  weeklyResultsComplete: {
    unableToGenerate: "تعذّر إنشاء التوقعات الأسبوعية. يرجى إدخال اسم عربي صحيح.",
    best: "الأفضل",
    gentle: "لطيف",
    focus: "تركيز",
    allForcesAligned: "جميع القوى متوافقة × تدفق ممتاز",
    mixedSignals: "إشارات مختلطة × تقدّم بوعي",
    challengingEnergies: "طاقات صعبة × الصبر مطلوب",
    timeWindows: "النوافذ الزمنية",
    closeDetails: "أغلق التفاصيل", // TODO review (hand draft, not from mobile)
    clickToExpand: "اضغط للتوسيع", // TODO review (hand draft, not from mobile)
    peakPerformanceDay: "يوم الأداء الأمثل", // TODO review (hand draft, not from mobile)
    steadyProgressDay: "يوم التقدّم الثابت", // TODO review (hand draft, not from mobile)
    restReflectionDay: "يوم الراحة والتأمّل", // TODO review (hand draft, not from mobile)
    morning: "الصباح",
    midday: "الظهيرة",
    afternoon: "بعد الظهر",
    evening: "المساء",
    optimalSequence: "التسلسل الأمثل لـ", // TODO review (hand draft, not from mobile)
    energyType: "نوع الطاقة", // TODO review (machine draft)
    bestFor: "الأفضل لـ",
    avoid: "تجنّب",
    planetalPhase: "المرحلة الكوكبية", // TODO review (hand draft, not from mobile)
    peakLeadership: "ذروة طاقة القيادة", // TODO review (hand draft, not from mobile)
    highVisibility: "حضور بارز", // TODO review (hand draft, not from mobile)
    delegationPhase: "مرحلة التفويض", // TODO review (machine draft)
    reflectionTime: "وقت التأمّل", // TODO review (hand draft, not from mobile)
    emotionalClarity: "الوضوح العاطفي", // TODO review (machine draft)
    empathyPeak: "ذروة التعاطف", // TODO review (hand draft, not from mobile)
    creativeFlow: "التدفق الإبداعي", // TODO review (machine draft)
    deepRestBegins: "تبدأ الراحة العميقة", // TODO review (hand draft, not from mobile)
    peakPhysicalEnergy: "ذروة الطاقة البدنية", // TODO review (hand draft, not from mobile)
    combatMode: "وضع المواجهة", // TODO review (hand draft, not from mobile)
    sustainedPush: "دفع متواصل", // TODO review (hand draft, not from mobile)
    coolDownNeeded: "يلزم التهدئة", // TODO review (hand draft, not from mobile)
    mentalSharpness: "حدّة ذهنية", // TODO review (hand draft, not from mobile)
    communicationPeak: "ذروة الاتصالات", // TODO review (machine draft)
    quickConnections: "روابط سريعة", // TODO review (hand draft, not from mobile)
    integrationTime: "وقت التكامل", // TODO review (machine draft)
    expansionBegins: "يبدأ التوسع", // TODO review (machine draft)
    opportunityWindow: "نافذة الفرص", // TODO review (machine draft)
    growthMomentum: "زخم النمو", // TODO review (machine draft)
    wisdomIntegration: "دمج الحكمة", // TODO review (hand draft, not from mobile)
    beautyAppreciation: "تذوّق الجمال", // TODO review (hand draft, not from mobile)
    relationshipHarmony: "الوئام بين العلاقات", // TODO review (machine draft)
    pleasureTime: "وقت المتعة", // TODO review (hand draft, not from mobile)
    disciplinePeak: "الذروة الانضباطية", // TODO review (machine draft)
    seriousWorkMode: "وضع العمل الجاد", // TODO review (hand draft, not from mobile)
    endurancePhase: "مرحلة التحمّل", // TODO review (hand draft, not from mobile)
    reviewTime: "وقت الاستعراض", // TODO review (machine draft)
    classicalTeaching: "تعليم كلاسيكي (الدرس 28):", // TODO review (hand draft, not from mobile)
    forEverythingTime: "«لكلّ شيءٍ وقت»", // TODO review (hand draft, not from mobile)
    successFromTiming: "(لكل شيء وقت) × النجاح في العمل الصحيح في الوقت الصحيح.", // TODO review (hand draft, not from mobile)
  },
  destinyResultsComplete: {
    nameChart: "مخطط الاسم",
    spiritualBlueprint: "المخطط الروحي لاسمك",
    totalHadadKabir: "المجموع (الحداد الكبير)",
    digitalRootSaghir: "الجذر الرقمي (الصغير)",
    elementTabh: "العنصر (الطبع)",
    zodiacBurj: "البرج الفلكي",
    planetLabel: "الكوكب",
    dayLabel: "نهار",
    hourLabel: "رقم الساعة الكوكبية",
    hourTooltip: "الساعة رقم كذا بعد شروق الشمس المحلي. الترتيب: الشمس، الزهرة، عطارد، القمر، زحل، المشتري، المريخ.",
    elementHarmony: "الانسجام العنصري",
    harmonious: "✨ منسجم",
    nourishing: "🌱 مغذٍّ",
    transformative: "⚡ تحويلي",
    unified: "💫 موحّد",
    elementInheritance: "توريث العنصر",
    expression: "التعبير",
    foundation: "الأساس",
    yourExpression: "تعبيرك",
    yourFoundation: "أساسك",
    quranicResonance: "الرنين القرآني",
    arabicText: "النص العربي",
    grandTotal: "المجموع الكلي",
    element: "العنصر",
    spiritualOrigin: "أصلك الروحي",
    motherElement: "عنصر اسم الأم (حداد الأم)",
    insight: "رؤية",
    letterGeometry: "هندسة الحروف",
    vertical: "عمودي",
    round: "مدوّر",
    flat: "مسطّح",
    angular: "زاوية",
    noneInYourName: "لا يوجد في اسمك",
    letters: "حروف",
    geometricProfile: "ملفك الهندسي",
    growth: "النمو",
    compassion: "الرحمة",
    embrace: "تبنَّ",
    stability: "استقرار",
    clarity: "الوضوح",
    transformation: "التحول",
    soulTriad: "ثالوث روحك",
    lifeDestiny: "قدر الحياة",
    soulUrge: "رغبة الروح",
    outerPersonality: "الشخصية الظاهرة",
    practicalGuidance: "إرشادات عملية",
    yourPath: "مسارك",
    yourPathDesc: "يشرح إلى أين يتجه اتجاه حياتك وطاقتك طبيعيًا.",
    spiritualPractice: "الممارسة الروحية",
    spiritualPracticeDesc: "عادات أو تأملات يومية بسيطة لموازنة عنصرك.",
    quranicGuidance: "الإرشاد القرآني",
    quranicGuidanceDesc: "آية مرتبطة بطاقة اسمك، للتأمل فقط.",
    practicalAction: "الفعل العملي",
    practicalActionDesc: "خطوات يمكنك اتخاذها في الحياة اليومية تتوافق مع قدرك.",
    shadowToWatch: "ظل يجب مراقبته",
    shadowToWatchDesc: "ميول ينبغي الوعي بها قد تعيق نموك.",
    reflectionOnly: "للتأمل فقط × ليس تنجيمًا أو حكمًا شرعيًا.",
    unableToCalculate: "غير قادر على حساب القدر رجاءً إدخلْ a اسم.", // TODO review (machine draft)
    englishTranslation: "الترجمة التحريرية الإنكليزية", // TODO review (machine draft)
    loadingVerse: "جارٍ تحميل الآية...", // TODO review (hand draft, not from mobile)
    unableToLoadVerse: "تعذّر تحميل الآية حاليًا. حدّث الصفحة أو زر Quran.com مباشرة.", // TODO review (hand draft, not from mobile)
    verseReferenceValid: "مرجع الآية صحيح (سورة {surah}:{ayah})، لكن تعذّر جلبها.", // TODO review (hand draft, not from mobile)
    readFullVerse: "اقرأ الآية كاملة على Quran.com", // TODO review (hand draft, not from mobile)
    ayahOfTotal: "الآية {ayah} من {total}", // TODO review (hand draft, not from mobile)
    noVerseData: "لا تتوفّر بيانات آية لهذا الرنين.", // TODO review (hand draft, not from mobile)
    inheritance: "الإرث", // TODO review (hand draft, not from mobile)
    aspiration: "التطلّع", // TODO review (hand draft, not from mobile)
    spiritualReach: "المدى الروحي", // TODO review (hand draft, not from mobile)
    goals: "الأهداف", // TODO review (hand draft, not from mobile)
    wholeness: "الكمال", // TODO review (hand draft, not from mobile)
    cycles: "الدورات", // TODO review (hand draft, not from mobile)
    grounding: "الرسوخ", // TODO review (hand draft, not from mobile)
    decisiveness: "الحسم", // TODO review (hand draft, not from mobile)
    sharpness: "الحدّة", // TODO review (hand draft, not from mobile)
  },
  compatibilityResultsComplete: {
    overallCompatibility: "التوافق الشامل",
    overallHarmonyScore: "درجة الانسجام الكلية",
    remainder: "الباقي",
    sharedElement: "العنصر",
    excellent: "ممتاز",
    veryGood: "جيد جدًا",
    good: "جيد",
    moderate: "معتدل",
    challenging: "صعب",
    recommendations: "التوصيات",
    strengths: "نقاط القوة",
    challenges: "التحديات",
    advice: "نصائح",
    harmonyScore: "درجة الانسجام",
    unableToCalculate: "غير قادر على حساب التوافق يرجى ضمان إدخال الاسمين معا.", // TODO review (machine draft)
    threeAnalysisMethods: "ثلاثة أساليب تحليل", // TODO review (machine draft)
    spiritualDestiny: "القدر الروحي",
    elementalTemperament: "المزاج العنصري",
    planetaryCosmic: "⭐ الكوكبي الفلكي", // TODO review (hand draft, not from mobile)
    growthAreas: "مناطق النمو", // TODO review (machine draft)
    relationship: "العلاقة", // TODO review (machine draft)
  },
  planetaryDescriptions: {
    Sun: {
      name: "الشمس",
      energy: "القيادة والحيوية",
      quality: "القيادة، السلطة، النجاح", // TODO review (hand draft, not from mobile)
    },
    Moon: {
      name: "القمر",
      energy: "المشاعر والحدس",
      quality: "العاطفة، الحدس، البيت", // TODO review (hand draft, not from mobile)
    },
    Mars: {
      name: "المريخ",
      energy: "الفعل والشجاعة",
      quality: "الفعل، الشجاعة، المنافسة", // TODO review (hand draft, not from mobile)
    },
    Mercury: {
      name: "عطارد",
      energy: "التواصل والتعلّم",
      quality: "التواصل، التعلّم، التجارة", // TODO review (hand draft, not from mobile)
    },
    Jupiter: {
      name: "المشتري",
      energy: "التوسع والحكمة",
      quality: "الاتساع، الحكمة، الوفرة", // TODO review (hand draft, not from mobile)
    },
    Venus: {
      name: "الزهرة",
      energy: "الحب والانسجام",
      quality: "المحبة، الجمال، الانسجام", // TODO review (hand draft, not from mobile)
    },
    Saturn: {
      name: "زحل",
      energy: "البنية والانضباط",
      quality: "البنية، الانضباط، العواقب", // TODO review (hand draft, not from mobile)
    },
  },
  classicalWisdom: {
    stillnessBeforeMotion: "السكون قبل الحركة",
    stillnessExplanation: "(السكون قبل الحركة يجلب فعلًا مباركًا)",
    whoPlants: "من زرع خيرًا حصد خيرًا",
    whoPlantsExplanation: "(من يزرع الخير يحصد الخير) × يعتمد توقيت الحصاد على البذرة والموسم.",
    forEverything: "لكلّ شيءٍ وقت", // TODO review (hand draft, not from mobile)
    forEverythingExplanation: "(لكل شيء وقت) × النجاح في العمل الصحيح في الوقت الصحيح.", // TODO review (hand draft, not from mobile)
    whoKnowsDisconnection: "من عرف وقت انفصاله حفظ طاقته", // TODO review (hand draft, not from mobile)
    whoKnowsExplanation: "(من عرف وقت انفصاله حفظ طاقته)", // TODO review (hand draft, not from mobile)
  },
  onboarding: {
    welcome: "مرحبًا بك في أسرار كل يوم! 🌙",
    enterText: "أدخل نصك",
    understanding: "فهم تحليلك",
    closeTutorial: "إغلاق البرنامج التعليمي",
    previousStep: "الخطوة السابقة",
    nextStep: "الخطوة التالية",
    completeTutorial: "إتمام البرنامج التعليمي",
  },
  tooltips: {
    umHadad1: "أم حدد - مطلوب لحساب قدر الاسم الكامل",
    umHadad2: "أم حدد - يكشف أصلك الروحاني",
  },
  errors: {
    analysisError: "تعذر التحليل. يرجى التحقق من إدخالك.",
    verseLoadError: "تعذر تحميل نص الآية. يرجى المحاولة مرة أخرى.",
  },
  divineTiming: {
    spiritualDepth: {
      divineName: "الاسم الإلهي",
      quranicVerse: "الآية القرآنية",
      spiritualSignificance: "الدلالة الروحية",
      relatedNames: "أسماء ذات صلة",
      recommendedRecitation: "التلاوة الموصى بها",
      reflectionPrompt: "تأمل",
      beginDhikr: "ابدأ الذكر",
      relevanceToThisHour: "الصلة بهذه الساعة",
      inTheNameOfAllah: "بسم الله الرحمن الرحيم",
    },
    disclaimer: {
      importantNotice: "تنويه هام",
      pleaseReadCarefully: "يرجى القراءة بعناية قبل استخدام وحدة التوقيت الإلهي",
      natureOfThisTool: "طبيعة هذه الأداة",
      toolDescription: "توفر هذه الأداة تأملًا روحيًا وإرشادًا للتوقيت مبنيًا على التقاليد الإسلامية الكلاسيكية للساعات الفلكية (الساعات الفلكية). إنها دليل لتحسين التوقيت الروحي والتأمل الشخصي.",
      essentialPoints: "نقاط أساسية للفهم",
      notDivination: "هذه ليست كهانة",
      notDivinationText: "لا تتنبأ هذه الأداة بالمستقبل ولا تضمن نتائج. الكهانة محرّمة في الإسلام. نقدم فقط اقتراحات توقيت مبنية على حكمة تقليدية.",
      freeWillAndQadr: "الإرادة الحرة والقدر",
      freeWillText: "إرادتك الحرة (اختيار) وخياراتك تبقى لك. جميع النتائج بيد الله وحده (قدر). استخدم هذه الحكمة كأداة تأمل، لا كبديل لحكمك.",
      notLegalGuidance: "ليست إرشادًا شرعيًا",
      notLegalGuidanceText: "هذه الأداة ليست فتوى أو حكمًا شرعيًا إسلاميًا. للأسئلة الدينية، استشر أهل العلم المؤهلين. للقرارات المهمة، اطلب مشورة متخصصة.",
      recommendedUse: "الاستخدام الموصى به",
      recommendedUseText: "استخدم هذه الأداة لـ: تحسين توقيت الأفعال، التأمل الروحي، فهم الدورات الطبيعية، وإثراء ممارستك الروحية. اجمع دائمًا مع الدعاء والحكمة العملية والاجتهاد الشخصي.",
      classicalSources: "مصادر كلاسيكية",
      classicalSourcesText: "تُبنى حسابات الساعات الكوكبية على تقاليد إسلامية كلاسيكية (علم الحروف، شمس المعارف، وغيرها). تُعرض الروابط الروحية بالأسماء الحسنى والآيات القرآنية للتأمل والإثراء الروحي، لا كتعليمات إلزامية.",
      knowledgeOfUnseen: "علم الغيب عند الله وحده",
      quranReference: "القرآن 10:20",
      iHaveReadAndUnderstand: "لقد قرأت وفهمت - متابعة",
      byContinuingYouAgree: "بالمتابعة، أنت توافق على استخدام هذه الأداة كدليل للتأمل، لا كمصدر سلطة مطلقة.",
    },
    prayerTimes: {
      prayerTimes: "أوقات الصلاة",
      currentPeriod: "الفترة الحالية",
      nextPrayer: "الصلاة التالية",
      in: "خلال",
      betweenPrayers: "بين الصلاتين",
      planetarySynergy: "التآزر الكوكبي",
      viewAll: "عرض الكل",
      hide: "إخفاء",
      now: "الآن",
      next: "التالي",
      calculationsBasedOn: "الحسابات مبنية على",
      yourLocation: "موقعك",
      specialPrayerTime: "وقت صلاة خاص",
    },
    lunarMansion: {
      lunarMansion: "منزلة القمر",
      moonPhase: "طور القمر",
      element: "العنصر",
      planetaryRuler: "الكوكب الحاكم",
      divineQuality: "الصفة الإلهية",
      spiritualFocus: "التركيز الروحي",
      lunarPlanetarySynergy: "التآزر القمري الكوكبي",
      hideDetails: "إخفاء التفاصيل",
      viewActivitiesWisdom: "عرض الأنشطة والحكمة",
      favorableFor: "مؤاتٍ لـ",
      unfavorableFor: "غير مؤاتٍ لـ",
      classicalWisdom: "الحكمة الكلاسيكية",
      constellation: "الكوكبة",
      calculatingLunarMansion: "جارٍ حساب منزلة القمر...",
    },
    alignment: {
      personalAlignment: "المحاذاة الشخصية",
      alignmentBreakdown: "تفصيل المحاذاة",
      elementalHarmony: "الانسجام العنصري",
      planetaryResonance: "الرنين الكوكبي",
      numericalAlignment: "التوافق العددي",
      sacredConnection: "الاتصال المقدس",
      recommendations: "التوصيات",
      yourBestHoursToday: "أفضل ساعاتك اليوم",
      planetaryHour: "الساعة الكوكبية",
      basedOnSpiritualEssence: "بناءً على جوهرك الروحي والطاقات الكوكبية",
    },
    education: {
      learningCenter: "مركز التعلّم",
      planetGuides: "أدلة الكواكب",
      glossary: "المسرد",
      energyFlow: "تدفق الطاقة",
      selectPlanet: "اختر كوكبًا",
      overview: "نظرة عامة",
      spiritualWisdom: "الحكمة الروحية",
      practicalGuide: "دليل عملي",
      classicalSources: "مصادر كلاسيكية",
      primaryDivineName: "الاسم الإلهي الأساسي",
      relatedDivineNames: "أسماء إلهية ذات صلة",
      islamicHistoricalContext: "السياق التاريخي الإسلامي",
      spiritualQualities: "الصفات الروحية",
      relatedSpiritualConcepts: "مفاهيم روحية ذات صلة",
      spiritualExamples: "أمثلة روحية",
      favorableActivities: "أنشطة مؤاتية",
      activitiesToAvoid: "أنشطة يُستحسن تجنبها",
      classicalTeachings: "تعاليم كلاسيكية",
      position: "الموضع",
      recommendedDhikr: "الذكر الموصى به",
      source: "المصدر",
      currentHour: "الساعة الحالية",
      excellentHours: "ساعات ممتازة",
      goodHours: "ساعات جيدة",
      challengingHours: "ساعات صعبة",
      harmonyScore: "درجة الانسجام",
      introduction: "مقدمة",
      islamicContext: "السياق الإسلامي",
      howItWorks: "كيف يعمل",
      faq: "الأسئلة الشائعة",
      comprehensiveGuide: "دليل شامل للساعات الكوكبية في التقليد الإسلامي",
      searchTerms: "بحث في المصطلحات",
      showingTerms: "عرض",
      terms: "مصطلحات",
      allTerms: "كل المصطلحات",
      planets: "الكواكب",
      elements: "العناصر",
      divineNames: "الأسماء الحسنى",
      concepts: "مفاهيم",
      practices: "ممارسات",
      related: "ذات صلة",
      noTermsFound: "لم يُعثر على مصطلحات مطابقة لبحثك",
      element: "العنصر",
      day: "اليوم",
      metal: "المعدن",
      energyFlowChart: "تدفّق الطاقة اليومي", // TODO review (hand draft, not from mobile)
    },
  },
  mothersNameStrategy: {
    modeSelector: {
      title: "اختر نوع القراءة",
      generalMode: {
        title: "استكشف اسمًا",
        icon: "📖",
        description: "اكتشف المعنى الروحي والخصائص العامة لأي اسم",
        bestFor: "الأفضل لـ: التعرف على الأسماء، الاستكشاف الثقافي، الرؤى العامة",
      },
      personalMode: {
        title: "قراءتي الشخصية",
        icon: "✨",
        description: "احصل على ملفك الروحي الفريد - مخصص لبصمة روحك بالضبط",
        bestFor: "الأفضل لـ: اكتشاف الذات، الإرشاد الروحي، التحول الشخصي",
        recommended: "⭐ موصى به",
      },
      whyPersonalBetter: "لماذا القراءة الشخصية أفضل:",
      reason1: "بصمتك الروحية الدقيقة (لا مجرد سمات عامة)",
      reason2: "فريدة لك أنت (لا لأي شخص آخر يحمل اسمك)",
      reason3: "إرشاد ورؤى أكثر دقة",
    },
    nameInput: {
      generalModeHeader: "استكشاف عام للاسم",
      generalModeSubtitle: "استكشاف معنى الاسم فقط - غير مخصص لك",
      personalModeHeader: "الملف الروحي الشخصي",
      personalModeSubtitle: "قراءتك الفريدة - تتطلب اسم الأم",
      switchToPersonal: "التبديل إلى القراءة الشخصية",
      switchToGeneral: "التبديل إلى الاستكشاف العام",
      motherNameRequired: "اسم الأم (مطلوب للقراءة الشخصية)",
      motherNameOptional: "اسم الأم (اختياري)",
      whyRequired: "لماذا اسم الأم مطلوب؟",
      learnMore: "اعرف المزيد",
    },
    generalResults: {
      modeLabel: "📖 استكشاف عام للاسم",
      limitedInsight: "رؤية محدودة - خصائص عامة فقط",
      upgradePrompt: "تريد ملفك الروحي الفريد؟",
      upgradeButton: "✨ احصل على قراءتي الشخصية",
      upgradeBenefits: "تتضمن القراءة الشخصية:",
      benefit1: "بصمتك الروحية الدقيقة (الأصل الروحاني)",
      benefit2: "إرشاد شخصي فريد لك",
      benefit3: "رؤى أعمق في رحلة روحك",
      generalOnly: "هذا تحليل عام لاسم '{name}' - غير خاص بك تحديدًا.",
    },
    personalResults: {
      modeLabel: "✨ الملف الروحي الشخصي",
      uniqueToYou: "فريد لك - لا لأي شخص آخر يحمل اسمك",
      yourExactBlueprint: "بصمتك الروحية الدقيقة",
      calculatedFrom: "محسوب من: {name} + {motherName}",
      thisIsYours: "هذه القراءة فريدة لروحك - لن يمتلك أحد آخر هذا الملف بالضبط.",
    },
    lifePath: {
      motherNameRequired: "اسم الأم (مطلوب)",
      whyRequired: "لماذا اسم الأم مطلوب؟",
      explanation: "مسار الحياة شخصي بالنسبة لك",
      detailedExplanation: "مسار حياتك ليس فقط عن اسمك - إنه عن رحلتك الفريدة في الحياة. يضمن اسم والدتك أن تعكس هذه القراءة بصمتك الروحية المحددة، لا مجرد نمط عام لكل من يحمل اسمك.",
      cannotSubmit: "يرجى إدخال اسم والدتك للمتابعة",
      validationError: "اسم الأم مطلوب لحساب مسار الحياة",
    },
    divineTiming: {
      motherNameRequired: "اسم الأم (مطلوب)",
      whyRequired: "لماذا اسم الأم مطلوب؟",
      explanation: "يُحسب التوقيت الإلهي وفق تأثيراتك الكوكبية الخاصة",
      detailedExplanation: "تؤثر الساعات الكوكبية على كل شخص بشكل مختلف بناءً على بصمته الروحية الفريدة. يخصّص اسم والدتك هذه الحسابات لبصمة روحك بالضبط، مما يضمن دقة إرشاد التوقيت لك تحديدًا.",
      cannotSubmit: "يرجى إدخال اسم والدتك للمتابعة",
      validationError: "اسم الأم مطلوب لحساب التوقيت الإلهي",
    },
    explanation: {
      title: "لماذا يهم اسم الأم",
      subtitle: "المبدأ الروحي وراء القراءات الشخصية",
      section1: {
        title: "المبدأ: بصمة روحك الفريدة",
        text: "في التقليد السنغالي لعلم الحروف، تتشكل هويتك الروحية الكاملة (الأصل الروحاني) من اسمك + اسم والدتك. يخلق هذا بصمة عددية وعنصرية فريدة لك وحدك.",
      },
      section2: {
        title: "لماذا يهم هذا",
        point1: {
          title: "بدون اسم الأم:",
          text: "تحصل على خصائص عامة لاسم 'محمد' - يشترك فيها ملايين الناس",
        },
        point2: {
          title: "مع اسم الأم:",
          text: "تحصل على ملفك الفريد - محمد + فاطمة = مختلف عن محمد + عائشة",
        },
      },
      section3: {
        title: "مثال: شخصان يحملان اسم محمد",
        person1: "محمد (الأم: فاطمة) = قيمة عددية X → غلبة النار → مسار روحي فريد أ",
        person2: "محمد (الأم: خديجة) = قيمة عددية Y → غلبة الماء → مسار روحي مختلف ب",
        conclusion: "نفس الاسم، أمهات مختلفات = بصمات روحية مختلفة تمامًا",
      },
      section4: {
        title: "الخصوصية والاحترام",
        point1: "لا يُخزَّن اسم والدتك أو يُشارَك أبدًا",
        point2: "تتم الحسابات فورًا في متصفحك فقط",
        point3: "نحترم الأمانة المقدسة لاسم والدتك (أم حدد)",
      },
      section5: {
        title: "متى تستخدم كل نمط",
        generalMode: {
          title: "النمط العام (الاسم فقط):",
          use1: "استكشاف أسماء المواليد أو معاني الأسماء",
          use2: "البحث الثقافي أو التاريخي",
          use3: "التعرف على أنماط الأسماء",
        },
        personalMode: {
          title: "النمط الشخصي (الاسم + اسم الأم):",
          use1: "إرشادك الروحي الخاص",
          use2: "قرارات الحياة والتوقيت",
          use3: "عمل عميق لاكتشاف الذات",
        },
      },
      closeButton: "فهمت",
    },
    autoUpgrade: {
      detected: "تم اكتشاف اسم الأم - جارٍ الترقية إلى القراءة الشخصية",
      switchingMode: "التبديل إلى النمط الشخصي للحصول على نتائج دقيقة",
    },
  },
  istikhara: {
    form: {
      personName: "اسمك",
      personNamePlaceholder: "مثال: محمد، فاطمة، إبراهيم",
      motherName: "اسم الأم",
      motherNamePlaceholder: "مثال: خديجة، عائشة، مريم",
      dateOfBirth: "تاريخ الميلاد",
      clearButton: "مسح",
      validationError: "يرجى إدخال كلا الاسمين للمتابعة",
      title: "أدخل بياناتك", // TODO review (hand draft, not from mobile)
      dateOfBirthPlaceholder: "اختر تاريخ ميلادك",
      dateOfBirthHelper: "يُستعمل للحسابات الفلكية الدقيقة", // TODO review (hand draft, not from mobile)
      calculateButton: "اكتشف ملفي", // TODO review (hand draft, not from mobile)
      bothNamesRequired: "كلا الاسمين مطلوبين لإرشاد دقيق", // TODO review (machine draft)
    },
    results: {
      title: "توجيهك الروحي",
      calculatedFor: "توجيه لـ {person} (الأم: {mother})",
      burujRemainder: "باقي البروج",
      element: "العنصر الغالب",
      tabs: {
        personality: "الشخصية",
        career: "المهنة",
        blessedDay: "اليوم المبارك",
        spiritual: "الأسماء الإلهية",
        sadaqah: "الصدقة", // TODO review (hand draft, not from mobile)
      },
    },
    personality: {
      title: "الملف الشخصي",
      subtitle: "سمات الطبع والمزاج",
      coreTraits: "السمات الأساسية",
      strengths: "نقاط القوة",
      challenges: "التحديات",
      guidance: "التوجيه الروحي",
      elementalInfluence: "تأثير العنصر",
      colors: "الألوان المنسجمة",
    },
    career: {
      title: "التوجيه المهني والوظيفي",
      subtitle: "مسارات متوافقة مع طبيعتك الروحية",
      idealFields: "المجالات المهنية المثالية",
      workStyle: "أسلوب العمل",
      bestEnvironments: "أفضل بيئات العمل",
      leadershipStyle: "أسلوب القيادة",
      collaboration: "أسلوب التعاون",
      avoidCareers: "مهن يُستحسن التعامل معها بحذر",
    },
    blessedDay: {
      title: "يومك المبارك",
      subtitle: "اليوم الأمثل للأعمال المهمة",
      primaryDay: "اليوم المبارك الرئيسي",
      planetaryRuler: "الكوكب الحاكم",
      bestActivities: "أفضل الأنشطة لهذا اليوم",
      spiritualPractices: "الممارسات الروحية الموصى بها",
      timing: "التوقيت الأمثل",
      morningBlessings: "الصباح (بعد الفجر)",
      middayBlessings: "الظهيرة (من الظهر إلى العصر)",
      eveningBlessings: "المساء (بعد المغرب)",
    },
    spiritual: {
      title: "الممارسة الروحية والنمو",
      subtitle: "ممارسات لتقوية صلتك الروحية",
      recommendedSadaqah: "الصدقة الموصى بها",
      sadaqahType: "نوع الصدقة",
      sadaqahBenefit: "الفائدة الروحية",
      sadaqahTiming: "أفضل توقيت",
      dhikrPractice: "الذكر الموصى به",
      dhikrName: "الاسم الإلهي",
      dhikrCount: "العدد المقترح",
      dhikrTime: "أفضل وقت",
      dhikrBenefit: "الفائدة",
      dailyPractice: "الممارسة اليومية",
      weeklyPractice: "الممارسة الأسبوعية",
      monthlyPractice: "الممارسة الشهرية",
    },
    elements: {
      fire: {
        name: "النار",
        nameArabic: "النار (al-Nār)",
        quality: "متحمس، ديناميكي، تحويلي",
        description: "تجلب طاقة النار الجرأة والإبداع والقوة التحويلية. أصحاب غلبة النار قادة بالفطرة يلهمون التغيير.",
      },
      earth: {
        name: "الأرض",
        nameArabic: "الأرض (al-Arḍ)",
        quality: "ثابت، عملي، راسخ",
        description: "تجلب طاقة الأرض الثبات والموثوقية والحكمة العملية. أصحاب غلبة الأرض يبنون أسسًا راسخة تدوم.",
      },
      air: {
        name: "الهواء",
        nameArabic: "الهواء (al-Hawāʾ)",
        quality: "عقلاني، تواصلي، متكيّف",
        description: "تجلب طاقة الهواء الوضوح والتواصل والقوة العقلية. أصحاب غلبة الهواء يتفوقون في المعرفة والتواصل.",
      },
      water: {
        name: "الماء",
        nameArabic: "الماء (al-Māʾ)",
        quality: "عاطفي، حدسي، متدفق",
        description: "تجلب طاقة الماء التعاطف والحدس والعمق العاطفي. أصحاب غلبة الماء يشفون ويرعون بفطرتهم.",
      },
    },
    ui: {
      loading: "جارٍ حساب التوجيه الروحي...",
      error: "تعذّر حساب التوجيه. يرجى التحقق من الأسماء والمحاولة مرة أخرى.",
      backToForm: "حساب جديد",
      printResults: "طباعة التوجيه",
      shareResults: "مشاركة",
      expandAll: "توسيع كل الأقسام",
      collapseAll: "طي كل الأقسام",
    },
    education: {
      whatIsIt: "ما هي؟",
      howItWorks: "كيف تعمل؟",
      isItPermissible: "هل هي جائزة؟",
      isItPermissibleText: "تستند هذه الممارسة إلى التراث العلمي الإسلامي في غرب إفريقيا، وخاصة علم الحروف السنغالي. تُستخدم للتأمل والتوجيه، وليست تنجيمًا أو كهانة. اجمع دائمًا بين ذلك والدعاء، واستشر أهل العلم المؤهلين في القرارات المهمة.",
      title: "حول هذا التحليل", // TODO review (machine draft)
      whatIsItText: "تستعمل «من أنا؟» الاستخارة بالأسماء، وهي ممارسة تراثية تكشف ملفك الروحي بتحليل رنين اسمك واسم أمك بعلم الحروف.", // TODO review (hand draft, not from mobile)
      howItWorksText: "بحساب قيم الأبجد للاسمين وتطبيق نظام البروج (12 باقيًا موزّعة على 4 عناصر)، نكشف طبعك الروحي ويومك المبارك والمسارات المهنية المناسبة وممارسات روحية مخصّصة.", // TODO review (hand draft, not from mobile)
    },
    disclaimer: {
      title: "تنويه هام",
      text: "توفر هذه الأداة تأملًا روحيًا مبنيًا على العلوم الإسلامية التقليدية. وهي ليست كهانة (وهي محرّمة)، بل دليل للتأمل الذاتي يُستخدم دائمًا مع الدعاء والحكمة العملية واستشارة أهل العلم المؤهلين. وجميع النتائج بيد الله وحده (القدر).",
    },
    title: "من أنا؟", // TODO review (hand draft, not from mobile)
    subtitle: "اكتشف ملفك الروحي", // TODO review (hand draft, not from mobile)
    description: "اكتشف جوهرك الروحي من خلال علم العدد. بعلم الحروف تعرّف على عنصرك وسمات شخصيتك ويومك المبارك وإرشادك.", // TODO review (hand draft, not from mobile)
    scholarlyName: "الاستخارة بالأسماء", // TODO review (hand draft, not from mobile)
    titleArabic: "من أنا؟", // same as EN (transliteration/Arabic/brand)
  },
  welcome: {
    title: "مرحبًا بك في أسرار كل يوم! 🌙",
    description: "استكشف التراث الغني لعلم الحروف وعلم العدد عبر واجهة تعليمية سهلة. أدخل نصًا عربيًا في الأعلى لتتعرّف على القيم العددية وارتباطات العناصر والإرشادات التقليدية.", // TODO review (hand draft, not from mobile)
  },
  sacredNumbers: {
    title: "رنين العدد المقدّس", // TODO review (hand draft, not from mobile)
    divisibleBy: "يقبل القسمة على", // TODO review (hand draft, not from mobile)
    divinePerfection: "الكمال الإلهي", // TODO review (hand draft, not from mobile)
    quranicHarmony: "الانسجام القرآني", // TODO review (hand draft, not from mobile)
    divineNames: "الأسماء الحسنى التسعة والتسعون", // TODO review (hand draft, not from mobile)
    nearest: "الأقرب", // TODO review (hand draft, not from mobile)
  },
  disclaimer: {
    title: "أداة تعليمية:", // TODO review (hand draft, not from mobile)
    message: "يستكشف هذا التطبيق العلوم الإسلامية التراثية: علم الحروف وعلم العدد، للتأمّل الثقافي والتاريخي. وهو ليس للكهانة ولا للنصائح الطبية ولا للفتاوى الشرعية. استشر دائمًا أهل العلم المؤهلين في الأمور الدينية.", // TODO review (hand draft, not from mobile)
  },
  geometryProfiles: {
    verticalDominant: "طاقة صاعدة قوية. تتطلّع بطبعك إلى المُثُل والغايات العليا. باحث روحي ذو همّة عالية.", // TODO review (hand draft, not from mobile)
    roundDominant: "طاقة حاضنة ومُغذّية. تحتوي الدورات وتُتمّها بدفء عاطفي. قدرة طبيعية على الرحمة.", // TODO review (hand draft, not from mobile)
    flatDominant: "أساس راسخ ومستقر. تصنع امتدادًا أفقيًا باستقرار عملي. طاقة موثوقة متصلة بالأرض.", // TODO review (hand draft, not from mobile)
    angularDominant: "طاقة حادّة حاسمة. تشقّ التعقيد بوضوح وتحوّل. نهج مباشر ومركّز.", // TODO review (hand draft, not from mobile)
    balanced: "طاقة هندسية متوازنة. لديك تنوّع في التعبير؛ تقدر أن تكون طموحًا أو حاضنًا أو راسخًا أو حاسمًا.", // TODO review (hand draft, not from mobile)
  },
  inheritanceSame: "تُعبّر عن طاقة {element} نفسها التي ورثتها. هوية عنصرية قوية ومتماسكة ذات جذور عميقة.", // TODO review (hand draft, not from mobile)
  inheritanceCompatible: {
    fireAir: "تُعبّر بالنار وجذورك هوائية. أساسك الهوائي يغذّي فعلك الناري كالريح تُذكي اللهب.", // TODO review (hand draft, not from mobile)
    airFire: "أنتِ تعبرين عن الهواء لكن لديكِ جذور النار مؤسستك النارية تُنقّط حركتك الجوية مثل الحرارة التي تخلق الرياح.", // TODO review (machine draft)
    waterEarth: "أنتِ تُعبرين عن الماء لكن لديكِ جذور أرضية مؤسستك الأرضية تحتوي على تدفق الماء × مثل النهر الذي يمسك الماء.", // TODO review (machine draft)
    earthWater: "أنت تعبر مع الأرض لكن لديك جذور الماء مؤسسة المياه الخاصة بك لا حرق هيكل الأرض الخاص بك مثل تغذي التربة المطرية.", // TODO review (machine draft)
  },
  inheritanceOpposing: {
    fireWater: "أنت تُعبر مع النار لكن لديك جذور الماء. هذا يخلق توتراً دينامياً متوازناً بالعمق العاطفي", // TODO review (machine draft)
    waterFire: "أنتِ تُعبرين عن الماء لكن لديكِ جذور النار وهذا يخلق توتراً دينامياً × العمق العاطفي الذي يغذيه العاطفة الداخلية.", // TODO review (machine draft)
    airEarth: "تُعبّر بالهواء وجذورك ترابية. وهذا يخلق توترًا حيويًا: حركة يوازنها الثبات.", // TODO review (hand draft, not from mobile)
    earthAir: "تُعبّر بالتراب وجذورك هوائية. وهذا يخلق توترًا حيويًا: بنيان قائم على الحرية.", // TODO review (hand draft, not from mobile)
  },
  planetaryQualities: {
    Sun: {
      quality: "القيادة، السلطة، النجاح", // TODO review (hand draft, not from mobile)
      favorable: ["بدء مشاريع جديدة", "السعي إلى الترقية", "الخطابة أمام الناس", "المشاريع الإبداعية"], // TODO review (hand draft, not from mobile)
      avoid: ["القرارات النابعة من الأنا", "المواجهة مع أصحاب السلطة"], // TODO review (hand draft, not from mobile)
    },
    Moon: {
      quality: "العاطفة، الحدس، البيت", // TODO review (hand draft, not from mobile)
      favorable: ["شؤون الأسرة", "الشفاء العاطفي", "تأمّل الرؤى", "أنشطة الرعاية"], // TODO review (hand draft, not from mobile)
      avoid: ["القرارات الكبرى (العاطفة تغشى الرأي)", "الشؤون القانونية"], // TODO review (hand draft, not from mobile)
    },
    Mercury: {
      quality: "التواصل، التعلّم، التجارة", // TODO review (hand draft, not from mobile)
      favorable: ["الدراسة", "الكتابة", "الصفقات التجارية", "العلاقات الاجتماعية", "الأسفار القصيرة"], // TODO review (hand draft, not from mobile)
      avoid: ["توقيع العقود إذا كان عطارد راجعًا", "الغيبة والنميمة"], // TODO review (hand draft, not from mobile)
    },
    Venus: {
      quality: "المحبة، الجمال، الانسجام", // TODO review (hand draft, not from mobile)
      favorable: ["المودّة", "الفن", "التواصل الاجتماعي", "التجمّل", "الإصلاح بين الناس"], // TODO review (hand draft, not from mobile)
      avoid: ["النقد القاسي", "الخصام"], // TODO review (hand draft, not from mobile)
    },
    Mars: {
      quality: "الفعل، الشجاعة، المنافسة", // TODO review (hand draft, not from mobile)
      favorable: ["التمارين البدنية", "العمل الحازم", "ما يحتاج إلى شجاعة", "الجراحة"], // TODO review (hand draft, not from mobile)
      avoid: ["الغضب", "القرارات المتهوّرة", "افتعال الخصومات"], // TODO review (hand draft, not from mobile)
    },
    Jupiter: {
      quality: "الاتساع، الحكمة، الوفرة", // TODO review (hand draft, not from mobile)
      favorable: ["الشؤون القانونية", "التعليم", "الممارسة الروحية", "التخطيط بعيد المدى", "الكرم"], // TODO review (hand draft, not from mobile)
      avoid: ["الإفراط", "الثقة الزائدة"], // TODO review (hand draft, not from mobile)
    },
    Saturn: {
      quality: "البنية، الانضباط، العواقب", // TODO review (hand draft, not from mobile)
      favorable: ["العمل الجاد", "الالتزامات طويلة المدى", "العلاقة مع أصحاب السلطة", "شؤون العقار"], // TODO review (hand draft, not from mobile)
      avoid: ["أنشطة اللهو", "استعجال النتائج"], // TODO review (hand draft, not from mobile)
    },
  },
  personalYearThemes: {
    "1": "بدايات جديدة، زرع البذور، الاستقلال", // TODO review (machine draft)
    "2": "الشراكات والصبر والتعاون", // TODO review (machine draft)
    "3": "التعبير الإبداعي، الفرح، التوسع الاجتماعي", // TODO review (machine draft)
    "4": "بناء الأسس، العمل الجاد، الاستقرار", // TODO review (hand draft, not from mobile)
    "5": "التغير، الحرية، المغامرة، الأحداث غير المتوقعة", // TODO review (machine draft)
    "6": "المسؤولية، الخدمة، شؤون الأسرة، الحب", // TODO review (machine draft)
    "7": "النمو الروحي، التأمّل الباطني، الدراسة، الراحة", // TODO review (hand draft, not from mobile)
    "8": "الإنجاز، القوة، الشؤون المالية، التقدير", // TODO review (hand draft, not from mobile)
    "9": "الاكتمال، التخلّي، خدمة الناس، نهايات تقود إلى بدايات جديدة", // TODO review (hand draft, not from mobile)
  },
  compatibilityAnalysis: {
    soulJourney: "تمرّ رحلة روحك بمقام", // TODO review (hand draft, not from mobile)
    destinyInterpretation: "قدَرك في الحياة ({destiny}) يدعوك إلى {quality}. روحك تتوق بعمق إلى {soulQuality}، بينما تُظهر في الخارج {personalityQuality}. ويتحقّق التكامل حين تنسجم الأبعاد الثلاثة.", // TODO review (hand draft, not from mobile)
    uniqueDynamic: "ديناميكية فريدة", // TODO review (hand draft, not from mobile)
    eachRelationshipTeaches: "كل علاقة تعلّم دروسًا فريدة", // TODO review (hand draft, not from mobile)
    opportunityForGrowth: "فرصة للنمو", // TODO review (hand draft, not from mobile)
    learningThroughDifferences: "التعلم من خلال الاختلافات", // TODO review (machine draft)
    balanceIndividuality: "الموازنة بين الفردية والاتحاد", // TODO review (hand draft, not from mobile)
  },
  elementPairings: {
    fireFire: {
      label: "نار + نار: الثنائي القوي", // TODO review (hand draft, not from mobile)
      description: "علاقة حادّة متّقدة سريعة الإيقاع. كلاكما يجلب طاقة جريئة واندفاعًا.", // TODO review (hand draft, not from mobile)
      dailyLife: "الحياة اليومية معًا مثيرة ومتّقدة؛ كثير من الحركة والمغامرة والعفوية.", // TODO review (hand draft, not from mobile)
      challenge: "⚠️ قد تتنافس أو تحترق بدون راحة كلاهما يريد أن يقود", // TODO review (machine draft)
      tip: "💡 وقت الهدوء مع بعض. ممارسة الاستماع، وليس مجرد القيام.", // TODO review (machine draft)
    },
    fireAir: {
      label: "نار + هواء: الثنائي صاحب الرؤية", // TODO review (hand draft, not from mobile)
      description: "النار تحوّل أفكار الهواء إلى فعل. علاقة مبدعة منشّطة مليئة بالإمكانات.", // TODO review (hand draft, not from mobile)
      dailyLife: "تلهمان بعضكما باستمرار؛ الحديث يقود إلى مشاريع، والأفكار تصير واقعًا.", // TODO review (hand draft, not from mobile)
      challenge: "⚠️ قد تُغفلان العمق العاطفي والتفاصيل العملية؛ رؤية كثيرة وتأسيس قليل.", // TODO review (hand draft, not from mobile)
      tip: "💡 جلسة أسبوعية: «كيف تشعر؟» لا «ماذا تفعل؟» فقط.", // TODO review (hand draft, not from mobile)
    },
    fireWater: {
      label: "نار + ماء: بخار وتحوّل", // TODO review (hand draft, not from mobile)
      description: "العاطفة تلتقي بعمق وهذا يخلق إما البخار (التحويل) أو التبخر (الصراع).", // TODO review (machine draft)
      dailyLife: "منهجاكما في الحياة متعاكسان؛ النار تتصرّف بسرعة، والماء يحتاج وقتًا ليشعر. وهذا يولّد احتكاكًا في القرارات اليومية.", // TODO review (hand draft, not from mobile)
      challenge: "⚠️ النار قد تطغى على الماء الماء قد ينسحب من النار تصادم أساليب الاتصال.", // TODO review (machine draft)
      tip: "💡 النار: ممارسة الاستماع والصبر النشطين. المياه: الاحتياجات العاجلة بشكل واضح ومباشر.", // TODO review (machine draft)
    },
    fireEarth: {
      label: "نار + تراب: الرؤية تلتقي بالأساس", // TODO review (hand draft, not from mobile)
      description: "النار تجلب الرؤية والحماس، والتراب يجلب التنفيذ والاستقرار. متكاملان لكن بإيقاعين مختلفين.", // TODO review (hand draft, not from mobile)
      dailyLife: "النار تريد بدء أشياء جديدة دائمًا، والتراب يفضّل إتمام ما بدأ. وهذا يخلق توترًا في التخطيط لكنه يوازن أيضًا.", // TODO review (hand draft, not from mobile)
      challenge: "⚠️ إيقاعان مختلفان: النار تستعجل والتراب يتأنّى. قد تشعران أنكما تشدّان في اتجاهين متعاكسين.", // TODO review (hand draft, not from mobile)
      tip: "💡 اجمعا بين جلسات التخطيط (التراب) والمغامرات العفوية (النار)، واحترما المنهجين.", // TODO review (hand draft, not from mobile)
    },
    airAir: {
      label: "هواء + هواء: الشراكة الفكرية", // TODO review (hand draft, not from mobile)
      description: "محادثات لا نهاية لها، فضول مشترك، وتحفيز ذهني. أنت تفهم كيف يفكر كل من الآخر.", // TODO review (machine draft)
      dailyLife: "تستطيعان الحديث لساعات؛ كل تجربة تصير نقاشًا، والتعلّم والاستكشاف معًا أمر طبيعي.", // TODO review (hand draft, not from mobile)
      challenge: "⚠️ قد تُفرطان في التفكير أو تتجنّبان الانكشاف العاطفي؛ عقل كثير وقلب قليل.", // TODO review (hand draft, not from mobile)
      tip: "💡 خصّصا أوقاتًا «بلا تحليل». تدرّبا على الشعور دون نقاش. أحيانًا: لمسة أكثر وكلام أقل.", // TODO review (hand draft, not from mobile)
    },
    airWater: {
      label: "هواء + ماء: العقل يلتقي بالقلب", // TODO review (hand draft, not from mobile)
      description: "الهواء يعطي الكلمات لمشاعر الماء. الماء يضيف العمق لأفكار الهواء جميلة عندما تكون متوازنة", // TODO review (machine draft)
      dailyLife: "الهواء يساعد الماء على التعبير عن مشاعره بوضوح، والماء يذكّر الهواء بأن المشاعر لا تقلّ أهمية عن الأفكار.", // TODO review (hand draft, not from mobile)
      challenge: "⚠️ قد يعقلن الهواء المشاعر، وقد يشعر الماء بأنه غير مفهوم حين تُحلَّل عواطفه.", // TODO review (hand draft, not from mobile)
      tip: "💡 الهواء: اكتب رسائل محبة واستعمل كلماتك للعاطفة. الماء: شارك أحلامك بصوت مسموع وثق بأن الهواء يُصغي.", // TODO review (hand draft, not from mobile)
    },
    airEarth: {
      label: "هواء + تراب: الأفكار تضرب جذورها", // TODO review (hand draft, not from mobile)
      description: "الهواء يحلم والتراب يبني؛ منهجان متعاكسان قد يتكاملان أو يتصادمان.", // TODO review (hand draft, not from mobile)
      dailyLife: "الهواء يريد استكشاف الإمكانات، والتراب يريد الالتزام بطريق واحد. وهذا يخلق احتكاكًا في القرارات اليومية.", // TODO review (hand draft, not from mobile)
      challenge: "⚠️ قد يبدو الهواء مشتّتًا للتراب، وقد يبدو التراب جامدًا للهواء؛ قيم مختلفة تجاه النظام.", // TODO review (hand draft, not from mobile)
      tip: "💡 اصنعا لوحات رؤية معًا (الهواء)، ثم وزّعا المهام والمواعيد (التراب). التقيا في المنتصف.", // TODO review (hand draft, not from mobile)
    },
    waterWater: {
      label: "ماء + ماء: الصلة العميقة", // TODO review (hand draft, not from mobile)
      description: "تفاهم حدسي؛ تشعران بمشاعر بعضكما دون كلام، والتعاطف يسري بينكما بطبيعته.", // TODO review (hand draft, not from mobile)
      dailyLife: "نظرة تقول كل شيء. ترعى بعضكم البعض بشكل غريزي السلامة العاطفية تأتي بشكل طبيعي.", // TODO review (machine draft)
      challenge: "⚠️ قد تغرقان في العواطف معًا وتنعزلان عن العالم الخارجي؛ تحتاجان إلى منظور الهواء.", // TODO review (hand draft, not from mobile)
      tip: "💡 اكتبا يومياتكما معًا ثم ناقشا ما كتبتما. حوّلا العواطف إلى كلمات، وتواصلا مع الآخرين أيضًا.", // TODO review (hand draft, not from mobile)
    },
    waterEarth: {
      label: "المياه + الأرض: تعزيز النمو", // TODO review (machine draft)
      description: "انسجام طبيعي؛ الماء يغذّي التراب، والتراب يحتضن الماء. كالبستان، ينمو كل شيء بطبيعته.", // TODO review (hand draft, not from mobile)
      dailyLife: "تدعمون نمو بعضكم البعض بلا مجهود الماء يجلب المشاعر الأرض تجلب الاستقرار متوازنة وسلمية", // TODO review (machine draft)
      challenge: "⚠️ قد تتجنّبان الخلاف أو تركدان؛ الراحة الزائدة قد تعني غياب تحدّيات النمو.", // TODO review (hand draft, not from mobile)
      tip: "💡 اطبخا معًا، وازرعا، واصنعا بأيديكما. تقبّلا التغيير اللطيف وجرّبا شيئًا جديدًا كل شهر.", // TODO review (hand draft, not from mobile)
    },
    earthEarth: {
      label: "الأرض + الأرض: مؤسسة الصلب", // TODO review (machine draft)
      description: "استقرار صخري صلب الولاء، والاتساق، والأهداف العملية المشتركة. تَبْني معاً الطوبِ مِنْ الطوبِ.", // TODO review (machine draft)
      dailyLife: "روتين موثوق، ومسؤوليات مشتركة، وتقدّم ثابت. يعرف كلٌّ منكما ما يتوقّعه من الآخر.", // TODO review (hand draft, not from mobile)
      challenge: "⚠️ قد تقاومان التغيير أو تغرقان في الروتين، وكلاكما قد يكون عنيدًا. الحياة آمنة لكنها قد تفتقر إلى العفوية.", // TODO review (hand draft, not from mobile)
      tip: "💡 جدول شهري \"خبرات جديدة\" روتينات الكسر معا عمداً دعوة طاقة الهواء والنار.", // TODO review (machine draft)
    },
  },
  restPractices: {
    physicalRest: "راحة جسدية — نوم، استلقاء، حركة قليلة", // TODO review (hand draft, not from mobile)
    cancelNonEssential: "ألغِ كل الاجتماعات والمهام غير الضرورية", // TODO review (hand draft, not from mobile)
    lightPrayer: "دعاء أو ذكر خفيف فقط (بلا ممارسة مكثّفة)", // TODO review (hand draft, not from mobile)
    noDecisions: "لا قرارات اليوم — أجّلها إلى الأيام الأفضل", // TODO review (hand draft, not from mobile)
    hydrateNourish: "اشرب الماء، وتغذَّ جيدًا، وترفّق بنفسك", // TODO review (hand draft, not from mobile)
    silenceMeditation: "20 دقيقة صمت أو تأمّل بعيدًا عن الضوء الساطع", // TODO review (hand draft, not from mobile)
    gentleWalk: "مشي هادئ في الظل (بلا أهداف، حضور فقط)", // TODO review (hand draft, not from mobile)
    journalThoughts: "دوّن أفكارك دون فرض حلول", // TODO review (hand draft, not from mobile)
    postponeDecisions: "أجّل قرارات القيادة إلى الغد", // TODO review (hand draft, not from mobile)
    earlyBedtime: "نم مبكرًا (قبل العاشرة مساءً)", // TODO review (hand draft, not from mobile)
    byWater: "20 دقيقة قرب الماء (حقيقةً أو تخيّلًا)", // TODO review (hand draft, not from mobile)
    emotionalRelease: "تفريغ عاطفي لطيف — ابكِ، اكتب، عبّر", // TODO review (hand draft, not from mobile)
    warmFood: "تغذَّ بطعام دافئ مريح", // TODO review (hand draft, not from mobile)
    postponeEmotional: "أجّل المحادثات العاطفية", // TODO review (hand draft, not from mobile)
    extraSleep: "نوم إضافي — احترم إيقاعك القمري", // TODO review (hand draft, not from mobile)
    gentleMovement: "حركة لطيفة جدًا فقط (تمدّد، مشي بطيء)", // TODO review (hand draft, not from mobile)
    breathingExercises: "اهدأ بتمارين التنفّس", // TODO review (hand draft, not from mobile)
    noConflicts: "لا نزاعات أو مواجهات اليوم", // TODO review (machine draft)
    postponePhysical: "أجّل التحدّيات البدنية", // TODO review (hand draft, not from mobile)
    coolDown: "اهدأ بتمارين التنفّس", // TODO review (hand draft, not from mobile)
    informationFast: "صيام عن المعلومات — قلّل القراءة والرسائل", // TODO review (hand draft, not from mobile)
    speakLess: "قلل من الكلام، والاستماع إلى الصمت", // TODO review (machine draft)
    postponeCommunication: "أجّل التواصلات المهمة", // TODO review (hand draft, not from mobile)
    simpleTasks: "المهام البسيطة ذات التركيز الواحد فقط", // TODO review (machine draft)
    mentalRest: "راحة ذهنية — بلا حلّ مشكلات", // TODO review (hand draft, not from mobile)
    scaleBack: "قلّص الخطط الطموحة", // TODO review (hand draft, not from mobile)
    postponeTeaching: "أجّل التعليم ومشاركة الحكمة", // TODO review (hand draft, not from mobile)
    gratitudePractice: "تمرين الشكر على ما هو كائن", // TODO review (hand draft, not from mobile)
    restInContentment: "استرح في القناعة لا في التوسّع", // TODO review (hand draft, not from mobile)
    gentleSelfCare: "عناية لطيفة بالنفس (حمّام، صوت هادئ، جمال)", // TODO review (hand draft, not from mobile)
    noRelationshipDecisions: "لا قرارات علاقة اليوم", // TODO review (machine draft)
    postponeSocial: "أجّل التجمّعات الاجتماعية", // TODO review (hand draft, not from mobile)
    soloTime: "وقت منفرد في مكان مريح", // TODO review (hand draft, not from mobile)
    appreciateWithout: "تأمّل الجمال دون اقتناء", // TODO review (hand draft, not from mobile)
    releaseRigidity: "تخلَّ عن الجمود — لا تفرض النظام", // TODO review (hand draft, not from mobile)
    postponePlanning: "التخطيط الطويل الأجل", // TODO review (machine draft)
    letGoShould: "دع أفكار «ينبغي»", // TODO review (hand draft, not from mobile)
    flexibilityExercises: "تمارين مرونة لطيفة", // TODO review (hand draft, not from mobile)
    trustPause: "ثق بالتوقف قبل عودة الانضباط", // TODO review (machine draft)
  },
  glossary: {
    openTitle: "افتح معجم مصطلحات علم العدد", // TODO review (hand draft, not from mobile)
    closeLabel: "أغلق المعجم", // TODO review (hand draft, not from mobile)
    searchPlaceholder: "ابحث في المصطلحات... (مثال: «صغير»، «عنصر»، «قدر»)", // TODO review (hand draft, not from mobile)
    noResults: "لا توجد مصطلحات مطابقة لـ", // TODO review (hand draft, not from mobile)
  },
  controls: {
    closeKeyboard: "اغلق لوحة المفاتيح", // TODO review (machine draft)
    closeMenu: "أغلق القائمة", // TODO review (hand draft, not from mobile)
    updateLocation: "تحديث", // TODO review (hand draft, not from mobile)
  },
  energyReturn: {
    fast: "ما تعطيه يعود إليك سريعًا", // TODO review (hand draft, not from mobile)
    slow: "ما تعطيه اليوم يستغرق وقتاً للعودة", // TODO review (machine draft)
  },
  seo: {
    siteTitle: "أسرار — حاسبة علم الحروف وعلم العدد", // TODO review (hand draft, not from mobile)
    titleTemplate: "%s | أسرار", // TODO review (hand draft, not from mobile)
  },
  geometryKeywords: {
    vertical: ["التطلّع", "المدى الروحي", "الأهداف", "النمو"], // TODO review (hand draft, not from mobile)
    round: ["الرحمة", "الكمال", "الدورات", "الاحتضان"], // TODO review (hand draft, not from mobile)
    flat: ["الاستقرار", "الرسوخ", "الأساس", "التوازن"], // TODO review (hand draft, not from mobile)
    angular: ["القرار", "الحدّة", "الوضوح", "التحوّل"], // TODO review (hand draft, not from mobile)
  },
  elementGuidance: {
    Fire: {
      bestFor: ["بدء مشاريع جديدة", "اتخاذ القرارات المهمة", "المحادثات التي تحتاج إلى شجاعة", "الإقدام الجريء", "القيادة وإلهام الآخرين"], // TODO review (hand draft, not from mobile)
      avoid: ["معالجة المشاعر", "التخطيط التفصيلي", "العمل البطيء المنهجي"], // TODO review (hand draft, not from mobile)
    },
    Air: {
      bestFor: ["التواصل وبناء العلاقات", "تعلّم مفاهيم جديدة", "العصف الذهني", "الكتابة والتعبير", "التعليم ومشاركة المعرفة"], // TODO review (hand draft, not from mobile)
      avoid: ["العمل البدني الشاق", "العمل العاطفي العميق", "الالتزامات طويلة المدى"], // TODO review (hand draft, not from mobile)
    },
    Water: {
      bestFor: ["معالجة المشاعر", "التأمّل العميق", "محادثات المصالحة", "العمل الحدسي", "التدفّق الإبداعي"], // TODO review (hand draft, not from mobile)
      avoid: ["القرارات السريعة", "المواجهات", "التصرّف العدواني"], // TODO review (hand draft, not from mobile)
    },
    Earth: {
      bestFor: ["البناء والتنظيم", "الالتزام بالعهود", "إتمام المشاريع", "التخطيط المالي", "العمل البدني"], // TODO review (hand draft, not from mobile)
      avoid: ["التغييرات السريعة", "القرارات المتهوّرة", "التنظير المجرّد"], // TODO review (hand draft, not from mobile)
    },
  },
};
