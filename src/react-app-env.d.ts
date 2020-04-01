/// <reference types="react-scripts" />

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    error: string;
    lightGray: string;
    lightGreen: string;
    lightYellow: string;
    primaryGray: string;
    primaryGreen: string;
    primaryRed: string;
    primaryWhite: string;
    primaryYellow: string;
    transparent: string;
  }
}
