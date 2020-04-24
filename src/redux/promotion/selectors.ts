import { createSelector } from '@reduxjs/toolkit';
import { find } from 'lodash';

import { RootStore } from 'redux/store';
import { getPromotionTypes } from 'redux/promotionType/selectors';
import { Promotion } from 'types/promotion';

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
  promotions => promotions.filter(promotion => !promotion.closedAt),
);

export const getClosedPromotions = createSelector(
  getPromotionDetailed,
  promotions => promotions.filter(promotion => promotion.closedAt),
);
