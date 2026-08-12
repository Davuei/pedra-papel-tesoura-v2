import { counterPlaysMapping } from "../constants/counterPlaysMapping"

export function chooseGesture(
  playerGesture: number,
  playerSetter: React.Dispatch<React.SetStateAction<number>>,
  computerSetter: React.Dispatch<React.SetStateAction<number>>,
  titleSetter: React.Dispatch<React.SetStateAction<string>>,
  controlSetter: React.Dispatch<React.SetStateAction<boolean>>
) {
  if(playerGesture < 0 || playerGesture > 3) return

  controlSetter(true)
  titleSetter('...')
  playerSetter(1)
  computerSetter(1)

  setTimeout(() => {
    playerSetter(playerGesture)

    const computerGesture = Math.floor(Math.random() * 3) + 1
    computerSetter(computerGesture)

    const resultArray = counterPlaysMapping[playerGesture as keyof typeof counterPlaysMapping] || undefined
    const resultMatch = resultArray.indexOf(computerGesture)

    controlSetter(false)

    if(resultMatch != -1) {
      if(resultMatch == 0) titleSetter('Vitória!!')
      else return titleSetter('Derrota...')
    } else
      return titleSetter('Empate!')
  }, 1600);
}