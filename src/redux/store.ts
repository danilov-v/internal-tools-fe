import { configureStore } from '@reduxjs/toolkit';
import profileReducer, { ProfileState } from './profile/slice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});

export type RootStore = {
  profile: ProfileState;
};
