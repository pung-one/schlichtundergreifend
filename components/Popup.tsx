"use client";

import styled from "styled-components";
import popup1 from "@/public/images/popup/popup1.png";
import { PageContainer } from "./PageContainer";
import { TextWrapper } from "./TextWrapper";
import { Event } from "@/app/cms/page";

type Props = {
  events?: Event[];
};

export function Popup({ events }: Props) {
  return (
    <PageContainer
      headline="popup"
      backgroundImage={popup1}
      altText="A black and white photograph taken in a dining setting. The focal point is a person sitting at a table, obscured by a wine glass and candle in the foreground. The background features a poster with the text 'SCHLICHT + ERGREIFEND DINING' and other information about a pop-up restaurant event. The poster also displays a plate, utensils, and a crumpled napkin. The image has a casual, candid feel with a blurred depth of field."
    >
      <TextWrapper>
        Abende, an denen alles zusammenkommt, was schlicht+ergreifend Dining
        ausmacht. Unsere Popup-Restaurants sind eine Einladung an dich, das
        alles mitzuerleben und zu bereichern. Sobald die Termine stehen, nehmen
        wir Reservierungen an. Weil die Plätze begrenzt sind, ist spontan
        vorbeikommen leider nicht möglich. Ort + Spielzeit variieren - wir
        halten dich hier und über Social Media auf dem Laufenden. Übrigens auch,
        was Einblicke ins jeweilige Menü angeht!
      </TextWrapper>

      {events && events?.length > 0 && (
        <Section>
          <Headline2>demnächst</Headline2>

          <Events>
            <ul>
              {events.map((event: Event) => (
                <li key={event.date}>
                  <span>{event.date}</span>
                  <br />
                  {event.text}
                </li>
              ))}
            </ul>
          </Events>
        </Section>
      )}

      {/* <Section>
        <Headline2>reservierungen</Headline2>

        <Reservation>
          <a href="mailto:schlicht@ergreifend.de">schlicht@ergreifend.de</a>
        </Reservation>
      </Section> */}
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

const Events = styled.div`
  position: relative;
  color: white;
  margin-top: 20px;
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
  margin-top: 20px;
  a {
    color: white;
  }

  @media only screen and (max-width: 900px) {
    padding: 0 15px;
  }
`;
