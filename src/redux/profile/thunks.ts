import { createAsyncThunk } from '@reduxjs/toolkit';

import { login, logout } from 'services/http/auth';
import { fetchProfile } from 'services/http/profile';

export const requestProfile = createAsyncThunk('profile/get', fetchProfile);

export const requestLogin = createAsyncThunk('profile/login', login);

export const requestLogout = createAsyncThunk('profile/logout', logout);
