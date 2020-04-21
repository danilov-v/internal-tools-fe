import React from 'react';

import { Promotion } from 'types/promotion';
import { Penalty } from 'types/penalty';

import { Column, Row } from 'components/layout';
import { IconButton } from 'components/buttons/IconButton';
// assets
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { ReactComponent as TickIcon } from 'assets/icons/tick.svg';

import * as S from './DetailsList.style';

type DetailsListProps = {
  items: Promotion[] | Penalty[];
  type?: 'promotion' | 'penalty';
  isDisabled?: boolean;
};

export const DetailsList: React.FC<DetailsListProps> = ({
  items,
  type = 'promotion',
  isDisabled = false,
}) => {
  return (
    <>
      {items.map(item => (
        <S.Block key={item.id}>
          <Column>
            <S.NoteName type={type} isDisabled={isDisabled}>
              {item.type}
            </S.NoteName>
            <S.NoteComment>{item.comment}</S.NoteComment>
          </Column>
          {!isDisabled && (
            <Row>
              <IconButton
                icon={<TickIcon />}
                onClick={() => console.log('Закрыть')}
              />
              <IconButton
                icon={<CloseIcon />}
                onClick={() => console.log('Удалить')}
              />
            </Row>
          )}
        </S.Block>
      ))}
    </>
  );
};
