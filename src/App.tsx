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
  padding-left: 4%;
  padding-right: 4%;
`;

const App: React.FC = () => {
  return (
    <Provider store={getStore()}>
      <ThemeProvider theme={theme}>
        <StyledMain>
          <GlobalStyle />
          <Router>
            <SignIn path="/sign-in" />
            <Main path="/*" />
          </Router>
        </StyledMain>
      </ThemeProvider>
    </Provider>
  );
};

export { App };
