import React from 'react';


const MixedFraction = ({whole, num, denom, size}) => {
  return (
    <div className="flex items-center space-x-4 ">
      <span className={`${size} font-bold`}>{whole}</span>
      <div className="flex flex-col items-center">
        <div className={`${size} font-bold`}>{num}</div>
        <div className="border-2 border-black w-8"></div>
        <div className={`${size} font-bold`}>{denom}</div>
      </div>
    </div>
  );
};

export default MixedFraction;

