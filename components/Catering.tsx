"use client";

import styled from "styled-components";
import gardenTable from "@/public/images/catering/gardentable.png";
import { PageContainer } from "./PageContainer";
import { TextWrapper } from "./TextWrapper";

export function Catering() {
  return (
    <PageContainer
      headline="catering"
      backgroundImage={gardenTable}
      altText="A black and white photograph of a rustic garden scene. The image features a wooden table and chairs set up on an overgrown grassy area, surrounded by dense foliage and trees. The table is covered with various items, suggesting recent use. The atmosphere is tranquil and nostalgic, with a focus on the natural, untamed beauty of the garden. The overall mood is serene and contemplative."
    >
      <TextWrapper>
        Lass uns gerne über deine Vorstellungen von einem Get-Together sprechen
        und wir schauen, wie die Umsetzung aussehen könnte.
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
  margin-top: 20px;
  a {
    color: white;
  }

  @media only screen and (max-width: 900px) {
    padding: 0 15px;
  }
`;
