import type { NextRequest } from 'next/server';
import { gregorianToHijri } from '@/src/lib/ikhtiyarat/hijri';
import { electionTypeFromParams, evaluateFromParams, type PageSearchParams } from '@/src/lib/ikhtiyarat/sharedResult';
import type { ElectionType } from '@/src/lib/ikhtiyarat/types';
import { renderCard } from '@/src/lib/og/card';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const ELECTION: Record<ElectionType, { en: string; fr: string }> = {
  marriage: { en: 'Marriage (nikāḥ)', fr: 'Mariage (nikāḥ)' },
  travel: { en: 'Travel', fr: 'Voyage' },
  business: { en: 'Business & contracts', fr: 'Affaires et contrats' },
  businessStart: { en: 'Starting a business', fr: "Création d'entreprise" },
  medical: { en: 'Medical treatment', fr: 'Traitement médical' },
  home: { en: 'Moving or building', fr: 'Déménagement ou construction' },
  education: { en: 'Education & studies', fr: 'Études et formation' },
};

/**
 * GET /og/ikhtiyarat/<YYYY-MM-DD>?lat&lon&tz&election&lang — result card for
 * an /ikhtiyarat/r/<date> share link. Re-evaluates the date with the same
 * engine call as the share page (sharedResult.ts); nothing else is read from
 * the URL. Location is not printed on the card.
 */
export async function GET(request: NextRequest, { params }: { params: { date: string } }) {
  const sp = Object.fromEntries(request.nextUrl.searchParams.entries()) as PageSearchParams;
  const lang = sp.lang === 'fr' ? 'fr' : 'en';
  const result = evaluateFromParams(params.date, sp);
  if (!result) return new Response('Not Found', { status: 404 });

  const electionType = electionTypeFromParams(sp);
  const tz = sp.tz || 'UTC';
  let dateLabel: string;
  try {
    dateLabel = result.date.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-GB', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: tz,
    });
  } catch {
    dateLabel = params.date;
  }
  dateLabel = dateLabel.charAt(0).toUpperCase() + dateLabel.slice(1);
  const hijri = gregorianToHijri(result.date);
  const tier = lang === 'fr' ? result.tierInfo.labelFr : result.tierInfo.labelEn;

  return renderCard(
    {
      accent: 'emerald',
      eyebrow: lang === 'fr' ? 'Ikhtiyārāt · Résultat' : 'Ikhtiyārāt · Result',
      title: dateLabel,
      subtitle: `${hijri.day} ${hijri.monthName[lang]} ${hijri.year} AH · ${ELECTION[electionType][lang]}`,
      highlight: {
        label: lang === 'fr' ? "Selon l'ikhtiyārāt classique" : 'Per classical ikhtiyārāt',
        badge: { text: tier, color: result.tierInfo.color },
        figure: `${result.score}/100`,
      },
      footer: lang === 'fr'
        ? "Pour la réflexion, non la prédiction · Seul Allah connaît l'invisible"
        : 'For reflection, not prediction · Only Allah knows the unseen',
    },
    // Same URL always yields the same verdict.
    604800,
  );
}
