import personalImage from '../images/alanescobedo.jpg'
import { Link } from 'react-router-dom'
import 'animate.css'

const Home = () => {
  return (
    <div className="flex justify-center items-center animate_animated animate__bounceInLeft w-full h-full">
      <div className="w-5/6 h-5/6 flex flex-col justify-center items-center lg:flex-row p-4 rounded-xl gap-4 bg-opacity-96 backdrop-opacity-90 backdrop-invert">
        <div className="flex justify-center items-center  flex-col w-full lg:w-4/6 ">
          <div className="w-5/6">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-indigo-700
            text-center lg:text-right pb-2 "
            >
              Hola! <br /> Yo soy <span>Alan</span>
            </h1>
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-yellow-400 text-center md:text-4xl lg:text-right">
              <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-rose-400 to-rose-700 md:text-3xl">
                Jr.{' '}
              </span>
              <br /> JavaScript Developer
            </h2>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-center ">
            <img
              className="mb-3 w-44 h-44 rounded-full shadow-lg border p-1 border-dashed border-rose-400 border-4"
              src={personalImage}
              alt="Bonnie image"
            />

            <div className="flex mt-4 space-x-3 lg:mt-6">
              <Link
                to="/about"
                className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 "
              >
                Conoce mas sobre mi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
