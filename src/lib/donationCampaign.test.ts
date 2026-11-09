import { describe, expect, it } from 'vitest';
import {
  DONATION_CAMPAIGN,
  DONATION_COPY,
  getDonationCopy,
  isDonationCampaignActive,
} from './donationCampaign';

describe('donationCampaign', () => {
  it('uses the exact GoFundMe URL with no tracking params', () => {
    expect(DONATION_CAMPAIGN.url).toBe(
      'https://www.gofundme.com/f/masjid-at-amdallai-hamdallah-gambia',
    );
    expect(DONATION_CAMPAIGN.url).not.toMatch(/[?&]/);
  });

  it('is active on the endDate and hidden the day after', () => {
    expect(isDonationCampaignActive(new Date('2027-03-31T12:00:00Z'))).toBe(true);
    expect(isDonationCampaignActive(new Date('2027-03-31T23:59:59.999Z'))).toBe(true);
    expect(isDonationCampaignActive(new Date('2027-04-01T00:00:00Z'))).toBe(false);
  });

  it('has copy for en, fr, ar and ur', () => {
    for (const lang of ['en', 'fr', 'ar', 'ur'] as const) {
      const c = getDonationCopy(lang);
      expect(c.title.length).toBeGreaterThan(5);
      expect(c.body.length).toBeGreaterThan(10);
      expect(c.button.length).toBeGreaterThan(3);
      expect(c.note.toLowerCase()).toMatch(/asrar\.app/);
    }
    expect(DONATION_COPY.en.title).toBe('Support a masjid in The Gambia');
  });
});
