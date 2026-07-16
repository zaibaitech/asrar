/**
 * Person <-> Divine Name Connection — reuses the exact Soul Connection
 * mod-9 formula (calculateSoulNumber), applied between a person's kabīr
 * and a Divine Name's abjadValue instead of a second person's kabīr.
 */

import { DivineNameConnectionResult } from '../types/compatibility';
import { DIVINE_NAMES, DivineName } from '../data/divine-names';
import { calculateSoulNumber } from './soulConnection';
import { getSoulConnectionSeverity, SoulConnectionSeverity } from '../constants/soulConnectionArchetypes';

export function calculateDivineNameConnection(
  personName: string,
  personArabic: string,
  personKabir: number,
  divineName: DivineName,
): DivineNameConnectionResult {
  const soulNumber = calculateSoulNumber(personKabir, divineName.abjadValue);

  return {
    mode: 'divine-name-connection',
    person: { name: personName, arabicName: personArabic, kabir: personKabir },
    divineName,
    soulNumber,
    severity: getSoulConnectionSeverity(soulNumber),
  };
}

export interface DivineNameMatch {
  divineName: DivineName;
  soulNumber: number;
  severity: SoulConnectionSeverity;
}

const SEVERITY_RANK: Record<SoulConnectionSeverity, number> = { green: 0, amber: 1, red: 2 };

/**
 * Scans all 99 Divine Names for a person's kabīr and returns every match,
 * best resonance first (green tier, then amber, then red; ties broken by
 * Name number so the order is stable).
 */
export function findBestDivineNameMatches(personKabir: number): DivineNameMatch[] {
  return DIVINE_NAMES
    .map((divineName): DivineNameMatch => {
      const soulNumber = calculateSoulNumber(personKabir, divineName.abjadValue);
      return { divineName, soulNumber, severity: getSoulConnectionSeverity(soulNumber) };
    })
    .sort((a, b) => {
      const rankDiff = SEVERITY_RANK[a.severity] - SEVERITY_RANK[b.severity];
      if (rankDiff !== 0) return rankDiff;
      return a.divineName.number - b.divineName.number;
    });
}
