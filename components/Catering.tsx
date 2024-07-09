"use client";

import styled from "styled-components";
import gardenTable from "@/public/images/catering/gardentable.png";
import { PageContainer } from "./PageContainer";
import { TextWrapper } from "./TextWrapper";

export function Catering({ blurUrl }: { blurUrl: string }) {
  return (
    <PageContainer
      headline="catering"
      backgroundImage={gardenTable}
      altText="Esstisch im Garten im Frühling"
      blurUrl={blurUrl}
    >
      <TextWrapper>
        Lass uns gerne über deine Vorstellungen sprechen und wir schauen, wie
        die Umsetzung aussehen könnte.
        <br />
        <br />
        Get-Together von Firmenevent bis zur privaten Geburtstagsfeier bei dir
        zu Hause: Wir machen uns gerne Gedanken über alle möglichen Settings.
        <br />
        <br />
        Manchmal ist einfach nur zusammenkommen ja auch schon Anlass genug!
      </TextWrapper>

      <Section>
        <Headline2>anfragen</Headline2>

        <Reservation>
          <a href="mailto:schlicht@ergreifend.de">schlicht@ergreifend.de</a>
        </Reservation>
      </Section>
    </PageContainer>
  );
}

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
