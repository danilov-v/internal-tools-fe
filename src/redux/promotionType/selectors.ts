import { RootStore } from 'redux/store';
import { PromotionType } from 'types/promotionType';

export const getPromotionTypes = (state: RootStore): PromotionType[] =>
  state.promotionType.promotionTypes;
