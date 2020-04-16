import { trim, isEmpty, flow, each } from 'lodash';
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

    each(values, (value, key) => {
      if (isStringEmpty(value)) {
        errors[key] = VALIDATION_ERRORS[key];
      }
    });

    this.errors = errors;

    return this.errors;
  };
}
