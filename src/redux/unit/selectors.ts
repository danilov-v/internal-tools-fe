import { createSelector } from '@reduxjs/toolkit';
import { filter, map, memoize } from 'lodash';

import { PLAT_TYPE_ID, DEP_TYPE_ID } from 'helpers/unit';
import { RootStore } from 'redux/store';
import { Unit } from 'types/unit';

export const getUnits = (state: RootStore): Unit[] => state.unit.units;

export const getPlatUnits = createSelector(getUnits, units =>
  filter(units, {
    typeId: PLAT_TYPE_ID,
  }),
);

export const getPlatOptions = createSelector(getPlatUnits, platUnits =>
  map(platUnits, ({ name, id }) => ({ name, value: id })),
);

export const getSquadUnits = createSelector(getUnits, units =>
  filter(units, { typeId: DEP_TYPE_ID }),
);

export const getSquadOptions = createSelector(getSquadUnits, units =>
  memoize((platId: number) =>
    units
      .filter(unit => unit.parentUnit === platId)
      .map(({ name, id }) => ({ name, value: id })),
  ),
);
