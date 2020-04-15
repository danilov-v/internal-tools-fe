import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPersonnelDetails } from 'services/http/personnel';

export const requestPersonnelDetails = createAsyncThunk(
  'personnelDetails/get',
  fetchPersonnelDetails,
);
