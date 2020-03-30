import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* stylelint-disable value-keyword-case */
  ${normalize}
  /* stylelint-enable value-keyword-case */

  html {
    width: 100%;
    min-height: 100vh;
  }

  body {
    font-family: Muller, sans-serif;
    background: #44494b;
    background: linear-gradient(90deg, #44494b 0%, #4c5153 25%, #4c5153 100%);
    width: 100%;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6, p, button, a, ol, ul {
    margin: 0;
  }
`;
