import React from 'react';
import { RouteComponentProps, Router } from '@reach/router';
import { Header } from 'components/Header';
import { SoldersList } from 'components/SoldersList';
import { SoldierProfile } from 'components/SoldierProfile';

export const Main: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Header />
      <Router>
        <SoldersList path="soldiers" />
        <SoldierProfile path="soldiers/:soldierId" />
      </Router>
    </>
  );
};
