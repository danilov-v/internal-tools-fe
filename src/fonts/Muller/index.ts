import { createGlobalStyle } from 'styled-components';
import MullerRegular from './MullerRegular.ttf';
import MullerUltraLight from './MullerUltraLight.ttf';
import MullerBoldItalic from './MullerBoldItalic.ttf';
import MullerMedium from './MullerMedium.ttf';
import MullerExtraBoldItalic from './MullerExtraBoldItalic.ttf';
import MullerUltraLightItalic from './MullerUltraLightItalic.ttf';
import MullerBlackItalic from './MullerBlackItalic.ttf';
import MullerHairlineItalic from './MullerHairlineItalic.ttf';
import MullerHeavyItalic from './MullerHeavyItalic.ttf';
import MullerThinItalic from './MullerThinItalic.ttf';
import MullerHairline from './MullerHairline.ttf';
import MullerHeavy from './MullerHeavy.ttf';
import MullerThin from './MullerThin.ttf';
import MullerLightItalic from './MullerLightItalic.ttf';
import MullerLight from './MullerLight.ttf';
import MullerBlack from './MullerBlack.ttf';
import MullerBold from './MullerBold.ttf';
import MullerExtraBold from './MullerExtraBold.ttf';
import MullerRegularItalic from './MullerRegularItalic.ttf';
import MullerMediumItalic from './MullerMediumItalic.ttf';

export const MullerFont = createGlobalStyle`
  @font-face {
    font-family: 'Muller';
    src: url(${MullerUltraLight}) format('truetype');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Muller';
    src: url(${MullerBoldItalic}) format('truetype');
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: 'Muller';
    src: url(${MullerMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Muller';
    src: url(${MullerExtraBoldItalic}) format('truetype');
    font-weight: 800;
    font-style: italic;
  }

  @font-face {
    font-family: 'Muller';
    src: url(${MullerUltraLightItalic}) format('truetype');
    font-weight: 200;
    font-style: italic;
  }

  @font-face {
    font-family: 'Muller';
    src: url(${MullerRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Muller';
    src: url(${MullerBlackItalic}) format('truetype');
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: 'Muller Hairline';
    src: url(${MullerHairlineItalic}) format('truetype');
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: 'Muller';
    src: url(${MullerHeavyItalic}) format('truetype');
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: 'Muller';
    src: url(${MullerThinItalic}) format('truetype');
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: 'Muller Hairline';
    src: url(${MullerHairline}) format('truetype');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Muller';
    src: url(${MullerHeavy}) format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Muller';
    src: url(${MullerThin}) format('truetype');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Muller';
    src: url(${MullerLightItalic}) format('truetype');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'Muller';
    src: url(${MullerLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Muller';
    src: url(${MullerBlack}) format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Muller';
    src: url(${MullerBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Muller';
    src: url(${MullerExtraBold}) format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Muller Regular';
    src: url(${MullerRegularItalic}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Muller';
    src: url(${MullerMediumItalic}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }
`;
