import React from "react"
import MixedFraction from "./MixedFraction"
import Fraction from "./Fraction"
import StepHeader from "./StepHeader"
import { initialGameState } from "../game-state"

interface HeaderProps {
  text: string
  emoji: string
  whole: number | string
  num: number | string
  denom: number | string
  variant?: "question" | "addition" | "improper"
  additionalFractions?: Array<{
    operator?: string
    whole?: number | string
    num: number | string
    denom: number | string
  }>
}

const Header = ({ text, emoji, whole, num, denom, variant = "question", additionalFractions = [] }: HeaderProps) => {
  const renderFractionPart = () => {
    switch (variant) {
      case "question":
        return (
          <>
            <MixedFraction color="black" size="text-4xl" whole={whole} num={num} denom={denom} />
            <div className="text-4xl">=</div>
            <Fraction color="black" size="text-4xl" num="?" denom="?" />
          </>
        )
      case "addition":
        return (
          <>
            <MixedFraction color="black" size="text-4xl" whole={whole} num={num} denom={denom} />
            <div className="text-4xl">=</div>
            <Fraction color="black" size="text-4xl" num={initialGameState.state1.mixedFraction.whole} />
            <div className="text-4xl">+</div>
            <Fraction color="black" size="text-4xl" num={num} denom={denom} />
          </>
        )
      case "improper":
        return (
          <>
            <MixedFraction color="black" size="text-4xl" whole={whole} num={num} denom={denom} />
            <div className="text-4xl">=</div>
            {additionalFractions.map((fraction, index) => (
              <React.Fragment key={index}>
                {fraction.operator && <div className="text-4xl">{fraction.operator}</div>}
                <Fraction color="black" size="text-4xl" num={fraction.num} denom={fraction.denom} />
              </React.Fragment>
            ))}
          </>
        )
      default:
        return null
    }
  }

  return (
    <div className="w-full flex flex-col justify-around items-center h-[30%] bg-[#fff6f6] pb-6">
      <div className="flex items-center w-1/2 bg-[#ff497c] rounded-lg h-1/2 border-2 border-[#ff497c]">
        {/* level */}
        <div className="w-1/3 h-full border-4 border-[#ff497c] rounded-lg flex flex-col justify-center items-center">
          <div className="text-4xl text-white">Level</div>
          <div className="flex justify-center text-white text-4xl">1</div>
        </div>

        {/* fraction */}
        <div className="w-2/3 h-full bg-white border-4 border-[#ff497c] rounded-lg flex justify-between items-center">
          <div className="flex justify-evenly items-center w-2/3 h-full gap-2">{renderFractionPart()}</div>
          <div className="text-[3.5vw] border-l-4 border-[#ff497c] h-full rounded-l-lg flex justify-center items-center w-1/3">
            {emoji}
          </div>
        </div>
      </div>

      {/* step */}
      <StepHeader text={text} />
    </div>
  )
}

export default Header

