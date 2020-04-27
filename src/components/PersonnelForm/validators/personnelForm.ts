import { trim, isEmpty, flow, each, parseInt, omit } from 'lodash';
import { isExists } from 'date-fns';
import { PersonnelDetails } from 'types/personnel';
import { ValidationErrors } from 'types/validator';

interface PersonnelFValidationErrors extends ValidationErrors {
  firstName?: string;
  lastName?: string;
  middleName?: string;
  calledAt?: string;
  demobilizationAt?: string;
  birthday?: string;
  phone?: string;
  position?: string;
}

const VALIDATION_ERRORS: PersonnelFValidationErrors = {
  firstName: 'Введите имя военнослужащего',
  lastName: 'Введите фамилию военнослужащего',
  middleName: 'Введите отчество военнослужащего',
  calledAt: 'Введенная  дата не корректна',
  demobilizationAt: 'Введенная  дата не корректна',
  birthday: 'Введенная  дата не корректна',
  position: 'Введите звание',
  phone: 'Введите номер телефона',
};

const isStringEmpty = flow([trim, isEmpty]);

const isDateStringValidDate = (localDateString: string): boolean => {
  if (localDateString.length < 10) return false;

  const [day, month, year] = localDateString.split('-').map(parseInt);

  return isExists(year, month - 1, day);
};

export const validatePersonnelForm = (
  values: PersonnelDetails,
): PersonnelFValidationErrors => {
  const errors: ValidationErrors = {};

  each(omit(values, 'comment'), (value, key) => {
    if (isStringEmpty(value)) {
      errors[key] = VALIDATION_ERRORS[key];
    }
  });

  if (!isDateStringValidDate(values.calledAt))
    errors.calledAt = VALIDATION_ERRORS.calledAt;

  if (!isDateStringValidDate(values.demobilizationAt))
    errors.demobilizationAt = VALIDATION_ERRORS.demobilizationAt;

  if (!isDateStringValidDate(values.birthday))
    errors.birthday = VALIDATION_ERRORS.birthday;

  return errors;
};
