import React from "react";
import styled from "styled-components";
import { Header } from "./+components/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const App = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};
