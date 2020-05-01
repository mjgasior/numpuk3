import React from "react";
import { Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { Header } from "./Header/Header";
import { theme } from "./+utils/theme";
import { Home } from "./+components/Home";
import { Books } from "./+components/Books";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Switch>
          <Route path="/books" component={Books} />
          <Route path="/" component={Home} />
        </Switch>
      </Container>
    </ThemeProvider>
  );
};
