import React from 'react';
import { Router } from '@reach/router';
import { Provider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';

import { theme } from 'configs/theme';
import { Main } from 'pages/main/main';
import { getStore } from 'redux/store';
import { GlobalStyle } from './globalStyle';

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
            <Main path="/*" />
          </Router>
        </StyledMain>
      </ThemeProvider>
    </Provider>
  );
};

export { App };
