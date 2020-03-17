import { getLoginUrl } from 'helpers/url';
import { fetchAPI } from 'services/fetch';

const checkAuth = async (user: {
  login: string;
  password: string;
}): Promise<object> => {
  const response = await fetchAPI(getLoginUrl(), {
    method: 'POST',
    data: user,
  });

  return response;
};

export { checkAuth };
