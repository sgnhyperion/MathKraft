"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface ParticleProps {
  color: string
  angle: number
  originX: number
}

const colors = [
  "#FFD700",
  "#FF69B4",
  "#4169E1", 
  "#32CD32", 
  "#FF4500", 
  "#9370DB", 
  "#00CED1", 
]

function Particle({ color, angle, originX }: ParticleProps) {
  const distance = Math.random() * 300 + 200 
  const yDistance = Math.sin(angle) * distance
  const xDistance = Math.cos(angle) * distance

  return (
    <motion.div
      className="absolute h-2 w-2 rounded-full"
      style={{
        backgroundColor: color,
        bottom: 0,
        left: `${originX}%`,
      }}
      initial={{ scale: 0 }}
      animate={{
        x: xDistance,
        y: -yDistance,
        scale: [0, 1, 1, 0.5, 0],
        rotate: Math.random() * 360 * 2, 
      }}
      transition={{
        duration: 1.5,
        ease: [0.23, 0.86, 0.73, 0.93],
        scale: {
          duration: 1.5,
          times: [0, 0.2, 0.5, 0.8, 1],
        },
      }}
    />
  )
}

interface PartyPopperProps {
  onComplete?: () => void
}

export default function PartyPopper({ onComplete }: PartyPopperProps) {
  const [particles, setParticles] = useState<React.ReactNode[]>([])

  useEffect(() => {
    const particleCount = 60 
    const newParticles: React.ReactNode[] = []

    // Left popper
    for (let i = 0; i < particleCount / 2; i++) {
      const angle = (Math.PI / 2) * Math.random() - Math.PI / 8 // Angle between -22.5° and 90°
      newParticles.push(
        <Particle
          key={`left-${i}`}
          color={colors[Math.floor(Math.random() * colors.length)]}
          angle={angle}
          originX={20}
        />,
      )
    }

    // Right popper
    for (let i = 0; i < particleCount / 2; i++) {
      const angle = (Math.PI / 2) * Math.random() + Math.PI / 8 // Angle between 22.5° and 135°
      newParticles.push(
        <Particle
          key={`right-${i}`}
          color={colors[Math.floor(Math.random() * colors.length)]}
          angle={angle}
          originX={80}
        />,
      )
    }

    setParticles(newParticles)

    // Cleanup and call onComplete
    const timer = setTimeout(() => {
      onComplete?.()
    }, 2000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[100] h-screen w-screen overflow-hidden bg-background">
        {particles}
        <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[110] text-center"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
            <h2 className="text-2xl font-bold">Hooray! 🎉</h2>
            <p className="text-muted-foreground">You did it!</p>
        </motion.div>
    </div>
  )
}


