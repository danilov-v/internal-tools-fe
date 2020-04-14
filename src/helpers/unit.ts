import { Unit } from 'types/unit';
import { UNIT_ID } from 'configs/constants';

export const PLAT_TYPE_ID = 5;
export const DEP_TYPE_ID = 6;

export const getUnitChild = (units: Unit[], unitId = UNIT_ID): Unit[] => {
  return units.reduce((childUnits: Unit[], item) => {
    if (item.parentUnit === unitId) {
      return [...childUnits, item];
    }

    return childUnits;
  }, []);
};
