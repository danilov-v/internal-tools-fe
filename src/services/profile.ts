import { PROFILE_URL } from 'helpers/url';
import { fetchAPI } from 'services/fetch';
import { User } from 'types/user';

const getProfile = async (): Promise<User> => {
  const response = await fetchAPI<User>(PROFILE_URL);

  return response;
};

export { getProfile };
