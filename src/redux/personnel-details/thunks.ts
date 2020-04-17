import { createAsyncThunk } from '@reduxjs/toolkit';

import { UNIT_ID } from 'configs/constants';

import { requestPersonnel } from 'redux/personnel/thunks';

import {
  fetchPersonnelDetails,
  createPersonnel,
  updatePersonnel,
} from 'services/http/personnel';

import { PersonnelDetails } from 'types/personnel';

export const requestPersonnelDetails = createAsyncThunk(
  'personnelDetails/get',
  fetchPersonnelDetails,
);

export const createPersonnelDetails = createAsyncThunk(
  'personnelDetails/create',
  async (personnelDetails: PersonnelDetails, thunkAPI) => {
    try {
      const personnel = await createPersonnel(personnelDetails);

      thunkAPI.dispatch(requestPersonnel(UNIT_ID));

      return personnel;
    } catch (error) {
      return thunkAPI.rejectWithValue(null);
    }
  },
);

export const editPersonnelDetails = createAsyncThunk(
  'personnelDetails/edit',
  async (personnelDetails: PersonnelDetails, thunkAPI) => {
    if (!personnelDetails.id) {
      return thunkAPI.rejectWithValue(null);
    }

    try {
      const personnel = await updatePersonnel(
        personnelDetails.id,
        personnelDetails,
      );

      thunkAPI.dispatch(requestPersonnelDetails(personnelDetails.id));

      return personnel;
    } catch (error) {
      return thunkAPI.rejectWithValue(null);
    }
  },
);
