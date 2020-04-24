import React, { useState } from 'react';

import { Button } from 'components/buttons/Button';
import { Select, OptionType } from 'components/Select';
import { Input } from 'components/inputs/Input';
import { Column, Row } from 'components/layout';

import * as S from './ItemForm.style';

type ItemFormProps = {
  type: 'promotion' | 'penalty';
  types: OptionType[];
  onFormClose: () => void;
  onSubmit: (comment: string, typeId: number) => void;
};

export const ItemForm: React.FC<ItemFormProps> = ({
  type,
  types,
  onFormClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    comment: '',
    typeId: types[0].value,
  });
  const isPromotion = type === 'promotion';

  const submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (formData.typeId && formData.comment) {
      onSubmit(formData.comment, +formData.typeId);
    }
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      comment: e.currentTarget.value,
    });
  };

  const handleSelect = (e: React.FormEvent<HTMLSelectElement>): void => {
    setFormData({
      ...formData,
      typeId: +e.currentTarget.value,
    });
  };

  return (
    <form onSubmit={submitForm}>
      <S.FormHeader
        component="h3"
        variant="secondary"
        align="center"
        mt={15}
        mb={50}
      >
        {isPromotion ? 'Добавление поощерение' : 'Добавление взыскания'}
      </S.FormHeader>
      <Column>
        <Row justify="space-between" mt={0} mb={10}>
          <S.Label>Тип {isPromotion ? 'поощерения:' : 'взыскания:'}</S.Label>
          <Select
            value={formData.typeId}
            onChange={handleSelect}
            options={types}
          />
        </Row>
        <Row justify="space-between" mt={0} mb={10}>
          <S.Label>Комментарий</S.Label>
          <Input
            variant="primary"
            id="comment"
            name="comment"
            onChange={handleInput}
            value={formData.comment}
            align="right"
            placeholder={
              isPromotion ? 'За успешный наряд' : 'За опоздание в строй'
            }
          />
        </Row>

        <Row justify="space-around" mt={24} mr={100} ml={100}>
          <Button variant="contained" color="primary" type="submit">
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
