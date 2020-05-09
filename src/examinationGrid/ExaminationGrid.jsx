import React from "react";
import styled from "styled-components";
import { DataGrid } from "tubular-react";
import { createColumn } from "tubular-common";

const columns = [
  createColumn("OrderID"),
  createColumn("CustomerName"),
  createColumn("ShipperCity"),
];

const ExaminationsViewContainer = styled.div`
  flex-grow: 1;
`;

export const ExaminationGrid = () => {
  return (
    <ExaminationsViewContainer>
      <DataGrid
        columns={columns}
        dataSource={"https://tubular.azurewebsites.net/api/orders/paged"}
        gridName="Grid"
      />
    </ExaminationsViewContainer>
  );
};
