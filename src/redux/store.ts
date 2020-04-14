import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { profileSlice, ProfileState } from './profile/slice';
import { personnelSlice, PersonnelState } from './personnel/slice';
import { rankSlice, RankState } from './rank/slice';
import { unitSlice, UnitState } from './unit/slice';

export const getStore = (initialState?: OptionalRootStore): EnhancedStore =>
  configureStore({
    reducer: {
      profile: profileSlice.reducer,
      personnel: personnelSlice.reducer,
      rank: rankSlice.reducer,
      unit: unitSlice.reducer,
    },
    preloadedState: initialState,
  });

export type RootStore = {
  profile: ProfileState;
  personnel: PersonnelState;
  rank: RankState;
  unit: UnitState;
};

export type OptionalRootStore = Partial<RootStore>;
