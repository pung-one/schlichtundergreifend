"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  headline: string;
  backgroundImage: StaticImageData;
};

export function PageContainer({ children, headline, backgroundImage }: Props) {
  return (
    <Container>
      <Headline
        initial={{ y: "0vh", opacity: 0 }}
        animate={{ y: "-6vh", opacity: 1 }}
        transition={{
          delay: 0.3,

          y: { duration: 0.5 },
          opacity: { duration: 0.3 },
        }}
      >
        {headline}
      </Headline>

      <WhiteHeadlineContainer>
        <Headline
          $white
          initial={{ y: "-12vh", opacity: 0 }}
          animate={{ y: "-6vh", opacity: 1 }}
          transition={{
            delay: 0.3,

            y: { duration: 0.5 },
            opacity: { duration: 0.3 },
          }}
        >
          {headline}
        </Headline>
      </WhiteHeadlineContainer>

      <StyledImage
        priority
        src={backgroundImage}
        alt="Esstisch im Garten im Frühling"
      />

      {children}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 80dvh;
`;

const WhiteHeadlineContainer = styled.div`
  position: absolute;
  overflow: hidden;
  height: 12vh;
  width: 100%;
`;

const Headline = styled(motion.h1)<{ $white?: boolean }>`
  z-index: ${({ $white }) => ($white ? "3" : "-1")};
  position: absolute;
  font-family: "Melodrama";
  font-size: 12vh;
  line-height: 12vh;
  color: ${({ $white }) => ($white ? "white" : "black")};
  width: 100%;
  text-align: center;
`;

const StyledImage = styled(Image)`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(55%);
`;
