import { PERSONNEL_REMOVAL_TYPES } from 'configs/urls';
import { http } from 'services/http';
import { PenaltyType } from 'types/penaltyType';

export const fetchPersonalRemovalTypes = async (): Promise<PenaltyType[]> =>
  http.get(PERSONNEL_REMOVAL_TYPES);
