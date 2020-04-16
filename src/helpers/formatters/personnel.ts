import { formatDate, ISO_DATE_FORMAT } from 'helpers/date';
import { PersonnelDetails, PersonnelFormData } from 'types/personnel';

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
    unitName,
    platName,
    rank,
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
