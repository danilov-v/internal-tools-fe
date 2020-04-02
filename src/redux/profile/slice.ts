import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { User } from 'types/user';
import { login, getProfile } from './thunks';

export type ProfileState = {
  profile: User | null;
  error: SerializedError | null;
  loading: boolean;
  isChecked: boolean;
};

const initialState: ProfileState = {
  profile: null,
  error: null,
  loading: false,
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
        loading: true,
      };
    });

    builder.addCase(login.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        isChecked: true,
        profile: { ...action.payload },
      };
    });

    builder.addCase(login.rejected, (state, action) => {
      return {
        ...state,
        loading: false,
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
        loading: false,
      };
    });

    builder.addCase(getProfile.rejected, (state, action) => {
      return {
        ...state,
        isChecked: true,
        profile: null,
        error: action.error,
        loading: false,
      };
    });
  },
});

// eslint-disable-next-line import/no-default-export
export default profileSlice.reducer;
