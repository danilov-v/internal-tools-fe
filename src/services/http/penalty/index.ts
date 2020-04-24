import { PENALTY } from 'configs/urls';
import { http } from 'services/http';
import { Penalty } from 'types/penalty';

export const fetchPenaltiesById = async (
  personnelId: number,
): Promise<Penalty[]> => http.get(`${PENALTY}?personnelId=${personnelId}`);

export const createPenalty = (promotion: Penalty): Promise<Penalty> =>
  http.post(`${PENALTY}`, promotion);

export const updatePenalty = (
  promotion: Penalty,
  isClose = false,
): Promise<Penalty> =>
  http.put(`${PENALTY}/${promotion.id}`, {
    comment: promotion.comment,
    close: isClose,
  });

export const removePenalty = (promotion: Penalty): Promise<Penalty> =>
  http.delete(`${PENALTY}/${promotion.id}`);
