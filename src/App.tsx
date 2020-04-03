import React from 'react';
import { Router } from '@reach/router';
import { Provider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'globalStyle';
import { getStore } from 'redux/store';

import { theme } from 'configs/theme';
import { SignIn } from 'pages/signIn/signIn';
import { Main } from 'pages/main/main';

const StyledMain = styled.main`
  min-height: 100vh;
  padding-left: 4%;
  padding-right: 4%;

  &::before {
    content: '';
    display: block;
    height: 65px;
  }
`;

const FullScreenRouter = styled(Router)`
  min-height: 100vh;
`;

const App: React.FC = () => {
  return (
    <Provider store={getStore()}>
      <ThemeProvider theme={theme}>
        <StyledMain>
          <GlobalStyle />
          <FullScreenRouter>
            <SignIn path="/sign-in" />
            <Main path="/*" />
          </FullScreenRouter>
        </StyledMain>
      </ThemeProvider>
    </Provider>
  );
};

export { App };
