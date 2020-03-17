export const fetchAPI = async (
  url: string,
  options: {
    method?: 'GET' | 'POST' | 'PUT';
    data?: object;
  } = {},
): Promise<any> => {
  const response = await fetch(url, {
    method: options.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: options.data ? JSON.stringify(options.data) : null,
  });

  if (response.ok) {
    return response.json();
  }

  return Promise.reject(new Error(response.statusText));
};
