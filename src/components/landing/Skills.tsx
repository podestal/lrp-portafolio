import { motion } from "framer-motion"
import { skills } from "../../data/landing"

const Skills = () => {
  return (
    <div className="max-w-full h-full flex flex-col justify-center items-center gap-20">
        <motion.h2 
            initial={{opacity: 0, translateY: 200}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{duration: 1.2}}
            className="text-6xl lg:text-7xl py-10">Habilidades</motion.h2>
        <div className="max-w-[1280px] flex flex-col gap-12 w-full mx-auto p-4 rounded-3xl">
        {skills.map( skill => (
            <motion.div 
                initial={{opacity: 0, translateX: skill.styles == 'text-left self-start' ? -200 : 200}}
                whileInView={{opacity: 1, translateX: 0}}
                transition={{duration: 1.2}}
                className={`card-wrapper relative overflow-hidden rounded-2xl bg-transparent w-full lg:w-[60%] h-[320px] lg:h-[240px] lg:${skill.styles}`}>
                <div className={` card-content px-8 py-4 bg-slate-900 flex flex-col items-center gap-12 lg:gap-6 rounded-3xl `}>
                    <h3 className={`text-4xl lg:text-5xl`}>{skill.title.titleEs}</h3> 
                    <p className={`text-md lg:text-lg`}>{skill.description.descriptionEs}</p>
                </div>
            </motion.div>
            
        ))}
        </div>
       
    </div>
  )
}

export default Skills