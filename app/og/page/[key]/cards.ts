import { SADAQAH_BY_DAY } from '@/src/features/calculator/lib/sadaqahByDay';
import { PURPOSE_SLUGS, type PurposeSlug } from '@/src/lib/ikhtiyarat/purposes';
import type { CardProps } from '@/src/lib/og/card';
import { clamp } from '@/src/lib/og/card';
import type { OgLang, OgPageKey } from '@/src/lib/og/urls';
import { PURPOSE_NAV } from '@/app/best-day-for/copy';
import { capitalise, formatDate, getUpcomingDates, listJoin, purposeFacts, WEEKDAYS } from '@/app/best-day-for/data';

const FOOTER: Record<OgLang, string> = {
  en: 'For reflection, not prediction · Only Allah knows the unseen',
  fr: "Pour la réflexion, non la prédiction · Seul Allah connaît l'invisible",
};

type StaticCopy = Pick<CardProps, 'accent' | 'eyebrow' | 'title' | 'subtitle'>;

/** Card text for the pages whose card does not change by day (reuses each page's own H1 / description wording). */
const STATIC: Partial<Record<OgPageKey, Record<OgLang, StaticCopy>>> = {
  ikhtiyarat: {
    en: { accent: 'emerald', eyebrow: 'Ikhtiyārāt · Best Dates', title: 'Choose an Auspicious Date', subtitle: 'Check a date or find favourable days for nikāḥ, travel, business or moving home using classical Islamic timing.' },
    fr: { accent: 'emerald', eyebrow: 'Ikhtiyārāt · Meilleures dates', title: 'Choisir une date propice', subtitle: 'Vérifiez une date ou trouvez des jours favorables pour un nikāḥ, un voyage, une affaire ou un déménagement.' },
  },
  abjad: {
    en: { accent: 'indigo', eyebrow: 'ʿIlm al-Ḥurūf', title: 'Abjad Calculator', subtitle: 'The numerical value of any Arabic name or phrase, letter by letter, with elemental balance. Maghribi and Mashriqi systems.' },
    fr: { accent: 'indigo', eyebrow: 'ʿIlm al-Ḥurūf', title: 'Calculateur Abjad', subtitle: "La valeur numérique de tout nom ou phrase en arabe, lettre par lettre, avec l'équilibre des éléments. Systèmes maghribi et mashriqi." },
  },
  'planetary-hours': {
    en: { accent: 'indigo', eyebrow: 'ʿIlm al-Nujūm', title: 'Planetary Hours Today', subtitle: 'Real-time Chaldean planetary hours for your location, with the ruling planet of each hour and what it favours.' },
    fr: { accent: 'indigo', eyebrow: 'ʿIlm al-Nujūm', title: "Heures planétaires aujourd'hui", subtitle: "Les heures planétaires chaldéennes en temps réel pour votre position, avec la planète de chaque heure et ce qu'elle favorise." },
  },
  'planet-of-the-day': {
    en: { accent: 'amber', eyebrow: 'ʿIlm al-Nujūm', title: 'Planet of the Day', subtitle: "Today's ruling planet, its spiritual qualities, recommended dhikr and daily guidance." },
    fr: { accent: 'amber', eyebrow: 'ʿIlm al-Nujūm', title: 'Planète du jour', subtitle: 'La planète gouvernante du jour, ses qualités spirituelles, le dhikr recommandé et les conseils quotidiens.' },
  },
  compatibility: {
    en: { accent: 'pink', eyebrow: 'Abjad Soul Connection', title: 'Name Compatibility for Marriage', subtitle: 'Compare two names (marriage, family, friendship, work) or two dates of birth with the classical Abjad method.' },
    fr: { accent: 'pink', eyebrow: 'Connexion des âmes (Abjad)', title: 'Compatibilité des prénoms pour le mariage', subtitle: 'Comparez deux prénoms (mariage, famille, amitié, travail) ou deux dates de naissance avec la méthode abjad classique.' },
  },
  'name-and-mother-burj': {
    en: { accent: 'violet', eyebrow: 'Istikhāra al-Asmāʾ', title: "Find Your Burj from Your Name and Your Mother's Name", subtitle: 'Your burj (ṭabʿ), element, blessed day, dhikr and sadaqah from the Abjad value of the two names.' },
    fr: { accent: 'violet', eyebrow: 'Istikhāra al-Asmāʾ', title: 'Trouver son burj avec son nom et le nom de sa mère', subtitle: 'Votre burj (ṭabʿ), élément, jour béni, dhikr et sadaqa à partir de la valeur abjad des deux noms.' },
  },
  sadaqa: {
    en: { accent: 'emerald', eyebrow: 'Sadaqa Guide', title: 'Sadaqah by Weekday, Hijri Birth Month and Burj', subtitle: 'West African tradition: Tamxarit, Gamo, Korité, Tabaski… and the sadaqah for each day of the week.' },
    fr: { accent: 'emerald', eyebrow: 'Guide de la sadaqa', title: 'La sadaqa par jour, mois hégirien de naissance et burj', subtitle: 'Tradition ouest-africaine : Tamxarit, Gamo, Korité, Tabaski… et la sadaqa de chaque jour de la semaine.' },
  },
};

function weekdayFromYmd(ymd: string): number {
  return new Date(`${ymd}T12:00:00Z`).getUTCDay();
}

function sadaqaOfTheDay(lang: OgLang, ymd: string): CardProps {
  const day = weekdayFromYmd(ymd);
  const text = SADAQAH_BY_DAY[day][lang];
  const dayName = WEEKDAYS[lang][day];
  const items = text.items.map((s) => s.replace(/\.$/, ''));
  const shown = items.slice(0, 3).map((s) => clamp(s, 62));
  return {
    accent: 'emerald',
    eyebrow: lang === 'fr' ? 'Sadaqa du jour' : 'Sadaqa of the Day',
    title: lang === 'fr' ? `La sadaqa du ${dayName}` : `${dayName}'s sadaqah`,
    highlight: {
      label: lang === 'fr' ? 'Tradition ouest-africaine — recommandé :' : 'West African tradition — recommended:',
      lines: items.length > 3 ? [...shown.slice(0, 2), lang === 'fr' ? `… et ${items.length - 2} autres` : `… and ${items.length - 2} more`] : shown,
    },
    footer: FOOTER[lang],
  };
}

async function nextDateLine(slug: PurposeSlug, lang: OgLang): Promise<string | null> {
  try {
    const next = (await getUpcomingDates(slug))[0];
    return next ? capitalise(formatDate(next.ymd, lang)) : null;
  } catch {
    return null;
  }
}

async function bestDayFor(slug: PurposeSlug, lang: OgLang): Promise<CardProps> {
  const f = purposeFacts(slug, lang);
  const next = await nextDateLine(slug, lang);
  const days = capitalise(listJoin(f.weekdayNames, lang));
  const hours = listJoin(f.planetNames, lang);
  return {
    accent: 'emerald',
    eyebrow: lang === 'fr' ? 'Ikhtiyārāt · Meilleur jour' : 'Ikhtiyārāt · Best Day',
    title: PURPOSE_NAV[slug][lang].name,
    subtitle: clamp(lang === 'fr' ? `Jours favorables : ${days}. Heures : ${hours}.` : `Favoured days: ${days}. Hours: ${hours}.`, 120),
    highlight: next
      ? { label: lang === 'fr' ? 'Prochaine date favorable (La Mecque)' : 'Next favourable date (Makkah)', lines: [next] }
      : undefined,
    footer: FOOTER[lang],
  };
}

async function bestDayHub(lang: OgLang): Promise<CardProps> {
  const lines = await Promise.all(
    PURPOSE_SLUGS.map(async (slug) => {
      const next = await nextDateLine(slug, lang);
      return `${PURPOSE_NAV[slug][lang].short}${next ? ` — ${next}` : ''}`;
    }),
  );
  return {
    accent: 'emerald',
    eyebrow: lang === 'fr' ? 'Ikhtiyārāt · Meilleur jour pour…' : 'Ikhtiyārāt · Best Day For…',
    title: lang === 'fr' ? 'Mariage, voyage, déménagement, affaires' : 'Nikah, Travel, Moving Home, Business',
    highlight: { label: lang === 'fr' ? 'Prochaines dates favorables (La Mecque)' : 'Next favourable dates (Makkah)', lines: lines.map((l) => clamp(l, 64)) },
    footer: FOOTER[lang],
  };
}

/** Card for a page key. `ymd` is the (validated) UTC day for daily cards. */
export async function cardFor(key: OgPageKey, lang: OgLang, ymd: string): Promise<CardProps> {
  if (key === 'sadaqa-of-the-day') return sadaqaOfTheDay(lang, ymd);
  if (key === 'best-day-for') return bestDayHub(lang);
  if (key.startsWith('best-day-for-')) return bestDayFor(key.slice('best-day-for-'.length) as PurposeSlug, lang);
  const copy = STATIC[key]![lang];
  return { ...copy, footer: FOOTER[lang] };
}
