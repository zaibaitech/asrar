/**
 * 201 Holy Names of Prophet Muḥammad ﷺ
 * ======================================
 * From the sacred text Dalāʾilu l-Khayrāt of Imam Muḥammad al-Jazūlī
 * 
 * 🌙 Authorized Blessing:
 * Cherno Moussa Yero Sy — Spiritual Master of the Tijaniyya Order
 * 
 * Practice: 7-Day Rizq Abundance Challenge
 * - Recite Allāhu Jāmiʿu 180 times
 * - Recite all 201 Holy Names with Ṣalla-llāhu ʿalayhi wa sallam after each
 * - Once daily in the morning for 7 consecutive days
 */

export interface PropheticName {
  number: number;
  arabic: string;
  transliteration: string;
  meaning: string;
  meaningFr: string;
}

/** The 201 Holy Names of Prophet Muḥammad ﷺ */
export const PROPHETIC_NAMES_201: PropheticName[] = [
  { number: 1, arabic: 'مُحَمَّد', transliteration: 'Muḥammad', meaning: 'The Praised One', meaningFr: 'Le Loué' },
  { number: 2, arabic: 'أَحْمَد', transliteration: 'Aḥmad', meaning: 'The Most Praised', meaningFr: 'Le Plus Loué' },
  { number: 3, arabic: 'حَامِد', transliteration: 'Ḥāmid', meaning: 'The Praiser', meaningFr: 'Celui qui Loue' },
  { number: 4, arabic: 'مَحْمُود', transliteration: 'Maḥmūd', meaning: 'The Commended', meaningFr: 'Le Très Loué' },
  { number: 5, arabic: 'أَحِيد', transliteration: 'Aḥīd', meaning: 'The Unique', meaningFr: 'L\'Unique' },
  { number: 6, arabic: 'وَاحِد', transliteration: 'Wāḥid', meaning: 'The One', meaningFr: 'L\'Un' },
  { number: 7, arabic: 'مَاحٍ', transliteration: 'Māḥin', meaning: 'The Eraser (of idolatry)', meaningFr: 'Celui qui Efface (l\'idolâtrie)' },
  { number: 8, arabic: 'حَاشِر', transliteration: 'Ḥāshirun', meaning: 'The Gatherer', meaningFr: 'Le Rassembleur' },
  { number: 9, arabic: 'عَاقِب', transliteration: 'ʿĀqibun', meaning: 'The Last', meaningFr: 'Le Dernier' },
  { number: 10, arabic: 'طَهَ', transliteration: 'Ṭāhā', meaning: 'O Pure One', meaningFr: 'Ô Pur' },
  { number: 11, arabic: 'يَاسِين', transliteration: 'Yāsīn', meaning: 'O Mighty One', meaningFr: 'Ô Puissant' },
  { number: 12, arabic: 'طَاهِر', transliteration: 'Ṭāhirun', meaning: 'The Pure', meaningFr: 'Le Pur' },
  { number: 13, arabic: 'مُطَّهَر', transliteration: 'Muṭṭāharun', meaning: 'The Purified', meaningFr: 'Le Purifié' },
  { number: 14, arabic: 'طَيِّب', transliteration: 'Ṭayyibun', meaning: 'The Good', meaningFr: 'Le Bon' },
  { number: 15, arabic: 'سَيِّد', transliteration: 'Sayyidun', meaning: 'The Master', meaningFr: 'Le Maître' },
  { number: 16, arabic: 'رَسُول', transliteration: 'Rasūlun', meaning: 'The Messenger', meaningFr: 'Le Messager' },
  { number: 17, arabic: 'نَبِيّ', transliteration: 'Nabīyyun', meaning: 'The Prophet', meaningFr: 'Le Prophète' },
  { number: 18, arabic: 'رَسُولُ الرَّحْمَة', transliteration: 'Rasūlu r-raḥmati', meaning: 'The Messenger of Mercy', meaningFr: 'Le Messager de la Miséricorde' },
  { number: 19, arabic: 'قَيِّم', transliteration: 'Qayyimun', meaning: 'The Overseer', meaningFr: 'Le Superviseur' },
  { number: 20, arabic: 'جَامِع', transliteration: 'Jāmiʿun', meaning: 'The Gatherer', meaningFr: 'Celui qui Rassemble' },
  { number: 21, arabic: 'مُقْتَفِ', transliteration: 'Muqtafin', meaning: 'The Follower', meaningFr: 'Celui qui Suit' },
  { number: 22, arabic: 'مُقَفِّي', transliteration: 'Muqaffī', meaning: 'The Completing', meaningFr: 'Celui qui Parachève' },
  { number: 23, arabic: 'رَسُولُ الْمَلَاحِم', transliteration: 'Rasūlu l-malāḥimi', meaning: 'The Messenger of Battles', meaningFr: 'Le Messager des Grandes Batailles' },
  { number: 24, arabic: 'رَسُولُ الرَّاحَة', transliteration: 'Rasūlu r-rāḥatun', meaning: 'The Messenger of Comfort', meaningFr: 'Le Messager du Réconfort' },
  { number: 25, arabic: 'كَامِل', transliteration: 'Kāmilun', meaning: 'The Perfect', meaningFr: 'Le Parfait' },
  { number: 26, arabic: 'إِكْلِيل', transliteration: 'Iklīlun', meaning: 'The Crown', meaningFr: 'La Couronne' },
  { number: 27, arabic: 'مُدَثِّر', transliteration: 'Mudaththirun', meaning: 'The Cloaked One', meaningFr: 'Celui qui est Enveloppé d\'un Manteau' },
  { number: 28, arabic: 'مُزَمِّل', transliteration: 'Muzammilun', meaning: 'The Wrapped One', meaningFr: 'Celui qui est Enveloppé' },
  { number: 29, arabic: 'عَبْدُ الله', transliteration: 'ʿAbdullāhi', meaning: 'The Servant of Allah', meaningFr: 'Le Serviteur d\'Allah' },
  { number: 30, arabic: 'حَبِيبُ الله', transliteration: 'Ḥabībillāhi', meaning: 'The Beloved of Allah', meaningFr: 'Le Bien-Aimé d\'Allah' },
  { number: 31, arabic: 'صَفِيُّ الله', transliteration: 'Ṣafiyullāhi', meaning: 'The Chosen of Allah', meaningFr: 'L\'Élu d\'Allah' },
  { number: 32, arabic: 'نَجِيُّ الله', transliteration: 'Najiyyullāhi', meaning: 'The Confidant of Allah', meaningFr: 'Le Confident d\'Allah' },
  { number: 33, arabic: 'كَلِيمُ الله', transliteration: 'Kalīmullāhi', meaning: 'The Speaker with Allah', meaningFr: 'Celui qui Parle à Allah' },
  { number: 34, arabic: 'خَاتَمُ الْأَنْبِيَاء', transliteration: 'Khātimu l-anbiyāʾi', meaning: 'Seal of the Prophets', meaningFr: 'Le Sceau des Prophètes' },
  { number: 35, arabic: 'خَاتَمُ الرُّسُل', transliteration: 'Khātimu r-rusuli', meaning: 'Seal of the Messengers', meaningFr: 'Le Sceau des Messagers' },
  { number: 36, arabic: 'مُحْيِ', transliteration: 'Muḥyī', meaning: 'The Reviver', meaningFr: 'Celui qui Ravive' },
  { number: 37, arabic: 'مُنْجِ', transliteration: 'Munjin', meaning: 'The Rescuer', meaningFr: 'Le Sauveur' },
  { number: 38, arabic: 'مُذَكِّر', transliteration: 'Mudhakkirun', meaning: 'The Reminder', meaningFr: 'Celui qui Rappelle' },
  { number: 39, arabic: 'نَاصِر', transliteration: 'Nāṣirun', meaning: 'The Helper', meaningFr: 'Le Défenseur' },
  { number: 40, arabic: 'مَنْصُور', transliteration: 'Manṣūrun', meaning: 'The Victorious', meaningFr: 'Le Victorieux' },
  { number: 41, arabic: 'نَبِيُّ الرَّحْمَة', transliteration: 'Nabīyyu r-raḥmati', meaning: 'The Prophet of Mercy', meaningFr: 'Le Prophète de la Miséricorde' },
  { number: 42, arabic: 'نَبِيُّ التَّوْبَة', transliteration: 'Nabīyyu t-tawbati', meaning: 'The Prophet of Repentance', meaningFr: 'Le Prophète du Repentir' },
  { number: 43, arabic: 'حَرِيصٌ عَلَيْكُم', transliteration: 'Ḥarīsun ʿalaykum', meaning: 'The Watchful Over You', meaningFr: 'Celui qui Veille sur Vous' },
  { number: 44, arabic: 'مَعْلُوم', transliteration: 'Maʿlūmun', meaning: 'The Known One', meaningFr: 'Le Connu' },
  { number: 45, arabic: 'شَهِير', transliteration: 'Shahīrun', meaning: 'The Famous', meaningFr: 'Le Célèbre' },
  { number: 46, arabic: 'شَاهِد', transliteration: 'Shāhidun', meaning: 'The Witnesser', meaningFr: 'Le Témoin Actif' },
  { number: 47, arabic: 'شَهِيد', transliteration: 'Shahīdun', meaning: 'The Witness', meaningFr: 'Le Témoin' },
  { number: 48, arabic: 'مَشْهُود', transliteration: 'Mashhūdun', meaning: 'The Attested', meaningFr: 'L\'Attesté' },
  { number: 49, arabic: 'بَشِير', transliteration: 'Bashīrun', meaning: 'The Glad-Tidings', meaningFr: 'Le Porteur de Bonnes Nouvelles' },
  { number: 50, arabic: 'مُبَشِّر', transliteration: 'Mubashshirun', meaning: 'The Spreader of Good News', meaningFr: 'L\'Annonceur de Bonnes Nouvelles' },
  { number: 51, arabic: 'نَذِير', transliteration: 'Nadhīrun', meaning: 'The Warner', meaningFr: 'L\'Avertisseur' },
  { number: 52, arabic: 'مُنْذِر', transliteration: 'Mundhirun', meaning: 'The Admonisher', meaningFr: 'L\'Admoniteur' },
  { number: 53, arabic: 'نُور', transliteration: 'Nūrun', meaning: 'The Light', meaningFr: 'La Lumière' },
  { number: 54, arabic: 'سِرَاج', transliteration: 'Sirājun', meaning: 'The Lamp', meaningFr: 'La Lampe' },
  { number: 55, arabic: 'مِصْبَاح', transliteration: 'Misbāḥun', meaning: 'The Lantern', meaningFr: 'La Lanterne' },
  { number: 56, arabic: 'هُدًى', transliteration: 'Hudan', meaning: 'The Guidance', meaningFr: 'Le Guide' },
  { number: 57, arabic: 'مَهْدِيّ', transliteration: 'Mahdīyyun', meaning: 'The Rightly Guided', meaningFr: 'Le Bien Guidé' },
  { number: 58, arabic: 'مُنِير', transliteration: 'Munīrun', meaning: 'The Illumined One', meaningFr: 'L\'Illuminé' },
  { number: 59, arabic: 'دَاعٍ', transliteration: 'Dāʿin', meaning: 'The Caller', meaningFr: 'Celui qui Appelle' },
  { number: 60, arabic: 'مَدْعُوّ', transliteration: 'Madʿūwwun', meaning: 'The Called One', meaningFr: 'Celui qui est Appelé' },
  { number: 61, arabic: 'مُجِيب', transliteration: 'Mujībun', meaning: 'The Responsive', meaningFr: 'Celui qui Répond' },
  { number: 62, arabic: 'مُجَاب', transliteration: 'Mujābun', meaning: 'The One Responded To', meaningFr: 'Celui à qui on Répond' },
  { number: 63, arabic: 'حَفِيّ', transliteration: 'Ḥafiyyu', meaning: 'The Gentle', meaningFr: 'Le Doux' },
  { number: 64, arabic: 'عَفُوّ', transliteration: 'ʿAfūwwun', meaning: 'The Overlooker of Sins', meaningFr: 'Celui qui Pardonne les Péchés' },
  { number: 65, arabic: 'وَلِيّ', transliteration: 'Walīyyu', meaning: 'The Friend', meaningFr: 'L\'Ami' },
  { number: 66, arabic: 'حَقّ', transliteration: 'Ḥaqqu', meaning: 'The Truth', meaningFr: 'La Vérité' },
  { number: 67, arabic: 'قَوِيّ', transliteration: 'Qawiyyu', meaning: 'The Powerful', meaningFr: 'Le Puissant' },
  { number: 68, arabic: 'أَمِين', transliteration: 'Amīnun', meaning: 'The Trustworthy', meaningFr: 'Le Digne de Confiance' },
  { number: 69, arabic: 'مَأْمُون', transliteration: 'Māʾmūnun', meaning: 'The Trusted', meaningFr: 'Le Fiable' },
  { number: 70, arabic: 'كَرِيم', transliteration: 'Karīmun', meaning: 'The Generous', meaningFr: 'Le Généreux' },
  { number: 71, arabic: 'مُكَرَّم', transliteration: 'Mukarramun', meaning: 'The Honored', meaningFr: 'L\'Honoré' },
  { number: 72, arabic: 'مَكِين', transliteration: 'Makīnun', meaning: 'The Firm', meaningFr: 'Le Ferme' },
  { number: 73, arabic: 'مَتِين', transliteration: 'Matīnun', meaning: 'The Steadfast', meaningFr: 'Le Constant' },
  { number: 74, arabic: 'مُبِين', transliteration: 'Mubīnun', meaning: 'The Evident', meaningFr: 'L\'Évident' },
  { number: 75, arabic: 'مُؤَمَّل', transliteration: 'Muʾammilun', meaning: 'The One Hoped For', meaningFr: 'Celui en qui on Espère' },
  { number: 76, arabic: 'وَصُول', transliteration: 'Waṣūlun', meaning: 'The Connection', meaningFr: 'Le Lien' },
  { number: 77, arabic: 'ذُو قُوَّة', transliteration: 'Dhū-quwwatin', meaning: 'Possessor of Power', meaningFr: 'Possesseur de la Force' },
  { number: 78, arabic: 'ذُو حُرْمَة', transliteration: 'Dhū-ḥurmatin', meaning: 'Possessor of Honor', meaningFr: 'Possesseur de l\'Honneur' },
  { number: 79, arabic: 'ذُو مَكَانَة', transliteration: 'Dhū-makānatin', meaning: 'Possessor of Firmness', meaningFr: 'Possesseur de la Fermeté' },
  { number: 80, arabic: 'ذُو عِزّ', transliteration: 'Dhū-ʿizzin', meaning: 'Possessor of Might', meaningFr: 'Possesseur de la Puissance' },
  { number: 81, arabic: 'ذُو فَضْل', transliteration: 'Dhū-faḍlin', meaning: 'Possessor of Grace', meaningFr: 'Possesseur de la Grâce' },
  { number: 82, arabic: 'مُطَاع', transliteration: 'Mutāʿun', meaning: 'The One Obeyed', meaningFr: 'Celui à qui on Obéit' },
  { number: 83, arabic: 'مُطِيع', transliteration: 'Muṭīʿun', meaning: 'The Obedient', meaningFr: 'L\'Obéissant' },
  { number: 84, arabic: 'قَدَمُ صِدْق', transliteration: 'Qadamu ṣidqin', meaning: 'The Firm Foothold', meaningFr: 'Le Pied Ferme de la Vérité' },
  { number: 85, arabic: 'رَحْمَة', transliteration: 'Raḥmatun', meaning: 'Mercy', meaningFr: 'La Miséricorde' },
  { number: 86, arabic: 'بُشْرَى', transliteration: 'Bushrā', meaning: 'The Good News', meaningFr: 'La Bonne Nouvelle' },
  { number: 87, arabic: 'غَوْث', transliteration: 'Ghawthun', meaning: 'The Redeemer', meaningFr: 'Le Secouriste' },
  { number: 88, arabic: 'غَيْث', transliteration: 'Ghaythun', meaning: 'The Rain', meaningFr: 'La Pluie Bienfaisante' },
  { number: 89, arabic: 'غِيَاث', transliteration: 'Ghiyāthun', meaning: 'The Rescuer', meaningFr: 'Le Sauveur' },
  { number: 90, arabic: 'نِعْمَةُ الله', transliteration: 'Niʿmatullāhi', meaning: 'The Favor of Allah', meaningFr: 'La Faveur d\'Allah' },
  { number: 91, arabic: 'هَدِيَّةُ الله', transliteration: 'Hadīyyatullāhi', meaning: 'The Gift of Allah', meaningFr: 'Le Don d\'Allah' },
  { number: 92, arabic: 'عُرْوَةٌ وُثْقَى', transliteration: 'ʿUrwatun wuthqā', meaning: 'The Trusty Handhold', meaningFr: 'La Poignée Solide' },
  { number: 93, arabic: 'صِرَاطُ الله', transliteration: 'Sirāṭullāhi', meaning: 'The Path of Allah', meaningFr: 'Le Chemin d\'Allah' },
  { number: 94, arabic: 'صِرَاطٌ مُسْتَقِيم', transliteration: 'Sirāṭun mustaqīmun', meaning: 'The Straight Path', meaningFr: 'Le Droit Chemin' },
  { number: 95, arabic: 'ذِكْرُ الله', transliteration: 'Dhikrullāhi', meaning: 'The Remembrance of Allah', meaningFr: 'Le Rappel d\'Allah' },
  { number: 96, arabic: 'سَيْفُ الله', transliteration: 'Sayfullāhi', meaning: 'The Sword of Allah', meaningFr: 'L\'Épée d\'Allah' },
  { number: 97, arabic: 'حِزْبُ الله', transliteration: 'Ḥizbullāhi', meaning: 'The Party of Allah', meaningFr: 'Le Parti d\'Allah' },
  { number: 98, arabic: 'النَّجْمُ الثَّاقِب', transliteration: 'an-Najmu th-thāqibu', meaning: 'The Piercing Star', meaningFr: 'L\'Étoile Perçante' },
  { number: 99, arabic: 'مُصْطَفَى', transliteration: 'Muṣṭafā', meaning: 'The Chosen One', meaningFr: 'L\'Élu' },
  { number: 100, arabic: 'مُجْتَبَى', transliteration: 'Mujtabā', meaning: 'The Singled-Out', meaningFr: 'Le Distingué' },
  { number: 101, arabic: 'مُنْتَقَى', transliteration: 'Muntaqā', meaning: 'The Selected One', meaningFr: 'Le Sélectionné' },
  { number: 102, arabic: 'أُمِّيّ', transliteration: 'Ummīyyun', meaning: 'The Unlettered', meaningFr: 'L\'Illettré' },
  { number: 103, arabic: 'مُخْتَار', transliteration: 'Mukhtārun', meaning: 'The Chosen', meaningFr: 'Le Choisi' },
  { number: 104, arabic: 'أَجِير', transliteration: 'Ajīrun', meaning: 'Allah\'s Worker', meaningFr: 'Le Serviteur d\'Allah' },
  { number: 105, arabic: 'جَبَّار', transliteration: 'Jabbārun', meaning: 'The Compelling One', meaningFr: 'Le Contraignant' },
  { number: 106, arabic: 'أَبُو الْقَاسِم', transliteration: 'Abū l-Qāsimi', meaning: 'Father of Qāsim', meaningFr: 'Père de Qāsim' },
  { number: 107, arabic: 'أَبُو الطَّاهِر', transliteration: 'Abū ṭ-Ṭāhiru', meaning: 'Father of Ṭāhir', meaningFr: 'Père de Ṭāhir' },
  { number: 108, arabic: 'أَبُو الطَّيِّب', transliteration: 'Abū ṭ-Ṭayyib', meaning: 'Father of Ṭayyib', meaningFr: 'Père de Ṭayyib' },
  { number: 109, arabic: 'أَبُو إِبْرَاهِيم', transliteration: 'Abū Ibrāhīma', meaning: 'Father of Ibrāhīm', meaningFr: 'Père d\'Ibrāhīm' },
  { number: 110, arabic: 'مُشَفَّع', transliteration: 'Mushaffaʿun', meaning: 'Whose Intercession is Accepted', meaningFr: 'Dont l\'Intercession est Acceptée' },
  { number: 111, arabic: 'شَفِيع', transliteration: 'Shāfiʿun', meaning: 'The Interceder', meaningFr: 'L\'Intercesseur' },
  { number: 112, arabic: 'صَالِح', transliteration: 'Ṣāliḥun', meaning: 'The Righteous', meaningFr: 'Le Vertueux' },
  { number: 113, arabic: 'مُصْلِح', transliteration: 'Muṣliḥun', meaning: 'The Conciliator', meaningFr: 'Le Conciliateur' },
  { number: 114, arabic: 'مُهَيْمِن', transliteration: 'Muhayminun', meaning: 'The Guardian', meaningFr: 'Le Gardien' },
  { number: 115, arabic: 'صَادِق', transliteration: 'Ṣādiqun', meaning: 'The Truthful', meaningFr: 'Le Véridique' },
  { number: 116, arabic: 'مُصَدِّق', transliteration: 'Muṣaddaqun', meaning: 'The Confirmer', meaningFr: 'Celui qui Confirme' },
  { number: 117, arabic: 'صِدْق', transliteration: 'Ṣidqun', meaning: 'Sincerity', meaningFr: 'La Sincérité' },
  { number: 118, arabic: 'سَيِّدُ الْمُرْسَلِين', transliteration: 'Sayyidu l-mursalīna', meaning: 'Master of Messengers', meaningFr: 'Maître des Messagers' },
  { number: 119, arabic: 'إِمَامُ الْمُتَّقِين', transliteration: 'Imāmu l-muttaqīna', meaning: 'Leader of the God-Fearing', meaningFr: 'Imam des Pieux' },
  { number: 120, arabic: 'قَائِدُ الْغُرِّ الْمُحَجَّلِين', transliteration: 'Qāʾidu l-ghurri l-muḥajjalīna', meaning: 'Guide of the Bright Shining Ones', meaningFr: 'Guide des Visages Resplendissants' },
  { number: 121, arabic: 'خَلِيلُ الرَّحْمَن', transliteration: 'Khalīlu r-raḥmāni', meaning: 'Friend of the Merciful', meaningFr: 'L\'Ami du Miséricordieux' },
  { number: 122, arabic: 'بَرّ', transliteration: 'Barrun', meaning: 'The Pious', meaningFr: 'Le Pieux' },
  { number: 123, arabic: 'مَبَرّ', transliteration: 'Mabarrun', meaning: 'The Venerated', meaningFr: 'Le Vénéré' },
  { number: 124, arabic: 'وَجِيه', transliteration: 'Wajīhun', meaning: 'The Eminent', meaningFr: 'L\'Éminent' },
  { number: 125, arabic: 'نَصِيح', transliteration: 'Naṣīḥun', meaning: 'The Adviser', meaningFr: 'Le Conseiller' },
  { number: 126, arabic: 'نَاصِح', transliteration: 'Nāṣiḥun', meaning: 'The Counselor', meaningFr: 'Le Sage Conseiller' },
  { number: 127, arabic: 'وَكِيل', transliteration: 'Wakīlun', meaning: 'The Advocate', meaningFr: 'L\'Avocat' },
  { number: 128, arabic: 'مُتَوَكِّل', transliteration: 'Mutawakkilun', meaning: 'The Reliant on Allah', meaningFr: 'Celui qui s\'en Remet à Allah' },
  { number: 129, arabic: 'كَفِيل', transliteration: 'Kafīlun', meaning: 'The Guarantor', meaningFr: 'Le Garant' },
  { number: 130, arabic: 'شَفِيق', transliteration: 'Shafīqun', meaning: 'The Tender', meaningFr: 'Le Tendre' },
  { number: 131, arabic: 'مُقِيمُ السُّنَّة', transliteration: 'Muqīmu s-sunnati', meaning: 'Establisher of the Way', meaningFr: 'Celui qui Établit la Voie' },
  { number: 132, arabic: 'مُقَدَّس', transliteration: 'Muqaddasu', meaning: 'The Sacred', meaningFr: 'Le Sacré' },
  { number: 133, arabic: 'رُوحُ الْقُدُس', transliteration: 'Rūḥu l-qudusi', meaning: 'The Holy Spirit', meaningFr: 'L\'Esprit Saint' },
  { number: 134, arabic: 'رُوحُ الْحَقّ', transliteration: 'Rūḥu l-ḥaqqi', meaning: 'The Spirit of Truth', meaningFr: 'L\'Esprit de Vérité' },
  { number: 135, arabic: 'رُوحُ الْقِسْط', transliteration: 'Rūḥu l-qisṭi', meaning: 'The Spirit of Justice', meaningFr: 'L\'Esprit de Justice' },
  { number: 136, arabic: 'كَافٍ', transliteration: 'Kāfin', meaning: 'The Qualified', meaningFr: 'Le Qualifié' },
  { number: 137, arabic: 'مُكْتَفِ', transliteration: 'Muktafin', meaning: 'The Broad-Shouldered One', meaningFr: 'Celui aux Larges Épaules' },
  { number: 138, arabic: 'بَالِغ', transliteration: 'Bālighun', meaning: 'The Proclaimer', meaningFr: 'Celui qui Proclame' },
  { number: 139, arabic: 'مُبَلِّغ', transliteration: 'Muballighun', meaning: 'The Informer', meaningFr: 'Celui qui Transmet' },
  { number: 140, arabic: 'شَافٍ', transliteration: 'Shāfin', meaning: 'The Healing', meaningFr: 'Celui qui Guérit' },
  { number: 141, arabic: 'وَاصِل', transliteration: 'Wāṣilun', meaning: 'The Inseparable Friend', meaningFr: 'L\'Ami Inséparable' },
  { number: 142, arabic: 'مَوْصُول', transliteration: 'Mawṣūlun', meaning: 'The One Bound to Allah', meaningFr: 'Celui qui est Lié à Allah' },
  { number: 143, arabic: 'سَابِق', transliteration: 'Sābiqun', meaning: 'The Foremost', meaningFr: 'Le Premier' },
  { number: 144, arabic: 'سَائِق', transliteration: 'Sāʾiqun', meaning: 'The Driver', meaningFr: 'Le Conducteur' },
  { number: 145, arabic: 'هَادٍ', transliteration: 'Hādin', meaning: 'The Guide', meaningFr: 'Le Guide' },
  { number: 146, arabic: 'مُهْتَدٍ', transliteration: 'Muhtadin', meaning: 'The Guided', meaningFr: 'Le Bien Guidé' },
  { number: 147, arabic: 'مُقَدَّم', transliteration: 'Muqaddamun', meaning: 'The Overseer', meaningFr: 'Le Superviseur' },
  { number: 148, arabic: 'عَزِيز', transliteration: 'ʿAzīzun', meaning: 'The Mighty', meaningFr: 'Le Puissant' },
  { number: 149, arabic: 'فَاضِل', transliteration: 'Fāḍilun', meaning: 'The Outstanding', meaningFr: 'L\'Excellent' },
  { number: 150, arabic: 'مُفَضَّل', transliteration: 'Mufaḍḍalun', meaning: 'The Favoured', meaningFr: 'Le Favorisé' },
  { number: 151, arabic: 'فَاتِح', transliteration: 'Fātiḥun', meaning: 'The Opener', meaningFr: 'L\'Ouvreur' },
  { number: 152, arabic: 'مِفْتَاح', transliteration: 'Miftāḥun', meaning: 'The Key', meaningFr: 'La Clé' },
  { number: 153, arabic: 'مِفْتَاحُ الرَّحْمَة', transliteration: 'Miftāḥu r-raḥmah', meaning: 'The Key to Mercy', meaningFr: 'La Clé de la Miséricorde' },
  { number: 154, arabic: 'مِفْتَاحُ الْجَنَّة', transliteration: 'Miftāḥu l-jannah', meaning: 'The Key to the Garden', meaningFr: 'La Clé du Paradis' },
  { number: 155, arabic: 'عَلَمُ الْإِيمَان', transliteration: 'ʿAlamu l-īmāni', meaning: 'Teacher of Faith', meaningFr: 'L\'Enseignant de la Foi' },
  { number: 156, arabic: 'عَلَمُ الْيَقِين', transliteration: 'ʿAlamu l-yaqīni', meaning: 'Teacher of Certainty', meaningFr: 'L\'Enseignant de la Certitude' },
  { number: 157, arabic: 'دَلِيلُ الْخَيْرَات', transliteration: 'Dalīlu l-khayrāti', meaning: 'Guide to Good Things', meaningFr: 'Le Guide vers les Bonnes Choses' },
  { number: 158, arabic: 'مُصَحِّحُ الْحَسَنَات', transliteration: 'Muṣaḥḥihu l-ḥasanāti', meaning: 'Verifier of Good Deeds', meaningFr: 'Le Vérificateur des Bonnes Actions' },
  { number: 159, arabic: 'مُقِيلُ الْعَثَرَات', transliteration: 'Muqīlu l-ʿatharāti', meaning: 'Remover of Obstacles', meaningFr: 'Celui qui Efface les Obstacles' },
  { number: 160, arabic: 'صَفُوحٌ عَنِ الزَّلَّات', transliteration: 'Ṣafūḥun ʿani z-zallāti', meaning: 'Pardoner of Sins', meaningFr: 'Celui qui Pardonne les Fautes' },
  { number: 161, arabic: 'صَاحِبُ الشَّفَاعَة', transliteration: 'Ṣāhibu l-shafāʿati', meaning: 'Possessor of Intercession', meaningFr: 'Possesseur de l\'Intercession' },
  { number: 162, arabic: 'صَاحِبُ الْمَقَام', transliteration: 'Ṣāhibu l-maqāmi', meaning: 'Possessor of the Honored Station', meaningFr: 'Possesseur de la Station Honorée' },
  { number: 163, arabic: 'صَاحِبُ الْقَدَم', transliteration: 'Ṣāhibu l-qadami', meaning: 'Owner of the Footprint', meaningFr: 'Propriétaire de l\'Empreinte' },
  { number: 164, arabic: 'مَخْصُوصٌ بِالْعِزّ', transliteration: 'Makhṣūṣun bi l-ʿizzi', meaning: 'Distinguished with Might', meaningFr: 'Distingué par la Puissance' },
  { number: 165, arabic: 'مَخْصُوصٌ بِالْمَجْد', transliteration: 'Makhṣūṣun bi l-majdi', meaning: 'Distinguished with Glory', meaningFr: 'Distingué par la Gloire' },
  { number: 166, arabic: 'مَخْصُوصٌ بِالشَّرَف', transliteration: 'Makhṣūṣun bi sh-sharafi', meaning: 'Distinguished with Nobility', meaningFr: 'Distingué par la Noblesse' },
  { number: 167, arabic: 'صَاحِبُ الْوَسِيلَة', transliteration: 'Ṣāhibu l-wasīlati', meaning: 'Possessor of Closest Access', meaningFr: 'Possesseur de l\'Accès le Plus Proche' },
  { number: 168, arabic: 'صَاحِبُ السَّيْف', transliteration: 'Ṣāhibu s-sayfi', meaning: 'Owner of the Sword', meaningFr: 'Propriétaire de l\'Épée' },
  { number: 169, arabic: 'صَاحِبُ الْفَضِيلَة', transliteration: 'Ṣāhibu l-faḍīlata', meaning: 'Possessor of Pre-eminence', meaningFr: 'Possesseur de la Prééminence' },
  { number: 170, arabic: 'صَاحِبُ الْإِزَار', transliteration: 'Ṣāhibu l-izāri', meaning: 'Owner of the Waist-Wrap', meaningFr: 'Propriétaire du Vêtement de Ceinture' },
  { number: 171, arabic: 'صَاحِبُ الْحُجَّة', transliteration: 'Ṣāhibu l-ḥujjati', meaning: 'Possessor of Proof', meaningFr: 'Possesseur de la Preuve' },
  { number: 172, arabic: 'صَاحِبُ السُّلْطَان', transliteration: 'Ṣāhibu s-sulṭāni', meaning: 'Possessor of Authority', meaningFr: 'Possesseur de l\'Autorité' },
  { number: 173, arabic: 'صَاحِبُ الرِّدَاء', transliteration: 'Ṣāhibu r-ridāʾi', meaning: 'Owner of the Robe', meaningFr: 'Propriétaire du Manteau' },
  { number: 174, arabic: 'صَاحِبُ الدَّرَجَةِ الرَّفِيعَة', transliteration: 'Ṣāhibu d-darajati r-rafīʿati', meaning: 'Possessor of the Lofty Rank', meaningFr: 'Possesseur du Rang Élevé' },
  { number: 175, arabic: 'صَاحِبُ التَّاج', transliteration: 'Ṣāhibu t-tāji', meaning: 'Possessor of the Crown', meaningFr: 'Possesseur de la Couronne' },
  { number: 176, arabic: 'صَاحِبُ الْمِغْفَر', transliteration: 'Ṣāhibu l-mighfari', meaning: 'Possessor of Forgiveness', meaningFr: 'Possesseur du Pardon' },
  { number: 177, arabic: 'صَاحِبُ اللِّوَاء', transliteration: 'Ṣāhibu l-liwāʾi', meaning: 'Possessor of the Flag', meaningFr: 'Possesseur de l\'Étendard' },
  { number: 178, arabic: 'صَاحِبُ الْمِعْرَاج', transliteration: 'Ṣāhibu l-miʿrāji', meaning: 'Master of the Night Journey', meaningFr: 'Maître du Voyage Nocturne' },
  { number: 179, arabic: 'صَاحِبُ الْقَضِيب', transliteration: 'Ṣāhibu l-qaḍībi', meaning: 'Possessor of the Staff', meaningFr: 'Possesseur du Bâton' },
  { number: 180, arabic: 'صَاحِبُ الْبُرَاق', transliteration: 'Ṣāhibu l-burāqi', meaning: 'Owner of the Burāq', meaningFr: 'Propriétaire du Burāq' },
  { number: 181, arabic: 'صَاحِبُ الْخَاتَم', transliteration: 'Ṣāhibu l-khātami', meaning: 'Owner of the Ring', meaningFr: 'Propriétaire du Sceau' },
  { number: 182, arabic: 'صَاحِبُ الْعَلَامَة', transliteration: 'Ṣāhibu l-ʿalāmati', meaning: 'Owner of the Sign', meaningFr: 'Propriétaire du Signe' },
  { number: 183, arabic: 'صَاحِبُ الْبُرْهَان', transliteration: 'Ṣāhibu l-burhānu', meaning: 'Possessor of the Evidence', meaningFr: 'Possesseur de la Preuve' },
  { number: 184, arabic: 'صَاحِبُ الْبَيَان', transliteration: 'Ṣāhibu l-bayāni', meaning: 'Possessor of Evident Proof', meaningFr: 'Possesseur de la Clarté' },
  { number: 185, arabic: 'فَصِيحُ اللِّسَان', transliteration: 'Faṣīḥu l-lisāni', meaning: 'The Good Communicator', meaningFr: 'L\'Éloquent' },
  { number: 186, arabic: 'مُطَّهَرُ الْجَنَان', transliteration: 'Muṭṭaharu l-janani', meaning: 'Purifier of the Souls', meaningFr: 'Le Purificateur des Âmes' },
  { number: 187, arabic: 'رَؤُوف', transliteration: 'Raʾūfun', meaning: 'The Kind', meaningFr: 'Le Bienveillant' },
  { number: 188, arabic: 'رَحِيم', transliteration: 'Raḥīmun', meaning: 'The Mercy Giving', meaningFr: 'Le Miséricordieux' },
  { number: 189, arabic: 'أُذُنُ خَيْر', transliteration: 'Udhunu khayrin', meaning: 'The Good Listener', meaningFr: 'La Bonne Oreille' },
  { number: 190, arabic: 'صَحِيحُ الْإِسْلَام', transliteration: 'Ṣaḥīḥu l-Islāmi', meaning: 'The One with Perfect Islam', meaningFr: 'Celui à l\'Islam Parfait' },
  { number: 191, arabic: 'سَيِّدُ الْكَوْنَيْن', transliteration: 'Sayyidu l-kawnayni', meaning: 'Master of the Two Universes', meaningFr: 'Maître des Deux Univers' },
  { number: 192, arabic: 'عَيْنُ النَّعِيم', transliteration: 'ʿAynu n-naʿīmi', meaning: 'The Spring of Bliss', meaningFr: 'La Source de la Félicité' },
  { number: 193, arabic: 'عَيْنُ الْغُرّ', transliteration: 'ʿAynu l-ghurri', meaning: 'The Spring of Beauty', meaningFr: 'La Source de la Beauté' },
  { number: 194, arabic: 'سَعْدُ الله', transliteration: 'Saʿdullāhi', meaning: 'The Joy of Allah', meaningFr: 'La Joie d\'Allah' },
  { number: 195, arabic: 'سَعْدُ الْخَلْق', transliteration: 'Saʿdu l-khalqi', meaning: 'The Joy of the Creator', meaningFr: 'La Joie de la Création' },
  { number: 196, arabic: 'خَطِيبُ الْأُمَم', transliteration: 'Khaṭību l-ʿumami', meaning: 'The Preacher to Nations', meaningFr: 'Le Prédicateur des Nations' },
  { number: 197, arabic: 'عَلَمُ الْهُدَى', transliteration: 'ʿAlamu l-hudā', meaning: 'The Teacher of Guidance', meaningFr: 'L\'Enseignant de la Guidance' },
  { number: 198, arabic: 'كَاشِفُ الْكُرَب', transliteration: 'Kāshifu l-kurabi', meaning: 'The Remover of Worries', meaningFr: 'Celui qui Dissipe les Soucis' },
  { number: 199, arabic: 'رَافِعُ الرُّتَب', transliteration: 'Rāfiʿu r-rutabi', meaning: 'The Raiser of Rank', meaningFr: 'Celui qui Élève les Rangs' },
  { number: 200, arabic: 'عِزُّ الْعَرَب', transliteration: 'ʿIzzu l-ʿArabi', meaning: 'The Might of the Arab', meaningFr: 'La Fierté des Arabes' },
  { number: 201, arabic: 'صَاحِبُ الْفَرَج', transliteration: 'Ṣāhibu l-faraji', meaning: 'The Owner of Relief', meaningFr: 'Le Maître de la Délivrance' },
];

/** Allāhu Jāmiʿu — The Gathering Name recited 180 times before the 201 Names */
export const YA_JAMIU = {
  arabic: 'اللهُ جَامِعُ',
  transliteration: 'Allāhu Jāmiʿu',
  meaning: 'Allah is the Gatherer, the Mighty One',
  meaningFr: 'Allah est le Rassembleur, le Puissant',
  count: 180,
};

/** Opening with Al-Fātiḥa */
export const RIZQ_DUA = {
  arabic: `بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝
الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝
الرَّحْمَٰنِ الرَّحِيمِ ۝
مَالِكِ يَوْمِ الدِّينِ ۝
إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ۝
اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝
صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ۝`,
  transliteration: `Bismi-llāhi r-Raḥmāni r-Raḥīm.
Al-ḥamdu li-llāhi Rabbi l-ʿālamīn.
Ar-Raḥmāni r-Raḥīm.
Māliki yawmi d-dīn.
Iyyāka naʿbudu wa iyyāka nastaʿīn.
Ihdinā ṣ-ṣirāṭa l-mustaqīm.
Ṣirāṭa lladhīna anʿamta ʿalayhim ghayri l-maghḍūbi ʿalayhim wa lā ḍ-ḍāllīn.`,
  meaning: 'In the name of Allah, the Most Gracious, the Most Merciful. All praise is due to Allah, Lord of all worlds. The Most Gracious, the Most Merciful. Master of the Day of Judgment. You alone we worship, and You alone we ask for help. Guide us on the Straight Path — the path of those You have blessed, not of those who incurred wrath, nor of those who went astray.',
  meaningFr: 'Au nom d\'Allah, le Tout Miséricordieux, le Très Miséricordieux. Louange à Allah, Seigneur des mondes. Le Tout Miséricordieux, le Très Miséricordieux. Maître du Jour du Jugement. C\'est Toi seul que nous adorons, et c\'est Toi seul dont nous implorons l\'aide. Guide-nous sur le droit chemin — le chemin de ceux que Tu as comblés de bienfaits, non de ceux qui ont encouru Ta colère, ni des égarés.',
};

/** Closing Duʿāʾ — Authenticated Prophetic Supplication for Rizq */
export const CLOSING_DUA = {
  arabic: `اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ
وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ`,
  transliteration: `Allāhumma ikfinī bi-ḥalālika ʿan ḥarāmik,
wa aghnīnī bi-faḍlika ʿamman siwāk.`,
  meaning: 'O Allah, suffice me with what You have made lawful, keeping me away from what You have made unlawful. And enrich me by Your bounty, making me free of need from all besides You.',
  meaningFr: 'Ô Allah, suffit-moi par ce que Tu as rendu licite, en m\'éloignant de ce que Tu as rendu illicite. Et enrichis-moi par Ta grâce, me rendant indépendant de tout ce qui n\'est pas Toi.',
  source: {
    en: 'Transmitted by Tirmidhī · Graded Ḥasan · Taught by the Prophet ﷺ to ʿAlī ibn Abī Ṭālib (RA) for provision and debt relief.',
    fr: 'Transmis par Tirmidhī · Classé Ḥasan · Enseigné par le Prophète ﷺ à ʿAlī ibn Abī Ṭālib (RA) pour la provision et le soulagement des dettes.',
  },
};

/** Practice metadata */
export const RIZQ_PRACTICE_INFO = {
  title: '201 Holy Names of Prophet Muḥammad ﷺ',
  titleFr: '201 Noms Saints du Prophète Muḥammad ﷺ',
  subtitle: 'Rizq Abundance Practice',
  subtitleFr: 'Pratique d\'Abondance du Rizq',
  tradition: 'Dalāʾilu l-Khayrāt · Imam Muḥammad al-Jazūlī',
  authorization: 'Cherno Moussa Yero Sy — Spiritual Master of the Tijaniyya Order',
  authorizationFr: 'Cherno Moussa Yero Sy — Maître spirituel de l\'ordre Tijaniyya',
  duration: 7, // days
  sessionsPerDay: 1, // once daily (morning)
  totalSessions: 7,
  estimatedTime: '25-35 minutes',
  estimatedTimeFr: '25-35 minutes',
  description: 'Recite Allāhu Jāmiʿu 180× followed by the 201 Holy Names with Ṣalla-llāhu ʿalayhi wa sallam. Practice once daily in the morning for 7 days.',
  descriptionFr: 'Récitez Allāhu Jāmiʿu 180× suivi des 201 Noms Saints avec Ṣalla-llāhu ʿalayhi wa sallam. Pratiquez une fois par jour le matin pendant 7 jours.',
  promise: 'Immeasurable changes in your rizq will manifest.',
  promiseFr: 'Des changements incommensurables dans votre rizq se manifesteront.',
};
