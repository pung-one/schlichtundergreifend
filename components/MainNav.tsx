import { motion } from "framer-motion";
import styled from "styled-components";
import Link from "next/link";

export function MainNav() {
  return (
    <MainNavigation
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <StyledLink
        href={"/catering"}
        transition={{ duration: 0.8, repeat: Infinity }}
      >
        catering
      </StyledLink>

      <StyledLink href={"/popup"} $isMiddle>
        popup
      </StyledLink>

      <StyledLink href={"/about"}>zu uns</StyledLink>
    </MainNavigation>
  );
}

const MainNavigation = styled(motion.nav)`
  z-index: 2;
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
`;

const StyledLink = styled(motion(Link))<{ $isMiddle?: boolean }>`
  flex: 1;
  font-family: "Melodrama";
  font-size: 6vh;
  color: white;
  text-align: center;
  text-decoration: none;
  background: none;
  height: 10vh;
  border-top: 1px solid white;
  border-left: ${({ $isMiddle }) => ($isMiddle ? "1px solid white" : "none")};
  border-right: ${({ $isMiddle }) => ($isMiddle ? "1px solid white" : "none")};
  &:hover {
    font-weight: 700;
  }
  transition: font-weight 0.3s ease;
`;
