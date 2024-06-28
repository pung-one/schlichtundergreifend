"use client";

import styled from "styled-components";
import Image from "next/image";
import { animate, motion, transform } from "framer-motion";
import logoDown from "@/public/logo/logo_white.png";
import heroImage from "@/public/images/hero/messy-table1.png";
import Link from "next/link";

export function Landing() {
  return (
    <LandingContainer>
      <ImageContainer>
        <Headline
          initial={{ y: "0rem" }}
          animate={{ y: "-4rem" }}
          transition={{ delay: 0.5, duration: 1, ease: "circOut" }}
        >
          schlicht +
        </Headline>

        <Headline
          $white
          initial={{ y: "-8rem" }}
          animate={{ y: "0rem" }}
          transition={{ delay: 0.5, duration: 1, ease: "circOut" }}
        >
          ergreifend
          <br />
          dining
        </Headline>

        <StyledImage priority src={heroImage} alt="" />
      </ImageContainer>

      <MainNavigation>
        <StyledLink
          href={"/catering"}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          Catering
        </StyledLink>

        <StyledLink href={"/popup"} $isMiddle>
          Popup
        </StyledLink>

        <StyledLink href={"/about"}>Zu uns</StyledLink>
      </MainNavigation>
    </LandingContainer>
  );
}

const LandingContainer = styled.div`
  position: relative;
  max-height: 80dvh;
`;

const Headline = styled(motion.h1)<{ $white?: boolean }>`
  z-index: ${({ $white }) => ($white ? "3" : "-1")};
  position: absolute;
  font-family: "Melodrama";
  font-size: 4rem;
  line-height: 4rem;
  color: ${({ $white }) => ($white ? "white" : "black")};
  width: 100%;
  text-align: center;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-height: 100%;
`;

const StyledImage = styled(Image)`
  z-index: 2;
  width: 100%;
  height: 80dvh;
  object-fit: cover;
  object-position: center;
  filter: brightness(70%);
`;

const MainNavigation = styled.nav`
  z-index: 2;
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
`;

const StyledLink = styled(motion(Link))<{ $isMiddle?: boolean }>`
  flex: 1;
  padding: 3 0px;
  font-family: "Melodrama";
  font-size: 50px;
  color: white;
  text-align: center;
  text-decoration: none;
  background: none;
  border-top: 1px solid white;
  border-left: ${({ $isMiddle }) => ($isMiddle ? "1px solid white" : "none")};
  border-right: ${({ $isMiddle }) => ($isMiddle ? "1px solid white" : "none")};
`;
