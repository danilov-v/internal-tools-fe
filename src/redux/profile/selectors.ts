import { createSelector } from '@reduxjs/toolkit';
import { RootStore } from 'redux/store';
import { ProfileState } from './slice';

export const getProfileSlice = (state: RootStore): ProfileState =>
  state.profile;

export const getProfileInfo = createSelector(
  getProfileSlice,
  profileSliceData => profileSliceData.profile,
);

export const getProfileError = createSelector(
  getProfileSlice,
  profileSliceData => profileSliceData.error,
);

export const isAuthChecked = createSelector(
  getProfileSlice,
  profileSliceData => profileSliceData.isChecked,
);

export const isProfileExist = createSelector(
  getProfileSlice,
  profileSlice => profileSlice.profile,
);

export const isAuthorizedProfile = createSelector(
  isAuthChecked,
  isProfileExist,
  (isChecked, isExist) => isChecked && isExist,
);
