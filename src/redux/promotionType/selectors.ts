import { RootStore } from 'redux/store';
import { PromotionType } from 'types/promotionType';
import { createSelector } from '@reduxjs/toolkit';

export const getPromotionTypes = (state: RootStore): PromotionType[] =>
  state.promotionType.promotionTypes;

export const getPromotionTypeOptions = createSelector(
  getPromotionTypes,
  promotionTypes => promotionTypes.map(({ name, id }) => ({ name, value: id })),
);
