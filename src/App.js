import React from "react";
import { Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { Header } from "./+components/Header";
import { theme } from "./+utils/theme";
import { Home } from "./+components/Home";
import { Books } from "./+components/Books";
import Navigation from "./+components/Navigation";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Navigation />

        <Switch>
          <Route path="/books" component={Books} />
          <Route path="/" component={Home} />
        </Switch>
      </Container>
    </ThemeProvider>
  );
};
