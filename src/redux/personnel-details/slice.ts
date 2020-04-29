import { createSlice, SerializedError } from '@reduxjs/toolkit';

import { PersonnelDetails } from 'types/personnel';

import {
  requestPersonnelDetails,
  createPersonnelDetails,
  editPersonnelDetails,
  removePersonnelDetails,
} from './thunks';

export type PersonnelDetailsState = {
  error: SerializedError | null;
  loading: boolean;
  personnelDetails: PersonnelDetails | null;

  removed: boolean;
};

const initialState: PersonnelDetailsState = {
  error: null,
  loading: false,
  personnelDetails: null,

  removed: false,
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

    builder.addCase(createPersonnelDetails.pending, state => ({
      ...state,
      loading: true,
      error: null,
    }));
    builder.addCase(createPersonnelDetails.fulfilled, state => ({
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

    builder.addCase(removePersonnelDetails.pending, state => ({
      ...state,
      loading: true,
      error: null,
    }));
    builder.addCase(removePersonnelDetails.fulfilled, state => ({
      ...state,
      loading: false,
      removed: true,
      error: null,
    }));
    builder.addCase(removePersonnelDetails.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error,
    }));
  },
});

const { purge } = personnelDetailsSlice.actions;

export { personnelDetailsSlice, purge };
