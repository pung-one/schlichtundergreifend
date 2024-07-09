"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

type Props = {
  children: ReactNode;
  headline: string;
  backgroundImage: StaticImageData;
  altText: string;
  blurUrl: string;
};

export function PageContainer({
  children,
  headline,
  backgroundImage,
  altText,
  blurUrl,
}: Props) {
  const pathname = usePathname();
  return (
    <Container
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
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
        alt={altText}
        placeholder="blur"
        blurDataURL={blurUrl}
      />

      <ScrollWrapper>
        <BorderWrapper>{children}</BorderWrapper>
      </ScrollWrapper>
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

const ScrollWrapper = styled.div`
  position: relative;
  z-index: 3;
  background: none;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const BorderWrapper = styled.div`
  padding: 20vh 0 10vh;
  min-height: 100%;
  border: 8px solid white;
  border-top: none;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;
