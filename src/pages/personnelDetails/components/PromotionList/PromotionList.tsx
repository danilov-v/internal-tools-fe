import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Promotion } from 'types/promotion';
import {
  requestPromotionClose,
  requestPromotionRemove,
  requestPromotionCreate,
  requestPromotionsById,
} from 'redux/promotion/thunks';
import { getActivePromotions } from 'redux/promotion/selectors';
import { getPromotionTypeOptions } from 'redux/promotionType/selectors';
import { useDialog } from 'helpers/hooks/uiHooks';
import { Dialog } from 'components/dialogs/Dialog';
import { Button } from 'components/buttons/Button';
import { Column, Row } from 'components/layout';

import { DetailsList } from '../DetailsList';
import { ItemForm } from '../ItemForm';

import * as S from './PromotionList.style';

export const PromotionList: React.FC<{ personnelId: number }> = ({
  personnelId,
}) => {
  const dispatch = useDispatch();
  const [isOpen, toggleDialog] = useDialog();
  const promotionTypes = useSelector(getPromotionTypeOptions);
  const promotions = useSelector(getActivePromotions);

  const createPromotion = (comment: string, typeId: number): void => {
    dispatch(
      requestPromotionCreate({
        comment,
        typeId,
        personnelId: +personnelId,
      }),
    );

    toggleDialog();
  };

  const closePromotion = (promotion: Promotion): void => {
    dispatch(requestPromotionClose(promotion));
  };
  const removePromotion = (promotion: Promotion): void => {
    dispatch(requestPromotionRemove(promotion));
  };

  useEffect(() => {
    dispatch(requestPromotionsById(personnelId));
  }, [dispatch, personnelId]);

  return (
    <Column>
      <Row>
        <S.Title>Поощрения:</S.Title>
      </Row>
      <DetailsList
        type="promotion"
        items={promotions}
        onClose={closePromotion}
        onRemove={removePromotion}
      />
      <Row>
        <Button
          color="primary"
          onClick={toggleDialog}
          startIcon={<S.PlusIcon />}
          variant="text"
        >
          Добавить поощрение
        </Button>
      </Row>
      <Dialog isOpened={isOpen}>
        <ItemForm
          type="promotion"
          types={promotionTypes}
          onFormClose={toggleDialog}
          onSubmit={createPromotion}
        />
      </Dialog>
    </Column>
  );
};
