import { useContext } from "react";
import styled from "styled-components";
import Link from "next/link";

export function Menu({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (prev: boolean) => void;
}) {
  return (
    <MenuContainer $menuOpen={menuOpen}>
      <Nav>
        <NavElement onClick={() => setMenuOpen(false)} href={"/"}>
          home
        </NavElement>

        <NavElement onClick={() => setMenuOpen(false)} href={"/catering"}>
          catering
        </NavElement>

        <NavElement onClick={() => setMenuOpen(false)} href={"/popup"}>
          popup
        </NavElement>

        <NavElement onClick={() => setMenuOpen(false)} href={"/about"}>
          über uns
        </NavElement>

        <NavElement
          onClick={() => setMenuOpen(false)}
          href={"https://www.instagram.com/schlicht_ergreifend_dining/"}
          target="_blank"
        >
          instagram
        </NavElement>
      </Nav>
    </MenuContainer>
  );
}

const MenuContainer = styled.div<{ $menuOpen: boolean }>`
  z-index: 3;
  position: fixed;
  width: 100%;
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
`;

const NavElement = styled(Link)`
  font-family: "Melodrama";
  font-weight: 450;
  color: white;
  text-decoration: none;
  &:hover {
    font-weight: 600;
  }
  transition: font-weight 0.3s ease;
`;
