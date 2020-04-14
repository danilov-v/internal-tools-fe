import { trim, isEmpty, flow, isDate } from 'lodash';
import { PersonnelFormData } from 'types/personnel';
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
  unitName?: string;
  platName?: string;
  rankId?: string;
}

const VALIDATION_ERRORS: ValidationErrors = {
  firstName: 'Введите имя военнослужащего',
  lastName: 'Введите фамилию военнослужащего',
  middleName: 'Введите отчество военнослужащего',
  calledAt: 'Введите дату призыва',
  demobilizationAt: 'Введите дату дембеля',
  birthday: 'Введите дату рождения',
  position: 'Введите звание',
  phone: 'Введите номер телефона',
  unitName: 'Выберите номер отделения',
  platName: 'Выберите номер взвода',
};

const isStringEmpty = flow([trim, isEmpty]);

export class PersonnelFormValidator implements Validator<PersonnelFormData> {
  errors: PersonnelFValidationErrors = {};

  getErrors = (): PersonnelFValidationErrors => this.errors;

  validate = (values: PersonnelFormData): ValidationErrors => {
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

    if (isStringEmpty(values.unitName))
      errors.unitName = VALIDATION_ERRORS.unitName;

    if (isStringEmpty(values.platName))
      errors.platName = VALIDATION_ERRORS.platName;

    if (!isDate(values.calledAt)) errors.calledAt = VALIDATION_ERRORS.calledAt;

    if (!isDate(values.demobilizationAt))
      errors.demobilizationAt = VALIDATION_ERRORS.demobilizationAt;

    if (!isDate(values.birthday)) errors.birthday = VALIDATION_ERRORS.birthday;

    this.errors = errors;

    return this.errors;
  };
}
