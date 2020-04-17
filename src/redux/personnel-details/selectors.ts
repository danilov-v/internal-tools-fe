import { createSelector, SerializedError } from '@reduxjs/toolkit';
import { RootStore } from 'redux/store.types';
import { PersonnelDetails } from 'types/personnel';
import { getSquadUnits, getPlatUnits, getUnits } from 'redux/unit/selectors';
import { getRanks } from 'redux/rank/selectors';
import { formatDate } from 'helpers/date';

export const getPersonnelDetails = (
  state: RootStore,
): PersonnelDetails | null => state.personnelDetails.personnelDetails;

export const isLoadingPersonnelDetails = (state: RootStore): boolean =>
  state.personnelDetails.loading;

export const getPersonnelDetailsError = (
  state: RootStore,
): SerializedError | null => state.personnelDetails.error;

export const getPersonnelPlatId = createSelector(
  getPersonnelDetails,
  getSquadUnits,
  getPlatUnits,
  (personnelDetails, squadUnits, platUnits) => {
    if (!personnelDetails) return null;
    const { unitId } = personnelDetails;

    const squadUnit = squadUnits.find(unit => unit.id === unitId);
    const platUnit =
      squadUnit && platUnits.find(unit => unit.id === squadUnit.parentUnit);

    return platUnit ? platUnit.id : null;
  },
);

export const getPersonnelDetailsInfo = createSelector(
  getPersonnelDetails,
  getPersonnelPlatId,
  getUnits,
  getRanks,
  (personnelDetails, platId, units, ranks) => {
    if (!personnelDetails) return null;

    const plat = units.find(unit => unit.id === platId);
    const squad = units.find(unit => unit.id === personnelDetails.unitId);
    const rankInfo = ranks.find(rank => rank.id === personnelDetails.rankId);

    return {
      ...personnelDetails,
      birthday: formatDate(new Date(personnelDetails.birthday)),
      calledAt: formatDate(new Date(personnelDetails.calledAt)),
      demobilizationAt: formatDate(new Date(personnelDetails.demobilizationAt)),
      rankName: rankInfo?.name,
      unitName: squad?.name,
      platName: plat?.name,
    };
  },
);
