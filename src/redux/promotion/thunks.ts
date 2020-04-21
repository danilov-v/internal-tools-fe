import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPromotionsById } from 'services/http/promotion';

export const requestPromotionsById = createAsyncThunk(
  'promotion/get',
  fetchPromotionsById,
);
