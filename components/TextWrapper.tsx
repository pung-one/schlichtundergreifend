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
  margin: 0 auto;
  line-height: 1.5rem;
  a {
    color: white;
  }
  ul {
    list-style: none;
  }

  @media only screen and (max-width: 900px) {
    padding: 0 15px;
    width: 100%;
  }
`;
