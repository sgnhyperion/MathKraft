import * as React from "react"
import { cn } from "@/lib/utils"
import { useGameState } from "@/app/game/state-utils"


const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {

    const { gameStateRef } = useGameState();
    const { step } = gameStateRef.current.state1;
    return (
      <input
        type={type}
        className={cn(
          "flex h-[2.2vw] w-[2.2vw] rounded-md border border-input shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-center",
          step == 5 ? "text-4xl" : "text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = "Input"

export { Input }

