"use client";

import styled from "styled-components";
import popup1 from "@/public/images/popup/popup1.png";
import { PageContainer } from "./PageContainer";
import { TextWrapper } from "./TextWrapper";

export function Popup({ blurUrl }: { blurUrl: string }) {
  return (
    <PageContainer
      headline="popup"
      backgroundImage={popup1}
      altText=""
      blurUrl={blurUrl}
    >
      <TextWrapper>
        Abende, an denen alles zusammenkommt, was schlicht+ergreifend Dining
        ausmacht. Unsere Popup-Restaurants sind unsere Einladung an dich, das
        alles mitzuerleben und zu bereichern!
        <br />
        <br />
        Sobald die Termine stehen, nehmen wir Reservierungen an. Weil die Plätze
        begrenzt sind, ist spontan vorbeikommen leider nicht möglich.
        <br />
        <br />
        Ort + Spielzeit variieren - wir halten dich hier und über Social Media
        auf dem Laufenden. Übrigens auch, was Einblicke ins jeweilige Menü
        angeht!
      </TextWrapper>

      <Section>
        <Headline2>demnächst</Headline2>

        <Events>
          <ul>
            <li>
              <span>13. - 15.7.</span>
              <br />
              Popup-Restaurant im Nil N°6
            </li>
            <li>
              <span>13. - 15.7.</span>
              <br />
              Popup-Restaurant im Nil N°6
            </li>
            <li>
              <span>13. - 15.7.</span>
              <br />
              Popup-Restaurant im Nil N°6
            </li>
            <li>
              <span>13. - 15.7.</span>
              <br />
              Popup-Restaurant im Nil N°6
            </li>
            <li>
              <span>13. - 15.7.</span>
              <br />
              Popup-Restaurant im Nil N°6
            </li>
            <li>
              <span>13. - 15.7.</span>
              <br />
              Popup-Restaurant im Nil N°6
            </li>
          </ul>
        </Events>
      </Section>

      <Section>
        <Headline2>reservierungen</Headline2>

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

const Events = styled.div`
  position: relative;
  color: white;
  margin: 20px 60px;
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

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
