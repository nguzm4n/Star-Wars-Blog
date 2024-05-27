import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import injectContext from './store/Appcontext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Nav from './componentes/Nav'
import People from './pages/People'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<People  />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default injectContext(App)
