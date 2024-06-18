"use client";

import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function NextDates() {
  const headlineRef = useRef(null);

  const isInView = useInView(headlineRef, { once: true });

  return (
    <NextDatesContainer id="next-dates">
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
    </NextDatesContainer>
  );
}

const NextDatesContainer = styled.article`
  height: 90dvh;
  //for navigation
  padding-top: 10vh;
  margin-top: -10vh;
`;

const TextSection = styled.section`
  width: 100%;
  padding-top: 20dvh;
  text-align: center;
`;

const Headline = styled(motion.h2)`
  font-family: "Melodrama";
  margin: 0 0 3vh 0;
  font-size: 7vw;
  font-weight: 100;
  @media only screen and (max-width: 950px) {
    font-size: 10vw;
  }
`;

const Text = styled.p`
  line-height: 40px;
  text-align: center;
  @media only screen and (max-width: 950px) {
    font-size: 16px;
    padding: 0 10px;
    line-height: 30px;
  }
`;
