import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Home = lazy(() => import('./pages/Home'))
const StudyGuides = lazy(() => import('./pages/StudyGuides'))
const IndustryPivot = lazy(() => import('./pages/IndustryPivot'))
const Mentorship = lazy(() => import('./pages/Mentorship'))
const Wellness = lazy(() => import('./pages/Wellness'))
const About = lazy(() => import('./pages/About'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPostAppeTopics = lazy(() => import('./pages/BlogPostAppeTopics'))
const BlogPostSample = lazy(() => import('./pages/BlogPostSample'))

function PageFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" aria-busy="true">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-teal-200 border-t-teal-600" />
    </div>
  )
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <div className="flex-1">
        <Suspense fallback={<PageFallback />}>
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
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}
