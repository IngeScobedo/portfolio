import projectPictureOne from '../../images/social-dashboard-project.jpg'
import apigif from '../../images/api.gif'
import nodegif from '../../images/nodejs.gif'

const Tech = () => {
  return (
    <div className=" w-5/6 p-4 md:text-3xl lg:text-4xl rounded-lg overflow-auto text-gray-300">
      <h1 className="text-2xl  font-bold border border-4 border-transparent border-l-yellow-400 pl-2">
        Tecnologias
      </h1>
      <div className="h-full flex flex-col items-center gap-3 resume-text">
        <h2 className="mt-4 text-xl">
          Actualmente mi stack comprende el uso de JavaScript, HTML & CSS,
          Node.js, Express.js y un poco de React
        </h2>

        <div className="flex flex-col items-center gap-3 resume-text border border-transparent border-b-white pb-4">
          <p className="resume-text pb-6">
            {' '}
            Puedo llevar a codigo diseños y tener un diseño responsive, y el uso
            de JavaScript para añadir interacción a la pagina{' '}
          </p>

          <a
            className="md:w-4/6 lg: 8/12"
            href="https://ingescobedo.github.io/frontend-mentor-social-media-dashboard/" target="_blank" rel="noreferrer">
            <img src={projectPictureOne} />
          </a>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <a
              href="https://ingescobedo.github.io/frontend-mentor-social-media-dashboard/"
              className="flex"
              target="_blank" rel="noreferrer"
            >
              Ver proyecto
              <svg
                className="ml-2 -mr-1 w-5 h-5"
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
          </button>
        </div>

        <div className="flex flex-col items-center gap-3 resume-text border border-transparent border-b-white pb-4">
          <p className="resume-text pb-6">
            Uso de Node.js para aplicaciones de consola, Web Server, o API HTTP
            / REST con Express.js
          </p>

          <a
            className="md:w-4/6 lg: 8/12"
            href="https://github.com/IngeScobedo/clima-app-node" target="_blank" rel="noreferrer">
            <img src={nodegif} />
          </a>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <a
              href="https://github.com/IngeScobedo/clima-app-node"
              className="flex"
              target="_blank" rel="noreferrer"
            >
              Ver proyecto
              <svg
                className="ml-2 -mr-1 w-5 h-5"
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
          </button>
        </div>

        <div className="flex flex-col items-center gap-3 resume-text border border-transparent border-b-white pb-4">
          <p className="resume-text pb-6">
            Creación, Consumo e Implementación de APIs Siguiendo el paradigma de
            REST API, con el uso de JWT, para la autenticación de usuarios,
            mongoDB como Base de datos, ademas siguiendo metodologias como TDD.
          </p>

          <a
            className="md:w-4/6 lg: 8/12"
            href="https://github.com/IngeScobedo/LearningMongoDB" target="_blank" rel="noreferrer">
            <img src={apigif} />
          </a>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <a
              href="https://github.com/IngeScobedo/LearningMongoDB"
              className="flex"
              target="_blank" rel="noreferrer"
            >
              Ver proyecto
              <svg
                className="ml-2 -mr-1 w-5 h-5"
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
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tech
