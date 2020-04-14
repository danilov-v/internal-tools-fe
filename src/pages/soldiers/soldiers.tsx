import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useDialog } from 'helpers/hooks/uiHooks';
import { Dialog } from 'components/dialogs/Dialog';
import { CreatePersonnelForm } from './components/CreatePersonnelForm';
import { SoldersList } from './components/SoldiersList';

export const Soldiers: React.FC<RouteComponentProps> = () => {
  const [isOpen, toggleDialog] = useDialog();

  return (
    <>
      <SoldersList toggleCreateForm={toggleDialog} />
      <Dialog isOpened={isOpen}>
        <CreatePersonnelForm onFormClose={toggleDialog} />
      </Dialog>
    </>
  );
};
