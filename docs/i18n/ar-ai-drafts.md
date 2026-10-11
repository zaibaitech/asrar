# Arabic AI-draft strings — needs native-speaker review

Every row below is an **AI-draft** (hand-written by the assistant, not a machine translator). They are live in the `/ar` UI via `public/i18n/ar-ui.json`. Please check and correct in `scripts/i18n/ar/ai_drafts.json`, then run `python3 scripts/i18n/ar/build_catalog.py`.

Rules applied: Divine Names = canonical Arabic from `src/data/divine-names.ts`; Qur'ān = original Arabic text (verses listed separately below, verify against a muṣḥaf — the repo had only English renderings; note `30:48` in `asrar-everyday-app.tsx` is rendered with the wording of 30:46, which matches the English); standard terms (التصوف، علم الحروف، الأبجد، المنازل، الاستخارة، الصدقة، الذكر); reflective, non-predictive tone (a few 'destiny/influence' phrasings were deliberately softened).

Counts: 831 AI-draft strings, 512 Divine-Name mappings, 12 Qur'anic lines.

## Qur'anic lines (AI-draft — verify)

| English | Arabic |
|---|---|
| Indeed, with hardship comes ease | إِنَّ مَعَ الْعُسْرِ يُسْرًا |
| We said: O fire, be coolness and peace | قُلْنَا يَا نَارُ كُونِي بَرْدًا وَسَلَامًا |
| Created man from clay like pottery | خَلَقَ الْإِنسَانَ مِن صَلْصَالٍ كَالْفَخَّارِ |
| We made every living thing from water | وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ |
| We send the winds as glad tidings | وَهُوَ الَّذِي أَرْسَلَ الرِّيَاحَ بُشْرًا بَيْنَ يَدَيْ رَحْمَتِهِ |
| If your water were to sink away | قُلْ أَرَأَيْتُمْ إِنْ أَصْبَحَ مَاؤُكُمْ غَوْرًا |
| The winds that blow, the clouds between sky and earth | وَتَصْرِيفِ الرِّيَاحِ وَالسَّحَابِ الْمُسَخَّرِ بَيْنَ السَّمَاءِ وَالْأَرْضِ |
| We send the winds to fertilize | وَأَرْسَلْنَا الرِّيَاحَ لَوَاقِحَ |
| He sends the winds as bearers of good news | وَمِنْ آيَاتِهِ أَن يُرْسِلَ الرِّيَاحَ مُبَشِّرَاتٍ |
| And the earth He has laid for all beings | وَالْأَرْضَ وَضَعَهَا لِلْأَنَامِ |
| Who made the earth a resting place | الَّذِي جَعَلَ لَكُمُ الْأَرْضَ مَهْدًا |
| The earth We have spread out | وَالْأَرْضَ مَدَدْنَاهَا |

## Divine-Name mappings (from divine-names.ts)

| English / transliteration | Arabic |
|---|---|
| Al-'Alīm | الْعَلِيم |
| Al-'Alīm (The All-Knowing) | الْعَلِيم |
| Al-'Azīz | الْعَزِيز |
| Al-'Azīz (The Almighty) | الْعَزِيز |
| Al-Ahad (L'Unique) | اَلاَحَد |
| Al-Ahad (The One) | اَلاَحَد |
| Al-Awwal | الأوَّل |
| Al-Awwal (The First) | الأوَّل |
| Al-Aḥad | اَلاَحَد |
| Al-Aḥad (The Unique) | اَلاَحَد |
| Al-Badīʿ | الْبَدِيع |
| Al-Badīʿ (The Incomparable Originator) | الْبَدِيع |
| Al-Barr | الْبَرّ |
| Al-Barr (The Source of All Goodness) | الْبَرّ |
| Al-Baṣīr | الْبَصِير |
| Al-Baṣīr (The All-Seeing) | الْبَصِير |
| Al-Bāqī | اَلْبَاقِي |
| Al-Bāqī (The Everlasting) | اَلْبَاقِي |
| Al-Bāri' | الْبَارِئ |
| Al-Bāri' (The Evolver) | الْبَارِئ |
| Al-Bāsiṭ | الْبَاسِط |
| Al-Bāsiṭ (The Extender) | الْبَاسِط |
| Al-Bāʿith | الْبَاعِث |
| Al-Bāʿith (The Resurrector) | الْبَاعِث |
| Al-Bāṭin | الْبَاطِن |
| Al-Bāṭin (The Hidden) | الْبَاطِن |
| Al-Fattāḥ | الْفَتَّاح |
| Al-Fattāḥ (The Opener) | الْفَتَّاح |
| Al-Ghaffār | الْغَفَّار |
| Al-Ghaffār (The Oft-Forgiving) | الْغَفَّار |
| Al-Ghafūr | الْغَفُور |
| Al-Ghafūr (The Great Forgiver) | الْغَفُور |
| Al-Ghaniyy | الْغَنِيّ |
| Al-Ghaniyy (The Self-Sufficient) | الْغَنِيّ |
| Al-Hafiz (The Preserver, The Guardian) | الْحَفِيظ |
| Al-Hakim (The Wise) | الْحَكِيم |
| Al-Hādī | الْهَادِي |
| Al-Hādī (The Guide) | الْهَادِي |
| Al-Jabbār | الْجَبَّار |
| Al-Jabbār (The Compeller) | الْجَبَّار |
| Al-Jalīl | الْجَلِيل |
| Al-Jalīl (The Majestic) | الْجَلِيل |
| Al-Jāmiʿ | الْجَامِع |
| Al-Jāmiʿ (The Gatherer) | الْجَامِع |
| Al-Kabīr | الْكَبِير |
| Al-Kabīr (The Greatest) | الْكَبِير |
| Al-Karim (The Generous, The Bountiful) | الْكَرِيم |
| Al-Karīm | الْكَرِيم |
| Al-Karīm (The Generous) | الْكَرِيم |
| Al-Khabir (The All-Aware, The Well-Informed) | الْخَبِير |
| Al-Khabīr | الْخَبِير |
| Al-Khabīr (The All-Aware) | الْخَبِير |
| Al-Khāfiḍ | الْخَافِض |
| Al-Khāfiḍ (The Abaser) | الْخَافِض |
| Al-Khāliq | الْخَالِق |
| Al-Khāliq (The Creator) | الْخَالِق |
| Al-Latif (The Subtle, The Kind) | اللَّطِيف |
| Al-Laṭīf | اللَّطِيف |
| Al-Laṭīf (The Subtle One) | اللَّطِيف |
| Al-Majīd | الْمَجِيد |
| Al-Majīd (The Most Glorious) | الْمَجِيد |
| Al-Malik | الْمَلِك |
| Al-Malik (The King) | الْمَلِك |
| Al-Malik (The Sovereign, The King) | الْمَلِك |
| Al-Matīn | الْمَتِين |
| Al-Matīn (The Forceful) | الْمَتِين |
| Al-Mu'min | الْمُؤْمِن |
| Al-Mu'min (The Granter of Security) | الْمُؤْمِن |
| Al-Mubdiʾ | الْمُبْدِئ |
| Al-Mubdiʾ (The Originator) | الْمُبْدِئ |
| Al-Mudhill | الْمُذِلّ |
| Al-Mudhill (The Humiliator) | الْمُذِلّ |
| Al-Mughnī | الْمُغْنِي |
| Al-Mughnī (The Enricher) | الْمُغْنِي |
| Al-Muhaymin | الْمُهَيْمِن |
| Al-Muhaymin (The Guardian) | الْمُهَيْمِن |
| Al-Mujīb | الْمُجِيب |
| Al-Mujīb (The Responsive) | الْمُجِيب |
| Al-Mumīt | الْمُمِيت |
| Al-Mumīt (The Taker of Life) | الْمُمِيت |
| Al-Muntaqim | الْمُنْتَقِم |
| Al-Muntaqim (The Avenger) | الْمُنْتَقِم |
| Al-Muqaddim | الْمُقَدِّم |
| Al-Muqaddim (The Expediter) | الْمُقَدِّم |
| Al-Muqsiṭ | الْمُقْسِط |
| Al-Muqsiṭ (The Equitable) | الْمُقْسِط |
| Al-Muqtadir | الْمُقْتَدِر |
| Al-Muqtadir (The Creator of Power) | الْمُقْتَدِر |
| Al-Muqīt | الْمُقِيت |
| Al-Muqīt (The Nourisher) | الْمُقِيت |
| Al-Musawwir (The Fashioner, The Shaper) | الْمُصَوِّر |
| Al-Mutakabbir | الْمُتَكَبِّر |
| Al-Mutakabbir (The Supreme) | الْمُتَكَبِّر |
| Al-Mutaʿālī | الْمُتَعَالِي |
| Al-Mutaʿālī (The Supreme One) | الْمُتَعَالِي |
| Al-Muʾakhkhir | الْمُؤَخِّر |
| Al-Muʾakhkhir (The Delayer) | الْمُؤَخِّر |
| Al-Muʿizz | الْمُعِزّ |
| Al-Muʿizz (The Bestower of Honor) | الْمُعِزّ |
| Al-Muʿīd | الْمُعِيد |
| Al-Muʿīd (The Restorer) | الْمُعِيد |
| Al-Muḥyī | الْمُحْيِي |
| Al-Muḥyī (The Giver of Life) | الْمُحْيِي |
| Al-Muḥṣī | الْمُحْصِي |
| Al-Muḥṣī (The Appraiser) | الْمُحْصِي |
| Al-Muṣawwir | الْمُصَوِّر |
| Al-Muṣawwir (The Fashioner) | الْمُصَوِّر |
| Al-Mājid | الْمَاجِد |
| Al-Mājid (The Glorious) | الْمَاجِد |
| Al-Māniʿ | اَلْمَانِع |
| Al-Māniʿ (The Preventer of Harm) | اَلْمَانِع |
| Al-Qahhār | الْقَهَّار |
| Al-Qahhār (The Subduer) | الْقَهَّار |
| Al-Qawiyy | الْقَوِيّ |
| Al-Qawiyy (The Most Strong) | الْقَوِيّ |
| Al-Qawiyy (The Strong) | الْقَوِيّ |
| Al-Qayyūm | الْقَيُّوم |
| Al-Qayyūm (The Self-Subsisting) | الْقَيُّوم |
| Al-Quddūs | الْقُدُّوس |
| Al-Quddūs (The Most Holy) | الْقُدُّوس |
| Al-Qābiḍ | الْقَابِض |
| Al-Qābiḍ (The Withholder) | الْقَابِض |
| Al-Qādir | الْقَادِر |
| Al-Qādir (The Powerful) | الْقَادِر |
| Al-Wadūd | الْوَدُود |
| Al-Wadūd (The Loving) | الْوَدُود |
| Al-Wadūd (The Most Loving) | الْوَدُود |
| Al-Wahhāb | الْوَهَّاب |
| Al-Wahhāb (The Bestower) | الْوَهَّاب |
| Al-Wakīl | الْوَكِيل |
| Al-Wakīl (The Trustee) | الْوَكِيل |
| Al-Waliyy | الْوَلِيّ |
| Al-Waliyy (The Protecting Friend) | الْوَلِيّ |
| Al-Wājid | الْوَاجِد |
| Al-Wājid (The Finder) | الْوَاجِد |
| Al-Wāli | الْوَالِي |
| Al-Wāli (The Governor) | الْوَالِي |
| Al-Wārith | الْوَارِث |
| Al-Wārith (The Inheritor) | الْوَارِث |
| Al-Wāsiʿ | الْوَاسِع |
| Al-Wāsiʿ (The All-Encompassing) | الْوَاسِع |
| Al-Wāḥid | الْواحِد |
| Al-Wāḥid (The One) | الْواحِد |
| Al-Ākhir | الآخِر |
| Al-Ākhir (The Last) | الآخِر |
| Al-ʿAdl | الْعَدْل |
| Al-ʿAdl (The Just) | الْعَدْل |
| Al-ʿAfuww | العَفُوّ |
| Al-ʿAfuww (The Pardoner) | العَفُوّ |
| Al-ʿAliyy | الْعَلِيّ |
| Al-ʿAliyy (The Most High) | الْعَلِيّ |
| Al-ʿAlīm (The All-Knowing) | الْعَلِيم |
| Al-ʿAẓīm | الْعَظِيم |
| Al-ʿAẓīm (The Magnificent) | الْعَظِيم |
| Al-Ḥafīẓ | الْحَفِيظ |
| Al-Ḥafīẓ (The Preserver) | الْحَفِيظ |
| Al-Ḥakam | الْحَكَم |
| Al-Ḥakam (The Judge) | الْحَكَم |
| Al-Ḥakīm | الْحَكِيم |
| Al-Ḥakīm (The Perfectly Wise) | الْحَكِيم |
| Al-Ḥakīm (The Wise) | الْحَكِيم |
| Al-Ḥalīm | الْحَلِيم |
| Al-Ḥalīm (The Forbearing) | الْحَلِيم |
| Al-Ḥamīd | الْحَمِيد |
| Al-Ḥamīd (The Praiseworthy) | الْحَمِيد |
| Al-Ḥaqq | الْحَقّ |
| Al-Ḥaqq (The Truth) | الْحَقّ |
| Al-Ḥasīb | الْحسِيب |
| Al-Ḥasīb (The Reckoner) | الْحسِيب |
| Al-Ḥayy | الْحَيّ |
| Al-Ḥayy (The Ever-Living) | الْحَيّ |
| An-Nur (The Light) | النُّور |
| An-Nāfiʿ | النَّافِع |
| An-Nāfiʿ (The Bestower of Benefit) | النَّافِع |
| An-Nūr | النُّور |
| An-Nūr (The Light) | النُّور |
| Ar-Rahman (The Most Merciful) | الرَّحْمَن |
| Ar-Raqīb | الرَّقِيب |
| Ar-Raqīb (The Watchful) | الرَّقِيب |
| Ar-Rashīd | الرَّشِيد |
| Ar-Rashīd (The Guide to the Right Path) | الرَّشِيد |
| Ar-Razzāq | الرَّزَّاق |
| Ar-Razzāq (The Provider) | الرَّزَّاق |
| Ar-Raʾūf | الرَّؤُوف |
| Ar-Raʾūf (The Clement) | الرَّؤُوف |
| Ar-Raḥmān | الرَّحْمَن |
| Ar-Raḥmān (The Most Gracious) | الرَّحْمَن |
| Ar-Raḥmān (The Most Merciful) | الرَّحْمَن |
| Ar-Raḥīm | الرَّحِيم |
| Ar-Raḥīm (The Most Merciful) | الرَّحِيم |
| Ar-Rāfiʿ | الرَّافِع |
| Ar-Rāfiʿ (The Exalter) | الرَّافِع |
| As-Sabur (The Patient, The Timeless) | الصَّبُور |
| As-Salām | السَّلَام |
| As-Salām (The Source of Peace) | السَّلَام |
| As-Samīʿ | السَّمِيع |
| As-Samīʿ (The All-Hearing) | السَّمِيع |
| Ash-Shahīd | الشَّهِيد |
| Ash-Shahīd (The Witness) | الشَّهِيد |
| Ash-Shakūr | الشَّكُور |
| Ash-Shakūr (The Appreciative) | الشَّكُور |
| At-Tawwāb | التَّوَاب |
| At-Tawwāb (The Guide to Repentance) | التَّوَاب |
| Aḍ-Ḍārr | الضَّارَّ |
| Aḍ-Ḍārr (The One Who Creates Harm) | الضَّارَّ |
| Aṣ-Ṣabūr | الصَّبُور |
| Aṣ-Ṣabūr (The Patient) | الصَّبُور |
| Aṣ-Ṣamad | الصَّمَد |
| Aṣ-Ṣamad (The Eternal Refuge) | الصَّمَد |
| Aẓ-Ẓāhir | الظَّاهِر |
| Aẓ-Ẓāhir (The Manifest) | الظَّاهِر |
| Dhū al-Jalāli wa al-Ikrām | ذُوالْجَلاَلِ وَالإكْرَام |
| Dhū al-Jalāli wa al-Ikrām (Lord of Majesty and Generosity) | ذُوالْجَلاَلِ وَالإكْرَام |
| Lord of Majesty and Generosity | ذُوالْجَلاَلِ وَالإكْرَام |
| Mālik al-Mulk | مَالِكُ الْمُلْك |
| Mālik al-Mulk (Owner of All Sovereignty) | مَالِكُ الْمُلْك |
| Owner of All Sovereignty | مَالِكُ الْمُلْك |
| The Abaser | الْخَافِض |
| The All-Aware | الْخَبِير |
| The All-Encompassing | الْوَاسِع |
| The All-Hearing | السَّمِيع |
| The All-Knowing | الْعَلِيم |
| The All-Seeing | الْبَصِير |
| The Almighty | الْعَزِيز |
| The Appraiser | الْمُحْصِي |
| The Appreciative | الشَّكُور |
| The Avenger | الْمُنْتَقِم |
| The Bestower | الْوَهَّاب |
| The Bestower of Benefit | النَّافِع |
| The Bestower of Honor | الْمُعِزّ |
| The Clement | الرَّؤُوف |
| The Compeller | الْجَبَّار |
| The Creator | الْخَالِق |
| The Creator of Power | الْمُقْتَدِر |
| The Delayer | الْمُؤَخِّر |
| The Enricher | الْمُغْنِي |
| The Equitable | الْمُقْسِط |
| The Eternal Refuge | الصَّمَد |
| The Ever-Living | الْحَيّ |
| The Everlasting | اَلْبَاقِي |
| The Evolver | الْبَارِئ |
| The Exalter | الرَّافِع |
| The Expediter | الْمُقَدِّم |
| The Extender | الْبَاسِط |
| The Fashioner | الْمُصَوِّر |
| The Finder | الْوَاجِد |
| The First | الأوَّل |
| The Forbearing | الْحَلِيم |
| The Forceful | الْمَتِين |
| The Gatherer | الْجَامِع |
| The Generous | الْكَرِيم |
| The Giver of Life | الْمُحْيِي |
| The Glorious | الْمَاجِد |
| The Governor | الْوَالِي |
| The Granter of Security | الْمُؤْمِن |
| The Great Forgiver | الْغَفُور |
| The Greatest | الْكَبِير |
| The Guardian | الْمُهَيْمِن |
| The Guide | الْهَادِي |
| The Guide to Repentance | التَّوَاب |
| The Guide to the Right Path | الرَّشِيد |
| The Hidden | الْبَاطِن |
| The Humiliator | الْمُذِلّ |
| The Incomparable Originator | الْبَدِيع |
| The Inheritor | الْوَارِث |
| The Judge | الْحَكَم |
| The Just | الْعَدْل |
| The King | الْمَلِك |
| The Last | الآخِر |
| The Light | النُّور |
| The Magnificent | الْعَظِيم |
| The Majestic | الْجَلِيل |
| The Manifest | الظَّاهِر |
| The Most Glorious | الْمَجِيد |
| The Most Gracious | الرَّحْمَن |
| The Most High | الْعَلِيّ |
| The Most Holy | الْقُدُّوس |
| The Most Loving | الْوَدُود |
| The Most Merciful | الرَّحِيم |
| The Most Strong | الْقَوِيّ |
| The Nourisher | الْمُقِيت |
| The Oft-Forgiving | الْغَفَّار |
| The One | الْواحِد |
| The One Who Creates Harm | الضَّارَّ |
| The Opener | الْفَتَّاح |
| The Originator | الْمُبْدِئ |
| The Pardoner | العَفُوّ |
| The Patient | الصَّبُور |
| The Perfectly Wise | الْحَكِيم |
| The Powerful | الْقَادِر |
| The Praiseworthy | الْحَمِيد |
| The Preserver | الْحَفِيظ |
| The Preventer of Harm | اَلْمَانِع |
| The Protecting Friend | الْوَلِيّ |
| The Provider | الرَّزَّاق |
| The Reckoner | الْحسِيب |
| The Responsive | الْمُجِيب |
| The Restorer | الْمُعِيد |
| The Resurrector | الْبَاعِث |
| The Self-Subsisting | الْقَيُّوم |
| The Self-Sufficient | الْغَنِيّ |
| The Source of All Goodness | الْبَرّ |
| The Source of Peace | السَّلَام |
| The Subduer | الْقَهَّار |
| The Subtle One | اللَّطِيف |
| The Supreme | الْمُتَكَبِّر |
| The Supreme One | الْمُتَعَالِي |
| The Taker of Life | الْمُمِيت |
| The Trustee | الْوَكِيل |
| The Truth | الْحَقّ |
| The Unique | اَلاَحَد |
| The Watchful | الرَّقِيب |
| The Withholder | الْقَابِض |
| The Witness | الشَّهِيد |
| Ya 'Alīm | يا عليم |
| Ya 'Azīz | يا عزيز |
| Ya Awwal | يا أول |
| Ya Aḥad | يا احد |
| Ya Badīʿ | يا بديع |
| Ya Barr | يا بر |
| Ya Baṣīr | يا بصير |
| Ya Bāqī | يا باقي |
| Ya Bāri' | يا بارئ |
| Ya Bāsiṭ | يا باسط |
| Ya Bāʿith | يا باعث |
| Ya Bāṭin | يا باطن |
| Ya Dhū al-Jalāli wa al-Ikrām | يا ذوالجلال والإكرام |
| Ya Fattāḥ | يا فتاح |
| Ya Ghaffār | يا غفار |
| Ya Ghafūr | يا غفور |
| Ya Ghaniyy | يا غني |
| Ya Hādī | يا هادي |
| Ya Jabbār | يا جبار |
| Ya Jalīl | يا جليل |
| Ya Jāmiʿ | يا جامع |
| Ya Kabīr | يا كبير |
| Ya Karīm | يا كريم |
| Ya Khabīr | يا خبير |
| Ya Khāfiḍ | يا خافض |
| Ya Khāliq | يا خالق |
| Ya Laṭīf | يا لطيف |
| Ya Majīd | يا مجيد |
| Ya Malik | يا ملك |
| Ya Matīn | يا متين |
| Ya Mu'min | يا مؤمن |
| Ya Mubdiʾ | يا مبدئ |
| Ya Mudhill | يا مذل |
| Ya Mughnī | يا مغني |
| Ya Muhaymin | يا مهيمن |
| Ya Mujīb | يا مجيب |
| Ya Mumīt | يا مميت |
| Ya Muntaqim | يا منتقم |
| Ya Muqaddim | يا مقدم |
| Ya Muqsiṭ | يا مقسط |
| Ya Muqtadir | يا مقتدر |
| Ya Muqīt | يا مقيت |
| Ya Mutakabbir | يا متكبر |
| Ya Mutaʿālī | يا متعالي |
| Ya Muʾakhkhir | يا مؤخر |
| Ya Muʿizz | يا معز |
| Ya Muʿīd | يا معيد |
| Ya Muḥyī | يا محيي |
| Ya Muḥṣī | يا محصي |
| Ya Muṣawwir | يا مصور |
| Ya Mājid | يا ماجد |
| Ya Mālik al-Mulk | يا مالك الملك |
| Ya Māniʿ | يا مانع |
| Ya Nāfiʿ | يا نافع |
| Ya Nūr | يا نور |
| Ya Qahhār | يا قهار |
| Ya Qawiyy | يا قوي |
| Ya Qayyūm | يا قيوم |
| Ya Quddūs | يا قدوس |
| Ya Qābiḍ | يا قابض |
| Ya Qādir | يا قادر |
| Ya Raqīb | يا رقيب |
| Ya Rashīd | يا رشيد |
| Ya Razzāq | يا رزاق |
| Ya Raʾūf | يا رؤوف |
| Ya Raḥmān | يا رحمن |
| Ya Raḥīm | يا رحيم |
| Ya Rāfiʿ | يا رافع |
| Ya Salām | يا سلام |
| Ya Samīʿ | يا سميع |
| Ya Shahīd | يا شهيد |
| Ya Shakūr | يا شكور |
| Ya Tawwāb | يا تواب |
| Ya Wadūd | يا ودود |
| Ya Wahhāb | يا وهاب |
| Ya Wakīl | يا وكيل |
| Ya Waliyy | يا ولي |
| Ya Wājid | يا واجد |
| Ya Wāli | يا والي |
| Ya Wārith | يا وارث |
| Ya Wāsiʿ | يا واسع |
| Ya Wāḥid | يا واحد |
| Ya Ākhir | يا آخر |
| Ya ʿAdl | يا عدل |
| Ya ʿAfuww | يا عفو |
| Ya ʿAliyy | يا علي |
| Ya ʿAẓīm | يا عظيم |
| Ya Ḍārr | يا ضار |
| Ya Ḥafīẓ | يا حفيظ |
| Ya Ḥakam | يا حكم |
| Ya Ḥakīm | يا حكيم |
| Ya Ḥalīm | يا حليم |
| Ya Ḥamīd | يا حميد |
| Ya Ḥaqq | يا حق |
| Ya Ḥasīb | يا حسيب |
| Ya Ḥayy | يا حي |
| Ya Ṣabūr | يا صبور |
| Ya Ṣamad | يا صمد |
| Ya Ẓāhir | يا ظاهر |
| Yā 'Alīm | يا عليم |
| Yā 'Azīz | يا عزيز |
| Yā Awwal | يا أول |
| Yā Aḥad | يا احد |
| Yā Badīʿ | يا بديع |
| Yā Barr | يا بر |
| Yā Baṣīr | يا بصير |
| Yā Bāqī | يا باقي |
| Yā Bāri' | يا بارئ |
| Yā Bāsiṭ | يا باسط |
| Yā Bāʿith | يا باعث |
| Yā Bāṭin | يا باطن |
| Yā Dhū al-Jalāli wa al-Ikrām | يا ذوالجلال والإكرام |
| Yā Fattāḥ | يا فتاح |
| Yā Ghaffār | يا غفار |
| Yā Ghafūr | يا غفور |
| Yā Ghaniyy | يا غني |
| Yā Hādī | يا هادي |
| Yā Jabbār | يا جبار |
| Yā Jalīl | يا جليل |
| Yā Jāmiʿ | يا جامع |
| Yā Kabīr | يا كبير |
| Yā Karīm | يا كريم |
| Yā Khabīr | يا خبير |
| Yā Khāfiḍ | يا خافض |
| Yā Khāliq | يا خالق |
| Yā Laṭīf | يا لطيف |
| Yā Majīd | يا مجيد |
| Yā Malik | يا ملك |
| Yā Matīn | يا متين |
| Yā Mu'min | يا مؤمن |
| Yā Mubdiʾ | يا مبدئ |
| Yā Mudhill | يا مذل |
| Yā Mughnī | يا مغني |
| Yā Muhaymin | يا مهيمن |
| Yā Mujīb | يا مجيب |
| Yā Mumīt | يا مميت |
| Yā Muntaqim | يا منتقم |
| Yā Muqaddim | يا مقدم |
| Yā Muqsiṭ | يا مقسط |
| Yā Muqtadir | يا مقتدر |
| Yā Muqīt | يا مقيت |
| Yā Mutakabbir | يا متكبر |
| Yā Mutaʿālī | يا متعالي |
| Yā Muʾakhkhir | يا مؤخر |
| Yā Muʿizz | يا معز |
| Yā Muʿīd | يا معيد |
| Yā Muḥyī | يا محيي |
| Yā Muḥṣī | يا محصي |
| Yā Muṣawwir | يا مصور |
| Yā Mājid | يا ماجد |
| Yā Mālik al-Mulk | يا مالك الملك |
| Yā Māniʿ | يا مانع |
| Yā Nāfiʿ | يا نافع |
| Yā Nūr | يا نور |
| Yā Qahhār | يا قهار |
| Yā Qawiyy | يا قوي |
| Yā Qayyūm | يا قيوم |
| Yā Quddūs | يا قدوس |
| Yā Qābiḍ | يا قابض |
| Yā Qādir | يا قادر |
| Yā Raqīb | يا رقيب |
| Yā Rashīd | يا رشيد |
| Yā Razzāq | يا رزاق |
| Yā Raʾūf | يا رؤوف |
| Yā Raḥmān | يا رحمن |
| Yā Raḥīm | يا رحيم |
| Yā Rāfiʿ | يا رافع |
| Yā Salām | يا سلام |
| Yā Samīʿ | يا سميع |
| Yā Shahīd | يا شهيد |
| Yā Shakūr | يا شكور |
| Yā Tawwāb | يا تواب |
| Yā Wadūd | يا ودود |
| Yā Wahhāb | يا وهاب |
| Yā Wakīl | يا وكيل |
| Yā Waliyy | يا ولي |
| Yā Wājid | يا واجد |
| Yā Wāli | يا والي |
| Yā Wārith | يا وارث |
| Yā Wāsiʿ | يا واسع |
| Yā Wāḥid | يا واحد |
| Yā Ākhir | يا آخر |
| Yā ʿAdl | يا عدل |
| Yā ʿAfuww | يا عفو |
| Yā ʿAliyy | يا علي |
| Yā ʿAẓīm | يا عظيم |
| Yā Ḍārr | يا ضار |
| Yā Ḥafīẓ | يا حفيظ |
| Yā Ḥakam | يا حكم |
| Yā Ḥakīm | يا حكيم |
| Yā Ḥalīm | يا حليم |
| Yā Ḥamīd | يا حميد |
| Yā Ḥaqq | يا حق |
| Yā Ḥasīb | يا حسيب |
| Yā Ḥayy | يا حي |
| Yā Ṣabūr | يا صبور |
| Yā Ṣamad | يا صمد |
| Yā Ẓāhir | يا ظاهر |

## AI-draft UI strings

| # | English | Arabic (AI-draft) |
|---|---|---|
| 1 | Abjad value: | قيمة الأبجد: |
| 2 | All 99 Names of Allah in Arabic with transliteration, English meaning and Abjad (ḥisāb al-jummal) value, plus how the Names appear in your name-and-mother burj. | أسماء الله الحسنى التسعة والتسعون بالعربية مع النقل الحرفي والمعنى الإنجليزي وقيمة الأبجد (حساب الجمل)، وكيف تظهر الأسماء في برج الاسم واسم الأم. |
| 3 | Common names such as Muhammad, Ali, Fatima and Maryam. | أسماء شائعة مثل محمد وعلي وفاطمة ومريم. |
| 4 | Each Name in Arabic with its transliteration, meaning and Abjad value. Your burj in the | كل اسم بالعربية مع نقله الحرفي ومعناه وقيمته في الأبجد. وبرجك في |
| 5 | Each of the 12 burūj in the name-and-mother calculator comes with Divine Names for dhikr, for example Yā Raḥmān, Yā Raḥīm for Cancer (al-Saraṭān). Find your burj with the calculator to see yours. | يأتي كل برج من البروج الاثني عشر في حاسبة الاسم واسم الأم بأسماء حسنى للذكر، مثل: يا رحمن، يا رحيم لبرج السرطان. اعرف برجك بالحاسبة لترى أسماءك. |
| 6 | How are the Abjad values of the Names calculated here? | كيف تُحسب قيم الأبجد للأسماء هنا؟ |
| 7 | How are the Names linked to my burj? | كيف ترتبط الأسماء ببرجي؟ |
| 8 | Is this page for prediction or for amulets? | هل هذه الصفحة للتنبّؤ أو للتمائم؟ |
| 9 | Muslim Names: Abjad Value and Burj | أسماء المسلمين: قيمة الأبجد والبرج |
| 10 | The 99 Names of Allah | أسماء الله الحسنى التسعة والتسعون |
| 11 | The 99 Names of Allah (Asmāʾ al-Ḥusnā) | أسماء الله الحسنى التسعة والتسعون |
| 12 | The 99 Names of Allah (Asmāʾ al-Ḥusnā): Meanings & Abjad Values | أسماء الله الحسنى التسعة والتسعون: المعاني وقيم الأبجد |
| 13 | The Abjad calculator counts every letter you type, including "al-", and uses the Maghribi table by default, so its total can differ from the value listed here. | تحسب حاسبة الأبجد كل حرف تكتبه، بما في ذلك «ال»، وتستعمل الجدول المغربي افتراضيًا، فقد يختلف مجموعها عن القيمة المذكورة هنا. |
| 14 | The Arabic text and order follow the widely used compilation drawn from the hadith of al-Walīd in Jāmiʿ al-Tirmidhī (no. 3507). | النص العربي والترتيب وفق الجمع المشهور المأخوذ من حديث الوليد في جامع الترمذي (رقم 3507). |
| 15 | Where does this list of the 99 Names come from? | من أين جاءت هذه القائمة للأسماء الحسنى؟ |
| 16 | Your burj, element, blessed day and the Divine Names for its dhikr. | برجك وعنصرك ويومك المبارك والأسماء الحسنى لذكره. |
| 17 | also comes with Divine Names for dhikr. | يأتي أيضًا بأسماء حسنى للذكر. |
| 18 | name-and-mother calculator | حاسبة الاسم واسم الأم |
| 19 | › 99 Names of Allah | › أسماء الله الحسنى |
| 20 | Abjad Calculator — ʿIlm al-Ḥurūf Letter Numerology | حاسبة الأبجد — علم الحروف |
| 21 | Choose a calculator type below, enter an Arabic name or phrase (or type it in Latin letters and let the tool transliterate it), and read the total value, the letter-by-letter breakdown and the elemental analysis. | اختر نوع الحاسبة أدناه، وأدخل اسمًا أو عبارة عربية (أو اكتبها بالحروف اللاتينية لتحوّلها الأداة)، ثم اقرأ القيمة الكلية والتفصيل حرفًا حرفًا وتحليل العناصر. |
| 22 | Classical electional astrology for choosing an auspicious date. | علم الاختيارات الكلاسيكي لاختيار تاريخ مبارك. |
| 23 | Free Abjad calculator: find the ʿilm al-ḥurūf numerical value of any Arabic name or phrase, with letter-by-letter breakdown, elemental balance and Maghribi or Mashriqi systems. | حاسبة أبجد مجانية: اعرف القيمة العددية في علم الحروف لأي اسم أو عبارة عربية، مع التفصيل حرفًا حرفًا وتوازن العناصر والنظامين المغربي والمشرقي. |
| 24 | How Abjad relates to Islamic letter-numerology | صلة الأبجد بعلم الحروف |
| 25 | In ʿilm al-ḥurūf (the science of letters) and ʿilm al-ʿadad (the science of numbers), scholars studied the numerical value of divine names, Qurʾānic phrases and personal names, and linked letters to the four elements: fire, air, water and earth. Two traditions are common: the Mashriqi order used in the East and the Maghribi order used in North and West Africa. This calculator supports both, so you can compare results. | في علم الحروف وعلم العدد درس العلماء القيم العددية للأسماء الحسنى والعبارات القرآنية والأسماء الشخصية، وربطوا الحروف بالعناصر الأربعة: النار والهواء والماء والتراب. وهناك ترتيبان مشهوران: المشرقي في المشرق، والمغربي في شمال أفريقيا وغربها. وتدعم هذه الحاسبة الترتيبين لتقارن بين النتائج. |
| 26 | The Abjad system assigns a number to each letter of the Arabic alphabet: alif is 1, bāʾ is 2, jīm is 3, and so on up to ghayn at 1000. Adding the values of the letters in a word gives its ḥisāb al-jummal, the "sum total" used for centuries in the Islamic sciences. | يجعل نظام الأبجد لكل حرف من حروف العربية عددًا: الألف 1، والباء 2، والجيم 3، وهكذا حتى الغين 1000. ومجموع قيم حروف الكلمة هو «حساب الجمل» الذي استُعمل قرونًا في العلوم الإسلامية. |
| 27 | The full Asrār app: planetary timing, calculators and dhikr. | تطبيق أسرار الكامل: التوقيت الكوكبي والحاسبات والذكر. |
| 28 | Using the calculator | استعمال الحاسبة |
| 29 | Find Your Burj from Your Name & Mother's Name | اعرف برجك من اسمك واسم أمك |
| 30 | Planetary Hours Today | الساعات الكوكبية اليوم |
| 31 | Authentication is optional. You can | تسجيل الدخول اختياري. يمكنك |
| 32 | Build Time: | وقت البناء: |
| 33 | Email Address | البريد الإلكتروني |
| 34 | Enter your email to reset your password | أدخل بريدك الإلكتروني لإعادة تعيين كلمة المرور |
| 35 | Key Length: | طول المفتاح: |
| 36 | Sign in to continue your journey | سجّل الدخول لمتابعة رحلتك |
| 37 | URL Value: | قيمة الرابط: |
| 38 | use this app | استعمال هذا التطبيق |
| 39 | without an account. | دون حساب. |
| 40 | ✓ Set | ✓ مضبوط |
| 41 | (UTC+3), computed for this page load. | (UTC+3)، محسوبة عند تحميل هذه الصفحة. |
| 42 | (the app's default location) with the same engine as the "Find Best Dates" scanner: days rated Acceptable or better with no ruling-out condition, within the next 90 days. Times are | (الموقع الافتراضي للتطبيق) بالمحرّك نفسه الذي يستعمله ماسح «ابحث عن أفضل التواريخ»: الأيام المقدّرة «مقبول» فما فوق دون شرط مُستبعِد، خلال الأيام التسعين القادمة. الأوقات |
| 43 | Computed now for | محسوبة الآن لـ |
| 44 | No day in the next 90 days reaches Acceptable without a ruling-out condition. Use the tool below to see the least-afflicted options for your location. | لا يبلغ أي يوم في الأيام التسعين القادمة درجة «مقبول» دون شرط مُستبعِد. استعمل الأداة أدناه لترى أقل الخيارات تأثّرًا لموقعك. |
| 45 | The coming hours of | الساعات القادمة لـ |
| 46 | The interactive ikhtiyārāt tool, set to this purpose. It uses your location if you allow it (otherwise Makkah). | أداة الاختيارات التفاعلية، مضبوطة على هذا الغرض. تستعمل موقعك إن سمحت بذلك (وإلا فمكة المكرمة). |
| 47 | earns a bonus. Each planetary hour is one twelfth of daytime or night, so the clock times change with the seasons and your location. | تنال نقاطًا إضافية. وكل ساعة كوكبية جزء من اثني عشر من النهار أو الليل، فتتغيّر أوقاتها بحسب الفصول وموقعك. |
| 48 | hour of | ساعة |
| 49 | time (UTC+3). | بتوقيت (UTC+3). |
| 50 | "Allāhumma bārik li-ummatī fī bukūrihā" — O Allah, bless my ummah in its early mornings (early departure, bukūr). | «اللهم بارك لأمتي في بكورها» (البكور في الخروج). |
| 51 | ) the classical ikhtiyārāt rules favour for a nikāḥ, plus the next favourable dates. For reflection, not prediction. | ) التي ترجّحها قواعد الاختيارات الكلاسيكية لعقد النكاح، مع أقرب التواريخ المناسبة. للتأمّل لا للتنبّؤ. |
| 52 | ) the classical ikhtiyārāt rules favour for moving into a new home or laying a foundation, plus the next favourable dates. | ) التي ترجّحها قواعد الاختيارات الكلاسيكية للانتقال إلى منزل جديد أو وضع الأساس، مع أقرب التواريخ المناسبة. |
| 53 | ) the classical ikhtiyārāt rules favour for starting a business or signing a contract, plus the next favourable dates. | ) التي ترجّحها قواعد الاختيارات الكلاسيكية لبدء مشروع تجاري أو توقيع عقد، مع أقرب التواريخ المناسبة. |
| 54 | ) the ikhtiyārāt rules favour for a journey, plus the next favourable dates. | ) التي ترجّحها قواعد الاختيارات للسفر، مع أقرب التواريخ المناسبة. |
| 55 | ), followed by | )، يليه |
| 56 | Below are the weekdays and planetary hours the Asrār "Business / Contracts" rules favour, the conditions they rule out, and the next favourable dates — recalculated every time this page loads. | فيما يلي أيام الأسبوع والساعات الكوكبية التي ترجّحها قواعد أسرار «التجارة / العقود»، والشروط التي تستبعدها، وأقرب التواريخ المناسبة — يُعاد حسابها عند كل تحميل للصفحة. |
| 57 | Below are the weekdays and planetary hours the Asrār "Moving / Building" rules favour, the conditions they rule out, and the next favourable dates — recalculated every time this page loads. | فيما يلي أيام الأسبوع والساعات الكوكبية التي ترجّحها قواعد أسرار «الانتقال / البناء»، والشروط التي تستبعدها، وأقرب التواريخ المناسبة — يُعاد حسابها عند كل تحميل للصفحة. |
| 58 | Below are the weekdays and planetary hours the Asrār ikhtiyārāt rules favour for marriage, the conditions they rule out, and the next dates the same engine rates favourable — recalculated every time this page loads. | فيما يلي أيام الأسبوع والساعات الكوكبية التي ترجّحها قواعد الاختيارات في أسرار للزواج، والشروط التي تستبعدها، وأقرب التواريخ التي يقدّرها المحرّك نفسه مناسبة — يُعاد حسابها عند كل تحميل للصفحة. |
| 59 | Best Day for Nikah in Islam: Days & Hours for Marriage | أفضل يوم للنكاح في الإسلام: الأيام والساعات للزواج |
| 60 | Best Day to Move Home — Favourable Days and Hours in Ikhtiyārāt | أفضل يوم للانتقال إلى منزل جديد — الأيام والساعات المناسبة في الاختيارات |
| 61 | Best Day to Move House: Favourable Days & Hours (Ikhtiyārāt) | أفضل يوم لنقل السكن: الأيام والساعات المناسبة (الاختيارات) |
| 62 | Best Day to Start a Business or Sign a Contract (Ikhtiyārāt) | أفضل يوم لبدء مشروع تجاري أو توقيع عقد (الاختيارات) |
| 63 | Best Day to Start a Business — Favourable Days and Hours in Ikhtiyārāt | أفضل يوم لبدء مشروع تجاري — الأيام والساعات المناسبة في الاختيارات |
| 64 | Best Day to Travel in Islam — Favourable Days and Hours for a Journey | أفضل يوم للسفر في الإسلام — الأيام والساعات المناسبة للسفر |
| 65 | Best Day to Travel in Islam: Favourable Days & Hours | أفضل يوم للسفر في الإسلام: الأيام والساعات المناسبة |
| 66 | Does a favourable date guarantee a safe journey? | هل يضمن التاريخ المناسب سفرًا آمنًا؟ |
| 67 | Does a favourable date guarantee success? | هل يضمن التاريخ المناسب النجاح؟ |
| 68 | Early morning: the tool gives a bonus to departures between 05:00 and 10:00 (bukūr), echoing the prayer "Allāhumma bārik li-ummatī fī bukūrihā". | البكور: تمنح الأداة نقاطًا إضافية للخروج بين الساعة 05:00 و10:00، استئناسًا بالدعاء «اللهم بارك لأمتي في بكورها». |
| 69 | For a foundation or household meant to endure, the rules prefer the Moon in a fixed sign (burj thābit), which shows stability, and penalise a movable sign, which inclines to impermanence. | للأساس أو البيت الذي يُراد له الدوام، تفضّل القواعد القمر في برج ثابت لدلالته على الاستقرار، وتنقص من البرج المنقلب لميله إلى عدم الثبات. |
| 70 | For those obligated to attend Jumuʿah, departing after the call to Friday prayer is discouraged in fiqh. | لمن تجب عليه الجمعة، يُكره في الفقه السفر بعد النداء لصلاة الجمعة. |
| 71 | Is a favourable date a guarantee? | هل التاريخ المناسب ضمان؟ |
| 72 | Is starting a business the same as signing a contract? | هل بدء مشروع تجاري مثل توقيع عقد؟ |
| 73 | It also penalises Mercury retrograde (travel plans and documents) and a Moon in a fixed sign, which inclines to delay. | وتنقص أيضًا من رجوع عطارد (خطط السفر والوثائق) ومن القمر في برج ثابت لميله إلى التأخير. |
| 74 | Mercury is associated with negotiation and contracts: Mercury retrograde or combust rules a window out, while a dignified Mercury adds points. | يرتبط عطارد بالتفاوض والعقود: رجوعه أو احتراقه يستبعد الوقت، وكرامته تضيف نقاطًا. |
| 75 | Moving home | الانتقال إلى منزل جديد |
| 76 | Moving into a new home or starting a building is a decision made with istikhāra and consultation (mashwara). The classical science of ikhtiyārāt (electional timing) adds a framework for reflecting on the moment. | الانتقال إلى منزل جديد أو البدء في البناء قرارٌ يُتّخذ بالاستخارة والمشاورة. ويضيف علم الاختيارات الكلاسيكي إطارًا للتأمّل في اللحظة. |
| 77 | No date is religiously forbidden for nikāḥ: marriage is permitted at any time of the year. Many families still like to choose a blessed moment, and the classical science of ikhtiyārāt (electional timing) offers a framework for that reflection. | لا يوجد تاريخ محرّم شرعًا للنكاح؛ فالزواج جائز في أي وقت من السنة. ومع ذلك تحبّ أسر كثيرة اختيار وقت مبارك، ويقدّم علم الاختيارات الكلاسيكي إطارًا لهذا التأمّل. |
| 78 | No day is forbidden for nikāḥ. In the Asrār ikhtiyārāt rules | لا يوجد يوم محرّم للنكاح. في قواعد الاختيارات في أسرار |
| 79 | No. This is an aid to reflection, not a prediction. It is not a substitute for istikhāra, consultation (mashwara) with family and trusted scholars, and tawakkul (reliance on Allah). | لا. هذا عونٌ على التأمّل لا تنبّؤ. ولا يغني عن الاستخارة ومشاورة الأهل وأهل العلم الثقات والتوكّل على الله. |
| 80 | Saturn retrograde is also penalised. | ويُنقَص أيضًا من رجوع زحل. |
| 81 | Starting a business, opening a shop or signing a contract is a decision made with istikhāra and consultation (mashwara). The classical science of ikhtiyārāt (electional timing) adds a framework for reflecting on the moment. | بدء مشروع تجاري أو فتح متجر أو توقيع عقد قرارٌ يُتّخذ بالاستخارة والمشاورة. ويضيف علم الاختيارات الكلاسيكي إطارًا للتأمّل في اللحظة. |
| 82 | The Asrār ikhtiyārāt rules add the day ruler, the planetary hour and the state of the Moon. Below is what they favour for a journey, what they rule out, and the next favourable dates — recalculated every time this page loads. | تضيف قواعد الاختيارات في أسرار حاكمَ اليوم والساعة الكوكبية وحال القمر. وفيما يلي ما ترجّحه للسفر وما تستبعده وأقرب التواريخ المناسبة — يُعاد حسابها عند كل تحميل للصفحة. |
| 83 | The Asrār ikhtiyārāt rules favour | ترجّح قواعد الاختيارات في أسرار |
| 84 | The Prophet ﷺ married ʿĀʾisha (RA) in Shawwāl — a month long favoured for marriage in the Sunnah. | تزوّج النبي ﷺ عائشة رضي الله عنها في شوال — وهو شهر طالما استُحبّ فيه الزواج في السنة. |
| 85 | The Prophet ﷺ married ʿĀʾisha (RA) in Shawwāl, a month long favoured for marriage in the Sunnah. Nikāḥ itself is permitted year-round, including during Ramadan. | تزوّج النبي ﷺ عائشة رضي الله عنها في شوال، وهو شهر طالما استُحبّ فيه الزواج في السنة. والنكاح نفسه جائز طوال العام، حتى في رمضان. |
| 86 | The Prophet ﷺ preferred to set out on Thursday. The days ( | كان النبي ﷺ يحبّ أن يخرج يوم الخميس. والأيام ( |
| 87 | The Prophet ﷺ preferred to set out on journeys on Thursday (Bukhārī), and prayed for blessing on early departures: "Allāhumma bārik li-ummatī fī bukūrihā" — O Allah, bless my ummah in its early mornings. | كان النبي ﷺ يحبّ أن يخرج في سفره يوم الخميس (البخاري)، ودعا بالبركة في البكور: «اللهم بارك لأمتي في بكورها». |
| 88 | The Prophet ﷺ preferred to set out on journeys on Thursday (Bukhārī). The Asrār ikhtiyārāt rules favour | كان النبي ﷺ يحبّ أن يخرج في سفره يوم الخميس (البخاري). وترجّح قواعد الاختيارات في أسرار |
| 89 | What is the best day to travel in Islam? | ما أفضل يوم للسفر في الإسلام؟ |
| 90 | What time of day is best to set out? | ما أفضل وقت من اليوم للخروج؟ |
| 91 | Which days ( | أي الأيام ( |
| 92 | Which planetary hours favour business? | أي الساعات الكوكبية تناسب التجارة؟ |
| 93 | Which planetary hours favour moving home? | أي الساعات الكوكبية تناسب الانتقال إلى منزل جديد؟ |
| 94 | Which planetary hours favour travel? | أي الساعات الكوكبية تناسب السفر؟ |
| 95 | Why does a fixed Moon sign matter? | لماذا يهمّ أن يكون القمر في برج ثابت؟ |
| 96 | Yes. The same "Moving / Building" rule set is used for moving in, laying a foundation or starting construction. | نعم. تُستعمل قواعد «الانتقال / البناء» نفسها للسكن الجديد ووضع الأساس وبدء البناء. |
| 97 | scores highest ( | يحصل على أعلى نقاط ( |
| 98 | (the app's default location). | (الموقع الافتراضي للتطبيق). |
| 99 | Best Day For Nikah, Travel, Moving & Business (Ikhtiyārāt) | أفضل يوم للنكاح والسفر والانتقال والتجارة (الاختيارات) |
| 100 | Dates computed for | التواريخ محسوبة لـ |
| 101 | Favourable weekdays and planetary hours for marriage (nikāḥ), travel, moving home and starting a business in the classical ikhtiyārāt tradition, with the next favourable dates. For reflection. | أيام الأسبوع والساعات الكوكبية المناسبة للزواج (النكاح) والسفر والانتقال إلى منزل جديد وبدء مشروع تجاري في تراث الاختيارات الكلاسيكي، مع أقرب التواريخ المناسبة. للتأمّل. |
| 102 | For each purpose below: what the Asrār tool’s rules favour, and the next favourable date, recalculated every time this page loads. | لكل غرض أدناه: ما ترجّحه قواعد أداة أسرار، وأقرب تاريخ مناسب، ويُعاد حسابه في كل مرة تُحمَّل فيها الصفحة. |
| 103 | Ikhtiyārāt (electional timing) is the classical science of choosing the most favourable moment to begin an action — a marriage, a journey, a building, a business — from the day, the planetary hour, the Moon and the lunar mansions. | علم الاختيارات هو العلم الكلاسيكي لاختيار أنسب وقت لابتداء عمل — زواج أو سفر أو بناء أو تجارة — بالنظر إلى اليوم والساعة الكوكبية والقمر والمنازل القمرية. |
| 104 | No. No date is religiously forbidden for nikāḥ, and these rules are an aid to reflection. They are not a substitute for istikhāra, consultation (mashwara) and tawakkul (reliance on Allah). | لا. لا يوجد تاريخ محرّم شرعًا للنكاح، وهذه القواعد عونٌ على التأمّل. وهي لا تغني عن الاستخارة والمشاورة والتوكّل على الله. |
| 105 | No: each purpose has its own rules, days and hours. | لا: لكل غرض قواعده وأيامه وساعاته. |
| 106 | No: each purpose has its own rules. Thursday is, however, among the favoured days for all four purposes on this page. | لا: لكل غرض قواعده. لكن الخميس من الأيام المفضّلة للأغراض الأربعة كلها في هذه الصفحة. |
| 107 | What is ikhtiyārāt? | ما علم الاختيارات؟ |
| 108 | Which day should you choose for a nikāḥ, setting out on a journey, moving home or starting a business? The classical science of ikhtiyārāt (electional timing) gives each purpose its own favourable weekdays and planetary hours. | أيّ يوم تختار لعقد النكاح أو للسفر أو للانتقال إلى منزل جديد أو لبدء مشروع تجاري؟ يجعل علم الاختيارات الكلاسيكي لكل غرض أيامه وساعاته الكوكبية المناسبة. |
| 109 | Yes. The next dates are recalculated for today with the same engine as the Best Dates (Ikhtiyārāt) tool. | نعم. تُعاد حسابات التواريخ القادمة لليوم بالمحرّك نفسه الذي تستعمله أداة أفضل التواريخ (الاختيارات). |
| 110 | none within 90 days | لا يوجد خلال 90 يومًا |
| 111 | A reflective, educational snapshot in the ʿIlm al-Nujūm tradition — not a predictive horoscope, a religious ruling, or a substitute for istikhāra and consultation with trusted scholars. | لمحة تأمّلية تعليمية في تراث علم النجوم — ليست طالعًا تنبّؤيًا ولا حكمًا شرعيًا ولا بديلًا عن الاستخارة ومشاورة أهل العلم الثقات. |
| 112 | Add your exact birth time to see this. | أضف وقت ميلادك الدقيق لترى هذا. |
| 113 | Calculate My Birth Profile | احسب ملف ميلادي |
| 114 | Enter your date of birth (and, if you know it, the exact time and place) to see your Sun and Moon signs, the Moon's lunar mansion at your birth, the day that ruled your birth date, and each classical planet's real astronomical condition that day — computed instantly from this app's own ephemeris, not a network call. | أدخل تاريخ ميلادك (ووقته ومكانه إن عرفتهما) لترى برجي الشمس والقمر، ومنزلة القمر عند ولادتك، واليوم الذي حكم تاريخ ميلادك، والحال الفلكية الحقيقية لكل كوكب من الكواكب الكلاسيكية في ذلك اليوم — تُحسب فورًا من تقويم التطبيق الفلكي نفسه دون اتصال بالشبكة. |
| 115 | I know my exact time of birth | أعرف وقت ميلادي الدقيق |
| 116 | Less favorable for | أقل مناسبة لـ |
| 117 | Lunar Mansion at Birth | المنزلة القمرية عند الميلاد |
| 118 | Suggested practice | الممارسة المقترحة |
| 119 | Tap any planet for its full dignity breakdown | اضغط على أي كوكب لتفصيل كرامته كاملًا |
| 120 | Time of birth (local) | وقت الميلاد (المحلي) |
| 121 | Your Elemental Imprint | بصمتك العنصرية |
| 122 | Your Personal ʿIlm al-Nujūm Snapshot | لمحتك الشخصية في علم النجوم |
| 123 | Your personal ʿIlm al-Nujūm birth profile: Sun and Moon signs, lunar mansion, day ruler, and the real dignity condition of each classical planet at your birth. | ملف ميلادك الشخصي في علم النجوم: برجا الشمس والقمر، والمنزلة القمرية، وحاكم اليوم، والحال الحقيقية لكرامة كل كوكب كلاسيكي عند ولادتك. |
| 124 | A low number is not a prohibition and not a bad omen. It can be an invitation to talk about expectations and patience. Many happy marriages would "fail" a numeric test. | العدد المنخفض ليس تحريمًا ولا شؤمًا، بل قد يكون دعوة للحديث عن التوقّعات والصبر. وكثير من الزيجات السعيدة كانت «سترسب» في اختبار رقمي. |
| 125 | Before a nikāḥ, many families like to look at the harmony between two names. In ʿilm al-ḥurūf each Arabic letter has a number (the Abjad, or ḥisāb al-jummal), so every name has a total. This calculator compares the two totals with the traditional "soul connection" method and reads the result for marriage first, with friendship, family and work as other contexts. | قبل النكاح تحبّ أسر كثيرة أن تنظر في الانسجام بين الاسمين. ففي علم الحروف لكل حرف عربي عدد (الأبجد أو حساب الجمل)، فلكل اسم مجموع. تقارن هذه الحاسبة بين المجموعين بطريقة «صلة الأرواح» التقليدية، وتقرأ النتيجة للزواج أولًا، ثم للصداقة والعائلة والعمل. |
| 126 | Each name is converted to its Abjad (kabīr) total, using the Maghribi or Mashriqi letter values you select. | يُحوَّل كل اسم إلى مجموعه في الأبجد الكبير، بقيم الحروف المغربية أو المشرقية التي تختارها. |
| 127 | Each number has a traditional meaning and outlook, shown for the relationship context you choose: marriage, universal, friendship, family or work. | لكل عدد معنى ونظرة تقليديان، يُعرضان بحسب سياق العلاقة الذي تختاره: زواج، عام، صداقة، عائلة أو عمل. |
| 128 | Enter both names, choose the "Marriage" context and calculate. The tool adds the Abjad values of the two names plus 7, divides by 9 and shows the meaning of the remainder for marriage. | أدخل الاسمين واختر سياق «الزواج» ثم احسب. تجمع الأداة قيمتي الأبجد للاسمين مع 7، وتقسم على 9، وتعرض معنى الباقي في الزواج. |
| 129 | Free name compatibility calculator for marriage: compare two names with the Abjad (ḥisāb al-jummal) soul-connection method, or two dates of birth. For reflection, alongside istikhāra and family counsel. | حاسبة مجانية لتوافق الأسماء للزواج: قارن بين اسمين بطريقة صلة الأرواح بالأبجد (حساب الجمل)، أو بين تاريخَي ميلاد. للتأمّل، مع الاستخارة ومشورة الأهل. |
| 130 | Name Compatibility for Marriage (Abjad Calculator) | توافق الأسماء للزواج (حاسبة الأبجد) |
| 131 | Write both names in Arabic letters (or type them in Latin letters and pick the Arabic spelling). | اكتب الاسمين بالحروف العربية (أو اكتبهما بالحروف اللاتينية واختر الكتابة العربية). |
| 132 | Yes. Choose "By Birth Date" to compare two people's Sun, Moon, Venus and Mars signs. This is a general, modern astrological comparison, not a classical Islamic method, and it never uses birth time or houses. | نعم. اختر «بتاريخ الميلاد» لتقارن بين أبراج الشمس والقمر والزهرة والمريخ لشخصين. وهذه مقارنة فلكية عامة حديثة، لا طريقة إسلامية كلاسيكية، ولا تستعمل وقت الميلاد ولا البيوت. |
| 133 | You can also compare two dates of birth (a general, modern astrological comparison of Sun, Moon, Venus and Mars signs), look at a person's resonance with one of the 99 Names of Allah, or find the Divine Name that matches an intention. | يمكنك أيضًا مقارنة تاريخَي ميلاد (مقارنة فلكية عامة حديثة لأبراج الشمس والقمر والزهرة والمريخ)، أو النظر في رنين شخص مع اسم من أسماء الله الحسنى، أو إيجاد الاسم الحسن المناسب لنيّة. |
| 134 | A lunar mansion (manzil, pl. manāzil al-qamar) is one of twenty-eight sectors along the Moon's path. Classical sources assign each mansion themes such as journeys, contracts or restraint. Ikhtiyārāt uses the mansion the Moon occupies on a given day as one factor among several. | المنزلة القمرية (والجمع: منازل القمر) قطاع من ثمانية وعشرين قطاعًا على مسار القمر. وتنسب المصادر الكلاسيكية إلى كل منزلة موضوعات كالسفر أو العقود أو الإمساك. ويستعمل علم الاختيارات المنزلة التي يحلّ فيها القمر في يوم ما عاملًا من عدة عوامل. |
| 135 | Choose an auspicious date for nikāḥ, travel, business or a new start using classical Islamic ikhtiyārāt: day rulers, planetary hours, Moon phase and lunar mansions. | اختر تاريخًا مباركًا للنكاح أو السفر أو التجارة أو بداية جديدة بعلم الاختيارات الكلاسيكي: حكّام الأيام والساعات الكوكبية وأطوار القمر والمنازل القمرية. |
| 136 | Choose the marriage (nikāḥ) election type, then check a candidate date or scan a range. Favourable signs typically include a supportive day ruler and planetary hour, a well-placed Moon by sign, phase and lunar mansion, and avoidance of combust or void-of-course Moon periods. Confirm practical and sharīʿah considerations separately. | اختر نوع الاختيار «الزواج (النكاح)»، ثم افحص تاريخًا مرشّحًا أو امسح مدّة. وتشمل العلامات المناسبة عادةً حاكمَ يومٍ وساعةً كوكبية داعمين، وقمرًا حسنَ الموضع برجًا وطورًا ومنزلةً، واجتنابَ أوقات احتراق القمر أو خلوّ سيره. وتُراعى الاعتبارات العملية والشرعية على حدة. |
| 137 | Fortune-telling claims to reveal the unseen or fix the future. Ikhtiyārāt does not. It offers classical guidelines for when to start something, while affirming that success and knowledge of the ghayb belong to Allah alone. Treat the tool as an aid for reflection, not a verdict. | الكهانة تدّعي كشف الغيب أو تحديد المستقبل، أما الاختيارات فلا. إنها تقدّم إرشادات كلاسيكية لوقت ابتداء الأمر، مع التسليم بأن التوفيق وعلم الغيب لله وحده. فاجعل الأداة عونًا على التأمّل لا حكمًا. |
| 138 | Ikhtiyārāt (اختيارات) means "choices" or elections: the traditional Islamic art of selecting an auspicious time to begin an undertaking. It draws on day rulers, planetary hours, and the Moon's condition within the broader science of ʿIlm al-Nujūm. | الاختيارات تعني اختيار الأوقات: الفنّ الإسلامي التقليدي في انتقاء وقت مبارك لابتداء عمل. وتعتمد على حكّام الأيام والساعات الكوكبية وحال القمر ضمن علم النجوم الأوسع. |
| 139 | Ikhtiyārāt is the classical practice of electional timing in ʿIlm al-Nujūm: choosing a day and hour for an important act — nikāḥ (marriage), travel, business, moving home, or starting study — when the celestial indicators are favourable. | الاختيارات هي ممارسة التوقيت الاختياري الكلاسيكية في علم النجوم: اختيار يوم وساعة لعمل مهمّ — النكاح أو السفر أو التجارة أو الانتقال أو بدء الدراسة — حين تكون الدلائل السماوية مناسبة. |
| 140 | Traditional rules weigh the day ruler, the planetary hour, the Moon's sign, phase and lunar mansion (manāzil al-qamar), and counsel avoiding periods when the Moon is combust or void of course. The aim is adab with time: beginning matters in a moment that supports them, not forcing outcomes. | تزن القواعد التقليدية حاكمَ اليوم والساعةَ الكوكبية وبرجَ القمر وطورَه ومنزلتَه (منازل القمر)، وتنصح باجتناب أوقات احتراق القمر أو خلوّ سيره. والغاية الأدب مع الوقت: أن تبتدئ الأمور في لحظة تعينها، لا أن تُفرض النتائج. |
| 141 | Check a date for yourself | افحص تاريخًا بنفسك |
| 142 | moving or building | الانتقال أو البناء |
| 143 | Asrār — Planetary Hours, Abjad Calculator & Islamic Sacred Sciences | أسرار — الساعات الكوكبية وحاسبة الأبجد والعلوم الإسلامية |
| 144 | A manzil (pl. manāzil al-qamar) is one of twenty-eight sectors of the Moon’s path. Classical sources give each station a name and traditional themes. Asrār shows the current station and educational notes for reflection. | المنزلة (والجمع: منازل القمر) قطاع من ثمانية وعشرين قطاعًا على مسار القمر. وتعطي المصادر الكلاسيكية كل منزلة اسمًا وموضوعات تقليدية. ويعرض أسرار المنزلة الحالية مع ملاحظات تعليمية للتأمّل. |
| 145 | Arabic name, transliteration and a short focus for each station. Expand the live card above for favourable / caution themes (educational). | الاسم العربي والنقل الحرفي ومحور موجز لكل منزلة. افتح البطاقة الحيّة أعلاه لموضوعات المناسبة والحذر (تعليمية). |
| 146 | Electional timing may weigh the Moon’s mansion among other factors (day ruler, planetary hour, phase). See Best Dates (Ikhtiyārāt). Election tables on Asrār remain separately reviewed and are not auto-derived from every mansion’s fav/unfav list. | قد يزن التوقيت الاختياري منزلة القمر بين عوامل أخرى (حاكم اليوم، الساعة الكوكبية، الطور). انظر أفضل التواريخ (الاختيارات). وجداول الاختيار في أسرار مراجَعة على حدة، ولا تُستخرج آليًا من قائمة المناسب وغير المناسب لكل منزلة. |
| 147 | From the Moon’s tropical ecliptic longitude (astronomy-engine), divided into 28 equal sectors of 360°/28 ≈ 12.857°. Mansion 1 begins at 0° of the tropical ecliptic. This matches Asrār’s default tropical planetary ephemeris. | من الطول البروجي الاستوائي للقمر (astronomy-engine)، مقسومًا إلى 28 قطاعًا متساويًا مقدار كل منها 360°/28 ≈ 12.857°. وتبدأ المنزلة الأولى عند 0° من فلك البروج الاستوائي، وهذا يوافق التقويم الكوكبي الاستوائي الافتراضي في أسرار. |
| 148 | Manāzil are signs for contemplation, not agents that compel the unseen. This page is for learning and adab with time — not prediction, not a fatwa, and not a substitute for istikhāra, mashwara or tawakkul. Allah alone knows the ghayb. | المنازل علامات للتأمّل، لا فواعل تتحكّم في الغيب. هذه الصفحة للتعلّم والأدب مع الوقت — لا للتنبّؤ، ولا هي فتوى، ولا بديل عن الاستخارة والمشاورة والتوكّل. والله وحده يعلم الغيب. |
| 149 | No. Asrār presents manāzil for education and timing adab. There are no talismans, taweez recipes, or claims to know the unseen. Favourable or cautious themes are traditional notes for reflection, not guarantees. | لا. يعرض أسرار المنازل للتعليم وأدب التوقيت. فلا تمائم ولا وصفات أحراز ولا ادّعاء لعلم الغيب. وموضوعات المناسبة والحذر ملاحظات تقليدية للتأمّل، لا ضمانات. |
| 150 | See which lunar mansion the Moon occupies today, browse all twenty-eight stations, and learn how classical ʿIlm al-Nujūm uses them for reflection and timing adab. | اعرف المنزلة التي يحلّ فيها القمر اليوم، وتصفّح المنازل الثماني والعشرين كلها، وتعلّم كيف يستعملها علم النجوم الكلاسيكي للتأمّل وأدب التوقيت. |
| 151 | The 28 lunar mansions in classical ʿIlm al-Nujūm: today’s manzil, Arabic names, spiritual focus, and how manāzil relate to birth profile and ikhtiyārāt. For reflection, not prediction. | المنازل القمرية الثماني والعشرون في علم النجوم الكلاسيكي: منزلة اليوم، والأسماء العربية، والمحور الروحي، وصلة المنازل بملف الميلاد والاختيارات. للتأمّل لا للتنبّؤ. |
| 152 | Use Birth Profile with your birth date, time and place. The profile includes the natal lunar mansion alongside Sun/Moon signs. | استعمل ملف الميلاد بتاريخ ميلادك ووقته ومكانه. ويتضمّن الملف منزلة القمر عند الميلاد مع برجي الشمس والقمر. |
| 153 | Your birth profile shows the lunar mansion the Moon occupied at your birth time, together with Sun and Moon signs and day ruler. | يعرض ملف ميلادك المنزلة التي كان فيها القمر وقت ولادتك، مع برجي الشمس والقمر وحاكم اليوم. |
| 154 | Add the Abjad value of your name to the Abjad value of your mother's name, divide by 12 and keep the remainder (0 counts as 12). Remainder 1 is Aries (al-Ḥamal), 2 Taurus, 3 Gemini, and so on to 12, Pisces (al-Ḥūt). The calculator above does it for you. | اجمع قيمة اسمك في الأبجد إلى قيمة اسم أمك، واقسم على 12، واحتفظ بالباقي (الصفر يُعدّ 12). الباقي 1 هو الحمل، و2 الثور، و3 الجوزاء، وهكذا حتى 12 وهو الحوت. والحاسبة أعلاه تفعل ذلك عنك. |
| 155 | All sadaqah by burj → | كل الصدقات بحسب البرج ← |
| 156 | Each name is converted to its Abjad (ḥisāb al-jummal) total using the Maghribi letter values. | يُحوَّل كل اسم إلى مجموعه في الأبجد (حساب الجمل) بقيم الحروف المغربية. |
| 157 | Free calculator: your burj (sign, ṭabʿ) from the Abjad value of your name and your mother's name — برجك من اسمك واسم امك. Element, temperament, blessed day, dhikr and burj sadaqah. For reflection. | حاسبة مجانية: برجك (والطبع) من قيمة اسمك واسم أمك في الأبجد — برجك من اسمك واسم امك. العنصر والطبع واليوم المبارك والذكر وصدقة البرج. للتأمّل. |
| 158 | How the calculation works | كيف يجري الحساب |
| 159 | In ʿilm al-ḥurūf your own name is read as who you are, and your mother's name as what surrounds you: family inheritance and the conditions of your path. Pairing the two gives the burj. The same method is found in Arabic, West African (Hausa, Wolof) and South Asian practice. | في علم الحروف يُقرأ اسمك على أنه ذاتك، واسم أمك على أنه ما يحيط بك: الإرث العائلي وظروف طريقك. وبالجمع بينهما يُستخرج البرج. وتوجد الطريقة نفسها في الممارسة العربية وغرب الأفريقية (الهوسا والولوف) وجنوب الآسيوية. |
| 160 | Is my name burj the same as my zodiac sign by birth date? | هل برج اسمي هو نفسه برجي بتاريخ الميلاد؟ |
| 161 | Is this the same as istikhāra? | هل هذه هي الاستخارة؟ |
| 162 | No. Istikhāra is the prayer of seeking Allah's guidance (ṣalāt al-istikhāra). The name "Istikhārat al-Asmāʾ" is traditional, but this calculation is a reflection on names and temperament, not a prayer and not a way to know the unseen. | لا. الاستخارة هي صلاة طلب الخيرة من الله (صلاة الاستخارة). واسم «استخارة الأسماء» تقليدي، لكن هذا الحساب تأمّل في الأسماء والطبع، لا صلاة ولا وسيلة لعلم الغيب. |
| 163 | Not necessarily. The name-based burj comes only from the Abjad values of the two names. Your sign by birth date comes from the Sun's position when you were born, so the two can differ. The tool offers both methods. | ليس بالضرورة. فالبرج المستخرج من الاسم يأتي من قيمتي الاسمين في الأبجد فقط، أما برجك بتاريخ الميلاد فمن موضع الشمس عند ولادتك، فقد يختلفان. والأداة تقدّم الطريقتين. |
| 164 | The 12 burūj at a glance | البروج الاثنا عشر في لمحة |
| 165 | The burj gives your element (fire, earth, air or water), which describes your ṭabʿ (temperament), and links to a blessed day, a dhikr and a sadaqah. | يعطي البرج عنصرك (النار أو التراب أو الهواء أو الماء)، وهو يصف طبعك، ويرتبط بيوم مبارك وذكر وصدقة. |
| 166 | Today's recommended sadaqah. | الصدقة الموصى بها اليوم. |
| 167 | What does my burj tell me? | ماذا يخبرني برجي؟ |
| 168 | Worked example | مثال تطبيقي |
| 169 | Write your name and your mother's name in Arabic letters (or type them in Latin letters and pick the Arabic spelling). | اكتب اسمك واسم أمك بالحروف العربية (أو اكتبهما بالحروف اللاتينية واختر الكتابة العربية). |
| 170 | Your element and temperament, a blessed day of the week, a Divine Name to remember in dhikr, and a traditional sadaqah. Read it as encouragement to good deeds and self-knowledge, not as a forecast. | عنصرك وطبعك، ويوم مبارك من الأسبوع، واسم من الأسماء الحسنى تذكره، وصدقة تقليدية. اقرأه حثًّا على العمل الصالح ومعرفة النفس، لا توقّعًا. |
| 171 | ) has an Abjad value of | ) قيمته في الأبجد |
| 172 | ): Abjad Value & Burj with Mother's Name | ): قيمة الأبجد والبرج مع اسم الأم |
| 173 | ): Abjad Value and Burj | ): قيمة الأبجد والبرج |
| 174 | , using the Maghribi letter values of the "Who Am I?" calculator (vowel marks are not counted). | ، بقيم الحروف المغربية في حاسبة «من أنا؟» (لا تُحسب الحركات). |
| 175 | , which is | ، وهو |
| 176 | : all are written | : كلها تُكتب |
| 177 | Abjad value of | قيمة الأبجد لـ |
| 178 | Burj of | برج |
| 179 | Does | هل |
| 180 | Does the burj predict my future? | هل يتنبّأ البرج بمستقبلي؟ |
| 181 | How the burj is found | كيف يُستخرج البرج |
| 182 | How the calculation works and the 12 burūj at a glance. | كيف يجري الحساب، والبروج الاثنا عشر في لمحة. |
| 183 | In ḥisāb al-jummal the name | في حساب الجمل الاسم |
| 184 | Spellings | طرق الكتابة |
| 185 | The Abjad value of | قيمة الأبجد لـ |
| 186 | The Mashriqi table gives | يعطي الجدول المشرقي |
| 187 | The calculator above does it for you. | والحاسبة أعلاه تفعل ذلك عنك. |
| 188 | What is the Abjad value of the name | ما قيمة الأبجد لاسم |
| 189 | Yes. The calculation uses the Arabic spelling | نعم. يستعمل الحساب الكتابة العربية |
| 190 | and your mother's name. For reflection, not prediction. | واسم أمك. للتأمّل لا للتنبّؤ. |
| 191 | burj guide | دليل البروج |
| 192 | to the Abjad value of your mother's name, divide the total by 12 and keep the remainder (0 counts as 12): 1 is Aries (al-Ḥamal) and 12 is Pisces (al-Ḥūt). | إلى قيمة اسم أمك في الأبجد، واقسم المجموع على 12، واحتفظ بالباقي (الصفر يُعدّ 12): 1 هو الحمل و12 هو الحوت. |
| 193 | Add the Abjad value of your name to the Abjad value of your mother's name, divide by 12 and keep the remainder (0 counts as 12). Remainder 1 is Aries (al-Ḥamal), 2 Taurus, and so on to 12, Pisces (al-Ḥūt). | اجمع قيمة اسمك في الأبجد إلى قيمة اسم أمك، واقسم على 12، واحتفظ بالباقي (الصفر يُعدّ 12). الباقي 1 هو الحمل، و2 الثور، وهكذا حتى 12 وهو الحوت. |
| 194 | Boys’ names | أسماء الذكور |
| 195 | Calculate with any name, and see the 12 burūj at a glance. | احسب بأي اسم، وانظر البروج الاثني عشر في لمحة. |
| 196 | How is the burj found from my name and my mother's name? | كيف يُستخرج البرج من اسمي واسم أمي؟ |
| 197 | Muslim Names: Abjad Value & Burj from Name and Mother's Name | أسماء المسلمين: قيمة الأبجد والبرج من الاسم واسم الأم |
| 198 | My name is not in the list. Can I still calculate it? | اسمي ليس في القائمة. هل يمكنني حسابه؟ |
| 199 | No. It is a traditional reflection on names and temperament from ʿilm al-ḥurūf, for education and self-knowledge. Allah alone knows the unseen. | لا. إنه تأمّل تقليدي في الأسماء والطبع من علم الحروف، للتعليم ومعرفة النفس. والله وحده يعلم الغيب. |
| 200 | The Abjad (ḥisāb al-jummal) value of common Muslim names such as Muhammad, Ali, Fatima and Maryam, and how each one combines with your mother's name to give your burj. For reflection. | قيمة الأبجد (حساب الجمل) لأسماء إسلامية شائعة مثل محمد وعلي وفاطمة ومريم، وكيف يجتمع كلٌّ منها مع اسم أمك ليعطي برجك. للتأمّل. |
| 201 | Yes. The name-and-mother burj calculator accepts any name written in Arabic letters, or typed in Latin letters with an Arabic spelling picked from its suggestions. | نعم. تقبل حاسبة برج الاسم واسم الأم أي اسم مكتوب بالحروف العربية، أو مكتوب بالحروف اللاتينية مع اختيار كتابة عربية من اقتراحاتها. |
| 202 | calculate with any name → | احسب بأي اسم ← |
| 203 | Asrār is a companion for the traditional Islamic sciences of ʿIlm al-Nujūm (celestial timing) and ʿIlm al-Ḥurūf (the science of letters). Find the ruling planet of the current hour and day, follow live planetary transits, build your birth profile, choose auspicious dates with classical ikhtiyārāt, calculate Abjad values, and keep up your daily dhikr. | أسرار رفيقٌ للعلوم الإسلامية التقليدية: علم النجوم (التوقيت السماوي) وعلم الحروف. اعرف الكوكب الحاكم للساعة واليوم الحاليين، وتابع العبور الكوكبي الحيّ، وابنِ ملف ميلادك، واختر التواريخ المباركة بعلم الاختيارات الكلاسيكي، واحسب قيم الأبجد، وحافظ على ذكرك اليومي. |
| 204 | Courage, energy, action, conflict, drive, assertion, cutting through obstacles | الشجاعة، الطاقة، العمل، الصراع، الدافع، الإقدام، اختراق العقبات |
| 205 | Each planet has a zodiac sign where it is at home (domicile/rulership) and one where it is especially powerful (exaltation). | لكل كوكب برج يكون فيه في بيته (البيت/الحكم)، وبرج يكون فيه قويًا على الخصوص (الشرف). |
| 206 | Emotions, intuition, memory, nurturing, cycles, dreams, receptivity | العواطف، الحدس، الذاكرة، الرعاية، الدورات، الأحلام، التلقّي |
| 207 | Expansion, wisdom, generosity, justice, abundance, growth, spirituality | الاتساع، الحكمة، الكرم، العدل، الوفرة، النموّ، الروحانية |
| 208 | Friday is the most sacred day in Islam (Yawm al-Jum'ah). Venus and Friday align in beauty, community, and gratitude. Attend Jumu'ah, send abundant Ṣalawāt upon the Prophet ﷺ, and perform acts of beauty (charity, kind words, reconciliation). It is a day for love, forgiveness, and peace. | الجمعة أشرف أيام الأسبوع في الإسلام (يوم الجمعة). وتجتمع الزهرة ويوم الجمعة في الجمال والجماعة والشكر. احضر الجمعة، وأكثر من الصلاة على النبي ﷺ، واعمل أعمال الجمال (الصدقة، الكلمة الطيبة، الإصلاح). إنه يوم المحبّة والعفو والسلام. |
| 209 | In ʿIlm al-Nujūm, each day of the week is assigned a ruling planet that colours its energy from sunrise to sunrise. This was well-known to classical Islamic scholars. The day starts at the first planetary hour after sunrise — not midnight. | في علم النجوم يُنسب إلى كل يوم من أيام الأسبوع كوكب حاكم يصبغ طاقته من الشروق إلى الشروق. وكان هذا معروفًا عند علماء المسلمين الكلاسيكيين. ويبدأ اليوم من أول ساعة كوكبية بعد الشروق — لا من منتصف الليل. |
| 210 | Intellect, communication, trade, learning, adaptability, writing, wit | العقل، التواصل، التجارة، التعلّم، التكيّف، الكتابة، الفطنة |
| 211 | Kidneys, skin, throat | الكليتان، الجلد، الحلق |
| 212 | Muscles, blood, head | العضلات، الدم، الرأس |
| 213 | The Sun's day is best for bold, visible action. Begin projects you want recognized. Seek blessings from those in authority. Make decisions that require confidence and leadership. Avoid hiding or working in secrecy — the Sun illuminates. | يوم الشمس أنسب للعمل الجريء الظاهر. ابدأ المشاريع التي تريد أن تُعرف. اطلب البركة ممن هم في موضع المسؤولية. واتّخذ القرارات التي تحتاج إلى ثقة وقيادة. واجتنب التخفّي والعمل في السرّ — فالشمس تُنير. |
| 214 | Tuesday strengthens courage and decisive action. Tackle difficult tasks requiring force or conviction. Physical training, surgery if medically required, and overcoming fears align with Mars. Channel Mars energy into productive determination — not aggression. Start with Bismillah and firm niyyah. | الثلاثاء يقوّي الشجاعة والعمل الحاسم. تصدَّ للمهامّ الصعبة التي تتطلّب قوة أو عزيمة. والتدريب البدني، والجراحة إن احتيج إليها طبيًا، والتغلّب على المخاوف توافق المريخ. وجّه طاقة المريخ إلى عزم نافع — لا إلى عدوان. وابدأ بالبسملة ونيّة ثابتة. |
| 215 | Vitality, authority, fame, clarity, honour, generosity, willpower | الحيوية، السلطة، الشهرة، الوضوح، الشرف، الكرم، قوة الإرادة |
| 216 | Wednesday is the day of the scholar and the merchant. Ideal for studying, writing, signing contracts, teaching, and all forms of communication. Engage the mind — read, research, debate. Mercury rewards precision and clarity. This is also an excellent day for Zikr that involves recitation (tilāwah). | الأربعاء يوم العالم والتاجر. وهو مثالي للدراسة والكتابة وتوقيع العقود والتعليم وكل أشكال التواصل. أعمِل عقلك — اقرأ وابحث وناقش. يكافئ عطارد الدقّة والوضوح. وهو أيضًا يوم ممتاز للذكر الذي فيه تلاوة. |
| 217 | Yā Karīm · Yā Wahhāb · Yā Razzāq | يا كريم · يا وهاب · يا رزاق |
| 218 | Yā Laṭīf · Yā Wadūd · Yā Raḥīm | يا لطيف · يا ودود · يا رحيم |
| 219 | Yā Nūr · Yā Ḥayy · Yā Qayyūm | يا نور · يا حي · يا قيوم |
| 220 | Yā Qawiyy · Yā Qahhār · Yā ʿAzīz | يا قوي · يا قهار · يا عزيز |
| 221 | Yā Wadūd · Yā Jamīl · Ṣalawāt upon the Prophet ﷺ | يا ودود · يا جميل · الصلاة على النبي ﷺ |
| 222 | Yā ʿAlīm · Yā Ḥakīm · Yā Khabīr | يا عليم · يا حكيم · يا خبير |
| 223 | Yā Ṣabūr · Yā Matīn · Yā Ḥāfiẓ | يا صبور · يا متين · يا حفيظ |
| 224 | ⚠️ This tool provides spiritual context inspired by Islamic ʿIlm al-Nujūm. It is for reflection, not divination (kahanah) or superstition. Every day is blessed — use this as a framework to align your intentions and channel your energy mindfully. Consult qualified scholars for religious guidance. | ⚠️ تقدّم هذه الأداة سياقًا روحيًا مستلهمًا من علم النجوم الإسلامي. وهي للتأمّل لا للكهانة أو التطيّر. كل يوم مبارك — فاجعلها إطارًا لتوجيه نيّاتك وطاقتك بوعي. وارجع إلى أهل العلم المؤهّلين في المسائل الشرعية. |
| 225 | Discover the ruling planet of today, its spiritual qualities, recommended dhikr, and daily guidance inspired by Islamic ʿIlm al-Nujūm. | اكتشف الكوكب الحاكم لليوم وصفاته الروحية والذكر الموصى به والإرشاد اليومي المستلهم من علم النجوم الإسلامي. |
| 226 | A retrograde symbol (℞) means the planet is in a reflective phase — better for review than for new beginnings in that planet's domain. | رمز الرجوع (℞) يعني أن الكوكب في طور تأمّلي — أنسب للمراجعة منه للبدايات الجديدة في مجاله. |
| 227 | Based on the seasons and the Earth's relationship with the Sun. Aries begins at the Spring Equinox. This is the system used in Western astrology and most Islamic classical texts on ʿIlm al-Nujūm. | مبنيّ على الفصول وعلاقة الأرض بالشمس. يبدأ الحمل عند الاعتدال الربيعي. وهو النظام المستعمل في التنجيم الغربي وأكثر النصوص الإسلامية الكلاسيكية في علم النجوم. |
| 228 | Decan (Face) | الوجه (العُشر) |
| 229 | Domicile (Rulership) | البيت (الحكم) |
| 230 | Each sign has three 10° sections (decans), each ruled by a planet. Being in one's own decan gives minimal dignity — enough to act, but not with great strength. | لكل برج ثلاثة أقسام كل منها 10° (الوجوه)، يحكم كلًّا منها كوكب. وكون الكوكب في وجهه يعطيه أدنى الكرامة — ما يكفي ليعمل، لكن دون قوة كبيرة. |
| 231 | Each sign is divided into 5 sections (terms), each ruled by a planet. A planet in its own term has minor dignity — like being in a familiar neighbourhood. | يُقسَم كل برج إلى خمسة أقسام (الحدود)، يحكم كلًّا منها كوكب. والكوكب في حدّه له كرامة صغرى — كمن يكون في حيّ مألوف. |
| 232 | Effect | الأثر |
| 233 | Exaltation | الشرف |
| 234 | Fixed to the actual star constellations. Accounts for the ~24° "precession of the equinoxes" offset accumulated over 2,000 years. Used in Vedic/Jyotish astrology. Enabled in settings for comparison. | مثبّت على الكوكبات النجمية الفعلية. ويحسب إزاحة «مبادرة الاعتدالين» البالغة نحو 24° المتراكمة عبر ألفي سنة. ويُستعمل في التنجيم الفيدي (الجيوتش). ويمكن تفعيله في الإعدادات للمقارنة. |
| 235 | Islamic scholars of ʿIlm al-Nujūm noted retrograde (rujūʿ, رجوع) as a period where planetary influence is "weakened" or "reversed." It is a time for reflection (murājaʿah), not for beginning critical new matters. | لاحظ علماء النجوم المسلمون الرجوع على أنه مدّة «يضعف» فيها أثر الكوكب أو «ينعكس». وهو وقت للمراجعة لا لابتداء الأمور الجديدة المهمّة. |
| 236 | Live Planetary Positions | مواضع الكواكب الحيّة |
| 237 | Note Retrograde Status | لاحظ حال الرجوع |
| 238 | Pick Your Planet | اختر كوكبك |
| 239 | Read Its Zodiac Position | اقرأ موضعه في البروج |
| 240 | Real-Time Celestial Positions | المواضع السماوية الآنية |
| 241 | Retrograde (℞) Explained | شرح الرجوع (℞) |
| 242 | Retrograde Periods | مدد الرجوع |
| 243 | Sidereal Zodiac (Lahiri) | البروج النجمية (لاهيري) |
| 244 | Tap any planet in the grid to see its current zodiac sign, degree, and status. | اضغط على أي كوكب في الشبكة لترى برجه الحالي ودرجته وحاله. |
| 245 | Term (Bounds) | الحدّ |
| 246 | The planet is in a sign where it performs exceptionally well — like a guest of honour in a welcoming household. Its best qualities are elevated and dignified. | الكوكب في برج يؤدّي فيه أداءً استثنائيًا — كضيف مكرَّم في بيت مرحِّب. تُرفع أحسن صفاته وتُشرَّف. |
| 247 | The planet is in the sign it rules. Like being at home — most comfortable, powerful, and able to act freely. Its qualities express naturally and strongly. | الكوكب في البرج الذي يحكمه. كأنه في بيته — أكثر راحة وقوة وحرية في العمل. تظهر صفاته طبيعية قوية. |
| 248 | The planet is in the sign opposite its domicile. Uncomfortable, weakened, unable to work with full energy. Its natural qualities are challenged or distorted. | الكوكب في البرج المقابل لبيته (الوبال). غير مرتاح، ضعيف، لا يعمل بكامل طاقته. وصفاته الطبيعية مُبتلاة أو مشوّهة. |
| 249 | The planet is in the sign opposite its exaltation. Significantly weakened. Like a king in exile — present but unable to fulfill their role. Caution advised for matters ruled by this planet. | الكوكب في البرج المقابل لشرفه (الهبوط). ضعيف ضعفًا ظاهرًا، كملك في المنفى — حاضر لكنه عاجز عن أداء دوره. يُنصح بالحذر في الأمور التي يحكمها هذا الكوكب. |
| 250 | The planet rules a set of three signs sharing the same element (fire, earth, air, water). Moderate strength, especially during day or night chart conditions. | يحكم الكوكب ثلاثة بروج تشترك في عنصر واحد (النار، التراب، الهواء، الماء) — المثلّثة. قوة متوسطة، لا سيما بحسب كون الوقت نهارًا أو ليلًا. |
| 251 | The sign tells you the "flavour" of how the planet expresses itself and where in life its energy is focused. | يخبرك البرج «بنكهة» تعبير الكوكب عن نفسه، وبموضع تركّز طاقته في الحياة. |
| 252 | Traditional astrology grades each planet's strength by its relationship to the sign it occupies. Think of it as a measure of how comfortable and effective the planet is in expressing its nature. | يقدّر التنجيم التقليدي قوة كل كوكب بعلاقته بالبرج الذي يحلّ فيه. فكّر فيها مقياسًا لراحة الكوكب وفاعليته في التعبير عن طبيعته. |
| 253 | Use Mercury retrograde for reviewing contracts and studying. Use Venus retrograde for reflecting on relationships. Use Mars retrograde to strategize before acting. | استعمل رجوع عطارد لمراجعة العقود والدراسة، ورجوع الزهرة للتأمّل في العلاقات، ورجوع المريخ للتخطيط قبل العمل. |
| 254 | When Saturn or Mars are in Fall or Detriment | حين يكون زحل أو المريخ في الهبوط أو الوبال |
| 255 | When a planet appears to move backwards through the zodiac from Earth's perspective. This is an optical illusion caused by differing orbital speeds, but in traditional astrology the effect is real and significant. | حين يبدو الكوكب سائرًا إلى الوراء عبر البروج من منظور الأرض. وهذا وهمٌ بصري سببه اختلاف سرعات المدارات، لكن أثره في التنجيم التقليدي حقيقي وملحوظ. |
| 256 | ⚖️ Essential Dignities — The Strength System | ⚖️ الكرامات الذاتية — نظام القوة |
| 257 | ⚠️ Planetary transit data is calculated using ephemeris mathematics and is provided for spiritual reflection within the tradition of Islamic ʿIlm al-Nujūm. This is not astrology for prediction (tanjīm) or belief in planets as independent agents. Allah alone is Al-Ḥakīm, Al-ʿAlīm — the All-Wise, All-Knowing. | ⚠️ تُحسب بيانات العبور الكوكبي بالرياضيات الفلكية، وتُقدَّم للتأمّل الروحي ضمن تراث علم النجوم الإسلامي. وليست تنجيمًا للتنبّؤ ولا اعتقادًا بأن الكواكب فواعل مستقلة. فالله وحده الحكيم العليم. |
| 258 | 🤲 Practical Islamic Use | 🤲 الاستعمال الإسلامي العملي |
| 259 | Live positions of all 7 classical planets, essential dignities, retrograde status, and spiritual guidance inspired by Islamic ʿIlm al-Nujūm. | المواضع الحيّة للكواكب السبعة الكلاسيكية، والكرامات الذاتية، وحال الرجوع، والإرشاد الروحي المستلهم من علم النجوم الإسلامي. |
| 260 | Begin with Bismillah and the relevant dhikr for that planet. Your intention (niyyah) is what matters most. | ابدأ بالبسملة والذكر المناسب لذلك الكوكب. ونيّتك هي الأهمّ. |
| 261 | Check the current planetary hour above — note the ruling planet, element, and remaining time. | انظر الساعة الكوكبية الحالية أعلاه — لاحظ الكوكب الحاكم والعنصر والوقت المتبقّي. |
| 262 | Confrontational meetings | الاجتماعات التصادمية |
| 263 | Courage & action | الشجاعة والعمل |
| 264 | Cutting ties | قطع العلاقات |
| 265 | Dreams & intuition | الأحلام والحدس |
| 266 | Endurance practices | ممارسات التحمّل |
| 267 | Expansion & growth | الاتساع والنموّ |
| 268 | Extreme physical exertion | الإجهاد البدني الشديد |
| 269 | Harmony & peace | الانسجام والسلام |
| 270 | Heavy manual labor | العمل اليدوي الشاقّ |
| 271 | Hidden dealings | المعاملات الخفيّة |
| 272 | In ʿIlm al-Nujūm (Islamic celestial science), each day and night is divided into 12 unequal hours ruled by the seven classical planets in the Chaldean order: Saturn → Jupiter → Mars → Sun → Venus → Mercury → Moon. The length of each hour changes daily with sunrise and sunset. | في علم النجوم (العلم السماوي الإسلامي) يُقسَم كل نهار وليل إلى 12 ساعة غير متساوية تحكمها الكواكب السبعة الكلاسيكية بالترتيب الكلداني: زحل ← المشتري ← المريخ ← الشمس ← الزهرة ← عطارد ← القمر. ويتغيّر طول كل ساعة يوميًا بتغيّر الشروق والغروب. |
| 273 | Land & property | الأراضي والعقارات |
| 274 | Long journeys | الأسفار الطويلة |
| 275 | Match your intended action to the planet's strengths (see guide below). Schedule important activities during supportive hours. | وافِق بين العمل الذي تنويه ومواطن قوة الكوكب (انظر الدليل أدناه)، ورتّب الأنشطة المهمّة في الساعات الداعمة. |
| 276 | Mental work | العمل الذهني |
| 277 | Seeking authority | طلب السلطة |
| 278 | Spiritual elevation | الارتقاء الروحي |
| 279 | Submissive requests | الطلبات بخضوع |
| 280 | Surgery (if needed) | الجراحة (عند الحاجة) |
| 281 | The 7 planets cycle in this fixed sequence, each hour ruled by the next planet: | تدور الكواكب السبعة في هذا التسلسل الثابت، وكل ساعة يحكمها الكوكب التالي: |
| 282 | Use "See All Hours" to plan ahead. The first hour of the day is ruled by that day's planet. | استعمل «عرض كل الساعات» للتخطيط مسبقًا. وأول ساعة في اليوم يحكمها كوكب ذلك اليوم. |
| 283 | Visibility & reputation | الظهور والسمعة |
| 284 | What are Planetary Hours? | ما الساعات الكوكبية؟ |
| 285 | Writing & communication | الكتابة والتواصل |
| 286 | Yā Karīm (يا كريم) · Yā Wahhāb (يا وهاب) | يا كريم · يا وهاب |
| 287 | Yā Laṭīf (يا لطيف) · Yā Wudd (يا ودود) | يا لطيف · يا ودود |
| 288 | Yā Qawiyy (يا قوي) · Yā Qahhār (يا قهار) | يا قوي · يا قهار |
| 289 | ⚠️ For reflection & spiritual timing — not prediction. Only Allah knows the unseen. | ⚠️ للتأمّل والتوقيت الروحي — لا للتنبّؤ. ولا يعلم الغيب إلا الله. |
| 290 | ⚠️ Planetary hours are a traditional tool for reflection and spiritual timing used by Islamic scholars (ʿulamā'). They are not a form of divination (kahanah). Use them to align your efforts with natural rhythms, always relying on tawakkul (trust in Allah). Consult qualified scholars for religious rulings. | ⚠️ الساعات الكوكبية أداة تقليدية للتأمّل والتوقيت الروحي استعملها علماء المسلمين، وليست ضربًا من الكهانة. استعملها لمواءمة جهودك مع الإيقاعات الطبيعية، مع التوكّل على الله دائمًا. وارجع إلى أهل العلم المؤهّلين في الأحكام الشرعية. |
| 291 | 📐 The Chaldean Order | 📐 الترتيب الكلداني |
| 292 | 🪐 Planetary Hour Guide | 🪐 دليل الساعات الكوكبية |
| 293 | Planetary Hours Guide | دليل الساعات الكوكبية |
| 294 | Planetary Hours Today — Chaldean Hours in Islamic ʿIlm al-Nujūm | الساعات الكوكبية اليوم — الساعات الكلدانية في علم النجوم الإسلامي |
| 295 | Real-time Chaldean planetary hours based on your location. Discover the ruling planet of the current hour, its spiritual significance, and the best activities to align with natural rhythms in ʿIlm al-Nujūm. | ساعات كوكبية كلدانية آنية بحسب موقعك. اكتشف الكوكب الحاكم للساعة الحالية ودلالته الروحية وأفضل الأنشطة الموافقة للإيقاعات الطبيعية في علم النجوم. |
| 296 | Loading profile... | جارٍ تحميل الملف... |
| 297 | Update your profile information | حدّث معلومات ملفك |
| 298 | Tap a challenge ↓ | اضغط على تحدٍّ ↓ |
| 299 | 📿 Join me in my zikr challenges on Asrār! | 📿 شاركني تحدّيات الذكر في أسرار! |
| 300 | Track your daily dhikr all year with Istighfār, Ṣalawāt, Divine Names and the 201 Prophetic Names practice, plus dedicated Ramadan challenges. | تابع ذكرك اليومي طوال العام بالاستغفار والصلاة على النبي والأسماء الحسنى وورد الأسماء النبوية المئتين والواحد، إضافة إلى تحدّيات رمضان الخاصة. |
| 301 | Choose an auspicious date for marriage, travel or business. | اختر تاريخًا مباركًا للزواج أو السفر أو التجارة. |
| 302 | In West African (Senegalese / Wolof) teaching — sarax — each weekday is also linked to particular forms of sadaqah: water on Monday, help with someone's medicine on Tuesday, paper and pens on Wednesday, feeding the needy and supporting the mosque on Thursday, clothes, soap and perfume on Friday. Below is today's suggestion and the full weekly table, from the same guidance used by the Asrār calculator. | في التعليم غرب الأفريقي (السنغالي / الولوفي) — «السرخ» — يرتبط كل يوم من أيام الأسبوع أيضًا بأنواع معيّنة من الصدقة: الماء يوم الاثنين، والإعانة على دواء أحدهم يوم الثلاثاء، والورق والأقلام يوم الأربعاء، وإطعام المحتاجين ودعم المسجد يوم الخميس، والثياب والصابون والطيب يوم الجمعة. وفيما يلي اقتراح اليوم والجدول الأسبوعي كاملًا، من الإرشاد نفسه الذي تستعمله حاسبة أسرار. |
| 303 | Is this an obligation or a guarantee of results? | هل هذا واجب أو ضمان لنتائج؟ |
| 304 | It is the form of sadaqah (voluntary charity) traditionally linked to each day of the week in a West African (Senegalese / Wolof) teaching. This page shows today's suggestion and the table for all seven days. | هي نوع الصدقة (التطوّع) المرتبط تقليديًا بكل يوم من أيام الأسبوع في تعليم غرب أفريقي (سنغالي / ولوفي). وتعرض هذه الصفحة اقتراح اليوم وجدول الأيام السبعة. |
| 305 | No. These are customary suggestions for reflection. Sadaqah is given sincerely for the sake of Allah, on any day, and promises no particular outcome: Allah alone knows the unseen. | لا. هذه اقتراحات عُرفية للتأمّل. والصدقة تُعطى خالصة لوجه الله في أي يوم، ولا تَعِد بنتيجة معيّنة: والله وحده يعلم الغيب. |
| 306 | Sadaqa | الصدقة |
| 307 | Sadaqa of the Day — Recommended Sadaqah for Each Day of the Week | صدقة اليوم — الصدقة الموصى بها لكل يوم من أيام الأسبوع |
| 308 | Sadaqa of the Day: Recommended Sadaqah for Each Weekday | صدقة اليوم: الصدقة الموصى بها لكل يوم |
| 309 | Sadaqah by weekday, by Hijri birth month and by burj. | الصدقة بحسب يوم الأسبوع وشهر الميلاد الهجري والبرج. |
| 310 | Sadaqah is good on every day, and many Muslims make a habit of giving on Friday (Jumuʿa). In this tradition Tuesday is linked with healing and protection, and Thursday with opening the way and removing blockages. Never delay giving because it is not the "right" day. | الصدقة خير في كل يوم، ويعتاد كثير من المسلمين التصدّق يوم الجمعة. وفي هذا التراث يرتبط الثلاثاء بالشفاء والحفظ، والخميس بفتح الطريق وإزالة العوائق. ولا تؤخّر العطاء أبدًا لأنه ليس اليوم «المناسب». |
| 311 | Sadaqah, voluntary charity, is good on every day, and many Muslims make a habit of giving on Friday (Jumuʿa). Giving a little, consistently, is better than waiting for the "perfect" day. | الصدقة — وهي التطوّع — خير في كل يوم، ويعتاد كثير من المسلمين التصدّق يوم الجمعة. والقليل الدائم خير من انتظار اليوم «المثالي». |
| 312 | The day you plan to give, or your date of birth. | اليوم الذي تنوي العطاء فيه، أو تاريخ ميلادك. |
| 313 | Today's recommended sadaqah and the full weekly table: water on Monday, healing on Tuesday, opening the way on Thursday, clothes and perfume on Friday. West African tradition, for reflection. | الصدقة الموصى بها اليوم والجدول الأسبوعي كاملًا: الماء يوم الاثنين، والشفاء يوم الثلاثاء، وفتح الطريق يوم الخميس، والثياب والطيب يوم الجمعة. تراث غرب أفريقي، للتأمّل. |
| 314 | Track your dhikr: Istighfār, Ṣalawāt and Divine Names. | تابع ذكرك: الاستغفار والصلاة على النبي والأسماء الحسنى. |
| 315 | What is the "sadaqa of the day"? | ما «صدقة اليوم»؟ |
| 316 | What is the best day to give sadaqah? | ما أفضل يوم للصدقة؟ |
| 317 | What sadaqah should I give on Friday? | ما الصدقة التي أعطيها يوم الجمعة؟ |
| 318 | What sadaqah should I give on Monday? | ما الصدقة التي أعطيها يوم الاثنين؟ |
| 319 | Yes. The guidance can be read either for the day you plan to give or for the weekday of your birth. Enter a date in the checker above to see which weekday it falls on. | نعم. يمكن قراءة الإرشاد لليوم الذي تنوي العطاء فيه أو ليوم ميلادك من الأسبوع. أدخل تاريخًا في الأداة أعلاه لترى يوم الأسبوع الذي يوافقه. |
| 320 | Your burj, blessed day, dhikr and the sadaqah for your burj. | برجك ويومك المبارك وذكرك وصدقة برجك. |
| 321 | Each of the twelve burūj has its own traditional sadaqah, according to the teachings of Seringe Mahdiou Niane (with companion videos in Wolof inside the app). Not sure of your burj? Find it from your name and your mother's name. | لكل برج من البروج الاثني عشر صدقته التقليدية، بحسب تعاليم الشيخ سرين مهديو نيان (مع مقاطع مصاحبة بالولوفية داخل التطبيق). لست متأكدًا من برجك؟ اعرفه من اسمك واسم أمك. |
| 322 | Each weekday has its own suggested sadaqah. See today's guidance and the full table on the Sadaqa of the Day page. | لكل يوم من أيام الأسبوع صدقته المقترحة. انظر إرشاد اليوم والجدول كاملًا في صفحة صدقة اليوم. |
| 323 | Enter your Gregorian date of birth in the checker on this page. It converts the date to the Islamic (Hijri) calendar and shows the sadaqah suggested for that month. | أدخل تاريخ ميلادك الميلادي في الأداة في هذه الصفحة. فتحوّله إلى التقويم الهجري وتعرض الصدقة المقترحة لذلك الشهر. |
| 324 | In this tradition your burj comes from the Abjad values of your name and your mother's name: add them, divide by 12 and the remainder gives the burj. The name & mother's name burj page does the calculation for you. | في هذا التراث يأتي برجك من قيمتي اسمك واسم أمك في الأبجد: اجمعهما واقسم على 12، فيعطي الباقي البرج. وصفحة برج الاسم واسم الأم تجري الحساب عنك. |
| 325 | No. Sadaqah is given for the sake of Allah. The intentions mentioned (blessing, protection, ease, provision) are hopes placed with Allah, not promised outcomes. | لا. الصدقة تُعطى لوجه الله. والنيّات المذكورة (البركة، الحفظ، التيسير، الرزق) رجاءٌ يُعلَّق بالله، لا نتائج موعودة. |
| 326 | Sadaqa Guide: by Weekday, Hijri Birth Month & Burj | دليل الصدقة: بحسب يوم الأسبوع وشهر الميلاد الهجري والبرج |
| 327 | Sadaqah, voluntary charity, can be given at any time and in any amount. Many Muslims make a habit of giving on Friday (Jumuʿa), and in West African (Senegalese / Wolof) practice — sarax — particular forms of sadaqah are also suggested for each weekday, for the Hijri month you were born in, and for your burj. | الصدقة — وهي التطوّع — تُعطى في أي وقت وبأي مقدار. ويعتاد كثير من المسلمين التصدّق يوم الجمعة، وفي الممارسة غرب الأفريقية (السنغالية / الولوفية) — «السرخ» — تُقترح أيضًا أنواع معيّنة من الصدقة لكل يوم من الأسبوع، وللشهر الهجري الذي وُلدت فيه، ولبرجك. |
| 328 | Sarax is the Wolof word for sadaqah (voluntary charity). In Senegalese and wider West African practice it is often given in specific forms — water, food, clothes, a ram, kola nuts — depending on the day, the person's birth month or their burj. | «السرخ» كلمة ولوفية تعني الصدقة (التطوّع). وفي الممارسة السنغالية وغرب الأفريقية عمومًا تُعطى غالبًا في صور معيّنة — الماء، الطعام، الثياب، كبش، جوز الكولا — بحسب اليوم أو شهر ميلاد الشخص أو برجه. |
| 329 | This guide gathers the three in one place, using the same data as the Asrār calculators. Use whichever applies to you, and remember that the best sadaqah is the one given sincerely and regularly. | يجمع هذا الدليل الثلاثة في مكان واحد، بالبيانات نفسها التي تستعملها حاسبات أسرار. استعمل ما ينطبق عليك، وتذكّر أن أفضل الصدقة ما أُعطي بإخلاص ودوام. |
| 330 | Android users can install Asrariya today on Google Play. | يمكن لمستخدمي أندرويد تثبيت أسرارية اليوم من Google Play. |
| 331 | Don't have the app yet? Download it free. | ليس لديك التطبيق بعد؟ نزّله مجانًا. |
| 332 | If the app does not open automatically, install Asrariya below. | إن لم يُفتح التطبيق تلقائيًا، فثبّت أسرارية أدناه. |
| 333 | Open in Asrariya | افتح في أسرارية |
| 334 | Open this ayah in Asrariya on Android. | افتح هذه الآية في أسرارية على أندرويد. |
| 335 | QR code to install Asrariya from Google Play | رمز QR لتثبيت أسرارية من Google Play |
| 336 | Scan the QR code or open Google Play. | امسح رمز QR أو افتح Google Play. |
| 337 | Asrariya Quran Share | مشاركة القرآن في أسرارية |
| 338 | Ayah Not Found | الآية غير موجودة |
| 339 | Arabian Nights tales | حكايات ألف ليلة وليلة |
| 340 | Arabic alphabet letters | حروف الأبجدية العربية |
| 341 | Days of spiritual significance | أيام ذات دلالة روحية |
| 342 | Element Guidance | إرشاد العنصر |
| 343 | I flow with grace and adapt with compassion | أجري بلطف وأتكيّف برحمة |
| 344 | I remain grounded, patient, and steadfast in my path | أبقى ثابتًا صبورًا راسخًا في طريقي |
| 345 | Messages and guidance | الرسائل والإرشاد |
| 346 | Real-time insights based on traditional Islamic celestial science and Chaldean planetary hours. | لمحات آنية مبنية على العلم السماوي الإسلامي التقليدي والساعات الكوكبية الكلدانية. |
| 347 | Deep AI Analysis | تحليل معمّق بالذكاء الاصطناعي |
| 348 | 💡 AI will deeply analyze your results and provide personalized insights and detailed spiritual guidance | 💡 سيحلّل الذكاء الاصطناعي نتائجك بعمق ويقدّم لمحات شخصية وإرشادًا روحيًا مفصّلًا |
| 349 | Current Mode: | الوضع الحالي: |
| 350 | Eastern | شرقي |
| 351 | Maghribi System: | النظام المغربي: |
| 352 | Mashriqi System: | النظام المشرقي: |
| 353 | Western | غربي |
| 354 | Using approximate timing | باستعمال توقيت تقريبي |
| 355 | Using precise planetary hours (location-based) | باستعمال ساعات كوكبية دقيقة (بحسب الموقع) |
| 356 | ACTIVE - REST & REFLECT | نشط - استرح وتأمّل |
| 357 | Brainstorm Ideas | تبادل الأفكار |
| 358 | Build and organize | ابنِ ونظّم |
| 359 | Build or Organize | ابنِ أو نظّم |
| 360 | Calculating alignment... Please wait. | جارٍ حساب التوافق... يُرجى الانتظار. |
| 361 | Communicate and network | تواصل وابنِ العلاقات |
| 362 | Complete Tasks | أنجز المهامّ |
| 363 | Complete projects | أتمّ المشاريع |
| 364 | Continue Ongoing Work | تابع العمل الجاري |
| 365 | Could not calculate planetary hours. Please check the browser console for details. | تعذّر حساب الساعات الكوكبية. يُرجى مراجعة وحدة تحكّم المتصفح للتفاصيل. |
| 366 | Could not determine your location. Please check your browser's location permissions. | تعذّر تحديد موقعك. يُرجى التحقق من أذونات الموقع في متصفحك. |
| 367 | Could not determine your location. Using Mecca as fallback. | تعذّر تحديد موقعك. سنستعمل مكة المكرمة بديلًا. |
| 368 | Deep Reflection | تأمّل عميق |
| 369 | ELEMENT IS ACTIVE NOW! | العنصر نشط الآن! |
| 370 | ENERGY - EXCELLENT TIME | طاقة - وقت ممتاز |
| 371 | Emotional processing | معالجة المشاعر |
| 372 | Enable | تفعيل |
| 373 | Failed to calculate planetary hours for your location | تعذّر حساب الساعات الكوكبية لموقعك |
| 374 | Failed to load guidance | تعذّر تحميل الإرشاد |
| 375 | Handle Routine Tasks | أنجز المهامّ الروتينية |
| 376 | Have courage-requiring conversations | أجرِ المحادثات التي تتطلّب شجاعة |
| 377 | Healing conversations | محادثات شافية |
| 378 | Hour Element: | عنصر الساعة: |
| 379 | Launch new projects | أطلق مشاريع جديدة |
| 380 | Lead and inspire others | قُد الآخرين وألهمهم |
| 381 | Loading planetary hours... | جارٍ تحميل الساعات الكوكبية... |
| 382 | Make Difficult Call | أجرِ الاتصال الصعب |
| 383 | Make commitments | قطع الالتزامات |
| 384 | Make important decisions | اتّخذ القرارات المهمّة |
| 385 | Mecca (Fallback) | مكة المكرمة (بديل) |
| 386 | Plan & Prepare | خطّط واستعدّ |
| 387 | Reload Page | أعد تحميل الصفحة |
| 388 | Rest & Reflect | استرح وتأمّل |
| 389 | Start Important Task | ابدأ مهمّة مهمّة |
| 390 | Take Bold Action | اتّخذ خطوة جريئة |
| 391 | Taking bold action | اتّخاذ خطوة جريئة |
| 392 | Teach and share knowledge | علّم وشارك المعرفة |
| 393 | Unable to Load Guidance | تعذّر تحميل الإرشاد |
| 394 | Unable to find current planetary hour. Check console for time range info. | تعذّر إيجاد الساعة الكوكبية الحالية. راجع وحدة التحكّم لمعلومات المدى الزمني. |
| 395 | Write and articulate | اكتب وعبّر |
| 408 | Write or Communicate | اكتب أو تواصل |
| 409 | ⏰ Current Hour Not Found | ⏰ لم يُعثر على الساعة الحالية |
| 410 | ☀️ Day Hour | ☀️ ساعة نهارية |
| 411 | 🌙 Night Hour | 🌙 ساعة ليلية |
| 412 | 📊 MODERATE ENERGY - DECENT TIME FOR ROUTINE WORK | 📊 طاقة معتدلة - وقت لا بأس به للعمل الروتيني |
| 413 | Browse all 99 Names | تصفّح الأسماء الحسنى كلها |
| 414 | General reference — not a recommendation specific to this intention | مرجع عام — ليس توصية خاصة بهذه النيّة |
| 415 | No names found | لم يُعثر على أسماء |
| 416 | Damma | ضمّة |
| 417 | Fatha | فتحة |
| 418 | Kasra | كسرة |
| 419 | Shadda | شدّة |
| 420 | Sukun | سكون |
| 421 | Tanwin D | تنوين ضمّ |
| 422 | Tanwin F | تنوين فتح |
| 423 | Tanwin K | تنوين كسر |
| 424 | اضغط على الحروف للكتابة • Tap letters to type | اضغط على الحروف للكتابة |
| 425 | ○ التشكيل (Tashkeel) | ○ التشكيل |
| 426 | ✓ التشكيل (Tashkeel) | ✓ التشكيل |
| 427 | Attraction (Venus–Mars) | الانجذاب (الزهرة–المريخ) |
| 428 | Breakdown | التفصيل |
| 429 | Moon Sign | برج القمر |
| 430 | One birth date falls close to a Moon sign change — without an exact birth time, the Moon sign shown may not be exact. | يقع أحد تاريخَي الميلاد قريبًا من انتقال القمر بين برجين — ودون وقت ميلاد دقيق قد لا يكون برج القمر المعروض دقيقًا. |
| 431 | Sun Sign | برج الشمس |
| 432 | Your Match Strength | قوة توافقكما |
| 433 | Enter Two Birth Dates | أدخل تاريخَي ميلاد |
| 434 | General astrological compatibility from Sun sign, Moon sign, and Venus-Mars — no birth time needed | توافق فلكي عام من برج الشمس وبرج القمر والزهرة–المريخ — دون حاجة إلى وقت الميلاد |
| 435 | e.g., Fatima | مثلًا: فاطمة |
| 436 | Account created! Setting up your profile... | أُنشئ الحساب! جارٍ إعداد ملفك... |
| 437 | An unexpected error occurred. Please try again. | حدث خطأ غير متوقّع. يُرجى المحاولة مرة أخرى. |
| 438 | Authentication Not Configured | تسجيل الدخول غير مُعدّ |
| 439 | Authentication is optional. You can use this app without an account. | تسجيل الدخول اختياري. يمكنك استعمال هذا التطبيق دون حساب. |
| 440 | Failed to create account | تعذّر إنشاء الحساب |
| 441 | Failed to send password reset email | تعذّر إرسال بريد إعادة تعيين كلمة المرور |
| 442 | Must be at least 6 characters | 6 أحرف على الأقل |
| 443 | Password reset email sent! Check your inbox. | أُرسل بريد إعادة تعيين كلمة المرور! تفقّد صندوق الوارد. |
| 444 | Send Reset Link | أرسل رابط إعادة التعيين |
| 445 | Show password | إظهار كلمة المرور |
| 446 | Supabase authentication is not configured for this application. | تسجيل الدخول عبر Supabase غير مُعدّ لهذا التطبيق. |
| 447 | To enable authentication, please set up Supabase and add your credentials to the environment variables. | لتفعيل تسجيل الدخول، أعِدّ Supabase وأضف بياناتك إلى متغيّرات البيئة. |
| 448 | 10 jumping jacks, then 5min sunlight exposure | 10 قفزات، ثم 5 دقائق تحت الشمس |
| 449 | 15min brisk walk outdoors + deep breathing | 15 دقيقة مشيًا سريعًا في الهواء الطلق مع تنفّس عميق |
| 450 | 15min grounding (barefoot walking, gardening, cooking) | 15 دقيقة من التجذّر (المشي حافيًا، البستنة، الطبخ) |
| 451 | 15min meditation by water + cold compress on forehead | 15 دقيقة تأمّل قرب الماء مع كمّادة باردة على الجبهة |
| 452 | 15min vigorous exercise (run, dance, pushups) + 5min sun exposure | 15 دقيقة تمرين نشيط (جري، رقص، ضغط) مع 5 دقائق تحت الشمس |
| 453 | 2min slow breathing, eyes closed | دقيقتان من التنفّس البطيء مغمض العينين |
| 454 | 5min deep breathing + sip cold water slowly | 5 دقائق تنفّس عميق مع ارتشاف ماء بارد ببطء |
| 455 | 5min standing barefoot + eat something solid | 5 دقائق وقوفًا حافيًا مع أكل شيء صلب |
| 456 | Classical teaching: Conflict isn't bad - it's growth opportunity. True harmony comes from consciously balancing opposing forces. | تعليم كلاسيكي: الصراع ليس شرًّا — إنه فرصة للنموّ. والانسجام الحقّ يأتي من الموازنة الواعية بين القوى المتقابلة. |
| 457 | Moderate conflict - Focused action brings relief | صراع معتدل - العمل المركّز يجلب الراحة |
| 458 | Recheck: Tonight before bed (balance shifts with activities) | أعد الفحص: الليلة قبل النوم (يتغيّر التوازن مع الأنشطة) |
| 459 | Sit still, feel your weight for 2min | اجلس ساكنًا واشعر بثقلك دقيقتين |
| 460 | Stand and stretch toward sun for 2min | قف وتمدّد نحو الشمس دقيقتين |
| 461 | You might feel: anxious, unfocused, talking more than doing, mentally scattered | قد تشعر: بالقلق، وتشتّت التركيز، وكثرة الكلام وقلّة الفعل، وتبعثر الذهن |
| 462 | You might feel: restless, impatient, quick to anger, scattered energy | قد تشعر: بعدم الاستقرار، ونفاد الصبر، وسرعة الغضب، وتبعثر الطاقة |
| 463 | calm, patience, reflection | السكينة، الصبر، التأمّل |
| 464 | clarity, communication, flexibility | الوضوح، التواصل، المرونة |
| 465 | element doubled today. Energy is intense - | العنصر مضاعف اليوم. الطاقة شديدة - |
| 466 | energy, action, courage | الطاقة، العمل، الشجاعة |
| 467 | stability, grounding, patience | الثبات، التجذّر، الصبر |
| 468 | ✨ You're balanced - maintain your current activities throughout the day | ✨ أنت متوازن - حافظ على أنشطتك الحالية طوال اليوم |
| 469 | Abjad Total (Ḥadath): | مجموع الأبجد (الحدث): |
| 470 | Close calculation details | أغلق تفاصيل الحساب |
| 471 | Layer 1: Daily Life | الطبقة 1: الحياة اليومية |
| 472 | Layer 2: Emotional Foundation | الطبقة 2: الأساس العاطفي |
| 473 | Layer 3: Cross Dynamic | الطبقة 3: التفاعل المتقاطع |
| 474 | Layer 4: Cross Dynamic | الطبقة 4: التفاعل المتقاطع |
| 475 | Layer Compatibility Calculations | حسابات توافق الطبقات |
| 476 | Mothers' Calculations (Cosmic Temperament) | حسابات الأمّهات (الطبع الكوني) |
| 477 | Total Abjad (Ḥadath): | مجموع الأبجد (الحدث): |
| 478 | Total Score | المجموع الكلي |
| 479 | Weight: 40% (MOST IMPORTANT) | الوزن: 40% (الأهمّ) |
| 480 | Weighted Overall Score | النتيجة الكلية المرجّحة |
| 481 | ✨ Accent Colors | ✨ ألوان مكمّلة |
| 482 | 🎨 Wear These Colors | 🎨 البس هذه الألوان |
| 483 | 💡 Practical Tip | 💡 نصيحة عملية |
| 484 | A Connection Meant to Teach | صلة غايتها التعليم |
| 485 | A relationship where both people actively work on growth, communication, and understanding rather than expecting it to 'just work naturally.' Even highly compatible couples benefit from being conscious partners. | علاقة يعمل فيها الطرفان بفاعلية على النموّ والتواصل والتفاهم، بدل انتظار أن «تنجح من تلقاء نفسها». وحتى الأزواج الأكثر توافقًا ينتفعون بالشراكة الواعية. |
| 486 | Air Element | عنصر الهواء |
| 487 | Challenging but Not Impossible (Below 50%) | صعب لكنه ليس مستحيلًا (أقل من 50%) |
| 488 | Choice Matters More Than Stars | الاختيار أهمّ من النجوم |
| 489 | Compatibility Score | درجة التوافق |
| 490 | Compatibility Terms Made Simple | مصطلحات التوافق بلغة بسيطة |
| 491 | Complementary Elements | عناصر متكاملة |
| 492 | Cosmic | كوني |
| 493 | Earth Element | عنصر التراب |
| 494 | Earth people are practical, reliable, and patient. They build lasting foundations and value security but can resist change or seem boring. Think: 'Let's make a solid plan.' Earth needs to embrace spontaneity occasionally. | أهل التراب عمليّون موثوقون صبورون. يبنون أسسًا دائمة ويقدّرون الأمان، لكنهم قد يقاومون التغيير أو يبدون رتيبين. شعارهم: «لنضع خطة متينة». ويحتاج التراب إلى قبول العفوية أحيانًا. |
| 495 | Fire people are energetic, spontaneous, and inspiring. They bring excitement and leadership but can be impulsive or dominating. Think: 'Let's do it NOW!' Fire needs to learn patience and listen to others. | أهل النار نشيطون عفويّون ملهِمون. يجلبون الحماسة والقيادة، لكنهم قد يندفعون أو يتسلّطون. شعارهم: «لنفعلها الآن!». وتحتاج النار إلى تعلّم الصبر والإصغاء للآخرين. |
| 496 | Free Will vs Destiny | الإرادة الحرّة والقدر |
| 497 | High Compatibility | توافق عالٍ |
| 498 | How Your Celestial Energies Match | كيف تتوافق طاقاتكما السماوية |
| 499 | How well your spiritual essences match. Do you share similar life purposes, values, and spiritual orientations? High soul connection means you 'get' each other on a deep level without trying. | مدى توافق جوهريكما الروحيين. هل تشتركان في غايات الحياة والقيم والتوجّه الروحي؟ وصلة الأرواح العالية تعني أن كلًّا منكما «يفهم» الآخر في العمق دون تكلّف. |
| 500 | How your day-to-day personalities mesh. Are you both fiery and clashing, or does one person's calm earth energy ground the other's impulsive fire? This affects daily interactions more than grand compatibility. | كيف تنسجم شخصيتاكما في الحياة اليومية. هل كلاكما ناريّ متصادم، أم أن هدوء طاقة التراب لدى أحدكما يُثبّت اندفاع نار الآخر؟ وهذا يؤثّر في التعامل اليومي أكثر من التوافق العام. |
| 501 | In Islamic mysticism, some relationships exist to help you grow, heal, or learn specific lessons. They may be difficult but transformative. High intensity doesn't always mean 'meant to be'—sometimes it means 'meant to teach.' | في التصوّف توجد بعض العلاقات لتعينك على النموّ أو الشفاء أو تعلّم دروس معيّنة. قد تكون صعبة لكنها تُحوِّل. والشدّة العالية لا تعني دائمًا «مقدَّرًا أن يكون» — فأحيانًا تعني «مقدَّرًا أن يُعلِّم». |
| 502 | Intentional Partnership | شراكة واعية |
| 503 | Islamic numerology shows TENDENCIES, not fixed fate. You always have free will. Low compatibility means more work, not impossibility. High compatibility can fail without effort. Your choices, character, and commitment matter most. | علم العدد يُظهر ميولًا لا قدرًا محتومًا. ولك دائمًا إرادة واختيار. فالتوافق المنخفض يعني جهدًا أكبر لا استحالة، والتوافق العالي قد يخفق دون جهد. واختياراتك وخُلقك والتزامك هي الأهمّ. |
| 504 | Jupiter Energy | طاقة المشتري |
| 505 | Jupiter people are generous, optimistic, and see big pictures. They seek meaning and freedom but can be excessive. In relationships: they bring joy and growth but need space and philosophical connection. | أهل المشتري كرماء متفائلون يرون الصورة الكبرى. يطلبون المعنى والحرية لكنهم قد يُفرطون. وفي العلاقات: يجلبون الفرح والنموّ لكنهم يحتاجون إلى مساحة وصلة فكرية. |
| 506 | Karmic Relationship | علاقة تعليمية |
| 507 | Letter-to-Number Code | رمز الحرف بالعدد |
| 508 | Low Compatibility | توافق منخفض |
| 509 | Mars Energy | طاقة المريخ |
| 510 | Mars people are action-oriented, passionate, and direct. They're protective and courageous but can be aggressive. In relationships: they bring excitement and protection but need to soften their approach. | أهل المريخ عمليّون شغوفون صريحون. يحمون ويتشجّعون لكنهم قد يعتدون. وفي العلاقات: يجلبون الحماسة والحماية لكنهم يحتاجون إلى تليين أسلوبهم. |
| 511 | Master Number | العدد الرئيسي |
| 512 | Mercury people need mental stimulation and conversation. They're witty, curious, and versatile but can be scattered. In relationships: they bring humor and interesting dialogue but need intellectual connection. | أهل عطارد يحتاجون إلى تحفيز ذهني وحوار. ظرفاء فضوليون متعدّدو المواهب لكنهم قد يتشتّتون. وفي العلاقات: يجلبون الدعابة والحديث الممتع لكنهم يحتاجون إلى صلة فكرية. |
| 513 | Moderate Compatibility | توافق معتدل |
| 514 | Moon Energy | طاقة القمر |
| 515 | Moon people are emotionally sensitive, caring, and intuitive. They create safe emotional spaces and understand feelings instinctively but can be moody. In relationships: they provide deep emotional support but need security. | أهل القمر مرهفو العاطفة، حانون، حدسيّون. يصنعون مساحات عاطفية آمنة ويفهمون المشاعر بالفطرة لكنهم قد يتقلّبون. وفي العلاقات: يقدّمون سندًا عاطفيًا عميقًا لكنهم يحتاجون إلى الأمان. |
| 516 | No terms found. | لم يُعثر على مصطلحات. |
| 517 | Numbers that aren't reduced to single digits because they carry special spiritual significance. They indicate higher potential but also greater challenges. People with master numbers often feel 'different' or called to something bigger. | أعداد لا تُختزل إلى رقم واحد لأن لها دلالة روحية خاصة. تشير إلى إمكانات أعلى وتحدّيات أكبر. وكثيرًا ما يشعر أصحابها بأنهم «مختلفون» أو مدعوّون إلى أمر أكبر. |
| 518 | Numerological Vibration | الاهتزاز العددي |
| 519 | Opposing Traits That Clash | صفات متقابلة تتصادم |
| 520 | Opposite Traits That Balance | صفات متقابلة تتوازن |
| 521 | Personality Balance | توازن الشخصية |
| 522 | Plain-language explanations of numerology concepts | شرح مفاهيم علم العدد بلغة بسيطة |
| 523 | Requires Conscious Effort (50-74%) | يتطلّب جهدًا واعيًا (50-74%) |
| 524 | Saturn Energy | طاقة زحل |
| 525 | Saturn people are responsible, patient, and build lasting structures. They're reliable and wise but can be emotionally reserved or pessimistic. In relationships: they provide stability but need to warm up emotionally. | أهل زحل مسؤولون صبورون يبنون بنى دائمة. موثوقون حكماء لكنهم قد يكونون متحفّظين عاطفيًا أو متشائمين. وفي العلاقات: يقدّمون الثبات لكنهم يحتاجون إلى دفء عاطفي. |
| 526 | Science of Letters | علم الحروف |
| 527 | Significant natural differences that require deep work, maturity, and often professional guidance. Not a death sentence—some of the strongest relationships grow from here—but both partners must be exceptionally committed. | فروق طبيعية كبيرة تتطلّب عملًا عميقًا ونضجًا، وكثيرًا ما تتطلّب إرشادًا متخصّصًا. وليست حكمًا نهائيًا — فبعض أقوى العلاقات تنمو من هنا — لكن على الطرفين التزامًا استثنائيًا. |
| 528 | Soul-Level Recognition | تعارف على مستوى الروح |
| 529 | Special Powerful Numbers (11, 22, 33) | أعداد قوية خاصة (11، 22، 33) |
| 530 | Sun Energy | طاقة الشمس |
| 531 | Temperament Harmony | انسجام الطبع |
| 532 | The Builder & Disciplined | البنّاء المنضبط |
| 533 | The Communicator & Thinker | المتواصل المفكّر |
| 534 | The Deep Feeler | العميق الإحساس |
| 535 | The Energy of Numbers | طاقة الأعداد |
| 536 | The Leader & Light | القائد والنور |
| 537 | The Lover & Peacemaker | المحبّ وصانع السلام |
| 538 | The Nurturer & Intuitive | الراعي الحدسيّ |
| 539 | The Passionate Go-Getter | المقدام الشغوف |
| 540 | The Philosopher & Optimist | الفيلسوف المتفائل |
| 541 | The Stable Builder | البنّاء الثابت |
| 542 | The Thinker & Communicator | المفكّر المتواصل |
| 543 | The Warrior & Doer | المحارب الفاعل |
| 544 | The ancient Islamic practice of studying the numerical values and spiritual meanings of Arabic letters. Each letter is believed to carry divine energy that influences names, words, and ultimately, people's destinies. | الممارسة الإسلامية العريقة في دراسة القيم العددية والمعاني الروحية للحروف العربية. ويُعتقد أن لكل حرف سرًّا يتّصل بالأسماء والكلمات وبمسار الإنسان، والأمر كله لله. |
| 545 | The belief that relationships, opportunities, and life events happen when spiritually meant to. If compatibility is low now, perhaps you're not ready for each other yet. Or perhaps you're meant to grow separately first. | الاعتقاد بأن العلاقات والفرص وأحداث الحياة تأتي في وقتها المقدَّر. فإن كان التوافق منخفضًا الآن، فلعلّكما لم تستعدّا بعدُ أحدكما للآخر، أو لعلّ لكلٍّ منكما نموًّا منفردًا أولًا. |
| 546 | The divine purpose encoded in your name. It's not about religion only—it's about your deeper calling, what makes life meaningful to you, and how you grow spiritually. | الغاية المكنونة في اسمك. ليست دينية فحسب — بل هي نداؤك الأعمق، وما يجعل الحياة ذات معنى لك، وكيف تنمو روحيًا. |
| 547 | The single-digit number that represents your fundamental nature and life purpose. Calculated from your birth date or name, it reveals your natural strengths, challenges, and spiritual journey. | العدد المفرد الذي يمثّل طبيعتك الأساسية وغاية حياتك. يُحسب من تاريخ ميلادك أو اسمك، ويكشف قواك الطبيعية وتحدّياتك ورحلتك الروحية. |
| 548 | Traditional Islamic mysticism teaches that celestial bodies influence human temperament. Your 'ruling planet' (determined by your number) affects how you love, communicate, act, and feel. Understanding this explains mysterious attractions and conflicts. | يُعلّم التراث الإسلامي التقليدي أن للأجرام السماوية صلة بطباع الإنسان. و«كوكبك الحاكم» (المحدَّد بعددك) يتّصل بطريقتك في المحبّة والتواصل والعمل والشعور. وفهم ذلك يفسّر بعض الانجذاب والصراع الغامضين. |
| 549 | Venus Energy | طاقة الزهرة |
| 550 | Water Element | عنصر الماء |
| 551 | Water people are emotionally intelligent, nurturing, and intuitive. They feel deeply and care profoundly but can be overly sensitive or moody. Think: 'How does everyone feel about this?' Water needs to balance emotions with logic. | أهل الماء أذكياء عاطفيًا، حانون، حدسيّون. يشعرون بعمق ويهتمّون كثيرًا لكنهم قد يفرطون في الحساسية أو يتقلّبون. شعارهم: «ما شعور الجميع حيال هذا؟». ويحتاج الماء إلى موازنة العاطفة بالعقل. |
| 552 | When your differences actually help each other. Fire's enthusiasm energizes Earth's caution. Water's depth grounds Air's scattered thoughts. These aren't conflicts—they're completing each other's weaknesses. | حين تعين اختلافاتكما كلًّا منكما. فحماسة النار تُنشّط حذر التراب، وعمق الماء يُثبّت أفكار الهواء المتبعثرة. وليست هذه صراعات — بل يُكمل كلٌّ منكما ضعف الآخر. |
| 553 | You have potential but need to actively work on understanding, communication, and compromise. Success depends on both partners' commitment. Many happy marriages exist in this range—it just takes more intentional effort. | لديكما إمكانات لكنكما تحتاجان إلى العمل بفاعلية على التفاهم والتواصل والتنازل. والنجاح يتوقّف على التزام الطرفين. وكثير من الزيجات السعيدة في هذا المدى — إنما تتطلّب جهدًا أكثر قصدًا. |
| 554 | Your Basic Nature (Fire/Water/Air/Earth) | طبيعتك الأساسية (نار/ماء/هواء/تراب) |
| 555 | Your Core Number | عددك الجوهري |
| 556 | Your Spiritual Life Path | مسار حياتك الروحي |
| 557 | 50-64: Moderate 🧡 | 50-64: معتدل 🧡 |
| 558 | 65-74: Good Match 💛 | 65-74: توافق جيد 💛 |
| 559 | 85-100: Excellent Match 💚 | 85-100: توافق ممتاز 💚 |
| 560 | Analyzes the interaction of your elemental natures (Fire, Water, Air, Earth). Fire brings passion, Water brings emotion, Air brings intellect, Earth brings stability. Understanding your elemental blend helps navigate daily interactions. | يحلّل تفاعل طبيعتيكما العنصريتين (النار، الماء، الهواء، التراب). فالنار تجلب الشغف، والماء العاطفة، والهواء العقل، والتراب الثبات. وفهم مزيجكما العنصري يعين على التعامل اليومي. |
| 561 | Ancient Wisdom for Modern Relationships | حكمة قديمة لعلاقات اليوم |
| 562 | Below 50: Challenging ❤️ | أقل من 50: صعب ❤️ |
| 563 | Communication is Everything | التواصل هو كل شيء |
| 564 | Compatibility analysis shows natural tendencies, not fixed destiny. Any two committed people can build a beautiful relationship through conscious effort, communication, and faith. Low compatibility means more work, not impossibility. | تحليل التوافق يُظهر ميولًا طبيعية لا قدرًا محتومًا. وأي شخصين ملتزمين يستطيعان بناء علاقة جميلة بالجهد الواعي والتواصل والإيمان. فالتوافق المنخفض يعني جهدًا أكبر لا استحالة. |
| 565 | Compatibility analysis uses the sacred science of ʿIlm al-Ḥurūf (Science of Letters) to understand how two people's energies interact. Your names carry spiritual vibrations that reveal natural harmony or areas requiring conscious effort. | يستعمل تحليل التوافق علم الحروف لفهم تفاعل طاقات شخصين. فلأسمائكما اهتزازات روحية تكشف الانسجام الطبيعي أو المواطن التي تحتاج إلى جهد واعٍ. |
| 566 | Compatibility is a guide, not a sentence. With love, patience, and faith, any committed couple can create a beautiful relationship. | التوافق دليلٌ لا حُكم. وبالمحبّة والصبر والإيمان يستطيع أي زوجين ملتزمين بناء علاقة جميلة. |
| 567 | Consider compatibility as one factor among many—character, shared values, faith, life goals, and mutual respect matter deeply. Use this tool to enter with open eyes, not to make absolute judgments. | اجعل التوافق عاملًا من عوامل كثيرة — فالخُلق والقيم المشتركة والإيمان وغايات الحياة والاحترام المتبادل مهمّة جدًا. استعمل هذه الأداة لتدخل بعينين مفتوحتين، لا لتُصدر أحكامًا مطلقة. |
| 568 | Discover why certain patterns exist in your relationship. Understanding your elemental and planetary dynamics can transform conflicts into opportunities for deeper connection and growth. | اكتشف لماذا توجد أنماط معيّنة في علاقتكما. ففهم ديناميكيتكما العنصرية والكوكبية قد يحوّل الصراعات إلى فرص لصلة أعمق ونموّ. |
| 569 | Examines how your spiritual essences align. This reveals your capacity for deep understanding, shared life purpose, and spiritual growth together. High scores indicate natural soul-level resonance. | يفحص مدى انسجام جوهريكما الروحيين. ويكشف قدرتكما على الفهم العميق والغاية المشتركة في الحياة والنموّ الروحي معًا. والنتائج العالية تشير إلى رنين طبيعي على مستوى الروح. |
| 570 | Grow Spiritually Together | انموا روحيًا معًا |
| 571 | High spiritual compatibility means you can support each other's faith journey. Make dhikr together, pray together, study together. Shared spiritual practice strengthens all types of compatibility. | التوافق الروحي العالي يعني أنكما تستطيعان دعم رحلة الإيمان لدى كلٍّ منكما. اذكرا الله معًا، وصلّيا معًا، وتعلّما معًا. والممارسة الروحية المشتركة تقوّي كل أنواع التوافق. |
| 572 | If one partner is more Fire (impulsive), the other's Earth (stable) quality can create beautiful balance—if both appreciate rather than resist it. Work with your differences, not against them. | إن كان أحد الطرفين ناريًا أكثر (مندفعًا)، فقد تصنع صفة التراب (الثبات) لدى الآخر توازنًا جميلًا — إن قدّرها كلاهما بدل مقاومتها. اعملا مع اختلافاتكما لا ضدّها. |
| 573 | In Islamic tradition, names are not random—they carry divine energy and influence your destiny. When two names come together, their combined energies create a unique relationship dynamic that can be understood and optimized. | في التراث الإسلامي ليست الأسماء عشوائية — فلها معانٍ وأسرار، وقد يكون لها أثر في المسار بإذن الله. وحين يجتمع اسمان، تصنع طاقتهما المجتمعة ديناميكية علاقة فريدة يمكن فهمها وإحسانها. |
| 574 | Learn how Islamic numerology reveals the harmony between two souls | تعرّف كيف يكشف علم العدد الانسجام بين روحين |
| 575 | Natural harmony flows between you. Your energies complement each other beautifully. Even challenges feel manageable because you 'get' each other intuitively. This is rare and precious. | انسجام طبيعي يسري بينكما. تتكامل طاقتاكما تكاملًا جميلًا، وحتى التحدّيات تبدو محتملة لأن كلًّا منكما «يفهم» الآخر بالفطرة. وهذا نادر ونفيس. |
| 576 | Practical Relationship Wisdom | حكمة عملية في العلاقات |
| 577 | Remember: Free Will Matters Most | تذكّر: الإرادة والاختيار هما الأهمّ |
| 578 | Requires conscious effort and mutual understanding. Success depends on both partners' commitment to growth, communication, and respecting differences. Professional guidance may help navigate challenges. | يتطلّب جهدًا واعيًا وتفاهمًا متبادلًا. والنجاح يتوقّف على التزام الطرفين بالنموّ والتواصل واحترام الاختلافات. وقد يعين الإرشاد المتخصّص على تجاوز التحدّيات. |
| 579 | Seek Balance Together | اطلبا التوازن معًا |
| 580 | Solid foundation with room for growth. You can build something beautiful by consciously working on understanding and compromise. Many successful relationships thrive in this range. | أساس متين مع مجال للنموّ. يمكنكما بناء شيء جميل بالعمل الواعي على التفاهم والتنازل. وكثير من العلاقات الناجحة تزدهر في هذا المدى. |
| 581 | Studies how your ruling planets interact. Each planet governs different energies—Mars (action), Venus (love), Mercury (communication), etc. Planetary harmony indicates ease in specific life areas. | يدرس تفاعل كوكبيكما الحاكمين. فلكل كوكب طاقاته — المريخ (العمل)، الزهرة (المحبّة)، عطارد (التواصل)، وهكذا. والانسجام الكوكبي يشير إلى يُسر في مجالات معيّنة من الحياة. |
| 582 | The Three Analysis Methods | طرق التحليل الثلاث |
| 583 | Three Sacred Dimensions | ثلاثة أبعاد |
| 584 | Understanding Relationship Compatibility | فهم توافق العلاقات |
| 585 | Understanding Your Score | فهم نتيجتك |
| 586 | Use compatibility insights to understand potential strengths and challenges early. High compatibility doesn't guarantee success, and low scores don't doom a relationship—but awareness helps you prepare and communicate better. | استعمل لمحات التوافق لفهم مواطن القوة والتحدّي المحتملة مبكرًا. فالتوافق العالي لا يضمن النجاح، والنتائج المنخفضة لا تحكم على علاقة بالفشل — لكن الوعي يعين على الاستعداد وحسن التواصل. |
| 587 | We analyze compatibility through three complementary lenses: Soul Connection (spiritual alignment), Personality Balance (elemental harmony), and Cosmic Harmony (planetary influences). Each reveals different aspects of your relationship potential. | نحلّل التوافق من ثلاث زوايا متكاملة: صلة الأرواح (الانسجام الروحي)، وتوازن الشخصية (الانسجام العنصري)، والانسجام الكوني (الصلات الكوكبية). وكل منها يكشف جانبًا مختلفًا من إمكانات علاقتكما. |
| 588 | What is Compatibility Analysis? | ما تحليل التوافق؟ |
| 589 | Why Names Matter | لماذا تهمّ الأسماء |
| 590 | Your elemental and planetary differences aren't problems to fix—they're complementary strengths. Fire needs Water's depth, Air needs Earth's grounding. Appreciate what your partner brings. | اختلافاتكما العنصرية والكوكبية ليست مشكلات تُصلَح — بل قوى متكاملة. فالنار تحتاج إلى عمق الماء، والهواء يحتاج إلى ثبات التراب. قدّر ما يأتي به شريكك. |
| 591 | 🌟 Cosmic Harmony (Planetary Compatibility) | 🌟 الانسجام الكوني (التوافق الكوكبي) |
| 592 | 🎨 Personality Balance (Elemental Temperament) | 🎨 توازن الشخصية (الطبع العنصري) |
| 593 | 💫 Soul Connection (Spiritual Destiny) | 💫 صلة الأرواح (المسار الروحي) |
| 594 | Transliteration Confidence: | ثقة النقل الحرفي: |
| 595 | Community | المجتمع |
| 596 | (Islamic Science of Letters) traditions. It is designed for | (علم الحروف) في التراث. وهو مصمَّم لـ |
| 597 | , not for divination, prediction, or guaranteeing outcomes. | ، لا للكهانة ولا للتنبّؤ ولا لضمان النتائج. |
| 598 | Consult qualified Islamic scholars for religious guidance and professional advisors for important personal/financial decisions. This tool should complement, not replace, practical wisdom and professional counsel. | ارجع إلى أهل العلم المؤهّلين في المسائل الشرعية، وإلى المستشارين المتخصّصين في القرارات الشخصية والمالية المهمّة. وهذه الأداة تُكمّل الحكمة العملية والمشورة المتخصّصة ولا تحلّ محلّهما. |
| 599 | Dismiss disclaimer | إغلاق التنبيه |
| 600 | Key Limitations: | حدود أساسية: |
| 601 | May this knowledge bring you closer to understanding the divine wisdom woven into creation. | نسأل الله أن تقرّبنا هذه المعرفة من فهم الحكمة الإلهية المنسوجة في الخلق. |
| 602 | Qadr | القدر |
| 603 | Spiritual Reflection Tool Only: | أداة للتأمّل الروحي فقط: |
| 604 | The Divine alone controls all outcomes ( | الله وحده بيده كل النتائج ( |
| 605 | These calculations | هذه الحسابات |
| 606 | This application provides guidance based on classical | يقدّم هذا التطبيق إرشادًا مبنيًا على تراث |
| 607 | Wa 'alaikum assalaam wa rahmatullahi wa barakatuh | وعليكم السلام ورحمة الله وبركاته |
| 608 | do not predict the future | لا تتنبّأ بالمستقبل |
| 609 | not divination, fortune-telling, or Islamic legal guidance | ليست كهانة ولا عرافة ولا فتوى شرعية |
| 610 | or guarantee specific results | ولا تضمن نتائج معيّنة |
| 611 | remain your own responsibility | تبقى مسؤوليتك |
| 612 | self-reflection and timing | التأمّل في النفس والتوقيت |
| 613 | spiritual reflection and understanding | التأمّل والفهم الروحي |
| 614 | 📖 Important Notice About This Application | 📖 تنبيه مهمّ حول هذا التطبيق |
| 615 | About This Guidance | حول هذا الإرشاد |
| 616 | accurate location-based | دقيقة بحسب الموقع |
| 617 | planetary hour calculations | حسابات الساعات الكوكبية |
| 618 | • A cultural practice tool, not religious obligation | • أداة لممارسة ثقافية، لا واجب ديني |
| 619 | • Based on traditional Islamic letter science (ʿIlm al-Ḥurūf - علم الحروف) | • مبنية على علم الحروف التقليدي |
| 620 | • For personal reflection and mindfulness, not fortune-telling | • للتأمّل الشخصي والوعي، لا للعرافة |
| 621 | Divine Name Connection | الصلة بالاسم الحسن |
| 622 | Your spiritual resonance with a Name of Allah, from ʿIlm al-Ḥurūf | رنينك الروحي مع اسم من أسماء الله، من علم الحروف |
| 623 | reduce 1–9 | اختزال 1–9 |
| 624 | Discover your spiritual resonance with the 99 Names of Allah | اكتشف رنينك الروحي مع أسماء الله الحسنى |
| 625 | Pick a Name | اختر اسمًا |
| 626 | Please choose a Divine Name | يُرجى اختيار اسم من الأسماء الحسنى |
| 627 | We'll calculate your resonance with all 99 Names and show you the ones that resonate most favorably. | سنحسب رنينك مع الأسماء الحسنى كلها ونعرض لك أكثرها رنينًا. |
| 628 | You and a Divine Name | أنت واسم من الأسماء الحسنى |
| 629 | Call upon Allah by the Name whose meaning matches your need — Quran 7:180 | ﴿وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا﴾ — الأعراف 180 |
| 630 | Each of the 99 Names is classically associated with certain qualities. Matching your intention to a Name whose meaning relates to it is a way of calling on Allah by the Name best suited to your need, rather than an arbitrary choice. | لكل اسم من الأسماء الحسنى صفات ترتبط به في التراث. ومطابقة نيّتك لاسم يتّصل معناه بها طريقٌ لدعاء الله بالاسم الأنسب لحاجتك، لا اختيار اعتباطي. |
| 631 | Find the Best Names | اعثر على أفضل الأسماء |
| 632 | We'll search all 99 Names and show you the ones that best match your intention. | سنبحث في الأسماء الحسنى كلها ونعرض لك أنسبها لنيّتك. |
| 633 | Authentic Prophetic Supplication | دعاء نبوي ثابت |
| 634 | For an important decision, istikhāra (2 rakʿahs + the prophetic supplication) remains the established practice. What follows is a complement to it — not a replacement. | في القرار المهمّ تبقى الاستخارة (ركعتان مع الدعاء النبوي) هي السنّة الثابتة. وما يلي مكمّل لها — لا بديل عنها. |
| 635 | Repeat the Name as often as you wish, with sincerity and proper adab — no fixed number is required. This is spiritual reflection, not a guarantee or an occult practice. | ردّد الاسم ما شئت بإخلاص وأدب — دون عدد ملزم. هذا تأمّل روحي، لا ضمان ولا ممارسة سحرية. |
| 636 | optimal Name | الاسم الأنسب |
| 637 | Suggested Alternatives | بدائل مقترحة |
| 638 | Needs discipline | يحتاج إلى انضباط |
| 639 | Strong resonance | رنين قوي |
| 640 | Workable resonance | رنين قابل للعمل |
| 641 | of 99 Names resonate strongly with | من الأسماء الحسنى لها رنين قوي مع |
| 642 | 🌙 Spiritual Destiny \| 🌊 Elemental Temperament \| ⭐ Planetary Cosmic \| 🤝 Daily Interaction | 🌙 المسار الروحي \| 🌊 الطبع العنصري \| ⭐ الكوني الكوكبي \| 🤝 التفاعل اليومي |
| 643 | ) guides you toward your higher purpose. | ) يرشدك إلى غايتك الأسمى. |
| 644 | ) represents your spiritual essence, while your Soul Urge ( | ) يمثّل جوهرك الروحي، بينما رغبة روحك ( |
| 645 | ) shows how others perceive you, and your Destiny ( | ) تُظهر كيف يراك الآخرون، ومسارك ( |
| 646 | , aligning with your Personal Year | ، متوافقًا مع سنتك الشخصية |
| 647 | , carrying deep spiritual significance: | ، ويحمل دلالة روحية عميقة: |
| 648 | Bismillah Value - Divine grace and blessed beginnings | قيمة البسملة - النعمة الإلهية والبدايات المباركة |
| 649 | Compatibility Calculator | حاسبة التوافق |
| 650 | Days of Creation - Spiritual completion and divine perfection | أيام الخلق - الكمال الروحي |
| 651 | Deepest Desire | الرغبة الأعمق |
| 652 | Divine Attribute | صفة إلهية |
| 653 | Energetic Influence | الأثر الطاقي |
| 654 | Karmic Debt | الدَّين الكارمي |
| 655 | Life Pinnacles & Challenges | قمم الحياة وتحدّياتها |
| 656 | Master | رئيسي |
| 657 | Mastery Gift | هبة الإتقان |
| 658 | Maternal Influence Number | عدد أثر الأم |
| 659 | Monthly Themes | موضوعات شهرية |
| 660 | Months & Holy Imams - Cosmic order and divine leadership | الشهور والأئمة - النظام الكوني والقيادة |
| 661 | Names of Allah (Asma ul-Husna) - Divine attributes manifestation | أسماء الله الحسنى - تجلّي الصفات الإلهية |
| 662 | Nations & Completion - Universal wisdom and fulfillment | الأمم والتمام - الحكمة الكونية والاكتمال |
| 663 | No specific sacred Islamic numbers detected in your name at this time. Sacred numbers include: 7 (creation), 12 (months/Imams), 19 (Quranic miracle), 40 (transformation), 70 (nations), 99 (names of Allah), 111 (Al-Ikhlas), 313 (Badr warriors), 786 (Bismillah), 1000 (perfection). | لم تُكتشف أعداد إسلامية مميّزة في اسمك حاليًا. ومن هذه الأعداد: 7 (الخلق)، 12 (الشهور/الأئمة)، 19 (العدد في القرآن)، 40 (التحوّل)، 70 (الأمم)، 99 (أسماء الله)، 111 (الإخلاص)، 313 (أهل بدر)، 786 (البسملة)، 1000 (الكمال). |
| 664 | Number Guide | دليل الأعداد |
| 665 | Nurturing Qualities | صفات الرعاية |
| 666 | Pinnacle | القمّة |
| 667 | Pinnacle 1 | القمّة 1 |
| 668 | Pinnacle 2 | القمّة 2 |
| 669 | Pinnacle 3 | القمّة 3 |
| 670 | Pinnacle 4 | القمّة 4 |
| 671 | Positive Qualities | الصفات الإيجابية |
| 672 | Quranic Miracle Number - Mathematical proof of divine authorship | العدد في القرآن - من دلائل الإعجاز عند بعض الباحثين |
| 673 | Quranic Wisdom | حكمة قرآنية |
| 674 | Reduces to | يُختزل إلى |
| 675 | Sacred Numbers in Your Name | أعداد مميّزة في اسمك |
| 676 | Select a Life Path number to see compatibility | اختر عدد مسار حياة لترى التوافق |
| 677 | Select your partner's Life Path number: | اختر عدد مسار حياة شريكك: |
| 678 | Surah Al-Ikhlas Value - Pure monotheism and divine oneness | قيمة سورة الإخلاص - التوحيد الخالص |
| 679 | Symbolic Perfection - Ultimate completion and mastery | الكمال الرمزي - التمام والإتقان |
| 680 | Synthesis | الخلاصة |
| 681 | Testing Period - Spiritual transformation and purification | مدّة الابتلاء - التحوّل الروحي والتزكية |
| 682 | These sacred numbers in your name suggest a deep connection with Islamic spiritual tradition and carry specific energies that can guide your life path. | تشير هذه الأعداد في اسمك إلى صلة عميقة بالتراث الروحي الإسلامي، ولها معانٍ قد تُعين على التأمّل في مسار حياتك. |
| 683 | This maternal influence enriches your emotional understanding and capacity to care for others. | يُثري أثر الأم هذا فهمك العاطفي وقدرتك على رعاية الآخرين. |
| 684 | Timeline | الخطّ الزمني |
| 685 | To see maternal influence, please provide your mother's name during calculation. This section shows how your mother's numerological energy influences your emotional and spiritual development. | لترى أثر الأم، أدخل اسم أمك عند الحساب. ويُظهر هذا القسم صلة طاقة أمك العددية بنموّك العاطفي والروحي. |
| 686 | Transformation Path | طريق التحوّل |
| 687 | Warning Sign | علامة تنبيه |
| 688 | Warriors of Badr - Victory through faith and courage | أهل بدر - النصر بالإيمان والشجاعة |
| 689 | Year Theme | موضوع السنة |
| 690 | Year in Cycle | السنة في الدورة |
| 691 | Your Life Path ( | مسار حياتك ( |
| 692 | has shaped your emotional and spiritual development. This maternal influence brings unique qualities to your life path. | أسهم في تشكيل نموّك العاطفي والروحي. ويضيف أثر الأم هذا صفات فريدة إلى مسار حياتك. |
| 693 | sacred Islamic number | عدد إسلامي مميّز |
| 694 | theme: " | الموضوع: « |
| 695 | Cycle | الدورة |
| 696 | Karmic Lessons | الدروس الكارمية |
| 697 | Life Purpose: | غاية الحياة: |
| 698 | Spiritual Station: | المقام الروحي: |
| 699 | Your Spiritual Focus | محورك الروحي |
| 700 | ✨ Qualities: | ✨ الصفات: |
| 701 | 🎯 This Year's Focus: | 🎯 محور هذه السنة: |
| 702 | Bug report | بلاغ عن خلل |
| 703 | Describe the issue or your idea… | صِف المشكلة أو فكرتك… |
| 704 | Email (optional) | البريد الإلكتروني (اختياري) |
| 705 | Leave your email if you'd like a reply. | اترك بريدك إن رغبت في الردّ. |
| 706 | Something went wrong — please try again. | حدث خطأ — يُرجى المحاولة مرة أخرى. |
| 707 | Tell us what's working, what's not, or what you'd like to see. | أخبرنا بما ينجح وما لا ينجح، أو بما تودّ رؤيته. |
| 708 | What kind of feedback is this? | ما نوع هذه الملاحظة؟ |
| 709 | Your feedback | ملاحظتك |
| 710 | Your feedback has been received. | وصلتنا ملاحظتك. |
| 711 | Install Asrār on your iPhone | ثبّت أسرار على iPhone |
| 712 | Personalised spiritual guidance · Dhikr · Abjad · Planetary Hours | إرشاد روحي شخصي · الذكر · الأبجد · الساعات الكوكبية |
| 713 | Tap | اضغط |
| 714 | then "Add to Home Screen" | ثم «إضافة إلى الشاشة الرئيسية» |
| 715 | A classical Islamic text by Al-Būnī (13th century) documenting the science of letters, numerical correspondences, and their spiritual applications. A primary reference for Abjad systems. | نصّ إسلامي كلاسيكي للبوني (القرن الثالث عشر الميلادي) يوثّق علم الحروف والمناسبات العددية وتطبيقاتها الروحية. وهو مرجع أساسي لأنظمة الأبجد. |
| 716 | A mathematical process of repeatedly adding digits until a single digit (1-9) remains. Formula: 1 + ((n - 1) % 9). Essential for calculating Saghir and Soul Urge. | عملية رياضية تجمع الأرقام مرارًا حتى يبقى رقم واحد (1-9). الصيغة: 1 + ((n - 1) % 9). وهي أساسية لحساب الصغير ورغبة الروح. |
| 717 | A modern interpretation (not classical) rating compatibility between two names on a 0-100 scale. Based on destiny similarity, soul urge alignment, and special pairings. | تفسير حديث (غير كلاسيكي) يقدّر التوافق بين اسمين على مقياس من 0 إلى 100، بناءً على تشابه المسار وانسجام رغبة الروح والأزواج الخاصة. |
| 718 | A suggested Quranic verse based on your name's numerical value. Intended for spiritual reflection and gaining insight. Not a prediction or guarantee. | آية قرآنية مقترحة بحسب القيمة العددية لاسمك، للتأمّل الروحي والتبصّر. وليست تنبّؤًا ولا ضمانًا. |
| 719 | Abjad | الأبجد |
| 720 | All names fall into one of four elements with distinct qualities: Fire (active, passionate), Water (emotional, intuitive), Air (intellectual, communicative), Earth (practical, grounded). | تنتمي الأسماء كلها إلى أحد أربعة عناصر لكل منها صفاته: النار (فاعلة شغوفة)، الماء (عاطفي حدسيّ)، الهواء (فكريّ تواصليّ)، التراب (عمليّ ثابت). |
| 721 | An Islamic mystical and numerical science studying the properties and meanings of Arabic letters. Combines orthography, numerology, and spiritual philosophy developed over centuries. | علم إسلامي روحي وعددي يدرس خواصّ الحروف العربية ومعانيها، ويجمع بين الرسم والعدد والفلسفة الروحية عبر قرون. |
| 722 | Annual Cycle Number | عدد الدورة السنوية |
| 723 | Calculated from consonants only. Shows how others perceive you and your outward personality. The mask you present to the world. | يُحسب من الحروف الصامتة فقط. ويُظهر كيف يراك الآخرون وشخصيتك الظاهرة — الوجه الذي تقدّمه للعالم. |
| 724 | Calculated from vowels only (ا, و, ي) in your name. Reveals your deepest desires, emotional nature, and what truly motivates you at a spiritual level. | يُحسب من حروف العلّة فقط (ا، و، ي) في اسمك. ويكشف أعمق رغباتك وطبيعتك العاطفية وما يحرّكك حقًّا على المستوى الروحي. |
| 725 | Compatibility Factors | عوامل التوافق |
| 726 | Connection to Quranic Wisdom | الصلة بالحكمة القرآنية |
| 727 | Digital Root (Formula) | الجذر الرقمي (الصيغة) |
| 728 | Elemental Event/Classification | التصنيف العنصري |
| 729 | Elemental Type | النوع العنصري |
| 730 | In relationship analysis: destiny compatibility (life path alignment), soul urge compatibility (emotional resonance), and special pairings (unique numerological combinations). | في تحليل العلاقات: توافق المسار (انسجام مسار الحياة)، وتوافق رغبة الروح (الرنين العاطفي)، والأزواج الخاصة (تراكيب عددية فريدة). |
| 731 | Inner Desires & Motivations | الرغبات والدوافع الباطنة |
| 732 | Islamic Numerology Glossary | معجم علم العدد |
| 733 | Kawkab | الكوكب |
| 734 | Letter Numerical System | نظام الحروف العددي |
| 735 | Life Path & Purpose | مسار الحياة والغاية |
| 736 | Mathematical Calculation | الحساب الرياضي |
| 737 | Modulo 4 | باقي القسمة على 4 |
| 738 | Outer Expression | التعبير الظاهر |
| 739 | Remainder Division | قسمة الباقي |
| 740 | Sum Reduction Method | طريقة اختزال المجموع |
| 741 | The digital root of Kabir, reduced to a single digit (1-9). Represents the soul essence and core character. Calculated by repeatedly summing digits until one remains. | الجذر الرقمي للكبير، مختزلًا إلى رقم واحد (1-9). يمثّل جوهر الروح والخُلق الأساسي. ويُحسب بجمع الأرقام مرارًا حتى يبقى واحد. |
| 742 | The planetary ruler of the first letter in a name. Seven classical planets govern different letters: Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn. Each brings unique qualities. | الكوكب الحاكم للحرف الأول من الاسم. وتحكم الكواكب السبعة الكلاسيكية حروفًا مختلفة: الشمس، القمر، عطارد، الزهرة، المريخ، المشتري، زحل. ولكل منها صفاته. |
| 743 | The spiritual essence number, calculated the same as Saghir (1-9). Represents your inner spiritual nature and soul purpose. Also called "Soul Urge Number". | عدد الجوهر الروحي، ويُحسب كالصغير (1-9). يمثّل طبيعتك الروحية الباطنة وغاية روحك. ويُسمّى أيضًا «عدد رغبة الروح». |
| 744 | The system of assigning numerical values to Arabic letters. Each letter from ا to غ has a specific number. Two main systems exist: Maghribi (North African) and Mashriqi (Eastern). | نظام إسناد القيم العددية إلى الحروف العربية. لكل حرف من ا إلى غ عدد معيّن. وهناك نظامان رئيسيان: المغربي (شمال أفريقيا) والمشرقي. |
| 745 | Element match: | توافق العنصر: |
| 746 | Learn about this harmony score | تعرّف على نتيجة الانسجام هذه |
| 747 | Moderate Connection | صلة معتدلة |
| 748 | Perfect Connection | صلة تامّة |
| 749 | Planet alignment: | توافق الكوكب: |
| 750 | Strong Connection | صلة قوية |
| 751 | Weak Connection | صلة ضعيفة |
| 752 | ʿIlm al-Ḥurūf (علم الحروف) - Science of Letters | علم الحروف |
| 753 | → Gentle approach recommended | ← يُنصح بالتلطّف |
| 754 | → Optimal flow - all forces aligned | ← انسياب أمثل - كل القوى منسجمة |
| 755 | Action, courage, passion, assertiveness, competition | العمل، الشجاعة، الشغف، الإقدام، المنافسة |
| 756 | Air + Air | هواء + هواء |
| 757 | Air feeds Fire—excellent match! Air brings ideas, Fire brings execution. Both enjoy freedom and excitement. Need to ground together occasionally. | الهواء يغذّي النار — توافق ممتاز! يأتي الهواء بالأفكار والنار بالتنفيذ. وكلاهما يحبّ الحرية والحماسة، ويحتاجان إلى التثبّت معًا أحيانًا. |
| 758 | Air has ideas, Earth implements them. Earth grounds Air's abstractions. Air helps Earth adapt. Good business and life partnership potential. | للهواء الأفكار وللتراب التطبيق. يُثبّت التراب تجريدات الهواء، ويعين الهواء التراب على التكيّف. إمكانات جيدة لشراكة في العمل والحياة. |
| 759 | Beautiful emotional intimacy and mutual understanding. Risk: getting lost in feelings without practical action. Need external grounding. | حميمية عاطفية جميلة وتفاهم متبادل. والخطر: الضياع في المشاعر دون عمل عملي. يحتاجان إلى تثبيت من الخارج. |
| 760 | Brings emotional intelligence, healing, compassion, and spiritual depth | يجلب الذكاء العاطفي والشفاء والرحمة والعمق الروحي |
| 761 | Brings stability, consistency, practical solutions, and long-term planning | يجلب الثبات والاتساق والحلول العملية والتخطيط البعيد |
| 762 | Can be detached, overthinking, inconsistent, or avoid emotional depth | قد يكون منفصلًا، كثير التفكير، متقلّبًا، أو يتجنّب العمق العاطفي |
| 763 | Can be impulsive, impatient, dominating, or burn out quickly | قد يكون مندفعًا، نافد الصبر، متسلّطًا، أو يُنهَك سريعًا |
| 764 | Can be overly sensitive, moody, passive-aggressive, or emotionally overwhelming | قد يكون مفرط الحساسية، متقلّب المزاج، عدائيًا بصمت، أو مُغرقًا عاطفيًا |
| 765 | Can be rigid, resistant to change, materialistic, or boring | قد يكون جامدًا، مقاومًا للتغيير، ماديًا، أو رتيبًا |
| 766 | Challenging but transformative | صعب لكنه محوِّل |
| 767 | Challenging with: | صعب مع: |
| 768 | Communication, intellect, curiosity, versatility, wit | التواصل، العقل، الفضول، تعدّد المواهب، الفطنة |
| 769 | Compatibility Pairs | أزواج التوافق |
| 770 | Compatible with: | متوافق مع: |
| 771 | Cosmic Harmony (Planetary Compatibility) | الانسجام الكوني (التوافق الكوكبي) |
| 772 | Deep dive into each compatibility dimension | تعمّق في كل بُعد من أبعاد التوافق |
| 773 | Earth contains and channels Water beautifully. Water nourishes Earth. Both value depth and commitment. Comfortable, stable, potentially quiet partnership. | يحتوي التراب الماء ويوجّهه بجمال، ويغذّي الماء التراب. وكلاهما يقدّر العمق والالتزام. شراكة مريحة ثابتة، وربما هادئة. |
| 774 | Emotional, intuitive, nurturing, empathetic, deep | عاطفي، حدسيّ، راعٍ، متعاطف، عميق |
| 775 | Endless fascinating conversations! Shared social interests. Risk: avoiding emotional depth. Need to consciously build emotional intimacy. | أحاديث ممتعة لا تنتهي! واهتمامات اجتماعية مشتركة. والخطر: تجنّب العمق العاطفي. يحتاجان إلى بناء الحميمية العاطفية بوعي. |
| 776 | Fire (energy boost), Earth (practical structure), Air (mental clarity) | النار (دفعة طاقة)، التراب (بنية عملية)، الهواء (وضوح ذهني) |
| 777 | Fire can evaporate Water (overwhelm emotions). Water can extinguish Fire (dampen enthusiasm). But balanced: Water adds depth to Fire's passion, Fire brings energy to Water's intuition. | قد تُبخّر النار الماء (تُغرق المشاعر)، وقد يُطفئ الماء النار (يُخمد الحماسة). لكن بالتوازن: يضيف الماء عمقًا إلى شغف النار، وتجلب النار طاقة إلى حدس الماء. |
| 778 | Growth-oriented with effort | موجَّه نحو النموّ بالجهد |
| 779 | How Celestial Energies Influence Your Bond | كيف تتّصل الطاقات السماوية برابطتكما |
| 780 | How It's Calculated | كيف يُحسب |
| 781 | How Your Spiritual Essences Align | كيف تنسجم جواهركما الروحية |
| 782 | In Islamic mystical tradition, celestial bodies carry divine energies that influence human temperament. Your ruling planet—determined by your numerical vibration—affects your natural inclinations, communication style, emotional patterns, and life approach. | في التراث الروحي الإسلامي تُعدّ الأجرام السماوية آياتٍ لها صلة بطباع الإنسان. وكوكبك الحاكم — المحدَّد باهتزازك العددي — يتّصل بميولك الطبيعية وأسلوب تواصلك وأنماطك العاطفية ونهجك في الحياة. |
| 783 | Intellectual, communicative, adaptable, social, innovative | فكريّ، تواصليّ، متكيّف، اجتماعيّ، مبتكر |
| 784 | Intuition, nurturing, emotional depth, sensitivity, adaptability | الحدس، الرعاية، العمق العاطفي، الحساسية، التكيّف |
| 785 | Leadership, vitality, confidence, creativity, self-expression | القيادة، الحيوية، الثقة، الإبداع، التعبير عن الذات |
| 786 | Lots of passion and energy! But two fires can burn each other out. Needs conscious cooling-down practices and taking turns leading. | شغف وطاقة كثيران! لكن النارين قد تُحرق إحداهما الأخرى. يحتاجان إلى ممارسات تهدئة واعية وتناوب القيادة. |
| 787 | Mars (frustration), Jupiter (restriction of growth), Moon (emotional distance) | المريخ (الإحباط)، المشتري (تقييد النموّ)، القمر (البُعد العاطفي) |
| 788 | Mars (mutual respect), Jupiter (shared optimism), Venus (appreciation) | المريخ (الاحترام المتبادل)، المشتري (التفاؤل المشترك)، الزهرة (التقدير) |
| 789 | Mars (too aggressive), Saturn (emotionally cold) | المريخ (عدواني جدًا)، زحل (بارد عاطفيًا) |
| 790 | Mars (too confrontational), Pluto (too intense) | المريخ (تصادمي جدًا)، بلوتو (شديد جدًا) |
| 791 | Mercury people need mental stimulation and conversation. They bring humor, ideas, and social connections. | أهل عطارد يحتاجون إلى تحفيز ذهني وحوار. ويجلبون الدعابة والأفكار والصلات الاجتماعية. |
| 792 | Moon (emotional harmony), Mercury (pleasant communication), Jupiter (shared joy) | القمر (انسجام عاطفي)، عطارد (تواصل لطيف)، المشتري (فرح مشترك) |
| 793 | Moon people are emotionally attuned, caring, and create safe spaces. They need emotional security and can be moody. | أهل القمر مرهفو العاطفة، حانون، يصنعون مساحات آمنة. يحتاجون إلى الأمان العاطفي وقد يتقلّبون. |
| 794 | Naturally harmonious and stable | منسجم وثابت بطبعه |
| 795 | Needs from: | يحتاج من: |
| 796 | Passionate, spontaneous, energetic, inspiring, assertive | شغوف، عفويّ، نشيط، ملهِم، مقدام |
| 797 | Personality Balance (Elemental Temperament) | توازن الشخصية (الطبع العنصري) |
| 798 | Practical, stable, reliable, patient, methodical | عمليّ، ثابت، موثوق، صبور، منهجيّ |
| 799 | Qualities: | الصفات: |
| 800 | Rock-solid but may lack excitement | متين كالصخر لكنه قد يفتقر إلى الحماسة |
| 801 | Saturn (conflicting approaches), Neptune (lack of boundaries) | زحل (تعارض الأساليب)، نبتون (غياب الحدود) |
| 802 | Saturn (dampens enthusiasm), another Sun (competing egos) | زحل (يُخمد الحماسة)، شمس أخرى (تنافس الأنا) |
| 803 | Saturn (frustrating restrictions), another Mars (constant conflict) | زحل (قيود محبطة)، مريخ آخر (صراع دائم) |
| 804 | Saturn (restricts expression), Neptune (creates confusion) | زحل (يقيّد التعبير)، نبتون (يصنع الالتباس) |
| 805 | Saturn people are reliable, serious, and build lasting foundations. They need respect and can be emotionally reserved. | أهل زحل موثوقون جادّون يبنون أسسًا دائمة. يحتاجون إلى الاحترام وقد يكونون متحفّظين عاطفيًا. |
| 806 | Scores below 65 indicate different spiritual orientations or life purposes. This doesn't mean incompatibility—many successful relationships thrive here—but requires conscious effort. You may need to actively create shared spiritual practices and respect that faith looks different for each of you. | النتائج دون 65 تشير إلى اختلاف في التوجّه الروحي أو غايات الحياة. ولا يعني ذلك عدم التوافق — فكثير من العلاقات الناجحة تزدهر هنا — لكنه يتطلّب جهدًا واعيًا. وقد تحتاجان إلى صنع ممارسات روحية مشتركة واحترام أن الإيمان يظهر عند كلٍّ منكما بصورة مختلفة. |
| 807 | Scores of 65-84 show good spiritual potential with some effort needed. Your core values align, but you may express spirituality differently. One might be more outwardly devout while the other is quietly contemplative. Understanding and respecting these differences creates beautiful balance. | النتائج بين 65 و84 تُظهر إمكانات روحية جيدة مع شيء من الجهد. قيمكما الأساسية منسجمة، لكن قد يعبّر كلٌّ منكما عن روحانيته بطريقة مختلفة: فقد يكون أحدكما أظهر تعبّدًا والآخر متأمّلًا في هدوء. وفهم هذه الفروق واحترامها يصنع توازنًا جميلًا. |
| 808 | Scores of 85-100 indicate exceptional spiritual alignment. You share similar life purposes, values, and spiritual orientations. You naturally support each other's growth without forcing it. Spiritual conversations flow easily. You may finish each other's sentences or sense each other's emotional states intuitively. | النتائج بين 85 و100 تشير إلى انسجام روحي استثنائي. تشتركان في غايات الحياة والقيم والتوجّه الروحي، ويدعم كلٌّ منكما نموّ الآخر دون تكلّف. والأحاديث الروحية تنساب بيسر، وقد يُتمّ أحدكما جملة الآخر أو يستشعر حاله العاطفية بالفطرة. |
| 809 | Soul Connection (Spiritual Destiny) | صلة الأرواح (المسار الروحي) |
| 810 | Soul Connection analyzes the numerical essence of your names to reveal spiritual compatibility. In Islamic numerology, each letter carries a sacred value that represents divine attributes. When we calculate your combined spiritual number, we discover how naturally your souls resonate. | تحلّل صلة الأرواح الجوهر العددي لاسميكما لتكشف التوافق الروحي. ففي علم العدد لكل حرف قيمة ترتبط بمعانٍ روحية. وحين نحسب عددكما الروحي المجتمع نكتشف مدى الرنين الطبيعي بين روحيكما. |
| 811 | Sun (mutual respect), Jupiter (shared enthusiasm), Venus (balancing softness) | الشمس (الاحترام المتبادل)، المشتري (الحماسة المشتركة)، الزهرة (اللين الموازن) |
| 812 | Sun (mutual warmth), Mercury (intellectual exploration), Venus (shared appreciation) | الشمس (الدفء المتبادل)، عطارد (الاستكشاف الفكري)، الزهرة (التقدير المشترك) |
| 813 | Sun people bring warmth, generosity, and inspiring energy. They need admiration and tend to take center stage. | أهل الشمس يجلبون الدفء والكرم والطاقة الملهِمة. يحتاجون إلى الإعجاب ويميلون إلى تصدّر المشهد. |
| 814 | The Planets and Their Influences | الكواكب وصلاتها |
| 815 | The four elements—Fire, Water, Air, Earth—represent fundamental personality types. Your elemental makeup determines how you approach life, relationships, and challenges. | العناصر الأربعة — النار والماء والهواء والتراب — تمثّل أنماط الشخصية الأساسية. وتركيبك العنصري يصف طريقتك في مواجهة الحياة والعلاقات والتحدّيات. |
| 816 | Traditional Islamic astronomy recognized seven celestial influences: Sun (identity, vitality), Moon (emotions, intuition), Mercury (communication, intellect), Venus (love, beauty), Mars (action, courage), Jupiter (wisdom, expansion), Saturn (discipline, structure). | عرف علم الفلك الإسلامي التقليدي سبعة أجرام سماوية: الشمس (الهوية، الحيوية)، القمر (العاطفة، الحدس)، عطارد (التواصل، العقل)، الزهرة (المحبّة، الجمال)، المريخ (العمل، الشجاعة)، المشتري (الحكمة، الاتساع)، زحل (الانضباط، البنية). |
| 817 | Traits: | السمات: |
| 818 | Ultimate stability and reliability. Shared practical values. Risk: routine becoming rut. Need to consciously inject novelty and spontaneity. | غاية الثبات والموثوقية، وقيم عملية مشتركة. والخطر: أن تصير العادة رتابة. يحتاجان إلى إدخال التجديد والعفوية بوعي. |
| 819 | Understanding Planetary Influence | فهم الصلة الكوكبية |
| 820 | Understanding Your Elemental Dance | فهم رقصتكما العنصرية |
| 821 | Use this understanding to: 1) Appreciate why certain spiritual topics connect or create friction, 2) Find shared spiritual practices that honor both paths, 3) Support each other's individual spiritual journey without forcing similarity, 4) Create family spiritual traditions that blend both approaches. | استعمل هذا الفهم من أجل: 1) تقدير سبب تلاقي بعض الموضوعات الروحية أو احتكاكها، 2) إيجاد ممارسات روحية مشتركة تحترم الطريقين، 3) دعم رحلة كلٍّ منكما الروحية الفردية دون فرض التشابه، 4) صنع تقاليد روحية عائلية تمزج النهجين. |
| 822 | Venus (charming dialogue), Jupiter (philosophical exchange), Uranus (innovative thinking) | الزهرة (حوار لطيف)، المشتري (تبادل فلسفي)، أورانوس (تفكير مبتكر) |
| 823 | Venus (mutual gentleness), Neptune (spiritual connection), Sun (complementary) | الزهرة (لين متبادل)، نبتون (صلة روحية)، الشمس (تكامل) |
| 824 | Venus (softening influence), Earth placements (shared practicality) | الزهرة (أثر مليّن)، مواضع ترابية (عملية مشتركة) |
| 825 | Venus people are romantic, affectionate, and seek peace. They value aesthetics and can avoid necessary conflict. | أهل الزهرة رومانسيون ودودون يطلبون السلام. يقدّرون الجمال وقد يتجنّبون الخلاف الضروري. |
| 826 | Water (emotional grounding), Earth (practical application), Fire (decisive action) | الماء (تثبيت عاطفي)، التراب (تطبيق عملي)، النار (عمل حاسم) |
| 827 | What Moderate Compatibility Means | ما معنى التوافق المعتدل |
| 828 | Wisdom, expansion, optimism, generosity, faith | الحكمة، الاتساع، التفاؤل، الكرم، الإيمان |
| 829 | ⛰️ Earth Element | ⛰️ عنصر التراب |
| 830 | 💧 Water Element | 💧 عنصر الماء |
| 831 | 💨 Air Element | 💨 عنصر الهواء |
