import { createSlice, SerializedError } from '@reduxjs/toolkit';

import { requestInitialData } from './thunks';

export type AppState = {
  loading: boolean;
  loaded: boolean;
  error: SerializedError | null;
};

const initialState: AppState = {
  loading: false,
  loaded: false,
  error: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(requestInitialData.pending, state => {
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
      };
    });

    builder.addCase(requestInitialData.rejected, (state, action) => {
      return {
        ...state,
        loading: false,
        loaded: true,
        error: action.error,
      };
    });

    builder.addCase(requestInitialData.fulfilled, state => {
      return {
        ...state,
        loading: false,
        loaded: true,
        error: null,
      };
    });
  },
});

export { appSlice };
