import React from 'react';
import { useSelector } from 'react-redux';
import { getActivePromotions } from 'redux/promotion/selectors';
import { Button } from 'components/buttons/Button';
import { Column, Row } from 'components/layout';

import { DetailsList } from '../DetailsList';

import * as S from './PromotionList.style';

export const PromotionList: React.FC = () => {
  const promotions = useSelector(getActivePromotions);

  return (
    <Column>
      <Row>
        <S.Title>Поощрения:</S.Title>
      </Row>
      <DetailsList type="promotion" items={promotions} />
      <Row>
        <Button
          color="primary"
          onClick={() => console.log('Добавить поощрение')}
          startIcon={<S.PlusIcon />}
          variant="text"
        >
          Добавить поощрение
        </Button>
      </Row>
    </Column>
  );
};
