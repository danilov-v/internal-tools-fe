import { RootStore } from 'redux/store.types';
import { Rank } from 'types/rank';
import { createSelector } from '@reduxjs/toolkit';

export const getRanks = (state: RootStore): Rank[] => state.rank.ranks;

export const getRanksOptions = createSelector(getRanks, ranks =>
  ranks.map(({ name, id }) => ({ name, value: id })),
);
