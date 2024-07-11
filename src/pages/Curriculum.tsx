import { useEffect } from "react"
import { resumeData, coreSkills, otherSkills, softSkills } from "../data/resume"
import { motion } from "framer-motion"
import useLanguageStore from "../store/store"

const Curriculum = () => {

  const lan = useLanguageStore(s => s.lan)
  const data = lan === 'ES' ? resumeData['ES'] : resumeData['EN']
  const softSkillsData = lan === 'ES' ? softSkills['ES'] : softSkills['EN']

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <motion.div 
      initial={{opacity: 0, translateY: -100}}
      whileInView={{opacity: 1, translateY: 0}}
      transition={{duration: 0.8}}
      className="w-full min-h-screen">
      <div className="bg-slate-900 lg:max-w-[1280px] h-full mx-auto my-20 font-poppins py-10 px-4 max-lg:mx-6">
        <div className="w-full border-t-2 border-b-2 py-6 flex flex-col gap-6 items-start max-lg:items-center">
          <h2 className="max-lg:hidden font-montserrat text-7xl font-bold">{data.name}</h2>
          <h2 className="max-lg:hidden font-montserrat text-7xl font-bold">{data.lastName}</h2>
          <h2 className="lg:hidden text-5xl font-montserrat font-bold text-center">{data.name} {data.lastName}</h2>
          <p className="text-xl lg:text-2xl ">{data.title}</p>
        </div>
        <p className="text-sm lg:text-lg lg:w-[60%] py-4 max-lg:text-center">{data.intro}</p>
        <div className="w-full flex flex-col justify-start items-center lg:items-start gap-10 mt-10">
          <h3 className="text-3xl lg:text-5xl font-palanquin max-lg:text-center">{data.experienceTitle}</h3>
          {data.experience.map( item => (
            <div key={item.title} className="w-full flex flex-col gap-4">
              <div className="w-full flex max-lg:flex-col justify-between items-center text-slate-200">
                <p className="max-lg:hidden text-xl font-poppins font-semibold">{item.company} - {item.title}</p>
                <div className="lg:hidden flex flex-col gap-4 justify-center items-center text-xl font-poppins font-semibold">
                  <p>{item.company}</p>
                  <p>{item.title}</p>
                </div>
                <div className="flex w-[300px] justify-center items-center gap-6 max-lg:my-8">
                  <p className="text-right">{item.dateStart}</p>
                  <span>-</span>
                  <p className="text-left">{item.dateEnd}</p>
                </div>
              </div>
              <div className="max:lgw-[60%] text-center lg:text-left w-full text-slate-400">
                <p>{item.description}</p>
              </div>
              <div>
                {item.responsabilities.map( resp => (
                  <div key={resp} className="flex flex-col"> 
                    <p className="my-2 px-4 text-md font-montserrat max-lg:text-sm"> - {resp}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-10 mt-10">
          <h2 className="w-full text-3xl lg:text-5xl max-lg:text-center">{lan === 'ES' ? 'Habilidades' : 'Skills'}</h2>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 mx-auto">
            <div className="w-full flex flex-col justify-start items-start max-lg:mt-6">
              <h3 className="lg:text-4xl text-xl font-semibold">{lan === 'ES' ? 'Fundamentales' : 'Core'}</h3>
              <ul className="">
                    {coreSkills.map( skill => (<li className="max-lg:text-sm mt-2 ml-2" key={skill}>- {skill}</li>))}
              </ul>
            </div>
            <div className="w-full flex flex-col justify-start items-start max-lg:mt-6">
              <h3 className="lg:text-4xl text-xl font-semibold">{lan === 'ES' ? 'Otras' : 'Others'}</h3>
              <ul>
                    {otherSkills.map( skill => (<li className="max-lg:text-sm mt-2 ml-2" key={skill}>- {skill}</li>))}
              </ul>
            </div>
            <div className="w-full flex flex-col justify-start items-start max-lg:mt-6">
              <h3 className="lg:text-4xl text-xl font-semibold">{lan === 'ES' ? 'Blandas' : 'Soft'}</h3>
              <ul>
                    {softSkillsData.map( skill => (<li className="max-lg:text-sm mt-2 ml-2" key={skill}>- {skill}</li>))}
              </ul>
            </div>
          </div>
        </div>
      </div>  
    </motion.div>
  )
}

export default Curriculum