import React, { useEffect, useState } from "react";
import { getExaminations } from "../+services/examinationReader";
import { ExaminationTable } from "./table/ExaminationTable";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import styled from "styled-components";

const ExaminationsViewContainer = styled.div`
  overflow: hidden;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ExaminationsTableContainer = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

export const ExaminationsPage = () => {
  const [filters, setFilters] = useState();
  const [examinations, setExaminations] = useState([]);

  const [state, setState] = useState({
    hasKlebsiellaPneumoniae: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
    const loadExaminations = async () => {
      console.log("it loads");
      const loadedExaminations = await getExaminations(
        state.hasKlebsiellaPneumoniae
      );
      setExaminations(loadedExaminations);
    };

    loadExaminations();
  }, [filters, state]);

  return (
    <ExaminationsViewContainer>
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              checked={state.hasKlebsiellaPneumoniae}
              onChange={handleChange}
              name="hasKlebsiellaPneumoniae"
            />
          }
          label="Klebsiella pneumoniae"
        />
      </FormGroup>
      <ExaminationsTableContainer>
        <ExaminationTable examinations={examinations} />
      </ExaminationsTableContainer>
    </ExaminationsViewContainer>
  );
};
