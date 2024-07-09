import styled from "styled-components";
import Link from "next/link";

export function MainNav() {
  return (
    <MainNavigation>
      <StyledLink href={"/catering"}>catering</StyledLink>

      <StyledLink href={"/popup"} $isMiddle>
        popup
      </StyledLink>

      <StyledLink href={"/about"}>zu uns</StyledLink>
    </MainNavigation>
  );
}

const MainNavigation = styled.nav`
  z-index: 2;
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const StyledLink = styled(Link)<{ $isMiddle?: boolean }>`
  flex: 1;
  font-family: "Melodrama";
  font-size: 6vh;
  color: white;
  text-align: center;
  text-decoration: none;
  background: none;
  padding: 3vh 0;
  border-top: 1px solid white;
  border-left: ${({ $isMiddle }) => ($isMiddle ? "1px solid white" : "none")};
  border-right: ${({ $isMiddle }) => ($isMiddle ? "1px solid white" : "none")};
  &:hover {
    font-weight: 700;
  }
  transition: font-weight 0.3s ease;
  @media only screen and (max-width: 1024px) {
    border-left: none;
    border-right: none;
  }
`;
