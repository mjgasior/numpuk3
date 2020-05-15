import { exceljs } from "../+apis/dependenciesApi";
import { getExaminations } from "./examinationReader";

const createWorkbook = () => {
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

  return workbook;
};

export const saveExaminations = async (
  directory,
  testFilters,
  metadataFilters
) => {
  console.log(directory);
  const workbook = createWorkbook();
  const worksheet = workbook.addWorksheet("Wyniki");

  const data = await getExaminations({}, metadataFilters, {}, testFilters, {
    page: 0,
    rowsPerPage: 100,
  });

  worksheet.columns = [
    { header: "Id", key: "id", width: 10 },
    { header: "Name", key: "name", width: 32 },
    { header: "D.O.B.", key: "DOB", width: 10, outlineLevel: 1 },
  ];

  worksheet.addRow({ id: 1, name: "John Doe", dob: new Date(1970, 1, 1) });
  worksheet.addRow({ id: 2, name: "Jane Doe", dob: new Date(1965, 1, 7) });

  /*
  data.examinations.forEach((element) => {
    const { results, ...rest } = element;
    sheet.addRow(rest);
  });
*/
  console.log(data);

  await workbook.xlsx.writeFile(directory + "/wyniki.xlsx");
  return 0;
};
