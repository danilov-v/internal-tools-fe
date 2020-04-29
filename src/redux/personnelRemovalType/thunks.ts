import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchPersonalRemovalTypes } from 'services/http/personnelRemovalType';

export const requestPersonalRemovalTypes = createAsyncThunk(
  'personnelRemovalType/get',
  fetchPersonalRemovalTypes,
);
