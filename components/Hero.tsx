"use client";

import styled from "styled-components";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@/public/images/messy-table1.png";

export function Hero() {
  const { scrollY } = useScroll();

  const imageHeight = useTransform(scrollY, [0, 500], ["100dvh", "0dvh"]);

  return (
    <HeroSection>
      <Headline>
        Schlicht &
        <br />
        Ergreifend
      </Headline>

      <Headline2>Fine Dining</Headline2>

      <motion.div
        style={{
          overflow: "hidden",
          height: imageHeight,
        }}
      >
        <StyledImage
          priority
          src={heroImage}
          alt="Esstisch im Garten im Frühling"
        />
      </motion.div>
    </HeroSection>
  );
}

const HeroSection = styled.header`
  position: relative;
  overflow: hidden;
`;

const Headline = styled.h1`
  position: absolute;
  z-index: 2;
  cursor: default;
  font-size: 7vh;
  margin: 5vw;
  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    width: 80%;
    height: 80%;
    left: 10%;
    top: 10%;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 0px 35px 25px white;
  }
`;

const Headline2 = styled.h1`
  position: absolute;
  z-index: 2;
  cursor: default;
  font-size: 7vh;
  bottom: 5vw;
  right: 5vw;
  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    width: 80%;
    height: 20%;
    left: 10%;
    top: 40%;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0px 0px 30px 25px white;
  }
`;

const StyledImage = styled(Image)`
  height: 100%;
  width: 100vw;
  object-fit: cover;
  object-position: 30%;
`;
