import { createAsyncThunk } from '@reduxjs/toolkit';
import { signIn } from 'services/auth';
import { getProfile as getProfileAPI } from 'services/profile';
import { LoginData } from 'types/auth';

export const getProfile = createAsyncThunk('profile/get', () =>
  getProfileAPI(),
);

export const login = createAsyncThunk('profile/login', (data: LoginData) =>
  signIn(data),
);
