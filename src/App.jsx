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
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/play' element={<Play />} />
          <Route path='/watch' element={<Watch />} />
          <Route path='/create' element={<Create />} />
          <Route path='/victorious' element={<Victorious />} />
        </Routes>
    </>
  )
}

export default App
