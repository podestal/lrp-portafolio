import { projects } from "../data/projects"
import { Link } from "react-router-dom"
import useLanguageStore from "../store/store"
import { motion } from "framer-motion"
import { useEffect } from "react"
import { EN_URL } from "../data/projects"

const Proyectos = () => {

  const lan = useLanguageStore(s => s.lan)

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <div className="min-h-screen w-full">
      <div className="max-w-[1280px]  my-24 mx-auto flex flex-col justify-center items-center">
        <motion.h3 
          initial={{opacity: 0, translateY: 200}}
          whileInView={{opacity: 1, translateY: 0}}
          transition={{duration: 1.2}}
          className="lg:text-7xl text-5xl font-montserrat lg:mb-8 font-bold">{lan === 'ES' ? 'Proyectos' : 'Projects'}</motion.h3>
        <motion.div 
          initial={{opacity: 0, translateY: 200}}
          whileInView={{opacity: 1, translateY: 0}}
          transition={{duration: 1.2}}
          className="w-full grid grid-cols-1 lg:grid-cols-3 text-center mt-10 gap-12 max-lg:p-12">
          {projects.map( project => (
            <div className="bg-black rounded-t-3xl w-full">
              <Link 
                to={`/projects/${project.id}`}
                className="w-full h-full">
                <div className="w-full h-[300px] flex justify-center items-center">
                  <img className={`${project.title == 'MyShares' && 'w-[160px] h-[140px]'} ${project.title == 'Portafolio' && 'w-[160px] h-[50px]'}`} src={project.logo} />
                </div>
                <div className="bg-slate-900" key={project.title}>
                  <h4 className="lg:text-2xl text-xl py-4">{project.title}</h4>
                </div>
              </Link>
              <a target="_blank" href={project.title === 'Portafolio' && lan === 'EN' ? `${project.link}/${EN_URL}` : project.link}>
                <p className=" text-blue-700 py-4 w-full max-lg:text-md hover:text-blue-500">{project.linkTitle}</p>
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Proyectos