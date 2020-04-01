import { SOLDIER_URL } from 'helpers/url';
import { UNIT_ID } from 'helpers/constants';
import { fetchAPI } from 'services/fetch';
import { Soldier } from 'types/soldier';

const getAllSoldiers = async (unitId = UNIT_ID): Promise<Soldier[]> => {
  const response = await fetchAPI<Soldier[]>(
    `${SOLDIER_URL}?unitId=${unitId}`,
    {
      method: 'GET',
    },
  );

  return response;
};

const getSoldier = async (soldierId: string): Promise<Soldier> => {
  const response = await fetchAPI<Soldier>(`${SOLDIER_URL}/${soldierId}`, {
    method: 'GET',
  });

  return response;
};

export { getAllSoldiers, getSoldier };
