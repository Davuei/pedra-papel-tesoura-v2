import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PlayerContextProvider } from './contexts/PlayerContext'
import { ComputerContextProvider } from './contexts/ComputerContext'
import { App } from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PlayerContextProvider>
      <ComputerContextProvider>
        <App />
      </ComputerContextProvider>
    </PlayerContextProvider>
  </StrictMode>,
)
