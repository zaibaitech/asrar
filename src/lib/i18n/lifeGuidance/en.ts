/**
 * Life Guidance preview strings, English (reference text).
 * One file per locale (en, fr, ar, ur), the same layout as src/lib/i18n/.
 * Loaded only by the preview code, so production bundles do not grow.
 */
export const en = {
  preview: {
    pageTitle: 'Life Guidance (preview)',
    back: 'Back',
  },

  /** "Show the working + sources" layer, Letters and their mansions, manzil tile. */
  sources: {
    title: 'Show the working + sources',
    notCounted: 'not counted',
    showSource: 'Show source',
    hideSource: 'Hide source',
    attributed: 'attributed',
    toVerify: 'to verify',
    citedInRepo: 'cited in the app\u2019s code, not re-checked',
    quranSrc: 'Qur\u2019an (Tanzil text)',
    total: 'Total',
    remainder: 'remainder',
    preview: 'Preview. Sources marked “to verify” are not yet confirmed.',
    steps: {
      letters: '1 · Letters and values',
      kabir: '2 · Kabīr (sum)',
      saghir: '3 · Ṣaghīr (root)',
      tabi: '4 · Ṭabʿ (÷ 4)',
      burj: '5 · Burj (÷ 12)',
      manzil: '6 · Manzil (the Moon)',
      lettersMansions: 'Letters and their mansions',
    },
    manzilToday: 'Today\u2019s manzil',
    manzilNatal: 'Natal manzil (needs birth date, time and place): Birth profile',
    buniEdition: 'in the cited edition',
    position: 'mansion',
    order: 'Mashriqi abjad order, fixed (independent of your Maghribi / Mashriqi setting)',
    /** Suffix on the Who Am I Manāzil tile when it shows today's real mansion. */
    tileToday: ' · today',
    elements: { fire: 'Fire', earth: 'Earth', air: 'Air', water: 'Water' },
    zodiac: {
      aries: 'Aries', taurus: 'Taurus', gemini: 'Gemini', cancer: 'Cancer', leo: 'Leo', virgo: 'Virgo',
      libra: 'Libra', scorpio: 'Scorpio', sagittarius: 'Sagittarius', capricorn: 'Capricorn', aquarius: 'Aquarius', pisces: 'Pisces',
    },
    notes: {
      letters: 'Each letter is given its value from the app-wide abjad table (ḥisāb al-jummal). Maghribi is the default; Mashriqi differs only for س ص ش ض ظ غ.',
      kabir: 'Kabīr (الكبير) is the plain sum of the letter values. With a mother\u2019s name, the two sums are added.',
      saghir: 'Ṣaghīr (الصغير) is the kabīr reduced by adding its digits until one digit remains (1 to 9).',
      tabi: 'Ṭabʿ (الطبع): the kabīr divided by 4. The remainder gives the element (1 Fire, 2 Earth, 3 Air, 4 or 0 Water). It is read from the total, not from the letters, so it does not depend on any letter-to-element table.',
      burj: 'Burj (البرج): the kabīr divided by 12. The remainder gives the sign of the zodiac in order (1 Aries … 12 Pisces; 0 counts as 12).',
      manzil: 'Manzil (المنزل) is only ever the Moon\u2019s real place among the 28 mansions: the Moon\u2019s ecliptic longitude, computed with astronomy-engine, falls in one of 28 equal sectors of 12.857\u00b0 counted from 0\u00b0 of the zodiac. Today\u2019s mansion is shown here. A person\u2019s natal mansion needs a birth date, time and place: use Birth profile. The name is not used for the manzil.',
      lettersMansions: 'Each letter of the name is set beside the mansion given by the table attributed to al-Būnī (attribution disputed), in the Mashriqi abjad order (first to last letter). The table is fixed: it does not change with the Maghribi / Mashriqi setting. It is a traditional correspondence described in the asrār literature, not an astronomical one (for the Moon\u2019s real position, see Manzil (the Moon)). The mansion is matched to the app\u2019s list by number. The Arabic names shown are the app\u2019s standard spellings; the cited edition writes six of them differently (mansions 1, 9, 16, 26, 27 and 28) and is noted under those rows.',
    },
    /** Reference texts, in the same order as the refs in src/features/sources/sourcesContent.ts. */
    refs: {
      letters: [
        'Values and the two letter orders (أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ / صعفض قرست ثخذ ظغش) are documented in src/lib/abjad-maps.ts, which cites Wikipedia "Abjad numerals" (after Macdonald 1986) and Encyclopaedia Iranica "Abjad" (G. Krotkoff, 1982). Not re-checked here.',
        'A classical Arabic text that gives the Maghribi order, with its page, is still needed for the source library.',
      ],
      kabir: ['Adding the name\u2019s letters (and the mother\u2019s name) is the standard jafr / ḥisāb al-jummal practice. Book, chapter and page: to verify.'],
      saghir: ['Source for reducing the kabīr to a single digit in the classical ḥisāb: to verify. The app uses the same reduction in all its tools.'],
      tabi: [
        'The rule and its element order are written as the Maghribi convention in src/features/ilm-huruf/core.ts. Not re-checked here.',
        'The classical text for ÷ 4 and this element order: to verify.',
      ],
      burj: [
        'The classical text for ÷ 12 applied to a name total: to verify.',
        'For the signs themselves, al-Bīrūnī, Kitāb al-Tafhīm li-awāʾil ṣināʿat al-tanjīm, is the general reference named in src/lib/lunarMansions.ts. Chapter and page: to verify.',
      ],
      manzil: [
        'The Qur\u2019an speaks of the moon\u2019s stations (manāzil):',
        'and in',
        'The list of the 28 mansions cites al-Bīrūnī, Kitāb al-Tafhīm, and Arab anwāʾ astronomy in src/lib/lunarMansions.ts, which also states that 28 equal tropical sectors is the convention used here. Not re-checked.',
        'Where the count of the 28 sectors starts (tropical 0\u00b0 Aries here) and whether classical sources use equal sectors: to verify.',
      ],
      lettersMansions: [
        'Table attributed to al-Būnī in Shams al-Maʿārif al-Kubrā, al-faṣl al-thānī. Its attribution to al-Būnī (d. 622/1225, or 630/1232 per Ḥājjī Khalīfa) is disputed in modern scholarship. Edition: Muʾassasat al-Nūr, Beirut, as on ablibrary.net; the 28 entries were checked on pp. 16 to 19 of that edition.',
        'Mansion names follow Lisān al-ʿArab (ش-ر-ط الشرطان; ط-ر-ف الطرف; ز-ب-ن الزباني; ف-ر-غ فرغ الدلو المقدَّم / المؤخَّر, shortened in the app to الفرغ المقدم / المؤخر; ر-ش-و الرِّشاء, i.e. بطن الحوت) and Ibn Qutayba, Kitāb al-Anwāʾ fī Mawāsim al-ʿArab, whose headings read الشرطان, الطرف and الزبانى, and «الفرغ الأول / الفرغ الثانى / الحوت» for 26 to 28. No page numbers are cited.',
      ],
    },
  },
};

/** Same keys and the same number of refs per step in every locale. */
export type LifeGuidanceStrings = typeof en;
