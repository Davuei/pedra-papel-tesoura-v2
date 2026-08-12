import { emojisMapping } from "../constants/emojisMapping"

type EmojiBubbleProps = {
  emojiId: number,
  handleClick?: () => any,
  flipped?: boolean,
  playing?: boolean
} & React.ComponentProps<'button'>

export function EmojiBubble({ 
  emojiId, 
  handleClick, 
  flipped=false, 
  playing=false, 
  ...props
}: EmojiBubbleProps) {
  return (
    <button
      className={`
        w-22 h-22 
        flex justify-center items-center text-5xl 
        bg-[#E2E2E2] 
        rounded-full shadow-[#2E2E2E] shadow-md cursor-pointer 
        md:w-24 md:h-24 md:text-6xl 
        xl:w-28 xl:h-28 xl:text-7xl 
        hover:scale-110 ${ flipped && 'hover:-scale-x-110' } 
        active:scale-100 ${ flipped && 'active:-scale-x-100' } 
        disabled:bg-[#AEAEAE] disabled:hover:scale-100 disabled:active:scale-100 disabled:cursor-not-allowed ${ flipped && 'disabled:hover:-scale-x-100' } ${ flipped && 'disabled:active:-scale-x-100' } 
        transition 
        ${ flipped && 'scale-x-[-1]' } 
        ${ playing && 'animate-[bounce_0.65s_linear_infinite]' }
      `} 
      onClick={ handleClick } 
      { ...props }
    >
      { emojisMapping[emojiId as keyof typeof emojisMapping] }
    </button>
  )
}