import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Educate from './pages/Educate'
import Engage from './pages/Engage'
import Empower from './pages/Empower'
import About from './pages/About'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/educate" element={<Educate />} />
          <Route path="/engage" element={<Engage />} />
          <Route path="/empower" element={<Empower />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* redirects from the old structure */}
          <Route path="/research" element={<Navigate to="/educate" replace />} />
          <Route path="/resources" element={<Navigate to="/empower" replace />} />
          <Route path="/essays" element={<Navigate to="/engage" replace />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}