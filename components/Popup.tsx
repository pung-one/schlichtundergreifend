"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
import popup1 from "@/public/images/popup/popup1.png";
import { PageContainer } from "./PageContainer";

export function Popup() {
  return (
    <PageContainer headline="popup" backgroundImage={popup1}>
      <TextContent>
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
          </ul>
        </Events>

        <Reservation>
          Reservierungen per Email:
          <br />
          <a href="mailto:schlicht@ergreifend.de">schlicht@ergreifend.de</a>
        </Reservation>
      </TextContent>
    </PageContainer>
  );
}

const TextContent = styled.div`
  z-index: 3;
  position: relative;
  background: none;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const Reservation = styled.p`
  width: fit-content;
  text-align: center;
  color: white;
  margin: auto;
  a {
    color: white;
  }
`;

const Events = styled.div`
  position: relative;
  color: white;
  width: fit-content;
  max-width: 600px;
  margin: 15vh auto 10vh;
  padding: 20px;
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 25px;
    max-height: 30vh;
    overflow-y: scroll;
    padding: 15px;
    li {
      text-align: center;
    }
  }
  @media only screen and (max-width: 1024px) {
    h2 {
      margin: 0 auto 20px;
    }
  }
`;
