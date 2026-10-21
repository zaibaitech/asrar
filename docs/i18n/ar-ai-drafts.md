# Arabic AI-draft strings — review status

Rows marked **✅ reviewed** were checked by the Language Reviewer (Oct 2026, see `/workspace/ar-review`) and their corrections applied. Rows marked **AI-draft** still need native-speaker review. All rows are live in the `/ar` UI via `public/i18n/ar-ui.json`. To correct a row, edit `scripts/i18n/ar/ai_drafts.json` (or `manual.json`), then run `python3 scripts/i18n/ar/build_catalog.py`.

Conventions: Divine Names use the canonical Arabic. Qur'ān lines use the original text (imlāʾī spelling, full tashkīl), with references written as (surah name + āyah number). Ṣalawāt/duʿāʾ are listed separately: they are not Qur'ān. Terms: صاحب اليوم (day ruler), مداري (tropical), وِرد (practice), يُردَّد (recite).

Counts: 65 Qur'anic lines (reviewed), 9 ṣalawāt/duʿāʾ (reviewed), 512 Divine-Name mappings (reviewed), 5231 UI strings (150 reviewed, 5081 AI-draft).

## Qur'anic lines (✅ reviewed: checked against the muṣḥaf)

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
| And in the sky is your provision and whatever you are promised | وَفِي السَّمَاءِ رِزْقُكُمْ وَمَا تُوعَدُونَ |
| Wa fī as-samāʾi rizqukum wa mā tūʿadūn | وَفِي السَّمَاءِ رِزْقُكُمْ وَمَا تُوعَدُونَ |
| Allah will bring about ease after hardship | سَيَجْعَلُ اللَّهُ بَعْدَ عُسْرٍ يُسْرًا |
| Be patient, for Allah does not waste the reward | وَاصْبِرْ فَإِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ |
| Hearts find rest in the remembrance of Allah. | أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ |
| The dhikr of Allah is the greatest. | وَلَذِكْرُ اللَّهِ أَكْبَرُ |
| Glorify Allah morning and evening. | وَسَبِّحُوهُ بُكْرَةً وَأَصِيلًا |
| Embrace sacred change. Reflect: "Everything changes except the Face of God." | كُلُّ شَيْءٍ هَالِكٌ إِلَّا وَجْهَهُ |
| Allah will not change the condition of a people until they change themselves (13:11) | إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ (الرعد 11) |
| He gives wisdom to whom He wills (2:269) | يُؤْتِي الْحِكْمَةَ مَن يَشَاءُ (البقرة 269) |
| This day I have perfected your religion for you (5:3) | الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ (المائدة 3) |
| Say: He is Allah, the One and Only | قُلْ هُوَ اللَّهُ أَحَدٌ |
| And We have enjoined upon man goodness to his parents | وَوَصَّيْنَا الْإِنسَانَ بِوَالِدَيْهِ إِحْسَانًا |
| So relate the stories, perhaps they will reflect | فَاقْصُصِ الْقَصَصَ لَعَلَّهُمْ يَتَفَكَّرُونَ |
| And We have made the heaven a guarded canopy | وَجَعَلْنَا السَّمَاءَ سَقْفًا مَّحْفُوظًا |
| And We have created you in pairs | وَخَلَقْنَاكُمْ أَزْوَاجًا |
| And lower to them the wing of humility out of mercy | وَاخْفِضْ لَهُمَا جَنَاحَ الذُّلِّ مِنَ الرَّحْمَةِ |
| Indeed, in the creation of the heavens and earth are signs for those of understanding | إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِّأُولِي الْأَلْبَابِ |
| And to Allah belongs the dominion of the heavens and the earth | وَلِلَّهِ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ |
| And spend in the way of Allah and do not throw yourselves into destruction | وَأَنفِقُوا فِي سَبِيلِ اللَّهِ وَلَا تُلْقُوا بِأَيْدِيكُمْ إِلَى التَّهْلُكَةِ |
| Allah is the Light of the heavens and the earth | اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ |
| And We made from water every living thing | وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ |
| Indeed, Allah is with those who are patient | إِنَّ اللَّهَ مَعَ الصَّابِرِينَ |
| By the Sun and its brightness (Wa ash-shamsi wa ḍuḥāhā) - Surah 91:1 | وَالشَّمْسِ وَضُحَاهَا (الشمس 1) |
| And the Moon - We have determined for it phases until it returns appearing like an old date palm stalk. (Quran 36:39) | وَالْقَمَرَ قَدَّرْنَاهُ مَنَازِلَ حَتَّىٰ عَادَ كَالْعُرْجُونِ الْقَدِيمِ (يس 39) |
| Say: He is Allah, the One (112:1) - Unity and singularity | قُلْ هُوَ اللَّهُ أَحَدٌ (الإخلاص 1) - الوحدانية والتفرّد |
| And hold fast to the rope of Allah together (3:103) | وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا (آل عمران 103) |
| He is the Originator of the heavens and earth (2:117) | بَدِيعُ السَّمَاوَاتِ وَالْأَرْضِ (البقرة 117) |
| So set your face to the religion, as one by nature upright (30:30) | فَأَقِمْ وَجْهَكَ لِلدِّينِ حَنِيفًا (الروم 30) |
| Allah will bring about ease after hardship (65:7) | سَيَجْعَلُ اللَّهُ بَعْدَ عُسْرٍ يُسْرًا (الطلاق 7) |
| The servants of the Most Merciful are those who walk upon the earth in humility (25:63) | وَعِبَادُ الرَّحْمَٰنِ الَّذِينَ يَمْشُونَ عَلَى الْأَرْضِ هَوْنًا (الفرقان 63) |
| Say: Travel through the earth and observe how He began creation (29:20) | قُلْ سِيرُوا فِي الْأَرْضِ فَانظُرُوا كَيْفَ بَدَأَ الْخَلْقَ (العنكبوت 20) |
| And seek, through that which Allah has given you, the home of the Hereafter (28:77) | وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ (القصص 77) |
| Light upon light. Allah guides to His light whom He wills (24:35) | نُورٌ عَلَىٰ نُورٍ ۗ يَهْدِي اللَّهُ لِنُورِهِ مَن يَشَاءُ (النور 35) |
| And We placed on earth anchors lest it shake with you (21:31) | وَجَعَلْنَا فِي الْأَرْضِ رَوَاسِيَ أَن تَمِيدَ بِهِمْ (الأنبياء 31) |
| And those who believe and whose families follow them in faith (52:21) | وَالَّذِينَ آمَنُوا وَاتَّبَعَتْهُمْ ذُرِّيَّتُهُم بِإِيمَانٍ (الطور 21) |
| By the sun and its brightness | وَالشَّمْسِ وَضُحَاهَا |
| And the moon - We have determined for it phases | وَالْقَمَرَ قَدَّرْنَاهُ مَنَازِلَ |
| He gives wisdom to whom He wills, and whoever has been given wisdom has certainly been given much good | يُؤْتِي الْحِكْمَةَ مَن يَشَاءُ ۚ وَمَن يُؤْتَ الْحِكْمَةَ فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا |
| And He is the Forgiving, the Loving | وَهُوَ الْغَفُورُ الْوَدُودُ |
| If there are among you twenty who are patient and steadfast, they will overcome two hundred | إِن يَكُن مِّنكُمْ عِشْرُونَ صَابِرُونَ يَغْلِبُوا مِائَتَيْنِ |
| The example of those who spend in the way of Allah is like a seed which grows seven spikes | مَثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ |
| My Lord, increase me in knowledge. | رَبِّ زِدْنِي عِلْمًا |
| Allāhu lā ilāha illā Huwa al-Ḥayyu al-Qayyūm | اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ |
| Allah - there is no deity except Him, the Ever-Living, the Sustainer | اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ |
| Say: He is Allah, the One | قُلْ هُوَ اللَّهُ أَحَدٌ |
| Wa nunazzilu mina al-Qur'āni mā huwa shifā'un wa raḥmah | وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ |
| And We send down from the Quran that which is healing and mercy | وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ |
| So which of the favors of your Lord would you deny? | فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ |
| Allah does not burden a soul beyond what it can bear | لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا |
| Inna ma'a al-'usri yusrā | إِنَّ مَعَ الْعُسْرِ يُسْرًا |
| Say: O Allah, Owner of Sovereignty | قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ |
| Our Lord, grant us mercy from Yourself | رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً |

## Ṣalawāt and duʿāʾ (✅ reviewed: not Qur'ān; previously filed as Qur'an)

| English | Arabic |
|---|---|
| Allāhumma ṣalli ʿalā Muḥammadin wa ʿalā āli Muḥammad, kamā ṣallayta ʿalā Ibrāhīma wa ʿalā āli Ibrāhīm, innaka Ḥamīdun Majīd. Allāhumma bārik ʿalā Muḥammadin wa ʿalā āli Muḥammad, kamā bārakta ʿalā Ibrāhīma wa ʿalā āli Ibrāhīm, innaka Ḥamīdun Majīd. | اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ. اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ |
| Allāhumma ṣalli ʿalā Sayyidinā Muḥammadini l-fātiḥi limā ughliq, wal-khātimi limā sabaqa, nāṣiri l-ḥaqqi bil-ḥaqq, wal-hādī ilā ṣirāṭika l-mustaqīm, wa ʿalā ālihi ḥaqqa qadrihi wa miqdārihil-ʿaẓīm. | اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ الْفَاتِحِ لِمَا أُغْلِقَ، وَالْخَاتِمِ لِمَا سَبَقَ، نَاصِرِ الْحَقِّ بِالْحَقِّ، وَالْهَادِي إِلَى صِرَاطِكَ الْمُسْتَقِيمِ، وَعَلَى آلِهِ حَقَّ قَدْرِهِ وَمِقْدَارِهِ الْعَظِيمِ |
| Allāhumma ṣalli ʿalā man minhu nshaqqatil-asrār, wa nfalaqatil-anwār, wa fīhi rtaqatil-ḥaqāʾiq, wa tanazzalat ʿulūmu Ādam fa-aʿjazal-khalāʾiq, wa lahu taḍāʾalatil-fuhūm, fa-lam yudrikhu minnā sābiqun wa lā lāḥiq. | اللَّهُمَّ صَلِّ عَلَى مَنْ مِنْهُ انْشَقَّتِ الْأَسْرَارُ، وَانْفَلَقَتِ الْأَنْوَارُ، وَفِيهِ ارْتَقَتِ الْحَقَائِقُ، وَتَنَزَّلَتْ عُلُومُ آدَمَ فَأَعْجَزَ الْخَلَائِقَ، وَلَهُ تَضَاءَلَتِ الْفُهُومُ، فَلَمْ يُدْرِكْهُ مِنَّا سَابِقٌ وَلَا لَاحِقٌ |
| May Allah send blessings upon Muḥammad — the one described with nobility and generosity. | اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ الْمَوْصُوفِ بِالْكَرَمِ وَالْجُودِ |
| May Allah send blessings upon Muḥammad — his light has dawned for the heart, and his appearance is a mercy to all the worlds. | صَلَّى اللَّهُ عَلَى مُحَمَّدٍ، أَصْبَحَ لِلْقَلْبِ نُورُهُ، وَرَحْمَةً لِلْعَالَمِينَ ظُهُورُهُ |
| O Ever-Living, O Sustainer of all, by Your mercy I seek relief. | يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ |
| Adhhib al-baʾs, Rabb an-nās, ishfi anta ash-Shāfī, lā shifāʾa illā shifāʾuk, shifāʾan lā yughādiru saqamā | أَذْهِبِ الْبَأْسَ رَبَّ النَّاسِ، اشْفِ أَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا |
| Allāhumma innaka ʿAfuwwun tuḥibbu al-ʿafwa fa-ʿfu ʿannī | اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي |
| O Allah, You are Pardoning and You love pardon, so pardon me. | اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي |

## Divine-Name mappings (✅ reviewed)

| English / transliteration | Arabic |
|---|---|
| Al-'Alīm | الْعَلِيم |
| Al-'Alīm (The All-Knowing) | الْعَلِيم |
| Al-'Azīz | الْعَزِيز |
| Al-'Azīz (The Almighty) | الْعَزِيز |
| Al-Ahad (L'Unique) | الْأَحَد |
| Al-Ahad (The One) | الْأَحَد |
| Al-Awwal | الْأَوَّل |
| Al-Awwal (The First) | الْأَوَّل |
| Al-Aḥad | الْأَحَد |
| Al-Aḥad (The Unique) | الْأَحَد |
| Al-Badīʿ | الْبَدِيع |
| Al-Badīʿ (The Incomparable Originator) | الْبَدِيع |
| Al-Barr | الْبَرّ |
| Al-Barr (The Source of All Goodness) | الْبَرّ |
| Al-Baṣīr | الْبَصِير |
| Al-Baṣīr (The All-Seeing) | الْبَصِير |
| Al-Bāqī | الْبَاقِي |
| Al-Bāqī (The Everlasting) | الْبَاقِي |
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
| Al-Māniʿ | الْمَانِع |
| Al-Māniʿ (The Preventer of Harm) | الْمَانِع |
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
| Al-Wāḥid | الْوَاحِد |
| Al-Wāḥid (The One) | الْوَاحِد |
| Al-Ākhir | الْآخِر |
| Al-Ākhir (The Last) | الْآخِر |
| Al-ʿAdl | الْعَدْل |
| Al-ʿAdl (The Just) | الْعَدْل |
| Al-ʿAfuww | الْعَفُوّ |
| Al-ʿAfuww (The Pardoner) | الْعَفُوّ |
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
| Al-Ḥasīb | الْحَسِيب |
| Al-Ḥasīb (The Reckoner) | الْحَسِيب |
| Al-Ḥayy | الْحَيّ |
| Al-Ḥayy (The Ever-Living) | الْحَيّ |
| An-Nur (The Light) | النُّور |
| An-Nāfiʿ | النَّافِع |
| An-Nāfiʿ (The Bestower of Benefit) | النَّافِع |
| An-Nūr | النُّور |
| An-Nūr (The Light) | النُّور |
| Ar-Rahman (The Most Merciful) | الرَّحْمَٰن |
| Ar-Raqīb | الرَّقِيب |
| Ar-Raqīb (The Watchful) | الرَّقِيب |
| Ar-Rashīd | الرَّشِيد |
| Ar-Rashīd (The Guide to the Right Path) | الرَّشِيد |
| Ar-Razzāq | الرَّزَّاق |
| Ar-Razzāq (The Provider) | الرَّزَّاق |
| Ar-Raʾūf | الرَّؤُوف |
| Ar-Raʾūf (The Clement) | الرَّؤُوف |
| Ar-Raḥmān | الرَّحْمَٰن |
| Ar-Raḥmān (The Most Gracious) | الرَّحْمَٰن |
| Ar-Raḥmān (The Most Merciful) | الرَّحْمَٰن |
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
| At-Tawwāb | التَّوَّاب |
| At-Tawwāb (The Guide to Repentance) | التَّوَّاب |
| Aḍ-Ḍārr | الضَّارّ |
| Aḍ-Ḍārr (The One Who Creates Harm) | الضَّارّ |
| Aṣ-Ṣabūr | الصَّبُور |
| Aṣ-Ṣabūr (The Patient) | الصَّبُور |
| Aṣ-Ṣamad | الصَّمَد |
| Aṣ-Ṣamad (The Eternal Refuge) | الصَّمَد |
| Aẓ-Ẓāhir | الظَّاهِر |
| Aẓ-Ẓāhir (The Manifest) | الظَّاهِر |
| Dhū al-Jalāli wa al-Ikrām | ذُو الْجَلَالِ وَالْإِكْرَامِ |
| Dhū al-Jalāli wa al-Ikrām (Lord of Majesty and Generosity) | ذُو الْجَلَالِ وَالْإِكْرَامِ |
| Lord of Majesty and Generosity | ذُو الْجَلَالِ وَالْإِكْرَامِ |
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
| The Everlasting | الْبَاقِي |
| The Evolver | الْبَارِئ |
| The Exalter | الرَّافِع |
| The Expediter | الْمُقَدِّم |
| The Extender | الْبَاسِط |
| The Fashioner | الْمُصَوِّر |
| The Finder | الْوَاجِد |
| The First | الْأَوَّل |
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
| The Guide to Repentance | التَّوَّاب |
| The Guide to the Right Path | الرَّشِيد |
| The Hidden | الْبَاطِن |
| The Humiliator | الْمُذِلّ |
| The Incomparable Originator | الْبَدِيع |
| The Inheritor | الْوَارِث |
| The Judge | الْحَكَم |
| The Just | الْعَدْل |
| The King | الْمَلِك |
| The Last | الْآخِر |
| The Light | النُّور |
| The Magnificent | الْعَظِيم |
| The Majestic | الْجَلِيل |
| The Manifest | الظَّاهِر |
| The Most Glorious | الْمَجِيد |
| The Most Gracious | الرَّحْمَٰن |
| The Most High | الْعَلِيّ |
| The Most Holy | الْقُدُّوس |
| The Most Loving | الْوَدُود |
| The Most Merciful | الرَّحِيم |
| The Most Strong | الْقَوِيّ |
| The Nourisher | الْمُقِيت |
| The Oft-Forgiving | الْغَفَّار |
| The One | الْوَاحِد |
| The One Who Creates Harm | الضَّارّ |
| The Opener | الْفَتَّاح |
| The Originator | الْمُبْدِئ |
| The Pardoner | الْعَفُوّ |
| The Patient | الصَّبُور |
| The Perfectly Wise | الْحَكِيم |
| The Powerful | الْقَادِر |
| The Praiseworthy | الْحَمِيد |
| The Preserver | الْحَفِيظ |
| The Preventer of Harm | الْمَانِع |
| The Protecting Friend | الْوَلِيّ |
| The Provider | الرَّزَّاق |
| The Reckoner | الْحَسِيب |
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
| The Unique | الْأَحَد |
| The Watchful | الرَّقِيب |
| The Withholder | الْقَابِض |
| The Witness | الشَّهِيد |
| Ya 'Alīm | يا عليم |
| Ya 'Azīz | يا عزيز |
| Ya Awwal | يا أول |
| Ya Aḥad | يا أحد |
| Ya Badīʿ | يا بديع |
| Ya Barr | يا بر |
| Ya Baṣīr | يا بصير |
| Ya Bāqī | يا باقي |
| Ya Bāri' | يا بارئ |
| Ya Bāsiṭ | يا باسط |
| Ya Bāʿith | يا باعث |
| Ya Bāṭin | يا باطن |
| Ya Dhū al-Jalāli wa al-Ikrām | يا ذا الجلال والإكرام |
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
| Yā Aḥad | يا أحد |
| Yā Badīʿ | يا بديع |
| Yā Barr | يا بر |
| Yā Baṣīr | يا بصير |
| Yā Bāqī | يا باقي |
| Yā Bāri' | يا بارئ |
| Yā Bāsiṭ | يا باسط |
| Yā Bāʿith | يا باعث |
| Yā Bāṭin | يا باطن |
| Yā Dhū al-Jalāli wa al-Ikrām | يا ذا الجلال والإكرام |
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

## UI strings

| # | Status | English | Arabic |
|---|---|---|---|
| 1 | AI-draft | Abjad value: | قيمة الأبجد: |
| 2 | AI-draft | All 99 Names of Allah in Arabic with transliteration, English meaning and Abjad (ḥisāb al-jummal) value, plus how the Names appear in your name-and-mother burj. | أسماء الله الحسنى التسعة والتسعون بالعربية مع النقل الحرفي والمعنى الإنجليزي وقيمة الأبجد (حساب الجمل)، وكيف تظهر الأسماء في برج الاسم واسم الأم. |
| 3 | AI-draft | Common names such as Muhammad, Ali, Fatima and Maryam. | أسماء شائعة مثل محمد وعلي وفاطمة ومريم. |
| 4 | AI-draft | Each Name in Arabic with its transliteration, meaning and Abjad value. Your burj in the | كل اسم بالعربية مع نقله الحرفي ومعناه وقيمته في الأبجد. وبرجك في |
| 5 | AI-draft | Each of the 12 burūj in the name-and-mother calculator comes with Divine Names for dhikr, for example Yā Raḥmān, Yā Raḥīm for Cancer (al-Saraṭān). Find your burj with the calculator to see yours. | يأتي كل برج من البروج الاثني عشر في حاسبة الاسم واسم الأم بأسماء حسنى للذكر، مثل: يا رحمن، يا رحيم لبرج السرطان. اعرف برجك بالحاسبة لترى أسماءك. |
| 6 | AI-draft | How are the Abjad values of the Names calculated here? | كيف تُحسب قيم الأبجد للأسماء هنا؟ |
| 7 | AI-draft | How are the Names linked to my burj? | كيف ترتبط الأسماء ببرجي؟ |
| 8 | AI-draft | Is this page for prediction or for amulets? | هل هذه الصفحة للتنبّؤ أو للتمائم؟ |
| 9 | AI-draft | Muslim Names: Abjad Value and Burj | أسماء المسلمين: قيمة الأبجد والبرج |
| 10 | AI-draft | The 99 Names of Allah | أسماء الله الحسنى التسعة والتسعون |
| 11 | AI-draft | The 99 Names of Allah (Asmāʾ al-Ḥusnā) | أسماء الله الحسنى التسعة والتسعون |
| 12 | AI-draft | The 99 Names of Allah (Asmāʾ al-Ḥusnā): Meanings & Abjad Values | أسماء الله الحسنى التسعة والتسعون: المعاني وقيم الأبجد |
| 13 | AI-draft | The Abjad calculator counts every letter you type, including "al-", and uses the Maghribi table by default, so its total can differ from the value listed here. | تحسب حاسبة الأبجد كل حرف تكتبه، بما في ذلك «ال»، وتستعمل الجدول المغربي افتراضيًا، فقد يختلف مجموعها عن القيمة المذكورة هنا. |
| 14 | AI-draft | The Arabic text and order follow the widely used compilation drawn from the hadith of al-Walīd in Jāmiʿ al-Tirmidhī (no. 3507). | النص العربي والترتيب وفق الجمع المشهور المأخوذ من حديث الوليد في جامع الترمذي (رقم 3507). |
| 15 | AI-draft | Where does this list of the 99 Names come from? | من أين جاءت هذه القائمة للأسماء الحسنى؟ |
| 16 | AI-draft | Your burj, element, blessed day and the Divine Names for its dhikr. | برجك وعنصرك ويومك المبارك والأسماء الحسنى لذكره. |
| 17 | AI-draft | also comes with Divine Names for dhikr. | يأتي أيضًا بأسماء حسنى للذكر. |
| 18 | AI-draft | name-and-mother calculator | حاسبة الاسم واسم الأم |
| 19 | AI-draft | › 99 Names of Allah | › أسماء الله الحسنى |
| 20 | AI-draft | Abjad Calculator — ʿIlm al-Ḥurūf Letter Numerology | حاسبة الأبجد — علم الحروف |
| 21 | AI-draft | Choose a calculator type below, enter an Arabic name or phrase (or type it in Latin letters and let the tool transliterate it), and read the total value, the letter-by-letter breakdown and the elemental analysis. | اختر نوع الحاسبة أدناه، وأدخل اسمًا أو عبارة عربية (أو اكتبها بالحروف اللاتينية لتحوّلها الأداة)، ثم اقرأ القيمة الكلية والتفصيل حرفًا حرفًا وتحليل العناصر. |
| 22 | AI-draft | Classical electional astrology for choosing an auspicious date. | علم الاختيارات الكلاسيكي لاختيار تاريخ مبارك. |
| 23 | AI-draft | Free Abjad calculator: find the ʿilm al-ḥurūf numerical value of any Arabic name or phrase, with letter-by-letter breakdown, elemental balance and Maghribi or Mashriqi systems. | حاسبة أبجد مجانية: اعرف القيمة العددية في علم الحروف لأي اسم أو عبارة عربية، مع التفصيل حرفًا حرفًا وتوازن العناصر والنظامين المغربي والمشرقي. |
| 24 | AI-draft | How Abjad relates to Islamic letter-numerology | صلة الأبجد بعلم الحروف |
| 25 | AI-draft | The Abjad system assigns a number to each letter of the Arabic alphabet: alif is 1, bāʾ is 2, jīm is 3, and so on up to ghayn at 1000. Adding the values of the letters in a word gives its ḥisāb al-jummal, the "sum total" used for centuries in the Islamic sciences. | يجعل نظام الأبجد لكل حرف من حروف العربية عددًا: الألف 1، والباء 2، والجيم 3، وهكذا حتى الغين 1000. ومجموع قيم حروف الكلمة هو «حساب الجمل» الذي استُعمل قرونًا في العلوم الإسلامية. |
| 26 | AI-draft | The full Asrār app: planetary timing, calculators and dhikr. | تطبيق أسرار الكامل: التوقيت الكوكبي والحاسبات والذكر. |
| 27 | AI-draft | Using the calculator | استعمال الحاسبة |
| 28 | AI-draft | Find Your Burj from Your Name & Mother's Name | اعرف برجك من اسمك واسم أمك |
| 29 | AI-draft | Planetary Hours Today | الساعات الكوكبية اليوم |
| 30 | AI-draft | Authentication is optional. You can | تسجيل الدخول اختياري. يمكنك |
| 31 | AI-draft | Build Time: | وقت البناء: |
| 32 | AI-draft | Email Address | البريد الإلكتروني |
| 33 | AI-draft | Enter your email to reset your password | أدخل بريدك الإلكتروني لإعادة تعيين كلمة المرور |
| 34 | AI-draft | Key Length: | طول المفتاح: |
| 35 | AI-draft | Sign in to continue your journey | سجّل الدخول لمتابعة رحلتك |
| 36 | AI-draft | URL Value: | قيمة الرابط: |
| 37 | AI-draft | use this app | استعمال هذا التطبيق |
| 38 | AI-draft | without an account. | دون حساب. |
| 39 | AI-draft | ✓ Set | ✓ مضبوط |
| 40 | AI-draft | (UTC+3), computed for this page load. | (UTC+3)، محسوبة عند تحميل هذه الصفحة. |
| 41 | AI-draft | (the app's default location) with the same engine as the "Find Best Dates" scanner: days rated Acceptable or better with no ruling-out condition, within the next 90 days. Times are | (الموقع الافتراضي للتطبيق) بالمحرّك نفسه الذي يستعمله ماسح «ابحث عن أفضل التواريخ»: الأيام المقدّرة «مقبول» فما فوق دون شرط مُستبعِد، خلال الأيام التسعين القادمة. الأوقات |
| 42 | AI-draft | Computed now for | محسوبة الآن لـ |
| 43 | AI-draft | No day in the next 90 days reaches Acceptable without a ruling-out condition. Use the tool below to see the least-afflicted options for your location. | لا يبلغ أي يوم في الأيام التسعين القادمة درجة «مقبول» دون شرط مُستبعِد. استعمل الأداة أدناه لترى أقل الخيارات تأثّرًا لموقعك. |
| 44 | AI-draft | The coming hours of | الساعات القادمة لـ |
| 45 | AI-draft | The interactive ikhtiyārāt tool, set to this purpose. It uses your location if you allow it (otherwise Makkah). | أداة الاختيارات التفاعلية، مضبوطة على هذا الغرض. تستعمل موقعك إن سمحت بذلك (وإلا فمكة المكرمة). |
| 46 | AI-draft | earns a bonus. Each planetary hour is one twelfth of daytime or night, so the clock times change with the seasons and your location. | تنال نقاطًا إضافية. وكل ساعة كوكبية جزء من اثني عشر من النهار أو الليل، فتتغيّر أوقاتها بحسب الفصول وموقعك. |
| 47 | AI-draft | hour of | ساعة |
| 48 | AI-draft | time (UTC+3). | بتوقيت (UTC+3). |
| 49 | AI-draft | "Allāhumma bārik li-ummatī fī bukūrihā" — O Allah, bless my ummah in its early mornings (early departure, bukūr). | «اللهم بارك لأمتي في بكورها» (البكور في الخروج). |
| 50 | AI-draft | ) the classical ikhtiyārāt rules favour for a nikāḥ, plus the next favourable dates. For reflection, not prediction. | ) التي ترجّحها قواعد الاختيارات الكلاسيكية لعقد النكاح، مع أقرب التواريخ المناسبة. للتأمّل لا للتنبّؤ. |
| 51 | AI-draft | ) the classical ikhtiyārāt rules favour for moving into a new home or laying a foundation, plus the next favourable dates. | ) التي ترجّحها قواعد الاختيارات الكلاسيكية للانتقال إلى منزل جديد أو وضع الأساس، مع أقرب التواريخ المناسبة. |
| 52 | AI-draft | ) the classical ikhtiyārāt rules favour for starting a business or signing a contract, plus the next favourable dates. | ) التي ترجّحها قواعد الاختيارات الكلاسيكية لبدء مشروع تجاري أو توقيع عقد، مع أقرب التواريخ المناسبة. |
| 53 | AI-draft | ) the ikhtiyārāt rules favour for a journey, plus the next favourable dates. | ) التي ترجّحها قواعد الاختيارات للسفر، مع أقرب التواريخ المناسبة. |
| 54 | AI-draft | ), followed by | )، يليه |
| 55 | AI-draft | Below are the weekdays and planetary hours the Asrār "Business / Contracts" rules favour, the conditions they rule out, and the next favourable dates — recalculated every time this page loads. | فيما يلي أيام الأسبوع والساعات الكوكبية التي ترجّحها قواعد أسرار «التجارة / العقود»، والشروط التي تستبعدها، وأقرب التواريخ المناسبة — يُعاد حسابها عند كل تحميل للصفحة. |
| 56 | AI-draft | Below are the weekdays and planetary hours the Asrār "Moving / Building" rules favour, the conditions they rule out, and the next favourable dates — recalculated every time this page loads. | فيما يلي أيام الأسبوع والساعات الكوكبية التي ترجّحها قواعد أسرار «الانتقال / البناء»، والشروط التي تستبعدها، وأقرب التواريخ المناسبة — يُعاد حسابها عند كل تحميل للصفحة. |
| 57 | AI-draft | Below are the weekdays and planetary hours the Asrār ikhtiyārāt rules favour for marriage, the conditions they rule out, and the next dates the same engine rates favourable — recalculated every time this page loads. | فيما يلي أيام الأسبوع والساعات الكوكبية التي ترجّحها قواعد الاختيارات في أسرار للزواج، والشروط التي تستبعدها، وأقرب التواريخ التي يقدّرها المحرّك نفسه مناسبة — يُعاد حسابها عند كل تحميل للصفحة. |
| 58 | AI-draft | Best Day for Nikah in Islam: Days & Hours for Marriage | أفضل يوم للنكاح في الإسلام: الأيام والساعات للزواج |
| 59 | AI-draft | Best Day to Move Home — Favourable Days and Hours in Ikhtiyārāt | أفضل يوم للانتقال إلى منزل جديد — الأيام والساعات المناسبة في الاختيارات |
| 60 | AI-draft | Best Day to Move House: Favourable Days & Hours (Ikhtiyārāt) | أفضل يوم لنقل السكن: الأيام والساعات المناسبة (الاختيارات) |
| 61 | AI-draft | Best Day to Start a Business or Sign a Contract (Ikhtiyārāt) | أفضل يوم لبدء مشروع تجاري أو توقيع عقد (الاختيارات) |
| 62 | AI-draft | Best Day to Start a Business — Favourable Days and Hours in Ikhtiyārāt | أفضل يوم لبدء مشروع تجاري — الأيام والساعات المناسبة في الاختيارات |
| 63 | AI-draft | Best Day to Travel in Islam — Favourable Days and Hours for a Journey | أفضل يوم للسفر في الإسلام — الأيام والساعات المناسبة للسفر |
| 64 | AI-draft | Best Day to Travel in Islam: Favourable Days & Hours | أفضل يوم للسفر في الإسلام: الأيام والساعات المناسبة |
| 65 | AI-draft | Does a favourable date guarantee a safe journey? | هل يضمن التاريخ المناسب سفرًا آمنًا؟ |
| 66 | AI-draft | Does a favourable date guarantee success? | هل يضمن التاريخ المناسب النجاح؟ |
| 67 | AI-draft | Early morning: the tool gives a bonus to departures between 05:00 and 10:00 (bukūr), echoing the prayer "Allāhumma bārik li-ummatī fī bukūrihā". | البكور: تمنح الأداة نقاطًا إضافية للخروج بين الساعة 05:00 و10:00، استئناسًا بالدعاء «اللهم بارك لأمتي في بكورها». |
| 68 | AI-draft | For a foundation or household meant to endure, the rules prefer the Moon in a fixed sign (burj thābit), which shows stability, and penalise a movable sign, which inclines to impermanence. | للأساس أو البيت الذي يُراد له الدوام، تفضّل القواعد القمر في برج ثابت لدلالته على الاستقرار، وتنقص من البرج المنقلب لميله إلى عدم الثبات. |
| 69 | AI-draft | For those obligated to attend Jumuʿah, departing after the call to Friday prayer is discouraged in fiqh. | لمن تجب عليه الجمعة، يُكره في الفقه السفر بعد النداء لصلاة الجمعة. |
| 70 | AI-draft | Is a favourable date a guarantee? | هل التاريخ المناسب ضمان؟ |
| 71 | AI-draft | Is starting a business the same as signing a contract? | هل بدء مشروع تجاري مثل توقيع عقد؟ |
| 72 | AI-draft | It also penalises Mercury retrograde (travel plans and documents) and a Moon in a fixed sign, which inclines to delay. | وتنقص أيضًا من رجوع عطارد (خطط السفر والوثائق) ومن القمر في برج ثابت لميله إلى التأخير. |
| 73 | AI-draft | Mercury is associated with negotiation and contracts: Mercury retrograde or combust rules a window out, while a dignified Mercury adds points. | يرتبط عطارد بالتفاوض والعقود: رجوعه أو احتراقه يستبعد الوقت، وكرامته تضيف نقاطًا. |
| 74 | AI-draft | Moving home | الانتقال إلى منزل جديد |
| 75 | AI-draft | Moving into a new home or starting a building is a decision made with istikhāra and consultation (mashwara). The classical science of ikhtiyārāt (electional timing) adds a framework for reflecting on the moment. | الانتقال إلى منزل جديد أو البدء في البناء قرارٌ يُتّخذ بالاستخارة والمشاورة. ويضيف علم الاختيارات الكلاسيكي إطارًا للتأمّل في اللحظة. |
| 76 | AI-draft | No date is religiously forbidden for nikāḥ: marriage is permitted at any time of the year. Many families still like to choose a blessed moment, and the classical science of ikhtiyārāt (electional timing) offers a framework for that reflection. | لا يوجد تاريخ محرّم شرعًا للنكاح؛ فالزواج جائز في أي وقت من السنة. ومع ذلك تحبّ أسر كثيرة اختيار وقت مبارك، ويقدّم علم الاختيارات الكلاسيكي إطارًا لهذا التأمّل. |
| 77 | AI-draft | No day is forbidden for nikāḥ. In the Asrār ikhtiyārāt rules | لا يوجد يوم محرّم للنكاح. في قواعد الاختيارات في أسرار |
| 78 | AI-draft | No. This is an aid to reflection, not a prediction. It is not a substitute for istikhāra, consultation (mashwara) with family and trusted scholars, and tawakkul (reliance on Allah). | لا. هذا عونٌ على التأمّل لا تنبّؤ. ولا يغني عن الاستخارة ومشاورة الأهل وأهل العلم الثقات والتوكّل على الله. |
| 79 | AI-draft | Saturn retrograde is also penalised. | ويُنقَص أيضًا من رجوع زحل. |
| 80 | AI-draft | Starting a business, opening a shop or signing a contract is a decision made with istikhāra and consultation (mashwara). The classical science of ikhtiyārāt (electional timing) adds a framework for reflecting on the moment. | بدء مشروع تجاري أو فتح متجر أو توقيع عقد قرارٌ يُتّخذ بالاستخارة والمشاورة. ويضيف علم الاختيارات الكلاسيكي إطارًا للتأمّل في اللحظة. |
| 81 | AI-draft | The Asrār ikhtiyārāt rules add the day ruler, the planetary hour and the state of the Moon. Below is what they favour for a journey, what they rule out, and the next favourable dates — recalculated every time this page loads. | تضيف قواعد الاختيارات في أسرار حاكمَ اليوم والساعة الكوكبية وحال القمر. وفيما يلي ما ترجّحه للسفر وما تستبعده وأقرب التواريخ المناسبة — يُعاد حسابها عند كل تحميل للصفحة. |
| 82 | AI-draft | The Asrār ikhtiyārāt rules favour | ترجّح قواعد الاختيارات في أسرار |
| 83 | AI-draft | The Prophet ﷺ married ʿĀʾisha (RA) in Shawwāl — a month long favoured for marriage in the Sunnah. | تزوّج النبي ﷺ عائشة رضي الله عنها في شوال — وهو شهر طالما استُحبّ فيه الزواج في السنة. |
| 84 | AI-draft | The Prophet ﷺ married ʿĀʾisha (RA) in Shawwāl, a month long favoured for marriage in the Sunnah. Nikāḥ itself is permitted year-round, including during Ramadan. | تزوّج النبي ﷺ عائشة رضي الله عنها في شوال، وهو شهر طالما استُحبّ فيه الزواج في السنة. والنكاح نفسه جائز طوال العام، حتى في رمضان. |
| 85 | AI-draft | The Prophet ﷺ preferred to set out on Thursday. The days ( | كان النبي ﷺ يحبّ أن يخرج يوم الخميس. والأيام ( |
| 86 | AI-draft | The Prophet ﷺ preferred to set out on journeys on Thursday (Bukhārī), and prayed for blessing on early departures: "Allāhumma bārik li-ummatī fī bukūrihā" — O Allah, bless my ummah in its early mornings. | كان النبي ﷺ يحبّ أن يخرج في سفره يوم الخميس (البخاري)، ودعا بالبركة في البكور: «اللهم بارك لأمتي في بكورها». |
| 87 | AI-draft | The Prophet ﷺ preferred to set out on journeys on Thursday (Bukhārī). The Asrār ikhtiyārāt rules favour | كان النبي ﷺ يحبّ أن يخرج في سفره يوم الخميس (البخاري). وترجّح قواعد الاختيارات في أسرار |
| 88 | AI-draft | What is the best day to travel in Islam? | ما أفضل يوم للسفر في الإسلام؟ |
| 89 | AI-draft | What time of day is best to set out? | ما أفضل وقت من اليوم للخروج؟ |
| 90 | AI-draft | Which days ( | أي الأيام ( |
| 91 | AI-draft | Which planetary hours favour business? | أي الساعات الكوكبية تناسب التجارة؟ |
| 92 | AI-draft | Which planetary hours favour moving home? | أي الساعات الكوكبية تناسب الانتقال إلى منزل جديد؟ |
| 93 | AI-draft | Which planetary hours favour travel? | أي الساعات الكوكبية تناسب السفر؟ |
| 94 | AI-draft | Why does a fixed Moon sign matter? | لماذا يهمّ أن يكون القمر في برج ثابت؟ |
| 95 | AI-draft | Yes. The same "Moving / Building" rule set is used for moving in, laying a foundation or starting construction. | نعم. تُستعمل قواعد «الانتقال / البناء» نفسها للسكن الجديد ووضع الأساس وبدء البناء. |
| 96 | AI-draft | scores highest ( | يحصل على أعلى نقاط ( |
| 97 | AI-draft | (the app's default location). | (الموقع الافتراضي للتطبيق). |
| 98 | AI-draft | Best Day For Nikah, Travel, Moving & Business (Ikhtiyārāt) | أفضل يوم للنكاح والسفر والانتقال والتجارة (الاختيارات) |
| 99 | AI-draft | Dates computed for | التواريخ محسوبة لـ |
| 100 | AI-draft | Favourable weekdays and planetary hours for marriage (nikāḥ), travel, moving home and starting a business in the classical ikhtiyārāt tradition, with the next favourable dates. For reflection. | أيام الأسبوع والساعات الكوكبية المناسبة للزواج (النكاح) والسفر والانتقال إلى منزل جديد وبدء مشروع تجاري في تراث الاختيارات الكلاسيكي، مع أقرب التواريخ المناسبة. للتأمّل. |
| 101 | AI-draft | For each purpose below: what the Asrār tool’s rules favour, and the next favourable date, recalculated every time this page loads. | لكل غرض أدناه: ما ترجّحه قواعد أداة أسرار، وأقرب تاريخ مناسب، ويُعاد حسابه في كل مرة تُحمَّل فيها الصفحة. |
| 102 | AI-draft | Ikhtiyārāt (electional timing) is the classical science of choosing the most favourable moment to begin an action — a marriage, a journey, a building, a business — from the day, the planetary hour, the Moon and the lunar mansions. | علم الاختيارات هو العلم الكلاسيكي لاختيار أنسب وقت لابتداء عمل — زواج أو سفر أو بناء أو تجارة — بالنظر إلى اليوم والساعة الكوكبية والقمر والمنازل القمرية. |
| 103 | AI-draft | No. No date is religiously forbidden for nikāḥ, and these rules are an aid to reflection. They are not a substitute for istikhāra, consultation (mashwara) and tawakkul (reliance on Allah). | لا. لا يوجد تاريخ محرّم شرعًا للنكاح، وهذه القواعد عونٌ على التأمّل. وهي لا تغني عن الاستخارة والمشاورة والتوكّل على الله. |
| 104 | AI-draft | No: each purpose has its own rules, days and hours. | لا: لكل غرض قواعده وأيامه وساعاته. |
| 105 | AI-draft | No: each purpose has its own rules. Thursday is, however, among the favoured days for all four purposes on this page. | لا: لكل غرض قواعده. لكن الخميس من الأيام المفضّلة للأغراض الأربعة كلها في هذه الصفحة. |
| 106 | AI-draft | What is ikhtiyārāt? | ما علم الاختيارات؟ |
| 107 | AI-draft | Which day should you choose for a nikāḥ, setting out on a journey, moving home or starting a business? The classical science of ikhtiyārāt (electional timing) gives each purpose its own favourable weekdays and planetary hours. | أيّ يوم تختار لعقد النكاح أو للسفر أو للانتقال إلى منزل جديد أو لبدء مشروع تجاري؟ يجعل علم الاختيارات الكلاسيكي لكل غرض أيامه وساعاته الكوكبية المناسبة. |
| 108 | AI-draft | Yes. The next dates are recalculated for today with the same engine as the Best Dates (Ikhtiyārāt) tool. | نعم. تُعاد حسابات التواريخ القادمة لليوم بالمحرّك نفسه الذي تستعمله أداة أفضل التواريخ (الاختيارات). |
| 109 | AI-draft | none within 90 days | لا يوجد خلال 90 يومًا |
| 110 | AI-draft | A reflective, educational snapshot in the ʿIlm al-Nujūm tradition — not a predictive horoscope, a religious ruling, or a substitute for istikhāra and consultation with trusted scholars. | لمحة تأمّلية تعليمية في تراث علم النجوم — ليست طالعًا تنبّؤيًا ولا حكمًا شرعيًا ولا بديلًا عن الاستخارة ومشاورة أهل العلم الثقات. |
| 111 | AI-draft | Add your exact birth time to see this. | أضف وقت ميلادك الدقيق لترى هذا. |
| 112 | AI-draft | Calculate My Birth Profile | احسب ملف ميلادي |
| 113 | AI-draft | Enter your date of birth (and, if you know it, the exact time and place) to see your Sun and Moon signs, the Moon's lunar mansion at your birth, the day that ruled your birth date, and each classical planet's real astronomical condition that day — computed instantly from this app's own ephemeris, not a network call. | أدخل تاريخ ميلادك (ووقته ومكانه إن عرفتهما) لترى برجي الشمس والقمر، ومنزلة القمر عند ولادتك، واليوم الذي حكم تاريخ ميلادك، والحال الفلكية الحقيقية لكل كوكب من الكواكب الكلاسيكية في ذلك اليوم — تُحسب فورًا من تقويم التطبيق الفلكي نفسه دون اتصال بالشبكة. |
| 114 | AI-draft | I know my exact time of birth | أعرف وقت ميلادي الدقيق |
| 115 | AI-draft | Less favorable for | أقل مناسبة لـ |
| 116 | AI-draft | Lunar Mansion at Birth | المنزلة القمرية عند الميلاد |
| 117 | AI-draft | Suggested practice | الممارسة المقترحة |
| 118 | AI-draft | Tap any planet for its full dignity breakdown | اضغط على أي كوكب لتفصيل كرامته كاملًا |
| 119 | AI-draft | Time of birth (local) | وقت الميلاد (المحلي) |
| 120 | ✅ reviewed | Your Elemental Imprint | بصمة عناصرك |
| 121 | AI-draft | Your Personal ʿIlm al-Nujūm Snapshot | لمحتك الشخصية في علم النجوم |
| 122 | ✅ reviewed | Your personal ʿIlm al-Nujūm birth profile: Sun and Moon signs, lunar mansion, day ruler, and the real dignity condition of each classical planet at your birth. | ملف ميلادك الشخصي في علم النجوم: برجا الشمس والقمر، والمنزلة القمرية، وصاحب اليوم، والحال الحقيقية لحظّ كل كوكب كلاسيكي من القوة (الشرف/البيت) عند ولادتك. |
| 123 | AI-draft | A low number is not a prohibition and not a bad omen. It can be an invitation to talk about expectations and patience. Many happy marriages would "fail" a numeric test. | العدد المنخفض ليس تحريمًا ولا شؤمًا، بل قد يكون دعوة للحديث عن التوقّعات والصبر. وكثير من الزيجات السعيدة كانت «سترسب» في اختبار رقمي. |
| 124 | AI-draft | Before a nikāḥ, many families like to look at the harmony between two names. In ʿilm al-ḥurūf each Arabic letter has a number (the Abjad, or ḥisāb al-jummal), so every name has a total. This calculator compares the two totals with the traditional "soul connection" method and reads the result for marriage first, with friendship, family and work as other contexts. | قبل النكاح تحبّ أسر كثيرة أن تنظر في الانسجام بين الاسمين. ففي علم الحروف لكل حرف عربي عدد (الأبجد أو حساب الجمل)، فلكل اسم مجموع. تقارن هذه الحاسبة بين المجموعين بطريقة «صلة الأرواح» التقليدية، وتقرأ النتيجة للزواج أولًا، ثم للصداقة والعائلة والعمل. |
| 125 | AI-draft | Each name is converted to its Abjad (kabīr) total, using the Maghribi or Mashriqi letter values you select. | يُحوَّل كل اسم إلى مجموعه في الأبجد الكبير، بقيم الحروف المغربية أو المشرقية التي تختارها. |
| 126 | AI-draft | Each number has a traditional meaning and outlook, shown for the relationship context you choose: marriage, universal, friendship, family or work. | لكل عدد معنى ونظرة تقليديان، يُعرضان بحسب سياق العلاقة الذي تختاره: زواج، عام، صداقة، عائلة أو عمل. |
| 127 | AI-draft | Enter both names, choose the "Marriage" context and calculate. The tool adds the Abjad values of the two names plus 7, divides by 9 and shows the meaning of the remainder for marriage. | أدخل الاسمين واختر سياق «الزواج» ثم احسب. تجمع الأداة قيمتي الأبجد للاسمين مع 7، وتقسم على 9، وتعرض معنى الباقي في الزواج. |
| 128 | AI-draft | Free name compatibility calculator for marriage: compare two names with the Abjad (ḥisāb al-jummal) soul-connection method, or two dates of birth. For reflection, alongside istikhāra and family counsel. | حاسبة مجانية لتوافق الأسماء للزواج: قارن بين اسمين بطريقة صلة الأرواح بالأبجد (حساب الجمل)، أو بين تاريخَي ميلاد. للتأمّل، مع الاستخارة ومشورة الأهل. |
| 129 | AI-draft | Name Compatibility for Marriage (Abjad Calculator) | توافق الأسماء للزواج (حاسبة الأبجد) |
| 130 | AI-draft | Write both names in Arabic letters (or type them in Latin letters and pick the Arabic spelling). | اكتب الاسمين بالحروف العربية (أو اكتبهما بالحروف اللاتينية واختر الكتابة العربية). |
| 131 | AI-draft | Yes. Choose "By Birth Date" to compare two people's Sun, Moon, Venus and Mars signs. This is a general, modern astrological comparison, not a classical Islamic method, and it never uses birth time or houses. | نعم. اختر «بتاريخ الميلاد» لتقارن بين أبراج الشمس والقمر والزهرة والمريخ لشخصين. وهذه مقارنة فلكية عامة حديثة، لا طريقة إسلامية كلاسيكية، ولا تستعمل وقت الميلاد ولا البيوت. |
| 132 | AI-draft | You can also compare two dates of birth (a general, modern astrological comparison of Sun, Moon, Venus and Mars signs), look at a person's resonance with one of the 99 Names of Allah, or find the Divine Name that matches an intention. | يمكنك أيضًا مقارنة تاريخَي ميلاد (مقارنة فلكية عامة حديثة لأبراج الشمس والقمر والزهرة والمريخ)، أو النظر في رنين شخص مع اسم من أسماء الله الحسنى، أو إيجاد الاسم الحسن المناسب لنيّة. |
| 133 | AI-draft | A lunar mansion (manzil, pl. manāzil al-qamar) is one of twenty-eight sectors along the Moon's path. Classical sources assign each mansion themes such as journeys, contracts or restraint. Ikhtiyārāt uses the mansion the Moon occupies on a given day as one factor among several. | المنزلة القمرية (والجمع: منازل القمر) قطاع من ثمانية وعشرين قطاعًا على مسار القمر. وتنسب المصادر الكلاسيكية إلى كل منزلة موضوعات كالسفر أو العقود أو الإمساك. ويستعمل علم الاختيارات المنزلة التي يحلّ فيها القمر في يوم ما عاملًا من عدة عوامل. |
| 134 | AI-draft | Choose an auspicious date for nikāḥ, travel, business or a new start using classical Islamic ikhtiyārāt: day rulers, planetary hours, Moon phase and lunar mansions. | اختر تاريخًا مباركًا للنكاح أو السفر أو التجارة أو بداية جديدة بعلم الاختيارات الكلاسيكي: حكّام الأيام والساعات الكوكبية وأطوار القمر والمنازل القمرية. |
| 135 | AI-draft | Choose the marriage (nikāḥ) election type, then check a candidate date or scan a range. Favourable signs typically include a supportive day ruler and planetary hour, a well-placed Moon by sign, phase and lunar mansion, and avoidance of combust or void-of-course Moon periods. Confirm practical and sharīʿah considerations separately. | اختر نوع الاختيار «الزواج (النكاح)»، ثم افحص تاريخًا مرشّحًا أو امسح مدّة. وتشمل العلامات المناسبة عادةً حاكمَ يومٍ وساعةً كوكبية داعمين، وقمرًا حسنَ الموضع برجًا وطورًا ومنزلةً، واجتنابَ أوقات احتراق القمر أو خلوّ سيره. وتُراعى الاعتبارات العملية والشرعية على حدة. |
| 136 | AI-draft | Fortune-telling claims to reveal the unseen or fix the future. Ikhtiyārāt does not. It offers classical guidelines for when to start something, while affirming that success and knowledge of the ghayb belong to Allah alone. Treat the tool as an aid for reflection, not a verdict. | الكهانة تدّعي كشف الغيب أو تحديد المستقبل، أما الاختيارات فلا. إنها تقدّم إرشادات كلاسيكية لوقت ابتداء الأمر، مع التسليم بأن التوفيق وعلم الغيب لله وحده. فاجعل الأداة عونًا على التأمّل لا حكمًا. |
| 137 | AI-draft | Ikhtiyārāt (اختيارات) means "choices" or elections: the traditional Islamic art of selecting an auspicious time to begin an undertaking. It draws on day rulers, planetary hours, and the Moon's condition within the broader science of ʿIlm al-Nujūm. | الاختيارات تعني اختيار الأوقات: الفنّ الإسلامي التقليدي في انتقاء وقت مبارك لابتداء عمل. وتعتمد على حكّام الأيام والساعات الكوكبية وحال القمر ضمن علم النجوم الأوسع. |
| 138 | AI-draft | Ikhtiyārāt is the classical practice of electional timing in ʿIlm al-Nujūm: choosing a day and hour for an important act — nikāḥ (marriage), travel, business, moving home, or starting study — when the celestial indicators are favourable. | الاختيارات هي ممارسة التوقيت الاختياري الكلاسيكية في علم النجوم: اختيار يوم وساعة لعمل مهمّ — النكاح أو السفر أو التجارة أو الانتقال أو بدء الدراسة — حين تكون الدلائل السماوية مناسبة. |
| 139 | AI-draft | Traditional rules weigh the day ruler, the planetary hour, the Moon's sign, phase and lunar mansion (manāzil al-qamar), and counsel avoiding periods when the Moon is combust or void of course. The aim is adab with time: beginning matters in a moment that supports them, not forcing outcomes. | تزن القواعد التقليدية حاكمَ اليوم والساعةَ الكوكبية وبرجَ القمر وطورَه ومنزلتَه (منازل القمر)، وتنصح باجتناب أوقات احتراق القمر أو خلوّ سيره. والغاية الأدب مع الوقت: أن تبتدئ الأمور في لحظة تعينها، لا أن تُفرض النتائج. |
| 140 | AI-draft | Check a date for yourself | افحص تاريخًا بنفسك |
| 141 | AI-draft | moving or building | الانتقال أو البناء |
| 142 | AI-draft | Asrār — Planetary Hours, Abjad Calculator & Islamic Sacred Sciences | أسرار — الساعات الكوكبية وحاسبة الأبجد والعلوم الإسلامية |
| 143 | ✅ reviewed | A manzil (pl. manāzil al-qamar) is one of twenty-eight sectors of the Moon’s path. Classical sources give each station a name and traditional themes. Asrār shows the current station and educational notes for reflection. | المنزلة (والجمع: منازل القمر) قطاع من ثمانية وعشرين قطاعًا على مسار القمر. وتعطي المصادر الكلاسيكية كل منزلة اسمًا وموضوعات تقليدية. ويعرض تطبيق أسرار المنزلة الحالية مع ملاحظات تعليمية للتأمّل. |
| 144 | AI-draft | Arabic name, transliteration and a short focus for each station. Expand the live card above for favourable / caution themes (educational). | الاسم العربي والنقل الحرفي ومحور موجز لكل منزلة. افتح البطاقة الحيّة أعلاه لموضوعات المناسبة والحذر (تعليمية). |
| 145 | ✅ reviewed | Electional timing may weigh the Moon’s mansion among other factors (day ruler, planetary hour, phase). See Best Dates (Ikhtiyārāt). Election tables on Asrār remain separately reviewed and are not auto-derived from every mansion’s fav/unfav list. | قد يزن التوقيت الاختياري منزلة القمر بين عوامل أخرى (صاحب اليوم، الساعة الكوكبية، الطور). انظر أفضل التواريخ (الاختيارات). وجداول الاختيار في أسرار مراجَعة على حدة، ولا تُستخرج آليًا من قائمة المناسب وغير المناسب لكل منزلة. |
| 146 | ✅ reviewed | From the Moon’s tropical ecliptic longitude (astronomy-engine), divided into 28 equal sectors of 360°/28 ≈ 12.857°. Mansion 1 begins at 0° of the tropical ecliptic. This matches Asrār’s default tropical planetary ephemeris. | من الطول البروجي المداري للقمر (astronomy-engine)، مقسومًا إلى 28 قطاعًا متساويًا مقدار كل منها 360°/28 ≈ 12.857°. وتبدأ المنزلة الأولى عند 0° من فلك البروج المداري، وهذا يوافق التقويم الكوكبي الاستوائي الافتراضي في أسرار. |
| 147 | AI-draft | Manāzil are signs for contemplation, not agents that compel the unseen. This page is for learning and adab with time — not prediction, not a fatwa, and not a substitute for istikhāra, mashwara or tawakkul. Allah alone knows the ghayb. | المنازل علامات للتأمّل، لا فواعل تتحكّم في الغيب. هذه الصفحة للتعلّم والأدب مع الوقت — لا للتنبّؤ، ولا هي فتوى، ولا بديل عن الاستخارة والمشاورة والتوكّل. والله وحده يعلم الغيب. |
| 148 | AI-draft | No. Asrār presents manāzil for education and timing adab. There are no talismans, taweez recipes, or claims to know the unseen. Favourable or cautious themes are traditional notes for reflection, not guarantees. | لا. يعرض أسرار المنازل للتعليم وأدب التوقيت. فلا تمائم ولا وصفات أحراز ولا ادّعاء لعلم الغيب. وموضوعات المناسبة والحذر ملاحظات تقليدية للتأمّل، لا ضمانات. |
| 149 | AI-draft | See which lunar mansion the Moon occupies today, browse all twenty-eight stations, and learn how classical ʿIlm al-Nujūm uses them for reflection and timing adab. | اعرف المنزلة التي يحلّ فيها القمر اليوم، وتصفّح المنازل الثماني والعشرين كلها، وتعلّم كيف يستعملها علم النجوم الكلاسيكي للتأمّل وأدب التوقيت. |
| 150 | AI-draft | The 28 lunar mansions in classical ʿIlm al-Nujūm: today’s manzil, Arabic names, spiritual focus, and how manāzil relate to birth profile and ikhtiyārāt. For reflection, not prediction. | المنازل القمرية الثماني والعشرون في علم النجوم الكلاسيكي: منزلة اليوم، والأسماء العربية، والمحور الروحي، وصلة المنازل بملف الميلاد والاختيارات. للتأمّل لا للتنبّؤ. |
| 151 | AI-draft | Use Birth Profile with your birth date, time and place. The profile includes the natal lunar mansion alongside Sun/Moon signs. | استعمل ملف الميلاد بتاريخ ميلادك ووقته ومكانه. ويتضمّن الملف منزلة القمر عند الميلاد مع برجي الشمس والقمر. |
| 152 | ✅ reviewed | Your birth profile shows the lunar mansion the Moon occupied at your birth time, together with Sun and Moon signs and day ruler. | يعرض ملف ميلادك المنزلة التي كان فيها القمر وقت ولادتك، مع برجي الشمس والقمر وصاحب اليوم. |
| 153 | AI-draft | Add the Abjad value of your name to the Abjad value of your mother's name, divide by 12 and keep the remainder (0 counts as 12). Remainder 1 is Aries (al-Ḥamal), 2 Taurus, 3 Gemini, and so on to 12, Pisces (al-Ḥūt). The calculator above does it for you. | اجمع قيمة اسمك في الأبجد إلى قيمة اسم أمك، واقسم على 12، واحتفظ بالباقي (الصفر يُعدّ 12). الباقي 1 هو الحمل، و2 الثور، و3 الجوزاء، وهكذا حتى 12 وهو الحوت. والحاسبة أعلاه تفعل ذلك عنك. |
| 154 | AI-draft | All sadaqah by burj → | كل الصدقات بحسب البرج ← |
| 155 | AI-draft | Each name is converted to its Abjad (ḥisāb al-jummal) total using the Maghribi letter values. | يُحوَّل كل اسم إلى مجموعه في الأبجد (حساب الجمل) بقيم الحروف المغربية. |
| 156 | AI-draft | Free calculator: your burj (sign, ṭabʿ) from the Abjad value of your name and your mother's name — برجك من اسمك واسم امك. Element, temperament, blessed day, dhikr and burj sadaqah. For reflection. | حاسبة مجانية: برجك (والطبع) من قيمة اسمك واسم أمك في الأبجد — برجك من اسمك واسم امك. العنصر والطبع واليوم المبارك والذكر وصدقة البرج. للتأمّل. |
| 157 | AI-draft | How the calculation works | كيف يجري الحساب |
| 158 | AI-draft | In ʿilm al-ḥurūf your own name is read as who you are, and your mother's name as what surrounds you: family inheritance and the conditions of your path. Pairing the two gives the burj. The same method is found in Arabic, West African (Hausa, Wolof) and South Asian practice. | في علم الحروف يُقرأ اسمك على أنه ذاتك، واسم أمك على أنه ما يحيط بك: الإرث العائلي وظروف طريقك. وبالجمع بينهما يُستخرج البرج. وتوجد الطريقة نفسها في الممارسة العربية وغرب الأفريقية (الهوسا والولوف) وجنوب الآسيوية. |
| 159 | AI-draft | Is my name burj the same as my zodiac sign by birth date? | هل برج اسمي هو نفسه برجي بتاريخ الميلاد؟ |
| 160 | AI-draft | Is this the same as istikhāra? | هل هذه هي الاستخارة؟ |
| 161 | AI-draft | No. Istikhāra is the prayer of seeking Allah's guidance (ṣalāt al-istikhāra). The name "Istikhārat al-Asmāʾ" is traditional, but this calculation is a reflection on names and temperament, not a prayer and not a way to know the unseen. | لا. الاستخارة هي صلاة طلب الخيرة من الله (صلاة الاستخارة). واسم «استخارة الأسماء» تقليدي، لكن هذا الحساب تأمّل في الأسماء والطبع، لا صلاة ولا وسيلة لعلم الغيب. |
| 162 | AI-draft | Not necessarily. The name-based burj comes only from the Abjad values of the two names. Your sign by birth date comes from the Sun's position when you were born, so the two can differ. The tool offers both methods. | ليس بالضرورة. فالبرج المستخرج من الاسم يأتي من قيمتي الاسمين في الأبجد فقط، أما برجك بتاريخ الميلاد فمن موضع الشمس عند ولادتك، فقد يختلفان. والأداة تقدّم الطريقتين. |
| 163 | AI-draft | The 12 burūj at a glance | البروج الاثنا عشر في لمحة |
| 164 | AI-draft | The burj gives your element (fire, earth, air or water), which describes your ṭabʿ (temperament), and links to a blessed day, a dhikr and a sadaqah. | يعطي البرج عنصرك (النار أو التراب أو الهواء أو الماء)، وهو يصف طبعك، ويرتبط بيوم مبارك وذكر وصدقة. |
| 165 | AI-draft | Today's recommended sadaqah. | الصدقة الموصى بها اليوم. |
| 166 | AI-draft | What does my burj tell me? | ماذا يخبرني برجي؟ |
| 167 | AI-draft | Worked example | مثال تطبيقي |
| 168 | AI-draft | Write your name and your mother's name in Arabic letters (or type them in Latin letters and pick the Arabic spelling). | اكتب اسمك واسم أمك بالحروف العربية (أو اكتبهما بالحروف اللاتينية واختر الكتابة العربية). |
| 169 | AI-draft | Your element and temperament, a blessed day of the week, a Divine Name to remember in dhikr, and a traditional sadaqah. Read it as encouragement to good deeds and self-knowledge, not as a forecast. | عنصرك وطبعك، ويوم مبارك من الأسبوع، واسم من الأسماء الحسنى تذكره، وصدقة تقليدية. اقرأه حثًّا على العمل الصالح ومعرفة النفس، لا توقّعًا. |
| 170 | AI-draft | ) has an Abjad value of | ) قيمته في الأبجد |
| 171 | AI-draft | ): Abjad Value & Burj with Mother's Name | ): قيمة الأبجد والبرج مع اسم الأم |
| 172 | AI-draft | ): Abjad Value and Burj | ): قيمة الأبجد والبرج |
| 173 | AI-draft | , using the Maghribi letter values of the "Who Am I?" calculator (vowel marks are not counted). | ، بقيم الحروف المغربية في حاسبة «من أنا؟» (لا تُحسب الحركات). |
| 174 | AI-draft | , which is | ، وهو |
| 175 | AI-draft | : all are written | : كلها تُكتب |
| 176 | AI-draft | Abjad value of | قيمة الأبجد لـ |
| 177 | AI-draft | Burj of | برج |
| 178 | AI-draft | Does | هل |
| 179 | AI-draft | Does the burj predict my future? | هل يتنبّأ البرج بمستقبلي؟ |
| 180 | AI-draft | How the burj is found | كيف يُستخرج البرج |
| 181 | AI-draft | How the calculation works and the 12 burūj at a glance. | كيف يجري الحساب، والبروج الاثنا عشر في لمحة. |
| 182 | AI-draft | In ḥisāb al-jummal the name | في حساب الجمل الاسم |
| 183 | AI-draft | Spellings | طرق الكتابة |
| 184 | AI-draft | The Abjad value of | قيمة الأبجد لـ |
| 185 | AI-draft | The Mashriqi table gives | يعطي الجدول المشرقي |
| 186 | AI-draft | The calculator above does it for you. | والحاسبة أعلاه تفعل ذلك عنك. |
| 187 | AI-draft | What is the Abjad value of the name | ما قيمة الأبجد لاسم |
| 188 | AI-draft | Yes. The calculation uses the Arabic spelling | نعم. يستعمل الحساب الكتابة العربية |
| 189 | AI-draft | and your mother's name. For reflection, not prediction. | واسم أمك. للتأمّل لا للتنبّؤ. |
| 190 | AI-draft | burj guide | دليل البروج |
| 191 | AI-draft | to the Abjad value of your mother's name, divide the total by 12 and keep the remainder (0 counts as 12): 1 is Aries (al-Ḥamal) and 12 is Pisces (al-Ḥūt). | إلى قيمة اسم أمك في الأبجد، واقسم المجموع على 12، واحتفظ بالباقي (الصفر يُعدّ 12): 1 هو الحمل و12 هو الحوت. |
| 192 | AI-draft | Add the Abjad value of your name to the Abjad value of your mother's name, divide by 12 and keep the remainder (0 counts as 12). Remainder 1 is Aries (al-Ḥamal), 2 Taurus, and so on to 12, Pisces (al-Ḥūt). | اجمع قيمة اسمك في الأبجد إلى قيمة اسم أمك، واقسم على 12، واحتفظ بالباقي (الصفر يُعدّ 12). الباقي 1 هو الحمل، و2 الثور، وهكذا حتى 12 وهو الحوت. |
| 193 | AI-draft | Boys’ names | أسماء الذكور |
| 194 | AI-draft | Calculate with any name, and see the 12 burūj at a glance. | احسب بأي اسم، وانظر البروج الاثني عشر في لمحة. |
| 195 | AI-draft | How is the burj found from my name and my mother's name? | كيف يُستخرج البرج من اسمي واسم أمي؟ |
| 196 | AI-draft | Muslim Names: Abjad Value & Burj from Name and Mother's Name | أسماء المسلمين: قيمة الأبجد والبرج من الاسم واسم الأم |
| 197 | AI-draft | My name is not in the list. Can I still calculate it? | اسمي ليس في القائمة. هل يمكنني حسابه؟ |
| 198 | AI-draft | No. It is a traditional reflection on names and temperament from ʿilm al-ḥurūf, for education and self-knowledge. Allah alone knows the unseen. | لا. إنه تأمّل تقليدي في الأسماء والطبع من علم الحروف، للتعليم ومعرفة النفس. والله وحده يعلم الغيب. |
| 199 | AI-draft | The Abjad (ḥisāb al-jummal) value of common Muslim names such as Muhammad, Ali, Fatima and Maryam, and how each one combines with your mother's name to give your burj. For reflection. | قيمة الأبجد (حساب الجمل) لأسماء إسلامية شائعة مثل محمد وعلي وفاطمة ومريم، وكيف يجتمع كلٌّ منها مع اسم أمك ليعطي برجك. للتأمّل. |
| 200 | AI-draft | Yes. The name-and-mother burj calculator accepts any name written in Arabic letters, or typed in Latin letters with an Arabic spelling picked from its suggestions. | نعم. تقبل حاسبة برج الاسم واسم الأم أي اسم مكتوب بالحروف العربية، أو مكتوب بالحروف اللاتينية مع اختيار كتابة عربية من اقتراحاتها. |
| 201 | AI-draft | calculate with any name → | احسب بأي اسم ← |
| 202 | AI-draft | Asrār is a companion for the traditional Islamic sciences of ʿIlm al-Nujūm (celestial timing) and ʿIlm al-Ḥurūf (the science of letters). Find the ruling planet of the current hour and day, follow live planetary transits, build your birth profile, choose auspicious dates with classical ikhtiyārāt, calculate Abjad values, and keep up your daily dhikr. | أسرار رفيقٌ للعلوم الإسلامية التقليدية: علم النجوم (التوقيت السماوي) وعلم الحروف. اعرف الكوكب الحاكم للساعة واليوم الحاليين، وتابع العبور الكوكبي الحيّ، وابنِ ملف ميلادك، واختر التواريخ المباركة بعلم الاختيارات الكلاسيكي، واحسب قيم الأبجد، وحافظ على ذكرك اليومي. |
| 203 | AI-draft | Courage, energy, action, conflict, drive, assertion, cutting through obstacles | الشجاعة، الطاقة، العمل، الصراع، الدافع، الإقدام، اختراق العقبات |
| 204 | AI-draft | Each planet has a zodiac sign where it is at home (domicile/rulership) and one where it is especially powerful (exaltation). | لكل كوكب برج يكون فيه في بيته (البيت/الحكم)، وبرج يكون فيه قويًا على الخصوص (الشرف). |
| 205 | AI-draft | Emotions, intuition, memory, nurturing, cycles, dreams, receptivity | العواطف، الحدس، الذاكرة، الرعاية، الدورات، الأحلام، التلقّي |
| 206 | AI-draft | Expansion, wisdom, generosity, justice, abundance, growth, spirituality | الاتساع، الحكمة، الكرم، العدل، الوفرة، النموّ، الروحانية |
| 207 | AI-draft | Friday is the most sacred day in Islam (Yawm al-Jum'ah). Venus and Friday align in beauty, community, and gratitude. Attend Jumu'ah, send abundant Ṣalawāt upon the Prophet ﷺ, and perform acts of beauty (charity, kind words, reconciliation). It is a day for love, forgiveness, and peace. | الجمعة أشرف أيام الأسبوع في الإسلام (يوم الجمعة). وتجتمع الزهرة ويوم الجمعة في الجمال والجماعة والشكر. احضر الجمعة، وأكثر من الصلاة على النبي ﷺ، واعمل أعمال الجمال (الصدقة، الكلمة الطيبة، الإصلاح). إنه يوم المحبّة والعفو والسلام. |
| 208 | AI-draft | In ʿIlm al-Nujūm, each day of the week is assigned a ruling planet that colours its energy from sunrise to sunrise. This was well-known to classical Islamic scholars. The day starts at the first planetary hour after sunrise — not midnight. | في علم النجوم يُنسب إلى كل يوم من أيام الأسبوع كوكب حاكم يصبغ طاقته من الشروق إلى الشروق. وكان هذا معروفًا عند علماء المسلمين الكلاسيكيين. ويبدأ اليوم من أول ساعة كوكبية بعد الشروق — لا من منتصف الليل. |
| 209 | AI-draft | Intellect, communication, trade, learning, adaptability, writing, wit | العقل، التواصل، التجارة، التعلّم، التكيّف، الكتابة، الفطنة |
| 210 | AI-draft | Kidneys, skin, throat | الكليتان، الجلد، الحلق |
| 211 | AI-draft | Muscles, blood, head | العضلات، الدم، الرأس |
| 212 | AI-draft | The Sun's day is best for bold, visible action. Begin projects you want recognized. Seek blessings from those in authority. Make decisions that require confidence and leadership. Avoid hiding or working in secrecy — the Sun illuminates. | يوم الشمس أنسب للعمل الجريء الظاهر. ابدأ المشاريع التي تريد أن تُعرف. اطلب البركة ممن هم في موضع المسؤولية. واتّخذ القرارات التي تحتاج إلى ثقة وقيادة. واجتنب التخفّي والعمل في السرّ — فالشمس تُنير. |
| 213 | AI-draft | Tuesday strengthens courage and decisive action. Tackle difficult tasks requiring force or conviction. Physical training, surgery if medically required, and overcoming fears align with Mars. Channel Mars energy into productive determination — not aggression. Start with Bismillah and firm niyyah. | الثلاثاء يقوّي الشجاعة والعمل الحاسم. تصدَّ للمهامّ الصعبة التي تتطلّب قوة أو عزيمة. والتدريب البدني، والجراحة إن احتيج إليها طبيًا، والتغلّب على المخاوف توافق المريخ. وجّه طاقة المريخ إلى عزم نافع — لا إلى عدوان. وابدأ بالبسملة ونيّة ثابتة. |
| 214 | AI-draft | Vitality, authority, fame, clarity, honour, generosity, willpower | الحيوية، السلطة، الشهرة، الوضوح، الشرف، الكرم، قوة الإرادة |
| 215 | AI-draft | Wednesday is the day of the scholar and the merchant. Ideal for studying, writing, signing contracts, teaching, and all forms of communication. Engage the mind — read, research, debate. Mercury rewards precision and clarity. This is also an excellent day for Zikr that involves recitation (tilāwah). | الأربعاء يوم العالم والتاجر. وهو مثالي للدراسة والكتابة وتوقيع العقود والتعليم وكل أشكال التواصل. أعمِل عقلك — اقرأ وابحث وناقش. يكافئ عطارد الدقّة والوضوح. وهو أيضًا يوم ممتاز للذكر الذي فيه تلاوة. |
| 216 | AI-draft | Yā Karīm · Yā Wahhāb · Yā Razzāq | يا كريم · يا وهاب · يا رزاق |
| 217 | AI-draft | Yā Laṭīf · Yā Wadūd · Yā Raḥīm | يا لطيف · يا ودود · يا رحيم |
| 218 | AI-draft | Yā Nūr · Yā Ḥayy · Yā Qayyūm | يا نور · يا حي · يا قيوم |
| 219 | AI-draft | Yā Qawiyy · Yā Qahhār · Yā ʿAzīz | يا قوي · يا قهار · يا عزيز |
| 220 | AI-draft | Yā Wadūd · Yā Jamīl · Ṣalawāt upon the Prophet ﷺ | يا ودود · يا جميل · الصلاة على النبي ﷺ |
| 221 | AI-draft | Yā ʿAlīm · Yā Ḥakīm · Yā Khabīr | يا عليم · يا حكيم · يا خبير |
| 222 | AI-draft | Yā Ṣabūr · Yā Matīn · Yā Ḥāfiẓ | يا صبور · يا متين · يا حفيظ |
| 223 | AI-draft | ⚠️ This tool provides spiritual context inspired by Islamic ʿIlm al-Nujūm. It is for reflection, not divination (kahanah) or superstition. Every day is blessed — use this as a framework to align your intentions and channel your energy mindfully. Consult qualified scholars for religious guidance. | ⚠️ تقدّم هذه الأداة سياقًا روحيًا مستلهمًا من علم النجوم الإسلامي. وهي للتأمّل لا للكهانة أو التطيّر. كل يوم مبارك — فاجعلها إطارًا لتوجيه نيّاتك وطاقتك بوعي. وارجع إلى أهل العلم المؤهّلين في المسائل الشرعية. |
| 224 | AI-draft | Discover the ruling planet of today, its spiritual qualities, recommended dhikr, and daily guidance inspired by Islamic ʿIlm al-Nujūm. | اكتشف الكوكب الحاكم لليوم وصفاته الروحية والذكر الموصى به والإرشاد اليومي المستلهم من علم النجوم الإسلامي. |
| 225 | AI-draft | A retrograde symbol (℞) means the planet is in a reflective phase — better for review than for new beginnings in that planet's domain. | رمز الرجوع (℞) يعني أن الكوكب في طور تأمّلي — أنسب للمراجعة منه للبدايات الجديدة في مجاله. |
| 226 | AI-draft | Based on the seasons and the Earth's relationship with the Sun. Aries begins at the Spring Equinox. This is the system used in Western astrology and most Islamic classical texts on ʿIlm al-Nujūm. | مبنيّ على الفصول وعلاقة الأرض بالشمس. يبدأ الحمل عند الاعتدال الربيعي. وهو النظام المستعمل في التنجيم الغربي وأكثر النصوص الإسلامية الكلاسيكية في علم النجوم. |
| 227 | AI-draft | Decan (Face) | الوجه (العُشر) |
| 228 | AI-draft | Domicile (Rulership) | البيت (الحكم) |
| 229 | AI-draft | Each sign has three 10° sections (decans), each ruled by a planet. Being in one's own decan gives minimal dignity — enough to act, but not with great strength. | لكل برج ثلاثة أقسام كل منها 10° (الوجوه)، يحكم كلًّا منها كوكب. وكون الكوكب في وجهه يعطيه أدنى الكرامة — ما يكفي ليعمل، لكن دون قوة كبيرة. |
| 230 | AI-draft | Each sign is divided into 5 sections (terms), each ruled by a planet. A planet in its own term has minor dignity — like being in a familiar neighbourhood. | يُقسَم كل برج إلى خمسة أقسام (الحدود)، يحكم كلًّا منها كوكب. والكوكب في حدّه له كرامة صغرى — كمن يكون في حيّ مألوف. |
| 231 | AI-draft | Effect | الأثر |
| 232 | AI-draft | Exaltation | الشرف |
| 233 | AI-draft | Fixed to the actual star constellations. Accounts for the ~24° "precession of the equinoxes" offset accumulated over 2,000 years. Used in Vedic/Jyotish astrology. Enabled in settings for comparison. | مثبّت على الكوكبات النجمية الفعلية. ويحسب إزاحة «مبادرة الاعتدالين» البالغة نحو 24° المتراكمة عبر ألفي سنة. ويُستعمل في التنجيم الفيدي (الجيوتش). ويمكن تفعيله في الإعدادات للمقارنة. |
| 234 | AI-draft | Islamic scholars of ʿIlm al-Nujūm noted retrograde (rujūʿ, رجوع) as a period where planetary influence is "weakened" or "reversed." It is a time for reflection (murājaʿah), not for beginning critical new matters. | لاحظ علماء النجوم المسلمون الرجوع على أنه مدّة «يضعف» فيها أثر الكوكب أو «ينعكس». وهو وقت للمراجعة لا لابتداء الأمور الجديدة المهمّة. |
| 235 | AI-draft | Live Planetary Positions | مواضع الكواكب الحيّة |
| 236 | AI-draft | Note Retrograde Status | لاحظ حال الرجوع |
| 237 | AI-draft | Pick Your Planet | اختر كوكبك |
| 238 | AI-draft | Read Its Zodiac Position | اقرأ موضعه في البروج |
| 239 | AI-draft | Real-Time Celestial Positions | المواضع السماوية الآنية |
| 240 | AI-draft | Retrograde (℞) Explained | شرح الرجوع (℞) |
| 241 | AI-draft | Retrograde Periods | مدد الرجوع |
| 242 | AI-draft | Sidereal Zodiac (Lahiri) | البروج النجمية (لاهيري) |
| 243 | AI-draft | Tap any planet in the grid to see its current zodiac sign, degree, and status. | اضغط على أي كوكب في الشبكة لترى برجه الحالي ودرجته وحاله. |
| 244 | AI-draft | Term (Bounds) | الحدّ |
| 245 | AI-draft | The planet is in a sign where it performs exceptionally well — like a guest of honour in a welcoming household. Its best qualities are elevated and dignified. | الكوكب في برج يؤدّي فيه أداءً استثنائيًا — كضيف مكرَّم في بيت مرحِّب. تُرفع أحسن صفاته وتُشرَّف. |
| 246 | AI-draft | The planet is in the sign it rules. Like being at home — most comfortable, powerful, and able to act freely. Its qualities express naturally and strongly. | الكوكب في البرج الذي يحكمه. كأنه في بيته — أكثر راحة وقوة وحرية في العمل. تظهر صفاته طبيعية قوية. |
| 247 | AI-draft | The planet is in the sign opposite its domicile. Uncomfortable, weakened, unable to work with full energy. Its natural qualities are challenged or distorted. | الكوكب في البرج المقابل لبيته (الوبال). غير مرتاح، ضعيف، لا يعمل بكامل طاقته. وصفاته الطبيعية مُبتلاة أو مشوّهة. |
| 248 | AI-draft | The planet is in the sign opposite its exaltation. Significantly weakened. Like a king in exile — present but unable to fulfill their role. Caution advised for matters ruled by this planet. | الكوكب في البرج المقابل لشرفه (الهبوط). ضعيف ضعفًا ظاهرًا، كملك في المنفى — حاضر لكنه عاجز عن أداء دوره. يُنصح بالحذر في الأمور التي يحكمها هذا الكوكب. |
| 249 | AI-draft | The planet rules a set of three signs sharing the same element (fire, earth, air, water). Moderate strength, especially during day or night chart conditions. | يحكم الكوكب ثلاثة بروج تشترك في عنصر واحد (النار، التراب، الهواء، الماء) — المثلّثة. قوة متوسطة، لا سيما بحسب كون الوقت نهارًا أو ليلًا. |
| 250 | AI-draft | The sign tells you the "flavour" of how the planet expresses itself and where in life its energy is focused. | يخبرك البرج «بنكهة» تعبير الكوكب عن نفسه، وبموضع تركّز طاقته في الحياة. |
| 251 | AI-draft | Traditional astrology grades each planet's strength by its relationship to the sign it occupies. Think of it as a measure of how comfortable and effective the planet is in expressing its nature. | يقدّر التنجيم التقليدي قوة كل كوكب بعلاقته بالبرج الذي يحلّ فيه. فكّر فيها مقياسًا لراحة الكوكب وفاعليته في التعبير عن طبيعته. |
| 252 | AI-draft | Use Mercury retrograde for reviewing contracts and studying. Use Venus retrograde for reflecting on relationships. Use Mars retrograde to strategize before acting. | استعمل رجوع عطارد لمراجعة العقود والدراسة، ورجوع الزهرة للتأمّل في العلاقات، ورجوع المريخ للتخطيط قبل العمل. |
| 253 | AI-draft | When Saturn or Mars are in Fall or Detriment | حين يكون زحل أو المريخ في الهبوط أو الوبال |
| 254 | AI-draft | When a planet appears to move backwards through the zodiac from Earth's perspective. This is an optical illusion caused by differing orbital speeds, but in traditional astrology the effect is real and significant. | حين يبدو الكوكب سائرًا إلى الوراء عبر البروج من منظور الأرض. وهذا وهمٌ بصري سببه اختلاف سرعات المدارات، لكن أثره في التنجيم التقليدي حقيقي وملحوظ. |
| 255 | AI-draft | ⚖️ Essential Dignities — The Strength System | ⚖️ الكرامات الذاتية — نظام القوة |
| 256 | AI-draft | ⚠️ Planetary transit data is calculated using ephemeris mathematics and is provided for spiritual reflection within the tradition of Islamic ʿIlm al-Nujūm. This is not astrology for prediction (tanjīm) or belief in planets as independent agents. Allah alone is Al-Ḥakīm, Al-ʿAlīm — the All-Wise, All-Knowing. | ⚠️ تُحسب بيانات العبور الكوكبي بالرياضيات الفلكية، وتُقدَّم للتأمّل الروحي ضمن تراث علم النجوم الإسلامي. وليست تنجيمًا للتنبّؤ ولا اعتقادًا بأن الكواكب فواعل مستقلة. فالله وحده الحكيم العليم. |
| 257 | AI-draft | 🤲 Practical Islamic Use | 🤲 الاستعمال الإسلامي العملي |
| 258 | AI-draft | Live positions of all 7 classical planets, essential dignities, retrograde status, and spiritual guidance inspired by Islamic ʿIlm al-Nujūm. | المواضع الحيّة للكواكب السبعة الكلاسيكية، والكرامات الذاتية، وحال الرجوع، والإرشاد الروحي المستلهم من علم النجوم الإسلامي. |
| 259 | AI-draft | Begin with Bismillah and the relevant dhikr for that planet. Your intention (niyyah) is what matters most. | ابدأ بالبسملة والذكر المناسب لذلك الكوكب. ونيّتك هي الأهمّ. |
| 260 | AI-draft | Check the current planetary hour above — note the ruling planet, element, and remaining time. | انظر الساعة الكوكبية الحالية أعلاه — لاحظ الكوكب الحاكم والعنصر والوقت المتبقّي. |
| 261 | AI-draft | Confrontational meetings | الاجتماعات التصادمية |
| 262 | AI-draft | Courage & action | الشجاعة والعمل |
| 263 | AI-draft | Cutting ties | قطع العلاقات |
| 264 | AI-draft | Dreams & intuition | الأحلام والحدس |
| 265 | AI-draft | Endurance practices | ممارسات التحمّل |
| 266 | AI-draft | Expansion & growth | الاتساع والنموّ |
| 267 | AI-draft | Extreme physical exertion | الإجهاد البدني الشديد |
| 268 | AI-draft | Harmony & peace | الانسجام والسلام |
| 269 | AI-draft | Heavy manual labor | العمل اليدوي الشاقّ |
| 270 | AI-draft | Hidden dealings | المعاملات الخفيّة |
| 271 | AI-draft | In ʿIlm al-Nujūm (Islamic celestial science), each day and night is divided into 12 unequal hours ruled by the seven classical planets in the Chaldean order: Saturn → Jupiter → Mars → Sun → Venus → Mercury → Moon. The length of each hour changes daily with sunrise and sunset. | في علم النجوم (العلم السماوي الإسلامي) يُقسَم كل نهار وليل إلى 12 ساعة غير متساوية تحكمها الكواكب السبعة الكلاسيكية بالترتيب الكلداني: زحل ← المشتري ← المريخ ← الشمس ← الزهرة ← عطارد ← القمر. ويتغيّر طول كل ساعة يوميًا بتغيّر الشروق والغروب. |
| 272 | AI-draft | Land & property | الأراضي والعقارات |
| 273 | AI-draft | Long journeys | الأسفار الطويلة |
| 274 | AI-draft | Match your intended action to the planet's strengths (see guide below). Schedule important activities during supportive hours. | وافِق بين العمل الذي تنويه ومواطن قوة الكوكب (انظر الدليل أدناه)، ورتّب الأنشطة المهمّة في الساعات الداعمة. |
| 275 | AI-draft | Mental work | العمل الذهني |
| 276 | AI-draft | Seeking authority | طلب السلطة |
| 277 | AI-draft | Spiritual elevation | الارتقاء الروحي |
| 278 | AI-draft | Submissive requests | الطلبات بخضوع |
| 279 | AI-draft | Surgery (if needed) | الجراحة (عند الحاجة) |
| 280 | AI-draft | The 7 planets cycle in this fixed sequence, each hour ruled by the next planet: | تدور الكواكب السبعة في هذا التسلسل الثابت، وكل ساعة يحكمها الكوكب التالي: |
| 281 | AI-draft | Use "See All Hours" to plan ahead. The first hour of the day is ruled by that day's planet. | استعمل «عرض كل الساعات» للتخطيط مسبقًا. وأول ساعة في اليوم يحكمها كوكب ذلك اليوم. |
| 282 | AI-draft | Visibility & reputation | الظهور والسمعة |
| 283 | AI-draft | What are Planetary Hours? | ما الساعات الكوكبية؟ |
| 284 | AI-draft | Writing & communication | الكتابة والتواصل |
| 285 | AI-draft | Yā Karīm (يا كريم) · Yā Wahhāb (يا وهاب) | يا كريم · يا وهاب |
| 286 | AI-draft | Yā Laṭīf (يا لطيف) · Yā Wadūd (يا ودود) | يا لطيف · يا ودود |
| 287 | AI-draft | Yā Qawiyy (يا قوي) · Yā Qahhār (يا قهار) | يا قوي · يا قهار |
| 288 | AI-draft | ⚠️ For reflection & spiritual timing — not prediction. Only Allah knows the unseen. | ⚠️ للتأمّل والتوقيت الروحي — لا للتنبّؤ. ولا يعلم الغيب إلا الله. |
| 289 | AI-draft | ⚠️ Planetary hours are a traditional tool for reflection and spiritual timing used by Islamic scholars (ʿulamā'). They are not a form of divination (kahanah). Use them to align your efforts with natural rhythms, always relying on tawakkul (trust in Allah). Consult qualified scholars for religious rulings. | ⚠️ الساعات الكوكبية أداة تقليدية للتأمّل والتوقيت الروحي استعملها علماء المسلمين، وليست ضربًا من الكهانة. استعملها لمواءمة جهودك مع الإيقاعات الطبيعية، مع التوكّل على الله دائمًا. وارجع إلى أهل العلم المؤهّلين في الأحكام الشرعية. |
| 290 | AI-draft | 📐 The Chaldean Order | 📐 الترتيب الكلداني |
| 291 | AI-draft | 🪐 Planetary Hour Guide | 🪐 دليل الساعات الكوكبية |
| 292 | AI-draft | Planetary Hours Guide | دليل الساعات الكوكبية |
| 293 | AI-draft | Planetary Hours Today — Chaldean Hours in Islamic ʿIlm al-Nujūm | الساعات الكوكبية اليوم — الساعات الكلدانية في علم النجوم الإسلامي |
| 294 | AI-draft | Real-time Chaldean planetary hours based on your location. Discover the ruling planet of the current hour, its spiritual significance, and the best activities to align with natural rhythms in ʿIlm al-Nujūm. | ساعات كوكبية كلدانية آنية بحسب موقعك. اكتشف الكوكب الحاكم للساعة الحالية ودلالته الروحية وأفضل الأنشطة الموافقة للإيقاعات الطبيعية في علم النجوم. |
| 295 | AI-draft | Loading profile... | جارٍ تحميل الملف... |
| 296 | AI-draft | Update your profile information | حدّث معلومات ملفك |
| 297 | AI-draft | Tap a challenge ↓ | اضغط على تحدٍّ ↓ |
| 298 | ✅ reviewed | 📿 Join me in my zikr challenges on Asrār! | 📿 شاركني في تحدّيات الذكر على أسرار! |
| 299 | AI-draft | Track your daily dhikr all year with Istighfār, Ṣalawāt, Divine Names and the 201 Prophetic Names practice, plus dedicated Ramadan challenges. | تابع ذكرك اليومي طوال العام بالاستغفار والصلاة على النبي والأسماء الحسنى وورد الأسماء النبوية المئتين والواحد، إضافة إلى تحدّيات رمضان الخاصة. |
| 300 | AI-draft | Choose an auspicious date for marriage, travel or business. | اختر تاريخًا مباركًا للزواج أو السفر أو التجارة. |
| 301 | AI-draft | In West African (Senegalese / Wolof) teaching — sarax — each weekday is also linked to particular forms of sadaqah: water on Monday, help with someone's medicine on Tuesday, paper and pens on Wednesday, feeding the needy and supporting the mosque on Thursday, clothes, soap and perfume on Friday. Below is today's suggestion and the full weekly table, from the same guidance used by the Asrār calculator. | في التعليم غرب الأفريقي (السنغالي / الولوفي) — «السرخ» — يرتبط كل يوم من أيام الأسبوع أيضًا بأنواع معيّنة من الصدقة: الماء يوم الاثنين، والإعانة على دواء أحدهم يوم الثلاثاء، والورق والأقلام يوم الأربعاء، وإطعام المحتاجين ودعم المسجد يوم الخميس، والثياب والصابون والطيب يوم الجمعة. وفيما يلي اقتراح اليوم والجدول الأسبوعي كاملًا، من الإرشاد نفسه الذي تستعمله حاسبة أسرار. |
| 302 | AI-draft | Is this an obligation or a guarantee of results? | هل هذا واجب أو ضمان لنتائج؟ |
| 303 | AI-draft | It is the form of sadaqah (voluntary charity) traditionally linked to each day of the week in a West African (Senegalese / Wolof) teaching. This page shows today's suggestion and the table for all seven days. | هي نوع الصدقة (التطوّع) المرتبط تقليديًا بكل يوم من أيام الأسبوع في تعليم غرب أفريقي (سنغالي / ولوفي). وتعرض هذه الصفحة اقتراح اليوم وجدول الأيام السبعة. |
| 304 | AI-draft | No. These are customary suggestions for reflection. Sadaqah is given sincerely for the sake of Allah, on any day, and promises no particular outcome: Allah alone knows the unseen. | لا. هذه اقتراحات عُرفية للتأمّل. والصدقة تُعطى خالصة لوجه الله في أي يوم، ولا تَعِد بنتيجة معيّنة: والله وحده يعلم الغيب. |
| 305 | AI-draft | Sadaqa | الصدقة |
| 306 | AI-draft | Sadaqa of the Day — Recommended Sadaqah for Each Day of the Week | صدقة اليوم — الصدقة الموصى بها لكل يوم من أيام الأسبوع |
| 307 | AI-draft | Sadaqa of the Day: Recommended Sadaqah for Each Weekday | صدقة اليوم: الصدقة الموصى بها لكل يوم |
| 308 | AI-draft | Sadaqah by weekday, by Hijri birth month and by burj. | الصدقة بحسب يوم الأسبوع وشهر الميلاد الهجري والبرج. |
| 309 | AI-draft | Sadaqah is good on every day, and many Muslims make a habit of giving on Friday (Jumuʿa). In this tradition Tuesday is linked with healing and protection, and Thursday with opening the way and removing blockages. Never delay giving because it is not the "right" day. | الصدقة خير في كل يوم، ويعتاد كثير من المسلمين التصدّق يوم الجمعة. وفي هذا التراث يرتبط الثلاثاء بالشفاء والحفظ، والخميس بفتح الطريق وإزالة العوائق. ولا تؤخّر العطاء أبدًا لأنه ليس اليوم «المناسب». |
| 310 | AI-draft | Sadaqah, voluntary charity, is good on every day, and many Muslims make a habit of giving on Friday (Jumuʿa). Giving a little, consistently, is better than waiting for the "perfect" day. | الصدقة — وهي التطوّع — خير في كل يوم، ويعتاد كثير من المسلمين التصدّق يوم الجمعة. والقليل الدائم خير من انتظار اليوم «المثالي». |
| 311 | AI-draft | The day you plan to give, or your date of birth. | اليوم الذي تنوي العطاء فيه، أو تاريخ ميلادك. |
| 312 | AI-draft | Today's recommended sadaqah and the full weekly table: water on Monday, healing on Tuesday, opening the way on Thursday, clothes and perfume on Friday. West African tradition, for reflection. | الصدقة الموصى بها اليوم والجدول الأسبوعي كاملًا: الماء يوم الاثنين، والشفاء يوم الثلاثاء، وفتح الطريق يوم الخميس، والثياب والطيب يوم الجمعة. تراث غرب أفريقي، للتأمّل. |
| 313 | AI-draft | Track your dhikr: Istighfār, Ṣalawāt and Divine Names. | تابع ذكرك: الاستغفار والصلاة على النبي والأسماء الحسنى. |
| 314 | AI-draft | What is the "sadaqa of the day"? | ما «صدقة اليوم»؟ |
| 315 | AI-draft | What is the best day to give sadaqah? | ما أفضل يوم للصدقة؟ |
| 316 | AI-draft | What sadaqah should I give on Friday? | ما الصدقة التي أعطيها يوم الجمعة؟ |
| 317 | AI-draft | What sadaqah should I give on Monday? | ما الصدقة التي أعطيها يوم الاثنين؟ |
| 318 | AI-draft | Yes. The guidance can be read either for the day you plan to give or for the weekday of your birth. Enter a date in the checker above to see which weekday it falls on. | نعم. يمكن قراءة الإرشاد لليوم الذي تنوي العطاء فيه أو ليوم ميلادك من الأسبوع. أدخل تاريخًا في الأداة أعلاه لترى يوم الأسبوع الذي يوافقه. |
| 319 | AI-draft | Your burj, blessed day, dhikr and the sadaqah for your burj. | برجك ويومك المبارك وذكرك وصدقة برجك. |
| 320 | AI-draft | Each of the twelve burūj has its own traditional sadaqah, according to the teachings of Seringe Mahdiou Niane (with companion videos in Wolof inside the app). Not sure of your burj? Find it from your name and your mother's name. | لكل برج من البروج الاثني عشر صدقته التقليدية، بحسب تعاليم الشيخ سرين مهديو نيان (مع مقاطع مصاحبة بالولوفية داخل التطبيق). لست متأكدًا من برجك؟ اعرفه من اسمك واسم أمك. |
| 321 | AI-draft | Each weekday has its own suggested sadaqah. See today's guidance and the full table on the Sadaqa of the Day page. | لكل يوم من أيام الأسبوع صدقته المقترحة. انظر إرشاد اليوم والجدول كاملًا في صفحة صدقة اليوم. |
| 322 | AI-draft | Enter your Gregorian date of birth in the checker on this page. It converts the date to the Islamic (Hijri) calendar and shows the sadaqah suggested for that month. | أدخل تاريخ ميلادك الميلادي في الأداة في هذه الصفحة. فتحوّله إلى التقويم الهجري وتعرض الصدقة المقترحة لذلك الشهر. |
| 323 | AI-draft | In this tradition your burj comes from the Abjad values of your name and your mother's name: add them, divide by 12 and the remainder gives the burj. The name & mother's name burj page does the calculation for you. | في هذا التراث يأتي برجك من قيمتي اسمك واسم أمك في الأبجد: اجمعهما واقسم على 12، فيعطي الباقي البرج. وصفحة برج الاسم واسم الأم تجري الحساب عنك. |
| 324 | AI-draft | No. Sadaqah is given for the sake of Allah. The intentions mentioned (blessing, protection, ease, provision) are hopes placed with Allah, not promised outcomes. | لا. الصدقة تُعطى لوجه الله. والنيّات المذكورة (البركة، الحفظ، التيسير، الرزق) رجاءٌ يُعلَّق بالله، لا نتائج موعودة. |
| 325 | AI-draft | Sadaqa Guide: by Weekday, Hijri Birth Month & Burj | دليل الصدقة: بحسب يوم الأسبوع وشهر الميلاد الهجري والبرج |
| 326 | AI-draft | Sadaqah, voluntary charity, can be given at any time and in any amount. Many Muslims make a habit of giving on Friday (Jumuʿa), and in West African (Senegalese / Wolof) practice — sarax — particular forms of sadaqah are also suggested for each weekday, for the Hijri month you were born in, and for your burj. | الصدقة — وهي التطوّع — تُعطى في أي وقت وبأي مقدار. ويعتاد كثير من المسلمين التصدّق يوم الجمعة، وفي الممارسة غرب الأفريقية (السنغالية / الولوفية) — «السرخ» — تُقترح أيضًا أنواع معيّنة من الصدقة لكل يوم من الأسبوع، وللشهر الهجري الذي وُلدت فيه، ولبرجك. |
| 327 | AI-draft | Sarax is the Wolof word for sadaqah (voluntary charity). In Senegalese and wider West African practice it is often given in specific forms — water, food, clothes, a ram, kola nuts — depending on the day, the person's birth month or their burj. | «السرخ» كلمة ولوفية تعني الصدقة (التطوّع). وفي الممارسة السنغالية وغرب الأفريقية عمومًا تُعطى غالبًا في صور معيّنة — الماء، الطعام، الثياب، كبش، جوز الكولا — بحسب اليوم أو شهر ميلاد الشخص أو برجه. |
| 328 | AI-draft | This guide gathers the three in one place, using the same data as the Asrār calculators. Use whichever applies to you, and remember that the best sadaqah is the one given sincerely and regularly. | يجمع هذا الدليل الثلاثة في مكان واحد، بالبيانات نفسها التي تستعملها حاسبات أسرار. استعمل ما ينطبق عليك، وتذكّر أن أفضل الصدقة ما أُعطي بإخلاص ودوام. |
| 329 | AI-draft | Android users can install Asrariya today on Google Play. | يمكن لمستخدمي أندرويد تثبيت أسرارية اليوم من Google Play. |
| 330 | AI-draft | Don't have the app yet? Download it free. | ليس لديك التطبيق بعد؟ نزّله مجانًا. |
| 331 | AI-draft | If the app does not open automatically, install Asrariya below. | إن لم يُفتح التطبيق تلقائيًا، فثبّت أسرارية أدناه. |
| 332 | AI-draft | Open in Asrariya | افتح في أسرارية |
| 333 | AI-draft | Open this ayah in Asrariya on Android. | افتح هذه الآية في أسرارية على أندرويد. |
| 334 | AI-draft | QR code to install Asrariya from Google Play | رمز QR لتثبيت أسرارية من Google Play |
| 335 | AI-draft | Scan the QR code or open Google Play. | امسح رمز QR أو افتح Google Play. |
| 336 | AI-draft | Asrariya Quran Share | مشاركة القرآن في أسرارية |
| 337 | AI-draft | Ayah Not Found | الآية غير موجودة |
| 338 | AI-draft | Arabian Nights tales | حكايات ألف ليلة وليلة |
| 339 | AI-draft | Arabic alphabet letters | حروف الأبجدية العربية |
| 340 | AI-draft | Days of spiritual significance | أيام ذات دلالة روحية |
| 341 | AI-draft | Element Guidance | إرشاد العنصر |
| 342 | AI-draft | I flow with grace and adapt with compassion | أجري بلطف وأتكيّف برحمة |
| 343 | AI-draft | I remain grounded, patient, and steadfast in my path | أبقى ثابتًا صبورًا راسخًا في طريقي |
| 344 | AI-draft | Messages and guidance | الرسائل والإرشاد |
| 345 | AI-draft | Real-time insights based on traditional Islamic celestial science and Chaldean planetary hours. | لمحات آنية مبنية على العلم السماوي الإسلامي التقليدي والساعات الكوكبية الكلدانية. |
| 346 | AI-draft | Deep AI Analysis | تحليل معمّق بالذكاء الاصطناعي |
| 347 | AI-draft | 💡 AI will deeply analyze your results and provide personalized insights and detailed spiritual guidance | 💡 سيحلّل الذكاء الاصطناعي نتائجك بعمق ويقدّم لمحات شخصية وإرشادًا روحيًا مفصّلًا |
| 348 | AI-draft | Current Mode: | الوضع الحالي: |
| 349 | AI-draft | Eastern | شرقي |
| 350 | AI-draft | Maghribi System: | النظام المغربي: |
| 351 | AI-draft | Mashriqi System: | النظام المشرقي: |
| 352 | AI-draft | Western | غربي |
| 353 | AI-draft | Using approximate timing | باستعمال توقيت تقريبي |
| 354 | AI-draft | Using precise planetary hours (location-based) | باستعمال ساعات كوكبية دقيقة (بحسب الموقع) |
| 355 | AI-draft | ACTIVE - REST & REFLECT | نشط - استرح وتأمّل |
| 356 | AI-draft | Brainstorm Ideas | تبادل الأفكار |
| 357 | AI-draft | Build and organize | ابنِ ونظّم |
| 358 | AI-draft | Build or Organize | ابنِ أو نظّم |
| 359 | AI-draft | Calculating alignment... Please wait. | جارٍ حساب التوافق... يُرجى الانتظار. |
| 360 | AI-draft | Communicate and network | تواصل وابنِ العلاقات |
| 361 | AI-draft | Complete Tasks | أنجز المهامّ |
| 362 | AI-draft | Complete projects | أتمّ المشاريع |
| 363 | AI-draft | Continue Ongoing Work | تابع العمل الجاري |
| 364 | AI-draft | Could not calculate planetary hours. Please check the browser console for details. | تعذّر حساب الساعات الكوكبية. يُرجى مراجعة وحدة تحكّم المتصفح للتفاصيل. |
| 365 | AI-draft | Could not determine your location. Please check your browser's location permissions. | تعذّر تحديد موقعك. يُرجى التحقق من أذونات الموقع في متصفحك. |
| 366 | AI-draft | Could not determine your location. Using Mecca as fallback. | تعذّر تحديد موقعك. سنستعمل مكة المكرمة بديلًا. |
| 367 | AI-draft | Deep Reflection | تأمّل عميق |
| 368 | AI-draft | ELEMENT IS ACTIVE NOW! | العنصر نشط الآن! |
| 369 | AI-draft | ENERGY - EXCELLENT TIME | طاقة - وقت ممتاز |
| 370 | AI-draft | Emotional processing | معالجة المشاعر |
| 371 | AI-draft | Enable | تفعيل |
| 372 | AI-draft | Failed to calculate planetary hours for your location | تعذّر حساب الساعات الكوكبية لموقعك |
| 373 | AI-draft | Failed to load guidance | تعذّر تحميل الإرشاد |
| 374 | AI-draft | Handle Routine Tasks | أنجز المهامّ الروتينية |
| 375 | AI-draft | Have courage-requiring conversations | أجرِ المحادثات التي تتطلّب شجاعة |
| 376 | AI-draft | Healing conversations | محادثات شافية |
| 377 | AI-draft | Hour Element: | عنصر الساعة: |
| 378 | AI-draft | Launch new projects | أطلق مشاريع جديدة |
| 379 | AI-draft | Lead and inspire others | قُد الآخرين وألهمهم |
| 380 | AI-draft | Loading planetary hours... | جارٍ تحميل الساعات الكوكبية... |
| 381 | AI-draft | Make Difficult Call | أجرِ الاتصال الصعب |
| 382 | AI-draft | Make commitments | قطع الالتزامات |
| 383 | AI-draft | Make important decisions | اتّخذ القرارات المهمّة |
| 384 | AI-draft | Mecca (Fallback) | مكة المكرمة (بديل) |
| 385 | AI-draft | Plan & Prepare | خطّط واستعدّ |
| 386 | AI-draft | Reload Page | أعد تحميل الصفحة |
| 387 | AI-draft | Rest & Reflect | استرح وتأمّل |
| 388 | AI-draft | Start Important Task | ابدأ مهمّة مهمّة |
| 389 | AI-draft | Take Bold Action | اتّخذ خطوة جريئة |
| 390 | AI-draft | Taking bold action | اتّخاذ خطوة جريئة |
| 391 | AI-draft | Teach and share knowledge | علّم وشارك المعرفة |
| 392 | AI-draft | Unable to Load Guidance | تعذّر تحميل الإرشاد |
| 393 | AI-draft | Unable to find current planetary hour. Check console for time range info. | تعذّر إيجاد الساعة الكوكبية الحالية. راجع وحدة التحكّم لمعلومات المدى الزمني. |
| 394 | AI-draft | Write and articulate | اكتب وعبّر |
| 395 | AI-draft | Write or Communicate | اكتب أو تواصل |
| 396 | AI-draft | ⏰ Current Hour Not Found | ⏰ لم يُعثر على الساعة الحالية |
| 397 | AI-draft | ☀️ Day Hour | ☀️ ساعة نهارية |
| 398 | AI-draft | 🌙 Night Hour | 🌙 ساعة ليلية |
| 399 | AI-draft | 📊 MODERATE ENERGY - DECENT TIME FOR ROUTINE WORK | 📊 طاقة معتدلة - وقت لا بأس به للعمل الروتيني |
| 400 | AI-draft | Browse all 99 Names | تصفّح الأسماء الحسنى كلها |
| 401 | AI-draft | General reference — not a recommendation specific to this intention | مرجع عام — ليس توصية خاصة بهذه النيّة |
| 402 | AI-draft | No names found | لم يُعثر على أسماء |
| 403 | AI-draft | Damma | ضمّة |
| 404 | AI-draft | Fatha | فتحة |
| 405 | AI-draft | Kasra | كسرة |
| 406 | AI-draft | Shadda | شدّة |
| 407 | AI-draft | Sukun | سكون |
| 408 | AI-draft | Tanwin D | تنوين ضمّ |
| 409 | AI-draft | Tanwin F | تنوين فتح |
| 410 | AI-draft | Tanwin K | تنوين كسر |
| 411 | AI-draft | اضغط على الحروف للكتابة • Tap letters to type | اضغط على الحروف للكتابة |
| 412 | AI-draft | ○ التشكيل (Tashkeel) | ○ التشكيل |
| 413 | AI-draft | ✓ التشكيل (Tashkeel) | ✓ التشكيل |
| 414 | AI-draft | Attraction (Venus–Mars) | الانجذاب (الزهرة–المريخ) |
| 415 | AI-draft | Breakdown | التفصيل |
| 416 | AI-draft | Moon Sign | برج القمر |
| 417 | AI-draft | One birth date falls close to a Moon sign change — without an exact birth time, the Moon sign shown may not be exact. | يقع أحد تاريخَي الميلاد قريبًا من انتقال القمر بين برجين — ودون وقت ميلاد دقيق قد لا يكون برج القمر المعروض دقيقًا. |
| 418 | AI-draft | Sun Sign | برج الشمس |
| 419 | AI-draft | Your Match Strength | قوة توافقكما |
| 420 | AI-draft | Enter Two Birth Dates | أدخل تاريخَي ميلاد |
| 421 | AI-draft | General astrological compatibility from Sun sign, Moon sign, and Venus-Mars — no birth time needed | توافق فلكي عام من برج الشمس وبرج القمر والزهرة–المريخ — دون حاجة إلى وقت الميلاد |
| 422 | AI-draft | e.g., Fatima | مثلًا: فاطمة |
| 423 | AI-draft | Account created! Setting up your profile... | أُنشئ الحساب! جارٍ إعداد ملفك... |
| 424 | AI-draft | An unexpected error occurred. Please try again. | حدث خطأ غير متوقّع. يُرجى المحاولة مرة أخرى. |
| 425 | AI-draft | Authentication Not Configured | تسجيل الدخول غير مُعدّ |
| 426 | AI-draft | Authentication is optional. You can use this app without an account. | تسجيل الدخول اختياري. يمكنك استعمال هذا التطبيق دون حساب. |
| 427 | AI-draft | Failed to create account | تعذّر إنشاء الحساب |
| 428 | AI-draft | Failed to send password reset email | تعذّر إرسال بريد إعادة تعيين كلمة المرور |
| 429 | AI-draft | Must be at least 6 characters | 6 أحرف على الأقل |
| 430 | AI-draft | Password reset email sent! Check your inbox. | أُرسل بريد إعادة تعيين كلمة المرور! تفقّد صندوق الوارد. |
| 431 | AI-draft | Send Reset Link | أرسل رابط إعادة التعيين |
| 432 | AI-draft | Show password | إظهار كلمة المرور |
| 433 | AI-draft | Supabase authentication is not configured for this application. | تسجيل الدخول عبر Supabase غير مُعدّ لهذا التطبيق. |
| 434 | AI-draft | To enable authentication, please set up Supabase and add your credentials to the environment variables. | لتفعيل تسجيل الدخول، أعِدّ Supabase وأضف بياناتك إلى متغيّرات البيئة. |
| 435 | AI-draft | 10 jumping jacks, then 5min sunlight exposure | 10 قفزات، ثم 5 دقائق تحت الشمس |
| 436 | AI-draft | 15min brisk walk outdoors + deep breathing | 15 دقيقة مشيًا سريعًا في الهواء الطلق مع تنفّس عميق |
| 437 | AI-draft | 15min grounding (barefoot walking, gardening, cooking) | 15 دقيقة من التجذّر (المشي حافيًا، البستنة، الطبخ) |
| 438 | AI-draft | 15min meditation by water + cold compress on forehead | 15 دقيقة تأمّل قرب الماء مع كمّادة باردة على الجبهة |
| 439 | AI-draft | 15min vigorous exercise (run, dance, pushups) + 5min sun exposure | 15 دقيقة تمرين نشيط (جري، رقص، ضغط) مع 5 دقائق تحت الشمس |
| 440 | AI-draft | 2min slow breathing, eyes closed | دقيقتان من التنفّس البطيء مغمض العينين |
| 441 | AI-draft | 5min deep breathing + sip cold water slowly | 5 دقائق تنفّس عميق مع ارتشاف ماء بارد ببطء |
| 442 | AI-draft | 5min standing barefoot + eat something solid | 5 دقائق وقوفًا حافيًا مع أكل شيء صلب |
| 443 | AI-draft | Classical teaching: Conflict isn't bad - it's growth opportunity. True harmony comes from consciously balancing opposing forces. | تعليم كلاسيكي: الصراع ليس شرًّا — إنه فرصة للنموّ. والانسجام الحقّ يأتي من الموازنة الواعية بين القوى المتقابلة. |
| 444 | AI-draft | Moderate conflict - Focused action brings relief | صراع معتدل - العمل المركّز يجلب الراحة |
| 445 | AI-draft | Recheck: Tonight before bed (balance shifts with activities) | أعد الفحص: الليلة قبل النوم (يتغيّر التوازن مع الأنشطة) |
| 446 | AI-draft | Sit still, feel your weight for 2min | اجلس ساكنًا واشعر بثقلك دقيقتين |
| 447 | AI-draft | Stand and stretch toward sun for 2min | قف وتمدّد نحو الشمس دقيقتين |
| 448 | AI-draft | You might feel: anxious, unfocused, talking more than doing, mentally scattered | قد تشعر: بالقلق، وتشتّت التركيز، وكثرة الكلام وقلّة الفعل، وتبعثر الذهن |
| 449 | AI-draft | You might feel: restless, impatient, quick to anger, scattered energy | قد تشعر: بعدم الاستقرار، ونفاد الصبر، وسرعة الغضب، وتبعثر الطاقة |
| 450 | AI-draft | calm, patience, reflection | السكينة، الصبر، التأمّل |
| 451 | AI-draft | clarity, communication, flexibility | الوضوح، التواصل، المرونة |
| 452 | AI-draft | element doubled today. Energy is intense - | العنصر مضاعف اليوم. الطاقة شديدة - |
| 453 | AI-draft | energy, action, courage | الطاقة، العمل، الشجاعة |
| 454 | AI-draft | stability, grounding, patience | الثبات، التجذّر، الصبر |
| 455 | AI-draft | ✨ You're balanced - maintain your current activities throughout the day | ✨ أنت متوازن - حافظ على أنشطتك الحالية طوال اليوم |
| 456 | AI-draft | Abjad Total (Ḥadath): | مجموع الأبجد (الحدث): |
| 457 | AI-draft | Close calculation details | أغلق تفاصيل الحساب |
| 458 | AI-draft | Layer 1: Daily Life | الطبقة 1: الحياة اليومية |
| 459 | AI-draft | Layer 2: Emotional Foundation | الطبقة 2: الأساس العاطفي |
| 460 | AI-draft | Layer 3: Cross Dynamic | الطبقة 3: التفاعل المتقاطع |
| 461 | AI-draft | Layer 4: Cross Dynamic | الطبقة 4: التفاعل المتقاطع |
| 462 | AI-draft | Layer Compatibility Calculations | حسابات توافق الطبقات |
| 463 | AI-draft | Mothers' Calculations (Cosmic Temperament) | حسابات الأمّهات (الطبع الكوني) |
| 464 | AI-draft | Total Abjad (Ḥadath): | مجموع الأبجد (الحدث): |
| 465 | AI-draft | Total Score | المجموع الكلي |
| 466 | AI-draft | Weight: 40% (MOST IMPORTANT) | الوزن: 40% (الأهمّ) |
| 467 | AI-draft | Weighted Overall Score | النتيجة الكلية المرجّحة |
| 468 | AI-draft | ✨ Accent Colors | ✨ ألوان مكمّلة |
| 469 | AI-draft | 🎨 Wear These Colors | 🎨 البس هذه الألوان |
| 470 | AI-draft | 💡 Practical Tip | 💡 نصيحة عملية |
| 471 | AI-draft | A Connection Meant to Teach | صلة غايتها التعليم |
| 472 | AI-draft | A relationship where both people actively work on growth, communication, and understanding rather than expecting it to 'just work naturally.' Even highly compatible couples benefit from being conscious partners. | علاقة يعمل فيها الطرفان بفاعلية على النموّ والتواصل والتفاهم، بدل انتظار أن «تنجح من تلقاء نفسها». وحتى الأزواج الأكثر توافقًا ينتفعون بالشراكة الواعية. |
| 473 | AI-draft | Air Element | عنصر الهواء |
| 474 | AI-draft | Challenging but Not Impossible (Below 50%) | صعب لكنه ليس مستحيلًا (أقل من 50%) |
| 475 | AI-draft | Choice Matters More Than Stars | الاختيار أهمّ من النجوم |
| 476 | AI-draft | Compatibility Score | درجة التوافق |
| 477 | AI-draft | Compatibility Terms Made Simple | مصطلحات التوافق بلغة بسيطة |
| 478 | AI-draft | Complementary Elements | عناصر متكاملة |
| 479 | AI-draft | Cosmic | كوني |
| 480 | AI-draft | Earth Element | عنصر التراب |
| 481 | AI-draft | Earth people are practical, reliable, and patient. They build lasting foundations and value security but can resist change or seem boring. Think: 'Let's make a solid plan.' Earth needs to embrace spontaneity occasionally. | أهل التراب عمليّون موثوقون صبورون. يبنون أسسًا دائمة ويقدّرون الأمان، لكنهم قد يقاومون التغيير أو يبدون رتيبين. شعارهم: «لنضع خطة متينة». ويحتاج التراب إلى قبول العفوية أحيانًا. |
| 482 | AI-draft | Fire people are energetic, spontaneous, and inspiring. They bring excitement and leadership but can be impulsive or dominating. Think: 'Let's do it NOW!' Fire needs to learn patience and listen to others. | أهل النار نشيطون عفويّون ملهِمون. يجلبون الحماسة والقيادة، لكنهم قد يندفعون أو يتسلّطون. شعارهم: «لنفعلها الآن!». وتحتاج النار إلى تعلّم الصبر والإصغاء للآخرين. |
| 483 | AI-draft | Free Will vs Destiny | الإرادة الحرّة والقدر |
| 484 | AI-draft | High Compatibility | توافق عالٍ |
| 485 | AI-draft | How Your Celestial Energies Match | كيف تتوافق طاقاتكما السماوية |
| 486 | AI-draft | How well your spiritual essences match. Do you share similar life purposes, values, and spiritual orientations? High soul connection means you 'get' each other on a deep level without trying. | مدى توافق جوهريكما الروحيين. هل تشتركان في غايات الحياة والقيم والتوجّه الروحي؟ وصلة الأرواح العالية تعني أن كلًّا منكما «يفهم» الآخر في العمق دون تكلّف. |
| 487 | AI-draft | How your day-to-day personalities mesh. Are you both fiery and clashing, or does one person's calm earth energy ground the other's impulsive fire? This affects daily interactions more than grand compatibility. | كيف تنسجم شخصيتاكما في الحياة اليومية. هل كلاكما ناريّ متصادم، أم أن هدوء طاقة التراب لدى أحدكما يُثبّت اندفاع نار الآخر؟ وهذا يؤثّر في التعامل اليومي أكثر من التوافق العام. |
| 488 | AI-draft | In Islamic mysticism, some relationships exist to help you grow, heal, or learn specific lessons. They may be difficult but transformative. High intensity doesn't always mean 'meant to be'—sometimes it means 'meant to teach.' | في التصوّف توجد بعض العلاقات لتعينك على النموّ أو الشفاء أو تعلّم دروس معيّنة. قد تكون صعبة لكنها تُحوِّل. والشدّة العالية لا تعني دائمًا «مقدَّرًا أن يكون» — فأحيانًا تعني «مقدَّرًا أن يُعلِّم». |
| 489 | AI-draft | Intentional Partnership | شراكة واعية |
| 490 | AI-draft | Islamic numerology shows TENDENCIES, not fixed fate. You always have free will. Low compatibility means more work, not impossibility. High compatibility can fail without effort. Your choices, character, and commitment matter most. | علم العدد يُظهر ميولًا لا قدرًا محتومًا. ولك دائمًا إرادة واختيار. فالتوافق المنخفض يعني جهدًا أكبر لا استحالة، والتوافق العالي قد يخفق دون جهد. واختياراتك وخُلقك والتزامك هي الأهمّ. |
| 491 | AI-draft | Jupiter Energy | طاقة المشتري |
| 492 | AI-draft | Jupiter people are generous, optimistic, and see big pictures. They seek meaning and freedom but can be excessive. In relationships: they bring joy and growth but need space and philosophical connection. | أهل المشتري كرماء متفائلون يرون الصورة الكبرى. يطلبون المعنى والحرية لكنهم قد يُفرطون. وفي العلاقات: يجلبون الفرح والنموّ لكنهم يحتاجون إلى مساحة وصلة فكرية. |
| 493 | AI-draft | Karmic Relationship | علاقة تعليمية |
| 494 | AI-draft | Letter-to-Number Code | رمز الحرف بالعدد |
| 495 | AI-draft | Low Compatibility | توافق منخفض |
| 496 | AI-draft | Mars Energy | طاقة المريخ |
| 497 | AI-draft | Mars people are action-oriented, passionate, and direct. They're protective and courageous but can be aggressive. In relationships: they bring excitement and protection but need to soften their approach. | أهل المريخ عمليّون شغوفون صريحون. يحمون ويتشجّعون لكنهم قد يعتدون. وفي العلاقات: يجلبون الحماسة والحماية لكنهم يحتاجون إلى تليين أسلوبهم. |
| 498 | AI-draft | Master Number | العدد الرئيسي |
| 499 | AI-draft | Mercury people need mental stimulation and conversation. They're witty, curious, and versatile but can be scattered. In relationships: they bring humor and interesting dialogue but need intellectual connection. | أهل عطارد يحتاجون إلى تحفيز ذهني وحوار. ظرفاء فضوليون متعدّدو المواهب لكنهم قد يتشتّتون. وفي العلاقات: يجلبون الدعابة والحديث الممتع لكنهم يحتاجون إلى صلة فكرية. |
| 500 | AI-draft | Moderate Compatibility | توافق معتدل |
| 501 | AI-draft | Moon Energy | طاقة القمر |
| 502 | AI-draft | Moon people are emotionally sensitive, caring, and intuitive. They create safe emotional spaces and understand feelings instinctively but can be moody. In relationships: they provide deep emotional support but need security. | أهل القمر مرهفو العاطفة، حانون، حدسيّون. يصنعون مساحات عاطفية آمنة ويفهمون المشاعر بالفطرة لكنهم قد يتقلّبون. وفي العلاقات: يقدّمون سندًا عاطفيًا عميقًا لكنهم يحتاجون إلى الأمان. |
| 503 | AI-draft | No terms found. | لم يُعثر على مصطلحات. |
| 504 | AI-draft | Numbers that aren't reduced to single digits because they carry special spiritual significance. They indicate higher potential but also greater challenges. People with master numbers often feel 'different' or called to something bigger. | أعداد لا تُختزل إلى رقم واحد لأن لها دلالة روحية خاصة. تشير إلى إمكانات أعلى وتحدّيات أكبر. وكثيرًا ما يشعر أصحابها بأنهم «مختلفون» أو مدعوّون إلى أمر أكبر. |
| 505 | AI-draft | Numerological Vibration | الاهتزاز العددي |
| 506 | AI-draft | Opposing Traits That Clash | صفات متقابلة تتصادم |
| 507 | AI-draft | Opposite Traits That Balance | صفات متقابلة تتوازن |
| 508 | AI-draft | Personality Balance | توازن الشخصية |
| 509 | AI-draft | Plain-language explanations of numerology concepts | شرح مفاهيم علم العدد بلغة بسيطة |
| 510 | AI-draft | Requires Conscious Effort (50-74%) | يتطلّب جهدًا واعيًا (50-74%) |
| 511 | AI-draft | Saturn Energy | طاقة زحل |
| 512 | AI-draft | Saturn people are responsible, patient, and build lasting structures. They're reliable and wise but can be emotionally reserved or pessimistic. In relationships: they provide stability but need to warm up emotionally. | أهل زحل مسؤولون صبورون يبنون بنى دائمة. موثوقون حكماء لكنهم قد يكونون متحفّظين عاطفيًا أو متشائمين. وفي العلاقات: يقدّمون الثبات لكنهم يحتاجون إلى دفء عاطفي. |
| 513 | AI-draft | Science of Letters | علم الحروف |
| 514 | AI-draft | Significant natural differences that require deep work, maturity, and often professional guidance. Not a death sentence—some of the strongest relationships grow from here—but both partners must be exceptionally committed. | فروق طبيعية كبيرة تتطلّب عملًا عميقًا ونضجًا، وكثيرًا ما تتطلّب إرشادًا متخصّصًا. وليست حكمًا نهائيًا — فبعض أقوى العلاقات تنمو من هنا — لكن على الطرفين التزامًا استثنائيًا. |
| 515 | AI-draft | Soul-Level Recognition | تعارف على مستوى الروح |
| 516 | AI-draft | Special Powerful Numbers (11, 22, 33) | أعداد قوية خاصة (11، 22، 33) |
| 517 | AI-draft | Sun Energy | طاقة الشمس |
| 518 | AI-draft | Temperament Harmony | انسجام الطبع |
| 519 | AI-draft | The Builder & Disciplined | البنّاء المنضبط |
| 520 | AI-draft | The Communicator & Thinker | المتواصل المفكّر |
| 521 | AI-draft | The Deep Feeler | العميق الإحساس |
| 522 | AI-draft | The Energy of Numbers | طاقة الأعداد |
| 523 | AI-draft | The Leader & Light | القائد والنور |
| 524 | AI-draft | The Lover & Peacemaker | المحبّ وصانع السلام |
| 525 | AI-draft | The Nurturer & Intuitive | الراعي الحدسيّ |
| 526 | AI-draft | The Passionate Go-Getter | المقدام الشغوف |
| 527 | AI-draft | The Philosopher & Optimist | الفيلسوف المتفائل |
| 528 | AI-draft | The Stable Builder | البنّاء الثابت |
| 529 | AI-draft | The Thinker & Communicator | المفكّر المتواصل |
| 530 | AI-draft | The Warrior & Doer | المحارب الفاعل |
| 531 | AI-draft | The ancient Islamic practice of studying the numerical values and spiritual meanings of Arabic letters. Each letter is believed to carry divine energy that influences names, words, and ultimately, people's destinies. | الممارسة الإسلامية العريقة في دراسة القيم العددية والمعاني الروحية للحروف العربية. ويُعتقد أن لكل حرف سرًّا يتّصل بالأسماء والكلمات وبمسار الإنسان، والأمر كله لله. |
| 532 | AI-draft | The belief that relationships, opportunities, and life events happen when spiritually meant to. If compatibility is low now, perhaps you're not ready for each other yet. Or perhaps you're meant to grow separately first. | الاعتقاد بأن العلاقات والفرص وأحداث الحياة تأتي في وقتها المقدَّر. فإن كان التوافق منخفضًا الآن، فلعلّكما لم تستعدّا بعدُ أحدكما للآخر، أو لعلّ لكلٍّ منكما نموًّا منفردًا أولًا. |
| 533 | AI-draft | The divine purpose encoded in your name. It's not about religion only—it's about your deeper calling, what makes life meaningful to you, and how you grow spiritually. | الغاية المكنونة في اسمك. ليست دينية فحسب — بل هي نداؤك الأعمق، وما يجعل الحياة ذات معنى لك، وكيف تنمو روحيًا. |
| 534 | AI-draft | The single-digit number that represents your fundamental nature and life purpose. Calculated from your birth date or name, it reveals your natural strengths, challenges, and spiritual journey. | العدد المفرد الذي يمثّل طبيعتك الأساسية وغاية حياتك. يُحسب من تاريخ ميلادك أو اسمك، ويكشف قواك الطبيعية وتحدّياتك ورحلتك الروحية. |
| 535 | AI-draft | Traditional Islamic mysticism teaches that celestial bodies influence human temperament. Your 'ruling planet' (determined by your number) affects how you love, communicate, act, and feel. Understanding this explains mysterious attractions and conflicts. | يُعلّم التراث الإسلامي التقليدي أن للأجرام السماوية صلة بطباع الإنسان. و«كوكبك الحاكم» (المحدَّد بعددك) يتّصل بطريقتك في المحبّة والتواصل والعمل والشعور. وفهم ذلك يفسّر بعض الانجذاب والصراع الغامضين. |
| 536 | AI-draft | Venus Energy | طاقة الزهرة |
| 537 | AI-draft | Water Element | عنصر الماء |
| 538 | AI-draft | Water people are emotionally intelligent, nurturing, and intuitive. They feel deeply and care profoundly but can be overly sensitive or moody. Think: 'How does everyone feel about this?' Water needs to balance emotions with logic. | أهل الماء أذكياء عاطفيًا، حانون، حدسيّون. يشعرون بعمق ويهتمّون كثيرًا لكنهم قد يفرطون في الحساسية أو يتقلّبون. شعارهم: «ما شعور الجميع حيال هذا؟». ويحتاج الماء إلى موازنة العاطفة بالعقل. |
| 539 | AI-draft | When your differences actually help each other. Fire's enthusiasm energizes Earth's caution. Water's depth grounds Air's scattered thoughts. These aren't conflicts—they're completing each other's weaknesses. | حين تعين اختلافاتكما كلًّا منكما. فحماسة النار تُنشّط حذر التراب، وعمق الماء يُثبّت أفكار الهواء المتبعثرة. وليست هذه صراعات — بل يُكمل كلٌّ منكما ضعف الآخر. |
| 540 | AI-draft | You have potential but need to actively work on understanding, communication, and compromise. Success depends on both partners' commitment. Many happy marriages exist in this range—it just takes more intentional effort. | لديكما إمكانات لكنكما تحتاجان إلى العمل بفاعلية على التفاهم والتواصل والتنازل. والنجاح يتوقّف على التزام الطرفين. وكثير من الزيجات السعيدة في هذا المدى — إنما تتطلّب جهدًا أكثر قصدًا. |
| 541 | AI-draft | Your Basic Nature (Fire/Water/Air/Earth) | طبيعتك الأساسية (نار/ماء/هواء/تراب) |
| 542 | AI-draft | Your Core Number | عددك الجوهري |
| 543 | AI-draft | Your Spiritual Life Path | مسار حياتك الروحي |
| 544 | AI-draft | 50-64: Moderate 🧡 | 50-64: معتدل 🧡 |
| 545 | AI-draft | 65-74: Good Match 💛 | 65-74: توافق جيد 💛 |
| 546 | AI-draft | 85-100: Excellent Match 💚 | 85-100: توافق ممتاز 💚 |
| 547 | ✅ reviewed | Analyzes the interaction of your elemental natures (Fire, Water, Air, Earth). Fire brings passion, Water brings emotion, Air brings intellect, Earth brings stability. Understanding your elemental blend helps navigate daily interactions. | يحلّل تفاعل طبيعة عنصر كلٍّ منكما (النار، الماء، الهواء، التراب). فالنار تجلب الشغف، والماء العاطفة، والهواء العقل، والتراب الثبات. وفهم مزيج عناصركما يعين على التعامل اليومي. |
| 548 | AI-draft | Ancient Wisdom for Modern Relationships | حكمة قديمة لعلاقات اليوم |
| 549 | AI-draft | Below 50: Challenging ❤️ | أقل من 50: صعب ❤️ |
| 550 | AI-draft | Communication is Everything | التواصل هو كل شيء |
| 551 | AI-draft | Compatibility analysis shows natural tendencies, not fixed destiny. Any two committed people can build a beautiful relationship through conscious effort, communication, and faith. Low compatibility means more work, not impossibility. | تحليل التوافق يُظهر ميولًا طبيعية لا قدرًا محتومًا. وأي شخصين ملتزمين يستطيعان بناء علاقة جميلة بالجهد الواعي والتواصل والإيمان. فالتوافق المنخفض يعني جهدًا أكبر لا استحالة. |
| 552 | AI-draft | Compatibility analysis uses the sacred science of ʿIlm al-Ḥurūf (Science of Letters) to understand how two people's energies interact. Your names carry spiritual vibrations that reveal natural harmony or areas requiring conscious effort. | يستعمل تحليل التوافق علم الحروف لفهم تفاعل طاقات شخصين. فلأسمائكما اهتزازات روحية تكشف الانسجام الطبيعي أو المواطن التي تحتاج إلى جهد واعٍ. |
| 553 | AI-draft | Compatibility is a guide, not a sentence. With love, patience, and faith, any committed couple can create a beautiful relationship. | التوافق دليلٌ لا حُكم. وبالمحبّة والصبر والإيمان يستطيع أي زوجين ملتزمين بناء علاقة جميلة. |
| 554 | AI-draft | Consider compatibility as one factor among many—character, shared values, faith, life goals, and mutual respect matter deeply. Use this tool to enter with open eyes, not to make absolute judgments. | اجعل التوافق عاملًا من عوامل كثيرة — فالخُلق والقيم المشتركة والإيمان وغايات الحياة والاحترام المتبادل مهمّة جدًا. استعمل هذه الأداة لتدخل بعينين مفتوحتين، لا لتُصدر أحكامًا مطلقة. |
| 555 | ✅ reviewed | Discover why certain patterns exist in your relationship. Understanding your elemental and planetary dynamics can transform conflicts into opportunities for deeper connection and growth. | اكتشف لماذا توجد أنماط معيّنة في علاقتكما. ففهم حركية العناصر والكواكب بينكما قد يحوّل الصراعات إلى فرص لصلة أعمق ونموّ. |
| 556 | AI-draft | Examines how your spiritual essences align. This reveals your capacity for deep understanding, shared life purpose, and spiritual growth together. High scores indicate natural soul-level resonance. | يفحص مدى انسجام جوهريكما الروحيين. ويكشف قدرتكما على الفهم العميق والغاية المشتركة في الحياة والنموّ الروحي معًا. والنتائج العالية تشير إلى رنين طبيعي على مستوى الروح. |
| 557 | AI-draft | Grow Spiritually Together | انموا روحيًا معًا |
| 558 | AI-draft | High spiritual compatibility means you can support each other's faith journey. Make dhikr together, pray together, study together. Shared spiritual practice strengthens all types of compatibility. | التوافق الروحي العالي يعني أنكما تستطيعان دعم رحلة الإيمان لدى كلٍّ منكما. اذكرا الله معًا، وصلّيا معًا، وتعلّما معًا. والممارسة الروحية المشتركة تقوّي كل أنواع التوافق. |
| 559 | AI-draft | If one partner is more Fire (impulsive), the other's Earth (stable) quality can create beautiful balance—if both appreciate rather than resist it. Work with your differences, not against them. | إن كان أحد الطرفين ناريًا أكثر (مندفعًا)، فقد تصنع صفة التراب (الثبات) لدى الآخر توازنًا جميلًا — إن قدّرها كلاهما بدل مقاومتها. اعملا مع اختلافاتكما لا ضدّها. |
| 560 | AI-draft | In Islamic tradition, names are not random—they carry divine energy and influence your destiny. When two names come together, their combined energies create a unique relationship dynamic that can be understood and optimized. | في التراث الإسلامي ليست الأسماء عشوائية — فلها معانٍ وأسرار، وقد يكون لها أثر في المسار بإذن الله. وحين يجتمع اسمان، تصنع طاقتهما المجتمعة ديناميكية علاقة فريدة يمكن فهمها وإحسانها. |
| 561 | AI-draft | Learn how Islamic numerology reveals the harmony between two souls | تعرّف كيف يكشف علم العدد الانسجام بين روحين |
| 562 | AI-draft | Natural harmony flows between you. Your energies complement each other beautifully. Even challenges feel manageable because you 'get' each other intuitively. This is rare and precious. | انسجام طبيعي يسري بينكما. تتكامل طاقتاكما تكاملًا جميلًا، وحتى التحدّيات تبدو محتملة لأن كلًّا منكما «يفهم» الآخر بالفطرة. وهذا نادر ونفيس. |
| 563 | AI-draft | Practical Relationship Wisdom | حكمة عملية في العلاقات |
| 564 | AI-draft | Remember: Free Will Matters Most | تذكّر: الإرادة والاختيار هما الأهمّ |
| 565 | AI-draft | Requires conscious effort and mutual understanding. Success depends on both partners' commitment to growth, communication, and respecting differences. Professional guidance may help navigate challenges. | يتطلّب جهدًا واعيًا وتفاهمًا متبادلًا. والنجاح يتوقّف على التزام الطرفين بالنموّ والتواصل واحترام الاختلافات. وقد يعين الإرشاد المتخصّص على تجاوز التحدّيات. |
| 566 | AI-draft | Seek Balance Together | اطلبا التوازن معًا |
| 567 | AI-draft | Solid foundation with room for growth. You can build something beautiful by consciously working on understanding and compromise. Many successful relationships thrive in this range. | أساس متين مع مجال للنموّ. يمكنكما بناء شيء جميل بالعمل الواعي على التفاهم والتنازل. وكثير من العلاقات الناجحة تزدهر في هذا المدى. |
| 568 | AI-draft | Studies how your ruling planets interact. Each planet governs different energies—Mars (action), Venus (love), Mercury (communication), etc. Planetary harmony indicates ease in specific life areas. | يدرس تفاعل كوكبيكما الحاكمين. فلكل كوكب طاقاته — المريخ (العمل)، الزهرة (المحبّة)، عطارد (التواصل)، وهكذا. والانسجام الكوكبي يشير إلى يُسر في مجالات معيّنة من الحياة. |
| 569 | AI-draft | The Three Analysis Methods | طرق التحليل الثلاث |
| 570 | AI-draft | Three Sacred Dimensions | ثلاثة أبعاد |
| 571 | AI-draft | Understanding Relationship Compatibility | فهم توافق العلاقات |
| 572 | AI-draft | Understanding Your Score | فهم نتيجتك |
| 573 | AI-draft | Use compatibility insights to understand potential strengths and challenges early. High compatibility doesn't guarantee success, and low scores don't doom a relationship—but awareness helps you prepare and communicate better. | استعمل لمحات التوافق لفهم مواطن القوة والتحدّي المحتملة مبكرًا. فالتوافق العالي لا يضمن النجاح، والنتائج المنخفضة لا تحكم على علاقة بالفشل — لكن الوعي يعين على الاستعداد وحسن التواصل. |
| 574 | ✅ reviewed | We analyze compatibility through three complementary lenses: Soul Connection (spiritual alignment), Personality Balance (elemental harmony), and Cosmic Harmony (planetary influences). Each reveals different aspects of your relationship potential. | نحلّل التوافق من ثلاث زوايا متكاملة: صلة الأرواح (الانسجام الروحي)، وتوازن الشخصية (انسجام العناصر)، والانسجام الكوني (الصلات الكوكبية). وكل منها يكشف جانبًا مختلفًا من إمكانات علاقتكما. |
| 575 | AI-draft | What is Compatibility Analysis? | ما تحليل التوافق؟ |
| 576 | AI-draft | Why Names Matter | لماذا تهمّ الأسماء |
| 577 | ✅ reviewed | Your elemental and planetary differences aren't problems to fix—they're complementary strengths. Fire needs Water's depth, Air needs Earth's grounding. Appreciate what your partner brings. | اختلافاتكما في العناصر والكواكب ليست مشكلات تُصلَح — بل قوى متكاملة. فالنار تحتاج إلى عمق الماء، والهواء يحتاج إلى ثبات التراب. قدّر ما يأتي به شريكك. |
| 578 | AI-draft | 🌟 Cosmic Harmony (Planetary Compatibility) | 🌟 الانسجام الكوني (التوافق الكوكبي) |
| 579 | ✅ reviewed | 🎨 Personality Balance (Elemental Temperament) | 🎨 توازن الشخصية (مزاج العناصر) |
| 580 | AI-draft | 💫 Soul Connection (Spiritual Destiny) | 💫 صلة الأرواح (المسار الروحي) |
| 581 | AI-draft | Transliteration Confidence: | ثقة النقل الحرفي: |
| 582 | AI-draft | Community | المجتمع |
| 583 | AI-draft | (Islamic Science of Letters) traditions. It is designed for | (علم الحروف) في التراث. وهو مصمَّم لـ |
| 584 | AI-draft | , not for divination, prediction, or guaranteeing outcomes. | ، لا للكهانة ولا للتنبّؤ ولا لضمان النتائج. |
| 585 | AI-draft | Consult qualified Islamic scholars for religious guidance and professional advisors for important personal/financial decisions. This tool should complement, not replace, practical wisdom and professional counsel. | ارجع إلى أهل العلم المؤهّلين في المسائل الشرعية، وإلى المستشارين المتخصّصين في القرارات الشخصية والمالية المهمّة. وهذه الأداة تُكمّل الحكمة العملية والمشورة المتخصّصة ولا تحلّ محلّهما. |
| 586 | AI-draft | Dismiss disclaimer | إغلاق التنبيه |
| 587 | AI-draft | Key Limitations: | حدود أساسية: |
| 588 | AI-draft | May this knowledge bring you closer to understanding the divine wisdom woven into creation. | نسأل الله أن تقرّبنا هذه المعرفة من فهم الحكمة الإلهية المنسوجة في الخلق. |
| 589 | AI-draft | Qadr | القدر |
| 590 | AI-draft | Spiritual Reflection Tool Only: | أداة للتأمّل الروحي فقط: |
| 591 | AI-draft | The Divine alone controls all outcomes ( | الله وحده بيده كل النتائج ( |
| 592 | AI-draft | These calculations | هذه الحسابات |
| 593 | AI-draft | This application provides guidance based on classical | يقدّم هذا التطبيق إرشادًا مبنيًا على تراث |
| 594 | AI-draft | Wa 'alaikum assalaam wa rahmatullahi wa barakatuh | وعليكم السلام ورحمة الله وبركاته |
| 595 | AI-draft | do not predict the future | لا تتنبّأ بالمستقبل |
| 596 | AI-draft | not divination, fortune-telling, or Islamic legal guidance | ليست كهانة ولا عرافة ولا فتوى شرعية |
| 597 | AI-draft | or guarantee specific results | ولا تضمن نتائج معيّنة |
| 598 | AI-draft | remain your own responsibility | تبقى مسؤوليتك |
| 599 | AI-draft | self-reflection and timing | التأمّل في النفس والتوقيت |
| 600 | AI-draft | spiritual reflection and understanding | التأمّل والفهم الروحي |
| 601 | AI-draft | 📖 Important Notice About This Application | 📖 تنبيه مهمّ حول هذا التطبيق |
| 602 | AI-draft | About This Guidance | حول هذا الإرشاد |
| 603 | AI-draft | accurate location-based | دقيقة بحسب الموقع |
| 604 | AI-draft | planetary hour calculations | حسابات الساعات الكوكبية |
| 605 | AI-draft | • A cultural practice tool, not religious obligation | • أداة لممارسة ثقافية، لا واجب ديني |
| 606 | AI-draft | • Based on traditional Islamic letter science (ʿIlm al-Ḥurūf - علم الحروف) | • مبنية على علم الحروف التقليدي |
| 607 | AI-draft | • For personal reflection and mindfulness, not fortune-telling | • للتأمّل الشخصي والوعي، لا للعرافة |
| 608 | AI-draft | Divine Name Connection | الصلة بالاسم الحسن |
| 609 | AI-draft | Your spiritual resonance with a Name of Allah, from ʿIlm al-Ḥurūf | رنينك الروحي مع اسم من أسماء الله، من علم الحروف |
| 610 | AI-draft | reduce 1–9 | اختزال 1–9 |
| 611 | AI-draft | Discover your spiritual resonance with the 99 Names of Allah | اكتشف رنينك الروحي مع أسماء الله الحسنى |
| 612 | AI-draft | Pick a Name | اختر اسمًا |
| 613 | AI-draft | Please choose a Divine Name | يُرجى اختيار اسم من الأسماء الحسنى |
| 614 | ✅ reviewed | We'll calculate your resonance with all 99 Names and show you the ones that resonate most favorably. | سنحسب مدى تناسب اسمك مع الأسماء الحسنى كلها ونعرض لك أقربها إليه. |
| 615 | AI-draft | You and a Divine Name | أنت واسم من الأسماء الحسنى |
| 616 | AI-draft | Call upon Allah by the Name whose meaning matches your need — Quran 7:180 | ﴿وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا﴾ — الأعراف 180 |
| 617 | AI-draft | Each of the 99 Names is classically associated with certain qualities. Matching your intention to a Name whose meaning relates to it is a way of calling on Allah by the Name best suited to your need, rather than an arbitrary choice. | لكل اسم من الأسماء الحسنى صفات ترتبط به في التراث. ومطابقة نيّتك لاسم يتّصل معناه بها طريقٌ لدعاء الله بالاسم الأنسب لحاجتك، لا اختيار اعتباطي. |
| 618 | AI-draft | Find the Best Names | اعثر على أفضل الأسماء |
| 619 | AI-draft | We'll search all 99 Names and show you the ones that best match your intention. | سنبحث في الأسماء الحسنى كلها ونعرض لك أنسبها لنيّتك. |
| 620 | AI-draft | Authentic Prophetic Supplication | دعاء نبوي ثابت |
| 621 | AI-draft | For an important decision, istikhāra (2 rakʿahs + the prophetic supplication) remains the established practice. What follows is a complement to it — not a replacement. | في القرار المهمّ تبقى الاستخارة (ركعتان مع الدعاء النبوي) هي السنّة الثابتة. وما يلي مكمّل لها — لا بديل عنها. |
| 622 | AI-draft | Repeat the Name as often as you wish, with sincerity and proper adab — no fixed number is required. This is spiritual reflection, not a guarantee or an occult practice. | ردّد الاسم ما شئت بإخلاص وأدب — دون عدد ملزم. هذا تأمّل روحي، لا ضمان ولا ممارسة سحرية. |
| 623 | AI-draft | optimal Name | الاسم الأنسب |
| 624 | AI-draft | Suggested Alternatives | بدائل مقترحة |
| 625 | AI-draft | Needs discipline | يحتاج إلى انضباط |
| 626 | AI-draft | Strong resonance | رنين قوي |
| 627 | AI-draft | Workable resonance | رنين قابل للعمل |
| 628 | AI-draft | of 99 Names resonate strongly with | من الأسماء الحسنى لها رنين قوي مع |
| 629 | ✅ reviewed | 🌙 Spiritual Destiny \| 🌊 Elemental Temperament \| ⭐ Planetary Cosmic \| 🤝 Daily Interaction | 🌙 المسار الروحي \| 🌊 مزاج العناصر \| ⭐ الكوني الكوكبي \| 🤝 التفاعل اليومي |
| 630 | AI-draft | ) guides you toward your higher purpose. | ) يرشدك إلى غايتك الأسمى. |
| 631 | AI-draft | ) represents your spiritual essence, while your Soul Urge ( | ) يمثّل جوهرك الروحي، بينما رغبة روحك ( |
| 632 | AI-draft | ) shows how others perceive you, and your Destiny ( | ) تُظهر كيف يراك الآخرون، ومسارك ( |
| 633 | AI-draft | , aligning with your Personal Year | ، متوافقًا مع سنتك الشخصية |
| 634 | AI-draft | , carrying deep spiritual significance: | ، ويحمل دلالة روحية عميقة: |
| 635 | AI-draft | Bismillah Value - Divine grace and blessed beginnings | قيمة البسملة - النعمة الإلهية والبدايات المباركة |
| 636 | AI-draft | Compatibility Calculator | حاسبة التوافق |
| 637 | AI-draft | Days of Creation - Spiritual completion and divine perfection | أيام الخلق - الكمال الروحي |
| 638 | AI-draft | Deepest Desire | الرغبة الأعمق |
| 639 | AI-draft | Divine Attribute | صفة إلهية |
| 640 | AI-draft | Energetic Influence | الأثر الطاقي |
| 641 | AI-draft | Karmic Debt | الدَّين الكارمي |
| 642 | AI-draft | Life Pinnacles & Challenges | قمم الحياة وتحدّياتها |
| 643 | AI-draft | Master | رئيسي |
| 644 | AI-draft | Mastery Gift | هبة الإتقان |
| 645 | AI-draft | Maternal Influence Number | عدد أثر الأم |
| 646 | AI-draft | Monthly Themes | موضوعات شهرية |
| 647 | AI-draft | Months & Holy Imams - Cosmic order and divine leadership | الشهور والأئمة - النظام الكوني والقيادة |
| 648 | AI-draft | Names of Allah (Asma ul-Husna) - Divine attributes manifestation | أسماء الله الحسنى - تجلّي الصفات الإلهية |
| 649 | AI-draft | Nations & Completion - Universal wisdom and fulfillment | الأمم والتمام - الحكمة الكونية والاكتمال |
| 650 | AI-draft | No specific sacred Islamic numbers detected in your name at this time. Sacred numbers include: 7 (creation), 12 (months/Imams), 19 (Quranic miracle), 40 (transformation), 70 (nations), 99 (names of Allah), 111 (Al-Ikhlas), 313 (Badr warriors), 786 (Bismillah), 1000 (perfection). | لم تُكتشف أعداد إسلامية مميّزة في اسمك حاليًا. ومن هذه الأعداد: 7 (الخلق)، 12 (الشهور/الأئمة)، 19 (العدد في القرآن)، 40 (التحوّل)، 70 (الأمم)، 99 (أسماء الله)، 111 (الإخلاص)، 313 (أهل بدر)، 786 (البسملة)، 1000 (الكمال). |
| 651 | AI-draft | Number Guide | دليل الأعداد |
| 652 | AI-draft | Nurturing Qualities | صفات الرعاية |
| 653 | AI-draft | Pinnacle | القمّة |
| 654 | AI-draft | Pinnacle 1 | القمّة 1 |
| 655 | AI-draft | Pinnacle 2 | القمّة 2 |
| 656 | AI-draft | Pinnacle 3 | القمّة 3 |
| 657 | AI-draft | Pinnacle 4 | القمّة 4 |
| 658 | AI-draft | Positive Qualities | الصفات الإيجابية |
| 659 | AI-draft | Quranic Miracle Number - Mathematical proof of divine authorship | العدد في القرآن - من دلائل الإعجاز عند بعض الباحثين |
| 660 | AI-draft | Quranic Wisdom | حكمة قرآنية |
| 661 | AI-draft | Reduces to | يُختزل إلى |
| 662 | AI-draft | Sacred Numbers in Your Name | أعداد مميّزة في اسمك |
| 663 | AI-draft | Select a Life Path number to see compatibility | اختر عدد مسار حياة لترى التوافق |
| 664 | AI-draft | Select your partner's Life Path number: | اختر عدد مسار حياة شريكك: |
| 665 | AI-draft | Surah Al-Ikhlas Value - Pure monotheism and divine oneness | قيمة سورة الإخلاص - التوحيد الخالص |
| 666 | AI-draft | Symbolic Perfection - Ultimate completion and mastery | الكمال الرمزي - التمام والإتقان |
| 667 | AI-draft | Synthesis | الخلاصة |
| 668 | AI-draft | Testing Period - Spiritual transformation and purification | مدّة الابتلاء - التحوّل الروحي والتزكية |
| 669 | AI-draft | These sacred numbers in your name suggest a deep connection with Islamic spiritual tradition and carry specific energies that can guide your life path. | تشير هذه الأعداد في اسمك إلى صلة عميقة بالتراث الروحي الإسلامي، ولها معانٍ قد تُعين على التأمّل في مسار حياتك. |
| 670 | AI-draft | This maternal influence enriches your emotional understanding and capacity to care for others. | يُثري أثر الأم هذا فهمك العاطفي وقدرتك على رعاية الآخرين. |
| 671 | AI-draft | Timeline | الخطّ الزمني |
| 672 | AI-draft | To see maternal influence, please provide your mother's name during calculation. This section shows how your mother's numerological energy influences your emotional and spiritual development. | لترى أثر الأم، أدخل اسم أمك عند الحساب. ويُظهر هذا القسم صلة طاقة أمك العددية بنموّك العاطفي والروحي. |
| 673 | AI-draft | Transformation Path | طريق التحوّل |
| 674 | AI-draft | Warning Sign | علامة تنبيه |
| 675 | AI-draft | Warriors of Badr - Victory through faith and courage | أهل بدر - النصر بالإيمان والشجاعة |
| 676 | AI-draft | Year Theme | موضوع السنة |
| 677 | AI-draft | Year in Cycle | السنة في الدورة |
| 678 | AI-draft | Your Life Path ( | مسار حياتك ( |
| 679 | AI-draft | has shaped your emotional and spiritual development. This maternal influence brings unique qualities to your life path. | أسهم في تشكيل نموّك العاطفي والروحي. ويضيف أثر الأم هذا صفات فريدة إلى مسار حياتك. |
| 680 | AI-draft | sacred Islamic number | عدد إسلامي مميّز |
| 681 | AI-draft | theme: " | الموضوع: « |
| 682 | AI-draft | Cycle | الدورة |
| 683 | AI-draft | Karmic Lessons | الدروس الكارمية |
| 684 | AI-draft | Life Purpose: | غاية الحياة: |
| 685 | AI-draft | Spiritual Station: | المقام الروحي: |
| 686 | AI-draft | Your Spiritual Focus | محورك الروحي |
| 687 | AI-draft | ✨ Qualities: | ✨ الصفات: |
| 688 | AI-draft | 🎯 This Year's Focus: | 🎯 محور هذه السنة: |
| 689 | AI-draft | Bug report | بلاغ عن خلل |
| 690 | AI-draft | Describe the issue or your idea… | صِف المشكلة أو فكرتك… |
| 691 | AI-draft | Email (optional) | البريد الإلكتروني (اختياري) |
| 692 | AI-draft | Leave your email if you'd like a reply. | اترك بريدك إن رغبت في الردّ. |
| 693 | AI-draft | Something went wrong — please try again. | حدث خطأ — يُرجى المحاولة مرة أخرى. |
| 694 | AI-draft | Tell us what's working, what's not, or what you'd like to see. | أخبرنا بما ينجح وما لا ينجح، أو بما تودّ رؤيته. |
| 695 | AI-draft | What kind of feedback is this? | ما نوع هذه الملاحظة؟ |
| 696 | AI-draft | Your feedback | ملاحظتك |
| 697 | AI-draft | Your feedback has been received. | وصلتنا ملاحظتك. |
| 698 | AI-draft | Install Asrār on your iPhone | ثبّت أسرار على iPhone |
| 699 | AI-draft | Personalised spiritual guidance · Dhikr · Abjad · Planetary Hours | إرشاد روحي شخصي · الذكر · الأبجد · الساعات الكوكبية |
| 700 | AI-draft | Tap | اضغط |
| 701 | AI-draft | then "Add to Home Screen" | ثم «إضافة إلى الشاشة الرئيسية» |
| 702 | AI-draft | A classical Islamic text by Al-Būnī (13th century) documenting the science of letters, numerical correspondences, and their spiritual applications. A primary reference for Abjad systems. | نصّ إسلامي كلاسيكي للبوني (القرن الثالث عشر الميلادي) يوثّق علم الحروف والمناسبات العددية وتطبيقاتها الروحية. وهو مرجع أساسي لأنظمة الأبجد. |
| 703 | AI-draft | A mathematical process of repeatedly adding digits until a single digit (1-9) remains. Formula: 1 + ((n - 1) % 9). Essential for calculating Saghir and Soul Urge. | عملية رياضية تجمع الأرقام مرارًا حتى يبقى رقم واحد (1-9). الصيغة: 1 + ((n - 1) % 9). وهي أساسية لحساب الصغير ورغبة الروح. |
| 704 | AI-draft | A modern interpretation (not classical) rating compatibility between two names on a 0-100 scale. Based on destiny similarity, soul urge alignment, and special pairings. | تفسير حديث (غير كلاسيكي) يقدّر التوافق بين اسمين على مقياس من 0 إلى 100، بناءً على تشابه المسار وانسجام رغبة الروح والأزواج الخاصة. |
| 705 | AI-draft | A suggested Quranic verse based on your name's numerical value. Intended for spiritual reflection and gaining insight. Not a prediction or guarantee. | آية قرآنية مقترحة بحسب القيمة العددية لاسمك، للتأمّل الروحي والتبصّر. وليست تنبّؤًا ولا ضمانًا. |
| 706 | AI-draft | Abjad | الأبجد |
| 707 | AI-draft | All names fall into one of four elements with distinct qualities: Fire (active, passionate), Water (emotional, intuitive), Air (intellectual, communicative), Earth (practical, grounded). | تنتمي الأسماء كلها إلى أحد أربعة عناصر لكل منها صفاته: النار (فاعلة شغوفة)، الماء (عاطفي حدسيّ)، الهواء (فكريّ تواصليّ)، التراب (عمليّ ثابت). |
| 708 | AI-draft | An Islamic mystical and numerical science studying the properties and meanings of Arabic letters. Combines orthography, numerology, and spiritual philosophy developed over centuries. | علم إسلامي روحي وعددي يدرس خواصّ الحروف العربية ومعانيها، ويجمع بين الرسم والعدد والفلسفة الروحية عبر قرون. |
| 709 | AI-draft | Annual Cycle Number | عدد الدورة السنوية |
| 710 | AI-draft | Calculated from consonants only. Shows how others perceive you and your outward personality. The mask you present to the world. | يُحسب من الحروف الصامتة فقط. ويُظهر كيف يراك الآخرون وشخصيتك الظاهرة — الوجه الذي تقدّمه للعالم. |
| 711 | AI-draft | Calculated from vowels only (ا, و, ي) in your name. Reveals your deepest desires, emotional nature, and what truly motivates you at a spiritual level. | يُحسب من حروف العلّة فقط (ا، و، ي) في اسمك. ويكشف أعمق رغباتك وطبيعتك العاطفية وما يحرّكك حقًّا على المستوى الروحي. |
| 712 | AI-draft | Compatibility Factors | عوامل التوافق |
| 713 | AI-draft | Connection to Quranic Wisdom | الصلة بالحكمة القرآنية |
| 714 | AI-draft | Digital Root (Formula) | الجذر الرقمي (الصيغة) |
| 715 | ✅ reviewed | Elemental Event/Classification | التصنيف بحسب العناصر |
| 716 | ✅ reviewed | Elemental Type | نوع العنصر |
| 717 | AI-draft | In relationship analysis: destiny compatibility (life path alignment), soul urge compatibility (emotional resonance), and special pairings (unique numerological combinations). | في تحليل العلاقات: توافق المسار (انسجام مسار الحياة)، وتوافق رغبة الروح (الرنين العاطفي)، والأزواج الخاصة (تراكيب عددية فريدة). |
| 718 | AI-draft | Inner Desires & Motivations | الرغبات والدوافع الباطنة |
| 719 | AI-draft | Islamic Numerology Glossary | معجم علم العدد |
| 720 | AI-draft | Kawkab | الكوكب |
| 721 | AI-draft | Letter Numerical System | نظام الحروف العددي |
| 722 | AI-draft | Life Path & Purpose | مسار الحياة والغاية |
| 723 | AI-draft | Mathematical Calculation | الحساب الرياضي |
| 724 | AI-draft | Modulo 4 | باقي القسمة على 4 |
| 725 | AI-draft | Outer Expression | التعبير الظاهر |
| 726 | AI-draft | Remainder Division | قسمة الباقي |
| 727 | AI-draft | Sum Reduction Method | طريقة اختزال المجموع |
| 728 | AI-draft | The digital root of Kabir, reduced to a single digit (1-9). Represents the soul essence and core character. Calculated by repeatedly summing digits until one remains. | الجذر الرقمي للكبير، مختزلًا إلى رقم واحد (1-9). يمثّل جوهر الروح والخُلق الأساسي. ويُحسب بجمع الأرقام مرارًا حتى يبقى واحد. |
| 729 | AI-draft | The planetary ruler of the first letter in a name. Seven classical planets govern different letters: Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn. Each brings unique qualities. | الكوكب الحاكم للحرف الأول من الاسم. وتحكم الكواكب السبعة الكلاسيكية حروفًا مختلفة: الشمس، القمر، عطارد، الزهرة، المريخ، المشتري، زحل. ولكل منها صفاته. |
| 730 | AI-draft | The spiritual essence number, calculated the same as Saghir (1-9). Represents your inner spiritual nature and soul purpose. Also called "Soul Urge Number". | عدد الجوهر الروحي، ويُحسب كالصغير (1-9). يمثّل طبيعتك الروحية الباطنة وغاية روحك. ويُسمّى أيضًا «عدد رغبة الروح». |
| 731 | AI-draft | Element match: | توافق العنصر: |
| 732 | AI-draft | Learn about this harmony score | تعرّف على نتيجة الانسجام هذه |
| 733 | AI-draft | Moderate Connection | صلة معتدلة |
| 734 | AI-draft | Perfect Connection | صلة تامّة |
| 735 | AI-draft | Planet alignment: | توافق الكوكب: |
| 736 | AI-draft | Strong Connection | صلة قوية |
| 737 | AI-draft | Weak Connection | صلة ضعيفة |
| 738 | AI-draft | ʿIlm al-Ḥurūf (علم الحروف) - Science of Letters | علم الحروف |
| 739 | AI-draft | → Gentle approach recommended | ← يُنصح بالتلطّف |
| 740 | AI-draft | → Optimal flow - all forces aligned | ← انسياب أمثل - كل القوى منسجمة |
| 741 | AI-draft | Action, courage, passion, assertiveness, competition | العمل، الشجاعة، الشغف، الإقدام، المنافسة |
| 742 | AI-draft | Air + Air | هواء + هواء |
| 743 | AI-draft | Air feeds Fire—excellent match! Air brings ideas, Fire brings execution. Both enjoy freedom and excitement. Need to ground together occasionally. | الهواء يغذّي النار — توافق ممتاز! يأتي الهواء بالأفكار والنار بالتنفيذ. وكلاهما يحبّ الحرية والحماسة، ويحتاجان إلى التثبّت معًا أحيانًا. |
| 744 | AI-draft | Air has ideas, Earth implements them. Earth grounds Air's abstractions. Air helps Earth adapt. Good business and life partnership potential. | للهواء الأفكار وللتراب التطبيق. يُثبّت التراب تجريدات الهواء، ويعين الهواء التراب على التكيّف. إمكانات جيدة لشراكة في العمل والحياة. |
| 745 | AI-draft | Beautiful emotional intimacy and mutual understanding. Risk: getting lost in feelings without practical action. Need external grounding. | حميمية عاطفية جميلة وتفاهم متبادل. والخطر: الضياع في المشاعر دون عمل عملي. يحتاجان إلى تثبيت من الخارج. |
| 746 | AI-draft | Brings emotional intelligence, healing, compassion, and spiritual depth | يجلب الذكاء العاطفي والشفاء والرحمة والعمق الروحي |
| 747 | AI-draft | Brings stability, consistency, practical solutions, and long-term planning | يجلب الثبات والاتساق والحلول العملية والتخطيط البعيد |
| 748 | AI-draft | Can be detached, overthinking, inconsistent, or avoid emotional depth | قد يكون منفصلًا، كثير التفكير، متقلّبًا، أو يتجنّب العمق العاطفي |
| 749 | AI-draft | Can be impulsive, impatient, dominating, or burn out quickly | قد يكون مندفعًا، نافد الصبر، متسلّطًا، أو يُنهَك سريعًا |
| 750 | AI-draft | Can be overly sensitive, moody, passive-aggressive, or emotionally overwhelming | قد يكون مفرط الحساسية، متقلّب المزاج، عدائيًا بصمت، أو مُغرقًا عاطفيًا |
| 751 | AI-draft | Can be rigid, resistant to change, materialistic, or boring | قد يكون جامدًا، مقاومًا للتغيير، ماديًا، أو رتيبًا |
| 752 | AI-draft | Challenging but transformative | صعب لكنه محوِّل |
| 753 | AI-draft | Challenging with: | صعب مع: |
| 754 | AI-draft | Communication, intellect, curiosity, versatility, wit | التواصل، العقل، الفضول، تعدّد المواهب، الفطنة |
| 755 | AI-draft | Compatibility Pairs | أزواج التوافق |
| 756 | AI-draft | Compatible with: | متوافق مع: |
| 757 | AI-draft | Cosmic Harmony (Planetary Compatibility) | الانسجام الكوني (التوافق الكوكبي) |
| 758 | AI-draft | Deep dive into each compatibility dimension | تعمّق في كل بُعد من أبعاد التوافق |
| 759 | AI-draft | Earth contains and channels Water beautifully. Water nourishes Earth. Both value depth and commitment. Comfortable, stable, potentially quiet partnership. | يحتوي التراب الماء ويوجّهه بجمال، ويغذّي الماء التراب. وكلاهما يقدّر العمق والالتزام. شراكة مريحة ثابتة، وربما هادئة. |
| 760 | AI-draft | Emotional, intuitive, nurturing, empathetic, deep | عاطفي، حدسيّ، راعٍ، متعاطف، عميق |
| 761 | AI-draft | Endless fascinating conversations! Shared social interests. Risk: avoiding emotional depth. Need to consciously build emotional intimacy. | أحاديث ممتعة لا تنتهي! واهتمامات اجتماعية مشتركة. والخطر: تجنّب العمق العاطفي. يحتاجان إلى بناء الحميمية العاطفية بوعي. |
| 762 | AI-draft | Fire (energy boost), Earth (practical structure), Air (mental clarity) | النار (دفعة طاقة)، التراب (بنية عملية)، الهواء (وضوح ذهني) |
| 763 | AI-draft | Fire can evaporate Water (overwhelm emotions). Water can extinguish Fire (dampen enthusiasm). But balanced: Water adds depth to Fire's passion, Fire brings energy to Water's intuition. | قد تُبخّر النار الماء (تُغرق المشاعر)، وقد يُطفئ الماء النار (يُخمد الحماسة). لكن بالتوازن: يضيف الماء عمقًا إلى شغف النار، وتجلب النار طاقة إلى حدس الماء. |
| 764 | AI-draft | Growth-oriented with effort | موجَّه نحو النموّ بالجهد |
| 765 | AI-draft | How Celestial Energies Influence Your Bond | كيف تتّصل الطاقات السماوية برابطتكما |
| 766 | AI-draft | How It's Calculated | كيف يُحسب |
| 767 | AI-draft | How Your Spiritual Essences Align | كيف تنسجم جواهركما الروحية |
| 768 | AI-draft | In Islamic mystical tradition, celestial bodies carry divine energies that influence human temperament. Your ruling planet—determined by your numerical vibration—affects your natural inclinations, communication style, emotional patterns, and life approach. | في التراث الروحي الإسلامي تُعدّ الأجرام السماوية آياتٍ لها صلة بطباع الإنسان. وكوكبك الحاكم — المحدَّد باهتزازك العددي — يتّصل بميولك الطبيعية وأسلوب تواصلك وأنماطك العاطفية ونهجك في الحياة. |
| 769 | AI-draft | Intellectual, communicative, adaptable, social, innovative | فكريّ، تواصليّ، متكيّف، اجتماعيّ، مبتكر |
| 770 | AI-draft | Intuition, nurturing, emotional depth, sensitivity, adaptability | الحدس، الرعاية، العمق العاطفي، الحساسية، التكيّف |
| 771 | AI-draft | Leadership, vitality, confidence, creativity, self-expression | القيادة، الحيوية، الثقة، الإبداع، التعبير عن الذات |
| 772 | AI-draft | Lots of passion and energy! But two fires can burn each other out. Needs conscious cooling-down practices and taking turns leading. | شغف وطاقة كثيران! لكن النارين قد تُحرق إحداهما الأخرى. يحتاجان إلى ممارسات تهدئة واعية وتناوب القيادة. |
| 773 | AI-draft | Mars (frustration), Jupiter (restriction of growth), Moon (emotional distance) | المريخ (الإحباط)، المشتري (تقييد النموّ)، القمر (البُعد العاطفي) |
| 774 | AI-draft | Mars (mutual respect), Jupiter (shared optimism), Venus (appreciation) | المريخ (الاحترام المتبادل)، المشتري (التفاؤل المشترك)، الزهرة (التقدير) |
| 775 | AI-draft | Mars (too aggressive), Saturn (emotionally cold) | المريخ (عدواني جدًا)، زحل (بارد عاطفيًا) |
| 776 | AI-draft | Mars (too confrontational), Pluto (too intense) | المريخ (تصادمي جدًا)، بلوتو (شديد جدًا) |
| 777 | AI-draft | Mercury people need mental stimulation and conversation. They bring humor, ideas, and social connections. | أهل عطارد يحتاجون إلى تحفيز ذهني وحوار. ويجلبون الدعابة والأفكار والصلات الاجتماعية. |
| 778 | AI-draft | Moon (emotional harmony), Mercury (pleasant communication), Jupiter (shared joy) | القمر (انسجام عاطفي)، عطارد (تواصل لطيف)، المشتري (فرح مشترك) |
| 779 | AI-draft | Moon people are emotionally attuned, caring, and create safe spaces. They need emotional security and can be moody. | أهل القمر مرهفو العاطفة، حانون، يصنعون مساحات آمنة. يحتاجون إلى الأمان العاطفي وقد يتقلّبون. |
| 780 | AI-draft | Naturally harmonious and stable | منسجم وثابت بطبعه |
| 781 | AI-draft | Needs from: | يحتاج من: |
| 782 | AI-draft | Passionate, spontaneous, energetic, inspiring, assertive | شغوف، عفويّ، نشيط، ملهِم، مقدام |
| 783 | ✅ reviewed | Personality Balance (Elemental Temperament) | توازن الشخصية (مزاج العناصر) |
| 784 | AI-draft | Practical, stable, reliable, patient, methodical | عمليّ، ثابت، موثوق، صبور، منهجيّ |
| 785 | AI-draft | Qualities: | الصفات: |
| 786 | AI-draft | Rock-solid but may lack excitement | متين كالصخر لكنه قد يفتقر إلى الحماسة |
| 787 | AI-draft | Saturn (conflicting approaches), Neptune (lack of boundaries) | زحل (تعارض الأساليب)، نبتون (غياب الحدود) |
| 788 | AI-draft | Saturn (dampens enthusiasm), another Sun (competing egos) | زحل (يُخمد الحماسة)، شمس أخرى (تنافس الأنا) |
| 789 | AI-draft | Saturn (frustrating restrictions), another Mars (constant conflict) | زحل (قيود محبطة)، مريخ آخر (صراع دائم) |
| 790 | AI-draft | Saturn (restricts expression), Neptune (creates confusion) | زحل (يقيّد التعبير)، نبتون (يصنع الالتباس) |
| 791 | AI-draft | Saturn people are reliable, serious, and build lasting foundations. They need respect and can be emotionally reserved. | أهل زحل موثوقون جادّون يبنون أسسًا دائمة. يحتاجون إلى الاحترام وقد يكونون متحفّظين عاطفيًا. |
| 792 | AI-draft | Scores below 65 indicate different spiritual orientations or life purposes. This doesn't mean incompatibility—many successful relationships thrive here—but requires conscious effort. You may need to actively create shared spiritual practices and respect that faith looks different for each of you. | النتائج دون 65 تشير إلى اختلاف في التوجّه الروحي أو غايات الحياة. ولا يعني ذلك عدم التوافق — فكثير من العلاقات الناجحة تزدهر هنا — لكنه يتطلّب جهدًا واعيًا. وقد تحتاجان إلى صنع ممارسات روحية مشتركة واحترام أن الإيمان يظهر عند كلٍّ منكما بصورة مختلفة. |
| 793 | AI-draft | Scores of 65-84 show good spiritual potential with some effort needed. Your core values align, but you may express spirituality differently. One might be more outwardly devout while the other is quietly contemplative. Understanding and respecting these differences creates beautiful balance. | النتائج بين 65 و84 تُظهر إمكانات روحية جيدة مع شيء من الجهد. قيمكما الأساسية منسجمة، لكن قد يعبّر كلٌّ منكما عن روحانيته بطريقة مختلفة: فقد يكون أحدكما أظهر تعبّدًا والآخر متأمّلًا في هدوء. وفهم هذه الفروق واحترامها يصنع توازنًا جميلًا. |
| 794 | AI-draft | Scores of 85-100 indicate exceptional spiritual alignment. You share similar life purposes, values, and spiritual orientations. You naturally support each other's growth without forcing it. Spiritual conversations flow easily. You may finish each other's sentences or sense each other's emotional states intuitively. | النتائج بين 85 و100 تشير إلى انسجام روحي استثنائي. تشتركان في غايات الحياة والقيم والتوجّه الروحي، ويدعم كلٌّ منكما نموّ الآخر دون تكلّف. والأحاديث الروحية تنساب بيسر، وقد يُتمّ أحدكما جملة الآخر أو يستشعر حاله العاطفية بالفطرة. |
| 795 | AI-draft | Soul Connection (Spiritual Destiny) | صلة الأرواح (المسار الروحي) |
| 796 | ✅ reviewed | Soul Connection analyzes the numerical essence of your names to reveal spiritual compatibility. In Islamic numerology, each letter carries a sacred value that represents divine attributes. When we calculate your combined spiritual number, we discover how naturally your souls resonate. | تحلّل صلة الأرواح الجوهر العددي لاسميكما لتعرض قراءةً تأمّليةً للتوافق بحسب علم العدد. ففي علم العدد لكل حرف قيمة ترتبط بمعانٍ روحية. وحين نحسب عددكما الروحي المجتمع نكتشف مدى الرنين الطبيعي بين روحيكما. |
| 797 | AI-draft | Sun (mutual respect), Jupiter (shared enthusiasm), Venus (balancing softness) | الشمس (الاحترام المتبادل)، المشتري (الحماسة المشتركة)، الزهرة (اللين الموازن) |
| 798 | AI-draft | Sun (mutual warmth), Mercury (intellectual exploration), Venus (shared appreciation) | الشمس (الدفء المتبادل)، عطارد (الاستكشاف الفكري)، الزهرة (التقدير المشترك) |
| 799 | AI-draft | Sun people bring warmth, generosity, and inspiring energy. They need admiration and tend to take center stage. | أهل الشمس يجلبون الدفء والكرم والطاقة الملهِمة. يحتاجون إلى الإعجاب ويميلون إلى تصدّر المشهد. |
| 800 | AI-draft | The Planets and Their Influences | الكواكب وصلاتها |
| 801 | ✅ reviewed | The four elements—Fire, Water, Air, Earth—represent fundamental personality types. Your elemental makeup determines how you approach life, relationships, and challenges. | العناصر الأربعة — النار والماء والهواء والتراب — تمثّل أنماط الشخصية الأساسية. وتركيب عناصرك يصف طريقتك في مواجهة الحياة والعلاقات والتحدّيات. |
| 802 | AI-draft | Traditional Islamic astronomy recognized seven celestial influences: Sun (identity, vitality), Moon (emotions, intuition), Mercury (communication, intellect), Venus (love, beauty), Mars (action, courage), Jupiter (wisdom, expansion), Saturn (discipline, structure). | عرف علم الفلك الإسلامي التقليدي سبعة أجرام سماوية: الشمس (الهوية، الحيوية)، القمر (العاطفة، الحدس)، عطارد (التواصل، العقل)، الزهرة (المحبّة، الجمال)، المريخ (العمل، الشجاعة)، المشتري (الحكمة، الاتساع)، زحل (الانضباط، البنية). |
| 803 | AI-draft | Traits: | السمات: |
| 804 | AI-draft | Ultimate stability and reliability. Shared practical values. Risk: routine becoming rut. Need to consciously inject novelty and spontaneity. | غاية الثبات والموثوقية، وقيم عملية مشتركة. والخطر: أن تصير العادة رتابة. يحتاجان إلى إدخال التجديد والعفوية بوعي. |
| 805 | AI-draft | Understanding Planetary Influence | فهم الصلة الكوكبية |
| 806 | ✅ reviewed | Understanding Your Elemental Dance | فهم رقصة عناصركما |
| 807 | AI-draft | Use this understanding to: 1) Appreciate why certain spiritual topics connect or create friction, 2) Find shared spiritual practices that honor both paths, 3) Support each other's individual spiritual journey without forcing similarity, 4) Create family spiritual traditions that blend both approaches. | استعمل هذا الفهم من أجل: 1) تقدير سبب تلاقي بعض الموضوعات الروحية أو احتكاكها، 2) إيجاد ممارسات روحية مشتركة تحترم الطريقين، 3) دعم رحلة كلٍّ منكما الروحية الفردية دون فرض التشابه، 4) صنع تقاليد روحية عائلية تمزج النهجين. |
| 808 | AI-draft | Venus (charming dialogue), Jupiter (philosophical exchange), Uranus (innovative thinking) | الزهرة (حوار لطيف)، المشتري (تبادل فلسفي)، أورانوس (تفكير مبتكر) |
| 809 | AI-draft | Venus (mutual gentleness), Neptune (spiritual connection), Sun (complementary) | الزهرة (لين متبادل)، نبتون (صلة روحية)، الشمس (تكامل) |
| 810 | AI-draft | Venus (softening influence), Earth placements (shared practicality) | الزهرة (أثر مليّن)، مواضع ترابية (عملية مشتركة) |
| 811 | AI-draft | Venus people are romantic, affectionate, and seek peace. They value aesthetics and can avoid necessary conflict. | أهل الزهرة رومانسيون ودودون يطلبون السلام. يقدّرون الجمال وقد يتجنّبون الخلاف الضروري. |
| 812 | AI-draft | Water (emotional grounding), Earth (practical application), Fire (decisive action) | الماء (تثبيت عاطفي)، التراب (تطبيق عملي)، النار (عمل حاسم) |
| 813 | AI-draft | What Moderate Compatibility Means | ما معنى التوافق المعتدل |
| 814 | AI-draft | Wisdom, expansion, optimism, generosity, faith | الحكمة، الاتساع، التفاؤل، الكرم، الإيمان |
| 815 | AI-draft | ⛰️ Earth Element | ⛰️ عنصر التراب |
| 816 | AI-draft | 💧 Water Element | 💧 عنصر الماء |
| 817 | AI-draft | 💨 Air Element | 💨 عنصر الهواء |
| 818 | AI-draft | (Science of Letters) and | (علم الحروف) و |
| 819 | AI-draft | (Science of Numbers). | (علم العدد). |
| 820 | ✅ reviewed | Discover the sacred numerical values and elemental associations within Arabic text, connecting language to the deeper patterns of creation. | اكتشف القيم العددية للحروف وصلاتها بالعناصر في النصّ العربي، وصلة اللغة بأنماط الخلق الأعمق. |
| 821 | AI-draft | Explore | استكشف |
| 822 | AI-draft | Version 1.0 • © 2025 | الإصدار 1.0 • © 2025 |
| 823 | AI-draft | is your guide to the Islamic sciences of | دليلك إلى العلوم الإسلامية: |
| 824 | AI-draft | How This Guidance Works | كيف يعمل هذا الإرشاد |
| 825 | AI-draft | This app is based on traditional Islamic letter science (ʿIlm al-Ḥurūf), a centuries-old practice that explores the spiritual meanings and energies associated with Arabic letters and planetary cycles. | يقوم هذا التطبيق على علم الحروف التقليدي، وهو ممارسة عمرها قرون تستكشف المعاني الروحية المرتبطة بالحروف العربية والدورات الكوكبية. |
| 826 | AI-draft | This is a cultural practice tool for self-reflection, not a religious requirement or fortune-telling service. Always use your own judgment and consult qualified professionals for important decisions. | هذه أداة لممارسة ثقافية للتأمّل في النفس، لا واجب ديني ولا خدمة عرافة. استعمل دائمًا حكمك الخاص، وارجع إلى المختصّين المؤهّلين في القرارات المهمّة. |
| 827 | AI-draft | • Absolute predictions | • التنبّؤات المطلقة |
| 828 | AI-draft | • Countdown timers and urgency indicators | • عدّادات تنازلية ومؤشّرات استعجال |
| 829 | AI-draft | • Element compatibility theory - classical principles | • نظرية توافق العناصر - مبادئ كلاسيكية |
| 830 | AI-draft | • Letter values (Abjad system) - from classical texts | • قيم الحروف (نظام الأبجد) - من النصوص الكلاسيكية |
| 831 | AI-draft | • Mindfulness & reflection | • الوعي والتأمّل |
| 832 | AI-draft | • Modern language and interface | • لغة وواجهة حديثتان |
| 833 | AI-draft | • Pattern recognition | • التعرّف على الأنماط |
| 834 | AI-draft | • Personal guidance: Directionally helpful (~70%) | • الإرشاد الشخصي: مفيد في الاتجاه (~70%) |
| 835 | AI-draft | • Planetary hour system - ancient astronomy | • نظام الساعات الكوكبية - علم فلك قديم |
| 836 | AI-draft | • Planetary hours: Accurate with location (90%+) | • الساعات الكوكبية: دقيقة مع الموقع (90%+) |
| 837 | AI-draft | • Professional advice | • المشورة المتخصّصة |
| 838 | AI-draft | • Religious obligation | • الواجب الديني |
| 839 | AI-draft | • Replacing judgment | • أن يحلّ محلّ حكمك |
| 840 | AI-draft | ✅ Do Use For: | ✅ استعمله لـ: |
| 841 | AI-draft | ✅ What's Authentic | ✅ ما هو أصيل |
| 842 | AI-draft | 💡 How to Use This Tool | 💡 كيف تستعمل هذه الأداة |
| 843 | AI-draft | 📏 Accuracy Levels | 📏 مستويات الدقّة |
| 844 | AI-draft | 📜 Traditional Foundation | 📜 الأساس التقليدي |
| 845 | ✅ reviewed | Discover Quranic verses, Divine Names, and spiritual guidance based on your elemental profile. Use History to save calculations, and Comparison mode to explore relationships! | اكتشف آيات قرآنية وأسماء حسنى وإرشادًا روحيًا بحسب ملف عناصرك. استعمل السجلّ لحفظ الحسابات، ووضع المقارنة لاستكشاف العلاقات! |
| 846 | AI-draft | Explore Deeper | تعمّق أكثر |
| 847 | ✅ reviewed | Explore the beautiful tradition of ʿIlm al-Ḥurūf (Science of Letters) - an Islamic science that reveals numerical values and elemental associations in Arabic text. | استكشف تراث علم الحروف الجميل — علمٌ إسلامي يكشف القيم العددية للحروف وصلاتها بالعناصر في النصّ العربي. |
| 848 | AI-draft | Let's Begin! | لنبدأ! |
| 849 | AI-draft | Type in English/French (like 'Rahim' or 'Fatou') and we'll transliterate to Arabic. Or use the Arabic keyboard for direct input. Always verify the Arabic spelling for accuracy! | اكتب بالإنجليزية أو الفرنسية (مثل «Rahim» أو «Fatou») وسنحوّله إلى العربية، أو استعمل لوحة المفاتيح العربية للإدخال المباشر. وتحقّق دائمًا من صحّة الكتابة العربية! |
| 850 | ✅ reviewed | • Kabīr (الكبير): Total numerical value • Ṣaghīr (الصغير): Digital root (1-9) • Elements: Fire 🔥 Water 💧 Air 🌬 Earth 🌍 • Ḥadath: Elemental influence pattern | • الكبير: القيمة العددية الكلية • الصغير: الجذر الرقمي (1-9) • العناصر: النار 🔥 الماء 💧 الهواء 🌬 التراب 🌍 • الحدث: نمط أثر العناصر |
| 851 | AI-draft | Coordinates: | الإحداثيات: |
| 852 | AI-draft | Failed to delete avatar: | تعذّر حذف الصورة: |
| 853 | AI-draft | Failed to update profile: | تعذّر تحديث الملف: |
| 854 | AI-draft | Failed to upload avatar: | تعذّر رفع الصورة: |
| 855 | AI-draft | Getting Location... | جارٍ تحديد الموقع... |
| 856 | AI-draft | Location & Timezone | الموقع والمنطقة الزمنية |
| 857 | AI-draft | Profile updated successfully! | حُدِّث الملف بنجاح! |
| 858 | AI-draft | Remove current picture | إزالة الصورة الحالية |
| 859 | AI-draft | UTC | UTC |
| 860 | AI-draft | Used for Name Destiny calculations | يُستعمل في حسابات مسار الاسم |
| 861 | AI-draft | Used for enhanced numerology calculations | يُستعمل في حسابات علم العدد المحسّنة |
| 862 | AI-draft | 📍 Update to Current Location | 📍 التحديث إلى الموقع الحالي |
| 863 | AI-draft | Change Picture | تغيير الصورة |
| 864 | AI-draft | File size must be less than | يجب أن يكون حجم الملف أقل من |
| 865 | AI-draft | JPEG, PNG, WebP, or GIF. Max | JPEG أو PNG أو WebP أو GIF. الحدّ الأقصى |
| 866 | AI-draft | Please select a JPEG, PNG, WebP, or GIF image | يُرجى اختيار صورة JPEG أو PNG أو WebP أو GIF |
| 867 | AI-draft | Profile preview | معاينة الملف |
| 868 | AI-draft | Remove picture | إزالة الصورة |
| 869 | AI-draft | Upload Picture | رفع صورة |
| 870 | AI-draft | Add a profile picture to personalize your account | أضف صورة شخصية لتخصيص حسابك |
| 871 | AI-draft | Enter Location Manually | أدخل الموقع يدويًا |
| 872 | AI-draft | Profile Picture (Optional) | الصورة الشخصية (اختيارية) |
| 873 | AI-draft | This helps us personalize your experience with Asrār Everyday | يساعدنا هذا على تخصيص تجربتك مع أسرار |
| 874 | AI-draft | Used for Name Destiny calculations and personalized guidance | يُستعمل في حسابات مسار الاسم والإرشاد الشخصي |
| 875 | AI-draft | Used for accurate planetary hour calculations and prayer times | يُستعمل لحساب الساعات الكوكبية ومواقيت الصلاة بدقّة |
| 876 | AI-draft | Welcome! Let's set up your profile | مرحبًا! لنُعِدّ ملفك |
| 877 | AI-draft | 📍 Use Current Location | 📍 استعمل الموقع الحالي |
| 878 | AI-draft | Complete your profile to unlock all features and get personalized guidance. | أكمل ملفك لتفتح كل الميزات وتحصل على إرشاد شخصي. |
| 879 | AI-draft | Coordinates | الإحداثيات |
| 880 | AI-draft | Creating your profile... | جارٍ إنشاء ملفك... |
| 881 | AI-draft | No profile found | لم يُعثر على ملف |
| 882 | AI-draft | Not set | غير مضبوط |
| 883 | AI-draft | Set Up Profile | إعداد الملف |
| 884 | AI-draft | Please enter Arabic names for both people | يُرجى إدخال الاسمين بالعربية لكلا الشخصين |
| 885 | AI-draft | OF NINE | من تسعة |
| 886 | AI-draft | Soul connection result: | نتيجة صلة الأرواح: |
| 887 | AI-draft | A traditional soul-resonance marker from ʿIlm al-Ḥurūf | علامة تقليدية لرنين الأرواح من علم الحروف |
| 888 | AI-draft | We sum each name’s abjad letter values, add 7, then reduce the total to a number from 1 to 9. Multiples of nine resolve to 9, never 0. | نجمع قيم حروف كل اسم في الأبجد، ونضيف 7، ثم نختزل المجموع إلى عدد من 1 إلى 9. ومضاعفات التسعة تصير 9، لا 0 أبدًا. |
| 889 | AI-draft | Maghrib practice (default) | الممارسة المغربية (افتراضي) |
| 890 | AI-draft | Mashreq practice | الممارسة المشرقية |
| 891 | AI-draft | ". This dhikr amplifies the positive energy of this hour. | ». وهذا الذكر يقوّي الأثر الطيب لهذه الساعة. |
| 892 | AI-draft | ) resonates with the divine qualities of " | ) يتّصل بمعاني « |
| 893 | AI-draft | Complete! Maasha Allah! | اكتمل! ما شاء الله! |
| 894 | AI-draft | Develops patience, discipline, and steady perseverance | ينمّي الصبر والانضباط والمثابرة الثابتة |
| 895 | AI-draft | Illuminates the heart and brings clarity to your path | ينير القلب ويوضّح طريقك |
| 896 | AI-draft | O Light | يا نور |
| 897 | AI-draft | O Most Generous | يا كريم |
| 898 | AI-draft | O Most Gentle | يا لطيف |
| 899 | AI-draft | O Most Loving | يا ودود |
| 900 | AI-draft | O Most Patient | يا صبور |
| 901 | AI-draft | O Most Strong | يا قوي |
| 902 | AI-draft | O Most Wise | يا حكيم |
| 903 | AI-draft | Soothes difficulties and opens doors gently | يلطّف الصعاب ويفتح الأبواب برفق |
| 904 | AI-draft | Why this dhikr? | لماذا هذا الذكر؟ |
| 905 | AI-draft | 💡 Tip: Recite with presence and sincerity. Quality matters more than quantity. | 💡 نصيحة: اذكر بحضور وإخلاص. فالجودة أهمّ من الكثرة. |
| 906 | AI-draft | 💡 Tip: Use buttons or count on your fingers for traditional practice | 💡 نصيحة: استعمل الأزرار أو العدّ بالأصابع على الطريقة التقليدية |
| 907 | AI-draft | Arabic terms and spiritual concepts | المصطلحات العربية والمفاهيم الروحية |
| 908 | AI-draft | Back to Divine Timing | العودة إلى التوقيت الإلهي |
| 909 | AI-draft | Complete introduction to Islamic planetary hours | مقدّمة كاملة للساعات الكوكبية في التراث الإسلامي |
| 910 | AI-draft | Default: Makkah | الافتراضي: مكة المكرمة |
| 911 | AI-draft | Excellent - Perfect Time! | ممتاز - وقت مثالي! |
| 912 | AI-draft | Explore all 7 planets with Islamic context | استكشف الكواكب السبعة في سياقها الإسلامي |
| 913 | AI-draft | Full day view | عرض اليوم كاملًا |
| 914 | AI-draft | Getting your location... | جارٍ تحديد موقعك... |
| 915 | AI-draft | Low - Time to Rest | منخفض - وقت للراحة |
| 916 | AI-draft | Makkah | مكة المكرمة |
| 917 | AI-draft | Neutral - Be Mindful | محايد - كن واعيًا |
| 918 | AI-draft | Refresh location | تحديث الموقع |
| 919 | AI-draft | This helps us calculate accurate planetary hours | يساعدنا هذا على حساب الساعات الكوكبية بدقّة |
| 920 | AI-draft | Unable to get your location. Using Makkah as default. | تعذّر تحديد موقعك. سنستعمل مكة المكرمة افتراضيًا. |
| 921 | AI-draft | View Timeline | عرض الخطّ الزمني |
| 922 | AI-draft | 🌙 Planetary hours are calculated according to classical Islamic traditions. Use this guidance with your own discernment. | 🌙 تُحسب الساعات الكوكبية وفق التراث الإسلامي الكلاسيكي. استعمل هذا الإرشاد بتمييزك الخاص. |
| 923 | AI-draft | Act with courage | اعمل بشجاعة |
| 924 | AI-draft | Acts of generosity | أعمال الكرم |
| 925 | AI-draft | Avoid excessive spending | اجتنب الإسراف في الإنفاق |
| 926 | AI-draft | Avoid misunderstandings | اجتنب سوء الفهم |
| 927 | AI-draft | Avoid overconfidence | اجتنب الثقة المفرطة |
| 928 | AI-draft | Avoid rigidity | اجتنب الجمود |
| 929 | AI-draft | Channel energy positively | وجّه الطاقة توجيهًا إيجابيًا |
| 930 | AI-draft | Create art | اصنع فنًّا |
| 931 | AI-draft | Disciplined work | عمل منضبط |
| 932 | AI-draft | Double-check messages | راجع الرسائل مرتين |
| 933 | AI-draft | Ended | انتهت |
| 934 | AI-draft | Improve relationships | حسّن العلاقات |
| 935 | AI-draft | Intense physical exercise | تمارين بدنية شديدة |
| 936 | AI-draft | Learn and teach | تعلّم وعلّم |
| 937 | AI-draft | Meditate and pray | تأمّل وصلِّ |
| 938 | AI-draft | Meet influential people | قابل أصحاب التأثير |
| 939 | AI-draft | Negotiate and plan | فاوض وخطّط |
| 940 | AI-draft | Pleasant activities | أنشطة لطيفة |
| 941 | AI-draft | Postpone romantic decisions | أجّل القرارات العاطفية |
| 942 | AI-draft | Practice modesty | تحلَّ بالتواضع |
| 943 | AI-draft | Rest and recharge | استرح واستعد نشاطك |
| 944 | AI-draft | Set boundaries | ضع حدودًا |
| 945 | AI-draft | Socialize | اختلط بالناس |
| 946 | AI-draft | Stand your ground | اثبت على موقفك |
| 947 | AI-draft | Structured tasks | مهامّ منظّمة |
| 948 | AI-draft | Study sacred texts | ادرس النصوص الشرعية |
| 949 | AI-draft | Take a step back | تراجع خطوة |
| 950 | AI-draft | Take initiative | بادر |
| 951 | AI-draft | Tasks requiring energy | مهامّ تتطلّب طاقة |
| 952 | AI-draft | Travel and explore | سافر واستكشف |
| 953 | AI-draft | Trust your intuition | ثق بحدسك |
| 954 | AI-draft | Write and communicate | اكتب وتواصل |
| 955 | AI-draft | min remaining | دقيقة متبقّية |
| 956 | AI-draft | minutes remaining | دقائق متبقّية |
| 957 | AI-draft | ✨ Perfect time to act with confidence | ✨ وقت مثالي للعمل بثقة |
| 958 | AI-draft | 🌙 Time to rest and reflect | 🌙 وقت للراحة والتأمّل |
| 959 | AI-draft | 🌟 Balanced energy - proceed thoughtfully | 🌟 طاقة متوازنة - تقدّم بتروٍّ |
| 960 | AI-draft | Conversations | المحادثات |
| 961 | AI-draft | Prayer & Worship | الصلاة والعبادة |
| 962 | AI-draft | Work & Projects | العمل والمشاريع |
| 963 | AI-draft | ☀️ Not ideal for work - consider rescheduling important tasks | ☀️ ليس مثاليًا للعمل - فكّر في تأجيل المهامّ المهمّة |
| 964 | AI-draft | ☿️ High risk of miscommunication - double-check everything | ☿️ احتمال كبير لسوء التواصل - راجع كل شيء |
| 965 | AI-draft | ☿️ Okay for routine communication and simple tasks | ☿️ لا بأس به للتواصل الروتيني والمهامّ البسيطة |
| 966 | AI-draft | ♀️ Focus on beauty may distract from spiritual essence | ♀️ قد يصرف التركيز على الجمال عن الجوهر الروحي |
| 967 | AI-draft | ♀️ Good for gentle worship, but may lack depth | ♀️ جيد للعبادة اللطيفة، لكنه قد يفتقر إلى العمق |
| 968 | AI-draft | ♀️ Okay for pleasant tasks, but not for hard decisions | ♀️ لا بأس به للمهامّ اللطيفة، لا للقرارات الصعبة |
| 969 | AI-draft | ♀️ Perfect for loving devotion, gratitude, and heart-centered prayer | ♀️ مثالي للعبادة بمحبّة وشكر ودعاء من القلب |
| 970 | AI-draft | ♂️ Excellent for tackling challenges, physical work, and assertive action | ♂️ ممتاز لمواجهة التحدّيات والعمل البدني والعمل الحازم |
| 971 | AI-draft | ♂️ Good for moderate effort, but pace yourself | ♂️ جيد للجهد المعتدل، لكن خذ وقتك |
| 972 | AI-draft | ♂️ High conflict risk - avoid confrontations and aggressive moves | ♂️ احتمال كبير للصراع - اجتنب المواجهات والخطوات العدوانية |
| 973 | AI-draft | ♃ Excellent for studying sacred texts, seeking knowledge, and gratitude | ♃ ممتاز لدراسة النصوص الشرعية وطلب العلم والشكر |
| 974 | AI-draft | ♃ Good for learning, but avoid spiritual pride | ♃ جيد للتعلّم، لكن احذر العُجب الروحي |
| 975 | AI-draft | ♃ Risk of spiritual arrogance - practice humility | ♃ خطر الكِبر الروحي - تحلَّ بالتواضع |
| 976 | AI-draft | ♄ Energy feels heavy - take breaks and be gentle with yourself | ♄ الطاقة ثقيلة - خذ فترات راحة وترفّق بنفسك |
| 977 | AI-draft | ♄ Excellent for disciplined practice, fasting, and serious contemplation | ♄ ممتاز للممارسة المنضبطة والصيام والتأمّل الجادّ |
| 978 | AI-draft | ♄ Good for structured prayer, but avoid rigidity | ♄ جيد للصلاة المنتظمة، لكن اجتنب الجمود |
| 979 | AI-draft | ♄ May feel burdensome - remember divine mercy and compassion | ♄ قد يبدو ثقيلًا - تذكّر رحمة الله ولطفه |
| 980 | AI-draft | ♄ Perfect for disciplined work, structure, and long-term commitments | ♄ مثالي للعمل المنضبط والبنية والالتزامات البعيدة |
| 981 | AI-draft | 🌙 Beautiful time for deep prayer, dhikr, and spiritual connection | 🌙 وقت جميل للدعاء العميق والذكر والصلة الروحية |
| 982 | AI-draft | 🌙 Emotions may cloud your focus - seek simplicity | 🌙 قد تحجب المشاعر تركيزك - اطلب البساطة |
| 983 | AI-draft | 🌙 Good for intuitive work, caring professions, and emotional intelligence | 🌙 جيد للعمل الحدسيّ ومهن الرعاية والذكاء العاطفي |
| 984 | AI-draft | 🌙 Good for prayer, though distractions may arise | 🌙 جيد للدعاء، وإن قد تعرض المشتّتات |
| 985 | AI-draft | 🌙 Okay for routine work, but emotions may interfere | 🌙 لا بأس به للعمل الروتيني، لكن قد تتدخّل المشاعر |
| 986 | AI-draft | 🌙 Too emotional for work - rest and reflect instead | 🌙 عاطفي جدًا للعمل - استرح وتأمّل بدلًا من ذلك |
| 987 | AI-draft | 💫 Neutral time - proceed thoughtfully | 💫 وقت محايد - تقدّم بتروٍّ |
| 988 | AI-draft | Connect with Nature | اتّصل بالطبيعة |
| 989 | AI-draft | Even the mightiest trees need periods of rest to grow stronger. Honor this sacred time. | حتى أعظم الأشجار تحتاج إلى فترات راحة لتزداد قوة. فأكرِم هذا الوقت. |
| 990 | AI-draft | Gentle Quran Reading | تلاوة هادئة للقرآن |
| 991 | AI-draft | Gentle walk, feel the breeze, observe creation | مشيٌ هادئ، استشعر النسيم، وتأمّل الخلق |
| 992 | AI-draft | Gratitude Journal | دفتر الشكر |
| 993 | AI-draft | Mindful Tea | شاي بتأمّل |
| 994 | AI-draft | Quran 2:152 | البقرة 152 |
| 995 | AI-draft | Quran 51:22 | الذاريات 22 |
| 996 | AI-draft | Quran 94:6 | الشرح 6 |
| 997 | AI-draft | Read slowly for comfort, not quantity | اقرأ ببطء للسكينة لا للكثرة |
| 998 | AI-draft | Sacred Silence | صمتٌ خاشع |
| 999 | AI-draft | Selected - Begin when ready | تمّ الاختيار - ابدأ متى كنت مستعدًا |
| 1000 | AI-draft | Slowly sip tea while reflecting on blessings | ارتشف الشاي ببطء متأمّلًا في النعم |
| 1001 | AI-draft | Soft Dhikr | ذكر هادئ |
| 1002 | AI-draft | SubhanAllah, Alhamdulillah, Allahu Akbar - whispered gently | سبحان الله، الحمد لله، الله أكبر - همسًا برفق |
| 1003 | AI-draft | Today's planetary energy invites rest and reflection. This is not a day of weakness, but a sacred day to recharge your soul. | طاقة اليوم الكوكبية تدعو إلى الراحة والتأمّل. وليس هذا يوم ضعف، بل يوم لتجديد روحك. |
| 1004 | AI-draft | ⏰ When Energy Improves: | ⏰ حين تتحسّن الطاقة: |
| 1005 | AI-draft | 💫 Trust in divine timing. Everything comes in its perfect time. | 💫 ثق بتوقيت الله. فكل شيء يأتي في وقته. |
| 1006 | AI-draft | Favorable timing for steady progress. Good for teamwork, planning, and following through. | توقيت مناسب للتقدّم الثابت. جيد للعمل الجماعي والتخطيط والمتابعة. |
| 1007 | AI-draft | Perfect time for important actions! Your energy aligns beautifully with this hour. Take initiative. | وقت مثالي للأعمال المهمّة! طاقتك منسجمة مع هذه الساعة. بادر. |
| 1008 | AI-draft | Proceed with awareness. Good for routine tasks and preparation, but save major decisions for better timing. | تقدّم بوعي. جيد للمهامّ الروتينية والتحضير، لكن أجّل القرارات الكبرى لوقت أنسب. |
| 1009 | AI-draft | Time to rest and recharge. Avoid important decisions. Use this for reflection, journaling, or gentle activities. | وقت للراحة واستعادة النشاط. اجتنب القرارات المهمّة. واستعمله للتأمّل أو التدوين أو الأنشطة اللطيفة. |
| 1010 | AI-draft | Today's Timeline | الخطّ الزمني لليوم |
| 1011 | AI-draft | View 24h | عرض 24 ساعة |
| 1012 | AI-draft | ⚡ Moderate - Proceed with Awareness | ⚡ معتدل - تقدّم بوعي |
| 1013 | AI-draft | ✅ Good - Favorable Timing | ✅ جيد - توقيت مناسب |
| 1014 | AI-draft | ✨ Excellent - Perfect Time! | ✨ ممتاز - وقت مثالي! |
| 1015 | AI-draft | 👁️ View all 24 hours | 👁️ عرض الساعات الأربع والعشرين |
| 1016 | AI-draft | 💡 Quick Tip: | 💡 نصيحة سريعة: |
| 1017 | AI-draft | Challenging (0-39) | صعب (0-39) |
| 1018 | AI-draft | Visualization of your harmony with each planetary hour | تصوير انسجامك مع كل ساعة كوكبية |
| 1019 | AI-draft | Air Element - Represents thought, communication, and spirituality. Associated with Mercury and Jupiter. | عنصر الهواء - يمثّل الفكر والتواصل والروحانية. ويرتبط بعطارد والمشتري. |
| 1020 | AI-draft | Barakah | البركة |
| 1021 | AI-draft | Beauty - Divine beauty and grace. One of the two primary aspects of Allah's attributes (Jamāl and Jalāl). | الجمال - الجمال الإلهي واللطف. وهو أحد وجهي صفات الله الأساسيين (الجمال والجلال). |
| 1022 | AI-draft | Divine Blessing - Spiritual abundance and grace that comes from Allah. Increase in goodness beyond material measure. | البركة الإلهية - الوفرة الروحية والنعمة من الله. زيادة في الخير تتجاوز المقاييس المادية. |
| 1023 | AI-draft | Earth Element - Represents stability, manifestation, and practicality. Associated with Venus and Saturn. | عنصر التراب - يمثّل الثبات والتحقّق والعملية. ويرتبط بالزهرة وزحل. |
| 1024 | AI-draft | Intention - The sincere intention behind an action. In Islam, actions are judged by intentions. | النيّة - القصد الصادق وراء العمل. وفي الإسلام إنما الأعمال بالنيّات. |
| 1025 | AI-draft | Jupiter - Represents divine expansion, generosity, and wisdom. Associated with the Divine Name Al-Wāsi' (The All-Encompassing). | المشتري - يمثّل السعة والكرم والحكمة. ويرتبط باسم الواسع. |
| 1026 | AI-draft | Key Arabic terms and concepts with transliterations and explanations | المصطلحات العربية الأساسية مع النقل الحرفي والشرح |
| 1027 | AI-draft | Knowledge - Especially divine and sacred knowledge. A central concept in Islam emphasizing the pursuit of both worldly and spiritual understanding. | العلم - لا سيما العلم الشرعي. مفهوم محوري في الإسلام يحثّ على طلب الفهم الدنيوي والروحي معًا. |
| 1028 | AI-draft | Lunar Mansions - The 28 stations of the Moon through its monthly cycle. Each has specific spiritual significance and favorable/unfavorable activities. | المنازل القمرية - منازل القمر الثماني والعشرون في دورته الشهرية. ولكل منها دلالة روحية وأنشطة مناسبة وغير مناسبة. |
| 1029 | AI-draft | Mars - Represents divine strength, courage, and action. Associated with the Divine Name Al-Qawiyy (The Strong). | المريخ - يمثّل القوة والشجاعة والعمل. ويرتبط باسم القوي. |
| 1030 | AI-draft | Mercury - Represents divine knowledge, communication, and mental clarity. Associated with the Divine Name Al-'Alīm (The All-Knowing). | عطارد - يمثّل العلم والتواصل ووضوح الذهن. ويرتبط باسم العليم. |
| 1031 | AI-draft | Niyyah | النيّة |
| 1032 | AI-draft | Patience - Endurance and perseverance in face of difficulty. A fundamental virtue in Islam, especially associated with Saturn. | الصبر - التحمّل والمثابرة أمام الشدائد. فضيلة أساسية في الإسلام، ترتبط خصوصًا بزحل. |
| 1033 | AI-draft | Planetary Hours - The ancient system of dividing day and night into 24 unequal hours, each ruled by a classical planet. | الساعات الكوكبية - النظام القديم لتقسيم النهار والليل إلى 24 ساعة غير متساوية، يحكم كلًّا منها كوكب كلاسيكي. |
| 1034 | AI-draft | Reliance on Allah - Complete trust and dependence on Allah while taking appropriate worldly action. | التوكّل على الله - الثقة التامّة بالله والاعتماد عليه مع الأخذ بالأسباب. |
| 1035 | AI-draft | Remembrance - The practice of remembering and invoking Allah, often through repetition of Divine Names or Quranic phrases. | الذكر - ممارسة ذكر الله ودعائه، غالبًا بتكرار الأسماء الحسنى أو العبارات القرآنية. |
| 1036 | AI-draft | Saturn - Represents divine wisdom, patience, and structure. Associated with the Divine Name Al-Ḥakīm (The Wise). | زحل - يمثّل الحكمة والصبر والبنية. ويرتبط باسم الحكيم. |
| 1037 | AI-draft | Spiritual Glossary | معجم المصطلحات الروحية |
| 1038 | AI-draft | Supplication - Personal prayer and petition to Allah. Can be optimized by choosing appropriate planetary hours. | الدعاء - مناجاة العبد ربّه وسؤاله. ويمكن تحرّي الساعات الكوكبية المناسبة له. |
| 1039 | AI-draft | Tawakkul | التوكّل |
| 1040 | AI-draft | The Light - One of the 99 Names of Allah. The source of all illumination and guidance. Associated with the Sun. | النور - من أسماء الله الحسنى. مصدر كل إنارة وهداية. ويرتبط بالشمس. |
| 1041 | AI-draft | The Moon - Represents divine mercy, intuition, and emotional wisdom. Associated with the Divine Name Al-Laṭīf (The Subtle). | القمر - يمثّل الرحمة والحدس والحكمة العاطفية. ويرتبط باسم اللطيف. |
| 1042 | AI-draft | The Subtle - One of the 99 Names of Allah. The Gentle, Kind, and All-Perceiving. Associated with the Moon. | اللطيف - من أسماء الله الحسنى: الرفيق بعباده، الخبير بدقائق الأمور. ويرتبط بالقمر. |
| 1043 | AI-draft | The Sun - Represents divine light, leadership, and consciousness. Associated with the Divine Name An-Nūr (The Light). | الشمس - تمثّل النور والقيادة والوعي. وترتبط باسم النور. |
| 1044 | AI-draft | Venus - Represents divine love, beauty, and harmony. Associated with the Divine Name Al-Wadūd (The Loving). | الزهرة - تمثّل المحبّة والجمال والانسجام. وترتبط باسم الودود. |
| 1045 | AI-draft | Water Element - Represents emotions, intuition, and purification. Associated with the Moon. | عنصر الماء - يمثّل العاطفة والحدس والطهارة. ويرتبط بالقمر. |
| 1046 | AI-draft | Wisdom - Deep understanding combined with right action. The ability to apply knowledge appropriately. | الحكمة - الفهم العميق مع العمل الصحيح. والقدرة على وضع العلم في موضعه. |
| 1047 | AI-draft | Absolutely! Many traditional practices complement planetary hours: performing specific dhikr during aligned hours, timing optional prayers (nafl), scheduling spiritual retreats, choosing times for Quran study, and planning charitable activities. Integration enhances, not replaces, core Islamic practices. | بالتأكيد! كثير من الممارسات التقليدية تُكمّل الساعات الكوكبية: الذكر في الساعات المناسبة، وتوقيت النوافل، وترتيب الخلوات، واختيار أوقات تدبّر القرآن، والتخطيط لأعمال البرّ. والدمج يُثري الشعائر الأساسية ولا يحلّ محلّها. |
| 1048 | AI-draft | Ahmad al-Būnī (d. 1225) wrote extensively about the spiritual significance of planetary hours in his famous work "Shams al-Maʿārif" (The Sun of Knowledge). He connected each planet with specific Divine Names and taught methods for spiritual practice aligned with planetary influences. His work remains influential in Islamic esotericism today. | كتب أحمد البوني (ت. 622هـ/1225م) كثيرًا عن الدلالة الروحية للساعات الكوكبية في كتابه الشهير «شمس المعارف». وربط كل كوكب بأسماء حسنى معيّنة، وعلّم طرقًا للممارسة الروحية الموافقة لصلات الكواكب. ولا يزال لعمله أثر في التراث الباطني الإسلامي اليوم. |
| 1049 | AI-draft | Al-Būnī and Shams al-Maʿārif | البوني و«شمس المعارف» |
| 1050 | AI-draft | Are planetary hours the same as clock hours? | هل الساعات الكوكبية مثل ساعات الساعة؟ |
| 1051 | AI-draft | Can I combine planetary hours with other Islamic practices? | هل يمكنني الجمع بين الساعات الكوكبية وممارسات إسلامية أخرى؟ |
| 1052 | AI-draft | Classical Islamic scholars like Al-Būnī and Ibn ʿArabī integrated planetary knowledge with Islamic spirituality. The key is intention (niyyah): using this knowledge to optimize worship and beneficial activities is acceptable, while believing planets have independent power apart from Allah is prohibited (shirk). Always maintain proper Islamic creed (ʿaqīdah). | جمع علماء مسلمون كلاسيكيون مثل البوني وابن عربي بين المعرفة الكوكبية والروحانية الإسلامية. والمدار على النيّة: فاستعمال هذه المعرفة لتحسين العبادة والأعمال النافعة مقبول، أما اعتقاد أن للكواكب قوة مستقلة عن الله فشرك محرّم. وحافظ دائمًا على العقيدة الصحيحة. |
| 1053 | AI-draft | Do I need to follow planetary hours strictly? | هل يجب أن ألتزم بالساعات الكوكبية التزامًا صارمًا؟ |
| 1054 | AI-draft | Don't worry! The most important factors are sincere intention, proper action, and trust in Allah (tawakkul). Planetary hours provide optimization, not limitation. If you must act during an "unfavorable" hour, proceed with bismillah (in Allah's name) and rely on divine guidance. | لا تقلق! أهمّ العوامل: النيّة الصادقة، والعمل الصحيح، والتوكّل على الله. فالساعات الكوكبية تحسينٌ لا تقييد. وإن اضطررت إلى العمل في ساعة «غير مناسبة» فابدأ باسم الله واعتمد على هدايته. |
| 1055 | AI-draft | Each day is ruled by a planet: Sunday (Sun), Monday (Moon), Tuesday (Mars), Wednesday (Mercury), Thursday (Jupiter), Friday (Venus), Saturday (Saturn). The first planetary hour of each day matches its ruling planet, creating a harmonic resonance for that day's energy. | لكل يوم كوكب حاكم: الأحد (الشمس)، الاثنين (القمر)، الثلاثاء (المريخ)، الأربعاء (عطارد)، الخميس (المشتري)، الجمعة (الزهرة)، السبت (زحل). وأول ساعة كوكبية في كل يوم توافق كوكبه الحاكم، فيتناغم طابع ذلك اليوم. |
| 1056 | AI-draft | Each planet reflects specific attributes of Allah found in His 99 Beautiful Names (Asmāʾ Allāh al-Ḥusnā). For example, the Sun reflects An-Nūr (The Light), and the Moon reflects Al-Laṭīf (The Subtle). Reciting these names during corresponding planetary hours can deepen spiritual connection. | كل كوكب يذكّر بصفات من صفات الله الواردة في أسمائه الحسنى. فالشمس تذكّر بالنور، والقمر باللطيف. وذكر هذه الأسماء في الساعات الكوكبية الموافقة قد يعمّق الصلة الروحية. |
| 1057 | AI-draft | Frequently Asked Questions | الأسئلة الشائعة |
| 1058 | AI-draft | How do planetary hours relate to Divine Names? | ما صلة الساعات الكوكبية بالأسماء الحسنى؟ |
| 1059 | AI-draft | In Islamic tradition, the seven classical "planets" include the Sun and Moon (luminaries) along with Mercury, Venus, Mars, Jupiter, and Saturn. Each represents specific divine qualities (reflected in the 99 Names of Allah) and governs particular aspects of life and spiritual practice. | في التراث الإسلامي تشمل «الكواكب» السبعة الكلاسيكية الشمس والقمر (النيّرين) مع عطارد والزهرة والمريخ والمشتري وزحل. وكلٌّ منها يذكّر بصفات (تنعكس في الأسماء الحسنى) ويرتبط بجوانب من الحياة والممارسة الروحية. |
| 1060 | AI-draft | Introduction to Planetary Hours | مقدّمة إلى الساعات الكوكبية |
| 1061 | AI-draft | Is using planetary hours permissible in Islam? | هل استعمال الساعات الكوكبية جائز في الإسلام؟ |
| 1062 | AI-draft | Islamic scholars made tremendous contributions to astronomy during the Golden Age of Islam (8th-14th centuries). Great astronomers like Al-Battani, Ibn al-Haytham, and Nasir al-Din al-Tusi refined planetary calculations and integrated them with spiritual practice. The concept of planetary hours (Sāʿāt al-Falakiyya) became part of Islamic spiritual science. | قدّم العلماء المسلمون إسهامات عظيمة في علم الفلك في العصر الذهبي للإسلام (القرن الثامن إلى الرابع عشر الميلادي). وقد أتقن فلكيون كبار كالبتاني وابن الهيثم ونصير الدين الطوسي الحسابات الكوكبية. وصار مفهوم الساعات الفلكية جزءًا من العلوم الروحية الإسلامية. |
| 1063 | AI-draft | No. Planetary hours are "unequal hours" based on sunrise/sunset, so they vary in length. A summer day hour might be 75 minutes, while a winter day hour might be 45 minutes. Clock hours are always 60 minutes. Our app shows you the exact times for each planetary hour. | لا. الساعات الكوكبية «ساعات زمانية» مبنية على الشروق والغروب، فيختلف طولها. فقد تكون ساعة النهار في الصيف 75 دقيقة، وفي الشتاء 45 دقيقة، بينما ساعة الساعة دائمًا 60 دقيقة. ويعرض لك تطبيقنا الأوقات الدقيقة لكل ساعة كوكبية. |
| 1064 | AI-draft | No. Planetary hours are a spiritual tool, not an obligation. The five daily prayers (salat) are performed at their prescribed times regardless of planetary hours. Use this knowledge as supplementary guidance for optional activities and spiritual practices, not as a rigid requirement. | لا. الساعات الكوكبية أداة روحية لا واجب. فالصلوات الخمس تُؤدّى في أوقاتها المشروعة بصرف النظر عن الساعات الكوكبية. استعمل هذه المعرفة إرشادًا مكمّلًا للأنشطة الاختيارية والممارسات الروحية، لا شرطًا صارمًا. |
| 1065 | AI-draft | Planetary Sequence | التسلسل الكوكبي |
| 1066 | AI-draft | Planetary hours are ancient divisions of time based on the classical seven planets (Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn). Each hour of the day and night is ruled by one of these planets, cycling in a specific order. This system has been used for centuries in Islamic spiritual traditions to optimize activities according to celestial influences. | الساعات الكوكبية تقسيمات قديمة للوقت مبنية على الكواكب السبعة الكلاسيكية (الشمس، القمر، عطارد، الزهرة، المريخ، المشتري، زحل). يحكم كلَّ ساعة من النهار والليل أحدُ هذه الكواكب في ترتيب معيّن. وقد استُعمل هذا النظام قرونًا في التراث الروحي الإسلامي لتحرّي الأوقات المناسبة للأعمال. |
| 1067 | AI-draft | Sufi orders have long used planetary hours for spiritual exercises. Different tariqas (spiritual paths) developed specific practices: certain dhikr (remembrance) during particular planetary hours, meditation aligned with celestial rhythms, and timing of spiritual retreats (khalwa) according to planetary influences. | استعملت الطرق الصوفية الساعات الكوكبية في الرياضات الروحية زمنًا طويلًا. وطوّرت الطرق المختلفة ممارسات معيّنة: أذكارًا في ساعات كوكبية محدّدة، وتأمّلًا موافقًا للإيقاعات السماوية، وتوقيت الخلوات. |
| 1068 | AI-draft | The great Sufi master Ibn ʿArabī (1165-1240) developed a comprehensive cosmology integrating planetary spheres with spiritual stations (maqāmāt). In his "Futūḥāt al-Makkiyya" (Meccan Illuminations), he explained how each planet corresponds to prophetic qualities and Divine Names, creating a bridge between astronomy and spirituality. | وضع الشيخ الأكبر ابن عربي (560-638هـ / 1165-1240م) رؤية كونية شاملة تربط الأفلاك الكوكبية بالمقامات الروحية. وفي «الفتوحات المكية» بيّن كيف يناسب كلُّ فلك صفاتٍ نبوية وأسماءً حسنى، فجعل جسرًا بين الفلك والروح. |
| 1069 | AI-draft | This knowledge is a spiritual tool to optimize beneficial activities. It does not replace core Islamic obligations (fard) or replace reliance on Allah (tawakkul). Always maintain proper Islamic creed (aqīdah) and consult knowledgeable scholars for guidance. | هذه المعرفة أداة روحية لتحسين الأعمال النافعة. ولا تحلّ محلّ الفرائض ولا محلّ التوكّل على الله. وحافظ دائمًا على العقيدة الصحيحة، وارجع إلى أهل العلم. |
| 1070 | ✅ reviewed | To calculate planetary hours: 1) Determine sunrise and sunset times for your location, 2) Divide daylight into 12 equal parts, 3) Divide nighttime into 12 equal parts, 4) Apply the planetary sequence starting with the day's ruler. Our app does this automatically using precise astronomical calculations. | لحساب الساعات الكوكبية: 1) حدّد وقتي الشروق والغروب لموقعك، 2) اقسم النهار إلى 12 جزءًا متساويًا، 3) اقسم الليل إلى 12 جزءًا متساويًا، 4) طبّق التسلسل الكوكبي بدءًا بصاحب اليوم. ويفعل تطبيقنا ذلك آليًا بحسابات فلكية دقيقة. |
| 1071 | AI-draft | Traditional Sufi Practice | الممارسة الصوفية التقليدية |
| 1072 | AI-draft | Understanding planetary hours helps align daily activities with cosmic rhythms, enhancing spiritual practices and improving outcomes. This knowledge allows practitioners to choose optimal times for prayer, study, business, healing, and other important activities according to traditional Islamic wisdom. | فهم الساعات الكوكبية يعين على مواءمة الأنشطة اليومية مع الإيقاعات الكونية، فيُثري الممارسات الروحية. وتتيح هذه المعرفة اختيار أوقات مناسبة للدعاء والدراسة والتجارة والتداوي وغيرها من الأعمال المهمّة وفق الحكمة الإسلامية التقليدية. |
| 1073 | AI-draft | What Are Planetary Hours? | ما الساعات الكوكبية؟ |
| 1074 | AI-draft | What if I can't perform activities during "favorable" hours? | ماذا لو لم أستطع العمل في الساعات «المناسبة»؟ |
| 1075 | AI-draft | Calculating prayer times... | جارٍ حساب مواقيت الصلاة... |
| 1076 | AI-draft | Based on: 33 (base), 66 (double), 99 (Ḥusnā), | بناءً على: 33 (الأساس)، 66 (الضعف)، 99 (الحسنى)، |
| 1077 | AI-draft | Copy JSON | نسخ JSON |
| 1078 | AI-draft | Counts: | الأعداد: |
| 1079 | AI-draft | Educational & Traditional: | تعليمي وتقليدي: |
| 1080 | AI-draft | Educational display only × Sequential grid starting from Kabīr ( | عرض تعليمي فقط × شبكة متتابعة تبدأ من الكبير ( |
| 1081 | AI-draft | Element Distribution: | توزيع العناصر: |
| 1082 | AI-draft | Exact match: | تطابق تام: |
| 1083 | AI-draft | Magic Grid | الوفق |
| 1084 | AI-draft | Per-Letter Values: | قيم كل حرف: |
| 1085 | AI-draft | Reflections & Guidance | تأمّلات وإرشاد |
| 1086 | AI-draft | Root | الجذر |
| 1087 | AI-draft | Root: | الجذر: |
| 1088 | AI-draft | Signature Sequence (Digital Roots): | تسلسل البصمة (الجذور الرقمية): |
| 1089 | AI-draft | Suggested Counts: | الأعداد المقترحة: |
| 1090 | AI-draft | This analysis is for cultural exploration and reflection only. Not for predictions, rulings, medical, or financial decisions. Always consult qualified scholars for religious guidance. | هذا التحليل للاستكشاف الثقافي والتأمّل فقط. ليس للتنبّؤ ولا للفتوى ولا للقرارات الطبية أو المالية. وارجع دائمًا إلى أهل العلم المؤهّلين في المسائل الشرعية. |
| 1091 | AI-draft | Um Ḥadad (Combined with Mother) | أمّ الحدد (مع اسم الأم) |
| 1092 | AI-draft | Ḥadath (÷4) | الحدث (÷4) |
| 1093 | AI-draft | Balance by scheduling gentle breaks. | وازن بأخذ فترات راحة لطيفة. |
| 1094 | AI-draft | Channel your energy into focused practice. | وجّه طاقتك إلى ممارسة مركّزة. |
| 1095 | AI-draft | Clarity and discernment | الوضوح والتمييز |
| 1096 | AI-draft | Divine signs | آيات الله |
| 1097 | AI-draft | Dusk | الغسق |
| 1098 | AI-draft | Flow and adaptation | الانسياب والتكيّف |
| 1099 | AI-draft | Flowing, Adaptive | منساب، متكيّف |
| 1100 | AI-draft | Foundation and sustenance | الأساس والرزق |
| 1101 | AI-draft | Grounding, Stable | متجذّر، ثابت |
| 1102 | AI-draft | Intellectual, Communicative | فكريّ، تواصليّ |
| 1103 | AI-draft | Maintain equilibrium through regular reflection. | حافظ على التوازن بالتأمّل المنتظم. |
| 1104 | AI-draft | Noon | الظهر |
| 1105 | AI-draft | Perseverance | المثابرة |
| 1106 | AI-draft | Purification and renewal | الطهارة والتجدّد |
| 1107 | AI-draft | Stability and practical grounding. | الثبات والتجذّر العملي. |
| 1108 | AI-draft | The Firm | المتين |
| 1109 | AI-draft | Transformative drive and creativity. | دافع محوِّل وإبداع. |
| 1110 | AI-draft | Transformative, Initiating | محوِّل، مبادر |
| 1111 | AI-draft | Verify before acting on information | تحقّق قبل العمل بالمعلومة |
| 1112 | AI-draft | Abjad: Arabic Numerical System | الأبجد: النظام العددي العربي |
| 1113 | AI-draft | Asceticism | الزهد |
| 1114 | AI-draft | Calculating Destiny Number | حساب عدد المسار |
| 1115 | AI-draft | Calculating Personality Number | حساب عدد الشخصية |
| 1116 | AI-draft | Calculating Soul Urge Number | حساب عدد رغبة الروح |
| 1117 | AI-draft | Calculations | الحسابات |
| 1118 | AI-draft | Connected ʿIlm al-Ḥurūf to Sufi stations and cosmology | ربط علم الحروف بالمقامات الصوفية والرؤية الكونية |
| 1119 | AI-draft | Core Principles: | المبادئ الأساسية: |
| 1120 | AI-draft | Destiny number is calculated from all letters in your full name (vowels + consonants). This represents your overall life purpose and the work you came to accomplish. | يُحسب عدد المسار من كل حروف اسمك الكامل (العلّة والصامتة). ويمثّل غاية حياتك العامة والعمل الذي جئت لتؤدّيه. |
| 1121 | AI-draft | Discover the spiritual wisdom encoded in numbers | اكتشف الحكمة الروحية المكنونة في الأعداد |
| 1122 | AI-draft | Discussed contemplation of numerical mysteries as path to divine knowledge | تناول التأمّل في أسرار الأعداد طريقًا إلى المعرفة بالله |
| 1123 | AI-draft | Divine Contentment | الرضا |
| 1124 | AI-draft | Divine Love | المحبّة الإلهية |
| 1125 | AI-draft | Each Arabic letter has a numerical value (Abjad system) | لكل حرف عربي قيمة عددية (نظام الأبجد) |
| 1126 | AI-draft | Faqr | الفقر |
| 1127 | AI-draft | Foundational work on ʿIlm al-Ḥurūf, exploring spiritual powers of Arabic letters and numbers | عمل تأسيسي في علم الحروف يستكشف خواصّ الحروف والأعداد العربية الروحية |
| 1128 | AI-draft | Historical Scholars and Their Works | علماء التراث ومؤلّفاتهم |
| 1129 | AI-draft | How to Calculate Your Life Path Number | كيف تحسب عدد مسار حياتك |
| 1130 | AI-draft | In Islamic Sufism, life path numbers correspond to maqāmāt (spiritual stations) on the path to Allah. Each number represents a unique lesson and quality to develop. | في التصوّف الإسلامي تُقابل أعداد مسار الحياة المقامات الروحية في الطريق إلى الله. وكل عدد يمثّل درسًا وصفة ينبغي تنميتها. |
| 1131 | AI-draft | Is numerology halal in Islam? | هل علم العدد حلال في الإسلام؟ |
| 1132 | AI-draft | Karmic debts are special numbers appearing in your calculations indicating important life lessons to be learned. In Islamic terms, these are ibtilāʾāt (trials) that teach important spiritual qualities like patience, humility, and trust. They are opportunities for growth, not punishments. | الديون الكارمية أعداد خاصة تظهر في حساباتك تشير إلى دروس مهمّة في الحياة. وبالمصطلح الإسلامي هي ابتلاءات تعلّم صفات روحية مهمّة كالصبر والتواضع والتوكّل. وهي فرص للنموّ لا عقوبات. |
| 1133 | AI-draft | Life Path (from birth date) represents your overall mission and spiritual path - what you came to learn and become. Soul Urge (from name vowels) reveals your deep inner desires - what motivates and fulfills you at a soul level. | مسار الحياة (من تاريخ الميلاد) يمثّل رسالتك العامة وطريقك الروحي — ما جئت لتتعلّمه وتصيره. ورغبة الروح (من حروف العلّة في الاسم) تكشف رغباتك الباطنة العميقة — ما يحرّكك ويُرضيك على مستوى الروح. |
| 1134 | AI-draft | Life Path Learning Center | مركز تعلّم مسار الحياة |
| 1135 | AI-draft | Life Path Number: 4 | عدد مسار الحياة: 4 |
| 1136 | AI-draft | Life Path number is calculated from your birth date by reducing each component (day, month, year) to a single digit, then adding them together. | يُحسب عدد مسار الحياة من تاريخ ميلادك باختزال كل جزء (اليوم، الشهر، السنة) إلى رقم واحد، ثم جمعها. |
| 1137 | AI-draft | Life Path numbers are an ancient spiritual system revealing the meaning and purpose encoded in your birth date and name. In Islamic traditions, this is known as ʿIlm al-Ḥurūf - the science of letters and numbers connecting numerical values to spiritual truths. | أعداد مسار الحياة نظام روحي قديم يتأمّل المعنى والغاية في تاريخ ميلادك واسمك. وفي التراث الإسلامي يُعرف هذا بعلم الحروف — علم الحروف والأعداد الذي يربط القيم العددية بالحقائق الروحية. |
| 1138 | AI-draft | Life moves in 9-year cycles, each carrying a unique theme and lessons. Understanding your current cycle helps you align your actions with the natural rhythm of your spiritual growth. | تسير الحياة في دورات من تسع سنوات، لكل منها موضوعها ودروسها. وفهم دورتك الحالية يعينك على مواءمة أعمالك مع الإيقاع الطبيعي لنموّك الروحي. |
| 1139 | AI-draft | Life moves in repeating 9-year cycles, each carrying a unique theme. Years 1-3 are for foundation (building groundwork), 4-6 for growth (expansion), and 7-9 for completion (harvest and release). After the 9th year, a new cycle begins. Your current personal year is calculated by adding birth day and month + current year. | تسير الحياة في دورات متكرّرة من تسع سنوات، لكل منها موضوعها. فالسنوات 1-3 للتأسيس، و4-6 للنموّ، و7-9 للاكتمال (الحصاد والتخلّي). وبعد السنة التاسعة تبدأ دورة جديدة. وتُحسب سنتك الشخصية الحالية بجمع يوم الميلاد وشهره مع السنة الحالية. |
| 1140 | AI-draft | Manifesting spiritual dreams | تحقيق الأحلام الروحية |
| 1141 | AI-draft | Master Numbers (11, 22, 33) | الأعداد الرئيسية (11، 22، 33) |
| 1142 | AI-draft | Master numbers are double-digit numbers (11, 22, 33) carrying heightened spiritual energy. They are not reduced to a single digit because they represent amplified power and deeper spiritual responsibility. | الأعداد الرئيسية أعداد من رقمين (11، 22، 33) تحمل طاقة روحية مضاعفة. ولا تُختزل إلى رقم واحد لأنها تمثّل قوة مضاعفة ومسؤولية روحية أعمق. |
| 1143 | AI-draft | Master numbers carry heightened spiritual energy and greater responsibility. If you have a master number, you have higher spiritual potential but also greater challenges. You can work at the double-digit level (11, 22, 33) or the reduced single-digit level (2, 4, 6) depending on your spiritual growth. | تحمل الأعداد الرئيسية طاقة روحية مضاعفة ومسؤولية أكبر. فإن كان لك عدد رئيسي فلك إمكانات روحية أعلى وتحدّيات أكبر. ويمكنك العمل على مستوى الرقمين (11، 22، 33) أو المستوى المختزل (2، 4، 6) بحسب نموّك الروحي. |
| 1144 | AI-draft | Names and dates reveal spiritual patterns | الأسماء والتواريخ تكشف أنماطًا روحية |
| 1145 | AI-draft | Numbers carry spiritual symbolism and connect to Divine Names | للأعداد رمزية روحية وصلة بالأسماء الحسنى |
| 1146 | AI-draft | Numerology is a tool for spiritual reflection, not a substitute for reliance on Allah. Use it to contemplate divine creation and wisdom. | علم العدد أداة للتأمّل الروحي، لا بديل عن التوكّل على الله. استعمله للتأمّل في خلق الله وحكمته. |
| 1147 | AI-draft | Repentance | التوبة |
| 1148 | AI-draft | Scrupulousness | الورع |
| 1149 | AI-draft | Shukr | الشكر |
| 1150 | AI-draft | Soul Urge number is calculated from the vowels in your full name. In Arabic, this includes ḥarakāt (diacritics) and elongation letters. | يُحسب عدد رغبة الروح من حروف العلّة في اسمك الكامل. وفي العربية يشمل ذلك الحركات وحروف المدّ. |
| 1151 | AI-draft | Spiritual Poverty | الفقر إلى الله |
| 1152 | AI-draft | Spiritual Stations and Numbers | المقامات الروحية والأعداد |
| 1153 | AI-draft | Spiritual insight and unveiling | البصيرة الروحية والكشف |
| 1154 | AI-draft | Tawbah | التوبة |
| 1155 | AI-draft | The Abjad system assigns each Arabic letter a numerical value. This is used to calculate the value of names, words, and dates, revealing their hidden spiritual meanings. | يجعل نظام الأبجد لكل حرف عربي قيمة عددية. ويُستعمل لحساب قيم الأسماء والكلمات والتواريخ وتأمّل معانيها الروحية. |
| 1156 | AI-draft | The Four Core Numbers: | الأعداد الأساسية الأربعة: |
| 1157 | AI-draft | The four elements (Fire, Water, Air, Earth) correspond to numbers | العناصر الأربعة (النار، الماء، الهواء، التراب) تقابل أعدادًا |
| 1158 | AI-draft | Trust in Allah | التوكّل على الله |
| 1159 | AI-draft | Universal love and healing | المحبّة الشاملة والشفاء |
| 1160 | AI-draft | Vowels: ُ (u) + َ (a) + َ (a) → Calculate their Abjad values | الحركات: ُ (ضمّة) + َ (فتحة) + َ (فتحة) ← احسب قيمها في الأبجد |
| 1161 | AI-draft | What are karmic debts (13, 14, 16, 19)? | ما الديون الكارمية (13، 14، 16، 19)؟ |
| 1162 | AI-draft | What is the difference between Life Path and Soul Urge? | ما الفرق بين مسار الحياة ورغبة الروح؟ |
| 1163 | AI-draft | Your Life Path number (from birth date) never changes - it's fixed for life. However, your name numbers can change if you legally change your name or adopt a new name (like after marriage or spiritual transformation). Your personal year and month change annually/monthly, bringing new themes and lessons. | عدد مسار حياتك (من تاريخ الميلاد) لا يتغيّر — فهو ثابت مدى الحياة. أما أعداد اسمك فقد تتغيّر إن غيّرت اسمك رسميًا أو اتّخذت اسمًا جديدًا (كما بعد الزواج أو تحوّل روحي). وسنتك وشهرك الشخصيان يتغيّران سنويًا وشهريًا، بموضوعات ودروس جديدة. |
| 1164 | AI-draft | Your deepest desires and what fulfills you spiritually | أعمق رغباتك وما يُرضيك روحيًا |
| 1165 | AI-draft | Your spiritual essence and life mission | جوهرك الروحي ورسالة حياتك |
| 1166 | AI-draft | Zuhd | الزهد |
| 1167 | AI-draft | ʿIlm al-Ḥurūf has a long history in Islamic scholarship, studied by scholars like Imam al-Ghazālī and Ibn ʿArabī. When used as a tool for spiritual reflection (not fortune-telling), it is acceptable as a study of divine patterns in creation. Always remember: Only Allah knows the unseen, and numbers are tools for contemplation, not divination. | لعلم الحروف تاريخ طويل في التراث العلمي الإسلامي، وتناوله علماء مثل الإمام الغزالي وابن عربي. وحين يُستعمل أداةً للتأمّل الروحي (لا للعرافة) فهو دراسة لأنماط الحكمة في الخلق. وتذكّر دائمًا: لا يعلم الغيب إلا الله، والأعداد أدوات للتأمّل لا للكهانة. |
| 1168 | AI-draft | ʿIlm al-Ḥurūf is a traditional Islamic science exploring the spiritual meanings encoded in Arabic letters and numbers. It dates back to the Islamic Golden Age and is associated with great scholars like Imam al-Ghazālī, Ibn ʿArabī, and al-Būnī. | علم الحروف علم إسلامي تقليدي يستكشف المعاني الروحية في الحروف والأعداد العربية. ويعود إلى العصر الذهبي للإسلام، ويرتبط بأعلام كالإمام الغزالي وابن عربي والبوني. |
| 1169 | AI-draft | ʿIlm al-Ḥurūf: Islamic Science of Letters and Numbers | علم الحروف: العلم الإسلامي للحروف والأعداد |
| 1170 | AI-draft | A number from 1-9 calculated for each calendar year, indicating the theme and energy of that year in your personal 9-year cycle. Changes annually. | عدد من 1 إلى 9 يُحسب لكل سنة ميلادية، يشير إلى موضوع تلك السنة وطاقتها في دورتك الشخصية ذات التسع سنوات. ويتغيّر سنويًا. |
| 1171 | AI-draft | Abuse of freedom - teaching moderation and balance. The lesson is to use freedom responsibly, avoid excess, and find spiritual grounding through discipline. | إساءة استعمال الحرية — درسٌ في الاعتدال والتوازن. والدرس أن تستعمل الحرية بمسؤولية، وتجتنب الإفراط، وتجد التجذّر الروحي بالانضباط. |
| 1172 | AI-draft | Abuse of love - teaching humility and ego dissolution. The lesson is to love selflessly, release ego attachments, and serve with pure intentions. | إساءة استعمال المحبّة — درسٌ في التواضع وتذويب الأنا. والدرس أن تحبّ بإيثار، وتتخلّى عن تعلّقات الأنا، وتخدم بنيّة خالصة. |
| 1173 | AI-draft | Abuse of power - teaching independence without arrogance. The lesson is to stand alone spiritually while serving others, balancing power with compassion. | إساءة استعمال السلطة — درسٌ في الاستقلال دون كِبر. والدرس أن تقف وحدك روحيًا مع خدمة الآخرين، موازنًا القوة بالرحمة. |
| 1174 | AI-draft | Associated with numbers 1, 3, 9 - represents passion, creativity, inspiration, leadership, and spiritual drive. Fire element brings transformative energy. | يرتبط بالأعداد 1 و3 و9 — ويمثّل الشغف والإبداع والإلهام والقيادة والدافع الروحي. وعنصر النار يجلب طاقة محوِّلة. |
| 1175 | AI-draft | Associated with numbers 2, 5 - represents emotions, intuition, healing, adaptability, and spiritual flow. Water element brings emotional depth. | يرتبط بالعددين 2 و5 — ويمثّل العاطفة والحدس والشفاء والتكيّف والانسياب الروحي. وعنصر الماء يجلب عمقًا عاطفيًا. |
| 1176 | AI-draft | Associated with numbers 3, 5, 7 - represents intellect, communication, freedom, wisdom, and spiritual insight. Air element brings mental clarity. | يرتبط بالأعداد 3 و5 و7 — ويمثّل العقل والتواصل والحرية والحكمة والبصيرة الروحية. وعنصر الهواء يجلب وضوحًا ذهنيًا. |
| 1177 | AI-draft | Associated with numbers 4, 6, 8 - represents stability, practicality, material manifestation, grounding, and physical reality. Earth element brings structure. | يرتبط بالأعداد 4 و6 و8 — ويمثّل الثبات والعملية والتحقّق المادي والتجذّر والواقع المحسوس. وعنصر التراب يجلب البنية. |
| 1178 | AI-draft | Calculated from all letters in your full name, this number reveals your life's purpose, the work you came to accomplish, and your overarching spiritual mission. | يُحسب من كل حروف اسمك الكامل، ويكشف غاية حياتك والعمل الذي جئت لتؤدّيه ورسالتك الروحية الشاملة. |
| 1179 | AI-draft | Calculated from the consonants in your name, this number represents how others perceive you, your outer personality, and the first impression you make. | يُحسب من الحروف الصامتة في اسمك، ويمثّل كيف يراك الآخرون وشخصيتك الظاهرة والانطباع الأول الذي تتركه. |
| 1180 | AI-draft | Calculated from the vowels in your name, this number reveals your heart's deepest desires, what motivates you at a soul level, and what truly fulfills you spiritually. | يُحسب من حروف العلّة في اسمك، ويكشف أعمق رغبات قلبك وما يحرّكك على مستوى الروح وما يُرضيك روحيًا حقًّا. |
| 1181 | AI-draft | Comprehensive dictionary of numerology terms | معجم شامل لمصطلحات علم العدد |
| 1182 | AI-draft | Core Numbers | الأعداد الأساسية |
| 1183 | AI-draft | Karmic Debts | الديون الكارمية |
| 1184 | AI-draft | Life Path Glossary | معجم مسار الحياة |
| 1185 | AI-draft | No terms found | لم يُعثر على مصطلحات |
| 1186 | AI-draft | Obstacles and lessons corresponding to each pinnacle period. Challenges are opportunities for growth, teaching resilience and spiritual development. | العقبات والدروس الموافقة لكل مرحلة قمّة. والتحدّيات فرص للنموّ تعلّم الصمود والنموّ الروحي. |
| 1187 | AI-draft | Raqm al-Qimmah | رقم القمّة |
| 1188 | AI-draft | Related Terms: | مصطلحات ذات صلة: |
| 1189 | AI-draft | Represents laziness and negativity from past patterns. The lesson is to transform through hard work, discipline, and positive focus. Overcome through perseverance. | يمثّل الكسل والسلبية من أنماط سابقة. والدرس هو التحوّل بالعمل الجادّ والانضباط والتركيز الإيجابي، والتغلّب بالمثابرة. |
| 1190 | AI-draft | Search for a term... | ابحث عن مصطلح... |
| 1191 | AI-draft | Spiritual station in Sufi tradition. Each life path number corresponds to a maqām representing a stage on the journey to Allah (e.g., Tawbah, Sabr, Maḥabbah). | المقام الروحي في التراث الصوفي. كل عدد من أعداد مسار الحياة يقابل مقامًا يمثّل مرحلة في الطريق إلى الله (مثل التوبة والصبر والمحبّة). |
| 1192 | AI-draft | The Illuminator - A master number carrying heightened spiritual energy. Represents intuition, spiritual insight, and the ability to inspire others through visionary leadership. | المنير — عدد رئيسي يحمل طاقة روحية مضاعفة. يمثّل الحدس والبصيرة الروحية والقدرة على إلهام الآخرين بقيادة ذات رؤية. |
| 1193 | AI-draft | The Islamic science of letters and numbers, connecting numerical values to spiritual truths. Studied by classical scholars like al-Būnī and Ibn ʿArabī. | العلم الإسلامي للحروف والأعداد، يربط القيم العددية بالحقائق الروحية. وتناوله علماء كلاسيكيون كالبوني وابن عربي. |
| 1194 | AI-draft | The Master Builder - Combines spiritual vision with practical manifestation. Represents the ability to turn dreams into reality and build lasting spiritual legacies. | البنّاء الأكبر — يجمع بين الرؤية الروحية والتحقّق العملي. يمثّل القدرة على تحويل الأحلام إلى واقع وبناء إرث روحي دائم. |
| 1195 | AI-draft | The Master Teacher - The highest master number, representing universal love, compassion, and the ability to heal and guide humanity toward spiritual unity. | المعلّم الأكبر — أعلى الأعداد الرئيسية، يمثّل المحبّة الشاملة والرحمة والقدرة على الشفاء وإرشاد الناس نحو الوحدة الروحية. |
| 1196 | AI-draft | The most important number in numerology, calculated from your birth date. It represents your spiritual essence, life mission, and the lessons you came to learn. | أهمّ عدد في علم العدد، ويُحسب من تاريخ ميلادك. يمثّل جوهرك الروحي ورسالة حياتك والدروس التي جئت لتتعلّمها. |
| 1197 | AI-draft | ʿUnṣur an-Nār | عنصر النار |
| 1198 | AI-draft | Abundance Practice | ممارسة الوفرة |
| 1199 | AI-draft | Act of Love | عمل محبّة |
| 1200 | AI-draft | Adaptability | التكيّف |
| 1201 | AI-draft | Architect | مهندس معماري |
| 1202 | AI-draft | Artist | فنّان |
| 1203 | AI-draft | Banker | مصرفي |
| 1204 | AI-draft | Beautify Home | تجميل البيت |
| 1205 | AI-draft | Beginning | البداية |
| 1206 | AI-draft | Builder | بنّاء |
| 1207 | AI-draft | Building Legacy | بناء الإرث |
| 1208 | AI-draft | CEO | رئيس تنفيذي |
| 1209 | AI-draft | Channel for divine guidance | قناة للهداية |
| 1210 | AI-draft | Collective Healing | شفاء جماعي |
| 1211 | AI-draft | Commit to consistent practice | التزم بممارسة منتظمة |
| 1212 | AI-draft | Complete a practical task | أنجز مهمّة عملية |
| 1213 | AI-draft | Complete cycles with grace | أتمّ الدورات بلطف |
| 1214 | AI-draft | Connect People | اجمع بين الناس |
| 1215 | AI-draft | Connect spiritual to material | اربط الروحي بالمادي |
| 1216 | AI-draft | Contemplate Quran or Sufi texts | تدبّر القرآن أو نصوص التصوّف |
| 1217 | AI-draft | Contemplate true spiritual freedom | تأمّل الحرية الروحية الحقّة |
| 1218 | AI-draft | Contemplation | التأمّل |
| 1219 | AI-draft | Counselor | مستشار |
| 1220 | AI-draft | Create balance and beauty | اصنع التوازن والجمال |
| 1221 | AI-draft | Create solid foundations | ابنِ أسسًا متينة |
| 1222 | AI-draft | Create something beautiful daily | اصنع شيئًا جميلًا كل يوم |
| 1223 | AI-draft | Create something each day | اصنع شيئًا كل يوم |
| 1224 | AI-draft | Create spaces for spiritual gathering | هيّئ أماكن للمجالس الروحية |
| 1225 | AI-draft | Daily Creativity | الإبداع اليومي |
| 1226 | AI-draft | Daily Healing | الشفاء اليومي |
| 1227 | AI-draft | Deep Spiritual Qualities | صفات روحية عميقة |
| 1228 | AI-draft | Dhikr of Completion | ذكر التمام |
| 1229 | AI-draft | Dhikr of Freedom | ذكر الحرية |
| 1230 | AI-draft | Dhikr of Joy | ذكر الفرح |
| 1231 | AI-draft | Dhikr of Love | ذكر المحبّة |
| 1232 | AI-draft | Dhikr of Mercy | ذكر الرحمة |
| 1233 | AI-draft | Dhikr of Perfect Love | ذكر المحبّة الكاملة |
| 1234 | AI-draft | Dhikr of Strength | ذكر القوة |
| 1235 | AI-draft | Dhikr of Unity | ذكر الوحدة |
| 1236 | AI-draft | Diplomat | دبلوماسي |
| 1237 | AI-draft | Discover the deep meanings of each life path number | اكتشف المعاني العميقة لكل عدد من أعداد مسار الحياة |
| 1238 | AI-draft | Dive into inner mysteries | تعمّق في الأسرار الباطنة |
| 1239 | AI-draft | Dream Journaling | تدوين الرؤى |
| 1240 | AI-draft | Duality | الثنائية |
| 1241 | AI-draft | Embracing Change | تقبّل التغيير |
| 1242 | AI-draft | Empire Builder | باني الإمبراطوريات |
| 1243 | AI-draft | Energy Healer | معالج بالطاقة |
| 1244 | AI-draft | Entrepreneur | رائد أعمال |
| 1245 | AI-draft | Explore infinite possibilities | استكشف الإمكانات اللامحدودة |
| 1246 | AI-draft | Express divine beauty | عبّر عن الجمال الإلهي |
| 1247 | AI-draft | Famous Archetypes | نماذج مشهورة |
| 1248 | AI-draft | Flow with divine change | انسجم مع تقلّب الأحوال بقدر الله |
| 1249 | AI-draft | Follow intuition in a decision | اتّبع حدسك في قرار |
| 1250 | AI-draft | Goal Setting | تحديد الأهداف |
| 1251 | AI-draft | Grand Building | البناء الكبير |
| 1252 | AI-draft | Grand Planning | التخطيط الكبير |
| 1253 | AI-draft | Guide | مرشد |
| 1254 | AI-draft | Heal others with divine love | اشفِ الآخرين بالمحبّة |
| 1255 | AI-draft | Healer | معالج |
| 1256 | AI-draft | Healing and Teaching | الشفاء والتعليم |
| 1257 | AI-draft | Help resolve a small conflict daily | ساعد في حلّ خلاف صغير كل يوم |
| 1258 | AI-draft | Help someone daily without expectation | ساعد أحدًا كل يوم دون انتظار مقابل |
| 1259 | AI-draft | Humanitarian Servant | خادم للإنسانية |
| 1260 | AI-draft | Humanitarian Work | العمل الإنساني |
| 1261 | AI-draft | Ideal Career Paths | المسارات المهنية المثالية |
| 1262 | AI-draft | Innovator | مبتكر |
| 1263 | AI-draft | Inspirational Teacher | معلّم ملهِم |
| 1264 | AI-draft | Inspiring Others | إلهام الآخرين |
| 1265 | AI-draft | Introduce two people who could collaborate | عرّف شخصين يمكنهما التعاون |
| 1266 | AI-draft | Intuition | الحدس |
| 1267 | AI-draft | Intuitive Practice | الممارسة الحدسية |
| 1268 | AI-draft | Journalist | صحفي |
| 1269 | AI-draft | Lead healing circles for community | قُد حلقات شفاء للمجتمع |
| 1270 | AI-draft | Lead with wisdom and integrity | قُد بحكمة ونزاهة |
| 1271 | AI-draft | Leader | قائد |
| 1272 | AI-draft | Leading with Power | القيادة بقوة |
| 1273 | AI-draft | Learn something new each week | تعلّم شيئًا جديدًا كل أسبوع |
| 1274 | AI-draft | Life Path Number Guide | دليل أعداد مسار الحياة |
| 1275 | AI-draft | Listen to inner guidance | أصغِ إلى الإرشاد الباطن |
| 1276 | AI-draft | Listening Practice | ممارسة الإصغاء |
| 1277 | AI-draft | Maintain a regular prayer schedule | حافظ على مواقيت صلاة منتظمة |
| 1278 | AI-draft | Maintain organized daily routine | حافظ على روتين يومي منظّم |
| 1279 | AI-draft | Manifest spiritual dreams | حقّق الأحلام الروحية |
| 1280 | AI-draft | Master Organizer | المنظّم الأكبر |
| 1281 | AI-draft | Master the material world | أتقِن العالم المادي |
| 1282 | AI-draft | Morning Affirmations | الأذكار الصباحية |
| 1283 | AI-draft | Morning Contemplation | التأمّل الصباحي |
| 1284 | AI-draft | Most Compatible With: | الأكثر توافقًا مع: |
| 1285 | AI-draft | Number 1 thrives when initiating new ventures. Start that project you've been postponing. | يزدهر العدد 1 حين يبتدئ مشاريع جديدة. ابدأ المشروع الذي تؤجّله. |
| 1286 | AI-draft | Number 11 seeks deep spiritual connection. You need a partner who understands your sensitivity and shares your spiritual journey. | يطلب العدد 11 صلة روحية عميقة. تحتاج إلى شريك يفهم حساسيتك ويشاركك رحلتك الروحية. |
| 1287 | AI-draft | Number 2 excels at bridge-building. Use your diplomacy to unite two opposing parties. | يتفوّق العدد 2 في بناء الجسور. استعمل دبلوماسيتك لجمع طرفين متخاصمين. |
| 1288 | AI-draft | Number 2 thrives in partnerships. You are a natural peacemaker, seeking harmony and deep connection in relationships. | يزدهر العدد 2 في الشراكات. أنت صانع سلام بطبعك، تطلب الانسجام والصلة العميقة في العلاقات. |
| 1289 | AI-draft | Number 22 builds for generations. Create institutions or projects that endure. | يبني العدد 22 للأجيال. أنشئ مؤسسات أو مشاريع تدوم. |
| 1290 | AI-draft | Number 22 builds lasting relationships with shared purpose. You need a partner who shares your grand vision and helps manifest it. | يبني العدد 22 علاقات دائمة بغاية مشتركة. تحتاج إلى شريك يشاركك رؤيتك الكبرى ويعينك على تحقيقها. |
| 1291 | AI-draft | Number 33 teaches with love. Heal through compassion and teach by example. | يعلّم العدد 33 بالمحبّة. اشفِ بالرحمة وعلّم بالقدوة. |
| 1292 | AI-draft | Number 4 excels at structuring. Create a system that lasts. | يتفوّق العدد 4 في التنظيم. اصنع نظامًا يدوم. |
| 1293 | AI-draft | Number 5 needs freedom in relationships. You are adventurous, needing a partner who loves new experiences and respects your need for space. | يحتاج العدد 5 إلى الحرية في العلاقات. أنت مغامر، تحتاج إلى شريك يحبّ التجارب الجديدة ويحترم حاجتك إلى المساحة. |
| 1294 | AI-draft | Number 5 thrives on variety. Explore new paths fearlessly. | يزدهر العدد 5 بالتنوّع. استكشف طرقًا جديدة دون خوف. |
| 1295 | AI-draft | Number 6 is nurturing and loving in relationships. You give generously, but beware of becoming overextended or controlling. | العدد 6 راعٍ محبّ في العلاقات. تعطي بسخاء، لكن احذر الإجهاد أو التحكّم. |
| 1296 | AI-draft | Number 6 shines in caregiving. Create a warm home or help those in need. | يتألّق العدد 6 في الرعاية. اصنع بيتًا دافئًا أو ساعد المحتاجين. |
| 1297 | AI-draft | Number 7 needs depth. Dive into spiritual or scientific studies. | يحتاج العدد 7 إلى العمق. تعمّق في الدراسات الروحية أو العلمية. |
| 1298 | AI-draft | Number 7 needs spiritual depth in relationships. You value alone time, but seek deep, meaningful connection. | يحتاج العدد 7 إلى عمق روحي في العلاقات. تقدّر وقت الخلوة، لكنك تطلب صلة عميقة ذات معنى. |
| 1299 | AI-draft | Number 9 completes cycles. Release what no longer serves and serve a greater cause. | يُتمّ العدد 9 الدورات. تخلَّ عمّا لم يعد نافعًا، واخدم قضية أكبر. |
| 1300 | AI-draft | Number 9 is compassionate and humanitarian in relationships. You give freely, but beware of losing yourself in service to others. | العدد 9 رحيم إنساني في العلاقات. تعطي بلا حساب، لكن احذر أن تفقد نفسك في خدمة الآخرين. |
| 1301 | AI-draft | Nurture and heal others | ارعَ الآخرين واشفِهم |
| 1302 | AI-draft | Nurturing Others | رعاية الآخرين |
| 1303 | AI-draft | Organized Schedule | جدول منظّم |
| 1304 | AI-draft | Project Manager | مدير مشروع |
| 1305 | AI-draft | Read spiritual text | اقرأ نصًا روحيًا |
| 1306 | AI-draft | Record dreams and spiritual visions | دوّن الرؤى والمنامات |
| 1307 | AI-draft | Related Concepts | مفاهيم ذات صلة |
| 1308 | AI-draft | Repeat "Al-Qawī Al-ʿAzīz" for strength | ردّد «يا قوي يا عزيز» للقوة |
| 1309 | AI-draft | Repeat "Al-Wadūd" for divine love | ردّد «يا ودود» للمحبّة |
| 1310 | AI-draft | Repeat "Ar-Raḥmān Ar-Raḥīm" for mercy | ردّد «يا رحمن يا رحيم» للرحمة |
| 1311 | AI-draft | Repeat "Lā ilāha illā Allāh" 100 times daily | ردّد «لا إله إلا الله» مئة مرّة يوميًا |
| 1312 | AI-draft | Sacred Text Study | دراسة النصوص الشرعية |
| 1313 | AI-draft | Salesperson | مندوب مبيعات |
| 1314 | AI-draft | Seek deep truth | اطلب الحقيقة العميقة |
| 1315 | AI-draft | Seeking Truth | طلب الحقيقة |
| 1316 | AI-draft | Select a Number: | اختر عددًا: |
| 1317 | AI-draft | Selfless Service | خدمة بإيثار |
| 1318 | AI-draft | Send healing energy to someone in need | ادعُ بالشفاء لمن يحتاج إليه |
| 1319 | AI-draft | Serve humanity with love | اخدم الناس بمحبّة |
| 1320 | AI-draft | Service to Others | خدمة الآخرين |
| 1321 | AI-draft | Serving Humanity | خدمة الإنسانية |
| 1322 | AI-draft | Set one clear goal for each day | حدّد هدفًا واضحًا لكل يوم |
| 1323 | AI-draft | Silent Meditation | تأمّل صامت |
| 1324 | AI-draft | Spiritual Advisor | ناصح روحي |
| 1325 | AI-draft | Spiritual Counselor | مرشد روحي |
| 1326 | AI-draft | Spiritual Leader | قائد روحي |
| 1327 | AI-draft | Spiritual Station | المقام الروحي |
| 1328 | AI-draft | Spiritual Study | دراسة روحية |
| 1329 | AI-draft | Spiritual Teacher | معلّم روحي |
| 1330 | AI-draft | Spread Joy | انشر الفرح |
| 1331 | AI-draft | Starting a Project | بدء مشروع |
| 1332 | AI-draft | Structured Routine | روتين منظّم |
| 1333 | AI-draft | Systematic Building | بناء منهجي |
| 1334 | AI-draft | Tawhid | التوحيد |
| 1335 | AI-draft | Teach spiritual truths | علّم الحقائق الروحية |
| 1336 | AI-draft | Thank Allah for blessings with joy | احمد الله على النعم بفرح |
| 1337 | AI-draft | The One is the origin of all numbers, as Allah is the origin of all existence | الواحد أصل الأعداد كلها، كما أن الله سبحانه مبدئ كل موجود |
| 1338 | AI-draft | The number one holds special significance in Islam as a symbol of Tawhid - the oneness of Allah. Classical scholars like al-Būnī and Ibn ʿArabī studied number 1 as the expression of divine unity and beginning. | للعدد واحد دلالة خاصة في الإسلام رمزًا للتوحيد. وقد درس علماء كلاسيكيون كالبوني وابن عربي العدد 1 تعبيرًا عن الوحدانية والبداية. |
| 1339 | AI-draft | The number two represents duality and partnership in Islamic traditions - night and day, earth and sky. It teaches us about balance and harmony in creation. | يمثّل العدد اثنان الزوجية والشراكة في التراث الإسلامي — الليل والنهار، الأرض والسماء. ويعلّمنا التوازن والانسجام في الخلق. |
| 1340 | AI-draft | Track finances daily | تابع أموالك يوميًا |
| 1341 | AI-draft | Traveler | رحّالة |
| 1342 | AI-draft | Unconditional Love | محبّة بلا شروط |
| 1343 | AI-draft | Urban Planner | مخطّط مدن |
| 1344 | AI-draft | Vision Journaling | تدوين الرؤية |
| 1345 | AI-draft | Visualize Allah's light filling you | استحضر نور الله يملأ قلبك |
| 1346 | AI-draft | Volunteer at a charity | تطوّع في جمعية خيرية |
| 1347 | AI-draft | Walk without destination | امشِ بلا وجهة |
| 1348 | AI-draft | Writer | كاتب |
| 1349 | AI-draft | 9-Year Life Cycle | دورة الحياة ذات التسع سنوات |
| 1350 | AI-draft | Achievement & Power | الإنجاز والقوة |
| 1351 | AI-draft | Build relationships | ابنِ العلاقات |
| 1352 | AI-draft | Building Foundations | بناء الأسس |
| 1353 | AI-draft | Building foundation and planting seeds | بناء الأساس وغرس البذور |
| 1354 | AI-draft | Change & Freedom | التغيير والحرية |
| 1355 | AI-draft | Communicate ideas | عبّر عن الأفكار |
| 1356 | AI-draft | Completion & Release | الاكتمال والتخلّي |
| 1357 | AI-draft | Create harmony | اصنع الانسجام |
| 1358 | AI-draft | Create structure | اصنع البنية |
| 1359 | AI-draft | Embrace change | تقبّل التغيير |
| 1360 | AI-draft | Exercise leadership | مارس القيادة |
| 1361 | AI-draft | Express yourself | عبّر عن نفسك |
| 1362 | AI-draft | Harvest and release | الحصاد والتخلّي |
| 1363 | AI-draft | Inner Wisdom | الحكمة الباطنة |
| 1364 | AI-draft | Love & Responsibility | المحبّة والمسؤولية |
| 1365 | AI-draft | Manifest goals | حقّق الأهداف |
| 1366 | AI-draft | Nurture connections | ارعَ الصلات |
| 1367 | AI-draft | Nurture others | ارعَ الآخرين |
| 1368 | AI-draft | Organize | نظّم |
| 1369 | AI-draft | Practice patience | تحلَّ بالصبر |
| 1370 | AI-draft | Prev | السابق |
| 1371 | AI-draft | Previous Year | السنة السابقة |
| 1372 | AI-draft | Reflect deeply | تأمّل بعمق |
| 1373 | AI-draft | Remember: Cycles are tools for reflection and planning, not fixed destiny. Only Allah knows the unseen. | تذكّر: الدورات أدوات للتأمّل والتخطيط، لا قدر محتوم. ولا يعلم الغيب إلا الله. |
| 1374 | AI-draft | Seek truth | اطلب الحقيقة |
| 1375 | AI-draft | Serve community | اخدم المجتمع |
| 1376 | AI-draft | Serve humanity | اخدم الإنسانية |
| 1377 | AI-draft | Set intentions | اعقد النيّات |
| 1378 | AI-draft | Study spirituality | ادرس الروحانيات |
| 1379 | AI-draft | Time for changes, travel, new experiences, and personal freedom. Adaptability and flexibility are key. Expect the unexpected. | وقت للتغيير والسفر والتجارب الجديدة والحرية الشخصية. والتكيّف والمرونة هما المفتاح. وتهيّأ لغير المتوقّع. |
| 1380 | AI-draft | Time for creative projects, self-expression, and social activities. Communication, joy, and artistic pursuits are highlighted. | وقت للمشاريع الإبداعية والتعبير عن الذات والأنشطة الاجتماعية. ويبرز فيه التواصل والفرح والفنون. |
| 1381 | AI-draft | Time for endings, completion, and preparation for new beginnings. Release what no longer serves. Humanitarian service and universal love are emphasized. | وقت للخواتيم والاكتمال والاستعداد لبدايات جديدة. تخلَّ عمّا لم يعد نافعًا. ويبرز فيه العمل الإنساني والمحبّة الشاملة. |
| 1382 | AI-draft | Time for fresh starts, new initiatives, and planting seeds for the future. Bold action and independent thinking are favored. | وقت للبدايات الجديدة والمبادرات وغرس البذور للمستقبل. ويُستحسن فيه العمل الجريء والتفكير المستقل. |
| 1383 | AI-draft | Time for introspection, spiritual growth, and inner development. Retreat, study, and deepen your connection with the Divine. | وقت لمحاسبة النفس والنموّ الروحي والتهذيب الباطن. اعتزل وادرس، وعمّق صلتك بالله. |
| 1384 | AI-draft | Year of family, home, service, and relationships. Focus on responsibility, nurturing, and creating harmonious environments. | سنة الأسرة والبيت والخدمة والعلاقات. ركّز على المسؤولية والرعاية وصنع بيئات منسجمة. |
| 1385 | AI-draft | Year of manifestation, material success, and personal power. Reap rewards from past efforts. Financial and career achievements are highlighted. | سنة التحقّق والنجاح المادي والقوة الشخصية. اجنِ ثمار جهودك السابقة. وتبرز فيها الإنجازات المالية والمهنية. |
| 1386 | AI-draft | ← Scroll to see all 9 years → | ← مرّر لترى السنوات التسع كلها → |
| 1387 | AI-draft | Download Asrāriya on Google Play | نزّل أسرارية من Google Play |
| 1388 | AI-draft | Retrograde — inner reflection encouraged | راجع — يُستحسن التأمّل الباطن |
| 1389 | AI-draft | Retrograde (−2) | راجع (−2) |
| 1390 | AI-draft | Caution themes | موضوعات الحذر |
| 1391 | AI-draft | Favourable themes (adab) | موضوعات المناسبة (أدب) |
| 1392 | AI-draft | Live | مباشر |
| 1393 | AI-draft | View | عرض |
| 1394 | AI-draft | Makkah (Default) | مكة المكرمة (افتراضي) |
| 1395 | AI-draft | Desc | الوصف |
| 1396 | AI-draft | Based on the date on your device. | بحسب التاريخ في جهازك. |
| 1397 | AI-draft | Recommended sadaqa | الصدقة الموصى بها |
| 1398 | AI-draft | Recommended sadaqa for each day of the week | الصدقة الموصى بها لكل يوم من أيام الأسبوع |
| 1399 | AI-draft | Today's sadaqa | صدقة اليوم |
| 1400 | AI-draft | Answer | الجواب |
| 1401 | AI-draft | Energy Return | عودة الطاقة |
| 1402 | AI-draft | Rest Day Recommended | يُستحسن يوم راحة |
| 1403 | AI-draft | Use this day to recharge your spiritual energy. | استعمل هذا اليوم لتجديد طاقتك الروحية. |
| 1404 | AI-draft | Weekly Energy Flow | انسياب الطاقة الأسبوعي |
| 1405 | AI-draft | 4-6: Moderate | 4-6: معتدل |
| 1406 | AI-draft | OK | حسنًا |
| 1407 | AI-draft | Rest Needed | يلزم الراحة |
| 1408 | AI-draft | Top | الأعلى |
| 1409 | AI-draft | Based on classical ʿIlm al-Ḥurūf and Islamic astrology principles | مبنيّ على مبادئ علم الحروف الكلاسيكي وعلم النجوم الإسلامي |
| 1410 | AI-draft | Today's Tip | نصيحة اليوم |
| 1411 | AI-draft | 📅 Your Spiritual Week | 📅 أسبوعك الروحي |
| 1412 | AI-draft | Low energies. Ideal for meditation, reflection, and recharging your spiritual energy. Avoid major decisions. | طاقات منخفضة. مثالية للتأمّل والمراجعة وتجديد طاقتك الروحية. اجتنب القرارات الكبرى. |
| 1413 | AI-draft | Rest and reflection week | أسبوع راحة وتأمّل |
| 1414 | AI-draft | Use for reflection, planning, spiritual practices | استعمله للتأمّل والتخطيط والممارسات الروحية |
| 1415 | AI-draft | Very good week | أسبوع جيد جدًا |
| 1416 | AI-draft | Weekly Insights | لمحات أسبوعية |
| 1417 | AI-draft | work well | تنجح جيدًا |
| 1418 | AI-draft | 🌙 Spiritual Rest Days | 🌙 أيام الراحة الروحية |
| 1419 | AI-draft | 🌟 Best Days for Action | 🌟 أفضل أيام العمل |
| 1420 | AI-draft | Supabase not configured | Supabase غير مُعدّ |
| 1421 | AI-draft | Starting new ventures | بدء مشاريع جديدة |
| 1422 | AI-draft | Entrepreneurship | ريادة الأعمال |
| 1423 | AI-draft | Maryam | مريم |
| 1424 | AI-draft | Maximum range is 12 months. | الحدّ الأقصى للمدّة 12 شهرًا. |
| 1425 | AI-draft | Aggressive negotiations | المفاوضات العدوانية |
| 1426 | AI-draft | Confrontations | المواجهات |
| 1427 | AI-draft | Legal matters | المسائل القانونية |
| 1428 | AI-draft | Aligned Path | طريق منسجم |
| 1429 | AI-draft | Career Fields | المجالات المهنية |
| 1430 | AI-draft | Career guidance data is being compiled for your profile | يجري إعداد بيانات الإرشاد المهني لملفك |
| 1431 | ✅ reviewed | Career paths that resonate with your spiritual energy and elemental nature | مسارات مهنية تتناغم مع طاقتك الروحية وطبيعة عنصرك |
| 1432 | AI-draft | Collapse All | طيّ الكل |
| 1433 | AI-draft | Copied to clipboard! | نُسخ إلى الحافظة! |
| 1434 | AI-draft | Despite being a Water element, you receive special blessings from Earth industries. This unique spiritual gift allows you to thrive in both water-related AND earth-based careers—giving you more pathways to success than most other elements. | مع أنك من عنصر الماء، فلك نصيب خاص من مجالات التراب. فتستطيع بفضل الله أن تزدهر في المهن المتّصلة بالماء والتراب معًا — فأمامك طرق أكثر من غيرك. |
| 1435 | ✅ reviewed | Discovered my career path through Istikhara al-Asmāʾ! My | اكتشفت مساري المهني عبر استخارة الأسماء! العنصر الغالب عندي |
| 1436 | AI-draft | Download Career Guide PDF | تنزيل دليل المهن PDF |
| 1437 | AI-draft | Expand All | توسيع الكل |
| 1438 | AI-draft | Fields to Consider Carefully | مجالات تُدرَس بعناية |
| 1439 | AI-draft | Generating PDF... | جارٍ إنشاء PDF... |
| 1440 | AI-draft | Guiding Principle | المبدأ الموجّه |
| 1441 | AI-draft | Istikhara Career Guidance | إرشاد مهني من استخارة الأسماء |
| 1442 | AI-draft | PDF content | محتوى PDF |
| 1443 | AI-draft | Recommended Career Fields | المجالات المهنية الموصى بها |
| 1444 | AI-draft | Special Spiritual Blessing | نصيب روحي خاص |
| 1445 | AI-draft | These industries may not align optimally with your spiritual energy. While not forbidden, they may present more challenges or require extra effort. | قد لا تنسجم هذه المجالات انسجامًا أمثل مع طاقتك الروحية. وليست محرّمة، لكنها قد تحمل تحدّيات أكثر أو تتطلّب جهدًا إضافيًا. |
| 1446 | AI-draft | This doesn't mean complete avoidance—some individuals still succeed in these fields. However, the spiritual alignment suggests focusing your primary efforts on the recommended fields above for optimal results. | ولا يعني هذا اجتنابها كليًا — فبعض الناس ينجحون فيها. لكن الانسجام الروحي يقترح تركيز جهودك الأساسية على المجالات الموصى بها أعلاه. |
| 1447 | AI-draft | This guidance comes from traditional Islamic texts on ʿIlm al-Ḥurūf (Science of Letters), preserved by scholars across generations. | هذا الإرشاد من نصوص إسلامية تقليدية في علم الحروف، حفظها العلماء عبر الأجيال. |
| 1448 | AI-draft | Traditional Islamic Guidance | إرشاد إسلامي تقليدي |
| 1449 | AI-draft | Traditional Wisdom | حكمة تقليدية |
| 1450 | AI-draft | career paths in this category | مسارات مهنية في هذه الفئة |
| 1451 | AI-draft | element aligns with | عنصر منسجم مع |
| 1452 | AI-draft | (Use Name for exact count) | (استعمل الاسم للعدد الدقيق) |
| 1453 | AI-draft | Are you sure you want to reset? Your progress will be lost. | هل أنت متأكد من إعادة التعيين؟ سيضيع تقدّمك. |
| 1454 | AI-draft | Associated Angel | الملَك المرتبط |
| 1455 | AI-draft | Associated Jinn King | ملك الجنّ المرتبط |
| 1456 | AI-draft | Auto Counting... | عدّ تلقائي... |
| 1457 | AI-draft | Auto Speed: | سرعة العدّ التلقائي: |
| 1458 | AI-draft | Avg Pace | متوسط الوتيرة |
| 1459 | AI-draft | Best practiced after prayer in a quiet space | يُستحسن بعد الصلاة في مكان هادئ |
| 1460 | AI-draft | Dhikr Progress | تقدّم الذكر |
| 1461 | AI-draft | Halfway | المنتصف |
| 1462 | AI-draft | I've completed | أتممت |
| 1463 | AI-draft | Pause | إيقاف مؤقت |
| 1464 | AI-draft | Play pronunciation | تشغيل النطق |
| 1465 | AI-draft | Quart | الربع |
| 1466 | AI-draft | Recite with presence and sincerity | اذكر بحضور وإخلاص |
| 1467 | AI-draft | Session Completed! | اكتملت الجلسة! |
| 1468 | AI-draft | Session History | سجلّ الجلسات |
| 1469 | AI-draft | Start Auto Count | ابدأ العدّ التلقائي |
| 1470 | AI-draft | Step-by-Step Practice Guide | دليل الممارسة خطوة بخطوة |
| 1471 | AI-draft | recitations of | تلاوات من |
| 1472 | AI-draft | 1. Overview Tab | 1. تبويب النظرة العامة |
| 1473 | AI-draft | 2. Personality Tab | 2. تبويب الشخصية |
| 1474 | AI-draft | 3. Career Tab | 3. تبويب المهنة |
| 1475 | AI-draft | 4. Blessed Day Tab | 4. تبويب اليوم المبارك |
| 1476 | AI-draft | 5. Spiritual Tab | 5. التبويب الروحي |
| 1477 | AI-draft | Adaptable | متكيّف |
| 1478 | AI-draft | Bold | جريء |
| 1479 | AI-draft | Buruj | البروج |
| 1480 | AI-draft | Career Paths | المسارات المهنية |
| 1481 | AI-draft | Communicative | تواصليّ |
| 1482 | AI-draft | Counseling | الاستشارة |
| 1483 | AI-draft | Creative | مبدع |
| 1484 | ✅ reviewed | Discover career paths that align with your elemental nature. Note both traditional and modern recommendations. | اكتشف مسارات مهنية تنسجم مع طبيعة عنصرك، ولاحظ التوصيات التقليدية والحديثة معًا. |
| 1485 | AI-draft | Emotional | عاطفي |
| 1486 | AI-draft | Empathetic | متعاطف |
| 1487 | AI-draft | Energetic | نشيط |
| 1488 | AI-draft | Follow the recommended spiritual practices, Divine Names, and Quranic verses for protection and balance. | اتّبع الممارسات الروحية والأسماء الحسنى والآيات القرآنية الموصى بها للحفظ والتوازن. |
| 1489 | AI-draft | Healthcare | الرعاية الصحية |
| 1490 | AI-draft | History & Significance | التاريخ والدلالة |
| 1491 | AI-draft | Ilm al-Huruf | علم الحروف |
| 1492 | AI-draft | Integrates Arabic letter numerology (Abjad) with celestial correspondences | يجمع بين عدد الحروف العربية (الأبجد) والمناسبات السماوية |
| 1493 | AI-draft | Intuitive | حدسيّ |
| 1494 | AI-draft | Istikharah al-Asmā' (Spiritual Guidance Through Names) is a classical Islamic tradition rooted in the science of Ilm al-Huruf (Science of Letters) and ancient astrological wisdom. This practice combines the numerical values of names with the Buruj (zodiacal mansions) to provide spiritual insight and guidance. | استخارة الأسماء (الإرشاد الروحي بالأسماء) تقليد إسلامي كلاسيكي متجذّر في علم الحروف والحكمة الفلكية القديمة. وتجمع هذه الممارسة بين القيم العددية للأسماء والبروج لتقديم تبصّر وإرشاد روحي. |
| 1495 | AI-draft | Key Traits | السمات الأساسية |
| 1496 | AI-draft | Numerical value derived from Arabic letters (Abjad numerology) | قيمة عددية مستخرجة من الحروف العربية (الأبجد) |
| 1497 | AI-draft | Passionate | شغوف |
| 1498 | AI-draft | Practical | عمليّ |
| 1499 | AI-draft | Purpose & Applications | الغاية والتطبيقات |
| 1500 | AI-draft | Remembrance of Allah through repetition of sacred phrases | ذكر الله بتكرار العبارات المباركة |
| 1501 | AI-draft | Schedule important decisions, meetings, and new ventures on your blessed day for optimal spiritual alignment. | اجعل القرارات المهمّة والاجتماعات والمشاريع الجديدة في يومك المبارك لأفضل انسجام روحي. |
| 1502 | AI-draft | Seeking guidance or consultation, traditionally through prayer | طلب الخيرة أو المشورة، تقليديًا بالصلاة |
| 1503 | AI-draft | Spiritual practices aligned with personal nature | ممارسات روحية منسجمة مع الطبيعة الشخصية |
| 1504 | AI-draft | Start here for quick, actionable guidance. This tab highlights the most important insights for immediate application. | ابدأ هنا لإرشاد سريع قابل للتطبيق. يبرز هذا التبويب أهمّ اللمحات للتطبيق الفوري. |
| 1505 | AI-draft | The 99 Names of Allah, each with specific spiritual qualities | أسماء الله الحسنى، لكل منها معانٍ روحية |
| 1506 | AI-draft | The Ancient Practice of Istikharah al-Asmā' | الممارسة العريقة لاستخارة الأسماء |
| 1507 | AI-draft | The Buruj System | نظام البروج |
| 1508 | AI-draft | The Buruj system divides the celestial sphere into 12 sections, each associated with specific elements and qualities. Your personal Buruj is determined by the remainder when dividing the sum of names by 12. | يقسم نظام البروج الفلك إلى 12 قسمًا، لكل منها عناصر وصفات. ويُحدَّد برجك الشخصي بباقي قسمة مجموع الأسماء على 12. |
| 1509 | AI-draft | The Four Classical Elements | العناصر الأربعة الكلاسيكية |
| 1510 | AI-draft | The Science of Letters - study of Arabic letters and their mystical meanings | علم الحروف - دراسة الحروف العربية ومعانيها الباطنة |
| 1511 | AI-draft | The Twelve Buruj (Zodiacal Mansions) | البروج الاثنا عشر |
| 1512 | AI-draft | The twelve zodiacal mansions or constellations | البروج أو الكوكبات الاثنا عشر |
| 1513 | AI-draft | Traced back to classical Islamic scholars and practitioners of Ilm al-Huruf | يعود إلى علماء مسلمين كلاسيكيين وممارسين لعلم الحروف |
| 1514 | AI-draft | Understanding personality traits and temperament | فهم سمات الشخصية والطبع |
| 1515 | AI-draft | Used for personal guidance, name selection, and spiritual counseling | يُستعمل للإرشاد الشخصي واختيار الأسماء والنصح الروحي |
| 1516 | AI-draft | Voluntary charity given as an act of worship | صدقة تطوّع تُعطى عبادةً |
| 1517 | AI-draft | Amina | أمينة |
| 1518 | AI-draft | Best when using your own saved profile. | الأفضل عند استعمال ملفك المحفوظ. |
| 1519 | AI-draft | Both names must be in Arabic script for accurate spiritual analysis | يجب أن يكون الاسمان بالحروف العربية لتحليل روحي دقيق |
| 1520 | AI-draft | Common Female Names | أسماء إناث شائعة |
| 1521 | AI-draft | Common Male Names | أسماء ذكور شائعة |
| 1522 | AI-draft | Database-backed suggestions | اقتراحات من قاعدة البيانات |
| 1523 | AI-draft | Detailed traits, social dynamics, and dream symbolism | سمات مفصّلة وديناميكيات اجتماعية ورموز المنامات |
| 1524 | AI-draft | Discover your core temperament (Fire, Earth, Air, or Water) | اكتشف طبعك الأساسي (نار أو تراب أو هواء أو ماء) |
| 1525 | AI-draft | Hassan | حسن |
| 1526 | AI-draft | Khadija | خديجة |
| 1527 | AI-draft | Month & day only | الشهر واليوم فقط |
| 1528 | AI-draft | Name must contain only Arabic letters | يجب أن يحتوي الاسم على حروف عربية فقط |
| 1529 | AI-draft | Need help? See example names | تحتاج مساعدة؟ انظر أسماء مثالية |
| 1530 | AI-draft | No Data Storage | لا تخزين للبيانات |
| 1531 | AI-draft | Optional lunar timing baselines (requires full DOB year) | أسس توقيت قمرية اختيارية (تتطلّب سنة الميلاد كاملة) |
| 1532 | AI-draft | Privacy & Security | الخصوصية والأمان |
| 1533 | AI-draft | Ready to calculate! | جاهز للحساب! |
| 1534 | AI-draft | Sacred Tradition | تراث أصيل |
| 1535 | AI-draft | Scholarly Foundation | أساس علمي |
| 1536 | AI-draft | The mother's influence shapes the soul's entry into this world, making her name essential for accurate spiritual calculation. | لاسم الأم أثر في التأمّل في دخول الروح إلى هذا العالم، ولذا كان أساسيًا لدقّة الحساب. |
| 1537 | AI-draft | This field is required | هذا الحقل مطلوب |
| 1538 | AI-draft | This practice is rooted in classical Islamic texts and has been preserved by scholars across generations. | هذه الممارسة متجذّرة في نصوص إسلامية كلاسيكية، وحفظها العلماء عبر الأجيال. |
| 1539 | AI-draft | This tool is created with respect for Islamic tradition and scholarly heritage. All calculations follow authentic classical methods. | صُنعت هذه الأداة باحترام للتراث الإسلامي والإرث العلمي، وكل الحسابات تتبع طرقًا كلاسيكية أصيلة. |
| 1540 | AI-draft | Your Burj (zodiac sign) | برجك |
| 1541 | AI-draft | Your names are calculated in real-time and never stored on our servers. All calculations happen locally in your browser. | تُحسب أسماؤك آنيًا ولا تُخزَّن أبدًا على خوادمنا. وكل الحسابات تجري محليًا في متصفحك. |
| 1542 | AI-draft | ʿIlm al-Ḥurūf (Science of Letters) is an ancient Islamic tradition that explores the spiritual significance of Arabic letters and their numerical values. Each letter corresponds to a number in the Abjad system, revealing hidden meanings and divine connections. | علم الحروف تراث إسلامي عريق يستكشف الدلالة الروحية للحروف العربية وقيمها العددية. فكل حرف يقابل عددًا في نظام الأبجد، فتنكشف معانٍ خفيّة وصلات روحية. |
| 1543 | AI-draft | Arabic Script Required | الحروف العربية مطلوبة |
| 1544 | AI-draft | Are you sure you want to clear all saved calculations? | هل أنت متأكد من مسح كل الحسابات المحفوظة؟ |
| 1545 | AI-draft | Auto-Save Feature | ميزة الحفظ التلقائي |
| 1546 | AI-draft | Both names must be entered in Arabic letters for accurate calculation | يجب إدخال الاسمين بالحروف العربية لحساب دقيق |
| 1547 | AI-draft | Calculation History | سجلّ الحسابات |
| 1548 | AI-draft | Discover Asrār — Sacred Sciences & Divine Timing | اكتشف أسرار — العلوم الإسلامية والتوقيت الإلهي |
| 1549 | AI-draft | Invite | دعوة |
| 1550 | AI-draft | Mother's Name Importance | أهمّية اسم الأم |
| 1551 | AI-draft | No saved calculations yet | لا حسابات محفوظة بعد |
| 1552 | AI-draft | Quick Tips | نصائح سريعة |
| 1553 | AI-draft | Share sacred wisdom — invite friends to discover their spiritual profile | شارك الحكمة — ادعُ أصدقاءك ليكتشفوا ملفهم الروحي |
| 1554 | AI-draft | Step 1: Enter Names | الخطوة 1: أدخل الأسماء |
| 1555 | AI-draft | Step 2: View Results | الخطوة 2: اعرض النتائج |
| 1556 | AI-draft | The mother's name is essential as it represents the soul's entry into this world | اسم الأم أساسي لأنه يمثّل دخول الروح إلى هذا العالم |
| 1557 | AI-draft | View History | عرض السجلّ |
| 1558 | AI-draft | Your calculations are automatically saved for quick access later | تُحفظ حساباتك تلقائيًا للرجوع إليها سريعًا |
| 1559 | AI-draft | element. Discover yours on Asrār! | . اكتشف عنصرك على أسرار! |
| 1560 | AI-draft | saved calculations | حسابات محفوظة |
| 1561 | ✅ reviewed | ✨🌙 I discovered my spiritual profile through Istikhara al-Asmāʾ! I'm a | ✨🌙 اكتشفت ملفي الروحي عبر استخارة الأسماء! العنصر الغالب عندي |
| 1562 | AI-draft | 🌙 Discover your spiritual profile with Istikhara al-Asmāʾ on Asrār! | 🌙 اكتشف ملفك الروحي باستخارة الأسماء على أسرار! |
| 1563 | AI-draft | 🌙 Discover your spiritual profile with Istikhara al-Asmāʾ on Asrār! Abjad numerology, planetary hours, Zikr challenges, and more. | 🌙 اكتشف ملفك الروحي باستخارة الأسماء على أسرار! حساب الأبجد والساعات الكوكبية وتحدّيات الذكر وأكثر. |
| 1564 | ✅ reviewed | Align your work with your elemental nature for fulfillment. | وافِق بين عملك وطبيعة عنصرك لتجد الرضا. |
| 1565 | AI-draft | Career Direction | التوجّه المهني |
| 1566 | AI-draft | Combine these practices consistently for 40 days to see meaningful spiritual and practical results. Start small and build gradually. | داوم على هذه الممارسات أربعين يومًا لتلمس أثرًا روحيًا وعمليًا بإذن الله. ابدأ بالقليل وزِد تدريجيًا. |
| 1567 | AI-draft | Monthly Sadaqah | الصدقة الشهرية |
| 1568 | AI-draft | Pro Tip | نصيحة متقدّمة |
| 1569 | AI-draft | Quick Action Guide | دليل العمل السريع |
| 1570 | AI-draft | Schedule Important Tasks | رتّب المهامّ المهمّة |
| 1571 | AI-draft | for spiritual balance and protection. | للتوازن الروحي والحفظ. |
| 1572 | AI-draft | the recommended Divine Names | الأسماء الحسنى الموصى بها |
| 1573 | AI-draft | to maintain spiritual balance. | للمحافظة على التوازن الروحي. |
| 1574 | AI-draft | Anger Pattern | نمط الغضب |
| 1575 | AI-draft | Career paths | المسارات المهنية |
| 1576 | AI-draft | Charity | الصدقة |
| 1577 | AI-draft | Communication Style | أسلوب التواصل |
| 1578 | AI-draft | Deep insights into your temperament and character traits | لمحات عميقة عن طبعك وسمات شخصيتك |
| 1579 | AI-draft | Divine Support | العون الإلهي |
| 1580 | AI-draft | Dream Symbolism | رموز المنامات |
| 1581 | AI-draft | Explore career guidance in the Career tab | استكشف الإرشاد المهني في تبويب المهنة |
| 1582 | AI-draft | Explore spiritual practices in the Spiritual tab | استكشف الممارسات الروحية في التبويب الروحي |
| 1583 | AI-draft | Explore the tabs above to dive deeper into your personality traits, career guidance, blessed day details, and spiritual practices. Each section provides comprehensive insights tailored to your spiritual profile. | استكشف التبويبات أعلاه للتعمّق في سمات شخصيتك والإرشاد المهني وتفاصيل يومك المبارك والممارسات الروحية. وكل قسم يقدّم لمحات شاملة لملفك الروحي. |
| 1584 | AI-draft | I discovered my spiritual profile through Istikhara al-Asmāʾ! | اكتشفت ملفي الروحي عبر استخارة الأسماء! |
| 1585 | AI-draft | Life Blessings | نِعَم الحياة |
| 1586 | AI-draft | Mark this day in your calendar every week. Consider setting a recurring reminder to help you align important activities with your power day. | علّم هذا اليوم في تقويمك كل أسبوع، وفكّر في تذكير متكرّر يعينك على مواءمة أنشطتك المهمّة مع يومك المبارك. |
| 1587 | AI-draft | My Istikhara Profile | ملفي في الاستخارة |
| 1588 | AI-draft | Power day | يوم القوة |
| 1589 | AI-draft | Quick Summary | ملخّص سريع |
| 1590 | AI-draft | Recite daily for spiritual balance | اذكر يوميًا للتوازن الروحي |
| 1591 | AI-draft | Schedule your most important meetings, critical decisions, and new ventures on this day when possible. Your spiritual energy and divine support are at their peak. | اجعل أهمّ اجتماعاتك وقراراتك ومشاريعك الجديدة في هذا اليوم ما أمكن، فهو يوم يُرجى فيه التيسير. |
| 1592 | AI-draft | Social Strengths | نقاط القوة الاجتماعية |
| 1593 | AI-draft | Special Significance | دلالة خاصة |
| 1594 | ✅ reviewed | These colors resonate with your elemental energy. Use them in your environment for spiritual balance. | تتناغم هذه الألوان مع طاقة عنصرك. استعملها في محيطك للتوازن الروحي. |
| 1595 | AI-draft | This is your most spiritually auspicious day of the week. Your energy peaks and divine support is strongest on this day. | هذا أبرك أيامك في الأسبوع بحسب التراث، يُرجى فيه مزيد من التيسير. |
| 1596 | AI-draft | Your Personality Profile | ملف شخصيتك |
| 1597 | AI-draft | Your spiritual profile at a glance | ملفك الروحي في لمحة |
| 1598 | AI-draft | more traits | سمات أخرى |
| 1599 | AI-draft | Career Match | التوافق المهني |
| 1600 | AI-draft | Core Trait | السمة الأساسية |
| 1601 | AI-draft | ID Number | الرقم التعريفي |
| 1602 | AI-draft | Key Insights | لمحات أساسية |
| 1603 | AI-draft | Overall Alignment | الانسجام الكلي |
| 1604 | AI-draft | Your Divine Name | اسمك من الأسماء الحسنى |
| 1605 | AI-draft | Ḥadad Value | قيمة الحدد |
| 1606 | AI-draft | Alignment with your element | الانسجام مع عنصرك |
| 1607 | AI-draft | Allow location access to calculate precise planetary hours. | اسمح بالوصول إلى الموقع لحساب الساعات الكوكبية بدقّة. |
| 1608 | AI-draft | Calculating optimal timing... | جارٍ حساب التوقيت الأمثل... |
| 1609 | AI-draft | Classical Islamic tradition | التراث الإسلامي الكلاسيكي |
| 1610 | AI-draft | How this timing is calculated: | كيف يُحسب هذا التوقيت: |
| 1611 | AI-draft | Perfect | مثالي |
| 1612 | AI-draft | Planetary hours based on sunrise/sunset | ساعات كوكبية بحسب الشروق والغروب |
| 1613 | AI-draft | Resonance with your zodiac planet | الرنين مع كوكب برجك |
| 1614 | AI-draft | See all 12 hours | عرض الساعات الاثنتي عشرة |
| 1615 | AI-draft | alignment with your | الانسجام مع |
| 1616 | AI-draft | ⏰ Precise Timing | ⏰ توقيت دقيق |
| 1617 | AI-draft | 🌙 Top 3 Night Hours | 🌙 أفضل 3 ساعات ليلية |
| 1618 | AI-draft | According to the teachings of Seringe Mahdiou Niane | بحسب تعاليم الشيخ سرين مهديو نيان |
| 1619 | AI-draft | By Seringe Mahdiou Niane — spoken in Wolof | للشيخ سرين مهديو نيان — بالولوفية |
| 1620 | AI-draft | Getting Started with Sadaqah | البدء بالصدقة |
| 1621 | AI-draft | Give secretly when possible, as it purifies the heart | أعطِ سرًّا ما أمكن، فذلك يطهّر القلب |
| 1622 | AI-draft | Guidance Sadaqah — | إرشاد الصدقة — |
| 1623 | AI-draft | Sadaqah Guidance — | إرشاد الصدقة — |
| 1624 | AI-draft | Set a monthly reminder for your regular sadaqah | اضبط تذكيرًا شهريًا لصدقتك المنتظمة |
| 1625 | AI-draft | Start small and increase gradually as you establish the habit | ابدأ بالقليل وزِد تدريجيًا حتى تثبت العادة |
| 1626 | AI-draft | Teaching Video (in Wolof) | مقطع تعليمي (بالولوفية) |
| 1627 | AI-draft | The intention (niyyah) is as important as the action itself | النيّة لا تقلّ أهمّية عن العمل نفسه |
| 1628 | AI-draft | Traditional charity forms associated with your sign, for ongoing blessings and spiritual balance. | صور الصدقة التقليدية المرتبطة ببرجك، للبركة الدائمة والتوازن الروحي. |
| 1629 | AI-draft | — Sadaqah | — الصدقة |
| 1630 | AI-draft | — Sadaqah (2) | — الصدقة (2) |
| 1631 | AI-draft | About Angels | عن الملائكة |
| 1632 | AI-draft | About Jinn | عن الجنّ |
| 1633 | AI-draft | Angel | الملَك |
| 1634 | AI-draft | Angels (Malāʾika) are celestial beings of light who serve as divine messengers and guardians. Each element is associated with specific angelic forces that can be invoked for spiritual support. | الملائكة خلقٌ من نور، يرسلهم الله رسلًا وحفظة. وفي التراث يرتبط كل عنصر بأسماء ملائكة معيّنة. |
| 1635 | AI-draft | Associated Zodiac | البرج المرتبط |
| 1636 | AI-draft | Celestial Guardian | حارس سماوي |
| 1637 | AI-draft | Choose one modern alternative that fits your lifestyle | اختر بديلًا حديثًا واحدًا يناسب نمط حياتك |
| 1638 | AI-draft | Complete daily | يوميًا |
| 1639 | AI-draft | Dhikr Count | عدد الذكر |
| 1640 | AI-draft | Divine Names & Dhikr Practice | الأسماء الحسنى وممارسة الذكر |
| 1641 | AI-draft | Element Alignment | انسجام العنصر |
| 1642 | ✅ reviewed | Elemental Force | قوة العنصر |
| 1643 | AI-draft | For Dhikr Count | لعدد الذكر |
| 1644 | AI-draft | For dhikr count | لعدد الذكر |
| 1645 | AI-draft | Getting Started | البداية |
| 1646 | AI-draft | Jinn King | ملك الجنّ |
| 1647 | AI-draft | Jinn are beings created from smokeless fire, existing in a parallel realm. In Islamic mystical tradition, certain Jinn kings govern elemental forces and can be understood through spiritual knowledge. | الجنّ خلقٌ من مارج من نار، يعيشون في عالم موازٍ. وفي بعض كتب التراث الباطني تُنسب إلى ملوك من الجنّ صلاتٌ بالعناصر؛ ويُذكر هذا هنا للمعرفة التاريخية فقط. |
| 1648 | AI-draft | Listen to recitation | استمع إلى التلاوة |
| 1649 | AI-draft | Make intention (niyyah) before each practice | اعقد النيّة قبل كل ممارسة |
| 1650 | AI-draft | Monthly Spiritual Balance | التوازن الروحي الشهري |
| 1651 | AI-draft | Performed ONCE in Your Lifetime | تُؤدّى مرّة واحدة في العمر |
| 1652 | AI-draft | Regular practice for ongoing spiritual growth | ممارسة منتظمة للنموّ الروحي المستمرّ |
| 1653 | AI-draft | Repetition Count | عدد التكرار |
| 1654 | AI-draft | Required Components | المكوّنات المطلوبة |
| 1655 | AI-draft | Sacred Lifetime Offering | صدقة العمر |
| 1656 | AI-draft | Spiritual Guardians & Forces | الحفظة والقوى الروحية |
| 1657 | AI-draft | This is a profound spiritual commitment that should be undertaken with careful preparation and sincere intention. | هذا التزام روحي عميق ينبغي أن يُقدَم عليه باستعداد وعناية ونيّة صادقة. |
| 1658 | ✅ reviewed | This verse resonates with your elemental nature and can be recited for spiritual guidance and protection. Reflect on its meaning as part of your daily practice. | تتناغم هذه الآية مع طبيعة عنصرك، ويمكن تلاوتها طلبًا للهداية والحفظ. وتدبّر معناها جزءًا من وردك اليومي. |
| 1659 | AI-draft | Use Name | استعمل الاسم |
| 1660 | AI-draft | View Practice History & Progress | عرض سجلّ الممارسة والتقدّم |
| 1661 | AI-draft | Your core energy | طاقتك الجوهرية |
| 1662 | AI-draft | Your personalized dhikr guidance with Divine Names tailored to your spiritual profile | إرشاد ذكرك الشخصي بأسماء حسنى مناسبة لملفك الروحي |
| 1663 | AI-draft | Add Practice Session | إضافة جلسة ممارسة |
| 1664 | AI-draft | Add Record | إضافة سجلّ |
| 1665 | AI-draft | Add Sadaqah Record | إضافة سجلّ صدقة |
| 1666 | AI-draft | Add Session | إضافة جلسة |
| 1667 | AI-draft | Amazing! You've maintained a | رائع! حافظت على |
| 1668 | AI-draft | Analytics & Trends | التحليلات والاتجاهات |
| 1669 | AI-draft | Best Streak | أفضل سلسلة |
| 1670 | AI-draft | Committed | ملتزم |
| 1671 | AI-draft | Complete Lifetime Offering | إتمام صدقة العمر |
| 1672 | AI-draft | Completed full session | أتمّ الجلسة كاملة |
| 1673 | AI-draft | Current Streak | السلسلة الحالية |
| 1674 | AI-draft | Insights & Recommendations | لمحات وتوصيات |
| 1675 | AI-draft | Invalid file format | تنسيق ملف غير صالح |
| 1676 | AI-draft | Keep it up! | واصل! |
| 1677 | AI-draft | Legend | مفتاح الرموز |
| 1678 | AI-draft | Mark Complete | علّم كمكتمل |
| 1679 | AI-draft | Mark as Completed | علّم كمكتمل |
| 1680 | AI-draft | Monitor your spiritual journey | تابع رحلتك الروحية |
| 1681 | AI-draft | Monthly Sadaqah Records | سجلّات الصدقة الشهرية |
| 1682 | AI-draft | No practice sessions yet | لا جلسات ممارسة بعد |
| 1683 | AI-draft | No sadaqah records yet | لا سجلّات صدقة بعد |
| 1684 | AI-draft | Not Yet Completed | لم يكتمل بعد |
| 1685 | AI-draft | Practice Tracking & Analytics | تتبّع الممارسة والتحليلات |
| 1686 | AI-draft | Recent Activity | النشاط الأخير |
| 1687 | AI-draft | Sadaqah Total | مجموع الصدقة |
| 1688 | AI-draft | This sacred offering should be performed once in your lifetime at the appropriate time. | تُؤدّى هذه الصدقة مرّة واحدة في العمر في الوقت المناسب. |
| 1689 | AI-draft | Total Recitations | مجموع التلاوات |
| 1690 | AI-draft | Total Sadaqah | مجموع الصدقة |
| 1691 | AI-draft | Visual charts and graphs will be available in the next update | ستتوفّر الرسوم البيانية في التحديث القادم |
| 1692 | AI-draft | You haven't practiced in | لم تمارس منذ |
| 1693 | AI-draft | consecutive days | أيام متتالية |
| 1694 | AI-draft | e.g., Food donation | مثلًا: التبرّع بطعام |
| 1695 | AI-draft | 25-35 min | 25-35 دقيقة |
| 1696 | AI-draft | Asmāʾ an-Nabī ﷺ | أسماء النبي ﷺ |
| 1697 | AI-draft | SALAWAT | الصلاة على النبي |
| 1698 | AI-draft | " badge on Asrār! | » على أسرار! |
| 1699 | AI-draft | Join me in this spiritual challenge! | شاركني هذا التحدّي الروحي! |
| 1700 | AI-draft | Share Achievement | شارك الإنجاز |
| 1701 | AI-draft | You earned a new badge: | نلت شارة جديدة: |
| 1702 | AI-draft | 🎖️ I just earned the " | 🎖️ نلت للتوّ شارة « |
| 1703 | AI-draft | No badges earned yet. Keep going! | لم تنل شارات بعد. واصل! |
| 1704 | AI-draft | 201 Names | الأسماء المئتان والواحد |
| 1705 | AI-draft | Custom count input | إدخال عدد مخصّص |
| 1706 | AI-draft | Remove challenge | إزالة التحدّي |
| 1707 | AI-draft | Track your daily dhikr and transform your spiritual practice. | تابع ذكرك اليومي وارتقِ بممارستك الروحية. |
| 1708 | AI-draft | Track your daily dhikr: | تابع ذكرك اليومي: |
| 1709 | AI-draft | 🎯 1000× daily for fast debt repayment 💫 Join this transformative practice! Towards financial freedom through Allah's grace... 🤲 | 🎯 ألف مرّة يوميًا رجاء قضاء الدَّين 💫 شاركني هذا الورد! نسأل الله من فضله التيسير... 🤲 |
| 1710 | AI-draft | 💰✨ Miraculous Debt Relief 🌙 What seems IMPOSSIBLE for us is EFFORTLESS for Allah! 📿 Recite with me after ʿIshāʾ: " | 💰✨ ورد لقضاء الدَّين 🌙 ما يبدو صعبًا علينا يسيرٌ على الله! 📿 اذكر معي بعد العشاء: « |
| 1711 | AI-draft | 🤲 Join me in this spiritual challenge! | 🤲 شاركني هذا التحدّي الروحي! |
| 1712 | AI-draft | Adjust your daily goal based on your capacity | عدّل هدفك اليومي بحسب طاقتك |
| 1713 | AI-draft | Auto-calculate from daily | احسب تلقائيًا من اليومي |
| 1714 | AI-draft | Challenge Settings | إعدادات التحدّي |
| 1715 | AI-draft | Enter daily target | أدخل الهدف اليومي |
| 1716 | AI-draft | Total goal | الهدف الكلي |
| 1717 | AI-draft | All-time total: | المجموع الكلي: |
| 1718 | AI-draft | dhikr completed by the community today | ذكرًا أتمّه المجتمع اليوم |
| 1719 | AI-draft | dhikr today | ذكر اليوم |
| 1720 | AI-draft | NAMES | الأسماء |
| 1721 | AI-draft | ISTIGHFAR | الاستغفار |
| 1722 | AI-draft | View Challenges | عرض التحدّيات |
| 1723 | AI-draft | community dhikr | ذكر المجتمع |
| 1724 | AI-draft | Add Challenge | إضافة تحدٍّ |
| 1725 | AI-draft | Explore Asrar | استكشف أسرار |
| 1726 | AI-draft | Best dhikr now: | أفضل ذكر الآن: |
| 1727 | AI-draft | Link copied to clipboard | نُسخ الرابط إلى الحافظة |
| 1728 | AI-draft | Share Progress | شارك التقدّم |
| 1729 | AI-draft | Hide QR Code | إخفاء رمز QR |
| 1730 | AI-draft | Scan Wave Senegal QR | امسح رمز Wave السنغال |
| 1731 | AI-draft | Scan with Wave Senegal app | امسح بتطبيق Wave السنغال |
| 1732 | AI-draft | The Prophet ﷺ preferred to set out on journeys on Thursday (Bukhārī). | كان النبي ﷺ يحبّ أن يخرج في سفره يوم الخميس (البخاري). |
| 1733 | AI-draft | Islamic Sciences | العلوم الإسلامية |
| 1734 | AI-draft | Choose your expertise level: 🔰 Beginner: Learn the basics of Abjad calculations 🎓 Intermediate: Explore Burj, planets, and divine names 👑 Scholar: Access advanced research tools | اختر مستوى خبرتك: 🔰 مبتدئ: تعلّم أساسيات حساب الأبجد 🎓 متوسط: استكشف البروج والكواكب والأسماء الحسنى 👑 باحث: أدوات بحث متقدّمة |
| 1735 | AI-draft | Autumn Equinox | الاعتدال الخريفي |
| 1736 | AI-draft | Cardinal air, initiating social balance | هواء منقلب، يبتدئ التوازن الاجتماعي |
| 1737 | AI-draft | Cardinal earth, initiating structured manifestation | تراب منقلب، يبتدئ التحقّق المنظّم |
| 1738 | AI-draft | Cardinal water, initiating emotional tides | ماء منقلب، يبتدئ مدّ العواطف |
| 1739 | AI-draft | Cold & Dry (Melancholic) | بارد يابس (سوداوي) |
| 1740 | AI-draft | Cold & Moist (Phlegmatic) | بارد رطب (بلغمي) |
| 1741 | AI-draft | Courage, pioneering spirit, leadership | الشجاعة، روح الريادة، القيادة |
| 1742 | AI-draft | Discernment, refinement, dedication | التمييز، التهذيب، التفاني |
| 1743 | AI-draft | Emotional depth, intuition, caring | العمق العاطفي، الحدس، الرعاية |
| 1744 | AI-draft | First of the fire triplicity, initiating the zodiacal cycle | أول المثلّثة النارية، يبتدئ دورة البروج |
| 1745 | AI-draft | Fixed air, pouring forth divine knowledge | هواء ثابت، يفيض بالمعرفة |
| 1746 | AI-draft | Fixed fire, representing the heart of solar power | نار ثابتة، قلب القوة الشمسية |
| 1747 | AI-draft | Fixed water, representing deep spiritual transformation | ماء ثابت، يمثّل التحوّل الروحي العميق |
| 1748 | AI-draft | Hot & Dry (Choleric) | حارّ يابس (صفراوي) |
| 1749 | AI-draft | Hot & Moist (Sanguine) | حارّ رطب (دموي) |
| 1750 | AI-draft | Humanitarianism, vision, revolution | الإنسانية، الرؤية، التجديد |
| 1751 | AI-draft | Justice, equilibrium, beauty | العدل، التوازن، الجمال |
| 1752 | AI-draft | Late Autumn | أواخر الخريف |
| 1753 | AI-draft | Mastery, responsibility, endurance | الإتقان، المسؤولية، التحمّل |
| 1754 | AI-draft | Mutable air, facilitating communication between realms | هواء ذو جسدين، ييسّر التواصل بين العوالم |
| 1755 | AI-draft | Mutable earth, the harvest and practical wisdom | تراب ذو جسدين، الحصاد والحكمة العملية |
| 1756 | AI-draft | Mutable fire, the arrow of divine aspiration | نار ذات جسدين، سهم التطلّع الروحي |
| 1757 | AI-draft | The One whose mercy encompasses all creation, providing for all beings without exception. | الذي وسعت رحمته الخلق كله، يرزق الكائنات جميعًا بلا استثناء. |
| 1758 | ✅ reviewed | Recite 298 times after Fajr to increase compassion and receive divine mercy. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 298 مرّة بعد الفجر لزيادة الرحمة في القلب ورجاء رحمة الله. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1759 | AI-draft | The One whose specific mercy is for believers, providing guidance and forgiveness. | الذي يختصّ المؤمنين برحمته، فيهديهم ويغفر لهم. |
| 1760 | ✅ reviewed | Recite 258 times for seeking forgiveness and divine compassion in difficulties. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 258 مرّة لطلب المغفرة والرحمة في الشدائد. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1761 | AI-draft | The Sovereign Lord, Master of all dominion, to whom all authority belongs. | الملك المالك لكل سلطان، الذي له الأمر كله. |
| 1762 | ✅ reviewed | Recite 90 times daily to gain respect and authority in righteous matters. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 90 مرّة يوميًا رجاء الهيبة والقبول في أمور الخير. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1763 | AI-draft | The Absolutely Pure, free from any defect or imperfection, transcendent above all creation. | المنزّه تنزيهًا مطلقًا عن كل عيب ونقص، المتعالي فوق الخلق. |
| 1764 | ✅ reviewed | Recite 170 times for spiritual purification and protection from negative influences. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 170 مرّة لتزكية النفس والتحصّن من المؤثّرات السيّئة. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1765 | AI-draft | The Bestower of peace and security, free from all defects and flaws. | واهب السلام والأمان، السالم من كل عيب ونقص. |
| 1766 | ✅ reviewed | Recite 131 times for inner peace and protection from harm. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 131 مرّة لسكينة النفس والحفظ من الأذى. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1767 | AI-draft | The One who grants faith and security, removing fear from the hearts of believers. | الذي يهب الإيمان والأمن، ويذهب الخوف من قلوب المؤمنين. |
| 1768 | ✅ reviewed | Recite 136 times for protection from fear and to strengthen faith. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 136 مرّة للحفظ من الخوف وتقوية الإيمان. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1769 | AI-draft | The Protector and Overseer who witnesses all things and guards His creation. | الرقيب الحافظ الذي يشهد كل شيء ويحفظ خلقه. |
| 1770 | ✅ reviewed | Recite 145 times for divine protection and to overcome fear of creation. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 145 مرّة رجاء حفظ الله وتجاوز الخوف من الخلق. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1771 | AI-draft | The Invincible and Dominant One, whom nothing can overcome or defeat. | الغالب الذي لا يُغلب ولا يُقهر. |
| 1772 | ✅ reviewed | Recite 94 times after Fajr for gaining strength and overcoming difficulties. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 94 مرّة بعد الفجر طلبًا للقوة وتجاوز الصعاب. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1773 | AI-draft | The Irresistible One who repairs what is broken and compels all to His will. | الذي يجبر الكسر ويمضي مشيئته في كل شيء. |
| 1774 | ✅ reviewed | Recite 206 times for healing of physical and spiritual ailments, and mending broken matters. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 206 مرّة رجاء شفاء العلل الجسدية والروحية وجبر الأمور المنكسرة. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1775 | AI-draft | The One who is supremely great, above all creation in majesty and glory. | المتكبّر عن صفات الخلق، العظيم في جلاله ومجده فوق كل شيء. |
| 1776 | ✅ reviewed | Recite 662 times to humble the ego and recognize divine supremacy. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 662 مرّة لكسر كِبر النفس واستحضار عظمة الله. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1777 | AI-draft | The One who brings everything into existence from non-existence according to perfect measure. | الذي يوجد الأشياء من العدم بتقدير كامل. |
| 1778 | ✅ reviewed | Recite 731 times for creativity, bringing new blessings, and for women seeking children. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 731 مرّة للإبداع واستجلاب نعم جديدة، ولمن ترجو الذرّية. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1779 | AI-draft | The One who evolves and shapes creation, bringing order from chaos. | الذي يبرأ الخلق ويسوّيه، فيُخرج النظام من الفوضى. |
| 1780 | ✅ reviewed | Recite 213 times for bringing order to chaotic situations and personal transformation. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 213 مرّة لترتيب الأحوال المضطربة والتحوّل الشخصي. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1781 | AI-draft | The One who shapes and forms creation in perfect harmony and beauty. | الذي يصوّر الخلق في تناسق وجمال تامّين. |
| 1782 | ✅ reviewed | Recite 336 times for beauty in character and for pregnant women for a beautiful healthy child. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 336 مرّة لحسن الخُلق، وللحامل رجاء ولد سليم حسن الخِلقة. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1783 | AI-draft | The One who continuously forgives all sins for those who seek forgiveness with sincerity. | الذي يغفر الذنوب مرة بعد مرة لمن استغفر بصدق. |
| 1784 | ✅ reviewed | Recite 1281 times over a sustained practice for forgiveness of sins and purification of the heart. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 1281 مرّة بالمداومة طلبًا لمغفرة الذنوب وطهارة القلب. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1785 | AI-draft | The Irresistible One who has power over all things and subdues all creation. | القاهر فوق كل شيء، الذي خضع له الخلق كله. |
| 1786 | ✅ reviewed | Recite 306 times for overcoming enemies and subduing the nafs (ego). For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 306 مرّة لدفع الأعداء وقهر النفس. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1787 | AI-draft | The One who continuously bestows gifts and blessings without expecting return. | الذي يهب العطايا والنعم دائمًا بلا انتظار مقابل. |
| 1788 | ✅ reviewed | Recite 14 times after Fajr for increase in provision and blessings. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 14 مرّة بعد الفجر رجاء زيادة الرزق والبركة. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1789 | AI-draft | The One who provides all sustenance, both material and spiritual, to all creation. | الذي يرزق الخلق كله رزقًا ماديًا وروحيًا. |
| 1790 | ✅ reviewed | Recite 308 times for provision and to remove poverty. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 308 مرّة طلبًا للرزق ودفع الفقر. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1791 | AI-draft | The One who opens doors of opportunity, knowledge, and divine understanding. | الذي يفتح أبواب الخير والعلم والفهم. |
| 1792 | ✅ reviewed | Recite 489 times for opening of closed doors, both worldly and spiritual. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 489 مرّة رجاء فتح الأبواب المغلقة في الدنيا والدين. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1793 | ✅ reviewed | The One whose knowledge encompasses all things, past, present, and future. | الذي أحاط بكل شيء علمًا، ما كان وما يكون وما سيكون. |
| 1794 | ✅ reviewed | Recite 150 times for increase in knowledge and understanding of divine wisdom. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 150 مرّة لزيادة العلم وفهم حكمة الله. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1795 | AI-draft | The One who withholds and constricts, testing through difficulty and scarcity. | الذي يقبض ويمسك، ويبتلي بالشدّة والقلّة. |
| 1796 | ✅ reviewed | Recite 903 times, or paired with Al-Bāsiṭ, for balance in giving and withholding. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 903 مرّة، أو مقرونًا باسم الباسط، للتوازن بين العطاء والإمساك. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1797 | AI-draft | The One who extends provision, opens doors, and grants abundance to whom He wills. | الذي يبسط الرزق ويفتح الأبواب ويعطي السعة لمن يشاء. |
| 1798 | ✅ reviewed | Recite 72 times, or paired with Al-Qābiḍ, for balance, or alone for expansion in provision and relief. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 72 مرّة، أو مقرونًا باسم القابض للتوازن، أو منفردًا رجاء سعة الرزق والفرج. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1799 | AI-draft | The One who lowers the arrogant and humbles false pride, restoring rightful order. | الذي يخفض المتكبّرين ويذلّ الكِبر الزائف، فيردّ الأمر إلى نصابه. |
| 1800 | ✅ reviewed | Recite 1481 times, or paired with Ar-Rāfiʿ, for protection from arrogance and against oppressive people. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 1481 مرّة، أو مقرونًا باسم الرافع، للحفظ من الكِبر ومن الظالمين. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1801 | AI-draft | The One who raises the sincere in rank, honor, and closeness to Him. | الذي يرفع الصادقين في المنزلة والكرامة والقرب منه. |
| 1802 | ✅ reviewed | Recite 351 times for elevation in status, resolving difficulties, and gaining respect. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 351 مرّة رجاء رفعة المنزلة وتفريج الصعاب ونيل الاحترام. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1803 | AI-draft | The One who grants honor and strength to whomever He wills, regardless of outward means. | الذي يعزّ من يشاء ويقوّيه، بصرف النظر عن الأسباب الظاهرة. |
| 1804 | ✅ reviewed | Recite 117 times, or paired with Al-Mudhill, for dignity and to counter humiliation from others. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 117 مرّة، أو مقرونًا باسم المذل، للكرامة ودفع الإهانة. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1805 | AI-draft | The One who humbles the arrogant and removes false honor from those who transgress. | الذي يذلّ المتكبّرين وينزع العزّة الزائفة ممن تجاوز الحدّ. |
| 1806 | ✅ reviewed | Recite 770 times for protection from oppressors and to seek justice against wrongdoing. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 770 مرّة للحفظ من الظالمين وطلب العدل في المظالم. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1807 | AI-draft | The One who hears all sounds and supplications, however faint, without exception. | الذي يسمع كل صوت ودعاء مهما خفي، بلا استثناء. |
| 1808 | ✅ reviewed | Recite 180 times when your duʿāʾ feels unheard, trusting that He hears every whispered plea. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 180 مرّة حين تشعر أن دعاءك لا يُسمع، ثقةً بأنه يسمع كل همس. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1809 | AI-draft | The One who sees all things, seen and unseen, with perfect and complete awareness. | الذي يبصر كل شيء، ظاهره وخفيّه، بإحاطة تامّة. |
| 1810 | ✅ reviewed | Recite 302 times for guidance in matters requiring discernment and clear insight. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 302 مرّة طلبًا للهداية في الأمور التي تحتاج إلى تمييز وبصيرة. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1811 | AI-draft | The One whose judgment is final and perfectly just, ruling over all disputes. | الذي حكمه نافذ وعدل تامّ، يقضي في كل خلاف. |
| 1812 | ✅ reviewed | Recite 68 times when seeking fair resolution to a dispute or an unjust situation. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 68 مرّة عند طلب حلّ عادل لخلاف أو حال ظالمة. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1813 | AI-draft | The One whose every decree is perfectly balanced and free of any inequity. | الذي كل قضائه موزون تامّ، لا جور فيه. |
| 1814 | ✅ reviewed | Recite 104 times to cultivate fairness in one's own dealings and trust in divine justice. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 104 مرّة لتنمية العدل في معاملاتك والثقة بعدل الله. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1815 | AI-draft | The One whose kindness reaches His creation in ways too subtle to perceive, easing hardship gently. | الذي يصل لطفه إلى خلقه بطرق تدقّ عن الإدراك، فييسّر الشدائد برفق. |
| 1816 | ✅ reviewed | Recite 129 times for gentle ease through difficulty and unseen relief. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 129 مرّة رجاء التيسير اللطيف في الشدّة والفرج الخفيّ. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1817 | AI-draft | The One who is intimately acquainted with the inner reality of all things. | الذي يعلم بواطن الأشياء وحقائقها. |
| 1818 | ✅ reviewed | Recite 812 times for clarity when a situation's true nature is hidden from you. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 812 مرّة طلبًا للوضوح حين تخفى عليك حقيقة أمر. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1819 | AI-draft | The One who delays punishment out of mercy, giving space for repentance and correction. | الذي يؤخّر العقوبة رحمةً، ويفسح للتوبة والإصلاح. |
| 1820 | ✅ reviewed | Recite 88 times for patience with others and to soften a quick temper. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 88 مرّة للصبر على الناس وتليين سرعة الغضب. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1821 | AI-draft | The One whose greatness has no limit and before whom all creation is humbled. | الذي لا حدّ لعظمته، وخضع له الخلق كله. |
| 1822 | ✅ reviewed | Recite 1020 times to restore a sense of awe and humility before divine majesty. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 1020 مرّة لاستعادة الهيبة والتواضع أمام جلال الله. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1823 | AI-draft | The One whose forgiveness covers and conceals sin completely for the repentant. | الذي يستر الذنب ويغفره تمامًا للتائب. |
| 1824 | ✅ reviewed | Recite 1286 times over a sustained practice, seeking forgiveness and covering of past faults. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 1286 مرّة بالمداومة طلبًا للمغفرة وستر ما مضى من الهفوات. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1825 | AI-draft | The One who rewards even small good deeds abundantly and acknowledges every effort. | الذي يجزي على القليل من العمل الصالح جزاءً وافرًا، ولا يضيع سعيًا. |
| 1826 | ✅ reviewed | Recite 526 times to cultivate gratitude and to seek reward for small acts of good. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 526 مرّة لتنمية الشكر ورجاء الأجر على صغير الخير. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1827 | AI-draft | The One exalted absolutely above all creation in status, power, and being. | المتعالي تعاليًا مطلقًا فوق الخلق منزلةً وقدرةً ووجودًا. |
| 1828 | ✅ reviewed | Recite 110 times for elevation in rank and to seek closeness to what is highest and purest. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 110 مرّة رجاء رفعة المنزلة والقرب مما هو أعلى وأطهر. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1829 | AI-draft | The One whose greatness surpasses every measure of created greatness. | الذي تفوق عظمته كل مقياس لعظمة مخلوقة. |
| 1830 | ✅ reviewed | Recite 232 times to remember true scale and proportion when a worldly matter feels overwhelming. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 232 مرّة لتذكّر الأحجام الحقيقية حين يثقل عليك أمر دنيوي. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1831 | AI-draft | The One who protects and preserves all things from loss, harm, and decay. | الذي يحفظ كل شيء من الضياع والضرر والفساد. |
| 1832 | ✅ reviewed | Recite 998 times for protection of oneself, one's family, health, and memory. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 998 مرّة لحفظ النفس والأهل والصحة والذاكرة. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1833 | AI-draft | The One who provides sustenance and nourishment sufficient for every created being. | الذي يقيت كل مخلوق بما يكفيه من قوت. |
| 1834 | ✅ reviewed | Recite 550 times when seeking sustenance, sufficiency, and provision for one's needs. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 550 مرّة عند طلب القوت والكفاية والرزق للحاجات. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1835 | AI-draft | The One who accounts for every deed with perfect precision and is sufficient for those who trust Him. | الذي يحاسب على كل عمل بدقّة تامّة، وهو حسب من توكّل عليه. |
| 1836 | ✅ reviewed | Recite 80 times for sufficiency in a difficult matter and trust that He accounts for all things. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 80 مرّة رجاء الكفاية في أمر عسير، وثقةً بأنه يحصي كل شيء. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1837 | AI-draft | The One possessing absolute majesty, dignity, and grandeur beyond comprehension. | ذو الجلال والكرامة والعظمة التي تفوق الإدراك. |
| 1838 | ✅ reviewed | Recite 73 times to cultivate reverence and dignified bearing in one's own conduct. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 73 مرّة لتنمية الوقار وحسن السمت في سلوكك. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1839 | AI-draft | The One who gives generously and honorably, without being asked and without limit. | الذي يعطي بسخاء وكرم، بلا سؤال وبلا حدّ. |
| 1840 | ✅ reviewed | Recite 270 times for generosity of provision, character, and honorable treatment from others. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 270 مرّة رجاء سعة الرزق وكرم الخُلق وحسن معاملة الناس. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1841 | AI-draft | The One who watches over all things constantly, missing nothing at any moment. | الذي يراقب كل شيء دائمًا، لا يغيب عنه شيء في أي لحظة. |
| 1842 | ✅ reviewed | Recite 312 times to cultivate mindfulness (murāqabah) of being watched in every action. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 312 مرّة لتنمية المراقبة واستحضار نظر الله في كل عمل. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1843 | AI-draft | The One who answers the call of every supplicant, in the way and time He chooses. | الذي يجيب دعوة كل داعٍ، بالطريقة والوقت اللذين يختارهما. |
| 1844 | ✅ reviewed | Recite 55 times while making duʿāʾ, especially in moments of sincere need. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 55 مرّة مع الدعاء، لا سيما في ساعات الحاجة الصادقة. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1845 | AI-draft | The One whose mercy, knowledge, and provision encompass all things without limit. | الذي وسعت رحمته وعلمه ورزقه كل شيء بلا حدّ. |
| 1846 | ✅ reviewed | Recite 137 times when feeling constrained, to open oneself to unseen possibility. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 137 مرّة حين تشعر بالضيق، لتنفتح على أبواب لا تراها. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1847 | AI-draft | The One whose every decree carries perfect wisdom, even when hidden from us. | الذي في كل قضائه حكمة تامّة، وإن خفيت علينا. |
| 1848 | ✅ reviewed | Recite 78 times for wisdom in decision-making and acceptance of what cannot be changed. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 78 مرّة طلبًا للحكمة في القرار والرضا بما لا يتغيّر. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1849 | AI-draft | The One whose love for His righteous servants is sincere, constant, and freely given. | الذي يحبّ عباده الصالحين حبًّا صادقًا دائمًا بلا مقابل. |
| 1850 | ✅ reviewed | Recite 20 times to soften hearts, restore affection, and strengthen bonds of love. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 20 مرّة لتليين القلوب وإعادة المودّة وتقوية روابط المحبّة. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1851 | AI-draft | The One whose glory and nobility are perfect and beyond all comparison. | الذي له المجد والشرف التامّان بلا نظير. |
| 1852 | ✅ reviewed | Recite 57 times to seek honor, glory, and a noble outcome in one's affairs. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 57 مرّة رجاء العزّة والمجد وحسن العاقبة في أمورك. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1853 | AI-draft | The One who will raise all creation after death and who awakens hearts from heedlessness. | الذي يبعث الخلق بعد الموت، ويوقظ القلوب من الغفلة. |
| 1854 | ✅ reviewed | Recite 573 times to awaken motivation, renewal, and a fresh start after stagnation. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 573 مرّة لإيقاظ الهمّة والتجدّد وبداية جديدة بعد الركود. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1855 | AI-draft | The One who witnesses all things directly, at every place and every moment. | الذي يشهد كل شيء مباشرة، في كل مكان وكل لحظة. |
| 1856 | ✅ reviewed | Recite 319 times to find comfort that no wrong goes unseen and no good deed unwitnessed. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 319 مرّة لتطمئنّ بأنه لا ظلم يخفى ولا خير يضيع. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1857 | AI-draft | The One whose existence and reality are absolute, the ultimate standard of all truth. | الذي وجوده وحقيقته مطلقان، وهو أصل كل حقّ. |
| 1858 | ✅ reviewed | Recite 108 times when seeking clarity, honesty, and firmness upon what is true. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 108 مرّة طلبًا للوضوح والصدق والثبات على الحقّ. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1859 | AI-draft | The One who is sufficient as a guardian and disposer of affairs for those who rely on Him. | الذي يكفي وكيلًا ومدبّرًا لأمور من توكّل عليه. |
| 1860 | ✅ reviewed | Recite 66 times when placing full trust (tawakkul) in an outcome beyond your control. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 66 مرّة عند التوكّل التامّ في أمر خارج عن يدك. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1861 | AI-draft | The One possessing complete and unshakable strength, unlike any creature's power. | صاحب القوة التامّة الراسخة، لا كقوة أي مخلوق. |
| 1862 | ✅ reviewed | Recite 116 times for inner strength and resilience in hardship. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 116 مرّة للقوة الباطنة والصمود في الشدّة. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1863 | AI-draft | The One whose power is unwavering firmness, needing no effort or exertion. | الذي قوّته ثبات لا يتزعزع، بلا جهد ولا نصب. |
| 1864 | ✅ reviewed | Recite 500 times for steadfastness and firm resolve when facing a difficult trial. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 500 مرّة للثبات والعزيمة عند ابتلاء صعب. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1865 | AI-draft | The One who is the true guardian and close friend of the believers, protecting their affairs. | وليّ المؤمنين الحقّ وناصرهم، الذي يتولّى أمورهم. |
| 1866 | ✅ reviewed | Recite 46 times for divine protection and closeness in times of loneliness or vulnerability. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 46 مرّة رجاء حفظ الله وقربه في أوقات الوحدة أو الضعف. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1867 | AI-draft | The One who is inherently worthy of all praise, in every state and circumstance. | المستحقّ لكل حمد بذاته، في كل حال. |
| 1868 | ✅ reviewed | Recite 62 times to cultivate gratitude and a habit of praise in ease and hardship alike. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 62 مرّة لتنمية الشكر وعادة الحمد في السرّاء والضرّاء. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1869 | AI-draft | The One who counts and knows the exact number and detail of all things, however small. | الذي أحصى كل شيء عددًا وتفصيلًا، مهما صغر. |
| 1870 | ✅ reviewed | Recite 148 times to find peace that nothing done in sincerity, however small, is ever lost. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 148 مرّة لتطمئنّ بأن العمل الخالص لا يضيع مهما صغر. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1871 | AI-draft | The One who began all of creation from nothing, without any prior model. | الذي بدأ الخلق كله من العدم، بلا مثال سابق. |
| 1872 | ✅ reviewed | Recite 56 times when starting something new and seeking a strong, blessed beginning. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 56 مرّة عند ابتداء أمر جديد رجاء بداية قوية مباركة. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1873 | AI-draft | The One who will restore all creation after its ending, just as He originated it. | الذي يعيد الخلق بعد فنائه، كما بدأه. |
| 1874 | ✅ reviewed | Recite 124 times when seeking to restore something lost — health, a relationship, or a state of ease. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 124 مرّة عند طلب ما فُقد — صحة أو علاقة أو حال يسر. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1875 | AI-draft | The One who gives life to bodies and, spiritually, brings hearts to life through faith. | الذي يحيي الأجساد، ويحيي القلوب بالإيمان. |
| 1876 | ✅ reviewed | Recite 68 times to seek renewal of spirit and vitality in a period of heaviness. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 68 مرّة رجاء تجدّد الروح والحيوية في وقت الثقل. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1877 | AI-draft | The One who ordains the death of every living thing at its appointed time. | الذي قدّر موت كل حيّ في أجله المسمّى. |
| 1878 | ✅ reviewed | Recite 490 times to reflect on mortality and reorder priorities toward what truly matters. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 490 مرّة للتفكّر في الموت وترتيب الأولويات نحو ما يهمّ حقًّا. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1879 | AI-draft | The One whose life is eternal, without beginning or end, sustaining all other life. | الحيّ الذي حياته أبدية بلا بداية ولا نهاية، وبه قيام كل حياة. |
| 1880 | ✅ reviewed | Recite 18 times, or paired with Al-Qayyūm, for vitality, healing, and enduring strength. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 18 مرّة، أو مقرونًا باسم القيوم، رجاء الحيوية والشفاء والقوة الدائمة. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1881 | AI-draft | The One who sustains all existence while depending on nothing and no one. | القائم بكل موجود، الذي لا يحتاج إلى شيء ولا إلى أحد. |
| 1882 | ✅ reviewed | Recite 156 times when feeling unsteady, to anchor yourself in what alone truly sustains. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 156 مرّة حين تشعر بعدم الثبات، لتستند إلى من به وحده القيام. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1883 | AI-draft | The One who lacks nothing and finds whatever He wills without any search. | الذي لا يعوزه شيء، ويجد ما يريد بلا طلب. |
| 1884 | ✅ reviewed | Recite 14 times when seeking something lost — an object, an answer, or a way forward. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 14 مرّة عند طلب ما فُقد — شيء أو جواب أو طريق. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1885 | AI-draft | The One of perfect nobility, generosity, and glory combined in absolute measure. | الذي اجتمع له كمال الشرف والكرم والمجد. |
| 1886 | ✅ reviewed | Recite 48 times to seek nobility of character and a generous, glorious outcome. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 48 مرّة رجاء شرف الخُلق والكرم وحسن العاقبة. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1887 | AI-draft | The One who is singular in His essence, without partner, equal, or division. | الواحد في ذاته، بلا شريك ولا نظير ولا تجزّؤ. |
| 1888 | ✅ reviewed | Recite 19 times to affirm tawḥīd (divine oneness) and unify a scattered heart and mind. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 19 مرّة لتحقيق التوحيد وجمع القلب والعقل المتفرّقين. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1889 | AI-draft | The One utterly indivisible and incomparable, unlike anything in creation. | الأحد الذي لا ينقسم ولا يُشبَّه، ليس كمثله شيء. |
| 1890 | ✅ reviewed | Recite 13 times alongside Al-Wāḥid to deepen certainty in God's absolute oneness. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 13 مرّة مع اسم الواحد لتعميق اليقين بوحدانية الله. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1891 | AI-draft | The One depended upon by all creation, while He depends on nothing whatsoever. | الذي يصمد إليه الخلق كله، وهو غنيّ عن كل شيء. |
| 1892 | ✅ reviewed | Recite 134 times when in need, turning to the One true, sufficient refuge for every matter. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 134 مرّة عند الحاجة، بالتوجّه إلى الملجأ الحقّ الكافي في كل أمر. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1893 | AI-draft | The One capable of all things, with power that meets no obstacle or limitation. | القادر على كل شيء، لا تعترض قدرته عقبة ولا حدّ. |
| 1894 | ✅ reviewed | Recite 305 times when a matter feels impossible, to remember nothing is beyond His power. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 305 مرّة حين يبدو أمر مستحيلًا، لتتذكّر أن لا شيء يعجز قدرته. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1895 | AI-draft | The One who exercises total power with complete authority over how and when things occur. | الذي يمضي قدرته التامّة بسلطان كامل على كيف ومتى تقع الأشياء. |
| 1896 | ✅ reviewed | Recite 744 times for authority and command over a difficult or chaotic situation. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 744 مرّة رجاء التمكّن في أمر صعب أو مضطرب. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1897 | AI-draft | The One who brings forward whom and whatever He wills, ahead of its expected time. | الذي يقدّم من يشاء وما يشاء قبل وقته المنتظر. |
| 1898 | ✅ reviewed | Recite 184 times when seeking to move a stalled matter forward or to advance in rank. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 184 مرّة رجاء تقديم أمر متعثّر أو الترقّي في المنزلة. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1899 | AI-draft | The One who delays whom and whatever He wills, with wisdom hidden in the timing. | الذي يؤخّر من يشاء وما يشاء، بحكمة خفيّة في التوقيت. |
| 1900 | ✅ reviewed | Recite 846 times for patience and trust when something you want is delayed. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 846 مرّة للصبر والثقة حين يتأخّر ما تريد. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1901 | AI-draft | The One who exists before all things, with no beginning before Him. | الذي ليس قبله شيء، بلا بداية. |
| 1902 | ✅ reviewed | Recite 37 times when beginning a new phase, seeking a foundation rooted in what is eternal. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 37 مرّة عند ابتداء مرحلة جديدة، طلبًا لأساس متجذّر في الباقي. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1903 | AI-draft | The One who remains after all things end, with no end following Him. | الذي ليس بعده شيء، الباقي بعد فناء كل شيء. |
| 1904 | ✅ reviewed | Recite 801 times for perspective on what truly lasts, beyond the temporary and fleeting. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 801 مرّة للنظر فيما يبقى حقًّا وراء الزائل العابر. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1905 | AI-draft | The One whose signs are evident throughout all of creation, visible to those who reflect. | الذي آياته ظاهرة في الخلق كله لمن تأمّل. |
| 1906 | ✅ reviewed | Recite 1106 times to see divine signs more clearly in everyday life and nature. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 1106 مرّة لرؤية آيات الله أوضح في الحياة اليومية والطبيعة. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1907 | AI-draft | The One whose true essence is beyond perception, hidden from every created sense. | الذي تحتجب حقيقة ذاته عن الإدراك، خفيّة عن كل حسّ مخلوق. |
| 1908 | ✅ reviewed | Recite 62 times to seek inward, hidden knowledge and closeness beyond outward appearances. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 62 مرّة لطلب المعرفة الباطنة والقرب وراء الظواهر. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1909 | AI-draft | The One who governs and administers the affairs of all creation with complete authority. | الذي يتولّى أمور الخلق كله ويدبّرها بسلطان تامّ. |
| 1910 | ✅ reviewed | Recite 47 times for order and good governance in one's own household or responsibilities. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 47 مرّة رجاء النظام وحسن التدبير في بيتك ومسؤولياتك. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1911 | AI-draft | The One utterly exalted above every limitation, comparison, or created attribute. | المتعالي تعاليًا مطلقًا عن كل حدّ ومثيل وصفة مخلوقة. |
| 1912 | ✅ reviewed | Recite 551 times to rise above petty concerns and reconnect with what is truly transcendent. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 551 مرّة للارتفاع عن الصغائر والعودة إلى ما هو متعالٍ حقًّا. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1913 | AI-draft | The One whose goodness and kindness toward His creation is expansive and unceasing. | الذي برّه وإحسانه إلى خلقه واسع لا ينقطع. |
| 1914 | ✅ reviewed | Recite 202 times to invite goodness into one's affairs and to become a source of good to others. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 202 مرّة لاستجلاب الخير إلى أمورك وأن تكون مصدر خير للناس. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1915 | AI-draft | The One who repeatedly accepts the repentance of His servants, however often they return. | الذي يقبل توبة عباده مرة بعد مرة، مهما رجعوا. |
| 1916 | ✅ reviewed | Recite 409 times when seeking sincere repentance (tawbah) and a fresh start after wrongdoing. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 409 مرّة عند طلب التوبة الصادقة وبداية جديدة بعد الذنب. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1917 | AI-draft | The One who justly requites wrongdoing and defends the oppressed against oppressors. | الذي يجازي الظلم بالعدل، وينتصر للمظلوم من الظالم. |
| 1918 | ✅ reviewed | Recite 630 times when seeking justice against persistent wrongdoing, with patience and restraint. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 630 مرّة عند طلب العدل أمام ظلم مستمرّ، مع الصبر وضبط النفس. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1919 | AI-draft | The One who erases sin entirely, as though it had never been committed. | الذي يمحو الذنب كليًا، كأنه لم يكن. |
| 1920 | ✅ reviewed | Recite 156 times seeking complete pardon, and to cultivate the habit of pardoning others. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 156 مرّة طلبًا للعفو التامّ، ولتنمية عادة العفو عن الناس. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1921 | AI-draft | The One whose tenderness and gentle compassion soften even the harshest hardship. | الذي رأفته ورحمته اللطيفة تليّن أشدّ الشدائد. |
| 1922 | ✅ reviewed | Recite 292 times for gentleness with oneself and others in a season of hardship. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 292 مرّة للرفق بالنفس وبالناس في أوقات الشدّة. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1923 | AI-draft | The One who owns and grants dominion to whomever He wills, and removes it as He wills. | الذي يملك الملك ويؤتيه من يشاء، وينزعه ممن يشاء. |
| 1924 | ✅ reviewed | Recite 212 times for authority in one's affairs and acceptance of shifts in fortune. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 212 مرّة رجاء التمكّن في أمورك والرضا بتقلّب الأحوال. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1925 | AI-draft | The One who combines absolute majesty with boundless generosity toward His creation. | الذي جمع الجلال المطلق والكرم الذي لا حدّ له لخلقه. |
| 1926 | ✅ reviewed | Recite 1100 times for a combination of dignity and generosity in one's own character. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 1100 مرّة للجمع بين الوقار والكرم في خُلقك. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1927 | AI-draft | The One who establishes perfect equity in all His judgments and dealings. | الذي يقيم القسط التامّ في كل أحكامه ومعاملاته. |
| 1928 | ✅ reviewed | Recite 209 times when seeking a fair, balanced resolution between two parties. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 209 مرّة عند طلب حلّ عادل متوازن بين طرفين. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1929 | AI-draft | The One who will gather all creation together, and who unites what is scattered. | الذي يجمع الخلق كله، ويؤلّف ما تفرّق. |
| 1930 | ✅ reviewed | Recite 114 times to reunite a scattered family, community, or a fragmented state of mind. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 114 مرّة لجمع شمل الأسرة أو الجماعة أو الذهن المشتّت. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1931 | AI-draft | The One utterly free of any need, possessing complete and total riches. | الغنيّ غنًى مطلقًا، لا يحتاج إلى شيء. |
| 1932 | ✅ reviewed | Recite 1060 times for contentment (qināʿah) and freedom from dependence on others. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 1060 مرّة للقناعة والاستغناء عن الناس. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1933 | AI-draft | The One who enriches and grants sufficiency to whomever He wills. | الذي يغني من يشاء ويكفيه. |
| 1934 | ✅ reviewed | Recite 1100 times when seeking financial ease, sufficiency, and freedom from want. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 1100 مرّة عند طلب اليسر المالي والكفاية والاستغناء. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1935 | AI-draft | The One who withholds harm from His servants and protects them from what would injure them. | الذي يمنع الأذى عن عباده ويحفظهم مما يضرّهم. |
| 1936 | ✅ reviewed | Recite 161 times for protection from harm, danger, and calamity. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 161 مرّة للحفظ من الأذى والخطر والبلاء. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1937 | AI-draft | The One who permits hardship to occur as a test, trial, or consequence, within His wisdom. | الذي يأذن بوقوع الشدّة ابتلاءً أو جزاءً، بحكمته. |
| 1938 | ✅ reviewed | Recite 1001 times for perspective when facing hardship, trusting the wisdom behind it. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 1001 مرّة طلبًا لحسن النظر عند الشدّة، ثقةً بحكمة الله فيها. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1939 | ✅ reviewed | The One from whom all true benefit flows, in this life and the next. | الذي منه كلُّ نفعٍ حقيقي في الدنيا والآخرة. |
| 1940 | ✅ reviewed | Recite 201 times when seeking benefit and blessing in an undertaking or decision. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 201 مرّة عند طلب النفع والبركة في عمل أو قرار. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1941 | AI-draft | The One who illuminates the heavens, the earth, and the hearts of the guided. | الذي ينير السماوات والأرض وقلوب المهتدين. |
| 1942 | ✅ reviewed | Recite 256 times for clarity, guidance, and light in a time of confusion. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 256 مرّة طلبًا للوضوح والهداية والنور في وقت الحيرة. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1943 | AI-draft | The One who guides whom He wills to the straight path and true understanding. | الذي يهدي من يشاء إلى الصراط المستقيم والفهم الحقّ. |
| 1944 | ✅ reviewed | Recite 20 times when seeking direction and guidance at a crossroads in life. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 20 مرّة عند طلب الوجهة والهداية في مفترق الطرق. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1945 | AI-draft | The One who creates without any precedent or prior example to follow. | الذي يخلق بلا مثال سابق يُحتذى. |
| 1946 | ✅ reviewed | Recite 86 times when seeking creative insight or an unprecedented solution to a problem. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 86 مرّة عند طلب البصيرة المبدعة أو حلّ غير مسبوق لمشكلة. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1947 | AI-draft | The One whose existence continues forever, unaffected by the passing of time. | الذي يدوم وجوده أبدًا، لا يؤثّر فيه مرور الزمن. |
| 1948 | ✅ reviewed | Recite 113 times for perspective on what endures, beyond what is temporary and passing. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 113 مرّة للنظر فيما يدوم وراء المؤقّت الزائل. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1949 | AI-draft | The One who remains and inherits all things after every creation has perished. | الذي يبقى ويرث كل شيء بعد فناء الخلق. |
| 1950 | ✅ reviewed | Recite 707 times for detachment from what is temporary and trust in what truly remains. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 707 مرّة للتجرّد مما يزول والثقة بما يبقى حقًّا. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1951 | AI-draft | The One whose guidance leads infallibly to what is right, without any misdirection. | الذي يهدي إلى الرشد هداية لا خطأ فيها. |
| 1952 | ✅ reviewed | Recite 514 times when seeking sound judgment and the right decision in a complex matter. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 514 مرّة عند طلب الرأي السديد والقرار الصائب في أمر معقّد. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1953 | AI-draft | The One who withholds swift punishment with perfect patience, giving time for return. | الذي يمهل ولا يعجّل العقوبة بصبر تامّ، ليفسح للرجوع. |
| 1954 | ✅ reviewed | Recite 298 times for patience (ṣabr) in prolonged hardship or waiting. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُردَّد الاسم 298 مرّة للصبر في الشدّة الطويلة أو الانتظار. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| 1955 | AI-draft | O Most Subtle, Most Kind | يا لطيف |
| 1956 | AI-draft | Misk wa Ward | مسك وورد |
| 1957 | AI-draft | Musk + Rose | مسك + ورد |
| 1958 | AI-draft | For harmony and softened hearts | للانسجام وتليين القلوب |
| 1959 | AI-draft | Lubān wa Misk | لبان ومسك |
| 1960 | AI-draft | Al-Iklīl | الإكليل |
| 1961 | AI-draft | Honor is a trust worn lightly — crowns in the sky remind of responsibility, not entitlement. | الشرف أمانة تُحمل بخفّة — والتيجان في السماء تذكّر بالمسؤولية لا بالاستحقاق. |
| 1962 | AI-draft | Lunar Mansions (Manāzil) | المنازل القمرية |
| 1963 | AI-draft | The 28 lunar mansions: today’s manzil, Arabic names, spiritual focus, and links to birth profile and ikhtiyārāt. For reflection. | المنازل القمرية الثماني والعشرون: منزلة اليوم، والأسماء العربية، والمحور الروحي، وروابط ملف الميلاد والاختيارات. للتأمّل. |
| 1964 | AI-draft | Best Dates (Ikhtiyārāt) | أفضل التواريخ (الاختيارات) |
| 1965 | AI-draft | The days and planetary hours the ikhtiyārāt rules favour for a nikāḥ, Sunnah notes and the next favourable dates. | الأيام والساعات الكوكبية التي ترجّحها قواعد الاختيارات لعقد النكاح، مع ملاحظات من السنّة وأقرب التواريخ المناسبة. |
| 1966 | AI-draft | Thursday and early departure in the Sunnah, plus the favourable days and planetary hours for a journey. | الخميس والبكور في السنّة، مع الأيام والساعات الكوكبية المناسبة للسفر. |
| 1967 | AI-draft | The days and planetary hours the ikhtiyārāt rules favour for moving into a new home or laying a foundation. | الأيام والساعات الكوكبية التي ترجّحها قواعد الاختيارات للانتقال إلى منزل جديد أو وضع الأساس. |
| 1968 | AI-draft | The days and planetary hours the ikhtiyārāt rules favour for starting a business or signing a contract. | الأيام والساعات الكوكبية التي ترجّحها قواعد الاختيارات لبدء مشروع تجاري أو توقيع عقد. |
| 1969 | AI-draft | Sadaqah by day of the week, by Hijri birth month (Tamxarit, Gamo, Korité, Tabaski…) and by burj. | الصدقة بحسب يوم الأسبوع وشهر الميلاد الهجري (تمخاريت، غامو، كوريتي، تباسكي…) والبرج. |
| 1970 | AI-draft | Maghribi | المغربي |
| 1971 | AI-draft | Mashriqi | المشرقي |
| 1972 | AI-draft | Ikhtiyārāt | الاختيارات |
| 1973 | AI-draft | For reflection, not prediction. No timing replaces istikhāra, consultation (mashwara) with family and trusted scholars, and tawakkul (reliance on Allah); Allah alone knows the unseen. | للتأمّل لا للتنبّؤ. لا يغني أي توقيت عن الاستخارة ومشاورة الأهل وأهل العلم الثقات والتوكّل على الله؛ والله وحده يعلم الغيب. |
| 1974 | AI-draft | Planetary hours and the Moon depend on location. This page uses Makkah, the app's default location; the Best Dates tool computes for your own location. | تتوقّف الساعات الكوكبية والقمر على الموقع. تستعمل هذه الصفحة مكة المكرمة، الموقع الافتراضي للتطبيق؛ أما أداة أفضل التواريخ فتحسب لموقعك أنت. |
| 1975 | AI-draft | This tool reflects a refinement from the classical Islamic tradition of ʿIlm al-Nujūm (electional astrology). It is not a substitute for istikhāra, consultation (mashwara) with family and trusted scholars, and tawakkul (reliance on Allah). No date is religiously forbidden for nikāḥ — marriage is permitted at any time of the year. | تعكس هذه الأداة تهذيبًا من التراث الإسلامي الكلاسيكي في علم النجوم (علم الاختيارات). ولا تغني عن الاستخارة ومشاورة الأهل وأهل العلم الثقات والتوكّل على الله. ولا يوجد تاريخ محرّم شرعًا للنكاح — فالزواج جائز في أي وقت من السنة. |
| 1976 | AI-draft | How scoring works: each rule adds or subtracts points; the total is scaled to a 0–100 score against that election type's own maximum achievable points, so the tier bands (Mumtāz, Jayyid, Maqbūl, Ḍaʿīf, Ijtanib) mean the same thing across marriage, travel, and any future election type. | كيف يجري التقدير: كل قاعدة تضيف نقاطًا أو تنقص منها؛ ثم يُحوَّل المجموع إلى درجة من 0 إلى 100 نسبةً إلى أقصى ما يمكن بلوغه في نوع الاختيار نفسه، فتعني المراتب (ممتاز، جيد، مقبول، ضعيف، اجتنب) الشيء نفسه في الزواج والسفر وأي نوع اختيار لاحق. |
| 1977 | AI-draft | Stars (Ikhtiyārāt) | النجوم (الاختيارات) |
| 1978 | AI-draft | Rabi' al-Thani | ربيع الآخر |
| 1979 | ✅ reviewed | Conditions worsen later this day — Moon Applying to Saturn/Mars (Hard Aspect) after ~21:00. | يُعدّ ما بعد الساعة 21:00 تقليديًا وقتًا أثقل — القمر متّصل بزحل/المريخ (نظر نحس) |
| 1980 | AI-draft | The Moon is in its darkest phase right before a new moon — traditionally a time to wait, not begin. | القمر في أشدّ أطواره ظلمة قبيل المحاق — وهو تقليديًا وقت للانتظار لا للابتداء. |
| 1981 | AI-draft | Moon Combust (Muḥtaraq) | القمر محترق |
| 1982 | AI-draft | The Moon is too close to the Sun right now and appears "hidden" — this weakens its influence. | القمر قريب جدًا من الشمس الآن ويبدو «مختفيًا» — وهذا يضعف دلالته. |
| 1983 | AI-draft | The Moon isn't forming any meaningful connection with another planet right now — traditionally, things begun in this state tend to fizzle out. | القمر لا يتّصل الآن بأي كوكب اتصالًا معتبرًا (خالي السير) — وما يُبدأ في هذه الحال يميل تقليديًا إلى أن يتلاشى. |
| 1984 | AI-draft | The Moon is in a tense position with Saturn or Mars right now — a traditional warning sign for this kind of start. | القمر الآن في نظر متوتّر مع زحل أو المريخ — وهي علامة تحذير تقليدية لهذا النوع من الابتداء. |
| 1985 | AI-draft | A solar or lunar eclipse is happening within a day of this date — traditionally treated as an unsettled period to avoid for major beginnings. | كسوف أو خسوف يقع في غضون يوم من هذا التاريخ — ويُعدّ تقليديًا وقتًا مضطربًا تُجتنب فيه البدايات الكبرى. |
| 1986 | AI-draft | The Moon is close enough to the Sun to be dimmed, though not fully hidden — a mild weakening. | القمر قريب من الشمس بما يكفي ليخفت، وإن لم يختفِ تمامًا — ضعف خفيف. |
| 1987 | AI-draft | Via Combusta (Al-Ṭarīqa al-Muḥtariqa) | الطريقة المحترقة |
| 1988 | AI-draft | The Moon is passing through a stretch of the zodiac traditionally considered turbulent (the "burning path"). | القمر يمرّ بقطاع من البروج يُعدّ تقليديًا مضطربًا («الطريقة المحترقة»). |
| 1989 | AI-draft | Venus appears to be moving backward right now — traditionally a caution for matters of love and relationships. | الزهرة تبدو راجعة الآن — وهو تقليديًا تنبيه في أمور المحبّة والعلاقات. |
| 1990 | AI-draft | Venus is in a sign where it traditionally expresses its qualities less comfortably. | الزهرة في برج تُظهر فيه صفاتها تقليديًا بارتياح أقل. |
| 1991 | AI-draft | The Moon is in a sign that gives it a mild traditional boost here. | القمر في برج يمنحه هنا قوة تقليدية خفيفة. |
| 1992 | AI-draft | This specific time window aligns with a planetary hour traditionally seen as supportive. | هذه النافذة الزمنية توافق ساعة كوكبية تُعدّ تقليديًا داعمة. |
| 1993 | ✅ reviewed | Travel often suits hours of the Moon or Mercury when those planets are well placed; business and trade lean toward Mercury, Jupiter or Venus hours depending on the aim (contracts, growth, or harmony). Always read the hour together with the day ruler and the Moon's condition rather than in isolation. | يناسب السفر غالبًا ساعات القمر أو عطارد إذا حسن موضعهما؛ وتميل التجارة إلى ساعات عطارد أو المشتري أو الزهرة بحسب الغاية (العقود، النموّ، الانسجام). واقرأ الساعة دائمًا مع صاحب اليوم وحال القمر، لا منفردة. |
| 1994 | AI-draft | A name number cannot tell you whether a marriage will succeed. Ask about dīn and character, consult both families, pray ṣalāt al-istikhāra and put your trust in Allah. Use this tool for reflection and conversation, not as a verdict; Allah alone knows the unseen. | لا يستطيع عدد الاسم أن يخبرك بنجاح الزواج. اسأل عن الدين والخُلق، واستشر الأسرتين، وصلِّ صلاة الاستخارة، وتوكّل على الله. واستعمل هذه الأداة للتأمّل والحديث، لا حكمًا؛ والله وحده يعلم الغيب. |
| 1995 | AI-draft | The two totals are added together with 7 and divided by 9; the remainder (1–9, with 0 counted as 9) is the soul-connection number. | يُجمع المجموعان مع 7 ويُقسم الناتج على 9؛ والباقي (1–9، والصفر يُعدّ 9) هو عدد صلة الأرواح. |
| 1996 | AI-draft | Treat it as cultural reflection, not prediction. Choosing a spouse rests on dīn, character, family counsel and ṣalāt al-istikhāra. No number decides a marriage; Allah alone knows the unseen. | اجعله تأمّلًا ثقافيًا لا تنبّؤًا. فاختيار الزوج قائم على الدين والخُلق ومشورة الأهل وصلاة الاستخارة. ولا يحسم عددٌ زواجًا؛ والله وحده يعلم الغيب. |
| 1997 | ✅ reviewed | Asrār divides the ecliptic into twenty-eight equal tropical sectors (~12°51′ each) from the Moon’s longitude — a clear computational convention for education and reflection. Classical star-tied (sidereal) bounds differ; we document the equal tropical method so the live card stays consistent with our planetary ephemeris. | يقسم تطبيق أسرار فلك البروج إلى ثمانية وعشرين قطاعًا مداريًا متساويًا (نحو 12°51′ لكل منها) بحسب طول القمر — اصطلاحٌ حسابي واضح للتعليم والتأمّل. وتختلف الحدود الكلاسيكية المرتبطة بالنجوم (النجمية)؛ ونوثّق الطريقة الاستوائية المتساوية لتبقى البطاقة الحيّة متّسقة مع تقويمنا الكوكبي. |
| 1998 | AI-draft | Browse all 28 manāzil | تصفّح المنازل الثماني والعشرين |
| 1999 | AI-draft | Al-Sharaṭān | الشرطين |
| 2000 | AI-draft | The Two Signs | العلامتان |
| 2001 | AI-draft | Starting fresh with courage and trust in Allah | بداية جديدة بشجاعة وتوكّل على الله |
| 2002 | AI-draft | Al-Buṭayn | البطين |
| 2003 | AI-draft | The Little Belly | البطن الصغير |
| 2004 | AI-draft | Cultivating inner strength and spiritual nourishment | تنمية القوة الباطنة والغذاء الروحي |
| 2005 | AI-draft | Al-Thurayyā | الثريا |
| 2006 | AI-draft | The Pleiades | الثريا |
| 2007 | AI-draft | Appreciating divine beauty in creation and community | تذوّق جمال صنع الله في الخلق والجماعة |
| 2008 | AI-draft | Al-Dabarān | الدبران |
| 2009 | AI-draft | The Follower | التابع |
| 2010 | AI-draft | Following the prophetic example with steadfastness | اتّباع الهدي النبوي بثبات |
| 2011 | AI-draft | Al-Haqʿah | الهقعة |
| 2012 | AI-draft | The White Spot | البقعة البيضاء |
| 2013 | AI-draft | Al-Hanʿah | الهنعة |
| 2014 | AI-draft | Recognizing one's unique spiritual purpose and calling | إدراك الغاية الروحية الخاصة والنداء الخاص |
| 2015 | AI-draft | Al-Dhirāʿ | الذراع |
| 2016 | AI-draft | The Forearm | الذراع |
| 2017 | AI-draft | Extending help to others and reaching for higher wisdom | مدّ يد العون للآخرين والتطلّع إلى حكمة أعلى |
| 2018 | AI-draft | Al-Nathrah | النثرة |
| 2019 | AI-draft | The Gap | الفُرجة |
| 2020 | AI-draft | Contemplating the mysteries of faith and divine wisdom | التأمّل في أسرار الإيمان والحكمة الإلهية |
| 2021 | AI-draft | Al-Ṭarf | الطرف |
| 2022 | AI-draft | The Glance | النظرة |
| 2023 | AI-draft | Looking with care: notice what you see before you act, and ask Allah for insight without haste. | انظر بعناية: تأمّل ما تراه قبل أن تعمل، واسأل الله البصيرة دون عجلة. |
| 2024 | AI-draft | Al-Jabhah | الجبهة |
| 2025 | AI-draft | The Forehead | الجبهة |
| 2026 | AI-draft | Carry dignity with humility — leadership here means service and clear intention before Allah. | احمل الكرامة بتواضع — فالقيادة هنا خدمة ونيّة واضحة بين يدي الله. |
| 2027 | AI-draft | Al-Zubrah | الزبرة |
| 2028 | AI-draft | The Mane | العُرف |
| 2029 | AI-draft | Al-Ṣarfah | الصرفة |
| 2030 | AI-draft | The Changer | المنصرف |
| 2031 | AI-draft | Seasons turn: release what no longer serves, and turn toward what Allah has made clearer. | تدور الفصول: تخلَّ عمّا لم يعد نافعًا، وتوجّه إلى ما جعله الله أوضح. |
| 2032 | AI-draft | Al-ʿAwwāʾ | العوّاء |
| 2033 | AI-draft | The Barker | العوّاء |
| 2034 | AI-draft | Al-Simāk | السماك |
| 2035 | AI-draft | Al-Simāk al-Aʿzal (“the unarmed”) invites fair measure — harvest with gratitude, without grasping. | السماك الأعزل يدعو إلى الوفاء بالكيل — احصد بشكر دون تشبّث. |
| 2036 | AI-draft | Al-Ghafr | الغفر |
| 2037 | AI-draft | The Covering | الغطاء |
| 2038 | AI-draft | Al-Zubānā | الزبانى |
| 2039 | AI-draft | The Claws | المخلبان |
| 2040 | AI-draft | Set boundaries with justice: cut what harms, without cruelty. | ضع الحدود بالعدل: اقطع ما يضرّ، دون قسوة. |
| 2041 | AI-draft | Al-Qalb | القلب |
| 2042 | AI-draft | Return to the heart: sincerity (ikhlāṣ) before intensity — courage without crushing others. | عُد إلى القلب: الإخلاص قبل الشدّة — شجاعة دون سحق الآخرين. |
| 2043 | AI-draft | Al-Shawlah | الشولة |
| 2044 | AI-draft | The sting is for defense, not attack — restrain the tongue and hand unless justice requires otherwise. | الحُمة للدفاع لا للهجوم — أمسك لسانك ويدك إلا أن يقتضي العدل غير ذلك. |
| 2045 | AI-draft | The Ostriches | النعائم |
| 2046 | AI-draft | Wide spaces invite travel of body and heart — move with tawakkul and good company. | الفسحة تدعو إلى سفر البدن والقلب — سِر بتوكّل وصحبة صالحة. |
| 2047 | AI-draft | Al-Baldah | البلدة |
| 2048 | AI-draft | The Fortunate Sacrificer | سعد الذابح |
| 2049 | AI-draft | Named among the saʿd stations: reflect on what you are willing to offer — wealth, time, ego — for Allah’s sake. (Educational theme only; not a ritual prescription.) | من منازل السعود: تأمّل ما أنت مستعدّ لبذله — المال والوقت والأنا — لوجه الله. (موضوع تعليمي فقط؛ لا وصفة شعائرية.) |
| 2050 | AI-draft | Saʿd Bulaʿ | سعد بلع |
| 2051 | AI-draft | The Fortunate Swallower | سعد بلع |
| 2052 | AI-draft | Absorb lessons slowly: take in knowledge and counsel, then digest before speaking. | استوعب الدروس على مهل: خذ العلم والنصح، ثم تدبّرهما قبل الكلام. |
| 2053 | AI-draft | The Most Fortunate | سعد السعود |
| 2054 | AI-draft | Named “most fortunate” in the star calendar — meet ease with shukr, and hardship with hope in Allah alone. | سُمّي «سعد السعود» في تقويم النجوم — فاستقبل اليسر بالشكر، والعسر بالرجاء في الله وحده. |
| 2055 | AI-draft | Saʿd al-Akhbiyah | سعد الأخبية |
| 2056 | AI-draft | The Fortunate Tents | سعد الأخبية |
| 2057 | AI-draft | Al-Fargh al-Muqaddam | الفرغ المقدّم |
| 2058 | AI-draft | The Former Spout | الفرغ المقدّم |
| 2059 | AI-draft | The former spout of the bucket: begin letting good flow — speech, charity, and help — with measured opening. | الفرغ المقدّم من الدلو: ابدأ بإجراء الخير — الكلام والصدقة والعون — بانفتاح موزون. |
| 2060 | AI-draft | Al-Fargh al-Muʾakhkhar | الفرغ المؤخّر |
| 2061 | AI-draft | The Latter Spout | الفرغ المؤخّر |
| 2062 | AI-draft | The latter spout completes the pouring — finish what you opened, and empty the heart of grudges. | الفرغ المؤخّر يُتمّ الإفراغ — أتمّ ما فتحت، وأفرغ القلب من الضغائن. |
| 2063 | AI-draft | Belly of the Fish | بطن الحوت |
| 2064 | AI-draft | Date of birth or date of giving | تاريخ الميلاد أو تاريخ العطاء |
| 2065 | AI-draft | Enter either your date of birth or the day you plan to give sadaqah — its day of the week determines the guidance. | أدخل تاريخ ميلادك أو اليوم الذي تنوي التصدّق فيه — ويوم الأسبوع الذي يوافقه هو الذي يحدّد الإرشاد. |
| 2066 | AI-draft | Calculate | احسب |
| 2067 | AI-draft | Cautious | حذر |
| 2068 | AI-draft | Venus is weakened in Scorpio | الزهرة ضعيفة في برج العقرب |
| 2069 | AI-draft | The Crown | الإكليل |
| 2070 | AI-draft | Focus | المحور |
| 2071 | AI-draft | Traditional stations for reflection and timing adab — not prediction. Allah alone knows the unseen. | منازل تقليدية للتأمّل وأدب التوقيت — لا للتنبّؤ. والله وحده يعلم الغيب. |
| 2072 | AI-draft | Guide to all 28 manāzil → | دليل المنازل الثماني والعشرين ← |
| 2073 | AI-draft | ▶ Activities & wisdom (educational) | ▶ الأنشطة والحكمة (تعليمي) |
| 2074 | AI-draft | Manzil of today / tonight | منزلة اليوم / الليلة |
| 2075 | AI-draft | Manāzil al-qamar · 28 stations | منازل القمر · 28 منزلة |
| 2076 | AI-draft | · New Moon | · محاق |
| 2077 | AI-draft | Gather children and give them food as sadaqah; Help anyone who is poor or in need | اجمع الأطفال وأطعمهم صدقةً؛ أعِن كل فقير أو محتاج |
| 2078 | AI-draft | Give water as sadaqah; Help an elderly person, a woman, or children; Give food or sadaqah to children in the evening | تصدّق بالماء؛ أعِن مسنًّا أو امرأة أو أطفالًا؛ أعطِ الأطفال طعامًا أو صدقة في المساء |
| 2079 | AI-draft | Giving food to children; Helping a person who is experiencing difficulties; Helping someone purchase their medication; Contributing toward someone's medical or medication expenses | إطعام الأطفال؛ إعانة من يمرّ بضائقة؛ مساعدة أحدهم في شراء دوائه؛ الإسهام في نفقات علاج أحدهم أو دوائه |
| 2080 | AI-draft | Give white paper and pens; Provide food to children | أعطِ ورقًا أبيض وأقلامًا؛ أطعم الأطفال |
| 2081 | AI-draft | Giving food to people in need; Giving money as sadaqah; Supporting a mosque; Helping to clean a mosque; Performing voluntary service in the mosque | إطعام المحتاجين؛ التصدّق بالمال؛ دعم مسجد؛ المساعدة في تنظيف مسجد؛ التطوّع بالخدمة في المسجد |
| 2082 | AI-draft | Clothes; Soap; Perfume | ثياب؛ صابون؛ طيب |
| 2083 | AI-draft | Giving essential food items such as rice, oil, and other necessities; Helping an elderly person with their needs; Providing financial assistance to someone in difficulty | إعطاء المواد الغذائية الأساسية كالأرز والزيت وسائر الضروريات؛ إعانة مسنّ في حاجاته؛ تقديم عون مالي لمن هو في ضيق |
| 2084 | AI-draft | Enter your Gregorian date of birth to find the Hijri (Islamic) month you were born in. Wolof names are shown where they are commonly used (Tamxarit, Gamo, Korité, Tabaski…). | أدخل تاريخ ميلادك الميلادي لتعرف الشهر الهجري الذي وُلدت فيه. وتُعرض الأسماء الولوفية حيث يشيع استعمالها (تمخاريت، غامو، كوريتي، تباسكي…). |
| 2085 | AI-draft | Muharram (Tamxarit) | محرّم (تمخاريت) |
| 2086 | AI-draft | For anyone born in Muharram (Tamxarit), their sadaqah can include: | لمن وُلد في محرّم (تمخاريت)، يمكن أن تشمل صدقته: |
| 2087 | AI-draft | Feeding someone who is fasting. | إطعام صائم. |
| 2088 | AI-draft | Helping an orphan or orphans. | إعانة يتيم أو أيتام. |
| 2089 | AI-draft | Giving other forms of charity according to their ability. | أنواع أخرى من الصدقة بحسب استطاعته. |
| 2090 | AI-draft | For anyone born in Safar, their sadaqah can include: | لمن وُلد في صفر، يمكن أن تشمل صدقته: |
| 2091 | AI-draft | Giving rice. | التصدّق بالأرز. |
| 2092 | AI-draft | Giving flour. | التصدّق بالدقيق. |
| 2093 | AI-draft | Giving cooking oil. | التصدّق بزيت الطبخ. |
| 2094 | AI-draft | Giving clothes. | التصدّق بالثياب. |
| 2095 | AI-draft | Helping sick people, financially or with whatever they need. | إعانة المرضى بالمال أو بما يحتاجون إليه. |
| 2096 | AI-draft | Rabi al-Awwal (Gamo) | ربيع الأول (غامو) |
| 2097 | AI-draft | For anyone born in Rabi al-Awwal (Gamo), their sadaqah can include: | لمن وُلد في ربيع الأول (غامو)، يمكن أن تشمل صدقته: |
| 2098 | AI-draft | Giving sadaqah to children. | التصدّق على الأطفال. |
| 2099 | AI-draft | Helping and supporting the mosque. | إعانة المسجد ودعمه. |
| 2100 | AI-draft | Rabi al-Thani (Rabi al-Akhir) | ربيع الآخر (ربيع الثاني) |
| 2101 | AI-draft | For anyone born in Rabi al-Thani (Rabi al-Akhir), their sadaqah can include: | لمن وُلد في ربيع الآخر (ربيع الثاني)، يمكن أن تشمل صدقته: |
| 2102 | AI-draft | Giving soap. | التصدّق بالصابون. |
| 2103 | AI-draft | Helping with necessities that can support a person or family. | الإعانة بالضروريات التي تسند شخصًا أو أسرة. |
| 2104 | AI-draft | Jumada al-Awwal | جمادى الأولى |
| 2105 | AI-draft | For anyone born in Jumada al-Awwal, their sadaqah can include: | لمن وُلد في جمادى الأولى، يمكن أن تشمل صدقته: |
| 2106 | AI-draft | Giving hot, nourishing food. | التصدّق بطعام ساخن مغذٍّ. |
| 2107 | AI-draft | Supporting hardworking people who are facing difficult circumstances. | إعانة الكادحين الذين يمرّون بظروف صعبة. |
| 2108 | AI-draft | Jumada al-Akhirah (Jumada al-Thani) | جمادى الآخرة (جمادى الثانية) |
| 2109 | AI-draft | For anyone born in Jumada al-Akhirah, their sadaqah is especially good when it is given discreetly and privately. | لمن وُلد في جمادى الآخرة، تحسن صدقته خاصةً إذا أُعطيت خفيةً وسرًّا. |
| 2110 | AI-draft | Give food, money, or useful assistance. | أعطِ طعامًا أو مالًا أو عونًا نافعًا. |
| 2111 | AI-draft | Rajab | رجب |
| 2112 | AI-draft | For anyone born in Rajab, their sadaqah can focus on supporting people who learn and teach the Qur'an: | لمن وُلد في رجب، يمكن أن تتّجه صدقته إلى دعم من يتعلّمون القرآن ويعلّمونه: |
| 2113 | AI-draft | Giving a complete Qur'an (Kamil) to a mosque or place of Qur'anic learning. | إهداء مصحف كامل إلى مسجد أو مكان لتعليم القرآن. |
| 2114 | AI-draft | Providing Qur'ans for people to read and use. | توفير المصاحف للناس ليقرؤوا فيها. |
| 2115 | AI-draft | Donating Qur'ans to daaras. | التبرّع بالمصاحف للكتاتيب (الدارات). |
| 2116 | AI-draft | Helping mosques and places of Qur'anic learning. | إعانة المساجد وأماكن تعليم القرآن. |
| 2117 | AI-draft | Supporting Qur'anic students and those who use these places. | دعم طلاب القرآن ومرتادي هذه الأماكن. |
| 2118 | AI-draft | Sha'ban | شعبان |
| 2119 | AI-draft | For anyone born in Sha'ban, their sadaqah can include: | لمن وُلد في شعبان، يمكن أن تشمل صدقته: |
| 2120 | AI-draft | Sharing the meals prepared in their own home with a family in need. | مشاركة الطعام المطبوخ في بيته مع أسرة محتاجة. |
| 2121 | AI-draft | Giving food and other necessities to people who are struggling. | إعطاء الطعام وسائر الضروريات لمن يعانون. |
| 2122 | AI-draft | Ramadan (Werruk Korr) | رمضان (ورّوك كور) |
| 2123 | AI-draft | For anyone born in Ramadan (Werruk Korr), their sadaqah can include: | لمن وُلد في رمضان (ورّوك كور)، يمكن أن تشمل صدقته: |
| 2124 | AI-draft | Giving iftar to someone who is fasting. | تفطير صائم. |
| 2125 | AI-draft | Not being reluctant or hesitant to give their zakat when it is due. | ألّا يتردّد أو يتباطأ في إخراج زكاته إذا وجبت. |
| 2126 | AI-draft | Helping poor families and needy people with food, money, or necessities. | إعانة الأسر الفقيرة والمحتاجين بالطعام أو المال أو الضروريات. |
| 2127 | AI-draft | Giving this support at night, particularly to those who are in need. | تقديم هذا العون ليلًا، لا سيما لمن هم في حاجة. |
| 2128 | AI-draft | Shawwal (Korité) | شوال (كوريتي) |
| 2129 | AI-draft | For anyone born in Shawwal (Korité), their sadaqah can include: | لمن وُلد في شوال (كوريتي)، يمكن أن تشمل صدقته: |
| 2130 | AI-draft | Giving brand-new clothes to someone in need. | إعطاء ثياب جديدة لمحتاج. |
| 2131 | AI-draft | Dhu al-Qi'dah (Diggi Kor) | ذو القعدة (ديغي كور) |
| 2132 | AI-draft | For anyone born in Dhu al-Qi'dah (Diggi Kor), their sadaqah can include: | لمن وُلد في ذي القعدة (ديغي كور)، يمكن أن تشمل صدقته: |
| 2133 | AI-draft | Helping a traveller, financially or in any other way that can make their journey easier. | إعانة مسافر بالمال أو بأي طريقة تيسّر سفره. |
| 2134 | AI-draft | Giving food to poor and needy people. | إطعام الفقراء والمحتاجين. |
| 2135 | AI-draft | Giving hot, nourishing food as sadaqah to those in need. | التصدّق بطعام ساخن مغذٍّ على المحتاجين. |
| 2136 | AI-draft | Offering practical assistance to people experiencing hardship. | تقديم عون عملي لمن يمرّون بشدّة. |
| 2137 | AI-draft | Dhu al-Hijjah (Tabaski) | ذو الحجة (تباسكي) |
| 2138 | AI-draft | For anyone born in Dhu al-Hijjah (Tabaski), their sadaqah can include: | لمن وُلد في ذي الحجة (تباسكي)، يمكن أن تشمل صدقته: |
| 2139 | AI-draft | Giving meat as sadaqah, especially to poor and needy people. | التصدّق باللحم، لا سيما على الفقراء والمحتاجين. |
| 2140 | AI-draft | Helping pilgrims who have travelled to Makkah for Hajj, financially or in any other useful way. | إعانة الحجّاج المسافرين إلى مكة بالمال أو بأي طريقة نافعة. |
| 2141 | AI-draft | Visiting and welcoming a pilgrim when they return from Makkah, through ziyar. | زيارة الحاجّ والترحيب به عند عودته من مكة. |
| 2142 | AI-draft | Ḥamal | الحمل |
| 2143 | AI-draft | Livestock Sadaqah | صدقة الماشية |
| 2144 | AI-draft | Worn Clothing Sadaqah | صدقة الثياب الملبوسة |
| 2145 | AI-draft | al-Thawr | الثور |
| 2146 | AI-draft | One-Coloured Ram Sadaqah | صدقة كبش ذي لون واحد |
| 2147 | AI-draft | Used Clothing Sadaqah — Protection | صدقة الثياب المستعملة — للحفظ |
| 2148 | AI-draft | Grains and Agricultural Produce | الحبوب والمحاصيل الزراعية |
| 2149 | AI-draft | Rice, Millet and Cooking Oil | الأرز والدخن وزيت الطبخ |
| 2150 | AI-draft | Water Sadaqah | صدقة الماء |
| 2151 | AI-draft | Supporting an Elderly Person — Provision | إعانة مسنّ — للرزق |
| 2152 | AI-draft | Jawzāʾ | الجوزاء |
| 2153 | AI-draft | Kola Nut Sadaqah | صدقة جوز الكولا |
| 2154 | AI-draft | Money Sadaqah — Preservation of Wealth | صدقة المال — لحفظ المال |
| 2155 | AI-draft | Three-Coloured Chicken Sadaqah | صدقة دجاجة ثلاثية الألوان |
| 2156 | AI-draft | Guinea Fowl (Pintade) Sadaqah | صدقة دجاجة غينيا |
| 2157 | AI-draft | Educational Materials Sadaqah | صدقة الأدوات التعليمية |
| 2158 | AI-draft | Supporting Teachers and Qur'anic Teachers | دعم المعلّمين ومعلّمي القرآن |
| 2159 | AI-draft | Feeding Children | إطعام الأطفال |
| 2160 | AI-draft | Saraṭān | السرطان |
| 2161 | AI-draft | Salt Sadaqah | صدقة الملح |
| 2162 | AI-draft | Four Kilograms of Meat | أربعة كيلوغرامات من اللحم |
| 2163 | AI-draft | Supporting an Elderly Woman | إعانة امرأة مسنّة |
| 2164 | AI-draft | Giving Milk to Children | إعطاء الحليب للأطفال |
| 2165 | AI-draft | al-Asad | الأسد |
| 2166 | AI-draft | Raising and Giving a Ram | تربية كبش والتصدّق به |
| 2167 | AI-draft | Three Bowls of Cheb Yap | ثلاث قصعات من «شب ياپ» |
| 2168 | AI-draft | Three Bowls of Porridge with Yogurt | ثلاث قصعات من العصيدة باللبن |
| 2169 | AI-draft | al-Sunbula | السنبلة |
| 2170 | AI-draft | One Hundred Kola Nuts | مئة حبّة من جوز الكولا |
| 2171 | AI-draft | Money Sadaqah | صدقة المال |
| 2172 | AI-draft | Three Cereals Sadaqah | صدقة الحبوب الثلاثة |
| 2173 | AI-draft | Secret Sadaqah of Virgo — Age 40 | صدقة السنبلة السرّية — في سنّ الأربعين |
| 2174 | AI-draft | Seven Yogurts Sadaqah | صدقة سبعة أكواب من اللبن |
| 2175 | AI-draft | Guinea Fowl Sadaqah | صدقة دجاجة غينيا |
| 2176 | AI-draft | al-ʿAqrab | العقرب |
| 2177 | AI-draft | Protective Ring Sadaqah | صدقة خاتم الحفظ |
| 2178 | AI-draft | White Ram or Sheep Sadaqah | صدقة كبش أو خروف أبيض |
| 2179 | AI-draft | Red Goat Sadaqah During a Favourable Mars Transit | صدقة ماعز أحمر عند عبور مناسب للمريخ |
| 2180 | AI-draft | Water Sadaqah — For Patients | صدقة الماء — للمرضى |
| 2181 | AI-draft | Rice and Fish Sadaqah | صدقة الأرز والسمك |
| 2182 | AI-draft | al-Qaws | القوس |
| 2183 | AI-draft | Nine Pieces of Bread | تسع قطع من الخبز |
| 2184 | AI-draft | Three Bowls of Laakh | ثلاث قصعات من «لاخ» |
| 2185 | AI-draft | One-Coloured White Ram | كبش أبيض ذو لون واحد |
| 2186 | AI-draft | Open Sadaqah | صدقة مفتوحة |
| 2187 | AI-draft | al-Jady | الجدي |
| 2188 | AI-draft | Rice and Millet Sadaqah | صدقة الأرز والدخن |
| 2189 | AI-draft | Kafan — Burial Shroud Sadaqah | صدقة الكفن |
| 2190 | AI-draft | Cowries — Petaw Sadaqah | صدقة الودع (پيتاو) |
| 2191 | AI-draft | al-Dalw | الدلو |
| 2192 | AI-draft | Guinea Fowl or Chicken Sadaqah | صدقة دجاجة غينيا أو دجاجة |
| 2193 | AI-draft | Fish Sadaqah | صدقة السمك |
| 2194 | AI-draft | Seven-Chicken Food Sadaqah | صدقة طعام سبع دجاجات |
| 2195 | AI-draft | Evening Food Sadaqah | صدقة طعام المساء |
| 2196 | AI-draft | Supporting Someone Involved in Spiritual Work | إعانة من يشتغل بالعمل الروحي |
| 2197 | AI-draft | Any of them, or none. They are complementary customs, not obligations. Sadaqah given sincerely on any day is good; these suggestions simply help you choose a form and a moment. | أيٌّ منها أو لا شيء. فهي عادات مكمّلة لا واجبات. والصدقة الخالصة في أي يوم خير؛ وهذه الاقتراحات تعينك فقط على اختيار صورة ووقت. |
| 2198 | AI-draft | Mother's name is required for Personal reading. Switch to General mode or add your mother's name. | اسم الأم مطلوب للقراءة الشخصية. انتقل إلى الوضع العام أو أضف اسم أمك. |
| 2199 | AI-draft | Fatima, Aisha, Khadija, etc. | فاطمة، عائشة، خديجة، إلخ. |
| 2200 | AI-draft | Unable to load verse at this moment. Please refresh or visit Quran.com directly. | تعذّر تحميل الآية الآن. يُرجى التحديث أو زيارة Quran.com مباشرة. |
| 2201 | AI-draft | (Name letter composition - informational only) | (تركيب حروف الاسم - للمعلومة فقط) |
| 2202 | AI-draft | The Soul Triad | الثالوث الروحي |
| 2203 | AI-draft | Soul Triad - Three Aspects of Self | الثالوث الروحي - ثلاثة أوجه للذات |
| 2204 | AI-draft | Your spiritual identity revealed through three sacred dimensions: Expression, Desire, and Persona | هويتك الروحية في ثلاثة أبعاد: التعبير، والرغبة، والصورة الظاهرة |
| 2205 | AI-draft | The Soul Triad represents three fundamental aspects of your being: who you truly are (Expression), what you deeply desire (Desire), and how you appear to others (Persona). Together, these three numbers create the complete picture of your spiritual identity. | يمثّل الثالوث الروحي ثلاثة أوجه أساسية لكيانك: من أنت حقًّا (التعبير)، وما ترغب فيه بعمق (الرغبة)، وكيف تبدو للآخرين (الصورة الظاهرة). ومعًا ترسم هذه الأعداد الثلاثة صورة كاملة لهويتك الروحية. |
| 2206 | AI-draft | Who you truly are - your authentic nature and natural talents | من أنت حقًّا - طبيعتك الأصيلة ومواهبك الفطرية |
| 2207 | AI-draft | Innate talents | المواهب الفطرية |
| 2208 | AI-draft | Natural abilities | القدرات الطبيعية |
| 2209 | AI-draft | What you deeply desire - your inner motivations and aspirations | ما ترغب فيه بعمق - دوافعك وتطلّعاتك الباطنة |
| 2210 | AI-draft | Deep motivations | الدوافع العميقة |
| 2211 | AI-draft | Spiritual needs | الحاجات الروحية |
| 2212 | AI-draft | Your Persona | صورتك الظاهرة |
| 2213 | AI-draft | Public mask | القناع العام |
| 2214 | AI-draft | The Triad Connection | صلة الثالوث |
| 2215 | AI-draft | Desire | الرغبة |
| 2216 | AI-draft | Persona | الصورة الظاهرة |
| 2217 | AI-draft | Triad Integration | تكامل الثالوث |
| 2218 | AI-draft | ) reveals who you naturally are. Your Desire ( | ) يكشف من أنت بطبعك. ورغبتك ( |
| 2219 | AI-draft | Harmony is found when these three aspects work together: when who you are, what you desire, and how you appear are aligned. | يتحقّق الانسجام حين تعمل هذه الأوجه الثلاثة معًا: حين يتوافق من أنت وما ترغب فيه وكيف تبدو. |
| 2220 | AI-draft | Balance Expression | وازِن التعبير |
| 2221 | AI-draft | Honor your natural talents. Live authentically according to your true nature. | أكرِم مواهبك الفطرية، وعِش بصدق وفق طبيعتك الحقّة. |
| 2222 | AI-draft | Balance Desire | وازِن الرغبة |
| 2223 | AI-draft | Listen to your heart. Pursue what truly nourishes your soul. | أصغِ إلى قلبك، واطلب ما يغذّي روحك حقًّا. |
| 2224 | AI-draft | Balance Persona | وازِن الصورة الظاهرة |
| 2225 | AI-draft | Be aware of your impact. Align your outer image with your inner truth. | كن واعيًا بأثرك، ووافِق صورتك الظاهرة مع حقيقتك الباطنة. |
| 2226 | AI-draft | Loading Qur'anic verse... | جارٍ تحميل الآية... |
| 2227 | AI-draft | The verse reference is valid (Surah | مرجع الآية صحيح (سورة |
| 2228 | AI-draft | Read Full Verse on Quran.com | اقرأ الآية كاملة على Quran.com |
| 2229 | AI-draft | The shapes and forms within your name | الأشكال والهيئات في اسمك |
| 2230 | AI-draft | Dominant | غالب |
| 2231 | AI-draft | Learn more about the Science of Letters | تعرّف على علم الحروف أكثر |
| 2232 | AI-draft | Method Guide | دليل الطريقة |
| 2233 | AI-draft | Ÿ Exceptional Compatibility | توافق استثنائي |
| 2234 | AI-draft | Outstanding compatibility on both surface and soul levels. Your energies complement each other beautifully. This relationship has extraordinary potential for mutual growth and happiness. | توافق بارز على المستويين الظاهر والروحي. تتكامل طاقتاكما تكاملًا جميلًا، ولهذه العلاقة إمكانات عظيمة للنموّ والسعادة المشتركين. |
| 2235 | AI-draft | • Communication flows naturally | • التواصل ينساب طبيعيًا |
| 2236 | AI-draft | • Challenges are manageable together | • التحدّيات يمكن تجاوزها معًا |
| 2237 | AI-draft | • Focus on continuous growth | • ركّزا على النموّ المستمرّ |
| 2238 | AI-draft | ’« Very Good Compatibility | توافق جيد جدًا |
| 2239 | AI-draft | Strong compatibility with minor areas to nurture. This connection has great potential with mutual effort. Your strengths far outweigh your challenges. | توافق قوي مع جوانب قليلة تحتاج إلى رعاية. لهذه الصلة إمكانات كبيرة بالجهد المشترك، ومواطن قوتكما تفوق تحدّياتكما بكثير. |
| 2240 | AI-draft | • Some areas need conscious attention | • بعض الجوانب تحتاج إلى انتباه واعٍ |
| 2241 | AI-draft | • Communication and compromise are key | • التواصل والتنازل هما المفتاح |
| 2242 | AI-draft | • Nurture what you've built together | • ارعيا ما بنيتماه معًا |
| 2243 | AI-draft | Moderate compatibility. You can build a harmonious relationship with understanding, communication, and compromise. Your differences are workable€”not deal-breakers€”but require conscious effort. | توافق معتدل. يمكنكما بناء علاقة منسجمة بالتفاهم والتواصل والتنازل. واختلافاتكما قابلة للعمل — ليست قاطعة — لكنها تتطلّب جهدًا واعيًا. |
| 2244 | AI-draft | • Daily life may have friction • But your emotional foundation is strong • Focus on nurturing the deep bond you share | • قد يكون في الحياة اليومية احتكاك • لكن أساسكما العاطفي قوي • ركّزا على رعاية الرابطة العميقة بينكما |
| 2245 | AI-draft | • Both partners need to be committed • Differences enrich when honored • Patience and understanding are essential | • يلزم التزام الطرفين • الاختلافات تُثري حين تُحترم • الصبر والتفاهم أساسيان |
| 2246 | AI-draft | š ï¸ Challenging Compatibility | توافق صعب |
| 2247 | AI-draft | Significant differences in energy and approach. This relationship requires substantial effort, patience, and mutual growth. Possible, but both partners must be fully committed. | اختلافات كبيرة في الطاقة والنهج. تتطلّب هذه العلاقة جهدًا وصبرًا ونموًّا مشتركًا كبيرًا. ممكنة، لكن على الطرفين التزامًا تامًّا. |
| 2248 | AI-draft | • Requires conscious daily work | • تتطلّب عملًا يوميًا واعيًا |
| 2249 | AI-draft | • Both must want to grow together | • على كليهما أن يريد النموّ معًا |
| 2250 | AI-draft | • Celebrate small victories | • احتفيا بالانتصارات الصغيرة |
| 2251 | AI-draft | Serious Consideration: | اعتبار جادّ: |
| 2252 | AI-draft | • Set realistic expectations | • ضعا توقّعات واقعية |
| 2253 | AI-draft | • Honor your individual needs too | • أكرِما حاجاتكما الفردية أيضًا |
| 2254 | AI-draft | Scroll left | مرّر يسارًا |
| 2255 | AI-draft | Scroll right | مرّر يمينًا |
| 2256 | AI-draft | Relationship Compatibility Analysis | تحليل توافق العلاقة |
| 2257 | AI-draft | How We Analyze Your Compatibility | كيف نحلّل توافقكما |
| 2258 | AI-draft | We examine your relationship through four different dimensions to give you the complete picture. | ننظر في علاقتكما من أربعة أبعاد لنعطيكما الصورة كاملة. |
| 2259 | AI-draft | Your spiritual alignment | انسجامكما الروحي |
| 2260 | ✅ reviewed | Your elemental natures | طبيعة عنصر كلٍّ منكما |
| 2261 | AI-draft | Your planetary influences | صلاتكما الكوكبية |
| 2262 | AI-draft | Your day-to-day dynamics | ديناميكيتكما اليومية |
| 2263 | AI-draft | Your Personality Balance | توازن شخصيتكما |
| 2264 | AI-draft | (Letter Chemistry • | (كيمياء الحروف • |
| 2265 | AI-draft | Each name holds energies (Fire, Air, Water, Earth). We analyze how these energies complement each other between you two. | لكل اسم طاقات (نار، هواء، ماء، تراب). ونحلّل كيف تتكامل هذه الطاقات بينكما. |
| 2266 | AI-draft | Personalized spiritual practices to strengthen your relationship harmony and balance your energies. | ممارسات روحية شخصية لتقوية انسجام علاقتكما وموازنة طاقتيكما. |
| 2267 | AI-draft | Orange | برتقالي |
| 2268 | AI-draft | Turquoise | فيروزي |
| 2269 | AI-draft | Calm, depth, intuition, and emotional wisdom | السكينة والعمق والحدس والحكمة العاطفية |
| 2270 | AI-draft | Lavender | خزامي |
| 2271 | AI-draft | Clarity, communication, intellect, and freedom | الوضوح والتواصل والعقل والحرية |
| 2272 | AI-draft | tones for clothing, journaling, or meditation to enhance your natural | ألوانًا للملبس أو التدوين أو التأمّل لتعزيز طاقتك الطبيعية من |
| 2273 | AI-draft | energy. Add | . أضف |
| 2274 | AI-draft | Cold | بارد |
| 2275 | AI-draft | Initiative & Courage | المبادرة والشجاعة |
| 2276 | AI-draft | Stability & Beauty | الثبات والجمال |
| 2277 | AI-draft | Communication & Adaptability | التواصل والتكيّف |
| 2278 | AI-draft | Nurturing & Intuition | الرعاية والحدس |
| 2279 | AI-draft | Leadership & Creativity | القيادة والإبداع |
| 2280 | AI-draft | Service & Precision | الخدمة والدقّة |
| 2281 | AI-draft | Harmony & Justice | الانسجام والعدل |
| 2282 | AI-draft | Transformation & Depth | التحوّل والعمق |
| 2283 | AI-draft | Wisdom & Expansion | الحكمة والاتساع |
| 2284 | AI-draft | Discipline & Achievement | الانضباط والإنجاز |
| 2285 | AI-draft | Innovation & Humanitarianism | الابتكار والإنسانية |
| 2286 | AI-draft | Compassion & Spirituality | الرحمة والروحانية |
| 2287 | AI-draft | Indecision, Dependency, Conflict-avoidance | التردّد، الاتكالية، تجنّب الخلاف |
| 2288 | AI-draft | Build strong foundations. Reflect: "Patience is the key to paradise." | ابنِ أسسًا متينة. وتأمّل: «الصبر مفتاح الجنة». |
| 2289 | AI-draft | Responsibility, Nurturing, Harmony | المسؤولية، الرعاية، الانسجام |
| 2290 | AI-draft | Martyrdom, Interference, Perfectionism | التضحية المفرطة، التدخّل، الكمالية |
| 2291 | AI-draft | Isolation, Cynicism, Overthinking | العزلة، التشاؤم، الإفراط في التفكير |
| 2292 | AI-draft | Seek inner knowledge. Reflect: "Know thyself to know thy Lord." | اطلب المعرفة الباطنة. وتأمّل: «من عرف نفسه فقد عرف ربه». |
| 2293 | AI-draft | Your soul's journey is through the station of | رحلة روحك تمرّ بمقام |
| 2294 | AI-draft | Name cannot be empty | لا يمكن أن يكون الاسم فارغًا |
| 2295 | AI-draft | Your life destiny ( | مسار حياتك ( |
| 2296 | AI-draft | Your soul deeply yearns for | تتوق روحك بعمق إلى |
| 2297 | AI-draft | while outwardly you express | بينما تعبّر ظاهرًا عن |
| 2298 | AI-draft | Divine Name Resonance (28-Letter Cycle) | رنين الاسم الحسن (دورة الحروف الثمانية والعشرين) |
| 2299 | AI-draft | You express and inherit the same | تعبّر عن الطاقة نفسها وترثها: |
| 2300 | ✅ reviewed | energy. Strong, consistent elemental identity with deep | . هوية قوية ثابتة في العنصر، ذات |
| 2301 | AI-draft | roots. This creates a pure lineage of | جذور عميقة. وهذا يصنع نسبًا صافيًا من صفات |
| 2302 | AI-draft | qualities - what you express outwardly mirrors your inner foundation. | - فما تعبّر عنه ظاهرًا يعكس أساسك الباطن. |
| 2303 | AI-draft | You express with Fire but have Air roots. Your Air foundation feeds your Fire action - like wind fanning flames. This creates natural confidence and momentum. Your mother's airy nature (movement, ideas) supports your fiery expression (passion, action). | تعبّر بالنار لكن جذورك هوائية. فأساسك الهوائي يغذّي فعلك الناري — كالريح تذكي اللهب. وهذا يمنحك ثقة طبيعية واندفاعًا. وطبيعة أمك الهوائية (الحركة والأفكار) تسند تعبيرك الناري (الشغف والعمل). |
| 2304 | AI-draft | You express with Air but have Fire roots. Your Fire foundation energizes your Air movement - like heat creating wind. This brings dynamic communication and inspired ideas. Your mother's fiery nature (passion, will) fuels your airy expression (thought, connection). | تعبّر بالهواء لكن جذورك نارية. فأساسك الناري ينشّط حركتك الهوائية — كالحرارة تصنع الريح. وهذا يجلب تواصلًا حيويًا وأفكارًا ملهَمة. وطبيعة أمك النارية (الشغف والإرادة) تغذّي تعبيرك الهوائي (الفكر والتواصل). |
| 2305 | AI-draft | You express with Water but have Earth roots. Your Earth foundation contains your Water flow - like a riverbed holding water. This brings emotional stability and practical intuition. Your mother's earthy nature (stability, form) grounds your watery expression (emotion, depth). | تعبّر بالماء لكن جذورك ترابية. فأساسك الترابي يحتوي جريان مائك — كمجرى النهر يحفظ الماء. وهذا يجلب ثباتًا عاطفيًا وحدسًا عمليًا. وطبيعة أمك الترابية (الثبات والصورة) تثبّت تعبيرك المائي (العاطفة والعمق). |
| 2306 | AI-draft | You express with Earth but have Water roots. Your Water foundation nourishes your Earth structure - like rain feeding the soil. This brings fertile creativity and adaptable stability. Your mother's watery nature (emotion, flow) enriches your earthy expression (building, manifesting). | تعبّر بالتراب لكن جذورك مائية. فأساسك المائي يغذّي بنيتك الترابية — كالمطر يسقي التربة. وهذا يجلب إبداعًا خصبًا وثباتًا مرنًا. وطبيعة أمك المائية (العاطفة والانسياب) تُثري تعبيرك الترابي (البناء والتحقيق). |
| 2307 | AI-draft | You express with | تعبّر بـ |
| 2308 | AI-draft | but have | لكن جذورك |
| 2309 | AI-draft | roots. These elements support each other naturally - your foundation enhances your expression. This creates a harmonious flow between inner origin and outer manifestation. | . يسند هذان العنصران أحدهما الآخر بطبعهما — فأساسك يقوّي تعبيرك. وهذا يصنع انسيابًا منسجمًا بين الأصل الباطن والظهور الخارجي. |
| 2310 | AI-draft | You express with Fire but have Water roots. This creates dynamic tension - passion balanced by emotional depth. You may feel pulled between action and reflection, intensity and flow. This explains why you can be both fierce and deeply sensitive. Learn to honor both: your Fire drive and your Water foundation. | تعبّر بالنار لكن جذورك مائية. وهذا يصنع توتّرًا حيويًا — شغفًا يوازنه عمق عاطفي. قد تشعر بتجاذب بين العمل والتأمّل، والشدّة والانسياب. وهذا يفسّر كيف تكون حادًّا ومرهف الإحساس معًا. فأكرِم الاثنين: دافعك الناري وأساسك المائي. |
| 2311 | AI-draft | You express with Water but have Fire roots. This creates dynamic tension - emotional depth fueled by inner passion. You may feel pulled between flow and force, receptivity and assertion. This explains why you can be both gentle and intensely willful. Your calm exterior holds powerful depths. | تعبّر بالماء لكن جذورك نارية. وهذا يصنع توتّرًا حيويًا — عمقًا عاطفيًا يغذّيه شغف باطن. قد تشعر بتجاذب بين الانسياب والقوة، والتلقّي والإقدام. وهذا يفسّر كيف تكون لطيفًا وقوي الإرادة معًا. فظاهرك الهادئ يحمل أعماقًا قوية. |
| 2312 | AI-draft | You express with Air but have Earth roots. This creates dynamic tension - movement balanced by stability. You may feel pulled between freedom and security, ideas and form. This explains why you value both exploration and solid foundations. Your grounded base allows safe flight. | تعبّر بالهواء لكن جذورك ترابية. وهذا يصنع توتّرًا حيويًا — حركة يوازنها ثبات. قد تشعر بتجاذب بين الحرية والأمان، والأفكار والصورة. وهذا يفسّر تقديرك للاستكشاف وللأسس المتينة معًا. فقاعدتك الثابتة تتيح لك تحليقًا آمنًا. |
| 2313 | AI-draft | You express with Earth but have Air roots. This creates dynamic tension - structure built on freedom. You may feel pulled between stability and change, form and flow. This explains why you can be both reliable and surprisingly adaptable. Your stable exterior holds spacious depths. | تعبّر بالتراب لكن جذورك هوائية. وهذا يصنع توتّرًا حيويًا — بنية مبنية على الحرية. قد تشعر بتجاذب بين الثبات والتغيير، والصورة والانسياب. وهذا يفسّر كيف تكون موثوقًا ومرنًا على نحو مدهش. فظاهرك الثابت يحمل أعماقًا رحبة. |
| 2314 | AI-draft | depth with action or stability with change | العمق مع العمل أو الثبات مع التغيير |
| 2315 | AI-draft | You express with Fire and have Earth foundation. Fire and Earth create different modes - active expression vs. stable foundation. You can be intensely active outwardly while maintaining inner groundedness. Your earthy roots keep your fire from burning out. | تعبّر بالنار وأساسك ترابي. يصنع النار والتراب نمطين مختلفين — تعبير فاعل وأساس ثابت. فيمكنك أن تكون شديد النشاط ظاهرًا مع تجذّر باطن. وجذورك الترابية تمنع نارك من الاحتراق. |
| 2316 | AI-draft | You express with Earth and have Fire foundation. These create different modes - stable expression powered by passionate foundation. Your outer reliability is fueled by inner drive. Your fiery roots energize your earthy manifestation. | تعبّر بالتراب وأساسك ناري. نمطان مختلفان — تعبير ثابت يغذّيه أساس شغوف. فموثوقيتك الظاهرة يحرّكها دافع باطن، وجذورك النارية تنشّط تحقّقك الترابي. |
| 2317 | AI-draft | You express with Water and have Air foundation. These create different modes - emotional expression with mental foundation. You feel deeply but process through understanding. Your airy roots give perspective to your watery flow. | تعبّر بالماء وأساسك هوائي. نمطان مختلفان — تعبير عاطفي على أساس ذهني. تشعر بعمق لكنك تعالج بالفهم. وجذورك الهوائية تمنح انسيابك المائي منظورًا. |
| 2318 | AI-draft | You express with Air and have Water foundation. These create different modes - mental expression with emotional foundation. You think and communicate, but it's rooted in deep feeling. Your watery roots give depth to your airy ideas. | تعبّر بالهواء وأساسك مائي. نمطان مختلفان — تعبير ذهني على أساس عاطفي. تفكّر وتتواصل، لكن ذلك متجذّر في شعور عميق. وجذورك المائية تمنح أفكارك الهوائية عمقًا. |
| 2319 | AI-draft | and have | وأساسك |
| 2320 | AI-draft | foundation. These create different modes - active expression vs. restful foundation. This gives you versatility and range. | . نمطان مختلفان — تعبير فاعل وأساس هادئ. وهذا يمنحك تنوّعًا وسعة. |
| 2321 | AI-draft | Vertical | عمودي |
| 2322 | AI-draft | Mudawwar | مدوّر |
| 2323 | AI-draft | Flat | مسطّح |
| 2324 | AI-draft | Spiritual reach | الامتداد الروحي |
| 2325 | AI-draft | Strong upward-moving energy. You naturally reach for ideals and higher purposes. Spiritual seeker with aspirational drive, always looking to elevate yourself and others. | طاقة صاعدة قوية. تتطلّع بطبعك إلى المُثُل والغايات العليا. باحث روحي ذو همّة، يسعى دائمًا إلى الارتقاء بنفسه وبالآخرين. |
| 2326 | AI-draft | Embracing and nurturing energy. You contain and complete cycles with emotional warmth. Natural capacity for compassion and wholeness, creating safe spaces for growth. | طاقة حاضنة راعية. تحتوي الدورات وتتمّها بدفء عاطفي. قدرة طبيعية على الرحمة والاكتمال، وصنع مساحات آمنة للنموّ. |
| 2327 | AI-draft | Grounded and stable foundation. You create horizontal expansion with practical stability. Reliable, earth-connected energy that others can depend upon. | أساس متجذّر ثابت. تصنع امتدادًا أفقيًا بثبات عملي. طاقة موثوقة متّصلة بالأرض يعتمد عليها الآخرون. |
| 2328 | AI-draft | Sharp and decisive energy. You cut through complexity with clarity and transformation. Direct, purposeful approach that doesn't waste time or energy. | طاقة حادّة حاسمة. تشقّ التعقيد بوضوح وتحوّل. نهج مباشر هادف لا يهدر وقتًا ولا طاقة. |
| 2329 | AI-draft | You reach for ideals (vertical) while embracing others (round). Aspirational yet compassionate - you lift others as you climb. Balances spiritual seeking with emotional warmth. | تتطلّع إلى المُثُل (عمودي) مع احتضان الآخرين (مدوّر). طموح رحيم — ترفع الآخرين وأنت تصعد. يوازن بين الطلب الروحي والدفء العاطفي. |
| 2330 | AI-draft | You ground your aspirations (vertical + flat). Practical dreamer who builds stable paths to high goals. Your vision is matched by methodical execution. | تثبّت تطلّعاتك (عمودي + مسطّح). حالم عملي يبني طرقًا ثابتة إلى أهداف عالية. رؤيتك يقابلها تنفيذ منهجي. |
| 2331 | AI-draft | You ascend with sharpness (vertical + angular). Ambitious and decisive, cutting through obstacles to reach heights. Dynamic upward momentum with clear direction. | تصعد بحدّة (عمودي + زاوي). طموح حاسم يشقّ العقبات إلى القمم. اندفاع صاعد حيوي باتجاه واضح. |
| 2332 | AI-draft | You nurture with aspiration (round + vertical). Compassionate idealism - you care deeply while reaching for better. Emotional warmth directed toward growth. | ترعى بتطلّع (مدوّر + عمودي). مثالية رحيمة — تهتمّ بعمق وتسعى إلى الأفضل. دفء عاطفي موجَّه نحو النموّ. |
| 2333 | AI-draft | You nurture with decisiveness (round + angular). Compassionate yet clear-cutting when needed - protective warmth. You defend what you love with precision. | ترعى بحسم (مدوّر + زاوي). رحيم لكنه حاسم عند الحاجة — دفء حامٍ. تدافع عمّا تحبّ بدقّة. |
| 2334 | AI-draft | You stabilize with reach (flat + vertical). Building solid foundations while aiming high. Grounded ambition that creates lasting structures. | تثبّت مع امتداد (مسطّح + عمودي). تبني أسسًا متينة وتصوّب عاليًا. طموح متجذّر يصنع بنى دائمة. |
| 2335 | AI-draft | You ground with embrace (flat + round). Stable compassion - dependable emotional availability. Practical nurturing that provides real support. | تثبّت باحتضان (مسطّح + مدوّر). رحمة ثابتة — حضور عاطفي يُعتمد عليه. رعاية عملية تقدّم سندًا حقيقيًا. |
| 2336 | AI-draft | You stabilize with sharp clarity (flat + angular). Grounded decisiveness - you build with precision and purpose. Methodical yet incisive approach. | تثبّت بوضوح حادّ (مسطّح + زاوي). حسم متجذّر — تبني بدقّة وغاية. نهج منهجي نافذ. |
| 2337 | AI-draft | You sharpen while rising (angular + vertical). Decisive aspiration - cutting your path to higher goals. Purposeful ascent with no wasted energy. | تشحذ وأنت تصعد (زاوي + عمودي). تطلّع حاسم — تشقّ طريقك إلى أهداف أعلى. صعود هادف بلا طاقة مهدرة. |
| 2338 | AI-draft | You cut with compassion (angular + round). Clear boundaries with emotional awareness. Decisive yet nurturing - you protect through clarity. | تقطع برحمة (زاوي + مدوّر). حدود واضحة مع وعي عاطفي. حاسم وراعٍ معًا — تحمي بالوضوح. |
| 2339 | AI-draft | You sharpen with grounding (angular + flat). Decisive stability - precise and dependable. You establish clear, reliable structures. | تشحذ مع تجذّر (زاوي + مسطّح). ثبات حاسم — دقيق ويُعتمد عليه. تقيم بنى واضحة موثوقة. |
| 2340 | AI-draft | Balanced geometric energy combining | طاقة هندسية متوازنة تجمع |
| 2341 | AI-draft | Balanced geometric energy across multiple forms. You have versatility in expression, able to be aspirational, nurturing, grounded, or decisive as situations require. Adaptable spiritual presence. | طاقة هندسية متوازنة عبر أشكال متعدّدة. لديك تنوّع في التعبير، فتكون متطلّعًا أو راعيًا أو متجذّرًا أو حاسمًا بحسب المواقف. حضور روحي متكيّف. |
| 2342 | AI-draft | Send Critical Email | أرسل البريد المهمّ |
| 2343 | AI-draft | Slow, methodical work | عمل بطيء منهجي |
| 2344 | AI-draft | Emotional depth work | عمل على العمق العاطفي |
| 2345 | AI-draft | Rapid changes | تغيّرات سريعة |
| 2346 | AI-draft | Abstract theorizing | التنظير المجرّد |
| 2347 | AI-draft | Exciting but unstable | مثير لكنه غير مستقرّ |
| 2348 | AI-draft | Material success together | نجاح مادي معًا |
| 2349 | AI-draft | Compassionate union | اتّحاد رحيم |
| 2350 | AI-draft | Deep understanding, may isolate | فهم عميق، وقد يعتزلان |
| 2351 | AI-draft | Shared values and goals | قيم وأهداف مشتركة |
| 2352 | AI-draft | Complementary energies | طاقات متكاملة |
| 2353 | AI-draft | Complete cycle together | إتمام الدورة معًا |
| 2354 | AI-draft | Wholeness through union | الاكتمال بالاتّحاد |
| 2355 | AI-draft | May mirror each other's shadows | قد يعكس كلٌّ منهما ظلال الآخر |
| 2356 | AI-draft | Balance individuality with togetherness | وازِن بين الفردية والعيش معًا |
| 2357 | AI-draft | Start new ventures | ابدأ مشاريع جديدة |
| 2358 | AI-draft | Ego-driven decisions | قرارات تحرّكها الأنا |
| 2359 | AI-draft | Confrontations with authority | مواجهات مع أصحاب السلطة |
| 2360 | AI-draft | Nurturing activities | أنشطة الرعاية |
| 2361 | AI-draft | Important decisions (emotions may cloud judgment) | القرارات المهمّة (قد تحجب العاطفة الحكم) |
| 2362 | AI-draft | Business deals | الصفقات التجارية |
| 2363 | AI-draft | Social networking | بناء العلاقات الاجتماعية |
| 2364 | AI-draft | Socializing | الاختلاط بالناس |
| 2365 | AI-draft | Beautification | التجميل |
| 2366 | AI-draft | Physical exercise | التمارين البدنية |
| 2367 | AI-draft | Assertive action | العمل الحازم |
| 2368 | AI-draft | Courage needed | يلزم الشجاعة |
| 2369 | AI-draft | Rash decisions | القرارات المتهوّرة |
| 2370 | AI-draft | Property matters | شؤون العقار |
| 2371 | AI-draft | Fun activities | الأنشطة الممتعة |
| 2372 | AI-draft | Quick results expectations | توقّع نتائج سريعة |
| 2373 | AI-draft | Strengthens willpower and courage | يقوّي الإرادة والشجاعة |
| 2374 | AI-draft | Brings ease in difficulties, softens hearts | ييسّر الصعاب ويليّن القلوب |
| 2375 | AI-draft | Partial | جزئي |
| 2376 | AI-draft | Begin | ابدأ |
| 2377 | AI-draft | Build | ابنِ |
| 2378 | AI-draft | No decision-making today - defer to better days | لا قرارات اليوم - أجّلها إلى أيام أنسب |
| 2379 | AI-draft | 20min silence or meditation away from bright light | 20 دقيقة صمت أو تأمّل بعيدًا عن الضوء الساطع |
| 2380 | AI-draft | Early bedtime for solar repair (before 10pm) | نوم مبكر لاستعادة الطاقة (قبل العاشرة مساءً) |
| 2381 | AI-draft | 20min by water (real or visualized) | 20 دقيقة قرب الماء (حقيقةً أو تخيّلًا) |
| 2382 | AI-draft | Channel anger into gentle journaling, not action | وجّه الغضب إلى تدوين هادئ لا إلى فعل |
| 2383 | AI-draft | Solo time in pleasant surroundings | وقت منفرد في محيط لطيف |
| 2384 | AI-draft | Release rigidity - no forcing structure | تخلَّ عن الجمود - لا تفرض البنية |
| 2385 | AI-draft | Let go of "should" thoughts | تخلَّ عن أفكار «ينبغي» |
| 2386 | AI-draft | Building foundations×results come later | بناء الأسس × النتائج تأتي لاحقًا |
| 2387 | AI-draft | Lead with generosity×authority returns respect today | قُد بالكرم × السلطة تعود احترامًا اليوم |
| 2388 | AI-draft | Lead with generosity×results come quickly | قُد بالكرم × النتائج تأتي سريعًا |
| 2389 | AI-draft | Lead with patience×influence grows steadily | قُد بالصبر × الأثر ينمو بثبات |
| 2390 | AI-draft | Lead with consistency×reputation builds over time | قُد بالاتّساق × السمعة تُبنى مع الوقت |
| 2391 | AI-draft | Act with courage×strength returns strength immediately | اعمل بشجاعة × القوة تعود قوةً فورًا |
| 2392 | AI-draft | Act boldly×momentum builds fast | اعمل بجرأة × الاندفاع يتسارع |
| 2393 | AI-draft | Push forward×progress shows in days | تقدّم × التقدّم يظهر في أيام |
| 2394 | AI-draft | Train consistently×power builds gradually | تدرّب باتّساق × القوة تُبنى تدريجيًا |
| 2395 | AI-draft | Speak clearly×understanding comes back instantly | تكلّم بوضوح × الفهم يعود فورًا |
| 2396 | AI-draft | Communicate well×replies come swiftly | أحسِن التواصل × الردود تأتي سريعًا |
| 2397 | AI-draft | Share knowledge×learning compounds over days | شارك المعرفة × التعلّم يتضاعف على مدى أيام |
| 2398 | AI-draft | Write persistently×wisdom accumulates slowly | اكتب بمثابرة × الحكمة تتراكم ببطء |
| 2399 | AI-draft | Give care×comfort returns quickly today | قدّم الرعاية × الطمأنينة تعود سريعًا اليوم |
| 2400 | AI-draft | Give care×warmth returns in hours | قدّم الرعاية × الدفء يعود في ساعات |
| 2401 | AI-draft | Nurture bonds×emotional depth grows over days | ارعَ الروابط × العمق العاطفي ينمو على مدى أيام |
| 2402 | AI-draft | Tend relationships×trust builds with time | اعتنِ بالعلاقات × الثقة تُبنى مع الوقت |
| 2403 | AI-draft | Show love×beauty reflects back today | أظهِر المحبّة × الجمال ينعكس اليوم |
| 2404 | AI-draft | Show love×joy returns soon | أظهِر المحبّة × الفرح يعود قريبًا |
| 2405 | AI-draft | Create beauty×appreciation deepens over days | اصنع الجمال × التقدير يتعمّق على مدى أيام |
| 2406 | AI-draft | Invest in art×value increases with time | استثمر في الفنّ × القيمة تزداد مع الوقت |
| 2407 | AI-draft | Think big×opportunities appear today | فكّر بسعة × الفرص تظهر اليوم |
| 2408 | AI-draft | Expand horizons×doors open quickly | وسّع آفاقك × الأبواب تُفتح سريعًا |
| 2409 | AI-draft | Study deeply×wisdom unfolds over days | ادرس بعمق × الحكمة تتكشّف على مدى أيام |
| 2410 | AI-draft | Build legacy×growth compounds over time | ابنِ إرثًا × النموّ يتضاعف مع الوقت |
| 2411 | AI-draft | Structure well×stability shows today | أحسِن التنظيم × الثبات يظهر اليوم |
| 2412 | AI-draft | Organize now×order appears soon | نظّم الآن × النظام يظهر قريبًا |
| 2413 | AI-draft | Build foundations×lasting results take weeks | ابنِ الأسس × النتائج الدائمة تستغرق أسابيع |
| 2414 | AI-draft | Set daily direction | حدّد وجهة اليوم |
| 2415 | AI-draft | Lead team meetings | أدِر اجتماعات الفريق |
| 2416 | AI-draft | Following others | اتّباع الآخرين |
| 2417 | AI-draft | Sun rises - authority peaks | تشرق الشمس - تبلغ السلطة ذروتها |
| 2418 | AI-draft | Background work | عمل في الخلفية |
| 2419 | AI-draft | Hiding mistakes | إخفاء الأخطاء |
| 2420 | AI-draft | Delegate tasks | فوّض المهامّ |
| 2421 | AI-draft | Teach and mentor | علّم وأرشد |
| 2422 | AI-draft | Empower others | مكّن الآخرين |
| 2423 | AI-draft | Micromanaging | التدخّل في كل تفصيل |
| 2424 | AI-draft | Solo work | عمل منفرد |
| 2425 | AI-draft | Celebrate wins | احتفِ بالنجاحات |
| 2426 | AI-draft | New starts | بدايات جديدة |
| 2427 | AI-draft | Criticism | الانتقاد |
| 2428 | AI-draft | Gentle exercise | تمرين لطيف |
| 2429 | AI-draft | Counseling sessions | جلسات الاستشارة |
| 2430 | AI-draft | Analytical tasks | المهامّ التحليلية |
| 2431 | AI-draft | Number crunching | الحسابات الرقمية |
| 2432 | AI-draft | Wind down gently | استرخِ بهدوء |
| 2433 | AI-draft | Early sleep preparation | التهيّؤ للنوم المبكر |
| 2434 | AI-draft | Stimulation | الإثارة |
| 2435 | AI-draft | Screens | الشاشات |
| 2436 | AI-draft | Vigorous exercise | التمارين الشديدة |
| 2437 | AI-draft | Tackle hardest task first | ابدأ بأصعب مهمّة |
| 2438 | AI-draft | Difficult conversations | المحادثات الصعبة |
| 2439 | AI-draft | Hesitation | التردّد |
| 2440 | AI-draft | Competitive situations | المواقف التنافسية |
| 2441 | AI-draft | Defend positions | الدفاع عن المواقف |
| 2442 | AI-draft | Passive waiting | الانتظار السلبي |
| 2443 | AI-draft | Complete unfinished tasks | أتمّ المهامّ غير المنتهية |
| 2444 | AI-draft | Athletic training | التدريب الرياضي |
| 2445 | AI-draft | Assert boundaries | أكّد حدودك |
| 2446 | AI-draft | Giving up | الاستسلام |
| 2447 | AI-draft | Gentle stretching | تمدّد لطيف |
| 2448 | AI-draft | Process day's battles | راجع معارك اليوم |
| 2449 | AI-draft | Release tension | تخلّص من التوتّر |
| 2450 | AI-draft | Forgive conflicts | اعفُ عن الخلافات |
| 2451 | AI-draft | Alcohol | الكحول |
| 2452 | AI-draft | Writing tasks | مهامّ الكتابة |
| 2453 | AI-draft | Study complex topics | ادرس الموضوعات المعقّدة |
| 2454 | AI-draft | Mindless work | العمل الآلي |
| 2455 | AI-draft | Physical-only tasks | المهامّ البدنية فقط |
| 2456 | AI-draft | Important calls | الاتصالات المهمّة |
| 2457 | AI-draft | Teach or explain | علّم أو اشرح |
| 2458 | AI-draft | Short trips/errands | مشاوير قصيرة |
| 2459 | AI-draft | Email responses | الردّ على البريد |
| 2460 | AI-draft | Journal insights | دوّن خواطرك |
| 2461 | AI-draft | Organize notes | نظّم ملاحظاتك |
| 2462 | AI-draft | Set ambitious goals | ضع أهدافًا طموحة |
| 2463 | AI-draft | Small thinking | التفكير الضيّق |
| 2464 | AI-draft | Petty details | التفاصيل التافهة |
| 2465 | AI-draft | Seek opportunities | اطلب الفرص |
| 2466 | AI-draft | Generous acts | أعمال الكرم |
| 2467 | AI-draft | Narrowness | ضيق الأفق |
| 2468 | AI-draft | Expand projects | وسّع المشاريع |
| 2469 | AI-draft | Take calculated risks | خاطر مخاطرة محسوبة |
| 2470 | AI-draft | Contraction | الانكماش |
| 2471 | AI-draft | Philosophical reflection | التأمّل الفلسفي |
| 2472 | AI-draft | Gratitude practice | ممارسة الشكر |
| 2473 | AI-draft | Mentor someone | أرشد أحدًا |
| 2474 | AI-draft | Spiritual study | الدراسة الروحية |
| 2475 | AI-draft | Pessimism | التشاؤم |
| 2476 | AI-draft | Beautify environment | جمّل محيطك |
| 2477 | AI-draft | Artistic creation | الإبداع الفنّي |
| 2478 | AI-draft | Gentle movement | حركة لطيفة |
| 2479 | AI-draft | Ugliness | القبح |
| 2480 | AI-draft | Romantic gestures | لفتات المودّة |
| 2481 | AI-draft | Fashion/style choices | اختيارات المظهر |
| 2482 | AI-draft | Time with loved ones | وقت مع الأحبّة |
| 2483 | AI-draft | Entertainment | الترفيه |
| 2484 | AI-draft | Sensory pleasures | المتع الحسّية |
| 2485 | AI-draft | Difficult tasks first | المهامّ الصعبة أولًا |
| 2486 | AI-draft | Quick fixes | الحلول السريعة |
| 2487 | AI-draft | Persist through challenges | اثبت أمام التحدّيات |
| 2488 | AI-draft | Detail-oriented work | عمل يتطلّب الدقّة |
| 2489 | AI-draft | Build foundations | ابنِ الأسس |
| 2490 | AI-draft | Seeking easy path | طلب الطريق السهل |
| 2491 | AI-draft | Assess progress | قيّم التقدّم |
| 2492 | AI-draft | Solo reflection | تأمّل منفرد |
| 2493 | AI-draft | Indulgence | الإفراط في الملذّات |
| 2494 | AI-draft | Your inner compass guides you×balance introspection with outer engagement. | بوصلتك الباطنة ترشدك × وازِن بين التأمّل الباطن والانخراط الخارجي. |
| 2495 | AI-draft | Your temperament leads×balance feelings with mindful structure. | طبعك يقودك × وازِن المشاعر ببنية واعية. |
| 2496 | AI-draft | External timing shapes you×balance receptivity with inner purpose. | التوقيت الخارجي يشكّلك × وازِن التلقّي بالغاية الباطنة. |
| 2497 | AI-draft | Excellent for leadership×schedule important meetings and presentations | ممتاز للقيادة × رتّب الاجتماعات والعروض المهمّة |
| 2498 | AI-draft | Lead projects and take initiative×high energy for achievements | قُد المشاريع وبادر × طاقة عالية للإنجاز |
| 2499 | AI-draft | Challenging for visibility×lead quietly, support others today | صعب للظهور × قُد بهدوء وساند الآخرين اليوم |
| 2500 | AI-draft | Perfect for reflection×trust your intuition and emotional wisdom | مثالي للتأمّل × ثق بحدسك وحكمتك العاطفية |
| 2501 | AI-draft | Gentle day×plan, review, nurture relationships, avoid overload | يوم لطيف × خطّط وراجع وارعَ العلاقات واجتنب الإرهاق |
| 2502 | AI-draft | Rest needed×minimize commitments, process emotions, be kind to yourself | تلزم الراحة × قلّل الالتزامات وعالج مشاعرك وترفّق بنفسك |
| 2503 | AI-draft | Fierce energy×tackle tough challenges and push through obstacles boldly | طاقة شديدة × تصدَّ للتحدّيات الصعبة واخترق العقبات بجرأة |
| 2504 | AI-draft | Take action on difficult tasks×courage and determination favored | اعمل على المهامّ الصعبة × الشجاعة والعزم مستحسنان |
| 2505 | AI-draft | Sharp mind×perfect for writing, calls, learning, and travel plans | ذهن حادّ × مثالي للكتابة والاتصالات والتعلّم وخطط السفر |
| 2506 | AI-draft | Communicate clearly×good for emails, meetings, and study sessions | تواصل بوضوح × جيد للبريد والاجتماعات وجلسات الدراسة |
| 2507 | AI-draft | Mental fog possible×double-check messages, postpone major decisions | قد يغيم الذهن × راجع الرسائل وأجّل القرارات الكبرى |
| 2508 | AI-draft | Timing is perfect×make big decisions, start new ventures, expand horizons | التوقيت مثالي × اتّخذ القرارات الكبيرة وابدأ المشاريع ووسّع آفاقك |
| 2509 | AI-draft | Growth day×great for planning expansion and seeking opportunities | يوم نموّ × رائع للتخطيط للتوسّع وطلب الفرص |
| 2510 | AI-draft | Temper optimism×research thoroughly before committing to anything big | اعتدل في التفاؤل × ابحث جيدًا قبل الالتزام بأمر كبير |
| 2511 | AI-draft | Excellent for connection×ideal for relationships, creativity, and beauty | ممتاز للتواصل × مثالي للعلاقات والإبداع والجمال |
| 2512 | AI-draft | Harmonious day×connect with others, enjoy art, balance work-pleasure | يوم منسجم × تواصل مع الناس واستمتع بالفنّ ووازن بين العمل والراحة |
| 2513 | AI-draft | Build strong foundations×organize, plan long-term, establish structures | ابنِ أسسًا متينة × نظّم وخطّط للمدى البعيد وأقم البنى |
| 2514 | AI-draft | Heavy responsibilities×break tasks into small steps, be patient with delays | مسؤوليات ثقيلة × قسّم المهامّ خطوات صغيرة واصبر على التأخير |
| 2515 | AI-draft | Balance heat×practice calm speech, charity, time near water | وازِن الحرارة × تكلّم بهدوء، وتصدّق، واقضِ وقتًا قرب الماء |
| 2516 | AI-draft | Activate energy×light exercise, sunlight, decisive action | نشّط الطاقة × تمرين خفيف، وشمس، وعمل حاسم |
| 2517 | AI-draft | Ground yourself×stick to routine, nature walk, one task at a time | تجذّر × التزم بالروتين، وامشِ في الطبيعة، ومهمّة واحدة في كل مرّة |
| 2518 | AI-draft | Add lightness×try creativity, flexibility, or a short change of scenery | أضف خفّة × جرّب الإبداع أو المرونة أو تغييرًا قصيرًا للمكان |
| 2519 | AI-draft | Shine your light×but stay humble and generous with recognition | أظهِر نورك × مع التواضع والكرم في الثناء على غيرك |
| 2520 | AI-draft | Honor your feelings×they guide you to what truly matters | أكرِم مشاعرك × فهي ترشدك إلى ما يهمّ حقًّا |
| 2521 | AI-draft | Mental agility peaks×network, negotiate, adapt quickly | ذروة الخفّة الذهنية × ابنِ العلاقات وفاوض وتكيّف سريعًا |
| 2522 | AI-draft | Appreciate beauty×create harmony in your environment and relationships | تذوّق الجمال × اصنع الانسجام في محيطك وعلاقاتك |
| 2523 | AI-draft | Master discipline×small consistent efforts build lasting success | أتقِن الانضباط × الجهود الصغيرة الدائمة تبني نجاحًا باقيًا |
| 2524 | AI-draft | Beige | بيج |
| 2525 | AI-draft | element harmonizes beautifully with today's | عنصرك ينسجم انسجامًا جميلًا مع عنصر اليوم |
| 2526 | AI-draft | Wear red, orange, or gold to amplify today's fiery energy. | البس الأحمر أو البرتقالي أو الذهبي لتعزيز طاقة اليوم النارية. |
| 2527 | AI-draft | Combine red and yellow - a red shirt with golden accessories works great. | اجمع بين الأحمر والأصفر - قميص أحمر مع إكسسوارات ذهبية مناسب جدًا. |
| 2528 | AI-draft | Wear blue, turquoise, or silver to deepen today's flow. | البس الأزرق أو الفيروزي أو الفضّي لتعميق انسياب اليوم. |
| 2529 | AI-draft | Pair blue with green or brown - turquoise accents on earth tones. | اجمع الأزرق مع الأخضر أو البني - لمسات فيروزية على ألوان ترابية. |
| 2530 | AI-draft | Wear yellow, white, or light blue for clarity and lightness. | البس الأصفر أو الأبيض أو الأزرق الفاتح للوضوح والخفّة. |
| 2531 | AI-draft | Combine yellow with red - light colors with warm touches. | اجمع الأصفر مع الأحمر - ألوان فاتحة مع لمسات دافئة. |
| 2532 | AI-draft | Pair green with blue - earthy tones with water accents. | اجمع الأخضر مع الأزرق - ألوان ترابية مع لمسات مائية. |
| 2533 | AI-draft | Blend your colors with today's element for enhanced harmony. | امزج ألوانك مع عنصر اليوم لانسجام أكبر. |
| 2534 | AI-draft | Today's | طاقة |
| 2535 | AI-draft | energy may challenge your | اليوم قد تتحدّى طبيعتك |
| 2536 | AI-draft | Stick with your | التزم بألوانك |
| 2537 | AI-draft | Wear your favorite | البس ألوانك المفضّلة من |
| 2538 | AI-draft | colors today – they'll serve you well. | اليوم – ستنفعك. |
| 2539 | AI-draft | Crimson Red | أحمر قرمزي |
| 2540 | AI-draft | Dodger Blue | أزرق سماوي |
| 2541 | AI-draft | Royal Blue | أزرق ملكي |
| 2542 | AI-draft | Gold Yellow | أصفر ذهبي |
| 2543 | AI-draft | Khaki | كاكي |
| 2544 | AI-draft | Forest Green | أخضر غابي |
| 2545 | AI-draft | Saddle Brown | بني جلدي |
| 2546 | AI-draft | Burlywood | بني فاتح |
| 2547 | AI-draft | nature and today's | طبيعتك وطاقة اليوم |
| 2548 | AI-draft | nature is getting along with today's | طبيعتك متوافقة مع طاقة اليوم |
| 2549 | AI-draft | energy. Keep yourself balanced and calm. | . حافظ على توازنك وهدوئك. |
| 2550 | AI-draft | Wear reds and oranges - bright and bold | البس الأحمر والبرتقالي - ألوانًا زاهية جريئة |
| 2551 | AI-draft | Add gold jewelry or accessories | أضف حليًّا أو إكسسوارات ذهبية |
| 2552 | AI-draft | You'll feel extra energized today | ستشعر بنشاط إضافي اليوم |
| 2553 | AI-draft | Wear blues or turquoise today | البس الأزرق أو الفيروزي اليوم |
| 2554 | AI-draft | Blue top with green or brown bottom | أعلى أزرق مع أسفل أخضر أو بني |
| 2555 | AI-draft | Peaceful and grounded feeling | شعور بالسكينة والتجذّر |
| 2556 | AI-draft | Yellow or orange combinations | تركيبات صفراء أو برتقالية |
| 2557 | AI-draft | Energetic and clear-headed day | يوم نشيط صافي الذهن |
| 2558 | AI-draft | Light and airy colors | ألوان فاتحة خفيفة |
| 2559 | AI-draft | Brown and turquoise together | البني والفيروزي معًا |
| 2560 | AI-draft | Calm and flowing energy | طاقة هادئة منسابة |
| 2561 | AI-draft | Add some tan or beige | أضف شيئًا من البيج |
| 2562 | AI-draft | Strong, grounded, natural | قوي، متجذّر، طبيعي |
| 2563 | AI-draft | Wear earth colors - brown, green, or beige | البس ألوان التراب - البني أو الأخضر أو البيج |
| 2564 | AI-draft | Around noon: Strong | قرب الظهر: قوي |
| 2565 | AI-draft | Evening: Getting weaker | المساء: يضعف |
| 2566 | AI-draft | Morning: Weaker | الصباح: أضعف |
| 2567 | AI-draft | Evening: Okay | المساء: لا بأس |
| 2568 | AI-draft | Early morning (4-6 AM): Best | الفجر (4-6 صباحًا): الأفضل |
| 2569 | AI-draft | Afternoon: Okay | بعد الظهر: لا بأس |
| 2570 | AI-draft | Morning (5-7 AM): Best | الصباح (5-7): الأفضل |
| 2571 | AI-draft | Evening (6-8 PM): Good | المساء (6-8): جيد |
| 2572 | AI-draft | Early morning: Okay | الصباح الباكر: لا بأس |
| 2573 | AI-draft | Afternoon (3-5 PM): Best | بعد الظهر (3-5): الأفضل |
| 2574 | AI-draft | Evening (5-7 PM): Good | المساء (5-7): جيد |
| 2575 | AI-draft | Night: Okay | الليل: لا بأس |
| 2576 | AI-draft | Evening: Moderate | المساء: معتدل |
| 2577 | AI-draft | \| Most Active: | \| الأنشط: |
| 2578 | AI-draft | \| Dominant: | \| الغالب: |
| 2579 | AI-draft | Universal Mercy | الرحمة الشاملة |
| 2580 | AI-draft | Your name carries boundless compassion - extend mercy to yourself and others. | يحمل اسمك رحمة واسعة - فارحم نفسك والناس. |
| 2581 | AI-draft | Gentle Forgiveness | العفو اللطيف |
| 2582 | AI-draft | You embody gentle forgiveness - practice patience and understanding. | تتجلّى فيك سجيّة العفو اللطيف - تحلَّ بالصبر والتفهّم. |
| 2583 | AI-draft | Your name resonates with natural leadership - lead with wisdom and justice. | يتناغم اسمك مع القيادة الفطرية - قُد بالحكمة والعدل. |
| 2584 | AI-draft | Purity & Perfection | الطهارة والكمال |
| 2585 | AI-draft | Seek purity in intention and action - strive for spiritual excellence. | اطلب الطهارة في النيّة والعمل - واسعَ إلى الإحسان. |
| 2586 | AI-draft | Peace & Safety | السلام والأمان |
| 2587 | AI-draft | You are called to be a source of peace - bring calm to turbulent situations. | أنت مدعوّ لتكون مصدر سلام - هدّئ المواقف المضطربة. |
| 2588 | AI-draft | The Bestower of Faith | المؤمن |
| 2589 | AI-draft | Strengthen faith and trust - be a pillar of reliability for others. | قوِّ الإيمان والثقة - كن ركنًا موثوقًا للآخرين. |
| 2590 | AI-draft | Protection & Watchfulness | الحفظ والرعاية |
| 2591 | AI-draft | Watch over those entrusted to you - protect with care and wisdom. | ارعَ من استُرعيت - احمِ بعناية وحكمة. |
| 2592 | AI-draft | Strength & Honor | القوة والعزّة |
| 2593 | AI-draft | Your strength comes from higher purpose - stand firm in truth. | قوّتك من غاية أسمى - اثبت على الحقّ. |
| 2594 | AI-draft | Restoration & Power | الجبر والقوة |
| 2595 | AI-draft | You have the power to restore what is broken - mend with compassion. | لديك القدرة على جبر ما انكسر - أصلِح برحمة. |
| 2596 | AI-draft | Recognize true greatness lies in humility before the Divine. | اعلم أن العظمة الحقّة في التواضع لله. |
| 2597 | AI-draft | Creativity & Innovation | الإبداع والابتكار |
| 2598 | AI-draft | Channel creative energy into meaningful projects - bring new ideas to life. | وجّه طاقتك الإبداعية إلى مشاريع ذات معنى - أحيِ أفكارًا جديدة. |
| 2599 | AI-draft | Evolution & Development | التطوّر والنموّ |
| 2600 | AI-draft | Embrace continuous growth - allow yourself to evolve and transform. | تقبّل النموّ المستمرّ - اسمح لنفسك بالتطوّر والتحوّل. |
| 2601 | AI-draft | Design & Beauty | التصميم والجمال |
| 2602 | AI-draft | Shape beauty in your life - pay attention to form and harmony. | اصنع الجمال في حياتك - انتبه إلى الصورة والانسجام. |
| 2603 | AI-draft | The Constantly Forgiving | الغفّار |
| 2604 | AI-draft | Forgiveness & Release | المغفرة والتخلّي |
| 2605 | AI-draft | Practice constant forgiveness - release resentment and find peace. | داوِم على العفو - تخلَّ عن الضغينة وجِد السلام. |
| 2606 | AI-draft | Dominion & Control | السيطرة على النفس |
| 2607 | AI-draft | Master self-control - subdue negative tendencies with discipline. | أتقِن ضبط النفس - اقهر الميول السيّئة بالانضباط. |
| 2608 | AI-draft | Generosity & Giving | الكرم والعطاء |
| 2609 | AI-draft | Give freely without expectation - generosity enriches the soul. | أعطِ بلا انتظار - فالكرم يُثري الروح. |
| 2610 | AI-draft | Trust in divine provision - share your resources with those in need. | ثق برزق الله - وشارك ما لديك مع المحتاجين. |
| 2611 | AI-draft | Seek solutions that open doors - be receptive to new opportunities. | اطلب حلولًا تفتح الأبواب - وكن متقبّلًا للفرص الجديدة. |
| 2612 | AI-draft | Knowledge & Awareness | العلم والوعي |
| 2613 | AI-draft | Pursue knowledge with sincerity - wisdom comes through learning. | اطلب العلم بإخلاص - فالحكمة تأتي بالتعلّم. |
| 2614 | AI-draft | The Constrictor | القابض |
| 2615 | AI-draft | Restraint & Discipline | الإمساك والانضباط |
| 2616 | AI-draft | Know when to hold back - sometimes restraint is strength. | اعرف متى تُمسك - فالإمساك أحيانًا قوة. |
| 2617 | AI-draft | The Expander | الباسط |
| 2618 | AI-draft | Humility & Lowering | التواضع |
| 2619 | AI-draft | Practice humility - true elevation comes through lowering the ego. | تحلَّ بالتواضع - فالرفعة الحقّة بخفض الأنا. |
| 2620 | AI-draft | Elevation & Honor | الرفعة والكرامة |
| 2621 | AI-draft | Lift others up - your elevation comes through elevating others. | ارفع الآخرين - فرفعتك برفعك لغيرك. |
| 2622 | AI-draft | Honor & Dignity | العزّة والكرامة |
| 2623 | AI-draft | Honor those around you - treat all with dignity and respect. | أكرِم من حولك - عامل الجميع بكرامة واحترام. |
| 2624 | AI-draft | Justice & Accountability | العدل والمحاسبة |
| 2625 | AI-draft | Deep Listening & Awareness | الإصغاء العميق والوعي |
| 2626 | AI-draft | Listen deeply to others - be present and attentive. | أصغِ إلى الآخرين بعمق - وكن حاضرًا منتبهًا. |
| 2627 | AI-draft | Clear Vision & Insight | الرؤية الواضحة والبصيرة |
| 2628 | AI-draft | See beyond appearances - perceive the deeper truth. | انظر وراء الظواهر - وأدرِك الحقيقة الأعمق. |
| 2629 | AI-draft | Wise Judgment & Discernment | الحكم الحكيم والتمييز |
| 2630 | AI-draft | Judge fairly and wisely - seek truth before deciding. | احكم بالعدل والحكمة - واطلب الحقيقة قبل القرار. |
| 2631 | AI-draft | Act with justice in all matters - fairness is your strength. | اعدل في كل الأمور - فالإنصاف قوّتك. |
| 2632 | AI-draft | Gentle Grace & Subtlety | اللطف والرقّة |
| 2633 | AI-draft | Approach situations with gentleness - subtlety opens closed doors. | تعامل مع المواقف برفق - فاللطف يفتح الأبواب المغلقة. |
| 2634 | AI-draft | Deep Knowledge & Expertise | العلم العميق والخبرة |
| 2635 | AI-draft | Cultivate expertise - your awareness guides others. | نمِّ خبرتك - فوعيك يرشد الآخرين. |
| 2636 | AI-draft | Patience & Tolerance | الصبر والحِلم |
| 2637 | AI-draft | Practice forbearance - patience transforms hearts. | تحلَّ بالحِلم - فالصبر يحوّل القلوب. |
| 2638 | AI-draft | Recognize your inherent greatness - stand in your magnificence. | اعرف ما أودعه الله فيك من خير - وقُم به بشكر. |
| 2639 | AI-draft | Endless Forgiveness | العفو الدائم |
| 2640 | AI-draft | Forgive freely and often - release burdens of resentment. | اعفُ كثيرًا - وتخلَّ عن أثقال الضغينة. |
| 2641 | AI-draft | Gratitude & Recognition | الشكر والتقدير |
| 2642 | AI-draft | Express gratitude daily - appreciation multiplies blessings. | اشكر كل يوم - فالشكر يزيد النِّعم. |
| 2643 | AI-draft | Elevated Perspective | منظور أعلى |
| 2644 | AI-draft | Rise above challenges - see from a higher vantage point. | ارتفع فوق التحدّيات - وانظر من موقع أعلى. |
| 2645 | AI-draft | Supreme Greatness | العظمة العليا |
| 2646 | AI-draft | Protection & Preservation | الحفظ والصون |
| 2647 | AI-draft | Preserve what is valuable - guard the sacred in your life. | احفظ ما هو نفيس - واصن المقدّس في حياتك. |
| 2648 | AI-draft | Sustenance & Nourishment | القوت والغذاء |
| 2649 | AI-draft | Nourish body and soul - provide sustenance to others. | غذِّ البدن والروح - وقدّم القوت للآخرين. |
| 2650 | AI-draft | Accountability & Calculation | المحاسبة |
| 2651 | AI-draft | Be accountable for your actions - integrity matters. | حاسب نفسك على أعمالك - فالنزاهة مهمّة. |
| 2652 | AI-draft | Majesty & Splendor | الجلال والبهاء |
| 2653 | AI-draft | Boundless Generosity | الكرم بلا حدود |
| 2654 | AI-draft | Give generously of your time, wealth, and spirit. | أعطِ بسخاء من وقتك ومالك وروحك. |
| 2655 | AI-draft | Vigilance & Awareness | اليقظة والوعي |
| 2656 | AI-draft | Stay watchful and aware - mindfulness protects you. | ابقَ يقظًا واعيًا - فالمراقبة تحفظك. |
| 2657 | AI-draft | Quick Response & Presence | سرعة الاستجابة والحضور |
| 2658 | AI-draft | Respond promptly to calls for help - be present when needed. | استجب سريعًا لنداءات العون - وكن حاضرًا عند الحاجة. |
| 2659 | AI-draft | Vastness & Expansion | السعة والاتساع |
| 2660 | AI-draft | Supreme Wisdom | الحكمة العليا |
| 2661 | AI-draft | Seek wisdom in all things - make decisions with insight. | اطلب الحكمة في كل شيء - واتّخذ قراراتك ببصيرة. |
| 2662 | AI-draft | Pure Love & Affection | المحبّة الخالصة والمودّة |
| 2663 | AI-draft | Glory & Honor | المجد والشرف |
| 2664 | AI-draft | Renewal & Resurrection | التجدّد والبعث |
| 2665 | AI-draft | Embrace new beginnings - every moment is a chance to start fresh. | تقبّل البدايات الجديدة - فكل لحظة فرصة للبدء من جديد. |
| 2666 | AI-draft | Witnessing & Testimony | الشهادة |
| 2667 | AI-draft | Speak and live your truth - authenticity is your power. | قل الحقّ وعِش به - فالصدق قوّتك. |
| 2668 | AI-draft | Trust & Reliability | الثقة والاعتماد |
| 2669 | AI-draft | Inner Strength & Power | القوة الباطنة |
| 2670 | AI-draft | Draw on your inner strength - you are more powerful than you know. | استمدّ من قوّتك الباطنة - فأنت أقوى مما تظنّ. |
| 2671 | AI-draft | Steadfastness & Solidity | الثبات والرسوخ |
| 2672 | AI-draft | Stand firm in your principles - unwavering strength guides you. | اثبت على مبادئك - فالقوة الراسخة ترشدك. |
| 2673 | AI-draft | Be a true friend and protector - loyalty is sacred. | كن صديقًا وفيًّا وحاميًا - فالوفاء أمر عظيم. |
| 2674 | AI-draft | Worthiness of Praise | استحقاق الحمد |
| 2675 | AI-draft | Live in a way worthy of praise - excellence in character. | عِش عيشًا يستحقّ الثناء - إحسانًا في الخُلق. |
| 2676 | AI-draft | The Accounter | المحصي |
| 2677 | AI-draft | Precision & Counting | الدقّة والإحصاء |
| 2678 | AI-draft | Pay attention to details - every small thing counts. | انتبه إلى التفاصيل - فكل صغيرة محسوبة. |
| 2679 | AI-draft | Innovation & Creation | الابتكار والإنشاء |
| 2680 | AI-draft | Initiate new ideas - be a source of creative beginnings. | ابتدئ أفكارًا جديدة - وكن مصدر بدايات مبدعة. |
| 2681 | AI-draft | Restoration & Renewal | الإعادة والتجدّد |
| 2682 | AI-draft | Vitality & Life Force | الحيوية وقوة الحياة |
| 2683 | AI-draft | Bring life to what you touch - energize and invigorate. | أحيِ ما تلمسه - انشط وانشر النشاط. |
| 2684 | AI-draft | The Causer of Death | المميت |
| 2685 | AI-draft | Endings & Transformation | الخواتيم والتحوّل |
| 2686 | AI-draft | Accept endings gracefully - they make way for new beginnings. | تقبّل الخواتيم برضا - فهي تفسح للبدايات الجديدة. |
| 2687 | AI-draft | Eternal Life & Energy | الحياة والطاقة الدائمة |
| 2688 | AI-draft | Live fully in each moment - embrace the eternal now. | عِش كل لحظة بكمالها - واغتنم الحاضر. |
| 2689 | AI-draft | The Self-Sustaining | القيّوم |
| 2690 | AI-draft | Independence & Self-Sufficiency | الاستقلال والاكتفاء |
| 2691 | AI-draft | Be self-sustaining - cultivate inner resources. | كن مكتفيًا بالله - ونمِّ مواردك الباطنة. |
| 2692 | AI-draft | Discovery & Finding | الاكتشاف والوجدان |
| 2693 | AI-draft | Seek and you shall find - discovery awaits you. | اطلب تجد - فالاكتشاف ينتظرك. |
| 2694 | AI-draft | The Noble | الماجد |
| 2695 | AI-draft | Nobility & Excellence | النُّبل والإحسان |
| 2696 | AI-draft | Act with nobility - excellence of character defines you. | اعمل بنُبل - فإحسان الخُلق يعرّفك. |
| 2697 | AI-draft | Unity & Oneness | الوحدة والتوحيد |
| 2698 | AI-draft | Recognize the unity in all - we are all connected. | أدرِك الوحدة في الكل - فكلنا متّصلون. |
| 2699 | AI-draft | Refuge & Support | الملجأ والسند |
| 2700 | AI-draft | Be a refuge for others - provide safe harbor. | كن ملجأً للآخرين - وقدّم لهم مأمنًا. |
| 2701 | AI-draft | Capability & Competence | القدرة والكفاءة |
| 2702 | AI-draft | Trust your capabilities - you are more able than you think. | ثق بقدراتك - فأنت أقدر مما تظنّ. |
| 2703 | AI-draft | Supreme Power | القدرة العليا |
| 2704 | AI-draft | Claim your power - act with confidence and authority. | قُم بما أُعطيت من قوة - واعمل بثقة وحزم. |
| 2705 | AI-draft | Progress & Advancement | التقدّم والترقّي |
| 2706 | AI-draft | Patience & Timing | الصبر والتوقيت |
| 2707 | AI-draft | Trust divine timing - not all delays are denials. | ثق بتوقيت الله - فليس كل تأخير منعًا. |
| 2708 | AI-draft | Primacy & Leadership | الأوّلية والقيادة |
| 2709 | AI-draft | Completion & Endings | الإتمام والخواتيم |
| 2710 | AI-draft | Complete what you start - see things through to the end. | أتمّ ما تبدؤه - وامضِ فيه حتى النهاية. |
| 2711 | AI-draft | Clarity & Visibility | الوضوح والظهور |
| 2712 | AI-draft | Inner Depth & Mystery | العمق الباطن والسرّ |
| 2713 | AI-draft | Honor your inner depths - not all must be revealed. | أكرِم أعماقك الباطنة - فليس كل شيء يُكشف. |
| 2714 | AI-draft | Leadership & Governance | القيادة والتدبير |
| 2715 | AI-draft | Lead with wisdom - good governance serves all. | قُد بالحكمة - فحسن التدبير يخدم الجميع. |
| 2716 | AI-draft | Supreme Excellence | الإحسان الأعلى |
| 2717 | AI-draft | Aim for the highest - supreme excellence is achievable. | اقصد الأعلى - فالإحسان ممكن. |
| 2718 | AI-draft | The Source of Goodness | البَرّ |
| 2719 | AI-draft | Goodness & Kindness | الخير واللطف |
| 2720 | AI-draft | Be a source of goodness - kindness ripples outward. | كن مصدر خير - فاللطف يتّسع أثره. |
| 2721 | AI-draft | Forgiveness & New Chances | المغفرة والفرص الجديدة |
| 2722 | AI-draft | Justice & Retribution | العدل والجزاء |
| 2723 | AI-draft | Trust that justice will prevail - leave vengeance to the Divine. | ثق بأن العدل سيقوم - ودع الانتقام لله. |
| 2724 | AI-draft | Complete Pardon | العفو التام |
| 2725 | AI-draft | Pardon completely - let go of past grievances. | اعفُ تمامًا - وتخلَّ عن مظالم الماضي. |
| 2726 | AI-draft | Deep Compassion | الرأفة العميقة |
| 2727 | AI-draft | Sovereignty & Dominion | الملك والسلطان |
| 2728 | AI-draft | Rule your inner kingdom - master yourself first. | احكم مملكتك الباطنة - وأتقِن نفسك أولًا. |
| 2729 | AI-draft | Combine strength with kindness - majesty and grace together. | اجمع بين القوة واللطف - الجلال والجمال معًا. |
| 2730 | AI-draft | Fairness & Equity | القسط والإنصاف |
| 2731 | AI-draft | Unity & Gathering | الجمع والتأليف |
| 2732 | AI-draft | Abundance & Wealth | الغنى والوفرة |
| 2733 | AI-draft | Recognize your inherent richness - abundance is within. | اعرف ما أودعه الله فيك من غنى - فالغنى غنى النفس. |
| 2734 | AI-draft | Enrichment & Prosperity | الإغناء والرخاء |
| 2735 | AI-draft | Enrich the lives of others - prosperity multiplies when shared. | أغنِ حياة الآخرين - فالرخاء يتضاعف حين يُشارَك. |
| 2736 | AI-draft | Protection from Harm | الحفظ من الأذى |
| 2737 | AI-draft | Set healthy boundaries - protection is not rejection. | ضع حدودًا صحّية - فالحماية ليست رفضًا. |
| 2738 | AI-draft | The Distresser | الضارّ |
| 2739 | AI-draft | Trials & Tests | الابتلاءات والاختبارات |
| 2740 | AI-draft | Grow through challenges - difficulties strengthen character. | انمُ بالتحدّيات - فالصعاب تقوّي الخُلق. |
| 2741 | AI-draft | The Benefactor | النافع |
| 2742 | AI-draft | Benefit & Usefulness | النفع والفائدة |
| 2743 | AI-draft | Illumination & Guidance | الإنارة والهداية |
| 2744 | AI-draft | Guidance & Direction | الهداية والتوجيه |
| 2745 | AI-draft | The Incomparable | البديع |
| 2746 | AI-draft | Uniqueness & Originality | التفرّد والأصالة |
| 2747 | AI-draft | Embrace your uniqueness - you are incomparable. | تقبّل تفرّدك - فقد خلقك الله على صورة لا تتكرّر. |
| 2748 | AI-draft | Permanence & Legacy | الدوام والإرث |
| 2749 | AI-draft | Create lasting impact - build a legacy that endures. | اترك أثرًا باقيًا - وابنِ إرثًا يدوم. |
| 2750 | AI-draft | Inheritance & Legacy | الميراث والإرث |
| 2751 | AI-draft | Honor what you inherit - pass on wisdom to the next generation. | أكرِم ما ورثت - وانقل الحكمة إلى الجيل التالي. |
| 2752 | AI-draft | The Righteous Guide | الرشيد |
| 2753 | AI-draft | Right Guidance | الرشد |
| 2754 | AI-draft | Walk the right path - righteousness is its own reward. | اسلك الطريق المستقيم - فالاستقامة جزاء نفسها. |
| 2755 | AI-draft | Patience & Endurance | الصبر والتحمّل |
| 2756 | AI-draft | Cultivate patience - endure trials with grace and steadfastness. | نمِّ الصبر - واحتمل الابتلاءات برضا وثبات. |
| 2757 | AI-draft | The Beneficent, The Merciful | الرحمن الرحيم |
| 2758 | AI-draft | Complete Divine Mercy | الرحمة الإلهية التامّة |
| 2759 | AI-draft | The culmination of all Divine Names - embody complete mercy and compassion. | خلاصة الأسماء الحسنى - تخلّق بالرحمة والرأفة التامّتين. |
| 2760 | AI-draft | 📝 Letter Guide Panel | 📝 لوحة دليل الحروف |
| 2761 | AI-draft | Comprehensive guide to Arabic letters coming soon... | دليل شامل للحروف العربية قريبًا... |
| 2762 | AI-draft | The Science of Letters - traditional Islamic discipline studying the spiritual and numerical significance of Arabic letters | علم الحروف - علم إسلامي تقليدي يدرس الدلالة الروحية والعددية للحروف العربية |
| 2763 | AI-draft | Numerical value system for Arabic letters, used since pre-Islamic times | نظام القيم العددية للحروف العربية، المستعمل منذ ما قبل الإسلام |
| 2764 | AI-draft | Reduced Root - the Kabīr reduced to a single digit (1-9), revealing the spiritual station | الجذر المختزل - الكبير مختزلًا إلى رقم واحد (1-9)، يدلّ على المقام الروحي |
| 2765 | ✅ reviewed | Elemental Value - number reduced modulo 9 determining primary element and temperament | قيمة العنصر - العدد بباقي القسمة على 9، يحدّد العنصر الأساسي والطبع |
| 2766 | AI-draft | Mysterious letters at the beginning of certain Qur'anic surahs (like Alif-Lām-Mīm) | الحروف المقطّعة في أوائل بعض سور القرآن (مثل الم) |
| 2767 | AI-draft | Personal nature determined by the balance of four elements (Fire, Earth, Air, Water) | الطبع الشخصي المحدَّد بتوازن العناصر الأربعة (النار، التراب، الهواء، الماء) |
| 2768 | AI-draft | Key terms in the Science of Letters | مصطلحات أساسية في علم الحروف |
| 2769 | AI-draft | These terms are used throughout your name destiny analysis | تُستعمل هذه المصطلحات في تحليل مسار اسمك كله |
| 2770 | AI-draft | Name Destiny Learning Center | مركز تعلّم مسار الاسم |
| 2771 | AI-draft | Discover the spiritual wisdom encoded in Arabic letters | اكتشف الحكمة الروحية في الحروف العربية |
| 2772 | AI-draft | What is ʿIlm al-Ḥurūf? | ما علم الحروف؟ |
| 2773 | ✅ reviewed | ʿIlm al-Ḥurūf (علم الحروف), or the 'Science of Letters', is a traditional Islamic discipline that studies the spiritual and numerical significance of Arabic letters. Each letter of the Arabic alphabet carries not only a sound, but also a numerical value (Abjad system) and elemental qualities. | علم الحروف علم إسلامي تقليدي يدرس الدلالة الروحية والعددية للحروف العربية. فلكل حرف من حروف العربية صوت، وقيمة عددية (نظام الأبجد)، وصفات مرتبطة بالعناصر. |
| 2774 | AI-draft | This science was developed by Islamic scholars over centuries, including Ibn al-ʿArabī, al-Būnī, and al-Ghazālī. It's used for spiritual contemplation, name analysis, and understanding hidden meanings in the Qur'anic text. | طوّر هذا العلم علماء مسلمون عبر قرون، منهم ابن عربي والبوني والغزالي. ويُستعمل للتأمّل الروحي وتحليل الأسماء وتدبّر المعاني الخفيّة في النصّ القرآني. |
| 2775 | AI-draft | Core Principles | المبادئ الأساسية |
| 2776 | AI-draft | Each Arabic letter has a unique numerical value (Abjad) | لكل حرف عربي قيمة عددية فريدة (الأبجد) |
| 2777 | AI-draft | Letters are associated with the four elements (Fire, Earth, Air, Water) | ترتبط الحروف بالعناصر الأربعة (النار، التراب، الهواء، الماء) |
| 2778 | AI-draft | Names reveal spiritual patterns and personal qualities | تكشف الأسماء أنماطًا روحية وصفات شخصية |
| 2779 | AI-draft | This science is used for reflection, not fortune-telling | يُستعمل هذا العلم للتأمّل لا للعرافة |
| 2780 | AI-draft | History & Tradition | التاريخ والتراث |
| 2781 | AI-draft | Letters in Islamic Tradition | الحروف في التراث الإسلامي |
| 2782 | AI-draft | In Islamic tradition, letters are seen as carriers of deep spiritual meanings. The Qur'an itself begins several surahs with mysterious letters (al-Ḥurūf al-Muqaṭṭaʿa) like Alif-Lām-Mīm (الم), whose meanings have been contemplated by scholars for centuries. | في التراث الإسلامي تُعدّ الحروف حاملة لمعانٍ روحية عميقة. والقرآن نفسه يفتتح سورًا بحروف مقطّعة مثل الم، تأمّل العلماء معانيها قرونًا. |
| 2783 | AI-draft | Key Scholars | أعلام العلماء |
| 2784 | AI-draft | The great Sufi mystic wrote extensively on the spiritual significance of letters in works like al-Futūḥāt al-Makkiyya. | كتب الصوفي الكبير كثيرًا عن الدلالة الروحية للحروف في مؤلّفات مثل «الفتوحات المكية». |
| 2785 | AI-draft | Author of Shams al-Maʿārif, a major text on the science of letters and their spiritual applications. | صاحب «شمس المعارف»، من أبرز المصنّفات في علم الحروف وتطبيقاته الروحية. |
| 2786 | AI-draft | Explored the spiritual dimensions of language and writing in his theological work. | تناول الأبعاد الروحية للّغة والكتابة في مؤلّفه العقدي. |
| 2787 | AI-draft | Spiritual Perspective | المنظور الروحي |
| 2788 | AI-draft | ʿIlm al-Ḥurūf is seen as a tool for contemplation and self-reflection, not a means of predicting the future. It helps to: | يُعدّ علم الحروف أداة للتأمّل ومحاسبة النفس، لا وسيلة للتنبّؤ بالمستقبل. وهو يعين على: |
| 2789 | AI-draft | Understand the spiritual qualities encoded in your name | فهم الصفات الروحية في اسمك |
| 2790 | ✅ reviewed | Contemplate your elemental nature and temperament | التأمّل في طبيعة عنصرك ومزاجك |
| 2791 | AI-draft | Discover resonances with Divine Names | اكتشاف الرنين مع الأسماء الحسنى |
| 2792 | AI-draft | Reflect on your unique spiritual path | التأمّل في طريقك الروحي الخاص |
| 2793 | AI-draft | How Calculations Work | كيف تجري الحسابات |
| 2794 | AI-draft | The Abjad system assigns a unique numerical value to each Arabic letter. These values are used to calculate several key numbers. | يجعل نظام الأبجد لكل حرف عربي قيمة عددية فريدة، وتُستعمل هذه القيم لحساب عدة أعداد أساسية. |
| 2795 | AI-draft | Letter values from 1 to 1000: | قيم الحروف من 1 إلى 1000: |
| 2796 | AI-draft | The sum of all letter values in your name. Represents your total spiritual potential. | مجموع قيم كل حروف اسمك. ويمثّل إمكانك الروحي الكلي. |
| 2797 | AI-draft | The Kabīr reduced to a single digit (1-9). Reveals your spiritual station and destiny path. | الكبير مختزلًا إلى رقم واحد (1-9). ويكشف مقامك الروحي وطريق مسارك. |
| 2798 | ✅ reviewed | 3. Ḥadath (Elemental Value - الحدث) | 3. الحدث (قيمة العنصر) |
| 2799 | AI-draft | Reduced modulo 9 (1-9). Determines your primary element and temperament. | بباقي القسمة على 9 (1-9). ويحدّد عنصرك الأساسي وطبعك. |
| 2800 | AI-draft | 4. Elemental Letter Distribution | 4. توزيع الحروف على العناصر |
| 2801 | AI-draft | Is this fortune-telling? | هل هذه عرافة؟ |
| 2802 | AI-draft | No. ʿIlm al-Ḥurūf is a tool for contemplation and self-reflection, not predicting the future. It's a way to understand the spiritual qualities and patterns encoded in your name. | لا. علم الحروف أداة للتأمّل ومحاسبة النفس، لا للتنبّؤ بالمستقبل. إنه طريقة لفهم الصفات والأنماط الروحية في اسمك. |
| 2803 | AI-draft | ʿIlm al-Ḥurūf is rooted in Islamic tradition and uses the Arabic Abjad system with 28 letters. Western numerology uses the Pythagorean system with 26 Latin letters. The philosophical and spiritual approaches are also different. | علم الحروف متجذّر في التراث الإسلامي، ويستعمل نظام الأبجد العربي بحروفه الثمانية والعشرين. أما علم الأعداد الغربي فيستعمل النظام الفيثاغوري بالحروف اللاتينية الستة والعشرين. والمنهجان الفلسفي والروحي مختلفان أيضًا. |
| 2804 | AI-draft | What is the Maghribi tradition? | ما التراث المغربي؟ |
| 2805 | AI-draft | In the Abjad system, each Arabic letter has a numerical value. Your name, written in Arabic, can be converted to numbers. These numbers reveal spiritual patterns and qualities encoded in your name. | في نظام الأبجد لكل حرف عربي قيمة عددية. فيمكن تحويل اسمك المكتوب بالعربية إلى أعداد، وتكشف هذه الأعداد أنماطًا وصفات روحية في اسمك. |
| 2806 | AI-draft | Yes, but for the most meaningful results, use your full name as it appears on your birth certificate, written in Arabic. You can also analyze your mother's name to see maternal influence. | نعم، لكن لأفضل النتائج استعمل اسمك الكامل كما في شهادة الميلاد مكتوبًا بالعربية. ويمكنك أيضًا تحليل اسم أمك لترى أثر الأم. |
| 2807 | AI-draft | ʿIlm al-Ḥurūf is a tool for spiritual reflection and personal contemplation. It doesn't replace prayer, consulting scholars, or making practical decisions. Use it as a guide to better understand yourself. | علم الحروف أداة للتأمّل الروحي والتدبّر الشخصي. ولا يغني عن الدعاء ولا عن سؤال أهل العلم ولا عن اتّخاذ القرارات العملية. فاجعله دليلًا لفهم نفسك أكثر. |
| 2808 | AI-draft | Palindrome - reads same forwards and backwards | متناظر - يُقرأ طردًا وعكسًا سواء |
| 2809 | AI-draft | Balance and symmetry - your path has natural harmony. What appears different from various angles is fundamentally the same. | التوازن والتناظر - في طريقك انسجام طبيعي. فما يبدو مختلفًا من زوايا متعدّدة هو في أصله واحد. |
| 2810 | AI-draft | Ascending sequence - digits increase in order | تسلسل تصاعدي - الأرقام تتزايد بالترتيب |
| 2811 | AI-draft | Progressive growth - your journey is one of steady upward development. Each step builds naturally on the previous. | نموّ متدرّج - رحلتك رحلة ارتقاء ثابت، كل خطوة تُبنى على سابقتها. |
| 2812 | AI-draft | Descending sequence - digits decrease in order | تسلسل تنازلي - الأرقام تتناقص بالترتيب |
| 2813 | AI-draft | Refinement and distillation - your path involves releasing the unnecessary to reach essence. Simplification leads to clarity. | التهذيب والتصفية - في طريقك تخلٍّ عمّا لا يلزم للوصول إلى الجوهر. والتبسيط يقود إلى الوضوح. |
| 2814 | AI-draft | Amplified energy of | طاقة مضاعفة للعدد |
| 2815 | AI-draft | - this number carries intensified spiritual significance. The universe emphasizes this message. | - لهذا العدد دلالة روحية مكثّفة، فتأمّل رسالته. |
| 2816 | AI-draft | Significant repetition detected in digits | تكرار ملحوظ في الأرقام |
| 2817 | AI-draft | Emphasis and reinforcement - certain energies in your path are being highlighted and strengthened. | تأكيد وتقوية - بعض الطاقات في طريقك تُبرَز وتُقوّى. |
| 2818 | AI-draft | Angelic number pattern - repeating sequence | نمط عدد متكرّر |
| 2819 | AI-draft | Divine attention - this pattern often appears when spiritual guidance is near. Pay attention to synchronicities. | لفتة للتأمّل - قد يذكّرك هذا النمط بالانتباه إلى ما حولك من آيات ومعانٍ. |
| 2820 | AI-draft | Multiple of sacred number(s): | مضاعف لعدد (أعداد) مميّز: |
| 2821 | AI-draft | Connected to Islamic sacred numerology ( | متّصل بالأعداد المميّزة في التراث الإسلامي ( |
| 2822 | AI-draft | ). Your value resonates with traditional spiritual significance. | ). وقيمتك تتناغم مع دلالة روحية تقليدية. |
| 2823 | AI-draft | Mirror number | العدد المعكوس |
| 2824 | AI-draft | is significant | له دلالة |
| 2825 | AI-draft | , creating a hidden connection. What you seek may be found by looking at things in reverse. | ، فيصنع صلة خفيّة. وقد تجد ما تطلبه بالنظر إلى الأمور من الجهة الأخرى. |
| 2826 | AI-draft | Your number carries perfect symmetry and amplification - a rare spiritual alignment indicating mastery and completion. | لعددك تناظر تامّ وتضاعف - انسجام روحي نادر يدلّ على الإتقان والتمام. |
| 2827 | AI-draft | Progressive spiritual development aligned with sacred tradition - you are on a well-trodden path of enlightenment. | نموّ روحي متدرّج منسجم مع التراث - أنت على طريق مسلوك من طرق السير إلى الله. |
| 2828 | AI-draft | The angels speak through numbers - this is a sign to trust your intuition and pay attention to subtle messages. | الأعداد مجال للتأمّل - فاجعل هذا تذكيرًا بالإصغاء إلى حدسك وملاحظة المعاني الدقيقة، والعلم عند الله. |
| 2829 | AI-draft | Multiple patterns converge in your number - this indicates a pivotal moment of spiritual significance in your journey. | تلتقي في عددك أنماط متعدّدة - وقد يكون هذا وقفة مهمّة للتأمّل في رحلتك. |
| 2830 | AI-draft | patterns - aligned spiritual energies | أنماط - طاقات روحية منسجمة |
| 2831 | AI-draft | ) are mirror numbers - complementary spiritual forces | ) أعداد معكوسة - قوى روحية متكاملة |
| 2832 | AI-draft | which has | الذي له |
| 2833 | AI-draft | pattern(s) - combined energy creates harmony | نمط (أنماط) - الطاقة المجتمعة تصنع انسجامًا |
| 2834 | AI-draft | Translation not available. Please visit Quran.com for the full translation. | الترجمة غير متاحة. يُرجى زيارة Quran.com للترجمة الكاملة. |
| 2835 | AI-draft | Invalid Hadad value - must be positive | قيمة الحدد غير صالحة - يجب أن تكون موجبة |
| 2836 | AI-draft | not found in metadata | غير موجود في البيانات |
| 2837 | AI-draft | This verse emerged through numerical resonance between your name and the Qur'anic structure. | ظهرت هذه الآية من رنين عددي بين اسمك وبنية النصّ القرآني. |
| 2838 | AI-draft | Reflect upon it as a potential sign or reminder in your spiritual journey. | تدبّرها تذكرةً في رحلتك الروحية. |
| 2839 | AI-draft | Remember: this is for contemplation, not divination. | تذكّر: هذا للتدبّر لا للكهانة. |
| 2840 | AI-draft | day enhances your energy | اليوم يعزّز طاقتك |
| 2841 | AI-draft | rules both hour and day (double power) | يحكم الساعة واليوم معًا (قوة مضاعفة) |
| 2842 | AI-draft | brings beneficial energy | يجلب طاقة نافعة |
| 2843 | AI-draft | Current alignment is | الانسجام الحالي |
| 2844 | AI-draft | Next optimal window: | النافذة المثلى التالية: |
| 2845 | AI-draft | Talisman Timing Analysis | تحليل توقيت الوفق |
| 2846 | AI-draft | Optimal Day | اليوم الأمثل |
| 2847 | AI-draft | Optimal Hour | الساعة المثلى |
| 2848 | AI-draft | Upcoming Optimal Windows | النوافذ المثلى القادمة |
| 2849 | AI-draft | Alignment Score | درجة الانسجام |
| 2850 | AI-draft | Saturn hour | ساعة زحل |
| 2851 | AI-draft | Grounding, discipline, boundaries, ancestral wisdom | التجذّر، الانضباط، الحدود، حكمة الأسلاف |
| 2852 | ✅ reviewed | Expansion, abundance, wisdom, good fortune | الاتساع، الوفرة، الحكمة، التوفيق |
| 2853 | AI-draft | Mars hour | ساعة المريخ |
| 2854 | AI-draft | Venus hour | ساعة الزهرة |
| 2855 | AI-draft | Communication, intellect, travel, commerce | التواصل، العقل، السفر، التجارة |
| 2856 | AI-draft | Moon hour | ساعة القمر |
| 2857 | AI-draft | Intuition, emotions, dreams, receptivity | الحدس، العواطف، المنامات، التلقّي |
| 2858 | AI-draft | Lo Shu (Saturn) | لو شو (زحل) |
| 2859 | AI-draft | Dürer (Jupiter) | دورر (المشتري) |
| 2860 | AI-draft | Composite (Sun) | مركّب (الشمس) |
| 2861 | AI-draft | Composite (Mercury) | مركّب (عطارد) |
| 2862 | AI-draft | Magic Square | الوفق |
| 2863 | AI-draft | Magic Constant | الثابت السحري (مجموع الصفّ) |
| 2864 | AI-draft | Intention | النيّة |
| 2865 | AI-draft | Created From | مأخوذ من |
| 2866 | AI-draft | Legacy | الإرث |
| 2867 | AI-draft | Eternal Wisdom | الحكمة الباقية |
| 2868 | AI-draft | Start fresh | ابدأ من جديد |
| 2869 | AI-draft | Listen deeply | أصغِ بعمق |
| 2870 | AI-draft | Find balance | جِد التوازن |
| 2871 | AI-draft | Communicate | تواصل |
| 2872 | AI-draft | Be adventurous | كن مغامرًا |
| 2873 | AI-draft | Serve family | اخدم الأسرة |
| 2874 | AI-draft | Spiritual Growth | النموّ الروحي |
| 2875 | AI-draft | Seek wisdom | اطلب الحكمة |
| 2876 | AI-draft | Meditate | تأمّل |
| 2877 | AI-draft | Study deeply | ادرس بعمق |
| 2878 | AI-draft | Achieve goals | حقّق الأهداف |
| 2879 | AI-draft | Lead powerfully | قُد بقوة |
| 2880 | AI-draft | Laziness & Negative Thinking | الكسل والتفكير السلبي |
| 2881 | AI-draft | Tendency toward shortcuts | الميل إلى الطرق المختصرة |
| 2882 | AI-draft | Difficulty completing tasks | صعوبة إتمام المهامّ |
| 2883 | AI-draft | Negative thought patterns | أنماط تفكير سلبية |
| 2884 | AI-draft | Struggles with discipline | صعوبة في الانضباط |
| 2885 | AI-draft | Dhikr for perseverance (Ya Sabūr) | ذكر للمثابرة (يا صبور) |
| 2886 | AI-draft | Reframe challenges positively | انظر إلى التحدّيات نظرة إيجابية |
| 2887 | AI-draft | Build consistent routines | ابنِ عادات ثابتة |
| 2888 | AI-draft | Abuse of Freedom | إساءة استعمال الحرية |
| 2889 | AI-draft | Excessive indulgence | الإفراط في الملذّات |
| 2890 | AI-draft | Seeking escape through substances or behaviors | الهروب بالمواد أو السلوكيات |
| 2891 | AI-draft | Practice moderation in all things. True freedom comes through self-discipline. | اعتدل في كل شيء. فالحرية الحقّة تأتي بضبط النفس. |
| 2892 | AI-draft | Fasting and abstinence practices | ممارسات الصيام والإمساك |
| 2893 | AI-draft | Dhikr for self-control (Ya Qabid) | ذكر لضبط النفس (يا قابض) |
| 2894 | AI-draft | Set healthy boundaries | ضع حدودًا صحّية |
| 2895 | AI-draft | Mindful consumption | استهلاك واعٍ |
| 2896 | AI-draft | Commit to one path deeply | التزم بطريق واحد بعمق |
| 2897 | AI-draft | Learning humility and proper use of power in relationships through ego dissolution. | تعلّم التواضع وحسن استعمال القوة في العلاقات بتذويب الأنا. |
| 2898 | AI-draft | Sudden relationship endings | نهايات مفاجئة للعلاقات |
| 2899 | AI-draft | Ego-driven decisions backfire | القرارات التي تحرّكها الأنا تنقلب على صاحبها |
| 2900 | AI-draft | Betrayals or abandonments | خيانات أو هجران |
| 2901 | AI-draft | Loss of status or position | فقدان المكانة أو المنصب |
| 2902 | AI-draft | Surrender the ego. Love selflessly. Build on spiritual foundation, not ego. | تخلَّ عن الأنا، وأحبب بإيثار، وابنِ على أساس روحي لا على الأنا. |
| 2903 | AI-draft | Dhikr for divine love (Ya Wadud) | ذكر للمحبّة (يا ودود) |
| 2904 | AI-draft | Serve without expectation | اخدم دون انتظار |
| 2905 | AI-draft | Meditate on impermanence | تأمّل في الفناء |
| 2906 | AI-draft | Forgive deeply and often | اعفُ بعمق وكثيرًا |
| 2907 | AI-draft | Learning to give rather than take, serve rather than dominate. | تعلّم العطاء بدل الأخذ، والخدمة بدل التسلّط. |
| 2908 | AI-draft | Difficulty asking for help | صعوبة طلب العون |
| 2909 | AI-draft | Loneliness despite achievements | الوحدة رغم الإنجازات |
| 2910 | AI-draft | Fear of dependency | الخوف من الاعتماد على الغير |
| 2911 | AI-draft | Learn to receive. Serve humbly. Recognize interdependence as divine design. | تعلّم أن تتلقّى، واخدم بتواضع، واعلم أن حاجة الناس بعضهم إلى بعض من سنن الله. |
| 2912 | AI-draft | Practice asking for help | تدرّب على طلب العون |
| 2913 | AI-draft | Dhikr for unity (Ya Wahid, Ya Ahad) | ذكر للوحدة (يا واحد، يا أحد) |
| 2914 | AI-draft | Join community service | شارك في خدمة المجتمع |
| 2915 | AI-draft | Share power willingly | شارك السلطة طوعًا |
| 2916 | AI-draft | Acknowledge others' contributions | اعترف بإسهامات الآخرين |
| 2917 | AI-draft | Seven heavens, seven earths | سبع سماوات وسبع أرضين |
| 2918 | AI-draft | Divine perfection and wholeness. Your name carries the frequency of completion. | التمام والكمال. ويحمل اسمك معنى الاكتمال. |
| 2919 | AI-draft | Months, Tribes, Imams | الشهور والأسباط والأئمة |
| 2920 | AI-draft | Twelve months, twelve springs | اثنا عشر شهرًا واثنتا عشرة عينًا |
| 2921 | AI-draft | Cosmic order and leadership. Your path involves guiding others. | النظام الكوني والقيادة. وفي طريقك إرشاد للآخرين. |
| 2922 | AI-draft | Quranic Miracle Number | العدد 19 في القرآن |
| 2923 | AI-draft | Mathematical pattern in Quran | نمط عددي في القرآن |
| 2924 | AI-draft | Divine signature. Your soul carries a special message for humanity. | علامة للتأمّل. لعلّ في طريقك رسالة نافعة للناس. |
| 2925 | AI-draft | Testing & Purification Period | مدّة الابتلاء والتزكية |
| 2926 | AI-draft | Nations, Elders, Completion | الأمم والشيوخ والتمام |
| 2927 | AI-draft | Seventy elders of Moses | السبعون الذين اختارهم موسى |
| 2928 | AI-draft | Wisdom keeper. You are meant to gather and share ancient knowledge. | حافظ للحكمة. لعلّك ممن يجمع المعرفة القديمة وينشرها. |
| 2929 | AI-draft | Names of Allah | أسماء الله |
| 2930 | AI-draft | Divine attributes. Your soul reflects the Beautiful Names. | الصفات الإلهية. لتكن روحك متخلّقة بمعاني الأسماء الحسنى. |
| 2931 | AI-draft | Surah Al-Ikhlas Value | قيمة سورة الإخلاص |
| 2932 | AI-draft | The Chapter of Sincerity | سورة الإخلاص |
| 2933 | AI-draft | Pure monotheism. Your essence is aligned with divine unity. | التوحيد الخالص. ليكن جوهرك قائمًا على التوحيد. |
| 2934 | AI-draft | Warriors of Badr | أهل بدر |
| 2935 | AI-draft | Spiritual warrior. You are here to stand for truth. | مجاهد للنفس. لتكن ممن يقوم بالحقّ. |
| 2936 | AI-draft | Bismillah al-Rahman al-Rahim | بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ |
| 2937 | AI-draft | Opening verse of Quran | الآية الأولى من القرآن |
| 2938 | AI-draft | Begin with grace. Your every action should start with divine remembrance. | ابدأ بالبركة. ليبدأ كل عمل لك بذكر الله. |
| 2939 | AI-draft | Symbolic Perfection | الكمال الرمزي |
| 2940 | AI-draft | Mastery incarnate. You are here to demonstrate perfection of soul. | الإتقان. لتكن ممن يسعى إلى كمال النفس. |
| 2941 | AI-draft | Military Leader | قائد عسكري |
| 2942 | AI-draft | Manager | مدير |
| 2943 | AI-draft | Pioneer in Tech | رائد في التقنية |
| 2944 | AI-draft | Subordinate roles | الأدوار التابعة |
| 2945 | AI-draft | Repetitive tasks | المهامّ المتكرّرة |
| 2946 | AI-draft | HR Professional | مختصّ في الموارد البشرية |
| 2947 | AI-draft | Isolated work | العمل المنعزل |
| 2948 | AI-draft | You excel at bringing people together and creating harmony in teams and relationships. | تتفوّق في جمع الناس وصنع الانسجام في الفرق والعلاقات. |
| 2949 | AI-draft | Public Speaker | متحدّث عام |
| 2950 | AI-draft | Entertainer | فنّان أداء |
| 2951 | AI-draft | Content Creator | صانع محتوى |
| 2952 | AI-draft | Silent, monotonous work | العمل الصامت الرتيب |
| 2953 | AI-draft | Strict corporate settings | بيئات الشركات الصارمة |
| 2954 | AI-draft | Environments that suppress creativity | البيئات التي تكبت الإبداع |
| 2955 | AI-draft | You're naturally expressive and thrive when you can communicate, create, and inspire others. | أنت معبّر بطبعك، وتزدهر حين تستطيع التواصل والإبداع وإلهام الآخرين. |
| 2956 | AI-draft | Administrator | إداري |
| 2957 | AI-draft | Planner | مخطّط |
| 2958 | AI-draft | Systems Designer | مصمّم أنظمة |
| 2959 | AI-draft | Chaotic, unstructured environments | البيئات الفوضوية غير المنظّمة |
| 2960 | AI-draft | Frequent travel | كثرة السفر |
| 2961 | AI-draft | Jobs without clear processes | الوظائف بلا إجراءات واضحة |
| 2962 | AI-draft | Travel Guide | مرشد سياحي |
| 2963 | AI-draft | Sales | المبيعات |
| 2964 | AI-draft | Event Planner | منظّم فعاليات |
| 2965 | AI-draft | PR Specialist | مختصّ علاقات عامة |
| 2966 | AI-draft | Flight Attendant | مضيف طيران |
| 2967 | AI-draft | Freelancer | عمل حرّ |
| 2968 | AI-draft | Routine desk jobs | وظائف المكتب الروتينية |
| 2969 | AI-draft | Micromanaged environments | البيئات كثيرة الرقابة |
| 2970 | AI-draft | You love variety and freedom, thriving in dynamic environments where you can explore and adapt. | تحبّ التنوّع والحرية، وتزدهر في البيئات الحيوية التي تستكشف فيها وتتكيّف. |
| 2971 | AI-draft | Caregiver | مقدّم رعاية |
| 2972 | AI-draft | Chef | طاهٍ |
| 2973 | AI-draft | Interior Designer | مصمّم داخلي |
| 2974 | AI-draft | Family Therapist | معالج أسري |
| 2975 | AI-draft | Hospitality Manager | مدير ضيافة |
| 2976 | AI-draft | Cut-throat competition | المنافسة الشرسة |
| 2977 | AI-draft | Highly individualistic roles | الأدوار الفردية جدًا |
| 2978 | AI-draft | You're naturally nurturing and responsible, finding fulfillment when you serve and care for others. | أنت راعٍ مسؤول بطبعك، وتجد رضاك في خدمة الآخرين ورعايتهم. |
| 2979 | AI-draft | Philosopher | فيلسوف |
| 2980 | AI-draft | Spiritual Guide | مرشد روحي |
| 2981 | AI-draft | Investigator | محقّق |
| 2982 | AI-draft | Data Scientist | عالم بيانات |
| 2983 | AI-draft | Superficial sales roles | أدوار المبيعات السطحية |
| 2984 | AI-draft | Overly social environments | البيئات المفرطة في الاختلاط |
| 2985 | AI-draft | You're analytical and introspective, excelling when you can dive deep into knowledge and mysteries. | أنت تحليلي متأمّل، تتفوّق حين تغوص في المعرفة والأسرار. |
| 2986 | AI-draft | Finance Manager | مدير مالي |
| 2987 | AI-draft | Real Estate Developer | مطوّر عقاري |
| 2988 | AI-draft | Business Owner | صاحب عمل |
| 2989 | AI-draft | Investment Banker | مصرفي استثمار |
| 2990 | AI-draft | Attorney | محامٍ |
| 2991 | AI-draft | Producer | منتج |
| 2992 | AI-draft | Low-responsibility roles | الأدوار قليلة المسؤولية |
| 2993 | AI-draft | You're ambitious and results-driven, excelling at managing resources and achieving material success. | أنت طموح موجَّه بالنتائج، تتفوّق في إدارة الموارد وتحقيق النجاح المادي. |
| 2994 | AI-draft | Non-Profit Leader | قائد في العمل الخيري |
| 2995 | AI-draft | Global Advocate | مناصر عالمي |
| 2996 | AI-draft | Philanthropist | محسن |
| 2997 | AI-draft | Environmentalist | ناشط بيئي |
| 2998 | AI-draft | Narrow, self-serving work | العمل الضيّق الأناني |
| 2999 | AI-draft | Materialistic environments | البيئات المادية |
| 3000 | AI-draft | Jobs lacking purpose | الوظائف بلا غاية |
| 3001 | AI-draft | You're compassionate and globally-minded, finding fulfillment when you serve humanity and create positive change. | أنت رحيم واسع الأفق، تجد رضاك في خدمة الناس وصنع تغيير نافع. |
| 3002 | AI-draft | Motivational Speaker | متحدّث تحفيزي |
| 3003 | AI-draft | Visionary Leader | قائد صاحب رؤية |
| 3004 | AI-draft | Intuitive Coach | مدرّب حدسي |
| 3005 | AI-draft | Psychic | صاحب فراسة |
| 3006 | AI-draft | Inspirational Writer | كاتب ملهِم |
| 3007 | AI-draft | Mundane, routine work | العمل الرتيب العادي |
| 3008 | AI-draft | Materially-focused jobs | الوظائف المادية الصرفة |
| 3009 | AI-draft | Environments that suppress intuition | البيئات التي تكبت الحدس |
| 3010 | AI-draft | You're a spiritual visionary who inspires others and carries messages from higher realms. | أنت صاحب رؤية روحية تُلهم الآخرين وتحمل معاني سامية. |
| 3011 | AI-draft | Large-Scale Developer | مطوّر مشاريع كبرى |
| 3012 | AI-draft | Visionary CEO | رئيس تنفيذي صاحب رؤية |
| 3013 | AI-draft | International Leader | قائد دولي |
| 3014 | AI-draft | Founder of Institutions | مؤسّس مؤسّسات |
| 3015 | AI-draft | Work without legacy potential | العمل بلا أثر باقٍ |
| 3016 | AI-draft | You're a master manifestor who builds lasting structures and turns grand visions into reality. | أنت بانٍ متقن تُقيم بنى دائمة وتحوّل الرؤى الكبيرة إلى واقع. |
| 3017 | AI-draft | Humanitarian Leader | قائد إنساني |
| 3018 | AI-draft | Universal Counselor | مستشار شامل |
| 3019 | AI-draft | Transformational Coach | مدرّب تحوّلي |
| 3020 | AI-draft | Compassionate Leader | قائد رحيم |
| 3021 | AI-draft | Global Educator | معلّم عالمي |
| 3022 | AI-draft | Work lacking compassion | العمل الخالي من الرحمة |
| 3023 | AI-draft | You're a master teacher who guides humanity with unconditional love and profound wisdom. | أنت معلّم متقن يرشد الناس بمحبّة غير مشروطة وحكمة عميقة. |
| 3024 | AI-draft | Practice patience - not everything needs to be done right now | تحلَّ بالصبر - فليس كل شيء يلزم الآن |
| 3025 | AI-draft | Balance independence with collaboration | وازِن الاستقلال بالتعاون |
| 3026 | AI-draft | Schedule regular breaks to avoid burnout | خصّص استراحات منتظمة لتجنّب الإنهاك |
| 3027 | AI-draft | Set clear boundaries - it's okay to say no | ضع حدودًا واضحة - لا بأس أن تقول لا |
| 3028 | AI-draft | Speak up for your own needs, not just others' | عبّر عن حاجاتك أنت، لا حاجات الآخرين وحدها |
| 3029 | AI-draft | Finish projects before starting new ones | أتمّ المشاريع قبل البدء بغيرها |
| 3030 | AI-draft | Practice focused work without distractions | اعمل بتركيز بلا مشتّتات |
| 3031 | AI-draft | Don't scatter your energy - choose priorities | لا تبعثر طاقتك - اختر أولوياتك |
| 3032 | AI-draft | Allow room for spontaneity and flexibility | اترك مجالًا للعفوية والمرونة |
| 3033 | AI-draft | Take calculated risks instead of always playing safe | خاطر مخاطرة محسوبة بدل الحذر الدائم |
| 3034 | AI-draft | Commit to one thing at a time instead of juggling many | التزم بأمر واحد في كل مرّة بدل الكثير |
| 3035 | AI-draft | Ground yourself daily through meditation or nature | تجذّر كل يوم بالتأمّل أو الطبيعة |
| 3036 | AI-draft | Balance material success with spiritual growth | وازِن النجاح المادي بالنموّ الروحي |
| 3037 | AI-draft | Lead with compassion, not just authority | قُد بالرحمة لا بالسلطة وحدها |
| 3038 | AI-draft | Set healthy boundaries - you can't save everyone | ضع حدودًا صحّية - لا يمكنك إنقاذ الجميع |
| 3039 | AI-draft | Ground yourself in practical daily tasks | تجذّر بالمهامّ اليومية العملية |
| 3040 | AI-draft | Take care of your own needs before serving others | اعتنِ بحاجاتك قبل خدمة الآخرين |
| 3041 | AI-draft | Release attachment to outcomes - let go when needed | تخلَّ عن التعلّق بالنتائج - ودَع حين يلزم |
| 3042 | AI-draft | Balance giving with receiving | وازِن العطاء بالأخذ |
| 3043 | AI-draft | Ground your visions in practical action | جذّر رؤاك في عمل عملي |
| 3044 | AI-draft | Balance spiritual work with physical self-care | وازِن العمل الروحي بالعناية بالبدن |
| 3045 | AI-draft | Trust divine timing - you don't have to rush | ثق بتوقيت الله - لا داعي للعجلة |
| 3046 | AI-draft | Balance grand vision with attention to details | وازِن الرؤية الكبيرة بالانتباه إلى التفاصيل |
| 3047 | AI-draft | Rest regularly - even master builders need recovery | استرح بانتظام - حتى كبار البنّائين يحتاجون إلى التعافي |
| 3048 | AI-draft | Teach without sacrificing your own wellbeing | علّم دون التضحية بعافيتك |
| 3049 | AI-draft | Set clear boundaries even while serving | ضع حدودًا واضحة حتى وأنت تخدم |
| 3050 | AI-draft | Remember you're human too - rest and restore | تذكّر أنك بشر أيضًا - استرح وتعافَ |
| 3051 | AI-draft | Can become domineering or overly controlling | قد تصبح متسلّطًا أو مفرطًا في السيطرة |
| 3052 | AI-draft | May struggle with collaboration or listening to others | قد تجد صعوبة في التعاون أو الإصغاء للآخرين |
| 3053 | AI-draft | Tendency to burn out from doing everything alone | ميل إلى الإنهاك من فعل كل شيء وحدك |
| 3054 | AI-draft | May come across as aggressive or insensitive | قد تبدو عدوانيًا أو قليل المراعاة |
| 3055 | AI-draft | Can become overly dependent on others' approval | قد تعتمد كثيرًا على استحسان الآخرين |
| 3056 | AI-draft | Risk of being too passive or indecisive | خطر السلبية أو التردّد المفرط |
| 3057 | AI-draft | May struggle with standing up for yourself | قد تجد صعوبة في الدفاع عن نفسك |
| 3058 | AI-draft | Can scatter energy across too many projects | قد تبعثر طاقتك على مشاريع كثيرة |
| 3059 | AI-draft | May use humor or charm to avoid depth | قد تستعمل الدعابة أو الجاذبية لتجنّب العمق |
| 3060 | AI-draft | Risk of being superficial or lacking follow-through | خطر السطحية أو عدم المتابعة |
| 3061 | AI-draft | May get stuck in routines and miss opportunities | قد تعلق في الروتين وتفوتك الفرص |
| 3062 | AI-draft | Risk of being overly critical or perfectionistic | خطر النقد المفرط أو الكمالية |
| 3063 | AI-draft | Tendency to overwork and neglect play | ميل إلى الإفراط في العمل وإهمال الترويح |
| 3064 | AI-draft | Can become restless or commitment-phobic | قد تصبح قلقًا أو نافرًا من الالتزام |
| 3065 | AI-draft | Risk of being impulsive or reckless | خطر الاندفاع أو التهوّر |
| 3066 | AI-draft | Can become a martyr or overly self-sacrificing | قد تفرط في التضحية بنفسك |
| 3067 | AI-draft | Risk of perfectionism in home or relationships | خطر الكمالية في البيت أو العلاقات |
| 3068 | AI-draft | Tendency to feel unappreciated or resentful | ميل إلى الشعور بعدم التقدير أو الاستياء |
| 3069 | AI-draft | May struggle with receiving or asking for help | قد تجد صعوبة في تلقّي العون أو طلبه |
| 3070 | AI-draft | Can become isolated or emotionally distant | قد تصبح منعزلًا أو بعيدًا عاطفيًا |
| 3071 | AI-draft | Risk of being skeptical or distrustful | خطر الشكّ أو عدم الثقة |
| 3072 | AI-draft | Tendency to intellectualize emotions instead of feeling them | ميل إلى عقلنة المشاعر بدل الإحساس بها |
| 3073 | AI-draft | May struggle with vulnerability or intimacy | قد تجد صعوبة في الانكشاف أو القرب |
| 3074 | AI-draft | Can become power-hungry or materialistic | قد تصبح متعطّشًا للسلطة أو ماديًا |
| 3075 | AI-draft | May use people as stepping stones | قد تتّخذ الناس سلّمًا |
| 3076 | AI-draft | Tendency to equate worth with success or money | ميل إلى قياس القيمة بالنجاح أو المال |
| 3077 | AI-draft | Can become overly idealistic or impractical | قد تصبح مفرطًا في المثالية أو بعيدًا عن الواقع |
| 3078 | AI-draft | Risk of emotional overwhelm from world's pain | خطر الإرهاق العاطفي من آلام العالم |
| 3079 | AI-draft | Tendency to give until depleted | ميل إلى العطاء حتى النفاد |
| 3080 | AI-draft | May struggle with letting go or completion | قد تجد صعوبة في التخلّي أو الإتمام |
| 3081 | AI-draft | Can feel misunderstood or alienated | قد تشعر بأنك غير مفهوم أو غريب |
| 3082 | AI-draft | May struggle to ground visions into reality | قد تجد صعوبة في تحويل الرؤى إلى واقع |
| 3083 | AI-draft | Risk of spiritual bypassing or escapism | خطر الهروب الروحي من الواقع |
| 3084 | AI-draft | Tendency to feel overwhelmed by sensitivity | ميل إلى الشعور بالإرهاق من فرط الحساسية |
| 3085 | AI-draft | May struggle with practical, mundane tasks | قد تجد صعوبة في المهامّ العملية العادية |
| 3086 | AI-draft | May struggle with patience for long-term building | قد تجد صعوبة في الصبر على البناء الطويل |
| 3087 | AI-draft | Risk of burnout from massive ambitions | خطر الإنهاك من الطموحات الهائلة |
| 3088 | AI-draft | May struggle with starting small or being content | قد تجد صعوبة في البدء صغيرًا أو القناعة |
| 3089 | AI-draft | Can become overwhelmed by responsibility to humanity | قد ترهقك مسؤوليتك تجاه الناس |
| 3090 | AI-draft | Risk of spiritual exhaustion from constant giving | خطر الإنهاك الروحي من العطاء الدائم |
| 3091 | AI-draft | Tendency to hold yourself to impossible standards | ميل إلى مطالبة نفسك بمعايير مستحيلة |
| 3092 | AI-draft | May struggle with accepting human limitations | قد تجد صعوبة في تقبّل حدود البشر |
| 3093 | AI-draft | Daily affirmation: "I lead with courage and humility." Practice meditation to balance assertiveness with inner peace. | تذكير يومي: «أقود بشجاعة وتواضع». وتأمّل لتوازن الحزم بالسكينة الباطنة. |
| 3094 | AI-draft | Start one new initiative or project | ابدأ مبادرة أو مشروعًا جديدًا واحدًا |
| 3095 | AI-draft | Ask for help with one task instead of doing it alone | اطلب العون في مهمّة واحدة بدل إنجازها وحدك |
| 3096 | AI-draft | Avoid becoming domineering or refusing to collaborate. Balance independence with teamwork. | تجنّب التسلّط أو رفض التعاون. وازِن الاستقلال بالعمل الجماعي. |
| 3097 | AI-draft | Daily affirmation: "I honor my own needs while serving others." Practice boundary-setting as spiritual discipline. | تذكير يومي: «أكرم حاجاتي وأنا أخدم الآخرين». وتدرّب على وضع الحدود رياضةً روحية. |
| 3098 | AI-draft | Express your opinion even if it differs from the group | عبّر عن رأيك ولو خالف الجماعة |
| 3099 | AI-draft | Daily affirmation: "I express my truth with joy and discipline." Practice focused creativity sessions. | تذكير يومي: «أعبّر عن حقيقتي بفرح وانضباط». وخصّص جلسات إبداع مركّزة. |
| 3100 | AI-draft | Finish one creative project before starting another | أتمّ مشروعًا إبداعيًا قبل أن تبدأ غيره |
| 3101 | AI-draft | Avoid scattering your energy or using charm to escape depth. Focus brings power. | تجنّب بعثرة طاقتك أو الهروب من العمق بالجاذبية. فالتركيز قوة. |
| 3102 | AI-draft | Daily affirmation: "I build with patience and trust the process." Practice yoga or grounding exercises. | تذكير يومي: «أبني بصبر وأثق بالمسار». وتدرّب على تمارين التجذّر. |
| 3103 | AI-draft | Schedule time for play or spontaneity | خصّص وقتًا للترويح أو العفوية |
| 3104 | AI-draft | Daily affirmation: "I am free and grounded." Practice grounding meditation or nature walks. | تذكير يومي: «أنا حرّ ومتجذّر». وتأمّل تأمّل تجذّر أو امشِ في الطبيعة. |
| 3105 | AI-draft | Commit to one thing and see it through this week | التزم بأمر واحد وأتمّه هذا الأسبوع |
| 3106 | AI-draft | Create one simple daily routine for stability | ضع عادة يومية بسيطة واحدة للثبات |
| 3107 | AI-draft | Ground yourself through physical exercise or gardening | تجذّر بالتمرين البدني أو البستنة |
| 3108 | AI-draft | Avoid restlessness or commitment-phobia. True freedom comes from mastering discipline. | تجنّب القلق أو النفور من الالتزام. فالحرية الحقّة من إتقان الانضباط. |
| 3109 | AI-draft | Daily affirmation: "I give and receive with balance." Practice self-care rituals as spiritual practice. | تذكير يومي: «أعطي وآخذ بتوازن». واجعل العناية بنفسك عبادةً. |
| 3110 | AI-draft | Let someone solve their own problem this week | دع أحدًا يحلّ مشكلته بنفسه هذا الأسبوع |
| 3111 | AI-draft | Say no to one responsibility that isn't yours | ارفض مسؤولية واحدة ليست لك |
| 3112 | AI-draft | Accept help from someone graciously | اقبل العون من أحد بلطف |
| 3113 | AI-draft | Practice "good enough" instead of perfect in one area | اكتفِ بـ«الجيّد بما يكفي» بدل الكمال في مجال واحد |
| 3114 | AI-draft | Avoid martyrdom or controlling others "for their good." Let people have their own journey. | تجنّب التضحية المفرطة أو التحكّم بالآخرين «لمصلحتهم». دع الناس يسلكون طريقهم. |
| 3115 | AI-draft | Daily affirmation: "I trust my inner knowing." Practice contemplative prayer or silent meditation. | تذكير يومي: «أثق بمعرفتي الباطنة». وتدرّب على الدعاء التأمّلي أو التأمّل الصامت. |
| 3116 | AI-draft | Share one insight or teaching with someone | شارك فكرة أو درسًا مع أحد |
| 3117 | AI-draft | Practice feeling an emotion instead of analyzing it | تدرّب على الإحساس بشعور بدل تحليله |
| 3118 | AI-draft | Avoid isolation or emotional detachment. Connection is part of wisdom. | تجنّب العزلة أو الانفصال العاطفي. فالتواصل جزء من الحكمة. |
| 3119 | AI-draft | You are here to achieve, manifest abundance, and lead with power and integrity. | طريقك طريق الإنجاز وتحقيق الوفرة والقيادة بقوة ونزاهة. |
| 3120 | AI-draft | Daily affirmation: "I use power wisely and serve the highest good." Practice gratitude meditation. | تذكير يومي: «أستعمل القوة بحكمة وأخدم الخير الأسمى». وتأمّل تأمّل الشكر. |
| 3121 | AI-draft | Do one act of kindness without expecting return | اعمل معروفًا واحدًا دون انتظار مقابل |
| 3122 | AI-draft | Spend quality time with loved ones | اقضِ وقتًا طيبًا مع أحبّتك |
| 3123 | AI-draft | Lead with compassion in one situation this week | قُد برحمة في موقف واحد هذا الأسبوع |
| 3124 | AI-draft | Avoid workaholism or equating worth with achievement. You are enough as you are. | تجنّب إدمان العمل أو قياس قيمتك بالإنجاز. فأنت كافٍ كما أنت. |
| 3125 | AI-draft | Daily affirmation: "I serve with wisdom and boundaries." Practice loving-kindness meditation. | تذكير يومي: «أخدم بحكمة وحدود». وتأمّل تأمّل المحبّة والرحمة. |
| 3126 | AI-draft | Set one clear boundary around your giving | ضع حدًّا واضحًا واحدًا لعطائك |
| 3127 | AI-draft | Do one practical, grounded task | أنجز مهمّة عملية واحدة |
| 3128 | AI-draft | Let go of one thing you can't control | تخلَّ عن أمر واحد لا تملكه |
| 3129 | AI-draft | Practice receiving as well as giving | تدرّب على الأخذ كما تعطي |
| 3130 | AI-draft | Avoid depletion from over-giving. You can't pour from an empty cup. | تجنّب النفاد من فرط العطاء. ففاقد الشيء لا يعطيه. |
| 3131 | AI-draft | You are here to inspire, illuminate, and bring spiritual messages to humanity. | طريقك طريق الإلهام والإنارة وحمل المعاني الروحية إلى الناس. |
| 3132 | AI-draft | Daily affirmation: "I am a vessel of light grounded in reality." Practice visualization and grounding. | تذكير يومي: «أنا وعاء للنور متجذّر في الواقع». وتدرّب على التصوّر والتجذّر. |
| 3133 | AI-draft | Take one spiritual vision and create a practical first step | خذ رؤية روحية واحدة واصنع لها خطوة عملية أولى |
| 3134 | AI-draft | Protect your energy - say no to energy vampires | احفظ طاقتك - وقل لا لمن يستنزفها |
| 3135 | AI-draft | Share your insights with those ready to hear them | شارك أفكارك مع المستعدّين لسماعها |
| 3136 | AI-draft | Trust divine timing instead of rushing | ثق بتوقيت الله بدل العجلة |
| 3137 | AI-draft | Avoid spiritual escapism or feeling alienated. Ground your light in practical service. | تجنّب الهروب الروحي أو الشعور بالغربة. جذّر نورك في خدمة عملية. |
| 3138 | AI-draft | You are here to build lasting structures and turn grand visions into tangible reality. | طريقك طريق بناء البنى الدائمة وتحويل الرؤى الكبيرة إلى واقع ملموس. |
| 3139 | AI-draft | Daily affirmation: "I build step by step with patience." Practice mindful breathing when overwhelmed. | تذكير يومي: «أبني خطوة خطوة بصبر». وتنفّس بوعي حين يغلبك الضغط. |
| 3140 | AI-draft | Delegate one task to someone else | فوّض مهمّة واحدة إلى غيرك |
| 3141 | AI-draft | Rest when you need to - recovery fuels creation | استرح حين تحتاج - فالتعافي وقود الإنجاز |
| 3142 | AI-draft | Be patient with the process - Rome wasn't built in a day | اصبر على المسار - فالأمور العظيمة لا تُبنى في يوم |
| 3143 | AI-draft | Avoid overwhelm from the scale of your vision. Trust the process and start where you are. | تجنّب الإرهاق من حجم رؤيتك. ثق بالمسار وابدأ من حيث أنت. |
| 3144 | AI-draft | Daily affirmation: "I teach from fullness, not depletion." Practice self-compassion meditation. | تذكير يومي: «أعلّم من امتلاء لا من نفاد». وتأمّل تأمّل الرفق بالنفس. |
| 3145 | AI-draft | Release one responsibility that isn't yours to carry | تخلَّ عن مسؤولية واحدة ليست لك |
| 3146 | AI-draft | Teach or guide while maintaining clear boundaries | علّم أو أرشد مع الحفاظ على حدود واضحة |
| 3147 | AI-draft | Practice self-love with the same intensity you love others | أحبب نفسك بالقدر الذي تحبّ به الآخرين |
| 3148 | AI-draft | Rest deeply - you need it more than most | استرح بعمق - فأنت تحتاج إلى ذلك أكثر من غيرك |
| 3149 | AI-draft | Surah Al-Ikhlas 112:1 | سورة الإخلاص 112:1 |
| 3150 | AI-draft | Life Path 1 embodies divine unity and singularity. Like Allah being Al-Ahad, you're called to stand independently in your truth and lead with authentic individuality. | مسار الحياة 1 يعكس معنى الوحدانية والتفرّد. وكما أن الله هو الأحد، فأنت مدعوّ إلى الثبات مستقلًّا على الحقّ والقيادة بفردية صادقة. |
| 3151 | AI-draft | Recite Surah Al-Ikhlas 3 times after Fajr prayer to strengthen your connection to divine oneness and individual purpose. | اقرأ سورة الإخلاص ثلاث مرّات بعد صلاة الفجر لتقوية صلتك بالتوحيد وبغايتك الخاصة. |
| 3152 | AI-draft | Surah Al-Ahqaf 46:15 | سورة الأحقاف 46:15 |
| 3153 | AI-draft | Life Path 2 reflects divine gentleness and relational harmony. Like Al-Latif, you work through subtle kindness, diplomacy, and nurturing connections between people. | مسار الحياة 2 يعكس معنى اللطف والانسجام في العلاقات. وتخلّقًا باسم اللطيف تعمل بالرفق الخفيّ والدبلوماسية ورعاية الصلات بين الناس. |
| 3154 | AI-draft | Recite "Ya Latif" 129 times after Asr prayer to cultivate divine gentleness in your relationships and mediation work. | اذكر «يا لطيف» 129 مرّة بعد صلاة العصر لتنمية اللطف في علاقاتك وسعيك في الإصلاح. |
| 3155 | AI-draft | Surah Al-A'raf 7:176 | سورة الأعراف 7:176 |
| 3156 | AI-draft | Life Path 3 channels divine expression through creative communication. Like Al-Khabir, you're gifted with awareness that must be shared through stories, art, and joyful expression. | مسار الحياة 3 يوجّه التعبير بالتواصل المبدع. وتخلّقًا باسم الخبير أوتيت وعيًا ينبغي أن تشاركه بالقصص والفنّ والتعبير البهيج. |
| 3157 | AI-draft | After Maghrib, reflect on one story from the Quran and how it relates to your creative expression today. | بعد المغرب تأمّل قصة من قصص القرآن وصلتها بتعبيرك المبدع اليوم. |
| 3158 | AI-draft | Surah Al-Anbiya 21:32 | سورة الأنبياء 21:32 |
| 3159 | AI-draft | Life Path 4 embodies divine structure and preservation. Like Al-Hafiz, you build stable foundations, create order, and guard what is sacred through disciplined work. | مسار الحياة 4 يعكس معنى النظام والحفظ. وتخلّقًا باسم الحفيظ تبني أسسًا ثابتة، وتقيم النظام، وتحفظ المقدّس بالعمل المنضبط. |
| 3160 | AI-draft | Perform your 5 daily prayers at their exact times to embody divine order and structure in your spiritual practice. | أدِّ الصلوات الخمس في أوقاتها لتتجلّى معاني النظام في عبادتك. |
| 3161 | AI-draft | Surah An-Naba 78:8 | سورة النبأ 78:8 |
| 3162 | AI-draft | Life Path 5 reflects divine creativity and adaptability. Like Al-Musawwir, you shape-shift through experiences, exploring the diverse forms of creation with freedom and curiosity. | مسار الحياة 5 يعكس معنى الإبداع والتكيّف. وتخلّقًا باسم المصوّر تتقلّب في التجارب، مستكشفًا صور الخلق المتنوّعة بحرية وفضول. |
| 3163 | AI-draft | Before traveling or starting new experiences, recite "Bismillah" 5 times to invoke divine guidance through change. | قبل السفر أو بدء تجارب جديدة قل «بسم الله» خمس مرّات طالبًا هداية الله في التغيير. |
| 3164 | AI-draft | Surah Al-Isra 17:24 | سورة الإسراء 17:24 |
| 3165 | AI-draft | Life Path 6 embodies divine mercy and nurturing. Like Ar-Rahman, you extend unconditional compassion to family, community, and all who seek healing and harmony. | مسار الحياة 6 يعكس معنى الرحمة والرعاية. وتخلّقًا باسم الرحمن تبذل الرأفة للأسرة والمجتمع ولكل من يطلب الشفاء والانسجام. |
| 3166 | AI-draft | Begin each day by reciting "Bismillah Ar-Rahman Ar-Rahim" and setting an intention to serve your family or community with mercy. | ابدأ كل يوم بـ«بسم الله الرحمن الرحيم» وانوِ خدمة أسرتك أو مجتمعك برحمة. |
| 3167 | AI-draft | Surah Ali 'Imran 3:190 | سورة آل عمران 3:190 |
| 3168 | AI-draft | Life Path 7 seeks divine wisdom through contemplation. Like Al-Hakim, you're called to study the signs, dive deep into mysteries, and uncover sacred knowledge through spiritual inquiry. | مسار الحياة 7 يطلب الحكمة بالتأمّل. وتخلّقًا باسم الحكيم أنت مدعوّ إلى تدبّر الآيات والغوص في الأسرار وطلب العلم بالبحث الروحي. |
| 3169 | AI-draft | Spend 7 minutes after Fajr in silent contemplation (muraqaba) reflecting on the signs of Allah in creation. | اقضِ سبع دقائق بعد الفجر في مراقبة صامتة تتفكّر في آيات الله في الخلق. |
| 3170 | AI-draft | Surah Ali 'Imran 3:189 | سورة آل عمران 3:189 |
| 3171 | AI-draft | Life Path 8 manifests divine authority and abundance. Like Al-Malik, you're entrusted with power, resources, and leadership to establish justice and prosperity in the material realm. | مسار الحياة 8 يعكس معنى السلطان والوفرة. وتخلّقًا باسم الملك أنت مؤتمن على القوة والموارد والقيادة لإقامة العدل والرخاء في عالم المادة. |
| 3172 | AI-draft | Recite "Ya Malik" 90 times on Fridays to align your material success with divine sovereignty and ethical leadership. | اذكر «يا ملك» 90 مرّة يوم الجمعة لتوافق نجاحك المادي مع الأمانة والقيادة الأخلاقية. |
| 3173 | AI-draft | Surah Al-Baqarah 2:195 | سورة البقرة 2:195 |
| 3174 | AI-draft | Life Path 9 embodies divine generosity and completion. Like Al-Karim, you're called to give selflessly, serve humanity, and complete karmic cycles through compassionate service. | مسار الحياة 9 يعكس معنى الكرم والتمام. وتخلّقًا باسم الكريم أنت مدعوّ إلى العطاء بإيثار وخدمة الناس وإتمام الدورات بخدمة رحيمة. |
| 3175 | AI-draft | Give charity (sadaqah) every day, even if small, and recite "Alhamdulillah" 9 times to embody divine generosity. | تصدّق كل يوم ولو بقليل، وقل «الحمد لله» تسع مرّات تخلّقًا بالكرم. |
| 3176 | AI-draft | Surah An-Nur 24:35 | سورة النور 24:35 |
| 3177 | AI-draft | Master Number 11 channels divine illumination. Like An-Nur, you're a spiritual lighthouse meant to inspire, uplift, and guide others toward enlightenment through your heightened intuition. | العدد الأستاذ 11 يحمل معنى الإنارة. وتخلّقًا باسم النور أنت منارة روحية تُلهم الآخرين وترفعهم وترشدهم بحدسك المرهف. |
| 3178 | AI-draft | Recite Ayat an-Nur (24:35) during Tahajjud prayer to strengthen your connection to divine light and spiritual vision. | اقرأ آية النور (24:35) في صلاة التهجّد لتقوية صلتك بالنور والبصيرة. |
| 3179 | AI-draft | Surah Al-Anbiya 21:30 | سورة الأنبياء 21:30 |
| 3180 | AI-draft | Al-Bani (The Builder, The Architect) | الباني (البنّاء) |
| 3181 | AI-draft | Master Number 22 builds divine vision into material reality. Like Al-Bani, you're the master architect capable of constructing systems, institutions, and legacies that serve humanity for generations. | العدد الأستاذ 22 يحوّل الرؤية إلى واقع ملموس. أنت البنّاء المتقن القادر على إقامة أنظمة ومؤسّسات وآثار تخدم الناس أجيالًا. |
| 3182 | AI-draft | Before major projects, perform 2 rakat Salat al-Istikhara asking Allah to guide your building and manifestation work. | قبل المشاريع الكبيرة صلِّ ركعتي الاستخارة سائلًا الله أن يرشد عملك. |
| 3183 | AI-draft | Surah Al-Baqarah 2:153 | سورة البقرة 2:153 |
| 3184 | AI-draft | Master Number 33 embodies divine compassion and mastery through sacrifice. Like As-Sabur, you're called to serve as a spiritual teacher and healer, patiently uplifting all beings with universal love. | العدد الأستاذ 33 يعكس معنى الرحمة والإتقان بالتضحية. وتخلّقًا باسم الصبور أنت مدعوّ إلى أن تكون معلّمًا ومداويًا روحيًا ترفع الناس بصبر ومحبّة شاملة. |
| 3185 | AI-draft | Practice sabr (patience) consciously in 3 situations daily, and recite "Ya Sabur" 33 times after Isha to embody divine patience in your teaching. | تحلَّ بالصبر عن وعي في ثلاثة مواقف كل يوم، واذكر «يا صبور» 33 مرّة بعد العشاء. |
| 3186 | AI-draft | New Beginnings & Independence | البدايات الجديدة والاستقلال |
| 3187 | AI-draft | Personal goals | الأهداف الشخصية |
| 3188 | AI-draft | Express your vision | عبّر عن رؤيتك |
| 3189 | AI-draft | Adapt and explore | تكيّف واستكشف |
| 3190 | AI-draft | Nurture growth | ارعَ النموّ |
| 3191 | AI-draft | Reflect and refine | تأمّل وهذّب |
| 3192 | AI-draft | Define clear personal goals | حدّد أهدافًا شخصية واضحة |
| 3193 | AI-draft | Collaboration | التعاون |
| 3194 | AI-draft | Connect with others | تواصل مع الآخرين |
| 3195 | AI-draft | Deepen partnerships | عمّق الشراكات |
| 3196 | AI-draft | Communicate harmoniously | تواصل بانسجام |
| 3197 | AI-draft | Build together | ابنوا معًا |
| 3198 | AI-draft | Adapt as a team | تكيّفوا فريقًا |
| 3199 | AI-draft | Serve relationships | اخدم العلاقات |
| 3200 | AI-draft | Understand deeply | افهم بعمق |
| 3201 | AI-draft | Manifest through unity | حقّق بالوحدة |
| 3202 | AI-draft | Complete collaborations | أتمّ أعمال التعاون |
| 3203 | AI-draft | Seek win-win solutions | اطلب حلولًا ينتفع بها الطرفان |
| 3204 | AI-draft | Practice active listening | تدرّب على الإصغاء الفعّال |
| 3205 | AI-draft | Join a partnership or team | انضمّ إلى شراكة أو فريق |
| 3206 | AI-draft | Creativity & Self-Expression | الإبداع والتعبير عن الذات |
| 3207 | AI-draft | Create something new | اصنع شيئًا جديدًا |
| 3208 | AI-draft | Share your ideas | شارك أفكارك |
| 3209 | AI-draft | Express fully | عبّر بكمال |
| 3210 | AI-draft | Explore diverse expressions | استكشف أشكال تعبير متنوّعة |
| 3211 | AI-draft | Create for others | اصنع للآخرين |
| 3212 | AI-draft | Refine your craft | هذّب صنعتك |
| 3213 | AI-draft | Manifest creations | حقّق إبداعاتك |
| 3214 | AI-draft | Complete creative projects | أتمّ المشاريع الإبداعية |
| 3215 | AI-draft | Start a creative project | ابدأ مشروعًا إبداعيًا |
| 3216 | AI-draft | Speak your truth | قل حقيقتك |
| 3217 | AI-draft | Attend social events | احضر المناسبات الاجتماعية |
| 3218 | AI-draft | Lay the groundwork | مهّد الأرض |
| 3219 | AI-draft | Collaborate on systems | تعاون على الأنظمة |
| 3220 | AI-draft | Communicate plans | أعلن خططك |
| 3221 | AI-draft | Build methodically | ابنِ بمنهجية |
| 3222 | AI-draft | Adjust your approach | عدّل نهجك |
| 3223 | AI-draft | Serve through structure | اخدم بالتنظيم |
| 3224 | AI-draft | Complete foundations | أتمّ الأسس |
| 3225 | AI-draft | Create a detailed plan | ضع خطة مفصّلة |
| 3226 | AI-draft | Establish routines and systems | أقم عادات وأنظمة |
| 3227 | AI-draft | Improve health and finances | حسّن الصحّة والمال |
| 3228 | AI-draft | Stay disciplined and focused | ابقَ منضبطًا مركّزًا |
| 3229 | AI-draft | Freedom & Change | الحرية والتغيير |
| 3230 | AI-draft | This year brings unexpected changes, travel, and new experiences. Embrace variety and stay flexible. | تجلب هذه السنة تغيّرات غير متوقّعة وسفرًا وتجارب جديدة. تقبّل التنوّع وابقَ مرنًا. |
| 3231 | AI-draft | Initiate change | ابدأ التغيير |
| 3232 | AI-draft | Navigate transitions together | اجتازوا التحوّلات معًا |
| 3233 | AI-draft | Express your freedom | عبّر عن حريتك |
| 3234 | AI-draft | Create flexible structures | اصنع بنى مرنة |
| 3235 | AI-draft | Embrace full freedom | اغتنم الحرية كاملة |
| 3236 | AI-draft | Release what's complete | دَع ما اكتمل |
| 3237 | AI-draft | Travel or explore | سافر أو استكشف |
| 3238 | AI-draft | Break old patterns | اكسر الأنماط القديمة |
| 3239 | AI-draft | Responsibility & Service | المسؤولية والخدمة |
| 3240 | AI-draft | This year focuses on family, home, and caring for others. Step into responsibilities with love. | تركّز هذه السنة على الأسرة والبيت ورعاية الآخرين. تحمّل المسؤوليات بمحبّة. |
| 3241 | AI-draft | Start caring initiatives | ابدأ مبادرات رعاية |
| 3242 | AI-draft | Harmonize relationships | أصلِح العلاقات |
| 3243 | AI-draft | Express love | عبّر عن المحبّة |
| 3244 | AI-draft | Build a stable home | ابنِ بيتًا مستقرًّا |
| 3245 | AI-draft | Serve fully | اخدم بكمال |
| 3246 | AI-draft | Manifest through caring | حقّق بالرعاية |
| 3247 | AI-draft | Complete family matters | أتمّ شؤون الأسرة |
| 3248 | AI-draft | Strengthen family bonds | قوِّ روابط الأسرة |
| 3249 | AI-draft | Create a nurturing home | اصنع بيتًا راعيًا |
| 3250 | AI-draft | Help those in need | أعِن المحتاجين |
| 3251 | AI-draft | Take on more responsibility | تحمّل مسؤولية أكبر |
| 3252 | AI-draft | Practice unconditional love | تدرّب على المحبّة غير المشروطة |
| 3253 | AI-draft | Reflection & Inner Growth | التأمّل والنموّ الباطن |
| 3254 | AI-draft | This year calls for introspection, study, and spiritual development. Go inward to find answers. | تدعو هذه السنة إلى محاسبة النفس والدراسة والنموّ الروحي. ارجع إلى داخلك لتجد الأجوبة. |
| 3255 | AI-draft | Begin inner journey | ابدأ الرحلة الباطنة |
| 3256 | AI-draft | Seek deeper connections | اطلب صلات أعمق |
| 3257 | AI-draft | Express your insights | عبّر عن بصائرك |
| 3258 | AI-draft | Build spiritual practices | ابنِ ممارسات روحية |
| 3259 | AI-draft | Serve through wisdom | اخدم بالحكمة |
| 3260 | AI-draft | Dive deep within | غُص في داخلك |
| 3261 | AI-draft | Release old beliefs | تخلَّ عن المعتقدات القديمة |
| 3262 | AI-draft | Meditate or pray daily | تأمّل أو ادعُ كل يوم |
| 3263 | AI-draft | Study a spiritual topic | ادرس موضوعًا روحيًا |
| 3264 | AI-draft | Journal your insights | دوّن بصائرك |
| 3265 | AI-draft | Power & Manifestation | القوة والتحقيق |
| 3266 | AI-draft | This year is about achieving goals, building wealth, and stepping into your power. Think big and take action. | هذه السنة سنة تحقيق الأهداف وبناء الثروة والقيام بقوّتك. فكّر بسعة واعمل. |
| 3267 | AI-draft | Initiate big goals | ابدأ أهدافًا كبيرة |
| 3268 | AI-draft | Build powerful alliances | ابنِ تحالفات قوية |
| 3269 | AI-draft | Communicate your vision | أعلن رؤيتك |
| 3270 | AI-draft | Create wealth foundations | أقم أسس الثروة |
| 3271 | AI-draft | Adapt your strategy | عدّل استراتيجيتك |
| 3272 | AI-draft | Plan strategically | خطّط استراتيجيًا |
| 3273 | AI-draft | Manifest abundance | حقّق الوفرة |
| 3274 | AI-draft | Complete major projects | أتمّ المشاريع الكبرى |
| 3275 | AI-draft | Set ambitious financial goals | ضع أهدافًا مالية طموحة |
| 3276 | AI-draft | Step into leadership | تقدّم إلى القيادة |
| 3277 | AI-draft | Completion & Humanitarianism | الإتمام والعمل الإنساني |
| 3278 | AI-draft | Release | التخلّي |
| 3279 | AI-draft | Begin completing cycles | ابدأ إتمام الدورات |
| 3280 | AI-draft | Release relationships gently | أنهِ العلاقات برفق |
| 3281 | AI-draft | Express forgiveness | عبّر عن العفو |
| 3282 | AI-draft | Dismantle old structures | فكّك البنى القديمة |
| 3283 | AI-draft | Let go freely | تخلَّ بحرية |
| 3284 | AI-draft | Understand endings | افهم الخواتيم |
| 3285 | AI-draft | Release attachment | تخلَّ عن التعلّق |
| 3286 | AI-draft | Complete and prepare for new | أتمّ واستعدّ للجديد |
| 3287 | AI-draft | Forgive and let go | اعفُ وتخلَّ |
| 3288 | AI-draft | Donate or declutter | تصدّق أو تخفّف من الأشياء |
| 3289 | AI-draft | Serve a cause greater than yourself | اخدم قضية أكبر منك |
| 3290 | AI-draft | Complete unfinished projects | أتمّ المشاريع غير المنتهية |
| 3291 | AI-draft | In past lives, you may have been lazy, avoided responsibility, or manipulated others to do your work. You took shortcuts and left projects incomplete. | ربما ملت في مراحل سابقة إلى الكسل أو التهرّب من المسؤولية أو جعل غيرك يعمل عنك، فسلكت الطرق المختصرة وتركت المشاريع ناقصة. |
| 3292 | AI-draft | Nothing comes easy. You must work harder than others for the same results. Obstacles test your commitment. Laziness or negativity brings immediate consequences. | لا شيء يأتي بسهولة. قد تحتاج إلى جهد أكبر من غيرك لنتائج مماثلة، والعقبات تختبر التزامك، والكسل أو السلبية يعقبهما أثر سريع. |
| 3293 | AI-draft | Develop unwavering discipline and work ethic | نمِّ انضباطًا راسخًا وأخلاق عمل متينة |
| 3294 | AI-draft | Transform obstacles into stepping stones | حوّل العقبات إلى درجات صعود |
| 3295 | AI-draft | Once mastered, Karmic Debt 13/4 becomes the most resilient builder. Your struggles become your strength. You inspire others by showing that persistence conquers all. | إذا أُتقن، صار الدَّين الكرمي 13/4 أصلب البنّائين. فتصبح معاناتك قوّتك، وتُلهم الآخرين بأن المثابرة تغلب كل شيء. |
| 3296 | AI-draft | Perform Salat al-Tahajjud (night prayer) regularly. The discipline of waking before dawn mirrors your karmic lesson of self-mastery through consistent effort. | داوِم على صلاة التهجّد. فانضباط القيام قبل الفجر يعكس درسك في تهذيب النفس بالجهد الدائم. |
| 3297 | AI-draft | Unshakeable foundation-building. You become the person others turn to when the going gets tough because you've mastered endurance. | بناء أسس لا تتزعزع. تصبح من يلجأ إليه الناس عند الشدّة لأنك أتقنت الصبر. |
| 3298 | AI-draft | In previous incarnations, you abused freedom and indulged excessively in physical pleasures, substances, or reckless behavior. You harmed your body and disrespected sacred boundaries. | ربما ملت في مراحل سابقة إلى إساءة استعمال الحرية والإفراط في الملذّات البدنية أو المواد أو السلوك المتهوّر، فأضررت ببدنك وتجاوزت الحدود. |
| 3299 | AI-draft | You're prone to addiction, restlessness, and self-destructive patterns. Freedom becomes chaos without discipline. Your body is more sensitive to toxins and imbalance. | قد تكون عرضة للإدمان والقلق والأنماط المؤذية للنفس. فالحرية تصير فوضى بلا انضباط، وبدنك أكثر حساسية للسموم واختلال التوازن. |
| 3300 | AI-draft | Respect your body as a sacred trust (amanah) | احترم بدنك فهو أمانة |
| 3301 | AI-draft | Channel restlessness into constructive exploration | وجّه القلق إلى استكشاف بنّاء |
| 3302 | AI-draft | Distinguish true freedom from mere escape | ميّز الحرية الحقّة من مجرّد الهروب |
| 3303 | AI-draft | Mastered 14/5 becomes the adaptable adventurer who finds freedom through discipline. You teach others that true liberation comes from self-control, not indulgence. | إذا أُتقن 14/5 صار المغامر المتكيّف الذي يجد الحرية في الانضباط، ويعلّم غيره أن التحرّر الحقّ من ضبط النفس لا من الإفراط. |
| 3304 | AI-draft | Fast regularly (not just Ramadan) to train your body in discipline. Practice mindful eating and make dua before consuming anything, honoring the body as Allah's trust. | صُم تطوّعًا بانتظام (لا في رمضان وحده) لتعوّد بدنك الانضباط. وكُل بوعي وسمِّ الله قبل الطعام، إكرامًا للبدن أمانة الله. |
| 3305 | AI-draft | Notice when "just one more" becomes a pattern. Any time you justify excess, pause and reconnect with balance. | انتبه حين يصير «واحد آخر فقط» عادة. وكلّما برّرت الإفراط فتوقّف وعُد إلى التوازن. |
| 3306 | AI-draft | Conscious freedom. You show others how to experience life fully without losing themselves, becoming a guide for healthy exploration. | حرية واعية. تُري الآخرين كيف يعيشون الحياة كاملة دون أن يضيّعوا أنفسهم، فتصبح دليلًا للاستكشاف الصحّي. |
| 3307 | AI-draft | In past lives, you may have abused spiritual knowledge, engaged in illicit relationships, or misused intimacy and trust. Pride and ego led to your downfall from a position of power. | ربما ملت في مراحل سابقة إلى إساءة استعمال المعرفة الروحية أو العلاقات المحرّمة أو خيانة الثقة، فأوقعك الكِبر من موقع قوة. |
| 3308 | AI-draft | Sudden, unexpected upheavals shatter your illusions. Just when you feel secure, life humbles you. Relationships may involve betrayal or karmic patterns. Your ego must be broken to rebuild on truth. | قد تهزّ تقلّبات مفاجئة أوهامك؛ فحين تشعر بالأمان تذكّرك الحياة بالتواضع. وقد تتكرّر في العلاقات خيانة أو أنماط مؤلمة. والأنا ينبغي أن تُكسر لتبني على الحقّ. |
| 3309 | AI-draft | Surrender ego and embrace humility | تخلَّ عن الأنا وتحلَّ بالتواضع |
| 3310 | AI-draft | Welcome sudden changes as spiritual purification | استقبل التغيّرات المفاجئة تزكيةً للنفس |
| 3311 | AI-draft | Honor sacred boundaries in relationships | احترم الحدود الشرعية في العلاقات |
| 3312 | AI-draft | Transform pride into divine devotion | حوّل الكِبر إلى عبودية لله |
| 3313 | AI-draft | Mastered 16/7 becomes the enlightened mystic. Your breakdowns become breakthroughs. You gain profound spiritual wisdom through surrender and emerge as a humble spiritual teacher. | إذا أُتقن 16/7 صار صاحب بصيرة روحية، وتصبح انكساراتك فتوحًا، وتنال حكمة عميقة بالتسليم فتصير معلّمًا متواضعًا. |
| 3314 | AI-draft | Perform sujud (prostration) outside of prayer as an act of surrender. Recite "La hawla wa la quwwata illa billah" (There is no power except with Allah) to dissolve ego. | اسجد لله خارج الصلاة تسليمًا، وقل «لا حول ولا قوة إلا بالله» لإذابة الأنا. |
| 3315 | AI-draft | When you feel "too comfortable" or your ego inflates, expect a humbling lesson. Stay grounded in spiritual practice before the tower falls. | حين تشعر بأنك «مرتاح جدًا» أو تنتفخ أناك، فتوقّع درسًا في التواضع، والزم عبادتك قبل أن يهوي البناء. |
| 3316 | AI-draft | Divine humility and spiritual depth. You become unshakeable because you've learned that ego is the only thing that can be destroyed, and your true self is eternal. | تواضع وعمق روحي. تصبح راسخًا لأنك تعلّمت أن الأنا وحدها هي التي تنهدم. |
| 3317 | AI-draft | In previous lives, you abused power and position. You were likely a tyrant, dictator, or selfish leader who manipulated others for personal gain and showed no compassion for those beneath you. | ربما ملت في مراحل سابقة إلى إساءة استعمال السلطة والمكانة، والتسلّط على الناس لمصلحتك دون رحمة بمن هم دونك. |
| 3318 | AI-draft | You resist asking for or accepting help from others. Deep fear of being controlled or dependent. You must learn to lead while also being vulnerable and receiving support. | تقاوم طلب العون أو قبوله، وتخاف بعمق من أن تُقاد أو تعتمد على غيرك. فعليك أن تتعلّم القيادة مع الانكشاف وقبول السند. |
| 3319 | AI-draft | Balance independence with healthy interdependence | وازِن الاستقلال بحاجة صحّية إلى الآخرين |
| 3320 | AI-draft | Lead with compassion, not dominance | قُد بالرحمة لا بالتسلّط |
| 3321 | AI-draft | Give others credit and share power | انسب الفضل لأهله وشارك السلطة |
| 3322 | AI-draft | Serve others while honoring your own needs | اخدم الآخرين مع إكرام حاجاتك |
| 3323 | AI-draft | Practice servant leadership. Volunteer to serve in your community, washing dishes at the mosque or helping elders, to dissolve the ego of superiority. | تدرّب على القيادة بالخدمة. تطوّع في مجتمعك، كغسل الأواني في المسجد أو إعانة الكبار، لإذابة أنا الاستعلاء. |
| 3324 | AI-draft | When you refuse help or feel superior to others, recognize this as your karmic pattern resurfacing. Consciously choose humility and connection. | حين ترفض العون أو تشعر بالتفوّق على غيرك فاعلم أن نمطك القديم يعود، واختر التواضع والتواصل عن وعي. |
| 3325 | AI-draft | Empowered leadership through service. You become a leader who lifts others up, understanding that true power comes from empowering, not dominating. | قيادة قوية بالخدمة. تصبح قائدًا يرفع الآخرين، مدركًا أن القوة الحقّة في التمكين لا في التسلّط. |
| 3326 | AI-draft | Both driven and ambitious | كلاكما طموح مندفع |
| 3327 | AI-draft | Both want to lead | كلاكما يريد القيادة |
| 3328 | AI-draft | Ego clashes | صدام الأنا |
| 3329 | AI-draft | Take turns leading. Collaborate on shared projects where each has their domain of authority. | تناوبا القيادة، وتعاونا في مشاريع مشتركة لكلٍّ منكما فيها مجال صلاحيته. |
| 3330 | AI-draft | 1 leads, 2 supports gracefully | 1 يقود، و2 يساند بلطف |
| 3331 | AI-draft | Complementary strengths | قوى متكاملة |
| 3332 | AI-draft | 2 softens 1's edges | 2 يليّن حدّة 1 |
| 3333 | AI-draft | 1 may dominate | قد يطغى 1 |
| 3334 | AI-draft | 2 may feel overshadowed | قد يشعر 2 بأنه مغمور |
| 3335 | AI-draft | 1 can be insensitive to 2's needs | قد يغفل 1 عن حاجات 2 |
| 3336 | AI-draft | 1: Value 2's input and emotional intelligence. 2: Speak up for your needs clearly. | 1: قدّر رأي 2 وذكاءه العاطفي. 2: عبّر عن حاجاتك بوضوح. |
| 3337 | AI-draft | Dynamic duo! 1's drive meets 3's creativity for exciting partnerships. | ثنائي حيوي! اندفاع 1 يلتقي بإبداع 3 لشراكات مثيرة. |
| 3338 | AI-draft | 3 can be scattered | قد يتشتّت 3 |
| 3339 | AI-draft | Different work styles | أساليب عمل مختلفة |
| 3340 | AI-draft | 1: Let 3 bring playfulness to your goals. 3: Match 1's focus when it matters. | 1: دع 3 يضفي المرح على أهدافك. 3: جارِ تركيز 1 حين يلزم. |
| 3341 | AI-draft | Adventure partners! Both love freedom and new experiences. | رفيقا مغامرة! كلاكما يحبّ الحرية والتجارب الجديدة. |
| 3342 | AI-draft | Exciting and dynamic | مثير وحيوي |
| 3343 | AI-draft | Both avoid routine | كلاكما يتجنّب الروتين |
| 3344 | AI-draft | May grow apart | قد يتباعدان |
| 3345 | AI-draft | Create shared adventures while maintaining individual pursuits. Schedule quality time. | اصنعا مغامرات مشتركة مع الحفاظ على مساعيكما الفردية، وخصّصا وقتًا طيبًا معًا. |
| 3346 | AI-draft | Beginning meets ending. 1's self-focus clashes with 9's universal love. | البداية تلتقي بالنهاية. تركيز 1 على ذاته يصطدم بمحبّة 9 الشاملة. |
| 3347 | AI-draft | 9's wisdom guides 1's ambition | حكمة 9 ترشد طموح 1 |
| 3348 | AI-draft | Both are leaders | كلاكما قائد |
| 3349 | AI-draft | 1 is self-focused, 9 is universal | 1 متمركز حول ذاته، و9 شامل |
| 3350 | AI-draft | Different priorities | أولويات مختلفة |
| 3351 | AI-draft | 9 may find 1 selfish | قد يرى 9 أن 1 أناني |
| 3352 | AI-draft | Gentle, supportive partnership built on emotional understanding. | شراكة لطيفة داعمة مبنية على التفاهم العاطفي. |
| 3353 | AI-draft | Lack of direction | غياب الوجهة |
| 3354 | AI-draft | May be too passive | قد يكونان سلبيّين جدًا |
| 3355 | AI-draft | Take turns being the initiator. Practice healthy conflict resolution together. | تناوبا المبادرة، وتدرّبا معًا على حلّ الخلاف حلًّا صحّيًا. |
| 3356 | AI-draft | Divine balance of material and emotional. Power couple potential! | توازن بين المادي والعاطفي. إمكانات ثنائي قوي! |
| 3357 | AI-draft | 2 supports 8's ambitions | 2 يساند طموحات 8 |
| 3358 | AI-draft | 8 provides security for 2 | 8 يوفّر الأمان لـ 2 |
| 3359 | AI-draft | Yin-yang perfection | تكامل الضدّين |
| 3360 | AI-draft | 8 can be domineering | قد يتسلّط 8 |
| 3361 | AI-draft | 2 may feel controlled | قد يشعر 2 بأنه مقيَّد |
| 3362 | AI-draft | Creative explosion! Life is a joyful party with these two. | انفجار إبداعي! الحياة مع هذين احتفال بهيج. |
| 3363 | AI-draft | Endless fun and laughter | مرح وضحك بلا نهاية |
| 3364 | AI-draft | Shared creative vision | رؤية إبداعية مشتركة |
| 3365 | AI-draft | Financial irresponsibility | عدم المسؤولية المالية |
| 3366 | AI-draft | Too scattered | تشتّت مفرط |
| 3367 | AI-draft | Hire a 4 or 8 to handle practical matters. Schedule 'responsibility time' together. | استعينا بـ 4 أو 8 للشؤون العملية، وخصّصا «وقت مسؤولية» معًا. |
| 3368 | AI-draft | Solid, stable, predictable. Security-focused partnership. | متين، مستقرّ، متوقَّع. شراكة تركّز على الأمان. |
| 3369 | AI-draft | Ultimate stability | ثبات تامّ |
| 3370 | AI-draft | Shared values | قيم مشتركة |
| 3371 | AI-draft | Too much routine | روتين مفرط |
| 3372 | AI-draft | Lack of spontaneity | قلّة العفوية |
| 3373 | AI-draft | Schedule fun and adventure. Push each other out of comfort zones occasionally. | خصّصا وقتًا للمرح والمغامرة، وادفعا بعضكما خارج منطقة الراحة أحيانًا. |
| 3374 | AI-draft | Wild adventure! Exciting but potentially unstable. | مغامرة جامحة! مثيرة لكنها قد تكون غير مستقرّة. |
| 3375 | AI-draft | Never boring | لا ملل أبدًا |
| 3376 | AI-draft | Freedom to explore | حرية الاستكشاف |
| 3377 | AI-draft | Adventurous spirit | روح مغامرة |
| 3378 | AI-draft | Create grounding rituals. Have one stable anchor (home, routine) while exploring freely. | اصنعا عادات تجذّر، واجعلا لكما مرسى ثابتًا (بيتًا أو روتينًا) وأنتما تستكشفان بحرية. |
| 3379 | AI-draft | Nurturing paradise. Home and family are the center of everything. | جنّة الرعاية. البيت والأسرة محور كل شيء. |
| 3380 | AI-draft | Beautiful home life | حياة بيتية جميلة |
| 3381 | AI-draft | Shared values of service | قيم مشتركة في الخدمة |
| 3382 | AI-draft | Emotionally supportive | سند عاطفي |
| 3383 | AI-draft | Martyrdom tendency | ميل إلى التضحية المفرطة |
| 3384 | AI-draft | Neglect personal growth | إهمال النموّ الشخصي |
| 3385 | AI-draft | Codependency risk | خطر الاعتماد المتبادل المفرط |
| 3386 | AI-draft | Deep spiritual connection but may lack warmth. Intellectual soulmates. | صلة روحية عميقة قد ينقصها الدفء. رفيقا روح فكريّان. |
| 3387 | AI-draft | Profound understanding | فهم عميق |
| 3388 | AI-draft | Respect for solitude | احترام الخلوة |
| 3389 | AI-draft | Emotional distance | بعد عاطفي |
| 3390 | AI-draft | Too much alone time | خلوة مفرطة |
| 3391 | AI-draft | Isolation from world | عزلة عن العالم |
| 3392 | AI-draft | Schedule quality connection time. Balance spiritual pursuits with emotional intimacy. | خصّصا وقتًا للتواصل الطيّب، ووازنا المساعي الروحية بالقرب العاطفي. |
| 3393 | AI-draft | Power couple or power struggle. Both want control and success. | ثنائي قوي أو صراع على القوة. كلاكما يريد السيطرة والنجاح. |
| 3394 | AI-draft | Shared ambition | طموح مشترك |
| 3395 | AI-draft | Workaholism | إدمان العمل |
| 3396 | AI-draft | Neglect emotional/spiritual | إهمال الجانب العاطفي والروحي |
| 3397 | AI-draft | Collaborate, don't compete. Remember success means nothing without love and spirituality. | تعاونا ولا تتنافسا. وتذكّرا أن النجاح لا معنى له بلا محبّة وروحانية. |
| 3398 | AI-draft | Shared humanitarian vision | رؤية إنسانية مشتركة |
| 3399 | AI-draft | Spiritual unity | وحدة روحية |
| 3400 | AI-draft | Giving until empty | العطاء حتى النفاد |
| 3401 | AI-draft | Neglecting practical needs | إهمال الحاجات العملية |
| 3402 | AI-draft | Set boundaries. Serve the world but also honor your personal needs and rest. | ضعا حدودًا. اخدما العالم وأكرِما أيضًا حاجاتكما وراحتكما. |
| 3403 | AI-draft | Divine spiritual connection. Twin flames with shared mission. | صلة روحية عميقة. روحان برسالة مشتركة. |
| 3404 | AI-draft | Spiritual telepathy | تفاهم روحي بلا كلام |
| 3405 | AI-draft | Inspire each other | يُلهم كلٌّ منكما الآخر |
| 3406 | AI-draft | Shared higher purpose | غاية عليا مشتركة |
| 3407 | AI-draft | Intensity overload | فرط الشدّة |
| 3408 | AI-draft | Anxiety amplified | قلق مضاعف |
| 3409 | AI-draft | Grounding needed | يلزم التجذّر |
| 3410 | AI-draft | Ground together daily. Balance spiritual highs with earthly practices. | تجذّرا معًا كل يوم، ووازنا لحظات السموّ الروحي بممارسات أرضية. |
| 3411 | AI-draft | Master builders creating legacy together. Practical visionaries. | بنّاءان متقنان يصنعان إرثًا معًا. صاحبا رؤية عمليّان. |
| 3412 | AI-draft | Shared grand vision | رؤية كبيرة مشتركة |
| 3413 | AI-draft | Practical manifestation | تحقيق عملي |
| 3414 | AI-draft | Ultimate spiritual teachers and healers. Heavy karmic responsibility. | معلّمان ومداويان روحيّان. مسؤولية ثقيلة. |
| 3415 | AI-draft | Unconditional love | محبّة غير مشروطة |
| 3416 | AI-draft | Transformative healing | شفاء تحويلي |
| 3417 | AI-draft | Overwhelming responsibility | مسؤولية مرهقة |
| 3418 | AI-draft | Self-sacrifice to detriment | تضحية بالنفس إلى حدّ الضرر |
| 3419 | AI-draft | Requires compromise | يتطلّب تنازلًا |
| 3420 | AI-draft | Cycle Timeline | الخطّ الزمني للدورات |
| 3421 | AI-draft | Invalid buruj remainder: | باقي البروج غير صالح: |
| 3422 | AI-draft | Buruj profile not found for remainder | لم يُعثر على ملفّ البرج لهذا الباقي |
| 3423 | AI-draft | Mother name is required | اسم الأم مطلوب |
| 3424 | AI-draft | Invalid date of birth | تاريخ ميلاد غير صالح |
| 3425 | AI-draft | Optimism | التفاؤل |
| 3426 | AI-draft | Practicality | الواقعية |
| 3427 | AI-draft | Determination | العزيمة |
| 3428 | AI-draft | Trustworthiness | الأمانة |
| 3429 | AI-draft | Resourcefulness | سعة الحيلة |
| 3430 | AI-draft | Spiritual depth | العمق الروحي |
| 3431 | AI-draft | Mysticism | التصوّف |
| 3432 | AI-draft | Ambition | الطموح |
| 3433 | AI-draft | Material success | النجاح المادي |
| 3434 | AI-draft | Karma | الجزاء (الكارما) |
| 3435 | AI-draft | Service to others | خدمة الآخرين |
| 3436 | AI-draft | Face the qibla | استقبل القبلة |
| 3437 | AI-draft | End with duʿāʾ | اختم بالدعاء |
| 3438 | AI-draft | The Most Compassionate | الرحيم |
| 3439 | AI-draft | The King, The Sovereign | الملك |
| 3440 | AI-draft | The Most Holy, The Pure | القدّوس |
| 3441 | AI-draft | The Giver of Faith and Security | المؤمن |
| 3442 | AI-draft | The Guardian, The Protector | المهيمن |
| 3443 | AI-draft | The Almighty, The Mighty | العزيز |
| 3444 | AI-draft | The Compeller, The Irresistible | الجبّار |
| 3445 | AI-draft | The Supreme in Greatness | المتكبّر |
| 3446 | AI-draft | The Evolver, The Maker | البارئ |
| 3447 | AI-draft | The Fashioner, The Shaper | المصوّر |
| 3448 | AI-draft | The Ever-Forgiving | الغفّار |
| 3449 | AI-draft | The Subduer, The Dominant | القهّار |
| 3450 | AI-draft | The Opener, The Judge | الفتّاح |
| 3451 | AI-draft | The Constrictor, The Withholder | القابض |
| 3452 | AI-draft | The Expander, The Reliever | الباسط |
| 3453 | AI-draft | The Abaser, The Humbler | الخافض |
| 3454 | AI-draft | The Utterly Just | العدل |
| 3455 | AI-draft | The Subtle, The Gentle | اللطيف |
| 3456 | AI-draft | The Forbearing, The Clement | الحليم |
| 3457 | AI-draft | The Magnificent, The Supreme | العظيم |
| 3458 | AI-draft | The All-Forgiving | الغفور |
| 3459 | AI-draft | The Most Appreciative | الشكور |
| 3460 | AI-draft | The Greatest, The Most Great | الكبير |
| 3461 | AI-draft | The Preserver, The Guardian | الحفيظ |
| 3462 | AI-draft | The Sustainer, The Nourisher | المقيت |
| 3463 | AI-draft | The Most Generous | الكريم |
| 3464 | AI-draft | The Responsive, The Answerer | المجيب |
| 3465 | AI-draft | The All-Encompassing, The Vast | الواسع |
| 3466 | AI-draft | The Glorious, The Magnificent | المجيد |
| 3467 | AI-draft | The Trustee, The Advocate | الوكيل |
| 3468 | AI-draft | The Firm, The Steadfast | المتين |
| 3469 | AI-draft | The All-Praiseworthy | الحميد |
| 3470 | AI-draft | The Accounter, The Reckoner | المحصي |
| 3471 | AI-draft | The Bringer of Death | المميت |
| 3472 | AI-draft | Ar Rahmaan | الرحمن |
| 3473 | AI-draft | Ar Raheem | الرحيم |
| 3474 | AI-draft | Al Malik | الملك |
| 3475 | AI-draft | Al Quddus | القدوس |
| 3476 | AI-draft | As Salaam | السلام |
| 3477 | AI-draft | Al Mu'min | المؤمن |
| 3478 | AI-draft | Al Muhaymin | المهيمن |
| 3479 | AI-draft | Al Azeez | العزيز |
| 3480 | AI-draft | Al Jabbaar | الجبار |
| 3481 | AI-draft | Al Mutakabbir | المتكبر |
| 3482 | AI-draft | Al Khaaliq | الخالق |
| 3483 | AI-draft | Al Baari | البارئ |
| 3484 | AI-draft | Al Musawwir | المصور |
| 3485 | AI-draft | Al Ghaffaar | الغفار |
| 3486 | AI-draft | Al Qahhaar | القهار |
| 3487 | AI-draft | Al Wahhaab | الوهاب |
| 3488 | AI-draft | Ar Razzaaq | الرزاق |
| 3489 | AI-draft | Al Fattaah | الفتاح |
| 3490 | AI-draft | Al 'Aleem | العليم |
| 3491 | AI-draft | Al Qaabid | القابض |
| 3492 | AI-draft | Al Baasit | الباسط |
| 3493 | AI-draft | Al Khaafid | الخافض |
| 3494 | AI-draft | Ar Raafi' | الرافع |
| 3495 | AI-draft | Al Mudhil | المذل |
| 3496 | AI-draft | As Samee' | السميع |
| 3497 | AI-draft | Al Baseer | البصير |
| 3498 | AI-draft | Al Hakam | الحكم |
| 3499 | AI-draft | Al 'Adl | العدل |
| 3500 | AI-draft | Al Lateef | اللطيف |
| 3501 | AI-draft | Al Khabeer | الخبير |
| 3502 | AI-draft | Al Haleem | الحليم |
| 3503 | AI-draft | Al 'Azeem | العظيم |
| 3504 | AI-draft | Al Ghafoor | الغفور |
| 3505 | AI-draft | Ash Shakoor | الشكور |
| 3506 | AI-draft | Al 'Aliyy | العلي |
| 3507 | AI-draft | Al Kabeer | الكبير |
| 3508 | AI-draft | Al Hafeez | الحفيظ |
| 3509 | AI-draft | Al Muqeet | المقيت |
| 3510 | AI-draft | Al Haseeb | الحسيب |
| 3511 | AI-draft | Al Jaleel | الجليل |
| 3512 | AI-draft | Al Kareem | الكريم |
| 3513 | AI-draft | Ar Raqeeb | الرقيب |
| 3514 | AI-draft | Al Mujeeb | المجيب |
| 3515 | AI-draft | Al Waasi' | الواسع |
| 3516 | AI-draft | Al Hakeem | الحكيم |
| 3517 | AI-draft | Al Wudood | الودود |
| 3518 | AI-draft | Al Majeed | المجيد |
| 3519 | AI-draft | Al Baa'ith | الباعث |
| 3520 | AI-draft | Ash Shaheed | الشهيد |
| 3521 | AI-draft | Al Haqq | الحق |
| 3522 | AI-draft | Al Wakeel | الوكيل |
| 3523 | AI-draft | Al Qawiyy | القوي |
| 3524 | AI-draft | Al Mateen | المتين |
| 3525 | AI-draft | Al Waliyy | الولي |
| 3526 | AI-draft | Al Hameed | الحميد |
| 3527 | AI-draft | Al Muhsi | المحصي |
| 3528 | AI-draft | Al Mubdi | المبدئ |
| 3529 | AI-draft | Al Mu'eed | المعيد |
| 3530 | AI-draft | Al Muhiy | المحيي |
| 3531 | AI-draft | Al Mumeet | المميت |
| 3532 | AI-draft | Al Haiyy | الحي |
| 3533 | AI-draft | Al Qayyoom | القيوم |
| 3534 | AI-draft | Al Waajid | الواجد |
| 3535 | AI-draft | Al Maajid | الماجد |
| 3536 | AI-draft | Al Waahid | الواحد |
| 3537 | AI-draft | Al Ahad | الأحد |
| 3538 | AI-draft | As Samad | الصمد |
| 3539 | AI-draft | Al Qaadir | القادر |
| 3540 | AI-draft | Al Muqtadir | المقتدر |
| 3541 | AI-draft | Al Muqaddim | المقدم |
| 3542 | AI-draft | Al Mu’akhir | المؤخر |
| 3543 | AI-draft | Al Awwal | الأول |
| 3544 | AI-draft | Al Aakhir | الآخر |
| 3545 | AI-draft | Az Zaahir | الظاهر |
| 3546 | AI-draft | Al Baatin | الباطن |
| 3547 | AI-draft | Al Waali | الوالي |
| 3548 | AI-draft | Al Muta’ali | المتعالي |
| 3549 | AI-draft | Al Barr | البر |
| 3550 | AI-draft | At Tawwaab | التواب |
| 3551 | AI-draft | Al Muntaqim | المنتقم |
| 3552 | AI-draft | Al Afuww | العفو |
| 3553 | AI-draft | Ar Ra’oof | الرؤوف |
| 3554 | AI-draft | Maalik Ul Mulk | مالك الملك |
| 3555 | AI-draft | Dhu Al Jalaali Wa Al Ikraam | ذو الجلال والإكرام |
| 3556 | AI-draft | Al Muqsit | المقسط |
| 3557 | AI-draft | Al Jaami' | الجامع |
| 3558 | AI-draft | Al Ghaniyy | الغني |
| 3559 | AI-draft | Al Mughi | المغني |
| 3560 | AI-draft | Al Maani' | المانع |
| 3561 | AI-draft | Ad Daaarr | الضار |
| 3562 | AI-draft | An Naafi’ | النافع |
| 3563 | AI-draft | Al Haadi | الهادي |
| 3564 | AI-draft | Al Badi' | البديع |
| 3565 | AI-draft | Al Baaqi | الباقي |
| 3566 | AI-draft | Al Waarith | الوارث |
| 3567 | AI-draft | Ar Rasheed | الرشيد |
| 3568 | AI-draft | As Saboor | الصبور |
| 3569 | AI-draft | The Self-Subsisting Sustainer | القيّوم |
| 3570 | AI-draft | The Perceiver, The Finder | الواجد |
| 3571 | AI-draft | The All-Noble, The Glorious | الماجد |
| 3572 | AI-draft | The Self-Sufficient Master | الصمد |
| 3573 | AI-draft | The All-Powerful | القادر |
| 3574 | AI-draft | The Powerful, The Dominant | المقتدر |
| 3575 | AI-draft | The Expediter, The Promoter | المقدّم |
| 3576 | AI-draft | The Manifest, The Evident | الظاهر |
| 3577 | AI-draft | The Hidden, The Inward | الباطن |
| 3578 | AI-draft | The Most Exalted | المتعالي |
| 3579 | AI-draft | The Ever-Relenting | التوّاب |
| 3580 | AI-draft | The Most Kind | الرؤوف |
| 3581 | AI-draft | The Lord of Majesty and Generosity | ذو الجلال والإكرام |
| 3582 | AI-draft | The Self-Sufficient, The Rich | الغني |
| 3583 | AI-draft | The Preventer | المانع |
| 3584 | AI-draft | The Distresser (by His decree) | الضارّ |
| 3585 | AI-draft | The Propitious, The Benefactor | النافع |
| 3586 | AI-draft | The Inheritor of All | الوارث |
| 3587 | AI-draft | The Most Patient | الصبور |
| 3588 | AI-draft | Allah | الله |
| 3589 | AI-draft | The God, The One True God | الله |
| 3590 | AI-draft | The Everlasting, The Eternal | الباقي |
| 3591 | AI-draft | The Gatherer, The Uniter | الجامع |
| 3592 | AI-draft | The Eternal, The Everlasting | الباقي |
| 3593 | AI-draft | The Guide, The One Who Guides | الهادي |
| 3594 | AI-draft | The Loving, The Most Affectionate | الودود |
| 3595 | AI-draft | The Pure, The Immaculate | القدّوس |
| 3596 | AI-draft | The Wise, The All-Wise | الحكيم |
| 3597 | AI-draft | The Purifier, The Pure One | القدّوس |
| 3598 | AI-draft | The Certain, The Certainty | الحقّ |
| 3599 | AI-draft | The Generous, The Most Bountiful | الكريم |
| 3600 | AI-draft | The Subtle, The Most Kind | اللطيف |
| 3601 | AI-draft | The Believer, The Giver of Faith | المؤمن |
| 3602 | AI-draft | The Light, The Illuminator | النور |
| 3603 | AI-draft | The Peace, The Source of Peace | السلام |
| 3604 | AI-draft | The All-Knowing, The Omniscient | العليم |
| 3605 | AI-draft | The Patient, The Most Forbearing | الصبور |
| 3606 | AI-draft | The Able, The All-Powerful | القادر |
| 3607 | AI-draft | The Most Merciful, The Beneficent | الرحمن |
| 3608 | AI-draft | The Grateful, The Appreciative | الشكور |
| 3609 | AI-draft | The Acceptor of Repentance | التوّاب |
| 3610 | AI-draft | The Aware, The All-Informed | الخبير |
| 3611 | AI-draft | The Lord of Majesty and Bounty | ذو الجلال والإكرام |
| 3612 | AI-draft | The Distresser, The Corrector | الضارّ |
| 3613 | AI-draft | Yunus | يونس |
| 3614 | AI-draft | Hud | هود |
| 3615 | AI-draft | Taha | طه |
| 3616 | AI-draft | Luqman | لقمان |
| 3617 | AI-draft | Saba | سبأ |
| 3618 | AI-draft | Fatir | فاطر |
| 3619 | AI-draft | Sad | ص |
| 3620 | AI-draft | Ghafir | غافر |
| 3621 | AI-draft | Fussilat | فصّلت |
| 3622 | AI-draft | Qaf | ق |
| 3623 | AI-draft | Nuh | نوح |
| 3624 | AI-draft | Abasa | عبس |
| 3625 | AI-draft | Quraish | قريش |
| 3626 | AI-draft | Numerical miracle of the Qurʾan | الإعجاز العددي في القرآن |
| 3627 | AI-draft | Surahs in the Qurʾan | سور القرآن |
| 3628 | AI-draft | Resonates with a divine pattern | يتناغم مع نمط إلهي |
| 3629 | AI-draft | For Sunday, the recommended sadaqah is: | صدقة يوم الأحد المستحبّة: |
| 3630 | AI-draft | Gather children and give them food as sadaqah. | اجمع الأطفال وأطعمهم صدقةً. |
| 3631 | AI-draft | Help anyone who is poor or in need. | أعِن كل فقير أو محتاج. |
| 3632 | AI-draft | For Monday, the recommended sadaqah is: | صدقة يوم الاثنين المستحبّة: |
| 3633 | AI-draft | Give water as sadaqah. | تصدّق بالماء. |
| 3634 | AI-draft | Help an elderly person, a woman, or children. | أعِن مسنًّا أو امرأة أو أطفالًا. |
| 3635 | AI-draft | Give food or sadaqah to children in the evening. | أعطِ الأطفال طعامًا أو صدقة في المساء. |
| 3636 | AI-draft | Tuesday is recommended for sadaqah intended for healing and protection. Recommended forms of sadaqah include: | يُستحبّ يوم الثلاثاء للصدقة بنيّة الشفاء والحفظ. ومن صورها: |
| 3637 | AI-draft | Giving food to children. | إطعام الأطفال. |
| 3638 | AI-draft | Helping a person who is experiencing difficulties. | إعانة من يمرّ بضيق. |
| 3639 | AI-draft | Helping someone purchase their medication. | إعانة أحد على شراء دوائه. |
| 3640 | AI-draft | Contributing toward someone's medical or medication expenses. | المساهمة في نفقات علاج أحد أو دوائه. |
| 3641 | AI-draft | In Wolof, Rab refers to a type of illness or affliction associated with satanic or devil-related causes. | في لغة الولوف، «راب» نوع من المرض أو البلاء يُنسب إلى أسباب شيطانية. |
| 3642 | AI-draft | For Wednesday, the recommended sadaqah is: | صدقة يوم الأربعاء المستحبّة: |
| 3643 | AI-draft | Give white paper and pens. | تصدّق بورق أبيض وأقلام. |
| 3644 | AI-draft | Provide food to children. | أطعم الأطفال. |
| 3645 | AI-draft | Thursday is considered favourable for sadaqah intended for opening the way to wealth, success, or removing blockages. Recommended acts include: | يُعدّ يوم الخميس مناسبًا للصدقة بنيّة فتح أبواب الرزق والتوفيق أو رفع العوائق. ومن الأعمال المستحبّة: |
| 3646 | AI-draft | Giving money as sadaqah. | التصدّق بالمال. |
| 3647 | AI-draft | Supporting a mosque. | دعم مسجد. |
| 3648 | AI-draft | Helping to clean a mosque. | المساعدة في تنظيف مسجد. |
| 3649 | AI-draft | Performing voluntary service in the mosque. | التطوّع بالخدمة في المسجد. |
| 3650 | AI-draft | Friday is associated with Venus and is considered a favourable day for giving sadaqah. Recommended acts include giving: | يرتبط يوم الجمعة بالزهرة ويُعدّ مناسبًا للصدقة. ومن الأعمال المستحبّة التصدّق بـ: |
| 3651 | AI-draft | It is also recommended to make ziyāra (visiting) to a scholar or a Borom Ham-Ham. | ويُستحبّ أيضًا زيارة عالم أو «بوروم هام هام». |
| 3652 | AI-draft | Saturday is recommended for helping poor and needy people. Recommended sadaqah includes: | يُستحبّ يوم السبت لإعانة الفقراء والمحتاجين. ومن الصدقة المستحبّة: |
| 3653 | AI-draft | Giving essential food items such as rice, oil, and other necessities. | التصدّق بالمواد الغذائية الأساسية كالأرز والزيت وغيرها. |
| 3654 | AI-draft | Providing financial assistance to someone in difficulty. | تقديم عون مالي لمن هو في ضيق. |
| 3655 | AI-draft | This day is also considered particularly beneficial for removing blockages, especially for people associated with Capricorn. | ويُعدّ هذا اليوم نافعًا خاصّة لرفع العوائق، لا سيما لأهل برج الجدي. |
| 3656 | AI-draft | This sadaqah is given sincerely for the sake of Allah, seeking blessings, protection, mercy, and goodness throughout the year. | تُعطى هذه الصدقة خالصة لوجه الله، طلبًا للبركة والحفظ والرحمة والخير طوال السنة. |
| 3657 | AI-draft | This sadaqah is intended to seek Allah's help, blessings, success, stability, and ease in one's affairs and endeavors. | يُقصد بهذه الصدقة طلب عون الله وبركته وتوفيقه وتيسير الأمور والمساعي. |
| 3658 | AI-draft | Because this month is considered a bit heavy or difficult, these forms of sadaqah are considered beneficial for the person born in this month. | لأن هذا الشهر يُعدّ ثقيلًا أو صعبًا بعض الشيء، تُعدّ هذه الصور من الصدقة نافعة لمن وُلد فيه. |
| 3659 | AI-draft | This sadaqah can help the person have more strength, encouragement, patience, and stability as they continue working through difficult circumstances. | قد تعين هذه الصدقة صاحبها على مزيد من القوة والتشجيع والصبر والثبات وهو يجتاز الظروف الصعبة. |
| 3660 | AI-draft | This sadaqah is intended to bring goodness, blessings, protection, success, and stability to the person born in Ramadan. | يُقصد بهذه الصدقة جلب الخير والبركة والحفظ والتوفيق والثبات لمن وُلد في رمضان. |
| 3661 | AI-draft | The help given to the traveller and the food given to the needy are two separate forms of sadaqah. | إعانة المسافر وإطعام المحتاج صورتان مستقلّتان من الصدقة. |
| 3662 | AI-draft | Outlook | الآفاق |
| 3663 | AI-draft | Friendship Outlook | آفاق الصداقة |
| 3664 | AI-draft | Family Outlook | آفاق الأسرة |
| 3665 | AI-draft | Work Outlook | آفاق العمل |
| 3666 | AI-draft | This pattern traditionally shows an easy, comfortable beginning that can settle into stagnation if never renewed. | يدلّ هذا النمط تقليديًا على بداية سهلة مريحة قد تستقرّ في الركود إن لم تتجدّد. |
| 3667 | AI-draft | This pattern traditionally shows an easy beginning that may later feel stagnant, especially in growth and shared provision. | يدلّ هذا النمط تقليديًا على بداية سهلة قد تصير راكدة لاحقًا، لا سيما في النموّ والرزق المشترك. |
| 3668 | AI-draft | This pattern traditionally shows a friendship that starts with natural ease but can quietly stagnate without renewal. | يدلّ هذا النمط تقليديًا على صداقة تبدأ بيسر طبيعي لكنها قد تركد بهدوء بلا تجديد. |
| 3669 | AI-draft | This pattern traditionally shows family closeness that begins easily but can fade into distance without active care. | يدلّ هذا النمط تقليديًا على قرب عائلي يبدأ بسهولة لكنه قد يذبل إلى بُعد بلا رعاية فاعلة. |
| 3670 | AI-draft | This connection often starts with ease and comfort, but can settle into routine if never renewed. Shared purpose and intentional effort keep it alive. | تبدأ هذه الصلة غالبًا بيسر وراحة، لكنها قد تستقرّ في الروتين إن لم تتجدّد. والغاية المشتركة والجهد المقصود يُبقيانها حيّة. |
| 3671 | AI-draft | Friendships under this pattern begin naturally and comfortably, but may drift into routine without shared activities or new experiences. Regular effort keeps the connection warm. | تبدأ الصداقات في هذا النمط طبيعية مريحة، لكنها قد تنجرف إلى الروتين بلا أنشطة مشتركة أو تجارب جديدة. والجهد المنتظم يُبقي الصلة دافئة. |
| 3672 | AI-draft | Family ties here tend to feel steady and dependable, though closeness can fade into distance if never actively nurtured. Checking in regularly keeps the bond warm. | تميل الروابط العائلية هنا إلى الثبات والاعتمادية، لكن القرب قد يذبل إلى بُعد إن لم يُرعَ. والسؤال المنتظم يُبقي الرابطة دافئة. |
| 3673 | AI-draft | Working relationships start smoothly and productively, but can grow stale without new goals or challenges. Revisit shared objectives regularly to avoid complacency. | تبدأ علاقات العمل بسلاسة وإنتاجية، لكنها قد تفتر بلا أهداف أو تحدّيات جديدة. راجعوا الأهداف المشتركة بانتظام لتجنّب التراخي. |
| 3674 | AI-draft | Camaraderie | الرفقة |
| 3675 | AI-draft | Traditionally considered favorable for marriage. This pattern supports natural cooperation, companionship, and mutual understanding. | يُعدّ تقليديًا مواتيًا للزواج. ويدعم هذا النمط التعاون الطبيعي والمؤانسة والتفاهم المتبادل. |
| 3676 | AI-draft | Traditionally considered a favorable pattern for friendship — ease, cooperation, and mutual understanding come naturally. | يُعدّ تقليديًا نمطًا مواتيًا للصداقة — اليسر والتعاون والتفاهم تأتي طبيعيًا. |
| 3677 | AI-draft | Traditionally considered a favorable pattern for collaboration — natural cooperation and mutual understanding support the partnership. | يُعدّ تقليديًا نمطًا مواتيًا للتعاون — فالتعاون الطبيعي والتفاهم يدعمان الشراكة. |
| 3678 | AI-draft | This bond naturally supports cooperation and ease. Two people connected this way tend to understand each other quickly, though one may lean too heavily on the other. | تدعم هذه الرابطة التعاون واليسر بطبعها. ويميل المتّصلان بها إلى التفاهم سريعًا، وإن كان أحدهما قد يعتمد على الآخر أكثر من اللازم. |
| 3679 | AI-draft | A naturally easy, low-friction friendship — you tend to understand each other quickly and rarely clash. Watch that neither friend becomes overly reliant on the other. | صداقة سهلة قليلة الاحتكاك — تتفاهمان سريعًا ونادرًا ما تتصادمان. انتبها ألّا يعتمد أحدكما على الآخر اعتمادًا مفرطًا. |
| 3680 | AI-draft | Family members connected this way tend to get along with little friction and genuine mutual understanding. Encourage each other's independence alongside the closeness. | يميل أفراد الأسرة المتّصلون هكذا إلى التوافق بقليل من الاحتكاك وتفاهم صادق. شجّعوا استقلال بعضكم إلى جانب القرب. |
| 3681 | AI-draft | A cooperative, low-conflict working relationship where tasks divide naturally. Guard against one person carrying too much of the shared workload. | علاقة عمل متعاونة قليلة الخلاف تتوزّع فيها المهامّ طبيعيًا. احذروا أن يحمل شخص واحد معظم العبء المشترك. |
| 3682 | AI-draft | Traditionally associated with difficulty in marriage. Tension, frequent disagreements, and financial pressure may arise. | يرتبط تقليديًا بالصعوبة في الزواج. قد ينشأ توتّر وخلافات متكرّرة وضغط مالي. |
| 3683 | AI-draft | Traditionally associated with difficulty — frequent small frictions and mismatched expectations may test the friendship. | يرتبط تقليديًا بالصعوبة — احتكاكات صغيرة متكرّرة وتوقّعات غير متوافقة قد تختبر الصداقة. |
| 3684 | AI-draft | Traditionally associated with difficulty — recurring tension, sometimes over responsibilities, may strain the family bond. | يرتبط تقليديًا بالصعوبة — توتّر متكرّر، أحيانًا حول المسؤوليات، قد يُثقل الرابطة العائلية. |
| 3685 | AI-draft | Traditionally associated with difficulty — friction over resources, deadlines, or decisions may strain the partnership. | يرتبط تقليديًا بالصعوبة — احتكاك حول الموارد أو المواعيد أو القرارات قد يُثقل الشراكة. |
| 3686 | AI-draft | This connection often carries tension and frequent friction. Patience and structure are needed to keep disagreements from escalating. | تحمل هذه الصلة غالبًا توتّرًا واحتكاكًا متكرّرًا. ويلزم الصبر والتنظيم لمنع الخلافات من التصاعد. |
| 3687 | AI-draft | Friendships under this pattern can feel effortful — frequent small disagreements and mismatched expectations are common. The bond can hold, but needs conscious care. | قد تبدو الصداقات في هذا النمط متعبة — فالخلافات الصغيرة المتكرّرة والتوقّعات غير المتوافقة شائعة. يمكن للرابطة أن تصمد، لكنها تحتاج إلى عناية واعية. |
| 3688 | AI-draft | Family ties here often carry recurring tension, sometimes over money or responsibilities. Structure, patience, and outside support help ease the strain. | تحمل الروابط العائلية هنا غالبًا توتّرًا متكرّرًا، أحيانًا حول المال أو المسؤوليات. والتنظيم والصبر والعون الخارجي تخفّف العبء. |
| 3689 | AI-draft | Traditionally seen as a heavy pattern — one friend's stress or unresolved struggles may surface within the bond. | يُرى تقليديًا نمطًا ثقيلًا — قد يظهر ضغط أحد الصديقين أو صراعاته العالقة داخل الرابطة. |
| 3690 | AI-draft | Traditionally seen as a heavy pattern — caretaking or shared hardship, often tied to health, may mark the family bond. | يُرى تقليديًا نمطًا ثقيلًا — قد تطبع الرعايةُ أو المشقّة المشتركة، المرتبطة غالبًا بالصحّة، الرابطةَ العائلية. |
| 3691 | AI-draft | Friendships here can feel heavy at times, often surfacing one person's stress or unresolved struggles. Steady, patient support matters more than constant closeness. | قد تبدو الصداقات هنا ثقيلة أحيانًا، وتُظهر غالبًا ضغط أحدكما أو صراعاته العالقة. والسند الثابت الصبور أهمّ من القرب الدائم. |
| 3692 | AI-draft | Family bonds under this pattern often involve caretaking or shared hardship — health concerns are common threads. Calm routines and honest communication ease the load. | تتضمّن الروابط العائلية في هذا النمط غالبًا رعاية أو مشقّة مشتركة — والهموم الصحّية خيط متكرّر. والعادات الهادئة والتواصل الصادق تخفّف الحمل. |
| 3693 | AI-draft | Working relationships here can feel draining, with stress or burnout as recurring risks. Clear boundaries and realistic workloads protect the partnership. | قد تبدو علاقات العمل هنا مستنزِفة، والضغط أو الإنهاك خطر متكرّر. والحدود الواضحة وأعباء العمل الواقعية تحمي الشراكة. |
| 3694 | AI-draft | Traditionally considered very favorable — blessing, natural harmony, and growth tend to flow more easily. | يُعدّ تقليديًا مواتيًا جدًا — تنساب البركة والانسجام الطبيعي والنموّ بيسر أكبر. |
| 3695 | AI-draft | Traditionally considered very favorable for marriage. Associated with blessing, natural harmony, children, and spiritual growth. | يُعدّ تقليديًا مواتيًا جدًا للزواج. ويرتبط بالبركة والانسجام الطبيعي والذرّية والنموّ الروحي. |
| 3696 | AI-draft | Traditionally considered very favorable — warmth, harmony, and shared growth tend to mark this family bond. | يُعدّ تقليديًا مواتيًا جدًا — يطبع الدفءُ والانسجام والنموّ المشترك هذه الرابطة العائلية. |
| 3697 | AI-draft | This connection is traditionally favorable — harmony, growth, and ease tend to flow naturally between the two. Gratitude keeps the blessing from being taken for granted. | هذه الصلة مواتية تقليديًا — الانسجام والنموّ واليسر تنساب طبيعيًا بين الاثنين. والشكر يحفظ النعمة من أن تُعدّ أمرًا مسلّمًا. |
| 3698 | AI-draft | A genuinely blessed friendship — trust, ease, and mutual growth come naturally. Keep showing up for each other so the bond doesn't drift into complacency. | صداقة مباركة حقًّا — الثقة واليسر والنموّ المتبادل تأتي طبيعيًا. واصلا الحضور لبعضكما كي لا تنجرف الرابطة إلى التراخي. |
| 3699 | AI-draft | Family ties here tend to be a source of real blessing — warmth, support, and shared growth. Nurture the bond actively rather than assuming it as given. | تميل الروابط العائلية هنا إلى أن تكون مصدر بركة حقيقية — دفء وسند ونموّ مشترك. ارعوا الرابطة بفاعلية ولا تعدّوها مضمونة. |
| 3700 | AI-draft | A productive, mutually beneficial working relationship where success tends to come naturally. Stay grounded and avoid overconfidence as things go well. | علاقة عمل منتجة نافعة للطرفين يأتي فيها النجاح طبيعيًا. ابقوا متواضعين وتجنّبوا الإفراط في الثقة حين تسير الأمور جيدًا. |
| 3701 | AI-draft | Traditionally shows recurring quarrels and discord — tests of anger, pride, and ego are common until inner work is done. | يدلّ تقليديًا على خصومات وخلافات متكرّرة — وابتلاءات الغضب والكبر والأنا شائعة حتى تُجاهَد النفس. |
| 3702 | AI-draft | Traditionally shows recurring quarrels and discord in marriage. Tests of anger, pride, and ego are common. | يدلّ تقليديًا على خصومات وخلافات متكرّرة في الزواج. وابتلاءات الغضب والكبر والأنا شائعة. |
| 3703 | AI-draft | Traditionally shows recurring small quarrels — tests of pride and ego may repeat until self-awareness grows. | يدلّ تقليديًا على خصومات صغيرة متكرّرة — قد تتكرّر ابتلاءات الكبر والأنا حتى ينمو الوعي بالنفس. |
| 3704 | AI-draft | Traditionally shows recurring discord — old patterns of pride and ego may resurface until addressed with forgiveness. | يدلّ تقليديًا على خلاف متكرّر — قد تعود أنماط قديمة من الكبر والأنا حتى تُعالج بالعفو. |
| 3705 | AI-draft | Traditionally shows recurring friction — tests of ego and power may repeat until clear roles and respect are established. | يدلّ تقليديًا على احتكاك متكرّر — قد تتكرّر ابتلاءات الأنا والسلطة حتى تتّضح الأدوار ويقوم الاحترام. |
| 3706 | AI-draft | This bond tends to surface recurring friction tied to pride and ego. Self-awareness on both sides is what breaks the cycle. | تميل هذه الرابطة إلى إظهار احتكاك متكرّر مرتبط بالكبر والأنا. والوعي بالنفس من الطرفين هو ما يكسر الدورة. |
| 3707 | AI-draft | Friendships here often involve repeated small conflicts, sometimes over who's 'right.' Letting go of ego keeps the friendship from wearing thin. | تتضمّن الصداقات هنا غالبًا خلافات صغيرة متكرّرة، أحيانًا حول «من المُحقّ». والتخلّي عن الأنا يحفظ الصداقة من البِلى. |
| 3708 | AI-draft | Family relationships under this pattern often carry old, recurring disagreements. Forgiveness and honest self-reflection are what finally shift the pattern. | تحمل العلاقات العائلية في هذا النمط غالبًا خلافات قديمة متكرّرة. والعفو ومحاسبة النفس الصادقة هما ما يغيّر النمط أخيرًا. |
| 3709 | AI-draft | Traditionally considered the most favorable of all patterns — early obstacles often give way to strong blessings and alignment. | يُعدّ تقليديًا أكثر الأنماط مواتاة — غالبًا ما تُفضي العقبات الأولى إلى بركات قوية وانسجام. |
| 3710 | AI-draft | Traditionally considered the most favorable for marriage. May face obstacles early on, but strong blessings and alignment often follow. | يُعدّ تقليديًا أكثر الأنماط مواتاة للزواج. قد يواجه عقبات في البداية، لكن البركات القوية والانسجام كثيرًا ما تتبع. |
| 3711 | AI-draft | Traditionally considered one of the most favorable patterns for friendship — early distance often resolves into deep loyalty. | يُعدّ تقليديًا من أكثر الأنماط مواتاة للصداقة — كثيرًا ما يتحوّل البُعد الأول إلى وفاء عميق. |
| 3712 | AI-draft | Traditionally considered one of the most favorable patterns for family bonds — early difficulty often gives way to lasting depth. | يُعدّ تقليديًا من أكثر الأنماط مواتاة للروابط العائلية — كثيرًا ما تُفضي الصعوبة الأولى إلى عمق دائم. |
| 3713 | AI-draft | Traditionally considered one of the most favorable patterns for partnership — early friction often resolves into a highly aligned collaboration. | يُعدّ تقليديًا من أكثر الأنماط مواتاة للشراكة — كثيرًا ما يتحوّل الاحتكاك الأول إلى تعاون شديد الانسجام. |
| 3714 | AI-draft | Traditionally the most favorable connection — early obstacles often give way to a deep, aligned bond. Trust the process rather than forcing it. | الصلة الأكثر مواتاة تقليديًا — كثيرًا ما تُفضي العقبات الأولى إلى رابطة عميقة منسجمة. ثق بالمسار ولا تستعجله. |
| 3715 | AI-draft | One of the strongest friendship patterns — any early distance or misunderstanding tends to resolve into a deeply loyal bond. Let it develop at its own pace. | من أقوى أنماط الصداقة — يميل أي بُعد أو سوء فهم أوّل إلى التحوّل إلى رابطة وفية عميقة. دعها تنمو على مهل. |
| 3716 | AI-draft | Family bonds here often carry real depth, even if the relationship faced early distance or difficulty. What follows tends to be lasting and meaningful. | تحمل الروابط العائلية هنا غالبًا عمقًا حقيقيًا، حتى لو واجهت العلاقة بُعدًا أو صعوبة أولى. وما يتبع يميل إلى أن يكون دائمًا ذا معنى. |
| 3717 | AI-draft | Pride in the blessing, external interference early on, and assuming ease means no effort is needed. | الاغترار بالنعمة، وتدخّل الآخرين في البداية، وظنّ أن اليسر يعني الاستغناء عن الجهد. |
| 3718 | AI-draft | Traditionally very good for the long term, though early misunderstandings are common — patience transforms this into a strong bond. | جيد جدًا تقليديًا على المدى البعيد، وإن كان سوء الفهم الأول شائعًا — والصبر يحوّله إلى رابطة قوية. |
| 3719 | AI-draft | Traditionally very good for marriage over the long term, though early misunderstandings are common. | جيد جدًا تقليديًا للزواج على المدى البعيد، وإن كان سوء الفهم الأول شائعًا. |
| 3720 | AI-draft | Traditionally very good for the long term — early friction is common, but patience often builds a highly reliable partnership. | جيد جدًا تقليديًا على المدى البعيد — الاحتكاك الأول شائع، لكن الصبر كثيرًا ما يبني شراكة موثوقة جدًا. |
| 3721 | AI-draft | This connection often starts with confusion or misjudgment but strengthens significantly with time. Patience is what unlocks its real depth. | تبدأ هذه الصلة غالبًا بحيرة أو سوء تقدير لكنها تقوى كثيرًا مع الوقت. والصبر هو مفتاح عمقها الحقيقي. |
| 3722 | AI-draft | Friendships here can start awkwardly or take time to click, but often become some of the most enduring bonds. Don't judge it too early. | قد تبدأ الصداقات هنا متعثّرة أو تحتاج وقتًا لتتّضح، لكنها كثيرًا ما تصير من أدوم الروابط. لا تحكم عليها مبكرًا. |
| 3723 | AI-draft | Family relationships under this pattern may start with distance or misunderstanding but tend to deepen meaningfully over the years. Give the bond time. | قد تبدأ العلاقات العائلية في هذا النمط ببُعد أو سوء فهم لكنها تميل إلى التعمّق مع السنين. امنح الرابطة وقتها. |
| 3724 | AI-draft | Working relationships here often start rocky — mismatched expectations or slow trust-building — but tend to become highly reliable partnerships over time. | تبدأ علاقات العمل هنا غالبًا متعثّرة — توقّعات غير متوافقة أو ثقة بطيئة — لكنها تميل إلى أن تصير شراكات موثوقة جدًا مع الوقت. |
| 3725 | AI-draft | Traditionally warned against for binding commitments — associated with severe hardship, sudden breaks, and recurring harm. | يُحذَّر منه تقليديًا في الالتزامات الملزمة — ويرتبط بمشقّة شديدة وانقطاعات مفاجئة وأذى متكرّر. |
| 3726 | AI-draft | Traditionally warned against for marriage. Associated with severe hardship, sudden breaks, and recurring harm patterns. | يُحذَّر منه تقليديًا في الزواج. ويرتبط بمشقّة شديدة وانقطاعات مفاجئة وأنماط أذى متكرّرة. |
| 3727 | AI-draft | Traditionally warned against for close, binding friendship — sudden falling-outs and recurring hurt are associated risks. | يُحذَّر منه تقليديًا في الصداقة الوثيقة — والقطيعة المفاجئة والأذى المتكرّر من مخاطره. |
| 3728 | AI-draft | Traditionally associated with real difficulty in family bonds — estrangement and recurring conflict are common risks. | يرتبط تقليديًا بصعوبة حقيقية في الروابط العائلية — والجفاء والخلاف المتكرّر من مخاطره الشائعة. |
| 3729 | AI-draft | Traditionally warned against for binding partnership — sudden fallout and recurring breakdowns in trust are associated risks. | يُحذَّر منه تقليديًا في الشراكة الملزمة — والانهيار المفاجئ وتكرّر فقدان الثقة من مخاطره. |
| 3730 | AI-draft | Traditionally a difficult pattern, associated with sudden breaks and recurring strain. Extreme caution and spiritual protection are advised. | نمط صعب تقليديًا، يرتبط بانقطاعات مفاجئة وعناء متكرّر. يُنصح بالحذر الشديد والتحصّن بالأذكار. |
| 3731 | AI-draft | Friendships under this pattern can be prone to sudden falling-outs or repeated hurt. Approach with awareness, and don't ignore recurring red flags. | قد تكون الصداقات في هذا النمط عرضة للقطيعة المفاجئة أو الأذى المتكرّر. اقترب بوعي ولا تتجاهل العلامات المتكرّرة. |
| 3732 | AI-draft | Family ties here can carry real difficulty, including estrangement or repeated conflict. Seek wise counsel and increase protective practices rather than forcing closeness. | قد تحمل الروابط العائلية هنا صعوبة حقيقية، منها الجفاء أو الخلاف المتكرّر. اطلب نصح الحكماء وأكثِر من الأذكار بدل فرض القرب. |
| 3733 | AI-draft | Professional partnerships under this pattern carry real risk — sudden fallout or repeated breakdowns in trust are common. Proceed with caution and clear agreements. | تحمل الشراكات المهنية في هذا النمط خطرًا حقيقيًا — الانهيار المفاجئ أو تكرّر فقدان الثقة شائع. تقدّم بحذر واتفاقات واضحة. |
| 3734 | AI-draft | New beginnings and fresh energy. This pairing initiates new chapters together. | بدايات جديدة وطاقة متجدّدة. هذا الاقتران يفتتح فصولًا جديدة معًا. |
| 3735 | AI-draft | Balance and duality. Both individuals complement each other through cooperation. | التوازن والثنائية. يتكامل الطرفان بالتعاون. |
| 3736 | AI-draft | Friction and discord. This pairing faces fundamental differences that require careful navigation. | احتكاك وخلاف. يواجه هذا الاقتران اختلافات جوهرية تتطلّب سيرًا حذرًا. |
| 3737 | AI-draft | Stability and structure. A grounded partnership built on solid foundations. | الثبات والنظام. شراكة متجذّرة مبنية على أسس متينة. |
| 3738 | AI-draft | Dynamic change and adaptability. This pairing thrives on variety and movement. | تغيّر حيوي وتكيّف. يزدهر هذا الاقتران بالتنوّع والحركة. |
| 3739 | AI-draft | Spiritual harmony and wisdom. An ideal match with deep understanding. | انسجام روحي وحكمة. توافق مثالي بفهم عميق. |
| 3740 | AI-draft | Abundance and manifestation. This pair has strong potential for achievement. | الوفرة والتحقيق. لهذا الثنائي إمكانات قوية للإنجاز. |
| 3741 | AI-draft | Cycle ending and completion. This connection may represent a karmic conclusion or natural closure. | نهاية الدورة والإتمام. قد تمثّل هذه الصلة خاتمة أو إغلاقًا طبيعيًا. |
| 3742 | AI-draft | Emotional depth and intuitive connection. A nurturing and empathetic bond. | عمق عاطفي وصلة حدسية. رابطة راعية متعاطفة. |
| 3743 | AI-draft | Intellectual stimulation and clear communication. Mental compatibility is strong. | تحفيز فكري وتواصل واضح. التوافق الذهني قوي. |
| 3744 | AI-draft | Practical stability and reliable support. A grounded, lasting partnership. | ثبات عملي وسند موثوق. شراكة متجذّرة دائمة. |
| 3745 | AI-draft | are harmonious celestial allies. Their cosmic energies flow smoothly together. | حليفان سماويّان منسجمان، تنساب طاقتاهما معًا بسلاسة. |
| 3746 | AI-draft | have challenging cosmic aspects. Growth comes through navigating differences. | بينهما جوانب فلكية صعبة. والنموّ يأتي بتجاوز الاختلافات. |
| 3747 | ✅ reviewed | share exceptional compatibility across spiritual, elemental, and cosmic dimensions. This pairing has strong potential for harmony and mutual growth. | يتشاركان توافقًا استثنائيًا في أبعاد الروح والعناصر والفلك. ولهذا الاقتران إمكانات قوية للانسجام والنموّ المتبادل. |
| 3748 | AI-draft | have good compatibility with balanced energies. With understanding and effort, this connection can flourish. | بينهما توافق جيد بطاقات متوازنة. وبالتفاهم والجهد يمكن لهذه الصلة أن تزدهر. |
| 3749 | AI-draft | Your Fire–Fire combination creates intense passion and drive. Channel this energy into shared goals to avoid burnout. | يصنع اجتماع النار بالنار شغفًا واندفاعًا شديدين. وجّها هذه الطاقة إلى أهداف مشتركة لتجنّب الإنهاك. |
| 3750 | AI-draft | Your Fire–Air mix ignites creativity and inspiration. Balance spontaneity with thoughtful planning. | يُشعل مزيج النار والهواء الإبداع والإلهام. وازنا العفوية بالتخطيط المتأنّي. |
| 3751 | AI-draft | Your Fire–Water mix creates transformation through emotion and passion. Allow emotions to cool before major decisions. | يصنع مزيج النار والماء تحوّلًا بالعاطفة والشغف. دعا المشاعر تهدأ قبل القرارات الكبرى. |
| 3752 | AI-draft | Your Fire–Earth combination blends passion with practicality. Let vision meet execution for powerful results. | يمزج اجتماع النار والتراب الشغف بالعملية. لتلتقِ الرؤية بالتنفيذ لنتائج قوية. |
| 3753 | AI-draft | Your Air–Air pairing enhances intellectual synergy. Ground ideas in action to manifest your shared visions. | يعزّز اقتران الهواء بالهواء التآزر الفكري. جذّرا الأفكار في العمل لتحقيق رؤاكما المشتركة. |
| 3754 | AI-draft | Your Air–Water blend merges intellect with intuition. Trust both logic and feelings in decision-making. | يمزج الهواء والماء العقل بالحدس. ثقا بالمنطق والمشاعر معًا في اتّخاذ القرار. |
| 3755 | AI-draft | Your Air–Earth combination balances ideas with implementation. Communicate clearly while building tangible foundations. | يوازن اجتماع الهواء والتراب الأفكار بالتنفيذ. تواصلا بوضوح وأنتما تبنيان أسسًا ملموسة. |
| 3756 | AI-draft | Your Water–Water connection deepens emotional bonds. Create boundaries to prevent emotional overwhelm. | تعمّق صلة الماء بالماء الروابط العاطفية. ضعا حدودًا لتجنّب الإرهاق العاطفي. |
| 3757 | AI-draft | Your Water–Earth pairing nurtures growth and stability. Combine emotional depth with practical care. | يرعى اقتران الماء بالتراب النموّ والثبات. اجمعا العمق العاطفي بالرعاية العملية. |
| 3758 | AI-draft | Your Earth–Earth foundation builds lasting security. Embrace flexibility to keep the relationship dynamic. | يبني أساس التراب بالتراب أمانًا دائمًا. تقبّلا المرونة لتبقى العلاقة حيوية. |
| 3759 | AI-draft | Your spiritual alignment is exceptional. Continue deepening your shared understanding through meditation or reflection together. | انسجامكما الروحي استثنائي. واصلا تعميق فهمكما المشترك بالتأمّل أو التدبّر معًا. |
| 3760 | AI-draft | Your spiritual paths may differ. Respect each other's journey and find common ground in shared values. | قد تختلف طريقاكما الروحيان. احترما رحلة كلٍّ منكما واجدا أرضًا مشتركة في القيم. |
| 3761 | AI-draft | energy creates dynamic interaction. Channel this into creative projects or shared adventures. | يصنع تفاعلًا حيويًا. وجّها هذا إلى مشاريع إبداعية أو مغامرات مشتركة. |
| 3762 | AI-draft | support each other naturally. Trust your intuitive connection. | يسند كلٌّ منهما الآخر طبيعيًا. ثقا بصلتكما الحدسية. |
| 3763 | AI-draft | create tension. Use this as an opportunity to learn from different perspectives. | يصنعان توتّرًا. اجعلاه فرصة للتعلّم من وجهات نظر مختلفة. |
| 3764 | AI-draft | energy harmonizes beautifully in daily life. Celebrate your natural understanding. | تنسجم طاقتهما انسجامًا جميلًا في الحياة اليومية. احتفيا بتفاهمكما الطبيعي. |
| 3765 | AI-draft | energies require conscious balance in daily routines. Create space for both styles. | تحتاج طاقتاهما إلى توازن واعٍ في الروتين اليومي. افسحا مجالًا للأسلوبين. |
| 3766 | AI-draft | Practice patience, kindness, and open communication to nurture your connection. | تحلّيا بالصبر واللطف والتواصل المفتوح لرعاية صلتكما. |
| 3767 | AI-draft | Both partners share Fire energy. Expect passion, enthusiasm, and dynamic action in daily life. May need to manage intensity. | يتشارك الطرفان طاقة النار. توقّعا شغفًا وحماسة وعملًا حيويًا في الحياة اليومية، وقد يلزم ضبط الشدّة. |
| 3768 | AI-draft | Both partners share Air energy. Daily interactions focus on communication, ideas, and mental stimulation. Keep conversations grounded. | يتشارك الطرفان طاقة الهواء. تتركّز التفاعلات اليومية على التواصل والأفكار والتحفيز الذهني. أبقيا الحديث متجذّرًا. |
| 3769 | AI-draft | Both partners share Water energy. Emotional depth and intuition guide daily life. Create healthy boundaries to avoid emotional overwhelm. | يتشارك الطرفان طاقة الماء. يقود العمق العاطفي والحدس الحياة اليومية. ضعا حدودًا صحّية لتجنّب الإرهاق العاطفي. |
| 3770 | AI-draft | Fire and Air energies fuel each other. Daily interactions are stimulating, creative, and full of movement. Channel this energy constructively. | تغذّي طاقتا النار والهواء بعضهما. فالتفاعلات اليومية محفّزة مبدعة مليئة بالحركة. وجّها هذه الطاقة توجيهًا بنّاءً. |
| 3771 | AI-draft | Earth and Water blend for growth and nurturing. Daily life balances practicality with emotional care. A naturally supportive combination. | يمتزج التراب والماء للنموّ والرعاية. توازن الحياة اليومية العمليةَ بالرعاية العاطفية. مزيج داعم بطبعه. |
| 3772 | AI-draft | Air and Earth represent ideas meeting practicality. Daily life requires balancing vision with execution. Communication is key. | يمثّل الهواء والتراب التقاء الأفكار بالعملية. تتطلّب الحياة اليومية موازنة الرؤية بالتنفيذ، والتواصل هو المفتاح. |
| 3773 | AI-draft | Fire and Earth combine action with stability. Daily interactions balance passion with practicality. Respect each other's pace. | يجمع النار والتراب العمل والثبات. توازن التفاعلات اليومية الشغف بالعملية. احترما إيقاع بعضكما. |
| 3774 | AI-draft | Air and Water blend logic with emotion. Daily life requires honoring both intellect and feelings. Find balance between thinking and feeling. | يمزج الهواء والماء المنطق بالعاطفة. تتطلّب الحياة اليومية إكرام العقل والمشاعر معًا. جِدا التوازن بين التفكير والإحساس. |
| 3775 | ✅ reviewed | interaction. This unique combination brings together different elemental energies in daily life. | تفاعل. يجمع هذا المزيج الفريد طاقات عناصر مختلفة في الحياة اليومية. |
| 3776 | AI-draft | Unknown Pairing | اقتران غير معروف |
| 3777 | AI-draft | Schedule calm time together. Practice listening, not just doing. | خصّصا وقتًا هادئًا معًا. تدرّبا على الإصغاء لا على الفعل وحده. |
| 3778 | AI-draft | May overlook emotional depth and practical details. All vision, little grounding. | قد تغفلان عن العمق العاطفي والتفاصيل العملية. رؤية كثيرة وتجذّر قليل. |
| 3779 | AI-draft | Weekly check-ins: 'How are you feeling?' not just 'What are you doing?' | مراجعة أسبوعية: «كيف تشعر؟» لا «ماذا تفعل؟» فقط. |
| 3780 | AI-draft | Different paces: Fire rushes, Earth takes time. May feel like you're pulling in opposite directions. | إيقاعان مختلفان: النار تستعجل والتراب يتمهّل. قد تشعران بأنكما تشدّان في اتجاهين متعاكسين. |
| 3781 | AI-draft | Combine planning sessions (Earth) with spontaneous adventures (Fire). Honor both approaches. | اجمعا جلسات التخطيط (التراب) بالمغامرات العفوية (النار). أكرِما النهجين. |
| 3782 | AI-draft | May overthink or avoid emotional vulnerability. All head, not enough heart. | قد تفرطان في التفكير أو تتجنّبان الانكشاف العاطفي. عقل كثير وقلب قليل. |
| 3783 | AI-draft | Set 'no-analysis' zones. Practice feeling without discussing. Touch more, talk less sometimes. | خصّصا أوقاتًا «بلا تحليل». تدرّبا على الإحساس دون نقاش. قلّلا الكلام وأكثِرا المودّة أحيانًا. |
| 3784 | AI-draft | Create vision boards together (Air), then assign tasks and timelines (Earth). Meet in the middle. | اصنعا لوحات رؤية معًا (الهواء)، ثم وزّعا المهامّ والمواعيد (التراب). والتقيا في الوسط. |
| 3785 | AI-draft | May drown in emotions together. Can become isolated from the outside world. Need Air's perspective. | قد تغرقان في المشاعر معًا وتنعزلان عن العالم. تحتاجان إلى منظور الهواء. |
| 3786 | AI-draft | Journal together, then discuss what you wrote. Bring emotions into words. Connect with others too. | دوّنا معًا ثم ناقشا ما كتبتما. حوّلا المشاعر إلى كلمات، وتواصلا مع الآخرين أيضًا. |
| 3787 | AI-draft | Natural harmony. Water nourishes Earth, Earth holds Water. Like a garden—growth happens organically. | انسجام طبيعي. الماء يغذّي التراب، والتراب يحفظ الماء. كالبستان — ينمو الخير طبيعيًا. |
| 3788 | AI-draft | May avoid conflict or become stagnant. Too comfortable can mean no growth challenges. | قد تتجنّبان الخلاف أو تركدان. فالراحة المفرطة قد تعني غياب تحدّيات النموّ. |
| 3789 | AI-draft | Cook together, garden, create with your hands. Embrace gentle change. Try new things monthly. | اطبخا معًا، وازرعا، واصنعا بأيديكما. تقبّلا التغيير اللطيف، وجرّبا جديدًا كل شهر. |
| 3790 | AI-draft | May resist change or become too routine. Both can be stubborn. Life feels safe but may lack spontaneity. | قد تقاومان التغيير أو تغرقان في الروتين. كلاكما قد يكون عنيدًا. الحياة آمنة لكن قد تنقصها العفوية. |
| 3791 | AI-draft | Strong Emotional Foundation ( | أساس عاطفي قوي ( |
| 3792 | AI-draft | Natural Daily Compatibility ( | توافق يومي طبيعي ( |
| 3793 | AI-draft | %): Your conscious personalities align well. Communication feels easy and you "get" each other's thought processes without much explanation. | %): شخصيّتاكما الواعيتان منسجمتان. التواصل سهل وتفهمان طريقة تفكير بعضكما دون كثير شرح. |
| 3794 | AI-draft | Surface Dynamic: | الديناميكية الظاهرة: |
| 3795 | AI-draft | %) - Your daily interaction styles differ. | %) - أسلوبا تفاعلكما اليومي مختلفان. |
| 3796 | AI-draft | approach may clash with | قد يتصادم نهج |
| 3797 | AI-draft | style in routine decisions. | مع أسلوب الآخر في القرارات اليومية. |
| 3798 | AI-draft | %) - Your inherited emotional patterns differ. What feels "natural" to one may seem foreign to the other. This requires conscious emotional education between you. | %) - أنماطكما العاطفية الموروثة مختلفة. فما يبدو «طبيعيًا» لأحدكما قد يبدو غريبًا للآخر. وهذا يتطلّب تعلّمًا عاطفيًا واعيًا بينكما. |
| 3799 | AI-draft | Cook slow meals together - teaches Fire patience, gives Earth quality time | اطبخا وجبات على مهل معًا - تعلّم النار الصبر وتمنح التراب وقتًا طيبًا |
| 3800 | AI-draft | Evening walks after work - Fire burns energy, Earth processes the day | نزهات مسائية بعد العمل - النار تُفرغ طاقتها والتراب يراجع يومه |
| 3801 | AI-draft | Create a "soft space" for hard conversations - neutral zone for both temperaments | اصنعا «مساحة لطيفة» للمحادثات الصعبة - منطقة محايدة للطبعين |
| 3802 | AI-draft | Monthly check-ins - structured time to discuss emotions without defensiveness | مراجعات شهرية - وقت منظّم لمناقشة المشاعر دون دفاعية |
| 3803 | AI-draft | Journal together - Air analyzes, Water feels, both learn from the other's lens | دوّنا معًا - الهواء يحلّل والماء يشعر، ويتعلّم كلٌّ من عدسة الآخر |
| 3804 | AI-draft | Create "thinking time" and "feeling time" - honor both processing styles | خصّصا «وقتًا للتفكير» و«وقتًا للإحساس» - أكرِما أسلوبي المعالجة |
| 3805 | AI-draft | Build together - Air designs, Earth executes, celebrate both contributions | ابنيا معًا - الهواء يصمّم والتراب ينفّذ، واحتفيا بالإسهامين |
| 3806 | AI-draft | The Subtle One - Cools intensity, brings gentleness | اللطيف - يُبرِد الحدّة ويجلب الرفق |
| 3807 | AI-draft | The All-Strong - Builds boundaries, strengthens resolve | القوي - يبني الحدود ويقوّي العزم |
| 3808 | AI-draft | The All-Wise - Grounds ideas, brings practical wisdom | الحكيم - يجذّر الأفكار ويجلب الحكمة العملية |
| 3809 | AI-draft | The Opener - Releases rigidity, invites flow | الفتّاح - يحلّ الجمود ويدعو إلى الانسياب |
| 3810 | AI-draft | Together: Yā Wadūd (يا ودود) - The Most Loving - Cultivates love and affection between hearts | معًا: يا ودود - لتنمية المحبّة والمودّة بين القلوب |
| 3811 | AI-draft | Mother | الأم |
| 3812 | AI-draft | Location unavailable — allow it in your browser settings to use your city. | الموقع غير متاح — اسمح به في إعدادات المتصفّح لاستعمال مدينتك. |
| 3813 | AI-draft | Scan this range | افحص هذا النطاق |
| 3814 | AI-draft | Least-afflicted time | أقلّ الأوقات نحوسة |
| 3815 | AI-draft | No acceptable dates found within 45 days. | لم يُعثر على تواريخ مقبولة خلال 45 يومًا. |
| 3816 | AI-draft | Top 5 dates | أفضل 5 تواريخ |
| 3817 | AI-draft | Sunna & Fiqh | السنّة والفقه |
| 3818 | AI-draft | Pass | مستوفى |
| 3819 | AI-draft | Fail | غير مستوفى |
| 3820 | AI-draft | Bonus | زيادة |
| 3821 | AI-draft | Penalty | خصم |
| 3822 | AI-draft | Hard fail | مانع قاطع |
| 3823 | ✅ reviewed | Conditions worsen later this day — | تُعدّ بقية هذا اليوم تقليديًا وقتًا أثقل — |
| 3824 | AI-draft | after ~ | بعد ~ |
| 3825 | AI-draft | Conditions were better earlier this day — | كانت الأحوال أفضل في وقت أبكر من هذا اليوم — |
| 3826 | AI-draft | Mercury Retrograde (Contracts) | رجوع عطارد (العقود) |
| 3827 | AI-draft | Mercury is retrograde — the single most-cited classical caution against signing contracts, starting negotiations, or finalizing a sale. | عطارد راجع — وهذا أشهر تحذير كلاسيكي من توقيع العقود أو بدء المفاوضات أو إتمام البيع. |
| 3828 | AI-draft | Mercury is direct. | عطارد مستقيم. |
| 3829 | AI-draft | Moon has no applying aspect before leaving its current sign — void of course, nothing "comes of" a deal begun now. | لا يتّصل القمر بأي نظر قبل خروجه من برجه — فهو خالي السير، ولا يُرجى «ثمرة» لصفقة تبدأ الآن. |
| 3830 | AI-draft | Mercury Combust | احتراق عطارد |
| 3831 | AI-draft | ° from the Sun — not combust. | ° من الشمس — غير محترق. |
| 3832 | AI-draft | Moon applying to a | القمر متّصل بـ |
| 3833 | AI-draft | ° — warns of dispute, loss, or a deal turning sour. | ° — يحذّر من نزاع أو خسارة أو فساد الصفقة. |
| 3834 | AI-draft | Moon is not applying to a hard aspect with Saturn or Mars. | القمر غير متّصل بنظر صعب مع زحل أو المريخ. |
| 3835 | AI-draft | , orbe | ، بفلك |
| 3836 | AI-draft | Moon elongation | بُعد القمر عن الشمس |
| 3837 | AI-draft | ° — waning. | ° — ناقص النور. |
| 3838 | AI-draft | Moon Applying to Jupiter (Gain) | اتّصال القمر بالمشتري (الربح) |
| 3839 | AI-draft | with Jupiter, orb | مع المشتري، بفلك |
| 3840 | AI-draft | ° — Jupiter is the classical significator of profit and gain. | ° — المشتري هو الدالّ الكلاسيكي على الربح والكسب. |
| 3841 | AI-draft | Moon is not applying to a favorable aspect with Jupiter. | القمر غير متّصل بنظر حسن مع المشتري. |
| 3842 | AI-draft | Moon Applying to Venus (Smooth Dealing) | اتّصال القمر بالزهرة (حسن المعاملة) |
| 3843 | AI-draft | with Venus, orb | مع الزهرة، بفلك |
| 3844 | AI-draft | ° — favorable for amicable dealing between the parties. | ° — مواتٍ لحسن التعامل بين الطرفين. |
| 3845 | AI-draft | Moon is not applying to a favorable aspect with Venus. | القمر غير متّصل بنظر حسن مع الزهرة. |
| 3846 | AI-draft | Mercury Dignified | عطارد في كرامة |
| 3847 | AI-draft | Mercury has no domicile bonus in this sign. | لا زيادة بيت لعطارد في هذا البرج. |
| 3848 | AI-draft | Mercury Free of Fall/Detriment | عطارد سالم من الهبوط والوبال |
| 3849 | AI-draft | — in fall or detriment. | — في هبوط أو وبال. |
| 3850 | AI-draft | — free of fall or detriment. | — سالم من الهبوط والوبال. |
| 3851 | AI-draft | This window is not in a Mercury or Jupiter hour. | هذه النافذة ليست في ساعة عطارد أو المشتري. |
| 3852 | AI-draft | in fall/detriment | في هبوط/وبال |
| 3853 | AI-draft | This window is in the planetary hour of | هذه النافذة في الساعة الكوكبية لـ |
| 3854 | AI-draft | — no bonus. [SCHOLAR-REVIEW] | — بلا زيادة. [للمراجعة العلمية] |
| 3855 | AI-draft | Wednesday (day of Mercury) — favorable for negotiation and contracts. | الأربعاء (يوم عطارد) — مواتٍ للتفاوض والعقود. |
| 3856 | AI-draft | Thursday (day of Jupiter) — favorable for profit and gain. | الخميس (يوم المشتري) — مواتٍ للربح والكسب. |
| 3857 | AI-draft | Not a day classically associated with favorable business dealings. | ليس يومًا يرتبط كلاسيكيًا بحسن المعاملات التجارية. |
| 3858 | AI-draft | جيد (Jayyid) | جيد |
| 3859 | AI-draft | اجتناب (Ijtanib) | اجتنب |
| 3860 | AI-draft | Mercury Retrograde (Study/Comprehension) | رجوع عطارد (الدراسة والفهم) |
| 3861 | AI-draft | Mercury is retrograde — the same classical caution cited against contracts in the business rules applies here: avoid starting serious study, an exam, or a new course while Mercury retrogrades. | عطارد راجع — ويسري هنا التحذير الكلاسيكي نفسه المذكور في العقود: تجنّب بدء دراسة جادّة أو امتحان أو مقرّر جديد وعطارد راجع. |
| 3862 | AI-draft | Moon Applying to Jupiter (Wisdom/Comprehension) | اتّصال القمر بالمشتري (الحكمة والفهم) |
| 3863 | AI-draft | ° — Jupiter is the classical significator of wisdom and comprehension. | ° — المشتري هو الدالّ الكلاسيكي على الحكمة والفهم. |
| 3864 | AI-draft | Moon Applying to Mercury (Retention) | اتّصال القمر بعطارد (الحفظ) |
| 3865 | AI-draft | with Mercury, orb | مع عطارد، بفلك |
| 3866 | AI-draft | ° — favorable for retention and a receptive mind. | ° — مواتٍ للحفظ وتهيّؤ الذهن. |
| 3867 | AI-draft | Moon is not applying to a favorable aspect with Mercury. | القمر غير متّصل بنظر حسن مع عطارد. |
| 3868 | AI-draft | ° — warns of frustration, blocked progress, or discouragement. | ° — يحذّر من الإحباط أو تعثّر التقدّم أو الفتور. |
| 3869 | AI-draft | Jupiter Free of Fall/Detriment | المشتري سالم من الهبوط والوبال |
| 3870 | AI-draft | Jupiter is in | المشتري في |
| 3871 | AI-draft | — free of fall or detriment, supporting comprehension and wisdom. | — سالم من الهبوط والوبال، يدعم الفهم والحكمة. |
| 3872 | AI-draft | Wednesday (day of Mercury) — favorable for study and comprehension. | الأربعاء (يوم عطارد) — مواتٍ للدراسة والفهم. |
| 3873 | AI-draft | Thursday (day of Jupiter) — favorable for wisdom and understanding. | الخميس (يوم المشتري) — مواتٍ للحكمة والفهم. |
| 3874 | AI-draft | Not a day classically associated with favorable study. | ليس يومًا يرتبط كلاسيكيًا بحسن الدراسة. |
| 3875 | AI-draft | Moon Applying to Mars (Hard Aspect) | اتّصال القمر بالمريخ (نظر صعب) |
| 3876 | AI-draft | with Mars, orb | مع المريخ، بفلك |
| 3877 | AI-draft | Moon is not applying to a hard aspect with Mars. | القمر غير متّصل بنظر صعب مع المريخ. |
| 3878 | AI-draft | Moon Sign Modality (Fixed/Movable) | طبيعة برج القمر (ثابت/منقلب) |
| 3879 | AI-draft | — a mutable sign, neutral for this purpose. | — برج ذو جسدين، محايد لهذا الغرض. |
| 3880 | AI-draft | Moon is not applying to a favorable aspect with Venus or Jupiter. | القمر غير متّصل بنظر حسن مع الزهرة أو المشتري. |
| 3881 | AI-draft | Saturn Dignified (Domicile) | زحل في كرامة (بيته) |
| 3882 | AI-draft | Saturn has no domicile bonus in this sign. | لا زيادة بيت لزحل في هذا البرج. |
| 3883 | AI-draft | Saturn Free of Fall/Detriment | زحل سالم من الهبوط والوبال |
| 3884 | AI-draft | Saturn Retrograde | رجوع زحل |
| 3885 | AI-draft | Saturn is retrograde — increased risk of delays, cost overruns, or rework during construction. | زحل راجع — يزداد خطر التأخير وتجاوز التكاليف أو إعادة العمل في البناء. |
| 3886 | AI-draft | Saturn is direct. | زحل مستقيم. |
| 3887 | AI-draft | This window is not in a Saturn or Jupiter hour. | هذه النافذة ليست في ساعة زحل أو المشتري. |
| 3888 | AI-draft | Saturday (day of Saturn) — favorable for foundations and lasting structures. | السبت (يوم زحل) — مواتٍ للأسس والبنى الدائمة. |
| 3889 | AI-draft | Thursday (day of Jupiter) — favorable for a settled, supported household. | الخميس (يوم المشتري) — مواتٍ لبيت مستقرّ مُعان. |
| 3890 | AI-draft | Not a day classically associated with favorable building or moving. | ليس يومًا يرتبط كلاسيكيًا بحسن البناء أو الانتقال. |
| 3891 | AI-draft | ° — waning into the last quarter approaching new moon. | ° — ناقص يقترب من التربيع الأخير قبل المحاق. |
| 3892 | AI-draft | ° — not in muḥāq. | ° — ليس في المحاق. |
| 3893 | AI-draft | ° from the Sun — combust (muḥtaraq). | ° من الشمس — محترق. |
| 3894 | AI-draft | Moon has no applying Ptolemaic aspect before leaving its current sign — void of course. | لا يتّصل القمر بأي نظر بطلمي قبل خروجه من برجه — خالي السير. |
| 3895 | AI-draft | Moon applying to | القمر متّصل بـ |
| 3896 | AI-draft | No applying hard aspect to Saturn or Mars within 6°. | لا اتّصال بنظر صعب مع زحل أو المريخ في حدود 6°. |
| 3897 | AI-draft | h away). | س بعيدًا). |
| 3898 | AI-draft | ° from the Sun — under the beams. | ° من الشمس — تحت الشعاع. |
| 3899 | AI-draft | Moon is not in the waning penalty band. | القمر ليس في نطاق النقصان المكروه. |
| 3900 | AI-draft | ° ecliptic — within via combusta (15° Libra–15° Scorpio). | ° من فلك البروج — في الطريق المحترقة (15° الميزان – 15° العقرب). |
| 3901 | AI-draft | Moon is outside via combusta. | القمر خارج الطريق المحترقة. |
| 3902 | AI-draft | Moon in Scorpio — fall. | القمر في العقرب — هبوط. |
| 3903 | AI-draft | Moon in Capricorn — detriment. | القمر في الجدي — وبال. |
| 3904 | AI-draft | Moon is not in fall or detriment. | القمر ليس في هبوط ولا وبال. |
| 3905 | AI-draft | ° from the Sun — combust. | ° من الشمس — محترق. |
| 3906 | AI-draft | Venus is not combust. | الزهرة غير محترقة. |
| 3907 | AI-draft | Venus is retrograde. | الزهرة راجعة. |
| 3908 | AI-draft | Venus is direct. | الزهرة مستقيمة. |
| 3909 | AI-draft | Venus in Virgo — fall. | الزهرة في العذراء — هبوط. |
| 3910 | AI-draft | Venus in | الزهرة في |
| 3911 | AI-draft | — exil. | — وبال. |
| 3912 | AI-draft | Venus is not in fall or detriment. | الزهرة ليست في هبوط ولا وبال. |
| 3913 | AI-draft | Mercury is retrograde — caution for the nikāḥ contract itself. | عطارد راجع — احتياط لعقد النكاح نفسه. |
| 3914 | ✅ reviewed | Moon is applying to a benefic today. | القمر متّصل بكوكبٍ سعدٍ اليوم. |
| 3915 | AI-draft | Moon is not applying to Venus or Jupiter today — separating from the benefics. | القمر غير متّصل بالزهرة أو المشتري اليوم — منصرف عن السعدين. |
| 3916 | AI-draft | Moon is not in the favorable waxing band. | القمر ليس في نطاق الزيادة المواتي. |
| 3917 | AI-draft | Moon in Cancer — domicile. | القمر في السرطان — بيته. |
| 3918 | AI-draft | Moon in Taurus — exaltation. | القمر في الثور — شرفه. |
| 3919 | AI-draft | Moon has no marriage-favorable dignity bonus in this sign. | لا زيادة كرامة للقمر في هذا البرج تناسب الزواج. |
| 3920 | AI-draft | Moon is not applying to Venus or Jupiter by a favorable aspect. | القمر غير متّصل بالزهرة أو المشتري بنظر حسن. |
| 3921 | AI-draft | Venus in Pisces — exaltation. | الزهرة في الحوت — شرفها. |
| 3922 | AI-draft | Venus has no dignity bonus in this sign. | لا زيادة كرامة للزهرة في هذا البرج. |
| 3923 | AI-draft | No day-of-week bonus. | لا زيادة ليوم الأسبوع. |
| 3924 | AI-draft | This window is not in a Venus, Moon, or Jupiter hour. | هذه النافذة ليست في ساعة الزهرة أو القمر أو المشتري. |
| 3925 | AI-draft | Moon in lunar mansion | القمر في منزلة |
| 3926 | AI-draft | — favorable for marriage. [SCHOLAR-REVIEW] | — مواتية للزواج. [للمراجعة العلمية] |
| 3927 | AI-draft | — unfavorable for marriage. [SCHOLAR-REVIEW] | — غير مواتية للزواج. [للمراجعة العلمية] |
| 3928 | AI-draft | ° — traditionally warns of complication, poor healing, or a worsened condition. | ° — يحذّر تقليديًا من التعقيد أو بطء الشفاء أو سوء الحال. |
| 3929 | AI-draft | — free of fall or detriment, supporting recovery. | — سالم من الهبوط والوبال، يدعم التعافي. |
| 3930 | AI-draft | Mercury Free of Fall/Detriment (Diagnosis) | عطارد سالم من الهبوط والوبال (التشخيص) |
| 3931 | AI-draft | Mercury Retrograde (Diagnosis) | رجوع عطارد (التشخيص) |
| 3932 | AI-draft | This window is not in a Moon or Jupiter hour. | هذه النافذة ليست في ساعة القمر أو المشتري. |
| 3933 | AI-draft | Monday (day of the Moon) — favorable, as the Moon is the primary significator of the body. | الاثنين (يوم القمر) — مواتٍ، لأن القمر هو الدالّ الأول على البدن. |
| 3934 | AI-draft | Thursday (day of Jupiter) — favorable for recovery and vital force. | الخميس (يوم المشتري) — مواتٍ للتعافي والقوة الحيوية. |
| 3935 | AI-draft | Not a day classically associated with favorable medical timing. | ليس يومًا يرتبط كلاسيكيًا بحسن التوقيت الطبي. |
| 3936 | AI-draft | ° — traditionally warns of danger, delay, or mishap en route. | ° — يحذّر تقليديًا من خطر أو تأخير أو عارض في الطريق. |
| 3937 | AI-draft | Moon Sign Modality (Movable/Fixed) | طبيعة برج القمر (منقلب/ثابت) |
| 3938 | AI-draft | — a mutable sign, neutral for travel timing. | — برج ذو جسدين، محايد لتوقيت السفر. |
| 3939 | AI-draft | Mercury Retrograde (Travel Plans/Documents) | رجوع عطارد (خطط السفر والوثائق) |
| 3940 | AI-draft | Mercury is retrograde — increased risk of itinerary changes, lost documents, or miscommunication. | عطارد راجع — يزداد خطر تغيّر خطّ السير أو ضياع الوثائق أو سوء التفاهم. |
| 3941 | AI-draft | This window is not in a Jupiter, Moon, or Mercury hour. | هذه النافذة ليست في ساعة المشتري أو القمر أو عطارد. |
| 3942 | AI-draft | Early departure — "Allāhumma bārik li-ummatī fī bukūrihā" (O Allah, bless my ummah in its early mornings). | الخروج باكرًا — «اللهم بارك لأمتي في بكورها». |
| 3943 | AI-draft | This window is not in the early-morning (bukūr) band. | هذه النافذة ليست في وقت البكور. |
| 3944 | AI-draft | Lunar Mansion (Manzil) for Travel | منزلة القمر للسفر |
| 3945 | AI-draft | — favorable for travel. [SCHOLAR-REVIEW] | — مواتية للسفر. [للمراجعة العلمية] |
| 3946 | AI-draft | — unfavorable for travel. [SCHOLAR-REVIEW] | — غير مواتية للسفر. [للمراجعة العلمية] |
| 3947 | AI-draft | — free of fall or detriment, good for plans and correspondence. | — سالم من الهبوط والوبال، جيد للخطط والمراسلات. |
| 3948 | AI-draft | Wednesday (day of Mercury) — favorable for travel and communication. | الأربعاء (يوم عطارد) — مواتٍ للسفر والتواصل. |
| 3949 | AI-draft | Thursday — the Prophet ﷺ preferred to set out on journeys on Thursday (Bukhārī). | الخميس — كان النبي ﷺ يحبّ أن يخرج في السفر يوم الخميس (البخاري). |
| 3950 | AI-draft | Not a day classically associated with favorable travel. | ليس يومًا يرتبط كلاسيكيًا بحسن السفر. |
| 3951 | AI-draft | Muharram | محرّم |
| 3952 | AI-draft | Mouharram | محرّم |
| 3953 | AI-draft | Rabi' al-Awwal | ربيع الأول |
| 3954 | AI-draft | Rabi al-Awwal | ربيع الأول |
| 3955 | AI-draft | Rabi al-Thani | ربيع الآخر |
| 3956 | AI-draft | Joumada al-Awwal | جمادى الأولى |
| 3957 | AI-draft | Jumada al-Thani | جمادى الآخرة |
| 3958 | AI-draft | Joumada al-Thani | جمادى الآخرة |
| 3959 | AI-draft | Chaabane | شعبان |
| 3960 | AI-draft | Shawwal | شوّال |
| 3961 | AI-draft | Chawwal | شوّال |
| 3962 | AI-draft | Dhu al-Qi'dah | ذو القعدة |
| 3963 | AI-draft | Dhou al-Qi`dah | ذو القعدة |
| 3964 | AI-draft | Dhu al-Hijjah | ذو الحجّة |
| 3965 | AI-draft | Dhou al-Hijjah | ذو الحجّة |
| 3966 | AI-draft | Highly Recommended (Sunnah) | مستحبّ جدًا (سنّة) |
| 3967 | AI-draft | The Prophet ﷺ married ʿĀʾisha (RA) in Shawwāl — a month long favored for marriage in the Sunnah. | تزوّج النبي ﷺ عائشة رضي الله عنها في شوّال — وهو شهر استُحبّ فيه الزواج في السنّة. |
| 3968 | AI-draft | Mawlid month | شهر المولد |
| 3969 | AI-draft | Rabī' al-Awwal, the month associated with the Prophet's ﷺ birth. | ربيع الأول، الشهر المرتبط بمولد النبي ﷺ. |
| 3970 | AI-draft | The Moon is near dark-of-moon (muḥāq) in the Hijri calendar — this overlaps with the astrological combustion caution above. | القمر قرب المحاق في التقويم الهجري — ويتقاطع هذا مع تحذير الاحتراق الفلكي أعلاه. |
| 3971 | AI-draft | Celebrations are usually scheduled around Ramadan for practical reasons — nikāḥ itself is permitted year-round, including during Ramadan. | تُرتَّب الاحتفالات عادة حول رمضان لأسباب عملية — أما النكاح نفسه فجائز طوال السنة، ومنه رمضان. |
| 3972 | AI-draft | Days of Hajj | أيام الحجّ |
| 3973 | AI-draft | Celebrations are usually scheduled around the days of Hajj (8–13 Dhū al-Ḥijja) for practical reasons — nikāḥ itself is permitted year-round. | تُرتَّب الاحتفالات عادة حول أيام الحجّ (8–13 ذو الحجّة) لأسباب عملية — أما النكاح نفسه فجائز طوال السنة. |
| 3974 | AI-draft | Zodiac Man Caution | تحذير «الإنسان البروجي» |
| 3975 | AI-draft | The Moon is in a sign classically ruling the | القمر في برج يحكم كلاسيكيًا |
| 3976 | AI-draft | Monday is the day of the Moon, the classical significator of the body — informational only. | الاثنين يوم القمر، الدالّ الكلاسيكي على البدن — للمعلومة فقط. |
| 3977 | AI-draft | The Moon is in a sign where it traditionally expresses its qualities less comfortably. | القمر في برج يُعبّر فيه تقليديًا عن صفاته بارتياح أقلّ. |
| 3978 | AI-draft | Venus — the planet of love and harmony — is too close to the Sun right now and appears "hidden," weakening its supportive influence. | الزهرة — كوكب المحبّة والانسجام — قريبة جدًا من الشمس الآن وتبدو «مستترة»، فيضعف أثرها الداعم. |
| 3979 | AI-draft | Mercury appears to be moving backward right now — a mild caution specifically for the paperwork/contract side of things. | يبدو عطارد راجعًا الآن — تحذير خفيف يخصّ جانب الأوراق والعقد. |
| 3980 | AI-draft | The Moon isn't currently connecting with either of the two traditionally supportive planets (Venus or Jupiter). | القمر غير متّصل الآن بأيٍّ من الكوكبين الداعمين تقليديًا (الزهرة أو المشتري). |
| 3981 | AI-draft | The Moon is growing in light and clear of the Sun's glare right now — one of the most favorable classical signs for a fresh start. | القمر يزداد نورًا وقد خرج من وهج الشمس — من أحسن العلامات الكلاسيكية لبداية جديدة. |
| 3982 | AI-draft | The Moon is in a sign it traditionally feels very at home in. | القمر في برج يكون فيه تقليديًا في بيته. |
| 3983 | AI-draft | The Moon is in the sign of its greatest traditional strength. | القمر في برج أعظم قوّته التقليدية (شرفه). |
| 3984 | AI-draft | The Moon is forming a supportive connection with Jupiter, the planet of growth and good fortune, right now. | القمر يتّصل الآن اتّصالًا داعمًا بالمشتري، كوكب النموّ والسعد. |
| 3985 | AI-draft | Venus is in a sign it traditionally feels very at home in. | الزهرة في برج تكون فيه تقليديًا في بيتها. |
| 3986 | AI-draft | Venus is in the sign of its greatest traditional strength. | الزهرة في برج أعظم قوّتها التقليدية (شرفها). |
| 3987 | AI-draft | This falls on Friday — the day most recommended in Islamic tradition for this occasion. | يقع هذا يوم الجمعة — أكثر الأيام استحبابًا لهذه المناسبة في التراث الإسلامي. |
| 3988 | AI-draft | This falls on Monday, a day traditionally seen as mildly favorable. | يقع هذا يوم الاثنين، وهو يوم يُرى تقليديًا مواتيًا بعض الشيء. |
| 3989 | AI-draft | The Moon is passing through a lunar "station" traditionally considered favorable for this occasion. | القمر يمرّ بمنزلة تُعدّ تقليديًا مواتية لهذه المناسبة. |
| 3990 | AI-draft | The Moon is passing through a lunar "station" traditionally considered less favorable for this occasion. | القمر يمرّ بمنزلة تُعدّ تقليديًا أقلّ مواتاة لهذه المناسبة. |
| 3991 | AI-draft | The Moon isn't forming any meaningful connection right now — traditionally, a journey begun in this state tends to come to nothing. | القمر لا يكوّن الآن أي اتّصال ذي معنى — وتقليديًا، السفر الذي يبدأ في هذه الحال لا يُثمر. |
| 3992 | AI-draft | The Moon is in a tense position with Saturn or Mars right now — a traditional warning of danger or delay en route. | القمر في وضع متوتّر مع زحل أو المريخ الآن — تحذير تقليدي من خطر أو تأخير في الطريق. |
| 3993 | AI-draft | The Moon is too close to the Sun right now and appears "hidden" — this weakens the traveler's own influence in the chart. | القمر قريب جدًا من الشمس الآن ويبدو «مستترًا» — وهذا يُضعف دلالة المسافر نفسه في الطالع. |
| 3994 | AI-draft | The Moon is in a sign associated with quick movement — traditionally favorable for setting out. | القمر في برج يرتبط بسرعة الحركة — مواتٍ تقليديًا للخروج. |
| 3995 | AI-draft | The Moon is in a sign associated with staying put — traditionally a caution for travel, suggesting possible delay. | القمر في برج يرتبط بالمكث — تحذير تقليدي للسفر يوحي بتأخير محتمل. |
| 3996 | AI-draft | Mercury appears to be moving backward right now — traditionally linked to itinerary changes, lost documents, or mix-ups. | يبدو عطارد راجعًا الآن — ويرتبط تقليديًا بتغيّر خطّ السير أو ضياع الوثائق أو الالتباس. |
| 3997 | AI-draft | The Moon is growing in light right now — traditionally favorable for setting out and making progress. | القمر يزداد نورًا الآن — مواتٍ تقليديًا للخروج والتقدّم. |
| 3998 | AI-draft | The Moon is forming a supportive connection with Venus or Jupiter right now — a sign of a smooth, well-supported journey. | القمر يتّصل الآن اتّصالًا داعمًا بالزهرة أو المشتري — علامة على سفر سلس ميسّر. |
| 3999 | AI-draft | This specific time window aligns with a planetary hour traditionally seen as supportive for travel. | تتوافق هذه النافذة مع ساعة كوكبية تُرى تقليديًا داعمة للسفر. |
| 4000 | AI-draft | This is an early-morning departure — the Prophet ﷺ asked Allah to bless the early mornings of his ummah. | هذا خروج في البكور — وقد دعا النبي ﷺ لأمّته بالبركة في بكورها. |
| 4001 | AI-draft | The Moon is passing through a lunar "station" traditionally considered favorable for travel. | القمر يمرّ بمنزلة تُعدّ تقليديًا مواتية للسفر. |
| 4002 | AI-draft | The Moon is passing through a lunar "station" traditionally considered less favorable for travel. | القمر يمرّ بمنزلة تُعدّ تقليديًا أقلّ مواتاة للسفر. |
| 4003 | AI-draft | Mercury is in a comfortable position right now, supporting clear plans and communication. | عطارد في وضع مريح الآن، يدعم وضوح الخطط والتواصل. |
| 4004 | AI-draft | This falls on Wednesday, a day traditionally linked to travel and communication. | يقع هذا يوم الأربعاء، وهو يوم يرتبط تقليديًا بالسفر والتواصل. |
| 4005 | AI-draft | Mercury appears to be moving backward right now — the single most-cited traditional caution against signing contracts or starting negotiations. | يبدو عطارد راجعًا الآن — وهذا أشهر تحذير تقليدي من توقيع العقود أو بدء المفاوضات. |
| 4006 | AI-draft | The Moon isn't forming any meaningful connection right now — traditionally, a deal begun in this state tends to come to nothing. | القمر لا يكوّن الآن أي اتّصال ذي معنى — وتقليديًا، الصفقة التي تبدأ في هذه الحال لا تُثمر. |
| 4007 | AI-draft | Mercury is too close to the Sun right now and appears "hidden" — this weakens the deal's own significator. | عطارد قريب جدًا من الشمس الآن ويبدو «مستترًا» — وهذا يُضعف دالّ الصفقة نفسه. |
| 4008 | AI-draft | The Moon is in a tense position with Saturn or Mars right now — a traditional warning of dispute or a deal turning sour. | القمر في وضع متوتّر مع زحل أو المريخ الآن — تحذير تقليدي من نزاع أو فساد الصفقة. |
| 4009 | AI-draft | The Moon is growing in light right now — traditionally favorable for starting and growing a venture. | القمر يزداد نورًا الآن — مواتٍ تقليديًا لبدء مشروع وتنميته. |
| 4010 | AI-draft | The Moon is forming a supportive connection with Jupiter right now — traditionally the planet of profit and gain. | القمر يتّصل الآن اتّصالًا داعمًا بالمشتري — كوكب الربح والكسب تقليديًا. |
| 4011 | AI-draft | The Moon is forming a supportive connection with Venus right now — favorable for amicable dealing between both sides. | القمر يتّصل الآن اتّصالًا داعمًا بالزهرة — مواتٍ لحسن التعامل بين الطرفين. |
| 4012 | AI-draft | Mercury is in a sign it traditionally feels very at home in — strong for negotiation and paperwork. | عطارد في برج يكون فيه تقليديًا في بيته — قوي للتفاوض والأوراق. |
| 4013 | AI-draft | The Moon isn't forming any meaningful connection right now — traditionally, treatment begun in this state tends to come to nothing. | القمر لا يكوّن الآن أي اتّصال ذي معنى — وتقليديًا، العلاج الذي يبدأ في هذه الحال يميل إلى ألّا يُثمر. |
| 4014 | AI-draft | The Moon is too close to the Sun right now and appears "hidden" — traditionally, this weakens the body's own vital force in the chart. | القمر قريب جدًا من الشمس الآن ويبدو «مستترًا» — وتقليديًا يُضعف هذا القوة الحيوية للبدن في الطالع. |
| 4015 | AI-draft | The Moon is in a tense position with Saturn or Mars right now — a traditional warning of complication or slow healing. | القمر في وضع متوتّر مع زحل أو المريخ الآن — تحذير تقليدي من التعقيد أو بطء الشفاء. |
| 4016 | AI-draft | The Moon is growing in light right now — traditionally favorable for treatments meant to build up or strengthen the body. | القمر يزداد نورًا الآن — مواتٍ تقليديًا للعلاجات التي تبني البدن وتقوّيه. |
| 4017 | AI-draft | The Moon is forming a supportive connection with Venus or Jupiter right now — a sign of a smooth course of treatment and recovery. | القمر يتّصل الآن اتّصالًا داعمًا بالزهرة أو المشتري — علامة على علاج وتعافٍ سلسين. |
| 4018 | AI-draft | Jupiter — the traditional significator of recovery — is in a comfortable position right now. | المشتري — الدالّ التقليدي على التعافي — في وضع مريح الآن. |
| 4019 | AI-draft | Mercury is in a comfortable position right now, supporting a clear diagnosis. | عطارد في وضع مريح الآن، يدعم وضوح التشخيص. |
| 4020 | AI-draft | Mercury appears to be moving backward right now — a mild caution for the accuracy of a diagnosis. | يبدو عطارد راجعًا الآن — تحذير خفيف يخصّ دقّة التشخيص. |
| 4021 | AI-draft | This falls on Monday or Thursday — days traditionally linked to the body and to recovery. | يقع هذا يوم الاثنين أو الخميس — يومان يرتبطان تقليديًا بالبدن والتعافي. |
| 4022 | AI-draft | The Moon isn't forming any meaningful connection right now — traditionally, work begun in this state tends to come to nothing. | القمر لا يكوّن الآن أي اتّصال ذي معنى — وتقليديًا، العمل الذي يبدأ في هذه الحال لا يُثمر. |
| 4023 | AI-draft | The Moon is too close to the Sun right now and appears "hidden" — this weakens the matter's own significator. | القمر قريب جدًا من الشمس الآن ويبدو «مستترًا» — وهذا يُضعف دالّ الأمر نفسه. |
| 4024 | AI-draft | The Moon is in a sign associated with stability — traditionally favorable for something meant to last. | القمر في برج يرتبط بالثبات — مواتٍ تقليديًا لما يُراد له الدوام. |
| 4025 | AI-draft | The Moon is in a sign associated with change and impermanence — the opposite of what a lasting foundation calls for. | القمر في برج يرتبط بالتغيّر وعدم الدوام — عكس ما يتطلّبه الأساس الدائم. |
| 4026 | AI-draft | The Moon is growing in light right now — traditionally favorable for building and growing a household. | القمر يزداد نورًا الآن — مواتٍ تقليديًا لبناء بيت وتنميته. |
| 4027 | AI-draft | The Moon is forming a supportive connection with Venus or Jupiter right now — a sign of a settled, well-supported household. | القمر يتّصل الآن اتّصالًا داعمًا بالزهرة أو المشتري — علامة على بيت مستقرّ مُعان. |
| 4028 | AI-draft | Saturn — the traditional significator of land and foundations — is in a sign it feels very at home in. | زحل — الدالّ التقليدي على الأرض والأسس — في برج يكون فيه في بيته. |
| 4029 | AI-draft | Saturn appears to be moving backward right now — traditionally linked to delays, cost overruns, or rework. | يبدو زحل راجعًا الآن — ويرتبط تقليديًا بالتأخير أو تجاوز التكاليف أو إعادة العمل. |
| 4030 | AI-draft | This specific time window aligns with a planetary hour traditionally seen as supportive for foundations and building. | تتوافق هذه النافذة مع ساعة كوكبية تُرى تقليديًا داعمة للأسس والبناء. |
| 4031 | AI-draft | This falls on Saturday or Thursday — days traditionally linked to foundations and a supported household. | يقع هذا يوم السبت أو الخميس — يومان يرتبطان تقليديًا بالأسس والبيت المُعان. |
| 4032 | AI-draft | Mercury appears to be moving backward right now — the same traditional caution cited against contracts applies to starting serious study. | يبدو عطارد راجعًا الآن — ويسري التحذير التقليدي نفسه المذكور في العقود على بدء الدراسة الجادّة. |
| 4033 | AI-draft | The Moon isn't forming any meaningful connection right now — traditionally, study begun in this state tends to come to nothing. | القمر لا يكوّن الآن أي اتّصال ذي معنى — وتقليديًا، الدراسة التي تبدأ في هذه الحال لا تُثمر. |
| 4034 | AI-draft | Mercury is too close to the Sun right now and appears "hidden" — this weakens the significator of the intellect and study itself. | عطارد قريب جدًا من الشمس الآن ويبدو «مستترًا» — وهذا يُضعف دالّ العقل والدراسة نفسه. |
| 4035 | AI-draft | The Moon is forming a supportive connection with Jupiter right now — traditionally the planet of wisdom and comprehension. | القمر يتّصل الآن اتّصالًا داعمًا بالمشتري — كوكب الحكمة والفهم تقليديًا. |
| 4036 | AI-draft | The Moon is forming a supportive connection with Mercury right now — favorable for retention and a receptive mind. | القمر يتّصل الآن اتّصالًا داعمًا بعطارد — مواتٍ للحفظ وتهيّؤ الذهن. |
| 4037 | AI-draft | The Moon is in a tense position with Saturn or Mars right now — a traditional warning of frustration or blocked progress. | القمر في وضع متوتّر مع زحل أو المريخ الآن — تحذير تقليدي من الإحباط أو تعثّر التقدّم. |
| 4038 | AI-draft | Mercury is in a sign it traditionally feels very at home in — strong for comprehension and memory. | عطارد في برج يكون فيه تقليديًا في بيته — قوي للفهم والحفظ. |
| 4039 | AI-draft | Jupiter is in a comfortable position right now, supporting comprehension and wisdom. | المشتري في وضع مريح الآن، يدعم الفهم والحكمة. |
| 4040 | AI-draft | This falls on Wednesday or Thursday — days traditionally linked to the intellect and wisdom. | يقع هذا يوم الأربعاء أو الخميس — يومان يرتبطان تقليديًا بالعقل والحكمة. |
| 4041 | AI-draft | "Allāhumma bārik li-ummatī fī bukūrihā" — O Allah, bless my ummah in its early mornings. | «اللهم بارك لأمتي في بكورها». |
| 4042 | AI-draft | Friday Caution | تنبيه يوم الجمعة |
| 4043 | AI-draft | For those obligated to attend Jumuʿah, departing after the call to Friday prayer is discouraged in fiqh — this is informational only and does not affect the score. | لمن تجب عليه الجمعة، يُكره السفر بعد نداء صلاة الجمعة في الفقه — وهذا للمعلومة فقط ولا يؤثّر في الدرجة. |
| 4044 | AI-draft | Favored month ( | شهر مستحبّ ( |
| 4045 | AI-draft | Favored month in Senegambian custom — | شهر مستحبّ في العرف السنغالي الغامبي — |
| 4046 | AI-draft | (Muḥarram) is one of the sacred months (min al-ashhur al-ḥurum). | (محرّم) من الأشهر الحُرُم. |
| 4047 | AI-draft | Traditionally cautious ( | احتياط تقليدي ( |
| 4048 | AI-draft | ) is fully permissible in fiqh. | ) جائز تمامًا في الفقه. |
| 4049 | AI-draft | Festive month ( | شهر احتفالي ( |
| 4050 | AI-draft | Mawlid month — | شهر المولد — |
| 4051 | AI-draft | is festive in Senegambian custom, associated with the Prophet's ﷺ birth. | شهر احتفالي في العرف السنغالي الغامبي، مرتبط بمولد النبي ﷺ. |
| 4052 | AI-draft | Sunnah-recommended ( | مستحبّ في السنّة ( |
| 4053 | AI-draft | Sunnah-recommended — the Prophet ﷺ married ʿĀʾisha (RA) in Shawwāl ( | مستحبّ في السنّة — تزوّج النبي ﷺ عائشة رضي الله عنها في شوّال ( |
| 4054 | AI-draft | chest and stomach | الصدر والمعدة |
| 4055 | AI-draft | heart and upper back | القلب وأعلى الظهر |
| 4056 | AI-draft | abdomen and intestines | البطن والأمعاء |
| 4057 | AI-draft | reproductive organs and bladder | الأعضاء التناسلية والمثانة |
| 4058 | AI-draft | knees, joints, and bones | الركبتين والمفاصل والعظام |
| 4059 | AI-draft | ankles and shins | الكاحلين والساقين |
| 4060 | AI-draft | New Beginnings, Initiative | البدايات الجديدة والمبادرة |
| 4061 | AI-draft | New ventures | المشاريع الجديدة |
| 4062 | AI-draft | Beginnings invite intention (niyyah) and remembrance — the Moon’s stations are signs, not decrees. | البدايات تدعو إلى النيّة والذكر — ومنازل القمر علامات لا أقدار. |
| 4063 | AI-draft | Nourishment, Growth | الغذاء والنموّ |
| 4064 | AI-draft | Planting | الغرس |
| 4065 | AI-draft | Business ventures | المشاريع التجارية |
| 4066 | AI-draft | As the body needs nourishment, the heart needs what draws it nearer to Allah. | كما يحتاج البدن إلى الغذاء، يحتاج القلب إلى ما يقرّبه من الله. |
| 4067 | AI-draft | Beauty, Abundance, Gathering | الجمال والوفرة والاجتماع |
| 4068 | AI-draft | Gatherings | الاجتماعات |
| 4069 | AI-draft | Harsh speech | الكلام القاسي |
| 4070 | AI-draft | Al-Thurayyā was among the best-known stations in Arab star lore — a reminder to gather in beauty and good company. | كانت الثريا من أشهر المنازل في علم النجوم عند العرب — تذكيرًا بالاجتماع في جمال وصحبة طيبة. |
| 4071 | AI-draft | Educational reflection (anwāʾ / Al-Bīrūnī tradition of naming) | تأمّل تعليمي (الأنواء / تقليد التسمية عند البيروني) |
| 4072 | AI-draft | Loyalty, Persistence, Following Truth | الوفاء والمثابرة واتّباع الحقّ |
| 4073 | AI-draft | Seeking teachers | طلب المعلّمين |
| 4074 | AI-draft | Breaking commitments | نقض العهود |
| 4075 | AI-draft | Impulsive changes | التغييرات المتسرّعة |
| 4076 | AI-draft | Al-Dabarān “follows” Thurayyā across the sky — a picture of steadfast following, not blind haste. | الدبران «يتبع» الثريا في السماء — صورة للاتّباع الثابت لا العجلة العمياء. |
| 4077 | AI-draft | Educational reflection (star-name lore) | تأمّل تعليمي (موروث أسماء النجوم) |
| 4078 | AI-draft | Orion | الجبّار |
| 4079 | AI-draft | Clarity, Purification, Truth | الوضوح والتطهّر والحقّ |
| 4080 | AI-draft | Spiritual purification | التطهّر الروحي |
| 4081 | AI-draft | Unclear contracts | العقود الغامضة |
| 4082 | AI-draft | Confusion | الالتباس |
| 4083 | AI-draft | Clarity of intention softens confusion — seek light before you speak or sign. | وضوح النيّة يخفّف الالتباس — اطلب النور قبل أن تتكلّم أو توقّع. |
| 4084 | AI-draft | Marking, Identity, Recognition | الوسم والهوية والتعرّف |
| 4085 | AI-draft | Establishing identity | إثبات الهوية |
| 4086 | AI-draft | Clear naming | التسمية الواضحة |
| 4087 | AI-draft | Anonymity | الخفاء |
| 4088 | AI-draft | Hiding truth | كتمان الحقّ |
| 4089 | AI-draft | Dishonesty | الكذب |
| 4090 | AI-draft | Names and marks in the old star calendar were for recognition — know yourself before Allah, not for show. | كانت الأسماء والعلامات في تقويم النجوم القديم للتعارف — فاعرف نفسك بين يدي الله لا للرياء. |
| 4091 | AI-draft | Reach, Extension, Generosity | المدّ والامتداد والكرم |
| 4092 | AI-draft | The forearm that gives in charity teaches reach without grasping. | الذراع التي تمتدّ بالصدقة تعلّم المدّ دون القبض. |
| 4093 | AI-draft | Mystery, Threshold, Sacred Space | السرّ والعتبة والمكان المقدّس |
| 4094 | AI-draft | Retreat | الخلوة |
| 4095 | AI-draft | Excessive worldly activity | الإفراط في الانشغال الدنيوي |
| 4096 | AI-draft | Noise | الضجيج |
| 4097 | AI-draft | Distraction | التشتّت |
| 4098 | AI-draft | In quiet gaps — between tasks, between breaths — remember the One who ordered the Moon’s phases. | في الفجوات الهادئة — بين المهامّ وبين الأنفاس — اذكر الذي قدّر القمر منازل. |
| 4099 | AI-draft | Vision, Attentiveness | البصر واليقظة |
| 4100 | AI-draft | Careful observation | الملاحظة الدقيقة |
| 4101 | AI-draft | Seeking counsel | طلب المشورة |
| 4102 | AI-draft | Hasty judgments | الأحكام المتسرّعة |
| 4103 | AI-draft | Manāzil al-qamar are stations for reflection and timing adab — not prediction of the unseen. | منازل القمر محطّات للتأمّل ولأدب التوقيت — لا للتنبّؤ بالغيب. |
| 4104 | AI-draft | Formal commitments | الالتزامات الرسمية |
| 4105 | AI-draft | Empty show | المظاهر الجوفاء |
| 4106 | AI-draft | Neglecting counsel | إهمال المشورة |
| 4107 | AI-draft | Strength, Presence | القوة والحضور |
| 4108 | AI-draft | Encouraging others | تشجيع الآخرين |
| 4109 | AI-draft | Steady work | العمل الثابت |
| 4110 | AI-draft | Protecting the vulnerable | حماية الضعفاء |
| 4111 | AI-draft | Boastfulness | التفاخر |
| 4112 | AI-draft | Wasting energy | إهدار الطاقة |
| 4113 | AI-draft | Transition, Turning | الانتقال والتحوّل |
| 4114 | AI-draft | Course corrections | تصحيح المسار |
| 4115 | AI-draft | Ending harmful habits | ترك العادات الضارّة |
| 4116 | AI-draft | Reorganizing | إعادة التنظيم |
| 4117 | AI-draft | Tawba | التوبة |
| 4118 | AI-draft | Clinging to the obsolete | التشبّث بما بلي |
| 4119 | AI-draft | Forced abrupt breaks without counsel | القطيعة المفاجئة بلا مشورة |
| 4120 | AI-draft | Gathering, Calling | الجمع والنداء |
| 4121 | AI-draft | Community work | العمل المجتمعي |
| 4122 | AI-draft | Spreading alarm without cause | نشر الذعر بلا سبب |
| 4123 | AI-draft | Fair dealing | المعاملة العادلة |
| 4124 | AI-draft | Harvest and completion of work | الحصاد وإتمام العمل |
| 4125 | AI-draft | Neglecting zakāh and rights | إهمال الزكاة والحقوق |
| 4126 | AI-draft | Covering, Discretion | الستر والكتمان |
| 4127 | AI-draft | Private repentance | التوبة في السرّ |
| 4128 | AI-draft | Protecting privacy | صون الخصوصية |
| 4129 | AI-draft | Quiet charity | صدقة السرّ |
| 4130 | AI-draft | Exposing others | فضح الآخرين |
| 4131 | AI-draft | Scandal | الفضيحة |
| 4132 | AI-draft | Public shaming | التشهير العلني |
| 4133 | AI-draft | Boundaries, Careful Cuts | الحدود والقطع بحذر |
| 4134 | AI-draft | Spiteful severance | القطيعة عن حقد |
| 4135 | AI-draft | Ambiguous contracts | العقود الملتبسة |
| 4136 | AI-draft | Formal roles | الأدوار الرسمية |
| 4137 | AI-draft | Guarding dignity | صون الكرامة |
| 4138 | AI-draft | Betrayal of trust | خيانة الأمانة |
| 4139 | AI-draft | Seeking status for its own sake | طلب الجاه لذاته |
| 4140 | AI-draft | Sincerity, Courage of Heart | الإخلاص وشجاعة القلب |
| 4141 | AI-draft | Courageous apology | الاعتذار الشجاع |
| 4142 | AI-draft | Emotional recklessness | التهوّر العاطفي |
| 4143 | AI-draft | Crushing speech | الكلام الجارح |
| 4144 | AI-draft | Restraint, Defense of Dignity | الإمساك والدفاع عن الكرامة |
| 4145 | AI-draft | Cautious travel planning | التخطيط الحذر للسفر |
| 4146 | AI-draft | Saying less | الإقلال من الكلام |
| 4147 | AI-draft | Retaliation for ego | الانتقام للأنا |
| 4148 | AI-draft | Reckless risk | المخاطرة المتهوّرة |
| 4149 | AI-draft | Journey, Openness | السفر والانفتاح |
| 4150 | AI-draft | Outdoor work | العمل في الهواء الطلق |
| 4151 | AI-draft | Expanding horizons with adab | توسيع الآفاق بأدب |
| 4152 | AI-draft | Aimless wandering | التجوال بلا غاية |
| 4153 | AI-draft | Leaving duties unfinished | ترك الواجبات ناقصة |
| 4154 | AI-draft | Isolation from good counsel | الانعزال عن النصح الطيّب |
| 4155 | AI-draft | Settling affairs | تسوية الشؤون |
| 4156 | AI-draft | Neighborhood care | رعاية الجيران |
| 4157 | AI-draft | Organizing home | ترتيب البيت |
| 4158 | AI-draft | Neglecting neighbors' rights | إهمال حقوق الجيران |
| 4159 | AI-draft | Chaos in commitments | الفوضى في الالتزامات |
| 4160 | AI-draft | Fleeing responsibility | الفرار من المسؤولية |
| 4161 | AI-draft | Offering, Commitment | القربان والالتزام |
| 4162 | AI-draft | Charitable giving | الصدقة |
| 4163 | AI-draft | Keeping vows | الوفاء بالنذور |
| 4164 | AI-draft | Serious commitments | الالتزامات الجادّة |
| 4165 | AI-draft | Simplifying lifestyle | تبسيط المعيشة |
| 4166 | AI-draft | Wasteful spending | الإسراف |
| 4167 | AI-draft | Harming animals or people | إيذاء الحيوان أو الناس |
| 4168 | AI-draft | L'Avaleur Fortune | سعد بلع |
| 4169 | AI-draft | Depth, Absorption | العمق والاستيعاب |
| 4170 | AI-draft | Patience with difficulty | الصبر على الشدّة |
| 4171 | AI-draft | Swallowing anger into resentment | كظم الغيظ حتى يصير حقدًا |
| 4172 | AI-draft | Consuming without reflection | الاستهلاك بلا تفكّر |
| 4173 | AI-draft | Overindulgence | الإفراط |
| 4174 | AI-draft | Gratitude, Hope | الشكر والرجاء |
| 4175 | AI-draft | Gratitude practices | ممارسات الشكر |
| 4176 | AI-draft | Beginning hopeful works | بدء الأعمال المرجوّة |
| 4177 | AI-draft | Sharing ease with others | مشاركة اليسر مع الآخرين |
| 4178 | AI-draft | Taking ease for granted | الغفلة عن النعمة |
| 4179 | AI-draft | Complacency | الركون والتراخي |
| 4180 | AI-draft | Forgetting the Giver | نسيان المُنعِم |
| 4181 | AI-draft | Shelter and housing matters | شؤون المأوى والسكن |
| 4182 | AI-draft | Protecting family | حماية الأسرة |
| 4183 | AI-draft | Welcoming the stranger with adab | إكرام الغريب بأدب |
| 4184 | AI-draft | Inhospitality | ترك إكرام الضيف |
| 4185 | AI-draft | Neglecting dependents | إهمال من تعول |
| 4186 | AI-draft | Closing doors out of pride | إغلاق الأبواب كِبرًا |
| 4187 | AI-draft | Opening, Outflow | الانفتاح والتدفّق |
| 4188 | AI-draft | Starting helpful projects | بدء مشاريع نافعة |
| 4189 | AI-draft | Releasing stuck affairs | تحريك الشؤون العالقة |
| 4190 | AI-draft | Gossip as “release” | الغيبة بحجّة «التنفيس» |
| 4191 | AI-draft | Completion, Emptying | الإتمام والتفريغ |
| 4192 | AI-draft | Completing projects | إتمام المشاريع |
| 4193 | AI-draft | Settling debts | قضاء الديون |
| 4194 | AI-draft | Forgiving leftovers | العفو عن البقايا |
| 4195 | AI-draft | Closing cycles cleanly | إغلاق الدورات بنظافة |
| 4196 | AI-draft | Leaving ends untied | ترك الأطراف معلّقة |
| 4197 | AI-draft | Hoarding grudges | اكتناز الضغائن |
| 4198 | AI-draft | Starting too many new things | بدء أشياء جديدة كثيرة |
| 4199 | AI-draft | Wholeness, Hidden Depths | الكمال والأعماق الخفيّة |
| 4200 | AI-draft | Quiet reflection | التأمّل الهادئ |
| 4201 | AI-draft | Caring for the unseen needs of others | رعاية حاجات الآخرين الخفيّة |
| 4202 | AI-draft | Patience with the hidden | الصبر على ما خفي |
| 4203 | AI-draft | Integrating lessons | استيعاب الدروس |
| 4204 | AI-draft | Denying the unseen | إنكار الغيب |
| 4205 | AI-draft | Despair in darkness | اليأس في الظلمة |
| 4206 | AI-draft | Waxing Gibbous | أحدب متزايد |
| 4207 | AI-draft | Waning Gibbous | أحدب متناقص |
| 4208 | AI-draft | Last Quarter | التربيع الأخير |
| 4209 | AI-draft | Waning Crescent | هلال متناقص |
| 4210 | AI-draft | Excellent alignment! Lunar mansion | انسجام ممتاز! منزلة القمر |
| 4211 | AI-draft | is ruled by | يحكمها |
| 4212 | AI-draft | , matching the current planetary hour. | ، موافقةً للساعة الكوكبية الحالية. |
| 4213 | AI-draft | shares the | يشترك في عنصر |
| 4214 | AI-draft | element with lunar mansion | مع منزلة القمر |
| 4215 | AI-draft | Neutral influence. | أثر محايد. |
| 4216 | AI-draft | hour and lunar mansion | الساعة ومنزلة القمر |
| 4217 | AI-draft | have different energies. | طاقتاهما مختلفتان. |
| 4218 | AI-draft | Hot Food Sadaqah | صدقة الطعام الساخن |
| 4219 | AI-draft | Giving hot, prepared food as sadaqah is a beneficial form of charity. The food can be given to children or to anyone who can benefit from it. This form of sadaqah is associated with feeding and providing nourishment. | التصدّق بطعام ساخن مطبوخ صورة نافعة من الصدقة. ويمكن إعطاؤه للأطفال أو لكل من ينتفع به. وترتبط هذه الصدقة بالإطعام وتقديم الغذاء. |
| 4220 | AI-draft | Rice | أرز |
| 4221 | AI-draft | Porridge | عصيدة |
| 4222 | AI-draft | Cold Water Sadaqah | صدقة الماء البارد |
| 4223 | AI-draft | Giving cold water as sadaqah is another beneficial form of charity. The sadaqah specifically consists of providing cold drinking water to someone who can benefit from it. | التصدّق بالماء البارد صورة نافعة أخرى من الصدقة، وهي تقديم ماء بارد للشرب لمن ينتفع به. |
| 4224 | AI-draft | Supporting an Athlete or Sportsman | إعانة رياضي |
| 4225 | AI-draft | Helping a sportsman or athlete can also be given as a form of sadaqah. The assistance should be given sincerely for the benefit of the person. | يمكن أيضًا أن تكون إعانة رياضي صدقةً. وينبغي أن تُقدَّم بإخلاص لمنفعة الشخص. |
| 4226 | AI-draft | Buying them sports equipment or supplies | شراء معدّات أو لوازم رياضية له |
| 4227 | AI-draft | A form of sadaqah associated with Ḥamal is giving livestock. The animal may be raised and cared for in the household and then given as sadaqah. | من صور الصدقة المرتبطة ببرج الحمل التصدّق بالماشية. فيمكن تربية الحيوان والعناية به في البيت ثم التصدّق به. |
| 4228 | AI-draft | A ram | كبش |
| 4229 | AI-draft | A white sheep or ram | شاة أو كبش أبيض |
| 4230 | AI-draft | A sheep or ram of another colour | شاة أو كبش من لون آخر |
| 4231 | AI-draft | Giving away clothing that you have personally worn — once, twice, or a small number of times. The important condition is that the clothing is still clean, usable, and in good condition. It is then given to another person who can benefit from wearing it. The emphasis is on giving clothing that has already been worn by the giver, rather than brand-new or completely unused clothing. This sadaqah is associated with protection and seeking benefit through charity. | التصدّق بملابس لبستها أنت — مرّة أو مرّتين أو مرّات قليلة. والشرط المهمّ أن تكون نظيفة صالحة بحالة جيدة، فتُعطى لمن ينتفع بلبسها. والتركيز على ملابس لبسها المتصدّق لا الجديدة تمامًا. وترتبط هذه الصدقة بالحفظ وطلب النفع بالصدقة. |
| 4232 | AI-draft | Venus (al-Zuhrah / الزهرة) | الزهرة |
| 4233 | AI-draft | A primary form of sadaqah associated with al-Thawr is giving a single-coloured ram. A white ram is particularly suitable. The ram is given as sadaqah to someone who can benefit from it. | من أهمّ صور الصدقة المرتبطة ببرج الثور التصدّق بكبش ذي لون واحد، والأبيض أنسب. ويُعطى لمن ينتفع به. |
| 4234 | AI-draft | Giving away clothing that has already been worn, still in good and usable condition. This sadaqah is associated with protection and may be given with the intention of seeking protection through charity. | التصدّق بملابس سبق لبسها وهي بحالة جيدة صالحة. وترتبط هذه الصدقة بالحفظ ويمكن أن تُعطى بنيّة طلب الحفظ بالصدقة. |
| 4235 | AI-draft | Giving things grown from the ground, particularly staple agricultural foods, directly to people in need. | التصدّق بما يخرج من الأرض، لا سيما الأغذية الزراعية الأساسية، للمحتاجين مباشرة. |
| 4236 | AI-draft | Millet (dugub in Wolof) | الدُّخن («دوغوب» بالولوف) |
| 4237 | AI-draft | Other grains and agricultural produce | حبوب ومحاصيل زراعية أخرى |
| 4238 | AI-draft | Rice and millet may also be combined with cooking oil and given together as a food-based sadaqah package to someone or a family in need. | يمكن أيضًا جمع الأرز والدُّخن مع زيت الطبخ وإعطاؤها معًا سلّة غذائية صدقةً لشخص أو أسرة محتاجة. |
| 4239 | AI-draft | Millet | الدُّخن |
| 4240 | AI-draft | Giving water is another beneficial sadaqah for Taurus. The water is given to someone who needs or can benefit from it. | التصدّق بالماء صدقة نافعة أخرى لبرج الثور، يُعطى لمن يحتاجه أو ينتفع به. |
| 4241 | AI-draft | A particularly important form of sadaqah for Taurus is helping an elderly man or woman, regularly or whenever they are in need. This is regarded in the tradition as a secret sadaqah for increasing and sustaining one's provision (rizq). The emphasis is on quietly and consistently helping an elderly person without seeking recognition. | من أهمّ صور الصدقة لبرج الثور إعانة رجل أو امرأة مسنّة بانتظام أو كلّما احتاجا. وتُعدّ في التراث صدقة سرّ لزيادة الرزق ودوامه. والتركيز على إعانة المسنّ بهدوء وثبات دون طلب ثناء. |
| 4242 | AI-draft | Household necessities | لوازم البيت |
| 4243 | AI-draft | Other practical needs | حاجات عملية أخرى |
| 4244 | AI-draft | Friday is considered a particularly suitable day for giving Taurus-related sadaqah, connected in the tradition with Venus (al-Zuhrah), the planetary ruler of the sign. Where possible, give on Friday while maintaining the intention of sincere charity and seeking blessing, protection, and increase in provision. | يُعدّ يوم الجمعة مناسبًا خاصّة لصدقة برج الثور، لارتباطه في التراث بالزهرة حاكمة البرج. وإن أمكن فتصدّق يوم الجمعة مع نيّة الصدقة الخالصة وطلب البركة والحفظ وزيادة الرزق. |
| 4245 | AI-draft | A form of sadaqah associated with Jawzāʾ is giving 100 kola nuts, which are then distributed as sadaqah. | من صور الصدقة المرتبطة ببرج الجوزاء التصدّق بمئة حبّة كولا تُوزَّع صدقةً. |
| 4246 | AI-draft | White kola nuts | حبّات كولا بيضاء |
| 4247 | AI-draft | Red kola nuts | حبّات كولا حمراء |
| 4248 | AI-draft | A combination of white and red kola nuts | مزيج من حبّات الكولا البيضاء والحمراء |
| 4249 | AI-draft | Giving money as sadaqah is intended to help with the preservation and stability of wealth: giving a portion of one's wealth away so that wealth is not simply accumulated and lost or continuously spent. The amount can be according to the person's ability and circumstances. Intention: give sincerely, with the intention of helping others and seeking stability, preservation, and blessing in one's wealth. | يُقصد بالتصدّق بالمال المساعدة على حفظ المال وثباته: بإخراج جزء منه كي لا يُكنز فيضيع أو يُنفق بلا انقطاع. والمقدار بحسب قدرة الشخص وحاله. النيّة: تصدّق بإخلاص بنيّة إعانة الآخرين وطلب الثبات والحفظ والبركة في مالك. |
| 4250 | AI-draft | Giving a guinea fowl (French: pintade) as sadaqah, distributed to someone who can benefit from it. | التصدّق بدجاجة غينيا، تُعطى لمن ينتفع بها. |
| 4251 | AI-draft | Providing educational materials is another beneficial form of sadaqah for Gemini. These materials can be given to children or students who need them for their education. | تقديم الأدوات التعليمية صورة نافعة أخرى من الصدقة لبرج الجوزاء، تُعطى للأطفال أو الطلاب المحتاجين إليها في تعليمهم. |
| 4252 | AI-draft | White writing paper | ورق كتابة أبيض |
| 4253 | AI-draft | Exercise books | دفاتر تمارين |
| 4254 | AI-draft | Pencils | أقلام رصاص |
| 4255 | AI-draft | Educational sadaqah can also be directed toward teachers, including Qur'anic teachers — helping a teacher or their students. The sadaqah can therefore benefit either the teacher or the students. | يمكن أيضًا توجيه الصدقة التعليمية إلى المعلّمين، ومنهم معلّمو القرآن — بإعانة المعلّم أو طلابه. فتنفع الصدقة المعلّم أو الطلاب. |
| 4256 | AI-draft | Other materials needed for teaching and learning | مواد أخرى لازمة للتعليم والتعلّم |
| 4257 | AI-draft | Food can be prepared or purchased and given directly to children who can benefit from it. The intention is to provide nourishment and assistance through sadaqah. | يمكن إعداد الطعام أو شراؤه وإعطاؤه مباشرة للأطفال المنتفعين به. والنيّة تقديم الغذاء والعون بالصدقة. |
| 4258 | AI-draft | A form of sadaqah associated with Saraṭān is giving salt according to one's current age — the amount in kilograms matching the person's age (age 25 → 25 kg, age 30 → 30 kg, age 40 → 40 kg). The amount is weighed according to the person's age and then given out as sadaqah. This may be performed yearly, using the person's age at that time. | من صور الصدقة المرتبطة ببرج السرطان التصدّق بالملح بقدر عمر الشخص الحالي — بالكيلوغرام مساويًا للعمر (25 سنة ← 25 كغ، 30 ← 30 كغ، 40 ← 40 كغ). يُوزن بقدر العمر ثم يُوزَّع صدقةً. ويمكن فعل ذلك كل سنة بعمر الشخص حينها. |
| 4259 | AI-draft | Giving 4 kg of meat — beef or another type — out as sadaqah to people who can benefit from it. | التصدّق بأربعة كيلوغرامات من اللحم — بقر أو غيره — لمن ينتفع به. |
| 4260 | AI-draft | Helping with food expenses | الإعانة في نفقات الطعام |
| 4261 | AI-draft | Helping with household expenses | الإعانة في نفقات البيت |
| 4262 | AI-draft | Providing financial assistance to an elderly woman in need. The intention is to assist and ease her difficulties through sadaqah. | تقديم عون مالي لامرأة مسنّة محتاجة. والنيّة إعانتها وتيسير صعابها بالصدقة. |
| 4263 | AI-draft | Giving her money | إعطاؤها مالًا |
| 4264 | AI-draft | Helping with essential expenses | الإعانة في النفقات الأساسية |
| 4265 | AI-draft | Providing regular or occasional financial support | تقديم دعم مالي منتظم أو عند الحاجة |
| 4266 | AI-draft | Giving milk to children as sadaqah to provide nourishment and benefit. | التصدّق بالحليب على الأطفال غذاءً ونفعًا. |
| 4267 | AI-draft | A small bottle of milk | قارورة حليب صغيرة |
| 4268 | AI-draft | A larger quantity of milk | كمية أكبر من الحليب |
| 4269 | AI-draft | A primary form of sadaqah associated with al-Asad is to raise a ram, particularly a white ram: obtain it, keep it in an appropriate place at home or elsewhere, feed and care for it, and allow it to grow until it reaches a suitable mature stage. It is then slaughtered as sadaqah, the meat divided into portions and distributed to people who can benefit from it. Within this tradition, there is an observation that some Leo individuals may find the ram does not survive long enough to reach maturity, traditionally attributed to the heaviness of the zodiac. If the ram survives and reaches the appropriate mature stage, it can then be given as sadaqah. | من أهمّ صور الصدقة المرتبطة ببرج الأسد تربية كبش، لا سيما الأبيض: يُقتنى ويُحفظ في مكان مناسب في البيت أو غيره، ويُطعَم ويُعتنى به حتى يبلغ سنًّا مناسبة. ثم يُذبح صدقةً ويُقسَّم لحمه حصصًا تُوزَّع على من ينتفع بها. وفي هذا التراث ملاحظة أن بعض مواليد الأسد قد لا يعيش كبشهم حتى يبلغ، ويُنسب ذلك تقليديًا إلى ثقل البرج. فإن عاش وبلغ السنّ المناسبة تُصدِّق به. |
| 4270 | AI-draft | Preparing three bowls of Cheb Yap — a Senegalese rice dish made with meat, similar to meat-based jollof rice — and giving the prepared food as sadaqah to people who can benefit from it. | إعداد ثلاثة صحون من «تشب ياب» — طبق أرز سنغالي باللحم، شبيه بأرز الجلوف باللحم — والتصدّق بالطعام المُعدّ لمن ينتفع به. |
| 4271 | AI-draft | Preparing three bowls of porridge with a sour or fermented dairy component such as yogurt, and distributing them to people as sadaqah. | إعداد ثلاثة صحون من العصيدة مع لبن حامض أو مخمّر كالزبادي، وتوزيعها صدقةً. |
| 4272 | AI-draft | 3 bowls of Cheb Yap | 3 صحون من «تشب ياب» |
| 4273 | AI-draft | 3 bowls of porridge with yogurt | 3 صحون عصيدة باللبن |
| 4274 | AI-draft | A primary form of sadaqah associated with al-Sunbula is giving 100 kola nuts, a mixture of red and white, mixed together and distributed as sadaqah. | من أهمّ صور الصدقة المرتبطة ببرج السنبلة التصدّق بمئة حبّة كولا، حمراء وبيضاء مختلطة، تُوزَّع صدقةً. |
| 4275 | AI-draft | Giving money as sadaqah, according to the person's ability and circumstances, sincerely to someone who can benefit from it. | التصدّق بالمال بحسب قدرة الشخص وحاله، بإخلاص، لمن ينتفع به. |
| 4276 | AI-draft | Giving three different types of cereal together as sadaqah to people or families who can benefit from them. | التصدّق بثلاثة أنواع من الحبوب معًا على أشخاص أو أسر ينتفعون بها. |
| 4277 | AI-draft | Bessi — a Wolof cereal/grain similar to millet | «بيسي» — حبّ بالولوف شبيه بالدُّخن |
| 4278 | AI-draft | A particularly important secret sadaqah associated with Virgo is performed on reaching the age of 40: give 40 metres of kafan cloth (the white cloth used to shroud a deceased Muslim before burial) as sadaqah. Obtain the 40 metres, keep the cloth in the house overnight, then the following day divide it into portions of 7 metres each and distribute the portions as sadaqah. | من صدقات السرّ المهمّة المرتبطة بالسنبلة ما يكون عند بلوغ الأربعين: التصدّق بأربعين مترًا من قماش الكفن (القماش الأبيض الذي يُكفَّن به الميّت المسلم). تُقتنى الأربعون مترًا، ويُبات القماش في البيت ليلة، ثم يُقسَّم في الغد حصصًا كل منها سبعة أمتار وتُوزَّع صدقةً. |
| 4279 | AI-draft | 100 kola nuts — red and white mixed together | 100 حبّة كولا — حمراء وبيضاء مختلطة |
| 4280 | AI-draft | Three cereals — millet, rice, and Bessi | ثلاثة حبوب — الدُّخن والأرز و«بيسي» |
| 4281 | AI-draft | At age 40: 40 metres of kafan cloth, kept overnight then divided into 7-metre portions | عند الأربعين: 40 مترًا من قماش الكفن، تُبات ليلة ثم تُقسَّم حصصًا من 7 أمتار |
| 4282 | AI-draft | Argent | المال |
| 4283 | AI-draft | Giving guinea fowl (pintade) as sadaqah to someone who can benefit from it. | التصدّق بدجاج غينيا لمن ينتفع به. |
| 4284 | AI-draft | Giving three chickens of different colours — black, white and red — out as sadaqah. | التصدّق بثلاث دجاجات مختلفة الألوان — سوداء وبيضاء وحمراء. |
| 4285 | AI-draft | 7 portions of yogurt — even small sachets | 7 حصص من اللبن — ولو أكياسًا صغيرة |
| 4286 | AI-draft | Guinea fowl (pintade) | دجاج غينيا |
| 4287 | AI-draft | Pintade | دجاج غينيا |
| 4288 | AI-draft | A special form of sadaqah associated with Scorpio is having or giving a good protective ring, with stones such as rose agate or amethyst. The ring is regarded within this tradition as having protective and beneficial qualities and is also considered part of the sadaqah practice for Scorpio. | من الصدقات الخاصّة المرتبطة ببرج العقرب اقتناء خاتم حافظ حسن أو إهداؤه، بأحجار كالعقيق الوردي أو الجمشت. ويُعدّ الخاتم في هذا التراث ذا خصائص حافظة نافعة، وجزءًا من ممارسة الصدقة للعقرب. |
| 4289 | AI-draft | Giving a white ram or white sheep, particularly associated with favourable conditions involving Mars. | التصدّق بكبش أبيض أو شاة بيضاء، ويرتبط خاصّة بأحوال المريخ المواتية. |
| 4290 | AI-draft | When Mars is transiting a favourable or friendly zodiac sign, such as Aries, a red goat may be given as sadaqah. The goat is prepared and its meat divided into portions, distributed among people who can benefit from it until the meat has been given out. The emphasis is on distributing the meat, rather than keeping it for personal consumption. | حين يعبر المريخ برجًا مواتيًا أو صديقًا كالحمل، يمكن التصدّق بماعز أحمر. يُذبح ويُقسَّم لحمه حصصًا تُوزَّع على من ينتفع بها حتى يُعطى كله. والتركيز على التوزيع لا على الاستبقاء للأكل الشخصي. |
| 4291 | AI-draft | Giving water is an important sadaqah for Scorpio, particularly to sick or hospitalised people — for example taking drinking water to a hospital and giving it freely to patients who need it. This form is especially associated with Scorpio when beginning a new project or undertaking a journey. | التصدّق بالماء صدقة مهمّة للعقرب، لا سيما على المرضى ونزلاء المستشفيات — كأخذ ماء الشرب إلى مستشفى وإعطائه مجّانًا للمرضى المحتاجين. وترتبط هذه الصورة خاصّة بالعقرب عند بدء مشروع جديد أو سفر. |
| 4292 | AI-draft | Giving rice and fish together as a single sadaqah, both uncooked (raw), distributed to people or families who can benefit from them. | التصدّق بالأرز والسمك معًا صدقةً واحدة، نيّئين، على أشخاص أو أسر ينتفعون بهما. |
| 4293 | AI-draft | Tuesday is particularly associated with Scorpio because of its connection with Mars, the planetary ruler of the sign, and can be chosen when Mars is in a favourable or neutral transit. Sunday may also be considered, particularly when the Sun is in a favourable condition. The planetary condition should be considered when selecting the timing according to the tradition. | يرتبط يوم الثلاثاء خاصّة بالعقرب لصلته بالمريخ حاكم البرج، ويمكن اختياره حين يكون عبور المريخ مواتيًا أو محايدًا. ويمكن أيضًا اعتبار يوم الأحد، لا سيما حين تكون الشمس في حال مواتية. وينبغي مراعاة حال الكوكب عند اختيار التوقيت وفق التراث. |
| 4294 | AI-draft | Protective ring — rose agate or amethyst | خاتم حافظ — عقيق وردي أو جمشت |
| 4295 | AI-draft | White ram or sheep | كبش أو شاة بيضاء |
| 4296 | AI-draft | Water — especially to sick or hospitalised people | الماء — لا سيما للمرضى ونزلاء المستشفيات |
| 4297 | AI-draft | Rice and fish — given together, uncooked | الأرز والسمك — معًا، نيّئين |
| 4298 | AI-draft | Special occasions: beginning a project or travelling | مناسبات خاصّة: بدء مشروع أو السفر |
| 4299 | AI-draft | Sagittarius is considered a sign for which sadaqah is particularly important and should be given regularly. Unlike some signs that have specific items associated with their sadaqah, Sagittarius has a more open form: a person may give whatever they sincerely wish to give, provided it benefits another person. | يُعدّ برج القوس برجًا للصدقة فيه أهمية خاصّة، وينبغي أن تُعطى بانتظام. وخلافًا لبروج لها أشياء محدّدة، صدقة القوس أوسع: يعطي المرء ما يريد بإخلاص ما دام ينفع غيره. |
| 4300 | AI-draft | Giving nine pieces of bread, distributed to people who are in need or to anyone who can benefit from it. | التصدّق بتسعة أرغفة خبز، تُوزَّع على المحتاجين أو كل من ينتفع بها. |
| 4301 | AI-draft | Preparing three bowls of laakh — a Wolof-style porridge traditionally prepared with a fermented or sour dairy component such as yogurt — and giving them to people who can benefit from the food. | إعداد ثلاثة صحون من «لاخ» — عصيدة على طريقة الولوف تُعدّ تقليديًا مع لبن حامض أو مخمّر كالزبادي — وإعطاؤها لمن ينتفع بالطعام. |
| 4302 | AI-draft | Giving a single-coloured ram, particularly a white ram, as sadaqah to someone who can benefit from it. | التصدّق بكبش ذي لون واحد، لا سيما الأبيض، لمن ينتفع به. |
| 4303 | AI-draft | Sagittarius has a broad range of possible sadaqah. A person may give whatever they are able and willing to give. The important principle is to give sincerely and for the benefit of another person. | لبرج القوس نطاق واسع من الصدقة. يعطي المرء ما يقدر عليه ويرغب فيه. والمبدأ المهمّ الإخلاص ونفع الغير. |
| 4304 | AI-draft | Assistance to people in need | إعانة المحتاجين |
| 4305 | AI-draft | Other beneficial forms of charity | صور نافعة أخرى من الصدقة |
| 4306 | AI-draft | Thursday is considered a particularly suitable day for giving Sagittarius-related sadaqah. Where possible, give on Thursday while maintaining the intention of sincere charity and seeking blessing and ease. | يُعدّ يوم الخميس مناسبًا خاصّة لصدقة برج القوس. وإن أمكن فتصدّق يوم الخميس مع نيّة الصدقة الخالصة وطلب البركة والتيسير. |
| 4307 | AI-draft | 3 bowls of laakh with yogurt | 3 صحون «لاخ» باللبن |
| 4308 | AI-draft | One-coloured white ram | كبش أبيض ذو لون واحد |
| 4309 | AI-draft | Any sincere and beneficial sadaqah | أي صدقة صادقة نافعة |
| 4310 | AI-draft | Sagittarius is traditionally regarded as a sign that benefits from frequent and generous sadaqah, so regular charity is emphasised | يُعدّ القوس تقليديًا برجًا ينتفع بكثرة الصدقة وسخائها، فيُؤكَّد على انتظامها |
| 4311 | AI-draft | Giving rice and millet according to measurements connected to the person's age and body weight: rice in kilograms corresponding to the person's age, millet in kilograms corresponding to the person's body weight. The rice and millet may be distributed little by little until the entire amount has been given out, to individuals, families, or people in need. | التصدّق بالأرز والدُّخن بمقادير مرتبطة بعمر الشخص ووزنه: الأرز بالكيلوغرام بقدر العمر، والدُّخن بالكيلوغرام بقدر الوزن. ويمكن توزيعهما شيئًا فشيئًا حتى يُعطى المقدار كله، على أفراد أو أسر أو محتاجين. |
| 4312 | AI-draft | Giving a single-coloured ram, a white ram particularly associated with this sadaqah. This is described in the tradition as a particularly powerful sadaqah, and some people who follow this practice may experience it symbolically through dreams, such as dreaming that they are giving away a ram. | التصدّق بكبش ذي لون واحد، والأبيض مرتبط خاصّة بهذه الصدقة. وتوصف في التراث بأنها صدقة قوية، وقد يراها بعض من يمارسها رمزيًا في المنام، كأن يرى أنه يتصدّق بكبش. |
| 4313 | AI-draft | Giving kafan, the white cloth used to shroud a deceased Muslim before burial. The sadaqah may consist of providing the cloth needed for someone's burial. | التصدّق بالكفن، القماش الأبيض الذي يُكفَّن به الميّت المسلم. ويمكن أن تكون الصدقة تقديم القماش اللازم لدفن أحد. |
| 4314 | AI-draft | A family preparing for a burial | أسرة تستعدّ لدفن |
| 4315 | AI-draft | A mosque or community | مسجد أو مجتمع |
| 4316 | AI-draft | Someone who cannot afford the burial shroud | من لا يقدر على ثمن الكفن |
| 4317 | AI-draft | People responsible for assisting with funeral arrangements | القائمون على تجهيز الجنائز |
| 4318 | AI-draft | Giving cowries, known in Wolof as petaw — the small white cowrie shells traditionally used for decoration and in various cultural and spiritual practices. This form of sadaqah is considered special and sensitive within the tradition. | التصدّق بالودع، المسمّى بالولوف «بيتاو» — الأصداف البيضاء الصغيرة المستعملة تقليديًا للزينة وفي ممارسات ثقافية وروحية متنوّعة. وتُعدّ هذه الصدقة خاصّة وحسّاسة في التراث. |
| 4319 | AI-draft | Labourers | العمّال |
| 4320 | AI-draft | Casual workers | العمّال المؤقّتون |
| 4321 | AI-draft | Cleaners | عمّال النظافة |
| 4322 | AI-draft | The assistance can be given regularly or whenever the family needs support. This is regarded as a particularly meaningful form of sadaqah because it supports both the widow and the children who depend on her. | يمكن تقديم العون بانتظام أو كلّما احتاجت الأسرة. ويُعدّ هذا من أعظم صور الصدقة معنى لأنه يعين الأرملة والأطفال الذين يعتمدون عليها. |
| 4323 | AI-draft | Providing food or household necessities | تقديم الطعام أو لوازم البيت |
| 4324 | AI-draft | Helping with children's expenses | الإعانة في نفقات الأطفال |
| 4325 | AI-draft | Assisting with other essential needs | الإعانة في حاجات أساسية أخرى |
| 4326 | AI-draft | Important Guidance — Cowries / Petaw | إرشاد مهمّ — الودع / «بيتاو» |
| 4327 | AI-draft | Anyone intending to give petaw/cowries as sadaqah should seek guidance from a knowledgeable and trusted spiritual authority who understands the practice. According to the tradition being documented, this sadaqah may be considered capable of helping to open pathways and make matters easier, but it should not be undertaken casually. The practice is therefore regarded as one requiring proper guidance and understanding before giving it as sadaqah. | من ينوي التصدّق بالودع فليطلب الإرشاد من مرجع روحي عالم موثوق يفهم هذه الممارسة. ووفق التراث الموثَّق قد تُعدّ هذه الصدقة معينة على فتح الطرق وتيسير الأمور، لكن لا ينبغي فعلها باستخفاف. فهي ممارسة تتطلّب إرشادًا وفهمًا صحيحين قبل التصدّق بها. |
| 4328 | AI-draft | Rice and millet | الأرز والدُّخن |
| 4329 | AI-draft | A white, single-coloured ram | كبش أبيض ذو لون واحد |
| 4330 | AI-draft | Kafan (burial shroud) | الكفن |
| 4331 | AI-draft | Cowries / petaw, with proper guidance | الودع / «بيتاو»، بإرشاد صحيح |
| 4332 | AI-draft | Helping labourers and low-income workers | إعانة العمّال وذوي الدخل المحدود |
| 4333 | AI-draft | The practices above are regarded within this tradition as forms of secret or special sadaqah for Capricorn. The sadaqah should be given discreetly and sincerely, with the intention of benefiting another person rather than seeking recognition. | تُعدّ الممارسات أعلاه في هذا التراث صورًا من صدقة السرّ أو الصدقة الخاصّة لبرج الجدي. وينبغي أن تُعطى بكتمان وإخلاص، بنيّة نفع الغير لا طلب الثناء. |
| 4334 | AI-draft | A primary form of sadaqah associated with al-Dalw is giving 100 kola nuts — white, red, or a combination. This sadaqah can be performed monthly, or every three months. The 100 kola nuts are then distributed as sadaqah. | من أهمّ صور الصدقة المرتبطة ببرج الدلو التصدّق بمئة حبّة كولا — بيضاء أو حمراء أو مزيجًا منهما. ويمكن فعلها كل شهر أو كل ثلاثة أشهر، ثم تُوزَّع صدقةً. |
| 4335 | AI-draft | Helping a community, group, or voluntary organisation. Support may be financial, material, or practical. | إعانة مجتمع أو جماعة أو منظّمة تطوّعية، ماليًا أو ماديًا أو عمليًا. |
| 4336 | AI-draft | A local community | مجتمع محلّي |
| 4337 | AI-draft | A charitable group | جماعة خيرية |
| 4338 | AI-draft | A masjid | مسجد |
| 4339 | AI-draft | A group serving people in need | جماعة تخدم المحتاجين |
| 4340 | AI-draft | Giving guinea fowl (pintade) or chicken as sadaqah to someone who can benefit from it. | التصدّق بدجاج غينيا أو دجاج لمن ينتفع به. |
| 4341 | AI-draft | Giving three chickens of different colours — black, red and white — out as sadaqah. | التصدّق بثلاث دجاجات مختلفة الألوان — سوداء وحمراء وبيضاء. |
| 4342 | AI-draft | Community or group support — a voluntary group, community, masjid, or similar organisation | دعم مجتمع أو جماعة — جماعة تطوّعية أو مجتمع أو مسجد أو نحوه |
| 4343 | AI-draft | Guinea fowl (pintade) or chicken | دجاج غينيا أو دجاج |
| 4344 | AI-draft | Three-coloured chickens — black, red and white | دجاج بثلاثة ألوان — أسود وأحمر وأبيض |
| 4345 | AI-draft | A primary form of sadaqah associated with al-Ḥūt is giving fish. A particularly recommended amount is 12 fish, given as sadaqah to people who can benefit from them. | من أهمّ صور الصدقة المرتبطة ببرج الحوت التصدّق بالسمك، والمقدار المستحبّ خاصّة اثنتا عشرة سمكة تُعطى لمن ينتفع بها. |
| 4346 | AI-draft | This may be performed when a person has an important project or undertaking: take seven chickens, prepare and cook them, and distribute the prepared food as sadaqah — giving it to people in need, such as a poor family, and continuing until the food has been completely given out. The purpose is to provide food and benefit to people who are in need. | يمكن فعل هذا حين يكون للمرء مشروع أو أمر مهمّ: تُؤخذ سبع دجاجات فتُطبخ ويُوزَّع الطعام صدقةً — على المحتاجين كأسرة فقيرة — حتى يُعطى كله. والغاية إطعام المحتاجين ونفعهم. |
| 4347 | AI-draft | The food sadaqah may particularly be given in the evening, around the time when people would normally have dinner, an evening meal, or tea or other evening refreshments. The food should be distributed to people who can benefit from it, especially those experiencing financial hardship or food insecurity. | يمكن إعطاء صدقة الطعام خاصّة في المساء، قرب وقت العشاء أو الشاي ونحوه. ويُوزَّع على من ينتفع به، لا سيما من يعانون ضيقًا ماليًا أو نقصًا في الغذاء. |
| 4348 | AI-draft | Helping someone experiencing mental or emotional difficulties. The intention is to reduce their hardship and provide compassionate assistance. | إعانة من يمرّ بصعوبات نفسية أو عاطفية. والنيّة تخفيف ضيقه وتقديم عون رحيم. |
| 4349 | AI-draft | Providing financial assistance | تقديم عون مالي |
| 4350 | AI-draft | Supporting them during a difficult period | مساندته في مرحلة صعبة |
| 4351 | AI-draft | Offering practical assistance | تقديم عون عملي |
| 4352 | AI-draft | Helping them access appropriate support | مساعدته على الوصول إلى الدعم المناسب |
| 4353 | AI-draft | Helping a person who is engaged in spiritual or religious activity. Assistance may be financial or practical, depending on the person's needs. | إعانة شخص منشغل بعمل روحي أو ديني، ماليًا أو عمليًا بحسب حاجته. |
| 4354 | AI-draft | A spiritual practitioner | صاحب ممارسة روحية |
| 4355 | AI-draft | Someone involved in spiritual activities | منشغل بالأنشطة الروحية |
| 4356 | AI-draft | Someone who provides spiritual guidance or related services | من يقدّم إرشادًا روحيًا أو خدمات متّصلة به |
| 4357 | AI-draft | The sadaqah should be given sincerely for the benefit of others. The food, fish, or other assistance is distributed to people who can genuinely benefit from it, particularly those experiencing poverty or hardship. | ينبغي أن تُعطى الصدقة بإخلاص لنفع الآخرين. فالطعام أو السمك أو غيرهما يُوزَّع على من ينتفع به حقًّا، لا سيما الفقراء وأهل الضيق. |
| 4358 | AI-draft | The Light - Source of all illumination and guidance | النور - مصدر كل إنارة وهداية |
| 4359 | AI-draft | The Guide - Who leads to truth | الهادي - الذي يهدي إلى الحقّ |
| 4360 | AI-draft | The Greatest - Supreme in majesty | الكبير - العظيم في جلاله |
| 4361 | AI-draft | Divine Illumination and Clarity | الإنارة والوضوح |
| 4362 | AI-draft | Leadership and Authority | القيادة والسلطة |
| 4363 | AI-draft | Spiritual Radiance | الإشراق الروحي |
| 4364 | AI-draft | Truth and Authenticity | الحقّ والصدق |
| 4365 | AI-draft | Vitality and Life Force | الحيوية وقوة الحياة |
| 4366 | AI-draft | Conscious Awareness | الوعي اليقظ |
| 4367 | AI-draft | Public speaking and presentations | الخطابة والعروض |
| 4368 | AI-draft | Spiritual illumination practices | ممارسات الإنارة الروحية |
| 4369 | AI-draft | Dhikr of An-Nūr (100x recommended) | ذكر «يا نور» (100 مرّة مستحبّة) |
| 4370 | AI-draft | Study of sacred texts | دراسة النصوص المقدّسة |
| 4371 | AI-draft | Decision-making requiring wisdom | القرارات التي تتطلّب حكمة |
| 4372 | AI-draft | Secretive or deceptive activities | الأعمال السرّية أو المخادعة |
| 4373 | AI-draft | Hiding from responsibility | التهرّب من المسؤولية |
| 4374 | AI-draft | Avoiding difficult truths | تجنّب الحقائق الصعبة |
| 4375 | AI-draft | Dishonest dealings | المعاملات غير الأمينة |
| 4376 | AI-draft | The Sun hour is when divine light most easily penetrates the veils of the heart. Use it for seeking truth and clarity. | ساعة الشمس وقت يسهل فيه على النور أن ينفذ إلى حجب القلب. فاستعملها لطلب الحقّ والوضوح. |
| 4377 | AI-draft | Al-Būnī emphasized the Sun hour as optimal for spiritual illumination and receiving divine guidance. | أكّد البوني أن ساعة الشمس أنسب للإنارة الروحية وتلقّي الهداية. |
| 4378 | AI-draft | Divine Revelation | الوحي |
| 4379 | AI-draft | The Quran swears by the Sun, indicating its significance in divine creation and as a sign of Allah's power. | أقسم القرآن بالشمس، دلالةً على شأنها في الخلق وآيةً على قدرة الله. |
| 4380 | AI-draft | In Islamic tradition, the Sun (Ash-Shams) represents divine light and knowledge. The Prophet Muhammad ﷺ compared the scholars to "lamps in the darkness," echoing solar symbolism. Sunday (Yawm al-Aḥad) is named after the Sun and is considered auspicious for beginning important spiritual practices. | في التراث الإسلامي تمثّل الشمس النور والعلم. وقد شبّه النبي ﷺ العلماء بالمصابيح في الظلمة. ويوم الأحد يرتبط بالشمس ويُعدّ مناسبًا لبدء الممارسات الروحية المهمّة. |
| 4381 | AI-draft | A student studies Quran during Sun hour and experiences unusual clarity in understanding | طالب يدرس القرآن في ساعة الشمس فيجد وضوحًا غير معتاد في الفهم |
| 4382 | AI-draft | A leader makes a difficult but just decision during Sun hour | قائد يتّخذ قرارًا صعبًا عادلًا في ساعة الشمس |
| 4383 | AI-draft | Someone seeking guidance performs dhikr of An-Nūr 100x and receives clear insight | طالب هداية يذكر «يا نور» 100 مرّة فينال بصيرة واضحة |
| 4384 | AI-draft | Ilm (Knowledge) - Divine and Sacred Knowledge | العلم - العلم الإلهي المقدّس |
| 4385 | AI-draft | Nūr al-Qalb (Light of the Heart) | نور القلب |
| 4386 | AI-draft | The Subtle One - Gentle, Kind, and All-Perceiving | اللطيف - الرفيق الرحيم الخبير |
| 4387 | AI-draft | The Most Merciful - Eternally Compassionate | الرحيم - دائم الرحمة |
| 4388 | AI-draft | Emotional Wisdom and Intuition | الحكمة العاطفية والحدس |
| 4389 | AI-draft | Receptivity to Divine Messages | التهيّؤ للمعاني الإلهية |
| 4390 | AI-draft | Nurturing and Compassion | الرعاية والرحمة |
| 4391 | AI-draft | Cycles of Growth and Renewal | دورات النموّ والتجدّد |
| 4392 | AI-draft | Subtle Spiritual Perception | الإدراك الروحي اللطيف |
| 4393 | AI-draft | Connection to the Unseen | الصلة بالغيب |
| 4394 | AI-draft | Family matters and nurturing | شؤون الأسرة والرعاية |
| 4395 | AI-draft | Dhikr of Al-Laṭīf (129x recommended) | ذكر «يا لطيف» (129 مرّة مستحبّة) |
| 4396 | AI-draft | Seeking mercy and forgiveness | طلب الرحمة والمغفرة |
| 4397 | AI-draft | Gentle spiritual practices | ممارسات روحية لطيفة |
| 4398 | AI-draft | Connecting with feminine divine qualities | التخلّق بصفات الرحمة والحنان |
| 4399 | AI-draft | Harsh or aggressive actions | الأعمال القاسية أو العدوانية |
| 4400 | AI-draft | Forcing emotional issues | فرض المسائل العاطفية |
| 4401 | AI-draft | Ignoring intuitive guidance | تجاهل الإلهام الباطن |
| 4402 | AI-draft | Overly rational approaches to spiritual matters | المناهج العقلانية المفرطة في الأمور الروحية |
| 4403 | AI-draft | The Moon hour is blessed for those seeking divine mercy. The subtle light of the Moon reveals what the harsh Sun might hide. | ساعة القمر مباركة لطالبي رحمة الله. فنور القمر اللطيف يكشف ما قد تخفيه الشمس الحادّة. |
| 4404 | AI-draft | Ibn 'Arabī taught that lunar energy facilitates subtle spiritual perception and emotional healing. | علّم ابن عربي أن الطاقة القمرية تيسّر الإدراك الروحي اللطيف وشفاء النفس. |
| 4405 | AI-draft | The Quran emphasizes the Moon's cycles as divine signs, teaching about spiritual growth and renewal. | يؤكّد القرآن أن أطوار القمر آيات، تعلّم النموّ الروحي والتجدّد. |
| 4406 | AI-draft | The Moon (Al-Qamar) has special significance in Islam, determining the Islamic calendar (Hijri). The Prophet Muhammad ﷺ was said to have split the Moon as a miracle. Monday (Yawm al-Ithnayn), the Moon's day, is blessed as the day of the Prophet's birth and is recommended for fasting. | للقمر شأن خاصّ في الإسلام، فبه يُحدَّد التقويم الهجري. ومن معجزات النبي ﷺ انشقاق القمر. ويوم الاثنين يوم وُلد فيه النبي ﷺ ويُستحبّ صيامه. |
| 4407 | AI-draft | A mother performs dhikr of Al-Laṭīf during Moon hour and finds patience with her children | أمّ تذكر «يا لطيف» في ساعة القمر فتجد صبرًا مع أولادها |
| 4408 | AI-draft | Someone seeking forgiveness makes du'a during Moon hour and feels divine mercy | طالب مغفرة يدعو في ساعة القمر فيشعر برحمة الله |
| 4409 | AI-draft | A spiritual seeker has a profound dream after Moon hour meditation | سالك يرى رؤيا عميقة بعد تأمّل في ساعة القمر |
| 4410 | AI-draft | Luṭf (Subtlety and Gentleness) | اللطف |
| 4411 | AI-draft | Barakah (Divine Blessing) | البركة |
| 4412 | AI-draft | Qalb (Heart - Spiritual Center) | القلب - المركز الروحي |
| 4413 | AI-draft | Divine Knowledge | العلم الإلهي |
| 4414 | AI-draft | Mental Clarity | صفاء الذهن |
| 4415 | AI-draft | Mercury hour opens the mind to divine knowledge | ساعة عطارد تفتح الذهن للعلم |
| 4416 | AI-draft | Classical Tradition | التراث الكلاسيكي |
| 4417 | AI-draft | Traditional | تقليدي |
| 4418 | AI-draft | Mercury represents sacred knowledge ('Ilm) in Islamic tradition. | يمثّل عطارد العلم المقدّس في التراث الإسلامي. |
| 4419 | AI-draft | Studying Quran during Mercury hour enhances comprehension | دراسة القرآن في ساعة عطارد تعين على الفهم |
| 4420 | AI-draft | 'Ilm (Knowledge) | العلم |
| 4421 | AI-draft | Ḥikmah (Wisdom) | الحكمة |
| 4422 | AI-draft | Seeking provision | طلب الرزق |
| 4423 | AI-draft | Harsh decisions | القرارات القاسية |
| 4424 | AI-draft | Venus hour is blessed for love and beauty | ساعة الزهرة مباركة للمحبّة والجمال |
| 4425 | AI-draft | Sufi Tradition | التراث الصوفي |
| 4426 | AI-draft | Venus cultivates divine love | الزهرة تنمّي المحبّة الإلهية |
| 4427 | AI-draft | Venus represents divine beauty (Jamāl) and Friday is the holiest day. | تمثّل الزهرة الجمال، ويوم الجمعة أفضل الأيام. |
| 4428 | AI-draft | Couples reconcile during Venus hour | زوجان يتصالحان في ساعة الزهرة |
| 4429 | AI-draft | Rizq (Provision) | الرزق |
| 4430 | AI-draft | Divine Strength | القوة الإلهية |
| 4431 | AI-draft | Willpower | قوة الإرادة |
| 4432 | AI-draft | Gentle matters | الأمور اللطيفة |
| 4433 | AI-draft | Mars hour gives spiritual strength | ساعة المريخ تمنح قوة روحية |
| 4434 | AI-draft | Mars provides courage | المريخ يمنح الشجاعة |
| 4435 | AI-draft | Mars represents jihad (spiritual struggle) in Islamic tradition. | يمثّل المريخ مجاهدة النفس في التراث الإسلامي. |
| 4436 | AI-draft | Quwwah (Strength) | القوة |
| 4437 | AI-draft | Ṣabr (Patience) | الصبر |
| 4438 | AI-draft | Expansion | الاتساع |
| 4439 | AI-draft | Generosity | الكرم |
| 4440 | ✅ reviewed | Fortune | السعد |
| 4441 | AI-draft | Seeking blessings | طلب البركات |
| 4442 | AI-draft | Restriction | التقييد |
| 4443 | AI-draft | Withholding | الإمساك |
| 4444 | AI-draft | Stinginess | البخل |
| 4445 | AI-draft | Jupiter hour opens doors of provision | ساعة المشتري تفتح أبواب الرزق |
| 4446 | AI-draft | Jupiter brings abundance | المشتري يجلب الوفرة |
| 4447 | AI-draft | Jupiter represents divine expansion and Thursday is blessed for seeking knowledge. | يمثّل المشتري الاتساع، ويوم الخميس مبارك لطلب العلم. |
| 4448 | AI-draft | Starting business during Jupiter hour brings success | بدء التجارة في ساعة المشتري يجلب التوفيق |
| 4449 | AI-draft | Karam (Generosity) | الكرم |
| 4450 | AI-draft | Barakah (Blessing) | البركة |
| 4451 | AI-draft | Solitude | الخلوة |
| 4452 | AI-draft | Celebration | الاحتفال |
| 4453 | AI-draft | Saturn hour is for deep wisdom and contemplation | ساعة زحل للحكمة العميقة والتأمّل |
| 4454 | AI-draft | Saturn teaches patience | زحل يعلّم الصبر |
| 4455 | AI-draft | Saturn represents divine wisdom (Ḥikmah) and the importance of patience in spiritual growth. | يمثّل زحل الحكمة وأهمية الصبر في النموّ الروحي. |
| 4456 | AI-draft | Deep meditation during Saturn hour yields profound insights | التأمّل العميق في ساعة زحل يثمر بصائر عميقة |
| 4457 | AI-draft | Bold and energetic | جريء نشيط |
| 4458 | AI-draft | Fast-moving and decisive | سريع الحركة حاسم |
| 4459 | AI-draft | Confident and direct | واثق مباشر |
| 4460 | AI-draft | Natural initiator | مبادر بطبعه |
| 4461 | AI-draft | Gets things done quickly | ينجز الأمور بسرعة |
| 4462 | AI-draft | High energy and drive | طاقة واندفاع عاليان |
| 4463 | AI-draft | Can become impatient with slower processes | قد ينفد صبره مع العمليات البطيئة |
| 4464 | AI-draft | May react too quickly without reflection | قد يتفاعل بسرعة دون تروٍّ |
| 4465 | AI-draft | Risk of burnout from constant activity | خطر الإنهاك من النشاط الدائم |
| 4466 | AI-draft | Can overlook details in rush to complete | قد يغفل التفاصيل في عجلته للإنجاز |
| 4467 | AI-draft | May struggle with repetitive tasks | قد يجد صعوبة في المهامّ المتكرّرة |
| 4468 | AI-draft | Take short breaks to cool down | خذ استراحات قصيرة لتهدأ |
| 4469 | AI-draft | Schedule downtime for rest | خصّص وقتًا للراحة |
| 4470 | AI-draft | Sports training and coaching | التدريب الرياضي |
| 4471 | AI-draft | Event management | إدارة الفعاليات |
| 4472 | AI-draft | Slow-paced environments with little variety | البيئات البطيئة قليلة التنوّع |
| 4473 | AI-draft | Roles requiring extreme patience and detailed precision | الأدوار التي تتطلّب صبرًا شديدًا ودقّة مفصّلة |
| 4474 | AI-draft | Fire types thrive in dynamic, fast-paced environments where they can lead, initiate, and see quick results. | يزدهر أصحاب النار في البيئات الحيوية السريعة التي يقودون فيها ويبادرون ويرون نتائج سريعة. |
| 4475 | AI-draft | Cold & Wet | بارد رطب |
| 4476 | AI-draft | Emotional and intuitive | عاطفي حدسي |
| 4477 | AI-draft | Patient and supportive | صبور داعم |
| 4478 | AI-draft | Caring and empathetic | راعٍ متعاطف |
| 4479 | AI-draft | Sensitive to surroundings | حسّاس لمحيطه |
| 4480 | AI-draft | Patient and persistent | صبور مثابر |
| 4481 | AI-draft | Creative and imaginative | مبدع واسع الخيال |
| 4482 | AI-draft | Can absorb negativity from others | قد يمتصّ سلبية الآخرين |
| 4483 | AI-draft | May overthink and get stuck in emotions | قد يفرط في التفكير ويعلق في مشاعره |
| 4484 | AI-draft | Risk of taking on too many others' problems | خطر تحمّل مشكلات الآخرين أكثر من اللازم |
| 4485 | AI-draft | Can become drained in harsh environments | قد يُستنزف في البيئات القاسية |
| 4486 | AI-draft | Set healthy boundaries with others | ضع حدودًا صحّية مع الآخرين |
| 4487 | AI-draft | Create calm, peaceful spaces | اصنع مساحات هادئة مطمئنّة |
| 4488 | AI-draft | Practice saying no when needed | تدرّب على قول لا عند الحاجة |
| 4489 | AI-draft | Avoid absorbing others' emotions | تجنّب امتصاص مشاعر الآخرين |
| 4490 | AI-draft | Healthcare and nursing | الرعاية الصحّية والتمريض |
| 4491 | AI-draft | Teaching and education | التعليم والتربية |
| 4492 | AI-draft | Counseling and therapy | الإرشاد والعلاج النفسي |
| 4493 | AI-draft | UX research and design | بحوث تجربة المستخدم وتصميمها |
| 4494 | AI-draft | Childcare and early education | رعاية الأطفال والتعليم المبكر |
| 4495 | AI-draft | HR and employee wellbeing | الموارد البشرية ورفاه الموظّفين |
| 4496 | AI-draft | Aggressive, cutthroat workplaces | أماكن العمل العدوانية الشرسة |
| 4497 | AI-draft | Roles with constant conflict and confrontation | الأدوار ذات الصراع والمواجهة الدائمين |
| 4498 | AI-draft | Water types excel in nurturing, supportive roles where empathy and patience are valued. | يتفوّق أصحاب الماء في أدوار الرعاية والسند حيث يُقدَّر التعاطف والصبر. |
| 4499 | AI-draft | Curious and talkative | فضولي كثير الكلام |
| 4500 | AI-draft | Communicative and social | تواصلي اجتماعي |
| 4501 | AI-draft | Loves learning and ideas | يحبّ التعلّم والأفكار |
| 4502 | AI-draft | Adaptable and flexible | متكيّف مرن |
| 4503 | AI-draft | Excellent communicator | متواصل ممتاز |
| 4504 | AI-draft | Fast learner and adapter | سريع التعلّم والتكيّف |
| 4505 | AI-draft | Creative problem solver | مبدع في حلّ المشكلات |
| 4506 | AI-draft | Thrives in social settings | يزدهر في الأجواء الاجتماعية |
| 4507 | AI-draft | Can become scattered or unfocused | قد يتشتّت أو يفقد التركيز |
| 4508 | AI-draft | May start many things without finishing | قد يبدأ أشياء كثيرة ولا يتمّها |
| 4509 | AI-draft | Risk of anxiety from overthinking | خطر القلق من فرط التفكير |
| 4510 | AI-draft | May struggle with routine and structure | قد يجد صعوبة في الروتين والتنظيم |
| 4511 | AI-draft | Practice grounding activities | مارس أنشطة التجذّر |
| 4512 | AI-draft | Data and business analysis | تحليل البيانات والأعمال |
| 4513 | AI-draft | Writing and journalism | الكتابة والصحافة |
| 4514 | AI-draft | Content creation and blogging | صناعة المحتوى والتدوين |
| 4515 | AI-draft | Design and creative services | التصميم والخدمات الإبداعية |
| 4516 | AI-draft | Teaching and training | التعليم والتدريب |
| 4517 | AI-draft | Highly repetitive, non-creative tasks | المهامّ المتكرّرة غير الإبداعية |
| 4518 | AI-draft | Environments with zero flexibility or variety | البيئات الخالية من المرونة أو التنوّع |
| 4519 | AI-draft | Air types thrive in dynamic, communicative roles that value ideas, learning, and connection. | يزدهر أصحاب الهواء في الأدوار الحيوية التواصلية التي تقدّر الأفكار والتعلّم والتواصل. |
| 4520 | AI-draft | Grounded and stable | متجذّر مستقرّ |
| 4521 | AI-draft | Patient and methodical | صبور منهجي |
| 4522 | AI-draft | Practical and organized | عملي منظّم |
| 4523 | AI-draft | Excellent follow-through | متابعة ممتازة حتى الإتمام |
| 4524 | AI-draft | Dependable and trustworthy | موثوق أمين |
| 4525 | AI-draft | Calm under pressure | هادئ تحت الضغط |
| 4526 | AI-draft | May get stuck in routine or comfort zone | قد يعلق في الروتين أو منطقة الراحة |
| 4527 | AI-draft | Risk of becoming too rigid | خطر التصلّب المفرط |
| 4528 | AI-draft | May need extra motivation to start | قد يحتاج إلى دافع إضافي للبدء |
| 4529 | AI-draft | Mix routine with variety | امزج الروتين بالتنوّع |
| 4530 | AI-draft | Set gentle goals for change | ضع أهدافًا لطيفة للتغيير |
| 4531 | AI-draft | Accounting and finance operations | عمليات المحاسبة والمالية |
| 4532 | AI-draft | HR operations and administration | عمليات الموارد البشرية والإدارة |
| 4533 | AI-draft | Skilled trades (carpentry, plumbing, electrical) | الحِرف الماهرة (النجارة، السباكة، الكهرباء) |
| 4534 | AI-draft | Archive management and documentation | إدارة الأرشيف والتوثيق |
| 4535 | AI-draft | Chaotic, unstructured early-stage startups | الشركات الناشئة الفوضوية غير المنظّمة |
| 4536 | AI-draft | Roles requiring constant rapid change | الأدوار التي تتطلّب تغيّرًا سريعًا دائمًا |
| 4537 | AI-draft | Earth types excel in structured, stable environments where reliability and thoroughness are valued. | يتفوّق أصحاب التراب في البيئات المنظّمة المستقرّة حيث تُقدَّر الموثوقية والإتقان. |
| 4538 | AI-draft | The Ram - Initiative and new beginnings | الحمل - المبادرة والبدايات الجديدة |
| 4539 | AI-draft | Spring Equinox | الاعتدال الربيعي |
| 4540 | AI-draft | The Bull - Stability and material mastery | الثور - الثبات وإتقان المادة |
| 4541 | AI-draft | Patience, perseverance, groundedness | الصبر والمثابرة والتجذّر |
| 4542 | AI-draft | The Twins - Duality and communication | الجوزاء - الثنائية والتواصل |
| 4543 | AI-draft | The Crab - Protection and nurturing | السرطان - الحماية والرعاية |
| 4544 | AI-draft | Summer Solstice | الانقلاب الصيفي |
| 4545 | AI-draft | Nobility, generosity, radiance | النُّبل والكرم والإشراق |
| 4546 | AI-draft | The Maiden - Purity and service | السنبلة - الطهارة والخدمة |
| 4547 | AI-draft | The Scales - Balance and harmony | الميزان - التوازن والانسجام |
| 4548 | AI-draft | The Archer - Quest for truth and expansion | القوس - طلب الحقّ والاتساع |
| 4549 | AI-draft | Wisdom-seeking, optimism, faith | طلب الحكمة والتفاؤل والإيمان |
| 4550 | AI-draft | Winter Solstice | الانقلاب الشتوي |
| 4551 | AI-draft | The Water-Bearer - Innovation and community | الدلو - الابتكار والمجتمع |
| 4552 | AI-draft | The Fish - Transcendence and compassion | الحوت - السموّ والرحمة |
| 4553 | AI-draft | Mysticism, empathy, dissolution of ego | التصوّف والتعاطف وفناء الأنا |
| 4554 | AI-draft | Mutable water, completing the cycle in divine unity | ماء ذو جسدين يُتمّ الدورة في التوحيد |
| 4555 | AI-draft | Divine radiance, leadership, vitality, nobility | الإشراق والقيادة والحيوية والنُّبل |
| 4556 | AI-draft | Al-Nūr (The Light) | النور |
| 4557 | AI-draft | At sunrise or solar noon | عند الشروق أو الزوال |
| 4558 | AI-draft | Masculine, diurnal, benefic | مذكّر، نهاري، سعد |
| 4559 | AI-draft | Rulership, authority, life force | الحكم والسلطة وقوة الحياة |
| 4560 | AI-draft | Kings, fathers, spiritual leaders | الملوك والآباء والقادة الروحيون |
| 4561 | AI-draft | Receptivity, intuition, emotional depth, nurturing | التلقّي والحدس والعمق العاطفي والرعاية |
| 4562 | AI-draft | Feminine, nocturnal, benefic | مؤنّث، ليلي، سعد |
| 4563 | AI-draft | Emotions, cycles, subconscious | العواطف والدورات والباطن |
| 4564 | AI-draft | Mothers, common people, the soul | الأمّهات وعامّة الناس والروح |
| 4565 | AI-draft | Iron | الحديد |
| 4566 | AI-draft | Hot & Dry (Extreme) | حارّ يابس (شديد) |
| 4567 | AI-draft | Masculine, nocturnal, malefic (transformative) | مذكّر، ليلي، نحس (محوِّل) |
| 4568 | AI-draft | Quicksilver (Mercury) | الزئبق |
| 4569 | AI-draft | Variable (adapts to neighbors) | متغيّر (يتكيّف مع ما يجاوره) |
| 4570 | AI-draft | Knowledge, communication, intellect, sacred writing | العلم والتواصل والعقل والكتابة المقدّسة |
| 4571 | AI-draft | Wednesday mornings, ideal for study | صباح الأربعاء، مثالي للدراسة |
| 4572 | AI-draft | Neutral, convertible, benefic when well-placed | محايد ممتزج، سعد إذا حسن موضعه |
| 4573 | AI-draft | Scholars, merchants, scribes, students | العلماء والتجّار والكتّاب والطلاب |
| 4574 | AI-draft | Tin | القصدير |
| 4575 | AI-draft | Hot & Moist (Moderate) | حارّ رطب (معتدل) |
| 4576 | AI-draft | Wisdom, expansion, generosity, divine grace | الحكمة والاتساع والكرم والفضل |
| 4577 | AI-draft | Thursday before sunset, especially for blessings | الخميس قبل الغروب، لا سيما للبركات |
| 4578 | AI-draft | Masculine, diurnal, benefic (great fortune) | مذكّر، نهاري، سعد (السعد الأكبر) |
| 4579 | AI-draft | Copper | النحاس |
| 4580 | AI-draft | Cold & Moist (Moderate) | بارد رطب (معتدل) |
| 4581 | AI-draft | Beauty, harmony, love, divine attraction | الجمال والانسجام والمحبّة والجاذبية |
| 4582 | AI-draft | Cold & Dry (Extreme) | بارد يابس (شديد) |
| 4583 | AI-draft | Discipline, patience, divine wisdom through trials | الانضباط والصبر والحكمة عبر الابتلاء |
| 4584 | AI-draft | Saturday evenings, for patience and endurance | مساء السبت، للصبر والتحمّل |
| 4585 | AI-draft | Masculine, diurnal, malefic (teaching through difficulty) | مذكّر، نهاري، نحس (يعلّم بالشدّة) |
| 4586 | AI-draft | Time, karma, structure, limitations | الزمن والجزاء والبنية والحدود |
| 4587 | AI-draft | Elders, ascetics, those who endure | الشيوخ والزهّاد وأهل الصبر |
| 4588 | AI-draft | The Initiator (Al-Mubtadiʾ) | المبتدئ |
| 4589 | AI-draft | Tawbah (Repentance) | التوبة |
| 4590 | AI-draft | Pioneering spirit | روح الريادة |
| 4591 | AI-draft | Originality | الأصالة |
| 4592 | AI-draft | Overcoming ego (nafs) | مجاهدة النفس |
| 4593 | AI-draft | To lead with integrity and inspire others to their own path | أن تقود بنزاهة وتُلهم الآخرين طريقهم |
| 4594 | AI-draft | The Peacemaker (Al-Muṣāliḥ) | المصالح |
| 4595 | AI-draft | Wara' (Scrupulousness) | الورع |
| 4596 | AI-draft | Indecision | التردّد |
| 4597 | AI-draft | Hypersensitivity | فرط الحساسية |
| 4598 | AI-draft | Passivity | السلبية |
| 4599 | AI-draft | The Creator (Al-Khallāq) | الخلّاق |
| 4600 | AI-draft | Zuhd (Asceticism) | الزهد |
| 4601 | AI-draft | Joy | الفرح |
| 4602 | AI-draft | Scattered talents | مواهب مبعثرة |
| 4603 | AI-draft | Difficulty completing projects | صعوبة إتمام المشاريع |
| 4604 | AI-draft | To express oneself freely and bring beauty to the world | أن تعبّر عن نفسك بحرية وتجلب الجمال إلى العالم |
| 4605 | AI-draft | The Builder (Al-Bānī) | الباني |
| 4606 | AI-draft | Sabr (Patience) | الصبر |
| 4607 | AI-draft | Dullness | الفتور |
| 4608 | AI-draft | To create lasting systems that serve humanity | أن تقيم أنظمة دائمة تخدم الناس |
| 4609 | AI-draft | The Freedom Seeker (Al-Ḥurr) | طالب الحرية (الحرّ) |
| 4610 | AI-draft | Tawakkul (Trust) | التوكّل |
| 4611 | AI-draft | Versatility | تعدّد المواهب |
| 4612 | AI-draft | Restlessness | القلق |
| 4613 | AI-draft | Irresponsibility | عدم المسؤولية |
| 4614 | AI-draft | Escapism | الهروب |
| 4615 | AI-draft | Agitation | الاضطراب |
| 4616 | AI-draft | To teach adaptability and embrace divine will | أن تعلّم التكيّف والرضا بقضاء الله |
| 4617 | AI-draft | Freedom to experience life fully and authentically | حرية عيش الحياة كاملة بصدق |
| 4618 | AI-draft | The Nurturer (Al-Rāʿī) | الراعي |
| 4619 | AI-draft | Meddling | التدخّل |
| 4620 | AI-draft | Controlling tendencies | الميل إلى التحكّم |
| 4621 | AI-draft | To heal and harmonize through compassionate service | أن تشفي وتؤلّف بالخدمة الرحيمة |
| 4622 | AI-draft | The Seeker (Al-Ṭālib) | الطالب |
| 4623 | AI-draft | Neptune (Spiritual) / Moon (Traditional) | نبتون (روحي) / القمر (تقليدي) |
| 4624 | AI-draft | Tafakkur (Contemplation) | التفكّر |
| 4625 | AI-draft | Spirituality | الروحانية |
| 4626 | AI-draft | Introspection | محاسبة النفس |
| 4627 | AI-draft | Discernment | التمييز |
| 4628 | AI-draft | Skepticism | الشكّ |
| 4629 | AI-draft | Moodiness | تقلّب المزاج |
| 4630 | AI-draft | To uncover divine mysteries and teach spiritual truths | أن تكشف الأسرار وتعلّم الحقائق الروحية |
| 4631 | AI-draft | To understand the deeper mysteries of existence | أن تفهم أسرار الوجود الأعمق |
| 4632 | AI-draft | The Master (Al-Sayyid) | السيّد |
| 4633 | AI-draft | Abundance | الوفرة |
| 4634 | AI-draft | Imbalanced power | اختلال القوة |
| 4635 | AI-draft | Materialism | المادية |
| 4636 | AI-draft | Hardness | القسوة |
| 4637 | AI-draft | Insensitivity | قلّة الإحساس |
| 4638 | AI-draft | To master material and spiritual realms | أن تُتقن عالمي المادة والروح |
| 4639 | AI-draft | The Humanitarian (Al-Insānī) | الإنساني |
| 4640 | AI-draft | Universality | الشمول |
| 4641 | AI-draft | Selflessness | الإيثار |
| 4642 | AI-draft | Accepting endings | تقبّل الخواتيم |
| 4643 | AI-draft | Impersonal distance | البُعد غير الشخصي |
| 4644 | AI-draft | To complete cycles and serve the collective | أن تُتمّ الدورات وتخدم الجماعة |
| 4645 | AI-draft | The Illuminator (Al-Munīr) | المنير |
| 4646 | AI-draft | Kashf (Unveiling) | الكشف |
| 4647 | AI-draft | Spiritual insight | البصيرة الروحية |
| 4648 | AI-draft | Charisma | الجاذبية |
| 4649 | AI-draft | To illuminate the path for others through spiritual wisdom | أن تنير الطريق للآخرين بالحكمة الروحية |
| 4650 | AI-draft | The Master Builder (Al-Muhandis al-Aʿẓam) | البنّاء الأعظم |
| 4651 | AI-draft | Fanāʾ (Annihilation in Divine) | الفناء |
| 4652 | AI-draft | Visionary power | قوة الرؤية |
| 4653 | AI-draft | Large-scale impact | أثر واسع النطاق |
| 4654 | AI-draft | To manifest divine vision into physical reality | أن تحوّل الرؤية إلى واقع ملموس |
| 4655 | AI-draft | The Master Teacher (Al-Muʿallim al-Akbar) | المعلّم الأكبر |
| 4656 | AI-draft | Baqāʾ (Remaining in Divine) | البقاء |
| 4657 | AI-draft | Universal love | المحبّة الشاملة |
| 4658 | AI-draft | Embodied wisdom | الحكمة المتجسّدة |
| 4659 | AI-draft | To heal and guide humanity toward unity with the Divine | أن تشفي الناس وترشدهم إلى التوحيد |
| 4660 | AI-draft | Enhanced Life Path Analysis | تحليل مسار الحياة الموسَّع |
| 4661 | AI-draft | Your Core Life Purpose | غاية حياتك الأساسية |
| 4662 | AI-draft | Your Core Path | مسارك الأساسي |
| 4663 | AI-draft | Your Inner Desires | رغباتك الباطنة |
| 4664 | AI-draft | What truly motivates and fulfills you deep down | ما يحرّكك ويرضيك حقًّا في العمق |
| 4665 | AI-draft | What Fulfills You | ما يرضيك |
| 4666 | AI-draft | Your Outer Self | ذاتك الظاهرة |
| 4667 | AI-draft | Your Purpose | غايتك |
| 4668 | AI-draft | Power Number | عدد القوة |
| 4669 | AI-draft | Numbers 11, 22, and 33 carry special spiritual significance | للأعداد 11 و22 و33 دلالة روحية خاصّة |
| 4670 | AI-draft | Number Colors & Meanings | ألوان الأعداد ومعانيها |
| 4671 | AI-draft | Balance & Partnership | التوازن والشراكة |
| 4672 | AI-draft | Creativity & Expression | الإبداع والتعبير |
| 4673 | AI-draft | Wisdom & Spirituality | الحكمة والروحانية |
| 4674 | AI-draft | Power & Success | القوة والنجاح |
| 4675 | AI-draft | Completion & Compassion | الإتمام والرحمة |
| 4676 | AI-draft | Intuition & Illumination | الحدس والإنارة |
| 4677 | AI-draft | Life Path Interpretation | تفسير مسار الحياة |
| 4678 | AI-draft | Synthesis & Integration | التركيب والتكامل |
| 4679 | AI-draft | How It All Fits Together | كيف يتكامل كل شيء |
| 4680 | AI-draft | Your Current Life Chapter | فصل حياتك الحالي |
| 4681 | AI-draft | The spiritual theme of this period in your life | الموضوع الروحي لهذه المرحلة من حياتك |
| 4682 | AI-draft | What Truly Fulfills You | ما يرضيك حقًّا |
| 4683 | AI-draft | Your Spiritual Connection | صلتك الروحية |
| 4684 | AI-draft | Pinnacles & Challenges | القمم والتحدّيات |
| 4685 | AI-draft | Life Stages & Turning Points | مراحل الحياة ونقاط التحوّل |
| 4686 | AI-draft | Peak of capability and establishment | ذروة القدرة والاستقرار |
| 4687 | AI-draft | Wisdom (Ḥikmah) | الحكمة |
| 4688 | AI-draft | Integration of experience into understanding | تحويل التجربة إلى فهم |
| 4689 | AI-draft | Service (Khidmah) | الخدمة |
| 4690 | AI-draft | Contribution to family and community | الإسهام في الأسرة والمجتمع |
| 4691 | AI-draft | Creating lasting impact and inheritance | صنع أثر وإرث باقيين |
| 4692 | AI-draft | Transcendence and spiritual elevation | السموّ والارتقاء الروحي |
| 4693 | AI-draft | Wara' | الورع |
| 4694 | AI-draft | Sabr | الصبر |
| 4695 | AI-draft | Trust in Divine | التوكّل على الله |
| 4696 | AI-draft | Rida | الرضا |
| 4697 | AI-draft | Contentment | القناعة |
| 4698 | AI-draft | Tafakkur | التفكّر |
| 4699 | AI-draft | Muraqabah | المراقبة |
| 4700 | AI-draft | Watchfulness | اليقظة |
| 4701 | AI-draft | Mahabba | المحبّة |
| 4702 | AI-draft | Neptune | نبتون |
| 4703 | AI-draft | Divine Illumination, Clarity, Guidance | الإنارة والوضوح والهداية |
| 4704 | AI-draft | Reciting An-Nūr brings clarity to the heart and illuminates the path ahead. The Sun hour channels divine light. | ذكر «يا نور» يجلي القلب وينير الطريق. وساعة الشمس تحمل معنى النور. |
| 4705 | ✅ reviewed | Surah Ash-Shams 91:1 | سورة الشمس، الآية 1 |
| 4706 | AI-draft | Allah takes an oath by the sun, highlighting its role as a source of divine light and guidance in creation. | أقسم الله بالشمس، إبرازًا لدورها مصدرًا للنور والهداية في الخلق. |
| 4707 | AI-draft | How can you illuminate the path for others today? | كيف تنير الطريق للآخرين اليوم؟ |
| 4708 | AI-draft | The Sun represents the divine light of certainty (yaqīn) that dispels all darkness of doubt. | تمثّل الشمس نور اليقين الذي يبدّد ظلمات الشكّ. |
| 4709 | AI-draft | Recite An-Nūr (100x) seeking clarity. Make important decisions with confidence. | اذكر «يا نور» (100 مرّة) طالبًا الوضوح، واتّخذ قراراتك المهمّة بثقة. |
| 4710 | AI-draft | Gentle Grace, Subtlety, Inner Wisdom | اللطف والرقّة والحكمة الباطنة |
| 4711 | AI-draft | Al-Laṭīf opens subtle spiritual perception and emotional wisdom. The Moon hour nurtures receptivity. | اسم اللطيف يفتح الإدراك الروحي اللطيف والحكمة العاطفية. وساعة القمر تنمّي التلقّي. |
| 4712 | AI-draft | Surah Ya-Sin 36:39 | سورة يس 36:39 |
| 4713 | AI-draft | The lunar phases teach us about divine timing, cycles, and the wisdom of gradual change. | تعلّمنا أطوار القمر التوقيت الإلهي والدورات وحكمة التغيّر التدريجي. |
| 4714 | AI-draft | What phase of life are you in? What needs to grow or release? | في أي طور من الحياة أنت؟ ما الذي ينبغي أن ينمو أو يُترك؟ |
| 4715 | AI-draft | The Moon governs the realm of the soul (nafs) and teaches the wisdom of receptivity and emotional intelligence. | يحكم القمر عالم النفس ويعلّم حكمة التلقّي والذكاء العاطفي. |
| 4716 | AI-draft | Emotional healing, intuition, reflection, nurturing relationships | شفاء النفس، الحدس، التأمّل، رعاية العلاقات |
| 4717 | AI-draft | Recite Al-Laṭīf (129x) for gentle guidance. Practice deep listening and empathy. | اذكر «يا لطيف» (129 مرّة) طلبًا للهداية اللطيفة، وتدرّب على الإصغاء العميق والتعاطف. |
| 4718 | AI-draft | Avoid emotional overwhelm. Balance feelings with wisdom (ḥikma). | تجنّب الإرهاق العاطفي، ووازن المشاعر بالحكمة. |
| 4719 | AI-draft | Divine Knowledge, Communication, Mental Clarity | العلم والتواصل وصفاء الذهن |
| 4720 | AI-draft | Al-ʿAlīm enhances reception of divine knowledge and clear communication. Mercury hour opens the mind. | اسم العليم يعين على تلقّي العلم ووضوح التواصل. وساعة عطارد تفتح الذهن. |
| 4721 | AI-draft | Surah Al-Baqarah 2:269 | سورة البقرة 2:269 |
| 4722 | AI-draft | Mercury hours are blessed for seeking divine wisdom (ḥikma) through study, communication, and learning. | ساعات عطارد مباركة لطلب الحكمة بالدراسة والتواصل والتعلّم. |
| 4723 | AI-draft | What knowledge is calling to you? How will you use it for good? | أي علم يدعوك؟ وكيف تستعمله في الخير؟ |
| 4724 | AI-draft | Mercury governs the pen and tongue - the instruments of knowledge transmission. Use them with truth (ḥaqq). | يحكم عطارد القلم واللسان — أداتي نقل العلم. فاستعملهما بالحقّ. |
| 4725 | AI-draft | Recite Al-ʿAlīm (150x) before study. Engage in meaningful dialogue and written reflection. | اذكر «يا عليم» (150 مرّة) قبل الدراسة، وانخرط في حوار نافع وتأمّل مكتوب. |
| 4726 | AI-draft | Avoid gossip (ghība) and empty speech. Knowledge without action is burden. | تجنّب الغيبة واللغو. فالعلم بلا عمل حِمل. |
| 4727 | AI-draft | Divine Love, Beauty, Harmony, Abundance | المحبّة والجمال والانسجام والوفرة |
| 4728 | AI-draft | Al-Wadūd cultivates divine love and appreciation of beauty. Venus hour opens the heart to harmony. | اسم الودود ينمّي المحبّة وتذوّق الجمال. وساعة الزهرة تفتح القلب للانسجام. |
| 4729 | AI-draft | Surah Al-Buruj 85:14 | سورة البروج 85:14 |
| 4730 | AI-draft | Venus reflects divine love (maḥabba) that forgives, nurtures, and creates beauty in all relationships. | تعكس الزهرة معنى المحبّة التي تغفر وترعى وتصنع الجمال في كل العلاقات. |
| 4731 | AI-draft | Who needs your love and kindness today? How can you create beauty? | من يحتاج إلى محبّتك ولطفك اليوم؟ وكيف تصنع الجمال؟ |
| 4732 | AI-draft | Venus teaches that true beauty (jamāl) is inseparable from goodness (iḥsān). Love without righteousness is illusion. | تعلّم الزهرة أن الجمال الحقّ لا ينفكّ عن الإحسان. والمحبّة بلا صلاح وهم. |
| 4733 | AI-draft | Recite Al-Wadūd (20x) with a heart full of love. Create beauty and harmony in your surroundings. | اذكر «يا ودود» (20 مرّة) بقلب ممتلئ محبّة، واصنع الجمال والانسجام في محيطك. |
| 4734 | AI-draft | Avoid vanity and superficiality. True love serves the beloved, not the self. | تجنّب الغرور والسطحية. فالمحبّة الحقّة تخدم المحبوب لا النفس. |
| 4735 | AI-draft | Divine Strength, Courage, Decisive Action | القوة والشجاعة والعمل الحاسم |
| 4736 | AI-draft | Al-Qawiyy provides divine strength and courage for righteous action. Mars hour empowers the will. | اسم القوي يمنح القوة والشجاعة للعمل الصالح. وساعة المريخ تقوّي الإرادة. |
| 4737 | AI-draft | The Capable | القادر |
| 4738 | AI-draft | Surah Al-Anfal 8:66 | سورة الأنفال 8:66 |
| 4739 | AI-draft | Mars hours empower righteous struggle (jihād an-nafs) with divine strength when paired with patience (ṣabr). | ساعات المريخ تقوّي جهاد النفس إذا اقترنت بالصبر. |
| 4740 | AI-draft | What challenge requires your courage today? Where must you take a stand? | أي تحدٍّ يتطلّب شجاعتك اليوم؟ وأين يجب أن تثبت؟ |
| 4741 | AI-draft | Mars governs the spiritual warrior (mujāhid) who battles the ego, not others. True strength is self-mastery. | يحكم المريخ المجاهد الذي يجاهد نفسه لا الناس. فالقوة الحقّة ضبط النفس. |
| 4742 | AI-draft | Traditional Islamic spiritual warfare teachings | تعاليم مجاهدة النفس في التراث الإسلامي |
| 4743 | AI-draft | Classical Sufi tradition | التراث الصوفي الكلاسيكي |
| 4744 | AI-draft | Overcoming obstacles, physical activity, assertiveness, protection, righteous action | تجاوز العقبات، النشاط البدني، الحزم، الحماية، العمل الصالح |
| 4745 | AI-draft | Recite Al-Qawiyy (116x) for inner strength. Take decisive action on important matters. | اذكر «يا قوي» (116 مرّة) طلبًا للقوة الباطنة، واعمل بحسم في الأمور المهمّة. |
| 4746 | AI-draft | Avoid aggression and anger (ghaḍab). Channel strength with wisdom and mercy. | تجنّب العدوان والغضب، ووجّه القوة بالحكمة والرحمة. |
| 4747 | AI-draft | Divine Expansion, Generosity, Boundless Wisdom | الاتساع والكرم والحكمة الواسعة |
| 4748 | AI-draft | Al-Wāsiʿ opens doors to divine abundance and expansive blessings. Jupiter hour brings growth. | اسم الواسع يفتح أبواب الوفرة والبركات الواسعة. وساعة المشتري تجلب النموّ. |
| 4749 | AI-draft | Surah Al-Baqarah 2:261 | سورة البقرة 2:261 |
| 4750 | AI-draft | Jupiter hours multiply blessings (barakah) when actions are done with generosity (karam) and pure intention. | ساعات المشتري تضاعف البركة إذا كانت الأعمال بكرم ونيّة خالصة. |
| 4751 | AI-draft | What can you expand with generosity? Where should growth occur? | ما الذي يمكنك توسيعه بالكرم؟ وأين ينبغي أن يكون النموّ؟ |
| 4752 | AI-draft | Jupiter represents divine generosity that knows no bounds. Give freely, for expansion comes through service. | يمثّل المشتري معنى الكرم الذي لا حدّ له. فأعطِ بسخاء، فالسعة تأتي بالخدمة. |
| 4753 | AI-draft | Classical Islamic wisdom on abundance | الحكمة الإسلامية الكلاسيكية في الوفرة |
| 4754 | AI-draft | Traditional teaching | تعليم تقليدي |
| 4755 | AI-draft | Recite Al-Wāsiʿ (136x) seeking expansion. Give generously in charity (ṣadaqah). | اذكر «يا واسع» (136 مرّة) طالبًا السعة، وتصدّق بسخاء. |
| 4756 | AI-draft | Avoid overextension and false optimism. Growth must be grounded in reality. | تجنّب التمدّد المفرط والتفاؤل الزائف. فالنموّ ينبغي أن يتجذّر في الواقع. |
| 4757 | AI-draft | Supreme Wisdom, Patience, Divine Order | الحكمة العليا والصبر والنظام الإلهي |
| 4758 | AI-draft | Al-Ḥakīm teaches divine wisdom through patience and structure. Saturn hour brings deep understanding. | اسم الحكيم يعلّم الحكمة بالصبر والنظام. وساعة زحل تجلب الفهم العميق. |
| 4759 | AI-draft | Surah Al-Asr 103:3 | سورة العصر 103:3 |
| 4760 | AI-draft | What requires your patience and persistence? What wisdom is being revealed? | ما الذي يتطلّب صبرك ومثابرتك؟ وأي حكمة تتكشّف؟ |
| 4761 | AI-draft | Saturn is the teacher of time (zamān) and consequence. It shows that all actions ripen in their season. | زحل معلّم الزمان والعاقبة، يُري أن كل عمل ينضج في أوانه. |
| 4762 | AI-draft | Traditional Islamic understanding of time and wisdom | الفهم الإسلامي التقليدي للزمن والحكمة |
| 4763 | AI-draft | Classical tradition | التراث الكلاسيكي |
| 4764 | AI-draft | Recite Al-Ḥakīm (78x) seeking wisdom. Embrace discipline and commitment to worthy goals. | اذكر «يا حكيم» (78 مرّة) طالبًا الحكمة، والتزم بالانضباط في الأهداف الجديرة. |
| 4765 | AI-draft | Avoid rigidity and fear. Structure serves growth, not limitation. | تجنّب التصلّب والخوف. فالنظام يخدم النموّ لا التقييد. |
| 4766 | AI-draft | Exceptional alignment! Your spiritual essence ( | انسجام استثنائي! جوهرك الروحي ( |
| 4767 | AI-draft | ruler) resonates powerfully with | الحاكم) يتناغم بقوة مع طاقة |
| 4768 | AI-draft | energy. This is an optimal time for important spiritual work. | . وهذا وقت مناسب للعمل الروحي المهمّ. |
| 4769 | AI-draft | Engage in deep spiritual practices | انشغل بممارسات روحية عميقة |
| 4770 | AI-draft | Perform dhikr of your resonant Divine Name | اذكر الاسم الحسن الموافق لك |
| 4771 | AI-draft | Initiate significant projects | ابدأ مشاريع مهمّة |
| 4772 | AI-draft | Strong alignment. Your | انسجام قوي. جوهرك |
| 4773 | AI-draft | essence harmonizes well with | ينسجم جيدًا مع طاقة |
| 4774 | AI-draft | energy. Good time for spiritual growth and meaningful actions. | . وقت جيد للنموّ الروحي والأعمال ذات المعنى. |
| 4775 | AI-draft | Pursue spiritual learning | اطلب العلم الروحي |
| 4776 | AI-draft | Practice regular dhikr | داوِم على الذكر |
| 4777 | AI-draft | Seek beneficial knowledge | اطلب العلم النافع |
| 4778 | AI-draft | Moderate alignment. | انسجام معتدل. |
| 4779 | AI-draft | Maintain regular spiritual practices | حافظ على ممارساتك الروحية المنتظمة |
| 4780 | AI-draft | Reflect and contemplate | تأمّل وتفكّر |
| 4781 | AI-draft | Challenging alignment. | انسجام صعب. |
| 4782 | AI-draft | energy opposes your | طاقة تعاكس |
| 4783 | AI-draft | essence. Time for patience, reflection, and gentle practices. | جوهرك. وقت للصبر والتأمّل والممارسات اللطيفة. |
| 4784 | AI-draft | Practice patience and sabr | تحلَّ بالصبر |
| 4785 | AI-draft | Gentle dhikr and remembrance | ذكر لطيف |
| 4786 | AI-draft | Avoid major decisions | تجنّب القرارات الكبرى |
| 4787 | AI-draft | Rest and spiritual contemplation | الراحة والتأمّل الروحي |
| 4788 | AI-draft | Moderate Days | أيام معتدلة |
| 4789 | AI-draft | MILESTONE | إنجاز |
| 4790 | AI-draft | STREAK | سلسلة |
| 4791 | AI-draft | First Step | الخطوة الأولى |
| 4792 | AI-draft | Logged your first dhikr | سجّلت أول ذكر لك |
| 4793 | AI-draft | 100 Dhikr | 100 ذكر |
| 4794 | AI-draft | Completed 100 total dhikr | أتممت 100 ذكر إجمالًا |
| 4795 | AI-draft | 1,000 Dhikr | 1,000 ذكر |
| 4796 | AI-draft | Completed 1,000 total dhikr | أتممت 1,000 ذكر إجمالًا |
| 4797 | AI-draft | 10,000 Dhikr | 10,000 ذكر |
| 4798 | AI-draft | Completed 10,000 total dhikr | أتممت 10,000 ذكر إجمالًا |
| 4799 | AI-draft | 100,000 Dhikr | 100,000 ذكر |
| 4800 | AI-draft | Completed 100,000 total dhikr - Legendary! | أتممت 100,000 ذكر إجمالًا - ما شاء الله! |
| 4801 | AI-draft | 3-Day Streak | سلسلة 3 أيام |
| 4802 | AI-draft | Maintained a 3-day streak | حافظت على سلسلة 3 أيام |
| 4803 | AI-draft | Maintained a 7-day streak | حافظت على سلسلة 7 أيام |
| 4804 | AI-draft | Maintained a 30-day streak | حافظت على سلسلة 30 يومًا |
| 4805 | AI-draft | Century Streak | سلسلة المئة |
| 4806 | AI-draft | Maintained a 100-day streak - Unstoppable! | حافظت على سلسلة 100 يوم - ما شاء الله! |
| 4807 | AI-draft | Goal Achiever | محقّق الهدف |
| 4808 | AI-draft | Completed your first challenge goal | أتممت أول هدف تحدٍّ لك |
| 4809 | AI-draft | Daily Champion | بطل اليوم |
| 4810 | AI-draft | Met your daily target | بلغت هدفك اليومي |
| 4811 | AI-draft | Active in 3+ challenges simultaneously | نشط في 3 تحدّيات أو أكثر في آن واحد |
| 4812 | AI-draft | Ramadan Complete | إتمام رمضان |
| 4813 | AI-draft | Completed a challenge during Ramadan | أتممت تحدّيًا في رمضان |
| 4814 | AI-draft | All unlocked! | فُتح الكل! |
| 4815 | AI-draft | Qurʾān, Sūrat Fāṭir 35:17 and Sūrat Ibrāhīm 14:20 | القرآن، سورة فاطر 35:17 وسورة إبراهيم 14:20 |
| 4816 | AI-draft | I seek forgiveness from Allah | أستغفر الله |
| 4817 | AI-draft | Allāhumma ṣalli wa sallim wa bārik ʿalā Sayyidinā Muḥammad | اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ |
| 4818 | AI-draft | O Allah, send blessings, peace, and grace upon our master Muḥammad. | اللهم صلِّ وسلّم وبارك على سيّدنا محمد. |
| 4819 | AI-draft | Fajr / Pre-dawn | الفجر / ما قبل الفجر |
| 4820 | AI-draft | Ẓuhr / Midday | الظهر / منتصف النهار |
| 4821 | AI-draft | Late Night / Tahajjud | آخر الليل / التهجّد |
| 4822 | AI-draft | Istighfār is most powerful during this window | الاستغفار أعظم أثرًا في هذا الوقت |
| 4823 | AI-draft | Ṣalawāt upon the Prophet ﷺ brings abundant blessings now | الصلاة على النبي ﷺ تجلب بركات وفيرة الآن |
| 4824 | AI-draft | Divine Name invocation is especially blessed now | الدعاء بالأسماء الحسنى مبارك خاصّة الآن |
| 4825 | AI-draft | 201 Holy Names practice invokes powerful rizq blessings | ممارسة الأسماء المئتين والواحد ترجى بها بركة الرزق |
| 4826 | AI-draft | Debt Relief wird after ʿIshāʾ brings miraculous financial relief | ورد قضاء الدين بعد العشاء يُرجى به تفريج الضائقة المالية |
| 4827 | AI-draft | Continue your personal wird during this spiritual window | واصل وردك الخاص في هذا الوقت الروحي |
| 4828 | AI-draft | Start a dhikr challenge for this blessed time | ابدأ تحدّي ذكر لهذا الوقت المبارك |
| 4829 | AI-draft | 🌟 My Spiritual Challenge on Asrār | 🌟 تحدّيي الروحي على أسرار |
| 4830 | AI-draft | 🔥 Streak: | 🔥 السلسلة: |
| 4831 | AI-draft | 🎯 Active challenges: | 🎯 التحدّيات النشطة: |
| 4832 | AI-draft | Join me in this spiritual journey! | انضمّ إليّ في هذه الرحلة الروحية! |
| 4833 | AI-draft | My Spiritual Challenge | تحدّيي الروحي |
| 4834 | AI-draft | 💰✨ Miraculous Debt Relief - Powerful Wird | 💰✨ ورد قضاء الدين |
| 4835 | AI-draft | 🌙 What seems IMPOSSIBLE for us is EFFORTLESS for Allah! | 🌙 ما يبدو مستحيلًا لنا هيّن على الله! |
| 4836 | AI-draft | 📿 Recite with me: | 📿 اقرأ معي: |
| 4837 | AI-draft | 🎯 Goal: | 🎯 الهدف: |
| 4838 | AI-draft | 📊 My progress: | 📊 تقدّمي: |
| 4839 | AI-draft | Towards financial freedom through Allah's grace... 🤲 | نحو الفرج المالي بفضل الله... 🤲 |
| 4840 | AI-draft | 💰 Debt Relief Wird | 💰 ورد قضاء الدين |
| 4841 | AI-draft | Join me in this spiritual challenge on Asrār! | انضمّ إليّ في هذا التحدّي الروحي على أسرار! |
| 4842 | AI-draft | 🎉 I reached | 🎉 بلغت |
| 4843 | AI-draft | dhikr on Asrār! | ذكرًا على أسرار! |
| 4844 | AI-draft | A major milestone in my spiritual journey. 🌟 | محطّة كبيرة في رحلتي الروحية. 🌟 |
| 4845 | AI-draft | Dhikr Reached! | تمّ بلوغ الذكر! |
| 4846 | AI-draft | O Allah, send blessings upon Muhammad | اللهم صلِّ على محمد |
| 4847 | AI-draft | O Allah, send blessings upon our Master Muhammad | اللهم صلِّ على سيّدنا محمد |
| 4848 | AI-draft | O Allah, send blessings upon the one described with generosity and munificence | اللهم صلِّ على الموصوف بالكرم والجود |
| 4849 | AI-draft | The most authentic ṣalawāt, taught by the Prophet ﷺ himself. Recited in every Ṣalāh. | أصحّ صيغ الصلاة على النبي، علّمها النبي ﷺ بنفسه، وتُقرأ في كل صلاة. |
| 4850 | AI-draft | Universal · All Schools | عامّة · كل المذاهب |
| 4851 | AI-draft | The shortest complete ṣalawāt — ideal for high-count daily dhikr sessions. | أقصر صيغة تامّة للصلاة على النبي — مثالية لجلسات الذكر اليومية الكثيرة العدد. |
| 4852 | AI-draft | Ṣalāt al-Fātiḥ · The Opener | صلاة الفاتح |
| 4853 | AI-draft | Central wird of the Tijāniyya order. Especially beloved in West African Sufi communities. | الورد المحوري في الطريقة التجانية، محبوبة خاصّة في المجتمعات الصوفية في غرب أفريقيا. |
| 4854 | AI-draft | Ṣalāt al-Nāriyya · Prayer of Relief | الصلاة النارية · صلاة التفريج |
| 4855 | AI-draft | Imam al-Qurṭubī · Also known as Ṣalāt al-Tafrijiyya | الإمام القرطبي · وتُعرف أيضًا بالصلاة التفريجية |
| 4856 | AI-draft | Known for alleviating difficulties. Traditionally recited 11 times for relief, or 4,444 times for major opening. | معروفة بتفريج الكروب، وتُقرأ تقليديًا 11 مرّة للفرج، أو 4444 مرّة للفتح الكبير. |
| 4857 | AI-draft | Shaykh ʿAbd al-Salām ibn Mashīsh · Shādhilī tradition | الشيخ عبد السلام بن مشيش · الطريقة الشاذلية |
| 4858 | AI-draft | The sublime prayer of Shaykh Ibn Mashīsh, spiritual guide of Imam al-Shādhilī. Widely recited in the Maghrib and West Africa. | الصلاة الجليلة للشيخ ابن مشيش، شيخ الإمام الشاذلي، وتُقرأ كثيرًا في المغرب وغرب أفريقيا. |
| 4859 | AI-draft | Jawharatu l-Kamāl · Jewel of Perfection | جوهرة الكمال |
| 4860 | AI-draft | The most exalted ṣalawāt of the Tijāniyya — recited 12 times daily in the wāẓifa. Requires respectful intention and attentiveness. | أجلّ صيغ الصلاة في الطريقة التجانية — تُقرأ 12 مرّة يوميًا في الوظيفة، وتتطلّب نيّة محترمة وحضورًا. |
| 4861 | AI-draft | Ṣalāt al-Mawṣūf · Described with Generosity | صلاة الموصوف بالكرم |
| 4862 | AI-draft | Prophetic Blessing · Traditional | صلاة نبوية · تقليدية |
| 4863 | AI-draft | A concise yet powerful ṣalawāt praising the Prophet ﷺ for his perfect generosity and noble character. Ideal for high-count daily practice. | صيغة موجزة قوية تثني على النبي ﷺ بكماله في الكرم ونُبل خُلقه. مثالية للممارسة اليومية الكثيرة العدد. |
| 4864 | AI-draft | Ṣalāt Nūr al-Qalb · Light of the Heart | صلاة نور القلب |
| 4865 | AI-draft | Traditional Blessing | صلاة تقليدية |
| 4866 | AI-draft | Ṣallā Allāhu ʿalā Muḥammadin, aṣbaḥa lil-qalbi nūruhu, wa raḥmatan lil-ʿālamīna ẓuhūruhu. | صَلَّى اللهُ عَلَى مُحَمَّدٍ، أَصْبَحَ لِلْقَلْبِ نُورُهُ، وَرَحْمَةً لِلْعَالَمِينَ ظُهُورُهُ |
| 4867 | AI-draft | A beautiful ṣalawāt connecting the Prophet ﷺ as light for the heart and mercy for all creation. Excellent for morning recitation. | صيغة جميلة تصل بين النبي ﷺ نورًا للقلب ورحمة للخلق. ممتازة لقراءة الصباح. |
| 4868 | AI-draft | O Most Merciful | يا رحيم |
| 4869 | AI-draft | O Provider | يا رزّاق |
| 4870 | AI-draft | O Ever-Forgiving | يا غفّار |
| 4871 | AI-draft | O Most Subtle | يا لطيف |
| 4872 | AI-draft | O Opener | يا فتّاح |
| 4873 | AI-draft | Cherno Moussa Yero Sy | شيرنو موسى يرو سي |
| 4874 | AI-draft | Offer a Hadiyya | قدّم هدية |
| 4875 | AI-draft | universal love | المحبّة الشاملة |
| 4876 | AI-draft | Error calculating compatibility. Please try again. | خطأ في حساب التوافق. يُرجى المحاولة مجدّدًا. |
| 4877 | AI-draft | Call upon Allah by the Name whose meaning matches your need | ادعُ الله بالاسم الذي يوافق معناه حاجتك |
| 4878 | AI-draft | Explore general astrological compatibility from birth dates | استكشف التوافق الفلكي العام من تواريخ الميلاد |
| 4879 | AI-draft | Calculate Another Pair | احسب ثنائيًا آخر |
| 4880 | AI-draft | core temperament | الطبع الأساسي |
| 4881 | AI-draft | Both share | كلاهما يشتركان في |
| 4882 | AI-draft | — an easy, instinctive rapport. | — ألفة سهلة فطرية. |
| 4883 | AI-draft | s can create friction without conscious effort. |  قد يصنعان احتكاكًا دون جهد واعٍ. |
| 4884 | AI-draft | s are independent — neither reinforcing nor clashing. |  مستقلّان — لا يقوّي أحدهما الآخر ولا يتصادمان. |
| 4885 | AI-draft | Strong mutual attraction — what each is drawn to matches how the other pursues connection. | انجذاب متبادل قوي — ما ينجذب إليه كلٌّ منكما يوافق طريقة الآخر في طلب القرب. |
| 4886 | AI-draft | A workable attraction dynamic — different styles that can still click. | انجذاب قابل للعمل — أسلوبان مختلفان يمكن أن يتوافقا. |
| 4887 | AI-draft | Attraction styles pull in different directions — may take deliberate effort to align. | أسلوبا الانجذاب يشدّان في اتجاهين مختلفين — قد يتطلّب التوافق جهدًا مقصودًا. |
| 4888 | AI-draft | is classically invoked for | يُدعى به كلاسيكيًا لـ |
| 4889 | AI-draft | — a direct match for this intention. | — موافقة مباشرة لهذه النيّة. |
| 4890 | AI-draft | is not classically tied to | لا يرتبط كلاسيكيًا بـ |
| 4891 | AI-draft | directly, but its meaning closely relates to it. | مباشرة، لكن معناه قريب منه. |
| 4892 | AI-draft | 's classical function doesn't align closely with | وظيفته الكلاسيكية لا توافق كثيرًا |
| 4893 | AI-draft | Ya Allah | يا الله |
| 4894 | AI-draft | Ya Rahman | يا رحمن |
| 4895 | AI-draft | Ya Raheem | يا رحيم |
| 4896 | AI-draft | Ya Quddus | يا قدّوس |
| 4897 | AI-draft | Ya Salam | يا سلام |
| 4898 | AI-draft | Ya Hakim | يا حكيم |
| 4899 | AI-draft | Ya 'Adl | يا عدل |
| 4900 | AI-draft | Ya Bari' | يا بارئ |
| 4901 | AI-draft | Ya Musawwir | يا مصوّر |
| 4902 | AI-draft | Ya Rafi' | يا رافع |
| 4903 | AI-draft | Ya Halim | يا حليم |
| 4904 | AI-draft | Ya Basir | يا بصير |
| 4905 | AI-draft | Ya Ghaffar | يا غفّار |
| 4906 | AI-draft | Ya Wahhab | يا وهّاب |
| 4907 | AI-draft | Ya Razzaq | يا رزّاق |
| 4908 | AI-draft | Ya Qabid | يا قابض |
| 4909 | AI-draft | Ya Latif | يا لطيف |
| 4910 | AI-draft | Ya Jami' | يا جامع |
| 4911 | AI-draft | Ya Khafid | يا خافض |
| 4912 | AI-draft | Ya Muzil | يا مذلّ |
| 4913 | AI-draft | Ya Jabbar | يا جبّار |
| 4914 | AI-draft | Ya Qahhar | يا قهّار |
| 4915 | AI-draft | For gentleness, subtle ease, and calming the heart. | للّطف واليسر الخفيّ وطمأنينة القلب. |
| 4916 | AI-draft | For mercy, ease in transitions, and emotional balance. | للرحمة واليسر في التحوّلات والتوازن العاطفي. |
| 4917 | AI-draft | For compassion and softness in family and home matters. | للرأفة واللين في شؤون الأسرة والبيت. |
| 4918 | AI-draft | Ya Wadud | يا ودود |
| 4919 | AI-draft | For affection, harmony, and softening of hearts. | للمودّة والانسجام وتليين القلوب. |
| 4920 | AI-draft | Ya 'Alim | يا عليم |
| 4921 | AI-draft | For clarity of mind and beneficial knowledge. | لصفاء الذهن والعلم النافع. |
| 4922 | AI-draft | Ya Khabir | يا خبير |
| 4923 | AI-draft | Thursday's planet in classical ʿIlm al-Nujūm — for remembrance, generosity, and reliance on Allah's provision. Not prediction. | كوكب الخميس في علم النجوم الكلاسيكي — للذكر والكرم والتوكّل على رزق الله. لا للتنبّؤ. |
| 4924 | AI-draft | For provision, barakah, and trust in Allah as Provider. | للرزق والبركة والتوكّل على الله الرزّاق. |
| 4925 | AI-draft | Ya Wasi' | يا واسع |
| 4926 | AI-draft | For spaciousness of heart and ease in what feels tight. | لسعة الصدر واليسر فيما ضاق. |
| 4927 | AI-draft | Ya Karim | يا كريم |
| 4928 | AI-draft | For generosity and noble character. | للكرم ونُبل الخُلق. |
| 4929 | AI-draft | For mindful reliance on Allah's care and guardianship. | للتوكّل الواعي على رعاية الله وحفظه. |
| 4930 | AI-draft | For forbearance and a softened heart. | للحِلم ولين القلب. |
| 4931 | AI-draft | Ya Muhsi | يا محصي |
| 4932 | AI-draft | Ya Sami' | يا سميع |
| 4933 | AI-draft | For turning to the All-Hearing in duʿāʾ. | للتوجّه إلى السميع بالدعاء. |
| 4934 | AI-draft | For humility before the Most Great and dignity without arrogance. | للتواضع للكبير والعزّة بلا كِبر. |
| 4935 | AI-draft | Ya 'Aziz | يا عزيز |
| 4936 | AI-draft | For strength with honour in righteous effort. | للقوة مع العزّة في السعي الصالح. |
| 4937 | AI-draft | Ya Baqi | يا باقي |
| 4938 | AI-draft | For steadfastness and what endures of good deeds. | للثبات وما يبقى من الأعمال الصالحة. |
| 4939 | AI-draft | Ya Sabur | يا صبور |
| 4940 | AI-draft | For wise restraint and sound judgment. | للإمساك الحكيم وسداد الحكم. |
| 4941 | AI-draft | For forbearance when progress feels slow. | للحِلم حين يبدو التقدّم بطيئًا. |
| 4942 | AI-draft | Ya Matin | يا متين |
| 4943 | AI-draft | For firmness, discipline, and steady resolve. | للثبات والانضباط ورسوخ العزم. |
| 4944 | AI-draft | When a benefic planet (Jupiter, Venus) is in dignity and transiting your area of concern, consider it a period of openness (fatḥ). Make du'ā', begin projects, and act boldly. | حين يكون كوكب سعد (المشتري أو الزهرة) في كرامة ويعبر مجال اهتمامك، فاعدده وقت انفتاح (فتح): ادعُ، وابدأ المشاريع، واعمل بجرأة. |
| 4945 | AI-draft | These are periods to exercise extra patience and caution in matters of health, finances, and conflicts. Double your Isti'ādhah (seeking refuge in Allah) and du'ā'. | هذه أوقات لمزيد من الصبر والحذر في الصحّة والمال والخلافات. أكثِر من الاستعاذة بالله والدعاء. |
| 4946 | AI-draft | Thursday is the most blessed day for spiritual elevation, wealth-seeking, and expansion. Make du'ā' for rizq (sustenance). Begin long-term projects. Seek knowledge, visit scholars, and perform generous acts of sadaqah. Thursday night (eve of Friday) is especially blessed — use it for extra worship. | الخميس من أبرك الأيام للارتقاء الروحي وطلب الرزق والسعة. ادعُ بالرزق، وابدأ المشاريع الطويلة، واطلب العلم، وزُر العلماء، وتصدّق بسخاء. وليلة الجمعة مباركة خاصّة — فاغتنمها بمزيد من العبادة. |
| 4947 | AI-draft | This is THE most important layer for marriage and long-term partnership. Here's why: • Your mother's emotional patterns shaped how you give and receive love • This layer determines if you feel "safe" together emotionally • High scores here mean you intuitively understand each other's needs • Low scores mean you'll need conscious work to meet each other's emotional needs Many couples with great surface chemistry struggle because this layer isn't harmonious. Knowing this in advance helps you prepare. | هذه أهمّ طبقة للزواج والشراكة الطويلة. ولماذا: • أنماط أمك العاطفية شكّلت طريقة عطائك للمحبّة وتلقّيها • هذه الطبقة تحدّد هل تشعران «بالأمان» العاطفي معًا • الدرجات العالية تعني أنكما تفهمان حاجات بعضكما بالفطرة • الدرجات المنخفضة تعني الحاجة إلى تعلّم عاطفي واعٍ |
| 4948 | AI-draft | Unlocks your Ascendant/Descendant — otherwise skipped, since it needs a precise time to mean anything. | يفتح الطالع/الغارب — وإلّا يُتخطّى، لأنه يحتاج إلى وقت دقيق ليكون ذا معنى. |
| 4949 | AI-draft | Descendant | الغارب |
| 4950 | AI-draft | Compatibility Analysis | تحليل التوافق |
| 4951 | AI-draft | We analyze your relationship using ancient Islamic numerology and name wisdom | نحلّل علاقتكما بعلم الأعداد الإسلامي القديم وحكمة الأسماء |
| 4952 | AI-draft | Combined compatibility from all three analysis methods - higher is better! | التوافق المجمّع من طرق التحليل الثلاث - الأعلى أفضل! |
| 4953 | AI-draft | Overall Quality | الجودة العامّة |
| 4954 | AI-draft | Relationship Potential | إمكانات العلاقة |
| 4955 | AI-draft | How naturally compatible you are based on your names and energies | مدى توافقكما الطبيعي بحسب أسمائكما وطاقاتكما |
| 4956 | AI-draft | How your spiritual energies align and complement each other at a deep level | كيف تنسجم طاقاتكما الروحية وتتكامل في العمق |
| 4957 | AI-draft | How We Analyzed You | كيف حلّلنا |
| 4958 | AI-draft | Tips for Your Relationship | نصائح لعلاقتكما |
| 4959 | AI-draft | What the different score ranges mean | معنى نطاقات الدرجات المختلفة |
| 4960 | AI-draft | Strong natural harmony - you complement each other beautifully | انسجام طبيعي قوي - تتكاملان تكاملًا جميلًا |
| 4961 | AI-draft | Great potential - minor adjustments will create harmony | إمكانات كبيرة - تعديلات صغيرة تصنع الانسجام |
| 4962 | AI-draft | Requires effort - understanding and compromise are key | يتطلّب جهدًا - التفاهم والتنازل هما المفتاح |
| 4963 | AI-draft | Needs work - focus on communication and mutual respect | يحتاج إلى عمل - ركّزا على التواصل والاحترام المتبادل |
| 4964 | AI-draft | See how we calculated this | اعرض طريقة الحساب |
| 4965 | AI-draft | Hide calculation details | أخفِ تفاصيل الحساب |
| 4966 | AI-draft | Analyze Another Pair | حلّل ثنائيًا آخر |
| 4967 | AI-draft | Passionate & Dynamic | شغوف حيوي |
| 4968 | AI-draft | Emotional & Intuitive | عاطفي حدسي |
| 4969 | AI-draft | Practical & Grounded | عملي متجذّر |
| 4970 | AI-draft | Intellectuel & Social | فكري اجتماعي |
| 4971 | AI-draft | Provision & Sustenance | الرزق والقوت |
| 4972 | AI-draft | Rizq, livelihood, and material need | الرزق والمعيشة والحاجة المادية |
| 4973 | AI-draft | Recovery from illness, physical or spiritual | الشفاء من المرض، بدنيًا أو روحيًا |
| 4974 | AI-draft | Relief from Distress | تفريج الكرب |
| 4975 | AI-draft | Anxiety, grief, or a heavy heart | القلق أو الحزن أو ثقل القلب |
| 4976 | AI-draft | Clarity in a decision — alongside istikhāra, not instead of it | الوضوح في قرار — مع الاستخارة لا بدلًا منها |
| 4977 | AI-draft | Marriage & Love | الزواج والمحبّة |
| 4978 | AI-draft | Pardon | العفو |
| 4979 | AI-draft | Repentance (tawba) and seeking pardon | التوبة وطلب العفو |
| 4980 | AI-draft | Strength & Patience | القوة والصبر |
| 4981 | AI-draft | Endurance through hardship | الصبر على الشدّة |
| 4982 | AI-draft | Ease & Removing Obstacles | التيسير وإزالة العوائق |
| 4983 | AI-draft | Opening a way through a difficult affair | فتح طريق في أمر صعب |
| 4984 | AI-draft | Knowledge & Understanding | العلم والفهم |
| 4985 | AI-draft | Increase in beneficial knowledge | الزيادة في العلم النافع |
| 4986 | AI-draft | Quran 20:114 | القرآن 20:114 |
| 4987 | AI-draft | This resonance flows naturally — practice with this Name tends to bring swift, tangible ease. A wonderful one to return to often. | هذا الرنين ينساب طبيعيًا — والممارسة بهذا الاسم تجلب غالبًا يسرًا سريعًا ملموسًا. اسم جميل للرجوع إليه كثيرًا. |
| 4988 | AI-draft | This resonance is workable but benefits from consistency — steady, regular practice over time is what unlocks its full effect. | هذا الرنين قابل للعمل لكنه ينتفع بالمداومة — فالممارسة الثابتة المنتظمة مع الوقت هي ما يفتح أثره كاملًا. |
| 4989 | AI-draft | This resonance calls for extra patience and discipline — approach this Name's practice with sincere intention, and consider pairing it with istighfār. | هذا الرنين يتطلّب مزيدًا من الصبر والانضباط — فأقبل على الذكر بهذا الاسم بنيّة صادقة، واقرنه بالاستغفار. |
| 4990 | AI-draft | The opening verse, foundation of all recitation. 786 is the most famous sacred number in Islamic tradition. | الآية الأولى، أساس كل تلاوة. و786 أشهر الأعداد المميّزة في التراث الإسلامي. |
| 4991 | AI-draft | Ya-Sin (Arabic letters) | يس (حروف عربية) |
| 4992 | AI-draft | mysterious letters | الحروف المقطّعة |
| 4993 | AI-draft | Ayat al-Kursi (Throne Verse) - the greatest verse for protection and divine connection. | آية الكرسي - أعظم آية للحفظ والصلة بالله. |
| 4994 | AI-draft | ayat al-kursi | آية الكرسي |
| 4995 | AI-draft | Surah Al-Ikhlas (Sincerity) - equals one-third of the Quran in reward. Affirms divine unity. | سورة الإخلاص - تعدل ثلث القرآن في الأجر، وتقرّر التوحيد. |
| 4996 | AI-draft | The healing verse - affirms the Quran's power to heal spiritual and physical ailments. | آية الشفاء - تقرّر أن في القرآن شفاءً لأمراض الروح والبدن. |
| 4997 | AI-draft | Repeated 31 times in Surah Ar-Rahman. A reminder of divine blessings and gratitude. | تتكرّر 31 مرّة في سورة الرحمن، تذكيرًا بالنِّعم والشكر. |
| 4998 | AI-draft | A verse of comfort and reassurance about divine justice and mercy in trials. | آية طمأنينة وتسلية عن عدل الله ورحمته في الابتلاء. |
| 4999 | AI-draft | A promise of relief after difficulty. The verse appears twice in Surah Ash-Sharh for emphasis. | وعد بالفرج بعد الشدّة، وتتكرّر الآية مرّتين في سورة الشرح للتأكيد. |
| 5000 | AI-draft | Beginning of the verse of divine power and sovereignty. Used for seeking provision and authority. | مطلع آية القدرة والملك، يُقرأ لطلب الرزق والتمكين. |
| 5001 | AI-draft | The prayer of the youths of the cave (Ashab al-Kahf) seeking divine mercy and guidance. | دعاء فتية الكهف طلبًا للرحمة والرشد. |
| 5002 | AI-draft | Umar | عمر |
| 5003 | AI-draft | Husayn | حسين |
| 5004 | AI-draft | Zaynab | زينب |
| 5005 | AI-draft | Sharaf | الشرف |
| 5006 | AI-draft | Bayt | البيت |
| 5007 | AI-draft | Muthallatha | مثلّثة |
| 5008 | AI-draft | Wajh | الوجه |
| 5009 | AI-draft | Musharraf | مشرَّف |
| 5010 | AI-draft | Camphor + White Sandalwood | الكافور + الصندل الأبيض |
| 5011 | AI-draft | For calm, receptivity, and inner quiet | للسكينة والتلقّي والهدوء الباطن |
| 5012 | AI-draft | Yellow Sandalwood + Frankincense | الصندل الأصفر + اللبان |
| 5013 | AI-draft | For courage and steady resolve | للشجاعة وثبات العزم |
| 5014 | AI-draft | Mastic + Frankincense | المصطكى + اللبان |
| 5015 | AI-draft | For abundance, expansion, and barakah | للوفرة والسعة والبركة |
| 5016 | AI-draft | Frankincense + Liquid Storax | اللبان + الميعة السائلة |
| 5017 | AI-draft | For grounding, patience, and steadiness | للتجذّر والصبر والثبات |
| 5018 | AI-draft | For clarity and spiritual illumination | للوضوح والإنارة الروحية |
| 5019 | AI-draft | For inner strength and resilience | للقوة الباطنة والجلَد |
| 5020 | AI-draft | O All-Knowing | يا عليم |
| 5021 | AI-draft | For clarity and beneficial knowledge | للوضوح والعلم النافع |
| 5022 | AI-draft | For provision and barakah | للرزق والبركة |
| 5023 | AI-draft | For harmony and softening hearts | للانسجام وتليين القلوب |
| 5024 | AI-draft | Universal spiritual cleansing | تطهير روحي عام |
| 5025 | AI-draft | Always beneficial, opens spiritual doors | نافع دائمًا، يفتح الأبواب الروحية |
| 5026 | AI-draft | Excellent time for | وقت ممتاز لـ |
| 5027 | AI-draft | Steady practice brings consistent benefit | الممارسة الثابتة تجلب نفعًا دائمًا |
| 5028 | AI-draft | Focus on protection and istighfār | ركّز على التحصّن والاستغفار |
| 5029 | AI-draft | Ishraq | الإشراق |
| 5030 | AI-draft | Duha | الضحى |
| 5031 | AI-draft | Time of divine closeness. The Prophet ﷺ said: "The two rak'ahs of Fajr are better than this world and all it contains." Seek clarity and guidance. | وقت قرب من الله. قال النبي ﷺ: «ركعتا الفجر خير من الدنيا وما فيها». فاطلب الوضوح والهداية. |
| 5032 | AI-draft | Midday renewal. Break from worldly affairs to reconnect with the Divine. Time for gratitude and seeking provision. | تجديد منتصف النهار. انقطع عن شؤون الدنيا لتعود إلى الله. وقت للشكر وطلب الرزق. |
| 5033 | AI-draft | Time of reflection. The Prophet ﷺ emphasized this prayer greatly. Review your day and prepare for evening with mindfulness. | وقت المراجعة. عظّم النبي ﷺ شأن هذه الصلاة. راجع يومك واستعدّ للمساء بحضور. |
| 5034 | AI-draft | Transition from light to darkness. Time to seek forgiveness and make du'a. The Prophet ﷺ said du'a is accepted at this time. | الانتقال من النور إلى الظلمة. وقت للاستغفار والدعاء. |
| 5035 | AI-draft | Night's serenity. Time for deep reflection and contemplation. The last prayer before sleep - end your day in remembrance. | سكينة الليل. وقت للتأمّل والتفكّر العميق. آخر صلاة قبل النوم — فاختم يومك بالذكر. |
| 5036 | AI-draft | Use this time for good deeds, seeking knowledge, or helping others. Every moment is an opportunity for spiritual growth. | استعمل هذا الوقت في الأعمال الصالحة أو طلب العلم أو إعانة الآخرين. فكل لحظة فرصة للنموّ الروحي. |
| 5037 | AI-draft | Excellent alignment! | انسجام ممتاز! |
| 5038 | AI-draft | prayer resonates with | تتناغم صلاة |
| 5039 | AI-draft | energy. This is an optimal time for spiritual work. | . وهذا وقت مناسب للعمل الروحي. |
| 5040 | AI-draft | Prayer time adds spiritual dimension to the | وقت الصلاة يضيف بعدًا روحيًا إلى ساعة |
| 5041 | AI-draft | hour. Combine worldly action with remembrance. | . اجمع بين العمل الدنيوي والذكر. |
| 5042 | AI-draft | The blessed time of Tahajjud! Allah descends to the lowest heaven asking "Who is calling upon Me?" Optimal for deep du'a and spiritual connection. | وقت التهجّد المبارك! ينزل ربّنا إلى السماء الدنيا فيقول: «من يدعوني فأستجيب له؟». وقت مناسب للدعاء العميق والصلة الروحية. |
| 5043 | AI-draft | Ishraq time! The Prophet ﷺ said this prayer has immense reward. Time of new beginnings and fresh starts. | وقت الإشراق! وقد ورد في هذه الصلاة أجر عظيم. وقت للبدايات الجديدة. |
| 5044 | AI-draft | Duha prayer time! A Sunnah practice that brings barakah. The Prophet ﷺ called it "the prayer of the penitent." | وقت صلاة الضحى! سنّة تجلب البركة، وسمّاها النبي ﷺ «صلاة الأوّابين». |
| 5045 | AI-draft | Geolocation not supported | تحديد الموقع غير مدعوم |
| 5046 | AI-draft | Failed to fetch location | تعذّر جلب الموقع |
| 5047 | AI-draft | Allah (lexicon) | الله (معجم) |
| 5048 | AI-draft | al-Rahman (lexicon) | الرحمن (معجم) |
| 5049 | AI-draft | Rahman (lexicon) | رحمن (معجم) |
| 5050 | AI-draft | al-Rahim (lexicon) | الرحيم (معجم) |
| 5051 | AI-draft | Rahim | رحيم |
| 5052 | AI-draft | Rahim (lexicon) | رحيم (معجم) |
| 5053 | AI-draft | al-Latif (lexicon) | اللطيف (معجم) |
| 5054 | AI-draft | Latif | لطيف |
| 5055 | AI-draft | Latif (lexicon) | لطيف (معجم) |
| 5056 | AI-draft | Hayy | حيّ |
| 5057 | AI-draft | Hayy (lexicon) | حيّ (معجم) |
| 5058 | AI-draft | al-Hayy (lexicon) | الحيّ (معجم) |
| 5059 | AI-draft | Qayyum | قيّوم |
| 5060 | AI-draft | Qayyum (lexicon) | قيّوم (معجم) |
| 5061 | AI-draft | al-Qayyum (lexicon) | القيّوم (معجم) |
| 5062 | AI-draft | Baka | بقاء |
| 5063 | AI-draft | Fana | فناء |
| 5064 | AI-draft | Musa | موسى |
| 5065 | AI-draft | Mohammed | محمد |
| 5066 | AI-draft | Opposing Energy | طاقة معاكسة |
| 5067 | AI-draft | The God | الله |
| 5068 | AI-draft | The Eternal | الباقي |
| 5069 | AI-draft | The Pure One | القدّوس |
| 5070 | AI-draft | The Certainty | الحقّ |
| 5071 | AI-draft | The Believer | المؤمن |
| 5072 | AI-draft | Fard | فرض |
| 5073 | AI-draft | The Grateful | الشكور |
| 5074 | AI-draft | The Praised One | كثير الخصال المحمودة |
| 5075 | AI-draft | The Most Praised | أكثر الناس حمدًا لله |
| 5076 | AI-draft | The Praiser | الحامد لربّه |
| 5077 | AI-draft | The Commended | الممدوح عند الله والناس |
| 5078 | AI-draft | The Eraser (of idolatry) | الذي يمحو الله به الكفر |
| 5079 | AI-draft | O Pure One | من الحروف المقطّعة في أوّل سورة طه |
| 5080 | AI-draft | O Mighty One | من الحروف المقطّعة في أوّل سورة يس |
| 5081 | AI-draft | The Purified | المطهَّر من كل دنس |
| 5082 | AI-draft | The Master | السيّد في قومه |
| 5083 | AI-draft | The Messenger | المرسَل من الله |
| 5084 | AI-draft | The Prophet | المنبَّأ بالوحي |
| 5085 | AI-draft | The Messenger of Mercy | المرسَل رحمةً للعالمين |
| 5086 | AI-draft | The Overseer | المقدَّم على الخلق |
| 5087 | AI-draft | The Completing | الآتي على أثر الأنبياء |
| 5088 | AI-draft | The Messenger of Battles | المرسَل بالجهاد |
| 5089 | AI-draft | The Messenger of Comfort | المرسَل بالراحة والتيسير |
| 5090 | AI-draft | The Cloaked One | المتدثّر بثوبه (أوّل المدثّر) |
| 5091 | AI-draft | The Wrapped One | المتلفّف بثوبه (أوّل المزّمّل) |
| 5092 | AI-draft | The Servant of Allah | العبد لله |
| 5093 | AI-draft | The Beloved of Allah | المحبوب عند الله |
| 5094 | AI-draft | The Chosen of Allah | المصطفى المختار من الله |
| 5095 | AI-draft | The Confidant of Allah | المناجي لربّه |
| 5096 | AI-draft | The Speaker with Allah | المكلَّم من الله |
| 5097 | AI-draft | Seal of the Prophets | آخر الأنبياء |
| 5098 | AI-draft | Seal of the Messengers | آخر المرسلين |
| 5099 | AI-draft | The Reviver | المحيي للقلوب بالهدى |
| 5100 | AI-draft | The Rescuer | المغيث في الشدائد |
| 5101 | AI-draft | The Reminder | المذكِّر بالله |
| 5102 | AI-draft | The Helper | الناصر للحقّ |
| 5103 | AI-draft | The Victorious | المؤيَّد بالنصر |
| 5104 | AI-draft | The Prophet of Mercy | نبيّ الرحمة للخلق |
| 5105 | AI-draft | The Prophet of Repentance | الداعي إلى التوبة |
| 5106 | AI-draft | The Watchful Over You | الحريص على هداية أمّته |
| 5107 | AI-draft | The Known One | المعروف بصفته |
| 5108 | AI-draft | The Witnesser | الشاهد على أمّته |
| 5109 | AI-draft | The Attested | المشهود له بالرسالة |
| 5110 | AI-draft | The Glad-Tidings | المبشّر بالخير |
| 5111 | AI-draft | The Spreader of Good News | المبشّر بالجنّة |
| 5112 | AI-draft | The Admonisher | المحذِّر من العذاب |
| 5113 | AI-draft | The Lantern | السراج المنير |
| 5114 | AI-draft | The Rightly Guided | المهديّ من ربّه |
| 5115 | AI-draft | The Illumined One | المنير للطريق |
| 5116 | AI-draft | The Caller | الداعي إلى الله |
| 5117 | AI-draft | The Called One | المدعوّ إلى ربّه |
| 5118 | AI-draft | The One Responded To | المستجاب دعاؤه |
| 5119 | AI-draft | The Gentle | البارّ اللطيف |
| 5120 | AI-draft | The Overlooker of Sins | العافي عن الزلّات |
| 5121 | AI-draft | The Trustworthy | المؤتمن على الوحي |
| 5122 | AI-draft | The Evident | المبيِّن للحقّ |
| 5123 | AI-draft | The One Hoped For | المرجوّ نفعه |
| 5124 | AI-draft | The Connection | الواصل للرحم |
| 5125 | AI-draft | Possessor of Power | صاحب القوّة |
| 5126 | AI-draft | Possessor of Honor | صاحب الحرمة |
| 5127 | AI-draft | Possessor of Firmness | صاحب المنزلة الرفيعة |
| 5128 | AI-draft | Possessor of Might | صاحب العزّة |
| 5129 | AI-draft | Possessor of Grace | صاحب الفضل |
| 5130 | AI-draft | The One Obeyed | المطاع أمره |
| 5131 | AI-draft | The Obedient | المطيع لربّه |
| 5132 | AI-draft | The Firm Foothold | السابقة الصادقة |
| 5133 | AI-draft | Mercy | الرحمة المهداة |
| 5134 | AI-draft | The Redeemer | المغيث للخلق |
| 5135 | AI-draft | The Favor of Allah | النعمة من الله |
| 5136 | AI-draft | The Gift of Allah | الهدية من الله |
| 5137 | AI-draft | The Trusty Handhold | العروة الوثقى في الدين |
| 5138 | AI-draft | The Path of Allah | الطريق إلى الله |
| 5139 | AI-draft | The Straight Path | الطريق القويم |
| 5140 | AI-draft | The Remembrance of Allah | المذكِّر بالله |
| 5141 | AI-draft | The Sword of Allah | المسلول على الباطل |
| 5142 | AI-draft | The Party of Allah | إمام جند الحقّ |
| 5143 | AI-draft | The Piercing Star | النجم المضيء |
| 5144 | AI-draft | The Chosen One | المختار الصافي |
| 5145 | AI-draft | The Singled-Out | المجتبى من الخلق |
| 5146 | AI-draft | The Selected One | المنتقى المختار |
| 5147 | AI-draft | The Unlettered | الذي لم يقرأ ولم يكتب |
| 5148 | AI-draft | The Chosen | المختار من الله |
| 5149 | AI-draft | Allah's Worker | الأجير لله |
| 5150 | AI-draft | The Compelling One | المصلح الجابر |
| 5151 | AI-draft | Father of Qāsim | كنيته بابنه القاسم |
| 5152 | AI-draft | Father of Ṭāhir | كنيته بابنه الطاهر |
| 5153 | AI-draft | Father of Ṭayyib | كنيته بابنه الطيّب |
| 5154 | AI-draft | Father of Ibrāhīm | كنيته بابنه إبراهيم |
| 5155 | AI-draft | Whose Intercession is Accepted | المقبول شفاعته |
| 5156 | AI-draft | The Interceder | الشافع لأمّته |
| 5157 | AI-draft | The Righteous | الصالح التقيّ |
| 5158 | AI-draft | The Truthful | الصادق في قوله |
| 5159 | AI-draft | The Confirmer | المصدِّق لمن قبله |
| 5160 | AI-draft | Sincerity | الصدق |
| 5161 | AI-draft | Master of Messengers | إمام المرسلين |
| 5162 | AI-draft | Leader of the God-Fearing | إمام أهل التقوى |
| 5163 | AI-draft | Guide of the Bright Shining Ones | قائد أهل الوضوء يوم القيامة |
| 5164 | AI-draft | Friend of the Merciful | خليل الله |
| 5165 | AI-draft | The Pious | البارّ التقيّ |
| 5166 | AI-draft | The Venerated | الموقَّر المبجَّل |
| 5167 | AI-draft | The Eminent | ذو الجاه |
| 5168 | AI-draft | The Counselor | الناصح لأمّته |
| 5169 | AI-draft | The Advocate | القائم بالأمر |
| 5170 | AI-draft | The Reliant on Allah | المتوكّل على الله |
| 5171 | AI-draft | The Guarantor | الكفيل بالعهد |
| 5172 | AI-draft | Establisher of the Way | المقيم للسنّة |
| 5173 | AI-draft | The Sacred | المطهَّر المقدّس |
| 5174 | AI-draft | The Holy Spirit | المؤيَّد بروح القدس |
| 5175 | AI-draft | The Spirit of Truth | روح الحقّ |
| 5176 | AI-draft | The Spirit of Justice | روح العدل |
| 5177 | AI-draft | The Qualified | الكافي |
| 5178 | AI-draft | The Broad-Shouldered One | المكتفي بالله |
| 5179 | AI-draft | The Proclaimer | البالغ رسالته |
| 5180 | AI-draft | The Informer | المبلِّغ رسالة ربّه |
| 5181 | AI-draft | The Inseparable Friend | الواصل لربّه |
| 5182 | AI-draft | The One Bound to Allah | الموصول بالله |
| 5183 | AI-draft | The Foremost | السابق إلى الخير |
| 5184 | AI-draft | The Guided | المهتدي بالله |
| 5185 | AI-draft | The Mighty | العزيز |
| 5186 | AI-draft | The Outstanding | الفاضل |
| 5187 | AI-draft | The Favoured | المفضَّل على العالمين |
| 5188 | AI-draft | The Key to Mercy | باب الرحمة |
| 5189 | AI-draft | Teacher of Faith | علامة الإيمان |
| 5190 | AI-draft | Teacher of Certainty | علامة اليقين |
| 5191 | AI-draft | Guide to Good Things | الدالّ على الخير |
| 5192 | AI-draft | Verifier of Good Deeds | المصحِّح للحسنات |
| 5193 | AI-draft | Remover of Obstacles | المقيل للعثرات |
| 5194 | AI-draft | Pardoner of Sins | الصافح عن الزلّات |
| 5195 | AI-draft | Possessor of Intercession | صاحب الشفاعة العظمى |
| 5196 | AI-draft | Possessor of the Honored Station | صاحب المقام المحمود |
| 5197 | AI-draft | Owner of the Footprint | صاحب قدم الصدق |
| 5198 | AI-draft | Distinguished with Might | المخصوص بالعزّة |
| 5199 | AI-draft | Distinguished with Glory | المخصوص بالمجد |
| 5200 | AI-draft | Distinguished with Nobility | المخصوص بالشرف |
| 5201 | AI-draft | Possessor of Closest Access | صاحب الوسيلة |
| 5202 | AI-draft | Possessor of Pre-eminence | صاحب الفضيلة |
| 5203 | AI-draft | Owner of the Waist-Wrap | صاحب الإزار |
| 5204 | AI-draft | Possessor of Proof | صاحب الحجّة |
| 5205 | AI-draft | Possessor of Authority | صاحب السلطان |
| 5206 | AI-draft | Owner of the Robe | صاحب الرداء |
| 5207 | AI-draft | Possessor of the Lofty Rank | صاحب الدرجة الرفيعة |
| 5208 | AI-draft | Possessor of the Crown | صاحب التاج |
| 5209 | AI-draft | Possessor of Forgiveness | صاحب المغفر |
| 5210 | AI-draft | Possessor of the Flag | صاحب لواء الحمد |
| 5211 | AI-draft | Master of the Night Journey | صاحب المعراج |
| 5212 | AI-draft | Possessor of the Staff | صاحب القضيب |
| 5213 | AI-draft | Owner of the Burāq | صاحب البراق |
| 5214 | AI-draft | Owner of the Ring | صاحب خاتم النبوّة |
| 5215 | AI-draft | Owner of the Sign | صاحب العلامة |
| 5216 | AI-draft | Possessor of the Evidence | صاحب البرهان |
| 5217 | AI-draft | Possessor of Evident Proof | صاحب البيان |
| 5218 | AI-draft | The Good Communicator | فصيح اللسان |
| 5219 | AI-draft | Purifier of the Souls | طاهر القلب |
| 5220 | AI-draft | The Kind | الرؤوف بأمّته |
| 5221 | AI-draft | The Mercy Giving | الرحيم بالمؤمنين |
| 5222 | AI-draft | The One with Perfect Islam | الكامل في إسلامه |
| 5223 | AI-draft | Master of the Two Universes | سيّد الدنيا والآخرة |
| 5224 | AI-draft | The Spring of Bliss | ينبوع النعيم |
| 5225 | AI-draft | The Joy of Allah | سعد من الله |
| 5226 | AI-draft | The Joy of the Creator | سعادة للخلق |
| 5227 | AI-draft | The Preacher to Nations | خطيب الأمم |
| 5228 | AI-draft | The Remover of Worries | كاشف الكروب |
| 5229 | AI-draft | The Might of the Arab | عزّ العرب |
| 5230 | AI-draft | Astrology cannot tell you when, whether or how to have medical treatment or surgery, and it must not be used to choose, delay, stop or replace treatment. Consult a qualified healthcare professional, and do not delay necessary care. This result is a traditional astrological interpretation, not a clinically validated medical prediction. | لا يمكن لعلم النجوم أن يحدّد وقت العلاج الطبي أو الجراحة أو ما إذا كان ينبغي إجراؤهما، ولا يجوز استخدامه لاختيار العلاج أو تأخيره أو إيقافه أو الاستعاضة عنه. راجع مختصًا صحيًا مؤهلًا، ولا تؤخّر الرعاية الطبية الضرورية. هذه النتيجة تفسير فلكي تقليدي، وليست تنبؤًا طبيًا مثبتًا سريريًا. |
| 5231 | AI-draft | Medical treatment · traditional reading | العلاج الطبي · قراءة تقليدية |
