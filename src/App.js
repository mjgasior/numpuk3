import React from "react";
import { Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { Header } from "./header/Header";
import { theme } from "./+utils/theme";
import { UploadPage } from "./upload/UploadPage";
import { ExaminationsPage } from "./examinations/ExaminationsPage";
import { ReaderPage } from "./reader/ReaderPage";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Content>
          <Switch>
            <Route path="/upload" component={UploadPage} />
            <Route path="/examinations" component={ExaminationsPage} />
            <Route path="/" component={ReaderPage} />
          </Switch>
        </Content>
      </Container>
    </ThemeProvider>
  );
};
