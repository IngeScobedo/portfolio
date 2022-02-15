import { Link } from 'react-router-dom'
import 'tw-elements'

const AboutMeNavbar = () => {
  return (
    <div className="w-full flex flex-col items-center mt-4 rounded-xl m-2">
      <div className="w-5/6 border-b border-indigo-900 rounded-3xl dark:border-gray-700 bg-indigo-900 flex justify-center">
        <ul className="w-5/6 flex flex-wrap -mb-px justify-center">
          <li className="mr-2">
            <Link
              to="/about"
              className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-200 rounded-t-lg border-b-2 border-transparent hover:text-gray-400 hover:border-rose-300 dark:text-gray-400 dark:hover:text-gray-300 focus:text-rose-600 focus:border-blue-400"
            >
                <p
                className="text-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-blue-400
                text-center lg:text-right pb-2 "
                >
                Mi resumen
                </p>
            </Link>
          </li>
          <li className="mr-2">
            <Link
              to="tech"
              className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-200 rounded-t-lg border-b-2 border-transparent hover:text-gray-400 hover:border-rose-300 dark:text-gray-400 dark:hover:text-gray-300 focus:text-rose-600 focus:border-yellow-400"
                aria-current
            >
              <p
              className="text-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-400
            text-center lg:text-right pb-2 "
            >
             JavaScript y otras Técnologias
            </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AboutMeNavbar
