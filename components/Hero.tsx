"use client";

import styled from "styled-components";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import logoUp from "@/public/logo/logo.png";
import logoDown from "@/public/logo/logo_white.png";
import heroImage from "@/public/images/hero/messy-table1.png";
import { useRef } from "react";

export function Hero() {
  const { scrollY } = useScroll();

  const blackLogoPosition = useTransform(scrollY, [0, 250], ["55%", "0%"]);
  const blackLogoSize = useTransform(
    scrollY,
    [0, 250, 350],
    ["20vh", "20vh", "10vh"]
  );

  const whiteLogoPosition = useTransform(scrollY, [0, 250], ["-45%", "-100%"]);

  const imagePosition = useTransform(scrollY, [0, 250], [0, 250]);

  return (
    <>
      <LogoSection style={{ height: blackLogoSize }}>
        <BlackLogo
          style={{ y: blackLogoPosition }}
          initial={{ y: "100%" }}
          animate={{ y: "55%" }}
          transition={{ delay: 0.5, duration: 1, ease: "circOut" }}
          src={logoUp}
          alt="Schlicht und Ergreifend Logo"
        />
      </LogoSection>

      <ImageContainer>
        <WhiteLogo
          style={{ y: whiteLogoPosition }}
          initial={{ y: "-100%" }}
          animate={{ y: "-45%" }}
          transition={{ delay: 0.5, duration: 1, ease: "circOut" }}
          src={logoDown}
          alt="Schlicht und Ergreifend Logo"
        />

        <StyledImage
          style={{ y: imagePosition }}
          priority
          src={heroImage}
          alt="Esstisch im Garten im Frühling"
        />
      </ImageContainer>
    </>
  );
}

const LogoSection = styled(motion.header)`
  z-index: 3;
  position: sticky;
  top: 0;
  overflow: hidden;
  width: 100%;
`;

const BlackLogo = styled(motion(Image))`
  height: 100%;
  width: 100%;
  padding: 0 10px;
  object-fit: fill;
  object-position: center;
`;

const WhiteLogo = styled(motion(Image))`
  z-index: 2;
  position: absolute;
  height: 20vh;
  width: 100%;
  padding: 0 10px;
  object-fit: fill;
  object-position: center;
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const StyledImage = styled(motion(Image))`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
