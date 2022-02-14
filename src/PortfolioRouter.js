import { Route, Routes } from 'react-router-dom'
import AboutMe from './components/AboutMe'
import NotFound from './components/ui/NotFound'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import TimelineScreen from './components/TimelineScreen'
import PortfolioApp from './PortfolioApp'
import Home from './components/Home'
const PortfolioRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PortfolioApp />}>
        <Route index element={<Home />} />
        <Route path="about"
          element={<AboutMe />}
        >
          <Route path="first" element={<TimelineScreen />} />
          <Route path="second" element={<TimelineScreen />} />
          <Route path="third" element={<TimelineScreen />} />
          <Route path="fourth" element={<TimelineScreen />} />
        </Route>
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default PortfolioRouter
