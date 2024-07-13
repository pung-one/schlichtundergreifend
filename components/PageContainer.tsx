"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";

type Props = {
  children: ReactNode;
  headline: string;
  backgroundImage?: StaticImageData;
  altText?: string;
};

export function PageContainer({
  children,
  headline,
  backgroundImage,
  altText,
}: Props) {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const pathname = usePathname();
  return (
    <Container
      key={pathname}
      initial={{ filter: "brightness(0%)" }}
      animate={{ filter: "brightness(100%)" }}
      transition={{ duration: 0.4 }}
    >
      <Headline
        initial={{ y: "0vh", opacity: 0 }}
        animate={{ y: "-6.5vh", opacity: 1 }}
        transition={{
          y: { duration: 0.3, delay: 0.5 },
          opacity: { duration: 0.3, delay: 0.5 },
        }}
      >
        {headline}
      </Headline>

      <WhiteHeadlineContainer>
        <Headline
          $white
          initial={{ y: "-12vh", opacity: 0 }}
          animate={{ y: "-6.5vh", opacity: 1 }}
          transition={{
            y: { duration: 0.3, delay: 0.5 },
            opacity: { duration: 0.3, delay: 0.5 },
          }}
        >
          {headline}
        </Headline>
      </WhiteHeadlineContainer>

      {backgroundImage && altText && (
        <StyledImage
          priority
          src={backgroundImage}
          alt={altText}
          onLoad={() => setImageLoaded(true)}
        />
      )}

      {imageLoaded && (
        <ScrollWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <BorderWrapper>{children}</BorderWrapper>
        </ScrollWrapper>
      )}
    </Container>
  );
}

const Container = styled(motion.div)`
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
  width: fit-content;
  padding: 0 0 0 20%;
  @media only screen and (max-width: 900px) {
    padding: 0 30px;
    width: 100%;
  }
`;

const StyledImage = styled(Image)`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(50%);
`;

const ScrollWrapper = styled(motion.div)`
  position: relative;
  z-index: 3;
  background: none;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const BorderWrapper = styled.div`
  min-height: 100%;
  border: 8px solid white;
  border-top: none;
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 20vh 0 10vh 20%;
  @media only screen and (max-width: 900px) {
    padding: 20vh 15px 10vh;
    width: 100%;
  }
`;
