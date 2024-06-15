"use client";
import styled from "styled-components";
import Link from "next/link";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageContainer>
      <Header>
        <Headline>Schlicht & Ergreifend</Headline>
      </Header>

      <Content>{children}</Content>

      <Footer>
        <Link href={"/"}>Impressum</Link>
        <Link href={"/"}>Instagram</Link>
      </Footer>
    </PageContainer>
  );
}

const PageContainer = styled.main``;

const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 70px;
  background: white;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 1px;
    background: black;
  }
`;

const Content = styled.article`
  max-width: 1200px;
  margin: 50px auto;
`;

const Headline = styled.h1`
  font-family: "RobotoThin";
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
`;
