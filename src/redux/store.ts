import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import profileReducer, { ProfileState } from './profile/slice';
import uiReducer, { UIState } from './ui/slice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    ui: uiReducer,
  },
});

export type RootStore = {
  profile: ProfileState;
  ui: UIState;
};

export type AppThunk = ThunkAction<void, RootStore, unknown, Action<string>>;
