import { createSelector } from '@reduxjs/toolkit';

import { RootStore } from 'redux/store';
import { PersonnelRemovalType } from 'types/personnel';

export const getPersonnelRemovalType = (
  state: RootStore,
): PersonnelRemovalType[] => state.personnelRemovalType.personnelRemovalTypes;

export const getPersonnelRemovalTypeOptions = createSelector(
  getPersonnelRemovalType,
  removalTypeSlice =>
    removalTypeSlice.map(({ name, id }) => ({ name, value: id })),
);
