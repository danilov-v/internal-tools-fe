import { PERSONNEL_MARITAL_STATUSES } from 'configs/urls';
import { http } from 'services/http';
import { MaritalStatus } from 'types/maritalStatus';

export const fetchMaritalStatuses = async (): Promise<MaritalStatus[]> => {
  return http.get(PERSONNEL_MARITAL_STATUSES);
};
