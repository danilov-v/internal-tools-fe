import React from 'react';
import { useSelector } from 'react-redux';
import { getActivePenalties } from 'redux/penalty/selectors';
import { Button } from 'components/buttons/Button';
import { Column, Row } from 'components/layout';
import { DetailsList } from '../DetailsList';

import * as S from './PenaltyList.style';

export const PenaltyList: React.FC = () => {
  const penalties = useSelector(getActivePenalties);

  return (
    <Column>
      <Row>
        <S.Title>Взыскания:</S.Title>
      </Row>
      <DetailsList type="penalty" items={penalties} />
      <Row>
        <Button
          color="yellow"
          onClick={() => console.log('Добавить взыскание')}
          startIcon={<S.PlusIcon />}
          variant="text"
        >
          Добавить взыскание
        </Button>
      </Row>
    </Column>
  );
};
