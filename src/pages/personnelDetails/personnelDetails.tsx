import React, { useEffect } from 'react';
import { RouteComponentProps, useParams, navigate } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

// helpers
import { useDialog } from 'helpers/hooks/uiHooks';
// actions
import { purge } from 'redux/personnel-details/slice';
// selectors
import { isPersonnelRemoved } from 'redux/personnel-details/selectors';
// components
import { Dialog } from 'components/dialogs/Dialog';
import { PersonnelForm } from 'components/PersonnelForm';

import { PersonnelInfo } from './components/PersonnelInfo';
import { PromotionList } from './components/PromotionList';
import { PenaltyList } from './components/PenaltyList';
import { ArchiveList } from './components/ArchiveList';
import { PersonnelDelete } from './components/PersonnelDelete';
import { PersonnelRemovalForm } from './components/PersonnelRemovalForm';

import * as S from './personnelDetails.style';

const PersonnelDetails: React.FC<RouteComponentProps> = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const personnelId = params.id;
  const [isEditOpen, toggleEditDialog] = useDialog();
  const [isRemoveOpen, toggleRemoveDialog] = useDialog();
  const isRemoved = useSelector(isPersonnelRemoved);

  useEffect(() => {
    return () => {
      dispatch(purge());
    };
  }, [params.id, dispatch]);

  useEffect(() => {
    if (isRemoved) {
      navigate('/');
    }
  }, [isRemoved]);

  return (
    <S.Container>
      <>
        <PersonnelInfo
          personnelId={personnelId}
          onToggleDialog={toggleEditDialog}
        />

        <PromotionList personnelId={personnelId} />

        <PenaltyList personnelId={personnelId} />

        <ArchiveList />

        <PersonnelDelete onClick={toggleRemoveDialog} />

        <Dialog isOpened={isEditOpen}>
          <PersonnelForm onFormClose={toggleEditDialog} isEdit />
        </Dialog>

        <Dialog isOpened={isRemoveOpen}>
          <PersonnelRemovalForm
            personnelId={params.id}
            onFormClose={toggleRemoveDialog}
          />
        </Dialog>
      </>
    </S.Container>
  );
};

export { PersonnelDetails };
