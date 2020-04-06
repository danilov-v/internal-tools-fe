import { Personnel, PersonnelDetails } from 'types/personnel';
import { sleep } from 'helpers/utils';
import {
  SUCCESSFUL_CREATE_PERSONNEL,
  SUCCESSFUL_PERSONNEL_DETAILS,
  SUCCESSFUL_PERSONNEL,
} from './testData';

export const fetchPersonnel = async (): Promise<Personnel[]> => {
  await sleep();

  return SUCCESSFUL_PERSONNEL;
};

export const fetchPersonnelDetails = async (): Promise<PersonnelDetails> => {
  await sleep();

  return SUCCESSFUL_PERSONNEL_DETAILS;
};

export const createPersonnel = async (): Promise<PersonnelDetails> => {
  await sleep();

  return SUCCESSFUL_CREATE_PERSONNEL;
};
