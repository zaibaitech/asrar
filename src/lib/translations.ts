export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      calculator: "Calculator",
      letterCalculator: "Letter Calculator",
      compatibility: "Compatibility",
      planetaryHours: "Planetary Hours",
      planetary: "Planetary Alignment",
      about: "About",
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
      addChallenge: {
        title: "Add Challenge",
        subtitle: "Choose a type of dhikr challenge to track",
        salawatTitle: "Ṣalawāt",
        salawatDescription: "Blessings upon the Prophet ﷺ",
        propheticNamesTitle: "201 Holy Names",
        propheticNamesDescription: "Rizq abundance · 7-day morning practice",
        debtReliefTitle: "Debt Relief Wird",
        debtReliefDescription: "1000× after ʿIshāʾ · Qurʾānic verse",
        divineNameTitle: "Divine Name",
        divineNameDescription: "Invocation of Allah's Names",
        customTitle: "Custom Wird",
        customDescription: "Your own dhikr practice",
        special: "Special",
        alreadyAdded: "Already added",
        back: "Back",
        chooseSalawat: "Choose Your Ṣalawāt",
        tapToPreview: "Tap to preview full text",
        recommended: "Recommended:",
        perDay: "day",
        viewFullText: "View full text →",
        transliteration: "Transliteration",
        showMeaning: "Show meaning",
        recommendedDailyTarget: "Recommended daily target:",
        alreadyAddedButton: "Already Added",
        selectThisSalawat: "Select this Ṣalawāt",
        chooseDivineName: "Choose Divine Name",
        addDivineName: "Add Divine Name Challenge",
        customWird: "Custom Wird",
        titleLabel: "Title",
        titlePlaceholder: "My Wird",
        arabicText: "Arabic Text",
        dailyTarget: "Daily Target",
        ramadanTarget: "Ramadan target",
        addCustomWird: "Add Custom Wird",
        steps: "Steps:",
        names: "Names",
        spiritualPurpose: "Spiritual Purpose:",
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
  },

  fr: {
    nav: {
      home: "Accueil",
      calculator: "Calculatrice",
      letterCalculator: "Calculatrice de Lettres",
      compatibility: "Compatibilité",
      planetaryHours: "Heures Planétaires",
      planetary: "Alignement Planétaire",
      about: "À Propos",
      guidance: "Guide de Vie",
      advanced: "Qui Suis-Je ?",
      menu: "Menu",
    },

    // Welcome Section
    welcome: {
      title: "Bienvenue sur Asrār Everyday",
      description: "Explorez la riche tradition de ʿIlm al-Ḥurūf (Science des Lettres) et ʿIlm al-ʿAdad (Science des Nombres) à travers une interface intuitive et éducative. Entrez du texte arabe ci-dessus pour découvrir les valeurs numériques, les associations élémentaires et les conseils traditionnels.",
    },

    common: {
      calculate: "Calculer",
      clear: "Effacer",
      submit: "Soumettre",
      cancel: "Annuler",
      close: "Fermer",
      save: "Enregistrer",
      loading: "Chargement...",
      error: "Erreur",
      success: "Succès",
      name: "Nom",
      date: "Date",
      location: "Lieu",
      enterName: "Entrez le nom",
      selectDate: "Sélectionnez la date",
      results: "Résultats",
      history: "Historique",
      favorites: "Favoris",
      compare: "Comparer",
      delete: "Supprimer",
      copy: "Copier",
      copied: "Copié !",
      viewAll: "Voir Tout",
      hideAll: "Masquer Tout",
      expand: "Développer",
      collapse: "Réduire",
      next: "Suivant",
      back: "Retour",
      skip: "Passer",
      edit: "Modifier",
      upload: "Télécharger",
      remove: "Supprimer",
      optional: "Optionnel",
    },

    // Profil Utilisateur
    profile: {
      title: "Mon Profil",
      setup: "Configuration du Profil",
      edit: "Modifier le Profil",
      view: "Voir le Profil",
      completion: "Complétion du Profil",
      completeYourProfile: "Complétez Votre Profil",
      profileIncomplete: "Votre profil est incomplet. Complétez-le pour personnaliser votre expérience.",
      
      // Étapes de configuration
      steps: {
        basicInfo: "Informations de Base",
        birthDate: "Date de Naissance",
        location: "Localisation",
        avatar: "Photo de Profil",
      },
      
      // Champs du formulaire
      fullName: "Nom Complet",
      fullNamePlaceholder: "Entrez votre nom complet",
      fullNameHelper: "Utilisé pour les calculs de nom et les salutations personnalisées",
      
      dateOfBirth: "Date de Naissance",
      dateOfBirthHelper: "Requis pour des calculs de destinée précis",
      
      locationName: "Localisation",
      locationPlaceholder: "Ville, Pays",
      locationHelper: "Utilisé pour les calculs d'heures planétaires selon votre fuseau horaire",
      detectLocation: "Détecter Ma Position",
      detectingLocation: "Détection de la position...",
      
      language: "Langue Préférée",
      languageHelper: "Choisissez votre langue préférée pour l'application",
      
      timezone: "Fuseau Horaire",
      timezoneHelper: "Détecté automatiquement depuis votre localisation",
      
      // Avatar
      profilePicture: "Photo de Profil",
      uploadPhoto: "Télécharger une Photo",
      changePhoto: "Changer la Photo",
      removePhoto: "Supprimer la Photo",
      photoHelper: "JPG, PNG ou WebP (max 2Mo)",
      dragDropPhoto: "Glissez et déposez votre photo ici, ou cliquez pour parcourir",
      photoUploading: "Téléchargement...",
      photoUploadSuccess: "Photo téléchargée avec succès !",
      photoUploadError: "Échec du téléchargement de la photo. Veuillez réessayer.",
      photoTooLarge: "La photo est trop grande. Taille maximale de 2Mo.",
      photoInvalidType: "Type de fichier invalide. Veuillez télécharger JPG, PNG ou WebP.",
      
      // Messages
      saveSuccess: "Profil enregistré avec succès !",
      saveError: "Échec de l'enregistrement du profil. Veuillez réessayer.",
      setupComplete: "Configuration du profil terminée !",
      setupWelcome: "Bienvenue ! Configurons votre profil pour personnaliser votre expérience.",
      
      // Statut de complétion
      percentComplete: "% Complété",
      almostDone: "Presque terminé !",
      getStarted: "Commencez en complétant votre profil",
      
      // Actions
      completeSetup: "Terminer la Configuration",
      saveChanges: "Enregistrer les Modifications",
      cancelEdit: "Annuler",
      skipForNow: "Passer pour l'instant",
      
      // Vue du profil
      memberSince: "Membre depuis",
      lastSeen: "Dernière visite",
      noProfileYet: "Aucune information de profil pour le moment",
      createProfile: "Créer un Profil",
    },

    history: {
      title: "Historique",
      recentCalculations: "Calculs Récents",
      noCalculationsYet: "Aucun calcul pour le moment",
      clearAll: "Tout Effacer",
      confirmClear: "Effacer tout l'historique ? Cette action est irréversible.",
      favorites: "Favoris",
      recent: "Récent",
    },

    comparison: {
      title: "Comparer Deux Noms",
      firstName: "Premier Nom/Texte",
      secondName: "Deuxième Nom/Texte",
      elementalHarmony: "Harmonie Élémentaire",
      analysis: "Analyse",
      planet: "Planète",
      day: "Jour",
      bestHours: "Meilleures Heures",
    },

    dailyReflection: {
      title: "Réflexion Spirituelle Quotidienne",
      todaysReflection: "Réflexion du Jour",
      dailyBadge: "Quotidien",
      verseOfTheDay: "Verset du Jour",
      divineNameForReflection: "Nom Divin pour la Réflexion",
      optimalReflectionTimes: "Moments optimaux de réflexion",
      suggestedCounts: "Comptes suggérés",
      expandReflection: "Développer la réflexion",
      collapseReflection: "Réduire la réflexion",
    },

    // Suivi Istighfār du Ramadan
    ramadan: {
      title: "Défi Istighfār du Ramadan",
      subtitle: "Complétez 124 000 Istighfār ce Ramadan",
      arabic: "أَسْتَغْفِرُ اللهَ",
      transliteration: "Astaghfirullāh",
      contextNote: "Celui qui remplit son Ramadan d'Istighfār, Allah lui ouvrira une issue à chaque difficulté.",
      totalTarget: "Objectif Total",
      completed: "Complété",
      remaining: "Restant",
      todaysTarget: "Objectif du Jour",
      todaysProgress: "Progrès du Jour",
      remainingToday: "Restant Aujourd'hui",
      overallProgress: "Progrès Global",
      ramadanDay: "Jour de Ramadan",
      choosePlan: "Choisissez Votre Rythme",
      choosePlanDesc: "Sélectionnez comment répartir vos récitations sur le mois",
      planIntensive: "Intensif",
      planIntensiveDesc: "12 400/jour — Terminé en 10 jours",
      planBalanced: "Équilibré",
      planBalancedDesc: "6 200/jour — Terminé en 20 jours",
      planSteady: "Régulier",
      planSteadyDesc: "~4 134/jour — Sur les 30 jours",
      planLight: "Léger",
      planLightDesc: "3 100/jour — Rythme prolongé de 40 jours",
      planCustom: "Personnalisé",
      planCustomDesc: "Définissez votre propre objectif quotidien",
      customDailyGoal: "Votre objectif quotidien",
      selectPlan: "Choisir ce Plan",
      changePlan: "Changer de Plan",
      logSession: "Enregistrer une Session",
      sessionFajr: "Fajr",
      sessionDuha: "Ḍuḥā / Matin",
      sessionDhuhr: "Ẓuhr",
      sessionAsr: "ʿAṣr",
      sessionMaghrib: "Maghrib / Ifṭār",
      sessionIsha: "ʿIshāʾ / Tarāwīḥ",
      sessionCustom: "Autre",
      addCount: "Ajouter",
      completionMessage: "Mā shāʾ Allāh ! Vous avez complété le défi de 124 000 Istighfār !",
      completionDua: "Qu'Allah accepte votre Istighfār, pardonne vos péchés et vous accorde la facilité en toute chose. Āmīn.",
      todayComplete: "Objectif du jour atteint ✓",
      surplus: "Surplus",
      dayLog: "Journal du Jour",
      noEntries: "Aucune entrée aujourd'hui",
      signInPrompt: "Connectez-vous pour suivre votre Istighfār de Ramadan",
      signIn: "Se Connecter",
      ramadanBadge: "Ramadan",
      heatmapTitle: "Progrès Mensuel",
      streakDays: "Jours Consécutifs",
      quickTap: "Ajout Rapide",
      addChallenge: {
        title: "Ajouter un défi",
        subtitle: "Choisissez un type de défi de dhikr à suivre",
        salawatTitle: "Ṣalawāt",
        salawatDescription: "Bénédictions sur le Prophète ﷺ",
        propheticNamesTitle: "201 Noms Saints",
        propheticNamesDescription: "Abondance du rizq · pratique matinale de 7 jours",
        debtReliefTitle: "Wird Soulagement Dettes",
        debtReliefDescription: "1000× après ʿIshāʾ · verset qouranique",
        divineNameTitle: "Nom Divin",
        divineNameDescription: "Invocation des noms d'Allah",
        customTitle: "Wird Personnalisé",
        customDescription: "Votre propre pratique de dhikr",
        special: "Spécial",
        alreadyAdded: "Déjà ajouté",
        back: "Retour",
        chooseSalawat: "Choisir une Ṣalawāt",
        tapToPreview: "Touchez pour voir le texte complet",
        recommended: "Recommandé:",
        perDay: "jour",
        viewFullText: "Voir texte complet →",
        transliteration: "Translittération",
        showMeaning: "Afficher la signification",
        recommendedDailyTarget: "Cible quotidienne recommandée:",
        alreadyAddedButton: "Déjà ajouté",
        selectThisSalawat: "Choisir cette Ṣalawāt",
        chooseDivineName: "Choisir un Nom Divin",
        addDivineName: "Ajouter ce Nom",
        customWird: "Wird Personnalisé",
        titleLabel: "Titre",
        titlePlaceholder: "Mon Wird",
        arabicText: "Texte Arabe",
        dailyTarget: "Objectif quotidien",
        ramadanTarget: "Objectif Ramadan",
        addCustomWird: "Ajouter le Wird",
        steps: "Étapes:",
        names: "Noms",
        spiritualPurpose: "Objectif spirituel:",
      },
    },

    // 201 Noms Saints du Prophète ﷺ
    propheticNames: {
      title: "201 Noms Saints du Prophète Muḥammad ﷺ",
      subtitle: "Pratique d'Abondance Rizq · 7 Jours le Matin",
      shortTitle: "201 Noms Saints",
      tradition: "Dalāʾilu l-Khayrāt · Imam Muḥammad al-Jazūlī",
      authorization: "Cherno Moussa Yero Sy — Maître Spirituel de l'Ordre Tijaniyya",
      description: "Récitez Allāhu Jāmiʿu 180× suivi des 201 Noms Saints avec Ṣalla-llāhu ʿalayhi wa sallam. Pratiquez une fois par jour le matin pendant 7 jours.",
      promise: "Des changements incommensurables dans votre rizq, abondance et provision divine se manifesteront.",
      
      // Durée & Sessions
      duration: "Durée",
      days: "jours",
      sessions: "Sessions",
      sessionsPerDay: "Une fois par jour (Matin)",
      estimatedTime: "Temps estimé",
      estimatedTimeValue: "25-35 minutes par session",
      
      // Suivi 7 jours
      day: "Jour",
      morning: "Matin",
      evening: "Soir",
      dayComplete: "Jour terminé",
      sessionsComplete: "jours",
      complete: "Terminé",
      onceDaily: "Une fois par jour (Matin)",
      startNext: "Commencer la pratique du jour",
      congratulations: "Félicitations!",
      completedAllDays: "Vous avez complété les 7 jours de pratique!",
      startAgain: "Recommencer",
      continueDaily: "Continuer chaque jour",
      dailyPractice: "Pratique quotidienne",
      cycles: "Cycles",
      totalPractices: "Total",
      todayComplete: "La pratique d'aujourd'hui est terminée!",
      comeBackTomorrow: "Revenez demain pour votre prochaine session",
      startTodaysPractice: "Commencer la pratique du jour",
      resetAll: "Tout réinitialiser",
      
      // Étapes de pratique
      practiceSteps: "Étapes de la pratique",
      stepPrefix: "Étape",
      step1: "Allāhu Jāmiʿu",
      step1Count: "180×",
      step2: "Les 201 Noms Saints",
      step2Note: "Avec Ṣalla-llāhu ʿalayhi wa sallam après chaque nom",
      step3: "Duʿāʾ de clôture",
      step3Note: "De Dalāʾilu l-Khayrāt",
      stepsForSession: "Étapes de cette session:",
      the201HolyNames: "Les 201 Noms Saints",
      withSallaAfterEach: "Avec Ṣalla-llāhu ʿalayhi wa sallam après chaque nom",
      fromDalail: "De Dalāʾilu l-Khayrāt",
      beginBismillah: "Commencer بسم الله",
      step2The201Names: "Étape 2: Les 201 Noms",
      step3ClosingDua: "Étape 3: Duʿāʾ de clôture",
      
      // Modal de pratique
      recite: "Récitez",
      tapToCount: "Toucher pour compter",
      reset: "Réinitialiser",
      continueToNames: "Continuer aux Noms",
      continueToDua: "Continuer au Duʿāʾ",
      completeSession: "Terminer la session",
      close: "Fermer",
      
      // Allāhu Jāmiʿu
      yaJamiuArabic: "اللهُ جَامِعُ",
      yaJamiuTranslit: "Allāhu Jāmiʿu",
      yaJamiuMeaning: "Allah est le Rassembleur, le Puissant",
      
      // Liste des noms
      theNames: "Les 201 Noms",
      hideMeaning: "Masquer le sens",
      showMeaning: "Afficher le sens",
      salawatAfterName: "Ṣalla-llāhu ʿalayhi wa sallam",
      
      // Duʿāʾ d'ouverture
      openingDua: "Al-Fātiḥa (L'Ouverture)",
      
      // Duʿāʾ de clôture
      closingDua: "Duʿāʾ de clôture",
      closingDuaSource: "Tirmidhī · Ḥasan",
      
      // Completion
      mashaAllah: "Māshāʾ Allāh!",
      sessionCompleted: "complété!",
      completedBadge: "complété!",
      nextSession: "Prochain:",
      next: "Prochain:",
      practiceComplete: "Pratique terminée!",
      tonightSession: "Ce soir:",
      tonight: "Ce soir:",
      eveningSession: "Session du soir",
      tomorrowMorning: "Matin",
      
      // Source & Autorisation
      source: "Source",
      authorizationLabel: "Autorisation",
      
      // Modal d'ajout
      specialPractice: "Pratique spéciale",
      special: "Spécial",
      sevenDayPractice: "7 jours le matin",
      start7Day: "Commencer le défi de 7 jours",
      
      // Carte
      remove: "Supprimer",
      removeChallenge: "Supprimer ce défi?",
      progressWillBeLost: "Votre progression sera perdue.",
      
      // Partage
      share: "Partager",
      inviteFriends: "Inviter des amis",
      shareInvite: "Partager cette pratique",
      shareTitle: "201 Noms Saints du Prophète Muḥammad ﷺ",
      shareText: "Rejoignez la pratique de 7 jours pour l'abondance du Rizq! Récitez les 201 Noms Saints du Prophète Muḥammad ﷺ chaque matin pour les bénédictions divines.",
      shareVia: "Partager via",
      whatsapp: "WhatsApp",
      telegram: "Telegram",
      twitter: "X (Twitter)",
      copyLink: "Copier le lien",
      linkCopied: "Lien copié!",
      shareFailed: "Impossible de partager",
    },

    // Wird pour le Soulagement des Dettes
    debtRelief: {
      title: "Wird pour le Soulagement des Dettes",
      shortTitle: "Soulagement Dettes",
      subtitle: "1000× Après la Prière ʿIshāʾ",
      quranicWird: "Wird Qourʾānique",
      source: "Sourate Fāṭir 35:17 · Sourate Ibrāhīm 14:20",
      timing: "Après la Prière ʿIshāʾ",
      dailyCount: "1000 récitations",
      estimatedTime: "15-20 minutes",
      description: "Récitez ce verset sacré du Qourʾān 1000 fois après la prière ʿIshāʾ quotidiennement pour le soulagement des dettes et le remboursement rapide.",
      purpose: "Soulagement des dettes et remboursement rapide (faraj min al-dayn)",
      
      // Le verset sacré
      arabic: "وَمَا ذَٰلِكَ عَلَى اللهِ بِعَزِيزٍ",
      transliteration: "Wamā dhālika ʿalā llāhi bi-ʿAzīzin",
      meaning: "Et cela n'est pas difficile pour Allah",
      
      // Signification spirituelle
      spiritualMeaning: "Ce verset affirme une confiance absolue dans le pouvoir illimité d'Allah. Ce qui peut sembler impossible pour nous — y compris la liberté des dettes — est sans effort pour Allah. En invoquant répétitivement cette vérité, nous alignons nos cœurs avec la capacité Divine et invitons un soulagement miraculeux.",
      
      // Bienfaits
      benefits: "Bienfaits",
      benefit1: "Soulagement du fardeau financier et des dettes",
      benefit2: "Opportunités de remboursement rapides et inattendues",
      benefit3: "Ouverture de nouvelles sources de provision",
      benefit4: "Paix du cœur concernant les questions financières",
      benefit5: "Confiance renforcée dans le pouvoir d'Allah",
      
      // Pratique
      startDailyWird: "Commencer le wird quotidien",
      continueWird: "Continuer le wird",
      wirdComplete: "Wird quotidien terminé!",
      
      // Carte & Modale
      remove: "Supprimer",
      removeChallenge: "Supprimer ce défi?",
      progressWillBeLost: "Votre progression sera perdue.",
    },

    // Compteur de Tasbih numérique
    tasbih: {
      title: "Compteur Tasbih",
      tapToCount: "Toucher pour compter",
      reset: "Réinitialiser",
      complete: "Terminé!",
      logProgress: "Enregistrer",
      hint: "Vous pouvez fermer à tout moment — votre compte sera sauvegardé",
      openTasbih: "Ouvrir Tasbih",
      remove: "Supprimer",
      removeChallenge: "Supprimer ce défi?",
      progressWillBeLost: "Votre progression sera perdue.",
    },

    guidance: {
      relatedQuranicVerses: "Versets Coraniques Associés",
      divineNames: "Asmā' al-Ḥusnā (Les Beaux Noms)",
      letterValues: "Valeurs des Lettres",
      sumAllValues: "Somme de Toutes les Valeurs",
      calculateDigitalRoot: "Calculer la Racine Numérique",
      elementDiscovery: "Découverte de l'Élément",
      discoverSignificance: "Découvrez la signification numérologique de votre nom à travers les sciences islamiques traditionnelles",
      howLettersConvert: "Comment chaque lettre arabe se convertit en nombres sacrés",
      fourElements: "Les quatre éléments classiques et votre composition spirituelle",
      sacredConnections: "Connexions sacrées et résonances divines dans vos nombres",
      totalOfAllLetters: "Total de toutes les valeurs des lettres",
      spiritOfTheCycle: "Esprit du cycle",
    },

    calculator: {
      title: "Calculatrice",
      subtitle: "Numérologie Islamique Basée sur le Système Abjad",
      calculateLetterValues: "Calculer les Valeurs des Lettres",
      enterYourName: "Entrez Votre Nom",
      namePlaceholder: "محمد",
      calculateButton: "Calculer",
      latinText: "Texte Latin (Anglais/Français)",
      arabicText: "Texte Arabe",
      autoTransliterates: "Translittération automatique vers l'arabe • Prend en charge les noms EN/FR",
      showKeyboard: "Afficher le Clavier",
      hideKeyboard: "Masquer le Clavier",
      examples: "Exemples",
      
      // Abjad System Labels
      maghribi: "Maghribi",
      mashriqi: "Mashriqi",
      
      // Info Section
      whatYouLearn: "Ce Que Vous Allez Apprendre",
      discoverSignificance: "Découvrez la signification numérologique de votre nom à travers les sciences islamiques traditionnelles",
      numericalValues: "Valeurs Numériques",
      numericalValuesDesc: "Comment chaque lettre arabe se convertit en nombres sacrés",
      elementalForces: "Forces Élémentaires",
      elementalForcesDesc: "Les quatre éléments classiques et votre composition spirituelle",
      hiddenPatterns: "Motifs Cachés",
      hiddenPatternsDesc: "Connexions sacrées et résonances divines dans vos nombres",
      
      // Key Metrics
      keyMetrics: "Métriques Clés",
      totalOfAllLetterValues: "Total de toutes les valeurs des lettres",
      digitalRoot: "Racine numérique (1-9)",
      remainderMod4: "Reste mod 4",
      spiritOfTheCycle: "Esprit du cycle",
      
      // Step by Step
      stepByStep: "Calcul Étape par Étape",
      reduceToSingleDigit: "Réduire à un seul chiffre",
      dominantElement: "Élément dominant",
      totalAbjadValue: "Valeur Abjad Totale",

      kabir: {
        title: "Kabīr (الكبير)",
        subtitle: "Total Grand",
        description: "La signature énergétique totale de votre nom",
        label: "KABĪR (GRAND)",
      },
      saghir: {
        title: "Ṣaghīr (الصغير)",
        subtitle: "Essence Spirituelle",
        description: "La qualité spirituelle fondamentale, réduite à un chiffre unique (1-9)",
        label: "ṢAGHĪR (PETIT)",
      },
      hadath: {
        title: "Ḥadath (الحدث)",
        subtitle: "Élément",
        description: "L'élément naturel dominant",
        label: "ḤADATH (CYCLE)",
      },
      ruh: {
        title: "Rūḥ Ḥadad (روح الحدد)",
        subtitle: "Nombre de l'Âme",
        description: "Le pont entre l'apparence extérieure et l'essence intérieure",
        label: "RŪḤ ḤADAD",
      },
      
      // Mode Switcher
      knowledgeLevel: "Niveau de Connaissance",
      knowledgeLevelHelp: "Qu'est-ce?",
      knowledgeLevelInfo: "Choisissez votre niveau:\n\n🔰 Débutant: Apprenez les bases du calcul Abjad\n🎓 Intermédiaire: Explorez Burj, planètes et noms divins\n👑 Érudit: Accédez aux outils de recherche avancés",
      beginner: "Débutant",
      intermediate: "Intermédiaire",
      scholar: "Érudit",
      learnBasics: "Apprendre",
      deeperAnalysis: "Plus profond",
      fullResearch: "Recherche",
      
      // Burj (Zodiac)
      burjTitle: "Burj (Signe du Zodiaque)",
      burjSubtitle: "Astronomie islamique classique",
      calculation: "Calcul",
      element: "Élément",
      modality: "Modalité",
      planetaryRuler: "Maître planétaire",
      temperament: "Tempérament",
      symbolism: "Symbolisme",
      spiritualQuality: "Qualité spirituelle",
      classicalReference: "Référence classique",
      
      // Planetary Signature
      planetarySignature: "Signature Planétaire",
      sevenPlanets: "Les 7 planètes classiques",
      planet: "Planète",
      dayOfWeek: "Jour de la semaine",
      hourNumber: "Numéro d'heure",
      metal: "Métal",
      color: "Couleur",
      dhikrRecommendation: "Recommandation de Dhikr",
      divineName: "Nom Divin",
      count: "Nombre",
      timing: "Moment",
    },
    
    // Elemental Composition
    elementalComposition: {
      title: "Composition Élémentaire",
      letters: "lettres",
    },
    
    // Sacred Numbers
    sacredNumbers: {
      title: "Résonance des Nombres Sacrés",
      divisibleBy: "Divisible par",
      divinePerfection: "Perfection divine",
      quranicHarmony: "Harmonie coranique",
      divineNames: "99 Noms Divins",
      nearest: "Le plus proche",
    },
    
    // Numerical Essence
    numericalEssence: {
      title: "Votre Essence Numérique",
      coreNumberMeaning: "Signification du Nombre Central :",
      theNumber: "Le Nombre",
      dominantElement: "Élément Dominant :",
      
      // Number meanings
      number1: "Leadership, indépendance, esprit pionnier",
      number2: "Partenariat, équilibre, coopération et harmonie",
      number3: "Créativité, expression, joie et communication",
      number4: "Stabilité, fondation, sécurité et structure",
      number5: "Liberté, aventure, changement et adaptabilité",
      number6: "Service, responsabilité, soin et amour",
      number7: "Sagesse, spiritualité, introspection et mystère",
      number8: "Pouvoir, abondance, maîtrise matérielle et succès",
      number9: "Achèvement, amour universel, sagesse et compassion",
      
      // Element descriptions
      fireDesc: "Passionné, énergique, transformateur, orienté vers l'action",
      waterDesc: "Intuitif, émotionnel, réfléchi, fluide et adaptable",
      airDesc: "Communicatif, intellectuel, social, esprit vif",
      earthDesc: "Ancré, pratique, fiable, solide et stable",
      
      // Guidance message
      guidanceMessage: "Ces nombres et éléments offrent une guidance pour l'auto-réflexion. Rappelez-vous que vous êtes plus que des nombres×vos choix, valeurs et caractère façonnent votre destin.",
    },
    
    // Celestial Signature
    celestialSignature: {
      title: "Signature Céleste",
      planet: "Planète",
      day: "Jour",
      bestHours: "Meilleures Heures",
      footerNote: "Basé sur la cosmologie islamique classique suivant les Quatre Natures (Ṭabāʾiʿ Arbaʿa) • Pour réflexion spirituelle uniquement",
    },
    
    // Disclaimer
    disclaimer: {
      title: "Outil Éducatif :",
      message: "Cette application explore les sciences islamiques traditionnelles du ʿIlm al-Ḥurūf et du ʿIlm al-ʿAdad pour une réflexion culturelle et historique. Elle n'est pas destinée à la divination, aux conseils médicaux ou aux jugements religieux. Consultez toujours des érudits qualifiés pour des conseils religieux.",
    },

    elements: {
      fire: "Feu",
      water: "Eau",
      air: "Air",
      earth: "Terre",
      fireDesc: "Chaud et Sec - Passionné et énergique",
      waterDesc: "Froid et Humide - Émotionnel et intuitif",
      airDesc: "Chaud et Humide - Intellectuel et communicatif",
      earthDesc: "Froid et Sec - Stable et ancré",
    },

    // Profils de Tempérament Améliorés (Psychologie + Carrière)
    temperament: {
      title: "Profil de Tempérament",
      psychologyTitle: "Profil Psychologique",
      careerTitle: "Guidance Professionnelle",
      
      traits: "Traits Principaux",
      strengths: "Forces",
      watchOuts: "Points de Vigilance",
      balanceTips: "Conseils d'Équilibre",
      
      careerGoodFits: "Carrières Adaptées",
      careerAvoid: "Peut Trouver Difficile",
      careerRationale: "Pourquoi Cela Convient",
      
      // Note: Les données individuelles de tempérament sont dans temperamentProfiles.ts
      // Cette section contient uniquement les étiquettes de l'interface utilisateur
    },

    lifePath: {
      title: "Numérologie du Chemin de Vie",
      lifePathNumber: "Nombre du Chemin de Vie",
      expressionNumber: "Nombre d'Expression",
      soulUrge: "Nombre de l'Élan de l'Âme",
      personality: "Nombre de Personnalité",
      destiny: "Nombre de Destinée",
      personalYear: "Année Personnelle",
      personalMonth: "Mois Personnel",
      karmicDebt: "Nombres de Dette Karmique",
      sacredNumbers: "Nombres Sacrés",
      cycle: "Cycle de Vie",
      
      // Sections de Base vs Externes
      coreNumbers: "Vos Nombres de Vie Fondamentaux",
      coreNumbersDesc: "Ces quatre nombres révèlent votre personnalité fondamentale, vos désirs intérieurs, comment les autres vous voient et le but de votre vie. Calculés uniquement à partir de votre nom personnel.",
      externalInfluences: "Influences Externes",
      maternalInfluence: "INFLUENCE MATERNELLE",
      maternalInfluenceDesc: "Ce nombre montre comment l'énergie de votre mère affecte votre chemin externe et les conditions qui vous entourent.",
      maternalInfluenceExplanation: "Le nom de votre mère révèle les conditions externes et les influences héritées qui entourent votre chemin, mais ne définissent pas votre identité fondamentale.",

      // Étiquettes de nombres dans les cartes
      lifePathLabel: "NOMBRE DU CHEMIN DE VIE",
      expressionLabel: "NOMBRE D'EXPRESSION",
      soulUrgeLabel: "NOMBRE DE L'ÉLAN DE L'ÂME",
      personalityLabel: "NOMBRE DE PERSONNALITÉ",
      destinyLabel: "NOMBRE DE DESTINÉE",

      // Explications simples
      lifePathSimple: "Calculé à partir de votre date de naissance. Le plan de votre âme et le but principal que vous êtes venu accomplir.",
      expressionSimple: "Calculé à partir de votre nom. Comment vous exprimez votre chemin de vie à travers vos talents et personnalité uniques.",
      soulUrgeSimple: "Votre motivation intérieure. Ce que vous recherchez dans la vie et ce qui vous apporte une vraie joie et satisfaction.",
      personalitySimple: "Votre visage public. Comment vous apparaissez aux autres et l'énergie que vous dégagez quand vous entrez dans une pièce.",
      destinySimple: "Votre but de vie et objectif ultime. Ce que vous êtes destiné à accomplir et donner au monde.",

      // Titres de sections
      whatItMeans: "Ce que cela signifie :",
      important: "Important :",
      externalEnergy: "Énergie Externe",
      importantNote: "Cela représente ce qui vous entoure, pas qui vous êtes. Vos nombres fondamentaux ci-dessus définissent votre vraie identité.",

      // Boîtes de guide rapide
      quickGuideTitle: "Guide Rapide :",
      lifePathQuick: "Vos talents de base et forces naturelles. Les capacités avec lesquelles vous êtes né.",
      soulUrgeQuick: "Ce qui vous rend vraiment heureux. Vos désirs les plus profonds et épanouissement intérieur.",
      personalityQuick: "L'impression que vous donnez. Comment les gens vous voient et vous vivent au premier abord.",
      destinyQuick: "Votre but de vie et ce que vous êtes destiné à accomplir. Votre objectif ultime.",

      // Section Cycle
      whereYouAreNow: "Où Vous Êtes Maintenant",
      currentLifePhase: "Phase de Vie Actuelle",
      phaseOf9: "Phase {number} sur 9",
      yearTheme: "Année {position}/9 :",
      focusAreas: "Domaines de Focus :",
      yourAge: "Votre Âge",
      years: "{age} ans",
      yearMonthEnergy: "L'Énergie de Cette Année et de Ce Mois",
      personalYearLabel: "Année Personnelle",
      personalMonthLabel: "Mois Personnel",
      overallEnergy: "Énergie globale",
      monthFlow: "Le flux de ce mois",

      // Forces et Défis
      strengthsAndGrowth: "Vos Forces et Opportunités de Croissance",
      strengthsIntro: "Chaque nombre de 1 à 9 représente différentes qualités de vie. Vos forces montrent ce en quoi vous excellez naturellement. Les domaines de croissance montrent où vous pouvez vous développer davantage.",
      whatYouAreStrongAt: "Ce en Quoi Vous Êtes Fort",
      whereYouCanGrow: "Où Vous Pouvez Grandir",
      strength: "Force {number}",
      growthArea: "Domaine de Croissance {number}",
      strengthDesc1: "Ce qui vous rend capable et fiable",
      strengthDesc2: "Ce qui vous donne un avantage",
      strengthDesc3: "Votre talent naturel",
      strengthDesc4: "Ce en quoi vous excellez",
      growthDesc1: "Une qualité à développer",
      growthDesc2: "Un domaine à améliorer",
      growthDesc3: "Quelque chose sur quoi travailler",
      growthDesc4: "Une leçon de vie clé",
      currentStrength: "En Ce Moment (Votre Force Actuelle) :",
      currentStrengthDesc: "C'est la force principale qui vous soutient en cette saison",
      currentChallenge: "En Cours de Travail (Votre Focus Principal) :",
      currentChallengeDesc: "C'est ce que la vie vous enseigne maintenant×embrassez-le !",

      // Nombres Spéciaux
      specialNumbers: "Nombres Spéciaux et Leçons",
      lessonsToLearn: "Leçons à Apprendre",
      lessonsDesc: "Ces nombres représentent les leçons que votre âme veut apprendre dans cette vie. Ce ne sont pas des obstacles × ce sont des opportunités de croissance.",
      blessedNumbers: "Nombres Bénis",
      blessedDesc: "Ce sont des nombres puissants liés à la tradition spirituelle. Ils apportent des bénédictions spéciales et une protection spirituelle à votre vie.",

      // Archétypes de Nombres (1-11, 22)
      numberArchetypes: {
        1: { title: "Le Leader", meaning: "Vous êtes naturellement indépendant et poussé à créer de nouvelles choses. Vous préférez prendre vos propres décisions." },
        2: { title: "Le Pacificateur", meaning: "Vous excellez à rassembler les gens et à trouver l'harmonie. Vous êtes sensible aux sentiments des autres." },
        3: { title: "Le Créateur", meaning: "Vous vous exprimez facilement et apportez de la joie partout où vous allez. La communication est votre force." },
        4: { title: "Le Bâtisseur", meaning: "Vous êtes fiable et pratique. Vous construisez des fondations solides dans tout ce que vous faites." },
        5: { title: "L'Explorateur", meaning: "Vous aimez la liberté et la variété. Vous vous adaptez rapidement et apprenez d'expériences diverses." },
        6: { title: "Le Soignant", meaning: "Vous êtes responsable et voulez naturellement aider les autres. La famille et le service vous tiennent profondément à cœur." },
        7: { title: "Le Penseur", meaning: "Vous êtes analytique et spirituel. Vous cherchez une compréhension plus profonde des mystères de la vie." },
        8: { title: "Le Réalisateur", meaning: "Vous êtes ambitieux et concentré sur le succès. Vous avez de fortes capacités commerciales et de leadership." },
        9: { title: "L'Humanitaire", meaning: "Vous vous souciez du monde et voulez faire une différence positive. La compassion vous guide." },
        11: { title: "Le Visionnaire", meaning: "Vous voyez au-delà des choses ordinaires. Vous inspirez les autres et portez des messages spirituels." },
        22: { title: "Le Maître Bâtisseur", meaning: "Vous avez de grandes ambitions pour créer quelque chose de durable. Vous transformez les rêves en réalité à grande échelle." },
      },

      descriptions: {
        lifePath: "Le voyage principal et le but de votre âme",
        soulUrge:
          "Les désirs les plus profonds de votre cœur et vos motivations intérieures",
        personality:
          "Comment les autres vous perçoivent ; votre expression extérieure",
        destiny:
          "Votre mission de vie ultime et votre but divin",
        personalYear:
          "Le thème principal et l'énergie de votre année en cours",
        personalMonth: "L'énergie mensuelle et le focus",
      },

      // Améliorations Phase 1
      elementalComposition: "Votre Composition Élémentaire",
      elementalCompositionDesc: "Basé sur vos quatre nombres fondamentaux, voici l'équilibre élémentaire dans votre chemin de vie :",
      dominantElement: "Élément Dominant",
      elementalBalance: "Équilibre Élémentaire",
      
      elementDescriptions: {
        fire: "Le Feu apporte passion, initiative et dynamisme. Vous êtes motivé à agir et diriger.",
        earth: "La Terre apporte stabilité, praticité et ancrage. Vous construisez des fondations durables.",
        air: "L'Air apporte intellect, communication et adaptabilité. Vous prospérez sur les idées et les connexions.",
        water: "L'Eau apporte émotion, intuition et sensibilité. Vous naviguez la vie à travers le ressenti.",
      },

      careerGuidance: "Orientation Professionnelle",
      careerGuidanceIntro: "Basé sur votre Nombre de Chemin de Vie, voici des carrières qui s'alignent avec vos forces naturelles :",
      idealCareers: "Carrières Qui Vous Correspondent Bien",
      careersToAvoid: "Environnements Qui Peuvent Vous Défier",
      whyTheseFit: "Pourquoi ces carrières vous conviennent :",
      
      balanceTips: "Conseils d'Équilibre et de Soin Personnel",
      balanceTipsIntro: "Moyens concrets pour maintenir l'équilibre et honorer l'énergie de votre Chemin de Vie :",
      
      shadowWork: "Travail d'Ombre et Opportunités de Croissance",
      shadowWorkIntro: "Chaque nombre a ses défis. Ce ne sont pas des défauts—ce sont des opportunités de croissance :",
      growthOpportunities: "Domaines à Surveiller et Développer",
      
      practicalGuidance: "Guidance Pratique",
      pathSummary: "Votre Chemin en Bref",
      spiritualPractice: "Pratique Spirituelle",
      quranicConnection: "Connexion Coranique",
      weeklyActions: "Actions Hebdomadaires",
      shadowToAvoid: "Motif Principal à Surveiller",
      
      // Améliorations Phase 2
      quranicWisdom: "Sagesse Coranique et Attributs Divins",
      quranicWisdomDesc: "Découvrez comment votre Chemin de Vie se connecte aux versets sacrés et aux noms divins :",
      verse: "Verset Coranique",
      divineAttribute: "Attribut Divin (Asma ul-Husna)",
      spiritualMeaning: "Signification Spirituelle pour Votre Chemin",
      dailyPractice: "Pratique Spirituelle Quotidienne",
    },

    // Ilm Huruf Panel
    ilmHuruf: {
      // Title and subtitle
      title: "ʿIlm al-Ḥurūf - Guide de Vie Pratique",
      subtitle: "Choisissez un mode de guidance et découvrez des perspectives adaptées à votre recherche",
      
      // Mode Buttons
      weeklyGuidance: "Guide Hebdomadaire",
      nameDestiny: "Destinée du Nom",
      compatibility: "Compatibilité",
      lifePath: "Chemin de Vie",
      divineTiming: "Moment Divin",
      
      // Titles
      generateWeeklyGuidance: "Générez Votre Guide Hebdomadaire",
      discoverNameDestiny: "Découvrez la Destinée de Votre Nom",
      analyzeTwoSouls: "Analysez Deux Âmes",
      calculateLifePath: "Calculez Votre Chemin de Vie",
      currentPlanetaryInfluence: "Influence Planétaire Actuelle",
      
      // Descriptions
      weeklyGuidanceDesc: "Guidance réflexive alignée sur les influences planétaires",
      nameDestinyDesc: "Découvrez l'essence spirituelle encodée dans votre nom",
      compatibilityDesc: "Explorez l'harmonie et le potentiel entre deux individus",
      lifePathDesc: "Comprenez la signification numérologique de votre chemin de naissance",
      divineTimingDesc: "Alignez vos actions avec les moments célestes",
      
      // Labels
      nameLatin: "Nom - Latin (Anglais/Français)",
      nameArabic: "Nom - Arabe",
      yourNameLatin: "Votre Nom - Latin (Anglais/Français)",
      yourNameArabic: "Votre Nom - Arabe",
      firstPersonLatin: "Première Personne - Latin (Anglais/Français)",
      firstPersonArabic: "Première Personne - Arabe",
      secondPersonLatin: "Deuxième Personne - Latin (Anglais/Français)",
      secondPersonArabic: "Deuxième Personne - Arabe",
      motherNameLatin: "Nom de la Mère - Latin (optionnel)",
      motherNameArabic: "Nom de la Mère - Arabe (optionnel)",
      birthDate: "Date de Naissance",
      birthDateOptional: "Date de Naissance (Optionnel - pour date d'ancrage)",
      birthDateUsage: "Utilisé pour calculer vos cycles personnels. Par défaut aujourd'hui si non fourni.",
      location: "Localisation (optionnel)",
      optional: "Optionnel",
      optionalForRestSignal: "Optionnel - pour Signal de Repos",
      restSignalNote: "Active la détection personnalisée du Signal de Repos",
      
      // Mother's Name specific
      addMotherName: "Ajouter le Nom de la Mère (optionnel)",
      motherNameOptional: "Nom de la Mère (optionnel)",
      motherNameRequired: "Nom de la Mère (Requis)",
      motherNameRequiredExplanation: "Le Chemin de Vie est personnel à VOUS. Le nom de votre mère garantit que cette lecture reflète votre voyage unique, pas seulement un modèle général pour tous ceux qui portent votre nom.",
      timingRequiredExplanation: "Divine Timing est calculé pour VOS influences planétaires spécifiques. Le nom de votre mère personnalise ces calculs à votre plan spirituel unique.",
      clearMotherName: "Effacer",
      latinAutoTransliterates: "Latin (Anglais/Français) - Translittération automatique",
      arabicDirectInput: "Arabe - Saisie directe",
      whyMotherRequired: "Pourquoi le nom de la mère est-il requis ?",
      
      // Placeholders
      namePlaceholderEn: "ex : Fatima, Ibrahima, Amadou",
      motherNamePlaceholderEn: "p.ex., Fatima, Khadija, Aisha",
      namePlaceholderAr: "محمد",
      motherNamePlaceholderAr: "فاطمة",
      
      // Name autocomplete
      nameLatinLabel: "Nom (alphabet latin)",
      nameHelperText: "Saisissez votre nom en lettres latines - nous afficherons l'équivalent en arabe",
      nameHelperTextSuggestions: "Commencez à taper pour voir les suggestions en arabe",
      selectArabicName: "Sélectionnez le nom arabe",
      noMatchesFound: "Aucune correspondance trouvée",
      typeToSearch: "Tapez pour rechercher des noms...",
      
      // Autofill toggle
      autofillToggle: {
        label: "Utiliser mes informations de profil",
        description: "Désactivez pour calculer pour la famille ou les amis"
      },
      
      // Messages
      autoTransliterate: "Translittération automatique vers l'arabe • Prend en charge les noms EN/FR",
      confidence: "Confiance",
      showKeyboard: "Afficher le Clavier",
      hideKeyboard: "Masquer le Clavier",
      noneInYourName: "Aucun dans votre nom",
      
      // Buttons
      analyzeButton: "Analyser",
      analysisError: "Erreur d'Analyse",
      
      // Weekly Results
      yourSpiritualProfile: "Votre Profil Spirituel",
      ruh: "Rūḥ",
      element: "Élément",
      currentHarmony: "Harmonie Actuelle",
      allForcesAligned: "Toutes les forces alignées×excellent flux",
      mixedSignals: "Signaux mélangés×procédez avec prudence",
      challengingEnergies: "Énergies difficiles×la patience est nécessaire",
      dominantForce: "Force Dominante",
      weekAtAGlance: "Vue d'ensemble de la semaine",
      peakDayThisWeek: "Jour Culminant de la Semaine",
      bestForInitiatives: "Excellent pour les initiatives importantes",
      focusDay: "Jour Focus",
      forDeepWorkAndPlanning: "Pour le travail profond et la planification",
      harmony: "Harmonie",
      planet: "Planète",
      energyReturnSpeedsThisWeek: "Vitesses de Retour d'Énergie Cette Semaine",
      whenActionsManifestResults: "Quand les actions manifestent leurs résultats (concept classique: Irtiṭāb)",
      sameDay: "Le même jour",
      fewHours: "Quelques heures",
      twoDays: "2-3 jours",
      oneToTwoWeeks: "1-2 semaines",
      deepRestNeeded: "Repos Profond Nécessaire",
      restSignal: "Signal de Repos (Infisāl)",
      criticalLowEnergy: "Énergie critique - honorer ce signal de guérison de votre corps et de votre esprit.",
      lowHarmonyPause: "Harmonie faible + énergie {planet} = Temps de pause, pas de poussée.",
      restPractices: "Pratiques de Repos (choisissez une):",
      betterDaysThisWeek: "Meilleurs Jours Cette Semaine:",
      rescheduleImportantTasks: "Reportez les tâches importantes aux jours d'harmonie élevée pour de meilleurs résultats.",
      classicalWisdom: "Sagesse classique:",
      stillnessBeforeMotion: "Al-sukūn qabl al-ḥaraka",
      stillnessExplanation: "(L'immobilité avant le mouvement apporte l'action bénie)",
      leadership: "Leadership & Vitalité",
      emotions: "Émotions & Intuition",
      action: "Action & Courage",
      communication: "Communication & Apprentissage",
      expansion: "Expansion & Sagesse",
      love: "Amour & Harmonie",
      structure: "Structure & Discipline",
      ruhPhase: "Phase Rūḥ",
      phase: "Phase",
      energyBand: "Bande d'Énergie",
      allTipsForTheDay: "Tous les Conseils du Jour",
      planMindfully: "Planifiez avec attention",
      
      // Energy return speed badges
      instant: "INSTANTANÉ",
      quick: "RAPIDE",
      gradual: "GRADUEL",
      delayed: "DIFFÉRÉ",
      restSignalBadge: "SIGNAL DE REPOS",
      deepRest: "REPOS PROFOND",
      
      // Speed descriptions (lowercase for display)
      instantLower: "instantané",
      quickLower: "rapide",
      gradualLower: "graduel",
      delayedLower: "différé",
      sameDayParens: "(le même jour)",
      fewHoursParens: "(quelques heures)",
      twoDaysParens: "(2-3 jours)",
      oneToTwoWeeksParens: "(1-2 semaines)",
      
      // Footer message
      reflectiveGuidance: "Guidance réfléchie pour planifier votre semaine. Utilisez votre propre jugement. Ceci est un assistant de rythme et de planification, pas une prédiction ou un conseil médical/financier.",
      
      // Error messages
      unableToGenerateWeekly: "Impossible de générer les prévisions hebdomadaires. Veuillez entrer un nom arabe valide.",
      
      // Day badges
      best: "Meilleur",
      gentle: "Doux",
      focus: "Focus",
      
      // Day details
      yourGuidanceForThisDay: "Votre Guidance pour Ce Jour",
      energyReturnWisdom: "Sagesse du Retour d'Énergie",
      returnSpeed: "Vitesse de Retour:",
      todaysPractice: "Pratique d'Aujourd'hui:",
      classicalTeaching: "Enseignement classique (Leçon 25):",
      classicalQuote: "Man zaraʿa khayran ḥaṣada khayran",
      classicalMeaning: "(Qui plante le bien, récolte le bien) × Le moment de la moisson dépend de la graine et de la saison.",
      optimalSequence: "Séquence Optimale pour {day}",
      timeWindows: "Fenêtres de Temps",
    },
    
    // Balance Meter
    balanceMeter: {
      yourBalanceToday: "Votre Équilibre Aujourd'hui",
      balance: "Équilibre",
      conflict: "Conflit",
      moderate: "Modéré",
      harmony: "Harmonie",
      tooMuch: "Trop:",
      needMore: "Besoin de plus:",
      quickFix: "Solution Rapide",
      severeConflict: "Conflit Sévère",
      mild: "Léger",
      startTimer: "Démarrer le Minuteur de {duration} Min",
      focusOnPractice: "Concentrez-vous sur votre pratique...",
      stopTimer: "Arrêter le Minuteur",
      recheckBalance: "Revérifier l'équilibre: 2 heures après avoir terminé la Solution Rapide",
      scoreUpdates: "Mise à jour du score: Minuit (nouveau jour planétaire commence)",
      validFor: "Valide pour: Aujourd'hui seulement - chaque jour apporte un nouvel équilibre élémentaire",
      whyThisScore: "Pourquoi ce score:",
      whatDoesScoreMean: "Que signifie mon score?",
      scoreGuide: "Guide des Scores",
      harmonyRange: "70-100: Harmonie",
      harmonyDesc: "Excellent flux. Ajustements mineurs seulement.",
      moderateRange: "40-69: Modéré",
      moderateDesc: "Équilibre viable. Les solutions rapides aident.",
      conflictRange: "0-39: Conflit",
      conflictDesc: "Journée difficile. Rééquilibrage profond nécessaire.",
      basedOnMizan: "Basé sur le concept Mīzān (Balance) de la tradition ʿIlm al-Ḥurūf d'Imam al-Būnī",
    },

    compatibility: {
      title: "Compatibilité Relationnelle",
      person1: "Personne 1",
      person2: "Personne 2",
      checkCompatibility: "Vérifier la Compatibilité",
      overallScore: "Score d'Harmonie Global",
      spiritualHarmony: "Harmonie Spirituelle",
      elementalHarmony: "Harmonie Élémentaire",
      planetaryCompatibility: "Compatibilité Planétaire",
      
      // Sections de Base vs Cosmique
      coreCompatibility: "Compatibilité de Base (Noms personnels)",
      coreCompatibilityDesc: "Comment vos personnalités conscientes interagissent",
      cosmicLayer: "Couche Cosmique (Influences Maternelles)",
      cosmicLayerDesc: "Comment vos énergies héritées interagissent ensemble",
      cosmicLayerExplanation: "L'élément de votre mère représente les conditions cosmiques affectant votre connexion d'âme. Cela concerne les schémas émotionnels hérités, pas votre personnalité fondamentale.",

      ratings: {
        excellent: "Excellent",
        good: "Bon",
        moderate: "Modéré",
        challenging: "Difficile",
      },
    },

    // Name Destiny
    nameDestiny: {
      // Étiquettes d'Analyse de Base vs Héritée
      coreAnalysis: "Analyse de Base (Votre nom seulement)",
      coreAnalysisDesc: "Reflète votre nature intérieure et identité personnelle.",
      inheritedInfluences: "Influences Héritées",
      inheritedInfluencesDesc: "Montre comment l'énergie de votre mère influence vos conditions externes.",
      whyMotherName: "Pourquoi ajouter le nom de mère?",
      motherNameExplanation: "Votre nom personnel révèle QUI vous êtes (identité intérieure). Le nom de votre mère révèle les conditions externes qui vous entourent×obstacles, protection et héritage familial.",
      motherNameInfo: "Nom Personnel = QUI vous êtes | Nom + Mère = CE qui vous entoure",
      
      nameChart: {
        title: "Carte du nom",
        subtitle: "Plan spirituel de votre nom",
        total: "Total (Ḥadad Kabīr)",
        saghir: "Racine numérique (Ṣaghīr)",
        tabh: "Élément (Ṭabʿ)",
        burj: "Signe du zodiaque (Burj)",
        planet: "Planète",
        day: "Jour",
        hour: "Heure planétaire n°",
        hourTip: "Nième heure après le lever du soleil. Ordre : Soleil, Vénus, Mercure, Lune, Saturne, Jupiter, Mars.",
        elementHarmony: "Harmonie des éléments",
        harmonious: "✨ Harmonieux",
        nourishing: "🌱 Nourrissant",
        transformative: "⚡ Transformatif",
        unified: "💫 Unifié",
      },
      destinyNumber: {
        title: "Votre Nombre de Destinée",
        subtitle: "Nombre et Station de Destinée Centrale",
        sumOfLetters: "Somme de toutes les valeurs des lettres",
        reducedRoot: "Racine numérique réduite",
      },
      quranicResonance: {
        title: "Résonance Coranique",
        subtitle: "Connexion Divine à Travers Votre Nombre",
      },
      motherOrigin: {
        subtitle: "Votre fondation énergétique héritée",
      },
      inputs: {
        motherName: "Nom de la mère",
        motherHint: "Optionnel × ajoutez pour voir les influences héritées et l'harmonie familiale.",
        motherOptional: "Nom de la mère (optionnel pour les influences héritées)",
      },
      origin: {
        title: "Votre origine spirituelle",
        motherElement: "Élément du nom de la mère (Umm Ḥadad)",
        inheritance: "Héritage des éléments",
        expression: "Expression",
        foundation: "Fondation",
        yourExpression: "Votre expression",
        yourFoundation: "Votre fondation",
        insight: "Aperçu",
        kabir: "Kabīr",
        saghir: "Ṣaghīr",
        hadath: "Ḥadath",
      },
      geometry: {
        title: "Géométrie des lettres (Handasa al-Ḥurūf)",
        vertical: "Vertical (ʿAmūdī)",
        round: "Rond (Mudawwar)",
        flat: "Plat (Musaṭṭaḥ)",
        angular: "Angulaire (Zāwiya)",
        none: "Aucun dans votre nom",
        profile: "Votre profil géométrique",
      },
      triad: {
        title: "Votre triade de l'âme",
        lifeDestiny: "Destin de vie",
        soulUrge: "Appel de l'âme",
        outerPersonality: "Personnalité extérieure",
      },
      guidance: {
        title: "Conseils pratiques",
        yourPath: "Votre chemin",
        yourPathDesc: "Explique la direction et l'énergie naturelle de votre vie.",
        spiritualPractice: "Pratique spirituelle",
        spiritualPracticeDesc: "Habitudes ou réflexions quotidiennes pour équilibrer votre élément.",
        quranicGuidance: "Guidance coranique",
        quranicGuidanceDesc: "Un verset lié à l'énergie de votre nom, uniquement pour la réflexion.",
        practicalAction: "Action pratique",
        practicalActionDesc: "Actions concrètes que vous pouvez entreprendre en accord avec votre destin.",
        shadowToWatch: "Ombre à surveiller",
        shadowToWatchDesc: "Tendances dont il faut être conscient qui peuvent entraver votre croissance.",
      },
      disclaimer: {
        reflectionOnly: "Pour la réflexion uniquement × aucune divination ni avis juridique.",
      },
      elementChart: {
        title: "Carte des éléments du nom",
        subtitle: "Composition et équilibre élémentaire",
        dominant: "Élément dominant",
        personality: "Réflexion sur la personnalité",
        balancingDhikr: "Dhikr d'équilibrage",
        fire: {
          name: "Feu",
          personality: "Votre nom porte l'énergie de la passion, du courage et de l'action audacieuse. Vous êtes naturellement poussé à diriger, initier et transformer.",
        },
        air: {
          name: "Air",
          personality: "Votre nom incarne la clarté intellectuelle, la communication et l'adaptabilité. Vous êtes attiré par la pensée, l'apprentissage et la connexion des idées.",
        },
        water: {
          name: "Eau",
          personality: "Votre nom résonne avec la profondeur émotionnelle, l'empathie et l'intuition. Vous guérissez, nourrissez et suivez naturellement les rythmes de la vie.",
        },
        earth: {
          name: "Terre",
          personality: "Votre nom vous ancre dans le pragmatisme, la fiabilité et la patience. Vous excellez à construire, organiser et apporter de la stabilité.",
        },
        dhikr: {
          fire: "Yā Laṭīf (Le Doux) × pour adoucir l'intensité",
          air: "Yā Ḥakīm (Le Sage) × pour ancrer les pensées",
          water: "Yā Nūr (La Lumière) × pour illuminer les émotions",
          earth: "Yā Fattāḥ (Celui qui ouvre) × pour inviter le flux",
        },
      },
      // Aperçus de Résonance Supérieure
      higherResonance: {
        title: "Aperçus de Résonance Supérieure",
        subtitle: "Nom Divin et Énergie de Couleur dans Votre Nom",
      },
      divineNameResonance: {
        title: "Résonance du Nom Divin",
        subtitle: "Votre nom porte la vibration de :",
        meaning: "Signification",
        spiritualInfluence: "Influence Spirituelle",
        reflection: "Ce que cela signifie pour vous",
        reflectionTip: "Conseil de Réflexion",
      },
      colorResonance: {
        title: "Résonance de Couleur du Nom",
        subtitle: "L'énergie de couleur naturelle de votre nom est :",
        primary: "Couleur Primaire",
        secondary: "Couleur Secondaire",
        meaning: "Signification",
        bestColors: "Meilleures couleurs à porter / utiliser",
        avoidColors: "Couleurs à éviter",
        tip: "Conseil",
        tipIntro: "Utilisez ces couleurs pour les vêtements, l'écriture, la méditation ou les espaces personnels.",
      },
    },

    planetaryHours: {
      title: "Heures Planétaires",
      currentHour: "Heure Planétaire Actuelle",
      planet: "Planète",
      startTime: "Heure de Début",
      endTime: "Heure de Fin",
      dayHours: "Heures du Jour",
      nightHours: "Heures de la Nuit",

      planets: {
        sun: "Soleil",
        moon: "Lune",
        mars: "Mars",
        mercury: "Mercure",
        jupiter: "Jupiter",
        venus: "Vénus",
        saturn: "Saturne",
      },
    },

    // Modules Planétaires
    planetary: {
      // Planète du Jour
      planetOfDay: {
        title: "Planète du Jour",
        titleAr: "يوم الكوكب",
        subtitle: "Énergie Quotidienne",
        bestFor: "Idéal pour",
        practiceLevel: "Niveau de Pratique",
        currentPosition: "Position Actuelle",
        difficulty: {
          easy: "Facile",
          moderate: "Modéré",
          advanced: "Avancé",
        },
      },

      zikr: {
        recommendedZikr: "Dhikr recommandé",
        footerNote: "Récitez avec présence du cœur (hudur al-qalb) et intention (niyyah).",
        currentHourRuler: "Maître de l'heure actuelle",
        transitPractice: "Pratique du transit",
        planetOfTheDay: "Planète du Jour",
        hourContext: "Heure de {planet}",
      },

      // Heure Planétaire
      planetaryHour: {
        title: "Heure Planétaire",
        titleAr: "ساعة الكوكب",
        subtitle: "Alignement du Moment",
        currentHour: "Heure Actuelle",
        nextHour: "Prochaine Heure Planétaire",
        yourElement: "Votre Élément",
        hourElement: "Heure",
        remaining: "Restant",
        day: "Jour",
        night: "Nuit",
        hour: "Heure",
        loading: "Chargement...",
        seeAllHours: "Voir toutes les heures",
        dayHours: "Heures de Jour",
        nightHours: "Heures de Nuit",
        sunrise: "lever du soleil",
      },

      // Noms de planètes pour l'affichage
      planets: {
        Sun: "Soleil",
        Moon: "Lune",
        Mars: "Mars",
        Mercury: "Mercure",
        Jupiter: "Jupiter",
        Venus: "Vénus",
        Saturn: "Saturne",
      },

      // Noms des éléments pour l'affichage
      elements: {
        fire: "Feu",
        water: "Eau",
        air: "Air",
        earth: "Terre",
      },

      // Noms arabes des planètes
      planetsAr: {
        Sun: "الشمس",
        Moon: "القمر",
        Mars: "المريخ",
        Mercury: "عطارد",
        Jupiter: "المشتري",
        Venus: "الزهرة",
        Saturn: "زحل",
      },

      // Noms arabes des éléments
      elementsAr: {
        fire: "نار",
        water: "ماء",
        air: "هواء",
        earth: "تراب",
      },

      // Noms arabes du zodiaque
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

      // Transit Planétaire
      planetTransit: {
        title: "Transits Planétaires",
        titleAr: "العبور الكوكبي",
        subtitle: "Mouvement Céleste",
        skyNow: "Ciel Maintenant",
        longTerm: "Long Terme",
        in: "En",
        seeYourImpact: "Voir votre impact",
        livePositions: "Positions en temps réel",
        loadingEphemeris: "Chargement des données éphémérides...",
        tropical: "Tropical",
        sidereal: "Sidéral",
        carousel: "Carousel",
        seeAll: "Voir tout",
        updated: "Mis à jour",
        planet: "Planète",
        sign: "Signe",
        elementPlanet: "Planète de {element}",
        elementSign: "Signe de {element}",
        viewDetails: "Voir Détails",
        hideDetails: "Masquer Détails",
        dignitySection: "Dignité Essentielle",
        rulesSign: "Gouverne",
        exaltedAt: "Exalté à",
        inFallIn: "En chute en",
        inDetrimentIn: "En détriment en",
        currentlyIn: "Actuellement en",
        noNotableDignity: "Pas de dignité essentielle notable à cette position",
        overallCondition: "Condition Générale",
        dignityScore: "Score",
        domicileOf: "Domicile de",
        exaltationOf: "Exaltation de",
      },

      // Jours de la Semaine
      days: {
        sunday: "Dimanche",
        monday: "Lundi",
        tuesday: "Mardi",
        wednesday: "Mercredi",
        thursday: "Jeudi",
        friday: "Vendredi",
        saturday: "Samedi",
      },

      // Signes du Zodiaque
      zodiac: {
        aries: "Bélier",
        taurus: "Taureau",
        gemini: "Gémeaux",
        cancer: "Cancer",
        leo: "Lion",
        virgo: "Vierge",
        libra: "Balance",
        scorpio: "Scorpion",
        sagittarius: "Sagittaire",
        capricorn: "Capricorne",
        aquarius: "Verseau",
        pisces: "Poissons",
      },

      // Badge Ilm Nujum
      ilmNujum: {
        auspicious: "Propice",
        auspiciousAr: "سعيد",
        proceed: "Procéder Consciemment",
        proceedAr: "تأنَّ",
        neutral: "Fenêtre Neutre",
        neutralAr: "وقت محايد",
        cautious: "Prudent",
        cautiousAr: "احترس",
        inauspicious: "Défavorable",
        inauspiciousAr: "نحس",
      },

      // Dignités Essentielles (Al-Karāmāt)
      dignities: {
        // Types de dignités
        sharaf: "Exalté",
        bayt: "Domicile",
        muthallatha: "Triplicité",
        hadd: "Termes",
        wajh: "Face",
        gharib: "Pèlerin",
        hubut: "Chute",
        darr: "Détriment",
        // Niveaux de condition
        musharraf: "Exalté",
        qawi: "Fort",
        said: "Favorable",
        mutadil: "Modéré",
        nahs: "Difficile",
        daif: "Faible",
        mubtala: "Affligé",
        // Libellés UI
        dignityLabel: "Dignité Essentielle",
        conditionLabel: "Condition",
        retrogradeNote: "Rétrograde affaiblit la dignité (−2)",
        scoreLabel: "Score de Dignité",
        breakdown: "Détail des Dignités",
        exaltedIn: "exalté en",
        domicileIn: "domicile en",
        fallIn: "en chute en",
        detrimentIn: "en détriment en",
        triplicityIn: "maître de triplicité de",
        termsIn: "dans ses termes en",
        faceIn: "dans sa face en",
        peregrineIn: "pèlerin en",
        highlyFavourable: "Très favorable",
        favourablePosition: "Position favorable",
        neutralPosition: "Position neutre",
        difficultPosition: "Position difficile",
        veryWeak: "Position très faible",
      },

      // Statut simplifié à 3 niveaux (pour l'utilisateur)
      simplifiedStatus: {
        // Libellés des niveaux
        said: "Propice",
        mutadil: "Modéré",
        mahdhur: "Prudent",
        // Libellés arabes des niveaux
        saidAr: "سَعِيد",
        mutadilAr: "مُعْتَدِل",
        mahdhurAr: "مَحْذُور",
        // Conseils de pratique
        saidGuidance: "Excellent pour les prières, le dhikr et les nouvelles intentions",
        mutadilGuidance: "Approprié pour la pratique régulière et la réflexion",
        mahdhurGuidance: "Concentrez-vous sur l'istighfar et les adhkār de protection",
        // Modèles de raison
        exaltedIn: "{planet} est exalté en {sign}",
        strongIn: "{planet} est fort en {sign}",
        atHomeIn: "{planet} est chez lui en {sign}",
        comfortableIn: "{planet} est confortable en {sign}",
        neutralIn: "{planet} est neutre en {sign}",
        weakenedIn: "{planet} est affaibli en {sign}",
        // Libellés
        statusLabel: "Statut de Pratique",
        viewDetails: "Voir les Détails",
        // Indications de pratique
        practiceHint: "Indication de Pratique",
        appTeaser: "Guidance personnalisée dans l'app Asrār",
        comingSoon: "Bientôt disponible",
      },

      // Descriptions des Éléments
      elementDescriptions: {
        fire: "Passionné & énergisant",
        water: "Fluide & émotionnel",
        air: "Intellectuel & communicatif",
        earth: "Ancré & stable",
      },

      // Activités des Éléments
      elementBestFor: {
        fire: {
          leadership: "Leadership",
          starting: "Démarrer des projets",
          physical: "Activités physiques",
          bold: "Décisions audacieuses",
        },
        water: {
          healing: "Guérison émotionnelle",
          relationships: "Relations",
          intuitive: "Travail intuitif",
          creative: "Flux créatif",
        },
        air: {
          learning: "Apprentissage",
          communication: "Communication",
          planning: "Planification",
          social: "Connexions sociales",
        },
        earth: {
          building: "Construction de fondations",
          practical: "Tâches pratiques",
          financial: "Finances",
          health: "Santé physique",
        },
      },
    },

    stations: {
      1: "Badʾ (البدء) - Commencement",
      2: "Tawāfuq (التوافق) - Harmonie",
      3: "Ibdāʿ (الإبداع) - Créativité",
      4: "Istiqrār (الاستقرار) - Stabilité",
      5: "Taḥawwul (التحول) - Transformation",
      6: "Khidma (الخدمة) - Service",
      7: "Ḥikma (الحكمة) - Sagesse Divine",
      8: "Qudra (القدرة) - Pouvoir Divin",
      9: "Kamāl (الكمال) - Achèvement",
      11: "Illumination Spirituelle",
      22: "Maître Constructeur",
      33: "Maître Enseignant",
    },

    footer: {
      tagline: "Numérologie Islamique & Calculs Spirituels",
      rights: "Tous droits réservés",
      about: "À Propos",
      contact: "Contact",
      privacy: "Politique de Confidentialité",
    },

    // SPIRITUAL STATIONS - Detailed descriptions
    spiritualStations: {
      1: {
        name: "Tawḥīd",
        meaning: "Unité Divine",
        quality: "Leadership, Indépendance, Originalité",
        shadow: "Orgueil, Isolement, Rigidité",
        practice: "Méditez sur l'unité divine. Réfléchissez : « Tout pouvoir appartient à l'Un. »",
        verse: "Dis : Il est Allah, l'Unique (112:1)",
        practical: "Lancez de nouveaux projets, prenez des initiatives, pratiquez l'autonomie. Idéal pour le travail solo."
      },
      2: {
        name: "Muʿāwana",
        meaning: "Assistance Divine",
        quality: "Coopération, Équilibre, Diplomatie",
        shadow: "Indécision, Dépendance, Évitement des conflits",
        practice: "Recherchez l'harmonie dans les relations. Réfléchissez : « Deux valent mieux qu'un. »",
        verse: "Entraidez-vous dans la justice (5:2)",
        practical: "Construisez des partenariats, médiez les conflits, créez l'équilibre. Bon pour le travail d'équipe."
      },
      3: {
        name: "Ibdāʿ",
        meaning: "Expression Créative",
        quality: "Créativité, Communication, Joie",
        shadow: "Énergie dispersée, Superficialité, Commérages",
        practice: "Exprimez l'inspiration divine. Réfléchissez : « La beauté se manifeste à travers moi. »",
        verse: "Lis au nom de ton Seigneur qui a créé (96:1)",
        practical: "Créez de l'art, écrivez, parlez en public, enseignez. Canalisez l'énergie créative."
      },
      4: {
        name: "Istiqrār",
        meaning: "Stabilité",
        quality: "Fondation, Ordre, Discipline",
        shadow: "Rigidité, Limitation, Entêtement",
        practice: "Construisez des fondations solides. Réfléchissez : « La patience est la clé du paradis. »",
        verse: "Allah aime ceux qui sont fermes et constants (61:4)",
        practical: "Organisez, planifiez, construisez des systèmes, établissez des routines. Créez la structure."
      },
      5: {
        name: "Taḥawwul",
        meaning: "Transformation",
        quality: "Liberté, Aventure, Changement",
        shadow: "Agitation, Irresponsabilité, Addiction",
        practice: "Embrassez le changement sacré. Réfléchissez : « Tout change sauf la Face de Dieu. »",
        verse: "Allah ne change pas l'état d'un peuple tant qu'ils ne se changent pas eux-mêmes (13:11)",
        practical: "Voyagez, apprenez de nouvelles compétences, adaptez-vous au changement. Recherchez la variété et l'expérience."
      },
      6: {
        name: "Khidma",
        meaning: "Service",
        quality: "Responsabilité, Soin, Harmonie",
        shadow: "Martyre, Ingérence, Perfectionnisme",
        practice: "Servez avec amour. Réfléchissez : « Les meilleurs sont ceux qui profitent aux autres. »",
        verse: "Les meilleurs d'entre vous sont ceux qui nourrissent les autres (Ahmad)",
        practical: "Aidez la famille, soignez les autres, créez la beauté. Concentrez-vous sur la maison et la communauté."
      },
      7: {
        name: "Ḥikma",
        meaning: "Sagesse Divine",
        quality: "Analyse, Introspection, Spiritualité",
        shadow: "Isolement, Cynisme, Suranalyse",
        practice: "Cherchez la connaissance intérieure. Réfléchissez : « Connais-toi pour connaître ton Seigneur. »",
        verse: "Il donne la sagesse à qui Il veut (2:269)",
        practical: "Étudiez, recherchez, méditez, retirez-vous. Approfondissez la pratique spirituelle."
      },
      8: {
        name: "Qudra",
        meaning: "Pouvoir Divin",
        quality: "Abondance, Autorité, Accomplissement",
        shadow: "Cupidité, Domination, Matérialisme",
        practice: "Gérez l'abondance divine. Réfléchissez : « Je suis un canal pour la provision divine. »",
        verse: "Quoi que vous dépensiez, Il le remplacera (34:39)",
        practical: "Gérez les ressources, dirigez des organisations, créez la richesse. Construisez l'influence."
      },
      9: {
        name: "Kamāl",
        meaning: "Achèvement",
        quality: "Compassion, Sagesse, Amour Universel",
        shadow: "Martyre, Manipulation émotionnelle, Évasion",
        practice: "Servez l'humanité. Réfléchissez : « Je libère avec amour et confiance. »",
        verse: "Aujourd'hui J'ai parachevé pour vous votre religion (5:3)",
        practical: "Terminez les projets, pardonnez, lâchez prise. Enseignez et mentorez les autres."
      },
      11: {
        name: "Illumination Spirituelle",
        meaning: "Éveil spirituel",
        quality: "Intuition, Inspiration, Vision",
        shadow: "Idéalisme excessif, Déconnexion",
        practice: "Canalisez l'inspiration supérieure",
        verse: "Lumière sur lumière",
        practical: "Enseignez, inspirez, guidez avec sagesse spirituelle"
      },
      22: {
        name: "Maître Constructeur",
        meaning: "Manifestation",
        quality: "Construction, Vision pratique, Impact",
        shadow: "Tension, Attentes irréalistes",
        practice: "Construisez des structures durables",
        verse: "Construire avec sagesse",
        practical: "Créez des systèmes, des organisations, un héritage durable"
      },
      33: {
        name: "Maître Enseignant",
        meaning: "Compassion universelle",
        quality: "Guérison, Enseignement, Service",
        shadow: "Surcharge, Sacrifice de soi",
        practice: "Enseignez et guérissez avec amour",
        verse: "Guidez avec compassion",
        practical: "Mentorez, guérissez, servez l'humanité"
      }
    },

    // GEOMETRY - Letter shapes
    geometryKeywords: {
      vertical: ["Aspiration", "Portée spirituelle", "Objectifs", "Croissance"],
      round: ["Compassion", "Plénitude", "Cycles", "Étreinte"],
      flat: ["Stabilité", "Ancrage", "Fondation", "Équilibre"],
      angular: ["Décision", "Acuité", "Clarté", "Transformation"]
    },
    
    geometryProfiles: {
      verticalDominant: "Forte énergie ascendante. Vous aspirez naturellement aux idéaux et aux objectifs supérieurs. Chercheur spirituel avec une dynamique aspirationnelle.",
      roundDominant: "Énergie embrassante et nourricière. Vous contenez et complétez les cycles avec chaleur émotionnelle. Capacité naturelle de compassion.",
      flatDominant: "Fondation ancrée et stable. Vous créez une expansion horizontale avec stabilité pratique. Énergie fiable et connectée à la terre.",
      angularDominant: "Énergie tranchante et décisive. Vous traversez la complexité avec clarté et transformation. Approche directe et ciblée.",
      balanced: "Énergie géométrique équilibrée. Vous avez une polyvalence d'expression, capable d'être aspirationnel, nourricier, ancré ou décisif."
    },

    // INHERITANCE - Mother's element analysis
    inheritanceSame: "Vous exprimez et héritez la même énergie {element}. Identité élémentaire forte et cohérente avec des racines profondes.",
    
    inheritanceCompatible: {
      fireAir: "Vous exprimez avec le Feu mais avez des racines Air. Votre fondation Air alimente votre action Feu - comme le vent attisant les flammes.",
      airFire: "Vous exprimez avec l'Air mais avez des racines Feu. Votre fondation Feu énergise votre mouvement Air - comme la chaleur créant le vent.",
      waterEarth: "Vous exprimez avec l'Eau mais avez des racines Terre. Votre fondation Terre contient votre flux Eau - comme un lit de rivière retenant l'eau.",
      earthWater: "Vous exprimez avec la Terre mais avez des racines Eau. Votre fondation Eau nourrit votre structure Terre - comme la pluie nourrissant le sol."
    },
    
    inheritanceOpposing: {
      fireWater: "Vous exprimez avec le Feu mais avez des racines Eau. Cela crée une tension dynamique - passion équilibrée par profondeur émotionnelle.",
      waterFire: "Vous exprimez avec l'Eau mais avez des racines Feu. Cela crée une tension dynamique - profondeur émotionnelle alimentée par passion intérieure.",
      airEarth: "Vous exprimez avec l'Air mais avez des racines Terre. Cela crée une tension dynamique - mouvement équilibré par stabilité.",
      earthAir: "Vous exprimez avec la Terre mais avez des racines Air. Cela crée une tension dynamique - structure construite sur liberté."
    },

    // PLANETARY QUALITIES
    planetaryQualities: {
      Sun: {
        quality: "Leadership, Autorité, Succès",
        favorable: ["Lancer de nouvelles entreprises", "Rechercher des promotions", "Parler en public", "Projets créatifs"],
        avoid: ["Décisions égoïstes", "Confrontations avec l'autorité"]
      },
      Moon: {
        quality: "Émotion, Intuition, Foyer",
        favorable: ["Affaires familiales", "Guérison émotionnelle", "Travail sur les rêves", "Activités nourricières"],
        avoid: ["Décisions importantes (émotions troublées)", "Questions juridiques"]
      },
      Mercury: {
        quality: "Communication, Apprentissage, Commerce",
        favorable: ["Étude", "Écriture", "Affaires commerciales", "Réseautage social", "Voyage court"],
        avoid: ["Signer des contrats si Mercure rétrograde", "Commérages"]
      },
      Venus: {
        quality: "Amour, Beauté, Harmonie",
        favorable: ["Romance", "Art", "Socialisation", "Embellissement", "Pacification"],
        avoid: ["Critique sévère", "Conflit"]
      },
      Mars: {
        quality: "Action, Courage, Compétition",
        favorable: ["Exercice physique", "Action assertive", "Courage nécessaire", "Chirurgie"],
        avoid: ["Colère", "Décisions impulsives", "Débuter des conflits"]
      },
      Jupiter: {
        quality: "Expansion, Sagesse, Abondance",
        favorable: ["Questions juridiques", "Éducation", "Pratique spirituelle", "Planification long terme", "Générosité"],
        avoid: ["Excès", "Surconfiance"]
      },
      Saturn: {
        quality: "Structure, Discipline, Karma",
        favorable: ["Travail acharné", "Engagements long terme", "Relations avec autorités", "Questions immobilières"],
        avoid: ["Activités ludiques", "Attentes de résultats rapides"]
      }
    },

    // DAILY DHIKR
    dailyDhikr: {
      Fire: {
        benefit: "Renforce la volonté et le courage",
        time: "Après Fajr"
      },
      Water: {
        benefit: "Apporte l'aisance dans les difficultés, adoucit les cœurs",
        time: "Après Maghrib"
      },
      Air: {
        benefit: "Augmente la connaissance et la clarté",
        time: "Après ʿIshā"
      },
      Earth: {
        benefit: "Accorde la patience et la constance",
        time: "Avant de dormir"
      }
    },

    // PERSONAL YEAR THEMES
    personalYearThemes: {
      1: "Nouveaux départs, planter des graines, indépendance",
      2: "Partenariats, patience, coopération",
      3: "Expression créative, joie, expansion sociale",
      4: "Construire des fondations, travail acharné, stabilité",
      5: "Changement, liberté, aventure, événements inattendus",
      6: "Responsabilité, service, affaires familiales, amour",
      7: "Croissance spirituelle, introspection, étude, repos",
      8: "Accomplissement, pouvoir, questions financières, reconnaissance",
      9: "Achèvement, libération, humanitarisme, fins menant à nouveaux départs"
    },

    // COMPATIBILITY - Additional strings
    compatibilityAnalysis: {
      soulJourney: "Le voyage de votre âme passe par la station de",
      destinyInterpretation: "Votre destin de vie ({destiny}) vous appelle à {quality}. Votre âme aspire profondément à {soulQuality}, tandis qu'extérieurement vous exprimez {personalityQuality}. L'intégration vient lorsque vous alignez ces trois dimensions.",
      uniqueDynamic: "Dynamique Unique",
      eachRelationshipTeaches: "Chaque relation enseigne des leçons uniques",
      opportunityForGrowth: "Opportunité de croissance",
      learningThroughDifferences: "Apprentissage à travers les différences",
      balanceIndividuality: "Équilibrer l'individualité avec l'union"
    },

    // WEEKLY RESULTS COMPONENT
    weeklyResults: {
      unableToGenerate: "Impossible de générer les prévisions hebdomadaires. Veuillez entrer un nom arabe valide.",
      badges: {
        best: "Meilleur",
        gentle: "Doux",
        focus: "Focus"
      },
      clickIndicator: "▼",
      timeWindows: "Fenêtres horaires",
      morning: "Matin",
      midday: "Midi",
      afternoon: "Après-midi",
      evening: "Soir",
      closeDetails: "Fermer les détails",
      energyType: "Type d'énergie",
      bestFor: "Idéal pour",
      avoid: "À éviter",
      planetalPhase: "Phase planétaire",
      peakClarity: "Clarté maximale",
      socialEnergy: "Énergie sociale",
      endurancePhase: "Phase d'endurance",
      reviewTime: "Temps de révision",
      classicalTeaching: "Enseignement classique (Leçon",
      forEverythingTime: "Pour chaque chose il y a un temps",
      successFromRightAction: "Le succès vient de la bonne action au bon moment",
      allTips: "Tous les conseils",
      closesIn: "Se termine dans",
      nextWindow: "Prochaine fenêtre",
      peakPerformanceDay: "Jour de performance maximale",
      steadyProgressDay: "Jour de progrès régulier",
      restReflectionDay: "Jour de repos et réflexion",
      overallEnergy: "Énergie globale",
      thisMonthFlow: "Flux de ce mois"
    },

    // DESTINY RESULTS COMPONENT
    destinyResults: {
      unableToCalculate: "Impossible de calculer la destinée. Veuillez entrer un nom.",
      loadingVerse: "Chargement du verset coranique...",
      verseError: "Impossible de charger le verset pour le moment. Veuillez actualiser ou visiter Quran.com directement.",
      arabicText: "Texte arabe",
      englishTranslation: "Traduction anglaise",
      readFullVerse: "Lire le verset complet sur Quran.com",
      ayahOf: "Ayah {ayah} de {total}",
      noVerseData: "Aucune données de verset disponibles pour cette résonance.",
      kabir: "Kabīr",
      hadath: "Ḥadath",
      grandTotal: "Total général",
      element: "Élément",
      strengths: "Forces",
      growthAreas: "Domaines de croissance",
      yourNumbers: "Vos nombres",
      corePersonality: "Personnalité fondamentale",
      innerDesires: "Désirs intérieurs",
      howOthersSee: "Comment les autres vous voient",
      lifePurpose: "But de la vie",
      lifePath: "Chemin de vie",
      soulUrge: "Appel de l'âme",
      personality: "Personnalité",
      destiny: "Destinée",
      coreTalents: "Vos talents principaux & forces naturelles. Les capacités avec lesquelles vous êtes né.",
      whatMakesHappy: "Ce qui vous rend vraiment heureux. Vos désirs les plus profonds & épanouissement intérieur.",
      impressionYouGive: "L'impression que vous donnez. Comment les gens vous voient & vous expérimentent au début.",
      ultimateGoal: "Votre but de vie & ce que vous êtes destiné à accomplir. Votre objectif ultime.",
      specialNumbers: "Nombres spéciaux et leçons",
      lessonsToLearn: "Leçons à apprendre",
      lessonsDescription: "Ces nombres représentent les leçons que votre âme veut apprendre dans cette vie. Ce ne sont pas des obstacles - ce sont des opportunités de croissance.",
      blessedNumbers: "Nombres bénis",
      blessedDescription: "Ce sont des nombres puissants liés à la tradition spirituelle. Ils apportent des bénédictions spéciales et une protection spirituelle à votre vie."
    },

    // COMPATIBILITY RESULTS COMPONENT
    compatibilityResults: {
      unableToCalculate: "Impossible de calculer la compatibilité. Veuillez vous assurer que les deux noms sont entrés.",
      overallCompatibility: "Compatibilité globale",
      threeAnalysisMethods: "Trois méthodes d'analyse",
      spiritualDestiny: "Destinée spirituelle",
      elementalTemperament: "Tempérament élémentaire",
      planetaryCosmic: "Cosmique planétaire",
      remainder: "Reste",
      sharedElement: "Élément",
      recommendations: "Recommandations",
      strengths: "Forces",
      challenges: "Défis",
      // Letter Chemistry Feature
      letterChemistry: "Chimie des Lettres",
      letterChemistryArabic: "Zawāj al-Ḥurūf",
      letterChemistryDesc: "Montre le tempérament élémentaire entre les deux noms. Chaque lettre porte une énergie de Feu, Air, Eau ou Terre × leur mélange forme l'équilibre émotionnel et énergétique de votre connexion.",
      combinedHarmony: "Harmonie Combinée",
      combinedHarmonyExplain: "Plus le pourcentage est élevé, plus le flux des éléments est harmonieux",
      balancingDhikr: "Dhikr d'Équilibre",
      balancingDhikrContext: "Ces dhikr aident à équilibrer les éléments dominants pour une meilleure harmonie.",
      temperament: "Tempérament",
      for: "Pour",
      // Element names
      fire: "Feu",
      air: "Air",
      water: "Eau",
      earth: "Terre",
      // Element temperament descriptions
      fireTemperament: "Tempérament Feu × passionné, créatif, audacieux",
      airTemperament: "Tempérament Air × rapide, intellectuel, communicatif",
      waterTemperament: "Tempérament Eau × calme, émotionnel, intuitif",
      earthTemperament: "Tempérament Terre × stable, pratique, ancré",
      // Balance Advice for Element Pairs
      balanceAdvice: {
        fireFire: "Pratiquez le dhikr calmement ensemble, évitez les décisions hâtives.",
        fireAir: "Synergie créative! Bon pour les projets et idées, mais prenez du temps pour vous calmer ensemble.",
        fireWater: "Équilibrez la passion avec la patience. Refroidissez les flammes avec compréhension.",
        fireEarth: "Combinez vision et planification. Laissez le feu inspirer, la terre exécuter.",
        airAir: "Exprimez les idées clairement, mais ancrez-les dans l'action.",
        airWater: "Exprimez vos sentiments clairement par les mots ou l'art. Écrivez ou chantez ensemble.",
        airEarth: "Les idées rencontrent la praticité. Discutez, puis construisez ensemble.",
        waterWater: "Nourrissez les émotions de l'autre. Créez des espaces sûrs et paisibles.",
        waterEarth: "Cultivez le repos créatif ensemble. Cuisinez, jardinez ou créez de la beauté.",
        earthEarth: "Construisez la stabilité ensemble, mais laissez place à la spontanéité."
      },
      // Dhikr Effects
      dhikrEffects: {
        fireEffect: "Refroidit l'intensité, apporte la douceur",
        airEffect: "Concentre l'esprit, apporte la sagesse",
        waterEffect: "Élève l'émotion vers la clarté",
        earthEffect: "Adoucit la rigidité, ouvre les possibilités"
      },
      
      // UI Labels for Four-Layer Compatibility
      accuracy: "Précision",
      precision: "Précision",
      weight: "poids",
      motherOf: "Mère de",
      
      // Four-Layer UI Text
      whatThisMeans: "💡 Ce que cela signifie",
      showCalculationDetails: "Voir les calculs détaillés",
      understandingTerms: "Comprendre les termes",
      hoverToLearnMore: "Survolez les ℹ️ pour en savoir plus",
      fourLayersTitle: "Quatre Niveaux de Compatibilité",
      inDailyLife: "🏠 Dans la vie quotidienne :",
      challenge: "⚠️ Défi :",
      tip: "💡 Conseil :",
      mostImportantForMarriage: "💜 LE PLUS IMPORTANT POUR LE MARIAGE",
      dailyImpact: "🏠 Impact au quotidien :",
      innerTemperament: "💡 Tempérament Intérieur (الطبع الباطن)",
      cosmicTemperament: "💡 Tempérament Cosmique (الطبع الفلكي)",
      harmony: "Harmonie"
    },

    // ============================================================================
    // SYSTÈME DE COMPATIBILITÉ À QUATRE NIVEAUX
    // ============================================================================
    
    fourLayerCompatibility: {
      // En-tête du formulaire
      title: "Analyse de Compatibilité à Quatre Niveaux",
      titleArabic: "تحليل التوافق الرباعي",
      subtitle: "La méthode traditionnelle complète d'Afrique de l'Ouest",
      description: "Cette analyse examine à la fois vos personnalités conscientes (de vos noms) et vos schémas émotionnels hérités (des noms de vos mères) pour donner la lecture de compatibilité la plus précise.",
      
      // Champs de saisie
      person1Name: "Nom de la Première Personne",
      person2Name: "Nom de la Deuxième Personne",
      person1MotherName: "Nom de la Mère de la Première Personne",
      person2MotherName: "Nom de la Mère de la Deuxième Personne",
      optional: "(Optionnel pour une analyse plus profonde)",
      
      // Info-bulles
      nameTooltip: "💡 Votre nom révèle votre moi conscient × comment vous vous présentez au monde, votre personnalité active et comment les autres vous voient.",
      motherNameTooltip: `💡 Le nom de votre mère révèle votre empreinte émotionnelle × les schémas subconscients, les sentiments et les besoins que vous avez hérités. C'est la fondation sous votre personnalité.

📊 Profondeur de l'analyse :
• Avec les noms seulement : 70% de précision
• Avec les noms des mères : 90-95% de précision

🌍 C'est la méthode traditionnelle préservée par les érudits islamiques d'Afrique de l'Ouest pour la compatibilité matrimoniale sérieuse.

🔒 Confidentialité : Les noms des mères ne sont utilisés que pour le calcul et jamais stockés.`,
      
      // Sélection du mode d'analyse
      analysisMode: "Mode d'Analyse",
      quickAnalysis: "Analyse Rapide (Noms Seulement)",
      quickAnalysisDesc: "Voyez comment vos personnalités conscientes interagissent dans la vie quotidienne. Bon pour la curiosité initiale.",
      quickAccuracy: "70-75% de précision",
      completeAnalysis: "Analyse Complète (Noms + Mères) ⭐ Recommandé",
      completeAnalysisDesc: "La méthode traditionnelle d'Afrique de l'Ouest. Révèle à la fois la chimie de surface et la compatibilité émotionnelle profonde. Essentiel pour les relations sérieuses.",
      completeAccuracy: "90-95% de précision",
      
      // Section du score global
      overallCompatibilityTitle: "Compatibilité Globale",
      overallCompatibilityArabic: "التوافق الشامل",
      overallExplanation: "Ce score est calculé à partir des quatre niveaux de votre connexion, pondéré pour prioriser la fondation émotionnelle (le plus important pour l'harmonie à long terme).",
      
      // Interprétations des scores
      excellent: "EXCELLENT",
      excellentRange: "85-100%",
      excellentMeaning: "Compatibilité exceptionnelle aux niveaux de surface et d'âme. Vos énergies se complètent magnifiquement.",
      
      veryGood: "TRÈS BIEN",
      veryGoodRange: "70-84%",
      veryGoodMeaning: "Forte compatibilité avec des domaines mineurs à cultiver. Cette connexion a un grand potentiel avec un effort mutuel.",
      
      good: "BIEN",
      goodRange: "55-69%",
      goodMeaning: "Compatibilité modérée. Vous pouvez construire une relation harmonieuse avec compréhension, communication et compromis.",
      
      challenging: "DIFFICILE",
      challengingRange: "40-54%",
      challengingMeaning: "Différences significatives d'énergie et d'approche. Cette relation nécessite un effort substantiel, de la patience et une croissance mutuelle.",
      
      difficult: "TRÈS DIFFICILE",
      difficultRange: "0-39%",
      difficultMeaning: "Conflits élémentaires majeurs. Bien que non impossible, ce jumelage fait face à des défis fondamentaux qui nécessitent un engagement profond pour être surmontés.",
      
      // En-têtes des niveaux
      layer1Title: "Compatibilité Quotidienne",
      layer1TitleArabic: "التوافق اليومي",
      layer1Subtitle: "Dynamique de Surface (الديناميكية الظاهرة - al-Dīnāmīkīya al-Ẓāhira)",
      
      layer2Title: "Fondation Émotionnelle",
      layer2TitleArabic: "الأساس العاطفي",
      layer2Subtitle: "Dynamique Profonde (الديناميكية العميقة - al-Dīnāmīkīya al-ʿAmīqa)",
      layer2Badge: "🌟 LE PLUS IMPORTANT POUR L'HARMONIE À LONG TERME",
      
      layer3Title: "Effet de la Personne 1 sur le Noyau Émotionnel de la Personne 2",
      layer4Title: "Effet de la Personne 2 sur le Noyau Émotionnel de la Personne 1",
      crossDynamicsTitle: "Dynamiques d'Influence Croisée",
      crossDynamicsArabic: "الديناميكيات المتقاطعة",
      crossDynamicsExplanation: "Ces niveaux montrent comment l'énergie consciente de chaque personne affecte le noyau émotionnel de l'autre. Pensez-y comme : 'Comment votre personnalité touche-t-elle leur cœur ?'",
      
      // Sections "Ce Que Cela Mesure"
      whatItMeasures: "📖 Ce Que Cela Mesure :",
      basedOn: "🔍 Basé Sur :",
      whyItMatters: "💡 Pourquoi C'est Important :",
      
      // Explications du Niveau 1
      layer1WhatItMeans: "Comment vos personnalités conscientes interagissent au quotidien. C'est l'énergie que vous apportez activement aux conversations, décisions et activités partagées. C'est ce que les gens voient quand ils regardent votre relation.",
      layer1BasedOn: "Les tempéraments élémentaires de vos deux noms (calculés en utilisant la méthode Ḥadath ÷ 4)",
      layer1WhyItMatters: "Cela détermine votre style de communication, la résolution des conflits et si vous vous 'comprenez' naturellement dans les moments quotidiens. Des scores élevés ici signifient un flux facile et naturel dans la vie quotidienne.",
      
      // Explications du Niveau 2
      layer2WhatItMeans: "La compatibilité émotionnelle subconsciente héritée de vos mères. C'est le 'sentiment de chez-soi' que vous créez ensemble×le confort non dit, la sécurité et le lien profond qui existe naturellement ou doit être construit.",
      layer2BasedOn: "Les tempéraments élémentaires des noms de vos deux mères (calculés en utilisant la méthode Ḥadath ÷ 4)",
      layer2WhyItMatters: `C'est LE niveau le plus important pour le mariage et le partenariat à long terme. Voici pourquoi :

• Les schémas émotionnels de votre mère ont façonné comment vous donnez et recevez l'amour
• Ce niveau détermine si vous vous sentez émotionnellement "en sécurité" ensemble
• Des scores élevés ici signifient que vous comprenez intuitivement les besoins de l'autre
• Des scores faibles signifient que vous aurez besoin de travail conscient pour répondre aux besoins émotionnels de l'autre

De nombreux couples avec une grande chimie de surface luttent parce que ce niveau n'est pas harmonieux. Savoir cela à l'avance vous aide à vous préparer.`,
      
      layer2ExampleTitle: "🎭 Exemple Concret :",
      layer2Example: `Ahmad et Layla ont une excellente chimie quotidienne (Feu + Air = 85%).

Mais quand le stress frappe :
• Les racines Eau d'Ahmad (de sa mère) ont besoin de traitement émotionnel et de parole
• Les racines Feu de Layla (de sa mère) ont besoin d'espace et d'action pour se sentir mieux

Sans savoir cela, ils se blessent mutuellement :
• Ahmad se sent abandonné quand Layla prend de l'espace
• Layla se sent étouffée quand Ahmad veut parler

AVEC cette connaissance, ils comprennent : "Nous essayons tous les deux de nous sentir en sécurité×juste de différentes manières."`,
      
      // Tempérament Dual
      dualTemperamentTitle: "🎭 Vos Tempéraments Individuels",
      dualTemperamentArabic: "طبائعكم الفردية",
      dualTemperamentExplanation: "Comprendre le tempérament intérieur (conscient) et cosmique (subconscient) de chaque personne vous aide à voir la personne complète×pas seulement la surface.",
      
      innerTemperament: "Tempérament Intérieur",
      innerTemperamentArabic: "الطبع الباطن",
      innerTemperamentDef: "Votre moi conscient×comment vous vous présentez activement dans le monde. Calculé à partir de VOTRE nom.",
      
      cosmicTemperament: "Tempérament Cosmique",
      cosmicTemperamentArabic: "الطبع الفلكي",
      cosmicTemperamentDef: "Votre empreinte émotionnelle héritée×les schémas subconscients de votre lignée. Calculé à partir du nom de VOTRE MÈRE.",
      
      // Types d'intégration
      fullyAligned: "Pleinement Aligné",
      fullyAlignedMeaning: "Vous êtes authentiquement qui vous semblez être. Ce que les gens voient correspond à ce que vous ressentez à l'intérieur. Cela crée une énergie forte et cohérente.",
      fullyAlignedChallenge: "Peut être TROP de cet élément×manquant d'équilibre des autres.",
      
      naturallyBalanced: "Naturellement Équilibré",
      naturallyBalancedMeaning: "Vos côtés intérieurs et cosmiques se soutiennent mutuellement. Vous avez accès à plusieurs énergies qui fonctionnent ensemble harmonieusement.",
      
      internalComplexity: "Complexité Interne",
      internalComplexityMeaning: "Il y a un écart entre comment vous vous présentez et ce dont vous avez besoin émotionnellement. Les autres peuvent ne pas voir toute votre profondeur. Vous pouvez vous sentir incompris.",
      internalComplexityAdvice: "💡 Votre travail est l'intégration : laisser votre moi intérieur s'exprimer à travers votre moi extérieur. Honorez les deux côtés.",
      
      // Recommandations
      yourPersonalizedGuidance: "💡 Votre Guidance Personnalisée",
      yourPersonalizedGuidanceArabic: "إرشاداتكم الشخصية",
      guidanceIntro: "Basé sur les quatre niveaux de votre compatibilité, voici des conseils spécifiques pour renforcer votre connexion :",
      
      yourNaturalStrengths: "🌟 Vos Forces Naturelles",
      strengthsDesc: "Ces domaines vous viennent facilement. Célébrez-les et maintenez-les :",
      
      areasToNurture: "⚠️ Domaines à Cultiver",
      challengesDesc: "Ces domaines nécessitent une attention consciente, mais la conscience est la moitié de la solution :",
      
      specificPractices: "🛠️ Pratiques Spécifiques",
      practicesDesc: "Essayez ces activités pour équilibrer vos dynamiques élémentaires :",
      
      spiritualBalancing: "🤲 Équilibrage Spirituel",
      dhikrDesc: "Ces phrases sacrées aident à harmoniser vos énergies élémentaires :",
      
      // Glossaire Éducatif
      understandingTheTerms: "[ℹ️ Comprendre les Termes]",
      glossaryTitle: "📚 Glossaire ʿIlm al-Ḥurūf",
      glossaryTitleArabic: "مسرد علم الحروف",
      
      ilmAlHuruf: "ʿIlm al-Ḥurūf",
      ilmAlHurufArabic: "علم الحروف",
      ilmAlHurufDef: "La Science des Lettres × Une science islamique ancienne qui étudie les propriétés mystiques des lettres arabes et leurs valeurs numériques. Chaque lettre porte une énergie spécifique (Feu, Air, Eau ou Terre) et une valeur numérique utilisée pour les calculs spirituels.",
      
      hadath: "al-Ḥadath",
      hadathArabic: "الحدث",
      hadathDef: "L'Essence Numérique × La somme de toutes les valeurs de lettres dans un nom utilisant le système Abjad (أبجد). Ce nombre révèle l'essence spirituelle et les schémas de destin.",
      
      hadathDiv4: "al-Ḥadath ÷ 4",
      hadathDiv4Def: `La méthode classique pour déterminer le tempérament élémentaire (SYSTÈME MAGHRIBI). Le reste quand Ḥadath est divisé par 4 indique l'élément dominant :
• Reste 1 = Feu (النار)
• Reste 2 = Terre (الأرض)
• Reste 3 = Air (الهواء)
• Reste 0 = Eau (الماء)`,
      
      zawajAlHuruf: "Zawāj al-Ḥurūf",
      zawajAlHurufArabic: "زواج الحروف",
      zawajAlHurufDef: "Mariage des Lettres × L'analyse de compatibilité entre deux noms basée sur leur harmonie élémentaire. Comment les lettres se 'marient' ou interagissent entre deux personnes.",
      
      // Transparence des Calculs
      showCalculation: "[📊 Montrer Comment Nous Avons Calculé Cela]",
      calculationBreakdown: "🔢 Détail des Calculs",
      calculationBreakdownArabic: "تفصيل الحسابات",
      
      step1: "Étape 1 : Convertir le nom en valeurs Abjad",
      step2: "Étape 2 : Additionner toutes les valeurs",
      step3: "Étape 3 : Diviser par 4",
      step4: "Étape 4 : Associer le reste à l'élément",
      
      totalHadath: "Total (Ḥadath)",
      quotient: "Quotient",
      remainder: "Reste",
      element: "Élément",
      
      weightingExplanation: "Pourquoi ces poids ? La Fondation Émotionnelle (40%) est la plus importante pour l'harmonie à long terme. La Vie Quotidienne (30%) affecte le bonheur quotidien. Les Dynamiques Croisées (15% chacune) montrent comment vous affectez les noyaux de l'autre."
    },

    // Descriptions des Jumelages d'Éléments (pour les 10 combinaisons)
    elementPairings: {
      fireFire: {
        label: "Feu + Feu : Le Couple Puissant",
        description: "Intense, passionné et rapide. Vous apportez tous les deux une énergie audacieuse et de la détermination à la relation.",
        dailyLife: "La vie quotidienne ensemble semble électrique et excitante. Beaucoup d'action, d'aventure et de spontanéité.",
        challenge: "⚠️ Peut rivaliser ou s'épuiser sans repos. Tous les deux veulent diriger.",
        tip: "💡 Planifiez du temps calme ensemble. Pratiquez l'écoute, pas seulement l'action."
      },
      fireAir: {
        label: "Feu + Air : Le Duo Visionnaire",
        description: "Le Feu transforme les idées de l'Air en action. Créatif, énergisant et plein de possibilités.",
        dailyLife: "Vous vous inspirez constamment. Les conversations mènent à des projets. Les idées deviennent réalité.",
        challenge: "⚠️ Peut négliger la profondeur émotionnelle et les détails pratiques. Toute vision, peu d'ancrage.",
        tip: "💡 Bilans hebdomadaires : 'Comment te sens-tu ?' pas seulement 'Que fais-tu ?'"
      },
      fireWater: {
        label: "Feu + Eau : Vapeur et Transformation",
        description: "La passion rencontre la profondeur. Cela crée soit de la vapeur (transformation) soit de l'évaporation (conflit).",
        dailyLife: "Vos approches de la vie sont opposées. Le Feu agit vite ; l'Eau a besoin de temps pour ressentir. Cela crée des frictions dans les décisions quotidiennes.",
        challenge: "⚠️ Le Feu peut submerger l'Eau. L'Eau peut se retirer du Feu. Les styles de communication s'affrontent.",
        tip: "💡 Feu : Pratiquez l'écoute active et la patience. Eau : Exprimez vos besoins clairement et directement."
      },
      fireEarth: {
        label: "Feu + Terre : La Vision Rencontre la Fondation",
        description: "Le Feu apporte vision et excitation ; la Terre apporte exécution et stabilité. Complémentaire mais à des rythmes différents.",
        dailyLife: "Le Feu veut constamment commencer de nouvelles choses ; la Terre préfère finir ce qui est commencé. Cela crée une tension de planification mais aussi de l'équilibre.",
        challenge: "⚠️ Rythmes différents : Le Feu se précipite, la Terre prend son temps. Peut sembler tirer dans des directions opposées.",
        tip: "💡 Combinez des sessions de planification (Terre) avec des aventures spontanées (Feu). Honorez les deux approches."
      },
      airAir: {
        label: "Air + Air : Le Partenariat Intellectuel",
        description: "Conversations infinies, curiosité partagée et stimulation mentale. Vous comprenez comment l'autre pense.",
        dailyLife: "Vous pouvez parler pendant des heures. Chaque expérience devient une discussion. Apprendre et explorer ensemble est naturel.",
        challenge: "⚠️ Peut trop réfléchir ou éviter la vulnérabilité émotionnelle. Tout dans la tête, pas assez dans le cœur.",
        tip: "💡 Créez des 'zones sans analyse'. Pratiquez le ressenti sans discussion. Touchez plus, parlez moins parfois."
      },
      airWater: {
        label: "Air + Eau : L'Esprit Rencontre le Cœur",
        description: "L'Air donne des mots aux sentiments de l'Eau. L'Eau ajoute de la profondeur aux idées de l'Air. Magnifique quand équilibré.",
        dailyLife: "L'Air aide l'Eau à exprimer les émotions clairement. L'Eau rappelle à l'Air que les sentiments comptent autant que les pensées.",
        challenge: "⚠️ L'Air peut rationaliser les sentiments ; l'Eau peut se sentir incomprise lorsque les émotions sont analysées.",
        tip: "💡 Air : Écrivez des lettres d'amour×utilisez vos mots pour l'émotion. Eau : Partagez vos rêves à voix haute×faites confiance à l'Air pour écouter."
      },
      airEarth: {
        label: "Air + Terre : Les Idées Prennent Racine",
        description: "L'Air rêve, la Terre construit. Des approches opposées qui peuvent se compléter ou s'affronter.",
        dailyLife: "L'Air veut explorer les possibilités ; la Terre veut s'engager dans une voie. Cela crée des frictions décisionnelles quotidiennes.",
        challenge: "⚠️ L'Air peut sembler dispersé pour la Terre ; la Terre peut sembler rigide pour l'Air. Valeurs différentes autour de la structure.",
        tip: "💡 Créez des tableaux de vision ensemble (Air), puis assignez des tâches et des échéances (Terre). Trouvez un terrain d'entente."
      },
      waterWater: {
        label: "Eau + Eau : La Connexion Profonde",
        description: "Compréhension intuitive. Vous ressentez les émotions de l'autre sans mots. L'empathie naturelle circule entre vous.",
        dailyLife: "Un regard dit tout. Vous vous nourrissez instinctivement. La sécurité émotionnelle vient naturellement.",
        challenge: "⚠️ Peut se noyer dans les émotions ensemble. Peut devenir isolé du monde extérieur. Besoin de la perspective de l'Air.",
        tip: "💡 Écrivez dans un journal ensemble, puis discutez de ce que vous avez écrit. Mettez les émotions en mots. Connectez-vous aussi avec les autres."
      },
      waterEarth: {
        label: "Eau + Terre : Croissance Nourricière",
        description: "Harmonie naturelle. L'Eau nourrit la Terre, la Terre retient l'Eau. Comme un jardin×la croissance se produit naturellement.",
        dailyLife: "Vous soutenez la croissance de l'autre sans effort. L'Eau apporte les sentiments, la Terre apporte la stabilité. Équilibré et paisible.",
        challenge: "⚠️ Peut éviter les conflits ou devenir stagnant. Trop confortable peut signifier aucun défi de croissance.",
        tip: "💡 Cuisinez ensemble, jardinez, créez avec vos mains. Embrassez le changement doux×essayez de nouvelles choses mensuellement."
      },
      earthEarth: {
        label: "Terre + Terre : La Fondation Solide",
        description: "Stabilité inébranlable. Loyauté, cohérence et objectifs pratiques partagés. Vous construisez ensemble brique par brique.",
        dailyLife: "Routines fiables, responsabilités partagées et progrès constants. Vous savez à quoi vous attendre de l'autre.",
        challenge: "⚠️ Peut résister au changement ou devenir trop routinier. Tous deux peuvent être têtus. La vie semble sûre mais peut manquer de spontanéité.",
        tip: "💡 Planifiez des 'nouvelles expériences' mensuelles. Brisez les routines ensemble intentionnellement. Invitez l'énergie de l'Air et du Feu."
      }
    },

    // LIFE PATH RESULTS COMPONENT
    lifePathResults: {
      yourLifeNumbers: "Vos nombres de vie",
      introduction: "Ces quatre nombres révèlent votre personnalité fondamentale, vos désirs intérieurs, comment les autres vous voient et le but de votre vie. Considérez-les comme les traits principaux qui façonnent qui vous êtes et le chemin que vous êtes destiné à suivre.",
      whereYouAre: "Où vous en êtes maintenant",
      currentLifePhase: "Phase de vie actuelle",
      phaseOf: "Phase {current} de 9",
      yearOf: "Année {current}/9",
      focusAreas: "Domaines de focus",
      yourAge: "Votre âge",
      years: "ans",
      thisYearMonth: "Énergie de cette année et de ce mois",
      personalYear: "Année personnelle",
      personalMonth: "Mois personnel",
      strengthsChallenges: "Vos forces et opportunités de croissance",
      strengthsDescription: "Chaque nombre de 1 à 9 représente différentes qualités de vie. Vos forces montrent ce dans quoi vous excellez naturellement. Les domaines de croissance montrent où vous pouvez vous développer davantage.",
      whatYouAreStrongAt: "Ce dans quoi vous êtes fort",
      whereYouCanGrow: "Où vous pouvez grandir",
      strength: "Force",
      growthArea: "Domaine de croissance",
      whatMakesCapable: "Ce qui vous rend capable et fiable",
      whatGivesEdge: "Ce qui vous donne un avantage",
      yourNaturalTalent: "Votre talent naturel",
      whatYouExcelAt: "Ce dans quoi vous excellez",
      aQualityToDevelop: "Une qualité à développer",
      areaForImprovement: "Un domaine d'amélioration",
      somethingToWorkOn: "Quelque chose sur lequel travailler",
      keyLifeLesson: "Une leçon de vie clé",
      rightNow: "En ce moment",
      currentStrength: "Votre force actuelle",
      mainStrengthSupporting: "C'est la force principale qui vous soutient en cette saison",
      currentlyWorkingOn: "Actuellement en train de travailler sur",
      yourMainFocus: "Votre focus principal",
      whatLifeTeaching: "C'est ce que la vie vous enseigne maintenant×embrassez-le !",
      numberExplanations: {
        1: { title: "Le Leader", meaning: "Vous êtes naturellement indépendant et motivé à créer de nouvelles choses. Vous préférez prendre vos propres décisions." },
        2: { title: "Le Pacificateur", meaning: "Vous êtes doué pour rassembler les gens et trouver l'harmonie. Vous êtes sensible aux sentiments des autres." },
        3: { title: "Le Créateur", meaning: "Vous vous exprimez facilement et apportez de la joie partout où vous allez. La communication est votre force." },
        4: { title: "Le Bâtisseur", meaning: "Vous êtes fiable et pratique. Vous construisez des fondations solides dans tout ce que vous faites." },
        5: { title: "L'Explorateur", meaning: "Vous aimez la liberté et la variété. Vous vous adaptez rapidement et apprenez d'expériences diverses." },
        6: { title: "Le Soignant", meaning: "Vous êtes responsable et voulez naturellement aider les autres. La famille et le service comptent profondément pour vous." },
        7: { title: "Le Penseur", meaning: "Vous êtes analytique et spirituel. Vous cherchez une compréhension plus profonde des mystères de la vie." },
        8: { title: "L'Accomplisseur", meaning: "Vous êtes ambitieux et concentré sur le succès. Vous avez de fortes capacités en affaires et en leadership." },
        9: { title: "L'Humanitaire", meaning: "Vous vous souciez du monde et voulez faire une différence positive. La compassion vous guide." },
        11: { title: "Le Visionnaire", meaning: "Vous voyez au-delà des choses ordinaires. Vous inspirez les autres et portez des messages spirituels." },
        22: { title: "Le Maître Bâtisseur", meaning: "Vous avez de grandes ambitions de créer quelque chose de durable. Vous transformez les rêves en réalité à grande échelle." }
      }
    },

    // TIMING RESULTS COMPONENT
    timingResults: {
      unableToCalculate: "Impossible de calculer l'heure planétaire. Veuillez réessayer.",
      deepRestNeededToday: "Repos Profond Nécessaire Aujourd'hui",
      todayIsRestDay: "Aujourd'hui est un Jour de Repos",
      criticalLowEnergy: "Énergie critique détectée. Votre esprit se recalibre×honorez ce signal de guérison avec un repos physique et mental profond aujourd'hui.",
      lowHarmonyToday: "Harmonie faible aujourd'hui suggère que c'est un jour de repos stratégique. Concentrez-vous sur la planification et la réflexion plutôt que sur l'exécution et les nouveaux départs.",
      recommendedToday: "Recommandé Aujourd'hui :",
      viewFullWeek: "Voir la Semaine Complète",
      dismiss: "Ignorer",
      restDayActive: "Jour de Repos Actif",
      restDayNote: "Les heures planétaires ci-dessous sont affichées à titre de référence, mais minimisez les activités aujourd'hui.",
      currentPlanetaryHour: "Heure Planétaire Actuelle",
      favorableFor: "Favorable Pour :",
      avoid: "À Éviter :",
      perfectAlignment: "ALIGNEMENT PARFAIT !",
      strongEnergy: "ÉNERGIE FORTE",
      restTime: "TEMPS DE REPOS",
      moderate: "MODÉRÉ",
      windowClosesIn: "La fenêtre se ferme dans :",
      nextWindow: "Prochaine fenêtre {element} :",
      bestForNow: "Idéal pour MAINTENANT :",
      bestForWhenReturns: "Idéal quand votre élément revient :",
      yourPersonalYear: "Votre Année Personnelle",
      recommendedDhikr: "Dhikr Recommandé Aujourd'hui",
      count: "Compte",
      times: "fois",
      bestTime: "Meilleur moment",
      benefit: "Bénéfice",
      actNow: "Agir Maintenant",
      realTimeGuidance: "Guidage en Temps Réel",
      
      // Optimal Sequence translations
      optimalSequenceFor: "Séquence Optimale pour {day}",
      morning: "Matin",
      midday: "Midi",
      afternoon: "Après-midi",
      evening: "Soir",
      bestFor: "Idéal Pour :",
      avoidLabel: "À Éviter :",
      
      // Nouvelles additions pour une meilleure UX
      harmony: "Harmonie :",
      harmonyScore: "Harmonie",
      planetEnergy: "Énergie {planet}",
      yourElement: "Votre {element}",
      hourElement: "{element} de l'heure",
      classicalWisdom: "Sagesse Classique :",
      deepRestQuote: "Man ʿarafa infisāl waqtihi, faqad ḥafaẓa ṭāqatahu",
      deepRestTranslation: "Qui connaît le temps de déconnexion, préserve son énergie",
      restDayQuote: "Al-sukūn qabl al-ḥaraka",
      restDayTranslation: "Le calme avant le mouvement apporte une action bénie",
      minutesLeft: "{minutes} minutes restantes",
      hoursLeft: "{hours} heures restantes",
      alignment: "Alignement",
      energyStatus: "État de l'Énergie",
      timeRemaining: "Temps Restant",
      
      // Guidage des couleurs
      whatToWearToday: "Quoi Porter Aujourd'hui",
      wearTheseColors: "Portez ces couleurs :",
      tryThis: "Essayez ceci :",
      you: "Vous",
      today: "Aujourd'hui",
      perfectFit: "Parfait",
      goingWell: "Bien",
      balanced: "Équilibré",
      needCare: "Attention",
      
      // Section Agir Maintenant
      actNowRealTimeGuidance: "Agir Maintenant - Guidage en Temps Réel",
      useThisTimeFor: "Utilisez ce temps pour :",
      handleRoutineTasks: "Gérer les tâches routinières",
      continueOngoingWork: "Continuer le travail en cours",
      waitForBetterTiming: "Attendre un meilleur moment",
      plentyOfTime: "Beaucoup de temps restant dans cette fenêtre",
      actNowWarning: "AGISSEZ MAINTENANT ! Le moment optimal se termine bientôt.",
      howWeFiguredThisOut: "Comment nous avons déterminé cela",
      howItWorks: "Comment ça fonctionne :",
      planetaryRulerExplanation: "Nous regardons le maître planétaire d'aujourd'hui ({planet}) et quel élément contrôle la plupart des heures d'aujourd'hui ({element}). Ensemble, ils créent la personnalité énergétique du jour.",
      yourFitExplanation: "Votre compatibilité : Votre nature {userElement} et l'énergie {dayElement} d'aujourd'hui sont alignées à {harmonyPercent}% - comme deux personnalités qui s'entendent.",
      dayRuler: "Maître du Jour :",
      mostActive: "Plus Actif :",
      dominantElement: "Dominant :",
      harmonyLabel: "Harmonie :",
      ancientWisdomMessage: "La sagesse ancienne dit que les couleurs et l'énergie fonctionnent ensemble. Portez ce qui vous convient ! 🌀"
    },

    // ACTION BUTTONS & ALIGNMENT
    actionButtons: {
      startImportantTask: "Commencer une tâche importante",
      makeDifficultCall: "Faire un appel difficile",
      sendCriticalEmail: "Envoyer un email critique",
      scheduleForLater: "Planifier pour plus tard",
      restReflect: "Se reposer et réfléchir",
      planPrepare: "Planifier et préparer",
      waitFor: "Attendre {element}",
      handleRoutineTasks: "Gérer les tâches routinières",
      continueOngoingWork: "Continuer le travail en cours",
      waitForBetterTiming: "Attendre un meilleur moment",
      takeBoldAction: "Prendre une action audacieuse",
      writeOrCommunicate: "Écrire ou communiquer",
      brainstormIdeas: "Faire un brainstorming",
      creativeWork: "Travail créatif",
      deepReflection: "Réflexion profonde",
      buildOrOrganize: "Construire ou organiser",
      completeTasks: "Compléter les tâches",
      lowStakesActivities: "Activités à faible enjeu",
      preparationWork: "Travail de préparation"
    },

    // HARMONY & ALIGNMENT
    harmony: {
      perfectAlignment: "Alignement parfait",
      strongAlignment: "Alignement fort",
      moderateAlignment: "Alignement modéré",
      weakAlignment: "Alignement faible",
      opposing: "Opposition",
      harmonious: "Harmonieux",
      transformative: "Transformatif",
      nourishing: "Nourrissant",
      unified: "Unifié",
      excellent: "Excellent",
      veryGood: "Très bien",
      good: "Bon",
      moderate: "Modéré",
      challenging: "Difficile"
    },

    // ELEMENT GUIDANCE
    elementGuidance: {
      Fire: {
        bestFor: [
          "Lancer de nouveaux projets",
          "Prendre des décisions importantes",
          "Avoir des conversations nécessitant du courage",
          "Agir avec audace",
          "Diriger et inspirer les autres"
        ],
        avoid: [
          "Traitement émotionnel",
          "Planification détaillée",
          "Travail lent et méthodique"
        ]
      },
      Air: {
        bestFor: [
          "Communiquer et réseauter",
          "Apprendre de nouveaux concepts",
          "Faire du brainstorming",
          "Écrire et articuler",
          "Enseigner et partager les connaissances"
        ],
        avoid: [
          "Travail physique lourd",
          "Travail de profondeur émotionnelle",
          "Engagements à long terme"
        ]
      },
      Water: {
        bestFor: [
          "Traitement émotionnel",
          "Réflexion profonde",
          "Conversations de guérison",
          "Travail intuitif",
          "Flux créatif"
        ],
        avoid: [
          "Décisions rapides",
          "Confrontations",
          "Action agressive"
        ]
      },
      Earth: {
        bestFor: [
          "Construire et organiser",
          "Prendre des engagements",
          "Terminer des projets",
          "Planification financière",
          "Travail physique"
        ],
        avoid: [
          "Changements rapides",
          "Décisions impulsives",
          "Théorisation abstraite"
        ]
      }
    },

    // COLOR GUIDANCE
    colorGuidance: {
      dailyColorGuidance: "Guide des couleurs quotidien",
      yourElement: "Votre élément",
      todayElement: "Élément du jour",
      harmonyLevel: "Niveau d'harmonie",
      primaryColors: "Couleurs principales",
      accentColors: "Couleurs d'accent",
      avoidColors: "Couleurs à éviter",
      energyMessage: "Message énergétique",
      practicalTips: "Conseils pratiques",
      bestEnergyTimes: "Meilleurs moments énergétiques",
      harmonyBreakdown: "Détails de l'harmonie"
    },

    // REST PRACTICES
    restPractices: {
      physicalRest: "Repos physique - dormir, s'allonger, mouvement minimal",
      cancelNonEssential: "Annuler toutes les réunions/tâches non essentielles",
      lightPrayer: "Prière légère ou dhikr seulement (pas de pratique intensive)",
      noDecisions: "Pas de prise de décision aujourd'hui - reporter aux meilleurs jours",
      hydrateNourish: "S'hydrater, se nourrir, être doux avec soi-même",
      silenceMeditation: "20 min de silence ou méditation loin de la lumière vive",
      gentleWalk: "Marche douce à l'ombre (pas d'objectifs, juste présence)",
      journalThoughts: "Noter les pensées sans forcer les solutions",
      postponeDecisions: "Reporter les décisions de leadership jusqu'à demain",
      earlyBedtime: "Coucher tôt pour réparation solaire (avant 22h)",
      byWater: "20 min près de l'eau (réelle ou visualisée)",
      emotionalRelease: "Libération émotionnelle douce - pleurer, écrire, exprimer",
      warmFood: "Se nourrir avec des aliments chauds et réconfortants",
      postponeEmotional: "Reporter les conversations émotionnelles",
      extraSleep: "Sommeil supplémentaire - honorer votre rythme lunaire",
      gentleMovement: "Mouvement très doux uniquement (étirements, marche lente)",
      breathingExercises: "Se calmer avec des exercices de respiration",
      noConflicts: "Pas de conflits ou confrontations aujourd'hui",
      postponePhysical: "Reporter les défis physiques",
      coolDown: "Se rafraîchir avec des exercices de respiration",
      informationFast: "Jeûne d'information - limiter la lecture/messages",
      speakLess: "Parler moins, écouter le silence",
      postponeCommunication: "Reporter les communications importantes",
      simpleTasks: "Tâches simples et à focus unique seulement",
      mentalRest: "Repos mental - pas de résolution de problèmes",
      scaleBack: "Réduire les plans ambitieux",
      postponeTeaching: "Reporter l'enseignement ou le partage de sagesse",
      gratitudePractice: "Pratique de gratitude pour ce qui est",
      restInContentment: "Se reposer dans le contentement, pas l'expansion",
      gentleSelfCare: "Soin personnel doux (bain, musique douce, beauté)",
      noRelationshipDecisions: "Pas de décisions relationnelles aujourd'hui",
      postponeSocial: "Reporter les rassemblements sociaux",
      soloTime: "Temps solo dans un environnement agréable",
      appreciateWithout: "Apprécier sans acquérir",
      releaseRigidity: "Lâcher la rigidité - ne pas forcer la structure",
      postponePlanning: "Reporter la planification à long terme",
      letGoShould: "Lâcher les pensées \"je devrais\"",
      flexibilityExercises: "Exercices de flexibilité douce",
      trustPause: "Faire confiance à la pause avant que la discipline revienne"
    },

    // ============================================================================
    // WEEKLY RESULTS - Complete translations
    // ============================================================================
    weeklyResultsComplete: {
      unableToGenerate: "Impossible de générer les prévisions hebdomadaires. Veuillez entrer un nom arabe valide.",
      best: "Meilleur",
      gentle: "Doux",
      focus: "Focus",
      closeDetails: "Fermer les détails",
      clickToExpand: "Cliquer pour développer",
      peakPerformanceDay: "Jour de performance maximale",
      steadyProgressDay: "Jour de progrès régulier",
      restReflectionDay: "Jour de repos et réflexion",
      allForcesAligned: "Toutes les forces alignées×excellent flux",
      mixedSignals: "Signaux mélangés×procédez avec prudence",
      challengingEnergies: "Énergies difficiles×la patience est nécessaire",
      morning: "🌅 Matin",
      midday: "☀️ Midi",
      afternoon: "🌆 Après-midi",
      evening: "🌙 Soir",
      optimalSequence: "Séquence optimale pour",
      timeWindows: "Fenêtres horaires",
      energyType: "Type d'énergie",
      bestFor: "✓ Idéal pour :",
      avoid: "✗ À éviter :",
      planetalPhase: "Phase planétaire",
      peakLeadership: "Énergie de leadership maximale",
      highVisibility: "Haute visibilité",
      delegationPhase: "Phase de délégation",
      reflectionTime: "Temps de réflexion",
      emotionalClarity: "Clarté émotionnelle",
      empathyPeak: "Pic d'empathie",
      creativeFlow: "Flux créatif",
      deepRestBegins: "Début du repos profond",
      peakPhysicalEnergy: "Énergie physique maximale",
      combatMode: "Mode combat",
      sustainedPush: "Poussée soutenue",
      coolDownNeeded: "Refroidissement nécessaire",
      mentalSharpness: "Acuité mentale",
      communicationPeak: "Pic de communication",
      quickConnections: "Connexions rapides",
      integrationTime: "Temps d'intégration",
      expansionBegins: "Début de l'expansion",
      opportunityWindow: "Fenêtre d'opportunité",
      growthMomentum: "Momentum de croissance",
      wisdomIntegration: "Intégration de la sagesse",
      beautyAppreciation: "Appréciation de la beauté",
      relationshipHarmony: "Harmonie relationnelle",
      pleasureTime: "Temps de plaisir",
      disciplinePeak: "Pic de discipline",
      seriousWorkMode: "Mode de travail sérieux",
      endurancePhase: "Phase d'endurance",
      reviewTime: "Temps de révision",
      classicalTeaching: "Enseignement classique (Leçon 28) :",
      forEverythingTime: "\"Li-kulli shay'in waqtun\"",
      successFromTiming: "(Pour chaque chose il y a un temps) × Le succès vient de la bonne action au bon moment."
    },

    // ============================================================================
    // DESTINY RESULTS - Complete translations
    // ============================================================================
    destinyResultsComplete: {
      unableToCalculate: "Impossible de calculer la destinée. Veuillez entrer un nom.",
      nameChart: "Carte du nom",
      spiritualBlueprint: "Plan spirituel de votre nom",
      totalHadadKabir: "Total (Ḥadad Kabīr)",
      digitalRootSaghir: "Racine numérique (Ṣaghīr)",
      elementTabh: "Élément (Ṭabʿ)",
      zodiacBurj: "Signe du zodiaque (Burj)",
      planetLabel: "Planète",
      dayLabel: "Jour",
      hourLabel: "Heure planétaire n°",
      hourTooltip: "Nième heure après le lever du soleil local. Ordre : Soleil, Vénus, Mercure, Lune, Saturne, Jupiter, Mars.",
      elementHarmony: "Harmonie des éléments",
      harmonious: "✨ Harmonieux",
      nourishing: "🌱 Nourrissant",
      transformative: "⚡ Transformatif",
      unified: "💫 Unifié",
      elementInheritance: "Héritage des éléments",
      expression: "Expression",
      foundation: "Fondation",
      yourExpression: "Votre expression",
      yourFoundation: "Votre fondation",
      quranicResonance: "Résonance coranique",
      arabicText: "Texte arabe",
      englishTranslation: "Traduction anglaise",
      loadingVerse: "Chargement du verset coranique...",
      unableToLoadVerse: "Impossible de charger le verset pour le moment. Veuillez actualiser ou visiter Quran.com directement.",
      verseReferenceValid: "La référence du verset est valide (Sourate {surah}:{ayah}), mais nous avons des difficultés à le récupérer.",
      readFullVerse: "Lire le verset complet sur Quran.com",
      ayahOfTotal: "Ayah {ayah} de {total}",
      noVerseData: "Aucune donnée de verset disponible pour cette résonance.",
      grandTotal: "Total général",
      element: "Élément",
      spiritualOrigin: "Votre origine spirituelle",
      motherElement: "Élément du nom de la mère (Umm Ḥadad)",
      inheritance: "Héritage",
      insight: "Aperçu",
      letterGeometry: "Géométrie des lettres (Handasa al-Ḥurūf)",
      vertical: "Vertical (ʿAmūdī)",
      round: "Rond (Mudawwar)",
      flat: "Plat (Musaṭṭaḥ)",
      angular: "Angulaire (Zāwiya)",
      noneInYourName: "Aucun dans votre nom",
      letters: "lettres",
      geometricProfile: "Votre profil géométrique",
      aspiration: "Aspiration",
      spiritualReach: "Portée spirituelle",
      goals: "Objectifs",
      growth: "Croissance",
      compassion: "Compassion",
      wholeness: "Plénitude",
      cycles: "Cycles",
      embrace: "Étreinte",
      stability: "Stabilité",
      grounding: "Ancrage",
      decisiveness: "Décision",
      sharpness: "Acuité",
      clarity: "Clarté",
      transformation: "Transformation",
      soulTriad: "Votre triade de l'âme",
      lifeDestiny: "Destin de vie",
      soulUrge: "Appel de l'âme",
      outerPersonality: "Personnalité extérieure",
      practicalGuidance: "Conseils pratiques",
      yourPath: "Votre chemin",
      yourPathDesc: "Explique vers quoi votre direction et votre énergie de vie se dirigent naturellement.",
      spiritualPractice: "Pratique spirituelle",
      spiritualPracticeDesc: "Habitudes quotidiennes simples ou réflexions pour équilibrer votre élément.",
      quranicGuidance: "Guidance coranique",
      quranicGuidanceDesc: "Un verset lié à l'énergie de votre nom, uniquement pour réflexion.",
      practicalAction: "Action pratique",
      practicalActionDesc: "Étapes que vous pouvez entreprendre dans la vie quotidienne qui s'alignent avec votre destinée.",
      shadowToWatch: "Ombre à surveiller",
      shadowToWatchDesc: "Tendances dont il faut être conscient qui peuvent entraver votre croissance.",
      reflectionOnly: "Pour réflexion uniquement × pas de divination ni de jugement juridique."
    },

    // ============================================================================
    // COMPATIBILITY RESULTS - Complete translations
    // ============================================================================
    compatibilityResultsComplete: {
      unableToCalculate: "Impossible de calculer la compatibilité. Veuillez vous assurer que les deux noms sont entrés.",
      overallCompatibility: "Compatibilité globale",
      overallHarmonyScore: "Score d'harmonie global",
      threeAnalysisMethods: "Trois méthodes d'analyse",
      spiritualDestiny: "🌙 Destinée spirituelle",
      elementalTemperament: "🌊 Tempérament élémentaire",
      planetaryCosmic: "⭐ Cosmique planétaire",
      remainder: "Reste",
      sharedElement: "Élément",
      excellent: "EXCELLENT",
      veryGood: "TRÈS BON",
      good: "BON",
      moderate: "MODÉRÉ",
      challenging: "DIFFICILE",
      recommendations: "Recommandations",
      strengths: "Forces",
      growthAreas: "Domaines de croissance",
      challenges: "Défis",
      relationship: "Relation",
      advice: "Conseil",
      harmonyScore: "Score d'harmonie"
    },

    // ============================================================================
    // PLANETARY DESCRIPTIONS - Complete translations
    // ============================================================================
    planetaryDescriptions: {
      Sun: {
        name: "Soleil",
        energy: "Leadership et Vitalité",
        quality: "Leadership, Autorité, Succès"
      },
      Moon: {
        name: "Lune",
        energy: "Émotions et Intuition",
        quality: "Émotion, Intuition, Foyer"
      },
      Mars: {
        name: "Mars",
        energy: "Action et Courage",
        quality: "Action, Courage, Compétition"
      },
      Mercury: {
        name: "Mercure",
        energy: "Communication et Apprentissage",
        quality: "Communication, Apprentissage, Commerce"
      },
      Jupiter: {
        name: "Jupiter",
        energy: "Expansion et Sagesse",
        quality: "Expansion, Sagesse, Abondance"
      },
      Venus: {
        name: "Vénus",
        energy: "Amour et Harmonie",
        quality: "Amour, Beauté, Harmonie"
      },
      Saturn: {
        name: "Saturne",
        energy: "Structure et Discipline",
        quality: "Structure, Discipline, Karma"
      }
    },

    // ============================================================================
    // CLASSICAL WISDOM - Keep original with translations
    // ============================================================================
    classicalWisdom: {
      stillnessBeforeMotion: "Al-sukūn qabl al-ḥaraka",
      stillnessExplanation: "(L'immobilité avant le mouvement apporte l'action bénie)",
      whoPlants: "Man zaraʿa khayran ḥaṣada khayran",
      whoPlantsExplanation: "(Qui plante le bien, récolte le bien) × Le moment de la moisson dépend de la graine et de la saison.",
      forEverything: "Li-kulli shay'in waqtun",
      forEverythingExplanation: "(Pour chaque chose il y a un temps) × Le succès vient de la bonne action au bon moment.",
      whoKnowsDisconnection: "Man ʿarafa infisāl waqtihi, faqad ḥafaẓa ṭāqatahu",
      whoKnowsExplanation: "(Qui connaît le moment de la déconnexion, préserve son énergie)"
    },

    // ============================================================================
    // UI COMPONENTS - Onboarding, Glossary, Controls
    // ============================================================================
    onboarding: {
      welcome: "Bienvenue à Asrār Everyday! 🌙",
      enterText: "Entrez Votre Texte",
      understanding: "Comprendre Votre Analyse",
      closeTutorial: "Fermer le tutoriel",
      previousStep: "Étape précédente",
      nextStep: "Étape suivante",
      completeTutorial: "Terminer le tutoriel",
    },

    glossary: {
      openTitle: "Ouvrir le Glossaire de Numérologie Islamique",
      closeLabel: "Fermer le glossaire",
      searchPlaceholder: "Rechercher des termes... (ex: 'Saghir', 'élément', 'destinée')",
      noResults: "Aucun terme ne correspond",
    },

    controls: {
      closeKeyboard: "Fermer le clavier",
      closeMenu: "Fermer le menu",
      updateLocation: "Mettre à jour",
    },

    tooltips: {
      umHadad1: "Um Ḥadad (أم حدد) - Requis pour le calcul complet de la Destinée du Nom",
      umHadad2: "Um Ḥadad (أم حدد) - Révèle votre Aṣl al-Rūḥānī (origine spirituelle)",
    },

    // ============================================================================
    // ENERGY DESCRIPTIONS
    // ============================================================================
    energyReturn: {
      fast: "Ce que vous donnez revient rapidement",
      slow: "Ce que vous donnez aujourd'hui prend du temps pour revenir",
    },

    // ============================================================================
    // ERROR MESSAGES
    // ============================================================================
    errors: {
      analysisError: "Impossible d'analyser. Veuillez vérifier votre entrée.",
      verseLoadError: "Impossible de charger le texte du verset. Veuillez réessayer.",
    },

    // ============================================================================
    // SEO & METADATA
    // ============================================================================
    seo: {
      siteTitle: "Asrār Everyday - Calculatrice ʿIlm al-Ḥurūf & ʿIlm al-ʿAdad",
      titleTemplate: "%s | Asrār Everyday",
    },

    // DIVINE TIMING SPIRITUAL COMPONENTS
    divineTiming: {
      spiritualDepth: {
        divineName: "Nom Divin",
        quranicVerse: "Verset Coranique",
        spiritualSignificance: "Signification spirituelle",
        relatedNames: "Noms associés",
        recommendedRecitation: "Récitation recommandée",
        reflectionPrompt: "Réflexion",
        beginDhikr: "Commencer le Dhikr",
        relevanceToThisHour: "Pertinence pour cette heure",
        inTheNameOfAllah: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
      },
      disclaimer: {
        importantNotice: "Avis Important",
        pleaseReadCarefully: "Veuillez lire attentivement avant d'utiliser le module Divine Timing",
        natureOfThisTool: "Nature de cet outil",
        toolDescription: "Cet outil fournit une réflexion spirituelle et des conseils de timing basés sur les traditions islamiques classiques des heures planétaires (Sāʿāt al-Falakiyya / الساعات الفلكية). Il s'agit d'un guide pour l'optimisation du timing spirituel et la réflexion personnelle.",
        essentialPoints: "Points Essentiels à Comprendre",
        notDivination: "Ce N'EST PAS de la divination",
        notDivinationText: "Cet outil ne prédit PAS l'avenir et ne garantit PAS de résultats. La divination (kāhana / كهانة) est interdite en Islam. Nous proposons uniquement des suggestions de timing basées sur la sagesse traditionnelle.",
        freeWillAndQadr: "Le libre arbitre et le Qadr",
        freeWillText: "Votre libre arbitre (ikhtiyār / اختيار) et vos choix restent les vôtres. Tous les résultats sont déterminés par Allah seul (Qadr / قدر). Utilisez cette sagesse comme outil de réflexion, pas comme remplacement de votre jugement.",
        notLegalGuidance: "Ce n'est pas un avis juridique islamique",
        notLegalGuidanceText: "Cet outil n'est PAS une fatwa (فتوى) ou un avis juridique islamique. Pour des questions religieuses, consultez des savants qualifiés. Pour des décisions importantes, consultez des professionnels.",
        recommendedUse: "Usage recommandé",
        recommendedUseText: "Utilisez cet outil pour : l'optimisation du timing des actions, la réflexion spirituelle, la compréhension des cycles naturels, et l'enrichissement de votre pratique spirituelle. Combinez toujours avec la prière (duʿāʾ / دعاء), la sagesse pratique (ḥikma / حكمة), et l'ijtihad personnel.",
        classicalSources: "Sources classiques",
        classicalSourcesText: "Les calculs des heures planétaires sont basés sur des traditions islamiques classiques (ʿIlm al-Ḥurūf, Shams al-Maʿārif, etc.). Les connexions spirituelles avec les Noms Divins et les versets coraniques sont présentées pour la réflexion et l'enrichissement spirituel, pas comme prescriptions obligatoires.",
        knowledgeOfUnseen: "La connaissance de l'invisible appartient à Allah seul",
        quranReference: "Coran 10:20",
        iHaveReadAndUnderstand: "J'ai lu et je comprends - Continuer",
        byContinuingYouAgree: "En continuant, vous acceptez d'utiliser cet outil comme guide de réflexion, pas comme source d'autorité absolue.",
      },
      // PHASE 2: Heures de Prière, Manoirs Lunaires, Alignement
      prayerTimes: {
        prayerTimes: "Heures de Prière",
        currentPeriod: "Période actuelle",
        nextPrayer: "Prochaine prière",
        in: "dans",
        betweenPrayers: "Entre les Prières",
        planetarySynergy: "Synergie Planétaire",
        viewAll: "Voir tout",
        hide: "Masquer",
        now: "Actuel",
        next: "Prochain",
        calculationsBasedOn: "Calculs basés sur",
        yourLocation: "votre position",
        specialPrayerTime: "Temps Spécial de Prière",
      },
      lunarMansion: {
        lunarMansion: "Manoir Lunaire",
        moonPhase: "Phase Lunaire",
        element: "Élément",
        planetaryRuler: "Gouverneur Planétaire",
        divineQuality: "Qualité Divine",
        spiritualFocus: "Focus Spirituel",
        lunarPlanetarySynergy: "Synergie Lunaire-Planétaire",
        hideDetails: "Masquer les détails",
        viewActivitiesWisdom: "Voir activités et sagesse",
        favorableFor: "Favorable Pour",
        unfavorableFor: "Défavorable Pour",
        classicalWisdom: "Sagesse Classique",
        constellation: "Constellation",
        calculatingLunarMansion: "Calcul du manoir lunaire...",
      },
      alignment: {
        personalAlignment: "Alignement Personnel",
        alignmentBreakdown: "Détails de l'Alignement",
        elementalHarmony: "Harmonie Élémentaire",
        planetaryResonance: "Résonance Planétaire",
        numericalAlignment: "Alignement Numérique",
        sacredConnection: "Connexion Sacrée",
        recommendations: "Recommandations",
        yourBestHoursToday: "Vos Meilleures Heures Aujourd'hui",
        planetaryHour: "Heure planétaire",
        basedOnSpiritualEssence: "Basé sur votre essence spirituelle et les énergies planétaires",
      },
      // PHASE 3: Contenu Éducatif
      education: {
        learningCenter: "Centre d'Apprentissage",
        planetGuides: "Guides Planétaires",
        glossary: "Glossaire",
        energyFlow: "Flux d'Énergie",
        selectPlanet: "Sélectionner une Planète",
        overview: "Aperçu",
        spiritualWisdom: "Sagesse Spirituelle",
        practicalGuide: "Guide Pratique",
        classicalSources: "Sources Classiques",
        primaryDivineName: "Nom Divin Principal",
        relatedDivineNames: "Noms Divins Associés",
        islamicHistoricalContext: "Contexte Historique Islamique",
        spiritualQualities: "Qualités Spirituelles",
        relatedSpiritualConcepts: "Concepts Spirituels Associés",
        spiritualExamples: "Exemples Spirituels",
        favorableActivities: "Activités Favorables",
        activitiesToAvoid: "Activités à Éviter",
        classicalTeachings: "Enseignements Classiques",
        position: "Position",
        recommendedDhikr: "Dhikr Recommandé",
        source: "Source",
        energyFlowChart: "Flux d'Énergie Quotidien",
        currentHour: "Heure Actuelle",
        excellentHours: "Heures Excellentes",
        goodHours: "Bonnes Heures",
        challengingHours: "Heures Difficiles",
        harmonyScore: "Score d'Harmonie",
        introduction: "Introduction",
        islamicContext: "Contexte Islamique",
        howItWorks: "Comment Ça Marche",
        faq: "FAQ",
        comprehensiveGuide: "Guide complet des heures planétaires dans la tradition islamique",
        searchTerms: "Rechercher des termes",
        showingTerms: "Affichage de",
        terms: "termes",
        allTerms: "Tous les Termes",
        planets: "Planètes",
        elements: "Éléments",
        divineNames: "Noms Divins",
        concepts: "Concepts",
        practices: "Pratiques",
        related: "Associé",
        noTermsFound: "Aucun terme trouvé correspondant à votre recherche",
        element: "Élément",
        day: "Jour",
        metal: "Métal",
      },
    },

    // ============================================================================
    // STRATÉGIE DU NOM DE LA MÈRE - Système double-mode Name Destiny
    // ============================================================================
    mothersNameStrategy: {
      // Sélecteur de Mode Name Destiny
      modeSelector: {
        title: "Choisissez Votre Type de Lecture",
        generalMode: {
          title: "Explorer un Nom",
          icon: "📖",
          description: "Découvrez le sens spirituel et les caractéristiques générales de n'importe quel nom",
          bestFor: "Idéal pour : Apprendre sur les noms, exploration culturelle, aperçus généraux",
        },
        personalMode: {
          title: "Ma Lecture Personnelle",
          icon: "✨",
          description: "Obtenez VOTRE profil spirituel unique - personnalisé à votre plan d'âme exact",
          bestFor: "Idéal pour : Découverte de soi, guidance spirituelle, transformation personnelle",
          recommended: "⭐ Recommandé",
        },
        whyPersonalBetter: "Pourquoi personnel est meilleur :",
        reason1: "Votre plan spirituel exact (pas seulement des traits généraux)",
        reason2: "Unique à VOUS (pas quelqu'un d'autre avec votre nom)",
        reason3: "Guidance et insights plus précis",
      },

      // Formulaires d'entrée Name Destiny
      nameInput: {
        generalModeHeader: "Exploration Générale de Nom",
        generalModeSubtitle: "Explorer le sens du nom uniquement - non personnalisé pour vous",
        personalModeHeader: "Profil Spirituel Personnel",
        personalModeSubtitle: "Votre lecture unique - nécessite le nom de votre mère",
        switchToPersonal: "Passer à la Lecture Personnelle",
        switchToGeneral: "Passer à l'Exploration Générale",
        motherNameRequired: "Nom de la Mère (Requis pour Lecture Personnelle)",
        motherNameOptional: "Nom de la Mère (Optionnel)",
        whyRequired: "Pourquoi le nom de la mère est-il requis ?",
        learnMore: "En Savoir Plus",
      },

      // Résultats généraux avec CTA de mise à niveau
      generalResults: {
        modeLabel: "📖 Exploration Générale de Nom",
        limitedInsight: "Aperçu Limité - Caractéristiques générales uniquement",
        upgradePrompt: "Voulez-vous VOTRE profil spirituel unique ?",
        upgradeButton: "✨ Obtenir Ma Lecture Personnelle",
        upgradeBenefits: "La lecture personnelle inclut :",
        benefit1: "Votre plan spirituel exact (Aṣl al-Rūḥānī)",
        benefit2: "Guidance personnalisée unique à VOUS",
        benefit3: "Aperçus plus profonds sur le voyage de votre âme",
        generalOnly: "Ceci est une analyse générale pour le nom '{name}' - pas spécifique à vous.",
      },

      // Emphase des résultats personnels
      personalResults: {
        modeLabel: "✨ Profil Spirituel Personnel",
        uniqueToYou: "Unique à VOUS - Pas quelqu'un d'autre avec votre nom",
        yourExactBlueprint: "Votre Plan Spirituel Exact",
        calculatedFrom: "Calculé à partir de : {name} + {motherName}",
        thisIsYours: "Cette lecture est unique à votre âme - personne d'autre n'aura ce profil exact.",
      },

      // Module Life Path - Nom de mère requis
      lifePath: {
        motherNameRequired: "Nom de la Mère (Requis)",
        whyRequired: "Pourquoi le nom de la mère est-il requis ?",
        explanation: "Le Chemin de Vie est personnel à VOUS",
        detailedExplanation: "Votre Chemin de Vie ne concerne pas seulement votre nom - il s'agit de VOTRE voyage unique à travers la vie. Le nom de votre mère garantit que cette lecture reflète votre plan spirituel spécifique, pas seulement un modèle général pour tous ceux qui portent votre nom.",
        cannotSubmit: "Veuillez entrer le nom de votre mère pour continuer",
        validationError: "Le nom de la mère est requis pour le calcul du Chemin de Vie",
      },

      // Module Divine Timing - Nom de mère requis
      divineTiming: {
        motherNameRequired: "Nom de la Mère (Requis)",
        whyRequired: "Pourquoi le nom de la mère est-il requis ?",
        explanation: "Divine Timing est calculé pour VOS influences planétaires spécifiques",
        detailedExplanation: "Les heures planétaires affectent chaque personne différemment en fonction de sa signature spirituelle unique. Le nom de votre mère personnalise ces calculs à votre plan d'âme exact, garantissant que les conseils de timing sont précis pour VOUS spécifiquement.",
        cannotSubmit: "Veuillez entrer le nom de votre mère pour continuer",
        validationError: "Le nom de la mère est requis pour le calcul du Divine Timing",
      },

      // Modal Éducatif - Explication du nom de la mère
      explanation: {
        title: "Pourquoi le Nom de la Mère Importe",
        subtitle: "Le principe spirituel derrière les lectures personnalisées",
        
        section1: {
          title: "Le Principe : Votre Plan d'Âme Unique",
          text: "Dans la tradition sénégalaise de ʿIlm al-Ḥurūf, votre identité spirituelle complète (Aṣl al-Rūḥānī) est formée de votre nom + le nom de votre mère. Cela crée une signature numérique et élémentaire unique qui vous appartient seul.",
        },

        section2: {
          title: "Pourquoi C'est Important",
          point1: {
            title: "Sans le nom de la mère :",
            text: "Vous obtenez les caractéristiques générales du nom 'Muhammad' - partagées par des millions de personnes",
          },
          point2: {
            title: "Avec le nom de la mère :",
            text: "Vous obtenez VOTRE profil unique - Muhammad + Fatima = différent de Muhammad + Aisha",
          },
        },

        section3: {
          title: "Exemple : Deux Personnes Nommées Muhammad",
          person1: "Muhammad (mère : Fatima) = Valeur numérique X → Dominant Feu → Chemin spirituel unique A",
          person2: "Muhammad (mère : Khadija) = Valeur numérique Y → Dominant Eau → Chemin spirituel différent B",
          conclusion: "Même nom, mères différentes = plans spirituels complètement différents",
        },

        section4: {
          title: "Confidentialité & Respect",
          point1: "Le nom de votre mère n'est jamais stocké ni partagé",
          point2: "Les calculs se font instantanément dans votre navigateur uniquement",
          point3: "Nous honorons la confiance sacrée du nom de votre mère (um ḥadad / أم حدد)",
        },

        section5: {
          title: "Quand Utiliser Chaque Mode",
          generalMode: {
            title: "Mode Général (Nom Uniquement) :",
            use1: "Explorer des prénoms de bébé ou significations de noms",
            use2: "Recherche culturelle ou historique",
            use3: "Apprendre sur les modèles de noms",
          },
          personalMode: {
            title: "Mode Personnel (Nom + Nom de la Mère) :",
            use1: "VOTRE guidance spirituelle",
            use2: "Décisions de vie et timing",
            use3: "Travail de découverte de soi profonde",
          },
        },

        closeButton: "Je Comprends",
      },

      // Logique de mise à niveau automatique
      autoUpgrade: {
        detected: "Nom de la mère détecté - passage à la Lecture Personnelle",
        switchingMode: "Passage au mode Personnel pour des résultats précis",
      },
    },

    // ============================================================================
    // MODULE QUI SUIS-JE - Istikharah al-Asmā' (الاستخارة بالأسماء)
    // ============================================================================
    istikhara: {
      // Panneau principal
      title: "Qui Suis-Je ?",
      titleArabic: "من أنا؟",
      subtitle: "Découvrez Votre Profil Spirituel",
      description: "Dévoilez votre essence spirituelle grâce à la numérologie sacrée. Avec ʿIlm al-Ḥurūf, découvrez votre élément, vos traits de personnalité, votre jour béni et votre guidance divine.",
      scholarlyName: "Istikharah al-Asmāʾ",
      
      // Section formulaire
      form: {
        title: "Entrez Vos Informations",
        personName: "Votre Nom",
        personNamePlaceholder: "p.ex., Muhammad, Fatima, Ibrahim",
        motherName: "Nom de la Mère",
        motherNamePlaceholder: "p.ex., Khadija, Aisha, Maryam",
        dateOfBirth: "Date de Naissance",
        dateOfBirthPlaceholder: "Sélectionnez votre date de naissance",
        dateOfBirthHelper: "Utilisée pour des calculs astrologiques précis",
        calculateButton: "Découvrir Mon Profil",
        clearButton: "Effacer",
        validationError: "Veuillez entrer les deux noms pour continuer",
        bothNamesRequired: "Les deux noms sont requis pour une guidance précise",
      },
      
      // Section résultats
      results: {
        title: "Votre Guidance Spirituelle",
        calculatedFor: "Guidance pour {person} (mère : {mother})",
        burujRemainder: "Reste Buruj",
        element: "Élément Dominant",
        
        // Navigation par onglets
        tabs: {
          personality: "Personnalité",
          career: "Guidance Professionnelle",
          blessedDay: "Jour Béni",
          spiritual: "Noms Divins",
          sadaqah: "Sadaqah",
        },
      },
      
      // Profil de personnalité
      personality: {
        title: "Profil de Personnalité",
        subtitle: "Traits de Caractère & Tempérament",
        coreTraits: "Traits Fondamentaux",
        strengths: "Forces",
        challenges: "Défis",
        guidance: "Guidance Spirituelle",
        elementalInfluence: "Influence Élémentaire",
        colors: "Couleurs Harmonieuses",
      },
      
      // Guidance professionnelle
      career: {
        title: "Guidance Professionnelle & Vocation",
        subtitle: "Chemins Alignés avec Votre Nature Spirituelle",
        idealFields: "Domaines Professionnels Idéaux",
        workStyle: "Style de Travail",
        bestEnvironments: "Meilleurs Environnements",
        leadershipStyle: "Approche du Leadership",
        collaboration: "Style de Collaboration",
        avoidCareers: "Carrières à Aborder avec Prudence",
      },
      
      // Jour béni
      blessedDay: {
        title: "Votre Jour Béni",
        subtitle: "Jour Optimal pour les Actions Importantes",
        primaryDay: "Jour Béni Principal",
        planetaryRuler: "Maître Planétaire",
        bestActivities: "Meilleures Activités pour ce Jour",
        spiritualPractices: "Pratiques Spirituelles Recommandées",
        timing: "Timing Optimal",
        morningBlessings: "Matin (après Fajr)",
        middayBlessings: "Midi (Ẓuhr à ʿAṣr)",
        eveningBlessings: "Soir (après Maghrib)",
      },
      
      // Pratique spirituelle
      spiritual: {
        title: "Pratique Spirituelle & Croissance",
        subtitle: "Pratiques pour Renforcer Votre Connexion",
        recommendedSadaqah: "Sadaqah Recommandée",
        sadaqahType: "Type de Charité",
        sadaqahBenefit: "Bénéfice Spirituel",
        sadaqahTiming: "Meilleur Moment",
        dhikrPractice: "Dhikr Recommandé",
        dhikrName: "Nom Divin",
        dhikrCount: "Compte Suggéré",
        dhikrTime: "Meilleur Moment",
        dhikrBenefit: "Bénéfice",
        dailyPractice: "Pratique Quotidienne",
        weeklyPractice: "Pratique Hebdomadaire",
        monthlyPractice: "Pratique Mensuelle",
      },
      
      // Descriptions des éléments (français)
      elements: {
        fire: {
          name: "Feu",
          nameArabic: "النار (al-Nār)",
          quality: "Passionné, Dynamique, Transformateur",
          description: "L'énergie du Feu apporte l'audace, la créativité et le pouvoir transformateur. Ceux qui ont une dominance Feu sont des leaders naturels qui inspirent le changement.",
        },
        earth: {
          name: "Terre",
          nameArabic: "الأرض (al-Arḍ)",
          quality: "Stable, Pratique, Ancré",
          description: "L'énergie de la Terre apporte la stabilité, la fiabilité et la sagesse pratique. Ceux qui ont une dominance Terre construisent des fondations durables.",
        },
        air: {
          name: "Air",
          nameArabic: "الهواء (al-Hawāʾ)",
          quality: "Intellectuel, Communicatif, Adaptable",
          description: "L'énergie de l'Air apporte la clarté, la communication et le pouvoir intellectuel. Ceux qui ont une dominance Air excellent dans la connaissance et la connexion.",
        },
        water: {
          name: "Eau",
          nameArabic: "الماء (al-Māʾ)",
          quality: "Émotionnel, Intuitif, Fluide",
          description: "L'énergie de l'Eau apporte l'empathie, l'intuition et la profondeur émotionnelle. Ceux qui ont une dominance Eau guérissent et nourrissent naturellement.",
        },
      },
      
      // Éléments d'interface
      ui: {
        loading: "Calcul de la guidance spirituelle...",
        error: "Impossible de calculer la guidance. Veuillez vérifier les noms et réessayer.",
        backToForm: "Nouveau Calcul",
        printResults: "Imprimer la Guidance",
        shareResults: "Partager",
        expandAll: "Développer Toutes les Sections",
        collapseAll: "Réduire Toutes les Sections",
      },
      
      // Pied de page éducatif
      education: {
        title: "À Propos de Cette Analyse",
        whatIsIt: "Qu'est-ce que c'est ?",
        whatIsItText: "'Qui Suis-Je ?' utilise Istikharah al-Asmāʾ (الاستخارة بالأسماء), une pratique islamique traditionnelle qui révèle votre profil spirituel en analysant la résonance sacrée de votre nom et du nom de votre mère en utilisant le ʿIlm al-Ḥurūf (Science des Lettres).",
        howItWorks: "Comment ça fonctionne ?",
        howItWorksText: "En calculant les valeurs Abjad des deux noms et en appliquant le système Buruj (12 restes mappés à 4 éléments), nous révélons votre tempérament spirituel, jour béni, parcours professionnels idéaux et pratiques spirituelles personnalisées.",
        isItPermissible: "Est-ce permis ?",
        isItPermissibleText: "Cette pratique est enracinée dans la tradition savante islamique d'Afrique de l'Ouest, en particulier le ʿIlm al-Ḥurūf sénégalais. Elle est utilisée pour la réflexion et la guidance, pas pour la divination. Combinez toujours avec la prière (duʿāʾ) et consultez des savants qualifiés pour les décisions importantes.",
      },
      
      // Avertissement
      disclaimer: {
        title: "Avis Important",
        text: "Cet outil fournit une réflexion spirituelle basée sur les sciences islamiques traditionnelles. Ce n'est PAS de la divination (kāhana), qui est interdite. Utilisez-le comme guide de réflexion personnelle, toujours combiné avec la prière (duʿāʾ), la sagesse pratique (ḥikma), et la consultation de savants qualifiés. Tous les résultats sont déterminés par Allah seul (Qadr).",
      },
    },
  },
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;
