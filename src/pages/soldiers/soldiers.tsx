import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useDialog } from 'helpers/hooks/uiHooks';
import { Dialog } from 'components/dialogs/Dialog';
import { PersonnelForm } from 'components/PersonnelForm';
import { SoldersList } from './components/SoldiersList';

export const Soldiers: React.FC<RouteComponentProps> = () => {
  const [isOpen, toggleDialog] = useDialog();

  return (
    <>
      <SoldersList toggleCreateForm={toggleDialog} />
      <Dialog isOpened={isOpen}>
        <PersonnelForm onFormClose={toggleDialog} />
      </Dialog>
    </>
  );
};
