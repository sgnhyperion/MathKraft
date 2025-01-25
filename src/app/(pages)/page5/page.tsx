"use client";
import React, { useState } from "react";
import HeaderLayout from "../../game/components/HeaderLayout";
import { initialGameState } from "@/app/game/game-state";
import Circle from "@/app/game/components/Circle";
import Fraction from "@/app/game/components/Fraction";
import { Input } from "@/components/ui/input";
import { useSliceStore } from "@/store/useSliceStore";
import { useGameState } from "@/app/game/state-utils";
import { nextStep } from "@/app/game/utils/helper";
import { useSoundEffects } from "@/app/game/utils/sound";
import SuccessAnimation from "@/app/game/components/SuccessAnimation";

const page = () => {
  const mixedFraction = {
    whole: initialGameState.state1.mixedFraction.whole,
    numerator: initialGameState.state1.mixedFraction.numerator,
    denominator: initialGameState.state1.mixedFraction.denominator,
  };

  const { slice } = useSliceStore();
  const [num, setNum] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);

  const { gameStateRef, setGameStateRef } = useGameState();

  const handleChange = async (e) => {
    const { name, value } = e.target;
    await setNum(value);
  };

  const handleClick = () => {
    const soundEffects = useSoundEffects();
    soundEffects.join.play();
    if(Number(num) === 2){
      setShowAnimation(true);
      // Optional: Add a slight delay before calling nextStep
      setTimeout(() => {
        nextStep('first', setGameStateRef);
      }, 3000);
    } else {
      nextStep('first', setGameStateRef);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-between">
    {showAnimation && <SuccessAnimation onComplete={() => setShowAnimation(false)} />}
      <div className="w-1/2 rounded-2xl shadow-lg flex flex-col items-center h-full">
        <HeaderLayout
          text="ADD THE FRACTION"
          emoji="🤩"
          whole={mixedFraction.whole}
          num={mixedFraction.numerator}
          denom={mixedFraction.denominator}
          variant="improper"
          additionalFractions={[
            {
              num: mixedFraction.whole * mixedFraction.denominator,
              denom: mixedFraction.denominator,
            },
            {
              operator: "+",
              num: mixedFraction.numerator,
              denom: mixedFraction.denominator,
            },
          ]}
        />

        <div className="h-[60%] border-t-2 border-b-2 border-[#c0bdbd] w-full flex justify-center items-center">
          {/* Left */}
          <div className="w-[60%] h-full flex flex-col items-center justify-center">
            <div className="flex items-center justify-evenly w-full ">
              <Circle
                numerator={slice || 4}
                denominator={slice || 4}
                color="#98d400"
                circleColor="#d3ea00"
              />
              <Circle
                numerator={slice || 4}
                denominator={slice || 4}
                color="#98d400"
                circleColor="#d3ea00"
              />
              <Circle
                numerator={slice || 4}
                denominator={slice || 4}
                color="#98d400"
                circleColor="#d3ea00"
              />
            </div>

            <div className="w-[100%] flex justify-center">
              <div className="flex items-center w-[80%]">
                <div
                  className="h-4 bg-black w-1"
                  style={{ width: "2px" }}
                ></div>
                <div className="h-1 bg-black mt-3 w-[50%] flex-grow"></div>
                <Fraction
                  color="black"
                  size="text-2xl"
                  num={mixedFraction.whole * (slice || 4)}
                  denom={slice || 4}
                />
                <div className="h-1 bg-black mt-3 w-[50%] flex-grow"></div>
                <div
                  className="h-4 bg-black w-1"
                  style={{ width: "2px" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="text-[3vw] font-bold p-2 h-full flex items-center">
            +
          </div>

          {/* Right */}
          <div className="w-[40%] border-l-2 border-[#c0bdbd] h-full flex flex-col justify-evenly items-center bg-[#ffd9d9]">
            <div className="text-[1.8vw] text-[#ff2763]">Select 2/{slice || 4}ths here</div>
            <Circle
              numerator={num}
              denominator={slice || 4}
              color="#d3ea00"
              circleColor="#98d400"
            />

            {/* Divider */}
            <div className="relative w-full max-w-xs flex justify-center">
              <div className="flex items-center justify-center w-full">
                <div
                  className="h-4 bg-black w-1"
                  style={{ width: "2px" }}
                ></div>
                <div className="h-1 bg-black mt-3 w-[12%]"></div>

                <div className="flex flex-col items-center justify-evenly mx-2 bg-white w-10 mt-2 h-[5vw]">
                    <Input placeholder="0" onChange={(e) => handleChange(e)} />
                    <div className="w-[2vw] bg-black h-[0.2rem]"></div>
                    <div className="text-[2vw] w-full flex justify-center h-[55%]">{slice || 4}</div>
                </div>
                <div className="h-1 bg-black mt-3 w-[12%]"></div>
                <div
                  className="h-4 bg-black w-1"
                  style={{ width: "2px" }}
                ></div>

              </div>
            </div>
            
            {/* Button */}
            <button className="relative group border border-black transform shadow-[2px_2px_0px_0px_black]"
              onClick={handleClick}
              >
                <div className="bg-[#f54f7b]  border-[#f54f7b] px-8 py-2 transform transition-transform duration-100 group-active:translate-x-1 group-active:translate-y-1">
                <div className="flex items-center space-x-2">
                    <span className="text-4xl font-normal text-white">Done</span>
                </div>
                </div>
              <div className="absolute -bottom-2 -left-2 bg-black w-full h-full -z-10" />
          </button>


          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
