"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import gardenTable from "@/public/images/catering/gardentable.png";
import { PageContainer } from "./PageContainer";

export function Catering() {
  return (
    <PageContainer headline="catering" backgroundImage={gardenTable}>
      <TextContent>
        <Text>
          Anfragen per Email:
          <br />
          <a href="mailto:schlicht@ergreifend.de">schlicht@ergreifend.de</a>
        </Text>
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
  overflow: scroll;
`;

const Text = styled.p`
  margin: 20vh auto 0;
  width: fit-content;
  padding: 50px;
  text-align: center;
  color: white;
  a {
    color: white;
  }
`;
