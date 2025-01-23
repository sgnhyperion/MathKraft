import React from "react";
import MixedFraction from "./MixedFraction";
import Fraction from "./Fraction";
import StepHeader from "./StepHeader";
import { Freckle_Face } from "next/font/google";

const Header = ({ emoji, whole, num, denom }) => {
  return (
    <div className=" w-full flex flex-col justify-around items-center h-[30%] bg-[#fff6f6] pb-6">

      <div className="flex items-center w-1/2 bg-[#ff497c] rounded-lg h-1/2 border-2 border-[#ff497c]">

        {/* level */}
        <div className="w-1/3 h-full border-4 border-[#ff497c] rounded-lg flex flex-col justify-center items-center">
          <div className="text-4xl text-white">Level</div>
          <div className="flex justify-center text-white text-4xl">1</div>
        </div>

        {/* fraction */}
        <div className="w-2/3 h-full bg-white border-4 border-[#ff497c] rounded-lg flex justify-between items-center">
          <div className="flex justify-evenly items-center w-2/3 h-full">
            <MixedFraction color="black" size="text-4xl" whole={whole} num={num} denom={denom} />
            <div className="text-4xl">=</div>
            <Fraction color="black" size="text-4xl" num={"?"} denom={"?"} />
          </div>
          <div className="text-7xl border-l-4 border-[#ff497c] h-full rounded-l-lg flex justify-center items-center w-1/3">{emoji}</div>
        </div>

      </div>

      {/* step */}
      <StepHeader />
    </div>
  );
};

export default Header;
