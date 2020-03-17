// TODO: add env support
export const BASE_URL = 'http://localhost:3001';

export const LOGIN = '/login';
export const LOGOUT = '/logout';

export const getLoginUrl = (): string => `${BASE_URL}${LOGIN}`;
export const getLogoutUrl = (): string => `${BASE_URL}${LOGOUT}`;
