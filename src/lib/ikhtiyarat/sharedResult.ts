/**
 * Re-derive an ikhtiyārāt share-link result from its URL alone (nothing is
 * stored server-side). Shared by the /ikhtiyarat/r/[date] page and its OG
 * result-card image so both always show the same verdict.
 */
import { evaluateElection } from './engine';
import { marriageElectionConfig } from './elections/marriage';
import { travelElectionConfig } from './elections/travel';
import { businessElectionConfig } from './elections/business';
import { medicalElectionConfig } from './elections/medical';
import { homeElectionConfig } from './elections/home';
import { educationElectionConfig } from './elections/education';
import { ElectionInput, ElectionRulesConfig, ElectionType } from './types';

export const CONFIG_BY_ELECTION_TYPE: Record<ElectionType, ElectionRulesConfig> = {
  marriage: marriageElectionConfig,
  travel: travelElectionConfig,
  business: businessElectionConfig,
  // Same rules as "Business / Contracts" — see CheckDateView.tsx.
  businessStart: businessElectionConfig,
  medical: medicalElectionConfig,
  home: homeElectionConfig,
  education: educationElectionConfig,
};

export interface PageParams {
  date: string; // YYYY-MM-DD
}

export interface PageSearchParams {
  lat?: string;
  lon?: string;
  tz?: string;
  lang?: string;
  /** Defaults to 'marriage' — keeps every pre-existing share link (minted before travel existed) resolving the same as before. */
  election?: string;
}

export const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export function electionTypeFromParams(searchParams: PageSearchParams): ElectionType {
  if (searchParams.election === 'travel') return 'travel';
  if (searchParams.election === 'business') return 'business';
  if (searchParams.election === 'businessStart') return 'businessStart';
  if (searchParams.election === 'medical') return 'medical';
  if (searchParams.election === 'home') return 'home';
  if (searchParams.election === 'education') return 'education';
  return 'marriage';
}

/** Re-derive the election result from the URL alone — nothing is stored server-side. */
export function evaluateFromParams(dateStr: string, searchParams: PageSearchParams) {
  if (!DATE_RE.test(dateStr)) return null;

  const lat = Number(searchParams.lat);
  const lon = Number(searchParams.lon);
  const tz = searchParams.tz || 'UTC';
  if (!Number.isFinite(lat) || !Number.isFinite(lon) || lat < -90 || lat > 90 || lon < -180 || lon > 180) return null;

  const datetime = new Date(`${dateStr}T12:00:00Z`);
  if (Number.isNaN(datetime.getTime())) return null;

  const electionType = electionTypeFromParams(searchParams);
  const input: ElectionInput = { datetime, lat, lon, tz, electionType };
  return evaluateElection(input, CONFIG_BY_ELECTION_TYPE[electionType]);
}

