import { createContext, useState } from "react";
import type { PossibleAnimations } from "../constants/animationsMapping";

export type PlayerContextProps = {
  playerGesture: number,
  setPlayerGesture: React.Dispatch<React.SetStateAction<number>>,
  playerAnimation: PossibleAnimations,
  setPlayerAnimation: React.Dispatch<React.SetStateAction<PossibleAnimations>>
}

const initialPlayerContext: PlayerContextProps = {
  playerGesture: Math.floor(Math.random() * 5) + 1,
  setPlayerGesture: () => {},
  playerAnimation: 'idle',
  setPlayerAnimation: () => {}
}

export const PlayerContext = createContext<PlayerContextProps>(initialPlayerContext)



type PlayerContextProviderProps = {
  children: React.ReactNode
}

export function PlayerContextProvider({ children }: PlayerContextProviderProps) {
  const [playerGesture, setPlayerGesture] = useState(initialPlayerContext.playerGesture)
  const [playerAnimation, setPlayerAnimation] = useState(initialPlayerContext.playerAnimation)

  return (
    <PlayerContext.Provider value={{ playerGesture, setPlayerGesture, playerAnimation, setPlayerAnimation }}>
      { children }
    </PlayerContext.Provider>
  )
}