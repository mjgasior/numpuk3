import React from "react";
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  Grid,
} from "react-virtualized";
import { useTranslation } from "react-i18next";

const cache = new CellMeasurerCache({
  defaultWidth: 100,
  minWidth: 100,
  fixedHeight: true,
});

export const Table = React.memo(({ examinations }) => {
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
        <div
          key={key}
          style={{
            ...style,
            height: 35,
            whiteSpace: "nowrap",
            padding: "5px",
          }}
        >
          {t(examinations[rowIndex][columnIndex])}
        </div>
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
          rowHeight={30}
          width={width}
        />
      )}
    </AutoSizer>
  );
});
