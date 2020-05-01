import React from "react";
import styled from "styled-components";
import logo from "./+resources/logo192.png";

const Image = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 10px;
`;

const StyledText = styled.div`
  font-size: 32px;
  font-family: "Segoe UI Light";
`;

const Container = styled.div`
  display: flex;
  margin: 10px;
  padding: 10px;
  border-bottom: solid #6e1c79 1px;
`;

export const Header = () => {
  return (
    <Container>
      <Image src={logo} alt="Logo" />
      <StyledText>numpuk3</StyledText>
    </Container>
  );
};
