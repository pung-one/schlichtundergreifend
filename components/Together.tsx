"use client";

import styled from "styled-components";
import Image from "next/image";
import together1 from "@/public/images/together/together1.png";
import together2 from "@/public/images/together/together2.png";
import together3 from "@/public/images/together/together3.png";
import together4 from "@/public/images/together/together4.png";
import together5 from "@/public/images/together/together5.png";
import together6 from "@/public/images/together/together6.png";
import together7 from "@/public/images/together/together7.png";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Together() {
  const [imageCount, setImageCount] = useState(0);

  const headlineRef = useRef(null);

  const isInView = useInView(headlineRef, { once: true });

  const images = [
    together1,
    together2,
    together3,
    together4,
    together5,
    together6,
    together7,
  ];

  useEffect(() => {
    function imageLoop() {
      imageCount < 6 ? setImageCount(imageCount + 1) : setImageCount(0);
    }

    const timeout = setTimeout(imageLoop, 4500);

    return () => clearTimeout(timeout);
  }, [imageCount]);

  return (
    <TogetherContainer>
      <ImageSection>
        <AnimatePresence mode="wait">
          <motion.div
            key={imageCount}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ height: "100%" }}
          >
            <StyledImage
              priority
              src={images[imageCount]}
              alt="Esstisch im Garten im Frühling"
            />
          </motion.div>
        </AnimatePresence>
      </ImageSection>

      <TextSection>
        <Headline
          ref={headlineRef}
          style={{
            transform: isInView ? "none" : "translateY(-50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s ease 0.2s",
          }}
        >
          Zusammen
        </Headline>

        <Text>
          Ein gutes Essen ist mehr als ein leckeres Gericht auf einem Teller
          oder die Summe seiner Teile. In Erinnerung bleibt es durch gute
          Gesellschaft.
        </Text>
      </TextSection>
    </TogetherContainer>
  );
}

const TogetherContainer = styled.article`
  display: flex;
  height: 100dvh;
  @media only screen and (max-width: 950px) {
    flex-direction: column-reverse;
  }
`;

const ImageSection = styled.section`
  flex: 1;
  max-width: 50%;
  @media only screen and (max-width: 950px) {
    max-width: 100%;
    max-height: 50%;
  }
`;

const StyledImage = styled(Image)`
  height: 100%;
  max-width: 100%;
  object-fit: cover;
`;

const TextSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  padding: 0 20px;
  @media only screen and (max-width: 950px) {
    max-width: 100%;
    max-height: 50%;
  }
`;

const Headline = styled(motion.h2)`
  font-family: "RobotoThin";
  width: fit-content;
  margin: 0 0 3vh 0;
  font-size: 7vw;
  @media only screen and (max-width: 950px) {
    font-size: 10vw;
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
