import React from 'react'

const Fraction = ({color, size, num, denom=null}) => {
  return (
    <div className=" flex flex-col items-center h-full justify-center">
        <div className={`${size} ${color} font-bold `}>{num}</div>
        {denom && <div className="border-t-2 border-[#a54dd7] w-6"></div>}
        {denom && <div className={`${size} ${color} font-bold `}>{denom}</div>}
    </div>
  )
}

export default Fraction
