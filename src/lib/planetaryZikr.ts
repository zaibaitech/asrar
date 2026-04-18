export type ZikrEntry = {
  name: string;
  arabicName?: string;
  count: string;
  benefit: string;
  note?: string;
};

export type PlanetZikr = {
  label: string;
  planet: string;
  color: string;
  sectionNote?: string;
  zikr: ZikrEntry[];
};

export const PLANETARY_ZIKR: Record<string, PlanetZikr> = {
  sun: {
    label: 'Sun',
    planet: '☀️',
    color: '#F5A623',
    zikr: [
      { name: 'Ya Allah', arabicName: 'يَا اللهُ', count: '66 or 594', benefit: 'General remembrance and divine connection.' },
      { name: 'Ya Rahman', arabicName: 'يَا رَحْمَانُ', count: '298', benefit: 'For rizq (wealth and provision).' },
      { name: 'Ya Raheem', arabicName: 'يَا رَحِيمُ', count: '258', benefit: 'For fulfilling needs and resolving difficulties.' },
      { name: 'Ya Malik', arabicName: 'يَا مَلِكُ', count: '90', benefit: 'For support and success in endeavors.' },
      { name: 'Ya Quddus', arabicName: 'يَا قُدُّوسُ', count: '170', benefit: 'For purification, forgiveness, and spiritual cleansing.' },
      { name: 'Ya Salam', arabicName: 'يَا سَلَامُ', count: '122', benefit: 'For inner peace and forgiveness.' },
      { name: "Ya Mu'min", arabicName: 'يَا مُؤْمِنُ', count: '126', benefit: 'For protection from enemies.' },
      { name: 'Ya Hakim', arabicName: 'يَا حَكِيمُ', count: '78', benefit: 'For wisdom, shahada, and blessings.' },
      { name: "Ya 'Adl", arabicName: 'يَا عَدْلُ', count: '104', benefit: 'For tawfiq and avoiding sinful actions.' },
      { name: "Ya Bari'", arabicName: 'يَا بَارِئُ', count: '213', benefit: 'For strength and overcoming enemies.' },
      { name: 'Ya Musawwir', arabicName: 'يَا مُصَوِّرُ', count: '226', benefit: 'To stay consistent in good deeds.' },
      { name: "Ya Rafi'", arabicName: 'يَا رَافِعُ', count: '251', benefit: 'For elevation, respect, and being loved.' },
      { name: 'Ya Halim', arabicName: 'يَا حَلِيمُ', count: '88', benefit: 'For calmness and patience.' },
      { name: 'Ya Basir', arabicName: 'يَا بَصِيرُ', count: '302', benefit: 'For clarity and insight.' },
    ],
  },
  venus: {
    label: 'Venus',
    planet: '♀️',
    color: '#C770CF',
    zikr: [
      { name: 'Ya Ghaffar', arabicName: 'يَا غَفَّارُ', count: '1281', benefit: 'Increase in blessings and goodness.' },
      { name: 'Ya Wahhab', arabicName: 'يَا وَهَّابُ', count: '14', benefit: 'For wealth and prosperity.' },
      { name: 'Ya Razzaq', arabicName: 'يَا رَزَّاقُ', count: '308', benefit: 'For sustenance and provision.' },
      { name: 'Ya Qabid', arabicName: 'يَا قَابِضُ', count: '903', benefit: 'For abundance in different forms of wealth.' },
      { name: 'Ya Latif', arabicName: 'يَا لَطِيفُ', count: '129', benefit: 'For resolving difficulties and subtle ease.' },
      { name: "Ya Jami'", arabicName: 'يَا جَامِعُ', count: '114', benefit: 'For fixing relationships and marriage.' },
    ],
  },
  mars: {
    label: 'Mars',
    planet: '♂️',
    color: '#E25822',
    sectionNote: 'Used for protection, defense, and overcoming enemies.',
    zikr: [
      { name: 'Ya Khafid', arabicName: 'يَا خَافِضُ', count: '1480', benefit: 'Protection from enemies and their plots.' },
      { name: 'Ya Muzil', arabicName: 'يَا مُذِلُّ', count: '770', benefit: 'To overcome and humble enemies.' },
      { name: 'Ya Jabbar', arabicName: 'يَا جَبَّارُ', count: '217', benefit: 'For strength against oppression or harm.', note: 'especially Tuesday' },
      { name: 'Ya Qahhar', arabicName: 'يَا قَهَّارُ', count: '306', benefit: 'For overpowering enemies.' },
    ],
  },
  moon: { label: 'Moon', planet: '🌙', color: '#A8B8D0', zikr: [] },
  mercury: { label: 'Mercury', planet: '☿️', color: '#7EC8C8', zikr: [] },
  jupiter: {
    label: 'Jupiter',
    planet: '♃',
    color: '#4A90D9',
    sectionNote: 'Recite with Kāfūr, ʿŪd, Jawiya, or Mastakā. Angel: Isrāfīl / Samhārūsī. Talisman: Murābaḥa.',
    zikr: [
      { name: 'Ya Muhayminu', count: '135', benefit: 'Divine protection and guardianship.' },
      { name: 'Ya Halimu', count: '150', benefit: 'Attracting favour and softening hearts (Taskhīr).' },
      { name: 'Ya Muhsi', count: '117', benefit: 'Divine accounting and precision.' },
      { name: "Ya Sami'u", count: '180', benefit: 'Having prayers answered (Ijābah).' },
      { name: 'Ya Mutakabbiru', count: '662', benefit: 'Commanding respect and dignified presence (Haybah).' },
      { name: "Ya 'Azizu", count: '93', benefit: 'Strength in leadership and personal growth.' },
      { name: 'Ya Muhayminu', count: '108', benefit: 'Restoring respect and reclaiming what is rightfully yours.' },
      { name: 'Ya Baqi', count: '113', benefit: 'Career stability and establishing firm authority.' },
    ],
  },
  saturn: { label: 'Saturn', planet: '♄', color: '#6B6B6B', zikr: [] },
};