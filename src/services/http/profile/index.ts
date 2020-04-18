import { PROFILE } from 'configs/urls';
import { User } from 'types/user';
import { http } from 'services/http';

export const fetchProfile = async (): Promise<User> => http.get(PROFILE);
