import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PokemonSearcher from './components/PokemonSearcher.jsx'
import { HashRouter as BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { BaseLayout } from './pages/layouts/BaseLayout.jsx'
import { UserJwtProvider } from './contexts/UserJwtProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserJwtProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<h1>Hello world, this is the homepage!</h1>} />
            <Route path="/about" element={<h1>Hello, about page!</h1>} />
            <Route path="/pokemon" element={<Outlet />}>
              {/* localhost:3000/pokemon */}
              <Route index element={<PokemonSearcher />} />
              {/* localhost:3000/pokemon/pikachu */}
              <Route path=":searchTerm" element={<PokemonSearcher />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserJwtProvider>
  </StrictMode>,
)
