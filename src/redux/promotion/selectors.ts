import { createSelector } from '@reduxjs/toolkit';
import { RootStore } from 'redux/store';
import { find } from 'lodash';
import { Promotion } from 'types/promotion';
import { getPromotionTypes } from 'redux/promotionType/selectors';

export const getPromotions = (state: RootStore): Promotion[] =>
  state.promotion.promotions;

export const getPromotionDetailed = createSelector(
  getPromotions,
  getPromotionTypes,
  (promotions, promotionTypes) =>
    promotions.map(promotion => {
      const promotionType = find(promotionTypes, { id: promotion.typeId });

      return {
        ...promotion,
        type: promotionType?.name,
      };
    }),
);

export const getActivePromotions = createSelector(
  getPromotionDetailed,
  promotins => promotins.filter(promotion => !promotion.closedAt),
);

export const getClosedPromotions = createSelector(
  getPromotionDetailed,
  promotins => promotins.filter(promotion => promotion.closedAt),
);
