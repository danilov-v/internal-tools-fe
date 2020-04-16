import { ProfileState } from './profile/types';
import { PersonnelState } from './personnel/types';
import { RankState } from './rank/types';
import { UnitState } from './unit/types';
import { PersonnelDetailsState } from './personnel-details/types';

export type RootStore = {
  profile: ProfileState;
  personnel: PersonnelState;
  rank: RankState;
  unit: UnitState;
  personnelDetails: PersonnelDetailsState;
};

export type OptionalRootStore = Partial<RootStore>;
