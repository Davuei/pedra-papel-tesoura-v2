import { createContext, useState } from "react";
import type { PossibleAnimations } from "../constants/animationsMapping";

export type ComputerContextProps = {
  computerGesture: number,
  setComputerGesture: React.Dispatch<React.SetStateAction<number>>,
  computerAnimation: PossibleAnimations,
  setComputerAnimation: React.Dispatch<React.SetStateAction<PossibleAnimations>>
}

const initialComputerContext: ComputerContextProps = {
  computerGesture: Math.floor(Math.random() * 5) + 1,
  setComputerGesture: () => {},
  computerAnimation: 'idle',
  setComputerAnimation: () => {}
}

export const ComputerContext = createContext<ComputerContextProps>(initialComputerContext)



type ComputerContextProviderProps = {
  children: React.ReactNode
}

export function ComputerContextProvider({ children }: ComputerContextProviderProps) {
  const [computerGesture, setComputerGesture] = useState<number>(initialComputerContext.computerGesture)
  const [computerAnimation, setComputerAnimation] = useState<PossibleAnimations>(initialComputerContext.computerAnimation)

  return (
    <ComputerContext.Provider value={{ computerGesture, setComputerGesture, computerAnimation, setComputerAnimation }}>
      { children }
    </ComputerContext.Provider>
  )
}