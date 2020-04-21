import { createSlice } from '@reduxjs/toolkit';

import { PenaltyType } from 'types/penaltyType';

import { requestPenaltyTypes } from './thunks';

export type PenaltyTypeState = {
  penaltyTypes: PenaltyType[];
};

const initialState: PenaltyTypeState = {
  penaltyTypes: [],
};

const penaltyTypeSlice = createSlice({
  name: 'penaltyType',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(requestPenaltyTypes.fulfilled, (state, action) => {
      return {
        ...state,
        penaltyTypes: action.payload,
      };
    });
  },
});

export { penaltyTypeSlice };
