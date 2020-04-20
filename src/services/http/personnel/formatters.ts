import { AxiosResponse } from 'axios';
import { PersonnelDetails, PersonnelFormData } from 'types/personnel';
import { formatDate, formatLocaleDateStringToISO } from 'helpers/date';

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
    calledAt,
    demobilizationAt,
    birthday,
    marriageStatus,
    rankId,
    unitId,
    ...rest
  } = data;

  return {
    ...rest,
    calledAt: formatLocaleDateStringToISO(calledAt),
    demobilizationAt: formatLocaleDateStringToISO(demobilizationAt),
    birthday: formatLocaleDateStringToISO(birthday),
    rankId: +rankId,
    unitId: +unitId,
  };
};
