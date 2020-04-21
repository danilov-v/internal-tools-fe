import { configureStore, EnhancedStore } from '@reduxjs/toolkit';

import { personnelSlice, PersonnelState } from './personnel/slice';
import {
  personnelDetailsSlice,
  PersonnelDetailsState,
} from './personnel-details/slice';
import { positionSlice, PositionState } from './position/slice';
import { profileSlice, ProfileState } from './profile/slice';
import { rankSlice, RankState } from './rank/slice';
import { unitSlice, UnitState } from './unit/slice';

export const getStore = (initialState?: OptionalRootStore): EnhancedStore =>
  configureStore({
    reducer: {
      personnel: personnelSlice.reducer,
      personnelDetails: personnelDetailsSlice.reducer,
      position: positionSlice.reducer,
      profile: profileSlice.reducer,
      rank: rankSlice.reducer,
      unit: unitSlice.reducer,
    },
    preloadedState: initialState,
  });

export type RootStore = {
  personnel: PersonnelState;
  personnelDetails: PersonnelDetailsState;
  position: PositionState;
  profile: ProfileState;
  rank: RankState;
  unit: UnitState;
};

export type OptionalRootStore = Partial<RootStore>;
