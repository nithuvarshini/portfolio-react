import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Skills from './pages/Skills.jsx'
import Experience from './pages/Experience.jsx'
import Certifications from './pages/Certifications.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <div className="wrap">
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <main className="page not-found">
              <div className="eyebrow">404</div>
              <h1 className="page-title">Page not found.</h1>
            </main>
          }
        />
      </Routes>
    </div>
  )
}
