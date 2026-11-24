import type { FaqItem, RelatedLink } from '@/src/components/seo/SeoSections';

/**
 * Copy (EN/FR) for the server-rendered parts of the Zikr Portal (/zikr).
 * Reflection-only wording: zikr is described as remembrance and practice, never as a promise of results.
 * Statements about saving and sharing data match the tracker code (src/features/ramadanChallenges:
 * progress is kept in the browser, synced to the account only when signed in, and logged counts feed an
 * anonymous community total).
 */

export type ZikrLang = 'en' | 'fr';

export interface ZikrKind {
  /** Value of the page's ?challenge= deep link (see ZikrPage). */
  slug: 'istighfar' | 'salawat' | 'divine-name' | 'prophetic-names' | 'debt-relief' | 'custom';
  name: Record<ZikrLang, string>;
  blurb: Record<ZikrLang, string>;
}

export const ZIKR_KINDS: readonly ZikrKind[] = [
  {
    slug: 'istighfar',
    name: { en: 'Istighfār', fr: 'Istighfār' },
    blurb: {
      en: 'Asking Allah for forgiveness. Set a daily number and count it with the tasbīḥ counter.',
      fr: 'Demander pardon à Allah. Fixez un nombre quotidien et comptez-le avec le compteur de tasbīḥ.',
    },
  },
  {
    slug: 'salawat',
    name: { en: 'Ṣalawāt on the Prophet ﷺ', fr: 'Ṣalawāt sur le Prophète ﷺ' },
    blurb: {
      en: 'Choose a form of ṣalawāt, set a daily target and keep a running total.',
      fr: 'Choisissez une forme de ṣalawāt, fixez un objectif quotidien et suivez votre total.',
    },
  },
  {
    slug: 'divine-name',
    name: { en: 'Divine Names', fr: 'Noms divins' },
    blurb: {
      en: 'Pick a Name of Allah from the list and count its recitation.',
      fr: 'Choisissez un Nom d’Allah dans la liste et comptez sa récitation.',
    },
  },
  {
    slug: 'prophetic-names',
    name: { en: '201 Prophetic Names', fr: '201 Noms prophétiques' },
    blurb: {
      en: 'The 201 Names of the Prophet ﷺ from the Dalāʾil al-Khayrāt tradition, practised with a counter.',
      fr: 'Les 201 Noms du Prophète ﷺ de la tradition des Dalāʾil al-Khayrāt, pratiqués avec un compteur.',
    },
  },
  {
    slug: 'debt-relief',
    name: { en: 'Debt Relief Wird', fr: 'Wird pour les dettes' },
    blurb: {
      en: 'A Qurʾānic wird (Sūrat Fāṭir 35:17 and Sūrat Ibrāhīm 14:20) counted to 1000 after ʿIshāʾ.',
      fr: 'Un wird coranique (Sourate Fāṭir 35:17 et Sourate Ibrāhīm 14:20) compté jusqu’à 1000 après ʿIshāʾ.',
    },
  },
  {
    slug: 'custom',
    name: { en: 'Your own wird', fr: 'Votre propre wird' },
    blurb: {
      en: 'Add any phrase you recite, give it a daily target and track it day by day.',
      fr: 'Ajoutez toute formule que vous récitez, donnez-lui un objectif quotidien et suivez-la jour après jour.',
    },
  },
];

export const ZIKR_PORTAL_COPY = {
  en: {
    h1: 'Zikr Portal: Dhikr Counter and Daily Tracker',
    intro:
      'Zikr (dhikr) is the remembrance of Allah through repeated phrases and Names. Choose a practice, count it with a tasbīḥ counter and keep a daily tally, all year, not only in Ramadan. For remembrance and reflection.',
    chooseTitle: 'Choose a zikr',
    chooseIntro: 'Tap a zikr to add it to your tracker. Your daily targets, totals and streaks appear above.',
    howTitle: 'How the tracker works',
    how: [
      'Add one or more zikr and give each a daily target.',
      'Tap to count with the tasbīḥ counter, or log a batch with the quick-add buttons.',
      'See today’s count, your running total and your day streak.',
      'Share your progress, or earn badges for steady practice.',
    ],
    privacyNote:
      'Your progress is saved in your browser, and syncs to your account if you sign in. Counts you log are also added to an anonymous community total.',
    faqTitle: 'Frequently asked questions',
    relatedTitle: 'Related tools',
    open: 'Add to my tracker',
  },
  fr: {
    h1: 'Portail du Zikr : compteur de dhikr et suivi quotidien',
    intro:
      'Le zikr (dhikr) est le rappel d’Allah par la répétition de formules et de Noms. Choisissez une pratique, comptez-la avec un compteur de tasbīḥ et tenez un décompte quotidien, toute l’année et pas seulement pendant le Ramadan. Pour le rappel et la réflexion.',
    chooseTitle: 'Choisissez un zikr',
    chooseIntro: 'Touchez un zikr pour l’ajouter à votre suivi. Vos objectifs, totaux et séries du jour apparaissent au-dessus.',
    howTitle: 'Comment fonctionne le suivi',
    how: [
      'Ajoutez un ou plusieurs zikr et fixez un objectif quotidien pour chacun.',
      'Touchez pour compter avec le compteur de tasbīḥ, ou enregistrez un lot avec les boutons d’ajout rapide.',
      'Consultez le total du jour, votre total cumulé et votre série de jours.',
      'Partagez votre progression ou gagnez des badges pour une pratique régulière.',
    ],
    privacyNote:
      'Votre progression est enregistrée dans votre navigateur, et synchronisée avec votre compte si vous vous connectez. Les comptes que vous enregistrez s’ajoutent aussi à un total communautaire anonyme.',
    faqTitle: 'Questions fréquentes',
    relatedTitle: 'Outils associés',
    open: 'Ajouter à mon suivi',
  },
} as const;

export const ZIKR_FAQS: Record<ZikrLang, FaqItem[]> = {
  en: [
    {
      q: 'What is zikr (dhikr)?',
      a: 'Zikr, or dhikr, means remembrance: remembering Allah by repeating His Names, praising Him, asking His forgiveness or sending ṣalawāt on the Prophet ﷺ. Many people keep a daily wird, a fixed amount they recite regularly.',
    },
    {
      q: 'Can I use the Zikr Portal outside Ramadan?',
      a: 'Yes. The portal started as a Ramadan challenge tracker, but it works every day of the year. Choose any zikr, set your own daily target and track it whenever you wish.',
    },
    {
      q: 'How does the counter and tracker work?',
      a: 'Add a zikr, tap the tasbīḥ counter to count each recitation, and the portal records today’s count, your running total and your day streak. You can also log a batch of recitations with the quick-add buttons.',
    },
    {
      q: 'Is my progress private?',
      a: 'Your progress is saved in your browser. If you sign in, it also syncs to your account so you can continue on another device. The counts you log are added to an anonymous community total, with no name attached.',
    },
    {
      q: 'Does counting zikr guarantee a result?',
      a: 'No. The tracker helps you stay consistent in remembrance; it does not promise any outcome. Zikr is an act of worship and reflection, and Allah alone knows the unseen.',
    },
  ],
  fr: [
    {
      q: 'Qu’est-ce que le zikr (dhikr) ?',
      a: 'Le zikr, ou dhikr, signifie le rappel : se souvenir d’Allah en répétant Ses Noms, en Le louant, en demandant Son pardon ou en priant sur le Prophète ﷺ. Beaucoup de personnes tiennent un wird quotidien, une quantité fixe récitée régulièrement.',
    },
    {
      q: 'Puis-je utiliser le Portail du Zikr en dehors du Ramadan ?',
      a: 'Oui. Le portail est né comme suivi de défis pour le Ramadan, mais il fonctionne tous les jours de l’année. Choisissez un zikr, fixez votre objectif quotidien et suivez-le quand vous le souhaitez.',
    },
    {
      q: 'Comment fonctionnent le compteur et le suivi ?',
      a: 'Ajoutez un zikr, touchez le compteur de tasbīḥ pour compter chaque récitation, et le portail enregistre le total du jour, votre total cumulé et votre série de jours. Vous pouvez aussi enregistrer un lot de récitations avec les boutons d’ajout rapide.',
    },
    {
      q: 'Ma progression est-elle privée ?',
      a: 'Votre progression est enregistrée dans votre navigateur. Si vous vous connectez, elle est aussi synchronisée avec votre compte pour continuer sur un autre appareil. Les comptes que vous enregistrez s’ajoutent à un total communautaire anonyme, sans nom associé.',
    },
    {
      q: 'Compter son zikr garantit-il un résultat ?',
      a: 'Non. Le suivi aide à rester régulier dans le rappel ; il ne promet aucun résultat. Le zikr est un acte d’adoration et de réflexion, et Allah seul connaît l’invisible.',
    },
  ],
};

export const ZIKR_RELATED: Record<ZikrLang, readonly RelatedLink[]> = {
  en: [
    ['/99-names-of-allah', 'The 99 Names of Allah', 'Browse the Divine Names to choose one for your zikr.'],
    ['/planet-of-the-day', 'Planet of the Day', 'Today’s ruling planet and the zikr suggestions linked to it.'],
    ['/planetary-hours', 'Planetary Hours', 'The ruling planet of the current hour at your location.'],
    ['/abjad', 'Abjad Calculator', 'The Abjad value of any Arabic name or phrase.'],
  ],
  fr: [
    ['/99-names-of-allah', 'Les 99 Noms d’Allah', 'Parcourez les Noms divins pour en choisir un pour votre zikr.'],
    ['/planet-of-the-day', 'Planète du jour', 'La planète du jour et les suggestions de zikr qui lui sont liées.'],
    ['/planetary-hours', 'Heures planétaires', 'La planète gouvernante de l’heure actuelle à votre position.'],
    ['/abjad', 'Calculateur Abjad', 'La valeur Abjad de tout nom ou phrase en arabe.'],
  ],
};

export const ZIKR_META: Record<ZikrLang, { title: string; description: string }> = {
  en: {
    title: 'Zikr Portal: Dhikr Counter and Daily Tracker',
    description:
      'Free Zikr Portal: choose a dhikr (Istighfār, Ṣalawāt, Divine Names, 201 Prophetic Names), count it with a tasbīḥ counter and track your daily progress all year.',
  },
  fr: {
    title: 'Portail du Zikr : compteur de dhikr et suivi',
    description:
      'Portail du Zikr gratuit : choisissez un dhikr (Istighfār, Ṣalawāt, Noms divins, 201 Noms prophétiques), comptez-le avec un compteur de tasbīḥ et suivez votre progression toute l’année.',
  },
};
