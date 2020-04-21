import { UNIT } from 'configs/urls';
import { http } from 'services/http';
import { Unit } from 'types/unit';

export const fetchUnits = async (): Promise<Unit[]> => http.get(UNIT);

export const createUnit = async (unit: {
  name: string;
  typeId: number;
  parentUnit: number;
}): Promise<Unit> => http.post(UNIT, unit);
