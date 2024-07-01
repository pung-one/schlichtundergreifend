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
          initial={{ y: "0vh", opacity: 0 }}
          animate={{ y: "-6vh", opacity: 1 }}
          transition={{
            delay: 0.3,

            y: { duration: 0.5 },
            opacity: { duration: 0.3 },
          }}
        >
          catering
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
            catering
          </Headline>
        </WhiteHeadlineContainer>

        <Text
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Anfragen per Email:
          <br />
          <a href="mailto:schlicht@ergreifend.de">schlicht@ergreifend.de</a>
        </Text>

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
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
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

const Text = styled(motion.p)`
  z-index: 3;
  position: absolute;
  margin-top: 30vh;
  width: 100%;
  text-align: center;
  color: white;
  a {
    color: white;
  }
`;

const StyledImage = styled(Image)`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(60%);
`;
