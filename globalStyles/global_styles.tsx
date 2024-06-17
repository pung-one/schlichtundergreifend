"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Melodrama';
  src: url('/fonts/Melodrama-Variable.woff2') format('woff2'),
       url('/fonts/Melodrama-Variable.woff') format('woff'),
       url('/fonts/Melodrama-Variable.ttf') format('truetype');
  font-weight: 300 700;
  font-display: swap;
  font-style: normal;
}

@font-face {
  font-family: 'Nunito';
  src: url('/fonts/Nunito-Variable.woff2') format('woff2'),
       url('/fonts/Nunito-Variable.woff') format('woff'),
       url('/fonts/Nunito-Variable.ttf') format('truetype');
  font-weight: 200 1000;
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
    font-family: 'Nunito', 'sans', Times, serif;
    scroll-behavior: smooth;
    overscroll-behavior-block: none;
    overflow-anchor: none;
  }

  button {
    color: black
  }
`;
