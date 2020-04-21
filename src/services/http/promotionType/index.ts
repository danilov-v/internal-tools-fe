import { PROMOTION_TYPES } from 'configs/urls';
import { http } from 'services/http';
import { PromotionType } from 'types/promotionType';

export const fetchPromotionTypes = async (): Promise<PromotionType[]> =>
  http.get(PROMOTION_TYPES);
