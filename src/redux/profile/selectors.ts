import { createSelector, SerializedError } from '@reduxjs/toolkit';
import { RootStore } from 'redux/store';
import { User } from 'types/user';

export const getProfileInfo = (state: RootStore): User | null =>
  state.profile.profile;

export const getProfileError = (state: RootStore): SerializedError | null =>
  state.profile.error;

export const isAuthChecked = (state: RootStore): boolean =>
  state.profile.isChecked;

export const isAuthorizedProfile = createSelector(
  getProfileInfo,
  isAuthChecked,
  (profile, isChecked) => Boolean(profile && isChecked),
);
