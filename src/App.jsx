import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MobileLinkHub from './components/MobileLinkHub'
import Home from './pages/Home'
import StudyGuides from './pages/StudyGuides'
import IndustryPivot from './pages/IndustryPivot'
import Mentorship from './pages/Mentorship'
import Wellness from './pages/Wellness'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogPostAppeTopics from './pages/BlogPostAppeTopics'
import BlogPostSample from './pages/BlogPostSample'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <div className="flex-1 pb-16 md:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/study-guides" element={<StudyGuides />} />
          <Route path="/industry-pivot" element={<IndustryPivot />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/top-5-appe-disease-states" element={<BlogPostAppeTopics />} />
          <Route path="/blog/retail-pharmacy-to-msl" element={<BlogPostSample />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
      <MobileLinkHub />
    </div>
  )
}
