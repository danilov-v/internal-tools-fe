import { createSelector } from '@reduxjs/toolkit';
import { RootStore } from 'redux/store';
import { UIState } from './slice';

export const getUISlice = (state: RootStore): UIState => state.ui;

export const getLoginForm = createSelector(
  getUISlice,
  uiSlice => uiSlice.loginForm,
);
