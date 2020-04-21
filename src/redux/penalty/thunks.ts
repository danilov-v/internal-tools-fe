import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPenaltiesById } from 'services/http/penalty';

export const requestPenaltiesById = createAsyncThunk(
  'penalty/get',
  fetchPenaltiesById,
);
