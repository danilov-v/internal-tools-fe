import React from 'react';
import { Router } from '@reach/router';

import { SignIn } from 'pages/signIn/signIn';
import { Header } from 'components/Header';

const App: React.FC = () => {
  return (
    <>
      <Header test="5" />
      <Router>
        <SignIn path="/" />
      </Router>
    </>
  );
};

export { App };
