import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestPenaltyTypes } from 'redux/penaltyType/thunks';
import { requestPromotionTypes } from 'redux/promotionType/thunks';
import { requestRank } from 'redux/rank/thunks';
import { requestUnits } from 'redux/unit/thunks';
import { requestPersonalRemovalTypes } from 'redux/personnelRemovalType/thunks';
import { requestMaritalStatuses } from 'redux/maritalStatus/thunks';

export const requestInitialData = createAsyncThunk(
  'app/getInitialData',
  (params, thunkAPI) => {
    return Promise.all([
      thunkAPI.dispatch(requestRank()),
      thunkAPI.dispatch(requestUnits()),
      thunkAPI.dispatch(requestPromotionTypes()),
      thunkAPI.dispatch(requestPenaltyTypes()),
      thunkAPI.dispatch(requestPersonalRemovalTypes()),
      thunkAPI.dispatch(requestMaritalStatuses()),
    ]);
  },
);
