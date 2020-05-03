import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { Header } from "./header/Header";
import { theme } from "./+utils/theme";
import { UploadPage } from "./upload/UploadPage";
import { ExaminationsPage } from "./examinations/ExaminationsPage";
import { ReaderPage } from "./reader/ReaderPage";
import { ExaminationsContext } from "./+context/ExaminationsContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  margin: 10px auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
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
              <Route path="/upload" component={UploadPage} />
              <Route path="/examinations" component={ExaminationsPage} />
              <Route path="/" component={ReaderPage} />
            </Switch>
          </Content>
        </Container>
      </ExaminationsContext.Provider>
    </ThemeProvider>
  );
};
