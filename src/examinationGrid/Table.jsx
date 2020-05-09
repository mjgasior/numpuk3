import React from "react";
import { AutoSizer, Grid } from "react-virtualized";
import { useTranslation } from "react-i18next";

export const Table = React.memo(({ examinations }) => {
  const { t } = useTranslation("n3_metadata");
  const cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
    return (
      <div key={key} style={style}>
        {t(examinations[rowIndex][columnIndex])}
      </div>
    );
  };

  return (
    <AutoSizer>
      {({ width, height }) => (
        <Grid
          cellRenderer={cellRenderer}
          columnCount={examinations[0].length}
          columnWidth={200}
          height={height}
          rowCount={examinations.length}
          rowHeight={30}
          width={width}
        />
      )}
    </AutoSizer>
  );
});
