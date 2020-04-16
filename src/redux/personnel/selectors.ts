import { RootStore } from 'redux/store.types';
import { Personnel } from 'types/personnel';

export const getPersonnel = (state: RootStore): Personnel[] =>
  state.personnel.personnel;
