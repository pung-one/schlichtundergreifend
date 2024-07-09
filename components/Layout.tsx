"use client";

import styled from "styled-components";
import { useEffect, useState } from "react";
import { Menu } from "./Menu";
import { Header } from "./Header";

export function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

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
  filter: ${({ $menuOpen }) => ($menuOpen ? "blur(15px)" : "none")};
`;
