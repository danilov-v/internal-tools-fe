import { sleep } from 'helpers/utils';
import { LoginData } from 'types/auth';
import { User } from 'types/user';
import { SUCCESSFUL_LOGIN, SUCCESSFUL_LOGOUT } from './testData';

export const login = async (credentials: LoginData): Promise<User> => {
  await sleep();

  if (credentials.login !== 'admin' || credentials.password !== 'admin') {
    throw new Error('Invalid credentials');
  }

  return SUCCESSFUL_LOGIN;
};

export const logout = async (): Promise<{ message: string }> => {
  await sleep();

  return SUCCESSFUL_LOGOUT;
};
