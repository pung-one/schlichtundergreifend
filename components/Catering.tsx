"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import gardenTable from "@/public/images/catering/gardentable.png";
import { PageContainer } from "./PageContainer";

export function Catering({ blurUrl }: { blurUrl: string }) {
  return (
    <PageContainer
      headline="catering"
      backgroundImage={gardenTable}
      altText="Esstisch im Garten im Frühling"
      blurUrl={blurUrl}
    >
      <TextContent>
        <Text>
          Lass uns gerne über deine Vorstellungen sprechen und wir schauen, wie
          die Umsetzung aussehen könnte. Get-Together von Firmenevent bis zur
          privaten Geburtstagsfeier bei dir zu Hause: wir machen uns gerne
          Gedanken über alle möglichen Settings.
          <br />
          Manchmal ist einfach nur zusammenkommen ja auch schon Anlass genug!
        </Text>

        <Section>
          <Headline2>anfragen</Headline2>

          <Reservation>
            <a href="mailto:schlicht@ergreifend.de">schlicht@ergreifend.de</a>
          </Reservation>
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
  gap: 100px;
  padding: 20vh 0;
  background: none;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const Text = styled.p`
  position: relative;
  color: white;
  max-width: 600px;
  margin: 0 auto;
  a {
    color: white;
  }
  ul {
    list-style: none;
  }

  @media only screen and (max-width: 900px) {
    padding: 0 15px;
    width: 100%;
  }
`;

const Section = styled.section`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
`;

const Headline2 = styled.h2`
  font-family: "Melodrama";
  font-size: 4vh;
  color: white;

  @media only screen and (max-width: 900px) {
    padding: 0 15px;
  }
`;

const Reservation = styled.p`
  color: white;
  margin: 20px 60px;
  a {
    color: white;
  }

  @media only screen and (max-width: 900px) {
    padding: 0 15px;
  }
`;
