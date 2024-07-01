import { motion } from "framer-motion";
import styled from "styled-components";

import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

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
  width: 100%;
  height: 15dvh;
  background: none;
`;

const MenuButton = styled(motion.button)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
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
  }
  transition: transform 0.2s ease;
`;
