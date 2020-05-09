import React from "react";
import { Grid } from "react-virtualized";

export const Table = React.memo(({ examinations }) => {
  const cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
    return (
      <div key={key} style={style}>
        {examinations[rowIndex][columnIndex]}
      </div>
    );
  };

  return (
    <Grid
      cellRenderer={cellRenderer}
      columnCount={examinations[0].length}
      columnWidth={100}
      height={300}
      rowCount={examinations.length}
      rowHeight={30}
      width={300}
    />
  );
});
