import { configureStore, EnhancedStore } from '@reduxjs/toolkit';

import { penaltySlice, PenaltyState } from './penalty/slice';
import { penaltyTypeSlice, PenaltyTypeState } from './penaltyType/slice';
import { personnelSlice, PersonnelState } from './personnel/slice';
import {
  personnelDetailsSlice,
  PersonnelDetailsState,
} from './personnel-details/slice';
import { positionSlice, PositionState } from './position/slice';
import { profileSlice, ProfileState } from './profile/slice';
import { promotionSlice, PromotionState } from './promotion/slice';
import { promotionTypeSlice, PromotionTypeState } from './promotionType/slice';
import { rankSlice, RankState } from './rank/slice';
import { unitSlice, UnitState } from './unit/slice';

export const getStore = (initialState?: OptionalRootStore): EnhancedStore =>
  configureStore({
    reducer: {
      penalty: penaltySlice.reducer,
      penaltyType: penaltyTypeSlice.reducer,
      personnel: personnelSlice.reducer,
      personnelDetails: personnelDetailsSlice.reducer,
      position: positionSlice.reducer,
      profile: profileSlice.reducer,
      promotion: promotionSlice.reducer,
      promotionType: promotionTypeSlice.reducer,
      rank: rankSlice.reducer,
      unit: unitSlice.reducer,
    },
    preloadedState: initialState,
  });

export type RootStore = {
  penalty: PenaltyState;
  penaltyType: PenaltyTypeState;
  personnel: PersonnelState;
  personnelDetails: PersonnelDetailsState;
  position: PositionState;
  profile: ProfileState;
  promotion: PromotionState;
  promotionType: PromotionTypeState;
  rank: RankState;
  unit: UnitState;
};

export type OptionalRootStore = Partial<RootStore>;
