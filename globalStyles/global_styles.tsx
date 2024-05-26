"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*,
  *::before,
  *::after {
    box-sizing: border-box;
    text-decoration: none;
    font-size: 20px;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    scroll-behavior: smooth;
    overscroll-behavior-block: none;
  }

  button {
    color: black
  }

  h1 {
    color: #4a489c;
    margin: 0 auto;
  }
`;
