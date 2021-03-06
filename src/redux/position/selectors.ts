import { createSelector } from '@reduxjs/toolkit';

import { RootStore } from 'redux/store';
import { Position } from 'types/position';

export const getPositions = (state: RootStore): Position[] =>
  state.position.positions;

export const getPositionOptions = createSelector(getPositions, positions =>
  positions.map(({ value }) => ({ value, name: value })),
);
