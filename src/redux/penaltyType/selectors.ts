import { RootStore } from 'redux/store';
import { PenaltyType } from 'types/penaltyType';

export const getPenaltyTypes = (state: RootStore): PenaltyType[] =>
  state.penaltyType.penaltyTypes;
