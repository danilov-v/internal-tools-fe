import { createSlice } from '@reduxjs/toolkit';

import { Unit } from 'types/unit';
import { requestUnits } from './thunks';

export type UnitState = {
  units: Unit[];
};

const initialState: UnitState = {
  units: [],
};

const unitSlice = createSlice({
  name: 'unit',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(requestUnits.fulfilled, (state, action) => {
      return {
        ...state,
        units: action.payload,
      };
    });
  },
});

export { unitSlice };
