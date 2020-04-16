import { RootStore } from 'redux/store.types';
import { Unit } from 'types/unit';

export const getUnits = (state: RootStore): Unit[] => state.unit.units;
