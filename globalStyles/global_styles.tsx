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
  font-family: 'Averia Sans';
  src: url('/fonts/AveriaSans-Regular.ttf') format('truetype');
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
    font-family: 'Averia Sans', 'sans', Times, serif;
    scroll-behavior: smooth;
    overscroll-behavior-block: none;
    overflow-anchor: none;
  }

  button {
    color: black
  }
`;
