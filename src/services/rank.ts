import { RANK_URL } from 'helpers/url';
import { fetchAPI } from 'services/fetch';
import { Rank } from 'types/rank';

const getAllRanks = async (): Promise<Rank[]> => {
  const response = await fetchAPI<Rank[]>(RANK_URL, {
    method: 'GET',
  });

  return response;
};

const getRank = async (rankId: string): Promise<Rank> => {
  const response = await fetchAPI<Rank>(`${RANK_URL}/${rankId}`, {
    method: 'GET',
  });

  return response;
};

export { getAllRanks, getRank };
