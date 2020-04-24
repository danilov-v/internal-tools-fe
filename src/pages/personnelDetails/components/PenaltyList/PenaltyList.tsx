import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  requestPenaltyCreate,
  requestPenaltyClose,
  requestPenaltyRemove,
  requestPenaltiesById,
} from 'redux/penalty/thunks';
import { getActivePenalties } from 'redux/penalty/selectors';
import { getPenaltyTypeOptions } from 'redux/penaltyType/selectors';
import { Penalty } from 'types/penalty';
import { useDialog } from 'helpers/hooks/uiHooks';
import { Dialog } from 'components/dialogs/Dialog';
import { Button } from 'components/buttons/Button';
import { Column, Row } from 'components/layout';
import { DetailsList } from '../DetailsList';

import * as S from './PenaltyList.style';
import { ItemForm } from '../ItemForm';

export const PenaltyList: React.FC<{ personnelId: number }> = ({
  personnelId,
}) => {
  const dispatch = useDispatch();
  const [isOpen, toggleDialog] = useDialog();
  const penalties = useSelector(getActivePenalties);
  const penaltyTypes = useSelector(getPenaltyTypeOptions);

  const createPenalty = (comment: string, typeId: number): void => {
    dispatch(
      requestPenaltyCreate({
        comment,
        typeId,
        personnelId: +personnelId,
      }),
    );

    toggleDialog();
  };

  const closePenalty = (penalty: Penalty): void => {
    dispatch(requestPenaltyClose(penalty));
  };
  const removePenalty = (penalty: Penalty): void => {
    dispatch(requestPenaltyRemove(penalty));
  };

  useEffect(() => {
    dispatch(requestPenaltiesById(personnelId));
  }, [dispatch, personnelId]);

  return (
    <Column>
      <Row>
        <S.Title>Взыскания:</S.Title>
      </Row>
      <DetailsList
        type="penalty"
        items={penalties}
        onClose={closePenalty}
        onRemove={removePenalty}
      />
      <Row>
        <Button
          color="yellow"
          onClick={toggleDialog}
          startIcon={<S.PlusIcon />}
          variant="text"
        >
          Добавить взыскание
        </Button>
      </Row>
      <Dialog isOpened={isOpen}>
        <ItemForm
          type="penalty"
          types={penaltyTypes}
          onFormClose={toggleDialog}
          onSubmit={createPenalty}
        />
      </Dialog>
    </Column>
  );
};
