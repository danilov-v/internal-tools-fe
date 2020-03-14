// TODO: move constants out from here.
export const DEFAULT_ADMIN_NAME = 'admin';
export const DEFAULT_ADMIN_PASSWORD = 'admin';

const checkAuth = (user: { login: string; password: string }): boolean => {
  return (
    user.login === DEFAULT_ADMIN_NAME &&
    user.password === DEFAULT_ADMIN_PASSWORD
  );
};

export { checkAuth };
