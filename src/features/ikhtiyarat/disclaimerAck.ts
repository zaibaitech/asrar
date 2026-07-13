/**
 * Adab disclaimer acknowledgment — persisted, versioned, reusable across
 * every election type in this section (one ack covers the whole
 * Ikhtiyārāt feature, not per election type — the key has no
 * election-type suffix by design).
 *
 * Versioned: bump DISCLAIMER_KEY's `.vN` suffix whenever the disclaimer
 * text changes meaningfully, so everyone sees the new text once more.
 *
 * Persistence: localStorage for anonymous users. For logged-in users,
 * the ack is ALSO written to profile.metadata so it syncs across
 * devices — profile is checked first, falling back to localStorage.
 * localStorage access is wrapped in try/catch throughout: private
 * browsing (or any other localStorage failure) degrades to an
 * in-memory per-session flag rather than crashing or re-prompting on
 * every render.
 */

import type { Profile, ProfileUpdate } from '../../types/profile.types';

export const DISCLAIMER_KEY = 'asrar.ikhtiyarat.disclaimer.v1';

// In-memory fallback for the rare case localStorage itself throws
// (e.g. Safari private mode with a full quota) — keeps behavior within
// a single session sane without ever crashing the page.
let sessionFallbackAck = false;

export function readLocalAck(): boolean {
  try {
    return localStorage.getItem(DISCLAIMER_KEY) === 'true';
  } catch {
    return sessionFallbackAck;
  }
}

export function writeLocalAck(): void {
  sessionFallbackAck = true;
  try {
    localStorage.setItem(DISCLAIMER_KEY, 'true');
  } catch {
    // Private mode or full storage — the in-memory flag above is the
    // only persistence we get this session, which is an acceptable
    // degradation (never crash, never block the user).
  }
}

export function readProfileAck(profile: Profile | null): boolean {
  return profile?.metadata?.[DISCLAIMER_KEY] === true;
}

/** Spreads existing metadata since profile updates fully replace the column, not merge it. */
export function buildProfileAckUpdate(profile: Profile): ProfileUpdate {
  return {
    metadata: {
      ...profile.metadata,
      [DISCLAIMER_KEY]: true,
    },
  };
}
