import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Schedule from './pages/Schedule'
import Stats from './pages/Stats'
import Gallery from './pages/Gallery'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/stats"    element={<Stats />} />
        <Route path="/gallery"  element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  )
}
