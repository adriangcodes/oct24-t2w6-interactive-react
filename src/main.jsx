import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PokemonSearcher from './components/PokemonSearcher.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello, homepage!</h1>} />
        <Route path="/about" element={<h1>Hello, about page!</h1>} />
        <Route path="/pokemon" element={<PokemonSearcher />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
