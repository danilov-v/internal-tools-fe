import { UNIT_URL } from 'configs/urls';
import { fetchAPI } from 'services/fetch';
import { Unit } from 'types/unit';

const getAllUnits = async (): Promise<Unit[]> => {
  const response = await fetchAPI<Unit[]>(UNIT_URL, {
    method: 'GET',
  });

  return response;
};

const getUnit = async (unitId: string): Promise<Unit> => {
  const response = await fetchAPI<Unit>(`${UNIT_URL}/${unitId}`, {
    method: 'GET',
  });

  return response;
};

export { getAllUnits, getUnit };
