"use client";

import styled from "styled-components";
import about1 from "@/public/images/about/about1.png";
import { PageContainer } from "./PageContainer";
import { TextWrapper } from "./TextWrapper";

export function About() {
  return (
    <PageContainer
      headline="zu uns"
      backgroundImage={about1}
      altText="A black and white photograph capturing a dimly lit, intimate table setting. The table is adorned with several glasses, bottles, and a lit candle, creating a cozy ambiance. In the background, a foggy window displays drawings of hearts and abstract shapes, possibly made by someone using their finger. Small dots of light are visible through the window, adding to the warm and inviting atmosphere. The foreground features a cloth with a simple, elegant pattern. The overall scene evokes a sense of romance and quiet celebration."
    >
      <TextWrapper>
        Hinter schlicht+ergreifend Dining verbirgt sich der Raum und die
        Freiheit, uns mit Handwerk auszudrücken und auszuprobieren, was geht.
        Wohin es uns führen kann.
        <br />
        <br />
        Sich dann gemeinsam zu freuen, wenn es klappt und wenn nicht, keinen
        Weltuntergang draus zu machen. Die Materie ist grundlegend das Eine -
        das Andere ist das Bewusstsein dafür, dass unsere Art und Weise zu
        kochen und zu essen ein Luxus ist und mehr als reine Nahrungsaufnahme.
        Keine Selbstverständlichkeit, sondern ein Privileg.
        <br />
        <br />
        Mit unseren Caterings und Popup-Restaurants teilen wir, was wir gut
        können und lieben.
        <br />
        <br />
        Aber um den Ball flach zu halten: Am Ende des Tages geht es nur ums
        kochen und dazu einzuladen, gemeinsam zu genießen.
      </TextWrapper>

      <Section>
        <Headline2>kontakt</Headline2>

        <Contact>
          Ansprechpartner:innen: Jules Massay, Rosa Krieg
          <br />
          <br />
          Email:{" "}
          <a href="mailto:schlicht@ergreifend.de">schlicht@ergreifend.de</a>
          <br />
          <br />
          Telefon: <a href="tel:01761234567">01761234567</a>
        </Contact>
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

const Contact = styled.p`
  color: white;
  margin: 20px 60px;
  a {
    color: white;
  }

  @media only screen and (max-width: 900px) {
    padding: 0 15px;
  }
`;
