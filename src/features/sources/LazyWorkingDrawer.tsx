'use client';

import dynamic from 'next/dynamic';

/**
 * Flag-gated, lazy entry point used by the live calculators. With the preview
 * flag unset this is a constant `null` renderer and the drawer's code is not
 * part of the production bundle; with it set, the drawer loads on demand in
 * the browser only.
 */
// The flag test is written out here (not imported) so the bundler sees a build-time
// constant and drops the import() below when the flag is unset.
export const WorkingDrawer =
  process.env.NEXT_PUBLIC_LIFE_GUIDANCE_PREVIEW === 'true' || process.env.NEXT_PUBLIC_LIFE_GUIDANCE_PREVIEW === '1'
  ? dynamic(() => import('./WorkingDrawer').then((m) => m.WorkingDrawer), { ssr: false })
  : () => null;

/** " · today" suffix on the Who Am I Manāzil tile, in the UI language. Same flag gate and lazy load. */
export const TileTodaySuffix =
  process.env.NEXT_PUBLIC_LIFE_GUIDANCE_PREVIEW === 'true' || process.env.NEXT_PUBLIC_LIFE_GUIDANCE_PREVIEW === '1'
  ? dynamic(() => import('./TileToday').then((m) => m.TileToday), { ssr: false })
  : () => null;
