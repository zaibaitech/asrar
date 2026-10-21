/* eslint-disable */
// Split out of src/lib/translations.ts (no content changes).
export const fr = {
  // Sélecteur du système Abjad (un seul choix pour tous les calculateurs)
  abjadSystem: {
    note: "Maghribi (Maghreb, al-Andalus et Afrique de l'Ouest) · Mashriqi (Égypte, Moyen-Orient et Asie)",
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

  nav: {
    home: "Accueil",
    calculator: "Calculatrice",
    letterCalculator: "Calculatrice de Lettres",
    compatibility: "Compatibilité",
    planetaryHours: "Heures Planétaires",
    planetary: "Alignement Planétaire",
    about: "À Propos",
    aboutApp: "About This App",
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
    // Modal Ajouter un Défi
    addChallenge: {
      title: "Ajouter un Défi de Wird",
      subtitle: "Choisissez un wird pour suivre vos dévotions quotidiennes",
      salawatTitle: "Ṣalawāt",
      salawatDescription: "Bénédictions sur le Prophète ﷺ",
      propheticNamesTitle: "201 Noms Saints",
      propheticNamesDescription: "Abondance Rizq · Pratique Matinale de 7 Jours",
      debtReliefTitle: "Wird pour Libération des Dettes",
      debtReliefDescription: "1000× après ʿIshāʾ pour la libération des dettes",
      divineNameTitle: "Nom Divin",
      divineNameDescription: "Récitez l'un des 99 Noms d'Allah",
      customTitle: "Wird Personnalisé",
      customDescription: "Ajoutez votre propre dhikr ou wird",
      customWird: "Wird Personnalisé",
      special: "Spécial",
      alreadyAdded: "Déjà Ajouté",
      back: "Retour",
      chooseSalawat: "Choisir un Ṣalawāt",
      tapToPreview: "Appuyez pour prévisualiser le texte complet",
      recommended: "Recommandé :",
      perDay: "par jour",
      viewFullText: "Voir le texte complet →",
      transliteration: "Translittération",
      showMeaning: "Afficher la Signification",
      recommendedDailyTarget: "Objectif Quotidien Recommandé",
      alreadyAddedButton: "Déjà Ajouté",
      selectThisSalawat: "Sélectionner ce Ṣalawāt",
      chooseDivineName: "Choisir un Nom Divin",
      addDivineName: "Ajouter le Défi du Nom Divin",
      titleLabel: "Titre",
      titlePlaceholder: "ex. Tasbīḥ",
      arabicText: "Texte Arabe",
      dailyTarget: "Objectif Quotidien",
      ramadanTarget: "Total sur 30 jours",
      addCustomWird: "Ajouter le Wird Personnalisé",
      steps: "Étapes :",
      names: "Noms",
      spiritualPurpose: "But Spirituel",
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

    incense: {
      recommendedBakhoor: "Encens recommandé (Bakhoor)",
      footerNote: "Une aide traditionnelle pour une atmosphère de recueillement — l'essentiel reste l'intention (niyyah) et le dhikr.",
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
};
