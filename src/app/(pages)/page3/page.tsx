"use client";
import React, { useState } from "react";
import Button from "@/app/game/components/Button";
import HeaderLayout from "../../game/components/HeaderLayout";
import { initialGameState } from "@/app/game/game-state";
import Circle from "@/app/game/components/Circle";
import Image from "next/image";
import { useSliceStore } from "@/store/useSliceStore";

const Page = () => {
  const { slice, setSlice } = useSliceStore();

  // State to track the selected slicer
  const [selectedSlice, setSelectedSlice] = useState<number | null>(null);

  const handleClick = async ({ slices }: { slices: number }) => {
    await setSlice(slices);

    const x = await slice;
    setSelectedSlice(slices); // Update the selected slice
  };

  return (
    <div className="h-screen flex justify-center">
      <div className="w-1/2 rounded-2xl shadow-lg h-full flex flex-col items-center">
        <HeaderLayout
          text = "Wholes to Fractions"
          emoji = "😀"
          whole={initialGameState.state1.mixedFraction.whole}
          num={initialGameState.state1.mixedFraction.numerator}
          denom={initialGameState.state1.mixedFraction.denominator}
          variant="addition"
        />

        {/* Middle Section */}
        <div className="flex justify-center items-center space-x-6 h-[25%] border-t-2 border-b-2 border-[#c0bdbd] w-full">
        <Circle 
          numerator={0} 
          denominator={0} 
          color="#ff6347"   // Color of the filled slices (e.g., tomato red)
          circleColor="#d3ea00"   // Background color of the circle (e.g., light beige)
        />

        <Circle 
          numerator={0} 
          denominator={0} 
          color="#ff6347"   // Color of the filled slices (e.g., tomato red)
          circleColor="#d3ea00"   // Background color of the circle (e.g., light beige)
        />
           <Circle 
          numerator={0} 
          denominator={0} 
          color="#ff6347"   // Color of the filled slices (e.g., tomato red)
          circleColor="#d3ea00"   // Background color of the circle (e.g., light beige)
        />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center h-[55%] w-full bg-[#fff6f6]">
          <div className="text-[1.5vw] mb-2 p-1">Choose your slicer</div>
          <div className="h-[80%] w-[70%] border-2 border-[#807b7b] rounded-lg flex bg-white">
            <div className="w-[70%] flex justify-around h-full items-center">
              <div className="h-[80%] border-2 border-[#807b7b] w-[25%] rounded-lg flex flex-col justify-evenly items-center">
                {/* Image 1 */}
                <div
                  className={`relative border-b-2 border-[#807b7b] h-[30%] w-[80%] flex justify-center items-center`}
                  onClick={() => handleClick({ slices: 4 })}
                >
                  <Image
                    src="/images/red.png"
                    alt="cutter"
                    width={70}
                    height={70}
                    className="cursor-pointer hover:bg-[#98eaf8]"
                  />
                  {selectedSlice === 4 && (
                    <div className="absolute inset-0 border-4 border-blue-500 rounded-lg pointer-events-none" />
                  )}
                </div>
                {/* Image 2 */}
                <div
                  className={`relative border-b-2 border-[#807b7b] h-[30%] w-[80%] flex justify-center items-center`}
                  onClick={() => handleClick({ slices: 3 })}
                >
                  <Image
                    src="/images/blue.png"
                    alt="Blue image"
                    width={70}
                    height={70}
                    className="cursor-pointer hover:bg-[#98eaf8]"
                  />
                  {selectedSlice === 3 && (
                    <div className="absolute inset-0 border-4 border-blue-500 rounded-lg pointer-events-none" />
                  )}
                </div>
                {/* Image 3 */}
                <div
                  className={`relative h-[30%] w-[80%] flex justify-center items-center`}
                  onClick={() => handleClick({ slices: 5 })}
                >
                  <Image
                    src="/images/yellow.png"
                    alt="Yellow image"
                    width={70}
                    height={70}
                    className="cursor-pointer"
                  />
                  {selectedSlice === 5 && (
                    <div className="absolute inset-0 border-4 border-blue-500 rounded-lg pointer-events-none" />
                  )}
                </div>
              </div>

              <div className="h-[80%] w-[60%] flex flex-col justify-evenly">
                <p className="text-[#1b6c95] text-[1vw] font-bold">
                  Slices the pie in 4 pieces
                </p>
                <p className="text-[#1b6c95] text-[1vw] font-bold">
                  Slices the pie in 3 pieces
                </p>
                <p className="text-[#1b6c95] text-[1vw] font-bold">
                  Slices the pie in 5 pieces
                </p>
              </div>
            </div>
            <div className="w-[30%] h-[80%] flex justify-center items-center">
              <Button text="Slice" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
