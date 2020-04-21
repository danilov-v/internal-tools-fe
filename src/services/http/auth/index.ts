import { LOGIN, LOGOUT } from 'configs/urls';
import { http } from 'services/http';
import { LoginData } from 'types/auth';
import { User } from 'types/user';

export const login = async (credentials: LoginData): Promise<User> => {
  return http.post(LOGIN, credentials);
};

export const logout = async (): Promise<{ message: string }> =>
  http.post(LOGOUT);
