import React from 'react';
import { useSelector } from 'react-redux';
import { getClosedPromotions } from 'redux/promotion/selectors';
import { getClosedPenalties } from 'redux/penalty/selectors';
// components
import { Accordion } from 'components/Accordion';
import { Button } from 'components/buttons/Button';
// assets
import { ReactComponent as DownIcon } from 'assets/icons/down.svg';
import { ReactComponent as UpIcon } from 'assets/icons/up.svg';
import { DetailsList } from '../DetailsList';

import * as S from './ArchiveList.style';

export const ArchiveList: React.FC = () => {
  const promotions = useSelector(getClosedPromotions);
  const penalties = useSelector(getClosedPenalties);

  const items = [...promotions, ...penalties];

  return (
    <Accordion
      isExpanded
      render={(toggle, isExpanded) => (
        <Button
          endIcon={isExpanded ? <UpIcon /> : <DownIcon />}
          onClick={toggle}
          variant="text"
        >
          Архив
        </Button>
      )}
    >
      {items.length > 0 ? (
        <DetailsList items={items} isDisabled />
      ) : (
        <S.NoteComment mb={10} mt={10}>
          Здесь будут отображаться реализованные поощрения и взыскания
          военнослужащего
        </S.NoteComment>
      )}
    </Accordion>
  );
};
