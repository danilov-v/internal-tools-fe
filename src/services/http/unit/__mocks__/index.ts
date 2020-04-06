import { Unit } from 'types/unit';
import { sleep } from 'helpers/utils';
import { SUCCESSFUL_UNIT, SUCCESSFUL_CREATE_UNIT } from './testData';

export const fetchUnits = async (): Promise<Unit[]> => {
  await sleep();

  return SUCCESSFUL_UNIT;
};

export const createUnit = async (): Promise<Unit> => {
  await sleep();

  return SUCCESSFUL_CREATE_UNIT;
};
