import React from "react";

import styled from "styled-components";

const StyledCell = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 10px;
  min-height: 50px;
  box-sizing: border-box;
  background: ${(props) => (props.isHeader ? "#f2f2f2" : "transparent")};
`;

export const Cell = ({ content, style, isHeader }) => {
  return (
    <div
      style={{
        ...style,
        whiteSpace: "nowrap",
      }}
    >
      <StyledCell isHeader={isHeader}>{content}</StyledCell>
    </div>
  );
};
