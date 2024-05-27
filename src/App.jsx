import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import injectContext from './store/Appcontext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Nav from './componentes/Nav'
import People from './pages/People'
import Planetas from './pages/Planetas'
import Personajes from './pages/Personajes'
import Vehiculos from './pages/Vehiculos'



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<People  />} />
        <Route path="/planet/:planet" element={<Planetas />} />
        <Route path="/planet" element={<Planetas />} />
        <Route path="/character/:character" element={<Personajes />} />
        <Route path="/character" element={<Personajes />} />
        <Route path="/vehicle/:vehicle" element={<Vehiculos />} />
        <Route path="/vehicle" element={<Vehiculos />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default injectContext(App)
