import React from 'react';
import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import MullerFont from 'fonts/Muller';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  body {
    font-family: 'Muller';
  }
`;

export const GlobalStyle = () => {
  return (
    <>
      <MullerFont />
      <GlobalStyles />
    </>
  ); 
}