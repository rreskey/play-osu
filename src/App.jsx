import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import { Staff } from './pages/Staff'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { FastCup } from './pages/FastCup'

function App() {
  return (
    <>
    <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/fastcup' element={<FastCup />} />
          <Route path='/staff' element={<Staff />} />
        </Routes>
    </>
  )
}

export default App
