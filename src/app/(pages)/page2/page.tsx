import React from "react";
import Header from "../../game/components/HeaderLayout";
import { initialGameState } from "@/app/game/game-state";
import Button from "@/app/game/components/Button";

const page = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-between">
      <div className="w-1/2 rounded-2xl shadow-lg flex justify-center h-full">
        <Header
          emoji={"🤔"}
          whole={initialGameState.state1.mixedFraction.whole}
          num={initialGameState.state1.mixedFraction.numerator}
          denom={initialGameState.state1.mixedFraction.denominator}
        />
      </div>

      <Button text={"Step 2"} />
    </div>
  );
};

export default page;
