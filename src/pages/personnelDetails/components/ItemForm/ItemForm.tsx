import React from 'react';

import { useForm } from 'helpers/hooks/useForm';

import { Button } from 'components/buttons/Button';
import { Select } from 'components/Select';
import { Input } from 'components/inputs/Input';
import { Column, Row } from 'components/layout';

import { ItemFormProps, ItemFormState } from './ItemForm.types';
import { validate } from './ItemForm.validation';
import * as S from './ItemForm.style';

const INITIAL_DATA = {
  comment: '',
  typeId: '',
};

export const ItemForm: React.FC<ItemFormProps> = ({
  onFormClose,
  onSubmit,
  type,
  types,
}) => {
  const { values, onChange, validateForm, errorsShown, errors } = useForm<
    ItemFormState
  >(INITIAL_DATA, validate);

  const isPromotion = type === 'promotion';

  const submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(values.comment, +values.typeId);
    }
  };

  const handleChange = (fieldName: keyof ItemFormState) => (
    e: React.FormEvent<HTMLInputElement | HTMLSelectElement>,
  ): void => {
    onChange(fieldName, e.currentTarget.value);
  };

  return (
    <form onSubmit={submitForm}>
      <S.FormHeader
        align="center"
        component="h3"
        mb={50}
        mt={15}
        variant="secondary"
      >
        {isPromotion ? 'Добавление поощерение' : 'Добавление взыскания'}
      </S.FormHeader>
      <Column>
        <Row justify="space-between" mb={10} mt={0}>
          <S.Label>Тип {isPromotion ? 'поощерения:' : 'взыскания:'}</S.Label>
          <Select
            onChange={handleChange('typeId')}
            options={types}
            value={values.typeId}
            invalid={errorsShown}
            errorMessage={errors.typeId}
          />
        </Row>
        <Row justify="space-between" mb={10} mt={0}>
          <S.Label>Комментарий</S.Label>
          <Input
            align="right"
            id="comment"
            name="comment"
            onChange={handleChange('comment')}
            placeholder={
              isPromotion ? 'За успешный наряд' : 'За опоздание в строй'
            }
            value={values.comment}
            variant="primary"
            invalid={errorsShown}
            errorMessage={errors.comment}
          />
        </Row>

        <Row justify="space-around" ml={100} mr={100} mt={24}>
          <Button color="primary" type="submit" variant="contained">
            Сохранить
          </Button>
          <Button color="secondary" onClick={onFormClose} type="reset">
            Отмена
          </Button>
        </Row>
      </Column>
    </form>
  );
};
