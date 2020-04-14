import { AxiosResponse } from 'axios';
import { PersonnelDetails, PersonnelFormData } from 'types/personnel';
import { formatDate, ISO_DATE_FORMAT } from 'helpers/date';

export const formatPersonnelDetails = ({
  data: personnel,
}: AxiosResponse<PersonnelDetails>): PersonnelDetails => ({
  ...personnel,
  birthday: formatDate(new Date(personnel.birthday)),
  calledAt: formatDate(new Date(personnel.calledAt)),
  demobilizationAt: formatDate(new Date(personnel.demobilizationAt)),
});

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
