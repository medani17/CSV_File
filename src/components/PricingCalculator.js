// components/PricingCalculator.js
import React from 'react';

const PricingCalculator = ({ data, basePrice, pricePerCreditLine, pricePerCreditScorePoint }) => {
  const calculatePrice = (creditScore, creditLines) => {
    return basePrice + (pricePerCreditLine * creditLines) + (pricePerCreditScorePoint * creditScore);
  };

  return (
    <div>
      <h3>Subscription Pricing</h3>
      <ul>
        {data.map((row, index) => (
          <li key={index}>
            User {index + 1}: ${calculatePrice(row.CreditScore, row.CreditLines)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCalculator;