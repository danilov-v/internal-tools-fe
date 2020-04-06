import { User } from 'types/user';
import { sleep } from 'helpers/utils';
import { SUCCESSFUL_PROFILE } from './testData';

export const fetchProfile = async (): Promise<User> => {
  await sleep();

  return SUCCESSFUL_PROFILE;
};
