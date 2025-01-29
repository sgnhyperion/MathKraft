const StepHeader = ({text}) => {
  return (
    <div className='flex justify-center gap-2 items-center w-[100%] h-1/4'>
      <div className='text-[2vw] text-[#ff497c] border-8 border-[#ff497c] h-full flex justify-center items-center w-[12%]'>Step 1</div>
      <div className='text-[2vw] text-white bg-[#ff497c] h-full flex justify-center items-center w-[50%] shadow-md'>{text}</div>
    </div>
  )
}

export default StepHeader
