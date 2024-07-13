"use client";

import { signIn } from "next-auth/react";
import styled from "styled-components";
import { PageContainer } from "../PageContainer";
import about1 from "@/public/images/about/about1.png";

export function Login() {
  return (
    <PageContainer
      headline="editor"
      backgroundImage={about1}
      altText="A black and white photograph capturing a dimly lit, intimate table setting. The table is adorned with several glasses, bottles, and a lit candle, creating a cozy ambiance. In the background, a foggy window displays drawings of hearts and abstract shapes, possibly made by someone using their finger. Small dots of light are visible through the window, adding to the warm and inviting atmosphere. The foreground features a cloth with a simple, elegant pattern. The overall scene evokes a sense of romance and quiet celebration."
    >
      <LoginButton onClick={() => signIn()}>Login</LoginButton>;
    </PageContainer>
  );
}

const LoginButton = styled.button`
  border-radius: none;
  background: none;
  border: thin solid black;
  padding: 20px;
  font-size: 20px;
  transition: box-shadow 0.2s;
  margin: 0 auto;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 5px grey;
  }
`;
