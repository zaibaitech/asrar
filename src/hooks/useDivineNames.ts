'use client';

import { useAbjad } from '../contexts/AbjadContext';
import { getDivineNames, type DivineName } from '../data/divine-names';

/**
 * The 99 Names for the user's selected Abjad system (Maghribi by default):
 * abjadValue and the "Recite N times" practice count follow the system.
 */
export function useDivineNames(): DivineName[] {
  const { abjad } = useAbjad();
  return getDivineNames(abjad);
}
