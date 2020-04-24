import { createSlice } from '@reduxjs/toolkit';

import { Penalty } from 'types/penalty';

import { requestPenaltiesById } from './thunks';

export type PenaltyState = {
  penalties: Penalty[];
};

const initialState: PenaltyState = {
  penalties: [],
};

const penaltySlice = createSlice({
  name: 'promotion',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(requestPenaltiesById.fulfilled, (state, action) => {
      return {
        ...state,
        penalties: action.payload,
      };
    });
  },
});

export { penaltySlice };
