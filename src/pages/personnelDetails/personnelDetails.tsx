import React, { useEffect } from 'react';
import { RouteComponentProps, useParams } from '@reach/router';
import { useDispatch } from 'react-redux';

// helpers
import { useDialog } from 'helpers/hooks/uiHooks';
// actions
import { purge } from 'redux/personnel-details/slice';
// components
import { Dialog } from 'components/dialogs/Dialog';
import { PersonnelForm } from 'components/PersonnelForm';

import { PersonnelInfo } from './components/PersonnelInfo';
import { PromotionList } from './components/PromotionList';
import { PenaltyList } from './components/PenaltyList';
import { ArchiveList } from './components/ArchiveList';
import { PersonnelDelete } from './components/PersonnelDelete';

import * as S from './personnelDetails.style';

const PersonnelDetails: React.FC<RouteComponentProps> = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const personnelId = params.id;
  const [isOpen, toggleDialog] = useDialog();

  useEffect(() => {
    return () => {
      dispatch(purge());
    };
  }, [params.id, dispatch]);

  return (
    <S.Container>
      <>
        <PersonnelInfo
          personnelId={personnelId}
          onToggleDialog={toggleDialog}
        />

        <PromotionList personnelId={personnelId} />

        <PenaltyList personnelId={personnelId} />

        <ArchiveList />

        <PersonnelDelete />

        <Dialog isOpened={isOpen}>
          <PersonnelForm onFormClose={toggleDialog} isEdit />
        </Dialog>
      </>
    </S.Container>
  );
};

export { PersonnelDetails };
