import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { PersonnelDetails } from 'types/personnel';

import {
  requestPersonnelDetails,
  createPersonnelDetails,
  editPersonnelDetails,
} from './thunks';

export type PersonnelDetailsState = {
  personnelDetails: PersonnelDetails | null;
  loading: boolean;
  error: SerializedError | null;
};

const initialState: PersonnelDetailsState = {
  personnelDetails: null,
  loading: false,
  error: null,
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
    builder.addCase(requestPersonnelDetails.fulfilled, (state, action) => ({
      ...state,
      personnelDetails: action.payload,
      loading: false,
      error: null,
    }));

    builder.addCase(createPersonnelDetails.pending, (state, action) => ({
      ...state,
      loading: true,
      error: null,
    }));
    builder.addCase(createPersonnelDetails.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      error: null,
    }));
    builder.addCase(createPersonnelDetails.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error,
    }));

    builder.addCase(editPersonnelDetails.pending, state => ({
      ...state,
      loading: true,
      error: null,
    }));
    builder.addCase(editPersonnelDetails.fulfilled, state => ({
      ...state,
      loading: false,
      error: null,
    }));
    builder.addCase(editPersonnelDetails.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error,
    }));
  },
});

const { purge } = personnelDetailsSlice.actions;

export { personnelDetailsSlice, purge };
