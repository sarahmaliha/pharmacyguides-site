import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import StudyGuides from './pages/StudyGuides'
import IndustryPivot from './pages/IndustryPivot'
import Mentorship from './pages/Mentorship'
import About from './pages/About'
import BlogPostSample from './pages/BlogPostSample'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/study-guides" element={<StudyGuides />} />
          <Route path="/industry-pivot" element={<IndustryPivot />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/retail-pharmacy-to-msl" element={<BlogPostSample />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
