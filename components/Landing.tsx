"use client";

import styled from "styled-components";
import Image from "next/image";
import { animate, motion, transform } from "framer-motion";
import logoDown from "@/public/logo/logo_white.png";
import heroImage from "@/public/images/hero/messy-table1.png";
import Link from "next/link";
import { Header } from "./Header";

export function Landing() {
  return (
    <LandingContainer>
      <Header />

      <ImageContainer>
        <WhiteLogo
          initial={{ y: "-100%" }}
          animate={{ y: "-50%" }}
          transition={{ delay: 0.5, duration: 1, ease: "circOut" }}
          src={logoDown}
          alt="Schlicht und Ergreifend Logo"
        />

        <StyledImage
          priority
          src={heroImage}
          alt="Esstisch im Garten im Frühling"
        />
      </ImageContainer>

      <MainNavigation>
        <StyledLink
          href={"/catering"}
          whileHover={{
            transform: ["scale(1)", "scale(1.06)", "scale(1)"],
          }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          Catering
        </StyledLink>

        <StyledLink href={"/catering"} $isMiddle>
          Popup
        </StyledLink>

        <StyledLink href={"/catering"}>Zu uns</StyledLink>
      </MainNavigation>
    </LandingContainer>
  );
}

const LandingContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const WhiteLogo = styled(motion(Image))`
  z-index: 3;
  position: absolute;
  height: 20vh;
  width: 100%;
  padding: 10px;
  object-fit: contain;
  object-position: center;
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  flex: 1;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
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
  padding: 50px;
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
