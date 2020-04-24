import { PENALTY_TYPES } from 'configs/urls';
import { http } from 'services/http';
import { PenaltyType } from 'types/penaltyType';

export const fetchPenaltyTypes = async (): Promise<PenaltyType[]> =>
  http.get(PENALTY_TYPES);
