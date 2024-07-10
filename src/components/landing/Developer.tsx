import { Button } from "@tremor/react"
import useLanguageStore from "../../store/store"
import { devData } from "../../data/landing"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Developer = () => {

    const lan = useLanguageStore(s => s.lan)
    const data = lan === 'ES' ? devData.ES : devData.EN

  return (
    <section className="min-h-screen flex flex-col justify-center items-center gap-12 my-10">
        <motion.h2 
            initial={{opacity: 0, translateX: -100}}
            whileInView={{opacity: 1, translateX: 0}}
            transition={{duration: 1.2}}
            className="text-center text-6xl lg:text-8xl">{data.title}</motion.h2>
        <motion.div 
        
        className="w-[80%] lg:h-[100vh] flex max-lg:flex-col justify-center items-center">
            <motion.div 
                initial={{opacity: 0, translateX: -100}}
                whileInView={{opacity: 1, translateX: 0}}
                transition={{duration: 1.2}}
                className="rounded-[100px] border-solid border-sky-400 border-b-[1px] h-[320px] lg:h-[500px] w-full self-start lg:mx-6 flex flex-col justify-center items-center gap-12">
                <h3 className="text-4xl lg:text-6xl">{data.projects}</h3>
                <Button color="blue"><Link to='projects'>{data.buttonText}</Link></Button>
            </motion.div>
            <motion.div 
                initial={{opacity: 0, translateX: 100}}
                whileInView={{opacity: 1, translateX: 0}}
                transition={{duration: 1.2}}
                className="rounded-[100px] border-solid border-sky-400 border-b-[1px] w-[80%] h-[320px] mt-[100px] self-end lg:h-[500px] lg:m-6 flex flex-col justify-center items-center gap-12">
                <h3 className="text-4xl lg:text-6xl">{data.experience}</h3>
                <Button color="blue"><Link to='resume'>{data.buttonText}</Link></Button>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Developer