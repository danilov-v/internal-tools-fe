import { User } from 'types/user';
import { SerializedError } from '@reduxjs/toolkit';

export type ProfileState = {
  profile: User | null;
  error: SerializedError | null;
  isChecked: boolean;
};
