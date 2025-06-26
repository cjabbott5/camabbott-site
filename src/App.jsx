// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// top-level pages
import Home from './pages/Home'
import Contact from './pages/Contact'

// “Working Together” sub-pages
import Individuals from './pages/WorkingTogether/Individuals'
import Therapists from './pages/WorkingTogether/Therapists'
import Organizations from './pages/WorkingTogether/Organizations'

// “About Cam” sub-pages
import Story from './pages/AboutCam/Story'
import Projects from './pages/AboutCam/Projects'
import ThreeWords from './pages/AboutCam/ThreeWords'

// “Resources” sub-pages
import Essays from './pages/Resources/Essays'
import Tools from './pages/Resources/Tools'

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-white text-gray-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* top-level */}
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />

            {/* Working Together */}
            <Route path="/individuals" element={<Individuals />} />
            <Route path="/therapists" element={<Therapists />} />
            <Route path="/organizations" element={<Organizations />} />

            {/* About Cam */}
            <Route path="/story" element={<Story />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/threewords" element={<ThreeWords />} />

            {/* Resources */}
            <Route path="/essays"   element={<Essays />} />
            <Route path="/tools"    element={<Tools />} />

            {/* fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
