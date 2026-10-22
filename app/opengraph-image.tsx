import { renderCard } from '@/src/lib/og/card';

// Home page share card (WhatsApp / Facebook / X previews). Uses the same
// branded card as the SEO pages so every Asrār link looks consistent.
// Node runtime: the card reads its fonts from disk (see next.config.js).
export const runtime = 'nodejs';
export const alt = 'Asrār — Abjad Calculator, Planetary Hours & Lunar Mansions';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
  return renderCard({
    accent: 'violet',
    eyebrow: 'ʿIlm al-Ḥurūf · ʿIlm al-Nujūm',
    title: 'Abjad Calculator, Planetary Hours & Lunar Mansions',
    subtitle: 'Free tools from the Islamic tradition: name values, your burj, best dates (ikhtiyārāt), sadaqah and dhikr.',
    footer: 'For reflection, not prediction · Only Allah knows the unseen',
  });
}
