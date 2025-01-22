"use client"
import React from 'react'
import Button from '@/app/game/components/Button'
import HeaderLayout from '../header';


const page = () => {
  const mixedFraction = {
    whole: 3,
    numerator: 2,
    denominator: 4,
  };
  return (
    <div>
    <HeaderLayout mixedFraction={mixedFraction} emoji="🤩" path={"page4"}/>

    <div className="flex justify-center items-center mt-6"
    >
    <Button text='Done' symbol='&gt;&gt;'/>
    </div>
    </div>
  )
}

export default page