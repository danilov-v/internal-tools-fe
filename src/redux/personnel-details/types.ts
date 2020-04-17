import { PersonnelDetails } from 'types/personnel';
import { SerializedError } from '@reduxjs/toolkit';

export type PersonnelDetailsState = {
  personnelDetails: PersonnelDetails | null;
  loading: boolean;
  error: SerializedError | null;
};
