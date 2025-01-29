import React from "react";
import Button from "../components/Button";
import MixedFraction from "../components/MixedFraction";
import Fraction from "@/app/game/components/Fraction";
import { initialGameState } from "@/app/game/game-state";

export default function Page1() {
  return (
    <div className="flex justify-center min-h-screen w-full p-4 bg-[#fff6f6]">
      <div className="w-full max-w-4xl flex flex-col items-center bg-[#fff6f6] rounded-2xl shadow-lg p-4">
        <div className="mt-8 sm:mt-12 bg-[#ebfb3e] p-3 sm:p-4 border border-black transform shadow-[4px_4px_0px_0px_black] sm:shadow-[8px_8px_0px_0px_black] mb-8 sm:mb-14 mx-4 sm:mx-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-jersey">
            Mixed number to improper fraction
          </h1>
        </div>

        <div className="border-[4px] sm:border-[6px] border-[#f54f7b] w-full sm:w-[90%] md:w-[80%] lg:w-[70%] aspect-[3/1] mb-8">
          <div className="flex items-stretch w-full h-full">
            <div className="flex items-center justify-center border-2 sm:border-4 border-[#f54f7b] w-[30%] text-xl sm:text-2xl md:text-3xl lg:text-4xl border-r-[4px] sm:border-r-[6px] text-[#f54f7b]">
              Level 1
            </div>

            <div className="w-[70%] border-2 sm:border-4 border-[#f54f7b] flex items-center justify-center p-2">
              <div className="flex items-center justify-around space-x-2 w-full">
                <MixedFraction
                  color="black"
                  whole={initialGameState.state1.mixedFraction.whole}
                  num={initialGameState.state1.mixedFraction.numerator}
                  denom={initialGameState.state1.mixedFraction.denominator}
                  size={"text-2xl sm:text-3xl md:text-4xl lg:text-5xl"}
                />
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                  =
                </div>
                <Fraction
                  color="black"
                  size={"text-2xl sm:text-3xl md:text-4xl lg:text-5xl"}
                  num={"?"}
                  denom={"?"}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-4">
          <Button text="START" symbol=">>" />
        </div>
      </div>
    </div>
  );
}
