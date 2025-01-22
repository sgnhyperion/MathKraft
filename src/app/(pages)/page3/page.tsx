"use client"
import React from 'react'
import Button from '@/app/game/components/Button'
import { useRouter } from "next/navigation";
import HeaderLayout from '../header';


const page = () => {
  const router = useRouter();
  const mixedFraction = {
    whole: 3,
    numerator: 2,
    denominator: 4,
  };
  return (

    <div>
      <HeaderLayout mixedFraction={mixedFraction} emoji="😃" path={"/page2"}/>

      <div className="flex justify-center items-center mt-6"
        onClick={() => {router.push('/page4');}}
        >
        <Button text='Slice'/>
      </div>
    </div>
  )
}

export default page