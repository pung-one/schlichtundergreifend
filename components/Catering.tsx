"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
import gardenTable from "@/public/images/catering/gardentable.png";

export function Catering() {
  return (
    <Container>
      <ImageContainer>
        <Headline
          initial={{ y: "0rem" }}
          animate={{ y: "-3rem" }}
          transition={{ delay: 0.5, duration: 1, ease: "circOut" }}
        >
          catering
        </Headline>

        <WhiteHeadlineContainer>
          <Headline
            $white
            initial={{ y: "-6rem" }}
            animate={{ y: "-3rem" }}
            transition={{ delay: 0.5, duration: 1, ease: "circOut" }}
          >
            catering
          </Headline>
        </WhiteHeadlineContainer>

        <StyledImage
          priority
          src={gardenTable}
          alt="Esstisch im Garten im Frühling"
        />
      </ImageContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 80dvh;
  display: flex;
  flex-direction: column;
`;

const WhiteHeadlineContainer = styled.div`
  position: absolute;
  overflow: hidden;
  height: 6rem;
  width: 100%;
`;

const Headline = styled(motion.h1)<{ $white?: boolean }>`
  z-index: ${({ $white }) => ($white ? "3" : "-1")};
  position: absolute;
  font-family: "Melodrama";
  font-size: 6rem;
  line-height: 6rem;
  color: ${({ $white }) => ($white ? "white" : "black")};
  width: 100%;
  text-align: center;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
`;

const StyledImage = styled(Image)`
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(70%);
`;
