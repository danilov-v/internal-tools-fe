import { useState, useEffect, useCallback, useRef } from 'react';
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
  const isFirstRun = useRef(true);
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [errorsShown, setErrorsShown] = useState(false);

  const resetForm = useCallback((): void => {
    setValues(initialState);
    setErrors({});
    setErrorsShown(false);
  }, [initialState]);

  useEffect(() => {
    // remove double rerender in init form
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    resetForm();
  }, [resetForm]);

  const onChange = (
    fieldName: keyof formValues,
    fieldValue: formValues[keyof formValues],
  ): void => {
    setValues(prevValues => {
      const newValues = { ...prevValues, [fieldName]: fieldValue };
      // TODO: improve this logic - вызывает постоянно двойной рендер компонента. Нужно делать setErrors только если они появились или исчезли
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
