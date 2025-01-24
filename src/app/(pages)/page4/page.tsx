"use client";
import React from "react";
import Button from "@/app/game/components/Button";
import HeaderLayout from "../../game/components/HeaderLayout";
import { initialGameState } from "@/app/game/game-state";
import Circle from "@/app/game/components/Circle";
import { useSliceStore } from "@/store/useSliceStore";

const page = () => {
  const { slice, setSlice } = useSliceStore();

  return (
    <div className="h-screen flex flex-col items-center justify-between">
      <div className="w-1/2 rounded-2xl shadow-lg flex flex-col justify-center h-full">
        <HeaderLayout
          text="ADD THE FRACTION"
          emoji = "😀"
          whole={initialGameState.state1.mixedFraction.whole}
          num={initialGameState.state1.mixedFraction.numerator}
          denom={initialGameState.state1.mixedFraction.denominator}
          variant="addition"
        />

        {/* Middle Section */}
        {/* Middle Section */}
        <div className="flex justify-center items-center space-x-6 h-[25%] border-t-2 border-b-2 border-[#c0bdbd] w-full">
        <Circle 
          numerator={slice || 4} 
          denominator={slice || 4} 
          color="#98d400"   // Color of the filled slices (e.g., tomato red)
          circleColor="#d3ea00"   // Background color of the circle (e.g., light beige)
        />

        <Circle 
          numerator={1} 
          denominator={slice || 4} 
          color="#d3ea00"   // Color of the filled slices (e.g., tomato red)
          circleColor="#98d400"   // Background color of the circle (e.g., light beige)
        />
           <Circle 
          numerator={slice || 4} 
          denominator={slice || 4}
          color="#d3ea00"   // Color of the filled slices (e.g., tomato red)
          circleColor="#d3ea00"   // Background color of the circle (e.g., light beige)
        />
        </div>
        <Button text="Step 3" symbol=">>" />

      </div>
    </div>
  );
};

export default page;
