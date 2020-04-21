import { createSelector } from '@reduxjs/toolkit';

import { RootStore } from 'redux/store';
import { Rank } from 'types/rank';

export const getRanks = (state: RootStore): Rank[] => state.rank.ranks;

export const getRanksOptions = createSelector(getRanks, ranks =>
  ranks.map(({ name, id }) => ({ name, value: id })),
);
