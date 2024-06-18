"use client";

import styled from "styled-components";
import Image from "next/image";
import ingr1 from "@/public/images/materials/ingr1.png";
import ingr2 from "@/public/images/materials/ingr2.png";
import ingr3 from "@/public/images/materials/ingr3.png";
import ingr4 from "@/public/images/materials/ingr4.png";
import ingr5 from "@/public/images/materials/ingr5.png";
import ingr6 from "@/public/images/materials/ingr6.png";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useImageCountLoop } from "@/utils/imageCountLoop";

export function Food() {
  const headlineRef = useRef(null);
  const imageRef = useRef(null);

  const headlineIsInView = useInView(headlineRef, {
    once: true,
    margin: "0% 0% -30%",
  });

  const imageIsInView = useInView(imageRef, {
    once: true,
    margin: "0% 0% -60%",
  });

  const images = [ingr1, ingr2, ingr3, ingr4, ingr5, ingr6];

  const imageCount = useImageCountLoop(images, 5000);

  return (
    <FoodContainer>
      <TextSection>
        <Headline
          ref={headlineRef}
          style={{
            transform: headlineIsInView ? "none" : "translateY(-50px)",
            opacity: headlineIsInView ? 1 : 0,
            transition: "all 0.9s ease 0.2s",
          }}
        >
          Essenz
        </Headline>

        <Text>
          Unverarbeitete Zutaten müssen nichts Besonderes sein. Mit Liebe
          ausgewählt und gekonnt verarbeitet wird aus ihnen richtig gutes Essen.
        </Text>
      </TextSection>

      <ImageSection>
        <AnimatePresence mode="wait">
          <ImageContainer
            ref={imageRef}
            key={imageCount}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            style={{
              overflow: "hidden",
            }}
          >
            <StyledImage
              priority
              style={{
                transform: imageIsInView ? "scale(1)" : "scale(1.1)",
                transition: "transform 0.3 ease-out",
              }}
              src={images[imageCount]}
              alt="Esstisch im Garten im Frühling"
            />
          </ImageContainer>
        </AnimatePresence>
      </ImageSection>
    </FoodContainer>
  );
}

const FoodContainer = styled.article`
  display: flex;
  height: 90vh;
  @media only screen and (max-width: 950px) {
    flex-direction: column;
  }
`;

const ImageSection = styled.section`
  flex: 1;
  width: 50%;
  overflow: hidden;
  @media only screen and (max-width: 950px) {
    width: 100%;
    height: 50%;
  }
`;

const ImageContainer = styled(motion.div)`
  height: 100%;
`;

const StyledImage = styled(Image)`
  height: 100%;
  max-width: 100%;
  transition: all 0.9s ease-out;
  object-fit: cover;
`;

const TextSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 20vh 20px;
  @media only screen and (max-width: 950px) {
    justify-content: flex-start;
    width: 100%;
    height: 50%;
    padding: 0 20px;
  }
`;

const Headline = styled(motion.h2)`
  font-family: "Melodrama";
  font-weight: 100;
  width: fit-content;
  margin: 0 0 3vw 0;
  font-size: 7vw;
  @media only screen and (max-width: 950px) {
    font-size: 15vw;
  }
`;

const Text = styled.p`
  line-height: 40px;
  text-align: center;
  max-width: 70%;
  @media only screen and (max-width: 950px) {
    font-size: 16px;
    max-width: 100%;
    padding: 0 10px;
    line-height: 30px;
  }
`;
