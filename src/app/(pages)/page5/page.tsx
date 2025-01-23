"use client";
import React from "react";
import Button from "@/app/game/components/Button";
import HeaderLayout from "../../game/components/HeaderLayout";
import { initialGameState } from "@/app/game/game-state";

const page = () => {
  const mixedFraction = {
    whole: 3,
    numerator: 2,
    denominator: 4,
  };
  return (
    <div className="h-screen flex flex-col items-center justify-between">
      <div className="w-1/2 rounded-2xl shadow-lg flex justify-center h-full">
        <HeaderLayout
          emoji={"🤔"}
          whole={initialGameState.state1.mixedFraction.whole}
          num={initialGameState.state1.mixedFraction.numerator}
          denom={initialGameState.state1.mixedFraction.denominator}
        />
      </div>
        <Button text="Done" />
    </div>
  );
};

export default page;
