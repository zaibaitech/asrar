/**
 * Sadaqah guidance keyed by day of the week — either the day a person was
 * born on, or the day they intend to give sadaqah. Day-of-week is a plain
 * Gregorian calendar property (unlike the Hijri-month guidance in
 * sadaqahByMonth.ts), so no Hijri conversion is needed here — just
 * `Date.getDay()` on the chosen date.
 *
 * English and French only — the app doesn't have a Wolof locale.
 */

export interface SadaqahDayText {
  intro: string;
  items: string[];
  notes: string[];
}

export interface SadaqahDayGuidance {
  /** 0-6, matching JS Date.getDay() (0 = Sunday .. 6 = Saturday). */
  day: number;
  displayName: string;
  en: SadaqahDayText;
  fr: SadaqahDayText;
}

export const SADAQAH_BY_DAY: SadaqahDayGuidance[] = [
  {
    day: 0,
    displayName: 'Sunday',
    en: {
      intro: 'For Sunday, the recommended sadaqah is:',
      items: [
        'Gather children and give them food as sadaqah.',
        'Help anyone who is poor or in need.',
      ],
      notes: [],
    },
    fr: {
      intro: 'Pour le dimanche, la sadaqah recommandée est :',
      items: [
        'Rassembler des enfants et leur donner de la nourriture en sadaqah.',
        'Aider toute personne pauvre ou dans le besoin.',
      ],
      notes: [],
    },
  },
  {
    day: 1,
    displayName: 'Monday',
    en: {
      intro: 'For Monday, the recommended sadaqah is:',
      items: [
        'Give water as sadaqah.',
        'Help an elderly person, a woman, or children.',
        'Give food or sadaqah to children in the evening.',
      ],
      notes: [],
    },
    fr: {
      intro: 'Pour le lundi, la sadaqah recommandée est :',
      items: [
        "Donner de l'eau en sadaqah.",
        'Aider une personne âgée, une femme ou des enfants.',
        'Donner de la nourriture ou une sadaqah aux enfants le soir.',
      ],
      notes: [],
    },
  },
  {
    day: 2,
    displayName: 'Tuesday',
    en: {
      intro: 'Tuesday is recommended for sadaqah intended for healing and protection. Recommended forms of sadaqah include:',
      items: [
        'Giving food to children.',
        'Helping a person who is experiencing difficulties.',
        'Helping someone purchase their medication.',
        "Contributing toward someone's medical or medication expenses.",
      ],
      notes: [
        'In Wolof, Rab refers to a type of illness or affliction associated with satanic or devil-related causes.',
      ],
    },
    fr: {
      intro: "Le mardi est recommandé pour une sadaqah destinée à la guérison et à la protection. Les formes de sadaqah recommandées incluent :",
      items: [
        'Donner de la nourriture aux enfants.',
        'Aider une personne qui traverse des difficultés.',
        'Aider quelqu\'un à acheter ses médicaments.',
        "Contribuer aux frais médicaux ou de médicaments d'une personne.",
      ],
      notes: [
        "En wolof, le terme Rab désigne un type de maladie ou d'affliction associée à des causes sataniques ou démoniaques.",
      ],
    },
  },
  {
    day: 3,
    displayName: 'Wednesday',
    en: {
      intro: 'For Wednesday, the recommended sadaqah is:',
      items: [
        'Give white paper and pens.',
        'Provide food to children.',
      ],
      notes: [],
    },
    fr: {
      intro: 'Pour le mercredi, la sadaqah recommandée est :',
      items: [
        'Donner du papier blanc et des stylos.',
        'Fournir de la nourriture aux enfants.',
      ],
      notes: [],
    },
  },
  {
    day: 4,
    displayName: 'Thursday',
    en: {
      intro: 'Thursday is considered favourable for sadaqah intended for opening the way to wealth, success, or removing blockages. Recommended acts include:',
      items: [
        'Giving food to people in need.',
        'Giving money as sadaqah.',
        'Supporting a mosque.',
        'Helping to clean a mosque.',
        'Performing voluntary service in the mosque.',
      ],
      notes: [],
    },
    fr: {
      intro: "Le jeudi est considéré comme favorable à la sadaqah destinée à ouvrir la voie à la richesse, à la réussite, ou à lever les blocages. Les actes recommandés incluent :",
      items: [
        'Donner de la nourriture aux personnes dans le besoin.',
        'Donner de l\'argent en sadaqah.',
        'Soutenir une mosquée.',
        'Aider au nettoyage d\'une mosquée.',
        'Effectuer un service volontaire à la mosquée.',
      ],
      notes: [],
    },
  },
  {
    day: 5,
    displayName: 'Friday',
    en: {
      intro: 'Friday is associated with Venus and is considered a favourable day for giving sadaqah. Recommended acts include giving:',
      items: [
        'Clothes.',
        'Soap.',
        'Perfume.',
      ],
      notes: [
        'It is also recommended to make ziyāra (visiting) to a scholar or a Borom Ham-Ham.',
      ],
    },
    fr: {
      intro: "Le vendredi est associé à Vénus et est considéré comme un jour favorable pour donner la sadaqah. Les actes recommandés incluent le don de :",
      items: [
        'Vêtements.',
        'Savon.',
        'Parfum.',
      ],
      notes: [
        "Il est également recommandé de faire une ziyāra (visite) à un savant ou à un Borom Ham-Ham.",
      ],
    },
  },
  {
    day: 6,
    displayName: 'Saturday',
    en: {
      intro: 'Saturday is recommended for helping poor and needy people. Recommended sadaqah includes:',
      items: [
        'Giving essential food items such as rice, oil, and other necessities.',
        'Helping an elderly person with their needs.',
        'Providing financial assistance to someone in difficulty.',
      ],
      notes: [
        'This day is also considered particularly beneficial for removing blockages, especially for people associated with Capricorn.',
      ],
    },
    fr: {
      intro: 'Le samedi est recommandé pour aider les personnes pauvres et nécessiteuses. La sadaqah recommandée inclut :',
      items: [
        "Donner des denrées essentielles comme le riz, l'huile et d'autres produits de première nécessité.",
        'Aider une personne âgée dans ses besoins.',
        'Apporter une aide financière à une personne en difficulté.',
      ],
      notes: [
        'Ce jour est également considéré comme particulièrement bénéfique pour lever les blocages, notamment pour les personnes associées au Capricorne.',
      ],
    },
  },
];

export function getSadaqahForDayOfWeek(day: number): SadaqahDayGuidance | null {
  return SADAQAH_BY_DAY.find((d) => d.day === day) ?? null;
}
