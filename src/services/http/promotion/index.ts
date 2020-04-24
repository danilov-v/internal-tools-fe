import { PROMOTION } from 'configs/urls';
import { http } from 'services/http';
import { Promotion } from 'types/promotion';

export const fetchPromotionsById = (
  personnelId: number,
): Promise<Promotion[]> => http.get(`${PROMOTION}?personnelId=${personnelId}`);

export const createPromotion = (promotion: Promotion): Promise<Promotion> =>
  http.post(`${PROMOTION}`, promotion);

export const updatePromotion = (
  promotion: Promotion,
  isClose = false,
): Promise<Promotion> =>
  http.put(`${PROMOTION}/${promotion.id}`, {
    comment: promotion.comment,
    close: isClose,
  });

export const removePromotion = (promotion: Promotion): Promise<Promotion> =>
  http.delete(`${PROMOTION}/${promotion.id}`);
