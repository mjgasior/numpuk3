import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const StyledCell = styled.div`
  display: flex;
  align-items: center;

  border-bottom: 1px solid #ddd;
  padding: 0px 10px;
  min-height: 50px;
  box-sizing: border-box;
  background: #f2f2f2;
`;

const TooltipCell = ({ title, children }) => {
  return (
    <Tooltip arrow title={title} placement="top">
      <StyledCell>{children}</StyledCell>
    </Tooltip>
  );
};

const TOOLTIPS = {
  ageAtTest: "n3_age",
  hasAkkermansiaMuciniphila: "n3_akkermansia",
  hasFaecalibactriumPrausnitzii: "n3_faecalibactrium",
  bacteriaCount: "n3_amount_of_bacteria",
};

export const Header = ({ content, style }) => {
  const { t } = useTranslation("n3_metadata");
  const newLabel = TOOLTIPS[content];
  return (
    <div
      style={{
        ...style,
        whiteSpace: "nowrap",
      }}
    >
      {newLabel ? (
        <TooltipCell title={t(content)}>{t(newLabel)}</TooltipCell>
      ) : (
        <StyledCell>{t(content)}</StyledCell>
      )}
    </div>
  );
};
