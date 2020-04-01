import { createSlice, createAction } from '@reduxjs/toolkit';
import { User } from 'types/user';

export type ProfileState = {
  profile: User | null;
  error: string | null;
  isChecked: boolean;
};

const loginFailed: any = createAction('profile/loginFailed');
const loginSuccess: any = createAction('profile/loginSuccess');

const initialState: ProfileState = {
  profile: null,
  error: null,
  isChecked: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile(state, action) {
      return {
        error: null,
        isChecked: true,
        profile: action.payload.profile,
      };
    },
    profileNotAvailable(state, action) {
      return {
        ...initialState,
        error: action.payload,
        isChecked: true,
      };
    },
  },
  extraReducers: {
    [loginFailed]: (state, action) => {
      return {
        ...initialState,
        error: action.payload,
        isChecked: true,
      };
    },
    [loginSuccess]: (state, action) => {
      return {
        error: null,
        isChecked: true,
        profile: action.payload.profile,
      };
    },
  },
});

const { updateProfile, profileNotAvailable } = profileSlice.actions;

export { loginSuccess, loginFailed, updateProfile, profileNotAvailable };

// eslint-disable-next-line import/no-default-export
export default profileSlice.reducer;
