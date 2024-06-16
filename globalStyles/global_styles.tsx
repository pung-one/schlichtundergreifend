"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'RobotoThin';
  src: url('/fonts/Roboto-Thin.ttf') format('truetype');
  font-style: light;
  font-display: fallback;
}

@font-face {
  font-family: 'Cambo';
  src: url('/fonts/Cambo-Regular.ttf') format('truetype');
  font-style: normal;
  font-display: fallback;
}

/**
* This is a variable font
* You can control variable axes as shown below:
* font-variation-settings: wght 700.0;
*
* available axes:
'wght' (range from 200.0 to 700.0
*/
@font-face {
  font-family: 'Abordage';
  src: url('/fonts/Abordage-Regular.woff2') format('woff2'),
       url('/fonts/Abordage-Regular.woff') format('woff');
  font-display: swap;
  font-style: normal;
}

@font-face {
  font-family: 'Lineal-Variable';
  src: url('/fonts/LinealVF.woff2') format('woff2'),
       url('/fonts/LinealVF.woff') format('woff'),
       url('/fonts/LinealVF.ttf') format('truetype');
  font-weight: 200 700;
  font-display: swap;
  font-style: normal;
}

*,
  *::before,
  *::after {
    box-sizing: border-box;
    font-size: 20px;
    margin: 0;
    padding: 0;
    font-family: 'Cambo', 'Times New Roman', Times, serif;
    scroll-behavior: smooth;
    overscroll-behavior-block: none;
    overflow-anchor: none;
  }

  button {
    color: black
  }
`;
