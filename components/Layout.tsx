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

export function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  /* useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
    }
  }, []); */

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "initial";
  }, [menuOpen]);

  return (
    <MainContainer>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <BlurWrapper $menuOpen={menuOpen}>{children}</BlurWrapper>
    </MainContainer>
  );
}

const MainContainer = styled.main`
  position: relative;
`;

const BlurWrapper = styled.article<{ $menuOpen: boolean }>`
  filter: ${({ $menuOpen }) =>
    $menuOpen ? "blur(15px) drop-shadow(0 0 10px black)" : "none"};
`;
