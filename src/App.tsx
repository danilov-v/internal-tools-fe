import React from 'react';
import { Router } from '@reach/router';
import styled from 'styled-components';
import { GlobalStyle } from 'globalStyle';

import { SignIn } from 'pages/signIn/signIn';
import { Main } from 'pages/main/main';

const StyledMain = styled.main`
  min-height: 100vh;
`;
const FullScreenRouter = styled(Router)`
  min-height: 100vh;
`;

const App: React.FC = () => {
  return (
    <StyledMain>
      <GlobalStyle />
      <FullScreenRouter>
        <SignIn path="/" />
        <Main path="/main" />
      </FullScreenRouter>
    </StyledMain>
  );
};

export { App };
