import { useState, useEffect, useCallback } from 'react';
import { isEmpty } from 'lodash';
import { Validator, ValidationErrors } from 'types/validator';

interface UseFormOutput<formValues> {
  onChange: (
    fieldName: keyof formValues,
    fieldValue: formValues[keyof formValues],
  ) => void;
  validateForm: () => boolean;
  errorsShown: boolean;
  errors: ValidationErrors;
  values: formValues;
  resetForm: () => void;
}

export const useForm = <formValues>(
  initialState: formValues,
  validator: Validator<formValues>,
): UseFormOutput<formValues> => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [errorsShown, setErrorsShown] = useState(false);

  const resetForm = useCallback((): void => {
    setValues(initialState);
    setErrors({});
    setErrorsShown(false);
  }, [initialState]);

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const onChange = (
    fieldName: keyof formValues,
    fieldValue: formValues[keyof formValues],
  ): void => {
    setValues(prevValues => {
      const newValues = { ...prevValues, [fieldName]: fieldValue };
      setErrors(validator.validate(newValues));
      return newValues;
    });
  };

  const validateForm = (): boolean => {
    setErrorsShown(true);
    const validationErrors = validator.validate(values);
    setErrors(validationErrors);

    return isEmpty(validationErrors);
  };

  return {
    onChange,
    errorsShown,
    errors,
    values,
    resetForm,
    validateForm,
  };
};
