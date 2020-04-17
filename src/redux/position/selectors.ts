import { RootStore } from 'redux/store.types';
import { Position } from 'types/position';
import { createSelector } from '@reduxjs/toolkit';

export const getPositions = (state: RootStore): Position[] =>
  state.position.positions;

export const getPositionOptions = createSelector(getPositions, positions =>
  positions.map(({ value }) => ({ value, name: value })),
);
