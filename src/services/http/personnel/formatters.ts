import { AxiosResponse } from 'axios';

import { PersonnelDetails } from 'types/personnel';
import { formatDate } from 'helpers/date';

export const formatPersonnelDetails = ({
  data: personnel,
}: AxiosResponse<PersonnelDetails>): PersonnelDetails => ({
  ...personnel,
  birthday: formatDate(new Date(personnel.birthday)),
  calledAt: formatDate(new Date(personnel.calledAt)),
  demobilizationAt: formatDate(new Date(personnel.demobilizationAt)),
});
