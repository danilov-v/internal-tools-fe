import React from 'react';
import { RouteComponentProps, Router } from '@reach/router';
import { Header } from 'components/Header';
import { SoldersList } from 'components/SoldersList';

export const Main: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Header />
      <Router>
        <SoldersList path="solders" />
      </Router>
    </>
  );
};
