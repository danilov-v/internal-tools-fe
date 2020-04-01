import React from 'react';
import { RouteComponentProps, Router } from '@reach/router';

import { Header } from 'components/Header';
import { SoldersList } from 'components/SoldersList';
import { PersonnelDetails } from 'pages/personnelDetails/personnelDetails';

const Main: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Header />
      <Router>
        <SoldersList path="personnel" />
        <PersonnelDetails path="personnel-details/:id" />
      </Router>
    </>
  );
};

export { Main };
