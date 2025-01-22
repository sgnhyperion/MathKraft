import React from 'react';
import { initialGameState } from '../game-state';

const MixedFraction = ({size}) => {
  return (
    <div className="flex items-center space-x-4 mr-7 ml-4">
      <span className={`${size} font-bold`}>{initialGameState.state1.mixedFraction.whole}</span>
      <div className="flex flex-col items-center">
        <div className={`${size} font-bold`}>{initialGameState.state1.mixedFraction.numerator}</div>
        <div className="border-2 border-black w-8"></div>
        <div className={`${size} font-bold`}>{initialGameState.state1.mixedFraction.denominator}</div>
      </div>
    </div>
  );
};

export default MixedFraction;

