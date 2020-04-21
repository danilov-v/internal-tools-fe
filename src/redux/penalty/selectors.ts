import { createSelector } from '@reduxjs/toolkit';
import { find } from 'lodash';
import { RootStore } from 'redux/store';
import { getPenaltyTypes } from 'redux/penaltyType/selectors';
import { Penalty } from 'types/penalty';

export const getPenalties = (state: RootStore): Penalty[] =>
  state.penalty.penalties;

export const getPenaltiesDetailed = createSelector(
  getPenalties,
  getPenaltyTypes,
  (penalties, penaltiesTypes) =>
    penalties.map(penalty => {
      const penaltyType = find(penaltiesTypes, { id: penalty.typeId });

      return {
        ...penalty,
        type: penaltyType?.name,
      };
    }),
);

export const getActivePenalties = createSelector(
  getPenaltiesDetailed,
  penalties => penalties.filter(penalty => !penalty.closedAt),
);

export const getClosedPenalties = createSelector(
  getPenaltiesDetailed,
  penalties => penalties.filter(penalty => penalty.closedAt),
);
