import React from "react";
import MixedFraction from "../game/components/MixedFraction";
import Fraction from "../game/components/Fraction";
import Button from "../game/components/Button";

interface Header {
  mixedFraction?: {
    whole?: number;
    numerator: number;
    denominator: number;
  };
  emoji?: string;
  path?: string;
}

export default function HeaderLayout({
  mixedFraction = { whole: 3, numerator: 2, denominator: 4 } ,
  emoji,
}) {

  return (
    <div className="bg-[#fff6f6]">
      <div>
      </div>
      <header className="p-4">
        <div className="mb-8 flex justify-center items-center">
          <div className="flex justify-center items-center border-2 border-[#f54f7b] rounded-lg bg-[#f54f7b]">
            <div className="border-spacing-0 border-[#f54f7b] rounded-lg bg-[#f54f7b] h-28 w-20 flex justify-center items-center">
              <span className="font-bold text-2xl flex flex-col text-white">
                Level
                <div className="flex justify-center text-white">1</div>
              </span>
            </div>
            <div className="bg-white text-black h-28 flex items-center justify-center border-4 border-[#f54f7b] rounded-lg">
              <MixedFraction size="text-4xl"/>
              <div className="text-4xl">=</div>
              <Fraction size="text-4xl" num="?" denom="?" />
              <div className="h-28 flex justify-center items-center bg-white border-l-4 border-t-4 border-b-4 border-[#f54f7b] rounded-lg w-24">
                <span className="text-7xl">{emoji}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
