"use client";

import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";
import heroImage from "@/public/images/hero/messy-table1.png";
import { MainNav } from "./MainNav";

export function Landing({ blurUrl }: { blurUrl: string }) {
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

        <StyledImage
          src={heroImage}
          alt=""
          placeholder="blur"
          blurDataURL={blurUrl}
        />

        <MainNav />
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
  height: 100%;
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
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(70%);
`;
