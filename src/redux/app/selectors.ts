import { SerializedError } from '@reduxjs/toolkit';

import { RootStore } from 'redux/store';

export const isAppLoading = (state: RootStore): boolean => state.app.loading;

export const getAppError = (state: RootStore): SerializedError | null =>
  state.app.error;

export const isAppLoaded = (state: RootStore): boolean => state.app.loaded;
