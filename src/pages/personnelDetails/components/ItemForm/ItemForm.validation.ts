import { ValidationErrors } from 'types/validator';
import { ItemFormState } from './ItemForm.types';

const VALIDATION_ERRORS = {
  typeId: 'Выберите тип',
  comment: 'Добавьте комменатарий',
};

export const validate = ({
  comment,
  typeId,
}: ItemFormState): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (!typeId) {
    errors.typeId = VALIDATION_ERRORS.typeId;
  }

  if (!comment) {
    errors.comment = VALIDATION_ERRORS.comment;
  }

  return errors;
};
