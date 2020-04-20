import { trim, isEmpty, flow, each, parseInt } from 'lodash';
import { isExists } from 'date-fns';
import { PersonnelDetails } from 'types/personnel';
import { Validator, ValidationErrors } from 'types/validator';

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

const VALIDATION_ERRORS: ValidationErrors = {
  firstName: 'Введите имя военнослужащего',
  lastName: 'Введите фамилию военнослужащего',
  middleName: 'Введите отчество военнослужащего',
  calledAt: 'Введенная  дата не коректна',
  demobilizationAt: 'Введенная  дата не коректна',
  birthday: 'Введенная  дата не коректна',
  position: 'Введите звание',
  phone: 'Введите номер телефона',
};

const isStringEmpty = flow([trim, isEmpty]);

const isDateStringValidDate = (localDateString: string): boolean => {
  if (localDateString.length < 10) return false;

  const [day, month, year] = localDateString.split('-').map(parseInt);

  return isExists(year, month - 1, day);
};

export class PersonnelFormValidator implements Validator<PersonnelDetails> {
  errors: PersonnelFValidationErrors = {};

  getErrors = (): PersonnelFValidationErrors => this.errors;

  validate = (values: PersonnelDetails): ValidationErrors => {
    const errors: ValidationErrors = {};

    each(values, (value, key) => {
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

    this.errors = errors;

    return this.errors;
  };
}
