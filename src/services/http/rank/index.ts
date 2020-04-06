import { RANK } from 'configs/urls';
import { Rank } from 'types/rank';
import { http } from 'services/http';

export const fetchRanks = async (): Promise<Rank[]> =>
  http.get(RANK).then(response => response.data);

export const fetchRankById = async (id: number): Promise<Rank> =>
  http.get(`${RANK}/${id}`).then(response => response.data);
