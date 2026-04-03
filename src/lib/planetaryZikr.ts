export type LocalizedText = { en: string; fr: string };

export type ZikrEntry = {
  name: string;
  arabicName?: string;
  count: string;
  benefit: LocalizedText;
  note?: LocalizedText;
};

export type PlanetZikr = {
  label: LocalizedText;
  planet: string;
  color: string;
  sectionNote?: LocalizedText;
  zikr: ZikrEntry[];
};

export const PLANETARY_ZIKR: Record<string, PlanetZikr> = {
  sun: {
    label: { en: 'Sun', fr: 'Soleil' },
    planet: '☀️',
    color: '#F5A623',
    zikr: [
      { name: 'Ya Allah', arabicName: 'يَا اللهُ', count: '66 or 594', benefit: { en: 'General remembrance and divine connection.', fr: 'Souvenir général et connexion divine.' } },
      { name: 'Ya Rahman', arabicName: 'يَا رَحْمَانُ', count: '298', benefit: { en: 'For rizq (wealth and provision).', fr: 'Pour le rizq (richesse et provision).' } },
      { name: 'Ya Raheem', arabicName: 'يَا رَحِيمُ', count: '258', benefit: { en: 'For fulfilling needs and resolving difficulties.', fr: 'Pour satisfaire les besoins et résoudre les difficultés.' } },
      { name: 'Ya Malik', arabicName: 'يَا مَلِكُ', count: '90', benefit: { en: 'For support and success in endeavors.', fr: 'Pour le soutien et le succès dans les entreprises.' } },
      { name: 'Ya Quddus', arabicName: 'يَا قُدُّوسُ', count: '170', benefit: { en: 'For purification, forgiveness, and spiritual cleansing.', fr: 'Pour la purification, le pardon et la purification spirituelle.' } },
      { name: 'Ya Salam', arabicName: 'يَا سَلَامُ', count: '122', benefit: { en: 'For inner peace and forgiveness.', fr: 'Pour la paix intérieure et le pardon.' } },
      { name: "Ya Mu'min", arabicName: 'يَا مُؤْمِنُ', count: '126', benefit: { en: 'For protection from enemies.', fr: 'Pour la protection contre les ennemis.' } },
      { name: 'Ya Hakim', arabicName: 'يَا حَكِيمُ', count: '78', benefit: { en: 'For wisdom, shahada, and blessings.', fr: 'Pour la sagesse, la shahada et les bénédictions.' } },
      { name: "Ya 'Adl", arabicName: 'يَا عَدْلُ', count: '104', benefit: { en: 'For tawfiq and avoiding sinful actions.', fr: 'Pour le tawfiq et éviter les actions pécheresses.' } },
      { name: "Ya Bari'", arabicName: 'يَا بَارِئُ', count: '213', benefit: { en: 'For strength and overcoming enemies.', fr: 'Pour la force et surmonter les ennemis.' } },
      { name: 'Ya Musawwir', arabicName: 'يَا مُصَوِّرُ', count: '226', benefit: { en: 'To stay consistent in good deeds.', fr: 'Pour rester constant dans les bonnes actions.' } },
      { name: "Ya Rafi'", arabicName: 'يَا رَافِعُ', count: '251', benefit: { en: 'For elevation, respect, and being loved.', fr: "Pour l'élévation, le respect et être aimé." } },
      { name: 'Ya Halim', arabicName: 'يَا حَلِيمُ', count: '88', benefit: { en: 'For calmness and patience.', fr: 'Pour le calme et la patience.' } },
      { name: 'Ya Basir', arabicName: 'يَا بَصِيرُ', count: '302', benefit: { en: 'For clarity and insight.', fr: 'Pour la clarté et la perspicacité.' } },
    ],
  },
  venus: {
    label: { en: 'Venus', fr: 'Vénus' },
    planet: '♀️',
    color: '#C770CF',
    zikr: [
      { name: 'Ya Ghaffar', arabicName: 'يَا غَفَّارُ', count: '1281', benefit: { en: 'Increase in blessings and goodness.', fr: 'Augmentation des bénédictions et de la bonté.' } },
      { name: 'Ya Wahhab', arabicName: 'يَا وَهَّابُ', count: '14', benefit: { en: 'For wealth and prosperity.', fr: 'Pour la richesse et la prospérité.' } },
      { name: 'Ya Razzaq', arabicName: 'يَا رَزَّاقُ', count: '308', benefit: { en: 'For sustenance and provision.', fr: 'Pour la subsistance et la provision.' } },
      { name: 'Ya Qabid', arabicName: 'يَا قَابِضُ', count: '903', benefit: { en: 'For abundance in different forms of wealth.', fr: "Pour l'abondance sous différentes formes de richesse." } },
      { name: 'Ya Latif', arabicName: 'يَا لَطِيفُ', count: '129', benefit: { en: 'For resolving difficulties and subtle ease.', fr: 'Pour résoudre les difficultés et la facilité subtile.' } },
      { name: "Ya Jami'", arabicName: 'يَا جَامِعُ', count: '114', benefit: { en: 'For fixing relationships and marriage.', fr: 'Pour rétablir les relations et le mariage.' } },
    ],
  },
  mars: {
    label: { en: 'Mars', fr: 'Mars' },
    planet: '♂️',
    color: '#E25822',
    sectionNote: { en: 'Used for protection, defense, and overcoming enemies.', fr: 'Utilisé pour la protection, la défense et surmonter les ennemis.' },
    zikr: [
      { name: 'Ya Khafid', arabicName: 'يَا خَافِضُ', count: '1480', benefit: { en: 'Protection from enemies and their plots.', fr: 'Protection contre les ennemis et leurs complots.' } },
      { name: 'Ya Muzil', arabicName: 'يَا مُذِلُّ', count: '770', benefit: { en: 'To overcome and humble enemies.', fr: 'Pour surmonter et humilier les ennemis.' } },
      { name: 'Ya Jabbar', arabicName: 'يَا جَبَّارُ', count: '217', benefit: { en: 'For strength against oppression or harm.', fr: "Pour la force contre l'oppression ou le tort." }, note: { en: 'especially Tuesday', fr: 'surtout mardi' } },
      { name: 'Ya Qahhar', arabicName: 'يَا قَهَّارُ', count: '306', benefit: { en: 'For overpowering enemies.', fr: 'Pour dominer les ennemis.' } },
    ],
  },
  moon: { label: { en: 'Moon', fr: 'Lune' }, planet: '🌙', color: '#A8B8D0', zikr: [] },
  mercury: { label: { en: 'Mercury', fr: 'Mercure' }, planet: '☿️', color: '#7EC8C8', zikr: [] },
  jupiter: {
    label: { en: 'Jupiter', fr: 'Jupiter' },
    planet: '♃',
    color: '#4A90D9',
    sectionNote: { en: 'Recite with Kāfūr, ʿŪd, Jawiya, or Mastakā. Angel: Isrāfīl / Samhārūsī. Talisman: Murābaḥa.', fr: 'Réciter avec Kāfūr, ʿŪd, Jawiya, ou Mastakā. Ange : Isrāfīl / Samhārūsī. Talisman : Murābaḥa.' },
    zikr: [
      { name: 'Ya Muhayminu', count: '135', benefit: { en: 'Divine protection and guardianship.', fr: 'Protection divine et tutelle.' } },
      { name: 'Ya Halimu', count: '150', benefit: { en: 'Attracting favour and softening hearts (Taskhīr).', fr: 'Attirer la faveur et adoucir les cœurs (Taskhīr).' } },
      { name: 'Ya Muhsi', count: '117', benefit: { en: 'Divine accounting and precision.', fr: 'Comptabilité divine et précision.' } },
      { name: "Ya Sami'u", count: '180', benefit: { en: 'Having prayers answered (Ijābah).', fr: 'Faire exaucer ses prières (Ijābah).' } },
      { name: 'Ya Mutakabbiru', count: '662', benefit: { en: 'Commanding respect and dignified presence (Haybah).', fr: 'Commander le respect et une présence digne (Haybah).' } },
      { name: "Ya 'Azizu", count: '93', benefit: { en: 'Strength in leadership and personal growth.', fr: 'Force dans le leadership et la croissance personnelle.' } },
      { name: 'Ya Muhayminu', count: '108', benefit: { en: 'Restoring respect and reclaiming what is rightfully yours.', fr: "Rétablir le respect et récupérer ce qui vous appartient de droit." } },
      { name: 'Ya Baqi', count: '113', benefit: { en: 'Career stability and establishing firm authority.', fr: "Stabilité professionnelle et établissement d'une autorité ferme." } },
    ],
  },
  saturn: { label: { en: 'Saturn', fr: 'Saturne' }, planet: '♄', color: '#6B6B6B', zikr: [] },
};