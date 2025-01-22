"use client";
import React from "react";
import Button from "@/app/game/components/Button";
import { useRouter } from "next/navigation";
import HeaderLayout from "../header";

const page = () => {
  const mixedFraction = {
    whole: 3,
    numerator: 2,
    denominator: 4,
  };
  const router = useRouter();
  return (
    <div>
      <HeaderLayout mixedFraction={mixedFraction} emoji="🤔" path={"/"}/>

      <div
        className="flex justify-center items-center mt-6"
        onClick={() => {
          router.push("/page3");
        }}
      >
        <Button text="Step 2" symbol=">>" />
      </div>
    </div>
  );
};

export default page;
