import React from "react";
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  Grid,
} from "react-virtualized";
import { Cell } from "./Cell";
import { Header } from "./Header";

const cache = new CellMeasurerCache({
  defaultWidth: 100,
  minWidth: 100,
  fixedHeight: true,
});

export const GridTable = React.memo(({ examinations }) => {
  const cellRenderer = ({ columnIndex, key, parent, rowIndex, style }) => {
    return (
      <CellMeasurer
        cache={cache}
        columnIndex={columnIndex}
        key={key}
        parent={parent}
        rowIndex={rowIndex}
      >
        {rowIndex === 0 ? (
          <Header
            key={key}
            content={examinations[rowIndex][columnIndex]}
            style={style}
          />
        ) : (
          <Cell
            row={rowIndex}
            key={key}
            content={examinations[rowIndex][columnIndex]}
            style={style}
          />
        )}
      </CellMeasurer>
    );
  };

  return (
    <AutoSizer>
      {({ width, height }) => (
        <Grid
          cellRenderer={cellRenderer}
          columnCount={examinations[0].length}
          columnWidth={cache.columnWidth}
          height={height}
          rowCount={examinations.length}
          rowHeight={50}
          width={width}
        />
      )}
    </AutoSizer>
  );
});
