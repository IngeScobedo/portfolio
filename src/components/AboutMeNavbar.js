import { Link } from 'react-router-dom'
import 'tw-elements'

const AboutMeNavbar = () => {
  return (
    <div className="w-full flex flex-col items-center mt-4 rounded-xl m-2">
      <div className="w-5/6 border-b border-transparent border-4 rounded-3xl border-gray-200 dark:border-gray-700 bg-indigo-900 flex justify-center">
        <ul className="w-5/6 flex flex-wrap -mb-px justify-center">
          <li className="mr-2">
            <Link
              to="first"
              className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-200 rounded-t-lg border-b-2 border-transparent hover:text-gray-400 hover:border-rose-300 dark:text-gray-400 dark:hover:text-gray-300 focus:text-rose-600 focus:border-blue-400"
            >
                <p
                className="text-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-blue-400
                text-center lg:text-right pb-2 "
                >
                HTML & CSS
                </p>
            </Link>
          </li>
          <li className="mr-2">
            <Link
              to="second"
              className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-200 rounded-t-lg border-b-2 border-transparent hover:text-gray-400 hover:border-rose-300 dark:text-gray-400 dark:hover:text-gray-300 focus:text-rose-600 focus:border-yellow-400"
                aria-current
            >
              <p
              className="text-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-400
            text-center lg:text-right pb-2 "
            >
             JavaScript
            </p>
            </Link>
          </li>
          <li className="mr-2">
            <Link
              to="third"
              className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-200 rounded-t-lg border-b-2 border-transparent hover:text-gray-400 hover:border-rose-300 dark:text-gray-400 dark:hover:text-gray-300 focus:text-rose-600 focus:border-green-400"
            >
              <p
              className="text-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-teal-500 to-emerald-400
            text-center lg:text-right pb-2 "
            >
             Node.js
            </p>
            </Link>
          </li>
          <li className="mr-2">
            <Link
              to="fourth"
              className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-200 rounded-t-lg border-b-2 border-transparent hover:text-gray-400 hover:border-rose-300 dark:text-gray-400 dark:hover:text-gray-300 focus:text-rose-600 focus:border-purple-400"
            >
              <p
              className="text-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-indigo-400
            text-center lg:text-right pb-2 "
            >
             React
            </p>
            </Link>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default AboutMeNavbar
