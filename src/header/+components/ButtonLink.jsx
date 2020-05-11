import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

const StyledLink = styled(Link)`
  margin-left: 10px;
`;

export const ButtonLink = ({ to, title, children }) => {
  return (
    <Tooltip title={title}>
      <StyledLink to={to}>
        <IconButton color="primary">{children}</IconButton>
      </StyledLink>
    </Tooltip>
  );
};
