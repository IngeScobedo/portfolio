import picture from '../../images/aboutmepicture.jpg'
import '../../index.css'

const Resume = () => {
  return (
    <div className="bg-opacity-90 w-5/6 p-4 rounded-lg overflow-auto md:overflow-visible">
            <h1 className="text-2xl font-bold border border-4 border-transparent border-l-blue-500 pl-2 text-white">
                Mas sobre mi...
            </h1>
        <div className="h-full flex flex-col items-center gap-3 resume-text text-white font-bold" >
            <h2 className='mt-4 text-2xl' >Mi nombre es Alan Escobedo</h2>
            <p className="" >Un desarrollador de software, apasionado por la tecnologia que trabaja para la transformacion digital. </p>

            <img
                src={picture}
                className="rounded-full w-40 h-40 mx-auto "
            />

             <p className="resume-text pb-6" > Me gusta mucho el crear paginas siempre buscando nuevos retos para nunca parar de aprender, añadir elementos para siempre buscar una buena experiencia de usuario <br/> <br/> El software que nosotros creamos define como experimentaremos el mundo y las empresas buscan innovar con la ayuda de la técnologia, por lo que hoy yo busco ayudar en esa innovacion por medio de el software </p>
        </div>
    </div>
  )
}

export default Resume
