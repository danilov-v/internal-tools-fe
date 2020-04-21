import { PENALTY } from 'configs/urls';
import { http } from 'services/http';
import { Penalty } from 'types/penalty';

export const fetchPenaltiesById = async (
  personnelId: number,
): Promise<Penalty[]> => http.get(`${PENALTY}?personnelId=${personnelId}`);
