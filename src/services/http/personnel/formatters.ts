import { AxiosResponse } from 'axios';
import { PersonnelDetails } from 'types/personnel';

export const formatPersonnelDetails = ({
  data: personnel,
}: AxiosResponse<PersonnelDetails>): PersonnelDetails => ({
  ...personnel,
});
