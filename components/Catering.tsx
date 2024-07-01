"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
import gardenTable from "@/public/images/catering/gardentable.png";
import { PageContainer } from "./PageContainer";

export function Catering() {
  return (
    <PageContainer headline="catering" backgroundImage={gardenTable}>
      <TextContent>
        <Text
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
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

const Text = styled(motion.p)`
  margin: 25vh auto 0;
  width: fit-content;
  padding: 50px;
  text-align: center;
  color: white;
  a {
    color: white;
  }
`;
