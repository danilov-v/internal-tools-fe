import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { profileSlice } from './profile/slice';
import { personnelSlice } from './personnel/slice';
import { rankSlice } from './rank/slice';
import { unitSlice } from './unit/slice';
import { personnelDetailsSlice } from './personnel-details/slice';
import { positionSlice } from './position/slice';
import { OptionalRootStore } from './store.types';

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
