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
