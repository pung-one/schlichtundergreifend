"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
import about1 from "@/public/images/about/about1.png";
import { PageContainer } from "./PageContainer";

export function About({ blurUrl }: { blurUrl: string }) {
  return (
    <PageContainer
      headline="über uns"
      backgroundImage={about1}
      altText=""
      blurUrl={blurUrl}
    >
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
              keinen Weltuntergang draus zu machen. Die Materie ist grundlegend
              das Eine - das Andere ist das Bewusstsein dafür, dass unsere Art
              und Weise zu kochen und zu essen ein Luxus ist und mehr als reine
              Nahrungsaufnahme. Keine Selbstverständlichkeit, sondern ein
              Privileg.
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
              Jules Verne
              <br />
              <br />
              Rosa Krieg
            </p>
          </Text>
        </Section>

        <Section>
          <Headline2>kontakt</Headline2>

          <Text>
            <p>
              Email:{" "}
              <a href="mailto:schlicht@ergreifend.de">schlicht@ergreifend.de</a>
              <br />
              <br />
              Telefon: <a href="tel:01761234567">01761234567</a>
            </p>
          </Text>
        </Section>
      </TextContent>
    </PageContainer>
  );
}

const TextContent = styled.div`
  z-index: 3;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10vh;
  background: none;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 20vh 0;
`;

const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  color: white;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const Headline2 = styled.h2`
  width: 38%;
  text-align: right;
  font-family: "Melodrama";
  font-size: 7vh;
  padding: 0 15px;
  @media only screen and (max-width: 900px) {
    width: 100%;
    text-align: left;
  }
`;

const Text = styled.div`
  width: 62%;
  position: relative;
  color: white;
  padding: 15px 15px;
  p {
    max-width: 500px;
  }
  a {
    color: white;
  }
  ul {
    list-style: none;
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
    p {
      max-width: 100%;
    }
  }
`;
