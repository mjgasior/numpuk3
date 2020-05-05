import React, { useEffect, useState } from "react";
import { getExaminations } from "../+services/examinationReader";
import { ExaminationTable } from "./table/ExaminationTable";
import { ExaminationFilters } from "./filters/ExaminationFilters";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

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
    <>
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
      <ExaminationFilters setFilters={setFilters} />
      <ExaminationTable examinations={examinations} />
    </>
  );
};
