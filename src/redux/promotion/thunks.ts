import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchPromotionsById,
  createPromotion,
  updatePromotion,
  removePromotion,
} from 'services/http/promotion';
import { Promotion } from 'types/promotion';

export const requestPromotionsById = createAsyncThunk(
  'promotion/get',
  fetchPromotionsById,
);

export const requestPromotionCreate = createAsyncThunk(
  'promotion/create',
  async (promotion: Promotion, thunkApi) => {
    try {
      await createPromotion(promotion);

      thunkApi.dispatch(requestPromotionsById(promotion.personnelId));
    } catch (error) {
      // TODO: handle error state
    }
  },
);

export const requestPromotionClose = createAsyncThunk(
  'promotion/close',
  async (promotion: Promotion, thunkApi) => {
    try {
      await updatePromotion(promotion, true);

      thunkApi.dispatch(requestPromotionsById(promotion.personnelId));
    } catch (error) {
      // TODO: handle error state
    }
  },
);

export const requestPromotionRemove = createAsyncThunk(
  'promotion/remove',
  async (promotion: Promotion, thunkApi) => {
    try {
      await removePromotion(promotion);

      thunkApi.dispatch(requestPromotionsById(promotion.personnelId));
    } catch (error) {
      // TODO: handle error state
    }
  },
);
