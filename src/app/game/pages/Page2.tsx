"use client";
import React, { useState } from "react";
import Header from "../components/HeaderLayout";
import { initialGameState } from "@/app/game/game-state";
import Button from "@/app/game/components/Button";
import "@fortawesome/fontawesome-free/css/all.min.css";
import MixedFraction from "@/app/game/components/MixedFraction";
import Fraction from "@/app/game/components/Fraction";

interface FractionTile {
  whole: number;
  numerator: number;
  denominator: number;
}

interface DropZone {
  whole?: number;
  fraction?: { numerator: number; denominator: number };
}
const page = () => {
  const { mixedFraction } = initialGameState.state1;

  const [dropZone, setDropZone] = useState<DropZone>({});

  const handleDragStart = (e: React.DragEvent, type: "whole" | "fraction") => {
    const dragData = {
      type,
      whole: type === "whole" ? mixedFraction.whole : undefined,
      numerator: type === "fraction" ? mixedFraction.numerator : undefined,
      denominator: type === "fraction" ? mixedFraction.denominator : undefined,
    };
    e.dataTransfer.setData("application/json", JSON.stringify(dragData));
  };

  const handleDrop = (e: React.DragEvent, zone: "whole" | "fraction") => {
    e.preventDefault();
    try {
      const data = JSON.parse(e.dataTransfer.getData("application/json"));

      if (zone === "whole" && data.type === "whole") {
        setDropZone((prev) => ({ ...prev, whole: data.whole }));
      } else if (zone === "fraction" && data.type === "fraction") {
        setDropZone((prev) => ({
          ...prev,
          fraction: {
            numerator: data.numerator,
            denominator: data.denominator,
          },
        }));
      }
    } catch (error) {
      console.error("Error parsing drag data:", error);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className="h-screen flex flex-col items-center justify-between">
      <div className="w-1/2 rounded-2xl shadow-lg flex flex-col items-center h-full">
        <Header
          text="Sum of Wholes & Fractions"
          emoji={"🤔"}
          whole={initialGameState.state1.mixedFraction.whole}
          num={initialGameState.state1.mixedFraction.numerator}
          denom={initialGameState.state1.mixedFraction.denominator}
        />

        {/* middle */}
        <div className="flex w-full h-[40%] gap-8 border-t-2 border-b-2 border-[#c0bdbd]">
          {/* left */}
          <div className="w-[40%] bg-[#ffe8e8] h-full flex flex-col justify-around items-center">
            <div className="flex gap-2 h-[80%] w-full items-center justify-center">
              {/* Whole */}
              <div
                className="cursor-move h-[22%] flex items-center justify-center w-1/6 "
                draggable
                onDragStart={(e) => handleDragStart(e, "whole")}
              >
                <div className="text-6xl bg-white  text-green-600 border border-black w-[90%] h-full flex justify-center shadow-[-3px_3px_0px_black]">
                  3
                </div>
              </div>

              {/* Fraction  */}
              <div
                className="cursor-move h-1/2 flex items-center justify-center w-1/6"
                draggable
                onDragStart={(e) => handleDragStart(e, "fraction")}
              >
                <div className="border border-black h-full px-2 shadow-[-2px_2px_0px_black] pt-1 w-[90%] flex flex-col items-center justify-around bg-white">
                  <div className="text-6xl  text-purple-600">
                    {mixedFraction.numerator}
                  </div>
                  <div className="w-[90%] h-1 bg-black"></div>
                  <div className="text-6xl  text-purple-600">
                    {mixedFraction.denominator}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-[#f54f7b] text-2xl">pick from here</div>
          </div>

          {/* right */}
          <div className="w-[50%] p-4 bg-[#ffffff] h-full">
            <div
              className="border-2 border-green-600 p-1.5 rounded-lg h-[35%] flex"
              onDrop={(e) => handleDrop(e, "whole")}
              onDragOver={handleDragOver}
            >
              <div className="text-green-600 text-3xl h-full w-1/2 p-2">
                WHOLES
              </div>
              {dropZone.whole && (
                <div className="text-5xl text-green-600 flex justify-center items-center h-full">
                  {dropZone.whole}
                </div>
              )}
            </div>

            <div className="text-4xl text-center">+</div>
            <div
              className="border-2 border-[#a54dd7] p-1.5 rounded-lg h-[40%] flex"
              onDrop={(e) => handleDrop(e, "fraction")}
              onDragOver={handleDragOver}
            >
              <div className="text-[#a54dd7] text-3xl w-1/2  p-2 ">
                FRACTION
              </div>
              {dropZone.fraction && (
                <div className=" flex flex-col  h-full w-1/2 ">
                  <div className="text-5xl text-[#a54dd7]">
                    {dropZone.fraction.numerator}
                  </div>

                  <div className="border-t-2 border-[#a54dd7] w-6"></div>

                  <div className="text-5xl text-[#a54dd7]">
                    {dropZone.fraction.denominator}
                  </div>
                </div>
              )}
            </div>
            <div className="text-[#f54f7b] mt-4 flex justify-center text-2xl">
              drop here
            </div>
          </div>
        </div>

        {/* bottom */}

        <div className="h-[30%] bg-[#fff6f6] flex items-center justify-center w-full">
          <div className="flex flex-col items-center gap-8">
            <div className="text-5xl tracking-wide flex items-center bg-[#ffffff] p-2">
              <MixedFraction
                color="text-[#ff497c]"
                size="text-5xl"
                whole={initialGameState.state1.mixedFraction.whole}
                num={initialGameState.state1.mixedFraction.numerator}
                denom={initialGameState.state1.mixedFraction.denominator}
              />
              <div className="mx-4 text-pink-500 font-bold">=</div>
              <div className="text-green-600 font-bold">3 wholes</div>
              <div className="mx-2 text-[#ff497c] font-bold">+</div>
              <Fraction
                color="text-[#ff497c]"
                size="text-5xl"
                num={initialGameState.state1.mixedFraction.numerator}
                denom={initialGameState.state1.mixedFraction.denominator}
              />
            </div>

            <Button text={"Step 2"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
