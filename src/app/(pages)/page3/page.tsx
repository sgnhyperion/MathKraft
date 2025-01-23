"use client";
import React from "react";
import Button from "@/app/game/components/Button";
import HeaderLayout from "../../game/components/HeaderLayout";
import { initialGameState } from "@/app/game/game-state";
import Circle from "@/app/game/components/Circle";
import Slicer from "@/app/game/components/Slicer";
import Image from "next/image";
import { useSliceStore } from "@/store/useSliceStore";

const page = () => {
  const { slice, setSlice } = useSliceStore();

  const handleClick = async ({ slices }: { slices: number }) => {
    await setSlice(slices);
  };
  
  return (
    <div className="h-screen flex justify-center">
      <div className="w-1/2 rounded-2xl shadow-lg h-full flex flex-col items-center">
        <HeaderLayout
          text="Wholes to Fractions"
          emoji={"🤔"}
          whole={initialGameState.state1.mixedFraction.whole}
          num={initialGameState.state1.mixedFraction.numerator}
          denom={initialGameState.state1.mixedFraction.denominator}
        />

        {/* middle */}
        <div className="flex justify-center items-center space-x-6 h-[25%] border-t-2 border-b-2 border-[#c0bdbd] w-full ">
          <Circle />
          <Circle />
          <Circle />
        </div>

        {/* bottom */}
        <div className="flex flex-col items-center h-[55%] w-full bg-[#fff6f6]">
          <div className="text-[1.5vw] mb-2 p-1">Choose your slicer</div>
          <div className="h-[80%] w-[70%] border-2 border-[#807b7b] rounded-lg flex bg-white">
            <div className="w-[70%] flex justify-around h-full items-center">
              
              <div className="h-[80%] border-2 border-[#807b7b] w-[25%] rounded-lg flex flex-col justify-evenly items-center">
                <div className="border-b-2 border-[#807b7b] h-[30%] w-[80%] flex justify-center items-center "
                  onClick={()=>handleClick(4)}
                >
                  <Image src="/images/red.png" alt="cutter" width={70} height={70} className="cursor-pointer hover:bg-[#98eaf8]"/>
                </div>
                <div className="border-b-2 border-[#807b7b] h-[30%] w-[80%] flex justify-center items-center"
                  onClick={()=>handleClick(3)}
                >
                  <Image src="/images/blue.png" alt="Blue image" width={70} height={70} className="cursor-pointer hover:bg-[#98eaf8]"/>
                </div>
                <div className=" h-[30%] w-[80%] flex justify-center items-center"
                  onClick={()=>handleClick(5)}
                >
                  <Image src="/images/yellow.png" alt="Yellow image" width={70} height={70} className="cursor-pointer "/>
                </div>
              </div>

              <div className="h-[80%] w-[60%]  flex flex-col justify-evenly ">
                <p className="text-[#1b6c95] text-[1vw] font-bold">SLices the pie in 4 pieces</p>
                <p className="text-[#1b6c95] text-[1vw] font-bold">Slices the pie in 3 pieces</p>
                <p className="text-[#1b6c95] text-[1vw] font-bold">Slices the pie in 5 pieces</p>
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

export default page;
