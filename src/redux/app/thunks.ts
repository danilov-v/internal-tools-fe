import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestPromotionTypes } from 'redux/promotionType/thunks';
import { requestPenaltyTypes } from 'redux/penaltyType/thunks';
import { requestRank } from 'redux/rank/thunks';
import { requestUnits } from 'redux/unit/thunks';

export const requestInitialData = createAsyncThunk(
  'app/getInitialData',
  (params, thunkAPI) => {
    return Promise.all([
      thunkAPI.dispatch(requestRank()),
      thunkAPI.dispatch(requestUnits()),
      thunkAPI.dispatch(requestPromotionTypes()),
      thunkAPI.dispatch(requestPenaltyTypes()),
    ]);
  },
);
