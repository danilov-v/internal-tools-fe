import { RootStore } from 'redux/store';
import { PersonnelDetails } from 'types/personnel';

export const getPersonnelDetails = (
  state: RootStore,
): PersonnelDetails | null => state.personnelDetails.personnelDetails;
