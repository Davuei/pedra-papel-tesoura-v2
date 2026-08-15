import { counterPlaysMapping } from "../constants/counterPlaysMapping"
import type { ComputerContextProps } from "../contexts/ComputerContext"
import type { PlayerContextProps } from "../contexts/PlayerContext"

export function chooseGesture(
  chosenGesture: number,
  player: PlayerContextProps,
  computer: ComputerContextProps,
  titleSetter: React.Dispatch<React.SetStateAction<string>>
) {
  player.setPlayerAnimation('idle')
  computer.setComputerAnimation('idle')
  titleSetter('...')
  player.setPlayerAnimation('playing')
  player.setPlayerGesture(1)
  computer.setComputerAnimation('playing')
  computer.setComputerGesture(1)
  
  setTimeout(() => {
    player.setPlayerGesture(chosenGesture)

    const computerGesture = Math.floor(Math.random() * 3) + 1
    computer.setComputerGesture(computerGesture)

    const resultArray = counterPlaysMapping[chosenGesture as keyof typeof counterPlaysMapping] || undefined
    const resultMatch = resultArray.indexOf(computerGesture)

    player.setPlayerAnimation('idle')
    computer.setComputerAnimation('idle')

    setTimeout(() => {
      if(resultMatch != -1) {
        if(resultMatch == 0) {
          titleSetter('Vitória!!')
          player.setPlayerGesture(4)
          player.setPlayerAnimation('win')
          computer.setComputerGesture(5)
          computer.setComputerAnimation('lose')
        }
        else {
          titleSetter('Derrota...')
          player.setPlayerGesture(5)
          player.setPlayerAnimation('lose')
          computer.setComputerGesture(4)
          computer.setComputerAnimation('win')
        }
      } else {
        titleSetter('Empate!')
        player.setPlayerAnimation('idle')
        computer.setComputerAnimation('idle')
      }
    }, 1000);
  }, 1600);
}