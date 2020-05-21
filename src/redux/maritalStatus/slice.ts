import { createSlice } from '@reduxjs/toolkit';

import { MaritalStatus } from 'types/maritalStatus';

import { requestMaritalStatuses } from './thunks';

export type MaritalStatusState = {
  maritalStatuses: MaritalStatus[];
};

const initialState: MaritalStatusState = {
  maritalStatuses: [],
};

const maritalStatusSlice = createSlice({
  name: 'maritalStatus',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(requestMaritalStatuses.fulfilled, (state, action) => {
      return {
        ...state,
        maritalStatuses: action.payload,
      };
    });
  },
});

export { maritalStatusSlice };
