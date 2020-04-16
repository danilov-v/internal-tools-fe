import { createSlice } from '@reduxjs/toolkit';

import { PersonnelState } from './types';
import { requestPersonnel } from './thunks';

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
