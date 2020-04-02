import { configureStore } from '@reduxjs/toolkit';
import { profileSlice, ProfileState } from './profile/slice';

export const store = configureStore({
  reducer: {
    profile: profileSlice.reducer,
  },
});

export type RootStore = {
  profile: ProfileState;
};
