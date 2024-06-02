"use client";

import styled from "styled-components";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@/public/images/hero/messy-table1.png";

export function Hero() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 1000], [0, 500]);

  return (
    <HeroSection>
      <Headline>Schlicht & Ergreifend</Headline>

      {/* <Headline2>Fine Dining</Headline2> */}

      <motion.div
        style={{
          overflow: "hidden",
          y: y,
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
  height: 100dvh;
`;

const Headline = styled.h1`
  position: absolute;
  font-family: "RobotoThin";
  z-index: 2;
  color: white;
  cursor: default;
  font-size: 8vw;
  bottom: 30px;
  right: 30px;
  /* &::before {
    content: "";
    z-index: -1;
    position: absolute;
    width: 95%;
    height: 50%;
    left: 2.5%;
    top: 25%;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 0px 35px 25px white;
  } */
`;

const Headline2 = styled.h1`
  position: absolute;
  font-family: "RobotoThin";
  z-index: 2;
  cursor: default;
  font-size: 7vw;
  color: white;
  bottom: 30px;
  right: 30px;
  /* &::before {
    content: "";
    z-index: -1;
    position: absolute;
    width: 90%;
    height: 20%;
    left: 5%;
    top: 40%;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0px 0px 30px 25px white;
  } */
`;

const StyledImage = styled(Image)`
  height: calc(100dvh + 50px);
  width: 100vw;
  object-fit: cover;
  object-position: center;
`;
