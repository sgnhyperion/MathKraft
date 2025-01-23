import React from 'react'

const Fraction = ({color, size, num, denom}) => {
  return (
    <div className=" flex flex-col items-center h-full justify-center">
        <div className={`${size} ${color} font-bold `}>{num}</div>
        <div className="border-t border-black border-2 w-7 "></div>
        <div className={`${size} ${color} font-bold`}>{denom}</div>
    </div>
  )
}

export default Fraction
