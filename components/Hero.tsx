"use client";

import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";
import logoDown from "@/public/logo/logo_white.png";
import heroImage from "@/public/images/hero/messy-table1.png";

export function Hero() {
  return (
    <>
      <ImageContainer>
        <WhiteLogo
          initial={{ y: "-100%" }}
          animate={{ y: "-45%" }}
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
    </>
  );
}

const WhiteLogo = styled(motion(Image))`
  z-index: 2;
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
  height: 120vh;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
