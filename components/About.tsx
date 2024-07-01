"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
import about1 from "@/public/images/about/about1.png";

export function About() {
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
          zu uns
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
            zu uns
          </Headline>
        </WhiteHeadlineContainer>

        <StyledImage priority src={about1} alt="" />

        <TextContent>
          <Section>
            <Headline2>idee</Headline2>

            <Text>
              <p>
                Hinter schlicht+ergreifend Dining verbirgt sich der Raum und die
                Freiheit, uns mit Handwerk auszudrücken und auszuprobieren, was
                geht. Wohin es uns führen kann.
                <br />
                <br />
                Sich dann gemeinsam zu freuen, wenn es klappt und wenn nicht,
                keinen Weltuntergang draus zu machen. Die Materie ist
                grundlegend das Eine - das Andere ist das Bewusstsein dafür,
                dass unsere Art und Weise zu kochen und zu essen ein Luxus ist
                und mehr als reine Nahrungsaufnahme. Keine
                Selbstverständlichkeit, sondern ein Privileg.
                <br />
                <br />
                Mit unseren Caterings und Popup-Restaurants teilen wir, was wir
                gut können und lieben.
                <br />
                <br />
                Aber um den Ball flach zu halten:
                <br />
                Am Ende des Tages geht es nur ums kochen und dazu einzuladen,
                gemeinsam zu genießen.
              </p>
            </Text>
          </Section>

          <Section>
            <Headline2>beteiligte</Headline2>

            <Text>
              <p>
                Jules
                <br />
                <br />
                Rosa
              </p>
            </Text>
          </Section>

          <Section>
            <Headline2>kontakt</Headline2>

            <Text>
              <p>
                Email:{" "}
                <a href="mailto:schlicht@ergreifend.de">
                  schlicht@ergreifend.de
                </a>
                <br />
                <br />
                Telefon: <a href="tel:01761234567">01761234567</a>
              </p>
            </Text>
          </Section>
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
  display: flex;
  flex-direction: column;
  gap: 10vh;
  background: none;
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding: 20vh 0;
`;

const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  color: white;
`;

const Headline2 = styled.h2`
  width: 38%;
  text-align: right;
  font-family: "Melodrama";
  font-size: 40px;
  padding-right: 15px;
`;

const Text = styled.div`
  width: 62%;
  position: relative;
  color: white;
  padding: 10px 30px;
  p {
    max-width: 600px;
  }
  a {
    color: white;
  }
  ul {
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
