import { createSlice } from '@reduxjs/toolkit';

import { UnitState } from './types';
import { requestUnits } from './thunks';

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
