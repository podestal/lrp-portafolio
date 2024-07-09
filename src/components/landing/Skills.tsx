import { motion } from "framer-motion"
import { skills } from "../../data/landing"
import Tags from '../../utils/Tags'
import useLanguageStore from "../../store/store"

const Skills = () => {

    const lan = useLanguageStore(s => s.lan)
    const skillsData = lan == 'ES' ? skills['ES'] : skills['EN']

  return (
    <div className="max-w-full min-h-screen lg:min-h-[220vh] flex flex-col justify-center items-center gap-20">
        <motion.h2 
            initial={{opacity: 0, translateY: 200}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{duration: 1.2}}
            className="text-6xl lg:text-7xl py-10">{skillsData.title}</motion.h2>
        <div className="max-w-[1280px] flex flex-col gap-12 w-full mx-auto p-4 rounded-3xl">
        {skillsData.data.map( skill => (
            <motion.div 
                initial={{opacity: 0, translateX: skill.styles == 'text-left self-start' ? -200 : 200}}
                whileInView={{opacity: 1, translateX: 0}}
                transition={{duration: 1.2}}
                className={`card-wrapper relative overflow-hidden rounded-2xl bg-transparent w-full lg:w-[70%] max-lg:min-h-[720px] lg:min-h-[320px] lg:${skill.styles}`}>
                <div className={` card-content px-8 py-4 bg-slate-900 flex flex-col items-center justify-start gap-12 lg:gap-6 rounded-3xl `}>
                    <h3 className={`text-4xl lg:text-5xl`}>{skill.title}</h3> 
                    <p className={`text-md lg:text-lg`}>{skill.description}</p>
                    <Tags 
                        tags={skill.tags}
                    />
                </div>
            </motion.div>
            
        ))}
        </div>
       
    </div>
  )
}

export default Skills