// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const StatisticsCard = ({ imageSrc, altText, value, label }) => {
  return (
    <div className="flex items-center flex-col">
      <img src={imageSrc} alt={altText} className="w-16 h-16 mb-2" />
      <div className="grid">
        <p className="text-lg font-bold">{value}</p>
        <p className="text-sm">{label}</p>
      </div>
    </div>
  );
};

export default StatisticsCard;
