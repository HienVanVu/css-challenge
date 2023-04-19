function exportExcel() {
  // Create a new workbook
  const workbook = XLSX.utils.book_new();

  // Create a new sheet
  const sheetName = "Sheet1";
  const reportTitle = "Hien Vu Van's report at 2023/04/19"; // Report title
  const headerData = ["Name", "Age", "City"]; // Header row data
  const rowData = [
    ["John Doe", 25, "New York"],
    ["Jane Smith", 32, "London"],
    ["Mark Johnson", 28, "Sydney"],
  ]; // Row data
  const sheetData = [[reportTitle], [], [], [], [], headerData, ...rowData]; // Combine report title, empty row, header row data, and row data
  const sheet = XLSX.utils.aoa_to_sheet(sheetData);

  // Define the range to be merged
  const mergeStart = { r: 0, c: 0 }; // Start merging from A1
  const mergeEnd = { r: 3, c: 2 }; // End merging at C4

  // Merge the cells
  const mergeRange = XLSX.utils.encode_range(mergeStart, mergeEnd);
  sheet["!merges"] = [{ s: mergeStart, e: mergeEnd, address: mergeRange }];

  // Set background color for report title and header row dynamically
  const headerColor = "FFFF00"; // Set your desired color here
  const headerCellStyle = { fill: { fgColor: { rgb: headerColor } } }; // Dynamic background color for report title and header row

  // Set style for report title cell
  const reportTitleCellRef = XLSX.utils.encode_cell({ r: 0, c: 0 }); // Report title cell is at row 0, column 0
  sheet[reportTitleCellRef].s = { ...headerCellStyle }; // Set style for report title cell
  sheet[reportTitleCellRef].s.alignment = { vertical: "center" }; // Set center alignment for report title cell
  sheet[reportTitleCellRef].s.font = { sz: 20, name: "Arial" }; // Set font size for report title cell

  // Get the range of cells in the header row
  const range = XLSX.utils.decode_range(sheet["!ref"]);
  for (let col = range.s.c; col <= range.e.c; col++) {
    const cellRef = XLSX.utils.encode_cell({ r: 5, c: col }); // Header row has index 5
    sheet[cellRef].s = { ...headerCellStyle }; // Set style for each cell in the header row
  }

  // Set column widths for each column of data
  const columnWidths = [15, 10, 20]; // Set desired width for each column
  sheet["!cols"] = columnWidths.map((width) => ({ wch: width })); // Set column widths in characters

  // Add the sheet to the workbook
  XLSX.utils.book_append_sheet(workbook, sheet, sheetName);

  // Write the workbook to an Excel file
  const excelFileName = "example.xlsx";
  XLSX.writeFile(workbook, excelFileName);

  console.log(`Excel file "${excelFileName}" created successfully!`);
}

const button = document.querySelector(".download");

button.addEventListener("click", exportExcel);
