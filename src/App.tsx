import { useState } from "react";
import { EmojiBubble } from "./components/EmojiBubble";
import { chooseGesture } from "./utils/chooseGesture";

export function App() {
  const [playerGesture, setPlayerGesture] = useState<number>(Math.floor(Math.random() * 5) + 1)
  const [computerGesture, setComputerGesture] = useState<number>(Math.floor(Math.random() * 5) + 1)
  const [annoucement, setAnnouncement] = useState<string>('Tente a sorte!')
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  return (
    <main
      className="h-screen flex justify-center items-center flex-col gap-8 bg-linear-to-b from-[#AF1F76] to-[#CAA81E]"
    >
      <h2
        className="text-[#E2E2E2] text-2xl font-bold md:text-4xl"
      >
        { annoucement }
      </h2>

      <section
        className="p-8 flex items-center gap-10 xl:gap-16"
      >
        <EmojiBubble 
          emojiId={ playerGesture } 
          flipped 
          playing={ isPlaying } 
        />
        
        <EmojiBubble 
          emojiId={ computerGesture } 
          playing={ isPlaying } 
        />
      </section>

      <section
        className="py-8 w-full flex justify-evenly bg-[#E2E2E2] md:w-140 md:shadow-xl md:shadow-[#2E2E2E] md:rounded-xl"
      >
        <EmojiBubble 
          emojiId={1} 
          handleClick={ () => chooseGesture(1, setPlayerGesture, setComputerGesture, setAnnouncement, setIsPlaying) } 
          disabled={ isPlaying } 
          flipped 
        />

        <EmojiBubble 
          emojiId={2} 
          handleClick={ () => chooseGesture(2, setPlayerGesture, setComputerGesture, setAnnouncement, setIsPlaying) } 
          disabled={ isPlaying } 
          flipped 
        />

        <EmojiBubble 
          emojiId={3} 
          handleClick={ () => chooseGesture(3, setPlayerGesture, setComputerGesture, setAnnouncement, setIsPlaying) } 
          disabled={ isPlaying } 
          flipped 
        />
      </section>
    </main>
  )
}