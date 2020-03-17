export const checkAuth = ({ login }: { login: string }): Promise<any> => {
  return login === 'admin'
    ? Promise.resolve({})
    : Promise.reject(new Error('missing User'));
};
