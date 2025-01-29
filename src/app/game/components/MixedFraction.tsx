const MixedFraction = ({color, whole, num, denom, size}) => {
  return (
    <div className="flex items-center space-x-2 ">
      <span className={`${size} ${color} font-bold`}>{whole}</span>
      <div className="flex flex-col items-center">
        <div className={`${size} ${color} font-bold`}>{num}</div>
        <div className="border-2 border-black w-8"></div>
        <div className={`${size} ${color} font-bold`}>{denom}</div>
      </div>
    </div>
  );
};

export default MixedFraction;

