import { trim, isEmpty, flow } from 'lodash';
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
  calledAt: 'Введите дату призыва',
  demobilizationAt: 'Введите дату дембеля',
  birthday: 'Введите дату рождения',
  phone: 'Введите номер телефона',
  position: 'Введите звание',
};

const isStringEmpty = flow([trim, isEmpty]);

export class PersonnelFormValidator implements Validator<PersonnelDetails> {
  errors: PersonnelFValidationErrors = {};

  getErrors = (): PersonnelFValidationErrors => this.errors;

  validate = (values: PersonnelDetails): ValidationErrors => {
    const errors: ValidationErrors = {};

    if (isStringEmpty(values.firstName))
      errors.firstName = VALIDATION_ERRORS.firstName;

    if (isStringEmpty(values.lastName))
      errors.lastName = VALIDATION_ERRORS.lastName;

    if (isStringEmpty(values.middleName))
      errors.middleName = VALIDATION_ERRORS.middleName;

    if (isStringEmpty(values.middleName))
      errors.middleName = VALIDATION_ERRORS.middleName;

    if (isStringEmpty(values.phone)) errors.phone = VALIDATION_ERRORS.phone;

    if (isStringEmpty(values.calledAt))
      errors.calledAt = VALIDATION_ERRORS.calledAt;

    if (isStringEmpty(values.demobilizationAt))
      errors.demobilizationAt = VALIDATION_ERRORS.demobilizationAt;

    if (isStringEmpty(values.birthday))
      errors.birthday = VALIDATION_ERRORS.birthday;

    this.errors = errors;

    return this.errors;
  };
}
