import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Research from './pages/Work/Research'
import Resources from './pages/Work/Resources'
import Essays from './pages/Work/Essays'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-cream text-ink min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/essays" element={<Essays />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}