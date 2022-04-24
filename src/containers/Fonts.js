import {createGlobalStyle} from 'styled-components';
import MontserratBoldTtf from 'assets/fonts/Montserrat-Bold.ttf';
import MontserratRegularTtf from 'assets/fonts/Montserrat-Regular.ttf';

export const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat Bold';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url(${MontserratBoldTtf}) format('truetype');
  }
  @font-face {
    font-family: 'Montserrat Regular';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${MontserratRegularTtf}) format('truetype');
  }
`;
