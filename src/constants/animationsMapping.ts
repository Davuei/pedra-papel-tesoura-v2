export type PossibleAnimations = 'idle' | 'playing' | 'win' | 'lose'

export const animationsMapping = {
  'idle': 'translate-0',
  'playing': 'animate-play',
  'win': 'animate-[bounce_1s_infinite]',
  'lose': 'animate-rotate'
}