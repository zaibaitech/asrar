import type { FaqItem } from '@/src/components/seo/SeoSections';

/**
 * FAQ copy (EN/FR) for the tool pages /abjad, /planetary-hours and /planet-of-the-day.
 * Reflection-only wording: traditional practice described as such, never as prediction.
 * Rendered with FaqSection + FAQPage JSON-LD (src/components/seo/SeoSections.tsx).
 */
export const FAQ_TITLE = { en: 'Frequently asked questions', fr: 'Questions fréquentes' } as const;

export const ABJAD_FAQS: Record<'en' | 'fr', FaqItem[]> = {
  en: [
    {
      q: 'What is the Abjad (ḥisāb al-jummal)?',
      a: 'The Abjad is the traditional system that gives each Arabic letter a number: alif is 1, bāʾ is 2, jīm is 3, and so on up to a thousand. Adding the letters of a word gives its ḥisāb al-jummal, the "sum total" used for centuries in ʿilm al-ḥurūf.',
    },
    {
      q: 'What is the difference between the Maghribi and Mashriqi orders?',
      a: 'They differ on six letters. In the Maghribi order (the Maghreb, al-Andalus and West Africa, the default here) ṣād is 60, ḍād 90, sīn 300, ẓāʾ 800, ghayn 900 and shīn 1000. In the Mashriqi order (Egypt, the Middle East and Asia) ṣād is 90, ḍād 800, sīn 60, ẓāʾ 900, ghayn 1000 and shīn 300. A name without these letters has the same total in both.',
    },
    {
      q: 'How do I find the Abjad value of my name?',
      a: 'Write your name in Arabic letters (or type it in Latin letters and choose the Arabic spelling the tool suggests), select the Maghribi or Mashriqi order, and the calculator shows the total with a letter-by-letter breakdown. Spelling matters: a different Arabic spelling of the same name can give a different total.',
    },
    {
      q: 'Does my Abjad number predict my future or my character?',
      a: 'No. The Abjad value is a traditional tool for reflection and learning about ʿilm al-ḥurūf. It does not predict events, and nothing in it replaces faith, effort and wise counsel. Allah alone knows the unseen.',
    },
  ],
  fr: [
    {
      q: "Qu'est-ce que l'abjad (ḥisāb al-jummal) ?",
      a: "L'abjad est le système traditionnel qui donne un nombre à chaque lettre arabe : alif vaut 1, bāʾ 2, jīm 3, et ainsi de suite jusqu'à mille. La somme des lettres d'un mot donne son ḥisāb al-jummal, le « total » utilisé depuis des siècles dans l'ʿilm al-ḥurūf.",
    },
    {
      q: "Quelle est la différence entre l'ordre maghribi et l'ordre mashriqi ?",
      a: "Ils diffèrent sur six lettres. Dans l'ordre maghribi (Maghreb, al-Andalus et Afrique de l'Ouest, par défaut ici) ṣād vaut 60, ḍād 90, sīn 300, ẓāʾ 800, ghayn 900 et shīn 1000. Dans l'ordre mashriqi (Égypte, Moyen-Orient et Asie) ṣād vaut 90, ḍād 800, sīn 60, ẓāʾ 900, ghayn 1000 et shīn 300. Un nom sans ces lettres a le même total dans les deux.",
    },
    {
      q: "Comment trouver la valeur abjad de mon prénom ?",
      a: "Écrivez votre prénom en lettres arabes (ou en lettres latines, puis choisissez l'orthographe arabe proposée), sélectionnez l'ordre maghribi ou mashriqi, et le calculateur affiche le total avec le détail lettre par lettre. L'orthographe compte : une autre graphie arabe du même prénom peut donner un autre total.",
    },
    {
      q: 'Mon nombre abjad prédit-il mon avenir ou mon caractère ?',
      a: "Non. La valeur abjad est un outil traditionnel de réflexion et d'étude de l'ʿilm al-ḥurūf. Elle ne prédit aucun événement, et rien n'y remplace la foi, l'effort et le conseil avisé. Allah seul connaît l'invisible.",
    },
  ],
};

export const PLANETARY_HOURS_FAQS: Record<'en' | 'fr', FaqItem[]> = {
  en: [
    {
      q: 'What are planetary hours?',
      a: 'In the traditional Chaldean scheme the time from sunrise to sunset, and the time from sunset to the next sunrise, are each divided into twelve hours. The hours are named for the seven classical planets in a fixed repeating order: Saturn, Jupiter, Mars, Sun, Venus, Mercury, Moon.',
    },
    {
      q: 'Why does a planetary hour not last 60 minutes?',
      a: 'Because the day and the night are each split into twelve equal parts, an hour is as long as the daylight or darkness allows. In summer the daytime hours are longer than 60 minutes and the night hours shorter; in winter it is the other way round.',
    },
    {
      q: 'How is the current hour worked out for my location?',
      a: 'The tool uses the sunrise and sunset at your location to set the start and end of each hour, then names it from the ruling planet of the weekday and the Chaldean order. Allow location access, or choose your city, for the right times.',
    },
    {
      q: 'Which planet rules which day?',
      a: 'Traditionally the Sun rules Sunday, the Moon Monday, Mars Tuesday, Mercury Wednesday, Jupiter Thursday, Venus Friday and Saturn Saturday. The first hour after sunrise belongs to the planet of the day.',
    },
    {
      q: 'Should I plan my day by planetary hours?',
      a: 'Treat them as a tradition for reflection, not a rule and not a prediction. The times of ṣalāh follow the sun and never depend on a planetary hour; put your trust in Allah and use the hours, if you wish, as a prompt to pause and set a good intention.',
    },
  ],
  fr: [
    {
      q: 'Que sont les heures planétaires ?',
      a: "Dans le schéma chaldéen traditionnel, le temps du lever au coucher du soleil, puis du coucher au lever suivant, est divisé en douze heures chacun. Les heures portent le nom des sept planètes classiques selon un ordre fixe qui se répète : Saturne, Jupiter, Mars, Soleil, Vénus, Mercure, Lune.",
    },
    {
      q: "Pourquoi une heure planétaire ne dure-t-elle pas 60 minutes ?",
      a: "Parce que le jour et la nuit sont chacun partagés en douze parties égales : une heure dure autant que la lumière ou l'obscurité le permet. En été, les heures du jour dépassent 60 minutes et celles de la nuit sont plus courtes ; en hiver, c'est l'inverse.",
    },
    {
      q: "Comment l'heure actuelle est-elle calculée pour ma position ?",
      a: "L'outil utilise le lever et le coucher du soleil à votre position pour fixer le début et la fin de chaque heure, puis la nomme d'après la planète du jour de la semaine et l'ordre chaldéen. Autorisez la localisation, ou choisissez votre ville, pour obtenir les bons horaires.",
    },
    {
      q: 'Quelle planète gouverne quel jour ?',
      a: "Traditionnellement, le Soleil gouverne le dimanche, la Lune le lundi, Mars le mardi, Mercure le mercredi, Jupiter le jeudi, Vénus le vendredi et Saturne le samedi. La première heure après le lever du soleil appartient à la planète du jour.",
    },
    {
      q: 'Dois-je organiser ma journée selon les heures planétaires ?',
      a: "Considérez-les comme une tradition de réflexion, ni une règle ni une prédiction. Les horaires de la ṣalāh suivent le soleil et ne dépendent jamais d'une heure planétaire ; placez votre confiance en Allah et, si vous le souhaitez, servez-vous de ces heures comme d'un rappel pour faire une pause et formuler une bonne intention.",
    },
  ],
};

export const PLANET_OF_THE_DAY_FAQS: Record<'en' | 'fr', FaqItem[]> = {
  en: [
    {
      q: 'What is the planet of the day?',
      a: 'In the traditional astrological schedule each weekday is linked to one of the seven classical planets. The page shows that planet, its traditional themes, and the sadaqa and dhikr that tradition connects with the day.',
    },
    {
      q: 'Which planet goes with which weekday?',
      a: 'Sunday: the Sun. Monday: the Moon. Tuesday: Mars. Wednesday: Mercury. Thursday: Jupiter. Friday: Venus. Saturday: Saturn.',
    },
    {
      q: 'How does the planet of the day relate to planetary hours?',
      a: 'The planet of the day also rules the first planetary hour after sunrise; the following hours then run through the Chaldean order. The Planetary Hours page shows the hour you are in at your location.',
    },
    {
      q: 'Is the guidance for the day a prediction?',
      a: 'No. The suggestions are traditional themes offered for reflection, such as study on Wednesday or generosity on Thursday. They are not rulings and not forecasts, and they never replace the obligations of worship, istikhāra or wise counsel. Allah alone knows the unseen.',
    },
  ],
  fr: [
    {
      q: 'Quelle est la planète du jour ?',
      a: "Dans le calendrier astrologique traditionnel, chaque jour de la semaine est lié à l'une des sept planètes classiques. La page affiche cette planète, ses thèmes traditionnels, ainsi que la sadaqa et le dhikr que la tradition associe à ce jour.",
    },
    {
      q: 'Quelle planète correspond à quel jour ?',
      a: 'Dimanche : le Soleil. Lundi : la Lune. Mardi : Mars. Mercredi : Mercure. Jeudi : Jupiter. Vendredi : Vénus. Samedi : Saturne.',
    },
    {
      q: 'Quel lien entre la planète du jour et les heures planétaires ?',
      a: "La planète du jour gouverne aussi la première heure planétaire après le lever du soleil ; les heures suivantes suivent ensuite l'ordre chaldéen. La page Heures planétaires indique l'heure en cours à votre position.",
    },
    {
      q: 'Les conseils du jour sont-ils une prédiction ?',
      a: "Non. Ce sont des thèmes traditionnels proposés pour la réflexion, comme l'étude le mercredi ou la générosité le jeudi. Ils ne sont ni des avis juridiques ni des prévisions, et ne remplacent jamais les obligations cultuelles, l'istikhāra ou le conseil avisé. Allah seul connaît l'invisible.",
    },
  ],
};
