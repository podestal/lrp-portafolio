import useLanguageStore from "../../store/store"
import { aboutData } from "../../data/landing"
// import profilePic from '../../assets/imgs/developer-pic.png'
import { motion } from "framer-motion"

const About = () => {

    const lan = useLanguageStore(s => s.lan)
    const data = lan == 'ES' ? aboutData['ES'] : aboutData['EN']

  return (
    <section className=" relative w-full bg-slate-950">
        <div className="max-lg:flex-col min-h-screen flex justify-center items-center mx-10 lg:mx-auto gap-10 overflow-hidden lg:max-w-[1280px]">
          <motion.div 
              initial={{opacity: 0, translateX: -100}}
              whileInView={{opacity: 1, translateX: 0}}
              transition={{duration: 1.2}}
              className="w-full flex flex-col justify-start items-center gap-6">
              <h2 className="text-5xl lg:text-8xl text-center py-6">{data.title}</h2>
              {/* <p>Profile Picture ...</p> */}
          </motion.div>
          <motion.div 
              initial={{opacity: 0, translateX: 100}}
              whileInView={{opacity: 1, translateX: 0}}
              transition={{duration: 1.2}}
              className="w-full flex flex-col justify-center items-center min-h-screen  gap-6 font-montserrat relative z-20 bg-transparent">
              <h3 className="lg:text-7xl text-4xl">{data.aboutTitle}</h3>
              <p className="text-slate-50 leading-7 lg:leading-8 lg:text-xl font-poppins text-center lg:text-left lg:w-[70%]">{data.description}</p>
              
          </motion.div>
        </div>
        <div className="max-lg:hidden absolute top-0 right-0 bg-slate-900 w-[50%] h-screen z-10"/>
    </section>
  )
}

export default About