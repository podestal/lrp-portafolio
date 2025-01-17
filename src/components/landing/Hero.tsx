import {motion, useMotionTemplate, useMotionValue, animate} from 'framer-motion'
import { useEffect } from 'react'
import { heroData } from '../../data/landing'
import useLanguageStore from '../../store/store'

const COLORS = ['#000F47', '#365e32', '#02006c', '#4A249D']

const Hero = () => {

    const color = useMotionValue(COLORS[0])
    const backgroundImage = useMotionTemplate`radial-gradient(145% 125% at 50% 10%, #000, 50%, ${color}`
    const lan = useLanguageStore( s => s.lan)
    const data = lan == 'ES' ? heroData['ES'] : heroData['EN']

    useEffect(() => {
        animate(color, COLORS, {
            ease: 'easeInOut',
            duration: 10,
            repeat: Infinity,
            repeatType: 'mirror'
        })
    }, [])

  return (
    <motion.section
        className="relative w-full min-h-screen py-24 text-slate-50 flex items-center"
        style={{
            backgroundImage: backgroundImage
        }}
    >
        <motion.div 
            initial={{opacity: 0, translateY: 200}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{duration: 1.2}}
            className='max-w-[1280px] overflow-hidden max-md:max-w-[600px] flex flex-col justify-center items-center gap-16 mx-auto'>
            <h2 className='text-center text-5xl lg:text-8xl font-poppins px-4 font-bold lg:font-semibold max-lg:leading-[3.4rem]'>{data.title}</h2>
            <p className='w-[80%] lg:w-[60%] text-center text-lg font-montserrat lg:text-2xl px-4 max-lg:py-6'>{data.description}</p>
        </motion.div>
    </motion.section>
  )
}

export default Hero

// #0e0c54, #02006c