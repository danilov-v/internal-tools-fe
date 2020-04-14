/// <reference types="react-scripts" />

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    darkGray: string;
    error: string;
    lightGray: string;
    lightGreen: string;
    lightYellow: string;
    overlayBackground: string;
    primaryGray: string;
    primaryGreen: string;
    primaryRed: string;
    primaryWhite: string;
    primaryYellow: string;
    secondaryGreen: string;
    transparent: string;
    white: string;
  }
}
