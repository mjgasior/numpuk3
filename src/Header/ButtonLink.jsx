import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

const StyledLink = styled(Link)`
  margin-left: 10px;
`;

export const ButtonLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <IconButton color="primary">{children}</IconButton>
    </StyledLink>
  );
};
