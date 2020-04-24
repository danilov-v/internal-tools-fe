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
  type: 'promotion' | 'penalty';
  isDisabled?: boolean;
  onClose?: (item: Promotion | Penalty) => void;
  onRemove?: (item: Promotion | Penalty) => void;
};

export const DetailsList: React.FC<DetailsListProps> = ({
  items,
  type = 'promotion',
  isDisabled = false,
  onClose,
  onRemove,
}) => {
  return (
    <>
      {items.map(item => (
        <S.Block key={item.id + type}>
          <Column>
            <S.NoteName type={type} isDisabled={isDisabled}>
              {item.type}
            </S.NoteName>
            <S.NoteComment>{item.comment}</S.NoteComment>
          </Column>
          {!isDisabled && onClose && onRemove && (
            <Row>
              <IconButton icon={<TickIcon />} onClick={() => onClose(item)} />
              <IconButton icon={<CloseIcon />} onClick={() => onRemove(item)} />
            </Row>
          )}
        </S.Block>
      ))}
    </>
  );
};
