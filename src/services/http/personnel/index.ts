import { http } from 'services/http';
import { PERSONNEL } from 'configs/urls';
import { Personnel, PersonnelDetails, PersonnelFilter } from 'types/personnel';

export const fetchPersonnel = async (
  filter: PersonnelFilter,
): Promise<Personnel[]> => http.get(PERSONNEL, { params: filter });

export const fetchPersonnelDetails = async (
  personnelId: number,
): Promise<PersonnelDetails> => http.get(`${PERSONNEL}/${personnelId}`);

export const createPersonnel = async (
  personnelDetails: PersonnelDetails,
): Promise<PersonnelDetails> => http.post(PERSONNEL, personnelDetails);

export const updatePersonnel = async (
  personnelId: number,
  personnelDetails: PersonnelDetails,
): Promise<PersonnelDetails> =>
  http.put(`${PERSONNEL}/${personnelId}`, personnelDetails);
