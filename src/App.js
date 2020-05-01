import React from "react";
import { Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { Header } from "./header/Header";
import { theme } from "./+utils/theme";
import { UploadPage } from "./upload/UploadPage";
import { ExaminationsPage } from "./examinations/ExaminationsPage";
import { dialog } from "./+utils/electron";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const App = () => {
  console.log("dialog");
  console.log(dialog);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Switch>
          <Route path="/upload" component={UploadPage} />
          <Route path="/" component={ExaminationsPage} />
        </Switch>
      </Container>
    </ThemeProvider>
  );
};
