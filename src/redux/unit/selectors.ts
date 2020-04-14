import { RootStore } from 'redux/store';
import { Unit } from 'types/unit';

export const getUnits = (state: RootStore): Unit[] => state.unit.units;
