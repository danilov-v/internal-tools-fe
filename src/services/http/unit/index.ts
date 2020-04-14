import { UNIT } from 'configs/urls';
import { Unit } from 'types/unit';
import { http } from 'services/http';

export const fetchUnits = async (): Promise<Unit[]> =>
  http.get(UNIT).then(response => response.data);

export const createUnit = async (unit: {
  name: string;
  typeId: number;
  parentUnit: number;
}): Promise<Unit> => http.post(UNIT, unit).then(response => response.data);
