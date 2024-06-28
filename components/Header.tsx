import { motion, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
import logoUp from "@/public/logo/logo.png";

import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { useContext, useEffect, useState } from "react";

export function Header({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (prev: boolean) => void;
}) {
  return (
    <Container>
      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <TfiClose /> : <CiMenuBurger />}
      </MenuButton>
    </Container>
  );
}

const Container = styled(motion.header)`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 20dvh;
  background: none;
`;

const MenuButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6vh;
  width: 6vh;
  margin: 20px;
  background: none;
  border: none;
  border-radius: 3px;
  cursor: ${({ disabled }) => !disabled && "pointer"};
  * {
    font-size: 4vh;
  }
  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(0 0 15px grey);
    * {
    }
  }
  transition: transform 0.2s ease;
`;
