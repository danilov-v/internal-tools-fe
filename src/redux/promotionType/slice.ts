import { createSlice } from '@reduxjs/toolkit';

import { PromotionType } from 'types/promotionType';

import { requestPromotionTypes } from './thunks';

export type PromotionTypeState = {
  promotionTypes: PromotionType[];
};

const initialState: PromotionTypeState = {
  promotionTypes: [],
};

const promotionTypeSlice = createSlice({
  name: 'promotionType',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(requestPromotionTypes.fulfilled, (state, action) => {
      return {
        ...state,
        promotionTypes: action.payload,
      };
    });
  },
});

export { promotionTypeSlice };
