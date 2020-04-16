import { createSlice } from '@reduxjs/toolkit';

import { RankState } from './types';
import { requestRank } from './thunks';

const initialState: RankState = {
  ranks: [],
};

const rankSlice = createSlice({
  name: 'rank',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(requestRank.fulfilled, (state, action) => {
      return {
        ...state,
        ranks: action.payload,
      };
    });
  },
});

export { rankSlice };
