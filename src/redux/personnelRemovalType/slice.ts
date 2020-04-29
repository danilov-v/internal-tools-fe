import { createSlice } from '@reduxjs/toolkit';

import { PersonnelRemovalType } from 'types/personnel';

import { requestPersonalRemovalTypes } from './thunks';

export type PersonnelRemovalTypeState = {
  personnelRemovalTypes: PersonnelRemovalType[];
};

const initialState: PersonnelRemovalTypeState = {
  personnelRemovalTypes: [],
};

const personnelRemovalTypeSlice = createSlice({
  name: 'personnelRemovalType',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(requestPersonalRemovalTypes.fulfilled, (state, action) => {
      return {
        ...state,
        personnelRemovalTypes: action.payload,
      };
    });
  },
});

export { personnelRemovalTypeSlice };
