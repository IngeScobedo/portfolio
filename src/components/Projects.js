import projectPictureOne from '../images/social-dashboard-project.jpg'
import apigif from '../images/api.gif'
import nodegif from '../images/nodejs.gif'

const Projects = () => {
  return (
    <div className="flex justify-center  ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-11/12  overflow-auto">
        <div className="max-w-sm max-h-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
          <a href="https://www.frontendmentor.io/challenges" target="_blank" rel="noreferrer">
            <img
              className="rounded-t-lg"
              src={projectPictureOne}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="https://www.frontendmentor.io/challenges" target="_blank" rel="noreferrer">
              <h5 className="mb-2 text-2xl md:text-xl  font-bold tracking-tight text-gray-900 dark:text-white">
               Desafio de la plataforma <span className="text-2xl text-rose-400" >Frontendmentor.io</span>
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
             Cuando ya tenia los fundamentos y los diseños que hay en css ademas de tener unas bases solidas en ambas tecnologias comence a desarrollar estas interfaces basado en el diseño hecho previamente por esta plataforma.
            </p>
            <a
              href="https://ingescobedo.github.io/frontend-mentor-social-media-dashboard/"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              target="_blank" rel="noreferrer"
            >
              Descubre más
              <svg
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
          <a href="https://github.com/IngeScobedo/clima-app-node" target="_blank" rel="noreferrer">
            <img
              className="rounded-t-lg"
              src={nodegif}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="https://github.com/IngeScobedo/clima-app-node">
              <h5 className="mb-2 text-2xl md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Aplicacion de consola con Node.js consumiendo Api Weather
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Esta aplicacion de consola sencilla, acepta varias opciones, como para buscar ciudades y ver su clima y otra opcion de historial para ver los terminos buscados anteriormente
            </p>
            <a
              href="https://github.com/IngeScobedo/clima-app-node"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              target="_blank" rel="noreferrer"
            >
              Descubre más
              <svg
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
          <a href="https://github.com/IngeScobedo/notes-frontend"target="_blank" rel="noreferrer">
            <img
              className="rounded-t-lg"
              src={apigif}
              alt=""
            />
          </a>
          <div className="p-5">
          <h1 className="text-2xl font-bold border border-4 border-transparent border-l-red-400 pl-2">
        En progreso...
      </h1>
            <a href="https://github.com/IngeScobedo/notes-frontend" target="_blank" rel="noreferrer">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Aplicacion de notas con registro e inicio de sesion.
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
             En este proyecto utilice MongoDb como base de datos para el manejo de la informacion de los usuarios, use JWT para el intercambio de informacion entre cliente y servidor, para el frontend utilice React y para el backend utilice Node.js con express.js
            </p>
            <a
              href="https://github.com/IngeScobedo/notes-frontend"
              target="_blank"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" rel="noreferrer"
            >
              Descubre más
              <svg
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
