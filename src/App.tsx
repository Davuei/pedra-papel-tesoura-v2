import { useContext, useState } from "react";
import { EmojiBubble } from "./components/EmojiBubble";
import { chooseGesture } from "./utils/chooseGesture";

import { PlayerContext } from "./contexts/PlayerContext";
import { ComputerContext } from "./contexts/ComputerContext";

import clsx from "clsx";

import './assets/global.css'

export function App() {
  const player = useContext(PlayerContext)
  const computer = useContext(ComputerContext)

  const [annoucement, setAnnouncement] = useState<string>('Tente a sorte!')

  return (
    <main 
      className={clsx(
        'h-screen', 
        'flex justify-center items-center flex-col gap-8', 
        'bg-linear-to-b from-[#AF1F76] to-[#CAA81E]'
      )}
    >
      <h2 
        className={clsx(
          'text-[#E2E2E2] text-2xl font-bold', 
          'md:text-4xl'
        )}
      >
        { annoucement }
      </h2>

      <section 
        className={clsx(
          'p-8', 
          'flex items-center gap-10', 
          'xl:gap-16'
        )}
      >
        <EmojiBubble 
          emojiId={ player.playerGesture } 
          flipped 
          animation={ player.playerAnimation } 
        />
        
        <EmojiBubble 
          emojiId={ computer.computerGesture } 
          animation={ computer.computerAnimation } 
        />
      </section>

      <section 
        className={clsx(
          'py-8 w-full', 
          'flex justify-evenly', 
          'bg-[#E2E2E2]', 
          'md:w-140 md:shadow-xl md:shadow-[#2E2E2E] md:rounded-xl' 
        )}
      >
        <EmojiBubble 
          emojiId={1} 
          handleClick={ () => chooseGesture(1, player, computer, setAnnouncement) } 
          disabled={ annoucement == '...' } 
          flipped 
        />

        <EmojiBubble 
          emojiId={2} 
          handleClick={ () => chooseGesture(2, player, computer, setAnnouncement) } 
          disabled={ annoucement == '...' } 
          flipped 
        />

        <EmojiBubble 
          emojiId={3} 
          handleClick={ () => chooseGesture(3, player, computer, setAnnouncement) } 
          disabled={ annoucement == '...' } 
          flipped 
        />
      </section>
    </main>
  )
}