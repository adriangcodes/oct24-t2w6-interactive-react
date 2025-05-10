import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PokemonSearcher from './components/PokemonSearcher.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PokemonSearcher />
  </StrictMode>,
)
