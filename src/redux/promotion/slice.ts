import { createSlice } from '@reduxjs/toolkit';

import { Promotion } from 'types/promotion';

import { requestPromotionsById } from './thunks';

export type PromotionState = {
  promotions: Promotion[];
};

const initialState: PromotionState = {
  promotions: [],
};

const promotionSlice = createSlice({
  name: 'promotion',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(requestPromotionsById.fulfilled, (state, action) => {
      return {
        ...state,
        promotions: action.payload,
      };
    });
  },
});

export { promotionSlice };
