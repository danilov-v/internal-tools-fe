import { LOGIN, LOGOUT } from 'configs/urls';
import { LoginData } from 'types/auth';
import { User } from 'types/user';
import { http } from 'services/http';

export const login = async (credentials: LoginData): Promise<User> => {
  return http.post(LOGIN, credentials);
};

export const logout = async (): Promise<{ message: string }> =>
  http.post(LOGOUT);
