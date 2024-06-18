"use client";
import styled from "styled-components";
import Link from "next/link";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { Menu } from "./Menu";
import { Header } from "./Header";

export const MenuContext = createContext<{
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}>({
  menuOpen: false,
  setMenuOpen: () => {},
});

export function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "initial";
  }, [menuOpen]);

  return (
    <PageContainer>
      <MenuContext.Provider
        value={{ menuOpen: menuOpen, setMenuOpen: setMenuOpen }}
      >
        <Header />

        <Menu />

        <Content $menuOpen={menuOpen}>{children}</Content>
      </MenuContext.Provider>
      <Footer>
        <StyledLink href={"/"}>Impressum</StyledLink>
        <StyledLink href={"/"}>Instagram</StyledLink>
      </Footer>
    </PageContainer>
  );
}

const PageContainer = styled.main`
  position: relative;
`;

const Content = styled.article<{ $menuOpen: boolean }>`
  margin: 0 auto 50px;
  filter: ${({ $menuOpen }) =>
    $menuOpen ? "blur(15px) drop-shadow(0 0 10px black)" : "none"};
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 20px;
  border-top: 1px solid black;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: underline;
  font-size: 20px;
`;
