/**
 * Temporary external donation campaign: Hamdallah (Amdallai) masjid, The Gambia.
 *
 * Flip `enabled` to false (or wait until after `endDate`) to hide every card
 * in one place. asrar.app never collects funds — the button opens GoFundMe.
 *
 * Copy: English is final. fr / ar / ur are machine translations pending
 * Language Reviewer review — do not treat them as final.
 */

import type { Lang } from './analytics';

export const DONATION_CAMPAIGN = {
  /** Master switch. Set to false to hide every card immediately. */
  enabled: true,
  /** Inclusive end date (UTC calendar day). Hidden from the day after. */
  endDate: '2027-03-31',
  /** Exact GoFundMe URL — no tracking params. */
  url: 'https://www.gofundme.com/f/masjid-at-amdallai-hamdallah-gambia',
} as const;

export type DonationLocation = 'sadaqa' | 'dashboard';

export type DonationCopy = {
  title: string;
  body: string;
  button: string;
  note: string;
};

/**
 * en = final (Mario-approved wording).
 * fr / ar / ur = machine translations — need Language Reviewer before merge-to-final.
 */
export const DONATION_COPY: Record<Lang, DonationCopy> = {
  en: {
    title: 'Support a masjid in The Gambia',
    body: 'Help complete the expansion of the Hamdallah (Amdallai) masjid: a new prayer hall and Qur\'anic classrooms.',
    button: 'Donate on GoFundMe',
    note: 'External campaign — asrar.app does not collect funds.',
  },
  fr: {
    title: 'Soutenir une mosquée en Gambie',
    body: 'Aidez à achever l\'agrandissement de la mosquée Hamdallah (Amdallai) : une nouvelle salle de prière et des salles de classe coraniques.',
    button: 'Faire un don sur GoFundMe',
    note: 'Campagne externe — asrar.app ne collecte pas les fonds.',
  },
  ar: {
    title: 'ادعم مسجدًا في غامبيا',
    body: 'ساعد في إتمام توسعة مسجد حمد الله (أمدالاي): قاعة صلاة جديدة وقاعات لتعليم القرآن.',
    button: 'تبرّع عبر GoFundMe',
    note: 'حملة خارجية — لا يجمع asrar.app التبرعات.',
  },
  ur: {
    title: 'گیمبیا میں ایک مسجد کی مدد کریں',
    body: 'حمداللہ (امڈالائی) مسجد کی توسیع مکمل کرنے میں مدد کریں: نئی نماز کی ہال اور قرآنی کلاس رومز۔',
    button: 'GoFundMe پر عطیہ دیں',
    note: 'بیرونی مہم — asrar.app فنڈ جمع نہیں کرتا۔',
  },
};

/** True when the campaign should render (enabled and not past endDate). */
export function isDonationCampaignActive(now: Date = new Date()): boolean {
  if (!DONATION_CAMPAIGN.enabled) return false;
  // Compare calendar days in UTC so the cut-off is the same everywhere.
  const end = Date.parse(`${DONATION_CAMPAIGN.endDate}T23:59:59.999Z`);
  if (Number.isNaN(end)) return false;
  return now.getTime() <= end;
}

export function getDonationCopy(lang: Lang): DonationCopy {
  return DONATION_COPY[lang] ?? DONATION_COPY.en;
}
