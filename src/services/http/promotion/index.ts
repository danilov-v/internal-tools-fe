import { PROMOTION } from 'configs/urls';
import { http } from 'services/http';
import { Promotion } from 'types/promotion';

export const fetchPromotionsById = async (
  personnelId: number,
): Promise<Promotion[]> => http.get(`${PROMOTION}?personnelId=${personnelId}`);
