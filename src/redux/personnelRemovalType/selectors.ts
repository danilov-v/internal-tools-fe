import { createSelector } from '@reduxjs/toolkit';

import { RootStore } from 'redux/store';
import { PersonnelRemovalType } from 'types/personnel';

export const getPersonnelRemovelType = (
  state: RootStore,
): PersonnelRemovalType[] => state.personnelRemovalType.personnelRemovalTypes;

export const getPersonnelRemovelTypeOptions = createSelector(
  getPersonnelRemovelType,
  removalTypeSlice =>
    removalTypeSlice.map(({ name, id }) => ({ name, value: id })),
);
