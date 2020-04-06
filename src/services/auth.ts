import { LOGIN_URL } from 'configs/urls';
import { fetchAPI } from 'services/fetch';
import { LoginData } from 'types/auth';
import { User } from 'types/user';

const signIn = async (user: LoginData): Promise<User> => {
  const response = await fetchAPI<User>(LOGIN_URL, {
    method: 'POST',
    data: user,
  });

  return response;
};

export { signIn };
