import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import styled from "styled-components";
import { setPolish, setEnglish } from "../../+services/languageService";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  width: 130px;
`;

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 32,
    height: 18,
    padding: 2,
    display: "flex",
  },
  switchBase: {
    padding: 4,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

export const LanguageSwitch = () => {
  const [isChecked, setIsChecked] = React.useState(true);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      setPolish();
    } else {
      setEnglish();
    }
  };

  return (
    <Wrapper>
      <div>English</div>
      <AntSwitch checked={isChecked} onChange={handleChange} />
      <div>Polski</div>
    </Wrapper>
  );
};
