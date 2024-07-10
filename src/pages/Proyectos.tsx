import { projects } from "../data/projects"
import useLanguageStore from "../store/store"
import { motion } from "framer-motion"

const Proyectos = () => {

  const lan = useLanguageStore(s => s.lan)

  return (
    <div className="min-h-screen w-full">
      <div className="max-w-[1280px]  my-24 mx-auto flex flex-col justify-center items-center">
        <motion.h3 
          initial={{opacity: 0, translateY: 200}}
          whileInView={{opacity: 1, translateY: 0}}
          transition={{duration: 1.2}}
          className="lg:text-7xl text-5xl font-montserrat mb-8 font-bold">{lan === 'ES' ? 'Proyectos' : 'Projects'}</motion.h3>
        <motion.div 
          initial={{opacity: 0, translateY: 200}}
          whileInView={{opacity: 1, translateY: 0}}
          transition={{duration: 1.2}}
          className="w-full grid grid-cols-1 lg:grid-cols-3 text-center mt-10 gap-12">
          {projects.map( project => (
            <div className="bg-black rounded-t-3xl w-full">
              <a href="" className="w-full h-full">
                <div className="w-full h-[300px] flex justify-center items-center">
                  <img className={`${project.title == 'MyShares' && 'w-[160px] h-[140px]'}`} src={project.logo} />
                </div>
                <div className="bg-slate-900" key={project.title}>
                  <h4 className="lg:text-2xl py-4">{project.title}</h4>
                </div>
              </a>
              <a href={project.link}>
                <p className=" text-blue-700 py-4 w-full hover:text-blue-500">{project.linkTitle}</p>
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Proyectos