# Arabic AI-draft strings — needs native-speaker review

Every row below is an **AI-draft** (hand-written by the assistant, not a machine translator). They are live in the `/ar` UI via `public/i18n/ar-ui.json`. Please check and correct in `scripts/i18n/ar/ai_drafts.json`, then run `python3 scripts/i18n/ar/build_catalog.py`.

Rules applied: Divine Names = canonical Arabic from `src/data/divine-names.ts`; Qur'ān = original Arabic text (verses listed separately below, verify against a muṣḥaf — the repo had only English renderings; note `30:48` in `asrar-everyday-app.tsx` is rendered with the wording of 30:46, which matches the English); standard terms (التصوف، علم الحروف، الأبجد، المنازل، الاستخارة، الصدقة، الذكر); reflective, non-predictive tone (a few 'destiny/influence' phrasings were deliberately softened).

Counts: 5153 AI-draft strings, 512 Divine-Name mappings, 74 Qur'anic lines.

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
| By the Sun and its brightness (Wa ash-shamsi wa ḍuḥāhā) - Surah 91:1 | وَالشَّمْسِ وَضُحَاهَا - سورة الشمس 91:1 |
| And the Moon - We have determined for it phases until it returns appearing like an old date palm stalk. (Quran 36:39) | وَالْقَمَرَ قَدَّرْنَاهُ مَنَازِلَ حَتَّىٰ عَادَ كَالْعُرْجُونِ الْقَدِيمِ (يس 36:39) |
| Say: He is Allah, the One (112:1) - Unity and singularity | قُلْ هُوَ اللَّهُ أَحَدٌ (112:1) - الوحدانية والتفرّد |
| And hold fast to the rope of Allah together (3:103) | وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا (3:103) |
| He is the Originator of the heavens and earth (2:117) | بَدِيعُ السَّمَاوَاتِ وَالْأَرْضِ (2:117) |
| So set your face to the religion, as one by nature upright (30:30) | فَأَقِمْ وَجْهَكَ لِلدِّينِ حَنِيفًا (30:30) |
| Allah will bring about ease after hardship (65:7) | سَيَجْعَلُ اللَّهُ بَعْدَ عُسْرٍ يُسْرًا (65:7) |
| The servants of the Most Merciful are those who walk upon the earth in humility (25:63) | وَعِبَادُ الرَّحْمَٰنِ الَّذِينَ يَمْشُونَ عَلَى الْأَرْضِ هَوْنًا (25:63) |
| Say: Travel through the earth and observe how He began creation (29:20) | قُلْ سِيرُوا فِي الْأَرْضِ فَانظُرُوا كَيْفَ بَدَأَ الْخَلْقَ (29:20) |
| And seek, through that which Allah has given you, the home of the Hereafter (28:77) | وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ (28:77) |
| Light upon light. Allah guides to His light whom He wills (24:35) | نُّورٌ عَلَىٰ نُورٍ ۗ يَهْدِي اللَّهُ لِنُورِهِ مَن يَشَاءُ (24:35) |
| And We placed on earth anchors lest it shake with you (21:31) | وَجَعَلْنَا فِي الْأَرْضِ رَوَاسِيَ أَن تَمِيدَ بِهِمْ (21:31) |
| And those who believe and whose families follow them in faith (52:21) | وَالَّذِينَ آمَنُوا وَاتَّبَعَتْهُمْ ذُرِّيَّتُهُم بِإِيمَانٍ (52:21) |
| By the sun and its brightness | وَالشَّمْسِ وَضُحَاهَا |
| And the moon - We have determined for it phases | وَالْقَمَرَ قَدَّرْنَاهُ مَنَازِلَ |
| He gives wisdom to whom He wills, and whoever has been given wisdom has certainly been given much good | يُؤْتِي الْحِكْمَةَ مَن يَشَاءُ ۚ وَمَن يُؤْتَ الْحِكْمَةَ فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا |
| And He is the Forgiving, the Loving | وَهُوَ الْغَفُورُ الْوَدُودُ |
| If there are among you twenty who are patient and steadfast, they will overcome two hundred | إِن يَكُن مِّنكُمْ عِشْرُونَ صَابِرُونَ يَغْلِبُوا مِائَتَيْنِ |
| The example of those who spend in the way of Allah is like a seed which grows seven spikes | مَّثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ |
| Allāhumma ṣalli ʿalā Muḥammadin wa ʿalā āli Muḥammad, kamā ṣallayta ʿalā Ibrāhīma wa ʿalā āli Ibrāhīm, innaka Ḥamīdun Majīd. Allāhumma bārik ʿalā Muḥammadin wa ʿalā āli Muḥammad, kamā bārakta ʿalā Ibrāhīma wa ʿalā āli Ibrāhīm, innaka Ḥamīdun Majīd. | اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ. اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ |
| Allāhumma ṣalli ʿalā Sayyidinā Muḥammadini l-fātiḥi limā ughliq, wal-khātimi limā sabaqa, nāṣiri l-ḥaqqi bil-ḥaqq, wal-hādī ilā ṣirāṭika l-mustaqīm, wa ʿalā ālihi ḥaqqa qadrihi wa miqdārihil-ʿaẓīm. | اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ الْفَاتِحِ لِمَا أُغْلِقَ، وَالْخَاتِمِ لِمَا سَبَقَ، نَاصِرِ الْحَقِّ بِالْحَقِّ، وَالْهَادِي إِلَى صِرَاطِكَ الْمُسْتَقِيمِ، وَعَلَى آلِهِ حَقَّ قَدْرِهِ وَمِقْدَارِهِ الْعَظِيمِ |
| Allāhumma ṣalli ʿalā man minhu nshaqqatil-asrār, wa nfalaqatil-anwār, wa fīhi rtaqatil-ḥaqāʾiq, wa tanazzalat ʿulūmu Ādam fa-aʿjazal-khalāʾiq, wa lahu taḍāʾalatil-fuhūm, fa-lam yudrikhu minnā sābiqun wa lā lāḥiq. | اللَّهُمَّ صَلِّ عَلَى مَنْ مِنْهُ انْشَقَّتِ الْأَسْرَارُ، وَانْفَلَقَتِ الْأَنْوَارُ، وَفِيهِ ارْتَقَتِ الْحَقَائِقُ، وَتَنَزَّلَتْ عُلُومُ آدَمَ فَأَعْجَزَ الْخَلَائِقَ، وَلَهُ تَضَاءَلَتِ الْفُهُومُ، فَلَمْ يُدْرِكْهُ مِنَّا سَابِقٌ وَلَا لَاحِقٌ |
| May Allah send blessings upon Muḥammad — the one described with nobility and generosity. | اللهم صلِّ على محمد الموصوف بالكرم والجود. |
| May Allah send blessings upon Muḥammad — his light has dawned for the heart, and his appearance is a mercy to all the worlds. | صلّى الله على محمد، أصبح للقلب نوره، ورحمةً للعالمين ظهوره. |
| O Ever-Living, O Sustainer of all, by Your mercy I seek relief. | يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ |
| Adhhib al-baʾs, Rabb an-nās, ishfi anta ash-Shāfī, lā shifāʾa illā shifāʾuk, shifāʾan lā yughādiru saqamā | أَذْهِبِ الْبَأْسَ رَبَّ النَّاسِ، اشْفِ أَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا |
| Allāhumma innaka ʿAfuwwun tuḥibbu al-ʿafwa fa-ʿfu ʿannī | اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي |
| O Allah, You are Pardoning and You love pardon, so pardon me. | اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي |
| My Lord, increase me in knowledge. | رَّبِّ زِدْنِي عِلْمًا |
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
| 832 | (Science of Letters) and | (علم الحروف) و |
| 833 | (Science of Numbers). | (علم العدد). |
| 834 | Discover the sacred numerical values and elemental associations within Arabic text, connecting language to the deeper patterns of creation. | اكتشف القيم العددية والمناسبات العنصرية في النصّ العربي، وصلة اللغة بأنماط الخلق الأعمق. |
| 835 | Explore | استكشف |
| 836 | Version 1.0 • © 2025 | الإصدار 1.0 • © 2025 |
| 837 | is your guide to the Islamic sciences of | دليلك إلى العلوم الإسلامية: |
| 838 | How This Guidance Works | كيف يعمل هذا الإرشاد |
| 839 | This app is based on traditional Islamic letter science (ʿIlm al-Ḥurūf), a centuries-old practice that explores the spiritual meanings and energies associated with Arabic letters and planetary cycles. | يقوم هذا التطبيق على علم الحروف التقليدي، وهو ممارسة عمرها قرون تستكشف المعاني الروحية المرتبطة بالحروف العربية والدورات الكوكبية. |
| 840 | This is a cultural practice tool for self-reflection, not a religious requirement or fortune-telling service. Always use your own judgment and consult qualified professionals for important decisions. | هذه أداة لممارسة ثقافية للتأمّل في النفس، لا واجب ديني ولا خدمة عرافة. استعمل دائمًا حكمك الخاص، وارجع إلى المختصّين المؤهّلين في القرارات المهمّة. |
| 841 | • Absolute predictions | • التنبّؤات المطلقة |
| 842 | • Countdown timers and urgency indicators | • عدّادات تنازلية ومؤشّرات استعجال |
| 843 | • Element compatibility theory - classical principles | • نظرية توافق العناصر - مبادئ كلاسيكية |
| 844 | • Letter values (Abjad system) - from classical texts | • قيم الحروف (نظام الأبجد) - من النصوص الكلاسيكية |
| 845 | • Mindfulness & reflection | • الوعي والتأمّل |
| 846 | • Modern language and interface | • لغة وواجهة حديثتان |
| 847 | • Pattern recognition | • التعرّف على الأنماط |
| 848 | • Personal guidance: Directionally helpful (~70%) | • الإرشاد الشخصي: مفيد في الاتجاه (~70%) |
| 849 | • Planetary hour system - ancient astronomy | • نظام الساعات الكوكبية - علم فلك قديم |
| 850 | • Planetary hours: Accurate with location (90%+) | • الساعات الكوكبية: دقيقة مع الموقع (90%+) |
| 851 | • Professional advice | • المشورة المتخصّصة |
| 852 | • Religious obligation | • الواجب الديني |
| 853 | • Replacing judgment | • أن يحلّ محلّ حكمك |
| 854 | ✅ Do Use For: | ✅ استعمله لـ: |
| 855 | ✅ What's Authentic | ✅ ما هو أصيل |
| 856 | 💡 How to Use This Tool | 💡 كيف تستعمل هذه الأداة |
| 857 | 📏 Accuracy Levels | 📏 مستويات الدقّة |
| 858 | 📜 Traditional Foundation | 📜 الأساس التقليدي |
| 859 | Discover Quranic verses, Divine Names, and spiritual guidance based on your elemental profile. Use History to save calculations, and Comparison mode to explore relationships! | اكتشف آيات قرآنية وأسماء حسنى وإرشادًا روحيًا بحسب ملفك العنصري. استعمل السجلّ لحفظ الحسابات، ووضع المقارنة لاستكشاف العلاقات! |
| 860 | Explore Deeper | تعمّق أكثر |
| 861 | Explore the beautiful tradition of ʿIlm al-Ḥurūf (Science of Letters) - an Islamic science that reveals numerical values and elemental associations in Arabic text. | استكشف تراث علم الحروف الجميل — علمٌ إسلامي يكشف القيم العددية والمناسبات العنصرية في النصّ العربي. |
| 862 | Let's Begin! | لنبدأ! |
| 863 | Type in English/French (like 'Rahim' or 'Fatou') and we'll transliterate to Arabic. Or use the Arabic keyboard for direct input. Always verify the Arabic spelling for accuracy! | اكتب بالإنجليزية أو الفرنسية (مثل «Rahim» أو «Fatou») وسنحوّله إلى العربية، أو استعمل لوحة المفاتيح العربية للإدخال المباشر. وتحقّق دائمًا من صحّة الكتابة العربية! |
| 864 | • Kabīr (الكبير): Total numerical value • Ṣaghīr (الصغير): Digital root (1-9) • Elements: Fire 🔥 Water 💧 Air 🌬 Earth 🌍 • Ḥadath: Elemental influence pattern | • الكبير: القيمة العددية الكلية • الصغير: الجذر الرقمي (1-9) • العناصر: النار 🔥 الماء 💧 الهواء 🌬 التراب 🌍 • الحدث: نمط الأثر العنصري |
| 865 | Coordinates: | الإحداثيات: |
| 866 | Failed to delete avatar: | تعذّر حذف الصورة: |
| 867 | Failed to update profile: | تعذّر تحديث الملف: |
| 868 | Failed to upload avatar: | تعذّر رفع الصورة: |
| 869 | Getting Location... | جارٍ تحديد الموقع... |
| 870 | Location & Timezone | الموقع والمنطقة الزمنية |
| 871 | Profile updated successfully! | حُدِّث الملف بنجاح! |
| 872 | Remove current picture | إزالة الصورة الحالية |
| 873 | UTC | UTC |
| 874 | Used for Name Destiny calculations | يُستعمل في حسابات مسار الاسم |
| 875 | Used for enhanced numerology calculations | يُستعمل في حسابات علم العدد المحسّنة |
| 876 | 📍 Update to Current Location | 📍 التحديث إلى الموقع الحالي |
| 877 | Change Picture | تغيير الصورة |
| 878 | File size must be less than | يجب أن يكون حجم الملف أقل من |
| 879 | JPEG, PNG, WebP, or GIF. Max | JPEG أو PNG أو WebP أو GIF. الحدّ الأقصى |
| 880 | Please select a JPEG, PNG, WebP, or GIF image | يُرجى اختيار صورة JPEG أو PNG أو WebP أو GIF |
| 881 | Profile preview | معاينة الملف |
| 882 | Remove picture | إزالة الصورة |
| 883 | Upload Picture | رفع صورة |
| 884 | Add a profile picture to personalize your account | أضف صورة شخصية لتخصيص حسابك |
| 885 | Enter Location Manually | أدخل الموقع يدويًا |
| 886 | Profile Picture (Optional) | الصورة الشخصية (اختيارية) |
| 887 | This helps us personalize your experience with Asrār Everyday | يساعدنا هذا على تخصيص تجربتك مع أسرار |
| 888 | Used for Name Destiny calculations and personalized guidance | يُستعمل في حسابات مسار الاسم والإرشاد الشخصي |
| 889 | Used for accurate planetary hour calculations and prayer times | يُستعمل لحساب الساعات الكوكبية ومواقيت الصلاة بدقّة |
| 890 | Welcome! Let's set up your profile | مرحبًا! لنُعِدّ ملفك |
| 891 | 📍 Use Current Location | 📍 استعمل الموقع الحالي |
| 892 | Complete your profile to unlock all features and get personalized guidance. | أكمل ملفك لتفتح كل الميزات وتحصل على إرشاد شخصي. |
| 893 | Coordinates | الإحداثيات |
| 894 | Creating your profile... | جارٍ إنشاء ملفك... |
| 895 | No profile found | لم يُعثر على ملف |
| 896 | Not set | غير مضبوط |
| 897 | Set Up Profile | إعداد الملف |
| 898 | Please enter Arabic names for both people | يُرجى إدخال الاسمين بالعربية لكلا الشخصين |
| 899 | OF NINE | من تسعة |
| 900 | Soul connection result: | نتيجة صلة الأرواح: |
| 901 | A traditional soul-resonance marker from ʿIlm al-Ḥurūf | علامة تقليدية لرنين الأرواح من علم الحروف |
| 902 | We sum each name’s abjad letter values, add 7, then reduce the total to a number from 1 to 9. Multiples of nine resolve to 9, never 0. | نجمع قيم حروف كل اسم في الأبجد، ونضيف 7، ثم نختزل المجموع إلى عدد من 1 إلى 9. ومضاعفات التسعة تصير 9، لا 0 أبدًا. |
| 903 | Maghrib practice (default) | الممارسة المغربية (افتراضي) |
| 904 | Mashreq practice | الممارسة المشرقية |
| 905 | ". This dhikr amplifies the positive energy of this hour. | ». وهذا الذكر يقوّي الأثر الطيب لهذه الساعة. |
| 906 | ) resonates with the divine qualities of " | ) يتّصل بمعاني « |
| 907 | Complete! Maasha Allah! | اكتمل! ما شاء الله! |
| 908 | Develops patience, discipline, and steady perseverance | ينمّي الصبر والانضباط والمثابرة الثابتة |
| 909 | Illuminates the heart and brings clarity to your path | ينير القلب ويوضّح طريقك |
| 910 | O Light | يا نور |
| 911 | O Most Generous | يا كريم |
| 912 | O Most Gentle | يا لطيف |
| 913 | O Most Loving | يا ودود |
| 914 | O Most Patient | يا صبور |
| 915 | O Most Strong | يا قوي |
| 916 | O Most Wise | يا حكيم |
| 917 | Soothes difficulties and opens doors gently | يلطّف الصعاب ويفتح الأبواب برفق |
| 918 | Why this dhikr? | لماذا هذا الذكر؟ |
| 919 | 💡 Tip: Recite with presence and sincerity. Quality matters more than quantity. | 💡 نصيحة: اذكر بحضور وإخلاص. فالجودة أهمّ من الكثرة. |
| 920 | 💡 Tip: Use buttons or count on your fingers for traditional practice | 💡 نصيحة: استعمل الأزرار أو العدّ بالأصابع على الطريقة التقليدية |
| 921 | Arabic terms and spiritual concepts | المصطلحات العربية والمفاهيم الروحية |
| 922 | Back to Divine Timing | العودة إلى التوقيت الإلهي |
| 923 | Complete introduction to Islamic planetary hours | مقدّمة كاملة للساعات الكوكبية في التراث الإسلامي |
| 924 | Default: Makkah | الافتراضي: مكة المكرمة |
| 925 | Excellent - Perfect Time! | ممتاز - وقت مثالي! |
| 926 | Explore all 7 planets with Islamic context | استكشف الكواكب السبعة في سياقها الإسلامي |
| 927 | Full day view | عرض اليوم كاملًا |
| 928 | Getting your location... | جارٍ تحديد موقعك... |
| 929 | Low - Time to Rest | منخفض - وقت للراحة |
| 930 | Makkah | مكة المكرمة |
| 931 | Neutral - Be Mindful | محايد - كن واعيًا |
| 932 | Refresh location | تحديث الموقع |
| 933 | This helps us calculate accurate planetary hours | يساعدنا هذا على حساب الساعات الكوكبية بدقّة |
| 934 | Unable to get your location. Using Makkah as default. | تعذّر تحديد موقعك. سنستعمل مكة المكرمة افتراضيًا. |
| 935 | View Timeline | عرض الخطّ الزمني |
| 936 | 🌙 Planetary hours are calculated according to classical Islamic traditions. Use this guidance with your own discernment. | 🌙 تُحسب الساعات الكوكبية وفق التراث الإسلامي الكلاسيكي. استعمل هذا الإرشاد بتمييزك الخاص. |
| 937 | Act with courage | اعمل بشجاعة |
| 938 | Acts of generosity | أعمال الكرم |
| 939 | Avoid excessive spending | اجتنب الإسراف في الإنفاق |
| 940 | Avoid misunderstandings | اجتنب سوء الفهم |
| 941 | Avoid overconfidence | اجتنب الثقة المفرطة |
| 942 | Avoid rigidity | اجتنب الجمود |
| 943 | Channel energy positively | وجّه الطاقة توجيهًا إيجابيًا |
| 944 | Create art | اصنع فنًّا |
| 945 | Disciplined work | عمل منضبط |
| 946 | Double-check messages | راجع الرسائل مرتين |
| 947 | Ended | انتهت |
| 948 | Improve relationships | حسّن العلاقات |
| 949 | Intense physical exercise | تمارين بدنية شديدة |
| 950 | Learn and teach | تعلّم وعلّم |
| 951 | Meditate and pray | تأمّل وصلِّ |
| 952 | Meet influential people | قابل أصحاب التأثير |
| 953 | Negotiate and plan | فاوض وخطّط |
| 954 | Pleasant activities | أنشطة لطيفة |
| 955 | Postpone romantic decisions | أجّل القرارات العاطفية |
| 956 | Practice modesty | تحلَّ بالتواضع |
| 957 | Rest and recharge | استرح واستعد نشاطك |
| 958 | Set boundaries | ضع حدودًا |
| 959 | Socialize | اختلط بالناس |
| 960 | Stand your ground | اثبت على موقفك |
| 961 | Structured tasks | مهامّ منظّمة |
| 962 | Study sacred texts | ادرس النصوص الشرعية |
| 963 | Take a step back | تراجع خطوة |
| 964 | Take initiative | بادر |
| 965 | Tasks requiring energy | مهامّ تتطلّب طاقة |
| 966 | Travel and explore | سافر واستكشف |
| 967 | Trust your intuition | ثق بحدسك |
| 968 | Write and communicate | اكتب وتواصل |
| 969 | min remaining | دقيقة متبقّية |
| 970 | minutes remaining | دقائق متبقّية |
| 971 | ✨ Perfect time to act with confidence | ✨ وقت مثالي للعمل بثقة |
| 972 | 🌙 Time to rest and reflect | 🌙 وقت للراحة والتأمّل |
| 973 | 🌟 Balanced energy - proceed thoughtfully | 🌟 طاقة متوازنة - تقدّم بتروٍّ |
| 974 | Conversations | المحادثات |
| 975 | Prayer & Worship | الصلاة والعبادة |
| 976 | Work & Projects | العمل والمشاريع |
| 977 | ☀️ Not ideal for work - consider rescheduling important tasks | ☀️ ليس مثاليًا للعمل - فكّر في تأجيل المهامّ المهمّة |
| 978 | ☿️ High risk of miscommunication - double-check everything | ☿️ احتمال كبير لسوء التواصل - راجع كل شيء |
| 979 | ☿️ Okay for routine communication and simple tasks | ☿️ لا بأس به للتواصل الروتيني والمهامّ البسيطة |
| 980 | ♀️ Focus on beauty may distract from spiritual essence | ♀️ قد يصرف التركيز على الجمال عن الجوهر الروحي |
| 981 | ♀️ Good for gentle worship, but may lack depth | ♀️ جيد للعبادة اللطيفة، لكنه قد يفتقر إلى العمق |
| 982 | ♀️ Okay for pleasant tasks, but not for hard decisions | ♀️ لا بأس به للمهامّ اللطيفة، لا للقرارات الصعبة |
| 983 | ♀️ Perfect for loving devotion, gratitude, and heart-centered prayer | ♀️ مثالي للعبادة بمحبّة وشكر ودعاء من القلب |
| 984 | ♂️ Excellent for tackling challenges, physical work, and assertive action | ♂️ ممتاز لمواجهة التحدّيات والعمل البدني والعمل الحازم |
| 985 | ♂️ Good for moderate effort, but pace yourself | ♂️ جيد للجهد المعتدل، لكن خذ وقتك |
| 986 | ♂️ High conflict risk - avoid confrontations and aggressive moves | ♂️ احتمال كبير للصراع - اجتنب المواجهات والخطوات العدوانية |
| 987 | ♃ Excellent for studying sacred texts, seeking knowledge, and gratitude | ♃ ممتاز لدراسة النصوص الشرعية وطلب العلم والشكر |
| 988 | ♃ Good for learning, but avoid spiritual pride | ♃ جيد للتعلّم، لكن احذر العُجب الروحي |
| 989 | ♃ Risk of spiritual arrogance - practice humility | ♃ خطر الكِبر الروحي - تحلَّ بالتواضع |
| 990 | ♄ Energy feels heavy - take breaks and be gentle with yourself | ♄ الطاقة ثقيلة - خذ فترات راحة وترفّق بنفسك |
| 991 | ♄ Excellent for disciplined practice, fasting, and serious contemplation | ♄ ممتاز للممارسة المنضبطة والصيام والتأمّل الجادّ |
| 992 | ♄ Good for structured prayer, but avoid rigidity | ♄ جيد للصلاة المنتظمة، لكن اجتنب الجمود |
| 993 | ♄ May feel burdensome - remember divine mercy and compassion | ♄ قد يبدو ثقيلًا - تذكّر رحمة الله ولطفه |
| 994 | ♄ Perfect for disciplined work, structure, and long-term commitments | ♄ مثالي للعمل المنضبط والبنية والالتزامات البعيدة |
| 995 | 🌙 Beautiful time for deep prayer, dhikr, and spiritual connection | 🌙 وقت جميل للدعاء العميق والذكر والصلة الروحية |
| 996 | 🌙 Emotions may cloud your focus - seek simplicity | 🌙 قد تحجب المشاعر تركيزك - اطلب البساطة |
| 997 | 🌙 Good for intuitive work, caring professions, and emotional intelligence | 🌙 جيد للعمل الحدسيّ ومهن الرعاية والذكاء العاطفي |
| 998 | 🌙 Good for prayer, though distractions may arise | 🌙 جيد للدعاء، وإن قد تعرض المشتّتات |
| 999 | 🌙 Okay for routine work, but emotions may interfere | 🌙 لا بأس به للعمل الروتيني، لكن قد تتدخّل المشاعر |
| 1000 | 🌙 Too emotional for work - rest and reflect instead | 🌙 عاطفي جدًا للعمل - استرح وتأمّل بدلًا من ذلك |
| 1001 | 💫 Neutral time - proceed thoughtfully | 💫 وقت محايد - تقدّم بتروٍّ |
| 1002 | Connect with Nature | اتّصل بالطبيعة |
| 1003 | Even the mightiest trees need periods of rest to grow stronger. Honor this sacred time. | حتى أعظم الأشجار تحتاج إلى فترات راحة لتزداد قوة. فأكرِم هذا الوقت. |
| 1004 | Gentle Quran Reading | تلاوة هادئة للقرآن |
| 1005 | Gentle walk, feel the breeze, observe creation | مشيٌ هادئ، استشعر النسيم، وتأمّل الخلق |
| 1006 | Gratitude Journal | دفتر الشكر |
| 1007 | Mindful Tea | شاي بتأمّل |
| 1008 | Quran 2:152 | البقرة 152 |
| 1009 | Quran 51:22 | الذاريات 22 |
| 1010 | Quran 94:6 | الشرح 6 |
| 1011 | Read slowly for comfort, not quantity | اقرأ ببطء للسكينة لا للكثرة |
| 1012 | Sacred Silence | صمتٌ خاشع |
| 1013 | Selected - Begin when ready | تمّ الاختيار - ابدأ متى كنت مستعدًا |
| 1014 | Slowly sip tea while reflecting on blessings | ارتشف الشاي ببطء متأمّلًا في النعم |
| 1015 | Soft Dhikr | ذكر هادئ |
| 1016 | SubhanAllah, Alhamdulillah, Allahu Akbar - whispered gently | سبحان الله، الحمد لله، الله أكبر - همسًا برفق |
| 1017 | Today's planetary energy invites rest and reflection. This is not a day of weakness, but a sacred day to recharge your soul. | طاقة اليوم الكوكبية تدعو إلى الراحة والتأمّل. وليس هذا يوم ضعف، بل يوم لتجديد روحك. |
| 1018 | ⏰ When Energy Improves: | ⏰ حين تتحسّن الطاقة: |
| 1019 | 💫 Trust in divine timing. Everything comes in its perfect time. | 💫 ثق بتوقيت الله. فكل شيء يأتي في وقته. |
| 1020 | Favorable timing for steady progress. Good for teamwork, planning, and following through. | توقيت مناسب للتقدّم الثابت. جيد للعمل الجماعي والتخطيط والمتابعة. |
| 1021 | Perfect time for important actions! Your energy aligns beautifully with this hour. Take initiative. | وقت مثالي للأعمال المهمّة! طاقتك منسجمة مع هذه الساعة. بادر. |
| 1022 | Proceed with awareness. Good for routine tasks and preparation, but save major decisions for better timing. | تقدّم بوعي. جيد للمهامّ الروتينية والتحضير، لكن أجّل القرارات الكبرى لوقت أنسب. |
| 1023 | Time to rest and recharge. Avoid important decisions. Use this for reflection, journaling, or gentle activities. | وقت للراحة واستعادة النشاط. اجتنب القرارات المهمّة. واستعمله للتأمّل أو التدوين أو الأنشطة اللطيفة. |
| 1024 | Today's Timeline | الخطّ الزمني لليوم |
| 1025 | View 24h | عرض 24 ساعة |
| 1026 | ⚡ Moderate - Proceed with Awareness | ⚡ معتدل - تقدّم بوعي |
| 1027 | ✅ Good - Favorable Timing | ✅ جيد - توقيت مناسب |
| 1028 | ✨ Excellent - Perfect Time! | ✨ ممتاز - وقت مثالي! |
| 1029 | 👁️ View all 24 hours | 👁️ عرض الساعات الأربع والعشرين |
| 1030 | 💡 Quick Tip: | 💡 نصيحة سريعة: |
| 1031 | Challenging (0-39) | صعب (0-39) |
| 1032 | Visualization of your harmony with each planetary hour | تصوير انسجامك مع كل ساعة كوكبية |
| 1033 | Air Element - Represents thought, communication, and spirituality. Associated with Mercury and Jupiter. | عنصر الهواء - يمثّل الفكر والتواصل والروحانية. ويرتبط بعطارد والمشتري. |
| 1034 | Barakah | البركة |
| 1035 | Beauty - Divine beauty and grace. One of the two primary aspects of Allah's attributes (Jamāl and Jalāl). | الجمال - الجمال الإلهي واللطف. وهو أحد وجهي صفات الله الأساسيين (الجمال والجلال). |
| 1036 | Divine Blessing - Spiritual abundance and grace that comes from Allah. Increase in goodness beyond material measure. | البركة الإلهية - الوفرة الروحية والنعمة من الله. زيادة في الخير تتجاوز المقاييس المادية. |
| 1037 | Earth Element - Represents stability, manifestation, and practicality. Associated with Venus and Saturn. | عنصر التراب - يمثّل الثبات والتحقّق والعملية. ويرتبط بالزهرة وزحل. |
| 1038 | Intention - The sincere intention behind an action. In Islam, actions are judged by intentions. | النيّة - القصد الصادق وراء العمل. وفي الإسلام إنما الأعمال بالنيّات. |
| 1039 | Jupiter - Represents divine expansion, generosity, and wisdom. Associated with the Divine Name Al-Wāsi' (The All-Encompassing). | المشتري - يمثّل السعة والكرم والحكمة. ويرتبط باسم الواسع. |
| 1040 | Key Arabic terms and concepts with transliterations and explanations | المصطلحات العربية الأساسية مع النقل الحرفي والشرح |
| 1041 | Knowledge - Especially divine and sacred knowledge. A central concept in Islam emphasizing the pursuit of both worldly and spiritual understanding. | العلم - لا سيما العلم الشرعي. مفهوم محوري في الإسلام يحثّ على طلب الفهم الدنيوي والروحي معًا. |
| 1042 | Lunar Mansions - The 28 stations of the Moon through its monthly cycle. Each has specific spiritual significance and favorable/unfavorable activities. | المنازل القمرية - منازل القمر الثماني والعشرون في دورته الشهرية. ولكل منها دلالة روحية وأنشطة مناسبة وغير مناسبة. |
| 1043 | Mars - Represents divine strength, courage, and action. Associated with the Divine Name Al-Qawiyy (The Strong). | المريخ - يمثّل القوة والشجاعة والعمل. ويرتبط باسم القوي. |
| 1044 | Mercury - Represents divine knowledge, communication, and mental clarity. Associated with the Divine Name Al-'Alīm (The All-Knowing). | عطارد - يمثّل العلم والتواصل ووضوح الذهن. ويرتبط باسم العليم. |
| 1045 | Niyyah | النيّة |
| 1046 | Patience - Endurance and perseverance in face of difficulty. A fundamental virtue in Islam, especially associated with Saturn. | الصبر - التحمّل والمثابرة أمام الشدائد. فضيلة أساسية في الإسلام، ترتبط خصوصًا بزحل. |
| 1047 | Planetary Hours - The ancient system of dividing day and night into 24 unequal hours, each ruled by a classical planet. | الساعات الكوكبية - النظام القديم لتقسيم النهار والليل إلى 24 ساعة غير متساوية، يحكم كلًّا منها كوكب كلاسيكي. |
| 1048 | Reliance on Allah - Complete trust and dependence on Allah while taking appropriate worldly action. | التوكّل على الله - الثقة التامّة بالله والاعتماد عليه مع الأخذ بالأسباب. |
| 1049 | Remembrance - The practice of remembering and invoking Allah, often through repetition of Divine Names or Quranic phrases. | الذكر - ممارسة ذكر الله ودعائه، غالبًا بتكرار الأسماء الحسنى أو العبارات القرآنية. |
| 1050 | Saturn - Represents divine wisdom, patience, and structure. Associated with the Divine Name Al-Ḥakīm (The Wise). | زحل - يمثّل الحكمة والصبر والبنية. ويرتبط باسم الحكيم. |
| 1051 | Spiritual Glossary | معجم المصطلحات الروحية |
| 1052 | Supplication - Personal prayer and petition to Allah. Can be optimized by choosing appropriate planetary hours. | الدعاء - مناجاة العبد ربّه وسؤاله. ويمكن تحرّي الساعات الكوكبية المناسبة له. |
| 1053 | Tawakkul | التوكّل |
| 1054 | The Light - One of the 99 Names of Allah. The source of all illumination and guidance. Associated with the Sun. | النور - من أسماء الله الحسنى. مصدر كل إنارة وهداية. ويرتبط بالشمس. |
| 1055 | The Moon - Represents divine mercy, intuition, and emotional wisdom. Associated with the Divine Name Al-Laṭīf (The Subtle). | القمر - يمثّل الرحمة والحدس والحكمة العاطفية. ويرتبط باسم اللطيف. |
| 1056 | The Subtle - One of the 99 Names of Allah. The Gentle, Kind, and All-Perceiving. Associated with the Moon. | اللطيف - من أسماء الله الحسنى: الرفيق بعباده، الخبير بدقائق الأمور. ويرتبط بالقمر. |
| 1057 | The Sun - Represents divine light, leadership, and consciousness. Associated with the Divine Name An-Nūr (The Light). | الشمس - تمثّل النور والقيادة والوعي. وترتبط باسم النور. |
| 1058 | Venus - Represents divine love, beauty, and harmony. Associated with the Divine Name Al-Wadūd (The Loving). | الزهرة - تمثّل المحبّة والجمال والانسجام. وترتبط باسم الودود. |
| 1059 | Water Element - Represents emotions, intuition, and purification. Associated with the Moon. | عنصر الماء - يمثّل العاطفة والحدس والطهارة. ويرتبط بالقمر. |
| 1060 | Wisdom - Deep understanding combined with right action. The ability to apply knowledge appropriately. | الحكمة - الفهم العميق مع العمل الصحيح. والقدرة على وضع العلم في موضعه. |
| 1061 | Absolutely! Many traditional practices complement planetary hours: performing specific dhikr during aligned hours, timing optional prayers (nafl), scheduling spiritual retreats, choosing times for Quran study, and planning charitable activities. Integration enhances, not replaces, core Islamic practices. | بالتأكيد! كثير من الممارسات التقليدية تُكمّل الساعات الكوكبية: الذكر في الساعات المناسبة، وتوقيت النوافل، وترتيب الخلوات، واختيار أوقات تدبّر القرآن، والتخطيط لأعمال البرّ. والدمج يُثري الشعائر الأساسية ولا يحلّ محلّها. |
| 1062 | Ahmad al-Būnī (d. 1225) wrote extensively about the spiritual significance of planetary hours in his famous work "Shams al-Maʿārif" (The Sun of Knowledge). He connected each planet with specific Divine Names and taught methods for spiritual practice aligned with planetary influences. His work remains influential in Islamic esotericism today. | كتب أحمد البوني (ت. 622هـ/1225م) كثيرًا عن الدلالة الروحية للساعات الكوكبية في كتابه الشهير «شمس المعارف». وربط كل كوكب بأسماء حسنى معيّنة، وعلّم طرقًا للممارسة الروحية الموافقة لصلات الكواكب. ولا يزال لعمله أثر في التراث الباطني الإسلامي اليوم. |
| 1063 | Al-Būnī and Shams al-Maʿārif | البوني و«شمس المعارف» |
| 1064 | Are planetary hours the same as clock hours? | هل الساعات الكوكبية مثل ساعات الساعة؟ |
| 1065 | Can I combine planetary hours with other Islamic practices? | هل يمكنني الجمع بين الساعات الكوكبية وممارسات إسلامية أخرى؟ |
| 1066 | Classical Islamic scholars like Al-Būnī and Ibn ʿArabī integrated planetary knowledge with Islamic spirituality. The key is intention (niyyah): using this knowledge to optimize worship and beneficial activities is acceptable, while believing planets have independent power apart from Allah is prohibited (shirk). Always maintain proper Islamic creed (ʿaqīdah). | جمع علماء مسلمون كلاسيكيون مثل البوني وابن عربي بين المعرفة الكوكبية والروحانية الإسلامية. والمدار على النيّة: فاستعمال هذه المعرفة لتحسين العبادة والأعمال النافعة مقبول، أما اعتقاد أن للكواكب قوة مستقلة عن الله فشرك محرّم. وحافظ دائمًا على العقيدة الصحيحة. |
| 1067 | Do I need to follow planetary hours strictly? | هل يجب أن ألتزم بالساعات الكوكبية التزامًا صارمًا؟ |
| 1068 | Don't worry! The most important factors are sincere intention, proper action, and trust in Allah (tawakkul). Planetary hours provide optimization, not limitation. If you must act during an "unfavorable" hour, proceed with bismillah (in Allah's name) and rely on divine guidance. | لا تقلق! أهمّ العوامل: النيّة الصادقة، والعمل الصحيح، والتوكّل على الله. فالساعات الكوكبية تحسينٌ لا تقييد. وإن اضطررت إلى العمل في ساعة «غير مناسبة» فابدأ باسم الله واعتمد على هدايته. |
| 1069 | Each day is ruled by a planet: Sunday (Sun), Monday (Moon), Tuesday (Mars), Wednesday (Mercury), Thursday (Jupiter), Friday (Venus), Saturday (Saturn). The first planetary hour of each day matches its ruling planet, creating a harmonic resonance for that day's energy. | لكل يوم كوكب حاكم: الأحد (الشمس)، الاثنين (القمر)، الثلاثاء (المريخ)، الأربعاء (عطارد)، الخميس (المشتري)، الجمعة (الزهرة)، السبت (زحل). وأول ساعة كوكبية في كل يوم توافق كوكبه الحاكم، فيتناغم طابع ذلك اليوم. |
| 1070 | Each planet reflects specific attributes of Allah found in His 99 Beautiful Names (Asmāʾ Allāh al-Ḥusnā). For example, the Sun reflects An-Nūr (The Light), and the Moon reflects Al-Laṭīf (The Subtle). Reciting these names during corresponding planetary hours can deepen spiritual connection. | كل كوكب يذكّر بصفات من صفات الله الواردة في أسمائه الحسنى. فالشمس تذكّر بالنور، والقمر باللطيف. وذكر هذه الأسماء في الساعات الكوكبية الموافقة قد يعمّق الصلة الروحية. |
| 1071 | Frequently Asked Questions | الأسئلة الشائعة |
| 1072 | How do planetary hours relate to Divine Names? | ما صلة الساعات الكوكبية بالأسماء الحسنى؟ |
| 1073 | In Islamic tradition, the seven classical "planets" include the Sun and Moon (luminaries) along with Mercury, Venus, Mars, Jupiter, and Saturn. Each represents specific divine qualities (reflected in the 99 Names of Allah) and governs particular aspects of life and spiritual practice. | في التراث الإسلامي تشمل «الكواكب» السبعة الكلاسيكية الشمس والقمر (النيّرين) مع عطارد والزهرة والمريخ والمشتري وزحل. وكلٌّ منها يذكّر بصفات (تنعكس في الأسماء الحسنى) ويرتبط بجوانب من الحياة والممارسة الروحية. |
| 1074 | Introduction to Planetary Hours | مقدّمة إلى الساعات الكوكبية |
| 1075 | Is using planetary hours permissible in Islam? | هل استعمال الساعات الكوكبية جائز في الإسلام؟ |
| 1076 | Islamic scholars made tremendous contributions to astronomy during the Golden Age of Islam (8th-14th centuries). Great astronomers like Al-Battani, Ibn al-Haytham, and Nasir al-Din al-Tusi refined planetary calculations and integrated them with spiritual practice. The concept of planetary hours (Sāʿāt al-Falakiyya) became part of Islamic spiritual science. | قدّم العلماء المسلمون إسهامات عظيمة في علم الفلك في العصر الذهبي للإسلام (القرن الثامن إلى الرابع عشر الميلادي). وقد أتقن فلكيون كبار كالبتاني وابن الهيثم ونصير الدين الطوسي الحسابات الكوكبية. وصار مفهوم الساعات الفلكية جزءًا من العلوم الروحية الإسلامية. |
| 1077 | No. Planetary hours are "unequal hours" based on sunrise/sunset, so they vary in length. A summer day hour might be 75 minutes, while a winter day hour might be 45 minutes. Clock hours are always 60 minutes. Our app shows you the exact times for each planetary hour. | لا. الساعات الكوكبية «ساعات زمانية» مبنية على الشروق والغروب، فيختلف طولها. فقد تكون ساعة النهار في الصيف 75 دقيقة، وفي الشتاء 45 دقيقة، بينما ساعة الساعة دائمًا 60 دقيقة. ويعرض لك تطبيقنا الأوقات الدقيقة لكل ساعة كوكبية. |
| 1078 | No. Planetary hours are a spiritual tool, not an obligation. The five daily prayers (salat) are performed at their prescribed times regardless of planetary hours. Use this knowledge as supplementary guidance for optional activities and spiritual practices, not as a rigid requirement. | لا. الساعات الكوكبية أداة روحية لا واجب. فالصلوات الخمس تُؤدّى في أوقاتها المشروعة بصرف النظر عن الساعات الكوكبية. استعمل هذه المعرفة إرشادًا مكمّلًا للأنشطة الاختيارية والممارسات الروحية، لا شرطًا صارمًا. |
| 1079 | Planetary Sequence | التسلسل الكوكبي |
| 1080 | Planetary hours are ancient divisions of time based on the classical seven planets (Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn). Each hour of the day and night is ruled by one of these planets, cycling in a specific order. This system has been used for centuries in Islamic spiritual traditions to optimize activities according to celestial influences. | الساعات الكوكبية تقسيمات قديمة للوقت مبنية على الكواكب السبعة الكلاسيكية (الشمس، القمر، عطارد، الزهرة، المريخ، المشتري، زحل). يحكم كلَّ ساعة من النهار والليل أحدُ هذه الكواكب في ترتيب معيّن. وقد استُعمل هذا النظام قرونًا في التراث الروحي الإسلامي لتحرّي الأوقات المناسبة للأعمال. |
| 1081 | Sufi orders have long used planetary hours for spiritual exercises. Different tariqas (spiritual paths) developed specific practices: certain dhikr (remembrance) during particular planetary hours, meditation aligned with celestial rhythms, and timing of spiritual retreats (khalwa) according to planetary influences. | استعملت الطرق الصوفية الساعات الكوكبية في الرياضات الروحية زمنًا طويلًا. وطوّرت الطرق المختلفة ممارسات معيّنة: أذكارًا في ساعات كوكبية محدّدة، وتأمّلًا موافقًا للإيقاعات السماوية، وتوقيت الخلوات. |
| 1082 | The great Sufi master Ibn ʿArabī (1165-1240) developed a comprehensive cosmology integrating planetary spheres with spiritual stations (maqāmāt). In his "Futūḥāt al-Makkiyya" (Meccan Illuminations), he explained how each planet corresponds to prophetic qualities and Divine Names, creating a bridge between astronomy and spirituality. | وضع الشيخ الأكبر ابن عربي (560-638هـ / 1165-1240م) رؤية كونية شاملة تربط الأفلاك الكوكبية بالمقامات الروحية. وفي «الفتوحات المكية» بيّن كيف يناسب كلُّ فلك صفاتٍ نبوية وأسماءً حسنى، فجعل جسرًا بين الفلك والروح. |
| 1083 | This knowledge is a spiritual tool to optimize beneficial activities. It does not replace core Islamic obligations (fard) or replace reliance on Allah (tawakkul). Always maintain proper Islamic creed (aqīdah) and consult knowledgeable scholars for guidance. | هذه المعرفة أداة روحية لتحسين الأعمال النافعة. ولا تحلّ محلّ الفرائض ولا محلّ التوكّل على الله. وحافظ دائمًا على العقيدة الصحيحة، وارجع إلى أهل العلم. |
| 1084 | To calculate planetary hours: 1) Determine sunrise and sunset times for your location, 2) Divide daylight into 12 equal parts, 3) Divide nighttime into 12 equal parts, 4) Apply the planetary sequence starting with the day's ruler. Our app does this automatically using precise astronomical calculations. | لحساب الساعات الكوكبية: 1) حدّد وقتي الشروق والغروب لموقعك، 2) اقسم النهار إلى 12 جزءًا متساويًا، 3) اقسم الليل إلى 12 جزءًا متساويًا، 4) طبّق التسلسل الكوكبي بدءًا بحاكم اليوم. ويفعل تطبيقنا ذلك آليًا بحسابات فلكية دقيقة. |
| 1085 | Traditional Sufi Practice | الممارسة الصوفية التقليدية |
| 1086 | Understanding planetary hours helps align daily activities with cosmic rhythms, enhancing spiritual practices and improving outcomes. This knowledge allows practitioners to choose optimal times for prayer, study, business, healing, and other important activities according to traditional Islamic wisdom. | فهم الساعات الكوكبية يعين على مواءمة الأنشطة اليومية مع الإيقاعات الكونية، فيُثري الممارسات الروحية. وتتيح هذه المعرفة اختيار أوقات مناسبة للدعاء والدراسة والتجارة والتداوي وغيرها من الأعمال المهمّة وفق الحكمة الإسلامية التقليدية. |
| 1087 | What Are Planetary Hours? | ما الساعات الكوكبية؟ |
| 1088 | What if I can't perform activities during "favorable" hours? | ماذا لو لم أستطع العمل في الساعات «المناسبة»؟ |
| 1089 | Calculating prayer times... | جارٍ حساب مواقيت الصلاة... |
| 1090 | Based on: 33 (base), 66 (double), 99 (Ḥusnā), | بناءً على: 33 (الأساس)، 66 (الضعف)، 99 (الحسنى)، |
| 1091 | Copy JSON | نسخ JSON |
| 1092 | Counts: | الأعداد: |
| 1093 | Educational & Traditional: | تعليمي وتقليدي: |
| 1094 | Educational display only × Sequential grid starting from Kabīr ( | عرض تعليمي فقط × شبكة متتابعة تبدأ من الكبير ( |
| 1095 | Element Distribution: | توزيع العناصر: |
| 1096 | Exact match: | تطابق تام: |
| 1097 | Magic Grid | الوفق |
| 1098 | Per-Letter Values: | قيم كل حرف: |
| 1099 | Reflections & Guidance | تأمّلات وإرشاد |
| 1100 | Root | الجذر |
| 1101 | Root: | الجذر: |
| 1102 | Signature Sequence (Digital Roots): | تسلسل البصمة (الجذور الرقمية): |
| 1103 | Suggested Counts: | الأعداد المقترحة: |
| 1104 | This analysis is for cultural exploration and reflection only. Not for predictions, rulings, medical, or financial decisions. Always consult qualified scholars for religious guidance. | هذا التحليل للاستكشاف الثقافي والتأمّل فقط. ليس للتنبّؤ ولا للفتوى ولا للقرارات الطبية أو المالية. وارجع دائمًا إلى أهل العلم المؤهّلين في المسائل الشرعية. |
| 1105 | Um Ḥadad (Combined with Mother) | أمّ الحدد (مع اسم الأم) |
| 1106 | Ḥadath (÷4) | الحدث (÷4) |
| 1107 | Balance by scheduling gentle breaks. | وازن بأخذ فترات راحة لطيفة. |
| 1108 | Channel your energy into focused practice. | وجّه طاقتك إلى ممارسة مركّزة. |
| 1109 | Clarity and discernment | الوضوح والتمييز |
| 1110 | Divine signs | آيات الله |
| 1111 | Dusk | الغسق |
| 1112 | Flow and adaptation | الانسياب والتكيّف |
| 1113 | Flowing, Adaptive | منساب، متكيّف |
| 1114 | Foundation and sustenance | الأساس والرزق |
| 1115 | Grounding, Stable | متجذّر، ثابت |
| 1116 | Intellectual, Communicative | فكريّ، تواصليّ |
| 1117 | Maintain equilibrium through regular reflection. | حافظ على التوازن بالتأمّل المنتظم. |
| 1118 | Noon | الظهر |
| 1119 | Perseverance | المثابرة |
| 1120 | Purification and renewal | الطهارة والتجدّد |
| 1121 | Stability and practical grounding. | الثبات والتجذّر العملي. |
| 1122 | The Firm | المتين |
| 1123 | Transformative drive and creativity. | دافع محوِّل وإبداع. |
| 1124 | Transformative, Initiating | محوِّل، مبادر |
| 1125 | Verify before acting on information | تحقّق قبل العمل بالمعلومة |
| 1126 | Abjad: Arabic Numerical System | الأبجد: النظام العددي العربي |
| 1127 | Asceticism | الزهد |
| 1128 | Calculating Destiny Number | حساب عدد المسار |
| 1129 | Calculating Personality Number | حساب عدد الشخصية |
| 1130 | Calculating Soul Urge Number | حساب عدد رغبة الروح |
| 1131 | Calculations | الحسابات |
| 1132 | Connected ʿIlm al-Ḥurūf to Sufi stations and cosmology | ربط علم الحروف بالمقامات الصوفية والرؤية الكونية |
| 1133 | Core Principles: | المبادئ الأساسية: |
| 1134 | Destiny number is calculated from all letters in your full name (vowels + consonants). This represents your overall life purpose and the work you came to accomplish. | يُحسب عدد المسار من كل حروف اسمك الكامل (العلّة والصامتة). ويمثّل غاية حياتك العامة والعمل الذي جئت لتؤدّيه. |
| 1135 | Discover the spiritual wisdom encoded in numbers | اكتشف الحكمة الروحية المكنونة في الأعداد |
| 1136 | Discussed contemplation of numerical mysteries as path to divine knowledge | تناول التأمّل في أسرار الأعداد طريقًا إلى المعرفة بالله |
| 1137 | Divine Contentment | الرضا |
| 1138 | Divine Love | المحبّة الإلهية |
| 1139 | Each Arabic letter has a numerical value (Abjad system) | لكل حرف عربي قيمة عددية (نظام الأبجد) |
| 1140 | Faqr | الفقر |
| 1141 | Foundational work on ʿIlm al-Ḥurūf, exploring spiritual powers of Arabic letters and numbers | عمل تأسيسي في علم الحروف يستكشف خواصّ الحروف والأعداد العربية الروحية |
| 1142 | Historical Scholars and Their Works | علماء التراث ومؤلّفاتهم |
| 1143 | How to Calculate Your Life Path Number | كيف تحسب عدد مسار حياتك |
| 1144 | In Islamic Sufism, life path numbers correspond to maqāmāt (spiritual stations) on the path to Allah. Each number represents a unique lesson and quality to develop. | في التصوّف الإسلامي تُقابل أعداد مسار الحياة المقامات الروحية في الطريق إلى الله. وكل عدد يمثّل درسًا وصفة ينبغي تنميتها. |
| 1145 | Is numerology halal in Islam? | هل علم العدد حلال في الإسلام؟ |
| 1146 | Karmic debts are special numbers appearing in your calculations indicating important life lessons to be learned. In Islamic terms, these are ibtilāʾāt (trials) that teach important spiritual qualities like patience, humility, and trust. They are opportunities for growth, not punishments. | الديون الكارمية أعداد خاصة تظهر في حساباتك تشير إلى دروس مهمّة في الحياة. وبالمصطلح الإسلامي هي ابتلاءات تعلّم صفات روحية مهمّة كالصبر والتواضع والتوكّل. وهي فرص للنموّ لا عقوبات. |
| 1147 | Life Path (from birth date) represents your overall mission and spiritual path - what you came to learn and become. Soul Urge (from name vowels) reveals your deep inner desires - what motivates and fulfills you at a soul level. | مسار الحياة (من تاريخ الميلاد) يمثّل رسالتك العامة وطريقك الروحي — ما جئت لتتعلّمه وتصيره. ورغبة الروح (من حروف العلّة في الاسم) تكشف رغباتك الباطنة العميقة — ما يحرّكك ويُرضيك على مستوى الروح. |
| 1148 | Life Path Learning Center | مركز تعلّم مسار الحياة |
| 1149 | Life Path Number: 4 | عدد مسار الحياة: 4 |
| 1150 | Life Path number is calculated from your birth date by reducing each component (day, month, year) to a single digit, then adding them together. | يُحسب عدد مسار الحياة من تاريخ ميلادك باختزال كل جزء (اليوم، الشهر، السنة) إلى رقم واحد، ثم جمعها. |
| 1151 | Life Path numbers are an ancient spiritual system revealing the meaning and purpose encoded in your birth date and name. In Islamic traditions, this is known as ʿIlm al-Ḥurūf - the science of letters and numbers connecting numerical values to spiritual truths. | أعداد مسار الحياة نظام روحي قديم يتأمّل المعنى والغاية في تاريخ ميلادك واسمك. وفي التراث الإسلامي يُعرف هذا بعلم الحروف — علم الحروف والأعداد الذي يربط القيم العددية بالحقائق الروحية. |
| 1152 | Life moves in 9-year cycles, each carrying a unique theme and lessons. Understanding your current cycle helps you align your actions with the natural rhythm of your spiritual growth. | تسير الحياة في دورات من تسع سنوات، لكل منها موضوعها ودروسها. وفهم دورتك الحالية يعينك على مواءمة أعمالك مع الإيقاع الطبيعي لنموّك الروحي. |
| 1153 | Life moves in repeating 9-year cycles, each carrying a unique theme. Years 1-3 are for foundation (building groundwork), 4-6 for growth (expansion), and 7-9 for completion (harvest and release). After the 9th year, a new cycle begins. Your current personal year is calculated by adding birth day and month + current year. | تسير الحياة في دورات متكرّرة من تسع سنوات، لكل منها موضوعها. فالسنوات 1-3 للتأسيس، و4-6 للنموّ، و7-9 للاكتمال (الحصاد والتخلّي). وبعد السنة التاسعة تبدأ دورة جديدة. وتُحسب سنتك الشخصية الحالية بجمع يوم الميلاد وشهره مع السنة الحالية. |
| 1154 | Manifesting spiritual dreams | تحقيق الأحلام الروحية |
| 1155 | Master Numbers (11, 22, 33) | الأعداد الرئيسية (11، 22، 33) |
| 1156 | Master numbers are double-digit numbers (11, 22, 33) carrying heightened spiritual energy. They are not reduced to a single digit because they represent amplified power and deeper spiritual responsibility. | الأعداد الرئيسية أعداد من رقمين (11، 22، 33) تحمل طاقة روحية مضاعفة. ولا تُختزل إلى رقم واحد لأنها تمثّل قوة مضاعفة ومسؤولية روحية أعمق. |
| 1157 | Master numbers carry heightened spiritual energy and greater responsibility. If you have a master number, you have higher spiritual potential but also greater challenges. You can work at the double-digit level (11, 22, 33) or the reduced single-digit level (2, 4, 6) depending on your spiritual growth. | تحمل الأعداد الرئيسية طاقة روحية مضاعفة ومسؤولية أكبر. فإن كان لك عدد رئيسي فلك إمكانات روحية أعلى وتحدّيات أكبر. ويمكنك العمل على مستوى الرقمين (11، 22، 33) أو المستوى المختزل (2، 4، 6) بحسب نموّك الروحي. |
| 1158 | Names and dates reveal spiritual patterns | الأسماء والتواريخ تكشف أنماطًا روحية |
| 1159 | Numbers carry spiritual symbolism and connect to Divine Names | للأعداد رمزية روحية وصلة بالأسماء الحسنى |
| 1160 | Numerology is a tool for spiritual reflection, not a substitute for reliance on Allah. Use it to contemplate divine creation and wisdom. | علم العدد أداة للتأمّل الروحي، لا بديل عن التوكّل على الله. استعمله للتأمّل في خلق الله وحكمته. |
| 1161 | Repentance | التوبة |
| 1162 | Scrupulousness | الورع |
| 1163 | Shukr | الشكر |
| 1164 | Soul Urge number is calculated from the vowels in your full name. In Arabic, this includes ḥarakāt (diacritics) and elongation letters. | يُحسب عدد رغبة الروح من حروف العلّة في اسمك الكامل. وفي العربية يشمل ذلك الحركات وحروف المدّ. |
| 1165 | Spiritual Poverty | الفقر إلى الله |
| 1166 | Spiritual Stations and Numbers | المقامات الروحية والأعداد |
| 1167 | Spiritual insight and unveiling | البصيرة الروحية والكشف |
| 1168 | Tawbah | التوبة |
| 1169 | The Abjad system assigns each Arabic letter a numerical value. This is used to calculate the value of names, words, and dates, revealing their hidden spiritual meanings. | يجعل نظام الأبجد لكل حرف عربي قيمة عددية. ويُستعمل لحساب قيم الأسماء والكلمات والتواريخ وتأمّل معانيها الروحية. |
| 1170 | The Four Core Numbers: | الأعداد الأساسية الأربعة: |
| 1171 | The four elements (Fire, Water, Air, Earth) correspond to numbers | العناصر الأربعة (النار، الماء، الهواء، التراب) تقابل أعدادًا |
| 1172 | Trust in Allah | التوكّل على الله |
| 1177 | Universal love and healing | المحبّة الشاملة والشفاء |
| 1178 | Vowels: ُ (u) + َ (a) + َ (a) → Calculate their Abjad values | الحركات: ُ (ضمّة) + َ (فتحة) + َ (فتحة) ← احسب قيمها في الأبجد |
| 1179 | What are karmic debts (13, 14, 16, 19)? | ما الديون الكارمية (13، 14، 16، 19)؟ |
| 1180 | What is the difference between Life Path and Soul Urge? | ما الفرق بين مسار الحياة ورغبة الروح؟ |
| 1181 | Your Life Path number (from birth date) never changes - it's fixed for life. However, your name numbers can change if you legally change your name or adopt a new name (like after marriage or spiritual transformation). Your personal year and month change annually/monthly, bringing new themes and lessons. | عدد مسار حياتك (من تاريخ الميلاد) لا يتغيّر — فهو ثابت مدى الحياة. أما أعداد اسمك فقد تتغيّر إن غيّرت اسمك رسميًا أو اتّخذت اسمًا جديدًا (كما بعد الزواج أو تحوّل روحي). وسنتك وشهرك الشخصيان يتغيّران سنويًا وشهريًا، بموضوعات ودروس جديدة. |
| 1182 | Your deepest desires and what fulfills you spiritually | أعمق رغباتك وما يُرضيك روحيًا |
| 1183 | Your spiritual essence and life mission | جوهرك الروحي ورسالة حياتك |
| 1184 | Zuhd | الزهد |
| 1185 | ʿIlm al-Ḥurūf has a long history in Islamic scholarship, studied by scholars like Imam al-Ghazālī and Ibn ʿArabī. When used as a tool for spiritual reflection (not fortune-telling), it is acceptable as a study of divine patterns in creation. Always remember: Only Allah knows the unseen, and numbers are tools for contemplation, not divination. | لعلم الحروف تاريخ طويل في التراث العلمي الإسلامي، وتناوله علماء مثل الإمام الغزالي وابن عربي. وحين يُستعمل أداةً للتأمّل الروحي (لا للعرافة) فهو دراسة لأنماط الحكمة في الخلق. وتذكّر دائمًا: لا يعلم الغيب إلا الله، والأعداد أدوات للتأمّل لا للكهانة. |
| 1186 | ʿIlm al-Ḥurūf is a traditional Islamic science exploring the spiritual meanings encoded in Arabic letters and numbers. It dates back to the Islamic Golden Age and is associated with great scholars like Imam al-Ghazālī, Ibn ʿArabī, and al-Būnī. | علم الحروف علم إسلامي تقليدي يستكشف المعاني الروحية في الحروف والأعداد العربية. ويعود إلى العصر الذهبي للإسلام، ويرتبط بأعلام كالإمام الغزالي وابن عربي والبوني. |
| 1187 | ʿIlm al-Ḥurūf: Islamic Science of Letters and Numbers | علم الحروف: العلم الإسلامي للحروف والأعداد |
| 1188 | A number from 1-9 calculated for each calendar year, indicating the theme and energy of that year in your personal 9-year cycle. Changes annually. | عدد من 1 إلى 9 يُحسب لكل سنة ميلادية، يشير إلى موضوع تلك السنة وطاقتها في دورتك الشخصية ذات التسع سنوات. ويتغيّر سنويًا. |
| 1189 | Abuse of freedom - teaching moderation and balance. The lesson is to use freedom responsibly, avoid excess, and find spiritual grounding through discipline. | إساءة استعمال الحرية — درسٌ في الاعتدال والتوازن. والدرس أن تستعمل الحرية بمسؤولية، وتجتنب الإفراط، وتجد التجذّر الروحي بالانضباط. |
| 1190 | Abuse of love - teaching humility and ego dissolution. The lesson is to love selflessly, release ego attachments, and serve with pure intentions. | إساءة استعمال المحبّة — درسٌ في التواضع وتذويب الأنا. والدرس أن تحبّ بإيثار، وتتخلّى عن تعلّقات الأنا، وتخدم بنيّة خالصة. |
| 1191 | Abuse of power - teaching independence without arrogance. The lesson is to stand alone spiritually while serving others, balancing power with compassion. | إساءة استعمال السلطة — درسٌ في الاستقلال دون كِبر. والدرس أن تقف وحدك روحيًا مع خدمة الآخرين، موازنًا القوة بالرحمة. |
| 1192 | Associated with numbers 1, 3, 9 - represents passion, creativity, inspiration, leadership, and spiritual drive. Fire element brings transformative energy. | يرتبط بالأعداد 1 و3 و9 — ويمثّل الشغف والإبداع والإلهام والقيادة والدافع الروحي. وعنصر النار يجلب طاقة محوِّلة. |
| 1193 | Associated with numbers 2, 5 - represents emotions, intuition, healing, adaptability, and spiritual flow. Water element brings emotional depth. | يرتبط بالعددين 2 و5 — ويمثّل العاطفة والحدس والشفاء والتكيّف والانسياب الروحي. وعنصر الماء يجلب عمقًا عاطفيًا. |
| 1194 | Associated with numbers 3, 5, 7 - represents intellect, communication, freedom, wisdom, and spiritual insight. Air element brings mental clarity. | يرتبط بالأعداد 3 و5 و7 — ويمثّل العقل والتواصل والحرية والحكمة والبصيرة الروحية. وعنصر الهواء يجلب وضوحًا ذهنيًا. |
| 1195 | Associated with numbers 4, 6, 8 - represents stability, practicality, material manifestation, grounding, and physical reality. Earth element brings structure. | يرتبط بالأعداد 4 و6 و8 — ويمثّل الثبات والعملية والتحقّق المادي والتجذّر والواقع المحسوس. وعنصر التراب يجلب البنية. |
| 1196 | Calculated from all letters in your full name, this number reveals your life's purpose, the work you came to accomplish, and your overarching spiritual mission. | يُحسب من كل حروف اسمك الكامل، ويكشف غاية حياتك والعمل الذي جئت لتؤدّيه ورسالتك الروحية الشاملة. |
| 1197 | Calculated from the consonants in your name, this number represents how others perceive you, your outer personality, and the first impression you make. | يُحسب من الحروف الصامتة في اسمك، ويمثّل كيف يراك الآخرون وشخصيتك الظاهرة والانطباع الأول الذي تتركه. |
| 1198 | Calculated from the vowels in your name, this number reveals your heart's deepest desires, what motivates you at a soul level, and what truly fulfills you spiritually. | يُحسب من حروف العلّة في اسمك، ويكشف أعمق رغبات قلبك وما يحرّكك على مستوى الروح وما يُرضيك روحيًا حقًّا. |
| 1199 | Comprehensive dictionary of numerology terms | معجم شامل لمصطلحات علم العدد |
| 1200 | Core Numbers | الأعداد الأساسية |
| 1201 | Karmic Debts | الديون الكارمية |
| 1202 | Life Path Glossary | معجم مسار الحياة |
| 1203 | No terms found | لم يُعثر على مصطلحات |
| 1204 | Obstacles and lessons corresponding to each pinnacle period. Challenges are opportunities for growth, teaching resilience and spiritual development. | العقبات والدروس الموافقة لكل مرحلة قمّة. والتحدّيات فرص للنموّ تعلّم الصمود والنموّ الروحي. |
| 1205 | Raqm al-Qimmah | رقم القمّة |
| 1206 | Related Terms: | مصطلحات ذات صلة: |
| 1207 | Represents laziness and negativity from past patterns. The lesson is to transform through hard work, discipline, and positive focus. Overcome through perseverance. | يمثّل الكسل والسلبية من أنماط سابقة. والدرس هو التحوّل بالعمل الجادّ والانضباط والتركيز الإيجابي، والتغلّب بالمثابرة. |
| 1208 | Search for a term... | ابحث عن مصطلح... |
| 1209 | Spiritual station in Sufi tradition. Each life path number corresponds to a maqām representing a stage on the journey to Allah (e.g., Tawbah, Sabr, Maḥabbah). | المقام الروحي في التراث الصوفي. كل عدد من أعداد مسار الحياة يقابل مقامًا يمثّل مرحلة في الطريق إلى الله (مثل التوبة والصبر والمحبّة). |
| 1210 | The Illuminator - A master number carrying heightened spiritual energy. Represents intuition, spiritual insight, and the ability to inspire others through visionary leadership. | المنير — عدد رئيسي يحمل طاقة روحية مضاعفة. يمثّل الحدس والبصيرة الروحية والقدرة على إلهام الآخرين بقيادة ذات رؤية. |
| 1211 | The Islamic science of letters and numbers, connecting numerical values to spiritual truths. Studied by classical scholars like al-Būnī and Ibn ʿArabī. | العلم الإسلامي للحروف والأعداد، يربط القيم العددية بالحقائق الروحية. وتناوله علماء كلاسيكيون كالبوني وابن عربي. |
| 1212 | The Master Builder - Combines spiritual vision with practical manifestation. Represents the ability to turn dreams into reality and build lasting spiritual legacies. | البنّاء الأكبر — يجمع بين الرؤية الروحية والتحقّق العملي. يمثّل القدرة على تحويل الأحلام إلى واقع وبناء إرث روحي دائم. |
| 1213 | The Master Teacher - The highest master number, representing universal love, compassion, and the ability to heal and guide humanity toward spiritual unity. | المعلّم الأكبر — أعلى الأعداد الرئيسية، يمثّل المحبّة الشاملة والرحمة والقدرة على الشفاء وإرشاد الناس نحو الوحدة الروحية. |
| 1214 | The most important number in numerology, calculated from your birth date. It represents your spiritual essence, life mission, and the lessons you came to learn. | أهمّ عدد في علم العدد، ويُحسب من تاريخ ميلادك. يمثّل جوهرك الروحي ورسالة حياتك والدروس التي جئت لتتعلّمها. |
| 1215 | ʿUnṣur an-Nār | عنصر النار |
| 1216 | Abundance Practice | ممارسة الوفرة |
| 1217 | Act of Love | عمل محبّة |
| 1218 | Adaptability | التكيّف |
| 1219 | Architect | مهندس معماري |
| 1220 | Artist | فنّان |
| 1221 | Banker | مصرفي |
| 1222 | Beautify Home | تجميل البيت |
| 1223 | Beginning | البداية |
| 1224 | Builder | بنّاء |
| 1225 | Building Legacy | بناء الإرث |
| 1226 | CEO | رئيس تنفيذي |
| 1227 | Channel for divine guidance | قناة للهداية |
| 1228 | Collective Healing | شفاء جماعي |
| 1229 | Commit to consistent practice | التزم بممارسة منتظمة |
| 1230 | Complete a practical task | أنجز مهمّة عملية |
| 1231 | Complete cycles with grace | أتمّ الدورات بلطف |
| 1232 | Connect People | اجمع بين الناس |
| 1233 | Connect spiritual to material | اربط الروحي بالمادي |
| 1234 | Contemplate Quran or Sufi texts | تدبّر القرآن أو نصوص التصوّف |
| 1235 | Contemplate true spiritual freedom | تأمّل الحرية الروحية الحقّة |
| 1236 | Contemplation | التأمّل |
| 1237 | Counselor | مستشار |
| 1238 | Create balance and beauty | اصنع التوازن والجمال |
| 1239 | Create solid foundations | ابنِ أسسًا متينة |
| 1240 | Create something beautiful daily | اصنع شيئًا جميلًا كل يوم |
| 1241 | Create something each day | اصنع شيئًا كل يوم |
| 1242 | Create spaces for spiritual gathering | هيّئ أماكن للمجالس الروحية |
| 1243 | Daily Creativity | الإبداع اليومي |
| 1244 | Daily Healing | الشفاء اليومي |
| 1245 | Deep Spiritual Qualities | صفات روحية عميقة |
| 1246 | Dhikr of Completion | ذكر التمام |
| 1247 | Dhikr of Freedom | ذكر الحرية |
| 1248 | Dhikr of Joy | ذكر الفرح |
| 1249 | Dhikr of Love | ذكر المحبّة |
| 1250 | Dhikr of Mercy | ذكر الرحمة |
| 1251 | Dhikr of Perfect Love | ذكر المحبّة الكاملة |
| 1252 | Dhikr of Strength | ذكر القوة |
| 1253 | Dhikr of Unity | ذكر الوحدة |
| 1254 | Diplomat | دبلوماسي |
| 1255 | Discover the deep meanings of each life path number | اكتشف المعاني العميقة لكل عدد من أعداد مسار الحياة |
| 1256 | Dive into inner mysteries | تعمّق في الأسرار الباطنة |
| 1257 | Dream Journaling | تدوين الرؤى |
| 1258 | Duality | الثنائية |
| 1259 | Embracing Change | تقبّل التغيير |
| 1260 | Empire Builder | باني الإمبراطوريات |
| 1261 | Energy Healer | معالج بالطاقة |
| 1262 | Entrepreneur | رائد أعمال |
| 1263 | Explore infinite possibilities | استكشف الإمكانات اللامحدودة |
| 1264 | Express divine beauty | عبّر عن الجمال الإلهي |
| 1265 | Famous Archetypes | نماذج مشهورة |
| 1266 | Flow with divine change | انسجم مع تقلّب الأحوال بقدر الله |
| 1267 | Follow intuition in a decision | اتّبع حدسك في قرار |
| 1268 | Goal Setting | تحديد الأهداف |
| 1269 | Grand Building | البناء الكبير |
| 1270 | Grand Planning | التخطيط الكبير |
| 1271 | Guide | مرشد |
| 1272 | Heal others with divine love | اشفِ الآخرين بالمحبّة |
| 1273 | Healer | معالج |
| 1274 | Healing and Teaching | الشفاء والتعليم |
| 1275 | Help resolve a small conflict daily | ساعد في حلّ خلاف صغير كل يوم |
| 1276 | Help someone daily without expectation | ساعد أحدًا كل يوم دون انتظار مقابل |
| 1277 | Humanitarian Servant | خادم للإنسانية |
| 1278 | Humanitarian Work | العمل الإنساني |
| 1279 | Ideal Career Paths | المسارات المهنية المثالية |
| 1280 | Innovator | مبتكر |
| 1281 | Inspirational Teacher | معلّم ملهِم |
| 1282 | Inspiring Others | إلهام الآخرين |
| 1283 | Introduce two people who could collaborate | عرّف شخصين يمكنهما التعاون |
| 1284 | Intuition | الحدس |
| 1285 | Intuitive Practice | الممارسة الحدسية |
| 1286 | Journalist | صحفي |
| 1287 | Lead healing circles for community | قُد حلقات شفاء للمجتمع |
| 1288 | Lead with wisdom and integrity | قُد بحكمة ونزاهة |
| 1289 | Leader | قائد |
| 1290 | Leading with Power | القيادة بقوة |
| 1291 | Learn something new each week | تعلّم شيئًا جديدًا كل أسبوع |
| 1292 | Life Path Number Guide | دليل أعداد مسار الحياة |
| 1293 | Listen to inner guidance | أصغِ إلى الإرشاد الباطن |
| 1294 | Listening Practice | ممارسة الإصغاء |
| 1295 | Maintain a regular prayer schedule | حافظ على مواقيت صلاة منتظمة |
| 1296 | Maintain organized daily routine | حافظ على روتين يومي منظّم |
| 1297 | Manifest spiritual dreams | حقّق الأحلام الروحية |
| 1298 | Master Organizer | المنظّم الأكبر |
| 1299 | Master the material world | أتقِن العالم المادي |
| 1300 | Morning Affirmations | الأذكار الصباحية |
| 1301 | Morning Contemplation | التأمّل الصباحي |
| 1302 | Most Compatible With: | الأكثر توافقًا مع: |
| 1303 | Number 1 thrives when initiating new ventures. Start that project you've been postponing. | يزدهر العدد 1 حين يبتدئ مشاريع جديدة. ابدأ المشروع الذي تؤجّله. |
| 1304 | Number 11 seeks deep spiritual connection. You need a partner who understands your sensitivity and shares your spiritual journey. | يطلب العدد 11 صلة روحية عميقة. تحتاج إلى شريك يفهم حساسيتك ويشاركك رحلتك الروحية. |
| 1305 | Number 2 excels at bridge-building. Use your diplomacy to unite two opposing parties. | يتفوّق العدد 2 في بناء الجسور. استعمل دبلوماسيتك لجمع طرفين متخاصمين. |
| 1306 | Number 2 thrives in partnerships. You are a natural peacemaker, seeking harmony and deep connection in relationships. | يزدهر العدد 2 في الشراكات. أنت صانع سلام بطبعك، تطلب الانسجام والصلة العميقة في العلاقات. |
| 1307 | Number 22 builds for generations. Create institutions or projects that endure. | يبني العدد 22 للأجيال. أنشئ مؤسسات أو مشاريع تدوم. |
| 1308 | Number 22 builds lasting relationships with shared purpose. You need a partner who shares your grand vision and helps manifest it. | يبني العدد 22 علاقات دائمة بغاية مشتركة. تحتاج إلى شريك يشاركك رؤيتك الكبرى ويعينك على تحقيقها. |
| 1309 | Number 33 teaches with love. Heal through compassion and teach by example. | يعلّم العدد 33 بالمحبّة. اشفِ بالرحمة وعلّم بالقدوة. |
| 1310 | Number 4 excels at structuring. Create a system that lasts. | يتفوّق العدد 4 في التنظيم. اصنع نظامًا يدوم. |
| 1311 | Number 5 needs freedom in relationships. You are adventurous, needing a partner who loves new experiences and respects your need for space. | يحتاج العدد 5 إلى الحرية في العلاقات. أنت مغامر، تحتاج إلى شريك يحبّ التجارب الجديدة ويحترم حاجتك إلى المساحة. |
| 1312 | Number 5 thrives on variety. Explore new paths fearlessly. | يزدهر العدد 5 بالتنوّع. استكشف طرقًا جديدة دون خوف. |
| 1313 | Number 6 is nurturing and loving in relationships. You give generously, but beware of becoming overextended or controlling. | العدد 6 راعٍ محبّ في العلاقات. تعطي بسخاء، لكن احذر الإجهاد أو التحكّم. |
| 1314 | Number 6 shines in caregiving. Create a warm home or help those in need. | يتألّق العدد 6 في الرعاية. اصنع بيتًا دافئًا أو ساعد المحتاجين. |
| 1315 | Number 7 needs depth. Dive into spiritual or scientific studies. | يحتاج العدد 7 إلى العمق. تعمّق في الدراسات الروحية أو العلمية. |
| 1316 | Number 7 needs spiritual depth in relationships. You value alone time, but seek deep, meaningful connection. | يحتاج العدد 7 إلى عمق روحي في العلاقات. تقدّر وقت الخلوة، لكنك تطلب صلة عميقة ذات معنى. |
| 1317 | Number 9 completes cycles. Release what no longer serves and serve a greater cause. | يُتمّ العدد 9 الدورات. تخلَّ عمّا لم يعد نافعًا، واخدم قضية أكبر. |
| 1318 | Number 9 is compassionate and humanitarian in relationships. You give freely, but beware of losing yourself in service to others. | العدد 9 رحيم إنساني في العلاقات. تعطي بلا حساب، لكن احذر أن تفقد نفسك في خدمة الآخرين. |
| 1319 | Nurture and heal others | ارعَ الآخرين واشفِهم |
| 1320 | Nurturing Others | رعاية الآخرين |
| 1321 | Organized Schedule | جدول منظّم |
| 1322 | Project Manager | مدير مشروع |
| 1323 | Read spiritual text | اقرأ نصًا روحيًا |
| 1324 | Record dreams and spiritual visions | دوّن الرؤى والمنامات |
| 1325 | Related Concepts | مفاهيم ذات صلة |
| 1326 | Repeat "Al-Qawī Al-ʿAzīz" for strength | ردّد «يا قوي يا عزيز» للقوة |
| 1327 | Repeat "Al-Wadūd" for divine love | ردّد «يا ودود» للمحبّة |
| 1328 | Repeat "Ar-Raḥmān Ar-Raḥīm" for mercy | ردّد «يا رحمن يا رحيم» للرحمة |
| 1329 | Repeat "Lā ilāha illā Allāh" 100 times daily | ردّد «لا إله إلا الله» مئة مرّة يوميًا |
| 1330 | Sacred Text Study | دراسة النصوص الشرعية |
| 1331 | Salesperson | مندوب مبيعات |
| 1332 | Seek deep truth | اطلب الحقيقة العميقة |
| 1333 | Seeking Truth | طلب الحقيقة |
| 1334 | Select a Number: | اختر عددًا: |
| 1335 | Selfless Service | خدمة بإيثار |
| 1336 | Send healing energy to someone in need | ادعُ بالشفاء لمن يحتاج إليه |
| 1337 | Serve humanity with love | اخدم الناس بمحبّة |
| 1338 | Service to Others | خدمة الآخرين |
| 1339 | Serving Humanity | خدمة الإنسانية |
| 1340 | Set one clear goal for each day | حدّد هدفًا واضحًا لكل يوم |
| 1341 | Silent Meditation | تأمّل صامت |
| 1342 | Spiritual Advisor | ناصح روحي |
| 1343 | Spiritual Counselor | مرشد روحي |
| 1344 | Spiritual Leader | قائد روحي |
| 1345 | Spiritual Station | المقام الروحي |
| 1346 | Spiritual Study | دراسة روحية |
| 1347 | Spiritual Teacher | معلّم روحي |
| 1348 | Spread Joy | انشر الفرح |
| 1349 | Starting a Project | بدء مشروع |
| 1350 | Structured Routine | روتين منظّم |
| 1351 | Systematic Building | بناء منهجي |
| 1352 | Tawhid | التوحيد |
| 1353 | Teach spiritual truths | علّم الحقائق الروحية |
| 1354 | Thank Allah for blessings with joy | احمد الله على النعم بفرح |
| 1355 | The One is the origin of all numbers, as Allah is the origin of all existence | الواحد أصل الأعداد كلها، كما أن الله سبحانه مبدئ كل موجود |
| 1356 | The number one holds special significance in Islam as a symbol of Tawhid - the oneness of Allah. Classical scholars like al-Būnī and Ibn ʿArabī studied number 1 as the expression of divine unity and beginning. | للعدد واحد دلالة خاصة في الإسلام رمزًا للتوحيد. وقد درس علماء كلاسيكيون كالبوني وابن عربي العدد 1 تعبيرًا عن الوحدانية والبداية. |
| 1357 | The number two represents duality and partnership in Islamic traditions - night and day, earth and sky. It teaches us about balance and harmony in creation. | يمثّل العدد اثنان الزوجية والشراكة في التراث الإسلامي — الليل والنهار، الأرض والسماء. ويعلّمنا التوازن والانسجام في الخلق. |
| 1358 | Track finances daily | تابع أموالك يوميًا |
| 1359 | Traveler | رحّالة |
| 1360 | Unconditional Love | محبّة بلا شروط |
| 1361 | Urban Planner | مخطّط مدن |
| 1362 | Vision Journaling | تدوين الرؤية |
| 1363 | Visualize Allah's light filling you | استحضر نور الله يملأ قلبك |
| 1364 | Volunteer at a charity | تطوّع في جمعية خيرية |
| 1365 | Walk without destination | امشِ بلا وجهة |
| 1366 | Writer | كاتب |
| 1367 | 9-Year Life Cycle | دورة الحياة ذات التسع سنوات |
| 1368 | Achievement & Power | الإنجاز والقوة |
| 1369 | Build relationships | ابنِ العلاقات |
| 1370 | Building Foundations | بناء الأسس |
| 1371 | Building foundation and planting seeds | بناء الأساس وغرس البذور |
| 1372 | Change & Freedom | التغيير والحرية |
| 1373 | Communicate ideas | عبّر عن الأفكار |
| 1374 | Completion & Release | الاكتمال والتخلّي |
| 1375 | Create harmony | اصنع الانسجام |
| 1376 | Create structure | اصنع البنية |
| 1377 | Embrace change | تقبّل التغيير |
| 1378 | Exercise leadership | مارس القيادة |
| 1379 | Express yourself | عبّر عن نفسك |
| 1380 | Harvest and release | الحصاد والتخلّي |
| 1381 | Inner Wisdom | الحكمة الباطنة |
| 1382 | Love & Responsibility | المحبّة والمسؤولية |
| 1383 | Manifest goals | حقّق الأهداف |
| 1384 | Nurture connections | ارعَ الصلات |
| 1385 | Nurture others | ارعَ الآخرين |
| 1386 | Organize | نظّم |
| 1387 | Practice patience | تحلَّ بالصبر |
| 1388 | Prev | السابق |
| 1389 | Previous Year | السنة السابقة |
| 1390 | Reflect deeply | تأمّل بعمق |
| 1391 | Remember: Cycles are tools for reflection and planning, not fixed destiny. Only Allah knows the unseen. | تذكّر: الدورات أدوات للتأمّل والتخطيط، لا قدر محتوم. ولا يعلم الغيب إلا الله. |
| 1392 | Seek truth | اطلب الحقيقة |
| 1393 | Serve community | اخدم المجتمع |
| 1394 | Serve humanity | اخدم الإنسانية |
| 1395 | Set intentions | اعقد النيّات |
| 1396 | Study spirituality | ادرس الروحانيات |
| 1397 | Time for changes, travel, new experiences, and personal freedom. Adaptability and flexibility are key. Expect the unexpected. | وقت للتغيير والسفر والتجارب الجديدة والحرية الشخصية. والتكيّف والمرونة هما المفتاح. وتهيّأ لغير المتوقّع. |
| 1398 | Time for creative projects, self-expression, and social activities. Communication, joy, and artistic pursuits are highlighted. | وقت للمشاريع الإبداعية والتعبير عن الذات والأنشطة الاجتماعية. ويبرز فيه التواصل والفرح والفنون. |
| 1399 | Time for endings, completion, and preparation for new beginnings. Release what no longer serves. Humanitarian service and universal love are emphasized. | وقت للخواتيم والاكتمال والاستعداد لبدايات جديدة. تخلَّ عمّا لم يعد نافعًا. ويبرز فيه العمل الإنساني والمحبّة الشاملة. |
| 1400 | Time for fresh starts, new initiatives, and planting seeds for the future. Bold action and independent thinking are favored. | وقت للبدايات الجديدة والمبادرات وغرس البذور للمستقبل. ويُستحسن فيه العمل الجريء والتفكير المستقل. |
| 1401 | Time for introspection, spiritual growth, and inner development. Retreat, study, and deepen your connection with the Divine. | وقت لمحاسبة النفس والنموّ الروحي والتهذيب الباطن. اعتزل وادرس، وعمّق صلتك بالله. |
| 1402 | Year of family, home, service, and relationships. Focus on responsibility, nurturing, and creating harmonious environments. | سنة الأسرة والبيت والخدمة والعلاقات. ركّز على المسؤولية والرعاية وصنع بيئات منسجمة. |
| 1403 | Year of manifestation, material success, and personal power. Reap rewards from past efforts. Financial and career achievements are highlighted. | سنة التحقّق والنجاح المادي والقوة الشخصية. اجنِ ثمار جهودك السابقة. وتبرز فيها الإنجازات المالية والمهنية. |
| 1404 | ← Scroll to see all 9 years → | ← مرّر لترى السنوات التسع كلها → |
| 1405 | Download Asrāriya on Google Play | نزّل أسرارية من Google Play |
| 1406 | Retrograde — inner reflection encouraged | راجع — يُستحسن التأمّل الباطن |
| 1407 | Retrograde (−2) | راجع (−2) |
| 1408 | Caution themes | موضوعات الحذر |
| 1409 | Favourable themes (adab) | موضوعات المناسبة (أدب) |
| 1410 | Live | مباشر |
| 1411 | View | عرض |
| 1412 | Makkah (Default) | مكة المكرمة (افتراضي) |
| 1413 | Desc | الوصف |
| 1414 | Based on the date on your device. | بحسب التاريخ في جهازك. |
| 1415 | Recommended sadaqa | الصدقة الموصى بها |
| 1416 | Recommended sadaqa for each day of the week | الصدقة الموصى بها لكل يوم من أيام الأسبوع |
| 1417 | Today's sadaqa | صدقة اليوم |
| 1418 | Answer | الجواب |
| 1419 | Energy Return | عودة الطاقة |
| 1420 | Rest Day Recommended | يُستحسن يوم راحة |
| 1421 | Use this day to recharge your spiritual energy. | استعمل هذا اليوم لتجديد طاقتك الروحية. |
| 1422 | Weekly Energy Flow | انسياب الطاقة الأسبوعي |
| 1423 | 4-6: Moderate | 4-6: معتدل |
| 1424 | OK | حسنًا |
| 1425 | Rest Needed | يلزم الراحة |
| 1426 | Top | الأعلى |
| 1427 | Based on classical ʿIlm al-Ḥurūf and Islamic astrology principles | مبنيّ على مبادئ علم الحروف الكلاسيكي وعلم النجوم الإسلامي |
| 1428 | Today's Tip | نصيحة اليوم |
| 1429 | 📅 Your Spiritual Week | 📅 أسبوعك الروحي |
| 1430 | Low energies. Ideal for meditation, reflection, and recharging your spiritual energy. Avoid major decisions. | طاقات منخفضة. مثالية للتأمّل والمراجعة وتجديد طاقتك الروحية. اجتنب القرارات الكبرى. |
| 1431 | Rest and reflection week | أسبوع راحة وتأمّل |
| 1432 | Use for reflection, planning, spiritual practices | استعمله للتأمّل والتخطيط والممارسات الروحية |
| 1433 | Very good week | أسبوع جيد جدًا |
| 1434 | Weekly Insights | لمحات أسبوعية |
| 1435 | work well | تنجح جيدًا |
| 1436 | 🌙 Spiritual Rest Days | 🌙 أيام الراحة الروحية |
| 1437 | 🌟 Best Days for Action | 🌟 أفضل أيام العمل |
| 1438 | Supabase not configured | Supabase غير مُعدّ |
| 1439 | Starting new ventures | بدء مشاريع جديدة |
| 1440 | Entrepreneurship | ريادة الأعمال |
| 1441 | Maryam | مريم |
| 1442 | Maximum range is 12 months. | الحدّ الأقصى للمدّة 12 شهرًا. |
| 1443 | Aggressive negotiations | المفاوضات العدوانية |
| 1444 | Confrontations | المواجهات |
| 1445 | Legal matters | المسائل القانونية |
| 1446 | Aligned Path | طريق منسجم |
| 1447 | Career Fields | المجالات المهنية |
| 1448 | Career guidance data is being compiled for your profile | يجري إعداد بيانات الإرشاد المهني لملفك |
| 1449 | Career paths that resonate with your spiritual energy and elemental nature | مسارات مهنية تتناغم مع طاقتك الروحية وطبيعتك العنصرية |
| 1450 | Collapse All | طيّ الكل |
| 1451 | Copied to clipboard! | نُسخ إلى الحافظة! |
| 1452 | Despite being a Water element, you receive special blessings from Earth industries. This unique spiritual gift allows you to thrive in both water-related AND earth-based careers—giving you more pathways to success than most other elements. | مع أنك من عنصر الماء، فلك نصيب خاص من مجالات التراب. فتستطيع بفضل الله أن تزدهر في المهن المتّصلة بالماء والتراب معًا — فأمامك طرق أكثر من غيرك. |
| 1453 | Discovered my career path through Istikhara al-Asmāʾ! My | اكتشفت مساري المهني عبر استخارة الأسماء! عنصري |
| 1454 | Download Career Guide PDF | تنزيل دليل المهن PDF |
| 1455 | Expand All | توسيع الكل |
| 1456 | Fields to Consider Carefully | مجالات تُدرَس بعناية |
| 1457 | Generating PDF... | جارٍ إنشاء PDF... |
| 1458 | Guiding Principle | المبدأ الموجّه |
| 1459 | Istikhara Career Guidance | إرشاد مهني من استخارة الأسماء |
| 1460 | PDF content | محتوى PDF |
| 1461 | Recommended Career Fields | المجالات المهنية الموصى بها |
| 1462 | Special Spiritual Blessing | نصيب روحي خاص |
| 1463 | These industries may not align optimally with your spiritual energy. While not forbidden, they may present more challenges or require extra effort. | قد لا تنسجم هذه المجالات انسجامًا أمثل مع طاقتك الروحية. وليست محرّمة، لكنها قد تحمل تحدّيات أكثر أو تتطلّب جهدًا إضافيًا. |
| 1464 | This doesn't mean complete avoidance—some individuals still succeed in these fields. However, the spiritual alignment suggests focusing your primary efforts on the recommended fields above for optimal results. | ولا يعني هذا اجتنابها كليًا — فبعض الناس ينجحون فيها. لكن الانسجام الروحي يقترح تركيز جهودك الأساسية على المجالات الموصى بها أعلاه. |
| 1465 | This guidance comes from traditional Islamic texts on ʿIlm al-Ḥurūf (Science of Letters), preserved by scholars across generations. | هذا الإرشاد من نصوص إسلامية تقليدية في علم الحروف، حفظها العلماء عبر الأجيال. |
| 1466 | Traditional Islamic Guidance | إرشاد إسلامي تقليدي |
| 1467 | Traditional Wisdom | حكمة تقليدية |
| 1468 | career paths in this category | مسارات مهنية في هذه الفئة |
| 1469 | element aligns with | عنصر منسجم مع |
| 1470 | (Use Name for exact count) | (استعمل الاسم للعدد الدقيق) |
| 1471 | Are you sure you want to reset? Your progress will be lost. | هل أنت متأكد من إعادة التعيين؟ سيضيع تقدّمك. |
| 1472 | Associated Angel | الملَك المرتبط |
| 1473 | Associated Jinn King | ملك الجنّ المرتبط |
| 1474 | Auto Counting... | عدّ تلقائي... |
| 1475 | Auto Speed: | سرعة العدّ التلقائي: |
| 1476 | Avg Pace | متوسط الوتيرة |
| 1477 | Best practiced after prayer in a quiet space | يُستحسن بعد الصلاة في مكان هادئ |
| 1478 | Dhikr Progress | تقدّم الذكر |
| 1479 | Halfway | المنتصف |
| 1480 | I've completed | أتممت |
| 1481 | Pause | إيقاف مؤقت |
| 1482 | Play pronunciation | تشغيل النطق |
| 1483 | Quart | الربع |
| 1484 | Recite with presence and sincerity | اذكر بحضور وإخلاص |
| 1485 | Session Completed! | اكتملت الجلسة! |
| 1486 | Session History | سجلّ الجلسات |
| 1487 | Start Auto Count | ابدأ العدّ التلقائي |
| 1488 | Step-by-Step Practice Guide | دليل الممارسة خطوة بخطوة |
| 1489 | recitations of | تلاوات من |
| 1490 | 1. Overview Tab | 1. تبويب النظرة العامة |
| 1491 | 2. Personality Tab | 2. تبويب الشخصية |
| 1492 | 3. Career Tab | 3. تبويب المهنة |
| 1493 | 4. Blessed Day Tab | 4. تبويب اليوم المبارك |
| 1494 | 5. Spiritual Tab | 5. التبويب الروحي |
| 1495 | Adaptable | متكيّف |
| 1496 | Bold | جريء |
| 1497 | Buruj | البروج |
| 1498 | Career Paths | المسارات المهنية |
| 1499 | Communicative | تواصليّ |
| 1500 | Counseling | الاستشارة |
| 1501 | Creative | مبدع |
| 1502 | Discover career paths that align with your elemental nature. Note both traditional and modern recommendations. | اكتشف مسارات مهنية تنسجم مع طبيعتك العنصرية، ولاحظ التوصيات التقليدية والحديثة معًا. |
| 1503 | Emotional | عاطفي |
| 1504 | Empathetic | متعاطف |
| 1505 | Energetic | نشيط |
| 1506 | Follow the recommended spiritual practices, Divine Names, and Quranic verses for protection and balance. | اتّبع الممارسات الروحية والأسماء الحسنى والآيات القرآنية الموصى بها للحفظ والتوازن. |
| 1507 | Healthcare | الرعاية الصحية |
| 1508 | History & Significance | التاريخ والدلالة |
| 1509 | Ilm al-Huruf | علم الحروف |
| 1510 | Integrates Arabic letter numerology (Abjad) with celestial correspondences | يجمع بين عدد الحروف العربية (الأبجد) والمناسبات السماوية |
| 1511 | Intuitive | حدسيّ |
| 1512 | Istikharah al-Asmā' (Spiritual Guidance Through Names) is a classical Islamic tradition rooted in the science of Ilm al-Huruf (Science of Letters) and ancient astrological wisdom. This practice combines the numerical values of names with the Buruj (zodiacal mansions) to provide spiritual insight and guidance. | استخارة الأسماء (الإرشاد الروحي بالأسماء) تقليد إسلامي كلاسيكي متجذّر في علم الحروف والحكمة الفلكية القديمة. وتجمع هذه الممارسة بين القيم العددية للأسماء والبروج لتقديم تبصّر وإرشاد روحي. |
| 1513 | Key Traits | السمات الأساسية |
| 1514 | Numerical value derived from Arabic letters (Abjad numerology) | قيمة عددية مستخرجة من الحروف العربية (الأبجد) |
| 1515 | Passionate | شغوف |
| 1516 | Practical | عمليّ |
| 1517 | Purpose & Applications | الغاية والتطبيقات |
| 1518 | Remembrance of Allah through repetition of sacred phrases | ذكر الله بتكرار العبارات المباركة |
| 1519 | Schedule important decisions, meetings, and new ventures on your blessed day for optimal spiritual alignment. | اجعل القرارات المهمّة والاجتماعات والمشاريع الجديدة في يومك المبارك لأفضل انسجام روحي. |
| 1520 | Seeking guidance or consultation, traditionally through prayer | طلب الخيرة أو المشورة، تقليديًا بالصلاة |
| 1521 | Spiritual practices aligned with personal nature | ممارسات روحية منسجمة مع الطبيعة الشخصية |
| 1522 | Start here for quick, actionable guidance. This tab highlights the most important insights for immediate application. | ابدأ هنا لإرشاد سريع قابل للتطبيق. يبرز هذا التبويب أهمّ اللمحات للتطبيق الفوري. |
| 1523 | The 99 Names of Allah, each with specific spiritual qualities | أسماء الله الحسنى، لكل منها معانٍ روحية |
| 1524 | The Ancient Practice of Istikharah al-Asmā' | الممارسة العريقة لاستخارة الأسماء |
| 1525 | The Buruj System | نظام البروج |
| 1526 | The Buruj system divides the celestial sphere into 12 sections, each associated with specific elements and qualities. Your personal Buruj is determined by the remainder when dividing the sum of names by 12. | يقسم نظام البروج الفلك إلى 12 قسمًا، لكل منها عناصر وصفات. ويُحدَّد برجك الشخصي بباقي قسمة مجموع الأسماء على 12. |
| 1527 | The Four Classical Elements | العناصر الأربعة الكلاسيكية |
| 1528 | The Science of Letters - study of Arabic letters and their mystical meanings | علم الحروف - دراسة الحروف العربية ومعانيها الباطنة |
| 1529 | The Twelve Buruj (Zodiacal Mansions) | البروج الاثنا عشر |
| 1530 | The twelve zodiacal mansions or constellations | البروج أو الكوكبات الاثنا عشر |
| 1531 | Traced back to classical Islamic scholars and practitioners of Ilm al-Huruf | يعود إلى علماء مسلمين كلاسيكيين وممارسين لعلم الحروف |
| 1532 | Understanding personality traits and temperament | فهم سمات الشخصية والطبع |
| 1533 | Used for personal guidance, name selection, and spiritual counseling | يُستعمل للإرشاد الشخصي واختيار الأسماء والنصح الروحي |
| 1534 | Voluntary charity given as an act of worship | صدقة تطوّع تُعطى عبادةً |
| 1535 | Amina | أمينة |
| 1536 | Best when using your own saved profile. | الأفضل عند استعمال ملفك المحفوظ. |
| 1537 | Both names must be in Arabic script for accurate spiritual analysis | يجب أن يكون الاسمان بالحروف العربية لتحليل روحي دقيق |
| 1538 | Common Female Names | أسماء إناث شائعة |
| 1539 | Common Male Names | أسماء ذكور شائعة |
| 1540 | Database-backed suggestions | اقتراحات من قاعدة البيانات |
| 1541 | Detailed traits, social dynamics, and dream symbolism | سمات مفصّلة وديناميكيات اجتماعية ورموز المنامات |
| 1542 | Discover your core temperament (Fire, Earth, Air, or Water) | اكتشف طبعك الأساسي (نار أو تراب أو هواء أو ماء) |
| 1543 | Hassan | حسن |
| 1544 | Khadija | خديجة |
| 1545 | Month & day only | الشهر واليوم فقط |
| 1546 | Name must contain only Arabic letters | يجب أن يحتوي الاسم على حروف عربية فقط |
| 1547 | Need help? See example names | تحتاج مساعدة؟ انظر أسماء مثالية |
| 1548 | No Data Storage | لا تخزين للبيانات |
| 1549 | Optional lunar timing baselines (requires full DOB year) | أسس توقيت قمرية اختيارية (تتطلّب سنة الميلاد كاملة) |
| 1550 | Privacy & Security | الخصوصية والأمان |
| 1551 | Ready to calculate! | جاهز للحساب! |
| 1552 | Sacred Tradition | تراث أصيل |
| 1553 | Scholarly Foundation | أساس علمي |
| 1554 | The mother's influence shapes the soul's entry into this world, making her name essential for accurate spiritual calculation. | لاسم الأم أثر في التأمّل في دخول الروح إلى هذا العالم، ولذا كان أساسيًا لدقّة الحساب. |
| 1555 | This field is required | هذا الحقل مطلوب |
| 1556 | This practice is rooted in classical Islamic texts and has been preserved by scholars across generations. | هذه الممارسة متجذّرة في نصوص إسلامية كلاسيكية، وحفظها العلماء عبر الأجيال. |
| 1557 | This tool is created with respect for Islamic tradition and scholarly heritage. All calculations follow authentic classical methods. | صُنعت هذه الأداة باحترام للتراث الإسلامي والإرث العلمي، وكل الحسابات تتبع طرقًا كلاسيكية أصيلة. |
| 1558 | Your Burj (zodiac sign) | برجك |
| 1559 | Your names are calculated in real-time and never stored on our servers. All calculations happen locally in your browser. | تُحسب أسماؤك آنيًا ولا تُخزَّن أبدًا على خوادمنا. وكل الحسابات تجري محليًا في متصفحك. |
| 1560 | ʿIlm al-Ḥurūf (Science of Letters) is an ancient Islamic tradition that explores the spiritual significance of Arabic letters and their numerical values. Each letter corresponds to a number in the Abjad system, revealing hidden meanings and divine connections. | علم الحروف تراث إسلامي عريق يستكشف الدلالة الروحية للحروف العربية وقيمها العددية. فكل حرف يقابل عددًا في نظام الأبجد، فتنكشف معانٍ خفيّة وصلات روحية. |
| 1561 | Arabic Script Required | الحروف العربية مطلوبة |
| 1562 | Are you sure you want to clear all saved calculations? | هل أنت متأكد من مسح كل الحسابات المحفوظة؟ |
| 1563 | Auto-Save Feature | ميزة الحفظ التلقائي |
| 1564 | Both names must be entered in Arabic letters for accurate calculation | يجب إدخال الاسمين بالحروف العربية لحساب دقيق |
| 1565 | Calculation History | سجلّ الحسابات |
| 1566 | Discover Asrār — Sacred Sciences & Divine Timing | اكتشف أسرار — العلوم الإسلامية والتوقيت الإلهي |
| 1567 | Invite | دعوة |
| 1568 | Mother's Name Importance | أهمّية اسم الأم |
| 1569 | No saved calculations yet | لا حسابات محفوظة بعد |
| 1570 | Quick Tips | نصائح سريعة |
| 1571 | Share sacred wisdom — invite friends to discover their spiritual profile | شارك الحكمة — ادعُ أصدقاءك ليكتشفوا ملفهم الروحي |
| 1572 | Step 1: Enter Names | الخطوة 1: أدخل الأسماء |
| 1573 | Step 2: View Results | الخطوة 2: اعرض النتائج |
| 1574 | The mother's name is essential as it represents the soul's entry into this world | اسم الأم أساسي لأنه يمثّل دخول الروح إلى هذا العالم |
| 1575 | View History | عرض السجلّ |
| 1576 | Your calculations are automatically saved for quick access later | تُحفظ حساباتك تلقائيًا للرجوع إليها سريعًا |
| 1577 | element. Discover yours on Asrār! | . اكتشف عنصرك على أسرار! |
| 1578 | saved calculations | حسابات محفوظة |
| 1579 | ✨🌙 I discovered my spiritual profile through Istikhara al-Asmāʾ! I'm a | ✨🌙 اكتشفت ملفي الروحي عبر استخارة الأسماء! عنصري |
| 1580 | 🌙 Discover your spiritual profile with Istikhara al-Asmāʾ on Asrār! | 🌙 اكتشف ملفك الروحي باستخارة الأسماء على أسرار! |
| 1581 | 🌙 Discover your spiritual profile with Istikhara al-Asmāʾ on Asrār! Abjad numerology, planetary hours, Zikr challenges, and more. | 🌙 اكتشف ملفك الروحي باستخارة الأسماء على أسرار! حساب الأبجد والساعات الكوكبية وتحدّيات الذكر وأكثر. |
| 1582 | Align your work with your elemental nature for fulfillment. | وافِق عملك طبيعتك العنصرية لتجد الرضا. |
| 1583 | Career Direction | التوجّه المهني |
| 1584 | Combine these practices consistently for 40 days to see meaningful spiritual and practical results. Start small and build gradually. | داوم على هذه الممارسات أربعين يومًا لتلمس أثرًا روحيًا وعمليًا بإذن الله. ابدأ بالقليل وزِد تدريجيًا. |
| 1585 | Monthly Sadaqah | الصدقة الشهرية |
| 1586 | Pro Tip | نصيحة متقدّمة |
| 1587 | Quick Action Guide | دليل العمل السريع |
| 1588 | Schedule Important Tasks | رتّب المهامّ المهمّة |
| 1589 | for spiritual balance and protection. | للتوازن الروحي والحفظ. |
| 1590 | the recommended Divine Names | الأسماء الحسنى الموصى بها |
| 1591 | to maintain spiritual balance. | للمحافظة على التوازن الروحي. |
| 1592 | Anger Pattern | نمط الغضب |
| 1593 | Career paths | المسارات المهنية |
| 1594 | Charity | الصدقة |
| 1595 | Communication Style | أسلوب التواصل |
| 1596 | Deep insights into your temperament and character traits | لمحات عميقة عن طبعك وسمات شخصيتك |
| 1597 | Divine Support | العون الإلهي |
| 1598 | Dream Symbolism | رموز المنامات |
| 1599 | Explore career guidance in the Career tab | استكشف الإرشاد المهني في تبويب المهنة |
| 1600 | Explore spiritual practices in the Spiritual tab | استكشف الممارسات الروحية في التبويب الروحي |
| 1601 | Explore the tabs above to dive deeper into your personality traits, career guidance, blessed day details, and spiritual practices. Each section provides comprehensive insights tailored to your spiritual profile. | استكشف التبويبات أعلاه للتعمّق في سمات شخصيتك والإرشاد المهني وتفاصيل يومك المبارك والممارسات الروحية. وكل قسم يقدّم لمحات شاملة لملفك الروحي. |
| 1602 | I discovered my spiritual profile through Istikhara al-Asmāʾ! | اكتشفت ملفي الروحي عبر استخارة الأسماء! |
| 1603 | Life Blessings | نِعَم الحياة |
| 1604 | Mark this day in your calendar every week. Consider setting a recurring reminder to help you align important activities with your power day. | علّم هذا اليوم في تقويمك كل أسبوع، وفكّر في تذكير متكرّر يعينك على مواءمة أنشطتك المهمّة مع يومك المبارك. |
| 1605 | My Istikhara Profile | ملفي في الاستخارة |
| 1606 | Power day | يوم القوة |
| 1607 | Quick Summary | ملخّص سريع |
| 1608 | Recite daily for spiritual balance | اذكر يوميًا للتوازن الروحي |
| 1609 | Schedule your most important meetings, critical decisions, and new ventures on this day when possible. Your spiritual energy and divine support are at their peak. | اجعل أهمّ اجتماعاتك وقراراتك ومشاريعك الجديدة في هذا اليوم ما أمكن، فهو يوم يُرجى فيه التيسير. |
| 1610 | Social Strengths | نقاط القوة الاجتماعية |
| 1611 | Special Significance | دلالة خاصة |
| 1612 | These colors resonate with your elemental energy. Use them in your environment for spiritual balance. | تتناغم هذه الألوان مع طاقتك العنصرية. استعملها في محيطك للتوازن الروحي. |
| 1613 | This is your most spiritually auspicious day of the week. Your energy peaks and divine support is strongest on this day. | هذا أبرك أيامك في الأسبوع بحسب التراث، يُرجى فيه مزيد من التيسير. |
| 1614 | Your Personality Profile | ملف شخصيتك |
| 1615 | Your spiritual profile at a glance | ملفك الروحي في لمحة |
| 1616 | more traits | سمات أخرى |
| 1617 | Career Match | التوافق المهني |
| 1618 | Core Trait | السمة الأساسية |
| 1619 | ID Number | الرقم التعريفي |
| 1620 | Key Insights | لمحات أساسية |
| 1621 | Overall Alignment | الانسجام الكلي |
| 1622 | Your Divine Name | اسمك من الأسماء الحسنى |
| 1623 | Ḥadad Value | قيمة الحدد |
| 1624 | Alignment with your element | الانسجام مع عنصرك |
| 1625 | Allow location access to calculate precise planetary hours. | اسمح بالوصول إلى الموقع لحساب الساعات الكوكبية بدقّة. |
| 1626 | Calculating optimal timing... | جارٍ حساب التوقيت الأمثل... |
| 1627 | Classical Islamic tradition | التراث الإسلامي الكلاسيكي |
| 1628 | How this timing is calculated: | كيف يُحسب هذا التوقيت: |
| 1629 | Perfect | مثالي |
| 1630 | Planetary hours based on sunrise/sunset | ساعات كوكبية بحسب الشروق والغروب |
| 1631 | Resonance with your zodiac planet | الرنين مع كوكب برجك |
| 1632 | See all 12 hours | عرض الساعات الاثنتي عشرة |
| 1633 | alignment with your | الانسجام مع |
| 1634 | ⏰ Precise Timing | ⏰ توقيت دقيق |
| 1635 | 🌙 Top 3 Night Hours | 🌙 أفضل 3 ساعات ليلية |
| 1636 | According to the teachings of Seringe Mahdiou Niane | بحسب تعاليم الشيخ سرين مهديو نيان |
| 1637 | By Seringe Mahdiou Niane — spoken in Wolof | للشيخ سرين مهديو نيان — بالولوفية |
| 1638 | Getting Started with Sadaqah | البدء بالصدقة |
| 1639 | Give secretly when possible, as it purifies the heart | أعطِ سرًّا ما أمكن، فذلك يطهّر القلب |
| 1640 | Guidance Sadaqah — | إرشاد الصدقة — |
| 1641 | Sadaqah Guidance — | إرشاد الصدقة — |
| 1642 | Set a monthly reminder for your regular sadaqah | اضبط تذكيرًا شهريًا لصدقتك المنتظمة |
| 1643 | Start small and increase gradually as you establish the habit | ابدأ بالقليل وزِد تدريجيًا حتى تثبت العادة |
| 1644 | Teaching Video (in Wolof) | مقطع تعليمي (بالولوفية) |
| 1645 | The intention (niyyah) is as important as the action itself | النيّة لا تقلّ أهمّية عن العمل نفسه |
| 1646 | Traditional charity forms associated with your sign, for ongoing blessings and spiritual balance. | صور الصدقة التقليدية المرتبطة ببرجك، للبركة الدائمة والتوازن الروحي. |
| 1647 | — Sadaqah | — الصدقة |
| 1648 | — Sadaqah (2) | — الصدقة (2) |
| 1649 | About Angels | عن الملائكة |
| 1650 | About Jinn | عن الجنّ |
| 1651 | Angel | الملَك |
| 1652 | Angels (Malāʾika) are celestial beings of light who serve as divine messengers and guardians. Each element is associated with specific angelic forces that can be invoked for spiritual support. | الملائكة خلقٌ من نور، يرسلهم الله رسلًا وحفظة. وفي التراث يرتبط كل عنصر بأسماء ملائكة معيّنة. |
| 1653 | Associated Zodiac | البرج المرتبط |
| 1654 | Celestial Guardian | حارس سماوي |
| 1655 | Choose one modern alternative that fits your lifestyle | اختر بديلًا حديثًا واحدًا يناسب نمط حياتك |
| 1656 | Complete daily | يوميًا |
| 1657 | Dhikr Count | عدد الذكر |
| 1658 | Divine Names & Dhikr Practice | الأسماء الحسنى وممارسة الذكر |
| 1659 | Element Alignment | انسجام العنصر |
| 1660 | Elemental Force | القوة العنصرية |
| 1661 | For Dhikr Count | لعدد الذكر |
| 1662 | For dhikr count | لعدد الذكر |
| 1663 | Getting Started | البداية |
| 1664 | Jinn King | ملك الجنّ |
| 1665 | Jinn are beings created from smokeless fire, existing in a parallel realm. In Islamic mystical tradition, certain Jinn kings govern elemental forces and can be understood through spiritual knowledge. | الجنّ خلقٌ من مارج من نار، يعيشون في عالم موازٍ. وفي بعض كتب التراث الباطني تُنسب إلى ملوك من الجنّ صلاتٌ بالعناصر؛ ويُذكر هذا هنا للمعرفة التاريخية فقط. |
| 1666 | Listen to recitation | استمع إلى التلاوة |
| 1667 | Make intention (niyyah) before each practice | اعقد النيّة قبل كل ممارسة |
| 1668 | Monthly Spiritual Balance | التوازن الروحي الشهري |
| 1669 | Performed ONCE in Your Lifetime | تُؤدّى مرّة واحدة في العمر |
| 1670 | Regular practice for ongoing spiritual growth | ممارسة منتظمة للنموّ الروحي المستمرّ |
| 1671 | Repetition Count | عدد التكرار |
| 1672 | Required Components | المكوّنات المطلوبة |
| 1673 | Sacred Lifetime Offering | صدقة العمر |
| 1674 | Spiritual Guardians & Forces | الحفظة والقوى الروحية |
| 1675 | This is a profound spiritual commitment that should be undertaken with careful preparation and sincere intention. | هذا التزام روحي عميق ينبغي أن يُقدَم عليه باستعداد وعناية ونيّة صادقة. |
| 1676 | This verse resonates with your elemental nature and can be recited for spiritual guidance and protection. Reflect on its meaning as part of your daily practice. | تتناغم هذه الآية مع طبيعتك العنصرية، ويمكن تلاوتها طلبًا للهداية والحفظ. وتدبّر معناها جزءًا من وردك اليومي. |
| 1677 | Use Name | استعمل الاسم |
| 1678 | View Practice History & Progress | عرض سجلّ الممارسة والتقدّم |
| 1679 | Your core energy | طاقتك الجوهرية |
| 1680 | Your personalized dhikr guidance with Divine Names tailored to your spiritual profile | إرشاد ذكرك الشخصي بأسماء حسنى مناسبة لملفك الروحي |
| 1681 | Add Practice Session | إضافة جلسة ممارسة |
| 1682 | Add Record | إضافة سجلّ |
| 1683 | Add Sadaqah Record | إضافة سجلّ صدقة |
| 1684 | Add Session | إضافة جلسة |
| 1685 | Amazing! You've maintained a | رائع! حافظت على |
| 1686 | Analytics & Trends | التحليلات والاتجاهات |
| 1687 | Best Streak | أفضل سلسلة |
| 1688 | Committed | ملتزم |
| 1689 | Complete Lifetime Offering | إتمام صدقة العمر |
| 1690 | Completed full session | أتمّ الجلسة كاملة |
| 1691 | Current Streak | السلسلة الحالية |
| 1692 | Insights & Recommendations | لمحات وتوصيات |
| 1693 | Invalid file format | تنسيق ملف غير صالح |
| 1694 | Keep it up! | واصل! |
| 1695 | Legend | مفتاح الرموز |
| 1696 | Mark Complete | علّم كمكتمل |
| 1697 | Mark as Completed | علّم كمكتمل |
| 1698 | Monitor your spiritual journey | تابع رحلتك الروحية |
| 1699 | Monthly Sadaqah Records | سجلّات الصدقة الشهرية |
| 1700 | No practice sessions yet | لا جلسات ممارسة بعد |
| 1701 | No sadaqah records yet | لا سجلّات صدقة بعد |
| 1702 | Not Yet Completed | لم يكتمل بعد |
| 1703 | Practice Tracking & Analytics | تتبّع الممارسة والتحليلات |
| 1704 | Recent Activity | النشاط الأخير |
| 1705 | Sadaqah Total | مجموع الصدقة |
| 1706 | This sacred offering should be performed once in your lifetime at the appropriate time. | تُؤدّى هذه الصدقة مرّة واحدة في العمر في الوقت المناسب. |
| 1707 | Total Recitations | مجموع التلاوات |
| 1708 | Total Sadaqah | مجموع الصدقة |
| 1709 | Visual charts and graphs will be available in the next update | ستتوفّر الرسوم البيانية في التحديث القادم |
| 1710 | You haven't practiced in | لم تمارس منذ |
| 1711 | consecutive days | أيام متتالية |
| 1712 | e.g., Food donation | مثلًا: التبرّع بطعام |
| 1713 | 25-35 min | 25-35 دقيقة |
| 1714 | Asmāʾ an-Nabī ﷺ | أسماء النبي ﷺ |
| 1715 | SALAWAT | الصلاة على النبي |
| 1716 | " badge on Asrār! | » على أسرار! |
| 1717 | Join me in this spiritual challenge! | شاركني هذا التحدّي الروحي! |
| 1718 | Share Achievement | شارك الإنجاز |
| 1719 | You earned a new badge: | نلت شارة جديدة: |
| 1720 | 🎖️ I just earned the " | 🎖️ نلت للتوّ شارة « |
| 1721 | No badges earned yet. Keep going! | لم تنل شارات بعد. واصل! |
| 1722 | 201 Names | الأسماء المئتان والواحد |
| 1723 | Custom count input | إدخال عدد مخصّص |
| 1724 | Remove challenge | إزالة التحدّي |
| 1725 | Track your daily dhikr and transform your spiritual practice. | تابع ذكرك اليومي وارتقِ بممارستك الروحية. |
| 1726 | Track your daily dhikr: | تابع ذكرك اليومي: |
| 1727 | 🎯 1000× daily for fast debt repayment 💫 Join this transformative practice! Towards financial freedom through Allah's grace... 🤲 | 🎯 ألف مرّة يوميًا رجاء قضاء الدَّين 💫 شاركني هذا الورد! نسأل الله من فضله التيسير... 🤲 |
| 1728 | 💰✨ Miraculous Debt Relief 🌙 What seems IMPOSSIBLE for us is EFFORTLESS for Allah! 📿 Recite with me after ʿIshāʾ: " | 💰✨ ورد لقضاء الدَّين 🌙 ما يبدو صعبًا علينا يسيرٌ على الله! 📿 اذكر معي بعد العشاء: « |
| 1729 | 🤲 Join me in this spiritual challenge! | 🤲 شاركني هذا التحدّي الروحي! |
| 1730 | Adjust your daily goal based on your capacity | عدّل هدفك اليومي بحسب طاقتك |
| 1731 | Auto-calculate from daily | احسب تلقائيًا من اليومي |
| 1732 | Challenge Settings | إعدادات التحدّي |
| 1733 | Enter daily target | أدخل الهدف اليومي |
| 1734 | Total goal | الهدف الكلي |
| 1735 | All-time total: | المجموع الكلي: |
| 1736 | dhikr completed by the community today | ذكرًا أتمّه المجتمع اليوم |
| 1737 | dhikr today | ذكر اليوم |
| 1738 | NAMES | الأسماء |
| 1739 | ISTIGHFAR | الاستغفار |
| 1740 | View Challenges | عرض التحدّيات |
| 1741 | community dhikr | ذكر المجتمع |
| 1742 | Add Challenge | إضافة تحدٍّ |
| 1743 | Explore Asrar | استكشف أسرار |
| 1744 | Best dhikr now: | أفضل ذكر الآن: |
| 1745 | Link copied to clipboard | نُسخ الرابط إلى الحافظة |
| 1746 | Share Progress | شارك التقدّم |
| 1747 | Hide QR Code | إخفاء رمز QR |
| 1748 | Scan Wave Senegal QR | امسح رمز Wave السنغال |
| 1749 | Scan with Wave Senegal app | امسح بتطبيق Wave السنغال |
| 1750 | The Prophet ﷺ preferred to set out on journeys on Thursday (Bukhārī). | كان النبي ﷺ يحبّ أن يخرج في سفره يوم الخميس (البخاري). |
| 1751 | Islamic Sciences | العلوم الإسلامية |
| 1752 | Choose your expertise level: 🔰 Beginner: Learn the basics of Abjad calculations 🎓 Intermediate: Explore Burj, planets, and divine names 👑 Scholar: Access advanced research tools | اختر مستوى خبرتك: 🔰 مبتدئ: تعلّم أساسيات حساب الأبجد 🎓 متوسط: استكشف البروج والكواكب والأسماء الحسنى 👑 باحث: أدوات بحث متقدّمة |
| 1753 | Autumn Equinox | الاعتدال الخريفي |
| 1754 | Cardinal air, initiating social balance | هواء منقلب، يبتدئ التوازن الاجتماعي |
| 1755 | Cardinal earth, initiating structured manifestation | تراب منقلب، يبتدئ التحقّق المنظّم |
| 1756 | Cardinal water, initiating emotional tides | ماء منقلب، يبتدئ مدّ العواطف |
| 1757 | Cold & Dry (Melancholic) | بارد يابس (سوداوي) |
| 1758 | Cold & Moist (Phlegmatic) | بارد رطب (بلغمي) |
| 1759 | Courage, pioneering spirit, leadership | الشجاعة، روح الريادة، القيادة |
| 1760 | Discernment, refinement, dedication | التمييز، التهذيب، التفاني |
| 1761 | Emotional depth, intuition, caring | العمق العاطفي، الحدس، الرعاية |
| 1762 | First of the fire triplicity, initiating the zodiacal cycle | أول المثلّثة النارية، يبتدئ دورة البروج |
| 1763 | Fixed air, pouring forth divine knowledge | هواء ثابت، يفيض بالمعرفة |
| 1764 | Fixed fire, representing the heart of solar power | نار ثابتة، قلب القوة الشمسية |
| 1765 | Fixed water, representing deep spiritual transformation | ماء ثابت، يمثّل التحوّل الروحي العميق |
| 1766 | Hot & Dry (Choleric) | حارّ يابس (صفراوي) |
| 1767 | Hot & Moist (Sanguine) | حارّ رطب (دموي) |
| 1768 | Humanitarianism, vision, revolution | الإنسانية، الرؤية، التجديد |
| 1769 | Justice, equilibrium, beauty | العدل، التوازن، الجمال |
| 1770 | Late Autumn | أواخر الخريف |
| 1771 | Mastery, responsibility, endurance | الإتقان، المسؤولية، التحمّل |
| 1772 | Mutable air, facilitating communication between realms | هواء ذو جسدين، ييسّر التواصل بين العوالم |
| 1773 | Mutable earth, the harvest and practical wisdom | تراب ذو جسدين، الحصاد والحكمة العملية |
| 1774 | Mutable fire, the arrow of divine aspiration | نار ذات جسدين، سهم التطلّع الروحي |
| 1778 | The One whose mercy encompasses all creation, providing for all beings without exception. | الذي وسعت رحمته الخلق كله، يرزق الكائنات جميعًا بلا استثناء. |
| 1779 | Recite 298 times after Fajr to increase compassion and receive divine mercy. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 298 مرّة بعد الفجر لزيادة الرحمة في القلب ورجاء رحمة الله. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1780 | The One whose specific mercy is for believers, providing guidance and forgiveness. | الذي يختصّ المؤمنين برحمته، فيهديهم ويغفر لهم. |
| 1781 | Recite 258 times for seeking forgiveness and divine compassion in difficulties. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 258 مرّة لطلب المغفرة والرحمة في الشدائد. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1782 | The Sovereign Lord, Master of all dominion, to whom all authority belongs. | الملك المالك لكل سلطان، الذي له الأمر كله. |
| 1783 | Recite 90 times daily to gain respect and authority in righteous matters. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 90 مرّة يوميًا رجاء الهيبة والقبول في أمور الخير. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1784 | The Absolutely Pure, free from any defect or imperfection, transcendent above all creation. | المنزّه تنزيهًا مطلقًا عن كل عيب ونقص، المتعالي فوق الخلق. |
| 1785 | Recite 170 times for spiritual purification and protection from negative influences. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 170 مرّة لتزكية النفس والتحصّن من المؤثّرات السيّئة. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1786 | The Bestower of peace and security, free from all defects and flaws. | واهب السلام والأمان، السالم من كل عيب ونقص. |
| 1787 | Recite 131 times for inner peace and protection from harm. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 131 مرّة لسكينة النفس والحفظ من الأذى. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1788 | The One who grants faith and security, removing fear from the hearts of believers. | الذي يهب الإيمان والأمن، ويذهب الخوف من قلوب المؤمنين. |
| 1789 | Recite 136 times for protection from fear and to strengthen faith. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 136 مرّة للحفظ من الخوف وتقوية الإيمان. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1790 | The Protector and Overseer who witnesses all things and guards His creation. | الرقيب الحافظ الذي يشهد كل شيء ويحفظ خلقه. |
| 1791 | Recite 145 times for divine protection and to overcome fear of creation. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 145 مرّة رجاء حفظ الله وتجاوز الخوف من الخلق. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1792 | The Invincible and Dominant One, whom nothing can overcome or defeat. | الغالب الذي لا يُغلب ولا يُقهر. |
| 1793 | Recite 94 times after Fajr for gaining strength and overcoming difficulties. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 94 مرّة بعد الفجر طلبًا للقوة وتجاوز الصعاب. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1794 | The Irresistible One who repairs what is broken and compels all to His will. | الذي يجبر الكسر ويمضي مشيئته في كل شيء. |
| 1795 | Recite 206 times for healing of physical and spiritual ailments, and mending broken matters. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 206 مرّة رجاء شفاء العلل الجسدية والروحية وجبر الأمور المنكسرة. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1796 | The One who is supremely great, above all creation in majesty and glory. | المتكبّر عن صفات الخلق، العظيم في جلاله ومجده فوق كل شيء. |
| 1797 | Recite 662 times to humble the ego and recognize divine supremacy. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 662 مرّة لكسر كِبر النفس واستحضار عظمة الله. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1798 | The One who brings everything into existence from non-existence according to perfect measure. | الذي يوجد الأشياء من العدم بتقدير كامل. |
| 1799 | Recite 731 times for creativity, bringing new blessings, and for women seeking children. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 731 مرّة للإبداع واستجلاب نعم جديدة، ولمن ترجو الذرّية. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1800 | The One who evolves and shapes creation, bringing order from chaos. | الذي يبرأ الخلق ويسوّيه، فيُخرج النظام من الفوضى. |
| 1801 | Recite 213 times for bringing order to chaotic situations and personal transformation. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 213 مرّة لترتيب الأحوال المضطربة والتحوّل الشخصي. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1802 | The One who shapes and forms creation in perfect harmony and beauty. | الذي يصوّر الخلق في تناسق وجمال تامّين. |
| 1803 | Recite 336 times for beauty in character and for pregnant women for a beautiful healthy child. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 336 مرّة لحسن الخُلق، وللحامل رجاء ولد سليم حسن الخِلقة. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1804 | The One who continuously forgives all sins for those who seek forgiveness with sincerity. | الذي يغفر الذنوب مرة بعد مرة لمن استغفر بصدق. |
| 1805 | Recite 1281 times over a sustained practice for forgiveness of sins and purification of the heart. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 1281 مرّة بالمداومة طلبًا لمغفرة الذنوب وطهارة القلب. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1806 | The Irresistible One who has power over all things and subdues all creation. | القاهر فوق كل شيء، الذي خضع له الخلق كله. |
| 1807 | Recite 306 times for overcoming enemies and subduing the nafs (ego). For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 306 مرّة لدفع الأعداء وقهر النفس. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1808 | The One who continuously bestows gifts and blessings without expecting return. | الذي يهب العطايا والنعم دائمًا بلا انتظار مقابل. |
| 1809 | Recite 14 times after Fajr for increase in provision and blessings. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 14 مرّة بعد الفجر رجاء زيادة الرزق والبركة. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1810 | The One who provides all sustenance, both material and spiritual, to all creation. | الذي يرزق الخلق كله رزقًا ماديًا وروحيًا. |
| 1811 | Recite 308 times for provision and to remove poverty. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 308 مرّة طلبًا للرزق ودفع الفقر. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1812 | The One who opens doors of opportunity, knowledge, and divine understanding. | الذي يفتح أبواب الخير والعلم والفهم. |
| 1813 | Recite 489 times for opening of closed doors, both worldly and spiritual. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 489 مرّة رجاء فتح الأبواب المغلقة في الدنيا والدين. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1814 | The One whose knowledge encompasses all things, past, present, and future. | الذي أحاط علمه بكل شيء، ماضيه وحاضره ومستقبله. |
| 1815 | Recite 150 times for increase in knowledge and understanding of divine wisdom. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 150 مرّة لزيادة العلم وفهم حكمة الله. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1816 | The One who withholds and constricts, testing through difficulty and scarcity. | الذي يقبض ويمسك، ويبتلي بالشدّة والقلّة. |
| 1817 | Recite 903 times, or paired with Al-Bāsiṭ, for balance in giving and withholding. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 903 مرّة، أو مقرونًا باسم الباسط، للتوازن بين العطاء والإمساك. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1818 | The One who extends provision, opens doors, and grants abundance to whom He wills. | الذي يبسط الرزق ويفتح الأبواب ويعطي السعة لمن يشاء. |
| 1819 | Recite 72 times, or paired with Al-Qābiḍ, for balance, or alone for expansion in provision and relief. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 72 مرّة، أو مقرونًا باسم القابض للتوازن، أو منفردًا رجاء سعة الرزق والفرج. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1820 | The One who lowers the arrogant and humbles false pride, restoring rightful order. | الذي يخفض المتكبّرين ويذلّ الكِبر الزائف، فيردّ الأمر إلى نصابه. |
| 1821 | Recite 1481 times, or paired with Ar-Rāfiʿ, for protection from arrogance and against oppressive people. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 1481 مرّة، أو مقرونًا باسم الرافع، للحفظ من الكِبر ومن الظالمين. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1822 | The One who raises the sincere in rank, honor, and closeness to Him. | الذي يرفع الصادقين في المنزلة والكرامة والقرب منه. |
| 1823 | Recite 351 times for elevation in status, resolving difficulties, and gaining respect. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 351 مرّة رجاء رفعة المنزلة وتفريج الصعاب ونيل الاحترام. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1824 | The One who grants honor and strength to whomever He wills, regardless of outward means. | الذي يعزّ من يشاء ويقوّيه، بصرف النظر عن الأسباب الظاهرة. |
| 1825 | Recite 117 times, or paired with Al-Mudhill, for dignity and to counter humiliation from others. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 117 مرّة، أو مقرونًا باسم المذل، للكرامة ودفع الإهانة. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1826 | The One who humbles the arrogant and removes false honor from those who transgress. | الذي يذلّ المتكبّرين وينزع العزّة الزائفة ممن تجاوز الحدّ. |
| 1827 | Recite 770 times for protection from oppressors and to seek justice against wrongdoing. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 770 مرّة للحفظ من الظالمين وطلب العدل في المظالم. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1828 | The One who hears all sounds and supplications, however faint, without exception. | الذي يسمع كل صوت ودعاء مهما خفي، بلا استثناء. |
| 1829 | Recite 180 times when your duʿāʾ feels unheard, trusting that He hears every whispered plea. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 180 مرّة حين تشعر أن دعاءك لا يُسمع، ثقةً بأنه يسمع كل همس. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1830 | The One who sees all things, seen and unseen, with perfect and complete awareness. | الذي يبصر كل شيء، ظاهره وخفيّه، بإحاطة تامّة. |
| 1831 | Recite 302 times for guidance in matters requiring discernment and clear insight. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 302 مرّة طلبًا للهداية في الأمور التي تحتاج إلى تمييز وبصيرة. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1832 | The One whose judgment is final and perfectly just, ruling over all disputes. | الذي حكمه نافذ وعدل تامّ، يقضي في كل خلاف. |
| 1833 | Recite 68 times when seeking fair resolution to a dispute or an unjust situation. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 68 مرّة عند طلب حلّ عادل لخلاف أو حال ظالمة. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1834 | The One whose every decree is perfectly balanced and free of any inequity. | الذي كل قضائه موزون تامّ، لا جور فيه. |
| 1835 | Recite 104 times to cultivate fairness in one's own dealings and trust in divine justice. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 104 مرّة لتنمية العدل في معاملاتك والثقة بعدل الله. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1836 | The One whose kindness reaches His creation in ways too subtle to perceive, easing hardship gently. | الذي يصل لطفه إلى خلقه بطرق تدقّ عن الإدراك، فييسّر الشدائد برفق. |
| 1837 | Recite 129 times for gentle ease through difficulty and unseen relief. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 129 مرّة رجاء التيسير اللطيف في الشدّة والفرج الخفيّ. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1838 | The One who is intimately acquainted with the inner reality of all things. | الذي يعلم بواطن الأشياء وحقائقها. |
| 1839 | Recite 812 times for clarity when a situation's true nature is hidden from you. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 812 مرّة طلبًا للوضوح حين تخفى عليك حقيقة أمر. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1840 | The One who delays punishment out of mercy, giving space for repentance and correction. | الذي يؤخّر العقوبة رحمةً، ويفسح للتوبة والإصلاح. |
| 1841 | Recite 88 times for patience with others and to soften a quick temper. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 88 مرّة للصبر على الناس وتليين سرعة الغضب. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1842 | The One whose greatness has no limit and before whom all creation is humbled. | الذي لا حدّ لعظمته، وخضع له الخلق كله. |
| 1843 | Recite 1020 times to restore a sense of awe and humility before divine majesty. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 1020 مرّة لاستعادة الهيبة والتواضع أمام جلال الله. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1844 | The One whose forgiveness covers and conceals sin completely for the repentant. | الذي يستر الذنب ويغفره تمامًا للتائب. |
| 1845 | Recite 1286 times over a sustained practice, seeking forgiveness and covering of past faults. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 1286 مرّة بالمداومة طلبًا للمغفرة وستر ما مضى من الهفوات. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1846 | The One who rewards even small good deeds abundantly and acknowledges every effort. | الذي يجزي على القليل من العمل الصالح جزاءً وافرًا، ولا يضيع سعيًا. |
| 1847 | Recite 526 times to cultivate gratitude and to seek reward for small acts of good. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 526 مرّة لتنمية الشكر ورجاء الأجر على صغير الخير. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1848 | The One exalted absolutely above all creation in status, power, and being. | المتعالي تعاليًا مطلقًا فوق الخلق منزلةً وقدرةً ووجودًا. |
| 1849 | Recite 110 times for elevation in rank and to seek closeness to what is highest and purest. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 110 مرّة رجاء رفعة المنزلة والقرب مما هو أعلى وأطهر. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1850 | The One whose greatness surpasses every measure of created greatness. | الذي تفوق عظمته كل مقياس لعظمة مخلوقة. |
| 1851 | Recite 232 times to remember true scale and proportion when a worldly matter feels overwhelming. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 232 مرّة لتذكّر الأحجام الحقيقية حين يثقل عليك أمر دنيوي. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1852 | The One who protects and preserves all things from loss, harm, and decay. | الذي يحفظ كل شيء من الضياع والضرر والفساد. |
| 1853 | Recite 998 times for protection of oneself, one's family, health, and memory. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 998 مرّة لحفظ النفس والأهل والصحة والذاكرة. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1854 | The One who provides sustenance and nourishment sufficient for every created being. | الذي يقيت كل مخلوق بما يكفيه من قوت. |
| 1855 | Recite 550 times when seeking sustenance, sufficiency, and provision for one's needs. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 550 مرّة عند طلب القوت والكفاية والرزق للحاجات. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1856 | The One who accounts for every deed with perfect precision and is sufficient for those who trust Him. | الذي يحاسب على كل عمل بدقّة تامّة، وهو حسب من توكّل عليه. |
| 1857 | Recite 80 times for sufficiency in a difficult matter and trust that He accounts for all things. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 80 مرّة رجاء الكفاية في أمر عسير، وثقةً بأنه يحصي كل شيء. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1858 | The One possessing absolute majesty, dignity, and grandeur beyond comprehension. | ذو الجلال والكرامة والعظمة التي تفوق الإدراك. |
| 1859 | Recite 73 times to cultivate reverence and dignified bearing in one's own conduct. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 73 مرّة لتنمية الوقار وحسن السمت في سلوكك. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1860 | The One who gives generously and honorably, without being asked and without limit. | الذي يعطي بسخاء وكرم، بلا سؤال وبلا حدّ. |
| 1861 | Recite 270 times for generosity of provision, character, and honorable treatment from others. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 270 مرّة رجاء سعة الرزق وكرم الخُلق وحسن معاملة الناس. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1862 | The One who watches over all things constantly, missing nothing at any moment. | الذي يراقب كل شيء دائمًا، لا يغيب عنه شيء في أي لحظة. |
| 1863 | Recite 312 times to cultivate mindfulness (murāqabah) of being watched in every action. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 312 مرّة لتنمية المراقبة واستحضار نظر الله في كل عمل. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1864 | The One who answers the call of every supplicant, in the way and time He chooses. | الذي يجيب دعوة كل داعٍ، بالطريقة والوقت اللذين يختارهما. |
| 1865 | Recite 55 times while making duʿāʾ, especially in moments of sincere need. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 55 مرّة مع الدعاء، لا سيما في ساعات الحاجة الصادقة. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1866 | The One whose mercy, knowledge, and provision encompass all things without limit. | الذي وسعت رحمته وعلمه ورزقه كل شيء بلا حدّ. |
| 1867 | Recite 137 times when feeling constrained, to open oneself to unseen possibility. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 137 مرّة حين تشعر بالضيق، لتنفتح على أبواب لا تراها. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1868 | The One whose every decree carries perfect wisdom, even when hidden from us. | الذي في كل قضائه حكمة تامّة، وإن خفيت علينا. |
| 1869 | Recite 78 times for wisdom in decision-making and acceptance of what cannot be changed. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 78 مرّة طلبًا للحكمة في القرار والرضا بما لا يتغيّر. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1870 | The One whose love for His righteous servants is sincere, constant, and freely given. | الذي يحبّ عباده الصالحين حبًّا صادقًا دائمًا بلا مقابل. |
| 1871 | Recite 20 times to soften hearts, restore affection, and strengthen bonds of love. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 20 مرّة لتليين القلوب وإعادة المودّة وتقوية روابط المحبّة. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1872 | The One whose glory and nobility are perfect and beyond all comparison. | الذي له المجد والشرف التامّان بلا نظير. |
| 1873 | Recite 57 times to seek honor, glory, and a noble outcome in one's affairs. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 57 مرّة رجاء العزّة والمجد وحسن العاقبة في أمورك. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1874 | The One who will raise all creation after death and who awakens hearts from heedlessness. | الذي يبعث الخلق بعد الموت، ويوقظ القلوب من الغفلة. |
| 1875 | Recite 573 times to awaken motivation, renewal, and a fresh start after stagnation. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 573 مرّة لإيقاظ الهمّة والتجدّد وبداية جديدة بعد الركود. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1876 | The One who witnesses all things directly, at every place and every moment. | الذي يشهد كل شيء مباشرة، في كل مكان وكل لحظة. |
| 1877 | Recite 319 times to find comfort that no wrong goes unseen and no good deed unwitnessed. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 319 مرّة لتطمئنّ بأنه لا ظلم يخفى ولا خير يضيع. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1878 | The One whose existence and reality are absolute, the ultimate standard of all truth. | الذي وجوده وحقيقته مطلقان، وهو أصل كل حقّ. |
| 1879 | Recite 108 times when seeking clarity, honesty, and firmness upon what is true. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 108 مرّة طلبًا للوضوح والصدق والثبات على الحقّ. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1880 | The One who is sufficient as a guardian and disposer of affairs for those who rely on Him. | الذي يكفي وكيلًا ومدبّرًا لأمور من توكّل عليه. |
| 1881 | Recite 66 times when placing full trust (tawakkul) in an outcome beyond your control. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 66 مرّة عند التوكّل التامّ في أمر خارج عن يدك. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1882 | The One possessing complete and unshakable strength, unlike any creature's power. | صاحب القوة التامّة الراسخة، لا كقوة أي مخلوق. |
| 1883 | Recite 116 times for inner strength and resilience in hardship. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 116 مرّة للقوة الباطنة والصمود في الشدّة. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1884 | The One whose power is unwavering firmness, needing no effort or exertion. | الذي قوّته ثبات لا يتزعزع، بلا جهد ولا نصب. |
| 1885 | Recite 500 times for steadfastness and firm resolve when facing a difficult trial. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 500 مرّة للثبات والعزيمة عند ابتلاء صعب. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1886 | The One who is the true guardian and close friend of the believers, protecting their affairs. | وليّ المؤمنين الحقّ وناصرهم، الذي يتولّى أمورهم. |
| 1887 | Recite 46 times for divine protection and closeness in times of loneliness or vulnerability. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 46 مرّة رجاء حفظ الله وقربه في أوقات الوحدة أو الضعف. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1888 | The One who is inherently worthy of all praise, in every state and circumstance. | المستحقّ لكل حمد بذاته، في كل حال. |
| 1889 | Recite 62 times to cultivate gratitude and a habit of praise in ease and hardship alike. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 62 مرّة لتنمية الشكر وعادة الحمد في السرّاء والضرّاء. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1890 | The One who counts and knows the exact number and detail of all things, however small. | الذي أحصى كل شيء عددًا وتفصيلًا، مهما صغر. |
| 1891 | Recite 148 times to find peace that nothing done in sincerity, however small, is ever lost. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 148 مرّة لتطمئنّ بأن العمل الخالص لا يضيع مهما صغر. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1892 | The One who began all of creation from nothing, without any prior model. | الذي بدأ الخلق كله من العدم، بلا مثال سابق. |
| 1893 | Recite 56 times when starting something new and seeking a strong, blessed beginning. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 56 مرّة عند ابتداء أمر جديد رجاء بداية قوية مباركة. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1894 | The One who will restore all creation after its ending, just as He originated it. | الذي يعيد الخلق بعد فنائه، كما بدأه. |
| 1895 | Recite 124 times when seeking to restore something lost — health, a relationship, or a state of ease. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 124 مرّة عند طلب ما فُقد — صحة أو علاقة أو حال يسر. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1896 | The One who gives life to bodies and, spiritually, brings hearts to life through faith. | الذي يحيي الأجساد، ويحيي القلوب بالإيمان. |
| 1897 | Recite 68 times to seek renewal of spirit and vitality in a period of heaviness. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 68 مرّة رجاء تجدّد الروح والحيوية في وقت الثقل. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1898 | The One who ordains the death of every living thing at its appointed time. | الذي قدّر موت كل حيّ في أجله المسمّى. |
| 1899 | Recite 490 times to reflect on mortality and reorder priorities toward what truly matters. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 490 مرّة للتفكّر في الموت وترتيب الأولويات نحو ما يهمّ حقًّا. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1900 | The One whose life is eternal, without beginning or end, sustaining all other life. | الحيّ الذي حياته أبدية بلا بداية ولا نهاية، وبه قيام كل حياة. |
| 1901 | Recite 18 times, or paired with Al-Qayyūm, for vitality, healing, and enduring strength. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 18 مرّة، أو مقرونًا باسم القيوم، رجاء الحيوية والشفاء والقوة الدائمة. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1902 | The One who sustains all existence while depending on nothing and no one. | القائم بكل موجود، الذي لا يحتاج إلى شيء ولا إلى أحد. |
| 1903 | Recite 156 times when feeling unsteady, to anchor yourself in what alone truly sustains. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 156 مرّة حين تشعر بعدم الثبات، لتستند إلى من به وحده القيام. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1904 | The One who lacks nothing and finds whatever He wills without any search. | الذي لا يعوزه شيء، ويجد ما يريد بلا طلب. |
| 1905 | Recite 14 times when seeking something lost — an object, an answer, or a way forward. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 14 مرّة عند طلب ما فُقد — شيء أو جواب أو طريق. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1906 | The One of perfect nobility, generosity, and glory combined in absolute measure. | الذي اجتمع له كمال الشرف والكرم والمجد. |
| 1907 | Recite 48 times to seek nobility of character and a generous, glorious outcome. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 48 مرّة رجاء شرف الخُلق والكرم وحسن العاقبة. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1908 | The One who is singular in His essence, without partner, equal, or division. | الواحد في ذاته، بلا شريك ولا نظير ولا تجزّؤ. |
| 1909 | Recite 19 times to affirm tawḥīd (divine oneness) and unify a scattered heart and mind. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 19 مرّة لتحقيق التوحيد وجمع القلب والعقل المتفرّقين. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1910 | The One utterly indivisible and incomparable, unlike anything in creation. | الأحد الذي لا ينقسم ولا يُشبَّه، ليس كمثله شيء. |
| 1911 | Recite 13 times alongside Al-Wāḥid to deepen certainty in God's absolute oneness. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 13 مرّة مع اسم الواحد لتعميق اليقين بوحدانية الله. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1912 | The One depended upon by all creation, while He depends on nothing whatsoever. | الذي يصمد إليه الخلق كله، وهو غنيّ عن كل شيء. |
| 1913 | Recite 134 times when in need, turning to the One true, sufficient refuge for every matter. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 134 مرّة عند الحاجة، بالتوجّه إلى الملجأ الحقّ الكافي في كل أمر. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1914 | The One capable of all things, with power that meets no obstacle or limitation. | القادر على كل شيء، لا تعترض قدرته عقبة ولا حدّ. |
| 1915 | Recite 305 times when a matter feels impossible, to remember nothing is beyond His power. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 305 مرّة حين يبدو أمر مستحيلًا، لتتذكّر أن لا شيء يعجز قدرته. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1916 | The One who exercises total power with complete authority over how and when things occur. | الذي يمضي قدرته التامّة بسلطان كامل على كيف ومتى تقع الأشياء. |
| 1917 | Recite 744 times for authority and command over a difficult or chaotic situation. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 744 مرّة رجاء التمكّن في أمر صعب أو مضطرب. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1918 | The One who brings forward whom and whatever He wills, ahead of its expected time. | الذي يقدّم من يشاء وما يشاء قبل وقته المنتظر. |
| 1919 | Recite 184 times when seeking to move a stalled matter forward or to advance in rank. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 184 مرّة رجاء تقديم أمر متعثّر أو الترقّي في المنزلة. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1920 | The One who delays whom and whatever He wills, with wisdom hidden in the timing. | الذي يؤخّر من يشاء وما يشاء، بحكمة خفيّة في التوقيت. |
| 1921 | Recite 846 times for patience and trust when something you want is delayed. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 846 مرّة للصبر والثقة حين يتأخّر ما تريد. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1922 | The One who exists before all things, with no beginning before Him. | الذي ليس قبله شيء، بلا بداية. |
| 1923 | Recite 37 times when beginning a new phase, seeking a foundation rooted in what is eternal. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 37 مرّة عند ابتداء مرحلة جديدة، طلبًا لأساس متجذّر في الباقي. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1924 | The One who remains after all things end, with no end following Him. | الذي ليس بعده شيء، الباقي بعد فناء كل شيء. |
| 1925 | Recite 801 times for perspective on what truly lasts, beyond the temporary and fleeting. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 801 مرّة للنظر فيما يبقى حقًّا وراء الزائل العابر. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1926 | The One whose signs are evident throughout all of creation, visible to those who reflect. | الذي آياته ظاهرة في الخلق كله لمن تأمّل. |
| 1927 | Recite 1106 times to see divine signs more clearly in everyday life and nature. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 1106 مرّة لرؤية آيات الله أوضح في الحياة اليومية والطبيعة. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1928 | The One whose true essence is beyond perception, hidden from every created sense. | الذي تحتجب حقيقة ذاته عن الإدراك، خفيّة عن كل حسّ مخلوق. |
| 1929 | Recite 62 times to seek inward, hidden knowledge and closeness beyond outward appearances. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 62 مرّة لطلب المعرفة الباطنة والقرب وراء الظواهر. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1930 | The One who governs and administers the affairs of all creation with complete authority. | الذي يتولّى أمور الخلق كله ويدبّرها بسلطان تامّ. |
| 1931 | Recite 47 times for order and good governance in one's own household or responsibilities. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 47 مرّة رجاء النظام وحسن التدبير في بيتك ومسؤولياتك. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1932 | The One utterly exalted above every limitation, comparison, or created attribute. | المتعالي تعاليًا مطلقًا عن كل حدّ ومثيل وصفة مخلوقة. |
| 1933 | Recite 551 times to rise above petty concerns and reconnect with what is truly transcendent. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 551 مرّة للارتفاع عن الصغائر والعودة إلى ما هو متعالٍ حقًّا. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1934 | The One whose goodness and kindness toward His creation is expansive and unceasing. | الذي برّه وإحسانه إلى خلقه واسع لا ينقطع. |
| 1935 | Recite 202 times to invite goodness into one's affairs and to become a source of good to others. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 202 مرّة لاستجلاب الخير إلى أمورك وأن تكون مصدر خير للناس. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1936 | The One who repeatedly accepts the repentance of His servants, however often they return. | الذي يقبل توبة عباده مرة بعد مرة، مهما رجعوا. |
| 1937 | Recite 409 times when seeking sincere repentance (tawbah) and a fresh start after wrongdoing. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 409 مرّة عند طلب التوبة الصادقة وبداية جديدة بعد الذنب. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1938 | The One who justly requites wrongdoing and defends the oppressed against oppressors. | الذي يجازي الظلم بالعدل، وينتصر للمظلوم من الظالم. |
| 1939 | Recite 630 times when seeking justice against persistent wrongdoing, with patience and restraint. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 630 مرّة عند طلب العدل أمام ظلم مستمرّ، مع الصبر وضبط النفس. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1940 | The One who erases sin entirely, as though it had never been committed. | الذي يمحو الذنب كليًا، كأنه لم يكن. |
| 1941 | Recite 156 times seeking complete pardon, and to cultivate the habit of pardoning others. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 156 مرّة طلبًا للعفو التامّ، ولتنمية عادة العفو عن الناس. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1942 | The One whose tenderness and gentle compassion soften even the harshest hardship. | الذي رأفته ورحمته اللطيفة تليّن أشدّ الشدائد. |
| 1943 | Recite 292 times for gentleness with oneself and others in a season of hardship. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 292 مرّة للرفق بالنفس وبالناس في أوقات الشدّة. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1944 | The One who owns and grants dominion to whomever He wills, and removes it as He wills. | الذي يملك الملك ويؤتيه من يشاء، وينزعه ممن يشاء. |
| 1945 | Recite 212 times for authority in one's affairs and acceptance of shifts in fortune. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 212 مرّة رجاء التمكّن في أمورك والرضا بتقلّب الأحوال. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1946 | The One who combines absolute majesty with boundless generosity toward His creation. | الذي جمع الجلال المطلق والكرم الذي لا حدّ له لخلقه. |
| 1947 | Recite 1100 times for a combination of dignity and generosity in one's own character. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 1100 مرّة للجمع بين الوقار والكرم في خُلقك. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1948 | The One who establishes perfect equity in all His judgments and dealings. | الذي يقيم القسط التامّ في كل أحكامه ومعاملاته. |
| 1949 | Recite 209 times when seeking a fair, balanced resolution between two parties. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 209 مرّة عند طلب حلّ عادل متوازن بين طرفين. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1950 | The One who will gather all creation together, and who unites what is scattered. | الذي يجمع الخلق كله، ويؤلّف ما تفرّق. |
| 1951 | Recite 114 times to reunite a scattered family, community, or a fragmented state of mind. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 114 مرّة لجمع شمل الأسرة أو الجماعة أو الذهن المشتّت. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1952 | The One utterly free of any need, possessing complete and total riches. | الغنيّ غنًى مطلقًا، لا يحتاج إلى شيء. |
| 1953 | Recite 1060 times for contentment (qināʿah) and freedom from dependence on others. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 1060 مرّة للقناعة والاستغناء عن الناس. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1954 | The One who enriches and grants sufficiency to whomever He wills. | الذي يغني من يشاء ويكفيه. |
| 1955 | Recite 1100 times when seeking financial ease, sufficiency, and freedom from want. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 1100 مرّة عند طلب اليسر المالي والكفاية والاستغناء. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1956 | The One who withholds harm from His servants and protects them from what would injure them. | الذي يمنع الأذى عن عباده ويحفظهم مما يضرّهم. |
| 1957 | Recite 161 times for protection from harm, danger, and calamity. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 161 مرّة للحفظ من الأذى والخطر والبلاء. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1958 | The One who permits hardship to occur as a test, trial, or consequence, within His wisdom. | الذي يأذن بوقوع الشدّة ابتلاءً أو جزاءً، بحكمته. |
| 1959 | Recite 1001 times for perspective when facing hardship, trusting the wisdom behind it. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 1001 مرّة للنظر الصحيح عند الشدّة، ثقةً بالحكمة وراءها. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1960 | The One from whom all true benefit flows, in this life and the next. | الذي يصدر عنه كل نفع حقيقي في الدنيا والآخرة. |
| 1961 | Recite 201 times when seeking benefit and blessing in an undertaking or decision. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 201 مرّة عند طلب النفع والبركة في عمل أو قرار. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1962 | The One who illuminates the heavens, the earth, and the hearts of the guided. | الذي ينير السماوات والأرض وقلوب المهتدين. |
| 1963 | Recite 256 times for clarity, guidance, and light in a time of confusion. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 256 مرّة طلبًا للوضوح والهداية والنور في وقت الحيرة. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1964 | The One who guides whom He wills to the straight path and true understanding. | الذي يهدي من يشاء إلى الصراط المستقيم والفهم الحقّ. |
| 1965 | Recite 20 times when seeking direction and guidance at a crossroads in life. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 20 مرّة عند طلب الوجهة والهداية في مفترق الطرق. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1966 | The One who creates without any precedent or prior example to follow. | الذي يخلق بلا مثال سابق يُحتذى. |
| 1967 | Recite 86 times when seeking creative insight or an unprecedented solution to a problem. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 86 مرّة عند طلب البصيرة المبدعة أو حلّ غير مسبوق لمشكلة. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1968 | The One whose existence continues forever, unaffected by the passing of time. | الذي يدوم وجوده أبدًا، لا يؤثّر فيه مرور الزمن. |
| 1969 | Recite 113 times for perspective on what endures, beyond what is temporary and passing. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 113 مرّة للنظر فيما يدوم وراء المؤقّت الزائل. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1970 | The One who remains and inherits all things after every creation has perished. | الذي يبقى ويرث كل شيء بعد فناء الخلق. |
| 1971 | Recite 707 times for detachment from what is temporary and trust in what truly remains. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 707 مرّة للتجرّد مما يزول والثقة بما يبقى حقًّا. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1972 | The One whose guidance leads infallibly to what is right, without any misdirection. | الذي يهدي إلى الرشد هداية لا خطأ فيها. |
| 1973 | Recite 514 times when seeking sound judgment and the right decision in a complex matter. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 514 مرّة عند طلب الرأي السديد والقرار الصائب في أمر معقّد. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1974 | The One who withholds swift punishment with perfect patience, giving time for return. | الذي يمهل ولا يعجّل العقوبة بصبر تامّ، ليفسح للرجوع. |
| 1975 | Recite 298 times for patience (ṣabr) in prolonged hardship or waiting. For a shorter practice, 33 or 99 repetitions is also a widely used count. | يُذكر 298 مرّة للصبر في الشدّة الطويلة أو الانتظار. وللممارسة الأقصر، فإن 33 أو 99 مرّة عدد شائع أيضًا. |
| 1976 | O Most Subtle, Most Kind | يا لطيف |
| 1977 | Misk wa Ward | مسك وورد |
| 1978 | Musk + Rose | مسك + ورد |
| 1979 | For harmony and softened hearts | للانسجام وتليين القلوب |
| 1980 | Lubān wa Misk | لبان ومسك |
| 1981 | Al-Iklīl | الإكليل |
| 1982 | Honor is a trust worn lightly — crowns in the sky remind of responsibility, not entitlement. | الشرف أمانة تُحمل بخفّة — والتيجان في السماء تذكّر بالمسؤولية لا بالاستحقاق. |
| 1983 | Lunar Mansions (Manāzil) | المنازل القمرية |
| 1984 | The 28 lunar mansions: today’s manzil, Arabic names, spiritual focus, and links to birth profile and ikhtiyārāt. For reflection. | المنازل القمرية الثماني والعشرون: منزلة اليوم، والأسماء العربية، والمحور الروحي، وروابط ملف الميلاد والاختيارات. للتأمّل. |
| 1985 | Best Dates (Ikhtiyārāt) | أفضل التواريخ (الاختيارات) |
| 1986 | The days and planetary hours the ikhtiyārāt rules favour for a nikāḥ, Sunnah notes and the next favourable dates. | الأيام والساعات الكوكبية التي ترجّحها قواعد الاختيارات لعقد النكاح، مع ملاحظات من السنّة وأقرب التواريخ المناسبة. |
| 1987 | Thursday and early departure in the Sunnah, plus the favourable days and planetary hours for a journey. | الخميس والبكور في السنّة، مع الأيام والساعات الكوكبية المناسبة للسفر. |
| 1988 | The days and planetary hours the ikhtiyārāt rules favour for moving into a new home or laying a foundation. | الأيام والساعات الكوكبية التي ترجّحها قواعد الاختيارات للانتقال إلى منزل جديد أو وضع الأساس. |
| 1989 | The days and planetary hours the ikhtiyārāt rules favour for starting a business or signing a contract. | الأيام والساعات الكوكبية التي ترجّحها قواعد الاختيارات لبدء مشروع تجاري أو توقيع عقد. |
| 1990 | Sadaqah by day of the week, by Hijri birth month (Tamxarit, Gamo, Korité, Tabaski…) and by burj. | الصدقة بحسب يوم الأسبوع وشهر الميلاد الهجري (تمخاريت، غامو، كوريتي، تباسكي…) والبرج. |
| 1991 | Maghribi | المغربي |
| 1992 | Mashriqi | المشرقي |
| 1993 | Ikhtiyārāt | الاختيارات |
| 1994 | For reflection, not prediction. No timing replaces istikhāra, consultation (mashwara) with family and trusted scholars, and tawakkul (reliance on Allah); Allah alone knows the unseen. | للتأمّل لا للتنبّؤ. لا يغني أي توقيت عن الاستخارة ومشاورة الأهل وأهل العلم الثقات والتوكّل على الله؛ والله وحده يعلم الغيب. |
| 1995 | Planetary hours and the Moon depend on location. This page uses Makkah, the app's default location; the Best Dates tool computes for your own location. | تتوقّف الساعات الكوكبية والقمر على الموقع. تستعمل هذه الصفحة مكة المكرمة، الموقع الافتراضي للتطبيق؛ أما أداة أفضل التواريخ فتحسب لموقعك أنت. |
| 1996 | This tool reflects a refinement from the classical Islamic tradition of ʿIlm al-Nujūm (electional astrology). It is not a substitute for istikhāra, consultation (mashwara) with family and trusted scholars, and tawakkul (reliance on Allah). No date is religiously forbidden for nikāḥ — marriage is permitted at any time of the year. | تعكس هذه الأداة تهذيبًا من التراث الإسلامي الكلاسيكي في علم النجوم (علم الاختيارات). ولا تغني عن الاستخارة ومشاورة الأهل وأهل العلم الثقات والتوكّل على الله. ولا يوجد تاريخ محرّم شرعًا للنكاح — فالزواج جائز في أي وقت من السنة. |
| 1997 | How scoring works: each rule adds or subtracts points; the total is scaled to a 0–100 score against that election type's own maximum achievable points, so the tier bands (Mumtāz, Jayyid, Maqbūl, Ḍaʿīf, Ijtanib) mean the same thing across marriage, travel, and any future election type. | كيف يجري التقدير: كل قاعدة تضيف نقاطًا أو تنقص منها؛ ثم يُحوَّل المجموع إلى درجة من 0 إلى 100 نسبةً إلى أقصى ما يمكن بلوغه في نوع الاختيار نفسه، فتعني المراتب (ممتاز، جيد، مقبول، ضعيف، اجتنب) الشيء نفسه في الزواج والسفر وأي نوع اختيار لاحق. |
| 1998 | Stars (Ikhtiyārāt) | النجوم (الاختيارات) |
| 1999 | Rabi' al-Thani | ربيع الآخر |
| 2000 | Conditions worsen later this day — Moon Applying to Saturn/Mars (Hard Aspect) after ~21:00. | تسوء الأحوال لاحقًا في هذا اليوم — القمر متّصل بزحل/المريخ (نظر نحس) بعد نحو الساعة 21:00. |
| 2001 | The Moon is in its darkest phase right before a new moon — traditionally a time to wait, not begin. | القمر في أشدّ أطواره ظلمة قبيل المحاق — وهو تقليديًا وقت للانتظار لا للابتداء. |
| 2002 | Moon Combust (Muḥtaraq) | القمر محترق |
| 2003 | The Moon is too close to the Sun right now and appears "hidden" — this weakens its influence. | القمر قريب جدًا من الشمس الآن ويبدو «مختفيًا» — وهذا يضعف دلالته. |
| 2004 | The Moon isn't forming any meaningful connection with another planet right now — traditionally, things begun in this state tend to fizzle out. | القمر لا يتّصل الآن بأي كوكب اتصالًا معتبرًا (خالي السير) — وما يُبدأ في هذه الحال يميل تقليديًا إلى أن يتلاشى. |
| 2005 | The Moon is in a tense position with Saturn or Mars right now — a traditional warning sign for this kind of start. | القمر الآن في نظر متوتّر مع زحل أو المريخ — وهي علامة تحذير تقليدية لهذا النوع من الابتداء. |
| 2006 | A solar or lunar eclipse is happening within a day of this date — traditionally treated as an unsettled period to avoid for major beginnings. | كسوف أو خسوف يقع في غضون يوم من هذا التاريخ — ويُعدّ تقليديًا وقتًا مضطربًا تُجتنب فيه البدايات الكبرى. |
| 2007 | The Moon is close enough to the Sun to be dimmed, though not fully hidden — a mild weakening. | القمر قريب من الشمس بما يكفي ليخفت، وإن لم يختفِ تمامًا — ضعف خفيف. |
| 2008 | Via Combusta (Al-Ṭarīqa al-Muḥtariqa) | الطريقة المحترقة |
| 2009 | The Moon is passing through a stretch of the zodiac traditionally considered turbulent (the "burning path"). | القمر يمرّ بقطاع من البروج يُعدّ تقليديًا مضطربًا («الطريقة المحترقة»). |
| 2010 | Venus appears to be moving backward right now — traditionally a caution for matters of love and relationships. | الزهرة تبدو راجعة الآن — وهو تقليديًا تنبيه في أمور المحبّة والعلاقات. |
| 2011 | Venus is in a sign where it traditionally expresses its qualities less comfortably. | الزهرة في برج تُظهر فيه صفاتها تقليديًا بارتياح أقل. |
| 2012 | The Moon is in a sign that gives it a mild traditional boost here. | القمر في برج يمنحه هنا قوة تقليدية خفيفة. |
| 2013 | This specific time window aligns with a planetary hour traditionally seen as supportive. | هذه النافذة الزمنية توافق ساعة كوكبية تُعدّ تقليديًا داعمة. |
| 2014 | Travel often suits hours of the Moon or Mercury when those planets are well placed; business and trade lean toward Mercury, Jupiter or Venus hours depending on the aim (contracts, growth, or harmony). Always read the hour together with the day ruler and the Moon's condition rather than in isolation. | يناسب السفر غالبًا ساعات القمر أو عطارد إذا حسن موضعهما؛ وتميل التجارة إلى ساعات عطارد أو المشتري أو الزهرة بحسب الغاية (العقود، النموّ، الانسجام). واقرأ الساعة دائمًا مع حاكم اليوم وحال القمر، لا منفردة. |
| 2015 | A name number cannot tell you whether a marriage will succeed. Ask about dīn and character, consult both families, pray ṣalāt al-istikhāra and put your trust in Allah. Use this tool for reflection and conversation, not as a verdict; Allah alone knows the unseen. | لا يستطيع عدد الاسم أن يخبرك بنجاح الزواج. اسأل عن الدين والخُلق، واستشر الأسرتين، وصلِّ صلاة الاستخارة، وتوكّل على الله. واستعمل هذه الأداة للتأمّل والحديث، لا حكمًا؛ والله وحده يعلم الغيب. |
| 2016 | The two totals are added together with 7 and divided by 9; the remainder (1–9, with 0 counted as 9) is the soul-connection number. | يُجمع المجموعان مع 7 ويُقسم الناتج على 9؛ والباقي (1–9، والصفر يُعدّ 9) هو عدد صلة الأرواح. |
| 2017 | You can switch between the Maghribi order (North and West Africa) and the Mashriqi order (the East). Most names give the same total in both; names with letters such as ṣād, sīn, shīn, ḍād, ẓāʾ or ghayn can differ. | يمكنك التبديل بين الترتيب المغربي (شمال أفريقيا وغربها) والترتيب المشرقي. وأكثر الأسماء تعطي المجموع نفسه في الترتيبين؛ أما الأسماء التي فيها حروف كالصاد والسين والشين والضاد والظاء والغين فقد تختلف. |
| 2018 | Treat it as cultural reflection, not prediction. Choosing a spouse rests on dīn, character, family counsel and ṣalāt al-istikhāra. No number decides a marriage; Allah alone knows the unseen. | اجعله تأمّلًا ثقافيًا لا تنبّؤًا. فاختيار الزوج قائم على الدين والخُلق ومشورة الأهل وصلاة الاستخارة. ولا يحسم عددٌ زواجًا؛ والله وحده يعلم الغيب. |
| 2019 | Asrār divides the ecliptic into twenty-eight equal tropical sectors (~12°51′ each) from the Moon’s longitude — a clear computational convention for education and reflection. Classical star-tied (sidereal) bounds differ; we document the equal tropical method so the live card stays consistent with our planetary ephemeris. | يقسم أسرار فلك البروج إلى ثمانية وعشرين قطاعًا استوائيًا متساويًا (نحو 12°51′ لكل منها) بحسب طول القمر — اصطلاحٌ حسابي واضح للتعليم والتأمّل. وتختلف الحدود الكلاسيكية المرتبطة بالنجوم (النجمية)؛ ونوثّق الطريقة الاستوائية المتساوية لتبقى البطاقة الحيّة متّسقة مع تقويمنا الكوكبي. |
| 2020 | Browse all 28 manāzil | تصفّح المنازل الثماني والعشرين |
| 2021 | Al-Sharaṭān | الشرطين |
| 2022 | The Two Signs | العلامتان |
| 2023 | Starting fresh with courage and trust in Allah | بداية جديدة بشجاعة وتوكّل على الله |
| 2024 | Al-Buṭayn | البطين |
| 2025 | The Little Belly | البطن الصغير |
| 2026 | Cultivating inner strength and spiritual nourishment | تنمية القوة الباطنة والغذاء الروحي |
| 2027 | Al-Thurayyā | الثريا |
| 2028 | The Pleiades | الثريا |
| 2029 | Appreciating divine beauty in creation and community | تذوّق جمال صنع الله في الخلق والجماعة |
| 2030 | Al-Dabarān | الدبران |
| 2031 | The Follower | التابع |
| 2032 | Following the prophetic example with steadfastness | اتّباع الهدي النبوي بثبات |
| 2033 | Al-Haqʿah | الهقعة |
| 2034 | The White Spot | البقعة البيضاء |
| 2035 | Al-Hanʿah | الهنعة |
| 2036 | Recognizing one's unique spiritual purpose and calling | إدراك الغاية الروحية الخاصة والنداء الخاص |
| 2037 | Al-Dhirāʿ | الذراع |
| 2038 | The Forearm | الذراع |
| 2039 | Extending help to others and reaching for higher wisdom | مدّ يد العون للآخرين والتطلّع إلى حكمة أعلى |
| 2040 | Al-Nathrah | النثرة |
| 2041 | The Gap | الفُرجة |
| 2042 | Contemplating the mysteries of faith and divine wisdom | التأمّل في أسرار الإيمان والحكمة الإلهية |
| 2043 | Al-Ṭarf | الطرف |
| 2044 | The Glance | النظرة |
| 2045 | Looking with care: notice what you see before you act, and ask Allah for insight without haste. | انظر بعناية: تأمّل ما تراه قبل أن تعمل، واسأل الله البصيرة دون عجلة. |
| 2046 | Al-Jabhah | الجبهة |
| 2047 | The Forehead | الجبهة |
| 2048 | Carry dignity with humility — leadership here means service and clear intention before Allah. | احمل الكرامة بتواضع — فالقيادة هنا خدمة ونيّة واضحة بين يدي الله. |
| 2049 | Al-Zubrah | الزبرة |
| 2050 | The Mane | العُرف |
| 2051 | Al-Ṣarfah | الصرفة |
| 2052 | The Changer | المنصرف |
| 2053 | Seasons turn: release what no longer serves, and turn toward what Allah has made clearer. | تدور الفصول: تخلَّ عمّا لم يعد نافعًا، وتوجّه إلى ما جعله الله أوضح. |
| 2054 | Al-ʿAwwāʾ | العوّاء |
| 2055 | The Barker | العوّاء |
| 2056 | Al-Simāk | السماك |
| 2057 | Al-Simāk al-Aʿzal (“the unarmed”) invites fair measure — harvest with gratitude, without grasping. | السماك الأعزل يدعو إلى الوفاء بالكيل — احصد بشكر دون تشبّث. |
| 2058 | Al-Ghafr | الغفر |
| 2059 | The Covering | الغطاء |
| 2060 | Al-Zubānā | الزبانى |
| 2061 | The Claws | المخلبان |
| 2062 | Set boundaries with justice: cut what harms, without cruelty. | ضع الحدود بالعدل: اقطع ما يضرّ، دون قسوة. |
| 2063 | Al-Qalb | القلب |
| 2064 | Return to the heart: sincerity (ikhlāṣ) before intensity — courage without crushing others. | عُد إلى القلب: الإخلاص قبل الشدّة — شجاعة دون سحق الآخرين. |
| 2065 | Al-Shawlah | الشولة |
| 2066 | The sting is for defense, not attack — restrain the tongue and hand unless justice requires otherwise. | الحُمة للدفاع لا للهجوم — أمسك لسانك ويدك إلا أن يقتضي العدل غير ذلك. |
| 2067 | The Ostriches | النعائم |
| 2068 | Wide spaces invite travel of body and heart — move with tawakkul and good company. | الفسحة تدعو إلى سفر البدن والقلب — سِر بتوكّل وصحبة صالحة. |
| 2069 | Al-Baldah | البلدة |
| 2070 | The Fortunate Sacrificer | سعد الذابح |
| 2071 | Named among the saʿd stations: reflect on what you are willing to offer — wealth, time, ego — for Allah’s sake. (Educational theme only; not a ritual prescription.) | من منازل السعود: تأمّل ما أنت مستعدّ لبذله — المال والوقت والأنا — لوجه الله. (موضوع تعليمي فقط؛ لا وصفة شعائرية.) |
| 2072 | Saʿd Bulaʿ | سعد بلع |
| 2073 | The Fortunate Swallower | سعد بلع |
| 2074 | Absorb lessons slowly: take in knowledge and counsel, then digest before speaking. | استوعب الدروس على مهل: خذ العلم والنصح، ثم تدبّرهما قبل الكلام. |
| 2075 | The Most Fortunate | سعد السعود |
| 2076 | Named “most fortunate” in the star calendar — meet ease with shukr, and hardship with hope in Allah alone. | سُمّي «سعد السعود» في تقويم النجوم — فاستقبل اليسر بالشكر، والعسر بالرجاء في الله وحده. |
| 2077 | Saʿd al-Akhbiyah | سعد الأخبية |
| 2078 | The Fortunate Tents | سعد الأخبية |
| 2079 | Al-Fargh al-Muqaddam | الفرغ المقدّم |
| 2080 | The Former Spout | الفرغ المقدّم |
| 2081 | The former spout of the bucket: begin letting good flow — speech, charity, and help — with measured opening. | الفرغ المقدّم من الدلو: ابدأ بإجراء الخير — الكلام والصدقة والعون — بانفتاح موزون. |
| 2082 | Al-Fargh al-Muʾakhkhar | الفرغ المؤخّر |
| 2083 | The Latter Spout | الفرغ المؤخّر |
| 2084 | The latter spout completes the pouring — finish what you opened, and empty the heart of grudges. | الفرغ المؤخّر يُتمّ الإفراغ — أتمّ ما فتحت، وأفرغ القلب من الضغائن. |
| 2085 | Belly of the Fish | بطن الحوت |
| 2086 | Date of birth or date of giving | تاريخ الميلاد أو تاريخ العطاء |
| 2087 | Enter either your date of birth or the day you plan to give sadaqah — its day of the week determines the guidance. | أدخل تاريخ ميلادك أو اليوم الذي تنوي التصدّق فيه — ويوم الأسبوع الذي يوافقه هو الذي يحدّد الإرشاد. |
| 2088 | Calculate | احسب |
| 2089 | Cautious | حذر |
| 2090 | Venus is weakened in Scorpio | الزهرة ضعيفة في برج العقرب |
| 2091 | The Crown | الإكليل |
| 2092 | Focus | المحور |
| 2093 | Traditional stations for reflection and timing adab — not prediction. Allah alone knows the unseen. | منازل تقليدية للتأمّل وأدب التوقيت — لا للتنبّؤ. والله وحده يعلم الغيب. |
| 2094 | Guide to all 28 manāzil → | دليل المنازل الثماني والعشرين ← |
| 2095 | ▶ Activities & wisdom (educational) | ▶ الأنشطة والحكمة (تعليمي) |
| 2096 | Manzil of today / tonight | منزلة اليوم / الليلة |
| 2097 | Manāzil al-qamar · 28 stations | منازل القمر · 28 منزلة |
| 2098 | · New Moon | · محاق |
| 2099 | Gather children and give them food as sadaqah; Help anyone who is poor or in need | اجمع الأطفال وأطعمهم صدقةً؛ أعِن كل فقير أو محتاج |
| 2100 | Give water as sadaqah; Help an elderly person, a woman, or children; Give food or sadaqah to children in the evening | تصدّق بالماء؛ أعِن مسنًّا أو امرأة أو أطفالًا؛ أعطِ الأطفال طعامًا أو صدقة في المساء |
| 2101 | Giving food to children; Helping a person who is experiencing difficulties; Helping someone purchase their medication; Contributing toward someone's medical or medication expenses | إطعام الأطفال؛ إعانة من يمرّ بضائقة؛ مساعدة أحدهم في شراء دوائه؛ الإسهام في نفقات علاج أحدهم أو دوائه |
| 2102 | Give white paper and pens; Provide food to children | أعطِ ورقًا أبيض وأقلامًا؛ أطعم الأطفال |
| 2103 | Giving food to people in need; Giving money as sadaqah; Supporting a mosque; Helping to clean a mosque; Performing voluntary service in the mosque | إطعام المحتاجين؛ التصدّق بالمال؛ دعم مسجد؛ المساعدة في تنظيف مسجد؛ التطوّع بالخدمة في المسجد |
| 2104 | Clothes; Soap; Perfume | ثياب؛ صابون؛ طيب |
| 2105 | Giving essential food items such as rice, oil, and other necessities; Helping an elderly person with their needs; Providing financial assistance to someone in difficulty | إعطاء المواد الغذائية الأساسية كالأرز والزيت وسائر الضروريات؛ إعانة مسنّ في حاجاته؛ تقديم عون مالي لمن هو في ضيق |
| 2106 | Enter your Gregorian date of birth to find the Hijri (Islamic) month you were born in. Wolof names are shown where they are commonly used (Tamxarit, Gamo, Korité, Tabaski…). | أدخل تاريخ ميلادك الميلادي لتعرف الشهر الهجري الذي وُلدت فيه. وتُعرض الأسماء الولوفية حيث يشيع استعمالها (تمخاريت، غامو، كوريتي، تباسكي…). |
| 2107 | Muharram (Tamxarit) | محرّم (تمخاريت) |
| 2108 | For anyone born in Muharram (Tamxarit), their sadaqah can include: | لمن وُلد في محرّم (تمخاريت)، يمكن أن تشمل صدقته: |
| 2109 | Feeding someone who is fasting. | إطعام صائم. |
| 2110 | Helping an orphan or orphans. | إعانة يتيم أو أيتام. |
| 2111 | Giving other forms of charity according to their ability. | أنواع أخرى من الصدقة بحسب استطاعته. |
| 2112 | For anyone born in Safar, their sadaqah can include: | لمن وُلد في صفر، يمكن أن تشمل صدقته: |
| 2113 | Giving rice. | التصدّق بالأرز. |
| 2114 | Giving flour. | التصدّق بالدقيق. |
| 2115 | Giving cooking oil. | التصدّق بزيت الطبخ. |
| 2116 | Giving clothes. | التصدّق بالثياب. |
| 2117 | Helping sick people, financially or with whatever they need. | إعانة المرضى بالمال أو بما يحتاجون إليه. |
| 2118 | Rabi al-Awwal (Gamo) | ربيع الأول (غامو) |
| 2119 | For anyone born in Rabi al-Awwal (Gamo), their sadaqah can include: | لمن وُلد في ربيع الأول (غامو)، يمكن أن تشمل صدقته: |
| 2120 | Giving sadaqah to children. | التصدّق على الأطفال. |
| 2121 | Helping and supporting the mosque. | إعانة المسجد ودعمه. |
| 2122 | Rabi al-Thani (Rabi al-Akhir) | ربيع الآخر (ربيع الثاني) |
| 2123 | For anyone born in Rabi al-Thani (Rabi al-Akhir), their sadaqah can include: | لمن وُلد في ربيع الآخر (ربيع الثاني)، يمكن أن تشمل صدقته: |
| 2124 | Giving soap. | التصدّق بالصابون. |
| 2125 | Helping with necessities that can support a person or family. | الإعانة بالضروريات التي تسند شخصًا أو أسرة. |
| 2126 | Jumada al-Awwal | جمادى الأولى |
| 2127 | For anyone born in Jumada al-Awwal, their sadaqah can include: | لمن وُلد في جمادى الأولى، يمكن أن تشمل صدقته: |
| 2128 | Giving hot, nourishing food. | التصدّق بطعام ساخن مغذٍّ. |
| 2129 | Supporting hardworking people who are facing difficult circumstances. | إعانة الكادحين الذين يمرّون بظروف صعبة. |
| 2130 | Jumada al-Akhirah (Jumada al-Thani) | جمادى الآخرة (جمادى الثانية) |
| 2131 | For anyone born in Jumada al-Akhirah, their sadaqah is especially good when it is given discreetly and privately. | لمن وُلد في جمادى الآخرة، تحسن صدقته خاصةً إذا أُعطيت خفيةً وسرًّا. |
| 2132 | Give food, money, or useful assistance. | أعطِ طعامًا أو مالًا أو عونًا نافعًا. |
| 2133 | Rajab | رجب |
| 2134 | For anyone born in Rajab, their sadaqah can focus on supporting people who learn and teach the Qur'an: | لمن وُلد في رجب، يمكن أن تتّجه صدقته إلى دعم من يتعلّمون القرآن ويعلّمونه: |
| 2135 | Giving a complete Qur'an (Kamil) to a mosque or place of Qur'anic learning. | إهداء مصحف كامل إلى مسجد أو مكان لتعليم القرآن. |
| 2136 | Providing Qur'ans for people to read and use. | توفير المصاحف للناس ليقرؤوا فيها. |
| 2137 | Donating Qur'ans to daaras. | التبرّع بالمصاحف للكتاتيب (الدارات). |
| 2138 | Helping mosques and places of Qur'anic learning. | إعانة المساجد وأماكن تعليم القرآن. |
| 2139 | Supporting Qur'anic students and those who use these places. | دعم طلاب القرآن ومرتادي هذه الأماكن. |
| 2140 | Sha'ban | شعبان |
| 2141 | For anyone born in Sha'ban, their sadaqah can include: | لمن وُلد في شعبان، يمكن أن تشمل صدقته: |
| 2142 | Sharing the meals prepared in their own home with a family in need. | مشاركة الطعام المطبوخ في بيته مع أسرة محتاجة. |
| 2143 | Giving food and other necessities to people who are struggling. | إعطاء الطعام وسائر الضروريات لمن يعانون. |
| 2144 | Ramadan (Werruk Korr) | رمضان (ورّوك كور) |
| 2145 | For anyone born in Ramadan (Werruk Korr), their sadaqah can include: | لمن وُلد في رمضان (ورّوك كور)، يمكن أن تشمل صدقته: |
| 2146 | Giving iftar to someone who is fasting. | تفطير صائم. |
| 2147 | Not being reluctant or hesitant to give their zakat when it is due. | ألّا يتردّد أو يتباطأ في إخراج زكاته إذا وجبت. |
| 2148 | Helping poor families and needy people with food, money, or necessities. | إعانة الأسر الفقيرة والمحتاجين بالطعام أو المال أو الضروريات. |
| 2149 | Giving this support at night, particularly to those who are in need. | تقديم هذا العون ليلًا، لا سيما لمن هم في حاجة. |
| 2150 | Shawwal (Korité) | شوال (كوريتي) |
| 2151 | For anyone born in Shawwal (Korité), their sadaqah can include: | لمن وُلد في شوال (كوريتي)، يمكن أن تشمل صدقته: |
| 2152 | Giving brand-new clothes to someone in need. | إعطاء ثياب جديدة لمحتاج. |
| 2153 | Dhu al-Qi'dah (Diggi Kor) | ذو القعدة (ديغي كور) |
| 2154 | For anyone born in Dhu al-Qi'dah (Diggi Kor), their sadaqah can include: | لمن وُلد في ذي القعدة (ديغي كور)، يمكن أن تشمل صدقته: |
| 2155 | Helping a traveller, financially or in any other way that can make their journey easier. | إعانة مسافر بالمال أو بأي طريقة تيسّر سفره. |
| 2156 | Giving food to poor and needy people. | إطعام الفقراء والمحتاجين. |
| 2157 | Giving hot, nourishing food as sadaqah to those in need. | التصدّق بطعام ساخن مغذٍّ على المحتاجين. |
| 2158 | Offering practical assistance to people experiencing hardship. | تقديم عون عملي لمن يمرّون بشدّة. |
| 2159 | Dhu al-Hijjah (Tabaski) | ذو الحجة (تباسكي) |
| 2160 | For anyone born in Dhu al-Hijjah (Tabaski), their sadaqah can include: | لمن وُلد في ذي الحجة (تباسكي)، يمكن أن تشمل صدقته: |
| 2161 | Giving meat as sadaqah, especially to poor and needy people. | التصدّق باللحم، لا سيما على الفقراء والمحتاجين. |
| 2162 | Helping pilgrims who have travelled to Makkah for Hajj, financially or in any other useful way. | إعانة الحجّاج المسافرين إلى مكة بالمال أو بأي طريقة نافعة. |
| 2163 | Visiting and welcoming a pilgrim when they return from Makkah, through ziyar. | زيارة الحاجّ والترحيب به عند عودته من مكة. |
| 2164 | Ḥamal | الحمل |
| 2165 | Livestock Sadaqah | صدقة الماشية |
| 2166 | Worn Clothing Sadaqah | صدقة الثياب الملبوسة |
| 2167 | al-Thawr | الثور |
| 2168 | One-Coloured Ram Sadaqah | صدقة كبش ذي لون واحد |
| 2169 | Used Clothing Sadaqah — Protection | صدقة الثياب المستعملة — للحفظ |
| 2170 | Grains and Agricultural Produce | الحبوب والمحاصيل الزراعية |
| 2171 | Rice, Millet and Cooking Oil | الأرز والدخن وزيت الطبخ |
| 2172 | Water Sadaqah | صدقة الماء |
| 2173 | Supporting an Elderly Person — Provision | إعانة مسنّ — للرزق |
| 2174 | Jawzāʾ | الجوزاء |
| 2175 | Kola Nut Sadaqah | صدقة جوز الكولا |
| 2176 | Money Sadaqah — Preservation of Wealth | صدقة المال — لحفظ المال |
| 2177 | Three-Coloured Chicken Sadaqah | صدقة دجاجة ثلاثية الألوان |
| 2178 | Guinea Fowl (Pintade) Sadaqah | صدقة دجاجة غينيا |
| 2179 | Educational Materials Sadaqah | صدقة الأدوات التعليمية |
| 2180 | Supporting Teachers and Qur'anic Teachers | دعم المعلّمين ومعلّمي القرآن |
| 2181 | Feeding Children | إطعام الأطفال |
| 2182 | Saraṭān | السرطان |
| 2183 | Salt Sadaqah | صدقة الملح |
| 2184 | Four Kilograms of Meat | أربعة كيلوغرامات من اللحم |
| 2185 | Supporting an Elderly Woman | إعانة امرأة مسنّة |
| 2186 | Giving Milk to Children | إعطاء الحليب للأطفال |
| 2187 | al-Asad | الأسد |
| 2188 | Raising and Giving a Ram | تربية كبش والتصدّق به |
| 2189 | Three Bowls of Cheb Yap | ثلاث قصعات من «شب ياپ» |
| 2190 | Three Bowls of Porridge with Yogurt | ثلاث قصعات من العصيدة باللبن |
| 2191 | al-Sunbula | السنبلة |
| 2192 | One Hundred Kola Nuts | مئة حبّة من جوز الكولا |
| 2193 | Money Sadaqah | صدقة المال |
| 2194 | Three Cereals Sadaqah | صدقة الحبوب الثلاثة |
| 2195 | Secret Sadaqah of Virgo — Age 40 | صدقة السنبلة السرّية — في سنّ الأربعين |
| 2196 | Seven Yogurts Sadaqah | صدقة سبعة أكواب من اللبن |
| 2197 | Guinea Fowl Sadaqah | صدقة دجاجة غينيا |
| 2198 | al-ʿAqrab | العقرب |
| 2199 | Protective Ring Sadaqah | صدقة خاتم الحفظ |
| 2200 | White Ram or Sheep Sadaqah | صدقة كبش أو خروف أبيض |
| 2201 | Red Goat Sadaqah During a Favourable Mars Transit | صدقة ماعز أحمر عند عبور مناسب للمريخ |
| 2202 | Water Sadaqah — For Patients | صدقة الماء — للمرضى |
| 2203 | Rice and Fish Sadaqah | صدقة الأرز والسمك |
| 2204 | al-Qaws | القوس |
| 2205 | Nine Pieces of Bread | تسع قطع من الخبز |
| 2206 | Three Bowls of Laakh | ثلاث قصعات من «لاخ» |
| 2207 | One-Coloured White Ram | كبش أبيض ذو لون واحد |
| 2208 | Open Sadaqah | صدقة مفتوحة |
| 2209 | al-Jady | الجدي |
| 2210 | Rice and Millet Sadaqah | صدقة الأرز والدخن |
| 2211 | Kafan — Burial Shroud Sadaqah | صدقة الكفن |
| 2212 | Cowries — Petaw Sadaqah | صدقة الودع (پيتاو) |
| 2213 | al-Dalw | الدلو |
| 2214 | Guinea Fowl or Chicken Sadaqah | صدقة دجاجة غينيا أو دجاجة |
| 2215 | Fish Sadaqah | صدقة السمك |
| 2216 | Seven-Chicken Food Sadaqah | صدقة طعام سبع دجاجات |
| 2217 | Evening Food Sadaqah | صدقة طعام المساء |
| 2218 | Supporting Someone Involved in Spiritual Work | إعانة من يشتغل بالعمل الروحي |
| 2219 | Any of them, or none. They are complementary customs, not obligations. Sadaqah given sincerely on any day is good; these suggestions simply help you choose a form and a moment. | أيٌّ منها أو لا شيء. فهي عادات مكمّلة لا واجبات. والصدقة الخالصة في أي يوم خير؛ وهذه الاقتراحات تعينك فقط على اختيار صورة ووقت. |
| 2220 | Mother's name is required for Personal reading. Switch to General mode or add your mother's name. | اسم الأم مطلوب للقراءة الشخصية. انتقل إلى الوضع العام أو أضف اسم أمك. |
| 2221 | Fatima, Aisha, Khadija, etc. | فاطمة، عائشة، خديجة، إلخ. |
| 2222 | Unable to load verse at this moment. Please refresh or visit Quran.com directly. | تعذّر تحميل الآية الآن. يُرجى التحديث أو زيارة Quran.com مباشرة. |
| 2223 | (Name letter composition - informational only) | (تركيب حروف الاسم - للمعلومة فقط) |
| 2224 | The Soul Triad | الثالوث الروحي |
| 2225 | Soul Triad - Three Aspects of Self | الثالوث الروحي - ثلاثة أوجه للذات |
| 2226 | Your spiritual identity revealed through three sacred dimensions: Expression, Desire, and Persona | هويتك الروحية في ثلاثة أبعاد: التعبير، والرغبة، والصورة الظاهرة |
| 2227 | The Soul Triad represents three fundamental aspects of your being: who you truly are (Expression), what you deeply desire (Desire), and how you appear to others (Persona). Together, these three numbers create the complete picture of your spiritual identity. | يمثّل الثالوث الروحي ثلاثة أوجه أساسية لكيانك: من أنت حقًّا (التعبير)، وما ترغب فيه بعمق (الرغبة)، وكيف تبدو للآخرين (الصورة الظاهرة). ومعًا ترسم هذه الأعداد الثلاثة صورة كاملة لهويتك الروحية. |
| 2228 | Who you truly are - your authentic nature and natural talents | من أنت حقًّا - طبيعتك الأصيلة ومواهبك الفطرية |
| 2229 | Innate talents | المواهب الفطرية |
| 2230 | Natural abilities | القدرات الطبيعية |
| 2231 | What you deeply desire - your inner motivations and aspirations | ما ترغب فيه بعمق - دوافعك وتطلّعاتك الباطنة |
| 2232 | Deep motivations | الدوافع العميقة |
| 2233 | Spiritual needs | الحاجات الروحية |
| 2234 | Your Persona | صورتك الظاهرة |
| 2235 | Public mask | القناع العام |
| 2236 | The Triad Connection | صلة الثالوث |
| 2237 | Desire | الرغبة |
| 2238 | Persona | الصورة الظاهرة |
| 2239 | Triad Integration | تكامل الثالوث |
| 2240 | ) reveals who you naturally are. Your Desire ( | ) يكشف من أنت بطبعك. ورغبتك ( |
| 2241 | Harmony is found when these three aspects work together: when who you are, what you desire, and how you appear are aligned. | يتحقّق الانسجام حين تعمل هذه الأوجه الثلاثة معًا: حين يتوافق من أنت وما ترغب فيه وكيف تبدو. |
| 2242 | Balance Expression | وازِن التعبير |
| 2243 | Honor your natural talents. Live authentically according to your true nature. | أكرِم مواهبك الفطرية، وعِش بصدق وفق طبيعتك الحقّة. |
| 2244 | Balance Desire | وازِن الرغبة |
| 2245 | Listen to your heart. Pursue what truly nourishes your soul. | أصغِ إلى قلبك، واطلب ما يغذّي روحك حقًّا. |
| 2246 | Balance Persona | وازِن الصورة الظاهرة |
| 2247 | Be aware of your impact. Align your outer image with your inner truth. | كن واعيًا بأثرك، ووافِق صورتك الظاهرة مع حقيقتك الباطنة. |
| 2248 | Loading Qur'anic verse... | جارٍ تحميل الآية... |
| 2249 | The verse reference is valid (Surah | مرجع الآية صحيح (سورة |
| 2250 | Read Full Verse on Quran.com | اقرأ الآية كاملة على Quran.com |
| 2251 | The shapes and forms within your name | الأشكال والهيئات في اسمك |
| 2252 | Dominant | غالب |
| 2253 | Learn more about the Science of Letters | تعرّف على علم الحروف أكثر |
| 2254 | Method Guide | دليل الطريقة |
| 2255 | Ÿ Exceptional Compatibility | توافق استثنائي |
| 2256 | Outstanding compatibility on both surface and soul levels. Your energies complement each other beautifully. This relationship has extraordinary potential for mutual growth and happiness. | توافق بارز على المستويين الظاهر والروحي. تتكامل طاقتاكما تكاملًا جميلًا، ولهذه العلاقة إمكانات عظيمة للنموّ والسعادة المشتركين. |
| 2257 | • Communication flows naturally | • التواصل ينساب طبيعيًا |
| 2258 | • Challenges are manageable together | • التحدّيات يمكن تجاوزها معًا |
| 2259 | • Focus on continuous growth | • ركّزا على النموّ المستمرّ |
| 2260 | ’« Very Good Compatibility | توافق جيد جدًا |
| 2261 | Strong compatibility with minor areas to nurture. This connection has great potential with mutual effort. Your strengths far outweigh your challenges. | توافق قوي مع جوانب قليلة تحتاج إلى رعاية. لهذه الصلة إمكانات كبيرة بالجهد المشترك، ومواطن قوتكما تفوق تحدّياتكما بكثير. |
| 2262 | • Some areas need conscious attention | • بعض الجوانب تحتاج إلى انتباه واعٍ |
| 2263 | • Communication and compromise are key | • التواصل والتنازل هما المفتاح |
| 2264 | • Nurture what you've built together | • ارعيا ما بنيتماه معًا |
| 2265 | Moderate compatibility. You can build a harmonious relationship with understanding, communication, and compromise. Your differences are workable€”not deal-breakers€”but require conscious effort. | توافق معتدل. يمكنكما بناء علاقة منسجمة بالتفاهم والتواصل والتنازل. واختلافاتكما قابلة للعمل — ليست قاطعة — لكنها تتطلّب جهدًا واعيًا. |
| 2266 | • Daily life may have friction • But your emotional foundation is strong • Focus on nurturing the deep bond you share | • قد يكون في الحياة اليومية احتكاك • لكن أساسكما العاطفي قوي • ركّزا على رعاية الرابطة العميقة بينكما |
| 2267 | • Both partners need to be committed • Differences enrich when honored • Patience and understanding are essential | • يلزم التزام الطرفين • الاختلافات تُثري حين تُحترم • الصبر والتفاهم أساسيان |
| 2268 | š ï¸ Challenging Compatibility | توافق صعب |
| 2269 | Significant differences in energy and approach. This relationship requires substantial effort, patience, and mutual growth. Possible, but both partners must be fully committed. | اختلافات كبيرة في الطاقة والنهج. تتطلّب هذه العلاقة جهدًا وصبرًا ونموًّا مشتركًا كبيرًا. ممكنة، لكن على الطرفين التزامًا تامًّا. |
| 2270 | • Requires conscious daily work | • تتطلّب عملًا يوميًا واعيًا |
| 2271 | • Both must want to grow together | • على كليهما أن يريد النموّ معًا |
| 2272 | • Celebrate small victories | • احتفيا بالانتصارات الصغيرة |
| 2273 | Serious Consideration: | اعتبار جادّ: |
| 2274 | • Set realistic expectations | • ضعا توقّعات واقعية |
| 2275 | • Honor your individual needs too | • أكرِما حاجاتكما الفردية أيضًا |
| 2276 | Scroll left | مرّر يسارًا |
| 2277 | Scroll right | مرّر يمينًا |
| 2278 | Relationship Compatibility Analysis | تحليل توافق العلاقة |
| 2279 | How We Analyze Your Compatibility | كيف نحلّل توافقكما |
| 2280 | We examine your relationship through four different dimensions to give you the complete picture. | ننظر في علاقتكما من أربعة أبعاد لنعطيكما الصورة كاملة. |
| 2281 | Your spiritual alignment | انسجامكما الروحي |
| 2282 | Your elemental natures | طبيعتاكما العنصريتان |
| 2283 | Your planetary influences | صلاتكما الكوكبية |
| 2284 | Your day-to-day dynamics | ديناميكيتكما اليومية |
| 2285 | Your Personality Balance | توازن شخصيتكما |
| 2286 | (Letter Chemistry • | (كيمياء الحروف • |
| 2287 | Each name holds energies (Fire, Air, Water, Earth). We analyze how these energies complement each other between you two. | لكل اسم طاقات (نار، هواء، ماء، تراب). ونحلّل كيف تتكامل هذه الطاقات بينكما. |
| 2288 | Personalized spiritual practices to strengthen your relationship harmony and balance your energies. | ممارسات روحية شخصية لتقوية انسجام علاقتكما وموازنة طاقتيكما. |
| 2289 | Orange | برتقالي |
| 2290 | Turquoise | فيروزي |
| 2291 | Calm, depth, intuition, and emotional wisdom | السكينة والعمق والحدس والحكمة العاطفية |
| 2292 | Lavender | خزامي |
| 2293 | Clarity, communication, intellect, and freedom | الوضوح والتواصل والعقل والحرية |
| 2294 | tones for clothing, journaling, or meditation to enhance your natural | ألوانًا للملبس أو التدوين أو التأمّل لتعزيز طاقتك الطبيعية من |
| 2295 | energy. Add | . أضف |
| 2296 | Cold | بارد |
| 2297 | Initiative & Courage | المبادرة والشجاعة |
| 2298 | Stability & Beauty | الثبات والجمال |
| 2299 | Communication & Adaptability | التواصل والتكيّف |
| 2300 | Nurturing & Intuition | الرعاية والحدس |
| 2301 | Leadership & Creativity | القيادة والإبداع |
| 2302 | Service & Precision | الخدمة والدقّة |
| 2303 | Harmony & Justice | الانسجام والعدل |
| 2304 | Transformation & Depth | التحوّل والعمق |
| 2305 | Wisdom & Expansion | الحكمة والاتساع |
| 2306 | Discipline & Achievement | الانضباط والإنجاز |
| 2307 | Innovation & Humanitarianism | الابتكار والإنسانية |
| 2308 | Compassion & Spirituality | الرحمة والروحانية |
| 2309 | Indecision, Dependency, Conflict-avoidance | التردّد، الاتكالية، تجنّب الخلاف |
| 2310 | Build strong foundations. Reflect: "Patience is the key to paradise." | ابنِ أسسًا متينة. وتأمّل: «الصبر مفتاح الجنة». |
| 2311 | Responsibility, Nurturing, Harmony | المسؤولية، الرعاية، الانسجام |
| 2312 | Martyrdom, Interference, Perfectionism | التضحية المفرطة، التدخّل، الكمالية |
| 2313 | Isolation, Cynicism, Overthinking | العزلة، التشاؤم، الإفراط في التفكير |
| 2314 | Seek inner knowledge. Reflect: "Know thyself to know thy Lord." | اطلب المعرفة الباطنة. وتأمّل: «من عرف نفسه فقد عرف ربه». |
| 2315 | Your soul's journey is through the station of | رحلة روحك تمرّ بمقام |
| 2316 | Name cannot be empty | لا يمكن أن يكون الاسم فارغًا |
| 2317 | Your life destiny ( | مسار حياتك ( |
| 2318 | Your soul deeply yearns for | تتوق روحك بعمق إلى |
| 2319 | while outwardly you express | بينما تعبّر ظاهرًا عن |
| 2320 | Divine Name Resonance (28-Letter Cycle) | رنين الاسم الحسن (دورة الحروف الثمانية والعشرين) |
| 2321 | You express and inherit the same | تعبّر عن الطاقة نفسها وترثها: |
| 2322 | energy. Strong, consistent elemental identity with deep | . هوية عنصرية قوية ثابتة ذات |
| 2323 | roots. This creates a pure lineage of | جذور عميقة. وهذا يصنع نسبًا صافيًا من صفات |
| 2324 | qualities - what you express outwardly mirrors your inner foundation. | - فما تعبّر عنه ظاهرًا يعكس أساسك الباطن. |
| 2325 | You express with Fire but have Air roots. Your Air foundation feeds your Fire action - like wind fanning flames. This creates natural confidence and momentum. Your mother's airy nature (movement, ideas) supports your fiery expression (passion, action). | تعبّر بالنار لكن جذورك هوائية. فأساسك الهوائي يغذّي فعلك الناري — كالريح تذكي اللهب. وهذا يمنحك ثقة طبيعية واندفاعًا. وطبيعة أمك الهوائية (الحركة والأفكار) تسند تعبيرك الناري (الشغف والعمل). |
| 2326 | You express with Air but have Fire roots. Your Fire foundation energizes your Air movement - like heat creating wind. This brings dynamic communication and inspired ideas. Your mother's fiery nature (passion, will) fuels your airy expression (thought, connection). | تعبّر بالهواء لكن جذورك نارية. فأساسك الناري ينشّط حركتك الهوائية — كالحرارة تصنع الريح. وهذا يجلب تواصلًا حيويًا وأفكارًا ملهَمة. وطبيعة أمك النارية (الشغف والإرادة) تغذّي تعبيرك الهوائي (الفكر والتواصل). |
| 2327 | You express with Water but have Earth roots. Your Earth foundation contains your Water flow - like a riverbed holding water. This brings emotional stability and practical intuition. Your mother's earthy nature (stability, form) grounds your watery expression (emotion, depth). | تعبّر بالماء لكن جذورك ترابية. فأساسك الترابي يحتوي جريان مائك — كمجرى النهر يحفظ الماء. وهذا يجلب ثباتًا عاطفيًا وحدسًا عمليًا. وطبيعة أمك الترابية (الثبات والصورة) تثبّت تعبيرك المائي (العاطفة والعمق). |
| 2328 | You express with Earth but have Water roots. Your Water foundation nourishes your Earth structure - like rain feeding the soil. This brings fertile creativity and adaptable stability. Your mother's watery nature (emotion, flow) enriches your earthy expression (building, manifesting). | تعبّر بالتراب لكن جذورك مائية. فأساسك المائي يغذّي بنيتك الترابية — كالمطر يسقي التربة. وهذا يجلب إبداعًا خصبًا وثباتًا مرنًا. وطبيعة أمك المائية (العاطفة والانسياب) تُثري تعبيرك الترابي (البناء والتحقيق). |
| 2329 | You express with | تعبّر بـ |
| 2330 | but have | لكن جذورك |
| 2331 | roots. These elements support each other naturally - your foundation enhances your expression. This creates a harmonious flow between inner origin and outer manifestation. | . يسند هذان العنصران أحدهما الآخر بطبعهما — فأساسك يقوّي تعبيرك. وهذا يصنع انسيابًا منسجمًا بين الأصل الباطن والظهور الخارجي. |
| 2332 | You express with Fire but have Water roots. This creates dynamic tension - passion balanced by emotional depth. You may feel pulled between action and reflection, intensity and flow. This explains why you can be both fierce and deeply sensitive. Learn to honor both: your Fire drive and your Water foundation. | تعبّر بالنار لكن جذورك مائية. وهذا يصنع توتّرًا حيويًا — شغفًا يوازنه عمق عاطفي. قد تشعر بتجاذب بين العمل والتأمّل، والشدّة والانسياب. وهذا يفسّر كيف تكون حادًّا ومرهف الإحساس معًا. فأكرِم الاثنين: دافعك الناري وأساسك المائي. |
| 2333 | You express with Water but have Fire roots. This creates dynamic tension - emotional depth fueled by inner passion. You may feel pulled between flow and force, receptivity and assertion. This explains why you can be both gentle and intensely willful. Your calm exterior holds powerful depths. | تعبّر بالماء لكن جذورك نارية. وهذا يصنع توتّرًا حيويًا — عمقًا عاطفيًا يغذّيه شغف باطن. قد تشعر بتجاذب بين الانسياب والقوة، والتلقّي والإقدام. وهذا يفسّر كيف تكون لطيفًا وقوي الإرادة معًا. فظاهرك الهادئ يحمل أعماقًا قوية. |
| 2334 | You express with Air but have Earth roots. This creates dynamic tension - movement balanced by stability. You may feel pulled between freedom and security, ideas and form. This explains why you value both exploration and solid foundations. Your grounded base allows safe flight. | تعبّر بالهواء لكن جذورك ترابية. وهذا يصنع توتّرًا حيويًا — حركة يوازنها ثبات. قد تشعر بتجاذب بين الحرية والأمان، والأفكار والصورة. وهذا يفسّر تقديرك للاستكشاف وللأسس المتينة معًا. فقاعدتك الثابتة تتيح لك تحليقًا آمنًا. |
| 2335 | You express with Earth but have Air roots. This creates dynamic tension - structure built on freedom. You may feel pulled between stability and change, form and flow. This explains why you can be both reliable and surprisingly adaptable. Your stable exterior holds spacious depths. | تعبّر بالتراب لكن جذورك هوائية. وهذا يصنع توتّرًا حيويًا — بنية مبنية على الحرية. قد تشعر بتجاذب بين الثبات والتغيير، والصورة والانسياب. وهذا يفسّر كيف تكون موثوقًا ومرنًا على نحو مدهش. فظاهرك الثابت يحمل أعماقًا رحبة. |
| 2336 | depth with action or stability with change | العمق مع العمل أو الثبات مع التغيير |
| 2337 | You express with Fire and have Earth foundation. Fire and Earth create different modes - active expression vs. stable foundation. You can be intensely active outwardly while maintaining inner groundedness. Your earthy roots keep your fire from burning out. | تعبّر بالنار وأساسك ترابي. يصنع النار والتراب نمطين مختلفين — تعبير فاعل وأساس ثابت. فيمكنك أن تكون شديد النشاط ظاهرًا مع تجذّر باطن. وجذورك الترابية تمنع نارك من الاحتراق. |
| 2338 | You express with Earth and have Fire foundation. These create different modes - stable expression powered by passionate foundation. Your outer reliability is fueled by inner drive. Your fiery roots energize your earthy manifestation. | تعبّر بالتراب وأساسك ناري. نمطان مختلفان — تعبير ثابت يغذّيه أساس شغوف. فموثوقيتك الظاهرة يحرّكها دافع باطن، وجذورك النارية تنشّط تحقّقك الترابي. |
| 2339 | You express with Water and have Air foundation. These create different modes - emotional expression with mental foundation. You feel deeply but process through understanding. Your airy roots give perspective to your watery flow. | تعبّر بالماء وأساسك هوائي. نمطان مختلفان — تعبير عاطفي على أساس ذهني. تشعر بعمق لكنك تعالج بالفهم. وجذورك الهوائية تمنح انسيابك المائي منظورًا. |
| 2340 | You express with Air and have Water foundation. These create different modes - mental expression with emotional foundation. You think and communicate, but it's rooted in deep feeling. Your watery roots give depth to your airy ideas. | تعبّر بالهواء وأساسك مائي. نمطان مختلفان — تعبير ذهني على أساس عاطفي. تفكّر وتتواصل، لكن ذلك متجذّر في شعور عميق. وجذورك المائية تمنح أفكارك الهوائية عمقًا. |
| 2341 | and have | وأساسك |
| 2342 | foundation. These create different modes - active expression vs. restful foundation. This gives you versatility and range. | . نمطان مختلفان — تعبير فاعل وأساس هادئ. وهذا يمنحك تنوّعًا وسعة. |
| 2343 | Vertical | عمودي |
| 2344 | Mudawwar | مدوّر |
| 2349 | Flat | مسطّح |
| 2350 | Spiritual reach | الامتداد الروحي |
| 2351 | Strong upward-moving energy. You naturally reach for ideals and higher purposes. Spiritual seeker with aspirational drive, always looking to elevate yourself and others. | طاقة صاعدة قوية. تتطلّع بطبعك إلى المُثُل والغايات العليا. باحث روحي ذو همّة، يسعى دائمًا إلى الارتقاء بنفسه وبالآخرين. |
| 2352 | Embracing and nurturing energy. You contain and complete cycles with emotional warmth. Natural capacity for compassion and wholeness, creating safe spaces for growth. | طاقة حاضنة راعية. تحتوي الدورات وتتمّها بدفء عاطفي. قدرة طبيعية على الرحمة والاكتمال، وصنع مساحات آمنة للنموّ. |
| 2353 | Grounded and stable foundation. You create horizontal expansion with practical stability. Reliable, earth-connected energy that others can depend upon. | أساس متجذّر ثابت. تصنع امتدادًا أفقيًا بثبات عملي. طاقة موثوقة متّصلة بالأرض يعتمد عليها الآخرون. |
| 2354 | Sharp and decisive energy. You cut through complexity with clarity and transformation. Direct, purposeful approach that doesn't waste time or energy. | طاقة حادّة حاسمة. تشقّ التعقيد بوضوح وتحوّل. نهج مباشر هادف لا يهدر وقتًا ولا طاقة. |
| 2355 | You reach for ideals (vertical) while embracing others (round). Aspirational yet compassionate - you lift others as you climb. Balances spiritual seeking with emotional warmth. | تتطلّع إلى المُثُل (عمودي) مع احتضان الآخرين (مدوّر). طموح رحيم — ترفع الآخرين وأنت تصعد. يوازن بين الطلب الروحي والدفء العاطفي. |
| 2356 | You ground your aspirations (vertical + flat). Practical dreamer who builds stable paths to high goals. Your vision is matched by methodical execution. | تثبّت تطلّعاتك (عمودي + مسطّح). حالم عملي يبني طرقًا ثابتة إلى أهداف عالية. رؤيتك يقابلها تنفيذ منهجي. |
| 2357 | You ascend with sharpness (vertical + angular). Ambitious and decisive, cutting through obstacles to reach heights. Dynamic upward momentum with clear direction. | تصعد بحدّة (عمودي + زاوي). طموح حاسم يشقّ العقبات إلى القمم. اندفاع صاعد حيوي باتجاه واضح. |
| 2358 | You nurture with aspiration (round + vertical). Compassionate idealism - you care deeply while reaching for better. Emotional warmth directed toward growth. | ترعى بتطلّع (مدوّر + عمودي). مثالية رحيمة — تهتمّ بعمق وتسعى إلى الأفضل. دفء عاطفي موجَّه نحو النموّ. |
| 2359 | You nurture with decisiveness (round + angular). Compassionate yet clear-cutting when needed - protective warmth. You defend what you love with precision. | ترعى بحسم (مدوّر + زاوي). رحيم لكنه حاسم عند الحاجة — دفء حامٍ. تدافع عمّا تحبّ بدقّة. |
| 2360 | You stabilize with reach (flat + vertical). Building solid foundations while aiming high. Grounded ambition that creates lasting structures. | تثبّت مع امتداد (مسطّح + عمودي). تبني أسسًا متينة وتصوّب عاليًا. طموح متجذّر يصنع بنى دائمة. |
| 2361 | You ground with embrace (flat + round). Stable compassion - dependable emotional availability. Practical nurturing that provides real support. | تثبّت باحتضان (مسطّح + مدوّر). رحمة ثابتة — حضور عاطفي يُعتمد عليه. رعاية عملية تقدّم سندًا حقيقيًا. |
| 2362 | You stabilize with sharp clarity (flat + angular). Grounded decisiveness - you build with precision and purpose. Methodical yet incisive approach. | تثبّت بوضوح حادّ (مسطّح + زاوي). حسم متجذّر — تبني بدقّة وغاية. نهج منهجي نافذ. |
| 2363 | You sharpen while rising (angular + vertical). Decisive aspiration - cutting your path to higher goals. Purposeful ascent with no wasted energy. | تشحذ وأنت تصعد (زاوي + عمودي). تطلّع حاسم — تشقّ طريقك إلى أهداف أعلى. صعود هادف بلا طاقة مهدرة. |
| 2364 | You cut with compassion (angular + round). Clear boundaries with emotional awareness. Decisive yet nurturing - you protect through clarity. | تقطع برحمة (زاوي + مدوّر). حدود واضحة مع وعي عاطفي. حاسم وراعٍ معًا — تحمي بالوضوح. |
| 2365 | You sharpen with grounding (angular + flat). Decisive stability - precise and dependable. You establish clear, reliable structures. | تشحذ مع تجذّر (زاوي + مسطّح). ثبات حاسم — دقيق ويُعتمد عليه. تقيم بنى واضحة موثوقة. |
| 2366 | Balanced geometric energy combining | طاقة هندسية متوازنة تجمع |
| 2367 | Balanced geometric energy across multiple forms. You have versatility in expression, able to be aspirational, nurturing, grounded, or decisive as situations require. Adaptable spiritual presence. | طاقة هندسية متوازنة عبر أشكال متعدّدة. لديك تنوّع في التعبير، فتكون متطلّعًا أو راعيًا أو متجذّرًا أو حاسمًا بحسب المواقف. حضور روحي متكيّف. |
| 2368 | Send Critical Email | أرسل البريد المهمّ |
| 2369 | Slow, methodical work | عمل بطيء منهجي |
| 2370 | Emotional depth work | عمل على العمق العاطفي |
| 2371 | Rapid changes | تغيّرات سريعة |
| 2372 | Abstract theorizing | التنظير المجرّد |
| 2373 | Exciting but unstable | مثير لكنه غير مستقرّ |
| 2374 | Material success together | نجاح مادي معًا |
| 2375 | Compassionate union | اتّحاد رحيم |
| 2376 | Deep understanding, may isolate | فهم عميق، وقد يعتزلان |
| 2377 | Shared values and goals | قيم وأهداف مشتركة |
| 2378 | Complementary energies | طاقات متكاملة |
| 2379 | Complete cycle together | إتمام الدورة معًا |
| 2380 | Wholeness through union | الاكتمال بالاتّحاد |
| 2381 | May mirror each other's shadows | قد يعكس كلٌّ منهما ظلال الآخر |
| 2382 | Balance individuality with togetherness | وازِن بين الفردية والعيش معًا |
| 2383 | Start new ventures | ابدأ مشاريع جديدة |
| 2384 | Ego-driven decisions | قرارات تحرّكها الأنا |
| 2385 | Confrontations with authority | مواجهات مع أصحاب السلطة |
| 2386 | Nurturing activities | أنشطة الرعاية |
| 2387 | Important decisions (emotions may cloud judgment) | القرارات المهمّة (قد تحجب العاطفة الحكم) |
| 2388 | Business deals | الصفقات التجارية |
| 2389 | Social networking | بناء العلاقات الاجتماعية |
| 2390 | Socializing | الاختلاط بالناس |
| 2391 | Beautification | التجميل |
| 2392 | Physical exercise | التمارين البدنية |
| 2393 | Assertive action | العمل الحازم |
| 2394 | Courage needed | يلزم الشجاعة |
| 2395 | Rash decisions | القرارات المتهوّرة |
| 2396 | Property matters | شؤون العقار |
| 2397 | Fun activities | الأنشطة الممتعة |
| 2398 | Quick results expectations | توقّع نتائج سريعة |
| 2399 | Strengthens willpower and courage | يقوّي الإرادة والشجاعة |
| 2400 | Brings ease in difficulties, softens hearts | ييسّر الصعاب ويليّن القلوب |
| 2401 | Partial | جزئي |
| 2402 | Begin | ابدأ |
| 2403 | Build | ابنِ |
| 2404 | No decision-making today - defer to better days | لا قرارات اليوم - أجّلها إلى أيام أنسب |
| 2405 | 20min silence or meditation away from bright light | 20 دقيقة صمت أو تأمّل بعيدًا عن الضوء الساطع |
| 2406 | Early bedtime for solar repair (before 10pm) | نوم مبكر لاستعادة الطاقة (قبل العاشرة مساءً) |
| 2407 | 20min by water (real or visualized) | 20 دقيقة قرب الماء (حقيقةً أو تخيّلًا) |
| 2408 | Channel anger into gentle journaling, not action | وجّه الغضب إلى تدوين هادئ لا إلى فعل |
| 2409 | Solo time in pleasant surroundings | وقت منفرد في محيط لطيف |
| 2410 | Release rigidity - no forcing structure | تخلَّ عن الجمود - لا تفرض البنية |
| 2411 | Let go of "should" thoughts | تخلَّ عن أفكار «ينبغي» |
| 2412 | Building foundations×results come later | بناء الأسس × النتائج تأتي لاحقًا |
| 2413 | Lead with generosity×authority returns respect today | قُد بالكرم × السلطة تعود احترامًا اليوم |
| 2414 | Lead with generosity×results come quickly | قُد بالكرم × النتائج تأتي سريعًا |
| 2415 | Lead with patience×influence grows steadily | قُد بالصبر × الأثر ينمو بثبات |
| 2416 | Lead with consistency×reputation builds over time | قُد بالاتّساق × السمعة تُبنى مع الوقت |
| 2417 | Act with courage×strength returns strength immediately | اعمل بشجاعة × القوة تعود قوةً فورًا |
| 2418 | Act boldly×momentum builds fast | اعمل بجرأة × الاندفاع يتسارع |
| 2419 | Push forward×progress shows in days | تقدّم × التقدّم يظهر في أيام |
| 2420 | Train consistently×power builds gradually | تدرّب باتّساق × القوة تُبنى تدريجيًا |
| 2421 | Speak clearly×understanding comes back instantly | تكلّم بوضوح × الفهم يعود فورًا |
| 2422 | Communicate well×replies come swiftly | أحسِن التواصل × الردود تأتي سريعًا |
| 2423 | Share knowledge×learning compounds over days | شارك المعرفة × التعلّم يتضاعف على مدى أيام |
| 2424 | Write persistently×wisdom accumulates slowly | اكتب بمثابرة × الحكمة تتراكم ببطء |
| 2425 | Give care×comfort returns quickly today | قدّم الرعاية × الطمأنينة تعود سريعًا اليوم |
| 2426 | Give care×warmth returns in hours | قدّم الرعاية × الدفء يعود في ساعات |
| 2427 | Nurture bonds×emotional depth grows over days | ارعَ الروابط × العمق العاطفي ينمو على مدى أيام |
| 2428 | Tend relationships×trust builds with time | اعتنِ بالعلاقات × الثقة تُبنى مع الوقت |
| 2429 | Show love×beauty reflects back today | أظهِر المحبّة × الجمال ينعكس اليوم |
| 2430 | Show love×joy returns soon | أظهِر المحبّة × الفرح يعود قريبًا |
| 2431 | Create beauty×appreciation deepens over days | اصنع الجمال × التقدير يتعمّق على مدى أيام |
| 2432 | Invest in art×value increases with time | استثمر في الفنّ × القيمة تزداد مع الوقت |
| 2433 | Think big×opportunities appear today | فكّر بسعة × الفرص تظهر اليوم |
| 2434 | Expand horizons×doors open quickly | وسّع آفاقك × الأبواب تُفتح سريعًا |
| 2435 | Study deeply×wisdom unfolds over days | ادرس بعمق × الحكمة تتكشّف على مدى أيام |
| 2436 | Build legacy×growth compounds over time | ابنِ إرثًا × النموّ يتضاعف مع الوقت |
| 2437 | Structure well×stability shows today | أحسِن التنظيم × الثبات يظهر اليوم |
| 2438 | Organize now×order appears soon | نظّم الآن × النظام يظهر قريبًا |
| 2439 | Build foundations×lasting results take weeks | ابنِ الأسس × النتائج الدائمة تستغرق أسابيع |
| 2440 | Set daily direction | حدّد وجهة اليوم |
| 2441 | Lead team meetings | أدِر اجتماعات الفريق |
| 2442 | Following others | اتّباع الآخرين |
| 2443 | Sun rises - authority peaks | تشرق الشمس - تبلغ السلطة ذروتها |
| 2444 | Background work | عمل في الخلفية |
| 2445 | Hiding mistakes | إخفاء الأخطاء |
| 2446 | Delegate tasks | فوّض المهامّ |
| 2447 | Teach and mentor | علّم وأرشد |
| 2448 | Empower others | مكّن الآخرين |
| 2449 | Micromanaging | التدخّل في كل تفصيل |
| 2450 | Solo work | عمل منفرد |
| 2451 | Celebrate wins | احتفِ بالنجاحات |
| 2452 | New starts | بدايات جديدة |
| 2453 | Criticism | الانتقاد |
| 2454 | Gentle exercise | تمرين لطيف |
| 2455 | Counseling sessions | جلسات الاستشارة |
| 2456 | Analytical tasks | المهامّ التحليلية |
| 2457 | Number crunching | الحسابات الرقمية |
| 2458 | Wind down gently | استرخِ بهدوء |
| 2459 | Early sleep preparation | التهيّؤ للنوم المبكر |
| 2460 | Stimulation | الإثارة |
| 2461 | Screens | الشاشات |
| 2462 | Vigorous exercise | التمارين الشديدة |
| 2463 | Tackle hardest task first | ابدأ بأصعب مهمّة |
| 2464 | Difficult conversations | المحادثات الصعبة |
| 2465 | Hesitation | التردّد |
| 2466 | Competitive situations | المواقف التنافسية |
| 2467 | Defend positions | الدفاع عن المواقف |
| 2468 | Passive waiting | الانتظار السلبي |
| 2469 | Complete unfinished tasks | أتمّ المهامّ غير المنتهية |
| 2470 | Athletic training | التدريب الرياضي |
| 2471 | Assert boundaries | أكّد حدودك |
| 2472 | Giving up | الاستسلام |
| 2473 | Gentle stretching | تمدّد لطيف |
| 2474 | Process day's battles | راجع معارك اليوم |
| 2475 | Release tension | تخلّص من التوتّر |
| 2476 | Forgive conflicts | اعفُ عن الخلافات |
| 2477 | Alcohol | الكحول |
| 2478 | Writing tasks | مهامّ الكتابة |
| 2479 | Study complex topics | ادرس الموضوعات المعقّدة |
| 2480 | Mindless work | العمل الآلي |
| 2481 | Physical-only tasks | المهامّ البدنية فقط |
| 2482 | Important calls | الاتصالات المهمّة |
| 2483 | Teach or explain | علّم أو اشرح |
| 2484 | Short trips/errands | مشاوير قصيرة |
| 2485 | Email responses | الردّ على البريد |
| 2486 | Journal insights | دوّن خواطرك |
| 2487 | Organize notes | نظّم ملاحظاتك |
| 2488 | Set ambitious goals | ضع أهدافًا طموحة |
| 2489 | Small thinking | التفكير الضيّق |
| 2490 | Petty details | التفاصيل التافهة |
| 2491 | Seek opportunities | اطلب الفرص |
| 2492 | Generous acts | أعمال الكرم |
| 2493 | Narrowness | ضيق الأفق |
| 2494 | Expand projects | وسّع المشاريع |
| 2495 | Take calculated risks | خاطر مخاطرة محسوبة |
| 2496 | Contraction | الانكماش |
| 2497 | Philosophical reflection | التأمّل الفلسفي |
| 2498 | Gratitude practice | ممارسة الشكر |
| 2499 | Mentor someone | أرشد أحدًا |
| 2500 | Spiritual study | الدراسة الروحية |
| 2501 | Pessimism | التشاؤم |
| 2502 | Beautify environment | جمّل محيطك |
| 2503 | Artistic creation | الإبداع الفنّي |
| 2504 | Gentle movement | حركة لطيفة |
| 2505 | Ugliness | القبح |
| 2506 | Romantic gestures | لفتات المودّة |
| 2507 | Fashion/style choices | اختيارات المظهر |
| 2508 | Time with loved ones | وقت مع الأحبّة |
| 2509 | Entertainment | الترفيه |
| 2510 | Sensory pleasures | المتع الحسّية |
| 2511 | Difficult tasks first | المهامّ الصعبة أولًا |
| 2512 | Quick fixes | الحلول السريعة |
| 2513 | Persist through challenges | اثبت أمام التحدّيات |
| 2514 | Detail-oriented work | عمل يتطلّب الدقّة |
| 2515 | Build foundations | ابنِ الأسس |
| 2516 | Seeking easy path | طلب الطريق السهل |
| 2517 | Assess progress | قيّم التقدّم |
| 2518 | Solo reflection | تأمّل منفرد |
| 2519 | Indulgence | الإفراط في الملذّات |
| 2520 | Your inner compass guides you×balance introspection with outer engagement. | بوصلتك الباطنة ترشدك × وازِن بين التأمّل الباطن والانخراط الخارجي. |
| 2521 | Your temperament leads×balance feelings with mindful structure. | طبعك يقودك × وازِن المشاعر ببنية واعية. |
| 2522 | External timing shapes you×balance receptivity with inner purpose. | التوقيت الخارجي يشكّلك × وازِن التلقّي بالغاية الباطنة. |
| 2523 | Excellent for leadership×schedule important meetings and presentations | ممتاز للقيادة × رتّب الاجتماعات والعروض المهمّة |
| 2524 | Lead projects and take initiative×high energy for achievements | قُد المشاريع وبادر × طاقة عالية للإنجاز |
| 2525 | Challenging for visibility×lead quietly, support others today | صعب للظهور × قُد بهدوء وساند الآخرين اليوم |
| 2526 | Perfect for reflection×trust your intuition and emotional wisdom | مثالي للتأمّل × ثق بحدسك وحكمتك العاطفية |
| 2527 | Gentle day×plan, review, nurture relationships, avoid overload | يوم لطيف × خطّط وراجع وارعَ العلاقات واجتنب الإرهاق |
| 2528 | Rest needed×minimize commitments, process emotions, be kind to yourself | تلزم الراحة × قلّل الالتزامات وعالج مشاعرك وترفّق بنفسك |
| 2529 | Fierce energy×tackle tough challenges and push through obstacles boldly | طاقة شديدة × تصدَّ للتحدّيات الصعبة واخترق العقبات بجرأة |
| 2530 | Take action on difficult tasks×courage and determination favored | اعمل على المهامّ الصعبة × الشجاعة والعزم مستحسنان |
| 2531 | Sharp mind×perfect for writing, calls, learning, and travel plans | ذهن حادّ × مثالي للكتابة والاتصالات والتعلّم وخطط السفر |
| 2532 | Communicate clearly×good for emails, meetings, and study sessions | تواصل بوضوح × جيد للبريد والاجتماعات وجلسات الدراسة |
| 2533 | Mental fog possible×double-check messages, postpone major decisions | قد يغيم الذهن × راجع الرسائل وأجّل القرارات الكبرى |
| 2534 | Timing is perfect×make big decisions, start new ventures, expand horizons | التوقيت مثالي × اتّخذ القرارات الكبيرة وابدأ المشاريع ووسّع آفاقك |
| 2535 | Growth day×great for planning expansion and seeking opportunities | يوم نموّ × رائع للتخطيط للتوسّع وطلب الفرص |
| 2536 | Temper optimism×research thoroughly before committing to anything big | اعتدل في التفاؤل × ابحث جيدًا قبل الالتزام بأمر كبير |
| 2537 | Excellent for connection×ideal for relationships, creativity, and beauty | ممتاز للتواصل × مثالي للعلاقات والإبداع والجمال |
| 2538 | Harmonious day×connect with others, enjoy art, balance work-pleasure | يوم منسجم × تواصل مع الناس واستمتع بالفنّ ووازن بين العمل والراحة |
| 2539 | Build strong foundations×organize, plan long-term, establish structures | ابنِ أسسًا متينة × نظّم وخطّط للمدى البعيد وأقم البنى |
| 2540 | Heavy responsibilities×break tasks into small steps, be patient with delays | مسؤوليات ثقيلة × قسّم المهامّ خطوات صغيرة واصبر على التأخير |
| 2541 | Balance heat×practice calm speech, charity, time near water | وازِن الحرارة × تكلّم بهدوء، وتصدّق، واقضِ وقتًا قرب الماء |
| 2542 | Activate energy×light exercise, sunlight, decisive action | نشّط الطاقة × تمرين خفيف، وشمس، وعمل حاسم |
| 2543 | Ground yourself×stick to routine, nature walk, one task at a time | تجذّر × التزم بالروتين، وامشِ في الطبيعة، ومهمّة واحدة في كل مرّة |
| 2544 | Add lightness×try creativity, flexibility, or a short change of scenery | أضف خفّة × جرّب الإبداع أو المرونة أو تغييرًا قصيرًا للمكان |
| 2545 | Shine your light×but stay humble and generous with recognition | أظهِر نورك × مع التواضع والكرم في الثناء على غيرك |
| 2546 | Honor your feelings×they guide you to what truly matters | أكرِم مشاعرك × فهي ترشدك إلى ما يهمّ حقًّا |
| 2547 | Mental agility peaks×network, negotiate, adapt quickly | ذروة الخفّة الذهنية × ابنِ العلاقات وفاوض وتكيّف سريعًا |
| 2548 | Appreciate beauty×create harmony in your environment and relationships | تذوّق الجمال × اصنع الانسجام في محيطك وعلاقاتك |
| 2549 | Master discipline×small consistent efforts build lasting success | أتقِن الانضباط × الجهود الصغيرة الدائمة تبني نجاحًا باقيًا |
| 2550 | Beige | بيج |
| 2551 | element harmonizes beautifully with today's | عنصرك ينسجم انسجامًا جميلًا مع عنصر اليوم |
| 2552 | Wear red, orange, or gold to amplify today's fiery energy. | البس الأحمر أو البرتقالي أو الذهبي لتعزيز طاقة اليوم النارية. |
| 2553 | Combine red and yellow - a red shirt with golden accessories works great. | اجمع بين الأحمر والأصفر - قميص أحمر مع إكسسوارات ذهبية مناسب جدًا. |
| 2554 | Wear blue, turquoise, or silver to deepen today's flow. | البس الأزرق أو الفيروزي أو الفضّي لتعميق انسياب اليوم. |
| 2555 | Pair blue with green or brown - turquoise accents on earth tones. | اجمع الأزرق مع الأخضر أو البني - لمسات فيروزية على ألوان ترابية. |
| 2556 | Wear yellow, white, or light blue for clarity and lightness. | البس الأصفر أو الأبيض أو الأزرق الفاتح للوضوح والخفّة. |
| 2557 | Combine yellow with red - light colors with warm touches. | اجمع الأصفر مع الأحمر - ألوان فاتحة مع لمسات دافئة. |
| 2558 | Pair green with blue - earthy tones with water accents. | اجمع الأخضر مع الأزرق - ألوان ترابية مع لمسات مائية. |
| 2559 | Blend your colors with today's element for enhanced harmony. | امزج ألوانك مع عنصر اليوم لانسجام أكبر. |
| 2560 | Today's | طاقة |
| 2561 | energy may challenge your | اليوم قد تتحدّى طبيعتك |
| 2562 | Stick with your | التزم بألوانك |
| 2563 | Wear your favorite | البس ألوانك المفضّلة من |
| 2564 | colors today – they'll serve you well. | اليوم – ستنفعك. |
| 2565 | Crimson Red | أحمر قرمزي |
| 2566 | Dodger Blue | أزرق سماوي |
| 2567 | Royal Blue | أزرق ملكي |
| 2568 | Gold Yellow | أصفر ذهبي |
| 2569 | Khaki | كاكي |
| 2570 | Forest Green | أخضر غابي |
| 2571 | Saddle Brown | بني جلدي |
| 2572 | Burlywood | بني فاتح |
| 2573 | nature and today's | طبيعتك وطاقة اليوم |
| 2574 | nature is getting along with today's | طبيعتك متوافقة مع طاقة اليوم |
| 2575 | energy. Keep yourself balanced and calm. | . حافظ على توازنك وهدوئك. |
| 2576 | Wear reds and oranges - bright and bold | البس الأحمر والبرتقالي - ألوانًا زاهية جريئة |
| 2577 | Add gold jewelry or accessories | أضف حليًّا أو إكسسوارات ذهبية |
| 2578 | You'll feel extra energized today | ستشعر بنشاط إضافي اليوم |
| 2579 | Wear blues or turquoise today | البس الأزرق أو الفيروزي اليوم |
| 2580 | Blue top with green or brown bottom | أعلى أزرق مع أسفل أخضر أو بني |
| 2581 | Peaceful and grounded feeling | شعور بالسكينة والتجذّر |
| 2582 | Yellow or orange combinations | تركيبات صفراء أو برتقالية |
| 2583 | Energetic and clear-headed day | يوم نشيط صافي الذهن |
| 2584 | Light and airy colors | ألوان فاتحة خفيفة |
| 2585 | Brown and turquoise together | البني والفيروزي معًا |
| 2586 | Calm and flowing energy | طاقة هادئة منسابة |
| 2587 | Add some tan or beige | أضف شيئًا من البيج |
| 2588 | Strong, grounded, natural | قوي، متجذّر، طبيعي |
| 2589 | Wear earth colors - brown, green, or beige | البس ألوان التراب - البني أو الأخضر أو البيج |
| 2590 | Around noon: Strong | قرب الظهر: قوي |
| 2591 | Evening: Getting weaker | المساء: يضعف |
| 2592 | Morning: Weaker | الصباح: أضعف |
| 2593 | Evening: Okay | المساء: لا بأس |
| 2594 | Early morning (4-6 AM): Best | الفجر (4-6 صباحًا): الأفضل |
| 2595 | Afternoon: Okay | بعد الظهر: لا بأس |
| 2596 | Morning (5-7 AM): Best | الصباح (5-7): الأفضل |
| 2597 | Evening (6-8 PM): Good | المساء (6-8): جيد |
| 2598 | Early morning: Okay | الصباح الباكر: لا بأس |
| 2599 | Afternoon (3-5 PM): Best | بعد الظهر (3-5): الأفضل |
| 2600 | Evening (5-7 PM): Good | المساء (5-7): جيد |
| 2601 | Night: Okay | الليل: لا بأس |
| 2602 | Evening: Moderate | المساء: معتدل |
| 2603 | \| Most Active: | \| الأنشط: |
| 2604 | \| Dominant: | \| الغالب: |
| 2605 | Universal Mercy | الرحمة الشاملة |
| 2606 | Your name carries boundless compassion - extend mercy to yourself and others. | يحمل اسمك رحمة واسعة - فارحم نفسك والناس. |
| 2607 | Gentle Forgiveness | العفو اللطيف |
| 2608 | You embody gentle forgiveness - practice patience and understanding. | تتجلّى فيك سجيّة العفو اللطيف - تحلَّ بالصبر والتفهّم. |
| 2609 | Your name resonates with natural leadership - lead with wisdom and justice. | يتناغم اسمك مع القيادة الفطرية - قُد بالحكمة والعدل. |
| 2610 | Purity & Perfection | الطهارة والكمال |
| 2611 | Seek purity in intention and action - strive for spiritual excellence. | اطلب الطهارة في النيّة والعمل - واسعَ إلى الإحسان. |
| 2612 | Peace & Safety | السلام والأمان |
| 2613 | You are called to be a source of peace - bring calm to turbulent situations. | أنت مدعوّ لتكون مصدر سلام - هدّئ المواقف المضطربة. |
| 2614 | The Bestower of Faith | المؤمن |
| 2615 | Strengthen faith and trust - be a pillar of reliability for others. | قوِّ الإيمان والثقة - كن ركنًا موثوقًا للآخرين. |
| 2616 | Protection & Watchfulness | الحفظ والرعاية |
| 2617 | Watch over those entrusted to you - protect with care and wisdom. | ارعَ من استُرعيت - احمِ بعناية وحكمة. |
| 2618 | Strength & Honor | القوة والعزّة |
| 2619 | Your strength comes from higher purpose - stand firm in truth. | قوّتك من غاية أسمى - اثبت على الحقّ. |
| 2620 | Restoration & Power | الجبر والقوة |
| 2621 | You have the power to restore what is broken - mend with compassion. | لديك القدرة على جبر ما انكسر - أصلِح برحمة. |
| 2622 | Recognize true greatness lies in humility before the Divine. | اعلم أن العظمة الحقّة في التواضع لله. |
| 2623 | Creativity & Innovation | الإبداع والابتكار |
| 2624 | Channel creative energy into meaningful projects - bring new ideas to life. | وجّه طاقتك الإبداعية إلى مشاريع ذات معنى - أحيِ أفكارًا جديدة. |
| 2625 | Evolution & Development | التطوّر والنموّ |
| 2626 | Embrace continuous growth - allow yourself to evolve and transform. | تقبّل النموّ المستمرّ - اسمح لنفسك بالتطوّر والتحوّل. |
| 2627 | Design & Beauty | التصميم والجمال |
| 2628 | Shape beauty in your life - pay attention to form and harmony. | اصنع الجمال في حياتك - انتبه إلى الصورة والانسجام. |
| 2629 | The Constantly Forgiving | الغفّار |
| 2630 | Forgiveness & Release | المغفرة والتخلّي |
| 2631 | Practice constant forgiveness - release resentment and find peace. | داوِم على العفو - تخلَّ عن الضغينة وجِد السلام. |
| 2632 | Dominion & Control | السيطرة على النفس |
| 2633 | Master self-control - subdue negative tendencies with discipline. | أتقِن ضبط النفس - اقهر الميول السيّئة بالانضباط. |
| 2634 | Generosity & Giving | الكرم والعطاء |
| 2635 | Give freely without expectation - generosity enriches the soul. | أعطِ بلا انتظار - فالكرم يُثري الروح. |
| 2636 | Trust in divine provision - share your resources with those in need. | ثق برزق الله - وشارك ما لديك مع المحتاجين. |
| 2637 | Seek solutions that open doors - be receptive to new opportunities. | اطلب حلولًا تفتح الأبواب - وكن متقبّلًا للفرص الجديدة. |
| 2638 | Knowledge & Awareness | العلم والوعي |
| 2639 | Pursue knowledge with sincerity - wisdom comes through learning. | اطلب العلم بإخلاص - فالحكمة تأتي بالتعلّم. |
| 2640 | The Constrictor | القابض |
| 2641 | Restraint & Discipline | الإمساك والانضباط |
| 2642 | Know when to hold back - sometimes restraint is strength. | اعرف متى تُمسك - فالإمساك أحيانًا قوة. |
| 2643 | The Expander | الباسط |
| 2644 | Humility & Lowering | التواضع |
| 2645 | Practice humility - true elevation comes through lowering the ego. | تحلَّ بالتواضع - فالرفعة الحقّة بخفض الأنا. |
| 2646 | Elevation & Honor | الرفعة والكرامة |
| 2647 | Lift others up - your elevation comes through elevating others. | ارفع الآخرين - فرفعتك برفعك لغيرك. |
| 2648 | Honor & Dignity | العزّة والكرامة |
| 2649 | Honor those around you - treat all with dignity and respect. | أكرِم من حولك - عامل الجميع بكرامة واحترام. |
| 2650 | Justice & Accountability | العدل والمحاسبة |
| 2651 | Deep Listening & Awareness | الإصغاء العميق والوعي |
| 2652 | Listen deeply to others - be present and attentive. | أصغِ إلى الآخرين بعمق - وكن حاضرًا منتبهًا. |
| 2653 | Clear Vision & Insight | الرؤية الواضحة والبصيرة |
| 2654 | See beyond appearances - perceive the deeper truth. | انظر وراء الظواهر - وأدرِك الحقيقة الأعمق. |
| 2655 | Wise Judgment & Discernment | الحكم الحكيم والتمييز |
| 2656 | Judge fairly and wisely - seek truth before deciding. | احكم بالعدل والحكمة - واطلب الحقيقة قبل القرار. |
| 2657 | Act with justice in all matters - fairness is your strength. | اعدل في كل الأمور - فالإنصاف قوّتك. |
| 2658 | Gentle Grace & Subtlety | اللطف والرقّة |
| 2659 | Approach situations with gentleness - subtlety opens closed doors. | تعامل مع المواقف برفق - فاللطف يفتح الأبواب المغلقة. |
| 2660 | Deep Knowledge & Expertise | العلم العميق والخبرة |
| 2661 | Cultivate expertise - your awareness guides others. | نمِّ خبرتك - فوعيك يرشد الآخرين. |
| 2662 | Patience & Tolerance | الصبر والحِلم |
| 2663 | Practice forbearance - patience transforms hearts. | تحلَّ بالحِلم - فالصبر يحوّل القلوب. |
| 2664 | Recognize your inherent greatness - stand in your magnificence. | اعرف ما أودعه الله فيك من خير - وقُم به بشكر. |
| 2665 | Endless Forgiveness | العفو الدائم |
| 2666 | Forgive freely and often - release burdens of resentment. | اعفُ كثيرًا - وتخلَّ عن أثقال الضغينة. |
| 2667 | Gratitude & Recognition | الشكر والتقدير |
| 2668 | Express gratitude daily - appreciation multiplies blessings. | اشكر كل يوم - فالشكر يزيد النِّعم. |
| 2669 | Elevated Perspective | منظور أعلى |
| 2670 | Rise above challenges - see from a higher vantage point. | ارتفع فوق التحدّيات - وانظر من موقع أعلى. |
| 2671 | Supreme Greatness | العظمة العليا |
| 2672 | Protection & Preservation | الحفظ والصون |
| 2673 | Preserve what is valuable - guard the sacred in your life. | احفظ ما هو نفيس - واصن المقدّس في حياتك. |
| 2674 | Sustenance & Nourishment | القوت والغذاء |
| 2675 | Nourish body and soul - provide sustenance to others. | غذِّ البدن والروح - وقدّم القوت للآخرين. |
| 2676 | Accountability & Calculation | المحاسبة |
| 2677 | Be accountable for your actions - integrity matters. | حاسب نفسك على أعمالك - فالنزاهة مهمّة. |
| 2678 | Majesty & Splendor | الجلال والبهاء |
| 2679 | Boundless Generosity | الكرم بلا حدود |
| 2680 | Give generously of your time, wealth, and spirit. | أعطِ بسخاء من وقتك ومالك وروحك. |
| 2681 | Vigilance & Awareness | اليقظة والوعي |
| 2682 | Stay watchful and aware - mindfulness protects you. | ابقَ يقظًا واعيًا - فالمراقبة تحفظك. |
| 2683 | Quick Response & Presence | سرعة الاستجابة والحضور |
| 2684 | Respond promptly to calls for help - be present when needed. | استجب سريعًا لنداءات العون - وكن حاضرًا عند الحاجة. |
| 2685 | Vastness & Expansion | السعة والاتساع |
| 2686 | Supreme Wisdom | الحكمة العليا |
| 2687 | Seek wisdom in all things - make decisions with insight. | اطلب الحكمة في كل شيء - واتّخذ قراراتك ببصيرة. |
| 2688 | Pure Love & Affection | المحبّة الخالصة والمودّة |
| 2689 | Glory & Honor | المجد والشرف |
| 2690 | Renewal & Resurrection | التجدّد والبعث |
| 2691 | Embrace new beginnings - every moment is a chance to start fresh. | تقبّل البدايات الجديدة - فكل لحظة فرصة للبدء من جديد. |
| 2692 | Witnessing & Testimony | الشهادة |
| 2693 | Speak and live your truth - authenticity is your power. | قل الحقّ وعِش به - فالصدق قوّتك. |
| 2694 | Trust & Reliability | الثقة والاعتماد |
| 2695 | Inner Strength & Power | القوة الباطنة |
| 2696 | Draw on your inner strength - you are more powerful than you know. | استمدّ من قوّتك الباطنة - فأنت أقوى مما تظنّ. |
| 2697 | Steadfastness & Solidity | الثبات والرسوخ |
| 2698 | Stand firm in your principles - unwavering strength guides you. | اثبت على مبادئك - فالقوة الراسخة ترشدك. |
| 2699 | Be a true friend and protector - loyalty is sacred. | كن صديقًا وفيًّا وحاميًا - فالوفاء أمر عظيم. |
| 2700 | Worthiness of Praise | استحقاق الحمد |
| 2701 | Live in a way worthy of praise - excellence in character. | عِش عيشًا يستحقّ الثناء - إحسانًا في الخُلق. |
| 2702 | The Accounter | المحصي |
| 2703 | Precision & Counting | الدقّة والإحصاء |
| 2704 | Pay attention to details - every small thing counts. | انتبه إلى التفاصيل - فكل صغيرة محسوبة. |
| 2705 | Innovation & Creation | الابتكار والإنشاء |
| 2706 | Initiate new ideas - be a source of creative beginnings. | ابتدئ أفكارًا جديدة - وكن مصدر بدايات مبدعة. |
| 2707 | Restoration & Renewal | الإعادة والتجدّد |
| 2708 | Vitality & Life Force | الحيوية وقوة الحياة |
| 2709 | Bring life to what you touch - energize and invigorate. | أحيِ ما تلمسه - انشط وانشر النشاط. |
| 2710 | The Causer of Death | المميت |
| 2711 | Endings & Transformation | الخواتيم والتحوّل |
| 2712 | Accept endings gracefully - they make way for new beginnings. | تقبّل الخواتيم برضا - فهي تفسح للبدايات الجديدة. |
| 2713 | Eternal Life & Energy | الحياة والطاقة الدائمة |
| 2714 | Live fully in each moment - embrace the eternal now. | عِش كل لحظة بكمالها - واغتنم الحاضر. |
| 2715 | The Self-Sustaining | القيّوم |
| 2716 | Independence & Self-Sufficiency | الاستقلال والاكتفاء |
| 2717 | Be self-sustaining - cultivate inner resources. | كن مكتفيًا بالله - ونمِّ مواردك الباطنة. |
| 2718 | Discovery & Finding | الاكتشاف والوجدان |
| 2719 | Seek and you shall find - discovery awaits you. | اطلب تجد - فالاكتشاف ينتظرك. |
| 2720 | The Noble | الماجد |
| 2721 | Nobility & Excellence | النُّبل والإحسان |
| 2722 | Act with nobility - excellence of character defines you. | اعمل بنُبل - فإحسان الخُلق يعرّفك. |
| 2723 | Unity & Oneness | الوحدة والتوحيد |
| 2724 | Recognize the unity in all - we are all connected. | أدرِك الوحدة في الكل - فكلنا متّصلون. |
| 2725 | Refuge & Support | الملجأ والسند |
| 2726 | Be a refuge for others - provide safe harbor. | كن ملجأً للآخرين - وقدّم لهم مأمنًا. |
| 2727 | Capability & Competence | القدرة والكفاءة |
| 2728 | Trust your capabilities - you are more able than you think. | ثق بقدراتك - فأنت أقدر مما تظنّ. |
| 2729 | Supreme Power | القدرة العليا |
| 2730 | Claim your power - act with confidence and authority. | قُم بما أُعطيت من قوة - واعمل بثقة وحزم. |
| 2731 | Progress & Advancement | التقدّم والترقّي |
| 2732 | Patience & Timing | الصبر والتوقيت |
| 2733 | Trust divine timing - not all delays are denials. | ثق بتوقيت الله - فليس كل تأخير منعًا. |
| 2734 | Primacy & Leadership | الأوّلية والقيادة |
| 2735 | Completion & Endings | الإتمام والخواتيم |
| 2736 | Complete what you start - see things through to the end. | أتمّ ما تبدؤه - وامضِ فيه حتى النهاية. |
| 2737 | Clarity & Visibility | الوضوح والظهور |
| 2738 | Inner Depth & Mystery | العمق الباطن والسرّ |
| 2739 | Honor your inner depths - not all must be revealed. | أكرِم أعماقك الباطنة - فليس كل شيء يُكشف. |
| 2740 | Leadership & Governance | القيادة والتدبير |
| 2741 | Lead with wisdom - good governance serves all. | قُد بالحكمة - فحسن التدبير يخدم الجميع. |
| 2742 | Supreme Excellence | الإحسان الأعلى |
| 2743 | Aim for the highest - supreme excellence is achievable. | اقصد الأعلى - فالإحسان ممكن. |
| 2744 | The Source of Goodness | البَرّ |
| 2745 | Goodness & Kindness | الخير واللطف |
| 2746 | Be a source of goodness - kindness ripples outward. | كن مصدر خير - فاللطف يتّسع أثره. |
| 2747 | Forgiveness & New Chances | المغفرة والفرص الجديدة |
| 2748 | Justice & Retribution | العدل والجزاء |
| 2749 | Trust that justice will prevail - leave vengeance to the Divine. | ثق بأن العدل سيقوم - ودع الانتقام لله. |
| 2750 | Complete Pardon | العفو التام |
| 2751 | Pardon completely - let go of past grievances. | اعفُ تمامًا - وتخلَّ عن مظالم الماضي. |
| 2752 | Deep Compassion | الرأفة العميقة |
| 2753 | Sovereignty & Dominion | الملك والسلطان |
| 2754 | Rule your inner kingdom - master yourself first. | احكم مملكتك الباطنة - وأتقِن نفسك أولًا. |
| 2755 | Combine strength with kindness - majesty and grace together. | اجمع بين القوة واللطف - الجلال والجمال معًا. |
| 2756 | Fairness & Equity | القسط والإنصاف |
| 2757 | Unity & Gathering | الجمع والتأليف |
| 2758 | Abundance & Wealth | الغنى والوفرة |
| 2759 | Recognize your inherent richness - abundance is within. | اعرف ما أودعه الله فيك من غنى - فالغنى غنى النفس. |
| 2760 | Enrichment & Prosperity | الإغناء والرخاء |
| 2761 | Enrich the lives of others - prosperity multiplies when shared. | أغنِ حياة الآخرين - فالرخاء يتضاعف حين يُشارَك. |
| 2762 | Protection from Harm | الحفظ من الأذى |
| 2763 | Set healthy boundaries - protection is not rejection. | ضع حدودًا صحّية - فالحماية ليست رفضًا. |
| 2764 | The Distresser | الضارّ |
| 2765 | Trials & Tests | الابتلاءات والاختبارات |
| 2766 | Grow through challenges - difficulties strengthen character. | انمُ بالتحدّيات - فالصعاب تقوّي الخُلق. |
| 2767 | The Benefactor | النافع |
| 2768 | Benefit & Usefulness | النفع والفائدة |
| 2769 | Illumination & Guidance | الإنارة والهداية |
| 2770 | Guidance & Direction | الهداية والتوجيه |
| 2771 | The Incomparable | البديع |
| 2772 | Uniqueness & Originality | التفرّد والأصالة |
| 2773 | Embrace your uniqueness - you are incomparable. | تقبّل تفرّدك - فقد خلقك الله على صورة لا تتكرّر. |
| 2774 | Permanence & Legacy | الدوام والإرث |
| 2775 | Create lasting impact - build a legacy that endures. | اترك أثرًا باقيًا - وابنِ إرثًا يدوم. |
| 2776 | Inheritance & Legacy | الميراث والإرث |
| 2777 | Honor what you inherit - pass on wisdom to the next generation. | أكرِم ما ورثت - وانقل الحكمة إلى الجيل التالي. |
| 2778 | The Righteous Guide | الرشيد |
| 2779 | Right Guidance | الرشد |
| 2780 | Walk the right path - righteousness is its own reward. | اسلك الطريق المستقيم - فالاستقامة جزاء نفسها. |
| 2781 | Patience & Endurance | الصبر والتحمّل |
| 2782 | Cultivate patience - endure trials with grace and steadfastness. | نمِّ الصبر - واحتمل الابتلاءات برضا وثبات. |
| 2783 | The Beneficent, The Merciful | الرحمن الرحيم |
| 2784 | Complete Divine Mercy | الرحمة الإلهية التامّة |
| 2785 | The culmination of all Divine Names - embody complete mercy and compassion. | خلاصة الأسماء الحسنى - تخلّق بالرحمة والرأفة التامّتين. |
| 2786 | 📝 Letter Guide Panel | 📝 لوحة دليل الحروف |
| 2787 | Comprehensive guide to Arabic letters coming soon... | دليل شامل للحروف العربية قريبًا... |
| 2788 | The Science of Letters - traditional Islamic discipline studying the spiritual and numerical significance of Arabic letters | علم الحروف - علم إسلامي تقليدي يدرس الدلالة الروحية والعددية للحروف العربية |
| 2789 | Numerical value system for Arabic letters, used since pre-Islamic times | نظام القيم العددية للحروف العربية، المستعمل منذ ما قبل الإسلام |
| 2790 | Reduced Root - the Kabīr reduced to a single digit (1-9), revealing the spiritual station | الجذر المختزل - الكبير مختزلًا إلى رقم واحد (1-9)، يدلّ على المقام الروحي |
| 2791 | Elemental Value - number reduced modulo 9 determining primary element and temperament | القيمة العنصرية - العدد بباقي القسمة على 9، يحدّد العنصر الأساسي والطبع |
| 2792 | North/West African tradition that classifies 28 letters into 4 elements (7 per element) | تراث شمال أفريقيا وغربها الذي يصنّف الحروف الثمانية والعشرين في أربعة عناصر (سبعة لكل عنصر) |
| 2793 | Mysterious letters at the beginning of certain Qur'anic surahs (like Alif-Lām-Mīm) | الحروف المقطّعة في أوائل بعض سور القرآن (مثل الم) |
| 2794 | Personal nature determined by the balance of four elements (Fire, Earth, Air, Water) | الطبع الشخصي المحدَّد بتوازن العناصر الأربعة (النار، التراب، الهواء، الماء) |
| 2795 | Key terms in the Science of Letters | مصطلحات أساسية في علم الحروف |
| 2796 | These terms are used throughout your name destiny analysis | تُستعمل هذه المصطلحات في تحليل مسار اسمك كله |
| 2797 | Name Destiny Learning Center | مركز تعلّم مسار الاسم |
| 2798 | Discover the spiritual wisdom encoded in Arabic letters | اكتشف الحكمة الروحية في الحروف العربية |
| 2799 | What is ʿIlm al-Ḥurūf? | ما علم الحروف؟ |
| 2800 | ʿIlm al-Ḥurūf (علم الحروف), or the 'Science of Letters', is a traditional Islamic discipline that studies the spiritual and numerical significance of Arabic letters. Each letter of the Arabic alphabet carries not only a sound, but also a numerical value (Abjad system) and elemental qualities. | علم الحروف علم إسلامي تقليدي يدرس الدلالة الروحية والعددية للحروف العربية. فلكل حرف من حروف العربية صوت، وقيمة عددية (نظام الأبجد)، وصفات عنصرية. |
| 2801 | This science was developed by Islamic scholars over centuries, including Ibn al-ʿArabī, al-Būnī, and al-Ghazālī. It's used for spiritual contemplation, name analysis, and understanding hidden meanings in the Qur'anic text. | طوّر هذا العلم علماء مسلمون عبر قرون، منهم ابن عربي والبوني والغزالي. ويُستعمل للتأمّل الروحي وتحليل الأسماء وتدبّر المعاني الخفيّة في النصّ القرآني. |
| 2802 | Core Principles | المبادئ الأساسية |
| 2803 | Each Arabic letter has a unique numerical value (Abjad) | لكل حرف عربي قيمة عددية فريدة (الأبجد) |
| 2804 | Letters are associated with the four elements (Fire, Earth, Air, Water) | ترتبط الحروف بالعناصر الأربعة (النار، التراب، الهواء، الماء) |
| 2805 | Names reveal spiritual patterns and personal qualities | تكشف الأسماء أنماطًا روحية وصفات شخصية |
| 2806 | This science is used for reflection, not fortune-telling | يُستعمل هذا العلم للتأمّل لا للعرافة |
| 2807 | History & Tradition | التاريخ والتراث |
| 2808 | The Abjad system predates Islam and was used throughout the Semitic world. Muslim scholars developed it into a sophisticated spiritual discipline. The Maghribi (North/West African) tradition developed its own unique elemental classification of the 28 letters. | نظام الأبجد أقدم من الإسلام، واستُعمل في العالم السامي كله. وطوّره علماء المسلمين إلى علم روحي دقيق. وطوّر التراث المغربي (شمال أفريقيا وغربها) تصنيفًا عنصريًا خاصًا للحروف الثمانية والعشرين. |
| 2809 | Letters in Islamic Tradition | الحروف في التراث الإسلامي |
| 2810 | In Islamic tradition, letters are seen as carriers of deep spiritual meanings. The Qur'an itself begins several surahs with mysterious letters (al-Ḥurūf al-Muqaṭṭaʿa) like Alif-Lām-Mīm (الم), whose meanings have been contemplated by scholars for centuries. | في التراث الإسلامي تُعدّ الحروف حاملة لمعانٍ روحية عميقة. والقرآن نفسه يفتتح سورًا بحروف مقطّعة مثل الم، تأمّل العلماء معانيها قرونًا. |
| 2811 | Key Scholars | أعلام العلماء |
| 2812 | The great Sufi mystic wrote extensively on the spiritual significance of letters in works like al-Futūḥāt al-Makkiyya. | كتب الصوفي الكبير كثيرًا عن الدلالة الروحية للحروف في مؤلّفات مثل «الفتوحات المكية». |
| 2813 | Author of Shams al-Maʿārif, a major text on the science of letters and their spiritual applications. | صاحب «شمس المعارف»، من أبرز المصنّفات في علم الحروف وتطبيقاته الروحية. |
| 2814 | Explored the spiritual dimensions of language and writing in his theological work. | تناول الأبعاد الروحية للّغة والكتابة في مؤلّفه العقدي. |
| 2815 | Spiritual Perspective | المنظور الروحي |
| 2816 | ʿIlm al-Ḥurūf is seen as a tool for contemplation and self-reflection, not a means of predicting the future. It helps to: | يُعدّ علم الحروف أداة للتأمّل ومحاسبة النفس، لا وسيلة للتنبّؤ بالمستقبل. وهو يعين على: |
| 2817 | Understand the spiritual qualities encoded in your name | فهم الصفات الروحية في اسمك |
| 2818 | Contemplate your elemental nature and temperament | التأمّل في طبيعتك العنصرية وطبعك |
| 2819 | Discover resonances with Divine Names | اكتشاف الرنين مع الأسماء الحسنى |
| 2820 | Reflect on your unique spiritual path | التأمّل في طريقك الروحي الخاص |
| 2821 | How Calculations Work | كيف تجري الحسابات |
| 2822 | The Abjad system assigns a unique numerical value to each Arabic letter. These values are used to calculate several key numbers. | يجعل نظام الأبجد لكل حرف عربي قيمة عددية فريدة، وتُستعمل هذه القيم لحساب عدة أعداد أساسية. |
| 2823 | Letter values from 1 to 1000: | قيم الحروف من 1 إلى 1000: |
| 2824 | The sum of all letter values in your name. Represents your total spiritual potential. | مجموع قيم كل حروف اسمك. ويمثّل إمكانك الروحي الكلي. |
| 2825 | The Kabīr reduced to a single digit (1-9). Reveals your spiritual station and destiny path. | الكبير مختزلًا إلى رقم واحد (1-9). ويكشف مقامك الروحي وطريق مسارك. |
| 2826 | 3. Ḥadath (Elemental Value - الحدث) | 3. الحدث (القيمة العنصرية) |
| 2827 | Reduced modulo 9 (1-9). Determines your primary element and temperament. | بباقي القسمة على 9 (1-9). ويحدّد عنصرك الأساسي وطبعك. |
| 2828 | 4. Elemental Letter Distribution | 4. توزيع الحروف على العناصر |
| 2829 | Is this fortune-telling? | هل هذه عرافة؟ |
| 2830 | No. ʿIlm al-Ḥurūf is a tool for contemplation and self-reflection, not predicting the future. It's a way to understand the spiritual qualities and patterns encoded in your name. | لا. علم الحروف أداة للتأمّل ومحاسبة النفس، لا للتنبّؤ بالمستقبل. إنه طريقة لفهم الصفات والأنماط الروحية في اسمك. |
| 2831 | ʿIlm al-Ḥurūf is rooted in Islamic tradition and uses the Arabic Abjad system with 28 letters. Western numerology uses the Pythagorean system with 26 Latin letters. The philosophical and spiritual approaches are also different. | علم الحروف متجذّر في التراث الإسلامي، ويستعمل نظام الأبجد العربي بحروفه الثمانية والعشرين. أما علم الأعداد الغربي فيستعمل النظام الفيثاغوري بالحروف اللاتينية الستة والعشرين. والمنهجان الفلسفي والروحي مختلفان أيضًا. |
| 2832 | What is the Maghribi tradition? | ما التراث المغربي؟ |
| 2833 | The Maghribi tradition (North/West Africa - Senegal, Gambia, Mali, Mauritania) developed a unique system of classifying the 28 Arabic letters into 4 elements, with exactly 7 letters per element. This balanced system is based on thermal and moisture qualities. | طوّر التراث المغربي (شمال أفريقيا وغربها - السنغال، غامبيا، مالي، موريتانيا) نظامًا خاصًا يصنّف الحروف العربية الثمانية والعشرين في أربعة عناصر، سبعة حروف لكل عنصر بالضبط. ويقوم هذا النظام المتوازن على صفتي الحرارة والرطوبة. |
| 2834 | In the Abjad system, each Arabic letter has a numerical value. Your name, written in Arabic, can be converted to numbers. These numbers reveal spiritual patterns and qualities encoded in your name. | في نظام الأبجد لكل حرف عربي قيمة عددية. فيمكن تحويل اسمك المكتوب بالعربية إلى أعداد، وتكشف هذه الأعداد أنماطًا وصفات روحية في اسمك. |
| 2835 | Yes, but for the most meaningful results, use your full name as it appears on your birth certificate, written in Arabic. You can also analyze your mother's name to see maternal influence. | نعم، لكن لأفضل النتائج استعمل اسمك الكامل كما في شهادة الميلاد مكتوبًا بالعربية. ويمكنك أيضًا تحليل اسم أمك لترى أثر الأم. |
| 2836 | ʿIlm al-Ḥurūf is a tool for spiritual reflection and personal contemplation. It doesn't replace prayer, consulting scholars, or making practical decisions. Use it as a guide to better understand yourself. | علم الحروف أداة للتأمّل الروحي والتدبّر الشخصي. ولا يغني عن الدعاء ولا عن سؤال أهل العلم ولا عن اتّخاذ القرارات العملية. فاجعله دليلًا لفهم نفسك أكثر. |
| 2837 | Palindrome - reads same forwards and backwards | متناظر - يُقرأ طردًا وعكسًا سواء |
| 2838 | Balance and symmetry - your path has natural harmony. What appears different from various angles is fundamentally the same. | التوازن والتناظر - في طريقك انسجام طبيعي. فما يبدو مختلفًا من زوايا متعدّدة هو في أصله واحد. |
| 2839 | Ascending sequence - digits increase in order | تسلسل تصاعدي - الأرقام تتزايد بالترتيب |
| 2840 | Progressive growth - your journey is one of steady upward development. Each step builds naturally on the previous. | نموّ متدرّج - رحلتك رحلة ارتقاء ثابت، كل خطوة تُبنى على سابقتها. |
| 2841 | Descending sequence - digits decrease in order | تسلسل تنازلي - الأرقام تتناقص بالترتيب |
| 2842 | Refinement and distillation - your path involves releasing the unnecessary to reach essence. Simplification leads to clarity. | التهذيب والتصفية - في طريقك تخلٍّ عمّا لا يلزم للوصول إلى الجوهر. والتبسيط يقود إلى الوضوح. |
| 2843 | Amplified energy of | طاقة مضاعفة للعدد |
| 2844 | - this number carries intensified spiritual significance. The universe emphasizes this message. | - لهذا العدد دلالة روحية مكثّفة، فتأمّل رسالته. |
| 2845 | Significant repetition detected in digits | تكرار ملحوظ في الأرقام |
| 2846 | Emphasis and reinforcement - certain energies in your path are being highlighted and strengthened. | تأكيد وتقوية - بعض الطاقات في طريقك تُبرَز وتُقوّى. |
| 2847 | Angelic number pattern - repeating sequence | نمط عدد متكرّر |
| 2848 | Divine attention - this pattern often appears when spiritual guidance is near. Pay attention to synchronicities. | لفتة للتأمّل - قد يذكّرك هذا النمط بالانتباه إلى ما حولك من آيات ومعانٍ. |
| 2849 | Multiple of sacred number(s): | مضاعف لعدد (أعداد) مميّز: |
| 2850 | Connected to Islamic sacred numerology ( | متّصل بالأعداد المميّزة في التراث الإسلامي ( |
| 2851 | ). Your value resonates with traditional spiritual significance. | ). وقيمتك تتناغم مع دلالة روحية تقليدية. |
| 2852 | Mirror number | العدد المعكوس |
| 2853 | is significant | له دلالة |
| 2854 | , creating a hidden connection. What you seek may be found by looking at things in reverse. | ، فيصنع صلة خفيّة. وقد تجد ما تطلبه بالنظر إلى الأمور من الجهة الأخرى. |
| 2855 | Your number carries perfect symmetry and amplification - a rare spiritual alignment indicating mastery and completion. | لعددك تناظر تامّ وتضاعف - انسجام روحي نادر يدلّ على الإتقان والتمام. |
| 2856 | Progressive spiritual development aligned with sacred tradition - you are on a well-trodden path of enlightenment. | نموّ روحي متدرّج منسجم مع التراث - أنت على طريق مسلوك من طرق السير إلى الله. |
| 2857 | The angels speak through numbers - this is a sign to trust your intuition and pay attention to subtle messages. | الأعداد مجال للتأمّل - فاجعل هذا تذكيرًا بالإصغاء إلى حدسك وملاحظة المعاني الدقيقة، والعلم عند الله. |
| 2858 | Multiple patterns converge in your number - this indicates a pivotal moment of spiritual significance in your journey. | تلتقي في عددك أنماط متعدّدة - وقد يكون هذا وقفة مهمّة للتأمّل في رحلتك. |
| 2859 | patterns - aligned spiritual energies | أنماط - طاقات روحية منسجمة |
| 2860 | ) are mirror numbers - complementary spiritual forces | ) أعداد معكوسة - قوى روحية متكاملة |
| 2861 | which has | الذي له |
| 2862 | pattern(s) - combined energy creates harmony | نمط (أنماط) - الطاقة المجتمعة تصنع انسجامًا |
| 2863 | Translation not available. Please visit Quran.com for the full translation. | الترجمة غير متاحة. يُرجى زيارة Quran.com للترجمة الكاملة. |
| 2864 | Invalid Hadad value - must be positive | قيمة الحدد غير صالحة - يجب أن تكون موجبة |
| 2865 | not found in metadata | غير موجود في البيانات |
| 2866 | This verse emerged through numerical resonance between your name and the Qur'anic structure. | ظهرت هذه الآية من رنين عددي بين اسمك وبنية النصّ القرآني. |
| 2867 | Reflect upon it as a potential sign or reminder in your spiritual journey. | تدبّرها تذكرةً في رحلتك الروحية. |
| 2868 | Remember: this is for contemplation, not divination. | تذكّر: هذا للتدبّر لا للكهانة. |
| 2869 | day enhances your energy | اليوم يعزّز طاقتك |
| 2870 | rules both hour and day (double power) | يحكم الساعة واليوم معًا (قوة مضاعفة) |
| 2871 | brings beneficial energy | يجلب طاقة نافعة |
| 2872 | Current alignment is | الانسجام الحالي |
| 2873 | Next optimal window: | النافذة المثلى التالية: |
| 2874 | Talisman Timing Analysis | تحليل توقيت الوفق |
| 2875 | Optimal Day | اليوم الأمثل |
| 2876 | Optimal Hour | الساعة المثلى |
| 2877 | Upcoming Optimal Windows | النوافذ المثلى القادمة |
| 2878 | Alignment Score | درجة الانسجام |
| 2879 | Saturn hour | ساعة زحل |
| 2880 | Grounding, discipline, boundaries, ancestral wisdom | التجذّر، الانضباط، الحدود، حكمة الأسلاف |
| 2881 | Expansion, abundance, wisdom, good fortune | الاتساع، الوفرة، الحكمة، حسن الحظ |
| 2882 | Mars hour | ساعة المريخ |
| 2883 | Venus hour | ساعة الزهرة |
| 2884 | Communication, intellect, travel, commerce | التواصل، العقل، السفر، التجارة |
| 2885 | Moon hour | ساعة القمر |
| 2886 | Intuition, emotions, dreams, receptivity | الحدس، العواطف، المنامات، التلقّي |
| 2887 | Lo Shu (Saturn) | لو شو (زحل) |
| 2888 | Dürer (Jupiter) | دورر (المشتري) |
| 2889 | Composite (Sun) | مركّب (الشمس) |
| 2890 | Composite (Mercury) | مركّب (عطارد) |
| 2891 | Magic Square | الوفق |
| 2892 | Magic Constant | الثابت السحري (مجموع الصفّ) |
| 2893 | Intention | النيّة |
| 2894 | Created From | مأخوذ من |
| 2895 | Legacy | الإرث |
| 2896 | Eternal Wisdom | الحكمة الباقية |
| 2897 | Start fresh | ابدأ من جديد |
| 2898 | Listen deeply | أصغِ بعمق |
| 2899 | Find balance | جِد التوازن |
| 2900 | Communicate | تواصل |
| 2901 | Be adventurous | كن مغامرًا |
| 2902 | Serve family | اخدم الأسرة |
| 2903 | Spiritual Growth | النموّ الروحي |
| 2904 | Seek wisdom | اطلب الحكمة |
| 2905 | Meditate | تأمّل |
| 2906 | Study deeply | ادرس بعمق |
| 2907 | Achieve goals | حقّق الأهداف |
| 2908 | Lead powerfully | قُد بقوة |
| 2909 | Laziness & Negative Thinking | الكسل والتفكير السلبي |
| 2910 | Tendency toward shortcuts | الميل إلى الطرق المختصرة |
| 2911 | Difficulty completing tasks | صعوبة إتمام المهامّ |
| 2912 | Negative thought patterns | أنماط تفكير سلبية |
| 2913 | Struggles with discipline | صعوبة في الانضباط |
| 2914 | Dhikr for perseverance (Ya Sabūr) | ذكر للمثابرة (يا صبور) |
| 2915 | Reframe challenges positively | انظر إلى التحدّيات نظرة إيجابية |
| 2916 | Build consistent routines | ابنِ عادات ثابتة |
| 2917 | Abuse of Freedom | إساءة استعمال الحرية |
| 2918 | Excessive indulgence | الإفراط في الملذّات |
| 2919 | Seeking escape through substances or behaviors | الهروب بالمواد أو السلوكيات |
| 2920 | Practice moderation in all things. True freedom comes through self-discipline. | اعتدل في كل شيء. فالحرية الحقّة تأتي بضبط النفس. |
| 2921 | Fasting and abstinence practices | ممارسات الصيام والإمساك |
| 2922 | Dhikr for self-control (Ya Qabid) | ذكر لضبط النفس (يا قابض) |
| 2923 | Set healthy boundaries | ضع حدودًا صحّية |
| 2924 | Mindful consumption | استهلاك واعٍ |
| 2925 | Commit to one path deeply | التزم بطريق واحد بعمق |
| 2926 | Learning humility and proper use of power in relationships through ego dissolution. | تعلّم التواضع وحسن استعمال القوة في العلاقات بتذويب الأنا. |
| 2927 | Sudden relationship endings | نهايات مفاجئة للعلاقات |
| 2928 | Ego-driven decisions backfire | القرارات التي تحرّكها الأنا تنقلب على صاحبها |
| 2929 | Betrayals or abandonments | خيانات أو هجران |
| 2930 | Loss of status or position | فقدان المكانة أو المنصب |
| 2931 | Surrender the ego. Love selflessly. Build on spiritual foundation, not ego. | تخلَّ عن الأنا، وأحبب بإيثار، وابنِ على أساس روحي لا على الأنا. |
| 2932 | Dhikr for divine love (Ya Wadud) | ذكر للمحبّة (يا ودود) |
| 2933 | Serve without expectation | اخدم دون انتظار |
| 2934 | Meditate on impermanence | تأمّل في الفناء |
| 2935 | Forgive deeply and often | اعفُ بعمق وكثيرًا |
| 2936 | Learning to give rather than take, serve rather than dominate. | تعلّم العطاء بدل الأخذ، والخدمة بدل التسلّط. |
| 2937 | Difficulty asking for help | صعوبة طلب العون |
| 2938 | Loneliness despite achievements | الوحدة رغم الإنجازات |
| 2939 | Fear of dependency | الخوف من الاعتماد على الغير |
| 2940 | Learn to receive. Serve humbly. Recognize interdependence as divine design. | تعلّم أن تتلقّى، واخدم بتواضع، واعلم أن حاجة الناس بعضهم إلى بعض من سنن الله. |
| 2941 | Practice asking for help | تدرّب على طلب العون |
| 2942 | Dhikr for unity (Ya Wahid, Ya Ahad) | ذكر للوحدة (يا واحد، يا أحد) |
| 2943 | Join community service | شارك في خدمة المجتمع |
| 2944 | Share power willingly | شارك السلطة طوعًا |
| 2945 | Acknowledge others' contributions | اعترف بإسهامات الآخرين |
| 2946 | Seven heavens, seven earths | سبع سماوات وسبع أرضين |
| 2947 | Divine perfection and wholeness. Your name carries the frequency of completion. | التمام والكمال. ويحمل اسمك معنى الاكتمال. |
| 2948 | Months, Tribes, Imams | الشهور والأسباط والأئمة |
| 2949 | Twelve months, twelve springs | اثنا عشر شهرًا واثنتا عشرة عينًا |
| 2950 | Cosmic order and leadership. Your path involves guiding others. | النظام الكوني والقيادة. وفي طريقك إرشاد للآخرين. |
| 2951 | Quranic Miracle Number | العدد 19 في القرآن |
| 2952 | Mathematical pattern in Quran | نمط عددي في القرآن |
| 2953 | Divine signature. Your soul carries a special message for humanity. | علامة للتأمّل. لعلّ في طريقك رسالة نافعة للناس. |
| 2954 | Testing & Purification Period | مدّة الابتلاء والتزكية |
| 2955 | Nations, Elders, Completion | الأمم والشيوخ والتمام |
| 2956 | Seventy elders of Moses | السبعون الذين اختارهم موسى |
| 2957 | Wisdom keeper. You are meant to gather and share ancient knowledge. | حافظ للحكمة. لعلّك ممن يجمع المعرفة القديمة وينشرها. |
| 2958 | Names of Allah | أسماء الله |
| 2959 | Divine attributes. Your soul reflects the Beautiful Names. | الصفات الإلهية. لتكن روحك متخلّقة بمعاني الأسماء الحسنى. |
| 2960 | Surah Al-Ikhlas Value | قيمة سورة الإخلاص |
| 2961 | The Chapter of Sincerity | سورة الإخلاص |
| 2962 | Pure monotheism. Your essence is aligned with divine unity. | التوحيد الخالص. ليكن جوهرك قائمًا على التوحيد. |
| 2963 | Warriors of Badr | أهل بدر |
| 2964 | Spiritual warrior. You are here to stand for truth. | مجاهد للنفس. لتكن ممن يقوم بالحقّ. |
| 2965 | Bismillah al-Rahman al-Rahim | بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ |
| 2966 | Opening verse of Quran | الآية الأولى من القرآن |
| 2967 | Begin with grace. Your every action should start with divine remembrance. | ابدأ بالبركة. ليبدأ كل عمل لك بذكر الله. |
| 2968 | Symbolic Perfection | الكمال الرمزي |
| 2969 | Mastery incarnate. You are here to demonstrate perfection of soul. | الإتقان. لتكن ممن يسعى إلى كمال النفس. |
| 2970 | Military Leader | قائد عسكري |
| 2971 | Manager | مدير |
| 2972 | Pioneer in Tech | رائد في التقنية |
| 2973 | Subordinate roles | الأدوار التابعة |
| 2974 | Repetitive tasks | المهامّ المتكرّرة |
| 2975 | HR Professional | مختصّ في الموارد البشرية |
| 2976 | Isolated work | العمل المنعزل |
| 2977 | You excel at bringing people together and creating harmony in teams and relationships. | تتفوّق في جمع الناس وصنع الانسجام في الفرق والعلاقات. |
| 2978 | Public Speaker | متحدّث عام |
| 2979 | Entertainer | فنّان أداء |
| 2980 | Content Creator | صانع محتوى |
| 2981 | Silent, monotonous work | العمل الصامت الرتيب |
| 2982 | Strict corporate settings | بيئات الشركات الصارمة |
| 2983 | Environments that suppress creativity | البيئات التي تكبت الإبداع |
| 2984 | You're naturally expressive and thrive when you can communicate, create, and inspire others. | أنت معبّر بطبعك، وتزدهر حين تستطيع التواصل والإبداع وإلهام الآخرين. |
| 2985 | Administrator | إداري |
| 2986 | Planner | مخطّط |
| 2987 | Systems Designer | مصمّم أنظمة |
| 2988 | Chaotic, unstructured environments | البيئات الفوضوية غير المنظّمة |
| 2989 | Frequent travel | كثرة السفر |
| 2990 | Jobs without clear processes | الوظائف بلا إجراءات واضحة |
| 2991 | Travel Guide | مرشد سياحي |
| 2992 | Sales | المبيعات |
| 2993 | Event Planner | منظّم فعاليات |
| 2994 | PR Specialist | مختصّ علاقات عامة |
| 2995 | Flight Attendant | مضيف طيران |
| 2996 | Freelancer | عمل حرّ |
| 2997 | Routine desk jobs | وظائف المكتب الروتينية |
| 2998 | Micromanaged environments | البيئات كثيرة الرقابة |
| 2999 | You love variety and freedom, thriving in dynamic environments where you can explore and adapt. | تحبّ التنوّع والحرية، وتزدهر في البيئات الحيوية التي تستكشف فيها وتتكيّف. |
| 3000 | Caregiver | مقدّم رعاية |
| 3001 | Chef | طاهٍ |
| 3002 | Interior Designer | مصمّم داخلي |
| 3003 | Family Therapist | معالج أسري |
| 3004 | Hospitality Manager | مدير ضيافة |
| 3005 | Cut-throat competition | المنافسة الشرسة |
| 3006 | Highly individualistic roles | الأدوار الفردية جدًا |
| 3007 | You're naturally nurturing and responsible, finding fulfillment when you serve and care for others. | أنت راعٍ مسؤول بطبعك، وتجد رضاك في خدمة الآخرين ورعايتهم. |
| 3008 | Philosopher | فيلسوف |
| 3009 | Spiritual Guide | مرشد روحي |
| 3010 | Investigator | محقّق |
| 3011 | Data Scientist | عالم بيانات |
| 3012 | Superficial sales roles | أدوار المبيعات السطحية |
| 3013 | Overly social environments | البيئات المفرطة في الاختلاط |
| 3014 | You're analytical and introspective, excelling when you can dive deep into knowledge and mysteries. | أنت تحليلي متأمّل، تتفوّق حين تغوص في المعرفة والأسرار. |
| 3015 | Finance Manager | مدير مالي |
| 3016 | Real Estate Developer | مطوّر عقاري |
| 3017 | Business Owner | صاحب عمل |
| 3018 | Investment Banker | مصرفي استثمار |
| 3019 | Attorney | محامٍ |
| 3020 | Producer | منتج |
| 3021 | Low-responsibility roles | الأدوار قليلة المسؤولية |
| 3022 | You're ambitious and results-driven, excelling at managing resources and achieving material success. | أنت طموح موجَّه بالنتائج، تتفوّق في إدارة الموارد وتحقيق النجاح المادي. |
| 3023 | Non-Profit Leader | قائد في العمل الخيري |
| 3024 | Global Advocate | مناصر عالمي |
| 3025 | Philanthropist | محسن |
| 3026 | Environmentalist | ناشط بيئي |
| 3027 | Narrow, self-serving work | العمل الضيّق الأناني |
| 3028 | Materialistic environments | البيئات المادية |
| 3029 | Jobs lacking purpose | الوظائف بلا غاية |
| 3030 | You're compassionate and globally-minded, finding fulfillment when you serve humanity and create positive change. | أنت رحيم واسع الأفق، تجد رضاك في خدمة الناس وصنع تغيير نافع. |
| 3031 | Motivational Speaker | متحدّث تحفيزي |
| 3032 | Visionary Leader | قائد صاحب رؤية |
| 3033 | Intuitive Coach | مدرّب حدسي |
| 3034 | Psychic | صاحب فراسة |
| 3035 | Inspirational Writer | كاتب ملهِم |
| 3036 | Mundane, routine work | العمل الرتيب العادي |
| 3037 | Materially-focused jobs | الوظائف المادية الصرفة |
| 3038 | Environments that suppress intuition | البيئات التي تكبت الحدس |
| 3039 | You're a spiritual visionary who inspires others and carries messages from higher realms. | أنت صاحب رؤية روحية تُلهم الآخرين وتحمل معاني سامية. |
| 3040 | Large-Scale Developer | مطوّر مشاريع كبرى |
| 3041 | Visionary CEO | رئيس تنفيذي صاحب رؤية |
| 3042 | International Leader | قائد دولي |
| 3043 | Founder of Institutions | مؤسّس مؤسّسات |
| 3044 | Work without legacy potential | العمل بلا أثر باقٍ |
| 3045 | You're a master manifestor who builds lasting structures and turns grand visions into reality. | أنت بانٍ متقن تُقيم بنى دائمة وتحوّل الرؤى الكبيرة إلى واقع. |
| 3046 | Humanitarian Leader | قائد إنساني |
| 3047 | Universal Counselor | مستشار شامل |
| 3048 | Transformational Coach | مدرّب تحوّلي |
| 3049 | Compassionate Leader | قائد رحيم |
| 3050 | Global Educator | معلّم عالمي |
| 3051 | Work lacking compassion | العمل الخالي من الرحمة |
| 3052 | You're a master teacher who guides humanity with unconditional love and profound wisdom. | أنت معلّم متقن يرشد الناس بمحبّة غير مشروطة وحكمة عميقة. |
| 3053 | Practice patience - not everything needs to be done right now | تحلَّ بالصبر - فليس كل شيء يلزم الآن |
| 3054 | Balance independence with collaboration | وازِن الاستقلال بالتعاون |
| 3055 | Schedule regular breaks to avoid burnout | خصّص استراحات منتظمة لتجنّب الإنهاك |
| 3056 | Set clear boundaries - it's okay to say no | ضع حدودًا واضحة - لا بأس أن تقول لا |
| 3057 | Speak up for your own needs, not just others' | عبّر عن حاجاتك أنت، لا حاجات الآخرين وحدها |
| 3058 | Finish projects before starting new ones | أتمّ المشاريع قبل البدء بغيرها |
| 3059 | Practice focused work without distractions | اعمل بتركيز بلا مشتّتات |
| 3060 | Don't scatter your energy - choose priorities | لا تبعثر طاقتك - اختر أولوياتك |
| 3061 | Allow room for spontaneity and flexibility | اترك مجالًا للعفوية والمرونة |
| 3062 | Take calculated risks instead of always playing safe | خاطر مخاطرة محسوبة بدل الحذر الدائم |
| 3063 | Commit to one thing at a time instead of juggling many | التزم بأمر واحد في كل مرّة بدل الكثير |
| 3064 | Ground yourself daily through meditation or nature | تجذّر كل يوم بالتأمّل أو الطبيعة |
| 3065 | Balance material success with spiritual growth | وازِن النجاح المادي بالنموّ الروحي |
| 3066 | Lead with compassion, not just authority | قُد بالرحمة لا بالسلطة وحدها |
| 3067 | Set healthy boundaries - you can't save everyone | ضع حدودًا صحّية - لا يمكنك إنقاذ الجميع |
| 3068 | Ground yourself in practical daily tasks | تجذّر بالمهامّ اليومية العملية |
| 3069 | Take care of your own needs before serving others | اعتنِ بحاجاتك قبل خدمة الآخرين |
| 3070 | Release attachment to outcomes - let go when needed | تخلَّ عن التعلّق بالنتائج - ودَع حين يلزم |
| 3071 | Balance giving with receiving | وازِن العطاء بالأخذ |
| 3072 | Ground your visions in practical action | جذّر رؤاك في عمل عملي |
| 3073 | Balance spiritual work with physical self-care | وازِن العمل الروحي بالعناية بالبدن |
| 3074 | Trust divine timing - you don't have to rush | ثق بتوقيت الله - لا داعي للعجلة |
| 3075 | Balance grand vision with attention to details | وازِن الرؤية الكبيرة بالانتباه إلى التفاصيل |
| 3076 | Rest regularly - even master builders need recovery | استرح بانتظام - حتى كبار البنّائين يحتاجون إلى التعافي |
| 3077 | Teach without sacrificing your own wellbeing | علّم دون التضحية بعافيتك |
| 3078 | Set clear boundaries even while serving | ضع حدودًا واضحة حتى وأنت تخدم |
| 3079 | Remember you're human too - rest and restore | تذكّر أنك بشر أيضًا - استرح وتعافَ |
| 3080 | Can become domineering or overly controlling | قد تصبح متسلّطًا أو مفرطًا في السيطرة |
| 3081 | May struggle with collaboration or listening to others | قد تجد صعوبة في التعاون أو الإصغاء للآخرين |
| 3082 | Tendency to burn out from doing everything alone | ميل إلى الإنهاك من فعل كل شيء وحدك |
| 3083 | May come across as aggressive or insensitive | قد تبدو عدوانيًا أو قليل المراعاة |
| 3084 | Can become overly dependent on others' approval | قد تعتمد كثيرًا على استحسان الآخرين |
| 3085 | Risk of being too passive or indecisive | خطر السلبية أو التردّد المفرط |
| 3086 | May struggle with standing up for yourself | قد تجد صعوبة في الدفاع عن نفسك |
| 3087 | Can scatter energy across too many projects | قد تبعثر طاقتك على مشاريع كثيرة |
| 3088 | May use humor or charm to avoid depth | قد تستعمل الدعابة أو الجاذبية لتجنّب العمق |
| 3089 | Risk of being superficial or lacking follow-through | خطر السطحية أو عدم المتابعة |
| 3090 | May get stuck in routines and miss opportunities | قد تعلق في الروتين وتفوتك الفرص |
| 3091 | Risk of being overly critical or perfectionistic | خطر النقد المفرط أو الكمالية |
| 3092 | Tendency to overwork and neglect play | ميل إلى الإفراط في العمل وإهمال الترويح |
| 3093 | Can become restless or commitment-phobic | قد تصبح قلقًا أو نافرًا من الالتزام |
| 3094 | Risk of being impulsive or reckless | خطر الاندفاع أو التهوّر |
| 3095 | Can become a martyr or overly self-sacrificing | قد تفرط في التضحية بنفسك |
| 3096 | Risk of perfectionism in home or relationships | خطر الكمالية في البيت أو العلاقات |
| 3097 | Tendency to feel unappreciated or resentful | ميل إلى الشعور بعدم التقدير أو الاستياء |
| 3098 | May struggle with receiving or asking for help | قد تجد صعوبة في تلقّي العون أو طلبه |
| 3099 | Can become isolated or emotionally distant | قد تصبح منعزلًا أو بعيدًا عاطفيًا |
| 3100 | Risk of being skeptical or distrustful | خطر الشكّ أو عدم الثقة |
| 3101 | Tendency to intellectualize emotions instead of feeling them | ميل إلى عقلنة المشاعر بدل الإحساس بها |
| 3102 | May struggle with vulnerability or intimacy | قد تجد صعوبة في الانكشاف أو القرب |
| 3103 | Can become power-hungry or materialistic | قد تصبح متعطّشًا للسلطة أو ماديًا |
| 3104 | May use people as stepping stones | قد تتّخذ الناس سلّمًا |
| 3105 | Tendency to equate worth with success or money | ميل إلى قياس القيمة بالنجاح أو المال |
| 3106 | Can become overly idealistic or impractical | قد تصبح مفرطًا في المثالية أو بعيدًا عن الواقع |
| 3107 | Risk of emotional overwhelm from world's pain | خطر الإرهاق العاطفي من آلام العالم |
| 3108 | Tendency to give until depleted | ميل إلى العطاء حتى النفاد |
| 3109 | May struggle with letting go or completion | قد تجد صعوبة في التخلّي أو الإتمام |
| 3110 | Can feel misunderstood or alienated | قد تشعر بأنك غير مفهوم أو غريب |
| 3111 | May struggle to ground visions into reality | قد تجد صعوبة في تحويل الرؤى إلى واقع |
| 3112 | Risk of spiritual bypassing or escapism | خطر الهروب الروحي من الواقع |
| 3113 | Tendency to feel overwhelmed by sensitivity | ميل إلى الشعور بالإرهاق من فرط الحساسية |
| 3114 | May struggle with practical, mundane tasks | قد تجد صعوبة في المهامّ العملية العادية |
| 3115 | May struggle with patience for long-term building | قد تجد صعوبة في الصبر على البناء الطويل |
| 3116 | Risk of burnout from massive ambitions | خطر الإنهاك من الطموحات الهائلة |
| 3117 | May struggle with starting small or being content | قد تجد صعوبة في البدء صغيرًا أو القناعة |
| 3118 | Can become overwhelmed by responsibility to humanity | قد ترهقك مسؤوليتك تجاه الناس |
| 3119 | Risk of spiritual exhaustion from constant giving | خطر الإنهاك الروحي من العطاء الدائم |
| 3120 | Tendency to hold yourself to impossible standards | ميل إلى مطالبة نفسك بمعايير مستحيلة |
| 3121 | May struggle with accepting human limitations | قد تجد صعوبة في تقبّل حدود البشر |
| 3122 | Daily affirmation: "I lead with courage and humility." Practice meditation to balance assertiveness with inner peace. | تذكير يومي: «أقود بشجاعة وتواضع». وتأمّل لتوازن الحزم بالسكينة الباطنة. |
| 3123 | Start one new initiative or project | ابدأ مبادرة أو مشروعًا جديدًا واحدًا |
| 3124 | Ask for help with one task instead of doing it alone | اطلب العون في مهمّة واحدة بدل إنجازها وحدك |
| 3125 | Avoid becoming domineering or refusing to collaborate. Balance independence with teamwork. | تجنّب التسلّط أو رفض التعاون. وازِن الاستقلال بالعمل الجماعي. |
| 3126 | Daily affirmation: "I honor my own needs while serving others." Practice boundary-setting as spiritual discipline. | تذكير يومي: «أكرم حاجاتي وأنا أخدم الآخرين». وتدرّب على وضع الحدود رياضةً روحية. |
| 3127 | Express your opinion even if it differs from the group | عبّر عن رأيك ولو خالف الجماعة |
| 3128 | Daily affirmation: "I express my truth with joy and discipline." Practice focused creativity sessions. | تذكير يومي: «أعبّر عن حقيقتي بفرح وانضباط». وخصّص جلسات إبداع مركّزة. |
| 3129 | Finish one creative project before starting another | أتمّ مشروعًا إبداعيًا قبل أن تبدأ غيره |
| 3130 | Avoid scattering your energy or using charm to escape depth. Focus brings power. | تجنّب بعثرة طاقتك أو الهروب من العمق بالجاذبية. فالتركيز قوة. |
| 3131 | Daily affirmation: "I build with patience and trust the process." Practice yoga or grounding exercises. | تذكير يومي: «أبني بصبر وأثق بالمسار». وتدرّب على تمارين التجذّر. |
| 3132 | Schedule time for play or spontaneity | خصّص وقتًا للترويح أو العفوية |
| 3133 | Daily affirmation: "I am free and grounded." Practice grounding meditation or nature walks. | تذكير يومي: «أنا حرّ ومتجذّر». وتأمّل تأمّل تجذّر أو امشِ في الطبيعة. |
| 3134 | Commit to one thing and see it through this week | التزم بأمر واحد وأتمّه هذا الأسبوع |
| 3135 | Create one simple daily routine for stability | ضع عادة يومية بسيطة واحدة للثبات |
| 3136 | Ground yourself through physical exercise or gardening | تجذّر بالتمرين البدني أو البستنة |
| 3137 | Avoid restlessness or commitment-phobia. True freedom comes from mastering discipline. | تجنّب القلق أو النفور من الالتزام. فالحرية الحقّة من إتقان الانضباط. |
| 3138 | Daily affirmation: "I give and receive with balance." Practice self-care rituals as spiritual practice. | تذكير يومي: «أعطي وآخذ بتوازن». واجعل العناية بنفسك عبادةً. |
| 3139 | Let someone solve their own problem this week | دع أحدًا يحلّ مشكلته بنفسه هذا الأسبوع |
| 3140 | Say no to one responsibility that isn't yours | ارفض مسؤولية واحدة ليست لك |
| 3141 | Accept help from someone graciously | اقبل العون من أحد بلطف |
| 3142 | Practice "good enough" instead of perfect in one area | اكتفِ بـ«الجيّد بما يكفي» بدل الكمال في مجال واحد |
| 3143 | Avoid martyrdom or controlling others "for their good." Let people have their own journey. | تجنّب التضحية المفرطة أو التحكّم بالآخرين «لمصلحتهم». دع الناس يسلكون طريقهم. |
| 3144 | Daily affirmation: "I trust my inner knowing." Practice contemplative prayer or silent meditation. | تذكير يومي: «أثق بمعرفتي الباطنة». وتدرّب على الدعاء التأمّلي أو التأمّل الصامت. |
| 3145 | Share one insight or teaching with someone | شارك فكرة أو درسًا مع أحد |
| 3146 | Practice feeling an emotion instead of analyzing it | تدرّب على الإحساس بشعور بدل تحليله |
| 3147 | Avoid isolation or emotional detachment. Connection is part of wisdom. | تجنّب العزلة أو الانفصال العاطفي. فالتواصل جزء من الحكمة. |
| 3148 | You are here to achieve, manifest abundance, and lead with power and integrity. | طريقك طريق الإنجاز وتحقيق الوفرة والقيادة بقوة ونزاهة. |
| 3149 | Daily affirmation: "I use power wisely and serve the highest good." Practice gratitude meditation. | تذكير يومي: «أستعمل القوة بحكمة وأخدم الخير الأسمى». وتأمّل تأمّل الشكر. |
| 3150 | Do one act of kindness without expecting return | اعمل معروفًا واحدًا دون انتظار مقابل |
| 3151 | Spend quality time with loved ones | اقضِ وقتًا طيبًا مع أحبّتك |
| 3152 | Lead with compassion in one situation this week | قُد برحمة في موقف واحد هذا الأسبوع |
| 3153 | Avoid workaholism or equating worth with achievement. You are enough as you are. | تجنّب إدمان العمل أو قياس قيمتك بالإنجاز. فأنت كافٍ كما أنت. |
| 3154 | Daily affirmation: "I serve with wisdom and boundaries." Practice loving-kindness meditation. | تذكير يومي: «أخدم بحكمة وحدود». وتأمّل تأمّل المحبّة والرحمة. |
| 3155 | Set one clear boundary around your giving | ضع حدًّا واضحًا واحدًا لعطائك |
| 3156 | Do one practical, grounded task | أنجز مهمّة عملية واحدة |
| 3157 | Let go of one thing you can't control | تخلَّ عن أمر واحد لا تملكه |
| 3158 | Practice receiving as well as giving | تدرّب على الأخذ كما تعطي |
| 3159 | Avoid depletion from over-giving. You can't pour from an empty cup. | تجنّب النفاد من فرط العطاء. ففاقد الشيء لا يعطيه. |
| 3160 | You are here to inspire, illuminate, and bring spiritual messages to humanity. | طريقك طريق الإلهام والإنارة وحمل المعاني الروحية إلى الناس. |
| 3161 | Daily affirmation: "I am a vessel of light grounded in reality." Practice visualization and grounding. | تذكير يومي: «أنا وعاء للنور متجذّر في الواقع». وتدرّب على التصوّر والتجذّر. |
| 3162 | Take one spiritual vision and create a practical first step | خذ رؤية روحية واحدة واصنع لها خطوة عملية أولى |
| 3163 | Protect your energy - say no to energy vampires | احفظ طاقتك - وقل لا لمن يستنزفها |
| 3164 | Share your insights with those ready to hear them | شارك أفكارك مع المستعدّين لسماعها |
| 3165 | Trust divine timing instead of rushing | ثق بتوقيت الله بدل العجلة |
| 3166 | Avoid spiritual escapism or feeling alienated. Ground your light in practical service. | تجنّب الهروب الروحي أو الشعور بالغربة. جذّر نورك في خدمة عملية. |
| 3167 | You are here to build lasting structures and turn grand visions into tangible reality. | طريقك طريق بناء البنى الدائمة وتحويل الرؤى الكبيرة إلى واقع ملموس. |
| 3168 | Daily affirmation: "I build step by step with patience." Practice mindful breathing when overwhelmed. | تذكير يومي: «أبني خطوة خطوة بصبر». وتنفّس بوعي حين يغلبك الضغط. |
| 3169 | Delegate one task to someone else | فوّض مهمّة واحدة إلى غيرك |
| 3170 | Rest when you need to - recovery fuels creation | استرح حين تحتاج - فالتعافي وقود الإنجاز |
| 3171 | Be patient with the process - Rome wasn't built in a day | اصبر على المسار - فالأمور العظيمة لا تُبنى في يوم |
| 3172 | Avoid overwhelm from the scale of your vision. Trust the process and start where you are. | تجنّب الإرهاق من حجم رؤيتك. ثق بالمسار وابدأ من حيث أنت. |
| 3173 | Daily affirmation: "I teach from fullness, not depletion." Practice self-compassion meditation. | تذكير يومي: «أعلّم من امتلاء لا من نفاد». وتأمّل تأمّل الرفق بالنفس. |
| 3174 | Release one responsibility that isn't yours to carry | تخلَّ عن مسؤولية واحدة ليست لك |
| 3175 | Teach or guide while maintaining clear boundaries | علّم أو أرشد مع الحفاظ على حدود واضحة |
| 3176 | Practice self-love with the same intensity you love others | أحبب نفسك بالقدر الذي تحبّ به الآخرين |
| 3177 | Rest deeply - you need it more than most | استرح بعمق - فأنت تحتاج إلى ذلك أكثر من غيرك |
| 3178 | Surah Al-Ikhlas 112:1 | سورة الإخلاص 112:1 |
| 3179 | Life Path 1 embodies divine unity and singularity. Like Allah being Al-Ahad, you're called to stand independently in your truth and lead with authentic individuality. | مسار الحياة 1 يعكس معنى الوحدانية والتفرّد. وكما أن الله هو الأحد، فأنت مدعوّ إلى الثبات مستقلًّا على الحقّ والقيادة بفردية صادقة. |
| 3180 | Recite Surah Al-Ikhlas 3 times after Fajr prayer to strengthen your connection to divine oneness and individual purpose. | اقرأ سورة الإخلاص ثلاث مرّات بعد صلاة الفجر لتقوية صلتك بالتوحيد وبغايتك الخاصة. |
| 3181 | Surah Al-Ahqaf 46:15 | سورة الأحقاف 46:15 |
| 3182 | Life Path 2 reflects divine gentleness and relational harmony. Like Al-Latif, you work through subtle kindness, diplomacy, and nurturing connections between people. | مسار الحياة 2 يعكس معنى اللطف والانسجام في العلاقات. وتخلّقًا باسم اللطيف تعمل بالرفق الخفيّ والدبلوماسية ورعاية الصلات بين الناس. |
| 3183 | Recite "Ya Latif" 129 times after Asr prayer to cultivate divine gentleness in your relationships and mediation work. | اذكر «يا لطيف» 129 مرّة بعد صلاة العصر لتنمية اللطف في علاقاتك وسعيك في الإصلاح. |
| 3184 | Surah Al-A'raf 7:176 | سورة الأعراف 7:176 |
| 3185 | Life Path 3 channels divine expression through creative communication. Like Al-Khabir, you're gifted with awareness that must be shared through stories, art, and joyful expression. | مسار الحياة 3 يوجّه التعبير بالتواصل المبدع. وتخلّقًا باسم الخبير أوتيت وعيًا ينبغي أن تشاركه بالقصص والفنّ والتعبير البهيج. |
| 3186 | After Maghrib, reflect on one story from the Quran and how it relates to your creative expression today. | بعد المغرب تأمّل قصة من قصص القرآن وصلتها بتعبيرك المبدع اليوم. |
| 3187 | Surah Al-Anbiya 21:32 | سورة الأنبياء 21:32 |
| 3188 | Life Path 4 embodies divine structure and preservation. Like Al-Hafiz, you build stable foundations, create order, and guard what is sacred through disciplined work. | مسار الحياة 4 يعكس معنى النظام والحفظ. وتخلّقًا باسم الحفيظ تبني أسسًا ثابتة، وتقيم النظام، وتحفظ المقدّس بالعمل المنضبط. |
| 3189 | Perform your 5 daily prayers at their exact times to embody divine order and structure in your spiritual practice. | أدِّ الصلوات الخمس في أوقاتها لتتجلّى معاني النظام في عبادتك. |
| 3190 | Surah An-Naba 78:8 | سورة النبأ 78:8 |
| 3191 | Life Path 5 reflects divine creativity and adaptability. Like Al-Musawwir, you shape-shift through experiences, exploring the diverse forms of creation with freedom and curiosity. | مسار الحياة 5 يعكس معنى الإبداع والتكيّف. وتخلّقًا باسم المصوّر تتقلّب في التجارب، مستكشفًا صور الخلق المتنوّعة بحرية وفضول. |
| 3192 | Before traveling or starting new experiences, recite "Bismillah" 5 times to invoke divine guidance through change. | قبل السفر أو بدء تجارب جديدة قل «بسم الله» خمس مرّات طالبًا هداية الله في التغيير. |
| 3193 | Surah Al-Isra 17:24 | سورة الإسراء 17:24 |
| 3194 | Life Path 6 embodies divine mercy and nurturing. Like Ar-Rahman, you extend unconditional compassion to family, community, and all who seek healing and harmony. | مسار الحياة 6 يعكس معنى الرحمة والرعاية. وتخلّقًا باسم الرحمن تبذل الرأفة للأسرة والمجتمع ولكل من يطلب الشفاء والانسجام. |
| 3195 | Begin each day by reciting "Bismillah Ar-Rahman Ar-Rahim" and setting an intention to serve your family or community with mercy. | ابدأ كل يوم بـ«بسم الله الرحمن الرحيم» وانوِ خدمة أسرتك أو مجتمعك برحمة. |
| 3196 | Surah Ali 'Imran 3:190 | سورة آل عمران 3:190 |
| 3197 | Life Path 7 seeks divine wisdom through contemplation. Like Al-Hakim, you're called to study the signs, dive deep into mysteries, and uncover sacred knowledge through spiritual inquiry. | مسار الحياة 7 يطلب الحكمة بالتأمّل. وتخلّقًا باسم الحكيم أنت مدعوّ إلى تدبّر الآيات والغوص في الأسرار وطلب العلم بالبحث الروحي. |
| 3198 | Spend 7 minutes after Fajr in silent contemplation (muraqaba) reflecting on the signs of Allah in creation. | اقضِ سبع دقائق بعد الفجر في مراقبة صامتة تتفكّر في آيات الله في الخلق. |
| 3199 | Surah Ali 'Imran 3:189 | سورة آل عمران 3:189 |
| 3200 | Life Path 8 manifests divine authority and abundance. Like Al-Malik, you're entrusted with power, resources, and leadership to establish justice and prosperity in the material realm. | مسار الحياة 8 يعكس معنى السلطان والوفرة. وتخلّقًا باسم الملك أنت مؤتمن على القوة والموارد والقيادة لإقامة العدل والرخاء في عالم المادة. |
| 3201 | Recite "Ya Malik" 90 times on Fridays to align your material success with divine sovereignty and ethical leadership. | اذكر «يا ملك» 90 مرّة يوم الجمعة لتوافق نجاحك المادي مع الأمانة والقيادة الأخلاقية. |
| 3202 | Surah Al-Baqarah 2:195 | سورة البقرة 2:195 |
| 3203 | Life Path 9 embodies divine generosity and completion. Like Al-Karim, you're called to give selflessly, serve humanity, and complete karmic cycles through compassionate service. | مسار الحياة 9 يعكس معنى الكرم والتمام. وتخلّقًا باسم الكريم أنت مدعوّ إلى العطاء بإيثار وخدمة الناس وإتمام الدورات بخدمة رحيمة. |
| 3204 | Give charity (sadaqah) every day, even if small, and recite "Alhamdulillah" 9 times to embody divine generosity. | تصدّق كل يوم ولو بقليل، وقل «الحمد لله» تسع مرّات تخلّقًا بالكرم. |
| 3205 | Surah An-Nur 24:35 | سورة النور 24:35 |
| 3206 | Master Number 11 channels divine illumination. Like An-Nur, you're a spiritual lighthouse meant to inspire, uplift, and guide others toward enlightenment through your heightened intuition. | العدد الأستاذ 11 يحمل معنى الإنارة. وتخلّقًا باسم النور أنت منارة روحية تُلهم الآخرين وترفعهم وترشدهم بحدسك المرهف. |
| 3207 | Recite Ayat an-Nur (24:35) during Tahajjud prayer to strengthen your connection to divine light and spiritual vision. | اقرأ آية النور (24:35) في صلاة التهجّد لتقوية صلتك بالنور والبصيرة. |
| 3208 | Surah Al-Anbiya 21:30 | سورة الأنبياء 21:30 |
| 3209 | Al-Bani (The Builder, The Architect) | الباني (البنّاء) |
| 3210 | Master Number 22 builds divine vision into material reality. Like Al-Bani, you're the master architect capable of constructing systems, institutions, and legacies that serve humanity for generations. | العدد الأستاذ 22 يحوّل الرؤية إلى واقع ملموس. أنت البنّاء المتقن القادر على إقامة أنظمة ومؤسّسات وآثار تخدم الناس أجيالًا. |
| 3211 | Before major projects, perform 2 rakat Salat al-Istikhara asking Allah to guide your building and manifestation work. | قبل المشاريع الكبيرة صلِّ ركعتي الاستخارة سائلًا الله أن يرشد عملك. |
| 3212 | Surah Al-Baqarah 2:153 | سورة البقرة 2:153 |
| 3213 | Master Number 33 embodies divine compassion and mastery through sacrifice. Like As-Sabur, you're called to serve as a spiritual teacher and healer, patiently uplifting all beings with universal love. | العدد الأستاذ 33 يعكس معنى الرحمة والإتقان بالتضحية. وتخلّقًا باسم الصبور أنت مدعوّ إلى أن تكون معلّمًا ومداويًا روحيًا ترفع الناس بصبر ومحبّة شاملة. |
| 3214 | Practice sabr (patience) consciously in 3 situations daily, and recite "Ya Sabur" 33 times after Isha to embody divine patience in your teaching. | تحلَّ بالصبر عن وعي في ثلاثة مواقف كل يوم، واذكر «يا صبور» 33 مرّة بعد العشاء. |
| 3215 | New Beginnings & Independence | البدايات الجديدة والاستقلال |
| 3216 | Personal goals | الأهداف الشخصية |
| 3217 | Express your vision | عبّر عن رؤيتك |
| 3218 | Adapt and explore | تكيّف واستكشف |
| 3219 | Nurture growth | ارعَ النموّ |
| 3220 | Reflect and refine | تأمّل وهذّب |
| 3221 | Define clear personal goals | حدّد أهدافًا شخصية واضحة |
| 3222 | Collaboration | التعاون |
| 3223 | Connect with others | تواصل مع الآخرين |
| 3224 | Deepen partnerships | عمّق الشراكات |
| 3225 | Communicate harmoniously | تواصل بانسجام |
| 3226 | Build together | ابنوا معًا |
| 3227 | Adapt as a team | تكيّفوا فريقًا |
| 3228 | Serve relationships | اخدم العلاقات |
| 3229 | Understand deeply | افهم بعمق |
| 3230 | Manifest through unity | حقّق بالوحدة |
| 3231 | Complete collaborations | أتمّ أعمال التعاون |
| 3232 | Seek win-win solutions | اطلب حلولًا ينتفع بها الطرفان |
| 3233 | Practice active listening | تدرّب على الإصغاء الفعّال |
| 3234 | Join a partnership or team | انضمّ إلى شراكة أو فريق |
| 3235 | Creativity & Self-Expression | الإبداع والتعبير عن الذات |
| 3236 | Create something new | اصنع شيئًا جديدًا |
| 3237 | Share your ideas | شارك أفكارك |
| 3238 | Express fully | عبّر بكمال |
| 3239 | Explore diverse expressions | استكشف أشكال تعبير متنوّعة |
| 3240 | Create for others | اصنع للآخرين |
| 3241 | Refine your craft | هذّب صنعتك |
| 3242 | Manifest creations | حقّق إبداعاتك |
| 3243 | Complete creative projects | أتمّ المشاريع الإبداعية |
| 3244 | Start a creative project | ابدأ مشروعًا إبداعيًا |
| 3245 | Speak your truth | قل حقيقتك |
| 3246 | Attend social events | احضر المناسبات الاجتماعية |
| 3247 | Lay the groundwork | مهّد الأرض |
| 3248 | Collaborate on systems | تعاون على الأنظمة |
| 3249 | Communicate plans | أعلن خططك |
| 3250 | Build methodically | ابنِ بمنهجية |
| 3251 | Adjust your approach | عدّل نهجك |
| 3252 | Serve through structure | اخدم بالتنظيم |
| 3253 | Complete foundations | أتمّ الأسس |
| 3254 | Create a detailed plan | ضع خطة مفصّلة |
| 3255 | Establish routines and systems | أقم عادات وأنظمة |
| 3256 | Improve health and finances | حسّن الصحّة والمال |
| 3257 | Stay disciplined and focused | ابقَ منضبطًا مركّزًا |
| 3258 | Freedom & Change | الحرية والتغيير |
| 3259 | This year brings unexpected changes, travel, and new experiences. Embrace variety and stay flexible. | تجلب هذه السنة تغيّرات غير متوقّعة وسفرًا وتجارب جديدة. تقبّل التنوّع وابقَ مرنًا. |
| 3260 | Initiate change | ابدأ التغيير |
| 3261 | Navigate transitions together | اجتازوا التحوّلات معًا |
| 3262 | Express your freedom | عبّر عن حريتك |
| 3263 | Create flexible structures | اصنع بنى مرنة |
| 3264 | Embrace full freedom | اغتنم الحرية كاملة |
| 3265 | Release what's complete | دَع ما اكتمل |
| 3266 | Travel or explore | سافر أو استكشف |
| 3267 | Break old patterns | اكسر الأنماط القديمة |
| 3268 | Responsibility & Service | المسؤولية والخدمة |
| 3269 | This year focuses on family, home, and caring for others. Step into responsibilities with love. | تركّز هذه السنة على الأسرة والبيت ورعاية الآخرين. تحمّل المسؤوليات بمحبّة. |
| 3270 | Start caring initiatives | ابدأ مبادرات رعاية |
| 3271 | Harmonize relationships | أصلِح العلاقات |
| 3272 | Express love | عبّر عن المحبّة |
| 3273 | Build a stable home | ابنِ بيتًا مستقرًّا |
| 3274 | Serve fully | اخدم بكمال |
| 3275 | Manifest through caring | حقّق بالرعاية |
| 3276 | Complete family matters | أتمّ شؤون الأسرة |
| 3277 | Strengthen family bonds | قوِّ روابط الأسرة |
| 3278 | Create a nurturing home | اصنع بيتًا راعيًا |
| 3279 | Help those in need | أعِن المحتاجين |
| 3280 | Take on more responsibility | تحمّل مسؤولية أكبر |
| 3281 | Practice unconditional love | تدرّب على المحبّة غير المشروطة |
| 3282 | Reflection & Inner Growth | التأمّل والنموّ الباطن |
| 3283 | This year calls for introspection, study, and spiritual development. Go inward to find answers. | تدعو هذه السنة إلى محاسبة النفس والدراسة والنموّ الروحي. ارجع إلى داخلك لتجد الأجوبة. |
| 3284 | Begin inner journey | ابدأ الرحلة الباطنة |
| 3285 | Seek deeper connections | اطلب صلات أعمق |
| 3286 | Express your insights | عبّر عن بصائرك |
| 3287 | Build spiritual practices | ابنِ ممارسات روحية |
| 3288 | Serve through wisdom | اخدم بالحكمة |
| 3289 | Dive deep within | غُص في داخلك |
| 3290 | Release old beliefs | تخلَّ عن المعتقدات القديمة |
| 3291 | Meditate or pray daily | تأمّل أو ادعُ كل يوم |
| 3292 | Study a spiritual topic | ادرس موضوعًا روحيًا |
| 3293 | Journal your insights | دوّن بصائرك |
| 3294 | Power & Manifestation | القوة والتحقيق |
| 3295 | This year is about achieving goals, building wealth, and stepping into your power. Think big and take action. | هذه السنة سنة تحقيق الأهداف وبناء الثروة والقيام بقوّتك. فكّر بسعة واعمل. |
| 3296 | Initiate big goals | ابدأ أهدافًا كبيرة |
| 3297 | Build powerful alliances | ابنِ تحالفات قوية |
| 3298 | Communicate your vision | أعلن رؤيتك |
| 3299 | Create wealth foundations | أقم أسس الثروة |
| 3300 | Adapt your strategy | عدّل استراتيجيتك |
| 3301 | Plan strategically | خطّط استراتيجيًا |
| 3302 | Manifest abundance | حقّق الوفرة |
| 3303 | Complete major projects | أتمّ المشاريع الكبرى |
| 3304 | Set ambitious financial goals | ضع أهدافًا مالية طموحة |
| 3305 | Step into leadership | تقدّم إلى القيادة |
| 3306 | Completion & Humanitarianism | الإتمام والعمل الإنساني |
| 3307 | Release | التخلّي |
| 3308 | Begin completing cycles | ابدأ إتمام الدورات |
| 3309 | Release relationships gently | أنهِ العلاقات برفق |
| 3310 | Express forgiveness | عبّر عن العفو |
| 3311 | Dismantle old structures | فكّك البنى القديمة |
| 3312 | Let go freely | تخلَّ بحرية |
| 3313 | Understand endings | افهم الخواتيم |
| 3314 | Release attachment | تخلَّ عن التعلّق |
| 3315 | Complete and prepare for new | أتمّ واستعدّ للجديد |
| 3316 | Forgive and let go | اعفُ وتخلَّ |
| 3317 | Donate or declutter | تصدّق أو تخفّف من الأشياء |
| 3318 | Serve a cause greater than yourself | اخدم قضية أكبر منك |
| 3319 | Complete unfinished projects | أتمّ المشاريع غير المنتهية |
| 3320 | In past lives, you may have been lazy, avoided responsibility, or manipulated others to do your work. You took shortcuts and left projects incomplete. | ربما ملت في مراحل سابقة إلى الكسل أو التهرّب من المسؤولية أو جعل غيرك يعمل عنك، فسلكت الطرق المختصرة وتركت المشاريع ناقصة. |
| 3321 | Nothing comes easy. You must work harder than others for the same results. Obstacles test your commitment. Laziness or negativity brings immediate consequences. | لا شيء يأتي بسهولة. قد تحتاج إلى جهد أكبر من غيرك لنتائج مماثلة، والعقبات تختبر التزامك، والكسل أو السلبية يعقبهما أثر سريع. |
| 3322 | Develop unwavering discipline and work ethic | نمِّ انضباطًا راسخًا وأخلاق عمل متينة |
| 3323 | Transform obstacles into stepping stones | حوّل العقبات إلى درجات صعود |
| 3324 | Once mastered, Karmic Debt 13/4 becomes the most resilient builder. Your struggles become your strength. You inspire others by showing that persistence conquers all. | إذا أُتقن، صار الدَّين الكرمي 13/4 أصلب البنّائين. فتصبح معاناتك قوّتك، وتُلهم الآخرين بأن المثابرة تغلب كل شيء. |
| 3325 | Perform Salat al-Tahajjud (night prayer) regularly. The discipline of waking before dawn mirrors your karmic lesson of self-mastery through consistent effort. | داوِم على صلاة التهجّد. فانضباط القيام قبل الفجر يعكس درسك في تهذيب النفس بالجهد الدائم. |
| 3326 | Unshakeable foundation-building. You become the person others turn to when the going gets tough because you've mastered endurance. | بناء أسس لا تتزعزع. تصبح من يلجأ إليه الناس عند الشدّة لأنك أتقنت الصبر. |
| 3339 | In previous incarnations, you abused freedom and indulged excessively in physical pleasures, substances, or reckless behavior. You harmed your body and disrespected sacred boundaries. | ربما ملت في مراحل سابقة إلى إساءة استعمال الحرية والإفراط في الملذّات البدنية أو المواد أو السلوك المتهوّر، فأضررت ببدنك وتجاوزت الحدود. |
| 3340 | You're prone to addiction, restlessness, and self-destructive patterns. Freedom becomes chaos without discipline. Your body is more sensitive to toxins and imbalance. | قد تكون عرضة للإدمان والقلق والأنماط المؤذية للنفس. فالحرية تصير فوضى بلا انضباط، وبدنك أكثر حساسية للسموم واختلال التوازن. |
| 3341 | Respect your body as a sacred trust (amanah) | احترم بدنك فهو أمانة |
| 3342 | Channel restlessness into constructive exploration | وجّه القلق إلى استكشاف بنّاء |
| 3343 | Distinguish true freedom from mere escape | ميّز الحرية الحقّة من مجرّد الهروب |
| 3344 | Mastered 14/5 becomes the adaptable adventurer who finds freedom through discipline. You teach others that true liberation comes from self-control, not indulgence. | إذا أُتقن 14/5 صار المغامر المتكيّف الذي يجد الحرية في الانضباط، ويعلّم غيره أن التحرّر الحقّ من ضبط النفس لا من الإفراط. |
| 3345 | Fast regularly (not just Ramadan) to train your body in discipline. Practice mindful eating and make dua before consuming anything, honoring the body as Allah's trust. | صُم تطوّعًا بانتظام (لا في رمضان وحده) لتعوّد بدنك الانضباط. وكُل بوعي وسمِّ الله قبل الطعام، إكرامًا للبدن أمانة الله. |
| 3346 | Notice when "just one more" becomes a pattern. Any time you justify excess, pause and reconnect with balance. | انتبه حين يصير «واحد آخر فقط» عادة. وكلّما برّرت الإفراط فتوقّف وعُد إلى التوازن. |
| 3347 | Conscious freedom. You show others how to experience life fully without losing themselves, becoming a guide for healthy exploration. | حرية واعية. تُري الآخرين كيف يعيشون الحياة كاملة دون أن يضيّعوا أنفسهم، فتصبح دليلًا للاستكشاف الصحّي. |
| 3348 | In past lives, you may have abused spiritual knowledge, engaged in illicit relationships, or misused intimacy and trust. Pride and ego led to your downfall from a position of power. | ربما ملت في مراحل سابقة إلى إساءة استعمال المعرفة الروحية أو العلاقات المحرّمة أو خيانة الثقة، فأوقعك الكِبر من موقع قوة. |
| 3349 | Sudden, unexpected upheavals shatter your illusions. Just when you feel secure, life humbles you. Relationships may involve betrayal or karmic patterns. Your ego must be broken to rebuild on truth. | قد تهزّ تقلّبات مفاجئة أوهامك؛ فحين تشعر بالأمان تذكّرك الحياة بالتواضع. وقد تتكرّر في العلاقات خيانة أو أنماط مؤلمة. والأنا ينبغي أن تُكسر لتبني على الحقّ. |
| 3350 | Surrender ego and embrace humility | تخلَّ عن الأنا وتحلَّ بالتواضع |
| 3351 | Welcome sudden changes as spiritual purification | استقبل التغيّرات المفاجئة تزكيةً للنفس |
| 3352 | Honor sacred boundaries in relationships | احترم الحدود الشرعية في العلاقات |
| 3353 | Transform pride into divine devotion | حوّل الكِبر إلى عبودية لله |
| 3354 | Mastered 16/7 becomes the enlightened mystic. Your breakdowns become breakthroughs. You gain profound spiritual wisdom through surrender and emerge as a humble spiritual teacher. | إذا أُتقن 16/7 صار صاحب بصيرة روحية، وتصبح انكساراتك فتوحًا، وتنال حكمة عميقة بالتسليم فتصير معلّمًا متواضعًا. |
| 3355 | Perform sujud (prostration) outside of prayer as an act of surrender. Recite "La hawla wa la quwwata illa billah" (There is no power except with Allah) to dissolve ego. | اسجد لله خارج الصلاة تسليمًا، وقل «لا حول ولا قوة إلا بالله» لإذابة الأنا. |
| 3356 | When you feel "too comfortable" or your ego inflates, expect a humbling lesson. Stay grounded in spiritual practice before the tower falls. | حين تشعر بأنك «مرتاح جدًا» أو تنتفخ أناك، فتوقّع درسًا في التواضع، والزم عبادتك قبل أن يهوي البناء. |
| 3357 | Divine humility and spiritual depth. You become unshakeable because you've learned that ego is the only thing that can be destroyed, and your true self is eternal. | تواضع وعمق روحي. تصبح راسخًا لأنك تعلّمت أن الأنا وحدها هي التي تنهدم. |
| 3358 | In previous lives, you abused power and position. You were likely a tyrant, dictator, or selfish leader who manipulated others for personal gain and showed no compassion for those beneath you. | ربما ملت في مراحل سابقة إلى إساءة استعمال السلطة والمكانة، والتسلّط على الناس لمصلحتك دون رحمة بمن هم دونك. |
| 3359 | You resist asking for or accepting help from others. Deep fear of being controlled or dependent. You must learn to lead while also being vulnerable and receiving support. | تقاوم طلب العون أو قبوله، وتخاف بعمق من أن تُقاد أو تعتمد على غيرك. فعليك أن تتعلّم القيادة مع الانكشاف وقبول السند. |
| 3360 | Balance independence with healthy interdependence | وازِن الاستقلال بحاجة صحّية إلى الآخرين |
| 3361 | Lead with compassion, not dominance | قُد بالرحمة لا بالتسلّط |
| 3362 | Give others credit and share power | انسب الفضل لأهله وشارك السلطة |
| 3363 | Serve others while honoring your own needs | اخدم الآخرين مع إكرام حاجاتك |
| 3364 | Practice servant leadership. Volunteer to serve in your community, washing dishes at the mosque or helping elders, to dissolve the ego of superiority. | تدرّب على القيادة بالخدمة. تطوّع في مجتمعك، كغسل الأواني في المسجد أو إعانة الكبار، لإذابة أنا الاستعلاء. |
| 3365 | When you refuse help or feel superior to others, recognize this as your karmic pattern resurfacing. Consciously choose humility and connection. | حين ترفض العون أو تشعر بالتفوّق على غيرك فاعلم أن نمطك القديم يعود، واختر التواضع والتواصل عن وعي. |
| 3366 | Empowered leadership through service. You become a leader who lifts others up, understanding that true power comes from empowering, not dominating. | قيادة قوية بالخدمة. تصبح قائدًا يرفع الآخرين، مدركًا أن القوة الحقّة في التمكين لا في التسلّط. |
| 3367 | Both driven and ambitious | كلاكما طموح مندفع |
| 3368 | Both want to lead | كلاكما يريد القيادة |
| 3369 | Ego clashes | صدام الأنا |
| 3370 | Take turns leading. Collaborate on shared projects where each has their domain of authority. | تناوبا القيادة، وتعاونا في مشاريع مشتركة لكلٍّ منكما فيها مجال صلاحيته. |
| 3371 | 1 leads, 2 supports gracefully | 1 يقود، و2 يساند بلطف |
| 3372 | Complementary strengths | قوى متكاملة |
| 3373 | 2 softens 1's edges | 2 يليّن حدّة 1 |
| 3374 | 1 may dominate | قد يطغى 1 |
| 3375 | 2 may feel overshadowed | قد يشعر 2 بأنه مغمور |
| 3376 | 1 can be insensitive to 2's needs | قد يغفل 1 عن حاجات 2 |
| 3377 | 1: Value 2's input and emotional intelligence. 2: Speak up for your needs clearly. | 1: قدّر رأي 2 وذكاءه العاطفي. 2: عبّر عن حاجاتك بوضوح. |
| 3378 | Dynamic duo! 1's drive meets 3's creativity for exciting partnerships. | ثنائي حيوي! اندفاع 1 يلتقي بإبداع 3 لشراكات مثيرة. |
| 3379 | 3 can be scattered | قد يتشتّت 3 |
| 3380 | Different work styles | أساليب عمل مختلفة |
| 3381 | 1: Let 3 bring playfulness to your goals. 3: Match 1's focus when it matters. | 1: دع 3 يضفي المرح على أهدافك. 3: جارِ تركيز 1 حين يلزم. |
| 3382 | Adventure partners! Both love freedom and new experiences. | رفيقا مغامرة! كلاكما يحبّ الحرية والتجارب الجديدة. |
| 3383 | Exciting and dynamic | مثير وحيوي |
| 3384 | Both avoid routine | كلاكما يتجنّب الروتين |
| 3385 | May grow apart | قد يتباعدان |
| 3386 | Create shared adventures while maintaining individual pursuits. Schedule quality time. | اصنعا مغامرات مشتركة مع الحفاظ على مساعيكما الفردية، وخصّصا وقتًا طيبًا معًا. |
| 3387 | Beginning meets ending. 1's self-focus clashes with 9's universal love. | البداية تلتقي بالنهاية. تركيز 1 على ذاته يصطدم بمحبّة 9 الشاملة. |
| 3388 | 9's wisdom guides 1's ambition | حكمة 9 ترشد طموح 1 |
| 3389 | Both are leaders | كلاكما قائد |
| 3390 | 1 is self-focused, 9 is universal | 1 متمركز حول ذاته، و9 شامل |
| 3391 | Different priorities | أولويات مختلفة |
| 3392 | 9 may find 1 selfish | قد يرى 9 أن 1 أناني |
| 3393 | Gentle, supportive partnership built on emotional understanding. | شراكة لطيفة داعمة مبنية على التفاهم العاطفي. |
| 3394 | Lack of direction | غياب الوجهة |
| 3395 | May be too passive | قد يكونان سلبيّين جدًا |
| 3396 | Take turns being the initiator. Practice healthy conflict resolution together. | تناوبا المبادرة، وتدرّبا معًا على حلّ الخلاف حلًّا صحّيًا. |
| 3397 | Divine balance of material and emotional. Power couple potential! | توازن بين المادي والعاطفي. إمكانات ثنائي قوي! |
| 3398 | 2 supports 8's ambitions | 2 يساند طموحات 8 |
| 3399 | 8 provides security for 2 | 8 يوفّر الأمان لـ 2 |
| 3400 | Yin-yang perfection | تكامل الضدّين |
| 3401 | 8 can be domineering | قد يتسلّط 8 |
| 3402 | 2 may feel controlled | قد يشعر 2 بأنه مقيَّد |
| 3403 | Creative explosion! Life is a joyful party with these two. | انفجار إبداعي! الحياة مع هذين احتفال بهيج. |
| 3404 | Endless fun and laughter | مرح وضحك بلا نهاية |
| 3405 | Shared creative vision | رؤية إبداعية مشتركة |
| 3406 | Financial irresponsibility | عدم المسؤولية المالية |
| 3407 | Too scattered | تشتّت مفرط |
| 3408 | Hire a 4 or 8 to handle practical matters. Schedule 'responsibility time' together. | استعينا بـ 4 أو 8 للشؤون العملية، وخصّصا «وقت مسؤولية» معًا. |
| 3409 | Solid, stable, predictable. Security-focused partnership. | متين، مستقرّ، متوقَّع. شراكة تركّز على الأمان. |
| 3410 | Ultimate stability | ثبات تامّ |
| 3411 | Shared values | قيم مشتركة |
| 3412 | Too much routine | روتين مفرط |
| 3413 | Lack of spontaneity | قلّة العفوية |
| 3414 | Schedule fun and adventure. Push each other out of comfort zones occasionally. | خصّصا وقتًا للمرح والمغامرة، وادفعا بعضكما خارج منطقة الراحة أحيانًا. |
| 3415 | Wild adventure! Exciting but potentially unstable. | مغامرة جامحة! مثيرة لكنها قد تكون غير مستقرّة. |
| 3416 | Never boring | لا ملل أبدًا |
| 3417 | Freedom to explore | حرية الاستكشاف |
| 3418 | Adventurous spirit | روح مغامرة |
| 3419 | Create grounding rituals. Have one stable anchor (home, routine) while exploring freely. | اصنعا عادات تجذّر، واجعلا لكما مرسى ثابتًا (بيتًا أو روتينًا) وأنتما تستكشفان بحرية. |
| 3420 | Nurturing paradise. Home and family are the center of everything. | جنّة الرعاية. البيت والأسرة محور كل شيء. |
| 3421 | Beautiful home life | حياة بيتية جميلة |
| 3422 | Shared values of service | قيم مشتركة في الخدمة |
| 3423 | Emotionally supportive | سند عاطفي |
| 3424 | Martyrdom tendency | ميل إلى التضحية المفرطة |
| 3425 | Neglect personal growth | إهمال النموّ الشخصي |
| 3426 | Codependency risk | خطر الاعتماد المتبادل المفرط |
| 3427 | Deep spiritual connection but may lack warmth. Intellectual soulmates. | صلة روحية عميقة قد ينقصها الدفء. رفيقا روح فكريّان. |
| 3428 | Profound understanding | فهم عميق |
| 3429 | Respect for solitude | احترام الخلوة |
| 3430 | Emotional distance | بعد عاطفي |
| 3431 | Too much alone time | خلوة مفرطة |
| 3432 | Isolation from world | عزلة عن العالم |
| 3433 | Schedule quality connection time. Balance spiritual pursuits with emotional intimacy. | خصّصا وقتًا للتواصل الطيّب، ووازنا المساعي الروحية بالقرب العاطفي. |
| 3434 | Power couple or power struggle. Both want control and success. | ثنائي قوي أو صراع على القوة. كلاكما يريد السيطرة والنجاح. |
| 3435 | Shared ambition | طموح مشترك |
| 3436 | Workaholism | إدمان العمل |
| 3437 | Neglect emotional/spiritual | إهمال الجانب العاطفي والروحي |
| 3438 | Collaborate, don't compete. Remember success means nothing without love and spirituality. | تعاونا ولا تتنافسا. وتذكّرا أن النجاح لا معنى له بلا محبّة وروحانية. |
| 3439 | Shared humanitarian vision | رؤية إنسانية مشتركة |
| 3440 | Spiritual unity | وحدة روحية |
| 3441 | Giving until empty | العطاء حتى النفاد |
| 3442 | Neglecting practical needs | إهمال الحاجات العملية |
| 3443 | Set boundaries. Serve the world but also honor your personal needs and rest. | ضعا حدودًا. اخدما العالم وأكرِما أيضًا حاجاتكما وراحتكما. |
| 3444 | Divine spiritual connection. Twin flames with shared mission. | صلة روحية عميقة. روحان برسالة مشتركة. |
| 3445 | Spiritual telepathy | تفاهم روحي بلا كلام |
| 3446 | Inspire each other | يُلهم كلٌّ منكما الآخر |
| 3447 | Shared higher purpose | غاية عليا مشتركة |
| 3448 | Intensity overload | فرط الشدّة |
| 3449 | Anxiety amplified | قلق مضاعف |
| 3450 | Grounding needed | يلزم التجذّر |
| 3451 | Ground together daily. Balance spiritual highs with earthly practices. | تجذّرا معًا كل يوم، ووازنا لحظات السموّ الروحي بممارسات أرضية. |
| 3452 | Master builders creating legacy together. Practical visionaries. | بنّاءان متقنان يصنعان إرثًا معًا. صاحبا رؤية عمليّان. |
| 3453 | Shared grand vision | رؤية كبيرة مشتركة |
| 3454 | Practical manifestation | تحقيق عملي |
| 3455 | Ultimate spiritual teachers and healers. Heavy karmic responsibility. | معلّمان ومداويان روحيّان. مسؤولية ثقيلة. |
| 3456 | Unconditional love | محبّة غير مشروطة |
| 3457 | Transformative healing | شفاء تحويلي |
| 3458 | Overwhelming responsibility | مسؤولية مرهقة |
| 3459 | Self-sacrifice to detriment | تضحية بالنفس إلى حدّ الضرر |
| 3460 | Requires compromise | يتطلّب تنازلًا |
| 3461 | Cycle Timeline | الخطّ الزمني للدورات |
| 3462 | Invalid buruj remainder: | باقي البروج غير صالح: |
| 3463 | Buruj profile not found for remainder | لم يُعثر على ملفّ البرج لهذا الباقي |
| 3464 | Mother name is required | اسم الأم مطلوب |
| 3465 | Invalid date of birth | تاريخ ميلاد غير صالح |
| 3466 | Optimism | التفاؤل |
| 3467 | Practicality | الواقعية |
| 3468 | Determination | العزيمة |
| 3469 | Trustworthiness | الأمانة |
| 3470 | Resourcefulness | سعة الحيلة |
| 3471 | Spiritual depth | العمق الروحي |
| 3472 | Mysticism | التصوّف |
| 3473 | Ambition | الطموح |
| 3474 | Material success | النجاح المادي |
| 3475 | Karma | الجزاء (الكارما) |
| 3476 | Service to others | خدمة الآخرين |
| 3477 | Face the qibla | استقبل القبلة |
| 3478 | End with duʿāʾ | اختم بالدعاء |
| 3479 | The Most Compassionate | الرحيم |
| 3480 | The King, The Sovereign | الملك |
| 3481 | The Most Holy, The Pure | القدّوس |
| 3482 | The Giver of Faith and Security | المؤمن |
| 3483 | The Guardian, The Protector | المهيمن |
| 3484 | The Almighty, The Mighty | العزيز |
| 3485 | The Compeller, The Irresistible | الجبّار |
| 3486 | The Supreme in Greatness | المتكبّر |
| 3487 | The Evolver, The Maker | البارئ |
| 3488 | The Fashioner, The Shaper | المصوّر |
| 3489 | The Ever-Forgiving | الغفّار |
| 3490 | The Subduer, The Dominant | القهّار |
| 3491 | The Opener, The Judge | الفتّاح |
| 3492 | The Constrictor, The Withholder | القابض |
| 3493 | The Expander, The Reliever | الباسط |
| 3494 | The Abaser, The Humbler | الخافض |
| 3495 | The Utterly Just | العدل |
| 3496 | The Subtle, The Gentle | اللطيف |
| 3497 | The Forbearing, The Clement | الحليم |
| 3498 | The Magnificent, The Supreme | العظيم |
| 3499 | The All-Forgiving | الغفور |
| 3500 | The Most Appreciative | الشكور |
| 3501 | The Greatest, The Most Great | الكبير |
| 3502 | The Preserver, The Guardian | الحفيظ |
| 3503 | The Sustainer, The Nourisher | المقيت |
| 3504 | The Most Generous | الكريم |
| 3505 | The Responsive, The Answerer | المجيب |
| 3506 | The All-Encompassing, The Vast | الواسع |
| 3507 | The Glorious, The Magnificent | المجيد |
| 3508 | The Trustee, The Advocate | الوكيل |
| 3509 | The Firm, The Steadfast | المتين |
| 3510 | The All-Praiseworthy | الحميد |
| 3511 | The Accounter, The Reckoner | المحصي |
| 3512 | The Bringer of Death | المميت |
| 3513 | Ar Rahmaan | الرحمن |
| 3514 | Ar Raheem | الرحيم |
| 3515 | Al Malik | الملك |
| 3516 | Al Quddus | القدوس |
| 3517 | As Salaam | السلام |
| 3518 | Al Mu'min | المؤمن |
| 3519 | Al Muhaymin | المهيمن |
| 3520 | Al Azeez | العزيز |
| 3521 | Al Jabbaar | الجبار |
| 3522 | Al Mutakabbir | المتكبر |
| 3523 | Al Khaaliq | الخالق |
| 3524 | Al Baari | البارئ |
| 3525 | Al Musawwir | المصور |
| 3526 | Al Ghaffaar | الغفار |
| 3527 | Al Qahhaar | القهار |
| 3528 | Al Wahhaab | الوهاب |
| 3529 | Ar Razzaaq | الرزاق |
| 3530 | Al Fattaah | الفتاح |
| 3531 | Al 'Aleem | العليم |
| 3532 | Al Qaabid | القابض |
| 3533 | Al Baasit | الباسط |
| 3534 | Al Khaafid | الخافض |
| 3535 | Ar Raafi' | الرافع |
| 3536 | Al Mudhil | المذل |
| 3537 | As Samee' | السميع |
| 3538 | Al Baseer | البصير |
| 3539 | Al Hakam | الحكم |
| 3540 | Al 'Adl | العدل |
| 3541 | Al Lateef | اللطيف |
| 3542 | Al Khabeer | الخبير |
| 3543 | Al Haleem | الحليم |
| 3544 | Al 'Azeem | العظيم |
| 3545 | Al Ghafoor | الغفور |
| 3546 | Ash Shakoor | الشكور |
| 3547 | Al 'Aliyy | العلي |
| 3548 | Al Kabeer | الكبير |
| 3549 | Al Hafeez | الحفيظ |
| 3550 | Al Muqeet | المقيت |
| 3551 | Al Haseeb | الحسيب |
| 3552 | Al Jaleel | الجليل |
| 3553 | Al Kareem | الكريم |
| 3554 | Ar Raqeeb | الرقيب |
| 3555 | Al Mujeeb | المجيب |
| 3556 | Al Waasi' | الواسع |
| 3557 | Al Hakeem | الحكيم |
| 3558 | Al Wudood | الودود |
| 3559 | Al Majeed | المجيد |
| 3560 | Al Baa'ith | الباعث |
| 3561 | Ash Shaheed | الشهيد |
| 3562 | Al Haqq | الحق |
| 3563 | Al Wakeel | الوكيل |
| 3564 | Al Qawiyy | القوي |
| 3565 | Al Mateen | المتين |
| 3566 | Al Waliyy | الولي |
| 3567 | Al Hameed | الحميد |
| 3568 | Al Muhsi | المحصي |
| 3569 | Al Mubdi | المبدئ |
| 3570 | Al Mu'eed | المعيد |
| 3571 | Al Muhiy | المحيي |
| 3572 | Al Mumeet | المميت |
| 3573 | Al Haiyy | الحي |
| 3574 | Al Qayyoom | القيوم |
| 3575 | Al Waajid | الواجد |
| 3576 | Al Maajid | الماجد |
| 3577 | Al Waahid | الواحد |
| 3578 | Al Ahad | الأحد |
| 3579 | As Samad | الصمد |
| 3580 | Al Qaadir | القادر |
| 3581 | Al Muqtadir | المقتدر |
| 3582 | Al Muqaddim | المقدم |
| 3583 | Al Mu’akhir | المؤخر |
| 3584 | Al Awwal | الأول |
| 3585 | Al Aakhir | الآخر |
| 3586 | Az Zaahir | الظاهر |
| 3587 | Al Baatin | الباطن |
| 3588 | Al Waali | الوالي |
| 3589 | Al Muta’ali | المتعالي |
| 3590 | Al Barr | البر |
| 3591 | At Tawwaab | التواب |
| 3592 | Al Muntaqim | المنتقم |
| 3593 | Al Afuww | العفو |
| 3594 | Ar Ra’oof | الرؤوف |
| 3595 | Maalik Ul Mulk | مالك الملك |
| 3596 | Dhu Al Jalaali Wa Al Ikraam | ذو الجلال والإكرام |
| 3597 | Al Muqsit | المقسط |
| 3598 | Al Jaami' | الجامع |
| 3599 | Al Ghaniyy | الغني |
| 3600 | Al Mughi | المغني |
| 3601 | Al Maani' | المانع |
| 3602 | Ad Daaarr | الضار |
| 3603 | An Naafi’ | النافع |
| 3604 | Al Haadi | الهادي |
| 3605 | Al Badi' | البديع |
| 3606 | Al Baaqi | الباقي |
| 3607 | Al Waarith | الوارث |
| 3608 | Ar Rasheed | الرشيد |
| 3609 | As Saboor | الصبور |
| 3610 | The Self-Subsisting Sustainer | القيّوم |
| 3611 | The Perceiver, The Finder | الواجد |
| 3612 | The All-Noble, The Glorious | الماجد |
| 3613 | The Self-Sufficient Master | الصمد |
| 3614 | The All-Powerful | القادر |
| 3615 | The Powerful, The Dominant | المقتدر |
| 3616 | The Expediter, The Promoter | المقدّم |
| 3617 | The Manifest, The Evident | الظاهر |
| 3618 | The Hidden, The Inward | الباطن |
| 3619 | The Most Exalted | المتعالي |
| 3620 | The Ever-Relenting | التوّاب |
| 3621 | The Most Kind | الرؤوف |
| 3622 | The Lord of Majesty and Generosity | ذو الجلال والإكرام |
| 3623 | The Self-Sufficient, The Rich | الغني |
| 3624 | The Preventer | المانع |
| 3625 | The Distresser (by His decree) | الضارّ |
| 3626 | The Propitious, The Benefactor | النافع |
| 3627 | The Inheritor of All | الوارث |
| 3628 | The Most Patient | الصبور |
| 3629 | Allah | الله |
| 3630 | The God, The One True God | الله |
| 3631 | The Everlasting, The Eternal | الباقي |
| 3632 | The Gatherer, The Uniter | الجامع |
| 3633 | The Eternal, The Everlasting | الباقي |
| 3634 | The Guide, The One Who Guides | الهادي |
| 3635 | The Loving, The Most Affectionate | الودود |
| 3636 | The Pure, The Immaculate | القدّوس |
| 3637 | The Wise, The All-Wise | الحكيم |
| 3638 | The Purifier, The Pure One | القدّوس |
| 3639 | The Certain, The Certainty | الحقّ |
| 3640 | The Generous, The Most Bountiful | الكريم |
| 3641 | The Subtle, The Most Kind | اللطيف |
| 3642 | The Believer, The Giver of Faith | المؤمن |
| 3643 | The Light, The Illuminator | النور |
| 3644 | The Peace, The Source of Peace | السلام |
| 3645 | The All-Knowing, The Omniscient | العليم |
| 3646 | The Patient, The Most Forbearing | الصبور |
| 3647 | The Able, The All-Powerful | القادر |
| 3648 | The Most Merciful, The Beneficent | الرحمن |
| 3649 | The Grateful, The Appreciative | الشكور |
| 3650 | The Acceptor of Repentance | التوّاب |
| 3651 | The Aware, The All-Informed | الخبير |
| 3652 | The Lord of Majesty and Bounty | ذو الجلال والإكرام |
| 3653 | The Distresser, The Corrector | الضارّ |
| 3654 | Yunus | يونس |
| 3655 | Hud | هود |
| 3656 | Taha | طه |
| 3657 | Luqman | لقمان |
| 3658 | Saba | سبأ |
| 3659 | Fatir | فاطر |
| 3660 | Sad | ص |
| 3661 | Ghafir | غافر |
| 3662 | Fussilat | فصّلت |
| 3663 | Qaf | ق |
| 3664 | Nuh | نوح |
| 3665 | Abasa | عبس |
| 3666 | Quraish | قريش |
| 3667 | Numerical miracle of the Qurʾan | الإعجاز العددي في القرآن |
| 3668 | Surahs in the Qurʾan | سور القرآن |
| 3669 | Resonates with a divine pattern | يتناغم مع نمط إلهي |
| 3670 | For Sunday, the recommended sadaqah is: | صدقة يوم الأحد المستحبّة: |
| 3671 | Gather children and give them food as sadaqah. | اجمع الأطفال وأطعمهم صدقةً. |
| 3672 | Help anyone who is poor or in need. | أعِن كل فقير أو محتاج. |
| 3673 | For Monday, the recommended sadaqah is: | صدقة يوم الاثنين المستحبّة: |
| 3674 | Give water as sadaqah. | تصدّق بالماء. |
| 3675 | Help an elderly person, a woman, or children. | أعِن مسنًّا أو امرأة أو أطفالًا. |
| 3676 | Give food or sadaqah to children in the evening. | أعطِ الأطفال طعامًا أو صدقة في المساء. |
| 3677 | Tuesday is recommended for sadaqah intended for healing and protection. Recommended forms of sadaqah include: | يُستحبّ يوم الثلاثاء للصدقة بنيّة الشفاء والحفظ. ومن صورها: |
| 3678 | Giving food to children. | إطعام الأطفال. |
| 3679 | Helping a person who is experiencing difficulties. | إعانة من يمرّ بضيق. |
| 3680 | Helping someone purchase their medication. | إعانة أحد على شراء دوائه. |
| 3681 | Contributing toward someone's medical or medication expenses. | المساهمة في نفقات علاج أحد أو دوائه. |
| 3682 | In Wolof, Rab refers to a type of illness or affliction associated with satanic or devil-related causes. | في لغة الولوف، «راب» نوع من المرض أو البلاء يُنسب إلى أسباب شيطانية. |
| 3683 | For Wednesday, the recommended sadaqah is: | صدقة يوم الأربعاء المستحبّة: |
| 3684 | Give white paper and pens. | تصدّق بورق أبيض وأقلام. |
| 3685 | Provide food to children. | أطعم الأطفال. |
| 3686 | Thursday is considered favourable for sadaqah intended for opening the way to wealth, success, or removing blockages. Recommended acts include: | يُعدّ يوم الخميس مناسبًا للصدقة بنيّة فتح أبواب الرزق والتوفيق أو رفع العوائق. ومن الأعمال المستحبّة: |
| 3687 | Giving money as sadaqah. | التصدّق بالمال. |
| 3688 | Supporting a mosque. | دعم مسجد. |
| 3689 | Helping to clean a mosque. | المساعدة في تنظيف مسجد. |
| 3690 | Performing voluntary service in the mosque. | التطوّع بالخدمة في المسجد. |
| 3691 | Friday is associated with Venus and is considered a favourable day for giving sadaqah. Recommended acts include giving: | يرتبط يوم الجمعة بالزهرة ويُعدّ مناسبًا للصدقة. ومن الأعمال المستحبّة التصدّق بـ: |
| 3692 | It is also recommended to make ziyāra (visiting) to a scholar or a Borom Ham-Ham. | ويُستحبّ أيضًا زيارة عالم أو «بوروم هام هام». |
| 3693 | Saturday is recommended for helping poor and needy people. Recommended sadaqah includes: | يُستحبّ يوم السبت لإعانة الفقراء والمحتاجين. ومن الصدقة المستحبّة: |
| 3694 | Giving essential food items such as rice, oil, and other necessities. | التصدّق بالمواد الغذائية الأساسية كالأرز والزيت وغيرها. |
| 3695 | Providing financial assistance to someone in difficulty. | تقديم عون مالي لمن هو في ضيق. |
| 3696 | This day is also considered particularly beneficial for removing blockages, especially for people associated with Capricorn. | ويُعدّ هذا اليوم نافعًا خاصّة لرفع العوائق، لا سيما لأهل برج الجدي. |
| 3697 | This sadaqah is given sincerely for the sake of Allah, seeking blessings, protection, mercy, and goodness throughout the year. | تُعطى هذه الصدقة خالصة لوجه الله، طلبًا للبركة والحفظ والرحمة والخير طوال السنة. |
| 3698 | This sadaqah is intended to seek Allah's help, blessings, success, stability, and ease in one's affairs and endeavors. | يُقصد بهذه الصدقة طلب عون الله وبركته وتوفيقه وتيسير الأمور والمساعي. |
| 3699 | Because this month is considered a bit heavy or difficult, these forms of sadaqah are considered beneficial for the person born in this month. | لأن هذا الشهر يُعدّ ثقيلًا أو صعبًا بعض الشيء، تُعدّ هذه الصور من الصدقة نافعة لمن وُلد فيه. |
| 3700 | This sadaqah can help the person have more strength, encouragement, patience, and stability as they continue working through difficult circumstances. | قد تعين هذه الصدقة صاحبها على مزيد من القوة والتشجيع والصبر والثبات وهو يجتاز الظروف الصعبة. |
| 3701 | This sadaqah is intended to bring goodness, blessings, protection, success, and stability to the person born in Ramadan. | يُقصد بهذه الصدقة جلب الخير والبركة والحفظ والتوفيق والثبات لمن وُلد في رمضان. |
| 3702 | The help given to the traveller and the food given to the needy are two separate forms of sadaqah. | إعانة المسافر وإطعام المحتاج صورتان مستقلّتان من الصدقة. |
| 3703 | Outlook | الآفاق |
| 3704 | Friendship Outlook | آفاق الصداقة |
| 3705 | Family Outlook | آفاق الأسرة |
| 3706 | Work Outlook | آفاق العمل |
| 3707 | This pattern traditionally shows an easy, comfortable beginning that can settle into stagnation if never renewed. | يدلّ هذا النمط تقليديًا على بداية سهلة مريحة قد تستقرّ في الركود إن لم تتجدّد. |
| 3708 | This pattern traditionally shows an easy beginning that may later feel stagnant, especially in growth and shared provision. | يدلّ هذا النمط تقليديًا على بداية سهلة قد تصير راكدة لاحقًا، لا سيما في النموّ والرزق المشترك. |
| 3709 | This pattern traditionally shows a friendship that starts with natural ease but can quietly stagnate without renewal. | يدلّ هذا النمط تقليديًا على صداقة تبدأ بيسر طبيعي لكنها قد تركد بهدوء بلا تجديد. |
| 3710 | This pattern traditionally shows family closeness that begins easily but can fade into distance without active care. | يدلّ هذا النمط تقليديًا على قرب عائلي يبدأ بسهولة لكنه قد يذبل إلى بُعد بلا رعاية فاعلة. |
| 3711 | This connection often starts with ease and comfort, but can settle into routine if never renewed. Shared purpose and intentional effort keep it alive. | تبدأ هذه الصلة غالبًا بيسر وراحة، لكنها قد تستقرّ في الروتين إن لم تتجدّد. والغاية المشتركة والجهد المقصود يُبقيانها حيّة. |
| 3712 | Friendships under this pattern begin naturally and comfortably, but may drift into routine without shared activities or new experiences. Regular effort keeps the connection warm. | تبدأ الصداقات في هذا النمط طبيعية مريحة، لكنها قد تنجرف إلى الروتين بلا أنشطة مشتركة أو تجارب جديدة. والجهد المنتظم يُبقي الصلة دافئة. |
| 3713 | Family ties here tend to feel steady and dependable, though closeness can fade into distance if never actively nurtured. Checking in regularly keeps the bond warm. | تميل الروابط العائلية هنا إلى الثبات والاعتمادية، لكن القرب قد يذبل إلى بُعد إن لم يُرعَ. والسؤال المنتظم يُبقي الرابطة دافئة. |
| 3714 | Working relationships start smoothly and productively, but can grow stale without new goals or challenges. Revisit shared objectives regularly to avoid complacency. | تبدأ علاقات العمل بسلاسة وإنتاجية، لكنها قد تفتر بلا أهداف أو تحدّيات جديدة. راجعوا الأهداف المشتركة بانتظام لتجنّب التراخي. |
| 3715 | Camaraderie | الرفقة |
| 3716 | Traditionally considered favorable for marriage. This pattern supports natural cooperation, companionship, and mutual understanding. | يُعدّ تقليديًا مواتيًا للزواج. ويدعم هذا النمط التعاون الطبيعي والمؤانسة والتفاهم المتبادل. |
| 3717 | Traditionally considered a favorable pattern for friendship — ease, cooperation, and mutual understanding come naturally. | يُعدّ تقليديًا نمطًا مواتيًا للصداقة — اليسر والتعاون والتفاهم تأتي طبيعيًا. |
| 3718 | Traditionally considered a favorable pattern for collaboration — natural cooperation and mutual understanding support the partnership. | يُعدّ تقليديًا نمطًا مواتيًا للتعاون — فالتعاون الطبيعي والتفاهم يدعمان الشراكة. |
| 3719 | This bond naturally supports cooperation and ease. Two people connected this way tend to understand each other quickly, though one may lean too heavily on the other. | تدعم هذه الرابطة التعاون واليسر بطبعها. ويميل المتّصلان بها إلى التفاهم سريعًا، وإن كان أحدهما قد يعتمد على الآخر أكثر من اللازم. |
| 3720 | A naturally easy, low-friction friendship — you tend to understand each other quickly and rarely clash. Watch that neither friend becomes overly reliant on the other. | صداقة سهلة قليلة الاحتكاك — تتفاهمان سريعًا ونادرًا ما تتصادمان. انتبها ألّا يعتمد أحدكما على الآخر اعتمادًا مفرطًا. |
| 3721 | Family members connected this way tend to get along with little friction and genuine mutual understanding. Encourage each other's independence alongside the closeness. | يميل أفراد الأسرة المتّصلون هكذا إلى التوافق بقليل من الاحتكاك وتفاهم صادق. شجّعوا استقلال بعضكم إلى جانب القرب. |
| 3722 | A cooperative, low-conflict working relationship where tasks divide naturally. Guard against one person carrying too much of the shared workload. | علاقة عمل متعاونة قليلة الخلاف تتوزّع فيها المهامّ طبيعيًا. احذروا أن يحمل شخص واحد معظم العبء المشترك. |
| 3723 | Traditionally associated with difficulty in marriage. Tension, frequent disagreements, and financial pressure may arise. | يرتبط تقليديًا بالصعوبة في الزواج. قد ينشأ توتّر وخلافات متكرّرة وضغط مالي. |
| 3724 | Traditionally associated with difficulty — frequent small frictions and mismatched expectations may test the friendship. | يرتبط تقليديًا بالصعوبة — احتكاكات صغيرة متكرّرة وتوقّعات غير متوافقة قد تختبر الصداقة. |
| 3725 | Traditionally associated with difficulty — recurring tension, sometimes over responsibilities, may strain the family bond. | يرتبط تقليديًا بالصعوبة — توتّر متكرّر، أحيانًا حول المسؤوليات، قد يُثقل الرابطة العائلية. |
| 3726 | Traditionally associated with difficulty — friction over resources, deadlines, or decisions may strain the partnership. | يرتبط تقليديًا بالصعوبة — احتكاك حول الموارد أو المواعيد أو القرارات قد يُثقل الشراكة. |
| 3727 | This connection often carries tension and frequent friction. Patience and structure are needed to keep disagreements from escalating. | تحمل هذه الصلة غالبًا توتّرًا واحتكاكًا متكرّرًا. ويلزم الصبر والتنظيم لمنع الخلافات من التصاعد. |
| 3728 | Friendships under this pattern can feel effortful — frequent small disagreements and mismatched expectations are common. The bond can hold, but needs conscious care. | قد تبدو الصداقات في هذا النمط متعبة — فالخلافات الصغيرة المتكرّرة والتوقّعات غير المتوافقة شائعة. يمكن للرابطة أن تصمد، لكنها تحتاج إلى عناية واعية. |
| 3729 | Family ties here often carry recurring tension, sometimes over money or responsibilities. Structure, patience, and outside support help ease the strain. | تحمل الروابط العائلية هنا غالبًا توتّرًا متكرّرًا، أحيانًا حول المال أو المسؤوليات. والتنظيم والصبر والعون الخارجي تخفّف العبء. |
| 3730 | Traditionally seen as a heavy pattern — one friend's stress or unresolved struggles may surface within the bond. | يُرى تقليديًا نمطًا ثقيلًا — قد يظهر ضغط أحد الصديقين أو صراعاته العالقة داخل الرابطة. |
| 3731 | Traditionally seen as a heavy pattern — caretaking or shared hardship, often tied to health, may mark the family bond. | يُرى تقليديًا نمطًا ثقيلًا — قد تطبع الرعايةُ أو المشقّة المشتركة، المرتبطة غالبًا بالصحّة، الرابطةَ العائلية. |
| 3732 | Friendships here can feel heavy at times, often surfacing one person's stress or unresolved struggles. Steady, patient support matters more than constant closeness. | قد تبدو الصداقات هنا ثقيلة أحيانًا، وتُظهر غالبًا ضغط أحدكما أو صراعاته العالقة. والسند الثابت الصبور أهمّ من القرب الدائم. |
| 3733 | Family bonds under this pattern often involve caretaking or shared hardship — health concerns are common threads. Calm routines and honest communication ease the load. | تتضمّن الروابط العائلية في هذا النمط غالبًا رعاية أو مشقّة مشتركة — والهموم الصحّية خيط متكرّر. والعادات الهادئة والتواصل الصادق تخفّف الحمل. |
| 3734 | Working relationships here can feel draining, with stress or burnout as recurring risks. Clear boundaries and realistic workloads protect the partnership. | قد تبدو علاقات العمل هنا مستنزِفة، والضغط أو الإنهاك خطر متكرّر. والحدود الواضحة وأعباء العمل الواقعية تحمي الشراكة. |
| 3735 | Traditionally considered very favorable — blessing, natural harmony, and growth tend to flow more easily. | يُعدّ تقليديًا مواتيًا جدًا — تنساب البركة والانسجام الطبيعي والنموّ بيسر أكبر. |
| 3736 | Traditionally considered very favorable for marriage. Associated with blessing, natural harmony, children, and spiritual growth. | يُعدّ تقليديًا مواتيًا جدًا للزواج. ويرتبط بالبركة والانسجام الطبيعي والذرّية والنموّ الروحي. |
| 3737 | Traditionally considered very favorable — warmth, harmony, and shared growth tend to mark this family bond. | يُعدّ تقليديًا مواتيًا جدًا — يطبع الدفءُ والانسجام والنموّ المشترك هذه الرابطة العائلية. |
| 3738 | This connection is traditionally favorable — harmony, growth, and ease tend to flow naturally between the two. Gratitude keeps the blessing from being taken for granted. | هذه الصلة مواتية تقليديًا — الانسجام والنموّ واليسر تنساب طبيعيًا بين الاثنين. والشكر يحفظ النعمة من أن تُعدّ أمرًا مسلّمًا. |
| 3739 | A genuinely blessed friendship — trust, ease, and mutual growth come naturally. Keep showing up for each other so the bond doesn't drift into complacency. | صداقة مباركة حقًّا — الثقة واليسر والنموّ المتبادل تأتي طبيعيًا. واصلا الحضور لبعضكما كي لا تنجرف الرابطة إلى التراخي. |
| 3740 | Family ties here tend to be a source of real blessing — warmth, support, and shared growth. Nurture the bond actively rather than assuming it as given. | تميل الروابط العائلية هنا إلى أن تكون مصدر بركة حقيقية — دفء وسند ونموّ مشترك. ارعوا الرابطة بفاعلية ولا تعدّوها مضمونة. |
| 3741 | A productive, mutually beneficial working relationship where success tends to come naturally. Stay grounded and avoid overconfidence as things go well. | علاقة عمل منتجة نافعة للطرفين يأتي فيها النجاح طبيعيًا. ابقوا متواضعين وتجنّبوا الإفراط في الثقة حين تسير الأمور جيدًا. |
| 3742 | Traditionally shows recurring quarrels and discord — tests of anger, pride, and ego are common until inner work is done. | يدلّ تقليديًا على خصومات وخلافات متكرّرة — وابتلاءات الغضب والكبر والأنا شائعة حتى تُجاهَد النفس. |
| 3743 | Traditionally shows recurring quarrels and discord in marriage. Tests of anger, pride, and ego are common. | يدلّ تقليديًا على خصومات وخلافات متكرّرة في الزواج. وابتلاءات الغضب والكبر والأنا شائعة. |
| 3744 | Traditionally shows recurring small quarrels — tests of pride and ego may repeat until self-awareness grows. | يدلّ تقليديًا على خصومات صغيرة متكرّرة — قد تتكرّر ابتلاءات الكبر والأنا حتى ينمو الوعي بالنفس. |
| 3745 | Traditionally shows recurring discord — old patterns of pride and ego may resurface until addressed with forgiveness. | يدلّ تقليديًا على خلاف متكرّر — قد تعود أنماط قديمة من الكبر والأنا حتى تُعالج بالعفو. |
| 3746 | Traditionally shows recurring friction — tests of ego and power may repeat until clear roles and respect are established. | يدلّ تقليديًا على احتكاك متكرّر — قد تتكرّر ابتلاءات الأنا والسلطة حتى تتّضح الأدوار ويقوم الاحترام. |
| 3747 | This bond tends to surface recurring friction tied to pride and ego. Self-awareness on both sides is what breaks the cycle. | تميل هذه الرابطة إلى إظهار احتكاك متكرّر مرتبط بالكبر والأنا. والوعي بالنفس من الطرفين هو ما يكسر الدورة. |
| 3748 | Friendships here often involve repeated small conflicts, sometimes over who's 'right.' Letting go of ego keeps the friendship from wearing thin. | تتضمّن الصداقات هنا غالبًا خلافات صغيرة متكرّرة، أحيانًا حول «من المُحقّ». والتخلّي عن الأنا يحفظ الصداقة من البِلى. |
| 3749 | Family relationships under this pattern often carry old, recurring disagreements. Forgiveness and honest self-reflection are what finally shift the pattern. | تحمل العلاقات العائلية في هذا النمط غالبًا خلافات قديمة متكرّرة. والعفو ومحاسبة النفس الصادقة هما ما يغيّر النمط أخيرًا. |
| 3750 | Traditionally considered the most favorable of all patterns — early obstacles often give way to strong blessings and alignment. | يُعدّ تقليديًا أكثر الأنماط مواتاة — غالبًا ما تُفضي العقبات الأولى إلى بركات قوية وانسجام. |
| 3751 | Traditionally considered the most favorable for marriage. May face obstacles early on, but strong blessings and alignment often follow. | يُعدّ تقليديًا أكثر الأنماط مواتاة للزواج. قد يواجه عقبات في البداية، لكن البركات القوية والانسجام كثيرًا ما تتبع. |
| 3752 | Traditionally considered one of the most favorable patterns for friendship — early distance often resolves into deep loyalty. | يُعدّ تقليديًا من أكثر الأنماط مواتاة للصداقة — كثيرًا ما يتحوّل البُعد الأول إلى وفاء عميق. |
| 3753 | Traditionally considered one of the most favorable patterns for family bonds — early difficulty often gives way to lasting depth. | يُعدّ تقليديًا من أكثر الأنماط مواتاة للروابط العائلية — كثيرًا ما تُفضي الصعوبة الأولى إلى عمق دائم. |
| 3754 | Traditionally considered one of the most favorable patterns for partnership — early friction often resolves into a highly aligned collaboration. | يُعدّ تقليديًا من أكثر الأنماط مواتاة للشراكة — كثيرًا ما يتحوّل الاحتكاك الأول إلى تعاون شديد الانسجام. |
| 3755 | Traditionally the most favorable connection — early obstacles often give way to a deep, aligned bond. Trust the process rather than forcing it. | الصلة الأكثر مواتاة تقليديًا — كثيرًا ما تُفضي العقبات الأولى إلى رابطة عميقة منسجمة. ثق بالمسار ولا تستعجله. |
| 3756 | One of the strongest friendship patterns — any early distance or misunderstanding tends to resolve into a deeply loyal bond. Let it develop at its own pace. | من أقوى أنماط الصداقة — يميل أي بُعد أو سوء فهم أوّل إلى التحوّل إلى رابطة وفية عميقة. دعها تنمو على مهل. |
| 3757 | Family bonds here often carry real depth, even if the relationship faced early distance or difficulty. What follows tends to be lasting and meaningful. | تحمل الروابط العائلية هنا غالبًا عمقًا حقيقيًا، حتى لو واجهت العلاقة بُعدًا أو صعوبة أولى. وما يتبع يميل إلى أن يكون دائمًا ذا معنى. |
| 3758 | Pride in the blessing, external interference early on, and assuming ease means no effort is needed. | الاغترار بالنعمة، وتدخّل الآخرين في البداية، وظنّ أن اليسر يعني الاستغناء عن الجهد. |
| 3759 | Traditionally very good for the long term, though early misunderstandings are common — patience transforms this into a strong bond. | جيد جدًا تقليديًا على المدى البعيد، وإن كان سوء الفهم الأول شائعًا — والصبر يحوّله إلى رابطة قوية. |
| 3760 | Traditionally very good for marriage over the long term, though early misunderstandings are common. | جيد جدًا تقليديًا للزواج على المدى البعيد، وإن كان سوء الفهم الأول شائعًا. |
| 3761 | Traditionally very good for the long term — early friction is common, but patience often builds a highly reliable partnership. | جيد جدًا تقليديًا على المدى البعيد — الاحتكاك الأول شائع، لكن الصبر كثيرًا ما يبني شراكة موثوقة جدًا. |
| 3762 | This connection often starts with confusion or misjudgment but strengthens significantly with time. Patience is what unlocks its real depth. | تبدأ هذه الصلة غالبًا بحيرة أو سوء تقدير لكنها تقوى كثيرًا مع الوقت. والصبر هو مفتاح عمقها الحقيقي. |
| 3763 | Friendships here can start awkwardly or take time to click, but often become some of the most enduring bonds. Don't judge it too early. | قد تبدأ الصداقات هنا متعثّرة أو تحتاج وقتًا لتتّضح، لكنها كثيرًا ما تصير من أدوم الروابط. لا تحكم عليها مبكرًا. |
| 3764 | Family relationships under this pattern may start with distance or misunderstanding but tend to deepen meaningfully over the years. Give the bond time. | قد تبدأ العلاقات العائلية في هذا النمط ببُعد أو سوء فهم لكنها تميل إلى التعمّق مع السنين. امنح الرابطة وقتها. |
| 3765 | Working relationships here often start rocky — mismatched expectations or slow trust-building — but tend to become highly reliable partnerships over time. | تبدأ علاقات العمل هنا غالبًا متعثّرة — توقّعات غير متوافقة أو ثقة بطيئة — لكنها تميل إلى أن تصير شراكات موثوقة جدًا مع الوقت. |
| 3766 | Traditionally warned against for binding commitments — associated with severe hardship, sudden breaks, and recurring harm. | يُحذَّر منه تقليديًا في الالتزامات الملزمة — ويرتبط بمشقّة شديدة وانقطاعات مفاجئة وأذى متكرّر. |
| 3767 | Traditionally warned against for marriage. Associated with severe hardship, sudden breaks, and recurring harm patterns. | يُحذَّر منه تقليديًا في الزواج. ويرتبط بمشقّة شديدة وانقطاعات مفاجئة وأنماط أذى متكرّرة. |
| 3768 | Traditionally warned against for close, binding friendship — sudden falling-outs and recurring hurt are associated risks. | يُحذَّر منه تقليديًا في الصداقة الوثيقة — والقطيعة المفاجئة والأذى المتكرّر من مخاطره. |
| 3769 | Traditionally associated with real difficulty in family bonds — estrangement and recurring conflict are common risks. | يرتبط تقليديًا بصعوبة حقيقية في الروابط العائلية — والجفاء والخلاف المتكرّر من مخاطره الشائعة. |
| 3770 | Traditionally warned against for binding partnership — sudden fallout and recurring breakdowns in trust are associated risks. | يُحذَّر منه تقليديًا في الشراكة الملزمة — والانهيار المفاجئ وتكرّر فقدان الثقة من مخاطره. |
| 3771 | Traditionally a difficult pattern, associated with sudden breaks and recurring strain. Extreme caution and spiritual protection are advised. | نمط صعب تقليديًا، يرتبط بانقطاعات مفاجئة وعناء متكرّر. يُنصح بالحذر الشديد والتحصّن بالأذكار. |
| 3772 | Friendships under this pattern can be prone to sudden falling-outs or repeated hurt. Approach with awareness, and don't ignore recurring red flags. | قد تكون الصداقات في هذا النمط عرضة للقطيعة المفاجئة أو الأذى المتكرّر. اقترب بوعي ولا تتجاهل العلامات المتكرّرة. |
| 3773 | Family ties here can carry real difficulty, including estrangement or repeated conflict. Seek wise counsel and increase protective practices rather than forcing closeness. | قد تحمل الروابط العائلية هنا صعوبة حقيقية، منها الجفاء أو الخلاف المتكرّر. اطلب نصح الحكماء وأكثِر من الأذكار بدل فرض القرب. |
| 3774 | Professional partnerships under this pattern carry real risk — sudden fallout or repeated breakdowns in trust are common. Proceed with caution and clear agreements. | تحمل الشراكات المهنية في هذا النمط خطرًا حقيقيًا — الانهيار المفاجئ أو تكرّر فقدان الثقة شائع. تقدّم بحذر واتفاقات واضحة. |
| 3775 | New beginnings and fresh energy. This pairing initiates new chapters together. | بدايات جديدة وطاقة متجدّدة. هذا الاقتران يفتتح فصولًا جديدة معًا. |
| 3776 | Balance and duality. Both individuals complement each other through cooperation. | التوازن والثنائية. يتكامل الطرفان بالتعاون. |
| 3777 | Friction and discord. This pairing faces fundamental differences that require careful navigation. | احتكاك وخلاف. يواجه هذا الاقتران اختلافات جوهرية تتطلّب سيرًا حذرًا. |
| 3778 | Stability and structure. A grounded partnership built on solid foundations. | الثبات والنظام. شراكة متجذّرة مبنية على أسس متينة. |
| 3779 | Dynamic change and adaptability. This pairing thrives on variety and movement. | تغيّر حيوي وتكيّف. يزدهر هذا الاقتران بالتنوّع والحركة. |
| 3780 | Spiritual harmony and wisdom. An ideal match with deep understanding. | انسجام روحي وحكمة. توافق مثالي بفهم عميق. |
| 3781 | Abundance and manifestation. This pair has strong potential for achievement. | الوفرة والتحقيق. لهذا الثنائي إمكانات قوية للإنجاز. |
| 3782 | Cycle ending and completion. This connection may represent a karmic conclusion or natural closure. | نهاية الدورة والإتمام. قد تمثّل هذه الصلة خاتمة أو إغلاقًا طبيعيًا. |
| 3783 | Emotional depth and intuitive connection. A nurturing and empathetic bond. | عمق عاطفي وصلة حدسية. رابطة راعية متعاطفة. |
| 3784 | Intellectual stimulation and clear communication. Mental compatibility is strong. | تحفيز فكري وتواصل واضح. التوافق الذهني قوي. |
| 3785 | Practical stability and reliable support. A grounded, lasting partnership. | ثبات عملي وسند موثوق. شراكة متجذّرة دائمة. |
| 3786 | are harmonious celestial allies. Their cosmic energies flow smoothly together. | حليفان سماويّان منسجمان، تنساب طاقتاهما معًا بسلاسة. |
| 3787 | have challenging cosmic aspects. Growth comes through navigating differences. | بينهما جوانب فلكية صعبة. والنموّ يأتي بتجاوز الاختلافات. |
| 3788 | share exceptional compatibility across spiritual, elemental, and cosmic dimensions. This pairing has strong potential for harmony and mutual growth. | يتشاركان توافقًا استثنائيًا في الأبعاد الروحية والعنصرية والفلكية. ولهذا الاقتران إمكانات قوية للانسجام والنموّ المتبادل. |
| 3789 | have good compatibility with balanced energies. With understanding and effort, this connection can flourish. | بينهما توافق جيد بطاقات متوازنة. وبالتفاهم والجهد يمكن لهذه الصلة أن تزدهر. |
| 3790 | Your Fire–Fire combination creates intense passion and drive. Channel this energy into shared goals to avoid burnout. | يصنع اجتماع النار بالنار شغفًا واندفاعًا شديدين. وجّها هذه الطاقة إلى أهداف مشتركة لتجنّب الإنهاك. |
| 3791 | Your Fire–Air mix ignites creativity and inspiration. Balance spontaneity with thoughtful planning. | يُشعل مزيج النار والهواء الإبداع والإلهام. وازنا العفوية بالتخطيط المتأنّي. |
| 3792 | Your Fire–Water mix creates transformation through emotion and passion. Allow emotions to cool before major decisions. | يصنع مزيج النار والماء تحوّلًا بالعاطفة والشغف. دعا المشاعر تهدأ قبل القرارات الكبرى. |
| 3793 | Your Fire–Earth combination blends passion with practicality. Let vision meet execution for powerful results. | يمزج اجتماع النار والتراب الشغف بالعملية. لتلتقِ الرؤية بالتنفيذ لنتائج قوية. |
| 3794 | Your Air–Air pairing enhances intellectual synergy. Ground ideas in action to manifest your shared visions. | يعزّز اقتران الهواء بالهواء التآزر الفكري. جذّرا الأفكار في العمل لتحقيق رؤاكما المشتركة. |
| 3795 | Your Air–Water blend merges intellect with intuition. Trust both logic and feelings in decision-making. | يمزج الهواء والماء العقل بالحدس. ثقا بالمنطق والمشاعر معًا في اتّخاذ القرار. |
| 3796 | Your Air–Earth combination balances ideas with implementation. Communicate clearly while building tangible foundations. | يوازن اجتماع الهواء والتراب الأفكار بالتنفيذ. تواصلا بوضوح وأنتما تبنيان أسسًا ملموسة. |
| 3797 | Your Water–Water connection deepens emotional bonds. Create boundaries to prevent emotional overwhelm. | تعمّق صلة الماء بالماء الروابط العاطفية. ضعا حدودًا لتجنّب الإرهاق العاطفي. |
| 3798 | Your Water–Earth pairing nurtures growth and stability. Combine emotional depth with practical care. | يرعى اقتران الماء بالتراب النموّ والثبات. اجمعا العمق العاطفي بالرعاية العملية. |
| 3799 | Your Earth–Earth foundation builds lasting security. Embrace flexibility to keep the relationship dynamic. | يبني أساس التراب بالتراب أمانًا دائمًا. تقبّلا المرونة لتبقى العلاقة حيوية. |
| 3800 | Your spiritual alignment is exceptional. Continue deepening your shared understanding through meditation or reflection together. | انسجامكما الروحي استثنائي. واصلا تعميق فهمكما المشترك بالتأمّل أو التدبّر معًا. |
| 3801 | Your spiritual paths may differ. Respect each other's journey and find common ground in shared values. | قد تختلف طريقاكما الروحيان. احترما رحلة كلٍّ منكما واجدا أرضًا مشتركة في القيم. |
| 3802 | energy creates dynamic interaction. Channel this into creative projects or shared adventures. | يصنع تفاعلًا حيويًا. وجّها هذا إلى مشاريع إبداعية أو مغامرات مشتركة. |
| 3803 | support each other naturally. Trust your intuitive connection. | يسند كلٌّ منهما الآخر طبيعيًا. ثقا بصلتكما الحدسية. |
| 3804 | create tension. Use this as an opportunity to learn from different perspectives. | يصنعان توتّرًا. اجعلاه فرصة للتعلّم من وجهات نظر مختلفة. |
| 3805 | energy harmonizes beautifully in daily life. Celebrate your natural understanding. | تنسجم طاقتهما انسجامًا جميلًا في الحياة اليومية. احتفيا بتفاهمكما الطبيعي. |
| 3806 | energies require conscious balance in daily routines. Create space for both styles. | تحتاج طاقتاهما إلى توازن واعٍ في الروتين اليومي. افسحا مجالًا للأسلوبين. |
| 3807 | Practice patience, kindness, and open communication to nurture your connection. | تحلّيا بالصبر واللطف والتواصل المفتوح لرعاية صلتكما. |
| 3808 | Both partners share Fire energy. Expect passion, enthusiasm, and dynamic action in daily life. May need to manage intensity. | يتشارك الطرفان طاقة النار. توقّعا شغفًا وحماسة وعملًا حيويًا في الحياة اليومية، وقد يلزم ضبط الشدّة. |
| 3809 | Both partners share Air energy. Daily interactions focus on communication, ideas, and mental stimulation. Keep conversations grounded. | يتشارك الطرفان طاقة الهواء. تتركّز التفاعلات اليومية على التواصل والأفكار والتحفيز الذهني. أبقيا الحديث متجذّرًا. |
| 3810 | Both partners share Water energy. Emotional depth and intuition guide daily life. Create healthy boundaries to avoid emotional overwhelm. | يتشارك الطرفان طاقة الماء. يقود العمق العاطفي والحدس الحياة اليومية. ضعا حدودًا صحّية لتجنّب الإرهاق العاطفي. |
| 3811 | Fire and Air energies fuel each other. Daily interactions are stimulating, creative, and full of movement. Channel this energy constructively. | تغذّي طاقتا النار والهواء بعضهما. فالتفاعلات اليومية محفّزة مبدعة مليئة بالحركة. وجّها هذه الطاقة توجيهًا بنّاءً. |
| 3812 | Earth and Water blend for growth and nurturing. Daily life balances practicality with emotional care. A naturally supportive combination. | يمتزج التراب والماء للنموّ والرعاية. توازن الحياة اليومية العمليةَ بالرعاية العاطفية. مزيج داعم بطبعه. |
| 3813 | Air and Earth represent ideas meeting practicality. Daily life requires balancing vision with execution. Communication is key. | يمثّل الهواء والتراب التقاء الأفكار بالعملية. تتطلّب الحياة اليومية موازنة الرؤية بالتنفيذ، والتواصل هو المفتاح. |
| 3814 | Fire and Earth combine action with stability. Daily interactions balance passion with practicality. Respect each other's pace. | يجمع النار والتراب العمل والثبات. توازن التفاعلات اليومية الشغف بالعملية. احترما إيقاع بعضكما. |
| 3815 | Air and Water blend logic with emotion. Daily life requires honoring both intellect and feelings. Find balance between thinking and feeling. | يمزج الهواء والماء المنطق بالعاطفة. تتطلّب الحياة اليومية إكرام العقل والمشاعر معًا. جِدا التوازن بين التفكير والإحساس. |
| 3816 | interaction. This unique combination brings together different elemental energies in daily life. | تفاعل. يجمع هذا المزيج الفريد طاقات عنصرية مختلفة في الحياة اليومية. |
| 3817 | Unknown Pairing | اقتران غير معروف |
| 3818 | Schedule calm time together. Practice listening, not just doing. | خصّصا وقتًا هادئًا معًا. تدرّبا على الإصغاء لا على الفعل وحده. |
| 3819 | May overlook emotional depth and practical details. All vision, little grounding. | قد تغفلان عن العمق العاطفي والتفاصيل العملية. رؤية كثيرة وتجذّر قليل. |
| 3820 | Weekly check-ins: 'How are you feeling?' not just 'What are you doing?' | مراجعة أسبوعية: «كيف تشعر؟» لا «ماذا تفعل؟» فقط. |
| 3821 | Different paces: Fire rushes, Earth takes time. May feel like you're pulling in opposite directions. | إيقاعان مختلفان: النار تستعجل والتراب يتمهّل. قد تشعران بأنكما تشدّان في اتجاهين متعاكسين. |
| 3822 | Combine planning sessions (Earth) with spontaneous adventures (Fire). Honor both approaches. | اجمعا جلسات التخطيط (التراب) بالمغامرات العفوية (النار). أكرِما النهجين. |
| 3823 | May overthink or avoid emotional vulnerability. All head, not enough heart. | قد تفرطان في التفكير أو تتجنّبان الانكشاف العاطفي. عقل كثير وقلب قليل. |
| 3824 | Set 'no-analysis' zones. Practice feeling without discussing. Touch more, talk less sometimes. | خصّصا أوقاتًا «بلا تحليل». تدرّبا على الإحساس دون نقاش. قلّلا الكلام وأكثِرا المودّة أحيانًا. |
| 3825 | Create vision boards together (Air), then assign tasks and timelines (Earth). Meet in the middle. | اصنعا لوحات رؤية معًا (الهواء)، ثم وزّعا المهامّ والمواعيد (التراب). والتقيا في الوسط. |
| 3826 | May drown in emotions together. Can become isolated from the outside world. Need Air's perspective. | قد تغرقان في المشاعر معًا وتنعزلان عن العالم. تحتاجان إلى منظور الهواء. |
| 3827 | Journal together, then discuss what you wrote. Bring emotions into words. Connect with others too. | دوّنا معًا ثم ناقشا ما كتبتما. حوّلا المشاعر إلى كلمات، وتواصلا مع الآخرين أيضًا. |
| 3828 | Natural harmony. Water nourishes Earth, Earth holds Water. Like a garden—growth happens organically. | انسجام طبيعي. الماء يغذّي التراب، والتراب يحفظ الماء. كالبستان — ينمو الخير طبيعيًا. |
| 3829 | May avoid conflict or become stagnant. Too comfortable can mean no growth challenges. | قد تتجنّبان الخلاف أو تركدان. فالراحة المفرطة قد تعني غياب تحدّيات النموّ. |
| 3830 | Cook together, garden, create with your hands. Embrace gentle change. Try new things monthly. | اطبخا معًا، وازرعا، واصنعا بأيديكما. تقبّلا التغيير اللطيف، وجرّبا جديدًا كل شهر. |
| 3831 | May resist change or become too routine. Both can be stubborn. Life feels safe but may lack spontaneity. | قد تقاومان التغيير أو تغرقان في الروتين. كلاكما قد يكون عنيدًا. الحياة آمنة لكن قد تنقصها العفوية. |
| 3832 | Strong Emotional Foundation ( | أساس عاطفي قوي ( |
| 3833 | Natural Daily Compatibility ( | توافق يومي طبيعي ( |
| 3834 | %): Your conscious personalities align well. Communication feels easy and you "get" each other's thought processes without much explanation. | %): شخصيّتاكما الواعيتان منسجمتان. التواصل سهل وتفهمان طريقة تفكير بعضكما دون كثير شرح. |
| 3835 | Surface Dynamic: | الديناميكية الظاهرة: |
| 3836 | %) - Your daily interaction styles differ. | %) - أسلوبا تفاعلكما اليومي مختلفان. |
| 3837 | approach may clash with | قد يتصادم نهج |
| 3838 | style in routine decisions. | مع أسلوب الآخر في القرارات اليومية. |
| 3839 | %) - Your inherited emotional patterns differ. What feels "natural" to one may seem foreign to the other. This requires conscious emotional education between you. | %) - أنماطكما العاطفية الموروثة مختلفة. فما يبدو «طبيعيًا» لأحدكما قد يبدو غريبًا للآخر. وهذا يتطلّب تعلّمًا عاطفيًا واعيًا بينكما. |
| 3840 | Cook slow meals together - teaches Fire patience, gives Earth quality time | اطبخا وجبات على مهل معًا - تعلّم النار الصبر وتمنح التراب وقتًا طيبًا |
| 3841 | Evening walks after work - Fire burns energy, Earth processes the day | نزهات مسائية بعد العمل - النار تُفرغ طاقتها والتراب يراجع يومه |
| 3842 | Create a "soft space" for hard conversations - neutral zone for both temperaments | اصنعا «مساحة لطيفة» للمحادثات الصعبة - منطقة محايدة للطبعين |
| 3843 | Monthly check-ins - structured time to discuss emotions without defensiveness | مراجعات شهرية - وقت منظّم لمناقشة المشاعر دون دفاعية |
| 3844 | Journal together - Air analyzes, Water feels, both learn from the other's lens | دوّنا معًا - الهواء يحلّل والماء يشعر، ويتعلّم كلٌّ من عدسة الآخر |
| 3845 | Create "thinking time" and "feeling time" - honor both processing styles | خصّصا «وقتًا للتفكير» و«وقتًا للإحساس» - أكرِما أسلوبي المعالجة |
| 3846 | Build together - Air designs, Earth executes, celebrate both contributions | ابنيا معًا - الهواء يصمّم والتراب ينفّذ، واحتفيا بالإسهامين |
| 3847 | The Subtle One - Cools intensity, brings gentleness | اللطيف - يُبرِد الحدّة ويجلب الرفق |
| 3848 | The All-Strong - Builds boundaries, strengthens resolve | القوي - يبني الحدود ويقوّي العزم |
| 3849 | The All-Wise - Grounds ideas, brings practical wisdom | الحكيم - يجذّر الأفكار ويجلب الحكمة العملية |
| 3850 | The Opener - Releases rigidity, invites flow | الفتّاح - يحلّ الجمود ويدعو إلى الانسياب |
| 3851 | Together: Yā Wadūd (يا ودود) - The Most Loving - Cultivates love and affection between hearts | معًا: يا ودود - لتنمية المحبّة والمودّة بين القلوب |
| 3852 | Mother | الأم |
| 3853 | Location unavailable — allow it in your browser settings to use your city. | الموقع غير متاح — اسمح به في إعدادات المتصفّح لاستعمال مدينتك. |
| 3854 | Scan this range | افحص هذا النطاق |
| 3855 | Least-afflicted time | أقلّ الأوقات نحوسة |
| 3856 | No acceptable dates found within 45 days. | لم يُعثر على تواريخ مقبولة خلال 45 يومًا. |
| 3857 | Top 5 dates | أفضل 5 تواريخ |
| 3858 | Sunna & Fiqh | السنّة والفقه |
| 3859 | Pass | مستوفى |
| 3860 | Fail | غير مستوفى |
| 3861 | Bonus | زيادة |
| 3862 | Penalty | خصم |
| 3863 | Hard fail | مانع قاطع |
| 3864 | Conditions worsen later this day — | تسوء الأحوال لاحقًا في هذا اليوم — |
| 3865 | after ~ | بعد ~ |
| 3866 | Conditions were better earlier this day — | كانت الأحوال أفضل في وقت أبكر من هذا اليوم — |
| 3867 | Mercury Retrograde (Contracts) | رجوع عطارد (العقود) |
| 3868 | Mercury is retrograde — the single most-cited classical caution against signing contracts, starting negotiations, or finalizing a sale. | عطارد راجع — وهذا أشهر تحذير كلاسيكي من توقيع العقود أو بدء المفاوضات أو إتمام البيع. |
| 3869 | Mercury is direct. | عطارد مستقيم. |
| 3870 | Moon has no applying aspect before leaving its current sign — void of course, nothing "comes of" a deal begun now. | لا يتّصل القمر بأي نظر قبل خروجه من برجه — فهو خالي السير، ولا يُرجى «ثمرة» لصفقة تبدأ الآن. |
| 3871 | Mercury Combust | احتراق عطارد |
| 3872 | ° from the Sun — not combust. | ° من الشمس — غير محترق. |
| 3873 | Moon applying to a | القمر متّصل بـ |
| 3874 | ° — warns of dispute, loss, or a deal turning sour. | ° — يحذّر من نزاع أو خسارة أو فساد الصفقة. |
| 3875 | Moon is not applying to a hard aspect with Saturn or Mars. | القمر غير متّصل بنظر صعب مع زحل أو المريخ. |
| 3876 | , orbe | ، بفلك |
| 3877 | Moon elongation | بُعد القمر عن الشمس |
| 3878 | ° — waning. | ° — ناقص النور. |
| 3879 | Moon Applying to Jupiter (Gain) | اتّصال القمر بالمشتري (الربح) |
| 3880 | with Jupiter, orb | مع المشتري، بفلك |
| 3881 | ° — Jupiter is the classical significator of profit and gain. | ° — المشتري هو الدالّ الكلاسيكي على الربح والكسب. |
| 3882 | Moon is not applying to a favorable aspect with Jupiter. | القمر غير متّصل بنظر حسن مع المشتري. |
| 3883 | Moon Applying to Venus (Smooth Dealing) | اتّصال القمر بالزهرة (حسن المعاملة) |
| 3884 | with Venus, orb | مع الزهرة، بفلك |
| 3885 | ° — favorable for amicable dealing between the parties. | ° — مواتٍ لحسن التعامل بين الطرفين. |
| 3886 | Moon is not applying to a favorable aspect with Venus. | القمر غير متّصل بنظر حسن مع الزهرة. |
| 3887 | Mercury Dignified | عطارد في كرامة |
| 3888 | Mercury has no domicile bonus in this sign. | لا زيادة بيت لعطارد في هذا البرج. |
| 3889 | Mercury Free of Fall/Detriment | عطارد سالم من الهبوط والوبال |
| 3890 | — in fall or detriment. | — في هبوط أو وبال. |
| 3891 | — free of fall or detriment. | — سالم من الهبوط والوبال. |
| 3892 | This window is not in a Mercury or Jupiter hour. | هذه النافذة ليست في ساعة عطارد أو المشتري. |
| 3893 | in fall/detriment | في هبوط/وبال |
| 3894 | This window is in the planetary hour of | هذه النافذة في الساعة الكوكبية لـ |
| 3895 | — no bonus. [SCHOLAR-REVIEW] | — بلا زيادة. [للمراجعة العلمية] |
| 3896 | Wednesday (day of Mercury) — favorable for negotiation and contracts. | الأربعاء (يوم عطارد) — مواتٍ للتفاوض والعقود. |
| 3897 | Thursday (day of Jupiter) — favorable for profit and gain. | الخميس (يوم المشتري) — مواتٍ للربح والكسب. |
| 3898 | Not a day classically associated with favorable business dealings. | ليس يومًا يرتبط كلاسيكيًا بحسن المعاملات التجارية. |
| 3899 | جيد (Jayyid) | جيد |
| 3900 | اجتناب (Ijtanib) | اجتنب |
| 3901 | Mercury Retrograde (Study/Comprehension) | رجوع عطارد (الدراسة والفهم) |
| 3902 | Mercury is retrograde — the same classical caution cited against contracts (business.ts) applies here: avoid starting serious study, an exam, or a new course while Mercury retrogrades. | عطارد راجع — ويسري هنا التحذير الكلاسيكي نفسه المذكور في العقود: تجنّب بدء دراسة جادّة أو امتحان أو مقرّر جديد وعطارد راجع. |
| 3903 | Moon Applying to Jupiter (Wisdom/Comprehension) | اتّصال القمر بالمشتري (الحكمة والفهم) |
| 3904 | ° — Jupiter is the classical significator of wisdom and comprehension. | ° — المشتري هو الدالّ الكلاسيكي على الحكمة والفهم. |
| 3905 | Moon Applying to Mercury (Retention) | اتّصال القمر بعطارد (الحفظ) |
| 3906 | with Mercury, orb | مع عطارد، بفلك |
| 3907 | ° — favorable for retention and a receptive mind. | ° — مواتٍ للحفظ وتهيّؤ الذهن. |
| 3908 | Moon is not applying to a favorable aspect with Mercury. | القمر غير متّصل بنظر حسن مع عطارد. |
| 3909 | ° — warns of frustration, blocked progress, or discouragement. | ° — يحذّر من الإحباط أو تعثّر التقدّم أو الفتور. |
| 3910 | Jupiter Free of Fall/Detriment | المشتري سالم من الهبوط والوبال |
| 3911 | Jupiter is in | المشتري في |
| 3912 | — free of fall or detriment, supporting comprehension and wisdom. | — سالم من الهبوط والوبال، يدعم الفهم والحكمة. |
| 3913 | Wednesday (day of Mercury) — favorable for study and comprehension. | الأربعاء (يوم عطارد) — مواتٍ للدراسة والفهم. |
| 3914 | Thursday (day of Jupiter) — favorable for wisdom and understanding. | الخميس (يوم المشتري) — مواتٍ للحكمة والفهم. |
| 3915 | Not a day classically associated with favorable study. | ليس يومًا يرتبط كلاسيكيًا بحسن الدراسة. |
| 3916 | Moon Applying to Mars (Hard Aspect) | اتّصال القمر بالمريخ (نظر صعب) |
| 3917 | with Mars, orb | مع المريخ، بفلك |
| 3918 | Moon is not applying to a hard aspect with Mars. | القمر غير متّصل بنظر صعب مع المريخ. |
| 3919 | Moon Sign Modality (Fixed/Movable) | طبيعة برج القمر (ثابت/منقلب) |
| 3920 | — a mutable sign, neutral for this purpose. | — برج ذو جسدين، محايد لهذا الغرض. |
| 3921 | Moon is not applying to a favorable aspect with Venus or Jupiter. | القمر غير متّصل بنظر حسن مع الزهرة أو المشتري. |
| 3922 | Saturn Dignified (Domicile) | زحل في كرامة (بيته) |
| 3923 | Saturn has no domicile bonus in this sign. | لا زيادة بيت لزحل في هذا البرج. |
| 3924 | Saturn Free of Fall/Detriment | زحل سالم من الهبوط والوبال |
| 3925 | Saturn Retrograde | رجوع زحل |
| 3926 | Saturn is retrograde — increased risk of delays, cost overruns, or rework during construction. | زحل راجع — يزداد خطر التأخير وتجاوز التكاليف أو إعادة العمل في البناء. |
| 3927 | Saturn is direct. | زحل مستقيم. |
| 3928 | This window is not in a Saturn or Jupiter hour. | هذه النافذة ليست في ساعة زحل أو المشتري. |
| 3929 | Saturday (day of Saturn) — favorable for foundations and lasting structures. | السبت (يوم زحل) — مواتٍ للأسس والبنى الدائمة. |
| 3930 | Thursday (day of Jupiter) — favorable for a settled, supported household. | الخميس (يوم المشتري) — مواتٍ لبيت مستقرّ مُعان. |
| 3931 | Not a day classically associated with favorable building or moving. | ليس يومًا يرتبط كلاسيكيًا بحسن البناء أو الانتقال. |
| 3932 | ° — waning into the last quarter approaching new moon. | ° — ناقص يقترب من التربيع الأخير قبل المحاق. |
| 3933 | ° — not in muḥāq. | ° — ليس في المحاق. |
| 3934 | ° from the Sun — combust (muḥtaraq). | ° من الشمس — محترق. |
| 3935 | Moon has no applying Ptolemaic aspect before leaving its current sign — void of course. | لا يتّصل القمر بأي نظر بطلمي قبل خروجه من برجه — خالي السير. |
| 3936 | Moon applying to | القمر متّصل بـ |
| 3937 | No applying hard aspect to Saturn or Mars within 6°. | لا اتّصال بنظر صعب مع زحل أو المريخ في حدود 6°. |
| 3938 | h away). | س بعيدًا). |
| 3939 | ° from the Sun — under the beams. | ° من الشمس — تحت الشعاع. |
| 3940 | Moon is not in the waning penalty band. | القمر ليس في نطاق النقصان المكروه. |
| 3941 | ° ecliptic — within via combusta (15° Libra–15° Scorpio). | ° من فلك البروج — في الطريق المحترقة (15° الميزان – 15° العقرب). |
| 3942 | Moon is outside via combusta. | القمر خارج الطريق المحترقة. |
| 3943 | Moon in Scorpio — fall. | القمر في العقرب — هبوط. |
| 3944 | Moon in Capricorn — detriment. | القمر في الجدي — وبال. |
| 3945 | Moon is not in fall or detriment. | القمر ليس في هبوط ولا وبال. |
| 3946 | ° from the Sun — combust. | ° من الشمس — محترق. |
| 3947 | Venus is not combust. | الزهرة غير محترقة. |
| 3948 | Venus is retrograde. | الزهرة راجعة. |
| 3949 | Venus is direct. | الزهرة مستقيمة. |
| 3950 | Venus in Virgo — fall. | الزهرة في العذراء — هبوط. |
| 3951 | Venus in | الزهرة في |
| 3952 | — exil. | — وبال. |
| 3953 | Venus is not in fall or detriment. | الزهرة ليست في هبوط ولا وبال. |
| 3954 | Mercury is retrograde — caution for the nikāḥ contract itself. | عطارد راجع — احتياط لعقد النكاح نفسه. |
| 3955 | Moon is applying to a benefic today. | القمر متّصل بسعد اليوم. |
| 3956 | Moon is not applying to Venus or Jupiter today — separating from the benefics. | القمر غير متّصل بالزهرة أو المشتري اليوم — منصرف عن السعدين. |
| 3957 | Moon is not in the favorable waxing band. | القمر ليس في نطاق الزيادة المواتي. |
| 3958 | Moon in Cancer — domicile. | القمر في السرطان — بيته. |
| 3959 | Moon in Taurus — exaltation. | القمر في الثور — شرفه. |
| 3960 | Moon has no marriage-favorable dignity bonus in this sign. | لا زيادة كرامة للقمر في هذا البرج تناسب الزواج. |
| 3961 | Moon is not applying to Venus or Jupiter by a favorable aspect. | القمر غير متّصل بالزهرة أو المشتري بنظر حسن. |
| 3962 | Venus in Pisces — exaltation. | الزهرة في الحوت — شرفها. |
| 3963 | Venus has no dignity bonus in this sign. | لا زيادة كرامة للزهرة في هذا البرج. |
| 3964 | No day-of-week bonus. | لا زيادة ليوم الأسبوع. |
| 3965 | This window is not in a Venus, Moon, or Jupiter hour. | هذه النافذة ليست في ساعة الزهرة أو القمر أو المشتري. |
| 3966 | Moon in lunar mansion | القمر في منزلة |
| 3967 | — favorable for marriage. [SCHOLAR-REVIEW] | — مواتية للزواج. [للمراجعة العلمية] |
| 3968 | — unfavorable for marriage. [SCHOLAR-REVIEW] | — غير مواتية للزواج. [للمراجعة العلمية] |
| 3969 | ° — traditionally warns of complication, poor healing, or a worsened condition. | ° — يحذّر تقليديًا من التعقيد أو بطء الشفاء أو سوء الحال. |
| 3970 | — free of fall or detriment, supporting recovery. | — سالم من الهبوط والوبال، يدعم التعافي. |
| 3971 | Mercury Free of Fall/Detriment (Diagnosis) | عطارد سالم من الهبوط والوبال (التشخيص) |
| 3972 | Mercury Retrograde (Diagnosis) | رجوع عطارد (التشخيص) |
| 3973 | This window is not in a Moon or Jupiter hour. | هذه النافذة ليست في ساعة القمر أو المشتري. |
| 3974 | Monday (day of the Moon) — favorable, as the Moon is the primary significator of the body. | الاثنين (يوم القمر) — مواتٍ، لأن القمر هو الدالّ الأول على البدن. |
| 3975 | Thursday (day of Jupiter) — favorable for recovery and vital force. | الخميس (يوم المشتري) — مواتٍ للتعافي والقوة الحيوية. |
| 3976 | Not a day classically associated with favorable medical timing. | ليس يومًا يرتبط كلاسيكيًا بحسن التوقيت الطبي. |
| 3977 | ° — traditionally warns of danger, delay, or mishap en route. | ° — يحذّر تقليديًا من خطر أو تأخير أو عارض في الطريق. |
| 3978 | Moon Sign Modality (Movable/Fixed) | طبيعة برج القمر (منقلب/ثابت) |
| 3979 | — a mutable sign, neutral for travel timing. | — برج ذو جسدين، محايد لتوقيت السفر. |
| 3980 | Mercury Retrograde (Travel Plans/Documents) | رجوع عطارد (خطط السفر والوثائق) |
| 3981 | Mercury is retrograde — increased risk of itinerary changes, lost documents, or miscommunication. | عطارد راجع — يزداد خطر تغيّر خطّ السير أو ضياع الوثائق أو سوء التفاهم. |
| 3982 | This window is not in a Jupiter, Moon, or Mercury hour. | هذه النافذة ليست في ساعة المشتري أو القمر أو عطارد. |
| 3983 | Early departure — "Allāhumma bārik li-ummatī fī bukūrihā" (O Allah, bless my ummah in its early mornings). | الخروج باكرًا — «اللهم بارك لأمتي في بكورها». |
| 3984 | This window is not in the early-morning (bukūr) band. | هذه النافذة ليست في وقت البكور. |
| 3985 | Lunar Mansion (Manzil) for Travel | منزلة القمر للسفر |
| 3986 | — favorable for travel. [SCHOLAR-REVIEW] | — مواتية للسفر. [للمراجعة العلمية] |
| 3987 | — unfavorable for travel. [SCHOLAR-REVIEW] | — غير مواتية للسفر. [للمراجعة العلمية] |
| 3988 | — free of fall or detriment, good for plans and correspondence. | — سالم من الهبوط والوبال، جيد للخطط والمراسلات. |
| 3989 | Wednesday (day of Mercury) — favorable for travel and communication. | الأربعاء (يوم عطارد) — مواتٍ للسفر والتواصل. |
| 3990 | Thursday — the Prophet ﷺ preferred to set out on journeys on Thursday (Bukhārī). | الخميس — كان النبي ﷺ يحبّ أن يخرج في السفر يوم الخميس (البخاري). |
| 3991 | Not a day classically associated with favorable travel. | ليس يومًا يرتبط كلاسيكيًا بحسن السفر. |
| 3992 | Muharram | محرّم |
| 3993 | Mouharram | محرّم |
| 3994 | Rabi' al-Awwal | ربيع الأول |
| 3995 | Rabi al-Awwal | ربيع الأول |
| 3996 | Rabi al-Thani | ربيع الآخر |
| 3997 | Joumada al-Awwal | جمادى الأولى |
| 3998 | Jumada al-Thani | جمادى الآخرة |
| 3999 | Joumada al-Thani | جمادى الآخرة |
| 4000 | Chaabane | شعبان |
| 4001 | Shawwal | شوّال |
| 4002 | Chawwal | شوّال |
| 4003 | Dhu al-Qi'dah | ذو القعدة |
| 4004 | Dhou al-Qi`dah | ذو القعدة |
| 4005 | Dhu al-Hijjah | ذو الحجّة |
| 4006 | Dhou al-Hijjah | ذو الحجّة |
| 4007 | Highly Recommended (Sunnah) | مستحبّ جدًا (سنّة) |
| 4008 | The Prophet ﷺ married ʿĀʾisha (RA) in Shawwāl — a month long favored for marriage in the Sunnah. | تزوّج النبي ﷺ عائشة رضي الله عنها في شوّال — وهو شهر استُحبّ فيه الزواج في السنّة. |
| 4009 | Mawlid month | شهر المولد |
| 4010 | Rabī' al-Awwal, the month associated with the Prophet's ﷺ birth. | ربيع الأول، الشهر المرتبط بمولد النبي ﷺ. |
| 4011 | The Moon is near dark-of-moon (muḥāq) in the Hijri calendar — this overlaps with the astrological combustion caution above. | القمر قرب المحاق في التقويم الهجري — ويتقاطع هذا مع تحذير الاحتراق الفلكي أعلاه. |
| 4012 | Celebrations are usually scheduled around Ramadan for practical reasons — nikāḥ itself is permitted year-round, including during Ramadan. | تُرتَّب الاحتفالات عادة حول رمضان لأسباب عملية — أما النكاح نفسه فجائز طوال السنة، ومنه رمضان. |
| 4013 | Days of Hajj | أيام الحجّ |
| 4014 | Celebrations are usually scheduled around the days of Hajj (8–13 Dhū al-Ḥijja) for practical reasons — nikāḥ itself is permitted year-round. | تُرتَّب الاحتفالات عادة حول أيام الحجّ (8–13 ذو الحجّة) لأسباب عملية — أما النكاح نفسه فجائز طوال السنة. |
| 4015 | Zodiac Man Caution | تحذير «الإنسان البروجي» |
| 4016 | The Moon is in a sign classically ruling the | القمر في برج يحكم كلاسيكيًا |
| 4017 | Monday is the day of the Moon, the classical significator of the body — informational only. | الاثنين يوم القمر، الدالّ الكلاسيكي على البدن — للمعلومة فقط. |
| 4018 | The Moon is in a sign where it traditionally expresses its qualities less comfortably. | القمر في برج يُعبّر فيه تقليديًا عن صفاته بارتياح أقلّ. |
| 4019 | Venus — the planet of love and harmony — is too close to the Sun right now and appears "hidden," weakening its supportive influence. | الزهرة — كوكب المحبّة والانسجام — قريبة جدًا من الشمس الآن وتبدو «مستترة»، فيضعف أثرها الداعم. |
| 4020 | Mercury appears to be moving backward right now — a mild caution specifically for the paperwork/contract side of things. | يبدو عطارد راجعًا الآن — تحذير خفيف يخصّ جانب الأوراق والعقد. |
| 4021 | The Moon isn't currently connecting with either of the two traditionally supportive planets (Venus or Jupiter). | القمر غير متّصل الآن بأيٍّ من الكوكبين الداعمين تقليديًا (الزهرة أو المشتري). |
| 4022 | The Moon is growing in light and clear of the Sun's glare right now — one of the most favorable classical signs for a fresh start. | القمر يزداد نورًا وقد خرج من وهج الشمس — من أحسن العلامات الكلاسيكية لبداية جديدة. |
| 4023 | The Moon is in a sign it traditionally feels very at home in. | القمر في برج يكون فيه تقليديًا في بيته. |
| 4024 | The Moon is in the sign of its greatest traditional strength. | القمر في برج أعظم قوّته التقليدية (شرفه). |
| 4025 | The Moon is forming a supportive connection with Jupiter, the planet of growth and good fortune, right now. | القمر يتّصل الآن اتّصالًا داعمًا بالمشتري، كوكب النموّ والسعد. |
| 4026 | Venus is in a sign it traditionally feels very at home in. | الزهرة في برج تكون فيه تقليديًا في بيتها. |
| 4027 | Venus is in the sign of its greatest traditional strength. | الزهرة في برج أعظم قوّتها التقليدية (شرفها). |
| 4028 | This falls on Friday — the day most recommended in Islamic tradition for this occasion. | يقع هذا يوم الجمعة — أكثر الأيام استحبابًا لهذه المناسبة في التراث الإسلامي. |
| 4029 | This falls on Monday, a day traditionally seen as mildly favorable. | يقع هذا يوم الاثنين، وهو يوم يُرى تقليديًا مواتيًا بعض الشيء. |
| 4030 | The Moon is passing through a lunar "station" traditionally considered favorable for this occasion. | القمر يمرّ بمنزلة تُعدّ تقليديًا مواتية لهذه المناسبة. |
| 4031 | The Moon is passing through a lunar "station" traditionally considered less favorable for this occasion. | القمر يمرّ بمنزلة تُعدّ تقليديًا أقلّ مواتاة لهذه المناسبة. |
| 4032 | The Moon isn't forming any meaningful connection right now — traditionally, a journey begun in this state tends to come to nothing. | القمر لا يكوّن الآن أي اتّصال ذي معنى — وتقليديًا، السفر الذي يبدأ في هذه الحال لا يُثمر. |
| 4033 | The Moon is in a tense position with Saturn or Mars right now — a traditional warning of danger or delay en route. | القمر في وضع متوتّر مع زحل أو المريخ الآن — تحذير تقليدي من خطر أو تأخير في الطريق. |
| 4034 | The Moon is too close to the Sun right now and appears "hidden" — this weakens the traveler's own influence in the chart. | القمر قريب جدًا من الشمس الآن ويبدو «مستترًا» — وهذا يُضعف دلالة المسافر نفسه في الطالع. |
| 4035 | The Moon is in a sign associated with quick movement — traditionally favorable for setting out. | القمر في برج يرتبط بسرعة الحركة — مواتٍ تقليديًا للخروج. |
| 4036 | The Moon is in a sign associated with staying put — traditionally a caution for travel, suggesting possible delay. | القمر في برج يرتبط بالمكث — تحذير تقليدي للسفر يوحي بتأخير محتمل. |
| 4037 | Mercury appears to be moving backward right now — traditionally linked to itinerary changes, lost documents, or mix-ups. | يبدو عطارد راجعًا الآن — ويرتبط تقليديًا بتغيّر خطّ السير أو ضياع الوثائق أو الالتباس. |
| 4038 | The Moon is growing in light right now — traditionally favorable for setting out and making progress. | القمر يزداد نورًا الآن — مواتٍ تقليديًا للخروج والتقدّم. |
| 4039 | The Moon is forming a supportive connection with Venus or Jupiter right now — a sign of a smooth, well-supported journey. | القمر يتّصل الآن اتّصالًا داعمًا بالزهرة أو المشتري — علامة على سفر سلس ميسّر. |
| 4040 | This specific time window aligns with a planetary hour traditionally seen as supportive for travel. | تتوافق هذه النافذة مع ساعة كوكبية تُرى تقليديًا داعمة للسفر. |
| 4041 | This is an early-morning departure — the Prophet ﷺ asked Allah to bless the early mornings of his ummah. | هذا خروج في البكور — وقد دعا النبي ﷺ لأمّته بالبركة في بكورها. |
| 4042 | The Moon is passing through a lunar "station" traditionally considered favorable for travel. | القمر يمرّ بمنزلة تُعدّ تقليديًا مواتية للسفر. |
| 4043 | The Moon is passing through a lunar "station" traditionally considered less favorable for travel. | القمر يمرّ بمنزلة تُعدّ تقليديًا أقلّ مواتاة للسفر. |
| 4044 | Mercury is in a comfortable position right now, supporting clear plans and communication. | عطارد في وضع مريح الآن، يدعم وضوح الخطط والتواصل. |
| 4045 | This falls on Wednesday, a day traditionally linked to travel and communication. | يقع هذا يوم الأربعاء، وهو يوم يرتبط تقليديًا بالسفر والتواصل. |
| 4046 | Mercury appears to be moving backward right now — the single most-cited traditional caution against signing contracts or starting negotiations. | يبدو عطارد راجعًا الآن — وهذا أشهر تحذير تقليدي من توقيع العقود أو بدء المفاوضات. |
| 4047 | The Moon isn't forming any meaningful connection right now — traditionally, a deal begun in this state tends to come to nothing. | القمر لا يكوّن الآن أي اتّصال ذي معنى — وتقليديًا، الصفقة التي تبدأ في هذه الحال لا تُثمر. |
| 4048 | Mercury is too close to the Sun right now and appears "hidden" — this weakens the deal's own significator. | عطارد قريب جدًا من الشمس الآن ويبدو «مستترًا» — وهذا يُضعف دالّ الصفقة نفسه. |
| 4049 | The Moon is in a tense position with Saturn or Mars right now — a traditional warning of dispute or a deal turning sour. | القمر في وضع متوتّر مع زحل أو المريخ الآن — تحذير تقليدي من نزاع أو فساد الصفقة. |
| 4050 | The Moon is growing in light right now — traditionally favorable for starting and growing a venture. | القمر يزداد نورًا الآن — مواتٍ تقليديًا لبدء مشروع وتنميته. |
| 4051 | The Moon is forming a supportive connection with Jupiter right now — traditionally the planet of profit and gain. | القمر يتّصل الآن اتّصالًا داعمًا بالمشتري — كوكب الربح والكسب تقليديًا. |
| 4052 | The Moon is forming a supportive connection with Venus right now — favorable for amicable dealing between both sides. | القمر يتّصل الآن اتّصالًا داعمًا بالزهرة — مواتٍ لحسن التعامل بين الطرفين. |
| 4053 | Mercury is in a sign it traditionally feels very at home in — strong for negotiation and paperwork. | عطارد في برج يكون فيه تقليديًا في بيته — قوي للتفاوض والأوراق. |
| 4054 | The Moon isn't forming any meaningful connection right now — traditionally, treatment begun in this state tends to come to nothing. | القمر لا يكوّن الآن أي اتّصال ذي معنى — وتقليديًا، العلاج الذي يبدأ في هذه الحال لا يُثمر. |
| 4055 | The Moon is too close to the Sun right now and appears "hidden" — traditionally, this weakens the body's own vital force in the chart. | القمر قريب جدًا من الشمس الآن ويبدو «مستترًا» — وتقليديًا يُضعف هذا القوة الحيوية للبدن في الطالع. |
| 4056 | The Moon is in a tense position with Saturn or Mars right now — a traditional warning of complication or slow healing. | القمر في وضع متوتّر مع زحل أو المريخ الآن — تحذير تقليدي من التعقيد أو بطء الشفاء. |
| 4057 | The Moon is growing in light right now — traditionally favorable for treatments meant to build up or strengthen the body. | القمر يزداد نورًا الآن — مواتٍ تقليديًا للعلاجات التي تبني البدن وتقوّيه. |
| 4058 | The Moon is forming a supportive connection with Venus or Jupiter right now — a sign of a smooth course of treatment and recovery. | القمر يتّصل الآن اتّصالًا داعمًا بالزهرة أو المشتري — علامة على علاج وتعافٍ سلسين. |
| 4059 | Jupiter — the traditional significator of recovery — is in a comfortable position right now. | المشتري — الدالّ التقليدي على التعافي — في وضع مريح الآن. |
| 4060 | Mercury is in a comfortable position right now, supporting a clear diagnosis. | عطارد في وضع مريح الآن، يدعم وضوح التشخيص. |
| 4061 | Mercury appears to be moving backward right now — a mild caution for the accuracy of a diagnosis. | يبدو عطارد راجعًا الآن — تحذير خفيف يخصّ دقّة التشخيص. |
| 4062 | This falls on Monday or Thursday — days traditionally linked to the body and to recovery. | يقع هذا يوم الاثنين أو الخميس — يومان يرتبطان تقليديًا بالبدن والتعافي. |
| 4063 | The Moon isn't forming any meaningful connection right now — traditionally, work begun in this state tends to come to nothing. | القمر لا يكوّن الآن أي اتّصال ذي معنى — وتقليديًا، العمل الذي يبدأ في هذه الحال لا يُثمر. |
| 4064 | The Moon is too close to the Sun right now and appears "hidden" — this weakens the matter's own significator. | القمر قريب جدًا من الشمس الآن ويبدو «مستترًا» — وهذا يُضعف دالّ الأمر نفسه. |
| 4065 | The Moon is in a sign associated with stability — traditionally favorable for something meant to last. | القمر في برج يرتبط بالثبات — مواتٍ تقليديًا لما يُراد له الدوام. |
| 4066 | The Moon is in a sign associated with change and impermanence — the opposite of what a lasting foundation calls for. | القمر في برج يرتبط بالتغيّر وعدم الدوام — عكس ما يتطلّبه الأساس الدائم. |
| 4067 | The Moon is growing in light right now — traditionally favorable for building and growing a household. | القمر يزداد نورًا الآن — مواتٍ تقليديًا لبناء بيت وتنميته. |
| 4068 | The Moon is forming a supportive connection with Venus or Jupiter right now — a sign of a settled, well-supported household. | القمر يتّصل الآن اتّصالًا داعمًا بالزهرة أو المشتري — علامة على بيت مستقرّ مُعان. |
| 4069 | Saturn — the traditional significator of land and foundations — is in a sign it feels very at home in. | زحل — الدالّ التقليدي على الأرض والأسس — في برج يكون فيه في بيته. |
| 4070 | Saturn appears to be moving backward right now — traditionally linked to delays, cost overruns, or rework. | يبدو زحل راجعًا الآن — ويرتبط تقليديًا بالتأخير أو تجاوز التكاليف أو إعادة العمل. |
| 4071 | This specific time window aligns with a planetary hour traditionally seen as supportive for foundations and building. | تتوافق هذه النافذة مع ساعة كوكبية تُرى تقليديًا داعمة للأسس والبناء. |
| 4072 | This falls on Saturday or Thursday — days traditionally linked to foundations and a supported household. | يقع هذا يوم السبت أو الخميس — يومان يرتبطان تقليديًا بالأسس والبيت المُعان. |
| 4073 | Mercury appears to be moving backward right now — the same traditional caution cited against contracts applies to starting serious study. | يبدو عطارد راجعًا الآن — ويسري التحذير التقليدي نفسه المذكور في العقود على بدء الدراسة الجادّة. |
| 4074 | The Moon isn't forming any meaningful connection right now — traditionally, study begun in this state tends to come to nothing. | القمر لا يكوّن الآن أي اتّصال ذي معنى — وتقليديًا، الدراسة التي تبدأ في هذه الحال لا تُثمر. |
| 4075 | Mercury is too close to the Sun right now and appears "hidden" — this weakens the significator of the intellect and study itself. | عطارد قريب جدًا من الشمس الآن ويبدو «مستترًا» — وهذا يُضعف دالّ العقل والدراسة نفسه. |
| 4076 | The Moon is forming a supportive connection with Jupiter right now — traditionally the planet of wisdom and comprehension. | القمر يتّصل الآن اتّصالًا داعمًا بالمشتري — كوكب الحكمة والفهم تقليديًا. |
| 4077 | The Moon is forming a supportive connection with Mercury right now — favorable for retention and a receptive mind. | القمر يتّصل الآن اتّصالًا داعمًا بعطارد — مواتٍ للحفظ وتهيّؤ الذهن. |
| 4078 | The Moon is in a tense position with Saturn or Mars right now — a traditional warning of frustration or blocked progress. | القمر في وضع متوتّر مع زحل أو المريخ الآن — تحذير تقليدي من الإحباط أو تعثّر التقدّم. |
| 4079 | Mercury is in a sign it traditionally feels very at home in — strong for comprehension and memory. | عطارد في برج يكون فيه تقليديًا في بيته — قوي للفهم والحفظ. |
| 4080 | Jupiter is in a comfortable position right now, supporting comprehension and wisdom. | المشتري في وضع مريح الآن، يدعم الفهم والحكمة. |
| 4081 | This falls on Wednesday or Thursday — days traditionally linked to the intellect and wisdom. | يقع هذا يوم الأربعاء أو الخميس — يومان يرتبطان تقليديًا بالعقل والحكمة. |
| 4082 | "Allāhumma bārik li-ummatī fī bukūrihā" — O Allah, bless my ummah in its early mornings. | «اللهم بارك لأمتي في بكورها». |
| 4083 | Friday Caution | تنبيه يوم الجمعة |
| 4084 | For those obligated to attend Jumuʿah, departing after the call to Friday prayer is discouraged in fiqh — this is informational only and does not affect the score. | لمن تجب عليه الجمعة، يُكره السفر بعد نداء صلاة الجمعة في الفقه — وهذا للمعلومة فقط ولا يؤثّر في الدرجة. |
| 4085 | Favored month ( | شهر مستحبّ ( |
| 4086 | Favored month in Senegambian custom — | شهر مستحبّ في العرف السنغالي الغامبي — |
| 4087 | (Muḥarram) is one of the sacred months (min al-ashhur al-ḥurum). | (محرّم) من الأشهر الحُرُم. |
| 4088 | Traditionally cautious ( | احتياط تقليدي ( |
| 4089 | ) is fully permissible in fiqh. | ) جائز تمامًا في الفقه. |
| 4090 | Festive month ( | شهر احتفالي ( |
| 4091 | Mawlid month — | شهر المولد — |
| 4092 | is festive in Senegambian custom, associated with the Prophet's ﷺ birth. | شهر احتفالي في العرف السنغالي الغامبي، مرتبط بمولد النبي ﷺ. |
| 4093 | Sunnah-recommended ( | مستحبّ في السنّة ( |
| 4094 | Sunnah-recommended — the Prophet ﷺ married ʿĀʾisha (RA) in Shawwāl ( | مستحبّ في السنّة — تزوّج النبي ﷺ عائشة رضي الله عنها في شوّال ( |
| 4095 | chest and stomach | الصدر والمعدة |
| 4096 | heart and upper back | القلب وأعلى الظهر |
| 4097 | abdomen and intestines | البطن والأمعاء |
| 4098 | reproductive organs and bladder | الأعضاء التناسلية والمثانة |
| 4099 | knees, joints, and bones | الركبتين والمفاصل والعظام |
| 4100 | ankles and shins | الكاحلين والساقين |
| 4101 | New Beginnings, Initiative | البدايات الجديدة والمبادرة |
| 4102 | New ventures | المشاريع الجديدة |
| 4103 | Beginnings invite intention (niyyah) and remembrance — the Moon’s stations are signs, not decrees. | البدايات تدعو إلى النيّة والذكر — ومنازل القمر علامات لا أقدار. |
| 4104 | Nourishment, Growth | الغذاء والنموّ |
| 4105 | Planting | الغرس |
| 4106 | Business ventures | المشاريع التجارية |
| 4107 | As the body needs nourishment, the heart needs what draws it nearer to Allah. | كما يحتاج البدن إلى الغذاء، يحتاج القلب إلى ما يقرّبه من الله. |
| 4108 | Beauty, Abundance, Gathering | الجمال والوفرة والاجتماع |
| 4109 | Gatherings | الاجتماعات |
| 4110 | Harsh speech | الكلام القاسي |
| 4111 | Al-Thurayyā was among the best-known stations in Arab star lore — a reminder to gather in beauty and good company. | كانت الثريا من أشهر المنازل في علم النجوم عند العرب — تذكيرًا بالاجتماع في جمال وصحبة طيبة. |
| 4112 | Educational reflection (anwāʾ / Al-Bīrūnī tradition of naming) | تأمّل تعليمي (الأنواء / تقليد التسمية عند البيروني) |
| 4113 | Loyalty, Persistence, Following Truth | الوفاء والمثابرة واتّباع الحقّ |
| 4114 | Seeking teachers | طلب المعلّمين |
| 4115 | Breaking commitments | نقض العهود |
| 4116 | Impulsive changes | التغييرات المتسرّعة |
| 4117 | Al-Dabarān “follows” Thurayyā across the sky — a picture of steadfast following, not blind haste. | الدبران «يتبع» الثريا في السماء — صورة للاتّباع الثابت لا العجلة العمياء. |
| 4118 | Educational reflection (star-name lore) | تأمّل تعليمي (موروث أسماء النجوم) |
| 4119 | Orion | الجبّار |
| 4120 | Clarity, Purification, Truth | الوضوح والتطهّر والحقّ |
| 4121 | Spiritual purification | التطهّر الروحي |
| 4122 | Unclear contracts | العقود الغامضة |
| 4123 | Confusion | الالتباس |
| 4124 | Clarity of intention softens confusion — seek light before you speak or sign. | وضوح النيّة يخفّف الالتباس — اطلب النور قبل أن تتكلّم أو توقّع. |
| 4125 | Marking, Identity, Recognition | الوسم والهوية والتعرّف |
| 4126 | Establishing identity | إثبات الهوية |
| 4127 | Clear naming | التسمية الواضحة |
| 4128 | Anonymity | الخفاء |
| 4129 | Hiding truth | كتمان الحقّ |
| 4130 | Dishonesty | الكذب |
| 4131 | Names and marks in the old star calendar were for recognition — know yourself before Allah, not for show. | كانت الأسماء والعلامات في تقويم النجوم القديم للتعارف — فاعرف نفسك بين يدي الله لا للرياء. |
| 4132 | Reach, Extension, Generosity | المدّ والامتداد والكرم |
| 4133 | The forearm that gives in charity teaches reach without grasping. | الذراع التي تمتدّ بالصدقة تعلّم المدّ دون القبض. |
| 4134 | Mystery, Threshold, Sacred Space | السرّ والعتبة والمكان المقدّس |
| 4135 | Retreat | الخلوة |
| 4136 | Excessive worldly activity | الإفراط في الانشغال الدنيوي |
| 4137 | Noise | الضجيج |
| 4138 | Distraction | التشتّت |
| 4139 | In quiet gaps — between tasks, between breaths — remember the One who ordered the Moon’s phases. | في الفجوات الهادئة — بين المهامّ وبين الأنفاس — اذكر الذي قدّر القمر منازل. |
| 4140 | Vision, Attentiveness | البصر واليقظة |
| 4141 | Careful observation | الملاحظة الدقيقة |
| 4142 | Seeking counsel | طلب المشورة |
| 4143 | Hasty judgments | الأحكام المتسرّعة |
| 4144 | Manāzil al-qamar are stations for reflection and timing adab — not prediction of the unseen. | منازل القمر محطّات للتأمّل ولأدب التوقيت — لا للتنبّؤ بالغيب. |
| 4145 | Formal commitments | الالتزامات الرسمية |
| 4146 | Empty show | المظاهر الجوفاء |
| 4147 | Neglecting counsel | إهمال المشورة |
| 4148 | Strength, Presence | القوة والحضور |
| 4149 | Encouraging others | تشجيع الآخرين |
| 4150 | Steady work | العمل الثابت |
| 4151 | Protecting the vulnerable | حماية الضعفاء |
| 4152 | Boastfulness | التفاخر |
| 4153 | Wasting energy | إهدار الطاقة |
| 4154 | Transition, Turning | الانتقال والتحوّل |
| 4155 | Course corrections | تصحيح المسار |
| 4156 | Ending harmful habits | ترك العادات الضارّة |
| 4157 | Reorganizing | إعادة التنظيم |
| 4158 | Tawba | التوبة |
| 4159 | Clinging to the obsolete | التشبّث بما بلي |
| 4160 | Forced abrupt breaks without counsel | القطيعة المفاجئة بلا مشورة |
| 4161 | Gathering, Calling | الجمع والنداء |
| 4162 | Community work | العمل المجتمعي |
| 4163 | Spreading alarm without cause | نشر الذعر بلا سبب |
| 4164 | Fair dealing | المعاملة العادلة |
| 4165 | Harvest and completion of work | الحصاد وإتمام العمل |
| 4166 | Neglecting zakāh and rights | إهمال الزكاة والحقوق |
| 4167 | Covering, Discretion | الستر والكتمان |
| 4168 | Private repentance | التوبة في السرّ |
| 4169 | Protecting privacy | صون الخصوصية |
| 4170 | Quiet charity | صدقة السرّ |
| 4171 | Exposing others | فضح الآخرين |
| 4172 | Scandal | الفضيحة |
| 4173 | Public shaming | التشهير العلني |
| 4174 | Boundaries, Careful Cuts | الحدود والقطع بحذر |
| 4175 | Spiteful severance | القطيعة عن حقد |
| 4176 | Ambiguous contracts | العقود الملتبسة |
| 4177 | Formal roles | الأدوار الرسمية |
| 4178 | Guarding dignity | صون الكرامة |
| 4179 | Betrayal of trust | خيانة الأمانة |
| 4180 | Seeking status for its own sake | طلب الجاه لذاته |
| 4181 | Sincerity, Courage of Heart | الإخلاص وشجاعة القلب |
| 4182 | Courageous apology | الاعتذار الشجاع |
| 4183 | Emotional recklessness | التهوّر العاطفي |
| 4184 | Crushing speech | الكلام الجارح |
| 4185 | Restraint, Defense of Dignity | الإمساك والدفاع عن الكرامة |
| 4186 | Cautious travel planning | التخطيط الحذر للسفر |
| 4187 | Saying less | الإقلال من الكلام |
| 4188 | Retaliation for ego | الانتقام للأنا |
| 4189 | Reckless risk | المخاطرة المتهوّرة |
| 4190 | Journey, Openness | السفر والانفتاح |
| 4191 | Outdoor work | العمل في الهواء الطلق |
| 4192 | Expanding horizons with adab | توسيع الآفاق بأدب |
| 4193 | Aimless wandering | التجوال بلا غاية |
| 4194 | Leaving duties unfinished | ترك الواجبات ناقصة |
| 4195 | Isolation from good counsel | الانعزال عن النصح الطيّب |
| 4196 | Settling affairs | تسوية الشؤون |
| 4197 | Neighborhood care | رعاية الجيران |
| 4198 | Organizing home | ترتيب البيت |
| 4199 | Neglecting neighbors' rights | إهمال حقوق الجيران |
| 4200 | Chaos in commitments | الفوضى في الالتزامات |
| 4201 | Fleeing responsibility | الفرار من المسؤولية |
| 4202 | Offering, Commitment | القربان والالتزام |
| 4203 | Charitable giving | الصدقة |
| 4204 | Keeping vows | الوفاء بالنذور |
| 4205 | Serious commitments | الالتزامات الجادّة |
| 4206 | Simplifying lifestyle | تبسيط المعيشة |
| 4207 | Wasteful spending | الإسراف |
| 4208 | Harming animals or people | إيذاء الحيوان أو الناس |
| 4209 | L'Avaleur Fortune | سعد بلع |
| 4210 | Depth, Absorption | العمق والاستيعاب |
| 4211 | Patience with difficulty | الصبر على الشدّة |
| 4212 | Swallowing anger into resentment | كظم الغيظ حتى يصير حقدًا |
| 4213 | Consuming without reflection | الاستهلاك بلا تفكّر |
| 4214 | Overindulgence | الإفراط |
| 4215 | Gratitude, Hope | الشكر والرجاء |
| 4216 | Gratitude practices | ممارسات الشكر |
| 4217 | Beginning hopeful works | بدء الأعمال المرجوّة |
| 4218 | Sharing ease with others | مشاركة اليسر مع الآخرين |
| 4219 | Taking ease for granted | الغفلة عن النعمة |
| 4220 | Complacency | الركون والتراخي |
| 4221 | Forgetting the Giver | نسيان المُنعِم |
| 4222 | Shelter and housing matters | شؤون المأوى والسكن |
| 4223 | Protecting family | حماية الأسرة |
| 4224 | Welcoming the stranger with adab | إكرام الغريب بأدب |
| 4225 | Inhospitality | ترك إكرام الضيف |
| 4226 | Neglecting dependents | إهمال من تعول |
| 4227 | Closing doors out of pride | إغلاق الأبواب كِبرًا |
| 4228 | Opening, Outflow | الانفتاح والتدفّق |
| 4229 | Starting helpful projects | بدء مشاريع نافعة |
| 4230 | Releasing stuck affairs | تحريك الشؤون العالقة |
| 4231 | Gossip as “release” | الغيبة بحجّة «التنفيس» |
| 4232 | Completion, Emptying | الإتمام والتفريغ |
| 4233 | Completing projects | إتمام المشاريع |
| 4234 | Settling debts | قضاء الديون |
| 4235 | Forgiving leftovers | العفو عن البقايا |
| 4236 | Closing cycles cleanly | إغلاق الدورات بنظافة |
| 4237 | Leaving ends untied | ترك الأطراف معلّقة |
| 4238 | Hoarding grudges | اكتناز الضغائن |
| 4239 | Starting too many new things | بدء أشياء جديدة كثيرة |
| 4240 | Wholeness, Hidden Depths | الكمال والأعماق الخفيّة |
| 4241 | Quiet reflection | التأمّل الهادئ |
| 4242 | Caring for the unseen needs of others | رعاية حاجات الآخرين الخفيّة |
| 4243 | Patience with the hidden | الصبر على ما خفي |
| 4244 | Integrating lessons | استيعاب الدروس |
| 4245 | Denying the unseen | إنكار الغيب |
| 4246 | Despair in darkness | اليأس في الظلمة |
| 4247 | Waxing Gibbous | أحدب متزايد |
| 4248 | Waning Gibbous | أحدب متناقص |
| 4249 | Last Quarter | التربيع الأخير |
| 4250 | Waning Crescent | هلال متناقص |
| 4251 | Excellent alignment! Lunar mansion | انسجام ممتاز! منزلة القمر |
| 4252 | is ruled by | يحكمها |
| 4253 | , matching the current planetary hour. | ، موافقةً للساعة الكوكبية الحالية. |
| 4254 | shares the | يشترك في عنصر |
| 4255 | element with lunar mansion | مع منزلة القمر |
| 4256 | Neutral influence. | أثر محايد. |
| 4257 | hour and lunar mansion | الساعة ومنزلة القمر |
| 4258 | have different energies. | طاقتاهما مختلفتان. |
| 4259 | Hot Food Sadaqah | صدقة الطعام الساخن |
| 4260 | Giving hot, prepared food as sadaqah is a beneficial form of charity. The food can be given to children or to anyone who can benefit from it. This form of sadaqah is associated with feeding and providing nourishment. | التصدّق بطعام ساخن مطبوخ صورة نافعة من الصدقة. ويمكن إعطاؤه للأطفال أو لكل من ينتفع به. وترتبط هذه الصدقة بالإطعام وتقديم الغذاء. |
| 4261 | Rice | أرز |
| 4262 | Porridge | عصيدة |
| 4263 | Cold Water Sadaqah | صدقة الماء البارد |
| 4264 | Giving cold water as sadaqah is another beneficial form of charity. The sadaqah specifically consists of providing cold drinking water to someone who can benefit from it. | التصدّق بالماء البارد صورة نافعة أخرى من الصدقة، وهي تقديم ماء بارد للشرب لمن ينتفع به. |
| 4265 | Supporting an Athlete or Sportsman | إعانة رياضي |
| 4266 | Helping a sportsman or athlete can also be given as a form of sadaqah. The assistance should be given sincerely for the benefit of the person. | يمكن أيضًا أن تكون إعانة رياضي صدقةً. وينبغي أن تُقدَّم بإخلاص لمنفعة الشخص. |
| 4267 | Buying them sports equipment or supplies | شراء معدّات أو لوازم رياضية له |
| 4268 | A form of sadaqah associated with Ḥamal is giving livestock. The animal may be raised and cared for in the household and then given as sadaqah. | من صور الصدقة المرتبطة ببرج الحمل التصدّق بالماشية. فيمكن تربية الحيوان والعناية به في البيت ثم التصدّق به. |
| 4269 | A ram | كبش |
| 4270 | A white sheep or ram | شاة أو كبش أبيض |
| 4271 | A sheep or ram of another colour | شاة أو كبش من لون آخر |
| 4272 | Giving away clothing that you have personally worn — once, twice, or a small number of times. The important condition is that the clothing is still clean, usable, and in good condition. It is then given to another person who can benefit from wearing it. The emphasis is on giving clothing that has already been worn by the giver, rather than brand-new or completely unused clothing. This sadaqah is associated with protection and seeking benefit through charity. | التصدّق بملابس لبستها أنت — مرّة أو مرّتين أو مرّات قليلة. والشرط المهمّ أن تكون نظيفة صالحة بحالة جيدة، فتُعطى لمن ينتفع بلبسها. والتركيز على ملابس لبسها المتصدّق لا الجديدة تمامًا. وترتبط هذه الصدقة بالحفظ وطلب النفع بالصدقة. |
| 4273 | Venus (al-Zuhrah / الزهرة) | الزهرة |
| 4274 | A primary form of sadaqah associated with al-Thawr is giving a single-coloured ram. A white ram is particularly suitable. The ram is given as sadaqah to someone who can benefit from it. | من أهمّ صور الصدقة المرتبطة ببرج الثور التصدّق بكبش ذي لون واحد، والأبيض أنسب. ويُعطى لمن ينتفع به. |
| 4275 | Giving away clothing that has already been worn, still in good and usable condition. This sadaqah is associated with protection and may be given with the intention of seeking protection through charity. | التصدّق بملابس سبق لبسها وهي بحالة جيدة صالحة. وترتبط هذه الصدقة بالحفظ ويمكن أن تُعطى بنيّة طلب الحفظ بالصدقة. |
| 4276 | Giving things grown from the ground, particularly staple agricultural foods, directly to people in need. | التصدّق بما يخرج من الأرض، لا سيما الأغذية الزراعية الأساسية، للمحتاجين مباشرة. |
| 4277 | Millet (dugub in Wolof) | الدُّخن («دوغوب» بالولوف) |
| 4278 | Other grains and agricultural produce | حبوب ومحاصيل زراعية أخرى |
| 4279 | Rice and millet may also be combined with cooking oil and given together as a food-based sadaqah package to someone or a family in need. | يمكن أيضًا جمع الأرز والدُّخن مع زيت الطبخ وإعطاؤها معًا سلّة غذائية صدقةً لشخص أو أسرة محتاجة. |
| 4280 | Millet | الدُّخن |
| 4281 | Giving water is another beneficial sadaqah for Taurus. The water is given to someone who needs or can benefit from it. | التصدّق بالماء صدقة نافعة أخرى لبرج الثور، يُعطى لمن يحتاجه أو ينتفع به. |
| 4282 | A particularly important form of sadaqah for Taurus is helping an elderly man or woman, regularly or whenever they are in need. This is regarded in the tradition as a secret sadaqah for increasing and sustaining one's provision (rizq). The emphasis is on quietly and consistently helping an elderly person without seeking recognition. | من أهمّ صور الصدقة لبرج الثور إعانة رجل أو امرأة مسنّة بانتظام أو كلّما احتاجا. وتُعدّ في التراث صدقة سرّ لزيادة الرزق ودوامه. والتركيز على إعانة المسنّ بهدوء وثبات دون طلب ثناء. |
| 4283 | Household necessities | لوازم البيت |
| 4284 | Other practical needs | حاجات عملية أخرى |
| 4285 | Friday is considered a particularly suitable day for giving Taurus-related sadaqah, connected in the tradition with Venus (al-Zuhrah), the planetary ruler of the sign. Where possible, give on Friday while maintaining the intention of sincere charity and seeking blessing, protection, and increase in provision. | يُعدّ يوم الجمعة مناسبًا خاصّة لصدقة برج الثور، لارتباطه في التراث بالزهرة حاكمة البرج. وإن أمكن فتصدّق يوم الجمعة مع نيّة الصدقة الخالصة وطلب البركة والحفظ وزيادة الرزق. |
| 4286 | A form of sadaqah associated with Jawzāʾ is giving 100 kola nuts, which are then distributed as sadaqah. | من صور الصدقة المرتبطة ببرج الجوزاء التصدّق بمئة حبّة كولا تُوزَّع صدقةً. |
| 4287 | White kola nuts | حبّات كولا بيضاء |
| 4288 | Red kola nuts | حبّات كولا حمراء |
| 4289 | A combination of white and red kola nuts | مزيج من حبّات الكولا البيضاء والحمراء |
| 4290 | Giving money as sadaqah is intended to help with the preservation and stability of wealth: giving a portion of one's wealth away so that wealth is not simply accumulated and lost or continuously spent. The amount can be according to the person's ability and circumstances. Intention: give sincerely, with the intention of helping others and seeking stability, preservation, and blessing in one's wealth. | يُقصد بالتصدّق بالمال المساعدة على حفظ المال وثباته: بإخراج جزء منه كي لا يُكنز فيضيع أو يُنفق بلا انقطاع. والمقدار بحسب قدرة الشخص وحاله. النيّة: تصدّق بإخلاص بنيّة إعانة الآخرين وطلب الثبات والحفظ والبركة في مالك. |
| 4291 | Giving a guinea fowl (French: pintade) as sadaqah, distributed to someone who can benefit from it. | التصدّق بدجاجة غينيا، تُعطى لمن ينتفع بها. |
| 4292 | Providing educational materials is another beneficial form of sadaqah for Gemini. These materials can be given to children or students who need them for their education. | تقديم الأدوات التعليمية صورة نافعة أخرى من الصدقة لبرج الجوزاء، تُعطى للأطفال أو الطلاب المحتاجين إليها في تعليمهم. |
| 4293 | White writing paper | ورق كتابة أبيض |
| 4294 | Exercise books | دفاتر تمارين |
| 4295 | Pencils | أقلام رصاص |
| 4296 | Educational sadaqah can also be directed toward teachers, including Qur'anic teachers — helping a teacher or their students. The sadaqah can therefore benefit either the teacher or the students. | يمكن أيضًا توجيه الصدقة التعليمية إلى المعلّمين، ومنهم معلّمو القرآن — بإعانة المعلّم أو طلابه. فتنفع الصدقة المعلّم أو الطلاب. |
| 4297 | Other materials needed for teaching and learning | مواد أخرى لازمة للتعليم والتعلّم |
| 4298 | Food can be prepared or purchased and given directly to children who can benefit from it. The intention is to provide nourishment and assistance through sadaqah. | يمكن إعداد الطعام أو شراؤه وإعطاؤه مباشرة للأطفال المنتفعين به. والنيّة تقديم الغذاء والعون بالصدقة. |
| 4299 | A form of sadaqah associated with Saraṭān is giving salt according to one's current age — the amount in kilograms matching the person's age (age 25 → 25 kg, age 30 → 30 kg, age 40 → 40 kg). The amount is weighed according to the person's age and then given out as sadaqah. This may be performed yearly, using the person's age at that time. | من صور الصدقة المرتبطة ببرج السرطان التصدّق بالملح بقدر عمر الشخص الحالي — بالكيلوغرام مساويًا للعمر (25 سنة ← 25 كغ، 30 ← 30 كغ، 40 ← 40 كغ). يُوزن بقدر العمر ثم يُوزَّع صدقةً. ويمكن فعل ذلك كل سنة بعمر الشخص حينها. |
| 4300 | Giving 4 kg of meat — beef or another type — out as sadaqah to people who can benefit from it. | التصدّق بأربعة كيلوغرامات من اللحم — بقر أو غيره — لمن ينتفع به. |
| 4301 | Helping with food expenses | الإعانة في نفقات الطعام |
| 4302 | Helping with household expenses | الإعانة في نفقات البيت |
| 4303 | Providing financial assistance to an elderly woman in need. The intention is to assist and ease her difficulties through sadaqah. | تقديم عون مالي لامرأة مسنّة محتاجة. والنيّة إعانتها وتيسير صعابها بالصدقة. |
| 4304 | Giving her money | إعطاؤها مالًا |
| 4305 | Helping with essential expenses | الإعانة في النفقات الأساسية |
| 4306 | Providing regular or occasional financial support | تقديم دعم مالي منتظم أو عند الحاجة |
| 4307 | Giving milk to children as sadaqah to provide nourishment and benefit. | التصدّق بالحليب على الأطفال غذاءً ونفعًا. |
| 4308 | A small bottle of milk | قارورة حليب صغيرة |
| 4309 | A larger quantity of milk | كمية أكبر من الحليب |
| 4310 | A primary form of sadaqah associated with al-Asad is to raise a ram, particularly a white ram: obtain it, keep it in an appropriate place at home or elsewhere, feed and care for it, and allow it to grow until it reaches a suitable mature stage. It is then slaughtered as sadaqah, the meat divided into portions and distributed to people who can benefit from it. Within this tradition, there is an observation that some Leo individuals may find the ram does not survive long enough to reach maturity, traditionally attributed to the heaviness of the zodiac. If the ram survives and reaches the appropriate mature stage, it can then be given as sadaqah. | من أهمّ صور الصدقة المرتبطة ببرج الأسد تربية كبش، لا سيما الأبيض: يُقتنى ويُحفظ في مكان مناسب في البيت أو غيره، ويُطعَم ويُعتنى به حتى يبلغ سنًّا مناسبة. ثم يُذبح صدقةً ويُقسَّم لحمه حصصًا تُوزَّع على من ينتفع بها. وفي هذا التراث ملاحظة أن بعض مواليد الأسد قد لا يعيش كبشهم حتى يبلغ، ويُنسب ذلك تقليديًا إلى ثقل البرج. فإن عاش وبلغ السنّ المناسبة تُصدِّق به. |
| 4311 | Preparing three bowls of Cheb Yap — a Senegalese rice dish made with meat, similar to meat-based jollof rice — and giving the prepared food as sadaqah to people who can benefit from it. | إعداد ثلاثة صحون من «تشب ياب» — طبق أرز سنغالي باللحم، شبيه بأرز الجلوف باللحم — والتصدّق بالطعام المُعدّ لمن ينتفع به. |
| 4312 | Preparing three bowls of porridge with a sour or fermented dairy component such as yogurt, and distributing them to people as sadaqah. | إعداد ثلاثة صحون من العصيدة مع لبن حامض أو مخمّر كالزبادي، وتوزيعها صدقةً. |
| 4313 | 3 bowls of Cheb Yap | 3 صحون من «تشب ياب» |
| 4314 | 3 bowls of porridge with yogurt | 3 صحون عصيدة باللبن |
| 4315 | A primary form of sadaqah associated with al-Sunbula is giving 100 kola nuts, a mixture of red and white, mixed together and distributed as sadaqah. | من أهمّ صور الصدقة المرتبطة ببرج السنبلة التصدّق بمئة حبّة كولا، حمراء وبيضاء مختلطة، تُوزَّع صدقةً. |
| 4316 | Giving money as sadaqah, according to the person's ability and circumstances, sincerely to someone who can benefit from it. | التصدّق بالمال بحسب قدرة الشخص وحاله، بإخلاص، لمن ينتفع به. |
| 4317 | Giving three different types of cereal together as sadaqah to people or families who can benefit from them. | التصدّق بثلاثة أنواع من الحبوب معًا على أشخاص أو أسر ينتفعون بها. |
| 4318 | Bessi — a Wolof cereal/grain similar to millet | «بيسي» — حبّ بالولوف شبيه بالدُّخن |
| 4319 | A particularly important secret sadaqah associated with Virgo is performed on reaching the age of 40: give 40 metres of kafan cloth (the white cloth used to shroud a deceased Muslim before burial) as sadaqah. Obtain the 40 metres, keep the cloth in the house overnight, then the following day divide it into portions of 7 metres each and distribute the portions as sadaqah. | من صدقات السرّ المهمّة المرتبطة بالسنبلة ما يكون عند بلوغ الأربعين: التصدّق بأربعين مترًا من قماش الكفن (القماش الأبيض الذي يُكفَّن به الميّت المسلم). تُقتنى الأربعون مترًا، ويُبات القماش في البيت ليلة، ثم يُقسَّم في الغد حصصًا كل منها سبعة أمتار وتُوزَّع صدقةً. |
| 4320 | 100 kola nuts — red and white mixed together | 100 حبّة كولا — حمراء وبيضاء مختلطة |
| 4321 | Three cereals — millet, rice, and Bessi | ثلاثة حبوب — الدُّخن والأرز و«بيسي» |
| 4322 | At age 40: 40 metres of kafan cloth, kept overnight then divided into 7-metre portions | عند الأربعين: 40 مترًا من قماش الكفن، تُبات ليلة ثم تُقسَّم حصصًا من 7 أمتار |
| 4323 | Argent | المال |
| 4324 | Giving guinea fowl (pintade) as sadaqah to someone who can benefit from it. | التصدّق بدجاج غينيا لمن ينتفع به. |
| 4325 | Giving three chickens of different colours — black, white and red — out as sadaqah. | التصدّق بثلاث دجاجات مختلفة الألوان — سوداء وبيضاء وحمراء. |
| 4326 | 7 portions of yogurt — even small sachets | 7 حصص من اللبن — ولو أكياسًا صغيرة |
| 4327 | Guinea fowl (pintade) | دجاج غينيا |
| 4328 | Pintade | دجاج غينيا |
| 4329 | A special form of sadaqah associated with Scorpio is having or giving a good protective ring, with stones such as rose agate or amethyst. The ring is regarded within this tradition as having protective and beneficial qualities and is also considered part of the sadaqah practice for Scorpio. | من الصدقات الخاصّة المرتبطة ببرج العقرب اقتناء خاتم حافظ حسن أو إهداؤه، بأحجار كالعقيق الوردي أو الجمشت. ويُعدّ الخاتم في هذا التراث ذا خصائص حافظة نافعة، وجزءًا من ممارسة الصدقة للعقرب. |
| 4330 | Giving a white ram or white sheep, particularly associated with favourable conditions involving Mars. | التصدّق بكبش أبيض أو شاة بيضاء، ويرتبط خاصّة بأحوال المريخ المواتية. |
| 4331 | When Mars is transiting a favourable or friendly zodiac sign, such as Aries, a red goat may be given as sadaqah. The goat is prepared and its meat divided into portions, distributed among people who can benefit from it until the meat has been given out. The emphasis is on distributing the meat, rather than keeping it for personal consumption. | حين يعبر المريخ برجًا مواتيًا أو صديقًا كالحمل، يمكن التصدّق بماعز أحمر. يُذبح ويُقسَّم لحمه حصصًا تُوزَّع على من ينتفع بها حتى يُعطى كله. والتركيز على التوزيع لا على الاستبقاء للأكل الشخصي. |
| 4332 | Giving water is an important sadaqah for Scorpio, particularly to sick or hospitalised people — for example taking drinking water to a hospital and giving it freely to patients who need it. This form is especially associated with Scorpio when beginning a new project or undertaking a journey. | التصدّق بالماء صدقة مهمّة للعقرب، لا سيما على المرضى ونزلاء المستشفيات — كأخذ ماء الشرب إلى مستشفى وإعطائه مجّانًا للمرضى المحتاجين. وترتبط هذه الصورة خاصّة بالعقرب عند بدء مشروع جديد أو سفر. |
| 4333 | Giving rice and fish together as a single sadaqah, both uncooked (raw), distributed to people or families who can benefit from them. | التصدّق بالأرز والسمك معًا صدقةً واحدة، نيّئين، على أشخاص أو أسر ينتفعون بهما. |
| 4334 | Tuesday is particularly associated with Scorpio because of its connection with Mars, the planetary ruler of the sign, and can be chosen when Mars is in a favourable or neutral transit. Sunday may also be considered, particularly when the Sun is in a favourable condition. The planetary condition should be considered when selecting the timing according to the tradition. | يرتبط يوم الثلاثاء خاصّة بالعقرب لصلته بالمريخ حاكم البرج، ويمكن اختياره حين يكون عبور المريخ مواتيًا أو محايدًا. ويمكن أيضًا اعتبار يوم الأحد، لا سيما حين تكون الشمس في حال مواتية. وينبغي مراعاة حال الكوكب عند اختيار التوقيت وفق التراث. |
| 4335 | Protective ring — rose agate or amethyst | خاتم حافظ — عقيق وردي أو جمشت |
| 4336 | White ram or sheep | كبش أو شاة بيضاء |
| 4337 | Water — especially to sick or hospitalised people | الماء — لا سيما للمرضى ونزلاء المستشفيات |
| 4338 | Rice and fish — given together, uncooked | الأرز والسمك — معًا، نيّئين |
| 4339 | Special occasions: beginning a project or travelling | مناسبات خاصّة: بدء مشروع أو السفر |
| 4340 | Sagittarius is considered a sign for which sadaqah is particularly important and should be given regularly. Unlike some signs that have specific items associated with their sadaqah, Sagittarius has a more open form: a person may give whatever they sincerely wish to give, provided it benefits another person. | يُعدّ برج القوس برجًا للصدقة فيه أهمية خاصّة، وينبغي أن تُعطى بانتظام. وخلافًا لبروج لها أشياء محدّدة، صدقة القوس أوسع: يعطي المرء ما يريد بإخلاص ما دام ينفع غيره. |
| 4341 | Giving nine pieces of bread, distributed to people who are in need or to anyone who can benefit from it. | التصدّق بتسعة أرغفة خبز، تُوزَّع على المحتاجين أو كل من ينتفع بها. |
| 4342 | Preparing three bowls of laakh — a Wolof-style porridge traditionally prepared with a fermented or sour dairy component such as yogurt — and giving them to people who can benefit from the food. | إعداد ثلاثة صحون من «لاخ» — عصيدة على طريقة الولوف تُعدّ تقليديًا مع لبن حامض أو مخمّر كالزبادي — وإعطاؤها لمن ينتفع بالطعام. |
| 4343 | Giving a single-coloured ram, particularly a white ram, as sadaqah to someone who can benefit from it. | التصدّق بكبش ذي لون واحد، لا سيما الأبيض، لمن ينتفع به. |
| 4344 | Sagittarius has a broad range of possible sadaqah. A person may give whatever they are able and willing to give. The important principle is to give sincerely and for the benefit of another person. | لبرج القوس نطاق واسع من الصدقة. يعطي المرء ما يقدر عليه ويرغب فيه. والمبدأ المهمّ الإخلاص ونفع الغير. |
| 4345 | Assistance to people in need | إعانة المحتاجين |
| 4346 | Other beneficial forms of charity | صور نافعة أخرى من الصدقة |
| 4347 | Thursday is considered a particularly suitable day for giving Sagittarius-related sadaqah. Where possible, give on Thursday while maintaining the intention of sincere charity and seeking blessing and ease. | يُعدّ يوم الخميس مناسبًا خاصّة لصدقة برج القوس. وإن أمكن فتصدّق يوم الخميس مع نيّة الصدقة الخالصة وطلب البركة والتيسير. |
| 4348 | 3 bowls of laakh with yogurt | 3 صحون «لاخ» باللبن |
| 4349 | One-coloured white ram | كبش أبيض ذو لون واحد |
| 4350 | Any sincere and beneficial sadaqah | أي صدقة صادقة نافعة |
| 4351 | Sagittarius is traditionally regarded as a sign that benefits from frequent and generous sadaqah, so regular charity is emphasised | يُعدّ القوس تقليديًا برجًا ينتفع بكثرة الصدقة وسخائها، فيُؤكَّد على انتظامها |
| 4352 | Giving rice and millet according to measurements connected to the person's age and body weight: rice in kilograms corresponding to the person's age, millet in kilograms corresponding to the person's body weight. The rice and millet may be distributed little by little until the entire amount has been given out, to individuals, families, or people in need. | التصدّق بالأرز والدُّخن بمقادير مرتبطة بعمر الشخص ووزنه: الأرز بالكيلوغرام بقدر العمر، والدُّخن بالكيلوغرام بقدر الوزن. ويمكن توزيعهما شيئًا فشيئًا حتى يُعطى المقدار كله، على أفراد أو أسر أو محتاجين. |
| 4353 | Giving a single-coloured ram, a white ram particularly associated with this sadaqah. This is described in the tradition as a particularly powerful sadaqah, and some people who follow this practice may experience it symbolically through dreams, such as dreaming that they are giving away a ram. | التصدّق بكبش ذي لون واحد، والأبيض مرتبط خاصّة بهذه الصدقة. وتوصف في التراث بأنها صدقة قوية، وقد يراها بعض من يمارسها رمزيًا في المنام، كأن يرى أنه يتصدّق بكبش. |
| 4354 | Giving kafan, the white cloth used to shroud a deceased Muslim before burial. The sadaqah may consist of providing the cloth needed for someone's burial. | التصدّق بالكفن، القماش الأبيض الذي يُكفَّن به الميّت المسلم. ويمكن أن تكون الصدقة تقديم القماش اللازم لدفن أحد. |
| 4355 | A family preparing for a burial | أسرة تستعدّ لدفن |
| 4356 | A mosque or community | مسجد أو مجتمع |
| 4357 | Someone who cannot afford the burial shroud | من لا يقدر على ثمن الكفن |
| 4358 | People responsible for assisting with funeral arrangements | القائمون على تجهيز الجنائز |
| 4359 | Giving cowries, known in Wolof as petaw — the small white cowrie shells traditionally used for decoration and in various cultural and spiritual practices. This form of sadaqah is considered special and sensitive within the tradition. | التصدّق بالودع، المسمّى بالولوف «بيتاو» — الأصداف البيضاء الصغيرة المستعملة تقليديًا للزينة وفي ممارسات ثقافية وروحية متنوّعة. وتُعدّ هذه الصدقة خاصّة وحسّاسة في التراث. |
| 4360 | Labourers | العمّال |
| 4361 | Casual workers | العمّال المؤقّتون |
| 4362 | Cleaners | عمّال النظافة |
| 4363 | The assistance can be given regularly or whenever the family needs support. This is regarded as a particularly meaningful form of sadaqah because it supports both the widow and the children who depend on her. | يمكن تقديم العون بانتظام أو كلّما احتاجت الأسرة. ويُعدّ هذا من أعظم صور الصدقة معنى لأنه يعين الأرملة والأطفال الذين يعتمدون عليها. |
| 4364 | Providing food or household necessities | تقديم الطعام أو لوازم البيت |
| 4365 | Helping with children's expenses | الإعانة في نفقات الأطفال |
| 4366 | Assisting with other essential needs | الإعانة في حاجات أساسية أخرى |
| 4367 | Important Guidance — Cowries / Petaw | إرشاد مهمّ — الودع / «بيتاو» |
| 4368 | Anyone intending to give petaw/cowries as sadaqah should seek guidance from a knowledgeable and trusted spiritual authority who understands the practice. According to the tradition being documented, this sadaqah may be considered capable of helping to open pathways and make matters easier, but it should not be undertaken casually. The practice is therefore regarded as one requiring proper guidance and understanding before giving it as sadaqah. | من ينوي التصدّق بالودع فليطلب الإرشاد من مرجع روحي عالم موثوق يفهم هذه الممارسة. ووفق التراث الموثَّق قد تُعدّ هذه الصدقة معينة على فتح الطرق وتيسير الأمور، لكن لا ينبغي فعلها باستخفاف. فهي ممارسة تتطلّب إرشادًا وفهمًا صحيحين قبل التصدّق بها. |
| 4369 | Rice and millet | الأرز والدُّخن |
| 4370 | A white, single-coloured ram | كبش أبيض ذو لون واحد |
| 4371 | Kafan (burial shroud) | الكفن |
| 4372 | Cowries / petaw, with proper guidance | الودع / «بيتاو»، بإرشاد صحيح |
| 4373 | Helping labourers and low-income workers | إعانة العمّال وذوي الدخل المحدود |
| 4374 | The practices above are regarded within this tradition as forms of secret or special sadaqah for Capricorn. The sadaqah should be given discreetly and sincerely, with the intention of benefiting another person rather than seeking recognition. | تُعدّ الممارسات أعلاه في هذا التراث صورًا من صدقة السرّ أو الصدقة الخاصّة لبرج الجدي. وينبغي أن تُعطى بكتمان وإخلاص، بنيّة نفع الغير لا طلب الثناء. |
| 4375 | A primary form of sadaqah associated with al-Dalw is giving 100 kola nuts — white, red, or a combination. This sadaqah can be performed monthly, or every three months. The 100 kola nuts are then distributed as sadaqah. | من أهمّ صور الصدقة المرتبطة ببرج الدلو التصدّق بمئة حبّة كولا — بيضاء أو حمراء أو مزيجًا منهما. ويمكن فعلها كل شهر أو كل ثلاثة أشهر، ثم تُوزَّع صدقةً. |
| 4376 | Helping a community, group, or voluntary organisation. Support may be financial, material, or practical. | إعانة مجتمع أو جماعة أو منظّمة تطوّعية، ماليًا أو ماديًا أو عمليًا. |
| 4377 | A local community | مجتمع محلّي |
| 4378 | A charitable group | جماعة خيرية |
| 4379 | A masjid | مسجد |
| 4380 | A group serving people in need | جماعة تخدم المحتاجين |
| 4381 | Giving guinea fowl (pintade) or chicken as sadaqah to someone who can benefit from it. | التصدّق بدجاج غينيا أو دجاج لمن ينتفع به. |
| 4382 | Giving three chickens of different colours — black, red and white — out as sadaqah. | التصدّق بثلاث دجاجات مختلفة الألوان — سوداء وحمراء وبيضاء. |
| 4383 | Community or group support — a voluntary group, community, masjid, or similar organisation | دعم مجتمع أو جماعة — جماعة تطوّعية أو مجتمع أو مسجد أو نحوه |
| 4384 | Guinea fowl (pintade) or chicken | دجاج غينيا أو دجاج |
| 4385 | Three-coloured chickens — black, red and white | دجاج بثلاثة ألوان — أسود وأحمر وأبيض |
| 4386 | A primary form of sadaqah associated with al-Ḥūt is giving fish. A particularly recommended amount is 12 fish, given as sadaqah to people who can benefit from them. | من أهمّ صور الصدقة المرتبطة ببرج الحوت التصدّق بالسمك، والمقدار المستحبّ خاصّة اثنتا عشرة سمكة تُعطى لمن ينتفع بها. |
| 4387 | This may be performed when a person has an important project or undertaking: take seven chickens, prepare and cook them, and distribute the prepared food as sadaqah — giving it to people in need, such as a poor family, and continuing until the food has been completely given out. The purpose is to provide food and benefit to people who are in need. | يمكن فعل هذا حين يكون للمرء مشروع أو أمر مهمّ: تُؤخذ سبع دجاجات فتُطبخ ويُوزَّع الطعام صدقةً — على المحتاجين كأسرة فقيرة — حتى يُعطى كله. والغاية إطعام المحتاجين ونفعهم. |
| 4388 | The food sadaqah may particularly be given in the evening, around the time when people would normally have dinner, an evening meal, or tea or other evening refreshments. The food should be distributed to people who can benefit from it, especially those experiencing financial hardship or food insecurity. | يمكن إعطاء صدقة الطعام خاصّة في المساء، قرب وقت العشاء أو الشاي ونحوه. ويُوزَّع على من ينتفع به، لا سيما من يعانون ضيقًا ماليًا أو نقصًا في الغذاء. |
| 4389 | Helping someone experiencing mental or emotional difficulties. The intention is to reduce their hardship and provide compassionate assistance. | إعانة من يمرّ بصعوبات نفسية أو عاطفية. والنيّة تخفيف ضيقه وتقديم عون رحيم. |
| 4390 | Providing financial assistance | تقديم عون مالي |
| 4391 | Supporting them during a difficult period | مساندته في مرحلة صعبة |
| 4392 | Offering practical assistance | تقديم عون عملي |
| 4393 | Helping them access appropriate support | مساعدته على الوصول إلى الدعم المناسب |
| 4394 | Helping a person who is engaged in spiritual or religious activity. Assistance may be financial or practical, depending on the person's needs. | إعانة شخص منشغل بعمل روحي أو ديني، ماليًا أو عمليًا بحسب حاجته. |
| 4395 | A spiritual practitioner | صاحب ممارسة روحية |
| 4396 | Someone involved in spiritual activities | منشغل بالأنشطة الروحية |
| 4397 | Someone who provides spiritual guidance or related services | من يقدّم إرشادًا روحيًا أو خدمات متّصلة به |
| 4398 | The sadaqah should be given sincerely for the benefit of others. The food, fish, or other assistance is distributed to people who can genuinely benefit from it, particularly those experiencing poverty or hardship. | ينبغي أن تُعطى الصدقة بإخلاص لنفع الآخرين. فالطعام أو السمك أو غيرهما يُوزَّع على من ينتفع به حقًّا، لا سيما الفقراء وأهل الضيق. |
| 4399 | The Light - Source of all illumination and guidance | النور - مصدر كل إنارة وهداية |
| 4400 | The Guide - Who leads to truth | الهادي - الذي يهدي إلى الحقّ |
| 4401 | The Greatest - Supreme in majesty | الكبير - العظيم في جلاله |
| 4402 | Divine Illumination and Clarity | الإنارة والوضوح |
| 4403 | Leadership and Authority | القيادة والسلطة |
| 4404 | Spiritual Radiance | الإشراق الروحي |
| 4405 | Truth and Authenticity | الحقّ والصدق |
| 4406 | Vitality and Life Force | الحيوية وقوة الحياة |
| 4407 | Conscious Awareness | الوعي اليقظ |
| 4408 | Public speaking and presentations | الخطابة والعروض |
| 4409 | Spiritual illumination practices | ممارسات الإنارة الروحية |
| 4410 | Dhikr of An-Nūr (100x recommended) | ذكر «يا نور» (100 مرّة مستحبّة) |
| 4411 | Study of sacred texts | دراسة النصوص المقدّسة |
| 4412 | Decision-making requiring wisdom | القرارات التي تتطلّب حكمة |
| 4413 | Secretive or deceptive activities | الأعمال السرّية أو المخادعة |
| 4414 | Hiding from responsibility | التهرّب من المسؤولية |
| 4415 | Avoiding difficult truths | تجنّب الحقائق الصعبة |
| 4416 | Dishonest dealings | المعاملات غير الأمينة |
| 4417 | The Sun hour is when divine light most easily penetrates the veils of the heart. Use it for seeking truth and clarity. | ساعة الشمس وقت يسهل فيه على النور أن ينفذ إلى حجب القلب. فاستعملها لطلب الحقّ والوضوح. |
| 4418 | Al-Būnī emphasized the Sun hour as optimal for spiritual illumination and receiving divine guidance. | أكّد البوني أن ساعة الشمس أنسب للإنارة الروحية وتلقّي الهداية. |
| 4419 | Divine Revelation | الوحي |
| 4420 | The Quran swears by the Sun, indicating its significance in divine creation and as a sign of Allah's power. | أقسم القرآن بالشمس، دلالةً على شأنها في الخلق وآيةً على قدرة الله. |
| 4421 | In Islamic tradition, the Sun (Ash-Shams) represents divine light and knowledge. The Prophet Muhammad ﷺ compared the scholars to "lamps in the darkness," echoing solar symbolism. Sunday (Yawm al-Aḥad) is named after the Sun and is considered auspicious for beginning important spiritual practices. | في التراث الإسلامي تمثّل الشمس النور والعلم. وقد شبّه النبي ﷺ العلماء بالمصابيح في الظلمة. ويوم الأحد يرتبط بالشمس ويُعدّ مناسبًا لبدء الممارسات الروحية المهمّة. |
| 4422 | A student studies Quran during Sun hour and experiences unusual clarity in understanding | طالب يدرس القرآن في ساعة الشمس فيجد وضوحًا غير معتاد في الفهم |
| 4423 | A leader makes a difficult but just decision during Sun hour | قائد يتّخذ قرارًا صعبًا عادلًا في ساعة الشمس |
| 4424 | Someone seeking guidance performs dhikr of An-Nūr 100x and receives clear insight | طالب هداية يذكر «يا نور» 100 مرّة فينال بصيرة واضحة |
| 4425 | Ilm (Knowledge) - Divine and Sacred Knowledge | العلم - العلم الإلهي المقدّس |
| 4426 | Nūr al-Qalb (Light of the Heart) | نور القلب |
| 4427 | The Subtle One - Gentle, Kind, and All-Perceiving | اللطيف - الرفيق الرحيم الخبير |
| 4428 | The Most Merciful - Eternally Compassionate | الرحيم - دائم الرحمة |
| 4429 | Emotional Wisdom and Intuition | الحكمة العاطفية والحدس |
| 4430 | Receptivity to Divine Messages | التهيّؤ للمعاني الإلهية |
| 4431 | Nurturing and Compassion | الرعاية والرحمة |
| 4432 | Cycles of Growth and Renewal | دورات النموّ والتجدّد |
| 4433 | Subtle Spiritual Perception | الإدراك الروحي اللطيف |
| 4434 | Connection to the Unseen | الصلة بالغيب |
| 4435 | Family matters and nurturing | شؤون الأسرة والرعاية |
| 4436 | Dhikr of Al-Laṭīf (129x recommended) | ذكر «يا لطيف» (129 مرّة مستحبّة) |
| 4437 | Seeking mercy and forgiveness | طلب الرحمة والمغفرة |
| 4438 | Gentle spiritual practices | ممارسات روحية لطيفة |
| 4439 | Connecting with feminine divine qualities | التخلّق بصفات الرحمة والحنان |
| 4440 | Harsh or aggressive actions | الأعمال القاسية أو العدوانية |
| 4441 | Forcing emotional issues | فرض المسائل العاطفية |
| 4442 | Ignoring intuitive guidance | تجاهل الإلهام الباطن |
| 4443 | Overly rational approaches to spiritual matters | المناهج العقلانية المفرطة في الأمور الروحية |
| 4444 | The Moon hour is blessed for those seeking divine mercy. The subtle light of the Moon reveals what the harsh Sun might hide. | ساعة القمر مباركة لطالبي رحمة الله. فنور القمر اللطيف يكشف ما قد تخفيه الشمس الحادّة. |
| 4445 | Ibn 'Arabī taught that lunar energy facilitates subtle spiritual perception and emotional healing. | علّم ابن عربي أن الطاقة القمرية تيسّر الإدراك الروحي اللطيف وشفاء النفس. |
| 4446 | The Quran emphasizes the Moon's cycles as divine signs, teaching about spiritual growth and renewal. | يؤكّد القرآن أن أطوار القمر آيات، تعلّم النموّ الروحي والتجدّد. |
| 4447 | The Moon (Al-Qamar) has special significance in Islam, determining the Islamic calendar (Hijri). The Prophet Muhammad ﷺ was said to have split the Moon as a miracle. Monday (Yawm al-Ithnayn), the Moon's day, is blessed as the day of the Prophet's birth and is recommended for fasting. | للقمر شأن خاصّ في الإسلام، فبه يُحدَّد التقويم الهجري. ومن معجزات النبي ﷺ انشقاق القمر. ويوم الاثنين يوم وُلد فيه النبي ﷺ ويُستحبّ صيامه. |
| 4448 | A mother performs dhikr of Al-Laṭīf during Moon hour and finds patience with her children | أمّ تذكر «يا لطيف» في ساعة القمر فتجد صبرًا مع أولادها |
| 4449 | Someone seeking forgiveness makes du'a during Moon hour and feels divine mercy | طالب مغفرة يدعو في ساعة القمر فيشعر برحمة الله |
| 4450 | A spiritual seeker has a profound dream after Moon hour meditation | سالك يرى رؤيا عميقة بعد تأمّل في ساعة القمر |
| 4451 | Luṭf (Subtlety and Gentleness) | اللطف |
| 4452 | Barakah (Divine Blessing) | البركة |
| 4453 | Qalb (Heart - Spiritual Center) | القلب - المركز الروحي |
| 4454 | Divine Knowledge | العلم الإلهي |
| 4455 | Mental Clarity | صفاء الذهن |
| 4456 | Mercury hour opens the mind to divine knowledge | ساعة عطارد تفتح الذهن للعلم |
| 4457 | Classical Tradition | التراث الكلاسيكي |
| 4458 | Traditional | تقليدي |
| 4459 | Mercury represents sacred knowledge ('Ilm) in Islamic tradition. | يمثّل عطارد العلم المقدّس في التراث الإسلامي. |
| 4460 | Studying Quran during Mercury hour enhances comprehension | دراسة القرآن في ساعة عطارد تعين على الفهم |
| 4461 | 'Ilm (Knowledge) | العلم |
| 4462 | Ḥikmah (Wisdom) | الحكمة |
| 4463 | Seeking provision | طلب الرزق |
| 4464 | Harsh decisions | القرارات القاسية |
| 4465 | Venus hour is blessed for love and beauty | ساعة الزهرة مباركة للمحبّة والجمال |
| 4466 | Sufi Tradition | التراث الصوفي |
| 4467 | Venus cultivates divine love | الزهرة تنمّي المحبّة الإلهية |
| 4470 | Venus represents divine beauty (Jamāl) and Friday is the holiest day. | تمثّل الزهرة الجمال، ويوم الجمعة أفضل الأيام. |
| 4471 | Couples reconcile during Venus hour | زوجان يتصالحان في ساعة الزهرة |
| 4472 | Rizq (Provision) | الرزق |
| 4473 | Divine Strength | القوة الإلهية |
| 4474 | Willpower | قوة الإرادة |
| 4475 | Gentle matters | الأمور اللطيفة |
| 4476 | Mars hour gives spiritual strength | ساعة المريخ تمنح قوة روحية |
| 4477 | Mars provides courage | المريخ يمنح الشجاعة |
| 4478 | Mars represents jihad (spiritual struggle) in Islamic tradition. | يمثّل المريخ مجاهدة النفس في التراث الإسلامي. |
| 4479 | Quwwah (Strength) | القوة |
| 4480 | Ṣabr (Patience) | الصبر |
| 4481 | Expansion | الاتساع |
| 4482 | Generosity | الكرم |
| 4483 | Fortune | الحظّ |
| 4484 | Seeking blessings | طلب البركات |
| 4485 | Restriction | التقييد |
| 4486 | Withholding | الإمساك |
| 4487 | Stinginess | البخل |
| 4488 | Jupiter hour opens doors of provision | ساعة المشتري تفتح أبواب الرزق |
| 4489 | Jupiter brings abundance | المشتري يجلب الوفرة |
| 4490 | Jupiter represents divine expansion and Thursday is blessed for seeking knowledge. | يمثّل المشتري الاتساع، ويوم الخميس مبارك لطلب العلم. |
| 4491 | Starting business during Jupiter hour brings success | بدء التجارة في ساعة المشتري يجلب التوفيق |
| 4492 | Karam (Generosity) | الكرم |
| 4493 | Barakah (Blessing) | البركة |
| 4494 | Solitude | الخلوة |
| 4495 | Celebration | الاحتفال |
| 4496 | Saturn hour is for deep wisdom and contemplation | ساعة زحل للحكمة العميقة والتأمّل |
| 4497 | Saturn teaches patience | زحل يعلّم الصبر |
| 4498 | Saturn represents divine wisdom (Ḥikmah) and the importance of patience in spiritual growth. | يمثّل زحل الحكمة وأهمية الصبر في النموّ الروحي. |
| 4499 | Deep meditation during Saturn hour yields profound insights | التأمّل العميق في ساعة زحل يثمر بصائر عميقة |
| 4500 | Bold and energetic | جريء نشيط |
| 4501 | Fast-moving and decisive | سريع الحركة حاسم |
| 4502 | Confident and direct | واثق مباشر |
| 4503 | Natural initiator | مبادر بطبعه |
| 4504 | Gets things done quickly | ينجز الأمور بسرعة |
| 4505 | High energy and drive | طاقة واندفاع عاليان |
| 4506 | Can become impatient with slower processes | قد ينفد صبره مع العمليات البطيئة |
| 4507 | May react too quickly without reflection | قد يتفاعل بسرعة دون تروٍّ |
| 4508 | Risk of burnout from constant activity | خطر الإنهاك من النشاط الدائم |
| 4509 | Can overlook details in rush to complete | قد يغفل التفاصيل في عجلته للإنجاز |
| 4510 | May struggle with repetitive tasks | قد يجد صعوبة في المهامّ المتكرّرة |
| 4511 | Take short breaks to cool down | خذ استراحات قصيرة لتهدأ |
| 4512 | Schedule downtime for rest | خصّص وقتًا للراحة |
| 4513 | Sports training and coaching | التدريب الرياضي |
| 4514 | Event management | إدارة الفعاليات |
| 4515 | Slow-paced environments with little variety | البيئات البطيئة قليلة التنوّع |
| 4516 | Roles requiring extreme patience and detailed precision | الأدوار التي تتطلّب صبرًا شديدًا ودقّة مفصّلة |
| 4517 | Fire types thrive in dynamic, fast-paced environments where they can lead, initiate, and see quick results. | يزدهر أصحاب النار في البيئات الحيوية السريعة التي يقودون فيها ويبادرون ويرون نتائج سريعة. |
| 4518 | Cold & Wet | بارد رطب |
| 4519 | Emotional and intuitive | عاطفي حدسي |
| 4520 | Patient and supportive | صبور داعم |
| 4521 | Caring and empathetic | راعٍ متعاطف |
| 4522 | Sensitive to surroundings | حسّاس لمحيطه |
| 4523 | Patient and persistent | صبور مثابر |
| 4524 | Creative and imaginative | مبدع واسع الخيال |
| 4525 | Can absorb negativity from others | قد يمتصّ سلبية الآخرين |
| 4526 | May overthink and get stuck in emotions | قد يفرط في التفكير ويعلق في مشاعره |
| 4527 | Risk of taking on too many others' problems | خطر تحمّل مشكلات الآخرين أكثر من اللازم |
| 4528 | Can become drained in harsh environments | قد يُستنزف في البيئات القاسية |
| 4529 | Set healthy boundaries with others | ضع حدودًا صحّية مع الآخرين |
| 4530 | Create calm, peaceful spaces | اصنع مساحات هادئة مطمئنّة |
| 4531 | Practice saying no when needed | تدرّب على قول لا عند الحاجة |
| 4532 | Avoid absorbing others' emotions | تجنّب امتصاص مشاعر الآخرين |
| 4533 | Healthcare and nursing | الرعاية الصحّية والتمريض |
| 4534 | Teaching and education | التعليم والتربية |
| 4535 | Counseling and therapy | الإرشاد والعلاج النفسي |
| 4536 | UX research and design | بحوث تجربة المستخدم وتصميمها |
| 4537 | Childcare and early education | رعاية الأطفال والتعليم المبكر |
| 4538 | HR and employee wellbeing | الموارد البشرية ورفاه الموظّفين |
| 4539 | Aggressive, cutthroat workplaces | أماكن العمل العدوانية الشرسة |
| 4540 | Roles with constant conflict and confrontation | الأدوار ذات الصراع والمواجهة الدائمين |
| 4541 | Water types excel in nurturing, supportive roles where empathy and patience are valued. | يتفوّق أصحاب الماء في أدوار الرعاية والسند حيث يُقدَّر التعاطف والصبر. |
| 4542 | Curious and talkative | فضولي كثير الكلام |
| 4543 | Communicative and social | تواصلي اجتماعي |
| 4544 | Loves learning and ideas | يحبّ التعلّم والأفكار |
| 4545 | Adaptable and flexible | متكيّف مرن |
| 4546 | Excellent communicator | متواصل ممتاز |
| 4547 | Fast learner and adapter | سريع التعلّم والتكيّف |
| 4548 | Creative problem solver | مبدع في حلّ المشكلات |
| 4549 | Thrives in social settings | يزدهر في الأجواء الاجتماعية |
| 4550 | Can become scattered or unfocused | قد يتشتّت أو يفقد التركيز |
| 4551 | May start many things without finishing | قد يبدأ أشياء كثيرة ولا يتمّها |
| 4552 | Risk of anxiety from overthinking | خطر القلق من فرط التفكير |
| 4553 | May struggle with routine and structure | قد يجد صعوبة في الروتين والتنظيم |
| 4554 | Practice grounding activities | مارس أنشطة التجذّر |
| 4555 | Data and business analysis | تحليل البيانات والأعمال |
| 4556 | Writing and journalism | الكتابة والصحافة |
| 4557 | Content creation and blogging | صناعة المحتوى والتدوين |
| 4558 | Design and creative services | التصميم والخدمات الإبداعية |
| 4559 | Teaching and training | التعليم والتدريب |
| 4560 | Highly repetitive, non-creative tasks | المهامّ المتكرّرة غير الإبداعية |
| 4561 | Environments with zero flexibility or variety | البيئات الخالية من المرونة أو التنوّع |
| 4562 | Air types thrive in dynamic, communicative roles that value ideas, learning, and connection. | يزدهر أصحاب الهواء في الأدوار الحيوية التواصلية التي تقدّر الأفكار والتعلّم والتواصل. |
| 4563 | Grounded and stable | متجذّر مستقرّ |
| 4564 | Patient and methodical | صبور منهجي |
| 4565 | Practical and organized | عملي منظّم |
| 4566 | Excellent follow-through | متابعة ممتازة حتى الإتمام |
| 4567 | Dependable and trustworthy | موثوق أمين |
| 4568 | Calm under pressure | هادئ تحت الضغط |
| 4569 | May get stuck in routine or comfort zone | قد يعلق في الروتين أو منطقة الراحة |
| 4570 | Risk of becoming too rigid | خطر التصلّب المفرط |
| 4571 | May need extra motivation to start | قد يحتاج إلى دافع إضافي للبدء |
| 4572 | Mix routine with variety | امزج الروتين بالتنوّع |
| 4573 | Set gentle goals for change | ضع أهدافًا لطيفة للتغيير |
| 4574 | Accounting and finance operations | عمليات المحاسبة والمالية |
| 4575 | HR operations and administration | عمليات الموارد البشرية والإدارة |
| 4576 | Skilled trades (carpentry, plumbing, electrical) | الحِرف الماهرة (النجارة، السباكة، الكهرباء) |
| 4577 | Archive management and documentation | إدارة الأرشيف والتوثيق |
| 4578 | Chaotic, unstructured early-stage startups | الشركات الناشئة الفوضوية غير المنظّمة |
| 4579 | Roles requiring constant rapid change | الأدوار التي تتطلّب تغيّرًا سريعًا دائمًا |
| 4580 | Earth types excel in structured, stable environments where reliability and thoroughness are valued. | يتفوّق أصحاب التراب في البيئات المنظّمة المستقرّة حيث تُقدَّر الموثوقية والإتقان. |
| 4581 | The Ram - Initiative and new beginnings | الحمل - المبادرة والبدايات الجديدة |
| 4582 | Spring Equinox | الاعتدال الربيعي |
| 4583 | The Bull - Stability and material mastery | الثور - الثبات وإتقان المادة |
| 4584 | Patience, perseverance, groundedness | الصبر والمثابرة والتجذّر |
| 4585 | The Twins - Duality and communication | الجوزاء - الثنائية والتواصل |
| 4586 | The Crab - Protection and nurturing | السرطان - الحماية والرعاية |
| 4587 | Summer Solstice | الانقلاب الصيفي |
| 4588 | Nobility, generosity, radiance | النُّبل والكرم والإشراق |
| 4589 | The Maiden - Purity and service | السنبلة - الطهارة والخدمة |
| 4590 | The Scales - Balance and harmony | الميزان - التوازن والانسجام |
| 4591 | The Archer - Quest for truth and expansion | القوس - طلب الحقّ والاتساع |
| 4592 | Wisdom-seeking, optimism, faith | طلب الحكمة والتفاؤل والإيمان |
| 4593 | Winter Solstice | الانقلاب الشتوي |
| 4594 | The Water-Bearer - Innovation and community | الدلو - الابتكار والمجتمع |
| 4595 | The Fish - Transcendence and compassion | الحوت - السموّ والرحمة |
| 4596 | Mysticism, empathy, dissolution of ego | التصوّف والتعاطف وفناء الأنا |
| 4597 | Mutable water, completing the cycle in divine unity | ماء ذو جسدين يُتمّ الدورة في التوحيد |
| 4598 | Divine radiance, leadership, vitality, nobility | الإشراق والقيادة والحيوية والنُّبل |
| 4599 | Al-Nūr (The Light) | النور |
| 4600 | At sunrise or solar noon | عند الشروق أو الزوال |
| 4601 | Masculine, diurnal, benefic | مذكّر، نهاري، سعد |
| 4602 | Rulership, authority, life force | الحكم والسلطة وقوة الحياة |
| 4603 | Kings, fathers, spiritual leaders | الملوك والآباء والقادة الروحيون |
| 4604 | Receptivity, intuition, emotional depth, nurturing | التلقّي والحدس والعمق العاطفي والرعاية |
| 4605 | Feminine, nocturnal, benefic | مؤنّث، ليلي، سعد |
| 4606 | Emotions, cycles, subconscious | العواطف والدورات والباطن |
| 4607 | Mothers, common people, the soul | الأمّهات وعامّة الناس والروح |
| 4608 | Iron | الحديد |
| 4609 | Hot & Dry (Extreme) | حارّ يابس (شديد) |
| 4610 | Masculine, nocturnal, malefic (transformative) | مذكّر، ليلي، نحس (محوِّل) |
| 4611 | Quicksilver (Mercury) | الزئبق |
| 4612 | Variable (adapts to neighbors) | متغيّر (يتكيّف مع ما يجاوره) |
| 4613 | Knowledge, communication, intellect, sacred writing | العلم والتواصل والعقل والكتابة المقدّسة |
| 4614 | Wednesday mornings, ideal for study | صباح الأربعاء، مثالي للدراسة |
| 4615 | Neutral, convertible, benefic when well-placed | محايد ممتزج، سعد إذا حسن موضعه |
| 4616 | Scholars, merchants, scribes, students | العلماء والتجّار والكتّاب والطلاب |
| 4617 | Tin | القصدير |
| 4618 | Hot & Moist (Moderate) | حارّ رطب (معتدل) |
| 4619 | Wisdom, expansion, generosity, divine grace | الحكمة والاتساع والكرم والفضل |
| 4620 | Thursday before sunset, especially for blessings | الخميس قبل الغروب، لا سيما للبركات |
| 4621 | Masculine, diurnal, benefic (great fortune) | مذكّر، نهاري، سعد (السعد الأكبر) |
| 4622 | Copper | النحاس |
| 4623 | Cold & Moist (Moderate) | بارد رطب (معتدل) |
| 4624 | Beauty, harmony, love, divine attraction | الجمال والانسجام والمحبّة والجاذبية |
| 4625 | Cold & Dry (Extreme) | بارد يابس (شديد) |
| 4626 | Discipline, patience, divine wisdom through trials | الانضباط والصبر والحكمة عبر الابتلاء |
| 4627 | Saturday evenings, for patience and endurance | مساء السبت، للصبر والتحمّل |
| 4628 | Masculine, diurnal, malefic (teaching through difficulty) | مذكّر، نهاري، نحس (يعلّم بالشدّة) |
| 4629 | Time, karma, structure, limitations | الزمن والجزاء والبنية والحدود |
| 4630 | Elders, ascetics, those who endure | الشيوخ والزهّاد وأهل الصبر |
| 4631 | The Initiator (Al-Mubtadiʾ) | المبتدئ |
| 4632 | Tawbah (Repentance) | التوبة |
| 4633 | Pioneering spirit | روح الريادة |
| 4634 | Originality | الأصالة |
| 4635 | Overcoming ego (nafs) | مجاهدة النفس |
| 4636 | To lead with integrity and inspire others to their own path | أن تقود بنزاهة وتُلهم الآخرين طريقهم |
| 4637 | The Peacemaker (Al-Muṣāliḥ) | المصالح |
| 4638 | Wara' (Scrupulousness) | الورع |
| 4639 | Indecision | التردّد |
| 4640 | Hypersensitivity | فرط الحساسية |
| 4641 | Passivity | السلبية |
| 4642 | The Creator (Al-Khallāq) | الخلّاق |
| 4643 | Zuhd (Asceticism) | الزهد |
| 4644 | Joy | الفرح |
| 4645 | Scattered talents | مواهب مبعثرة |
| 4646 | Difficulty completing projects | صعوبة إتمام المشاريع |
| 4647 | To express oneself freely and bring beauty to the world | أن تعبّر عن نفسك بحرية وتجلب الجمال إلى العالم |
| 4648 | The Builder (Al-Bānī) | الباني |
| 4649 | Sabr (Patience) | الصبر |
| 4650 | Dullness | الفتور |
| 4651 | To create lasting systems that serve humanity | أن تقيم أنظمة دائمة تخدم الناس |
| 4655 | The Freedom Seeker (Al-Ḥurr) | طالب الحرية (الحرّ) |
| 4656 | Tawakkul (Trust) | التوكّل |
| 4657 | Versatility | تعدّد المواهب |
| 4658 | Restlessness | القلق |
| 4659 | Irresponsibility | عدم المسؤولية |
| 4660 | Escapism | الهروب |
| 4661 | Agitation | الاضطراب |
| 4662 | To teach adaptability and embrace divine will | أن تعلّم التكيّف والرضا بقضاء الله |
| 4663 | Freedom to experience life fully and authentically | حرية عيش الحياة كاملة بصدق |
| 4664 | The Nurturer (Al-Rāʿī) | الراعي |
| 4665 | Meddling | التدخّل |
| 4666 | Controlling tendencies | الميل إلى التحكّم |
| 4667 | To heal and harmonize through compassionate service | أن تشفي وتؤلّف بالخدمة الرحيمة |
| 4668 | The Seeker (Al-Ṭālib) | الطالب |
| 4669 | Neptune (Spiritual) / Moon (Traditional) | نبتون (روحي) / القمر (تقليدي) |
| 4670 | Tafakkur (Contemplation) | التفكّر |
| 4671 | Spirituality | الروحانية |
| 4672 | Introspection | محاسبة النفس |
| 4673 | Discernment | التمييز |
| 4674 | Skepticism | الشكّ |
| 4675 | Moodiness | تقلّب المزاج |
| 4676 | To uncover divine mysteries and teach spiritual truths | أن تكشف الأسرار وتعلّم الحقائق الروحية |
| 4677 | To understand the deeper mysteries of existence | أن تفهم أسرار الوجود الأعمق |
| 4678 | The Master (Al-Sayyid) | السيّد |
| 4679 | Abundance | الوفرة |
| 4680 | Imbalanced power | اختلال القوة |
| 4681 | Materialism | المادية |
| 4682 | Hardness | القسوة |
| 4683 | Insensitivity | قلّة الإحساس |
| 4684 | To master material and spiritual realms | أن تُتقن عالمي المادة والروح |
| 4685 | The Humanitarian (Al-Insānī) | الإنساني |
| 4686 | Universality | الشمول |
| 4687 | Selflessness | الإيثار |
| 4688 | Accepting endings | تقبّل الخواتيم |
| 4689 | Impersonal distance | البُعد غير الشخصي |
| 4690 | To complete cycles and serve the collective | أن تُتمّ الدورات وتخدم الجماعة |
| 4691 | The Illuminator (Al-Munīr) | المنير |
| 4692 | Kashf (Unveiling) | الكشف |
| 4693 | Spiritual insight | البصيرة الروحية |
| 4694 | Charisma | الجاذبية |
| 4695 | To illuminate the path for others through spiritual wisdom | أن تنير الطريق للآخرين بالحكمة الروحية |
| 4696 | The Master Builder (Al-Muhandis al-Aʿẓam) | البنّاء الأعظم |
| 4697 | Fanāʾ (Annihilation in Divine) | الفناء |
| 4698 | Visionary power | قوة الرؤية |
| 4699 | Large-scale impact | أثر واسع النطاق |
| 4700 | To manifest divine vision into physical reality | أن تحوّل الرؤية إلى واقع ملموس |
| 4701 | The Master Teacher (Al-Muʿallim al-Akbar) | المعلّم الأكبر |
| 4702 | Baqāʾ (Remaining in Divine) | البقاء |
| 4703 | Universal love | المحبّة الشاملة |
| 4704 | Embodied wisdom | الحكمة المتجسّدة |
| 4705 | To heal and guide humanity toward unity with the Divine | أن تشفي الناس وترشدهم إلى التوحيد |
| 4706 | Enhanced Life Path Analysis | تحليل مسار الحياة الموسَّع |
| 4707 | Your Core Life Purpose | غاية حياتك الأساسية |
| 4708 | Your Core Path | مسارك الأساسي |
| 4709 | Your Inner Desires | رغباتك الباطنة |
| 4710 | What truly motivates and fulfills you deep down | ما يحرّكك ويرضيك حقًّا في العمق |
| 4711 | What Fulfills You | ما يرضيك |
| 4712 | Your Outer Self | ذاتك الظاهرة |
| 4713 | Your Purpose | غايتك |
| 4714 | Power Number | عدد القوة |
| 4715 | Numbers 11, 22, and 33 carry special spiritual significance | للأعداد 11 و22 و33 دلالة روحية خاصّة |
| 4716 | Number Colors & Meanings | ألوان الأعداد ومعانيها |
| 4717 | Balance & Partnership | التوازن والشراكة |
| 4718 | Creativity & Expression | الإبداع والتعبير |
| 4719 | Wisdom & Spirituality | الحكمة والروحانية |
| 4720 | Power & Success | القوة والنجاح |
| 4721 | Completion & Compassion | الإتمام والرحمة |
| 4722 | Intuition & Illumination | الحدس والإنارة |
| 4723 | Life Path Interpretation | تفسير مسار الحياة |
| 4724 | Synthesis & Integration | التركيب والتكامل |
| 4725 | How It All Fits Together | كيف يتكامل كل شيء |
| 4726 | Your Current Life Chapter | فصل حياتك الحالي |
| 4727 | The spiritual theme of this period in your life | الموضوع الروحي لهذه المرحلة من حياتك |
| 4728 | What Truly Fulfills You | ما يرضيك حقًّا |
| 4729 | Your Spiritual Connection | صلتك الروحية |
| 4730 | Pinnacles & Challenges | القمم والتحدّيات |
| 4731 | Life Stages & Turning Points | مراحل الحياة ونقاط التحوّل |
| 4732 | Peak of capability and establishment | ذروة القدرة والاستقرار |
| 4733 | Wisdom (Ḥikmah) | الحكمة |
| 4734 | Integration of experience into understanding | تحويل التجربة إلى فهم |
| 4735 | Service (Khidmah) | الخدمة |
| 4736 | Contribution to family and community | الإسهام في الأسرة والمجتمع |
| 4737 | Creating lasting impact and inheritance | صنع أثر وإرث باقيين |
| 4738 | Transcendence and spiritual elevation | السموّ والارتقاء الروحي |
| 4739 | Wara' | الورع |
| 4740 | Sabr | الصبر |
| 4741 | Trust in Divine | التوكّل على الله |
| 4742 | Rida | الرضا |
| 4743 | Contentment | القناعة |
| 4744 | Tafakkur | التفكّر |
| 4745 | Muraqabah | المراقبة |
| 4746 | Watchfulness | اليقظة |
| 4747 | Mahabba | المحبّة |
| 4748 | Neptune | نبتون |
| 4749 | Divine Illumination, Clarity, Guidance | الإنارة والوضوح والهداية |
| 4750 | Reciting An-Nūr brings clarity to the heart and illuminates the path ahead. The Sun hour channels divine light. | ذكر «يا نور» يجلي القلب وينير الطريق. وساعة الشمس تحمل معنى النور. |
| 4751 | Surah Ash-Shams 91:1 | سورة الشمس 91:1 |
| 4752 | Allah takes an oath by the sun, highlighting its role as a source of divine light and guidance in creation. | أقسم الله بالشمس، إبرازًا لدورها مصدرًا للنور والهداية في الخلق. |
| 4753 | How can you illuminate the path for others today? | كيف تنير الطريق للآخرين اليوم؟ |
| 4754 | The Sun represents the divine light of certainty (yaqīn) that dispels all darkness of doubt. | تمثّل الشمس نور اليقين الذي يبدّد ظلمات الشكّ. |
| 4755 | Recite An-Nūr (100x) seeking clarity. Make important decisions with confidence. | اذكر «يا نور» (100 مرّة) طالبًا الوضوح، واتّخذ قراراتك المهمّة بثقة. |
| 4756 | Gentle Grace, Subtlety, Inner Wisdom | اللطف والرقّة والحكمة الباطنة |
| 4757 | Al-Laṭīf opens subtle spiritual perception and emotional wisdom. The Moon hour nurtures receptivity. | اسم اللطيف يفتح الإدراك الروحي اللطيف والحكمة العاطفية. وساعة القمر تنمّي التلقّي. |
| 4758 | Surah Ya-Sin 36:39 | سورة يس 36:39 |
| 4759 | The lunar phases teach us about divine timing, cycles, and the wisdom of gradual change. | تعلّمنا أطوار القمر التوقيت الإلهي والدورات وحكمة التغيّر التدريجي. |
| 4760 | What phase of life are you in? What needs to grow or release? | في أي طور من الحياة أنت؟ ما الذي ينبغي أن ينمو أو يُترك؟ |
| 4761 | The Moon governs the realm of the soul (nafs) and teaches the wisdom of receptivity and emotional intelligence. | يحكم القمر عالم النفس ويعلّم حكمة التلقّي والذكاء العاطفي. |
| 4762 | Emotional healing, intuition, reflection, nurturing relationships | شفاء النفس، الحدس، التأمّل، رعاية العلاقات |
| 4763 | Recite Al-Laṭīf (129x) for gentle guidance. Practice deep listening and empathy. | اذكر «يا لطيف» (129 مرّة) طلبًا للهداية اللطيفة، وتدرّب على الإصغاء العميق والتعاطف. |
| 4764 | Avoid emotional overwhelm. Balance feelings with wisdom (ḥikma). | تجنّب الإرهاق العاطفي، ووازن المشاعر بالحكمة. |
| 4765 | Divine Knowledge, Communication, Mental Clarity | العلم والتواصل وصفاء الذهن |
| 4766 | Al-ʿAlīm enhances reception of divine knowledge and clear communication. Mercury hour opens the mind. | اسم العليم يعين على تلقّي العلم ووضوح التواصل. وساعة عطارد تفتح الذهن. |
| 4767 | Surah Al-Baqarah 2:269 | سورة البقرة 2:269 |
| 4768 | Mercury hours are blessed for seeking divine wisdom (ḥikma) through study, communication, and learning. | ساعات عطارد مباركة لطلب الحكمة بالدراسة والتواصل والتعلّم. |
| 4769 | What knowledge is calling to you? How will you use it for good? | أي علم يدعوك؟ وكيف تستعمله في الخير؟ |
| 4770 | Mercury governs the pen and tongue - the instruments of knowledge transmission. Use them with truth (ḥaqq). | يحكم عطارد القلم واللسان — أداتي نقل العلم. فاستعملهما بالحقّ. |
| 4771 | Recite Al-ʿAlīm (150x) before study. Engage in meaningful dialogue and written reflection. | اذكر «يا عليم» (150 مرّة) قبل الدراسة، وانخرط في حوار نافع وتأمّل مكتوب. |
| 4772 | Avoid gossip (ghība) and empty speech. Knowledge without action is burden. | تجنّب الغيبة واللغو. فالعلم بلا عمل حِمل. |
| 4773 | Divine Love, Beauty, Harmony, Abundance | المحبّة والجمال والانسجام والوفرة |
| 4774 | Al-Wadūd cultivates divine love and appreciation of beauty. Venus hour opens the heart to harmony. | اسم الودود ينمّي المحبّة وتذوّق الجمال. وساعة الزهرة تفتح القلب للانسجام. |
| 4775 | Surah Al-Buruj 85:14 | سورة البروج 85:14 |
| 4776 | Venus reflects divine love (maḥabba) that forgives, nurtures, and creates beauty in all relationships. | تعكس الزهرة معنى المحبّة التي تغفر وترعى وتصنع الجمال في كل العلاقات. |
| 4777 | Who needs your love and kindness today? How can you create beauty? | من يحتاج إلى محبّتك ولطفك اليوم؟ وكيف تصنع الجمال؟ |
| 4778 | Venus teaches that true beauty (jamāl) is inseparable from goodness (iḥsān). Love without righteousness is illusion. | تعلّم الزهرة أن الجمال الحقّ لا ينفكّ عن الإحسان. والمحبّة بلا صلاح وهم. |
| 4779 | Recite Al-Wadūd (20x) with a heart full of love. Create beauty and harmony in your surroundings. | اذكر «يا ودود» (20 مرّة) بقلب ممتلئ محبّة، واصنع الجمال والانسجام في محيطك. |
| 4780 | Avoid vanity and superficiality. True love serves the beloved, not the self. | تجنّب الغرور والسطحية. فالمحبّة الحقّة تخدم المحبوب لا النفس. |
| 4781 | Divine Strength, Courage, Decisive Action | القوة والشجاعة والعمل الحاسم |
| 4782 | Al-Qawiyy provides divine strength and courage for righteous action. Mars hour empowers the will. | اسم القوي يمنح القوة والشجاعة للعمل الصالح. وساعة المريخ تقوّي الإرادة. |
| 4783 | The Capable | القادر |
| 4784 | Surah Al-Anfal 8:66 | سورة الأنفال 8:66 |
| 4785 | Mars hours empower righteous struggle (jihād an-nafs) with divine strength when paired with patience (ṣabr). | ساعات المريخ تقوّي جهاد النفس إذا اقترنت بالصبر. |
| 4786 | What challenge requires your courage today? Where must you take a stand? | أي تحدٍّ يتطلّب شجاعتك اليوم؟ وأين يجب أن تثبت؟ |
| 4787 | Mars governs the spiritual warrior (mujāhid) who battles the ego, not others. True strength is self-mastery. | يحكم المريخ المجاهد الذي يجاهد نفسه لا الناس. فالقوة الحقّة ضبط النفس. |
| 4788 | Traditional Islamic spiritual warfare teachings | تعاليم مجاهدة النفس في التراث الإسلامي |
| 4789 | Classical Sufi tradition | التراث الصوفي الكلاسيكي |
| 4790 | Overcoming obstacles, physical activity, assertiveness, protection, righteous action | تجاوز العقبات، النشاط البدني، الحزم، الحماية، العمل الصالح |
| 4791 | Recite Al-Qawiyy (116x) for inner strength. Take decisive action on important matters. | اذكر «يا قوي» (116 مرّة) طلبًا للقوة الباطنة، واعمل بحسم في الأمور المهمّة. |
| 4792 | Avoid aggression and anger (ghaḍab). Channel strength with wisdom and mercy. | تجنّب العدوان والغضب، ووجّه القوة بالحكمة والرحمة. |
| 4793 | Divine Expansion, Generosity, Boundless Wisdom | الاتساع والكرم والحكمة الواسعة |
| 4794 | Al-Wāsiʿ opens doors to divine abundance and expansive blessings. Jupiter hour brings growth. | اسم الواسع يفتح أبواب الوفرة والبركات الواسعة. وساعة المشتري تجلب النموّ. |
| 4795 | Surah Al-Baqarah 2:261 | سورة البقرة 2:261 |
| 4796 | Jupiter hours multiply blessings (barakah) when actions are done with generosity (karam) and pure intention. | ساعات المشتري تضاعف البركة إذا كانت الأعمال بكرم ونيّة خالصة. |
| 4797 | What can you expand with generosity? Where should growth occur? | ما الذي يمكنك توسيعه بالكرم؟ وأين ينبغي أن يكون النموّ؟ |
| 4798 | Jupiter represents divine generosity that knows no bounds. Give freely, for expansion comes through service. | يمثّل المشتري معنى الكرم الذي لا حدّ له. فأعطِ بسخاء، فالسعة تأتي بالخدمة. |
| 4799 | Classical Islamic wisdom on abundance | الحكمة الإسلامية الكلاسيكية في الوفرة |
| 4800 | Traditional teaching | تعليم تقليدي |
| 4801 | Recite Al-Wāsiʿ (136x) seeking expansion. Give generously in charity (ṣadaqah). | اذكر «يا واسع» (136 مرّة) طالبًا السعة، وتصدّق بسخاء. |
| 4802 | Avoid overextension and false optimism. Growth must be grounded in reality. | تجنّب التمدّد المفرط والتفاؤل الزائف. فالنموّ ينبغي أن يتجذّر في الواقع. |
| 4803 | Supreme Wisdom, Patience, Divine Order | الحكمة العليا والصبر والنظام الإلهي |
| 4804 | Al-Ḥakīm teaches divine wisdom through patience and structure. Saturn hour brings deep understanding. | اسم الحكيم يعلّم الحكمة بالصبر والنظام. وساعة زحل تجلب الفهم العميق. |
| 4805 | Surah Al-Asr 103:3 | سورة العصر 103:3 |
| 4806 | What requires your patience and persistence? What wisdom is being revealed? | ما الذي يتطلّب صبرك ومثابرتك؟ وأي حكمة تتكشّف؟ |
| 4807 | Saturn is the teacher of time (zamān) and consequence. It shows that all actions ripen in their season. | زحل معلّم الزمان والعاقبة، يُري أن كل عمل ينضج في أوانه. |
| 4808 | Traditional Islamic understanding of time and wisdom | الفهم الإسلامي التقليدي للزمن والحكمة |
| 4809 | Classical tradition | التراث الكلاسيكي |
| 4810 | Recite Al-Ḥakīm (78x) seeking wisdom. Embrace discipline and commitment to worthy goals. | اذكر «يا حكيم» (78 مرّة) طالبًا الحكمة، والتزم بالانضباط في الأهداف الجديرة. |
| 4811 | Avoid rigidity and fear. Structure serves growth, not limitation. | تجنّب التصلّب والخوف. فالنظام يخدم النموّ لا التقييد. |
| 4812 | Exceptional alignment! Your spiritual essence ( | انسجام استثنائي! جوهرك الروحي ( |
| 4813 | ruler) resonates powerfully with | الحاكم) يتناغم بقوة مع طاقة |
| 4814 | energy. This is an optimal time for important spiritual work. | . وهذا وقت مناسب للعمل الروحي المهمّ. |
| 4815 | Engage in deep spiritual practices | انشغل بممارسات روحية عميقة |
| 4816 | Perform dhikr of your resonant Divine Name | اذكر الاسم الحسن الموافق لك |
| 4817 | Initiate significant projects | ابدأ مشاريع مهمّة |
| 4818 | Strong alignment. Your | انسجام قوي. جوهرك |
| 4819 | essence harmonizes well with | ينسجم جيدًا مع طاقة |
| 4820 | energy. Good time for spiritual growth and meaningful actions. | . وقت جيد للنموّ الروحي والأعمال ذات المعنى. |
| 4835 | Pursue spiritual learning | اطلب العلم الروحي |
| 4836 | Practice regular dhikr | داوِم على الذكر |
| 4837 | Seek beneficial knowledge | اطلب العلم النافع |
| 4838 | Moderate alignment. | انسجام معتدل. |
| 4839 | Maintain regular spiritual practices | حافظ على ممارساتك الروحية المنتظمة |
| 4840 | Reflect and contemplate | تأمّل وتفكّر |
| 4841 | Challenging alignment. | انسجام صعب. |
| 4842 | energy opposes your | طاقة تعاكس |
| 4843 | essence. Time for patience, reflection, and gentle practices. | جوهرك. وقت للصبر والتأمّل والممارسات اللطيفة. |
| 4844 | Practice patience and sabr | تحلَّ بالصبر |
| 4845 | Gentle dhikr and remembrance | ذكر لطيف |
| 4846 | Avoid major decisions | تجنّب القرارات الكبرى |
| 4847 | Rest and spiritual contemplation | الراحة والتأمّل الروحي |
| 4848 | Moderate Days | أيام معتدلة |
| 4849 | MILESTONE | إنجاز |
| 4850 | STREAK | سلسلة |
| 4851 | First Step | الخطوة الأولى |
| 4852 | Logged your first dhikr | سجّلت أول ذكر لك |
| 4853 | 100 Dhikr | 100 ذكر |
| 4854 | Completed 100 total dhikr | أتممت 100 ذكر إجمالًا |
| 4855 | 1,000 Dhikr | 1,000 ذكر |
| 4856 | Completed 1,000 total dhikr | أتممت 1,000 ذكر إجمالًا |
| 4857 | 10,000 Dhikr | 10,000 ذكر |
| 4858 | Completed 10,000 total dhikr | أتممت 10,000 ذكر إجمالًا |
| 4859 | 100,000 Dhikr | 100,000 ذكر |
| 4860 | Completed 100,000 total dhikr - Legendary! | أتممت 100,000 ذكر إجمالًا - ما شاء الله! |
| 4861 | 3-Day Streak | سلسلة 3 أيام |
| 4862 | Maintained a 3-day streak | حافظت على سلسلة 3 أيام |
| 4863 | Maintained a 7-day streak | حافظت على سلسلة 7 أيام |
| 4864 | Maintained a 30-day streak | حافظت على سلسلة 30 يومًا |
| 4865 | Century Streak | سلسلة المئة |
| 4866 | Maintained a 100-day streak - Unstoppable! | حافظت على سلسلة 100 يوم - ما شاء الله! |
| 4867 | Goal Achiever | محقّق الهدف |
| 4868 | Completed your first challenge goal | أتممت أول هدف تحدٍّ لك |
| 4869 | Daily Champion | بطل اليوم |
| 4870 | Met your daily target | بلغت هدفك اليومي |
| 4871 | Active in 3+ challenges simultaneously | نشط في 3 تحدّيات أو أكثر في آن واحد |
| 4872 | Ramadan Complete | إتمام رمضان |
| 4873 | Completed a challenge during Ramadan | أتممت تحدّيًا في رمضان |
| 4874 | All unlocked! | فُتح الكل! |
| 4875 | Qurʾān, Sūrat Fāṭir 35:17 and Sūrat Ibrāhīm 14:20 | القرآن، سورة فاطر 35:17 وسورة إبراهيم 14:20 |
| 4876 | I seek forgiveness from Allah | أستغفر الله |
| 4877 | Allāhumma ṣalli wa sallim wa bārik ʿalā Sayyidinā Muḥammad | اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ |
| 4878 | O Allah, send blessings, peace, and grace upon our master Muḥammad. | اللهم صلِّ وسلّم وبارك على سيّدنا محمد. |
| 4879 | Fajr / Pre-dawn | الفجر / ما قبل الفجر |
| 4880 | Ẓuhr / Midday | الظهر / منتصف النهار |
| 4881 | Late Night / Tahajjud | آخر الليل / التهجّد |
| 4882 | Istighfār is most powerful during this window | الاستغفار أعظم أثرًا في هذا الوقت |
| 4883 | Ṣalawāt upon the Prophet ﷺ brings abundant blessings now | الصلاة على النبي ﷺ تجلب بركات وفيرة الآن |
| 4884 | Divine Name invocation is especially blessed now | الدعاء بالأسماء الحسنى مبارك خاصّة الآن |
| 4885 | 201 Holy Names practice invokes powerful rizq blessings | ممارسة الأسماء المئتين والواحد ترجى بها بركة الرزق |
| 4886 | Debt Relief wird after ʿIshāʾ brings miraculous financial relief | ورد قضاء الدين بعد العشاء يُرجى به تفريج الضائقة المالية |
| 4887 | Continue your personal wird during this spiritual window | واصل وردك الخاص في هذا الوقت الروحي |
| 4888 | Start a dhikr challenge for this blessed time | ابدأ تحدّي ذكر لهذا الوقت المبارك |
| 4889 | 🌟 My Spiritual Challenge on Asrār | 🌟 تحدّيي الروحي على أسرار |
| 4890 | 🔥 Streak: | 🔥 السلسلة: |
| 4891 | 🎯 Active challenges: | 🎯 التحدّيات النشطة: |
| 4892 | Join me in this spiritual journey! | انضمّ إليّ في هذه الرحلة الروحية! |
| 4893 | My Spiritual Challenge | تحدّيي الروحي |
| 4894 | 💰✨ Miraculous Debt Relief - Powerful Wird | 💰✨ ورد قضاء الدين |
| 4895 | 🌙 What seems IMPOSSIBLE for us is EFFORTLESS for Allah! | 🌙 ما يبدو مستحيلًا لنا هيّن على الله! |
| 4896 | 📿 Recite with me: | 📿 اقرأ معي: |
| 4897 | 🎯 Goal: | 🎯 الهدف: |
| 4898 | 📊 My progress: | 📊 تقدّمي: |
| 4899 | Towards financial freedom through Allah's grace... 🤲 | نحو الفرج المالي بفضل الله... 🤲 |
| 4900 | 💰 Debt Relief Wird | 💰 ورد قضاء الدين |
| 4901 | Join me in this spiritual challenge on Asrār! | انضمّ إليّ في هذا التحدّي الروحي على أسرار! |
| 4902 | 🎉 I reached | 🎉 بلغت |
| 4903 | dhikr on Asrār! | ذكرًا على أسرار! |
| 4904 | A major milestone in my spiritual journey. 🌟 | محطّة كبيرة في رحلتي الروحية. 🌟 |
| 4905 | Dhikr Reached! | تمّ بلوغ الذكر! |
| 4906 | O Allah, send blessings upon Muhammad | اللهم صلِّ على محمد |
| 4907 | O Allah, send blessings upon our Master Muhammad | اللهم صلِّ على سيّدنا محمد |
| 4908 | O Allah, send blessings upon the one described with generosity and munificence | اللهم صلِّ على الموصوف بالكرم والجود |
| 4909 | The most authentic ṣalawāt, taught by the Prophet ﷺ himself. Recited in every Ṣalāh. | أصحّ صيغ الصلاة على النبي، علّمها النبي ﷺ بنفسه، وتُقرأ في كل صلاة. |
| 4910 | Universal · All Schools | عامّة · كل المذاهب |
| 4911 | The shortest complete ṣalawāt — ideal for high-count daily dhikr sessions. | أقصر صيغة تامّة للصلاة على النبي — مثالية لجلسات الذكر اليومية الكثيرة العدد. |
| 4912 | Ṣalāt al-Fātiḥ · The Opener | صلاة الفاتح |
| 4913 | Central wird of the Tijāniyya order. Especially beloved in West African Sufi communities. | الورد المحوري في الطريقة التجانية، محبوبة خاصّة في المجتمعات الصوفية في غرب أفريقيا. |
| 4914 | Ṣalāt al-Nāriyya · Prayer of Relief | الصلاة النارية · صلاة التفريج |
| 4915 | Imam al-Qurṭubī · Also known as Ṣalāt al-Tafrijiyya | الإمام القرطبي · وتُعرف أيضًا بالصلاة التفريجية |
| 4916 | Known for alleviating difficulties. Traditionally recited 11 times for relief, or 4,444 times for major opening. | معروفة بتفريج الكروب، وتُقرأ تقليديًا 11 مرّة للفرج، أو 4444 مرّة للفتح الكبير. |
| 4917 | Shaykh ʿAbd al-Salām ibn Mashīsh · Shādhilī tradition | الشيخ عبد السلام بن مشيش · الطريقة الشاذلية |
| 4918 | The sublime prayer of Shaykh Ibn Mashīsh, spiritual guide of Imam al-Shādhilī. Widely recited in the Maghrib and West Africa. | الصلاة الجليلة للشيخ ابن مشيش، شيخ الإمام الشاذلي، وتُقرأ كثيرًا في المغرب وغرب أفريقيا. |
| 4919 | Jawharatu l-Kamāl · Jewel of Perfection | جوهرة الكمال |
| 4920 | The most exalted ṣalawāt of the Tijāniyya — recited 12 times daily in the wāẓifa. Requires respectful intention and attentiveness. | أجلّ صيغ الصلاة في الطريقة التجانية — تُقرأ 12 مرّة يوميًا في الوظيفة، وتتطلّب نيّة محترمة وحضورًا. |
| 4921 | Ṣalāt al-Mawṣūf · Described with Generosity | صلاة الموصوف بالكرم |
| 4922 | Prophetic Blessing · Traditional | صلاة نبوية · تقليدية |
| 4923 | A concise yet powerful ṣalawāt praising the Prophet ﷺ for his perfect generosity and noble character. Ideal for high-count daily practice. | صيغة موجزة قوية تثني على النبي ﷺ بكماله في الكرم ونُبل خُلقه. مثالية للممارسة اليومية الكثيرة العدد. |
| 4924 | Ṣalāt Nūr al-Qalb · Light of the Heart | صلاة نور القلب |
| 4925 | Traditional Blessing | صلاة تقليدية |
| 4926 | Ṣallā Allāhu ʿalā Muḥammadin, aṣbaḥa lil-qalbi nūruhu, wa raḥmatan lil-ʿālamīna ẓuhūruhu. | صَلَّى اللهُ عَلَى مُحَمَّدٍ، أَصْبَحَ لِلْقَلْبِ نُورُهُ، وَرَحْمَةً لِلْعَالَمِينَ ظُهُورُهُ |
| 4927 | A beautiful ṣalawāt connecting the Prophet ﷺ as light for the heart and mercy for all creation. Excellent for morning recitation. | صيغة جميلة تصل بين النبي ﷺ نورًا للقلب ورحمة للخلق. ممتازة لقراءة الصباح. |
| 4928 | O Most Merciful | يا رحيم |
| 4929 | O Provider | يا رزّاق |
| 4930 | O Ever-Forgiving | يا غفّار |
| 4931 | O Most Subtle | يا لطيف |
| 4932 | O Opener | يا فتّاح |
| 4933 | Cherno Moussa Yero Sy | شيرنو موسى يرو سي |
| 4934 | Offer a Hadiyya | قدّم هدية |
| 4935 | universal love | المحبّة الشاملة |
| 4936 | Error calculating compatibility. Please try again. | خطأ في حساب التوافق. يُرجى المحاولة مجدّدًا. |
| 4937 | Call upon Allah by the Name whose meaning matches your need | ادعُ الله بالاسم الذي يوافق معناه حاجتك |
| 4938 | Explore general astrological compatibility from birth dates | استكشف التوافق الفلكي العام من تواريخ الميلاد |
| 4939 | Calculate Another Pair | احسب ثنائيًا آخر |
| 4940 | core temperament | الطبع الأساسي |
| 4941 | Both share | كلاهما يشتركان في |
| 4942 | — an easy, instinctive rapport. | — ألفة سهلة فطرية. |
| 4943 | s can create friction without conscious effort. |  قد يصنعان احتكاكًا دون جهد واعٍ. |
| 4944 | s are independent — neither reinforcing nor clashing. |  مستقلّان — لا يقوّي أحدهما الآخر ولا يتصادمان. |
| 4945 | Strong mutual attraction — what each is drawn to matches how the other pursues connection. | انجذاب متبادل قوي — ما ينجذب إليه كلٌّ منكما يوافق طريقة الآخر في طلب القرب. |
| 4946 | A workable attraction dynamic — different styles that can still click. | انجذاب قابل للعمل — أسلوبان مختلفان يمكن أن يتوافقا. |
| 4947 | Attraction styles pull in different directions — may take deliberate effort to align. | أسلوبا الانجذاب يشدّان في اتجاهين مختلفين — قد يتطلّب التوافق جهدًا مقصودًا. |
| 4948 | is classically invoked for | يُدعى به كلاسيكيًا لـ |
| 4949 | — a direct match for this intention. | — موافقة مباشرة لهذه النيّة. |
| 4950 | is not classically tied to | لا يرتبط كلاسيكيًا بـ |
| 4951 | directly, but its meaning closely relates to it. | مباشرة، لكن معناه قريب منه. |
| 4952 | 's classical function doesn't align closely with | وظيفته الكلاسيكية لا توافق كثيرًا |
| 4953 | Ya Allah | يا الله |
| 4954 | Ya Rahman | يا رحمن |
| 4955 | Ya Raheem | يا رحيم |
| 4956 | Ya Quddus | يا قدّوس |
| 4957 | Ya Salam | يا سلام |
| 4958 | Ya Hakim | يا حكيم |
| 4959 | Ya 'Adl | يا عدل |
| 4960 | Ya Bari' | يا بارئ |
| 4961 | Ya Musawwir | يا مصوّر |
| 4962 | Ya Rafi' | يا رافع |
| 4963 | Ya Halim | يا حليم |
| 4964 | Ya Basir | يا بصير |
| 4965 | Ya Ghaffar | يا غفّار |
| 4966 | Ya Wahhab | يا وهّاب |
| 4967 | Ya Razzaq | يا رزّاق |
| 4968 | Ya Qabid | يا قابض |
| 4969 | Ya Latif | يا لطيف |
| 4970 | Ya Jami' | يا جامع |
| 4971 | Ya Khafid | يا خافض |
| 4972 | Ya Muzil | يا مذلّ |
| 4973 | Ya Jabbar | يا جبّار |
| 4974 | Ya Qahhar | يا قهّار |
| 4975 | For gentleness, subtle ease, and calming the heart. | للّطف واليسر الخفيّ وطمأنينة القلب. |
| 4976 | For mercy, ease in transitions, and emotional balance. | للرحمة واليسر في التحوّلات والتوازن العاطفي. |
| 4977 | For compassion and softness in family and home matters. | للرأفة واللين في شؤون الأسرة والبيت. |
| 4978 | Ya Wadud | يا ودود |
| 4979 | For affection, harmony, and softening of hearts. | للمودّة والانسجام وتليين القلوب. |
| 4980 | Ya 'Alim | يا عليم |
| 4981 | For clarity of mind and beneficial knowledge. | لصفاء الذهن والعلم النافع. |
| 4982 | Ya Khabir | يا خبير |
| 4983 | Thursday's planet in classical ʿIlm al-Nujūm — for remembrance, generosity, and reliance on Allah's provision. Not prediction. | كوكب الخميس في علم النجوم الكلاسيكي — للذكر والكرم والتوكّل على رزق الله. لا للتنبّؤ. |
| 4984 | For provision, barakah, and trust in Allah as Provider. | للرزق والبركة والتوكّل على الله الرزّاق. |
| 4985 | Ya Wasi' | يا واسع |
| 4986 | For spaciousness of heart and ease in what feels tight. | لسعة الصدر واليسر فيما ضاق. |
| 4987 | Ya Karim | يا كريم |
| 4988 | For generosity and noble character. | للكرم ونُبل الخُلق. |
| 4989 | For mindful reliance on Allah's care and guardianship. | للتوكّل الواعي على رعاية الله وحفظه. |
| 4990 | For forbearance and a softened heart. | للحِلم ولين القلب. |
| 4991 | Ya Muhsi | يا محصي |
| 4992 | Ya Sami' | يا سميع |
| 4993 | For turning to the All-Hearing in duʿāʾ. | للتوجّه إلى السميع بالدعاء. |
| 4994 | For humility before the Most Great and dignity without arrogance. | للتواضع للكبير والعزّة بلا كِبر. |
| 4995 | Ya 'Aziz | يا عزيز |
| 4996 | For strength with honour in righteous effort. | للقوة مع العزّة في السعي الصالح. |
| 4997 | Ya Baqi | يا باقي |
| 4998 | For steadfastness and what endures of good deeds. | للثبات وما يبقى من الأعمال الصالحة. |
| 4999 | Ya Sabur | يا صبور |
| 5000 | For wise restraint and sound judgment. | للإمساك الحكيم وسداد الحكم. |
| 5001 | For forbearance when progress feels slow. | للحِلم حين يبدو التقدّم بطيئًا. |
| 5002 | Ya Matin | يا متين |
| 5003 | For firmness, discipline, and steady resolve. | للثبات والانضباط ورسوخ العزم. |
| 5004 | When a benefic planet (Jupiter, Venus) is in dignity and transiting your area of concern, consider it a period of openness (fatḥ). Make du'ā', begin projects, and act boldly. | حين يكون كوكب سعد (المشتري أو الزهرة) في كرامة ويعبر مجال اهتمامك، فاعدده وقت انفتاح (فتح): ادعُ، وابدأ المشاريع، واعمل بجرأة. |
| 5005 | These are periods to exercise extra patience and caution in matters of health, finances, and conflicts. Double your Isti'ādhah (seeking refuge in Allah) and du'ā'. | هذه أوقات لمزيد من الصبر والحذر في الصحّة والمال والخلافات. أكثِر من الاستعاذة بالله والدعاء. |
| 5006 | Thursday is the most blessed day for spiritual elevation, wealth-seeking, and expansion. Make du'ā' for rizq (sustenance). Begin long-term projects. Seek knowledge, visit scholars, and perform generous acts of sadaqah. Thursday night (eve of Friday) is especially blessed — use it for extra worship. | الخميس من أبرك الأيام للارتقاء الروحي وطلب الرزق والسعة. ادعُ بالرزق، وابدأ المشاريع الطويلة، واطلب العلم، وزُر العلماء، وتصدّق بسخاء. وليلة الجمعة مباركة خاصّة — فاغتنمها بمزيد من العبادة. |
| 5012 | This is THE most important layer for marriage and long-term partnership. Here's why: • Your mother's emotional patterns shaped how you give and receive love • This layer determines if you feel "safe" together emotionally • High scores here mean you intuitively understand each other's needs • Low scores mean you'll need conscious work to meet each other's emotional needs Many couples with great surface chemistry struggle because this layer isn't harmonious. Knowing this in advance helps you prepare. | هذه أهمّ طبقة للزواج والشراكة الطويلة. ولماذا: • أنماط أمك العاطفية شكّلت طريقة عطائك للمحبّة وتلقّيها • هذه الطبقة تحدّد هل تشعران «بالأمان» العاطفي معًا • الدرجات العالية تعني أنكما تفهمان حاجات بعضكما بالفطرة • الدرجات المنخفضة تعني الحاجة إلى تعلّم عاطفي واعٍ |
| 5013 | Unlocks your Ascendant/Descendant — otherwise skipped, since it needs a precise time to mean anything. | يفتح الطالع/الغارب — وإلّا يُتخطّى، لأنه يحتاج إلى وقت دقيق ليكون ذا معنى. |
| 5014 | Descendant | الغارب |
| 5015 | Compatibility Analysis | تحليل التوافق |
| 5016 | We analyze your relationship using ancient Islamic numerology and name wisdom | نحلّل علاقتكما بعلم الأعداد الإسلامي القديم وحكمة الأسماء |
| 5017 | Combined compatibility from all three analysis methods - higher is better! | التوافق المجمّع من طرق التحليل الثلاث - الأعلى أفضل! |
| 5018 | Overall Quality | الجودة العامّة |
| 5019 | Relationship Potential | إمكانات العلاقة |
| 5020 | How naturally compatible you are based on your names and energies | مدى توافقكما الطبيعي بحسب أسمائكما وطاقاتكما |
| 5021 | How your spiritual energies align and complement each other at a deep level | كيف تنسجم طاقاتكما الروحية وتتكامل في العمق |
| 5022 | How We Analyzed You | كيف حلّلنا |
| 5023 | Tips for Your Relationship | نصائح لعلاقتكما |
| 5024 | What the different score ranges mean | معنى نطاقات الدرجات المختلفة |
| 5025 | Strong natural harmony - you complement each other beautifully | انسجام طبيعي قوي - تتكاملان تكاملًا جميلًا |
| 5026 | Great potential - minor adjustments will create harmony | إمكانات كبيرة - تعديلات صغيرة تصنع الانسجام |
| 5027 | Requires effort - understanding and compromise are key | يتطلّب جهدًا - التفاهم والتنازل هما المفتاح |
| 5028 | Needs work - focus on communication and mutual respect | يحتاج إلى عمل - ركّزا على التواصل والاحترام المتبادل |
| 5029 | See how we calculated this | اعرض طريقة الحساب |
| 5030 | Hide calculation details | أخفِ تفاصيل الحساب |
| 5031 | Analyze Another Pair | حلّل ثنائيًا آخر |
| 5032 | Passionate & Dynamic | شغوف حيوي |
| 5033 | Emotional & Intuitive | عاطفي حدسي |
| 5034 | Practical & Grounded | عملي متجذّر |
| 5035 | Intellectuel & Social | فكري اجتماعي |
| 5036 | Provision & Sustenance | الرزق والقوت |
| 5037 | Rizq, livelihood, and material need | الرزق والمعيشة والحاجة المادية |
| 5038 | Recovery from illness, physical or spiritual | الشفاء من المرض، بدنيًا أو روحيًا |
| 5039 | Relief from Distress | تفريج الكرب |
| 5040 | Anxiety, grief, or a heavy heart | القلق أو الحزن أو ثقل القلب |
| 5041 | Clarity in a decision — alongside istikhāra, not instead of it | الوضوح في قرار — مع الاستخارة لا بدلًا منها |
| 5042 | Marriage & Love | الزواج والمحبّة |
| 5043 | Pardon | العفو |
| 5044 | Repentance (tawba) and seeking pardon | التوبة وطلب العفو |
| 5045 | Strength & Patience | القوة والصبر |
| 5046 | Endurance through hardship | الصبر على الشدّة |
| 5047 | Ease & Removing Obstacles | التيسير وإزالة العوائق |
| 5048 | Opening a way through a difficult affair | فتح طريق في أمر صعب |
| 5049 | Knowledge & Understanding | العلم والفهم |
| 5050 | Increase in beneficial knowledge | الزيادة في العلم النافع |
| 5051 | Quran 20:114 | القرآن 20:114 |
| 5052 | This resonance flows naturally — practice with this Name tends to bring swift, tangible ease. A wonderful one to return to often. | هذا الرنين ينساب طبيعيًا — والممارسة بهذا الاسم تجلب غالبًا يسرًا سريعًا ملموسًا. اسم جميل للرجوع إليه كثيرًا. |
| 5053 | This resonance is workable but benefits from consistency — steady, regular practice over time is what unlocks its full effect. | هذا الرنين قابل للعمل لكنه ينتفع بالمداومة — فالممارسة الثابتة المنتظمة مع الوقت هي ما يفتح أثره كاملًا. |
| 5054 | This resonance calls for extra patience and discipline — approach this Name's practice with sincere intention, and consider pairing it with istighfār. | هذا الرنين يتطلّب مزيدًا من الصبر والانضباط — فأقبل على الذكر بهذا الاسم بنيّة صادقة، واقرنه بالاستغفار. |
| 5055 | The opening verse, foundation of all recitation. 786 is the most famous sacred number in Islamic tradition. | الآية الأولى، أساس كل تلاوة. و786 أشهر الأعداد المميّزة في التراث الإسلامي. |
| 5056 | Ya-Sin (Arabic letters) | يس (حروف عربية) |
| 5057 | mysterious letters | الحروف المقطّعة |
| 5058 | Ayat al-Kursi (Throne Verse) - the greatest verse for protection and divine connection. | آية الكرسي - أعظم آية للحفظ والصلة بالله. |
| 5059 | ayat al-kursi | آية الكرسي |
| 5060 | Surah Al-Ikhlas (Sincerity) - equals one-third of the Quran in reward. Affirms divine unity. | سورة الإخلاص - تعدل ثلث القرآن في الأجر، وتقرّر التوحيد. |
| 5061 | The healing verse - affirms the Quran's power to heal spiritual and physical ailments. | آية الشفاء - تقرّر أن في القرآن شفاءً لأمراض الروح والبدن. |
| 5062 | Repeated 31 times in Surah Ar-Rahman. A reminder of divine blessings and gratitude. | تتكرّر 31 مرّة في سورة الرحمن، تذكيرًا بالنِّعم والشكر. |
| 5063 | A verse of comfort and reassurance about divine justice and mercy in trials. | آية طمأنينة وتسلية عن عدل الله ورحمته في الابتلاء. |
| 5064 | A promise of relief after difficulty. The verse appears twice in Surah Ash-Sharh for emphasis. | وعد بالفرج بعد الشدّة، وتتكرّر الآية مرّتين في سورة الشرح للتأكيد. |
| 5065 | Beginning of the verse of divine power and sovereignty. Used for seeking provision and authority. | مطلع آية القدرة والملك، يُقرأ لطلب الرزق والتمكين. |
| 5066 | The prayer of the youths of the cave (Ashab al-Kahf) seeking divine mercy and guidance. | دعاء فتية الكهف طلبًا للرحمة والرشد. |
| 5067 | Umar | عمر |
| 5068 | Husayn | حسين |
| 5069 | Zaynab | زينب |
| 5070 | Sharaf | الشرف |
| 5071 | Bayt | البيت |
| 5072 | Muthallatha | مثلّثة |
| 5073 | Wajh | الوجه |
| 5074 | Musharraf | مشرَّف |
| 5075 | Camphor + White Sandalwood | الكافور + الصندل الأبيض |
| 5076 | For calm, receptivity, and inner quiet | للسكينة والتلقّي والهدوء الباطن |
| 5077 | Yellow Sandalwood + Frankincense | الصندل الأصفر + اللبان |
| 5078 | For courage and steady resolve | للشجاعة وثبات العزم |
| 5079 | Mastic + Frankincense | المصطكى + اللبان |
| 5080 | For abundance, expansion, and barakah | للوفرة والسعة والبركة |
| 5081 | Frankincense + Liquid Storax | اللبان + الميعة السائلة |
| 5082 | For grounding, patience, and steadiness | للتجذّر والصبر والثبات |
| 5083 | For clarity and spiritual illumination | للوضوح والإنارة الروحية |
| 5084 | For inner strength and resilience | للقوة الباطنة والجلَد |
| 5085 | O All-Knowing | يا عليم |
| 5086 | For clarity and beneficial knowledge | للوضوح والعلم النافع |
| 5087 | For provision and barakah | للرزق والبركة |
| 5088 | For harmony and softening hearts | للانسجام وتليين القلوب |
| 5089 | Universal spiritual cleansing | تطهير روحي عام |
| 5090 | Always beneficial, opens spiritual doors | نافع دائمًا، يفتح الأبواب الروحية |
| 5091 | Excellent time for | وقت ممتاز لـ |
| 5092 | Steady practice brings consistent benefit | الممارسة الثابتة تجلب نفعًا دائمًا |
| 5093 | Focus on protection and istighfār | ركّز على التحصّن والاستغفار |
| 5094 | Ishraq | الإشراق |
| 5095 | Duha | الضحى |
| 5096 | Time of divine closeness. The Prophet ﷺ said: "The two rak'ahs of Fajr are better than this world and all it contains." Seek clarity and guidance. | وقت قرب من الله. قال النبي ﷺ: «ركعتا الفجر خير من الدنيا وما فيها». فاطلب الوضوح والهداية. |
| 5097 | Midday renewal. Break from worldly affairs to reconnect with the Divine. Time for gratitude and seeking provision. | تجديد منتصف النهار. انقطع عن شؤون الدنيا لتعود إلى الله. وقت للشكر وطلب الرزق. |
| 5098 | Time of reflection. The Prophet ﷺ emphasized this prayer greatly. Review your day and prepare for evening with mindfulness. | وقت المراجعة. عظّم النبي ﷺ شأن هذه الصلاة. راجع يومك واستعدّ للمساء بحضور. |
| 5099 | Transition from light to darkness. Time to seek forgiveness and make du'a. The Prophet ﷺ said du'a is accepted at this time. | الانتقال من النور إلى الظلمة. وقت للاستغفار والدعاء. |
| 5100 | Night's serenity. Time for deep reflection and contemplation. The last prayer before sleep - end your day in remembrance. | سكينة الليل. وقت للتأمّل والتفكّر العميق. آخر صلاة قبل النوم — فاختم يومك بالذكر. |
| 5101 | Use this time for good deeds, seeking knowledge, or helping others. Every moment is an opportunity for spiritual growth. | استعمل هذا الوقت في الأعمال الصالحة أو طلب العلم أو إعانة الآخرين. فكل لحظة فرصة للنموّ الروحي. |
| 5102 | Excellent alignment! | انسجام ممتاز! |
| 5103 | prayer resonates with | تتناغم صلاة |
| 5104 | energy. This is an optimal time for spiritual work. | . وهذا وقت مناسب للعمل الروحي. |
| 5105 | Prayer time adds spiritual dimension to the | وقت الصلاة يضيف بعدًا روحيًا إلى ساعة |
| 5106 | hour. Combine worldly action with remembrance. | . اجمع بين العمل الدنيوي والذكر. |
| 5107 | The blessed time of Tahajjud! Allah descends to the lowest heaven asking "Who is calling upon Me?" Optimal for deep du'a and spiritual connection. | وقت التهجّد المبارك! ينزل ربّنا إلى السماء الدنيا فيقول: «من يدعوني فأستجيب له؟». وقت مناسب للدعاء العميق والصلة الروحية. |
| 5108 | Ishraq time! The Prophet ﷺ said this prayer has immense reward. Time of new beginnings and fresh starts. | وقت الإشراق! وقد ورد في هذه الصلاة أجر عظيم. وقت للبدايات الجديدة. |
| 5109 | Duha prayer time! A Sunnah practice that brings barakah. The Prophet ﷺ called it "the prayer of the penitent." | وقت صلاة الضحى! سنّة تجلب البركة، وسمّاها النبي ﷺ «صلاة الأوّابين». |
| 5110 | Geolocation not supported | تحديد الموقع غير مدعوم |
| 5111 | Failed to fetch location | تعذّر جلب الموقع |
| 5112 | Allah (lexicon) | الله (معجم) |
| 5113 | al-Rahman (lexicon) | الرحمن (معجم) |
| 5114 | Rahman (lexicon) | رحمن (معجم) |
| 5115 | al-Rahim (lexicon) | الرحيم (معجم) |
| 5116 | Rahim | رحيم |
| 5117 | Rahim (lexicon) | رحيم (معجم) |
| 5118 | al-Latif (lexicon) | اللطيف (معجم) |
| 5119 | Latif | لطيف |
| 5120 | Latif (lexicon) | لطيف (معجم) |
| 5121 | Hayy | حيّ |
| 5122 | Hayy (lexicon) | حيّ (معجم) |
| 5123 | al-Hayy (lexicon) | الحيّ (معجم) |
| 5124 | Qayyum | قيّوم |
| 5125 | Qayyum (lexicon) | قيّوم (معجم) |
| 5126 | al-Qayyum (lexicon) | القيّوم (معجم) |
| 5127 | Baka | بقاء |
| 5128 | Fana | فناء |
| 5129 | Musa | موسى |
| 5130 | Mohammed | محمد |
| 5131 | Opposing Energy | طاقة معاكسة |
| 5132 | The God | الله |
| 5133 | The Eternal | الباقي |
| 5134 | The Pure One | القدّوس |
| 5135 | The Certainty | الحقّ |
| 5136 | The Believer | المؤمن |
| 5137 | Fard | فرض |
| 5138 | The Grateful | الشكور |
