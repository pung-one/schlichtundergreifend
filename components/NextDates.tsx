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
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useImageCountLoop } from "@/utils/imageCountLoop";

export function NextDates() {
  const headlineRef = useRef(null);

  const isInView = useInView(headlineRef, { once: true });

  return (
    <TogetherContainer>
      <TextSection>
        <Headline
          ref={headlineRef}
          style={{
            transform: isInView ? "none" : "translateY(-50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s ease 0.2s",
          }}
        >
          Nächste Termine
        </Headline>

        <Text>06. Juli 2024</Text>
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

const TextSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
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
