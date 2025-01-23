"use client";
import React from "react";
import Button from "@/app/game/components/Button";
import HeaderLayout from "../../game/components/HeaderLayout";

const page = () => {
  const mixedFraction = {
    whole: 3,
    numerator: 2,
    denominator: 4,
  };
  return (
    <div>
      {/* <HeaderLayout mixedFraction={mixedFraction} emoji="🤩"/> */}

      <div className="flex justify-center items-center mt-6">
        <Button text="Done" />
      </div>
    </div>
  );
};

export default page;
