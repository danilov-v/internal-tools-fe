import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* stylelint-disable value-keyword-case */
  ${normalize}
  /* stylelint-enable value-keyword-case */

  html,
  body {
    background: linear-gradient(90deg, #44494b 0%, #4c5153 25%, #4c5153 100%);
    font-family: 'Muller', sans-serif;
  }

  button,
  input,
  select,
  textarea {
    font-family: 'Muller', sans-serif;
  }

  /* FIXME: Remove this global overwrites https://youtrack.rit:8082/issue/IT-51 */
  h1, h2, h3, h4, h5, h6, p, button, a, ol, ul {
    margin: 0;
  }
`;
