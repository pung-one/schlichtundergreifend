"use client";

import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";
import heroImage from "@/public/images/hero/messy-table1.png";
import Link from "next/link";

export function Landing() {
  return (
    <LandingContainer>
      <ImageContainer>
        <Headline
          style={{ x: "-50%" }}
          initial={{ y: "0vh", opacity: 0 }}
          animate={{ y: "-8vh", opacity: 1 }}
          transition={{
            delay: 0.3,
            ease: "circOut",
            y: { duration: 0.5 },
            opacity: { duration: 0.3 },
          }}
        >
          schlicht +
          <br />
          ergreifend
          <br />
          dining
        </Headline>

        <WhiteHeadlineContainer>
          <Headline
            $white
            style={{ x: "-50%" }}
            initial={{ y: "-24vh", opacity: 0 }}
            animate={{ y: "-8vh", opacity: 1 }}
            transition={{
              delay: 0.3,
              ease: "circOut",
              y: { duration: 0.5 },
              opacity: { duration: 0.3 },
            }}
          >
            schlicht +
            <br />
            ergreifend
            <br />
            dining
          </Headline>
        </WhiteHeadlineContainer>

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

        <StyledImage priority src={heroImage} alt="" />
      </ImageContainer>
    </LandingContainer>
  );
}

const LandingContainer = styled.div`
  position: relative;
  height: 80dvh;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80dvh;
`;

const WhiteHeadlineContainer = styled.div`
  position: absolute;
  overflow: hidden;
  height: 24vh;
  width: 100%;
`;

const Headline = styled(motion.h1)<{ $white?: boolean }>`
  z-index: ${({ $white }) => ($white ? "3" : "-1")};
  position: absolute;
  font-family: "Melodrama";
  font-size: 8vh;
  line-height: 8vh;
  color: ${({ $white }) => ($white ? "white" : "black")};
  left: 50%;
`;

const StyledImage = styled(Image)`
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(70%);
`;

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
