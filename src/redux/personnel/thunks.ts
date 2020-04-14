import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPersonnel } from 'services/http/personnel';

export const requestPersonnel = createAsyncThunk(
  'personnel/get',
  (unitId: number) => fetchPersonnel({ unitId }),
);
