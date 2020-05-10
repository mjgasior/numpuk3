import React from "react";
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  Grid,
} from "react-virtualized";
import { useTranslation } from "react-i18next";
import { Cell } from "./Cell";

const cache = new CellMeasurerCache({
  defaultWidth: 100,
  minWidth: 100,
  fixedHeight: true,
});

export const GridTable = React.memo(({ examinations }) => {
  const { t } = useTranslation("n3_metadata");
  const cellRenderer = ({ columnIndex, key, parent, rowIndex, style }) => {
    return (
      <CellMeasurer
        cache={cache}
        columnIndex={columnIndex}
        key={key}
        parent={parent}
        rowIndex={rowIndex}
      >
        <Cell
          isHeader={rowIndex === 0}
          key={key}
          content={t(examinations[rowIndex][columnIndex])}
          style={style}
        />
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
