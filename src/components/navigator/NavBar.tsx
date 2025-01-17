import { Link } from "react-router-dom"
import { RiMenu2Fill, RiCloseLine, RiGithubFill, RiLinkedinFill, RiWhatsappLine} from "@remixicon/react"
import { Icon } from "@tremor/react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import logo from '../../assets/imgs/logo-no-background.png'
import { languages, navData } from "../../data/landing"
import useLanguageStore from "../../store/store"

const NavBar = () => {

    const [show, setShow] = useState(false)
    const { lan, select } = useLanguageStore()

    const handleClick = () => {
        setShow(false)
    }

  return (
    <header 
        className="w-full fixed top-0 px-8 z-30">
        <nav className="lg:max-w-[1280px] md:max-w-[1024px] mx-auto flex justify-between items-center">
            <Link to='/'><img className="w-[100px]" src={logo} alt="" /></Link>
            <AnimatePresence>
                <div className="w-full flex flex-col justify-center items-end py-4 relative z-30">
                    <Icon onClick={() => setShow(true)} className="bg-transparent cursor-pointer" size="xl" icon={RiMenu2Fill}/>
                    {show 
                    && 
                    <motion.ul 
                        initial={{opacity: 0, translateX: 200}}
                        whileInView={{opacity: 1, translateX: 0}}   
                        exit={{opacity: 0, translateX: 200}}
                        transition={{duration: 1}}
                        className="lg:w-[30%] w-full h-full fixed top-0 right-0 flex flex-col justify-start items-center py-4 backdrop-blur-xl bg-slate-950/60 gap-12">
                            <Icon onClick={() => setShow(false)} className="cursor-pointer" size="xl" icon={RiCloseLine}/>
                            <Link to='/'><img className="lg:hidden py-4 cursor-pointer w-[100px]" src={logo} alt="" /></Link>
                            {navData.map( nav => (
                                <li onClick={handleClick} className="hover:text-slate-400 lg:text-xl"><Link to={nav.route}>{lan == 'ES' ? nav.titleEs : nav.titleEn}</Link></li>
                            ))}
                            <div className="flex gap-6">
                                {languages.map( language => (
                                    <p onClick={() => select(language.lan)} className={`cursor-pointer  ${language.lan == lan ? 'text-blue-500' : 'hover:text-slate-400'}`}>{language.lan}</p>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <a href="https://github.com/podestal" target="_blank"><Icon icon={RiGithubFill}/></a>
                                <a href="https://www.linkedin.com/in/luis-alberto-rodriguez-podesta-b27bb7108/" target="_blank"><Icon icon={RiLinkedinFill}/></a>
                                <a href="https://wa.me/51973000006" target="_blank"><Icon icon={RiWhatsappLine}/></a>
                            </div>
                    </motion.ul>  
                    }
                </div>
            </AnimatePresence>
            
        </nav>
    </header>
  )
}

export default NavBar