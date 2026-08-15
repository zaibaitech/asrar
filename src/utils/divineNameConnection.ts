/**
 * Person <-> Divine Name Connection.
 *
 * Logic layer only — DivineNameConnectionResult/DivineNameMatch and every
 * consuming component (DivineNameConnectionView, DivineNameMatchesView,
 * DivineNameInputForm, CompatibilityPanel) are unchanged. Internally this
 * now runs the ported element/abjad algorithm
 * (calculatePersonDivineNameCompatibility + analyzeNameAction) against the
 * new Maghribi, prefix-stripped abjadValue in DIVINE_NAME_METADATA instead
 * of the plain mod-9-only formula against data/divine-names.ts's
 * (Mashriqi-based) abjadValue. The 4-way effect
 * (strengthens/stabilizes/tempers/challenges) is mapped onto the existing
 * 3-tier severity so the unchanged UI keeps rendering correctly:
 * strengthens/stabilizes -> green, tempers -> amber, challenges -> red.
 */

import { DivineNameConnectionResult } from '../types/compatibility';
import { DIVINE_NAMES, DivineName } from '../data/divine-names';
import { SoulConnectionSeverity } from '../constants/soulConnectionArchetypes';
import {
  findDivineNameMetadataByNumber,
  type NameActionEffect,
} from '../constants/divineNameCompatibilityData';
import { calculatePersonDivineNameCompatibility } from './divineNameCompatibility';

const EFFECT_TO_SEVERITY: Record<NameActionEffect, SoulConnectionSeverity> = {
  strengthens: 'green',
  stabilizes: 'green',
  tempers: 'amber',
  challenges: 'red',
};

function connectionForName(personKabir: number, divineName: DivineName): { soulNumber: number; severity: SoulConnectionSeverity } {
  const metadata = findDivineNameMetadataByNumber(divineName.number);
  if (!metadata) {
    // Should never happen — DIVINE_NAME_METADATA is built from the same DIVINE_NAMES array.
    return { soulNumber: 0, severity: 'amber' };
  }
  const result = calculatePersonDivineNameCompatibility(personKabir, metadata);
  return { soulNumber: result.spiritualDestiny, severity: EFFECT_TO_SEVERITY[result.effect] };
}

export function calculateDivineNameConnection(
  personName: string,
  personArabic: string,
  personKabir: number,
  divineName: DivineName,
): DivineNameConnectionResult {
  const { soulNumber, severity } = connectionForName(personKabir, divineName);

  return {
    mode: 'divine-name-connection',
    person: { name: personName, arabicName: personArabic, kabir: personKabir },
    divineName,
    soulNumber,
    severity,
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
      const { soulNumber, severity } = connectionForName(personKabir, divineName);
      return { divineName, soulNumber, severity };
    })
    .sort((a, b) => {
      const rankDiff = SEVERITY_RANK[a.severity] - SEVERITY_RANK[b.severity];
      if (rankDiff !== 0) return rankDiff;
      return a.divineName.number - b.divineName.number;
    });
}
