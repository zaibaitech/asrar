'use client';

import { trackEvent, toLang, type Lang } from '@/src/lib/analytics';
import {
  DONATION_CAMPAIGN,
  getDonationCopy,
  isDonationCampaignActive,
  type DonationLocation,
} from '@/src/lib/donationCampaign';

type Props = {
  /** Where the card is shown — only these fixed ids are sent to analytics. */
  location: DonationLocation;
  /** Page / UI language. Falls back to en. */
  locale?: string;
  className?: string;
};

/**
 * Small native-looking card linking to the Hamdallah masjid GoFundMe.
 * Hidden when the campaign is disabled or past endDate.
 * Analytics: one `donation_click` with { location, locale } only — never URLs or typed text.
 */
export function HamdallahDonationCard({ location, locale, className = '' }: Props) {
  if (!isDonationCampaignActive()) return null;

  const lang: Lang = toLang(locale);
  const copy = getDonationCopy(lang);
  const rtl = lang === 'ar' || lang === 'ur';

  const onClick = () => {
    trackEvent('donation_click', { location, locale: lang });
  };

  return (
    <aside
      lang={lang}
      dir={rtl ? 'rtl' : 'ltr'}
      aria-label={copy.title}
      className={`rounded-xl border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-slate-800 p-4 sm:p-5 shadow-sm space-y-3 ${className}`}
    >
      <div className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-lg"
        >
          🕌
        </span>
        <div className="min-w-0 space-y-1">
          <h2 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100">
            {copy.title}
          </h2>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {copy.body}
          </p>
        </div>
      </div>
      <a
        href={DONATION_CAMPAIGN.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        data-donation-location={location}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2.5 transition-colors"
      >
        {copy.button}
        <span aria-hidden="true" className="text-base leading-none">↗</span>
      </a>
      <p className="text-xs text-slate-500 dark:text-slate-400">{copy.note}</p>
    </aside>
  );
}

export default HamdallahDonationCard;
