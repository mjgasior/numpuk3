import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Header } from "./+components/Header";
import { theme } from "./+utils/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
};
