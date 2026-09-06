/**
 * Sadaqah guidance keyed by Islamic (Hijri) birth month. Given a Gregorian
 * date of birth, gregorianToHijri() (src/lib/ikhtiyarat/hijri.ts, already
 * used by the Ikhtiyarat feature) resolves the Hijri month, and this table
 * supplies the traditional sadaqah suggestions for that month.
 *
 * English and French only — the app doesn't have a Wolof locale.
 */

export interface SadaqahMonthText {
  intro: string;
  items: string[];
  notes: string[];
}

export interface SadaqahMonthGuidance {
  /** 1-12, matching HijriDate.month from src/lib/ikhtiyarat/hijri.ts */
  month: number;
  /** Display name including any well-known alternate/local name, e.g. "Muharram (Tamxarit)". */
  displayName: string;
  en: SadaqahMonthText;
  fr: SadaqahMonthText;
}

export const SADAQAH_BY_MONTH: SadaqahMonthGuidance[] = [
  {
    month: 1,
    displayName: 'Muharram (Tamxarit)',
    en: {
      intro: 'For anyone born in Muharram (Tamxarit), their sadaqah can include:',
      items: [
        'Giving water to those in need.',
        'Feeding someone who is fasting.',
        'Helping an orphan or orphans.',
        'Giving other forms of charity according to their ability.',
      ],
      notes: [
        'This sadaqah is given sincerely for the sake of Allah, seeking blessings, protection, mercy, and goodness throughout the year.',
      ],
    },
    fr: {
      intro: 'Pour toute personne née au mois de Muharram (Tamxarit), sa sadaqah peut consister à :',
      items: [
        "Donner de l'eau aux personnes dans le besoin.",
        'Nourrir une personne qui jeûne, notamment pour la rupture du jeûne.',
        'Aider un orphelin ou des orphelins.',
        'Donner toute autre forme de charité selon ses possibilités.',
      ],
      notes: [
        "Cette sadaqah est donnée sincèrement pour Allah, avec l'intention de rechercher Ses bénédictions, Sa protection, Sa miséricorde et Ses bienfaits tout au long de l'année.",
      ],
    },
  },
  {
    month: 2,
    displayName: 'Safar',
    en: {
      intro: 'For anyone born in Safar, their sadaqah can include:',
      items: [
        'Giving rice.',
        'Giving flour.',
        'Giving cooking oil.',
        'Giving clothes.',
        'Helping sick people, financially or with whatever they need.',
      ],
      notes: [],
    },
    fr: {
      intro: 'Pour toute personne née au mois de Safar, sa sadaqah peut consister à :',
      items: [
        'Donner du riz.',
        'Donner de la farine.',
        "Donner de l'huile.",
        'Donner des vêtements.',
        'Aider les personnes malades, financièrement ou de toute autre manière utile.',
      ],
      notes: [],
    },
  },
  {
    month: 3,
    displayName: 'Rabi al-Awwal (Gamo)',
    en: {
      intro: 'For anyone born in Rabi al-Awwal (Gamo), their sadaqah can include:',
      items: [
        'Giving sadaqah to children.',
        'Helping poor families.',
        'Helping and supporting the mosque.',
        'Providing food, money, or other useful assistance.',
      ],
      notes: [],
    },
    fr: {
      intro: 'Pour toute personne née au mois de Rabi al-Awwal (Gamo), sa sadaqah peut consister à :',
      items: [
        'Donner aux enfants.',
        'Aider les familles pauvres.',
        'Aider et soutenir la mosquée.',
        "Fournir de la nourriture, de l'argent ou toute autre aide utile.",
      ],
      notes: [],
    },
  },
  {
    month: 4,
    displayName: 'Rabi al-Thani (Rabi al-Akhir)',
    en: {
      intro: 'For anyone born in Rabi al-Thani (Rabi al-Akhir), their sadaqah can include:',
      items: [
        'Helping a widow.',
        'Giving cooking oil.',
        'Giving soap.',
        'Providing kitchen and food supplies.',
        'Helping with necessities that can support a person or family.',
      ],
      notes: [
        "This sadaqah is intended to seek Allah's help, blessings, success, stability, and ease in one's affairs and endeavors.",
      ],
    },
    fr: {
      intro: 'Pour toute personne née au mois de Rabi al-Thani (Rabi al-Akhir), sa sadaqah peut consister à :',
      items: [
        'Aider une veuve.',
        "Donner de l'huile de cuisine.",
        'Donner du savon.',
        'Donner des produits de cuisine et des denrées alimentaires.',
        "Aider à couvrir les besoins essentiels d'une personne ou d'une famille.",
      ],
      notes: [
        "Cette sadaqah est donnée dans l'intention de rechercher l'aide d'Allah, Ses bénédictions, la réussite, la stabilité et la facilité dans les affaires et les projets.",
      ],
    },
  },
  {
    month: 5,
    displayName: 'Jumada al-Awwal',
    en: {
      intro: 'For anyone born in Jumada al-Awwal, their sadaqah can include:',
      items: [
        'Giving hot, nourishing food.',
        'Helping poor labourers and workers.',
        'Supporting hardworking people who are facing difficult circumstances.',
      ],
      notes: [
        'Because this month is considered a bit heavy or difficult, these forms of sadaqah are considered beneficial for the person born in this month.',
        'This sadaqah can help the person have more strength, encouragement, patience, and stability as they continue working through difficult circumstances.',
      ],
    },
    fr: {
      intro: 'Pour toute personne née au mois de Jumada al-Awwal, sa sadaqah peut consister à :',
      items: [
        'Donner des repas chauds et nourrissants.',
        'Aider les ouvriers et travailleurs pauvres.',
        'Soutenir les personnes qui travaillent durement et traversent des difficultés.',
      ],
      notes: [
        "Comme ce mois est considéré comme un peu lourd ou difficile, ces formes de sadaqah sont considérées comme bénéfiques pour la personne née durant ce mois.",
        "Cette sadaqah peut aider la personne à avoir davantage de force, d'encouragement, de patience et de stabilité pendant qu'elle continue à travailler malgré les difficultés.",
      ],
    },
  },
  {
    month: 6,
    displayName: 'Jumada al-Akhirah (Jumada al-Thani)',
    en: {
      intro: 'For anyone born in Jumada al-Akhirah, their sadaqah is especially good when it is given discreetly and privately.',
      items: [
        'Help anyone who is in need.',
        'Give food, money, or useful assistance.',
        'Help someone quietly without seeking recognition or praise.',
      ],
      notes: [],
    },
    fr: {
      intro: "Pour toute personne née au mois de Jumada al-Akhirah, il est particulièrement bon de donner la sadaqah discrètement et en privé.",
      items: [
        'Aider toute personne dans le besoin.',
        'Donner de la nourriture, de l\'argent ou toute aide utile.',
        'Aider quelqu\'un discrètement, sans rechercher la reconnaissance ou les éloges.',
      ],
      notes: [],
    },
  },
  {
    month: 7,
    displayName: 'Rajab',
    en: {
      intro: "For anyone born in Rajab, their sadaqah can focus on supporting people who learn and teach the Qur'an:",
      items: [
        "Giving a complete Qur'an (Kamil) to a mosque or place of Qur'anic learning.",
        "Providing Qur'ans for people to read and use.",
        "Donating Qur'ans to daaras.",
        "Helping mosques and places of Qur'anic learning.",
        "Supporting Qur'anic students and those who use these places.",
      ],
      notes: [],
    },
    fr: {
      intro: "Pour toute personne née au mois de Rajab, sa sadaqah peut être consacrée au soutien de ceux qui apprennent et enseignent le Coran :",
      items: [
        "Donner un Coran complet (Kamil) à une mosquée ou à un lieu d'apprentissage coranique.",
        "Fournir des Corans pour la lecture et l'étude.",
        "Donner des Corans aux daaras.",
        "Aider les mosquées et les lieux d'apprentissage du Coran.",
        "Soutenir les élèves coraniques et les personnes qui fréquentent ces lieux.",
      ],
      notes: [],
    },
  },
  {
    month: 8,
    displayName: "Sha'ban",
    en: {
      intro: "For anyone born in Sha'ban, their sadaqah can include:",
      items: [
        'Giving meals to poor families.',
        'Sharing the meals prepared in their own home with a family in need.',
        'Giving food and other necessities to people who are struggling.',
        'Helping and supporting the elderly, especially those who are alone or in need.',
      ],
      notes: [],
    },
    fr: {
      intro: "Pour toute personne née au mois de Sha'ban, sa sadaqah peut consister à :",
      items: [
        'Donner des repas aux familles pauvres.',
        'Partager les repas préparés à la maison avec une famille dans le besoin.',
        "Donner de la nourriture et d'autres produits essentiels aux personnes en difficulté.",
        'Aider et soutenir les personnes âgées, particulièrement celles qui sont seules ou dans le besoin.',
      ],
      notes: [],
    },
  },
  {
    month: 9,
    displayName: 'Ramadan (Werruk Korr)',
    en: {
      intro: 'For anyone born in Ramadan (Werruk Korr), their sadaqah can include:',
      items: [
        'Giving iftar to someone who is fasting.',
        'Not being reluctant or hesitant to give their zakat when it is due.',
        'Helping poor families and needy people with food, money, or necessities.',
        'Giving this support at night, particularly to those who are in need.',
      ],
      notes: [
        'This sadaqah is intended to bring goodness, blessings, protection, success, and stability to the person born in Ramadan.',
      ],
    },
    fr: {
      intro: 'Pour toute personne née au mois de Ramadan (Werruk Korr), sa sadaqah peut consister à :',
      items: [
        "Donner l'iftar à une personne qui jeûne.",
        "Ne pas être réticent à donner sa zakat lorsqu'elle est due.",
        "Aider les familles pauvres et les personnes dans le besoin avec de la nourriture, de l'argent ou des produits essentiels.",
        'Donner cette aide pendant la nuit, particulièrement aux personnes dans le besoin.',
      ],
      notes: [
        'Cette sadaqah est destinée à apporter bonté, bénédictions, protection, réussite et stabilité à la personne née pendant le Ramadan.',
      ],
    },
  },
  {
    month: 10,
    displayName: 'Shawwal (Korité)',
    en: {
      intro: 'For anyone born in Shawwal (Korité), their sadaqah can include:',
      items: [
        'Giving brand-new clothes to someone in need.',
        'Giving clean, good-quality clothing.',
        'Helping people have suitable clothes that they can wear with dignity.',
      ],
      notes: [],
    },
    fr: {
      intro: 'Pour toute personne née au mois de Shawwal (Korité), sa sadaqah peut consister à :',
      items: [
        'Donner des vêtements tout neufs à une personne dans le besoin.',
        'Donner des vêtements propres et de bonne qualité.',
        'Aider les personnes à avoir des vêtements convenables qu\'elles peuvent porter avec dignité.',
      ],
      notes: [],
    },
  },
  {
    month: 11,
    displayName: "Dhu al-Qi'dah (Diggi Kor)",
    en: {
      intro: "For anyone born in Dhu al-Qi'dah (Diggi Kor), their sadaqah can include:",
      items: [
        "Helping a traveller, financially or in any other way that can make their journey easier.",
        'Giving food to poor and needy people.',
        'Giving hot, nourishing food as sadaqah to those in need.',
        'Offering practical assistance to people experiencing hardship.',
      ],
      notes: [
        'The help given to the traveller and the food given to the needy are two separate forms of sadaqah.',
      ],
    },
    fr: {
      intro: "Pour toute personne née au mois de Dhu al-Qi'dah (Diggi Kor), sa sadaqah peut consister à :",
      items: [
        'Aider un voyageur, financièrement ou de toute autre manière pouvant faciliter son voyage.',
        'Donner de la nourriture aux personnes pauvres et nécessiteuses.',
        'Donner des repas chauds et nourrissants aux personnes dans le besoin.',
        'Apporter une aide pratique aux personnes qui traversent des difficultés.',
      ],
      notes: [
        "L'aide au voyageur et la nourriture donnée aux nécessiteux constituent deux formes distinctes de sadaqah.",
      ],
    },
  },
  {
    month: 12,
    displayName: 'Dhu al-Hijjah (Tabaski)',
    en: {
      intro: 'For anyone born in Dhu al-Hijjah (Tabaski), their sadaqah can include:',
      items: [
        'Giving meat as sadaqah, especially to poor and needy people.',
        'Helping pilgrims who have travelled to Makkah for Hajj, financially or in any other useful way.',
        'Visiting and welcoming a pilgrim when they return from Makkah, through ziyar.',
        'Helping poor and needy people with food, money, clothing, or other necessities.',
      ],
      notes: [],
    },
    fr: {
      intro: 'Pour toute personne née au mois de Dhu al-Hijjah (Tabaski), sa sadaqah peut consister à :',
      items: [
        'Donner de la viande en sadaqah, particulièrement aux personnes pauvres et nécessiteuses.',
        'Aider les pèlerins qui sont allés à La Mecque pour le Hajj, financièrement ou de toute autre manière utile.',
        'Rendre visite et accueillir un pèlerin à son retour de La Mecque, par le ziyar.',
        "Aider les personnes pauvres et nécessiteuses avec de la nourriture, de l'argent, des vêtements ou d'autres produits essentiels.",
      ],
      notes: [],
    },
  },
];

export function getSadaqahForHijriMonth(month: number): SadaqahMonthGuidance | null {
  return SADAQAH_BY_MONTH.find((m) => m.month === month) ?? null;
}
