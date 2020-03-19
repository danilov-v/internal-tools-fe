import { User } from 'types/user';
import { UserMock } from 'tests/test-data/user.mock';

export const signIn = ({ login }: { login: string }): Promise<User> => {
  return login === 'admin'
    ? Promise.resolve(UserMock)
    : Promise.reject(new Error('missing User'));
};
