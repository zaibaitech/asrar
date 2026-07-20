/**
 * Page-scoped copy for the Ikhtiyārāt (Best Dates) feature.
 * Follows the local-translations-object convention used by
 * app/ramadan/RamadanPage.tsx and app/planetary-hours/PlanetaryHoursPage.tsx
 * rather than growing the global src/lib/translations.ts dictionary.
 */

export type UiLang = 'en' | 'fr';

export const ikhtiyaratCopy = {
  en: {
    title: 'Best Dates',
    subtitle: 'Ikhtiyārāt',
    electionTypeLabel: 'Occasion',
    electionTypeMarriage: 'Marriage',
    electionTypeTravel: 'Travel',
    electionTypeBusiness: 'Business / Contracts',
    electionTypeMedical: 'Medical Treatment',
    tabCheck: 'Check My Date',
    tabScan: 'Find Best Dates',
    disclaimerTitle: 'Before you begin',
    disclaimer:
      'This tool reflects a refinement from the classical Islamic tradition of ʿIlm al-Nujūm (electional astrology). It is not a substitute for istikhāra, consultation (mashwara) with family and trusted scholars, and tawakkul (reliance on Allah). No date is religiously forbidden for nikāḥ — marriage is permitted at any time of the year.',
    disclaimerAccept: "I understand — let's begin",
    datePickerLabel: 'Date',
    timePickerLabel: 'Time (optional)',
    locationLabel: 'Location',
    useMyLocation: 'Use my location',
    checkButton: 'Check this date',
    scanRangeStart: 'From',
    scanRangeEnd: 'To',
    scanButton: 'Scan this range',
    bestWindow: 'Best time window',
    leastAfflictedWindow: 'Least-afflicted time',
    hijriDate: 'Hijri date',
    starsLabel: 'Stars (Ikhtiyārāt)',
    sunnahBadge: 'Sunnah & Fiqh',
    urfLabel: 'Custom (ʿUrf)',
    ruleBreakdown: 'Full breakdown',
    nearestBetterDates: 'Nearest better dates',
    noAcceptableDatesFound: 'No acceptable dates found within 45 days.',
    showingBestAvailable: 'Showing the best available option instead:',
    topFive: 'Top 5 dates',
    loading: 'Calculating…',
    scoreLabel: 'Score',
    hijriEra: 'AH',
    close: 'Close',
    aboutLink: 'About this feature / Adab',
    shareButton: 'Share',
    linkCopied: 'Link copied!',
    howScoringWorks: 'How scoring works: each rule adds or subtracts points; the total is scaled to a 0–100 score against that election type\'s own maximum achievable points, so the tier bands (Mumtāz, Jayyid, Maqbūl, Ḍaʿīf, Ijtanib) mean the same thing across marriage, travel, and any future election type.',
  },
  fr: {
    title: 'Meilleures Dates',
    subtitle: 'Ikhtiyārāt',
    electionTypeLabel: 'Occasion',
    electionTypeMarriage: 'Mariage',
    electionTypeTravel: 'Voyage',
    electionTypeBusiness: 'Affaires / Contrats',
    electionTypeMedical: 'Traitement médical',
    tabCheck: 'Vérifier ma date',
    tabScan: 'Trouver les meilleures dates',
    disclaimerTitle: 'Avant de commencer',
    disclaimer:
      "Cet outil reflète un raffinement de la tradition islamique classique de ʿIlm al-Nujūm (astrologie électionnelle). Il ne remplace pas l'istikhāra, la consultation (mashwara) avec la famille et des savants de confiance, et le tawakkul (confiance en Allah). Aucune date n'est religieusement interdite pour le nikāḥ — le mariage est permis à tout moment de l'année.",
    disclaimerAccept: "J'ai compris — commençons",
    datePickerLabel: 'Date',
    timePickerLabel: 'Heure (optionnel)',
    locationLabel: 'Lieu',
    useMyLocation: 'Utiliser ma position',
    checkButton: 'Vérifier cette date',
    scanRangeStart: 'Du',
    scanRangeEnd: 'Au',
    scanButton: 'Analyser cette période',
    bestWindow: 'Meilleure fenêtre horaire',
    leastAfflictedWindow: 'Moment le moins affecté',
    hijriDate: 'Date hégirienne',
    starsLabel: 'Astres (Ikhtiyārāt)',
    sunnahBadge: 'Sunna & Fiqh',
    urfLabel: 'Coutume (ʿUrf)',
    ruleBreakdown: 'Détail complet',
    nearestBetterDates: 'Dates plus favorables les plus proches',
    noAcceptableDatesFound: 'Aucune date acceptable trouvée dans les 45 jours.',
    showingBestAvailable: 'Affichage de la meilleure option disponible :',
    topFive: 'Top 5 des dates',
    loading: 'Calcul en cours…',
    scoreLabel: 'Score',
    hijriEra: 'AH',
    close: 'Fermer',
    aboutLink: 'À propos de cette fonctionnalité / Adab',
    shareButton: 'Partager',
    linkCopied: 'Lien copié !',
    howScoringWorks: "Comment le score est calculé : chaque règle ajoute ou retire des points ; le total est ramené à une échelle de 0 à 100 par rapport au maximum de points réalisables pour ce type d'élection, afin que les paliers (Mumtāz, Jayyid, Maqbūl, Ḍaʿīf, Ijtanib) aient la même signification pour le mariage, le voyage et tout futur type d'élection.",
  },
} as const;

export const subtitleArabic = 'اختيارات';

export const disclaimerArabic =
  'يعكس هذا التطبيق تهذيبًا من التراث الإسلامي الكلاسيكي في علم النجوم (الاختيارات). وهو ليس بديلاً عن الاستخارة والمشورة مع الأهل والعلماء الثقات والتوكل على الله. لا يوجد تاريخ محرم شرعًا للزواج — فالنكاح جائز في أي وقت من العام.';

export const howScoringWorksArabic =
  'كيف يُحسب التقييم: كل قاعدة تضيف أو تطرح نقاطًا؛ ويُحوَّل المجموع إلى تقييم من 0 إلى 100 بالنسبة إلى أقصى عدد نقاط يمكن تحقيقه لهذا النوع من الاختيار، بحيث تحمل الفئات (ممتاز، جيد، مقبول، ضعيف، اجتناب) نفس المعنى في الزواج والسفر وأي نوع اختيار مستقبلي.';

export const ruleStatusLabel: Record<string, { en: string; fr: string }> = {
  pass: { en: 'Pass', fr: 'Réussi' },
  fail: { en: 'Fail', fr: 'Échec' },
  bonus: { en: 'Bonus', fr: 'Bonus' },
  penalty: { en: 'Penalty', fr: 'Pénalité' },
  hardfail: { en: 'Hard fail', fr: 'Échec critique' },
};
