import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { Header } from "./header/Header";
import { theme } from "./+utils/theme";
import { UploadPage } from "./upload/UploadPage";
import { ExaminationsPage } from "./examinations/ExaminationsPage";
import { ReaderPage } from "./reader/ReaderPage";
import { ExaminationsContext } from "./+context/ExaminationsContext";
import { ROUTES } from "./+utils/routings";
import { LogsPage } from "./logs/LogsPage";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  overflow: auto;
`;

export const App = () => {
  const [openedExamination, setOpenedExamination] = useState("");
  const [filesList, setFilesList] = useState([]);
  const [selectedDirectory, setSelectedDirectory] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <ExaminationsContext.Provider
        value={{
          openedExamination,
          setOpenedExamination,
          filesList,
          setFilesList,
          selectedDirectory,
          setSelectedDirectory,
        }}
      >
        <Container>
          <Header />
          <Content>
            <Switch>
              <Route path={ROUTES.UPLOAD} component={UploadPage} />
              <Route path={ROUTES.EXAMINATIONS} component={ExaminationsPage} />
              <Route path={ROUTES.LOGS} component={LogsPage} />
              <Route path={ROUTES.READER} component={ReaderPage} />
            </Switch>
          </Content>
        </Container>
      </ExaminationsContext.Provider>
    </ThemeProvider>
  );
};
