import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchPenaltyTypes } from 'services/http/penaltyType';

export const requestPenaltyTypes = createAsyncThunk(
  'penaltyType/get',
  fetchPenaltyTypes,
);
