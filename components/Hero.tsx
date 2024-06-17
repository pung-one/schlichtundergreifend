"use client";

import styled from "styled-components";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import logoUp from "@/public/logo/logo.png";
import logoDown from "@/public/logo/logo_white.png";
import heroImage from "@/public/images/hero/messy-table1.png";

export function Hero() {
  const { scrollY } = useScroll();

  const blackLogoPosition = useTransform(scrollY, [0, 125], ["55%", "0%"]);
  const blackLogoLeft = useTransform(
    scrollY,
    [0, 250, 350],
    ["50%", "50%", "0%"]
  );
  const blackLogoX = useTransform(
    scrollY,
    [0, 250, 350],
    ["-50%", "-50%", "0%"]
  );
  const blackLogoSize = useTransform(
    scrollY,
    [0, 250, 450],
    ["20vh", "20vh", "10vh"]
  );

  const imagePosition = useTransform(scrollY, [0, 350], [0, 350]);

  const borderWidth = useTransform(scrollY, [250, 450], ["0%", "100%"]);

  return (
    <>
      <LogoSection style={{ height: blackLogoSize }}>
        <BlackLogoContainer
          style={{ y: blackLogoPosition, left: blackLogoLeft, x: blackLogoX }}
          initial={{ y: "100%" }}
          animate={{ y: "55%" }}
          transition={{ delay: 0.5, duration: 1, ease: "circOut" }}
        >
          <BlackLogo src={logoUp} alt="Schlicht und Ergreifend Logo" />
        </BlackLogoContainer>

        <BorderBottom style={{ width: borderWidth }} />
      </LogoSection>

      <ImageContainer>
        <WhiteLogo
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
  background: white;
`;

const BlackLogoContainer = styled(motion.div)`
  position: absolute;
  height: 100%;
  width: fit-content;
`;

const BlackLogo = styled(Image)`
  height: 100%;
  width: fit-content;
  padding: 10px;
  object-fit: contain;
  object-position: center;
`;

const BorderBottom = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 1px;
  background: black;
`;

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

const StyledImage = styled(motion(Image))`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
