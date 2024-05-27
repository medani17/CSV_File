// CSVUpload.js
import React from 'react';

const CSVUpload = ({ handleData }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const csv = e.target.result;
      // Process the CSV data here
      const parsedData = parseCSV(csv);
      handleData(parsedData);
    };

    reader.readAsText(file);
  };

  const parseCSV = (csv) => {
    // Implement CSV parsing logic here
    // Example: Splitting CSV lines and extracting data
    const lines = csv.split('\n');
    const data = lines.map(line => line.split(','));
    return data;
  };

  return (
    <div>
      <h2>Upload CSV File</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
    </div>
  );
};

export default CSVUpload;