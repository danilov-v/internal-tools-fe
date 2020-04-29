import { PERSONNEL } from 'configs/urls';
import { http } from 'services/http';
import {
  Personnel,
  PersonnelDetails,
  PersonnelFilter,
  PersonnelRemoval,
} from 'types/personnel';

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

export const removePersonnel = async (
  removalDetails: PersonnelRemoval,
): Promise<PersonnelRemoval> =>
  http.delete(`${PERSONNEL}`, { data: removalDetails });
