import React from "react";
import styled from "styled-components";
import logo from "./+resources/logo192.png";
import { Menu } from "./Menu";

const Image = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 10px;
`;

const StyledText = styled.div`
  font-size: 32px;
  font-family: "Segoe UI Light";
`;

const RowContainer = styled.div`
  display: flex;
  padding: 10px 10px 10px;
  border-bottom: solid 1px;
  border-bottom-color: ${({ theme }) => theme.customPurple};
  user-select: none;
  justify-content: space-between;
`;

const ColumnContainer = styled.div`
  display: flex;
`;

export const Header = () => {
  return (
    <RowContainer>
      <ColumnContainer>
        <Image src={logo} alt="Logo" />
        <StyledText>numpuk3</StyledText>
      </ColumnContainer>
      <ColumnContainer>
        <Menu />
      </ColumnContainer>
    </RowContainer>
  );
};
