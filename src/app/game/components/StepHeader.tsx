import React from 'react'

const StepHeader = () => {
  return (
    <div className='flex justify-around items-center w-[60%] h-1/4'>
      <div className='text-4xl text-[#ff497c] border-8 border-[#ff497c] h-full flex justify-center items-center w-[20%]'>Step 1</div>
      <div className='text-4xl text-white bg-[#ff497c] h-full flex justify-center items-center w-[70%] shadow-md'>Sum of Wholes & Fractions</div>
    </div>
  )
}

export default StepHeader
