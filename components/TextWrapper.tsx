"use client";

import { ReactNode } from "react";
import styled from "styled-components";

export function TextWrapper({ children }: { children: ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.p`
  position: relative;
  color: white;
  max-width: 600px;
  line-height: 1.5rem;
  a {
    color: white;
  }
  ul {
    list-style: none;
  }

  &:before {
    content: "";
    position: absolute;
    top: 5%;
    height: 90%;
    width: 1px;
    margin-left: -30px;
    background: white;
  }

  /* &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 10%;
    height: 80%;
    width: 1px;
    margin-right: -30px;
    background: white;
  } */

  @media only screen and (max-width: 900px) {
    padding: 0 15px;
    width: 100%;
    &:before {
      display: none;
    }
  }
`;
