"use client";
import React from "react";
import Button from "@/app/game/components/Button";
import { useRouter } from "next/navigation";
import HeaderLayout from "../../game/components/HeaderLayout";

const page = () => {
  const router = useRouter();
  const mixedFraction = {
    whole: 3,
    numerator: 2,
    denominator: 4,
  };

  return (
    <div>
      {/* <HeaderLayout mixedFraction={mixedFraction} emoji="😃"/> */}

      <div
        className="flex justify-center items-center mt-6"
        // onClick={() => {router.push('/page5');}}
      >
        <Button text="Step 3" symbol=">>" />
      </div>
    </div>
  );
};

export default page;
