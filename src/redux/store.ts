import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { profileSlice, ProfileState } from './profile/slice';

export const getStore = (initialState?: OptionalRootStore): EnhancedStore =>
  configureStore({
    reducer: {
      profile: profileSlice.reducer,
    },
    preloadedState: initialState,
  });

export type RootStore = {
  profile: ProfileState;
};

export type OptionalRootStore = Partial<RootStore>;
