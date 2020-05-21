import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchMaritalStatuses } from 'services/http/maritalStatus';

export const requestMaritalStatuses = createAsyncThunk(
  'maritalStatus/get',
  fetchMaritalStatuses,
);
