import React from "react";
import { Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { Header } from "./header/Header";
import { theme } from "./+utils/theme";
import { Books } from "./+components/Books";
import { UploadPage } from "./upload/UploadPage";

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
          <Route path="/upload" component={UploadPage} />
          <Route path="/" component={Books} />
        </Switch>
      </Container>
    </ThemeProvider>
  );
};
