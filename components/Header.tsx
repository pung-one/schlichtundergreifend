import { motion } from "framer-motion";
import styled from "styled-components";

import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (prev: boolean) => void;
}) {
  const path = usePathname();

  return (
    <Container>
      {path != "/" && (
        <HomeButton
          href={"/"}
          onClick={() => setMenuOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          schlicht+
          <br />
          ergreifend
        </HomeButton>
      )}

      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <TfiClose /> : <CiMenuBurger />}
      </MenuButton>
    </Container>
  );
}

const Container = styled.header`
  position: relative;
  width: 100%;
  height: 20dvh;
  background: none;
`;

const HomeButton = styled(motion(Link))`
  position: absolute;
  left: 0;
  font-family: "Melodrama";
  font-weight: 700;
  font-size: 2.5vh;
  margin: 20px;
  color: black;
  text-decoration: none;
`;

const MenuButton = styled.button`
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
  cursor: ${({ disabled }) => !disabled && "pointer"};
  * {
    font-size: 4vh;
  }
  &:hover {
    transform: scale(1.1);
  }
  transition: transform 0.2s ease;
`;
