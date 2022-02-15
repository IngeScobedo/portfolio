
import Navbar from './components/ui/Navbar'
import background from './images/background.jpg'
import backgroundAbout from './images/waves.jpg'
import backgroundProjects from './images/background2.jpg'
import backgroundContact from './images/waves2.jpg'

import { Outlet, useLocation } from 'react-router-dom'
import './index.css'
import { useEffect, useState } from 'react'

const PortfolioApp = () => {
  const [backgroundImage, setBackgroundImage] = useState(background)
  const location = useLocation()
  useEffect(() => {
    if (location.pathname === '/') {
      setBackgroundImage(background)
    }
    if (location.pathname === '/about') {
      setBackgroundImage(backgroundAbout)
    }
    if (location.pathname === '/projects') {
      setBackgroundImage(backgroundProjects)
    }
    if (location.pathname === '/contact') {
      setBackgroundImage(backgroundContact)
    }
  }, [location])
  console.log(location)
  return (
    <div className="app" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      width: '100vw',
      height: '100vh'
    }} >
      <div className="w-full z-90">
        <Navbar />
      </div>
      <div className="w-full h-5/6">
        <Outlet />
      </div>
    </div>
  )
}

export default PortfolioApp
