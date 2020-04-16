import { OptionalRootStore } from 'redux/store.types';
import { UserMock } from 'tests/test-data/user.mock';

export const EMPTY_PROFILE: OptionalRootStore = {
  profile: {
    error: null,
    profile: null,
    isChecked: false,
  },
};

export const FULFILLED_PROFILE: OptionalRootStore = {
  profile: {
    error: null,
    profile: UserMock,
    isChecked: true,
  },
};
