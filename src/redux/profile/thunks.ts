import { signIn } from 'services/auth';
import { getProfile as getProfileAPI } from 'services/profile';
import { LoginData } from 'types/auth';
import { AppThunk } from 'redux/store';
import {
  loginFailed,
  loginSuccess,
  updateProfile,
  profileNotAvailable,
} from './slice';

export const getProfile = (): AppThunk => async dispatch => {
  try {
    const profile = await getProfileAPI();

    dispatch(updateProfile({ profile }));
  } catch (error) {
    dispatch(profileNotAvailable(error.toString()));
  }
};

export const login = (data: LoginData): AppThunk => async dispatch => {
  try {
    const profile = await signIn(data);

    dispatch(loginSuccess({ profile }));
  } catch (error) {
    dispatch(loginFailed(error.toString()));
  }
};
