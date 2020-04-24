import React, { useState } from 'react';

import { Button } from 'components/buttons/Button';
import { Select, OptionType } from 'components/Select';
import { Input } from 'components/inputs/Input';
import { Column, Row } from 'components/layout';

import * as S from './ItemForm.style';

type ItemFormProps = {
  onFormClose: () => void;
  onSubmit: (comment: string, typeId: number) => void;
  type: 'promotion' | 'penalty';
  types: OptionType[];
};

export const ItemForm: React.FC<ItemFormProps> = ({
  onFormClose,
  onSubmit,
  type,
  types,
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
            onChange={handleSelect}
            options={types}
            value={formData.typeId}
          />
        </Row>
        <Row justify="space-between" mb={10} mt={0}>
          <S.Label>Комментарий</S.Label>
          <Input
            align="right"
            id="comment"
            name="comment"
            onChange={handleInput}
            placeholder={
              isPromotion ? 'За успешный наряд' : 'За опоздание в строй'
            }
            value={formData.comment}
            variant="primary"
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
