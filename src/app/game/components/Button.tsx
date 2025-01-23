import React from "react";
import { useSoundEffects } from "../utils/sound";
import { useGameState } from '../state-utils';
import { nextStep } from '../utils/helper';
// import { step } from "../game-state";
const Button = ({ text, symbol=null }) => {

  const { gameStateRef, setGameStateRef } = useGameState();
  const { step } = gameStateRef.current.state1;

  const handleClick = () => {
    const soundEffects = useSoundEffects();
    soundEffects.join.play();
    nextStep('first', setGameStateRef);
    console.log(step);
  }
  if(!symbol){
    return (
      <button className="relative group border border-black transform shadow-[2px_2px_0px_0px_black]"
        onClick={handleClick}
      >
              <div className="bg-[#f54f7b]  border-[#f54f7b] px-8 py-2 transform transition-transform duration-100 group-active:translate-x-1 group-active:translate-y-1">
              <div className="flex items-center space-x-2">
                  <span className="text-4xl font-normal text-white">{text}</span>
              </div>
              </div>
          
              <div className="absolute -bottom-2 -left-2 bg-black w-full h-full -z-10" />
          </button>
    ); 
  } else {
    return (
      <button className="relative group border transform"
        onClick={handleClick}
      >
        <div className="bg-white border-8 border-[#f54f7b] px-8 py-2 transform transition-transform duration-100 group-active:translate-x-1 group-active:translate-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-4xl text-[#ff497c]">{text}</span>
            <span className="text-4xl text-[#ff497c]">{symbol}</span>
          </div>
        </div>
        <div className="absolute -bottom-2 -left-2 bg-black w-full h-full -z-10" />
      </button>
    );
  }
};

export default Button;