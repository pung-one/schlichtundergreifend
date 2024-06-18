import { useContext } from "react";
import styled from "styled-components";
import { MenuContext } from "./Layout";
import Link from "next/link";

export function Menu() {
  const { menuOpen, setMenuOpen } = useContext(MenuContext);

  return (
    <MenuContainer $menuOpen={menuOpen}>
      <Nav>
        <NavElement onClick={() => setMenuOpen(false)} href={"#food"}>
          Essenz
        </NavElement>

        <NavElement onClick={() => setMenuOpen(false)} href={"#together"}>
          Zusammen
        </NavElement>

        <NavElement onClick={() => setMenuOpen(false)} href={"#next-dates"}>
          Next Dates
        </NavElement>

        <NavElement onClick={() => setMenuOpen(false)} href={"/"}>
          About
        </NavElement>
      </Nav>
    </MenuContainer>
  );
}

const MenuContainer = styled.div<{ $menuOpen: boolean }>`
  z-index: 3;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10vh;
  transform: ${({ $menuOpen }) => ($menuOpen ? "scale(1)" : "scale(0)")};
`;

const Nav = styled.nav`
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px;
  background: white;
  box-shadow: 0 0 25px 35px white;
`;

const NavElement = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 20px;
`;
