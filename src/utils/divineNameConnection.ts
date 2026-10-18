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
import { DivineName, getDivineNames, getDivineNameForSystem } from '../data/divine-names';
import { ABJAD_MAGHRIBI } from '../lib/abjad-maps';
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

function connectionForName(
  personKabir: number,
  divineName: DivineName,
  abjad: Record<string, number>
): { soulNumber: number; severity: SoulConnectionSeverity } {
  const metadata = findDivineNameMetadataByNumber(divineName.number, abjad);
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
  abjad: Record<string, number> = ABJAD_MAGHRIBI,
): DivineNameConnectionResult {
  // Show the Name with its value in the same (selected) Abjad system as the person's kabīr.
  const shownName = getDivineNameForSystem(divineName.number, abjad) ?? divineName;
  const { soulNumber, severity } = connectionForName(personKabir, shownName, abjad);

  return {
    mode: 'divine-name-connection',
    person: { name: personName, arabicName: personArabic, kabir: personKabir },
    divineName: shownName,
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
export function findBestDivineNameMatches(
  personKabir: number,
  abjad: Record<string, number> = ABJAD_MAGHRIBI
): DivineNameMatch[] {
  return getDivineNames(abjad)
    .map((divineName): DivineNameMatch => {
      const { soulNumber, severity } = connectionForName(personKabir, divineName, abjad);
      return { divineName, soulNumber, severity };
    })
    .sort((a, b) => {
      const rankDiff = SEVERITY_RANK[a.severity] - SEVERITY_RANK[b.severity];
      if (rankDiff !== 0) return rankDiff;
      return a.divineName.number - b.divineName.number;
    });
}
