"use client";
import styled from "styled-components";

export function PageContainer({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

const Container = styled.main`
  position: relative;
  padding: 0 10vw;
`;
