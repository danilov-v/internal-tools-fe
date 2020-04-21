import { RANK } from 'configs/urls';
import { http } from 'services/http';
import { Rank } from 'types/rank';

export const fetchRanks = async (): Promise<Rank[]> => http.get(RANK);

export const fetchRankById = async (id: number): Promise<Rank> =>
  http.get(`${RANK}/${id}`);
