/**
 * Copy for the /best-day-for/* pages. Every weekday, planetary hour and
 * caution named here is interpolated from the election configs (see
 * purposeFacts in ./data), and every Sunnah / fiqh note is quoted from text
 * already in the repo:
 *   - travel: src/lib/ikhtiyarat/travelBadges.ts (Thursday, bukūr, Friday caution)
 *   - marriage: src/lib/ikhtiyarat/hijri.ts (Friday, Shawwāl, year-round nikāḥ)
 *     and src/lib/ikhtiyarat/urf.ts (Ṣafar omen negated)
 *   - istikhāra / mashwara / tawakkul: src/features/ikhtiyarat/copy.ts disclaimer
 * Moving home and business have no Sunnah notes in the repo, so none are given.
 */

import type { FaqItem, RelatedLink } from '@/src/components/seo/SeoSections';
import type { PageLang } from '@/src/lib/pageLang';
import type { PurposeSlug } from '@/src/lib/ikhtiyarat/purposes';
import { listJoin } from './data';

interface Facts {
  weekdays: { day: number; points: number; name: string; detail: string }[];
  weekdayNames: string[];
  planetNames: string[];
  cautions: string[];
}

export interface PurposeCopy {
  title: string;
  description: string;
  h1: string;
  intro: string[];
  sunnahTitle?: string;
  sunnah?: string[];
  faqs: FaqItem[];
}

export const REFLECTION: Record<PageLang, string> = {
  en: 'For reflection, not prediction. No timing replaces istikhāra, consultation (mashwara) with family and trusted scholars, and tawakkul (reliance on Allah); Allah alone knows the unseen.',
  fr: "Pour la réflexion, pas la prédiction. Aucun choix de moment ne remplace l'istikhāra, la consultation (mashwara) avec la famille et des savants de confiance, et le tawakkul (confiance en Allah) ; Allah seul connaît l'invisible.",
};

export const PURPOSE_NAV: Record<PurposeSlug, Record<PageLang, { name: string; short: string }>> = {
  marriage: { en: { name: 'Best Day for Nikah (Marriage)', short: 'Marriage (nikāḥ)' }, fr: { name: 'Meilleur jour pour le nikāḥ', short: 'Mariage (nikāḥ)' } },
  travel: { en: { name: 'Best Day to Travel', short: 'Travel' }, fr: { name: 'Jour favorable pour voyager', short: 'Voyage' } },
  'moving-home': { en: { name: 'Best Day to Move Home', short: 'Moving home' }, fr: { name: 'Jour favorable pour déménager', short: 'Déménagement' } },
  business: { en: { name: 'Best Day to Start a Business', short: 'Business & contracts' }, fr: { name: 'Jour favorable pour commencer une affaire', short: 'Affaires et contrats' } },
};

function cautionSentence(f: Facts, lang: PageLang) {
  return lang === 'fr'
    ? `Ces conditions écartent entièrement un créneau : ${f.cautions.join(' ; ')}.`
    : `These conditions rule a window out entirely: ${f.cautions.join('; ')}.`;
}

export function purposeCopy(slug: PurposeSlug, lang: PageLang, f: Facts): PurposeCopy {
  const days = listJoin(f.weekdayNames, lang);
  const hours = listJoin(f.planetNames, lang);
  const fr = lang === 'fr';
  // French articles: "le mercredi et le jeudi", "du jeudi et du lundi".
  const leDays = listJoin(f.weekdayNames.map((d) => `le ${d}`), 'fr');
  const duRest = listJoin(f.weekdayNames.slice(1).map((d) => `du ${d}`), 'fr');

  if (slug === 'marriage') {
    return fr
      ? {
          title: 'Meilleur jour pour le mariage (nikāḥ) en islam',
          description: `Quel jour choisir pour un nikāḥ ? Les jours (${days}) et heures planétaires (${hours}) favorisés par l'ikhtiyārāt, et les prochaines dates propices. Pour la réflexion.`,
          h1: 'Meilleur jour pour le nikāḥ (mariage) en islam — jours et heures favorables',
          intro: [
            "Aucune date n'est religieusement interdite pour le nikāḥ : le mariage est permis à tout moment de l'année. Beaucoup de familles aiment pourtant choisir un moment béni, et la science classique de l'ikhtiyārāt (choix du moment) offre un cadre pour y réfléchir.",
            "Voici les jours de la semaine et les heures planétaires que les règles d'ikhtiyārāt d'Asrār favorisent pour le mariage, les conditions qu'elles écartent, et les prochaines dates que le même moteur juge propices — recalculées à chaque chargement de la page.",
          ],
          sunnahTitle: 'Dans la Sunna',
          sunnah: [
            'Le vendredi est le jour le plus béni de la semaine dans la Sunna.',
            "Le Prophète ﷺ a épousé ʿĀʾisha (RA) pendant Chawwal — un mois traditionnellement privilégié pour le mariage.",
            "Le Prophète ﷺ a explicitement nié le présage de Safar (« ...wa-lā ṣafar » — Bukhārī et Muslim) ; le mariage pendant Safar est pleinement permis en fiqh.",
          ],
          faqs: [
            { q: 'Quel est le meilleur jour pour le nikāḥ en islam ?', a: `Aucun jour n'est interdit pour le nikāḥ. Dans les règles d'ikhtiyārāt d'Asrār, le ${f.weekdays[0].name} obtient le meilleur score (${f.weekdays[0].detail}), suivi ${duRest}. La Sunna décrit aussi le vendredi comme le jour le plus béni de la semaine.` },
            { q: 'Quelles heures planétaires sont favorables pour un mariage ?', a: `Les heures de ${hours}. Les heures planétaires divisent le jour (du lever au coucher du soleil) et la nuit en douze parts chacun, gouvernées tour à tour par les sept planètes classiques ; elles dépendent donc de votre position.` },
            { q: 'Y a-t-il un mois recommandé pour se marier ?', a: "Le Prophète ﷺ a épousé ʿĀʾisha (RA) pendant Chawwal, un mois traditionnellement privilégié pour le mariage. Le nikāḥ reste permis toute l'année, y compris pendant le Ramadan." },
            { q: 'Se marier pendant Safar porte-t-il malheur ?', a: "Non. Le mariage pendant Safar est parfois évité par coutume dans certaines communautés sénégambiennes, mais le Prophète ﷺ a explicitement nié le présage de Safar (« ...wa-lā ṣafar » — Bukhārī et Muslim) ; le mariage pendant Safar est pleinement permis en fiqh." },
            { q: "Quand l'outil conseille-t-il la prudence ?", a: cautionSentence(f, 'fr') },
            { q: 'Une date favorable garantit-elle un mariage heureux ?', a: "Non. C'est un support de réflexion, pas une prédiction. Il ne remplace ni l'istikhāra, ni la consultation (mashwara) avec la famille et des savants de confiance, ni le tawakkul." },
          ],
        }
      : {
          title: 'Best Day for Nikah in Islam: Days & Hours for Marriage',
          description: `Which days (${days}) and planetary hours (${hours}) the classical ikhtiyārāt rules favour for a nikāḥ, plus the next favourable dates. For reflection, not prediction.`,
          h1: 'Best Day for Nikah in Islam — Favourable Days and Hours for Marriage',
          intro: [
            'No date is religiously forbidden for nikāḥ: marriage is permitted at any time of the year. Many families still like to choose a blessed moment, and the classical science of ikhtiyārāt (electional timing) offers a framework for that reflection.',
            'Below are the weekdays and planetary hours the Asrār ikhtiyārāt rules favour for marriage, the conditions they rule out, and the next dates the same engine rates favourable — recalculated every time this page loads.',
          ],
          sunnahTitle: 'In the Sunnah',
          sunnah: [
            'Friday is the most blessed day of the week in the Sunnah.',
            'The Prophet ﷺ married ʿĀʾisha (RA) in Shawwāl — a month long favoured for marriage in the Sunnah.',
            'The Prophet ﷺ explicitly negated the Ṣafar omen ("…wa-lā ṣafar" — Bukhārī & Muslim); marriage in Ṣafar is fully permissible in fiqh.',
          ],
          faqs: [
            { q: 'What is the best day for nikah in Islam?', a: `No day is forbidden for nikāḥ. In the Asrār ikhtiyārāt rules ${f.weekdays[0].name} scores highest (${f.weekdays[0].detail}), followed by ${listJoin(f.weekdayNames.slice(1), 'en')}. The Sunnah also describes Friday as the most blessed day of the week.` },
            { q: 'Which planetary hours are favourable for a wedding?', a: `The hours of ${hours}. Planetary hours divide daytime (sunrise to sunset) and night into twelve parts each, ruled in turn by the seven classical planets, so they depend on your location.` },
            { q: 'Is there a recommended month for marriage?', a: 'The Prophet ﷺ married ʿĀʾisha (RA) in Shawwāl, a month long favoured for marriage in the Sunnah. Nikāḥ itself is permitted year-round, including during Ramadan.' },
            { q: 'Is it bad luck to marry in Ṣafar?', a: 'No. Weddings in Ṣafar are customarily avoided in some Senegambian communities, but the Prophet ﷺ explicitly negated the Ṣafar omen ("…wa-lā ṣafar" — Bukhārī & Muslim); marriage in Ṣafar is fully permissible in fiqh.' },
            { q: 'When does the tool advise caution?', a: cautionSentence(f, 'en') },
            { q: 'Does a favourable date guarantee a happy marriage?', a: 'No. This is an aid to reflection, not a prediction. It is not a substitute for istikhāra, consultation (mashwara) with family and trusted scholars, and tawakkul (reliance on Allah).' },
          ],
        };
  }

  if (slug === 'travel') {
    return fr
      ? {
          title: 'Jour favorable pour voyager en islam : jours et heures',
          description: `Le Prophète ﷺ préférait partir le jeudi. Jours (${days}) et heures planétaires (${hours}) favorables au voyage selon l'ikhtiyārāt, et les prochaines dates propices.`,
          h1: 'Jour favorable pour voyager en islam — jours et heures propices',
          intro: [
            "Le Prophète ﷺ préférait partir en voyage le jeudi (Bukhārī) et a invoqué la bénédiction sur les départs matinaux : « Allāhumma bārik li-ummatī fī bukūrihā » — Ô Allah, bénis mon ummah dans ses matins.",
            "Les règles d'ikhtiyārāt d'Asrār y ajoutent le jour, l'heure planétaire et l'état de la Lune. Voici ce qu'elles favorisent pour un voyage, ce qu'elles écartent, et les prochaines dates propices — recalculées à chaque chargement de la page.",
          ],
          sunnahTitle: 'Dans la Sunna',
          sunnah: [
            'Le Prophète ﷺ préférait partir en voyage le jeudi (Bukhārī).',
            '« Allāhumma bārik li-ummatī fī bukūrihā » — Ô Allah, bénis mon ummah dans ses matins (départ matinal, bukūr).',
            "Pour ceux qui sont tenus d'assister à la Jumuʿah, partir après l'appel à la prière du vendredi est déconseillé en fiqh.",
          ],
          faqs: [
            { q: 'Quel est le jour favorable pour voyager en islam ?', a: `Le Prophète ﷺ préférait partir en voyage le jeudi (Bukhārī). Les règles d'ikhtiyārāt d'Asrār favorisent ${leDays} : ${f.weekdays.map((w) => w.detail).join(' ')}` },
            { q: "À quelle heure partir en voyage ?", a: "Tôt le matin : l'outil accorde un bonus aux départs entre 5 h et 10 h (bukūr), en écho à l'invocation « Allāhumma bārik li-ummatī fī bukūrihā »." },
            { q: 'Quelles heures planétaires favorisent le voyage ?', a: `Les heures de ${hours}. Elles dépendent du lever et du coucher du soleil à votre position.` },
            { q: 'Peut-on voyager le vendredi ?', a: "Oui. Pour ceux qui sont tenus d'assister à la Jumuʿah, partir après l'appel à la prière du vendredi est déconseillé en fiqh ; cette note est purement informative et n'affecte pas le score." },
            { q: "Quand l'outil conseille-t-il la prudence ?", a: `${cautionSentence(f, 'fr')} L'outil pénalise aussi Mercure rétrograde (plans et documents de voyage) et une Lune en signe fixe, associée au retard.` },
            { q: 'Est-ce une garantie de bon voyage ?', a: "Non. C'est un support de réflexion, pas une prédiction ; il ne remplace ni l'istikhāra, ni la consultation (mashwara), ni le tawakkul." },
          ],
        }
      : {
          title: 'Best Day to Travel in Islam: Favourable Days & Hours',
          description: `The Prophet ﷺ preferred to set out on Thursday. The days (${days}) and planetary hours (${hours}) the ikhtiyārāt rules favour for a journey, plus the next favourable dates.`,
          h1: 'Best Day to Travel in Islam — Favourable Days and Hours for a Journey',
          intro: [
            'The Prophet ﷺ preferred to set out on journeys on Thursday (Bukhārī), and prayed for blessing on early departures: "Allāhumma bārik li-ummatī fī bukūrihā" — O Allah, bless my ummah in its early mornings.',
            'The Asrār ikhtiyārāt rules add the day ruler, the planetary hour and the state of the Moon. Below is what they favour for a journey, what they rule out, and the next favourable dates — recalculated every time this page loads.',
          ],
          sunnahTitle: 'In the Sunnah',
          sunnah: [
            'The Prophet ﷺ preferred to set out on journeys on Thursday (Bukhārī).',
            '"Allāhumma bārik li-ummatī fī bukūrihā" — O Allah, bless my ummah in its early mornings (early departure, bukūr).',
            'For those obligated to attend Jumuʿah, departing after the call to Friday prayer is discouraged in fiqh.',
          ],
          faqs: [
            { q: 'What is the best day to travel in Islam?', a: `The Prophet ﷺ preferred to set out on journeys on Thursday (Bukhārī). The Asrār ikhtiyārāt rules favour ${days}: ${f.weekdays.map((w) => w.detail).join(' ')}` },
            { q: 'What time of day is best to set out?', a: 'Early morning: the tool gives a bonus to departures between 05:00 and 10:00 (bukūr), echoing the prayer "Allāhumma bārik li-ummatī fī bukūrihā".' },
            { q: 'Which planetary hours favour travel?', a: `The hours of ${hours}. They depend on sunrise and sunset at your location.` },
            { q: 'Can I travel on a Friday?', a: 'Yes. For those obligated to attend Jumuʿah, departing after the call to Friday prayer is discouraged in fiqh; this note is informational only and does not affect the score.' },
            { q: 'When does the tool advise caution?', a: `${cautionSentence(f, 'en')} It also penalises Mercury retrograde (travel plans and documents) and a Moon in a fixed sign, which inclines to delay.` },
            { q: 'Does a favourable date guarantee a safe journey?', a: 'No. This is an aid to reflection, not a prediction; it is not a substitute for istikhāra, consultation (mashwara) and tawakkul (reliance on Allah).' },
          ],
        };
  }

  if (slug === 'moving-home') {
    return fr
      ? {
          title: 'Jour favorable pour déménager : jours et heures (ikhtiyārāt)',
          description: `Quel jour déménager ou poser une fondation ? Jours (${days}) et heures planétaires (${hours}) favorisés par l'ikhtiyārāt classique, et les prochaines dates propices.`,
          h1: "Jour favorable pour déménager — jours et heures selon l'ikhtiyārāt",
          intro: [
            "Emménager dans un nouveau foyer ou commencer une construction est une décision qui se prend avec l'istikhāra et la consultation (mashwara). La science classique de l'ikhtiyārāt (choix du moment) propose en plus un cadre de réflexion sur le moment.",
            "Voici les jours et heures planétaires que les règles « Déménagement / Construction » d'Asrār favorisent, les conditions qu'elles écartent, et les prochaines dates propices — recalculées à chaque chargement de la page.",
          ],
          faqs: [
            { q: 'Quel est le jour favorable pour déménager ?', a: `Les règles d'ikhtiyārāt d'Asrār favorisent ${leDays} : ${f.weekdays.map((w) => w.detail).join(' ')}` },
            { q: 'Quelles heures planétaires favorisent un déménagement ?', a: `Les heures de ${hours}. Elles dépendent du lever et du coucher du soleil à votre position.` },
            { q: 'Pourquoi la Lune en signe fixe compte-t-elle ?', a: "Pour une fondation ou un foyer destiné à durer, les règles préfèrent une Lune en signe fixe (burj thābit), signe de stabilité, et pénalisent un signe mobile, qui incline à l'impermanence." },
            { q: 'Ces règles valent-elles aussi pour une construction ?', a: "Oui. Le même jeu de règles « Déménagement / Construction » sert pour emménager, poser une fondation ou commencer un chantier." },
            { q: "Quand l'outil conseille-t-il la prudence ?", a: `${cautionSentence(f, 'fr')} Saturne rétrograde est aussi pénalisé.` },
            { q: 'Est-ce une garantie ?', a: "Non. C'est un support de réflexion, pas une prédiction ; il ne remplace ni l'istikhāra, ni la consultation (mashwara), ni le tawakkul." },
          ],
        }
      : {
          title: 'Best Day to Move House: Favourable Days & Hours (Ikhtiyārāt)',
          description: `Which days (${days}) and planetary hours (${hours}) the classical ikhtiyārāt rules favour for moving into a new home or laying a foundation, plus the next favourable dates.`,
          h1: 'Best Day to Move Home — Favourable Days and Hours in Ikhtiyārāt',
          intro: [
            'Moving into a new home or starting a building is a decision made with istikhāra and consultation (mashwara). The classical science of ikhtiyārāt (electional timing) adds a framework for reflecting on the moment.',
            'Below are the weekdays and planetary hours the Asrār "Moving / Building" rules favour, the conditions they rule out, and the next favourable dates — recalculated every time this page loads.',
          ],
          faqs: [
            { q: 'What is the best day to move house?', a: `The Asrār ikhtiyārāt rules favour ${days}: ${f.weekdays.map((w) => w.detail).join(' ')}` },
            { q: 'Which planetary hours favour moving home?', a: `The hours of ${hours}. They depend on sunrise and sunset at your location.` },
            { q: 'Why does a fixed Moon sign matter?', a: 'For a foundation or household meant to endure, the rules prefer the Moon in a fixed sign (burj thābit), which shows stability, and penalise a movable sign, which inclines to impermanence.' },
            { q: 'Do the same rules apply to building?', a: 'Yes. The same "Moving / Building" rule set is used for moving in, laying a foundation or starting construction.' },
            { q: 'When does the tool advise caution?', a: `${cautionSentence(f, 'en')} Saturn retrograde is also penalised.` },
            { q: 'Is a favourable date a guarantee?', a: 'No. This is an aid to reflection, not a prediction; it is not a substitute for istikhāra, consultation (mashwara) and tawakkul (reliance on Allah).' },
          ],
        };
  }

  // business
  return fr
    ? {
        title: 'Jour favorable pour commencer une affaire ou signer un contrat',
        description: `Quel jour lancer une entreprise ou signer un contrat ? Jours (${days}) et heures planétaires (${hours}) favorisés par l'ikhtiyārāt, et les prochaines dates propices.`,
        h1: "Jour favorable pour commencer une affaire — jours et heures selon l'ikhtiyārāt",
        intro: [
          "Lancer une entreprise, ouvrir un commerce ou signer un contrat se décide avec l'istikhāra et la consultation (mashwara). La science classique de l'ikhtiyārāt (choix du moment) offre en plus un cadre de réflexion sur le moment.",
          "Voici les jours et heures planétaires que les règles « Affaires / Contrats » d'Asrār favorisent, les conditions qu'elles écartent, et les prochaines dates propices — recalculées à chaque chargement de la page.",
        ],
        faqs: [
          { q: 'Quel est le jour favorable pour commencer une affaire ?', a: `Les règles d'ikhtiyārāt d'Asrār favorisent ${leDays} : ${f.weekdays.map((w) => w.detail).join(' ')}` },
          { q: 'Quelles heures planétaires favorisent les affaires ?', a: `Les heures de ${hours}. Elles dépendent du lever et du coucher du soleil à votre position.` },
          { q: 'Pourquoi Mercure compte-t-il autant ?', a: "Mercure est associé à la négociation et aux contrats : Mercure rétrograde ou combuste écarte un créneau, tandis qu'un Mercure dignifié ajoute des points." },
          { q: 'Démarrer une entreprise et signer un contrat, est-ce la même chose ?', a: "L'outil utilise le même jeu de règles « Affaires / Contrats » pour les deux ; « Démarrer une entreprise » est proposé comme choix distinct dans l'outil." },
          { q: "Quand l'outil conseille-t-il la prudence ?", a: cautionSentence(f, 'fr') },
          { q: 'Est-ce une garantie de réussite ?', a: "Non. C'est un support de réflexion, pas une prédiction ; il ne remplace ni l'istikhāra, ni la consultation (mashwara), ni le tawakkul. La subsistance (rizq) vient d'Allah." },
        ],
      }
    : {
        title: 'Best Day to Start a Business or Sign a Contract (Ikhtiyārāt)',
        description: `Which days (${days}) and planetary hours (${hours}) the classical ikhtiyārāt rules favour for starting a business or signing a contract, plus the next favourable dates.`,
        h1: 'Best Day to Start a Business — Favourable Days and Hours in Ikhtiyārāt',
        intro: [
          'Starting a business, opening a shop or signing a contract is a decision made with istikhāra and consultation (mashwara). The classical science of ikhtiyārāt (electional timing) adds a framework for reflecting on the moment.',
          'Below are the weekdays and planetary hours the Asrār "Business / Contracts" rules favour, the conditions they rule out, and the next favourable dates — recalculated every time this page loads.',
        ],
        faqs: [
          { q: 'What is the best day to start a business?', a: `The Asrār ikhtiyārāt rules favour ${days}: ${f.weekdays.map((w) => w.detail).join(' ')}` },
          { q: 'Which planetary hours favour business?', a: `The hours of ${hours}. They depend on sunrise and sunset at your location.` },
          { q: 'Why does Mercury matter so much?', a: 'Mercury is associated with negotiation and contracts: Mercury retrograde or combust rules a window out, while a dignified Mercury adds points.' },
          { q: 'Is starting a business the same as signing a contract?', a: 'The tool uses the same "Business / Contracts" rule set for both; "Starting a Business" is offered as its own choice in the tool.' },
          { q: 'When does the tool advise caution?', a: cautionSentence(f, 'en') },
          { q: 'Does a favourable date guarantee success?', a: 'No. This is an aid to reflection, not a prediction; it is not a substitute for istikhāra, consultation (mashwara) and tawakkul (reliance on Allah). Provision (rizq) comes from Allah.' },
        ],
      };
}

export type { RelatedLink };
