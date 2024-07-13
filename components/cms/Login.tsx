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
      <SectionContainer>
        <LoginButton onClick={() => signIn()}>Login</LoginButton>
      </SectionContainer>
    </PageContainer>
  );
}

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 30px;
  padding: 20px;
  border: thin solid black;
  background: white;
  z-index: 2;
`;

const LoginButton = styled.button`
  border-radius: 3px;
  background: none;
  border: thin solid black;
  padding: 10px;
  transition: box-shadow 0.2s;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 5px grey;
  }
`;
