import { createSelector } from '@reduxjs/toolkit';

import { RootStore } from 'redux/store';
import { MaritalStatus } from 'types/maritalStatus';

export const getMaritalStatuses = (state: RootStore): MaritalStatus[] =>
  state.maritalStatus.maritalStatuses;

export const getMaritalStatusOptions = createSelector(
  getMaritalStatuses,
  statuses => statuses.map(({ name, id }) => ({ name, value: id })),
);
