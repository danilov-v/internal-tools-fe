import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchPromotionTypes } from 'services/http/promotionType';

export const requestPromotionTypes = createAsyncThunk(
  'promotionType/get',
  fetchPromotionTypes,
);
