import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from 'components/buttons/Button';
import { Input } from 'components/inputs/Input';
import { Column, Row, Text } from 'components/layout';
import { Select } from 'components/Select';
import { useForm } from 'helpers/hooks/useForm';
import { getPersonnelRemovalTypeOptions } from 'redux/personnelRemovalType/selectors';
import {
  getPersonnelDetailsError,
  isLoadingPersonnelDetails,
  isPersonnelRemoved,
} from 'redux/personnel-details/selectors';
import { removePersonnelDetails } from 'redux/personnel-details/thunks';

import { Label, Form, FormHeader } from './PersonnelRemovalForm.style';

type PersonnelRemovalValues = {
  comment?: string;
  typeId: string;
};

interface ValidationErrors extends Record<string, string | undefined> {
  typeId?: string;
}

const INITIAL_DATA: PersonnelRemovalValues = {
  comment: '',
  typeId: '',
};

const VALIDATION_ERRORS = {
  typeId: 'Выберите причину удаления',
};

const validate = ({ typeId }: PersonnelRemovalValues): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (!typeId) {
    errors.typeId = VALIDATION_ERRORS.typeId;
  }

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

  const typesOptions = useSelector(getPersonnelRemovalTypeOptions);

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
          comment: values.comment || undefined,
          personnelId: +personnelId,
          typeId: +values.typeId,
        }),
      );
    }
  };

  useEffect(() => {
    if (isRemoved) {
      onFormClose();
    }
  }, [isRemoved, onFormClose]);

  const { typeId, comment } = values;

  return (
    <Form onSubmit={submitForm}>
      <FormHeader
        align="center"
        component="h3"
        mb={50}
        mt={15}
        variant="secondary"
      >
        Удалить военнослужащего
      </FormHeader>

      <Column>
        <Row justify="space-between" mb={10} mt={0}>
          <Label>Причина удаления</Label>
          <Select
            onChange={handleSelect}
            options={typesOptions}
            value={typeId}
          />
        </Row>
        <Row justify="space-between" mb={10} mt={0}>
          <Label>Комментарий:</Label>
          <Input
            id="comment"
            align="right"
            name="comment"
            onChange={handleInput}
            placeholder="Специалист"
            value={comment}
            variant="primary"
          />
        </Row>

        <Row justify="space-around" ml={100} mr={100} mt={24}>
          <Button
            color="secondary"
            disabled={isLoading}
            type="submit"
            variant="contained"
          >
            Удалить
          </Button>
          <Button
            color="primary"
            disabled={isLoading}
            onClick={onFormClose}
            type="reset"
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
