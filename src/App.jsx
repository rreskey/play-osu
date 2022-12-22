import { Routes, Route } from "react-router-dom"
import './App.css'
import Navbar from './components/Navbar'
import { Staff } from './pages/Staff'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { FastCup } from './pages/FastCup'
import Login from "./components/Login"

function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path='/play-osu/' element={<Home />} />
          <Route path='/play-osu/about' element={<About />} />
          <Route path='/play-osu/fastcup' element={<FastCup />} />
          <Route path='/play-osu/staff' element={<Staff />} />
          <Route path='/play-osu/login' element={<Login />} />
        </Routes>
    </div>
  )
}

export default App
