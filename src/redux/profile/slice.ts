import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { User } from 'types/user';
import { login, getProfile } from './thunks';

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
    builder.addCase(login.pending, state => {
      return {
        ...state,
        error: null,
      };
    });

    builder.addCase(login.fulfilled, (state, action) => {
      return {
        ...state,
        isChecked: true,
        profile: { ...action.payload },
      };
    });

    builder.addCase(login.rejected, (state, action) => {
      return {
        ...state,
        isChecked: true,
        profile: null,
        error: action.error,
      };
    });

    builder.addCase(getProfile.fulfilled, (state, action) => {
      return {
        ...state,
        isChecked: true,
        profile: { ...action.payload },
        error: null,
      };
    });

    builder.addCase(getProfile.rejected, (state, action) => {
      return {
        ...state,
        isChecked: true,
        profile: null,
        error: action.error,
      };
    });
  },
});

export { profileSlice };
