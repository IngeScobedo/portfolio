import { Route, Routes } from 'react-router-dom'
import AboutMe from './components/AboutMe'
import NotFound from './components/ui/NotFound'
import Projects from './components/Projects'
import Contact from './components/Contact'
import PortfolioApp from './PortfolioApp'
import Home from './components/Home'
import Resume from './components/aboutPages/Resume'
import Tech from './components/aboutPages/Tech'
const PortfolioRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PortfolioApp />}>
        <Route index element={<Home />} />
        <Route path="about"
          element={<AboutMe />}
        >
          <Route index element={<Resume />} />
          <Route path="tech" element={<Tech />} />
        </Route>
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default PortfolioRouter
