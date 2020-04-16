import { createSlice } from '@reduxjs/toolkit';

import { PersonnelDetailsState } from './types';
import { requestPersonnelDetails } from './thunks';

const initialState: PersonnelDetailsState = {
  personnelDetails: null,
};

const personnelDetailsSlice = createSlice({
  name: 'personnelDetails',
  initialState,
  reducers: {
    purge: () => {
      return {
        ...initialState,
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(requestPersonnelDetails.fulfilled, (state, action) => {
      return {
        ...state,
        personnelDetails: action.payload,
      };
    });
  },
});

const { purge } = personnelDetailsSlice.actions;

export { personnelDetailsSlice, purge };
