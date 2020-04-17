import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { profileSlice, ProfileState } from './profile/slice';
import { personnelSlice, PersonnelState } from './personnel/slice';
import { rankSlice, RankState } from './rank/slice';
import { unitSlice, UnitState } from './unit/slice';
import {
  personnelDetailsSlice,
  PersonnelDetailsState,
} from './personnel-details/slice';
import { positionSlice, PositionState } from './position/slice';

export const getStore = (initialState?: OptionalRootStore): EnhancedStore =>
  configureStore({
    reducer: {
      profile: profileSlice.reducer,
      personnel: personnelSlice.reducer,
      personnelDetails: personnelDetailsSlice.reducer,
      rank: rankSlice.reducer,
      unit: unitSlice.reducer,
      position: positionSlice.reducer,
    },
    preloadedState: initialState,
  });

export type RootStore = {
  profile: ProfileState;
  personnel: PersonnelState;
  rank: RankState;
  unit: UnitState;
  personnelDetails: PersonnelDetailsState;
  position: PositionState;
};

export type OptionalRootStore = Partial<RootStore>;
