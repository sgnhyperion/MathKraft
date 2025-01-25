import { Button } from "@/components/ui/button"
import type { GameScreen, GameState } from "../game-state"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useGameState } from "../state-utils"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export const DevHelper = () => {
  const { gameStateRef, setGameStateRef } = useGameState()
  const { screen } = gameStateRef.current
  const { step: step1 } = gameStateRef.current.state1
  const { step: step2 } = gameStateRef.current.state2
  const { step: step3 } = gameStateRef.current.state3
  const [directStep, setDirectStep] = useState("")

  const getCurrentStep = () => {
    switch (screen) {
      case "first":
        return step1
      case "second":
        return step2
      case "third":
        return step3
      default:
        return 0
    }
  }

  const handleDirectStepChange = () => {
    const stepNumber = Number.parseInt(directStep)
    if (!isNaN(stepNumber)) {
      goToStep(screen, setGameStateRef, stepNumber)
    }
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-4 p-2 space-y-4 sm:space-y-0 sm:space-x-4">
      <Button className="w-full sm:w-auto" onClick={() => prevStep(screen, setGameStateRef)}>
        Previous Step
      </Button>
      <div className="w-full sm:w-auto">
        <Select
          value={screen}
          onValueChange={(selectedScreen) => {
            setGameStateRef((prev) => ({ ...prev, screen: selectedScreen as GameScreen }))
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a screen" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="first">First Screen</SelectItem>
            <SelectItem value="second">Second Screen</SelectItem>
            <SelectItem value="third">Third Screen</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center w-full sm:w-auto">
        <Input
          type="number"
          value={directStep}
          category="header"
          onChange={(e) => setDirectStep(e.target.value)}
          className="w-16 mr-2"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleDirectStepChange()
            }
          }}
          placeholder="Step"
        />
        <Button onClick={handleDirectStepChange}>Go to Step</Button>
      </div>
      <Button className="w-full sm:w-auto" onClick={() => nextStep(screen, setGameStateRef)}>
        Next Step
      </Button>
      <Button className="w-full sm:w-auto" onClick={() => goToScreen(screen, setGameStateRef)}>
        Go to Screen
      </Button>
    </div>
  )
}

export const nextStep = (
  screen: GameScreen,
  setGameStateRef: (newState: (prevState: GameState) => GameState) => void,
) => {
  if (screen === "first") {
    setGameStateRef((prev) => ({
      ...prev,
      state1: { ...prev.state1, step: prev.state1.step >= 5 ? 1 : prev.state1.step + 1 },
    }))
  } else if (screen === "second") {
    setGameStateRef((prev) => ({ ...prev, state2: { ...prev.state2, step: prev.state2.step + 1 } }))
  } else if (screen === "third") {
    setGameStateRef((prev) => ({ ...prev, state3: { ...prev.state3, step: prev.state3.step + 1 } }))
  }
}

export const goToStep = (
  screen: GameScreen,
  setGameStateRef: (newState: (prevState: GameState) => GameState) => void,
  step: number,
) => {
  if (screen === "first") {
    setGameStateRef((prev) => ({ ...prev, state1: { ...prev.state1, step } }))
  } else if (screen === "second") {
    setGameStateRef((prev) => ({ ...prev, state2: { ...prev.state2, step } }))
  } else if (screen === "third") {
    setGameStateRef((prev) => ({ ...prev, state3: { ...prev.state3, step } }))
  }
}

export const goToScreen = (
  screen: GameScreen,
  setGameStateRef: (newState: (prevState: GameState) => GameState) => void,
) => {
  setGameStateRef((prev) => ({ ...prev, screen }))
}

export const prevStep = (
  screen: GameScreen,
  setGameStateRef: (newState: (prevState: GameState) => GameState) => void,
) => {
  if (screen === "first") {
    setGameStateRef((prev) => ({ ...prev, state1: { ...prev.state1, step: Math.max(prev.state1.step - 1, 0) } }))
  } else if (screen === "second") {
    setGameStateRef((prev) => ({ ...prev, state2: { ...prev.state2, step: Math.max(prev.state2.step - 1, 0) } }))
  } else if (screen === "third") {
    setGameStateRef((prev) => ({ ...prev, state3: { ...prev.state3, step: Math.max(prev.state3.step - 1, 0) } }))
  }
}

