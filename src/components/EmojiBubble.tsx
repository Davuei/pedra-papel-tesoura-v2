import clsx from "clsx"
import { emojisMapping } from "../constants/emojisMapping"
import { animationsMapping, type PossibleAnimations } from "../constants/animationsMapping"

export type EmojiBubbleProps = {
  emojiId: number,
  handleClick?: () => any,
  flipped?: boolean,
  animation?: PossibleAnimations
} & React.ComponentProps<'button'>

export function EmojiBubble({ 
  emojiId,
  handleClick,
  flipped=false,
  animation='idle',
  ...props
}: EmojiBubbleProps) {
  return (
    <button 
      { ...props } 
      className={clsx(
        'w-22 h-22', 
        'flex justify-center items-center text-5xl', 
        'bg-[#E2E2E2]', 
        'rounded-full shadow-[#2E2E2E] shadow-md cursor-pointer', 
        'md:w-24 md:h-24 md:text-6xl', 
        'xl:w-28 xl:h-28 xl:text-7xl', 
        `hover:scale-110 ${ flipped && 'hover:-scale-x-110' } ${ flipped && 'disabled:hover:-scale-x-100' } disabled:hover:scale-100`, 
        `active:scale-100 ${ flipped && 'active:-scale-x-100' } disabled:active:scale-100 disabled:cursor-not-allowed ${ flipped && 'disabled:active:-scale-x-100' }`, 
        'disabled:bg-[#AEAEAE]', 
        'transition', 
        `${ flipped && 'scale-x-[-1]' }`, 
        `${ animationsMapping[animation as keyof typeof animationsMapping] }`
      )} 
      onClick={ handleClick }
    >
      { emojisMapping[emojiId as keyof typeof emojisMapping] }
    </button>
  )
}