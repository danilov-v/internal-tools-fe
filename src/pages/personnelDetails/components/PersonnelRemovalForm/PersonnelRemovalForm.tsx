import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPersonnelRemovelTypeOptions } from 'redux/personnelRemovalType/selectors';
import { requestPersonalRemovalTypes } from 'redux/personnelRemovalType/thunks';
import { Button } from 'components/buttons/Button';
import { Row, Column } from 'components/layout';
import { Input } from 'components/inputs/Input';
import { Select } from 'components/Select';
import { useForm } from 'helpers/hooks/useForm';
import { Text } from 'components/layout/Text';
import { removePersonnelDetails } from 'redux/personnel-details/thunks';
import {
  isLoadingPersonnelDetails,
  isPersonnelRemoved,
  getPersonnelDetailsError,
} from 'redux/personnel-details/selectors';

import { Form, FormHeader, Label } from './PersonnelRemovalForm.style';

type PersonnelRemovalValues = {
  typeId: string;
  comment?: string;
};

interface ValidationErros extends Record<string, string | undefined> {
  typeId?: string;
}

const INITIAL_DATA: PersonnelRemovalValues = {
  typeId: '',
  comment: '',
};

const VALIDATION_ERRORS = {
  typeId: 'Выбирите причину удаления',
};

const validate = ({ typeId }: PersonnelRemovalValues): ValidationErros => {
  const errors: ValidationErros = {};

  if (!typeId) errors.typeId = VALIDATION_ERRORS.typeId;

  return errors;
};

type PersonnelRemovalFormPropsType = {
  onFormClose: () => void;
  personnelId: number;
};

export const PersonnelRemovalForm: React.FC<PersonnelRemovalFormPropsType> = ({
  onFormClose,
  personnelId,
}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingPersonnelDetails);
  const isRemoved = useSelector(isPersonnelRemoved);
  const error = useSelector(getPersonnelDetailsError);

  const { values, onChange, validateForm } = useForm<PersonnelRemovalValues>(
    INITIAL_DATA,
    validate,
  );

  const typesOptions = useSelector(getPersonnelRemovelTypeOptions);

  const handleSelect = (e: React.FormEvent<HTMLSelectElement>): void => {
    onChange('typeId', e.currentTarget.value);
  };

  const handleInput = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>,
  ): void => {
    onChange('comment', e.currentTarget.value);
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(
        removePersonnelDetails({
          personnelId: +personnelId,
          typeId: +values.typeId,
          comment: values.comment || undefined,
        }),
      );
    }
  };

  useEffect(() => {
    dispatch(requestPersonalRemovalTypes());
  }, [dispatch]);

  useEffect(() => {
    if (isRemoved) {
      onFormClose();
    }
  }, [isRemoved, onFormClose]);

  const { typeId, comment } = values;

  return (
    <Form onSubmit={submitForm}>
      <FormHeader
        component="h3"
        variant="secondary"
        align="center"
        mt={15}
        mb={50}
      >
        Удалить военнослужащего
      </FormHeader>

      <Column>
        <Row justify="space-between" mt={0} mb={10}>
          <Label>Причина удаления</Label>
          <Select
            value={typeId}
            onChange={handleSelect}
            options={typesOptions}
          />
        </Row>
        <Row justify="space-between" mt={0} mb={10}>
          <Label>Комментарий:</Label>
          <Input
            variant="primary"
            id="comment"
            name="comment"
            onChange={handleInput}
            value={comment}
            align="right"
            placeholder="Специалист"
          />
        </Row>

        <Row justify="space-around" mt={24} mr={100} ml={100}>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            disabled={isLoading}
          >
            Удалить
          </Button>
          <Button
            color="primary"
            onClick={onFormClose}
            type="reset"
            disabled={isLoading}
          >
            Отмена
          </Button>
        </Row>
        {error && (
          <Text align="center" variant="error">
            Что-то пошло не так
          </Text>
        )}
      </Column>
    </Form>
  );
};
