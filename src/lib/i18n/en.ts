/* eslint-disable */
// Split out of src/lib/translations.ts (no content changes).
export const en = {
  // App-wide Abjad system selector (one choice for every calculator)
  abjadSystem: {
    note: "Maghribi (the Maghreb, al-Andalus & West Africa) · Mashriqi (Egypt, the Middle East & Asia)",
    title: "Abjad System",
    currentMode: "Current Mode:",
    maghribi: "Maghribi",
    mashriqi: "Mashriqi",
    western: "Western",
    eastern: "Eastern",
    maghribiSystem: "Maghribi System:",
    mashriqiSystem: "Mashriqi System:",
    maghribiDesc: "Traditional method of the Maghreb (Morocco to Libya), al-Andalus and West Africa (ش=1000, غ=900)",
    mashriqiDesc: "Eastern method used in Egypt, the Middle East and Asia (ش=300, غ=1000)",
  },

  // Navigation
  nav: {
    home: "Home",
    calculator: "Calculator",
    letterCalculator: "Letter Calculator",
    compatibility: "Compatibility",
    planetaryHours: "Planetary Hours",
    planetary: "Planetary Alignment",
    about: "About",
    aboutApp: "About This App",
    guidance: "Life Guidance",
    advanced: "Who Am I?",
    menu: "Menu",
  },

  // Welcome Section
  welcome: {
    title: "Welcome to Asrār Everyday",
    description: "Explore the rich tradition of ʿIlm al-Ḥurūf (Science of Letters) and ʿIlm al-ʿAdad (Science of Numbers) through an intuitive, educational interface. Enter Arabic text above to discover numerical values, elemental associations, and traditional guidance.",
  },

  // Common UI
  common: {
    calculate: "Calculate",
    clear: "Clear",
    submit: "Submit",
    cancel: "Cancel",
    close: "Close",
    save: "Save",
    loading: "Loading...",
    error: "Error",
    success: "Success",
    name: "Name",
    date: "Date",
    location: "Location",
    enterName: "Enter name",
    selectDate: "Select date",
    results: "Results",
    history: "History",
    favorites: "Favorites",
    compare: "Compare",
    delete: "Delete",
    copy: "Copy",
    copied: "Copied!",
    viewAll: "View All",
    hideAll: "Hide All",
    expand: "Expand",
    collapse: "Collapse",
    next: "Next",
    back: "Back",
    skip: "Skip",
    edit: "Edit",
    upload: "Upload",
    remove: "Remove",
    optional: "Optional",
  },

  // User Profile
  profile: {
    title: "My Profile",
    setup: "Profile Setup",
    edit: "Edit Profile",
    view: "View Profile",
    completion: "Profile Completion",
    completeYourProfile: "Complete Your Profile",
    profileIncomplete: "Your profile is incomplete. Complete it to personalize your experience.",
    
    // Setup Steps
    steps: {
      basicInfo: "Basic Info",
      birthDate: "Birth Date",
      location: "Location",
      avatar: "Profile Picture",
    },
    
    // Form Fields
    fullName: "Full Name",
    fullNamePlaceholder: "Enter your full name",
    fullNameHelper: "Used for name calculations and personalized greetings",
    
    dateOfBirth: "Date of Birth",
    dateOfBirthHelper: "Required for accurate destiny calculations",
    
    locationName: "Location",
    locationPlaceholder: "City, Country",
    locationHelper: "Used for planetary hour calculations based on your timezone",
    detectLocation: "Detect My Location",
    detectingLocation: "Detecting location...",
    
    language: "Preferred Language",
    languageHelper: "Choose your preferred language for the app",
    
    timezone: "Timezone",
    timezoneHelper: "Automatically detected from your location",
    
    // Avatar
    profilePicture: "Profile Picture",
    uploadPhoto: "Upload Photo",
    changePhoto: "Change Photo",
    removePhoto: "Remove Photo",
    photoHelper: "JPG, PNG, or WebP (max 2MB)",
    dragDropPhoto: "Drag and drop your photo here, or click to browse",
    photoUploading: "Uploading...",
    photoUploadSuccess: "Photo uploaded successfully!",
    photoUploadError: "Failed to upload photo. Please try again.",
    photoTooLarge: "Photo is too large. Maximum size is 2MB.",
    photoInvalidType: "Invalid file type. Please upload JPG, PNG, or WebP.",
    
    // Messages
    saveSuccess: "Profile saved successfully!",
    saveError: "Failed to save profile. Please try again.",
    setupComplete: "Profile setup complete!",
    setupWelcome: "Welcome! Let's set up your profile to personalize your experience.",
    
    // Completion Status
    percentComplete: "% Complete",
    almostDone: "Almost done!",
    getStarted: "Get started by completing your profile",
    
    // Actions
    completeSetup: "Complete Setup",
    saveChanges: "Save Changes",
    cancelEdit: "Cancel",
    skipForNow: "Skip for now",
    
    // Profile View
    memberSince: "Member since",
    lastSeen: "Last seen",
    noProfileYet: "No profile information yet",
    createProfile: "Create Profile",
  },

  // History & Comparisons
  history: {
    title: "History",
    recentCalculations: "Recent Calculations",
    noCalculationsYet: "No calculations yet",
    clearAll: "Clear All",
    confirmClear: "Clear all history? This cannot be undone.",
    favorites: "Favorites",
    recent: "Recent",
  },

  // Comparison Modal
  comparison: {
    title: "Compare Two Names",
    firstName: "First Name/Text",
    secondName: "Second Name/Text",
    elementalHarmony: "Elemental Harmony",
    analysis: "Analysis",
    planet: "Planet",
    day: "Day",
    bestHours: "Best Hours",
  },

  // Daily Reflection
  dailyReflection: {
    title: "Daily Spiritual Reflection",
    todaysReflection: "Today's Reflection",
    dailyBadge: "Daily",
    verseOfTheDay: "Verse of the Day",
    divineNameForReflection: "Divine Name for Reflection",
    optimalReflectionTimes: "Optimal reflection times",
    suggestedCounts: "Suggested counts",
    expandReflection: "Expand reflection",
    collapseReflection: "Collapse reflection",
  },

  // Ramadan Istighfār Tracker
  ramadan: {
    title: "Ramadan Istighfār Challenge",
    subtitle: "Complete 124,000 Istighfār this Ramadan",
    arabic: "أَسْتَغْفِرُ اللهَ",
    transliteration: "Astaghfirullāh",
    contextNote: "Whoever fills their Ramadan with Istighfār, Allah will open for them a way out of every difficulty.",
    totalTarget: "Total Target",
    completed: "Completed",
    remaining: "Remaining",
    todaysTarget: "Today's Target",
    todaysProgress: "Today's Progress",
    remainingToday: "Remaining Today",
    overallProgress: "Overall Progress",
    ramadanDay: "Ramadan Day",
    // Pacing plans
    choosePlan: "Choose Your Pacing Plan",
    choosePlanDesc: "Select how you'd like to spread your recitations across the month",
    planIntensive: "Intensive",
    planIntensiveDesc: "12,400/day — Complete in 10 days",
    planBalanced: "Balanced",
    planBalancedDesc: "6,200/day — Complete in 20 days",
    planSteady: "Steady",
    planSteadyDesc: "~4,134/day — Across full 30 days",
    planLight: "Light",
    planLightDesc: "3,100/day — Extended 40-day pace",
    planCustom: "Custom",
    planCustomDesc: "Set your own daily goal",
    customDailyGoal: "Your daily goal",
    selectPlan: "Select Plan",
    changePlan: "Change Plan",
    // Sessions
    logSession: "Log Session",
    sessionFajr: "Fajr",
    sessionDuha: "Ḍuḥā / Morning",
    sessionDhuhr: "Ẓuhr",
    sessionAsr: "ʿAṣr",
    sessionMaghrib: "Maghrib / Ifṭār",
    sessionIsha: "ʿIshāʾ / Tarāwīḥ",
    sessionCustom: "Other",
    addCount: "Add",
    // Progress
    completionMessage: "Mā shāʾ Allāh! You have completed the 124,000 Istighfār challenge!",
    completionDua: "May Allah accept your Istighfār, forgive your sins, and grant you ease in every affair. Āmīn.",
    todayComplete: "Today's target completed ✓",
    surplus: "Surplus",
    dayLog: "Daily Log",
    noEntries: "No entries yet today",
    signInPrompt: "Sign in to track your Ramadan Istighfār progress",
    signIn: "Sign In",
    ramadanBadge: "Ramadan",
    heatmapTitle: "Monthly Progress",
    streakDays: "Day Streak",
    // Quick-tap amounts
    quickTap: "Quick Add",
    // Add Challenge Modal
    addChallenge: {
      title: "Add a Wird Challenge",
      subtitle: "Choose a wird to track your daily devotions",
      salawatTitle: "Ṣalawāt",
      salawatDescription: "Blessings upon the Prophet ﷺ",
      propheticNamesTitle: "201 Holy Names",
      propheticNamesDescription: "Rizq Abundance · 7-Day Morning Practice",
      debtReliefTitle: "Debt Relief Wird",
      debtReliefDescription: "1000× after ʿIshāʾ for debt relief",
      divineNameTitle: "Divine Name",
      divineNameDescription: "Recite one of the 99 Names of Allah",
      customTitle: "Custom Wird",
      customDescription: "Add your own dhikr or wird",
      customWird: "Custom Wird",
      special: "Special",
      alreadyAdded: "Already Added",
      back: "Back",
      chooseSalawat: "Choose a Ṣalawāt",
      tapToPreview: "Tap to preview the full text",
      recommended: "Recommended:",
      perDay: "per day",
      viewFullText: "View full text →",
      transliteration: "Transliteration",
      showMeaning: "Show Meaning",
      recommendedDailyTarget: "Recommended Daily Target",
      alreadyAddedButton: "Already Added",
      selectThisSalawat: "Select This Ṣalawāt",
      chooseDivineName: "Choose a Divine Name",
      addDivineName: "Add Divine Name Challenge",
      titleLabel: "Title",
      titlePlaceholder: "e.g. Tasbīḥ",
      arabicText: "Arabic Text",
      dailyTarget: "Daily Target",
      ramadanTarget: "30-day total",
      addCustomWird: "Add Custom Wird",
      steps: "Steps:",
      names: "Names",
      spiritualPurpose: "Spiritual Purpose",
    },
  },

  // 201 Holy Names of Prophet ﷺ
  propheticNames: {
    title: "201 Holy Names of Prophet Muḥammad ﷺ",
    subtitle: "Rizq Abundance · 7-Day Morning Practice",
    shortTitle: "201 Holy Names",
    tradition: "Dalāʾilu l-Khayrāt · Imam Muḥammad al-Jazūlī",
    authorization: "Cherno Moussa Yero Sy — Spiritual Master of the Tijaniyya Order",
    description: "Recite Allāhu Jāmiʿu 180× followed by the 201 Holy Names with Ṣalla-llāhu ʿalayhi wa sallam. Practice once daily in the morning for 7 days.",
    promise: "Immeasurable changes in your rizq, abundance, and divine provision will manifest.",
    
    // Duration & Sessions
    duration: "Duration",
    days: "days",
    sessions: "Sessions",
    sessionsPerDay: "Once daily (Morning)",
    estimatedTime: "Estimated time",
    estimatedTimeValue: "25-35 minutes per session",
    
    // 7-Day Tracker
    day: "Day",
    morning: "Morning",
    evening: "Evening",
    dayComplete: "Day complete",
    sessionsComplete: "days",
    complete: "Complete",
    onceDaily: "Once daily (Morning)",
    startNext: "Start Today's Practice",
    congratulations: "Congratulations!",
    completedAllDays: "You have completed all 7 days of practice!",
    startAgain: "Start Again",
    continueDaily: "Continue Daily",
    dailyPractice: "Daily Practice",
    cycles: "Cycles",
    totalPractices: "Total",
    todayComplete: "Today's practice is done!",
    comeBackTomorrow: "Come back tomorrow for your next session",
    startTodaysPractice: "Start Today's Practice",
    resetAll: "Reset All",
    
    // Practice Steps
    practiceSteps: "Practice Steps",
    stepPrefix: "Step",
    step1: "Allāhu Jāmiʿu",
    step1Count: "180×",
    step2: "The 201 Holy Names",
    step2Note: "With Ṣalla-llāhu ʿalayhi wa sallam after each name",
    step3: "Closing Duʿāʾ",
    step3Note: "From Dalāʾilu l-Khayrāt",
    stepsForSession: "Steps for this session:",
    the201HolyNames: "The 201 Holy Names",
    withSallaAfterEach: "With Ṣalla-llāhu ʿalayhi wa sallam after each name",
    fromDalail: "From Dalāʾilu l-Khayrāt",
    beginBismillah: "Begin بسم الله",
    step2The201Names: "Step 2: The 201 Names",
    step3ClosingDua: "Step 3: Closing Duʿāʾ",
    
    // Practice Modal
    recite: "Recite",
    tapToCount: "Tap to count",
    reset: "Reset",
    continueToNames: "Continue to Names",
    continueToDua: "Continue to Duʿāʾ",
    completeSession: "Complete Session",
    close: "Close",
    
    // Allāhu Jāmiʿu
    yaJamiuArabic: "اللهُ جَامِعُ",
    yaJamiuTranslit: "Allāhu Jāmiʿu",
    yaJamiuMeaning: "Allah is the Gatherer, the Mighty One",
    
    // Names list
    theNames: "The 201 Names",
    hideMeaning: "Hide meaning",
    showMeaning: "Show meaning",
    salawatAfterName: "Ṣalla-llāhu ʿalayhi wa sallam",
    
    // Opening: Al-Fātiḥa
    openingDua: "Al-Fātiḥa (The Opening)",
    
    // Closing Duʿāʾ
    closingDua: "Closing Duʿāʾ",
    closingDuaSource: "Tirmidhī · Ḥasan",
    
    // Completion
    mashaAllah: "Māshāʾ Allāh!",
    sessionCompleted: "completed!",
    completedBadge: "completed!",
    nextSession: "Next:",
    next: "Next:",
    practiceComplete: "Practice complete!",
    tonightSession: "Tonight:",
    tonight: "Tonight:",
    eveningSession: "Evening session",
    tomorrowMorning: "Morning",
    
    // Source & Authorization
    source: "Source",
    authorizationLabel: "Authorization",
    
    // Add Challenge Modal
    specialPractice: "Special Practice",
    special: "Special",
    sevenDayPractice: "7-Day Morning Practice",
    start7Day: "Start 7-Day Challenge",
    
    // Card
    remove: "Remove",
    removeChallenge: "Remove this challenge?",
    progressWillBeLost: "Your progress will be lost.",
    
    // Share
    share: "Share",
    inviteFriends: "Invite Friends to Join",
    shareInvite: "Share this practice",
    shareTitle: "201 Holy Names of Prophet Muḥammad ﷺ",
    shareText: "Join the 7-day Rizq Abundance Practice! Recite the 201 Holy Names of Prophet Muḥammad ﷺ every morning for divine blessings.",
    shareVia: "Share via",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    twitter: "X (Twitter)",
    copyLink: "Copy Link",
    linkCopied: "Link copied!",
    shareFailed: "Could not share",
  },

  // Debt Relief Wird
  debtRelief: {
    title: "Debt Relief Wird",
    shortTitle: "Debt Relief",
    subtitle: "1000× After ʿIshāʾ Prayer",
    quranicWird: "Qurʾānic Wird",
    source: "Sūrat Fāṭir 35:17 · Sūrat Ibrāhīm 14:20",
    timing: "After ʿIshāʾ Prayer",
    dailyCount: "1000 recitations",
    estimatedTime: "15-20 minutes",
    description: "Recite this sacred Qurʾānic verse 1000 times after ʿIshāʾ prayer daily for relief from debt and fast repayment.",
    purpose: "Relief from debt and fast repayment (faraj min al-dayn)",
    
    // The sacred verse
    arabic: "وَمَا ذَٰلِكَ عَلَى اللهِ بِعَزِيزٍ",
    transliteration: "Wamā dhālika ʿalā llāhi bi-ʿAzīzin",
    meaning: "And that is not difficult for Allah",
    
    // Spiritual meaning
    spiritualMeaning: "This verse affirms absolute trust in Allah's limitless power. What may seem impossible to us — including freedom from debt — is effortless for Allah. By repeatedly invoking this truth, we align our hearts with Divine capability and invite miraculous relief.",
    
    // Benefits
    benefits: "Benefits",
    benefit1: "Relief from financial burden and debt",
    benefit2: "Fast and unexpected repayment opportunities",
    benefit3: "Opening of new sources of provision",
    benefit4: "Peace of heart regarding financial matters",
    benefit5: "Strengthened trust in Allah's power",
    
    // Practice
    startDailyWird: "Start Daily Wird",
    continueWird: "Continue Wird",
    wirdComplete: "Daily wird complete!",
    
    // Card & Modal
    remove: "Remove",
    removeChallenge: "Remove this challenge?",
    progressWillBeLost: "Your progress will be lost.",
  },

  // Digital Tasbih Counter
  tasbih: {
    title: "Tasbih Counter",
    tapToCount: "Tap to count",
    reset: "Reset",
    complete: "Complete!",
    logProgress: "Log Progress",
    hint: "You can close anytime — your count will be saved",
    openTasbih: "Open Tasbih",
    remove: "Remove",
    removeChallenge: "Remove this challenge?",
    progressWillBeLost: "Your progress will be lost.",
  },

  // Guidance Content
  guidance: {
    relatedQuranicVerses: "Related Quranic Verses",
    divineNames: "Asmā' al-Ḥusnā (Beautiful Names)",
    letterValues: "Letter Values",
    sumAllValues: "Sum All Values",
    calculateDigitalRoot: "Calculate Digital Root",
    elementDiscovery: "Element Discovery",
    discoverSignificance: "Discover the numerological significance of your name through the traditional Islamic sciences",
    howLettersConvert: "How each Arabic letter converts to sacred numbers",
    fourElements: "The four classical elements and your spiritual composition",
    sacredConnections: "Sacred connections and divine resonances in your numbers",
    totalOfAllLetters: "Total of all letter values",
    spiritOfTheCycle: "Spirit of the cycle",
  },

  // Calculator
  calculator: {
    title: "Calculator",
    subtitle: "Islamic Numerology Based on Abjad System",
    calculateLetterValues: "Calculate Letter Values",
    enterYourName: "Enter Your Name",
    namePlaceholder: "محمد",
    calculateButton: "Calculate",
    latinText: "Latin Text (English/French)",
    arabicText: "Arabic Text",
    autoTransliterates: "Auto-transliterates to Arabic • Supports EN/FR names",
    showKeyboard: "Show Keyboard",
    hideKeyboard: "Hide Keyboard",
    examples: "Examples",
    
    // Abjad System Labels
    maghribi: "Maghribi",
    mashriqi: "Mashriqi",
    
    // Info Section
    whatYouLearn: "What You're About to Learn",
    discoverSignificance: "Discover the numerological significance of your name through the traditional Islamic sciences",
    numericalValues: "Numerical Values",
    numericalValuesDesc: "How each Arabic letter converts to sacred numbers",
    elementalForces: "Elemental Forces",
    elementalForcesDesc: "The four classical elements and your spiritual composition",
    hiddenPatterns: "Hidden Patterns",
    hiddenPatternsDesc: "Sacred connections and divine resonances in your numbers",
    
    // Key Metrics
    keyMetrics: "Key Metrics",
    totalOfAllLetterValues: "Total of all letter values",
    digitalRoot: "Digital root (1-9)",
    remainderMod4: "Remainder mod 4",
    spiritOfTheCycle: "Spirit of the cycle",
    
    // Step by Step
    stepByStep: "Step-by-Step Calculation",
    reduceToSingleDigit: "Reduce to single digit",
    dominantElement: "Dominant element",
    totalAbjadValue: "Total Abjad Value",

    kabir: {
      title: "Kabīr (الكبير)",
      subtitle: "Grand Total",
      description: "The total energetic signature of your name",
      label: "KABĪR (LARGE)",
    },
    saghir: {
      title: "Ṣaghīr (الصغير)",
      subtitle: "Spiritual Essence",
      description: "The core spiritual quality, reduced to a single digit (1-9)",
      label: "ṢAGHĪR (SMALL)",
    },
    hadath: {
      title: "Ḥadath (الحدث)",
      subtitle: "Element",
      description: "The dominant natural element",
      label: "ḤADATH (CYCLE)",
    },
    ruh: {
      title: "Rūḥ Ḥadad (روح الحدد)",
      subtitle: "Soul Number",
      description: "The bridge between outer appearance and inner essence",
      label: "RŪḤ ḤADAD",
    },
    
    // Mode Switcher
    knowledgeLevel: "Knowledge Level",
    knowledgeLevelHelp: "What's this?",
    knowledgeLevelInfo: "Choose your expertise level:\n\n🔰 Beginner: Learn the basics of Abjad calculations\n🎓 Intermediate: Explore Burj, planets, and divine names\n👑 Scholar: Access advanced research tools",
    beginner: "Beginner",
    intermediate: "Intermediate",
    scholar: "Scholar",
    learnBasics: "Learn basics",
    deeperAnalysis: "Deeper analysis",
    fullResearch: "Full research",
    
    // Burj (Zodiac)
    burjTitle: "Burj (Zodiac Sign)",
    burjSubtitle: "Classical Islamic astronomy",
    calculation: "Calculation",
    element: "Element",
    modality: "Modality",
    planetaryRuler: "Planetary Ruler",
    temperament: "Temperament",
    symbolism: "Symbolism",
    spiritualQuality: "Spiritual Quality",
    classicalReference: "Classical Reference",
    
    // Planetary Signature
    planetarySignature: "Planetary Signature",
    sevenPlanets: "The 7 classical planets",
    planet: "Planet",
    dayOfWeek: "Day of Week",
    hourNumber: "Hour Number",
    metal: "Metal",
    color: "Color",
    dhikrRecommendation: "Dhikr Recommendation",
    divineName: "Divine Name",
    count: "Count",
    timing: "Timing",
  },
  
  // Elemental Composition
  elementalComposition: {
    title: "Elemental Composition",
    letters: "letters",
  },
  
  // Sacred Numbers
  sacredNumbers: {
    title: "Sacred Number Resonance",
    divisibleBy: "Divisible by",
    divinePerfection: "Divine perfection",
    quranicHarmony: "Quranic harmony",
    divineNames: "99 Divine Names",
    nearest: "Nearest",
  },
  
  // Numerical Essence
  numericalEssence: {
    title: "Your Numerical Essence",
    coreNumberMeaning: "Core Number Meaning:",
    theNumber: "The Number",
    dominantElement: "Dominant Element:",
    
    // Number meanings
    number1: "Leadership, independence, pioneering spirit",
    number2: "Partnership, balance, cooperation and harmony",
    number3: "Creativity, expression, joy and communication",
    number4: "Stability, foundation, security and structure",
    number5: "Freedom, adventure, change and adaptability",
    number6: "Service, responsibility, nurturing and love",
    number7: "Wisdom, spirituality, introspection and mystery",
    number8: "Power, abundance, material mastery and success",
    number9: "Completion, universal love, wisdom and compassion",
    
    // Element descriptions
    fireDesc: "Passionate, energetic, transformative, action-oriented",
    waterDesc: "Intuitive, emotional, reflective, flowing and adaptive",
    airDesc: "Communicative, intellectual, social, quick-thinking",
    earthDesc: "Grounded, practical, reliable, solid and steady",
    
    // Guidance message
    guidanceMessage: "These numbers and elements offer guidance for self-reflection. Remember that you are more than numbers×your choices, values, and character shape your destiny.",
  },
  
  // Celestial Signature
  celestialSignature: {
    title: "Celestial Signature",
    planet: "Planet",
    day: "Day",
    bestHours: "Best Hours",
    footerNote: "Based on classical Islamic cosmology following the Four Natures (Ṭabāʾiʿ Arbaʿa) • For spiritual reflection only",
  },
  
  // Disclaimer
  disclaimer: {
    title: "Educational Tool:",
    message: "This app explores the traditional Islamic sciences of ʿIlm al-Ḥurūf and ʿIlm al-ʿAdad for cultural and historical reflection. It is not for fortune-telling, medical advice, or religious rulings. Always consult qualified scholars for religious guidance.",
  },

  // Elements
  elements: {
    fire: "Fire",
    water: "Water",
    air: "Air",
    earth: "Earth",
    fireDesc: "Hot & Dry - Passionate and energetic",
    waterDesc: "Cold & Wet - Emotional and intuitive",
    airDesc: "Hot & Wet - Intellectual and communicative",
    earthDesc: "Cold & Dry - Stable and grounding",
  },

  // Enhanced Temperament Profiles (Psychology + Career)
  temperament: {
    title: "Temperament Profile",
    psychologyTitle: "Psychological Profile",
    careerTitle: "Career Guidance",
    
    traits: "Core Traits",
    strengths: "Strengths",
    watchOuts: "Watch Out For",
    balanceTips: "Balance Tips",
    
    careerGoodFits: "Good Career Fits",
    careerAvoid: "May Find Challenging",
    careerRationale: "Why This Fits",
    
    // Note: Individual temperament data is now in temperamentProfiles.ts
    // This section contains only UI labels
  },

  // Life Path
  lifePath: {
    title: "Life Path Numerology",
    lifePathNumber: "Life Path Number",
    expressionNumber: "Expression Number",
    soulUrge: "Soul Urge Number",
    personality: "Personality Number",
    destiny: "Destiny Number",
    personalYear: "Personal Year",
    personalMonth: "Personal Month",
    karmicDebt: "Karmic Debt Numbers",
    sacredNumbers: "Sacred Numbers",
    cycle: "Life Cycle",
    
    // Core vs External sections
    coreNumbers: "Your Core Life Numbers",
    coreNumbersDesc: "These four numbers reveal your core personality, inner desires, how others see you, and your life's purpose. Calculated from your personal name only.",
    externalInfluences: "External Influences",
    maternalInfluence: "MATERNAL INFLUENCE",
    maternalInfluenceDesc: "This number shows how your mother's energy affects your external path and the conditions that surround you.",
    maternalInfluenceExplanation: "Your mother's name reveals external conditions and inherited influences that surround your path, but do not define your core identity.",

    // Number labels in cards
    lifePathLabel: "LIFE PATH NUMBER",
    expressionLabel: "EXPRESSION NUMBER",
    soulUrgeLabel: "SOUL URGE NUMBER",
    personalityLabel: "PERSONALITY NUMBER",
    destinyLabel: "DESTINY NUMBER",

    // Simple explanations
    lifePathSimple: "Calculated from your birth date. Your soul's blueprint and the main purpose you came here to fulfill.",
    expressionSimple: "Calculated from your name. How you express your life path through your unique talents and personality.",
    soulUrgeSimple: "Your inner motivation. What you're seeking in life and what brings you real joy & satisfaction.",
    personalitySimple: "Your public face. How you appear to others & the energy you give off when you walk into a room.",
    destinySimple: "Your life purpose & ultimate goal. What you're meant to accomplish and give to the world.",

    // Section titles
    whatItMeans: "What it means:",
    important: "Important:",
    externalEnergy: "External Energy",
    importantNote: "This represents what surrounds you, not who you are. Your core numbers above define your true identity.",

    // Quick Guide boxes
    quickGuideTitle: "Quick Guide:",
    lifePathQuick: "Your core talents & natural strengths. The abilities you're born with.",
    soulUrgeQuick: "What truly makes you happy. Your deepest desires & inner fulfillment.",
    personalityQuick: "The impression you give. How people see & experience you at first.",
    destinyQuick: "Your life purpose & what you're meant to achieve. Your ultimate goal.",

    // Cycle Section
    whereYouAreNow: "Where You Are Right Now",
    currentLifePhase: "Current Life Phase",
    phaseOf9: "Phase {number} of 9",
    yearTheme: "Year {position}/9:",
    focusAreas: "Focus Areas:",
    yourAge: "Your Age",
    years: "{age} years",
    yearMonthEnergy: "This Year & Month's Energy",
    personalYearLabel: "Personal Year",
    personalMonthLabel: "Personal Month",
    overallEnergy: "Overall energy",
    monthFlow: "This month's flow",

    // Strengths & Challenges
    strengthsAndGrowth: "Your Strengths & Growth Opportunities",
    strengthsIntro: "Each number from 1-9 represents different life qualities. Your strengths show what you naturally excel at. Growth areas show where you can develop further.",
    whatYouAreStrongAt: "What You're Strong At",
    whereYouCanGrow: "Where You Can Grow",
    strength: "Strength {number}",
    growthArea: "Growth Area {number}",
    strengthDesc1: "What makes you capable and reliable",
    strengthDesc2: "What gives you an edge",
    strengthDesc3: "Your natural talent",
    strengthDesc4: "What you excel at",
    growthDesc1: "A quality to develop",
    growthDesc2: "An area for improvement",
    growthDesc3: "Something to work on",
    growthDesc4: "A key life lesson",
    currentStrength: "Right Now (Your Current Strength):",
    currentStrengthDesc: "This is the main strength supporting you this season",
    currentChallenge: "Currently Working On (Your Main Focus):",
    currentChallengeDesc: "This is what life is teaching you right now×embrace it!",

    // Special Numbers
    specialNumbers: "Special Numbers & Lessons",
    lessonsToLearn: "Lessons to Learn",
    lessonsDesc: "These numbers represent lessons your soul wants to learn in this lifetime. They're not obstacles × they're opportunities for growth.",
    blessedNumbers: "Blessed Numbers",
    blessedDesc: "These are powerful numbers connected to spiritual tradition. They bring special blessings and spiritual protection to your life.",

    // Number Archetypes (1-11, 22)
    numberArchetypes: {
      1: { title: "The Leader", meaning: "You're naturally independent and driven to create new things. You prefer making decisions yourself." },
      2: { title: "The Peacemaker", meaning: "You're great at bringing people together and finding harmony. You're sensitive to others' feelings." },
      3: { title: "The Creator", meaning: "You express yourself easily and bring joy wherever you go. Communication is your strength." },
      4: { title: "The Builder", meaning: "You're reliable and practical. You build solid foundations in everything you do." },
      5: { title: "The Explorer", meaning: "You love freedom and variety. You adapt quickly and learn from diverse experiences." },
      6: { title: "The Caregiver", meaning: "You're responsible and naturally want to help others. Family and service matter deeply to you." },
      7: { title: "The Thinker", meaning: "You're analytical and spiritual. You seek deeper understanding in life's mysteries." },
      8: { title: "The Achiever", meaning: "You're ambitious and focused on success. You have strong business and leadership abilities." },
      9: { title: "The Humanitarian", meaning: "You care about the world and want to make a positive difference. Compassion guides you." },
      11: { title: "The Visionary", meaning: "You see beyond ordinary things. You inspire others and carry spiritual messages." },
      22: { title: "The Master Builder", meaning: "You have big ambitions to create something lasting. You turn dreams into reality on a large scale." },
    },

    descriptions: {
      lifePath: "Your soul's primary journey and purpose",
      soulUrge: "Your heart's deepest desires and inner motivations",
      personality: "How others perceive you; your outer expression",
      destiny: "Your ultimate life mission and divine purpose",
      personalYear: "The main theme and energy of your current year",
      personalMonth: "The monthly energy and focus",
    },

    // Phase 1 Enhancements
    elementalComposition: "Your Elemental Composition",
    elementalCompositionDesc: "Based on your four core numbers, here's the elemental balance in your life path:",
    dominantElement: "Dominant Element",
    elementalBalance: "Elemental Balance",
    
    elementDescriptions: {
      fire: "Fire brings passion, initiative, and drive. You're motivated to take action and lead.",
      earth: "Earth brings stability, practicality, and groundedness. You build lasting foundations.",
      air: "Air brings intellect, communication, and adaptability. You thrive on ideas and connections.",
      water: "Water brings emotion, intuition, and sensitivity. You navigate life through feeling.",
    },

    careerGuidance: "Career Guidance",
    careerGuidanceIntro: "Based on your Life Path Number, here are careers that align with your natural strengths:",
    idealCareers: "Careers That Fit You Well",
    careersToAvoid: "Environments That May Challenge You",
    whyTheseFit: "Why these careers suit you:",
    
    balanceTips: "Balance & Self-Care Tips",
    balanceTipsIntro: "Actionable ways to maintain balance and honor your Life Path energy:",
    
    shadowWork: "Shadow Work & Growth Edges",
    shadowWorkIntro: "Every number has challenges. These aren't flaws—they're opportunities for growth:",
    growthOpportunities: "Areas to Watch & Develop",
    
    practicalGuidance: "Practical Guidance",
    pathSummary: "Your Path in Brief",
    spiritualPractice: "Spiritual Practice",
    quranicConnection: "Quranic Connection",
    weeklyActions: "Weekly Action Steps",
    shadowToAvoid: "Main Pattern to Watch",
    
    // Phase 2 Enhancements
    quranicWisdom: "Quranic Wisdom & Divine Attributes",
    quranicWisdomDesc: "Discover how your Life Path connects to sacred verses and divine names:",
    verse: "Quranic Verse",
    divineAttribute: "Divine Attribute (Asma ul-Husna)",
    spiritualMeaning: "Spiritual Meaning for Your Path",
    dailyPractice: "Daily Spiritual Practice",
  },

  // Compatibility
  compatibility: {
    title: "Relationship Compatibility",
    person1: "Person 1",
    person2: "Person 2",
    checkCompatibility: "Check Compatibility",
    overallScore: "Overall Harmony Score",
    spiritualHarmony: "Spiritual Harmony",
    elementalHarmony: "Elemental Harmony",
    planetaryCompatibility: "Planetary Compatibility",
    
    // Core vs Cosmic sections
    coreCompatibility: "Core Compatibility (Personal Names)",
    coreCompatibilityDesc: "How your conscious personalities interact",
    cosmicLayer: "Cosmic Layer (Maternal Influences)",
    cosmicLayerDesc: "How your inherited energies interact together",
    cosmicLayerExplanation: "Your mother's element represents cosmic conditions affecting your soul connection. This is about inherited emotional patterns, not your core personality.",

    ratings: {
      excellent: "Excellent",
      good: "Good",
      moderate: "Moderate",
      challenging: "Challenging",
    },
  },

  // Name Destiny
  nameDestiny: {
    // Core vs Inherited Analysis Labels
    coreAnalysis: "Core Analysis (Your Name Only)",
    coreAnalysisDesc: "These reflect your inner nature and personal identity.",
    inheritedInfluences: "Inherited Influences",
    inheritedInfluencesDesc: "Shows how your mother's energy influences your external conditions.",
    whyMotherName: "Why add mother's name?",
    motherNameExplanation: "Your personal name reveals WHO you are (inner identity). Your mother's name reveals external conditions that surround you×obstacles, protection, and family inheritance.",
    motherNameInfo: "Personal Name = WHO you are | Name + Mother = WHAT surrounds you",
    
    nameChart: {
      title: "Name Chart",
      subtitle: "Spiritual Blueprint of Your Name",
      total: "Total (Ḥadad Kabīr)",
      saghir: "Digital Root (Ṣaghīr)",
      tabh: "Element (Ṭabʿ)",
      burj: "Zodiac Sign (Burj)",
      planet: "Planet",
      day: "Day",
      hour: "Planetary Hour #",
      hourTip: "Nth hour after local sunrise. Order: Sun, Venus, Mercury, Moon, Saturn, Jupiter, Mars.",
      elementHarmony: "Element Harmony",
      harmonious: "✨ Harmonious",
      nourishing: "🌱 Nourishing",
      transformative: "⚡ Transformative",
      unified: "💫 Unified",
    },
    destinyNumber: {
      title: "Your Life Destiny Number",
      subtitle: "Core Destiny Number & Station",
      sumOfLetters: "Sum of all letter values",
      reducedRoot: "Reduced digital root",
    },
    quranicResonance: {
      title: "Qur'anic Resonance",
      subtitle: "Divine Connection Through Your Number",
    },
    motherOrigin: {
      subtitle: "Your inherited energetic foundation",
    },
    inputs: {
      motherName: "Mother's Name",
      motherHint: "Optional × add to see inherited influences and family harmony.",
      motherOptional: "Mother's Name (optional for inherited influences)",
    },
    origin: {
      title: "Your Spiritual Origin",
      motherElement: "Mother's Name Element (Umm Ḥadad)",
      inheritance: "Element Inheritance",
      expression: "Expression",
      foundation: "Foundation",
      yourExpression: "Your Expression",
      yourFoundation: "Your Foundation",
      insight: "Insight",
      kabir: "Kabīr",
      saghir: "Ṣaghīr",
      hadath: "Ḥadath",
    },
    geometry: {
      title: "Letter Geometry (Handasa al-Ḥurūf)",
      vertical: "Vertical (ʿAmūdī)",
      round: "Round (Mudawwar)",
      flat: "Flat (Musaṭṭaḥ)",
      angular: "Angular (Zāwiya)",
      none: "None in your name",
      profile: "Your Geometric Profile",
    },
    triad: {
      title: "Your Soul Triad",
      lifeDestiny: "Life Destiny",
      soulUrge: "Soul Urge",
      outerPersonality: "Outer Personality",
    },
    guidance: {
      title: "Practical Guidance",
      yourPath: "Your Path",
      yourPathDesc: "Explains what your life direction and energy naturally move toward.",
      spiritualPractice: "Spiritual Practice",
      spiritualPracticeDesc: "Simple daily habits or reflections to balance your element.",
      quranicGuidance: "Quranic Guidance",
      quranicGuidanceDesc: "A verse connected to your name's energy, for reflection only.",
      practicalAction: "Practical Action",
      practicalActionDesc: "Steps you can take in everyday life that align with your destiny.",
      shadowToWatch: "Shadow to Watch",
      shadowToWatchDesc: "Tendencies to be aware of that may hinder your growth.",
    },
    disclaimer: {
      reflectionOnly: "For reflection only × not divination or legal ruling.",
    },
    elementChart: {
      title: "Name Element Chart",
      subtitle: "Elemental Composition & Balance",
      dominant: "Dominant Element",
      personality: "Personality Reflection",
      balancingDhikr: "Balancing Dhikr",
      fire: {
        name: "Fire",
        personality: "Your name carries the energy of passion, courage, and bold action. You're naturally driven to lead, initiate, and transform.",
      },
      air: {
        name: "Air",
        personality: "Your name embodies intellectual clarity, communication, and adaptability. You're drawn to thinking, learning, and connecting ideas.",
      },
      water: {
        name: "Water",
        personality: "Your name resonates with emotional depth, empathy, and intuition. You naturally heal, nurture, and flow with life's rhythms.",
      },
      earth: {
        name: "Earth",
        personality: "Your name grounds you in practicality, reliability, and patience. You excel at building, organizing, and bringing stability.",
      },
      dhikr: {
        fire: "Yā Laṭīf (The Gentle) × to soften intensity",
        air: "Yā Ḥakīm (The Wise) × to ground thoughts",
        water: "Yā Nūr (The Light) × to illuminate emotions",
        earth: "Yā Fattāḥ (The Opener) × to invite flow",
      },
    },
    // Higher Resonance Insights
    higherResonance: {
      title: "Higher Resonance Insights",
      subtitle: "Divine Name & Color Energy in Your Name",
    },
    divineNameResonance: {
      title: "Divine Name Resonance",
      subtitle: "Your name carries the vibration of:",
      meaning: "Meaning",
      spiritualInfluence: "Spiritual Influence",
      reflection: "What this means for you",
      reflectionTip: "Reflection Tip",
    },
    colorResonance: {
      title: "Name Color Resonance",
      subtitle: "Your name's natural color energy is:",
      primary: "Primary Color",
      secondary: "Secondary Color",
      meaning: "Meaning",
      bestColors: "Best colors to wear / use",
      avoidColors: "Colors to avoid",
      tip: "Tip",
      tipIntro: "Use these colors for clothing, journaling, meditation, or personal spaces.",
    },
  },

  // Planetary Hours
  planetaryHours: {
    title: "Planetary Hours",
    currentHour: "Current Planetary Hour",
    planet: "Planet",
    startTime: "Start Time",
    endTime: "End Time",
    dayHours: "Day Hours",
    nightHours: "Night Hours",

    planets: {
      sun: "Sun",
      moon: "Moon",
      mars: "Mars",
      mercury: "Mercury",
      jupiter: "Jupiter",
      venus: "Venus",
      saturn: "Saturn",
    },
  },

  // Planetary Modules
  planetary: {
    // Planet of the Day
    planetOfDay: {
      title: "Planet of the Day",
      titleAr: "يوم الكوكب",
      subtitle: "Daily Energy",
      bestFor: "Best For",
      practiceLevel: "Practice Level",
      currentPosition: "Current Position",
      difficulty: {
        easy: "Easy",
        moderate: "Moderate",
        advanced: "Advanced",
      },
    },

    zikr: {
      recommendedZikr: "Recommended Zikr",
      footerNote: "Recite with presence of heart (hudur al-qalb) and intention (niyyah).",
      currentHourRuler: "Current Hour Ruler",
      transitPractice: "Transit Practice",
      planetOfTheDay: "Planet of the Day",
      hourContext: "{planet} Hour",
    },

    incense: {
      recommendedBakhoor: "Recommended Incense (Bakhoor)",
      footerNote: "A traditional aid for a reflective atmosphere — the real substance is in intention (niyyah) and dhikr.",
    },

    // Planetary Hour
    planetaryHour: {
      title: "Planetary Hour",
      titleAr: "ساعة الكوكب",
      subtitle: "Moment Alignment",
      currentHour: "Current Hour",
      nextHour: "Next Planet Hour",
      yourElement: "Your Element",
      hourElement: "Hour",
      remaining: "Remaining",
      day: "Day",
      night: "Night",
      hour: "Hour",
      loading: "Loading...",
      seeAllHours: "See All Hours",
      dayHours: "Day Hours",
      nightHours: "Night Hours",
      sunrise: "sunrise",
    },

    // Planet names for display
    planets: {
      Sun: "Sun",
      Moon: "Moon",
      Mars: "Mars",
      Mercury: "Mercury",
      Jupiter: "Jupiter",
      Venus: "Venus",
      Saturn: "Saturn",
    },

    // Element names for display
    elements: {
      fire: "Fire",
      water: "Water",
      air: "Air",
      earth: "Earth",
    },

    // Arabic planet names
    planetsAr: {
      Sun: "الشمس",
      Moon: "القمر",
      Mars: "المريخ",
      Mercury: "عطارد",
      Jupiter: "المشتري",
      Venus: "الزهرة",
      Saturn: "زحل",
    },

    // Arabic element names
    elementsAr: {
      fire: "نار",
      water: "ماء",
      air: "هواء",
      earth: "تراب",
    },

    // Arabic zodiac names
    zodiacAr: {
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

    // Planet Transit
    planetTransit: {
      title: "Planet Transits",
      titleAr: "العبور الكوكبي",
      subtitle: "Celestial Movement",
      skyNow: "Sky Now",
      longTerm: "Long-term",
      in: "In",
      seeYourImpact: "See your impact",
      livePositions: "Live positions",
      loadingEphemeris: "Loading ephemeris data...",
      tropical: "Tropical",
      sidereal: "Sidereal",
      carousel: "Carousel",
      seeAll: "See All",
      updated: "Updated",
      planet: "Planet",
      sign: "Sign",
      elementPlanet: "{element} Planet",
      elementSign: "{element} Sign",
      viewDetails: "View Details",
      hideDetails: "Hide Details",
      dignitySection: "Essential Dignity",
      rulesSign: "Rules",
      exaltedAt: "Exalted at",
      inFallIn: "In fall in",
      inDetrimentIn: "In detriment in",
      currentlyIn: "Currently in",
      noNotableDignity: "No notable essential dignity at this position",
      overallCondition: "Overall Condition",
      dignityScore: "Score",
      domicileOf: "Domicile of",
      exaltationOf: "Exaltation of",
    },

    // Days of Week
    days: {
      sunday: "Sunday",
      monday: "Monday",
      tuesday: "Tuesday",
      wednesday: "Wednesday",
      thursday: "Thursday",
      friday: "Friday",
      saturday: "Saturday",
    },

    // Zodiac Signs
    zodiac: {
      aries: "Aries",
      taurus: "Taurus",
      gemini: "Gemini",
      cancer: "Cancer",
      leo: "Leo",
      virgo: "Virgo",
      libra: "Libra",
      scorpio: "Scorpio",
      sagittarius: "Sagittarius",
      capricorn: "Capricorn",
      aquarius: "Aquarius",
      pisces: "Pisces",
    },

    // Ilm Nujum Badge
    ilmNujum: {
      auspicious: "Auspicious",
      auspiciousAr: "سعيد",
      proceed: "Proceed Mindfully",
      proceedAr: "تأنَّ",
      neutral: "Neutral Window",
      neutralAr: "وقت محايد",
      cautious: "Cautious",
      cautiousAr: "احترس",
      inauspicious: "Inauspicious",
      inauspiciousAr: "نحس",
    },

    // Essential Dignities (Al-Karāmāt)
    dignities: {
      // Dignity types
      sharaf: "Exalted",
      bayt: "Domicile",
      muthallatha: "Triplicity",
      hadd: "Terms",
      wajh: "Face",
      gharib: "Peregrine",
      hubut: "Fall",
      darr: "Detriment",
      // Condition tiers
      musharraf: "Exalted",
      qawi: "Strong",
      said: "Favourable",
      mutadil: "Moderate",
      nahs: "Challenging",
      daif: "Weak",
      mubtala: "Afflicted",
      // UI labels
      dignityLabel: "Essential Dignity",
      conditionLabel: "Condition",
      retrogradeNote: "Retrograde weakens dignity (−2)",
      scoreLabel: "Dignity Score",
      breakdown: "Dignity Breakdown",
      exaltedIn: "exalted in",
      domicileIn: "domicile in",
      fallIn: "in fall in",
      detrimentIn: "in detriment in",
      triplicityIn: "triplicity ruler of",
      termsIn: "in own terms in",
      faceIn: "in own face in",
      peregrineIn: "peregrine in",
      highlyFavourable: "Highly favourable",
      favourablePosition: "Favourable position",
      neutralPosition: "Neutral position",
      difficultPosition: "Difficult position",
      veryWeak: "Very weak position",
    },

    // Simplified 3-tier status (user-facing)
    simplifiedStatus: {
      // Tier labels
      said: "Auspicious",
      mutadil: "Moderate",
      mahdhur: "Cautious",
      // Arabic tier labels
      saidAr: "سَعِيد",
      mutadilAr: "مُعْتَدِل",
      mahdhurAr: "مَحْذُور",
      // Practice guidance
      saidGuidance: "Excellent for prayers, zikr, and new intentions",
      mutadilGuidance: "Suitable for regular practice and reflection",
      mahdhurGuidance: "Focus on istighfar and protective adhkār",
      // Reason templates
      exaltedIn: "{planet} is exalted in {sign}",
      strongIn: "{planet} is strong in {sign}",
      atHomeIn: "{planet} is at home in {sign}",
      comfortableIn: "{planet} is comfortable in {sign}",
      neutralIn: "{planet} is neutral in {sign}",
      weakenedIn: "{planet} is weakened in {sign}",
      // Labels
      statusLabel: "Practice Status",
      viewDetails: "View Details",
      // Practice hints
      practiceHint: "Practice Hint",
      appTeaser: "Personalized guidance in the Asrār app",
      comingSoon: "Coming Soon",
    },

    // Element descriptions
    elementDescriptions: {
      fire: "Passionate & energizing",
      water: "Flowing & emotional",
      air: "Intellectual & communicative",
      earth: "Grounded & stable",
    },

    // Element activities
    elementBestFor: {
      fire: {
        leadership: "Leadership",
        starting: "Starting projects",
        physical: "Physical activities",
        bold: "Bold decisions",
      },
      water: {
        healing: "Emotional healing",
        relationships: "Relationships",
        intuitive: "Intuitive work",
        creative: "Creative flow",
      },
      air: {
        learning: "Learning",
        communication: "Communication",
        planning: "Planning",
        social: "Social connections",
      },
      earth: {
        building: "Building foundations",
        practical: "Practical tasks",
        financial: "Financial matters",
        health: "Physical health",
      },
    },
  },

  // Spiritual Stations
  stations: {
    1: "Badʾ (البدء) - Beginning",
    2: "Tawāfuq (التوافق) - Harmony",
    3: "Ibdāʿ (الإبداع) - Creativity",
    4: "Istiqrār (الاستقرار) - Stability",
    5: "Taḥawwul (التحول) - Transformation",
    6: "Khidma (الخدمة) - Service",
    7: "Ḥikma (الحكمة) - Divine Wisdom",
    8: "Qudra (القدرة) - Divine Power",
    9: "Kamāl (الكمال) - Completion",
    11: "Spiritual Illumination",
    22: "Master Builder",
    33: "Master Teacher",
  },

  // Ilm Huruf Panel
  ilmHuruf: {
    // Title and subtitle
    title: "ʿIlm al-Ḥurūf - Practical Life Guidance",
    subtitle: "Choose a guidance mode and discover insights tailored to your inquiry",
    
    // Mode Buttons
    weeklyGuidance: "Weekly Guidance",
    nameDestiny: "Name Destiny",
    compatibility: "Compatibility",
    lifePath: "Life Path",
    divineTiming: "Divine Timing",
    
    // Titles
    generateWeeklyGuidance: "Generate Your Weekly Guidance",
    discoverNameDestiny: "Discover Your Name Destiny",
    analyzeTwoSouls: "Analyze Two Souls",
    calculateLifePath: "Calculate Your Life Path",
    currentPlanetaryInfluence: "Current Planetary Influence",
    
    // Descriptions
    weeklyGuidanceDesc: "Reflective guidance mapped to planetary influences",
    nameDestinyDesc: "Discover the spiritual essence encoded in your name",
    compatibilityDesc: "Explore the harmony and potential between two individuals",
    lifePathDesc: "Understand the numerological significance of your birth path",
    divineTimingDesc: "Align your actions with celestial timings",
    
    // Labels
    nameLatin: "Name - Latin (English/French)",
    nameArabic: "Name - Arabic",
    yourNameLatin: "Your Name - Latin (English/French)",
    yourNameArabic: "Your Name - Arabic",
    firstPersonLatin: "First Person - Latin (English/French)",
    firstPersonArabic: "First Person - Arabic",
    secondPersonLatin: "Second Person - Latin (English/French)",
    secondPersonArabic: "Second Person - Arabic",
    motherNameLatin: "Mother's Name - Latin (optional)",
    motherNameArabic: "Mother's Name - Arabic (optional)",
    birthDate: "Birth Date",
    birthDateOptional: "Birth Date (Optional - for anchor date)",
    birthDateUsage: "Used to calculate your personal cycles. Defaults to today if not provided.",
    location: "Location (optional)",
    optional: "Optional",
    optionalForRestSignal: "Optional - for Rest Signal",
    restSignalNote: "Enables personalized Rest Signal detection",
    
    // Mother's Name specific
    addMotherName: "Add Mother's Name (optional)",
    motherNameOptional: "Mother's Name (optional)",
    motherNameRequired: "Mother's Name (Required)",
    motherNameRequiredExplanation: "Life Path is personal to YOU. Your mother's name ensures this reading reflects your unique journey, not just a general pattern for everyone with your name.",
    timingRequiredExplanation: "Divine Timing is calculated for YOUR specific planetary influences. Your mother's name personalizes these calculations to your unique spiritual blueprint.",
    clearMotherName: "Clear",
    latinAutoTransliterates: "Latin (English/French) - Auto-transliterates",
    arabicDirectInput: "Arabic - Direct input",
    whyMotherRequired: "Why is mother's name required?",
    
    // Placeholders
    namePlaceholderEn: "e.g., Fatima, Ibrahima, Amadou",
    motherNamePlaceholderEn: "e.g., Fatima, Khadija, Aisha",
    namePlaceholderAr: "محمد",
    motherNamePlaceholderAr: "فاطمة",
    
    // Name autocomplete
    nameLatinLabel: "Name (Latin script)",
    nameHelperText: "Type your name in Latin letters - we'll show the Arabic equivalent",
    nameHelperTextSuggestions: "Start typing to see Arabic suggestions",
    selectArabicName: "Select Arabic name",
    noMatchesFound: "No matches found",
    typeToSearch: "Type to search names...",
    
    // Autofill toggle
    autofillToggle: {
      label: "Use my profile information",
      description: "Toggle off to calculate for family or friends"
    },
    
    // Messages
    autoTransliterate: "Auto-transliterates to Arabic • Supports EN/FR names",
    confidence: "Confidence",
    showKeyboard: "Show Keyboard",
    hideKeyboard: "Hide Keyboard",
    noneInYourName: "None in your name",
    
    // Buttons
    analyzeButton: "Analyze",
    analysisError: "Analysis Error",
    
    // Weekly Results
    yourSpiritualProfile: "Your Spiritual Profile",
    ruh: "Rūḥ",
    element: "Element",
    currentHarmony: "Current Harmony",
    allForcesAligned: "All forces aligned×excellent flow",
    mixedSignals: "Mixed signals×proceed mindfully",
    challengingEnergies: "Challenging energies×patience needed",
    dominantForce: "Dominant Force",
    weekAtAGlance: "Week at a Glance",
    peakDayThisWeek: "Peak Day This Week",
    bestForInitiatives: "Best for important initiatives",
    focusDay: "Focus Day",
    forDeepWorkAndPlanning: "For deep work & planning",
    harmony: "Harmony",
    planet: "Planet",
    energyReturnSpeedsThisWeek: "Energy Return Speeds This Week",
    whenActionsManifestResults: "When actions manifest their results (classical concept: Irtiṭāb)",
    sameDay: "Same day",
    fewHours: "Few hours",
    twoDays: "2-3 days",
    oneToTwoWeeks: "1-2 weeks",
    deepRestNeeded: "Deep Rest Needed",
    restSignal: "Rest Signal (Infisāl)",
    criticalLowEnergy: "Critical low energy - honor this healing signal from your body and spirit.",
    lowHarmonyPause: "Low harmony + {planet} energy = Time to pause, not push.",
    restPractices: "Rest Practices (choose one):",
    betterDaysThisWeek: "Better Days This Week:",
    rescheduleImportantTasks: "Reschedule important tasks to these high-harmony days for better outcomes.",
    classicalWisdom: "Classical wisdom:",
    stillnessBeforeMotion: "Al-sukūn qabl al-ḥaraka",
    stillnessExplanation: "(Stillness before motion brings blessed action)",
    leadership: "Leadership & Vitality",
    emotions: "Emotions & Intuition",
    action: "Action & Courage",
    communication: "Communication & Learning",
    expansion: "Expansion & Wisdom",
    love: "Love & Harmony",
    structure: "Structure & Discipline",
    ruhPhase: "Rūḥ Phase",
    phase: "Phase",
    energyBand: "Energy Band",
    allTipsForTheDay: "All Tips for the Day",
    planMindfully: "Plan mindfully",
    
    // Energy return speed badges
    instant: "INSTANT",
    quick: "QUICK",
    gradual: "GRADUAL",
    delayed: "DELAYED",
    restSignalBadge: "REST SIGNAL",
    deepRest: "DEEP REST",
    
    // Speed descriptions (lowercase for display)
    instantLower: "instant",
    quickLower: "quick",
    gradualLower: "gradual",
    delayedLower: "delayed",
    sameDayParens: "(same day)",
    fewHoursParens: "(few hours)",
    twoDaysParens: "(2-3 days)",
    oneToTwoWeeksParens: "(1-2 weeks)",
    
    // Footer message
    reflectiveGuidance: "Reflective guidance to plan your week. Use your own judgment. This is a rhythm and planning helper, not a prediction or medical/financial advice.",
    
    // Error messages
    unableToGenerateWeekly: "Unable to generate weekly forecast. Please enter a valid Arabic name.",
    
    // Day badges
    best: "Best",
    gentle: "Gentle",
    focus: "Focus",
    
    // Day details
    yourGuidanceForThisDay: "Your Guidance for This Day",
    energyReturnWisdom: "Energy Return Wisdom",
    returnSpeed: "Return Speed:",
    todaysPractice: "Today's Practice:",
    classicalTeaching: "Classical teaching (Lesson 25):",
    classicalQuote: "Man zaraʿa khayran ḥaṣada khayran",
    classicalMeaning: "(Who plants good, harvests good) × The timing of harvest depends on the seed and season.",
    optimalSequence: "Optimal Sequence for {day}",
    timeWindows: "Time Windows",
  },
  
  // Balance Meter
  balanceMeter: {
    yourBalanceToday: "Your Balance Today",
    balance: "Balance",
    conflict: "Conflict",
    moderate: "Moderate",
    harmony: "Harmony",
    tooMuch: "Too much:",
    needMore: "Need more:",
    quickFix: "Quick Fix",
    severeConflict: "Severe Conflict",
    mild: "Mild",
    startTimer: "Start {duration}-Min Timer",
    focusOnPractice: "Focus on your practice...",
    stopTimer: "Stop Timer",
    recheckBalance: "Recheck balance: 2 hours after completing Quick Fix",
    scoreUpdates: "Score updates: Midnight (new planetary day begins)",
    validFor: "Valid for: Today only - each day brings new elemental balance",
    whyThisScore: "Why this score:",
    whatDoesScoreMean: "What does my score mean?",
    scoreGuide: "Score Guide",
    harmonyRange: "70-100: Harmony",
    harmonyDesc: "Excellent flow. Minor tweaks only.",
    moderateRange: "40-69: Moderate",
    moderateDesc: "Workable balance. Quick fixes help.",
    conflictRange: "0-39: Conflict",
    conflictDesc: "Challenging day. Deep rebalancing needed.",
    basedOnMizan: "Based on Mīzān (Scale) concept from Imam al-Būnī's ʿIlm al-Ḥurūf tradition",
  },

  // Footer
  footer: {
    tagline: "Islamic Numerology & Spiritual Calculations",
    rights: "All rights reserved",
    about: "About",
    contact: "Contact",
    privacy: "Privacy Policy",
  },

  // SPIRITUAL STATIONS - Detailed descriptions
  spiritualStations: {
    1: {
      name: "Tawḥīd",
      meaning: "Divine Unity",
      quality: "Leadership, Independence, Originality",
      shadow: "Pride, Isolation, Rigidity",
      practice: "Meditate on divine oneness. Reflect: 'All power belongs to the One.'",
      verse: "Say: He is Allah, the One (112:1)",
      practical: "Start new projects, take initiative, practice self-reliance. Best for solo work."
    },
    2: {
      name: "Muʿāwana",
      meaning: "Divine Assistance",
      quality: "Cooperation, Balance, Diplomacy",
      shadow: "Indecision, Dependency, Conflict Avoidance",
      practice: "Seek harmony in relationships. Reflect: 'Two are better than one.'",
      verse: "Help one another in righteousness (5:2)",
      practical: "Build partnerships, mediate conflicts, create balance. Good for teamwork."
    },
    3: {
      name: "Ibdāʿ",
      meaning: "Creative Expression",
      quality: "Creativity, Communication, Joy",
      shadow: "Scattered Energy, Superficiality, Gossip",
      practice: "Express divine inspiration. Reflect: 'Beauty manifests through me.'",
      verse: "Read in the name of your Lord who created (96:1)",
      practical: "Create art, write, speak publicly, teach. Channel creative energy."
    },
    4: {
      name: "Istiqrār",
      meaning: "Stability",
      quality: "Foundation, Order, Discipline",
      shadow: "Rigidity, Limitation, Stubbornness",
      practice: "Build solid foundations. Reflect: 'Patience is the key to paradise.'",
      verse: "Allah loves those who are firm and steadfast (61:4)",
      practical: "Organize, plan, build systems, establish routines. Create structure."
    },
    5: {
      name: "Taḥawwul",
      meaning: "Transformation",
      quality: "Freedom, Adventure, Change",
      shadow: "Restlessness, Irresponsibility, Addiction",
      practice: "Embrace sacred change. Reflect: 'All changes except the Face of God.'",
      verse: "Allah does not change the condition of a people until they change themselves (13:11)",
      practical: "Travel, learn new skills, adapt to change. Seek variety and experience."
    },
    6: {
      name: "Khidma",
      meaning: "Service",
      quality: "Responsibility, Care, Harmony",
      shadow: "Martyrdom, Meddling, Perfectionism",
      practice: "Serve with love. Reflect: 'The best are those who benefit others.'",
      verse: "The best among you are those who feed others (Ahmad)",
      practical: "Help family, care for others, create beauty. Focus on home and community."
    },
    7: {
      name: "Ḥikma",
      meaning: "Divine Wisdom",
      quality: "Analysis, Introspection, Spirituality",
      shadow: "Isolation, Cynicism, Over-analysis",
      practice: "Seek inner knowledge. Reflect: 'Know yourself to know your Lord.'",
      verse: "He grants wisdom to whom He wills (2:269)",
      practical: "Study, research, meditate, retreat. Deepen spiritual practice."
    },
    8: {
      name: "Qudra",
      meaning: "Divine Power",
      quality: "Abundance, Authority, Achievement",
      shadow: "Greed, Domination, Materialism",
      practice: "Steward divine abundance. Reflect: 'I am a channel for divine provision.'",
      verse: "Whatever you spend, He will replace it (34:39)",
      practical: "Manage resources, lead organizations, create wealth. Build influence."
    },
    9: {
      name: "Kamāl",
      meaning: "Completion",
      quality: "Compassion, Wisdom, Universal Love",
      shadow: "Martyrdom, Emotional Manipulation, Escapism",
      practice: "Serve humanity. Reflect: 'I release with love and trust.'",
      verse: "Today I have perfected your religion for you (5:3)",
      practical: "Complete projects, forgive, let go. Teach and mentor others."
    },
    11: {
      name: "Spiritual Illumination",
      meaning: "Spiritual awakening",
      quality: "Intuition, Inspiration, Vision",
      shadow: "Over-idealism, Disconnection",
      practice: "Channel higher inspiration",
      verse: "Light upon light",
      practical: "Teach, inspire, guide with spiritual wisdom"
    },
    22: {
      name: "Master Builder",
      meaning: "Manifestation",
      quality: "Building, Practical Vision, Impact",
      shadow: "Stress, Unrealistic Expectations",
      practice: "Build lasting structures",
      verse: "Build with wisdom",
      practical: "Create systems, organizations, lasting legacy"
    },
    33: {
      name: "Master Teacher",
      meaning: "Universal compassion",
      quality: "Healing, Teaching, Service",
      shadow: "Overwhelm, Self-sacrifice",
      practice: "Teach and heal with love",
      verse: "Guide with compassion",
      practical: "Mentor, heal, serve humanity"
    }
  },

  // GEOMETRY - Letter shapes
  geometryKeywords: {
    vertical: ["Aspiration", "Spiritual Reach", "Goals", "Growth"],
    round: ["Compassion", "Wholeness", "Cycles", "Embrace"],
    flat: ["Stability", "Grounding", "Foundation", "Balance"],
    angular: ["Decision", "Sharpness", "Clarity", "Transformation"]
  },
  
  geometryProfiles: {
    verticalDominant: "Strong upward energy. You naturally aspire to ideals and higher aims. Spiritual seeker with aspirational drive.",
    roundDominant: "Embracing, nurturing energy. You contain and complete cycles with emotional warmth. Natural compassion capacity.",
    flatDominant: "Grounded, stable foundation. You create horizontal expansion with practical stability. Reliable, earth-connected energy.",
    angularDominant: "Sharp, decisive energy. You cut through complexity with clarity and transformation. Direct, focused approach.",
    balanced: "Balanced geometric energy. You have versatility of expression, able to be aspirational, nurturing, grounded, or decisive."
  },

  // INHERITANCE - Mother's element analysis
  inheritanceSame: "You express and inherit the same {element} energy. Strong, coherent elemental identity with deep roots.",
  
  inheritanceCompatible: {
    fireAir: "You express with Fire but have Air roots. Your Air foundation fuels your Fire action×like wind fanning flames.",
    airFire: "You express with Air but have Fire roots. Your Fire foundation energizes your Air movement×like heat creating wind.",
    waterEarth: "You express with Water but have Earth roots. Your Earth foundation contains your Water flow×like a riverbed holding water.",
    earthWater: "You express with Earth but have Water roots. Your Water foundation nourishes your Earth structure×like rain feeding soil."
  },
  
  inheritanceOpposing: {
    fireWater: "You express with Fire but have Water roots. This creates dynamic tension×passion balanced by emotional depth.",
    waterFire: "You express with Water but have Fire roots. This creates dynamic tension×emotional depth fueled by inner passion.",
    airEarth: "You express with Air but have Earth roots. This creates dynamic tension×movement balanced by stability.",
    earthAir: "You express with Earth but have Air roots. This creates dynamic tension×structure built on freedom."
  },

  // PLANETARY QUALITIES
  planetaryQualities: {
    Sun: {
      quality: "Leadership, Authority, Success",
      favorable: ["Starting new ventures", "Seeking promotions", "Public speaking", "Creative projects"],
      avoid: ["Ego-driven decisions", "Confrontations with authority"]
    },
    Moon: {
      quality: "Emotion, Intuition, Home",
      favorable: ["Family matters", "Emotional healing", "Dream work", "Nurturing activities"],
      avoid: ["Major decisions (emotions clouded)", "Legal matters"]
    },
    Mercury: {
      quality: "Communication, Learning, Commerce",
      favorable: ["Study", "Writing", "Business deals", "Social networking", "Short travel"],
      avoid: ["Signing contracts if Mercury retrograde", "Gossip"]
    },
    Venus: {
      quality: "Love, Beauty, Harmony",
      favorable: ["Romance", "Art", "Socializing", "Beautification", "Peacemaking"],
      avoid: ["Harsh criticism", "Conflict"]
    },
    Mars: {
      quality: "Action, Courage, Competition",
      favorable: ["Physical exercise", "Assertive action", "Courage needed", "Surgery"],
      avoid: ["Anger", "Impulsive decisions", "Starting conflicts"]
    },
    Jupiter: {
      quality: "Expansion, Wisdom, Abundance",
      favorable: ["Legal matters", "Education", "Spiritual practice", "Long-term planning", "Generosity"],
      avoid: ["Excess", "Overconfidence"]
    },
    Saturn: {
      quality: "Structure, Discipline, Karma",
      favorable: ["Hard work", "Long-term commitments", "Authority relations", "Real estate matters"],
      avoid: ["Fun activities", "Expecting quick results"]
    }
  },

  // DAILY DHIKR
  dailyDhikr: {
    Fire: {
      benefit: "Strengthens will and courage",
      time: "After Fajr"
    },
    Water: {
      benefit: "Brings ease in difficulty, softens hearts",
      time: "After Maghrib"
    },
    Air: {
      benefit: "Increases knowledge and clarity",
      time: "After ʿIshā"
    },
    Earth: {
      benefit: "Grants patience and steadfastness",
      time: "Before sleep"
    }
  },

  // PERSONAL YEAR THEMES
  personalYearThemes: {
    1: "New beginnings, planting seeds, independence",
    2: "Partnerships, patience, cooperation",
    3: "Creative expression, joy, social expansion",
    4: "Building foundations, hard work, stability",
    5: "Change, freedom, adventure, unexpected events",
    6: "Responsibility, service, family matters, love",
    7: "Spiritual growth, introspection, study, rest",
    8: "Achievement, power, financial matters, recognition",
    9: "Completion, release, humanitarianism, endings leading to new beginnings"
  },

  // COMPATIBILITY - Additional strings
  compatibilityAnalysis: {
    soulJourney: "Your soul's journey passes through the station of",
    destinyInterpretation: "Your life destiny ({destiny}) calls you to {quality}. Your soul deeply urges {soulQuality}, while outwardly you express {personalityQuality}. Integration comes when you align all three dimensions.",
    uniqueDynamic: "Unique Dynamic",
    eachRelationshipTeaches: "Each relationship teaches unique lessons",
    opportunityForGrowth: "Opportunity for growth",
    learningThroughDifferences: "Learning through differences",
    balanceIndividuality: "Balancing individuality with union"
  },

  // WEEKLY RESULTS COMPONENT
  weeklyResults: {
    unableToGenerate: "Unable to generate weekly forecast. Please enter a valid Arabic name.",
    badges: {
      best: "Best",
      gentle: "Gentle",
      focus: "Focus"
    },
    clickIndicator: "▼",
    timeWindows: "Time Windows",
    morning: "Morning",
    midday: "Midday",
    afternoon: "Afternoon",
    evening: "Evening",
    closeDetails: "Close details",
    energyType: "Energy Type",
    bestFor: "Best for",
    avoid: "Avoid",
    planetalPhase: "Planetal Phase",
    peakClarity: "Peak Clarity",
    socialEnergy: "Social Energy",
    endurancePhase: "Endurance Phase",
    reviewTime: "Review Time",
    classicalTeaching: "Classical teaching (Lesson",
    forEverythingTime: "For everything there is a time",
    successFromRightAction: "Success comes from right action at the right time",
    allTips: "All tips",
    closesIn: "Closes in",
    nextWindow: "Next window",
    peakPerformanceDay: "Peak Performance Day",
    steadyProgressDay: "Steady Progress Day",
    restReflectionDay: "Rest & Reflection Day",
    overallEnergy: "Overall Energy",
    thisMonthFlow: "This Month's Flow"
  },

  // DESTINY RESULTS COMPONENT
  destinyResults: {
    unableToCalculate: "Unable to calculate destiny. Please enter a name.",
    loadingVerse: "Loading Quranic verse...",
    verseError: "Unable to load verse at the moment. Please refresh or visit Quran.com directly.",
    arabicText: "Arabic Text",
    englishTranslation: "English Translation",
    readFullVerse: "Read full verse on Quran.com",
    ayahOf: "Ayah {ayah} of {total}",
    noVerseData: "No verse data available for this resonance.",
    kabir: "Kabīr",
    hadath: "Ḥadath",
    grandTotal: "Grand Total",
    element: "Element",
    strengths: "Strengths",
    growthAreas: "Growth Areas",
    yourNumbers: "Your Numbers",
    corePersonality: "Core Personality",
    innerDesires: "Inner Desires",
    howOthersSee: "How Others See You",
    lifePurpose: "Life Purpose",
    lifePath: "Life Path",
    soulUrge: "Soul Urge",
    personality: "Personality",
    destiny: "Destiny",
    coreTalents: "Your core talents & natural strengths. The abilities you were born with.",
    whatMakesHappy: "What truly makes you happy. Your deepest desires & inner fulfillment.",
    impressionYouGive: "The impression you give. How people see & experience you at first.",
    ultimateGoal: "Your life purpose & what you're meant to accomplish. Your ultimate goal.",
    specialNumbers: "Special Numbers & Lessons",
    lessonsToLearn: "Lessons to Learn",
    lessonsDescription: "These numbers represent lessons your soul wants to learn in this life. They're not obstacles×they're opportunities for growth.",
    blessedNumbers: "Blessed Numbers",
    blessedDescription: "These are powerful numbers linked to spiritual tradition. They bring special blessings and spiritual protection to your life."
  },

  // COMPATIBILITY RESULTS COMPONENT
  compatibilityResults: {
    unableToCalculate: "Unable to calculate compatibility. Please ensure both names are entered.",
    overallCompatibility: "Overall Compatibility",
    threeAnalysisMethods: "Three Analysis Methods",
    spiritualDestiny: "Spiritual Destiny",
    elementalTemperament: "Elemental Temperament",
    planetaryCosmic: "Planetary Cosmic",
    remainder: "Remainder",
    sharedElement: "Element",
    recommendations: "Recommendations",
    strengths: "Strengths",
    challenges: "Challenges",
    // Letter Chemistry Feature
    letterChemistry: "Letter Chemistry",
    letterChemistryArabic: "Zawāj al-Ḥurūf",
    letterChemistryDesc: "Shows the elemental temperament between the two names. Each letter carries Fire, Air, Water, or Earth energy × their blend forms the emotional and energetic balance of your connection.",
    combinedHarmony: "Combined Harmony",
    combinedHarmonyExplain: "Higher means smoother elemental flow between you",
    balancingDhikr: "Balancing Dhikr",
    balancingDhikrContext: "These dhikr help balance the dominant elements so both can harmonize.",
    temperament: "Temperament",
    for: "For",
    // Element names
    fire: "Fire",
    air: "Air",
    water: "Water",
    earth: "Earth",
    // Element temperament descriptions
    fireTemperament: "Fire Temperament × passionate, creative, bold",
    airTemperament: "Air Temperament × quick, intellectual, communicative",
    waterTemperament: "Water Temperament × calm, emotional, intuitive",
    earthTemperament: "Earth Temperament × stable, practical, grounded",
    // Balance Advice for Element Pairs
    balanceAdvice: {
      fireFire: "Practice calm dhikr together, avoid rushing decisions.",
      fireAir: "Creative synergy! Good for projects and ideas, but take cool-down time together.",
      fireWater: "Balance passion with patience. Cool flames with understanding.",
      fireEarth: "Combine vision with planning. Let fire inspire, earth execute.",
      airAir: "Express ideas clearly, but ground them in action.",
      airWater: "Express feelings clearly through words or art. Write or sing together.",
      airEarth: "Ideas meet practicality. Discuss, then build together.",
      waterWater: "Nurture each other's emotions. Create safe, peaceful spaces.",
      waterEarth: "Nurture creative rest together. Cook, garden, or create beauty.",
      earthEarth: "Build stability together, but leave room for spontaneity."
    },
    // Dhikr Effects
    dhikrEffects: {
      fireEffect: "Cools intensity, brings gentleness",
      airEffect: "Focuses the mind, brings wisdom",
      waterEffect: "Lifts emotion into clarity",
      earthEffect: "Softens rigidity, opens possibilities"
    },
    
    // UI Labels for Four-Layer Compatibility
    accuracy: "Accuracy",
    precision: "Accuracy",
    weight: "weight",
    motherOf: "Mother of",
    
    // Four-Layer UI Text
    whatThisMeans: "💡 What This Means",
    showCalculationDetails: "Show Calculation Details",
    understandingTerms: "Understanding the Terms",
    hoverToLearnMore: "Hover over ℹ️ icons to learn more",
    fourLayersTitle: "Four Layers of Compatibility",
    inDailyLife: "🏠 In Daily Life:",
    challenge: "⚠️ Challenge:",
    tip: "💡 Tip:",
    mostImportantForMarriage: "💜 MOST IMPORTANT FOR MARRIAGE",
    dailyImpact: "🏠 Daily Impact:",
    innerTemperament: "💡 Inner Temperament (الطبع الباطن)",
    cosmicTemperament: "💡 Cosmic Temperament (الطبع الفلكي)",
    harmony: "Harmony"
  },

  // ============================================================================
  // FOUR-LAYER COMPATIBILITY SYSTEM
  // ============================================================================
  
  fourLayerCompatibility: {
    // Form Header
    title: "Four-Layer Compatibility Analysis",
    titleArabic: "تحليل التوافق الرباعي",
    subtitle: "The complete traditional West African method",
    description: "This analysis examines both your conscious personalities (from your names) and your inherited emotional patterns (from your mothers' names) to give the most accurate compatibility reading.",
    
    // Input Fields
    person1Name: "First Person's Name",
    person2Name: "Second Person's Name",
    person1MotherName: "First Person's Mother's Name",
    person2MotherName: "Second Person's Mother's Name",
    optional: "(Optional for deeper analysis)",
    
    // Tooltips
    nameTooltip: "💡 Your name reveals your conscious self × how you show up in the world, your active personality, and how others see you.",
    motherNameTooltip: `💡 Your mother's name reveals your emotional blueprint × the subconscious patterns, feelings, and needs you inherited. This is the foundation beneath your personality.

📊 Analysis depth:
• With names only: 70% accuracy
• With mothers' names: 90-95% accuracy

🌍 This is the traditional method preserved by West African Islamic scholars for serious marriage compatibility.

🔒 Privacy: Mother's names are used only for calculation and never stored.`,
    
    // Analysis Mode Selection
    analysisMode: "Analysis Mode",
    quickAnalysis: "Quick Analysis (Names Only)",
    quickAnalysisDesc: "See how your conscious personalities interact in daily life. Good for initial curiosity.",
    quickAccuracy: "70-75% accuracy",
    completeAnalysis: "Complete Analysis (Names + Mothers) ⭐ Recommended",
    completeAnalysisDesc: "The traditional West African method. Reveals both surface chemistry and deep emotional compatibility. Essential for serious relationships.",
    completeAccuracy: "90-95% accuracy",
    
    // Overall Score Section
    overallCompatibilityTitle: "Overall Compatibility",
    overallCompatibilityArabic: "التوافق الشامل",
    overallExplanation: "This score is calculated from all four layers of your connection, weighted to prioritize emotional foundation (most important for long-term harmony).",
    
    // Score Interpretations
    excellent: "EXCELLENT",
    excellentRange: "85-100%",
    excellentMeaning: "Outstanding compatibility on both surface and soul levels. Your energies complement each other beautifully.",
    
    veryGood: "VERY GOOD",
    veryGoodRange: "70-84%",
    veryGoodMeaning: "Strong compatibility with minor areas to nurture. This connection has great potential with mutual effort.",
    
    good: "GOOD",
    goodRange: "55-69%",
    goodMeaning: "Moderate compatibility. You can build a harmonious relationship with understanding, communication, and compromise.",
    
    challenging: "CHALLENGING",
    challengingRange: "40-54%",
    challengingMeaning: "Significant differences in energy and approach. This relationship requires substantial effort, patience, and mutual growth.",
    
    difficult: "DIFFICULT",
    difficultRange: "0-39%",
    difficultMeaning: "Major elemental conflicts. While not impossible, this pairing faces fundamental challenges that require deep commitment to overcome.",
    
    // Layer Headers
    layer1Title: "Daily Life Compatibility",
    layer1TitleArabic: "التوافق اليومي",
    layer1Subtitle: "Surface Dynamic (الديناميكية الظاهرة - al-Dīnāmīkīya al-Ẓāhira)",
    
    layer2Title: "Emotional Foundation",
    layer2TitleArabic: "الأساس العاطفي",
    layer2Subtitle: "Deep Dynamic (الديناميكية العميقة - al-Dīnāmīkīya al-ʿAmīqa)",
    layer2Badge: "🌟 MOST IMPORTANT FOR LONG-TERM HARMONY",
    
    layer3Title: "Person 1's Effect on Person 2's Emotional Core",
    layer4Title: "Person 2's Effect on Person 1's Emotional Core",
    crossDynamicsTitle: "Cross-Influence Dynamics",
    crossDynamicsArabic: "الديناميكيات المتقاطعة",
    crossDynamicsExplanation: "These layers show how each person's conscious energy affects the other's emotional core. Think of it as: 'How does your personality land on their heart?'",
    
    // What It Means Sections
    whatItMeasures: "📖 What This Measures:",
    basedOn: "🔍 Based On:",
    whyItMatters: "💡 Why It Matters:",
    
    // Layer 1 Explanations
    layer1WhatItMeans: "How your conscious personalities interact day-to-day. This is the energy you actively bring to conversations, decisions, and shared activities. It's what people see when they look at your relationship.",
    layer1BasedOn: "The elemental temperaments from both of your names (calculated using Ḥadath ÷ 4 method)",
    layer1WhyItMatters: "This determines your communication style, conflict resolution, and whether you naturally 'get' each other in everyday moments. High scores here mean easy, natural flow in daily life.",
    
    // Layer 2 Explanations
    layer2WhatItMeans: "The subconscious emotional compatibility inherited from your mothers. This is the 'feeling of home' you create together×the unspoken comfort, safety, and deep bond that either naturally exists or must be built.",
    layer2BasedOn: "The elemental temperaments from both of your mothers' names (calculated using Ḥadath ÷ 4 method)",
    layer2WhyItMatters: `This is THE most important layer for marriage and long-term partnership. Here's why:

• Your mother's emotional patterns shaped how you give and receive love
• This layer determines if you feel "safe" together emotionally
• High scores here mean you intuitively understand each other's needs
• Low scores mean you'll need conscious work to meet each other's emotional needs

Many couples with great surface chemistry struggle because this layer isn't harmonious. Knowing this in advance helps you prepare.`,
    
    layer2ExampleTitle: "🎭 Real-World Example:",
    layer2Example: `Ahmad and Layla have great daily chemistry (Fire + Air = 85%).

But when stress hits:
• Ahmad's Water roots (from mother) need emotional processing and talking
• Layla's Fire roots (from mother) need space and action to feel better

Without knowing this, they hurt each other:
• Ahmad feels abandoned when Layla takes space
• Layla feels suffocated when Ahmad wants to talk

WITH this knowledge, they understand: "We're both trying to feel safe×just in different ways."`,
    
    // Dual Temperament
    dualTemperamentTitle: "🎭 Your Individual Temperaments",
    dualTemperamentArabic: "طبائعكم الفردية",
    dualTemperamentExplanation: "Understanding each person's inner (conscious) and cosmic (subconscious) temperaments helps you see the complete person×not just the surface.",
    
    innerTemperament: "Inner Temperament",
    innerTemperamentArabic: "الطبع الباطن",
    innerTemperamentDef: "Your conscious self×how you actively show up in the world. Calculated from YOUR name.",
    
    cosmicTemperament: "Cosmic Temperament",
    cosmicTemperamentArabic: "الطبع الفلكي",
    cosmicTemperamentDef: "Your inherited emotional blueprint×the subconscious patterns from your lineage. Calculated from your MOTHER'S name.",
    
    // Integration Types
    fullyAligned: "Fully Aligned",
    fullyAlignedMeaning: "You are authentically who you appear to be. What people see matches what you feel inside. This creates strong, consistent energy.",
    fullyAlignedChallenge: "May be TOO much of that element×lacking balance from others.",
    
    naturallyBalanced: "Naturally Balanced",
    naturallyBalancedMeaning: "Your inner and cosmic sides support each other. You have access to multiple energies that work together harmoniously.",
    
    internalComplexity: "Internal Complexity",
    internalComplexityMeaning: "There's a gap between how you show up and what you need emotionally. Others may not see your full depth. You may feel misunderstood.",
    internalComplexityAdvice: "💡 Your work is integration: letting your inner self express through your outer self. Honor both sides.",
    
    // Recommendations
    yourPersonalizedGuidance: "💡 Your Personalized Guidance",
    yourPersonalizedGuidanceArabic: "إرشاداتكم الشخصية",
    guidanceIntro: "Based on all four layers of your compatibility, here's specific advice to strengthen your connection:",
    
    yourNaturalStrengths: "🌟 Your Natural Strengths",
    strengthsDesc: "These areas come easily to you. Celebrate and maintain them:",
    
    areasToNurture: "⚠️ Areas to Nurture",
    challengesDesc: "These areas need conscious attention, but awareness is half the solution:",
    
    specificPractices: "🛠️ Specific Practices",
    practicesDesc: "Try these activities to balance your elemental dynamics:",
    
    spiritualBalancing: "🤲 Spiritual Balancing",
    dhikrDesc: "These sacred phrases help harmonize your elemental energies:",
    
    // Educational Glossary
    understandingTheTerms: "[ℹ️ Understanding the Terms]",
    glossaryTitle: "📚 ʿIlm al-Ḥurūf Glossary",
    glossaryTitleArabic: "مسرد علم الحروف",
    
    ilmAlHuruf: "ʿIlm al-Ḥurūf",
    ilmAlHurufArabic: "علم الحروف",
    ilmAlHurufDef: "The Science of Letters × An ancient Islamic science that studies the mystical properties of Arabic letters and their numerical values. Each letter carries specific energy (Fire, Air, Water, or Earth) and a numerical value used for spiritual calculations.",
    
    hadath: "al-Ḥadath",
    hadathArabic: "الحدث",
    hadathDef: "The Numerical Essence × The sum of all letter values in a name using the Abjad (أبجد) system. This number reveals spiritual essence and destiny patterns.",
    
    hadathDiv4: "al-Ḥadath ÷ 4",
    hadathDiv4Def: `The classical method for determining elemental temperament (MAGHRIBI SYSTEM). The remainder when Ḥadath is divided by 4 indicates the dominant element:
• Remainder 1 = Fire (النار)
• Remainder 2 = Earth (الأرض)  
• Remainder 3 = Air (الهواء)
• Remainder 0 = Water (الماء)`,
    
    zawajAlHuruf: "Zawāj al-Ḥurūf",
    zawajAlHurufArabic: "زواج الحروف",
    zawajAlHurufDef: "Marriage of Letters × The compatibility analysis between two names based on their elemental harmony. How the letters 'marry' or interact between two people.",
    
    // Calculation Transparency
    showCalculation: "[📊 Show How We Calculated This]",
    calculationBreakdown: "🔢 Calculation Breakdown",
    calculationBreakdownArabic: "تفصيل الحسابات",
    
    step1: "Step 1: Convert name to Abjad values",
    step2: "Step 2: Sum all values",
    step3: "Step 3: Divide by 4",
    step4: "Step 4: Map remainder to element",
    
    totalHadath: "Total (Ḥadath)",
    quotient: "Quotient",
    remainder: "Remainder",
    element: "Element",
    
    weightingExplanation: "Why these weights? Emotional Foundation (40%) is most important for long-term harmony. Daily Life (30%) affects everyday happiness. Cross Dynamics (15% each) show how you affect each other's cores."
  },

  // Element Pairing Descriptions (for all 10 combinations)
  elementPairings: {
    fireFire: {
      label: "Fire + Fire: The Power Couple",
      description: "Intense, passionate, and fast-moving. You both bring bold energy and drive to the relationship.",
      dailyLife: "Daily life together feels electric and exciting. Lots of action, adventure, and spontaneity.",
      challenge: "⚠️ May compete or burn out without rest. Both want to lead.",
      tip: "💡 Schedule calm time together. Practice listening, not just doing."
    },
    fireAir: {
      label: "Fire + Air: The Visionary Duo",
      description: "Fire sparks Air's ideas into action. Creative, energizing, and full of possibilities.",
      dailyLife: "You inspire each other constantly. Conversations lead to projects. Ideas become reality.",
      challenge: "⚠️ May overlook emotional depth and practical details. All vision, little grounding.",
      tip: "💡 Weekly check-ins: 'How are you feeling?' not just 'What are you doing?'"
    },
    fireWater: {
      label: "Fire + Water: Steam & Transformation",
      description: "Passion meets depth. This creates either steam (transformation) or evaporation (conflict).",
      dailyLife: "Your approaches to life are opposite. Fire acts fast; Water needs time to feel. This creates friction in daily decisions.",
      challenge: "⚠️ Fire may overwhelm Water. Water may withdraw from Fire. Communication styles clash.",
      tip: "💡 Fire: Practice active listening and patience. Water: Express needs clearly and directly."
    },
    fireEarth: {
      label: "Fire + Earth: Vision Meets Foundation",
      description: "Fire brings vision and excitement; Earth brings execution and stability. Complementary but at different paces.",
      dailyLife: "Fire wants to start new things constantly; Earth prefers to finish what's begun. This creates planning tension but also balance.",
      challenge: "⚠️ Different paces: Fire rushes, Earth takes time. May feel like you're pulling in opposite directions.",
      tip: "💡 Combine planning sessions (Earth) with spontaneous adventures (Fire). Honor both approaches."
    },
    airAir: {
      label: "Air + Air: The Intellectual Partnership",
      description: "Endless conversations, shared curiosity, and mental stimulation. You understand how each other thinks.",
      dailyLife: "You can talk for hours. Every experience becomes a discussion. Learning and exploring together is natural.",
      challenge: "⚠️ May overthink or avoid emotional vulnerability. All head, not enough heart.",
      tip: "💡 Set 'no-analysis' zones. Practice feeling without discussing. Touch more, talk less sometimes."
    },
    airWater: {
      label: "Air + Water: Mind Meets Heart",
      description: "Air gives words to Water's feelings. Water adds depth to Air's ideas. Beautiful when balanced.",
      dailyLife: "Air helps Water express emotions clearly. Water reminds Air that feelings matter as much as thoughts.",
      challenge: "⚠️ Air may rationalize feelings; Water may feel misunderstood when emotions are analyzed.",
      tip: "💡 Air: Write love letters×use your words for emotion. Water: Share dreams aloud×trust Air to listen."
    },
    airEarth: {
      label: "Air + Earth: Ideas Take Root",
      description: "Air dreams, Earth builds. Opposite approaches that can complement or clash.",
      dailyLife: "Air wants to explore possibilities; Earth wants to commit to one path. This creates daily decision-making friction.",
      challenge: "⚠️ Air may seem scattered to Earth; Earth may seem rigid to Air. Different values around structure.",
      tip: "💡 Create vision boards together (Air), then assign tasks and timelines (Earth). Meet in the middle."
    },
    waterWater: {
      label: "Water + Water: The Deep Connection",
      description: "Intuitive understanding. You feel each other's emotions without words. Natural empathy flows between you.",
      dailyLife: "A look says everything. You nurture each other instinctively. Emotional safety comes naturally.",
      challenge: "⚠️ May drown in emotions together. Can become isolated from the outside world. Need Air's perspective.",
      tip: "💡 Journal together, then discuss what you wrote. Bring emotions into words. Connect with others too."
    },
    waterEarth: {
      label: "Water + Earth: Nurturing Growth",
      description: "Natural harmony. Water nourishes Earth, Earth holds Water. Like a garden×growth happens organically.",
      dailyLife: "You support each other's growth effortlessly. Water brings feelings, Earth brings stability. Balanced and peaceful.",
      challenge: "⚠️ May avoid conflict or become stagnant. Too comfortable can mean no growth challenges.",
      tip: "💡 Cook together, garden, create with your hands. Embrace gentle change×try new things monthly."
    },
    earthEarth: {
      label: "Earth + Earth: The Solid Foundation",
      description: "Rock-solid stability. Loyalty, consistency, and shared practical goals. You build together brick by brick.",
      dailyLife: "Reliable routines, shared responsibilities, and steady progress. You know what to expect from each other.",
      challenge: "⚠️ May resist change or become too routine. Both can be stubborn. Life feels safe but may lack spontaneity.",
      tip: "💡 Schedule monthly 'new experiences.' Break routines together intentionally. Invite Air and Fire energy."
    }
  },

  // LIFE PATH RESULTS COMPONENT
  lifePathResults: {
    yourLifeNumbers: "Your Life Numbers",
    introduction: "These four numbers reveal your core personality, inner desires, how others see you, and your life purpose. Think of them as the main traits shaping who you are and the path you're meant to walk.",
    whereYouAre: "Where You Are Now",
    currentLifePhase: "Current Life Phase",
    phaseOf: "Phase {current} of 9",
    yearOf: "Year {current}/9",
    focusAreas: "Focus Areas",
    yourAge: "Your age",
    years: "years",
    thisYearMonth: "This Year & Month's Energy",
    personalYear: "Personal Year",
    personalMonth: "Personal Month",
    strengthsChallenges: "Your Strengths & Growth Opportunities",
    strengthsDescription: "Each number from 1 to 9 represents different life qualities. Your strengths show what you naturally excel at. Growth areas show where you can develop further.",
    whatYouAreStrongAt: "What you're strong at",
    whereYouCanGrow: "Where you can grow",
    strength: "Strength",
    growthArea: "Growth Area",
    whatMakesCapable: "What makes you capable and reliable",
    whatGivesEdge: "What gives you an edge",
    yourNaturalTalent: "Your natural talent",
    whatYouExcelAt: "What you excel at",
    aQualityToDevelop: "A quality to develop",
    areaForImprovement: "An area for improvement",
    somethingToWorkOn: "Something to work on",
    keyLifeLesson: "A key life lesson",
    rightNow: "Right now",
    currentStrength: "Your current strength",
    mainStrengthSupporting: "This is the main strength supporting you this season",
    currentlyWorkingOn: "Currently working on",
    yourMainFocus: "Your main focus",
    whatLifeTeaching: "This is what life is teaching you now×embrace it!",
    numberExplanations: {
      1: { title: "The Leader", meaning: "You're naturally independent and driven to create new things. You prefer making your own decisions." },
      2: { title: "The Peacemaker", meaning: "You're good at bringing people together and finding harmony. You're sensitive to others' feelings." },
      3: { title: "The Creator", meaning: "You express yourself easily and bring joy wherever you go. Communication is your strength." },
      4: { title: "The Builder", meaning: "You're reliable and practical. You build solid foundations in everything you do." },
      5: { title: "The Explorer", meaning: "You love freedom and variety. You adapt quickly and learn from diverse experiences." },
      6: { title: "The Caregiver", meaning: "You're responsible and naturally want to help others. Family and service matter deeply to you." },
      7: { title: "The Thinker", meaning: "You're analytical and spiritual. You seek deeper understanding of life's mysteries." },
      8: { title: "The Achiever", meaning: "You're ambitious and focused on success. You have strong business and leadership abilities." },
      9: { title: "The Humanitarian", meaning: "You care about the world and want to make a positive difference. Compassion guides you." },
      11: { title: "The Visionary", meaning: "You see beyond ordinary things. You inspire others and carry spiritual messages." },
      22: { title: "The Master Builder", meaning: "You have big ambitions to create something lasting. You turn dreams into reality on a large scale." }
    }
  },

  // TIMING RESULTS COMPONENT
  timingResults: {
    unableToCalculate: "Unable to calculate planetary hour. Please try again.",
    deepRestNeededToday: "Deep Rest Needed Today",
    todayIsRestDay: "Today is a Rest Day",
    criticalLowEnergy: "Critical low energy detected. Your spirit is recalibrating×honor this healing signal with deep physical and mental rest today.",
    lowHarmonyToday: "Low harmony today suggests this is a strategic rest day. Focus on planning and reflection rather than execution and new starts.",
    recommendedToday: "Recommended Today:",
    viewFullWeek: "View Full Week",
    dismiss: "Dismiss",
    restDayActive: "Rest Day Active",
    restDayNote: "Planetary hours below are shown for reference, but minimize activities today.",
    currentPlanetaryHour: "Current Planetary Hour",
    favorableFor: "Favorable For:",
    avoid: "Avoid:",
    perfectAlignment: "PERFECT ALIGNMENT!",
    strongEnergy: "STRONG ENERGY",
    restTime: "REST TIME",
    moderate: "MODERATE",
    windowClosesIn: "Window closes in:",
    nextWindow: "Next {element} window:",
    bestForNow: "Best for NOW:",
    bestForWhenReturns: "Best for when your element returns:",
    yourPersonalYear: "Your Personal Year",
    recommendedDhikr: "Recommended Dhikr Today",
    count: "Count",
    times: "times",
    bestTime: "Best time",
    benefit: "Benefit",
    actNow: "Act Now",
    realTimeGuidance: "Real-time Guidance",
    
    // Optimal Sequence translations
    optimalSequenceFor: "Optimal Sequence for {day}",
    morning: "Morning",
    midday: "Midday",
    afternoon: "Afternoon",
    evening: "Evening",
    bestFor: "Best For:",
    avoidLabel: "Avoid:",
    
    // New additions for better UX
    harmony: "Harmony:",
    harmonyScore: "Harmony",
    planetEnergy: "{planet} energy",
    yourElement: "Your {element}",
    hourElement: "Hour's {element}",
    classicalWisdom: "Classical Wisdom:",
    deepRestQuote: "Man ʿarafa infisāl waqtihi, faqad ḥafaẓa ṭāqatahu",
    deepRestTranslation: "Who knows the time for disconnection, preserves their energy",
    restDayQuote: "Al-sukūn qabl al-ḥaraka",
    restDayTranslation: "Stillness before motion brings blessed action",
    minutesLeft: "{minutes} minutes left",
    hoursLeft: "{hours} hours left",
    alignment: "Alignment",
    energyStatus: "Energy Status",
    timeRemaining: "Time Remaining",
    
    // Color guidance
    whatToWearToday: "What to Wear Today",
    wearTheseColors: "Wear these colors:",
    tryThis: "Try this:",
    you: "You",
    today: "Today",
    perfectFit: "Perfect fit",
    goingWell: "Going well",
    balanced: "Balanced",
    needCare: "Need care",
    
    // Act Now section
    actNowRealTimeGuidance: "Act Now - Real-Time Guidance",
    useThisTimeFor: "Use this time for:",
    handleRoutineTasks: "Handle routine tasks",
    continueOngoingWork: "Continue ongoing work",
    waitForBetterTiming: "Wait for better timing",
    plentyOfTime: "Plenty of time remaining in this window",
    actNowWarning: "ACT NOW! Optimal time ending soon.",
    howWeFiguredThisOut: "How we figured this out",
    howItWorks: "How it works:",
    planetaryRulerExplanation: "We look at today's planetary ruler ({planet}) and which element controls most of today's hours ({element}). Together they create today's energy personality.",
    yourFitExplanation: "Your fit: Your {userElement} nature and today's {dayElement} energy are {harmonyPercent}% aligned - like two personalities getting along.",
    dayRuler: "Day Ruler:",
    mostActive: "Most Active:",
    dominantElement: "Dominant:",
    harmonyLabel: "Harmony:",
    ancientWisdomMessage: "Ancient wisdom says colors and energy work together. Wear what feels right to you! 🌀"
  },

  // ACTION BUTTONS & ALIGNMENT
  actionButtons: {
    startImportantTask: "Start an important task",
    makeDifficultCall: "Make a difficult call",
    sendCriticalEmail: "Send a critical email",
    scheduleForLater: "Schedule for later",
    restReflect: "Rest and reflect",
    planPrepare: "Plan and prepare",
    waitFor: "Wait for {element}",
    handleRoutineTasks: "Handle routine tasks",
    continueOngoingWork: "Continue ongoing work",
    waitForBetterTiming: "Wait for better timing",
    takeBoldAction: "Take bold action",
    writeOrCommunicate: "Write or communicate",
    brainstormIdeas: "Brainstorm ideas",
    creativeWork: "Creative work",
    deepReflection: "Deep reflection",
    buildOrOrganize: "Build or organize",
    completeTasks: "Complete tasks",
    lowStakesActivities: "Low-stakes activities",
    preparationWork: "Preparation work"
  },

  // HARMONY & ALIGNMENT
  harmony: {
    perfectAlignment: "Perfect alignment",
    strongAlignment: "Strong alignment",
    moderateAlignment: "Moderate alignment",
    weakAlignment: "Weak alignment",
    opposing: "Opposing",
    harmonious: "Harmonious",
    transformative: "Transformative",
    nourishing: "Nourishing",
    unified: "Unified",
    excellent: "Excellent",
    veryGood: "Very Good",
    good: "Good",
    moderate: "Moderate",
    challenging: "Challenging"
  },

  // ELEMENT GUIDANCE
  elementGuidance: {
    Fire: {
      bestFor: [
        "Starting new projects",
        "Making important decisions",
        "Having conversations requiring courage",
        "Taking bold action",
        "Leading and inspiring others"
      ],
      avoid: [
        "Emotional processing",
        "Detailed planning",
        "Slow, methodical work"
      ]
    },
    Air: {
      bestFor: [
        "Communicating and networking",
        "Learning new concepts",
        "Brainstorming",
        "Writing and articulating",
        "Teaching and sharing knowledge"
      ],
      avoid: [
        "Heavy physical work",
        "Deep emotional work",
        "Long-term commitments"
      ]
    },
    Water: {
      bestFor: [
        "Emotional processing",
        "Deep reflection",
        "Healing conversations",
        "Intuitive work",
        "Creative flow"
      ],
      avoid: [
        "Quick decisions",
        "Confrontations",
        "Aggressive action"
      ]
    },
    Earth: {
      bestFor: [
        "Building and organizing",
        "Making commitments",
        "Finishing projects",
        "Financial planning",
        "Physical work"
      ],
      avoid: [
        "Rapid changes",
        "Impulsive decisions",
        "Abstract theorizing"
      ]
    }
  },

  // COLOR GUIDANCE
  colorGuidance: {
    dailyColorGuidance: "Daily Color Guidance",
    yourElement: "Your Element",
    todayElement: "Today's Element",
    harmonyLevel: "Harmony Level",
    primaryColors: "Primary Colors",
    accentColors: "Accent Colors",
    avoidColors: "Avoid Colors",
    energyMessage: "Energy Message",
    practicalTips: "Practical Tips",
    bestEnergyTimes: "Best Energy Times",
    harmonyBreakdown: "Harmony Breakdown"
  },

  // REST PRACTICES
  restPractices: {
    physicalRest: "Physical rest - sleep, lie down, minimal movement",
    cancelNonEssential: "Cancel all non-essential meetings/tasks",
    lightPrayer: "Light prayer or dhikr only (no intensive practice)",
    noDecisions: "No decision-making today - defer to best days",
    hydrateNourish: "Hydrate, nourish, be gentle with yourself",
    silenceMeditation: "20 min silence or meditation away from bright light",
    gentleWalk: "Gentle walk in shade (no goals, just presence)",
    journalThoughts: "Journal thoughts without forcing solutions",
    postponeDecisions: "Postpone leadership decisions until tomorrow",
    earlyBedtime: "Early bedtime for solar repair (before 10 PM)",
    byWater: "20 min by water (real or visualized)",
    emotionalRelease: "Gentle emotional release - cry, write, express",
    warmFood: "Nourish with warm, comforting food",
    postponeEmotional: "Postpone emotional conversations",
    extraSleep: "Extra sleep - honor your lunar rhythm",
    gentleMovement: "Very gentle movement only (stretching, slow walk)",
    breathingExercises: "Calm down with breathing exercises",
    noConflicts: "No conflicts or confrontations today",
    postponePhysical: "Postpone physical challenges",
    coolDown: "Cool down with breathing exercises",
    informationFast: "Information fast - limit reading/messages",
    speakLess: "Speak less, listen to silence",
    postponeCommunication: "Postpone important communications",
    simpleTasks: "Simple, single-focus tasks only",
    mentalRest: "Mental rest - no problem-solving",
    scaleBack: "Scale back ambitious plans",
    postponeTeaching: "Postpone teaching or sharing wisdom",
    gratitudePractice: "Gratitude practice for what is",
    restInContentment: "Rest in contentment, not expansion",
    gentleSelfCare: "Gentle self-care (bath, soft music, beauty)",
    noRelationshipDecisions: "No relationship decisions today",
    postponeSocial: "Postpone social gatherings",
    soloTime: "Solo time in pleasant environment",
    appreciateWithout: "Appreciate without acquiring",
    releaseRigidity: "Release rigidity - don't force structure",
    postponePlanning: "Postpone long-term planning",
    letGoShould: "Let go of 'should' thoughts",
    flexibilityExercises: "Gentle flexibility exercises",
    trustPause: "Trust the pause before discipline returns"
  },

  // ============================================================================
  // WEEKLY RESULTS - Complete translations
  // ============================================================================
  weeklyResultsComplete: {
    unableToGenerate: "Unable to generate weekly forecast. Please enter a valid Arabic name.",
    best: "Best",
    gentle: "Gentle",
    focus: "Focus",
    closeDetails: "Close details",
    clickToExpand: "Click to expand",
    peakPerformanceDay: "Peak Performance Day",
    steadyProgressDay: "Steady Progress Day",
    restReflectionDay: "Rest & Reflection Day",
    allForcesAligned: "All forces aligned×excellent flow",
    mixedSignals: "Mixed signals×proceed mindfully",
    challengingEnergies: "Challenging energies×patience needed",
    morning: "🌅 Morning",
    midday: "☀️ Midday",
    afternoon: "🌆 Afternoon",
    evening: "🌙 Evening",
    optimalSequence: "Optimal sequence for",
    timeWindows: "Time Windows",
    energyType: "Energy Type",
    bestFor: "✓ Best for:",
    avoid: "✗ Avoid:",
    planetalPhase: "Planetal Phase",
    peakLeadership: "Peak leadership energy",
    highVisibility: "High visibility",
    delegationPhase: "Delegation phase",
    reflectionTime: "Reflection time",
    emotionalClarity: "Emotional clarity",
    empathyPeak: "Empathy peak",
    creativeFlow: "Creative flow",
    deepRestBegins: "Deep rest begins",
    peakPhysicalEnergy: "Peak physical energy",
    combatMode: "Combat mode",
    sustainedPush: "Sustained push",
    coolDownNeeded: "Cool down needed",
    mentalSharpness: "Mental sharpness",
    communicationPeak: "Communication peak",
    quickConnections: "Quick connections",
    integrationTime: "Integration time",
    expansionBegins: "Expansion begins",
    opportunityWindow: "Opportunity window",
    growthMomentum: "Growth momentum",
    wisdomIntegration: "Wisdom integration",
    beautyAppreciation: "Beauty appreciation",
    relationshipHarmony: "Relationship harmony",
    pleasureTime: "Pleasure time",
    disciplinePeak: "Discipline peak",
    seriousWorkMode: "Serious work mode",
    endurancePhase: "Endurance phase",
    reviewTime: "Review time",
    classicalTeaching: "Classical teaching (Lesson 28):",
    forEverythingTime: "\"Li-kulli shay'in waqtun\"",
    successFromTiming: "(For everything there is a time) × Success comes from right action at the right time."
  },

  // ============================================================================
  // DESTINY RESULTS - Complete translations
  // ============================================================================
  destinyResultsComplete: {
    unableToCalculate: "Unable to calculate destiny. Please enter a name.",
    nameChart: "Name Chart",
    spiritualBlueprint: "Spiritual Blueprint of Your Name",
    totalHadadKabir: "Total (Ḥadad Kabīr)",
    digitalRootSaghir: "Digital Root (Ṣaghīr)",
    elementTabh: "Element (Ṭabʿ)",
    zodiacBurj: "Zodiac Sign (Burj)",
    planetLabel: "Planet",
    dayLabel: "Day",
    hourLabel: "Planetary Hour #",
    hourTooltip: "Nth hour after local sunrise. Order: Sun, Venus, Mercury, Moon, Saturn, Jupiter, Mars.",
    elementHarmony: "Element Harmony",
    harmonious: "✨ Harmonious",
    nourishing: "🌱 Nourishing",
    transformative: "⚡ Transformative",
    unified: "💫 Unified",
    elementInheritance: "Element Inheritance",
    expression: "Expression",
    foundation: "Foundation",
    yourExpression: "Your Expression",
    yourFoundation: "Your Foundation",
    quranicResonance: "Quranic Resonance",
    arabicText: "Arabic Text",
    englishTranslation: "English Translation",
    loadingVerse: "Loading Quranic verse...",
    unableToLoadVerse: "Unable to load verse at the moment. Please refresh or visit Quran.com directly.",
    verseReferenceValid: "Verse reference is valid (Surah {surah}:{ayah}), but we're having difficulty retrieving it.",
    readFullVerse: "Read full verse on Quran.com",
    ayahOfTotal: "Ayah {ayah} of {total}",
    noVerseData: "No verse data available for this resonance.",
    grandTotal: "Grand Total",
    element: "Element",
    spiritualOrigin: "Your Spiritual Origin",
    motherElement: "Mother's Name Element (Umm Ḥadad)",
    inheritance: "Inheritance",
    insight: "Insight",
    letterGeometry: "Letter Geometry (Handasa al-Ḥurūf)",
    vertical: "Vertical (ʿAmūdī)",
    round: "Round (Mudawwar)",
    flat: "Flat (Musaṭṭaḥ)",
    angular: "Angular (Zāwiya)",
    noneInYourName: "None in your name",
    letters: "letters",
    geometricProfile: "Your Geometric Profile",
    aspiration: "Aspiration",
    spiritualReach: "Spiritual Reach",
    goals: "Goals",
    growth: "Growth",
    compassion: "Compassion",
    wholeness: "Wholeness",
    cycles: "Cycles",
    embrace: "Embrace",
    stability: "Stability",
    grounding: "Grounding",
    decisiveness: "Decisiveness",
    sharpness: "Sharpness",
    clarity: "Clarity",
    transformation: "Transformation",
    soulTriad: "Your Soul Triad",
    lifeDestiny: "Life Destiny",
    soulUrge: "Soul Urge",
    outerPersonality: "Outer Personality",
    practicalGuidance: "Practical Guidance",
    yourPath: "Your Path",
    yourPathDesc: "Explains what your life direction and energy naturally move toward.",
    spiritualPractice: "Spiritual Practice",
    spiritualPracticeDesc: "Simple daily habits or reflections to balance your element.",
    quranicGuidance: "Quranic Guidance",
    quranicGuidanceDesc: "A verse connected to your name's energy, for reflection only.",
    practicalAction: "Practical Action",
    practicalActionDesc: "Steps you can take in everyday life that align with your destiny.",
    shadowToWatch: "Shadow to Watch",
    shadowToWatchDesc: "Tendencies to be aware of that may hinder your growth.",
    reflectionOnly: "For reflection only × not divination or legal ruling."
  },

  // ============================================================================
  // COMPATIBILITY RESULTS - Complete translations
  // ============================================================================
  compatibilityResultsComplete: {
    unableToCalculate: "Unable to calculate compatibility. Please ensure both names are entered.",
    overallCompatibility: "Overall Compatibility",
    overallHarmonyScore: "Overall Harmony Score",
    threeAnalysisMethods: "Three Analysis Methods",
    spiritualDestiny: "🌙 Spiritual Destiny",
    elementalTemperament: "🌊 Elemental Temperament",
    planetaryCosmic: "⭐ Planetary Cosmic",
    remainder: "Remainder",
    sharedElement: "Element",
    excellent: "EXCELLENT",
    veryGood: "VERY GOOD",
    good: "GOOD",
    moderate: "MODERATE",
    challenging: "CHALLENGING",
    recommendations: "Recommendations",
    strengths: "Strengths",
    growthAreas: "Growth Areas",
    challenges: "Challenges",
    relationship: "Relationship",
    advice: "Advice",
    harmonyScore: "Harmony Score"
  },

  // ============================================================================
  // PLANETARY DESCRIPTIONS - Complete translations
  // ============================================================================
  planetaryDescriptions: {
    Sun: {
      name: "Sun",
      energy: "Leadership & Vitality",
      quality: "Leadership, Authority, Success"
    },
    Moon: {
      name: "Moon",
      energy: "Emotions & Intuition",
      quality: "Emotion, Intuition, Home"
    },
    Mars: {
      name: "Mars",
      energy: "Action & Courage",
      quality: "Action, Courage, Competition"
    },
    Mercury: {
      name: "Mercury",
      energy: "Communication & Learning",
      quality: "Communication, Learning, Commerce"
    },
    Jupiter: {
      name: "Jupiter",
      energy: "Expansion & Wisdom",
      quality: "Expansion, Wisdom, Abundance"
    },
    Venus: {
      name: "Venus",
      energy: "Love & Harmony",
      quality: "Love, Beauty, Harmony"
    },
    Saturn: {
      name: "Saturn",
      energy: "Structure & Discipline",
      quality: "Structure, Discipline, Karma"
    }
  },

  // ============================================================================
  // CLASSICAL WISDOM - Keep original with translations
  // ============================================================================
  classicalWisdom: {
    stillnessBeforeMotion: "Al-sukūn qabl al-ḥaraka",
    stillnessExplanation: "(Stillness before motion brings blessed action)",
    whoPlants: "Man zaraʿa khayran ḥaṣada khayran",
    whoPlantsExplanation: "(Who plants good, harvests good) × The timing of harvest depends on the seed and season.",
    forEverything: "Li-kulli shay'in waqtun",
    forEverythingExplanation: "(For everything there is a time) × Success comes from right action at the right time.",
    whoKnowsDisconnection: "Man ʿarafa infisāl waqtihi, faqad ḥafaẓa ṭāqatahu",
    whoKnowsExplanation: "(Who knows the time of disconnection, preserves his energy)"
  },

  // ============================================================================
  // UI COMPONENTS - Onboarding, Glossary, Controls
  // ============================================================================
  onboarding: {
    welcome: "Welcome to Asrār Everyday! 🌙",
    enterText: "Enter Your Text",
    understanding: "Understanding Your Analysis",
    closeTutorial: "Close tutorial",
    previousStep: "Previous step",
    nextStep: "Next step",
    completeTutorial: "Complete tutorial",
  },

  glossary: {
    openTitle: "Open Islamic Numerology Glossary",
    closeLabel: "Close glossary",
    searchPlaceholder: "Search terms... (e.g., 'Saghir', 'element', 'destiny')",
    noResults: "No terms found matching",
  },

  controls: {
    closeKeyboard: "Close keyboard",
    closeMenu: "Close menu",
    updateLocation: "Update",
  },

  tooltips: {
    umHadad1: "Um Ḥadad (أم حدد) - Required for complete Name Destiny calculation",
    umHadad2: "Um Ḥadad (أم حدد) - Reveals your Aṣl al-Rūḥānī (spiritual origin)",
  },

  // ============================================================================
  // ACTION BUTTONS & ENERGY DESCRIPTIONS
  // ============================================================================
  energyReturn: {
    fast: "What you give flows back quickly",
    slow: "What you give today takes time to return",
  },

  // ============================================================================
  // ERROR MESSAGES
  // ============================================================================
  errors: {
    analysisError: "Unable to analyze. Please check your input.",
    verseLoadError: "Unable to load verse text. Please try again.",
  },

  // ============================================================================
  // SEO & METADATA
  // ============================================================================
  seo: {
    siteTitle: "Asrār Everyday - ʿIlm al-Ḥurūf & ʿIlm al-ʿAdad Calculator",
    titleTemplate: "%s | Asrār Everyday",
  },

  // DIVINE TIMING SPIRITUAL COMPONENTS
  divineTiming: {
    spiritualDepth: {
      divineName: "Divine Name",
      quranicVerse: "Quranic Verse",
      spiritualSignificance: "Spiritual Significance",
      relatedNames: "Related Names",
      recommendedRecitation: "Recommended recitation",
      reflectionPrompt: "Reflection",
      beginDhikr: "Begin Dhikr",
      relevanceToThisHour: "Relevance to this hour",
      inTheNameOfAllah: "In the name of Allah, the Most Gracious, the Most Merciful",
    },
    disclaimer: {
      importantNotice: "Important Notice",
      pleaseReadCarefully: "Please read carefully before using the Divine Timing module",
      natureOfThisTool: "Nature of This Tool",
      toolDescription: "This tool provides spiritual reflection and timing guidance based on classical Islamic traditions of planetary hours (Sāʿāt al-Falakiyya / الساعات الفلكية). It is a guide for spiritual timing optimization and personal reflection.",
      essentialPoints: "Essential Points to Understand",
      notDivination: "This is NOT Divination",
      notDivinationText: "This tool does NOT predict the future or guarantee outcomes. Fortune-telling (kāhana / كهانة) is prohibited in Islam. We only offer timing suggestions based on traditional wisdom.",
      freeWillAndQadr: "Free Will and Qadr",
      freeWillText: "Your free will (ikhtiyār / اختيار) and choices remain yours. All outcomes are determined by Allah alone (Qadr / قدر). Use this wisdom as a reflection tool, not as a replacement for your judgment.",
      notLegalGuidance: "Not Islamic Legal Guidance",
      notLegalGuidanceText: "This tool is NOT a fatwa (فتوى) or Islamic legal ruling. For religious questions, consult qualified scholars. For important decisions, seek professional advice.",
      recommendedUse: "Recommended Use",
      recommendedUseText: "Use this tool for: timing optimization of actions, spiritual reflection, understanding natural cycles, and enriching your spiritual practice. Always combine with prayer (duʿāʾ / دعاء), practical wisdom (ḥikma / حكمة), and personal effort (ijtihād).",
      classicalSources: "Classical Sources",
      classicalSourcesText: "Planetary hour calculations are based on classical Islamic traditions (ʿIlm al-Ḥurūf, Shams al-Maʿārif, etc.). Spiritual connections with Divine Names and Quranic verses are presented for reflection and spiritual enrichment, not as mandatory prescriptions.",
      knowledgeOfUnseen: "The knowledge of the unseen belongs to Allah alone",
      quranReference: "Quran 10:20",
      iHaveReadAndUnderstand: "I have read and understand - Continue",
      byContinuingYouAgree: "By continuing, you agree to use this tool as a guide for reflection, not as a source of absolute authority.",
    },
    // PHASE 2: Prayer Times, Lunar Mansions, Alignment
    prayerTimes: {
      prayerTimes: "Prayer Times",
      currentPeriod: "Current Period",
      nextPrayer: "Next Prayer",
      in: "in",
      betweenPrayers: "Between Prayers",
      planetarySynergy: "Planetary Synergy",
      viewAll: "View All",
      hide: "Hide",
      now: "Now",
      next: "Next",
      calculationsBasedOn: "Calculations based on",
      yourLocation: "your location",
      specialPrayerTime: "Special Prayer Time",
    },
    lunarMansion: {
      lunarMansion: "Lunar Mansion",
      moonPhase: "Moon Phase",
      element: "Element",
      planetaryRuler: "Planetary Ruler",
      divineQuality: "Divine Quality",
      spiritualFocus: "Spiritual Focus",
      lunarPlanetarySynergy: "Lunar-Planetary Synergy",
      hideDetails: "Hide Details",
      viewActivitiesWisdom: "View Activities & Wisdom",
      favorableFor: "Favorable For",
      unfavorableFor: "Unfavorable For",
      classicalWisdom: "Classical Wisdom",
      constellation: "Constellation",
      calculatingLunarMansion: "Calculating lunar mansion...",
    },
    alignment: {
      personalAlignment: "Personal Alignment",
      alignmentBreakdown: "Alignment Breakdown",
      elementalHarmony: "Elemental Harmony",
      planetaryResonance: "Planetary Resonance",
      numericalAlignment: "Numerical Alignment",
      sacredConnection: "Sacred Connection",
      recommendations: "Recommendations",
      yourBestHoursToday: "Your Best Hours Today",
      planetaryHour: "Planetary hour",
      basedOnSpiritualEssence: "Based on your spiritual essence and planetary energies",
    },
    // PHASE 3: Educational Content
    education: {
      learningCenter: "Learning Center",
      planetGuides: "Planet Guides",
      glossary: "Glossary",
      energyFlow: "Energy Flow",
      selectPlanet: "Select Planet",
      overview: "Overview",
      spiritualWisdom: "Spiritual Wisdom",
      practicalGuide: "Practical Guide",
      classicalSources: "Classical Sources",
      primaryDivineName: "Primary Divine Name",
      relatedDivineNames: "Related Divine Names",
      islamicHistoricalContext: "Islamic Historical Context",
      spiritualQualities: "Spiritual Qualities",
      relatedSpiritualConcepts: "Related Spiritual Concepts",
      spiritualExamples: "Spiritual Examples",
      favorableActivities: "Favorable Activities",
      activitiesToAvoid: "Activities to Avoid",
      classicalTeachings: "Classical Teachings",
      position: "Position",
      recommendedDhikr: "Recommended Dhikr",
      source: "Source",
      energyFlowChart: "Daily Energy Flow",
      currentHour: "Current Hour",
      excellentHours: "Excellent Hours",
      goodHours: "Good Hours",
      challengingHours: "Challenging Hours",
      harmonyScore: "Harmony Score",
      introduction: "Introduction",
      islamicContext: "Islamic Context",
      howItWorks: "How It Works",
      faq: "FAQ",
      comprehensiveGuide: "Comprehensive guide to planetary hours in Islamic tradition",
      searchTerms: "Search terms",
      showingTerms: "Showing",
      terms: "terms",
      allTerms: "All Terms",
      planets: "Planets",
      elements: "Elements",
      divineNames: "Divine Names",
      concepts: "Concepts",
      practices: "Practices",
      related: "Related",
      noTermsFound: "No terms found matching your search",
      element: "Element",
      day: "Day",
      metal: "Metal",
    },
  },

  // ============================================================================
  // MOTHER'S NAME STRATEGY - Name Destiny Dual-Mode System
  // ============================================================================
  mothersNameStrategy: {
    // Name Destiny Mode Selector
    modeSelector: {
      title: "Choose Your Reading Type",
      generalMode: {
        title: "Explore a Name",
        icon: "📖",
        description: "Discover the spiritual meaning and general characteristics of any name",
        bestFor: "Best for: Learning about names, cultural exploration, general insights",
      },
      personalMode: {
        title: "My Personal Reading",
        icon: "✨",
        description: "Get YOUR unique spiritual profile - personalized to your exact soul blueprint",
        bestFor: "Best for: Self-discovery, spiritual guidance, personal transformation",
        recommended: "⭐ Recommended",
      },
      whyPersonalBetter: "Why personal is better:",
      reason1: "Your exact spiritual blueprint (not just general traits)",
      reason2: "Unique to YOU (not anyone else with your name)",
      reason3: "More accurate guidance and insights",
    },

    // Name Destiny Input Forms
    nameInput: {
      generalModeHeader: "General Name Exploration",
      generalModeSubtitle: "Exploring name meaning only - not personalized to you",
      personalModeHeader: "Personal Spiritual Profile",
      personalModeSubtitle: "Your unique reading - requires mother's name",
      switchToPersonal: "Switch to Personal Reading",
      switchToGeneral: "Switch to General Exploration",
      motherNameRequired: "Mother's Name (Required for Personal Reading)",
      motherNameOptional: "Mother's Name (Optional)",
      whyRequired: "Why is mother's name required?",
      learnMore: "Learn More",
    },

    // General Results with Upgrade CTA
    generalResults: {
      modeLabel: "📖 General Name Exploration",
      limitedInsight: "Limited Insight - General characteristics only",
      upgradePrompt: "Want YOUR unique spiritual profile?",
      upgradeButton: "✨ Get My Personal Reading",
      upgradeBenefits: "Personal reading includes:",
      benefit1: "Your exact spiritual blueprint (Aṣl al-Rūḥānī)",
      benefit2: "Personalized guidance unique to YOU",
      benefit3: "Deeper insights into your soul's journey",
      generalOnly: "This is a general analysis for the name '{name}' - not specific to you.",
    },

    // Personal Results Emphasis
    personalResults: {
      modeLabel: "✨ Personal Spiritual Profile",
      uniqueToYou: "Unique to YOU - Not anyone else with your name",
      yourExactBlueprint: "Your Exact Spiritual Blueprint",
      calculatedFrom: "Calculated from: {name} + {motherName}",
      thisIsYours: "This reading is unique to your soul - no one else will have this exact profile.",
    },

    // Life Path Module - Required Mother's Name
    lifePath: {
      motherNameRequired: "Mother's Name (Required)",
      whyRequired: "Why is mother's name required?",
      explanation: "Life Path is personal to YOU",
      detailedExplanation: "Your Life Path is not just about your name - it's about YOUR unique journey through life. Your mother's name ensures this reading reflects your specific spiritual blueprint, not just a general pattern for everyone with your name.",
      cannotSubmit: "Please enter your mother's name to continue",
      validationError: "Mother's name is required for Life Path calculation",
    },

    // Divine Timing Module - Required Mother's Name
    divineTiming: {
      motherNameRequired: "Mother's Name (Required)",
      whyRequired: "Why is mother's name required?",
      explanation: "Divine Timing is calculated for YOUR specific planetary influences",
      detailedExplanation: "Planetary hours affect each person differently based on their unique spiritual signature. Your mother's name personalizes these calculations to your exact soul blueprint, ensuring the timing guidance is accurate for YOU specifically.",
      cannotSubmit: "Please enter your mother's name to continue",
      validationError: "Mother's name is required for Divine Timing calculation",
    },

    // Educational Modal - Mother's Name Explanation
    explanation: {
      title: "Why Mother's Name Matters",
      subtitle: "The spiritual principle behind personalized readings",
      
      section1: {
        title: "The Principle: Your Unique Soul Blueprint",
        text: "In the Senegalese tradition of ʿIlm al-Ḥurūf, your full spiritual identity (Aṣl al-Rūḥānī) is formed from your name + your mother's name. This creates a unique numerical and elemental signature that is yours alone.",
      },

      section2: {
        title: "Why This Matters",
        point1: {
          title: "Without mother's name:",
          text: "You get general characteristics of the name 'Muhammad' - shared by millions of people",
        },
        point2: {
          title: "With mother's name:",
          text: "You get YOUR unique profile - Muhammad + Fatima = different from Muhammad + Aisha",
        },
      },

      section3: {
        title: "Example: Two People Named Muhammad",
        person1: "Muhammad (mother: Fatima) = Numerical value X → Fire-dominant → Unique spiritual path A",
        person2: "Muhammad (mother: Khadija) = Numerical value Y → Water-dominant → Different spiritual path B",
        conclusion: "Same name, different mothers = completely different spiritual blueprints",
      },

      section4: {
        title: "Privacy & Respect",
        point1: "Your mother's name is never stored or shared",
        point2: "Calculations happen instantly in your browser only",
        point3: "We honor the sacred trust of your mother's name (um ḥadad / أم حدد)",
      },

      section5: {
        title: "When to Use Each Mode",
        generalMode: {
          title: "General Mode (Name Only):",
          use1: "Exploring baby names or name meanings",
          use2: "Cultural or historical research",
          use3: "Learning about name patterns",
        },
        personalMode: {
          title: "Personal Mode (Name + Mother's Name):",
          use1: "YOUR spiritual guidance",
          use2: "Life decisions and timing",
          use3: "Deep self-discovery work",
        },
      },

      closeButton: "I Understand",
    },

    // Auto-upgrade Logic
    autoUpgrade: {
      detected: "Mother's name detected - upgrading to Personal Reading",
      switchingMode: "Switching to Personal mode for accurate results",
    },
  },

  // ============================================================================
  // WHO AM I MODULE - Istikharah al-Asmā' (الاستخارة بالأسماء)
  // ============================================================================
  istikhara: {
    // Main panel
    title: "Who Am I?",
    titleArabic: "من أنا؟",
    subtitle: "Discover Your Spiritual Profile",
    description: "Uncover your spiritual essence through sacred numerology. Using ʿIlm al-Ḥurūf, discover your element, personality traits, blessed day, and divine guidance.",
    scholarlyName: "Istikharah al-Asmāʾ",
    
    // Form section
    form: {
      title: "Enter Your Details",
      personName: "Your Name",
      personNamePlaceholder: "e.g., Muhammad, Fatima, Ibrahim",
      motherName: "Mother's Name",
      motherNamePlaceholder: "e.g., Khadija, Aisha, Maryam",
      dateOfBirth: "Date of Birth",
      dateOfBirthPlaceholder: "Select your birth date",
      dateOfBirthHelper: "Used for precise astrological calculations",
      calculateButton: "Discover My Profile",
      clearButton: "Clear",
      validationError: "Please enter both names to continue",
      bothNamesRequired: "Both names are required for accurate guidance",
    },
    
    // Results section
    results: {
      title: "Your Spiritual Guidance",
      calculatedFor: "Guidance for {person} (mother: {mother})",
      burujRemainder: "Buruj Remainder",
      element: "Dominant Element",
      
      // Tab navigation
      tabs: {
        personality: "Personality",
        career: "Career Guidance",
        blessedDay: "Blessed Day",
        spiritual: "Divine Names",
        sadaqah: "Sadaqah",
      },
    },
    
    // Personality Profile
    personality: {
      title: "Personality Profile",
      subtitle: "Character Traits & Temperament",
      coreTraits: "Core Traits",
      strengths: "Strengths",
      challenges: "Challenges",
      guidance: "Spiritual Guidance",
      elementalInfluence: "Elemental Influence",
      colors: "Harmonious Colors",
    },
    
    // Career Guidance
    career: {
      title: "Career & Vocation Guidance",
      subtitle: "Paths Aligned with Your Spiritual Nature",
      idealFields: "Ideal Career Fields",
      workStyle: "Work Style",
      bestEnvironments: "Best Environments",
      leadershipStyle: "Leadership Approach",
      collaboration: "Collaboration Style",
      avoidCareers: "Careers to Approach with Caution",
    },
    
    // Blessed Day
    blessedDay: {
      title: "Your Blessed Day",
      subtitle: "Optimal Day for Important Actions",
      primaryDay: "Primary Blessed Day",
      planetaryRuler: "Planetary Ruler",
      bestActivities: "Best Activities for This Day",
      spiritualPractices: "Recommended Spiritual Practices",
      timing: "Optimal Timing",
      morningBlessings: "Morning (after Fajr)",
      middayBlessings: "Midday (Ẓuhr to ʿAṣr)",
      eveningBlessings: "Evening (after Maghrib)",
    },
    
    // Spiritual Practice
    spiritual: {
      title: "Spiritual Practice & Growth",
      subtitle: "Practices to Strengthen Your Connection",
      recommendedSadaqah: "Recommended Sadaqah",
      sadaqahType: "Type of Charity",
      sadaqahBenefit: "Spiritual Benefit",
      sadaqahTiming: "Best Timing",
      dhikrPractice: "Recommended Dhikr",
      dhikrName: "Divine Name",
      dhikrCount: "Suggested Count",
      dhikrTime: "Best Time",
      dhikrBenefit: "Benefit",
      dailyPractice: "Daily Practice",
      weeklyPractice: "Weekly Practice",
      monthlyPractice: "Monthly Practice",
    },
    
    // Element descriptions (English)
    elements: {
      fire: {
        name: "Fire",
        nameArabic: "النار (al-Nār)",
        quality: "Passionate, Dynamic, Transformative",
        description: "Fire energy brings boldness, creativity, and transformative power. Those with Fire dominance are natural leaders who inspire change.",
      },
      earth: {
        name: "Earth",
        nameArabic: "الأرض (al-Arḍ)",
        quality: "Stable, Practical, Grounded",
        description: "Earth energy brings stability, reliability, and practical wisdom. Those with Earth dominance build lasting foundations.",
      },
      air: {
        name: "Air",
        nameArabic: "الهواء (al-Hawāʾ)",
        quality: "Intellectual, Communicative, Adaptable",
        description: "Air energy brings clarity, communication, and intellectual power. Those with Air dominance excel in knowledge and connection.",
      },
      water: {
        name: "Water",
        nameArabic: "الماء (al-Māʾ)",
        quality: "Emotional, Intuitive, Flowing",
        description: "Water energy brings empathy, intuition, and emotional depth. Those with Water dominance heal and nurture naturally.",
      },
    },
    
    // UI elements
    ui: {
      loading: "Calculating spiritual guidance...",
      error: "Unable to calculate guidance. Please check the names and try again.",
      backToForm: "New Calculation",
      printResults: "Print Guidance",
      shareResults: "Share",
      expandAll: "Expand All Sections",
      collapseAll: "Collapse All Sections",
    },
    
    // Educational footer
    education: {
      title: "About This Analysis",
      whatIsIt: "What is it?",
      whatIsItText: "'Who Am I?' uses Istikharah al-Asmāʾ (الاستخارة بالأسماء), a traditional Islamic practice that reveals your spiritual profile by analyzing the sacred resonance of your name and mother's name using ʿIlm al-Ḥurūf (Science of Letters).",
      howItWorks: "How does it work?",
      howItWorksText: "By calculating the Abjad values of both names and applying the Buruj system (12 remainders mapped to 4 elements), we reveal your spiritual temperament, blessed day, ideal career paths, and personalized spiritual practices.",
      isItPermissible: "Is it permissible?",
      isItPermissibleText: "This practice is rooted in West African Islamic scholarly tradition, particularly Senegalese ʿIlm al-Ḥurūf. It is used for reflection and guidance, not fortune-telling. Always combine with prayer (duʿāʾ) and consult qualified scholars for important decisions.",
    },
    
    // Disclaimer
    disclaimer: {
      title: "Important Notice",
      text: "This tool provides spiritual reflection based on traditional Islamic sciences. It is NOT fortune-telling (kāhana), which is prohibited. Use it as a guide for self-reflection, always combined with prayer (duʿāʾ), practical wisdom (ḥikma), and consultation with qualified scholars. All outcomes are determined by Allah alone (Qadr).",
    },
  },
};
