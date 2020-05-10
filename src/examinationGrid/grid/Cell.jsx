import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const StyledCell = styled.div`
  display: flex;
  align-items: center;

  border-bottom: 1px solid #ddd;
  padding: 0px 10px;
  min-height: 50px;
  box-sizing: border-box;
  background: ${(props) => (props.row % 2 ? "transparent" : "#fbfbfb")};
`;

export const Cell = ({ content, style, row }) => {
  const { t } = useTranslation("n3_metadata");
  return (
    <div
      style={{
        ...style,
        whiteSpace: "nowrap",
      }}
    >
      <StyledCell row={row}>{t(content)}</StyledCell>
    </div>
  );
};
