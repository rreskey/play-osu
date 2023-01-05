import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Pagination from "./components/Pagination"
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Watch } from './pages/Watch'
import { Victorious } from './pages/Victorious'
import { Play } from './pages/Play'
import { Create } from './pages/Create'

function App() {
  return (
    <>
    <Navbar/>
    <Pagination />
        <Routes>
          <Route path='/play-osu/' element={<Home />} />
          <Route path='/play-osu/about' element={<About />} />
          <Route path='/play-osu/play' element={<Play />} />
          <Route path='/play-osu/watch' element={<Watch />} />
          <Route path='/play-osu/create' element={<Create />} />
          <Route path='/play-osu/victorious' element={<Victorious />} />
        </Routes>
    </>
  )
}

export default App
