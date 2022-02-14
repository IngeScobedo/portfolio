import { Outlet } from 'react-router-dom'
import AboutMeNavbar from './ui/AboutMeNavbar'
const AboutMe = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-5/6 h-5/6 rounded-xl bg-opacity-96 backdrop-opacity-30 backdrop-invert flex flex-col items-center" >
        <AboutMeNavbar />
        <Outlet />
      </div>
    </div>
  )
}

export default AboutMe
