import { createSlice } from '@reduxjs/toolkit';
import { Rank } from 'types/rank';

import { requestRank } from './thunks';

export type RankState = {
  ranks: Rank[];
};

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
