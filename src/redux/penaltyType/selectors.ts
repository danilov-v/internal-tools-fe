import { createSelector } from '@reduxjs/toolkit';

import { RootStore } from 'redux/store';
import { PenaltyType } from 'types/penaltyType';

export const getPenaltyTypes = (state: RootStore): PenaltyType[] =>
  state.penaltyType.penaltyTypes;

export const getPenaltyTypeOptions = createSelector(
  getPenaltyTypes,
  penaltyTypes => penaltyTypes.map(({ name, id }) => ({ name, value: id })),
);
