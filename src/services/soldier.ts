import { SOLDIER_URL } from 'helpers/url';
import { UNIT_ID } from 'helpers/constants';
import { fetchAPI } from 'services/fetch';
import { Soldier } from 'types/soldier';

const getAllSoldiers = async (): Promise<Soldier[]> => {
  const response = await fetchAPI<Soldier[]>(
    `${SOLDIER_URL}?unitId=${UNIT_ID}`,
    {
      method: 'GET',
    },
  );

  return response;
};

export { getAllSoldiers };
