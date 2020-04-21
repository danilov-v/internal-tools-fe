import axios from 'axios';
import qs from 'qs';

const baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

const http = axios.create({
  baseURL: `${baseUrl}`,
  paramsSerializer: params => qs.stringify(params),
  withCredentials: true,
});

http.interceptors.response.use(response => response.data);

export { http };
