import { createSelector } from '@reduxjs/toolkit';
import { find } from 'lodash';
import { RootStore } from 'redux/store.types';
import { PersonnelDetails, PersonnelFormData } from 'types/personnel';
import { getRanks } from 'redux/rank/selectors';
import { getUnits } from 'redux/unit/selectors';
import * as POSITIONS from 'helpers/position';

export const DEFAULT_PERSONNEL = {
  firstName: '',
  lastName: '',
  middleName: '',
  calledAt: '2020-04-10',
  demobilizationAt: '2021-04-09',
  birthday: '1995-04-01',
  phone: '',
  position: POSITIONS.OPERATOR,
  rankId: 0,
  unitId: 0,
} as PersonnelDetails;

export const getPersonnelDetails = (
  state: RootStore,
): PersonnelDetails | null => state.personnelDetails.personnelDetails;

export const getPersonnelDetailsFormData = createSelector(
  getPersonnelDetails,
  getUnits,
  getRanks,
  (personnelDetail, units, ranks): PersonnelFormData => {
    const personnel = personnelDetail || DEFAULT_PERSONNEL;
    const personnelUnit = find(units, unit => unit.id === personnel.unitId);
    const personnelPlat =
      personnelUnit &&
      find(units, unit => unit.id === personnelUnit.parentUnit);
    const personnelRank = find(ranks, rank => rank.id === personnel.rankId);
    return {
      ...personnel,
      birthday: new Date(personnel.birthday),
      calledAt: new Date(personnel.calledAt),
      demobilizationAt: new Date(personnel.demobilizationAt),
      unitName: personnelUnit ? personnelUnit.name : '',
      platName: personnelPlat ? personnelPlat.name : '',
      rank: personnelRank && personnelRank.name,
      rankId: personnel.rankId.toString(),
      unitId: personnel.unitId.toString(),
    };
  },
);
