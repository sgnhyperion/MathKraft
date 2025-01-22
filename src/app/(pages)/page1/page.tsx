"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Button from "../../game/components/Button";
import MixedFraction from "../../game/components/MixedFraction";
import Fraction from "@/app/game/components/Fraction";
export default function Page1() {
  const router = useRouter();
  return (
    <div className="flex justify-center h-screen bg-[#fff6f6]">
      <div className="mt-20 w-1/3 flex flex-col items-center">
        <div className="bg-[#ebfb3e] p-4 border border-black transform shadow-[8px_8px_0px_0px_black] mb-14 mx-10">
          <h1 className="text-4xl text-center font-jersey">
            Mixed number to improper fraction
          </h1>
        </div>

        <div className="border-[6px] border-[#f54f7b] h-[25%] w-[95%]">
          <div className="flex items-center justify-center w-full h-full">
            <div className="flex items-center justify-center border-4 border-[#f54f7b] w-[30%] h-full text-4xl border-r-[6px] text-[#f54f7b]">
              Level 1
            </div>

            <div className="w-[70%] h-full border-4 border-[#f54f7b] flex items-center justify-center">
              <div className="flex items-center justify-around space-x-2 w-[80%] h-full ">
                <MixedFraction size={"text-6xl"} />
                <div className="text-6xl font-bold">=</div>
                <Fraction size={"text-6xl"} num={"?"} denom={"?"} />
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex justify-center items-center mt-6"
          // onClick={() => {
          //   router.push("/page2");
          // }}
        >
          <Button text="START" symbol=">>" />
        </div>
      </div>
    </div>
  );
}
