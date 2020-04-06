import { PERSONNEL } from 'configs/urls';
import { Personnel, PersonnelDetails, PersonnelFilter } from 'types/personnel';
import { http } from 'services/http';
import { formatPersonnelDetails } from './formatters';

export const fetchPersonnel = async (
  filter: PersonnelFilter,
): Promise<Personnel[]> =>
  http.get(PERSONNEL, { params: filter }).then(response => response.data);

export const fetchPersonnelDetails = async (
  personnelId: number,
): Promise<PersonnelDetails> =>
  http.get(`${PERSONNEL}/${personnelId}`).then(formatPersonnelDetails);

export const createPersonnel = async (
  personnelDetails: PersonnelDetails,
): Promise<PersonnelDetails> =>
  http.post(PERSONNEL, personnelDetails).then(formatPersonnelDetails);
