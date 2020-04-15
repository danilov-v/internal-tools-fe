import { createSlice } from '@reduxjs/toolkit';

import { PersonnelDetails } from 'types/personnel';
import { requestPersonnelDetails } from './thunks';

export type PersonnelDetailsState = {
  personnelDetails: PersonnelDetails | null;
};

const initialState: PersonnelDetailsState = {
  personnelDetails: null,
};

const personnelDetailsSlice = createSlice({
  name: 'personnelDetails',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(requestPersonnelDetails.fulfilled, (state, action) => {
      return {
        ...state,
        personnelDetails: action.payload,
      };
    });
  },
});

export { personnelDetailsSlice };
