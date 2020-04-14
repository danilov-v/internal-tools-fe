import { RootStore } from 'redux/store';
import { Rank } from 'types/rank';

export const getRanks = (state: RootStore): Rank[] => state.rank.ranks;
