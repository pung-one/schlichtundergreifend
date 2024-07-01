"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
import popup1 from "@/public/images/popup/popup1.png";

export function Popup() {
  return (
    <Container>
      <ImageContainer>
        <Headline
          initial={{ y: "0rem", opacity: 0 }}
          animate={{ y: "-6vh", opacity: 1 }}
          transition={{
            delay: 0.5,

            y: { duration: 0.5 },
            opacity: { duration: 0.3 },
          }}
        >
          popup
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
            popup
          </Headline>
        </WhiteHeadlineContainer>

        <StyledImage priority src={popup1} alt="" />

        <TextContent>
          <Reservation>
            Reservierungen per Email:
            <br />
            <a href="mailto:schlicht@ergreifend.de">schlicht@ergreifend.de</a>
          </Reservation>

          <Events>
            <h2>demnächst</h2>

            <ul>
              <li>13. - 15.7. Popup-Restaurant im Nil N°6</li>
              <li>13. - 15.7. Popup-Restaurant im Nil N°6</li>
              <li>13. - 15.7. Popup-Restaurant im Nil N°6</li>
              <li>13. - 15.7. Popup-Restaurant im Nil N°6</li>
            </ul>
          </Events>
        </TextContent>
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

const TextContent = styled.div`
  z-index: 3;
  position: relative;
  background: none;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

const Reservation = styled.p`
  text-align: center;
  color: white;
  margin: 15vh 0 10vh;
  a {
    color: white;
  }
`;

const Events = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  color: white;
  h2 {
    flex: 1;
    text-align: right;
    font-family: "Melodrama";
    font-size: 40px;
    padding-right: 15px;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 25px;
    flex: 1;
    padding: 15px 30px;
    list-style: none;
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
