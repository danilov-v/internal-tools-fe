import { PROFILE } from 'configs/urls';
import { http } from 'services/http';
import { User } from 'types/user';

export const fetchProfile = async (): Promise<User> => http.get(PROFILE);
