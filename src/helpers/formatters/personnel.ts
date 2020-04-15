import { find } from 'lodash';
import { formatDate, ISO_DATE_FORMAT } from 'helpers/date';
import { PersonnelDetails, PersonnelFormData } from 'types/personnel';
import { Unit } from 'types/unit';
import { Rank } from 'types/rank';

export const formatPersonnelDetailsToFormData = (
  personnel: PersonnelDetails,
  units: Unit[],
  ranks: Rank[],
): PersonnelFormData => {
  const personnelUnit = find(units, unit => unit.id === personnel.unitId);
  const personnelPlat =
    personnelUnit && find(units, unit => unit.id === personnelUnit.parentUnit);
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
};

export const formatPersonnelFormData = (
  data: PersonnelFormData,
): PersonnelDetails => {
  const {
    birthday,
    calledAt,
    demobilizationAt,
    marriageStatus,
    rankId,
    unitId,
    ...rest
  } = data;

  return {
    ...rest,
    birthday: birthday ? formatDate(birthday, ISO_DATE_FORMAT) : '',
    calledAt: calledAt ? formatDate(calledAt, ISO_DATE_FORMAT) : '',
    demobilizationAt: demobilizationAt
      ? formatDate(demobilizationAt, ISO_DATE_FORMAT)
      : '',
    rankId: +rankId,
    unitId: +unitId,
  };
};
