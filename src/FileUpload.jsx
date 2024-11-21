import React, { useState } from "react";
import * as XLSX from "xlsx"; // Import the xlsx library

const FileUpload = () => {
  const [excelData, setExcelData] = useState([]); // State to store extracted data

  const handleFileUpload = (e) => {
    const file = e.target.files[0]; // Get the file from the input field

    if (file) {
      const reader = new FileReader(); // Create a FileReader to read the file
      reader.onload = (event) => {
        const binaryStr = event.target.result; // Read the file in binary format
        const workbook = XLSX.read(binaryStr, { type: "binary" }); // Read the Excel file

        // Get the first sheet from the workbook and convert it to JSON
        const sheetName = workbook.SheetNames[0]; // Get the name of the first sheet
        const sheet = workbook.Sheets[sheetName]; // Get the actual sheet
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1 }); // Convert sheet to JSON
        setExcelData(data); // Store the data in state
      };

      reader.readAsBinaryString(file); // Read the file as binary string
    }
  };

  return (
    <div>
      <h1>Upload Excel File</h1>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} /> {/* File upload input */}
      {excelData.length > 0 && (
        <div>
          <h2>Extracted Data:</h2>
          <table border="1">
            <thead>
              <tr>
                {excelData[0]?.map((header, index) => (
                  <th key={index}>{header}</th> // Create headers from first row in Excel file
                ))}
              </tr>
            </thead>
            <tbody>
              {excelData.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td> // Fill each row with cell data
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
