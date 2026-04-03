export type ZikrEntry = {
  name: string;
  arabicName?: string;
  count: string;
  benefit: string;
  benefitFr?: string;
  note?: string;
  noteFr?: string;
};

export type PlanetZikr = {
  label: string;
  planet: string;
  color: string;
  sectionNote?: string;
  sectionNoteFr?: string;
  zikr: ZikrEntry[];
};

export const PLANETARY_ZIKR: Record<string, PlanetZikr> = {
  sun: {
    label: 'Sun',
    planet: '☀️',
    color: '#F5A623',
    zikr: [
      { name: 'Ya Allah', arabicName: 'يَا اللهُ', count: '66 or 594', benefit: 'General remembrance and divine connection.', benefitFr: 'Souvenir général et connexion divine.' },
      { name: 'Ya Rahman', arabicName: 'يَا رَحْمَانُ', count: '298', benefit: 'For rizq (wealth and provision).', benefitFr: 'Pour le rizq (richesse et provision).' },
      { name: 'Ya Raheem', arabicName: 'يَا رَحِيمُ', count: '258', benefit: 'For fulfilling needs and resolving difficulties.', benefitFr: 'Pour satisfaire les besoins et résoudre les difficultés.' },
      { name: 'Ya Malik', arabicName: 'يَا مَلِكُ', count: '90', benefit: 'For support and success in endeavors.', benefitFr: 'Pour le soutien et le succès dans les entreprises.' },
      { name: 'Ya Quddus', arabicName: 'يَا قُدُّوسُ', count: '170', benefit: 'For purification, forgiveness, and spiritual cleansing.', benefitFr: 'Pour la purification, le pardon et le nettoyage spirituel.' },
      { name: 'Ya Salam', arabicName: 'يَا سَلَامُ', count: '122', benefit: 'For inner peace and forgiveness.', benefitFr: 'Pour la paix intérieure et le pardon.' },
      { name: "Ya Mu'min", arabicName: 'يَا مُؤْمِنُ', count: '126', benefit: 'For protection from enemies.', benefitFr: 'Pour la protection contre les ennemis.' },
      { name: 'Ya Hakim', arabicName: 'يَا حَكِيمُ', count: '78', benefit: 'For wisdom, shahada, and blessings.', benefitFr: 'Pour la sagesse, la shahada et les bénédictions.' },
      { name: "Ya 'Adl", arabicName: 'يَا عَدْلُ', count: '104', benefit: 'For tawfiq and avoiding sinful actions.', benefitFr: 'Pour le tawfiq et éviter les actions pécheresses.' },
      { name: "Ya Bari'", arabicName: 'يَا بَارِئُ', count: '213', benefit: 'For strength and overcoming enemies.', benefitFr: 'Pour la force et surmonter les ennemis.' },
      { name: 'Ya Musawwir', arabicName: 'يَا مُصَوِّرُ', count: '226', benefit: 'To stay consistent in good deeds.', benefitFr: 'Pour rester constant dans les bonnes actions.' },
      { name: "Ya Rafi'", arabicName: 'يَا رَافِعُ', count: '251', benefit: 'For elevation, respect, and being loved.', benefitFr: "Pour l'élévation, le respect et être aimé." },
      { name: 'Ya Halim', arabicName: 'يَا حَلِيمُ', count: '88', benefit: 'For calmness and patience.', benefitFr: 'Pour le calme et la patience.' },
      { name: 'Ya Basir', arabicName: 'يَا بَصِيرُ', count: '302', benefit: 'For clarity and insight.', benefitFr: 'Pour la clarté et la perspicacité.' },
    ],
  },
  venus: {
    label: 'Venus',
    planet: '♀️',
    color: '#C770CF',
    zikr: [
      { name: 'Ya Ghaffar', arabicName: 'يَا غَفَّارُ', count: '1281', benefit: 'Increase in blessings and goodness.', benefitFr: 'Augmentation des bénédictions et de la bonté.' },
      { name: 'Ya Wahhab', arabicName: 'يَا وَهَّابُ', count: '14', benefit: 'For wealth and prosperity.', benefitFr: 'Pour la richesse et la prospérité.' },
      { name: 'Ya Razzaq', arabicName: 'يَا رَزَّاقُ', count: '308', benefit: 'For sustenance and provision.', benefitFr: 'Pour la subsistance et la provision.' },
      { name: 'Ya Qabid', arabicName: 'يَا قَابِضُ', count: '903', benefit: 'For abundance in different forms of wealth.', benefitFr: "Pour l'abondance sous différentes formes de richesse." },
      { name: 'Ya Latif', arabicName: 'يَا لَطِيفُ', count: '129', benefit: 'For resolving difficulties and subtle ease.', benefitFr: 'Pour résoudre les difficultés et une aisance subtile.' },
      { name: "Ya Jami'", arabicName: 'يَا جَامِعُ', count: '114', benefit: 'For fixing relationships and marriage.', benefitFr: 'Pour rétablir les relations et le mariage.' },
    ],
  },
  mars: {
    label: 'Mars',
    planet: '♂️',
    color: '#E25822',
    sectionNote: 'Used for protection, defense, and overcoming enemies.',
    sectionNoteFr: 'Utilisé pour la protection, la défense et la victoire sur les ennemis.',
    zikr: [
      { name: 'Ya Khafid', arabicName: 'يَا خَافِضُ', count: '1480', benefit: 'Protection from enemies and their plots.', benefitFr: 'Protection contre les ennemis et leurs complots.' },
      { name: 'Ya Muzil', arabicName: 'يَا مُذِلُّ', count: '770', benefit: 'To overcome and humble enemies.', benefitFr: 'Pour vaincre et humilier les ennemis.' },
      { name: 'Ya Jabbar', arabicName: 'يَا جَبَّارُ', count: '217', benefit: 'For strength against oppression or harm.', benefitFr: "Pour la force contre l'oppression ou le tort.", note: 'especially Tuesday', noteFr: 'surtout mardi' },
      { name: 'Ya Qahhar', arabicName: 'يَا قَهَّارُ', count: '306', benefit: 'For overpowering enemies.', benefitFr: 'Pour dominer les ennemis.' },
    ],
  },
  moon: { label: 'Moon', planet: '🌙', color: '#A8B8D0', zikr: [] },
  mercury: { label: 'Mercury', planet: '☿️', color: '#7EC8C8', zikr: [] },
  jupiter: {
    label: 'Jupiter',
    planet: '♃',
    color: '#4A90D9',
    sectionNote: 'Recite with Kāfūr, ʿŪd, Jawiya, or Mastakā. Angel: Isrāfīl / Samhārūsī. Talisman: Murābaḥa.',
    sectionNoteFr: 'Réciter avec Kāfūr, ʿŪd, Jawiya ou Mastakā. Ange : Isrāfīl / Samhārūsī. Talisman : Murābaḥa.',
    zikr: [
      { name: 'Ya Muhayminu', count: '135', benefit: 'Divine protection and guardianship.', benefitFr: 'Protection divine et sauvegarde.' },
      { name: 'Ya Halimu', count: '150', benefit: 'Attracting favour and softening hearts (Taskhīr).', benefitFr: 'Attirer la faveur et adoucir les cœurs (Taskhīr).' },
      { name: 'Ya Muhsi', count: '117', benefit: 'Divine accounting and precision.', benefitFr: 'Comptabilité divine et précision.' },
      { name: "Ya Sami'u", count: '180', benefit: 'Having prayers answered (Ijābah).', benefitFr: "Obtenir l'exaucement des prières (Ijābah)." },
      { name: 'Ya Mutakabbiru', count: '662', benefit: 'Commanding respect and dignified presence (Haybah).', benefitFr: 'Inspirer le respect et une présence digne (Haybah).' },
      { name: "Ya 'Azizu", count: '93', benefit: 'Strength in leadership and personal growth.', benefitFr: 'Force dans le leadership et la progression personnelle.' },
      { name: 'Ya Muhayminu', count: '108', benefit: 'Restoring respect and reclaiming what is rightfully yours.', benefitFr: 'Rétablir le respect et récupérer ce qui vous revient de droit.' },
      { name: 'Ya Baqi', count: '113', benefit: 'Career stability and establishing firm authority.', benefitFr: 'Stabilité professionnelle et autorité solide.' },
    ],
  },
  saturn: { label: 'Saturn', planet: '♄', color: '#6B6B6B', zikr: [] },
};