import React from 'react';
import { isEmpty } from 'lodash';
import { useSelector } from 'react-redux';

// assets
import { ReactComponent as DownIcon } from 'assets/icons/down.svg';
import { ReactComponent as UpIcon } from 'assets/icons/up.svg';
// components
import { Accordion } from 'components/Accordion';
import { Button } from 'components/buttons/Button';
// redux
import { getClosedPromotions } from 'redux/promotion/selectors';
import { getClosedPenalties } from 'redux/penalty/selectors';

import { DetailsList } from '../DetailsList';
import * as S from './ArchiveList.style';

export const ArchiveList: React.FC = () => {
  const promotions = useSelector(getClosedPromotions);
  const penalties = useSelector(getClosedPenalties);

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
      {isEmpty(promotions) && isEmpty(penalties) ? (
        <S.NoteComment mb={10} mt={10}>
          Здесь будут отображаться реализованные поощрения и взыскания
          военнослужащего
        </S.NoteComment>
      ) : (
        <>
          <DetailsList items={promotions} type="promotion" isDisabled />
          <DetailsList items={penalties} type="penalty" isDisabled />
        </>
      )}
    </Accordion>
  );
};
