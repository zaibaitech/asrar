# Arabic review list

Everything below is a draft that needs native-speaker review (religious terms especially) before /ar is indexed.

## 0. Abjad system wording: Language Reviewer batch 5 (applied, Oct 2026)

Region wording: Maghribi = the Maghreb (Morocco to Libya), al-Andalus and West Africa; Mashriqi = Egypt, the Middle East and Asia. “North Africa” is no longer used for Maghribi. Arabic review (PR91-1..8) applied: «وسائر آسيا» everywhere for Mashriqi, al-Andalus last with «قديمًا», «تصنيفًا عنصريًا» (reads as ‘racist’) → «تصنيفًا خاصًا … بحسب العناصر», list punctuation in the Maghribi paragraph, «بالضبط» → «تمامًا»; the TODO marker on the ar.ts note is removed.

| Key | English | Arabic (reviewer wording, applied) |
|---|---|---|
| `abjadSystem.note` | Maghribi (the Maghreb, al-Andalus & West Africa) · Mashriqi (Egypt, the Middle East & Asia) | المغربي (المغرب العربي والأندلس وغرب أفريقيا) · المشرقي (مصر والمشرق وسائر آسيا) |
| /ar/abjad FAQ «ما هو حساب الجمل؟» and the «ما هو حساب الجُمَّل؟» section | … and so on to the last letter: shīn is 1000 in the Maghribi order (the default here); in the Mashriqi order, also available, ghayn is 1000. | وهكذا إلى آخر الحروف: الشين وقيمتها 1000 في الترتيب المغربي، وهو الترتيب الافتراضي في هذه الحاسبة، أما في الترتيب المشرقي، المتاح أيضًا، فالغين هي 1000. |
| /ar/abjad FAQ «ما الفرق بين حساب الجمل المغربي والمشرقي؟» | The two orders and the six letters that differ | هما ترتيبان تقليديان لحروف الأبجد: المشرقي المستعمل في المشرق ومصر وسائر العالم الإسلامي شرقًا، والمغربي المستعمل في المغرب العربي والأندلس قديمًا وغرب أفريقيا. ويختلفان في قيم ستة أحرف: ففي المشرقي س 60، ص 90، ش 300، ض 800، ظ 900، غ 1000، وفي المغربي ص 60، ض 90، س 300، ظ 800، غ 900، ش 1000، فقد يعطي الاسم الواحد مجموعين مختلفين… |
| /ar/abjad section «الترتيب المغربي والترتيب المشرقي» | Mashriqi in the East and Egypt; Maghribi in the Maghreb and West Africa | …الترتيب المشرقي المستعمل في المشرق ومصر، والترتيب المغربي المستعمل في المغرب العربي وغرب أفريقيا… |
| Vocalisation | ḥisāb al-jummal | «حساب الجُمَّل» vocalised once, in the first section heading; the page title stays unvocalised. |

Runtime catalog entries whose English source changed with the region fix (now in scripts/i18n/ar/manual.json; reviewed in the Arabic review, PR91-1..6): the /abjad “traditions” paragraph, the /compatibility “Which Abjad system” answer, the glossary “Abjad” and “Maghribi” definitions, and two Name Destiny learning-centre paragraphs. All now use «المغرب العربي (والأندلس) وغرب أفريقيا» and «مصر والمشرق وآسيا».

## 1. Translation keys (src/lib/i18n/ar.ts): machine drafts all reviewed (batches 4–5); 571 hand drafts
Hand drafts are marked inline with `// TODO review`; reviewed lines carry `// reviewed (Language Reviewer batch N)`.

## 2. Runtime catalog (public/i18n/ar-ui.json)

Built by `python3 scripts/i18n/ar/build_catalog.py` (see the docstring for the layer order). Oct 2026 rebuild: **9918 → 9901 entries** (after batch 5: still 9901, the orphan pre‑PR #91 Abjad-history AI draft was removed and «After Saturn…» was added).

| layer | live entries |
|---|---|
| mobile | 1461 |
| manual | 932 |
| reviewed | 1068 |
| ai | 5738 |
| mt | 691 |
| patterns | 11 |

- **No score-based auto-accept.** Machine drafts are live only if the Language Reviewer accepted them unchanged (`mt-reviewed-accepted.json`, 695 keys); corrected ones come from `reviewer-corrections.json`. Any other machine draft goes to `mt-pending.json` (currently 0) and stays English.
- Religious-term filter widened (Qur'an/ḥadīth/du'a vocabulary, Divine and Prophetic epithets, and any English gloss that sits next to an Arabic field in the religious data files). Such keys are never taken from MT; the verified Arabic from the data file (`data-ar.json`, built by `node scripts/i18n/ar/data_ar.js`) is used if nothing better exists.
- Name-database entries (lowercase latin names, e.g. `cheikh amadou`) and code fragments (`use client`, Tailwind classes) are excluded; no-op entries (value identical to the English, e.g. `EN`, `UTC`, `🇸🇳 Wave`) are dropped.
- 19 keys left the catalog: the 9 reviewer removals, 2 mojibake keys re-keyed (`🚨 Very Difficult`, `⚠️ Challenging Compatibility`; source fixed in IlmHurufPanel.tsx), 7 no-ops and `After Saturn, the cycle repeats from ♄ → … ` (unreviewed, its Arabic dropped the planet sequence; now pending). No reviewed, manual, mobile or AI entry was lost.
- Brand: «أسرارية» everywhere (the only «أسريا» was b3-981).

## 3. Language Reviewer corrections applied (Oct 2026)

| batch | corrections | of which removals |
|---|---|---|
| 1 | 228 | 6 |
| 2 | 68 | 0 |
| 3 | 668 | 3 |
| 4 | 53 | 0 |
| 5 | 55 catalog strings (rule for «عنصري», E00–E57) + 4 §5 strings; 72 ar.ts lines (39 more accepted) | 1 (orphan E44) |

Also: the AM/PM range keys `11 AM-1 PM`, `3-5 PM`, `6-8 PM`, `6-8 AM`, `7-9 PM`, `8-10 AM` follow the b1-265 rule (ص / م). Batch 4 values were also written into `src/lib/i18n/ar.ts` (54 paths, marked `// reviewed (Language Reviewer batch 4)`), so the English fallback no longer shows.

On /ar the verified Arabic is rendered directly and the English gloss is not machine-translated: ChallengeCard (quotes, badge), PropheticNamesPractice, AddChallengeModal, DivineNameCard, QuranicVerseDisplay, RestDayView, the Divine-Name resonance in IlmHurufPanel, DivineNamePicker, AllDivineNamesBrowser, DivineNameIntentionMatchesView and DivineNameConnectionView.

## 4. Qur'an text verification

Checked letter-for-letter against Tanzil *quran-simple* (api.alquran.cloud `quran-simple`, cross-checked with `quran-uthmani`). “Conventions” = only the imlāʾī sukūn / idghām-shadda marks differ.

| where | ref | status | text |
|---|---|---|---|
| catalog:Indeed, with hardship comes ease | 94:5 | EXACT | إِنَّ مَعَ الْعُسْرِ يُسْرًا |
| catalog:We said: O fire, be coolness and peace | 21:69 | EXACT | قُلْنَا يَا نَارُ كُونِي بَرْدًا وَسَلَامًا |
| catalog:Created man from clay like pottery | 55:14 | EXACT (imlāʾī sukūn/shadda conventions) | خَلَقَ الْإِنسَانَ مِن صَلْصَالٍ كَالْفَخَّارِ |
| catalog:We made every living thing from water | 21:30 | EXACT | وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ |
| catalog:We send the winds as glad tidings | 25:48 | EXACT | وَهُوَ الَّذِي أَرْسَلَ الرِّيَاحَ بُشْرًا بَيْنَ يَدَيْ رَحْمَتِهِ |
| catalog:If your water were to sink away | 67:30 | EXACT | قُلْ أَرَأَيْتُمْ إِنْ أَصْبَحَ مَاؤُكُمْ غَوْرًا |
| catalog:The winds that blow, the clouds between sky and earth | 2:164 | EXACT | وَتَصْرِيفِ الرِّيَاحِ وَالسَّحَابِ الْمُسَخَّرِ بَيْنَ السَّمَاءِ وَالْأَرْضِ |
| catalog:We send the winds to fertilize | 15:22 | EXACT | وَأَرْسَلْنَا الرِّيَاحَ لَوَاقِحَ |
| catalog:He sends the winds as bearers of good news | 30:46 | EXACT (imlāʾī sukūn/shadda conventions) | وَمِنْ آيَاتِهِ أَن يُرْسِلَ الرِّيَاحَ مُبَشِّرَاتٍ |
| catalog:And the earth He has laid for all beings | 55:10 | EXACT | وَالْأَرْضَ وَضَعَهَا لِلْأَنَامِ |
| catalog:Who made the earth a resting place | 20:53 | EXACT | الَّذِي جَعَلَ لَكُمُ الْأَرْضَ مَهْدًا |
| catalog:The earth We have spread out | 15:19 | EXACT | وَالْأَرْضَ مَدَدْنَاهَا |
| catalog:And in the sky is your provision and whatever you are promised | 51:22 | EXACT | وَفِي السَّمَاءِ رِزْقُكُمْ وَمَا تُوعَدُونَ |
| catalog:Wa fī as-samāʾi rizqukum wa mā tūʿadūn | 51:22 | EXACT | وَفِي السَّمَاءِ رِزْقُكُمْ وَمَا تُوعَدُونَ |
| catalog:Allah will bring about ease after hardship | 65:7 | EXACT | سَيَجْعَلُ اللَّهُ بَعْدَ عُسْرٍ يُسْرًا |
| catalog:Be patient, for Allah does not waste the reward | 11:115 | EXACT | وَاصْبِرْ فَإِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ |
| catalog:Hearts find rest in the remembrance of Allah. | 13:28 | EXACT | أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ |
| catalog:The dhikr of Allah is the greatest. | 29:45 | EXACT | وَلَذِكْرُ اللَّهِ أَكْبَرُ |
| catalog:Glorify Allah morning and evening. | 33:42 | EXACT | وَسَبِّحُوهُ بُكْرَةً وَأَصِيلًا |
| catalog:Embrace sacred change. Reflect: "Everything changes except the | 28:88 | EXACT | كُلُّ شَيْءٍ هَالِكٌ إِلَّا وَجْهَهُ |
| catalog:Allah will not change the condition of a people until they cha | 13:11 | EXACT (imlāʾī sukūn/shadda conventions) | إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ (الرعد 11) |
| catalog:He gives wisdom to whom He wills (2:269) | 2:269 | EXACT (imlāʾī sukūn/shadda conventions) | يُؤْتِي الْحِكْمَةَ مَن يَشَاءُ (البقرة 269) |
| catalog:This day I have perfected your religion for you (5:3) | 5:3 | EXACT | الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ (المائدة 3) |
| catalog:Say: He is Allah, the One and Only | 112:1 | EXACT | قُلْ هُوَ اللَّهُ أَحَدٌ |
| catalog:And We have enjoined upon man goodness to his parents | 46:15 | EXACT (imlāʾī sukūn/shadda conventions) | وَوَصَّيْنَا الْإِنسَانَ بِوَالِدَيْهِ إِحْسَانًا |
| catalog:So relate the stories, perhaps they will reflect | 7:176 | EXACT | فَاقْصُصِ الْقَصَصَ لَعَلَّهُمْ يَتَفَكَّرُونَ |
| catalog:And We have made the heaven a guarded canopy | 21:32 | EXACT (imlāʾī sukūn/shadda conventions) | وَجَعَلْنَا السَّمَاءَ سَقْفًا مَّحْفُوظًا |
| catalog:And We have created you in pairs | 78:8 | EXACT | وَخَلَقْنَاكُمْ أَزْوَاجًا |
| catalog:And lower to them the wing of humility out of mercy | 17:24 | EXACT | وَاخْفِضْ لَهُمَا جَنَاحَ الذُّلِّ مِنَ الرَّحْمَةِ |
| catalog:Indeed, in the creation of the heavens and earth are signs for | 3:190 | EXACT (imlāʾī sukūn/shadda conventions) | إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِّأُولِي الْأَلْبَابِ |
| catalog:And to Allah belongs the dominion of the heavens and the earth | 3:189 | EXACT | وَلِلَّهِ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ |
| catalog:And spend in the way of Allah and do not throw yourselves into | 2:195 | EXACT (imlāʾī sukūn/shadda conventions) | وَأَنفِقُوا فِي سَبِيلِ اللَّهِ وَلَا تُلْقُوا بِأَيْدِيكُمْ إِلَى التَّهْلُكَةِ |
| catalog:Allah is the Light of the heavens and the earth | 24:35 | EXACT | اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ |
| catalog:And We made from water every living thing | 21:30 | EXACT | وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ |
| catalog:Indeed, Allah is with those who are patient | 2:153 | EXACT | إِنَّ اللَّهَ مَعَ الصَّابِرِينَ |
| catalog:By the Sun and its brightness (Wa ash-shamsi wa ḍuḥāhā) - Sura | 91:1 | EXACT | وَالشَّمْسِ وَضُحَاهَا (الشمس 1) |
| catalog:And the Moon - We have determined for it phases until it retur | 36:39 | EXACT | وَالْقَمَرَ قَدَّرْنَاهُ مَنَازِلَ حَتَّىٰ عَادَ كَالْعُرْجُونِ الْقَدِيمِ (يس 39) |
| catalog:Say: He is Allah, the One (112:1) - Unity and singularity | 112:1 | EXACT | قُلْ هُوَ اللَّهُ أَحَدٌ (الإخلاص 1) - الوحدانية والتفرّد |
| catalog:And hold fast to the rope of Allah together (3:103) | 3:103 | EXACT | وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا (آل عمران 103) |
| catalog:He is the Originator of the heavens and earth (2:117) | 2:117 | EXACT | بَدِيعُ السَّمَاوَاتِ وَالْأَرْضِ (البقرة 117) |
| catalog:So set your face to the religion, as one by nature upright (30 | 30:30 | EXACT | فَأَقِمْ وَجْهَكَ لِلدِّينِ حَنِيفًا (الروم 30) |
| catalog:Allah will bring about ease after hardship (65:7) | 65:7 | EXACT | سَيَجْعَلُ اللَّهُ بَعْدَ عُسْرٍ يُسْرًا (الطلاق 7) |
| catalog:The servants of the Most Merciful are those who walk upon the  | 25:63 | EXACT | وَعِبَادُ الرَّحْمَٰنِ الَّذِينَ يَمْشُونَ عَلَى الْأَرْضِ هَوْنًا (الفرقان 63) |
| catalog:Say: Travel through the earth and observe how He began creatio | 29:20 | EXACT (imlāʾī sukūn/shadda conventions) | قُلْ سِيرُوا فِي الْأَرْضِ فَانظُرُوا كَيْفَ بَدَأَ الْخَلْقَ (العنكبوت 20) |
| catalog:And seek, through that which Allah has given you, the home of  | 28:77 | EXACT | وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ (القصص 77) |
| catalog:Light upon light. Allah guides to His light whom He wills (24: | 24:35 | EXACT (imlāʾī sukūn/shadda conventions) | نُورٌ عَلَىٰ نُورٍ ۗ يَهْدِي اللَّهُ لِنُورِهِ مَن يَشَاءُ (النور 35) |
| catalog:And We placed on earth anchors lest it shake with you (21:31) | 21:31 | EXACT (imlāʾī sukūn/shadda conventions) | وَجَعَلْنَا فِي الْأَرْضِ رَوَاسِيَ أَن تَمِيدَ بِهِمْ (الأنبياء 31) |
| catalog:And those who believe and whose families follow them in faith  | 52:21 | EXACT (imlāʾī sukūn/shadda conventions) | وَالَّذِينَ آمَنُوا وَاتَّبَعَتْهُمْ ذُرِّيَّتُهُم بِإِيمَانٍ (الطور 21) |
| catalog:By the sun and its brightness | 91:1 | EXACT | وَالشَّمْسِ وَضُحَاهَا |
| catalog:And the moon - We have determined for it phases | 36:39 | EXACT | وَالْقَمَرَ قَدَّرْنَاهُ مَنَازِلَ |
| catalog:He gives wisdom to whom He wills, and whoever has been given w | 2:269 | EXACT (imlāʾī sukūn/shadda conventions) | يُؤْتِي الْحِكْمَةَ مَن يَشَاءُ ۚ وَمَن يُؤْتَ الْحِكْمَةَ فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا |
| catalog:And He is the Forgiving, the Loving | 85:14 | EXACT | وَهُوَ الْغَفُورُ الْوَدُودُ |
| catalog:If there are among you twenty who are patient and steadfast, t | 8:65 | EXACT (imlāʾī sukūn/shadda conventions) | إِن يَكُن مِّنكُمْ عِشْرُونَ صَابِرُونَ يَغْلِبُوا مِائَتَيْنِ |
| catalog:The example of those who spend in the way of Allah is like a s | 2:261 | EXACT (imlāʾī sukūn/shadda conventions) | مَثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ |
| catalog:My Lord, increase me in knowledge. | 20:114 | EXACT | رَبِّ زِدْنِي عِلْمًا |
| catalog:Allāhu lā ilāha illā Huwa al-Ḥayyu al-Qayyūm | 2:255 | EXACT | اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ |
| catalog:Allah - there is no deity except Him, the Ever-Living, the Sus | 2:255 | EXACT | اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ |
| catalog:Say: He is Allah, the One | 112:1 | EXACT | قُلْ هُوَ اللَّهُ أَحَدٌ |
| catalog:Wa nunazzilu mina al-Qur'āni mā huwa shifā'un wa raḥmah | 17:82 | EXACT | وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ |
| catalog:And We send down from the Quran that which is healing and merc | 17:82 | EXACT | وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ |
| catalog:So which of the favors of your Lord would you deny? | 55:13 | EXACT | فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ |
| catalog:Allah does not burden a soul beyond what it can bear | 2:286 | EXACT | لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا |
| catalog:Inna ma'a al-'usri yusrā | 94:5 | EXACT | إِنَّ مَعَ الْعُسْرِ يُسْرًا |
| catalog:Say: O Allah, Owner of Sovereignty | 3:26 | EXACT | قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ |
| catalog:Our Lord, grant us mercy from Yourself | 18:10 | EXACT (imlāʾī sukūn/shadda conventions) | رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً |
| catalog﴿:And advised each other to truth and advised each other to pat | 103:3 | EXACT | وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ |
| catalog﴿:Remember Me, and I will remember you. | 2:152 | EXACT | فَاذْكُرُونِي أَذْكُرْكُمْ |
| catalog﴿:Call upon Allah by the Name whose meaning matches your need — | 7:180 | EXACT | وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا |
| catalog﴿:We have honored the children of Adam (17:70) | 17:70 | EXACT | وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ |
| catalog﴿:Night of Qadr better than 1000 months | 97:3 | EXACT (imlāʾī sukūn/shadda conventions) | لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ |
| src/constants/planetarySpirituality.ts#0 | 91:1 | EXACT | وَالشَّمْسِ وَضُحَاهَا |
| src/constants/planetarySpirituality.ts#1 | 36:39 | EXACT | وَالْقَمَرَ قَدَّرْنَاهُ مَنَازِلَ |
| src/constants/planetarySpirituality.ts#2 | 2:269 | EXACT (imlāʾī sukūn/shadda conventions) | يُؤْتِي الْحِكْمَةَ مَن يَشَاءُ ۚ وَمَن يُؤْتَ الْحِكْمَةَ فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا |
| src/constants/planetarySpirituality.ts#3 | 85:14 | EXACT | وَهُوَ الْغَفُورُ الْوَدُودُ |
| src/constants/planetarySpirituality.ts#4 | 8:65 | EXACT (imlāʾī sukūn/shadda conventions) | إِن يَكُن مِّنكُمْ عِشْرُونَ صَابِرُونَ يَغْلِبُوا مِائَتَيْنِ |
| src/constants/planetarySpirituality.ts#5 | 2:261 | EXACT (imlāʾī sukūn/shadda conventions) | مَّثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ |
| src/constants/planetarySpirituality.ts#6 | 103:3 | EXACT | وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ |
| src/features/ramadanChallenges/components/ChallengeCard.tsx#0 | 29:45 | EXACT | وَلَذِكْرُ اللَّهِ أَكْبَرُ |
| src/features/ramadanChallenges/components/ChallengeCard.tsx#1 | 2:152 | EXACT | فَاذْكُرُونِي أَذْكُرْكُمْ |
| src/features/ramadanChallenges/components/ChallengeCard.tsx#2 | 13:28 | EXACT | أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ |
| src/features/ramadanChallenges/components/ChallengeCard.tsx#3 | 33:42 | EXACT | وَسَبِّحُوهُ بُكْرَةً وَأَصِيلًا |
| src/features/ramadanChallenges/store.tsx#1 | 14:20 | EXACT | وَمَا ذَٰلِكَ عَلَى اللَّهِ بِعَزِيزٍ |
| src/features/ramadanChallenges/debtRelief1000.ts#0 | 14:20 | EXACT | وَمَا ذَٰلِكَ عَلَى اللَّهِ بِعَزِيزٍ |
| src/features/ramadanChallenges/components/AddChallengeModal.tsx#0 | 14:20 | EXACT | وَمَا ذَٰلِكَ عَلَى اللَّهِ بِعَزِيزٍ |
| src/features/ramadanChallenges/components/AddChallengeModal.tsx#1 | 14:20 | EXACT | وَمَا ذَٰلِكَ عَلَى اللَّهِ بِعَزِيزٍ                |
| src/components/divine-timing/RestDayView.tsx#0 | 94:5 | EXACT | إِنَّ مَعَ الْعُسْرِ يُسْرًا |
| src/components/divine-timing/RestDayView.tsx#1 | 51:22 | EXACT | وَفِي السَّمَاءِ رِزْقُكُمْ وَمَا تُوعَدُونَ |
| src/components/divine-timing/RestDayView.tsx#2 | 2:152 | EXACT | فَاذْكُرُونِي أَذْكُرْكُمْ |

`أَسْتَغْفِرُ اللهَ` (store.tsx) is the istighfār formula, not a quotation, so it is not listed.

## 5. The 26 machine-draft keys outside batches 1–4 (reviewed in batch 5: 22 correct, an-Nāfiʿ / aḍ-Ḍārr / al-ʿAlīm reworded, After Saturn supplied)

25 are overridden by AI/manual entries (live value shown); the last one was live and is now pending.

| key | source of live value | live value |
|---|---|---|
| The winds that blow, the clouds between sky and earth | ai | وَتَصْرِيفِ الرِّيَاحِ وَالسَّحَابِ الْمُسَخَّرِ بَيْنَ السَّمَاءِ وَالْأَرْضِ |
| We send the winds to fertilize | ai | وَأَرْسَلْنَا الرِّيَاحَ لَوَاقِحَ |
| The Source of Peace | ai | السَّلَام |
| The One whose knowledge encompasses all things, past, present, and future. | ai | الذي أحاط علمه بكل شيء، ماضيه وحاضره ومستقبله. |
| The Judge | ai | الْحَكَم |
| The Just | ai | الْعَدْل |
| The Witness | ai | الشَّهِيد |
| The Protecting Friend | ai | الْوَلِيّ |
| Recite 56 times when starting something new and seeking a strong, blessed beginning. For a shorter practice, 33 or 99 repetitions is also a widely used count. | ai | يُردَّد الاسم 56 مرّة عند ابتداء أمر جديد رجاء بداية قوية مباركة. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| The One of perfect nobility, generosity, and glory combined in absolute measure. | ai | الذي اجتمع له كمال الشرف والكرم والمجد. |
| The One | ai | الْوَاحِد |
| The Unique | ai | الْأَحَد |
| Recite 846 times for patience and trust when something you want is delayed. For a shorter practice, 33 or 99 repetitions is also a widely used count. | ai | يُردَّد الاسم 846 مرّة للصبر والثقة حين يتأخّر ما تريد. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| The Hidden | ai | الْبَاطِن |
| The Governor | ai | الْوَالِي |
| Owner of All Sovereignty | ai | مَالِكُ الْمُلْك |
| The Gatherer | ai | الْجَامِع |
| Recite 1001 times for perspective when facing hardship, trusting the wisdom behind it. For a shorter practice, 33 or 99 repetitions is also a widely used count. | ai | يُردَّد الاسم 1001 مرّة للنظر الصحيح عند الشدّة، ثقةً بالحكمة وراءها. ولوِرْدٍ أقصر، يشيع أيضًا العدد 33 أو 99. |
| The One from whom all true benefit flows, in this life and the next. | ai | الذي يصدر عنه كل نفع حقيقي في الدنيا والآخرة. |
| The Brand | manual | الوسم |
| The Unarmed | manual | الأعزل |
| The Heart | manual | قلب العقرب |
| The Sting | manual | إبرة العقرب |
| Your Burj from Your Name & Mother's Name | manual | برجك من اسمك واسم أمك |
| After Saturn, the cycle repeats from ♄ → ♃ → ♂ → ☉ → ♀ → ☿ → ☽ → ♄... | reviewed (batch 5) | بعد زحل تعود الدورة من جديد: ♄ ← ♃ ← ♂ ← ☉ ← ♀ ← ☿ ← ☽ ← ♄… |
| If your water were to sink away | ai | قُلْ أَرَأَيْتُمْ إِنْ أَصْبَحَ مَاؤُكُمْ غَوْرًا |

## 6. Open notes

- «عنصري / عنصرية» no longer appears anywhere in the web catalog, ar.ts, the calculator strings, the AI prompts or the data files (rule in the reviewer's batch 5: توازن العناصر، طبيعة عنصرك، مزاج العناصر …). The guard test `src/lib/i18n/ar-reviewed.test.ts` fails if an ar.ts value differs from a reviewed correction for the same English text.
- All 111 ar.ts machine drafts are reviewed (72 corrected, 39 accepted).
- Recitation counts (approved by Mario, Oct 2026): «Recite N times» comes from `spiritualPractice` in src/data/divine-names.ts, and N is the Name's abjad value in the selected system (Maghribi by default). `getDivineNames(abjad)` / `useDivineNames()` rewrite N in EN and FR; AllDivineNamesBrowser and DivineNamePicker take that list. The catalog turns all 99 Arabic practice sentences into count patterns (`re:^Recite (\d+) times …$` → «يُردَّد الاسم $p1 مرّة …»), so /ar shows the right N in both systems (aḍ-Ḍārr: 291 Maghribi, 1001 Mashriqi). Urdu has no translation of these sentences (English with the right N). Tests: src/lib/divine-name-practice-count.test.ts.
- «الضَّارُّ» (was «الضَّارَّ») in divine-names.ts, server-data.ts and the calculator's divineNames.ts; values unchanged (diacritics are ignored in the count).
