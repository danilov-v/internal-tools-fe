import React from 'react';
import { Router } from '@reach/router';
import { GlobalStyle } from 'globalStyle';

import { SignIn } from 'pages/signIn/signIn';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <SignIn path="/" />
      </Router>
    </>
  );
};

export { App };
