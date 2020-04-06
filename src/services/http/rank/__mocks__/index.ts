import { Rank } from 'types/rank';
import { sleep } from 'helpers/utils';
import { SUCCESSFUL_RANK, SUCCESSFUL_RANK_BY_ID } from './testData';

export const fetchRanks = async (): Promise<Rank[]> => {
  await sleep();

  return SUCCESSFUL_RANK;
};

export const fetchRankById = async (): Promise<Rank> => {
  await sleep();

  return SUCCESSFUL_RANK_BY_ID;
};
