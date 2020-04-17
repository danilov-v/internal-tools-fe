import { createSlice } from '@reduxjs/toolkit';
import { Personnel } from 'types/personnel';

import { requestPersonnel } from './thunks';

export type PersonnelState = {
  personnel: Personnel[];
};

const initialState: PersonnelState = {
  personnel: [],
};

const personnelSlice = createSlice({
  name: 'personnel',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(requestPersonnel.fulfilled, (state, action) => {
      return {
        ...state,
        personnel: action.payload,
      };
    });
  },
});

export { personnelSlice };
