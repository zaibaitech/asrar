/**
 * Zodiac (Burūj) Sadaqah — per-sign charity (sadaqah) recommendations
 * drawn from a West African (Wolof/Senegalese) spiritual tradition
 * linking each zodiac sign to specific forms of charity, timing, and
 * a companion teaching video.
 *
 * Content is currently English-only (as sourced) except for each sign's
 * own name, which carries en/fr/ar/translit like `src/constants/buruj.ts`.
 * `ar`/`translit` are stored for future use but not yet rendered in the
 * UI, since the rest of this feature's copy has no French or Arabic
 * translation to pair them with.
 */

export type ZodiacSignId =
  | 'aries'
  | 'taurus'
  | 'gemini'
  | 'cancer'
  | 'leo'
  | 'virgo'
  | 'libra'
  | 'scorpio'
  | 'sagittarius'
  | 'capricorn'
  | 'aquarius'
  | 'pisces';

export const ZODIAC_SIGN_ORDER: ZodiacSignId[] = [
  'aries',
  'taurus',
  'gemini',
  'cancer',
  'leo',
  'virgo',
  'libra',
  'scorpio',
  'sagittarius',
  'capricorn',
  'aquarius',
  'pisces',
];

export const ZODIAC_SIGN_SYMBOL: Record<ZodiacSignId, string> = {
  aries: '♈',
  taurus: '♉',
  gemini: '♊',
  cancer: '♋',
  leo: '♌',
  virgo: '♍',
  libra: '♎',
  scorpio: '♏',
  sagittarius: '♐',
  capricorn: '♑',
  aquarius: '♒',
  pisces: '♓',
};

export interface SadaqahForm {
  title: string;
  body: string;
  bullets?: string[];
}

export interface ZodiacTiming {
  day: string;
  note: string;
}

export interface ZodiacGuidance {
  title: string;
  body: string;
}

export interface ZodiacSadaqahEntry {
  id: ZodiacSignId;
  en: string;
  fr: string;
  ar: string;
  translit: string;
  rulingPlanet?: string;
  generalNote?: string;
  generalForms?: SadaqahForm[];
  specificForms: SadaqahForm[];
  timing?: ZodiacTiming;
  guidance?: ZodiacGuidance;
  summary?: string[];
  summaryNote?: string;
  intention?: string;
  videoId: string;
  altVideoId?: string;
}

export const ZODIAC_SADAQAH: Record<ZodiacSignId, ZodiacSadaqahEntry> = {
  aries: {
    id: 'aries',
    en: 'Aries', fr: 'Bélier', ar: 'الحمل', translit: 'Ḥamal',
    generalForms: [
      { title: 'Hot Food Sadaqah', body: 'Giving hot, prepared food as sadaqah is a beneficial form of charity. The food can be given to children or to anyone who can benefit from it. This form of sadaqah is associated with feeding and providing nourishment.', bullets: ['Rice', 'Porridge', 'Other hot, nourishing meals'] },
      { title: 'Cold Water Sadaqah', body: 'Giving cold water as sadaqah is another beneficial form of charity. The sadaqah specifically consists of providing cold drinking water to someone who can benefit from it.' },
      { title: 'Supporting an Athlete or Sportsman', body: 'Helping a sportsman or athlete can also be given as a form of sadaqah. The assistance should be given sincerely for the benefit of the person.', bullets: ['Buying them sports equipment or supplies', 'Helping with something needed for their training', 'Providing practical or financial assistance', 'Encouraging and supporting them in their sporting activities'] },
    ],
    specificForms: [
      { title: 'Livestock Sadaqah', body: 'A form of sadaqah associated with Ḥamal is giving livestock. The animal may be raised and cared for in the household and then given as sadaqah.', bullets: ['A sheep', 'A ram', 'A white sheep or ram', 'A sheep or ram of another colour'] },
      { title: 'Worn Clothing Sadaqah', body: 'Giving away clothing that you have personally worn — once, twice, or a small number of times. The important condition is that the clothing is still clean, usable, and in good condition. It is then given to another person who can benefit from wearing it. The emphasis is on giving clothing that has already been worn by the giver, rather than brand-new or completely unused clothing. This sadaqah is associated with protection and seeking benefit through charity.' },
    ],
    videoId: '9QX0tEpB43Y',
  },

  taurus: {
    id: 'taurus',
    en: 'Taurus', fr: 'Taureau', ar: 'الثور', translit: 'al-Thawr',
    rulingPlanet: 'Venus (al-Zuhrah / الزهرة)',
    specificForms: [
      { title: 'One-Coloured Ram Sadaqah', body: 'A primary form of sadaqah associated with al-Thawr is giving a single-coloured ram. A white ram is particularly suitable. The ram is given as sadaqah to someone who can benefit from it.' },
      { title: 'Used Clothing Sadaqah — Protection', body: 'Giving away clothing that has already been worn, still in good and usable condition. This sadaqah is associated with protection and may be given with the intention of seeking protection through charity.' },
      { title: 'Grains and Agricultural Produce', body: 'Giving things grown from the ground, particularly staple agricultural foods, directly to people in need.', bullets: ['Rice', 'Millet (dugub in Wolof)', 'Other grains and agricultural produce'] },
      { title: 'Rice, Millet and Cooking Oil', body: 'Rice and millet may also be combined with cooking oil and given together as a food-based sadaqah package to someone or a family in need.', bullets: ['Rice', 'Millet', 'Cooking oil'] },
      { title: 'Water Sadaqah', body: 'Giving water is another beneficial sadaqah for Taurus. The water is given to someone who needs or can benefit from it.' },
      { title: 'Supporting an Elderly Person — Provision', body: "A particularly important form of sadaqah for Taurus is helping an elderly man or woman, regularly or whenever they are in need. This is regarded in the tradition as a secret sadaqah for increasing and sustaining one's provision (rizq). The emphasis is on quietly and consistently helping an elderly person without seeking recognition.", bullets: ['Financial assistance', 'Food', 'Household necessities', 'Medical or other essential expenses', 'Other practical needs'] },
    ],
    timing: { day: 'Friday', note: 'Friday is considered a particularly suitable day for giving Taurus-related sadaqah, connected in the tradition with Venus (al-Zuhrah), the planetary ruler of the sign. Where possible, give on Friday while maintaining the intention of sincere charity and seeking blessing, protection, and increase in provision.' },
    videoId: '_7XJhemrBzg',
  },

  gemini: {
    id: 'gemini',
    en: 'Gemini', fr: 'Gémeaux', ar: 'الجوزاء', translit: 'Jawzāʾ',
    specificForms: [
      { title: 'Kola Nut Sadaqah', body: 'A form of sadaqah associated with Jawzāʾ is giving 100 kola nuts, which are then distributed as sadaqah.', bullets: ['White kola nuts', 'Red kola nuts', 'A combination of white and red kola nuts'] },
      { title: 'Money Sadaqah — Preservation of Wealth', body: "Giving money as sadaqah is intended to help with the preservation and stability of wealth: giving a portion of one's wealth away so that wealth is not simply accumulated and lost or continuously spent. The amount can be according to the person's ability and circumstances. Intention: give sincerely, with the intention of helping others and seeking stability, preservation, and blessing in one's wealth." },
      { title: 'Three-Coloured Chicken Sadaqah', body: 'Giving a chicken of different colours, particularly a combination of black, white and red, to someone who can benefit from it.' },
      { title: 'Guinea Fowl (Pintade) Sadaqah', body: 'Giving a guinea fowl (French: pintade) as sadaqah, distributed to someone who can benefit from it.' },
      { title: 'Educational Materials Sadaqah', body: 'Providing educational materials is another beneficial form of sadaqah for Gemini. These materials can be given to children or students who need them for their education.', bullets: ['White writing paper', 'Exercise books', 'Notebooks', 'Pens', 'Pencils', 'Other basic school supplies'] },
      { title: "Supporting Teachers and Qur'anic Teachers", body: "Educational sadaqah can also be directed toward teachers, including Qur'anic teachers — helping a teacher or their students. The sadaqah can therefore benefit either the teacher or the students.", bullets: ['Books', 'Pens', 'Writing materials', 'Educational resources', 'Other materials needed for teaching and learning'] },
      { title: 'Feeding Children', body: 'Food can be prepared or purchased and given directly to children who can benefit from it. The intention is to provide nourishment and assistance through sadaqah.' },
    ],
    videoId: 'AiM1UMKZmr4',
  },

  cancer: {
    id: 'cancer',
    en: 'Cancer', fr: 'Cancer', ar: 'السرطان', translit: 'Saraṭān',
    specificForms: [
      { title: 'Salt Sadaqah', body: "A form of sadaqah associated with Saraṭān is giving salt according to one's current age — the amount in kilograms matching the person's age (age 25 → 25 kg, age 30 → 30 kg, age 40 → 40 kg). The amount is weighed according to the person's age and then given out as sadaqah. This may be performed yearly, using the person's age at that time." },
      { title: 'Four Kilograms of Meat', body: 'Giving 4 kg of meat — beef or another type — out as sadaqah to people who can benefit from it.' },
      { title: 'Helping a Family in Need', body: "Regularly helping a family in need. The support can be given from time to time, according to the family's needs and one's ability to help.", bullets: ['Helping with food expenses', 'Paying for fish or other food', 'Helping with household expenses', 'Providing financial assistance when needed'] },
      { title: 'Supporting an Elderly Woman', body: 'Providing financial assistance to an elderly woman in need. The intention is to assist and ease her difficulties through sadaqah.', bullets: ['Giving her money', 'Helping with essential expenses', 'Providing regular or occasional financial support'] },
      { title: 'Giving Milk to Children', body: 'Giving milk to children as sadaqah to provide nourishment and benefit.', bullets: ['A small bottle of milk', 'A larger quantity of milk', 'Any suitable milk that can be given to children'] },
    ],
    videoId: 'CIeJH6HUXQU',
  },

  leo: {
    id: 'leo',
    en: 'Leo', fr: 'Lion', ar: 'الأسد', translit: 'al-Asad',
    specificForms: [
      { title: 'Raising and Giving a Ram', body: 'A primary form of sadaqah associated with al-Asad is to raise a ram, particularly a white ram: obtain it, keep it in an appropriate place at home or elsewhere, feed and care for it, and allow it to grow until it reaches a suitable mature stage. It is then slaughtered as sadaqah, the meat divided into portions and distributed to people who can benefit from it. Within this tradition, there is an observation that some Leo individuals may find the ram does not survive long enough to reach maturity, traditionally attributed to the heaviness of the zodiac. If the ram survives and reaches the appropriate mature stage, it can then be given as sadaqah.' },
      { title: 'Three Bowls of Cheb Yap', body: 'Preparing three bowls of Cheb Yap — a Senegalese rice dish made with meat, similar to meat-based jollof rice — and giving the prepared food as sadaqah to people who can benefit from it.' },
      { title: 'Three Bowls of Porridge with Yogurt', body: 'Preparing three bowls of porridge with a sour or fermented dairy component such as yogurt, and distributing them to people as sadaqah.' },
    ],
    summary: ['White ram — raised to maturity, then slaughtered, divided and distributed', '3 bowls of Cheb Yap', '3 bowls of porridge with yogurt'],
    videoId: '5cd4OeDXLPo',
  },

  virgo: {
    id: 'virgo',
    en: 'Virgo', fr: 'Vierge', ar: 'السنبلة', translit: 'al-Sunbula',
    specificForms: [
      { title: 'One Hundred Kola Nuts', body: 'A primary form of sadaqah associated with al-Sunbula is giving 100 kola nuts, a mixture of red and white, mixed together and distributed as sadaqah.' },
      { title: 'Money Sadaqah', body: "Giving money as sadaqah, according to the person's ability and circumstances, sincerely to someone who can benefit from it." },
      { title: 'Three Cereals Sadaqah', body: 'Giving three different types of cereal together as sadaqah to people or families who can benefit from them.', bullets: ['Millet', 'Rice', 'Bessi — a Wolof cereal/grain similar to millet'] },
      { title: 'Secret Sadaqah of Virgo — Age 40', body: 'A particularly important secret sadaqah associated with Virgo is performed on reaching the age of 40: give 40 metres of kafan cloth (the white cloth used to shroud a deceased Muslim before burial) as sadaqah. Obtain the 40 metres, keep the cloth in the house overnight, then the following day divide it into portions of 7 metres each and distribute the portions as sadaqah.' },
    ],
    summary: ['100 kola nuts — red and white mixed together', 'Money', 'Three cereals — millet, rice, and Bessi', 'At age 40: 40 metres of kafan cloth, kept overnight then divided into 7-metre portions'],
    videoId: 'eqo8hkl1_Gw',
  },

  libra: {
    id: 'libra',
    en: 'Libra', fr: 'Balance', ar: 'الميزان', translit: 'al-Mīzān',
    rulingPlanet: 'Venus (al-Zuhrah / الزهرة)',
    specificForms: [
      { title: 'Seven Yogurts Sadaqah', body: 'Giving seven portions of yogurt — small bags, sachets, or small containers. The portions do not need to be large; seven separate portions are the important part. The yogurt is distributed as sadaqah to people who can benefit from it.' },
      { title: 'Guinea Fowl Sadaqah', body: 'Giving guinea fowl (pintade) as sadaqah to someone who can benefit from it.' },
      { title: 'Three-Coloured Chicken Sadaqah', body: 'Giving three chickens of different colours — black, white and red — out as sadaqah.' },
    ],
    timing: { day: 'Friday', note: 'Because Libra is traditionally associated with Venus (al-Zuhrah), days may be selected when the planetary condition is favourable. Friday is preferred when Venus is favourable; Thursday may also be used when conditions are favourable.' },
    summary: ['7 portions of yogurt — even small sachets', 'Guinea fowl (pintade)', '3 chickens — black, white and red', 'Preferred day: Friday when favourable; alternative: Thursday'],
    videoId: 'VsMCgoQbsAg',
  },

  scorpio: {
    id: 'scorpio',
    en: 'Scorpio', fr: 'Scorpion', ar: 'العقرب', translit: 'al-ʿAqrab',
    rulingPlanet: 'Mars (al-Mirrīkh / المريخ)',
    specificForms: [
      { title: 'Protective Ring Sadaqah', body: 'A special form of sadaqah associated with Scorpio is having or giving a good protective ring, with stones such as rose agate or amethyst. The ring is regarded within this tradition as having protective and beneficial qualities and is also considered part of the sadaqah practice for Scorpio.' },
      { title: 'White Ram or Sheep Sadaqah', body: 'Giving a white ram or white sheep, particularly associated with favourable conditions involving Mars.' },
      { title: 'Red Goat Sadaqah During a Favourable Mars Transit', body: 'When Mars is transiting a favourable or friendly zodiac sign, such as Aries, a red goat may be given as sadaqah. The goat is prepared and its meat divided into portions, distributed among people who can benefit from it until the meat has been given out. The emphasis is on distributing the meat, rather than keeping it for personal consumption.' },
      { title: 'Water Sadaqah — For Patients', body: 'Giving water is an important sadaqah for Scorpio, particularly to sick or hospitalised people — for example taking drinking water to a hospital and giving it freely to patients who need it. This form is especially associated with Scorpio when beginning a new project or undertaking a journey.' },
      { title: 'Rice and Fish Sadaqah', body: 'Giving rice and fish together as a single sadaqah, both uncooked (raw), distributed to people or families who can benefit from them.' },
    ],
    timing: { day: 'Tuesday', note: 'Tuesday is particularly associated with Scorpio because of its connection with Mars, the planetary ruler of the sign, and can be chosen when Mars is in a favourable or neutral transit. Sunday may also be considered, particularly when the Sun is in a favourable condition. The planetary condition should be considered when selecting the timing according to the tradition.' },
    summary: ['Protective ring — rose agate or amethyst', 'White ram or sheep', 'Red goat — during a favourable Mars transit; meat divided and distributed', 'Water — especially to sick or hospitalised people', 'Rice and fish — given together, uncooked', 'Preferred day: Tuesday when Mars is favourable or neutral; alternative: Sunday when the Sun is favourable', 'Special occasions: beginning a project or travelling'],
    videoId: 'wJBDdTZBth4',
  },

  sagittarius: {
    id: 'sagittarius',
    en: 'Sagittarius', fr: 'Sagittaire', ar: 'القوس', translit: 'al-Qaws',
    generalNote: 'Sagittarius is considered a sign for which sadaqah is particularly important and should be given regularly. Unlike some signs that have specific items associated with their sadaqah, Sagittarius has a more open form: a person may give whatever they sincerely wish to give, provided it benefits another person.',
    specificForms: [
      { title: 'Nine Pieces of Bread', body: 'Giving nine pieces of bread, distributed to people who are in need or to anyone who can benefit from it.' },
      { title: 'Three Bowls of Laakh', body: 'Preparing three bowls of laakh — a Wolof-style porridge traditionally prepared with a fermented or sour dairy component such as yogurt — and giving them to people who can benefit from the food.' },
      { title: 'One-Coloured White Ram', body: 'Giving a single-coloured ram, particularly a white ram, as sadaqah to someone who can benefit from it.' },
      { title: 'Open Sadaqah', body: 'Sagittarius has a broad range of possible sadaqah. A person may give whatever they are able and willing to give. The important principle is to give sincerely and for the benefit of another person.', bullets: ['Food', 'Money', 'Clothing', 'Animals', 'Water', 'Assistance to people in need', 'Other beneficial forms of charity'] },
    ],
    timing: { day: 'Thursday', note: 'Thursday is considered a particularly suitable day for giving Sagittarius-related sadaqah. Where possible, give on Thursday while maintaining the intention of sincere charity and seeking blessing and ease.' },
    summary: ['9 pieces of bread', '3 bowls of laakh with yogurt', 'One-coloured white ram', 'Any sincere and beneficial sadaqah', 'Recommended day: Thursday', 'Sagittarius is traditionally regarded as a sign that benefits from frequent and generous sadaqah, so regular charity is emphasised'],
    videoId: 'V-7gVkVQEpI',
  },

  capricorn: {
    id: 'capricorn',
    en: 'Capricorn', fr: 'Capricorne', ar: 'الجدي', translit: 'al-Jady',
    specificForms: [
      { title: 'Rice and Millet Sadaqah', body: "Giving rice and millet according to measurements connected to the person's age and body weight: rice in kilograms corresponding to the person's age, millet in kilograms corresponding to the person's body weight. The rice and millet may be distributed little by little until the entire amount has been given out, to individuals, families, or people in need." },
      { title: 'One-Coloured Ram Sadaqah', body: 'Giving a single-coloured ram, a white ram particularly associated with this sadaqah. This is described in the tradition as a particularly powerful sadaqah, and some people who follow this practice may experience it symbolically through dreams, such as dreaming that they are giving away a ram.' },
      { title: 'Kafan — Burial Shroud Sadaqah', body: "Giving kafan, the white cloth used to shroud a deceased Muslim before burial. The sadaqah may consist of providing the cloth needed for someone's burial.", bullets: ['A family preparing for a burial', 'A mosque or community', 'Someone who cannot afford the burial shroud', 'People responsible for assisting with funeral arrangements'] },
      { title: 'Cowries — Petaw Sadaqah', body: 'Giving cowries, known in Wolof as petaw — the small white cowrie shells traditionally used for decoration and in various cultural and spiritual practices. This form of sadaqah is considered special and sensitive within the tradition.' },
      { title: 'Helping Labourers and Low-Income Workers', body: 'Helping workers and labourers, particularly people earning a modest income through physically demanding or low-skilled work. The person does not necessarily have to be extremely poor; the sadaqah can simply be an act of assistance and support for someone whose income is limited.', bullets: ['Labourers', 'Casual workers', 'Construction workers', 'Cleaners', 'Other low-income workers'] },
      { title: 'Helping a Widow and Her Children', body: 'The assistance can be given regularly or whenever the family needs support. This is regarded as a particularly meaningful form of sadaqah because it supports both the widow and the children who depend on her.', bullets: ['Financial assistance for the widow', 'Providing food or household necessities', "Helping with children's expenses", 'Supporting their education', 'Assisting with other essential needs'] },
    ],
    guidance: {
      title: 'Important Guidance — Cowries / Petaw',
      body: 'Anyone intending to give petaw/cowries as sadaqah should seek guidance from a knowledgeable and trusted spiritual authority who understands the practice. According to the tradition being documented, this sadaqah may be considered capable of helping to open pathways and make matters easier, but it should not be undertaken casually. The practice is therefore regarded as one requiring proper guidance and understanding before giving it as sadaqah.',
    },
    summary: ['Rice and millet', 'A white, single-coloured ram', 'Kafan (burial shroud)', 'Cowries / petaw, with proper guidance', 'Helping labourers and low-income workers', 'Supporting widows and their children'],
    summaryNote: 'The practices above are regarded within this tradition as forms of secret or special sadaqah for Capricorn. The sadaqah should be given discreetly and sincerely, with the intention of benefiting another person rather than seeking recognition.',
    videoId: 'v4_Z5ld1OAE',
    altVideoId: 'k3SWgUzVePQ',
  },

  aquarius: {
    id: 'aquarius',
    en: 'Aquarius', fr: 'Verseau', ar: 'الدلو', translit: 'al-Dalw',
    specificForms: [
      { title: 'Kola Nut Sadaqah', body: 'A primary form of sadaqah associated with al-Dalw is giving 100 kola nuts — white, red, or a combination. This sadaqah can be performed monthly, or every three months. The 100 kola nuts are then distributed as sadaqah.' },
      { title: 'Money Sadaqah', body: "The amount can be determined according to one's ability and circumstances. The money should be given sincerely to someone or a cause that can benefit from it." },
      { title: 'Supporting a Community or Group', body: 'Helping a community, group, or voluntary organisation. Support may be financial, material, or practical.', bullets: ['A local community', 'A voluntary group', 'A charitable group', 'A masjid', 'A community project', 'A group serving people in need'] },
      { title: 'Guinea Fowl or Chicken Sadaqah', body: 'Giving guinea fowl (pintade) or chicken as sadaqah to someone who can benefit from it.' },
      { title: 'Three-Coloured Chicken Sadaqah', body: 'Giving three chickens of different colours — black, red and white — out as sadaqah.' },
      { title: 'Water Sadaqah', body: 'Giving water to someone who needs or can benefit from it.' },
    ],
    summary: ['100 kola nuts — white, red, or a combination; monthly or every three months', "Money — according to one's ability", 'Community or group support — a voluntary group, community, masjid, or similar organisation', 'Guinea fowl (pintade) or chicken', 'Three-coloured chickens — black, red and white', 'Water'],
    videoId: 'GzDou_TW-cM',
  },

  pisces: {
    id: 'pisces',
    en: 'Pisces', fr: 'Poissons', ar: 'الحوت', translit: 'al-Ḥūt',
    specificForms: [
      { title: 'Fish Sadaqah', body: 'A primary form of sadaqah associated with al-Ḥūt is giving fish. A particularly recommended amount is 12 fish, given as sadaqah to people who can benefit from them.' },
      { title: 'Seven-Chicken Food Sadaqah', body: 'This may be performed when a person has an important project or undertaking: take seven chickens, prepare and cook them, and distribute the prepared food as sadaqah — giving it to people in need, such as a poor family, and continuing until the food has been completely given out. The purpose is to provide food and benefit to people who are in need.' },
      { title: 'Evening Food Sadaqah', body: 'The food sadaqah may particularly be given in the evening, around the time when people would normally have dinner, an evening meal, or tea or other evening refreshments. The food should be distributed to people who can benefit from it, especially those experiencing financial hardship or food insecurity.' },
      { title: 'Helping Someone Experiencing Mental Health Difficulties', body: 'Helping someone experiencing mental or emotional difficulties. The intention is to reduce their hardship and provide compassionate assistance.', bullets: ['Providing financial assistance', 'Helping with their basic needs', 'Supporting them during a difficult period', 'Offering practical assistance', 'Helping them access appropriate support'] },
      { title: 'Supporting Someone Involved in Spiritual Work', body: "Helping a person who is engaged in spiritual or religious activity. Assistance may be financial or practical, depending on the person's needs.", bullets: ['A spiritual practitioner', 'A person engaged in religious study or service', 'Someone involved in spiritual activities', 'Someone who provides spiritual guidance or related services'] },
    ],
    intention: 'The sadaqah should be given sincerely for the benefit of others. The food, fish, or other assistance is distributed to people who can genuinely benefit from it, particularly those experiencing poverty or hardship.',
    videoId: '7ifjKRr2sT4',
  },
};
