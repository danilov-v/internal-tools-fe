import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { User } from 'types/user';
import { requestLogin, requestProfile, requestLogout } from './thunks';

export type ProfileState = {
  profile: User | null;
  error: SerializedError | null;
  isChecked: boolean;
};

const initialState: ProfileState = {
  profile: null,
  error: null,
  isChecked: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(requestLogin.pending, state => {
      return {
        ...state,
        error: null,
      };
    });

    builder.addCase(requestLogin.fulfilled, (state, action) => {
      return {
        ...state,
        isChecked: true,
        profile: { ...action.payload },
      };
    });

    builder.addCase(requestLogin.rejected, (state, action) => {
      return {
        ...state,
        isChecked: true,
        profile: null,
        error: action.error,
      };
    });

    builder.addCase(requestProfile.fulfilled, (state, action) => {
      return {
        ...state,
        isChecked: true,
        profile: { ...action.payload },
        error: null,
      };
    });

    builder.addCase(requestProfile.rejected, (state, action) => {
      return {
        ...state,
        isChecked: true,
        profile: null,
        error: action.error,
      };
    });

    builder.addCase(requestLogout.fulfilled, () => {
      return {
        ...initialState,
        isChecked: true,
      };
    });
  },
});

export { profileSlice };
