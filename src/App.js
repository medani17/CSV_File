// App.js
import React, { useState } from 'react';
import CSVUpload from './components/CSVUpload';
import DataTable from './components/DataTable';
import PricingCalculator from './components/PricingCalculator';
import CSV from './components/CSV';

const App = () => {
  const [data, setData] = useState([]);
  const basePrice = 100;
  const pricePerCreditLine = 10;
  const pricePerCreditScorePoint = 0.1;

  const handleData = (parsedData) => {
    setData(parsedData);
  };

  return (
    <div className="App">
      <h1>CSV Upload and Pricing Calculator</h1>
      <CSVUpload handleData={handleData} />
      <CSV/>
      {data.length > 0 && (
        <>
          <DataTable data={data} />
          <PricingCalculator
            data={data}
            basePrice={basePrice}
            pricePerCreditLine={pricePerCreditLine}
            pricePerCreditScorePoint={pricePerCreditScorePoint}
          />
        </>
      )}
    </div>
  );
};

export default App;