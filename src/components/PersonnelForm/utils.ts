import { memoize } from 'lodash';
import {
  formatLocaleDateStringToISO,
  formatDate,
  DD_MM_YYYY,
} from 'helpers/date';
import { PersonnelDetails } from 'types/personnel';

/**
 * Convert all dates from PersonnelDetails:
 * 2020-05-24 => 24-05-2020
 */
export const convertToFormData = memoize(personnel => {
  return {
    ...personnel,
    birthday: formatDate(new Date(personnel.birthday), DD_MM_YYYY),
    calledAt: formatDate(new Date(personnel.calledAt), DD_MM_YYYY),
    demobilizationAt: formatDate(
      new Date(personnel.demobilizationAt),
      DD_MM_YYYY,
    ),
  };
});

export const formatPersonnelDetails = (
  personnelDetails: PersonnelDetails,
  squadId: number,
): PersonnelDetails => ({
  ...personnelDetails,
  rankId: +personnelDetails.rankId,
  phone: personnelDetails.phone.replace(/[\s()-]/g, ''),
  unitId: squadId,
  calledAt: formatLocaleDateStringToISO(personnelDetails.calledAt),
  birthday: formatLocaleDateStringToISO(personnelDetails.birthday),
  demobilizationAt: formatLocaleDateStringToISO(
    personnelDetails.demobilizationAt,
  ),
});
