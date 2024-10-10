import React from 'react';
import json2xls from 'json-as-xlsx';
import { Button } from '@/components/ui/button';

export function ExportToExcel({ jsonData }) {
  // Function to export JSON as Excel
  const handleExport = () => {
    // Define the structure of the data
    let data = [
      {
        sheet: 'Users', // Sheet name
        columns: [
          { label: 'Name', value: 'first_name' }, // 'value' should match the key in JSON
          { label: 'email', value: 'email' },
          { label: 'LastName', value: 'last_name' },
        ],
        content: jsonData, // Your JSON data
      },
    ];

    let settings = {
      fileName: 'MyExcelFile', // Name of the Excel file
      extraLength: 3, // A padding to adjust the column size
      writeOptions: {}, // Style options for writing
    };

    // Export data to Excel
    json2xls(data, settings);
  };

  return (
   
    <Button onClick={handleExport}>
     Export JSON to Excel
    </Button>
  );
}