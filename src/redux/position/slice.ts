import { createSlice } from '@reduxjs/toolkit';

import { Position } from 'types/position';

export type PositionState = {
  positions: Position[];
};

const STUB_POSITIONS = [
  {
    id: 0,
    value: 'Оператор ПЭВМ',
  },
  {
    id: 1,
    value: 'Каптер',
  },
  {
    id: 2,
    value: 'Командир отделения',
  },
  {
    id: 3,
    value: 'Заместитель командира взвода',
  },
];

const initialState: PositionState = {
  positions: STUB_POSITIONS,
};

const positionSlice = createSlice({
  name: 'position',
  initialState,
  reducers: {},
  extraReducers: {},
});

export { positionSlice };
