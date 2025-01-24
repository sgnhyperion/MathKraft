"use client";
import React from "react";
import Button from "@/app/game/components/Button";
import HeaderLayout from "../../game/components/HeaderLayout";
import { initialGameState } from "@/app/game/game-state";

const page = () => {
  const mixedFraction = {
    whole: initialGameState.state1.mixedFraction.whole,
    numerator: initialGameState.state1.mixedFraction.numerator,
    denominator: initialGameState.state1.mixedFraction.denominator,
  };
  return (
    <div className="h-screen flex flex-col items-center justify-between">
      <div className="w-1/2 rounded-2xl shadow-lg flex justify-center h-full">
      <HeaderLayout
          text="Step 3"
          emoji="🤩"
          whole={mixedFraction.whole}
          num={mixedFraction.numerator}
          denom={mixedFraction.denominator}
          variant="improper"
          additionalFractions={[
            { num: mixedFraction.whole*mixedFraction.denominator, denom: mixedFraction.denominator },
            { operator: "+", num: mixedFraction.numerator, denom: mixedFraction.denominator }
          ]}
        />
      </div>
        <Button text="Done" />
    </div>
  );
};

export default page;
