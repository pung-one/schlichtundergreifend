"use client";
import { useEffect } from "react";
import styled from "styled-components";

export function PageContainer({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return <Container>{children}</Container>;
}

const Container = styled.main`
  position: relative;
  //padding: 0 10vw;
`;
