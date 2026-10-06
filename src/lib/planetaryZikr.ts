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
  moon: {
    label: 'Moon',
    planet: '🌙',
    color: '#A8B8D0',
    // Short list from practice-hints (Raḥmān) + planetGuides/SEO page (Laṭīf, Wadūd, Raḥīm).
    // Counts = abjad values in src/data/divine-names.ts (#1, #2, #30, #47).
    zikr: [
      { name: 'Ya Latif', arabicName: 'يَا لَطِيفُ', count: '129', benefit: 'For gentleness, subtle ease, and calming the heart.' },
      { name: 'Ya Rahman', arabicName: 'يَا رَحْمَانُ', count: '298', benefit: 'For mercy, ease in transitions, and emotional balance.' },
      { name: 'Ya Raheem', arabicName: 'يَا رَحِيمُ', count: '258', benefit: 'For compassion and softness in family and home matters.' },
      { name: 'Ya Wadud', arabicName: 'يَا وَدُودُ', count: '20', benefit: 'For affection, harmony, and softening of hearts.' },
    ],
  },
  mercury: {
    label: 'Mercury',
    planet: '☿️',
    color: '#7EC8C8',
    // Matches practice-hints / planetGuides / planetary-hours SEO strings (ʿAlīm, Ḥakīm, Khabīr).
    // Counts = abjad in divine-names.ts (#19, #46, #31).
    zikr: [
      { name: "Ya 'Alim", arabicName: 'يَا عَلِيمُ', count: '150', benefit: 'For clarity of mind and beneficial knowledge.' },
      { name: 'Ya Hakim', arabicName: 'يَا حَكِيمُ', count: '78', benefit: 'For wisdom in speech, study, and decisions.' },
      { name: 'Ya Khabir', arabicName: 'يَا خَبِيرُ', count: '812', benefit: 'For insight and awareness in learning and communication.' },
    ],
  },
  jupiter: {
    label: 'Jupiter',
    planet: '♃',
    color: '#4A90D9',
    // Reflection only — Names from the prior list + practice-hints (Razzāq) /
    // planetGuides & SEO (Wāsiʿ, Karīm). Counts = abjad in divine-names.ts.
    // Duplicate Ya Muhayminu (135 / 108) collapsed to a single abjad count (145).
    sectionNote: 'Thursday\'s planet in classical ʿIlm al-Nujūm — for remembrance, generosity, and reliance on Allah\'s provision. Not prediction.',
    zikr: [
      { name: 'Ya Razzaq', arabicName: 'يَا رَزَّاقُ', count: '308', benefit: 'For provision, barakah, and trust in Allah as Provider.' },
      { name: "Ya Wasi'", arabicName: 'يَا وَاسِعُ', count: '137', benefit: 'For spaciousness of heart and ease in what feels tight.' },
      { name: 'Ya Karim', arabicName: 'يَا كَرِيمُ', count: '270', benefit: 'For generosity and noble character.' },
      { name: 'Ya Muhaymin', arabicName: 'يَا مُهَيْمِنُ', count: '145', benefit: 'For mindful reliance on Allah\'s care and guardianship.' },
      { name: 'Ya Halim', arabicName: 'يَا حَلِيمُ', count: '88', benefit: 'For forbearance and a softened heart.' },
      { name: 'Ya Muhsi', arabicName: 'يَا مُحْصِي', count: '148', benefit: 'For care and precision in what one undertakes.' },
      { name: "Ya Sami'", arabicName: 'يَا سَمِيعُ', count: '180', benefit: 'For turning to the All-Hearing in duʿāʾ.' },
      { name: 'Ya Mutakabbir', arabicName: 'يَا مُتَكَبِّرُ', count: '662', benefit: 'For humility before the Most Great and dignity without arrogance.' },
      { name: "Ya 'Aziz", arabicName: 'يَا عَزِيزُ', count: '94', benefit: 'For strength with honour in righteous effort.' },
      { name: 'Ya Baqi', arabicName: 'يَا بَاقِي', count: '113', benefit: 'For steadfastness and what endures of good deeds.' },
    ],
  },
  saturn: {
    label: 'Saturn',
    planet: '♄',
    color: '#6B6B6B',
    // practice-hints (Ṣabūr) + planetGuides (Ḥakīm, Ḥalīm) + SEO Matīn; Ḥāfiẓ deferred (scholar review).
    // Counts = abjad in divine-names.ts (#99, #46, #32, #54).
    zikr: [
      { name: 'Ya Sabur', arabicName: 'يَا صَبُورُ', count: '298', benefit: 'For patience and steadfastness in long work.' },
      { name: 'Ya Hakim', arabicName: 'يَا حَكِيمُ', count: '78', benefit: 'For wise restraint and sound judgment.' },
      { name: 'Ya Halim', arabicName: 'يَا حَلِيمُ', count: '88', benefit: 'For forbearance when progress feels slow.' },
      { name: 'Ya Matin', arabicName: 'يَا مَتِينُ', count: '500', benefit: 'For firmness, discipline, and steady resolve.' },
    ],
  },
};