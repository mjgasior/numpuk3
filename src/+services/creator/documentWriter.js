import { exceljs } from "../../+apis/dependenciesApi";

export const createDocument = () => {
  const workbook = new exceljs.Workbook();

  workbook.creator = "numpuk3";
  workbook.lastModifiedBy = "numpuk3";
  workbook.created = new Date();
  workbook.modified = new Date();

  workbook.views = [
    {
      x: 0,
      y: 0,
      width: 10000,
      height: 20000,
      firstSheet: 0,
      activeTab: 1,
      visibility: "visible",
    },
  ];

  const spreadsheet = workbook.addWorksheet("Wyniki");
  return { workbook, spreadsheet };
};

export const setColumnsInDocument = (
  { spreadsheet },
  dictionary,
  metadata,
  tests
) => {
  const columns = [];
  for (const key in metadata) {
    if (metadata[key]) {
      columns.push({ header: dictionary(key), key, width: 20 });
    }
  }

  for (const key in tests) {
    if (tests[key]) {
      columns.push({ header: key, key, width: 20 });
    }
  }

  spreadsheet.columns = columns;
};

export const addRowInDocument = ({ spreadsheet }, row) =>
  spreadsheet.addRow(row);

export const saveDocument = ({ workbook }, directory) =>
  workbook.xlsx.writeFile(directory + "/wyniki.xlsx");
