import React from 'react';
import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import { MullerFont } from 'fonts/Muller';

const GlobalStyles = createGlobalStyle`
  /* stylelint-disable value-keyword-case */
  ${normalize}
  /* stylelint-enable value-keyword-case */

  body {
    font-family: Muller, sans-serif;
  }
`;

export const GlobalStyle: React.FC<{}> = () => {
  return (
    <>
      <MullerFont />
      <GlobalStyles />
    </>
  );
};
